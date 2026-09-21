/* ==========================================================================
   INTERACTIVE MODALS COMPONENT
   ========================================================================== */

export function renderModals() {
  return `
    <!-- 1. Modal de Agendamento Geral / Quadra & Aulas -->
    <div class="modal-backdrop" id="modal-reservation">
      <div class="modal-container">
        <button class="modal-close" onclick="closeModal('modal-reservation')">&times;</button>
        <div class="modal-header text-center">
          <div class="modal-icon-badge"><i class="fa-brands fa-whatsapp"></i></div>
          <h3 id="modal-res-title">Agendar no La Playa Club</h3>
          <p>Escolha os detalhes abaixo para ser direcionado diretamente ao WhatsApp da nossa recepção!</p>
        </div>
        <form id="reservation-form" onsubmit="submitReservationForm(event)">
          <div class="form-group">
            <label for="res-sport">Modalidade ou Serviço</label>
            <select id="res-sport" class="form-control" required>
              <option value="Beach Tennis">Beach Tennis (Locação / Day Use)</option>
              <option value="Futevôlei">Futevôlei (Aulas / Locação / Day Use)</option>
              <option value="Vôlei de Praia">Vôlei de Praia (Locação / Day Use)</option>
              <option value="Reserva de Mesa no Bar">Reserva no Na Areia Bar</option>
              <option value="Outro assunto">Outro assunto</option>
            </select>
          </div>

          <div class="form-group">
            <label for="res-type">Tipo de Solicitação</label>
            <select id="res-type" class="form-control" required>
              <option value="Aula Experimental de Futevôlei">Aula Experimental de Futevôlei</option>
              <option value="Locação de Horário de Quadra">Locação de Horário</option>
              <option value="Informações sobre Day Use">Day Use</option>
              <option value="Dúvidas Gerais">Dúvidas Gerais</option>
            </select>
          </div>

          <div class="form-group">
            <label for="res-name">Seu Nome (Opcional)</label>
            <input type="text" id="res-name" class="form-control" placeholder="Ex: João Silva">
          </div>

          <button type="submit" class="btn btn-solar btn-full">
            <i class="fa-brands fa-whatsapp"></i> Abrir WhatsApp com Mensagem
          </button>
        </form>
      </div>
    </div>

    <!-- 2. Modal do Cardápio Digital -->
    <div class="modal-backdrop" id="modal-menu">
      <div class="modal-container modal-large">
        <button class="modal-close" onclick="closeModal('modal-menu')">&times;</button>
        <div class="modal-header text-center">
          <span class="modal-tag">@_NAAREIABAR</span>
          <h3>Destaques do Cardápio Na Areia Bar</h3>
          <p>Confira algumas das nossas especialidades de bar e coquetelaria</p>
        </div>

        <div class="menu-tabs">
          <button class="menu-tab-btn active" data-menutab="menu-drinks">Drinks Tropicais</button>
          <button class="menu-tab-btn" data-menutab="menu-chopes">Chopes & Cervejas</button>
          <button class="menu-tab-btn" data-menutab="menu-porcoes">Porções Gourmet</button>
        </div>

        <div class="menu-tab-content">
          <div class="menu-pane active" id="menu-drinks">
            <div class="menu-items-grid">
              <div class="menu-item-card">
                <div class="menu-item-info">
                  <h5>La Playa Sunset <span class="badge-star">Autoral</span></h5>
                  <p>Gin artesanal, xarope de maracujá, lâminas de morango, tônica e espuma de gengibre refrescante.</p>
                </div>
              </div>
              <div class="menu-item-card">
                <div class="menu-item-info">
                  <h5>Caipirinha Tropical de Kiwi & Caju</h5>
                  <p>Cachaça premium ou vodka, kiwi fresco macerado, caju e toque de melado de cana.</p>
                </div>
              </div>
              <div class="menu-item-card">
                <div class="menu-item-info">
                  <h5>Mojito Pé na Areia</h5>
                  <p>Rum branco, hortelã fresca da horta, suco de limão siciliano e água com gás trincando.</p>
                </div>
              </div>
              <div class="menu-item-card">
                <div class="menu-item-info">
                  <h5>Gin Tônica Red Fruit</h5>
                  <p>Gin, infusão de frutas vermelhas, especiarias e água tônica premium.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="menu-pane" id="menu-chopes">
            <div class="menu-items-grid">
              <div class="menu-item-card">
                <div class="menu-item-info">
                  <h5>Chope Pilsen Trincando (Caneca Zero Graus) <span class="badge-star">Favorito</span></h5>
                  <p>Chope puro malte levinho e cremoso, servido no copo trincando de congelado.</p>
                </div>
              </div>
              <div class="menu-item-card">
                <div class="menu-item-info">
                  <h5>Chope IPA Artesanal</h5>
                  <p>Notas cítricas e amargor equilibrado para quem aprecia cervejas de caráter.</p>
                </div>
              </div>
              <div class="menu-item-card">
                <div class="menu-item-info">
                  <h5>Cervejas Long Neck & Estupidamente Geladas</h5>
                  <p>Balde de Heineken, Corona, Budweiser e Spaten bem trincando.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="menu-pane" id="menu-porcoes">
            <div class="menu-items-grid">
              <div class="menu-item-card">
                <div class="menu-item-info">
                  <h5>Dadinhos de Tapioca com Geléia de Pimenta <span class="badge-star">Mais Pedido</span></h5>
                  <p>Crocantes por fora, cremosos por dentro com queijo coalho e acompanhados de geleia artesanal.</p>
                </div>
              </div>
              <div class="menu-item-card">
                <div class="menu-item-info">
                  <h5>Filé Mignon ao Molho de Catupiry Artesanal</h5>
                  <p>Tiras de filé mignon grelhadas na chapa com catupiry gratinado e torradas temperadas.</p>
                </div>
              </div>
              <div class="menu-item-card">
                <div class="menu-item-info">
                  <h5>Iscas de Peixe Crocantes ao Molho Tártaro</h5>
                  <p>Tilápia empanada na farinha panko, limão siciliano e molho tártaro da casa.</p>
                </div>
              </div>
              <div class="menu-item-card">
                <div class="menu-item-info">
                  <h5>Batata Rústica da Casa com Bacon & Cheddar</h5>
                  <p>Batatas rústicas temperadas com alecrim, cobertas de cheddar cremoso e crispy de bacon.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer text-center">
          <button class="btn btn-solar" onclick="openReservationModal('Reserva no Bar')">
            <i class="fa-brands fa-whatsapp"></i> Reservar Mesa no WhatsApp
          </button>
        </div>
      </div>
    </div>

    <!-- 3. Modal de Eventos Privados -->
    <div class="modal-backdrop" id="modal-events">
      <div class="modal-container">
        <button class="modal-close" onclick="closeModal('modal-events')">&times;</button>
        <div class="modal-header text-center">
          <div class="modal-icon-badge"><i class="fa-solid fa-champagne-glasses"></i></div>
          <h3>Solicitar Orçamento para Evento</h3>
          <p>Organize seu aniversário, confraternização de empresa ou torneio privado conosco!</p>
        </div>
        <form id="events-form" onsubmit="submitEventsForm(event)">
          <div class="form-group">
            <label for="evt-type">Tipo de Evento</label>
            <select id="evt-type" class="form-control" required>
              <option value="Aniversário">Aniversário / Festa Privada</option>
              <option value="Confraternização de Empresa">Confraternização de Empresa</option>
              <option value="Torneio Fechado">Torneio Fechado de Amigos</option>
              <option value="Outro Evento">Outro Tipo de Evento</option>
            </select>
          </div>

          <div class="form-group">
            <label for="evt-people">Estimativa de Pessoas</label>
            <select id="evt-people" class="form-control" required>
              <option value="Até 20 pessoas">Até 20 pessoas</option>
              <option value="20 a 50 pessoas">20 a 50 pessoas</option>
              <option value="Mais de 50 pessoas">Mais de 50 pessoas</option>
            </select>
          </div>

          <div class="form-group">
            <label for="evt-name">Seu Nome / Empresa</label>
            <input type="text" id="evt-name" class="form-control" placeholder="Seu nome ou nome da empresa" required>
          </div>

          <button type="submit" class="btn btn-solar btn-full">
            <i class="fa-brands fa-whatsapp"></i> Enviar Solicitação no WhatsApp
          </button>
        </form>
      </div>
    </div>
  `;
}
