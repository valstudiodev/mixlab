"use strict"

import { initInputMode } from './inputMode';
import { initDropdowns } from './dropdownMenu';
import { initEffects } from './effects';
import { formUtils } from './formUtils';
import { initUtils } from './initUtils';
import { initAnimations } from './initAnimation'
// ===========================================================================================
// -----------------------------
// ГОЛОВНИЙ ЗАПУСК
// -----------------------------
function initApp() {
   initInputMode()
   initDropdowns()
   initEffects()
   initAnimations()
   // movingElements()
   // formUtils()
   initUtils()
}

if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', initApp);
} else {
   initApp();
}


// ==========================================================================================
// window.addEventListener('load', windowLoad)

// document.addEventListener('click', documentActions)

// window.addEventListener('scroll', scrollHeader)

// let isMobile

// function windowLoad() {
//    isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
//    isMobile.any() ? document.body.setAttribute('data-touch', '') : null

// slidersInit();
// scrollHeader();
// toggleCardContent();
// showList();
// typeSwitcher();
// }
// ==========================================================================================















