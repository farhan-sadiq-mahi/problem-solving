function rotateLeft(arr, num) {
    for (let i = 0; i < num; i++) {
        let first = arr.shift();
        arr.push(first);
    }
    return arr;
}
console.log(rotateLeft([1, 2, 3, 4, 5], 4)); 