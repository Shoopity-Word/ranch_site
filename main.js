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

/*************Nav menu generation *********************/
document.addEventListener('DOMContentLoaded', () => {
  const hNav = document.querySelector('header .main-nav');
  const fNav = document.querySelector('footer .main-nav');
  const mNav = document.querySelector('header .mobile-menu');

  [hNav, fNav, mNav].forEach(nav => {
    const links = [
      { href: './index.html', text: 'Home' },
      { href: './cabins.html', text: 'Cabins' },
      { href: './rates.html', text: 'Rates and Reservations' },
      { href: './story.html', text: 'Story of the Ranch' },
      { href: './attractions.html', text: 'Area Attractions' },
      { href: './photos.html', text: 'Photos and Directions' }
    ];

    const ul = document.createElement('ul');
    ul.className = 'nav-list';

    links.forEach(link => {
      const li = document.createElement('li');
      
      // Automatically mark current page based on URL
      const linkPath = link.href.replace(/^\.\/+/,'');
      const currentPath = (window.location.pathname === '/') ? 'index.html' : window.location.pathname.slice(1);
      console.log(window.location.pathname)
      if (currentPath.endsWith(linkPath)) {
        li.classList.add('current-page');
      }

      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.text;

      li.appendChild(a);
      ul.appendChild(li);
    });
    nav.appendChild(ul);
  });
});
/******************************************************/