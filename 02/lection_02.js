const students = [
    { name: "Bob", age: 22, isMarried: true, scores: 85 },
    { name: "Alex", age: 21, isMarried: true, scores: 89 },
    { name: "Nick", age: 20, isMarried: false, scores: 120 },
    { name: "John", age: 19, isMarried: false, scores: 100 }
];

const names = students.map(s => s.name )
console.log( names)

function map(arr, fn){
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]))
    }
    return result
}

console.log(students.filter(st => st.age >= 21))

function filter(arr, fn){
    const result = []
    for (let i = 0; i < arr.length; i++) {
            if(fn(arr[i])){
                result.push(arr[i])
            }
    }
    return result
}

console.log(filter(students, st => st.age >= 21 ))



function find(arr, fn){
    for (let i = 0; i <arr.length ; i++) {
        if(fn(arr[i])){
            return arr[i]
        }
    }
}

console.log('-------------------')
console.log(find(students, (st) => st.name === 'Bob' ))

console.log(students.map(st => ({ ...st, isStudent: true})))

console.log(students.map(st => {
    if(st.name === 'Nick'){
        return {...st, isMarried: true}
    } else  return st
}))