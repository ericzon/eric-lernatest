'use strict';
const pkg = require('../package.json');

module.exports = package2;

function package2() {
    console.log(`Hello package-2 (version: ${pkg.version})`);
}
