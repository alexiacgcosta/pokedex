// Obtenha o elemento do modal
let modal = document.getElementById("myModal");

// Função para abrir o modal
function modalDetails() {  
  modal.style.display = "block";
}

// Obtenha o elemento de fechar o modal
let span = document.getElementById("close");

// Ação ao clicar no elemento para fechar o modal
span.onclick = function() {
  modal.style.display = "none";
  removerID();
}

// Ação ao clicar fora do modal para fechá-lo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    removerID();
  }
}



