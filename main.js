(()=>{"use strict";var e=function(e){e.key&&"escape"===e.key.toLowerCase()&&r(document.querySelector(".popup_opened"))},t=function(e){e.target===e.currentTarget&&r(e.currentTarget)},n=function(n){n.classList.add("popup_opened"),document.addEventListener("keydown",e),n.addEventListener("mousedown",t)},r=function(n){n.classList.remove("popup_opened"),document.removeEventListener("keydown",e),n.removeEventListener("mousedown",t)},o={baseUrl:"https://mesto.nomoreparties.co/v1/plus-cohort-24",headers:{authorization:"ed711b57-be95-4829-8ba4-6b07c1de44be","Content-Type":"application/json"}},c=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},i=function(e){var t=e.avatar?"/users/me/avatar":"/users/me";return fetch(o.baseUrl.concat(t),{method:"PATCH",body:JSON.stringify(e),headers:o.headers}).then((function(e){return c(e)}))},u=document.querySelector(".profile__edit-button"),a=document.querySelector(".popup__profile-close-button"),l=document.querySelector(".place__add-button"),s=document.querySelector(".popup__place-close-button"),d=document.querySelector(".popup__picture-close-button"),p=document.querySelector(".profile__avatar-container"),f=document.querySelector(".popup__avatar-close-button"),_=document.querySelector(".popup__save-button"),m=document.forms.form_profile,v=document.forms.form_place,y=document.forms.form_avatar,h=document.querySelector(".popup__input_name"),b=document.querySelector(".popup__input_description"),S=document.querySelector(".popup__input_avatar"),g=document.querySelector(".popup__input_place"),L=document.querySelector(".popup__input_link"),q=document.querySelector(".profile__name"),k=document.querySelector(".profile__description"),C=document.querySelector(".profile__avatar"),E=document.querySelector(".profile__info"),x=document.querySelector(".popup__picture-img"),A=document.querySelector(".popup__picture-caption"),U=document.querySelector(".popup_place"),O=document.querySelector(".popup_picture"),w=document.querySelector(".popup_profile"),T=document.querySelector(".popup_avatar"),j=document.querySelector(".card").content,P=document.querySelector(".element-grid__list"),D=function(e){var t=j.querySelector(".element-grid__element").cloneNode(!0),r=t.querySelector(".element-grid__image"),i=t.querySelector(".element-grid__caption"),u=t.querySelector(".element-grid__like-button"),a=t.querySelector(".element-grid__delete-button"),l=t.querySelector(".element-grid__like-number");return e.likes.length&&e.likes.some((function(e){return e._id===E.id}))&&u.classList.add("element-grid__like-button_liked"),u.addEventListener("click",(function(e){var t,n=e.target.closest(".element-grid__element").id;e.target.classList.contains("element-grid__like-button_liked")?(t=n,fetch(o.baseUrl.concat("/cards/likes/").concat(t),{method:"DELETE",headers:o.headers}).then((function(e){return c(e)}))).then((function(t){e.target.classList.toggle("element-grid__like-button_liked"),l.textContent=t.likes.length})).catch((function(e){console.error("removeLike err:",e)})):function(e){return fetch(o.baseUrl.concat("/cards/likes/").concat(e),{method:"PUT",headers:o.headers}).then((function(e){return c(e)}))}(n).then((function(t){e.target.classList.toggle("element-grid__like-button_liked"),l.textContent=t.likes.length})).catch((function(e){console.error("setLike err:",e)}))})),e.owner._id===E.id?a.addEventListener("click",(function(e){var t;(t=e.target.closest(".element-grid__element").id,fetch(o.baseUrl.concat("/cards/").concat(t),{method:"DELETE",headers:o.headers}).then((function(e){return c(e)}))).then((function(t){e.target.closest(".element-grid__element").remove()})).catch((function(e){console.error("deleteCard err:",e)}))})):a.style.display="none",r.addEventListener("click",(function(t){x.setAttribute("src",e.link),x.setAttribute("alt",e.name),A.textContent=e.name,n(O)})),r.setAttribute("src",e.link),r.setAttribute("alt",e.name),i.textContent=e.name,l.textContent=e.likes.length,t.id=e._id,t};var I=function(e,t,n,r){!function(e,t){return Array.from(e.querySelectorAll(t)).some((function(e){return!e.validity.valid}))}(e,n)?(t.classList.remove(r),t.removeAttribute("disabled")):(t.classList.add(r),t.setAttribute("disabled",!0))};u.addEventListener("click",(function(){h.value=q.textContent,b.value=k.textContent;var e=w.querySelectorAll(".popup__input");Array.from(e).forEach((function(e){e.classList.remove("popup__input_error"),e.classList.remove("form__input_type_error")}));var t=w.querySelectorAll(".form__input-error");Array.from(t).forEach((function(e){e.textContent="",e.classList.remove("form__input-error_active")})),n(w)})),a.addEventListener("click",(function(){r(w)})),s.addEventListener("click",(function(){r(U)})),d.addEventListener("click",(function(){r(O)})),l.addEventListener("click",(function(){n(U)})),p.addEventListener("click",(function(){n(T)})),f.addEventListener("click",(function(){r(T)})),window.addEventListener("load",(function(){J()})),m.addEventListener("submit",(function(e){e.preventDefault(),_.textContent="Сохранение...";var t={};t.name=h.value,t.about=b.value,i(t).then((function(e){q.textContent=e.name,k.textContent=e.about,r(w)})).catch((function(e){console.error("updateUserInfo err:",e)})).finally((function(e){_.textContent="Сохранить"}))})),v.addEventListener("submit",(function(e){e.preventDefault(),_.textContent="Сохранение...";var t={};t.name=g.value,t.link=L.value,function(e){return fetch(o.baseUrl.concat("/cards"),{method:"POST",body:JSON.stringify(e),headers:o.headers}).then((function(e){return c(e)}))}(t).then((function(e){P.prepend(D(e)),r(U)})).catch((function(e){console.error("postCard err:",e)})).finally((function(t){_.classList.add("popup__save-button_disabled"),_.setAttribute("disabled",!0),_.textContent="Сохранить",e.target.reset()}))})),y.addEventListener("submit",(function(e){e.preventDefault(),_.textContent="Сохранение...";var t={};t.avatar=S.value,i(t).then((function(e){C.src=e.avatar,r(T)})).catch((function(e){console.error("updateUserInfo err:",e)})).finally((function(t){_.classList.add("popup__save-button_disabled"),_.setAttribute("disabled",!0),_.textContent="Сохранить",e.target.reset()}))}));var B,M,N,J=function(){fetch(o.baseUrl.concat("/users/me"),{headers:o.headers}).then((function(e){return c(e)})).then((function(e){q.textContent=e.name,k.textContent=e.about,C.src=e.avatar,E.id=e._id,fetch(o.baseUrl.concat("/cards"),{headers:o.headers}).then((function(e){return c(e)})).then((function(e){e.forEach((function(e){P.append(D(e))}))})).catch((function(e){console.error("getInitialCards err:",e)}))})).catch((function(e){console.error("getUserInfo err:",e)}))};M=(B={formSelector:".popup__fieldset",inputSelector:".popup__input",submitButtonSelector:".form__submit",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_error",errorClass:"form__input-error_active"}).formSelector,N=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(B,["formSelector"]),Array.from(document.querySelectorAll(M)).forEach((function(e){!function(e,t){var n=t.inputSelector,r=t.submitButtonSelector,o=t.inactiveButtonClass,c=t.inputErrorClass,i=t.errorClass,u=Array.from(e.querySelectorAll(n)),a=e.querySelector(r);I(e,a,n,o),u.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n,r){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n,r){if(t){var o=e.querySelector(".".concat(t.id,"-input-error"));t.classList.remove(n),o&&(o.classList.remove(r),o.textContent="")}}(e,t,n,r):function(e,t,n,r,o){if(t){t.classList.add(r);var c=e.querySelector(".".concat(t.id,"-input-error"));c&&(c.classList.add(o),c.textContent=n)}}(e,t,t.validationMessage,n,r)}(e,t,c,i),I(e,a,n,o)}))}))}(e,N)}))})();