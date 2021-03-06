// Challenge 1
function addTwo(num) {
  return num + 2;
}

// Challenge 2
function addS(word) {
  return word + 's';
}

// Challenge 3
function map(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);
    newArray.push(result);
  }

  return newArray;
}

// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// Challenge 5
function mapWith(array, callback) {
  const newArray = [];

  forEach(array, (el, i, arr) => {
    const newElement = callback(el, i, arr);
    newArray.push(newElement);
  });

  return newArray;
}

// Challenge 6
function reduce(array, callback, initialValue) {
  if (initialValue == undefined) {
    let prev = array[0];

    for (let i = 0; i < array.length - 1; i++) {
      prev = callback(prev, array[i + 1], i + 1, array);
    }

    return prev;
  } else {
    let prev = initialValue;

    for (let i = 0; i < array.length; i++) {
      prev = callback(prev, array[i], i, array);
    }

    return prev;
  }
}

// Challenge 7
function intersection(arrays) {
  const intersectionArray = reduce(
    arrays,
    function reduceToIntersectionArray(prev, curr) {
      return prev.filter(function selectCommonElements(el) {
        const hasSameElement = curr.includes(el);
        if (hasSameElement) return true;
      });
    }
  );

  return intersectionArray;
}

// Challenge 8
function union(arrays) {
  const unionArray = reduce(
    arrays,
    function reduceToUniqueUnionArray(prev, curr) {
      curr.forEach(function selectUniqueElements(el) {
        if (!prev.includes(el)) {
          prev.push(el);
        }
      });
      return prev;
    },
    []
  );

  return unionArray;
}
