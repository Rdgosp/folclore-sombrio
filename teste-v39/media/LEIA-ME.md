# Mídia substituível — Folclore Sombrio

Coloque arquivos nesta pasta com os nomes abaixo e rode `npx vite build`.
O build lista o que existe aqui; o jogo usa o arquivo quando ele existe e cai no provisório quando não existe
(retrato SVG, som sintetizado, fundo em CSS). A extensão não importa: `.webp`, `.png`, `.jpg`, `.ogg`, `.mp3`, `.m4a`.
Tudo o que estiver aqui entra no cache offline do PWA.

Nada disso mexe nos modelos 3D de combate.

## Imagens

| Arquivo | Onde aparece | Formato sugerido |
|---|---|---|
| `portraits/<lutador>` | arte grande da seleção, tela VS, vitória/derrota | retrato vertical ~3:4, fundo transparente ou escuro, ~900 px de altura |
| `faces/<lutador>` | quadradinhos da seleção (se faltar, usa um recorte do retrato) | quadrado ~256 px |
| `bg/menu` | fundo da seleção | paisagem ~1920×1080 |
| `bg/vs` | fundo das duas metades da tela VS | paisagem |
| `bg/results` | fundo da tela de vitória/derrota | paisagem |

`<lutador>` = `saci`, `mula`, `curupira`, `cuca`, `iara` ou `boto`.

## Áudio (v0.39)

Os nomes vêm do cadastro `src/sons.js` (efeitos, vozes e músicas, com fallback). A lista completa (321 arquivos) está em
`AUDIO-INVENTARIO.md`. Formato principal `.m4a` (AAC, toca no Safari/iOS); `.ogg`/`.mp3` com o mesmo nome são opcionais.
Variações: `nome_1`, `nome_2`… Vozes em `audio/voz/pt/<lutador>/<fala>`.

Cada grupo (efeitos, vozes, música) tem volume próprio e há um botão SOM (ligado/mudo) em **OPÇÕES** e no menu de pausa.
