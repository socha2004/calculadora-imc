let form = document.querySelector(".form")

function recebeEventoSubmit(evento) {
    evento.preventDefault();
    const peso = form.querySelector(".campo-peso").value;
    const altura = form.querySelector(".campo-altura").value;

    if (peso > 0 && altura > 0) {
       let imc = peso/(altura*altura);

       if(imc < 18.5){
        document.querySelector(".resultado-imc").innerHTML = `<p class="valor-correto">O seu IMC é ${imc.toFixed(2)} (Abaixo do peso).</p>`;
       }else if(imc >= 18.5 && imc <= 24.9){
        document.querySelector(".resultado-imc").innerHTML = `<p class="valor-correto">O seu IMC é ${imc.toFixed(2)} (Peso normal).</p>`;
       }else if(imc >= 25 && imc <= 29.9){
        document.querySelector(".resultado-imc").innerHTML = `<p class="valor-correto">O seu IMC é ${imc.toFixed(2)} (Sobrepeso).</p>`;
       }else if(imc >= 30 && imc <= 34.9){
        document.querySelector(".resultado-imc").innerHTML = `<p class="valor-correto">O seu IMC é ${imc.toFixed(2)} (Obesidade I).</p>`;
       }else if(imc >= 35 && 39.9){
        document.querySelector(".resultado-imc").innerHTML = `<p class="valor-correto">O seu IMC é ${imc.toFixed(2)} (Obesidade II).</p>`;
       }else if(imc > 40){
        document.querySelector(".resultado-imc").innerHTML = `<p class="valor-correto">O seu IMC é ${imc.toFixed(2)} (Obesidade III).</p>`;
       }
    }else if(peso == "" || altura == ""){
        document.querySelector(".resultado-imc").innerHTML = '<p class="valor-aviso">Os dois campos precisam ser preenchidos</p>';
    }
    else{
        document.querySelector(".resultado-imc").innerHTML = '<p class="valor-invalido">Os valores inseridos são inválidos, por favor revise-os.</p>';
    }
}
form.addEventListener("submit", recebeEventoSubmit);
