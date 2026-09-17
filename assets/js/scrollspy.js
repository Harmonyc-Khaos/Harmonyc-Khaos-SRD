document.addEventListener('DOMContentLoaded', function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc-sidebar nav a'));
  var sections = links
    .map(function (link) {
      var id = link.getAttribute('href').replace('#', '');
      return document.getElementById(id);
    })
    .filter(Boolean);

  function setActive() {
    var scrollPos = window.scrollY + 120;
    var current = sections[0];
    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) current = section;
    });
    links.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current.id);
    });
  }

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  // Mobile TOC toggle
  var toggleBtn = document.querySelector('.toc-toggle');
  var sidebar = document.querySelector('.toc-sidebar');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        sidebar.classList.remove('open');
      });
    });
  }

  // Print button
  var printBtn = document.querySelector('.print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', function () { window.print(); });
  }

  // Heart durability toggle
  document.querySelectorAll('.item-durability').forEach(function(el) {
    var hearts = el.textContent.trim().split('').filter(function(c) {
      return c === '♥';
    });
    if (!hearts.length) return;

    el.innerHTML = hearts.map(function() {
      return '<span class="heart">♥</span>';
    }).join('');

    el.querySelectorAll('.heart').forEach(function(heart) {
      heart.addEventListener('click', function() {
        heart.classList.toggle('heart-broken');
      });
    });
  });

  // Collapsible cards under h3 headings
  document.querySelectorAll('.chapter h3').forEach(function(heading) {
    var card = heading.nextElementSibling;
    while (card && card.tagName !== 'SECTION' && !card.classList.contains('spell-card') && !card.classList.contains('art-card')) {
      card = card.nextElementSibling;
    }
    if (!card) return;
    if (!card.classList.contains('spell-card') && !card.classList.contains('art-card')) return;

    heading.classList.add('collapsible-heading');
    card.classList.add('collapsible-card');
    card.style.display = 'none';

    heading.addEventListener('click', function() {
      var isOpen = card.style.display !== 'none';
      card.style.display = isOpen ? 'none' : 'block';
      heading.classList.toggle('collapsible-open', !isOpen);
    });
  });

});
