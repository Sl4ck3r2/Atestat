# Description

Well... Basically it is a simple project created using `create-react-app`.

Required versions of `node` and `npm` are listened in `package.json` under `engine.node`
and `engine.npm` keys (basically, on installing `nodejs` `npm` will be installed automatically too).

# Installation

1. Open the terminal in project's directory
2. Write `npm ci` to install the dependencies (please, don't you `npm install` for it because it can bump versions of some packages and override `package-lock.json`)
3. Copy `.env.example` file and rename it to `.env`
4. Set the correct link to `REACT_APP_BACKEND_BASE_URL` there. Which stands for link to backend
5. Done, now you can build or start dev server to develop the app

## Some notes

### Styles

Please use wherever it is possible css modules and not global css. Use `SCSS` as preprocessor.

### Local development and CORS errors

You might have `CORS` errors in console on calling API methods of backend. In that case

1. Open `package.json`
2. Find `proxy` key in it
3. Change its value to the actual backend
4. Open `.env`
5. Set `REACT_APP_BACKEND_BASE_URL` to `http://localhost:3000/api/v1`

It will work like simple reverse proxy, all requests will be addressed to `localhost:3000`
first and if no response will be received (well, because we don't have backend
exposed on 3000 port but frontend) and then will redirect (under the hood) request
to URL specified in `proxy` of `package.json`.

Be carefully and **don't commit changes** of `proxy` key in git.

It **should be used just for local development**. Basically, backend should solve that
issue in the future, and you won't have these errors and won't have to "hack" API calls.

### API client and types generation

We are using `openapi-generator-cli` here to "stick" to the types provided from backend.

**Why?** For cases when backend changes its schema to catch all errors on frontend
on build-time, but not runtime.

So in cases when backend updates its schema we, as developers **must** run
`npm run api:download-and-generate` command and get new API clients, types and so on.

**DON'T use generated files directly**. Connect api clients in `src/utils/api.ts` file.
There you have example of 2 apis connected: project and standup.

# Code & Commit styles

## Code style

Basically you have `eslint` in the project so feel free to enable it in your IDE.

A lot of things are configured to be auto-fixable, so you don't have to fix everything
manually like import sorting, and so on.

## Commit style

I propose to relly angular commit style. You can read about it [here](https://gist.github.com/brianclements/841ea7bffdb01346392c)
and [here](https://nitayneeman.com/posts/understanding-semantic-commit-messages-using-git-and-angular/).

In the future, it can be used to generate changelogs automatically.

# Reminder

1. Don't forget to update dependencies
2. Don't forget to bump front-end version using `npm version` command
3. Check out other `README.md` files in the project
