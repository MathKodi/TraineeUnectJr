// Botao voltar topo
const btn = document.getElementById("bt-topo");
btn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
document.addEventListener("scroll", ocultar);
function ocultar() {
  if (window.scrollY > 350) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
}
ocultar();
