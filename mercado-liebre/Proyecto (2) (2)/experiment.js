const valores_por_modo = [
    {
        "color-fondo": "#270340",
    },
    {
        "color-fondo": "#223430",
    }
]
var valor = 0
const valores = valores_por_modo[modo];
modo = (modo + 1) % modos.length;