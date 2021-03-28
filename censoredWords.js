var wordsArray=['\u72ec\u88c1','\u6781\u5de6','\u56fd\u5bb6\u673a\u5668','\u5185\u90e8\u6597\u4e89','\u4fee\u6539\u5baa\u6cd5','\u4fee\u5baa','\u8a00\u8bba\u81ea\u7531','freespeech','\u8a00\u8bba&&\u5ba1\u67e5','\u5ba1\u67e5&&\u5236\u5ea6','\u8a00\u8bba\u5c01\u9501','\u56e0\u8a00\u83b7\u7f6a','\u65b0\u95fb\u81ea\u7531','\u65b0\u95fb\u7ba1\u5236','\u6cd5\u897f\u65af','\u6cd5\u4e1c\u65af','\u56db\u4e2a\u610f\u8bc6','\u56db\u4e2a\u81ea\u4fe1','\u603b\u7406','\u4e2d\u5357\u6d77','\u534e\u6625\u83b9','\u534e\u59d0','\u534e\u5927\u59d0','\u534e\u5927\u5988','\u88c6\u5458','\u9886\u5bfc\u4eba','\u5f62\u5f0f\u4e3b\u4e49','\u7ec8\u8eab\u5236','\u7f51\u7edc\u5ba1\u67e5','\u653f\u6cbb\u6539\u9769','\u653f\u6539','\u5939\u8fb9\u6c9f','#\u4fe1\u5973','#\u5403\u7d20','\u6b4c\u821e\u5347\u5e73','#\u5c0f\u7c89\u7ea2','\u5899\u56fd','\u4f60\u56fd','\u5c3c\u56fd','\u59b3\u56fd','\u60a8\u56fd','\u6211\u671d','\u4f60\u671d','\u4f60\u515a','\u590d\u8f9f','\u767b\u57fa','\u5148\u738b','#\u5148\u4e3b','\u5148\u7687','\u5148\u5e1d','\u4e07\u90a6\u6765\u671d','\u5fb7\u4e0d\u914d\u4f4d','\u5e86\u7236','\u5c41\u6c11','\u7a3b','\u5e73\u5eb8\u7684\u6076','\u53cd\u5bf9&&\u4e60','\u543e\u7687\u4e07\u5c81','\u4e07\u788e','\u4e60\u738b','\u4e60\u7687','\u4e60\u592a\u5b50','\u5201\u738b','\u4e60\u5927\u5927','\u5201da','\u5201\u592a\u592a','\u4e60\u592a\u592a','xdd','xidd','xidad','dada','\u7ef4\u5c3c','weini','wei\u5c3c','\u7ef4ni','winnie','\u5305\u7838','\u52a0\u901f\u5e08','\u603b\u4e66\u8bb0','\u56fd\u5bb6\u4e3b\u5e2d','\u5723\u4e0a','\u4eca\u4e0a','\u5201jin','\u53fcjin','\u5201jing','\u53fcjing','\u8fdcpin','\u8fdcping','\u53fc\u8fdc','\u5201\u8fdc','xjp','xijin','jinp','jingp','xijing','\u7fe0','cui','\u4eb2\u81ea\u6307\u6325','\u4eb2\u81ea\u90e8\u7f72','\u4e60\u4ee5\u4e3a\u5e38','\u53bb\u4e60','\u5012\u4e60','\u4e60\u5352','\u4e60\u5783\u573e','\u4e60\u5f31\u667a','\u866b\u5408','\u86e4\u86e4','\u957f\u8005','\u8675','+1s','\u7eed\u4e00\u79d2','\u819c\u6cd5\u5e08','\u9690\u7792\u4e0d\u62a5','\u7792\u62a5','\u5439\u54e8\u4eba','\u8bad\u8beb','\u53d1\u54e8\u4eba','\u53d1\u54e8\u5b50','#\u7ea2\u4f1a','#\u7ea2\u5341\u5b57','\u9ed1\u5341\u5b57','\u9102a0260w','\u516b\u4e2a\u53e3\u7f69','8\u4e2a\u53e3\u7f69','#\u590d\u65e6','\u519b\u8fd0\u4f1a','junyunhui','\u7a7a\u6905\u5b50','\u67d0\u5956','\u548c\u5e73\u5956','\u683c\u8428\u5c14\u738b','\u7ebd\u7ea6\u65f6\u62a5','\u626d\u8170\u65f6\u62a5','nytimes','\u666f\u4e91\u91cc','\u6cd5\u8f6e\u529f','#\u9001\u4e2d','\u5360\u4e2d','\u6e2f\u8b66','\u66f1\u7534','\u4e94\u5927\u8bc9\u6c42','\u4f55\u4ee5\u8fd9\u6050\u60e7\u62b9\u4e0d\u8d70','\u5218\u6653\u6ce2','\u6211\u7684\u6700\u540e\u9648\u8ff0','lwl','\u827e\u82ac','\u848b\u5f66\u6c38','\u9648\u79cb\u5b9e','\u65b9\u658c','\u91d1\u71d5\u73b2','\u8881\u9879\u57ce','\u8fdbp','\u8fd1p','\u5807p','\u6492\u4f20\u5355','#\u9ebb\u9ebb','\u4e033','\u6deb\u79fd\u56fe\u7247','\u6039','\u5baa\u7ae0','\u4e3d\u5361\u9171','#\u5f62\u540c\u865a\u8bbe','\u652f\u90a3','\u679d\u90a3','\u652f\u7eb3','\u9ec4\u7978','nobelprize','peaceprize','\u4e0d\u80fd\u4e0d\u660e\u767d','doyouhearthepeoplesing','\u4e60&&\u9762\u5177','xi&&\u9762\u5177','#\u949f\u610f&&5\u5757','\u5317\u4eac&&\u5b66\u751f','\u6c5f&&\u8fc7\u4e16','\u6c5f&&\u53bb\u4e86','\u6c5f&&\u6302\u4e86','\u7ffb\u5899','vpn','\u674e\u9e4f','\u8d75\u7d2b\u9633','\u6708\u6708\u9e1f','\u5df4\u62ff\u9a6c\u6587\u4ef6','panamapaper','\u666e\u9009','1989','\u516d\u56db','\u9646\u8086','liusi','liu4','6si','8964','89\u4e8b\u4ef6','89\u52a8\u4e71','\u5b66\u751f\u52a8\u4e71','\u5929\u5b89\u95e8','\u5766\u514b','\u5b66\u8fd0','\u6c11\u8fd0','\u5b66\u751f\u8fd0\u52a8','\u4e09\u5341\u4e00\u5468\u5e74','8\u7684\u5e73\u65b9','\u516b\u7684\u5e73\u65b9','\u516b\u4e58\u516b','8*8','\u53d8\u6001\u8fa3\u6912','\u8fbe\u8d56','#\u654f\u611f\u8bcd','\u96c6\u4e2d\u8425','\u5171\u4ea7','\u5171\u72d7','\u5171\u532a','\u515a\u7981','\u6bdb\u6cfd\u4e1c','\u9093\u5c0f\u5e73','\u5e2d\u4e3b','\u7aef\u4f20\u5a92','\u4e24\u4f1a','2\u4f1a','two\u4f1a','\u4e8c\u4f1a','2\ufe0f\u20e3\u4f1a','\u6e2f\u72ec','\u53f0\u6e7e\u72ec\u7acb','\u4e60&&\u5012\u9000','\u53cd\u4fee\u4f8b','\u59d3\u8d75','\u514b\u5f3a','\u674ek\u5f3a','\u8584\u7199\u6765','\u5c90\u5c71','\u5c71\u652f\u5c71','\u5e94\u4e66\u8bb0','\u67d0\u8d35','#\u6625\u857e','\u516c\u5f00\u4fe1','\u5927\u56fd\u6218\u5f79','\u5927\u56fd\u6218\u75ab','\u6b6a\u8116','\u4e00\u7edf\u6c5f\u6e56','\u9ec4\u888d\u52a0\u8eab','\u79f0\u5e1d','\u4ee4\u8ba1\u5212','\u519b\u59d4','jzm','\u5927\u7eaa\u5143','\u5317\u4eac\u4e4b\u6625','\u9b4f\u4eac\u751f','\u5341\u516b\u5927','18\u5927','\u535a\u8baf','\u8c01\u662f\u65b0\u4e2d\u56fd','\u4e00\u515a\u4e13\u5236','\u4e1c\u7a81','\u56fd\u5bb6\u56da\u5f92','\u56fd\u5bb6\u7684\u56da\u5f92','\u56fd&&\u9632\u706b\u5899','\u5bb6&&\u9632\u706b\u5899','\u653f\u6cbb\u5c40','\u4e4c\u5c14\u51ef\u897f','\u543e\u5c14\u5f00\u5e0c','\u738b\u4e39','\u67f4\u73b2','\u4e5d\u8bc4','\u5e38\u59d4','\u5468\u6c38\u5eb7','\u80e1\u8000\u90a6','\u59d3\u6c5f\u7684','\u59d3\u4e60','\u59d3\u5201','\u7ef4\u56ed','\u7ef4\u591a\u5229\u4e9a\u516c\u56ed','\u9a7e\u5d29','\u5b66\u6f6e','\u771f\u7406\u90e8','\u7ef4\u6743\u5f8b\u5e08','\u7ef4\u6743\u4eba\u58eb','\u7ef4\u7a33','\u5927\u5927&&\u60c5\u4eba','\u4e60&&\u60c5\u4eba','#\u725f\u6797\u7ff0','#\u5305\u4e3d','\u81ea\u711a','bigbig','p4\u5b9e\u9a8c\u5ba4','\u5916\u56fd\u4eba&&\u6c38\u5c45\u6761\u4f8b','\u5916\u56fd\u4eba&&\u6c38\u4e45\u5c45\u7559','\u53cd\u4eba\u7c7b\u7f6a','#\u955c\u5e72','\u5883\u5916\u52bf\u529b','\u7c89\u9970\u592a\u5e73','\u6c11\u4e3b\u4e07\u5c81','\u82b1\u5343\u82b3','\u4e16\u88ad','\u5468\u5c0f\u5e73','\u5c71\u547c\u4e07\u5c81','\u5b66\u672f\u72ec\u7acb\u601d\u60f3\u81ea\u7531','\u653f\u7f57\u6559\u7f51\u65e0\u7f81\u7eca','\u9a6c\u57fa\u96c5\u7ef4\u5229','\u82cf\u8054\u7b11\u8bdd','\u653f\u6cbb\u7b11\u8bdd','\u95ee\u8d35','\u6587\u8d35','\u521d\u4e2d\u6bd5\u4e1a','\u521d\u4e2d\u8084\u4e1a','\u5c0f\u5b66\u8084\u4e1a','\u5978\u8650','\u8fde\u4efb','\u56fd\u5996','\u6492\u94b1','\u6492\u5e01','\u817e\u9000','\u519b\u8f66','\u6279\u91cf\u6b7b\u4ea1','\u74f7\u56fd\u4eba','ptt','\u5f00\u5012\u8f66','\u5386\u53f2\u5012\u9000','\u9e21\u56fd','\u9020\u795e','#10\u5757&&\u949f','\u738b\u6dd1\u5e73','\u6743\u8d35','\u96c6\u6743','\u53cd\u534e','\u4ef2\u52cb','\u90b1\u5360\u8431','\u4e2d\u56fd\u653f\u5e9c','\u4e60&&\u4e24\u4e2a\u5e73\u53f0','\u4e60&&\u80cc\u9505','\u56fd\u6bcd','\u96c6\u4f53\u5931\u8bed','urumuqi','urumqi','\u5357\u65b9\u5468\u672b','\u65b0\u5e74\u81f4\u8f9e','\u5386\u53f2\u7f6a\u4eba','\u6d6a\u8d39\u7eb3\u7a0e\u4eba','\u7ecf\u6d4e\u505c\u6446','\u5927\u5154','\u5927\ud83d\udc30','\u5927\ud83d\udc07','\u90d1\u695a\u7136','\u5371\u5fd7\u7acb','5\u00b11','#\u6e14\u6751','\u5b59\u6587\u658c','\u8d38\u6613\u4e89\u7aef','\u4e39\u9ea6&&\u75ab\u60c5','#\u8ffd\u8d23','#404','\u9ad8\u5c42\u5185\u90e8','\u83dc\u5947','\u8521\u5947','\u83dc\u5176','#\u54c0\u60bc','#\u9ed1\u767d','\u53e4\u6708','#\u4f5c\u79c0','\u4e60&&\u4f5c\u79c0','xi&&\u4f5c\u79c0','\u75ab\u60c5&&\u5931\u4e1a','\u4e60\u50cf','\u4e9a\u6d32\u5468\u520a','\u5265\u593a&&\u77e5\u60c5\u6743','\u4e60&&\u79bb\u5f02','\u4e60&&\u4eb2\u621a','x\u6c0f','\u95eeg','\u6587g','\u95fbg','\u7eb9g','\u6e29g','\u7a33g','\u868ag','\u543bg','\u4efb\u5fd7\u5f3a','\u4efb\u5927\u70ae','#\u8def\u5fb7','\u7fbd\u5352','\u819c\u5305','\u80bf\u9505','\u7ec8\u56fd','\u949f\u9505','\u6253\u538b\u5f02\u5df1','\ud83d\udc3b','\ud83c\udf3e','\ud83d\udc38','\ud83d\udc68\u200d\ud83c\udf3e','\ud83d\udc69\u200d\ud83c\udf3e','\u7ea2\u4e09\u4ee3','\u7ea2\u4e8c\u4ee3','\u4eba\u6c11\u62a5','\u6743\u6597','\u5f71\u5e1d','\u4e61\u5c97','hongkong','\u6076\u6cd5','\u5468\u4fdd\u677e','\u8bba&&\u8001\u4efb','\u4ed1&&\u8001\u4efb','lun&&\u8001\u4efb','\u5802\u5f1f&&\u624d\u660e','\u4e0a\u524d\u7ebf&&\u5b55\u5987','kano','\u4e60&&\u732a\u5934','\u5e0c\u671b\u4e4b\u58f0','\u5f15\u548e\u8f9e\u804c','\u8d35\u65cf\u6c14\u8d28','\u5468\u96ea\u5149','\u4e60&&\u8bf4\u9519','xi&&\u8bf4\u9519','\u4e60&&\u8bf4\u6210','xi&&\u8bf4\u6210','\u4e60&&\u8bfb\u9519','xi&&\u8bfb\u9519','\u4e60&&\u8bfb\u6210','\u4e60&&\u5ff5\u9519','xi&&\u5ff5\u9519','\u4e60&&\u5ff5\u6210','xi&&\u5ff5\u6210','\u4e60&&\u8bb2\u9519','xi&&\u8bb2\u9519','\u4e60&&\u8bb2\u6210','xi&&\u8bb2\u6210','\u5ddd\u5e1d','\u4e60\u5e1d','\u65ad\u5d16\u5f0f\u4e0b\u8dcc','\ud83d\udc53','\u9b54\u5e7b\u4e2d\u56fd','\u4e60&&\u524d\u4efb','\u4e60&&\u5973\u513f','xi&&\u5973\u513f','\u4e60&&\u513f\u5b50','\u4e60&&\u79bb\u5a5a','\u4e60&&\u53e3\u8bef','xi&&\u53e3\u8bef','\u4e60&&\u524d\u59bb','\u7b3c\u7684\u4f20\u4eba','\u75ab\u60c5&&\u635f\u5931','\u6218\u6597\u90e8','\u8681\u6c11','\u6234\u4e0a\u7687\u51a0','\u738b\u51a0\u4e00','\u75ab\u60c5&&\u7834\u4ea7','\u7ebd\u65f6','chinesevirus','\u4f55\u539a\u94e7','\u64cd\u5f04\u8206\u8bba','\u63a7\u5236\u8206\u8bba','\u5e0c\u671b\u7684\u7530\u91ce\u4e0a','\u6392\u540d\u4e0d\u5206\u5148\u540e\u5de6\u53f3\u5fe0\u5978','\u79f0\u738b\u79f0\u9738','#\u4e09\u89d2\u5730','\u6e56\u5e95\u7fa4\u9b42','\u5cb3\u6615','\u5cb3\u65e5\u65a4','\u4e18\u5c71\u65e5\u65a4','\u4f59\u6d5a\u806a','\u68a6\u96e8','\u987e\u4f73\u60a6','\u5f20\u5723\u4e1a','\u5f20\u8000\u7956','\u5218\u9e4f\u534e','\u7c73\u4e45\u5e73','\u674e\u5c55','\u5c55\u632f\u632f','\u90d1\u6c38\u660e','\u9ece\u667a\u82f1','\u9ec4\u4e4b\u950b','\u7f51\u4fe1','\u5982\u679c\u6211\u4e0d\u4ea4\u4ee3\u8c23\u8a00\u5c31\u6c38\u8fdc\u6ca1\u5b8c','#\u5e38\u51ef','\u4e2d\u56fd\u68a6','\u97ed\u56fd','\u97ed\u83dc\u56fd','\u4e00\u8a00\u5802','emptychair','\u5218\u971e','\u4f60\u652f','\u6068\u56fd\u515a','xi\u6c0f','\u4e09\u6708\u534a','\u91d1\u80d6','\u91d1\u4e94\u80d6','\u91d1\u56db\u80d6','\u91d1\u4e09\u80d6','\u91d1\u4e8c\u80d6','\u91d1\u5927\u80d6','\u91d1\u5c0f\u80d6','kimjongun','\u4e00\u7edf\u5929\u4e0b','\u5e26\u8def\u515a','\u4e60&&\u5916\u53f7','\u4e60&&\u96c6\u56e2','\u4e60&&\u7edf\u6cbb','\u7981\u5fcc\u8bcd','\u4e60&&\u8f9e\u804c','\u5929\u6d25\u5146\u7ef4','#\u6e38\u6e38\u4e86\u4f1a','\u55b7\u58a8','\u6cfc\u58a8','\u8463\u7476\u743c','\u8463\u5efa\u5f6a','\u534e\u6d8c','\u641e\u4e2a\u5927\u65b0\u95fb','\u5b59\u529b\u519b','\u738b\u5168\u748b','\u674e\u6587\u8db3','709\u4e8b\u4ef6','709\u5927\u6293\u6355','\u4e60\u674e','flyingv','#\u6709\u7684\u4eba\u6d3b\u7740','chinesedream','\u4e60&&\u7167\u7247','xi&&\u7167\u7247','\u5a01\u6743\u4e3b\u4e49','\u6587\u5316\u6d17\u8111','\u5389\u5bb3\u56fd','\u5389\u5bb3\u4e86\u6211\u7684\u9505','\u4e60&&\u753b\u50cf','xi&&\u753b\u50cf','\u5343\u4eba\u8ba1\u5212','\u4e60\u603b','xi\u603b','x\u603b','\u6d17\u603b','\u4e60\u548c\u5e73','\u674e\u4e8c&&\u7d27\u5f20','\u5c0f\u5f3a++\u6838\u5fc3++\u6ca1\u6709','\u76bf\u716e','\u706d\u706b\u5668','\u653f\u6cbb\u5149\u8c31','#\u8fdb\u5e72','\u7edd\u98df\u6297\u8bae','\u4e60&&\u8868\u5f1f','\u4e73\u5305','\u8fb1\u5305','\u4e0d\u539a','\u4eba\u6743\u7ec4\u7ec7','\u5931\u4e1a\u6f6e','\u5012\u903c\u6539\u9769','\u4eba\u6c11\u516c\u654c','\u4e0a\u6709\u6240\u597d','\u6c5f&&\u55dd\u5c41','\u4e60\u6559\u7236','\u81ea\u613f\u4e3a\u5974','\u4e2d\u9500','\u9752\u5e74\u8282','gretathunberg','\u5b66\u751f&&tank','\u9ece\u745e\u521a','\u738b\u654f','\u5f69\u5305','\u6c34\u6676\u68fa','p2p&&\u7206\u96f7','\u4e0a\u574a','\u6587\u89c4','\u95ee\u9b3c','wengui','\u5730\u7f18\u653f\u6cbb','\u5927\u8dc3\u8fdb','\u5f20\u96ea\u5fe0','\u5baa\u653f','\u5317\u4eac&&\u8840\u8272','\u9648\u51ac','\u5b63\u98ce\u4e66\u56ed','\u72ec\u7acb\u4e2d\u6587\u7b14\u4f1a','po\u58a8','\u6cfcmo','pomo','\u8d22\u9600\u6cbb\u56fd','\u6c5f&&\u67b6\u7a7a','#pxj','li\u5f3a','\u5012\u884c\u9006\u65bd','ply','\u7b2c\u4e00\u592b\u4eba','\u4e3d\u5a9b','\u4ed6\u7684\u56fd','\u5305\u67d0','\u597d\u5927\u559c\u529f','\u6e38\u884c','\u6469\u95e8\u6559','\u52a8\u68ee&&\u4e0b\u67b6','\u8d34\u8bd7','19\u5927','\u5341\u4e5d\u5927','\u4e60&&\u88ab\u7206','\u5e86\u4e30','\u516c\u4e3b&&\u8eab\u4efd\u8bc1','#\u8d39\u52a0\u7f57\u62a5','\u4e60\u80d6','\u4e60\u4e09\u80d6','\u4e60\u5927\u80d6','\u9732\u5baa','\u88ab\u65c5\u6e38','\u4e00\u5e26\u4e00\u8def','#sabi','\u53f0\u6e7e\u56fd','\u652f\u56fd','\u8d70\u5bb6\u4eba','\u4eba\u6c11\u4ee3\u8868\u5927\u4f1a','#\u5e7f\u573a','\u56e2\u7cfb','\u674e\u76f8\u7237','\u4e0d\u5fd8\u521d\u5fc3&&\u7262\u8bb0\u4f7f\u547d','\u7239\u548c\u5988','xi&&\u5ff5\u6210','\u4e60&&\u5ff5\u6210','xi&&\u5ff5\u9519','\u4e60&&\u5ff5\u9519','\u5f53\u5230\u5e95','\u64b8\u8d77\u8896\u5b50','\u8363\u5149\u5f52\u9999\u6e2f','#\u666e\u5229\u7b56','\u80e1\u978d\u94a2','\u9ed1\u4e60','\u4e00\u56fd\u4e24\u5236','\u4e00\u56fd\u4e00\u5236','\u4e60&&\u4eba\u5934','xi&&\u4eba\u5934','\u4e60&&\u5934\u50cf','xi&&\u5934\u50cf','\u56fd\u5b89\u6cd5','\u4e2d\u5802\u5927\u4eba','\u6740\u533b','bigda','\u4f4e\u7aef\u4eba\u53e3','\u8f6c\u578b\u6b63\u4e49','\u6bd5\u8d63&&\u751f\u65e5','\u5b66\u751f&&\u7977\u544a','\u87b3\u81c2\u5f53\u8f66','\u87b3\u81c2\u6321\u8f66','tankman','tank\u4eba','tank&&\u5317\u4eac','\u8d35\u652f','#\u660e\u5929','#\u4eca\u5929','#\u6628\u5929','#\u7eaa\u5ff5','\u6367\u80e1','#\u5730\u644a','\u5c71\u8fbe\u57fa','\u6587\u5b57\u72f1','\u592a\u7956','\u5f53\u7687\u5e1d','\u6cd5\u62c9\u5229&&\u8f66\u7978','\u51b2\u5854','\u4e09\u5e74\u81ea\u7136\u707e\u5bb3','\u4e60\u5973','\u6bdb\u5de6','\u65b0\u65f6\u671f\u7684\u4e0a\u5c71\u4e0b\u4e61','\u65b0\u65f6\u671f\u4e0a\u5c71\u4e0b\u4e61','\u4e60&&\u56fe\u50cf','xi&&\u56fe\u50cf','\u9505\u5a92\u4f53','\u6881\u8273\u840d','\u9648\u73ab','\u8521\u4f1f','\u7aef\u70b9\u661f','\u79ef\u6076\u6210\u4e60','\u9ad8\u534e','\u5f90\u6653\u51ac','\u5f90\u6653\u4e1c','\u90dd\u6d77\u4e1c','\u611f\u6069\u6559\u80b2','\u679c\u7136\u53f0','\u679c\u71c3\u53f0','deng','\u7279\u6743\u9636\u7ea7','\u8981\u88ab\u6d88\u706d\u4e86','350\u4ebf','\u4e27\u4e8b\u559c\u529e','\u4e27\u4e8b\u559c\u62a5','\u5c11\u5987\u767d\u6d01\u98ce','\u4e60&&\u87d1\u8782','xi&&\u87d1\u8782','\u4e60&&\u5931\u8d25','xi&&\u5931\u8d25','\u4eba\u6743\u95ee\u9898','\u515a\u9996','\u5357\u65b9\u516c\u56ed','southpark','\u4e00\u5b69\u56fd\u5ea6','\u6211\u4eec\u7684\u9752\u6625\u5728\u53f0\u6e7e','\u897f\u85cf\u4e03\u5e74','\u897f\u85cf7\u5e74','\u8001\u6c5f','\u8001\u4e60','\u8bb8\u7ae0\u6da6','\u4f55\u9891','coloredsands','\u80e1\u7f16\u751f\u6210\u5668','\u674e\u5e0c','#\u8bb8xx','\u5b50\u5f39\u6ede\u9500','#\u6279\u6597\u5927\u4f1a','\u4e09\u4ee3\u76ee','\u6c5f\u80e1','\u95eb\u4e3d\u68a6','yanlimeng','\u9f50\u5965\u585e\u65af\u5e93','\u63fd\u7092','\u8343\u6e7e','\u4e60\u7237\u7237','\u6c5f\u7237\u7237','\u80e1\u7237\u7237','\u9093\u7237\u7237','\u6ee5\u7528\u6743\u529b','\u4e60&&\u6d0b\u76f8','lifeanddeathinshanghai','\u9648\u5e73','\u963f\u4e60','\u963f\u5201','\u56f4\u89c2\u6539\u53d8\u4e2d\u56fd','\u90aa\u6559\u5934\u5b50','\u5b87\u5b99\u5851\u6599\u4eba','\u5802\u5f1f&&\u8d4c\u535a','\u5802\u5f1f&&\u6d17\u94b1','\u5b9a\u5c0a','\u4e00\u5c0a','\u5317\u6234\u6cb3\u4f1a\u8bae','\u4e60\u601d\u60f3','\u4e60\u6838\u5fc3','\u4e60&&\u66dd\u5149','\u56db\u5927\u6076\u4eba','\u534e\u4e3a++\u79bb\u804c++251','\u8584&&\u897f\u6765','\u9b54\u6cd5\u4e0a\u7f51','\u6302\u68af\u5b50','#\u5b63\u67d0','\u8c37\u6b4c&&\u9000\u51fa\u4e2d\u56fd','\u56db\u6d77\u7ffb\u817e','\u8584&&\u79d1\u666e','\u4f59\u8679','\u4f59\u8302\u6625','\u52a8\u4e71','\u4e60\u4e07\u5c81','\u4e60&&\u751f\u65e5','xi&&\u751f\u65e5','\u6c42&&\u68af\u5b50','\u6708\u51b0','\u4e60&&\u8c03\u67e5','\u4e60&&\u88ab\u67e5','\u9a6c\u5efa','\u9093\u70b3\u5f3a','\u9648\u5e0c','top&&\u5973\u513f','\u4efb&&\u7687\u5e1d','\u4efb&&\u7687\u4e0a','\u8ba8\u4e60','\u4e60&&no1','xi&&no1','\u8521\u971e','caixia','\u4f59\u6587\u751f','\u8981\u53d8\u5929','soundofsilence','\u9c7c\u6446\u6446','yubaibai','\u5f53\u4ee3\u79e6\u59cb\u7687','\u9632\u63a7\u4e0d\u5229','\u9632\u63a7\u4e0d\u529b','\u4e66\u5546&&\u7684\u4e8b','\u80a0\u80c3\u4f1a','mylittleairport','\u4e2a\u4eba\u5d07\u62dc','\u5c0f\u767d\u6768','\u8fd9\u76db\u4e16\u5982\u4f60\u6240\u613f','\u501f\u6807','\u5e9a\u5b50\u5e74&&\u707e\u7978','\u4f1f\u5927\u9886\u8896','\u6211\u5c06\u65e0\u6211','\u9648\u5149\u8bda','\u8868\u5fe0\u5fc3','\u79cb\u96e8\u4e4b\u798f','\u5b66\u751f&&\u5e7f\u573a','\u654f\u611f\u74f7','\u94e9\u7fbd\u800c\u5f52','\u6c5f\u4e8c','\u5b66\u671d\u9c9c','xitler','x\u7279\u52d2','\u756a\u7fbd\u5899','\u7ffb\u8537','\u5218\u514b\u6e05','\u5d07\u796f','#matters','\u6838\u5fc3\u610f\u8bc6','\u4eac\u5e72','\u4e94\u541b\u5b50','\u7ec6\u9888\u74f6','\u65af\u5927\u6797\u4e4b\u6b7b','\u897f\u671d\u9c9c','\u4e60\u671d','\u5317\u4eac&&\u5e73\u53cd','\u4e60\u516c\u4e3b','xi\u516c\u4e3b','\u4e60&&\u4e8c\u5a5a','xi&&\u4e8c\u5a5a','\u7279\u6717\u666e','\u5ddd\u666e','\u5ddd\u5efa\u56fd','\u4e60\u8001\u5927','\u6728\u5170&&\u7239','\u6728\u5170&&\u7238','\u6728\u5170&&\u7236','\u809b\u4ea4','\u5b63\u5b50\u8d8a','\u8fdb\u4e4e','\u8d28\u7591&&\u5927\u5927','\u53cd\u5bf9&&\u5927\u5927','\u5927\u5927&&\u4e0b\u53f0','\u4e60&&\u4e0b\u53f0','xi&&\u4e0b\u53f0','\u4e60&&\u70e7\u6bc1','xi&&\u70e7\u6bc1','\u4e60&&\u711a\u70e7','xi&&\u711a\u70e7','\u4e60&&\u711a\u6bc1','xi&&\u711a\u6bc1','\u7cbe\u751a','\u6930\u6811\u6930\u6c41&&\u4ece\u5c0f\u559d\u5230\u5927','\u9ad8\u6d01\u7684\u7075\u9b42','\u9ad8\u8000\u6d01\u56de\u5fc6\u5f55','\u5927\u5927&&\u9a82\u4e86','davidbowie','\u5927\u536b\u9c8d\u4f0a','\u5239\u90a3\u5929\u5730','\u7279\u8d66','\u5bbd\u8863','\u901a\u5546\u5bbd\u519c','\u6cfc\u9e21','\u6ee1\u8138\u55b7\u7caa','\u4e0d\u5f3a\u81ea\u606f','\u91d1\u79d1\u5f8b\u7389','\u9890\u4f7f\u6c14\u6307','\u51b0\u68d2\u5916\u4ea4','\u7f8e\u56fd\u5927\u9009','\u7f8e\u56fd\u9009\u4e3e','\u7f8e\u56fd\u603b\u7edf\u5927\u9009','\u7f8e\u56fd\u603b\u7edf\u9009\u4e3e','biden','\u62dc\u767b','\u4e60&&\u51fa\u5c14\u53cd\u5c14','xi&&\u51fa\u5c14\u53cd\u5c14','\u88ab\u559d\u8336','x\u8fd1\u4e4e','\u5168\u9762\u5c0f\u5eb7','\u4e60&&\u5305\u5b50','\u4e60&&\u5baa\u6cd5','\u6b66\u6c49\u5e02\u957f','\u5468\u5148\u65fa','\u6e56\u5317\u7701\u957f','\u4e94\u6708\u4e09\u5341\u4e94','5\u670835','\u738b\u5fe0\u6797','\u5305\u5e1d','\u5305\u5b50\u5e1d','yingyong','\u5e94\u52c7','\u5e94y','y\u52c7','ying\u52c7','\u5e94yong','\u97e9\u6b63','hanzheng','\u5f6d\u4f69\u5965','\u6881\u5bb6\u6cb3','\u51c9\u5bb6\u6cb3','\u9ec4\u96ea\u7434','\u8d70\u56fd','\u534e\u5c14\u8857\u65e5\u62a5','\u4f55\u6587','\u652f\u8054\u4f1a','takingbackthelegislature','\u5360\u9886\u7acb\u6cd5\u4f1a','\u97ed\u83dc&&\u9570\u5200','\u8054\u7f72','\u4e60&&\u6743\u529b','\u7533\u8bf7\u4fe1\u606f\u516c\u5f00','\u4e60&&\u751f\u65e5','xi&&\u751f\u65e5','\u6bdb\u8863\u6218','\u8bb8\u5fd7\u6c38','\u94f6\u6cb3\u8054\u90a6','\u5085\u9ad8\u4e49','\u8a00\u8bba\u94b3\u5236','\u6881\u56fd\u96c4','\u5f90\u52e4\u5148','\u6350\u5375','\u5362\u601d\u4f4d','\u8ff7\u822a','\u674e\u54f2\u6615','\u72d7\u5934\u519b\u5e08','\u6b63\u786e\u7684\u96c6\u4f53\u8bb0\u5fc6','\u4e01\u5bb6\u559c','\u660e\u6cfd','\u827e\u672a\u672a','aiweiwei','\u725b\u817e\u5b87','clubhouse','#ch','\u98a0\u8986\u56fd\u5bb6\u653f\u6743','\u803f\u6f47\u7537','\u9a6c\u91d1\u745c','\u6625\u665a','\u9a6c\u5143','\u4e60\u4e7e\u5e73','\u4e60\u5e72\u5e73','\u9664\u4e60','\u4e2d\u56fdzf','zgzf','xinjiangvictimdatabase','\u5f20\u76fc\u6210','\u4e60&&\u8dea\u4e86','\u6a61\u76ae\u56fe\u7ae0','\u6211\u7ba1\u4ed6\u6279\u8bc4\u4e0d\u6279\u8bc4','\u8f9b\u4e11\u6761\u7ea6','\u5239\u90a3\u5929\u5730','\u9882\u5723','rfa','\u6731\u5229\u5b89\u5c3c'];var dataVersion=`21.03.28（${wordsArray.length}）`;var whiteList=['\u620f\u7cbe','\u6d17\u51c0','\u897f\u7ecf','\u5438\u775b','\u897f\u4eac','\u8e4a\u5f84','\u88ad\u8b66','\u6790\u6676','\u5e0c\u91d1','\u7ec6\u6676','\u897f\u664b','\u5438\u8fdb','\u6790\u8fd1','\u897f\u8fdb','\u5438\u91d1','\u897f\u6d25','\u7981\u54c1','\u91d1\u54c1','\u5c3d\u54c1','\u8fd1\u54c1','\u4ec5\u51ed','\u91d1\u74f6','\u9526\u5c4f','\u91d1\u5e73','\u7cbe\u54c1','\u7ade\u54c1','\u6676\u54c1','\u666f\u54c1','\u9888\u8d2b','\u8fdb\u62fc','\u620f\u94f6','\u7ec6\u9888','\u9888\u74f6','\u4eac\u5e73'];