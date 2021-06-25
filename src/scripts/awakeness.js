import $, { each } from 'jquery';

const ready = function() {
  const awakeness = () => {
    let windowHeight = window.innerHeight;

    $(window).resize(function() {
      windowHeight = window.innerHeight;
    });

    $('.awakeness').each(function() {
      var elementMiddle = $(this).offset().top + $(this).height() / 2;

      if (
        elementMiddle < $(window).scrollTop() ||
        elementMiddle > $(window).scrollTop() + windowHeight
      ) {
        $(this).addClass('sleep');
      } else {
        $(this).removeClass('sleep');
      }
    });
  };
  awakeness();
  window.addEventListener('scroll', awakeness);
};

$(document).ready(ready);
