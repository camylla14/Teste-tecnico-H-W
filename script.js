const input = document.getElementById("InputTel"); // Máscara para telefone

input.addEventListener("keyup", phoneFormat);

function phoneFormat(e) {

var v=e.target.value.replace(/\D/g,"");

v=v.replace(/^(\d\d)(\d)/g,"($1)$2"); 

v=v.replace(/(\d{5})(\d)/,"$1-$2");    

e.target.value = v;

}

let inputName 

document.getElementById("form").addEventListener("submit", function() { // Responsável por pegar o nome do usuário

  let name = document.getElementById("InputName").value;
  inputName = name
 
});

function loadPage(event, page) {  // Vai fazer a troca de página
    event.preventDefault(); // Evita o recarregamento da página

    fetch(page) // Busca o conteúdo do arquivo
        .then(response => response.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;
            document.getElementById("content").style.display = "block"; 

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
        })
        .catch(error => console.log("Erro ao carregar a página: " + error));
}
