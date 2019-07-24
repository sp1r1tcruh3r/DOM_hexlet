/*

normalize.js

Реализуйте и экспортируйте по умолчанию функцию normalize, которая нормализует имена классов для всех элементов на странице. В данном случае это означает, что происходит преобразование всех классов, написанных с использованием kebab нотации, в camelCase нотацию: text-center => textCenter

Попробуйте решить эту задачу без использования регулярных выражений.

// <body>
//   <div class="text-center row-b">Bam</div>
// </body>
normalize(document);
console.log(document.body.innerHTML);
// <body>
//   <div class="textCenter rowB">Bam</div>
// </body>

Подсказки

    Самый простой способ найти все элементы в документе это document.body.getElementsByTagName('*')
    Приведение к camelCase https://lodash.com/docs/4.17.11#camelCase
    Замена классов replace у объекта classList

*/

import { camelCase } from 'lodash';

// BEGIN (write your solution here)
export default (doc) => {
  for (const element of doc.body.getElementsByTagName('*')) { // eslint-disable-line
    const process = item => element.classList.replace(item, camelCase(item));
    element.classList.forEach(process);
  }
};
