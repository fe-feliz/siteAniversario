const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    msg.textContent = "Que você nunca se esqueça do quanto é querida e de quantas pessoas torcem por você, obrigada por todos os conselhos e risadas e por todas as vezes que você me ajudou mesmo sem perceber, sua amizade foi um verdadeiro presente de Deus para mim, pois no momento em que eu mais me sentia perdida e sozinha você apareceu, eu te amo demais, e espero poder estar sempre junto com você para comemorar seus próximos aniversários e suas conquistas 💞";

    msg.classList.remove("hidden");
    btn.style.display = "none";

});