# Post app

Project to build a wiki app to find and save the user favourite comic data from the Marvel API

Try the demo [here](https://citlallidmg.github.io/wikimarvel/)

## Features

- Search of comics by its title
- Shows details of the selected comic
- Show a simulation of the process to create a new collection of comics
- Muestra las colecciones "guardadas"

## Stack

- Create React App
- React Redux
- Redux Saga
- Redux Form
- Redux Devtools Extension

## API consumed

- [Developer Marvel API](https://developer.marvel.com/)

## Hosting

- [gh-pages](https://github.com/gitname/react-gh-pages)

## Quick Start

Clone and run the repository

```shell
$ git clone https://github.com/CitlalliDMG/wikimarvel.git
$ cd redux-example
$ npm install
$ npm start
```

Also you will need to get your own public key from the Marvel API.

```javascript
// src/config/config.js

const configuration = {
  privateKey: "your_marvel_private_key",
  publicKey: "your_marvel_public_key"
};

export default configuration;
```

## Deploying to GitHub Pages

Configure this app with your project-specific details:

```json
// package.json

{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME",
  // ....
  "scripts": {
    // ....
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Build and deploy the app:

```shell
$ npm run deploy
```

## Author

- Developed by [Citlalli Del Moral](https://github.com/CitlalliDMG)
