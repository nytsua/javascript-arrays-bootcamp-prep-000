var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return array.unshift(element);
};

function destructivelyAddElementToBeginningOfArray(array, element){
  return [element, ...array];
}

console.log(addElementToBeginningOfArray([1], 'foo'))