// Validadcion de formulario

const form = document.querySelector('form[name = "frm"]');
form.addEventListener("submit", (event) => {
  const fname = form.elements["fname"].value;
  const flastname = form.elements["flastname"].value;
  const fadress = form.elements["fadress"].value;
  const fphone = form.elements["fphone"].value;
  const femail = form.elements["femail"].value;

  if (!fname || !flastname || !fadress || !fphone || !femail) {
    event.preventDefault();
    alert("Por favor. complete todos los campos");
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo valido y existente");
  }
  // CREAR UNA FUNCION QUE VALIDA EL correo
});

function validateEmail(femail) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
  return re.test(String(femail).toLowerCase());
}

//funcion para alternar la vision del menu
function toggleMenu() {
  var overlay = document.getElementById("mobileMenu");
  overlay.style.width = overlay.style.width === "100%" ? "0" : "100%";
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

//ajustar botones
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    menu.classList.remove("menu_opened");
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "none";
  } else {
    openMenuBtn.style.display = "block";
  }
});
