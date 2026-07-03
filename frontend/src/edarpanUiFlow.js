// e-Darpan UI flow — derived from the user-supplied HTML
// (e-darpan-ux-flow-diagram-edited.html) 5-role lane layout with AI layer + query loops.
//
// Lane Y coordinates (rows):
//   Citizen : 40
//   ASST    : 240
//   LRS     : 440
//   LRA     : 640
//   CO      : 840

const LANE = { citizen: 40, asst: 240, lrs: 440, lra: 640, co: 840 };

export const edarpanUiFlow = {
  title: 'e-Darpan UI Flow',
  subtitle: '5-lane workflow: Citizen · ASST · LRS · LRA · CO — with AI chatbot layer, query loops and purpose-based routing',
  nodes: [
    // ---------------- START / END pills ----------------
    { id: 'ui-start', kind: 'start', label: 'START', x: 20, y: LANE.citizen },
    { id: 'ui-end',   kind: 'end',   label: 'END',   x: 2820, y: LANE.co },

    // ---------------- Citizen lane ----------------
    { id: 'ui-login',       kind: 'step',    label: 'Login /\nNew Registration',      x:  180, y: LANE.citizen, screen: 'ui-login' },
    { id: 'ui-chat-c',      kind: 'plain',   label: 'AI Chatbot\nAssistance',           x:  420, y: LANE.citizen, screen: 'ui-chatbot-citizen' },
    { id: 'ui-submit',      kind: 'step',    label: 'Submit New\nApplication',          x:  660, y: LANE.citizen, screen: 'ui-submit-app' },
    { id: 'ui-track',       kind: 'step',    label: 'Track Case\nStatus',               x:  900, y: LANE.citizen, screen: 'ui-track' },
    { id: 'ui-summary-c',   kind: 'plain',   label: 'AI Summary\n& Key Points',         x: 1140, y: LANE.citizen, screen: 'ui-summary' },
    { id: 'ui-respond',     kind: 'step',    label: 'Respond to\nOfficer Query',        x: 1380, y: LANE.citizen, screen: 'ui-respond-query' },
    { id: 'ui-final',       kind: 'success', label: 'Receive\nFinal Order',             x: 2620, y: LANE.citizen, screen: 'ui-final-order' },

    // ---------------- ASST lane ----------------
    { id: 'ui-chat-asst',   kind: 'plain',    label: 'AI Chatbot +\nCase Summary',      x:  180, y: LANE.asst,    screen: 'ui-asst-ai' },
    { id: 'ui-asst-dash',   kind: 'assign',   label: 'ASST\nDashboard',                  x:  420, y: LANE.asst,    screen: 'ui-asst-dashboard' },
    { id: 'ui-asst-scr',    kind: 'scrutiny', label: 'Preliminary\nScrutiny',            x:  660, y: LANE.asst,    screen: 'ui-asst-scrutiny' },
    { id: 'ui-asst-query',  kind: 'reject',   label: 'Query to\nCitizen',                x:  900, y: LANE.asst,    screen: 'ui-asst-query' },
    { id: 'ui-asst-reg',    kind: 'process',  label: 'Register\ne-Darpan Cases',         x: 1140, y: LANE.asst,    screen: 'ui-asst-register' },
    { id: 'ui-route',       kind: 'decision', label: 'Purpose-Based\nRouting',           x: 1420, y: LANE.asst,    screen: 'ui-routing' },

    // ---------------- LRS lane ----------------
    { id: 'ui-chat-lrs',    kind: 'plain',    label: 'AI Chatbot +\nCase Summary',      x:  180, y: LANE.lrs,     screen: 'ui-lrs-ai' },
    { id: 'ui-lrs-dash',    kind: 'assign',   label: 'LRS\nDashboard',                   x:  420, y: LANE.lrs,     screen: 'ui-lrs-dashboard' },
    { id: 'ui-lrs-review',  kind: 'scrutiny', label: 'Review ASST\nScrutiny',            x:  660, y: LANE.lrs,     screen: 'ui-lrs-review' },
    { id: 'ui-lrs-query',   kind: 'reject',   label: 'Query to\nCitizen',                x:  900, y: LANE.lrs,     screen: 'ui-lrs-query' },
    { id: 'ui-lrs-assign',  kind: 'process',  label: 'Assign Case\nto LRA',              x: 1140, y: LANE.lrs,     screen: 'ui-lrs-assign' },

    // ---------------- LRA lane ----------------
    { id: 'ui-chat-lra',    kind: 'plain',    label: 'AI Chatbot +\nCase Summary',      x:  180, y: LANE.lra,     screen: 'ui-lra-ai' },
    { id: 'ui-lra-dash',    kind: 'assign',   label: 'LRA\nDashboard',                   x:  420, y: LANE.lra,     screen: 'ui-lra-dashboard' },
    { id: 'ui-lra-verify',  kind: 'process',  label: 'LRA Field\nVerification',          x:  660, y: LANE.lra,     screen: 'ui-lra-verify' },
    { id: 'ui-lra-query',   kind: 'reject',   label: 'Query to\nCitizen',                x:  900, y: LANE.lra,     screen: 'ui-lra-query' },
    { id: 'ui-lra-report',  kind: 'process',  label: 'LRA Report\n(Photos + Remarks)',   x: 1140, y: LANE.lra,     screen: 'ui-lra-report' },

    // ---------------- CO lane ----------------
    { id: 'ui-chat-co',     kind: 'plain',    label: 'AI Chatbot +\nCase Summary',      x:  180, y: LANE.co,      screen: 'ui-co-ai' },
    { id: 'ui-co-dash',     kind: 'assign',   label: 'CO\nDashboard',                    x:  420, y: LANE.co,      screen: 'ui-co-dashboard' },
    { id: 'ui-co-review',   kind: 'scrutiny', label: 'Review\nApplications',             x:  660, y: LANE.co,      screen: 'ui-co-review' },
    { id: 'ui-co-query',    kind: 'reject',   label: 'Query to\nCitizen',                x:  900, y: LANE.co,      screen: 'ui-co-query' },
    { id: 'ui-co-transfer', kind: 'scrutiny', label: 'Transfer /\nReassignment',         x: 1140, y: LANE.co,      screen: 'ui-co-transfer' },
    { id: 'ui-co-closure',  kind: 'decision', label: 'Case\nClosure',                    x: 1420, y: LANE.co,      screen: 'ui-co-closure' },
    { id: 'ui-notif',       kind: 'success',  label: 'Final Notification\n(PDF + SMS)',  x: 2620, y: LANE.co,      screen: 'ui-final-notif' },
  ],
  edges: [
    // START into Citizen login
    { from: 'ui-start',       to: 'ui-login',        type: 'straight' },

    // Citizen path
    { from: 'ui-login',       to: 'ui-chat-c',       label: 'Help',              type: 'smoothstep', dashed: true, colorKey: 'purple' },
    { from: 'ui-login',       to: 'ui-submit',       label: 'Continue',          type: 'smoothstep' },
    { from: 'ui-submit',      to: 'ui-track',        label: 'Submitted',         type: 'smoothstep' },
    { from: 'ui-track',       to: 'ui-summary-c',    label: 'AI overview',       type: 'smoothstep', dashed: true, colorKey: 'purple' },
    { from: 'ui-track',       to: 'ui-respond',      label: 'On query',          type: 'smoothstep' },

    // Citizen submits → ASST scrutiny (via ASST dashboard)
    { from: 'ui-submit',      to: 'ui-asst-dash',    label: 'New application',   type: 'smoothstep' },
    { from: 'ui-asst-dash',   to: 'ui-asst-scr',     label: 'Open case',         type: 'smoothstep' },

    // ASST scrutiny options
    { from: 'ui-asst-scr',    to: 'ui-asst-query',   label: 'Send query',        type: 'smoothstep', dashed: true, colorKey: 'orange' },
    { from: 'ui-asst-scr',    to: 'ui-route',        label: 'Forward',           type: 'smoothstep' },
    { from: 'ui-asst-scr',    to: 'ui-asst-reg',     label: 'Internal case',     type: 'smoothstep', dashed: true, colorKey: 'blue' },
    { from: 'ui-asst-reg',    to: 'ui-route',        label: 'Register & route',  type: 'smoothstep' },

    // ASST AI chatbot support
    { from: 'ui-chat-asst',   to: 'ui-asst-dash',    label: 'AI assist',         type: 'smoothstep', dashed: true, colorKey: 'purple' },

    // Query loop ASST ↔ Citizen
    { from: 'ui-asst-query',  to: 'ui-respond',      label: 'SMS/WhatsApp',      type: 'smoothstep', dashed: true, colorKey: 'orange' },
    { from: 'ui-respond',     to: 'ui-asst-scr',     label: 'Citizen reply',     type: 'smoothstep', dashed: true, colorKey: 'green' },

    // Routing → LRS or straight to CO
    { from: 'ui-route',       to: 'ui-lrs-dash',     label: 'Needs LRA',         type: 'smoothstep' },
    { from: 'ui-route',       to: 'ui-co-dash',      label: 'ASST → CO',         type: 'smoothstep', dashed: true, colorKey: 'blue' },

    // LRS lane
    { from: 'ui-chat-lrs',    to: 'ui-lrs-dash',     label: 'AI assist',         type: 'smoothstep', dashed: true, colorKey: 'purple' },
    { from: 'ui-lrs-dash',    to: 'ui-lrs-review',   label: 'Open case',         type: 'smoothstep' },
    { from: 'ui-lrs-review',  to: 'ui-lrs-query',    label: 'Send query',        type: 'smoothstep', dashed: true, colorKey: 'orange' },
    { from: 'ui-lrs-review',  to: 'ui-lrs-assign',   label: 'Assign LRA',        type: 'smoothstep' },
    { from: 'ui-lrs-query',   to: 'ui-respond',      label: 'SMS/WhatsApp',      type: 'smoothstep', dashed: true, colorKey: 'orange' },
    { from: 'ui-respond',     to: 'ui-lrs-review',   label: 'Citizen reply',     type: 'smoothstep', dashed: true, colorKey: 'green' },

    // LRA lane
    { from: 'ui-lrs-assign',  to: 'ui-lra-dash',     label: 'Notify LRA',        type: 'smoothstep' },
    { from: 'ui-chat-lra',    to: 'ui-lra-dash',     label: 'AI assist',         type: 'smoothstep', dashed: true, colorKey: 'purple' },
    { from: 'ui-lra-dash',    to: 'ui-lra-verify',   label: 'Open assignment',   type: 'smoothstep' },
    { from: 'ui-lra-verify',  to: 'ui-lra-query',    label: 'Send query',        type: 'smoothstep', dashed: true, colorKey: 'orange' },
    { from: 'ui-lra-verify',  to: 'ui-lra-report',   label: 'Field done',        type: 'smoothstep' },
    { from: 'ui-lra-query',   to: 'ui-respond',      label: 'SMS/WhatsApp',      type: 'smoothstep', dashed: true, colorKey: 'orange' },
    { from: 'ui-respond',     to: 'ui-lra-verify',   label: 'Citizen reply',     type: 'smoothstep', dashed: true, colorKey: 'green' },
    { from: 'ui-lra-report',  to: 'ui-co-dash',      label: 'Report → CO',       type: 'smoothstep' },

    // CO lane
    { from: 'ui-chat-co',     to: 'ui-co-dash',      label: 'AI assist',         type: 'smoothstep', dashed: true, colorKey: 'purple' },
    { from: 'ui-co-dash',     to: 'ui-co-review',    label: 'Open case',         type: 'smoothstep' },
    { from: 'ui-co-review',   to: 'ui-co-query',     label: 'Send query',        type: 'smoothstep', dashed: true, colorKey: 'orange' },
    { from: 'ui-co-review',   to: 'ui-co-transfer',  label: 'SLA breach',        type: 'smoothstep', dashed: true, colorKey: 'red' },
    { from: 'ui-co-transfer', to: 'ui-lra-dash',     label: 'Reassign LRA',      type: 'smoothstep', dashed: true, colorKey: 'red' },
    { from: 'ui-co-review',   to: 'ui-co-closure',   label: 'Close case',        type: 'smoothstep' },
    { from: 'ui-co-query',    to: 'ui-respond',      label: 'SMS/WhatsApp',      type: 'smoothstep', dashed: true, colorKey: 'orange' },
    { from: 'ui-respond',     to: 'ui-co-review',    label: 'Citizen reply',     type: 'smoothstep', dashed: true, colorKey: 'green' },

    // Closure → notifications & downloads
    { from: 'ui-co-closure',  to: 'ui-notif',        label: 'Approve / Reject',  type: 'smoothstep' },
    { from: 'ui-notif',       to: 'ui-final',        label: 'PDF + SMS',         type: 'smoothstep', dashed: true, colorKey: 'green' },
    { from: 'ui-final',       to: 'ui-end',          type: 'straight' },
    { from: 'ui-notif',       to: 'ui-end',          type: 'straight' },
  ],
};

// ---------------- SCREEN DETAILS for the new flow ----------------
export const edarpanUiScreenDetails = {
  'ui-login':            { title: 'Login / New Registration',   role: 'Citizen',         purpose: 'Mobile OTP based login, bilingual UI, also accessible via Sewa-Setu portal.',                            actions: ['Enter mobile number', 'Verify OTP', 'Create / Access account'] },
  'ui-chatbot-citizen':  { title: 'AI Chatbot — Citizen',        role: 'Citizen',         purpose: 'Understand required documents, application process, case status, query response, order download.',   actions: ['Ask chatbot', 'Get step-by-step help', 'Fetch case status'] },
  'ui-submit-app':       { title: 'Submit New Application',      role: 'Citizen',         purpose: 'Fill applicant details, purpose, district, circle office; upload documents with AI auto-completion.', actions: ['Fill details', 'Upload documents', 'AI remark auto-complete', 'Submit', 'Receive WhatsApp/SMS'] },
  'ui-track':            { title: 'Track Case Status',           role: 'Citizen',         purpose: 'Dashboard: case number, submitted date, current stage, action-required, in-progress, completed.',  actions: ['View timeline', 'Filter by status', 'Open case card'] },
  'ui-summary':          { title: 'AI Summary & Key Points',     role: 'Citizen',         purpose: 'Every case view shows AI summary, current action required, key dates, pending docs.',             actions: ['View AI summary', 'See action required', 'View key dates'] },
  'ui-respond-query':    { title: 'Respond to Officer Query',    role: 'Citizen',         purpose: 'Upload missing/clear docs and post remarks; response reaches the concerned officer.',              actions: ['Read officer query', 'Upload documents', 'Submit remarks', 'Get SMS/WhatsApp'] },
  'ui-final-order':      { title: 'Receive Final Order',         role: 'Citizen',         purpose: 'Download final order PDF and application receipt after CO decision.',                              actions: ['Download PDF', 'Download receipt', 'View SMS acknowledgement'] },

  'ui-asst-ai':          { title: 'AI Chatbot + Case Summary',   role: 'Dealing Assistant', purpose: 'AI highlights missing docs, citizen remarks, category, SLA status, recommended scrutiny focus.', actions: ['Ask chatbot', 'View AI key points', 'View SLA status'] },
  'ui-asst-dashboard':   { title: 'ASST Dashboard',              role: 'Dealing Assistant', purpose: 'New, pending, returned/query and internally-registered cases; citizen query replies.',           actions: ['Filter cases', 'Open case', 'Register new (internal)'] },
  'ui-asst-scrutiny':    { title: 'Preliminary Scrutiny',        role: 'Dealing Assistant', purpose: 'Verify application details.',                                                                        actions: ['Forward', 'Reject', 'Query citizen / return incomplete'] },
  'ui-asst-query':       { title: 'ASST Query to Citizen',       role: 'Dealing Assistant', purpose: 'Ask citizen for more details or documents; response comes back to ASST case view.',              actions: ['Compose query', 'Attach doc list', 'Send SMS/WhatsApp'] },
  'ui-asst-register':    { title: 'Register e-Darpan Case',      role: 'Dealing Assistant', purpose: 'Register a walk-in / internal case; applicant gets WhatsApp/SMS acknowledgement.',                actions: ['Fill applicant details', 'Register & Acknowledge', 'Cancel'] },
  'ui-routing':          { title: 'Purpose-Based Routing',       role: 'System',            purpose: 'Category decides: ASST→CO · Citizen→ASST→CO · Citizen→ASST→LRS→LRA→CO · ASST→LRS→LRA→CO.',       actions: ['Route to CO', 'Route via LRS + LRA'] },

  'ui-lrs-ai':           { title: 'AI Chatbot + Case Summary',   role: 'Land Records Supervisor', purpose: 'AI shows scrutiny observations, doc readiness, priority, workload, recommended next action.', actions: ['Ask chatbot', 'View AI summary'] },
  'ui-lrs-dashboard':    { title: 'LRS Dashboard',               role: 'Land Records Supervisor', purpose: 'Cases from ASST, pending LRA assignment, assigned to LRA, reports received, queries, forwarded to CO.', actions: ['Assign LRA', 'Review LRA report', 'Forward to CO', 'Query citizen'] },
  'ui-lrs-review':       { title: 'Review ASST Scrutiny',        role: 'Land Records Supervisor', purpose: 'Check priority, subject, applicant details and doc readiness before LRA assignment.',        actions: ['Verify scrutiny', 'Query citizen', 'Assign LRA'] },
  'ui-lrs-query':        { title: 'LRS Query to Citizen',        role: 'Land Records Supervisor', purpose: 'Query citizen for clarification; reply visible in LRS case view.',                            actions: ['Compose query', 'Send SMS/WhatsApp'] },
  'ui-lrs-assign':       { title: 'Assign Case to LRA',          role: 'Land Records Supervisor', purpose: 'Select LRA by availability/workload; notify citizen and LRA.',                                 actions: ['Pick LRA', 'Set due date', 'Assign & Notify'] },

  'ui-lra-ai':           { title: 'AI Chatbot + Case Summary',   role: 'Field Verifying Officer', purpose: 'AI shows applicant details, land details, LRS instructions, deadline, verification checklist.', actions: ['Ask chatbot', 'View AI summary', 'View checklist'] },
  'ui-lra-dashboard':    { title: 'LRA Dashboard',               role: 'Field Verifying Officer', purpose: 'Assigned cases, deadlines, locations, docs, LRS/CO instructions, citizen replies, reports.', actions: ['Open assignment', 'Submit report', 'View deadlines'] },
  'ui-lra-verify':       { title: 'LRA Verification',            role: 'Field Verifying Officer', purpose: 'Verify case details, land docs, factual points; field visit if required.',                    actions: ['Record observations', 'Field visit (optional)', 'Query citizen'] },
  'ui-lra-query':        { title: 'LRA Query to Citizen',        role: 'Field Verifying Officer', purpose: 'Query citizen for verification/document clarification.',                                        actions: ['Compose query', 'Send SMS/WhatsApp'] },
  'ui-lra-report':       { title: 'LRA Report',                  role: 'Field Verifying Officer', purpose: 'Upload photographs/documents, detailed remarks, recommendation; submit to CO.',                actions: ['Attach photos', 'Enter remarks', 'Choose recommendation', 'Submit report'] },

  'ui-co-ai':            { title: 'AI Chatbot + Case Summary',   role: 'Circle Officer',   purpose: 'AI shows full case history, ASST scrutiny, LRS remarks, LRA findings, SLA breach, decision points.', actions: ['Ask chatbot', 'View AI summary', 'View SLA breach'] },
  'ui-co-dashboard':     { title: 'CO Dashboard',                role: 'Circle Officer',   purpose: 'All case details, user-wise reports, SLA monitoring, pending final decisions, workflow monitoring.', actions: ['Open case', 'View reports', 'Monitor SLA'] },
  'ui-co-review':        { title: 'Review Applications',         role: 'Circle Officer',   purpose: 'Review app details, docs, ASST scrutiny, LRS remarks, LRA report, photos, citizen replies, AI summary.', actions: ['Approve', 'Reject', 'Return', 'Query citizen'] },
  'ui-co-query':         { title: 'CO Query to Citizen',         role: 'Circle Officer',   purpose: 'Ask citizen for more details before final order; reply visible in CO case view.',                     actions: ['Compose query', 'Send SMS/WhatsApp'] },
  'ui-co-transfer':      { title: 'Transfer / Reassignment',     role: 'Circle Officer',   purpose: 'Forcefully transfer or reassign delayed / disputed / workload-sensitive cases to a different LRA.',   actions: ['Pick new LRA', 'Add justification', 'Confirm Transfer'] },
  'ui-co-closure':       { title: 'Case Closure',                role: 'Circle Officer',   purpose: 'Approval, rejection, return for inquiry or other order per case purpose.',                             actions: ['Approve → Issue order', 'Reject with reasons', 'Return for inquiry'] },
  'ui-final-notif':      { title: 'Final Notification',          role: 'System',           purpose: 'Generate final order PDF, update case status, send WhatsApp/SMS acknowledgement.',                    actions: ['Generate PDF', 'Send SMS/WhatsApp', 'Publish to citizen portal'] },
};
