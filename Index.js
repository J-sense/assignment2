// ans to the que no - 1
function calculateDifference(num1, num2) {
    return num1 - num2;
  }
  const result = calculateDifference(10, 4); 
  console.log(result);  

// ans to the que no - 2
  function isOdd(number) {
    return number % 2 !== 0;
  }
  console.log(isOdd(7)); 
  console.log(isOdd(4)); 
  // ans to the que no - 3
  function findMin(numbers) {
    return Math.min(...numbers);
  }
  const array = [5, 12, 8, 3, 9];
  console.log(findMin(array)); 
    
  // ans to the que no - 4
  function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
  }
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(filterEvenNumbers(arr)); 
// ans to the que no - 5
      function sortArrayDescending(numbers) {
        return [...numbers].sort((a, b) => b - a);
      }
      const num = [5, 2, 9, 1, 7];
      console.log(sortArrayDescending(num));
// ans to the que no - 6         
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  console.log(lowercaseFirstLetter("Hello")); 
  console.log(lowercaseFirstLetter("JavaScript")); 
//   ans to the que no - 7  
  function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const filteredVowels = str.split('').filter(char => vowels.includes(char));
    return filteredVowels.length;
  }

console.log(countVowels("Hello World")); 
console.log(countVowels("JavaScript"));  

//   ans to the que no - 8
function findAverage(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
  }
  const arrr = [4, 8, 12, 16, 20];
  console.log(findAverage(arrr)); 