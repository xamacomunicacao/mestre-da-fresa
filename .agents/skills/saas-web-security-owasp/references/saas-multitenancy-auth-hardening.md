# Arquitetura de Segurança para SaaS Multi-Tenant & Autenticação de Alto Nível

Estratégias de isolamento de dados e autenticação para plataformas SaaS e sites de clientes.

---

## 1. Isolamento de Dados Multi-Tenant com Row-Level Security (RLS)

No PostgreSQL / Supabase, o isolamento a nível de linha garante que nenhuma query possa vazar dados de outro cliente, mesmo se o desenvolvedor esquecer um `WHERE tenant_id = ...`:

```sql
-- Ativar RLS na tabela
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

-- Política de isolamento estrito baseada no tenant da sessão
CREATE POLICY tenant_isolation_policy ON customers
  AS RESTRICTIVE
  FOR ALL
  TO authenticated
  USING (tenant_id = current_setting('app.current_tenant_id', true)::uuid);
```

---

## 2. Autenticação Moderna e Rotação de Tokens (JWT + Refresh Tokens)

1. **Access Token (Vida Curta - 15 minutos)**:
   - Armazenado na memória do cliente ou cookie seguro.
2. **Refresh Token (Vida Média - 7 a 30 dias)**:
   - Armazenado em cookie `HttpOnly`, `Secure`, `SameSite=Strict`.
   - Salvo em tabela no banco com hash SHA-256 e status `revoked: boolean`.
   - **Mecanismo de Reuso de Token (Breach Detection)**: Se um refresh token já consumido for reenviado, invalide imediatamente toda a árvore de sessões do usuário.

---

## 3. Rate Limiting contra Ataques de Força Bruta e DoS

Proteja endpoints de login, recuperação de senha, formulários de contato e APIs de pagamento usando rate limiting por IP e por identificador de usuário (ex: Upstash / Redis ou Leaky Bucket):

```typescript
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '60 s'), // Máximo 5 tentativas por minuto para login
  analytics: true
});

export async function checkRateLimit(identifier: string) {
  const { success, limit, remaining, reset } = await ratelimit.limit(identifier);
  if (!success) {
    throw new Error('Muitas tentativas. Por favor, aguarde alguns minutos antes de tentar novamente.');
  }
}
```

---

## 4. Proteção de Webhooks Externos (Stripe / Gateways)
Sempre valide a assinatura criptográfica (`stripe-signature` com segredo do webhook) usando timing-safe compare para evitar Timing Attacks:
```typescript
import crypto from 'crypto';

export function verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');
    
  return crypto.timingSafeEqual(
    Buffer.from(signature, 'utf8'),
    Buffer.from(expectedSignature, 'utf8')
  );
}
```
