# uni-job - 🚀 现代化企业招聘管理平台

> 基于 Vue3 + TypeScript + Uni-App 的跨端企业招聘系统 | 支持H5/小程序/App多端部署 | 现代化UI设计 | 高性能优化

[![Vue](https://img.shields.io/badge/Vue-3.4.21-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Uni-App](https://img.shields.io/badge/Uni--App-3.0.0-2B9939?style=flat-square&logo=vue.js)](https://uniapp.dcloud.net.cn/)
[![Vite](https://img.shields.io/badge/Vite-5.2.8-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

## 📖 项目简介 | Project Overview

uni-job 是一个现代化的企业招聘管理平台，采用 Vue3 + TypeScript + Uni-App 技术栈开发，支持一套代码多端部署。系统提供完整的招聘流程管理，包括职位发布、简历管理、企业展示等核心功能，致力于为企业提供高效便捷的招聘解决方案。

### 🎯 适用场景

- **企业招聘** - 完整的招聘流程管理
- **求职平台** - 多样化的求职服务
- **人才展示** - 专业的人才库管理
- **跨端部署** - 一套代码适配多个平台

## ✨ 核心特色 | Features

### 🎨 设计特色

- **🎨 现代化UI设计** - 简洁优雅的界面设计，专业视觉效果
- **📱 响应式布局** - 完美适配手机、平板、桌面等多种设备
- **🔄 跨端一致性** - H5/小程序/App多端UI体验统一
- **⚡ 流畅交互** - 优化的用户交互体验，操作简单直观

### 💼 功能模块

- **🏢 企业介绍** - 全面展示企业文化和基本信息
- **💼 职位管理** - 职位发布、搜索、筛选、详情展示
- **❓ Q&A系统** - 常见问题解答和求职指导
- **📰 资讯管理** - 企业动态和行业资讯发布

### ⚡ 技术优势

- **🔧 工程化配置** - 完善的代码规范和自动化流程
- **🎯 类型安全** - 全面的TypeScript类型检查
- **📦 组件化开发** - 高度复用的组件设计
- **🚀 性能优化** - 多种性能优化策略

## 🛠️ 技术栈 | Tech Stack

### 核心框架

```bash
# 前端框架
Vue3                    # 渐进式JavaScript框架
TypeScript             # 类型安全的JavaScript超集
Uni-App                # 跨端开发框架

# 构建工具
Vite                   # 下一代前端构建工具
pnpm                   # 高效的包管理器
```

### UI & 样式

```bash
# UI组件库
Wot Design Uni         # 专业的Uni-App UI组件库
UnoCSS                 # 即时原子化CSS引擎
Sass                   # CSS预处理器

# 动画效果
CSS3 Animations        # 原生CSS动画
Transition             # Vue3过渡动画
```

### 状态管理 & 数据

```bash
# 状态管理
Pinia                  # Vue3官方状态管理库
Pinia Persist          # 状态持久化插件

# 数据请求
@tanstack/vue-query    # 强大的数据获取库
Axios                  # HTTP请求库
```

### 开发工具

```bash
# 代码质量
ESLint                 # JavaScript代码检查
Prettier               # 代码格式化
StyleLint              # CSS代码检查
Husky                  # Git hooks管理

# 其他工具
dayjs                  # 轻量级日期库
z-paging               # 分页组件
qs                     # 查询字符串解析
```

## 🚀 快速开始 | Quick Start

### 环境要求

```bash
# 必需环境
Node.js >= 18.0.0      # JavaScript运行环境
pnpm >= 7.30.0         # 包管理器

# 开发工具 (推荐)
VS Code                # 代码编辑器
HBuilderX              # Uni-App官方IDE
```

### 🔧 安装与运行

#### 1. 克隆项目

```bash
# 使用 Git 克隆
git clone https://github.com/NextEraAbyss/uni-job.git
cd uni-job

# 或者下载压缩包解压
```

#### 2. 安装依赖

```bash
# 安装 pnpm (如果未安装)
npm install -g pnpm

# 安装项目依赖
pnpm install
```

#### 3. 启动开发服务器

```bash
# H5端开发
pnpm dev:h5          # 浏览器访问 http://localhost:3000

# 微信小程序开发
pnpm dev:mp-weixin   # 在微信开发者工具中打开 dist/dev/mp-weixin

# App端开发
pnpm dev:app         # 在HBuilderX中运行到手机或模拟器

# 其他平台
pnpm dev:mp-alipay   # 支付宝小程序
pnpm dev:mp-baidu    # 百度小程序
pnpm dev:mp-qq       # QQ小程序
```

#### 4. 构建生产版本

```bash
# H5端构建
pnpm build:h5

# 微信小程序构建
pnpm build:mp-weixin

# App端构建
pnpm build:app

# 所有平台构建
pnpm build
```

## 📁 项目结构 | Project Structure

```
uni-job/
├── src/                        # 源代码目录
│   ├── components/             # 公共组件
│   │   ├── common/             # 通用组件
│   │   └── business/           # 业务组件
│   ├── hooks/                  # 自定义钩子函数
│   │   ├── useRequest.ts       # 请求钩子
│   │   └── useStorage.ts       # 存储钩子
│   ├── interceptors/           # 请求拦截器
│   │   ├── request.ts          # 请求拦截
│   │   └── response.ts         # 响应拦截
│   ├── layouts/                # 布局组件
│   │   ├── default.vue         # 默认布局
│   │   └── tabbar.vue          # 底部导航布局
│   ├── pages/                  # 页面文件
│   │   ├── company/            # 企业介绍模块
│   │   ├── job/                # 招聘职位模块
│   │   ├── qa/                 # Q&A模块
│   │   └── news/               # 资讯模块
│   ├── service/                # API服务层
│   │   ├── api/                # 接口定义
│   │   ├── request/            # 请求配置
│   │   └── types/              # 类型定义
│   ├── static/                 # 静态资源
│   │   ├── images/             # 图片资源
│   │   ├── icons/              # 图标资源
│   │   └── tabbar/             # 底部导航图标
│   ├── store/                  # 状态管理
│   │   ├── modules/            # 状态模块
│   │   └── index.ts            # 状态入口
│   ├── style/                  # 样式文件
│   │   ├── common.scss         # 公共样式
│   │   ├── variables.scss      # 样式变量
│   │   └── mixins.scss         # 样式混入
│   ├── utils/                  # 工具函数
│   │   ├── common.ts           # 通用工具
│   │   ├── format.ts           # 格式化工具
│   │   └── validate.ts         # 验证工具
│   ├── types/                  # TypeScript类型定义
│   ├── App.vue                 # 应用根组件
│   ├── main.ts                 # 应用入口文件
│   ├── pages.json              # 页面配置
│   ├── manifest.json           # 应用配置
│   └── uni.scss                # 全局样式
├── env/                        # 环境变量配置
│   ├── .env.development        # 开发环境
│   ├── .env.test               # 测试环境
│   └── .env.production         # 生产环境
├── scripts/                    # 构建脚本
├── vite-plugins/               # Vite插件配置
├── .vscode/                    # VS Code配置
├── vite.config.ts              # Vite配置文件
├── tsconfig.json               # TypeScript配置
├── uno.config.ts               # UnoCSS配置
├── pages.config.ts             # 页面生成配置
├── manifest.config.ts          # 应用配置
├── package.json                # 项目依赖配置
└── README.md                   # 项目说明文档
```

## 🌟 核心功能展示 | Core Features

### 📱 跨端适配

| 平台            | 状态 | 特性                |
| --------------- | ---- | ------------------- |
| 🌐 H5           | ✅   | 响应式设计，SEO优化 |
| 📱 微信小程序   | ✅   | 原生体验，快速启动  |
| 📱 App          | ✅   | 高性能，离线缓存    |
| 📱 支付宝小程序 | ✅   | 生态集成            |
| 📱 其他小程序   | ✅   | 多平台覆盖          |

### 🎯 功能模块

#### 🏢 企业介绍模块

- 企业基本信息展示
- 企业文化宣传
- 发展历程介绍
- 联系方式展示

#### 💼 招聘职位模块

- 职位列表展示
- 智能搜索功能
- 多维度筛选
- 职位详情查看
- 在线申请功能

#### ❓ Q&A模块

- 常见问题解答
- 分类管理
- 搜索功能
- 求职指导

#### 📰 资讯模块

- 企业动态发布
- 行业资讯
- 图文混排
- 分享功能

## ⚡ 性能优化 | Performance

### 🚀 构建优化

- **代码分割** - 按需加载，减少首屏时间
- **Tree Shaking** - 自动移除未使用代码
- **资源压缩** - 图片、CSS、JS自动压缩
- **CDN加速** - 静态资源CDN部署

### 📦 运行时优化

- **组件懒加载** - 路由级别的代码分割
- **图片懒加载** - 可视区域内才加载图片
- **缓存策略** - 合理的缓存配置
- **防抖节流** - 优化用户交互性能

### 📊 性能指标

- ⚡ **首屏加载** < 1.5秒
- 🎯 **Lighthouse评分** 90+
- 📱 **多端一致性** 95%+
- 🔍 **SEO友好** (H5端)

## 🌐 浏览器兼容性 | Browser Compatibility

### ✅ H5端支持

| 浏览器     | 版本要求 | 支持状态    |
| ---------- | -------- | ----------- |
| Chrome     | 60+      | ✅ 完全支持 |
| Firefox    | 55+      | ✅ 完全支持 |
| Safari     | 12+      | ✅ 完全支持 |
| Edge       | 79+      | ✅ 完全支持 |
| 移动浏览器 | 现代版本 | ✅ 完全支持 |

### 📱 小程序平台

| 平台         | 基础库要求 | 支持状态    |
| ------------ | ---------- | ----------- |
| 微信小程序   | 2.0+       | ✅ 完全支持 |
| 支付宝小程序 | 1.0+       | ✅ 完全支持 |
| 百度小程序   | 3.0+       | ✅ 完全支持 |
| QQ小程序     | 1.0+       | ✅ 完全支持 |

## 🚀 部署指南 | Deployment

### 🌐 H5端部署

#### 静态托管服务

```bash
# Netlify
pnpm build:h5
# 上传 dist/build/h5 目录

# Vercel
vercel --prod

# GitHub Pages
# 推送到 gh-pages 分支
```

#### 服务器部署

```nginx
# Nginx配置示例
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/uni-job;
    index index.html;

    # 开启Gzip压缩
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;

    # 缓存策略
    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 单页应用路由支持
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 📱 小程序部署

#### 微信小程序

```bash
# 1. 构建小程序包
pnpm build:mp-weixin

# 2. 在微信开发者工具中打开 dist/build/mp-weixin
# 3. 点击上传，提交审核
```

#### 其他小程序平台

```bash
# 支付宝小程序
pnpm build:mp-alipay

# 百度小程序
pnpm build:mp-baidu

# QQ小程序
pnpm build:mp-qq
```

### 📱 App部署

```bash
# 1. 在 HBuilderX 中打开项目
# 2. 运行 -> 手机或模拟器 -> 选择设备
# 3. 发行 -> 原生App-云打包/本地打包
```

## 🔧 开发指南 | Development Guide

### 📝 代码规范

项目使用严格的代码规范确保代码质量：

```bash
# 代码检查
pnpm lint              # ESLint检查
pnpm lint:style        # StyleLint检查
pnpm type-check        # TypeScript类型检查

# 代码格式化
pnpm format            # Prettier格式化
```

### 🚀 提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
# 提交类型
feat:     # 新功能
fix:      # 修复bug
docs:     # 文档更新
style:    # 代码格式修改
refactor: # 代码重构
test:     # 测试相关
chore:    # 构建过程或辅助工具的变动

# 提交示例
git commit -m "feat: 添加职位搜索功能"
git commit -m "fix: 修复职位详情页面样式问题"
```

### 🎯 开发最佳实践

1. **组件设计** - 单一职责，高内聚低耦合
2. **类型安全** - 充分利用TypeScript类型系统
3. **性能优化** - 合理使用缓存和懒加载
4. **跨端兼容** - 注意不同平台的差异性处理
5. **代码质量** - 遵循ESLint和Prettier规范

## 🤝 贡献指南 | Contributing

欢迎参与项目贡献！您可以通过以下方式参与：

### 🐛 问题反馈

- 在 [Issues](https://github.com/NextEraAbyss/uni-job/issues) 中报告bug
- 提供详细的重现步骤和环境信息
- 附上相关的错误截图或日志

### 💡 功能建议

- 在 [Issues](https://github.com/NextEraAbyss/uni-job/issues) 中提出新功能建议
- 详细描述功能需求和使用场景
- 讨论实现方案的可行性

### 🔧 代码贡献

```bash
# 1. Fork 项目到您的账户
# 2. 创建功能分支
git checkout -b feature/your-feature-name

# 3. 进行开发并提交
git add .
git commit -m "feat: 添加新功能"

# 4. 推送到您的仓库
git push origin feature/your-feature-name

# 5. 创建 Pull Request
```

### 📖 文档贡献

- 完善项目文档
- 修正文档中的错误
- 翻译文档到其他语言

## 📊 项目统计 | Project Stats

- 🌟 **Stars**: 持续增长中
- 🍴 **Forks**: 欢迎Fork和贡献
- 📦 **Dependencies**: 保持最新稳定版本
- 🔄 **Updates**: 定期更新和维护
- 🐛 **Issues**: 积极响应和处理

## 📄 许可证 | License

本项目采用 [MIT License](./LICENSE) 开源协议。

```
MIT License

Copyright (c) 2024 uni-job

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🔗 相关链接 | Links

- 📚 **官方文档**: [Uni-App文档](https://uniapp.dcloud.net.cn/)
- 🛠️ **Vue3文档**: [Vue.js](https://vuejs.org/)
- 🎨 **UI组件**: [Wot Design Uni](https://wot-design-uni.gitee.io/guide/)
- 🔧 **构建工具**: [Vite](https://vitejs.dev/)
- 📦 **包管理**: [pnpm](https://pnpm.io/)

---

<div align="center">

**🌟 如果这个项目对您有帮助，请给个 Star 支持一下！**

<p>
  <img src="https://img.shields.io/github/stars/NextEraAbyss/uni-job?style=social" alt="GitHub stars">
  <img src="https://img.shields.io/github/forks/NextEraAbyss/uni-job?style=social" alt="GitHub forks">
</p>

_Built with ❤️ by [秦若宸](https://cv.wat.ink)_

**💼 展示您的全栈技术能力，成就技术人生！**

</div>
