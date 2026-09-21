/* ==========================================================================
   HEADER & NAVIGATION COMPONENT
   ========================================================================== */

export function renderHeader() {
  return `
    <header class="header" id="header">
      <div class="container header-container">
        <a href="#inicio" class="brand-logo" id="brand-logo-link">
          <img src="assets/img/logo.png" alt="La Playa Club Logotipo Oficial" class="brand-logo-img">
          <div class="logo-text">
            <span class="logo-title">LA PLAYA CLUB</span>
            <span class="logo-subtitle"><i class="fa-solid fa-cocktail"></i> NA AREIA BAR</span>
          </div>
        </a>

        <!-- Desktop Nav -->
        <nav class="nav-menu" id="nav-menu">
          <ul class="nav-list">
            <li class="nav-item"><a href="#inicio" class="nav-link active">Início</a></li>
            <li class="nav-item"><a href="#arena" class="nav-link">A Arena & Esportes</a></li>
            <li class="nav-item"><a href="#bar" class="nav-link">Na Areia Bar</a></li>
            <li class="nav-item"><a href="#programacao" class="nav-link">Programação</a></li>
            <li class="nav-item"><a href="#localizacao" class="nav-link">Localização</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <button class="btn btn-primary btn-header" id="btn-header-cta" onclick="openReservationModal('Geral')">
            <i class="fa-brands fa-whatsapp"></i> Agendar / Reservar Quadra
          </button>

          <button class="hamburger-btn" id="hamburger-btn" aria-label="Abrir Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer Menu -->
    <div class="mobile-drawer" id="mobile-drawer">
      <div class="drawer-header">
        <div class="brand-logo">
          <img src="assets/img/logo.png" alt="La Playa Club Logo" class="brand-logo-img">
          <div class="logo-text">
            <span class="logo-title">LA PLAYA CLUB</span>
            <span class="logo-subtitle">NA AREIA BAR</span>
          </div>
        </div>
        <button class="drawer-close" id="drawer-close" aria-label="Fechar Menu">&times;</button>
      </div>
      <ul class="drawer-list">
        <li><a href="#inicio" class="drawer-link"><i class="fa-solid fa-house"></i> Início</a></li>
        <li><a href="#arena" class="drawer-link"><i class="fa-solid fa-volleyball"></i> A Arena & Esportes</a></li>
        <li><a href="#bar" class="drawer-link"><i class="fa-solid fa-martini-glass-citrus"></i> Na Areia Bar</a></li>
        <li><a href="#programacao" class="drawer-link"><i class="fa-solid fa-calendar-days"></i> Programação & Sunsets</a></li>
        <li><a href="#localizacao" class="drawer-link"><i class="fa-solid fa-location-dot"></i> Localização & Contato</a></li>
      </ul>
      <div class="drawer-footer">
        <button class="btn btn-primary btn-full" onclick="openReservationModal('Geral'); closeDrawer();">
          <i class="fa-brands fa-whatsapp"></i> Agendar pelo WhatsApp
        </button>
        <div class="drawer-socials">
          <a href="https://instagram.com/laplaya_club" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i> @laplaya_club</a>
          <a href="https://instagram.com/_naareiabar" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i> @_naareiabar</a>
        </div>
      </div>
    </div>
    <div class="drawer-backdrop" id="drawer-backdrop"></div>
  `;
}

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
