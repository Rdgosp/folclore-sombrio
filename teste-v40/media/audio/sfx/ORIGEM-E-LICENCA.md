# Bramoré · seleção inicial para avaliação (NÃO está no jogo)

Todos os arquivos vêm do pacote **Woven SFX**: https://www.woven.video/sfx (repositório: github.com/woven-video/woven-sfx).
Licença: **CC0 1.0** (domínio público). Permite uso comercial, edição e inclusão em jogo distribuído, sem obrigação de crédito.
A cópia local veio da pasta `assets/sfx/woven/` da skill EDIT IA PRO, que guarda esses arquivos originais e sem alteração. Prova da licença: `master_original/LICENCA-woven.md`.
Os sons sintéticos da própria skill (`sinteticos/`, `turbo/`) **não** foram usados, porque têm licença proprietária da SHK.

| Teste | Arquivo de origem (master) | Edição | Pico |
|---|---|---|---|
| golpe_ar | swish-whoosh-large.wav | corte 0,45 s, passa-alta 180 Hz, fade | −9 dB |
| golpe_ar_1 | fast-whoosh.wav | corte 0,3 s, passa-alta 180 Hz, fade | −4,5 dB |
| impacto_leve | dull-thud.wav | corte 0,32 s, passa-alta 140 Hz | −12 dB |
| impacto_medio | dull-thud.wav | corte 0,5 s, reforço de grave em 110 Hz | −5 dB |
| impacto_pesado | bass-impact.wav + dull-thud.wav (camadas) | corte 0,9 s, limitador | ~0 dB |
| fogo_lancamento | deep-whoosh.wav | corte 0,8 s, passa-baixa 5 kHz (provisório: não é fogo) | −7 dB |
| fogo_impacto | explosion.wav | corte 1,3 s, passa-baixa 7 kHz, limitador | −2 dB |

## Kenney · Impact Sounds 1.0

- Página: https://kenney.nl/assets/impact-sounds
- Autor: Kenney (www.kenney.nl)
- Licença: **CC0 1.0**. O crédito é opcional. Prova: `master_original/kenney/LICENCA-kenney.txt`.
- O pacote inteiro (zip de 0,8 MB, 130 sons `.ogg`) ficou em `kenney-impact-download/`, fora desta pasta. Aqui estão só os 9 masters usados.

| Teste | Origem | Edição | Pico |
|---|---|---|---|
| bloqueio | impactWood_heavy_000 + impactPlank_medium_001 | camadas, corte 0,45 s | −4 dB |
| bloqueio_1 | impactWood_heavy_002 + impactSoft_heavy_000 | camadas, corte 0,45 s | −4 dB |
| defesa_perfeita | whoosh reverso (Woven fast-whoosh) → impactMetal_heavy_000 + impactBell_heavy_001 | camadas, 1 s | −2,5 dB |
| impacto_medio_1 | impactPunch_medium_000 + Woven dull-thud | camadas | −5,5 dB |
| impacto_pesado_1 | impactPunch_heavy_000 + Woven bass-impact (filtrado em 300 Hz) | camadas | ~0 dB |

Os volumes ficam escalonados de propósito: o leve é mais baixo que o médio, e o médio mais baixo que o pesado.
Formatos: os masters estão em `master_original/` (WAV ou OGG originais). As versões de teste estão em `teste_wav/` e `teste_m4a/` (AAC a 128 kbps).
Os 8 efeitos já têm teste. O fogo_lancamento continua provisório, porque é um whoosh grave e não fogo de verdade.
