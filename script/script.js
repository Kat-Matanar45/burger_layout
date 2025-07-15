const link = document.querySelector('.banner-btn');
const upbutton = document.querySelector('.button-up');
const burgerBtn = document.querySelector('.burger-menu');
const closeModalBtn = document.querySelector('.modal-close');

function clickHandler(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');

    document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
    });
};

function scrollFunction(){
    if ( document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.getElementById('btnUp').className = 'button-up visible';
    } else {
        document.getElementById('btnUp').className = 'button-up hidden';
    }
};

function openModal() {
    document.getElementById("modal").style.top = "0px";
};

function closeModal() {
    document.getElementById("modal").style.top = "-400px";
};

window.onscroll = function(){scrollFunction()};

link.addEventListener('click', clickHandler);
upbutton.addEventListener('click', clickHandler);

burgerBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

