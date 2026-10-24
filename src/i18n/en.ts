// English copy. zh.ts must have exactly the same shape (enforced by the Dict type).
export const en = {
  langName: 'English',
  meta: {
    title: 'Folio Browser',
    description: 'Run dozens of stores, ad accounts and social profiles from one computer without getting them linked. Each account gets its own browser profile, fingerprint and proxy.'
  },
  nav: { who: 'Who it’s for', inside: 'Inside a profile', teams: 'Teams', automation: 'Automation', pricing: 'Pricing', faq: 'FAQ', login: 'Log in', start: 'Start free', account: 'Account', menu: 'Menu' },
  plans: { free: 'Free', studio: 'Studio', company: 'Company' },
  periods: { monthly: 'monthly', yearly: 'yearly' },

  hero: {
    eyebrow: 'Multi-account browser for e-commerce, ads and social teams',
    h1a: 'One account flagged.', h1b: 'The other 99 ', h1em: 'keep selling.',
    lead: 'Folio gives every account its own browser profile, with its own fingerprint, cookies and proxy IP. To the platform, they look like a hundred different computers.',
    ctaStart: 'Start free with 5 profiles', ctaDownload: 'Download the app',
    fine: 'Windows 10 and later, macOS 12 and later · No credit card',
    reroll: 'Open another profile',
    rerollHint: 'Each click builds a complete new fingerprint. Time zone and language follow the exit IP.',
    card: { title: 'FOLIO · BROWSER PROFILE', exitIp: 'Exit IP', tz: 'Time zone', lang: 'Language', os: 'OS', engine: 'Engine', screen: 'Screen', gpu: 'WebGL GPU', canvas: 'Canvas hash', fonts: 'Fonts', fontsUnit: 'installed', stamp: 'ISOLATED' },
    spec: [
      ['Chromium 150 · Firefox 156', 'two engines, chosen per profile'],
      ['Canvas, WebGL, audio, fonts', 'unique to each profile'],
      ['HTTP · HTTPS · SOCKS5', 'proxies, checked before use'],
      ['CDP', 'local API for your scripts']
    ],
    cities: [
      { city: 'Seattle', region: 'Washington, United States' }, { city: 'London', region: 'England, United Kingdom' },
      { city: 'Tokyo', region: 'Tokyo, Japan' }, { city: 'Frankfurt', region: 'Hesse, Germany' },
      { city: 'São Paulo', region: 'São Paulo, Brazil' }, { city: 'Toronto', region: 'Ontario, Canada' },
      { city: 'Singapore', region: 'Singapore' }, { city: 'Sydney', region: 'New South Wales, Australia' },
      { city: 'Seoul', region: 'Seoul, South Korea' }, { city: 'Miami', region: 'Florida, United States' }
    ]
  },

  who: {
    eyebrow: 'Who it’s for',
    title: 'When you run many accounts, the real risk is getting linked',
    lead: 'Platforms check more than your IP to decide whether two accounts belong to one person. A browser hands over dozens of device details, and a single overlap can tie your accounts together.',
    items: [
      { tag: 'E-commerce sellers', title: 'Ten stores. One gets reviewed, nine keep selling.', body: 'Each store gets a fixed profile and its own proxy line. Same location, same device, month after month. To the platform that looks like a steady, long-standing seller.', fit: 'For teams running five or more stores' },
      { tag: 'Ad agencies', title: 'One client, one set of profiles.', body: 'When a colleague takes over, hand them the whole set. They open it already signed in, without asking the client for another verification code.', fit: 'For agencies managing ad accounts for many clients' },
      { tag: 'Social teams', title: 'Fifty accounts, one person, a normal workday.', body: 'Window sync repeats one action across many windows at once. Scheduled tasks take over the daily sign-in checks.', fit: 'For teams where one person runs dozens of accounts' }
    ]
  },

  inside: {
    eyebrow: 'Inside a profile',
    title: 'The signals platforms check, handled for each profile',
    groups: [
      ['Device', ['User-Agent', 'Client hints', 'CPU cores', 'Device memory', 'Touch support']],
      ['Rendering', ['Canvas', 'WebGL image', 'WebGL renderer', 'AudioContext', 'Font list']],
      ['Network', ['Proxy IP', 'WebRTC', 'DNS']],
      ['Region', ['Time zone', 'Language', 'Geolocation']],
      ['Storage', ['Cookies', 'LocalStorage', 'IndexedDB', 'Cache', 'Extensions']]
    ] as [string, string[]][],
    note: 'Fingerprints come from real device combinations, so the system, GPU and fonts fit together. You won’t find a MacBook with an NVIDIA card in Folio.',
    compareTitle: 'One Seattle proxy, used two ways',
    compareHint: 'Each cross on the left is a clue that links your accounts.',
    cols: ['Check', 'Regular browser with a proxy', 'Folio profile'],
    rows: [
      ['Exit IP', 'Seattle', 'Seattle', false],
      ['Time zone', 'Asia/Shanghai', 'America/Los_Angeles', true],
      ['Language', 'zh-CN', 'en-US', true],
      ['WebRTC', 'Leaks your real IP', 'Never shows your real IP', true],
      ['Geolocation', 'Reads where you really are', 'Near Seattle', true],
      ['Canvas hash', 'Identical on all your accounts', 'Unique to this profile', true],
      ['Cookies', 'Shared by every account', 'Kept per profile', true]
    ] as [string, string, string, boolean][],
    leak: 'Leaks', match: 'Matches'
  },

  team: {
    eyebrow: 'Teams',
    title: 'When people leave, the accounts stay with you',
    lead: 'Accounts belong to the company, not to whichever laptop they were set up on.',
    points: [
      ['Assign profiles by person', 'Store managers see their stores. Media buyers see their ad accounts. Nobody sees the rest.'],
      ['Use an account without seeing its password', 'Members open a profile already signed in. Passwords never pass through their hands.'],
      ['Take access back the same day', 'Remove a member and their profiles move to whoever you choose. No late-night password resets.'],
      ['Every action on record', 'Who opened which profile, when, and what they changed, all on one page.']
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
      ['10-20 18:40', 'Admin removed Jonah Park and moved 18 profiles to Maya Chen']
    ],
    example: 'Example'
  },

  auto: {
    eyebrow: 'Automation',
    title: 'Repetitive work: click once, or script it once',
    noCode: 'No code',
    noCodePoints: [
      ['Window sync', 'Click, type and scroll in one window. Every window you picked does the same.'],
      ['Bulk actions', 'Import hundreds of profiles from a spreadsheet. Swap proxies or load cookies for all of them at once.'],
      ['Scheduled tasks', 'Open chosen profiles at a set time each day, confirm they’re still signed in, and get an alert when one isn’t.']
    ],
    withCode: 'With code',
    withCodeBody: 'The local API starts any profile and hands your script its debugging address. Your existing automation takes it from there, with no rewrite.',
    libs: ['Playwright', 'Puppeteer', 'Selenium', 'CDP · WebDriver BiDi'],
    codeComment: '// Start profile 0042 in Folio'
  },

  trust: {
    eyebrow: 'Try it first',
    title: 'Don’t take our word for it. Test it.',
    items: [
      ['5 profiles, free for good', 'No card and no time limit. Enough to run one store end to end, from sign-in to listing.'],
      ['Pick your own checker', 'Open any fingerprint test site you trust inside a profile and read the results yourself.'],
      ['Refund within 7 days', 'Ask within a week of paying and get the full amount back. No questions asked.'],
      ['Your data leaves with you', 'Export every profile and cookie in one file. If you stop using Folio, your accounts aren’t locked in.']
    ]
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Pay per profile. Add people for free.',
    monthly: 'Monthly', yearly: 'Yearly', save: 'save 20%',
    perMonth: '/ month', forever: 'free forever',
    perProfile: (amount: string) => `${amount} per profile a month`,
    billedMonthly: 'Billed monthly, cancel anytime',
    billedYearly: (total: string) => `Billed yearly, ${total} in total`,
    noCard: 'No card needed',
    profilesMembers: (p: number, m: string) => `${p} profiles · ${m}`,
    oneMember: '1 member', unlimitedMembers: 'unlimited members',
    flag: 'For teams of 3–20',
    for: { free: 'See whether it fits', studio: 'Day-to-day work for one team', company: 'Several teams and business lines' },
    cta: { free: 'Start free', studio: 'Try free for 7 days', company: 'Talk to sales' },
    features: {
      free: ['Both engines, full fingerprint settings', 'Proxy check with automatic time zone and language', 'Local API', 'Docs and community support'],
      studio: ['Unlimited members', 'Window sync and bulk actions', 'Team permissions and profile handover', '30-day activity log', 'Live chat on weekdays'],
      company: ['Everything in Studio', 'Profiles grouped by department', '1-year activity log you can export', 'Dedicated support channel, 12 hours a day', 'Unthrottled API']
    },
    buy: 'Buy now', soon: 'Coming soon',
    foot: (pack: string) => `Need more room? Add 100 profiles for ${pack} a month. For more than 2,000 profiles, we’ll quote you directly. Prices exclude local taxes, and every plan comes with invoices.`
  },

  faq: {
    eyebrow: 'FAQ', title: 'What people ask before they buy', lead: 'Didn’t find your question?', contact: 'Ask us',
    items: [
      ['Does Folio guarantee my accounts won’t get banned?', 'No. Folio solves one problem: several accounts being recognized as the same device. If an account breaks platform rules, or its proxy IP has already been used by many people, it can still get flagged. We recommend one dedicated residential or ISP proxy per profile.'],
      ['Do I need my own proxies?', 'Yes. Folio supports HTTP, HTTPS and SOCKS5. Add them one at a time or import a spreadsheet. Each proxy is checked for connectivity and exit location, and the profile’s time zone and language are set to match.'],
      ['Chromium or Firefox: which engine should I pick?', 'Chromium for most accounts. Each Chromium profile keeps a stable fingerprint of its own. Firefox profiles suit sites where you want a Firefox user; on one computer, Firefox profiles share more of their fingerprint, so don’t rely on them for many accounts of the same platform.'],
      ['Where is my profile data stored?', 'By default it’s encrypted and synced to the cloud, so you can sign in on another computer and carry on. You can also keep a profile on one machine only. You can export everything at any time.'],
      ['How are the engines updated?', 'Folio uses open-source fingerprint engines and ships each new release after we test it. Existing profiles keep their engine version until you choose to upgrade them.']
    ] as [string, string][]
  },

  band: {
    title: 'Open 5 profiles. Decide in a week.',
    body: 'Create an account, download the app, and your first profile is ready in a few minutes.',
    windows: 'Download for Windows', mac: 'Download for macOS',
    fine: 'Beta · Chromium 150 and Firefox 156 engines'
  },

  footer: { docs: 'Docs', api: 'API reference', changelog: 'Changelog', privacy: 'Privacy', terms: 'Terms', sales: 'Contact sales', rights: '© 2026 Folio' },

  auth: {
    signupTitle: 'Create your Folio account', signupLead: 'Five profiles free, no card needed.',
    loginTitle: 'Log in to Folio', email: 'Email', password: 'Password', passwordHint: 'At least 8 characters',
    signup: 'Create account', login: 'Log in', haveAccount: 'Already have an account?', noAccount: 'New to Folio?',
    forgot: 'Forgot your password?',
    verifyTitle: 'Check your email', verifyLead: (email: string) => `We sent a 6-digit code to ${email}. It expires in 15 minutes.`,
    code: 'Code', verify: 'Verify email', resend: 'Send a new code', resent: 'A new code is on its way.',
    verified: 'Email verified.',
    forgotTitle: 'Reset your password', forgotLead: 'Enter your account email and we’ll send a code.',
    sendCode: 'Send code', resetTitle: 'Choose a new password', newPassword: 'New password', reset: 'Set new password',
    resetDone: 'Password updated. Log in with the new one.',
    devNotice: 'Development build: emails go to the local test inbox at http://127.0.0.1:47125.',
    logout: 'Log out',
    points: ['Download the app as soon as you sign up', 'One account for the site and the app', 'Export your data any time']
  },

  checkout: {
    title: 'Choose your plan', workspace: 'Workspace', plan: 'Plan', billing: 'Billing',
    packs: 'Extra profiles', packsHint: 'Packs of 100 profiles', total: 'Due today',
    current: (plan: string) => `Current plan: ${plan}`,
    currentTrial: (plan: string) => `Current plan: ${plan}, free trial`,
    lines: {
      plan: (plan: string, period: string) => `${plan}, ${period}`,
      addon: (qty: number, prorated: boolean) => `${qty} × 100 extra profiles${prorated ? ', prorated for the rest of this period' : ''}`,
      credit: (plan: string) => `Credit for unused ${plan} time`
    },
    change: {
      new: 'Starts today.', upgrade: 'Starts today; unused time on your current plan is credited.', addon: 'Added right away.',
      'reduce-addon': 'Removed right away. Profiles above the new limit will need to be archived; no refund for this period.',
      downgrade: 'Takes effect at the end of the current period. Nothing to pay now.'
    },
    card: 'Card', cardNumber: 'Card number', expiry: 'Expiry (MM/YY)', cvc: 'CVC', name: 'Name on card',
    pay: (amount: string) => `Pay ${amount}`, confirm: 'Confirm change',
    soon: 'Paid plans open soon. You can start the free trial now, or keep using Free.', soonPay: 'Coming soon',
    trial: 'Or try Studio free for 7 days', trialCta: 'Start free trial',
    mockTitle: 'Test payments', mockBody: 'No real money moves yet. Use 4242 4242 4242 4242 with any future date. 4000 0000 0000 0002 is declined.',
    success: 'Payment received. Your plan is active.', applied: 'Change saved.', trialStarted: 'Trial started. Studio is yours for 7 days.',
    toAccount: 'Go to your account', noManage: 'Only owners and admins can change this workspace’s plan.'
  },

  account: {
    title: 'Account', profile: 'Profile', language: 'Language', emailStatus: 'Verification',
    verified: 'Verified', unverified: 'Not verified', verifyNow: 'Verify now',
    workspaces: 'Workspaces', newWorkspace: 'New workspace', create: 'Create', rename: 'Rename', save: 'Save', cancel: 'Cancel',
    roles: { owner: 'Owner', admin: 'Admin', member: 'Member' },
    plan: 'Plan', usage: (used: number, limit: number) => `${used} of ${limit} profiles`,
    unlimited: 'Unlimited members',
    renews: (date: string) => `Renews on ${date}`, ends: (date: string) => `Ends on ${date}`,
    trialEnds: (date: string) => `Trial ends on ${date}`,
    scheduled: (plan: string, date: string) => `Changes to ${plan} on ${date}`,
    changePlan: 'Change plan', addProfiles: 'Add profiles', startTrial: 'Try Studio free for 7 days',
    cancelPlan: 'Cancel at period end', resume: 'Keep my plan',
    cancelConfirm: 'Cancel your plan? You keep it until the end of the current period.', confirmCancel: 'Yes, cancel',
    payments: 'Payments and invoices', noPayments: 'No payments yet.',
    cols: ['Date', 'Invoice', 'Amount', 'Status', ''],
    paid: 'Paid', refunded: 'Refunded', invoice: 'Invoice', refund: 'Refund',
    refundConfirm: 'Refund this payment? Your plan goes back to what it was before it.', confirmRefund: 'Yes, refund',
    download: 'Get the app', downloadBody: 'Log in to the desktop app with this same account. Your plan and workspaces are already there.',
    downloadCta: 'Download',
    invitations: 'Invitations', invitedBy: (inviter: string, role: string) => `From ${inviter}, as ${role}`, accept: 'Join', decline: 'Decline'
  },
  invite: {
    title: 'Invitation', checking: 'Checking the invitation…',
    missing: 'This link has no invitation in it. Open the link from the email again.',
    gone: 'This invitation is no longer open: it was accepted, withdrawn, or replaced by a newer one.',
    lead: (inviter: string, workspace: string, role: string) => `${inviter} invited you to join ${workspace} on Folio as ${role}.`,
    roles: { admin: 'an admin', member: 'a member' }, forEmail: (email: string) => `For ${email}`,
    expired: 'This invitation has expired. Ask for a new one.',
    login: 'Log in to accept', signup: 'Create an account',
    wrong: (invited: string, current: string) => `This invitation is for ${invited}, but you’re logged in as ${current}.`, switch: 'Log out and use the other account',
    verify: 'Confirm your email address first; you’ll come back here.', verifyCta: 'Confirm email',
    accept: (workspace: string) => `Join ${workspace}`, decline: 'Decline',
    joined: (workspace: string) => `You’re in ${workspace}.`,
    joinedLead: 'Log in to the Folio workbench with this account; the workspace is in its workspace menu.',
    download: 'Download the workbench', account: 'Go to your account', declined: 'You declined the invitation.'
  },

  invoice: {
    title: 'Invoice', number: 'Invoice number', date: 'Date', billedTo: 'Billed to', workspace: 'Workspace',
    period: 'Service period', item: 'Description', amount: 'Amount', total: 'Total', paidWith: (brand: string, last4: string) => `Paid with ${brand} ending ${last4}`,
    refunded: (date: string) => `Refunded on ${date}`, print: 'Print or save as PDF', back: 'Back to account',
    seller: 'Folio', sellerNote: 'Test invoice. No real payment was made.'
  },

  sales: {
    title: 'Talk to sales', lead: 'More than 500 profiles, several departments, or something custom? Tell us a little and we’ll reply within one working day.',
    name: 'Your name', email: 'Work email', company: 'Company', teamSize: 'Team size', message: 'What do you need?',
    send: 'Send', sent: 'Thanks. We’ll get back to you within one working day.'
  },

  download: {
    title: 'Download Folio', lead: 'Install the desktop app and log in with your Folio account. Your plan, team and profiles are already there.',
    windows: 'Windows 10 and later, 64-bit', mac: 'macOS 12 and later, Apple silicon (M1 and newer)', get: 'Download', soon: 'Coming soon',
    winNote: 'Folio isn’t code-signed yet. If SmartScreen stops the installer, click “More info”, then “Run anyway”.',
    macNote: 'Folio isn’t code-signed yet. Drag Folio into Applications. If macOS won’t open it the first time, go to System Settings › Privacy & Security and click “Open Anyway”. If it says Folio is damaged, run xattr -cr /Applications/Folio.app in Terminal, then open it again.',
    engines: 'Each browser engine downloads the first time a profile needs it, from the engine’s own project on GitHub, and is checked against its published checksum.',
    already: 'Already have an account? Your plan carries over the moment you log in to the app.'
  },

  docs: {
    title: 'Docs', lead: 'Guides for setting up profiles, proxies and your team will live here as the app opens up.',
    apiTitle: 'API reference', apiLead: 'Folio’s local API lets scripts on your computer open a profile and take it over with the automation tools you already use. It runs inside the Folio app, on your computer only.',
    api: {
      setupTitle: 'Turn it on',
      setup: [
        'In the Folio app, open API & scripts, switch the local API on and make a token. The token is shown once; copy it then.',
        'Requests go to http://127.0.0.1:47210 (the port can be changed on the same page) with the header Authorization: Bearer <token>. A token belongs to you and the workspace it was made in, works only on that computer, and can do what you can: members reach only their own profiles.'
      ],
      limitsTitle: 'Limits',
      limits: 'Free and Studio allow 60 requests a minute: opening, closing and looking things up. Company is unthrottled. What your script sends to the browser over its debugging address is not counted. Past the limit, requests answer 429 with a Retry-After header in seconds.',
      enginesTitle: 'Engines and tools',
      engines: [
        ['Chromium profiles', 'Answer with a CDP address (wsEndpoint) and, for Selenium, a debuggerAddress. Playwright (connectOverCDP), Puppeteer, Selenium with chromedriver for Chromium 150, or any CDP client.'],
        ['Firefox profiles', 'Answer with a WebDriver BiDi address. Puppeteer (protocol: webDriverBiDi) or any WebDriver BiDi client. Playwright and Selenium can’t attach to a Firefox that is already running. While a script drives a Firefox profile, scheduled tasks skip it.']
      ] as [string, string][],
      endpointsTitle: 'Endpoints',
      endpointsLead: 'A profile is named by its number (42 or 0042) or its id.',
      endpoints: [
        ['GET', '/api/v1/profiles', 'The profiles you can see: id, number, name, engine, and whether each runs.'],
        ['POST', '/api/v1/profiles/{number}/start', 'Opens the profile the way the app does (lock, saved sign-ins, proxy) and answers with protocol, wsEndpoint and, for Chromium, debuggerAddress. Starting one that is already open through the API answers the same address.'],
        ['GET', '/api/v1/profiles/{number}', 'Whether it runs, with its address when it was opened through the API.'],
        ['POST', '/api/v1/profiles/{number}/stop', 'Closes it; its sign-ins are saved as usual.'],
        ['GET', '/api/v1/tasks', 'The workspace’s tasks, each with its last run.'],
        ['POST', '/api/v1/tasks/{id}/run', 'Runs a task on this computer and answers with runId.'],
        ['GET', '/api/v1/runs/{id}', 'A run’s status and counts, and each profile’s result and extracted data.']
      ] as [string, string, string][],
      errorsTitle: 'Errors',
      errorsLead: 'Errors answer { "error": { "code", "message" } }.',
      errors: [
        ['401', 'unauthorized', 'No token, an unknown or revoked one, or one made by another account than the one logged in to the app.'],
        ['404', 'not_found', 'No such profile, task or run among those you can see.'],
        ['409', 'running_without_api', 'The profile is open but was opened by hand, so it has no debugging address. Close it, then start it through the API.'],
        ['409', 'locked', 'The profile is open on another computer.'],
        ['409', 'task_running', 'The task is already running.'],
        ['429', 'rate_limited', 'Over 60 requests a minute on Free or Studio; retryAfter says when to try again.'],
        ['502', 'proxy_down', 'The profile’s proxy didn’t answer, and there’s no working backup line.']
      ] as [string, string, string][],
      examplesTitle: 'Examples',
      examples: { playwright: 'Playwright, Chromium profile', puppeteer: 'Puppeteer, Chromium profile', selenium: 'Selenium (Python), Chromium profile', firefox: 'Puppeteer, Firefox profile' },
      securityTitle: 'Security',
      security: 'The debugging address has no password. While a profile opened through the API is running, any program on that computer can control it, as with any browser debugging port. Profiles opened by hand never get one, and the API listens on 127.0.0.1 only.'
    },
    changelogTitle: 'Changelog',
    changelog: [['0.1 · October 2026', 'Accounts, workspaces, plans and the first build of the desktop workbench.']] as [string, string][]
  },

  legal: {
    privacyTitle: 'Privacy policy', termsTitle: 'Terms of service',
    draft: 'Draft. The final text is being prepared and will replace this page before launch.',
    privacyBody: [
      'We collect the email address and password you register with, the workspaces you create and the plan you choose.',
      'Browser profile data you choose to sync is encrypted before it is stored.',
      'We do not sell your data.'
    ],
    termsBody: [
      'Folio is a tool for managing many browser profiles. You are responsible for following the rules of the platforms you use it with.',
      'Paid plans renew until cancelled. The most recent payment can be refunded within 7 days.'
    ]
  },

  errors: {
    email_taken: 'An account with this email already exists. Log in instead.',
    invalid_credentials: 'The email or password is not right.',
    unauthenticated: 'Log in to continue.',
    code_invalid: 'That code is not right. Check the email and try again.',
    code_expired: 'That code has expired. Request a new one.',
    too_many_attempts: 'Too many wrong codes. Request a new one.',
    already_verified: 'This email is already verified.',
    email_not_verified: 'Verify your email before changing the plan.',
    card_invalid: 'Check the card number and security code.',
    card_expired: 'The card has expired.',
    card_declined: 'The card was declined. Try another card.',
    insufficient_funds: 'The card has insufficient funds.',
    checkout_expired: 'This checkout expired. Start again.',
    checkout_closed: 'This checkout is closed. Start again.',
    quote_stale: 'Your plan changed in the meantime. Review the new total and try again.',
    no_change: 'This is already your plan.',
    change_packs_separately: 'Change extra profiles and the plan in two steps.',
    profile_cap: 'Plans go up to 2,000 profiles. Talk to sales for more.',
    trial_used: 'The free trial was already used for this workspace.',
    already_subscribed: 'This workspace already has a plan.',
    not_subscribed: 'This workspace has no paid plan.',
    refund_window_passed: 'Refunds are available for 7 days after payment.',
    refund_latest_only: 'Only the most recent payment can be refunded.',
    already_refunded: 'This payment was already refunded.',
    payments_unavailable: 'Payments are not available right now.',
    rate_limited: 'Too many attempts. Wait a minute and try again.',
    forbidden: 'You don’t have access to this.',
    not_found: 'We couldn’t find that.',
    validation: 'Some fields are missing or not valid.',
    emailMissing: 'Enter your email address.', passwordShort: 'The password needs at least 8 characters.',
    network: 'Can’t reach Folio right now. Check your connection and try again.',
    wrong_account: 'This invitation is for a different email address.',
    email_unverified: 'Confirm your email address first.',
    invitation_expired: 'This invitation has expired. Ask for a new one.',
    seat_limit: 'This workspace has no free seat. Ask its owner to upgrade.',
    mail_unavailable: 'We couldn’t send the email. Try again in a minute.',
    internal: 'Something went wrong on our side. Try again.'
  } as Record<string, string>
};
