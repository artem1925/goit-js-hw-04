function slugify(title) {
    return title
        .toLowerCase() // Перетворюємо всі символи на нижній регістр
        .trim() // Видаляємо пробіли на початку та в кінці рядка
        .replace(/\s+/g, '-') // Замінюємо всі пробіли на тире
        .replace(/[^a-z0-9-]/g, ''); // Видаляємо всі символи, крім літер, цифр та тире
}

// Перевірка коректності роботи функції
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
