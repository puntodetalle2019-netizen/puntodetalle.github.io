const div=document.querySelector('.cuadros');
function cambiarcolor(e){
    e.target.style.backgroundColor="blue";
}
div.addEventListener('pointerdown',cambiarcolor);