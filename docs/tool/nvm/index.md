# nvm
![nvm image](/nvm.png)

[nvm](https://github.com/nvm-sh/nvm)用于切换nodejs不同的版本，用于解决相应环境版本兼容问题

## 基础安装
windows 安装
windows中下载连接 [nvm-of-windows](https://github.com/coreybutler/nvm-windows)
## 常用命令
帮助
```sh
nvm -h
或者
nvm help
```
查看所有可安装的 node 版本
```sh
nvm-ls-remote
```
安装指定版本
```sh
nvm install 14
```
切换nodejs版本
```sh
nvm use 14
```
查看本地所有已安装的nodejs版本
```sh
nvm list
```
查看当前使用nodejs版本
```sh
nvm current
```
删除指定nodejs版本
```sh
nvm uninstall 14
```
## 常见问题
:::warning
如果之前使用 npm 安装过扩展包，现在想使用 NVM 进行管理。则首先需要从全局中删除 node_modules 目录
:::
>查看全局node_module目录
```sh
npm root -g
```
