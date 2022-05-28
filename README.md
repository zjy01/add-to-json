# add-to-json
add toJSON method(unenumerable) to object

## Usage

```bash
npm i add-to-json
```

use default toJSON
```ts
import addToJSON from 'add-to-json';

const obj = { a: 1 };
const obj1 = addToJSON(obj);

Object.keys(obj1);
// ['a']

obj1.toJSON();
// { a: 1 }
```

DIY toJSON

```ts
import addToJSON from 'add-to-json';

const obj = { a: 1 };
const obj1 = addToJSON(obj, (obj) => ({ ...obj, b: 2}));

Object.keys(obj1);
// ['a']

obj1.toJSON();
// { a: 1, b: 2 }
```