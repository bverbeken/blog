---
title: 'Devoxx Day 1 recap'
description: "Spec-driven development, or the Rational Unified Process for AI. We've gone full circle."
pubDate: 2026-10-05
writtenBy: assisted
draft: true
---

First day of Devoxx. I didn't take notes in the morning or during the lunch talk. I only started taking notes with Claude later that afternoon. How I took notes the rest of the week is something I'll blog about later.

## Java, LEGO & AI

The lunch talk was Eddy Vos from Devoxx4Kids. They wanted kids to program LEGO SPIKE robots in Java, and SPIKE doesn't support Java. So they tried different ways to get Java code running on the robot, and demoed them. I didn't learn much, but it was an entertaining talk. 

## From Developer to Builder

The afternoon was a three-hour deep dive on spec-driven development by Simon Martinelli. His version is the "AI Unified Process": a nod to the Rational Unified Process, taking just the useful parts, for AI specifically. You write a vision, the AI derives requirements, use cases and an entity model, a human revises them, and the agent generates the code and tests from that.

It's the Rational Unified Process for AI, rebranded as spec-driven development. The idea is literally to write UML (use case diagrams, entity diagrams…) and give it to your LLM. We've gone full circle 😭

It's the first talk I've seen that says: back to waterfall, because now we have AI. Old ideas, promoted as if they're new. I left at the break.

To be fair, he does argue that English (or "specs") is the next level of abstraction. Which would mean we're at the start of the golden age of UML, which will finally shine as it was meant to. And I'm not even sure he's wrong. The floor is moving under my feet here. Luckily we have AI to generate the UML. Turtles all the way down… sorry, [Mermaids](https://mermaid.ai) all the way down 🧜

But I think he had a *flavor* of spec-driven development that I don't like. Waterfall was wrong for many reasons, and developer productivity (the time it takes to write code) was just one of them. The AI Unified Process doesn't answer the most important one: the client doesn't know what they need. If you spec everything up front, you assume you know what the requirements are. And you don't.

What still works for me: small steps, small PRs, iterative improvement. That's still (and always will be) important. I'm not sure there are other flavors of spec-driven development. If there aren't, then SDD is not for me.

## Day 1

A bit disappointed. Some ideas popped up that would get clearer on day 2 (and let's see the rest of the week), but nothing revolutionary.
