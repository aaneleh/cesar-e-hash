String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
})
const inputEl = document.getElementById('string');
const fraseEl = document.getElementById('mensagem');
const hashEl = document.getElementById('hash');

function gerafrase(){
    const frase = inputEl.value;
    fraseEl.innerHTML = frase;
    hashEl.innerHTML = frase.hashCode();
}
