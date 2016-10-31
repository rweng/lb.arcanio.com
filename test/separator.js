var colors = require('chalk');
const time = (new Date()).toISOString().split('T')[1].split('.')[0];
before(() => console.log(colors.magenta(`[${time}] Running tests ...\n`)));
