---
name: website-cloner-extractor
description: Realiza engenharia reversa, extração de design tokens e clonagem de alta fidelidade de qualquer website ao vivo ou screenshot do Dribbble/Behance. Use quando o usuário pedir para clonar um site, recriar um design a partir de uma imagem, extrair o design system de uma URL ou reproduzir referências ultramodernas.
---

# Website Cloner & Design System Extractor

Esta skill capacita o agente a realizar engenharia reversa completa de websites modernos ou conceitos visuais (Dribbble, Behance, Figma) e reconstruí-los com extrema facilidade, fidelidade visual e código limpo.

---

## Quando Utilizar:
- "Clone este site: https://..."
- "Extraia o design system e cores deste site"
- "Recrie exatamente esta interface deste print/screenshot" (ex: mock de Dribbble com cards de vidro)
- "Faça o redesign do meu site baseado nesta referência moderna"

---

## Modos de Operação:

### Modo 1: Clonagem via URL ao Vivo (Firecrawl MCP + Browser)
1. **Scraping Completo de Conteúdo & Metadados**:
   - Chame a ferramenta `firecrawl_scrape` para extrair texto, estrutura HTML, links de imagens e CSS da URL.
2. **Inspeção de Estilos Computados e Animações**:
   - Se o site utilizar animações dinâmicas ou layouts complexos, use o `browser_subagent` para capturar os estilos reais, tamanhos de fonte, sombras e espaçamentos.
3. **Consolidação em Tokens de Design**:
   - Defina as variáveis de cores (`primary`, `background`, `accent`), famílias de fontes e classes de layout.
4. **Construção do Clone**:
   - Monte a interface modularmente, eliminando scripts de terceiros obsoletos e adicionando motion suave.

### Modo 2: Clonagem a Partir de Screenshot / Imagem de Design
1. **Decomposição Visual**:
   - Analise o layout em camadas: Fundo, Docks de Navegação, Cards Flutuantes de Vidro, Tipografia e Botões.
   - Siga as etapas de [screenshot-to-code-playbook.md](./references/screenshot-to-code-playbook.md).
2. **Mapeamento de Raios, Cores e Blur**:
   - Extraia o valor exato de curvatura (`border-radius`), intensidade de desfoque (`backdrop-filter`) e gradientes de fundo.
3. **Produção do Código Drop-in**:
   - Gere o código HTML/CSS/JS ou React/Next.js com os componentes funcionais e interativos.

---

## Checklist de Qualidade do Clone:
- [ ] O layout replica a proporção e hierarquia visual da referência original?
- [ ] Tipografia utiliza fontes equivalentes de alta qualidade via Google Fonts?
- [ ] Elementos interativos (docks, botões, cards, alternadores de tema) são 100% funcionais?
- [ ] O código gerado é semântico, moderno e livre de código espaguete?
