// ------------------------------task 1------------------------------

// ------------------------------Варіант 1------------------------------
// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//     return "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// ------------------------------Варіант 2------------------------------
// function checkAge(age) {
// return age >= 18 ? "You are an adult" : "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// ------------------------------task 2------------------------------

// ------------------------------Варіант 1------------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

// //   let message;

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//     return "Access denied, wrong password!";
// //   return message;
//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// ------------------------------Варіант 2------------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//     return password === ADMIN_PASSWORD ? "Welcome!" : "Access denied, wrong password!";
//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// ------------------------------task 3------------------------------

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   return 'The order is accepted, our manager will contact you';
//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// ------------------------------task 4------------------------------

// const fruits = ["apple", "plum", "pear", "orange"];

// console.log(fruits);
// console.table(fruits);

// ------------------------------task 5------------------------------

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// ------------------------------task 6------------------------------

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// // Write your code under this line

// console.log(fruits);

// ------------------------------task 7------------------------------

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// ------------------------------task 8------------------------------

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// // Change code below this line

// console.log(lastElementIndex);
// console.log(lastElement);

// ------------------------------task 9------------------------------

// function getExtremeElements(array) {
//   // Change code below this line
//     return [array[0], array[array.length - 1]];
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// ------------------------------task 10------------------------------

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//     words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// ------------------------------task 11------------------------------

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     return message.split(" ").length * pricePerWord;

//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// ------------------------------task 12------------------------------

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//     string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// ------------------------------task 13------------------------------

// function slugify(title) {
//   // Change code below this line
//     return title.toLowerCase(title).split(" ").join("-");

//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// ------------------------------task 14------------------------------

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// ------------------------------task 15------------------------------

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);

// ------------------------------task 16------------------------------

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   return firstArray.concat(secondArray).length >= maxLength
//     ? firstArray.concat(secondArray).slice(0, maxLength)
//     : firstArray.concat(secondArray);

//   // Change code above this line
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// ------------------------------task 17------------------------------

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// ------------------------------task 18------------------------------

// function calculateTotal(number) {
//   // Change code below this line
//   let totalNumbers = 0;
//   for (let i = 1; i <= number; i += 1) {
//     totalNumbers += i;
//   }

//   return totalNumbers;
//   // Change code above this line
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

// ------------------------------task 19------------------------------

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ------------------------------task 20------------------------------

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let element of order) {
//     total += element;
// }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ------------------------------task 21------------------------------

// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(' ');
//   let longestWordString = words[0];

//   for (let word of words) {
//     if (word.length > longestWordString.length) {
//       longestWordString = word;
//     }
//   }

//   return longestWordString;
//   // Change code above this line
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// ------------------------------task 22------------------------------

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i)
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// ------------------------------task 23------------------------------

// ------------------------------Варіант 1------------------------------
// function filterArray(numbers, value) {
//    // Change code below this line
//   let moreValue = [];
//   for (let i = 0; i <= numbers.length; i += 1) {
//     console.log(i);
//     if (numbers[i] > value) {
//       moreValue.push(numbers[i]);
// }
//   }
//   return moreValue;

//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// ------------------------------Варіант 2------------------------------
// function filterArray(numbers, value) {
//    // Change code below this line
//   let moreValue = [];
//   for (const number of numbers) {
//      if (number > value) {
//       moreValue.push(number);
// }
//   }
//   return moreValue;

//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// ------------------------------task 24------------------------------

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

// ------------------------------task 25------------------------------

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let commonArrayNumbers = [];
//   for (const number of array1) {
//     if (array2.includes(number)) {
//       commonArrayNumbers.push(number);
//    }
//   }
  
//   return commonArrayNumbers;
//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// ------------------------------task 26------------------------------

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const element of order) {
//     total += element;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

// ------------------------------task 27------------------------------