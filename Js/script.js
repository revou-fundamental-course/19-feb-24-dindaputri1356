const menuToggel = document.querySelector('.menu-toggel input');
const nav = document.querySelector('nav ul');

menuToggel.addEventListener('click',function(){
    nav.classList.toggle('slide');
});


