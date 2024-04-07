// 編寫一個名為isPrime的函式，它接受一個整數作為參數，回傳值為一個boolean，告訴我們參數是否為一個質數。
function isPrime(n) {
  if (n == 1) {
    console.log(false);
    return false;
  }

  let starter = 2;
  while (starter < n) {
    if (n % starter == 0) {
      console.log(false);
      return false;
    }
    starter++;
  }
  console.log(true);
  return true;
}

isPrime(1); // returns false
isPrime(2); // returns true
isPrime(5); // returns true
isPrime(91); // returns false
isPrime(1000000); // returns false
