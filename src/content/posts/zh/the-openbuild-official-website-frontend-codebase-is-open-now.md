---
title: 期待已久的开源 OpenBuild 官网前端代码库来啦！
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Dec 17 2024'
heroImage: '/eco/images/blog/the-openbuild-official-website-frontend-codebase-is-open-now/banner.jpg'
---

自从今年 8 月末深度参与 OpenBuild 贡献以来，我给自己立下的第一个目标就是将 OpenBuild 官网前端代码库给开源了——这也很符合 OpenBuild 的「本性」与发展路线。

在刚接手这个项目时，通读代码后给我一种乱糟糟的感觉，要想达成目标得做到两个关键点：

1. 调整文件组织结构与引用方式，增加约束以在多人协作时能够保障可维护性；
2. 编写各类面向协作的文档并补充其他开源所必需的材料。

以到泰国去参加 Devcon 为时间分割点，分别在时间点的前后着重做上述两方面的事。

即便目前并没将它们做到完美，哪怕是 80%，但我认为这并不妨碍我现在激动地在此宣布——

**OpenBuild 官网前端代码库开源啦！**

## 项目简介

在 [OpenBuild 官网](https://openbuild.xyz)上，开发者可以：

- 免费学习 Web3 技术与职业相关知识；
- 参加一些 hackathon、meetup 等线下活动；
- 领取 bounty；
- 构建个人领域影响力；
- ……

虽说被称为「OpenBuild 官网」，但千万别被「官网」这词给唬住，因为它是个 Web 应用，而非静态网站。

并且，它也不是传统的 Web 应用，由于有些功能是要与智能合约进行交互，因而是个去中心化应用，即「dApp」。

作为 Web3 领域的开发者社区的官网，代码库所采用的技术栈自然是该领域约定俗成的以 React、Tailwind CSS 和 Next.js 为基础那一套。

有经验的人都会知道，这类项目的代码若没有很好的治理手段，很容易就会进入混沌状态。

在我参与后，利用多年经验积累与思考所形成的「[反混沌](https://ntks.ourai.ws)」理论与实践体系，已经将「熵」减低很多：

![「模块化」目录结构划分模式的模块关系](/eco/images/blog/the-openbuild-official-website-frontend-codebase-is-open-now/modularized.png)

主要是通过调整文件组织结构与引用方式并加以约束，呈现出如上图所示架构层次。

## 为何要开源？

正如开头所说，将 OpenBuild 官网前端代码库开源是符合 OpenBuild 的「本性」与发展路线的，因为 OpenBuild 是一个「开源社区」：

> An open-source community bridging Web2 to Web3, connecting builders and businesses, and empowering them to succeed!
>
> ——<cite><a href="https://openbuildxyz.github.io/eco/zh/guides/">OpenBuild 生态简介</a></cite>

生为开源社区，默认将自己的代码库进行开源就是自然而然的事情，在此之上贯彻开源精神，帮助参与者在（包括但不限于）以下方面得到提升或受益：

- 前端开发经验尚浅的人了解现代前端开发是怎样的；
- 有一定前端工程经验的人了解如何管理并维护复杂前端应用；
- 为国内前端开发者提供国外主流技术栈的实战机会；
- 熟悉并适应基于 GitHub 的远程异步协作；
- 切身体会开源项目是如何运作的；
- 做一个自己的「xxxBuild」。

当然，开源对 OpenBuild 自身也是有好处的，比如：让开发者参与共建，可以真正满足开发者和社区的需求，这样开发者才能喜欢使用，越来越爱用， OpenBuild 官网也才能说是面向开发者的产品。

其实 OpenBuild 很早就想将代码库开源了，但早期开发的小伙伴想等一个完整的产品出来再开源。

然而，等产品出来后发现在很多紧急需求下（OpenBuild 在快速地发展），被迫产生了很多不合理的架构设计和混乱代码，即使开源出来大家也没办法参与。

所以，最近花了很多时间在优化架构和代码上，同时完善贡献文档和流程，才导致姗姗来迟。

此外，我猜应该还有另一个原因——在等待一个良人出现（请允许我自夸一下😆）。

## 如何参与共建？

有兴趣参与共建的话，正是 OpenBuild 所欢迎的！

理论上对于参与共建的人是没有什么硬性要求的，但为了双方彼此可以尽量高效地协作，有些关联知识与技能最好是能够事先自己已经学习掌握。

读过《[参与项目共建](https://openbuildxyz.github.io/eco/zh/guides/how-to-contribute/)》后，按照以下大致步骤走完，即为「共建」：

1. 通读[项目相关文档](https://github.com/openbuildxyz/openbuild-frontend/blob/main/.github/guides/contributing/zh.md)；
2. 到[专门的 GitHub Projects](https://github.com/orgs/openbuildxyz/projects/9/views/4) 中领取适合自己的任务；
3. 去[项目仓库](https://github.com/openbuildxyz/openbuild-frontend) fork 指定分支；
4. 在本地开发任务代码；
5. 发起 PR 并将任务标记为「完成」。

除了上述借由做任务贡献代码之外，还可通过 issue 提交问题缺陷或改进建议等进行共建。

日后 OpenBuild 会根据项目共建者的一些指标发放相应的成就、福利。

鉴于当前处在项目开源的初期阶段，也许会有一些协作等方面的不完善，再就是为了帮助有兴趣的人尽快上手，所以建了个微信群以便能够及时交流，可加我微信 `fxxkol` 进入。

## 结语

无论是对于我本人，还是对于 OpenBuild 来说，开源是理想，是热爱，是使命！

正因如此，我们才会散发出相同的气味，才会遇见彼此并携手共进！
