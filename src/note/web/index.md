---
outline: deep
---

# vitepress 项目部署到 github Pages

:::tip 必看

- 主要阐述 vitepres 项目部署到`GitHub Pages`
- 不阐述 vitepess 细节技术使用，详细使用可详见[vitepress 中文官网](https://vitepress.dev/zh/)
- 如想保姆级别的 Vitepress 教程博客，可查看该博主的[博客](https://docs.bugdesigner.cn/docs/Tutorial/vitepress.html)
  :::

## 创建 vitepress 项目

- **步骤一**
  :::code-group

```sh [npm]
npm add -D vitepress
```

```sh [pnpm]
pnpm add -D vitepress
```

```sh [yarn]
yarn add -D vitepress
```

```sh [bun]
bun add -D vitepress
```

:::

- **步骤二**
  ::: code-group

```sh [npm]
npx vitepress init
```

```sh [pnpm]
pnpm vitepress init
```

```sh [bun]
bunx vitepress init
```

:::
:::warning
步骤二中采用 vitepress 命令式创建项目时，会提示是否在根路径下直接创建，建议在当前项目中`./docs`目录中创建

```sh 4
┌  Welcome to VitePress!
│
◆  Where should VitePress initialize the config?
│  ./_
└
```

:::

- UP 使用 vitepress 命令式创建项目具体流程如下，其中**项目名称**为`DocsDemo`,**Theme**建议选择`第二个`，Vitepress 官网目前用的也是这个，简洁美观,是否使用**Typescript**根据个人喜好

```sh
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◇  Theme:
│  Default Theme + Customization
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
└  Done! Now run npm run docs:dev and start writing.
```

## 推送项目到 GitHub

### Github 中创建项目

在 Github 中创建开源项目,名称与本地项目同名，步骤如下

> 项目类型选择 `Public`

![githubCreateRepositry](/note/web/vitepress/gitubCreateItem.png)
![githubCreateSuccess](/note/web/vitepress/githubCreateSuccess.png)

### 本地项目推送到 Github

1. 修改`config.mts`中`base`配置信息

```ts
base:"/DocsDemo/",
```

2. 初始化本地 git 仓库

```sh
git init
```

3. 添加.gitignore 文件

```sh
node_modules
.DS_Store
dist
dist-ssr
cache
.cache
.temp
*.local
```

4. 添加文件到暂存区

```sh
git add .
```

5. 提交到仓库

```sh
git commit -m 'item init'
```

6. 添加远程仓库到本地

```sh
git remote add origin git@github.com:GengZzz/DocsDemo.git
```

7. 执行项目推送

```sh
git push -u origin master
```

::: warning 注意
此处分支 branch 一定要设置为`master`
:::

## 自动部署

1. GitHub 设置 Actions
   ![selectActions](/note/web/vitepress/githubSelectActions.png)
2. 添加`deploy.yml`文件

::: warning 注意

- 官方文档中配置需要根据自己使用的`包管理工具`进行修改比如`npm`、`yarn`、`bun`、`pnpm`等
- 官方文档中`deploy.yml`配置信息中`branches: [main]`改为`branches: [master]`
- 修改为自己的`Node`版本

```yml
- name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18  // [!code focus]
          cache: npm # 或 pnpm / yarn
```

- 如果项目中的根目录不是`./docs`，此处注意修改

```yml
- name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist // [!code focus]
```

- 该段中`touch docs/.vitepress/dist/.nojekyll `一定不能省略，关系到部署成功后`样式`是否`生效`

```yml
- name: Build with VitePress
        run: |
          npm run docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
          touch docs/.vitepress/dist/.nojekyll // [!code focus]
```

:::

> 配置文件信息，`UP使用的是npm`可详见[Vitepress 官网`deploy.yml`信息](https://vitepress.dev/zh/guide/deploy#github-pages)

```yml
# 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程
#
name: Deploy VitePress site to Pages

on:
  # 在针对 `main` 分支的推送上运行。如果你
  # 使用 `master` 分支作为默认分支，请将其更改为 `master`
  push:
    branches: [master]

  # 允许你从 Actions 选项卡手动运行此工作流程
  # workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      # - uses: pnpm/action-setup@v2 # 如果使用 pnpm，请取消注释
      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm # 或 pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci # 或 pnpm install / yarn install / bun install
      - name: Build with VitePress
        run: |
          npm run docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
          touch docs/.vitepress/dist/.nojekyll
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- GitHub 中添加 deploy.yml 以及提交
  ![githubNewFile](/note/web/vitepress/githubNewFile.png)

![githubSetActions](/note/web/vitepress/githubSetActions.png)

- 查看 workflows 执行状态,执行结束后会看到图标显示为`绿色`
  ![githubActionsLook](/note/web/vitepress/githubActionsLook.png)

- 查看部署后的文档访问地址,点击地址便可以看到不出成功后的路由地址，访问地址便能成功看到部署成功以后的 vitepress 文档
  ![githubSuccessVitepress](/note/web/vitepress/githubSuccessVitepress.png)
