import '../css/style.css';
import JSConfetti from 'js-confetti';
const $canvas = document.querySelector('.confetti__canvas');
const $button = document.querySelector('.confetti__button');
const $book = document.querySelector('.book');
const $painting = document.querySelector('.painting');
const $paper = document.querySelector('.paper');


const makeConfetti = () => {
  const jsConfetti = new JSConfetti({ $canvas });

  setTimeout(() => {
    jsConfetti.addConfetti()
  }, 500);

  $button.addEventListener('click', () => {
    console.log('Button clicked');
    jsConfetti.addConfetti();
  });
}

const handleClickedObject = () => {
  console.log('Object clicked');
  $book.classList.add('hidden');
  $painting.classList.add('hidden');
  $paper.classList.add('hidden');
}

const init = () => {

  makeConfetti();
  $book.addEventListener('click', handleClickedObject);
  $painting.addEventListener('click', handleClickedObject);
  $paper.addEventListener('click', handleClickedObject);

}

init();
