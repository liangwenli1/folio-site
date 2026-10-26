import type { en } from './en';

// 中文文案。结构必须和 en.ts 完全一致。
// 调子：平实稳妥，不做绝对承诺；采用「支持……，减少／提升……」的功能加价值句式；正文统一称「浏览器环境」，
// 计数、表头等紧凑处可简称「环境」；尽量不用人称，必须称呼时用「您」。
export const zh: typeof en = {
  meta: {
    title: 'Folio 指纹浏览器',
    description: '面向多店铺、多广告账户与多社媒账号团队的指纹浏览器，为每个账号提供独立的浏览器环境，支持差异化指纹配置、Cookie 隔离与独立代理 IP。'
  },
  nav: { features: '产品功能', solutions: '解决方案', pricing: '价格', download: '下载', help: '帮助中心', site: '返回官网', login: '登录', start: '免费体验', account: '账户', menu: '菜单', crumbs: '面包屑导航' },
  plans: { free: '体验版', studio: '工作室版', company: '公司版' },
  periods: { monthly: '月付', yearly: '年付' },

  demo: {
    label: '工作台操作演示：检查代理、打开浏览器环境、恢复标签页、体检、安装扩展、批量打开、窗口同步与团队协作。', pause: '暂停演示', play: '播放演示'
  },

  home: {
    h1: '独立环境，\n统一管理',
    lead: 'Folio 提供浏览器环境、代理资源与团队权限的一体化管理，支持多账号工作流程的集中配置与有序协作。',
    features: '查看产品功能',
    points: [['环境隔离', '多账号独立运行'], ['代理配置', '灵活接入多种代理'], ['团队协作', '权限可控，协同高效']] as [string, string][],
    cardsTitle: '为多账号工作流程构建', cardsLead: '从环境创建到团队协作，提供完整的功能支持。',
    cards: [
      { title: '环境管理', body: '配置独立的浏览器环境，集中查看运行状态与关键参数。', mini: { title: '创建环境', rows: [['环境名称', 'US-Store-01'], ['操作系统', 'Windows'], ['浏览器内核', 'Chromium 150']] as [string, string][], button: '创建环境' } },
      { title: '代理管理', body: '统一配置代理连接，查询检测结果与环境绑定关系。', mini: { title: '配置代理', rows: [['代理类型', 'SOCKS5'], ['代理主机', '203.0.113.24'], ['端口', '1080']] as [string, string][], button: '检测连接' } },
      { title: '分组管理', body: '按业务、地区或项目组织浏览器环境，保持资源结构清晰。', mini: { title: '分组', rows: [['', '美区店铺 · 3'], ['', '欧洲店铺 · 2'], ['', '社媒 · 2']] as [string, string][], button: '新建分组' } },
      { title: '团队协作', body: '配置成员角色与资源范围，明确操作职责。', mini: { title: '团队成员', rows: [['林晓', '所有者'], ['周航', '管理员'], ['许诺', '成员']] as [string, string][], button: '邀请成员' } }
    ],
    steps: {
      title: '三个步骤，开始使用', lead: '注册后即可创建浏览器环境，并邀请团队成员一起使用。',
      items: [['创建环境', '设置浏览器指纹与基础参数，创建独立的浏览器环境。'], ['配置代理', '接入代理并检测连接，确保网络环境正常。'], ['授权协作', '邀请团队成员并分配相应权限，即可共同使用。']] as [string, string][]
    },
    uses: {
      title: '适用于多种业务场景', lead: '灵活的浏览器环境管理方案，满足不同业务的多账号管理需求。',
      items: [
        { title: '跨境电商', body: '管理多个平台店铺账号，实现账号环境隔离与团队协作。', list: ['US-Store-01', 'UK-Shop-01', 'JP-Shop-01', 'DE-Shop-01'] },
        { title: '社媒运营', body: '同时管理多个社媒账号，支持团队协作与权限控制。', list: ['Social-01', 'Social-02', 'Social-03', 'Social-04'] },
        { title: '团队测试', body: '为开发与测试团队提供相互独立的测试环境。', list: ['Test-Env-A', 'Test-Env-B', 'Staging-01', 'Staging-02'] }
      ]
    },
    faq: {
      title: '常见问题', lead: '以下是用户经常咨询的问题。其他问题，请', contact: '联系我们',
      items: [
        ['使用 Folio 能否保证账号不被封禁？', '不能保证。Folio 用于降低多个账号被识别为同一设备的风险；如账号存在违规操作，或代理 IP 质量不佳，仍可能受到平台限制。建议为每个浏览器环境配置独立的住宅代理或 ISP 代理。'],
        ['是否需要自备代理？', '需要。支持 HTTP、HTTPS 与 SOCKS5 代理，可逐条添加或批量导入，添加时自动检测连通性与出口位置，并据此匹配时区与语言。'],
        ['Chromium 与 Firefox 内核如何选择？', '多数账号建议使用 Chromium 内核，每个 Chromium 浏览器环境具备独立且稳定的指纹。Firefox 内核适用于需要 Firefox 用户特征的网站；同一台电脑上的 Firefox 浏览器环境之间指纹重合度较高，同一平台的多个账号不建议全部使用 Firefox 内核。'],
        ['浏览器环境数据存储在哪里？', '默认加密后同步至云端，更换电脑登录即可继续使用；也支持将指定浏览器环境设为仅保存在本机。全部数据支持随时完整导出。'],
        ['内核如何更新？', 'Folio 采用开源指纹内核，新版本经测试后发布。现有浏览器环境保持原内核版本，支持按需升级。']
      ] as [string, string][]
    },
    band: { title: '开始使用 Folio', body: '免费体验 5 个浏览器环境，无需绑定银行卡。', download: '下载客户端' }
  },

  features: {
    title: '产品功能', h1: '构建完整的\n浏览器环境管理流程',
    lead: 'Folio 以浏览器环境为基础，连接代理、分组、成员与执行记录，从环境创建、代理配置、团队协作到内核管理，提供完整的工具链。',
    shot: 'Folio 工作台的浏览器环境列表', tabsLabel: '功能分区',
    blocks: [
      { title: '环境管理', lead: '按业务配置浏览器环境，集中管理指纹参数与运行状态。', shot: '新建浏览器环境的表单：基础信息、代理配置、指纹配置与启动设置',
        points: [
          ['独立的指纹与存储', '每个浏览器环境独立生成 Canvas、WebGL、音频与字体等指纹，Cookie 与本地存储相互隔离。'],
          ['双内核可选', '支持 Chromium 与 Firefox 两种内核，按浏览器环境选择版本，已有环境保持原版本。'],
          ['批量操作与回收站', '支持批量启动、停止、移动分组与批量编辑；删除的浏览器环境进入回收站，保留期内可恢复。']
        ] as [string, string][] },
      { title: '代理管理', lead: '管理连接信息、检测记录及其与浏览器环境的关联。', shot: '代理列表：协议、地址、出口地区、连接状态与延迟',
        points: [
          ['多种协议', '支持 HTTP、HTTPS 与 SOCKS5，可逐条添加或批量导入，导入前逐行预览解析结果。'],
          ['连接检测', '检测连通性、延迟与出口地区，并据此匹配时区与语言；无响应的代理在列表中标出。'],
          ['绑定与更换', '一个代理可绑定多个浏览器环境，也可随时为环境更换代理或批量解除绑定。']
        ] as [string, string][] },
      { title: '团队协作', lead: '通过分组和角色权限，控制资源访问与操作范围。', shot: '分组管理：分组树、分组内的浏览器环境与分组设置',
        points: [
          ['多级分组', '按业务、地区或项目建立多级分组，浏览器环境归属清晰，公司版可按分组授权成员。'],
          ['角色与权限', '内置所有者、管理员、成员、仅查看四种角色，也可自建角色并逐项设置 13 项权限。'],
          ['操作日志', '记录浏览器环境的打开、修改与转交等操作，可按人员、类型与时间查询。']
        ] as [string, string][] },
      { title: '内核管理', lead: '集中查看内核版本、安装状态及浏览器环境使用情况。', shot: '内核管理：默认内核、各版本的下载状态与使用环境',
        points: [
          ['多版本并存', '同一内核可保留多个版本，已有浏览器环境保持当前版本，支持按需升级。'],
          ['下载管理', '在线下载、暂停与继续，可设置仅在空闲时下载，并清理不再使用的版本。'],
          ['默认内核', '设置工作空间的默认内核，后续新建的浏览器环境自动使用。']
        ] as [string, string][] },
      { title: '自动化', lead: '减少重复操作，批量任务的执行结果在任务中心集中查看。', shot: '窗口同步：主控窗口的操作同步到其他窗口',
        points: [
          ['窗口同步', '在主控窗口中操作，其他窗口同步执行点击、输入与滚动。'],
          ['流程与定时任务', '以步骤编排流程，在一组浏览器环境上分批运行，支持定时执行并保留每次的结果。'],
          ['本机 API 与扩展', '本机 API 支持 Playwright、Puppeteer、Selenium 接入；扩展统一管理，批量安装到浏览器环境。']
        ] as [string, string][] }
    ],
    flow: {
      title: '从创建到协作，统一管理多账号的完整流程',
      steps: [
        ['创建环境', '配置独立的浏览器环境与指纹参数。'],
        ['配置代理', '选择代理协议并进行连接检测。'],
        ['分配成员', '设置成员权限并授权相应分组。'],
        ['开始使用', '在统一的工作台中管理所有浏览器环境。']
      ] as [string, string][],
      cta: '体验完整工作流程'
    }
  },

  solutions: {
    title: '解决方案', h1: '面向多场景的\n环境管理方案',
    lead: 'Folio 根据业务结构组织浏览器环境、代理与成员权限，帮助个人与团队在不同业务场景下建立清晰的日常工作流程。',
    shot: 'Folio 工作台的浏览器环境列表', start: '免费体验', features: '了解产品功能',
    casesTitle: '针对不同业务场景的环境管理方案', casesLead: '从业务需求出发，配置合适的浏览器环境、代理与权限，提升团队协作效率。',
    hub: '代理连接', needs: '实际需求', answers: '相关功能',
    cases: [
      { title: '跨境电商', lead: '按站点与店铺组织浏览器环境，管理代理与成员授权。', envs: ['店铺环境\n美国站', '店铺环境\n欧洲站', '店铺环境\n日本站'],
        needs: ['同时管理多个平台店铺', '保持账号环境相互独立', '团队成员分工协作'], answers: ['浏览器环境批量创建', '代理灵活配置与检测', '成员角色与分组授权'], cta: '查看方案' },
      { title: '社媒运营', lead: '按项目与账号分组，协同完成环境配置与日常操作。', envs: ['账号环境\n项目 A', '账号环境\n项目 B', '账号环境\n项目 C'],
        needs: ['管理多个社媒账号', '保持各账号登录环境独立', '支持内容发布与运营协作'], answers: ['独立的浏览器环境', '窗口同步批量操作', '分组与权限管理'], cta: '查看相关功能' },
      { title: '团队测试', lead: '维护不同测试环境，查询操作记录与批量执行结果。', envs: ['开发\n环境', '测试\n环境', '预发布\n环境'],
        needs: ['多人同时进行功能测试', '不同项目环境相互隔离', '便于环境管理与回收'], answers: ['浏览器环境分组管理', '成员授权使用', '操作日志与任务记录'], cta: '查看相关功能' }
    ],
    flow: {
      title: '从成员到代理，快速搭建有序的工作流程', lead: '四个步骤，完成团队浏览器环境的配置与管理。',
      steps: [
        ['添加成员', '邀请团队成员加入，并为其设置角色。'],
        ['授权分组', '按业务需求建立分组，授权成员可访问的范围。'],
        ['创建环境', '为不同业务创建独立的浏览器环境。'],
        ['配置代理', '为浏览器环境绑定代理并检测连接。']
      ] as [string, string][]
    },
    faq: {
      title: '常见问题', lead: '关于浏览器环境管理方案的常见问题。',
      items: [
        ['Folio 适合哪些使用场景？', '适用于需要同时运营多个账号的个人与团队，例如跨境电商多店铺运营、社媒矩阵运营、广告代投与多环境测试。每个账号使用独立的浏览器环境，减少设备信息重合。'],
        ['如何管理团队成员的权限？', '管理员可邀请成员并为其设置角色：内置所有者、管理员、成员、仅查看四种角色，也可自建角色并逐项设置权限；公司版还可按分组授权成员可访问的浏览器环境。'],
        ['是否支持批量创建浏览器环境？', '支持。可通过表格批量导入浏览器环境，也可批量导入代理，批量调整分组、代理与内核版本；批量操作的结果可在任务中心查看。']
      ] as [string, string][]
    },
    band: { title: '了解适合您的配置', body: '根据业务需求，获取浏览器环境管理建议。', contact: '联系我们' }
  },

  ecommerce: {
    title: '跨境电商解决方案', crumb: '跨境电商', h1: '跨站点环境管理，\n协作有序',
    lead: '按店铺与地区组织浏览器环境，集中配置代理与成员权限。',
    shot: '分组管理：按站点组织的浏览器环境与分组设置', features: '查看功能',
    pains: {
      title: '跨境电商运营的常见挑战', lead: '多平台、多地区的业务布局下，浏览器环境、代理与成员管理更加复杂。',
      items: [
        ['场景复杂', '不同店铺、地区与运营场景需要独立的浏览器环境，手动管理容易混乱。', '通过分组管理浏览器环境', '按店铺与地区清晰组织'],
        ['代理分散', '代理来源多、配置方式不统一，难以集中维护与切换。', '在工作台内统一配置代理', '检测后应用到各浏览器环境'],
        ['交接繁琐', '成员权限与环境信息分散，新成员加入或人员变动时交接成本高。', '按角色与分组授权成员', '明确可访问的浏览器环境']
      ] as [string, string, string, string][]
    },
    flow: {
      title: '推荐工作流程', lead: '四个步骤，搭建可协作的跨境电商运营环境。',
      steps: ['创建分组', '配置环境', '检测代理', '授权成员'],
      mini: {
        groups: { title: '分组', items: ['美国站点', '日本站点'], add: '新建分组' },
        profile: { title: '创建环境', fields: [['环境名称', 'US-Shop-A'], ['所属分组', '美国站点'], ['备注', '美国站点主店']] as [string, string][], create: '创建环境' },
        proxy: { title: '代理检测', fields: [['代理类型', 'HTTP'], ['代理地址', '203.0.113.24:8080']] as [string, string][], check: '检测连接', ok: '连接正常', exit: '出口地区：美国 · 西雅图' },
        access: { title: '美国站点 · 成员访问', people: [['周航', '成员', true], ['许诺', '仅查看', true], ['陈一', '成员', false]] as [string, string, boolean][], save: '保存设置' }
      }
    },
    compare: {
      title: '使用前后对比', lead: '从分散混乱到统一有序，提升跨境电商的运营效率。',
      before: '使用前', beforeSub: '信息分散，管理成本高', after: '使用后', afterSub: '统一管理，协作更高效',
      afterShot: 'Folio 工作台的浏览器环境列表：分组、代理与运行状态',
      cols: ['店铺', '平台', '代理信息', '负责人', '状态'],
      rows: [
        ['US-Shop-A', '平台 A', '美国 IP（单独配置）', '张三', '配置混乱'],
        ['US-Shop-B', '平台 B', '代理记录在文档中', '李四', '难以追溯'],
        ['JP-Shop-A', '平台 C', '日本 IP（不同工具）', '王五', '交接繁琐'],
        ['JP-Shop-B', '平台 D', '手动切换代理', '赵六', '容易出错']
      ]
    },
    note: '账号规则与验证要求以各平台规定为准。'
  },

  pricing: {
    title: '价格与套餐', h1: '按业务规模\n选择配置',
    lead: '按浏览器环境数量计费，付费套餐成员数量不限。从个人体验到多团队协作，选择适合当前业务规模的套餐，并可随时调整。',
    note: '体验版永久免费，无需绑定银行卡；付款后 7 天内可申请退款。',
    shot: 'Folio 工作台的浏览器环境列表',
    period: '付费周期', monthly: '月付', yearly: '年付', save: '省 20%',
    perMonth: '/ 月', forever: '永久免费',
    perProfile: (amount: string) => `折合每个环境 ${amount}/月`,
    billedMonthly: '按月付费，随时取消',
    billedYearly: (total: string) => `按年付费，共 ${total}`,
    noCard: '无需绑定银行卡',
    profilesMembers: (p: number, m: string) => `${p} 个环境 · ${m}`,
    oneMember: '1 名成员', unlimitedMembers: '成员不限',
    tags: { free: '个人体验', studio: '适合 3–20 人团队', company: '多团队协作' },
    for: { free: '体验核心功能', studio: '单个团队的日常运营', company: '多团队、多业务线' },
    cta: { free: '免费体验', studio: '免费体验 7 天', company: '联系销售' },
    features: {
      free: ['Chromium 与 Firefox 双内核，完整指纹配置', '代理检测，自动匹配时区与语言', '本机 API', '文档与社区支持'],
      studio: ['成员数量不限', '窗口同步与批量操作', '角色权限与浏览器环境转交', '操作日志保留 30 天', '工作日在线客服'],
      company: ['包含工作室版全部功能', '按分组授权成员访问浏览器环境', '操作日志保留 1 年，支持导出', '专属客服群，每日 12 小时', 'API 调用不限速']
    },
    buy: '立即购买', soon: '即将开放',
    compare: {
      title: '功能对比', yes: '包含', no: '不包含',
      rows: [
        ['浏览器环境', '5 个', '100 个，可加量', '500 个，可加量'],
        ['成员', '1 名', '不限', '不限'],
        ['Chromium 与 Firefox 双内核', true, true, true],
        ['代理管理与连接检测', true, true, true],
        ['登录状态云端同步与数据导出', true, true, true],
        ['窗口同步', false, true, true],
        ['角色与权限', false, true, true],
        ['按分组授权成员', false, false, true],
        ['操作日志', '保留 7 天', '保留 30 天', '保留 1 年，支持导出'],
        ['本机 API', '每分钟 60 次', '每分钟 60 次', '不限速'],
        ['客服支持', '文档与社区', '工作日在线客服', '专属客服群，每日 12 小时']
      ] as [string, ...(string | boolean)[]][]
    },
    calc: {
      eyebrow: '配置估算', title: '按浏览器环境数量选择方案', label: '所需浏览器环境数量',
      hint: '拖动滑块选择所需的浏览器环境数量，查看费用最低的方案与实际价格。',
      best: '推荐方案', cheapest: '费用最低',
      profiles: (n: number) => `${n} 个环境`,
      withPacks: (plan: string, packs: number) => `${plan} + ${packs} 个加量包`,
      fit: (n: number, pick: string) => `${n} 个环境：${pick}`,
      company: (amount: string) => `同等数量下公司版为 ${amount}/月，另含按分组授权、操作日志保留 1 年与 API 不限速。`,
      custom: (max: number) => `超过 ${max} 个环境`, customBody: '支持根据团队规模单独报价。',
      buy: '按此方案购买'
    },
    faq: {
      title: '常见问题', lead: '关于体验、计费与套餐。其他问题，请', contact: '联系我们',
      items: [
        ['体验版包含哪些内容？', '5 个浏览器环境永久免费，包含双内核、完整指纹配置、代理检测与本机 API。无需绑定银行卡，不限使用期限，可用于完整业务流程验证。'],
        ['可以先体验工作室版吗？', '可以。每个团队可免费体验工作室版 7 天，期间可邀请成员、使用窗口同步等功能；体验结束后可选择购买，或继续使用体验版。'],
        ['如何升级或更换套餐？', '在账户页即可更换。升级即日生效，当前套餐剩余时长折算抵扣；降级在当前周期结束后生效。'],
        ['浏览器环境不够用怎么办？', '付费套餐可购买加量包，每包 100 个浏览器环境，总数最多 2000 个；超过 2000 个可联系我们单独报价。'],
        ['是否支持退款与发票？', '付款后 7 天内可申请退还最近一笔付款，套餐恢复至该笔付款之前的状态。每笔付款均提供发票，可在账户页查看与打印。']
      ] as [string, string][]
    },
    band: { title: '先免费体验，再按需选购', body: '注册即可使用 5 个浏览器环境，无需绑定银行卡。' },
    foot: (pack: string) => `如需更多浏览器环境，每增加 100 个 ${pack}/月；超过 2000 个可单独报价。价格不含当地税费，每笔付款均提供发票。`
  },

  footer: { product: '产品', resources: '资源', company: '公司', api: 'API 参考', changelog: '更新日志', contact: '联系我们', privacy: '隐私政策', terms: '服务条款', tagline: '独立环境，统一管理', about: 'Folio 提供浏览器环境、代理资源与团队权限的一体化管理。', rights: '© 2026 Folio' },

  auth: {
    panel: {
      title: '独立环境，统一管理', lead: '为不同业务创建独立的浏览器环境，在一个工作空间中集中管理，账号、数据与操作清晰隔离。',
      points: [['独立浏览器环境', '每个业务独立运行'], ['集中管理', '统一配置，快速切换'], ['团队协作', '按角色与分组授权']] as [string, string][]
    },
    loginTitle: '登录 Folio', loginLead: '使用您的账号登录，继续管理浏览器环境。',
    signupTitle: '创建 Folio 账号', signupLead: '免费体验 5 个浏览器环境，无需绑定银行卡。',
    email: '邮箱', emailPh: 'name@example.com', password: '密码', setPassword: '设置密码', passwordHint: '至少 8 位',
    remember: '记住登录', forgot: '忘记密码？',
    consent: ['我已阅读并同意', '服务条款', '和', '隐私政策'] as [string, string, string, string],
    signup: '注册账号', login: '登录', haveAccount: '已有账号？', noAccount: '没有账号？', toSignup: '注册',
    verifyTitle: '验证邮箱', verifyLead: (email: string) => `验证码已发送至 ${email}，15 分钟内有效。`,
    code: '验证码', verify: '验证', resend: '重新发送', resendIn: (s: number) => `${s} 秒后可重发`, resent: '新的验证码已发送。',
    reset: {
      title: '重置密码', lead: '验证邮箱后设置新的登录密码。', steps: ['验证邮箱', '设置新密码', '完成'],
      code: '邮箱验证码', codePh: '请输入 6 位验证码', getCode: '获取验证码',
      sent: '如该邮箱已注册，验证码将发送至该邮箱，15 分钟内有效。',
      next: '下一步', password: '新密码', confirm: '确认新密码', save: '保存新密码', back: '返回上一步',
      doneTitle: '密码已重置', doneText: '请使用新密码登录。', toLogin: '返回登录',
      noCode: '未收到验证码？请检查垃圾邮件，或', contact: '联系我们'
    },
    devNotice: '开发版本：邮件发送至本机测试收件箱 http://127.0.0.1:47125。',
    logout: '退出登录',
    showPassword: '显示密码'
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
    roles: { owner: '所有者', admin: '管理员', member: '成员', viewer: '仅查看' } as Record<string, string>,
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

  contact: {
    title: '联系我们', h1: '联系 Folio 团队', lead: '提交产品咨询、使用反馈或合作需求，我们会尽快与您联系。',
    kinds: {
      product: ['产品咨询', '了解产品功能、适用场景与方案建议。'],
      support: ['技术支持', '使用中遇到问题，获取技术支持与使用指导。'],
      partner: ['合作沟通', '商务合作、渠道合作或其他相关事宜。']
    },
    formTitle: '提交咨询', formLead: '请填写以下信息，我们会尽快与您联系。',
    name: '姓名', namePh: '请输入姓名', email: '工作邮箱', emailPh: '请输入工作邮箱', kind: '咨询类型',
    teamSize: '团队规模', teamPh: '请选择团队规模', sizes: [['1-5', '1–5 人'], ['6-20', '6–20 人'], ['21-100', '21–100 人'], ['100+', '100 人以上']] as [string, string][],
    message: '需求描述', messagePh: '请描述您的需求、使用场景或想了解的问题', consent: '我已阅读并同意', privacy: '隐私政策',
    send: '提交咨询', done: '咨询已提交', doneText: '请保留提交编号，以便后续查询。', number: '提交编号', again: '再提交一条',
    failed: '提交失败，请稍后重试。已填写的内容已保留。',
    more: {
      eyebrow: '更多资源', title: '相关帮助与信息', lead: '也可以通过以下方式了解更多产品信息，或获取使用帮助。',
      items: [['帮助中心', '查看使用指南、常见问题与本机 API 参考。'], ['价格', '了解各套餐的功能与价格。'], ['下载', '下载客户端，开始使用 Folio。']] as [string, string][]
    }
  },

  download: {
    title: '下载 Folio', h1: '下载 Folio，\n开始管理浏览器环境',
    lead: '在电脑上安装 Folio 客户端，使用 Folio 账号登录后，即可创建并管理多个浏览器环境；套餐、团队与浏览器环境自动同步。',
    shot: 'Folio 工作台的浏览器环境列表', pending: '安装包即将提供',
    windowsName: 'Windows 版', macName: 'macOS 版',
    windows: 'Windows 10 及以上（64 位）', mac: 'macOS 12 及以上（Apple 芯片，M1 及更新）',
    get: (os: string) => `下载 ${os}`, soon: '即将推出',
    version: (v: string) => `版本 ${v}`, released: (date: string) => `${date} 发布`,
    notesTitle: '首次安装提示',
    winNote: 'Folio 暂未进行代码签名。如 SmartScreen 拦截安装程序，请点击「更多信息」，再点击「仍要运行」。',
    macNote: 'Folio 暂未进行代码签名。请将 Folio 拖入「应用程序」。首次无法打开时，前往「系统设置 › 隐私与安全性」点击「仍要打开」；如提示应用已损坏，请在终端执行 xattr -cr /Applications/Folio.app 后重新打开。',
    other: '其他操作系统暂不提供安装包，如有需要，请', contact: '联系我们',
    stepsTitle: '三个步骤，开始使用', stepsLead: '下载并安装客户端，登录账号后即可创建浏览器环境。',
    steps: [
      ['下载客户端', '按电脑系统选择对应版本：Windows 运行安装程序，macOS 将 Folio 拖入「应用程序」。'],
      ['登录账号', '使用 Folio 账号登录客户端，套餐、团队与浏览器环境自动同步。'],
      ['创建环境', '创建浏览器环境并配置代理；首次打开时自动下载所需内核，并核对官方公布的校验值。']
    ] as [string, string][],
    help: [
      ['安装帮助', '安装步骤与常见问题，请查看使用文档。', '查看使用文档'],
      ['更新日志', '查看 Folio 客户端各版本的新增功能与修复内容。', '查看更新日志'],
      ['安全提示', '请通过本页或其他官方渠道获取安装包，以确保文件来源可靠。', '']
    ] as [string, string, string][]
  },

  help: {
    title: '帮助中心', lead: '快速查找配置指南与常见问题。',
    search: '输入问题或关键词', searchBtn: '搜索', examplesLabel: '例如：', examples: ['创建环境', '代理配置', '导入 Cookie', '团队协作'],
    shot: 'Folio 工作台的浏览器环境列表',
    results: { one: '找到 1 篇与「{q}」相关的文档', many: '找到 {n} 篇与「{q}」相关的文档', none: '未找到与「{q}」相关的文档' },
    noneText: '请尝试其他关键词，例如：', noneMore: '仍未找到答案？', contact: '联系我们',
    categories: {
      start: { title: '快速入门', body: '从安装客户端到创建第一个浏览器环境，了解 Folio 的基本使用流程。' },
      profiles: { title: '环境管理', body: '创建与配置浏览器环境，管理屏幕、窗口与 Cookie。' },
      proxies: { title: '代理配置', body: '添加与导入代理并检测连接，绑定到浏览器环境。' },
      team: { title: '团队协作', body: '分组、成员授权与角色权限的设置方法。' },
      account: { title: '账户与套餐', body: '套餐额度、免费体验、升级、退款与发票。' }
    },
    popular: '热门指南', developers: '开发者', apiLink: '本机 API 参考',
    faq: {
      title: '常见问题',
      items: [
        ['Folio 适用于哪些场景？', '适用于需要同时运营多个账号的个人与团队，例如跨境电商多店铺运营、社媒矩阵运营、广告代投与多环境测试。每个账号使用独立的浏览器环境，减少设备信息重合。'],
        ['如何更换已创建环境的代理？', '在环境列表的操作菜单、环境详情页的代理卡片，或代理详情页的绑定环境表中选择「更换代理」。浏览器环境在本机运行时需先停止。'],
        ['团队成员的权限可以自定义吗？', '可以。除所有者、管理员、成员、仅查看四种内置角色外，还可新建角色并逐项设置 13 项权限；角色在整个工作空间内生效。']
      ] as [string, string][]
    },
    contactCard: { title: '联系我们', body: '如果没有找到需要的答案，可以联系我们的团队。', cta: '提交咨询' },
    home: '帮助中心', searchDocs: '搜索文档', toc: '本页目录', updated: (date: string) => `更新时间：${date}`, prev: '上一篇', next: '下一篇', note: '注意',
    feedback: { ask: '这篇文档是否有帮助？', yes: '是', no: '否', thanks: '感谢您的反馈。', failed: '提交失败，请稍后重试。' },
    articles: {
      install: {
        cat: 'start', title: '安装 Folio 客户端', summary: '下载并安装客户端，登录账号后开始使用。',
        lead: '在 Windows 或 macOS 电脑上安装 Folio 客户端，使用 Folio 账号登录后即可开始使用。',
        sections: [
          { title: '下载安装包', body: ['在官网「下载」页选择对应系统的安装包：Windows 10 及以上（64 位），或 macOS 12 及以上（Apple 芯片，M1 及更新）。请通过官网或其他官方渠道获取安装包。'] },
          { title: '安装客户端', body: ['Windows：运行安装程序，按提示完成安装。Folio 暂未进行代码签名，如 SmartScreen 拦截安装程序，请点击「更多信息」，再点击「仍要运行」。', 'macOS：打开安装包，将 Folio 拖入「应用程序」。首次无法打开时，前往「系统设置 › 隐私与安全性」点击「仍要打开」；如提示应用已损坏，请在终端执行 xattr -cr /Applications/Folio.app 后重新打开。'] },
          { title: '登录账号', body: ['使用在官网注册的 Folio 账号登录客户端，套餐、团队与浏览器环境会自动同步。账号加入了多个团队时，可在侧栏顶部切换工作空间。'] },
          { title: '下载内核', body: ['内核按需下载：首次打开某个内核版本的浏览器环境时，Folio 会自动下载该版本，并核对官方公布的校验值；也可以在「内核管理」页提前下载。'] }
        ],
        note: '有新版本时，客户端会提示前往下载新的安装包。'
      },
      'create-profile': {
        cat: 'start', title: '创建第一个浏览器环境', summary: '填写基础信息、配置代理与指纹，创建并启动环境。',
        lead: '本文介绍如何创建并启动第一个浏览器环境，熟悉 Folio 的核心使用流程。',
        sections: [
          { title: '填写基础信息', body: ['在「环境管理」页点击「创建环境」。填写环境名称，选择所属分组、浏览器内核与版本、操作系统；可添加标签，并指定负责的成员。'] },
          { title: '选择并检测代理', body: ['在「代理配置」中选择已有代理、填写新的代理，或选择不使用代理。选择代理后可点击「检测连接」，确认代理可用，并查看出口地区与延迟。'] },
          { title: '检查指纹与启动设置', body: ['Folio 为每个浏览器环境生成独立的指纹，「指纹配置」中显示摘要，可展开调整；时区与语言默认跟随代理。', '「启动设置」中可设置启动页、启动窗口尺寸、搜索引擎，以及是否恢复上次的标签页。屏幕分辨率与启动窗口尺寸是两项独立的设置，详见「屏幕分辨率与窗口尺寸」。'] },
          { title: '创建并启动', body: ['点击「创建环境」完成创建。在列表中点击「启动」，或进入环境详情页启动；首次使用某个内核版本时会先下载内核。启动失败时，可在详情页查看原因并重试。'] }
        ],
        note: '不使用代理时，浏览器环境将使用当前电脑的网络。'
      },
      'screen-and-window': {
        cat: 'profiles', title: '屏幕分辨率与窗口尺寸', summary: '两项设置的区别、各自的设置位置与配合方式。',
        lead: '屏幕分辨率是浏览器环境向网页呈现的屏幕参数；启动窗口尺寸是浏览器窗口打开时的大小。两者分别设置，互不影响。',
        sections: [
          { title: '屏幕分辨率', body: ['在浏览器环境的「指纹配置」中设置。Firefox 内核可从列表中选择分辨率；Chromium 内核的屏幕分辨率跟随本机屏幕，不可单独设置。'] },
          { title: '启动窗口尺寸', body: ['在「启动设置」中选择「默认」「自定义」或「最大化」，选择自定义时填写宽度与高度。窗口尺寸只决定窗口打开时的大小，不改变屏幕分辨率。'] },
          { title: '两者如何配合', body: ['启动窗口尺寸不宜大于本机屏幕，否则窗口会超出屏幕范围。网页读取到的屏幕分辨率始终以指纹配置为准，与窗口大小无关。'] }
        ],
        note: '修改以上设置后，在下次启动浏览器环境时生效。'
      },
      'import-cookies': {
        cat: 'profiles', title: '导入 Cookie', summary: '将已有的登录状态导入浏览器环境，免去重复登录。',
        lead: '将已有的登录状态导入浏览器环境，免去重复登录。',
        sections: [
          { title: '打开 Cookie 管理', body: ['进入浏览器环境详情页，切换到「Cookie 管理」标签页。这里列出该环境保存的 Cookie（名称、域名、路径、到期时间），值默认遮挡。'] },
          { title: '选择导入方式', body: ['点击「导入 Cookie」，粘贴文本或选择文件。支持 JSON（常见浏览器扩展导出的格式）与 cookies.txt（Netscape 格式），Folio 会自动识别。'] },
          { title: '检查预览', body: ['导入前逐条预览有效与无效的 Cookie，并说明无效的原因。同名 Cookie（名称、域名与路径都相同）可选择覆盖或跳过。'] },
          { title: '完成导入', body: ['确认后导入。浏览器环境正在本机运行时，Cookie 会同时写入正在运行的浏览器；在其他电脑上使用中时不可导入。'] }
        ],
        note: '导入 Cookie 需要「导入 Cookie」权限；查看与导出 Cookie 的值需要「导出 Cookie」权限，每次读取都会记录在操作日志中。'
      },
      proxies: {
        cat: 'proxies', title: '配置与检测代理', summary: '添加或批量导入代理，检测连接并绑定到浏览器环境。',
        lead: '在「代理管理」中添加代理并检测连接，再将代理绑定到浏览器环境。',
        sections: [
          { title: '添加代理', body: ['点击「添加代理」，选择协议（HTTP、HTTPS 或 SOCKS5），填写主机与端口，需要认证时填写用户名与密码。可添加备用线路：主线路无响应时，启动环境会改用备用线路。'] },
          { title: '批量导入', body: ['点击「导入」，粘贴代理商提供的列表或选择文件，每行一条，支持 host:port:用户名:密码、用户名:密码@host:port、socks5://用户名:密码@host:port 与 host:port 等写法。', '导入前逐行预览解析结果，无法解析的行会说明原因；可跳过已保存的代理，并按命名规则（如 US-{n}）自动命名。'] },
          { title: '检测连接', body: ['点击「全部检测」或单个代理的「检测」，查看连通性、延迟与出口地区。一次检测超过 5 个代理时，右下角显示进度，结果可在任务中心查看；无响应的代理在列表中标出。'] },
          { title: '绑定到浏览器环境', body: ['创建或编辑浏览器环境时选择代理，或在环境列表、详情页中选择「更换代理」。在代理详情页可查看绑定的环境，也可批量解除绑定。'] }
        ],
        note: '浏览器环境在本机运行时不能更换代理，请先停止该环境。'
      },
      'group-access': {
        cat: 'team', title: '设置分组权限', summary: '用分组组织浏览器环境，并授权成员访问。',
        lead: '分组决定成员可以访问哪些浏览器环境，角色决定成员可以执行哪些操作。',
        sections: [
          { title: '创建分组', body: ['在「分组管理」页点击「新建分组」，填写名称，选择上级分组（支持多级）、颜色与说明。'] },
          { title: '授权成员', body: ['在分组设置的「成员权限」中添加成员，被授权的成员即可访问该分组内的浏览器环境。按分组授权成员是公司版功能。'] },
          { title: '继承上级分组权限', body: ['开启「继承上级分组权限」后，上级分组授权的成员也可访问本分组的浏览器环境。'] },
          { title: '角色与权限', body: ['成员可执行的操作（如创建、启动、删除环境，导入、导出 Cookie）由角色决定。角色在整个工作空间内生效：可在「团队成员 › 角色权限」中调整内置角色，或新建角色并逐项设置 13 项权限。'] }
        ],
        note: '所有者与管理员可访问全部浏览器环境；成员与仅查看可访问分配给自己的环境，以及所在分组的环境。'
      },
      'plans-and-billing': {
        cat: 'account', title: '套餐与账单', summary: '套餐额度、免费体验、升级、退款与发票。',
        lead: '了解套餐额度，以及体验、升级、退款与发票的规则。',
        sections: [
          { title: '套餐与额度', body: ['体验版免费提供 5 个浏览器环境；工作室版含 100 个、公司版含 500 个浏览器环境。付费套餐成员数量不限，可购买加量包（每包 100 个浏览器环境），总数最多 2000 个。'] },
          { title: '免费体验工作室版', body: ['每个团队可免费体验工作室版 7 天，体验结束后可选择购买，或继续使用体验版。'] },
          { title: '升级与更换', body: ['在官网账户页或客户端「账号与计费」页进入结账。升级即日生效，当前套餐剩余时长折算抵扣；降级在当前周期结束后生效。仅所有者与管理员可修改团队套餐。'] },
          { title: '退款与发票', body: ['付款后 7 天内可申请退还最近一笔付款，套餐恢复至该笔付款之前的状态。每笔付款均提供发票，可在账户页查看与打印。'] }
        ],
        note: '各套餐的价格以价格页为准。'
      }
    },
    minis: {
      'create-profile': { title: '创建环境', rows: [['环境名称', '测试环境 01'], ['所属分组', '美区店铺']] as [string, string][], button: '创建环境' },
      proxies: { title: '代理配置', rows: [['代理类型', 'HTTP'], ['代理地址', '203.0.113.24:8080']] as [string, string][], button: '检测连接' },
      'screen-and-window': { title: '启动设置', rows: [['屏幕分辨率', '1920 × 1080'], ['窗口尺寸', '1280 × 800']] as [string, string][], button: '保存' },
      'import-cookies': { title: '导入 Cookie', rows: [['', 'session=…; domain=shop.example'], ['', 'lang=en; domain=shop.example']] as [string, string][], button: '导入' },
      'group-access': { title: '美区店铺 · 成员访问', rows: [['周航', '成员'], ['许诺', '仅查看']] as [string, string][], button: '保存设置' }
    }
  },

  changelog: {
    title: '更新日志', h1: '查看产品版本\u200b与功能调整', lead: '了解 Folio 的版本更新记录，包括新增功能、功能优化与问题修复。',
    filter: '按产品筛选', areas: { all: '全部', desktop: '工作台', site: '官网' },
    kinds: { added: '新增', improved: '优化', fixed: '修复' },
    releases: [
      { version: '下一版本', date: '即将发布', area: 'desktop',
        added: ['任务中心：批量检测代理、批量启动、导入代理与批量编辑的结果逐项可查，失败项可重试', '分组管理：多级分组，公司版可按分组授权成员', '自定义角色：四种内置角色之外可新建角色，逐项设置 13 项权限', '环境详情页：概览、指纹配置、Cookie 管理与操作记录'],
        improved: ['界面按新的设计规范统一：列表、表单、空状态与操作反馈', '关闭浏览器窗口后可保持环境运行，再次进入时恢复窗口', '内核管理：默认内核、自动下载更新与版本说明', '回收站的保留时间可在设置中调整'],
        fixed: ['列表加载失败与没有权限时分别给出说明，不再显示为空列表', '窄窗口中表格的操作按钮与代理地址不再折行'] },
      { version: '下一版本', date: '即将发布', area: 'site',
        added: ['产品功能、解决方案、价格、下载、帮助中心与联系我们独立成页', '帮助中心：使用指南、站内搜索与文档反馈'],
        improved: ['登录、注册与重置密码页面重新设计，重置密码分三步完成', '联系表单可选择咨询类型，提交后提供编号'],
        fixed: ['价格页公司版的说明更正为「按分组授权成员」'] },
      { version: '0.1', date: '2026 年 10 月', area: 'desktop',
        added: ['Chromium 与 Firefox 双内核，每个浏览器环境独立的指纹', '代理管理与连接检测', '登录状态加密后同步至云端', '自动化流程、定时任务与窗口同步', '扩展库与本机 API'], improved: [], fixed: [] },
      { version: '0.1', date: '2026 年 10 月', area: 'site',
        added: ['注册、登录与邮箱验证', '套餐、结账与发票', '账户与团队邀请'], improved: [], fixed: [] }
    ] as { version: string; date: string; area: 'desktop' | 'site'; added: string[]; improved: string[]; fixed: string[] }[],
    subscribe: { title: '订阅更新通知', body: '输入邮箱，获取 Folio 的版本更新与功能动态。', placeholder: '请输入邮箱地址', soon: '即将开放' }
  },

  docs: {
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
        ['POST', '/api/v1/profiles/{编号}/start', '按客户端标准流程打开环境（占用锁、恢复登录状态、连接代理），返回 protocol、wsEndpoint；Chromium 环境另返回 debuggerAddress。已通过 API 打开的环境返回相同地址。默认只打开一个空白页；加参数 ?restoreTabs=1 可恢复上次关闭时的标签页。'],
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
    }
  },

  legal: {
    tbc: '待确认',
    privacy: {
      title: '隐私政策',
      draft: '本页为草稿，依据 Folio 当前的数据处理方式整理；标注「待确认」的事项尚未确定，正式文本审核后发布。',
      toc: '目录',
      sections: [
        { id: 'collect', title: '信息收集', lead: '本节说明使用 Folio 时我们处理的信息类别。',
          table: { head: ['数据类别', '包含内容', '保存方式'],
          rows: [
            ['账号信息', '注册邮箱、密码、界面语言与邮箱验证状态。', '密码仅保存不可逆的哈希值。'],
            ['登录设备', '客户端类型、设备名称与最近使用时间。', '登录凭证仅保存摘要，退出登录后失效。'],
            ['团队与套餐', '团队名称、成员与角色、分组授权、套餐与付款记录。', '付款记录仅保存卡组织与卡号末四位。'],
            ['浏览器环境与代理', '环境名称、指纹参数、标签与备注；代理地址、账号密码与检测结果（出口 IP 与所在地区）；启用云端同步的环境，另含登录状态（Cookie、本地存储等）。', '代理密码与登录状态加密后存储。'],
            ['操作日志', '成员在团队内的操作及所用设备名称。', '按套餐保留：体验版 7 天、工作室版 30 天、公司版 1 年。'],
            ['官网 Cookie', '保持官网登录状态的会话 Cookie。', '勾选「记住登录」时保留 30 天，否则关闭浏览器后失效。'],
            ['联系与反馈', '联系表单中的姓名、邮箱、团队规模与需求描述；帮助文档的「是否有帮助」评价。', '文档评价不关联账号。']
          ] as string[][] } },
        { id: 'use', title: '使用目的', lead: '本节说明上述信息的用途。上述信息不用于广告投放。',
          table: { head: ['数据类别', '使用目的'],
          rows: [
            ['账号信息', '注册与登录、验证邮箱、重置密码，以及发送验证码与团队邀请邮件。'],
            ['登录设备', '显示环境正在哪台电脑上使用，并让定时任务在指定的电脑上运行。'],
            ['团队与套餐', '按角色与分组控制访问范围、计算套餐额度、开具发票与处理退款。'],
            ['浏览器环境与代理', '在您的电脑上按配置打开浏览器环境、在团队成员之间同步登录状态，以及检测代理连接。'],
            ['操作日志', '供有相应权限的成员查看操作记录、排查问题。'],
            ['联系与反馈', '回复您的咨询，改进帮助文档。']
          ] as string[][] } },
        { id: 'store', title: '存储与保护', lead: '本节说明信息的存储方式与保护措施。',
          items: [
            ['存储位置', null],
            ['保护措施', '账号密码仅保存哈希值；代理密码与浏览器登录状态使用 AES-256-GCM 加密后存储；导出文件由您设置的口令加密，服务器不保存该口令。'],
            ['保存期限', '操作日志按套餐保留；移入回收站的环境在设定天数后彻底删除（默认 30 天）；其他信息的保存期限待确认。']
          ] as [string, string | null, string?][] },
        { id: 'share', title: '共享情况', lead: '本节说明信息是否会提供给第三方。',
          items: [
            ['对外出售', '我们不出售用户数据。'],
            ['团队内共享', '您在团队中创建的浏览器环境与代理，团队中有相应权限的成员可以查看和使用。'],
            ['邮件、存储与支付服务商', null],
            ['依法披露', null]
          ] as [string, string | null, string?][] },
        { id: 'rights', title: '您的权利', lead: '本节说明您如何查看、更正、导出与删除自己的信息。',
          items: [
            ['查看', '在账户页查看注册邮箱、所在团队与付款记录；有相应权限的成员可在工作台查看操作日志。'],
            ['更正', '在工作台修改浏览器环境、代理与团队信息；忘记密码时可通过邮箱验证重新设置。'],
            ['导出', '有导出权限的成员可将团队的浏览器环境导出为加密文件。'],
            ['删除', '浏览器环境与代理可随时删除；注销账号请通过「联系我们」提交申请，处理时限待确认。']
          ] as [string, string | null, string?][] },
        { id: 'contact', title: '联系我们', lead: '如对本政策或个人信息的处理有疑问，可通过以下方式联系我们。',
          items: [
            ['联系表单', '官网「联系我们」页面', 'contact/'],
            ['联系邮箱', null],
            ['运营主体', null]
          ] as [string, string | null, string?][] }
      ],
      version: '版本', effective: '生效日期'
    },
    terms: {
      title: '服务条款', lead: '本条款说明您使用 Folio 产品与服务时的权利与义务。',
      draft: ['本页为草稿，正式条款审核后发布。', '以下内容依据 Folio 当前的产品规则整理；标注「待确认」的事项尚未确定。'],
      sections: [
        { title: '服务范围', body: ['Folio 提供浏览器环境管理服务，包括 Windows 与 macOS 客户端、浏览器环境与代理管理、登录状态云端同步、团队协作与本机 API。', '各套餐包含的功能与额度以价格页为准。'] },
        { title: '账号管理', body: ['注册须使用本人有效的邮箱并完成验证。请妥善保管密码，账号下发生的操作由账号持有人负责。', '团队所有者负责管理成员的角色与授权范围。发现账号异常时，请及时重置密码并联系我们。'] },
        { title: '使用规范', body: ['使用 Folio 访问第三方网站与平台时，须遵守适用的法律法规及相关平台的规则。', '不得利用 Folio 从事违法活动、侵害他人合法权益，或干扰 Folio 服务的正常运行。'] },
        { title: '套餐与费用', body: ['体验版免费使用。付费套餐按月或按年计费，到期自动续费，直至取消；取消后，套餐在当前计费周期结束时停止续费。', '每个团队可免费体验工作室版 7 天。最近一笔付款可在付款后 7 天内申请退款，套餐恢复至该笔付款之前的状态。', '价格以价格页为准，不含当地税费。'] },
        { title: '服务变更与终止', body: ['我们可能调整产品功能或本条款；重大变更的通知方式与生效安排待确认。', '您可以随时停止使用 Folio 并取消订阅。违反本条款时暂停或终止服务的规则待确认。'] },
        { title: '责任与争议', body: ['责任限制、适用法律与争议解决方式待确认。'] }
      ],
      note: '本节为草稿，正式表述待审核。',
      effective: '生效日期', effectiveBody: '正式条款发布时确定生效日期。'
    }
  },

  notFound: {
    title: '页面未找到', lead: '您访问的页面可能已迁移，或链接地址有误。',
    home: '返回首页', help: '访问帮助中心', more: '常用页面', links: ['产品功能', '下载客户端', '联系我们']
  },

  errors: {
    email_taken: '该邮箱已注册，请直接登录。',
    invalid_credentials: '邮箱或密码不正确，请检查后重试。',
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
    codeMissing: '请填写 6 位验证码。', passwordMismatch: '两次输入的密码不一致。', consentMissing: '请先阅读并同意服务条款和隐私政策。',
    network: '无法连接 Folio，请检查网络后重试。',
    wrong_account: '该邀请发送至其他邮箱。',
    email_unverified: '请先验证邮箱。',
    invitation_expired: '该邀请已过期，请联系邀请人重新发送。',
    seat_limit: '团队席位已满，请联系所有者升级套餐。',
    mail_unavailable: '邮件发送失败，请稍后重试。',
    internal: '服务暂时异常，请稍后重试。'
  }
};
