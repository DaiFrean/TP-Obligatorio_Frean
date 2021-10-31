window.onload = iniciar;

function iniciar() {
  document.getElementById('send').addEventListener('click', validate, false);
}

function valida_nombre() {
  var elemento = document.getElementById('nombre');
  if (elemento.value == '') {
    alert('El campo nombre no puede estar vacío');
    return false;
  }
  return true;
}

function valida_telefono() {
  var elemento = document.getElementById('tel');
  if (isNaN(elemento.value)){
    alert('El campo debe ser numérico');
    return false;
  }
  return true;
}



function valida_email() {
  var campo_check = document.getElementById('exampleFormControlInput1');
  if(!campo_check.checked){
    alert('Debe introducir su Email');
    return false;
  }
  return true;
}

function valida_mensaje() {
  var campo_check = document.getElementById('exampleFormControlTextarea1');
  if(!campo_check.checked){
    return false;
  }
  return true;
}

function validate(e) {
  if (valida_nombre() && valida_telefono() && valida_email() && valida_mensaje() &&confirm('Pulse aceptar si desea enviar el Mensaje')){
    return true;
  }
  return false;
}