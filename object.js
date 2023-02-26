// let hous = {
//   room: "kitcnen",
//   name: "andry",
//   age: 30,
//   "Drezna city": "my",
// };
// console.log(hous.age + hous["Drezna city"]);
// hous.name = "gooony";
// console.log(hous.name);

// let user = {
//   name: "Dima",
//   age: 38,
// };
// console.log("age" in user);
// console.log(user.age in Object);
// console.log(user in Object);

// let myAnimals = {
//   cat: "Venizuella",
//   fish: "red",
// };
// let cats = "cat";
// console.log(cats in myAnimals);

// for in

// let bars = {
//   beers: 5,
//   vodka: 4,
//   sigars: "not yet",
// };
// for (let key in bars) {
//   console.log(key);
// }
// for (let key in bars) {
//   console.log(bars[key]);
// // }

// let years = {
//   1983: "Kostya",
//   1985: "Dima",
//   2000: "yang man",
//   1954: "old man",
// };
// for (let age in years) {
//   console.log(age);
// }
// console.log(years["1983"]);

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);

// // let schedule = {};

// // console.log(isEmpty(schedule)); // true

// // schedule["8:30"] = "get up";

// // console.log(isEmpty(schedule)); // false
// // function isEmpty(obj) {
// //   for (let key in obj) {
// //     return false;
// //   }
// //   return true;
// // }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;

// for (let key in salaries) {
//   sum = sum + salaries[key];
// }
// console.log(sum);

// // let weight = {
// //   i: 103,
// //   Arina: 63,
// //   Elina: 23,
// //   Olga: 80,
// // };

// // let sumWeigth = 0;
// // for (let key in weight) {
// //   sumWeigth += weight[key];
// // }
// // console.log(sumWeigth);

// let weight = {
//   i: 103.2,
//   Arina: 63,
//   Elina: 23,
//   Olga: 80,
// };

// let sum = 0;

// for (let key in weight) {
//   sum += weight[key];
// }
// console.log(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// console.log(menu);

// function multiplyNumeric(i) {
//   for (let key in i) {
//     if (typeof i[key] == "number") {
// //       i[key] *= 2;
// //     }
// //     // console.log(i);
// //   }
// // }

// // multiplyNumeric(menu);
// // console.log(menu);

// let myObject = {
//   one: true,
//   two: 12,
//   three: "leader",
// };
// let copyMyObject = {};

// for (let key in myObject) {
//   copyMyObject[key] = myObject[key];
// }
// console.log(myObject, copyMyObject);

// let obj_2 = {
//   build: 1,
//   river: false,
//   name: "Igor",
//   mass: "",
// };
// let copyObj = {};
// for (let key in obj_2) {
//   copyObj[key] = obj_2[key];
// }
// console.log(copyObj);
// copyObj.build = "new value";
// console.log(copyObj);

// let joinAllObjects = {};
// Object.assign(joinAllObjects, myObject, obj_2, copyObj);

// console.log(joinAllObjects);

// Object.assign(joinAllObjects, { river: true });
// console.log(joinAllObjects);

// let copyBigObject = Object.assign({}, joinAllObjects);
// console.log(copyBigObject);

// let copyOneMore = { ...copyBigObject };
// console.log(copyOneMore);

let obj_3 = {
  name: "Olik",
  health: {
    age: 18,
    weigth: 71,
    blond: true,
  },
};

let i = structuredClone(obj_3);
console.log(i);
