const formulario = document.getElementById('formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagem = document.getElementById('mensagem');


formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const mensagem = document.getElementById('mensagem');

  if (campoB.value > campoA.value) {
      mensagem.textContent = 'Formulário válido! O número do campo B é maior que o número do campo A.';
      mensagem.classList.add('valido');
      mensagem.style.display = 'block';
  } else {
      mensagem.textContent = 'Formulário inválido! O número do campo B precisa ser maior que o número do campo A.';
      mensagem.classList.add('invalido');
      mensagem.style.display = 'block';
  }

});