/* ==========================================================================
   NA AREIA BAR & GALLERY COMPONENT
   ========================================================================== */

export function initBar() {
  // Gallery Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filterValue = btn.getAttribute('data-filter');

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        galleryCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.4s ease forwards';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Menu Modal Tabs
  const menuTabBtns = document.querySelectorAll('.menu-tab-btn');
  const menuPanes = document.querySelectorAll('.menu-pane');

  if (menuTabBtns.length) {
    menuTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetPaneId = btn.getAttribute('data-menutab');

        menuTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        menuPanes.forEach(pane => {
          if (pane.id === targetPaneId) {
            pane.classList.add('active');
          } else {
            pane.classList.remove('active');
          }
        });
      });
    });
  }
}
