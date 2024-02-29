---
 outline: deep
---
# 起步入门
## 使用
可以在HTML中嵌入`script`元素使用，分为`嵌入代码`和`外部文件`，该元素常用的属性如下
* **async**: 立即下载脚本(`异步`)，但不妨碍页面中其他操作。只对`外部脚本`文件有效
``` js
<script async src="test.js">
    
</script>
```
* **defer**: 脚本`延迟`到文档完全被解析和显示之后执行。只对`外部脚本`文件有效
``` js
<script defer src="test.js">
    
</script>
```
* **src**: 要执行代码的外部文件
 ``` js
<script  src="hello.js">
    
</script>
```
## 代码注释
分为单行注释与多行注释
### 单行注释
```js
function hello(){
    // alert('hello world') 单行注释
}
```
### 多行注释
```js
/* 
function hello(){
    alert('hello world') 多行注释
}
*/
```
## 变量声明
### 命名规则
JavaScript是`弱类型`语言,变量没有类型而值有类型。变量命名以`字母`、`_`、`$`**开始**，后跟`字母`、`数字`、`_`

```js
const test = 'example'
const $_test = 'example'
console.log(test);
console.log($_test)
```
### 保留字和关键字
::: warning 警告⚠ 
`保留字`和`关键字`是`不能用作变量`定义的，常见的保留字和关键字如下
:::
|**关键字**||||||||
|:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|
|break|do|instanceof|typeof|continue|return|void|default|
|case|else|new|var|debugger|function|switch|while|if|

|**保留字**||||||||
|:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|:--------:|
|abstract|enum|int|short|boolean|export|interface|static|
|byte|extends|long|super|char|final|native|throws|package|

### 变量声明
使用`cosnt` 、 `let` 、`var`等关键字声明变量
```js
let test = 1 //声明变量test为 Number类型 并赋值为1
console.log(test);
console.log(typeof test);
let testOne,testTwo //声明多个变量
testOne ='example'
testTwo = 2
console.log(testOne,testTwo);
```
::: tip 运行结果
```sh
1
number
example 2
```
:::

## 变量提升
在代码执行之前，变量和函数声明会被提升到所在`作用域顶部`，使用Var声明代码会提升到前面
::: warning 注意
仅声明会被提升，初始化不会  
使用 `var` 定义的代码，声明会被提升到前面，赋值还在原位置
:::
``` js
console.log(myTest); //输出undefined
var myTest = 'hello world'
console.log(myTest);
```
虽然`myTest`声明在`console.log()`之后，但是`myTest`被`提升`到了`作用域的顶部`，实际代码运行类似于
```js
var myTest
console.log(myTest);
var myTest = 'hello world'
console.log(myTest);
```
::: tip 运行结果
```sh 
undefined
hello world
```
:::

## 暂时性死区(TDZ)
变量在`作用域`内已经`存在`，但必须在`let/const`**声明**后才可以使用
使用`let/const`声明的变量在声明前存在暂时性死区，会发生错误
```js
console.log(myTest);
let myTest = 'hello world'
````
:::tip 运行结果
```sh {2}
console.log(myTest);
ReferenceError: Cannot access 'myTest' before initialization 
```
:::

:::warning 注意
* 变量需要先声明后使用
* 变量声明尽量采用`let/const`，少使用`var`
:::

## 块作用域
### var
var没有块级作用域的机制，其定义的变量存在全局作用域或者函数作用域中。
没有块级作用域很容易污染全局，如下代码中，函数中的变量`test`没有声明直接复制，可以在函数以外的作用域中进行访问，如果将其引用到`HTML`页面中，可以在`window`对象中进行访问
```js
function hello(){
	 test = 'hello world'
}
hello()
console.log(test)
console.log(window.test,'浏览器环境中')
```
html中引用
``` html
<script src="./1.js"></script>
<body>
</body>
</html>
```
::: info 运行结果
```sh
hello world
hello world 浏览器环境中
```
:::
### let
与var不同的是，`let/const`拥有块作用域
let存在块级作用域，定义的变量只能在作用域中有效
>[!tip]
> 块内部可以访问到上层作用域的变量

```js
let myTest = 'hello world'
function test(){
	let testOne = 'test'
	return function testCopy(){
		console.log(testOne,'第一层'); //test 第一层
		return function bottom(){
			console.log(myTest,'第二层'); //hello world 第二层
			console.log(testOne,'第二层'); //test 第二层
			
		}
	}
}
test()()()
console.log(testOne); //ReferenceError: testOne is not defined
```
### const
const 通常用来声明常量
:::tip
* 常量名建议全部大写
* 只能声明一次常量(可在不同作用域中定义同变量名常量)
* 且声明的同时必须赋值
* 不允许再次赋值
* 可以修改引用类型变量的值
* 拥有块、函数、全局作用域
:::

常量不允许全新赋值
```js
const URL = 'https://www.setvoid.cn'
URL = 'setvoid.cn'
console.log(URL)
```
:::info 运行结果
```sh
URL = 'setvoid.cn'
    ^
TypeError: Assignment to constant variable.
```
:::

改变常量的引用类型值
```js
const INFO = {
	name:'setvoid',
	age:19,
	study:true
}
console.log(INFO)
INFO.age = 50
INFO.age >= 30 ? false : true
console.log(INFO)
```
:::info 运行结果
``` sh
{ name: 'setvoid', age: 19, study: true }
{ name: 'setvoid', age: 50, study: true }
```
:::

不同作用域中定义常量
```js
const NAME = 'top hello world'
function TestOne(){
	const NAME = 'testOne hello world'
	return NAME
}
function TestTwo(){
	const NAME = 'testTwo hello world'
	return NAME
}
console.log(NAME)
console.log(TestOne())
console.log(TestTwo())
```
::: info 运行结果
```sh
top hello world
testOne hello world
testTwo hello world
```
:::

### let/const/var相同点
:::info 相同点
* 全局作用域中定义的变量，可以在函数中使用
* 函数中声明的变量，只能在函数或者子函数中使用
* 函数中声明的变量，外部无法访问以及使用
:::

### freeze
在`严格模式`中，使用对象`Object.freeze`冻结已经声明的变量后，修改该变量，会产生`报错`
```js
"use strict"
let test = {
	name:'test',
	age:19
}
Object.freeze(test)
test.age = 20
console.log(test)
```
:::info 运行结果
```sh
test.age = 20
         ^
TypeError: Cannot assign to read only property 'age' of object '#<Object>'
```
:::

### 传值与传址(引用)
引用类型指对象数据类型
:::info 基本数据类型
* 数值(Number)
* 字符串(String)
* Null
* Undefined
* Boolean
:::
基本类型复制是值的复制，互不影响。而引用类型，变量保存的是引用对象的指针，变量间赋值是队变量指针的赋值，这样多个变量引用的是同一个对象
```js
let testOne = 1
let testTwo = testOne
let test = {
	name:'lihua',
	age:20
},testObject
testObject = test
testObject.age = 22
testObject.name = '张三'
console.log(testOne,testTwo)
console.log(test)
console.log(testObject)
```
:::info 运行结果
```sh
1 1
{ name: '张三', age: 22 }
{ name: '张三', age: 22 }
```
:::