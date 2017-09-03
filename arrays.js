var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
};

function addElementToBeginningOfArray(array, element){
  const newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
};

function addElementToEndOfArray(array, element){
  const newArray = [...array, element];
  return newArray;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}


