# Engenharia Reversa de Sites ao Vivo com Firecrawl MCP e Browser Subagent

Procedimento passo a passo para dissecar, clonar ou extrair o design system de qualquer site moderno.

---

## Passo 1: Mapeamento de Arquitetura e Scraping via Firecrawl

1. Execute o scrape completo da URL de destino com o Firecrawl MCP (`firecrawl_scrape`):
   - Extraia Markdown completo (para estrutura de conteúdo e copy).
   - Extraia HTML raw ou links de stylesheets CSS para inspecionar tokens.

2. Identifique os seguintes componentes no DOM:
   - Estrutura de Header / Nav (fixo, flutuante ou pill dock).
   - Seção Hero (proporção, mídias de fundo, títulos e badges).
   - Bento Grids ou carrosséis de produtos/serviços.
   - Chamadas de ação (CTAs primários e secundários).
   - Estrutura de rodapé e prova social (logos, avaliações, métricas).

---

## Passo 2: Inspeção Visual e Computada via Browser Subagent

Se o site utilizar animações dinâmicas em Canvas, WebGL ou GSAP:
1. Abra o Browser Subagent para navegar até a página.
2. Inspecione:
   - Fontes reais carregadas (`font-family`).
   - Cores exatas computadas (`getComputedStyle` para `--brand`, `--background`, `--accent`).
   - Efeitos de `:hover` e transições de scroll (comportamento de pinning e parallax).
   - Screenshots desktop (1440px) e mobile (390px).

---

## Passo 3: Reconstrução em Código Modular

1. Configure as variáveis de Design Tokens:
   ```css
   :root {
     --color-primary: [hex extraído];
     --color-background: [hex/rgb extraído];
     --blur-intensity: [px extraído];
     --radius-card: [px extraído];
     --font-heading: '[Fonte extraída]', sans-serif;
     --font-body: '[Fonte extraída]', sans-serif;
   }
   ```
2. Reconstrua a interface garantindo que os componentes sejam limpos, livres de scripts de rastreamento antigos e com performance aprimorada.
