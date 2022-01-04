'use strict';

const pkg = require('../package.json');

module.exports = package1;

function package1() {
    console.log(`Hello package-1 (version: ${pkg.version}`);
}
