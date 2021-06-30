const {Map, WeakMap} = require('../cjs');

console.assert((new Map).set('key', 'map') === 'map');
console.assert((new WeakMap).set({key: 'key'}, 'weak-map') === 'weak-map');
