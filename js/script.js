function validaformulario() {
  
  if(document.getElementById("nome").value != "" && 
  document.getElementById("email").value != "" &&
  document.getElementById("telefone").value != "" ){
  alert("Prontinho! Você receberá as novidade por email.")
 }else{
   alert("Por favor, preencha os campos nome, email e telefone!")
 }
}

document.getElementById("botaoenviar").addEventListener("click", validaformulario)