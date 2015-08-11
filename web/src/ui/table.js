var b = require('node_modules/bobril/index');
exports.TableCell = b.createVirtualComponent({
    shouldChange: function (ctx, me) {
        return me.data != ctx.data;
    },
    render: function (ctx, me) {
        me.tag = 'td';
        me.className = 'TableCell';
        me.children = '' + ctx.data.text;
    }
});
exports.TableRow = b.createVirtualComponent({
    shouldChange: function (ctx, me) {
        return me.data != ctx.data;
    },
    render: function (ctx, me) {
        var data = ctx.data;
        var classes = 'TableRow';
        if (data.active) {
            classes = 'TableRow active';
        }
        var cells = data.props;
        var children = [exports.TableCell({ text: '#' + data.id })];
        for (var i = 0; i < cells.length; i++) {
            children.push(exports.TableCell({ text: cells[i] }));
        }
        me.tag = 'tr';
        me.className = classes;
        me.attrs = { 'data-id': data.id };
        me.children = children;
    }
});
exports.Table = b.createVirtualComponent({
    shouldChange: function (ctx, me) {
        return me.data != ctx.data;
    },
    render: function (ctx, me) {
        var items = ctx.data.items;
        var children = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            children.push(b.withKey(exports.TableRow(item), item.id));
        }
        me.tag = 'table';
        me.className = 'Table';
        me.children = { tag: 'tbody', children: children };
    }
});
