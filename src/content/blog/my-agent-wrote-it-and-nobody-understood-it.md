---
title: 'My agent wrote it, and nobody understood it'
description: "My agent wrote a PR description, I skimmed it, and sent it out. Then a colleague asked me questions I couldn't answer."
pubDate: 2026-10-30
writtenBy: assisted
---

A couple of weeks ago, a colleague read the description of my PR (a fix for a race between two writers) and came back with questions I couldn't answer. 

That was embarrassing, because it was *my* PR. Well, my agent's description: Claude wrote it, I skimmed it (barely 🙄), and it looked fine. It listed every step of the race. What it didn't say were the two facts about the system that make those steps make sense, like "each server keeps its own copy in memory". My colleague didn't get it from the description. 

And when I sat down with Claude afterwards to figure out what went wrong, I told it: "I can't explain it either, which to me means I didn't _really_ understand it earlier." 

## Why I sent it

First things first. Why did I hit the button? 

Honestly, I got lazy. It's the same thing that happens with code. The agent proposes something, it looks reasonable, and accepting it is the easiest thing in the world.

The underlying problem is one that is encoded deeply in human nature: what Daniel Kahneman calls *cognitive ease*. When something reads easily, it feels familiar, and the brain takes "familiar" for "I know this".

I learned how that goes as a student. Lying on the couch, or in the park, reading a syllabus was one of my favourite ways to study. At least, it made me *believe* I was studying. In reality, that never worked for me; and I doubt it does for anyone. 

Reading tricks the mind into thinking "I know this", until you have to reproduce it. The only way I could was to walk around saying it out loud, or to write it down on scrap paper or a whiteboard. Actions that A) take time, which is what the brain needs to process ideas, and B) require me to produce the material from scratch, using just my brain.  

Skimming a PR description is like reading a syllabus on the couch. It's cognitive ease kicking in: it feels like you're doing work, but you're really only convincing yourself that you are.

Of course, I absolutely need to understand a change before I send it out for review. If I don't, I'm using my colleagues as guinea pigs for my PR, which is not only unprofessional, it's also not productive.

## What I changed

The first fix is what I call a **cold reader**: an agent that reads the description and deliberately knows nothing. It has no session, no code, no context. It runs by itself every time Claude drafts a PR, and again before the PR leaves draft. It tells me what changed and why, and lists every sentence it had to read twice and every fact it missed.

The view this naive cold reader agent gets is pretty close to what my colleagues know when they open a PR I sent them. They, too, read the description first, and without (much) context. 

The second fix is a **set of rules** Claude follows when it writes a PR description. A bug fix now states the system facts behind the bug, not only the steps that lead to it: exactly what my race description left out. There's a "Notes for reviewers" section with the questions a reviewer would ask. There are test steps, and a reminder to add screenshots.

Both these approaches combined work pretty well. I ran the cold reader on the original description, the one that started all this. It not only found both missing facts; the new description, written with the rules, was also more concise and easier to understand. 

I've been running this for a few weeks, and my descriptions are not (blatantly) wrong or long anymore. Progress 💪

## What's next

There's a catch, though. A cold reader checks the text, not me. I could still send out a perfectly clear description of a change I don't really understand. And so, even if the PR descriptions are now concise and understandable, *cognitive ease* is still lurking around the corner. 

So here's what I'll try next: when I tell Claude "this is good to go", it sometimes asks me 2 or 3 questions about the PR, and checks my answers. Like a pop quiz: I never know when it's coming, so I'd better understand every PR.

That's walking around saying it out loud again, like when I was studying. Except this time the questions come from Claude, before a colleague gets to ask them. And hopefully, this time, I'll know the answers.

*How this post was made: Claude interviewed me, and agents wrote and checked the first draft. I rewrote parts of it and edited the rest. The ideas and choices are mine. It's also a test: as my writing skill files improve, I want to see how much of the next first draft I still rewrite.*
