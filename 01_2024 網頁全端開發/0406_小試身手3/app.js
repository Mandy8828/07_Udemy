// 數字加總

// 第一種作法
function addUpTo(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

console.log(addUpTo(10));

// 第二種作法
function addUpTo2(n) {
  return ((1 + n) * n) / 2;
}

console.log(addUpTo2(10));
