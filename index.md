---
layout: book
title: Harmonyc-Khaos
---

{% assign chapters = site.chapters | sort: "order" %}
{% for chapter in chapters %}
<section id="{{ chapter.slug }}" class="chapter">

{{ chapter.content }}

</section>
{% endfor %}
