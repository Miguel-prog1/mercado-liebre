button=document.getElementById("fantasma")
button.addEventListener("click", pintaParrafo)

const valores_por_modo = [
    {
        "color-fondo": "#270340",
    },
    {
        "color-fondo": "#223430",
    }
]

var modo = 0;

function pintaParrafo(){
    const valores = valores_por_modo[modo];
    modo = (modo + 1) % modos.length;

    document.querySelector("body").style.backgroundColor =valores["color-fondo"]
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