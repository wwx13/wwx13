(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{673:function(e,s,n){"use strict";n.r(s);var t=n(44),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"单调有序队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单调有序队列"}},[e._v("#")]),e._v(" 单调有序队列")]),e._v(" "),n("p",[e._v("'''python")]),e._v(" "),n("h1",{attrs:{id:"https-leetcode-cn-com-problems-sliding-window-maximum-submissions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#https-leetcode-cn-com-problems-sliding-window-maximum-submissions"}},[e._v("#")]),e._v(" https://leetcode-cn.com/problems/sliding-window-maximum/submissions/")]),e._v(" "),n("h1",{attrs:{id:"https-leetcode-cn-com-problems-hua-dong-chuang-kou-de-zui-da-zhi-lcof-submissions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#https-leetcode-cn-com-problems-hua-dong-chuang-kou-de-zui-da-zhi-lcof-submissions"}},[e._v("#")]),e._v(" https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/submissions/")]),e._v(" "),n("p",[e._v("class OrderQueue(object):")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("单调队列实现:\n    此处的队列是可以在队尾出队和入队， 可以从队头出队，\n    这也是和单调栈的区别\n\n\n@staticmethod\ndef slide_window_get_max_k(array, slide_sep_k):\n    dequeue = []\n\n    max_k = []\n    st_counter = 0  # 当前考虑比较的k个数的开头\n\n    for idx, val in enumerate(array):\n        if dequeue:\n            while dequeue and dequeue[-1][0] <= val:\n                dequeue.pop(-1)\n\n        dequeue.append((val, idx))\n        if idx - st_counter == (slide_sep_k-1):\n            max_k.append(dequeue[0][0])\n            if dequeue[0][1] <= st_counter:\n                dequeue.pop(0)\n\n            st_counter += 1\n    return max_k\n")])])]),n("p",[e._v("nums = [1,3,-1,-3,5,3,6,7]\nk = 3")]),e._v(" "),n("p",[e._v("res = OrderQueue().slide_window_get_max_k(nums, k)\nprint(res)\n'''")])])}),[],!1,null,null,null);s.default=a.exports}}]);