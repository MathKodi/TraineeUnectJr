var button = document.getElementById('btnExpandir');

button.addEventListener('click', function() {
    var card = document.querySelector('.expandido');
    card.classList.toggle('s');
});