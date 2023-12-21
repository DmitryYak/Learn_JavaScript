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

let sumInput = function (i) {
  let arr = [];
  while (true) {
    let value = prompt("add number", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    arr.push(+value);
  }
  let result = 0;
  for (let number_2 of arr) {
    result += number_2;
  }
  return result;
};
// alert(sumInput());

let obj = { name: "Bobik", ar: [3, 6, "123", true] };

let array = [1, "sdf", 23, true];
array.splice(1, 1, "new value");
// console.log(array);

let newArr = array.splice(0, 3);
// console.log(newArr);
newAr_2 = newArr.concat(["newConcatStr", true], [8]);
// console.log(newArr.concat([56, true]));
// console.log(newAr_2);

let arr_2 = [5, 2, 0, 1, 13, -6, 234, true];
// console.log(arr_2.sort((a, b) => a - b));

let list_guests = "Petya, Ivan, Kolya, Jonh";
arr_list = list_guests.split(", ");
for (let i of arr_list) {
  // console.log(`list has ${i} here`);
}
// arr_list.forEach((i) => console.log(`name ${i} goes to the paty`));

// console.log(new_ar);
// console.log(arr_2);

let camelize = function (str) {
  let newStr = str.split("-");
  // console.log(newStr);

  let newBig = newStr.map(function (i, index) {
    if (index != 0) {
      return newStr[0] + i.charAt(0, 1).toUpperCase() + i.slice(1);
    }
  });

  let togetherWords = newBig.join("");
  // console.log(newBig);
  console.log(togetherWords);
};
// camelize("my-short-string");
// camelize("list-style-image");
// camelize("-webkit-transition");

let array_1 = [5, 3, 8, 1];

let filterRange = function (arr, a, b) {
  let resultArr = [];
  let newArr = arr.map((i) => {
    if (i >= a && i <= b) {
      return resultArr.push(i);
    }
  });
  console.log(resultArr);
};
// filterRange(array_1, 1, 7);

let filterRangeNew = function (arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
};

// let cons_1 = filterRangeNew(array_1, 1, 78);
// console.log(cons_1);

let filterRangeInPlace = function (arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
};

filterRangeInPlace(array_1, 2, 5);
console.log(array_1);
