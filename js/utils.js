export function initTilt(selector) {
  if (window.VanillaTilt) {
    document.querySelectorAll(selector).forEach(card => {
      VanillaTilt.init(card, { max: 15, speed: 400, glare: true, "max-glare": 0.2 });
    });
  }
}