// 求s=a+aa+aaa+aaaa+aa...a的值，其中a是小於10的數字，相加的項數為n。
// 例如，當a = 2，n=5時，s=2+22+222+2222+22222。若a  =2, n = 3，則輸出結果的形式如：2+22+222 = 246。
// 編寫一個名為calc的函式，參數為a與n，回傳值為s。
function calc(a, n) {
  let s = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      s += a * Math.pow(10, j);
    }
  }
  console.log(s);
  return s;
}
calc(2, 3); // returns 246
calc(8, 5); // returns 98760
