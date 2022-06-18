"use strict";
// prefrence for function declarations
// using a ternary expression
// this checks to see  whether the input recieved is an array and, if so,  it will returns a copy of it;
// otherwise, it uses JavaScript's Object.values method to return an array that  contains the values of the object's properties
function standardizeInput(assortment) {
  return assortment instanceof Array
    ? assortment.slice()
    : Object.values(assortment);
}

function myEach(assortment, callbackFunc) {
  const newCol = standardizeInput(assortment);

  for (let i = 0; i < newCol.length; i++) {
    callbackFunc(newCol[i]);
  }

  return assortment;
}

function myMap(assortment, callbackFunc) {
  const newCol = standardizeInput(assortment);
  // create empty array that will be filled in later
  const newArr = [];
  // for loop that adds new elements to the array
  for (let i = 0; i < newCol.length; i++) {
    newArr.push(callbackFunc(newCol[i]));
  }

  return newArr;
}

function myReduce(assortment, callbackFunc, accumulator) {
  let newAssortment = standardizeInput(assortment);

  //   where no start value is passed in  for the accumulator
  if (!accumulator) {
    accumulator = newAssortment[0];
    newAssortment = newAssortment.slice(1);
  }

  const lengthOfArr = newAssortment.length;

  for (let i = 0; i < lengthOfArr; i++) {
    accumulator = callbackFunc(accumulator, newAssortment[i], newAssortment);
  }
  return accumulator;
}

//  does not traverse the whole array if the value is found early
function myFind(assortment, base) {
  const newcol = standardizeInput(assortment);

  for (let i = 0; i < newcol.length; i++) {
    if (base(newcol[i])) return newcol[i];
  }
  //   returns undefined if the value is not present
  return undefined;
}

//
function myFilter(assortment, base) {
  const newcol = standardizeInput(assortment);
  // an empty array that will be filled later on
  const newArray = [];
  // adding new elements to the array
  for (let i = 0; i < newcol.length; i++) {
    if (base(newcol[i])) newArray.push(newcol[i]);
  }
  // correctly returns an empty array if no matching values are found
  return newArray;
}

// correctly returns the size of the collection when an array is passed
// correctly returns the size of the collection (amount of keys) when an object is passed
function mySize(assortment) {
  const newCol = standardizeInput(assortment);
  return newCol.length;
}

// returns the first element of the collection
//returns the first n elements of the collection when the second optional argument (n) is provided
function myFirst(array, stop = false) {
  return stop ? array.slice(0, stop) : array[0];
}

// using a ternary expression to  returns the last element of the collection or  return the last n elements of the collection when the second optional argument (n) is provided
function myLast(array, start = false) {
  return start
    ? array.slice(array.length - start, array.length)
    : array[array.length - 1];
}

//retrieves all the names of the object's own enumerable properties
function myKeys(object) {
  // empty array that will be filled in later
  const props = [];
  for (let properties in object) {
    props.push(properties);
  }
  return props;
}

//retrieves all the values of the object's own properties
function myValues(object) {
  // empty array that will be filled later
  const values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
}
