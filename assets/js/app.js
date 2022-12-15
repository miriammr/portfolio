var es = document.querySelector(".es");
var en = document.querySelector(".en");
var check = document.querySelector(".check");
check.addEventListener('click', language);

function language() {
  let id = check.checked;
  if (id == true) {
    location.href = "/assets/es/index.html";
    // location.href = "../es/index.html";
    document.getElementById('es').style.color = '#18d26e';
    document.getElementById("en").style.color = "#333";
    // location.href = "../assets/es/index.html";
  } else {
    location.href = "../../index.html";
    document.getElementById("es").style.color = "#333";
    document.getElementById("en").style.color = "#18d26e";
  }
}
