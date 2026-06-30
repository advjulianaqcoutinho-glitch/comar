/* ============================================================
   COMAR MÓVEIS — interações leves e elegantes
   Vanilla JS, sem dependências.
============================================================ */
(function () {
  'use strict';

  /* ---- Ano dinâmico no rodapé ---- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---- Header: sombra ao rolar ---- */
  var header = document.querySelector('.site-header');
  var onScroll = function () {
    if (window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Menu mobile ---- */
  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Fecha ao clicar em um link
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Reveal on scroll (fade-in + slide-up) ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          // pequeno stagger para blocos próximos
          var delay = Math.min(i * 60, 180);
          setTimeout(function () { entry.target.classList.add('visible'); }, delay);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: mostra tudo
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---- FAQ: mantém só um item aberto por vez ---- */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.removeAttribute('open');
        });
      }
    });
  });

  /* ---- Formulário de orçamento ---- */
  var form = document.getElementById('lead-form');
  var success = document.getElementById('form-success');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = form.nome.value.trim();
      var tel = form.telefone.value.trim();
      if (!nome || !tel) {
        // destaque simples dos campos obrigatórios
        if (!nome) form.nome.focus();
        else form.telefone.focus();
        return;
      }

      /* Monta mensagem e abre o WhatsApp da Comar.
         TODO: trocar 5500000000000 pelo número real. */
      var ambiente = form.ambiente.value || 'não informado';
      var msg = form.mensagem.value.trim();
      var texto = 'Olá! Sou ' + nome + '.' +
        '%0ATelefone: ' + tel +
        '%0AAmbiente: ' + ambiente +
        (msg ? '%0AProjeto: ' + encodeURIComponent(msg) : '') +
        '%0AGostaria de solicitar um orçamento de móveis planejados.';

      if (success) success.hidden = false;
      window.open('https://wa.me/5500000000000?text=' + texto, '_blank');
      form.reset();
    });
  }

  /* ---- Smooth scroll com compensação do header fixo ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();
