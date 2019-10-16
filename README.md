# Mocha, Chai & Typescript setup

## Manual setup
1. __npm install chai mocha typescript ts-node @types/chai @types/mocha --save-dev__
2. add __"test": "mocha --require ts-node/register test/**/*.spec.ts"__ to scripts in package.json
3. write test
4. write function
5. run test with __npm run test__