# Configuração de Headers de Segurança HTTP & Content Security Policy (CSP)

Headers essenciais que elevam o score de segurança do site para nota A+ no Mozilla Observatory e SecurityHeaders.com.

---

## 1. Headers Recomendados (Next.js / Vercel / Nginx)

```javascript
// Exemplo para next.config.js
const securityHeaders = [
  // Força HTTPS por 2 anos com inclusão de subdomínios e preload
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  // Impede que o site seja aberto em iframes externos (Proteção Clickjacking)
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  // Bloqueia interpretação incorreta de MIME types
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // Limita o envio da URL de origem em links externos
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  // Bloqueia acesso indevido a hardware (câmera, microfone, geolocalização não autorizada)
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
  },
  // Content Security Policy (CSP)
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com data:;
      img-src 'self' data: https: blob:;
      connect-src 'self' https:;
      frame-ancestors 'none';
    `.replace(/\s{2,}/g, ' ').trim()
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
```
