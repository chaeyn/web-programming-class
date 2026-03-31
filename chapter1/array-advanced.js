const village = ['2룽지', '3룽지', '4룽지', '5룽지'];

// const [leader, sub] = village;
// console.log(sub)

const [leader, sub, ...others] = village;
others[0] = "hello";

console.log(others);

console.log(village);

let [a, b] = [1, 2];
[a, b] = [b, a];
console.log(a, b)

const org = {name: "이룽지", age: 1};
const deep = {...org, name: "삼룽지", hobby: "쳇바퀴"};

console.log(deep)

console.log(org.name);
console.log(deep.name);