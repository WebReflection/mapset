const {MapSet, WeakMapSet} = require('../cjs');

console.assert((new MapSet).set('key', 'map') === 'map');
console.assert((new WeakMapSet).set({key: 'key'}, 'weak-map') === 'weak-map');
