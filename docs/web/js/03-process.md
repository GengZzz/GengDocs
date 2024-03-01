---
outline: deep
---
## 运算符
### 赋值运算符
使用=对变量进行赋值
```js
let test = {}
let testOne = 1
let testTwo = 'hello world'
```
### 算数运算符
> [!tip]
> 算术运算符主要包括`加`、`减`、`乘`、`除`、`取余`，对应为`+`、`-`、`*`、`/`、`%`
```js
let test = 20 ,testOne = 5
console.log(test+testOne)
console.log(test-testOne)
console.log(test*testOne)
console.log(test/testOne)
console.log(test%testOne)
```
:::info 运算结果
```sh
25
15
100
4
0
```
:::
### 符合运算符
> [!info] 
> 符合运算是简单算数运算的简写,比如`*=`,`/=`,`-=`,`+=`,`%=`
```js
let a = 2
a /= 2
console.log(a) // 1
```
### 一元运算符
## 前置操作
前置操作会在表达式最先执行
```js
let test = 2
++test
console.log(test)
--test
console.log(test)
```
:::tip 运行结果
```sh
3
2
```
:::
:::tip
`++n`就是`n=n+1`的简写形式  
:::
## 后置操作
后置操作会在表达式最后执行
```js
let test = 2
console.log(test++)
let testTwo = test++ +1
console.log(testTwo)
```
:::tip 运行结果
```sh
2
4
```
:::
## 比较运算符
|运算符|说明|
|:------:|:---------:|
| >| 大于|
| < |小于|
| >= |大于等于|
| <= |小于等于|
| == |强制类型转换|
| === |不强制类型转换|
```js
let test = 1 ,testOne = 2,testTwo = true
console.log(test > testTwo)
console.log(test < testTwo)
console.log(test >= testTwo)
console.log(test <= testTwo)
console.log(test == testTwo)
console.log(test === testTwo)
```
:::tip 运行结果
```sh
false
false
true
true
true
false
```
:::	
## 逻辑运算符
### 逻辑与
使用`&&`表示，左右的表达式都为`true`时，表达式成立
```js
console.log(1 <= 2 && true) //true
```
### 逻辑或
使用`||`表示，左右的表达式有一个为`true`时，表达式成立
```js
console.log(1 <= 2 || false) //true
```
### 逻辑非
使用`！`表示，即相反，如果为`true`，则为`false`
```js
let test = true
console.log(!test) //false
console.log(!(1 >= 2)) // true
```
## 流程控制
### if语句
表判断，如果为真，运行后续代码
```js
if(true){
	console.log('hello world') // hello world
}
```
### do-while语句
先执行，后判断
```js
let test = 0
do{
 ++test
 console.log(test)
 
}while(test <= 4)
```
:::info 运行结果
```sh
1
2
3
4
5
```
:::
### while语句
先判断，后执行
```js
	let test = 0
	while(test <= 2){
		++test
		console.log(test)
		
	}
```
:::info 运行结果
```sh
1
2
3
```
:::
### for语句
可以在循环前初始化变量
```js
for (let index = 0; index < 10; index++) {
	console.log('hello world')
}
```
### for-in语句
用于遍历对象的所有属性，`for/in`主要用于遍历对象，不建议用来遍历数组
遍历数组
```js
let test = [
	{name:'李华',age:18},
	{name:'张三',age:20}
]
for (const key in test) {
	console.log(key)
	console.log(test[key])
}
```
:::tip 运行结果
```sh
0
{ name: '李华', age: 18 }
1
{ name: '张三', age: 20 }
```
:::
遍历对象
```js
let test = {name:'李华',age:20}
for (const key in test) {
	console.log(key)
}
```
:::info 运行结果
```sh
name
age
```
:::
### for-of语句
用来遍历`Array`[数组]、`String`[字符串],`Maps`(映射)、`Sets`(集合)等可迭代的数据类型
> [!tip]
> 与for/in不同的是for\of每次循环取其中的值而不是索引  
遍历数组
```js
let test = [
	{name:'李华',age:18},
	{name:'张三',age:20}
]
for (const item of test) {
	console.log(item)
}
```
:::info 运行结果
```sh
{ name: '李华', age: 18 }
{ name: '张三', age: 20 }
```
:::

遍历字符串
```js
let test = 'setvoid'
for (const item of test) {
	console.log(item) 
}
```
::: info 运行结果
```sh
s
e
t
v
o
i
d
```
:::
### break/continue
`break`用于退出当前循环，`continue`用于退出当前循环返回循环起始继续执行
利用`continue`特性后去10以内的偶数
```js
for (let index = 1; index < 10; index++) {
	if(index % 2){
		continue
	}
	console.log(index)
}
```
:::info 运行结果
```sh
2
4
6
8
```
:::
### label语句
定义`label`,可以使用`continue/breal`跳转到该位置
### switch语句
::: tip 
> 可以将`switch`理解为`if`的另外一种写法
* 如果表达式等于`case`中的值，将执行次`case`代码段
* `break`关键字或终止`switch`的执行
* 没有任何`case`匹配时将执行`default`代码片段
* 如果`case`执行后缺少`break`则接着执行后面的代码
:::
### 三元表达式
是针对`if`判断的简写形式
```js 
true ? console.log('after true run') : console.log('after false run') //after true run
```