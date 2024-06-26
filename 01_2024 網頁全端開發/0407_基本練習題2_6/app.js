// 編寫一個名為inversePyramid的函式，功能為按以下模式打印出星星層：
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

function inversePyramid(n) {
  let star = 2 * n - 1;
  let space = 0;
  while (star > 0) {
    printStars(space, star);
    star -= 2;
    space += 1;
  }
}

inversePyramid(4);
// *******
//  *****
//   ***
//    *
