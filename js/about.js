const cardSlider = document.querySelector('.card-slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Event listener for "Next" button
nextBtn.addEventListener('click', () => {
    const cardWidth = document.querySelector('.card').offsetWidth + 20; // card width + margin
    const maxScroll = cardSlider.scrollWidth - cardSlider.offsetWidth;

    // Move to the next set of cards
    currentIndex += cardWidth;
    if (currentIndex > maxScroll) currentIndex = maxScroll;

    cardSlider.style.transform = `translateX(-${currentIndex}px)`;
});

// Event listener for "Previous" button
prevBtn.addEventListener('click', () => {
    const cardWidth = document.querySelector('.card').offsetWidth + 20; // card width + margin

    // Move to the previous set of cards
    currentIndex -= cardWidth;
    if (currentIndex < 0) currentIndex = 0;

    cardSlider.style.transform = `translateX(-${currentIndex}px)`;
});