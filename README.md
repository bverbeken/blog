# bver.be

My blog. Built with [Astro](https://astro.build), deployed to GitHub Pages on every push to `main`.

```sh
npm install
npm run dev      # http://localhost:4321, drafts included
npm run build    # output in dist/, drafts excluded
```

## Writing a post

Add `src/content/blog/<slug>.md`:

```md
---
title: 'Title'
description: 'One sentence, used for RSS and link previews.'
pubDate: 2026-10-06
draft: true   # remove to publish
---
```

The post lives at `https://bver.be/blog/<slug>/`.
