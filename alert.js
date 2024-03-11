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

// filterRangeInPlace(array_1, 2, 5);
// console.log(array_1);

let arr_3 = [5, 2, 1, -10, 8];

arr_3.sort().reverse();
// console.log(arr_3);

let arr_4 = ["HTML", "JavaScript", "CSS"];

let copySorted = function (arr) {
  let new_arr = [...arr];
  new_arr.sort();
  console.log(new_arr);
};
// copySorted(arr_4);
// console.log(arr_4);

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((i) => i.name);

// console.log(names);

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((i) => `${i.name} ${i.surname} id: ${i.id}`);
// let userMapped_2 = users.map((i) => ({
//   fullName: `${i.name} ${i.surname}`,
//   id: `${i.id}`,
// }));

// console.log(usersMapped);
// console.log(userMapped_2);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];
let sortByAge = function (arr) {
  console.log(arr.sort((a, b) => (a.age > b.age ? 1 : -1)));
};

// sortByAge(arr) ;

// let arr = [1, 2, 3];
// let shuffle = function (arr) {
//   console.log(Math.floor(Math.random(arr) * 10));
// };
// shuffle(arr);

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

function getAverageAge(users) {
  let count = 0;
  for (let i = 0; i < users.length; i++) {
    count += users[i].age;
  }
  console.log(count / users.length);
}
// getAverageAge(arr);

function unique(arr) {
  console.log(arr.filter((val, index, array) => array.indexOf(val) === index));
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

// unique(strings);
function unique_2(str) {
  let newArr = [];
  for (el of str) {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  }
  console.log(newArr);
}
// unique_2(strings);

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
  return arr.reduce((acc, val) => {
    acc[val.id] = val;
    return acc;
  }, {});
}
const show_function_group = groupById(users);
// console.log(show_function_group);
let range = {
  from: 1,
  to: 5,
};
// for (let num of range) {
//   // console.log(num);
// }

let strings_2 = "this is the string";
for (let str of strings_2) {
  // console.log(str);//////////////////////   the same!!!
}

let iterator = strings_2[Symbol.iterator]();
while (true) {
  let result = iterator.next();
  if (result.done) break;
  // console.log(result.value);///////////     the same!!!
}

let arr_5 = Array.from(range);
// console.log(arr_5);

let mapObject = new Map([
  ["name", "Patrik"],
  ["age", 34],
  ["isActive", true],
]);
// console.log(myObject);

for (let keys of mapObject.values()) {
  // console.log(keys);
}

mapObject.forEach((val, key, map) => {
  // console.log(`${key}: ${val} `);
});

newObject = {
  name: "Ivan",
  age: 54,
  isActive: true,
};

let mapNewObject = new Map(Object.entries(newObject));
// console.log(mapNewObject);

let classicObjFromMap = Object.fromEntries(mapObject);
// console.log(classicObjFromMap);

let map_2 = new Map();
map_2.set("banana", 1);
map_2.set("orange", 2);
map_2.set("meat", 4);
// console.log(map_2.size);

let obj_classic = Object.fromEntries(map_2);
// console.log(obj_classic);

let mySet = new Set();
let ivan = { name: "Ivan" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
let ageMary = { age: 34 };

let newArr_2 = [ivan, pete, mary, ageMary];

mySet.add(ivan);
mySet.add(ageMary);
mySet.add(pete);
mySet.add(ivan);
// console.log(mySet, mySet.size);

mySet.forEach((i, iAgain, mySet) => {
  // console.log(i);
});

let mySetArr = new Set(newArr);
// console.log(mySetArr);

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
function unique(arr) {
  let mySet_2 = new Set(arr);
  console.log(Array.from(mySet_2));
}
// unique(values);

let arr_mono = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let new_arr_first = arr.map((i) => i.split("").sort().join("").toLowerCase());
  let new_arr = new Set(new_arr_first);
  // let sort_set = new_arr.console.log(new_arr);
  // console.log(Array.from(new_arr));
}
aclean(arr_mono);

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessaages = new WeakSet();
readMessaages.add(messages[0]);
readMessaages.add(messages[1]);
readMessaages.add(messages[0]);

// console.log(readMessaages.has(messages[0]));

// console.log(Object.entries(messages[1]));

let runFun = function() {for (let val of Object.values(messages[0])) {
  console.log(val);
  }
}
// runFun()
let newObjectMessages = Object.entries(messages); ///  из объектов в массив
// console.log(newObjectMessages);
let returnArrToObject = Object.fromEntries(newObjectMessages);
// console.log(returnArrToObject);

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let sumSalaries = function(salaries) {
  let saralyArr = Object.entries(salaries)
  let sum = 0
  for (let i of saralyArr) {
    sum += Object.values(i)[1]
  }
  console.log(sum)
}
// sumSalaries(salaries)

let user = {
  name: 'John',
  age: 30
};

let count = function(obj) {
console.log(Object.keys(obj).length)
}

count(user)

let myArr = ['Vladislav', 'Ivan'];
let [firstname, surname] = myArr
// console.log(firstname)

let user_3 = {};
[user_3.name, , user_3.s_name] = 'Ivanov Ivan Ivanovich'.split(' ');
// console.log(user_3.name);

let user_2 = {
  name: "Ivan",
  age: 30
};
for (let [key, value] of Object.entries(user)) {
  // console.log(`${key}: ${value}`)
}
// console.log(user_2)

let user_4 = {
  name: "John",
  years: 30,
  // isAdmin: true
};

let {name, years: age, isAdmin = false } = user_4;

// console.log(`${name}, ${age}, ${isAdmin}`);

let randomNum = Math.floor(Math.random()* (2021 - 1800 + 1)) + 1800
// console.log(randomNum)

let salaries_2 = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let topSalary = function(salaries) {
  let arr_2 = []
  let name = null
for (let [key,values] of Object.entries(salaries_2))
  if(values > arr_2){
    arr_2 = values
    name = key
  }
  console.log(name)
}

// topSalary(salaries_2)
let count_2 = 0
let start = new Date();
for (let i = 0; i < 100000; i++) {
  count_2 += 1
}
let end = new Date();
// console.log(`this for during ${end - start} milsec ${count_2}`)



let dateTask = new Date(2012,1,20,3,12)
// console.log(dateTask)

let randomNumOrder = (Math.random() * (1 - 0.001) + 0.001).toFixed(3);
// console.log(randomNumOrder)


let date_2 = new Date()

let getWeekDay_2 = function(i) {
  let arrDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]
  let dayToday = i.getDate() - 1
  if (i.getDate() == 0) {
    
  }
  console.log(dayToday)
console.log(arrDays[dayToday])
}
// getWeekDay_2(date_2)

let oneDate = new Date(2024, 1, 7)

getDateAgo = function(date, days) {
  let timstamt = date.getTime()
  let dif_1 = new Date(2024,3,4)
  let dif_2 = new Date(2024,3,3)
  let daysStamt = (dif_1.getTime() - dif_2.getTime()) * days
  timestamt_result = (timstamt - daysStamt)
  let resultDate = new Date(timestamt_result)
console.log(resultDate.getDate())
}
// getDateAgo(oneDate, 5)


getDateAgo_2 = function(date, days) {
  console.log(date.getDate() - days)
}
// getDateAgo_2(oneDate, 5)

getSecondsToday = function() { 
  let today = new Date()
  let todayWithoutHours = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  console.log(Math.round((today - todayWithoutHours) / 1000))
  console.log(todayWithoutHours)}

// getSecondsToday()

getSecondsToTomorrow = function() {
  let today_2 = new Date()
  let tomorrow = new Date(today_2.getFullYear(), today_2.getMonth(), today_2.getDate() + 1, )
  console.log(Math.round((tomorrow - today_2) / 1000))
}
 
// getSecondsToTomorrow()

formatDate = function(date) {
  let timeNowStamp = new Date().getTime() 
  timestampFromArg = date.getTime()
  if ((timeNowStamp - timestampFromArg) < 1000) {
    console.log("прямо сейчас")
  }
  else if ((timeNowStamp - timestampFromArg) < 60000) {
    console.log(`${(timeNowStamp - timestampFromArg) / 1000}30 сек. назад`)
  }
  else if ((timeNowStamp - timestampFromArg) < (60000 * 60)) {
    console.log(`${(timeNowStamp - timestampFromArg) / (1000 * 60)} мин. назад`)
  }
  
}

formatDate(new Date(new Date - 5 * 60 * 1000))


