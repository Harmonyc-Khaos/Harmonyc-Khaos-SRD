---
layout: book
title: Harmonyc-Khaos
last_modified_at: 2026-08-04
---

{% assign chapters = site.chapters | sort: "order" %}
{% for chapter in chapters %}
<section id="{{ chapter.slug }}" class="chapter">

{{ chapter.content }}

</section>
{% endfor %}
