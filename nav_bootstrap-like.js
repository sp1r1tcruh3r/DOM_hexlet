/*


В Bootstrap есть компонент nav (Обязательно перейдите по ссылке и покликайте по нему). Один из вариантов этого компонента, это табы, которые переключаются, по нажатию, без перезагрузки страницы.

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab">Contact</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>

По клику на таб происходит следующее:

    Класс active снимается с текущего элемента меню
    У ссылки и дива с данными добавляется класс active

Общий принцип работы в том, что каждый таб представлен ссылкой с href в виде хеша #profile, а ниже определен div с id равным profile. По клику на таб, код должен извлечь id, найти соответствующий элемент и сделать его активным, не забыв при этом снять класс active с таба который был активным до клика.
src/application.js

Реализуйте логику переключения табов.

Постройте свою логику так, чтобы она позволила использовать на одной странице любое количество компонентов nav.

Технически, бутстрап ориентируется на наличие аттрибута data-toggle и именно по нему решает активировать ли динамическое поведение для компонента nav. Если его нет, значит данное меню не динамическое.
Подсказки

    В коде можно использовать глобальный объект document
    Селектор по data элементам [data-toggle], например: document.querySelectorAll('h1[data-key]');.
    closest
    hash

*/
export default () => {
  // BEGIN (write your solution here)
  const handle = ({ target }) => {
    const nav = target.closest('.nav');
    const current = nav.querySelector('a.active');
    current.classList.remove('active');
    const currentTabContentId = current.hash.slice(1);
    const currentTabContent = document.getElementById(currentTabContentId);
    currentTabContent.classList.remove('active');

    target.classList.add('active');
    const nextTabContentId = target.hash.slice(1);
    const nextTabContent = document.getElementById(nextTabContentId);
    nextTabContent.classList.add('active');
  };

  const links = document.querySelectorAll('a[data-toggle]');
  links.forEach((element) => {
    element.addEventListener('click', handle);
  });
  // END
};
