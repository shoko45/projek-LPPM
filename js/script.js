document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 0;
  const slider = document.getElementById('slider');
  const totalSlides = slider.children.length;

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const indicatorsContainer = document.getElementById('indicators');
  let indicators = [];

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToSlide(i));
    indicatorsContainer.appendChild(dot);
    indicators.push(dot);
  }

  function moveSlide(direction) {
    slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
    updateSlider();
  }

  function goToSlide(index) {
    slideIndex = index;
    updateSlider();
  }

  function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    indicators.forEach((dot, i) => {
      dot.classList.toggle('active', i === slideIndex);
    });
  }

  prevBtn.addEventListener('click', () => moveSlide(-1));
  nextBtn.addEventListener('click', () => moveSlide(1));

  setInterval(() => {
    moveSlide(1);
  }, 3000);

  updateSlider();
});
