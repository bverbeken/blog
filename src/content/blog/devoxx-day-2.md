---
title: 'Devoxx Day 2 recap'
description: "Loop engineering, dimming the lights in the software factory, and a novel built like a production system."
pubDate: 2026-10-06
writtenBy: assisted
---

Day 2 at Devoxx. Two three-hour blocks on my schedule, and I was looking forward to both. My favourite? Again the forty-minute one in between.

## Loop Engineering

First up, Guillaume Laforge and Wietse Venema, both at Google, on "loop engineering". They opened with Boris Cherny, who leads Claude Code at Anthropic:

> I don't prompt Claude anymore. I have loops that are running. My job is to write loops.

Then came a great overview of the road so far. Prompt engineering became context engineering, then [harness engineering](https://en.wikipedia.org/wiki/Agent_harness), then loops. And finally graphs of loops, which people now call software factories.

Lots of talks mention token economics. That afternoon, Victor Rentea even said teams are starting to estimate in tokens. For real. So tokens matter. But I never even hit my limit. Partly because I'm on a subscription plan, but also, I think, because I use LLMs differently. Feels like I'm missing something, like I'm out of the, sorry, loop.

Turns out I'm not out of the loop. I *am* the loop. My agents never run on their own. I start a session, read what comes back, steer, then start a next one.

Is that a problem? Not sure. Being in control feels like part of the job, and I don't think I'm ready to give it up yet.

**What I took away**: experiment with building loops myself: a **maker** loop that does the work and a **checker** loop that verifies it (tests, linters, or another agent as grader).

## Lore as code

Over lunch, Raphael Semeteys told how he wrote a novel. Very enjoyable talk. By day he's a software architect, in his free time a [game master](https://en.wikipedia.org/wiki/Gamemaster), and to him that's the same job. "World-building *is* system architecture." So when he wrote his techno-thriller [*The Human Protocol*](https://the-human-protocol.com/), he built it like a production system.

Every character, every faction, every corner of his world is a markdown file in a repository. An agent writes the chapters from that lore. Once the book compiles, three different models go over it: one guards the lore, one looks at the drama, one edits the style. Whatever they find goes back into the lore, and the loop starts again.

The one part no loop fixed? Selling the book. "Advertising is what I suck at."
I disagree. Giving a talk at Devoxx is a *great* way to advertise, I'm tempted to buy the book.

## Dimming the lights

In the afternoon, Victor Rentea talked about "responsibly [dimming the lights](https://en.wikipedia.org/wiki/Lights_out_(manufacturing)) in the software factory". The fully dark version already exists: at some companies, nobody reads the code anymore. Victor's question was how to get there from reviewing every line, without losing your grip on the codebase.

I'd forgotten how chaotic Victor's talks are, and had trouble following. Might be my fault too. This week I'm [trying](/blog/taking-conference-notes-with-claude-code/) a new way of taking notes, and it doesn't cope well with a speaker who jumps around.

One slide got half the talk, though: the workflow his client companies are converging on. Refine the plan, let an adversarial agent review the code, then do a guided human review of 45 minutes max. The order matters. "Humans should never review AI-generated code before another AI reviews it." After ten good PRs in a row (about nine months in, for his clients), you can start reviewing only half the lines. Not a dark factory yet. A gray one.

For refining the plan, he uses [`grill-me`](https://github.com/mattpocock/skills), a skill where the agent interviews you about a plan, one question at a time, before writing any code. It had already come up that morning. And it targets exactly what I struggle with: getting the spec right first. Victor's tip: when it asks you to pick A or B, answer C. Your pick, *plus* the context you used to make it. You called the business and got numbers? Tell the agent. It wasn't on that call.

That fits another thing he said: approach an agent with humility. "Do not forget who you're talking to." Only give orders when you're 100% sure what needs to happen. Otherwise, ask.

And Victor *talks* to his agent. Out loud, with [Wispr Flow](https://wisprflow.ai), dictation that has learned his voice. Love that. It goes on my list, right below `grill-me`.

## Am I still the loop?

Looking back, both big talks started from the same problem: the human is the bottleneck. In the morning the answer was loops. But Guillaume and Wietse also warned about what happens when you step away from the keyboard. *Comprehension rot*, they called it: the growing gap between what's in the repository and what you actually understand. That's exactly why I keep steering by hand, and what Victor's whole talk tried to avoid while reviewing less.

So what's left for me when the loops run on their own? Wietse quoted Karpathy: give the model success criteria and watch it go. That's where experience counts, he added: you know what the criteria are, and "build the app" isn't one of them.

Next step: trying loops on simple PRs in my own projects. I'll still be the one who decides when they're done.
