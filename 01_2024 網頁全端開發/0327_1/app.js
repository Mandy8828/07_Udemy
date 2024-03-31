let age = prompt("你輸入你的年齡");
age = Number(age);

if (age >= 0 && age <= 12) {
  console.log("票價為100元");
} else if (12 < age && age <= 65) {
  console.log("票價為250元");
} else if (age > 65 && age <= 120) {
  console.log("票價為150元");
}
