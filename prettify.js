/*

prettify

Реализуйте функцию prettify, которая находит текст (дочерние текстовые ноды) внутри элемента div и оборачивает текст в параграф. Экспортируйте функцию по умолчанию.

// <body>
//   <p>Boom</p>
//   text
//   <div>Bam</div>
// </body>
const elements = prettify(document);
console.log(document.body.innerHTML);
// <body>
//   <p>Boom</p>
//   text
//   <div><p>Bam</p></div>
// </body>

Подсказки

    Очистка строки от пробельных символов: trim

*/

export default (document) => {
  const divs = [...document.getElementsByTagName('div')];
  divs.forEach((div) => {
    const textNodes = [...div.childNodes]
      .filter(child => child instanceof Text)
      .filter(child => child.textContent.trim() !== '');
    textNodes.forEach((node) => {
      const p = document.createElement('p');
      p.textContent = node.textContent;
      node.replaceWith(p);
    });
  });
};
