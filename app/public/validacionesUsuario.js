const EmailField = document.querySelector("[name=Email]");
const ContraseñaField = document.querySelector("[name=Contraseña]");
const correoField = document.querySelector("[name=correo]");
const nombreField = document.querySelector("[name=nombre]");
const apellidosField = document.querySelector("[name=apellidos]");
const contraseñaField = document.querySelector("[name=contraseña]");

//validacion de E-mail________________________________________________
const validateEmailFormat = e => {
  const field = e.target;
  const fieldValue = e.target.value;
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
    setErrors("E-mail invalido", field,true);
  } else {
    setErrors("", field, false);
  }
}
// funcion de espacios vacios__________________________________________
const validateEmptyField = (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length === 0) {
      setErrors(message, field,true);
    } else {
      setErrors("", field, false);
    }
  } 
// setero de errores___________________________________________________
const setErrors = (message, field, isError) => {
    if (isError) {
      field.classList.add("invalid");
      console.log(field.nextElementSibling)
      field.nextElementSibling.classList.add("error");
      field.nextElementSibling.innerText = message;
    } else {
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("error");
      field.nextElementSibling.innerText = "";
    }
  }
//invocaciones_________________________________________________________________
if (EmailField) {
    EmailField.addEventListener("input", validateEmailFormat);
}

if (ContraseñaField) {
    ContraseñaField.addEventListener("blur", (e) => validateEmptyField("Escribe una contraseña", e));
}

if (correoField) {
    correoField.addEventListener("input", validateEmailFormat);
}

if (nombreField) {
    nombreField.addEventListener("blur", (e) => validateEmptyField("Escribe tu nombre", e));
}

if (apellidosField) {
    apellidosField.addEventListener("blur", (e) => validateEmptyField("Escribe tu apellido", e));
}

if (contraseñaField) {
    contraseñaField.addEventListener("blur", (e) => validateEmptyField("Escribe una contraseña", e));
}






