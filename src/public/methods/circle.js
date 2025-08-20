const circle = $.svg.querySelector('circle');
const text   = $.svg.querySelector('text');

function change() {
  if (text.content() === 'click') {
    circle.fill('green');
    text.content('ok').x(44);
  } else {
    circle.fill('red');
    text.content('click').x(36);
  }
}
