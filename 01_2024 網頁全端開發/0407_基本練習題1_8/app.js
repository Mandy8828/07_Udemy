// 編寫一個名為stars的函式，功能為按以下模式打印出星星層：
function stars(n) {
  let star = "";
  for (let i = 1; i <= n; i++) {
    star += "*";
    console.log(star);
  }
}

stars(1);
// *
console.log("===================================");
stars(4);
// *
// **
// ***
// ****
