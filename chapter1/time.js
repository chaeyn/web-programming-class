const hour = new Date().getHours();

const result = hour <= 12 ? "오전" : "오후";
console.log(result)