var Prism = { Shape: "Sphere" }

var Flat = { Dimensions: 1 }

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, { [key]: value })
}

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

console.log(updateObjectWithObject(Prism, Flat));

console.log(Prism)

console.log(Flat)