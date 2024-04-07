// 編寫一個名為isAllUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的所有字母
// 是否為大寫。
function isAllUpperCase(str) {
  if (str.length == 0) {
    return false;
  }

  return str == str.toUpperCase(); // 直接檢查是否等於完全大寫
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] != str[i].toUpperCase()) {
  //     return false;
  //   }
  // }

  // return true;
}

console.log(isAllUpperCase("ABCD")); // returns true
console.log(isAllUpperCase("")); // returns false
console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false
