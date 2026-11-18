(function () {
  "use strict";

  var C = window.SITE_CONFIG;
  var $ = function (s, ctx) { return (ctx || document).querySelector(s); };
  var $$ = function (s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); };

  function whatsappLink(texto) {
    var url = "https://wa.me/" + C.whatsapp;
    return texto ? url + "?text=" + encodeURIComponent(texto) : url;
  }

  /* ---------- Links (WhatsApp, Instagram, Maps, telefone) ---------- */
  var msgPadrao = "Olá! Vim pelo site da " + C.nome + " e gostaria de agendar um horário.";

  $$("[data-whatsapp]").forEach(function (a) {
    a.href = whatsappLink(msgPadrao);
    a.target = "_blank";
    a.rel = "noopener";
  });
  $$("[data-whatsapp-schedule]").forEach(function (a) {
    a.href = "#agendar"; // rola até o formulário
  });
  $$("[data-instagram]").forEach(function (a) { a.href = C.instagram; });
  $$("[data-maps]").forEach(function (a) {
    a.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(C.nome + " " + C.endereco);
  });
  $$("[data-phone]").forEach(function (a) { a.href = "tel:+" + C.whatsapp; });

  var map = $("#mapFrame");
  if (map) {
    map.src = "https://www.google.com/maps?q=" + encodeURIComponent(C.endereco) + "&output=embed";
  }

  var year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Serviços ---------- */
  var grid = $("#servicesGrid");
  var select = $("#fService");
  C.servicos.forEach(function (s) {
    var card = document.createElement("article");
    card.className = "service reveal";
    card.innerHTML =
      '<span class="service__icon" aria-hidden="true">' + s.icone + "</span>" +
      "<h3></h3><p></p>";
    $("h3", card).textContent = s.nome;
    $("p", card).textContent = s.descricao;
    grid.appendChild(card);

    var opt = document.createElement("option");
    opt.value = s.nome;
    opt.textContent = s.nome;
    select.appendChild(opt);
  });

  /* ---------- Galeria + lightbox ---------- */
  var gal = $("#galleryGrid");
  var lb = $("#lightbox");
  var lbImg = $("#lightboxImg");

  C.galeria.forEach(function (f) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "gallery__item reveal";
    btn.setAttribute("aria-label", "Ampliar: " + f.alt);
    var img = document.createElement("img");
    img.src = f.src;
    img.alt = f.alt;
    img.loading = "lazy";
    btn.appendChild(img);
    btn.addEventListener("click", function () {
      lbImg.src = f.src;
      lbImg.alt = f.alt;
      lb.hidden = false;
      document.body.classList.add("no-scroll");
    });
    gal.appendChild(btn);
  });

  function closeLightbox() {
    lb.hidden = true;
    lbImg.src = "";
    document.body.classList.remove("no-scroll");
  }
  $("#lightboxClose").addEventListener("click", closeLightbox);
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lb.hidden) closeLightbox();
  });

  /* ---------- Menu mobile ---------- */
  var toggle = $("#menuToggle");
  var nav = $("#nav");
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }
  toggle.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });

  /* ---------- Formulário de agendamento -> WhatsApp ---------- */
  var form = $("#bookingForm");
  var err = $("#formError");
  var fDate = $("#fDate");

  // Não permite escolher datas passadas
  var hoje = new Date();
  fDate.min = hoje.getFullYear() + "-" +
    String(hoje.getMonth() + 1).padStart(2, "0") + "-" +
    String(hoje.getDate()).padStart(2, "0");

  function formatDate(iso) {
    var p = iso.split("-");
    return p[2] + "/" + p[1] + "/" + p[0];
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var nome = $("#fName").value.trim();
    var servico = $("#fService").value;
    var data = fDate.value;
    var hora = $("#fTime").value;

    if (!nome || !servico || !data || !hora) {
      err.textContent = "Preencha nome, serviço, dia e horário para continuar.";
      err.hidden = false;
      return;
    }
    err.hidden = true;

    var msg =
      "Olá! Gostaria de agendar um horário na " + C.nome + ".\n\n" +
      "*Nome:* " + nome + "\n" +
      "*Serviço:* " + servico + "\n" +
      "*Dia:* " + formatDate(data) + "\n" +
      "*Horário:* " + hora + "\n\n" +
      "Pode confirmar, por favor?";

    window.open(whatsappLink(msg), "_blank", "noopener");
  });

  /* ---------- Animação ao rolar ---------- */
  var items = $$(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Header com sombra ao rolar ---------- */
  var header = $(".header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  }, { passive: true });
})();
