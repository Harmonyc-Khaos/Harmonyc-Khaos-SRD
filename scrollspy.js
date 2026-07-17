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
});
