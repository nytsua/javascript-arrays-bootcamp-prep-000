var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
};

function destructivelyAddElementToBeginningOfArray(array, element){
  return [element, ...array];
}

console.log(addElementToBeginningOfArray([1], 'foo'))
