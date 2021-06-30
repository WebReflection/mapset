'use strict';
class Map extends globalThis.Map {
  set(key, value) {
    super.set(key, value);
    return value;
  }
}
exports.Map = Map

class WeakMap extends globalThis.WeakMap {
  set(key, value) {
    super.set(key, value);
    return value;
  }
}
exports.WeakMap = WeakMap
