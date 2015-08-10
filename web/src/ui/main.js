var b = require('node_modules/bobril/index');
var table_1 = require('./table');
var anim_1 = require('./anim');
var tree_1 = require('./tree');
exports.Main = b.createComponent({
    shouldChange: function (ctx, me) {
        return me.data != ctx.data;
    },
    render: function (ctx, me) {
        var data = ctx.data;
        var location = data.location;
        var section;
        if (location === 'table') {
            section = table_1.Table(data.table);
        }
        else if (location === 'anim') {
            section = anim_1.Anim(data.anim);
        }
        else if (location === 'tree') {
            section = tree_1.Tree(data.tree);
        }
        else {
            section = null;
        }
        me.className = 'Main';
        me.children = section;
    }
});
