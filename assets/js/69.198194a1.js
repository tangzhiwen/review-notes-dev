(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{276:function(t,a,r){"use strict";r.r(a);var v=r(0),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("blockquote",[r("p",[t._v("专栏原创出处："),r("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),r("OutboundLink")],1),t._v(" ，"),r("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),r("OutboundLink")],1),t._v("，转载请附上原文出处链接和本声明。")])]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#比较说明"}},[t._v("比较说明")])]),r("li",[r("a",{attrs:{href:"#并发性比较"}},[t._v("并发性比较")]),r("ul",[r("li",[r("a",{attrs:{href:"#场景"}},[t._v("场景")])]),r("li",[r("a",{attrs:{href:"#原子性"}},[t._v("原子性")])]),r("li",[r("a",{attrs:{href:"#并发粒度"}},[t._v("并发粒度")])]),r("li",[r("a",{attrs:{href:"#编码操作性"}},[t._v("编码操作性")])]),r("li",[r("a",{attrs:{href:"#线程阻塞"}},[t._v("线程阻塞")])]),r("li",[r("a",{attrs:{href:"#性能"}},[t._v("性能")])])])]),r("li",[r("a",{attrs:{href:"#锁比较"}},[t._v("锁比较")]),r("ul",[r("li",[r("a",{attrs:{href:"#锁中断操作"}},[t._v("锁中断操作")])]),r("li",[r("a",{attrs:{href:"#锁功能性"}},[t._v("锁功能性")])]),r("li",[r("a",{attrs:{href:"#锁状态感知"}},[t._v("锁状态感知")])]),r("li",[r("a",{attrs:{href:"#死锁"}},[t._v("死锁")])])])]),r("li",[r("a",{attrs:{href:"#说明"}},[t._v("说明")])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"比较说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#比较说明"}},[t._v("#")]),t._v(" 比较说明")]),t._v(" "),r("p",[t._v("本节内容主要从 CAS 、volatile 、synchronized、Lock 进行对比分析并发实现的差异。")]),t._v(" "),r("p",[t._v("实现并发的基础是保证了可见性、有序性，因此此处不做比较。")]),t._v(" "),r("h2",{attrs:{id:"并发性比较"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#并发性比较"}},[t._v("#")]),t._v(" 并发性比较")]),t._v(" "),r("h3",{attrs:{id:"场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[t._v("#")]),t._v(" 场景")]),t._v(" "),r("ul",[r("li",[t._v("CAS：单个变量支持比较替换操作，如果实际值与期望值一致时才进行修改")]),t._v(" "),r("li",[t._v("volatile：单个变量并发操作，直接修改为我们的目标值")]),t._v(" "),r("li",[t._v("synchronized：一般性代码级别的并发")]),t._v(" "),r("li",[t._v("Lock：代码级别的并发，需要使用锁实现提供的独特机制，例如：读写分离、分段、中断、共享、重入等 synchronized 不支持的机制。")])]),t._v(" "),r("h3",{attrs:{id:"原子性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原子性"}},[t._v("#")]),t._v(" 原子性")]),t._v(" "),r("ul",[r("li",[t._v("CAS：保证原子性")]),t._v(" "),r("li",[t._v("volatile：单个操作保证原子性，组合操作（例如：++）不保证原子性")]),t._v(" "),r("li",[t._v("synchronized：保证原子性")]),t._v(" "),r("li",[t._v("Lock：保证原子性")])]),t._v(" "),r("h3",{attrs:{id:"并发粒度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#并发粒度"}},[t._v("#")]),t._v(" 并发粒度")]),t._v(" "),r("ul",[r("li",[t._v("CAS：单个变量值")]),t._v(" "),r("li",[t._v("volatile：单个变量值")]),t._v(" "),r("li",[t._v("synchronized：静态、非静态方法、代码块")]),t._v(" "),r("li",[t._v("Lock：代码块")])]),t._v(" "),r("h3",{attrs:{id:"编码操作性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编码操作性"}},[t._v("#")]),t._v(" 编码操作性")]),t._v(" "),r("ul",[r("li",[t._v("CAS：调用 JDK 方法")]),t._v(" "),r("li",[t._v("volatile：使用关键字，系统通过屏障指令保证并发性")]),t._v(" "),r("li",[t._v("synchronized：使用关键字，加锁解锁操作系统默认通过指令控制")]),t._v(" "),r("li",[t._v("Lock：手动加锁解锁")])]),t._v(" "),r("h3",{attrs:{id:"线程阻塞"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#线程阻塞"}},[t._v("#")]),t._v(" 线程阻塞")]),t._v(" "),r("ul",[r("li",[t._v("CAS：不会")]),t._v(" "),r("li",[t._v("volatile：不会")]),t._v(" "),r("li",[t._v("synchronized：可能会")]),t._v(" "),r("li",[t._v("Lock：可能会")])]),t._v(" "),r("h3",{attrs:{id:"性能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[t._v("#")]),t._v(" 性能")]),t._v(" "),r("blockquote",[r("p",[t._v("在合理使用情况下比较，比如我们可以用 volatile 实现的需求即不用 Lock")])]),t._v(" "),r("ul",[r("li",[t._v("CAS：主要表现在 CPU 资源")]),t._v(" "),r("li",[t._v("volatile：性能较好")]),t._v(" "),r("li",[t._v("synchronized：性能一般")]),t._v(" "),r("li",[t._v("Lock：性能较差")])]),t._v(" "),r("h2",{attrs:{id:"锁比较"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#锁比较"}},[t._v("#")]),t._v(" 锁比较")]),t._v(" "),r("blockquote",[r("p",[t._v("volatile 不是锁实现机制，因此锁相关比较不参与")])]),t._v(" "),r("h3",{attrs:{id:"锁中断操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#锁中断操作"}},[t._v("#")]),t._v(" 锁中断操作")]),t._v(" "),r("ul",[r("li",[t._v("synchronized：不支持中断操作")]),t._v(" "),r("li",[t._v("Lock：支持中断，支持超时中断")])]),t._v(" "),r("h3",{attrs:{id:"锁功能性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#锁功能性"}},[t._v("#")]),t._v(" 锁功能性")]),t._v(" "),r("ul",[r("li",[t._v("synchronized：独占锁、可重入锁")]),t._v(" "),r("li",[t._v("Lock：独占锁、共享锁、可重入锁、读写锁、分段锁 ...")])]),t._v(" "),r("h3",{attrs:{id:"锁状态感知"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#锁状态感知"}},[t._v("#")]),t._v(" 锁状态感知")]),t._v(" "),r("ul",[r("li",[t._v("synchronized：无法判断是否拿到锁")]),t._v(" "),r("li",[t._v("Lock：可以判断是否拿到锁")])]),t._v(" "),r("h3",{attrs:{id:"死锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#死锁"}},[t._v("#")]),t._v(" 死锁")]),t._v(" "),r("ul",[r("li",[t._v("synchronized：可能出现死锁")]),t._v(" "),r("li",[t._v("Lock：需合理编码，可能出现死锁")])]),t._v(" "),r("h2",{attrs:{id:"说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),r("p",[t._v("本内容为个人理解总结，可能存在理论性问题，欢迎讨论反馈，谢谢。")])])}),[],!1,null,null,null);a.default=_.exports}}]);