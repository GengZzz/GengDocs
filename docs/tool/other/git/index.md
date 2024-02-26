# Git

![git](/git.png)

[git](https://gitforwindows.org/) 免费的开源分布式版本控制系统，其速度快速，适用于大型项目管理

## 安装

:::warning
windows 可安装 git for windows,下载[地址](https://gitforwindows.org/)
:::

> 查看版本号

```sh
git --version
```

### 初始化配置

> git 初始化以后，会自动生成配置文件`.gitconfig`

```sh
git config --global user.email "1362284172@qq.com"
git config --global user.name "GengZzz"
```

## 基础使用

### 常用命令

-   初始化仓库

```sh
git init
```

-   克隆代码

```sh
git clone https://github.com/xxxxxxxx
```

-   克隆指定分支

```sh
git clone -b https://github.com/xxxxxxxx
```

-   查看状态

```sh
git status
```

-   提交单个文件

```sh
git add example.yml
```

-   提交所有修改文件

```sh
git add -A
```

-   使用通配符提交

```sh
git add *.xml
```

-   提交到仓库中

```sh
git commit -m "some commit"
```

-   提交已经跟踪过的文件，不需要执行 add

```sh
git commit -a -m 'some commit'
```

-   删除版本库与项目目录中的文件

```sh
git rm all.html
```

-   只删除版本库中文件但保存项目目录中文件

```sh
git rm --cached all.html
```

-   修改最后一次提交

```sh
git commit --amend
```

### 操作流程

1. 克隆项目

```sh
git clone https://github.com/
```

2. 新增文件 example.html

3. 将新增文件上传到暂存区

```sh
git add .
```

4. 查看已添加到暂存区的文件

```sh
git status
```

5. 如果不小心将 example.html 删除，可用一下命令行恢复回来

```sh
git checkout example.html
```

6. 完成工作后执行一个新的提交

```sh
git commit -m 'init commit message'
```

7. 将代码提交到远程服务器

```sh
git push origin master
```

### 工作区

```sh
test
```

### 暂存区

### 日志管理

### 分支管理
>分支用于项目开发过程中新增功能以及修改BUG使用
#### 分支流程
项目开发过程中，一般不会直接在master分支工作，我们应采用分支的开发方式以保证代码健康的朝可控方向发展  
所以功能和BUG修复都会在新的分支完成，除了这个概念外与基本流程使用都是一样的
1. 新建开发功能分支
```sh
git branch dev
```
2. 切换到新分支开始开发
```sh   
git checkout dev
git pull origin master
# 拉取主分支最新代码
git push --set--upstream origin dev
# 推送分支到远程仓库
```
3. 开发完成执行提交
```sh
git add .
git commit -m 'dev init'
```
4. 合并到主分支master

```sh   
git rebase
git checkout master
git merge dev
```
5. 提交到master远程分支

```sh
git push dev
# 推送最新提交到远程仓库dev
```

### 远程仓库


#### pull
拉取远程主机某个分支的更新，再与本地的指定分支合并

-  拉取origin主机的dev分支与本地的master分支合并
```sh
git pull origin ask:ask
```
-  拉取origin主机的ask分支与当前分支合并
```sh   
git pull origin ask
```
-  如果远程分支与当前本地分支同名可以直接执行
```sh
git pull
```
### push

`git push`命令用于将本地分支的更新，推送到远程主机。他的格式与`git pull`命令相似
1. 将当前分支推送到origin主机的对应分支(如果当前分支只有一个追踪分支，可省略主机名)
```sh
git push origin
```
2. 使用`-u`选项指定一个默认主机，这样以后就可以在不加任何参数直接使用`git push`
```sh
git push -u origin master
```
3. 删除远程`ask`分支
```sh
git push origin --delete ask
# 或者
git push origin -D ask
```
4. 本地ask分支关联远程分支推送
```sh
git push --set-upstream origin ask 
```

### 打包

### 自动部署


