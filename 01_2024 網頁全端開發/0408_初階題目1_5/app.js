// 編寫一個名為"shuffle()”的函數，唯一的參數為一個array of integers，
// return type也是array of integers，返回的array與參數array的元素相同，但元素順序為隨機排序的結果。
function shuffle(arr) {
  let currentIndex = arr.length;
  let randomIndex;

  while (currentIndex != 0) {
    // 選定一個 0 ~ currentIndex 的隨機整數
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // 將 currentIndex 與 randomIndex 的值做互換
    let temp = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  console.log(arr);
  return arr;
}

for (let i = 1; i <= 10; i++) {
  shuffle([2, 11, 37, 42]);
}
// returns 一個經過洗牌後的 array。
// 可能是[42, 11, 37, 2]
