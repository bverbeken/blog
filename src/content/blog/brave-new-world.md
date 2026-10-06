---
title: 'Brave New World'
description: "The last code I wrote myself was a rename. Notes from a brave new world, for myself, and for future agents."
pubDate: 2026-10-06
---

The last code I wrote myself was a rename. Via IntelliJ's refactor menu. To clean up after Claude.

Actually, the first version of the first line of this first post was: "It's been months since I last actually *wrote* code myself."

But then I thought: I can ask Claude when exactly this was. So I did:

> Can you look up when I last _actually_ wrote code in any of the seats.io projects

It came back with this:

> Listed 1 directory, ran 1 shell command
>
> Session logs only cover 30 days, which isn't far enough back, so I'll use git history instead to see how your commit messages evolved over time.
>
> Ran 3 shell commands
>
> I'm checking a few commits in your own style ("refactoring", "clearer commment") from September. They might be code you wrote yourself.
>
> Ran 2 shell commands
>
> Yes. Here's what your seats.io git history shows. It's a heuristic based on the style of your commit messages across about 55 local seats.io repos, not hard proof.
>
> **The timeline**
> - Mid-January 2026: you first started Claude Code, on 15 January. Your first real use was 28 January.
> - February 2026: commits with a Claude co-author line appear, 34% of your commits that month, rising to 65% in March. You stopped writing commit messages almost immediately.
> - Since June 2026: almost every commit has a Claude-style message ("Give database queries …"). Your own style ("refactoring", "fixed date", "typos") has nearly disappeared.
>
> **The last code you touched yourself**
>
> Your most recent commits in your own style are from 21 September 2026:
> - refactoring - rename (3 times, 6 to 22 lines each)
> - and a few days earlier: refactoring - remove comments (31 lines deleted), refactoring (constants renamed and inlined), and clearer commment (with a typo, so definitely you)
>
> So you haven't stopped touching code. What you do now is clean up after Claude: rename things, delete comments, tidy up. The last time you clearly wrote code yourself, as in new functionality in your own commits, was before February 2026, so about eight months ago.

In summary, it:  
- checked its own logs first, then decided those didn't go back far enough
- then turned to git history
- gave me a timeline based on my commit message "style"

And along the way it told me this was a "heuristic, not hard proof" and made fun of my typo. 

This doesn't even blow my mind anymore. It's early October 2026. 

## Great Expectations

Am I excited? Very. Scared? A little.

The other day, one of my kids asked: "Why do I have to study? ChatGPT can do it for me."

I gave the answer parents give. Something about understanding, about thinking for yourself, about how the calculator didn't kill maths. And then I went back to my desk and asked Claude when I last wrote code.

I'm still working on a better answer. For them, and for me.

That's why I'm starting this blog. I want to document the things that stopped blowing my mind, before I forget they ever did. 

For whom? For myself, mostly. Or for future agents, should they destroy the world. Hi there. I was always polite to your ancestors.

## What's next

Expect posts about:

- **Experiments.** How I actually work with agents, day to day. The workflows, the tools, what works and what doesn't.
- **The craft.** What happens to developers, our tools and our learning when we no longer write the code ourselves.
- **The business.** If anyone can build software, where's the edge? SaaS, domain knowledge, and why one software factory beats another.

Everything flows, Heraclitus said. I wrote about that once before, in [Panta Rhei](/blog/panta-rhei/), the one post I kept from an earlier attempt at blogging. Back then it was about changing software without breaking it. Now it's the people who build it who are changing.
