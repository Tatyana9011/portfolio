/* eslint-disable strict */
'use strict';

const addStatus = (page, status, time, color = 'red') => {
    console.log('addStatus: ');
  let loaderHtml = '';
  let style = '';
  let div = '';

  div = page.querySelector(".massager");
  style = document.createElement('style');
  style.insertAdjacentHTML('afterbegin', `
    .preloader{
        width: 100%;
        text-align: center;
        color: ${color};
        margin: 5px 0;
        }`);

  const stratusMassage = `<div class="preloader">${status}</div> `;

   document.head.append(style);
   div.innerHTML = ``;
   div.innerHTML = stratusMassage;


  loaderHtml = document.querySelectorAll('.preloader');

  setTimeout(() => {

    if (loaderHtml) {
      loaderHtml.forEach(item => item.innerHTML = '');
      document.head.querySelector('style').remove();
    }

  }, time);

};

export default addStatus;