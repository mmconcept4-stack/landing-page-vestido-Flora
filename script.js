(() => {
  const config = window.MM_CONFIG;
  if (!config) return;

  const images = window.MM_IMAGES || {};
  document.querySelectorAll("[data-image]").forEach((image) => {
    const source = images[image.dataset.image];
    if (source) image.src = source;
  });

  document.querySelectorAll("[data-config]").forEach((element) => {
    const value = config[element.dataset.config];
    if (value) element.textContent = value;
  });

  const whatsappUrl = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsApp)}`;
  document.querySelectorAll("[data-whatsapp]").forEach((link) => { link.href = whatsappUrl; });
  document.querySelectorAll("[data-vip]").forEach((link) => { link.href = config.grupoVip; });
  document.querySelectorAll("[data-instagram]").forEach((link) => { link.href = config.instagram; });

  // Ponto único para Meta Pixel, Google Analytics e outros rastreadores futuros.
  document.addEventListener("click", (event) => {
    const cta = event.target.closest("[data-track]");
    if (!cta) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "cta_click", cta_name: cta.dataset.track });
    document.dispatchEvent(new CustomEvent("mm:cta-click", { detail: { name: cta.dataset.track } }));
  });

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  } else document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
})();
