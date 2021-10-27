let $barra = document.querySelectorAll(".barra")
let $image = document.getElementById("carrusel")
let $h2 = document.querySelector("h2")
let $p = document.querySelector("p")
window.addEventListener("DOMContentLoaded",()=>{
    let progreso = 0;
    let i=0;
    setInterval(()=>{
        progreso = progreso+1;
        let porcentaje = String(progreso);
        porcentaje = porcentaje+"%"
        $barra[i].style.width=porcentaje
        if(i==0){
            $image.classList.remove("carrusel3")
            $image.classList.add("container-carrusel")
            $h2.innerHTML = "Portafolio"
                $h2.style.color="black"
                $p.innerHTML = "Una descripcion mia "
                $p.style.color="black"
        }
        if(progreso == 85){
            i++;
            if(i>=1){
               $image.classList.remove("container-carrusel")
               $image.classList.add("carrusel2")
                $h2.innerHTML = "YouTube"
                $h2.style.color="white"
                $p.innerHTML = "Simulador de YouTube"
                $p.style.color="white"
            }
            if(i>=2){
                $image.classList.remove("carrusel2")
               $image.classList.add("carrusel3")
               $h2.innerHTML = "Bars"
                $p.innerHTML = "Primera pagina"
            }
            $barra[i-1].style.width="0%"
            progreso=8;
            if(i==3){
                i=0;
            }
        }
    },80)
})