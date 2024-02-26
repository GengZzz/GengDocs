# pnpm

[pnpm](https://pnpm.io/zh/) 快速的，节省磁盘空间的包管理工具 ,pnpm 比其他包管理器快 2 倍

![pnpm images](../../public/pnpm.png)

## 安装

```sh
npm install -g pnpm
```

## 卸载

```sh
npm rm -g pnpm
```

## 常用命令

### 安装所有依赖

根据项目目录中 package.json 安装

```sh
pnpm install
 # 或者
 pnpm i
```

### 安装依赖

全局安装

```sh
pnpm add <pkg>
```

为当前项目安装

```sh
pnpm add -D <pkg>
```

### 查看依赖

列出项目的依赖

```sh
pnpm ls
# 或者
pnpm list
```

查看已安装的依赖信息

```sh
pnpm ls <pkg name>
# 如
pnpm ls less
```

查看已安装的具体包的信息

```sh
pnpm info <pkg>
# 或者
pnpm view <pkg>
# 如
pnpm view vue
```

查看全局安装依赖

```sh
pnpm list -g
```

### 更新依赖

遵循 package.json 指定的范围更新所有的依赖项

```sh
pnpm up
```

更新所有依赖项，此操作会忽略 package.json 指定的范围

```sh
pnpm up --latest
```

更新到指定版本

```sh
pnpm up foo@2
```

### 卸载依赖

删除项目中已安装的包

```sh
pnpm un <pkg name>
```

删除全局环境中已安装的包

```sh
pnpm uninstall -g <pkg name>
# 或者
pnpm rm -g  <pkg name>
# 或者
pnpm un -g <pkg name>
```
