---
title: 'Devoxx Day 2 recap'
description: "Loop engineering, dimming the lights in the software factory, and a novel built like a production system."
pubDate: 2026-10-06
draft: true
---

> **Note:** this is version 1 of this post. Claude wrote it, based on an interview with me. The ideas are mine, the text isn't, and you can tell. Getting an agent to write like me is a future experiment. When it works, I plan to replace this one with a better version, and keep this one online as the "before" picture.

Day 2 at Devoxx. Two big three-hour blocks on my schedule, one in the morning and one in the afternoon, and I was looking forward to both. In the end, the talk I enjoyed most was the forty-minute one in between.

## Loop Engineering

The morning was Guillaume Laforge and Wietse Venema on "loop engineering". A great overview of how we got here: from prompt engineering, to context engineering, to harness engineering, to loops, and finally to graphs of loops that people now call software factories.

They opened with a quote from Boris Cherny, who leads Claude Code at Anthropic:

> I don't prompt Claude anymore. I have loops that are running. My job is to write loops.

That one stuck, because it explained something I'd been wondering about. I never hit the token limit on my Claude subscription, while everyone around me seems to. Now I know why. I don't let my agents go. I start a session, read what comes back, steer, start the next one. I'm the loop. I'm orchestrating everything by hand.

Is that a problem? I'm not sure. Being in control feels like part of the job, and I don't think I'm ready to give that up yet. And judging by the hallway conversations, I'm not exactly behind. Someone told me today: "I think it's about time we start looking into this AI thing."

## Dimming the lights

The afternoon was Victor Rentea on "responsibly dimming the lights in the software factory": how to get from humans reviewing every line of AI-generated code to reviewing less of it, without losing your grip on the codebase.

I'd forgotten how chaotic Victor's talks are. I had trouble following. That might also be my fault: I'm trying a new way of taking notes this week, and it doesn't cope well with a speaker who jumps around. More on that in another post.

What I did take away was a list of small, practical things to try. Two of them are going to the top:

- **`grill-me`**, a skill where the agent interviews you about a plan, one question at a time, before writing any code. Every speaker mentioned it, and it targets exactly what I struggle with: getting the spec right before the agent starts building.
- **Wispr Flow**, voice dictation that works in any text field. Victor talks to his agent. Out loud. That seems neat.

## The lunch talk

In between, Raphael Semeteys gave a lunch talk about writing a novel. He's a software architect, and he built his techno-thriller *The Human Protocol* the way he'd build a production system. The world and its characters live in a repository of markdown files, "lore as code". An agent writes the chapters, one by one. Three different models review the result, each with its own role: one guards the lore, one analyses the drama, one edits the style. A build script turns it all into an e-book.

What I liked most is that this is the same agent workflow we use for software, pointed at something else entirely. I've been playing with that idea myself. I've wanted to write a novel for years, eventually, and this was very inspiring. I'm definitely buying the book.

He was also refreshingly honest about the part that doesn't work: "Advertising is what I suck at." Building the book was the easy part.

## Not knowing anything

I ended the day in a talk about Vidocq, a complete Java stack built by an agent against the official specs and test suites. I went because I knew nothing about it and wanted to see it in action. Sometimes not knowing anything is a great way to discover something new. Good talk, good demo. Not useful for me in practice, but that's fine.

## Tomorrow

Three things I'm taking home from today: I'm the loop, for now. `grill-me` goes on my list. And agent workflows aren't just for code.
