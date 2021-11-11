

const todoList = [
    {
        id: '222',
        title: 'What to learn',
        filter: 'all',
        tasks: [
            {id: '1q', title: 'HTML', isDone: true},
            {id: '2q', title: 'CSS', isDone: true},
            {id: '3q', title: 'React', isDone: true},
        ]
    },
    {
        id: '333',
        title: 'What to buy',
        filter: 'all',
        tasks: [
            {id: '1q', title: 'Meat', isDone: true},
            {id: '2q', title: 'Beer', isDone: true},
            {id: '3q', title: 'Bread', isDone: true},
        ]
    },
]

const todoListID_1 = todoList[0].id;
const todoListID_2 = todoList[1].id;
const tasks = {
    [todoListID_1]: [
        {id: '1q', title: 'HTML', isDone: true},
        {id: '2q', title: 'CSS', isDone: true},
        {id: '3q', title: 'React', isDone: true},
    ],

    [todoListID_2]: [{id: '1q', title: 'Meat', isDone: true},
        {id: '2q', title: 'Beer', isDone: true},
        {id: '3q', title: 'Bread', isDone: true},
    ],
}
console.log(tasks[todoListID_1].filter( t => t.id !== '1q'))
console.log({...tasks,  [todoListID_1]: tasks[todoListID_1].filter( t => t.id !== '1q') })
console.log({...tasks,  [todoListID_1]:[...tasks[todoListID_1], {id: '4q', title: 'Redux', isDone: true}] })

const numbers = [1,2,3,4,5,6]

console.log(numbers.reduce((a, i )=> a + i, 0))
console.log(numbers.reduce((a, i )=> a > i ? a : i))

let students = [
    { name: "Bob", age: 22, isMarried: true, scores: 85 },
    { name: "Alex", age: 21, isMarried: true, scores: 89 },
    { name: "Nick", age: 20, isMarried: false, scores: 120 },
    { name: "John", age: 19, isMarried: false, scores: 100 }
];

console.log(students.reduce((acc, i) => acc + i.scores , 0))
console.log(students.reduce((acc, i) => acc + i.scores , 0))