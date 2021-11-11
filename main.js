const yo = 'yo!!!'

let hey = yo
hey = 'hey'

console.log(yo)
console.log(hey)

const bob = {
    name: 'Alex',
    age: 25,
    isStudent: true,
    friends: ['Anna', 'Dimon']
}

const bobKeys = Object.keys(bob)

console.log(bobKeys)
const copyBob = {...bob}

const copyBob2 = {...bob, friends: [...bob.friends]}
/*for (let i = 0; i < bobKeys.length; i++){
    copyBob[bobKeys[i]] = bob[bobKeys[i]]
}*/

console.log(copyBob)
console.log(bob === copyBob)

copyBob.name = 'Bob'
console.log(copyBob)
console.log(bob)

bob.friends.push('Helga')

console.log(copyBob)
console.log(bob)

console.log(copyBob2)


const students = [
    { name: "Bob", age: 22, isMarried: true, scores: 120 },
    { name: "Alex", age: 21, isMarried: true, scores: 85 },
    { name: "Michel", age: 20, isMarried: false, scores: 89 },
    { name: "John", age: 19, isMarried: false, }
]
/*const stToString = st => `Hi! I'm ${st.name}. I have ${st.scores}`*/

const str = students.map( st => `Hi! I'm ${st.name}. I have ${st.scores}` )

console.log(str)

const copyStudents = students.map(i => ({...i}))

console.log(copyStudents)