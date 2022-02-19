__NUXT_JSONP__("/posts/26", {data:[{}],fetch:{"0":{zoom:null,pageCount:true,title:"花式遍历二叉树",author:"Yidadaa",date:"2020\u002F02\u002F27",content:"\u003Cblockquote\u003E\n\u003Cp\u003E众所周知，递归是解决问题的良药，但是却不利于装逼，今天教你如何在最简单的问题上装逼。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E一般来说，基本所有的二叉树的题目都需要遍历树的每一个节点来找到解，在本科阶段学习数据结构时，所有的教材都会教给我们如何使用递归来执行各种遍历，诚然，递归形式的遍历不可谓不简洁：\u003C\u002Fp\u003E\n\u003Cpre class=\"hljs\"\u003E\u003Ccode\u003E\u003Cspan class=\"hljs-class\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Eclass\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-title\"\u003ENode\u003C\u002Fspan\u003E():\u003C\u002Fspan\u003E\n  \u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Edef\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-title\"\u003E__init__\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-params\"\u003Eself, val, left, right\u003C\u002Fspan\u003E):\u003C\u002Fspan\u003E\n    self.val = val\n    self.left = left\n    self.right = right\n\n\u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Edef\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-title\"\u003Etraverse\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-params\"\u003Enode\u003C\u002Fspan\u003E):\u003C\u002Fspan\u003E\n  \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Enot\u003C\u002Fspan\u003E node: \u003Cspan class=\"hljs-keyword\"\u003Ereturn\u003C\u002Fspan\u003E\n  \u003Cspan class=\"hljs-keyword\"\u003Efor\u003C\u002Fspan\u003E next_node \u003Cspan class=\"hljs-keyword\"\u003Ein\u003C\u002Fspan\u003E [node, node.left, node.right]:\n    \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E next_node == node: \u003Cspan class=\"hljs-built_in\"\u003Eprint\u003C\u002Fspan\u003E(node.val)\n    \u003Cspan class=\"hljs-keyword\"\u003Eelse\u003C\u002Fspan\u003E: traverse(next_node)\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E我们只需要简单地调整 \u003Ccode\u003E[node, node.left, node.right]\u003C\u002Fcode\u003E 的顺序，就可以轻松地实现前序遍历、中序遍历和后序遍历，但是如果我们想要实现层次遍历，递归就无能为力了，而且由于递归本身自带的爆栈特性，在处理大规模数据时非常容易由于空间不足而报错[2]。\u003C\u002Fp\u003E\n\u003Cp\u003E那么有没有一种有效的遍历方法，只需要稍加变形就能实现以上四种遍历呢？这个时候就要请出树和图搜索中最常用的非递归遍历方式了，只需使用一个栈或者队列来辅助，就可以轻松实现各种遍历方式。\u003C\u002Fp\u003E\n\u003Cp\u003E我们先用一个简单的深度优先遍历（Depth First Search, DFS）算法作为例子，在前面定义好的二叉树结构的基础上，使用以下代码进行深度优先遍历：\u003C\u002Fp\u003E\n\u003Cpre class=\"hljs\"\u003E\u003Ccode\u003E\u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Edef\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-title\"\u003Edfs\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-params\"\u003Enode\u003C\u002Fspan\u003E):\u003C\u002Fspan\u003E\n  \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Enot\u003C\u002Fspan\u003E node: \u003Cspan class=\"hljs-keyword\"\u003Ereturn\u003C\u002Fspan\u003E\n  \u003Cspan class=\"hljs-built_in\"\u003Eprint\u003C\u002Fspan\u003E(node.val)\n  \u003Cspan class=\"hljs-keyword\"\u003Efor\u003C\u002Fspan\u003E next_node \u003Cspan class=\"hljs-keyword\"\u003Ein\u003C\u002Fspan\u003E [node.left, node.right]:\n    dfs(next_node)\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E这是一个小学生都会写的递归版本 DFS，显然无法满足我们的装逼需求，我们略施小计将其改造成非递归形式：\u003C\u002Fp\u003E\n\u003Cpre class=\"hljs\"\u003E\u003Ccode\u003E\u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Edef\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-title\"\u003Edfs\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-params\"\u003Enode\u003C\u002Fspan\u003E):\u003C\u002Fspan\u003E\n  stack = [node]\n  \u003Cspan class=\"hljs-keyword\"\u003Ewhile\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-built_in\"\u003Elen\u003C\u002Fspan\u003E(stack) &gt; \u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E:\n    node = stack.pop()\n    \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Enot\u003C\u002Fspan\u003E node: \u003Cspan class=\"hljs-keyword\"\u003Econtinue\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-built_in\"\u003Eprint\u003C\u002Fspan\u003E(node.val)\n    \u003Cspan class=\"hljs-keyword\"\u003Efor\u003C\u002Fspan\u003E child \u003Cspan class=\"hljs-keyword\"\u003Ein\u003C\u002Fspan\u003E [node.left, node.right]:\n      stack.append(child)\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E可以看到，代码虽然变长了，但是其解决思路却十分优雅，如果你碰巧没有在《编译原理》课上逃课、摸鱼或者睡觉，你应该能一眼看出这里的栈（stack）其实就是在模拟编译器（对于 Python 来说是解释器）在运行递归函数时的行为，回想一下之前的递归代码，每次调用自身函数时，都相当于往栈的末尾压入一个新的函数调用点，而很多编译器或者解释器（比如 Python 或者 Javascript）都没有开启尾递归优化[1]，从而引入了栈溢出的风险，所以在实际写代码的时候，非递归形式的代码往往能在性能和效率上更胜一筹，这也是除了能用来装逼之外的更重要的优点。\u003C\u002Fp\u003E\n\u003Cp\u003E说了半天，让我们切入到文章的主题，如何对二叉树进行非递归形式的遍历呢？刚刚的 DFS 代码虽然很靓仔，但是有很多时候我要进行前中后序遍历或者层次遍历，该怎么写呢？其实只需要稍加变形即可。\u003C\u002Fp\u003E\n\u003Cp\u003E我们再次略施小计，把 DFS 变成广度优先遍历（Breadth First Search, BFS），而且只需要改动一处即可：\u003C\u002Fp\u003E\n\u003Cpre class=\"hljs\"\u003E\u003Ccode\u003E\u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Edef\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-title\"\u003Edfs\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-params\"\u003Enode\u003C\u002Fspan\u003E):\u003C\u002Fspan\u003E\n  queue= [node]\n  \u003Cspan class=\"hljs-keyword\"\u003Ewhile\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-built_in\"\u003Elen\u003C\u002Fspan\u003E(queue) &gt; \u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E:\n    node = queue.pop(\u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E)\n    \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Enot\u003C\u002Fspan\u003E node: \u003Cspan class=\"hljs-keyword\"\u003Econtinue\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-built_in\"\u003Eprint\u003C\u002Fspan\u003E(node.val)\n    \u003Cspan class=\"hljs-keyword\"\u003Efor\u003C\u002Fspan\u003E child \u003Cspan class=\"hljs-keyword\"\u003Ein\u003C\u002Fspan\u003E [node.left, node.right]:\n      queue.append(child)\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E可以看到，我们只将栈改成了队列（queue），对于 Python 来说，只需要把 \u003Ccode\u003Epop\u003C\u002Fcode\u003E 函数的参数设置为 \u003Ccode\u003E0\u003C\u002Fcode\u003E 即可，为什么把栈改成队列就能将 DFS 改成 BFS 呢？回想一下栈和队列的特性：\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003E栈的特性是先进后出，即所有元素只能从栈的尾部进入，尾部弹出；\u003C\u002Fli\u003E\n\u003Cli\u003E队列的特性是先进先出，即所有元素从队列的尾部进入，头部弹出。\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003E基于队列的这种先进先出的特性，我们的函数在遍历第 \u003Ccode\u003Ei + 1\u003C\u002Fcode\u003E 层节点时，其第 \u003Ccode\u003Ei\u003C\u002Fcode\u003E 层的节点总能保证是已经被遍历过的，从而实现了广度优先遍历，而\u003Cstrong\u003E二叉树的层次遍历其实就是广度优先遍历\u003C\u002Fstrong\u003E。\u003C\u002Fp\u003E\n\u003Cp\u003E最后我们回到开头的引例，把上面的非递归形式的代码改造一下，从而完成二叉树的前中后序遍历，以二叉树的前序遍历为例子：\u003C\u002Fp\u003E\n\u003Cpre class=\"hljs\"\u003E\u003Ccode\u003E\u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Edef\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-title\"\u003Epre_order\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-params\"\u003Enode\u003C\u002Fspan\u003E):\u003C\u002Fspan\u003E\n  stack = [node]\n  \u003Cspan class=\"hljs-keyword\"\u003Ewhile\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-built_in\"\u003Elen\u003C\u002Fspan\u003E(stack) &gt; \u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E:\n    node = stack.pop()\n    \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Enot\u003C\u002Fspan\u003E node: \u003Cspan class=\"hljs-keyword\"\u003Econtinue\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-built_in\"\u003Eprint\u003C\u002Fspan\u003E(node.val)\n    \u003Cspan class=\"hljs-keyword\"\u003Efor\u003C\u002Fspan\u003E child \u003Cspan class=\"hljs-keyword\"\u003Ein\u003C\u002Fspan\u003E [node.right, node.left]:\n      stack.append(child)\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E可以看到，相对于原始的 DFS 代码，我们只调整了左右子树的入栈顺序，先将右子树入栈，再将左子树入栈，这样保证了出栈时左子树总是先于右子树出栈，从而保证了左子树一定会在右子树之前被遍历到，从而满足了前序遍历的“根左右”的遍历顺序。\u003C\u002Fp\u003E\n\u003Cp\u003E然后再看中序遍历，思考一下中序遍历的要求：每个节点只能在其左子树遍历完成后遍历，然后再遍历其右节点，即“左根右”的顺序，也就是说，我们要控制根节点被遍历的时机，但是基于栈的方式又不可避免地要先遍历根节点才能访问到其左右孩子，那么怎么才能判定根节点被访问的时机呢？其实我们只需要略施小计，让访问过的节点“二进宫”即可，即给每个节点多设置一个状态：\u003C\u002Fp\u003E\n\u003Cpre class=\"hljs\"\u003E\u003Ccode\u003E\u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Edef\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-title\"\u003Epre_order\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-params\"\u003Enode\u003C\u002Fspan\u003E):\u003C\u002Fspan\u003E\n  stack = [(node, \u003Cspan class=\"hljs-literal\"\u003EFalse\u003C\u002Fspan\u003E)]\n  \u003Cspan class=\"hljs-keyword\"\u003Ewhile\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-built_in\"\u003Elen\u003C\u002Fspan\u003E(stack) &gt; \u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E:\n    node, shuold_traverse = stack.pop()\n    \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Enot\u003C\u002Fspan\u003E node: \u003Cspan class=\"hljs-keyword\"\u003Econtinue\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E should_traverse:\n        \u003Cspan class=\"hljs-built_in\"\u003Eprint\u003C\u002Fspan\u003E(node.val)\n        \u003Cspan class=\"hljs-keyword\"\u003Econtinue\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-keyword\"\u003Efor\u003C\u002Fspan\u003E child \u003Cspan class=\"hljs-keyword\"\u003Ein\u003C\u002Fspan\u003E [node.right, node, node.left]:\n      stack.append((child, child == node))\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E可以看到，我们用 \u003Ccode\u003Eshould_traverse\u003C\u002Fcode\u003E 来控制遍历的时机，每个节点并不会在第一时间被输出，而是赋予一个遍历状态，注意到二次入栈时，每个节点都会严格按照“右根左“的顺序入栈，这样出栈时顺序正好为”左根右“，从而保证了每个根节点只会在其左子树之后输出，满足了中序遍历的条件。\u003C\u002Fp\u003E\n\u003Cp\u003E有了前两个的铺垫，我们只需故技重施，就可以把中序遍历改造成后序遍历，即入栈时只需要按照”根右左“的顺序入栈：\u003C\u002Fp\u003E\n\u003Cpre class=\"hljs\"\u003E\u003Ccode\u003E\u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Edef\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-title\"\u003Epre_order\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-params\"\u003Enode\u003C\u002Fspan\u003E):\u003C\u002Fspan\u003E\n  stack = [(node, \u003Cspan class=\"hljs-literal\"\u003EFalse\u003C\u002Fspan\u003E)]\n  \u003Cspan class=\"hljs-keyword\"\u003Ewhile\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-built_in\"\u003Elen\u003C\u002Fspan\u003E(stack) &gt; \u003Cspan class=\"hljs-number\"\u003E0\u003C\u002Fspan\u003E:\n    node, shuold_traverse = stack.pop()\n    \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Enot\u003C\u002Fspan\u003E node: \u003Cspan class=\"hljs-keyword\"\u003Econtinue\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E should_traverse:\n        \u003Cspan class=\"hljs-built_in\"\u003Eprint\u003C\u002Fspan\u003E(node.val)\n        \u003Cspan class=\"hljs-keyword\"\u003Econtinue\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-keyword\"\u003Efor\u003C\u002Fspan\u003E child \u003Cspan class=\"hljs-keyword\"\u003Ein\u003C\u002Fspan\u003E [node, node.right, node.left]:\n      stack.append((child, child == node))\n\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\n\u003Cp\u003E这样根节点只会在其左右子树都遍历完成之后再输出，从而满足了后序遍历的条件。\u003C\u002Fp\u003E\n\u003Cp\u003E到此为止，花式遍历二叉树的方法就介绍完毕了，其实并没有什么高深的技巧，核心思想就是用队列或者栈来模拟递归函数的行为，为所有的遍历行为提供了一个统一的行为，从而更方便记忆，在面试的时候写出来也会有奇效。\u003C\u002Fp\u003E\n\u003Cp\u003E思考题：二叉树其实是一种有向无环图，可以想一下如何用非递归方法对一个图进行深度优先和广度优先遍历。\u003C\u002Fp\u003E\n\u003Ch3\u003E附录\u003C\u002Fh3\u003E\n\u003Col\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fzh.wikipedia.org\u002Fwiki\u002F%E5%B0%BE%E8%B0%83%E7%94%A8\"\u003E维基百科：尾调用\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fzh.wikipedia.org\u002Fwiki\u002F%E5%A0%86%E7%96%8A%E6%BA%A2%E4%BD%8D\"\u003E维基百科：堆栈溢出\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n",should404:false,id:26}},mutations:void 0});