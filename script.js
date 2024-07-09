function encrypt() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText) {
        document.getElementById('outputMessage').innerText = 'Ningún mensaje fue encontrado';
        return;
    }

    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('outputMessage').innerText = encryptedText;
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText) {
        document.getElementById('outputMessage').innerText = 'Ningún mensaje fue encontrado';
        return;
    }

    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('outputMessage').innerText = decryptedText;
}
