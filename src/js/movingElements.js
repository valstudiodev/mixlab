"use strict"

export function movementElements() {
   buttonsMovement()
}
// ===========================================================================================
function buttonsMovement() {
   const buttonsWrap = document.querySelector('.buttons-active');
   const menuList = document.querySelector('.menu-header__list');

   if (!buttonsWrap || !menuList) return;

   const oldParent = buttonsWrap.parentElement;
   const anchor = buttonsWrap.nextElementSibling;

   const mq = window.matchMedia('(max-width: 493px)');

   function toggle(mq) {
      if (mq.matches) {
         menuList.insertAdjacentElement('afterend', buttonsWrap);
      } else {
         oldParent.insertBefore(buttonsWrap, anchor);
      }
   }

   mq.addEventListener('change', toggle);
   toggle(mq);
}


