// Масив "arr" довжиною n+1 містить натуральні числа від 1 до n.
// Знайдіть будь-який елемент, що повторюється в масиві за оптимальний час (O(n))
// не змінюючи вихідний масив і не використовуючи додаткову пам'ять.


const values = [1, 100, 5, 6, 13, 13, 22, 5, 6];
// вхідний масивю
const duplicates = values.filter((number, index, numbers) => {
// console.log(number); // number - элемент масива
// console.log(index); // index - індекс элемента масива
// console.log(numbers); // numbers - масив values
return numbers.indexOf(number) !== index;
});

console.log(duplicates); // [ 13, 5 ,6] 