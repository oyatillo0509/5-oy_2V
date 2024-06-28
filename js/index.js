// IIFE
// bu funksiyaning avtomatik ishlovchi turi hisoblanadi. bu funksiya run qilingandan kn chaqirilmasdan ishga tushadi . lekin bu funksiyani to'gridan to'g'ri ishlatish tavsiya etilmaydi chunki sayt hafsizligiga juda katta tasir qiladi. shuning uchun bu funksiya oddiy funksiyaga o'rab ishlatish tavsiya etiladi.

// Pure function
//  deb bir xil qiymat kritilganda har doim bir xil qiymat qaytaradigon funksiyalarga aytiladi. yaniy bular sof funksiya deyiladi. sof funksiyaga misol a va b sonlar ustida arifmetik amallar bajarililishiga misol keltirish mumkin sof bo'lmagan funksiyalar esa vaqt yoki ayrim sabablarga ko'ra o'zgaradi
// yana pure funksiyada sayt hafsizligi oshiradi va har doim bir xil natija qaytaradi
// pure funsiya afzalliklar:
// codeni oson test qilish imkonini beradi
// paralel ishlov berish imkonini beradi
// codeni barqarorligini taminlaydi va codeni ishlashini tezlashtiradi

// 1-masala  ]

// function toq_juft(numbers) {
//   return numbers.filter((number) => number % 2 === 0);
// }

// console.log(toq_juft([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 2-masala

// function sum_a(number) {
//   return number.reduce((sum, num) => sum + num, 0);
// }
// console.log(sum_a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 3-masala

// function kv(num) {
//   return num ** 5;
// }

// console.log(kv([4]));

// 4-masala

//  deb bir xil qiymat kritilganda har doim bir xil qiymat qaytaradigon funksiyalarga aytiladi. yaniy bular sof funksiya deyiladi. sof funksiyaga misol a va b sonlar ustida arifmetik amallar bajarililishiga misol keltirish mumkin sof bo'lmagan funksiyalar esa vaqt yoki ayrim sabablarga ko'ra o'zgaradi
// yana pure funksiyada sayt hafsizligi oshiradi va har doim bir xil natija qaytaradi
// pure funsiya afzalliklar:
// codeni oson test qilish imkonini beradi
// paralel ishlov berish imkonini beradi
// codeni barqarorligini taminlaydi va codeni ishlashini tezlashtiradi

//    Callback function

// Obyekt metodlariga oid masalalar.

// 1-masala

// function obb_k(obb) {
//   return Object.keys(obb);
// }

// console.log(
//   obb_k({
//     name: "Ali",
//     age: 19,
//     city: "qoqon",
//   })
// );

// 2-masala

// function obb_v(obb) {
//   return Object.values(obb);
// }

// console.log(
//   obb_v({
//     name: "Ali",
//     age: 19,
//     city: "qoqon",
//   })
// );

// 3-masala

// function obb_j(obb) {
//   return Object.entries(obb);
// }

// console.log(
//   obb_j({
//     name: "Ali",
//     age: 19,
//     city: "qoqon",
//   })
// );

// 4-masala
// chiqara olmadim

// Massiv metodlariga oid masalalar.
// 1-masala

// function mid_f(arr) {
//   const mid = Math.floor(arr.length / 2);

//   if (arr.length % 2 === 0) {
//     return arr.slice(mid - 1, mid + 2);
//   } else {
//     return arr.slice(mid - 1, mid + 2);
//   }
// }

// console.log(mid_f([1, 2, 3, 4, 5, 6, 7]));

// 2-masala
// o'sha kuni darsda yo'q edim videoni ko'rishga ulgurmadim chiqaraolmadim

// 3-masala

// function arr_q(arr1, arr2, arr3) {
//   return arr1.concat(arr3).concat(arr2);
// }

// const ar1 = [1, 2, 3];
// const ar2 = [7, 8, 9];
// const ar3 = [4, 5, 6];

// const res = arr_q(ar1, ar2, ar3);
// console.log(res);

// 4-masala

// function mas_m(arg1, arg2) {
//   let res = false;

//   for (let i = 0; i < arg1.length; i++) {
//     if (arg1[i] === arg2) {
//       res = i + 3;
//       break;
//     }
//   }

//   return res;
// }

// console.log(mas_m([1, 2, 3, 4, 5, 6, 9], 4));

// 5-masala

// function index_m(arg) {
//   let res;
//   res = arg.lastIndexOf(2);

//   return res;
// }

// console.log(index_m([1, 2, 3, 4, 5, 6, 9]));

// 6-masala

// function arr_m(array1, array2, element) {
//   return array1.includes(element) && array2.includes(element);
// }

// console.log(arr_m([1, 2, 3, 4, 5], [5, 6, 7, 8, 9], 5));

// 7-masala

// function arr_m(arr, element) {
//   return arr.includes(element);
// }

// console.log(arr_m([1, 2, 3, 4, 5], 3));

// 8-masala

// function arr_m(arr) {
//   let count = 0;
//   let sum = 0;

//   arr.forEach(function (num) {
//     if (num >= 100 && num <= 999) {
//       count++;
//       sum += num;
//     }
//   });

//   return sum / count;
// }

// console.log(arr_m([123, 45, 678, 234, 56, 789]));

// 9-masala

// function arr_m(arr) {
//   return arr.map(function (num) {
//     if (num % 2 === 0) {
//       return num * num;
//     } else {
//       return num ** 3;
//     }
//   });
// }

// console.log(arr_m([1, 2, 3, 4, 5, 6]));

// 10-masala

// function arr_m(arr) {
//   return arr.map(function (text) {
//     return text.slice(-1);
//   });
// }

// console.log(arr_m(["apple", "banana", "cherry"]));

// 11-masala

// function arr_m(arr) {
//   return arr.filter(function (word) {
//     return word.length < 4;
//   });
// }

// console.log(arr_m[("apple", "banana", "cherry", "date", "fig", "grape")]); // Output: ["fig"]

// 12-masala

// function age_m(users) {
//     return users.some(function(user) {
//         return user.age >= 18;
//     });
// }

// console.log(age_m([
//     { name: "John", age: 5 },
//     { name: "Doe", age: 20 },
//     { name: "Alex", age: 50 }
// ]));

// 13-masala

// function uz_n(names) {
//   return names.every(function (name) {
//     return name.slice(-3) === "jon";
//   });
// }

// console.log(uz_n(["Anvarjon", "Azimjon", "Sarvarjon"]));

// 14-masala

// function arr_m(arr) {
//   return arr.find(function (num) {
//     return num >= 100 && num <= 999 && num % 5 === 0;
//   });
// }

// console.log(arr_m([110, 225, 340, 455, 570]));

// 15-masala

// function bek(names) {
//   return names.findIndex(function (name) {
//     return name.includes("Bek");
//   });
// }

// console.log(bek(["Abdulloh", "Bekzod", "Bektimir", "Oyatillo", "Fathullo"]));
