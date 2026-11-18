# Portfólio de condução escolar

Primeira versão local em HTML, CSS e JavaScript, sem dependências de execução.

## Rodar

Requer Node.js. Execute `npm run dev` e abra http://localhost:5173.

Para conferir no celular conectado ao mesmo Wi-Fi, execute `npm run dev:lan` e abra `http://IP-DO-COMPUTADOR:5174` no navegador do celular. O servidor precisa permanecer aberto no computador. Se o Windows pedir acesso de rede, permita para redes privadas.

## Preparar para publicação

1. Preencha o nome e o WhatsApp real em `config.js` (DDI 55, DDD e número).
2. Atualize a apresentação do profissional, as escolas, os bairros e as condições reais do serviço em `index.html`.
3. Substitua as imagens ilustrativas em `assets/` por fotos autorizadas, quando disponíveis. Atualize os textos alternativos e as legendas.
4. Rode `npm run check` e `npm run build`. A pasta `dist/` contém o site estático.

O botão do WhatsApp só abre uma conversa quando há um número brasileiro configurado. Nenhum dado é enviado pelo site e nenhum cadastro é armazenado.

## Estrutura

- `DESIGN_SYSTEM.md`: referências e decisões visuais.
- `index.html`: seções, conteúdo e navegação.
- `styles.css`: tokens, grid decorativo e layout responsivo.
- `config.js`: dados do profissional e contato.
- `app.js`: comportamento do contato.
- `assets/`: imagens e favicon.

As fontes usam DM Sans via Google Fonts, com Arial como alternativa quando não há conexão.

O layout tem regras próprias para celulares pequenos, celulares maiores e tablets. A apresentação e o mapa usam uma coluna até 900 px; o menu, as avaliações e os controles recebem ajustes até 700 px e 359 px. A pausa da frase é simplificada em telas baixas, como celular deitado. Van e retrato usam WebP responsivo com `srcset`; os PNGs originais foram preservados.

## Mapa de Belém

A seção de localidade usa imagens de mapa do OpenStreetMap, carregadas pela internet e com atribuição visível. As conexões animadas são ilustrativas e os pontos de bairro são aproximados; não representam rotas viárias ou cobertura confirmada. Os botões destacam os bairros, e a animação pode ser pausada. A preferência por movimento reduzido é respeitada.

Os nomes dos bairros foram conferidos nas fontes municipais: [Mapas digitais da CODEM](https://prefeitura.belem.pa.gov.br/servicos/mapas-digitais-de-codem/) e [Escolas municipais](https://educacao.belem.pa.gov.br/escolas-municipais/). Confirme os bairros atendidos com o profissional antes da publicação.
