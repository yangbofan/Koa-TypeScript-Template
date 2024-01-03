# Koa-TypeScript-Template

一个为 Node.js 开发者定制的现代化 Koa 框架与 TypeScript 项目模板，专为构建高效、可维护的 API 服务而设计。此项目利用了 TypeScript 的强类型特性，结合 Koa 为开发者提供了高度可扩展的服务端应用架构。它集成了一系列的最佳实践和工具，帮助你快速启动新项目，并专注于业务逻辑的开发。

## 特点

- **装饰器风格的路由声明**：通过 `routing-controllers`，你可以使用装饰器来声明控制器和路由以及中间价，使路由更清晰和易于管理。
- **支持 ORM**：集成的 `typeorm` 提供了数据库操作的强大能力，同时使得数据层代码更加直观和类型安全。
- **日志管理**：使用 `log4js` 来方便地跟踪和记录应用日志，同时支持日志分割和条件日志写入。
- **强大的静态文件服务**：内置 `koa-static` 和 `koa-mount`，方便地为应用程序提供静态文件访问和管理服务，支持多目录挂载。
- **开发效率优化**：借助 `nodemon` 实现开发过程中的自动热重载，提升开发效率。
- **代码规范与格式化**：预配置 `eslint`，确保代码风格一致性和遵守最佳实践。
- **生产环境托管**：基于 `pm2`，实现生产环境的进程管理和自动负载均衡，确保高可用。
- **开箱即用**：集成了多个开发环境和生产环境常用的脚本命令，可快速部署和管理。
- **可扩展性**：模板结构适应多种使用场景，便于根据具体需求添加新功能和服务。
- **Webpack集成**：集成 `Webpack`，配置 `alisa`，提供快速的 `TS` 打包编译，优化项目构建流程（`ts-node` 与 `tsc`打包配置可以上main分支查看）。

## 项目结构
```
.
├── src
│   ├── common          // 通用工具存放了静态文件和工具函数以及日志文件等
│   ├── controller      // controller层，写业务相关逻辑
│   ├── entity          // 数据库相关 datasource 和实体
│   ├── logger          // 日志入口文件和日志文件存放
│   ├── middleware      // middleware中间价，其中定义了鉴权和打日志的中间价
│   ├── types           // 自定义 types 文件
│   └── config.ts       // 项目入口 index.js
│   └── index.ts        // 项目入口 index.js
├── ecosystem.config.js // pm2 配置
├── env                 // 环境参数配置
├── .eslintrc.json      // eslint 配置
├── .gitignore          // git 文件过滤
├── nodemon.json        // nodemon 配置
├── package.json        // package 配置
└── tsconfig.json       // ts 配置
```

## 开始

为了运行和使用这个项目模板，你需要先确保安装了 [Node.js](https://nodejs.org/) （推荐使用最新的 LTS 版本）。

### 安装依赖

在项目的根目录下运行以下命令来安装所有必要的依赖：

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```
该命令会启动 nodemon，它将监听源文件的改变并自动重启服务器。

### 构建项目
在准备将应用程序部署到生产环境之前，你可以使用以下命令来构建项目：

```bash
npm run build
```
这个命令会编译 TypeScript 代码，然后将编译后的 JavaScript文件以及静态资源拷贝到 dist 目录。

### 部署项目
要在生产环境中部署应用程序，请运行：
```bash
npm run deploy
```
这个命令会使用 pm2 启动 ecosystem.config.js 中定义的应用程序实例，并设置环境变量为生产环境。

### 重启应用
若需重启生产环境中的应用程序，使用以下命令：
```bash
npm run restart
```
这个命令会让 pm2 重新加载 ecosystem.config.js 中的配置。

### 停止应用
若需停止应用程序，可以使用：
```bash
npm run stop
```
该命令会停止 pm2 进程管理器中的所有应用程序实例。


## 友情链接

- Koa2 [Koa (koajs) -- 基于 Node.js 平台的下一代 web 开发框架 \| Koajs 中文文档](https://koa.bootcss.com/)
- Typescript [TypeScript 中文网 · TypeScript——JavaScript 的超集](https://www.tslang.cn/)
- routing-controllers [装饰器风格的路由声明](https://github.com/typestack/routing-controllers)

## 贡献
欢迎任何形式的贡献，如果您有建议或要报告 bug，请通过 issue 进行。



