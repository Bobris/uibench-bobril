var b = require('node_modules/bobril/index');
exports.TreeLeaf = b.createVirtualComponent({
    shouldChange: function (ctx, me) {
        return me.data != ctx.data;
    },
    render: function (ctx, me) {
        me.tag = 'li';
        me.className = 'TreeLeaf';
        me.children = ctx.data.id;
    }
});
exports.TreeNode = b.createVirtualComponent({
    shouldChange: function (ctx, me) {
        return me.data != ctx.data;
    },
    render: function (ctx, me) {
        var data = ctx.data;
        var children = [];
        for (var i = 0; i < data.children.length; i++) {
            var n = data.children[i];
            if (n.container) {
                children.push(b.withKey(exports.TreeNode(n), n.id));
            }
            else {
                children.push(b.withKey(exports.TreeLeaf(n), n.id));
            }
        }
        me.tag = 'ul';
        me.className = 'TreeNode';
        me.children = children;
    }
});
exports.Tree = b.createVirtualComponent({
    shouldChange: function (ctx, me) {
        return me.data != ctx.data;
    },
    render: function (ctx, me) {
        me.className = 'Tree';
        me.children = exports.TreeNode(ctx.data.root);
    }
});
