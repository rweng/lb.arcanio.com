var execSync = require('child_process').execSync;
var mockery = require('mockery');
var R = require('ramda');

// mock relative html requires
const files = execSync('find src -name *.html -exec basename {} \\;').toString().split('\n').filter(file => !R.isEmpty(file))
files.forEach(file => mockery.registerMock('./' + file));

mockery.registerMock('bootstrap-datepicker', {});
mockery.registerMock('bootstrap/dist/js/bootstrap', {});
mockery.registerMock('!style!css!bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css', '');
mockery.registerMock('!style!css!ag-grid/dist/styles/ag-grid.css', '');
mockery.registerMock('!style!css!ag-grid/dist/styles/theme-bootstrap.css', '');
mockery.registerMock('chart.js', { val: 'chart mock' });
mockery.registerMock('ag-grid', { val: 'ag grid mock' });
mockery.registerSubstitute('debug/browser', 'debug')
mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false
});
