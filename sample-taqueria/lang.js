(function () {
  var lang = 'en';
  var btn = document.getElementById('langBtn');
  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en]').forEach(function (el) { el.innerHTML = el.getAttribute('data-' + lang); });
    document.querySelectorAll('[data-ph-en]').forEach(function (el) { el.placeholder = el.getAttribute('data-ph-' + lang); });
    btn.textContent = lang === 'en' ? 'Español' : 'English';
    btn.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English');
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }
  btn.addEventListener('click', function () { lang = lang === 'en' ? 'es' : 'en'; apply(); });
  window.getLang = function () { return lang; };
  var header = document.querySelector('.header'), bar = document.querySelector('.mbar');
  window.addEventListener('scroll', function () {
    header && header.classList.toggle('is-scrolled', window.scrollY > 30);
    bar && bar.classList.toggle('is-on', window.scrollY > 400);
  }, { passive: true });
})();
