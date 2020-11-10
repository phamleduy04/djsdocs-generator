# djsdocs-generator
 Simple Discord.js docs wrapper
 
# Methods
```js
search(branch, query)
```
| Params | Type   | Optional | Default |
|--------|--------|----------|---------|
| branch | string | x        | master  |
| query  | string |          |         |
# Example
```js
const { search } = require('djsdocs-generator');
async function main() {
    // default branch is master
    console.log(await search(undefined, 'client'));
}

main();
```

## How to send the request in Discord.js?
```js
const { search } = require('djsdocs-generator');
const body = await search(undefined, 'client')
<channel>.send({ embed: body });
```


