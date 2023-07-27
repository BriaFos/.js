function createObjWithoutProto() {
    return Object.create(null);
  }

const objWithoutProto = createObjWithoutProto();
console.log(objWithoutProto); // Output: {}
console.log(objWithoutProto.toString); // Output: undefined (no inherited 'toString' method)