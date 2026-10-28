// English copy. zh.ts must have exactly the same shape (enforced by the Dict type).
// Tone: measured and factual, no absolute promises; feature plus benefit ("…, reducing …"); "browser profile" in prose,
// "profile" where space is tight (counts, table headings).
export const en = {
  meta: {
    title: 'Folio fingerprint browser',
    description: 'A fingerprint browser for teams running multiple shops, ad accounts and social accounts: a separate browser profile for each account, with distinct fingerprints, isolated cookies and a dedicated proxy IP.'
  },
  nav: { features: 'Features', solutions: 'Solutions', pricing: 'Pricing', download: 'Download', help: 'Help center', site: 'Back to the website', login: 'Log in', start: 'Try free', account: 'Account', menu: 'Menu', crumbs: 'Breadcrumb', skip: 'Skip to content' },
  plans: { free: 'Free', studio: 'Studio', company: 'Company' },
  periods: { monthly: 'monthly', yearly: 'yearly' },

  home: {
    h1: 'Separate profiles,\nmanaged as one',
    lead: 'Folio manages browser profiles, proxies and team access in one place, so multi-account work is set up centrally and shared across the team in an orderly way.',
    features: 'See the features', more: 'Learn more', shot: 'The list of browser profiles in the Folio workbench',
    cardsTitle: 'Built for working with many accounts', cardsLead: 'From the first browser profile to the whole team, with everything in between.',
    cards: [
      { title: 'Browser profiles', body: 'Set up separate browser profiles and see their status and key settings in one place.', shot: 'A profile card: status, proxy exit, engine and extensions' },
      { title: 'Proxies', body: 'Set up proxies in one place, with their checks and the profiles that use them.', shot: 'A proxy card: exit location and IP, status and latency' },
      { title: 'Groups', body: 'Organize browser profiles by business, region or project, keeping their structure clear.', shot: 'The group directory: each group and how many profiles it holds' },
      { title: 'Teams', body: 'Give members roles and the groups they can access, so everyone knows what is theirs.', shot: 'Team members and their roles' }
    ],
    steps: {
      title: 'Three steps to get started', lead: 'Sign up, create browser profiles and bring in your team.',
      items: [['Create profiles', 'Set the fingerprint and basics of a separate browser profile.'], ['Add proxies', 'Bring in your proxies and check that they respond.'], ['Bring in the team', 'Invite members and give them the access they need.']] as [string, string][]
    },
    uses: {
      title: 'For many kinds of work', lead: 'Browser profiles organized for the way each business works.',
      items: [
        { title: 'Cross-border e-commerce', body: 'Shops on several marketplaces, each account kept apart, run by one team.' },
        { title: 'Social media', body: 'Many social accounts at once, with teamwork and access control.' },
        { title: 'Testing', body: 'Separate test environments for development and QA teams.' }
      ]
    },
    faq: {
      title: 'Questions', lead: 'What people ask most. For anything else,', contact: 'contact us',
      items: [
        ['Can Folio guarantee that accounts will not be banned?', 'No. Folio reduces the risk of several accounts being identified as the same device. Accounts that break platform rules, or that use low-quality proxy IPs, may still be restricted. A dedicated residential or ISP proxy for each browser profile is recommended.'],
        ['Are my own proxies required?', 'Yes. HTTP, HTTPS and SOCKS5 proxies are supported and can be added one by one or imported in bulk. Each is checked automatically for connectivity and exit location when added, and the time zone and language are set to match.'],
        ['Should I use Chromium or Firefox?', 'Chromium is recommended for most accounts; each Chromium browser profile has a stable, distinct fingerprint. Firefox suits sites that expect Firefox users. Firefox browser profiles on the same computer share more of their fingerprint, so many accounts on one platform should not all use Firefox.'],
        ['Where is browser profile data stored?', 'By default it is encrypted and synced to the cloud, so work can continue on another computer. Individual browser profiles can also be kept on one computer only. All data can be exported at any time.'],
        ['How are the engines updated?', 'Folio uses open-source fingerprint engines and releases new versions after testing. Existing browser profiles keep their engine version and can be upgraded when convenient.']
      ] as [string, string][]
    },
    band: { title: 'Get started with Folio', body: 'Try 5 browser profiles free, with no card required.' }
  },

  features: {
    title: 'Features', h1: 'Everything it takes to run\nbrowser profiles',
    lead: 'Folio starts from the browser profile and connects it to proxies, groups, members and activity records: creating profiles, setting up proxies, working as a team and keeping engines up to date, in one set of tools.',
    blocks: [
      { title: 'Browser profiles', lead: 'Set up browser profiles for each line of work, with their fingerprints and status in one place.', shot: 'The new profile form: basics, proxy, fingerprint and opening settings',
        points: [
          ['Their own fingerprint and storage', 'Each browser profile has its own Canvas, WebGL, audio and font fingerprint, and keeps its cookies and storage apart.'],
          ['Two engines', 'Chromium and Firefox, with the version chosen per browser profile; existing profiles keep theirs.'],
          ['Bulk actions and a Trash', 'Open, stop, move and edit many at once; deleted browser profiles go to the Trash and can be restored within the retention period.']
        ] as [string, string][] },
      { title: 'Proxies', lead: 'Connection details, check history and which browser profiles use each proxy.', shot: 'The proxy list: protocol, address, exit location, status and latency',
        points: [
          ['HTTP, HTTPS and SOCKS5', 'Add proxies one by one or import a list, with each line previewed before it comes in.'],
          ['Connection checks', 'Checks connectivity, latency and exit location, and sets the time zone and language to match; proxies that stop responding are flagged.'],
          ['Assign and replace', 'One proxy can serve several browser profiles; replace a profile’s proxy or unassign many at once.']
        ] as [string, string][] },
      { title: 'Teams', lead: 'Groups and roles decide what each member can access and do.', shot: 'Groups: the group tree, a group’s browser profiles and its settings',
        points: [
          ['Nested groups', 'Group browser profiles by business, region or project, at several levels; on Company, give members access by group.'],
          ['Roles and permissions', 'Owner, Admin, Member and Viewer are built in; make your own roles and set each of the 13 permissions.'],
          ['Activity log', 'Records opening, changing and handing over browser profiles, searchable by person, action and date.']
        ] as [string, string][] },
      { title: 'Engines', lead: 'Engine versions, what is downloaded and which browser profiles use each.', shot: 'Engines: the default engine, each version’s download state and the profiles using it',
        points: [
          ['Several versions side by side', 'Keep more than one version of an engine; existing browser profiles stay on theirs until upgraded.'],
          ['Downloads', 'Download, pause and resume, download only while idle, and clean up versions nothing uses.'],
          ['A default engine', 'Set the workspace’s default engine; new browser profiles start with it.']
        ] as [string, string][] },
      { title: 'Automation', lead: 'Less repetitive work, with the results of batch operations in the task center.', shot: 'Window sync: what is done in the leader window repeats in the others',
        points: [
          ['Window sync', 'Clicks, typing and scrolling in the leader window repeat in the others.'],
          ['Flows and scheduled tasks', 'Build flows step by step and run them over a set of browser profiles a few at a time, on a schedule, with every run’s results kept.'],
          ['Local API and extensions', 'The local API works with Playwright, Puppeteer and Selenium; extensions are kept in one library and installed in many profiles at once.']
        ] as [string, string][] }
    ]
  },

  solutions: {
    title: 'Solutions', h1: 'Browser profiles,\norganized for the way you work',
    lead: 'Folio organizes browser profiles, proxies and member access around how your business is structured, so people and teams have a clear way of working in each line of business.',
    more: 'Learn more',
    cases: [
      { title: 'Cross-border e-commerce', lead: 'Browser profiles organized by marketplace and shop, with proxies and member access managed in one place.' },
      { title: 'Social media', lead: 'Accounts grouped by project, set up and run together.' },
      { title: 'Testing', lead: 'Test environments kept apart, with activity and batch results on record.' }
    ],
    flow: {
      title: 'From members to proxies, in four steps', lead: 'Set up and run a team’s browser profiles.',
      steps: [
        ['Invite members', 'Bring the team in and give each a role.'],
        ['Grant group access', 'Create groups for the business and decide who can access them.'],
        ['Create profiles', 'A separate browser profile for each line of work.'],
        ['Add proxies', 'Assign proxies to the browser profiles and check them.']
      ] as [string, string][]
    },
    faq: {
      title: 'Questions', lead: 'About setting up browser profiles for your work.',
      items: [
        ['What kind of work is Folio for?', 'People and teams running several accounts at once: shops on several marketplaces, social media accounts, ad accounts for clients, and testing in several environments. Each account gets its own browser profile, so less device information is shared between them.'],
        ['How are members’ permissions managed?', 'Admins invite members and give each a role: Owner, Admin, Member and Viewer are built in, and you can create your own roles and set each permission. On Company, members can also be given access to browser profiles by group.'],
        ['Can browser profiles be created in bulk?', 'Yes. Import browser profiles from a spreadsheet, import proxies from a list, and change the group, proxy or engine version of many at once; the task center shows how each batch went.']
      ] as [string, string][]
    }
  },

  ecommerce: {
    title: 'Cross-border e-commerce solution', h1: 'Shops in many regions,\nrun by one team',
    lead: 'Organize browser profiles by shop and region, and set up proxies and member access in one place.',
    shot: 'Groups: browser profiles organized by region, and the group’s settings',
    pains: {
      title: 'What gets in the way', lead: 'With several marketplaces in several regions, browser profiles, proxies and people get harder to keep track of.',
      items: [
        ['Too many setups', 'Each shop, region and way of working needs its own browser profile, and keeping them straight by hand gets messy.', 'Browser profiles grouped by shop and region'],
        ['Scattered proxies', 'Proxies from several providers, set up in different ways, are hard to maintain and switch.', 'Proxies set up and checked in the workbench'],
        ['Hard handovers', 'Access and account details sit in different places, so new people and changes take a long time to hand over.', 'Access by role and group']
      ] as [string, string, string][]
    },
    flow: {
      title: 'How to set it up', lead: 'Four steps to a cross-border e-commerce setup the whole team can work in.',
      steps: [
        ['Create groups', 'A group for each marketplace or shop, with its browser profiles in it.'],
        ['Set up profiles', 'A separate browser profile for each shop account.'],
        ['Check proxies', 'Assign proxies to the browser profiles and check where they exit.'],
        ['Grant access', 'Give members access by group; their role decides what they can do.']
      ] as [string, string][]
    },
    note: 'Each marketplace’s own rules for accounts and verification apply.'
  },

  pricing: {
    title: 'Pricing', h1: 'Plans that fit\nthe size of your work',
    lead: 'Priced by the number of browser profiles, with unlimited members on paid plans. From trying Folio on your own to several teams working together, pick the plan that fits today and change it at any time.',
    note: 'The Free plan is free forever, with no card required. Payments can be refunded within 7 days.',
    period: 'Billing period', monthly: 'Monthly', yearly: 'Yearly', save: 'save 20%',
    perMonth: '/ month', forever: 'free forever',
    perProfile: (amount: string) => `${amount} per profile a month`,
    billedMonthly: 'Billed monthly, cancel any time',
    billedYearly: (total: string) => `Billed yearly, ${total} in total`,
    noCard: 'No card required',
    profilesMembers: (p: number, m: string) => `${p} ${p === 1 ? 'profile' : 'profiles'} · ${m}`,
    oneMember: '1 member', unlimitedMembers: 'unlimited members',
    tags: { free: 'On your own', studio: 'For teams of 3–20', company: 'For several teams' },
    for: { free: 'Core features', studio: 'Day-to-day work for one team', company: 'Several teams and business lines' },
    cta: { free: 'Try free', studio: 'Try free for 7 days', company: 'Contact sales' },
    features: {
      free: ['Chromium and Firefox engines, full fingerprint settings', 'Proxy checks with automatic time zone and language', 'Local API', 'Docs and community support'],
      studio: ['Unlimited members', 'Window sync and bulk actions', 'Roles, permissions and browser profile handover', '30-day activity log', 'Live chat on weekdays'],
      company: ['Everything in Studio', 'Members given access by group', '1-year activity log with export', 'Dedicated support channel, 12 hours a day', 'Unthrottled API']
    },
    buy: 'Buy now', soon: 'Coming soon',
    compare: {
      title: 'Compare plans', yes: 'Included', no: 'Not included',
      rows: [
        ['Browser profiles', '5', '100, more with add-on packs', '500, more with add-on packs'],
        ['Members', '1', 'Unlimited', 'Unlimited'],
        ['Chromium and Firefox engines', true, true, true],
        ['Proxy management and checks', true, true, true],
        ['Sign-ins synced to the cloud, data export', true, true, true],
        ['Window sync', false, true, true],
        ['Roles and permissions', false, true, true],
        ['Members given access by group', false, false, true],
        ['Activity log', 'Kept 7 days', 'Kept 30 days', 'Kept 1 year, with export'],
        ['Local API', '60 requests a minute', '60 requests a minute', 'Unthrottled'],
        ['Support', 'Docs and community', 'Live chat on weekdays', 'Dedicated channel, 12 hours a day']
      ] as [string, ...(string | boolean)[]][]
    },
    calc: {
      eyebrow: 'Estimate', title: 'Choose by the number of browser profiles', label: 'Browser profiles needed',
      hint: 'Drag the slider to the number of browser profiles you need to see the lowest-cost plan and its price.',
      best: 'Recommended', cheapest: 'Lowest cost',
      profiles: (n: number) => `${n} ${n === 1 ? 'profile' : 'profiles'}`,
      withPacks: (plan: string, packs: number) => `${plan} + ${packs} add-on ${packs === 1 ? 'pack' : 'packs'}`,
      fit: (n: number, pick: string) => `${n} ${n === 1 ? 'profile' : 'profiles'}: ${pick}`,
      company: (amount: string) => `Company costs ${amount} a month for the same number and adds group access, a 1-year activity log and an unthrottled API.`,
      custom: (max: number) => `More than ${max.toLocaleString('en-US')} profiles`, customBody: 'A custom quote is available for your team.',
      buy: 'Buy this plan'
    },
    faq: {
      title: 'Questions', lead: 'About trying Folio, billing and plans. For anything else,', contact: 'contact us',
      items: [
        ['What does Free include?', 'Five browser profiles, free forever: both engines, full fingerprint settings, proxy checks and the local API. No card is required and there is no time limit, so a whole way of working can be tried out.'],
        ['Can I try Studio first?', 'Yes. Each workspace can try Studio free for 7 days, with members and window sync; afterwards, buy it or carry on with Free.'],
        ['How do I upgrade or change plans?', 'From the account page. An upgrade starts the same day, and the time left on the current plan is credited; a downgrade starts when the current period ends.'],
        ['What if I need more browser profiles?', 'Paid plans take add-on packs of 100 browser profiles each, up to 2,000 in total; above that, contact us for a quote.'],
        ['Are refunds and invoices available?', 'The latest payment can be refunded within 7 days, and the plan reverts to what it was before that payment. Every payment comes with an invoice, which you can view and print on the account page.']
      ] as [string, string][]
    },
    foot: (pack: string) => `Additional browser profiles cost ${pack} a month per 100; above 2,000, a custom quote is available. Prices exclude local taxes, and an invoice is issued for every payment.`
  },

  footer: { product: 'Product', resources: 'Resources', legal: 'Legal', api: 'API reference', changelog: 'Changelog', contact: 'Contact us', privacy: 'Privacy', terms: 'Terms', tagline: 'Separate profiles, managed as one', rights: '© 2026 Folio' },

  auth: {
    panel: {
      title: 'Separate profiles,\nmanaged as one', lead: 'A separate browser profile for each business, all managed in one workspace, with accounts, data and actions kept apart.',
      shot: 'The list of browser profiles in the Folio workbench'
    },
    loginTitle: 'Log in to Folio', loginLead: 'Log in with your account to get back to your browser profiles.',
    signupTitle: 'Create a Folio account', signupLead: 'Try 5 browser profiles free. No card required.',
    email: 'Email', emailPh: 'name@example.com', password: 'Password', setPassword: 'Choose a password', passwordPh: 'Your password', passwordHint: '8 to 64 characters; a mix of letters, numbers and symbols is recommended',
    code: 'Email code', codePh: 'The 6-digit code', getCode: 'Get a code', codeSent: 'The code is on its way. It is valid for 15 minutes.',
    remember: 'Remember me', forgot: 'Forgot password?',
    consent: ['I have read and agree to the', 'terms of service', 'and the', 'privacy policy'] as [string, string, string, string],
    signup: 'Create account', login: 'Log in', haveAccount: 'Already have an account?', noAccount: 'New to Folio?', toSignup: 'Sign up',
    done: { title: 'Your account is ready', text: 'You’re signed up and logged in. Download the app and log in with this account to create browser profiles.', download: 'Download the app', account: 'Go to your account' },
    verifyTitle: 'Verify your email', verifyLead: (email: string) => `Send a code to ${email}, then enter it here. It is valid for 15 minutes.`,
    verify: 'Verify', resend: 'Send a code', resendIn: (s: number) => `Resend in ${s}s`, resent: 'A code has been sent.',
    reset: {
      title: 'Reset your password', lead: 'Verify your email, then choose a new password.', steps: ['Verify email', 'New password', 'Done'],
      sent: 'If an account exists for this email, a code is on its way. It is valid for 15 minutes.',
      next: 'Next', password: 'New password', confirm: 'Confirm new password', save: 'Save new password', back: 'Back',
      doneTitle: 'Password reset', doneText: 'Log in with your new password.', toLogin: 'Back to log in',
      noCode: 'No code? Check your spam folder, or', contact: 'contact us'
    },
    devNotice: 'Development build: emails go to the local test inbox at http://127.0.0.1:47125.',
    logout: 'Log out',
    showPassword: 'Show password'
  },

  checkout: {
    title: 'Choose a plan', workspace: 'Workspace', plan: 'Plan', billing: 'Billing period',
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
    card: 'Card', cardNumber: 'Card number', expiry: 'Expiration (MM/YY)', cvc: 'CVC', name: 'Name on card',
    pay: (amount: string) => `Pay ${amount}`, confirm: 'Confirm change',
    soon: 'Paid plans open soon. In the meantime, try Studio free or keep using Free.', soonPay: 'Coming soon',
    trial: 'Or try Studio free for 7 days', trialCta: 'Start trial',
    mockTitle: 'Test payments', mockBody: 'No charge is made. Use card 4242 4242 4242 4242 with any future expiration date; 4000 0000 0000 0002 will be declined.',
    success: 'Payment received. The plan is active.', applied: 'Change saved.', trialStarted: 'Trial started. Studio is available for 7 days.',
    toAccount: 'Go to account', noManage: 'Only owners and admins can change this workspace’s plan.'
  },

  account: {
    title: 'Account', profile: 'Your details', language: 'Language', langs: { zh: 'Chinese', en: 'English' }, emailStatus: 'Email verification',
    verified: 'Verified', unverified: 'Not verified', verifyNow: 'Verify now',
    workspaces: 'Workspaces', newWorkspace: 'New workspace', create: 'Create', rename: 'Rename', save: 'Save', cancel: 'Cancel', current: 'Current',
    roles: { owner: 'Owner', admin: 'Admin', member: 'Member', viewer: 'Viewer' } as Record<string, string>,
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
    pw: { title: 'Change password', current: 'Current password', new: 'New password', confirm: 'Confirm the new password', save: 'Save new password', done: 'Password changed. This account has been logged out on other devices.' },
    download: 'Download the app', downloadBody: 'Log in to the desktop app with the same account; plan and workspace details sync automatically.',
    downloadCta: 'Download',
    invitations: 'Invitations', invitedBy: (inviter: string, role: string) => `Invited by ${inviter} as ${role}`, accept: 'Join', decline: 'Decline'
  },
  invite: {
    title: 'Workspace invitation', checking: 'Checking the invitation…',
    missing: 'The link contains no invitation. Open the link in the email again.',
    gone: 'This invitation is no longer valid: it was accepted, withdrawn or replaced by a newer one.',
    lead: (inviter: string, workspace: string, role: string) => `${inviter} invited you to join the Folio workspace ${workspace} as ${role}.`,
    roles: { admin: 'an admin', member: 'a member', viewer: 'a viewer' }, forEmail: (email: string) => `Invitation for ${email}`,
    expires: (date: string) => `Expires on ${date}`,
    expired: 'This invitation has expired. Ask the inviter to send a new one.',
    login: 'Log in to accept', signup: 'Create account',
    wrong: (invited: string, current: string) => `This invitation is for ${invited}; the current account is ${current}.`, switch: 'Log out and switch account',
    verify: 'Verify your email first; this page reopens afterwards.', verifyCta: 'Verify email',
    accept: (workspace: string) => `Join ${workspace}`, decline: 'Decline',
    joined: (workspace: string) => `Joined ${workspace}.`,
    joinedLead: 'Log in to the Folio app with this account to find the workspace in the workspace menu.',
    download: 'Download the app', account: 'Go to account', declined: 'Invitation declined.'
  },

  invoice: {
    title: 'Invoice', number: 'Invoice number', date: 'Date', billedTo: 'Billed to', workspace: 'Workspace',
    period: 'Service period', item: 'Description', amount: 'Amount', total: 'Total', paidWith: (brand: string, last4: string) => `Paid with ${brand} ending in ${last4}`,
    refunded: (date: string) => `Refunded on ${date}`, print: 'Print or save as PDF', back: 'Back to account',
    seller: 'Folio', sellerNote: 'Test invoice. No payment was made.'
  },

  contact: {
    title: 'Contact us', h1: 'Talk to the Folio team', lead: 'Ask about the product, tell us how it’s going, or propose working together, and we’ll get back to you as soon as we can.',
    kinds: {
      product: ['About the product', 'Features, which kinds of work it suits, and advice on setting it up.'],
      support: ['Support', 'Something isn’t working, or you need help using it.'],
      partner: ['Partnerships', 'Business or channel partnerships, and anything else.']
    },
    name: 'Name', namePh: 'Your name', email: 'Work email', emailPh: 'you@company.com', kind: 'Topic',
    teamSize: 'Team size', teamPh: 'Choose a size', sizes: [['1-5', '1–5 people'], ['6-20', '6–20 people'], ['21-100', '21–100 people'], ['100+', 'More than 100']] as [string, string][],
    message: 'What you need', messagePh: 'Your needs, how you would use Folio, or what you want to know', consent: 'I have read and agree to the', privacy: 'privacy policy',
    send: 'Send',
    done: 'Your question is in', doneLead: 'We’ll get back to you by email as soon as we can.', doneText: 'Your reference is {n}; keep it for any follow-up.', home: 'Back to home', again: 'Send another',
    failedTitle: 'Your question couldn’t be sent', failedLead: 'That didn’t go through. Try again later.', failedText: 'What you wrote is still there; go back to send it again.', retry: 'Go back and retry', help: 'Visit the help center',
    nameMissing: 'Enter your name.', teamMissing: 'Choose a team size.', messageMissing: 'Describe what you need.', consentMissing: 'Read and agree to the privacy policy first.'
  },

  download: {
    title: 'Download Folio', h1: 'Download Folio and\nstart running browser profiles',
    lead: 'Install the Folio app on your computer and log in with your Folio account to create and run browser profiles; your plan, team and browser profiles sync automatically.',
    status: (release: string | null) => `${release ?? 'Installers coming soon'}. Get them from this page or another official Folio channel, so you know where they come from.`,
    windowsName: 'Windows', macName: 'macOS',
    windows: 'Windows 10 or later (64-bit)', mac: 'macOS 12 or later (Apple silicon, M1 or newer)',
    get: (os: string) => `Download for ${os}`, soon: 'Coming soon',
    version: (v: string) => `Version ${v}`, released: (date: string) => `released ${date}`,
    notesTitle: 'First install',
    winNote: 'Folio is not code-signed yet. If SmartScreen blocks the installer, choose More info, then Run anyway.',
    macNote: 'Folio is not code-signed yet. Drag Folio into Applications. If it will not open the first time, go to System Settings › Privacy & Security and choose Open Anyway; if macOS says the app is damaged, run xattr -cr /Applications/Folio.app in Terminal and open it again.',
    otherName: 'Other systems', other: 'Installers for other systems are not available yet.', contact: 'Contact us',
    stepsTitle: 'Three steps to get started', stepsLead: 'Download and install the app, log in and create browser profiles.',
    steps: [
      ['Download the app', 'Pick your system: on Windows run the installer; on macOS drag Folio into Applications.'],
      ['Log in', 'Log in with your Folio account; your plan, team and browser profiles sync automatically.'],
      ['Create profiles', 'Create browser profiles and add proxies; the first time one opens, its engine downloads and is checked against the official checksum.']
    ] as [string, string][],
    guide: 'Installation guide'
  },

  help: {
    title: 'Help center', lead: 'Find setup guides and answers to common questions.',
    searchLabel: 'Search the help center', search: 'Type a question or a keyword', searchBtn: 'Search', examplesLabel: 'For example:', examples: ['create a profile', 'proxies', 'import cookies', 'teams'],
    results: {
      title: 'Search results', none: 'No guides found', keyword: 'Searched for “{q}”', label: 'Keywords', again: 'Search again',
      one: '1 guide found', many: '{n} guides found', noneText: 'Try other keywords, or ask us on the contact page.'
    },
    contact: 'Contact us',
    guides: { title: 'Guides and common tasks', lead: 'Find the guide for the step you are on.' }, read: 'Read the guide',
    apiSummary: 'Open browser profiles through the local API and let Playwright, Puppeteer or Selenium take over.',
    categories: {
      start: { title: 'Getting started' },
      profiles: { title: 'Browser profiles' },
      proxies: { title: 'Proxies' },
      team: { title: 'Teams' },
      account: { title: 'Account and plans' }
    },
    developers: 'Developers', apiLink: 'Local API reference',
    faq: {
      title: 'Questions',
      items: [
        ['What kind of work is Folio for?', 'People and teams running several accounts at once: shops on several marketplaces, social media accounts, ad accounts for clients, and testing in several environments. Each account gets its own browser profile, so less device information is shared between them.'],
        ['How do I change the proxy of a profile I already made?', 'Choose Change proxy from the profile’s ⋯ menu in the list, its proxy card on its page, or the profiles table on the proxy’s page. A profile running on this computer has to be stopped first.'],
        ['Can members’ permissions be customized?', 'Yes. Besides the built-in Owner, Admin, Member and Viewer, make roles of your own and set each of the 13 permissions; a role applies across the workspace.']
      ] as [string, string][]
    },
    ask: 'Can’t find what you need?',
    home: 'Help center', directory: 'Help directory', searchDocs: 'Search the guides', searchDocsPh: 'Type a keyword', noMatch: 'No matching guides.', toc: 'On this page', updated: (date: string) => `Updated ${date}`, prev: 'Previous', next: 'Next', note: 'Note',
    feedback: { ask: 'Was this guide helpful?', yes: 'Yes', no: 'No', thanks: 'Thank you for the feedback.', failed: 'That didn’t go through. Try again later.' },
    articles: {
      install: {
        cat: 'start', title: 'Install the Folio app', summary: 'Download and install the app, then log in.',
        lead: 'Install the Folio app on a Windows or macOS computer and log in with your Folio account to get started.',
        sections: [
          { title: 'Download the installer', body: ['On the download page, pick the installer for your system: Windows 10 or later (64-bit), or macOS 12 or later (Apple silicon, M1 or newer). Get installers only from the website or other official channels.'] },
          { title: 'Install the app', body: ['Windows: run the installer and follow its steps. Folio is not code-signed yet; if SmartScreen blocks the installer, choose More info, then Run anyway.', 'macOS: open the disk image and drag Folio into Applications. If it will not open the first time, go to System Settings › Privacy & Security and choose Open Anyway; if macOS says the app is damaged, run xattr -cr /Applications/Folio.app in Terminal and open it again.'] },
          { title: 'Log in', body: ['Log in with the Folio account you made on the website; your plan, team and browser profiles sync automatically. If the account is in several workspaces, switch workspace at the top of the sidebar.'] },
          { title: 'Engines download when needed', body: ['The first time a profile on an engine version opens, Folio downloads that version and checks it against the official checksum; versions can also be downloaded ahead of time on the Engines page.'] }
        ],
        note: 'When a new version is out, the app says so and links to the new installer.'
      },
      'create-profile': {
        cat: 'start', title: 'Create your first browser profile', summary: 'Fill in the basics, set up its proxy and fingerprint, then create and open it.',
        lead: 'How to create and open your first browser profile, and learn the core Folio workflow along the way.',
        sections: [
          { title: 'Fill in the basics', body: ['On the Profiles page, choose New profile. Give it a name and pick its group, browser engine and version, and operating system; add tags and assign it to a member if you like.'] },
          { title: 'Choose a proxy and check it', body: ['Under Proxy, pick a saved proxy, enter a new one, or choose No proxy. With a proxy chosen, Check connection confirms it responds and shows its exit location and latency.'] },
          { title: 'Review the fingerprint and opening settings', body: ['Folio makes a fingerprint of its own for each browser profile; Fingerprint shows a summary that opens up for changes. Time zone and language follow the proxy by default.', 'Opening sets the start page, the window size, the search engine and whether the last tabs come back. Screen resolution and window size are separate settings; see Screen resolution and window size.'] },
          { title: 'Create and open it', body: ['Choose Create profile. Open it from the list, or from its own page; the first profile on an engine version downloads the engine first. If it doesn’t start, its page says why and offers to try again.'] }
        ],
        note: 'Without a proxy, a browser profile uses this computer’s network.'
      },
      'screen-and-window': {
        cat: 'profiles', title: 'Screen resolution and window size', summary: 'How the two differ, where each is set, and how they fit together.',
        lead: 'Screen resolution is what a browser profile tells websites about its screen; window size is how big the browser window opens. They are set separately and don’t affect each other.',
        sections: [
          { title: 'Screen resolution', body: ['Set under the profile’s Fingerprint. On Firefox, choose a resolution from the list; on Chromium, the screen resolution follows this computer’s screen and can’t be set on its own.'] },
          { title: 'Window size', body: ['Under Opening, choose Default, Custom or Maximized, and enter a width and height for Custom. Window size only decides how big the window opens; it doesn’t change the screen resolution.'] },
          { title: 'How they fit together', body: ['Keep the window no bigger than this computer’s screen, or it runs off the screen. The screen resolution websites read always comes from the fingerprint, whatever the window’s size.'] }
        ],
        note: 'Changes to these take effect the next time the profile opens.'
      },
      'import-cookies': {
        cat: 'profiles', title: 'Import cookies', summary: 'Bring existing sign-ins into a browser profile instead of signing in again.',
        lead: 'Bring existing sign-ins into a browser profile instead of signing in again.',
        sections: [
          { title: 'Open the Cookies tab', body: ['On the profile’s page, switch to Cookies. It lists the cookies the profile keeps (name, domain, path, expiration), with their values hidden.'] },
          { title: 'Choose how to import', body: ['Choose Import cookies and paste text or pick a file. JSON (as common browser extensions export it) and cookies.txt (Netscape format) are recognized automatically.'] },
          { title: 'Check the preview', body: ['Before anything comes in, each cookie is shown as valid or not, with why. For cookies with the same name, domain and path, choose whether to replace or skip them.'] },
          { title: 'Import', body: ['Confirm to import. If the profile is running on this computer, the cookies go into the running browser too; while it is in use on another computer, nothing can be imported.'] }
        ],
        note: 'Importing needs the Import cookies permission; seeing or exporting values needs Export cookies, and every read is recorded in the activity log.'
      },
      'window-sync': {
        cat: 'profiles', title: 'Window sync', summary: 'Work in a leader window while the other windows follow.',
        lead: 'Window sync repeats what you do in a leader window in other browser profiles’ windows as you work: do something once and it is done in every profile, such as opening the same page or filling in the same form for several shops.',
        sections: [
          { title: 'Which plans have it', body: ['Window sync comes with the Studio and Company plans, and with the free Studio trial. On Free, the Window sync page describes it, and owners and admins can upgrade from there.'] },
          { title: 'Start a sync', body: ['On the Window sync page, tick at least two browser profiles, make one of them the leader and choose Sync N windows; profiles that aren’t open yet open first.', 'Or tick several profiles on the Profiles page and choose Sync windows under More in the bulk actions; the one highest in the list leads.'] },
          { title: 'What is repeated', body: ['Clicks, typing (including text from an input method), keys (Enter, the arrow keys and other single keys, and shortcuts), scrolling, opening an address, going back or forward, and opening or closing tabs in the leader window are repeated in the other windows. Tabs are matched by position: when you work in another tab, the other windows switch to the matching tab.', 'A click goes to the same element in the other windows; where that element can’t be found, it goes to the same place in the window, and that window is flagged. Clicks, typing and scrolling can each be turned off under Repeat.', 'Before repeating each action, the other windows wait a random pause: 0.1 to 0.5 seconds by default, adjustable from 0 to 5 seconds.'] },
          { title: 'While syncing', body: ['The Window sync page shows a live picture of each window, the leader outlined in green and a window with a problem in red, saying what. Choose Make leader to change the leader, or enter an address above the windows and choose Open to open it in every window.', 'Choose Stop sync to end it. A profile that stops leaves the sync; when the leader stops, or only the leader is left, the sync ends.'] },
          { title: 'Tile the windows', body: ['Tile windows lays the synced windows out in a grid filling the screen, the leader top left.', 'On macOS, moving Firefox windows needs Folio allowed under System Settings › Privacy & Security › Accessibility, and under Automation when macOS asks.'] },
          { title: 'The sync log', body: ['Recent sync lists the last 50 actions in the leader window, newest first, each with how many windows repeated it and which ones couldn’t. Typing or scrolling in quick succession counts as one action; changing the leader or starting a new sync starts a new log.'] },
          { title: 'Questions', body: ['Why didn’t a window click the same button? Where its page is laid out differently, the same element may not be found; the click then goes to the same place in the window and the window is marked Couldn’t find, so check it. Positions scale with the window, so windows of different sizes sync too.', 'Can profiles on different engines sync together? Yes: the leader and the other windows can use different engines.', 'Can websites tell? The script that records the leader window runs where the page’s own scripts can’t reach it, and the other windows click and type with the browser’s trusted events.'] }
        ],
        note: 'Window sync works with browser profiles running on this computer; a profile in use on another computer can’t open here, so it doesn’t join.'
      },
      proxies: {
        cat: 'proxies', title: 'Set up and check proxies', summary: 'Add proxies or import a list, check them and assign them to browser profiles.',
        lead: 'Add proxies on the Proxies page, check that they respond, and assign them to browser profiles.',
        sections: [
          { title: 'Add a proxy', body: ['Choose Add proxy, pick the protocol (HTTP, HTTPS or SOCKS5), and enter the host and port, with a username and password if it needs them. Add a backup line too: when the main line doesn’t respond, opening a profile uses the backup.'] },
          { title: 'Import a list', body: ['Choose Import and paste your provider’s list or pick a file, one proxy per line: host:port:user:pass, user:pass@host:port, socks5://user:pass@host:port or host:port.', 'Each line is previewed before it comes in, and lines that can’t be read say why; skip proxies already saved, and name the rest from a pattern such as US-{n}.'] },
          { title: 'Check the connection', body: ['Choose Check all, or Check on a single proxy, to see whether it responds, its latency and its exit location. When more than 5 proxies are checked at once, progress shows at the bottom right and the task center has the results; proxies that don’t respond are flagged.', 'To check a proxy, the app asks Cloudflare’s public IP lookup (ipify when that is unreachable) for the exit IP through that proxy. A proxy that passes can reach the public internet; that doesn’t mean every site will accept it, since some sites restrict certain exit IPs.'] },
          { title: 'Assign to browser profiles', body: ['Pick a proxy when creating or editing a profile, or choose Change proxy from the list or the profile’s page. A proxy’s page lists the profiles using it and can unassign many at once.'] }
        ],
        note: 'A profile running on this computer can’t change its proxy; stop it first.'
      },
      'group-access': {
        cat: 'team', title: 'Give access by group', summary: 'Organize browser profiles in groups and decide who can access them.',
        lead: 'Groups decide which browser profiles members can access; roles decide what they can do.',
        sections: [
          { title: 'Create a group', body: ['On the Groups page, choose New group and give it a name, a parent group (groups nest), a color and a description.'] },
          { title: 'Give members access', body: ['Under Member access in the group’s settings, add members; they can then access the browser profiles in that group. Giving access by group is part of the Company plan.'] },
          { title: 'Inherit the parent’s access', body: ['With Inherit parent group access on, members given access to the parent group also have access to this group’s profiles.'] },
          { title: 'Roles and permissions', body: ['What members may do (create, open or delete profiles, import or export cookies, and so on) comes from their role, which applies across the workspace. Change the built-in roles, or make your own and set each of the 13 permissions, under Team › Roles.'] },
          { title: 'Invite and remove members', body: ['On the Team page choose Invite members, enter their email and pick a role. Until they accept, the invitation waits under Pending and can be withdrawn at any time; pending invitations count toward the plan’s member limit.', 'Removing a member asks who takes over the browser profiles they were responsible for; no profile is deleted, and the member’s group access ends. The owner can’t be removed.'] },
          { title: 'Delete a group', body: ['Deleting a group removes only the group. If it holds browser profiles, choose the group they move to first; they move there before the group is deleted, and who can access them follows the new group.'] }
        ],
        note: 'Owners and admins can access every browser profile; members and viewers can access the profiles assigned to them and those in their groups.'
      },
      'plans-and-billing': {
        cat: 'account', title: 'Plans and billing', summary: 'What each plan includes, the free trial, upgrades, refunds and invoices.',
        lead: 'What each plan includes, and how trying, upgrading, refunds and invoices work.',
        sections: [
          { title: 'Plans and limits', body: ['Free has 5 browser profiles; Studio includes 100 and Company 500. Paid plans have unlimited members and take add-on packs of 100 browser profiles each, up to 2,000 in total.'] },
          { title: 'Try Studio free', body: ['Each workspace can try Studio free for 7 days; afterwards, buy it or carry on with Free.'] },
          { title: 'Upgrade or change plans', body: ['Go to checkout from the account page on the website or Plan & billing in the app. An upgrade starts the same day, with the time left on the current plan credited; a downgrade starts when the current period ends. Only owners and admins can change a workspace’s plan.'] },
          { title: 'Refunds and invoices', body: ['The latest payment can be refunded within 7 days, and the plan reverts to what it was before that payment. Every payment comes with an invoice, which you can view and print on the account page.'] }
        ],
        note: 'The pricing page has each plan’s current price.'
      }
    }
  },

  changelog: {
    title: 'Changelog', h1: 'What’s new in Folio', lead: 'Each release of Folio: what was added, what got better and what was fixed.',
    filter: 'Show for', areas: { all: 'Everything', desktop: 'Workbench', site: 'Website' },
    kinds: { added: 'Added', improved: 'Improved', fixed: 'Fixed' },
    releases: [
      { version: 'Next', date: 'Coming soon', area: 'desktop',
        added: ['Task center: the results of checking proxies, opening profiles, importing proxies and editing in bulk, target by target; failed ones can be retried', 'Groups: nested groups, and on Company, access for members by group', 'Roles of your own besides the four built in, each of the 13 permissions set one by one', 'A page for each profile: overview, fingerprint, cookies and activity'],
        improved: ['One design across the workbench: lists, forms, empty states and feedback', 'A profile can keep running after its last window closes, and Go to window brings it back', 'Engines: a default engine, automatic downloads and version notes', 'The Trash retention period is now a setting'],
        fixed: ['Lists that fail to load, or that the role may not see, say so instead of showing as empty', 'Row actions and proxy addresses no longer wrap in narrow windows'] },
      { version: 'Next', date: 'Coming soon', area: 'site',
        added: ['Pages of their own for features, solutions, pricing, downloads, help and contact', 'A help center with guides, a search and feedback on each guide'],
        improved: ['New login, sign-up and password reset pages, the reset in three steps', 'The contact form asks what it is about and gives a reference number'],
        fixed: ['The Company plan on the pricing page now says “members given access by group”'] },
      { version: '0.1', date: 'October 2026', area: 'desktop',
        added: ['Chromium and Firefox engines, each browser profile with its own fingerprint', 'Proxies and connection checks', 'Sign-ins encrypted and synced to the cloud', 'Flows, scheduled tasks and window sync', 'An extension library and the local API'], improved: [], fixed: [] },
      { version: '0.1', date: 'October 2026', area: 'site',
        added: ['Sign-up, login and email verification', 'Plans, checkout and invoices', 'The account page and team invitations'], improved: [], fixed: [] }
    ] as { version: string; date: string; area: 'desktop' | 'site'; added: string[]; improved: string[]; fixed: string[] }[],
    subscribe: {
      title: 'Get release news', body: 'Leave your email to hear about new releases and features.', label: 'Email', placeholder: 'Your email address', send: 'Subscribe',
      pending: (email: string) => `A confirmation email is on its way to ${email}. Follow its link to finish subscribing.`, subscribed: 'This email is already subscribed.',
      confirmed: 'You’re subscribed. News of Folio releases will come by email.', unsubscribed: 'You’ve unsubscribed. No more release news will be sent.', badLink: 'That link doesn’t work anymore. Subscribe again.'
    }
  },

  docs: {
    apiTitle: 'API reference', apiLead: 'Folio’s local API lets scripts on the same computer open browser profiles and hand them to existing automation tools. It runs inside the Folio app and is available on that computer only.',
    api: {
      setupTitle: 'Enabling the API',
      setup: [
        'In the Folio app, open API & scripts, enable the local API and create a token. The token is shown once; copy it immediately.',
        'Requests go to http://127.0.0.1:47210 (the port can be changed on the same page) with the header Authorization: Bearer <token>. A token belongs to its creator and workspace, works only on the computer where it was created, and has the creator’s permissions: members can access only their own profiles.'
      ],
      limitsTitle: 'Rate limits',
      limits: 'Free and Studio allow 60 requests a minute, including opening, closing and queries; Company is unthrottled. Commands sent to the browser over its debugging address are not counted. Above the limit, requests return 429 with a Retry-After header in seconds.',
      enginesTitle: 'Engines and tools',
      engines: [
        ['Chromium profiles', 'Return a CDP address (wsEndpoint) and, for Selenium, a debuggerAddress. Supported: Playwright (connectOverCDP), Puppeteer, Selenium with chromedriver for Chromium 150, and other CDP clients.'],
        ['Firefox profiles', 'Return a WebDriver BiDi address. Supported: Puppeteer (protocol: webDriverBiDi) and other WebDriver BiDi clients. Playwright and Selenium currently cannot attach to a Firefox instance that is already running. While a script controls a Firefox profile, scheduled tasks skip it.']
      ] as [string, string][],
      endpointsTitle: 'Endpoints',
      endpointsLead: 'A profile is identified by its number (42 or 0042) or its id.',
      endpoints: [
        ['GET', '/api/v1/profiles', 'Profiles visible to the current account: id, number, name, engine and running state.'],
        ['POST', '/api/v1/profiles/{number}/start', 'Opens the profile as the app does (lock, saved sign-ins, proxy) and returns protocol and wsEndpoint, plus debuggerAddress for Chromium. A profile already opened through the API returns the same address. It opens on one blank tab; add ?restoreTabs=1 to reopen the tabs it was last closed with.'],
        ['GET', '/api/v1/profiles/{number}', 'Running state, with the debugging address if it was opened through the API.'],
        ['POST', '/api/v1/profiles/{number}/stop', 'Closes the profile and saves its sign-ins as usual.'],
        ['GET', '/api/v1/tasks', 'The workspace’s scheduled tasks, each with its most recent run.'],
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
    }
  },

  legal: {
    tbc: 'To be confirmed', toc: 'Contents',
    privacy: {
      title: 'Privacy policy', lead: 'What information Folio handles when you use it, how it is used and protected, and your rights.',
      draft: 'Draft. This page describes how Folio handles data today; items marked “To be confirmed” are not settled yet. The final text will be published after review.',
      sections: [
        { id: 'collect', title: 'Information we collect', lead: 'The kinds of information Folio handles when you use it.',
          table: { head: ['Category', 'What it includes', 'How it is kept'],
          rows: [
            ['Account', 'Your email address, password, interface language and whether the address is verified.', 'Only a one-way hash of the password is kept.'],
            ['Logged-in devices', 'The kind of client, the device name and when it was last used.', 'Only a digest of the login token is kept; logging out ends it.'],
            ['Workspace and plan', 'The workspace’s name, its members and roles, group access, the plan and payments.', 'Payments keep only the card brand and last four digits.'],
            ['Profiles and proxies', 'Profile names, fingerprint settings, tags and notes; proxy addresses, credentials and check results (exit IP and location); for profiles synced to the cloud, their sign-ins (cookies, local storage and the like).', 'Proxy passwords and sign-ins are encrypted before they are stored.'],
            ['Activity log', 'What members did in the workspace, and on which device.', 'Kept according to the plan: 7 days on Free, 30 days on Studio, 1 year on Company.'],
            ['Website cookie', 'The session cookie that keeps you logged in to the website.', 'With “Remember me” it lasts 30 days; otherwise it ends when the browser closes.'],
            ['Release news', 'The email address and language given when subscribing to release news.', 'News goes out only once confirmed by email; unsubscribing deletes it.'],
            ['Contact and feedback', 'The name, email address, team size and message sent through the contact form; whether a help article helped.', 'Article feedback is not linked to an account.']
          ] as string[][] } },
        { id: 'use', title: 'How we use it', lead: 'What the information above is used for. It is not used for advertising.',
          table: { head: ['Category', 'Purpose'],
          rows: [
            ['Account', 'Signing up and logging in, verifying the email address, resetting the password, and sending codes and workspace invitations.'],
            ['Logged-in devices', 'Showing which computer a profile is in use on, and running scheduled tasks on the computer they belong to.'],
            ['Workspace and plan', 'Limiting access by role and group, tracking plan usage, issuing invoices and handling refunds.'],
            ['Profiles and proxies', 'Opening profiles on your computer as they are set up, syncing sign-ins between members, and checking proxy connections.'],
            ['Activity log', 'Letting members with the permission see what happened and look into problems.'],
            ['Release news', 'Sending news of Folio releases and features.'],
            ['Contact and feedback', 'Answering your inquiry and improving the help articles.']
          ] as string[][] } },
        { id: 'store', title: 'Storage and protection', lead: 'Where and how the information is kept.',
          items: [
            ['Where it is stored', null],
            ['Protection', 'Passwords are kept only as hashes; proxy passwords and browser sign-ins are encrypted with AES-256-GCM before they are stored; exported files are encrypted with a passphrase you choose, which the server never keeps.'],
            ['How long it is kept', 'The activity log follows the plan; profiles moved to the Trash are permanently deleted after the set number of days (30 by default); how long other information is kept is to be confirmed.']
          ] as [string, string | null, string?][] },
        { id: 'share', title: 'Sharing', lead: 'Whether information is passed on to anyone else.',
          items: [
            ['Selling data', 'We do not sell user data.'],
            ['Within your workspace', 'Profiles and proxies you create in a workspace can be seen and used by its members who have the permission.'],
            ['Proxy checks', 'To check a proxy, the app asks Cloudflare’s public IP lookup (ipify when that is unreachable) for the exit IP through that proxy; these services see the proxy’s exit IP, not yours.'],
            ['Email, storage and payment providers', null],
            ['Disclosure required by law', null]
          ] as [string, string | null, string?][] },
        { id: 'rights', title: 'Your rights', lead: 'How you can see, correct, export and delete your information.',
          items: [
            ['See', 'Your email address, workspaces and payments are on the account page; members with the permission can see the activity log in the app.'],
            ['Correct', 'Profiles, proxies and workspace details can be changed in the app; a forgotten password can be reset by email.'],
            ['Export', 'Members with the export permission can export the workspace’s profiles as an encrypted file.'],
            ['Delete', 'Profiles and proxies can be deleted at any time. To close your account, write to us through the contact page; how long that takes is to be confirmed.'],
            ['Unsubscribe', 'The email confirming a subscription has a link to unsubscribe from release news at any time.']
          ] as [string, string | null, string?][] },
        { id: 'contact', title: 'Contact us', lead: 'Questions about this policy or about your information can reach us here.',
          items: [
            ['Contact form', 'The “Contact us” page', 'contact/'],
            ['Email', null],
            ['Operator', null]
          ] as [string, string | null, string?][] }
      ],
      version: 'Version', effective: 'Effective date'
    },
    terms: {
      title: 'Terms of service', lead: 'Your rights and obligations when you use Folio and its services.',
      draft: 'Draft. This page follows Folio’s current product rules; items marked “To be confirmed” are not settled yet. The final terms will be published after review.',
      sections: [
        { title: 'The service', body: ['Folio is a service for managing browser profiles: the Windows and macOS app, profile and proxy management, sign-ins synced to the cloud, team collaboration and the local API.', 'What each plan includes is set out on the pricing page.'] },
        { title: 'Your account', body: ['Sign up with a valid email address of your own and verify it. Keep your password safe: the account holder is responsible for what is done with the account.', 'Workspace owners decide members’ roles and what they can access. If something looks wrong with your account, reset your password and contact us.'] },
        { title: 'Acceptable use', body: ['When you use Folio to visit other websites and platforms, follow the applicable laws and those platforms’ rules.', 'Do not use Folio for anything unlawful, to infringe the rights of others, or to disrupt the service.'] },
        { title: 'Plans and fees', body: ['Free costs nothing. Paid plans are billed monthly or yearly and renew until canceled; once canceled, the plan stops renewing at the end of the current period.', 'Each workspace can try Studio free for 7 days. The most recent payment can be refunded within 7 days of payment, and the plan goes back to what it was before that payment.', 'Prices are those on the pricing page and exclude local taxes.'] },
        { title: 'Changes and termination', body: ['We may change the product or these terms; how significant changes are announced, and when they take effect, is to be confirmed.', 'You can stop using Folio and cancel your subscription at any time. The rules for suspending or ending the service after a breach of these terms are to be confirmed.'] },
        { title: 'Liability and disputes', body: ['Limits of liability, the governing law and how disputes are resolved are to be confirmed.'] }
      ],
      effective: 'Effective date', effectiveBody: 'The effective date will be set when the final terms are published.'
    }
  },

  notFound: {
    title: 'Page not found', lead: 'The page may have moved, or the link may be wrong.',
    home: 'Back to home', help: 'Visit the help center'
  },

  errors: {
    email_taken: 'This email is already registered. Log in instead.',
    invalid_credentials: 'The email or password is incorrect. Check them and try again.',
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
    too_soon: 'An email went out a moment ago. Try again in a minute.',
    forbidden: 'Access denied.',
    not_found: 'Not found.',
    validation: 'Some fields are missing or invalid.',
    wrong_password: 'The current password is not right.',
    emailMissing: 'Enter an email address.', emailInvalid: 'The email address is not valid. Check it and try again.', passwordMissing: 'Enter your password.', passwordShort: 'The password must be 8 to 64 characters.',
    codeMissing: 'Enter the 6-digit code.', passwordMismatch: 'The two passwords don’t match.', consentMissing: 'Read and agree to the terms of service and privacy policy first.',
    network: 'Folio cannot be reached. Check the network connection and try again.',
    wrong_account: 'This invitation was sent to a different email address.',
    email_unverified: 'Verify the email address first.',
    invitation_expired: 'This invitation has expired. Ask the inviter to send a new one.',
    seat_limit: 'This workspace has no free seats. Ask the owner to upgrade the plan.',
    mail_unavailable: 'The email could not be sent. Try again later.',
    internal: 'A service error occurred. Try again later.'
  } as Record<string, string>
};
