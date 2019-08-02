var Prism = { Shape: "Sphere" }

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, { [key]: value })
}

console.log(updateObjectWithKeyAndValue(Prism, "Shape", "Cube"));

console.log(Prism)