const toogleIcon = document.getElementById('menu');
const navList = document.getElementById('naviList');

function Toogle(){
    toogleIcon.addEventListener('click', function(){
        navList.classList.toggle('active');
    })
}