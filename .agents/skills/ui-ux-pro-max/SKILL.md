---
name: ui-ux-pro-max
description: Motor de inteligência de design com 60+ estilos visuais (Glassmorphism, Neumorphism, Bento Grid, Aurora, Swiss), 160+ paletas de cores HSL, tipografia Google Fonts e regras de UX/UI. Use para gerar ou refinar design systems profissionais de nível Awwwards/Dribbble.
---

# UI/UX Pro Max — Design Intelligence Engine (v2.5.0)

Esta skill fornece uma base de conhecimento e motor de busca para sistemas de design profissionais, evitando estilos genéricos e gerando interfaces modernas de alto valor estético.

## Quando usar esta Skill:
- Ao criar um novo site, landing page ou dashboard moderno.
- Ao definir paletas de cores, estilos visuais (Glassmorphism, Bento Grid, Neumorphism, Aurora, Minimalismo Suíço).
- Ao buscar combinações tipográficas profissionais (Google Fonts).
- Ao realizar auditoria de UX, contraste e acessibilidade (WCAG AAA).

---

## Como Consultar o Motor de Design Local

O motor possui um banco de dados local com CSVs e um script de busca rápida em Python:

```bash
python "C:\Users\DANIE\.gemini\config\plugins\ui-ux-pro-max-skill-2.5.0\src\ui-ux-pro-max\scripts\search.py" "<palavras-chave do projeto>" --design-system
```

### Exemplos de Consultas:
- **Imobiliário de Luxo com Glassmorphism:**
  `python "C:\Users\DANIE\.gemini\config\plugins\ui-ux-pro-max-skill-2.5.0\src\ui-ux-pro-max\scripts\search.py" "luxury real estate villa glassmorphism" --design-system`
- **Fintech / SaaS Moderno:**
  `python "C:\Users\DANIE\.gemini\config\plugins\ui-ux-pro-max-skill-2.5.0\src\ui-ux-pro-max\scripts\search.py" "fintech saas dashboard" --design-system`
- **Modo Escuro / Cyberpunk / Aurora:**
  `python "C:\Users\DANIE\.gemini\config\plugins\ui-ux-pro-max-skill-2.5.0\src\ui-ux-pro-max\scripts\search.py" "ai developer tools aurora dark" --design-system`

---

## Estilos Principais Disponíveis no Acervo:

1. **Glassmorphism 2.0 (Frosted Glass Luxuoso):**
   - Efeito de vidro leitoso translúcido com `backdrop-filter: blur(20px) saturate(180%)`.
   - Borda sutil reflexiva: `1px solid rgba(255, 255, 255, 0.25)`.
   - Brilho especular interno: `box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 20px 40px rgba(0,0,0,0.1)`.
   - Cartões com cantos orgânicos ultra-arredondados (`rounded-[32px]` a `rounded-[48px]`).

2. **Bento Grid Moderno:**
   - Grid modular assimétrico inspirado na Apple e Dribbble.
   - Divisão hierárquica clara de funcionalidades com cards de proporções variadas (1x1, 2x1, 2x2).
   - Efeito de hover 3D tilt sutil ou glow que acompanha o cursor.

3. **Aurora UI & Mesh Gradients:**
   - Gradientes fluidos orgânicos com desfoque profundo (`filter: blur(80px)`), criando iluminação ambiente de fundo.

4. **Swiss Minimalist & Editorial:**
   - Tipografia marcante com contraste alto (ex: Cinzel + Josefin Sans, Inter + Playfair Display, Outfit + Space Grotesk).
   - Espaçamento generoso (whitespace dramático) e layout limpo.

---

## Checklist Pré-Entrega de UI:
- [ ] Nenhum emoji utilizado como ícone — sempre SVG vetorial (Lucide / Heroicons).
- [ ] `cursor: pointer` em todos os elementos interativos.
- [ ] Estados de `:hover` e `:active` suaves com transições de 200-300ms.
- [ ] Contraste de texto mínimo de 4.5:1 (WCAG AA) ou 7:1 (AAA).
- [ ] Responsividade impecável testada em 375px, 768px, 1024px e 1440px.
