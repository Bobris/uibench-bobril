import * as b from 'node_modules/bobril/index';

export const TreeLeaf = b.createVirtualComponent<any>({
    shouldChange(ctx: b.IBobrilCtx, me: b.IBobrilNode): boolean {
        return me.data != ctx.data;
    },
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'li';
        me.className = 'TreeLeaf';
        me.children = ctx.data.id;
    }
});

export const TreeNode = b.createVirtualComponent<any>({
    shouldChange(ctx: b.IBobrilCtx, me: b.IBobrilNode): boolean {
        return me.data != ctx.data;
    },
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        var data = ctx.data;
        var children = [];

        for (var i = 0; i < data.children.length; i++) {
          var n = data.children[i];
          if (n.container) {
            children.push(b.withKey(TreeNode(n), n.id));
          } else {
            children.push(b.withKey(TreeLeaf(n), n.id));
          }
        }
        me.tag='ul';
        me.className = 'TreeNode';
        me.children = children;
    }
});

export const Tree = b.createVirtualComponent<any>({
    shouldChange(ctx: b.IBobrilCtx, me: b.IBobrilNode): boolean {
        return me.data != ctx.data;
    },
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.className = 'Tree';
        me.children = TreeNode(ctx.data.root);
    }
});
