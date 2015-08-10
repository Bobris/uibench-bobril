import * as b from 'node_modules/bobril/index';

export const AnimBox = b.createComponent<any>({
    shouldChange(ctx: b.IBobrilCtx, me: b.IBobrilNode): boolean {
        return me.data != ctx.data;
    },
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        var data = ctx.data;
        var time = data.time;
        me.style = {
          borderRadius: time % 10,
          background: 'rgba(0,0,0,' + (0.5 + ((time % 10) /10)) + ')'
        };
        me.className ='AnimBox';
        me.attrs = { 'data-id': data.id };
    }
});

export const Anim = b.createComponent<any>({
    shouldChange(ctx: b.IBobrilCtx, me: b.IBobrilNode): boolean {
        return me.data != ctx.data;
    },
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        var data = ctx.data;
        var items = data.items;

        var children = [];
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          children.push(b.withKey(AnimBox(item), item.id));
        }

        me.className='Anim';
        me.children = children;
    }
});
