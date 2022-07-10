'use strict';
let modalButton = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal.hidden');
const overlay = document.querySelector('.overlay.hidden');
const closeBtn = document.querySelector('.close-modal');
console.log(modalButton);

const modalShow = function () {
    console.log(this.textContent);
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
}
modalButton.forEach((btn) => { btn.addEventListener('click', modalShow) });

//X button click to close modal

const closeModal = function () {
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
}
closeBtn.addEventListener('click', closeModal);

//Overlay click to close modal

overlay.addEventListener('click', closeModal);