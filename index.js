var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

var recipeTwo = Object.assign({}, recipes)

function deleteFromObjectByKey(object, key) {
  delete recipeTwo.key
  return recipeTwo
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes.key;
  return recipes;
}