const images = [
    'pic01.jpg',
    'pic02.jpg',
    'pic03.jpg',
    'pic04.jpg',
    'pic05.jpg',
    'pic06.jpg',
    'pic07.jpg',
    'pic08.jpg',
    'pic09.jpg',
    'pic10.jpg',
    'pic11.jpg',
    'pic12.jpg',
    'pic13.jpg',
    'pic14.jpg',
    'pic15.jpg',
    'pic16.jpg',
    'pic17.jpg',
    'pic18.jpg',
    'pic19.jpg',
    'pic20.jpg',


]

let imgIndex = 0;
const imgElement = document.getElementById("slider-img")

setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute("src", imgUrl);
    imgIndex++;
}, 1000)