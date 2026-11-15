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

`<lutador>` = `saci`, `mula`, `curupira` ou `cuca`.

## Áudio

| Arquivo | Uso |
|---|---|
| `audio/music/menu` | música do menu (em loop) |
| `audio/music/fight` | música da luta (em loop; abaixa sozinha na pausa e no super) |
| `audio/voice/<lutador>_<fala>` | falas: `attack`, `hurt`, `ko`, `super`, `win` (ex.: `audio/voice/saci_win.ogg`) |
| `audio/sfx/<nome>` | efeitos: `hitL`, `hitH`, `block`, `perfect`, `grab`, `whoosh`, `dodge`, `rootsUp`, `super`, `ko`, `win`, `lose`, `vs`, `doors`, `sel`, `ui` |

Cada grupo (efeitos, vozes, música) tem volume próprio em **OPÇÕES** e no menu de pausa.
