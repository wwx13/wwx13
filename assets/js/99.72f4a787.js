(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{658:function(t,s,n){"use strict";n.r(s);var a=n(44),p=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("1.1 Kmeans\n无监督算法，给出数据的簇属性。")]),t._v(" "),n("p",[t._v("1.2 算法步骤\n所以 K-means 的算法步骤为：")]),t._v(" "),n("p",[t._v("选择初始化的 k 个样本作为初始聚类中心 [公式] ；\n针对数据集中每个样本 [公式] 计算它到 k 个聚类中心的距离并将其分到距离最小的聚类中心所对应的类中；\n针对每个类别 [公式] ，重新计算它的聚类中心 [公式] （即属于该类的所有样本的质心）；\n重复上面 2 3 两步操作，直到达到某个中止条件（迭代次数、最小误差变化等）。")]),t._v(" "),n("p",[t._v("1.3 复杂度\n我们先看下伪代码：")]),t._v(" "),n("p",[t._v("获取数据 n 个 m 维的数据")]),t._v(" "),n("p",[t._v("随机生成 K 个 m 维的点")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("while(t)\n    for(int i=0;i < n;i++)\n        for(int j=0;j < k;j++)\n            计算点 i 到类 j 的距离\n    for(int i=0;i < k;i++)\n        1. 找出所有属于自己这一类的所有数据点\n        2. 把自己的坐标修改为这些数据点的中心点坐标\nend\n")])])]),n("p",[t._v("时间复杂度： [公式] ，其中，t 为迭代次数，k 为簇的数目，n 为样本点数，m 为样本点维度。")]),t._v(" "),n("p",[t._v("空间复杂度： [公式] ，其中，k 为簇的数目，m 为样本点维度，n 为样本点数。")]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("优缺点")])]),t._v(" "),n("p",[t._v("2.1 优点")]),t._v(" "),n("p",[t._v("容易理解，聚类效果不错，虽然是局部最优， 但往往局部最优就够了；\n处理大数据集的时候，该算法可以保证较好的伸缩性；\n当簇近似高斯分布的时候，效果非常不错；\n算法复杂度低。")]),t._v(" "),n("p",[t._v("2.2 缺点")]),t._v(" "),n("p",[t._v("K 值需要人为设定，不同 K 值得到的结果不一样；\n对初始的簇中心敏感，不同选取方式会得到不同结果；\n对异常值敏感；\n样本只能归为一类，不适合多分类任务；\n不适合太离散的分类、样本类别不平衡的分类、非凸形状的分类。")]),t._v(" "),n("p",[t._v("2.3 特性\nk均值聚类是使用最大期望算法（Expectation-Maximization algorithm）求解的高斯混合模型（Gaussian Mixture Model, GMM）在正态分布的协方差为单位矩阵，且隐变量的后验分布为一组狄拉克δ函数时所得到的特例 [1]  。")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pandas "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" pd\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" random\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KMeansClusterer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ndarray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cluster_num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ndarray "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ndarray\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cluster_num "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cluster_num\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("points"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__pick_start_point"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ndarray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cluster_num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cluster")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cluster_num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ndarray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            distance_min "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxsize\n            index"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("points"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                \n                distance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__distance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("points"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" distance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" distance_min"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    distance_min "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" distance\n                    index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n            result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tolist"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        new_center"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            new_center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tolist"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 中心点未改变，说明达到稳态，结束递归")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("points"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("new_center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n         \n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("points"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cluster"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n             \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__center")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''计算一组坐标的中心点\n        '''")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算每一列的平均值")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("axis"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__distance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''计算两点间距\n        '''")]),t._v("\n        tmp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            tmp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("pow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("pow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__pick_start_point")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ndarray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cluster_num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" cluster_num "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" cluster_num "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ndarray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" Exception"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"簇数设置有误"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 随机点的下标")]),t._v("\n        indexes"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("random"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sample"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ndarray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("step"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tolist"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cluster_num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        points"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" index "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" indexes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            points"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ndarray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tolist"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("points"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=p.exports}}]);