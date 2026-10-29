# Defesa Prática Contra o OWASP Top 10 em Websites e Aplicações Web

Guia técnico de mitigação e código seguro para as vulnerabilidades mais críticas na web.

---

## 1. Broken Access Control (Controle de Acesso Quebrado & IDOR)
**Vulnerabilidade:** Usuário altera `id=123` para `id=124` na URL ou API e acessa dados de outro usuário/tenant.
**Correção Obrigatória:**
```typescript
// NUNCA confie apenas no ID vindo do cliente:
// RUIM:
const invoice = await db.invoices.findUnique({ where: { id: params.invoiceId } });

// SEGURO: Sempre valide o ID do usuário/tenant logado na sessão:
const session = await getSession(req);
const invoice = await db.invoices.findFirst({
  where: {
    id: params.invoiceId,
    tenantId: session.tenantId, // Isolamento estrito de tenant
    userId: session.userId
  }
});
if (!invoice) throw new UnauthorizedError("Recurso não encontrado ou acesso negado");
```

---

## 2. Injeção (SQL / NoSQL / Command Injection)
**Correção Obrigatória:**
- Utilize ORMs com queries parametrizadas preparadas (Prisma, Drizzle, Kysely).
- Nunca concatene strings em queries SQL ou comandos de shell.
- Valide e tipifique todos os inputs com schemas de runtime (Zod):
```typescript
import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  phone: z.string().trim().regex(/^\+?[0-9\s-]{8,20}$/),
  message: z.string().trim().min(10).max(2000)
});
```

---

## 3. Cross-Site Scripting (XSS)
**Correção Obrigatória:**
- Nunca renderize HTML bruto não higienizado (`dangerouslySetInnerHTML` ou `element.innerHTML`).
- Se precisar renderizar HTML formatado (ex: post de blog), use sempre sanitização rigorosa via **DOMPurify**:
```typescript
import DOMPurify from 'isomorphic-dompurify';
const cleanHtml = DOMPurify.sanitize(userProvidedContent, {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'li'],
  ALLOWED_ATTR: ['href', 'target', 'rel']
});
```

---

## 4. Cross-Site Request Forgery (CSRF) & SameSite Cookies
**Correção Obrigatória:**
- Armazene tokens de autenticação exclusivamente em cookies com:
  `HttpOnly; Secure; SameSite=Strict; Path=/`
- Em mutações de estado (POST, PUT, DELETE), valide headers customizados (`X-Requested-With` ou token CSRF anti-forgery).

---

## 5. Server-Side Request Forgery (SSRF)
**Vulnerabilidade:** A aplicação baixa imagens ou faz scraping de URLs informadas pelo usuário e pode ser induzida a acessar `http://localhost`, redes internas (`10.0.0.0/8`, `192.168.0.0/16`) ou metadados de nuvem (`http://169.254.169.254`).
**Correção Obrigatória:**
- Bloqueie resolução de DNS para faixas privadas/locais antes de disparar requisições externas.
