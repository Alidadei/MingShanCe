/* 名山册 · 山峰数据 */
'use strict';

const MOUNTAINS = [
  {
    id: 'taishan',
    name: '泰山',
    subtitle: '五岳之首 · 帝王封禅之地',
    province: '山东 · 泰安',
    region: '华东',
    elevation: 1545,
    difficulty: 3,
    distance: 9.5,
    duration: '4-6 小时',
    scenery: 4.9,
    bestSeason: '4-6 月、9-11 月',
    tags: ['五岳', '看日出', '文化名山', '夜爬'],
    emoji: '🌄',
    colors: ['#ff9d6e', '#ffe0b0', '#b06a3b', '#7a4629'],
    description: '泰山为五岳之首，素有“天下第一山”之称。从红门出发的经典中路徒步线全程约 9.5 公里，六千余级石阶串联斗母宫、中天门、十八盘，直至南天门与玉皇顶。夜爬泰山等待日出，是无数登山爱好者的启蒙之旅。',
    tips: [
      '山顶温差大，即使夏季也建议带一件外套',
      '夜爬约 22 点从红门出发，日出前抵达日观峰刚刚好',
      '十八盘台阶陡峭，走“之”字形可明显节省体力',
    ],
  },
  {
    id: 'huashan',
    name: '华山',
    subtitle: '奇险天下第一山',
    province: '陕西 · 渭南',
    region: '西北',
    elevation: 2154,
    difficulty: 5,
    distance: 12,
    duration: '6-8 小时（全程徒步）',
    scenery: 4.9,
    bestSeason: '4-6 月、9-10 月',
    tags: ['五岳', '长空栈道', '花岗岩', '险峰'],
    emoji: '🧗',
    colors: ['#8e7cc3', '#d8cff0', '#8a86a8', '#565b73'],
    description: '自古华山一条路。千尺幢、百尺峡、老君犁沟等险段相连，长空栈道悬于垂直崖壁之上，鹞子翻身挑战每一位登山者的胆量。建议西峰索道上、北峰索道下，一日遍览东西南北中五峰。',
    tips: [
      '长空栈道需另购安全绳票，旺季排队较久',
      '雨雾天气部分险段可能临时关闭，出发前查公告',
      '全程攀爬铁索，务必带一副手套',
    ],
  },
  {
    id: 'huangshan',
    name: '黄山',
    subtitle: '五岳归来不看山，黄山归来不看岳',
    province: '安徽 · 黄山市',
    region: '华东',
    elevation: 1864,
    difficulty: 4,
    distance: 14,
    duration: '7-9 小时（两日更佳）',
    scenery: 5.0,
    bestSeason: '3-5 月、9-11 月',
    tags: ['奇松', '云海', '日出', '温泉'],
    emoji: '🌊',
    colors: ['#8fc3dd', '#eaf6fa', '#7fa8b8', '#4f7583'],
    description: '黄山集奇松、怪石、云海、温泉、冬雪五绝于一身。前山雄伟、后山秀丽，迎客松、光明顶、始信峰与西海大峡谷是精华所在。雨后初晴的清晨，站在光明顶看云海翻涌，是黄山给登山者的最高礼遇。',
    tips: [
      '西海大峡谷冬季部分封闭，行前确认开放情况',
      '山顶住宿紧张，看日出需提前预订',
      '云海多出现在雨雪后放晴的清晨，可关注天气预报碰运气',
    ],
  },
  {
    id: 'emeishan',
    name: '峨眉山',
    subtitle: '四大佛教名山之一 · 普贤道场',
    province: '四川 · 乐山',
    region: '西南',
    elevation: 3079,
    difficulty: 4,
    distance: 50,
    duration: '2 天（全程徒步）',
    scenery: 4.8,
    bestSeason: '4-10 月',
    tags: ['佛教名山', '金顶', '猴群', '朝圣'],
    emoji: '🐘',
    colors: ['#f2d488', '#fdf3d0', '#7ba05b', '#4c6f3f'],
    description: '峨眉山是普贤菩萨道场，从报国寺徒步至金顶约需两日，沿途古寺林立、林深雾绕。金顶十方普贤像庄严宏伟，日出、云海、佛光、圣灯并称峨眉四大奇观。',
    tips: [
      '生态猴区注意收好食物和塑料袋，避免被猴群抢夺',
      '山脚到金顶海拔落差近 2600 米，防寒防雨都要准备',
      '体力有限可乘景区大巴至雷洞坪，再步行上金顶',
    ],
  },
  {
    id: 'wugongshan',
    name: '武功山',
    subtitle: '云中草原 · 十万亩高山草甸',
    province: '江西 · 萍乡',
    region: '华东',
    elevation: 1918,
    difficulty: 3,
    distance: 25,
    duration: '2 天（穿越线）',
    scenery: 4.7,
    bestSeason: '5-6 月、9-10 月',
    tags: ['高山草甸', '露营', '星空', '穿越'],
    emoji: '⛺',
    colors: ['#79b4b2', '#dff2ea', '#74b56f', '#4d8b57'],
    description: '武功山以十万亩高山草甸闻名，春夏绿浪翻滚，秋季金黄一片。经典穿越线从沈子村到明月山，绝望坡与发云界是全程精华，山顶星空与日出云海令人难忘，帐篷节已成徒步圈盛事。',
    tips: [
      '山顶风大且无遮挡，帐篷务必选抗风款并打好地钉',
      '穿越线补给点少，需按计划背足水和食物',
      '9-10 月草甸金黄，是一年中最美的季节',
    ],
  },
  {
    id: 'xiangshan',
    name: '香山',
    subtitle: '北京最亲民的赏秋地',
    province: '北京 · 海淀',
    region: '华北',
    elevation: 575,
    difficulty: 1,
    distance: 5,
    duration: '2-3 小时',
    scenery: 4.3,
    bestSeason: '10 月中旬-11 月上旬',
    tags: ['红叶', '亲子', '城市周边'],
    emoji: '🍁',
    colors: ['#f2a65a', '#fbd9b0', '#d1603d', '#96351d'],
    description: '香山公园距北京城区不远，香炉峰海拔虽只有 575 米，视野却极佳。每年 10 月中旬至 11 月上旬红叶漫山，登高远眺西山层林尽染，是北京秋天的仪式感所在。',
    tips: [
      '红叶季周末人流巨大，尽量工作日或清晨早出发',
      '北门缆车可节省体力，适合带老人孩子',
      '山上补给点价格偏高，建议自带饮水',
    ],
  },
  {
    id: 'yuelushan',
    name: '岳麓山',
    subtitle: '城市里的千年名山',
    province: '湖南 · 长沙',
    region: '华中',
    elevation: 300,
    difficulty: 1,
    distance: 4,
    duration: '1-2 小时',
    scenery: 4.2,
    bestSeason: '11-12 月（枫叶）',
    tags: ['爱晚亭', '岳麓书院', '夜爬', '免费'],
    emoji: '📖',
    colors: ['#9ad0ec', '#e8f6fd', '#8bc34a', '#558b2f'],
    description: '岳麓山坐落长沙城中，山脚岳麓书院千年弦歌不绝，爱晚亭因“停车坐爱枫林晚”而得名。免费开放、交通便利，白天看枫、傍晚看日落、夜里数星星，是长沙人最日常的山。',
    tips: [
      '夜爬建议结伴并带头灯，主路有灯但支路较暗',
      '秋季爱晚亭一带枫叶正红，最佳观赏期在 12 月初',
      '山顶观景台可俯瞰橘子洲与湘江全景',
    ],
  },
  {
    id: 'baiyunshan',
    name: '白云山',
    subtitle: '广州绿肺 · 羊城第一秀',
    province: '广东 · 广州',
    region: '华南',
    elevation: 382,
    difficulty: 1,
    distance: 6,
    duration: '2-3 小时',
    scenery: 4.1,
    bestSeason: '10 月-次年 3 月',
    tags: ['城市公园', '亲子', '晨运'],
    emoji: '🌿',
    colors: ['#a5c8e8', '#eef7ff', '#6fae6f', '#3f7d4a'],
    description: '白云山是广州市区最大的自然山地公园，摩星岭为最高点。晨雾缭绕时如置身白云之间，故得此名。索道、步道与盘山公路四通八达，晨运、遛娃、看日落皆宜，老少咸宜。',
    tips: [
      '清晨登山凉快人少，是本地晨运黄金时段',
      '南门索道排队人少，可作备选',
      '摩星岭山顶广场是看日落的经典机位',
    ],
  },
  {
    id: 'qingchengshan',
    name: '青城山',
    subtitle: '青城天下幽 · 道教发源地',
    province: '四川 · 都江堰',
    region: '西南',
    elevation: 1260,
    difficulty: 2,
    distance: 8,
    duration: '3-4 小时',
    scenery: 4.5,
    bestSeason: '4-10 月',
    tags: ['道教名山', '避暑', '世界遗产'],
    emoji: '☯️',
    colors: ['#a8c8b8', '#e4f1e7', '#5f8d6e', '#39634a'],
    description: '青城山是道教发源地之一，“青城天下幽”名不虚传。前山宫观林立、香火鼎盛，后山飞泉幽谷、人少清净，与都江堰同列世界文化遗产。盛夏山间清凉，是成都人的避暑后花园。',
    tips: [
      '前山看文化、后山看风景，时间有限建议择一深度游',
      '月城湖坐船可省一段平路，带老人孩子推荐',
      '夏季多雨，出发前留意天气并备防滑鞋',
    ],
  },
  {
    id: 'lushan',
    name: '庐山',
    subtitle: '飞流直下三千尺',
    province: '江西 · 九江',
    region: '华东',
    elevation: 1474,
    difficulty: 3,
    distance: 20,
    duration: '2 天',
    scenery: 4.7,
    bestSeason: '5-9 月（避暑）',
    tags: ['瀑布', '云雾', '避暑', '云中山城'],
    emoji: '💧',
    colors: ['#9fb8c8', '#e6eef2', '#6a8f9e', '#43677a'],
    description: '庐山以云雾、瀑布与老别墅群闻名。三叠泉落差 155 米气势磅礴，含鄱口是观日出绝佳位置，牯岭镇则像一座云中山城。李白一句“飞流直下三千尺”，让庐山瀑布名传千年。',
    tips: [
      '三叠泉台阶往返较累，量力而行并留足时间',
      '山区常年多雾，备好防滑鞋和轻便雨衣',
      '观光车票按有效期售卖，按行程天数购买更划算',
    ],
  },
  {
    id: 'tianmenshan',
    name: '天门山',
    subtitle: '天门洞开 · 通天大道',
    province: '湖南 · 张家界',
    region: '华中',
    elevation: 1518,
    difficulty: 2,
    distance: 6,
    duration: '3-4 小时（含栈道）',
    scenery: 4.8,
    bestSeason: '4-6 月、9-10 月',
    tags: ['天门洞', '玻璃栈道', '索道', '999 级天梯'],
    emoji: '🚡',
    colors: ['#95a5d0', '#e0e4f5', '#7d6fb0', '#544a86'],
    description: '天门山索道全长 7455 米，堪称世界最长高山客运索道之一。999 级上天梯直通天门洞，玻璃栈道悬于千米绝壁，鬼谷栈道云雾缭绕，是张家界最震撼的城市山岳景观。',
    tips: [
      '玻璃栈道需现场购买鞋套（5 元）',
      '旺季索道排队久，建议赶早上第一批',
      '山顶气温明显低于市区，即使夏天也带件薄外套',
    ],
  },
  {
    id: 'siguniangshan',
    name: '四姑娘山大峰',
    subtitle: '5000 米级入门雪山',
    province: '四川 · 阿坝',
    region: '西南',
    elevation: 5025,
    difficulty: 5,
    distance: 16,
    duration: '3 天（含海拔适应）',
    scenery: 4.9,
    bestSeason: '5-6 月、9-10 月',
    tags: ['雪山', '冰川', '高原', '需向导'],
    emoji: '🏔️',
    colors: ['#bfe3f2', '#f4fbff', '#a8cfe0', '#7ea8c0'],
    description: '四姑娘山大峰是公认的 5000 米级入门雪山，技术要求低但海拔不低。从海子沟进山，沿途可远眺幺妹峰与冰川，凌晨冲顶看云海日出，是许多山友的人生清单第一座雪山。',
    tips: [
      '务必聘请持证向导，并预留 1-2 天适应海拔',
      '出现高反及时下撤，量力而行不逞强',
      '冰爪、头灯、羽绒、手套等装备缺一不可',
    ],
  },
  {
    id: 'hengshan_n',
    name: '恒山',
    subtitle: '北岳恒山 · 悬空奇观',
    province: '山西 · 大同',
    region: '华北',
    elevation: 2016,
    difficulty: 2,
    distance: 10,
    duration: '4-5 小时',
    scenery: 4.4,
    bestSeason: '5-10 月',
    tags: ['五岳', '悬空寺', '边塞'],
    emoji: '🕌',
    colors: ['#d9b382', '#f4e3c8', '#a8825a', '#6f5236'],
    description: '北岳恒山地处塞上，山势雄浑苍茫。山下悬空寺如浮雕嵌于翠屏峰崖壁，建成 1500 余年屹立不倒，李白醉题“壮观”二字。果老岭、姑嫂崖等景点串起道教文化与边塞风光。',
    tips: [
      '悬空寺登临需另购票且每日限流，建议提前预约',
      '大同早晚温差大，夏季也备一件外套',
      '可与云冈石窟串成一线，安排两天更从容',
    ],
  },
  {
    id: 'hengshan_s',
    name: '衡山',
    subtitle: '南岳独秀 · 香火千年',
    province: '湖南 · 衡阳',
    region: '华中',
    elevation: 1300,
    difficulty: 2,
    distance: 12,
    duration: '4-6 小时',
    scenery: 4.5,
    bestSeason: '5-10 月、12-2 月（雾凇）',
    tags: ['五岳', '祝融峰', '日出', '祈福'],
    emoji: '🕯️',
    colors: ['#98d8bb', '#e8f9f0', '#6db389', '#3f8563'],
    description: '南岳衡山以“秀”著称，祝融峰之高、藏经殿之秀、水帘洞之奇、方广寺之深并称“衡山四绝”。山上香火千年不绝，登顶祝融峰看日出云海，是湘中一带山友的经典周末。',
    tips: [
      '冬季雾凇季路面结冰，注意保暖与防滑',
      '夜爬看日出的人很多，结伴同行更安全',
      '山脚南岳大庙值得顺路一游',
    ],
  },
  {
    id: 'songshan',
    name: '嵩山',
    subtitle: '中岳嵩山 · 禅宗祖庭',
    province: '河南 · 登封',
    region: '华中',
    elevation: 1491,
    difficulty: 3,
    distance: 8,
    duration: '4-5 小时',
    scenery: 4.5,
    bestSeason: '4-6 月、9-11 月',
    tags: ['五岳', '少林寺', '三皇寨', '书卷崖'],
    emoji: '🥋',
    colors: ['#d8c8a8', '#f3ecda', '#b09b72', '#7a6a4a'],
    description: '中岳嵩山是儒释道三教荟萃之地，山脚少林寺名扬天下。三皇寨栈道悬于书卷崖之上，连天大峡谷奇峰林立；太室山峻极顶大气磅礴，嵩阳书院更添千年文脉。',
    tips: [
      '三皇寨吊桥段悬空较高，恐高者提前评估路线',
      '少林寺加塔林半天即可逛完，可与大环线组合',
      '少室山步道路面碎石多，穿抓地好的登山鞋',
    ],
  },
  {
    id: 'changbaishan',
    name: '长白山',
    subtitle: '关东第一山 · 天池圣境',
    province: '吉林 · 延边',
    region: '东北',
    elevation: 2691,
    difficulty: 3,
    distance: 8,
    duration: '1 天（北坡/西坡）',
    scenery: 4.9,
    bestSeason: '6-9 月（冬季滑雪温泉）',
    tags: ['天池', '火山', '温泉', '林海'],
    emoji: '🌋',
    colors: ['#9fc9e8', '#eaf5fc', '#7fa8c0', '#4f7590'],
    description: '长白山是中朝界山，山顶天池如碧玉镶嵌于火山口，十六峰环列。北坡瀑布温泉、西坡高山花园、谷底林海各具风韵，登主峰俯瞰天池是东北旅行的高光时刻。',
    tips: [
      '天池天气多变，能否一睹全貌全凭运气，多留半天余量',
      '西坡 1442 级台阶上去视野最开阔，北坡可乘车直达',
      '山顶风大温低，夏季也要备防风外套',
    ],
  },
  {
    id: 'qianshan',
    name: '千山',
    subtitle: '东北明珠 · 弥勒道场',
    province: '辽宁 · 鞍山',
    region: '东北',
    elevation: 708,
    difficulty: 1,
    distance: 6,
    duration: '3-4 小时',
    scenery: 4.3,
    bestSeason: '4-10 月',
    tags: ['寺庙', '奇峰', '亲子', '城市周边'],
    emoji: '🛕',
    colors: ['#b8d8b8', '#eef7ee', '#88aa8a', '#55775a'],
    description: '千山素有“东北明珠”之称，九百九十九座峰如莲花叠翠，五大禅林古刹散落其间。峰奇石怪、松古泉清，天然弥勒大佛更是奇观，是辽东最亲民的登山胜地。',
    tips: [
      '五佛顶是最高点，缆车可省一半体力',
      '大佛景区与中部核心区分开售票，按体力取舍',
      '春季梨花盛开时最上镜',
    ],
  },
  {
    id: 'wutaishan',
    name: '五台山',
    subtitle: '四大佛教名山之首 · 华北屋脊',
    province: '山西 · 忻州',
    region: '华北',
    elevation: 3061,
    difficulty: 3,
    distance: 50,
    duration: '2-3 天（大朝台）',
    scenery: 4.6,
    bestSeason: '5-9 月',
    tags: ['佛教名山', '朝台', '清凉山', '徒步'],
    emoji: '🙏',
    colors: ['#e8c98a', '#f9efd8', '#b0925e', '#7d6438'],
    description: '五台山由五座台顶环抱而成，文殊菩萨道场，北台叶斗峰海拔 3061 米为华北最高。徒步大朝台串联五台，经幡猎猎、云海佛光，是山友心中的朝圣经典线。',
    tips: [
      '大朝台全程约 50 公里，顺时针逆时针各有讲究，提前做功课',
      '台顶昼夜温差极大，盛夏夜温也可近 0 度',
      '台怀镇寺庙群集中，体力有限可只做小朝台',
    ],
  },
  {
    id: 'xiaowutaishan',
    name: '小五台山',
    subtitle: '河北屋脊 · 华北户外圣地',
    province: '河北 · 张家口',
    region: '华北',
    elevation: 2882,
    difficulty: 5,
    distance: 25,
    duration: '2 天（重装穿越）',
    scenery: 4.5,
    bestSeason: '6-9 月',
    tags: ['重装', '金莲花', '穿越', '华北之巅'],
    emoji: '⛰️',
    colors: ['#a8c8a0', '#edf5ea', '#7a9a72', '#4c6b45'],
    description: '小五台山五峰簇立，东台海拔 2882 米为河北之巅。这里是华北重装徒步的试金石，七月金莲花开满山脊，裸岩草甸云雾相接，风光与强度并称华北之最。',
    tips: [
      '属国家级自然保护区，进山需提前登记备案',
      '山脊无水源遮蔽，重装需带足水与防风装备',
      '天气多变，雷雨季务必规划撤退路线',
    ],
  },
  {
    id: 'lingshan',
    name: '东灵山',
    subtitle: '北京之巅 · 高山草甸',
    province: '北京 · 门头沟',
    region: '华北',
    elevation: 2303,
    difficulty: 2,
    distance: 10,
    duration: '4-6 小时',
    scenery: 4.2,
    bestSeason: '5-10 月',
    tags: ['高山草甸', '北京之巅', '露营', '观星'],
    emoji: '🌄',
    colors: ['#a5c8b8', '#ecf5ef', '#76998a', '#47695a'],
    description: '东灵山海拔 2303 米，是北京地区的最高峰。山顶草甸平缓开阔，春夏野花铺地，秋季金黄一片，从江水河村登顶往返轻松，是京郊看星星看云海的绝佳去处。',
    tips: [
      '江水河村上山线路最短，新手也友好',
      '山顶风大，露营需抗风帐篷并看天气预报',
      '秋冬季节防火期部分线路封闭，行前确认',
    ],
  },
  {
    id: 'kongtongshan',
    name: '崆峒山',
    subtitle: '道教第一山 · 丝路雄关',
    province: '甘肃 · 平凉',
    region: '西北',
    elevation: 2123,
    difficulty: 2,
    distance: 7,
    duration: '4-5 小时',
    scenery: 4.4,
    bestSeason: '5-10 月',
    tags: ['道教名山', '黄帝问道', '丝路', '古建筑'],
    emoji: '🏯',
    colors: ['#c8b88a', '#f5eedb', '#96855e', '#665a3a'],
    description: '崆峒山西接六盘、东望关中，相传黄帝问道于广成子于此，是道教发祥地之一。雷声峰险、皇城建群，丹崖之上道观层叠，“中华道教第一山”名不虚传。',
    tips: [
      '中台是核心，皇城至香山一线最见气势',
      '可从后山步行上山省索道钱，前山缆车省时',
      '与平凉周边石窟联游更值',
    ],
  },
  {
    id: 'maijishan',
    name: '麦积山',
    subtitle: '秦地林朱之冠 · 东方雕塑馆',
    province: '甘肃 · 天水',
    region: '西北',
    elevation: 1742,
    difficulty: 1,
    distance: 3,
    duration: '2-3 小时',
    scenery: 4.6,
    bestSeason: '4-10 月',
    tags: ['石窟', '世界遗产', '亲子', '丝路'],
    emoji: '🗿',
    colors: ['#c9a87c', '#f4ead6', '#97795a', '#685238'],
    description: '麦积山因形如农家麦垛得名，丝绸之路上的艺术明珠。凌空栈道盘旋于百米崖壁，七千余尊泥塑石刻历经北魏至明清，被誉为“东方雕塑陈列馆”，登临如入空中佛国。',
    tips: [
      '栈道陡窄恐高者量力，参观需按线路单向通行',
      '清晨光线柔和，最适合观窟拍照',
      '可与仙人崖、净土寺串成一日',
    ],
  },
  {
    id: 'helanshan',
    name: '贺兰山',
    subtitle: '塞上屏障 · 岩画长廊',
    province: '宁夏 · 银川',
    region: '西北',
    elevation: 3556,
    difficulty: 4,
    distance: 12,
    duration: '1-2 天',
    scenery: 4.3,
    bestSeason: '5-9 月',
    tags: ['岩画', '边塞', '徒步', '西北风光'],
    emoji: '🐎',
    colors: ['#d8b898', '#f5ece0', '#a08668', '#6e5840'],
    description: '贺兰山雄峙宁夏平原之西，挡住腾格里风沙，造就“塞上江南”。山口岩画绵延千米记录游牧千年，登主峰敖包疙瘩俯瞰大漠与黄河相望，苍凉雄浑是西北独有的气质。',
    tips: [
      '岩画区平缓适合大众，登主峰需向导与充足补给',
      '昼夜温差极大，防晒与保暖并重',
      '苏峪口、贺兰口是主要进山口，缆车可上青松岭',
    ],
  },
  {
    id: 'wudangshan',
    name: '武当山',
    subtitle: '道教第一名山 · 太极祖庭',
    province: '湖北 · 十堰',
    region: '华中',
    elevation: 1612,
    difficulty: 2,
    distance: 9,
    duration: '1-2 天',
    scenery: 4.7,
    bestSeason: '4-6 月、9-11 月',
    tags: ['道教名山', '太极', '世界遗产', '金顶'],
    emoji: '☯️',
    colors: ['#98b8c8', '#e8f2f7', '#6f8fa0', '#42606f'],
    description: '武当山北通秦岭、南接巴山，明成祖“北建故宫、南修武当”成就九宫八观。金顶铜殿鎏金映日，紫霄宫深藏幽谷，张三丰于此创太极，仙山琼阁不负“亘古无双胜境”。',
    tips: [
      '金顶另收门票，日出时云海佛光最美',
      '徒步明神道上金顶约 3 小时，古道石阶保存完好',
      '太子坡至逍遥谷一线清幽，适合慢游',
    ],
  },
  {
    id: 'shennongjia',
    name: '神农架',
    subtitle: '华中屋脊 · 物种基因库',
    province: '湖北 · 神农架林区',
    region: '华中',
    elevation: 3105,
    difficulty: 4,
    distance: 30,
    duration: '2-3 天（穿越）',
    scenery: 4.6,
    bestSeason: '5-10 月',
    tags: ['原始森林', '金丝猴', '避暑', '神农顶'],
    emoji: '🌲',
    colors: ['#8fb89a', '#eaf4ec', '#67967a', '#3d6b52'],
    description: '神农架以神农氏搭架采药得名，华中屋脊之上原始洪荒。神农顶云海翻涌，大九湖湿地如镜，金丝猴穿行林间，传说中野人出没之地，是华中最后的秘境。',
    tips: [
      '景区间距离远，自驾或包车最方便',
      '大九湖晨雾在日出后半小时最美，务必早起',
      '核心保护区禁止擅入，按开放线路游览',
    ],
  },
  {
    id: 'laojunshan',
    name: '老君山',
    subtitle: '伏牛之巅 · 云上金顶',
    province: '河南 · 洛阳',
    region: '华中',
    elevation: 2217,
    difficulty: 2,
    distance: 6,
    duration: '3-5 小时',
    scenery: 4.7,
    bestSeason: '4-6 月、9-11 月、冬季雪景',
    tags: ['道教名山', '金顶', '云海', '雪景'],
    emoji: '⛩️',
    colors: ['#b0a0c8', '#efecf7', '#8578a0', '#564c73'],
    description: '老君山为伏牛山主峰，相传老子归隐修炼于此。十里画屏石峰如林，金顶道观群凌驾云端，雪后“远赴人间惊鸿宴”的雪景火爆全网，是近年最出片的中原名山。',
    tips: [
      '两段索道接力上金顶，徒步爱好者可走十里画屏',
      '雪季金顶银装素裹最震撼，注意防滑保暖',
      '夜爬看日出是年轻人的新玩法，结伴而行',
    ],
  },
  {
    id: 'yuntaishan',
    name: '云台山',
    subtitle: '红石奇峡 · 北方水世界',
    province: '河南 · 焦作',
    region: '华中',
    elevation: 1308,
    difficulty: 1,
    distance: 8,
    duration: '1 天',
    scenery: 4.6,
    bestSeason: '5-9 月（丰水期）',
    tags: ['峡谷', '瀑布', '红石', '世界地质公园'],
    emoji: '💦',
    colors: ['#c89090', '#f7eaea', '#a06a62', '#6e413c'],
    description: '云台山以红石峡丹崖碧水闻名，红岩绝壁间飞瀑清潭相连，314 米的云台天瀑落差惊人。茱萸峰上王维“遥知兄弟登高处”的千古吟咏，让这里既有水灵又有文气。',
    tips: [
      '红石峡单向通行，早上人少体验最佳',
      '丰水期瀑布才壮观，出行前看近期降雨',
      '园区大，景区巴士接驳高效，按线路规划顺序',
    ],
  },
  {
    id: 'jigongshan',
    name: '鸡公山',
    subtitle: '中国四大避暑胜地之一',
    province: '河南 · 信阳',
    region: '华中',
    elevation: 768,
    difficulty: 1,
    distance: 5,
    duration: '2-4 小时',
    scenery: 4.1,
    bestSeason: '6-9 月避暑',
    tags: ['避暑', '老别墅', '民国风情', '亲子'],
    emoji: '🏘️',
    colors: ['#a8c0a0', '#eef5ea', '#7c9674', '#4e6b47'],
    description: '鸡公山雄踞豫楚之间，报晓峰形似雄鸡引颈啼鸣。清末民初各国老别墅散落山间，与庐山、莫干山、北戴河并称四大避暑胜地，盛夏清凉，云海日出皆是寻常。',
    tips: [
      '颐庐与老别墅群是精华，徒步串游约半天',
      '夏季均温 24 度，避暑首选',
      '波尔登森林公园相邻，可顺游',
    ],
  },
  {
    id: 'yandangshan',
    name: '雁荡山',
    subtitle: '海上名山 · 褒中绝胜',
    province: '浙江 · 温州',
    region: '华东',
    elevation: 1056,
    difficulty: 2,
    distance: 8,
    duration: '1-2 天',
    scenery: 4.6,
    bestSeason: '4-6 月、9-11 月',
    tags: ['奇峰', '夜景', '瀑布', '世界地质公园'],
    emoji: '🗻',
    colors: ['#98a8c0', '#ecf0f7', '#6f7f98', '#42526a'],
    description: '雁荡山因山顶雁湖芦苇丛生、秋雁宿之得名，流纹岩地貌造就灵峰奇、灵岩秀、大龙湫飞瀑奇的“雁荡三绝”。日观奇峰夜赏剪影，移步换形堪称东南第一山。',
    tips: [
      '灵峰夜景必须看，剪刀峰日夜形态迥异',
      '大龙湫水量雨后最大，行前留意天气',
      '方洞栈道悬于绝壁，恐高者慎入',
    ],
  },
  {
    id: 'tianmushan',
    name: '天目山',
    subtitle: '大树王国 · 东南佛教名山',
    province: '浙江 · 杭州',
    region: '华东',
    elevation: 1506,
    difficulty: 2,
    distance: 6,
    duration: '3-4 小时',
    scenery: 4.4,
    bestSeason: '4-10 月',
    tags: ['古树', '避暑', '森林', '禅宗'],
    emoji: '🌳',
    colors: ['#9cb890', '#eef5ea', '#71946a', '#456640'],
    description: '天目山东西两峰峰顶各有一池如目而得名，古木参天号称“大树王国”，万年银杏与五代同堂的古柳杉令人惊叹。禅源寺钟声悠远，盛夏均温仅 25 度，是江南清凉秘境。',
    tips: [
      '开山老殿至大树王一线是精华徒步线',
      '原始森林区步道湿滑，穿防滑鞋',
      '夏季避暑一房难求，需提前订住',
    ],
  },
  {
    id: 'moganshan',
    name: '莫干山',
    subtitle: '江南第一山 · 民宿之都',
    province: '浙江 · 湖州',
    region: '华东',
    elevation: 724,
    difficulty: 1,
    distance: 5,
    duration: '2-3 小时',
    scenery: 4.3,
    bestSeason: '4-11 月',
    tags: ['避暑', '竹海', '民宿', '亲子'],
    emoji: '🎋',
    colors: ['#a0c898', '#eef7ec', '#74a06c', '#43703f'],
    description: '莫干山因干将莫邪铸剑传说得名，竹海连山、泉瀑飞漱，与庐山北戴河并列避暑胜地。如今满山精品民宿已成度假地标，剑池飞瀑与民国别墅藏着旧时光。',
    tips: [
      '剑池瀑布与竹海步道半日可游完',
      '周未民宿爆满，务必提前预订',
      '自驾盘山路窄弯多，新手慢行',
    ],
  },
  {
    id: 'laoshan',
    name: '崂山',
    subtitle: '海上第一名山',
    province: '山东 · 青岛',
    region: '华东',
    elevation: 1132,
    difficulty: 2,
    distance: 7,
    duration: '4-6 小时',
    scenery: 4.6,
    bestSeason: '4-10 月',
    tags: ['道教名山', '海岸', '崂山矿泉', '观海'],
    emoji: '🌊',
    colors: ['#88b8d0', '#e8f5fb', '#5f8fa8', '#356078'],
    description: '崂山拔海而立，山海相连，素有“海上名山第一”之誉。巨峰观云海、太清宫访道教全真祖庭、仰口看海天一色，崂山矿泉水泡茶更是一绝，是山与海的双向奔赴。',
    tips: [
      '巨峰、太清、仰口、北九水各成体系，选一深度游',
      '北九水以水见长，丰水期最美',
      '夏季防晒必备，海边紫外线强',
    ],
  },
  {
    id: 'sanqingshan',
    name: '三清山',
    subtitle: '西太平洋边缘最美花岗岩',
    province: '江西 · 上饶',
    region: '华东',
    elevation: 1819,
    difficulty: 3,
    distance: 10,
    duration: '1-2 天',
    scenery: 4.8,
    bestSeason: '4-6 月、9-11 月',
    tags: ['花岗岩', '道教名山', '栈道', '云海'],
    emoji: '🗿',
    colors: ['#b0a8c8', '#f0edf7', '#827aa0', '#514a73'],
    description: '三清山因玉京玉虚玉华三峰如道教三清列坐得名。巨蟒出山、东方女神等花岗岩奇观举世罕见，高空栈道凌空蜿蜒，云雾升腾时恍若仙境，被誉为世界最美的花岗岩廊道。',
    tips: [
      '高空栈道全程约 4 公里，恐高者提前心理建设',
      '日出东方女神侧影最佳机位在玉台',
      '索道旺季排队久，赶早入园',
    ],
  },
  {
    id: 'jinggangshan',
    name: '井冈山',
    subtitle: '革命摇篮 · 雄踞罗霄',
    province: '江西 · 吉安',
    region: '华东',
    elevation: 1597,
    difficulty: 2,
    distance: 9,
    duration: '1-2 天',
    scenery: 4.3,
    bestSeason: '4-10 月',
    tags: ['红色圣地', '杜鹃', '云海', '竹海'],
    emoji: '🌾',
    colors: ['#c8a890', '#f5ede6', '#9a7a62', '#6b4f3c'],
    description: '井冈山地处罗霄山脉中段，群峰竞秀、飞瀑成群，黄洋界云海雄浑，十里杜鹃长廊春日如霞。作为中国革命摇篮，红色史迹与绿色山水在此交相辉映。',
    tips: [
      '黄洋界看云海日出，清晨最佳',
      '四五月杜鹃花海沿十里长廊铺开',
      '核心景区观光车通票制，规划好线路顺序',
    ],
  },
  {
    id: 'longhushan',
    name: '龙虎山',
    subtitle: '道教祖庭 · 丹霞碧水',
    province: '江西 · 鹰潭',
    region: '华东',
    elevation: 1300,
    difficulty: 1,
    distance: 6,
    duration: '1 天',
    scenery: 4.5,
    bestSeason: '4-10 月',
    tags: ['道教名山', '丹霞', '悬棺', '竹筏'],
    emoji: '🐉',
    colors: ['#c89a78', '#f5eadb', '#9a704f', '#6b4830'],
    description: '龙虎山是道教正一派祖庭，张天师世居于此。泸溪河畔丹霞碧水如画廊展开，乘竹筏看仙水岩崖墓悬棺千年之谜，升棺表演与天师府道韵相映成趣，山水人文皆绝。',
    tips: [
      '竹筏漂流是精华，全程约 1 小时慢游',
      '悬棺升棺表演每日数场，留意时刻表',
      '夏季河边暴晒，防晒帽必备',
    ],
  },
  {
    id: 'danxiashan',
    name: '丹霞山',
    subtitle: '丹霞地貌命名地',
    province: '广东 · 韶关',
    region: '华南',
    elevation: 619,
    difficulty: 1,
    distance: 7,
    duration: '1 天',
    scenery: 4.5,
    bestSeason: '4-6 月、9-11 月',
    tags: ['丹霞', '世界遗产', '日出', '情侣峰'],
    emoji: '🪨',
    colors: ['#d08860', '#f7e4d6', '#a05c3a', '#6e3820'],
    description: '丹霞山是全球丹霞地貌的命名地，赤壁丹崖如霞光万丈。阳元石、阴元石天工奇观令人惊叹，锦江碧水绕山而行，晨雾中泛舟江上，山色如染，是世界自然遗产。',
    tips: [
      '长老峰看日出是经典，凌晨需打灯登山',
      '翔龙湖与锦江游船可省不少脚程',
      '夏季炎热，清晨傍晚出游最舒适',
    ],
  },
  {
    id: 'maoershan',
    name: '猫儿山',
    subtitle: '华南之巅 · 漓江源头',
    province: '广西 · 桂林',
    region: '华南',
    elevation: 2141,
    difficulty: 3,
    distance: 10,
    duration: '4-6 小时',
    scenery: 4.5,
    bestSeason: '4-10 月',
    tags: ['华南之巅', '云海', '杜鹃', '露营'],
    emoji: '🐱',
    colors: ['#98c8b0', '#ecf7f1', '#6fa088', '#3f7059'],
    description: '猫儿山海拔 2141 米，为华南第一高峰，漓江、资江、浔江皆发源于此。山巅老界杜鹃林带春日如燃，云海佛光频现，秋看星空冬赏雾凇，是华南山友心中的圣山。',
    tips: [
      '自驾至山门后徒步登顶，夜爬看日出需结伴',
      '山顶气温比桂林市区低 10 度以上，备外套',
      '五六月杜鹃花期为最美季节',
    ],
  },
  {
    id: 'wuzhishan',
    name: '五指山',
    subtitle: '海南之巅 · 雨林秘境',
    province: '海南 · 五指山市',
    region: '华南',
    elevation: 1867,
    difficulty: 4,
    distance: 12,
    duration: '1 天（登顶）',
    scenery: 4.4,
    bestSeason: '11-4 月（旱季）',
    tags: ['热带雨林', '海南之巅', '昌化江源', '黎乡'],
    emoji: '🌴',
    colors: ['#78c0a0', '#e8f7ef', '#4f967a', '#2c6b52'],
    description: '五指山五峰如指撑天，是海南岛的脊梁与昌化江源头。热带原始雨林藤蔓缠绕、板根如墙，登顶之路野趣十足，山巅可望云海漫过千峰，黎苗风情环绕山下。',
    tips: [
      '登顶线路原始需当地向导，雨季蚂蟥多',
      '旱季 11 月至次年 4 月最宜，台风季勿往',
      '昌化江源头栈道平缓，是雨林入门好选择',
    ],
  },
  {
    id: 'putuoshan',
    name: '普陀山',
    subtitle: '海天佛国 · 观音道场',
    province: '浙江 · 舟山',
    region: '华东',
    elevation: 291,
    difficulty: 1,
    distance: 5,
    duration: '1-2 天',
    scenery: 4.6,
    bestSeason: '4-6 月、9-11 月',
    tags: ['佛教名山', '海岛', '观音', '海蚀地貌'],
    emoji: '🙏',
    colors: ['#88b8c8', '#eaf5f8', '#5f8fa0', '#35606f'],
    description: '普陀山孤悬东海莲花洋中，观音菩萨道场，“海天佛国”四字道尽其妙。短姑道头、千步金沙、佛顶山慧济禅寺，山海与梵音相和，是四大佛教名山中最玲珑的一座。',
    tips: [
      '朱家尖蜈蚣峙码头上岛，旺季船票要抢',
      '佛顶山可乘索道，步行香云路千级石阶更虔诚',
      '岛上物价高，可适量自带饮水干粮',
    ],
  },
  {
    id: 'fanjingshan',
    name: '梵净山',
    subtitle: '梵天净土 · 天空之城',
    province: '贵州 · 铜仁',
    region: '西南',
    elevation: 2572,
    difficulty: 3,
    distance: 7,
    duration: '1 天',
    scenery: 4.8,
    bestSeason: '4-6 月、9-11 月',
    tags: ['世界遗产', '弥勒道场', '金顶', '珙桐'],
    emoji: '🛕',
    colors: ['#98a8c8', '#ecf0f7', '#6f7f9a', '#42506b'],
    description: '梵净山是武陵山脉主峰，弥勒菩萨道场，世界自然遗产。红云金顶孤峰擎天，一桥飞架两庙，云瀑禅雾变幻莫测，黔金丝猴与珙桐花藏于原始林间，被誉为“天空之城”。',
    tips: [
      '每日限流，门票索道务必提前网上预订',
      '登金顶石阶陡峭需手脚并用，恐高慎行',
      '山顶天气瞬变，雨衣比雨伞实用',
    ],
  },
  {
    id: 'jinfoshan',
    name: '金佛山',
    subtitle: '南方喀斯特秘境',
    province: '重庆 · 南川',
    region: '西南',
    elevation: 2251,
    difficulty: 2,
    distance: 8,
    duration: '1 天',
    scenery: 4.4,
    bestSeason: '4-10 月（冬季赏雪）',
    tags: ['喀斯特', '世界遗产', '杜鹃', '滑雪'],
    emoji: '🏔️',
    colors: ['#a0b8c8', '#eef4f7', '#75909f', '#476270'],
    description: '金佛山为重庆名山之首，喀斯特桌山地貌世界罕见，世界自然遗产。古佛洞深邃神秘，高山杜鹃春日漫山，冬季山顶积雪可滑雪，是重庆人的避暑赏雪后花园。',
    tips: [
      '索道直达山顶，古佛洞恒温 11 度记得加衣',
      '四月杜鹃花海沿绝壁绽放最壮观',
      '冬季雪期短，想滑雪需盯紧天气预报',
    ],
  },
  {
    id: 'cangshan',
    name: '苍山',
    subtitle: '大理风花雪月之雪',
    province: '云南 · 大理',
    region: '西南',
    elevation: 4122,
    difficulty: 3,
    distance: 18,
    duration: '1 天（玉带路）',
    scenery: 4.7,
    bestSeason: '3-6 月、9-11 月',
    tags: ['洱海', '玉带云游路', '杜鹃', '雪山'],
    emoji: '🏔️',
    colors: ['#98c0d0', '#ebf6fa', '#6f98a8', '#3f6a7a'],
    description: '苍山十九峰横亘大理坝子之西，马龙峰积雪经夏不化，与洱海月共成风花雪月之景。玉带云游路悬于半山，一路俯瞰洱海田园，洗马潭高山杜鹃春末如焰。',
    tips: [
      '感通索道+玉带路一线最经典，俯瞰洱海绝佳',
      '高海拔紫外线强，防晒不可少',
      '洗马潭大索道直达 3900 米，恐高晕高者注意',
    ],
  },
  {
    id: 'jizushan',
    name: '鸡足山',
    subtitle: '迦叶道场 · 佛教灵山',
    province: '云南 · 大理',
    region: '西南',
    elevation: 3248,
    difficulty: 3,
    distance: 12,
    duration: '1-2 天',
    scenery: 4.5,
    bestSeason: '3-6 月、9-11 月',
    tags: ['佛教名山', '日出', '祝圣寺', '朝圣'],
    emoji: '🙏',
    colors: ['#c0b090', '#f5f0e0', '#908060', '#635436'],
    description: '鸡足山前伸三趾后舒一足，形似鸡足而得名，迦叶尊者守衣入定之地。天柱峰金顶寺东观日出、西看苍山洱海、南睹祥云、北望玉龙，四观风光冠绝滇西。',
    tips: [
      '祝圣寺为进山第一站，古刹清幽值得细逛',
      '索道到索道下站后仍需爬升，留足体力',
      '与大理古城串联，两天行程最从容',
    ],
  },
  {
    id: 'habaxueshan',
    name: '哈巴雪山',
    subtitle: '人生第一座雪山首选',
    province: '云南 · 香格里拉',
    region: '西南',
    elevation: 5396,
    difficulty: 5,
    distance: 14,
    duration: '2-3 天（含适应）',
    scenery: 4.7,
    bestSeason: '5-6 月、9-10 月',
    tags: ['雪山', '入门攀登', '雪线', '需向导'],
    emoji: '❄️',
    colors: ['#a8d0e0', '#f0f9fc', '#7fa8b8', '#4f7888'],
    description: '哈巴雪山与玉龙雪山隔虎跳峡相望，攀登难度温和、成功率高，是公认的“人生第一座雪山”。登顶日踏雪坡过碎石，日出时分梅里般的金光洒在峰顶，此生难忘。',
    tips: [
      '需注册向导队，冰雪季技术装备必备',
      '大本营 4100 米，提前一天抵达适应海拔',
      '高反症状明显时果断下撤，山永远都在',
    ],
  },
  {
    id: 'gonggashan',
    name: '贡嘎山',
    subtitle: '蜀山之王 · 雪山之巅',
    province: '四川 · 康定',
    region: '西南',
    elevation: 7556,
    difficulty: 5,
    distance: 45,
    duration: '6-8 天（徒步）',
    scenery: 5.0,
    bestSeason: '5-6 月、9-10 月',
    tags: ['极高山', '蜀山之王', '徒步圣地', '日照金山'],
    emoji: '🏔️',
    colors: ['#a8c0d8', '#f0f6fc', '#7f98b0', '#4f687f'],
    description: '贡嘎山海拔 7556 米，为四川省最高峰，尊为“蜀山之王”。其垂直落差冠绝群山，子梅垭口与冷嘎措的日照金山是摄影师此生必看画面，贡嘎大环线更是中国顶级徒步线。',
    tips: [
      '主峰为技术型攀登仅限专业队伍，普通山友以徒步观山为主',
      '冷嘎措拍倒影日照金山，下午到达等日落',
      '徒步线海拔多在 4000 米以上，防高反装备齐全',
    ],
  },
  {
    id: 'tanglangshan',
    name: '塘朗山',
    subtitle: '深圳湾畔 · 城市绿肺',
    province: '广东 · 深圳',
    region: '华南',
    elevation: 430,
    difficulty: 1,
    distance: 4.5,
    duration: '1.5-2.5 小时',
    scenery: 3.4,
    bestSeason: '10 月-次年 3 月',
    tags: ['亲子', '城市近郊', '夜爬'],
    emoji: '🌳',
    colors: ['#8fce9e', '#e3f4e0', '#4f7d5c', '#2f4f3a'],
    description: '塘朗山郊野公园是深圳南山的城市绿肺，主峰海拔 430 米。龙珠门沿登山道上行，荔枝林与相思树遮荫，登顶塘朗峰可俯瞰深圳湾、华侨城与城市天际线，是闹市里最触手可及的“山野呼吸”。',
    tips: [
      '夜爬看城市灯光很出片，结伴带好手电',
      '登山道约 1.5 小时登顶，盘山公路更平缓适合遛娃',
      '山上无补给，夏季务必带足饮水',
    ],
  },
  {
    id: 'maluanshan',
    name: '马峦山',
    subtitle: '深圳最大瀑布群 · 溪谷秘境',
    province: '广东 · 深圳',
    region: '华南',
    elevation: 590,
    difficulty: 2,
    distance: 9,
    duration: '3-5 小时',
    scenery: 3.8,
    bestSeason: '5-9 月（丰水观瀑）',
    tags: ['瀑布', '亲子', '溪谷'],
    emoji: '💦',
    colors: ['#7fc8c2', '#ddf3ef', '#3f7d78', '#27504c'],
    description: '马峦山郊野公园横跨坪山与盐田，主峰海拔 590 米，坐拥深圳最大的瀑布群。叠翠湖溯溪而上，途经马峦山古村与梅亭，一路溪潭瀑布相伴，登顶可远眺三洲田与大鹏海湾，是深圳山友的周末后花园。',
    tips: [
      '雨季后瀑布最壮观，夏季记得防蚊防滑',
      '古道石阶湿滑，建议穿抓地徒步鞋',
      '可规划从小梅沙方向下山，山海一线一天走完',
    ],
  },
  {
    id: 'wutongshan',
    name: '梧桐山',
    subtitle: '鹏城第一峰 · 云海杜鹃',
    province: '广东 · 深圳',
    region: '华南',
    elevation: 944,
    difficulty: 3,
    distance: 6.5,
    duration: '3.5-5 小时',
    scenery: 4.0,
    bestSeason: '10 月-次年 4 月，3-4 月杜鹃',
    tags: ['看日出', '夜爬', '云海'],
    emoji: '⛰️',
    colors: ['#9db8d8', '#e8f0fa', '#55708f', '#33455c'],
    description: '梧桐山海拔 944 米，是深圳第一高峰。经典泰山涧线溯溪而上、好汉坡连续陡坡直取大梧桐，“鹏城第一峰”石刻前云海翻涌；每年 3-4 月毛棉杜鹃花海漫山，是特区山友的朝圣地。',
    tips: [
      '泰山涧石面湿滑，雨后慎行，好汉坡量力而行',
      '夜爬看日出是保留节目，头灯与外套必带',
      '山顶风大温差明显，登顶后尽快补水添衣',
    ],
  },
  {
    id: 'yushan',
    name: '玉山',
    subtitle: '宝岛之巅 · 中国东海岸最高峰',
    province: '台湾 · 南投/嘉义',
    region: '华东',
    elevation: 3952,
    difficulty: 4,
    distance: 17,
    duration: '2 天（宿排云山庄）',
    scenery: 4.9,
    bestSeason: '4-6 月、9-11 月',
    tags: ['极高山', '看日出', '云海'],
    emoji: '⛰️',
    colors: ['#a8b8d8', '#eef2fb', '#5a6f9a', '#37486b'],
    description: '玉山主峰海拔 3952 米，中国东部最高峰。自塔塔加登山口出发，经白木林、铁杉林与大峭壁抵排云山庄，凌晨摸黑攻顶，主峰顶十面云海。登山需抽签申请许可，是华语山友一生必完登的圣山。',
    tips: [
      '入山许可与排云山庄床位需提前数月申请抽签',
      '风口段冬春季常结冰，冰爪与头灯是标配',
      '海拔上升快，注意高反，慢行多补水',
    ],
  },
  {
    id: 'bogda',
    name: '博格达峰',
    subtitle: '天山明珠 · 天池雪岭',
    province: '新疆 · 昌吉',
    region: '西北',
    elevation: 5445,
    difficulty: 5,
    distance: 30,
    duration: '3-5 天（徒步）',
    scenery: 4.9,
    bestSeason: '6-9 月',
    tags: ['极高山', '雪山', '天池'],
    emoji: '🏔️',
    colors: ['#b8d0e8', '#f0f7fd', '#6f8fb0', '#45597a'],
    description: '博格达峰海拔 5445 米，东部天山最高峰，终年积雪的“天山雪海”。山脚天山天池如翡翠嵌于雪岭云杉之间，传为西王母瑶池；博格达大环线串起冰川、冰湖与花海草甸，是国内顶级雪山徒步线。',
    tips: [
      '天池景区即可远观三峰并立，适合不重装的旅行者',
      '大环线需重装或雇向导，过冰川段务必结组',
      '山里昼夜温差极大，夏季也要备羽绒与防风壳',
    ],
  },
  {
    id: 'yuzhufeng',
    name: '玉珠峰',
    subtitle: '昆仑山东段 · 六千米入门雪山',
    province: '青海 · 格尔木',
    region: '西北',
    elevation: 6178,
    difficulty: 5,
    distance: 20,
    duration: '4-6 天（登山）',
    scenery: 4.7,
    bestSeason: '6-8 月',
    tags: ['极高山', '雪山', '星空'],
    emoji: '🏔️',
    colors: ['#c8d8e8', '#f4f9fd', '#7f95ad', '#4d6076'],
    description: '玉珠峰海拔 6178 米，昆仑山东段最高峰，紧邻青藏线，是山友公认的“人生第一座六千米”。南坡冰川平缓、路线清晰，营地仰望银河横跨雪脊；登顶日回望可可西里方向，荒原与雪峰一望无际。',
    tips: [
      '务必随正规商业登山队，冰爪冰镐安全带齐全',
      '先在格尔木适应两天，防高反是第一要务',
      '青藏铁路与公路沿线即可远眺雪峰，不登山也有风景',
    ],
  },
  {
    id: 'aershan',
    name: '阿尔山',
    subtitle: '大兴安岭腹地 · 火山天池林海',
    province: '内蒙古 · 兴安盟',
    region: '华北',
    elevation: 1711,
    difficulty: 1,
    distance: 5,
    duration: '2-4 小时',
    scenery: 4.5,
    bestSeason: '6-9 月',
    tags: ['红叶', '草甸', '天池', '温泉'],
    emoji: '🌲',
    colors: ['#e8c87f', '#faeed3', '#a8823f', '#6b5226'],
    description: '阿尔山地处大兴安岭西南麓，火山天池、堰塞湖、石塘林与不冻河交织成北国秘境。九月白桦与落叶松把林海染成金黄，冬季雾凇与不冻河温泉同样是奇景；景区栈道平缓好走，是最没有门槛的远方。',
    tips: [
      '9 月中下旬秋色巅峰，驼峰岭天池日落必看',
      '冬季可赏雾凇不冻河，注意车辆防滑与保暖',
      '昼夜温差大，夏季也要带抓绒外套',
    ],
  },
  {
    id: 'namjagbarwa',
    name: '南迦巴瓦峰',
    subtitle: '云中天堂 · 中国最美雪山',
    province: '西藏 · 林芝',
    region: '西南',
    elevation: 7782,
    difficulty: 5,
    distance: 2,
    duration: '1-2 小时（观景）',
    scenery: 5.0,
    bestSeason: '3-4 月（桃花）、10-11 月',
    tags: ['极高山', '日照金山', '桃花'],
    emoji: '🏔️',
    colors: ['#f0b8a8', '#fbe4da', '#b06a55', '#6b4034'],
    description: '南迦巴瓦海拔 7782 米，喜马拉雅山脉东端最高峰，《中国国家地理》评选的“中国最美雪山”之首。巨大的三角形峰体常年藏于云雾，素有“十年九不遇”之说；春季索松村桃花簇拥雪峰，秋季天高云低，日照金山染红峰顶。',
    tips: [
      '见全貌靠运气，住索松村连住两晚提高概率',
      '清晨与日落是拍摄窗口，色季拉山口亦可远眺',
      '属远景观赏型山峰，无需徒步能力也能打卡',
    ],
  },
];

const REGIONS = ['全部', '华东', '华北', '华中', '华南', '西南', '西北'];
const DIFFS = [
  { key: '全部', label: '全部', min: 1, max: 5 },
  { key: '休闲', label: '休闲 🚶', min: 1, max: 2 },
  { key: '进阶', label: '进阶 🎒', min: 3, max: 3 },
  { key: '挑战', label: '挑战 💪', min: 4, max: 5 },
];
const DIFF_LABELS = { 1: '休闲', 2: '轻松', 3: '进阶', 4: '困难', 5: '挑战' };
const WUYUE_IDS = ['taishan', 'huashan', 'hengshan_s', 'hengshan_n', 'songshan'];

/* 山峰坐标 [纬度, 经度]（山顶/主峰附近，用于距离计算） */
const COORDS = {
  taishan: [36.257, 117.101],
  huashan: [34.475, 110.085],
  huangshan: [30.131, 118.160],
  emeishan: [29.523, 103.332],
  wugongshan: [27.465, 114.175],
  xiangshan: [39.992, 116.190],
  yuelushan: [28.185, 112.937],
  baiyunshan: [23.182, 113.297],
  qingchengshan: [30.898, 103.563],
  lushan: [29.565, 115.976],
  tianmenshan: [29.052, 110.498],
  siguniangshan: [31.102, 102.897],
  hengshan_n: [39.674, 113.736],
  hengshan_s: [27.256, 112.683],
  songshan: [34.490, 113.040],
  changbaishan: [42.007, 128.057],
  qianshan: [41.055, 123.133],
  wutaishan: [39.117, 113.527],
  xiaowutaishan: [39.950, 115.033],
  lingshan: [40.058, 115.468],
  kongtongshan: [35.550, 106.616],
  maijishan: [34.356, 106.004],
  helanshan: [38.720, 105.950],
  wudangshan: [32.400, 111.000],
  shennongjia: [31.570, 110.330],
  laojunshan: [33.750, 111.650],
  yuntaishan: [35.430, 113.430],
  jigongshan: [31.820, 114.070],
  yandangshan: [28.370, 121.060],
  tianmushan: [30.340, 119.430],
  moganshan: [30.600, 119.860],
  laoshan: [36.160, 120.620],
  sanqingshan: [28.900, 118.050],
  jinggangshan: [26.560, 114.150],
  longhushan: [28.080, 116.990],
  danxiashan: [25.030, 113.740],
  maoershan: [25.880, 110.410],
  wuzhishan: [18.870, 109.660],
  putuoshan: [29.975, 122.383],
  fanjingshan: [27.920, 108.700],
  jinfoshan: [29.030, 107.180],
  cangshan: [25.680, 100.100],
  jizushan: [25.980, 100.380],
  habaxueshan: [27.320, 100.120],
  gonggashan: [29.600, 101.880],
  tanglangshan: [22.545, 114.017],
  maluanshan: [22.646, 114.330],
  wutongshan: [22.583, 114.198],
  yushan: [23.470, 120.958],
  bogda: [43.180, 88.340],
  yuzhufeng: [36.190, 94.260],
  aershan: [47.170, 119.940],
  namjagbarwa: [29.660, 95.060],
};

/* 步步登峰 · 虚拟挑战山峰（日常爬升沿真实山径剖面前进） */
const CHALLENGES = [
  {
    id: 'taishan', name: '泰山', emoji: '🌄', elevation: 1545, suggest: '约 2 周',
    desc: '把每天的楼梯变成六千级台阶，从红门一路走到玉皇顶。',
    colors: ['#ff9d6e', '#ffe0b0', '#b06a3b', '#7a4629'],
    waypoints: [
      { alt: 250, name: '红门' }, { alt: 847, name: '中天门' }, { alt: 950, name: '云步桥' },
      { alt: 1300, name: '十八盘' }, { alt: 1460, name: '南天门' }, { alt: 1545, name: '玉皇顶' },
    ],
  },
  {
    id: 'huangshan', name: '黄山', emoji: '🌊', elevation: 1864, suggest: '约 3 周',
    desc: '一步一景，向莲花峰顶的云海进发。',
    colors: ['#8fc3dd', '#eaf6fa', '#7fa8b8', '#4f7583'],
    waypoints: [
      { alt: 370, name: '慈光阁' }, { alt: 700, name: '立马桥' }, { alt: 900, name: '半山寺' },
      { alt: 1660, name: '玉屏楼' }, { alt: 1864, name: '莲花峰' },
    ],
  },
  {
    id: 'huashan', name: '华山', emoji: '🧗', elevation: 2154, suggest: '约 4 周',
    desc: '自古华山一条路，垂直的台阶考验每天的你。',
    colors: ['#8e7cc3', '#d8cff0', '#8a86a8', '#565b73'],
    waypoints: [
      { alt: 400, name: '玉泉院' }, { alt: 1200, name: '青柯坪' }, { alt: 1600, name: '千尺幢' },
      { alt: 1614, name: '北峰' }, { alt: 1700, name: '苍龙岭' }, { alt: 2154, name: '南峰' },
    ],
  },
  {
    id: 'emeishan', name: '峨眉山', emoji: '🐘', elevation: 3079, suggest: '约 6 周',
    desc: '全程五十公里的朝圣路，用日常爬升丈量它。',
    colors: ['#f2d488', '#fdf3d0', '#7ba05b', '#4c6f3f'],
    waypoints: [
      { alt: 530, name: '报国寺' }, { alt: 780, name: '清音阁' }, { alt: 1120, name: '洪椿坪' },
      { alt: 1750, name: '仙峰寺' }, { alt: 2430, name: '雷洞坪' }, { alt: 3079, name: '金顶' },
    ],
  },
  {
    id: 'yulong', name: '玉龙雪山', emoji: '❄️', elevation: 5596, suggest: '约 3 个月',
    desc: '从甘海子到扇子陡，一日四季的雪线远征。',
    colors: ['#a8c8dd', '#eef7fb', '#9fc4d8', '#6f97b5'],
    waypoints: [
      { alt: 3100, name: '甘海子' }, { alt: 4506, name: '冰川公园' },
      { alt: 4680, name: '4680 观景台' }, { alt: 5596, name: '扇子陡' },
    ],
  },
  {
    id: 'everest', name: '珠穆朗玛峰', emoji: '🏔️', elevation: 8848, suggest: '约半年',
    desc: '用半年的日常爬升，走完人类最伟大的 8848 米。',
    colors: ['#b8d4e8', '#f0f8ff', '#c8dce8', '#8fb3cc'],
    waypoints: [
      { alt: 5364, name: '大本营' }, { alt: 6065, name: 'C1 营地' }, { alt: 6400, name: 'C2 营地' },
      { alt: 7162, name: 'C3 营地' }, { alt: 7925, name: '南坳' },
      { alt: 8790, name: '希拉里台阶' }, { alt: 8848, name: '顶峰' },
    ],
  },
];

/* ================= 详情页增强数据（app.js 启动时合并进 MOUNTAINS） =================
   peak：主峰名与高程；heritage：UNESCO 名录（世界遗产/世界地质公园）；
   reviews：驴友真实评价——逐字引用原文并附可打开的出处链接，未核验的不录。 */
const ENRICH = {
  "taishan": {
    "peak": "玉皇顶 1532.7m",
    "heritage": "世界文化与自然双重遗产（1987）",
    "reviews": [
      {
        "t": "十八盘非常陡峭，是泰山最艰难的路，下山时多注意安全，铁杆也非常冰凉，记得带手套业。",
        "who": "网易号作者",
        "s": "爬了5次泰山，花3500元亲测的血泪教训攻略，31条建议记得收藏",
        "u": "https://www.163.com/dy/article/HFP6BAB205533JJM.html",
        "d": "2022-08-27"
      },
      {
        "t": "一路上经历了爬到中天门时的雀跃，爬到十八盘时的畏惧、再到南天门时的欢呼。",
        "who": "美篇游记作者「暗香疏影」",
        "s": "2019.8.3泰山夜爬游记",
        "u": "https://www.meipian.cn/2b1bqudj",
        "d": "2019-08-09"
      }
    ]
  },
  "huashan": {
    "peak": "南峰 2154.9m",
    "reviews": [
      {
        "t": "体验感：直通天庭，内质清高，上合太虚。",
        "who": "游记作者 飞行的书卷",
        "s": "知乎专栏《华山第一险长空栈道自由行攻略》",
        "u": "https://zhuanlan.zhihu.com/p/1932092517299492740"
      },
      {
        "t": "许多游客都不听劝告，可是到了长空栈道的中间却后悔了，吓得浑身哆嗦，不敢再往前走一步。",
        "who": "旅游自媒体",
        "s": "网易《去华山旅游，不要随便体验长空栈道，老导游：不听劝的大多后悔了》",
        "u": "https://www.163.com/dy/article/E1V9HJUK05444UO5.html"
      }
    ]
  },
  "huangshan": {
    "peak": "莲花峰 1864.8m",
    "heritage": "世界文化与自然双重遗产（1990）",
    "reviews": [
      {
        "t": "其实，黄山真的是四季都有不同的景色，各个天气都有各个天气的美，有能力的人，是值得多去几次的，中国的名山我基本去了个遍，黄山目前在我心中还是名列前茅的~",
        "who": "驴友",
        "s": "黄山旅游硬核攻略（大概是全网最详细，含部分照片）",
        "u": "https://zhuanlan.zhihu.com/p/606117069",
        "d": null
      },
      {
        "t": "西海照片比较少，原因是真的太累了，累到没有心情拍太多照片~",
        "who": "驴友",
        "s": "黄山旅游硬核攻略（大概是全网最详细，含部分照片）",
        "u": "https://zhuanlan.zhihu.com/p/606117069",
        "d": null
      }
    ]
  },
  "emeishan": {
    "peak": "万佛顶 3099m",
    "heritage": "世界文化与自然双重遗产（1996，峨眉山-乐山大佛）",
    "reviews": [
      {
        "t": "峨眉山步步自然风光，步步人文古迹，寺庙大都成百上千年的历史，还都有其美妙故事和传说，让人留恋，留恋，不舍。",
        "who": "野外大叔",
        "s": "峨眉山徒步回忆录｜朝圣峨眉山",
        "u": "https://www.2bulu.com/community/gotohuatinfo.htm?id=75885521&type=2",
        "d": "2024-07-18"
      },
      {
        "t": "前四次到峨眉山都没有专门在金顶看日出，前一天还在下雨，今天能有这样的天气真是幸运，不枉我爬了两天到顶。",
        "who": "王鹤",
        "s": "这可能是你见过的最详尽的峨眉山徒步攻略",
        "u": "https://www.sohu.com/a/108443346_355516",
        "d": "2016-07-31"
      }
    ]
  },
  "wugongshan": {
    "heritage": "世界地质公园（2019）",
    "reviews": [
      {
        "t": "武功山以10万亩高山草甸为天然舞台……为\"云中草原、户外天堂\"注入鲜活未来感。",
        "who": "江西日报报道",
        "s": "人民网《武功山第十八届帐篷季何以吸引八方游客？》",
        "u": "http://jx.people.com.cn/n2/2025/0923/c186330-41360345.html"
      }
    ]
  },
  "xiangshan": {
    "peak": "香炉峰 575m",
    "reviews": [
      {
        "t": "我和儿子汗流浃背，数着台阶一路攀登，终于抵达主峰——香炉峰。",
        "who": "散文作者「任静」",
        "s": "北京游记之一：登香山",
        "u": "https://www.sohu.com/a/423946707_748597",
        "d": "2020-10-11"
      }
    ]
  },
  "baiyunshan": {
    "peak": "摩星岭 382m",
    "reviews": [
      {
        "t": "放松，慢慢爬，唔使急，主要靠耐力。最好单独爬，唔好同行，一同行容易分心分神，互相拖累。慢慢来啦，后生仔。",
        "who": "65岁本地登山大叔（文中受访者）",
        "s": "白云山摩星岭",
        "u": "https://news.sohu.com/a/902933184_121123815",
        "d": "2025-06-10"
      }
    ]
  },
  "qingchengshan": {
    "peak": "老君阁 1260m",
    "heritage": "世界文化遗产（2000，青城山-都江堰）",
    "reviews": [
      {
        "t": "通往老君阁的路狭窄陡峭，这对于不常运动的我来说挑战极大。一边调整上山的节奏，一边安抚躁动的心情。",
        "who": "美篇游记作者「默守」",
        "s": "青城山游记",
        "u": "https://www.meipian.cn/39bu9ko9",
        "d": "2020-11-14"
      }
    ]
  },
  "lushan": {
    "peak": "汉阳峰 1474m",
    "heritage": "世界文化景观遗产（1996）",
    "reviews": [
      {
        "t": "踏着轻柔的步伐走进含鄱口，宽广的空间，辽阔的视野，山在静止，水在流动.跟别处的美不尽相同",
        "who": "美篇游记作者「A喜悦」",
        "s": "庐山游记之十含鄱口",
        "u": "https://www.meipian.cn/55zw57y9",
        "d": "2024-08-16"
      },
      {
        "t": "远处浩浩荡荡，就是鄱阳湖了。中国第一大淡水湖。水天一色，辽阔无波。",
        "who": "美篇游记作者「周公子」",
        "s": "庐山游之含鄱口",
        "u": "https://www.meipian.cn/1jbrci3b",
        "d": "2018-08-21"
      }
    ]
  },
  "siguniangshan": {
    "peak": "幺妹峰 6250m",
    "heritage": "世界自然遗产（2006，四川大熊猫栖息地）",
    "reviews": [
      {
        "t": "未到打尖包，远远看见前方山脊上的雪，这个雪线高度让我有点慌，山脊绕过去就是大峰营地了。",
        "who": "驴友",
        "s": "我与 大峰的约定 四姑娘山大峰攀登游记攻略",
        "u": "https://www.sohu.com/a/137915868_227144",
        "d": "2017-05-03"
      }
    ]
  },
  "hengshan_n": {
    "peak": "天峰岭 2016.1m",
    "reviews": [
      {
        "t": "这次恒山行虽然把身体累得够呛，但站在山顶那一刻心里真舒坦。",
        "who": "驴友",
        "s": "带孩子爬北岳恒山，630出发2小时登顶，孩子比大人猛，下山腿抖却值了",
        "u": "https://www.toutiao.com/article/7674545072432284187/",
        "d": "2026-08-16"
      }
    ]
  },
  "hengshan_s": {
    "peak": "祝融峰 1300.2m",
    "reviews": [
      {
        "t": "登峰望远，薄幕冥冥，凉风习习，山峦叠嶂，登山的疲态至此扫光。",
        "who": "知乎作者「i更多」",
        "s": "从湖南去南岳衡山——第一次去的小白必看（史上最全攻略）",
        "u": "https://zhuanlan.zhihu.com/p/415313508",
        "d": null
      }
    ]
  },
  "songshan": {
    "peak": "连天峰 1512m",
    "heritage": "世界文化遗产（2010，登封\"天地之中\"历史建筑群）",
    "reviews": [
      {
        "t": "我到山腰位置时候，想买瓶红牛，店家要30块。。。。。。我没买。爬过很多山，比嵩山困难的也有，比如武功山逆行线路，但是这里的红牛最贵。",
        "who": "知乎作者「缪金存和他的谬论」",
        "s": "五岳之中岳嵩山，嵩山旅游详细攻略",
        "u": "https://zhuanlan.zhihu.com/p/311297206",
        "d": "2020-12"
      }
    ]
  },
  "changbaishan": {
    "peak": "白云峰 2691m",
    "reviews": [
      {
        "t": "我们曾在6月份登顶，山顶的气温只有0℃，如果不穿厚羽绒服或军大衣，在顶峰长时间逗留绝对扛不住。",
        "who": "「泓锦观察」主笔吴泓锦（人民网吉林频道刊文）",
        "s": "为什么此生必去长白山？！",
        "u": "http://jl.people.com.cn/n2/2024/0521/c349771-40851561.html",
        "d": "2024-05"
      },
      {
        "t": "所以，上长白山既是一次远行圆梦之旅，也是一次未可知的“开盲盒”之旅，最终结果如何，还得上那才能见分晓",
        "who": "「泓锦观察」主笔吴泓锦（人民网吉林频道刊文）",
        "s": "为什么此生必去长白山？！",
        "u": "http://jl.people.com.cn/n2/2024/0521/c349771-40851561.html",
        "d": "2024-05"
      }
    ]
  },
  "qianshan": {
    "peak": "仙人台 708.3m",
    "reviews": [
      {
        "t": "由于时间有限，体力不支，只爬了千山实际景区的五分之一（还是六分之一），就开始了腿肚子转筋的下山回程。",
        "who": "知乎作者「雲绯」",
        "s": "【辽宁游记】鞍山-千山风景区——千山之外有千山，这就是江山",
        "u": "https://zhuanlan.zhihu.com/p/32205283488",
        "d": null
      }
    ]
  },
  "wutaishan": {
    "peak": "北台叶斗峰 3061.1m",
    "heritage": "世界文化景观遗产（2009）",
    "reviews": [
      {
        "t": "坦白说，对于没有佛教信仰的人来讲，去五台山真的没什么意思，进山费135，只包含了山上的风景，菩萨顶、显通寺、塔院寺、黛螺顶，都需要另外交钱。",
        "who": "知乎作者「明少AI职场提效」",
        "s": "五台山：不去遗憾，去了后悔一辈子（附五台山一日游攻略）",
        "u": "https://zhuanlan.zhihu.com/p/545058712",
        "d": null
      }
    ]
  },
  "xiaowutaishan": {
    "peak": "东台 2882m",
    "reviews": [
      {
        "t": "盛夏，是小五台山金莲花盛开的季节。花开时漫山遍野，犹如展开一幅天然的巨幅画卷，在铺天盖地的绿底色上面，托着一大片金色的花，让人魂牵梦绕。",
        "who": "环球人文地理",
        "s": "河北小五台山：五座山峰上的五种惊喜",
        "u": "http://travel.sina.com.cn/china/2012-12-28/1429188782.shtml",
        "d": "2012-12-28"
      }
    ]
  },
  "lingshan": {
    "peak": "东灵山主峰 2303m",
    "reviews": [
      {
        "t": "没想到，快到山上的江水河村时，雨停，风起，陡峭的山峰像船一样，在云海中徜徉、飘荡。第一次在北京看到这种仙境，我惊叹了：越是下雨天，越应该往山上走。",
        "who": "空错",
        "s": "北京的山：被忽视的福利",
        "u": "https://www.kongcuo.com/archives/408.html",
        "d": "2016-06-04"
      }
    ]
  },
  "maijishan": {
    "heritage": "世界文化遗产（2014，丝绸之路：长安-天山廊道的路网）",
    "reviews": [
      {
        "t": "刚踏入景区，麦积山便以它独特的身姿映入我的眼帘。这座孤峰拔地而起，形状宛如农家的麦垛，难怪会被称为麦积山。",
        "who": "赵凤路",
        "s": "麦积山游记：探寻千年石窟的艺术之美",
        "u": "https://www.meipian.cn/5ff6q2zd",
        "d": null
      }
    ]
  },
  "helanshan": {
    "peak": "敖包疙瘩 3556m",
    "reviews": [
      {
        "t": "这会我体能很充沛，我决定再继续往上爬，去兔儿坑，听景区工作人员介绍，那边可以偶遇蓝马鸡",
        "who": "游客王先生",
        "s": "春游贺兰山：科技助力登山，游客纷纷点赞外骨骼机器人！",
        "u": "https://www.163.com/dy/article/JSFJHLJ805567EIC.html",
        "d": "2025-04-06"
      }
    ]
  },
  "wudangshan": {
    "peak": "天柱峰 1612m",
    "heritage": "世界文化遗产（1994）",
    "reviews": [
      {
        "t": "从南岩开始徒步登山，约3–4小时抵达金顶，沿途风景很值得。",
        "who": "搜狐号作者“骑驴看牛找马”",
        "s": "别去错山头！全国5座武当山，只有湖北这个能免票——附亲测避坑指南",
        "u": "https://www.sohu.com/a/967722872_121984853",
        "d": "2025-12-21"
      },
      {
        "t": "金顶（太和宫）：武当最高处，看日出、云海的绝佳位置，还能近距离参观金殿。",
        "who": "搜狐号作者“骑驴看牛找马”",
        "s": "别去错山头！全国5座武当山，只有湖北这个能免票——附亲测避坑指南",
        "u": "https://www.sohu.com/a/967722872_121984853",
        "d": "2025-12-21"
      }
    ]
  },
  "shennongjia": {
    "peak": "神农顶 3106.2m",
    "heritage": "世界自然遗产（2016）",
    "reviews": [
      {
        "t": "神农架的秋天，比想象的还要绝美，仿佛上帝打翻了调色板，掉落在林间，满山遍野的树木都被染了色，五彩斑斓层林尽染，如果想看秋景的朋友不可错过。",
        "who": "网易号作者“芒果旅行摄影”",
        "s": "上周在湖北神农架玩了五天，说说我的13条真实感受和旅游建议",
        "u": "https://www.163.com/dy/article/JF2E6KS70524CUS3.html",
        "d": "2024-10-21"
      }
    ]
  },
  "laojunshan": {
    "peak": "玉皇顶 2217m",
    "reviews": [
      {
        "t": "如果想要看日出的朋友，可以选择山顶的青旅住上一晚，最好不要选择在半夜爬老君山，半夜爬老君山伤体力，还不一定看到日出。",
        "who": "网易号作者“近史谈”",
        "s": "去了老君山9次，总结一下 经验，不知道该不该说？",
        "u": "https://www.163.com/dy/article/J17L983N05566PST.html",
        "d": "2024-05-03"
      },
      {
        "t": "记得带上登山杖，3元/根，第一段索道下来，虽然台阶不多，但到达金顶，需要3小时，还是有些费劲。",
        "who": "网易号作者“近史谈”",
        "s": "去了老君山9次，总结一下 经验，不知道该不该说？",
        "u": "https://www.163.com/dy/article/J17L983N05566PST.html",
        "d": "2024-05-03"
      }
    ]
  },
  "yuntaishan": {
    "peak": "茱萸峰 1297.6m",
    "heritage": "世界地质公园（2004，全球首批）",
    "reviews": [
      {
        "t": "单独茱萸峰游览时间大约2个小时，虽说登顶不易，但美景无限。",
        "who": "头条旅行作者“豫见旅行”",
        "s": "八大景点融为一体的云台山，你可以这样玩，总有一处风景打动你",
        "u": "https://www.toutiao.com/zixun/7499668540991998004/",
        "d": "2022-07-15"
      }
    ]
  },
  "yandangshan": {
    "peak": "百岗尖 1056.6m",
    "heritage": "世界地质公园（2005）",
    "reviews": [
      {
        "t": "专门在冬天去了一趟，发现其实冬天的景色特别美，但山里的冬天真的太冷了，在大龙湫景区门口的民宿住了一晚，淡季价格很便宜，但实在太冷了。",
        "who": "驴友",
        "s": "雁荡山一日游，一年去了四次，这份攻略超详细",
        "u": "https://www.toutiao.com/article/7352352807423394338/",
        "d": "2024-03-31"
      }
    ]
  },
  "tianmushan": {
    "peak": "仙人顶 1506m",
    "reviews": [
      {
        "t": "前三分之一石阶平坦，后三分之二石阶陡峭，有点难走，比较考验你的体力、脚力和耐力。",
        "who": "携程用户",
        "s": "西天目山“大树王国”佛、道、禅一日游",
        "u": "https://you.ctrip.com/travels/TianmuMountain1435/4146511.html",
        "d": "2024-09-15"
      }
    ]
  },
  "moganshan": {
    "peak": "塔山 724m",
    "reviews": [
      {
        "t": "循阶而上，穿梭在后山的竹海中，能看到不少雨后春笋破土而出，已长高到人的三分之一",
        "who": "携程游记作者“麻小薯”",
        "s": "带着老父亲自驾莫干山，极限弯道中享山野归隐之乐",
        "u": "https://gs.ctrip.com/html5/you/travels/87/3972033.html",
        "d": "2020-09-22"
      }
    ]
  },
  "laoshan": {
    "peak": "巨峰 1132.7m",
    "reviews": [
      {
        "t": "天苑就是仰口之顶最高峰也是观赏风景最好的地点，上到山顶大家都驻足观望和拍照留念。",
        "who": "什么值得买用户“爱省钱的猫”",
        "s": "崂山懒人攻略——只有一天时间，怎么玩崂山？",
        "u": "https://post.smzdm.com/p/a7nz8dqo/",
        "d": "2023-08-18"
      }
    ]
  },
  "sanqingshan": {
    "peak": "玉京峰 1819.9m",
    "heritage": "世界自然遗产（2008）",
    "reviews": [
      {
        "t": "南海岸栈道看到的风景开阔疏朗，加上蓝天白云，令人心旷神怡！途中还有小鸟、小松鼠相伴，非常舒心。",
        "who": "携程游记作者“苏州小美”",
        "s": "江西三清山之南海岸栈道",
        "u": "https://gs.ctrip.com/html5/you/travels/159/4028828.html",
        "d": "2021-08-22"
      }
    ]
  },
  "jinggangshan": {
    "peak": "南风面 2120.4m",
    "reviews": [
      {
        "t": "云雾翻腾，如大海般波起峰涌、浪花飞溅、惊涛拍岸漫无边际，人间仙境。",
        "who": "美篇作者曾武",
        "s": "井冈山·黄洋界",
        "u": "https://www.meipian.cn/55xwrw92",
        "d": "2024-08-14"
      }
    ]
  },
  "longhushan": {
    "heritage": "世界自然遗产（2010，中国丹霞）",
    "reviews": [
      {
        "t": "高空栈道在峰崖崔嵬的峭壁上穿行，蜿蜒曲折，有时栈道相对不过丈余，红流奔腾，赤壁四立，绿树上覆，千年腾萝倒挂，万丈瀑布斜飞，极具奇、险、秀、美、幽。",
        "who": "美篇作者“开心笑一笑”",
        "s": "龙虎山游记",
        "u": "https://www.meipian.cn/2fqpu27o",
        "d": "2019-10-07"
      }
    ]
  },
  "danxiashan": {
    "peak": "巴寨 619.2m",
    "heritage": "世界自然遗产（2010，中国丹霞）",
    "reviews": [
      {
        "t": "这里是真的险，一路直上，狭隘仅容一人，陡峭度约近70-90度，都是不规则台阶，人不算多，但是难走，也有小孩挑战，爬爬停停的，一路不觉得累。",
        "who": "携程游记作者“四季行姬”",
        "s": "韶关帽子峰赏银杏登顶丹霞看日出日落-",
        "u": "https://gs.ctrip.com/html5/you/travels/100051/4152245.html",
        "d": "2024-12-05"
      }
    ]
  },
  "fanjingshan": {
    "peak": "凤凰山 2572m",
    "heritage": "世界自然遗产（2018）",
    "reviews": [
      {
        "t": "左手抓铁链，右手扶栏杆，再三叮嘱自己，目不斜视，只跟前者，不看来者，就是盯着台阶和前人的屁股，一步一步往上爬。",
        "who": "简书作者马茫",
        "s": "我终于登上了梵净山的红云金顶(二)",
        "u": "https://www.jianshu.com/p/5910566c4357",
        "d": "2026-04-12"
      },
      {
        "t": "有几段石阶上方的空间实在太窄，背上登山包直接擦着背后的崖壁，只能像壁虎一样慢慢地往上蹭动。",
        "who": "新浪博主沈达",
        "s": "路“立”起来了！登顶梵净山红云金顶有感",
        "u": "http://cj.sina.cn/articles/view/1893892941/70e2834d02001zhss",
        "d": "2026-04-25"
      }
    ]
  },
  "jinfoshan": {
    "heritage": "世界自然遗产（2014，中国南方喀斯特）",
    "reviews": [
      {
        "t": "抖音上金佛山很火，所以趁冰雪季上去了一次雪，说实话景区还行，整个山林银装素裹，看起来确实美，拍照也很出片。",
        "who": "方竹论坛网友「大门犹豫」",
        "s": "旅游一次金佛山有感",
        "u": "https://www.ncfz.com/thread-3344835-1-1.html",
        "d": "2024-12-20"
      }
    ]
  },
  "cangshan": {
    "peak": "马龙峰 4122m",
    "heritage": "世界地质公园（2014）",
    "reviews": [
      {
        "t": "没想到经历了两天负重31小时，尤其是第二天走了一整天（24小时），还没有登顶，雨天的苍山给我们上了刻骨铭心的一课。",
        "who": "磨房驴友「光远」",
        "s": "云南连续长线--鸡足山，苍山，梅里，虎跳峡，哈巴雪山连穿活动小结",
        "u": "https://www.doyouhike.net/topic/2648149",
        "d": "2020-10-27"
      }
    ]
  },
  "jizushan": {
    "peak": "天柱峰 3248m",
    "reviews": [
      {
        "t": "我们每年都来鸡足山，因为鸡足山不仅是云南的名山，在全国也非常有名。这里的风景也不错，特别是在鸡足山上观看日出，景色非常壮观。",
        "who": "游客沙芮宏",
        "s": "宾川县——鸡足山旅游火爆 游客点赞满满",
        "u": "https://www.dali.gov.cn/dlzrmzf/c101533/pc/content/2026945227149840384/content_2026945227149840384.html",
        "d": null
      }
    ]
  },
  "wutongshan": {
    "peak": "大梧桐 943.7m",
    "reviews": [
      {
        "t": "泰山涧由14条山涧小溪聚集而成，蕴藏丰厚的水质资源和植物资源，因山势改变构成潭、流泉、叠泉、滚泉等水系景象，溪水潺潺，沿途风景优美，林荫茂盛，非常凉爽，适合探幽制胜，是夏季登梧桐山很好的路线。",
        "who": "本地宝攻略编辑",
        "s": "深圳梧桐山爬山攻略(最佳路线+要爬多久+登山口怎么去)",
        "u": "http://sz.bendibao.com/tour/2019318/ly814043.html",
        "d": "2026-05-13"
      }
    ]
  },
  "yuelushan": {
    "reviews": [
      {
        "t": "在观光长廊，透过淡淡的薄雾俯瞰整个长沙城。湘江浩荡如烟，宛若一条玉带蜿蜒而去，将长沙城分隔在两岸。",
        "who": "美篇游记作者「君子兰」",
        "s": "岳麓山游记",
        "u": "https://www.meipian.cn/4yc21hu2",
        "d": "2023-11-20"
      }
    ]
  },
  "tianmenshan": {
    "reviews": [
      {
        "t": "索道穿越在崇山峻岭之中，峡谷沟壑之上，瞬间，群山起落风光无限，千山万壑身边过，令人心潮澎湃，刺激震撼。",
        "who": "美篇游记作者「舒畅」",
        "s": "《舒畅游记12》之二——迷宫黄龙洞、传奇天门山",
        "u": "https://www.meipian.cn/25f9v5c1",
        "d": "2019-05-31"
      },
      {
        "t": "我们乘坐缆车缓缓上升，窗外是层叠的青山与缭绕的云雾，远处的山峰若隐若现，宛如仙境。",
        "who": "美篇游记作者「行摄无疆」",
        "s": "张家界天门山游记：山峦叠嶂，云雾缭绕的奇境之旅",
        "u": "https://www.meipian.cn/5fim40pq",
        "d": "2025-08-16"
      }
    ]
  },
  "kongtongshan": {
    "reviews": [
      {
        "t": "香山混元顶寺庙的后面有一片平台，天气好时，可以在最高点俯瞰包括中台、雷声峰、弹筝峡以及远处整个陇东大地，奇美无限！",
        "who": "游记作者dingdayiyi（马蜂窝资深旅游达人）",
        "s": "崆峒山游记 | 暴走3万步",
        "u": "https://www.toutiao.com/article/6961612221252370952/",
        "d": "2021-05-13"
      }
    ]
  },
  "jigongshan": {
    "reviews": [
      {
        "t": "鸡公山是避暑胜地，冬天就有些冷，有时有雾凇美景，但我未能赶上。",
        "who": "驴友",
        "s": "冬日鸡公山",
        "u": "http://www.shxtravel.com/destguide/travelnotes_info_276_22517.html",
        "d": null
      }
    ]
  },
  "maoershan": {
    "reviews": [
      {
        "t": "山高我为峰，2019年4月17日，在我满63岁生日的前一天，我登上了顶峰，亲自为猫儿山增高海抜1.6米",
        "who": "美篇作者“老石翁”",
        "s": "我登上了华南之颠---猫儿山",
        "u": "https://www.meipian.cn/21wx3i7w",
        "d": "2019-04-18"
      }
    ]
  },
  "wuzhishan": {
    "reviews": [
      {
        "t": "一次登山将生活工作中的烦恼洗涤而去，眼前只有五指山的美景，内心只有如水般的宁静。",
        "who": "美篇作者“小柒”",
        "s": "访黎祖大殿，寻昌化江之源一一五指山游记",
        "u": "https://www.meipian.cn/21mu3996",
        "d": "2019-04-15"
      }
    ]
  },
  "putuoshan": {
    "reviews": [
      {
        "t": "普陀山给我印象最深的，不仅是观音菩萨的庄严妙相，还有岛上原始森林般的植被，以及沙滩、海浪、山花和云雾。",
        "who": "游记作者唐小珍",
        "s": "第3197期： 游普陀山（散文游记）",
        "u": "https://m.163.com/dy/article/IVU3UOR50523R1C6.html",
        "d": "2024-04-16"
      },
      {
        "t": "我到过佛顶山有十几次了，平常都是白天爬山的，凌晨上佛顶山还是第一次。山里异常寂静，石阶两旁的树木阴森森的。",
        "who": "简书作者蒋坤元",
        "s": "普陀山进香日记丨今天凌晨3时，我上佛顶山",
        "u": "https://www.jianshu.com/p/8fc8ddcc800b",
        "d": "2018-04-05"
      }
    ]
  },
  "habaxueshan": {
    "reviews": [
      {
        "t": "眼前的月亮湾划出一道优雅的弧线伸向远方，在弧线的尽头是更为陡峭的一小段雪坡，然后我看到了顶峰。如果说此前我对于登顶仍有一丝怀疑，现在也立刻烟消云散了。为了这一刻，一切的辛苦努力，都是值得的。",
        "who": "磨房驴友「旅行者小超」",
        "s": "送给自己30岁的生日礼物，登顶哈巴雪山！",
        "u": "https://www.doyouhike.net/topic/2648673",
        "d": "2020-11-26"
      }
    ]
  },
  "gonggashan": {
    "reviews": [
      {
        "t": "我建议大家骑马，我是爬上去的，爬了三个小时，以至于爬上去就出现高反",
        "who": "磨房驴友「fumingxiang」",
        "s": "许久贡嘎-----------更新一下",
        "u": "https://www.doyouhike.net/topic/2642874",
        "d": "2020-03-23"
      },
      {
        "t": "70度垭口的坡走下去，有点胆怯，我这种上山一条虫的人，也只有努力的下山补回速度，不然老早就被抛到九霄云外去了；很大的雾，天气很不好，五米开外就完全看不到人了，时时要提醒大家不要走的太开，一定要在视线范围内，保持距离。",
        "who": "磨房驴友「May(思语)」",
        "s": "等风来 不如追风去 之 国庆贡嘎行（作业贴）",
        "u": "https://www.doyouhike.net/topic/2611452",
        "d": "2018-10-28"
      }
    ]
  },
  "tanglangshan": {
    "reviews": [
      {
        "t": "根据功能和景观特色，有深云广场、三个沟谷和六条登山道等主题区域，市民游客既可登高揽胜，将山海连城的大美风光尽收眼底，又能入谷寻幽，体验回归自然山林之野趣。",
        "who": "本地宝攻略编辑",
        "s": "深圳塘朗山郊野公园深云谷在哪里(位置+地铁路线)",
        "u": "http://sz.bendibao.com/tour/20211230/ly879584.html",
        "d": "2022-03-14"
      }
    ]
  },
  "maluanshan": {
    "reviews": [
      {
        "t": "尽管有些累，然则清澈见底的溪流，透心儿凉的山涧泉水，仿佛在不停地洗去你的疲劳。",
        "who": "深圳之窗编辑「窗弟」",
        "s": "2023年深圳马峦山游玩攻略及登山线路介绍",
        "u": "https://city.shenchuang.com/city/20230828/1631433.shtml",
        "d": "2023-08-28"
      }
    ]
  },
  "yushan": {
    "reviews": [
      {
        "t": "玉山的步道維護得非常好，路徑清楚，該有的護欄和拉繩都有，沒有需要手腳並用的地方。",
        "who": "驴友",
        "s": "玉山主峰攻略 2026｜兩天一夜行程、來回 21.8 公里、排雲住宿全記錄",
        "u": "https://hikingtw.com/yushan-hiking-guide/",
        "d": "2026-08-07"
      }
    ]
  },
  "yuzhufeng": {
    "reviews": [
      {
        "t": "就比如壮妹如我，体重 57kg，在冲顶过程中抓着上升器，还硬是被山脊上的风刮得有种风雨漂泊的凄怆感，甚至因为山顶风大，有些队员登顶了也没有到山脊另一侧的平台拍打卡照。",
        "who": "登山者壮妹",
        "s": "青海·登山 | 玉珠峰，打破偏见",
        "u": "https://zhuanlan.zhihu.com/p/522061254",
        "d": null
      }
    ]
  },
  "aershan": {
    "reviews": [
      {
        "t": "秋天是阿尔山国家森林公园最美的季节，金黄的树叶，衬托在湛蓝的湖水旁边，宛如一条金色的项链，非常漂亮。",
        "who": "旅行博主林紫",
        "s": "在阿尔山玩了两天，和大家聊聊真实感受，附两日游攻略",
        "u": "https://www.toutiao.com/article/7556051334240961067/",
        "d": "2025-10-03"
      }
    ]
  },
  "namjagbarwa": {
    "reviews": [
      {
        "t": "我们不敢大声说话，只是静静看着她。南迦巴瓦也没有完全显露，她仍旧半隐在云中，像一位高贵的女子坐在白纱之后，目光温柔，却不肯被人完全看透。",
        "who": "作者赵明恺",
        "s": "众山之神——南迦巴瓦峰",
        "u": "https://m.163.com/dy/article/KTHP7A810552R654.html",
        "d": "2026-05-22"
      },
      {
        "t": "此刻有幸云端邂逅，前几日值机抢座的辛苦，都在望见雪峰这一刻圆满。",
        "who": "游记作者雨思",
        "s": "林芝旅游日志——初见南迦巴瓦峰",
        "u": "http://www.meipian.cn/5ohu68eb",
        "d": "2026-08-08"
      }
    ]
  },
  "bogda": {
    "reviews": [
      {
        "t": "博格达的波澜壮阔，是多元的、丰满的、也是极致的，大气而精致，厚重而细腻，有艰险与挑战，更有令人窒息的风光和诱惑，特别是梦幻般的冰川。",
        "who": "阿强",
        "s": "像梦一样自由-博格达大环穿越",
        "u": "https://www.2bulu.com/community/gotohuatinfo.htm?id=49823400",
        "d": "2019-07-31"
      }
    ]
  }
};
