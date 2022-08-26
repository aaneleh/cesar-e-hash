document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
})
const deslocamento = 6;
const inputEl = document.getElementById('string');
const velhaEl = document.getElementById('frasevelha');
const novaEl = document.getElementById('frasenova');

function novaletra(letra, deslocamento){
    let codigoAscii = letra.charCodeAt(0);
    let novaletra;
    
    //letras maiusculas
    if(codigoAscii > 64 && codigoAscii < 91){
        novaletra = codigoAscii + deslocamento;
        //caso tenha passado do alfabeto, retorna pro inicio
        if(novaletra > 90) novaletra = 64 + (novaletra - 90)
        
    //letras minusculas
    } else if (codigoAscii > 96 && codigoAscii < 123){
        novaletra = codigoAscii + deslocamento;
        //caso tenha passado do alfabeto, retorna pro inicio
        if(novaletra > 122) novaletra = 96 + (novaletra - 122)

    //caso o caracter não seja uma letra retorna ele mesmo;
    } else novaletra = letra.charCodeAt(0); 
    
    return String.fromCharCode(novaletra);
}

function gerafrase(){
    const frase = inputEl.value;
    let novafrase = "";
    for(var i = 0; i < frase.length; i++){
        novafrase += novaletra(frase.charAt(i), deslocamento);
    }
    velhaEl.innerHTML = frase;
    novaEl.innerHTML = novafrase;
}