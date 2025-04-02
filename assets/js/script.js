// mudar o ícone do modo dark-light

const mode = document.getElementById("mode__icon");
const form = document.getElementById("login__form");

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
