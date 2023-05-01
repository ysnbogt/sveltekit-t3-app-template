<h1 align="center">Sveltekit × Prisma × tRPC × NextAuth.js × TailwindCSS</h1>

```zsh
$ git clone https://github.com/ysnbogt/sveltekit-t3-app-template
$ cd sveltekit-t3-app-template
$ npm i
$ npx prisma migrate dev # Execute after setting up below.
$ npm run dev
```

## ⚙️ env

**`.env`**

```env
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
AUTH_SECRET=""
DATABASE_URL="file:./dev.db"
```

### 🔑 Auth secret

Execute the following command and paste it into the `.env` file `AUTH_SECRET`

```zsh
$ openssl rand -hex 32 | pbcopy
```

### :octocat: GitHub provider

1. Move to https://github.com/settings/apps
2. Click the <kbd>New GitHub App</kbd> button on the **GitHub Apps** tab
3. Enter various information such as **GitHub App name**
4. Click <kbd>Create GitHub App</kbd> button
5. Copy and paste the **Client ID** from About into the `.env` file `GITHUB_CLIENT_ID`
6. Click <kbd>Generate a new client secret</kbd> button in **Client secrets**
7. Copy and paste **Client secret** into `GITHUB_CLIENT_SECRET` in `.env`

> **Note**<br>
> The sample program is very crude.
