# Task 1
## Использование "this" в литерале объекта
важность: 5
Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?
```js
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?
```
## Решение
Будет ошибка.
В данном случае `this` объявлен не в методе объекта, а значит он ссылается на контекст функции `makeUser()` то есть `undefined`, так как функция не связана ни с каким объектом. Соответственно, у `undefined` не будет значения `.name` и произойдет ошибка.

# Task 2
## Создайте калькулятор
важность: 5
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
```js
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```
# Решение
```js
let calculator = {
    read() {
        this.leftOperand = +prompt('Input first number', 0);
        this.rightOperand = +prompt('Input second number', 0);
    },
    sum() {
        return this.leftOperand + this.rightOperand;
    },
    mul() {
        return this.leftOperand * this.rightOperand;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```

# Task 3
## Цепь вызовов
важность: 2
У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
```js
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
```
Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:
```js
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
```
Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
```js
ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
```
Такой подход широко используется в библиотеках JavaScript.

## Решение
```js
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
```