(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{610:function(e,n,a){"use strict";a.r(n);var r=a(44),t=Object(r.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"类别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类别"}},[e._v("#")]),e._v(" 类别")]),e._v(" "),a("p",[e._v("所有在Hugging Face中的模型都属于下面的其中一类：")]),e._v(" "),a("ul",[a("li",[e._v("Autoregressive models")]),e._v(" "),a("li",[e._v("Autoencoding models")]),e._v(" "),a("li",[e._v("Sequence-to-sequence models")]),e._v(" "),a("li",[e._v("Multimodal models")]),e._v(" "),a("li",[e._v("Retrieval-based models")])]),e._v(" "),a("p",[e._v("简单介绍一下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Autoregressive models（自回归模型）在标准语言建模任务上进行了预训练：即在已读取所有先前token的基础上，预测下一个token。通俗理解为从左向右读取序列。它们对应于原始transformer model的decoder，虽然可以对这些模型进行微调并在许多任务上取得出色的结果，但这一类模型最佳的应用是文本生成，因为其训练方式与文本生成的方式都是从左向右。这种模型的典型示例是GPT；\nAutoencoding models（自编码模型）是通过以某种方式破坏输入的token并尝试在预训练的时候重建原始序列。从某种意义上讲，它们与原始transformer model的encoder相对应，因为它们可以在输入的时候查看整段序列。虽然可以对它们进行微调并在许多任务（例如文本生成）上取得出色的结果，但这一类模型最佳的应用是序列分类或token分类。此类模型的典型示例是BERT；\nSequence-to-sequence models（序列到序列模型）希望将所有NLP任务都转换到sequence-to-sequence问题。可以将它们微调成许多任务，但最佳的应用是翻译，摘要和阅读理解。原始transformer模型是此类模型的一个示例（仅用于翻译）。此类模型的典型示例是T5；\nMultimodal models（多任务模型）将文本输入与其他类型的输入（例如图像）混合在一起，并且更特定于给定任务；\nRetrieval-based models 暂不了解。\n")])])]),a("h2",{attrs:{id:"他们的典型代表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#他们的典型代表"}},[e._v("#")]),e._v(" 他们的典型代表")]),e._v(" "),a("p",[e._v("这里简单介绍一下每一类模型的典型代表是哪些。")]),e._v(" "),a("h3",{attrs:{id:"autoregressive-models-自回归模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autoregressive-models-自回归模型"}},[e._v("#")]),e._v(" Autoregressive models（自回归模型）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Original GPT：\n\n在Book Corpus数据集上预训练的第一个基于transformer体系结构的自回归模型\nPaper：language_understanding_paper.pdf (openai.com)\n模型源码解析：https://huggingface.co/transformers/model_doc/gpt.html\nGPT-2：\n\nGPT的更大更好的版本，已在WebText上进行了预训练\nPaper：Language Models are Unsupervised Multitask Learners (d4mucfpksywv.cloudfront.net)\n模型源码解析：OpenAI GPT2 — transformers 4.0.0 documentation (huggingface.co)\nCTRL：\n\n笔者暂不了解该模型\nPaper：[1909.05858] CTRL: A Conditional Transformer Language Model for Controllable Generation (arxiv.org)\n模型源码解析：CTRL — transformers 4.0.0 documentation (huggingface.co)\nTransformer-XL：\n\n与常规GPT模型相同，但引入了两个连续段的递归机制（类似于具有两个连续输入的常规RNN），相比于原始Transformer，Transformer-XL不会将长序列切割造成碎片化，且能记住更长序列的文本\nPaper：Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context (arxiv.org)\n模型源码解析：Transformer XL - transformers 4.0.0 documentation\n")])])]),a("h3",{attrs:{id:"autoencoding-models-自编码模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autoencoding-models-自编码模型"}},[e._v("#")]),e._v(" Autoencoding models（自编码模型）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("BERT：\n\n通过使用随机mask来破坏输入，并配合预测两个序列是否上下文关系来进行预训练\nPaper：BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding (arxiv.org)\n模型源码解析：BERT - transformers 4.0.0 documentation\nRoBERTa：\n\n与BERT相同，具有更好的预训练技巧：\n# 动态mask：token在每个epoch被不同地mask\n# 不使用NSP，不对序列进行截短，使用全长度序列\n# 在更大的数据集上训练\n# 使用BPE并将字节作为子单元，而不使用字符（由于Unicode字符）\nPaper：RoBERTa: A Robustly Optimized BERT Pretraining Approach (arxiv.org)\n模型源码解析：RoBERTa - transformers 4.0.0 documentation\nDistilBERT：\n\nBERT的蒸馏版本\nPaper：DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter (arxiv.org)\n模型源码解析：https://huggingface.co/transformers/master/model_doc/distilbert.html\n")])])]),a("h3",{attrs:{id:"sequence-to-sequence-models-序列到序列模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sequence-to-sequence-models-序列到序列模型"}},[e._v("#")]),e._v(" Sequence-to-sequence models（序列到序列模型）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("BART：\n\n破坏的token输入到encoder中，原始正确的token输入到了decoder中（但是像常规的transformers decoder一样，具有mask以隐藏未预测的词）\n对于encoder，在预训练任务上，将应用以下transformations的组合：\n# mask随机token（如BERT）\n# 随机删除token\n# 用单个掩码token掩码k个token的范围\n# 打乱句子\n# 旋转文档以使其从特定标记开始\nPaper：BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension (arxiv.org)\n模型源码解析：BART - transformers 4.0.0 documentation\nT5：\n\n将所有NLP任务转换成Sequence to Sequence任务，例如，中文翻译成英文的任务，使用T5之前的数据输入是“我喜欢跑步”，输出是“I like running”。使用T5之后数据输入变成了“把中文翻译成英文：我喜欢跑步”，输出是“I like running”\nPaper：Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer (arxiv.org)\n模型源码解析：T5 - transformers 4.0.0 documentation\n")])])]),a("h3",{attrs:{id:"multimodal-models-多任务模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multimodal-models-多任务模型"}},[e._v("#")]),e._v(" Multimodal models（多任务模型）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MMBT：\n\n在多模式设置中使用的transformers模型，结合文本和图像进行预测\nPaper：Supervised Multimodal Bitransformers for Classifying Images and Text (arxiv.org)\n模型源码解析：无\n")])])]),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/330069758",target:"_blank",rel:"noopener noreferrer"}},[e._v("hf有哪些模型"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=t.exports}}]);