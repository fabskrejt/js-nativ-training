const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser;
copyUser = {...user}
//Проверка:
console.log('Task 1')
console.log(user === copyUser) //- что должно быть в консоли?
console.log(user.friends === copyUser.friends) //- что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
let deepCopyUser;
deepCopyUser = {...user, friends: [...user.friends]}

//Проверка:
console.log('Task 2')
console.log(user === deepCopyUser) //- что должно быть в консоли?
console.log(user.friends === deepCopyUser.friends) //- что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents;
copyStudents = [...students]
//Проверка:
console.log('Task 3')
console.log(copyStudents === students) //- что должно быть в консоли?
console.log(copyStudents[0] === students[0]) //- что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents;
deepCopyStudents = students.map(i => ({...i}))
//Проверка:
console.log('Task 4')
console.log(deepCopyStudents === students) //- что должно быть в консоли?
console.log(deepCopyStudents[0] === students[0]) //- что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте deepCopyStudents по алфавиту (sort)
let sortByName;
//sortByName = [...deepCopyStudents].sort((a, b) => a.name > b.name ? 1 : -1)
sortByName = deepCopyStudents.sort((a, b) => a.name > b.name ? 1 : -1)
console.log('Task 5')
console.log(sortByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortByScores;
//sortByScores = [...deepCopyStudents].sort((a, b) => b.scores - a.scores )
sortByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores)
console.log('Task 5a')
console.log(sortByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents;
bestStudents = students.filter(s => s.scores >= 100)
console.log('Task 6')
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents;
//topStudents = [...deepCopyStudents].sort((a, b) => a.scores > b.scores ? -1 : 1).splice(0,3)
topStudents = deepCopyStudents.splice(0, 3)
console.log('Task 6a')
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents;
//newDeepCopyStudents = [...topStudents, ...deepCopyStudents].sort((a, b) => a.scores > b.scores ? -1 : 1)
//newDeepCopyStudents = [...topStudents, ...[...deepCopyStudents].sort((a, b) => a.scores > b.scores ? -1 : 1).splice(3)]
newDeepCopyStudents = [...topStudents, ...deepCopyStudents]
console.log('Task 6b')
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents;
notMarriedStudents = students.filter(s => !s.isMarried)
console.log('Task 7')
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames;
studentsNames = [...students].map(i => i.name)
console.log('Task 8')
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace;
nameWithSpace = studentsNames.join(' ')
console.log('Task 8a')
console.log(nameWithSpace)
let namesWithComma;
namesWithComma = studentsNames.join(', ')
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents;
trueStudents = [...students].map(s => ({...s, isStudent: true}))
console.log('Task 9')
console.log(trueStudents)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick;
studentsWithMarriedNick = [...students].map(s => s.name === 'Nick' ? {...s, isMarried: true} : s)
console.log('Task 10')
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann;
ann = students.find(s => s.name === 'Ann')
console.log('Task 11')
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent;
bestStudent = students.reduce((acc, s) => s.scores > acc.scores ? s : acc)
console.log('Task 12')
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let sumStudentsScore;
sumStudentsScore = students.reduce((acc, s) => s.scores + acc, 0)
console.log('Task 13')
console.log(sumStudentsScore)
// И поднимаем руку!!!!

let scoresSum;
console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    return [...students].map(s => (
        {
            ...s,
            friends: [...students]
                .filter(i => i.name !== s.name)
                .map(st => st.name)
        }))

}
console.log('Task 14')
console.log(addFriends(students));








