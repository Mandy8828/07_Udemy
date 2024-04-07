// 編寫一個名為pyramid的函式，功能為按以下模式打印出星星層：
function printStars(space, star) {
  let result = "";
  for (let i = 0; i < space; i++) {
    result += " ";
  }
  for (let i = 0; i < star; i++) {
    result += "*";
  }
  console.log(result);
}

function pyramid(k) {
  let star = 1;
  let space = k - 1;
  while (space >= 0) {
    printStars(space, star);
    star += 2;
    space -= 1;
  }
}
pyramid(1);
console.log("===========================================");
//*
pyramid(2);
console.log("===========================================");
//  *
// ***
pyramid(4);
console.log("===========================================");
//    *
//   ***
//  *****
// *******
pyramid(10);
console.log("===========================================");
