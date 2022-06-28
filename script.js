const input = document.getElementById("text_input");
const mensaje = document.getElementById("text_output");

window.onload(text_input.value = "", text_input.focus())

//Función para encriptar el texto

function btnEncriptar() {
    document.getElementById("text_output").style.display = "block";
    document.querySelector(".btn_copiar").style.display = "block";
    document.querySelector(".main_img").style.display = "none";
    document.querySelector(".main_title").style.display = "none";
    document.querySelector(".main_text").style.display = "none";
    const textoEncriptado = encriptar(input.value);
    mensaje.value = textoEncriptado;
}

function encriptar(StringParaEncriptar) {
    let caracteres = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i = 0; i < caracteres.length; i++) {
        if (StringParaEncriptar.includes(caracteres[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(caracteres[i][0],caracteres[i][1]);
        } 
        text_input.value = "";
        text_input.focus();
    } 
    return StringParaEncriptar;
}

//Función para desencriptar  el texto

function btnDesencriptar() {
    document.getElementById("text_output").style.display = "block";
    document.querySelector(".btn_copiar").style.display = "block";
    document.querySelector(".main_img").style.display = "none";
    document.querySelector(".main_title").style.display = "none";
    document.querySelector(".main_text").style.display = "none";
    const textoEncriptado = desencriptar(input.value);
    mensaje.value = textoEncriptado;
}

function desencriptar(StringParaDesencriptar) {
    let caracteres = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for (let i = 0; i < caracteres.length; i++) {
        if (StringParaDesencriptar.includes(caracteres[i][1])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(caracteres[i][1],caracteres[i][0]);
        }
        text_input.value = "";
        text_input.focus();
    }
    return StringParaDesencriptar;
}

//Funcion para copiar el texto

function copyToClipBoard() {

    let content = document.getElementById("text_output");
    
    content.select();
    document.execCommand('copy');

    alert("¡Texto copiado!");

    text_input.value = "";
    text_input.focus();
}