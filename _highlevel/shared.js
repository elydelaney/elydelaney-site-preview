<script>
/* Ely Delaney — Toolkit pages — shared behaviour.
   Paste ONCE into the website/funnel Settings → Tracking Code → BODY box
   (HighLevel's website builder only offers "Head" and "Body" — use Body).
   Keep the <script> tags below. Not a page section.
   Waits for DOMContentLoaded, so it's safe no matter where HighLevel injects it,
   and every lookup is guarded, so pages without the nav/footer just skip. */
(function () {
  function init() {
    var nav = document.getElementById('nav');
    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 40);
      }, { passive: true });
    }

    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        links.classList.toggle('open');
      });
      links.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') links.classList.remove('open');
      });
    }

    /* Optional active-nav highlight: set <body data-page="dropbox"> or window.RES_PAGE per page. */
    var current = document.body.getAttribute('data-page') || window.RES_PAGE;
    if (current) {
      document.querySelectorAll('#nav .nav-links a[data-page]').forEach(function (a) {
        if (a.getAttribute('data-page') === current) a.classList.add('on');
      });
    }

    var yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>
