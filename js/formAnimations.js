// === ANIMACIONES CONTACTO ===
function initFormAnimations() {
  // Fade-in para la sección de contacto
  gsap.from("#contacto h3", {
    scrollTrigger: { trigger: "#contacto", start: "top 80%" },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
  gsap.from("#contacto p", {
    scrollTrigger: { trigger: "#contacto", start: "top 80%" },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  });
  gsap.from(".contact-form", {
    scrollTrigger: { trigger: ".contact-form", start: "top 85%" },
    opacity: 0,
    scale: 0.95,
    duration: 1,
    delay: 0.6,
    ease: "power2.out"
  });

  // Animaciones en los campos al hacer focus
  const inputs = document.querySelectorAll(".contact-form input, .contact-form textarea");
  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      gsap.to(input, { scale: 1.02, duration: 0.2 });
    });
    input.addEventListener("blur", () => {
      gsap.to(input, { scale: 1, duration: 0.2 });
    });
  });

  // Botón de envío con efecto rebote al hacer hover
  const sendBtn = document.querySelector(".contact-form button");
  sendBtn.addEventListener("mouseenter", () => {
    gsap.to(sendBtn, { y: -3, duration: 0.2, ease: "power1.out" });
  });
  sendBtn.addEventListener("mouseleave", () => {
    gsap.to(sendBtn, { y: 0, duration: 0.2, ease: "power1.out" });
  });
}

export { initFormAnimations };