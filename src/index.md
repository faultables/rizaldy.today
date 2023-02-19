---
title: About
layout: layouts/base
---

{% render "fragments/about.md", site: site, contacts: contacts, employer: employer %}

---

{% render "fragments/writings.md", posts: collections.posts %}

---

{% render "fragments/services.md", services: collections.services, consulting: consulting %}
