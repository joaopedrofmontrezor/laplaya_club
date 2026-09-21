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

          

          <div class="bar-cta-center">
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
