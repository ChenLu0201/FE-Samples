## React Todos with ES6

### init project
- requirements

	make sure node installed. you can use [nvm]() to install it.

	make sure yarn is installed. you can run `brew install yarn` to install it globally.

- create project Todos
    ```
    yarn init
    ```
- setup babel and webpack
	```
    yarn add webpack webpack-dev-server path --save-dev
    yarn add react react-dom --save-dev
    yarn add babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
    ```

### build project with webpack
- add webpack configuration file`webpack.config.js`
- add plugin to build html file