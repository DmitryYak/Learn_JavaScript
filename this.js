// let user = {
//   name: "Petro",
//   age: 30,
// };

// user.sayHi = function () {
//   console.log("Hello!");
// };
// user.sayHi();

let user = {
  name: "Jorik",
  age: 15,
  sayHi() {
    console.log(this.age);
  },
};
user.sayHi();
