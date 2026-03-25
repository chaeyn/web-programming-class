const data = [
    { name: "이룽지", age: 1, hobby: "쳇바퀴 타기" },
    { name: "삼룽지", age: 3, hobby: "멍 때리기" }
]

const filterJson = JSON.stringify(data, ["name", "hobby"], 2);
// console.log(filterJson)

const result = JSON.stringify(data, (key, value) => {
    if (key === "age" && value < 2) {
        return undefined;
    }

    if (key === "name") {
        return value[0]+"**";
    }

    return value;
}, 2);

console.log(result)