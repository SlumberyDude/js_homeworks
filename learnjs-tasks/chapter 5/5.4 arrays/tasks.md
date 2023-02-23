# Task 1
## Скопирован ли массив?
важность: 3
Что выведет следующий код?
```js
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?
```

## Решение
Получим `4`

Так как две переменные `fruits`, `shoppingCart` ссылаются на один и тот же объект массива.

# Task 2
## Операции с массивами
важность: 5
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
Массив по ходу выполнения операций:
```js
Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
```

## Решение
см. 2.html

# Task 3
## Вызов в контексте массива
важность: 5
Каков результат? Почему?
```js
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
```

## Решение
Массив работает как объект, поэтому добавляя функцию мы суть добавляем метод, а this ссылается на объект "перед точкой", который в нашем случае - массив.

Соответственно, будет выведен массив из трех элементов `a,b,function() {...}`

# Task 4
## Сумма введённых чисел
важность: 4
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

## Решение
```js
function sumInput() {
    let arr = [];
    while (true) {
        let num = prompt('Введите значение', 0);
        if (num === null || num === '' || !isFinite(+num)) {
            break;
        }
        arr.push(+num);
    }
    let res = 0;
    for (let item of arr) {
        res += item;
    }
    return res;
}

alert(sumInput());
```

# Task 5
## Подмассив наибольшей суммы
важность: 2
На входе массив чисел, например: `arr = [1, -2, 3, 4, -9, 6].`

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция `getMaxSubSum(arr)` должна возвращать эту сумму.

Например:
```js
getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (берём все)
```
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
```js
getMaxSubSum([-1, -2, -3]) = 0
```
Попробуйте придумать быстрое решение: `O(n2)`, а лучше за `О(n)` операций.

## Решение
```js

function getMaxSubSum(arr) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (sum <= 0) sum = 0;
        sum += arr[i];
        if (sum > max) max = sum;
    }
    return max;
}

```