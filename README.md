# 🌴 La Playa Club & Na Areia Bar - Landing Page Institucional & Comercial

> **Complexo de Esportes de Areia, Gastronomia Tropical & Sunsets em Matão - SP**

Aplicação web moderna, ultra-responsiva e otimizada desenvolvida com **HTML5 Semântico, CSS3 Modular (Design System com Variáveis e Glassmorphism) e JavaScript ES6+**.

---

## 📸 Identidade Visual & Logo Oficial
O projeto inclui a logo oficial do **La Playa Club** (`assets/img/logo.png`), integrada no cabeçalho, marcas d'água das seções, favicon e rodapé.

---

## 🛠️ Arquitetura e Estrutura de Pastas

Estrutura modular limpa e escalável (padrão Dev Pleno / Engenharia de Software):

```
laplaya_club/
├── index.html                      # Ponto de entrada HTML5 semântico e leve
├── package.json                    # Dependências e scripts de build
├── vite.config.js                  # Configuração do Vite (Base path configurada para hospedagem universal)
├── .gitignore                      # Higiene do repositório Git
├── README.md                       # Documentação do projeto
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions para Deploy Automático Gratuito
├── src/
│   ├── config.js                   # Configurações globais (WhatsApp real, Instagram, CNPJ)
│   ├── main.js                     # Orquestrador principal da aplicação
│   ├── styles/
│   │   ├── variables.css           # Tokens de Design (Cores, Tipografia, Sombras)
│   │   ├── base.css                # Resets, tipografia global e estilos de imagem
│   │   ├── components.css          # Botões, Badges, Modais & Widget Flutuante do WhatsApp
│   │   ├── sections.css            # Layouts responsivos das seções e media queries
│   │   └── main.css                # Pacote CSS principal que importa os módulos
│   └── components/
│       ├── Header.js               # Navegação glassmorphic e menu drawer mobile
│       ├── Arena.js                # Tabs interativas de modalidades esportivas
│       ├── Bar.js                  # Filtros de galeria e modal do cardápio digital
│       └── WhatsAppWidget.js       # Gerador de links com mensagens dinâmicas para o WhatsApp
└── assets/
    └── img/
        ├── logo.png                # Logo oficial da empresa
        └── README.md               # Guia para inserção de fotos reais do clube
```

---

## 📱 Como Alterar o Número do WhatsApp Real

Para direcionar os agendamentos diretamente para o WhatsApp da recepção do La Playa Club:

1. Abra o arquivo [`src/config.js`](file:///d:/Arquivos/Documents/laplaya_club/src/config.js).
2. Atualize a variável `WHATSAPP_PHONE` com o número real no formato com DDD:
   ```javascript
   export const CONFIG = {
     WHATSAPP_PHONE: '55169XXXXXXXX', // Insira o número real aqui
     // ...
   };
   ```
3. Salve o arquivo. Todos os formulários e botões da landing page serão atualizados automaticamente!

---

## 🚀 Como Executar Localmente

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
   Acesse no navegador: `http://localhost:3000`

---

## 📦 Como Gerar o Build de Produção

Para gerar os arquivos otimizados e minificados para produção:
```bash
npm run build
```
Os arquivos prontos serão gerados na pasta `dist/`.

---

## 🌐 Opções de Hospedagem Gratuita (100% Grátis com SSL/HTTPS)

### Opção 1: GitHub Pages (Já configurado com GitHub Actions!)
1. Faça o commit e o push dos arquivos para a branch `main`:
   ```bash
   git add .
   git commit -m "feat: landing page comercial La Playa Club"
   git push origin main
   ```
2. No GitHub, acesse **Settings > Pages**.
3. Em **Source**, selecione **GitHub Actions**.
4. O site será publicado automaticamente no endereço: `https://joaopedrofmontrezor.github.io/laplaya_club/`

### Opção 2: Vercel / Netlify (Recomendado para Clientes)
1. Conecte sua conta do GitHub na [Vercel](https://vercel.com/) ou [Netlify](https://netlify.com/).
2. Importe o repositório `joaopedrofmontrezor/laplaya_club`.
3. A plataforma detectará o Vite automaticamente. Clique em **Deploy**.
4. Você terá um link rápido e poderá vincular o domínio próprio do cliente (ex: `www.laplayaclub.com.br`) gratuitamente.

---

## ⚖️ Licença e Propriedade
Desenvolvido para **La Playa Club LTDA** (CNPJ: 47.479.182/0001-99). Todos os direitos reservados.
