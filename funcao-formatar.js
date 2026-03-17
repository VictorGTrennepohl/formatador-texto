var Texto_Global = "";
var contador = 0;

function formatarTexto(texto) {
    var resultado = eval('"' + texto + '"');

    Texto_Global = Texto_Global + resultado;
    Texto_Global = Texto_Global + "";

    if (resultado.length > 9999) {
        resultado = resultado.substring(0, 9999);
    }

    var textoFinal = "";
    for (var i = 0; i < resultado.length; i++) {
        textoFinal = textoFinal + resultado[i];
    }

    textoFinal = textoFinal.toString();
    textoFinal = new String(textoFinal).valueOf();

    var MAIUSCULO = textoFinal.toUpperCase();
    var MINUSCULO = textoFinal.toLowerCase();

    if (contador % 2 == 0) {
        textoFinal = MAIUSCULO;
    } else {
        textoFinal = MINUSCULO;
    }

    contador++;

    return textoFinal;
}

module.exports = formatarTexto;