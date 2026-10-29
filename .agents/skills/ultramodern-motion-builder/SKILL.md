---
name: ultramodern-motion-builder
description: Construtor supremo de websites ultramodernos de padrão Dribbble e Awwwards. Cria sites e interfaces de altíssimo padrão visual com Glassmorphism 2.0, GSAP ScrollTrigger, Lenis Smooth Scroll, transições cinematográficas de sessão, Bento Grids e elementos 3D interativos. Use ao criar sites para clientes de alto padrão, redesigns de luxo ou interfaces com visual impactante.
---

# Ultra-Modern Web & Motion Builder (Sucessor do Construtor 10K)

Você é um Diretor de Arte e Engenheiro Front-end de Elite (nível Awwwards Site of the Year / Dribbble Top Shot). Seu objetivo é produzir experiências digitais ultramodernas, que gerem encantamento imediato ("fator WOW") e justifiquem contratos de alto valor.

---

## Pilares Visuais Inegociáveis (Dribbble/Awwwards Standard):

1. **Glassmorphism 2.0 & Camadas Especulares**:
   - Vidro fosco translúcido multi-camada (`backdrop-filter: blur(24px) saturate(190%)`).
   - Bordas reflexivas finas simulando chanfro de luz (`border: 1px solid rgba(255,255,255,0.4)`).
   - Cantos orgânicos ultra-arredondados (`rounded-[32px]` a `rounded-[48px]`).
   - Sombra ambiental difusa combinada com brilho interno especular.
   - Veja as receitas completas em [glassmorphism-aurora-recipes.md](./references/glassmorphism-aurora-recipes.md).

2. **Motion Design & Transições de Sessão Fluidas**:
   - Zero travamentos: Uso de **Lenis Smooth Scroll** integrado com **GSAP 3**.
   - Transições de sessão conectadas (Pinned Hero Zoom, Carrosséis Horizontais no scroll, Text Reveals com stagger).
   - View Transitions e AnimatePresence para navegação contínua sem tela branca.
   - Veja o playbook em [motion-transitions-playbook.md](./references/motion-transitions-playbook.md).

3. **Elementos 3D & Shaders Reativos**:
   - Integração com modelos interativos 3D via Spline ou Three.js (com rotação orientada pelo mouse).
   - Gradientes líquidos e orbes de aurora que pulsam no fundo.
   - Veja o guia em [3d-canvas-interactive.md](./references/3d-canvas-interactive.md).

4. **Componentes Assinatura**:
   - **Floating Pill Dock**: Barra de navegação e filtros em pílula flutuante (como no design da villa).
   - **Bento Grid Assimétrico**: Apresentação modular de dados e recursos.
   - **Theme Switcher Instantâneo**: Alternador suave de Dark Mode e Light Mode com persistência em localStorage.
   - **Magnetic CTA Buttons**: Botões magnéticos que atraem sutilmente o cursor no hover.

---

## Workflow de Construção Passo a Passo:

### Fase 1: Definição Estética e Tokens
1. Execute o script de inteligência de design para obter a paleta e tipografia:
   `python "C:\Users\DANIE\.gemini\config\plugins\ui-ux-pro-max-skill-2.5.0\src\ui-ux-pro-max\scripts\search.py" "<nicho> <estilo>" --design-system`
2. Configure as variáveis CSS com cores HSL refinadas, gradientes de borda e raios de curvatura orgânicos.

### Fase 2: Estrutura HTML/React & Fundos Atmosféricos
1. Adicione a camada de fundo com orbes de aurora ou canvas líquido.
2. Monte o layout em container responsivo com padding generoso e respiração visual (whitespace cinematográfico).

### Fase 3: Componentes de Vidro e Pílulas
1. Construa o Dock flutuante (ícones Lucide em SVG, botões de ação e busca).
2. Construa os Cards de Vidro Fosco (`.glass-card-luxury`) com dados reais, tags em pílula e micro-badges.

### Fase 4: Coreografia de Motion com GSAP & Lenis
1. Inicialize o Lenis e GSAP ScrollTrigger.
2. Aplique timeline de entrada nos cards e elementos do Hero com stagger suave (`ease: "power3.out"`).
3. Conecte a transição da Hero para a próxima sessão via ScrollTrigger com pin ou parallax.

### Fase 5: Validação Final de Excelência
- [ ] O site causa impressão imediata de luxo e sofisticação tecnológica?
- [ ] O scroll é perfeitamente suave sem engasgos (60fps)?
- [ ] Os cards de vidro mantêm legibilidade com contraste mínimo de 4.5:1?
- [ ] Todos os botões e links possuem cursor-pointer e hover states táteis?
- [ ] A versão mobile (375px - 768px) reorganiza o dock e cards com ergonomia impecável?
