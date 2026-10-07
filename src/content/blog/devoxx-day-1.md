---
title: 'Devoxx Day 1 recap'
description: "GitHub Copilot, Java on LEGO robots, and spec-driven development. Plot twist: waterfall is back."
pubDate: 2026-10-05
writtenBy: assisted
---

First day of Devoxx. Three hours of GitHub Copilot in the morning, a lunch talk about Java on LEGO robots, and then another three hours, this time on spec-driven development.

That last one left me with a question. Is spec-driven development anything more than waterfall, now that there's AI?

## From Autocomplete to Autopilot

The morning was three hours of GitHub Copilot with Tugdual Grall, mostly live demos. Moderately salesy: it was a Copilot product tour, but it was practical and honest. A good way to start the week.

His son pays $200 a month for a subscription and burns through an estimated $8,000 to $10,000 worth of tokens. I pay for one too, and I've never hit my limit. Must be doing something wrong, and that'll probably be food for a future post. Then again, he also mentioned RTK, the token-saving tool I use. So I *must* be doing *something* right.

**Verdict**: 3/5.

**What I took away**: a skill called `/grill-me`. You'll hear about it again on Day 2.

## Java, LEGO & AI

Over lunch, Eddy Vos took the stage. Alongside his day job as engineering manager at NN Group, he volunteers as chair of Devoxx4Kids Netherlands, a non-profit that teaches coding and robotics to kids aged 8 to 14. Their plan? Get those kids programming LEGO SPIKE robots in Java.

One small problem. SPIKE doesn't do Java.

So they tried a bunch of ways to get Java running on the robot anyway, and demoed them. And yes, they found one.

**Verdict**: 4/5. Entertaining, and it's nice to have a few talks without AI in them too. Also, I have a soft spot for people who give back.

**What I took away**: for a lunch talk, that's enough. I'm there for the show, and to support people doing good.

## From Developer to Builder

The afternoon belonged to Simon Martinelli, who took a deep dive into spec-driven development (or his own version of it?). He calls it the "AI Unified Process", after the Rational Unified Process, keeping only the useful parts and aiming them at AI.

You start with a vision. From that, the AI derives requirements, use cases and an entity model. A human revises those, and then the agent generates the code and tests.

**Verdict**: 2/5. As a talk, it was fine. The angle and the content, I don't agree with.

Write UML (use case diagrams, entity diagrams…) and feed it to your LLM. That's *literally* the idea. Full circle 😭

Plot twist. Waterfall is back, this time with AI. He never used the word (who would?). But I was there, and what he described was waterfall.

The second half I [watched](https://www.youtube.com/watch?v=z8lal-Yt_04) on YouTube later, because I had to leave early.

To be fair, he does argue that English (or "specs") is the next level of abstraction. Which would make this the golden age of UML, finally shining the way it was always meant to. And luckily, AI can generate the UML for you. Turtles all the way down… sorry, [Mermaids](https://mermaid.ai) all the way down 🧜

**What I took away**: what he showed is a *flavor* of spec-driven development I don't like. Waterfall was wrong for many reasons, and I don't remember developer productivity being one of them. The real problem was that the client didn't know what they needed. They still don't, and the AI Unified Process has no answer to that, imho.

So what still works for me? Small steps, small PRs, iterative improvement. That's still important, and I think it always will be.

## Between the talks

Talk to people in the hallways and you see how wide the AI spectrum still is (and for the record, I'm not at the extreme end of it). Someone told me "I think it's about time we (at work) start to look at this AI thing". At the JetBrains booth, I talked to the people who make Kotlin and IntelliJ. Two things many people have declared dead since LLMs showed up.

They're not so sure. And not bothered at all.

I didn't take notes in the morning or during the lunch talk. Only later that afternoon did I start taking notes with Claude. How that went for the rest of the week is a blog post for later.

## Day 1

I'm a bit disappointed so far. But it's only been the first day. Let's see what the rest of the week brings.

So, is spec-driven development more than waterfall with AI? Honestly, I'm not sure other flavors of it even exist. If this is what SDD is about, I'm out. Then again, if it's just one flavor, I'll have to taste a few more.

My next step on SDD, for now? Nothing. I'll keep working feature by feature, and automate more of it.
