---
name: saas-web-security-owasp
description: Auditoria e implementação de segurança blindada para websites e aplicações SaaS baseada no OWASP Top 10. Implementa isolamento multi-tenant (Row-Level Security), proteção contra XSS, CSRF, SQLi, SSRF, headers HTTP seguros (CSP, HSTS), rate-limiting e práticas seguras de autenticação. Use para auditar, proteger ou criar websites e SaaS à prova de invasões.
---

# SaaS & Web Security Guardian (OWASP Top 10)

Esta skill guia o agente na aplicação de engenharia de segurança de padrão enterprise para qualquer website ou plataforma SaaS desenvolvida, blindando a aplicação contra ataques, vazamento de dados e vulnerabilidades comuns.

---

## Quando Utilizar:
- "Revise a segurança do meu site ou SaaS"
- "Implemente proteção contra ataques OWASP"
- "Configure headers de segurança e CSP"
- "Implemente autenticação segura com isolamento de tenant"
- "Audite formulários contra XSS e SQL Injection"

---

## 4 Camadas de Proteção Mandatórias:

### 1. Camada de Validação & Higienização de Dados:
- Todos os endpoints de API e formulários devem validar dados de entrada com **Zod**.
- Todo HTML de terceiros ou texto enriquecido deve ser desinfetado com **DOMPurify**.
- Nenhuma query ao banco deve ser montada via concatenação de strings (uso estrito de ORM parametrizado).
- Detalhes em [owasp-top-10-web-defense.md](./references/owasp-top-10-web-defense.md).

### 2. Camada de Autenticação & SaaS Multi-Tenant:
- Implementação de Row-Level Security (RLS) no banco de dados.
- Cookies de sessão estritamente configurados com `HttpOnly; Secure; SameSite=Strict`.
- Rotação de Refresh Tokens com detecção de reuso.
- Rate-limiting em rotas públicas (Login, Register, Contact, Reset Password) via Redis/Upstash.
- Detalhes em [saas-multitenancy-auth-hardening.md](./references/saas-multitenancy-auth-hardening.md).

### 3. Camada de Rede & Headers de Segurança:
- Adicione headers de segurança em produção (HSTS, CSP, X-Frame-Options, X-Content-Type-Options).
- Detalhes em [security-headers-csp-config.md](./references/security-headers-csp-config.md).

### 4. Camada de Auditoria de Segredos & Dependências:
- Verificação obrigatória para garantir que chaves privadas (`STRIPE_SECRET_KEY`, tokens de API) nunca sejam expostas no bundle client-side (sem prefixo `NEXT_PUBLIC_` para segredos).
- `.env` e `.env.local` obrigatoriamente listados no `.gitignore`.

---

## Checklist de Segurança Pré-Deploy:
- [ ] Formulários validados com tipagem e schemas no backend?
- [ ] Endpoints protegidos por rate-limiting contra brute force?
- [ ] Sessões armazenadas em cookies HttpOnly com SameSite=Strict?
- [ ] Queries com isolamento estrito de tenant (RLS ou middleware)?
- [ ] Headers HSTS, X-Frame-Options e CSP ativos?
- [ ] Nenhuma credencial ou chave privada vazada no código-fonte?
