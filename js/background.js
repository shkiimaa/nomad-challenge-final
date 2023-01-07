const body = document.body;
const images = ['1.jpeg', '2.jpeg', '3.jpeg'];
const bgImg = document.createElement('img');
const randomImage = images[Math.floor(Math.random() * images.length)];

bgImg.src = `images/${randomImage}`;
bgImg.classList.add('bgimage');

body.appendChild(bgImg);
