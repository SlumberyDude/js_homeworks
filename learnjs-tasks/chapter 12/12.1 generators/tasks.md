# Task 1
## Псевдослучайный генератор
Есть много областей, где нам нужны случайные данные.

Одной из них является тестирование. Нам могут понадобиться случайные данные: текст, числа и т.д., чтобы хорошо всё проверить.

В `JavaScript` мы можем использовать `Math.random()`. Но если что-то пойдёт не так, то нам нужно будет перезапустить тест, используя те же самые данные.

Для этого используются так называемые «сеяные псевдослучайные генераторы». Они получают «зерно», как первое значение, и затем генерируют следующее, используя формулу. Так что одно и то же зерно даёт одинаковую последовательность, и, следовательно, весь поток легко воспроизводим. Нам нужно только запомнить зерно, чтобы воспроизвести последовательность.

Пример такой формулы, которая генерирует более-менее равномерно распределённые значения:
```js
next = previous * 16807 % 2147483647
Если мы используем 1 как зерно, то значения будут:

16807
282475249
1622650073
```
…и так далее…
Задачей является создать функцию-генератор `pseudoRandom(seed)`, которая получает seed и создаёт генератор с указанной формулой.

Пример использования:
```js
let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073
```

## Решение
см. `1.html`