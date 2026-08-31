# Landing page — Vestido Flora | MM Concept

Landing page estática, responsiva e mobile-first para a campanha de lançamento do Vestido Flora.

## Executar localmente

```bash
python3 -m http.server 8000
```

Acesse `http://localhost:8000`.

## Alterações rápidas

- Dados comerciais (WhatsApp, mensagem, preços, tamanhos e Grupo VIP): `config.js`.
- Fotos e logo: `assets/images.js`, armazenadas como texto Base64 para que o PR não contenha binários.
- Meta Pixel/Google Analytics: use o ponto comentado no `<head>` do `index.html`. Os CTAs possuem `data-track` e também publicam o evento `cta_click` em `window.dataLayer`.

Antes de publicar, configure o domínio/hospedagem, confirme o perfil oficial do Instagram e adicione os IDs reais das ferramentas de rastreamento desejadas.

## Publicar com GitHub Pages

1. Envie a branch para o GitHub e abra o Pull Request normalmente. Todos os arquivos do projeto são texto; as imagens oficiais estão preservadas em Base64 no arquivo `assets/images.js`.
2. Após o merge, abra **Settings → Pages** no repositório.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Selecione a branch principal, a pasta **/(root)** e clique em **Save**.
5. O GitHub mostrará o endereço público quando o deploy terminar.

Para substituir as fotografias sem adicionar arquivos binários, converta os novos arquivos para Base64 e atualize os valores correspondentes em `assets/images.js`.
