// English copy. zh.ts must have exactly the same shape (enforced by the Dict type).
// Tone: measured and factual, no absolute promises; feature plus benefit ("…, reducing …"); "browser profile" in prose,
// "profile" where space is tight (counts, table headings).
export const en = {
  meta: {
    title: 'Folio Browser',
    description: 'A fingerprint browser for teams running multiple stores, ad accounts and social accounts: a separate browser profile for each account, with configurable fingerprints, isolated cookies and a dedicated proxy IP.'
  },
  nav: { features: 'Features', solutions: 'Solutions', pricing: 'Pricing', download: 'Download', help: 'Help center', login: 'Log in', start: 'Try free', account: 'Account', menu: 'Menu', crumbs: 'Breadcrumb' },
  plans: { free: 'Free', studio: 'Studio', company: 'Company' },
  periods: { monthly: 'monthly', yearly: 'yearly' },

  demo: {
    label: 'Workbench walkthrough: checking proxies, opening a browser profile, restoring tabs, a health check, installing an extension, batch opening, window sync and teamwork.', pause: 'Pause walkthrough', play: 'Play walkthrough',
    sample: { name: 'UK-Shop-01', place: 'London · Firefox 156', status: 'Running' }
  },

  home: {
    h1: 'Separate profiles,\nmanaged as one',
    lead: 'Folio manages browser profiles, proxies and team access in one place, so many accounts are set up centrally and worked on in an orderly way.',
    features: 'See the features',
    points: [['Kept apart', 'Each account runs on its own'], ['Proxies', 'HTTP, HTTPS and SOCKS5'], ['Teams', 'Access under control']] as [string, string][],
    cardsTitle: 'Built for working with many accounts', cardsLead: 'From the first browser profile to the whole team, with everything in between.',
    cards: [
      { title: 'Browser profiles', body: 'Set up separate browser profiles and see their status and key settings in one place.', mini: { title: 'New profile', rows: [['Name', 'US-Store-01'], ['System', 'Windows'], ['Engine', 'Chromium 150']] as [string, string][], button: 'Create profile' } },
      { title: 'Proxies', body: 'Set up proxies in one place, with their checks and the profiles that use them.', mini: { title: 'New proxy', rows: [['Type', 'SOCKS5'], ['Host', '203.0.113.24'], ['Port', '1080']] as [string, string][], button: 'Check connection' } },
      { title: 'Groups', body: 'Organise browser profiles by business, region or project.', mini: { title: 'Groups', rows: [['', 'US stores · 3'], ['', 'EU shops · 2'], ['', 'Social · 2']] as [string, string][], button: 'New group' } },
      { title: 'Teams', body: 'Give members roles and the groups they reach, so everyone knows what is theirs.', mini: { title: 'Members', rows: [['Ava', 'Owner'], ['Jordan', 'Admin'], ['Riley', 'Member']] as [string, string][], button: 'Invite people' } }
    ],
    steps: {
      title: 'Three steps to start', lead: 'Sign up, create browser profiles and bring in your team.',
      items: [['Create profiles', 'Set the fingerprint and basics of a separate browser profile.'], ['Add proxies', 'Bring in your proxies and check that they answer.'], ['Bring in the team', 'Invite members and give them the access they need.']] as [string, string][]
    },
    uses: {
      title: 'For many kinds of work', lead: 'Browser profiles organised for the way each business works.',
      items: [
        { title: 'Cross-border e-commerce', body: 'Shops on several marketplaces, each account kept apart, run by one team.', list: ['US-Store-01', 'UK-Shop-01', 'JP-Shop-01', 'DE-Shop-01'] },
        { title: 'Social media', body: 'Many social accounts at once, with teamwork and access control.', list: ['Social-01', 'Social-02', 'Social-03', 'Social-04'] },
        { title: 'Testing', body: 'Separate test environments for development and QA teams.', list: ['Test-Env-A', 'Test-Env-B', 'Staging-01', 'Staging-02'] }
      ]
    },
    faq: {
      title: 'Questions', lead: 'What people ask most. For anything else,', contact: 'contact us',
      items: [
        ['Can Folio guarantee that accounts will not be banned?', 'No. Folio reduces the risk of several accounts being identified as the same device. Accounts that break platform rules, or that use low-quality proxy IPs, may still be restricted. A dedicated residential or ISP proxy for each browser profile is recommended.'],
        ['Are my own proxies required?', 'Yes. HTTP, HTTPS and SOCKS5 proxies are supported and can be added one by one or imported in bulk. Each is checked for connectivity and exit location, and the time zone and language are set to match.'],
        ['Should I use Chromium or Firefox?', 'Chromium is recommended for most accounts; each Chromium browser profile has a stable, distinct fingerprint. Firefox suits sites that expect Firefox users. Firefox browser profiles on the same computer share more of their fingerprint, so many accounts on one platform should not all use Firefox.'],
        ['Where is browser profile data stored?', 'By default it is encrypted and synced to the cloud, so work can continue on another computer. Individual browser profiles can also be kept on one computer only. All data can be exported at any time.'],
        ['How are the engines updated?', 'Folio uses open-source fingerprint engines and releases new versions after testing. Existing browser profiles keep their engine version and can be upgraded when convenient.']
      ] as [string, string][]
    },
    band: { title: 'Get started with Folio', body: 'Try 5 browser profiles free, with no card required.', download: 'Download the app' }
  },

  features: {
    title: 'Features', h1: 'Everything it takes to run\nbrowser profiles',
    lead: 'Folio starts from the browser profile and connects it to proxies, groups, members and what was done: creating profiles, setting up proxies, working as a team and keeping engines up to date, in one set of tools.',
    shot: 'The list of browser profiles in the Folio workbench', tabsLabel: 'Areas',
    blocks: [
      { title: 'Browser profiles', lead: 'Set up browser profiles for each line of work, with their fingerprints and status in one place.', shot: 'The new profile form: basics, proxy, fingerprint and opening settings',
        points: [
          ['Their own fingerprint and storage', 'Each browser profile has its own Canvas, WebGL, audio and font fingerprint, and keeps its cookies and storage apart.'],
          ['Two engines', 'Chromium and Firefox, with the version chosen per browser profile; existing profiles keep theirs.'],
          ['Bulk actions and a Trash', 'Open, stop, move and edit many at once; deleted browser profiles go to the Trash and can be restored while they are kept.']
        ] as [string, string][] },
      { title: 'Proxies', lead: 'Connection details, check history and which browser profiles use each proxy.', shot: 'The proxy list: type, address, exit location, status and latency',
        points: [
          ['HTTP, HTTPS and SOCKS5', 'Add proxies one by one or import a list, with each line previewed before it comes in.'],
          ['Connection checks', 'Checks reach, latency and exit location, and sets the time zone and language to match; proxies that stop answering are flagged.'],
          ['Assign and replace', 'One proxy can serve several browser profiles; replace a profile’s proxy or unassign many at once.']
        ] as [string, string][] },
      { title: 'Teams', lead: 'Groups and roles decide what each member reaches and may do.', shot: 'Groups: the group tree, a group’s browser profiles and its settings',
        points: [
          ['Nested groups', 'Group browser profiles by business, region or project, at several levels; on Company, give members access by group.'],
          ['Roles and permissions', 'Owner, Admin, Member and Viewer are built in; make your own roles and set each of the 13 permissions.'],
          ['Activity log', 'Records opening, changing and handing over browser profiles, searchable by person, kind and date.']
        ] as [string, string][] },
      { title: 'Engines', lead: 'Engine versions, what is downloaded and which browser profiles use each.', shot: 'Engines: the default engine, each version’s download state and the profiles using it',
        points: [
          ['Several versions side by side', 'Keep more than one version of an engine; existing browser profiles stay on theirs until upgraded.'],
          ['Downloads', 'Download, pause and resume, download only while idle, and clean up versions nothing uses.'],
          ['A default engine', 'Set the workspace’s default engine; new browser profiles start with it.']
        ] as [string, string][] },
      { title: 'Automation', lead: 'Less repetitive work, with the results of batch operations in the task center.', shot: 'Window sync: what is done in the leading window repeats in the others',
        points: [
          ['Window sync', 'Clicks, typing and scrolling in the leading window repeat in the others.'],
          ['Flows and scheduled tasks', 'Build flows step by step and run them over a set of browser profiles a few at a time, on a schedule, with every run’s results kept.'],
          ['Local API and extensions', 'The local API works with Playwright, Puppeteer and Selenium; extensions are kept in one library and installed in many profiles at once.']
        ] as [string, string][] }
    ],
    flow: {
      title: 'From the first profile to the whole team, in one place',
      steps: [
        ['Create profiles', 'Set up browser profiles and their fingerprints.'],
        ['Add proxies', 'Choose the protocol and check the connection.'],
        ['Bring in members', 'Set their roles and the groups they reach.'],
        ['Get to work', 'Manage every browser profile from one workbench.']
      ] as [string, string][],
      cta: 'Try the whole workflow'
    }
  },

  solutions: {
    title: 'Solutions', h1: 'Browser profiles,\norganised for the way you work',
    lead: 'Folio organises browser profiles, proxies and member access around how your business is structured, so people and teams have a clear way of working in each line of business.',
    shot: 'The list of browser profiles in the Folio workbench', start: 'Try free', features: 'See the features',
    casesTitle: 'For different lines of business', casesLead: 'Start from what the work needs and set up the browser profiles, proxies and access to match.',
    hub: 'Proxy', needs: 'What it needs', answers: 'What helps',
    cases: [
      { title: 'Cross-border e-commerce', lead: 'Browser profiles organised by marketplace and shop, with proxies and member access managed in one place.', envs: ['Shop\nUS', 'Shop\nEU', 'Shop\nJapan'],
        needs: ['Shops on several marketplaces at once', 'Each account’s environment kept apart', 'Work divided across the team'], answers: ['Browser profiles created in bulk', 'Proxies set up and checked', 'Roles and access by group'], cta: 'See the solution' },
      { title: 'Social media', lead: 'Accounts grouped by project, set up and run together.', envs: ['Account\nProject A', 'Account\nProject B', 'Account\nProject C'],
        needs: ['Many social accounts', 'Each account signed in on its own', 'Posting and day-to-day work shared'], answers: ['Separate browser profiles', 'Window sync for bulk work', 'Groups and permissions'], cta: 'See the features' },
      { title: 'Testing', lead: 'Test environments kept apart, with what was done and batch results on record.', envs: ['Dev', 'Test', 'Staging'],
        needs: ['Several people testing at once', 'Projects kept apart', 'Environments easy to manage and clean up'], answers: ['Browser profiles in groups', 'Access by member', 'Activity log and task records'], cta: 'See the features' }
    ],
    flow: {
      title: 'From members to proxies, in four steps', lead: 'Set up and run a team’s browser profiles.',
      steps: [
        ['Invite members', 'Bring the team in and give each a role.'],
        ['Grant groups', 'Create groups for the business and decide who reaches them.'],
        ['Create profiles', 'A separate browser profile for each line of work.'],
        ['Add proxies', 'Assign proxies to the browser profiles and check them.']
      ] as [string, string][]
    },
    faq: {
      title: 'Questions', lead: 'About setting up browser profiles for your work.',
      items: [
        ['What kind of work is Folio for?', 'People and teams running several accounts at once: shops on several marketplaces, social media accounts, ad accounts for clients, and testing in several environments. Each account gets its own browser profile, so less device information is shared between them.'],
        ['How are members’ permissions managed?', 'Admins invite members and give each a role: Owner, Admin, Member and Viewer are built in, and roles of your own can set each permission. On Company, members can also be given access to browser profiles by group.'],
        ['Can browser profiles be created in bulk?', 'Yes. Import browser profiles from a spreadsheet, import proxies from a list, and change the group, proxy or engine version of many at once; the task center shows how each batch went.']
      ] as [string, string][]
    },
    band: { title: 'Find the right setup for your team', body: 'Tell us what you need and get advice on setting up browser profiles.', contact: 'Contact us' }
  },

  ecommerce: {
    title: 'Cross-border e-commerce', crumb: 'Cross-border e-commerce', h1: 'Shops in many regions,\nrun by one team',
    lead: 'Organise browser profiles by shop and region, and set up proxies and member access in one place.',
    shot: 'Groups: browser profiles organised by region, and the group’s settings', features: 'See the features',
    pains: {
      title: 'What gets in the way', lead: 'With several marketplaces in several regions, browser profiles, proxies and people get harder to keep track of.',
      items: [
        ['Too many setups', 'Each shop, region and way of working needs its own browser profile, and keeping them straight by hand gets messy.', 'Browser profiles in groups', 'Organised by shop and region'],
        ['Scattered proxies', 'Proxies from several providers, set up in different ways, are hard to keep up and switch.', 'Proxies set up in the workbench', 'Checked, then assigned to profiles'],
        ['Hard handovers', 'Access and account details sit in different places, so new people and changes take long to hand over.', 'Access by role and group', 'Clear about who reaches what']
      ] as [string, string, string, string][]
    },
    flow: {
      title: 'How to set it up', lead: 'Four steps to a cross-border e-commerce setup the whole team can work in.',
      steps: ['Create groups', 'Set up profiles', 'Check proxies', 'Grant access'],
      mini: {
        groups: { title: 'Groups', items: ['US stores', 'Japan stores'], add: 'New group' },
        profile: { title: 'New profile', fields: [['Name', 'US-Shop-A'], ['Group', 'US stores'], ['Notes', 'Main US shop']] as [string, string][], create: 'Create profile' },
        proxy: { title: 'Proxy check', fields: [['Type', 'HTTP'], ['Address', '203.0.113.24:8080']] as [string, string][], check: 'Check connection', ok: 'Answering', exit: 'Exit: Seattle, United States' },
        access: { title: 'US stores · member access', people: [['Jordan', 'Member', true], ['Riley', 'Viewer', true], ['Sam', 'Member', false]] as [string, string, boolean][], save: 'Save settings' }
      }
    },
    compare: {
      title: 'Before and after', lead: 'From scattered and messy to one orderly place.',
      before: 'Before', beforeSub: 'Scattered, costly to manage', after: 'After', afterSub: 'In one place, easier to share',
      afterShot: 'The list of browser profiles in the Folio workbench: groups, proxies and status',
      cols: ['Shop', 'Marketplace', 'Proxy', 'Owner', 'State'],
      rows: [
        ['US-Shop-A', 'Marketplace A', 'US IP, set up alone', 'Alex', 'Messy setup'],
        ['US-Shop-B', 'Marketplace B', 'Proxy kept in a doc', 'Sam', 'Hard to trace'],
        ['JP-Shop-A', 'Marketplace C', 'Japan IP, another tool', 'Jo', 'Hard to hand over'],
        ['JP-Shop-B', 'Marketplace D', 'Proxy switched by hand', 'Lee', 'Easy to get wrong']
      ]
    },
    note: 'Each marketplace’s own rules for accounts and verification apply.'
  },

  pricing: {
    title: 'Pricing', h1: 'Plans that fit\nthe size of your work',
    lead: 'Priced by the number of browser profiles, with unlimited members on paid plans. From trying Folio on your own to several teams working together, pick the plan that fits today and change it anytime.',
    note: 'Free is free forever, with no card required. Payments can be refunded within 7 days.',
    shot: 'The list of browser profiles in the Folio workbench',
    period: 'Billing period', monthly: 'Monthly', yearly: 'Yearly', save: 'save 20%',
    perMonth: '/ month', forever: 'free forever',
    perProfile: (amount: string) => `${amount} per profile a month`,
    billedMonthly: 'Billed monthly, cancel anytime',
    billedYearly: (total: string) => `Billed yearly, ${total} in total`,
    noCard: 'No card required',
    profilesMembers: (p: number, m: string) => `${p} profiles · ${m}`,
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
        ['Browser profiles', '5', '100, more with add-ons', '500, more with add-ons'],
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
      profiles: (n: number) => `${n} profiles`,
      withPacks: (plan: string, packs: number) => `${plan} + ${packs} add-on ${packs === 1 ? 'pack' : 'packs'}`,
      fit: (n: number, pick: string) => `${n} profiles: ${pick}`,
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
        ['Are refunds and invoices available?', 'The latest payment can be refunded within 7 days, which puts the plan back as it was before it. Every payment comes with an invoice, which the account page shows and prints.']
      ] as [string, string][]
    },
    band: { title: 'Start free, upgrade when you need to', body: 'Sign up to use 5 browser profiles, with no card required.' },
    foot: (pack: string) => `Additional browser profiles cost ${pack} a month per 100; above 2,000, a custom quote is available. Prices exclude local taxes, and an invoice is issued for every payment.`
  },

  footer: { product: 'Product', resources: 'Resources', company: 'Company', api: 'API reference', changelog: 'Changelog', contact: 'Contact us', privacy: 'Privacy', terms: 'Terms', tagline: 'Separate profiles, managed as one', about: 'Folio manages browser profiles, proxies and team access in one place.', rights: '© 2026 Folio' },

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

  contact: {
    title: 'Contact us', h1: 'Talk to the Folio team', lead: 'Ask about the product, tell us how it’s going, or propose working together, and we’ll get back to you as soon as we can.',
    kinds: {
      product: ['About the product', 'Features, which kinds of work it suits, and advice on setting it up.'],
      support: ['Support', 'Something isn’t working, or you need help using it.'],
      partner: ['Partnerships', 'Business or channel partnerships, and anything else.']
    },
    formTitle: 'Send a question', formLead: 'Fill in the form and we’ll get back to you as soon as we can.',
    name: 'Name', namePh: 'Your name', email: 'Work email', emailPh: 'you@company.com', kind: 'About',
    teamSize: 'Team size', teamPh: 'Choose a size', sizes: [['1-5', '1–5 people'], ['6-20', '6–20 people'], ['21-100', '21–100 people'], ['100+', 'More than 100']] as [string, string][],
    message: 'What you need', messagePh: 'Your needs, how you would use Folio, or what you want to know', consent: 'I have read and agree to the', privacy: 'privacy policy',
    send: 'Send', done: 'Sent', doneText: 'Keep the reference number to refer to this later.', number: 'Reference', again: 'Send another',
    failed: 'That didn’t go through. Try again later; what you wrote is still here.',
    more: {
      eyebrow: 'More', title: 'Other places to look', lead: 'Find out more about the product, or get help using it.',
      items: [['Help center', 'Guides, common questions and the local API reference.'], ['Pricing', 'What each plan includes and costs.'], ['Download', 'Get the app and start using Folio.']] as [string, string][]
    }
  },

  download: {
    title: 'Download Folio', h1: 'Download Folio and\nstart running browser profiles',
    lead: 'Install the Folio app on your computer and sign in with your Folio account to create and run browser profiles; your plan, team and browser profiles sync automatically.',
    shot: 'The list of browser profiles in the Folio workbench', pending: 'Installers coming soon',
    windowsName: 'Windows', macName: 'macOS',
    windows: 'Windows 10 or later (64-bit)', mac: 'macOS 12 or later (Apple silicon, M1 or newer)',
    get: (os: string) => `Download for ${os}`, soon: 'Coming soon',
    version: (v: string) => `Version ${v}`, released: (date: string) => `released ${date}`,
    notesTitle: 'First install',
    winNote: 'Folio is not code-signed yet. If SmartScreen blocks the installer, choose More info, then Run anyway.',
    macNote: 'Folio is not code-signed yet. Drag Folio into Applications. If it will not open the first time, go to System Settings › Privacy & Security and choose Open Anyway; if macOS says the app is damaged, run xattr -cr /Applications/Folio.app in Terminal and open it again.',
    other: 'Installers for other systems are not available. If you need one,', contact: 'contact us',
    stepsTitle: 'Three steps to get started', stepsLead: 'Download and install the app, sign in, and create browser profiles.',
    steps: [
      ['Download the app', 'Pick your system: on Windows run the installer; on macOS drag Folio into Applications.'],
      ['Sign in', 'Sign in with your Folio account; your plan, team and browser profiles sync automatically.'],
      ['Create profiles', 'Create browser profiles and add proxies; the first time one opens, its engine downloads and is checked against the official checksum.']
    ] as [string, string][],
    help: [
      ['Installing', 'For installation steps and common questions, see the docs.', 'Read the docs'],
      ['What’s new', 'New features and fixes in each version of the Folio app.', 'See the changelog'],
      ['Stay safe', 'Get installers from this page or other official channels, so you know where they come from.', '']
    ] as [string, string, string][]
  },

  help: {
    title: 'Help center', lead: 'Find setup guides and answers to common questions.',
    search: 'Type a question or a keyword', searchBtn: 'Search', examplesLabel: 'For example:', examples: ['create a profile', 'proxies', 'import cookies', 'teams'],
    shot: 'The list of browser profiles in the Folio workbench',
    results: { one: '1 guide about “{q}”', many: '{n} guides about “{q}”', none: 'No guides about “{q}”' },
    noneText: 'Try another keyword, for example:', noneMore: 'Still no answer?', contact: 'Contact us',
    categories: {
      start: { title: 'Getting started', body: 'From installing the app to your first browser profile: how Folio is used.' },
      profiles: { title: 'Browser profiles', body: 'Creating and setting up browser profiles, their screen, window and cookies.' },
      proxies: { title: 'Proxies', body: 'Adding and importing proxies, checking them and assigning them to profiles.' },
      team: { title: 'Teams', body: 'Groups, access for members, and roles and permissions.' },
      account: { title: 'Account and plans', body: 'What each plan includes, the free trial, upgrades, refunds and invoices.' }
    },
    popular: 'Popular guides', developers: 'Developers', apiLink: 'Local API reference',
    faq: {
      title: 'Questions',
      items: [
        ['What kind of work is Folio for?', 'People and teams running several accounts at once: shops on several marketplaces, social media accounts, ad accounts for clients, and testing in several environments. Each account gets its own browser profile, so less device information is shared between them.'],
        ['How do I change the proxy of a profile I already made?', 'Choose Change proxy from the profile’s ⋯ menu in the list, its proxy card on its page, or the profiles table on the proxy’s page. A profile running on this computer has to be stopped first.'],
        ['Can members’ permissions be customised?', 'Yes. Besides the built-in Owner, Admin, Member and Viewer, make roles of your own and set each of the 13 permissions; a role applies across the workspace.']
      ] as [string, string][]
    },
    contactCard: { title: 'Contact us', body: 'If the answer isn’t here, our team can help.', cta: 'Send a question' },
    home: 'Help center', searchDocs: 'Search the guides', toc: 'On this page', updated: (date: string) => `Updated ${date}`, prev: 'Previous', next: 'Next', note: 'Note',
    feedback: { ask: 'Was this guide helpful?', yes: 'Yes', no: 'No', thanks: 'Thank you for the feedback.', failed: 'That didn’t go through. Try again later.' },
    articles: {
      install: {
        cat: 'start', title: 'Install the Folio app', summary: 'Download and install the app, then sign in.',
        lead: 'Install the Folio app on a Windows or macOS computer and sign in with your Folio account to get started.',
        sections: [
          { title: 'Download the installer', body: ['On the Download page, pick the installer for your system: Windows 10 or later (64-bit), or macOS 12 or later (Apple silicon, M1 or newer). Get installers only from the website or other official channels.'] },
          { title: 'Install the app', body: ['Windows: run the installer and follow its steps. Folio is not code-signed yet; if SmartScreen blocks the installer, choose More info, then Run anyway.', 'macOS: open the disk image and drag Folio into Applications. If it will not open the first time, go to System Settings › Privacy & Security and choose Open Anyway; if macOS says the app is damaged, run xattr -cr /Applications/Folio.app in Terminal and open it again.'] },
          { title: 'Sign in', body: ['Sign in with the Folio account you made on the website; your plan, team and browser profiles sync automatically. If the account is in several teams, switch workspace at the top of the sidebar.'] },
          { title: 'Engines download when needed', body: ['The first time a profile on an engine version opens, Folio downloads that version and checks it against the official checksum; versions can also be downloaded ahead of time on the Engines page.'] }
        ],
        note: 'When a new version is out, the app says so and links to the new installer.'
      },
      'create-profile': {
        cat: 'start', title: 'Create your first browser profile', summary: 'Fill in the basics, set up its proxy and fingerprint, then create and open it.',
        lead: 'How to create and open your first browser profile, and with it the core of how Folio is used.',
        sections: [
          { title: 'Fill in the basics', body: ['On the Profiles page, choose New profile. Give it a name and pick its group, browser engine and version, and operating system; add tags and assign it to a member if you like.'] },
          { title: 'Choose a proxy and check it', body: ['Under Proxy, pick a saved proxy, enter a new one, or choose No proxy. With a proxy chosen, Check connection confirms it answers and shows its exit location and latency.'] },
          { title: 'Look over the fingerprint and opening', body: ['Folio makes a fingerprint of its own for each browser profile; Fingerprint shows a summary that opens up for changes. Time zone and language follow the proxy by default.', 'Opening sets the start page, the window size, the search engine and whether the last tabs come back. Screen resolution and window size are separate settings; see Screen resolution and window size.'] },
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
          { title: 'Open the Cookies tab', body: ['On the profile’s page, switch to Cookies. It lists the cookies the profile keeps (name, domain, path, expiry), with their values hidden.'] },
          { title: 'Choose how to import', body: ['Choose Import cookies and paste text or pick a file. JSON (as common browser extensions export it) and cookies.txt (Netscape format) are recognised automatically.'] },
          { title: 'Check the preview', body: ['Before anything comes in, each cookie is shown as valid or not, with why. For cookies with the same name, domain and path, choose whether to replace or skip them.'] },
          { title: 'Import', body: ['Confirm to import. If the profile is running on this computer, the cookies go into the running browser too; while it is in use on another computer, nothing can be imported.'] }
        ],
        note: 'Importing needs the Import cookies permission; seeing or exporting values needs Export cookies, and every read is recorded in the activity log.'
      },
      proxies: {
        cat: 'proxies', title: 'Set up and check proxies', summary: 'Add proxies or import a list, check them and assign them to browser profiles.',
        lead: 'Add proxies on the Proxies page, check that they answer, and assign them to browser profiles.',
        sections: [
          { title: 'Add a proxy', body: ['Choose Add proxy, pick the protocol (HTTP, HTTPS or SOCKS5), and enter the host and port, with a username and password if it needs them. Add a backup line too: when the main line doesn’t answer, opening a profile uses the backup.'] },
          { title: 'Import a list', body: ['Choose Import and paste your provider’s list or pick a file, one proxy per line: host:port:user:pass, user:pass@host:port, socks5://user:pass@host:port or host:port.', 'Each line is previewed before it comes in, and lines that can’t be read say why; skip proxies already saved, and name the rest from a pattern such as US-{n}.'] },
          { title: 'Check the connection', body: ['Choose Check all, or Check on a single proxy, to see whether it answers, its latency and its exit location. A check of more than five shows its progress at the bottom right, and the task center has the results; proxies that don’t answer are flagged.'] },
          { title: 'Assign to browser profiles', body: ['Pick a proxy when creating or editing a profile, or choose Change proxy from the list or the profile’s page. A proxy’s page lists the profiles using it and can unassign many at once.'] }
        ],
        note: 'A profile running on this computer can’t change its proxy; stop it first.'
      },
      'group-access': {
        cat: 'team', title: 'Give access by group', summary: 'Organise browser profiles in groups and decide who reaches them.',
        lead: 'Groups decide which browser profiles members reach; roles decide what they may do.',
        sections: [
          { title: 'Create a group', body: ['On the Groups page, choose New group and give it a name, a parent group (groups nest), a colour and a description.'] },
          { title: 'Give members access', body: ['Under Member access in the group’s settings, add members; they then reach the browser profiles in that group. Giving access by group is part of the Company plan.'] },
          { title: 'Inherit the parent’s access', body: ['With Inherit parent group access on, members given access to the parent group also reach this group’s profiles.'] },
          { title: 'Roles and permissions', body: ['What members may do (create, open or delete profiles, import or export cookies, and so on) comes from their role, which applies across the workspace. Change the built-in roles, or make your own and set each of the 13 permissions, under Team › Roles.'] }
        ],
        note: 'Owners and admins reach every browser profile; members and viewers reach the profiles assigned to them and those in their groups.'
      },
      'plans-and-billing': {
        cat: 'account', title: 'Plans and billing', summary: 'What each plan includes, the free trial, upgrades, refunds and invoices.',
        lead: 'What each plan includes, and how trying, upgrading, refunds and invoices work.',
        sections: [
          { title: 'Plans and limits', body: ['Free has 5 browser profiles; Studio includes 100 and Company 500. Paid plans have unlimited members and take add-on packs of 100 browser profiles each, up to 2,000 in total.'] },
          { title: 'Try Studio free', body: ['Each workspace can try Studio free for 7 days; afterwards, buy it or carry on with Free.'] },
          { title: 'Upgrade or change plans', body: ['Go to checkout from the account page on the website or Plan & billing in the app. An upgrade starts the same day, with the time left on the current plan credited; a downgrade starts when the current period ends. Only owners and admins can change a workspace’s plan.'] },
          { title: 'Refunds and invoices', body: ['The latest payment can be refunded within 7 days, which puts the plan back as it was before it. Every payment comes with an invoice, which the account page shows and prints.'] }
        ],
        note: 'The pricing page has each plan’s current price.'
      }
    },
    minis: {
      'create-profile': { title: 'New profile', rows: [['Name', 'Test profile 01'], ['Group', 'US stores']] as [string, string][], button: 'Create profile' },
      proxies: { title: 'Proxy', rows: [['Type', 'HTTP'], ['Address', '203.0.113.24:8080']] as [string, string][], button: 'Check connection' },
      'screen-and-window': { title: 'Opening', rows: [['Resolution', '1920 × 1080'], ['Window', '1280 × 800']] as [string, string][], button: 'Save' },
      'import-cookies': { title: 'Import cookies', rows: [['', 'session=…; domain=shop.example'], ['', 'lang=en; domain=shop.example']] as [string, string][], button: 'Import' },
      'group-access': { title: 'US stores · member access', rows: [['Jordan', 'Member'], ['Riley', 'Viewer']] as [string, string][], button: 'Save settings' }
    }
  },

  changelog: {
    title: 'Changelog', h1: 'What’s new in Folio', lead: 'Each release of Folio: what was added, what got better and what was fixed.',
    filter: 'Show for', areas: { all: 'Everything', desktop: 'Workbench', site: 'Website' },
    kinds: { added: 'Added', improved: 'Improved', fixed: 'Fixed' },
    releases: [
      { version: 'Next', date: 'Coming soon', area: 'desktop',
        added: ['Task center: the results of checking proxies, opening profiles, importing proxies and editing in bulk, target by target, with failed ones retried', 'Groups: nested groups, and on Company, access for members by group', 'Roles of your own besides the four built in, each of the 13 permissions set one by one', 'A page for each profile: overview, fingerprint, cookies and activity'],
        improved: ['One design across the workbench: lists, forms, empty states and feedback', 'A profile can keep running after its last window closes, and Go to window brings it back', 'Engines: a default engine, automatic downloads and version notes', 'How long the Trash keeps profiles is a setting'],
        fixed: ['Lists that fail to load, or that the role may not see, say so instead of showing as empty', 'Row actions and proxy addresses no longer wrap in narrow windows'] },
      { version: 'Next', date: 'Coming soon', area: 'site',
        added: ['Pages of their own for features, solutions, pricing, downloads, help and contact', 'A help center with guides, a search and feedback on each guide'],
        improved: ['New sign-in, sign-up and password reset pages, the reset in three steps', 'The contact form asks what it is about and gives a reference number'],
        fixed: ['The Company plan on the pricing page now says “members given access by group”'] },
      { version: '0.1', date: 'October 2026', area: 'desktop',
        added: ['Chromium and Firefox engines, each browser profile with its own fingerprint', 'Proxies and connection checks', 'Sign-ins encrypted and synced to the cloud', 'Flows, scheduled tasks and window sync', 'An extension library and the local API'], improved: [], fixed: [] },
      { version: '0.1', date: 'October 2026', area: 'site',
        added: ['Sign-up, sign-in and email verification', 'Plans, checkout and invoices', 'The account page and team invitations'], improved: [], fixed: [] }
    ] as { version: string; date: string; area: 'desktop' | 'site'; added: string[]; improved: string[]; fixed: string[] }[],
    subscribe: { title: 'Get release news', body: 'Leave your email to hear about new releases and features.', placeholder: 'Your email address', soon: 'Coming soon' }
  },

  docs: {
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
    }
  },

  legal: {
    tbc: 'To be confirmed',
    privacy: {
      title: 'Privacy policy',
      draft: 'Draft. This page describes how Folio handles data today; items marked “To be confirmed” are not settled yet. The final text will be published after review.',
      toc: 'Contents',
      sections: [
        { id: 'collect', title: 'Information we collect', lead: 'The kinds of information Folio handles when you use it.',
          table: { head: ['Category', 'What it includes', 'How it is kept'],
          rows: [
            ['Account', 'Your email address, password, interface language and whether the address is verified.', 'Only a one-way hash of the password is kept.'],
            ['Signed-in devices', 'The kind of client, the device name and when it was last used.', 'Only a digest of the sign-in token is kept; signing out ends it.'],
            ['Workspace and plan', 'The workspace’s name, its members and roles, group access, the plan and payments.', 'Payments keep only the card brand and last four digits.'],
            ['Profiles and proxies', 'Profile names, fingerprint settings, tags and notes; proxy addresses, credentials and check results (exit IP and location); for profiles synced to the cloud, their sign-in state (cookies, local storage and the like).', 'Proxy passwords and sign-in state are encrypted before they are stored.'],
            ['Activity log', 'What members did in the workspace, and on which device.', 'Kept according to the plan: 7 days on Free, 30 days on Studio, 1 year on Company.'],
            ['Website cookie', 'The session cookie that keeps you signed in to the website.', 'With “Remember me” it lasts 30 days; otherwise it ends when the browser closes.'],
            ['Contact and feedback', 'The name, email address, team size and message sent through the contact form; whether a help article helped.', 'Article feedback is not linked to an account.']
          ] as string[][] } },
        { id: 'use', title: 'How we use it', lead: 'What the information above is used for. It is not used for advertising.',
          table: { head: ['Category', 'Purpose'],
          rows: [
            ['Account', 'Signing up and in, verifying the email address, resetting the password, and sending codes and workspace invitations.'],
            ['Signed-in devices', 'Showing which computer a profile is in use on, and running scheduled tasks on the computer they belong to.'],
            ['Workspace and plan', 'Limiting access by role and group, counting what the plan includes, issuing invoices and handling refunds.'],
            ['Profiles and proxies', 'Opening profiles on your computer as they are set up, syncing sign-in state between members, and checking proxy connections.'],
            ['Activity log', 'Letting members with the permission see what happened and look into problems.'],
            ['Contact and feedback', 'Answering your enquiry and improving the help articles.']
          ] as string[][] } },
        { id: 'store', title: 'Storage and protection', lead: 'Where and how the information is kept.',
          items: [
            ['Where it is stored', null],
            ['Protection', 'Passwords are kept only as hashes; proxy passwords and browser sign-in state are encrypted with AES-256-GCM before they are stored; exported files are encrypted with a passphrase you choose, which the server never keeps.'],
            ['How long it is kept', 'The activity log follows the plan; profiles moved to the Trash are deleted for good after the set number of days (30 by default); how long other information is kept is to be confirmed.']
          ] as [string, string | null, string?][] },
        { id: 'share', title: 'Sharing', lead: 'Whether information is passed on to anyone else.',
          items: [
            ['Selling data', 'We do not sell user data.'],
            ['Within your workspace', 'Profiles and proxies you create in a workspace can be seen and used by its members who have the permission.'],
            ['Email, storage and payment providers', null],
            ['Disclosure required by law', null]
          ] as [string, string | null, string?][] },
        { id: 'rights', title: 'Your rights', lead: 'How you can see, correct, export and delete your information.',
          items: [
            ['See', 'Your email address, workspaces and payments are on the account page; members with the permission can see the activity log in the app.'],
            ['Correct', 'Profiles, proxies and workspace details can be changed in the app; a forgotten password can be reset by email.'],
            ['Export', 'Members with the export permission can export the workspace’s profiles as an encrypted file.'],
            ['Delete', 'Profiles and proxies can be deleted at any time. To close your account, write to us through the contact page; how long that takes is to be confirmed.']
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
      draft: ['Draft. The final terms will be published after review.', 'This page follows Folio’s current product rules; items marked “To be confirmed” are not settled yet.'],
      sections: [
        { title: 'The service', body: ['Folio is a service for managing browser profiles: the Windows and macOS app, profile and proxy management, sign-in state synced to the cloud, team collaboration and the local API.', 'What each plan includes is set out on the pricing page.'] },
        { title: 'Your account', body: ['Sign up with a valid email address of your own and verify it. Keep your password safe: the account holder is responsible for what is done with the account.', 'Workspace owners decide members’ roles and what they can reach. If something looks wrong with your account, reset your password and contact us.'] },
        { title: 'Acceptable use', body: ['When you use Folio to visit other websites and platforms, follow the applicable laws and those platforms’ rules.', 'Do not use Folio for anything unlawful, to infringe the rights of others, or to disrupt the service.'] },
        { title: 'Plans and fees', body: ['Free costs nothing. Paid plans are billed monthly or yearly and renew until cancelled; once cancelled, the plan stops renewing at the end of the current period.', 'Each workspace can try Studio free for 7 days. The most recent payment can be refunded within 7 days of payment, and the plan goes back to what it was before that payment.', 'Prices are those on the pricing page and exclude local taxes.'] },
        { title: 'Changes and termination', body: ['We may change the product or these terms; how significant changes are announced, and when they take effect, is to be confirmed.', 'You can stop using Folio and cancel your subscription at any time. The rules for suspending or ending the service after a breach of these terms are to be confirmed.'] },
        { title: 'Liability and disputes', body: ['Limits of liability, the governing law and how disputes are resolved are to be confirmed.'] }
      ],
      note: 'Draft section; the final wording is subject to review.',
      effective: 'Effective date', effectiveBody: 'The effective date will be set when the final terms are published.'
    }
  },

  notFound: {
    title: 'Page not found', lead: 'The page may have moved, or the link may be wrong.',
    home: 'Back to home', help: 'Visit the help center', more: 'Popular pages', links: ['Features', 'Download the app', 'Contact us']
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
