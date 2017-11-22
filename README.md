# state-helper

[![build status](https://img.shields.io/travis/ladjs/state-helper.svg)](https://travis-ci.org/ladjs/state-helper)
[![code coverage](https://img.shields.io/codecov/c/github/ladjs/state-helper.svg)](https://codecov.io/gh/ladjs/state-helper)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/ladjs/state-helper.svg)](LICENSE)

> State helper for Lad


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install state-helper
```

[yarn][]:

```sh
yarn add state-helper
```


## Usage

```js
const StateHelper = require('@ladjs/state-helper');

const stateHelper = new StateHelper({
  // ...
});

// ..

// add dynamic view helpers
app.use(stateHelper.middleware);
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com/)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
