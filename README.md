# NouBan-js

NouBan是一个收集豆瓣敏感词的项目，同时提供依赖于现有词库的敏感词查找。

Nouban is an anti-censorship project aiming to record censored words in Douban, a Chinese social network platform. It is merely a glimpse of the censorship system in Chinese 'Innernet'.

Contact me: zyfws5ydc@relay.firefox.com

------

### 帮助与说明

#### 如何最快速找到敏感词？

> 首先，你可以用这个工具找一找，看是否有已收录的敏感词：<a href='https://drrouen.github.io/tools/NouBan/'>NouBan</a>。如果没有找到，请用以下方法：
>
> 二分法：与数学中的二分法一样，可以在最少次尝试下，快速缩小敏感词范围。一段包含敏感词的文本，将其一分为二，并分别发出测试，将被锁的那一半再次一分为二，并重复次操作。但如果一分为二后，两部分都未触发审核，那就说明这是两个组合词。此时，二分法就不适用了，可以从头开始一句一句话删除，如果一直锁，那就说明删除的句子中不包含敏感词，以此方法逐步缩小范围。

#### 豆瓣的敏感词机制是怎么样的？

> 一条豆瓣广播/日记/评论发出后，会进入到敏感词匹配机制中。在这之前，会先正则匹配，去除所有非中英文、非数字、非假名的符号。带标号的拉丁字母、希腊字母、西里尔字母等其他字母、空格、分行也会被去除。大小写字母和繁简中文会被统一。在此之后，提取的内容再进行关键字匹配，若匹配上，则该动态将仅自己可见，并进入人工审核队列。
> 目前，豆瓣的敏感词分为两类：一类是单词，如“独裁”、“极左”；另一类是组合词，如“疫情+失业”、“孕妇+上前线”。目前已发现两个、三个词构成的组合词。这几个词无论隔多远，只要在同一条中出现，就会被判定触发审核。
> 豆瓣没有分词功能。
> 与某人相关的谐音词，例如“锡金”、“金苹”，粗略估计数量超过一千二百个，仅有少部分常用词如“仅凭”、“精品”被除外。
> 很容易忽略的一点是，审查的范围不仅仅限于用户的广播、评论、日记；从站外分享的网页、转发的小组讨论、转发豆瓣的书影音条目，只要标题中包含敏感词，就会触发审核。

#### 这些词条是如何发现的？

> 当然，目前都是人工发现的。

#### 该检测脚本的原理？

> 目前采用的是已收录的敏感词库逐条匹配方法。首先对包含特殊符号及emoji的词匹配；然后对输入的文字正则处理：保留CJK（中日韩）统一表意字符、大小写拉丁字母、数字，其他字符均被去除。在此基础上进行大小写转换、繁简转换，然后逐一比对，并返回成功匹配的词条。另外，上面所说的一类特殊避讳词采用了拼音比对，将常用的谐音字替换为拼音，然后检查。

#### 有关网址的审查

> 众所周知，在广播或评论中发出的网址会被缩成豆瓣的短网址。这就给了豆瓣更高的权力：他可以选择不解析该短网址，点开会显示not found。
>
> 被加入黑名单的网址，不能再被发出来（显示含有被禁止的内容）。
>
>因此，如果你想发一些敏感的链接，请尽量不要直接发出网址来，可以用句号代替点，或者把你的网址先通过三方短网址缩短一遍，再发到豆瓣上。


------
