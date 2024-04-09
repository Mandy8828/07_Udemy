// 八皇后問題是一個以西洋棋為背景的問題：如何能夠在8×8的西洋棋棋盤上放置八個皇后，
// 使得任何一個皇后都無法直接吃掉其他的皇后？為了達到此目的，任兩個皇后都不能處於同一條橫行、
// 縱行或斜線上。所有解不需要考慮旋轉棋盤後的不同結果，而八皇后問題的解答如下:

let perfect = 0;
// NQueens(4);
NQueens(5);
console.log("Number of Perfect Solutions is " + perfect);

function NQueens(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = null;
    }
  }

  let i = 0;
  let j = 0;
  let loop = true;
  while (loop) {
    console.log(i, j);

    arr[i][j] = "Q";
    // check if Q can stay there
    let violation = false;
    let k = 0;
    while (k < i) {
      if (arr[k][j] == "Q") {
        violation = true;
      }
      k++;
    }
    k = 0;
    while (k < j) {
      if (arr[i][k] == "Q") {
        violation = true;
      }
      k++;
    }
    // 檢查右下角的對角線
    k = 1;
    let l = -1;
    while (i + k < n && j + l >= 0) {
      if (arr[i + k][j + l] == "Q") {
        violation = true;
      }
      k++;
      l--;
    }
    // 檢查左上角的對角線
    k = -1;
    while (i + k >= 0 && j + k >= 0) {
      if (arr[i + k][j + k] == "Q") {
        violation = true;
      }
      k--;
    }

    // 檢查 violation 是否成立
    if (!violation) {
      console.log("okay");
      console.log(arr);
      if (j == n - 1) {
        perfect++;
        console.log("Perfect");
        console.log(arr);
        arr[i][j] = null;
        i++;
      } else {
        i = 0;
        j++;
      }
    }

    if (violation) {
      console.log("Not okay");
      console.log(arr);
      arr[i][j] = null;
      i++;
    }

    function check() {
      // go back to the previous column
      j--;
      for (let b = 0; b < arr.length; b++) {
        if (arr[b][j] == "Q") {
          arr[b][j] = null;
          console.log("b and j is ");
          console.log(b, j);
          i = b + 1;
          break;
        }
      }
    }
    while (i >= n) {
      check();
      if (j < 0) {
        console.log("dead end");
        loop = false;
        break;
      }
    }
  }
}
