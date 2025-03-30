const input = document.getElementById("InputTel"); // Máscara para telefone

input.addEventListener("keyup", phoneFormat);

function phoneFormat(e) {

var v=e.target.value.replace(/\D/g,"");

v=v.replace(/^(\d\d)(\d)/g,"($1)$2"); 

v=v.replace(/(\d{5})(\d)/,"$1-$2");    

e.target.value = v;

}

/////////////////////////////////////////

let inputName 

document.getElementById("form").addEventListener("submit", function(event) { // Responsável por pegar o nome do usuário
  event.preventDefault(); // Evita o recarregamento da página
  let name = document.getElementById("InputName").value;
  inputName = name
  loadPage()
});

function loadPage() {  // Vai fazer a troca de página

    document.getElementById("content").style.display = "none";
    document.getElementById("carrossel").style.display = "block";
    document.getElementById("navbar").style.display = "flex"
    document.getElementById("about").style.display = "flex"
    document.getElementById("grid").style.display = "flex"
    document.getElementById("depoiments").style.display = "flex"
    document.getElementById("countdown").style.display = "flex"
    document.getElementById("footer").style.display = "flex"
      
    iniciarSwiper();
          

      Toastify({
        text: `Bem vindo, ${inputName}`,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
}

///////////////////////////////////////////////////
let swiper;

function iniciarSwiper() {
  if (swiper) swiper.destroy(true, true); // Garante que um novo Swiper não sobreponha o anterior

  swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  swiper = new Swiper(".mySwiper2", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
}

///////////////////////////////////////////////////

// Definição do tempo inicial (em segundos)
let tempoRestante = 60; // 5 minutos (300 segundos)

const timerElement = document.getElementById("timer");

function atualizarTimer() {
    let minutos = Math.floor(tempoRestante / 60);
    let segundos = tempoRestante % 60;

    // Adiciona um zero à esquerda se for menor que 10
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    timerElement.innerText = `${minutos}:${segundos}`;

    // Verifica se o tempo chegou a zero
    if (tempoRestante === 0) {
        clearInterval(contador);
        timerElement.innerText = "Tempo esgotado!";
        timerElement.style.color = "red"; // Muda a cor do texto
        document.getElementById("cta-button").disabled = true; // Desativa o botão
        document.getElementById("cta-button").style.backgroundColor = "gray";
    } else {
        tempoRestante--;
    }
}

// Atualiza o timer a cada segundo
const contador = setInterval(atualizarTimer, 1000);

// Chama a função imediatamente para evitar atraso de 1 segundo
atualizarTimer();

