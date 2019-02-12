const assert = require('assert');

describe('Loops', () => {
    const data = Array(10000000).fill(1);
    let old_runtime;
    let each_runtime;
    let chain_runtime;

    it('an explicit old-style loop runs', () => {
        const old_start = new Date();

        let val_1 = 0;
        for (let i =0; i < data.length; i++) {
            val_1 += data[i];
        }
        const old_end = new Date();
        old_runtime = old_end - old_start;
        console.log(old_runtime);
    });

    it('a for each loop runs', () => {
        const each_start = new Date();

        let val_2 = 0;
        for (const i of data) {
            val_2 += i;
        }
        const each_end = new Date();
        each_runtime = each_end - each_start;
        console.log(each_runtime);
    });

    it('a for each chain method runs', () => {
        const chain_start = new Date();

        let val_3 = 0;
        data.forEach((i) => {
            val_3 += i;
        });
        const chain_end = new Date();
        chain_runtime = chain_end - chain_start;
        console.log(chain_runtime);
    });

    it('an explicit old-style loop is the fastest', () => {
        assert.equal(old_runtime < each_runtime, true);
        assert.equal(old_runtime < chain_runtime, true);
    });

    it('a for each loop is faster than a chain method', () => {
        assert.equal(each_runtime < chain_runtime, true);
    });

    it('explicit loops take 1/10 the time as a chain loop', () => {
        assert.equal(old_runtime < (chain_runtime / 10), true);
    });
});
