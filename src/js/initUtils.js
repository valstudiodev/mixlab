"use strict"

export function initUtils() {
   slidersInit()
   setupAccordions()
   showList()
}

// ===========================================================================================
// -----------------------------
// SLIDER
// -----------------------------
function slidersInit() {
   if (document.querySelector('.slider-review')) {
      const swiper = new Swiper('.slider-review', {
         loop: true,
         // slidesPerView: 1.1,
         // spaceBetween: 30,

         breakpoints: {
            320: {
               slidesPerView: 1.1,
               spaceBetween: 10,
            },
            630: {
               slidesPerView: 1.1,
               spaceBetween: 15,
               centteredSlides: true,
            },
            930: {
               slidesPerView: 1.1,
               spaceBetween: 25,
               centteredSlides: false,
            },
            1440: {
               slidesPerView: 1.1,
               spaceBetween: 30,
            },
         },
      });
   }
}

// ===========================================================================================
// -----------------------------
// filter
// -----------------------------
// document.addEventListener('DOMContentLoaded', () => {
//    const menuButtons = document.querySelectorAll('[data-filter]');
//    const galleryItems = document.querySelectorAll('[data-group]');

//    function filterItems(category) {
//       galleryItems.forEach(item => {
//          item.style.display = item.dataset.group === category ? 'grid' : 'none';
//       });
//    }

//    menuButtons.forEach((btn, index) => {
//       btn.addEventListener('click', () => {
//          menuButtons.forEach(b => b.classList.remove('active'));
//          btn.classList.add('active');
//          filterItems(btn.dataset.filter);
//       });

//       if (index === 0) {
//          btn.classList.add('active');
//          filterItems(btn.dataset.filter);
//       }
//    });
// });


// ===========================================================================================
// -----------------------------
// active-link
// -----------------------------
// const links = document.querySelectorAll('.menu-header__link')
// const current = window.location.pathname

// links.forEach(link => {
//    link.addEventListener('active', () => {
//       if (link.getAttribute('href') === current) {
//          link.classList.toggle('active-page')
//       }
//       console.log("works");
//    })
// })

// ===========================================================================================
// -----------------------------
// accordions
// -----------------------------
const accordions = document.querySelectorAll('[data-accordion]');
const mq = window.matchMedia('(max-width: 444px)');

function setupAccordions() {
   accordions.forEach(item => {
      const btn = item.querySelector('[data-accordion-btn]');
      const body = item.querySelector('[data-accordion-body]');
      if (!btn || !body) return;

      if (!mq.matches) {
         item.classList.remove('active-btn');
         body.style.height = '';
         return;
      }

      body.style.height = item.classList.contains('active-btn')
         ? body.scrollHeight + 'px'
         : '0px';

      btn.onclick = () => {
         const isOpen = item.classList.contains('active-btn');

         if (isOpen) {
            body.style.height = body.scrollHeight + 'px';
            requestAnimationFrame(() => body.style.height = '0px');
            item.classList.remove('active-btn');
         } else {
            item.classList.add('active-btn');
            body.style.height = body.scrollHeight + 'px';

            body.addEventListener('transitionend', () => {
               body.style.height = 'auto';
            }, { once: true });
         }
      };
   });
}

mq.addEventListener('change', setupAccordions);

// ===========================================================================================
// -----------------------------
// icon-more
// -----------------------------
function showList() {
   const footer = document.querySelector('.body-footer');
   if (!footer) return;

   footer.addEventListener('click', (e) => {
      const icon = e.target.closest('.icon-more');
      if (!icon) return;

      icon.classList.toggle('icon-active');
   });
}
