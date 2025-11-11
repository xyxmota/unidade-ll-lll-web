# Atividade 03 - Adivinhe (React)

Projeto minimal em React (Vite) implementando a interface solicitada no PDF e o mock fornecido.

Como rodar

1. Instale dependências:

```bash
npm install
```

2. Rode em modo desenvolvimento:

```bash
npm run dev
```
<<<<<<< HEAD
=======

Observações

- Imagens (`logo.png`, `Frame.jpg`, `Imagem colada.png`) já estão no repositório — o app as referencia como `/logo.png` e `/Frame.jpg`.
 - Imagens (`logo.png`, `Frame.jpg`, `Imagem colada.png`) foram movidas para a pasta `public/` (Vite serve arquivos em `public/` a partir da raiz, por isso as referências no código continuam a funcionar: `/logo.png`, `/Frame.jpg`).
 - O PDF da atividade foi movido para `docs/Atividade 03 - REACT - V3.pdf`.

Deploy (GitHub Pages)

This project includes a GitHub Actions workflow that builds the Vite app and publishes the output to GitHub Pages whenever you push to the `main` branch.

How it works:
- The action runs `npm ci` and `npm run build`.
- The `dist/` output is deployed to GitHub Pages using `peaceiris/actions-gh-pages`.

To publish the site:
1. Commit and push your changes to `main`:

```bash
git add .
git commit -m "Prepare site for GitHub Pages"
# Atividade 03 - Adivinhe (React)

Projeto minimal em React (Vite) implementando a interface solicitada no PDF e o mock fornecido.

Como rodar

1. Instale dependências:

```bash
npm install
```

2. Rode em modo desenvolvimento:

```bash
npm run dev
```

Observações

- As imagens (`logo.png`, `Frame.jpg`, `Imagem colada.png`) foram movidas para `public/` —
	o Vite serve arquivos em `public/` a partir da raiz, por isso as referências no código continuam
	funcionando (por exemplo: `/logo.png`, `/Frame.jpg`).
- O PDF da atividade foi movido para `docs/Atividade 03 - REACT - V3.pdf`.

Deploy (GitHub Pages)

Este repositório inclui um workflow do GitHub Actions que gera a build do Vite e publica o
conteúdo de `dist/` no GitHub Pages sempre que há um push para a branch `main`.

Como funciona:
- A Action roda `npm ci` e `npm run build`.
- A saída `dist/` é publicada no GitHub Pages usando `peaceiris/actions-gh-pages`.

Como publicar o site:

1. Faça commit e push para `main`:

```bash
git add .
git commit -m "Prepare site for GitHub Pages"
git push origin main
```

2. A workflow será executada automaticamente. Após a conclusão, abra Settings → Pages no
	 repositório para ver a URL publicada, ou acesse `https://<seu-usuario>.github.io/<seu-repositorio>/`.

Notas

- O `vite.config.js` define `base: './'` para que o site funcione com caminhos relativos no Pages.
- Se preferir não usar Actions, posso alterar a build para colocar os arquivos em `docs/` e você
	pode servir a partir de `main/docs` (opção alternativa).
