(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{509:function(e,t,r){e.exports=r.p+"assets/img/sentence_piece.ee555eee.png"},642:function(e,t,r){"use strict";r.r(t);var a=r(44),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"bpe-wordpiece-ulm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bpe-wordpiece-ulm"}},[e._v("#")]),e._v(" BPE/WordPiece/ULM")]),e._v(" "),a("p",[e._v("前言")]),e._v(" "),a("p",[e._v("Subword算法如今已经成为了一个重要的NLP模型性能提升方法。自从2018年BERT横空出世横扫NLP界各大排行榜之后，各路预训练语言模型如同雨后春笋般涌现，其中Subword算法在其中已经成为标配。所以作为NLP界从业者，有必要了解下Subword算法的原理。")]),e._v(" "),a("p",[e._v("目录")]),e._v(" "),a("p",[e._v("与传统空格分隔tokenization技术的对比\nByte Pair Encoding\nWordPiece\nUnigram Language Model\n总结")]),e._v(" "),a("ol",[a("li",[e._v("与传统空格分隔tokenization技术的对比\n传统词表示方法无法很好的处理未知或罕见的词汇（OOV问题）\n传统词tokenization方法不利于模型学习词缀之间的关系\nE.g. 模型学到的“old”, “older”, and “oldest”之间的关系无法泛化到“smart”, “smarter”, and “smartest”。\nCharacter embedding作为OOV的解决方法粒度太细\nSubword粒度在词与字符之间，能够较好的平衡OOV问题")]),e._v(" "),a("li",[e._v("Byte Pair Encoding (Sennrich et al., 2015)[1]\nBPE(字节对)编码或二元编码是一种简单的数据压缩形式，其中最常见的一对连续字节数据被替换为该数据中不存在的字节[2]。 后期使用时需要一个替换表来重建原始数据。OpenAI GPT-2 与Facebook RoBERTa均采用此方法构建subword vector.")])]),e._v(" "),a("p",[e._v('优点\n可以有效地平衡词汇表大小和步数(编码句子所需的token数量)。\n缺点\n基于贪婪和确定的符号替换，不能提供带概率的多个分片结果。\n2.1 算法[3]\n准备足够大的训练语料\n确定期望的subword词表大小\n将单词拆分为字符序列并在末尾添加后缀“ </ w>”，统计单词频率。 本阶段的subword的粒度是字符。 例如，“ low”的频率为5，那么我们将其改写为“ l o w </ w>”：5\n统计每一个连续字节对的出现频率，选择最高频者合并成新的subword\n重复第4步直到达到第2步设定的subword词表大小或下一个最高频的字节对出现频率为1\n停止符"'),e._v('"的意义在于表示subword是词后缀。举例来说："st"字词不加"'),e._v('"可以出现在词首如"st ar"，加了"'),e._v('"表明改字词位于词尾，如"wide st'),e._v('"，二者意义截然不同。')]),e._v(" "),a("p",[e._v("每次合并后词表可能出现3种变化：")]),e._v(" "),a("p",[e._v("+1，表明加入合并后的新字词，同时原来的2个子词还保留（2个字词不是完全同时连续出现）\n+0，表明加入合并后的新字词，同时原来的2个子词中一个保留，一个被消解（一个字词完全随着另一个字词的出现而紧跟着出现）\n-1，表明加入合并后的新字词，同时原来的2个子词都被消解（2个字词同时连续出现）\n实际上，随着合并的次数增加，词表大小通常先增加后减小。")]),e._v(" "),a("p",[e._v("例子")]),e._v(" "),a("p",[e._v("输入：")]),e._v(" "),a("p",[e._v("{'l o w "),e._v("': 5, 'l o w e r "),e._v("': 2, 'n e w e s t "),e._v("': 6, 'w i d e s t "),e._v('\': 3}\nIter 1, 最高频连续字节对"e"和"s"出现了6+3=9次，合并成"es"。输出：')]),e._v(" "),a("p",[e._v("{'l o w "),e._v("': 5, 'l o w e r "),e._v("': 2, 'n e w es t "),e._v("': 6, 'w i d es t "),e._v('\': 3}\nIter 2, 最高频连续字节对"es"和"t"出现了6+3=9次, 合并成"est"。输出：')]),e._v(" "),a("p",[e._v("{'l o w "),e._v("': 5, 'l o w e r "),e._v("': 2, 'n e w est "),e._v("': 6, 'w i d est "),e._v('\': 3}\nIter 3, 以此类推，最高频连续字节对为"est"和"'),e._v('" 输出：')]),e._v(" "),a("p",[e._v("{'l o w "),e._v("': 5, 'l o w e r "),e._v("': 2, 'n e w est"),e._v("': 6, 'w i d est"),e._v("': 3}\n……")]),e._v(" "),a("p",[e._v("Iter n, 继续迭代直到达到预设的subword词表大小或下一个最高频的字节对出现频率为1。")]),e._v(" "),a("p",[e._v("2.2 BPE实现[4]\nimport re, collections")]),e._v(" "),a("p",[e._v("def get_stats(vocab):\npairs = collections.defaultdict(int)\nfor word, freq in vocab.items():\nsymbols = word.split()\nfor i in range(len(symbols)-1):\npairs[symbols[i],symbols[i+1]] += freq\nreturn pairs")]),e._v(" "),a("p",[e._v("def merge_vocab(pair, v_in):\nv_out = {}\nbigram = re.escape(' '.join(pair))\np = re.compile(r'(?<!\\S)' + bigram + r'(?!\\S)')\nfor word in v_in:\nw_out = p.sub(''.join(pair), word)\nv_out[w_out] = v_in[word]\nreturn v_out")]),e._v(" "),a("p",[e._v("vocab = {'l o w "),e._v("': 5, 'l o w e r "),e._v("': 2, 'n e w e s t "),e._v("': 6, 'w i d e s t "),e._v("': 3}\nnum_merges = 1000\nfor i in range(num_merges):\npairs = get_stats(vocab)\nif not pairs:\nbreak\nbest = max(pairs, key=pairs.get)\nvocab = merge_vocab(best, vocab)\nprint(best)")]),e._v(" "),a("h1",{attrs:{id:"print-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#print-output"}},[e._v("#")]),e._v(" print output")]),e._v(" "),a("h1",{attrs:{id:"e-s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#e-s"}},[e._v("#")]),e._v(" ('e', 's')")]),e._v(" "),a("h1",{attrs:{id:"es-t"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es-t"}},[e._v("#")]),e._v(" ('es', 't')")]),e._v(" "),a("h1",{attrs:{id:"est"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#est"}},[e._v("#")]),e._v(" ('est', '"),e._v("')")]),e._v(" "),a("h1",{attrs:{id:"l-o"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#l-o"}},[e._v("#")]),e._v(" ('l', 'o')")]),e._v(" "),a("h1",{attrs:{id:"lo-w"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lo-w"}},[e._v("#")]),e._v(" ('lo', 'w')")]),e._v(" "),a("h1",{attrs:{id:"n-e"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#n-e"}},[e._v("#")]),e._v(" ('n', 'e')")]),e._v(" "),a("h1",{attrs:{id:"ne-w"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ne-w"}},[e._v("#")]),e._v(" ('ne', 'w')")]),e._v(" "),a("h1",{attrs:{id:"new-est"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-est"}},[e._v("#")]),e._v(" ('new', 'est"),e._v("')")]),e._v(" "),a("h1",{attrs:{id:"low"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#low"}},[e._v("#")]),e._v(" ('low', '"),e._v("')")]),e._v(" "),a("h1",{attrs:{id:"w-i"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#w-i"}},[e._v("#")]),e._v(" ('w', 'i')")]),e._v(" "),a("h1",{attrs:{id:"wi-d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wi-d"}},[e._v("#")]),e._v(" ('wi', 'd')")]),e._v(" "),a("h1",{attrs:{id:"wid-est"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wid-est"}},[e._v("#")]),e._v(" ('wid', 'est"),e._v("')")]),e._v(" "),a("h1",{attrs:{id:"low-e"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#low-e"}},[e._v("#")]),e._v(" ('low', 'e')")]),e._v(" "),a("h1",{attrs:{id:"lowe-r"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lowe-r"}},[e._v("#")]),e._v(" ('lowe', 'r')")]),e._v(" "),a("h1",{attrs:{id:"lower"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lower"}},[e._v("#")]),e._v(" ('lower', '"),e._v("')")]),e._v(" "),a("p",[e._v("2.3 编码和解码[4]\n编码\n在之前的算法中，我们已经得到了subword的词表，对该词表按照子词长度由大到小排序。编码时，对于每个单词，遍历排好序的子词词表寻找是否有token是当前单词的子字符串，如果有，则该token是表示单词的tokens之一。")]),e._v(" "),a("p",[e._v("我们从最长的token迭代到最短的token，尝试将每个单词中的子字符串替换为token。 最终，我们将迭代所有tokens，并将所有子字符串替换为tokens。 如果仍然有子字符串没被替换但所有token都已迭代完毕，则将剩余的子词替换为特殊token，如"),a("unk",[e._v("。")])],1),e._v(" "),a("p",[e._v("例子")]),e._v(" "),a("h1",{attrs:{id:"给定单词序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给定单词序列"}},[e._v("#")]),e._v(" 给定单词序列")]),e._v(" "),a("p",[e._v("[“the"),e._v("”, “highest"),e._v("”, “mountain"),e._v("”]")]),e._v(" "),a("h1",{attrs:{id:"假设已有排好序的subword词表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#假设已有排好序的subword词表"}},[e._v("#")]),e._v(" 假设已有排好序的subword词表")]),e._v(" "),a("p",[e._v("[“errrr"),e._v("”, “tain"),e._v("”, “moun”, “est"),e._v("”, “high”, “the"),e._v("”, “a"),e._v("”]")]),e._v(" "),a("h1",{attrs:{id:"迭代结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迭代结果"}},[e._v("#")]),e._v(" 迭代结果")]),e._v(" "),a("p",[e._v('"the'),e._v('" -> ["the'),e._v('"]\n"highest'),e._v('" -> ["high", "est'),e._v('"]\n"mountain'),e._v('" -> ["moun", "tain'),e._v('"]\n编码的计算量很大。 在实践中，我们可以pre-tokenize所有单词，并在词典中保存单词tokenize的结果。 如果我们看到字典中不存在的未知单词。 我们应用上述编码方法对单词进行tokenize，然后将新单词的tokenization添加到字典中备用。')]),e._v(" "),a("p",[e._v("解码\n将所有的tokens拼在一起。")]),e._v(" "),a("p",[e._v("例子：")]),e._v(" "),a("h1",{attrs:{id:"编码序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编码序列"}},[e._v("#")]),e._v(" 编码序列")]),e._v(" "),a("p",[e._v("[“the"),e._v("”, “high”, “est"),e._v("”, “moun”, “tain"),e._v("”]")]),e._v(" "),a("h1",{attrs:{id:"解码序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解码序列"}},[e._v("#")]),e._v(" 解码序列")]),e._v(" "),a("p",[e._v("“the"),e._v(" highest"),e._v(" mountain"),e._v("”\n3. WordPiece (Schuster et al., 2012)[5]\nWordPiece算法可以看作是BPE的变种。不同点在于，WordPiece基于概率生成新的subword而不是下一最高频字节对。\n"),a("img",{attrs:{src:r(509),alt:"wp"}}),e._v("\n3.1 算法[3]\n准备足够大的训练语料\n确定期望的subword词表大小\n将单词拆分成字符序列\n基于第3步数据训练语言模型\n从所有可能的subword单元中选择加入语言模型后能最大程度地增加训练数据概率的单元作为新的单元\n重复第5步直到达到第2步设定的subword词表大小或概率增量低于某一阈值")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Unigram Language Model (Kudo, 2018)[6]\nULM是另外一种subword分隔算法，它能够输出带概率的多个子词分段。它引入了一个假设：所有subword的出现都是独立的，并且subword序列由subword出现概率的乘积产生。WordPiece和ULM都利用语言模型建立subword词表。\n语言模型作为NLP的大厦根基，也是unigram分词的基础。在wordpiece算法中，其实已经用到了language modeling，在选择token进行合并的时候目标就是能提高句子的likelihood。而unigram分词则更进一步，直接以最大化句子的likelihood为目标来直接构建整个词表。")])]),e._v(" "),a("p",[e._v('首先，了解一下怎么样在给定词表的条件下最大化句子的likelihood。 给定词表及对应概率值: {"你":0.18, "们":0.16, "好":0.18, "你们":0.15}，对句子”你们好“进行分词:')]),e._v(" "),a("p",[e._v('划分为"你" "们" "好" 的概率为 0.18'),a("em",[e._v("0.16")]),e._v('0.18=0.005184\n划分为"你们" "好" 的概率为 0.15*0.18=0.027\n明显看出后一种分词方式要比前一种好，当然在真实的案例下词表可能有几万个token，直接罗列各种组合的概率显然不可能，所以需要用到Viterbi算法。因此在给定词表的情况下，可以')]),e._v(" "),a("p",[e._v("计算每个token对应的概率\n找到一个句子最好的分词方式\n但是在词表没有确定的情况下，同时要优化词表和词表里每个token的概率很难做到。unigram分词使用逐步迭代的方式来求解，具体步骤如下：")]),e._v(" "),a("p",[e._v("首先初始化一个很大的词表\n重复以下步骤直到词表数量减少到预先设定的阈值：\n保持词表不变，用EM算法来求解每个token的概率\n对于每一个token，计算如果把这个token从词表中移除而导致的likelihood减少值，作为这个token的loss\n按loss从大到小排序，保留前n%（原文中为80%）的token。\n初始化词表可以用不同的方法，一个比较直接的办法就是用所有长度为1的token加上高频出现的ngram来作为起始词表。")]),e._v(" "),a("p",[e._v("4.1 算法[3]\n准备足够大的训练语料\n确定期望的subword词表大小\n给定词序列优化下一个词出现的概率\n计算每个subword的损失\n基于损失对subword排序并保留前X%。为了避免OOV，建议保留字符级的单元\n重复第3至第5步直到达到第2步设定的subword词表大小或第5步的结果不再变化")]),e._v(" "),a("p",[e._v("Here is the complete procedure:")]),e._v(" "),a("p",[e._v("Initialize a large seeding subword vocabulary from the training corpus")]),e._v(" "),a("p",[e._v("[Expectation] Estimate each subword probability by the corresponding frequency counts in the vocabulary")]),e._v(" "),a("p",[e._v("[Maximization] Use Viterbi to segment the corpus, returning the optimal segments")]),e._v(" "),a("p",[e._v("Compute the loss of each new subword from optimal segments")]),e._v(" "),a("p",[e._v("Shrink the vocabulary size by dropping the subwords with top X% smallest losses")]),e._v(" "),a("p",[e._v("Repeat step 2 to 5 until the vocabulary size reaches a desired number")]),e._v(" "),a("p",[e._v("The loss of a subword in step 4 is the reduction in overall training corpus segment likelihood if that subword is removed from the current vocabulary.")]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v('总结\nsubword可以平衡词汇量和对未知词的覆盖。 极端的情况下，我们只能使用26个token（即字符）来表示所有英语单词。一般情况，建议使用16k或32k子词足以取得良好的效果，Facebook RoBERTa甚至建立的多达50k的词表。\n对于包括中文在内的许多亚洲语言，单词不能用空格分隔。 因此，初始词汇量需要比英语大很多。\n参考\n^Sennrich, Rico, Barry Haddow, and Alexandra Birch. "Neural machine translation of rare words with subword units."arXiv preprint arXiv:1508.07909(2015).\n^Byte pair encoding - Wikipedia https://en.wikipedia.org/wiki/Byte_pair_encoding\n^abc3 subword algorithms help to improve your NLP model performance https://medium.com/@makcedward/how-subword-helps-on-your-nlp-model-83dd1b836f46\n^abLei Mao\'s Log Book – Byte Pair Encoding https://leimao.github.io/blog/Byte-Pair-Encoding/\n^Schuster, Mike, and Kaisuke Nakajima. "Japanese and korean voice search." 2012 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2012.\n^Kudo, Taku. "Subword regularization: Improving neural network translation models with multiple subword candidates." arXiv preprint arXiv:1804.10959 (2018).')])])])}),[],!1,null,null,null);t.default=n.exports}}]);