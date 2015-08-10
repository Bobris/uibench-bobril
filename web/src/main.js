var b = require('node_modules/bobril/index');
var main_1 = require('./ui/main');
uibench.init('Bobril', '4.0.0');
document.addEventListener('DOMContentLoaded', function (e) {
    var container = document.querySelector('#App');
    var cache = null;
    uibench.run(function (state) {
        cache = b.updateChildren(container, main_1.Main(state), cache, null, null, 1000000);
    }, function (samples) {
        cache = b.updateChildren(container, { tag: "pre", children: JSON.stringify(samples, null, ' ') }, cache, null, null, 1000000);
    });
});
