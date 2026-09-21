/* ==========================================================================
   ARENA & SPORTS COMPONENT
   ========================================================================== */

export function initArena() {
  const tabButtons = document.querySelectorAll('.sports-tabs-header .tab-btn');
  const tabPanes = document.querySelectorAll('.sports-tabs-content .tab-pane');

  if (!tabButtons.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab');

      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      tabPanes.forEach(pane => {
        if (pane.id === targetTabId) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });
}
