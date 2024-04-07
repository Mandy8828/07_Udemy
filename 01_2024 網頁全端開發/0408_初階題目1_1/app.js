// 編寫一個名為mySort的函式，參數為一個array of numbers，回傳值為一個將元素由小到大排序的array。
// 想法：在 array 的工作範圍找到最大值， find max => switch to the end ，再縮減工作範圍

function mySort(arr) {
  let workingIndex = arr.length - 1;
  while (workingIndex >= 0) {
    // 找到 index 0 到 workingIndex 工作區間內，最大值為?
    let biggest = arr[0];
    let biggestIndex = 0;
    for (let i = 0; i <= workingIndex; i++) {
      if (arr[i] > biggest) {
        biggest = arr[i];
        biggestIndex = i;
      }
    }
    // 將 biggest 與 arr[workingIndex] 互換
    let temp = arr[biggestIndex];
    arr[biggestIndex] = arr[workingIndex];
    arr[workingIndex] = temp;

    workingIndex--;
  }
  console.log(arr);
}
mySort([17, 0, -3, 2, 1, 0.5]); // returns [-3, 0, 0.5, 1, 2, 17]

// 將元素互換的技巧
let arr = [1, 2, 3, 4, 5, 6];
let temp = arr[0];
arr[0] = arr[arr.length - 1];
arr[arr.length - 1] = temp;
console.log(arr);
