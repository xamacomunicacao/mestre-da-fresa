# Regras de Cinematografia e Espaço Negativo para Vídeos de Hero Section

Este guia estabelece os parâmetros técnicos para evitar vídeos poluídos, caóticos ou amadores em sites de luxo.

---

## 1. A Regra do Espaço Negativo (Negative Space 60/40)

Um vídeo de fundo de Hero **nunca** é um curta-metragem de ação; ele é um ativo ambiental de atmosfera.
- **60% à Esquerda / Centro:** Deve ter iluminação difusa, profundidade de campo rasa (`f/2.0` a `f/2.8`) e desfoque óptico suave. Isso garante que o texto principal (`h1`), descrição e botões de ação fiquem 100% legíveis sem precisar de fundos pretos artificiais.
- **40% à Direita:** Onde a ação elegante acontece. O cabeçote da máquina ou o produto fica posicionado no terço direito da tela, sem invadir a área dos textos.

---

## 2. O Erro Comum: HUDs e Gráficos Gerados pela IA de Vídeo

- **Por que fica amador:** Quando você pede *"holographic HUD"*, *"3D blueprint lines"* ou *"CAD measurements"* para a IA de vídeo (Flow, Runway, Kling), ela renderiza caixas de arame flutuantes pixeladas e toscas no meio do vídeo, com cara de ficção científica barata dos anos 2000.
- **A Solução Profissional (Padrão Apple / Dr. Henrique Salles):**
  - O vídeo deve focar **exclusivamente na realidade física e nos materiais puros** (metal, acrílico, laser cirúrgico, reflexos ópticos).
  - As linhas de engenharia, cotas e medidas milimétricas são desenhadas em **SVG vetorial no próprio site** (usando HTML5 + CSS animado). Assim, elas são perfeitamente nítidas em 4K, interativas e alinhadas aos pixels da tela.

---

## 3. Direção de Iluminação: Commercial Studio vs. Dark Neon

- **Evitar:** Ambientes pretos com fumaça, luzes roxas/magentas espalhafatosas e chuvas de faíscas.
- **Usar:** **Clean-room Architectural Lighting**:
  - Luz difusa suave (estúdio fotográfico comercial com softboxes gigantes de 5600K).
  - Tons neutros: cinza pérola (`#e5e6e9`), off-white, titânio escovado claro e acrílico fosco.
  - O corte da máquina deve ser suave, com micro-feixe concentrado, sem explosões de faíscas que ceguem o usuário.