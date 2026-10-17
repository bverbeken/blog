---
title: 'Taking conference notes with Claude Code'
description: "Pen and paper, then a Supernote: I never went back to those notes. At Devoxx I typed them, and let Claude do the structuring."
pubDate: 2026-10-08
writtenBy: assisted
---

I'm at Devoxx Belgium this week, and I've taken more notes than at any conference before. All of them typed on my laptop.

It's not my first attempt. Pen and paper came first, and I never looked at those notes again. Then a [Supernote](https://supernote.com), a digital notebook. Same result. Lately, I've started really using my [Obsidian](https://obsidian.md) vault as a second brain, with an LLM reading, checking and improving my notes.

So the next step was obvious: could typing notes live at a talk, with an LLM doing the structuring, give me conference notes I actually go back to?

### The setup

Claude Code runs on my laptop, with my Obsidian vault as the working directory. That's where I type during a talk. [Remote Control](https://code.claude.com/docs/en/remote-control) puts the same session on my phone, which becomes my camera.

That gives me two ways to add to a note:

- **Type short notes** on the laptop. One line at a time, typos and all. Claude tidies them up and appends them to the note for that talk.
- **Snap slides** with the phone. Claude saves the photo next to the note and writes out the key points as searchable text.

All of this lives in a Claude Code skill called `conference-notes`. It tells Claude what my notes look like. One note per talk, grouped per conference and per day. Two tricks make it work during a talk:

- When I type "I'm now in the talk of James Ward", Claude looks up the talk in the online schedule and fills in the title, speaker, room and a short summary. The note has a header before I've typed a word.
- Text in (brackets) is an instruction for Claude and stays out of the note. "(this is the same tool as in the previous talk, link them)" just works.

### Filling in the blanks

During the talk, the power is that I stop caring. Typos, names, half quotes. Claude fixes them all. A crooked photo of a slide gets straightened, cropped and read.

Vincent Mayers opened his talk on imposter syndrome with "I'm Vincent, and I'm an imposter." Someone had opened a Devoxx talk the same way before. Who? No idea, though I remembered being in the room. So I typed:

> he started the same way as the other imposter guy from a few years (or last year?) on devoxx. I'm xxx and I'm an imposter. (look it up on youtube)

Within a minute, my note said Dom Hodgson, *Embracing Imposter Syndrome*.

I don't have to catch every word or know every name. With pen and paper, "xxx" stays "xxx".

It's not perfect, though. In 2023, Dom gave that talk twice, at Devoxx UK and in Antwerp. Claude found the Devoxx UK recording and put London in my note. Having been in the room in Antwerp, I knew that was wrong. Claude didn't.

### What I got wrong

On day one, I snapped every slide and typed over it, copying whatever was on the screen. My notes were complete, but I wasn't really listening. I was a scanner with a phone. (The slides go online anyway, and the talk will probably end up on YouTube.)

The scanner has retired. Now I just listen and type whatever I find interesting. The phone only comes out for a slide worth keeping, like a diagram or a code sample.

### After the talk

Once the speaker leaves the stage, the power moves to the file itself. Plain Markdown, locked in no app.

- **Act on it.** When I type "FU" followed by something, Claude adds a follow-up todo right next to the context it came from. After the conference, I ask for all open follow-ups and get a todo list grouped by talk. Three days in, I have 17, from "try loops on simple PRs" to "buy *The Human Protocol*".
- **Spot patterns.** An LLM can read all my notes side by side. On day two, it found the same ideas (e.g. use [`/grill-me`](https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me)!) in almost every talk. That became the hook of my day two recap.
- **Write about it.** My Devoxx recaps started as these notes. Claude reads them, I decide what the story is, and it helps me write from there.
- **Remember it.** The notes go into my second brain. Next year, "what was that tool someone showed at Devoxx?" is just a search.

So, did it work? Yes, with a trade-off. Writing by hand forces you to take the time and think it through. On a keyboard, I type messy and Claude cleans up. In return I get more notes, and a file I actually go back to.

I built this skill for Devoxx, but I take notes at plenty of other moments too, so it might grow into a more general note-taking skill. For now, `conference-notes` [lives on GitHub](https://github.com/bverbeken/skills/tree/main/conference-notes).
