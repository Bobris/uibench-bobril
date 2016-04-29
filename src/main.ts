/// <reference path="uibench.d.ts" />
import * as b from 'bobril';
import {Main} from './ui/main';

uibench.init('Bobril', '4.38.0');

document.addEventListener('DOMContentLoaded', function (e) {
    document.body.innerHTML = "<div id=\"App\"></div>";
    let state = null;
    let samples = null;
    b.init(() => {
        if (state != null) {
            return Main(state);
        } else {
            return { tag: "pre", children: JSON.stringify(samples, null, ' ') };
        }
    }, <HTMLElement>document.querySelector('#App'));
    let cache = null;
    uibench.run(
        function (astate) {
            state = astate;
            samples = null;
            b.invalidate();
            b.syncUpdate();
        },
        function (asamples) {
            state = null;
            samples = asamples;
            b.invalidate();
            b.syncUpdate();
        }
    );
});
