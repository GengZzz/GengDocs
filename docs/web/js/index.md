---
 outline: deep
 side: false
---
# 简介
作为一门功能全面的编程语言，其具备了与浏览器窗口及内容等几乎所有方面的交互能力。作为Web的一个重要组成部分，JavaScript的重要性是不言而喻的。
JavaScript是一种专为网页交互而设计的脚本语言，由下列三个不同的部分组成
* **ECMAScript**,由ECMA-262定义，提供核心的语言功能
* **文档对象模型(DOM)**,提供访问和操作网页内容的方法和接口
* **浏览器对象模型(BOM)**,提供与浏览器交互的方法和接口

<!-- ## 简史
* 1995年2月
*  -->
## 实现
虽然JavaScript和ECMAScript通常被人们用来表达相同的含义，但JavaScript的含义比ECMA-262中规定的要多得多。一个完整的JavaScript实现由以下几部分组成
* 核心(**ECMAScript**)
* 文档对象模型(**DOM**)
* 浏览器对象模型(**BOM**)
### ECMAScript
由ECMA-262定义的ECMAScript与WEB浏览器没有依赖关系。ECMA-262定义的只是这门语言的基础，而在此基础之上可以构建更完善的脚本语言。我们常见的Web浏览器只是ECMAScript实现可能的**宿主环境之一**，ECMA-262规定了这门语言的组成部分如下：
::: tip 组成部分
* 语法
* 类型
* 语句
* 关键字
* 保留字
* 操作符
* 对象
:::
### 文档对象模型(DOM)
文档对象模型(DOM, Document Object Model)是针对XML但经过扩展用于HTML的应用编程接口，DOM把整个页面映射为一个多层节点结构。如以下HTMl代码
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>example</title>
</head>
<body>
    <div>hello world!</div>
</body>
</html>
```
该页面可以表示成如下分层节点,通过DOM创建这个表示文档的树形图，开发人员获得了控制页面内容和结构的主动权，借助DOM提供的API,开发人员可以轻松自如地删除、添加、替换或者修改任何节点。
![domStruct](/domExample.png)
### 浏览器对象模型(BOM)
使用BOM可以控制浏览器显示的页面以外的部分。从根本而言，BOM只处理浏览器窗口和框架；但人们习惯上也把所有针对浏览器的JavaScript扩展算作BOM的一部，如下就是这一些扩展。
* 弹出新浏览器窗口
* 移动、缩放和关闭浏览器窗口
* 提供浏览器详细信息的navigator对象
* 提供浏览器所有加载页面的详细信息的location对象
* 提供用户显示器分辨率详细信息的screen对象
* cookies的支持
* 。。。
## 兼容
ES6兼容性现状，可通过网站[caniuse](https://caniuse.com/?search=javascript)查看
![javaScript浏览器兼容](/jsJr.png)