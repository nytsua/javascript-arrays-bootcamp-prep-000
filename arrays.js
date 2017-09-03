var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  return array.push(element);
};

function destructivelyAddElementToBeginningOfArray(array, element){
  return [element, ...array];
}
