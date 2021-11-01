const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slides = document.querySelectorAll(".slider__item");
// console.log(nextBtn);
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
nextBtn.addEventListener('click', () => {
    plusSlides(1);
});
prevBtn.addEventListener('click',() => {
    plusSlides(-1);
});
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}