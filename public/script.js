const modalOverlay = document.querySelector('.modalOverlay');
const pratos = document.querySelectorAll('.pratoR');

for (let pratoR of pratos) {
  pratoR.addEventListener('click', () => {
    const imageId = pratoR.getAttribute('id'); // A cada prato, pegue a id do mesmo

    modalOverlay.classList.add('active');
    modalOverlay.querySelector('img').src = `/public/images/${imageId}.png`;
  });
}

const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', function () {
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('img').src = '';
});
