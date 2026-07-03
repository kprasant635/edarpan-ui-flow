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
  start:    { bg: '#E63946', fg: '#ffffff', border: '#B7202D' },
  end:      { bg: '#0B1B2B', fg: '#ffffff', border: '#000000' },
  step:     { bg: '#CFE3FF', fg: '#0B3A82', border: '#3E7BD1' },
  process:  { bg: '#B7E8CE', fg: '#0E5B36', border: '#3EAE79' },
  scrutiny: { bg: '#FFD97D', fg: '#5B4200', border: '#D9A22D' },
  plain:    { bg: '#FFFFFF', fg: '#111827', border: '#9CA3AF' },
  assign:   { bg: '#BFDBFE', fg: '#1E3A8A', border: '#60A5FA' },
  decision: { bg: '#DDD3F8', fg: '#3B2870', border: '#8B6EEA' },
  success:  { bg: '#B7E8CE', fg: '#0E5B36', border: '#3EAE79' },
  reject:   { bg: '#FCA5A5', fg: '#7F1D1D', border: '#EF4444' },
};

// --------------------- COMPLETE e-DARPAN WORKFLOW ---------------------
// (Combines citizen + officer portal – mirrors the reference image style)
export const workflowFlow = {
  title: 'Complete e-Darpan Workflow',
  subtitle: 'End-to-end journey from citizen application to final order (Citizen + ASST + SK + LRA + CO)',
  nodes: [
    { id: 'start',   kind: 'start',    label: 'START',                              x:  40,  y: 360 },
    { id: 's1',      kind: 'step',     label: 'Step 1\nCitizen Submits Application', x: 260, y: 360, screen: 'citizen-new-application' },
    { id: 's2',      kind: 'step',     label: 'Step 2\nApp ID Sent via\nWhatsApp / SMS', x: 500, y: 360, screen: 'citizen-submission-success' },
    { id: 's3',      kind: 'scrutiny', label: 'Step 3\nDealing Asst\nScrutiny',      x:  40,  y: 640, screen: 'asst-case-detail' },
    { id: 'coDash',  kind: 'plain',    label: 'Case shown on\nCO Dashboard',         x: 260, y: 640, screen: 'co-dashboard' },
    { id: 's4',      kind: 'assign',   label: 'Step 4\nAuto-assigned\nto SK',        x: 500, y: 640, screen: 'sk-dashboard' },
    { id: 's5',      kind: 'process',  label: 'Step 5\nSK Assigns\nto LRA',          x: 740, y: 640, screen: 'sk-case-detail' },
    { id: 's6',      kind: 'process',  label: 'Step 6\nLRA Field\nVerification',     x: 980, y: 500, screen: 'lra-field-report' },
    { id: 's7',      kind: 'process',  label: 'Step 7\nSK Reviews\n& Recommends',    x: 740, y: 340, screen: 'sk-review' },
    { id: 's8',      kind: 'decision', label: 'Step 8\nCO Final\nDecision',          x: 980, y: 180, screen: 'co-decision' },
    { id: 's9',      kind: 'success',  label: 'Step 9\nOrder\nGenerated',            x: 1240, y: 60,  screen: 'citizen-download-order' },
    { id: 'end',     kind: 'end',      label: 'END',                                 x: 1450, y: 60 },
    { id: 'reject',  kind: 'reject',   label: 'Rejected\nWith Reasons',              x: 1240, y: 280, screen: 'citizen-rejected' },
  ],
  edges: [
    { from: 'start',  to: 's1',                                                       type: 'straight' },
    { from: 's1',     to: 's2',                                                       type: 'straight' },
    { from: 's2',     to: 's3',   label: '',                                          type: 'smoothstep' },
    { from: 's3',     to: 's1',   label: 'Incomplete',                                type: 'smoothstep' },
    { from: 's3',     to: 'coDash', label: 'Valid',                                   type: 'straight' },
    { from: 'coDash', to: 's4',                                                       type: 'straight' },
    { from: 's4',     to: 's5',                                                       type: 'straight' },
    { from: 's5',     to: 's6',                                                       type: 'smoothstep' },
    { from: 's6',     to: 's5',   label: 'Return',                                    type: 'smoothstep' },
    { from: 's6',     to: 's7',   label: 'Done',                                      type: 'smoothstep' },
    { from: 's7',     to: 's8',   label: 'Forward',                                   type: 'smoothstep' },
    { from: 's8',     to: 's7',   label: 'Return',                                    type: 'smoothstep' },
    { from: 's8',     to: 's9',   label: 'Approved',                                  type: 'smoothstep' },
    { from: 's9',     to: 'end',                                                      type: 'straight' },
    { from: 's8',     to: 'reject', label: 'Rejected',                                type: 'smoothstep' },
    // Return-to-citizen loops (dashed, muted)
    { from: 's5',     to: 's1',   label: 'SK Return To Citizen',   dashed: true,      type: 'smoothstep' },
    { from: 's6',     to: 's1',   label: 'LRA Return To Citizen',  dashed: true,      type: 'smoothstep' },
    { from: 's8',     to: 's1',   label: 'CO Return To Citizen',   dashed: true,      type: 'smoothstep' },
    { from: 's1',     to: 's5',   label: 'Citizen Return To SK',   dashed: true,      type: 'smoothstep' },
    { from: 's1',     to: 's6',   label: 'Citizen Return To LRA',  dashed: true,      type: 'smoothstep' },
    { from: 's1',     to: 's8',   label: 'Citizen Return To CO',   dashed: true,      type: 'smoothstep' },
  ],
};

// --------------------- CITIZEN PORTAL FLOW ---------------------
export const citizenFlow = {
  title: 'Citizen Portal – Screen Flow',
  subtitle: 'Derived from e-darpan-citizen-portal.html',
  nodes: [
    { id: 'start',   kind: 'start',   label: 'START',                        x:  40,  y: 280 },
    { id: 'login',   kind: 'step',    label: 'Phone Entry\n(Login)',         x: 220, y: 160, screen: 'citizen-phone-login' },
    { id: 'reg',     kind: 'step',    label: 'Phone Entry\n(New Registration)', x: 220, y: 400, screen: 'citizen-phone-register' },
    { id: 'otp',     kind: 'process', label: 'OTP\nVerification',            x: 460, y: 280, screen: 'citizen-otp' },
    { id: 'dashE',   kind: 'plain',   label: 'Dashboard\n(No Cases)',        x: 700, y: 160, screen: 'citizen-dashboard-empty' },
    { id: 'dash',    kind: 'process', label: 'Dashboard\n(My Cases)',        x: 700, y: 400, screen: 'citizen-dashboard' },
    { id: 'newApp',  kind: 'step',    label: 'New Application\nForm',        x: 960, y: 60,  screen: 'citizen-new-application' },
    { id: 'submit',  kind: 'success', label: 'Submission\nSuccess',          x: 1220, y: 60, screen: 'citizen-submission-success' },
    { id: 'query',   kind: 'scrutiny',label: 'Officer Query\nResponse',      x: 960, y: 260, screen: 'citizen-query-response' },
    { id: 'upload',  kind: 'step',    label: 'Upload Docs\n(for Query)',     x: 1220, y: 260, screen: 'citizen-upload-docs' },
    { id: 'track',   kind: 'assign',  label: 'Track Application\nStatus',    x: 960, y: 440, screen: 'citizen-track' },
    { id: 'down',    kind: 'success', label: 'Download\nOrder',              x: 960, y: 620, screen: 'citizen-download-order' },
    { id: 'end',     kind: 'end',     label: 'END',                          x: 1220, y: 620 },
  ],
  edges: [
    { from: 'start', to: 'login', type: 'straight' },
    { from: 'start', to: 'reg',   type: 'straight' },
    { from: 'login', to: 'reg',   label: 'New Registration tab', dashed: true, type: 'smoothstep' },
    { from: 'reg',   to: 'login', label: 'Login tab',            dashed: true, type: 'smoothstep' },
    { from: 'login', to: 'otp',   label: 'Continue',             type: 'smoothstep' },
    { from: 'reg',   to: 'otp',   label: 'Send OTP',             type: 'smoothstep' },
    { from: 'otp',   to: 'login', label: 'Change Number',        dashed: true, type: 'smoothstep' },
    { from: 'otp',   to: 'dashE', label: 'Verify (no cases)',    type: 'smoothstep' },
    { from: 'otp',   to: 'dash',  label: 'Verify (has cases)',   type: 'smoothstep' },
    { from: 'dashE', to: 'newApp',label: 'Submit New Application', type: 'smoothstep' },
    { from: 'dash',  to: 'newApp',label: 'New Application',       type: 'smoothstep' },
    { from: 'newApp',to: 'submit',label: 'Submit Application',    type: 'smoothstep' },
    { from: 'submit',to: 'dash',  label: 'View My Cases',         dashed: true, type: 'smoothstep' },
    { from: 'submit',to: 'newApp',label: 'Submit Another',        dashed: true, type: 'smoothstep' },
    { from: 'dash',  to: 'query', label: 'Respond to Query',      type: 'smoothstep' },
    { from: 'query', to: 'upload',label: 'Attach docs',           type: 'smoothstep' },
    { from: 'upload',to: 'dash',  label: 'Submit Documents',      dashed: true, type: 'smoothstep' },
    { from: 'query', to: 'dash',  label: 'Submit Response',       dashed: true, type: 'smoothstep' },
    { from: 'dash',  to: 'track', label: 'Track',                 type: 'smoothstep' },
    { from: 'track', to: 'dash',  label: 'Back to My Cases',      dashed: true, type: 'smoothstep' },
    { from: 'dash',  to: 'down',  label: 'Download Order',        type: 'smoothstep' },
    { from: 'down',  to: 'end',                                   type: 'straight' },
  ],
};

// --------------------- OFFICER PORTAL FLOW ---------------------
export const officerFlow = {
  title: 'Officer Portal – Screen Flow',
  subtitle: 'Derived from e-darpan-officer-portal.html (ASST · SK · LRA · CO)',
  nodes: [
    { id: 'start',      kind: 'start',    label: 'START',                              x:  40, y: 380 },
    { id: 'login',      kind: 'step',     label: 'Officer Login\n(Role Select)',        x: 220, y: 380, screen: 'officer-login' },

    // ASST lane (top)
    { id: 'asstDash',   kind: 'step',     label: 'ASST\nDashboard',                     x: 460, y: 80,  screen: 'asst-dashboard' },
    { id: 'asstReg',    kind: 'plain',    label: 'ASST\nRegister New App',              x: 720, y: 20,  screen: 'asst-register' },
    { id: 'asstCase',   kind: 'scrutiny', label: 'ASST Case\nDetail (Scrutiny)',        x: 720, y: 160, screen: 'asst-case-detail' },

    // SK lane
    { id: 'skDash',     kind: 'process',  label: 'SK\nDashboard',                       x: 460, y: 320, screen: 'sk-dashboard' },
    { id: 'skCase',     kind: 'process',  label: 'SK Case Detail\n(Assign LRA)',        x: 720, y: 320, screen: 'sk-case-detail' },
    { id: 'skReview',   kind: 'process',  label: 'SK Review\n(LRA Report)',             x: 960, y: 320, screen: 'sk-review' },

    // LRA lane
    { id: 'lraDash',    kind: 'assign',   label: 'LRA\nDashboard',                      x: 460, y: 540, screen: 'lra-dashboard' },
    { id: 'lraReport',  kind: 'assign',   label: 'LRA Field\nReport',                   x: 720, y: 540, screen: 'lra-field-report' },

    // CO lane (bottom)
    { id: 'coDash',     kind: 'plain',    label: 'CO\nDashboard',                       x: 460, y: 740, screen: 'co-dashboard' },
    { id: 'coDecision', kind: 'decision', label: 'CO Final\nDecision',                  x: 960, y: 740, screen: 'co-decision' },
    { id: 'coTransfer', kind: 'scrutiny', label: 'CO Transfer\n(Reassign LRA)',         x: 720, y: 880, screen: 'co-transfer' },

    // Outcomes
    { id: 'order',      kind: 'success',  label: 'Order\nIssued',                       x: 1220, y: 640, screen: 'citizen-download-order' },
    { id: 'reject',     kind: 'reject',   label: 'Rejected\nWith Reasons',              x: 1220, y: 820, screen: 'citizen-rejected' },
    { id: 'end',        kind: 'end',      label: 'END',                                 x: 1420, y: 720 },
  ],
  edges: [
    { from: 'start',     to: 'login', type: 'straight' },
    { from: 'login',     to: 'asstDash', label: 'Role = ASST', type: 'smoothstep' },
    { from: 'login',     to: 'skDash',   label: 'Role = SK',   type: 'smoothstep' },
    { from: 'login',     to: 'lraDash',  label: 'Role = LRA',  type: 'smoothstep' },
    { from: 'login',     to: 'coDash',   label: 'Role = CO',   type: 'smoothstep' },

    // ASST flow
    { from: 'asstDash',  to: 'asstReg',  label: 'Register New', type: 'smoothstep' },
    { from: 'asstReg',   to: 'asstDash', label: 'Save / Cancel', dashed: true, type: 'smoothstep' },
    { from: 'asstDash',  to: 'asstCase', label: 'Open Case',    type: 'smoothstep' },
    { from: 'asstCase',  to: 'skDash',   label: 'Forward to SK', type: 'smoothstep' },

    // SK flow
    { from: 'skDash',    to: 'skCase',   label: 'Assign LRA',   type: 'smoothstep' },
    { from: 'skCase',    to: 'lraDash',  label: 'Notify LRA',   type: 'smoothstep' },
    { from: 'skDash',    to: 'skReview', label: 'Review LRA Report', type: 'smoothstep' },
    { from: 'skReview',  to: 'coDash',   label: 'Forward to CO', type: 'smoothstep' },

    // LRA flow
    { from: 'lraDash',   to: 'lraReport',label: 'Submit Report',type: 'smoothstep' },
    { from: 'lraReport', to: 'skDash',   label: 'Report to SK', type: 'smoothstep' },

    // CO flow
    { from: 'coDash',    to: 'coDecision', label: 'Order',      type: 'smoothstep' },
    { from: 'coDash',    to: 'coTransfer', label: 'SLA breach - Transfer', type: 'smoothstep' },
    { from: 'coTransfer',to: 'lraDash',    label: 'Reassign',   dashed: true, type: 'smoothstep' },
    { from: 'coDecision',to: 'order',      label: 'Approved',   type: 'smoothstep' },
    { from: 'coDecision',to: 'reject',     label: 'Rejected',   type: 'smoothstep' },
    { from: 'coDecision',to: 'skReview',   label: 'Return',     dashed: true, type: 'smoothstep' },
    { from: 'order',     to: 'end',        type: 'straight' },
    { from: 'reject',    to: 'end',        type: 'straight' },
  ],
};

// --------------------- SCREEN DETAILS (right-side drawer) ---------------------
export const screenDetails = {
  'citizen-phone-login':      { title: 'Phone Entry — Login',            role: 'Citizen', purpose: 'Existing user enters 10-digit mobile number to log in.', actions: ['Enter phone number', 'Continue → OTP', 'Switch to New Registration'] },
  'citizen-phone-register':   { title: 'Phone Entry — New Registration', role: 'Citizen', purpose: 'New user provides phone, name, email, address to register.', actions: ['Fill registration form', 'Send OTP', 'Switch to Login'] },
  'citizen-otp':              { title: 'OTP Verification',               role: 'Citizen', purpose: 'Enter 6-digit OTP sent to mobile.',                        actions: ['Enter OTP', 'Verify & Continue', 'Change Number', 'Resend OTP'] },
  'citizen-dashboard':        { title: 'Dashboard — With Cases',         role: 'Citizen', purpose: 'View profile, stats and list of applications.',            actions: ['New Application', 'Track case', 'Respond to Query', 'Download Order'] },
  'citizen-dashboard-empty':  { title: 'Dashboard — Empty State',        role: 'Citizen', purpose: 'Prompt user to submit their first application.',           actions: ['Submit New Application'] },
  'citizen-new-application':  { title: 'New Application Form',           role: 'Citizen', purpose: 'Fill service details + upload supporting documents.',      actions: ['Choose service', 'Fill land / applicant details', 'Upload docs', 'Submit / Cancel'] },
  'citizen-submission-success':{title: 'Submission Success',             role: 'Citizen', purpose: 'Confirmation with Application ID; sent via WhatsApp/SMS.', actions: ['View My Cases', 'Submit Another'] },
  'citizen-query-response':   { title: 'Officer Query Response',         role: 'Citizen', purpose: 'Read officer query and post clarification + docs.',        actions: ['Type response', 'Attach documents', 'Submit Response'] },
  'citizen-upload-docs':      { title: 'Upload Docs (Query)',            role: 'Citizen', purpose: 'Upload additional documents requested by officer.',        actions: ['Choose file(s)', 'Submit Documents', 'Cancel'] },
  'citizen-track':            { title: 'Track Application',              role: 'Citizen', purpose: 'Timeline view of case progress across stages.',            actions: ['View timeline', 'Back to My Cases'] },
  'citizen-download-order':   { title: 'Download Final Order',           role: 'Citizen', purpose: 'Download signed final order PDF.',                         actions: ['Download PDF', 'Back to My Cases'] },
  'citizen-rejected':         { title: 'Rejected With Reasons',          role: 'Citizen', purpose: 'View rejection reasons and next steps.',                   actions: ['View reasons', 'Contact office'] },

  'officer-login':            { title: 'Officer Login',                  role: 'ASST / SK / LRA / CO', purpose: 'Select role and sign in.',                     actions: ['Choose role', 'Enter credentials', 'Sign In to Dashboard'] },
  'asst-dashboard':           { title: 'ASST Dashboard',                 role: 'Dealing Assistant',  purpose: 'Queue of new / pending / processed applications.', actions: ['Register New', 'Open Case', 'Filter list'] },
  'asst-register':            { title: 'ASST — Register New Application',role: 'Dealing Assistant',  purpose: 'Register a walk-in application.',                actions: ['Fill applicant details', 'Register & Generate Acknowledgement', 'Cancel'] },
  'asst-case-detail':         { title: 'ASST — Case Detail (Scrutiny)',  role: 'Dealing Assistant',  purpose: 'Scrutinise application; forward to SK or send back if incomplete.', actions: ['Verify docs', 'Forward to SK', 'Return as Incomplete'] },
  'sk-dashboard':             { title: 'SK Dashboard',                   role: 'Supervisory Kanungo',purpose: 'Cases from ASST and LRA reports; KPIs.',          actions: ['Assign LRA', 'Review Report', 'Switch tabs'] },
  'sk-case-detail':           { title: 'SK Case Detail — Assign LRA',    role: 'Supervisory Kanungo',purpose: 'Assign an LRA for field verification.',           actions: ['Pick LRA', 'Set due date', 'Assign & Notify LRA'] },
  'sk-review':                { title: 'SK Review — LRA Report',         role: 'Supervisory Kanungo',purpose: 'Review LRA report; recommend to CO.',             actions: ['Read report', 'Add recommendation', 'Forward to CO', 'Return to LRA'] },
  'lra-dashboard':            { title: 'LRA Dashboard',                  role: 'Lot Revenue Assistant', purpose: 'Field assignments and submitted reports.',     actions: ['Open Assignment', 'Submit Report'] },
  'lra-field-report':         { title: 'LRA Field Report',               role: 'Lot Revenue Assistant', purpose: 'Submit verification details, photos, GPS.',    actions: ['Fill field observations', 'Attach photos', 'Save Draft', 'Submit Report to SK'] },
  'co-dashboard':             { title: 'CO Dashboard',                   role: 'Circle Officer',     purpose: 'Pending orders, KPIs, trends, SLA breaches.',     actions: ['Order (decision)', 'Transfer (SLA breach)', 'Switch tabs'] },
  'co-decision':              { title: 'CO Final Decision',              role: 'Circle Officer',     purpose: 'Final approve / reject / return.',                actions: ['Approve → Issue Order', 'Reject with reasons', 'Return to SK'] },
  'co-transfer':              { title: 'CO Transfer',                    role: 'Circle Officer',     purpose: 'Reassign delayed case to a new LRA.',             actions: ['Pick new LRA', 'Add justification', 'Confirm Transfer'] },
};
