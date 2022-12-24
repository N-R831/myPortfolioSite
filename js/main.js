'use strict';

// スムーススクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
    let targetElement = document.getElementById(href.replace('#', ''));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 0;
    const target = rect + offset - gap;
    window.scrollTo({
        top: target,
        behavior: 'smooth',
    });
    });
}

// PICK UP スライダー
$(function() {
    $('.js-slide').slick({
        arrows: false,
        centerMode: true,
        variableWidth: true,
        //centerPadding: '100px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              //centerPadding: '50px',
              slidesToShow: 1
            }
          }
        ]
      });
});