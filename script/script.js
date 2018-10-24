let rotateButton = document.getElementById('rotateBtn');
let body = document.querySelector('body');
rotateButton.addEventListener('dblclick', () =>{
body.classList.add('rotate');
})