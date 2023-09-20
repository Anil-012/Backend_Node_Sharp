// Arrays , spread and rest operators

const obj1 = {'key1': 1}

const obj2 = { ...obj1}

if(obj2 === obj1){

console.log('same objects')

}

else{

console.log('different objects')

}



 const obj3 = {'key1': 1 , 'key2' : 2}

const obj4 = { ...obj1, key1: 1000}



console.log(obj3)

console.log(obj4) 

//=============
const array = ['apple', 'oranges', '', 'mango', '', 'lemon'];

const changedOne = array.map((el) => {
  if (el === '') {
    return 'empty string';
  } else {
    return el;
  }
});

 console.log(changedOne);