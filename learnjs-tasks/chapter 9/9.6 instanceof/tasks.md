# Странный instanceof
важность: 5
Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().
```js
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true
```
## Решение
Потому что так работает `isinstanceof` - он просматривает цепочку прототипов класса. А так как мы присвоили прототипу класса `A` прототип класса `B`, то `isinstanceof` считает, что имеет дело с объектом класса `B`.