/* ==========================================================================
   LOCATION & CONTACT COMPONENT
   ========================================================================== */

export function renderLocation() {
  return `
    <section class="section location-section" id="localizacao">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag"><i class="fa-solid fa-map-location-dot"></i> VENHA NOS VISITAR</span>
          <h2 class="section-title">Localização & Horários de Funcionamento</h2>
          <p class="section-subtitle">
            Estamos situados em uma localização privilegiada e de fácil acesso em Matão - SP.
          </p>
        </div>

        <div class="location-grid">
          <div class="location-info-card">
            <div class="info-block">
              <div class="info-icon"><i class="fa-solid fa-location-dot"></i></div>
              <div class="info-text">
                <h4>Endereço Completo</h4>
                <p>Av. Baldan, 3050 - Residencial das Acácias<br>Matão - SP | CEP 15990-536</p>
                <a href="https://maps.google.com/?q=Av.+Baldan,+3050+-+Residencial+das+Ac%C3%A1cias,+Mat%C3%A3o+-+SP" target="_blank" rel="noopener" class="maps-link">
                  <i class="fa-solid fa-diamond-turn-right"></i> Abrir no Google Maps
                </a>
              </div>
            </div>

            <div class="info-block">
              <div class="info-icon"><i class="fa-solid fa-clock"></i></div>
              <div class="info-text">
                <h4>Horários de Funcionamento</h4>
                <div class="hours-subgrid">
                  <div class="hour-item">
                    <strong>🎾 Arena / Aulas / Quadras:</strong>
                    <span>Segunda a Sexta: 07h às 22h30</span>
                    <span>Sábados e Domingos: 07h às 20h</span>
                  </div>
                  <div class="hour-item">
                    <strong>🍹 Na Areia Bar:</strong>
                    <span>Quarta a Sexta: 17h às 23h30</span>
                    <span>Sábado: 11h às 00h | Domingo: 11h às 21h</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="info-block">
              <div class="info-icon"><i class="fa-solid fa-hashtag"></i></div>
              <div class="info-text">
                <h4>Nossas Redes Sociais</h4>
                <div class="social-links-btns">
                  <a href="https://instagram.com/laplaya_club" target="_blank" rel="noopener" class="social-btn">
                    <i class="fa-brands fa-instagram"></i> @laplaya_club <small>(Esportes)</small>
                  </a>
                  <a href="https://instagram.com/_naareiabar" target="_blank" rel="noopener" class="social-btn social-btn-bar">
                    <i class="fa-brands fa-instagram"></i> @_naareiabar <small>(Bar & Gastronomia)</small>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="location-map-card">
            <div class="map-wrapper">
              <iframe 
                title="Mapa de Localização La Playa Club" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.8753232822837!2d-48.371239!3d-21.606789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8e19c0b1f1f1f%3A0x0!2zQXYuIEJhbGRhbiwgMzA1MCAtIFJlc2lkZW5jaWFsIGRhcyBBY8OhY2lhcywgTWF0w6NvIC0gU1AsIDE1OTkwLTUzNg!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
