/* ==========================================================================
   ARENA & SPORTS COMPONENT
   ========================================================================== */

export function renderArena() {
  return `
    <section class="section arena-section" id="arena">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag"><img src="assets/img/logo.png" alt="Logo" class="section-logo-icon"> LA PLAYA CLUB</span>
          <h2 class="section-title">A Arena & Esportes de Areia</h2>
          <p class="section-subtitle">
            Evolua no esporte, jogue com amigos e sinta a energia da areia de alta qualidade com infraestrutura completa e iluminação noturna profissional.
          </p>
        </div>

        <!-- Sports Modal Tabs Switcher -->
        <div class="sports-tabs-wrapper">
          <div class="sports-tabs-header">
            <button class="tab-btn active" data-tab="tab-beachtennis">
              <i class="fa-solid fa-table-tennis-paddle-ball"></i> Beach Tennis
            </button>
            <button class="tab-btn" data-tab="tab-futevolei">
              <i class="fa-solid fa-soccer-ball"></i> Futevôlei
            </button>
            <button class="tab-btn" data-tab="tab-voleipraia">
              <i class="fa-solid fa-volleyball"></i> Vôlei de Praia
            </button>
          </div>

          <div class="sports-tabs-content">
            <!-- Tab 1: Beach Tennis -->
            <div class="tab-pane active" id="tab-beachtennis">
              <div class="tab-grid">
                <div class="tab-info">
                  <span class="tab-badge">Locação & Day Use</span>
                  <h3>Beach Tennis</h3>
                  <p>
                    O esporte que é a cara do verão! Reúna seus amigos para partidas dinâmicas e divertidas em quadras com areia tratada e estrutura completa.
                  </p>
                  <ul class="tab-checklist">
                    <li><i class="fa-solid fa-circle-check"></i> Locação avulsa por hora para você e seu grupo jogar.</li>
                    <li><i class="fa-solid fa-circle-check"></i> Opção de Day Use para curtir a estrutura o dia todo.</li>
                    <li><i class="fa-solid fa-circle-check"></i> Quadras iluminadas para partidas diurnas e noturnas.</li>
                  </ul>
                  <button class="btn btn-primary" onclick="openReservationModal('Beach Tennis')">
                    <i class="fa-brands fa-whatsapp"></i> Reservar Quadra ou Day Use (Beach Tennis)
                  </button>
                </div>
                <div class="tab-image-box">
                  <img src="assets/img/beach-tennis.jpg" alt="Quadra de Beach Tennis La Playa Club" class="tab-img" onerror="this.classList.add('img-fallback-sport')">
                  <div class="img-overlay-card">
                    <i class="fa-solid fa-clock"></i> Locação Avulsa & Day Use
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab 2: Futevôlei -->
            <div class="tab-pane" id="tab-futevolei">
              <div class="tab-grid">
                <div class="tab-info">
                  <span class="tab-badge">Aulas Exclusivas & Locação</span>
                  <h3>Futevôlei</h3>
                  <p>
                    A essência do esporte brasileiro na areia! Oferecemos <strong>Aulas Exclusivas com professores qualificados</strong> para todos os níveis, além de locação avulsa de quadras e Day Use.
                  </p>
                  <ul class="tab-checklist">
                    <li><i class="fa-solid fa-circle-check"></i> <strong>Aulas com Professores</strong> (Do iniciante ao avançado).</li>
                    <li><i class="fa-solid fa-circle-check"></i> Treinos de passe, recepção, ataque e condicionamento físico.</li>
                    <li><i class="fa-solid fa-circle-check"></i> Locação avulsa de quadras e Day Use com a galera.</li>
                  </ul>
                  <button class="btn btn-primary" onclick="openReservationModal('Futevôlei')">
                    <i class="fa-brands fa-whatsapp"></i> Agendar Aula Experimental de Futevôlei
                  </button>
                </div>
                <div class="tab-image-box">
                  <img src="assets/img/futevolei.jpg" alt="Futevôlei na Areia La Playa Club" class="tab-img" onerror="this.classList.add('img-fallback-sport')">
                  <div class="img-overlay-card">
                    <i class="fa-solid fa-fire"></i> Aulas Diárias + Locação
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab 3: Vôlei de Praia -->
            <div class="tab-pane" id="tab-voleipraia">
              <div class="tab-grid">
                <div class="tab-info">
                  <span class="tab-badge">Locação & Day Use</span>
                  <h3>Vôlei de Praia</h3>
                  <p>
                    Saque, levantamento e ataques no sol ou sob os refletores noturnos! O clássico vôlei de praia para duplas ou quartetos com rede ajustável.
                  </p>
                  <ul class="tab-checklist">
                    <li><i class="fa-solid fa-circle-check"></i> Locação avulsa de quadras oficiais por hora.</li>
                    <li><i class="fa-solid fa-circle-check"></i> Day Use para juntar a turma e jogar o dia inteiro.</li>
                    <li><i class="fa-solid fa-circle-check"></i> Iluminação noturna de alta precisão.</li>
                  </ul>
                  <button class="btn btn-primary" onclick="openReservationModal('Vôlei de Praia')">
                    <i class="fa-brands fa-whatsapp"></i> Reservar Quadra ou Day Use (Vôlei de Praia)
                  </button>
                </div>
                <div class="tab-image-box">
                  <img src="assets/img/volei-praia.jpg" alt="Vôlei de Praia La Playa Club" class="tab-img" onerror="this.classList.add('img-fallback-sport')">
                  <div class="img-overlay-card">
                    <i class="fa-solid fa-sun"></i> Locação Avulsa & Day Use
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Informative Feature Cards -->
        <div class="arena-cards-grid">
          <div class="arena-card">
            <div class="arena-card-icon">
              <i class="fa-solid fa-user-graduate"></i>
            </div>
            <h3>Aulas de Futevôlei</h3>
            <p>Professores dedicados para te orientar desde os primeiros toques na bola até técnicas avançadas de jogo.</p>
            <a href="javascript:void(0)" onclick="openReservationModal('Futevôlei')" class="card-link">Agendar Aula Experimental de Futevôlei <i class="fa-solid fa-arrow-right"></i></a>
          </div>

          <div class="arena-card">
            <div class="arena-card-icon">
              <i class="fa-solid fa-clock"></i>
            </div>
            <h3>Locação Avulsa de Quadras</h3>
            <p>Monte o seu jogo de Beach Tennis, Futevôlei ou Vôlei de Praia. Reserve com rapidez no WhatsApp.</p>
            <a href="javascript:void(0)" onclick="openReservationModal('Locação Avulsa')" class="card-link">Consultar Horários Disponíveis <i class="fa-solid fa-arrow-right"></i></a>
          </div>

          <div class="arena-card">
            <div class="arena-card-icon">
              <i class="fa-solid fa-umbrella-beach"></i>
            </div>
            <h3>Day Use</h3>
            <p>Passe o dia no clube jogando com os amigos, aproveitando a estrutura de areia e o gastronômico Na Areia Bar.</p>
            <a href="javascript:void(0)" onclick="openReservationModal('Day Use')" class="card-link">Saber mais sobre Day Use <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <!-- Banner CTA Reception -->
        <div class="reception-banner">
          <div class="reception-content">
            <h3>Quer aprender Futevôlei ou Reservar uma Quadra?</h3>
            <p>Fale com nossa recepção para agendar sua <strong>Aula Experimental de Futevôlei</strong> ou garanta o horário da sua quadra!</p>
          </div>
          <button class="btn btn-solar btn-large" onclick="openReservationModal('Futevôlei')">
            <i class="fa-brands fa-whatsapp"></i> Falar com a Recepção Agora
          </button>
        </div>

      </div>
    </section>
  `;
}

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
