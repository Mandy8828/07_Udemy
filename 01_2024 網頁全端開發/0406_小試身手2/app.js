// 找出 array 中最大值

function findBiggest(arr) {
  let tempMax = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > tempMax) {
      tempMax = arr[i];
    }
  }
  return tempMax;
}

console.log(findBiggest([24, 90, 100, 43]));
