const modal = document.getElementById('imgModal');
const modalImg = modal.querySelector('img');
const closeBtn = modal.querySelector('.closeBtn');

document.querySelectorAll('.popup-img').forEach(img => {
    img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;   // Use same image src
    modalImg.alt = img.alt || 'Full Size Image';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImg.src = '';
});

modal.addEventListener('click', e => {
    if (e.target === modal) {
    modal.style.display = 'none';
    modalImg.src = '';
    }
});

window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
    modal.style.display = 'none';
    modalImg.src = '';
    }
});