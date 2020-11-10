const { search } = require('../index.js');

async function main() {
    console.log(await search(undefined, 'client'));
    console.log(await search('master', 'client'));
    console.log(await search('rpc', 'client'));
    console.log(await search('commando', 'client'));
    console.log(await search('stable', 'client'));
}

main();