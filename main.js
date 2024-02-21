function validateForm () {
  // your code here
  // 1. Traerme los valores del formulario
  const name = $("#name").val();
  const lastname = $("#lastname").val();


  // 2. Validar el largo del nombre
  if (name.length < 3) {
    alert("El nombre es muy corto");
  }
  
  else if (name.length > 8) {
    alert("El nombre no puede ser mayor a 8");
  }

  // 2. Validar el largo del apellido
  if (lastname.length < 3) {
    alert("El apellido es muy corto");
  }
  
  else if (lastname.length > 8) {
    alert("El apellido no puede ser mayor a 8");
  }
}