# Xueyi's Archive

当前个人网站的完整代码环境包，可作为 GitHub 仓库，也可直接在 Codex 中打开并继续迭代。

线上版本：https://xueyi-internet-archive.josephineallesha.chatgpt.site

## 启动预览

需要 Node.js 18 或以上。项目没有第三方 npm 依赖，无需安装依赖。

```bash
npm run dev
```

打开 http://127.0.0.1:3000 。修改文件后刷新浏览器即可查看变化。按 Ctrl+C 停止预览。

```bash
npm run check
npm run build
```

构建结果位于 `dist/`，可以交给静态网站托管服务。

## 文件说明

| 文件 | 用途 |
| --- | --- |
| `public/index.html` | 页面结构与 Bio |
| `public/style.css` | 配色、衬线字体、布局、手机适配 |
| `public/script.js` | 项目数据、分类弹窗交互 |
| `public/fantasy-hero.webp` | 当前首屏原创生成视觉 |
| `public/favicon.svg` | 网站图标 |
| `scripts/serve.mjs` | 无依赖本地预览服务 |
| `scripts/build.mjs` | 生成静态发布文件 |
| `AGENTS.md` | Codex 的设计与编辑指导 |
| `.devcontainer/devcontainer.json` | GitHub Codespaces / VS Code 容器环境配置 |
| `.openai/hosting.json` | 现有 Sites 项目的身份与发布配置 |

## 上传 GitHub

解压后，把 `xueyi-archive` 文件夹作为仓库根目录。在 GitHub 新建空仓库，不勾选初始化 README，然后在本地执行：

```bash
git init
git add .
git commit -m "Initial portfolio source"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/xueyi-archive.git
git push -u origin main
```

把 `YOUR_USERNAME` 替换成你的 GitHub 用户名；仓库名不同则相应替换。登录由本机 Git/GitHub 的常规授权方式完成，代码包不包含任何账号凭证。也可以在空仓库中使用 Upload files 上传解压后的文件；隐藏配置文件需要一起上传。

## 在 Codex 中继续

打开这个文件夹或对应 GitHub 仓库作为项目，告诉 Codex 阅读 `AGENTS.md`，然后继续描述修改需求。设计约束与当前结构已写入该文件；它不是完整聊天记录。

当前顺序：首屏 → Bio → 作品卡片。全站统一紫黑底色，粉紫细节、优雅衬线字体与 fantasy 视觉。四个章节中 Product & Technology 合并技术项目与实习项目。

## 图片、字体和发布

首屏图片已经包含在包内；字体从 Google Fonts 加载，离线时使用系统衬线/无衬线字体。3D 与平面作品尚待实际素材，不包含虚构的作品内容。

GitHub 上传与本地修改不会自动更新当前 Sites 网址。要继续发布到原网址，需要在支持 Sites 插件的环境中操作现有项目；本包保留了原项目配置。也可按你的要求改用其他静态托管服务。

这是最新网站版本的源码快照，没有原聊天记录、Git 历史或自动发布配置。没有为个人作品附加开源许可，公开仓库前可自行决定许可方式。
