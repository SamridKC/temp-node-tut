// NPM, when we install node we also install npm
// package: resulable code. (package, dependecy, module pretty much are the same things)

//--------------------------------------------------------------------
// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, create properties etc)
// npm init (step by steo, press enter to skip)
// npm init -y (everything default)


const _ = require('lodash');

const items = [1 , [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(items)
console.log(newItems)