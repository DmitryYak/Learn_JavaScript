// let user = {
//   name: "Petro",
//   age: 30,
// };

// user.sayHi = function () {
//   console.log("Hello!");
// };
// user.sayHi();

// let user = {
//   name: "Jorik",
//   age: 15,
//   sayHi() {
//     console.log(this.age);
//   },
// };
// user.sayHi();

function NewUser(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log(`this user is ${name} his age is ${age}`)
  }
 }
 let user_3 = new NewUser("Nadejda", 32)
 
 user_3.sayHello()
 console.log(`${user_3.name}, ${user_3.age}`)

 function Calculator() {
  this.read = function() {
    this.value_1 = +prompt('a', 0);
    this.value_2 = +prompt('b', 0);
  };
  this.sum = function() {
    return this.value_1 + this.value_2
  };
  this.mul = function() {
    return this.value_1 * this.value_2
  }
 }

 let calculator = new Calculator();
//  calculator.read();

//  alert("sum=" + calculator.sum())
//  alert('mul=' + calculator.mul())


 

 function MyUser_2(name, age) {
  this.name = name,
  this.age = age,
  this.road = function() {
    console.log(`this is ${name} age is ${age}`)
  }
 }

 let new_user = new MyUser_2("Vitek", 18)
//  console.log(new_user.road())

 function myUser_3(name, age) {
  this.name = name;
  this.age = age;
  this.saySome = function() {
    console.log(`dabadabada, ${name}, and ${age} !`)
  }
 }
 let newUser_5 = new myUser_3('Vitalik', 32);
//  newUser_5.saySome()


 let mySteps = {
  step: 0,
  up(){
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  }
 }
//  mySteps.up().showStep()

 function NewUser_2(name) {
  this.name = name;
  this.age = false;
  this.show = function show() {
    console.log(this.name + ',' + this.age)
  }
 }

 let user_4 = new NewUser_2('Bif');
// user_4.show()

let words_task = ['эта строка Имеет не все заглавные буквы', 'Эта Строка Имеет Все', 'ТУТ РЕАЛЬНО ВСЕ']

 function retrurnWords(someValue) {
  someValue.forEach((i) => {
    if (i === i.toUpperCase()) {
      console.log(i)
    }
  });
 } 
//  retrurnWords(words_task)


 function constPunceck(a, b, n) {
  let perOne = ((a * 60) + b)
  let sum_b = (perOne * n)
  let result = sum_b / 60
  console.log(perOne, sum_b, result.toFixed(2))
 }
//  constPunceck(10, 5, 13)

// function Accumulator(num) {
//   this.value = num;
//   this.read += prompt('how to add?', 0);
// }
// let accumulator = new Accumulator(1);
// // accumulator.read()
// // accumulator.value()
// // alert(accumulator.value);

const myObj = {
  name: "low",
  age: 58
}
myObj.bool = true;

// console.log(myObj)

const personOne = {
  name: "Misha",
  age: 5
}
function changePersonAge(person) {
  const updatePerson = {...personOne}
  updatePerson.age += 1
  console.log(person)
  console.log(updatePerson)
}
changePersonAge(personOne)

