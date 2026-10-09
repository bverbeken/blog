---
title: 'What I took home from Devoxx 2026'
description: "One question followed me around Devoxx all week: what are others doing with all those tokens that I'm not? The answer, two camps, some small tricks and the best talks that had nothing to do with AI."
pubDate: 2026-10-09
writtenBy: assisted
---

All week, one question kept following me around Devoxx. On [Day 1](/blog/devoxx-day-1/), Tugdual Grall told us his son pays $200 a month for an AI subscription and burns through $8,000 to $10,000 worth of tokens. I've almost never hit the token limit. On [Day 2](/blog/devoxx-day-2/), talk after talk mentioned token economics and optimization, the importance of caching and context clearing, etc., and I felt like I was missing something. Then on Day 3, Nicolas Martignole (Devoxx France, Back Market) talked about a bill of $86,000 in [0 to 350 Engineers on Claude Code](https://www.youtube.com/watch?v=HzbNrEDZkYU).

What are they doing that I'm not? That turned out to be the biggest thing I took home. It wasn't the only one.

## Agentic Engineering

Turns out I didn't *actually* understand agents. At Devoxx last year, "agents" wasn't a clearly defined term, at least not for me.

What I'm doing is chatting: start a session, read what comes back, steer, start the next one. But an agent is something you let go.

On Day 2, Guillaume Laforge and Wietse Venema ([Loop Engineering, beyond prompt, context, and harness engineering](https://www.youtube.com/watch?v=A7ZIf8LkSvE)) opened with Boris Cherny, who leads Claude Code: "I don't prompt Claude anymore. I have loops that are running." Julien Dubois ([223 Pull Requests in 11 Days](https://www.youtube.com/watch?v=0A2jqCqSIjg)) built a developer UI for Spring Boot in eleven days: 223 merged PRs by a fleet of agents. In the evening he queues deep plans, and they run while he sleeps (!).

That's where the tokens go: into agents that keep working when nobody's watching. Token economics is a thing for them and not for me, because I never let go.

Main takeaway: I need to start looking at loops and agentic engineering, so I don't have to wait for Claude to finish anymore.

## Two camps

The AI-oriented talks this year, and they were the vast majority, fall into one of two camps. The first camp goes agents all the way.

"I didn't even open my IDE," said Julien Dubois. His advice: "Don't babysit one agent. Run ten." Martin Lippert asked whether the IDE is dead. His answer, in short, was yes. At least the IDE as we know it today.

The second camp still sees value in reading and understanding the code. Renato Cavalcanti ([Owning the Code You Didn't Type](https://www.youtube.com/watch?v=SQUrHzMie3o)) works in small phases, reviews and touches the code after each one, and had one message: "Don't outsource your brain." And when nobody bothers? Nicolas Martignole showed it: thirty seconds of scrolling through a 50-file PR, then "LGTM! 🚀".

Me? I sit in between. Some days I'm a manager of Claude Code sessions: four open, all reviewing or writing code, while I wait. (I even vibe-coded a little tool to keep track of them.)

Katie Clark and Simon Rohrer, in one of my favourite talks of the week ([The pizza party of the future](https://www.youtube.com/watch?v=Tc2RFLa0ip8)), didn't pick a camp. [Dark factories](https://en.wikipedia.org/wiki/Lights_out_(manufacturing)) work, they said, just not everywhere. (A dark factory is so automated that nobody needs to turn on the lights; in software, nobody reads the code anymore.)

For a conventional change that stays in one module, let spec and tests do the work. Something new that ripples through the system? Then people need to understand the code. And the team of the future? Still small enough to feed with a couple of pizzas: about five people.

Where this goes next, I don't know, and nobody does. One thing I don't believe in, though: waterfall.

On Day 1, Simon Martinelli ([From Developer to Builder](https://www.youtube.com/watch?v=z8lal-Yt_04)) wanted us to write UML again and feed it to the agent. I [didn't buy it](/blog/devoxx-day-1/), and neither did Katie Clark and Simon Rohrer: "we just need to get the spec 100% right" was one of the pins they tried to knock down. Feedback loops and short steps still matter: they solve *what* to build. Agents only solve the *how*.

## Small tricks

One skill kept coming up: [`grill-me`](https://github.com/mattpocock/skills), where the agent interviews you about a plan before writing any code. It targets what I struggle with: getting the spec right first. And from Renato, `/walk-through`: a change in reading order instead of a raw diff.

Two I've started using. Maker and checker agents in a loop: one does the work, the other checks it (my [Day 1](/blog/devoxx-day-1/) and [Day 2](/blog/devoxx-day-2/) posts were written that way). And [worktrees](https://code.claude.com/docs/en/common-workflows#run-parallel-sessions-with-worktrees), so several agents can share a repository without getting in each other's way.

I also learned that skills beat commands: the agent picks them up by itself, no `/` needed. So I started collecting mine in [bverbeken/skills](https://github.com/bverbeken/skills).

## Beyond AI

Some of the best talks had nothing to do with AI.

Dave Aronson introduced mutation testing ([Kill All Mutants!](https://www.youtube.com/watch?v=AsVt_dzTmN4)). Test coverage only proves your code ran, not that anything *checked* it. Change your code, he said, and see whether your tests notice. So I'll just try it, probably on seats.io's tough business logic.

What do you do when an API you depend on goes down? Ines Panker ([Their API Went Down. So Why Is My App on Fire?](https://www.youtube.com/watch?v=PGpKfdXZrpc)) had an answer: cache the rate limit, resume where you stopped, add circuit breakers. Interesting, because at seats.io we *are* that business-critical third-party API for our customers. Nice to see it from the other side.

Vincent Mayers ([rm -rf self-doubt](https://www.youtube.com/watch?v=Tfrt19d3TEA)) talked about impostor syndrome and left me with a question that might become a post of its own. Now that AI makes everyone *look* a lot smarter, is there more room for impostor syndrome? If you're not writing the code yourself, are you writing the code? You're still responsible for it. But it's a lot easier to say: "Oh, but I didn't do that. I couldn't actually do that."

## Between the talks

The exhibition floor felt different this year. A lot fewer booths, a lot less swag: the T-shirts were gone by Day 2. Fewer people too? Tickets weren't sold out this time. And fewer young people, though that might just be an impression.

## What's next?

I wasn't sure whether to go this year. Glad I did: I feel I learned a lot, even more than in other years.

So, what are others doing that I'm not? Letting go.

That's my next step: a first agent loop that runs without me watching. At seats.io we already detect flaky tests. I'd like an agent to pick one up, fix it and send a PR. Then there's mutation testing to try, and maybe that impostor post.

I'll still read that PR. For now.
