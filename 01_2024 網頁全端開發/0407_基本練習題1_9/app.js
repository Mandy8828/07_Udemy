// 編寫一個名為stars2的函式，功能為按以下模式打印出星星層：

function stars2(n) {
  // 正常次序的 n 層星星
  for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
  // 倒反次序的 n-1 層星星
  for (let i = n - 1; i >= 1; i--) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}

stars2(1);
// *
console.log("--------------------------------------");
stars2(2);
// *
// **
// *
console.log("--------------------------------------");
stars2(3);
// *
// **
// ***
// **
// *
console.log("--------------------------------------");
stars2(4);
// *
// **
// ***
// ****
// ***
// **
// *
