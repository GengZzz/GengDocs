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
