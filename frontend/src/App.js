import { useMemo, useState, useCallback, useEffect, useRef } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  Handle,
  Position,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  BaseEdge,
  EdgeLabelRenderer,
  getSmoothStepPath,
  getStraightPath,
  NodeResizer,
} from 'reactflow';
import 'reactflow/dist/style.css';
import '@reactflow/node-resizer/dist/style.css';
import dagre from 'dagre';
import '@/App.css';
import {
  workflowFlow,
  citizenFlow,
  officerFlow,
  screenDetails,
  NODE_COLORS,
} from '@/flowData';

const ALL_SCREEN_DETAILS = { ...screenDetails };

/* ---------------- Edge color palette ---------------- */
const EDGE_COLORS = {
  red:    { stroke: '#E63946', bg: '#FEE2E2', fg: '#7f1d1d' },
  purple: { stroke: '#8B6EEA', bg: '#EDE7FD', fg: '#3B2870' },
  blue:   { stroke: '#3E7BD1', bg: '#DBEAFE', fg: '#0B3A82' },
  green:  { stroke: '#3EAE79', bg: '#D1FAE5', fg: '#0E5B36' },
  orange: { stroke: '#F4A261', bg: '#FEF3C7', fg: '#78350F' },
  gray:   { stroke: '#94a3b8', bg: '#F1F5F9', fg: '#334155' },
};
const DEFAULT_DASHED_COLOR = 'red';

/* ---------------- Auto-layout with dagre ---------------- */
const NODE_W = 200;
const NODE_H = 90;

function autoLayout(nodes, edges, direction = 'LR') {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: direction, nodesep: 60, ranksep: 90, marginx: 40, marginy: 40 });

  nodes.forEach((n) => {
    const w = n.type === 'diamond' ? 180 : NODE_W;
    const h = n.type === 'diamond' ? 180 : NODE_H;
    g.setNode(n.id, { width: w, height: h });
  });
  // Only use forward (non-dashed) edges for layout ranking
  edges.forEach((e) => {
    if (!e.data?.dashed) g.setEdge(e.source, e.target);
  });

  dagre.layout(g);

  return nodes.map((n) => {
    const pos = g.node(n.id);
    return {
      ...n,
      position: { x: pos.x - (pos.width / 2), y: pos.y - (pos.height / 2) },
    };
  });
}

/* ---------------- Custom Node Renderers ---------------- */

const HANDLE_STYLE = {
  width: 12, height: 12, background: '#E63946', border: '2px solid #fff',
  boxShadow: '0 0 0 1.5px #0B1B2B',
  zIndex: 5,
};

const PillNode = ({ data, selected }) => {
  const c = NODE_COLORS[data.kind];
  return (
    <div
      data-testid={`node-${data.id}`}
      style={{
        background: c.bg, color: c.fg,
        border: `2px solid ${selected ? '#0B1B2B' : c.border}`,
        borderRadius: 999, padding: '18px 30px',
        fontWeight: 800, letterSpacing: '0.12em', fontSize: 14,
        boxShadow: selected ? '0 0 0 3px rgba(11,27,43,0.15), 0 8px 20px rgba(0,0,0,0.12)' : '0 8px 20px rgba(0,0,0,0.12)',
        textAlign: 'center', minWidth: 90, width: '100%', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <NodeResizer isVisible={selected} minWidth={90} minHeight={50} lineStyle={{ borderColor: '#0B1B2B' }} handleStyle={{ background: '#E63946', width: 8, height: 8, borderRadius: 2 }} />
      <Handle type="target" position={Position.Left} style={HANDLE_STYLE} />
      {data.label}
      <Handle type="source" position={Position.Right} style={HANDLE_STYLE} />
    </div>
  );
};

const BoxNode = ({ data, selected }) => {
  const c = NODE_COLORS[data.kind];
  return (
    <div
      data-testid={`node-${data.id}`}
      style={{
        background: c.bg, color: c.fg,
        border: `2px solid ${selected ? '#0B1B2B' : c.border}`,
        borderRadius: 14, padding: '14px 18px',
        fontWeight: 600, fontSize: 13, lineHeight: 1.3,
        boxShadow: selected ? '0 0 0 3px rgba(11,27,43,0.15), 0 6px 14px rgba(15,23,42,0.08)' : '0 6px 14px rgba(15, 23, 42, 0.08)',
        minWidth: 150, width: '100%', height: '100%',
        textAlign: 'center',
        whiteSpace: 'pre-line', cursor: 'grab',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <NodeResizer isVisible={selected} minWidth={120} minHeight={60} lineStyle={{ borderColor: '#0B1B2B' }} handleStyle={{ background: '#E63946', width: 8, height: 8, borderRadius: 2 }} />
      <Handle type="target" position={Position.Top}    style={HANDLE_STYLE} id="t" />
      <Handle type="target" position={Position.Left}   style={HANDLE_STYLE} id="l" />
      {data.label}
      <Handle type="source" position={Position.Right}  style={HANDLE_STYLE} id="r" />
      <Handle type="source" position={Position.Bottom} style={HANDLE_STYLE} id="b" />
    </div>
  );
};

const DiamondNode = ({ data, selected }) => {
  const c = NODE_COLORS[data.kind];
  return (
    <div data-testid={`node-${data.id}`} style={{ width: '100%', height: '100%', minWidth: 170, minHeight: 170, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'grab' }}>
      <NodeResizer isVisible={selected} minWidth={140} minHeight={140} keepAspectRatio lineStyle={{ borderColor: '#0B1B2B' }} handleStyle={{ background: '#E63946', width: 8, height: 8, borderRadius: 2 }} />
      <div style={{
        position: 'absolute', inset: 0, background: c.bg,
        border: `2px solid ${selected ? '#0B1B2B' : c.border}`,
        transform: 'rotate(45deg)', borderRadius: 12,
        boxShadow: selected ? '0 0 0 3px rgba(11,27,43,0.15), 0 10px 24px rgba(139,110,234,0.25)' : '0 10px 24px rgba(139, 110, 234, 0.25)',
      }} />
      <div style={{ position: 'relative', color: c.fg, fontWeight: 700, fontSize: 13, textAlign: 'center', whiteSpace: 'pre-line', padding: 10 }}>
        {data.label}
      </div>
      <Handle type="target" position={Position.Top}    style={HANDLE_STYLE} />
      <Handle type="target" position={Position.Left}   style={HANDLE_STYLE} />
      <Handle type="source" position={Position.Right}  style={HANDLE_STYLE} />
      <Handle type="source" position={Position.Bottom} style={HANDLE_STYLE} />
    </div>
  );
};

const nodeTypes = { pill: PillNode, box: BoxNode, diamond: DiamondNode };

/* ---------------- Custom Edge with draggable label ---------------- */

const CustomEdge = ({
  id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition,
  style = {}, label, data = {}, markerEnd,
}) => {
  const rf = useReactFlow();
  const isStraight = data.type === 'straight';
  const [edgePath, midX, midY] = isStraight
    ? getStraightPath({ sourceX, sourceY, targetX, targetY })
    : getSmoothStepPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition, borderRadius: 12 });

  const offset = data.labelOffset || { x: 0, y: 0 };
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, ox: 0, oy: 0 });

  const onLabelMouseDown = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    dragStart.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
    setDragging(true);
  }, [offset.x, offset.y]);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => {
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      const zoom = rf.getZoom ? rf.getZoom() : 1;
      rf.setEdges((eds) => eds.map((ed) => (ed.id === id
        ? { ...ed, data: { ...(ed.data || {}), labelOffset: { x: dragStart.current.ox + dx / zoom, y: dragStart.current.oy + dy / zoom } } }
        : ed)));
    };
    const onUp = () => setDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
  }, [dragging, id, rf]);

  const dashed = !!data.dashed;
  const colorKey = data.colorKey || (dashed ? DEFAULT_DASHED_COLOR : null);
  const palette = colorKey ? EDGE_COLORS[colorKey] : null;

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={style} markerEnd={markerEnd} />
      {label && (
        <EdgeLabelRenderer>
          <div
            data-testid={`edge-label-${id}`}
            onMouseDown={onLabelMouseDown}
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${midX + offset.x}px, ${midY + offset.y}px)`,
              pointerEvents: 'all',
              cursor: dragging ? 'grabbing' : 'grab',
              background: palette ? palette.bg : '#ffffff',
              border: `1px solid ${palette ? palette.stroke : '#e5e7eb'}`,
              padding: '3px 8px',
              borderRadius: 6,
              fontSize: 11,
              fontWeight: 700,
              color: palette ? palette.fg : '#0f172a',
              userSelect: 'none',
              boxShadow: dragging ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
              whiteSpace: 'nowrap',
            }}
            className="nodrag nopan"
            title="Drag to reposition label"
          >
            {label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
};

const edgeTypes = { custom: CustomEdge };

/* ---------------- Mapping helpers ---------------- */

const typeForKind = (kind) => (kind === 'start' || kind === 'end' ? 'pill' : kind === 'decision' ? 'diamond' : 'box');

function toReactFlowNodes(rawNodes) {
  return rawNodes.map((n) => ({
    id: n.id,
    type: typeForKind(n.kind),
    position: { x: n.x, y: n.y },
    data: { label: n.label, kind: n.kind, screen: n.screen, id: n.id },
  }));
}

function styleEdge(e, i) {
  const dashed = !!e.dashed;
  const colorKey = e.colorKey || (dashed ? DEFAULT_DASHED_COLOR : null);
  const stroke = colorKey ? EDGE_COLORS[colorKey].stroke : '#4b5563';
  return {
    id: e.id || `${e.source}->${e.target}-${i}-${Math.random().toString(36).slice(2, 6)}`,
    source: e.source,
    target: e.target,
    label: e.label,
    type: 'custom',
    animated: dashed,
    data: {
      dashed,
      colorKey,
      type: e.type || 'smoothstep',
      labelOffset: e.labelOffset || { x: 0, y: 0 },
    },
    style: {
      stroke,
      strokeWidth: 2,
      strokeDasharray: dashed ? '8 5' : undefined,
      opacity: dashed ? 0.9 : 1,
    },
    markerEnd: { type: MarkerType.ArrowClosed, color: stroke, width: 18, height: 18 },
  };
}

function toReactFlowEdges(rawEdges) {
  return rawEdges.map((e, i) => styleEdge({ source: e.from, target: e.to, label: e.label, type: e.type, dashed: e.dashed, colorKey: e.colorKey }, i));
}

/* ---------------- App Constants ---------------- */

const TABS = [
  { id: 'workflow', label: 'Complete Workflow', flow: workflowFlow },
  { id: 'citizen',  label: 'Citizen Portal',    flow: citizenFlow },
  { id: 'officer',  label: 'Officer Portal',    flow: officerFlow },
];

const LEGEND = [
  { kind: 'start',    text: 'Start' },
  { kind: 'end',      text: 'End' },
  { kind: 'step',     text: 'Citizen / Input step' },
  { kind: 'scrutiny', text: 'Scrutiny / Review' },
  { kind: 'assign',   text: 'Auto-assignment' },
  { kind: 'process',  text: 'Officer action' },
  { kind: 'decision', text: 'Decision' },
  { kind: 'success',  text: 'Success / Order' },
  { kind: 'reject',   text: 'Rejected' },
];

const NODE_KIND_OPTIONS = ['step', 'process', 'scrutiny', 'assign', 'plain', 'decision', 'success', 'reject', 'start', 'end'];

const storageKey = (tabId) => `edarpan-flow:${tabId}:v1`;

function buildInitial(flow) {
  return { nodes: toReactFlowNodes(flow.nodes), edges: toReactFlowEdges(flow.edges) };
}

/* ---------------- Canvas (inside ReactFlowProvider) ---------------- */

function Canvas({ tab, flow, onSelect }) {
  const rf = useReactFlow();
  const wrapperRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await wrapperRef.current?.requestFullscreen?.();
      } else {
        await document.exitFullscreen?.();
      }
    } catch (e) {
      window.alert('Fullscreen not supported: ' + e.message);
    }
  }, []);

  const [nodes, setNodes] = useState(() => {
    const saved = localStorage.getItem(storageKey(tab));
    if (saved) { try { return JSON.parse(saved).nodes; } catch (_) { /* fallthrough */ } }
    return buildInitial(flow).nodes;
  });
  const [edges, setEdges] = useState(() => {
    const saved = localStorage.getItem(storageKey(tab));
    if (saved) { try { return JSON.parse(saved).edges; } catch (_) { /* fallthrough */ } }
    return buildInitial(flow).edges;
  });

  // Persist to localStorage on any change
  useEffect(() => {
    localStorage.setItem(storageKey(tab), JSON.stringify({ nodes, edges }));
  }, [nodes, edges, tab]);

  // If tab changes, we already remount because <Canvas key={tab}/> below,
  // so this is only for safety.

  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
  const onConnect     = useCallback((params) => {
    setEdges((eds) => addEdge(
      styleEdge({ source: params.source, target: params.target, label: '', type: 'smoothstep', dashed: false }, eds.length),
      eds,
    ));
  }, []);

  const onNodeClick = useCallback((_evt, node) => {
    const screenKey = node.data?.screen;
    if (screenKey && ALL_SCREEN_DETAILS[screenKey]) {
      onSelect({ key: screenKey, ...ALL_SCREEN_DETAILS[screenKey] });
    } else {
      onSelect(null);
    }
  }, [onSelect]);

  const onNodeDoubleClick = useCallback((_e, node) => {
    const next = window.prompt('Edit node label (use \\n for line break):', node.data.label.replace(/\n/g, '\\n'));
    if (next === null) return;
    const label = next.replace(/\\n/g, '\n');
    setNodes((nds) => nds.map((n) => (n.id === node.id ? { ...n, data: { ...n.data, label } } : n)));
  }, []);

  const onEdgeDoubleClick = useCallback((_e, edge) => {
    const next = window.prompt('Edit edge label:', edge.label || '');
    if (next === null) return;
    setEdges((eds) => eds.map((ed) => (ed.id === edge.id ? { ...ed, label: next } : ed)));
  }, []);

  /* Toolbar actions */
  const addNode = useCallback((kind) => {
    const id = `n_${Date.now()}`;
    const center = rf.screenToFlowPosition
      ? rf.screenToFlowPosition({ x: window.innerWidth / 2 - 200, y: window.innerHeight / 2 - 100 })
      : { x: 200, y: 200 };
    const newNode = {
      id, type: typeForKind(kind),
      position: { x: center.x, y: center.y },
      data: { label: 'New Node', kind, id },
    };
    setNodes((nds) => [...nds, newNode]);
  }, [rf]);

  const deleteSelected = useCallback(() => {
    setNodes((nds) => nds.filter((n) => !n.selected));
    setEdges((eds) => eds.filter((e) => !e.selected && !nodes.find((n) => n.selected && (n.id === e.source || n.id === e.target))));
  }, [nodes]);

  const resetFlow = useCallback(() => {
    if (!window.confirm('Reset this diagram to the original? Your edits on this tab will be lost.')) return;
    const init = buildInitial(flow);
    setNodes(init.nodes);
    setEdges(init.edges);
    localStorage.removeItem(storageKey(tab));
  }, [flow, tab]);

  const exportJSON = useCallback(() => {
    const blob = new Blob([JSON.stringify({ nodes, edges }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `edarpan-flow-${tab}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [nodes, edges, tab]);

  const importJSON = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const parsed = JSON.parse(text);
        if (!parsed.nodes || !parsed.edges) throw new Error('Invalid file');
        setNodes(parsed.nodes);
        setEdges(parsed.edges);
      } catch (err) {
        window.alert('Could not import: ' + err.message);
      }
    };
    input.click();
  }, []);

  const changeKindOfSelected = useCallback((kind) => {
    setNodes((nds) => nds.map((n) => (n.selected ? { ...n, type: typeForKind(kind), data: { ...n.data, kind } } : n)));
  }, []);

  /* Auto-layout using dagre */
  const runAutoLayout = useCallback((direction) => {
    setNodes((nds) => {
      const laid = autoLayout(nds, edges, direction);
      return laid;
    });
    // Refit after DOM paint
    setTimeout(() => rf.fitView?.({ padding: 0.15, duration: 400 }), 60);
  }, [edges, rf]);

  /* Edge actions on selected edges */
  const applyEdgeColorAndDash = useCallback((edge, dashed, colorKey) => {
    const stroke = colorKey ? EDGE_COLORS[colorKey].stroke : '#4b5563';
    return {
      ...edge,
      animated: dashed,
      data: { ...(edge.data || {}), dashed, colorKey },
      style: {
        ...(edge.style || {}),
        stroke,
        strokeWidth: 2,
        strokeDasharray: dashed ? '8 5' : undefined,
        opacity: dashed ? 0.9 : 1,
      },
      markerEnd: { type: MarkerType.ArrowClosed, color: stroke, width: 18, height: 18 },
    };
  }, []);

  const toggleDashedOnSelected = useCallback(() => {
    setEdges((eds) => eds.map((e) => {
      if (!e.selected) return e;
      const dashed = !e.data?.dashed;
      const colorKey = dashed ? (e.data?.colorKey || DEFAULT_DASHED_COLOR) : null;
      return applyEdgeColorAndDash(e, dashed, colorKey);
    }));
  }, [applyEdgeColorAndDash]);

  const setColorOnSelected = useCallback((colorKey) => {
    setEdges((eds) => eds.map((e) => {
      if (!e.selected) return e;
      const dashed = !!e.data?.dashed || true; // enabling color implies dashed
      return applyEdgeColorAndDash(e, dashed, colorKey);
    }));
  }, [applyEdgeColorAndDash]);

  const reverseSelectedEdge = useCallback(() => {
    setEdges((eds) => eds.map((e) => (e.selected ? { ...e, source: e.target, target: e.source, sourceHandle: e.targetHandle, targetHandle: e.sourceHandle } : e)));
  }, []);

  const resetLabelOffsetOnSelected = useCallback(() => {
    setEdges((eds) => eds.map((e) => (e.selected ? { ...e, data: { ...(e.data || {}), labelOffset: { x: 0, y: 0 } } } : e)));
  }, []);

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '100%', height: '100%', background: '#FFFFFF' }}>
      {/* Floating toolbar */}
      <div
        data-testid="editor-toolbar"
        style={{
          position: 'absolute', top: 14, left: 14, zIndex: 10,
          display: 'flex', gap: 8, flexWrap: 'wrap',
          background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(6px)',
          border: '1px solid #E5E1D8', borderRadius: 14,
          padding: 8, boxShadow: '0 10px 24px rgba(11,27,43,0.08)',
        }}
      >
        <ToolbarLabel>Add node:</ToolbarLabel>
        {['step', 'process', 'scrutiny', 'decision', 'success', 'reject'].map((k) => (
          <button
            key={k}
            data-testid={`add-node-${k}`}
            onClick={() => addNode(k)}
            className="text-xs font-semibold"
            style={{
              padding: '5px 10px', borderRadius: 999,
              background: NODE_COLORS[k].bg, color: NODE_COLORS[k].fg,
              border: `1.5px solid ${NODE_COLORS[k].border}`,
            }}
          >
            + {k}
          </button>
        ))}
        <Divider />
        <ToolbarLabel>Selected:</ToolbarLabel>
        <select
          data-testid="kind-selector"
          onChange={(e) => changeKindOfSelected(e.target.value)}
          defaultValue=""
          style={{ fontSize: 12, padding: '4px 8px', border: '1px solid #E5E1D8', borderRadius: 8, background: '#fff' }}
        >
          <option value="" disabled>change kind…</option>
          {NODE_KIND_OPTIONS.map((k) => <option key={k} value={k}>{k}</option>)}
        </select>
        <button
          data-testid="delete-selected"
          onClick={deleteSelected}
          className="text-xs font-semibold"
          style={{ padding: '5px 10px', borderRadius: 8, background: '#fee2e2', color: '#991b1b', border: '1px solid #fca5a5' }}
        >
          Delete
        </button>
        <Divider />
        <ToolbarLabel>Edge:</ToolbarLabel>
        <button
          data-testid="toggle-dashed"
          onClick={toggleDashedOnSelected}
          title="Toggle dashed / return style on the selected edge"
          className="text-xs font-semibold"
          style={{
            padding: '5px 10px', borderRadius: 8,
            background: '#FEE2E2', color: '#7f1d1d',
            border: '1.5px dashed #E63946',
          }}
        >
          ⇢ Toggle dashed
        </button>
        <button
          data-testid="reverse-edge"
          onClick={reverseSelectedEdge}
          title="Reverse direction of the selected edge"
          className="text-xs font-semibold"
          style={{
            padding: '5px 10px', borderRadius: 8,
            background: '#F5F1EA', color: '#0B1B2B',
            border: '1px solid #0B1B2B',
          }}
        >
          ⇄ Reverse
        </button>
        <button
          data-testid="reset-label"
          onClick={resetLabelOffsetOnSelected}
          title="Snap label back to the middle of the edge"
          className="text-xs font-semibold"
          style={{
            padding: '5px 10px', borderRadius: 8,
            background: '#F5F1EA', color: '#0B1B2B',
            border: '1px solid #E5E1D8',
          }}
        >
          ↺ Center label
        </button>
        <Divider />
        <ToolbarLabel>Color:</ToolbarLabel>
        {Object.entries(EDGE_COLORS).map(([key, c]) => (
          <button
            key={key}
            data-testid={`edge-color-${key}`}
            onClick={() => setColorOnSelected(key)}
            title={`Set selected edge color to ${key}`}
            style={{
              width: 22, height: 22, borderRadius: 999,
              background: c.stroke, border: '2px solid #ffffff',
              boxShadow: `0 0 0 1.5px ${c.stroke}, 0 1px 3px rgba(0,0,0,0.15)`,
              cursor: 'pointer',
            }}
          />
        ))}
        <Divider />
        <ToolbarLabel>Layout:</ToolbarLabel>
        <button
          data-testid="auto-layout-lr"
          onClick={() => runAutoLayout('LR')}
          title="Auto-layout left → right"
          className="text-xs font-semibold"
          style={{ padding: '5px 10px', borderRadius: 8, background: '#0B1B2B', color: '#F5F1EA', border: '1px solid #0B1B2B' }}
        >
          Auto ⇥
        </button>
        <button
          data-testid="auto-layout-tb"
          onClick={() => runAutoLayout('TB')}
          title="Auto-layout top → bottom"
          className="text-xs font-semibold"
          style={{ padding: '5px 10px', borderRadius: 8, background: '#F5F1EA', color: '#0B1B2B', border: '1px solid #0B1B2B' }}
        >
          Auto ⇩
        </button>
        <Divider />
        <button
          data-testid="export-json"
          onClick={exportJSON}
          className="text-xs font-semibold"
          style={{ padding: '5px 10px', borderRadius: 8, background: '#0B1B2B', color: '#F5F1EA', border: '1px solid #0B1B2B' }}
        >
          Export JSON
        </button>
        <button
          data-testid="import-json"
          onClick={importJSON}
          className="text-xs font-semibold"
          style={{ padding: '5px 10px', borderRadius: 8, background: '#F5F1EA', color: '#0B1B2B', border: '1px solid #0B1B2B' }}
        >
          Import JSON
        </button>
        <button
          data-testid="reset-flow"
          onClick={resetFlow}
          className="text-xs font-semibold"
          style={{ padding: '5px 10px', borderRadius: 8, background: '#F5F1EA', color: '#0B1B2B', border: '1px solid #E5E1D8' }}
        >
          Reset
        </button>
        <Divider />
        <button
          data-testid="fullscreen-toggle"
          onClick={toggleFullscreen}
          title={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Fullscreen'}
          className="text-xs font-semibold"
          style={{
            padding: '5px 10px', borderRadius: 8,
            background: isFullscreen ? '#0B1B2B' : '#F5F1EA',
            color: isFullscreen ? '#F5F1EA' : '#0B1B2B',
            border: `1px solid ${isFullscreen ? '#0B1B2B' : '#E5E1D8'}`,
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}
        >
          {isFullscreen ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v4a1 1 0 0 1-1 1H3"/><path d="M16 3v4a1 1 0 0 0 1 1h4"/><path d="M8 21v-4a1 1 0 0 0-1-1H3"/><path d="M16 21v-4a1 1 0 0 1 1-1h4"/></svg>
              Exit Fullscreen
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8V5a2 2 0 0 1 2-2h3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M21 16v3a2 2 0 0 1-2 2h-3"/></svg>
              Fullscreen
            </>
          )}
        </button>
      </div>

      {/* Helper hint */}
      <div style={{
        position: 'absolute', bottom: 14, left: 60, zIndex: 10,
        fontSize: 11, color: '#4b5563',
        background: 'rgba(255,255,255,0.9)', padding: '5px 10px',
        borderRadius: 999, border: '1px solid #E5E1D8',
      }}>
        Drag node to move · Drag corner handle to resize · Double-click to rename · Drag from red dot to connect · Drag edge label to reposition · Pick a color to change dashed style
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        onEdgeDoubleClick={onEdgeDoubleClick}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        proOptions={{ hideAttribution: true }}
        minZoom={0.2}
        maxZoom={1.6}
        deleteKeyCode={['Backspace', 'Delete']}
      >
        <Background gap={24} size={1.5} color="#E5E1D8" />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}

const ToolbarLabel = ({ children }) => (
  <span style={{ fontSize: 11, letterSpacing: '0.12em', color: '#6b7280', fontWeight: 700, alignSelf: 'center', paddingLeft: 4 }}>
    {children}
  </span>
);
const Divider = () => <span style={{ width: 1, background: '#E5E1D8', margin: '0 4px' }} />;

/* ---------------- App ---------------- */

function App() {
  const [tab, setTab] = useState('workflow');
  const [selected, setSelected] = useState(null);
  const flow = useMemo(() => TABS.find((t) => t.id === tab).flow, [tab]);

  // Clear selection when switching tabs
  useEffect(() => { setSelected(null); }, [tab]);

  return (
    <div className="min-h-screen w-full" style={{ background: '#F5F1EA', fontFamily: '"IBM Plex Sans", "Instrument Sans", system-ui, sans-serif' }}>
      <header
        data-testid="app-header"
        className="px-8 py-5 flex items-center justify-between border-b"
        style={{ background: '#0B1B2B', color: '#F5F1EA', borderColor: '#0a1522' }}
      >
        <div className="flex items-center gap-3">
          <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg,#E63946,#F4A261)', display: 'grid', placeItems: 'center', fontWeight: 900, color: '#fff' }}>
            eD
          </div>
          <div>
            <div style={{ fontFamily: '"Fraunces", "Playfair Display", serif', fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em' }}>
              e-Darpan · UX Flow
            </div>
            <div style={{ fontSize: 12, opacity: 0.7 }}>
              Editable · drag, rename, connect · auto-saved to your browser
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-1 p-1 rounded-full" style={{ background: '#132a41' }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              data-testid={`tab-${t.id}`}
              onClick={() => setTab(t.id)}
              className="px-4 py-2 text-sm rounded-full transition-all"
              style={{
                background: tab === t.id ? '#F5F1EA' : 'transparent',
                color:      tab === t.id ? '#0B1B2B' : '#cbd5e1',
                fontWeight: tab === t.id ? 700 : 500,
              }}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <div className="px-8 pt-6 pb-3 flex items-end justify-between">
        <div>
          <h1 style={{ fontFamily: '"Fraunces", serif', fontSize: 30, fontWeight: 700, color: '#0B1B2B', letterSpacing: '-0.02em' }} data-testid="flow-title">
            {flow.title}
          </h1>
          <p style={{ color: '#4b5563', fontSize: 14, marginTop: 4 }} data-testid="flow-subtitle">
            {flow.subtitle}
          </p>
        </div>
        <div className="text-xs" style={{ color: '#6b7280' }}>
          Auto-saved locally · switch tabs to work on other flows
        </div>
      </div>

      <div className="px-8 pb-8 flex gap-6">
        <div
          data-testid="flow-canvas"
          style={{
            flex: 1, height: '78vh', background: '#FFFFFF',
            border: '1px solid #E5E1D8', borderRadius: 20,
            boxShadow: '0 20px 60px rgba(11,27,43,0.08)', overflow: 'hidden',
          }}
        >
          <ReactFlowProvider>
            {/* key ensures fresh state per tab */}
            <Canvas key={tab} tab={tab} flow={flow} onSelect={setSelected} />
          </ReactFlowProvider>
        </div>

        <aside
          data-testid="side-panel"
          style={{
            width: 320, height: '78vh', background: '#FFFFFF',
            border: '1px solid #E5E1D8', borderRadius: 20, padding: 20,
            display: 'flex', flexDirection: 'column', gap: 16,
            boxShadow: '0 20px 60px rgba(11,27,43,0.08)',
          }}
        >
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.16em', color: '#6b7280', fontWeight: 700 }}>LEGEND</div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {LEGEND.map((l) => {
                const c = NODE_COLORS[l.kind];
                return (
                  <div key={l.kind} className="flex items-center gap-2" data-testid={`legend-${l.kind}`}>
                    <div style={{ width: 14, height: 14, borderRadius: 4, background: c.bg, border: `1.5px solid ${c.border}` }} />
                    <span style={{ fontSize: 12, color: '#1f2937' }}>{l.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ height: 1, background: '#E5E1D8' }} />

          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.16em', color: '#6b7280', fontWeight: 700 }}>HOW TO EDIT</div>
            <ul style={{ marginTop: 8, paddingLeft: 18, fontSize: 12.5, color: '#111827', lineHeight: 1.65 }}>
              <li><b>Drag</b> a node to reposition</li>
              <li><b>Double-click</b> a node or edge to rename</li>
              <li><b>Drag from a dot</b> on a node to create a new connection</li>
              <li>Click to select, press <b>Delete</b> to remove</li>
              <li>Use toolbar to add nodes, change kind, export JSON, reset</li>
            </ul>
          </div>

          <div style={{ height: 1, background: '#E5E1D8' }} />

          <div style={{ flex: 1, overflow: 'auto' }}>
            <div style={{ fontSize: 11, letterSpacing: '0.16em', color: '#6b7280', fontWeight: 700 }}>SCREEN DETAILS</div>
            {selected ? (
              <div className="mt-3" data-testid="screen-detail">
                <div style={{ fontFamily: '"Fraunces", serif', fontSize: 20, fontWeight: 700, color: '#0B1B2B', lineHeight: 1.2 }} data-testid="screen-detail-title">
                  {selected.title}
                </div>
                <div style={{ display: 'inline-block', marginTop: 8, padding: '3px 10px', borderRadius: 999, background: '#F5F1EA', color: '#0B1B2B', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em' }}>
                  {selected.role.toUpperCase()}
                </div>
                <p style={{ marginTop: 12, fontSize: 13, color: '#374151', lineHeight: 1.55 }}>{selected.purpose}</p>
                <div style={{ marginTop: 14, fontSize: 11, letterSpacing: '0.14em', color: '#6b7280', fontWeight: 700 }}>KEY ACTIONS</div>
                <ul style={{ marginTop: 6, paddingLeft: 18, fontSize: 13, color: '#111827', lineHeight: 1.6 }}>
                  {selected.actions.map((a, i) => (<li key={i}>{a}</li>))}
                </ul>
              </div>
            ) : (
              <div className="mt-3" style={{ border: '1px dashed #D6D0C4', borderRadius: 12, padding: 16, color: '#6b7280', fontSize: 13, lineHeight: 1.5 }}>
                Click any coloured node to see its purpose, role and the actions available on that screen. Newly added nodes have no linked screen.
              </div>
            )}
          </div>

          <div style={{ fontSize: 11, color: '#94a3b8' }}>
            Source: <code>e-darpan-citizen-portal.html</code> · <code>e-darpan-officer-portal.html</code>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
