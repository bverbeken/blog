---
title: "I don't need a better to-do list"
description: "My to-do list can't hold a cap I'm waiting for, or a WhatsApp I still owe an answer to. What I need is one place that tells me whose move it is."
pubDate: 2026-11-06
writtenBy: assisted
---

I just checked off "waiting for delivery of a cap" in [Things](https://culturedcode.com/things/). The cap got delivered, so off it went.

Now look at that item for a second. It sits in an app for things to do, and nobody can do it: no amount of effort on my part makes a package arrive. I could pretend the real task is "verify that the cap got here", but then I'm just lying to my own to-do app. And when I checked it off, all I really did was note that a cap had arrived, which happened pretty much without me.

That item was there so I'd remember that the next move wasn't mine. Which got me thinking: I don't need a better to-do list, I need one place that tells me whose move it is.

## What a to-do list can't hold

In a recent [post](/blog/i-cut-my-finger-writing-this-post/), I called task-focused thinking flawed, and said I wanted to track threads (roughly: anything I've got going, whoever has the next move) instead. I think that was a bit too strong.

My to-do list isn't full of caps. There are a few in there, but most of what's on it still depends on me (or maybe that's just because I haven't learned to think in threads yet), and for that kind of work a list answers "what is next for me?" just fine. "Pay the invoice": I pay it, and it's over.

But then there's everything else: a to-do list holds what I *plan* to do, and nobody plans to wait. So anything that's waiting, apart from the odd cap I add by hand, stays in my head until it starts to nag me. Or until I forget about it. Did my bookkeeper ever answer that email? Did I answer that WhatsApp from my friend asking about a birthday party in two weeks? Sure, I could put that on my to-do list.

But then I have to *remember* to do that, every time a message comes in. And remembering is what I want my to-do list to do for me.

## Moves in every app

And that's only half of it, because the moves that belong to *me* are often on no list at all: probably a WhatsApp message I still owe an answer to, or an email. Those just sit in whatever app they came in.

Email is the one that works, sort of. An email I still need to deal with is an item in my inbox, and I clear that inbox by hand every day, so nothing stays there for long. In principle, because sometimes I forget.

WhatsApp is a lot worse. It's a stream, sorted by newest, so every new message pushes the other conversations further down. Which means the person who's been waiting on me the longest is exactly the one I can't see anymore.

Or even worse: Signal. I only use it with a few contacts, which means it only works if I remember to go look.

## The same mistake, with a machine

When I lose track of whose move it is on a WhatsApp message, someone waits a bit longer for an answer. But I've done the same thing with a machine.

I have a Mac mini running an agent that works through the cards on my board. One evening I asked what it was doing, and the answer was: nothing, there's no card to build. Which was odd, because my board looked full. Then I saw I had mistaken "Next Up" for "Ready". The agent only picks up cards that are Ready, and a card only gets there when I move it. So every one of those cards was waiting on me (!).

And with every agent I add, there's probably one more thing I think is waiting on a machine, while it's really waiting on me.

## One question, one place

"Whose move is it?" sounds like a different question from "what is next for me?", but I think they're the same one. If I know whose move it is on everything I've got going, whatever is left with my name on it *is* what's next.

So I'm building that one place, and it's called Gemba (that's a lean manufacturing word for the work floor, where you go to look at the real work): a command in my terminal that, today, reads my project boards, the PRs that are waiting for my review, and Things. It only reads, it doesn't change anything in those places, and it shows me what's waiting on me, then what's waiting on others, longest wait first, which is the exact opposite of what WhatsApp does.

It isn't done, and I'm only using it with a few sources so far (no WhatsApp, email or Signal yet, the three apps I just complained about lol), so I can't tell you whether it works the way I intend it to.

But one day, Gemba should know about the cap without me adding it. Until then, my next order still goes in the to-do app, and when it arrives I'll check it off, like I actually did something.
