/**
 * MESTRE DA FRESA CNC & CNC LASER — INTERAÇÕES E MOTION DESIGN SYSTEM
 * Arquitetura baseada no motor do Dr. Henrique Salles
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. PÍLULA FLUTUANTE SUPERIOR & BARRA FIXA INFERIOR
     ========================================================================== */
  const heroFlutuante = document.getElementById('hero-flutuante');
  const barraFixa = document.getElementById('barra');
  const heroSection = document.getElementById('topo');
  const contatoSection = document.getElementById('contato');

  function updateFloatingNav() {
    const scrollY = window.scrollY || window.pageYOffset;
    const heroBottom = heroSection ? heroSection.offsetTop + heroSection.offsetHeight - 120 : 400;
    const contatoTop = contatoSection ? contatoSection.offsetTop - 300 : 999999;

    // Header flutuante surge quando o Hero sai da tela
    if (scrollY > heroBottom) {
      heroFlutuante.classList.add('is-visivel');
    } else {
      heroFlutuante.classList.remove('is-visivel');
    }

    // Barra fixa surge após o Hero e some quando o usuário chega no Contato
    if (scrollY > heroBottom && scrollY < contatoTop) {
      barraFixa.classList.add('is-visivel');
    } else {
      barraFixa.classList.remove('is-visivel');
    }
  }

  window.addEventListener('scroll', updateFloatingNav, { passive: true });
  updateFloatingNav();

  /* ==========================================================================
     2. MENU MOBILE DRAWER
     ========================================================================== */
  const heroMenu = document.getElementById('hero-menu');
  const btnAbrirHero = document.getElementById('btn-abrir-menu-hero');
  const btnAbrirFlutuante = document.getElementById('btn-abrir-menu-flutuante');
  const btnFecharMenu = document.getElementById('btn-fechar-menu');
  const fecharMenuVeu = document.getElementById('fechar-menu-veu');
  const menuLinks = document.querySelectorAll('.hero-menu-link');

  function abrirMenu() {
    heroMenu.classList.add('is-aberto');
    document.body.style.overflow = 'hidden';
    if (btnAbrirHero) btnAbrirHero.setAttribute('aria-expanded', 'true');
    if (btnAbrirFlutuante) btnAbrirFlutuante.setAttribute('aria-expanded', 'true');
  }

  function fecharMenu() {
    heroMenu.classList.remove('is-aberto');
    document.body.style.overflow = '';
    if (btnAbrirHero) btnAbrirHero.setAttribute('aria-expanded', 'false');
    if (btnAbrirFlutuante) btnAbrirFlutuante.setAttribute('aria-expanded', 'false');
  }

  if (btnAbrirHero) btnAbrirHero.addEventListener('click', abrirMenu);
  if (btnAbrirFlutuante) btnAbrirFlutuante.addEventListener('click', abrirMenu);
  if (btnFecharMenu) btnFecharMenu.addEventListener('click', fecharMenu);
  if (fecharMenuVeu) fecharMenuVeu.addEventListener('click', fecharMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', fecharMenu);
  });

  /* ==========================================================================
     3. CARROSSEL 3D EM DECK ROTACIONADO (CASOS / APLICAÇÕES) & MODAL TÉCNICO
     ========================================================================== */
  const deck = document.getElementById('casos-deck');
  const palco = document.getElementById('casos-palco');
  const cards = Array.from(deck ? deck.querySelectorAll('.casos-card') : []);
  const btnPrev = document.getElementById('casos-btn-prev');
  const btnNext = document.getElementById('casos-btn-next');
  const numAtual = document.getElementById('casos-num-atual');

  // Elementos do Modal de Ficha Técnica
  const modalCaso = document.getElementById('modal-caso');
  const modalOverlay = document.getElementById('modal-caso-overlay');
  const modalBtnFechar = document.getElementById('modal-caso-fechar');
  const modalImg = document.getElementById('modal-caso-img');
  const modalMaterial = document.getElementById('modal-caso-material');
  const modalTag = document.getElementById('modal-caso-tag');
  const modalTitulo = document.getElementById('modal-caso-titulo');
  const modalDesc = document.getElementById('modal-caso-desc');
  const modalMaquina = document.getElementById('modal-caso-maquina');
  const modalFresa = document.getElementById('modal-caso-fresa');
  const modalMatDetalhe = document.getElementById('modal-caso-mat-detalhe');
  const modalTolerancia = document.getElementById('modal-caso-tolerancia');
  const modalYoutube = document.getElementById('modal-caso-youtube');
  const modalWhatsapp = document.getElementById('modal-caso-whatsapp');

  // Dados técnicos autênticos com fotografia de estúdio de alta precisão
  const casosData = [
    {
      titulo: 'Letra Caixa 30mm com Desbaste',
      tag: 'Usinagem Real · Router Multicam',
      material: 'PVC Expandido 30mm + Acrílico',
      desc: 'Usinagem de letra caixa de alto relevo em PVC Expandido de 30mm com bolsos de desbaste interno a 25mm de profundidade para alojamento de fita LED e encaixe perimetral de tampa em acrílico leitoso de 3mm.',
      maquina: 'CNC Router Multicam 3000 Series',
      fresa: 'Fresa 2 cortes helicoidais para PVC / Upcut',
      matDetalhe: 'PVC Expandido 30mm + Acrílico leitoso 3mm',
      tolerancia: '±0.02 mm (Encaixe perimetral sem folga)',
      img: './Assets/caso-1-letra-caixa-pvc30.jpg',
      youtube: 'https://www.youtube.com/watch?v=_kfYjZwkG5k',
      whatsapp: 'https://wa.me/5592991934550?text=Ol%C3%A1!%20Gostaria%20de%20cotar%20uma%20Letra%20Caixa%20em%20PVC%2030mm%20com%20desbaste.'
    },
    {
      titulo: 'Polimento Térmico a Maçarico',
      tag: 'Acabamento Fino · Acrílico Cristal',
      material: 'Acrílico Cristal 15mm',
      desc: 'Técnica de polimento térmico através de chama direta calibrada de maçarico. Elimina a opacidade e marcas de fresa, restituindo 100% da refração e brilho espelhado da borda usinada.',
      maquina: 'Acabamento Manual Especializado pós-CNC',
      fresa: 'Fresa monofilamento polida (corte inicial)',
      matDetalhe: 'Chapa de Acrílico Cast Cristal 15mm',
      tolerancia: 'Borda com acabamento vítreo óptico',
      img: './Assets/caso-2-polimento-acrilico.jpg',
      youtube: 'https://www.youtube.com/watch?v=SnpHSYx_5qE',
      whatsapp: 'https://wa.me/5592991934550?text=Ol%C3%A1!%20Gostaria%20de%20cotar%20pe%C3%A7as%20em%20Acr%C3%ADlico%20com%20polimento%20t%C3%A9rmico.'
    },
    {
      titulo: 'Corte e Vinco em V a 90°',
      tag: 'Revestimento · Fachadas & Brises',
      material: 'ACM 3mm · Alumínio Composto',
      desc: 'Fresagem com ferramenta em V a 90°/135° desbastando com precisão cirúrgica a chapa de alumínio interna e o núcleo de polietileno, mantendo intacta a face externa para dobras de 90° sem trincas.',
      maquina: 'CNC Router Multicam 3000 Series (Mesa a Vácuo)',
      fresa: 'Fresa cônica em V para ACM (V-Groove 90°)',
      matDetalhe: 'ACM 3mm com pintura PVDF Kynar 500',
      tolerancia: 'Profundidade com tolerância de 0.05mm na película',
      img: './Assets/caso-3-corte-vinco-acm.jpg',
      youtube: 'https://www.youtube.com/watch?v=4a3tVvMqado',
      whatsapp: 'https://wa.me/5592991934550?text=Ol%C3%A1!%20Gostaria%20de%20cotar%20corte%20e%20vinco%20de%20chapas%20de%20ACM%20para%20fachada.'
    },
    {
      titulo: 'Números & Tipografia Fina',
      tag: 'Alta Resolução · Ferramental Nano DLC',
      material: 'ACM + Fresa Nano DLC',
      desc: 'Usinagem de números e letras de proporções reduzidas com detalhes de raio mínimo. O revestimento diamantado Diamond-Like Carbon (DLC) reduz o atrito e calor, garantindo corte livre de rebarbas.',
      maquina: 'CNC Router Multicam 3000 Series',
      fresa: 'Fresa 1 corte metal duro revestida Nano DLC 3mm',
      matDetalhe: 'ACM 3mm Prata Escovado e Preto Brilho',
      tolerancia: '±0.02 mm em vértices agudos e raios finos',
      img: './Assets/caso-4-numeros-acm-dlc.jpg',
      youtube: 'https://www.youtube.com/watch?v=E2XS-41UPhA',
      whatsapp: 'https://wa.me/5592991934550?text=Ol%C3%A1!%20Gostaria%20de%20cotar%20tipografia%20e%20n%C3%BAmeros%20em%20ACM.'
    },
    {
      titulo: 'Corte Perimetral Espesso',
      tag: 'Alta Rigidez · Chapas Pesadas',
      material: 'PVC Expandido 20mm',
      desc: 'Corte perimetral em chapa espessa com rotação e avanço calibrados na Router Multicam. A fixação a vácuo impede qualquer vibração, assegurando ângulo reto absoluto em todas as arestas verticais.',
      maquina: 'CNC Router Multicam 3000 Series',
      fresa: 'Fresa helicoidal 2 cortes balanceada',
      matDetalhe: 'PVC Expandido Branco 20mm alta densidade',
      tolerancia: 'Lateral com 90° perfeito sem marcas de passe',
      img: './Assets/caso-5-corte-pvc20.jpg',
      youtube: 'https://www.youtube.com/watch?v=0PPlC7uO9gY',
      whatsapp: 'https://wa.me/5592991934550?text=Ol%C3%A1!%20Gostaria%20de%20cotar%20corte%20de%20letras%20em%20PVC%20Expandido%2020mm.'
    }
  ];

  function abrirModalCaso(index) {
    const item = casosData[index];
    if (!item || !modalCaso) return;

    if (modalImg) {
      modalImg.src = item.img;
      modalImg.alt = item.titulo;
    }
    if (modalMaterial) modalMaterial.textContent = item.material;
    if (modalTag) modalTag.textContent = item.tag;
    if (modalTitulo) modalTitulo.textContent = item.titulo;
    if (modalDesc) modalDesc.textContent = item.desc;
    if (modalMaquina) modalMaquina.textContent = item.maquina;
    if (modalFresa) modalFresa.textContent = item.fresa;
    if (modalMatDetalhe) modalMatDetalhe.textContent = item.matDetalhe;
    if (modalTolerancia) modalTolerancia.textContent = item.tolerancia;
    if (modalYoutube) modalYoutube.href = item.youtube;
    if (modalWhatsapp) modalWhatsapp.href = item.whatsapp;

    modalCaso.classList.add('is-aberto');
    document.body.style.overflow = 'hidden';
  }

  function fecharModalCaso() {
    if (!modalCaso) return;
    modalCaso.classList.remove('is-aberto');
    document.body.style.overflow = '';
  }

  if (modalBtnFechar) modalBtnFechar.addEventListener('click', fecharModalCaso);
  if (modalOverlay) modalOverlay.addEventListener('click', fecharModalCaso);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalCaso && modalCaso.classList.contains('is-aberto')) {
      fecharModalCaso();
    }
  });

  // Botões de abrir ficha técnica dentro de cada card
  document.querySelectorAll('.btn-abrir-detalhe').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-caso'), 10);
      abrirModalCaso(isNaN(idx) ? 0 : idx);
    });
  });

  let currentIndex = 0; // Card central (índice 0 a 4)
  const totalCards = cards.length;

  // Atualiza as posições data-pos (-2, -1, 0, 1, 2)
  function renderDeck() {
    cards.forEach((card, index) => {
      let offset = index - currentIndex;

      // Wrap cíclico
      if (offset > 2) offset -= totalCards;
      if (offset < -2) offset += totalCards;

      card.setAttribute('data-pos', offset);

      // Acessibilidade
      if (offset === 0) {
        card.setAttribute('aria-hidden', 'false');
      } else {
        card.setAttribute('aria-hidden', 'true');
      }
    });

    if (numAtual) {
      numAtual.textContent = String(currentIndex + 1).padStart(2, '0');
    }
  }

  function nextCase() {
    currentIndex = (currentIndex + 1) % totalCards;
    renderDeck();
  }

  function prevCase() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    renderDeck();
  }

  if (btnNext) btnNext.addEventListener('click', nextCase);
  if (btnPrev) btnPrev.addEventListener('click', prevCase);

  // Clique no card: se for lateral, rotaciona; se já for o central, abre a ficha técnica
  cards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.casos-ir')) return;
      if (index !== currentIndex) {
        currentIndex = index;
        renderDeck();
      } else {
        abrirModalCaso(index);
      }
    });
  });

  // Suporte a swipe no palco do deck
  let startX = 0;
  let isDown = false;

  if (palco) {
    palco.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    palco.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) nextCase();
        else prevCase();
      }
    }, { passive: true });

    palco.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.clientX;
    });

    window.addEventListener('mouseup', (e) => {
      if (!isDown) return;
      isDown = false;
      const diff = startX - e.clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextCase();
        else prevCase();
      }
    });
  }

  renderDeck();

  /* ==========================================================================
     4. TECNOLOGIA ORBITAL (ACCORDION "SAIBA MAIS")
     ========================================================================== */
  const tecPontos = document.querySelectorAll('.tec-ponto');
  tecPontos.forEach(ponto => {
    const btnMais = ponto.querySelector('.tec-mais-btn');
    if (btnMais) {
      btnMais.addEventListener('click', () => {
        const isOpen = ponto.classList.contains('is-aberto');
        // Fecha outros se quiser ou alterna o atual
        tecPontos.forEach(p => {
          if (p !== ponto) {
            p.classList.remove('is-aberto');
            const b = p.querySelector('.tec-mais-btn');
            if (b) b.setAttribute('aria-expanded', 'false');
          }
        });
        if (isOpen) {
          ponto.classList.remove('is-aberto');
          btnMais.setAttribute('aria-expanded', 'false');
        } else {
          ponto.classList.add('is-aberto');
          btnMais.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  /* ==========================================================================
     5. FAIXA ARRASTÁVEL DE ESPECIFICAÇÕES MULTICAM
     ========================================================================== */
  const faixa = document.getElementById('a4-faixa');
  const a4Prev = document.getElementById('a4-prev');
  const a4Next = document.getElementById('a4-next');

  if (faixa && a4Next && a4Prev) {
    a4Next.addEventListener('click', () => {
      faixa.scrollBy({ left: 320, behavior: 'smooth' });
    });
    a4Prev.addEventListener('click', () => {
      faixa.scrollBy({ left: -320, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     6. JORNADA DE PRODUÇÃO (TROCA DE IMAGENS NAS ETAPAS)
     ========================================================================== */
  const jorPassos = document.querySelectorAll('.jor-passo');
  const jorImg = document.getElementById('jor-img-dinamica');
  const jorImages = [
    './Assets/multicam-router-cnc.jpg',
    './Assets/caso-fachada-acm.jpg',
    './Assets/hero-cnc-laser.jpg',
    './Assets/caso-letreiro-neon.jpg'
  ];

  jorPassos.forEach((passo, idx) => {
    passo.addEventListener('mouseenter', () => {
      jorPassos.forEach(p => p.classList.remove('is-ativo'));
      passo.classList.add('is-ativo');
      if (jorImg && jorImages[idx]) {
        jorImg.style.opacity = '0.5';
        setTimeout(() => {
          jorImg.src = jorImages[idx];
          jorImg.style.opacity = '1';
        }, 150);
      }
    });
  });

  /* ==========================================================================
     7. DÚVIDAS FREQUENTES (ACORDEÃO IDÊNTICO AO DO DOUTOR)
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-botao');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-aberto');

        // Fecha todos
        faqItems.forEach(i => {
          i.classList.remove('is-aberto');
          const b = i.querySelector('.faq-botao');
          if (b) b.setAttribute('aria-expanded', 'false');
        });

        // Alterna o atual
        if (!isOpen) {
          item.classList.add('is-aberto');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  /* ==========================================================================
     8. EFEITO DE CURSOR GLOW NO PAINEL ESCURO DE CONTATO
     ========================================================================== */
  const painelContato = document.getElementById('contato');
  const cursorGlow = document.getElementById('contato-cursor-glow');

  if (painelContato && cursorGlow) {
    painelContato.addEventListener('mousemove', (e) => {
      const rect = painelContato.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cursorGlow.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  /* ==========================================================================
     9. CONTADORES NUMÉRICOS ANIMADOS PROGRESSIVOS
     ========================================================================== */
  const contadores = document.querySelectorAll('[data-contar]');
  let contadoresIniciados = false;

  function animateCounters() {
    if (contadoresIniciados) return;
    const trigger = window.innerHeight * 0.85;

    contadores.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) {
        contadoresIniciados = true;
        const target = parseFloat(el.getAttribute('data-contar'));
        const prefixo = el.getAttribute('data-prefixo') || '';
        const sufixo = el.getAttribute('data-sufixo') || '';
        const duration = 1800;
        const startTime = performance.now();

        function step(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Easing easeOutQuart
          const ease = 1 - Math.pow(1 - progress, 4);
          const current = Math.floor(ease * target);

          if (target === 0) {
            el.textContent = `${prefixo}0.02${sufixo}`;
          } else {
            el.textContent = `${prefixo}${current}${sufixo}`;
          }

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            if (target > 0) {
              el.textContent = `${prefixo}${target}${sufixo}`;
            }
          }
        }
        requestAnimationFrame(step);
      }
    });
  }

  window.addEventListener('scroll', animateCounters, { passive: true });
  animateCounters();

  /* ==========================================================================
     10. SCROLL SUAVE PARA LINKS INTERNOS
     ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

});
