# Integração de Elementos 3D e Shaders Canvas Interativos

Como substituir placeholders estáticos por elementos 3D dinâmicos e fundos líquidos interativos.

---

## 1. Spline 3D Embed Interativo e Ultraleve

O Spline permite exportar modelos 3D modernos e orgânicos (vidros transparentes, casas modernas, esferas reflexivas) com física e controle de mouse:

```html
<script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js"></script>
<div class="spline-container" style="width: 100%; height: 600px; position: relative;">
  <spline-viewer url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"></spline-viewer>
</div>
```

---

## 2. Canvas Shaders de Gradiente Líquido com Interação ao Cursor

```javascript
// Gradiente líquido procedural em WebGL/Canvas
function initLiquidCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
  });

  function render() {
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;
    
    ctx.clearRect(0, 0, width, height);
    
    const grad = ctx.createRadialGradient(mouse.x, mouse.y, 50, mouse.x, mouse.y, width * 0.6);
    grad.addColorStop(0, 'rgba(167, 139, 250, 0.35)');
    grad.addColorStop(0.5, 'rgba(96, 165, 250, 0.2)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
    
    requestAnimationFrame(render);
  }
  render();
}
```
