function codificarTexto() {
    const input = document.getElementById("inputText").value;
    const codificado = btoa(input);
    document.getElementById("outputText").value = codificado;
}

function decodificarTexto() {
    const input = document.getElementById("outputText").value;
    try {
        const decodificado = atob(input);
        document.getElementById("outputText").value = decodificado;
    } catch (e) {
        document.getElementById("outputText").value = "Texto inválido para decodificação!";
    }
}