## React Todos with ES6

### Init project
1. requirements

	make sure node installed. you can use [nvm]() to install it.

	make sure yarn is installed. you can run `brew install yarn` to install it globally.

2. create project Todos
    ```
    yarn init
    ```
3. setup babel and webpack
	```
    yarn add webpack webpack-dev-server path --save-dev
    yarn add react react-dom --save-dev
    yarn add babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
    ```

### Build project with webpack
- add webpack configuration file`webpack.config.js`
- add plugin to build html file
- `yarn start` to serve development environment

### Introduce eslint

### Styling React Components in Sass
- yarn add css-loader style-loader --dev
- yarn add sass-loader node-sass --dev
- yarn add extract-text-webpack-plugin --dev

### introduce unit tests

