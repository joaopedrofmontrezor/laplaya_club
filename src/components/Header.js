/* ==========================================================================
   HEADER & NAVIGATION COMPONENT
   ========================================================================== */

export function initHeader() {
  const header = document.getElementById('header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // Mobile Drawer Logic
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawerCloseBtn = document.getElementById('drawer-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (mobileDrawer) {
    const openDrawer = () => {
      mobileDrawer.classList.add('open');
      if (drawerBackdrop) drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      mobileDrawer.classList.remove('open');
      if (drawerBackdrop) drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    window.closeDrawer = closeDrawer;
  }
}
