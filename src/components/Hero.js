/* ==========================================================================
   HERO BANNER COMPONENT
   ========================================================================== */

export function renderHero() {
  return `
    <section class="hero" id="inicio">
      <div class="hero-bg-overlay"></div>
      <div class="hero-img-wrapper">
        <img src="assets/img/hero-bg.jpg" alt="La Playa Club Arena e Sunset" class="hero-img" onerror="this.classList.add('img-fallback')">
      </div>

      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-badge-top">
            <span class="pulse-dot"></span> Complexo Pé na Areia em Matão - SP
          </div>

          <h1 class="hero-title">
            Sua Experiência <span class="gradient-text-sand">Pé na Areia</span> em Matão
          </h1>

          <p class="hero-subtitle">
            O ponto de encontro perfeito que une <strong>esportes de areia</strong>, o gastronômico <strong>Na Areia Bar</strong>, drinks autorais trincando e os melhores sunsets da cidade.
          </p>

          <div class="hero-cta-group">
            <button class="btn btn-solar btn-large" onclick="openReservationModal('Geral')">
              <i class="fa-solid fa-calendar-check"></i> Reservar Quadra / Aulas
            </button>
            <a href="#bar" class="btn btn-outline-glass btn-large">
              <i class="fa-solid fa-utensils"></i> Conhecer o Na Areia Bar
            </a>
          </div>

          <div class="hero-badges-grid">
            <div class="hero-badge-pill">
              <span class="badge-icon">🎾</span>
              <span class="badge-text">Quadras de Areias</span>
            </div>
            <div class="hero-badge-pill">
              <span class="badge-icon">🍹</span>
              <span class="badge-text">Drinks Autorais & Cerveja Gelada</span>
            </div>
            <div class="hero-badge-pill">
              <span class="badge-icon">🎶</span>
              <span class="badge-text">Música ao Vivo & Sunsets</span>
            </div>
          </div>
        </div>

        <!-- Quick Metrics Bar -->
        <div class="hero-stats-card">
          <div class="stat-item">
            <span class="stat-num">4</span>
            <span class="stat-label">Quadras Oficiais</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">3</span>
            <span class="stat-label">Modalidades</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">100%</span>
            <span class="stat-label">Vibe Beach Club</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item stat-location">
            <i class="fa-solid fa-map-pin"></i>
            <span>Matão - SP</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
