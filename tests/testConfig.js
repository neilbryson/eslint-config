const path = require('path');

module.exports = {
  extends: path.resolve(process.cwd(), 'index.js'),
  parserOptions: {
    project: path.resolve(process.cwd(), './tsconfig.json'),
  },
}
