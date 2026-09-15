
const WHATSAPP_PHONE = '5516999641866';

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileDrawer();
  initSportsTabs();
  initGalleryFilter();
  initMenuTabs();
  initScrollObserver();
  initCurrentYear();
  initBackToTop();
});


function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}



function initMobileDrawer() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawerCloseBtn = document.getElementById('drawer-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (!mobileDrawer) return;

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
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



function initSportsTabs() {
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



function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  if (!filterBtns.length) return;

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



function initMenuTabs() {
  const menuTabBtns = document.querySelectorAll('.menu-tab-btn');
  const menuPanes = document.querySelectorAll('.menu-pane');

  if (!menuTabBtns.length) return;

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



function initScrollObserver() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}


function initBackToTop() {
  const backBtn = document.getElementById('back-to-top');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  }, { passive: true });
}

window.scrollToTop = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};


function initCurrentYear() {
  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}



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
      if (modalTitle) modalTitle.textContent = 'Agendar Aula Experimental Gratuita';
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

  const encodedUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
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

  const encodedUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
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

  const encodedUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');

  const popover = document.getElementById('whatsapp-popover');
  if (popover) popover.classList.remove('active');
};
