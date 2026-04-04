
//LINKS DOS CARDS

document.querySelector('#projeto1').addEventListener('click', function() {
  window.open('https://karen-s-boutique.vercel.app/index.html', '_blank');
});

document.querySelector('#projeto2').addEventListener('click', function() {
  window.open('https://tabela-flash.vercel.app', '_blank');
});

document.querySelector('#projeto3').addEventListener('click', function() {
  window.open('https://animaverso-three.vercel.app', '_blank');
});


//EFEITO DO CURSOR
const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    glow.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
});

// Efeito quando clica
document.addEventListener('mousedown', () => {
    glow.style.transform += ' scale(0.8)';
});

document.addEventListener('mouseup', () => {
    glow.style.transform = glow.style.transform.replace(' scale(0.8)', '');
});

