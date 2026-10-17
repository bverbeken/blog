---
title: 'I cut my finger writing this post'
description: "With 5 to 10 agents running at once, I can't keep my focus on one thing. So I stopped tracking tasks and started tracking threads."
pubDate: 2026-10-17
writtenBy: assisted
---

I click a terminal tab. I see a question for me:

```
The next arrow stays on until the last item is in view. Is that the bug, or the intended behavior?
```

The next arrow of *what*? I scroll up through the session. The agent finished twenty minutes ago, and it has been waiting for my answer ever since. Oh right, the flaky smoke test. What was that about again?

It takes me two minutes to get back in, two minutes I'll never get back. And whatever I was doing in my previous tab will soon need the same two-minute investigation.

## One thing at a time

I love being in the zone: one problem, a few hours, no interruptions. I've always tried to work in a way that gets me there. I kept a list of tasks, ordered by importance or by what blocks what. I'd pick the top one, finish it, then pick the next one. Avoid two at once: a task was either done, or parked because I was waiting on someone.

Some days it worked, some days it didn't (phone calls, errands, life). Context switches were the enemy, because every switch meant losing everything I had in my head and building it up again.

Then came LLM-assisted coding, and I can't just keep waiting for the agent anymore. Staring at a screen and just ... _wait_? No. So I start another session, and another one, and before I know it I'm managing 5 to 10 agents who work in parallel, each on their own little thing in their own little worktree.

The thing is, focus is sequential by nature, and so is my mind. And I want it to be: focus is the only way I know to *really* learn something, and that takes an attention span longer than a TikTok video. But I also value getting stuff done, and with agents that goes a lot faster in parallel.

Honestly, with agents I don't see a way to do both. So context switches are unavoidable, and the only thing I can do is make each one cheaper. Remember those two minutes for the flaky test? Getting that down to 10 seconds would be a win in my book.

The question is: how?

## Waiting for

My task list gives me the assurance that I'm not forgetting anything, because the list lives outside my brain. But once a task is done, it's gone. And every now and then, a little voice asks: wait, do I need to follow up on this?

Take an email to my bookkeeper. When I check off "email the bookkeeper", nothing on my list says I expect an answer. So I add a "follow up with bookkeeper" task, and schedule it for some arbitrary moment in time.

In [Getting Things Done](https://gettingthingsdone.com) terms, that's a "waiting for" item. But I add those by hand, so I could forget one, or get it wrong.

## Threads, not tasks

I think task-focused thinking is flawed, at least for people who, like me, can only do one thing at a time. What I need is a list of *threads*: things that are happening, and that are waiting on me, or on someone or something else. A thread is a series of tasks. Some of them are for me, some of them aren't.

That little voice from before ("do I need to follow up on this?") is a thread too. A task list only holds it if I remember to add a follow-up by hand, so it stays in my head, even after I've done my part. What I *want* is to get it out of my head and into an external system, and have it come back when it's my turn again.

An agent session works exactly the same way. I ask it something, it works for a while, it comes back with a question, I answer. The ball goes back and forth, just like with the bookkeeper.

And for this to work, a thread should be automatic: the list keeps itself up to date, from wherever the work happens, so threads become fire-and-forget. I don't want to add "follow up with the agent in tab 4" by hand. In my own setup, that already works for agent sessions. So do the PR reviews I'm waiting on, and the Slack messages I sent out and expect an answer to. Email, not yet.

## Fighting the symptoms

I can't solve the real problem: my brain can't do two things at the same time. I never could. I dictated part of this post while cooking, and cut my finger. I've always had things going on in parallel, so this isn't a new problem. Agents just give me a lot more of them.

So I fight the symptoms instead. Threads give me an external system I can rely on, because it keeps itself up to date, and a switch that costs seconds instead of minutes. One look tells me who has the ball, me or someone else, and what it's about: the PR number and title, or the Linear issue. The flaky test would have been a quick "ah, the arrow", an answer, and on to the next tab.

In my next post, I'll show the tools I use (and built) to keep track of my threads.
