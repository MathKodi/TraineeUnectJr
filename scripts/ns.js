// animação card
function changeColor(element) {
  element.style.backgroundColor = "#5C9DF6"; // Altera a cor ao passar o mouse
}

function restoreColor(element) {
  element.style.backgroundColor = "#2377ED"; // Restaura a cor original ao remover o mouse
}
//animação  do orçamento
function expandAndChangeColor(element) {
  element.style.transform = "scaleX(1.1)"; // Expande a div
  element.style.backgroundColor = "#E8F078"; // Altera a cor ao passar o mouse
}
function restoreSizeAndColor(element) {
  element.style.transform = "scaleX(1)"; // Restaura o tamanho original
  element.style.backgroundColor = "#CFDD19"; // Restaura a cor original ao remover o mouse'
}
