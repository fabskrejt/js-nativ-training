console.log('123123')

const arr = [1, 22, 3, 45, 657, 88, 9, 90]

for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
    }
}

console.log(arr)

//immutableSort homeWork

const names = ["Bob", "Alex", "Nick", "Donald", "Joe", "999", "!alex", "Юрий", "!юрий"]

console.log(names.sort())

const num = [1, 22, 3, 45, 657, 88, 9, 90]

/*console.log( num.sort())*/

console.log(num.sort((a, b) => a - b))

const compFn = (a, b) => {
    if (a > b) {
        return 44
    } else {
        return -2
    }
}

console.log(num.sort(compFn))

const sortNum = num.sort((a, b) => b - a)

console.log(num === sortNum)

const students = [
    {name: "Bob", age: 22, isMarried: true, scores: 95},
    {name: "Alex", age: 23, isMarried: true, scores: 89},
    {name: "alex", age: 23, isMarried: true, scores: 89},
    {name: "Helge", age: 21, isMarried: true, scores: 89},
    {name: "Nick", age: 20, isMarried: false, scores: 120},
    {name: "John", age: 19, isMarried: false, scores: 121},
];

console.log(students.sort((a, b) => a.scores - b.scores))
console.log(students.sort((a, b) => a.name >= b.name ? 1: -1))
console.log(students.sort((a, b) => a.name.toLowerCase() >= b.name.toLowerCase() ? 1: -1))