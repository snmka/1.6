!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){e.exports=t(1)},function(e,o,t){"use strict";t.r(o);t(2),t(3),t(4),t(5),t(6),t(7)},function(e,o,t){},function(e,o){if(window.innerWidth<768)new Swiper(".swiper",{direction:"horizontal",slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0}})},function(e,o){document.querySelectorAll(".read-more").forEach((function(e){e.addEventListener("click",(function(){e.previousElementSibling.classList.toggle("read-more--show"),e.querySelector(".read-more__img").classList.toggle("read-more__img--rotate"),e.classList.toggle("read-more--open")}))}))},function(e,o){var t=document.querySelector(".burger"),n=document.querySelector(".aside__close-burger"),r=document.querySelector(".aside"),c=document.querySelectorAll(".modal-feedback"),a=document.querySelector(".overlay");t.addEventListener("click",(function(e){r.classList.add("aside--show"),c[1].classList.remove("modal-feedback--show"),c[0].classList.remove("modal-feedback--show"),a.style.display="block",e.stopPropagation()})),n.addEventListener("click",(function(){r.classList.remove("aside--show"),a.style.display="none"})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&(r.classList.remove("aside--show"),a.style.display="none")}))},function(e,o){var t=document.querySelector(".overlay"),n=document.querySelector(".aside"),r=document.querySelectorAll(".modal-feedback");t.addEventListener("click",(function(e){e.defaultPrevented||(r[0].classList.remove("modal-feedback--show"),r[1].classList.remove("modal-feedback--show"),n.classList.remove("aside--show"),t.style.display="none")}))},function(e,o){var t=document.querySelector(".overlay"),n=document.querySelector(".aside"),r=document.querySelectorAll(".js-modal-open"),c=document.querySelectorAll(".js-modal-close");r.forEach((function(e){e.addEventListener("click",(function(o){o.preventDefault();var r=e.getAttribute("data-modal"),c=document.querySelector('.modal-feedback[data-modal="'+r+'"]');c.classList.add("modal-feedback--show"),document.querySelector('.modal-feedback__input[data-modal="'+r+'"]').focus(),n.classList.remove("aside--show"),t.style.display="block",document.addEventListener("keydown",(function(e){"Escape"===e.code&&(c.classList.remove("modal-feedback--show"),t.style.display="none")}))}))})),c.forEach((function(e){e.addEventListener("click",(function(o){o.preventDefault(),e.closest(".modal-feedback").classList.remove("modal-feedback--show"),t.style.display="none"}))}))}]);
//# sourceMappingURL=bundle.js.map