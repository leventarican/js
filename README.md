# nextjs
Next.js is a javascript framework build on top of __React__. Primary lang is __JS__ or __Typscript__.
It has support for server-side rendering, static site generation, and API routes.

Create app from scratch
* create `packages.json`
```json
{
}
```
* install dependencies
```bash
npm install react react-dom next
```

Instead of create from scratch you can also create guided nextjs app
```bash
npx create-next-app 
npm run dev
# open http://localhost:3000 
```

## react
* example: `nextjs/react.html`
* based on: https://nextjs.org/learn/foundations/from-javascript-to-react
* see also: https://nextjs.org/docs/getting-started

## javascript
* example `nextjs/js.html`

# nodejs
* Node.js is a JavaScript runtime environment
* see example `main.js` - no html code only _pure_ JavaScript
* run with: `node main.js`

npm and npx
* npm is a paket manager for Node.js
* npx is the cli for npm
* a repository for libraries

The packages can be managed in a package.json file.
See also electron example: `electron-app/package.json`.

Create package.json file in current dir
```bash
npm init --yes
```

# p5
* drawing with p5
* see `p5-example.html` / `p5-example.js`

# hands-on chartjs
* display data, chart, ... with https://www.chartjs.org/
* example: chart.html (you have to include Chart.js)

![](screenshot-chart.png)

# JavaScript in one file.
* Mainly using ES6
* from variables to objects
* also using a bit HTML and CSS
* dev environment is visual studio code and chrome (CTRL+SHIFT+I for dev tools)
* another option would also be pure JavaScript with the usage of Node.js

# cheatsheet: firefox developer
* webconsole: `CTRL + SHIFT + K`
* responsive design mode: `CTRL + SHIFT + M`
* debug in firefox: `CTRL + SHIFT K` > `Debugger` > set breakpoint

# tools for livecoding, hot reload, server, ...
* http-server
* browsersync
* python module simplehttpserver
