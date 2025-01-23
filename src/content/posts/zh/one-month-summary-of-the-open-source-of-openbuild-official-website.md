---
title: 参与 OpenBuild 官网共建——更卓有成效的前端职业成长途径
description: OpenBuild 官网前端项目开源一个月，略微总结下过去这段时间的概况，以及明确告知接下来发展的基调。
pubDate: 'Jan 22 2025'
heroImage: '/eco/images/blog/one-month-summary-of-the-open-source-of-openbuild-official-website/banner.jpg'
---

哈喽（颤音），大家好！🤟🏼

OpenBuild 官网前端项目从正式开放至今已然一个月有余，现在此略微总结下过去这段时间的概况，以及明确告知接下来发展的基调。

## 进展概况

在项目代码尚未正式开放之前，先去由 OpenBuild 所运营的强相关的群中预告即将开放源码的事情，很快就有十几、二十来个人联系我有共建意愿，遂将大家拉进专门的兴趣组群中便于沟通。

大家的热情感染了我，于是快马加鞭，两天后便使项目代码正式开放了！紧接着撰写并发布了一篇[官宣文章](https://openbuildxyz.github.io/eco/zh/posts/the-openbuild-official-website-frontend-codebase-is-open-now/)，又带来了一些对共建感兴趣的人，现在兴趣组群中已经有近 50 人了！

在这些人中，有 12 个人（不算我）真正做了贡献，占比约为 25%，他们分别是：

| GitHub 用户名 | 有效 PR 数 | 有效 issue 数 |
| --- | --- | --- |
| `Yolo-00` | 7 | 0 |
| `wiirhan` | 6 | 4 |
| `huzhengen` | 5 | 0 |
| `NeilYeTAT` | 4 | 2 |
| `missop` | 3 | 1 |
| `xiaoyaoke-v` | 3 | 0 |
| `Coooder-Crypto` | 3 | 0 |
| `Debbl` | 3 | 0 |
| `smallfu6` | 2 | 0 |
| `codersjj` | 1 | 1 |
| `UstinianMobius` | 1 | 0 |
| `MartinYeung5` | 1 | 0 |

为感谢在项目开源初期就参与共建的小伙伴儿们，并鼓励他们能在日后更加大放异彩，OpenBuild 给每人空投了一份年终大礼包：

![OpenBuild 年终大礼包](/eco/images/blog/one-month-summary-of-the-open-source-of-openbuild-official-website/openbuild-gift-bag.png)

## 定位与架构

有的小伙伴儿在参与几次贡献后觉得任务都太简单了，想要做些有挑战的；还有的想深入了解项目，但无奈于当前没有较为体系化的介绍资料。

这一章节就是要给各位提供点头绪——

### 组织运作

虽说 OpenBuild 官网前端项目是由 OpenBuild 核心团队发起并研发了初始版本，但随着源码的开放，该项目已从由 OpenBuild 核心团队主导转向社区驱动开发。

这就意味着，OpenBuild 核心团队会逐步退到幕后，尽量只起到项目协调者和社区秩序维护者的角色作用，其余事务靠社区自身有机地运作：

- 开发者在使用 OpenBuild 官网学习或做其他事的过程中，在产品层面有任何想法或发现问题，可在论坛（即将上线）的特定板块中反馈；
- 项目共建核心小组会（联合 OpenBuild 核心团队）评估可行性，将可行的部分拆分成原子化可执行任务给共建者们领取。

如此一来，就能做到「builders for builders」和「community for community」了！

最终，从需求提出到研发上线的相关方如下图所示：

![OpenBuild 官网产研相关方](/eco/images/blog/one-month-summary-of-the-open-source-of-openbuild-official-website/production-and-research-related-parties.png)

### 应用架构

不像其他大多数开源项目那样，OpenBuild 官网前端项目是一个业务应用（的一部分），因而天然就存在两条代码层面的贡献路径：

- 产品和业务——关注用户体验（UI & UX）提升、业务功能实现、应用加载与渲染性能等；
- 技术和工程——着重开发者体验（DX）提升、软件质量、研发自动化与智能化等。

从定位上讲，**官网前端项目的治理是要基于[「反混沌」体系](https://ouraiverse.feishu.cn/wiki/space/7460505157649596435)的**，也就是说，该项目是「反混沌」体系的实施案例，代码贡献形式实际上就会变成：

- 产品和业务——完全在官网前端项目中写代码，很可能是不那么像代码的描述性片段；
- 技术和工程——写适配代码是在官网前端项目中，而核心代码则在「反混沌」体系相关项目中。

届时，项目的整体架构大致为：

![OpenBuild 官网架构](/eco/images/blog/one-month-summary-of-the-open-source-of-openbuild-official-website/architecture.png)

官网前端项目主要依赖于「反混沌」体系下的 [Petals](https://petals-ui.github.io) 和 [Handie](https://handiejs.github.io)，它们均为 [OpenBuild 生态项目](https://openbuildxyz.github.io/eco/zh/projects/)：

![OpenBuild 生态项目](/eco/images/blog/one-month-summary-of-the-open-source-of-openbuild-official-website/petals-and-handie.png)

然而，当下项目的情形还无法顺利引入「反混沌」体系，可以认为上述架构是要达到的目标状态，因此**接下来的重点是基于「反混沌」思想去改造项目**，具体安排详见飞书文档《[OpenBuild 官网共建](https://a66c4lvoi8.feishu.cn/wiki/B8KnwlGSMi2wJmkUYEYctUkpndg)》。

## 成长与进阶

若仔细阅读上文内容，能够隐约见到「OpenBuild」这个「组织」的构成：

![OpenBuild 组织架构](/eco/images/blog/one-month-summary-of-the-open-source-of-openbuild-official-website/organizational-structure.png)

显而易见，「普通共建者」可以向「核心共建者」晋级，即进入相应项目的核心小组；表现突出者有机会申请成为「OpenBuild 贡献者」，享受一系列专属权益。

下面针对官网前端项目做进一步的说明——

### 共建者体系

官网这个产品根据使用群体的不同，目前分为用户侧和管理侧，普通共建者只能领取用户侧的任务，主要为：

- 用户体验（UI & UX）优化及 bug 修复类任务，适合刚开始参与的新手；
- 相对简单的业务功能和工程优化类任务，适合对项目已经有点上手的人。

而进入核心小组的核心共建者则有更大的选择范围，还包括：

- 更为重要、复杂的用户侧业务功能；
- 管理侧各种难易程度的业务功能；
- 基于「反混沌」体系的应用改造；
- **参与「反混沌」体系本身的迭代，极具创新性与挑战性**。

另外，视情况部分核心小组成员还可能会承担决策与管理等责任。

成为核心共建者最基本的条件就是「PoW」——通过贡献的活跃度与质量等证明自己。

### 激励机制

在参与项目共建的过程中，定会在职业发展方向上有所助益，也会一定程度地实现自我价值。

此外，官网前端项目共建者，尤其是核心小组成员，可享有：

- 领取赏金任务——符合特定条件的任务会附带赏金；
- 申请成为「OpenBuild 贡献者」的资格。

在「OpenBuild 贡献者」内部又分了多个等级，享受不同程度的权益。
