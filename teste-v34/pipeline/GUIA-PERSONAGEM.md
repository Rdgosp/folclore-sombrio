# Bramoré · Guia de preparo de personagem 3D

Este é o caminho que o Boto seguiu, do modelo gerado por IA até o jogo. Siga a mesma ordem nos
próximos personagens: Curupira, Cuca, Iara, Saci e Mula. Os arquivos citados ficam nesta pasta:

- `preparar_personagem.py`: script do Blender que faz todo o preparo.
- `boto.json`: configuração do Boto. Serve de modelo para os outros personagens.
- `render.py`: fotos de teste em pose (frente, lado e costas).
- `glbtex.py`: reduz a textura do GLB final para 1024 px em JPEG.

## 1. Regras de ouro

1. **Trabalhe sempre numa cópia do .blend.** O arquivo aberto no Blender é o original e nunca é sobrescrito.
2. **Não refaça os pesos automaticamente** (botão *Automatic Weights*, que usa *heat*) em malhas geradas
   por IA. Essas malhas têm roupas sobrepostas, como paletó, colete e camisa. O cálculo automático gera
   espetos e rasga peças. O certo é **corrigir os pesos que vieram do auto-rig**. No JSON, isso é `"repesar": false`.
3. **Teste em poses extremas antes de exportar**: soco, chute, agachamento e braços abertos (`render.py`).
   Uma malha que só foi vista parada sempre parece boa.
4. **Limpe as animações antes das fotos de teste.** Uma *action* ativa (o Boto tinha `Idle_Teste`)
   sobrescreve a pose de teste, e a comparação fica falsa.

## 2. Esqueleto

**Ossos obrigatórios** (nomes Mixamo; o jogo procura exatamente estes):

```
Hips, Spine, Spine1, Spine2, Neck, Head
LeftArm, LeftForeArm, LeftHand      RightArm, RightForeArm, RightHand
LeftUpLeg, LeftLeg, LeftFoot, LeftToeBase      RightUpLeg, RightLeg, RightFoot, RightToeBase
```

- **Opcionais**: `LeftShoulder` / `RightShoulder` (clavículas) e `HeadTop_End`.
- **Ossos extras** (acessórios e partes que balançam) são criados pelo JSON, no campo `ossos`:
  - Um osso **rígido** acompanha o pai sem dobrar. Exemplos: chapéu, máscara, cachimbo.
  - Uma **cadeia** `Nome_1..n` dobra aos poucos e recebe mola no jogo. Exemplos: faixa, cabelo, capa,
    rabo, saia, cipó.
- **Ossos de controle** (IK, *poles*) e *constraints* são apagados. O jogo só usa rotação de ossos que deformam.
  `Root` e `HeadTop_End` ficam sem deformar (`sem_deform`).

## 3. Passo a passo

```bash
# 0) cópia de trabalho
cp Personagem_rig.blend trabalho/Personagem.blend

# 1) prévia das regiões: pinta cada região de uma cor (vermelho, verde, azul...) e renderiza.
#    Repita ajustando o JSON até as cores cobrirem só a peça certa.
blender -b trabalho/Personagem.blend --python preparar_personagem.py -- personagem.json saida.blend saida.glb --previa

# 2) preparo de verdade
blender -b trabalho/Personagem.blend --python preparar_personagem.py -- personagem.json saida.blend saida.glb

# 3) fotos de teste comparando o original e o preparado
for p in soco chute agacha bracos; do
  blender -b trabalho/Personagem.blend --python render.py -- r/orig_$p $p
  blender -b saida.blend            --python render.py -- r/novo_$p $p
done

# 4) textura em 1024 JPEG (o GLB do Boto caiu de 5,8 MB para 2,4 MB)
python glbtex.py saida.glb personagem.glb 1024
```

O que o script faz, nesta ordem:

| Etapa | Por quê |
|---|---|
| **Solda** os vértices repetidos (`solda`) | A IA entrega a malha cortada nas costuras da UV. Cada metade recebia um peso diferente, e a costura **abria** ao dobrar. No Boto, 50.541 vértices viraram 20.666, numa peça só. |
| Lê a **cor da textura** por vértice | As regiões das peças são achadas por cor, posição e peso. |
| Cria os **ossos extras** | Usa os `pontos` do JSON: 2 pontos fazem um osso; 3 ou mais fazem uma cadeia. |
| Remove **controles e constraints** | O jogo não lê IK. Além disso, um osso de controle deformando estraga a malha. |
| **Corrige os lados** (`corrigir_lados`, `lados_z`) | Remove peso de osso esquerdo do lado direito, e vice-versa. O Boto tinha 2.044 vértices da direita presos ao ombro esquerdo. A faixa em Z limita a correção ao tronco, porque os pés cruzam o centro. |
| **Tetos** (`tetos`) | O peso da coxa que subia demais vai para o quadril. Isso evita que a cintura "caia" ao chutar. |
| **Pesos das regiões** | Peça rígida: 100% no osso. Cadeia: mistura gradual (`peso_raiz` na raiz, que cresce até a ponta). |
| Suaviza, limita a 4 pesos por vértice e normaliza | É exigência do glTF e deixa as transições macias. |
| Relatório | Lista vértices sem peso, vazamentos de lado e o tamanho de cada região. |
| Exporta o GLB | Eixo Y para cima, só ossos que deformam, sem animações. |

### Regiões (campo `regiao`)

Uma região é uma lista de filtros. Um vértice entra se passar em **todos** os filtros de **algum** item:

| Chave | Exemplo | Significado |
|---|---|---|
| `caixa` | `[[x0,y0,z0],[x1,y1,z1]]` | Dentro da caixa, em metros, com Z para cima. |
| `lum_min` / `lum_max` | `0.25` | Brilho da textura (0 a 1). Chapéu branco: alto. Cabelo: baixo. |
| `sat_min` / `sat_max` | `0.28` | Saturação. A faixa rosa se separa do terno branco por aqui. |
| `raio_min` | `[cx,cy,r]` | Fora do cilindro vertical. Pega a aba do chapéu sem pegar a cabeça. |
| `longe_de` | `[[a],[b],r]` | Longe do segmento a–b. Tira a mão que encosta na faixa. |
| `excluir_pesos` | `{"LeftHand":0.05}` | Ignora vértices que já têm esse peso. Também protege as mãos. |

Para achar os números, abra a cópia no Blender, selecione alguns vértices da peça e leia a posição
(N > Item). Depois confirme com `--previa`.

## 4. Orçamento

- **Malha**: até cerca de 25 mil vértices depois da solda. O Boto ficou com 20,6 mil e não precisou de
  decimação. Acima disso, use *Decimate* (Collapse) numa cópia **antes** do preparo.
- **Textura**: uma de 1024 px em JPEG (`glbtex.py`). Use 2048 só para um chefe em close.
- **GLB final**: até cerca de 3 MB por personagem. O jogo carrega todos os personagens no celular.

## 5. No jogo (`src/models.js`)

O GLB não tem animação. O **esqueleto procedural** de cada personagem continua mandando, e
`attachBotoGlb` copia a rotação de cada grupo para o osso correspondente (retarget por diferença,
então a pose de repouso da malha não importa).

- **Mapa de ossos** (`BOTO_MAP`): `[osso do GLB, grupo procedural, fração]`.
  - Use uma fração menor que 1 para dividir um giro entre ossos. Pescoço .35 + cabeça .65; coluna em 3 partes.
  - Um osso extra também pode seguir um grupo. Exemplo: `['Faixa_1', 'lL', .55]` faz a faixa acompanhar
    a coxa esquerda.
- **Cadeias com mola** (`BOTO_CHAINS`): `[prefixo, nº de ossos, rigidez, amortecimento, desvio máximo]`.
  - A ponta da cadeia é um ponto com massa que persegue a pose com atraso.
  - O desvio é dividido entre os ossos.
  - Valores do Boto: Faixa `70, 9, .9`; Cabelo `90, 10, .6`. Rigidez maior deixa a peça mais dura;
    amortecimento maior faz ela balançar menos.
- **Acessório que sai do corpo** (o chapéu): o osso rígido `Chapeu` é reposicionado no lugar do chapéu
  procedural da mão (`hatH`). O deslocamento é medido uma vez, em repouso. Assim os golpes de chapéu
  continuam funcionando com o chapéu da própria malha.

Para um personagem novo:

1. Copie `attachBotoGlb` e o mapa.
2. Troque os nomes dos grupos procedurais.
3. Liste as cadeias (rabo da Cuca, cabelo da Iara, gorro do Saci...).

## 6. Limites atuais (o que este preparo não faz)

- **Dedos**: a malha da IA tem a mão fundida, então não há ossos de dedo. Para ter dedos, a mão
  precisa ser remodelada ou regerada com os dedos separados.
- **Ossos de torção** (*twist*) no antebraço: ainda não existem. Um giro grande do pulso amassa o
  antebraço.
- **Rosto**: sem *shape keys* (boca e olhos). As expressões continuam vindo de peças e da cor.
- **Animações prontas** (Mixamo e similares): precisam da conta do próprio usuário, e o jogo atual não
  toca clipes. O retarget procedural é o caminho.
