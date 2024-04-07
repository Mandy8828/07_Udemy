// 編寫一個名為factorPrime的函式，唯一的參數是個整數n，回傳值是一個String，表示n的質因數分解結果。
function factorPrime(n) {
  let answer = n + " = ";
  let p = 2;
  while (p <= n) {
    if (n % p == 0) {
      n /= p;
      answer += p + " X ";
    } else {
      p++;
    }
  }

  let answer2 = "";
  for (let i = 0; i < answer.length - 3; i++) {
    answer2 += answer[i];
  }

  console.log(answer2);
  return answer2;
}

factorPrime(120); // returns "2 x 2 x 2 x 3 x 5"
factorPrime(287380);
