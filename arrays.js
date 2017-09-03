var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
};

function destructivelyAddElementToBeginningOfArray(array, element){
  const newArray = [element, ...array];
  return newArray;
}
