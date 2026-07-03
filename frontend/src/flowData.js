// UX Flow data derived from analysis of e-darpan-citizen-portal.html and e-darpan-officer-portal.html
// Node "kind" maps to the reference-image visual language:
//   start   -> red pill        (START)
//   end     -> dark pill       (END)
//   step    -> blue rounded    (blue Step boxes like Step 1 / Step 2)
//   process -> green rounded   (green Step boxes like Step 5 / Step 6 / Step 7)
//   scrutiny-> amber/yellow    (Step 3 – Scrutiny)
//   plain   -> white rounded   (Case shown on CO Dashboard)
//   assign  -> light-blue      (Step 4 – Auto-assigned to SK)
//   decision-> purple diamond  (Step 8 – CO Final Decision)
//   success -> mint green      (Step 9 – Order Generated)
//   reject  -> pink            (Rejected With Reasons)

export const NODE_COLORS = {
  start: { bg: '#E63946', fg: '#ffffff', border: '#B7202D' },
  end: { bg: '#0B1B2B', fg: '#ffffff', border: '#000000' },
  step: { bg: '#CFE3FF', fg: '#0B3A82', border: '#3E7BD1' },
  process: { bg: '#B7E8CE', fg: '#0E5B36', border: '#3EAE79' },
  scrutiny: { bg: '#FFD97D', fg: '#5B4200', border: '#D9A22D' },
  plain: { bg: '#FFFFFF', fg: '#111827', border: '#9CA3AF' },
  assign: { bg: '#BFDBFE', fg: '#1E3A8A', border: '#60A5FA' },
  decision: { bg: '#DDD3F8', fg: '#3B2870', border: '#8B6EEA' },
  success: { bg: '#B7E8CE', fg: '#0E5B36', border: '#3EAE79' },
  reject: { bg: '#FCA5A5', fg: '#7F1D1D', border: '#EF4444' },
};

// --------------------- COMPLETE e-DARPAN WORKFLOW ---------------------
// (Combines citizen + officer portal – mirrors the reference image style)
export const workflowFlow = {
  title: 'Complete e-Darpan Workflow',
  subtitle: 'End-to-end journey from citizen application to final order (Citizen + ASST + SK + LRA + CO)',
  nodes: [
    {
      "id": "start",
      "type": "pill",
      "position": {
        "x": -699.3984588881924,
        "y": 325.6495113052311
      },
      "data": {
        "label": "START",
        "kind": "start",
        "id": "start"
      },
      "width": 118,
      "height": 61,
      "selected": false,
      "positionAbsolute": {
        "x": -699.3984588881924,
        "y": 325.6495113052311
      },
      "dragging": false
    },
    {
      "id": "s1",
      "type": "box",
      "position": {
        "x": -458.22979344348175,
        "y": 260.82148010945645
      },
      "data": {
        "label": "Step 1\nCitizen Submits Application",
        "kind": "step",
        "screen": "citizen-new-application",
        "id": "s1"
      },
      "width": 202,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": -458.22979344348175,
        "y": 260.82148010945645
      },
      "dragging": false
    },
    {
      "id": "s3",
      "type": "box",
      "position": {
        "x": 11.356973963742917,
        "y": 69.37617841595397
      },
      "data": {
        "label": "Step 2\nDealing Asst\nScrutiny",
        "kind": "scrutiny",
        "screen": "asst-case-detail",
        "id": "s3"
      },
      "width": 150,
      "height": 83,
      "selected": false,
      "dragging": false,
      "positionAbsolute": {
        "x": 11.356973963742917,
        "y": 69.37617841595397
      }
    },
    {
      "id": "s4",
      "type": "box",
      "position": {
        "x": 433.8439534880174,
        "y": 293.9635441712054
      },
      "data": {
        "label": "Step 4\nAuto-assigned\nto SK",
        "kind": "assign",
        "screen": "sk-dashboard",
        "id": "s4"
      },
      "width": 150,
      "height": 83,
      "selected": false,
      "positionAbsolute": {
        "x": 433.8439534880174,
        "y": 293.9635441712054
      },
      "dragging": false
    },
    {
      "id": "s5",
      "type": "box",
      "position": {
        "x": 431.45527389306585,
        "y": 444.0072163386535
      },
      "data": {
        "label": "Step 5\nSK Assigns\nto LRA",
        "kind": "process",
        "screen": "sk-case-detail",
        "id": "s5"
      },
      "width": 150,
      "height": 83,
      "selected": false,
      "positionAbsolute": {
        "x": 431.45527389306585,
        "y": 444.0072163386535
      },
      "dragging": false
    },
    {
      "id": "s6",
      "type": "box",
      "position": {
        "x": 425.55522418340877,
        "y": 608.7917645219317
      },
      "data": {
        "label": "Step 6\nLRA \nVerification",
        "kind": "process",
        "screen": "lra-field-report",
        "id": "s6"
      },
      "width": 150,
      "height": 83,
      "selected": false,
      "positionAbsolute": {
        "x": 425.55522418340877,
        "y": 608.7917645219317
      },
      "dragging": false
    },
    {
      "id": "s8",
      "type": "diamond",
      "position": {
        "x": 680.8535761631474,
        "y": 373.3357372594302
      },
      "data": {
        "label": "Step 8\nCO Final\nDecision",
        "kind": "decision",
        "screen": "co-decision",
        "id": "s8"
      },
      "width": 170,
      "height": 170,
      "selected": false,
      "positionAbsolute": {
        "x": 680.8535761631474,
        "y": 373.3357372594302
      },
      "dragging": false
    },
    {
      "id": "s9",
      "type": "box",
      "position": {
        "x": 1128.7738816083302,
        "y": 497.2920306183135
      },
      "data": {
        "label": "Step 9\nOrder\nGenerated",
        "kind": "success",
        "screen": "citizen-download-order",
        "id": "s9"
      },
      "width": 150,
      "height": 83,
      "selected": false,
      "positionAbsolute": {
        "x": 1128.7738816083302,
        "y": 497.2920306183135
      },
      "dragging": false
    },
    {
      "id": "end",
      "type": "pill",
      "position": {
        "x": 1359.7652020982437,
        "y": 496.7508371778223
      },
      "data": {
        "label": "END",
        "kind": "end",
        "id": "end"
      },
      "width": 99,
      "height": 61,
      "selected": false,
      "positionAbsolute": {
        "x": 1359.7652020982437,
        "y": 496.7508371778223
      },
      "dragging": false
    },
    {
      "id": "n_1783079024824",
      "type": "box",
      "position": {
        "x": -203.92454443644124,
        "y": 150.97131410023633
      },
      "data": {
        "label": "Asst",
        "kind": "step",
        "id": "n_1783079024824"
      },
      "width": 150,
      "height": 49,
      "selected": false,
      "positionAbsolute": {
        "x": -203.92454443644124,
        "y": 150.97131410023633
      },
      "dragging": false
    },
    {
      "id": "n_1783079346111",
      "type": "box",
      "position": {
        "x": -215.47626596763496,
        "y": 381.9998720488614
      },
      "data": {
        "label": "Asst Registers Applications",
        "kind": "process",
        "id": "n_1783079346111"
      },
      "width": 198,
      "height": 49,
      "selected": false,
      "positionAbsolute": {
        "x": -215.47626596763496,
        "y": 381.9998720488614
      },
      "dragging": false
    },
    {
      "id": "n_1783079397103",
      "type": "diamond",
      "position": {
        "x": 193.75143023453506,
        "y": 206.81855434977751
      },
      "data": {
        "label": "System Decides THE\n PROCES Flow\n based on config",
        "kind": "decision",
        "id": "n_1783079397103"
      },
      "width": 170,
      "height": 170,
      "selected": false,
      "positionAbsolute": {
        "x": 193.75143023453506,
        "y": 206.81855434977751
      },
      "dragging": false
    },
    {
      "id": "n_1783079609161",
      "type": "box",
      "position": {
        "x": 665.9521540835316,
        "y": 204.78082308412138
      },
      "data": {
        "label": "CO",
        "kind": "step",
        "id": "n_1783079609161"
      },
      "width": 150,
      "height": 49,
      "selected": false,
      "positionAbsolute": {
        "x": 665.9521540835316,
        "y": 204.78082308412138
      },
      "dragging": false
    },
    {
      "id": "n_1783079663071",
      "type": "box",
      "position": {
        "x": 827.894520073575,
        "y": 741.5966623139204
      },
      "data": {
        "label": "CO ForceFully Transfer to LRA",
        "kind": "process",
        "id": "n_1783079663071"
      },
      "width": 214,
      "height": 49,
      "selected": false,
      "positionAbsolute": {
        "x": 827.894520073575,
        "y": 741.5966623139204
      },
      "dragging": false
    }
  ],
  edges: [
    {
      "id": "start->s1-17-wmxs",
      "source": "start",
      "target": "s1",
      "label": "",
      "type": "custom",
      "animated": false,
      "data": {
        "dashed": false,
        "colorKey": null,
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2,
        "opacity": 1
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563",
        "width": 18,
        "height": 18
      }
    },
    {
      "id": "n_1783079024824->s3-13-n6i8",
      "source": "n_1783079024824",
      "target": "s3",
      "label": "",
      "type": "custom",
      "animated": false,
      "data": {
        "dashed": false,
        "colorKey": null,
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2,
        "opacity": 1
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563",
        "width": 18,
        "height": 18
      }
    },
    {
      "id": "n_1783079024824->n_1783079346111-2-mp4i",
      "source": "n_1783079024824",
      "target": "n_1783079346111",
      "label": "",
      "type": "custom",
      "animated": false,
      "data": {
        "dashed": false,
        "colorKey": null,
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2,
        "opacity": 1
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563",
        "width": 18,
        "height": 18
      }
    },
    {
      "id": "s1->n_1783079024824-3-5g2d",
      "source": "s1",
      "target": "n_1783079024824",
      "label": "",
      "type": "custom",
      "animated": false,
      "data": {
        "dashed": false,
        "colorKey": null,
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2,
        "opacity": 1
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563",
        "width": 18,
        "height": 18
      }
    },
    {
      "id": "n_1783079346111->n_1783079397103-4-quca",
      "source": "n_1783079346111",
      "target": "n_1783079397103",
      "label": "",
      "type": "custom",
      "animated": false,
      "data": {
        "dashed": false,
        "colorKey": null,
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2,
        "opacity": 1
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563",
        "width": 18,
        "height": 18
      }
    },
    {
      "id": "s3->n_1783079397103-5-b13q",
      "source": "s3",
      "target": "n_1783079397103",
      "label": "",
      "type": "custom",
      "animated": false,
      "data": {
        "dashed": false,
        "colorKey": null,
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2,
        "opacity": 1
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563",
        "width": 18,
        "height": 18
      }
    },
    {
      "id": "n_1783079397103->s4-6-gtvx",
      "source": "n_1783079397103",
      "target": "s4",
      "label": "ROLE SK",
      "type": "custom",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "purple",
        "type": "smoothstep",
        "labelOffset": {
          "x": 1.875,
          "y": -2.5
        }
      },
      "style": {
        "stroke": "#8B6EEA",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#8B6EEA",
        "width": 18,
        "height": 18
      },
      "selected": true
    },
    {
      "id": "s4->s5-7-7nxg",
      "source": "s4",
      "target": "s5",
      "label": "",
      "type": "custom",
      "animated": false,
      "data": {
        "dashed": false,
        "colorKey": null,
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2,
        "opacity": 1
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563",
        "width": 18,
        "height": 18
      }
    },
    {
      "id": "s5->s6-8-z35d",
      "source": "s5",
      "target": "s6",
      "label": "",
      "type": "custom",
      "animated": false,
      "data": {
        "dashed": false,
        "colorKey": null,
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2,
        "opacity": 1
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563",
        "width": 18,
        "height": 18
      }
    },
    {
      "id": "s6->n_1783079609161-9-na2e",
      "source": "s6",
      "target": "n_1783079609161",
      "label": "",
      "type": "custom",
      "animated": false,
      "data": {
        "dashed": false,
        "colorKey": null,
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2,
        "opacity": 1
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563",
        "width": 18,
        "height": 18
      }
    },
    {
      "id": "n_1783079397103->n_1783079609161-10-uha5",
      "source": "n_1783079397103",
      "target": "n_1783079609161",
      "label": "Directly Forworded To Co",
      "type": "custom",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "orange",
        "type": "smoothstep",
        "labelOffset": {
          "x": -77.5,
          "y": 0
        }
      },
      "style": {
        "stroke": "#F4A261",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#F4A261",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "n_1783079609161->s8-11-zmk6",
      "source": "n_1783079609161",
      "target": "s8",
      "label": "",
      "type": "custom",
      "animated": false,
      "data": {
        "dashed": false,
        "colorKey": null,
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2,
        "opacity": 1
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563",
        "width": 18,
        "height": 18
      }
    },
    {
      "id": "s8->s9-12-xumy",
      "source": "s8",
      "target": "s9",
      "label": "Final Order",
      "type": "custom",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "green",
        "type": "smoothstep",
        "labelOffset": {
          "x": 71.52179846130636,
          "y": 1.9867166239251768
        }
      },
      "style": {
        "stroke": "#3EAE79",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#3EAE79",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "s9->end-13-a0dv",
      "source": "s9",
      "target": "end",
      "label": "",
      "type": "custom",
      "animated": false,
      "data": {
        "dashed": false,
        "colorKey": null,
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2,
        "opacity": 1
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563",
        "width": 18,
        "height": 18
      }
    },
    {
      "id": "s5->n_1783079663071-14-gfs1",
      "source": "n_1783079663071",
      "target": "s5",
      "label": "Tranfer to LRA",
      "type": "custom",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "red",
        "type": "smoothstep",
        "labelOffset": {
          "x": 263.2399526700859,
          "y": 216.55211200784427
        }
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "s8->n_1783079663071-15-qwbb",
      "source": "s8",
      "target": "n_1783079663071",
      "label": "",
      "type": "custom",
      "animated": false,
      "data": {
        "dashed": false,
        "colorKey": null,
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2,
        "opacity": 1
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563",
        "width": 18,
        "height": 18
      }
    }
  ],
};

// --------------------- CITIZEN PORTAL FLOW ---------------------
export const citizenFlow = {
  title: 'Citizen Portal – Screen Flow',
  subtitle: 'Derived from e-darpan-citizen-portal.html',
  nodes: [
    {
      "id": "start",
      "type": "pill",
      "position": {
        "x": -1617.4170866303255,
        "y": 218.06056290926853
      },
      "data": {
        "label": "START",
        "kind": "start",
        "id": "start"
      },
      "width": 118,
      "height": 61,
      "selected": false,
      "positionAbsolute": {
        "x": -1617.4170866303255,
        "y": 218.06056290926853
      },
      "dragging": false
    },
    {
      "id": "login",
      "type": "box",
      "position": {
        "x": -1357.3590616540803,
        "y": 204.17227597820738
      },
      "data": {
        "label": "Login Option 2 \n(E-Darpan)",
        "kind": "step",
        "screen": "citizen-phone-login",
        "id": "login"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": -1357.3590616540803,
        "y": 204.17227597820738
      },
      "dragging": false
    },
    {
      "id": "reg",
      "type": "box",
      "position": {
        "x": -1381.1704012876417,
        "y": 339.77139850989875
      },
      "data": {
        "label": "New Registration Option 3 \n (E-Darpan)",
        "kind": "step",
        "screen": "citizen-phone-register",
        "id": "reg"
      },
      "width": 197,
      "height": 66,
      "selected": true,
      "positionAbsolute": {
        "x": -1381.1704012876417,
        "y": 339.77139850989875
      },
      "dragging": false
    },
    {
      "id": "otp",
      "type": "box",
      "position": {
        "x": -1037.7740608077875,
        "y": 302.2580068503936
      },
      "data": {
        "label": "OTP\nVerification",
        "kind": "process",
        "screen": "citizen-otp",
        "id": "otp"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": -1037.7740608077875,
        "y": 302.2580068503936
      },
      "dragging": false
    },
    {
      "id": "dash",
      "type": "box",
      "position": {
        "x": -472.60994687593364,
        "y": 290.4203880668937
      },
      "data": {
        "label": "Dashboard\n(My Cases)",
        "kind": "process",
        "screen": "citizen-dashboard",
        "id": "dash"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": -472.60994687593364,
        "y": 290.4203880668937
      },
      "dragging": false
    },
    {
      "id": "newApp",
      "type": "box",
      "position": {
        "x": -235.30549956556314,
        "y": -46.68013229742746
      },
      "data": {
        "label": "New Application\nForm",
        "kind": "step",
        "screen": "citizen-new-application",
        "id": "newApp"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": -235.30549956556314,
        "y": -46.68013229742746
      },
      "dragging": false
    },
    {
      "id": "submit",
      "type": "box",
      "position": {
        "x": 105.0100799519578,
        "y": -56.30441295391398
      },
      "data": {
        "label": "Submission\nSuccess",
        "kind": "success",
        "screen": "citizen-submission-success",
        "id": "submit"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": 105.0100799519578,
        "y": -56.30441295391398
      },
      "dragging": false
    },
    {
      "id": "down",
      "type": "box",
      "position": {
        "x": 94.57880433726194,
        "y": 367.0662572828412
      },
      "data": {
        "label": "Download\nOrder",
        "kind": "success",
        "screen": "citizen-download-order",
        "id": "down"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": 94.57880433726194,
        "y": 367.0662572828412
      },
      "dragging": false
    },
    {
      "id": "end",
      "type": "pill",
      "position": {
        "x": 622.927402223743,
        "y": 368.05001867579915
      },
      "data": {
        "label": "END",
        "kind": "end",
        "id": "end"
      },
      "width": 99,
      "height": 61,
      "selected": false,
      "positionAbsolute": {
        "x": 622.927402223743,
        "y": 368.05001867579915
      },
      "dragging": false
    },
    {
      "id": "n_1782983230964",
      "type": "box",
      "position": {
        "x": -1353.0750598591158,
        "y": 79.58364984712142
      },
      "data": {
        "label": "Login Option 1 \n (SEWA SETU)",
        "kind": "step",
        "id": "n_1782983230964"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": -1353.0750598591158,
        "y": 79.58364984712142
      },
      "dragging": false
    },
    {
      "id": "n_1782984424615",
      "type": "box",
      "position": {
        "x": -250.5111395723846,
        "y": 374.4512994585301
      },
      "data": {
        "label": "Track Application Status",
        "kind": "step",
        "id": "n_1782984424615"
      },
      "width": 181,
      "height": 49,
      "selected": false,
      "dragging": false,
      "positionAbsolute": {
        "x": -250.5111395723846,
        "y": 374.4512994585301
      }
    },
    {
      "id": "n_1782984784573",
      "type": "box",
      "position": {
        "x": -237.78358084240807,
        "y": 98.6875955181331
      },
      "data": {
        "label": "Office Query Response",
        "kind": "scrutiny",
        "id": "n_1782984784573"
      },
      "width": 175,
      "height": 49,
      "selected": false,
      "positionAbsolute": {
        "x": -237.78358084240807,
        "y": 98.6875955181331
      },
      "dragging": false
    },
    {
      "id": "n_1782985919228",
      "type": "box",
      "position": {
        "x": 96.40708771598563,
        "y": 87.11824731993278
      },
      "data": {
        "label": "Upload Doc (For Query)",
        "kind": "step",
        "id": "n_1782985919228"
      },
      "width": 181,
      "height": 49,
      "selected": false,
      "positionAbsolute": {
        "x": 96.40708771598563,
        "y": 87.11824731993278
      },
      "dragging": false
    },
    {
      "id": "n_1783066027816",
      "type": "diamond",
      "position": {
        "x": -787.339728316515,
        "y": 254.00505786239086
      },
      "data": {
        "label": "Authenticate",
        "kind": "decision",
        "id": "n_1783066027816"
      },
      "width": 170,
      "height": 170,
      "selected": false,
      "positionAbsolute": {
        "x": -787.339728316515,
        "y": 254.00505786239086
      },
      "dragging": false
    },
    {
      "id": "n_1783066200036",
      "type": "box",
      "position": {
        "x": 362.0732473244394,
        "y": 373.654854187649
      },
      "data": {
        "label": "Feedback",
        "kind": "scrutiny",
        "id": "n_1783066200036"
      },
      "width": 150,
      "height": 49,
      "selected": false,
      "positionAbsolute": {
        "x": 362.0732473244394,
        "y": 373.654854187649
      },
      "dragging": false
    }
  ],
  edges: [
    {
      "id": "start->login-0",
      "source": "start",
      "target": "login",
      "type": "straight",
      "animated": false,
      "data": {
        "dashed": false
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563"
      }
    },
    {
      "id": "start->reg-1",
      "source": "start",
      "target": "reg",
      "type": "straight",
      "animated": false,
      "data": {
        "dashed": false
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563"
      }
    },
    {
      "id": "login->reg-2",
      "source": "login",
      "target": "reg",
      "label": "",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#94a3b8",
        "strokeWidth": 1.6,
        "strokeDasharray": "6 4"
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#94a3b8"
      },
      "selected": false
    },
    {
      "id": "reg->login-3",
      "source": "reg",
      "target": "login",
      "label": "",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#94a3b8",
        "strokeWidth": 1.6,
        "strokeDasharray": "6 4"
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#94a3b8"
      },
      "selected": false
    },
    {
      "id": "login->otp-4",
      "source": "login",
      "target": "otp",
      "label": "Continue",
      "type": "smoothstep",
      "animated": false,
      "data": {
        "dashed": false
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563"
      }
    },
    {
      "id": "reg->otp-5",
      "source": "reg",
      "target": "otp",
      "label": "Send OTP",
      "type": "smoothstep",
      "animated": false,
      "data": {
        "dashed": false
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563"
      }
    },
    {
      "id": "otp->login-6",
      "source": "otp",
      "target": "login",
      "label": "Verification failed",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 1.6,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "newApp->submit-11",
      "source": "newApp",
      "target": "submit",
      "label": "Submit Application",
      "type": "smoothstep",
      "animated": false,
      "data": {
        "dashed": false
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563"
      }
    },
    {
      "id": "start->n_1782983230964-22",
      "source": "start",
      "target": "n_1782983230964",
      "label": "",
      "type": "smoothstep",
      "animated": false,
      "data": {
        "dashed": false
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563"
      }
    },
    {
      "id": "dash->n_1782984424615-17",
      "source": "dash",
      "target": "n_1782984424615",
      "label": "Track",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "dash->n_1782984784573-19",
      "source": "dash",
      "target": "n_1782984784573",
      "label": "",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "n_1782984784573->n_1782985919228-20",
      "source": "n_1782984784573",
      "target": "n_1782985919228",
      "label": "Attach Doc",
      "type": "smoothstep",
      "animated": false,
      "data": {
        "dashed": false
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563"
      },
      "selected": false
    },
    {
      "id": "dash->newApp-19-9ol4",
      "source": "dash",
      "target": "newApp",
      "label": "",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "n_1782984424615->down-16-pyiq",
      "source": "n_1782984424615",
      "target": "down",
      "label": "Download Order",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "dash->down-17-iks2",
      "source": "dash",
      "target": "down",
      "label": "Download Order",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "n_1782985919228->dash-18-7tqf",
      "source": "n_1782985919228",
      "target": "dash",
      "label": "",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "n_1782983230964->n_1783066027816-16-xyvb",
      "source": "n_1782983230964",
      "target": "n_1783066027816",
      "label": "Redirect from SEWA SETU",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "n_1783066027816->dash-17-4218",
      "source": "n_1783066027816",
      "target": "dash",
      "label": "View Dashboard",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "otp->n_1783066027816-18-a0jj",
      "source": "otp",
      "target": "n_1783066027816",
      "label": "",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "down->n_1783066200036-19-dyvr",
      "source": "down",
      "target": "n_1783066200036",
      "label": "CItizen Feedback",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "n_1783066200036->end-20-62ed",
      "source": "n_1783066200036",
      "target": "end",
      "label": "",
      "type": "smoothstep",
      "animated": false,
      "data": {
        "dashed": false
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2,
        "opacity": 1
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.98,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563",
        "width": 18,
        "height": 18
      }
    },
    {
      "id": "submit->dash-21-k6n6",
      "source": "submit",
      "target": "dash",
      "label": "View Cases",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    }
  ],
};

// --------------------- OFFICER PORTAL FLOW ---------------------
export const officerFlow = {
  title: 'Officer Portal – Screen Flow',
  subtitle: 'Derived from e-darpan-officer-portal.html (ASST · SK · LRA · CO)',
   nodes: [
    {
      "id": "start",
      "type": "pill",
      "position": {
        "x": -382.9887674530589,
        "y": 561.3574849765596
      },
      "data": {
        "label": "START",
        "kind": "start",
        "id": "start"
      },
      "width": 118,
      "height": 61,
      "selected": false,
      "positionAbsolute": {
        "x": -382.9887674530589,
        "y": 561.3574849765596
      },
      "dragging": false
    },
    {
      "id": "login",
      "type": "box",
      "position": {
        "x": -107.73876784139088,
        "y": 503.23135252849283
      },
      "data": {
        "label": "Officer Login\n(Role Select)",
        "kind": "step",
        "screen": "officer-login",
        "id": "login"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": -107.73876784139088,
        "y": 503.23135252849283
      },
      "dragging": false
    },
    {
      "id": "asstDash",
      "type": "box",
      "position": {
        "x": 145.5242678586235,
        "y": -26.838204500565297
      },
      "data": {
        "label": "ASST\nDashboard",
        "kind": "step",
        "screen": "asst-dashboard",
        "id": "asstDash"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": 145.5242678586235,
        "y": -26.838204500565297
      },
      "dragging": false
    },
    {
      "id": "asstCase",
      "type": "box",
      "position": {
        "x": 356.6864720818045,
        "y": 199.47646395766634
      },
      "data": {
        "label": "ASST Case\nDetail (Scrutiny) Of Citizen",
        "kind": "scrutiny",
        "screen": "asst-case-detail",
        "id": "asstCase"
      },
      "width": 196,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": 356.6864720818045,
        "y": 199.47646395766634
      },
      "dragging": false
    },
    {
      "id": "skDash",
      "type": "box",
      "position": {
        "x": 277.3183977490876,
        "y": 362.96441656017066
      },
      "data": {
        "label": "SK\nDashboard",
        "kind": "process",
        "screen": "sk-dashboard",
        "id": "skDash"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": 277.3183977490876,
        "y": 362.96441656017066
      },
      "dragging": false
    },
    {
      "id": "skCase",
      "type": "box",
      "position": {
        "x": 601.284156461721,
        "y": 399.26415508036064
      },
      "data": {
        "label": "SK Case Detail\n(Assign LRA)",
        "kind": "process",
        "screen": "sk-case-detail",
        "id": "skCase"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": 601.284156461721,
        "y": 399.26415508036064
      },
      "dragging": false
    },
    {
      "id": "lraDash",
      "type": "box",
      "position": {
        "x": 202.4050297573537,
        "y": 536.5936840633275
      },
      "data": {
        "label": "LRA\nDashboard",
        "kind": "assign",
        "screen": "lra-dashboard",
        "id": "lraDash"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": 202.4050297573537,
        "y": 536.5936840633275
      },
      "dragging": false
    },
    {
      "id": "lraReport",
      "type": "box",
      "position": {
        "x": 451.8957219436319,
        "y": 631.68080615189
      },
      "data": {
        "label": "LRA Report",
        "kind": "assign",
        "screen": "lra-field-report",
        "id": "lraReport"
      },
      "width": 150,
      "height": 49,
      "selected": false,
      "positionAbsolute": {
        "x": 451.8957219436319,
        "y": 631.68080615189
      },
      "dragging": false
    },
    {
      "id": "coDash",
      "type": "box",
      "position": {
        "x": -11.609938535063975,
        "y": 777.8296388130556
      },
      "data": {
        "label": "CO\nDashboard",
        "kind": "plain",
        "screen": "co-dashboard",
        "id": "coDash"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": -11.609938535063975,
        "y": 777.8296388130556
      },
      "dragging": false
    },
    {
      "id": "coDecision",
      "type": "diamond",
      "position": {
        "x": 449.434996988942,
        "y": 949.8649556832293
      },
      "data": {
        "label": "CO Final\nDecision",
        "kind": "decision",
        "screen": "co-decision",
        "id": "coDecision"
      },
      "width": 170,
      "height": 170,
      "selected": false,
      "positionAbsolute": {
        "x": 449.434996988942,
        "y": 949.8649556832293
      },
      "dragging": false
    },
    {
      "id": "coTransfer",
      "type": "box",
      "position": {
        "x": 135.58925771626522,
        "y": 988.2830774005486
      },
      "data": {
        "label": "CO Transfer\n(Reassign LRA)",
        "kind": "scrutiny",
        "screen": "co-transfer",
        "id": "coTransfer"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": 135.58925771626522,
        "y": 988.2830774005486
      },
      "dragging": false
    },
    {
      "id": "order",
      "type": "box",
      "position": {
        "x": 700.2560793591355,
        "y": 991.2399849434051
      },
      "data": {
        "label": "Order\nIssued",
        "kind": "success",
        "screen": "citizen-download-order",
        "id": "order"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": 700.2560793591355,
        "y": 991.2399849434051
      },
      "dragging": false
    },
    {
      "id": "end",
      "type": "pill",
      "position": {
        "x": 1017.5268726857637,
        "y": 996.5560414868951
      },
      "data": {
        "label": "END",
        "kind": "end",
        "id": "end"
      },
      "width": 99,
      "height": 61,
      "selected": false,
      "positionAbsolute": {
        "x": 1017.5268726857637,
        "y": 996.5560414868951
      },
      "dragging": false
    },
    {
      "id": "n_1782992937610",
      "type": "box",
      "position": {
        "x": 1600,
        "y": 500
      },
      "data": {
        "label": "CITIZEN",
        "kind": "step",
        "id": "n_1782992937610"
      },
      "width": 220,
      "height": 120,
      "selected": false,
      "positionAbsolute": {
        "x": 1329.2298561501864,
        "y": 591.3456271044818
      },
      "dragging": false
    },
    {
      "id": "n_1783067018170",
      "type": "box",
      "position": {
        "x": 708.669348386316,
        "y": -149.2933680773486
      },
      "data": {
        "label": "ASST\nRegister New App",
        "kind": "process",
        "id": "n_1783067018170"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": 708.669348386316,
        "y": -149.2933680773486
      },
      "dragging": false
    },
    {
      "id": "n_1783067347312",
      "type": "box",
      "position": {
        "x": 809.0704714739168,
        "y": 53.32202755458985
      },
      "data": {
        "label": "Rejected\nWith Reasons",
        "kind": "reject",
        "id": "n_1783067347312"
      },
      "width": 150,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": 809.0704714739168,
        "y": 53.32202755458985
      },
      "dragging": false
    },
    {
      "id": "n_1783068899679",
      "type": "box",
      "position": {
        "x": 1026.6538438866312,
        "y": -45.73715857232946
      },
      "data": {
        "label": "System make decision based \non the category of the Application",
        "kind": "scrutiny",
        "id": "n_1783068899679"
      },
      "width": 243,
      "height": 66,
      "selected": false,
      "positionAbsolute": {
        "x": 1026.6538438866312,
        "y": -45.73715857232946
      },
      "dragging": false
    }
  ],
  edges: [
    {
      "id": "start->login-0",
      "source": "start",
      "target": "login",
      "type": "straight",
      "animated": false,
      "data": {
        "dashed": false
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563"
      }
    },
    {
      "id": "login->asstDash-1",
      "source": "login",
      "target": "asstDash",
      "label": "Role = ASST",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "login->skDash-2",
      "source": "login",
      "target": "skDash",
      "label": "Role = SK",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "purple"
      },
      "style": {
        "stroke": "#8B6EEA",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#8B6EEA",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "login->lraDash-3",
      "source": "login",
      "target": "lraDash",
      "label": "Role = LRA",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "blue"
      },
      "style": {
        "stroke": "#3E7BD1",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#3E7BD1",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "login->coDash-4",
      "source": "login",
      "target": "coDash",
      "label": "Role = CO",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "asstDash->asstCase-7",
      "source": "asstDash",
      "target": "asstCase",
      "label": "View Citizen Case",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "red"
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": true
    },
    {
      "id": "skDash->skCase-9",
      "source": "skDash",
      "target": "skCase",
      "label": "View and Assign to LRA",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "labelOffset": {
          "x": 0,
          "y": 0
        },
        "colorKey": "purple"
      },
      "style": {
        "stroke": "#8B6EEA",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#8B6EEA",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "skCase->lraDash-10",
      "source": "skCase",
      "target": "lraDash",
      "label": "Notify LRA",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "purple"
      },
      "style": {
        "stroke": "#8B6EEA",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#8B6EEA",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "lraDash->lraReport-13",
      "source": "lraDash",
      "target": "lraReport",
      "label": "Submit Report",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "blue"
      },
      "style": {
        "stroke": "#3E7BD1",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#3E7BD1",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "coDash->coTransfer-16",
      "source": "coDash",
      "target": "coTransfer",
      "label": "ForceFully- Transfer TO Muiltiples LRA",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "green"
      },
      "style": {
        "stroke": "#3EAE79",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#3EAE79",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "coDecision->order-18",
      "source": "coDecision",
      "target": "order",
      "label": "Approved",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "green"
      },
      "style": {
        "stroke": "#3EAE79",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#3EAE79",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "order->end-21",
      "source": "order",
      "target": "end",
      "type": "straight",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "green"
      },
      "style": {
        "stroke": "#3EAE79",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#3EAE79",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "lraReport->coDash-18",
      "source": "lraReport",
      "target": "coDash",
      "label": "Forwarded To CO",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "blue"
      },
      "style": {
        "stroke": "#3E7BD1",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#3E7BD1",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "coDash->coDecision-18",
      "source": "coDash",
      "target": "coDecision",
      "label": "",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "green"
      },
      "style": {
        "stroke": "#3EAE79",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#3EAE79",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "coTransfer->coDecision-17",
      "source": "coTransfer",
      "target": "coDecision",
      "label": "Final",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "green"
      },
      "style": {
        "stroke": "#3EAE79",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#3EAE79",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "asstCase->n_1782992937610-18",
      "source": "asstCase",
      "target": "n_1782992937610",
      "label": "Reject OR RevertBack TO Citizen",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "red"
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "skCase->n_1782992937610-19",
      "source": "skCase",
      "target": "n_1782992937610",
      "label": "SK Revert Back TO Citizen",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "purple"
      },
      "style": {
        "stroke": "#8B6EEA",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#8B6EEA",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "lraReport->n_1782992937610-20",
      "source": "lraReport",
      "target": "n_1782992937610",
      "label": "LRA Revert Back TO Citizen",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "blue",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#3E7BD1",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#3E7BD1",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "n_1782992937610->coDecision-21",
      "source": "n_1782992937610",
      "target": "coDecision",
      "label": "CO Revert Back TO Citizen",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "green"
      },
      "style": {
        "stroke": "#3EAE79",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#0f172a",
        "fontWeight": 600,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 4,
      "labelBgStyle": {
        "fill": "#ffffff",
        "fillOpacity": 0.95,
        "stroke": "#e5e7eb"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#3EAE79",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "login->n_1783067018170-22-zjqy",
      "source": "login",
      "target": "n_1783067018170",
      "label": "Register New Internal Application",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "n_1783067018170->asstDash-23-gd6n",
      "source": "n_1783067018170",
      "target": "asstDash",
      "label": "View Reg. Internal Application",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "asstCase->n_1783067347312-23-e4tz",
      "source": "asstCase",
      "target": "n_1783067347312",
      "label": "Reject",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.85
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "n_1782992937610->lraDash-26-szon",
      "source": "n_1782992937610",
      "target": "lraDash",
      "label": "Query Response",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "green"
      },
      "style": {
        "stroke": "#3EAE79",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#3EAE79",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "n_1782992937610->skDash-27-6jo2",
      "source": "n_1782992937610",
      "target": "skDash",
      "label": "Query Response",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "green"
      },
      "style": {
        "stroke": "#3EAE79",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#3EAE79",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "n_1782992937610->asstCase-28-wbp4",
      "source": "n_1782992937610",
      "target": "asstCase",
      "label": "Query Response",
      "type": "smoothstep",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "green"
      },
      "style": {
        "stroke": "#3EAE79",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "labelStyle": {
        "fill": "#7f1d1d",
        "fontWeight": 700,
        "fontSize": 11
      },
      "labelBgPadding": [
        6,
        4
      ],
      "labelBgBorderRadius": 6,
      "labelBgStyle": {
        "fill": "#FEE2E2",
        "fillOpacity": 0.98,
        "stroke": "#E63946"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#3EAE79",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "n_1783067018170->n_1783068899679-29-6ozw",
      "source": "n_1783067018170",
      "target": "n_1783068899679",
      "label": "",
      "type": "custom",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "red",
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "opacity": 0.9,
        "strokeDasharray": "8 5"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "n_1783068899679->coDash-26-742f",
      "source": "n_1783068899679",
      "target": "coDash",
      "label": "",
      "type": "custom",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "red",
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "asstCase->n_1783068899679-27-lkl6",
      "source": "asstCase",
      "target": "n_1783068899679",
      "label": "",
      "type": "custom",
      "animated": false,
      "data": {
        "dashed": false,
        "colorKey": null,
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#4b5563",
        "strokeWidth": 2,
        "opacity": 1
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#4b5563",
        "width": 18,
        "height": 18
      }
    },
    {
      "id": "revert-co-to-lra",
      "source": "coDecision",
      "target": "lraDash",
      "label": "CO Revert Back to LRA",
      "type": "custom",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "red",
        "type": "smoothstep",
        "labelOffset": {
          "x": 8.52590568662099,
          "y": 14.209842811034981
        }
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "revert-lra-to-sk",
      "source": "lraReport",
      "target": "skDash",
      "label": "LRA Revert Back to SK",
      "type": "custom",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "red",
        "type": "smoothstep",
        "labelOffset": {
          "x": -72.7234418860625,
          "y": 48.79365001262019
        }
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "revert-sk-to-asst",
      "source": "skCase",
      "target": "asstDash",
      "label": "SK Revert Back to ASST",
      "type": "custom",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "red",
        "type": "smoothstep",
        "labelOffset": {
          "x": 286.8609131891821,
          "y": 199.30025314986813
        }
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "revert-co-to-asst-direct",
      "source": "coDecision",
      "target": "asstDash",
      "label": "CO Revert Back to ASST (Direct)",
      "type": "custom",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "red",
        "type": "smoothstep",
        "labelOffset": {
          "x": 14.146446653561952,
          "y": 367.80761299261235
        }
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      },
      "selected": false
    },
    {
      "id": "revert-co-to-citizen",
      "source": "coDecision",
      "target": "n_1782992937610",
      "label": "CO Revert / Reject to Citizen",
      "type": "custom",
      "animated": true,
      "data": {
        "dashed": true,
        "colorKey": "red",
        "type": "smoothstep",
        "labelOffset": {
          "x": 0,
          "y": 0
        }
      },
      "style": {
        "stroke": "#E63946",
        "strokeWidth": 2,
        "strokeDasharray": "8 5",
        "opacity": 0.9
      },
      "markerEnd": {
        "type": "arrowclosed",
        "color": "#E63946",
        "width": 18,
        "height": 18
      }
    }
  ],
};

// --------------------- SCREEN DETAILS (right-side drawer) ---------------------
export const screenDetails = {
  'citizen-phone-login': { title: 'Phone Entry — Login', role: 'Citizen', purpose: 'Existing user enters 10-digit mobile number to log in.', actions: ['Enter phone number', 'Continue → OTP', 'Switch to New Registration'] },
  'citizen-phone-register': { title: 'Phone Entry — New Registration', role: 'Citizen', purpose: 'New user provides phone, name, email, address to register.', actions: ['Fill registration form', 'Send OTP', 'Switch to Login'] },
  'citizen-otp': { title: 'OTP Verification', role: 'Citizen', purpose: 'Enter 6-digit OTP sent to mobile.', actions: ['Enter OTP', 'Verify & Continue', 'Change Number', 'Resend OTP'] },
  'citizen-dashboard': { title: 'Dashboard — With Cases', role: 'Citizen', purpose: 'View profile, stats and list of applications.', actions: ['New Application', 'Track case', 'Respond to Query', 'Download Order'] },
  'citizen-dashboard-empty': { title: 'Dashboard — Empty State', role: 'Citizen', purpose: 'Prompt user to submit their first application.', actions: ['Submit New Application'] },
  'citizen-new-application': { title: 'New Application Form', role: 'Citizen', purpose: 'Fill service details + upload supporting documents.', actions: ['Choose service', 'Fill land / applicant details', 'Upload docs', 'Submit / Cancel'] },
  'citizen-submission-success': { title: 'Submission Success', role: 'Citizen', purpose: 'Confirmation with Application ID; sent via WhatsApp/SMS.', actions: ['View My Cases', 'Submit Another'] },
  'citizen-query-response': { title: 'Officer Query Response', role: 'Citizen', purpose: 'Read officer query and post clarification + docs.', actions: ['Type response', 'Attach documents', 'Submit Response'] },
  'citizen-upload-docs': { title: 'Upload Docs (Query)', role: 'Citizen', purpose: 'Upload additional documents requested by officer.', actions: ['Choose file(s)', 'Submit Documents', 'Cancel'] },
  'citizen-track': { title: 'Track Application', role: 'Citizen', purpose: 'Timeline view of case progress across stages.', actions: ['View timeline', 'Back to My Cases'] },
  'citizen-download-order': { title: 'Download Final Order', role: 'Citizen', purpose: 'Download signed final order PDF.', actions: ['Download PDF', 'Back to My Cases'] },
  'citizen-rejected': { title: 'Rejected With Reasons', role: 'Citizen', purpose: 'View rejection reasons and next steps.', actions: ['View reasons', 'Contact office'] },

  'officer-login': { title: 'Officer Login', role: 'ASST / SK / LRA / CO', purpose: 'Select role and sign in.', actions: ['Choose role', 'Enter credentials', 'Sign In to Dashboard'] },
  'asst-dashboard': { title: 'ASST Dashboard', role: 'Dealing Assistant', purpose: 'Queue of new / pending / processed applications.', actions: ['Register New', 'Open Case', 'Filter list'] },
  'asst-register': { title: 'ASST — Register New Application', role: 'Dealing Assistant', purpose: 'Register a walk-in application.', actions: ['Fill applicant details', 'Register & Generate Acknowledgement', 'Cancel'] },
  'asst-case-detail': { title: 'ASST — Case Detail (Scrutiny)', role: 'Dealing Assistant', purpose: 'Scrutinise application; forward to SK or send back if incomplete.', actions: ['Verify docs', 'Forward to SK', 'Return as Incomplete'] },
  'sk-dashboard': { title: 'SK Dashboard', role: 'Supervisory Kanungo', purpose: 'Cases from ASST and LRA reports; KPIs.', actions: ['Assign LRA', 'Review Report', 'Switch tabs'] },
  'sk-case-detail': { title: 'SK Case Detail — Assign LRA', role: 'Supervisory Kanungo', purpose: 'Assign an LRA for field verification.', actions: ['Pick LRA', 'Set due date', 'Assign & Notify LRA'] },
  'sk-review': { title: 'SK Review — LRA Report', role: 'Supervisory Kanungo', purpose: 'Review LRA report; recommend to CO.', actions: ['Read report', 'Add recommendation', 'Forward to CO', 'Return to LRA'] },
  'lra-dashboard': { title: 'LRA Dashboard', role: 'Lot Revenue Assistant', purpose: 'Field assignments and submitted reports.', actions: ['Open Assignment', 'Submit Report'] },
  'lra-field-report': { title: 'LRA Field Report', role: 'Lot Revenue Assistant', purpose: 'Submit verification details, photos, GPS.', actions: ['Fill field observations', 'Attach photos', 'Save Draft', 'Submit Report to SK'] },
  'co-dashboard': { title: 'CO Dashboard', role: 'Circle Officer', purpose: 'Pending orders, KPIs, trends, SLA breaches.', actions: ['Order (decision)', 'Transfer (SLA breach)', 'Switch tabs'] },
  'co-decision': { title: 'CO Final Decision', role: 'Circle Officer', purpose: 'Final approve / reject / return.', actions: ['Approve → Issue Order', 'Reject with reasons', 'Return to SK'] },
  'co-transfer': { title: 'CO Transfer', role: 'Circle Officer', purpose: 'Reassign delayed case to a new LRA.', actions: ['Pick new LRA', 'Add justification', 'Confirm Transfer'] },
};
