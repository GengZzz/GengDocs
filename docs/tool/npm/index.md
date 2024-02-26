# npm
![NPM](/node.png)
NPM的全称是Node Package Manager，是一个NodeJS包管理和分发工具，已经成为了非官方的发布Node模块（包）的标准。
## 安装
>使用npm需要下载[nodejs](https://nodejs.org/zh-cn/)
:::tip
建议下载长期稳定版本
:::
## 常用命令
### 安装包
安装空项目所有依赖
```sh
npm install 
# 或者
npm i
```
全局安装
```sh
npm install -g <pkg name>
```
安装项目依赖，但不修改package.json 文件，下次使用npm install 时不会自动安装
```sh
npm install <pkg name>
```
生产环境中使用
:::tip
* 在package.json文件dependencies属性下增加记录
* npm install 时会自动安装该软件包
* 使用npm install --production或者NODE_ENV变量值为production时，安装该软件包
:::
```sh
npm install --save <pkg name>
# 或者使用
npm install -S <pkg name>
```
开发环境中使用
:::tip
* 在package.json文件devDependencies属性下增加记录
* npm install 时会自动安装该软件包
* 使用npm install --production或者NODE_ENV变量值为production时，不会安装该软件包
:::
```sh
npm install --save-dev <pkg name>
# 或者
npm install -D <pkg name>
```
### 卸载包
卸载全局中的依赖包
```sh
npm uninstall -g  <pkg name>
# 或者
npm un -g  <pkg name>
```
卸载项目中的指定依赖包
```sh
npm uninstall  <pkg name>
# 或者
npm un  <pkg name>
```
### 更新包
通过更新自身来更新
```sh
npm install -g npm
```
更新所有依赖包
```sh
npm update
# 或者
npm up
```
更新指定依赖包
```sh
npm up <pkg name>
# 或者
npm update <pkg name>
# 如
npm up vitepress
```
### 查看包
查看安装的所有依赖包
```sh
npm list
# 或者
npm ls
```
查看本地是否安装某一个依赖包
```sh
npm ls <pkg name>
# 如
npm ls less
# 或者
npm list vitepress
```
