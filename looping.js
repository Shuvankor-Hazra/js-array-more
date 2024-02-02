const friends = ["ElonMask", "BillGets", "MarkJucker", "Warren"];

for (const friend of friends) {
  console.log(friend);
}

for (let i = 0; i < friends.length; i++) {
  console.log(i);
  console.log(friends[i]);
}

const numbers = [5, 46, 56, 57, 798, 0, 78, 64, 35, 76, 9, 10, 41, 43, 67, 90];

for (let i = 0; i < numbers.length; i++) {
  // console.log(i);
  console.log(i, numbers[i]);
}

// while
let i = 0;
while (i < friends.length) {
  console.log(friends[i]);
  i++;
}

let n = 0;
while (n < numbers.length) {
  console.log(n, numbers[n]);
  n++;
}
