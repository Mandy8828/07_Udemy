// 攝氏溫度轉換成華氏溫度
// Celsius to Fahrenheit
//  ℉ = ℃ * 1.8 +32

function convertor(c) {
  return c * 1.8 + 32;
}

let input = Number(prompt("請輸入溫度: (℃) "));
let result = convertor(input);
alert("換算後的溫度為: " + result + "℉");
