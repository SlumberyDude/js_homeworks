# Task 1
## Отсортируйте массив с буквой ё
важность: 5

Используя `Intl.Collator`, отсортируйте массив:
```js
let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// ... ваш код ...

alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК
```
В этом примере порядок сортировки не должен зависеть от регистра.

Что касается буквы "ё", то мы следуем обычным правилам сортировки буквы ё, по которым «е» и «ё» считаются одной и той же буквой, за исключением случая, когда два слова отличаются только в позиции буквы «е» / «ё» – тогда слово с «е» ставится первым.

## Решение
см. `1.html`