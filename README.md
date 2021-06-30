# mapset

`Map` and `WeakMap` that returns value on `.set(...)`.

```js
import {Map, WeakMap} from '@webreflection/mapset';

const map = new Map;

map.get('any') || map.set('any', 'value');
// "value"
```
