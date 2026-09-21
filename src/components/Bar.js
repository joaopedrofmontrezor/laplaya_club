/* ==========================================================================
   NA AREIA BAR & GALLERY COMPONENT
   ========================================================================== */

export function renderBar() {
  return `
    <section class="section bar-section" id="bar">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag section-tag-bar"><i class="fa-solid fa-champagne-glasses"></i> @_NAAREIABAR</span>
          <h2 class="section-title">Na Areia Bar - Gastronomia & Coquetelaria</h2>
          <p class="section-subtitle">
            Após o treino ou para curtir o fim de tarde com estilo. Drinks autorais refrescantes, chope trincando de gelado e porções gourmet artesanais.
          </p>
        </div>

        <!-- Experience Highlights -->
        <div class="bar-features-grid">
          <div class="bar-feature-card">
            <div class="bar-icon"><i class="fa-solid fa-cocktail"></i></div>
            <h4>Drinks Autorais & Tropicais</h4>
            <p>Coquetelaria artesanal com frutas selecionadas, gin tônicas aromáticas, caipirinhas exclusivas e drinks autorais.</p>
          </div>

          <div class="bar-feature-card">
            <div class="bar-icon"><i class="fa-solid fa-beer-mug-empty"></i></div>
            <h4>Chope Trincando & Cervejas</h4>
            <p>Chope servido na caneca estalando de gelada e rótulos de cerveja bem congelados para matar a sede do calor de Matão.</p>
          </div>

          <div class="bar-feature-card">
            <div class="bar-icon"><i class="fa-solid fa-burger"></i></div>
            <h4>Porções & Petiscos Gourmet</h4>
            <p>Cardápio variado de petiscos gourmet, iscas de peixe crocantes, dadinhos de tapioca, filés e porções de praia artesanais.</p>
          </div>

          <div class="bar-feature-card">
            <div class="bar-icon"><i class="fa-solid fa-sun"></i></div>
            <h4>Ambiente Lounge Pé na Areia</h4>
            <p>Mesas e lounges com sombreiros, iluminação acolhedora e o clima descontraído dos melhores beach clubs do litoral.</p>
          </div>
        </div>

        <!-- Gallery Showcase Filterable Grid -->
        <div class="gallery-wrapper">
          <div class="gallery-filter-buttons">
            <button class="filter-btn active" data-filter="all">Todos</button>
            <button class="filter-btn" data-filter="drinks">Drinks Autorais</button>
            <button class="filter-btn" data-filter="chope">Chope & Cervejas</button>
            <button class="filter-btn" data-filter="pratos">Porções Gourmet</button>
            <button class="filter-btn" data-filter="vibe">Ambiente Bar</button>
          </div>

          <div class="gallery-grid" id="gallery-grid">
            <div class="gallery-card" data-category="drinks">
              <div class="gallery-img-box">
                <img src="assets/img/bar-drink-1.jpg" alt="Drink Autoral Na Areia Bar" class="gallery-img" onerror="this.classList.add('img-fallback-bar')">
                <div class="gallery-overlay">
                  <span class="gallery-category"><i class="fa-solid fa-martini-glass"></i> Drinks Autorais</span>
                  <h5>Coquetelaria Tropical</h5>
                  <p>Sabores refrescantes com frutas da estação</p>
                </div>
              </div>
            </div>

            <div class="gallery-card" data-category="chope">
              <div class="gallery-img-box">
                <img src="assets/img/bar-chope-1.jpg" alt="Chope Trincando Na Areia Bar" class="gallery-img" onerror="this.classList.add('img-fallback-bar')">
                <div class="gallery-overlay">
                  <span class="gallery-category"><i class="fa-solid fa-beer-mug-empty"></i> Chope Gelado</span>
                  <h5>Chope Trincando</h5>
                  <p>Servido na caneca congelada</p>
                </div>
              </div>
            </div>

            <div class="gallery-card" data-category="pratos">
              <div class="gallery-img-box">
                <img src="assets/img/bar-food-1.jpg" alt="Porção Gourmet Na Areia Bar" class="gallery-img" onerror="this.classList.add('img-fallback-bar')">
                <div class="gallery-overlay">
                  <span class="gallery-category"><i class="fa-solid fa-utensils"></i> Petiscos</span>
                  <h5>Porção Gourmet Pé na Areia</h5>
                  <p>Petiscos artesanais para compartilhar</p>
                </div>
              </div>
            </div>

            <div class="gallery-card" data-category="vibe">
              <div class="gallery-img-box">
                <img src="assets/img/bar-lounge-1.jpg" alt="Ambiente Na Areia Bar Lounge" class="gallery-img" onerror="this.classList.add('img-fallback-bar')">
                <div class="gallery-overlay">
                  <span class="gallery-category"><i class="fa-solid fa-umbrella-beach"></i> Lounge</span>
                  <h5>Vibe Beach Club</h5>
                  <p>Conforto e descontração pé na areia</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bar-cta-center">
            <button class="btn btn-sand btn-large" onclick="openMenuModal()">
              <i class="fa-solid fa-book-open"></i> Ver Destaques do Cardápio Digital
            </button>
            <a href="https://instagram.com/_naareiabar" target="_blank" rel="noopener" class="btn btn-outline-light btn-large">
              <i class="fa-brands fa-instagram"></i> Siga @_naareiabar no Instagram
            </a>
          </div>
        </div>

      </div>
    </section>
  `;
}

export function initBar() {
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
