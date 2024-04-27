/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

console.log("The Product of 2,3,4 is: " + product([2, 3, 4]));

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) return words[0].length;
  return Math.max(words[0].length, longest(words.slice(1)));
}

console.log(
  "The longest characters in the words hello, hi, and hola is: " +
    longest(["hello", "hi", "hola"])
);
/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0) {
  if (index >= str.length) return "";

  return str[index] + everyOther(str, index + 2);
}
console.log(
  `The result of every other word of hello is: ` + everyOther("hello")
);

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.substring(1, str.length - 1));
}

console.log("Is the word tacocat a palindrom: " + isPalindrome("tacocat"));
console.log("Is the word pokemon a palindrom: " + isPalindrome("pokemon"));

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index >= arr.length) return -1;
  if (arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}
let animals = ["duck", "cat", "pony"];

console.log(
  "The following results will indicate if the specified value is contained within the array 'animals':"
);
console.log("Result for 'cat': " + findIndex(animals, "cat"));
console.log("Result for 'porcupine': " + findIndex(animals, "porcupine"));
/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === "") return "";
  return revString(str.substring(1)) + str.charAt(0);
}
console.log("The reverse of porcupine is: " + revString("porcupine"));
/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  return strings;
}

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz",
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!",
        },
      },
    },
    favoriteString: "nice!",
  },
};

console.log("From the nestedObj, we've gathered the following strings: ");
console.log(gatherStrings(nestedObj));

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1;
  }
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] > val) {
    return binarySearch(arr, val, low, mid - 1);
  } else {
    return binarySearch(arr, val, mid + 1, high);
  }
}
console.log(
  "The location of 1 on the nums arr is: " + binarySearch([1, 2, 3, 4], 1)
);
console.log(
  "The location of 3 on the nums arr is: " + binarySearch([1, 2, 3, 4], 3)
);
console.log(
  "The location of 5 on the nums arr is: " + binarySearch([1, 2, 3, 4], 5)
);

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
