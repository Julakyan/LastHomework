function find(array, callback, index = 0) {
  if (index >= array.length) {
    return undefined;
  }

  if (callback(array[index], index, array)) {
    return array[index];
  }

  return find(array, callback, index + 1);
}



function findIndex(array, callback, index = 0) {
  if (index >= array.length) {
    return -1;
  }

  if (callback(array[index], index, array)) {
    return index;
  }

  return findIndex(array, callback, index - 1);
}


function filter(array, callback) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}