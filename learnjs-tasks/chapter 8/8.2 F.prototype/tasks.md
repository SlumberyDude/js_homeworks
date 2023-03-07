# Task 1
## Изменяем "prototype"
важность: 5

В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

Сначала у нас есть такой код:
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true
```
Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // ?
```
…А если код такой (заменили одну строчку)?
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // ?
```
Или такой (заменили одну строчку)?
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // ?
```
Или, наконец, такой:
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // ?
```

## Решение

Сначала у нас есть такой код:
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true
```
Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {}; // <--highlighted---

alert( rabbit.eats ); // ?
```
> **[Ответ:]** Прототип был перезаписан, но объект `rabbit` был создан ранее, на него это не повлияет. Выведется `true`

…А если код такой (заменили одну строчку)?
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false; // <--highlighted---

alert( rabbit.eats ); // ?
```
> **[Ответ:]** У прототипа было перезаписано свойство. Однако это все еще тот же объект прототипа, что и был в начале, который является родителем в том числе `rabbit`. выведет его новое значение `false`

Или такой (заменили одну строчку)?
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats; // <--highlighted---

alert( rabbit.eats ); // ?
```
> **[Ответ:]** Было удалено свойство у объекта `rabbit` а не у прототипа. Такого свойства не было, ничего не поменяется по сравнению с исходным случаем. Выведет `true`.

Или, наконец, такой:
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats; // <--highlighted---

alert( rabbit.eats ); // ?
```
> **[Ответ:]** Теперь удалено свойсово прототипа. `eats` не будет найден нигде и выведет `undefined`

**[Итог:]** Выводы будут следующими: `true, false, true, undefined`

# Task 2
## Создайте новый объект с помощью уже существующего
важность: 5

Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?
```js
let obj2 = new obj.constructor();
```
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.

## Решение
Да, так сделать можно. Конструктор в прототипе должен иметь значение функции создания объекта, тогда такой код сработает.

Таким образом будет работать для прототипа вида
```js
function Obj() {}
obj.prototype = {
    constructor: Obj;
};
```