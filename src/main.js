/* ==========================================================================
   LA PLAYA CLUB & NA AREIA BAR - MAIN APPLICATION ORCHESTRATOR
   ========================================================================== */
import '../src/styles/main.css';
import { initHeader } from './components/Header.js';
import { initArena } from './components/Arena.js';
import { initBar } from './components/Bar.js';
import { initWhatsAppWidget } from './components/WhatsAppWidget.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initArena();
  initBar();
  initWhatsAppWidget();
  initBackToTop();
  initCurrentYear();
});

function initBackToTop() {
  const backBtn = document.getElementById('back-to-top');
  if (backBtn) {
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
}

function initCurrentYear() {
  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}
