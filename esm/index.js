export class Map extends globalThis.Map {
  set(key, value) {
    super.set(key, value);
    return value;
  }
}

export class WeakMap extends globalThis.WeakMap {
  set(key, value) {
    super.set(key, value);
    return value;
  }
}
