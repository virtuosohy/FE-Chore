let index = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[index].style.display = 'block';
  updateDots();
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
  });
});

function nextSlide() {
  if (index < slides.length - 1) {
    index++;
  } else {
    index = 0;
  }
  showSlide(index);
}

function prevSlide() {
  if (index > 0) {
    index--;
  } else {
    index = slides.length - 1;
  }
  showSlide(index);
}

// 初始化显示第一张幻灯片
showSlide(index);