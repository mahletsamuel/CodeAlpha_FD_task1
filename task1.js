const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnails img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const images = Array.from(thumbnails).map(img => img.src);

function updateMainImage(index) {
    mainImage.src = images[index];
    currentIndex = index;
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainImage(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateMainImage(currentIndex);
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        updateMainImage(index);
    });
});

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);
