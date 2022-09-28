const nombreField = document.querySelector("[name=nombre]");
const marcaField = document.querySelector("[name=marca]");
const descripcionField = document.querySelector("[name=descripcion]");
const componenetesField = document.querySelector("[name=componentes]");
const precioField = document.querySelector("[name=precio]");
const unidadesField = document.querySelector("[name=unidades]");
const imagenField = document.querySelector("[name=img]");



const validateCharacters = (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length === 340) {
      setErrors(message, field,true);
    } else {
      setErrors("", field, false);
    }
  } 
  
const validateEmptyField = (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length === 0) {
      setErrors(message, field,true);
    } else {
      setErrors("", field, false);
    }
  } 

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

//_____________ input type=file _____________________________________________

const file = (e) => {
    const field = e.target;
    const fileExt = e.target.files[0].name.split(".").pop().toLowerCase();
    const allowedExt = ["jpg", "jpeg", "png", "gif"];
    if (!allowedExt.includes(fileExt)) {
      setErrors(`Las extensiones permitidas son:${allowedExt.join(", ")}`, field,true);
    } else {
      setErrors("", field, false);
    }
  };

//_______________________________________________________________________
nombreField.addEventListener("blur", (e) => validateEmptyField("Debes escribir un NOMBRE DE USUARIO", e));

marcaField.addEventListener("blur", (e) => validateEmptyField("Debes escribir una MARCA", e));

descripcionField.addEventListener("blur", (e) => validateEmptyField("Debes escribir una DESCIPCION DEL PRODUCTO", e),
(e) => validateCharacters("Este campo no debe contener mas de 340 caracteres", e));
descripcionField.addEventListener("blur", (e) => validateCharacters("Este campo no debe contener mas de 340 caracteres", e));

componenetesField.addEventListener("blur", (e) => validateEmptyField("Debes escribir los COMPONENTES", e),
(e) => validateCharacters("Este campo no debe contener mas de 340 caracteres", e));

componenetesField.addEventListener("blur",(e) => validateCharacters("Este campo no debe contener mas de 340 caracteres", e));

precioField.addEventListener("blur", (e) => validateEmptyField("Debes escribir un PRECIO", e));
unidadesField.addEventListener("blur", (e) => validateEmptyField("Debes escribir las UNDIDADES DISPONIBLES", e));
imagenField.addEventListener("change", (e) => file(e));
  


