/** Map без расширения прототипа */
export const mapArray = (arr, callbackFn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callbackFn(arr[i], i, arr));
  }

  return result;
};

/** Filter без расширения прототипа */
export const filterArray = (arr, callbackFn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
};

/** Find без расширения прототипа */
export const findItemInArray = (arr, callbackFn) => {
  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i], i, arr)) {
      return arr[i];
    }
  }
};

/** Reduce без расширения прототипа */
export const reduceArray = (arr, callbackFn, initialAcc) => {
  let acc = initialAcc || arr[0];

  for (let i = initialAcc ? 0 : 1; i < arr.length; i++) {
    acc = callbackFn(acc, arr[i], i, arr);
  }

  return acc;
};

/** Nullish operator */
const z = null;
const foo = z ?? 22;
console.log(foo);

/** Bubble sort */

export const bubbleSort = (inputArr, callbackFn) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (callbackFn(inputArr[j], inputArr[j + 1]) > 0) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};

/** Меняем переменные местами без дополнительной переменной */
// let fooz = 5;
// let baaz = 10;

// fooz = fooz + baaz; // 15
// baaz = fooz - baaz; // 5
// fooz = fooz - baaz; // 10

// console.log(baaz, 'baaz');
// console.log(fooz, 'fooz');
