const div=document.querySelector('.cuadros');
function cambiarcolor(e){
    e.target.style.backgroundColor="blue";

}
function volvercolor(e){
    e.target.style.backgroundColor="yellow";

}


div.addEventListener('pointerdown',cambiarcolor);
div.addEventListener('pointerup',volvercolor);
