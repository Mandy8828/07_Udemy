// 在數學上，費波那契數是以遞迴的方法來定義：
// 0、1、 1、 2、 3、 5、 8、 13、 21、 34、 55、 89、 144、 233、 377、 610、 987、…。

function fib(n) {
  let fib_sequence = [0, 1];
  while (fib_sequence.length <= n) {
    let last_element = fib_sequence[fib_sequence.length - 1];
    let second_last_element = fib_sequence[fib_sequence.length - 2];
    fib_sequence.push(last_element + second_last_element);
  }

  console.log(fib_sequence[n]);
}

fib(0); // returns 0
fib(1); // returns 1
fib(2); // returns 1
fib(3); // returns 2
fib(8); // returns 21
