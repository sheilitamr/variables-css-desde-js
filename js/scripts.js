const rootStyles = document.documentElement.style;
const displacement = document.getElementById('displacement');
const buttonColor = document.getElementById('button-color');
const mouseMove = document.getElementById('mouse-move');

window.addEventListener('scroll', event => {
  const scrollTop = event.target.scrollingElement.scrollTop;
  const offsetHeight =
    event.target.scrollingElement.offsetHeight -
    event.target.scrollingElement.clientHeight;

  const result = (scrollTop * 100) / offsetHeight;

  rootStyles.setProperty('--width-scroll', result + '%');

  //EJERCICIO 2
  displacement.textContent = scrollTop;
});
/* buttonColor.addEventListener('click', () => {
  const randomNumberRed = Math.floor(Math.random() * 255);
  const randomNumberGreen = Math.floor(Math.random() * 255);
  const randomNumberBlue = Math.floor(Math.random() * 255);

  rootStyles.setProperty('--red', randomNumberRed);
  rootStyles.setProperty('--green', randomNumberGreen);
  rootStyles.setProperty('--blue', randomNumberBlue);
}); */

window.addEventListener('mousemove', e => {
  rootStyles.setProperty('--positionX', e.clientX + 'px');
  rootStyles.setProperty('--positionY', e.clientY + 'px');
});
