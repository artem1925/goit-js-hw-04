function filterArray(numbers, value) {
    const resultArray = []; // Створюємо порожній масив для зберігання підходящих чисел
    for (let i = 0; i < numbers.length; i++) { // Ітеруємо кожен елемент масиву numbers
        if (numbers[i] > value) { // Перевіряємо, чи елемент більший за значення value
            resultArray.push(numbers[i]); // Додаємо елемент до результатного масиву
        }
    }
    return resultArray; // Повертаємо новий масив з підходящими числами
}

// Перевірка коректності роботи функції
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
