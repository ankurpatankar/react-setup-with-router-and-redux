###### Sourced from
1) https://codeburst.io/setting-up-a-react-project-from-scratch-d62f38ab6d97
2) http://manojsinghnegi.com/blog/2017/09/03/Implementing-redux-and-react-router-v4-in-your-react-app/

### Init NPM Project
npm init

### Install React
npm install --save react react-dom

### Install Webpack
npm install --save webpack webpack-dev-server

### Install Babel
npm install --save-dev babel-cli babel-core babel-loader babel-plugin-transform-object-rest-spread babel-preset-es2015 babel-preset-react babel-preset-stage-0 babel-register

### Setup webpack
mkdir webpack
cd webpack
touch webpack.dev.config.js

### CSS Loader
npm install --save-dev style-loader css-loader less-loader
npm install --save-dev less

### Install Redux
npm install --save redux react-redux

### Configure Redux
Add store.js

### Install redux-thunk
npm install --save redux-thunk

#### Why use redux thunk and what are Async actions
https://redux.js.org/docs/advanced/AsyncActions.html

### Start server
### Added the following in package.json
### "dev": "./node_modules/.bin/webpack-dev-server --config ./webpack/webpack.dev.config.js"
npm run dev
