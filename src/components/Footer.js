/* ==========================================================================
   FOOTER COMPONENT
   ========================================================================== */

export function renderFooter() {
  return `
    <footer class="footer">
      <div class="container footer-container">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="brand-logo">
              <img src="assets/img/logo.png" alt="La Playa Club" class="brand-logo-img">
              <div class="logo-text">
                <span class="logo-title">LA PLAYA CLUB</span>
                <span class="logo-subtitle">NA AREIA BAR</span>
              </div>
            </div>
            <p class="footer-desc">
              Seu complexo esportivo e gastronômico pé na areia em Matão - SP. Aulas de futevôlei, locações de quadras, drinks autorais, chope trincando e os melhores sunsets.
            </p>
          </div>

          <div class="footer-nav-col">
            <h5>Navegação</h5>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#arena">A Arena & Esportes</a></li>
              <li><a href="#bar">Na Areia Bar</a></li>
              <li><a href="#programacao">Programação & Sunsets</a></li>
              <li><a href="#localizacao">Localização</a></li>
            </ul>
          </div>

          <div class="footer-nav-col">
            <h5>Esportes</h5>
            <ul>
              <li><a href="javascript:void(0)" onclick="openReservationModal('Beach Tennis')">Beach Tennis</a></li>
              <li><a href="javascript:void(0)" onclick="openReservationModal('Futevôlei')">Futevôlei</a></li>
              <li><a href="javascript:void(0)" onclick="openReservationModal('Vôlei de Praia')">Vôlei de Praia</a></li>
              <li><a href="javascript:void(0)" onclick="openReservationModal('Day Use')">Day Use</a></li>
            </ul>
          </div>

          <div class="footer-nav-col">
            <h5>Contato Rápido</h5>
            <p><i class="fa-solid fa-location-dot"></i> Av. Baldan, 3050 - Matão/SP</p>
            <p><i class="fa-brands fa-whatsapp"></i> Atendimento via WhatsApp</p>
            <div class="footer-social-row">
              <a href="https://instagram.com/laplaya_club" target="_blank" aria-label="Instagram La Playa Club"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://instagram.com/_naareiabar" target="_blank" aria-label="Instagram Na Areia Bar"><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-legal">
            <span>&copy; <span id="current-year">2026</span> La Playa Club & Na Areia Bar. Todos os direitos reservados.</span>
            <span class="footer-cnpj">CNPJ: 47.479.182/0001-99 | La Playa Club LTDA</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
