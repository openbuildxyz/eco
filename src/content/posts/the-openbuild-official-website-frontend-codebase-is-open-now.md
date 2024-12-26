---
title: The OpenBuild Official Website Front-end Codebase Is Open Now!
description: Join OpenBuild, co-create Web3 open source!
pubDate: 'Dec 17 2024'
heroImage: '/eco/images/blog/the-openbuild-official-website-frontend-codebase-is-open-now/banner.jpg'
---

Since the end of August this year, when I deeply participated in contributing to OpenBuild, my first goal was to open source the front-end codebase of the OpenBuild official website - which is very much in line with OpenBuild's nature and development trajectory.

When I first took over this project, after reading through the code, I felt it was in a messy state. To achieve the goal, two key points had to be addressed:

1. Adjust the file organization and reference methods, and increase constraints to ensure maintainability during multi-person collaboration.
2. Write various collaboration-oriented documents and supplement other materials necessary for open source.

Using my trip to Thailand for Devcon as a time division point, I focused on the above two aspects before and after the time point.

Even though I haven't achieved perfection, even at 80%, I believe this does not hinder me from excitedly announcing here now:

**The front-end codebase of the OpenBuild official website is open source now!**

## Introduction

On the [OpenBuild official website](https://openbuild.xyz), developers can:

- Learn Web3 technology and professional knowledge for free;
- Participate in hackathons, meetups, and other offline events;
- Claim bounties;
- Build personal domain influence;
- ...

Although it is called the OpenBuild Official Website, don't be intimidated by the word Official Website, because it is a web application, not a static website.

Moreover, it is not a traditional web application, as some functions interact with smart contracts, making it a decentralized application, a.k.a. dApp.

As the official website of a Web3 developer community, the technology stack used in the codebase is naturally the conventional set based on React, Tailwind CSS, and Next.js in the field.

Experienced people will know that if such projects do not have good governance methods, the code can easily fall into a state of chaos.

After my involvement, using the [Anti-chaos](https://ntks.ourai.ws) theory and practice system formed by years of accumulated experience and thought, I have reduced the entropy significantly:

![The module relationship of the modularized directory structure division](/eco/images/blog/the-openbuild-official-website-frontend-codebase-is-open-now/modularized.png)

Mainly by adjusting the file organization and reference methods and adding constraints, the architecture hierarchy shown in the above figure is presented.

## Why Open Source?

As mentioned at the beginning, open sourcing the OpenBuild official website's front-end codebase is in line with OpenBuild's nature and development trajectory, because OpenBuild is an open source community:

> An open-source community bridging Web2 to Web3, connecting builders and businesses, and empowering them to succeed!
>
> ——<cite><a href="https://openbuildxyz.github.io/eco/guides/">OpenBuild Eco Introduction</a></cite>

As an open source community, it is natural to open source its own codebase, and on top of that, to carry out the open source spirit, helping participants to improve or benefit in (including but not limited to) the following aspects:

- People with little front-end development experience can understand what modern front-end development is like.
- People with some front-end engineering experience can understand how to manage and maintain complex front-end applications.
- Provide domestic front-end developers with the opportunity to practice with foreign mainstream technology stacks.
- Familiarize and adapt to remote asynchronous collaboration based on GitHub.
- Experience how open source projects operate.
- Create your own WhateverBuild.

Of course, open sourcing is also beneficial to OpenBuild itself, such as: allowing developers to participate in co-construction, which can truly meet the needs of developers and the community, so that developers can like to use it, love to use it more and more, and the OpenBuild official website can be said to be a product facing developers.

In fact, OpenBuild has long wanted to open source the codebase, but the early development team wanted to wait for a complete product to open source.

However, after the product came out, it was found that many unreasonable architectural designs and chaotic code were forced to emerge under many urgent needs (OpenBuild is developing rapidly), and even if it was open sourced, everyone would not be able to participate.

So, recently, a lot of time has been spent optimizing the architecture and code, while improving contribution documents and processes, which led to the delay.

In addition, I guess there is another reason - waiting for a good person to appear (please allow me to boast a little 😆).

## How to Participate in Co-construction?

If you are interested in participating in co-construction, it is what OpenBuild welcomes!

In theory, there are no hard requirements for those who participate in co-construction, but in order to collaborate as efficiently as possible, it is best to have some related knowledge and skills that you have already learned and mastered in advance.

After reading "[How to Participate in Project Co-construction](https://openbuildxyz.github.io/eco/guides/how-to-contribute/)", follow the general steps below to co-construction:

1. Read [the project-related documents](https://github.com/openbuildxyz/openbuild-frontend/blob/main/.github/guides/contributing/zh.md).
2. Go to [the specific GitHub Projects](https://github.com/orgs/openbuildxyz/projects/9/views/4) to pick up tasks that suit you.
3. Fork the specified branch in [the project repository](https://github.com/openbuildxyz/openbuild-frontend).
4. Develop task code locally.
5. Initiate a PR and mark the task as completed.

In addition to contributing code by doing tasks, you can also co-construct by submitting issues for problems, defects, or suggestions for improvement.

In the future, OpenBuild will issue corresponding achievements and benefits based on some indicators of project co-constructors.

## Conclusion

Whether for myself or for OpenBuild, open sourcing is an ideal, a passion, a mission!

Because of this, we exude the same smell, meet each other, and move forward together!
