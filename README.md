# BED e EQD2

Identificador: `bed-e-eqd2`. Pacote independente da interface ELUCENIA, para navegador e Node.js.

## Situação

- Revisão: **restricted**. A saída converte dose de radioterapia por modelo biológico simplificado, aceita até 30 Gy/fração e não modela tempo, reparo ou recuperação. Requer revisão de física médica por cenário antes de uso no acervo como cálculo assistencial.
- Execução: **desativada; o adaptador retorna REVIEW_REQUIRED**.
- Validação clínica independente: **não realizada**. Os testes abaixo verificam aritmética e transporte dos campos.
- Fonte importada: Panorama Médico; arquivo `app/content/ferramentas/onco-diagnostico.php`.
- 4/4 casos de referência conferidos na importação. 0 casos independentes desta ferramenta.
- Dados: o exemplo funciona localmente, sem rede, armazenamento ou identificação de pacientes.

## Uso no Node.js

```js
const { calculate } = require('./calculator.js');
const example = require('./examples.json')[0];
console.log(calculate(example.input));
```

Execute `node test.cjs` (ou `npm test`) para conferir os exemplos. Abra `index.html` para usar a versão local do navegador. Não há dependências npm.

## Contrato

`calculate(input)` recebe um objeto, devolve `{id, main, label, raw, clinicalValidation}` ou `{error, code, field?}`. Consulte `tool.json` e `metadata.fields` para nomes, unidades, opções e intervalos. Números aceitam valores finitos ou strings numéricas; opções precisam corresponder às chaves documentadas. Campos obrigatórios vazios, booleanos inválidos, valores fora de intervalo e resultados não finitos são rejeitados. Somente checkbox omitido representa falso; um campo numérico ou uma opção obrigatória nunca é preenchido automaticamente.

Interpretações, ordens terapêuticas e tabelas herdadas não são retornadas pelo adaptador. Classificações e valores ainda dependem da população e das limitações da fonte.

## Fórmula / versão

BED = n × d × (1 + d/(α/β)); EQD2 = BED/(1 + 2/(α/β)). Modelo linear-quadrático simplificado; não representa limites de órgãos nem plano de tratamento.

A transcrição acima documenta o acervo de origem e pode requerer atualização. Revisão documental: https://www.eviq.org.au/clinical-resources/eviq-calculators/3197-biologically-effective-dose-bed-and-equival

## Condições e limites

Compara esquemas de radioterapia com fracionamentos diferentes, convertendo a dose física em BED e em EQD2 para o tecido de interesse.

Confirme população, exclusões, unidades, versão e diretriz aplicável ao país e serviço. O resultado não deve ser utilizado isoladamente para diagnóstico, alta ou prescrição. O pacote não representa certificação clínica, aprovação regulatória ou indicação para toda população. Veja a revisão completa em `tool.json`.

## Fontes originais

- [Fowler JF. The linear-quadratic formula and progress in fractionated radiotherapy. Br J Radiol, 1989.](https://doi.org/10.1259/0007-1285-62-740-679)
- [Fowler JF. 21 years of biologically effective dose. Br J Radiol, 2010.](https://doi.org/10.1259/bjr/31372149)

## Exemplos e rastreabilidade

`examples.json` preserva `originalInput`, expectativa e entrada explícita do exemplo. Não foi necessário expandir opções zero nos exemplos.

## Direitos e repositório

Este pacote integra o acervo privado de desenvolvimento da ELUCENIA. A publicação externa depende de liberação expressa. A licença MIT (arquivo LICENSE) cobre o código de integração, preservando o aviso de autoria e a licença; não transfere direitos sobre instrumentos, traduções, questionários, artigos, marcas ou outros materiais de terceiros. Consulte NOTICE.md e as condições de cada titular. O acesso a este adaptador não publica nem licencia automaticamente o restante da plataforma ELUCENIA.

## Acesso ao repositório

Repositório privado da organização ELUCENIA. A abertura pública depende de liberação expressa.
