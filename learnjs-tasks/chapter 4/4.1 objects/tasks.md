# Task 1
## Привет, object
важность: 5
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.

## Решение
```js
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
```

# Task 2
## Проверка на пустоту
важность: 5
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:
```js
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
```

## Решение
```js
function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}
```

# Task 3
## Объекты-константы?
важность: 5
Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
```js
const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";
```
## Решение
Да, изменять свойства объекта можно. Нельзя присвоить переменной `user` другой объект.

# Task 4
## Сумма свойств объекта
важность: 5
У нас есть объект, в котором хранятся зарплаты нашей команды:
```js
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
## Решение
см. 4.html

# Task 5
## Умножаем все числовые свойства на 2
важность: 3
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:
```js
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.

## Решение
```js
function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'number') {
            obj[prop] *= 2;
        }
    }
}
```
см. 5.html
