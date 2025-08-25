// === Animaciones Incodencia === //

// 1. Typewriter Effect para el Hero
function initTypewriter(elementId, words, speed = 100, pause = 2000) {
  const element = document.getElementById(elementId);
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    element.textContent = isDeleting ? currentWord.substring(0, letterIndex--) : currentWord.substring(0, letterIndex++);
    if (!isDeleting && letterIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(type, pause);
    } else if (isDeleting && letterIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      letterIndex = 0; // resetear índice
      setTimeout(type, 500);
    } else {
      setTimeout(type, speed);
    }
  }
  type();
}

// 2. VanillaTilt para tarjetas 3D
function initCardTilt(selector) {
  if (window.VanillaTilt) {
    document.querySelectorAll(selector).forEach(card => {
      VanillaTilt.init(card, { max: 15, speed: 400, glare: true, "max-glare": 0.2 });
    });
  }
}

// 3. Ripple Effect en botones
function initRippleEffect(selector) {
  document.querySelectorAll(selector).forEach(button => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      const rect = button.getBoundingClientRect();
      ripple.style.left = e.clientX - rect.left + "px";
      ripple.style.top = e.clientY - rect.top + "px";
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// 4. Botón “Magnet”
function initMagneticButtons(selector) {
  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener("mousemove", function (e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    btn.addEventListener("mouseleave", function () {
      btn.style.transform = "translate(0, 0)";
    });
  });
}

// 5. Cursor personalizado
function initCustomCursor() {
  const cursor = document.createElement("div");
  cursor.id = "custom-cursor";
  document.body.appendChild(cursor);
  document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
  // CSS requerido para cursor (ya en styles.css)
}

// 6. Scroll Reveal con GSAP
function initScrollAnimations() {
  if (window.gsap) {
    gsap.utils.toArray(".reveal").forEach(el => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
    });
  }
}

// 7. Partículas en Hero
function initParticles() {
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.6, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 120, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 1, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
      },
      retina_detect: true
    });
  }
}

// 8. Carrusel de Proyectos
function initProjectCarousel() {
  const carousel = document.getElementById("projects-carousel");
  const prevBtn = document.getElementById("prev-project");
  const nextBtn = document.getElementById("next-project");
  if (!carousel || !prevBtn || !nextBtn) return;
  const scrollStep = 400;

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollStep, behavior: "smooth" });
  });
  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollStep, behavior: "smooth" });
  });

  let isDown = false;
  let startX;
  let scrollLeft;
  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    carousel.classList.add("dragging");
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });
  carousel.addEventListener("mouseleave", () => isDown = false);
  carousel.addEventListener("mouseup", () => isDown = false);
  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });
}

// === Inicializar todas las animaciones ===
export function initAnimations() {
  initTypewriter("hero-text", ["Innovación", "Seguridad", "Confianza"], 100, 2000);
  initCardTilt(".tilt-card");
  initRippleEffect(".btn-gradient");
  initMagneticButtons(".btn-gradient");
  initCustomCursor();
  initScrollAnimations();
  initParticles();
  initProjectCarousel();
}