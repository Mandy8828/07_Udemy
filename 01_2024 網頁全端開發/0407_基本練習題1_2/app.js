// 編寫一個名為table9to9的函式，它打印出九九乘法表的內容。

function table9to9() {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(i + " X " + j + " = " + i * j);
    }
  }
}

table9to9();
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// ...
// 1 x 9 = 9
// 2 x 1 = 2
// 2 x 2 = 4
// ...
// 9 x 9 = 81
