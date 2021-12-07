
//**배열 복사** 

const array = [1, 2, 3, 4, 5];

//Bad Case
const nextArrayBad = array;
nextArrayBad[0] = 100
console.log(`nextArrayBad[0] : ${nextArrayBad[0]} / array[0]: ${array[0]}`);
array[0] = 1
//Good Case 
const nextArrayGood = [...array]
nextArrayGood[0] = 100;
console.log(`nextArrayGood[0] : ${nextArrayGood[0]} / array[0]: ${array[0]}`);

// **오브젝트 복사**
const object ={
    id:1, 
    name :"pumpkin"
}

//Bad Case 
const nextObjBad = object;
nextObjBad.name = "carrot"
console.log(`nextObjBad.name : ${nextObjBad.name} / object.name: ${ object.name}`);

//Good Case
const nextObjGood = {...object, name: "apple"}
console.log(`nextObjGood.name : ${nextObjGood.name} / object.name: ${ object.name}`);

//**얕은 복사&깊은 복사**
const members = [
    {
        id :1,
        name:'pumpkin',
        age:25
    },
    {
        id :2,
        name:'carrot',
        age:23
    },
    {
        id :3,
        name:'apple',
        age:30
    }
]

const nextMembers = [...members]

//얕은 복사
nextMembers[0].name ='mango'
console.log(`nextMembers[0].name : ${nextMembers[0].name} / members[0].name : ${members[0].name}`)

//깊은 복사
nextMembers[0] ={
    ...nextMembers[0],
    name:"melon"
}
console.log(`nextMembers[0].name : ${nextMembers[0].name} / members[0].name : ${members[0].name}`)

//진짜 복잡한 객체안에 객체라면?
// const nextComplexObj ={
//     ...complexObj,
//     objectInside : {
//         ...complexObj.objectInside,
//         value : " "
//     }
// }