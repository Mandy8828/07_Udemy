// 將 array 做反轉

const friends = ["Harry", "Ron", "Snap", "Mike", "Grace"];
let reserse_friends = [];

// 第一種作法
// for (let i = friends.length - 1; i >= 0; i--) {
//   reserse_friends.push(friends[i]);
// }

// 第二種作法
reserse_friends = friends.reverse();

console.log(reserse_friends);
