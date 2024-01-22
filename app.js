let images = document.querySelectorAll('img');
let wrapper = document.getElementById('wrapper');
let collageWrapper = document.getElementById('fullImg');
let close = document.querySelector('span');

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        openModal(`images/hanny-naibaho-festival-unsplash1.jpg`);
    });
});

close.addEventListener('click', () => wrapper.style.display = 'none');

let openModal = (pic) => {
    wrapper.style.display = 'flex';
    collageWrapper.src = pic;
}