const pais = document.querySelector("#pais");

const BtnEnviar = document.querySelector("#enviar");
const NumeroPassaporte = document.querySelector("#passaporte");

const DadosInscricao = function(ev){
    ev.preventDefault();
    ev.stopPropagation();

    const passaporte = NumeroPassaporte.value
    let selecionado = pais.options.selectedIndex;
    const regra1 = new RegExp('[A-Za-z]{2}[0-9]{12}');
    const regra2 = new RegExp('[A-Za-z]{2}[0]{12}');
    if(regra1.test(passaporte) && !regra2.test(passaporte) && pais.options[selecionado].value != 0){
        console.log(passaporte)
        console.log(pais.options[selecionado].innerHTML)
    }else{
        return;
    }



}

BtnEnviar.addEventListener('click', DadosInscricao);