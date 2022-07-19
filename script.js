function substituir()
{
    let frase = document.getElementById("frase").value
    let busca = document.getElementById("busca").value
    let substitui = document.getElementById("substitui").value

    if(frase == 0 )
    {
        alert("Campo vazio! Digite uma frase")
    }
    else if(busca == 0 || substitui == 0)
    {
        alert("Campo busca ou campo substituir está vazio. Preencha com uma palavra.")
    }
    else
    {
        let resultado = frase.replace(busca, substitui)
        alert(resultado)
    }
}