import type { en } from './en';

// 中文文案。结构必须和 en.ts 完全一致。
// 调子：平实稳妥，不做绝对承诺；采用「支持……，减少／提升……」的功能加价值句式；正文统一称「浏览器环境」，
// 计数、表头等紧凑处可简称「环境」；尽量不用人称，必须称呼时用「您」。
export const zh: typeof en = {
  langName: '简体中文',
  meta: {
    title: 'Folio 指纹浏览器',
    description: '面向多店铺、多广告账户与多社媒账号团队的指纹浏览器，为每个账号提供独立的浏览器环境，支持差异化指纹配置、Cookie 隔离与独立代理 IP。'
  },
  nav: { who: '适用场景', inside: '环境隔离', teams: '团队协作', automation: '自动化', pricing: '价格', faq: '常见问题', login: '登录', start: '免费体验', account: '账户', menu: '菜单' },
  plans: { free: '体验版', studio: '工作室版', company: '公司版' },
  periods: { monthly: '月付', yearly: '年付' },

  hero: {
    eyebrow: '面向多账号运营团队的指纹浏览器',
    h1: '账号环境相互隔离。',
    lead: 'Folio 为每个账号提供独立的浏览器环境，支持差异化指纹配置、Cookie 隔离与独立代理 IP，满足多账号独立运行与集中管理需求。',
    ctaStart: '免费体验 5 个浏览器环境', ctaDownload: '下载客户端',
    fine: 'Windows 10 及以上 · macOS 12 及以上 · 无需绑定银行卡',
    showcase: { label: '工作台操作演示：检查代理、打开浏览器环境、恢复标签页、体检、安装扩展、批量打开、窗口同步与团队协作。', pause: '暂停演示', play: '播放演示' },
    sample: { name: 'UK-Shop-01', place: '伦敦 · Firefox 156', status: '运行中' },
    spec: [
      ['Chromium 150 · Firefox 156', '双内核，按浏览器环境选择'],
      ['Canvas、WebGL、音频、字体', '按浏览器环境独立生成'],
      ['HTTP · HTTPS · SOCKS5', '使用前自动检测连通性'],
      ['CDP · WebDriver BiDi', '本地 API，对接自动化脚本']
    ]
  },

  who: {
    eyebrow: '适用场景',
    title: '账号关联是多账号运营的主要风险',
    lead: '平台识别账号关联时，除 IP 外还会参考浏览器暴露的多项设备信息。为每个账号配置独立的浏览器环境，可减少设备信息重合。',
    items: [
      { tag: '跨境店铺', title: '支持多店铺独立运营，降低单店异常对其他店铺的影响。', body: '为每家店铺分配固定的浏览器环境与代理线路，保持登录地点与设备信息稳定。', fit: '适用于：同时经营多家店铺的卖家团队' },
      { tag: '广告代投', title: '按客户划分浏览器环境，广告账户相互独立。', body: '支持团队成员间的浏览器环境交接，保留登录状态与环境配置，减少重复登录与验证，提升交接效率。', fit: '适用于：同时服务多个客户的投放代理商' },
      { tag: '社媒矩阵', title: '支持批量维护多个社媒账号，提升日常运营效率。', body: '支持将单次操作同步至多个窗口，并通过定时任务自动完成日常登录与巡检。', fit: '适用于：管理大量账号的内容运营团队' }
    ]
  },

  inside: {
    eyebrow: '环境隔离',
    title: '按检测项独立配置浏览器指纹',
    groups: [
      ['设备', ['User-Agent', '客户端提示', 'CPU 核心数', '设备内存', '触控支持']],
      ['渲染', ['Canvas', 'WebGL 图像', 'WebGL 显卡信息', 'AudioContext', '字体列表']],
      ['网络', ['代理 IP', 'WebRTC', 'DNS']],
      ['地区', ['时区', '语言', '地理位置']],
      ['存储', ['Cookie', 'LocalStorage', 'IndexedDB', '缓存', '扩展程序']]
    ],
    note: '指纹基于真实设备参数组合生成，系统、显卡与字体相互匹配，避免出现不合理的配置组合。',
    compareTitle: '同一代理下，普通浏览器与 Folio 浏览器环境的对比',
    compareHint: '左列中的不一致项，可能被平台用于识别账号关联。',
    cols: ['检测项', '普通浏览器 + 代理', 'Folio 浏览器环境'],
    rows: [
      ['出口 IP', '西雅图', '西雅图', false],
      ['时区', 'Asia/Shanghai', 'America/Los_Angeles', true],
      ['浏览器语言', 'zh-CN', 'en-US', true],
      ['WebRTC', '暴露本机真实 IP', '不暴露真实 IP', true],
      ['地理位置', '返回真实位置', '西雅图附近', true],
      ['Canvas 指纹', '与其他账号相同', '本浏览器环境独有', true],
      ['Cookie', '所有账号共用', '按浏览器环境独立保存', true]
    ],
    leak: '不一致', match: '一致'
  },

  team: {
    eyebrow: '团队协作',
    title: '浏览器环境由团队统一管理',
    lead: '账号与浏览器环境归属团队，不依附于个人设备。',
    points: [
      ['按人分配', '成员仅可访问分配给本人的浏览器环境。'],
      ['免密使用', '成员可直接使用已保存的登录状态，无需获取账号密码。'],
      ['离职即时转交', '移除成员后，其名下浏览器环境可即时转交指定人员。'],
      ['操作记录可追溯', '支持记录浏览器环境的打开、修改与转交操作，便于追溯。']
    ],
    panelTitle: '美区运营组', panelMeta: '3 名在职 · 46 个环境', active: '在职', left: '已离职',
    members: [
      ['林', '林晓', '店铺与社媒 · 24 个环境', false],
      ['周', '周航', '广告投放 · 12 个环境', false],
      ['许', '许诺', '欧洲店铺 · 10 个环境', false],
      ['陈', '陈一', '店铺运营 · 18 个环境已转交', true]
    ],
    logTitle: '操作日志',
    log: [
      ['10-21 09:12', '林晓 打开了 US-Store-07'],
      ['10-21 08:55', '周航 更换了 Ads-Client-03 的代理'],
      ['10-20 18:40', '管理员 移除了陈一，18 个环境已转交林晓']
    ],
    example: '示例'
  },

  auto: {
    eyebrow: '自动化',
    title: '支持批量操作与自动化，减少重复工作',
    noCode: '无需编程',
    noCodePoints: [
      ['窗口同步', '支持将主控窗口的点击、输入与滚动操作同步至多个窗口。'],
      ['批量操作', '支持通过表格批量导入浏览器环境，批量更换代理与导入 Cookie。'],
      ['定时任务', '支持按计划打开浏览器环境并检查登录状态，异常时及时提醒。']
    ],
    withCode: '编程接入',
    withCodeBody: '提供本地 API，可启动浏览器环境并返回调试地址，支持 Playwright、Puppeteer、Selenium 等工具接入。',
    libs: ['Playwright', 'Puppeteer', 'Selenium', 'CDP · WebDriver BiDi']
  },

  trust: {
    eyebrow: '免费体验',
    title: '先行体验，按需选购',
    items: [
      ['5 个浏览器环境永久免费', '无需绑定银行卡，不限使用期限，可用于完整业务流程验证。'],
      ['支持自行检测', '支持在浏览器环境中访问指纹检测网站，验证环境配置与隔离效果。'],
      ['7 天无理由退款', '付款后 7 天内可申请全额退款。'],
      ['数据随时导出', '支持随时导出浏览器环境配置与 Cookie。']
    ]
  },

  pricing: {
    eyebrow: '价格',
    title: '按浏览器环境数量计费，成员数量不限',
    monthly: '月付', yearly: '年付', save: '省 20%',
    perMonth: '/ 月', forever: '永久免费',
    perProfile: (amount: string) => `折合每个环境 ${amount}/月`,
    billedMonthly: '按月付费，随时取消',
    billedYearly: (total: string) => `按年付费，共 ${total}`,
    noCard: '无需绑定银行卡',
    profilesMembers: (p: number, m: string) => `${p} 个环境 · ${m}`,
    oneMember: '1 名成员', unlimitedMembers: '成员不限',
    flag: '适合 3–20 人团队',
    for: { free: '体验核心功能', studio: '单个团队的日常运营', company: '多团队、多业务线' },
    cta: { free: '免费体验', studio: '免费体验 7 天', company: '联系销售' },
    features: {
      free: ['Chromium 与 Firefox 双内核，完整指纹配置', '代理检测，自动匹配时区与语言', '本地 API', '文档与社区支持'],
      studio: ['成员数量不限', '窗口同步与批量操作', '团队权限与浏览器环境转交', '操作日志保留 30 天', '工作日在线客服'],
      company: ['包含工作室版全部功能', '浏览器环境按部门分组管理', '操作日志保留 1 年，支持导出', '专属客服群，每日 12 小时', 'API 调用不限速']
    },
    buy: '立即购买', soon: '即将开放',
    calc: {
      title: '选择浏览器环境数量', hint: '调整滑块，查看对应配置与价格。',
      best: '推荐方案', cheapest: '费用最低',
      profiles: (n: number) => `${n} 个环境`,
      withPacks: (plan: string, packs: number) => `${plan} + ${packs} 个加量包`,
      fit: (n: number, pick: string) => `${n} 个环境：${pick}`,
      company: (amount: string) => `同等数量下公司版为 ${amount}/月，另含部门管理、操作日志保留 1 年与 API 不限速。`,
      custom: (max: number) => `超过 ${max} 个环境`, customBody: '支持根据团队规模单独报价。',
      buy: '按此方案购买'
    },
    foot: (pack: string) => `如需更多浏览器环境，每增加 100 个 ${pack}/月；超过 2000 个可单独报价。价格不含当地税费，每笔付款均提供发票。`
  },

  faq: {
    eyebrow: '常见问题', title: '常见问题', lead: '其他问题，请', contact: '联系我们',
    items: [
      ['使用 Folio 能否保证账号不被封禁？', '不能保证。Folio 用于降低多个账号被识别为同一设备的风险；如账号存在违规操作，或代理 IP 质量不佳，仍可能受到平台限制。建议为每个浏览器环境配置独立的住宅代理或 ISP 代理。'],
      ['是否需要自备代理？', '需要。支持 HTTP、HTTPS 与 SOCKS5 代理，可逐条添加或批量导入，添加时自动检测连通性与出口位置，并据此匹配时区与语言。'],
      ['Chromium 与 Firefox 内核如何选择？', '多数账号建议使用 Chromium 内核，每个 Chromium 浏览器环境具备独立且稳定的指纹。Firefox 内核适用于需要 Firefox 用户特征的网站；同一台电脑上的 Firefox 浏览器环境之间指纹重合度较高，同一平台的多个账号不建议全部使用 Firefox 内核。'],
      ['浏览器环境数据存储在哪里？', '默认加密后同步至云端，更换电脑登录即可继续使用；也支持将指定浏览器环境设为仅保存在本机。全部数据支持随时完整导出。'],
      ['内核如何更新？', 'Folio 采用开源指纹内核，新版本经测试后发布。现有浏览器环境保持原内核版本，支持按需升级。']
    ]
  },

  band: {
    title: '免费体验 5 个浏览器环境',
    body: '注册账号并下载客户端，即可开始配置浏览器环境。',
    windows: '下载 Windows 版', mac: '下载 macOS 版',
    fine: '测试版 · Chromium 150 与 Firefox 156 内核'
  },

  footer: { docs: '使用文档', api: 'API 参考', changelog: '更新日志', privacy: '隐私政策', terms: '服务条款', sales: '联系销售', rights: '© 2026 Folio', product: '产品', resources: '资源', company: '公司' },

  auth: {
    signupTitle: '创建 Folio 账号', signupLead: '免费体验 5 个浏览器环境，无需绑定银行卡。',
    loginTitle: '登录 Folio', email: '邮箱', password: '密码', passwordHint: '至少 8 位',
    signup: '创建账号', login: '登录', haveAccount: '已有账号？', noAccount: '还没有账号？',
    forgot: '忘记密码？',
    verifyTitle: '验证邮箱', verifyLead: (email: string) => `验证码已发送至 ${email}，15 分钟内有效。`,
    code: '验证码', verify: '验证', resend: '重新发送', resent: '新的验证码已发送。',
    verified: '邮箱已验证。',
    forgotTitle: '重设密码', forgotLead: '输入账号邮箱，系统将发送验证码。',
    sendCode: '发送验证码', resetTitle: '设置新密码', newPassword: '新密码', reset: '保存',
    resetDone: '密码已更新，请使用新密码登录。',
    devNotice: '开发版本：邮件发送至本机测试收件箱 http://127.0.0.1:47125。',
    logout: '退出登录',
    showPassword: '显示密码',
    points: ['注册后即可下载客户端', '官网与客户端使用同一账号', '支持随时导出数据']
  },

  checkout: {
    title: '选择套餐', workspace: '团队', plan: '套餐', billing: '付费周期',
    packs: '加量包', packsHint: '每包 100 个环境', total: '本次应付',
    steps: ['选择套餐', '付款', '完成'], chosen: '已选', edit: '修改', next: '下一步',
    current: (plan: string) => `当前套餐：${plan}`,
    currentTrial: (plan: string) => `当前套餐：${plan}（体验中）`,
    lines: {
      plan: (plan: string, period: string) => `${plan}，${period}`,
      addon: (qty: number, prorated: boolean) => `加量包 × ${qty}（每包 100 个环境）${prorated ? '，按本周期剩余天数折算' : ''}`,
      credit: (plan: string) => `抵扣：${plan}剩余时长`
    },
    change: {
      new: '即日生效。', upgrade: '即日生效，当前套餐剩余时长将折算抵扣。', addon: '立即生效。',
      'reduce-addon': '立即生效。超出新上限的浏览器环境需归档，本周期费用不予退还。',
      downgrade: '当前周期结束后生效，本次无需付款。'
    },
    card: '银行卡', cardNumber: '卡号', expiry: '有效期（MM/YY）', cvc: '安全码', name: '持卡人姓名',
    pay: (amount: string) => `支付 ${amount}`, confirm: '确认变更',
    soon: '付费套餐即将开放，可先免费体验工作室版，或继续使用体验版。', soonPay: '即将开放',
    trial: '也可免费体验工作室版 7 天', trialCta: '开始体验',
    mockTitle: '测试支付', mockBody: '当前不会实际扣款。卡号请使用 4242 4242 4242 4242，有效期填写任意未来日期；4000 0000 0000 0002 将被拒绝。',
    success: '支付成功，套餐已生效。', applied: '变更已保存。', trialStarted: '体验已开始，可使用工作室版 7 天。',
    toAccount: '前往账户', noManage: '仅所有者和管理员可修改团队套餐。'
  },

  account: {
    title: '账户', profile: '个人信息', language: '语言', emailStatus: '邮箱验证',
    verified: '已验证', unverified: '未验证', verifyNow: '立即验证',
    workspaces: '团队', newWorkspace: '新建团队', create: '创建', rename: '重命名', save: '保存', cancel: '取消', current: '当前',
    roles: { owner: '所有者', admin: '管理员', member: '成员' },
    plan: '套餐', usage: (used: number, limit: number) => `已用 ${used} / ${limit} 个环境`,
    unlimited: '成员不限',
    renews: (date: string) => `${date} 自动续费`, ends: (date: string) => `${date} 到期`,
    trialEnds: (date: string) => `体验于 ${date} 结束`,
    scheduled: (plan: string, date: string) => `${date} 起变更为${plan}`,
    changePlan: '更换套餐', addProfiles: '增加环境', startTrial: '免费体验工作室版 7 天',
    cancelPlan: '到期后取消', resume: '恢复续费',
    cancelConfirm: '确定取消套餐？当前周期结束前仍可正常使用。', confirmCancel: '确定取消',
    payments: '付款与发票', noPayments: '暂无付款记录。',
    cols: ['日期', '发票', '金额', '状态', ''],
    paid: '已付款', refunded: '已退款', invoice: '发票', refund: '退款',
    refundConfirm: '确定退款？套餐将恢复至该笔付款之前的状态。', confirmRefund: '确定退款',
    download: '下载客户端', downloadBody: '使用同一账号登录客户端，套餐与团队信息自动同步。',
    downloadCta: '下载',
    invitations: '邀请', invitedBy: (inviter: string, role: string) => `${inviter} 邀请您成为${role}`, accept: '加入', decline: '拒绝'
  },
  invite: {
    title: '团队邀请', checking: '正在核对邀请…',
    missing: '链接中缺少邀请信息，请重新打开邮件中的链接。',
    gone: '该邀请已失效：已被接受、撤回或被新的邀请替代。',
    lead: (inviter: string, workspace: string, role: string) => `${inviter} 邀请您以${role}身份加入 Folio 团队「${workspace}」。`,
    roles: { admin: '管理员', member: '成员' }, forEmail: (email: string) => `受邀邮箱：${email}`,
    expires: (date: string) => `${date} 过期`,
    expired: '该邀请已过期，请联系邀请人重新发送。',
    login: '登录后接受', signup: '注册账号',
    wrong: (invited: string, current: string) => `该邀请发送至 ${invited}，当前登录账号为 ${current}。`, switch: '退出并切换账号',
    verify: '请先验证邮箱，完成后将返回此页。', verifyCta: '验证邮箱',
    accept: (workspace: string) => `加入「${workspace}」`, decline: '拒绝',
    joined: (workspace: string) => `已加入「${workspace}」。`,
    joinedLead: '使用该账号登录 Folio 客户端，即可在团队菜单中查看该团队。',
    download: '下载客户端', account: '前往账户', declined: '已拒绝该邀请。'
  },

  invoice: {
    title: '发票', number: '发票编号', date: '日期', billedTo: '付款人', workspace: '团队',
    period: '服务周期', item: '项目', amount: '金额', total: '合计', paidWith: (brand: string, last4: string) => `已使用 ${brand} 尾号 ${last4} 支付`,
    refunded: (date: string) => `已于 ${date} 退款`, print: '打印或保存为 PDF', back: '返回账户',
    seller: 'Folio', sellerNote: '测试发票，未发生实际付款。'
  },

  sales: {
    title: '联系销售', lead: '如需 500 个以上浏览器环境、多部门管理或定制方案，请提交需求，销售团队将在一个工作日内回复。',
    points: [
      ['500 个以上浏览器环境', '支持按数量单独报价，超过 2000 个亦可。'],
      ['多部门管理', '支持按部门分组管理浏览器环境，操作日志保留 1 年并支持导出。'],
      ['一个工作日内回复', '工作日由专人对接，支持安排产品演示。']
    ],
    name: '姓名', email: '工作邮箱', company: '公司', teamSize: '团队规模', message: '需求描述',
    send: '提交', sent: '需求已提交，销售团队将在一个工作日内与您联系。'
  },

  download: {
    title: '下载 Folio', lead: '安装客户端并使用 Folio 账号登录，套餐、团队与浏览器环境自动同步。',
    windows: 'Windows 10 及以上（64 位）', mac: 'macOS 12 及以上（Apple 芯片，M1 及更新）', get: '下载', soon: '即将推出',
    version: (v: string) => `版本 ${v}`, released: (date: string) => `${date} 发布`,
    notesTitle: '首次安装提示',
    winNote: 'Folio 暂未进行代码签名。如 SmartScreen 拦截安装程序，请点击「更多信息」，再点击「仍要运行」。',
    macNote: 'Folio 暂未进行代码签名。请将 Folio 拖入「应用程序」。首次无法打开时，前往「系统设置 › 隐私与安全性」点击「仍要打开」；如提示应用已损坏，请在终端执行 xattr -cr /Applications/Folio.app 后重新打开。',
    stepsTitle: '安装后三步开始使用',
    steps: [
      ['下载并安装', 'Windows 运行安装程序；macOS 将 Folio 拖入「应用程序」。'],
      ['登录 Folio 账号', '套餐、团队与浏览器环境自动同步。'],
      ['首次打开时下载内核', '内核来源为各内核项目在 GitHub 的官方发布页，并核对官方公布的校验值。']
    ],
    already: '已有账号，登录客户端后套餐自动生效。'
  },

  docs: {
    title: '使用文档', lead: '浏览器环境、代理与团队的配置指南将陆续发布。',
    search: '搜索文档', toc: '本页内容', soon: '即将发布', home: '文档',
    nav: { guides: '使用文档', api: 'API 参考', other: '其他', start: '快速开始', profiles: '浏览器环境与指纹', proxies: '代理', team: '团队协作' },
    apiTitle: 'API 参考', apiLead: 'Folio 本地 API 支持本机脚本打开浏览器环境，并交由现有自动化工具接管。API 运行于 Folio 客户端内，仅在本机提供。',
    api: {
      setupTitle: '启用',
      setup: [
        '在 Folio 客户端打开「API 与脚本」，启用本机 API 并生成令牌。令牌仅显示一次，请立即复制保存。',
        '请求地址为 http://127.0.0.1:47210（端口可在同一页面修改），请求头需携带 Authorization: Bearer <令牌>。令牌归属于生成者及其所在团队，仅在生成它的电脑上有效，权限与生成者一致：成员仅可操作分配给自己的环境。'
      ],
      limitsTitle: '限速',
      limits: '体验版与工作室版每分钟最多 60 次请求（含打开、关闭与查询），公司版不限速。脚本通过调试地址直接发送给浏览器的指令不计入限额。超出限额时返回 429，并在 Retry-After 响应头中给出可重试的秒数。',
      enginesTitle: '内核与工具',
      engines: [
        ['Chromium 环境', '返回 CDP 地址（wsEndpoint）及供 Selenium 使用的 debuggerAddress。支持 Playwright（connectOverCDP）、Puppeteer、Selenium（需配合 Chromium 150 对应版本的 chromedriver）及其他支持 CDP 的工具。'],
        ['Firefox 环境', '返回 WebDriver BiDi 地址。支持 Puppeteer（protocol: webDriverBiDi）及其他支持 WebDriver BiDi 的工具。Playwright 与 Selenium 目前无法接管已运行的 Firefox。脚本控制 Firefox 环境期间，定时任务将跳过该环境。']
      ] as [string, string][],
      endpointsTitle: '接口',
      endpointsLead: '环境可通过编号（42 或 0042）或 id 指定。',
      endpoints: [
        ['GET', '/api/v1/profiles', '当前账号可见的环境：id、编号、名称、内核及运行状态。'],
        ['POST', '/api/v1/profiles/{编号}/start', '按客户端标准流程打开环境（占用锁、恢复登录状态、连接代理），返回 protocol、wsEndpoint；Chromium 环境另返回 debuggerAddress。已通过 API 打开的环境返回相同地址。'],
        ['GET', '/api/v1/profiles/{编号}', '运行状态；通过 API 打开的环境附带调试地址。'],
        ['POST', '/api/v1/profiles/{编号}/stop', '关闭环境，并照常保存登录状态。'],
        ['GET', '/api/v1/tasks', '团队任务列表，各附最近一次运行记录。'],
        ['POST', '/api/v1/tasks/{id}/run', '在本机运行指定任务，返回 runId。'],
        ['GET', '/api/v1/runs/{id}', '运行状态与统计，以及各环境的结果与提取的数据。']
      ] as [string, string, string][],
      errorsTitle: '错误',
      errorsLead: '出错时返回 { "error": { "code", "message" } }。',
      errors: [
        ['401', 'unauthorized', '未携带令牌、令牌无效或已作废，或令牌并非由客户端当前登录账号生成。'],
        ['404', 'not_found', '在可见的环境、任务或运行记录中未找到该对象。'],
        ['409', 'running_without_api', '该环境已手动打开，没有调试地址。请先关闭，再通过 API 打开。'],
        ['409', 'locked', '该环境正在另一台电脑上使用。'],
        ['409', 'task_running', '该任务正在运行。'],
        ['429', 'rate_limited', '体验版或工作室版一分钟内请求超过 60 次；retryAfter 给出可重试的秒数。'],
        ['502', 'proxy_down', '环境代理无响应，且没有可用的备用线路。']
      ] as [string, string, string][],
      examplesTitle: '示例',
      examples: { playwright: 'Playwright · Chromium 环境', puppeteer: 'Puppeteer · Chromium 环境', selenium: 'Selenium（Python）· Chromium 环境', firefox: 'Puppeteer · Firefox 环境' },
      securityTitle: '安全',
      security: '调试地址没有密码保护。通过 API 打开的环境运行期间，本机任何程序均可控制该环境，这与所有浏览器的调试端口一致。手动打开的环境不开启调试地址，本机 API 仅监听 127.0.0.1。'
    },
    changelogTitle: '更新日志',
    changelog: [['0.1 · 2026 年 10 月', '账号、团队、套餐，以及桌面客户端首个版本。']]
  },

  legal: {
    privacyTitle: '隐私政策', termsTitle: '服务条款',
    draft: '草稿。正式文本准备中，上线前将替换本页内容。',
    privacyBody: [
      '我们收集注册时填写的邮箱与密码、创建的团队以及所选套餐。',
      '选择同步的浏览器环境数据先加密再存储。',
      '我们不出售用户数据。'
    ],
    termsBody: [
      'Folio 是管理多个浏览器环境的工具，使用时须自行遵守相关平台的规则。',
      '付费套餐将自动续费，直至取消。最近一笔付款可在 7 天内申请退款。'
    ]
  },

  errors: {
    email_taken: '该邮箱已注册，请直接登录。',
    invalid_credentials: '邮箱或密码错误。',
    unauthenticated: '请先登录。',
    code_invalid: '验证码错误，请核对邮件后重试。',
    code_expired: '验证码已过期，请重新获取。',
    too_many_attempts: '错误次数过多，请重新获取验证码。',
    already_verified: '该邮箱已验证。',
    email_not_verified: '修改套餐前请先验证邮箱。',
    card_invalid: '请检查卡号与安全码。',
    card_expired: '该银行卡已过期。',
    card_declined: '该银行卡被拒绝，请更换银行卡。',
    insufficient_funds: '卡内余额不足。',
    checkout_expired: '支付页面已过期，请重新开始。',
    checkout_closed: '本次支付已结束，请重新开始。',
    quote_stale: '套餐在此期间已变更，请确认新金额后重试。',
    no_change: '已是当前套餐。',
    change_packs_separately: '加量包与套餐请分两步修改。',
    profile_cap: '套餐最多支持 2000 个浏览器环境，如需更多请联系销售。',
    trial_used: '该团队已使用过免费体验。',
    already_subscribed: '该团队已有套餐。',
    not_subscribed: '该团队没有付费套餐。',
    refund_window_passed: '仅可在付款后 7 天内申请退款。',
    refund_latest_only: '仅可退还最近一笔付款。',
    already_refunded: '该笔付款已退款。',
    payments_unavailable: '暂不支持付款。',
    rate_limited: '操作过于频繁，请一分钟后重试。',
    forbidden: '没有访问权限。',
    not_found: '未找到相关内容。',
    validation: '部分内容未填写或格式有误。',
    emailMissing: '请填写邮箱。', passwordShort: '密码至少 8 位。',
    network: '无法连接 Folio，请检查网络后重试。',
    wrong_account: '该邀请发送至其他邮箱。',
    email_unverified: '请先验证邮箱。',
    invitation_expired: '该邀请已过期，请联系邀请人重新发送。',
    seat_limit: '团队席位已满，请联系所有者升级套餐。',
    mail_unavailable: '邮件发送失败，请稍后重试。',
    internal: '服务暂时异常，请稍后重试。'
  }
};
