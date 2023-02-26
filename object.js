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
//       i[key] *= 2;
//     }
//     // console.log(i);
//   }
// }

// multiplyNumeric(menu);
// console.log(menu);

//от 3 до 5 бесплатно
//  цена для ребенка (от 5 до 14)..70 р.
// цена для взрослого(от 14)..120 р
// создать функцию подсчета общей стоимости
