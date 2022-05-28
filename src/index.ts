type TToJSON<T> = {
  readonly toJSON: () => T;
}

function addToJSON<T>(obj:T): T & TToJSON<T>
function addToJSON<T, P>(obj:T, toJSON: (obj:T) => P): T & TToJSON<P>
function addToJSON<T, P>(obj:T, toJSON?: (obj:T) => P): T & TToJSON<T | P> {
  const newObj: any = copy(obj);
  Object.defineProperty(newObj, 'toJSON', {
    enumerable: false,
    value: () => copy(toJSON?.(newObj) ?? newObj),
  });
  return newObj;
}

function copy<T>(obj: T){
  return Array.isArray(obj) ? [...obj] : { ...obj };
}

export default addToJSON;