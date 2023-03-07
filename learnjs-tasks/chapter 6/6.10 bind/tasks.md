# Task 1
## Связанная функция как метод
важность: 5

Что выведет функция?
```js
function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();
```
## Решение
Будет выведено `null` т.к. был привязан контекст `null`

# Task 2
## Повторный bind
важность: 5

Можем ли мы изменить `this` дополнительным связыванием?

Что выведет этот код?
```js
function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
```

## Решение
Выведет "Вася" так как контекст может привязываться единожды. Первый `bind` возвращает не функцию, а экзотический объект, второй будет проигнорирован.

# Task 3
## Свойство функции после bind
важность: 5

В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
```js
function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // что выведет? почему?
```

## Решение
Выведет `undefined`. `bind` сработает так же, как и `apply` с созданием нового объекта. Будет скопировано тело функции, но не её свойства как объекта.

# Task 4
## Исправьте функцию, теряющую "this"
важность: 5

Вызов `askPassword()` в приведённом ниже коде должен проверить пароль и затем вызвать `user.loginOk/loginFail` в зависимости от ответа.

Однако, его вызов приводит к ошибке. Почему?

Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).
```js
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk, user.loginFail);
```

## Решение
см. `4.html`

При вызове функции происходит потеря контекста, необходимо передавать функции с привязанным `this`
```js
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
```

# Task 5
## Использование частично применённой функции для логина
важность: 5

Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".

Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
```js
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(?, ?); // ?
```
Ваши изменения должны затрагивать только выделенный фрагмент кода.

## Решение

Передадим функцию логина с привязанным контекстом и зафиксированным параметром. `true` в первом случае и `false` во втором.
```js
askPassword(user.login.bind(user, true), user.login.bind(user, false)); 
```