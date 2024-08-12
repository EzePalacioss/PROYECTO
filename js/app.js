let animado = document.querySelectorAll(".sec-testimony");

function showScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animado.length;i++){
        let heightAnimated = animado[i].offsetTop;
        if(heightAnimated - 400 < scrollTop){
            animado[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', showScroll);