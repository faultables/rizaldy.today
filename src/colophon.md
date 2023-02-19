---
title: Colophon
layout: layouts/base
---

<div class="l-fragment">

## Website colophon

This page outlines technical details about this website. You can learn more about the purpose and content of the website, as well as the author on the [About](/) page.

This site was built using a boring [static site generator](https://www.11ty.dev), written in a boring [template](https://daringfireball.net/projects/markdown/) [language](https://shopify.github.io/liquid/) and served by boring [S3 compatible storage](https://min.io) behind a boring [reverse proxy](https://nginx.org/en/).

The three primary fonts I use are:

- [Sentient](https://www.fontshare.com/fonts/sentient) (serif)
- [Clash Display](https://www.fontshare.com/fonts/clash-display) (sans-serif)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (monospace)

Syntax highlighting is done by the great [Prism.js](https://prismjs.com/), statically generated of course.

Every request to this site is handled by [Bunny CDNs](https://bunny.net/?ref=2jpxrtyw72) exclusively in the APAC region for a reason. Nothing here is dynamic, so, maybe stop scanning `config.php`, `../../etc/passwd`, `.git` or something like that.

I'm experimenting with [stale-while-revalidate](https://www.rfc-editor.org/rfc/rfc5861) in Bunny by keeping track of the latest commit id under this site to maximize the cache-hit ratio, so apologies if you run into any inconsistency issues.

And please don't [poison the cache](https://portswigger.net/research/practical-web-cache-poisoning), I guess.

If you enjoy the site, consider to [giving me a word]({{ site.repo }}/discussions/new?category=show-and-tell) or [some love](https://github.com/sponsors/faultables) (my love language is words of affirmation and github sponsors btw).

---

_You may notice that I use [self-hosted](https://u.rizaldy.today), [open source privacy-focused web analytics](https://umami.is/). I respect your [DNT preferences](https://www.w3.org/TR/tracking-dnt/) (despite its [depreciation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT)) and it's likely that your uBlock Origin rule is blocking the `umami.js` just like mine._

_Otherwise, no personal information is stored unless you treat your user agent as your own unique identity (sorry)._

</div>
