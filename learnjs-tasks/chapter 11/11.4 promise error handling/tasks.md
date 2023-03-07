# Task 1
## Ошибка в setTimeout
Что вы думаете? Выполнится ли `.catch`? Поясните свой ответ.
```js
new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);
```

## Решение
.catch не выполнится так как планировщик синхронно выкинет ошибку уже после конца работы промиса, она не будет им поймана. Следует использовать reject.
