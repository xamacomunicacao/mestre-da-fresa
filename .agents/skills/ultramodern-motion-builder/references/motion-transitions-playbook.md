# Playbook de Motion Design & Transições de Sessão de Alto Padrão (Awwwards Grade)

Este guia define a arquitetura de animação para transições cinematográficas e navegação fluida em sites ultramodernos.

---

## 1. Rolagem Sedosa com Lenis Smooth Scroll

Evite travamentos e saltos na rolagem instalando ou importando o Lenis:

```html
<!-- Via CDN ou npm install @studio-freight/lenis -->
<script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js"></script>
<script>
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.9
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Sincronização obrigatória com GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
</script>
```

---

## 2. Transições de Sessão Cinematográficas com GSAP ScrollTrigger

### A. Efeito Zoom-Through Hero (A Seção Inicial Abre Espaço para o Conteúdo)
```javascript
gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "+=120%",
    pin: true,
    scrub: 1,
  }
})
.to(".hero-bg", { scale: 1.15, filter: "brightness(0.6)", ease: "power1.inOut" })
.to(".hero-card-main", { y: -80, opacity: 0, scale: 0.95 }, "<")
.from(".next-section-preview", { yPercent: 40, opacity: 0, scale: 0.9 }, "-=0.3");
```

### B. Seção Horizontal Pinned (Carrossel Imersivo de Propriedades/Projetos)
```javascript
const horizontalTrack = document.querySelector(".horizontal-track");
gsap.to(horizontalTrack, {
  x: () => -(horizontalTrack.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-wrapper",
    pin: true,
    scrub: 1,
    end: () => "+=" + (horizontalTrack.scrollWidth - window.innerWidth)
  }
});
```

### C. Text Reveal com Divisão de Palavras (Typography Split Reveal)
```javascript
gsap.from(".reveal-text span", {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.05,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".reveal-text",
    start: "top 80%"
  }
});
```

---

## 3. Transições Entre Páginas (View Transitions API & Framer Motion)

### No Vanilla JavaScript / HTML:
```javascript
function navigateSmoothly(url) {
  if (!document.startViewTransition) {
    window.location.href = url;
    return;
  }
  document.startViewTransition(async () => {
    const response = await fetch(url);
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    document.body.innerHTML = doc.body.innerHTML;
  });
}
```

### No React / Next.js com Framer Motion:
```tsx
import { motion, AnimatePresence } from 'framer-motion';

export function PageTransitionWrapper({ children, routeKey }: { children: React.ReactNode, routeKey: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```
