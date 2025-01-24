---
title: One-month Summary of the Open Source of OpenBuild Official Website
description: The front-end project of OpenBuild official website has been open source for one month. This article briefly summarizes the situation in the past period and clearly states the tone of future development.
pubDate: 'Jan 22 2025'
heroImage: '/eco/images/blog/one-month-summary-of-the-open-source-of-openbuild-official-website/banner.jpg'
---

Hello everyone! 🙌

The OpenBuild official website frontend project has been open for over a month now. I'd like to take this opportunity to briefly summarize the progress made so far and clarify the direction for the future.

## Overview of Progress

Before the project code was officially released, we announced the upcoming open-source initiative in the community groups closely related to OpenBuild. Within a short time, more than a dozen people reached out to express their interest in contributing, and we quickly formed a dedicated interest group to facilitate communication.

Encouraged by the community's enthusiasm, we officially opened the project code just two days later! We also published an [official announcement](https://openbuildxyz.github.io/eco/posts/the-openbuild-official-website-frontend-codebase-is-open-now/), which attracted even more contributors. Now, our interest group has nearly 50 members!

Among them, 12 people (excluding myself) have made actual contributions, accounting for about 25% of the group. They are:

| GitHub Username | Number of Effective PRs | Number of Effective Issues |
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

To express our gratitude to those who participated in the project's early stages and to encourage their continued contributions, OpenBuild gifted each of them a special year-end package:

![OpenBuild Year-End Package](/eco/images/blog/one-month-summary-of-the-open-source-of-openbuild-official-website/openbuild-gift-bag.png)

## Positioning and Architecture

Some contributors have expressed that the tasks are too simple and they are eager to take on more challenging work. Others would like to delve deeper into the project but are currently lacking systematic documentation.

This section aims to provide some guidance:

### Organizational Operations

Although the OpenBuild official website frontend project was initially developed by the OpenBuild core team, with the release of the source code, the project has transitioned from being core-team-led to community-driven development.

This means that the OpenBuild core team will gradually step back to play the role of project coordinator and community order maintainer, while the community will organically manage the rest of the affairs:

- Developers can provide feedback on any ideas or issues they encounter while using the OpenBuild website in a dedicated section of the forum (coming soon);
- The core project building group (in collaboration with the OpenBuild core team) will assess the feasibility and break down feasible parts into atomic executable tasks for contributors to claim.

In this way, we can truly achieve "builders for builders" and "community for community"!

The stakeholders involved in the project's development process are illustrated in the following diagram:

![OpenBuild Official Website Stakeholders](/eco/images/blog/one-month-summary-of-the-open-source-of-openbuild-official-website/production-and-research-related-parties.png)

### Application Architecture

Unlike most open-source projects, the OpenBuild official website frontend project is part of a business application, which naturally creates two distinct paths for code contribution:

- Product and Business: Focusing on user experience (UI & UX) enhancements, business functionality implementation, and application loading and rendering performance;
- Technology and Engineering: Emphasizing developer experience (DX) improvements, software quality, and automation and intelligence in development.

In terms of positioning, the governance of the official website frontend project is based on the **"Anti-chaos" system**. This means that the project serves as an implementation case for the "Anti-chaos" system, and the code contribution forms will be:

- Product and Business: Writing code entirely within the official website frontend project, which may often be descriptive fragments rather than traditional code;
- Technology and Engineering: Writing adapter code within the official website frontend project, while the core code resides in the "Anti-chaos" system-related projects.

The overall architecture of the project will look like this:

![OpenBuild Official Website Architecture](/eco/images/blog/one-month-summary-of-the-open-source-of-openbuild-official-website/architecture.png)

The official website frontend project primarily relies on [Petals](https://petals-ui.github.io) and [Handie](https://handiejs.github.io) from the "Anti-chaos" system, both of which are part of the [OpenBuild ecosystem](https://openbuildxyz.github.io/eco/projects/):

![OpenBuild Ecosystem Projects](/eco/images/blog/one-month-summary-of-the-open-source-of-openbuild-official-website/petals-and-handie.png)

However, the current state of the project does not yet allow for the smooth integration of the "Anti-chaos" system. The architecture described above is the target state. Therefore, the focus moving forward will be to refactor the project based on the "Anti-chaos" philosophy.

## Growth and Advancement

If you read the above content carefully, you might catch a glimpse of the structure of the "OpenBuild" organization:

![OpenBuild Organizational Structure](/eco/images/blog/one-month-summary-of-the-open-source-of-openbuild-official-website/organizational-structure.png)

It is clear that "ordinary contributors" can be promoted to "core contributors", that is, to join the core group of the respective project. Outstanding performers may even apply to become "OpenBuild Contributors" and enjoy a range of exclusive benefits.

Here is further clarification regarding the official website frontend project:

### Contributor System

The official website is divided into user-side and management-side based on the different user groups. Ordinary contributors can only claim tasks on the user side, which mainly include:

- User experience (UI & UX) optimization and bug-fixing tasks, suitable for newcomers just starting to participate;
- Relatively simple business functionality and engineering optimization tasks, suitable for those who have become familiar with the project.

Core contributors in the core group, on the other hand, have a broader range of choices, including:

- More important and complex user-side business functionalities;
- Various levels of management-side business functionalities;
- Refactoring the application based on the "Anti-chaos" system;
- **Participating in the iteration of the "Anti-chaos" system itself, which is highly innovative and challenging**.

In addition, depending on the situation, some core group members may also take on decision-making and management responsibilities.

The basic requirement to become a core contributor is "Proof of Work" (PoW) — demonstrating oneself through the frequency and quality of contributions.

### Incentive Mechanism

Participating in the project will undoubtedly benefit your career development and help you realize your self-worth.

In addition, contributors to the official website frontend project, especially core group members, can enjoy:

- Claiming bounty tasks — tasks that meet specific conditions will come with rewards;
- The qualification to apply to become an "OpenBuild Contributors".

Within the "OpenBuild Contributors", there are multiple levels with varying degrees of benefits.
