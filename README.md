This app was an attempt to learn svelte through making a mario baseball draft simulator. I have previously made one in React and it is located 
[here](https://www.mariosluggersteambuilder.com/), go check it out. 

Any way, doing this is in Svelte was pretty fun. I actually think it was a bit easier not using MaterialUI as well. It would be easy to setup a theme with global css files and variables, even a theme toggle would be pretty simple to setup. I chose to use the writable store for `isDraftSet` and my global `teams` object. By assigning the teams as key/value pairs it was pretty easy to setup the snake format this time around. Because I didn't use MaterialUI components I didn't have as robust of a draft table as in the hosted app. I don't think it will be too difficult to write compare functions to sort by the headings without the help of the library though. 

Svelte-navigator made the route guards really easy

I didn't use TypeScript. Sue me.

I did draw up schema on my dry-erase board.

you'll probably disagree with the file structure. 
```
src
|_ components
| |_ Navigation
| |_ PrivateRoute
|_ data
|_ pages
| |_ Draftboard
| |_ Home
| |_ Roster
| |_ Setup
|_ util
|_ App.svelte
|_ store.js
```
---

# Mario Baseball Draft app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for _any_ path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
