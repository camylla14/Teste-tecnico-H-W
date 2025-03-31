const input = document.getElementById("InputTel"); // Máscara para o input de telefone

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
  event.preventDefault();
  let name = document.getElementById("InputName").value;
  inputName = name;
  loadPage();
});

function loadPage() {  // Vai fazer a troca de página

  document.getElementById("content").style.display = "none";
  document.getElementById("header").style.display = "flex";
  document.getElementById("hero-section").style.display = "flex";
  document.getElementById("about-section").style.display = "block";
  document.getElementById("grid").style.display = "flex";
  document.getElementById("testimonials").style.display = "block";
  document.getElementById("countdown").style.display = "flex";
  document.getElementById("footer").style.display = "flex";
      
  initSwiper();
          
  Toastify({
    text: `Bem vindo, ${inputName}`,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "center", 
    stopOnFocus: true, 
    style: {
              background: "#686867",
              fontWeight: "600" 
            },
              onClick: function(){} 
              }).showToast();
}

/////////////////////////////////////////////////// Inicializar o carrossel de imagens
let swiper;

function initSwiper() {
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

/////////////////////////////////////////////////// Timer Countdown (Último CTA)

// Definição do tempo inicial (em segundos)
let timeRemaining = 60; // 1 minuto (60 segundos)

const timerElement = document.getElementById("timer");

function updateTimer() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;

    // Adiciona um zero à esquerda se for menor que 10
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerElement.innerText = `${minutes}:${seconds}`;

    // Verifica se o tempo chegou a zero
    if (timeRemaining === 0) {
        clearInterval(counter);
        timerElement.innerText = "00:00";
        timerElement.style.color = "red"; // Muda a cor do texto
        document.getElementById("cta-button").disabled = true; // Desativa o botão
        document.getElementById("cta-button").style.backgroundColor = "gray";
    } else {
      timeRemaining--;
    }
}

// Atualiza o timer a cada segundo
const counter = setInterval(updateTimer, 1000);

// Chama a função imediatamente para evitar atraso de 1 segundo
updateTimer();

