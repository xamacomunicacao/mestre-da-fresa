# Playbook: Clonagem de UI a Partir de Screenshots / Conceitos do Dribbble

Guia prático para dissecar qualquer print de UI moderno (ex: Dribbble/Behance) e convertê-lo em código de alta fidelidade funcional.

---

## Passo 1: Decomposição em Camadas (Layer Breakdown)

Ao analisar uma imagem como a villa de luxo com interface de vidro:
1. **Camada de Fundo (Backdrop)**:
   - Imagem fotográfica de alta resolução ou render 3D em tela cheia com overlay sutil de iluminação.
2. **Camada de Navegação & Docks**:
   - Barra superior com filtros em pílula (`Buy`, `Location`, `Property Type`, `Max Price`, `Rent`).
   - Dock vertical esquerdo com ícones táteis (`Home`, `Search`, `Grid`, `Chat`, `Avatar`, `Bell`, `Settings`, `Dark/Light Switch`).
3. **Camada de Cartões de Vidro (Glass Surface)**:
   - Card inferior esquerdo ("Find The Perfect Place", métrica "10K+ Properties").
   - Card central flutuante ("Lunar Oasis Villa", especificações com ícones: `695m²`, `3 bedrooms`, `2 baths`, botão de ação com seta).
   - Card de ação circular (Logo/Action badge roxo com ícone e botões de curtir/salvar/compartilhar).

---

## Passo 2: Extração de Geometria e Estilo

1. **Raios de Borda (Border Radius)**:
   - Cantos externos do container principal: `border-radius: 48px`.
   - Cantos dos cards de vidro: `border-radius: 36px` a `40px`.
   - Elementos em pílula: `border-radius: 9999px`.
2. **Fórmula de Vidro Fosco**:
   - `background: rgba(255, 255, 255, 0.55)` ou `rgba(235, 240, 250, 0.45)`.
   - `backdrop-filter: blur(28px) saturate(180%)`.
   - Borda: `1px solid rgba(255, 255, 255, 0.5)`.
3. **Tipografia & Ícones**:
   - Título principal com tipografia editorial moderna (ex: Plus Jakarta Sans / Outfit / Inter Display).
   - Ícones SVG de traço fino (Lucide Icons com `stroke-width="1.5"`).

---

## Passo 3: Geração do Código Interativo

Transforme o mock estático em uma página viva com:
- Alternador de Dark/Light funcional.
- Filtros interativos com dropdowns.
- Cards com hover sutil e microinterações nos botões de curtir, salvar e navegar.
