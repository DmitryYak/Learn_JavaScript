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
 calculator.read();

 alert("sum=" + calculator.sum())
 alert('mul=' + calculator.mul())


 