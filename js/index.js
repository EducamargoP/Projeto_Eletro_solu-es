let imgSlider = document.querySelectorAll('.slider-container .slider-box');
let btnProx = document.querySelector('#proxima');
let btnAnter = document.querySelector('#anterior');

let contadorImg = imgSlider.length;
let imgAtiva = 0;

btnProx.addEventListener('click', proximaImg);
btnAnter.addEventListener('click', anteriorImg);

function proximaImg() {
    imgAtiva++;
    if (imgAtiva >= contadorImg) {
        imgAtiva = 0;
    }
    mostrarSlider();
}

function anteriorImg() {
    imgAtiva--;
    if (imgAtiva < 0) {
        imgAtiva = contadorImg - 1;
    }
    mostrarSlider();
}

function mostrarSlider() {
    let antigaImg = document.querySelector('.slider-container .slider-box.ativo');
    if (antigaImg) {
        antigaImg.classList.remove('ativo');
    }
    imgSlider[imgAtiva].classList.add('ativo');
}

// 🔄 autoplay a cada 5 segundos
setInterval(() => {
    proximaImg();
}, 5000);
