/**
 * Linear search
 * 
 * Loop through array from start to end, while you didnt found the index of item
 */

const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

let count = 0;
const linearSearch = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (array[i] === item) return i;
    }
    return null
}

console.log(linearSearch(array, 2));
console.log('count = ', count);