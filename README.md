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

## ⚡️ Supabase

1. Go to https://app.supabase.com/project
2. Click <kbd>+ New Project</kbd> button
3. **Create a new project** Fill in each field and click the <kbd>Create new project</kbd> button
4. Click on the **Project Settings** tab at the bottom of the left sidebar
5. Go to `Settings > Project Settings > Database`
6. Match each information in `Connection info` to the format `DATABASE_URL="postgresql://${User}:${Password}@${Host}:${Port}?schema=public"`
7. Paste into an `.env` file

> **Note**<br>
> To reflect the database, delete `./prisma/migrations` and then execute the following command.<br>You can also use `make prisma-update`.
>
> ```zsh
> $ npx prisma migrate dev --name init && npx prisma generate
> > y
> ```
>
> If you are using `npx prisma studio`, stop prisma studio with <kbd>Ctrl</kbd> + <kbd>c</kbd> and run it again.

---

> **Note**<br>
> The sample program is very crude.
