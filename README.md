# Comar Móveis Planejados — Landing Page

Landing page de conversão para a **Comar Móveis Planejados**, focada em gerar
orçamentos e contatos qualificados (WhatsApp + formulário).

## Stack

HTML + CSS moderno + JavaScript vanilla — **sem build**. É só abrir o arquivo.

## Como rodar

Abra `index.html` no navegador, ou sirva localmente:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Estrutura

- `index.html` — marcação semântica de todas as seções
- `styles.css` — design system (paleta madeira/grafite/verde), mobile first
- `script.js` — menu mobile, reveal no scroll, FAQ, formulário → WhatsApp

## Seções

1. Hero com CTA principal
2. Por que móveis planejados
3. Benefícios
4. Ambientes planejados (portfólio)
5. Como funciona o processo (timeline)
6. Diferenciais
7. Prova social / depoimentos
8. FAQ
9. CTA final + formulário de orçamento

## Antes de publicar — ajustes necessários

- **WhatsApp:** substituir `5500000000000` (DDI+DDD+número) em `index.html` e
  `script.js`. Busque por `5500000000000`.
- **Telefone:** ajustar o link `tel:+550000000000` no botão "Ligar agora".
- **Imagens:** atualmente usam Unsplash (placeholder). Troque pelas fotos reais
  dos projetos da Comar para máximo impacto.
- **Endereço/horário** já preenchidos: Rua Ramiro Barcelos, 910 · Seg–Sex 09h–19h · Sáb 09h–18h.
