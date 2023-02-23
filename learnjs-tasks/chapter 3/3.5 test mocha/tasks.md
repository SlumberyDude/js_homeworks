# Task 1
## Что не так с этим тестом?
важность: 5
Что не так в нижеприведённом тесте функции pow?
```js
it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});
```
## Решение
Все случае выполняются в одном тесте. Лучше было бы разделить их и проверять отдельно.