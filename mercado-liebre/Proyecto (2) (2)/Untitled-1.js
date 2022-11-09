button=document.getElementById("fantasma")
button.addEventListener("click", pintaParrafo)
let pulsador = 1


function pintaParrafo(){
    
    if ( pulsador === 1 )
    {
        pulsador = 2
        if(pulsador === 2){
            document.querySelector("body").style.backgroundColor ="#3d2068"
            document.querySelector("button").style.backgroundColor ="black"
            button.style.backgroundColor = "black"
            const resultado = document.querySelectorAll("h2 , label")
            resultado.forEach(elem => {
                elem.style.fontFamily = "Creepster";
            });
            const placeHolder =document.querySelectorAll("input")
            placeHolder.forEach(elem => {
            elem.style.fontFamily = "Creepster";
            });
        }
    }
    else
    {
        pulsador = 1
        if (pulsador == 1 ){    
            document.querySelector("body").style.backgroundColor ="#fbbc02"
            document.querySelector("button").style.backgroundColor ="#3d2068"
            button.style.backgroundColor = "#fbbc02"
            const resultado = document.querySelectorAll("h2 , label")
            resultado.forEach(elem => {
                elem.style.fontFamily = "sans-serif";
            });
            const placeHolder =document.querySelectorAll("input")
            placeHolder.forEach(elem => {
            elem.style.fontFamily = "sans-serif";
            });
        }
    }


}