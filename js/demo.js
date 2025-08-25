export function initDemoModals() {
  const modal = document.getElementById('demo-modal');
  const closeBtn = document.getElementById('close-modal');
  const demoBtns = document.querySelectorAll('.demo-btn');

  demoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const systemId = btn.dataset.systemId;
      const mockData = {
        turnos: { title: 'Demo Turnos', desc: 'Interfaz para reservas.', image: 'https://via.placeholder.com/400?text=Demo+Turnos' },
        // Agregá para otros
      }[systemId] || { title: 'Demo', desc: 'Mockup.', image: 'https://via.placeholder.com/400' };

      document.getElementById('modal-title').textContent = mockData.title;
      document.getElementById('modal-desc').textContent = mockData.desc;
      document.getElementById('modal-image').src = mockData.image;
      modal.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });
}