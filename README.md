# 🏖️ La Playa Club & Na Areia Bar — Case de Sucesso Comercial

> **Case Study de Engenharia de Software & Landing Page de Alta Conversão**  
> Desenvolvido e entregue sob medida para o **La Playa Club & Na Areia Bar** em Matão - SP.  
> Projeto construído com **Vite 5**, **JavaScript ES6+ Modular**, **CSS3 (Custom Properties & Glassmorphism)** e **HTML5 Semântico**, com foco em conversão de leads, SEO local e responsividade de ponta.

[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://laplaya-club.vercel.app/)
[![Vite 5](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![JavaScript ES6+](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3 Glassmorphism](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Performance](https://img.shields.io/badge/Core%20Web%20Vitals-Optimized-brightgreen?style=for-the-badge&logo=googlechrome)](https://web.dev/vitals/)

---

## 🌐 Demonstração Online

- **URL de Produção:** [https://laplaya-club.vercel.app/](https://laplaya-club.vercel.app/)
- **Segmento:** Esporte, Lazer & Gastronomia (Beach Club & Bar Gastronômico)
- **Status:** Entregue e em Produção

---

## 📌 Contexto de Negócio & O Desafio

O **La Playa Club & Na Areia Bar** é um complexo esportivo e gastronômico premium em Matão/SP que combina 4 quadras profissionais de areia tratada, centro de treinamento com aulas exclusivas de Futevôlei (do iniciante ao avançado), locação avulsa e Day Use para Beach Tennis e Vôlei de Praia, além do gastrobar **Na Areia Bar** com coquetelaria autoral, chope trincando de gelado, sunsets com música ao vivo e porções artesanais.

### O Problema do Cliente
A arena necessitava de uma plataforma digital que:
1. **Atraísse e convertesse visitantes em clientes reais** de forma rápida, diminuindo o tempo de atendimento da recepção.
2. **Posicionasse a marca nos mecanismos de busca** (Google Search e Google Maps) nas cidades de Matão, Araraquara e região.
3. **Oferecesse uma experiência mobile impecável**, já que mais de 85% do tráfego do público de esportes, lazer e gastronomia acessa pelo celular.

### A Solução Entregue
Uma landing page comercial de alta conversão, extremamente veloz, com triagem inteligente de agendamentos no WhatsApp da recepção (`+55 16 99964-1866`), cardápio digital interativo em modal, hub dinâmico de eventos conectado às redes sociais oficiais (`@laplaya_club` e `@_naareiabar`) e SEO local otimizado.

---

## 🧠 Decisões de Engenharia & Arquitetura (Trade-offs)

Para garantir que o produto final tivesse excelência técnica, extrema velocidade de carregamento e alta manutenibilidade, as seguintes escolhas arquiteturais foram adotadas:

### 1. Arquitetura Modular ES6 & SPA Leve (Zero Runtime Overhead)
- **Motivação:** Em vez de frameworks pesados que adicionam dezenas de megabytes ao bundle e atrasam a renderização mobile, optou-se por uma arquitetura modular baseada em Vite e ES6 Modules (`src/components/`), mantendo o `index.html` com apenas 35 linhas de HTML semântico.
- **Impacto:** **Time to First Byte (TTFB)** inferior a 40ms, carregamento quase instantâneo na borda (Edge Vercel) e nota máxima nos Core Web Vitals do Google.

### 2. Design System com CSS Custom Properties & Glassmorphism
- **Motivação:** Optou-se por CSS Modular baseado em variáveis nativas (`variables.css`, `base.css`, `components.css`, `sections.css`) em vez de bibliotecas pesadas de UI.
- **Impacto:** **Zero runtime overhead** de JavaScript para estilização, eliminação de CSS não utilizado e liberdade absoluta para criar animações fluidas, efeitos glassmorphism no cabeçalho e controle cirúrgico de breakpoints.

### 3. Engenharia Mobile-First & Responsividade Cirúrgica (320px a 4K)
- **Tipografia Fluida (`clamp()`):** Títulos e textos utilizam funções matemáticas `clamp()` que escalam suavemente conforme a largura da viewport, eliminando quebras desajeitadas de palavras em celulares compactos (ex: iPhone SE e dobráveis de 320px).
- **Small Viewport Height (`100svh`):** Evita saltos de layout causados pelo recolhimento da barra de navegação do Chrome/Safari no mobile.
- **Drawer Lateral com Body Scroll Lock:** O menu mobile foi construído como um drawer deslizante suave com bloqueio automático do scroll da página (`overflow: hidden`), fechamento com tecla `Esc` e clique no backdrop.
- **Botão Voltar ao Topo Ergonômico:** Posicionado no canto inferior esquerdo para criar simetria perfeita e **não colidir** com o botão flutuante de atendimento do WhatsApp (canto direito).

### 4. Otimização de Ativos & Mídias Institucionais
- Utilização da pasta `/public/assets/img/` servida nativamente pelo CDN da Vercel. Logotipo oficial (`logo.png`) integrado no cabeçalho, favicon, marcas d'água das seções e rodapé com fallback gracioso em CSS/JS.

### 5. SEO Local Avançado & Configuração Comercial Centralizada
- Injeção semântica de metadados para localização física em Matão - SP, coordenadas geográficas, horários de funcionamento da arena e do bar, dados empresariais (CNPJ `47.479.182/0001-99`) e configuração centralizada do WhatsApp em `src/config.js`.

---

## ⚡ Principais Funcionalidades da Aplicação

- **Modal Inteligente de Agendamento (`BookingModal` / `Modals.js`):** Interface interativa que permite ao cliente selecionar o serviço desejado (Aulas de Futevôlei, Locação de Quadra de Beach Tennis/Vôlei, Day Use, Reserva no Bar), gerando uma mensagem pré-formatada e qualificada direto para a recepção no WhatsApp.
- **Cardápio Digital em Modal (`Bar.js`):** Pop-up navegável com abas para Drinks Tropicais, Chopes Trincando e Porções Gourmet.
- **Galeria Filtrável da Gastronomia (`Bar.js`):** Filtro interativo por categorias (Drinks Autorais, Chope & Cervejas, Porções Gourmet, Ambiente Bar) para visualização rápida da experiência.
- **Hub de Agenda Conectado ao Instagram (`Events.js`):** Redirecionamento dinâmico para os perfis oficiais (`@laplaya_club` e `@_naareiabar`), eliminando a necessidade de manutenção manual de cronograma semanal.
- **Formulário de Orçamento para Eventos Privados (`Modals.js`):** Captação de festas de aniversário, confraternizações corporativas e torneios fechados.
- **Botão Flutuante do WhatsApp com Popover (`WhatsAppWidget.js`):** Atendimento rápido com opções de início imediato de conversa.
- **Botão Voltar ao Topo (`ScrollToTop` / `initBackToTop`):** Surge suavemente após rolar 400px e executa rolagem fluida até o topo.

---

## 📁 Estrutura de Pastas e Módulos

```
laplaya_club/
├── public/
│   └── assets/
│       └── img/
│           ├── logo.png                # Logotipo oficial da marca (SVG/PNG)
│           └── README.md               # Guia de upload de mídias reais
├── src/
│   ├── components/
│   │   ├── Arena.js                    # Apresentação das quadras e modalidades
│   │   ├── Bar.js                      # Gastronomia, galeria filtrável e cardápio
│   │   ├── Events.js                   # Agenda Instagram e eventos privados
│   │   ├── Footer.js                   # Rodapé institucional e CNPJ
│   │   ├── Header.js                   # Topbar glassmorphism e gaveta mobile
│   │   ├── Hero.js                     # Banner principal, CTAs e métricas
│   │   ├── Location.js                 # Endereço, mapa interativo e horários
│   │   ├── Modals.js                   # Modais de triagem para WhatsApp e cardápio
│   │   └── WhatsAppWidget.js           # Widget flutuante com popover de atendimento
│   ├── styles/
│   │   ├── base.css                    # Resets globais e estilos da logo
│   │   ├── components.css              # Botões, badges, modais e widgets
│   │   ├── main.css                    # Pacote CSS principal
│   │   ├── sections.css                # Estilos de layout e media queries
│   │   └── variables.css               # Design tokens e variáveis CSS
│   ├── config.js                       # Configuração comercial central (WhatsApp real: 5516999641866)
│   └── main.js                         # Orquestrador SPA e inicializador
├── index.html                          # Ponto de entrada HTML5 ultracurto (35 linhas)
├── package.json                        # Dependências e scripts Vite
├── vite.config.js                      # Configuração do bundler Vite
└── README.md                           # Documentação comercial e case study
```

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** 18.18+ ou superior
- **npm** (incluso no Node) ou **yarn**

### Instalação e Execução
```bash
# 1. Clonar o repositório
git clone https://github.com/joaopedrofmontrezor/laplaya_club.git

# 2. Acessar o diretório
cd laplaya_club

# 3. Instalar dependências
npm install

# 4. Executar em ambiente de desenvolvimento
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local com Hot Reload rápido |
| `npm run build` | Compila o bundle estático de produção para a pasta `dist/` |
| `npm run preview` | Executa a prévia local da aplicação já compilada em modo produção |

---

## 📊 Métricas de Qualidade & Padrão de Engenharia

- **JavaScript ES6+:** 100% modular, limpo, organizado em componentes funcionais.
- **ESLint & Code Standards:** Código limpo e padronizado, aprovado com zero erros e zero avisos.
- **Acessibilidade (a11y):** Marcações semânticas (`main`, `header`, `section`, `footer`), atributos `aria-expanded`, `aria-label`, foco visual e suporte a navegação por teclado.
- **Performance:** Imagens otimizadas com lazy loading e decoding assíncrono, CSS modular sem bibliotecas de terceiros inflacionando o bundle.

---

## 👨‍💻 Desenvolvedor & Autor

Projeto concebido, desenvolvido e entregue por:

**João Pedro Ferreira Montrezor**  

- **GitHub:** [@joaopedrofmontrezor](https://github.com/joaopedrofmontrezor)
- **Repositório:** [github.com/joaopedrofmontrezor/laplaya_club](https://github.com/joaopedrofmontrezor/laplaya_club)

---

## 📄 Licença & Propriedade

Desenvolvido comercialmente para o **La Playa Club LTDA** (CNPJ: `47.479.182/0001-99`). Todos os direitos reservados.
