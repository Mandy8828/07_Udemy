const friends = ["Harry", "Ron", "Snap", "Mike", "Grace"];

for (let i = 0; i < friends.length / 2; i++) {
  // arr[i] 與 arr[arr.length - 1 - i]
  let temp = friends[i];
  friends[i] = friends[friends.length - 1 - i];
  friends[friends.length - 1 - i] = temp;
}

console.log(friends);
