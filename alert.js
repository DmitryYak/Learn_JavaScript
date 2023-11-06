// alert("Hello world from file!");

// result = prompt(title, "buy");

// let result = prompt("What is your name");
// alert(result);

// let age = 19;
// if (age >= 18 && age >= 90) {
//   console.log("good");
// }

// age = 12;
// if (!(age >= 18 || age >= 90)) {
//   console.log("good");
// }

// let isBoss = confirm("Ты здесь главный?");

// alert(isBoss);

// let myLogin = prompt("");
// alert(result);

// let counter = 0;
// while (counter < 5) {
//   console.log(counter);
//   counter++;
// }

// let reCounter = 15;
// while (reCounter != 0) {
//   console.log(`reCounter = ${reCounter}`);
//   reCounter--;
// }

// let shortCounter = 5;
// while (shortCounter) {
//   console.log(`short = ${shortCounter}`);
//   shortCounter--;
// }

// while (shortCounter) console.log(shortCounter--);

// for (let i = 0; i < 5; i++) {
//   alert(i);
// }
// let dataNow = new Date();
// let dataMeeting = new Date(2023, 11, 17);
// dataNow.setDate(dataNow.getDate() + 65);
// console.log(dataNow);
// console.log(dataMeeting);

// function Accumulator(num) {
//     this.value = num;
//     this.read = function(){
//     this.value += +prompt('how to add?', 0);
//     };
// }
//   let accumulator = new Accumulator(1);
//   accumulator.read()
//   accumulator.read()
//   alert(accumulator.value);

// function Man(name,age,city) {
//   this.name = name;
//   this.age = age;
//   this.city = city;
// }

// let newman = new Man("Bif", 12, "Moscow")
// let newman_2 = new Man("Daf",12)

// console.log(newman?.age, newman_2?.city)

// let id = Symbol('id')
// let id1 = Symbol('id')
// console.log(id.toString(), id1)

// let user = {
//   name: "Vasya"
// };

// let id_2 = Symbol('id')

// user[id] = 4;

// console.log(user[id])

// let obj_1 = {
//   name: "Lf",
//   age: 54
// }
// let obj_2 = {
//   name: 'Kr',
//   age: 64
// }

// let obj_3 = obj_1.age + obj_2.age
// console.log(obj_1, obj_2, obj_3)

// let num_2 = 56
// console.log(num_2.valueOf())

// console.log(6e9)
// console.log(9999999999999999)

// let num_str = '123 rub'
// let num_str_2 = '123rub'

// console.log(parseInt(num_str), parseInt(num_str_2));

// let parse_num_str = Math.floor(Math.random() * 2e6)
// console.log(parse_num_str)

// let num__1 = prompt('first num', '')
// let num__2 = prompt('second num', '')
// alert(+num__1 + +num__2)

// readNumber = function (enter) {
//   enter = +prompt("add number please", "");
//   while (enter != Number) {
//     return enter;
//   }
// };
// readNumber();

// randomIntenger = function (min, max) {
//   for (let i = 0; i < 3; i++) {
//     alert(Math.random(min, max) * 10);
//   }
// };
// // randomIntenger(1, 2);

// // const randomIndex = Math.floor(Math.random() * 20);

// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;
// console.log(guestList);

// let guestList_2 = "Guests:\n * John\n * Pete\n * Mary";
// console.log(guestList_2);
// // console.log('i\'am "a" man');
// console.log(guestList.length);
// console.log(guestList[5]);

// for (let i of guestList) {
//   console.log(i);
// }

// console.log(guestList.toUpperCase());
// // console.log(guestList[5].toLowerCase());
// // // console.log(guestList.indexOf("Pe", 4));

// console.log(guestList.includes("t", 55));
// console.log(guestList.split("*"));
// console.log(guestList.startsWith("Gu"));
// console.log(guestList.endsWith("5"));

// // console.log(guestList.slice(9));
// console.log("#".codePointAt());

// let str = "";
// for (let i = 65; i <= 220; i++) {
//   str += String.fromCharCode(i);
// }
// console.log(str);

// let name = prompt("add name", "");

make_bid_first_simbol = function (i) {
  new_first_simbol = i[0].toUpperCase();
  new_name = new_first_simbol + i.slice(1);
  alert(new_name);
};
// make_bid_first_simbol(prompt("add name", ""));

checkSpam = function (i) {
  start_index_vi = i.toUpperCase().indexOf("VIAGRA");
  start_index_x = i.toUpperCase().indexOf("XXX");
  if (start_index_vi != -1 || start_index_x != -1) {
    alert("true");
  } else alert("false");
};
// checkSpam(prompt("add word", ""));

truncate = function (str, maxlength) {
  // let
};
