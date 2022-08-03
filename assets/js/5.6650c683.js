(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{428:function(t,a,Q){t.exports=Q.p+"assets/img/loss_delta.36b63f51.png"},429:function(t,a,Q){t.exports=Q.p+"assets/img/sgd_problem.321295cd.png"},430:function(t,a,Q){t.exports=Q.p+"assets/img/mom.208a7eca.png"},431:function(t,a,Q){t.exports=Q.p+"assets/img/mom1.0a2a0f13.png"},432:function(t,a,Q){t.exports=Q.p+"assets/img/ada.b6ef60b7.png"},433:function(t,a,Q){t.exports=Q.p+"assets/img/ada1.f7f8e4c7.png"},434:function(t,a,Q){t.exports=Q.p+"assets/img/rms.a692eb3a.png"},435:function(t,a,Q){t.exports=Q.p+"assets/img/adam1.008a7d60.png"},436:function(t,a,Q){t.exports=Q.p+"assets/img/adam2.6c55a0e8.png"},437:function(t,a,Q){t.exports=Q.p+"assets/img/adadelta.51c51861.png"},621:function(t,a,Q){"use strict";Q.r(a);var T=Q(44),r=Object(T.a)({},(function(){var t=this,a=t.$createElement,T=t._self._c||a;return T("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[T("hr"),t._v(" "),T("h1",{attrs:{id:"优化器算法总结"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#优化器算法总结"}},[t._v("#")]),t._v(" 优化器算法总结")]),t._v(" "),T("div",{staticClass:"language- extra-class"},[T("pre",[T("code",[t._v("   主要采用移动平均函数，平滑最近一段时间的值。\n1. 移动平滑梯度，替换原始梯度会更平滑准确更新参数，并能缩小个参数梯度变化振幅。\n2. 移动平滑梯度元素平方，开方后作为学习率分母，可以为每个参数提供不同的学习率，防止当参数过大，学习率也很大更新过大\n3. 移动平滑梯度改变量，作为分子替换学习率，有助于学习率的平滑改变，防止突然变小和变大。\n")])])]),T("h1",{attrs:{id:"基础-海森矩阵和鞍点-驻点判断函数值情况"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#基础-海森矩阵和鞍点-驻点判断函数值情况"}},[t._v("#")]),t._v(" 基础：海森矩阵和鞍点，驻点判断函数值情况")]),t._v(" "),T("p",[t._v("在图的鞍点位置，目标函数在x轴方向上是局部最小值，但在y轴方向上是局部最大值。")]),t._v(" "),T("p",[t._v("假设一个函数的输入为k维向量，输出为标量，那么它的海森矩阵（Hessian matrix）有k个特征值。该函数在梯度为0的位置上可能是局部最小值、局部最大值或者鞍点。")]),t._v(" "),T("p",[t._v("当函数的海森矩阵在梯度为零的位置上的特征值全为正时，该函数得到局部最小值。\n当函数的海森矩阵在梯度为零的位置上的特征值全为负时，该函数得到局部最大值。\n当函数的海森矩阵在梯度为零的位置上的特征值有正有负时，该函数得到鞍点。\n随机矩阵理论告诉我们，对于一个大的高斯随机矩阵来说，任一特征值是正或者是负的概率都是0.5 [1]。那么，以上第一种情况的概率为 0.5k。由于深度学习模型参数通常都是高维的（k很大），目标函数的鞍点通常比局部最小值更常见。")]),t._v(" "),T("p",[t._v("在深度学习中，虽然找到目标函数的全局最优解很难，但这并非必要。我们将在本章接下来的几节中逐一介绍深度学习中常用的优化算法，它们在很多实际问题中都能够训练出十分有效的深度学习模型。")]),t._v(" "),T("h1",{attrs:{id:"基础-损失函数值与梯度、参数改变量关系"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#基础-损失函数值与梯度、参数改变量关系"}},[t._v("#")]),t._v(" 基础：损失函数值与梯度、参数改变量关系")]),t._v(" "),T("p",[t._v("深度学习的损失函数一般是非凸函数；梯度为0的点可能是（全局、局部）极小值或鞍点。\n"),T("img",{attrs:{src:Q(428),alt:"s"}}),t._v(" "),T("a",{attrs:{href:"https://www.zhihu.com/question/349770138/answer/2227916478",target:"_blank",rel:"noopener noreferrer"}},[t._v("ref"),T("OutboundLink")],1)]),t._v(" "),T("h1",{attrs:{id:"sgd"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#sgd"}},[t._v("#")]),t._v(" SGD")]),t._v(" "),T("p",[T("img",{attrs:{src:Q(429),alt:"sgd_problem"}})]),t._v(" "),T("h1",{attrs:{id:"momentum"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#momentum"}},[t._v("#")]),t._v(" Momentum")]),t._v(" "),T("p",[t._v("指数平均最近一段时间的梯度替换原来的 当前的梯度，使得各变量更新幅度差异变小")]),t._v(" "),T("p",[T("img",{attrs:{src:Q(430),alt:"mom"}}),t._v(" "),T("img",{attrs:{src:Q(431),alt:"mom1"}})]),t._v(" "),T("h1",{attrs:{id:"adagrad"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#adagrad"}},[t._v("#")]),t._v(" AdaGrad")]),t._v(" "),T("p",[t._v("累加历史梯度元素平方， 做分母自适应各变量独立学习率")]),t._v(" "),T("p",[t._v("（动量法）⾥我们看到当 和 的梯度值有较⼤差别时，需要选择⾜够⼩的学习率使得⾃变量\n在梯度值较⼤的维度上不发散。但这样会导致⾃变量在梯度值较⼩的维度上迭代过慢。动量法依赖指数\n加权移动平均使得⾃变量的更新⽅向更加⼀致，从⽽降低发散的可能。本节我们介绍AdaGrad算法，\n它根据⾃变量在每个维度的梯度值的⼤⼩来调整各个维度上的学习率，从⽽避免统⼀的学习率难以适应\n所有维度的问题.\n"),T("img",{attrs:{src:Q(432),alt:"ada"}}),t._v(" "),T("img",{attrs:{src:Q(433),alt:"ada1"}})]),t._v(" "),T("h1",{attrs:{id:"rmsprop"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#rmsprop"}},[t._v("#")]),t._v(" RMSProp")]),t._v(" "),T("p",[t._v("移动平滑梯度元素平方，作为分母调整学习率。")]),t._v(" "),T("p",[t._v("节（AdaGrad算法）中提到，因为调整学习率时分⺟上的变量 ⼀直在累加按元素平⽅的⼩\n批量随机梯度，所以⽬标函数⾃变量每个元素的学习率在迭代过程中⼀直在降低（或不变）。因此，当\n学习率在迭代早期降得较快且当前解依然不佳时，AdaGrad算法在迭代后期由于学习率过⼩，可能较\n难找到⼀个有⽤的解。为了解决这⼀问题，RMSProp算法对AdaGrad算法做了⼀点⼩⼩的修改。\n"),T("img",{attrs:{src:Q(434),alt:"rms"}})]),t._v(" "),T("h1",{attrs:{id:"adam"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#adam"}},[t._v("#")]),t._v(" Adam")]),t._v(" "),T("p",[t._v("移动平均梯度作为动量变量 替换梯度。\n移动平均梯度元素平方作为学习率分母。"),T("br"),t._v("\n分别除以"),T("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[T("svg",{staticStyle:{"vertical-align":"-0.186ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"9.373ex",height:"2.008ex",viewBox:"0 -805.6 4142.7 887.6"}},[T("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[T("g",{attrs:{"data-mml-node":"math"}},[T("g",{attrs:{"data-mml-node":"mn"}},[T("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})]),T("g",{attrs:{"data-mml-node":"mo",transform:"translate(722.2, 0)"}},[T("path",{attrs:{"data-c":"2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(1722.4, 0)"}},[T("path",{attrs:{"data-c":"42",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(2481.4, 0)"}},[T("path",{attrs:{"data-c":"65",d:"M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(2947.4, 0)"}},[T("path",{attrs:{"data-c":"74",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}})]),T("g",{attrs:{"data-mml-node":"msup",transform:"translate(3308.4, 0)"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("path",{attrs:{"data-c":"61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(529, 363) scale(0.707)"}},[T("path",{attrs:{"data-c":"74",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}})])])])])])]),t._v("偏差修正。\n两者相乘作为梯度改变量。")],1),t._v(" "),T("p",[t._v("偏差修正：\n移动平均梯度/梯度按元素平方在某一时刻"),T("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[T("svg",{staticStyle:{"vertical-align":"-0.025ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"0.817ex",height:"1.441ex",viewBox:"0 -626 361 637"}},[T("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[T("g",{attrs:{"data-mml-node":"math"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("path",{attrs:{"data-c":"74",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}})])])])])]),t._v("展开发现本质上关于梯度或者梯度按元素平方项的系数是\n等比数列求和等于"),T("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[T("svg",{staticStyle:{"vertical-align":"-0.186ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"9.373ex",height:"2.008ex",viewBox:"0 -805.6 4142.7 887.6"}},[T("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[T("g",{attrs:{"data-mml-node":"math"}},[T("g",{attrs:{"data-mml-node":"mn"}},[T("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})]),T("g",{attrs:{"data-mml-node":"mo",transform:"translate(722.2, 0)"}},[T("path",{attrs:{"data-c":"2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(1722.4, 0)"}},[T("path",{attrs:{"data-c":"42",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(2481.4, 0)"}},[T("path",{attrs:{"data-c":"65",d:"M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(2947.4, 0)"}},[T("path",{attrs:{"data-c":"74",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}})]),T("g",{attrs:{"data-mml-node":"msup",transform:"translate(3308.4, 0)"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("path",{attrs:{"data-c":"61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(529, 363) scale(0.707)"}},[T("path",{attrs:{"data-c":"74",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}})])])])])])]),t._v("（假设各时间步的梯度是缓步变化，使用"),T("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[T("svg",{staticStyle:{"vertical-align":"-0.464ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.77ex",height:"1.464ex",viewBox:"0 -442 782.3 647"}},[T("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[T("g",{attrs:{"data-mml-node":"math"}},[T("g",{attrs:{"data-mml-node":"msub"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("path",{attrs:{"data-c":"67",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(477, -150) scale(0.707)"}},[T("path",{attrs:{"data-c":"74",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}})])])])])])]),t._v("替代各前向时间步"),T("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[T("svg",{staticStyle:{"vertical-align":"-0.464ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.744ex",height:"1.464ex",viewBox:"0 -442 771 647"}},[T("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[T("g",{attrs:{"data-mml-node":"math"}},[T("g",{attrs:{"data-mml-node":"msub"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("path",{attrs:{"data-c":"67",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(477, -150) scale(0.707)"}},[T("path",{attrs:{"data-c":"69",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}})])])])])])]),t._v("）,我们希望期望上移动平均的结果任然是梯度本身/梯度元素平方本身。\n例如初始时刻，我们不希望更新量中使用的动量为"),T("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[T("svg",{staticStyle:{"vertical-align":"-0.186ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10.694ex",height:"1.731ex",viewBox:"0 -683 4726.6 765"}},[T("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[T("g",{attrs:{"data-mml-node":"math"}},[T("g",{attrs:{"data-mml-node":"mi"}},[T("path",{attrs:{"data-c":"42",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(759, 0)"}},[T("path",{attrs:{"data-c":"65",d:"M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(1225, 0)"}},[T("path",{attrs:{"data-c":"74",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}})]),T("g",{attrs:{"data-mml-node":"mi",transform:"translate(1586, 0)"}},[T("path",{attrs:{"data-c":"61",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}})]),T("g",{attrs:{"data-mml-node":"mo",transform:"translate(2392.8, 0)"}},[T("path",{attrs:{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}})]),T("g",{attrs:{"data-mml-node":"mn",transform:"translate(3448.6, 0)"}},[T("path",{attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}}),T("path",{attrs:{"data-c":"2E",d:"M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",transform:"translate(500, 0)"}}),T("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",transform:"translate(778, 0)"}})])])])])]),t._v("*梯度 而希望开始使用的是梯度本身。")],1),t._v(" "),T("p",[T("img",{attrs:{src:Q(435),alt:"adam1"}}),t._v(" "),T("img",{attrs:{src:Q(436),alt:"adam2"}}),t._v(" "),T("a",{attrs:{href:"https://www.zhihu.com/question/392235721",target:"_blank",rel:"noopener noreferrer"}},[t._v("ref"),T("OutboundLink")],1)]),t._v(" "),T("h1",{attrs:{id:"adadelta"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#adadelta"}},[t._v("#")]),t._v(" AdaDelta")]),t._v(" "),T("p",[t._v("不需要设置学习率，不同变量有自己的学习率并且后期各变量更新比较一致。")]),t._v(" "),T("p",[t._v("思想：\n累计最近的梯度平方均值作为学习率的分母。\n累计最近的梯度更新的平方均值作为学习率分子。\n分子解决了后期学习率太小的问题,因为相当于平滑了学习率的改变。")]),t._v(" "),T("p",[T("img",{attrs:{src:Q(437),alt:"s"}})]),t._v(" "),T("h1",{attrs:{id:"lambda"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#lambda"}},[t._v("#")]),t._v(" LAMBDA")])])}),[],!1,null,null,null);a.default=r.exports}}]);