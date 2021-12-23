(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{534:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"数据类型"}},[s._v("数据类型")]),s._v(" "),a("h2",{attrs:{id:"一、常见数据类型"}},[s._v("一、常见数据类型")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("类型名")]),s._v(" "),a("th",[s._v("特征")]),s._v(" "),a("th",[s._v("举例")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("string")]),s._v(" "),a("td",[s._v("字符型")]),s._v(" "),a("td",[s._v("\"\"、''")]),s._v(" "),a("td",[s._v('"hello"')]),s._v(" "),a("td",[s._v("只要是被引号包裹的都是字符")])]),s._v(" "),a("tr",[a("td",[s._v("number")]),s._v(" "),a("td",[s._v("数字型")]),s._v(" "),a("td",[s._v("012")]),s._v(" "),a("td",[s._v("3.1415926")]),s._v(" "),a("td",[s._v("常见的各类数字")])]),s._v(" "),a("tr",[a("td",[s._v("boolean")]),s._v(" "),a("td",[s._v("布尔值")]),s._v(" "),a("td",[s._v("true、false")]),s._v(" "),a("td",[s._v("true")]),s._v(" "),a("td",[s._v("只有两个值，表示真假")])]),s._v(" "),a("tr",[a("td",[s._v("array")]),s._v(" "),a("td",[s._v("数组")]),s._v(" "),a("td",[s._v("[]")]),s._v(" "),a("td",[s._v("[1,2,3]")]),s._v(" "),a("td",[s._v("用方括号包起来，逗号隔开的数据")])]),s._v(" "),a("tr",[a("td",[s._v("object")]),s._v(" "),a("td",[s._v("对象")]),s._v(" "),a("td",[s._v("{}")]),s._v(" "),a("td",[s._v("{key:value}")]),s._v(" "),a("td",[s._v("用大括号包起来，里面是键值对的形式，逗号隔开")])]),s._v(" "),a("tr",[a("td",[s._v("function")]),s._v(" "),a("td",[s._v("函数")]),s._v(" "),a("td",[s._v("function")]),s._v(" "),a("td",[s._v("function test() = {}")]),s._v(" "),a("td",[s._v("函数方法")])]),s._v(" "),a("tr",[a("td",[s._v("undefined")]),s._v(" "),a("td",[s._v("未赋值")]),s._v(" "),a("td",[s._v("undefined")]),s._v(" "),a("td",[s._v("undefined")]),s._v(" "),a("td",[s._v("表示被声明了，但是没有被赋值")])]),s._v(" "),a("tr",[a("td",[s._v("null")]),s._v(" "),a("td",[s._v("空")]),s._v(" "),a("td",[s._v("null")]),s._v(" "),a("td",[s._v("表示空")]),s._v(" "),a("td",[s._v("表示为空")])]),s._v(" "),a("tr",[a("td",[s._v("NaN")]),s._v(" "),a("td",[s._v("意外的数字")]),s._v(" "),a("td",[s._v("NaN")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("表示意外转换生成的数值型数据")])])])]),s._v(" "),a("h2",{attrs:{id:"二、javascript-的三大特殊值-nan、undefined、null"}},[s._v("二、JavaScript 的三大特殊值 NaN、undefined、null")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("不是一个数字的数值型数据\n    代表意外或非法转化的数字\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v("和任何数据都不相等，甚至不等于自己\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//认识isNaN()函数，该函数判断括号内的值是否是NaN，是就返回true，不是就返回false")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("：空\n\t类型是对象，表示空nall。但不是空对象\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v("：未定义\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("和"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v("隐式类型转换后可能相等（不严格比较）\n    因为都转为布尔值，两者在布尔值中都为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"_3-如何检测数据类型"}},[s._v("3.如何检测数据类型：")]),s._v(" "),a("p",[s._v("使用关键字："),a("strong",[s._v("typeof")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在打印内容前加上关键字typeof，打印出来的就是当前内容的数据类型")]),s._v("\ncondole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//string")]),s._v("\ncondole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//number")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_4-数据保存在哪"}},[s._v("4.数据保存在哪？")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("保存在变量中：变量比作仓库。变量需要声明之后才能使用\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"五、数据类型转换"}},[s._v("五、数据类型转换")]),s._v(" "),a("h4",{attrs:{id:"数据类型转换的类型分类"}},[s._v("数据类型转换的类型分类：")]),s._v(" "),a("h3",{attrs:{id:"_1-隐式数据转换"}},[s._v("1.隐式数据转换")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("情况（场景）：\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("在算数运算中（通过算数运算符转换）\n        转换的规则：\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("号只要两边出现一个字符，另一个也会转换成字符\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("直接都作为数值运算（可将某srting类型数字"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("转换为number类型数字）\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("if等判断语句中（"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("语句括号中的值）\n        数字：非"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n        字符：非空为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("，空为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n        对象：在任何时候都为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        数组：在任何时候都为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("，数组也是对象的一种\n        函数：在任何时候都为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("，函数也是特殊的对象\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v("：为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v("：为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("：为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"_2-显式转换"}},[s._v("2.显式转换")]),s._v(" "),a("h4",{attrs:{id:"字符转数值"}},[a("strong",[s._v("字符转数值")])]),s._v(" "),a("p",[s._v("Tip:我们想做数学运算的时候，应该先对所有的数据类型进行统一（统一成数字格式），这个时候我们就该用到数据类型的转换。")]),s._v(" "),a("h5",{attrs:{id:"_1-普通字符转换"}},[s._v("(1) 普通字符转换")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("括号里就是需要转换的数据（可用于小数取整）\n    数字可以转换，非数字停止。\n    从左向右转换，能转就转，不能转就停止，后面的不再转换。\n    若第一个就不能转，则显示"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v("，\n    能用在转换整数，认为小数点是非数字。\n\t例：\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//123")]),s._v("\n       \t\ta做为第一个不是数字的字符；返回a之前的所有值，则该方法返回"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//NaN")]),s._v("\n        \ta做为第一个不是数字的字符，且处在字符串的第一位，则判定该字符串无法转换为数字返回"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    数字可以转换，非数字停止\n    从左向右转换，能转就转，不能转就停止，后面的不再转换。\n    若第一个就不能转，则显示"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v("，\n    可以识别小数点\n    例：\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("“"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123.456")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("返回"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123.456")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("“"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123.4")]),s._v('a56"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("返回"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123.4")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("“"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123.00")]),s._v('"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("返回"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseFloat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("“"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123.0")]),s._v('a56"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("返回"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h5",{attrs:{id:"_2-特殊字符转换"}},[s._v("(2) 特殊字符转换")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    严格转换，不允许出现任何非数字，若有非数字直接显示"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v("。\n    可以识别小数点，但会四舍五入取整。小数点后的被四舍五入\n    实质是取最近的整数，能在正数有四舍五入的效果。\n    若为负数；例：Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//-4(数字进一反而变小了)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//为强制数据类型转换 将string类型的数字转为number类型的数字")]),s._v("\n    严格转换，不允许出现任何非数字，若有非数字直接显示"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v("。\n    可以识别小数点\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//NaN")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//123456")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h4",{attrs:{id:"数值转字符"}},[a("strong",[s._v("数值转字符")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t直接转换：相当于直接给数值添加个引号\n\t例：\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//"123" 转换成字符串')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toFixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t保留"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("N")]),s._v("位小数的转换（转换后变成字符）\n\t\t直接转换，可以保留"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("N")]),s._v("位小数\n\t\t例：\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.1415")]),s._v("\n\t\t\ta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toFixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//"3.14" a转换为字符 ，保留两位小数，四舍五入')]),s._v("\n\t\t字符多位"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("小数可以补"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\t\t\ta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toFixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//"3.141500"//字符型，后面可以补0')]),s._v("\n\t\tTip：而数值多位，小数没办法补"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("，计算机认为是无意义的，会自动省略。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);