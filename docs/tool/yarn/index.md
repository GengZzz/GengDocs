# yarn
![yarn image](../../public/yarn.png)

相对于npm来说，[yarn](https://yarnpkg.com/)会对每次下载的依赖包进行缓存，下次使用是无需再次下载，因此下载安装速率会更快。
## 安装
可通过npm安装yarn
```sh
npm install -g yarn
```
## 常用命令
### 安装包
根据package.json安装空项目所有依赖
```sh
yarn isntall
# 或者
yarn
```
全局安装依赖包
```sh
yarn add -g <pkg name>
```
生产环境
:::tip
* 在package.json文件dependencies属性下增加记录
* yarn 时会自动安装该软件包
* 使用 yarn install --production或者NODE_ENV变量值为production时，安装该软件包
:::
```sh
yarn add <pkg name>
```
开发环境
:::tip
* 在package.json文件dependencies属性下增加记录
* yarn 时会自动安装该软件包
* 使用 yarn install --production或者NODE_ENV变量值为production时，安装该软件包
:::
```sh
yarn add -D <pkg name>
```
### 查看包
查看全局所有依赖包信息
```sh
yarn lsit
```
查看相关依赖包信息
```sh
yarn info <pkg name>
# 如
yarn info react-dome-router
```
### 卸载包
删除全局中的依赖包
```sh
yarn remove -g <pkg name>
```
删除项目中的依赖包
```sh
yarn remove <pkg name>
```
### 更新包
更新所有依赖包
```sh
yarn upgrade 
```
更新指定依赖包
```sh
yarn upgrade <pkg name>
# 如
yarn upgrade react-router@6
```
更新yarn
```sh
yarn upgrade --latest
```

## 更改国内镜像
:::tip
更改为国内镜像会加速项目依赖包的下载速率
:::
查看当前镜像信息
```sh
yarn config get register
```
设置为淘宝镜像
```sh
yarn config set register https://registry.npm.taobao.org/
```

## yrm镜像管理
yrm 是一个 yarn源管理器  
安装yrm
```sh
npm install -g yrm
```
查看所有可以使用的镜像
```sh
yrm ls
```
使用淘宝镜像
```sh
yrm use taobao
```
测试相关镜像速率
```sh
yrm test taobao
```

