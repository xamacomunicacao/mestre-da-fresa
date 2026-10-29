# Receitas de Glassmorphism 2.0 & Aurora Aesthetics (Padrão Dribbble & Awwwards)

Guia de implementação para a estética presente nos melhores designs mundiais (como o conceito de villa imobiliária ultra-moderna de luxo).

---

## 1. O Efeito de Vidro Fosco Perfeito (Frosted Glass Card)

O erro comum é usar apenas `background: rgba(255,255,255,0.2)`. O padrão Dribbble exige 5 camadas integradas:

```css
/* Card de Vidro Fosco de Elite (Light & Dark Ready) */
.glass-card-luxury {
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(24px) saturate(190%);
  -webkit-backdrop-filter: blur(24px) saturate(190%);
  
  /* Borda com gradiente sutil simulando reflexo de luz superior */
  border: 1px solid rgba(255, 255, 255, 0.4);
  
  /* Cantos orgânicos ultra-arredondados (Dribbble Signature) */
  border-radius: 36px;
  
  /* Sombra interna para chanfro de luz + sombra externa difusa */
  box-shadow: 
    inset 0 1px 2px rgba(255, 255, 255, 0.6),
    inset 0 -1px 2px rgba(0, 0, 0, 0.05),
    0 20px 45px -10px rgba(0, 20, 50, 0.12);
  
  position: relative;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-card-luxury:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 
    inset 0 1px 2px rgba(255, 255, 255, 0.8),
    0 30px 60px -12px rgba(0, 20, 50, 0.18);
}

/* No Dark Mode */
[data-theme="dark"] .glass-card-luxury {
  background: rgba(18, 22, 34, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 
    inset 0 1px 1px rgba(255, 255, 255, 0.15),
    0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
```

---

## 2. Dock de Navegação Flutuante em Pílula (Pill Dock)

Assim como a barra de navegação vertical e os seletores de filtros no topo do design:

```css
.pill-dock {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 9999px; /* Formato pílula absoluto */
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.pill-item {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #334155;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
}

.pill-item:hover, .pill-item.active {
  background: #0f172a;
  color: #ffffff;
  transform: scale(1.08);
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.25);
}
```

---

## 3. Fundo Atmosférico Aurora & Mesh Glows

Para dar vida e profundidade aos cartões de vidro translúcido:

```css
.aurora-background {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: #f1f5f9;
}

.aurora-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.5;
  animation: floatOrb 20s infinite alternate ease-in-out;
}

.aurora-orb-1 {
  width: 500px;
  height: 500px;
  top: -100px;
  left: 20%;
  background: linear-gradient(135deg, #a78bfa, #60a5fa);
}

.aurora-orb-2 {
  width: 600px;
  height: 600px;
  bottom: -150px;
  right: 15%;
  background: linear-gradient(135deg, #fbcfe8, #f43f5e);
  animation-duration: 25s;
}

@keyframes floatOrb {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(60px, -40px) scale(1.1); }
  100% { transform: translate(-40px, 60px) scale(0.95); }
}
```
