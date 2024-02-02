//   reverse    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.reverse();
// const reversed = numbers.reverse();
// console.log(numbers);


// for ---- of;
const rev_numbers = [];
for(const num of numbers) {
    // console.log(num);
    rev_numbers.unshift(num);
}
// console.log(rev_numbers);

// for ----;
const reversed_numbers = [];
for(let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    reversed_numbers.unshift(num);
}


// reverse side
const rev_rev_numbers = [];
for(let i = numbers.length - 1; i >= 0; i--){
    // console.log(i);
    const num = numbers[i];
    console.log(num);
    rev_rev_numbers.push(num);
}
console.log(rev_rev_numbers);