//1. Reverse string
const reverseWord = (word) => word.split('').reverse().join('');
console.log(reverseWord('Hello'));

//2. Palindrome

function palindrome(str) {
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

    var lowRegStr = str.toLowerCase().replace(re, '');

    // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
    var reverseStr = lowRegStr.split('').reverse().join('');

    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
}

console.log(palindrome("A man, a plan, a canal. Panama"));


//3. Longest word

function findLongestWord(str) {
    var longestWord = str.split(' ').reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

//4. Longest substring without repeating characters

function lengthOfLongestSubstring(s) {
    var startIdx = 0
    // var endIdx = 0
    var maxLength = 0

    var curSet = new Set()

    for (let endIdx = 0; endIdx < s.length; endIdx++) {
        if (curSet.has(s[endIdx])) {
            var prevEndIdx = Math.max(endIdx - 1, 0)
            maxLength = Math.max(prevEndIdx - startIdx + 1, maxLength)

            while (s[startIdx] !== s[endIdx]) {
                // window left The border shrinks to the right and updates curSet 
                curSet.delete(s[startIdx++])
            }

            startIdx++ // The left border has pointed to the position of the repeated letter, and then shrinks to the right 
        } else {
            curSet.add(s[endIdx])
        }

        if (endIdx === (s.length - 1)) {
            maxLength = Math.max(endIdx - startIdx + 1, maxLength)
        }
    }

    return maxLength
};
console.log(lengthOfLongestSubstring('wwker'))

//Unique letters
const letters = new Set(["a", "a", "b", "c"]);
console.log(letters);

//Merging an array.
const numbers = [1, 2, [4, 5], 6, [7, 8]]
const flattened = numbers.flat();
console.log(flattened)


//5. Interger Reversal
const reverseInterger = integer =>
    parseInt(
        integer
            .toString()
            .split("")
            .reverse()
            .join("")
    ) * Math.sign(integer);

console.log(reverseInterger(-2345));


//6. FizzBuzz
const fizzBuzz = number => {
    //let output = [];
    for (let i = 0; i <= number.length; i++) {
        if (i % 6 === 0) console.log("Fizz Buzz") //output.push("Fizz Buzz");
        else if (i % 2 === 0) console.log("Fizz")  //output.push("Fizz");
        else if (i % 3 === 0) console.log("Buzz")  //output.push("Buzz");
        else console.log(i) //output.push(i);
    }
    //return output;
};

console.log(fizzBuzz([3, 4, 5, 6, 7, 8, 9, 10, 12]));


//7. Given a string of characters, return the character that appears the most often.
const max = word => {
    let maxCount = 0;
    maxCharacter = null;
    lowerCase = word.toLowerCase();
    let wordArr = lowerCase.split("");
    const result = wordArr.reduce((acc, letter) => {
        if (acc[letter]) {
            acc[letter]++
        } else {
            acc[letter] = 1
        }
        return acc;
    }, {})

    for (let res in result) {
        if (result[res] > maxCount) {
            maxCount = result[res];
            maxCharacter = res;
        }
    }

    return maxCharacter
}


console.log(max('Panama'));

//7. Given a string of words or phrases, count the number of vowels.
//a
const vowels = word => {
    let count = 0;
    const choices = "aeiou"; // or ['a', 'e', 'i', 'o', 'u']

    for (let character of word.toLowerCase())
        if (choices.includes(character)) count++;

    return count;
};

//b
const _vowels = word => {
    matches = word.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(_vowels("hello world"));


// 8. Anagrams are words or phrases that contain the same number of characters.
// Create a function that checks for this.

const _sort = word => word.replace(/\W/g, "").toLowerCase().split("").sort().join("");
const _anagrams = (stringA, stringB) => _sort(stringA) === _sort(stringB);

console.log(_anagrams("hello world", "world hello"));


//9. Given an array and a size, split the array items into a list of arrays of the given size.
const chunk = (array, size) => {
    const chunks = [];

    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }

    return chunks;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2))


//10. Given an array of items, reverse the order.
const _reverseArray = array => {
    for (let i = 0; i < array.length / 2; i++) {
        [array[i], array[array.length - 1 - i]] = [
            array[array.length - 1 - i],
            array[i]
        ];
    }
    return array;
};

console.log(_reverseArray([1, 2, 3, 4, 5]));


//11. Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([2, 3, 1, 5, 7], 5));


// func binarySearch(arr[]int, target int) int {
//     left:= 0
//     right:= len(arr) - 1
//     for left <= right {
//         mid:= (right + left) / 2
// 		if arr[mid] == target {
//             return mid
//         } else if target < arr[mid] {
//             right = mid - 1
//         } else {
//         left = mid + 1
//     }
// }
// return -1
// }

//-- fibonaci sequence
// func fibonaci(i int)(ret int) {
//     if i == 0 {
//         return 0 //base case
//     }
//     if i == 1 {
//         return 1 //base case
//     }
//     return fibonaci(i - 1) + fibonaci(i - 2)
// }

//-- Factorial
// func fact(n int) int {
//     if n >= 1 {
//         return n * fact(n - 1) //recursive case
//     }
//     return 1 //base case
// }