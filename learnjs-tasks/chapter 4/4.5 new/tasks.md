# Task 1
## Две функции - один объект
важность: 2
Возможно ли создать функции A и B, чтобы new A() == new B()?
```js
function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
```
Если да – приведите пример вашего кода.

## Решение
Мы знаем, что объекты равны только, если они указывают на один и тот же объект в памяти. То есть, оба конструктора должны отдавать один и тот же объект.

```js
let extObj = {};

function A() { return extObj; }
function B() { return extObj; }
let a = new A();
let b = new B();

alert( a == b ); // true
```
# Task 2
## Создайте калькулятор при помощи конструктора, new Calculator
важность: 5
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:
```js
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
```

## Решение
```js
function Calculator() {
    this.read = function() {
        this.leftOp = +prompt('Input left operand', 0);
        this.rightOp = +prompt('Input right operand', 0);
    };

    this.sum = function() {
        return this.leftOp + this.rightOp;
    };

    this.mul = function() {
        return this.leftOp * this.rightOp;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
```

# Task 3
## Создайте new Accumulator
важность: 5
Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:
```js
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
```

## Решение
```js
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('Add value', 0);
    };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
```