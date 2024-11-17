const btn = document.querySelector("#btn")

const senha = document.querySelector(".senha").value;


function send(){

const senha = document.querySelector(".senha").value;

const preencha = document.querySelector("#preencha")

const sucesso = document.querySelector("#sucesso")


if(senha.length <1){
    
    preencha.style.display = ('inline')

    setTimeout(() => {

        preencha.style.display = ('none')
    
        }, 1000);

    return false;
}

if(senha == "Amarelo e Vermelho"
    ||senha == "amareloevermelho"
    ||senha == "Amareloevermelho"
    ||senha == "AmareloeVermelho"
    ||senha == "amarelo e vermelho"
    ||senha == "Vermelho e Amarelo"
    ||senha == "vermelhoeamarelo"
    ||senha == "Vermelhoeamarelo"
    ||senha == "VermelhoeAmarelo"
){

    sucesso.style.display = ('inline')

    setTimeout(() => {

    window.location.href = "https://eviljujubinha.github.io/1-ano-maju/Home/home.html";

    }, 500);
    
} else{

    negado.style.display = ('inline')

};


};