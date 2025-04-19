// mudar o ícone do modo dark-light

const mode = document.getElementById("mode__icon");
const form = document.getElementById("login__form");
const mensagemClara = document.getElementById("mensagem-modo-claro");
const mensagemEscura = document.getElementById("mensagem-modo-escuro");

mode.addEventListener("click", () => {
  if (mode.classList.contains("fa-moon")) {
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");

    // adicionar classe dark
    form.classList.add("dark");

    return;
  }

  mode.classList.remove("fa-sun");
  mode.classList.add("fa-moon");
  form.classList.remove("dark");
});

function notificarModo(){

if(form.classList.contains("dark") && mensagemEscura.classList.contains("oculto")){
  
  mensagemClara.classList.remove("oculto");
  mensagemClara.classList.add("mensagem-modo-claro");
  setTimeout(() => {
    mensagemClara.classList.remove("mensagem-modo-claro");
    mensagemClara.classList.add("oculto");
  }, 800);

}else if(mensagemClara.classList.contains("oculto")){
  
  mensagemEscura.classList.remove("oculto");
  mensagemEscura.classList.add("mensagem-modo-escuro");
  setTimeout(() => {
    mensagemEscura.classList.remove("mensagem-modo-escuro");
    mensagemEscura.classList.add("oculto");
  }, 800);
  
}

}

