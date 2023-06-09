(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{327:function(a,t,s){"use strict";s.r(t);var _=s(7),v=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"面经手册-·-第6篇《带着面试题学习红黑树操作原理-解析什么时候染色、怎么进行旋转、与2-3树有什么关联》"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面经手册-·-第6篇《带着面试题学习红黑树操作原理-解析什么时候染色、怎么进行旋转、与2-3树有什么关联》"}},[a._v("#")]),a._v(" 面经手册 · 第6篇《带着面试题学习红黑树操作原理，解析什么时候染色、怎么进行旋转、与2-3树有什么关联》")]),a._v(" "),t("p",[a._v("作者：小傅哥\n"),t("br"),a._v("博客："),t("a",{attrs:{href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://bugstack.cn"),t("OutboundLink")],1)]),a._v(" "),t("blockquote",[t("p",[a._v("沉淀、分享、成长，让自己和他人都能有所收获！😄")])]),a._v(" "),t("h2",{attrs:{id:"一、前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[a._v("#")]),a._v(" 一、前言")]),a._v(" "),t("p",[t("code",[a._v("红黑树，是一种高效的自平衡二叉查找树")])]),a._v(" "),t("p",[a._v("Rudolf Bayer 于1978年发明红黑树，在当时被称为"),t("code",[a._v("对称二叉 B 树(symmetric binary B-trees)")]),a._v("。后来，在1978年被 Leo J. Guibas 和 Robert Sedgewick 修改为如今的"),t("code",[a._v("红黑树")]),a._v("。")]),a._v(" "),t("p",[a._v("红黑树具有良好的效率，它可在近似"),t("code",[a._v("O(logN)")]),a._v(" 时间复杂度下完成插入、删除、查找等操作，因此红黑树在业界也被广泛应用，比如 Java 中的 TreeMap，JDK 1.8 中的 HashMap、C++ STL 中的 map 均是基于红黑树结构实现的。")]),a._v(" "),t("p",[t("code",[a._v("死记硬背，很难学会")])]),a._v(" "),t("p",[a._v("红黑树的结构和设计都非常优秀，也同样在实现上有着复杂的处理逻辑，包括插入或者删除节点时；颜色变化、旋转操作等操作。但如果只把这些知识点硬背下来，什么时候染色、什么时候旋转，是没有多大意义的，用不了多久也就忘记了。"),t("strong",[a._v("所以这部分的学习，了解其根本更重要。")])]),a._v(" "),t("h2",{attrs:{id:"二、面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、面试题"}},[a._v("#")]),a._v(" 二、面试题")]),a._v(" "),t("p",[t("strong",[a._v("谢飞机")]),a._v("，考你几个红黑树的知识点🦀")]),a._v(" "),t("ol",[t("li",[a._v("红黑树的数据结构都用在哪些场景，有什么好处？")]),a._v(" "),t("li",[a._v("红黑树的时间复杂度是多少？")]),a._v(" "),t("li",[a._v("红黑树中插入新的节点时怎么保持平衡？")])]),a._v(" "),t("p",[a._v("🤥飞机，2-3树是不没看，回去等消息吧！")]),a._v(" "),t("h2",{attrs:{id:"三、2-3树与红黑树的等价性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、2-3树与红黑树的等价性"}},[a._v("#")]),a._v(" 三、2-3树与红黑树的等价性")]),a._v(" "),t("p",[a._v("在上一章节"),t("a",{attrs:{href:"https://bugstack.cn/interview/2020/08/16/%E9%9D%A2%E7%BB%8F%E6%89%8B%E5%86%8C-%E7%AC%AC5%E7%AF%87-%E7%9C%8B%E5%9B%BE%E8%AF%B4%E8%AF%9D-%E8%AE%B2%E8%A7%A32-3%E5%B9%B3%E8%A1%A1%E6%A0%91-%E7%BA%A2%E9%BB%91%E6%A0%91%E7%9A%84%E5%89%8D%E8%BA%AB.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("《讲解2-3平衡树「红黑树的前身」》"),t("OutboundLink")],1),a._v("，使用了大量图例讲解了2-3树，并在标题处写出它是红黑树的前身。阅读后更容易理解红黑树相关知识。")]),a._v(" "),t("p",[t("strong",[a._v("红黑树规则")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.")]),a._v(" 根节点是黑色\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.")]),a._v(" 节点是红黑或者黑色\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.")]),a._v(" 所有子叶节点都是黑色"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("叶子是"),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("NIL")]),a._v("节点，默认没有画出来"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.")]),a._v(" 每个红色节点必须有两个黑色子节点"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("也同样说明一条链路上不能有链路的红色节点"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.")]),a._v(" 黑高，从任一节点到齐每个叶子节点，经过的路径都包含相同数目的黑色节点\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("那么，这些规则是怎么总结定义出来的呢？接下里我们一步步分析讲解。")]),a._v(" "),t("h3",{attrs:{id:"_1-为什么既有2-3树要有红黑树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么既有2-3树要有红黑树"}},[a._v("#")]),a._v(" 1. 为什么既有2-3树要有红黑树")]),a._v(" "),t("p",[a._v("首先"),t("code",[a._v("2-3树")]),a._v("("),t("em",[a._v("读法：二三树")]),a._v(")就是一个节点有1个或者2个元素，而实际上2-3树转红黑树是由概念模型"),t("code",[a._v("2-3-4树")]),a._v("转换而来的。"),t("code",[a._v("-4叉")]),a._v("就是一个节点里有3个元素，这在2-3树中会被调整，但是在概念模型中是会被保留的。")]),a._v(" "),t("p",[a._v("虽然"),t("code",[a._v("2-3-4树")]),a._v("也是具备"),t("code",[a._v("2-3树")]),a._v("同样的平衡树的特性，但是如果直接把这样的模型用代码实现就会很麻烦，且效率不高，这里的复杂点包括；")]),a._v(" "),t("ol",[t("li",[a._v("2-叉、3-叉、4-叉，三种结构的节点类型，互相转换复杂度较高")]),a._v(" "),t("li",[a._v("3-叉、4-叉，节点在数据比较上需要进行多次，不像2-叉节点，直接布尔类型比较即可"),t("em",[a._v("非左即右")])]),a._v(" "),t("li",[a._v("代码实现上对每种差异，都需要有额外的代码，规则不够标准化")])]),a._v(" "),t("p",[t("strong",[a._v("所以")]),a._v("，希望找到一种平衡关系，既保持2-3树平衡和O(logn)的特性，又能在代码实现上更加方便，那么就诞生了红黑树。")]),a._v(" "),t("h3",{attrs:{id:"_2-简单2-3树转红黑树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-简单2-3树转红黑树"}},[a._v("#")]),a._v(" 2. 简单2-3树转红黑树")]),a._v(" "),t("p",[t("code",[a._v("2-3树")]),a._v("转红黑树，也可以说红黑树是"),t("code",[a._v("2-3树")]),a._v("和"),t("code",[a._v("2-3-4树")]),a._v("的另外一种表现形式，也就是更利于编码实现的形式。")]),a._v(" "),t("p",[t("strong",[a._v("简单转换示例；")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"2-叉、3-叉、4-叉，转换红黑树示意图","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-01.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("从上图可以看出，2-3-4树与红黑树的转换关系，包括；")]),a._v(" "),t("ol",[t("li",[a._v("2-叉节点，转换比较简单，只是把原有节点转换为黑色节点")]),a._v(" "),t("li",[a._v("3-叉节点，包括了2个元素，先用红色线把两个节点相连，之后拆分出来，最后调整高度"),t("em",[a._v("黑色节点在上")])]),a._v(" "),t("li",[a._v("4-叉节点，包括了3个元素，分别用红黑线连接，之后拆分出来拉升高度。"),t("em",[a._v("这个拉升过程和2-3树调整一致，只是添加了颜色")])])]),a._v(" "),t("p",[t("strong",[a._v("综上")]),a._v("，就是2-3-4树的节点转换，总结出来的规则，如下；")]),a._v(" "),t("ol",[t("li",[a._v("将2-3-4树，用二叉树的形式表示")]),a._v(" "),t("li",[a._v("3-叉、4-叉节点，使用红色、黑色连线进行连接")]),a._v(" "),t("li",[a._v("另外，3-叉节点有两种情况，导致转换成二叉树，就有左倾和右倾")])]),a._v(" "),t("h3",{attrs:{id:"_3-复杂2-3树转红黑树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-复杂2-3树转红黑树"}},[a._v("#")]),a._v(" 3. 复杂2-3树转红黑树")]),a._v(" "),t("p",[a._v("在"),t("code",[a._v("简单2-3树转换红黑树")]),a._v("的过程中，了解到一个基本的转换规则右旋定义，接下来我们在一个稍微复杂一点的"),t("code",[a._v("2-3树")]),a._v("与红黑树的对应关系，如下图；")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"复杂2-3树转换红黑树","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-02.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("上图是一个稍微复杂点的2-3树，转换为红黑树的过程，是不这样一张图让你对红黑树更有感觉了，同时它也满足一下条件；")]),a._v(" "),t("ol",[t("li",[a._v("从任意节点到叶子节点，所经过的黑色节点数目相同")]),a._v(" "),t("li",[a._v("黑色节点保持着整体的平衡性，也就是让整个红黑树接近于O(logn)时间复杂度")]),a._v(" "),t("li",[a._v("其他红黑树的特点也都满足，可以对照红黑树的特性进行比对")])]),a._v(" "),t("h2",{attrs:{id:"四、红黑树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、红黑树"}},[a._v("#")]),a._v(" 四、红黑树")]),a._v(" "),t("h3",{attrs:{id:"_1-平衡操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-平衡操作"}},[a._v("#")]),a._v(" 1. 平衡操作")]),a._v(" "),t("p",[a._v("通过在上一章节2-3树的学习，在插入节点时并不会插到空位置，而是与现有节点融合以及调整，保持整个树的平衡。")]),a._v(" "),t("p",[a._v("而红黑树是2-3-4树的一种概念模型转换而来，在插入节点时通过红色链接相连，也就是插入红色节点。插入完成后进行调整，以保持树接近平衡。")]),a._v(" "),t("p",[a._v("那么，为了让红黑树达到平衡状态，主要包括染色、↔左右旋转、这些做法其实都是从2-3树演化过来的。接下来我们就分别讲解几种规则的演化过程，以此更好了解红黑树的平衡操作。")]),a._v(" "),t("h4",{attrs:{id:"_1-1-左旋转"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-左旋转"}},[a._v("#")]),a._v(" 1.1 左旋转")]),a._v(" "),t("p",[t("strong",[a._v("左旋定义：")]),a._v(" 把一个向右倾斜的红节点链接(2-3树，3-叉双元素节点)，转化为左链接。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-03.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("背景：顺序插入元素，1、2、3，2-3树保持平衡，红黑树暂时处于右倾斜。")]),a._v(" "),t("p",[a._v("接下来我们分别对比两种树结构的平衡操作；")]),a._v(" "),t("ol",[t("li",[a._v("2-3树，所有插入的节点都会保持在一个节点上，之后通过调整节点位置，保持平衡。")]),a._v(" "),t("li",[a._v("红黑树，则需要通过节点的左侧旋转，将元素2拉起来，元素1和元素3，分别成为左右子节点。")])]),a._v(" "),t("p",[t("em",[a._v("红黑树的左旋，只会处理与之对应的2-3树节点进行操作，不会整体改变。")])]),a._v(" "),t("h4",{attrs:{id:"_1-2-右旋转"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-右旋转"}},[a._v("#")]),a._v(" 1.2 右旋转")]),a._v(" "),t("p",[t("strong",[a._v("右旋定义：")]),a._v(" 把一个向左倾斜的红节点连接(2-3树，3-叉双元素节点)，转换为右连接。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-04.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("背景：顺序插入元素，3、1、1，2-3树保持平衡，红黑树暂时处于左倾斜。")]),a._v(" "),t("p",[a._v("接下来我们分别对比两种树结构的平衡操作；")]),a._v(" "),t("ol",[t("li",[a._v("2-3树，所有插入的节点都会保持在一个节点上，之后通过调整节点位置，保持平衡。")]),a._v(" "),t("li",[a._v("红黑树，则需要通过节点的右侧旋转，将元素2拉起来，元素1和元素3，分别成为左右子节点。")])]),a._v(" "),t("p",[t("strong",[a._v("你会发现，左旋与右旋是相互对应的，但在2-3树中是保持不变的")])]),a._v(" "),t("h4",{attrs:{id:"_1-3-左右旋综合运用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-左右旋综合运用"}},[a._v("#")]),a._v(" 1.3 左右旋综合运用")]),a._v(" "),t("p",[a._v("左旋、右旋，我们已经有了一个基本的概念，那么接下来我们再看一个可以综合左右旋以及对应2-3树的演化案例，如下；")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-05.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("以上的例子分别演示了一个元素插入的三种情况，如下；")]),a._v(" "),t("ol",[t("li",[a._v("1、3，插入0，左侧底部插入，与2-3树相比，需要右旋保持平衡")]),a._v(" "),t("li",[a._v("1、3，插入2，中间位置插入，首先进行左旋调整元素位置，之后进行右旋进行树平衡")]),a._v(" "),t("li",[a._v("1、3，插入5，右侧位置插入，此时正好保持树平衡，不需要调整")])]),a._v(" "),t("h4",{attrs:{id:"_1-4-染色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-染色"}},[a._v("#")]),a._v(" 1.4 染色")]),a._v(" "),t("p",[a._v("在2-3树中，插入一个节点，为了保持树平衡是不插入到空位置上的，当插入节点后元素数量有3个后则需要调整中间元素向上，来保持树平衡。与之对应的红黑树则需要调整颜色，来保证红黑树的平衡规则，具体参考如下；")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-06.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_2-旋转-染色运用案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-旋转-染色运用案例"}},[a._v("#")]),a._v(" 2. 旋转+染色运用案例")]),a._v(" "),t("p",[a._v("接下来我们把上面讲解到的"),t("code",[a._v("旋转")]),a._v("、"),t("code",[a._v("染色")]),a._v("，运用到一个实际案例中，如下图；")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-07.png",loading:"lazy"}})]),a._v(" "),t("ul",[t("li",[a._v("首先从左侧开始，是一个按照顺序插入生产出来的红黑树，插入顺序；"),t("code",[a._v("7、2、8、1、4、3、5")])]),a._v(" "),t("li",[a._v("α，向目前红黑树插入元素6，插入后右下角有三个红色节点；"),t("code",[a._v("3、5、6")]),a._v("。")]),a._v(" "),t("li",[a._v("β，因为右下角满足染色条件，变换后；黑色节点(3、5)、红色节点(4、6)。")]),a._v(" "),t("li",[a._v("γ，之后看被红色连线链接的节点"),t("code",[a._v("7、4、2")]),a._v("，最小节点在中间，左旋平衡树结构。")]),a._v(" "),t("li",[a._v("δ，左旋完成后，红色链接线的"),t("code",[a._v("7、4、2")]),a._v("为做倾顺序节点，因此需要做右旋操作。")]),a._v(" "),t("li",[a._v("ε，左旋、右旋，调整完成后，又满足了染色操作。到此恢复红黑树平衡。")])]),a._v(" "),t("p",[t("em",[a._v("注意，所有连接红色节点的，都是是红色线。以此与2-3树做对应。")])]),a._v(" "),t("h3",{attrs:{id:"_3-删除操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除操作"}},[a._v("#")]),a._v(" 3. 删除操作")]),a._v(" "),t("p",[a._v("根据2-3-4树模型的红黑树，在删除的时候基本是按照2-3方式进行删除，只不过在这个过程中需要染色和旋转操作，以保持树平衡。删除过程主要可以分为如图四种情况，如下；")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-08.png",loading:"lazy"}})]),a._v(" "),t("h4",{attrs:{id:"_3-1-删除子叶红色节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-删除子叶红色节点"}},[a._v("#")]),a._v(" 3.1 删除子叶红色节点")]),a._v(" "),t("p",[a._v("红色子叶节点的删除并不会破坏树平衡，也不影响树高，所以直接删除即可，如下；")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-09.png",loading:"lazy"}})]),a._v(" "),t("h4",{attrs:{id:"_3-2-删除左侧节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-删除左侧节点"}},[a._v("#")]),a._v(" 3.2 删除左侧节点")]),a._v(" "),t("h5",{attrs:{id:"_3-2-1-被删节点兄弟为黑色-含右子节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-被删节点兄弟为黑色-含右子节点"}},[a._v("#")]),a._v(" 3.2.1 被删节点兄弟为黑色&含右子节点")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-10.png",loading:"lazy"}})]),a._v(" "),t("h5",{attrs:{id:"_3-2-2-被删节点兄弟为黑色-含左子节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-被删节点兄弟为黑色-含左子节点"}},[a._v("#")]),a._v(" 3.2.2 被删节点兄弟为黑色&含左子节点")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-11.png",loading:"lazy"}})]),a._v(" "),t("h5",{attrs:{id:"_3-2-3-被删节点兄弟为黑色-含双子节点-红"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-被删节点兄弟为黑色-含双子节点-红"}},[a._v("#")]),a._v(" 3.2.3 被删节点兄弟为黑色&含双子节点(红)")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-12.png",loading:"lazy"}})]),a._v(" "),t("h5",{attrs:{id:"_3-2-4-被删节点兄弟为黑色-不含子节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-被删节点兄弟为黑色-不含子节点"}},[a._v("#")]),a._v(" 3.2.4 被删节点兄弟为黑色&不含子节点")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-13.png",loading:"lazy"}})]),a._v(" "),t("h5",{attrs:{id:"_3-2-5-被删节点兄弟为黑色-含双黑节点-黑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-被删节点兄弟为黑色-含双黑节点-黑"}},[a._v("#")]),a._v(" 3.2.5 被删节点兄弟为黑色&含双黑节点(黑)")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-14.png",loading:"lazy"}})]),a._v(" "),t("h4",{attrs:{id:"_3-3-删除右侧节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-删除右侧节点"}},[a._v("#")]),a._v(" 3.3. 删除右侧节点")]),a._v(" "),t("h5",{attrs:{id:"_3-3-1-被删节点兄弟为黑色-含左子节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-被删节点兄弟为黑色-含左子节点"}},[a._v("#")]),a._v(" 3.3.1 被删节点兄弟为黑色&含左子节点")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-15.png",loading:"lazy"}})]),a._v(" "),t("h5",{attrs:{id:"_3-3-2-被删节点兄弟为黑色-含右子节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-被删节点兄弟为黑色-含右子节点"}},[a._v("#")]),a._v(" 3.3.2 被删节点兄弟为黑色&含右子节点")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-16.png",loading:"lazy"}})]),a._v(" "),t("h5",{attrs:{id:"_3-3-3-被删节点兄弟为黑色-含双子节点-红"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-被删节点兄弟为黑色-含双子节点-红"}},[a._v("#")]),a._v(" 3.3.3 被删节点兄弟为黑色&含双子节点(红)")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-17.png",loading:"lazy"}})]),a._v(" "),t("h5",{attrs:{id:"_3-2-4-被删节点兄弟为黑色-不含子节点-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-被删节点兄弟为黑色-不含子节点-2"}},[a._v("#")]),a._v(" 3.2.4 被删节点兄弟为黑色&不含子节点")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-18.png",loading:"lazy"}})]),a._v(" "),t("h5",{attrs:{id:"_3-2-5-被删节点兄弟为黑色-含双黑节点-黑-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-被删节点兄弟为黑色-含双黑节点-黑-2"}},[a._v("#")]),a._v(" 3.2.5 被删节点兄弟为黑色&含双黑节点(黑)")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://bugstack.cn/assets/images/2020/interview/interview-7-19.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"五、总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、总结"}},[a._v("#")]),a._v(" 五、总结")]),a._v(" "),t("ul",[t("li",[a._v("从2-3树到解释2-3-4树概念推导出红黑树，从元素的在2-3树中的插入删除对照到红黑树中保持平衡操作，从原理解析到各项情况实际操作等，以及把绝大部分红黑树内容全部介绍完成。")]),a._v(" "),t("li",[a._v("红黑树的原理理解要比背概念更重要，这是一种数据结构的学习，更重要的是技术迁移学习，而不是为了面试背几道题。可能这个学习过程非常烧脑，但适合学习根本。")]),a._v(" "),t("li",[a._v("在编写本篇文章时，参考了大量的资料进行校正，包括优秀文章；\n"),t("ul",[t("li",[a._v("红黑树可视化："),t("a",{attrs:{href:"https://www.cs.usfca.edu/~galles/visualization/RedBlack.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.cs.usfca.edu/~galles/visualization/RedBlack.html"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("做倾红黑树论文： "),t("a",{attrs:{href:"https://www.researchgate.net/publication/268000589_Left-leaning_Red-Black_Trees",target:"_blank",rel:"noopener noreferrer"}},[a._v("Left-leaning Red-Black Trees"),t("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=v.exports}}]);