# Task 1
## Наследование от SyntaxError
важность: 5

Создайте класс FormatError, который наследует от встроенного класса SyntaxError.

Класс должен поддерживать свойства message, name и stack.

Пример использования:
```js
let err = new FormatError("ошибка форматирования");

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError)
```
## Решение
см. `1.html`