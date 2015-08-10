var b = require('node_modules/bobril/index');
exports.AnimBox = b.createComponent({
    shouldChange: function (ctx, me) {
        return me.data != ctx.data;
    },
    render: function (ctx, me) {
        var data = ctx.data;
        var time = data.time;
        me.style = {
            borderRadius: time % 10,
            background: 'rgba(0,0,0,' + (0.5 + ((time % 10) / 10)) + ')'
        };
        me.className = 'AnimBox';
        me.attrs = { 'data-id': data.id };
    }
});
exports.Anim = b.createComponent({
    shouldChange: function (ctx, me) {
        return me.data != ctx.data;
    },
    render: function (ctx, me) {
        var data = ctx.data;
        var items = data.items;
        var children = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            children.push(b.withKey(exports.AnimBox(item), item.id));
        }
        me.className = 'Anim';
        me.children = children;
    }
});
