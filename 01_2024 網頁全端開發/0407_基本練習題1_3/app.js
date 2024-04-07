// 編寫一個名為isUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的第一個字母是否為大寫。

function isUpperCase(str) {
  if (str.length == 0) {
    return false;
  }

  return str[0] == str[0].toUpperCase(); // 這句可以代替以下內容
  // if (str[0] == str[0].toUpperCase()) {
  //   return true;
  // } else {
  //   return false;
  // }
}

console.log(isUpperCase("ABCD")); // returns true
console.log(isUpperCase("")); // returns false
console.log(isUpperCase("aBCD")); // returns false
