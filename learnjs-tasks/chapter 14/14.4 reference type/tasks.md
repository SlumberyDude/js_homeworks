# Task 1
## Проверка синтаксиса
важность: 2

Каким будет результат выполнения этого кода?
```js
let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()
```
P.S. Здесь есть подвох :)

## Решение

Будет ошибка т.к. скобки воспринимаются как вызов функции у объекта user, который не определен.

Если поставить `;` после определения объекта, то выведет `John`

# Task 2
## Объясните значение "this"
важность: 3

В представленном ниже коде мы намерены вызвать `obj.go()` метод 4 раза подряд.

Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?
```js
let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined
```

## Решение
Потому что в (3) и (4) происходит вычисление выражения перед точкой, которое теряет контекст и как следствие в метод уже не передается нужный ссылочный тип.