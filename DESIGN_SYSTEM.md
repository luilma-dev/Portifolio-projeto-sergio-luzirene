# Design system — Portfólio de transporte escolar

> Documento em construção. Reúne as referências e decisões visuais da conversa e será atualizado conforme chegarem novas ideias.

## 1. Contexto

Site estilo portfólio para apresentar o trabalho do tio do responsável pelo projeto, que atua com condução escolar.

Nesta etapa, o foco é definir a direção visual antes de implementar o site.

## 2. Direção visual escolhida

- Visual simples, limpo e bem organizado.
- Azul como cor predominante, acompanhado de branco e tons mais claros de azul.
- Grid de linhas finas e discretas ao fundo, inspirado na segunda referência.
- O fundo azul com grid cobre a hero; a faixa superior de navegação tem fundo branco de ponta a ponta, conforme o refinamento mais recente.
- Hero de ponta a ponta da tela, sem margens brancas laterais e sem cantos arredondados; o conteúdo mantém respiro interno.
- Topo sem a logo provisória de transporte escolar.
- Imagem da van integrada à hero por uma transição em degradê, sem moldura de cartão.
- Hero sem os textos acessórios superiores, cartão sobre a van e faixa inferior de chamada. Manter título, apresentação e botão principal.
- Seção de cuidado sem o rótulo “01 / O que importa”; o título “O trajeto é curto. O cuidado é grande.” abre a seção à esquerda, com o parágrafo de apoio à direita no desktop.
- Os três itens de cuidado ficam diretamente sobre o fundo branco, sem painéis, bordas ou números. Usar ícones oficiais Phosphor em estilo duotone (Clock, Chats Circle e Map Pin Area), em círculos azul claro de 64 px. Hover sutil apenas no círculo, respeitando movimento reduzido. SVGs e licença MIT salvos em `assets/icons/`.
- Apresentação do motorista sem as etiquetas “Quem está ao volante”, “Retrato ilustrativo” e “02 / Gente de verdade”. A natureza ilustrativa da imagem permanece no texto alternativo e na documentação. Texto de apoio com 16 px, introdução com 18 px, contraste maior e espaçamento confortável. Ação “Vamos nos conhecer” em botão azul com ícone Phosphor de conversa integrado.
- A antiga seção de primeiro contato foi substituída pela localidade: “Pelos caminhos de Belém.” Texto e seleção de bairros à esquerda, mapa à direita; uma coluna no celular.
- Mapa de Belém do Pará com base OpenStreetMap, atribuição visível, pontos aproximados e arcos ilustrativos para Nazaré, Umarizal, Pedreira, Marco, São Brás e Batista Campos. Bairros servem à exploração visual; cobertura real permanece sob consulta.
- Arcos com fluxo contínuo, destaque por seleção de bairro e botão de pausa. Respeitar movimento reduzido, exibindo conexões estáticas. Nenhuma geolocalização do visitante é solicitada.
- Mapa circular com sombra suave, sem cartão, borda ou faixas de cabeçalho e rodapé. Manter atribuição OpenStreetMap discreta na base do círculo. Controle de pausa e indicação de conexões ilustrativas ficam junto ao conteúdo à esquerda.
- Conteúdo da localidade com introdução de 20 px e texto de 17 px; seletores de bairro com 14 px e área confortável de toque. Botão principal com texto de 15 px e ícone integrado, alinhado ao controle circular de pausa com símbolos SVG. Mensagem do bairro aparece apenas após seleção.
- Texto abaixo do mapa em duas linhas, sem ponto separador: “O mapa ilustra possíveis conexões pela cidade” e “Consulte o atendimento para o seu bairro”.
- Perguntas frequentes substituídas por três avaliações fictícias, solicitadas pelo usuário para ilustrar o layout. Sem painéis, bordas ou fundo nos depoimentos; estrelas azuis, relato e fotos circulares de 56 px com sombra suave. Sem o rótulo individual “Perfil ilustrativo”; manter o aviso geral de avaliações fictícias abaixo da seção. Substituir por relatos reais autorizados antes da publicação. Navegação atualizada para “Avaliações”.
- Cabeçalho das avaliações com botão azul “Deixar avaliação” no lugar do parágrafo de apoio. Botão apenas demonstrativo, sem ação, identificado com `aria-disabled`.
- Grid da hero com deslocamento diagonal lento, contínuo e em loop de 24 segundos. Animar apenas a camada decorativa com `transform`; respeitar a preferência por movimento reduzido.
- Espaçamento generoso, com respiro entre os elementos.
- Hierarquia clara para facilitar a leitura.
- Van escolar branca como elemento principal da primeira seção do site.
- Ambiente urbano e aberto ao fundo da van.
- Presença humana no site, com uma pessoa em PNG para ilustrar o layout e aproximar o serviço das famílias.

## 3. Referência 1 — Van escolar / Sprinter

### O que aproveitar

A imagem enviada apresenta uma van escolar branca em destaque, com faixa amarela de identificação e arquitetura urbana ao fundo.

A preferência expressa foi usar essa ideia na **hero**, a seção de abertura do site: uma van branca em um ambiente urbano, com espaço aberto ao redor.

### Aplicação no projeto

- Dar protagonismo à van escolar na composição.
- Manter o cenário urbano como contexto visual.
- Preservar respiro ao redor do veículo.

### Proposta inicial de composição, a validar

Reservar uma área livre para o título, uma breve apresentação e um botão de contato, sem prejudicar a visibilidade da van.

A marca Mercedes-Benz, os textos do anúncio e o recorte diagonal não foram definidos como requisitos do projeto. Modelo do veículo e imagem final ainda serão escolhidos.

## 4. Referência 2 — Peça azul / Heron

### O que aproveitar

As preferências expressas foram as **cores**, o **espaçamento** e a forma como os elementos estão organizados: uma composição simples e limpa.

### Leitura visual da referência

- Azul predominante no fundo.
- Branco e azul claro em textos e detalhes.
- Título com destaque e hierarquia evidente.
- Poucos elementos, bem distribuídos.
- Respiro entre os blocos de conteúdo.
- Grid sutil ao fundo, com linhas horizontais e verticais de baixo contraste — inclusão solicitada após observar novamente a referência.
- Tipografia com formas suaves como possível direção para exploração.

### Aplicação no projeto

Combinar a linguagem de cores e a organização desta referência com a van escolar da primeira referência.

Incluir o grid de fundo da referência na linguagem visual do site. Os textos, a marca e os demais elementos gráficos da peça não foram definidos como requisitos. A fonte exata também permanece em aberto.

### Grid de fundo — direção escolhida

- Formar uma malha com linhas horizontais e verticais finas, regulares e bem sutis.
- Sobre o azul, usar linhas em um tom próximo ou em branco com baixa opacidade.
- Manter o grid como textura de fundo, sem disputar atenção com os textos, a van ou o retrato.
- Preservar a leitura e o aspecto simples e limpo da composição.
- Definir tamanho das células, opacidade e seções de aplicação na etapa de composição visual.

Como proposta de implementação, criar o grid em CSS para manter as linhas nítidas em diferentes tamanhos de tela. O grid é decorativo e não representa uma tabela ou conteúdo interativo.

### Refinamento da hero solicitado após a primeira versão

A faixa de navegação e o botão superior ficam sobre fundo branco de ponta a ponta, com textos escuros e botão em azul. Essa decisão substitui a integração anterior do menu ao fundo azul. Manter o cabeçalho sem a logo provisória. A hero abaixo continua azul com grid e sem margens brancas laterais. A foto da van ocupa a largura da seção, sem margens laterais ou cantos próprios, com degradê nas bordas superior e inferior para suavizar a passagem entre a fotografia e o fundo azul. A van continua visível como fotografia, preservando o cenário urbano.

## 5. Cores — direção atual

| Papel | Direção | Status |
| --- | --- | --- |
| Cor principal | Azul inspirado na segunda referência | Direção escolhida; tom exato a definir |
| Cor de apoio | Azul claro | Direção escolhida; tom exato a definir |
| Base e contraste | Branco | Direção escolhida; distribuição a definir |
| Identificação do veículo | Faixa amarela da van escolar | Parte da referência do veículo; uso na interface a definir |

Ainda não há códigos HEX ou combinações de contraste aprovados.

## 6. Espaçamento e organização

- Priorizar áreas de respiro entre títulos, textos, imagens e ações.
- Usar alinhamentos consistentes para manter a composição organizada.
- Evitar excesso de informação disputando atenção no mesmo bloco.
- Fazer a hierarquia visual conduzir a leitura.

Valores de espaçamento, larguras de conteúdo e regras para diferentes tamanhos de tela serão definidos posteriormente.

## 7. Referência 3 — Presença humana / Retrato do profissional

### O que aproveitar

A referência mostra um profissional sorrindo em destaque. O que agradou foi a sensação de que existe uma pessoa real por trás do serviço, criando proximidade e confiança.

### Aplicação no projeto

- Incluir uma pessoa em PNG, preferencialmente com fundo transparente, para ilustrar a composição inicial do site.
- Buscar uma expressão natural, simpática e acolhedora.
- Integrar o recorte à paleta azul e branca e manter respiro para o texto.
- Prever a substituição da imagem ilustrativa por uma foto do próprio profissional quando estiver disponível.

### Proposta de posicionamento, a validar

Usar o retrato em uma seção de apresentação do motorista, acompanhando um texto breve sobre ele e seu trabalho com transporte escolar. A posição final ainda será definida, mantendo a van como elemento principal da hero.

A pessoa usada provisoriamente é ilustrativa; sua identidade não deve ser apresentada como a do tio. O uniforme de entregador, as caixas, os textos e o grafismo verde da referência não fazem parte da direção escolhida.

## 8. Definições em aberto

- Nome apresentado no site e identidade do serviço.
- Imagem final e modelo da van.
- PNG ilustrativo da pessoa e foto definitiva do profissional.
- Paleta com códigos de cor.
- Família tipográfica, tamanhos e pesos.
- Estrutura das demais seções.
- Textos e informações reais do serviço.
- Estilo de botões, ícones e demais componentes.
- Composição para celular e desktop.

## 9. Próximas referências

Acrescentar aqui as próximas ideias do usuário e incorporá-las às seções correspondentes, mantendo explícito o que foi escolhido e o que ainda é proposta.

## 10. Primeira implementação — escolhas para avaliação

Estas escolhas foram aplicadas à primeira versão local e podem ser refinadas com o usuário:

| Token | Valor aplicado |
| --- | --- |
| Azul principal | `#0861D9` |
| Azul escuro | `#064DAB` |
| Azul claro | `#BFDCFF` |
| Texto principal | `#14263E` |
| Texto secundário | `#526277` |
| Fundo suave | `#F4F7FB` |
| Fonte | DM Sans, com Arial como alternativa |
| Largura do conteúdo | Até 1180 px |
| Grid | 88 px no desktop e 66 px no celular; linhas brancas com baixa opacidade |
| Espaçamento entre seções | 144 px no desktop e 96 px no celular |

Estrutura aplicada: hero, cuidado no trajeto, apresentação do motorista, primeiro contato, dúvidas e contato pelo WhatsApp.

Imagens ilustrativas criadas com a ferramenta integrada Imagegen e salvas no projeto:

- `assets/van-escolar.png`: fotografia de van branca com faixa amarela em praça urbana, com arquitetura contemporânea e luz natural.
- `assets/motorista.png`: retrato fictício de homem de aproximadamente 50 anos, sorrindo, com camisa polo azul e fundo transparente.

Os prompts completos estão em `assets/IMAGENS.md`. Nome, WhatsApp e informações de atendimento reais ainda precisam ser preenchidos. Não foram adicionados depoimentos, certificações ou números de experiência sem informação do usuário.

Refinamento de respiro: itens de cuidado e avaliações com até 64 px entre colunas no desktop; no celular, 48 px entre itens de cuidado e 52 px entre avaliações. Cabeçalho das avaliações separado dos relatos por 64 px no desktop e 44 px no celular.

Na apresentação do motorista, incluir um destaque grande “+15 anos de experiência”, com contagem de 0 a 15 ao entrar na tela, uma única vez. Em movimento reduzido, mostrar o valor final diretamente. O número 15 foi sugerido pelo usuário para o layout e deve ser confirmado com o profissional; é configurável em `config.js`, no campo `experienciaAnos`.

Tipografia do destaque de experiência: “anos” com 38–48 px, peso 500 e espaçamento entre letras mais fechado; “de experiência” em linha própria, com 13–14 px e cor secundária. Manter a composição alinhada ao número, sem quebras no subtítulo.

Após as avaliações, incluir uma seção exclusivamente visual com sete molduras Polaroid vazias. Inspirada na referência do usuário: papel branco quente, borda inferior mais larga, sombras suaves, sobreposição e rotações variadas. Sem títulos, legendas, ícones ou fotos nesta etapa. Reservar os espaços internos com tons neutros suaves. Distribuição horizontal no desktop e composição em várias fileiras no celular. As fotos futuras serão do profissional com as crianças.

Refinamento das Polaroids: reduzir a largura para aumentar a separação. No hover, manter rotação e ordem de sobreposição fixas, com elevação de apenas 4 px e transição suave de 400 ms. Aplicar hover somente em dispositivos com ponteiro preciso, evitando o salto de camada da versão anterior.

Respiro da galeria: 70 px acima e 180 px abaixo no desktop; 44 px acima e 120 px abaixo no celular, além do espaço da seção anterior. Polaroids menores e mais espalhadas, com maior variação vertical, mantendo sete molduras e o hover discreto.

Abaixo de todas as Polaroids, incluir apenas a frase grande e centralizada “A união faz a força”, com aspas visíveis. As palavras “união” e “força” ficam em azul; o restante usa a cor principal de texto.

Ao lado da frase, usar o símbolo vetorial próprio `assets/uniao.svg`: cinco figuras geométricas em disposição circular, em azul, com um elo circular azul claro ao fundo. A referência do Pinterest serve como conceito de união; o arquivo enviado não foi copiado ou incorporado ao site. Compor símbolo à esquerda e frase à direita, com escala adaptada ao celular.

A frase da galeria aparece e desaparece com fade de 1800 ms ao entrar e sair da área central da tela. O efeito repete nas duas direções de rolagem, sem deslocar o layout. Manter o texto visível sem JavaScript ou com preferência por movimento reduzido.

A frase com o símbolo fica fixa no centro da tela durante um breve trecho da rolagem, usando posicionamento sticky dentro de uma área de 105 svh no desktop e 95 svh no celular. A rolagem continua natural; o efeito cria uma pausa visual para leitura. Desativar a fixação em movimento reduzido.

Aplicar o fade à composição inteira: símbolo de união e frase aparecem e desaparecem juntos, com o mesmo tempo e a mesma pausa visual durante a rolagem.

Navegação superior: links com 16 px e peso 550 no desktop, 14 px no celular, áreas de toque de pelo menos 44 px e maior separação. Botão de contato com fundo azul muito claro, texto azul escuro de 15 px e borda azul suave, seguindo a hierarquia visual das demais ações.

Chamada final de contato com cantos retos em todas as telas. Texto de apoio com 17 px no desktop e 16 px no celular, branco de alto contraste; botão com fonte de 16/15 px. Remover o texto “Contato direto com o motorista”.

Na chamada final, remover o rótulo “O próximo passo começa com um olá”. Apresentar bairro, escola e turno em uma lista horizontal adaptável, com ícones Phosphor de localização, formação e relógio em círculos translúcidos. Manter a frase de apoio abaixo.

Refinamento final da chamada de contato: remover a lista de bairro, escola e turno com ícones e a frase de apoio. Manter apenas o título e o botão de WhatsApp.

Rodapé com nome em 21 px, localidade Belém do Pará abaixo, frase de apoio em 14 px e entrelinha confortável. Link “Voltar ao início” com ícone Phosphor de seta para cima em círculo azul claro, foco visível e área de toque confortável. Layout adaptado ao celular.

Nome do rodapé atualizado para “Condução escolar”. Setas diagonais dos botões de contato envolvidas em círculos azul claro, com SVG centralizado e espaçamento consistente.

## Animações de entrada durante a rolagem

Títulos, itens de cuidado, apresentação do motorista, localidade, avaliações, galeria, contato e rodapé aparecem com fade e elevação suave de 24 px (16 px no celular), em 900 ms. Itens de cuidado e avaliações entram com intervalo de 100 ms entre si. Executar uma vez por carregamento, mantendo o conteúdo visível ao voltar pela página. A frase da união mantém seu efeito repetido e sua fixação próprios.

Usar IntersectionObserver e translação individual para preservar os efeitos existentes. Sem bloqueio de rolagem ou alterações de layout. Mostrar todo o conteúdo sem JavaScript, sem suporte ao observador ou com movimento reduzido; foco de teclado também revela o conteúdo imediatamente.

### Refinamento de movimento

Substituir a entrada uniforme por ritmos conforme o conteúdo: títulos revelados com máscara, textos com deslocamento curto e fade, foto do motorista com aproximação interna suave, mapa com escala de 0,96 a 1 e Polaroids entrando individualmente. Atrasos entre elementos de 65–90 ms, reduzidos no celular. Botões e rodapé entram apenas com fade. Preservar as sombras, as rotações e a ordem de sobreposição das Polaroids. A frase de união mantém seu efeito independente. Nenhum efeito bloqueia a rolagem.

## Responsividade consolidada

Refinamento solicitado após a prévia no celular: ocultar o cabeçalho com navegação e botão superior até 700 px, iniciando a página diretamente pela hero. Manter o cabeçalho no desktop.

Ordem atualizada: hero, apresentação do motorista com foto e experiência, seção “O trajeto é curto. O cuidado é grande.”, localidade, avaliações, galeria e contato. Navegação do desktop acompanha essa ordem.

- Margens fluidas, com 16 px por lado nas telas menores e até 48 px no desktop.
- Até 700 px: links do menu em uma linha e contato em uma segunda linha de largura total. Botões principais com pelo menos 48 px de altura.
- Até 900 px: apresentação do motorista e localidade passam para uma coluna. Foto limitada à largura disponível, com proporção própria; mapa circular centralizado.
- Até 700 px: títulos fluidos de 31–44 px, texto de apoio de 15–18 px e destaque de experiência proporcional à tela. Itens de cuidado com ícone lateral e avaliações em uma coluna.
- Galeria mantém sete Polaroids e distribuição em várias fileiras. Sua altura acompanha a largura, evitando o espaço fixo da versão anterior.
- Frase da união mantém a pausa de leitura em telas verticais; em telas de até 500 px de altura, a composição segue o fluxo normal para funcionar no celular deitado.
- Contato e rodapé reorganizados em uma coluna, com botões amplos. Efeitos de hover não deslocam elementos em dispositivos de toque.
- Van e motorista com variantes WebP e `srcset`, mantendo os PNGs originais no projeto.

Na seção de Belém, reduzir o espaço superior para 56 px no desktop e 24 px no celular; no celular, finalizar a seção de cuidado anterior com 40 px de espaço inferior. Remover o botão de pausa junto ao contato; o mapa mantém a animação e respeita movimento reduzido.

Rodapé sem o botão “Voltar ao início”. No desktop, identidade à esquerda e mensagem à direita; no celular, composição centralizada, com nome de 22 px, localidade de 14 px e mensagem em duas linhas com hierarquia de 16/14 px.

Hero ampliada no celular: título de 44–76 px conforme a largura, texto de 18 px e botão principal com largura total, fonte de 16 px e altura mínima de 60 px. Foto da van em proporção 4:3 para dar mais presença à imagem.

Simplificação da hero: remover o parágrafo de apresentação e o botão “Converse sobre o trajeto”, mantendo apenas o título e a imagem da van.

Transição superior da foto da van com sobreposição gradual do mesmo azul da hero, chegando a transparente em 40% da imagem. Manter o fade inferior e reduzir a distância entre título e imagem no celular para uma composição contínua.

Conexão entre fotos no celular: remover o espaço claro entre a hero e o retrato do motorista. O painel azul do retrato ocupa toda a largura, sem cantos arredondados, em continuidade com o fade azul inferior da van. O texto de apresentação abaixo mantém margens laterais próprias.

Para eliminar a emenda e sincronizar o movimento no celular, hero e apresentação ficam dentro de `.opening-scene`, com uma única camada de grid animado por trás das duas fotos. Desativar os grids separados dessas áreas; manter o fundo claro somente a partir do texto do motorista.

Destacar a palavra “caminho,” na hero sobre faixa amarelo-alaranjada `#FFBF00`, inspirada na faixa da van,, estendida até as bordas laterais da página. A palavra usa azul escuro para contraste. A faixa acompanha a linha ocupada pela palavra, inclusive quando o título quebra no celular.
