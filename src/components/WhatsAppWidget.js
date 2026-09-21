/* ==========================================================================
   WHATSAPP WIDGET & MODAL SYSTEM
   ========================================================================== */
import { CONFIG } from '../config.js';

export function renderWhatsAppWidget() {
  return `
    <div class="whatsapp-floating-wrapper" id="whatsapp-floating">
      <div class="whatsapp-popover" id="whatsapp-popover">
        <div class="popover-header">
          <div class="popover-avatar">
            <i class="fa-solid fa-umbrella-beach"></i>
          </div>
          <div class="popover-info">
            <strong>La Playa Club Recepção</strong>
            <small><span class="online-dot"></span> Online agora</small>
          </div>
          <button class="popover-close" onclick="toggleWhatsAppPopover()">&times;</button>
        </div>
        <div class="popover-body">
          <p>Olá! 👋 Como podemos te ajudar hoje pé na areia?</p>
          <div class="popover-options">
            <button onclick="selectWhatsAppOption('Aula Futevôlei')">⚽ Agendar Aula de Futevôlei</button>
            <button onclick="selectWhatsAppOption('Locação de Quadra')">⏳ Reservar Horário / Day Use</button>
            <button onclick="selectWhatsAppOption('Reserva no Bar')">🍹 Reservar Mesa / Na Areia Bar</button>
            <button onclick="selectWhatsAppOption('Evento Privado')">🎂 Eventos e Festas Privadas</button>
          </div>
        </div>
      </div>

      <button class="whatsapp-btn" onclick="toggleWhatsAppPopover()" aria-label="Contato via WhatsApp">
        <i class="fa-brands fa-whatsapp"></i>
        <span class="whatsapp-ping"></span>
      </button>
    </div>

    <button class="back-to-top" id="back-to-top" onclick="scrollToTop()" aria-label="Voltar ao Topo">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  `;
}

export function initWhatsAppWidget() {
  window.openReservationModal = function(sportName = 'Geral') {
    const modal = document.getElementById('modal-reservation');
    const selectSport = document.getElementById('res-sport');
    const selectType = document.getElementById('res-type');
    const modalTitle = document.getElementById('modal-res-title');

    if (!modal) return;

    if (selectSport) {
      if (['Beach Tennis', 'Futevôlei', 'Vôlei de Praia'].includes(sportName)) {
        selectSport.value = sportName;
        if (modalTitle) modalTitle.textContent = `Agendar ${sportName}`;
      } else if (sportName === 'Aula Experimental' || sportName === 'Aula Experimental Gratuita') {
        if (modalTitle) modalTitle.textContent = 'Agendar Aula Experimental de Futevôlei';
        if (selectType) selectType.value = 'Aula Experimental Gratuita';
      } else if (sportName === 'Reserva no Bar') {
        selectSport.value = 'Reserva de Mesa no Bar';
        if (modalTitle) modalTitle.textContent = 'Reserva de Mesa no Na Areia Bar';
      } else {
        if (modalTitle) modalTitle.textContent = 'Agendar no La Playa Club';
      }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.openMenuModal = function() {
    const modal = document.getElementById('modal-menu');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.openEventModal = function() {
    const modal = document.getElementById('modal-events');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  window.submitReservationForm = function(event) {
    event.preventDefault();

    const sport = document.getElementById('res-sport').value;
    const type = document.getElementById('res-type').value;
    const name = document.getElementById('res-name').value.trim();

    let message = `Olá! Vi o site do La Playa Club e gostaria de informações.`;
    message += `\n📌 *Assunto:* ${type}`;
    message += `\n🎾 *Modalidade/Serviço:* ${sport}`;
    if (name) {
      message += `\n👤 *Meu Nome:* ${name}`;
    }
    message += `\nComo funcionam os horários e valores disponíveis?`;

    const encodedUrl = `https://api.whatsapp.com/send?phone=${CONFIG.WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
    window.open(encodedUrl, '_blank');

    closeModal('modal-reservation');
  };

  window.submitEventsForm = function(event) {
    event.preventDefault();

    const type = document.getElementById('evt-type').value;
    const people = document.getElementById('evt-people').value;
    const name = document.getElementById('evt-name').value.trim();

    let message = `Olá! Gostaria de um orçamento para realizar um Evento Privado no La Playa Club / Na Areia Bar.`;
    message += `\n🎉 *Tipo de Evento:* ${type}`;
    message += `\n👥 *Estimativa de Convidados:* ${people}`;
    message += `\n👤 *Responsável:* ${name}`;
    message += `\nPoderiam me enviar informações sobre datas e opções de cardápio?`;

    const encodedUrl = `https://api.whatsapp.com/send?phone=${CONFIG.WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
    window.open(encodedUrl, '_blank');

    closeModal('modal-events');
  };

  window.toggleWhatsAppPopover = function() {
    const popover = document.getElementById('whatsapp-popover');
    if (popover) {
      popover.classList.toggle('active');
    }
  };

  window.selectWhatsAppOption = function(option) {
    let message = '';
    switch (option) {
      case 'Aula Experimental':
      case 'Aula Futevôlei':
        message = 'Olá! Gostaria de agendar uma *Aula Experimental de Futevôlei* no La Playa Club. Quais os horários disponíveis?';
        break;
      case 'Locação de Quadra':
      case 'Day Use':
        message = 'Olá! Gostaria de consultar os horários e valores para *Locação Avulsa de Quadra ou Day Use* pé na areia.';
        break;
      case 'Reserva no Bar':
        message = 'Olá! Gostaria de informações sobre *Reserva de Mesa* no Na Areia Bar.';
        break;
      case 'Evento Privado':
        message = 'Olá! Gostaria de um orçamento para um *Evento Privado / Aniversário* no La Playa Club.';
        break;
      default:
        message = 'Olá! Gostaria de mais informações sobre o La Playa Club & Na Areia Bar.';
    }

    const encodedUrl = `https://api.whatsapp.com/send?phone=${CONFIG.WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
    window.open(encodedUrl, '_blank');

    const popover = document.getElementById('whatsapp-popover');
    if (popover) popover.classList.remove('active');
  };
}
