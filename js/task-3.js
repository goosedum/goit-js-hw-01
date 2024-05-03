function filterArray(numbers, value) {
    // створення порожнього масиву
    const newNumbers = [];
    // використання циклу для ітерації кожного елемента
    for (let i = 0; numbers.length > i; i++) {
    // використання умовного оператора if для перевірки кожного елемента і додавання їх до масиву
        if (numbers[i] > value) {
            newNumbers.push(numbers[i]);
        }
    }
     return newNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]