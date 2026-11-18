# Verificação da hero fotográfica

## Referência e evidências

- Fonte visual: referência mobile anexada pelo usuário nesta conversa, 236 × 528 pixels. Trata-se de uma adaptação ao transporte escolar e à tipografia existente, conforme solicitado.
- Estado: início da página, menu fechado, imagem carregada.
- Implementação mobile: `output/qa/hero-mobile.png`, viewport e imagem de 390 × 844, deviceScaleFactor 1.
- Implementação desktop: `output/qa/hero-desktop.png`, viewport e imagem de 1280 × 900, deviceScaleFactor 1.
- A referência é uma captura reduzida; a comparação é de composição e proporções da hero. Não há uma especificação de viewport CSS para a captura de origem.
- Prévia interna indisponível por falha de conexão do ambiente. Evidências renderizadas em Chrome headless, com requisições locais interceptadas; nenhum servidor foi iniciado.

## Superfícies verificadas

- Tipografia: DM Sans existente, peso 500 no título, três linhas, espaçamento ajustado à tela. Texto e amarelo do projeto preservados, em lugar da fonte e do verde da referência.
- Layout: fotografia ocupa a hero inteira; cabeçalho sobreposto, título central, dois botões empilhados. A pessoa começa na seção seguinte, sem círculo ou espaço azul entre as imagens.
- Cores: amarelo existente para a palavra central e ação principal, branco para título e ação secundária; sobreposição escura para leitura sobre a fotografia.
- Imagens: paisagem fotográfica realista, van ao fundo, sem recorte transparente nem animação de entrada. Fonte vertical para mobile e fotografia horizontal original para desktop. Corte lateral intencional, semelhante à referência.
- Conteúdo: “Um bom caminho, todos os dias.”, “Consultar trajeto” e “Conhecer o motorista”; nenhuma promessa de disponibilidade adicionada.
- Detalhes: cabeçalho, texto dos botões e contornos do veículo foram inspecionados no render mobile em tamanho integral.

## Histórico de comparação

1. P2: a primeira composição mobile deixava a van abaixo do conjunto de título e ações. Evidência anterior: captura `hero-390.png` no diretório temporário de verificação.
2. Correção: reenquadramento vertical da foto no mobile; a van passa a ficar atrás das ações centrais. Evidência posterior: `output/qa/hero-mobile.png`.
3. Nova inspeção: cabeçalho, título, ações e imagem permanecem legíveis, sem sobreposição entre controles ou rolagem horizontal. Não restam diferenças P0/P1/P2 dentro da adaptação solicitada.

## Verificações funcionais

- Larguras de 236, 320, 390, 844 e 1280 px: sem overflow horizontal.
- Menu mobile abre, fecha com Escape e fecha ao escolher um link.
- Ações principais levam às seções de contato e apresentação do motorista.
- Console sem erros de execução.
- `npm run check` e `npm run build`: concluídos.

## Limites

- Não foi realizado teste em aparelho físico.
- O visual foi adaptado às cores, ao texto e à fonte existentes, em vez de copiar a marca automotiva da referência.

final result: passed
