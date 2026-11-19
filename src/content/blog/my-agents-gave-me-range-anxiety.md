---
title: 'My agents gave me range anxiety'
description: "Faber nearly burned through my weekly Claude limit. Measuring showed me what to cut, so it could run freely again."
pubDate: 2026-11-19
writtenBy: assisted
---

In a [previous post](/blog/devoxx-day-1/), I wrote "I pay for \[a Claude subscription\] too, and I've never hit my limit. Must be doing something wrong, and that'll probably be food for a future post."

This is that post. 

It's now a month later, and last week, I almost burned through the weekly token quota of my Claude subscription. How? 
By building Faber. 

## Faber?

Faber is a tool that I can invoke to have Claude work through issues on its own, from a card on a board to a merged pull request. I know these things exist, but I want to figure out things as I go, and building a tool is a perfect way to do that :) 

Faber is two things: 
* **the `/faber` skill**: I can give it an issue in any format (GitHub PR number, Linear issue ID, a link, anything really) and it does the next thing based on its status. That can be building, reviewing, opening a pull request, handling PR comments, merging, whatever.  If the issue is not clear yet, it lists open questions and writes the decisions into the issue. 
* **the Faber job**: a background job that runs on a Mac mini. It checks every board every minute, and runs `/faber` on one card when there is work. It implements cards, but also merges approved PRs, closes cards whose PR was merged and it unblocks cards that were waiting on other ones that got closed.

Faber works with multiple boards (Linear and Obsidian, with Trello next) and the status change workflow is configurable. That allows me to use it both in a team context (e.g. seats.io), where the workflow is decided on - and changes - as a collective decision, and on personal projects such as Faber itself, where I might use a different workflow (e.g. a PR doesn't require an external review). 

This is very useful to me, because it allows me to focus on decisions and review. And work goes on while I'm away: I simply have to make sure there's enough work in the pipeline, and I can go for a run AND build software at the same time. 

Life is beautiful. 

Except. It burns tokens, fast. 

## Range anxiety

Last Friday, I got to 97% of my weekly token allowance. 

There's a word for that feeling: range anxiety. It's the fear that your electric car's battery runs out before you reach the next charger. You keep looking at the percentage, and you stop driving where you want to go.

That's what I did. I held back on my work, to make sure I wouldn't hit the limit. The whole point of Faber is that work goes on without me. And there I was, being its brake. 

So it was optimization time.

## Measure before cutting

My first suspect was my instruction files: `CLAUDE.md`, `AGENTS.md`, all the rules I keep adding. Surely that adds up? So before cutting anything, I had Claude go through my session logs of the past 7 days.

Wrong suspect. My `CLAUDE.md` and `AGENTS.md` together cost about 2.5k tokens per session. A fresh session starts at about 61k, and most of that is tool definitions, not my rules.

The real cost turned out to be long sessions 🤦‍♂️. 
Every call sends the whole conversation again, so the longer a session runs, the more each step costs. An average call carried about 150k tokens of context.

And Faber made the longest sessions of all. One run took 237 million (!) input tokens. Every step of a build (implement, review, open the PR, get it ready for review) ran in one main session, and that session grew to 470k tokens. Every step paid for all the steps before it.

## What I cut

The biggest win was in Faber. Each step of a build now runs in its own subagent, with a fresh context. The main session only keeps track of where the build is. A normal build used to cost 35 to 50 million tokens. One of them went from 51.4M to 14.6M, and its main session peaked at 52k instead of 243k. Same work, less than a third of the tokens.

A few other smaller fixes in Faber helped too: on projects where I review the PRs myself, it turns out Faber reviewed every PR twice, so I cut that down to one review. And I made test runs only print the failures instead of the full test report. Whatever Claude reads stays in the context, and gets sent again with every step after it.

The next big win was not code, but a habit: `/clear` between tasks. But clearing means losing the context, so I built a small skill to make that easy, [`copy-next-prompt`](https://github.com/bverbeken/skills/tree/main/copy-next-prompt). It writes a prompt for the next step and puts it on my clipboard. I clear, paste, and go on. 

Finally, the small stuff. I turned off connectors I don't use often, and made MCP servers load only in the folder where I use them. Each of these saves a few thousand tokens per session. Nice, but that's not where the anxiety came from.

What I didn't change: Opus stays my default model. I looked for work I could give to smaller models, but most of my skills ask me questions or need the conversation. One skill moved to Sonnet.

## Running again

Faber runs freely again. I still look at the percentage, but I don't stop driving anymore.

My week resets on Friday at 15:00. On Tuesday evening, I was at 38%. About 60% of the week was gone, so I'm on pace to end around 63%.

And I'm not doing less. On Monday and Tuesday, I (well, Faber and I) made 193 commits. In the whole anxious week before, we made 166.

So, to answer my own question from Devoxx: I wasn't doing anything wrong. I just wasn't letting agents work on their own yet. Now I am, and now I know what that costs.
