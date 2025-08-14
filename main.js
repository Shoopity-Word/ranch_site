/******** Mobile Menu ***********************/
document.getElementById('hamburger').addEventListener('click', function() {
  const menu = document.getElementById('mobileMenu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});
/*********************************************/

/*********** Lightbox stuff *****************/
const modal = document.getElementById('imgModal');
// Return null if there is no element on page
const modalImg = modal ? modal.querySelector('img') : null;
const closeBtn = modal ? modal.querySelector('.closeBtn') : null;

//"Load" the lightbox only if page has the appropriate elements
if (modal && modalImg && closeBtn) {
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
}
/***********************************************************/

//Automatically make any link that's not intneral open in a new tab
document.querySelectorAll('a[href]').forEach(a => {
  const href = a.getAttribute('href');
  if (href && !href.startsWith('#') && !href.startsWith('./') && !href.startsWith(window.location.origin)) {
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');  // security best practice
  }
});