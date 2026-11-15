# Auditoria inicial — Folclore Sombrio v0.6 → v0.7

Data: 2026-11-14
Branch: `dev/auditoria-movimento-audio-v07`
Base: `main`, commit `df1defaba8d65943d3db835a1acb4d76b13c2344`

## Constatações verificadas no GitHub

- O repositório publicado inclui `index.html`, `sw.js`, `manifest.webmanifest`, `assets/index-D1NLOXNs.js` (bundle minificado de ~630 KB), `assets/arena.webp`, ícones e retratos em `media/`.
- Os arquivos-fonte citados nos relatórios de desenvolvimento **não estão na branch principal do GitHub**: `package.json`, `src/main.js`, `src/fighter.js`, `src/moves.js`, `src/input.js`, `src/settings.js` e módulos de animação/áudio.
- O PWA utiliza o service worker `sw.js`, com cache versionado. Mudar arquivos publicados exige validar atualização de cache e atualização no celular.
- `media/LEIA-ME.md` documenta a substituição de sons sintetizados por arquivos externos; os canais de áudio e volumes já existem na interface.

## Bloqueio para intervenção segura

O bundle de produção está minificado e mistura dependências Three.js com lógica própria. Editá-lo diretamente para implementar animação ou alterar o áudio é uma rota de alto risco: difícil de testar, manter e reproduzir. **Não alterar o bundle compilado como código-fonte.**

É necessário recuperar da máquina de desenvolvimento o projeto **antes do build**, com `package.json`, `src/`, `public/` e configuração Vite. Isso pode ser feito com upload de ZIP do diretório original (omitindo `node_modules/`, `dist/` e segredos) ou adicionando esses arquivos em uma branch separada do GitHub.

## Plano v0.7, assim que o código-fonte estiver acessível

1. Desligar por padrão o fallback de áudio sintetizado **sem remover** a infraestrutura de volumes e arquivos de áudio.
2. Separar a animação visual da simulação (hitboxes, deslocamento efetivo, quadros, dano e cooldown).
3. Saci: postura dinâmica, inclinação e antecipação de movimento, giros e esquivas acrobáticas de uma perna.
4. Curupira: deslocamento furtivo e pés permanentemente invertidos; diferenciar seu supremo da voadora do Saci e valorizar assobio/rastros falsos.
5. Validar 16 confrontos e controles de teclado/toque, com comparação dos parâmetros antes/depois.
6. Rodar build e testes antes de criar PR; manter `main`/GitHub Pages intocados até aprovação.

## Regras de segurança

- Nunca alterar a versão pública sem testes e aprovação.
- Preservar lógica de combate v0.6 e os assets existentes.
- Guardar backup/versionamento antes de mudanças.
- Não introduzir novas dependências pagas.
