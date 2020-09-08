const toggle = document.getElementById('toggle');
const readMore = document.getElementById('section1');
const container1 = document.querySelector('.section1-container');
const container2 = document.querySelector('.section1-container2');
toggle.addEventListener('click', () => {
  readMore.classList.toggle('toggle');
  container1.classList.toggle('toggle');
  container2.classList.toggle('toggle');
})


