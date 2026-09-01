---
layout: book
title: Harmonyc-Khaos
last_modified_at: 2026-09-01
---

{% assign chapters = site.chapters | sort: "order" %}
{% for chapter in chapters %}
<section id="{{ chapter.slug }}" class="chapter">
{{ chapter.content }}
{% if chapter.slug == "chapter-5" %}
{% include spells/fire-bolt.html %}
{% include spells/project-weapon.html %}
{% endif %}
</section>
{% endfor %}