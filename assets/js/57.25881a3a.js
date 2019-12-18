(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{264:function(v,a,_){"use strict";_.r(a);var r=_(0),t=Object(r.a)({},(function(){var v=this,a=v.$createElement,_=v._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("blockquote",[_("p",[v._v("专栏原创出处："),_("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[v._v("github-源笔记文件 "),_("OutboundLink")],1),v._v(" ，"),_("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[v._v("github-源码 "),_("OutboundLink")],1),v._v("，转载请附上原文出处链接和本声明。")])]),v._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#基础概念"}},[v._v("基础概念")])]),_("li",[_("a",{attrs:{href:"#线程之间如何通信？"}},[v._v("线程之间如何通信？")])]),_("li",[_("a",{attrs:{href:"#java-内存模型定义是？"}},[v._v("Java 内存模型定义是？")])]),_("li",[_("a",{attrs:{href:"#现代硬件内存架构"}},[v._v("现代硬件内存架构")])]),_("li",[_("a",{attrs:{href:"#java-内存模型结构-jmm"}},[v._v("Java 内存模型结构 (JMM)")]),_("ul",[_("li",[_("a",{attrs:{href:"#jmm-规定主内存与工作内存交互协议"}},[v._v("JMM 规定主内存与工作内存交互协议")])])])]),_("li",[_("a",{attrs:{href:"#重排序"}},[v._v("重排序")]),_("ul",[_("li",[_("a",{attrs:{href:"#为什么要重排序？"}},[v._v("为什么要重排序？")])]),_("li",[_("a",{attrs:{href:"#源码如何变成执行指令？"}},[v._v("源码如何变成执行指令？")])])])]),_("li",[_("a",{attrs:{href:"#内存屏障"}},[v._v("内存屏障")])]),_("li",[_("a",{attrs:{href:"#happens-before-语义"}},[v._v("happens-before 语义")])]),_("li",[_("a",{attrs:{href:"#as-if-serial-语义"}},[v._v("as-if-serial 语义")])]),_("li",[_("a",{attrs:{href:"#思考"}},[v._v("思考")])]),_("li",[_("a",{attrs:{href:"#参考"}},[v._v("参考")])])])]),_("p"),v._v(" "),_("h2",{attrs:{id:"基础概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[v._v("#")]),v._v(" 基础概念")]),v._v(" "),_("ul",[_("li",[v._v("原子性：即一个操作或者多个操作 要么全部执行并且执行的过程不会被任何因素打断，要么就都不执行")]),v._v(" "),_("li",[v._v("可见性：指当多个线程访问同一个变量时，一个线程修改了这个变量的值，其他线程能够立即看得到修改的值")]),v._v(" "),_("li",[v._v("有序性：即程序执行的顺序按照代码的先后顺序执行")])]),v._v(" "),_("h2",{attrs:{id:"线程之间如何通信？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线程之间如何通信？"}},[v._v("#")]),v._v(" 线程之间如何通信？")]),v._v(" "),_("p",[v._v("命令式编程中线程通信的方式：")]),v._v(" "),_("ul",[_("li",[v._v("共享内存")]),v._v(" "),_("li",[v._v("消息传递")])]),v._v(" "),_("p",[v._v("在共享内存模型里线程之间共享内存的公共状态，在消息传递模型里，线程之间靠消息的发送接收来显示的进行通信。    "),_("strong",[v._v("Java 使用共享内存模型进行线程通信。")])]),v._v(" "),_("h2",{attrs:{id:"java-内存模型定义是？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#java-内存模型定义是？"}},[v._v("#")]),v._v(" Java 内存模型定义是？")]),v._v(" "),_("p",[v._v("Java 内存模型（Java Memory Model，JMM）用于屏蔽掉各种硬件和操作系统的内存访问差异，以实现让 Java 程序在各种平台下都能达到一致的并发效果，JMM 规范了 Java 虚拟机与计算机内存是如何协同工作的：规定了一个线程如何和何时可以看到由其他线程修改过后的共享变量的值，以及在必须时如何同步的访问共享变量。")]),v._v(" "),_("h2",{attrs:{id:"现代硬件内存架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#现代硬件内存架构"}},[v._v("#")]),v._v(" 现代硬件内存架构")]),v._v(" "),_("p",[v._v("现代硬件内存模型与 Java 内存模型有一些不同，理解内存模型架构以及 Java 内存模型如何与它协同工作也是非常重要的。现代计算机硬件架构的简单图示：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%86%85%E5%AD%98%E5%B1%82%E7%BA%A7%E7%BB%93%E6%9E%84.jpg",alt:"计算机内存层级结构"}})]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("多 CPU")]),v._v("：一个现代计算机通常由两个或者多个 CPU。其中一些 CPU 还有多核。从这一点可以看出，在一个有两个或者多个 CPU 的现代计算机上同时运行多个线程是可能的。每个 CPU 在某一时刻运行一个线程是没有问题的。这意味着，如果你的 Java 程序是多线程的，在你的 Java 程序中每个 CPU 上一个线程可能同时（并发）执行。")]),v._v(" "),_("li",[_("strong",[v._v("CPU 寄存器")]),v._v("：每个 CPU 都包含一系列的寄存器，它们是 CPU 内内存的基础。CPU 在寄存器上执行操作的速度远大于在主存上执行的速度。这是因为 CPU 访问寄存器的速度远大于主存。")]),v._v(" "),_("li",[_("strong",[v._v("高速缓存 cache")]),v._v("：由于计算机的存储设备与处理器的运算速度之间有着几个数量级的差距，所以现代计算机系统都不得不加入一层读写速度尽可能接近处理器运算速度的高速缓存（Cache）来作为内存与处理器之间的缓冲：将运算需要使用到的数据复制到缓存中，让运算能快速进行，当运算结束后再从缓存同步回内存之中，这样处理器就无须等待缓慢的内存读写了。CPU 访问缓存层的速度快于访问主存的速度，但通常比访问内部寄存器的速度还要慢一点。每个 CPU 可能有一个 CPU 缓存层，一些 CPU 还有多层缓存。在某一时刻，一个或者多个缓存行（cache lines）可能被读到缓存，一个或者多个缓存行可能再被刷新回主存。")]),v._v(" "),_("li",[_("strong",[v._v("内存")]),v._v("：一个计算机还包含一个主存。所有的 CPU 都可以访问主存。主存通常比 CPU 中的缓存大得多。")]),v._v(" "),_("li",[_("strong",[v._v("运作原理")]),v._v("：通常情况下，当一个 CPU 需要读取主存时，它会将主存的部分读到 CPU 缓存中。它甚至可能将缓存中的部分内容读到它的内部寄存器中，然后在寄存器中执行操作。当 CPU 需要将结果写回到主存中去时，它会将内部寄存器的值刷新到缓存中，然后在某个时间点将值刷新回主存。")])]),v._v(" "),_("hr"),v._v(" "),_("p",[_("strong",[v._v("多线程环境下一些问题")]),v._v("：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("缓存一致性问题")]),v._v("：在多处理器系统中，每个处理器都有自己的高速缓存，而它们又共享同一主内存（MainMemory）。基于高速缓存的存储交互很好地解决了处理器与内存的速度矛盾，但是也引入了新的问题：缓存一致性（CacheCoherence）。当多个处理器的运算任务都涉及同一块主内存区域时，将可能导致各自的缓存数据不一致的情况，如果真的发生这种情况，那同步回到主内存时以谁的缓存数据为准呢？为了解决一致性的问题，需要各个处理器访问缓存时都遵循一些协议，在读写时要根据协议来进行操作，这类协议有 MSI、MESI（IllinoisProtocol）、MOSI、Synapse、Firefly 及 DragonProtocol，等等")]),v._v(" "),_("li",[_("strong",[v._v("指令重排序问题")]),v._v("：为了使得处理器内部的运算单元能尽量被充分利用，处理器可能会对输入代码进行乱序执行（Out-Of-Order Execution）优化，处理器会在计算之后将乱序执行的结果重组，保证该结果与顺序执行的结果是一致的，但并不保证程序中各个语句计算的先后顺序与输入代码中的顺序一致。因此，如果存在一个计算任务依赖另一个计算任务的中间结果，那么其顺序性并不能靠代码的先后顺序来保证。与处理器的乱序执行优化类似，Java 虚拟机的即时编译器中也有类似的指令重排序（Instruction Reorder）优化")])]),v._v(" "),_("h2",{attrs:{id:"java-内存模型结构-jmm"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#java-内存模型结构-jmm"}},[v._v("#")]),v._v(" Java 内存模型结构 (JMM)")]),v._v(" "),_("p",[v._v("Java 堆和方法区是多个线程共享的数据区域。多个线程可以操作堆和方法区中的同一个数据。局部变量，方法定义参数和异常处理参数不会在线程之间共享，它们不会有内存可见性问题，也不受内存模型影响。\nJava 内存模型的英文名称为 Java Memory Model(JMM)，其并不像 JVM 内存结构一样真实存在，而是一个抽象的概念。"),_("br")]),v._v(" "),_("p",[v._v("从抽象的角度来看，JMM 定义了线程和主内存之间的抽象关系：")]),v._v(" "),_("ul",[_("li",[v._v("线程之间的共享变量存储在主内存（Main Memory）中")]),v._v(" "),_("li",[v._v("每个线程都有一个私有的本地内存（Local Memory），本地内存是 JMM 的一个抽象概念，并不真实存在，它涵盖了缓存、写缓冲区、寄存器以及其他的硬件和编译器优化。本地内存中存储了该线程以读/写共享变量的拷贝副本。")]),v._v(" "),_("li",[v._v("从更低的层次来说，主内存就是硬件的内存，而为了获取更好的运行速度，虚拟机及硬件系统可能会让工作内存优先存储于寄存器和高速缓存中。")]),v._v(" "),_("li",[v._v("Java 内存模型中的线程的工作内存（working memory）是 cpu 的寄存器和高速缓存的抽象描述。而 JVM 的静态内存储模型（JVM 内存模型）只是一种对内存的物理划分而已，它只局限在内存，而且只局限在 JVM 的内存。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B.png",alt:"Java内存模型"}})]),v._v(" "),_("p",[v._v("分析上图内容可知：线程 A/B 之间通信主要经历步骤为：")]),v._v(" "),_("ol",[_("li",[v._v("线程 A 把本地内存 A 中更新过的变量刷新到主内存中")]),v._v(" "),_("li",[v._v("线程 B 读取主内存中 A 刷新过后的共享变量")])]),v._v(" "),_("p",[v._v("从整体上看，这个通信过程需要经过主内存。JMM 通过控制主内存与每个线程本地内存之间的交互来提供内存可见性保证。")]),v._v(" "),_("h3",{attrs:{id:"jmm-规定主内存与工作内存交互协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jmm-规定主内存与工作内存交互协议"}},[v._v("#")]),v._v(" JMM 规定主内存与工作内存交互协议")]),v._v(" "),_("p",[v._v("关于主内存与工作内存之间的具体交互协议，即一个变量如何从主内存拷贝到工作内存、如何从工作内存同步到主内存之间的实现细节，JMM 定义了以下八种操作来完成：")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("lock（锁定）")]),v._v("：作用于主内存的变量，把一个变量标识为一条线程独占状态。")]),v._v(" "),_("li",[_("strong",[v._v("unlock（解锁）")]),v._v("：作用于主内存变量，把一个处于锁定状态的变量释放出来，释放后的变量才可以被其他线程锁定。")]),v._v(" "),_("li",[_("strong",[v._v("read（读取）")]),v._v("：作用于主内存变量，把一个变量值从主内存传输到线程的工作内存中，以便随后的 load 动作使用")]),v._v(" "),_("li",[_("strong",[v._v("load（装载）")]),v._v("：作用于工作内存的变量，它把 read 操作从主内存中得到的变量值放入工作内存的变量副本中。")]),v._v(" "),_("li",[_("strong",[v._v("use（使用）")]),v._v("：作用于工作内存的变量，把工作内存中的一个变量值传递给执行引擎，每当虚拟机遇到一个需要使用变量的值的字节码指令时将会执行这个操作。")]),v._v(" "),_("li",[_("strong",[v._v("assign（赋值）")]),v._v("：作用于工作内存的变量，它把一个从执行引擎接收到的值赋值给工作内存的变量，每当虚拟机遇到一个给变量赋值的字节码指令时执行这个操作。")]),v._v(" "),_("li",[_("strong",[v._v("store（存储）")]),v._v("：作用于工作内存的变量，把工作内存中的一个变量的值传送到主内存中，以便随后的 write 的操作。")]),v._v(" "),_("li",[_("strong",[v._v("write（写入）")]),v._v("：作用于主内存的变量，它把 store 操作从工作内存中一个变量的值传送到主内存的变量中。")])]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("JMM 还规定了在执行上述八种基本操作时，必须满足如下规则：")]),v._v(" "),_("ul",[_("li",[v._v("如果要把一个变量从主内存中复制到工作内存，就需要按顺寻地执行 read 和 load 操作， 如果把变量从工作内存中同步回主内存中，就要按顺序地执行 store 和 write 操作。但 JMM 只要求上述操作必须按顺序执行，而没有保证必须是连续执行。")]),v._v(" "),_("li",[v._v("不允许 read 和 load、store 和 write 操作之一单独出现")]),v._v(" "),_("li",[v._v("不允许一个线程丢弃它的最近 assign 的操作，即变量在工作内存中改变了之后必须同步到主内存中。")]),v._v(" "),_("li",[v._v("不允许一个线程无原因地（没有发生过任何 assign 操作）把数据从工作内存同步回主内存中。")]),v._v(" "),_("li",[v._v("一个新的变量只能在主内存中诞生，不允许在工作内存中直接使用一个未被初始化（load 或 assign）的变量。即就是对一个变量实施 use 和 store 操作之前，必须先执行过了 assign 和 load 操作。")]),v._v(" "),_("li",[v._v("一个变量在同一时刻只允许一条线程对其进行 lock 操作，但 lock 操作可以被同一条线程重复执行多次，多次执行 lock 后，只有执行相同次数的 unlock 操作，变量才会被解锁。lock 和 unlock 必须成对出现")]),v._v(" "),_("li",[v._v("如果对一个变量执行 lock 操作，将会清空工作内存中此变量的值，在执行引擎使用这个变量前需要重新执行 load 或 assign 操作初始化变量的值")]),v._v(" "),_("li",[v._v("如果一个变量事先没有被 lock 操作锁定，则不允许对它执行 unlock 操作；也不允许去 unlock 一个被其他线程锁定的变量。")]),v._v(" "),_("li",[v._v("对一个变量执行 unlock 操作之前，必须先把此变量同步到主内存中（执行 store 和 write 操作）。")])]),v._v(" "),_("h2",{attrs:{id:"重排序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重排序"}},[v._v("#")]),v._v(" 重排序")]),v._v(" "),_("h3",{attrs:{id:"为什么要重排序？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要重排序？"}},[v._v("#")]),v._v(" 为什么要重排序？")]),v._v(" "),_("p",[v._v("为了提高性能，编译器与处理器通常会对指令做重排序，通常为 3 种")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("编译器优化的重排序")]),v._v("，不改变单线程语义的情况下重新安排语句执行顺序。")]),v._v(" "),_("li",[_("strong",[v._v("指令级并行的重排序")]),v._v("，现在处理器采用指令并行技术，可将多条指令并行执行。如果不存在数据依赖性，可以改变语句对应指令顺序。")]),v._v(" "),_("li",[_("strong",[v._v("内存系统的重排序")]),v._v("，由于处理器使用缓存和读写缓存区，使得加载和存储操作看上去是乱序执行。")])]),v._v(" "),_("h3",{attrs:{id:"源码如何变成执行指令？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#源码如何变成执行指令？"}},[v._v("#")]),v._v(" 源码如何变成执行指令？")]),v._v(" "),_("p",[v._v("步骤："),_("code",[v._v("源代码->1 编译器优化重排序->2 指令级并行重排序->3 内存系统重排序-> 最终执行指令")]),_("br"),v._v("\n对于步骤 1 是编译器重排序，步骤 2、3 是处理器重排序。")]),v._v(" "),_("ul",[_("li",[v._v("对于编译器重排序，JMM 的编译器重排序规则会禁止特定类型的重排序")]),v._v(" "),_("li",[v._v("对于处理器重排序，JMM 的处理器重排序规则会要求 Java 编译器生成指令序列时插入特定类型的"),_("strong",[v._v("内存屏障指令")]),v._v("来禁止特定类型的重排序。")])]),v._v(" "),_("h2",{attrs:{id:"内存屏障"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存屏障"}},[v._v("#")]),v._v(" 内存屏障")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("load（装载）")]),v._v("：作用于工作内存的变量，它把 read 操作从主内存中得到的变量值放入工作内存的变量副本中。")]),v._v(" "),_("li",[_("strong",[v._v("store（存储）")]),v._v("：作用于工作内存的变量，把工作内存中的一个变量的值传送到主内存中，以便随后的 write 的操作。")])]),v._v(" "),_("p",[v._v("内存屏障的四种类型如下：")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("屏障类型")]),v._v(" "),_("th",[v._v("指令示例")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("LoadLoad 屏障")]),v._v(" "),_("td",[v._v("Load1;LoadLoad;Load2")]),v._v(" "),_("td",[v._v("确保 Load1 数据装载先于 Load2 及所有后续装载指令的装载")])]),v._v(" "),_("tr",[_("td",[v._v("StoreStore 屏障")]),v._v(" "),_("td",[v._v("Store1;StoreStore;Store2")]),v._v(" "),_("td",[v._v("确保 Store1 数据对其他处理器可见（刷新到内存）先于 Store2 及所有后续存储指令的存储")])]),v._v(" "),_("tr",[_("td",[v._v("LoadStore 屏障")]),v._v(" "),_("td",[v._v("Load1;LoadStore;Store2")]),v._v(" "),_("td",[v._v("确保 Load1 数据装载先于 Store2 及所有后续存储指令刷新到内存")])]),v._v(" "),_("tr",[_("td",[v._v("StoreLoad 屏障")]),v._v(" "),_("td",[v._v("Store1;StoreLoad;Load2")]),v._v(" "),_("td",[v._v("确保 Store1 数据对其他处理器可见（刷新到内存）先于 Load2 及所有后续装载指令的装载。该屏障会使之前所有的内存访问指令（存储和装载）完成之后，才执行该屏障之后的内存访问指令")])])])]),v._v(" "),_("h2",{attrs:{id:"happens-before-语义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#happens-before-语义"}},[v._v("#")]),v._v(" happens-before 语义")]),v._v(" "),_("p",[v._v("从 JDK5 开始，Java 使用新的 JSR-133 内存模型进行管理。JSR-133 使用 happens-before 概念来阐述操作之间的可见性。"),_("br")]),v._v(" "),_("p",[v._v("在 JMM 中如果一个操作执行的结果需要对另外一个操作可见，那么这两个操作之间必须要存在 happens-before 关系（2 个操作可以是同一线程或不同线程中）。\n ")]),v._v(" "),_("p",[v._v("JMM 把 happens-before 重排序分为 2 类：")]),v._v(" "),_("ol",[_("li",[v._v("会改变程序结果的重排序，JMM 要求编译器和处理器禁止这种重排序。")]),v._v(" "),_("li",[v._v("不会改变程序结果的重排序，JMM 允许这种重排序。\n ")])]),v._v(" "),_("p",[v._v("分析可知 JMM 遵循一个基本原则：只要不改变程序执行结果（单线程和同步的多线程）编译器和处理器怎么优化都可以，比如：")]),v._v(" "),_("ul",[_("li",[v._v("一个锁只被单线程访问，那么锁可以消除")]),v._v(" "),_("li",[v._v("一个 volatile 变量只被单线程访问，编译器可以把它当做普通变量使用\n ")])]),v._v(" "),_("p",[_("strong",[v._v("happens-before 规则：")])]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("程序顺序规则")]),v._v("：在一个线程内，按照程序代码的顺序，前面的代码运行的结果能被后面的代码可见")]),v._v(" "),_("li",[_("strong",[v._v("监视器锁规则")]),v._v("：一个锁的解锁 happens-before 于后续对这个锁的加锁")]),v._v(" "),_("li",[_("strong",[v._v("volatile 变量规则")]),v._v("：对一个 volatile 域的写，happens-before 于任意后续对这个 volatile 域的读")]),v._v(" "),_("li",[_("strong",[v._v("传递性规则")]),v._v("：如果 A happens-before B，且 B happens-before C，那么 A happens-before C")]),v._v(" "),_("li",[_("strong",[v._v("start() 规则")]),v._v("：指的是主线程 A 启动子线程 B 后，子线程 B 能看到主线程在启动线程 B 前的任何操作")]),v._v(" "),_("li",[_("strong",[v._v("join() 规则")]),v._v("：主线程 A 等待子线程 B 完成 (对 B 线程 join() 调用)，当子线程 B 操作完成后，主线程 A 能看到 B 线程的操作")]),v._v(" "),_("li",[_("strong",[v._v("interrupt() 规则")]),v._v("：线程 A 调用线程 B 的 interrupt() 方法，happens-before 于线程 B 检测中断事件 (也就是 Thread.interrupted() 方法)")]),v._v(" "),_("li",[_("strong",[v._v("finalize() 规则")]),v._v("：对象的构造函数执行、结束 happens-before 于 finalize() 方法的开始")])]),v._v(" "),_("h2",{attrs:{id:"as-if-serial-语义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#as-if-serial-语义"}},[v._v("#")]),v._v(" as-if-serial 语义")]),v._v(" "),_("p",[v._v("不管怎么重排序（编译器和处理器为了提高并行度），（单线程）程序的执行结果不会改变。编译器、runtime 和处理器都必须遵守 as-if-serial 语义。\n ")]),v._v(" "),_("p",[v._v("为了遵守 as-if-serial 语义，编译器和处理器不会对存在数据依赖关系的操作做重排序，因为这种重排序会改变执行结果。但是，如果操作之间不存在数据依赖关系，这些操作就可能被编译器和处理器重排序。")]),v._v(" "),_("h2",{attrs:{id:"思考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[v._v("#")]),v._v(" 思考")]),v._v(" "),_("ul",[_("li",[v._v("为什么要有 JMM？ 为了在不同处理器下正确并发执行，JMM 提出一系列规范约束各个处理器的指令执行达到正确并发效果，主要为多线程下原子性、可见性、有序性问题")]),v._v(" "),_("li",[v._v("为什么重排序？ 为了提高执行效率，把程序执行指令重排序。重排序在多线程情况下可能导致程序执行错误")]),v._v(" "),_("li",[v._v("重排序可能导致程序执行错误怎么解决？ JMM 提出 happens-before 语义规则，约束重排序规则")]),v._v(" "),_("li",[v._v("如何约束重排序规则？ 插入内存屏障指令告诉处理器如何正确的重排序")])]),v._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://sylvanassun.github.io/2017/09/08/2017-09-08-ComputerStructure/",target:"_blank",rel:"noopener noreferrer"}},[v._v("探索计算机的结构与核心概念"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=t.exports}}]);