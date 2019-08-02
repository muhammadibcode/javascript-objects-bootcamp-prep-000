var Prism = { Shape: "Sphere" }

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, { [key]: value })
}

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

console.log(updateObjectWithKeyAndValue(Prism, "Shape", "Cube"));

console.log(Prism)