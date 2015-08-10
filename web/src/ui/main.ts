import * as b from 'node_modules/bobril/index';
import {Table} from './table';
import {Anim} from './anim';
import {Tree} from './tree';

export const Main = b.createComponent<any>({
    shouldChange(ctx: b.IBobrilCtx, me: b.IBobrilNode): boolean {
        return me.data!=ctx.data;
    },
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        let data = ctx.data;
        let location = data.location;

        let section: b.IBobrilChildren;
        if (location === 'table') {
          section = Table(data.table);
        } else if (location === 'anim') {
          section = Anim(data.anim);
        } else if (location === 'tree') {
          section = Tree(data.tree);
        } else {
          section = null;
        }
        me.className = 'Main';
        me.children = section;
    }
});
