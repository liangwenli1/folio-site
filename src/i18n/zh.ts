import type { en } from './en';

// 中文文案。结构必须和 en.ts 完全一致。
export const zh: typeof en = {
  langName: '中文',
  meta: {
    title: 'Folio 指纹浏览器',
    description: '一台电脑运营几十家店铺、广告户和社媒号，账号之间互不牵连。每个账号一个独立的浏览器环境、指纹和代理。'
  },
  nav: { who: '适合谁', inside: '环境里有什么', teams: '团队', automation: '自动化', pricing: '价格', faq: '常见问题', login: '登录', start: '免费试用', account: '账户', menu: '菜单' },
  plans: { free: '体验版', studio: '工作室版', company: '公司版' },
  periods: { monthly: '月付', yearly: '年付' },

  hero: {
    eyebrow: '指纹浏览器 · 给多店铺、多广告户、多社媒号的团队',
    h1a: '一个号出事，', h1b: '别的号', h1em: '照常开张。',
    lead: 'Folio 给每个账号开一个独立的浏览器环境。指纹、Cookie、代理 IP 各用各的，在平台眼里，它们来自一百台不同的电脑。',
    ctaStart: '免费开 5 个环境', ctaDownload: '下载客户端',
    fine: '支持 Windows 10 及以上、macOS 12 及以上 · 不用绑卡',
    reroll: '再开一个环境',
    rerollHint: '每点一次换一套完整指纹，时区和语言跟着出口 IP 走。',
    card: { title: 'FOLIO · 浏览器环境', exitIp: '出口 IP', tz: '时区', lang: '语言', os: '系统', engine: '内核', screen: '分辨率', gpu: 'WebGL 显卡', canvas: 'Canvas 指纹', fonts: '字体', fontsUnit: '款', stamp: 'ISOLATED' },
    spec: [
      ['Chromium 150 · Firefox 156', '两种内核，按环境选择'],
      ['Canvas、WebGL、音频、字体', '每个环境各不相同'],
      ['HTTP · HTTPS · SOCKS5', '代理，使用前先检测'],
      ['CDP', '本地 API，接你的脚本']
    ],
    cities: [
      { city: '西雅图', region: '美国 · 华盛顿州' }, { city: '伦敦', region: '英国 · 英格兰' },
      { city: '东京', region: '日本 · 东京都' }, { city: '法兰克福', region: '德国 · 黑森州' },
      { city: '圣保罗', region: '巴西 · 圣保罗州' }, { city: '多伦多', region: '加拿大 · 安大略省' },
      { city: '新加坡', region: '新加坡' }, { city: '悉尼', region: '澳大利亚 · 新南威尔士州' },
      { city: '首尔', region: '韩国 · 首尔' }, { city: '迈阿密', region: '美国 · 佛罗里达州' }
    ]
  },

  who: {
    eyebrow: '适合谁',
    title: '多账号的生意，最怕连坐',
    lead: '平台判断两个账号是不是同一个人，看的不只是 IP。浏览器会交出几十项设备信息，任何一项重合，都可能把你的账号串到一起。',
    items: [
      { tag: '跨境店铺', title: '十家店，一家被查，另外九家照常卖。', body: '每家店固定一个环境、一条代理线路。登录地点和设备长期不变，平台看到的是一位稳定的老卖家。', fit: '适合：同时经营 5 家以上店铺的卖家团队' },
      { tag: '广告代投', title: '客户的广告户，一个客户一组环境。', body: '同事交接时，把整组环境转过去，对方打开就是登录状态，不用再找客户要验证码。', fit: '适合：同时服务多个客户的投放代理商' },
      { tag: '社媒矩阵', title: '五十个号的日常，一个人照看得过来。', body: '窗口同步让一次操作在多个窗口同时执行，定时任务接走每天重复的登录和巡检。', fit: '适合：一人维护几十个账号的内容团队' }
    ]
  },

  inside: {
    eyebrow: '环境里有什么',
    title: '平台会查的信号，每个环境单独处理',
    groups: [
      ['设备', ['User-Agent', '客户端提示', 'CPU 核心数', '设备内存', '触控支持']],
      ['渲染', ['Canvas', 'WebGL 图像', 'WebGL 显卡信息', 'AudioContext', '字体列表']],
      ['网络', ['代理 IP', 'WebRTC', 'DNS']],
      ['地区', ['时区', '语言', '地理位置']],
      ['存储', ['Cookie', 'LocalStorage', 'IndexedDB', '缓存', '扩展程序']]
    ],
    note: '指纹按真实设备组合生成，系统、显卡和字体互相匹配。你不会在 Folio 里看到一台装着 NVIDIA 独显的 MacBook。',
    compareTitle: '同一条西雅图代理，两种开法',
    compareHint: '左边每一个叉，都是平台把账号串到一起的线索。',
    cols: ['检查项', '普通浏览器挂代理', 'Folio 环境'],
    rows: [
      ['出口 IP', '西雅图', '西雅图', false],
      ['时区', 'Asia/Shanghai', 'America/Los_Angeles', true],
      ['浏览器语言', 'zh-CN', 'en-US', true],
      ['WebRTC', '暴露本机真实 IP', '不会暴露真实 IP', true],
      ['地理位置', '读到你的真实位置', '西雅图附近', true],
      ['Canvas 指纹', '和你其他账号一模一样', '这个环境独有', true],
      ['Cookie', '所有账号混在一起', '每个环境单独保存', true]
    ],
    leak: '有破绽', match: '一致'
  },

  team: {
    eyebrow: '团队',
    title: '员工离职，账号留在公司',
    lead: '账号是公司的资产，别让它跟着某个人的电脑走。',
    points: [
      ['按人分配环境', '运营只看得到自己负责的店铺，投放只看得到自己的广告户。'],
      ['能用，看不到密码', '成员打开环境就是登录状态，账号密码不经过他的手。'],
      ['离职当天收回', '移除成员，他名下的环境立刻转给你指定的人，不用连夜改密码。'],
      ['谁动过什么，都有记录', '哪位成员几点打开了哪个环境、改了哪项设置，一页查完。']
    ],
    panelTitle: '美区运营组', panelMeta: '3 名在职 · 46 个环境', active: '在职', left: '已离职',
    members: [
      ['林', '林晓', '店铺与社媒 · 24 个环境', false],
      ['周', '周航', '广告投放 · 12 个环境', false],
      ['许', '许诺', '欧洲店铺 · 10 个环境', false],
      ['陈', '陈一', '店铺运营 · 18 个环境已转交', true]
    ],
    logTitle: '操作记录',
    log: [
      ['10-21 09:12', '林晓 打开了 US-Store-07'],
      ['10-21 08:55', '周航 给 Ads-Client-03 换了代理'],
      ['10-20 18:40', '管理员 移除了陈一，18 个环境转给林晓']
    ],
    example: '示例'
  },

  auto: {
    eyebrow: '自动化',
    title: '重复的活，点一次或者写一次',
    noCode: '不写代码',
    noCodePoints: [
      ['窗口同步', '在一个窗口里点击、输入、滚动，选中的其他窗口一起照做。'],
      ['批量操作', '用表格一次导入几百个环境，批量换代理、批量导入 Cookie。'],
      ['定时任务', '每天固定时间打开指定环境，检查登录状态，掉线了提醒你。']
    ],
    withCode: '写代码',
    withCodeBody: '本地 API 启动任意环境并返回调试地址，你熟悉的自动化框架直接接管，脚本不用改写。',
    libs: ['Playwright', 'Puppeteer', 'Selenium', '任何支持 CDP 的工具'],
    codeComment: '// 启动 Folio 里编号 0042 的环境'
  },

  trust: {
    eyebrow: '先试再买',
    title: '别急着信我们，先自己测',
    items: [
      ['5 个环境，永久免费', '不绑卡，不限时间。够你把一家店从登录到上架完整跑一遍。'],
      ['检测网站，你自己挑', '在环境里打开你信任的任何指纹检测网站，结果自己看。'],
      ['7 天内，不满意就退', '付费后 7 天内申请，全额退款，不问原因。'],
      ['数据随时整份带走', '环境配置和 Cookie 一键导出。哪天不用了，账号也不会被锁在这里。']
    ]
  },

  pricing: {
    eyebrow: '价格',
    title: '按环境数收费，加人不加钱',
    monthly: '月付', yearly: '年付', save: '省 20%',
    perMonth: '/ 月', forever: '永久免费',
    perProfile: (amount: string) => `折合每个环境 ${amount}/月`,
    billedMonthly: '按月付，随时取消',
    billedYearly: (total: string) => `按年付，共 ${total}`,
    noCard: '不用绑卡',
    profilesMembers: (p: number, m: string) => `${p} 个环境 · ${m}`,
    oneMember: '1 名成员', unlimitedMembers: '成员不限',
    flag: '适合 3–20 人团队',
    for: { free: '先看看适不适合你', studio: '一个团队的日常运营', company: '多团队、多业务线' },
    cta: { free: '免费开始', studio: '免费试用 7 天', company: '联系销售' },
    features: {
      free: ['两种内核，完整的指纹设置', '代理检测，时区、语言自动匹配', '本地 API', '文档与社区支持'],
      studio: ['成员不限', '窗口同步与批量操作', '团队权限与环境转交', '操作记录保留 30 天', '工作日在线客服'],
      company: ['工作室版的全部功能', '环境按部门分组管理', '操作记录保留 1 年，可导出', '专属客服群，每天 12 小时', 'API 调用不限速']
    },
    buy: '立即购买',
    foot: (pack: string) => `环境不够用？每加 100 个 ${pack}/月。需要 2000 个以上环境，我们单独报价。价格不含当地税费，每笔付款都有发票。`
  },

  faq: {
    eyebrow: '常见问题', title: '买之前，大家常问这些', lead: '没找到你的问题？', contact: '直接问我们',
    items: [
      ['用了 Folio，账号就不会被封了吗？', '不能保证。Folio 解决的是多个账号被认成同一台设备的问题。账号本身违反平台规则，或者代理 IP 已经被很多人用过，照样会出问题。我们建议一个环境配一条独立的住宅代理或 ISP 代理。'],
      ['代理要自己准备吗？', '要。Folio 支持 HTTP、HTTPS 和 SOCKS5 代理，可以逐个填写，也可以用表格批量导入。添加时会自动检测连通性和出口位置，并据此设置时区和语言。'],
      ['Chromium 和 Firefox 内核选哪个？', '大多数账号选 Chromium，每个 Chromium 环境都有自己稳定的指纹。Firefox 环境适合需要 Firefox 用户身份的网站；同一台电脑上的 Firefox 环境之间，指纹重合的部分更多，同一平台的多个账号不要都放在 Firefox 环境里。'],
      ['环境数据存在哪里？', '默认加密后同步到云端，换一台电脑登录就能接着用；也可以把某个环境设成只存本机。任何时候都能把全部数据整份导出。'],
      ['内核怎么更新？', 'Folio 使用开源的指纹内核，每个新版本经过我们测试后才推送。已有环境保持原来的内核版本，什么时候升级由你决定。']
    ]
  },

  band: {
    title: '先开 5 个环境，用一周再说',
    body: '注册账号、下载客户端，几分钟就能配好第一个环境。',
    windows: '下载 Windows 版', mac: '下载 macOS 版',
    fine: '测试版 · Chromium 150 与 Firefox 156 内核'
  },

  footer: { docs: '使用文档', api: 'API 参考', changelog: '更新日志', privacy: '隐私政策', terms: '服务条款', sales: '联系销售', rights: '© 2026 Folio' },

  auth: {
    signupTitle: '创建 Folio 账号', signupLead: '5 个环境永久免费，不用绑卡。',
    loginTitle: '登录 Folio', email: '邮箱', password: '密码', passwordHint: '至少 8 位',
    signup: '创建账号', login: '登录', haveAccount: '已经有账号了？', noAccount: '第一次用 Folio？',
    forgot: '忘记密码？',
    verifyTitle: '查收邮件', verifyLead: (email: string) => `我们向 ${email} 发送了 6 位验证码，15 分钟内有效。`,
    code: '验证码', verify: '验证邮箱', resend: '重新发送', resent: '新的验证码已发送。',
    verified: '邮箱已验证。',
    forgotTitle: '重设密码', forgotLead: '填写账号邮箱，我们会发送验证码。',
    sendCode: '发送验证码', resetTitle: '设置新密码', newPassword: '新密码', reset: '保存新密码',
    resetDone: '密码已更新，请用新密码登录。',
    devNotice: '开发版本：邮件发到本机的测试收件箱 http://127.0.0.1:47125。',
    logout: '退出登录'
  },

  checkout: {
    title: '选择套餐', workspace: '团队', plan: '套餐', billing: '付费周期',
    packs: '加量包', packsHint: '每包 100 个环境', total: '今天应付',
    current: (plan: string) => `当前套餐：${plan}`,
    currentTrial: (plan: string) => `当前套餐：${plan}（免费试用中）`,
    lines: {
      plan: (plan: string, period: string) => `${plan}，${period}`,
      addon: (qty: number, prorated: boolean) => `加量包 × ${qty}（每包 100 个环境）${prorated ? '，按本周期剩余天数折算' : ''}`,
      credit: (plan: string) => `抵扣：${plan}未用完的时间`
    },
    change: {
      new: '今天开始生效。', upgrade: '今天开始生效，当前套餐未用完的时间会折算抵扣。', addon: '立即生效。',
      'reduce-addon': '立即生效。超出新上限的环境需要归档；本周期费用不退。',
      downgrade: '当前周期结束后生效，现在不用付款。'
    },
    card: '银行卡', cardNumber: '卡号', expiry: '有效期（MM/YY）', cvc: '安全码', name: '持卡人姓名',
    pay: (amount: string) => `支付 ${amount}`, confirm: '确认变更',
    trial: '或者先免费试用工作室版 7 天', trialCta: '开始免费试用',
    mockTitle: '测试付款', mockBody: '目前不会真的扣款。卡号用 4242 4242 4242 4242，有效期填任意未来日期。4000 0000 0000 0002 会被拒绝。',
    success: '付款成功，套餐已生效。', applied: '变更已保存。', trialStarted: '试用已开始，工作室版可以用 7 天。',
    toAccount: '前往账户页', noManage: '只有所有者和管理员可以修改这个团队的套餐。'
  },

  account: {
    title: '账户', profile: '个人信息', language: '语言', emailStatus: '验证状态',
    verified: '已验证', unverified: '未验证', verifyNow: '立即验证',
    workspaces: '团队', newWorkspace: '新建团队', create: '创建', rename: '重命名', save: '保存', cancel: '取消',
    roles: { owner: '所有者', admin: '管理员', member: '成员' },
    plan: '套餐', usage: (used: number, limit: number) => `已用 ${used} / ${limit} 个环境`,
    unlimited: '成员不限',
    renews: (date: string) => `${date} 自动续费`, ends: (date: string) => `${date} 到期`,
    trialEnds: (date: string) => `试用 ${date} 结束`,
    scheduled: (plan: string, date: string) => `${date} 起改为${plan}`,
    changePlan: '更换套餐', addProfiles: '增加环境', startTrial: '免费试用工作室版 7 天',
    cancelPlan: '到期后取消', resume: '保留套餐',
    cancelConfirm: '确定取消套餐吗？当前周期结束前仍可正常使用。', confirmCancel: '确定取消',
    payments: '付款与发票', noPayments: '还没有付款记录。',
    cols: ['日期', '发票', '金额', '状态', ''],
    paid: '已付款', refunded: '已退款', invoice: '发票', refund: '退款',
    refundConfirm: '确定退款吗？套餐会恢复到这笔付款之前的状态。', confirmRefund: '确定退款',
    download: '下载客户端', downloadBody: '用同一个账号登录桌面客户端，套餐和团队都已经在那里了。',
    downloadCta: '下载',
    invitations: '邀请', invitedBy: (inviter: string, role: string) => `${inviter} 邀请你成为${role}`, accept: '加入', decline: '拒绝'
  },
  invite: {
    title: '团队邀请', checking: '正在查看邀请…',
    missing: '这个链接里没有邀请信息，请重新打开邮件里的链接。',
    gone: '这个邀请已经失效：已被接受、撤回，或者被更新的邀请替换了。',
    lead: (inviter: string, workspace: string, role: string) => `${inviter} 邀请你以${role}身份加入 Folio 上的团队「${workspace}」。`,
    roles: { admin: '管理员', member: '成员' }, forEmail: (email: string) => `邀请邮箱：${email}`,
    expired: '这个邀请已过期，请让对方重新邀请。',
    login: '登录后接受', signup: '注册账号',
    wrong: (invited: string, current: string) => `这个邀请是发给 ${invited} 的，但你当前登录的是 ${current}。`, switch: '退出登录，换另一个账号',
    verify: '请先验证邮箱，验证后会回到这里。', verifyCta: '去验证邮箱',
    accept: (workspace: string) => `加入「${workspace}」`, decline: '拒绝',
    joined: (workspace: string) => `你已加入「${workspace}」。`,
    joinedLead: '用这个账号登录 Folio 工作台，就能在团队菜单里看到它。',
    download: '下载工作台', account: '前往账户', declined: '你已拒绝这个邀请。'
  },

  invoice: {
    title: '发票', number: '发票编号', date: '日期', billedTo: '付款人', workspace: '团队',
    period: '服务周期', item: '项目', amount: '金额', total: '合计', paidWith: (brand: string, last4: string) => `已用 ${brand} 尾号 ${last4} 支付`,
    refunded: (date: string) => `已于 ${date} 退款`, print: '打印或存为 PDF', back: '返回账户页',
    seller: 'Folio', sellerNote: '测试发票，未发生真实付款。'
  },

  sales: {
    title: '联系销售', lead: '需要 500 个以上环境、多个部门，或者有定制需求？简单说说情况，我们一个工作日内回复。',
    name: '姓名', email: '工作邮箱', company: '公司', teamSize: '团队人数', message: '你的需求',
    send: '发送', sent: '已收到，我们会在一个工作日内联系你。'
  },

  download: {
    title: '下载 Folio', lead: '桌面客户端正在内测，开放后会在这里提供 Windows 和 macOS 安装包。',
    windows: 'Windows 10 及以上', mac: 'macOS 12 及以上', soon: '即将推出',
    already: '已经有账号？登录客户端后，套餐会自动带过去。'
  },

  docs: {
    title: '使用文档', lead: '环境、代理和团队的设置指南会随客户端开放陆续上线。',
    apiTitle: 'API 参考', apiLead: 'Folio 的本地 API 让你的脚本可以启动一个环境，并通过 Chrome DevTools 协议接管它。完整参考会随自动化功能一起发布。',
    changelogTitle: '更新日志',
    changelog: [['0.1 · 2026 年 10 月', '账号、团队、套餐，以及桌面工作台的第一个版本。']]
  },

  legal: {
    privacyTitle: '隐私政策', termsTitle: '服务条款',
    draft: '草稿。正式文本正在准备，上线前会替换本页内容。',
    privacyBody: [
      '我们收集你注册时填写的邮箱和密码、你创建的团队，以及你选择的套餐。',
      '你选择同步的浏览器环境数据会先加密再存储。',
      '我们不出售你的数据。'
    ],
    termsBody: [
      'Folio 是管理多个浏览器环境的工具。使用它时，你需要自行遵守相关平台的规则。',
      '付费套餐会自动续费，直到你取消。最近一笔付款可以在 7 天内申请退款。'
    ]
  },

  errors: {
    email_taken: '这个邮箱已经注册过了，请直接登录。',
    invalid_credentials: '邮箱或密码不对。',
    unauthenticated: '请先登录。',
    code_invalid: '验证码不对，请检查邮件后重试。',
    code_expired: '验证码已过期，请重新获取。',
    too_many_attempts: '错误次数太多，请重新获取验证码。',
    already_verified: '这个邮箱已经验证过了。',
    email_not_verified: '修改套餐前请先验证邮箱。',
    card_invalid: '请检查卡号和安全码。',
    card_expired: '这张卡已过期。',
    card_declined: '这张卡被拒绝了，请换一张卡。',
    insufficient_funds: '卡内余额不足。',
    checkout_expired: '支付页面已过期，请重新开始。',
    checkout_closed: '这次支付已经结束，请重新开始。',
    quote_stale: '你的套餐在这期间有变化，请确认新的金额后重试。',
    no_change: '这已经是你当前的套餐。',
    change_packs_separately: '加量包和套餐请分两步修改。',
    profile_cap: '套餐最多支持 2000 个环境，更多请联系销售。',
    trial_used: '这个团队已经用过免费试用了。',
    already_subscribed: '这个团队已经有套餐了。',
    not_subscribed: '这个团队没有付费套餐。',
    refund_window_passed: '付款 7 天内才能申请退款。',
    refund_latest_only: '只能退最近的一笔付款。',
    already_refunded: '这笔付款已经退过款了。',
    payments_unavailable: '暂时无法付款。',
    rate_limited: '操作太频繁，请等一分钟再试。',
    forbidden: '你没有权限访问这里。',
    not_found: '没有找到相关内容。',
    validation: '有些内容没填或格式不对。',
    network: '暂时连不上 Folio，请检查网络后重试。',
    wrong_account: '这个邀请是发给另一个邮箱的。',
    email_unverified: '请先验证邮箱。',
    invitation_expired: '这个邀请已过期，请让对方重新邀请。',
    seat_limit: '这个团队没有空余席位了，请让所有者升级套餐。',
    mail_unavailable: '邮件没能发出，请稍后再试。',
    internal: '我们这边出了点问题，请重试。'
  }
};
