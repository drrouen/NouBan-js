// 敏感词
var wordsArray = [
    '独裁',
    '极左',
    '国家机器',
    '内部斗争',
    '修改宪法',
    '修宪',
    '言论自由',
    'freespeech',
    '言论&&审查',
    '审查&&制度',
    '言论封锁',
    '因言获罪',
    '新闻自由',
    '新闻管制',
    '法西斯',
    '法东斯',
    '四个意识',
    '四个自信',
    '总理',
    '中南海',
    '华春莹',
    '华姐',
    '华大姐',
    '华大妈',
    '裆员',
    '领导人',
    '形式主义',
    '终身制',
    '网络审查',
    '政治改革',
    '政改',
    '夹边沟',
    '#信女',
    '#吃素',
    '歌舞升平',
    '#小粉红',
    '墙国',
    '你国',
    '尼国',
    '妳国',
    '您国',
    '我朝',
    '你朝',
    '你党',
    '复辟',
    '登基',
    '先王',
    '#先主',
    '先皇',
    '先帝',
    '万邦来朝',
    '德不配位',
    '庆父',
    '屁民',
    '稻',
    '平庸的恶',
    '反对&&习',
    '吾皇万岁',
    '万碎',
    '习王',
    '习皇',
    '习太子',
    '刁王',
    '习大大',
    '刁da',
    '刁太太',
    '习太太',
    'xdd',
    'xidd',
    'xidad',
    'dada',
    '维尼',
    'weini',
    'wei尼',
    '维ni',
    'winnie',
    '包砸',
    '加速师',
    '总书记',
    '国家主席',
    '圣上',
    '今上',
    '刁jin',
    '叼jin',
    '刁jing',
    '叼jing',
    '远pin',
    '远ping',
    '叼远',
    '刁远',
    'xjp',
    'xijin',
    'jinp',
    'jingp',
    'xijing',
    '翠',
    'cui',
    '亲自指挥',
    '亲自部署',
    '习以为常',
    '去习',
    '倒习',
    '习卒',
    '习垃圾',
    '习弱智',
    '虫合',
    '蛤蛤',
    '长者',
    '虵',
    '+1s',
    '续一秒',
    '膜法师',
    '隐瞒不报',
    '瞒报',
    '吹哨人',
    '训诫',
    '发哨人',
    '发哨子',
    '#红会',
    '#红十字',
    '黑十字',
    '鄂a0260w',
    '八个口罩',
    '8个口罩',
    '#复旦',
    '军运会',
    'junyunhui',
    '空椅子',
    '某奖',
    '和平奖',
    '格萨尔王',
    '纽约时报',
    '扭腰时报',
    'nytimes',
    '景云里',
    '法轮功',
    '#送中',
    '占中',
    '港警',
    '曱甴',
    '五大诉求',
    '何以这恐惧抹不走',
    '刘晓波',
    '我的最后陈述',
    'lwl',
    '艾芬',
    '蒋彦永',
    '陈秋实',
    '方斌',
    '金燕玲',
    '袁项城',
    '进p',
    '近p',
    '堇p',
    '撒传单',
    '#麻麻',
    '七3',
    '淫秽图片',
    '怹',
    '宪章',
    '丽卡酱',
    '#形同虚设',
    '支那',
    '枝那',
    '支纳',
    '黄祸',
    'nobelprize',
    'peaceprize',
    '不能不明白',
    'doyouhearthepeoplesing',
    '习&&面具',
    'xi&&面具',
    '#钟意&&5块',
    '北京&&学生',
    '江&&过世',
    '江&&去了',
    '江&&挂了',
    '翻墙',
    'vpn',
    '李鹏',
    '赵紫阳',
    '月月鸟',
    '巴拿马文件',
    'panamapaper',
    '普选',
    '1989',
    '六四',
    '陆肆',
    'liusi',
    'liu4',
    '6si',
    '8964',
    '89事件',
    '89动乱',
    '学生动乱',
    '天安门',
    '坦克',
    '学运',
    '民运',
    '学生运动',
    '三十一周年',
    '8的平方',
    '八的平方',
    '八乘八',
    '8*8',
    '变态辣椒',
    '达赖',
    '#敏感词',
    '集中营',
    '共产',
    '共狗',
    '共匪',
    '党禁',
    '毛泽东',
    '邓小平',
    '席主',
    '端传媒',
    '两会',
    '2会',
    'two会',
    '二会',
    '2️⃣会',
    '港独',
    '台湾独立',
    '习&&倒退',
    '反修例',
    '姓赵',
    '克强',
    '李k强',
    '薄熙来',
    '岐山',
    '山支山',
    '应书记',
    '某贵',
    '#春蕾',
    '公开信',
    '大国战役',
    '大国战疫',
    '歪脖',
    '一统江湖',
    '黄袍加身',
    '称帝',
    '令计划',
    '军委',
    'jzm',
    '大纪元',
    '北京之春',
    '魏京生',
    '十八大',
    '18大',
    '博讯',
    '谁是新中国',
    '一党专制',
    '东突',
    '国家囚徒',
    '国家的囚徒',
    '国&&防火墙',
    '家&&防火墙',
    '政治局',
    '乌尔凯西',
    '吾尔开希',
    '王丹',
    '柴玲',
    '九评',
    '常委',
    '周永康',
    '胡耀邦',
    '姓江的',
    '姓习',
    '姓刁',
    '维园',
    '维多利亚公园',
    '驾崩',
    '学潮',
    '真理部',
    '维权律师',
    '维权人士',
    '维稳',
    '大大&&情人',
    '习&&情人',
    '#牟林翰',
    '#包丽',
    '自焚',
    'bigbig',
    'p4实验室',
    '外国人&&永居条例',
    '外国人&&永久居留',
    '反人类罪',
    '#镜干',
    '境外势力',
    '粉饰太平',
    '民主万岁',
    '花千芳',
    '世袭',
    '周小平',
    '山呼万岁',
    '学术独立思想自由',
    '政罗教网无羁绊',
    '马基雅维利',
    '苏联笑话',
    '政治笑话',
    '问贵',
    '文贵',
    '初中毕业',
    '初中肄业',
    '小学肄业',
    '奸虐',
    '连任',
    '国妖',
    '撒钱',
    '撒币',
    '腾退',
    '军车',
    '批量死亡',
    '瓷国人',
    'ptt',
    '开倒车',
    '历史倒退',
    '鸡国',
    '造神',
    '#10块&&钟',
    '王淑平',
    '权贵',
    '集权',
    '反华',
    '仲勋',
    '邱占萱',
    '中国政府',
    '习&&两个平台',
    '习&&背锅',
    '国母',
    '集体失语',
    'urumuqi',
    'urumqi',
    '南方周末',
    '新年致辞',
    '历史罪人',
    '浪费纳税人',
    '经济停摆',
    '大兔',
    '大🐰',
    '大🐇',
    '郑楚然',
    '危志立',
    '5±1',
    '#渔村',
    '孙文斌',
    '贸易争端',
    '丹麦&&疫情',
    '#追责',
    '#404',
    '高层内部',
    '菜奇',
    '蔡奇',
    '菜其',
    '#哀悼',
    '#黑白',
    '古月',
    '#作秀',
    '习&&作秀',
    'xi&&作秀',
    '疫情&&失业',
    '习像',
    '亚洲周刊',
    '剥夺&&知情权',
    '习&&离异',
    '习&&亲戚',
    'x氏',
    '问g',
    '文g',
    '闻g',
    '纹g',
    '温g',
    '稳g',
    '蚊g',
    '吻g',
    '任志强',
    '任大炮',
    '#路德',
    '羽卒',
    '膜包',
    '肿锅',
    '终国',
    '钟锅',
    '打压异己',
    '🐻',
    '🌾',
    '🐸',
    '👨‍🌾',
    '👩‍🌾',
    '红三代',
    '红二代',
    '人民报',
    '权斗',
    '影帝',
    '乡岗',
    'hongkong',
    '恶法',
    '周保松',
    '论&&老任',
    '仑&&老任',
    'lun&&老任',
    '堂弟&&才明',
    '上前线&&孕妇',
    'kano',
    '习&&猪头',
    '希望之声',
    '引咎辞职',
    '贵族气质',
    '周雪光',
    '习&&说错',
    'xi&&说错',
    '习&&说成',
    'xi&&说成',
    '习&&读错',
    'xi&&读错',
    '习&&读成',
    '习&&念错',
    'xi&&念错',
    '习&&念成',
    'xi&&念成',
    '习&&讲错',
    'xi&&讲错',
    '习&&讲成',
    'xi&&讲成',
    '川帝',
    '习帝',
    '断崖式下跌',
    '👓',
    '魔幻中国',
    '习&&前任',
    '习&&女儿',
    'xi&&女儿',
    '习&&儿子',
    '习&&离婚',
    '习&&口误',
    'xi&&口误',
    '习&&前妻',
    '笼的传人',
    '疫情&&损失',
    '战斗部',
    '蚁民',
    '戴上皇冠',
    '王冠一',
    '疫情&&破产',
    '纽时',
    'chinesevirus',
    '何厚铧',
    '操弄舆论',
    '控制舆论',
    '希望的田野上',
    '排名不分先后左右忠奸',
    '称王称霸',
    '#三角地',
    '湖底群魂',
    '岳昕',
    '岳日斤',
    '丘山日斤',
    '余浚聪',
    '梦雨',
    '顾佳悦',
    '张圣业',
    '张耀祖',
    '刘鹏华',
    '米久平',
    '李展',
    '展振振',
    '郑永明',
    '黎智英',
    '黄之锋',
    '网信',
    '如果我不交代谣言就永远没完',
    '#常凯',
    '中国梦',
    '韭国',
    '韭菜国',
    '一言堂',
    'emptychair',
    '刘霞',
    '你支',
    '恨国党',
    'xi氏',
    '三月半',
    '金胖',
    '金五胖',
    '金四胖',
    '金三胖',
    '金二胖',
    '金大胖',
    '金小胖',
    'kimjongun',
    '一统天下',
    '带路党',
    '习&&外号',
    '习&&集团',
    '习&&统治',
    '禁忌词',
    '习&&辞职',
    '天津兆维',
    '#游游了会',
    '喷墨',
    '泼墨',
    '董瑶琼',
    '董建彪',
    '华涌',
    '搞个大新闻',
    '孙力军',
    '王全璋',
    '李文足',
    '709事件',
    '709大抓捕',
    '习李',
    'flyingv',
    '#有的人活着',
    'chinesedream',
    '习&&照片',
    'xi&&照片',
    '威权主义',
    '文化洗脑',
    '厉害国',
    '厉害了我的锅',
    '习&&画像',
    'xi&&画像',
    '千人计划',
    '习总',
    'xi总',
    'x总',
    '洗总',
    '习和平',
    '李二&&紧张',
    '小强++核心++没有',
    '皿煮',
    '灭火器',
    '政治光谱',
    '#进干',
    '绝食抗议',
    '习&&表弟',
    '乳包',
    '辱包',
    '不厚',
    '人权组织',
    '失业潮',
    '倒逼改革',
    '人民公敌',
    '上有所好',
    '江&&嗝屁',
    '习教父',
    '自愿为奴',
    '中销',
    '青年节',
    'gretathunberg',
    '学生&&tank',
    '黎瑞刚',
    '王敏',
    '彩包',
    '水晶棺',
    'p2p&&爆雷',
    '上坊',
    '文规',
    '问鬼',
    'wengui',
    '地缘政治',
    '大跃进',
    '张雪忠',
    '宪政',
    '北京&&血色',
    '陈冬',
    '季风书园',
    '独立中文笔会',
    'po墨',
    '泼mo',
    'pomo',
    '财阀治国',
    '江&&架空',
    '#pxj',
    'li强',
    '倒行逆施',
    'ply',
    '第一夫人',
    '丽媛',
    '他的国',
    '包某',
    '好大喜功',
    '游行',
    '摩门教',
    '动森&&下架',
    '贴诗',
    '19大',
    '十九大',
    '习&&被爆',
    '庆丰',
    '公主&&身份证',
    '#费加罗报',
    '习胖',
    '习三胖',
    '习大胖',
    '露宪',
    '被旅游',
    '一带一路',
    '#sabi',
    '台湾国',
    '支国',
    '走家人',
    '人民代表大会',
    '#广场',
    '团系',
    '李相爷',
    '不忘初心&&牢记使命',
    '爹和妈',
    'xi&&念成',
    '习&&念成',
    'xi&&念错',
    '习&&念错',
    '当到底',
    '撸起袖子',
    '荣光归香港',
    '#普利策',
    '胡鞍钢',
    '黑习',
    '一国两制',
    '一国一制',
    '习&&人头',
    'xi&&人头',
    '习&&头像',
    'xi&&头像',
    '国安法',
    '中堂大人',
    '杀医',
    'bigda',
    '低端人口',
    '转型正义',
    '毕赣&&生日',
    '学生&&祷告',
    '螳臂当车',
    '螳臂挡车',
    'tankman',
    'tank人',
    'tank&&北京',
    '贵支',
    '#明天',
    '#今天',
    '#昨天',
    '#纪念',
    '捧胡',
    '#地摊',
    '山达基',
    '文字狱',
    '太祖',
    '当皇帝',
    '法拉利&&车祸',
    '冲塔',
    '三年自然灾害',
    '习女',
    '毛左',
    '新时期的上山下乡',
    '新时期上山下乡',
    '习&&图像',
    'xi&&图像',
    '锅媒体',
    '梁艳萍',
    '陈玫',
    '蔡伟',
    '端点星',
    '积恶成习',
    '高华',
    '徐晓冬',
    '徐晓东',
    '郝海东',
    '感恩教育',
    '果然台',
    '果燃台',
    'deng',
    '特权阶级',
    '要被消灭了',
    '350亿',
    '丧事喜办',
    '丧事喜报',
    '少妇白洁风',
    '习&&蟑螂',
    'xi&&蟑螂',
    '习&&失败',
    'xi&&失败',
    '人权问题',
    '党首',
    '南方公园',
    'southpark',
    '一孩国度',
    '我们的青春在台湾',
    '西藏七年',
    '西藏7年',
    '老江',
    '老习',
    '许章润',
    '何频',
    'coloredsands',
    '胡编生成器',
    '李希',
    '#许xx',
    '子弹滞销',
    '#批斗大会',
    '三代目',
    '江胡',
    '闫丽梦',
    'yanlimeng',
    '齐奥塞斯库',
    '揽炒',
    '荃湾',
    '习爷爷',
    '江爷爷',
    '胡爷爷',
    '邓爷爷',
    '滥用权力',
    '习&&洋相',
    'lifeanddeathinshanghai',
    '陈平',
    '阿习',
    '阿刁',
    '围观改变中国',
    '邪教头子',
    '宇宙塑料人',
    '堂弟&&赌博',
    '堂弟&&洗钱',
    '定尊',
    '一尊',
    '北戴河会议',
    '习思想',
    '习核心',
    '习&&曝光',
    '四大恶人',
    '华为++离职++251',
    '薄&&西来',
    '魔法上网',
    '挂梯子',
    '#季某',
    '谷歌&&退出中国',
    '四海翻腾',
    '薄&&科普',
    '余虹',
    '余茂春',
    '动乱',
    '习万岁',
    '习&&生日',
    'xi&&生日',
    '求&&梯子',
    '月冰',
    '习&&调查',
    '习&&被查',
    '马建',
    '邓炳强',
    '陈希',
    'top&&女儿',
    '任&&皇帝',
    '任&&皇上',
    '讨习',
    '习&&no1',
    'xi&&no1',
    '蔡霞',
    'caixia',
    '余文生',
    '要变天',
    'soundofsilence',
    '鱼摆摆',
    'yubaibai',
    '当代秦始皇',
    '防控不利',
    '防控不力',
    '书商&&的事',
    '肠胃会',
    'mylittleairport',
    '个人崇拜',
    '小白杨',
    '这盛世如你所愿',
    '借标',
    '庚子年&&灾祸',
    '伟大领袖',
    '我将无我',
    '陈光诚',
    '表忠心',
    '秋雨之福',
    '学生&&广场',
    '敏感瓷',
    '铩羽而归',
    '江二',
    '学朝鲜',
    'xitler',
    'x特勒',
    '番羽墙',
    '翻蔷',
    '刘克清',
    '崇祯',
    '#matters',
    '核心意识',
    '京干',
    '五君子',
    '细颈瓶',
    '斯大林之死',
    '西朝鲜',
    '习朝',
    '北京&&平反',
    '习公主',
    'xi公主',
    '习&&二婚',
    'xi&&二婚',
    '特朗普',
    '川普',
    '川建国',
    '习老大',
    '木兰&&爹',
    '木兰&&爸',
    '木兰&&父',
    '肛交',
    '季子越',
    '进乎',
    '质疑&&大大',
    '反对&&大大',
    '大大&&下台',
    '习&&下台',
    'xi&&下台',
    '习&&烧毁',
    'xi&&烧毁',
    '习&&焚烧',
    'xi&&焚烧',
    '习&&焚毁',
    'xi&&焚毁',
    '精甚',
    '椰树椰汁&&从小喝到大',
    '高洁的灵魂',
    '高耀洁回忆录',
    '大大&&骂了',
    'davidbowie',
    '大卫鲍伊',
    '刹那天地',
    '特赦',
    '宽衣',
    '通商宽农',
    '泼鸡',
    '满脸喷粪',
    '不强自息',
    '金科律玉',
    '颐使气指',
    '冰棒外交',
    '美国大选',
    '美国选举',
    '美国总统大选',
    '美国总统选举',
    'biden',
    '拜登',
    '习&&出尔反尔',
    'xi&&出尔反尔',
    '被喝茶',
    'x近乎',
    '全面小康',
    '习&&包子',
    '习&&宪法',
    '武汉市长',
    '周先旺',
    '湖北省长',
    '五月三十五',
    '5月35',
    '王忠林',
    '包帝',
    '包子帝',
    'yingyong',
    '应勇',
    '应y',
    'y勇',
    'ying勇',
    '应yong',
    '韩正',
    'hanzheng',
    '彭佩奥',
    '梁家河',
    '凉家河',
    '黄雪琴',
    '走国',
    '华尔街日报',
    '何文',
    '支联会',
    'takingbackthelegislature',
    '占领立法会',
    '韭菜&&镰刀',
    '联署',
    '习&&权力',
    '申请信息公开',
    '习&&生日',
    'xi&&生日',
    '毛衣战',
    '许志永',
    '银河联邦',
    '傅高义',
    '言论钳制',
    '梁国雄',
    '徐勤先',
    '捐卵',
    '卢思位',
    '迷航',
    '李哲昕'
];
var dataVersion = '21.01.15（' + wordsArray.length + '）';

// 以下为白名单
var whiteList = [
    '戏精',
    '洗净',
    '西经',
    '吸睛',
    '西京',
    '蹊径',
    '袭警',
    '析晶',
    '希金',
    '细晶',
    '西晋',
    '吸进',
    '析近',
    '西进',
    '吸金',
    '西津',
    '禁品',
    '金品',
    '尽品',
    '近品',
    '仅凭',
    '金瓶',
    '锦屏',
    '金平',
    '精品',
    '竞品',
    '晶品',
    '景品',
    '颈贫',
    '进拼',
    '戏银',
    '细颈',
    '颈瓶',
    '京平'
]