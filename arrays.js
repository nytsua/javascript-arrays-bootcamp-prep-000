var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
};

function addElementToBeginningOfArray(array, element){
  const newArray = [element, ...array];
  return newArray;
}
