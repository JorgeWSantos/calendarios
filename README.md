# Projeto ABQM - Calendários

Este projeto é parte do ecossistema ABQM e utiliza os pacotes da biblioteca `@abqm-ui2` para construção da interface (tokens, ícones e componentes React).

---

## 🚀 Tecnologias utilizadas

- React 19+
- TypeScript
- Vite
- Styled-components
- @abqm-ui2/icons
- @abqm-ui2/react
- @abqm-ui2/tokens

---

## 📦 Instalação

1. Clone o repositório:

   ```bash
   git clone <URL_CALENDARIOS>
   cd calendarios
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode o projeto:
   ```bash
   npm run dev
   ```

---

## 📂 Scripts disponíveis

Todos os scripts podem ser executados com `npm run <nome-do-script>`.

| Script       | Descrição                                                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dev`        | Inicia o servidor de desenvolvimento com Vite.                                                                                                          |
| `build`      | Gera a versão final otimizada do projeto.                                                                                                               |
| `preview`    | Executa uma prévia local do projeto já empacotado.                                                                                                      |
| `update:ui`  | Atualiza os pacotes `@abqm-ui2/icons`, `react`, `tokens` para últimas versões **permitidas** no `package.json`. Usa `npm update`.                       |
|              |
| `upgrade:ui` | Atualiza os pacotes `@abqm-ui2/*` para a **última versão publicada** no NPM, inclusive versões major. Usa `npm-check-updates`. Requer commit posterior. |

---

## 🛠 Scripts internos (`package.json`)

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "update:ui": "npm update @abqm-ui2/icons @abqm-ui2/react @abqm-ui2/tokens",
  "upgrade:ui": "npx npm-check-updates -u @abqm-ui2/icons @abqm-ui2/react @abqm-ui2/tokens && npm install",
}
```

> 💡 Recomenda-se executar `upgrade-ui` somente em ambientes locais e revisar manualmente as mudanças antes de comitar.

---

## ✅ Requisitos

- Node.js `>=22`
- NPM `>=8`

---

## 📄 Licença

Este projeto é privado e de uso interno da ABQM. Todos os direitos reservados.
