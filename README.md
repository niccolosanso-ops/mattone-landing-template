# Dimora Plus — Landing agenzia (template Mattone)

## Personalizzare per un cliente

Modifica SOLO `lib/config.ts`:
- Nome agenzia, città, agente
- Colore accent (hex)
- Numeri stats
- Testimonianze (2-3)
- **ghlFormEmbedHtml** → sostituisci con iframe reale del form GHL del cliente
- Contatti (telefono, email)

## Deploy

Push su un repo GitHub → import su Vercel → deploy automatico.
URL live: `nomeagenzia.vercel.app`

## Struttura pagine

- `/` — landing (optin) con form GHL embed
- `/grazie` — thank you page (il form GHL deve fare redirect qui dopo submit)

## Test locale

```bash
npm install
npm run dev
```
Apri http://localhost:3000
