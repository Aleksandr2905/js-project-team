var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("da7oM");o("bUb57");var a=o("31u3U"),i=(n=o("da7oM"),o("34HY9")),c=o("2H64r");o("kV37o"),o("fb9GJ");var l=o("iQIUW");o("aaQnt");const d=document.querySelector(".modal-order-close"),s=document.querySelector(".modal-order-backdrop"),u=document.querySelector(".header-busket-order"),m=document.querySelector(".modal-order-form"),y=document.querySelector("#input_name"),f=document.querySelector("#input_email"),v=document.querySelector("#input_phone"),p=document.querySelector(".user-message"),b=document.querySelector(".modal-order-loader"),g=document.querySelector(".modal-order-btn"),L=document.querySelector("body");function k(e){s.classList.remove("modal-order-backdrop-active"),L.classList.remove("modal-hidden-bcg"),d.removeEventListener("click",k),s.removeEventListener("click",h),window.removeEventListener("keydown",w)}function h(e){e.target===s&&k()}function w(e){"Escape"===e.key&&k()}u.addEventListener("click",(function(e){L.classList.add("modal-hidden-bcg"),s.classList.add("modal-order-backdrop-active"),d.addEventListener("click",k),s.addEventListener("click",h),window.addEventListener("keydown",w)})),m.addEventListener("submit",(function(e){e.preventDefault();const t=new(0,n.goitGlobalAPI),r={name:y.value,phone:v.value,email:f.value,comment:p.value};b.style.display="block",g.classList.add("non-active-btn"),setTimeout((()=>{!async function(e,t){try{await e.createOrder(t);l.Notify.success("We got your opinion!"),s.classList.remove("modal-order-backdrop-active")}catch(e){console.log("Error",e),l.Notify.failure("Oops, something wrong"),m.reset(),s.classList.remove("modal-order-backdrop-active")}}(t,r),b.style.display="none",g.classList.remove("non-active-btn")}),2e3)}));const q=document.querySelector(".favorites-list"),S=document.querySelector(".js-favorites-wrapper"),E=document.querySelector(".js-bloked");let T,A=new(0,n.goitGlobalAPI)(288);!async function(){try{let e=a.default.load("favorites-recipes"),t=null;if(Array.isArray(e)){const r=e.map((e=>A.getRecipesById(e)));t=await Promise.all(r)}else t=[],E.classList.remove("is-hidden");const r=function(e){let t=["All categories"];if(!(Array.isArray(e)&&e.length>0))return"";t=t.concat(e.map((e=>e.category)).filter(((e,t,r)=>r.indexOf(e)===t)));return t.map((e=>`\n        <li>\n        <button class="favorites-btn" type="button" data-category="${e}">${e}</button>\n        </li>`)).join("")}(t);if(S.innerHTML=r,q.innerHTML=(0,i.markupGalleryCard)(t),""===r)return void l.Notify.failure("There is no such recipe in the favorites");E.classList.add("is-hidden"),(0,i.checkFavorites)(".favorites-list"),S.addEventListener("click",(e=>{if("BUTTON"!==e.target.nodeName)return;let r=e.target;if("All categories"!==r.dataset.category){let e=t.filter((e=>e.category===r.dataset.category));q.innerHTML=(0,i.markupGalleryCard)(e)}else q.innerHTML=(0,i.markupGalleryCard)(t);(0,i.checkFavorites)(".favorites-list")}))}catch(e){console.log(e)}T=document.querySelector(".favorites-list"),T.addEventListener("click",c.openModalGaleryRecipesPre)}();
//# sourceMappingURL=favorites.2092273a.js.map