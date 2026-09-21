/* ==========================================================================
   PROGRAMAÇÃO & EVENTOS COMPONENT
   ========================================================================== */

export function renderEvents() {
  return `
    <section class="section events-section" id="programacao">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag"><i class="fa-solid fa-calendar-star"></i> EXPERIÊNCIA COMPLETA</span>
          <h2 class="section-title">Programação & Eventos</h2>
          <p class="section-subtitle">
            Sempre há um ótimo motivo para reunir os amigos no La Playa Club & Na Areia Bar.
          </p>
        </div>

        <div class="events-grid">
          <div class="events-main-card">
            <div class="events-card-header">
              <h3><i class="fa-solid fa-fire"></i> Programação & Eventos da Semana</h3>
              <span class="badge-accent">Atualizado no Instagram</span>
            </div>

            <div class="social-agenda-body">
              <div class="agenda-icon-box">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <h4>Confira a Programação Desta Semana no Nosso Instagram!</h4>
              <p>
                Toda semana preparamos uma agenda especial com <strong>música ao vivo no sunset, transmissões de jogos, happy hours e horários de torneios</strong> no La Playa Club e no Na Areia Bar.
              </p>
              <p class="agenda-subnote">
                Como nossa programação de atrações muda semanalmente, acompanhe os stories e publicações em tempo real!
              </p>

              <div class="agenda-social-btns">
                <a href="https://instagram.com/laplaya_club" target="_blank" rel="noopener" class="btn btn-primary">
                  <i class="fa-brands fa-instagram"></i> Ver Agenda no @laplaya_club
                </a>
                <a href="https://instagram.com/_naareiabar" target="_blank" rel="noopener" class="btn btn-solar">
                  <i class="fa-brands fa-instagram"></i> Ver Atração no @_naareiabar
                </a>
              </div>
            </div>
          </div>

          <div class="private-events-card">
            <div class="private-events-badge">Espaço Exclusivo</div>
            <h3>Reserve nosso Espaço para seu Evento Privado</h3>
            <p>
              Aniversários, confraternizações de empresas, formaturas ou torneios fechados. Transforme seu evento em uma experiência pé na areia inesquecível em Matão!
            </p>

            <ul class="private-specs-list">
              <li><i class="fa-solid fa-check"></i> Quadras reservadas exclusivamente para seu grupo</li>
              <li><i class="fa-solid fa-check"></i> Cardápio e buffet personalizado pelo Na Areia Bar</li>
              <li><i class="fa-solid fa-check"></i> Estrutura de som, iluminação e loungess confortáveis</li>
              <li><i class="fa-solid fa-check"></i> Atendimento com garçons e suporte de recepção</li>
            </ul>

            <button class="btn btn-solar btn-full" onclick="openEventModal()">
              <i class="fa-solid fa-champagne-glasses"></i> Solicitar Orçamento de Evento
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}
