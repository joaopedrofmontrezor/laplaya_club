/* ==========================================================================
   LA PLAYA CLUB & NA AREIA BAR - MAIN APPLICATION ENTRY
   ========================================================================== */
import '../src/styles/main.css';

import { renderHeader, initHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderArena, initArena } from './components/Arena.js';
import { renderBar, initBar } from './components/Bar.js';
import { renderEvents } from './components/Events.js';
import { renderLocation } from './components/Location.js';
import { renderFooter } from './components/Footer.js';
import { renderModals } from './components/Modals.js';
import { renderWhatsAppWidget, initWhatsAppWidget } from './components/WhatsAppWidget.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  
  if (app) {
    app.innerHTML = [
      renderHeader(),
      renderHero(),
      renderArena(),
      renderBar(),
      renderEvents(),
      renderLocation(),
      renderFooter(),
      renderModals(),
      renderWhatsAppWidget()
    ].join('');
  }

  // Initialize interactive component behaviors & event listeners
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
