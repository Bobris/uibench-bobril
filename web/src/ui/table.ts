import * as b from 'node_modules/bobril/index';

export const TableCell = b.createVirtualComponent<any>({
    shouldChange(ctx: b.IBobrilCtx, me: b.IBobrilNode): boolean {
        return me.data != ctx.data;
    },
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'td';
        me.className = 'TableCell';
        me.children = ''+ctx.data.text;
    }
});

export const TableRow = b.createVirtualComponent<any>({
    shouldChange(ctx: b.IBobrilCtx, me: b.IBobrilNode): boolean {
        return me.data != ctx.data;
    },
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        let data = ctx.data;
        let classes = 'TableRow';
        if (data.active) {
            classes = 'TableRow active';
        }
        let cells = data.props;

        let children = [TableCell({ text: '#' + data.id })];
        for (var i = 0; i < cells.length; i++) {
            children.push(b.withKey(TableCell({ text: cells[i] }), <any>i)); // Here key is not needed added just to follow React implementation
        }
        me.tag = 'tr';
        me.className = classes;
        me.attrs = { 'data-id': data.id };
        me.children = children;
    }
});

export const Table = b.createVirtualComponent<any>({
    shouldChange(ctx: b.IBobrilCtx, me: b.IBobrilNode): boolean {
        return me.data != ctx.data;
    },
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        let items = ctx.data.items;
        let children: b.IBobrilNode[] = [];
        for (var i = 0; i < items.length; i++) {
            let item = items[i];
            children.push(b.withKey(TableRow(item), item.id));
        }
        me.tag = 'table';
        me.className = 'Table';
        me.children = { tag: 'tbody', children };
    }
});
