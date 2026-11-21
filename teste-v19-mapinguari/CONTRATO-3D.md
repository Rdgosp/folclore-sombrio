# Bramoré · Contrato 3D (v0.19)

Regra de ouro: **a luta nunca pergunta nada ao visual.** Posição, hitbox, tempos, dano e IA vêm dos dados
(`moves.js`, `STATS`). O visual recebe o estado lógico e só desenha. Trocar o modelo procedural por um GLB
riggado é trocar a classe de *view*. Nenhum número de equilíbrio muda.

## 1. Camadas

| Camada | Arquivo | Papel |
|---|---|---|
| Lógica | `fighter.js`, `moves.js`, `ai.js` | estados, tempos, colisão (cilindro `pos` + `radius`), dano |
| Eventos | `eventos.js` | barramento tipado, alimentado só pelo `game.log` (ponto único, com anti-duplicata) |
| Metadados | `golpes.js` | `moveMeta(kind, golpe)`: tipo, intensidade, elemento, categoria, vfx, anim, tempos (somente leitura) |
| Apresentação | `apresentacao.js` | diretor: pausa de impacto, tremor, clarão, VFX, som e reações, tudo por evento |
| Representação | `representacao.js` | views trocáveis: `ProceduralView` (atual), `NullView` (testes), `RigView` (GLB futuro) |

## 2. Contrato da view

Toda view expõe:

- `root`: `Object3D` na cena. O laço escreve posição e rotação Y a cada quadro.
- `update(f, dt, t)`: desenha o lutador `f`. Lê `f.anim`, `f.state`, `f.phase`, `f.pk`, `f.meta`.
- `snap(f, t)`: salta para a pose atual, sem interpolar.
- `play(animId, dur?)`: pedido de animação lógica. `dur` estica o clipe até o tempo lógico do golpe.
- `socket(nome, f, out?)`: ponto de efeito no mundo. Sem osso, cai na posição derivada dos dados.
- `react(categoria, dir, intensidade)`: reação visual que não altera os tempos.
  - Categorias: `leve`, `pesado`, `baixo`, `elemental`, `agarrao`, `bloqueio`, `queda`.
- `dispose()`: libera geometria e materiais.
- `anatomia`: `humanoide`, `quadrupede`, `serpente`, `gigante` ou `transformavel`. Escolhe os fallbacks.
- `flamePos` / `flameK`: compatibilidade com Mula e Boitatá.

**Sockets:** `centro`, `cabeca`, `boca`, `chama`, `mao_d`, `mao_e`, `pe_d`, `pe_e`, `cauda`, `chao`.

## 3. Eventos (`EV`)

| Evento | Quando |
|---|---|
| `ataque_inicio` | começa a preparação |
| `ativo_inicio` | abre a janela ativa |
| `recuperacao_inicio` | fecha a janela ativa |
| `ataque_fim` | o golpe termina |
| `acerto` | traz `pos` (o ponto de contato), `meta` e `dir` |
| `bloqueio` | resultado: `block`, `perfect`, `veil`, `armor` ou `break` |
| `esquiva_inicio`, `esquiva` | começo da esquiva e esquiva bem-sucedida |
| `erro` | o golpe passou no vazio |
| `dano` | vida perdida por quem recebeu |
| `agarrao`, `super`, `derrubado`, `derrotado` | — |

O payload sempre traz o atacante, o defensor, o golpe e o `meta`.

## 4. Sorteio visual isolado

O que depende do modelo usa `vrand()` ou `visual(fn)`: tremor de chama, brasas e o `clone()` dos fantasmas, que gera UUIDs.
- Em jogo, `VIS.rand` é o próprio `Math.random`, na mesma ordem da v0.18.
- Nos testes, desviá-lo prova que trocar o modelo não muda nenhum sorteio da luta. O resultado é o mesmo hash com o visual procedural, com `NullView` e com escala 2×.

**Regra para modelos novos:** nenhum código de visual pode chamar `Math.random` direto. Use `vrand()`.

## 5. Como plugar um GLB (`RigView`)

```js
const gltf = await new GLTFLoader().loadAsync('modelos/mapinguari.glb');
fighter.trocarVisual(new RigView('mapinguari', gltf, {
  escala: 1,
  clips: { idle: 'Idle', walk: 'Walk', light1: 'Jab', heavy: 'Slam', hurt: 'Hit', ko: 'Death' },
  ossos: { mao_d: 'hand_R', mao_e: 'hand_L', boca: 'jaw', cabeca: 'head', pe_d: 'foot_R', pe_e: 'foot_L' },
}));
```

- A duração do clipe é esticada para `preparação + ativo + recuperação` do golpe. **A animação nunca decide quando o golpe acerta.**
- Socket sem osso cai no ponto derivado dos dados, então nada quebra se faltar um osso.
- A hitbox continua no cilindro lógico, nunca no osso.

## 6. O que depende dos arquivos 3D (não validado)

- **Ossos e sockets reais:** nomes dos ossos de cada lenda (mão, boca, cauda, chama).
- **Mapeamento de clipes:** id lógico → nome do clipe, além do crossfade e da pose de impacto (`snap`).
- **Reações por anatomia:** hoje a reação é inclinação e afundamento do corpo inteiro. Com rig, entram osso de coluna e cabeça e os clipes `hurt_*`.
- **Escala e pivô:** o pé do modelo precisa ficar em `y = 0`, olhando para `+Z`.
- **Áudio:** `public/audio/sfx/` está vazia.
  - `hit_<elemento>` e os demais efeitos por evento já estão ligados e ficam mudos até existir o arquivo.
  - Os sons sintéticos seguem desligados (`ENABLE_PROTOTYPE_SYNTH=false`).
- `RigView` é um esqueleto: compila, segue o contrato e **ainda não foi testado com um GLB real**.
