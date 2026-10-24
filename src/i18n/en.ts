// English copy. zh.ts must have exactly the same shape (enforced by the Dict type).
// Tone: measured and factual, no absolute promises; feature plus benefit ("…, reducing …"); "browser profile" in prose,
// "profile" where space is tight (counts, table headings).
export const en = {
  meta: {
    title: 'Folio Browser',
    description: 'A fingerprint browser for teams running multiple stores, ad accounts and social accounts: a separate browser profile for each account, with configurable fingerprints, isolated cookies and a dedicated proxy IP.'
  },
  nav: { who: 'Use cases', inside: 'Isolation', teams: 'Teams', automation: 'Automation', pricing: 'Pricing', faq: 'FAQ', login: 'Log in', start: 'Try free', account: 'Account', menu: 'Menu' },
  plans: { free: 'Free', studio: 'Studio', company: 'Company' },
  periods: { monthly: 'monthly', yearly: 'yearly' },

  hero: {
    eyebrow: 'Fingerprint browser for multi-account teams',
    h1: 'Isolated browser profiles for every account.',
    lead: 'Folio provides a separate browser profile for each account, with configurable fingerprints, isolated cookies and a dedicated proxy IP, so many accounts can run independently and be managed in one place.',
    ctaStart: 'Try 5 browser profiles free', ctaDownload: 'Download the app',
    fine: 'Windows 10 and later · macOS 12 and later · No card required',
    showcase: { label: 'Workbench walkthrough: checking proxies, opening a browser profile, restoring tabs, a health check, installing an extension, batch opening, window sync and teamwork.', pause: 'Pause walkthrough', play: 'Play walkthrough' },
    sample: { name: 'UK-Shop-01', place: 'London · Firefox 156', status: 'Running' },
    spec: [
      ['Chromium 150 · Firefox 156', 'two engines, selectable per profile'],
      ['Canvas, WebGL, audio, fonts', 'generated independently per profile'],
      ['HTTP · HTTPS · SOCKS5', 'connectivity checked before use'],
      ['CDP · WebDriver BiDi', 'local API for automation scripts']
    ]
  },

  who: {
    eyebrow: 'Use cases',
    title: 'Account linking is the main risk of running many accounts',
    lead: 'When linking accounts, platforms look beyond the IP address at a range of device details exposed by the browser. A separate browser profile for each account reduces how much of that information overlaps.',
    items: [
      { tag: 'E-commerce sellers', title: 'Run stores independently and limit the impact of one store’s issues on the others.', body: 'Assign each store a fixed browser profile and proxy line, keeping its sign-in location and device details consistent.', fit: 'For seller teams operating several stores' },
      { tag: 'Ad agencies', title: 'Separate browser profiles per client keep ad accounts apart.', body: 'Hand browser profiles over between team members with sign-ins and settings intact, reducing repeated logins and verification and speeding up handovers.', fit: 'For agencies serving multiple clients' },
      { tag: 'Social teams', title: 'Maintain many social accounts with less routine work.', body: 'Sync a single action across several windows, and let scheduled tasks handle routine sign-ins and checks.', fit: 'For content teams managing large numbers of accounts' }
    ]
  },

  inside: {
    eyebrow: 'Isolation',
    title: 'Fingerprints configured independently, signal by signal',
    groups: [
      ['Device', ['User-Agent', 'Client hints', 'CPU cores', 'Device memory', 'Touch support']],
      ['Rendering', ['Canvas', 'WebGL image', 'WebGL renderer', 'AudioContext', 'Font list']],
      ['Network', ['Proxy IP', 'WebRTC', 'DNS']],
      ['Region', ['Time zone', 'Language', 'Geolocation']],
      ['Storage', ['Cookies', 'LocalStorage', 'IndexedDB', 'Cache', 'Extensions']]
    ] as [string, string[]][],
    note: 'Fingerprints are built from real device parameter combinations, so the system, GPU and fonts are consistent and implausible combinations are avoided.',
    compareTitle: 'One proxy: a regular browser compared with a Folio browser profile',
    compareHint: 'Mismatches in the left column can be used by platforms to link accounts.',
    cols: ['Check', 'Regular browser with a proxy', 'Folio browser profile'],
    rows: [
      ['Exit IP', 'Seattle', 'Seattle', false],
      ['Time zone', 'Asia/Shanghai', 'America/Los_Angeles', true],
      ['Language', 'zh-CN', 'en-US', true],
      ['WebRTC', 'Exposes the real IP', 'Real IP not exposed', true],
      ['Geolocation', 'Returns the real location', 'Near Seattle', true],
      ['Canvas hash', 'Identical across accounts', 'Unique to this profile', true],
      ['Cookies', 'Shared across accounts', 'Stored per browser profile', true]
    ] as [string, string, string, boolean][],
    leak: 'Mismatch', match: 'Match'
  },

  team: {
    eyebrow: 'Teams',
    title: 'Browser profiles managed centrally by the team',
    lead: 'Accounts and browser profiles belong to the team, not to an individual’s device.',
    points: [
      ['Assigned by person', 'Members can access only the browser profiles assigned to them.'],
      ['Password-free access', 'Members use saved sign-ins without needing account passwords.'],
      ['Immediate handover', 'When a member is removed, their browser profiles can be reassigned right away.'],
      ['Traceable activity', 'Opening, editing and handing over browser profiles is recorded for review.']
    ],
    panelTitle: 'US operations', panelMeta: '3 active · 46 profiles', active: 'Active', left: 'Left',
    members: [
      ['MC', 'Maya Chen', 'Stores and social · 24 profiles', false],
      ['DO', 'Daniel Okafor', 'Media buyer · 12 profiles', false],
      ['SR', 'Sofia Ruiz', 'EU stores · 10 profiles', false],
      ['JP', 'Jonah Park', 'Stores · 18 profiles reassigned', true]
    ] as [string, string, string, boolean][],
    logTitle: 'Activity',
    log: [
      ['10-21 09:12', 'Maya Chen opened US-Store-07'],
      ['10-21 08:55', 'Daniel Okafor changed the proxy on Ads-Client-03'],
      ['10-20 18:40', 'Admin removed Jonah Park and reassigned 18 profiles to Maya Chen']
    ],
    example: 'Example'
  },

  auto: {
    eyebrow: 'Automation',
    title: 'Bulk actions and automation reduce repetitive work',
    noCode: 'No code',
    noCodePoints: [
      ['Window sync', 'Sync clicks, typing and scrolling from a leading window to other windows.'],
      ['Bulk actions', 'Import browser profiles from a spreadsheet, and change proxies or import cookies in bulk.'],
      ['Scheduled tasks', 'Open browser profiles on a schedule, check their sign-in status and receive alerts when something is wrong.']
    ],
    withCode: 'With code',
    withCodeBody: 'A local API starts browser profiles and returns their debugging address, for use with Playwright, Puppeteer, Selenium and similar tools.',
    libs: ['Playwright', 'Puppeteer', 'Selenium', 'CDP · WebDriver BiDi']
  },

  trust: {
    eyebrow: 'Free trial',
    title: 'Try first, then choose a plan',
    items: [
      ['5 browser profiles, free', 'No card required and no time limit; enough to validate a complete workflow.'],
      ['Verify it yourself', 'Open fingerprint test sites inside a browser profile to check its configuration and isolation.'],
      ['7-day refund', 'A full refund can be requested within 7 days of payment.'],
      ['Export at any time', 'Browser profile settings and cookies can be exported at any time.']
    ]
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Priced by browser profile, with unlimited members',
    monthly: 'Monthly', yearly: 'Yearly', save: 'save 20%',
    perMonth: '/ month', forever: 'free forever',
    perProfile: (amount: string) => `${amount} per profile a month`,
    billedMonthly: 'Billed monthly, cancel anytime',
    billedYearly: (total: string) => `Billed yearly, ${total} in total`,
    noCard: 'No card required',
    profilesMembers: (p: number, m: string) => `${p} profiles · ${m}`,
    oneMember: '1 member', unlimitedMembers: 'unlimited members',
    flag: 'For teams of 3–20',
    for: { free: 'Core features', studio: 'Day-to-day work for one team', company: 'Several teams and business lines' },
    cta: { free: 'Try free', studio: 'Try free for 7 days', company: 'Contact sales' },
    features: {
      free: ['Chromium and Firefox engines, full fingerprint settings', 'Proxy checks with automatic time zone and language', 'Local API', 'Docs and community support'],
      studio: ['Unlimited members', 'Window sync and bulk actions', 'Team permissions and browser profile handover', '30-day activity log', 'Live chat on weekdays'],
      company: ['Everything in Studio', 'Browser profiles grouped by department', '1-year activity log with export', 'Dedicated support channel, 12 hours a day', 'Unthrottled API']
    },
    buy: 'Buy now', soon: 'Coming soon',
    calc: {
      title: 'Select the number of browser profiles', hint: 'Adjust the slider to see the matching plan and price.',
      best: 'Recommended', cheapest: 'Lowest cost',
      profiles: (n: number) => `${n} profiles`,
      withPacks: (plan: string, packs: number) => `${plan} + ${packs} add-on ${packs === 1 ? 'pack' : 'packs'}`,
      fit: (n: number, pick: string) => `${n} profiles: ${pick}`,
      company: (amount: string) => `Company costs ${amount} a month for the same number and adds departments, a 1-year activity log and an unthrottled API.`,
      custom: (max: number) => `More than ${max.toLocaleString('en-US')} profiles`, customBody: 'A custom quote is available for your team.',
      buy: 'Buy this plan'
    },
    foot: (pack: string) => `Additional browser profiles cost ${pack} a month per 100; above 2,000, a custom quote is available. Prices exclude local taxes, and an invoice is issued for every payment.`
  },

  faq: {
    eyebrow: 'FAQ', title: 'Frequently asked questions', lead: 'For other questions,', contact: 'contact us',
    items: [
      ['Can Folio guarantee that accounts will not be banned?', 'No. Folio reduces the risk of several accounts being identified as the same device. Accounts that break platform rules, or that use low-quality proxy IPs, may still be restricted. A dedicated residential or ISP proxy for each browser profile is recommended.'],
      ['Are my own proxies required?', 'Yes. HTTP, HTTPS and SOCKS5 proxies are supported and can be added one by one or imported in bulk. Each is checked for connectivity and exit location, and the time zone and language are set to match.'],
      ['Should I use Chromium or Firefox?', 'Chromium is recommended for most accounts; each Chromium browser profile has a stable, distinct fingerprint. Firefox suits sites that expect Firefox users. Firefox browser profiles on the same computer share more of their fingerprint, so many accounts on one platform should not all use Firefox.'],
      ['Where is browser profile data stored?', 'By default it is encrypted and synced to the cloud, so work can continue on another computer. Individual browser profiles can also be kept on one computer only. All data can be exported at any time.'],
      ['How are the engines updated?', 'Folio uses open-source fingerprint engines and releases new versions after testing. Existing browser profiles keep their engine version and can be upgraded when convenient.']
    ] as [string, string][]
  },

  band: {
    title: 'Try 5 browser profiles free',
    body: 'Create an account and download the app to start setting up browser profiles.',
    windows: 'Download for Windows', mac: 'Download for macOS',
    fine: 'Beta · Chromium 150 and Firefox 156 engines'
  },

  footer: { docs: 'Docs', api: 'API reference', changelog: 'Changelog', privacy: 'Privacy', terms: 'Terms', sales: 'Contact sales', rights: '© 2026 Folio', product: 'Product', resources: 'Resources', company: 'Company' },

  auth: {
    signupTitle: 'Create a Folio account', signupLead: 'Try 5 browser profiles free. No card required.',
    loginTitle: 'Log in to Folio', email: 'Email', password: 'Password', passwordHint: 'At least 8 characters',
    signup: 'Create account', login: 'Log in', haveAccount: 'Already have an account?', noAccount: 'New to Folio?',
    forgot: 'Forgot password?',
    verifyTitle: 'Verify your email', verifyLead: (email: string) => `A 6-digit code was sent to ${email}. It is valid for 15 minutes.`,
    code: 'Code', verify: 'Verify', resend: 'Send a new code', resent: 'A new code has been sent.',
    verified: 'Email verified.',
    forgotTitle: 'Reset password', forgotLead: 'Enter the account email to receive a code.',
    sendCode: 'Send code', resetTitle: 'Set a new password', newPassword: 'New password', reset: 'Save',
    resetDone: 'Password updated. Log in with the new password.',
    devNotice: 'Development build: emails go to the local test inbox at http://127.0.0.1:47125.',
    logout: 'Log out',
    showPassword: 'Show password',
    points: ['Download the app after signing up', 'One account for the website and the app', 'Export data at any time']
  },

  checkout: {
    title: 'Choose a plan', workspace: 'Workspace', plan: 'Plan', billing: 'Billing',
    packs: 'Add-on packs', packsHint: '100 profiles per pack', total: 'Due today',
    steps: ['Choose a plan', 'Payment', 'Done'], chosen: 'Selected', edit: 'Change', next: 'Continue',
    current: (plan: string) => `Current plan: ${plan}`,
    currentTrial: (plan: string) => `Current plan: ${plan} (trial)`,
    lines: {
      plan: (plan: string, period: string) => `${plan}, ${period}`,
      addon: (qty: number, prorated: boolean) => `${qty} × add-on pack (100 profiles)${prorated ? ', prorated for the rest of this period' : ''}`,
      credit: (plan: string) => `Credit for unused ${plan} time`
    },
    change: {
      new: 'Effective today.', upgrade: 'Effective today; unused time on the current plan is credited.', addon: 'Effective immediately.',
      'reduce-addon': 'Effective immediately. Browser profiles above the new limit must be archived; no refund for this period.',
      downgrade: 'Takes effect at the end of the current period. No payment due now.'
    },
    card: 'Card', cardNumber: 'Card number', expiry: 'Expiry (MM/YY)', cvc: 'CVC', name: 'Name on card',
    pay: (amount: string) => `Pay ${amount}`, confirm: 'Confirm change',
    soon: 'Paid plans open soon. Studio can be tried free in the meantime, or Free can continue to be used.', soonPay: 'Coming soon',
    trial: 'Or try Studio free for 7 days', trialCta: 'Start trial',
    mockTitle: 'Test payments', mockBody: 'No charge is made. Use card 4242 4242 4242 4242 with any future expiry date; 4000 0000 0000 0002 will be declined.',
    success: 'Payment received. The plan is active.', applied: 'Change saved.', trialStarted: 'Trial started. Studio is available for 7 days.',
    toAccount: 'Go to account', noManage: 'Only owners and admins can change this workspace’s plan.'
  },

  account: {
    title: 'Account', profile: 'Profile', language: 'Language', emailStatus: 'Email verification',
    verified: 'Verified', unverified: 'Not verified', verifyNow: 'Verify now',
    workspaces: 'Workspaces', newWorkspace: 'New workspace', create: 'Create', rename: 'Rename', save: 'Save', cancel: 'Cancel', current: 'Current',
    roles: { owner: 'Owner', admin: 'Admin', member: 'Member' },
    plan: 'Plan', usage: (used: number, limit: number) => `${used} of ${limit} profiles used`,
    unlimited: 'Unlimited members',
    renews: (date: string) => `Renews on ${date}`, ends: (date: string) => `Ends on ${date}`,
    trialEnds: (date: string) => `Trial ends on ${date}`,
    scheduled: (plan: string, date: string) => `Changes to ${plan} on ${date}`,
    changePlan: 'Change plan', addProfiles: 'Add profiles', startTrial: 'Try Studio free for 7 days',
    cancelPlan: 'Cancel at period end', resume: 'Resume renewal',
    cancelConfirm: 'Cancel the plan? It remains available until the end of the current period.', confirmCancel: 'Cancel plan',
    payments: 'Payments and invoices', noPayments: 'No payments yet.',
    cols: ['Date', 'Invoice', 'Amount', 'Status', ''],
    paid: 'Paid', refunded: 'Refunded', invoice: 'Invoice', refund: 'Refund',
    refundConfirm: 'Refund this payment? The plan returns to its state before this payment.', confirmRefund: 'Refund',
    download: 'Download the app', downloadBody: 'Log in to the desktop app with the same account; plan and workspace details sync automatically.',
    downloadCta: 'Download',
    invitations: 'Invitations', invitedBy: (inviter: string, role: string) => `Invited by ${inviter} as ${role}`, accept: 'Join', decline: 'Decline'
  },
  invite: {
    title: 'Team invitation', checking: 'Checking the invitation…',
    missing: 'The link contains no invitation. Open the link in the email again.',
    gone: 'This invitation is no longer valid: it was accepted, withdrawn or replaced by a newer one.',
    lead: (inviter: string, workspace: string, role: string) => `${inviter} invited you to join the Folio workspace ${workspace} as ${role}.`,
    roles: { admin: 'an admin', member: 'a member' }, forEmail: (email: string) => `Invited email: ${email}`,
    expires: (date: string) => `Expires on ${date}`,
    expired: 'This invitation has expired. Ask the inviter to send a new one.',
    login: 'Log in to accept', signup: 'Create an account',
    wrong: (invited: string, current: string) => `This invitation is for ${invited}; the current account is ${current}.`, switch: 'Log out and switch account',
    verify: 'Verify your email first; this page reopens afterwards.', verifyCta: 'Verify email',
    accept: (workspace: string) => `Join ${workspace}`, decline: 'Decline',
    joined: (workspace: string) => `Joined ${workspace}.`,
    joinedLead: 'Log in to the Folio app with this account to find the workspace in the workspace menu.',
    download: 'Download the app', account: 'Go to account', declined: 'Invitation declined.'
  },

  invoice: {
    title: 'Invoice', number: 'Invoice number', date: 'Date', billedTo: 'Billed to', workspace: 'Workspace',
    period: 'Service period', item: 'Description', amount: 'Amount', total: 'Total', paidWith: (brand: string, last4: string) => `Paid with ${brand} ending ${last4}`,
    refunded: (date: string) => `Refunded on ${date}`, print: 'Print or save as PDF', back: 'Back to account',
    seller: 'Folio', sellerNote: 'Test invoice. No payment was made.'
  },

  sales: {
    title: 'Contact sales', lead: 'For more than 500 browser profiles, several departments or a custom plan, submit your requirements and the sales team will reply within one working day.',
    points: [
      ['More than 500 browser profiles', 'Custom quotes by volume, including above 2,000.'],
      ['Department management', 'Browser profiles grouped by department, with a 1-year activity log and export.'],
      ['Reply within one working day', 'A dedicated contact on working days; product demos available.']
    ] as [string, string][],
    name: 'Name', email: 'Work email', company: 'Company', teamSize: 'Team size', message: 'Requirements',
    send: 'Submit', sent: 'Requirements received. The sales team will contact you within one working day.'
  },

  download: {
    title: 'Download Folio', lead: 'Install the desktop app and log in with your Folio account; plan, team and browser profiles sync automatically.',
    windows: 'Windows 10 and later, 64-bit', mac: 'macOS 12 and later, Apple silicon (M1 and newer)', get: 'Download', soon: 'Coming soon',
    version: (v: string) => `Version ${v}`, released: (date: string) => `Released ${date}`,
    notesTitle: 'First-time installation',
    winNote: 'Folio is not code-signed yet. If SmartScreen blocks the installer, click “More info”, then “Run anyway”.',
    macNote: 'Folio is not code-signed yet. Drag Folio into Applications. If macOS does not open it the first time, go to System Settings › Privacy & Security and click “Open Anyway”. If it reports that the app is damaged, run xattr -cr /Applications/Folio.app in Terminal and open it again.',
    stepsTitle: 'Three steps after installation',
    steps: [
      ['Download and install', 'On Windows, run the installer; on macOS, drag Folio into Applications.'],
      ['Log in with your Folio account', 'Plan, team and browser profiles sync automatically.'],
      ['Engines download on first use', 'Engines come from each project’s official releases on GitHub and are checked against their published checksums.']
    ] as [string, string][],
    already: 'Existing plans apply automatically after logging in to the app.'
  },

  docs: {
    title: 'Docs', lead: 'Guides for browser profiles, proxies and teams will be published here.',
    search: 'Search docs', toc: 'On this page', soon: 'Coming soon', home: 'Docs',
    nav: { guides: 'Guides', api: 'API reference', other: 'More', start: 'Quick start', profiles: 'Browser profiles and fingerprints', proxies: 'Proxies', team: 'Teams' },
    apiTitle: 'API reference', apiLead: 'Folio’s local API lets scripts on the same computer open browser profiles and hand them to existing automation tools. It runs inside the Folio app and is available on that computer only.',
    api: {
      setupTitle: 'Enabling the API',
      setup: [
        'In the Folio app, open API & scripts, enable the local API and create a token. The token is shown once; copy it immediately.',
        'Requests go to http://127.0.0.1:47210 (the port can be changed on the same page) with the header Authorization: Bearer <token>. A token belongs to its creator and workspace, works only on the computer where it was created, and has the creator’s permissions: members can reach only their own profiles.'
      ],
      limitsTitle: 'Rate limits',
      limits: 'Free and Studio allow 60 requests a minute, including opening, closing and queries; Company is unthrottled. Commands sent to the browser over its debugging address are not counted. Above the limit, requests return 429 with a Retry-After header in seconds.',
      enginesTitle: 'Engines and tools',
      engines: [
        ['Chromium profiles', 'Return a CDP address (wsEndpoint) and, for Selenium, a debuggerAddress. Supported: Playwright (connectOverCDP), Puppeteer, Selenium with chromedriver for Chromium 150, and other CDP clients.'],
        ['Firefox profiles', 'Return a WebDriver BiDi address. Supported: Puppeteer (protocol: webDriverBiDi) and other WebDriver BiDi clients. Playwright and Selenium cannot attach to a Firefox instance that is already running. While a script controls a Firefox profile, scheduled tasks skip it.']
      ] as [string, string][],
      endpointsTitle: 'Endpoints',
      endpointsLead: 'A profile is identified by its number (42 or 0042) or its id.',
      endpoints: [
        ['GET', '/api/v1/profiles', 'Profiles visible to the current account: id, number, name, engine and running state.'],
        ['POST', '/api/v1/profiles/{number}/start', 'Opens the profile as the app does (lock, saved sign-ins, proxy) and returns protocol and wsEndpoint, plus debuggerAddress for Chromium. A profile already opened through the API returns the same address. It opens on one blank tab; add ?restoreTabs=1 to reopen the tabs it was last closed with.'],
        ['GET', '/api/v1/profiles/{number}', 'Running state, with the debugging address if it was opened through the API.'],
        ['POST', '/api/v1/profiles/{number}/stop', 'Closes the profile and saves its sign-ins as usual.'],
        ['GET', '/api/v1/tasks', 'The workspace’s tasks, each with its most recent run.'],
        ['POST', '/api/v1/tasks/{id}/run', 'Runs a task on this computer and returns runId.'],
        ['GET', '/api/v1/runs/{id}', 'A run’s status and counts, with each profile’s result and extracted data.']
      ] as [string, string, string][],
      errorsTitle: 'Errors',
      errorsLead: 'Errors return { "error": { "code", "message" } }.',
      errors: [
        ['401', 'unauthorized', 'The token is missing, unknown or revoked, or was created by an account other than the one logged in to the app.'],
        ['404', 'not_found', 'No such profile, task or run among those visible.'],
        ['409', 'running_without_api', 'The profile was opened manually and has no debugging address. Close it, then start it through the API.'],
        ['409', 'locked', 'The profile is in use on another computer.'],
        ['409', 'task_running', 'The task is already running.'],
        ['429', 'rate_limited', 'More than 60 requests a minute on Free or Studio; retryAfter gives the seconds to wait.'],
        ['502', 'proxy_down', 'The profile’s proxy did not respond and no backup line is available.']
      ] as [string, string, string][],
      examplesTitle: 'Examples',
      examples: { playwright: 'Playwright · Chromium profile', puppeteer: 'Puppeteer · Chromium profile', selenium: 'Selenium (Python) · Chromium profile', firefox: 'Puppeteer · Firefox profile' },
      securityTitle: 'Security',
      security: 'The debugging address has no password. While a profile opened through the API is running, any program on that computer can control it, as with any browser debugging port. Profiles opened manually have no debugging address, and the API listens on 127.0.0.1 only.'
    },
    changelogTitle: 'Changelog',
    changelog: [['0.1 · October 2026', 'Accounts, workspaces, plans and the first release of the desktop app.']] as [string, string][]
  },

  legal: {
    privacyTitle: 'Privacy policy', termsTitle: 'Terms of service',
    draft: 'Draft. The final text is in preparation and will replace this page before launch.',
    privacyBody: [
      'We collect the email address and password used to register, the workspaces created and the plan selected.',
      'Browser profile data selected for sync is encrypted before it is stored.',
      'We do not sell user data.'
    ],
    termsBody: [
      'Folio is a tool for managing multiple browser profiles. Users are responsible for following the rules of the platforms they use.',
      'Paid plans renew until cancelled. The most recent payment can be refunded within 7 days.'
    ]
  },

  errors: {
    email_taken: 'This email is already registered. Log in instead.',
    invalid_credentials: 'Incorrect email or password.',
    unauthenticated: 'Log in to continue.',
    code_invalid: 'Incorrect code. Check the email and try again.',
    code_expired: 'The code has expired. Request a new one.',
    too_many_attempts: 'Too many incorrect attempts. Request a new code.',
    already_verified: 'This email is already verified.',
    email_not_verified: 'Verify the email address before changing the plan.',
    card_invalid: 'Check the card number and security code.',
    card_expired: 'The card has expired.',
    card_declined: 'The card was declined. Use another card.',
    insufficient_funds: 'Insufficient funds on the card.',
    checkout_expired: 'The checkout has expired. Start again.',
    checkout_closed: 'This checkout has ended. Start again.',
    quote_stale: 'The plan changed in the meantime. Review the new total and try again.',
    no_change: 'This is already the current plan.',
    change_packs_separately: 'Change add-on packs and the plan in two separate steps.',
    profile_cap: 'Plans support up to 2,000 browser profiles. Contact sales for more.',
    trial_used: 'This workspace has already used its free trial.',
    already_subscribed: 'This workspace already has a plan.',
    not_subscribed: 'This workspace has no paid plan.',
    refund_window_passed: 'Refunds are available only within 7 days of payment.',
    refund_latest_only: 'Only the most recent payment can be refunded.',
    already_refunded: 'This payment has already been refunded.',
    payments_unavailable: 'Payments are not available at the moment.',
    rate_limited: 'Too many requests. Try again in a minute.',
    forbidden: 'Access denied.',
    not_found: 'Not found.',
    validation: 'Some fields are missing or invalid.',
    emailMissing: 'Enter an email address.', passwordShort: 'The password must be at least 8 characters.',
    network: 'Folio cannot be reached. Check the network connection and try again.',
    wrong_account: 'This invitation was sent to a different email address.',
    email_unverified: 'Verify the email address first.',
    invitation_expired: 'This invitation has expired. Ask the inviter to send a new one.',
    seat_limit: 'This workspace has no free seats. Ask the owner to upgrade the plan.',
    mail_unavailable: 'The email could not be sent. Try again later.',
    internal: 'A service error occurred. Try again later.'
  } as Record<string, string>
};
