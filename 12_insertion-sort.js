function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        // Find the correct position for the key in the sorted part of the array
        for (let j = i - 1; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j];
            arr[j] = key;
        }
    }
    return arr;
}

const array = [2, 21, 29, 19, 48, 33, 44, 1, 0, 31];
console.log(insertionSort(array));