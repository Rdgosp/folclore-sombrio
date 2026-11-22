# Inventário de áudio (v0.39 · O Som das Lendas)

Gerado a partir de `src/sons.js`. 321 arquivos. Nenhum existe ainda: o jogo funciona em silêncio e cada id cai no fallback indicado quando o arquivo falta.

Formatos: **.m4a (AAC)** é o principal (Safari/iOS); pode acompanhar `.ogg` ou `.mp3` com o mesmo nome — o jogo escolhe o que o aparelho toca.
Efeitos e vozes: mono, 44,1 ou 48 kHz, sem silêncio no começo, pico em -1 dBFS. Música: estéreo, loop sem emenda.
Variações: `nome_1`, `nome_2`… ao lado de `nome` (o jogo sorteia sem repetir a anterior). Vozes: `{idioma}` = `pt` (outros idiomas caem no português).

## audio/sfx/combate

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/sfx/combate/golpe_ar` | início de golpe básico (deslocamento de ar) | — |
| `audio/sfx/combate/impacto_leve` | acerto leve | — |
| `audio/sfx/combate/impacto_medio` | acerto médio | `impacto.leve` |
| `audio/sfx/combate/impacto_pesado` | acerto pesado / lançamento | `impacto.medio` |
| `audio/sfx/combate/impacto_super` | acerto do Supremo | `impacto.pesado` |
| `audio/sfx/combate/impacto_armadura` | golpe absorvido por armadura | `bloqueio` |
| `audio/sfx/combate/agarrao` | agarrão conectou | — |
| `audio/sfx/combate/arremesso` | lutador arremessado | `golpe.ar` |
| `audio/sfx/combate/queda` | lutador cai no chão | — |
| `audio/sfx/combate/pisada` | pisada pesada ao golpear (Mapinguari, Mula…) | — |
| `audio/sfx/combate/supremo_ativa` | Supremo ativado (genérico) | — |
| `audio/sfx/combate/ko` | nocaute | — |

## audio/sfx/defesa

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/sfx/defesa/bloqueio` | golpe bloqueado | — |
| `audio/sfx/defesa/defesa_perfeita` | defesa perfeita | `bloqueio` |
| `audio/sfx/defesa/veu` | Véu do Pesadelo absorve | `defesa.perfeita` |
| `audio/sfx/defesa/quebra_guarda` | guarda quebrada | `impacto.pesado` |

## audio/sfx/movimento

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/sfx/movimento/esquiva` | esquiva / passo lateral | — |
| `audio/sfx/movimento/deslocamento_especial` | deslocamento especial | `esquiva` |

## audio/sfx/aviso

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/sfx/aviso/perigo` | marca de ataque perigoso surge no chão | — |

## audio/sfx/elementos

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/sfx/elementos/fogo_lancamento` | poder de fogo começa | `golpe.ar` |
| `audio/sfx/elementos/fogo_impacto` | poder de fogo acerta | — |
| `audio/sfx/elementos/agua_lancamento` | poder de agua começa | `golpe.ar` |
| `audio/sfx/elementos/agua_impacto` | poder de agua acerta | — |
| `audio/sfx/elementos/terra_lancamento` | poder de terra começa | `golpe.ar` |
| `audio/sfx/elementos/terra_impacto` | poder de terra acerta | — |
| `audio/sfx/elementos/vento_lancamento` | poder de vento começa | `golpe.ar` |
| `audio/sfx/elementos/vento_impacto` | poder de vento acerta | — |
| `audio/sfx/elementos/sobrenatural_lancamento` | poder de sobrenatural começa | `golpe.ar` |
| `audio/sfx/elementos/sobrenatural_impacto` | poder de sobrenatural acerta | — |
| `audio/sfx/elementos/luz_mineral_lancamento` | poder de luz_mineral começa | `golpe.ar` |
| `audio/sfx/elementos/luz_mineral_impacto` | poder de luz_mineral acerta | — |
| `audio/sfx/elementos/vegetacao_lancamento` | poder de vegetacao começa | `golpe.ar` |
| `audio/sfx/elementos/vegetacao_impacto` | poder de vegetacao acerta | — |

## audio/sfx/lendas

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/sfx/lendas/saci/mid_inicio` | saci: especial mid começa | `elem.vento.lancamento` |
| `audio/sfx/lendas/saci/mid_impacto` | saci: especial mid acerta | `elem.vento.impacto` |
| `audio/sfx/lendas/saci/special_inicio` | saci: especial special começa | `elem.vento.lancamento` |
| `audio/sfx/lendas/saci/special_impacto` | saci: especial special acerta | `elem.vento.impacto` |
| `audio/sfx/lendas/saci/def_inicio` | saci: especial def começa | `elem.vento.lancamento` |
| `audio/sfx/lendas/saci/def_impacto` | saci: especial def acerta | `elem.vento.impacto` |
| `audio/sfx/lendas/saci/grab_inicio` | saci: especial grab começa | `golpe.ar` |
| `audio/sfx/lendas/saci/grab_impacto` | saci: especial grab acerta | `agarrao` |
| `audio/sfx/lendas/saci/supremo` | saci: Supremo | `supremo.ativa` |
| `audio/sfx/lendas/saci/passo` | saci: pisada pesada | `pisada` |
| `audio/sfx/lendas/mula/mid_inicio` | mula: especial mid começa | `elem.fogo.lancamento` |
| `audio/sfx/lendas/mula/mid_impacto` | mula: especial mid acerta | `elem.fogo.impacto` |
| `audio/sfx/lendas/mula/special_inicio` | mula: especial special começa | `elem.fogo.lancamento` |
| `audio/sfx/lendas/mula/special_impacto` | mula: especial special acerta | `elem.fogo.impacto` |
| `audio/sfx/lendas/mula/def_inicio` | mula: especial def começa | `elem.fogo.lancamento` |
| `audio/sfx/lendas/mula/def_impacto` | mula: especial def acerta | `elem.fogo.impacto` |
| `audio/sfx/lendas/mula/grab_inicio` | mula: especial grab começa | `golpe.ar` |
| `audio/sfx/lendas/mula/grab_impacto` | mula: especial grab acerta | `agarrao` |
| `audio/sfx/lendas/mula/supremo` | mula: Supremo | `supremo.ativa` |
| `audio/sfx/lendas/mula/passo` | mula: pisada pesada | `pisada` |
| `audio/sfx/lendas/curupira/mid_inicio` | curupira: especial mid começa | `elem.vegetacao.lancamento` |
| `audio/sfx/lendas/curupira/mid_impacto` | curupira: especial mid acerta | `elem.vegetacao.impacto` |
| `audio/sfx/lendas/curupira/special_inicio` | curupira: especial special começa | `elem.vegetacao.lancamento` |
| `audio/sfx/lendas/curupira/special_impacto` | curupira: especial special acerta | `elem.vegetacao.impacto` |
| `audio/sfx/lendas/curupira/def_inicio` | curupira: especial def começa | `elem.vegetacao.lancamento` |
| `audio/sfx/lendas/curupira/def_impacto` | curupira: especial def acerta | `elem.vegetacao.impacto` |
| `audio/sfx/lendas/curupira/grab_inicio` | curupira: especial grab começa | `golpe.ar` |
| `audio/sfx/lendas/curupira/grab_impacto` | curupira: especial grab acerta | `agarrao` |
| `audio/sfx/lendas/curupira/supremo` | curupira: Supremo | `supremo.ativa` |
| `audio/sfx/lendas/curupira/passo` | curupira: pisada pesada | `pisada` |
| `audio/sfx/lendas/cuca/mid_inicio` | cuca: especial mid começa | `elem.sobrenatural.lancamento` |
| `audio/sfx/lendas/cuca/mid_impacto` | cuca: especial mid acerta | `elem.sobrenatural.impacto` |
| `audio/sfx/lendas/cuca/special_inicio` | cuca: especial special começa | `elem.sobrenatural.lancamento` |
| `audio/sfx/lendas/cuca/special_impacto` | cuca: especial special acerta | `elem.sobrenatural.impacto` |
| `audio/sfx/lendas/cuca/def_inicio` | cuca: especial def começa | `elem.sobrenatural.lancamento` |
| `audio/sfx/lendas/cuca/def_impacto` | cuca: especial def acerta | `elem.sobrenatural.impacto` |
| `audio/sfx/lendas/cuca/grab_inicio` | cuca: especial grab começa | `golpe.ar` |
| `audio/sfx/lendas/cuca/grab_impacto` | cuca: especial grab acerta | `agarrao` |
| `audio/sfx/lendas/cuca/supremo` | cuca: Supremo | `supremo.ativa` |
| `audio/sfx/lendas/cuca/passo` | cuca: pisada pesada | `pisada` |
| `audio/sfx/lendas/iara/mid_inicio` | iara: especial mid começa | `elem.agua.lancamento` |
| `audio/sfx/lendas/iara/mid_impacto` | iara: especial mid acerta | `elem.agua.impacto` |
| `audio/sfx/lendas/iara/special_inicio` | iara: especial special começa | `elem.agua.lancamento` |
| `audio/sfx/lendas/iara/special_impacto` | iara: especial special acerta | `elem.agua.impacto` |
| `audio/sfx/lendas/iara/def_inicio` | iara: especial def começa | `elem.agua.lancamento` |
| `audio/sfx/lendas/iara/def_impacto` | iara: especial def acerta | `elem.agua.impacto` |
| `audio/sfx/lendas/iara/grab_inicio` | iara: especial grab começa | `golpe.ar` |
| `audio/sfx/lendas/iara/grab_impacto` | iara: especial grab acerta | `agarrao` |
| `audio/sfx/lendas/iara/supremo` | iara: Supremo | `supremo.ativa` |
| `audio/sfx/lendas/iara/passo` | iara: pisada pesada | `pisada` |
| `audio/sfx/lendas/boto/mid_inicio` | boto: especial mid começa | `elem.agua.lancamento` |
| `audio/sfx/lendas/boto/mid_impacto` | boto: especial mid acerta | `elem.agua.impacto` |
| `audio/sfx/lendas/boto/special_inicio` | boto: especial special começa | `elem.agua.lancamento` |
| `audio/sfx/lendas/boto/special_impacto` | boto: especial special acerta | `elem.agua.impacto` |
| `audio/sfx/lendas/boto/def_inicio` | boto: especial def começa | `elem.agua.lancamento` |
| `audio/sfx/lendas/boto/def_impacto` | boto: especial def acerta | `elem.agua.impacto` |
| `audio/sfx/lendas/boto/grab_inicio` | boto: especial grab começa | `golpe.ar` |
| `audio/sfx/lendas/boto/grab_impacto` | boto: especial grab acerta | `agarrao` |
| `audio/sfx/lendas/boto/supremo` | boto: Supremo | `supremo.ativa` |
| `audio/sfx/lendas/boto/passo` | boto: pisada pesada | `pisada` |
| `audio/sfx/lendas/boitata/mid_inicio` | boitata: especial mid começa | `elem.fogo.lancamento` |
| `audio/sfx/lendas/boitata/mid_impacto` | boitata: especial mid acerta | `elem.fogo.impacto` |
| `audio/sfx/lendas/boitata/special_inicio` | boitata: especial special começa | `elem.fogo.lancamento` |
| `audio/sfx/lendas/boitata/special_impacto` | boitata: especial special acerta | `elem.fogo.impacto` |
| `audio/sfx/lendas/boitata/def_inicio` | boitata: especial def começa | `elem.fogo.lancamento` |
| `audio/sfx/lendas/boitata/def_impacto` | boitata: especial def acerta | `elem.fogo.impacto` |
| `audio/sfx/lendas/boitata/grab_inicio` | boitata: especial grab começa | `golpe.ar` |
| `audio/sfx/lendas/boitata/grab_impacto` | boitata: especial grab acerta | `agarrao` |
| `audio/sfx/lendas/boitata/supremo` | boitata: Supremo | `supremo.ativa` |
| `audio/sfx/lendas/boitata/passo` | boitata: pisada pesada | `pisada` |
| `audio/sfx/lendas/lobisomem/mid_inicio` | lobisomem: especial mid começa | `golpe.ar` |
| `audio/sfx/lendas/lobisomem/mid_impacto` | lobisomem: especial mid acerta | — |
| `audio/sfx/lendas/lobisomem/special_inicio` | lobisomem: especial special começa | `golpe.ar` |
| `audio/sfx/lendas/lobisomem/special_impacto` | lobisomem: especial special acerta | — |
| `audio/sfx/lendas/lobisomem/def_inicio` | lobisomem: especial def começa | `golpe.ar` |
| `audio/sfx/lendas/lobisomem/def_impacto` | lobisomem: especial def acerta | — |
| `audio/sfx/lendas/lobisomem/grab_inicio` | lobisomem: especial grab começa | `golpe.ar` |
| `audio/sfx/lendas/lobisomem/grab_impacto` | lobisomem: especial grab acerta | `agarrao` |
| `audio/sfx/lendas/lobisomem/supremo` | lobisomem: Supremo | `supremo.ativa` |
| `audio/sfx/lendas/lobisomem/passo` | lobisomem: pisada pesada | `pisada` |
| `audio/sfx/lendas/mapinguari/mid_inicio` | mapinguari: especial mid começa | `elem.terra.lancamento` |
| `audio/sfx/lendas/mapinguari/mid_impacto` | mapinguari: especial mid acerta | `elem.terra.impacto` |
| `audio/sfx/lendas/mapinguari/special_inicio` | mapinguari: especial special começa | `elem.terra.lancamento` |
| `audio/sfx/lendas/mapinguari/special_impacto` | mapinguari: especial special acerta | `elem.terra.impacto` |
| `audio/sfx/lendas/mapinguari/def_inicio` | mapinguari: especial def começa | `elem.terra.lancamento` |
| `audio/sfx/lendas/mapinguari/def_impacto` | mapinguari: especial def acerta | `elem.terra.impacto` |
| `audio/sfx/lendas/mapinguari/grab_inicio` | mapinguari: especial grab começa | `golpe.ar` |
| `audio/sfx/lendas/mapinguari/grab_impacto` | mapinguari: especial grab acerta | `agarrao` |
| `audio/sfx/lendas/mapinguari/supremo` | mapinguari: Supremo | `supremo.ativa` |
| `audio/sfx/lendas/mapinguari/passo` | mapinguari: pisada pesada | `pisada` |
| `audio/sfx/lendas/matinta/mid_inicio` | matinta: especial mid começa | `elem.sobrenatural.lancamento` |
| `audio/sfx/lendas/matinta/mid_impacto` | matinta: especial mid acerta | `elem.sobrenatural.impacto` |
| `audio/sfx/lendas/matinta/special_inicio` | matinta: especial special começa | `elem.sobrenatural.lancamento` |
| `audio/sfx/lendas/matinta/special_impacto` | matinta: especial special acerta | `elem.sobrenatural.impacto` |
| `audio/sfx/lendas/matinta/def_inicio` | matinta: especial def começa | `elem.sobrenatural.lancamento` |
| `audio/sfx/lendas/matinta/def_impacto` | matinta: especial def acerta | `elem.sobrenatural.impacto` |
| `audio/sfx/lendas/matinta/grab_inicio` | matinta: especial grab começa | `golpe.ar` |
| `audio/sfx/lendas/matinta/grab_impacto` | matinta: especial grab acerta | `agarrao` |
| `audio/sfx/lendas/matinta/supremo` | matinta: Supremo | `supremo.ativa` |
| `audio/sfx/lendas/matinta/passo` | matinta: pisada pesada | `pisada` |
| `audio/sfx/lendas/maedoouro/mid_inicio` | maedoouro: especial mid começa | `elem.luz_mineral.lancamento` |
| `audio/sfx/lendas/maedoouro/mid_impacto` | maedoouro: especial mid acerta | `elem.luz_mineral.impacto` |
| `audio/sfx/lendas/maedoouro/special_inicio` | maedoouro: especial special começa | `elem.luz_mineral.lancamento` |
| `audio/sfx/lendas/maedoouro/special_impacto` | maedoouro: especial special acerta | `elem.luz_mineral.impacto` |
| `audio/sfx/lendas/maedoouro/def_inicio` | maedoouro: especial def começa | `elem.luz_mineral.lancamento` |
| `audio/sfx/lendas/maedoouro/def_impacto` | maedoouro: especial def acerta | `elem.luz_mineral.impacto` |
| `audio/sfx/lendas/maedoouro/grab_inicio` | maedoouro: especial grab começa | `golpe.ar` |
| `audio/sfx/lendas/maedoouro/grab_impacto` | maedoouro: especial grab acerta | `agarrao` |
| `audio/sfx/lendas/maedoouro/supremo` | maedoouro: Supremo | `supremo.ativa` |
| `audio/sfx/lendas/maedoouro/passo` | maedoouro: pisada pesada | `pisada` |
| `audio/sfx/lendas/cabecadecuia/mid_inicio` | cabecadecuia: especial mid começa | `elem.agua.lancamento` |
| `audio/sfx/lendas/cabecadecuia/mid_impacto` | cabecadecuia: especial mid acerta | `elem.agua.impacto` |
| `audio/sfx/lendas/cabecadecuia/special_inicio` | cabecadecuia: especial special começa | `elem.agua.lancamento` |
| `audio/sfx/lendas/cabecadecuia/special_impacto` | cabecadecuia: especial special acerta | `elem.agua.impacto` |
| `audio/sfx/lendas/cabecadecuia/def_inicio` | cabecadecuia: especial def começa | `elem.agua.lancamento` |
| `audio/sfx/lendas/cabecadecuia/def_impacto` | cabecadecuia: especial def acerta | `elem.agua.impacto` |
| `audio/sfx/lendas/cabecadecuia/grab_inicio` | cabecadecuia: especial grab começa | `golpe.ar` |
| `audio/sfx/lendas/cabecadecuia/grab_impacto` | cabecadecuia: especial grab acerta | `agarrao` |
| `audio/sfx/lendas/cabecadecuia/supremo` | cabecadecuia: Supremo | `supremo.ativa` |
| `audio/sfx/lendas/cabecadecuia/passo` | cabecadecuia: pisada pesada | `pisada` |

## audio/voz/{idioma}/saci

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/voz/{idioma}/saci/ataque` | voz de saci: ataque | — |
| `audio/voz/{idioma}/saci/esforco` | voz de saci: esforco | — |
| `audio/voz/{idioma}/saci/dano_leve` | voz de saci: dano_leve | — |
| `audio/voz/{idioma}/saci/dano_forte` | voz de saci: dano_forte | — |
| `audio/voz/{idioma}/saci/agarrao` | voz de saci: agarrao | — |
| `audio/voz/{idioma}/saci/supremo` | voz de saci: supremo | — |
| `audio/voz/{idioma}/saci/derrota` | voz de saci: derrota | — |
| `audio/voz/{idioma}/saci/vitoria` | voz de saci: vitoria | — |

## audio/voz/{idioma}/mula

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/voz/{idioma}/mula/ataque` | voz de mula: ataque | — |
| `audio/voz/{idioma}/mula/esforco` | voz de mula: esforco | — |
| `audio/voz/{idioma}/mula/dano_leve` | voz de mula: dano_leve | — |
| `audio/voz/{idioma}/mula/dano_forte` | voz de mula: dano_forte | — |
| `audio/voz/{idioma}/mula/agarrao` | voz de mula: agarrao | — |
| `audio/voz/{idioma}/mula/supremo` | voz de mula: supremo | — |
| `audio/voz/{idioma}/mula/derrota` | voz de mula: derrota | — |
| `audio/voz/{idioma}/mula/vitoria` | voz de mula: vitoria | — |

## audio/voz/{idioma}/curupira

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/voz/{idioma}/curupira/ataque` | voz de curupira: ataque | — |
| `audio/voz/{idioma}/curupira/esforco` | voz de curupira: esforco | — |
| `audio/voz/{idioma}/curupira/dano_leve` | voz de curupira: dano_leve | — |
| `audio/voz/{idioma}/curupira/dano_forte` | voz de curupira: dano_forte | — |
| `audio/voz/{idioma}/curupira/agarrao` | voz de curupira: agarrao | — |
| `audio/voz/{idioma}/curupira/supremo` | voz de curupira: supremo | — |
| `audio/voz/{idioma}/curupira/derrota` | voz de curupira: derrota | — |
| `audio/voz/{idioma}/curupira/vitoria` | voz de curupira: vitoria | — |

## audio/voz/{idioma}/cuca

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/voz/{idioma}/cuca/ataque` | voz de cuca: ataque | — |
| `audio/voz/{idioma}/cuca/esforco` | voz de cuca: esforco | — |
| `audio/voz/{idioma}/cuca/dano_leve` | voz de cuca: dano_leve | — |
| `audio/voz/{idioma}/cuca/dano_forte` | voz de cuca: dano_forte | — |
| `audio/voz/{idioma}/cuca/agarrao` | voz de cuca: agarrao | — |
| `audio/voz/{idioma}/cuca/supremo` | voz de cuca: supremo | — |
| `audio/voz/{idioma}/cuca/derrota` | voz de cuca: derrota | — |
| `audio/voz/{idioma}/cuca/vitoria` | voz de cuca: vitoria | — |

## audio/voz/{idioma}/iara

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/voz/{idioma}/iara/ataque` | voz de iara: ataque | — |
| `audio/voz/{idioma}/iara/esforco` | voz de iara: esforco | — |
| `audio/voz/{idioma}/iara/dano_leve` | voz de iara: dano_leve | — |
| `audio/voz/{idioma}/iara/dano_forte` | voz de iara: dano_forte | — |
| `audio/voz/{idioma}/iara/agarrao` | voz de iara: agarrao | — |
| `audio/voz/{idioma}/iara/supremo` | voz de iara: supremo | — |
| `audio/voz/{idioma}/iara/derrota` | voz de iara: derrota | — |
| `audio/voz/{idioma}/iara/vitoria` | voz de iara: vitoria | — |

## audio/voz/{idioma}/boto

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/voz/{idioma}/boto/ataque` | voz de boto: ataque | — |
| `audio/voz/{idioma}/boto/esforco` | voz de boto: esforco | — |
| `audio/voz/{idioma}/boto/dano_leve` | voz de boto: dano_leve | — |
| `audio/voz/{idioma}/boto/dano_forte` | voz de boto: dano_forte | — |
| `audio/voz/{idioma}/boto/agarrao` | voz de boto: agarrao | — |
| `audio/voz/{idioma}/boto/supremo` | voz de boto: supremo | — |
| `audio/voz/{idioma}/boto/derrota` | voz de boto: derrota | — |
| `audio/voz/{idioma}/boto/vitoria` | voz de boto: vitoria | — |

## audio/voz/{idioma}/boitata

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/voz/{idioma}/boitata/ataque` | voz de boitata: ataque | — |
| `audio/voz/{idioma}/boitata/esforco` | voz de boitata: esforco | — |
| `audio/voz/{idioma}/boitata/dano_leve` | voz de boitata: dano_leve | — |
| `audio/voz/{idioma}/boitata/dano_forte` | voz de boitata: dano_forte | — |
| `audio/voz/{idioma}/boitata/agarrao` | voz de boitata: agarrao | — |
| `audio/voz/{idioma}/boitata/supremo` | voz de boitata: supremo | — |
| `audio/voz/{idioma}/boitata/derrota` | voz de boitata: derrota | — |
| `audio/voz/{idioma}/boitata/vitoria` | voz de boitata: vitoria | — |

## audio/voz/{idioma}/lobisomem

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/voz/{idioma}/lobisomem/ataque` | voz de lobisomem: ataque | — |
| `audio/voz/{idioma}/lobisomem/esforco` | voz de lobisomem: esforco | — |
| `audio/voz/{idioma}/lobisomem/dano_leve` | voz de lobisomem: dano_leve | — |
| `audio/voz/{idioma}/lobisomem/dano_forte` | voz de lobisomem: dano_forte | — |
| `audio/voz/{idioma}/lobisomem/agarrao` | voz de lobisomem: agarrao | — |
| `audio/voz/{idioma}/lobisomem/supremo` | voz de lobisomem: supremo | — |
| `audio/voz/{idioma}/lobisomem/derrota` | voz de lobisomem: derrota | — |
| `audio/voz/{idioma}/lobisomem/vitoria` | voz de lobisomem: vitoria | — |

## audio/voz/{idioma}/mapinguari

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/voz/{idioma}/mapinguari/ataque` | voz de mapinguari: ataque | — |
| `audio/voz/{idioma}/mapinguari/esforco` | voz de mapinguari: esforco | — |
| `audio/voz/{idioma}/mapinguari/dano_leve` | voz de mapinguari: dano_leve | — |
| `audio/voz/{idioma}/mapinguari/dano_forte` | voz de mapinguari: dano_forte | — |
| `audio/voz/{idioma}/mapinguari/agarrao` | voz de mapinguari: agarrao | — |
| `audio/voz/{idioma}/mapinguari/supremo` | voz de mapinguari: supremo | — |
| `audio/voz/{idioma}/mapinguari/derrota` | voz de mapinguari: derrota | — |
| `audio/voz/{idioma}/mapinguari/vitoria` | voz de mapinguari: vitoria | — |

## audio/voz/{idioma}/matinta

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/voz/{idioma}/matinta/ataque` | voz de matinta: ataque | — |
| `audio/voz/{idioma}/matinta/esforco` | voz de matinta: esforco | — |
| `audio/voz/{idioma}/matinta/dano_leve` | voz de matinta: dano_leve | — |
| `audio/voz/{idioma}/matinta/dano_forte` | voz de matinta: dano_forte | — |
| `audio/voz/{idioma}/matinta/agarrao` | voz de matinta: agarrao | — |
| `audio/voz/{idioma}/matinta/supremo` | voz de matinta: supremo | — |
| `audio/voz/{idioma}/matinta/derrota` | voz de matinta: derrota | — |
| `audio/voz/{idioma}/matinta/vitoria` | voz de matinta: vitoria | — |

## audio/voz/{idioma}/maedoouro

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/voz/{idioma}/maedoouro/ataque` | voz de maedoouro: ataque | — |
| `audio/voz/{idioma}/maedoouro/esforco` | voz de maedoouro: esforco | — |
| `audio/voz/{idioma}/maedoouro/dano_leve` | voz de maedoouro: dano_leve | — |
| `audio/voz/{idioma}/maedoouro/dano_forte` | voz de maedoouro: dano_forte | — |
| `audio/voz/{idioma}/maedoouro/agarrao` | voz de maedoouro: agarrao | — |
| `audio/voz/{idioma}/maedoouro/supremo` | voz de maedoouro: supremo | — |
| `audio/voz/{idioma}/maedoouro/derrota` | voz de maedoouro: derrota | — |
| `audio/voz/{idioma}/maedoouro/vitoria` | voz de maedoouro: vitoria | — |

## audio/voz/{idioma}/cabecadecuia

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/voz/{idioma}/cabecadecuia/ataque` | voz de cabecadecuia: ataque | — |
| `audio/voz/{idioma}/cabecadecuia/esforco` | voz de cabecadecuia: esforco | — |
| `audio/voz/{idioma}/cabecadecuia/dano_leve` | voz de cabecadecuia: dano_leve | — |
| `audio/voz/{idioma}/cabecadecuia/dano_forte` | voz de cabecadecuia: dano_forte | — |
| `audio/voz/{idioma}/cabecadecuia/agarrao` | voz de cabecadecuia: agarrao | — |
| `audio/voz/{idioma}/cabecadecuia/supremo` | voz de cabecadecuia: supremo | — |
| `audio/voz/{idioma}/cabecadecuia/derrota` | voz de cabecadecuia: derrota | — |
| `audio/voz/{idioma}/cabecadecuia/vitoria` | voz de cabecadecuia: vitoria | — |

## audio/voz/{idioma}/boss1

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/voz/{idioma}/boss1/ataque` | voz de boss1: ataque | — |
| `audio/voz/{idioma}/boss1/esforco` | voz de boss1: esforco | — |
| `audio/voz/{idioma}/boss1/dano_leve` | voz de boss1: dano_leve | — |
| `audio/voz/{idioma}/boss1/dano_forte` | voz de boss1: dano_forte | — |
| `audio/voz/{idioma}/boss1/agarrao` | voz de boss1: agarrao | — |
| `audio/voz/{idioma}/boss1/supremo` | voz de boss1: supremo | — |
| `audio/voz/{idioma}/boss1/derrota` | voz de boss1: derrota | — |
| `audio/voz/{idioma}/boss1/vitoria` | voz de boss1: vitoria | — |

## audio/voz/{idioma}/boss2

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/voz/{idioma}/boss2/ataque` | voz de boss2: ataque | — |
| `audio/voz/{idioma}/boss2/esforco` | voz de boss2: esforco | — |
| `audio/voz/{idioma}/boss2/dano_leve` | voz de boss2: dano_leve | — |
| `audio/voz/{idioma}/boss2/dano_forte` | voz de boss2: dano_forte | — |
| `audio/voz/{idioma}/boss2/agarrao` | voz de boss2: agarrao | — |
| `audio/voz/{idioma}/boss2/supremo` | voz de boss2: supremo | — |
| `audio/voz/{idioma}/boss2/derrota` | voz de boss2: derrota | — |
| `audio/voz/{idioma}/boss2/vitoria` | voz de boss2: vitoria | — |

## audio/voz/{idioma}/apagador

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/voz/{idioma}/apagador/ataque` | voz de apagador: ataque | — |
| `audio/voz/{idioma}/apagador/esforco` | voz de apagador: esforco | — |
| `audio/voz/{idioma}/apagador/dano_leve` | voz de apagador: dano_leve | — |
| `audio/voz/{idioma}/apagador/dano_forte` | voz de apagador: dano_forte | — |
| `audio/voz/{idioma}/apagador/agarrao` | voz de apagador: agarrao | — |
| `audio/voz/{idioma}/apagador/supremo` | voz de apagador: supremo | — |
| `audio/voz/{idioma}/apagador/derrota` | voz de apagador: derrota | — |
| `audio/voz/{idioma}/apagador/vitoria` | voz de apagador: vitoria | — |

## audio/sfx/chefes

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/sfx/chefes/cheia/corrente_de_arrasto` | A Cheia: Corrente de Arrasto | `elem.agua.lancamento` |
| `audio/sfx/chefes/cheia/barro_profundo` | A Cheia: Barro Profundo | `elem.agua.lancamento` |
| `audio/sfx/chefes/cheia/rompimento` | A Cheia: Rompimento (aviso) | `aviso.perigo` |
| `audio/sfx/chefes/cheia/agua_lama` | A Cheia: água e lama (encharcada / desaba) | `elem.agua.impacto` |
| `audio/sfx/chefes/estio/sopro_seco` | O Estio: Sopro Seco | `elem.vento.lancamento` |
| `audio/sfx/chefes/estio/terra_rachada` | O Estio: Terra Rachada | `elem.terra.lancamento` |
| `audio/sfx/chefes/estio/folego_do_estio` | O Estio: Fôlego do Estio (aviso) | `aviso.perigo` |
| `audio/sfx/chefes/estio/calor_poeira` | O Estio: calor, poeira, estalos de terra | `elem.terra.impacto` |
| `audio/sfx/chefes/juiz/presenca` | o Juiz aparece na arena (discreto) | — |
| `audio/sfx/chefes/juiz/artefato` | o Juiz manipula o artefato | — |
| `audio/sfx/chefes/juiz/absorcao` | o Juiz absorve a energia do derrotado | — |
| `audio/sfx/chefes/velador/artefato` | o artefato pulsa antes da revelação | `juiz.artefato` |
| `audio/sfx/chefes/velador/revelacao` | revelação do Velador | — |
| `audio/sfx/chefes/velador/transformacao` | o Juiz se transforma no Velador | — |
| `audio/sfx/chefes/velador/fase2` | Velador: troca para a fase 2 | `velador.artefato` |
| `audio/sfx/chefes/velador/fase3` | Velador: troca para a fase 3 | `velador.fase2` |
| `audio/sfx/chefes/velador/garra` | Velador: Garra | `elem.sobrenatural.lancamento` |
| `audio/sfx/chefes/velador/sentenca` | Velador: Sentença | `elem.sobrenatural.lancamento` |
| `audio/sfx/chefes/velador/guarda` | Velador: Guarda | `bloqueio` |
| `audio/sfx/chefes/velador/investida` | Velador: Investida | `elem.sobrenatural.lancamento` |
| `audio/sfx/chefes/velador/replica` | Velador: Réplica | `elem.sobrenatural.lancamento` |
| `audio/sfx/chefes/velador/poder_saci` | Velador usa o poder roubado de saci | `saci.special.inicio` |
| `audio/sfx/chefes/velador/poder_mula` | Velador usa o poder roubado de mula | `mula.special.inicio` |
| `audio/sfx/chefes/velador/poder_curupira` | Velador usa o poder roubado de curupira | `curupira.special.inicio` |
| `audio/sfx/chefes/velador/poder_cuca` | Velador usa o poder roubado de cuca | `cuca.special.inicio` |
| `audio/sfx/chefes/velador/poder_iara` | Velador usa o poder roubado de iara | `iara.special.inicio` |
| `audio/sfx/chefes/velador/poder_boto` | Velador usa o poder roubado de boto | `boto.special.inicio` |
| `audio/sfx/chefes/velador/poder_boitata` | Velador usa o poder roubado de boitata | `boitata.special.inicio` |
| `audio/sfx/chefes/velador/poder_lobisomem` | Velador usa o poder roubado de lobisomem | `lobisomem.special.inicio` |
| `audio/sfx/chefes/velador/poder_mapinguari` | Velador usa o poder roubado de mapinguari | `mapinguari.special.inicio` |
| `audio/sfx/chefes/velador/poder_matinta` | Velador usa o poder roubado de matinta | `matinta.special.inicio` |
| `audio/sfx/chefes/velador/poder_maedoouro` | Velador usa o poder roubado de maedoouro | `maedoouro.special.inicio` |
| `audio/sfx/chefes/velador/poder_cabecadecuia` | Velador usa o poder roubado de cabecadecuia | `cabecadecuia.special.inicio` |

## audio/sfx/ui

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/sfx/ui/clique` | clique em botão | — |
| `audio/sfx/ui/selecao` | escolha de lenda / opção | `ui.clique` |
| `audio/sfx/ui/vs` | tela de confronto | — |
| `audio/sfx/ui/portas` | entrada na arena | — |
| `audio/sfx/ui/contagem` | contagem do round | — |
| `audio/sfx/ui/luta` | "LUTEM!" | `ui.contagem` |
| `audio/sfx/ui/vitoria` | tela de vitória | — |
| `audio/sfx/ui/derrota` | tela de derrota | — |

## audio/musica/menu

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/musica/menu` | trilha: menu | — |

## audio/musica/selecao

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/musica/selecao` | trilha: selecao | `musica.menu` |

## audio/musica/luta

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/musica/luta` | trilha: luta | — |

## audio/musica/chefe

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/musica/chefe` | trilha: chefe | `musica.luta` |

## audio/musica/velador

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/musica/velador` | trilha: velador | `musica.chefe` |

## audio/musica/velador_final

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/musica/velador_final` | trilha: velador_final | `musica.velador` |

## audio/musica/resultado

| Arquivo | Evento | Fallback |
|---|---|---|
| `audio/musica/resultado` | trilha: resultado | — |

