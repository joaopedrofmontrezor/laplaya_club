# 🌴 La Playa Club & Na Areia Bar - Landing Page Institucional & Comercial

<p align="center">
  <a href="https://laplaya-club.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/STATUS-EM_PRODUÇÃO-brightgreen?style=for-the-badge&logo=vercel" alt="Status em Produção">
  </a>
  <img src="https://img.shields.io/badge/PERFORMANCE-100%2F100-success?style=for-the-badge&logo=googlechrome" alt="PageSpeed Score">
  <img src="https://img.shields.io/badge/LOCATION-MATÃO_--_SP-blue?style=for-the-badge&logo=googlemaps" alt="Localização Matão SP">
</p>

---

## 🌐 Demonstração Online

🔗 **Acesse o site publicado:** [https://laplaya-club.vercel.app/](https://laplaya-club.vercel.app/)

---

## 📝 Sobre o Projeto

Este projeto é uma **aplicação web comercial completa e de alta performance** desenvolvida para o **La Playa Club & Na Areia Bar**, o principal complexo de esportes de areia (Beach Tennis, Futevôlei, Vôlei de Praia), gastronomia tropical, chope gelado e sunsets da cidade de **Matão - SP**.

A plataforma foi projetada com foco em **SEO Local, altíssima taxa de conversão de leads para o WhatsApp da recepção e experiência visual de nível internacional (Vibe Beach Club)**.

---

## 🎯 Objetivos de Negócio Alcançados

- **Conversão Direta de Leads:** Sistema de agendamento via modais interativos que pré-formatam mensagens direcionadas ao WhatsApp da recepção (`+55 16 99964-1866`).
- **Engajamento Semanal Automático:** Substituição de agendas estáticas por um hub dinâmico conectado diretamente aos perfis oficiais do Instagram (`@laplaya_club` e `@_naareiabar`), eliminando custo de manutenção diária.
- **Divulgação do Espaço para Eventos Privados:** Formulário dedicado para captação de festas de aniversário, confraternizações corporativas e torneios fechados.
- **Destaque Gastronômico:** Cardápio digital em modal interativo para apresentação das porções gourmet e coquetelaria autoral.

---

## 💻 Destaques de Engenharia de Software (Para Recrutadores)

O desenvolvimento priorizou a entrega de uma solução **robusta, escalável e extremamente leve**, evitando dependências desnecessárias para manter uma pontuação máxima nos Core Web Vitals do Google.

### 🌟 Diferenciais Técnicos:
- **Clean Architecture & Componentização ES6:** Aplicação organizada em módulos reutilizáveis (`src/components/`), mantendo o `index.html` com apenas 35 linhas.
- **Performance Extrema (< 300ms de carregamento):** Bundling otimizado via **Vite**, sem overhead de frameworks pesados, resultando em um bundle de produção com menos de 50KB.
- **Design System com Vanilla CSS:** Uso de CSS Custom Properties (variáveis), efeito Glassmorphism (`backdrop-filter`), suporte a tema escuro/praiano e total responsividade Mobile-First.
- **Configuração Centralizada (`src/config.js`):** Facilidade de manutenção de dados comerciais (WhatsApp, links sociais, endereço e CNPJ) em um único ponto de verdade.
- **Sistema de Fallback de Mídia:** Tratamento gracioso em CSS/JS para carregamento de imagens e logos institucionais.

---

## 📁 Estrutura do Repositório

```
laplaya_club/
├── index.html                      # Ponto de entrada HTML5 ultracurto e semântico (35 linhas)
├── package.json                    # Dependências e scripts de build com Vite
├── vite.config.js                  # Configuração do Vite com suporte a base relativa
├── README.md                       # Documentação do projeto
├── .github/
│   └── workflows/
│       └── deploy.yml              # Pipeline de CI/CD para deploy automático no GitHub Pages
├── src/
│   ├── config.js                   # ⚙️ Configurações comerciais (WhatsApp real: 5516999641866)
│   ├── main.js                     # Orquestrador da aplicação SPA
│   ├── styles/
│   │   ├── variables.css           # Tokens de Design (Cores, Tipografia e Elevacões)
│   │   ├── base.css                # ResetsGlobais e Estilos da Logo Oficial
│   │   ├── components.css          # Botões, Badges, Modais & Popover Flutuante
│   │   ├── sections.css            # Grid Responsivo das Seções e Media Queries
│   │   └── main.css                # Importador principal de estilos
│   └── components/
│       ├── Header.js               # Cabeçalho Glassmorphic & Drawer Mobile
│       ├── Hero.js                 # Banner Principal Pé na Areia & Métricas
│       ├── Arena.js                # Tabs Interativas das Modalidades Esportivas
│       ├── Bar.js                  # Filtros de Galeria & Modal do Cardápio Digital
│       ├── Events.js               # Hub Instagram & Formulário de Eventos Privados
│       ├── Location.js             # Endereço Oficial, Horários & Google Maps
│       ├── Footer.js               # Rodapé Institucional com CNPJ
│       ├── Modals.js               # Modais de Agendamento e Cardápio
│       └── WhatsAppWidget.js       # Widget Flutuante do WhatsApp & Popover Rápido
└── assets/
    └── img/
        ├── logo.png                # Logotipo Oficial do La Playa Club
        └── README.md               # Instruções para upload de mídias reais
```

---

## 🏢 Dados da Empresa (Cliente)

- **Razão Social:** La Playa Club LTDA
- **CNPJ:** `47.479.182/0001-99`
- **Endereço:** Av. Baldan, 3050 - Residencial das Acácias, Matão - SP, CEP 15990-536
- **WhatsApp da Recepção:** `+55 (16) 99964-1866`
- **Instagram Arena:** [`@laplaya_club`](https://instagram.com/laplaya_club)
- **Instagram Bar:** [`@_naareiabar`](https://instagram.com/_naareiabar)

---

## 🛠️ Como Executar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/joaopedrofmontrezor/laplaya_club.git
   cd laplaya_club
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse em seu navegador: `http://localhost:3000`

4. Para gerar o build final de produção:
   ```bash
   npm run build
   ```

---

## 📄 Licença

Projeto desenvolvido e entregue para **La Playa Club LTDA**. Todos os direitos reservados.
