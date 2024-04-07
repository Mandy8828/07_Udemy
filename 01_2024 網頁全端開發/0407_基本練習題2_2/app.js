// 編寫一個名為swap的函式，參數為一個String，回傳值為大小寫反轉的String。

function swap(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  console.log(result);
}
swap("Aloha"); // returns "aLOHA"
swap("Love you."); // returns "lOVE YOU."
