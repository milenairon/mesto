(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}const n=function(){function t(e,n,r,o,i,u){var a=e.name,l=e.link,c=e._id,s=e.likes,f=e.isLiked,p=e.owner;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=a,this._link=l,this._id=c,this._likes=s,this._likesLength=s.length,this._isLiked=f,this._ownerId=p._id,this._cardTemplate=n,this._handleCardClick=r,this._handleCardDelete=o,this._handleLikeClick=i,this._myId=u}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".element__card").cloneNode(!0)}},{key:"_setData",value:function(){this._elementImageCard=this._newCard.querySelector(".element__image"),this._newCard.querySelector(".element__title").textContent=this._name,this._elementImageCard.src=this._link,this._elementImageCard.alt=this._name,this._urn=this._newCard.querySelector(".element__delete"),this._likeButton=this._newCard.querySelector(".element__image-like"),this._counter=this._newCard.querySelector(".element__like-lot")}},{key:"deleteCard",value:function(){this._newCard.remove(),this._newCard=null}},{key:"isLiked",value:function(){return this._likeButton.classList.contains("element__image-like_active")}},{key:"toggleLike",value:function(t){this._likeButton.classList.toggle("element__image-like_active"),this._counter.textContent=t.length}},{key:"_setListener",value:function(){var t=this;this._urn.addEventListener("click",(function(){t._handleCardDelete(t._id)})),this._elementImageCard.addEventListener("click",(function(){t._handleCardClick({name:t._name,link:t._link})})),this._likeButton.addEventListener("click",(function(){t._handleLikeClick(t.isLiked(),t._id)}))}},{key:"_checkLikeStatus",value:function(){var t=this;this._likes.forEach((function(e){e._id===t._myId&&t._likeButton.classList.add("element__image-like_active")})),this._counter.textContent=this._likesLength}},{key:"_deleteLogoUrn",value:function(){this._ownerId!==this._myId&&(this._urn.style.display="none")}},{key:"getView",value:function(){return this._newCard=this._getTemplate(),this._setData(),this._deleteLogoUrn(),this._setListener(),this._checkLikeStatus(),this._newCard}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){var n=t._renderer(e);t.addItem(n)}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._button=this._formElement.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.name,"-input-error-message"));t.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.name,"-input-error-message"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"addButonInactive",value:function(){this._button.classList.add(this._inactiveButtonClass),this._button.setAttribute("disabled","true")}},{key:"removeButonInactive",value:function(){this._button.classList.remove(this._inactiveButtonClass),this._button.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.addButonInactive():this.removeButonInactive()}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const c=l;function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handlePopupClose",value:function(t){(t.currentTarget===t.target||t.target.classList.contains("popup__close-icon"))&&this.close()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._handlePopupClose.bind(this))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},d.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(r);if(o){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImageItem=e._popup.querySelector(".popup__image-item"),e._popupTitleImage=e._popup.querySelector(".popup__title-image"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;d(m(u.prototype),"open",this).call(this),this._popupTitleImage.textContent=e,this._popupImageItem.src=n,this._popupImageItem.alt=e}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var r,o=n.callbackSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._form=r._popup.querySelector(".popup__form"),r._inputs=Array.from(r._form.querySelectorAll(".popup__input")),r._callbackSubmitForm=o,r._popupBtn=r._popup.querySelector(t.submitButtonSelector),r}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputs.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setInputValues",value:function(t){this._inputs.forEach((function(e){e.value=t[e.name]}))}},{key:"close",value:function(){S(w(u.prototype),"close",this).call(this),this._form.reset()}},{key:"changeValueButtonAtBoot",value:function(t){this._popupBtn.textContent=t}},{key:"setEventListeners",value:function(){var t=this;S(w(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._callbackSubmitForm(t._getInputValues())}))}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var O=function(){function t(e){var n=e.profileTitleSelector,r=e.profileSubTitleSelector,o=e.profileImageAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileTitle=document.querySelector(n),this._profileSubTitle=document.querySelector(r),this._imageAvatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{forename:this._profileTitle.textContent.trim(),job:this._profileSubTitle.textContent.trim(),id:this._id}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t._id;this._profileTitle.textContent=e,this._profileSubTitle.textContent=n,this._id=o,this._imageAvatar.src=r}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._popupBtn=n._popup.querySelector(t.submitButtonSelector),n}return e=u,(n=[{key:"open",value:function(t){B(T(u.prototype),"open",this).call(this),this._handleClickBtn=t}},{key:"setEventListeners",value:function(){var t=this;B(T(u.prototype),"setEventListeners",this).call(this),this._popupBtn.addEventListener("click",(function(){t._handleClickBtn()}))}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var V=function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var e,n;return e=t,(n=[{key:"_getRequest",value:function(t,e){return fetch(t,e).then((function(t){return t.ok?t.json():new Error("Что-то пошло не так")}))}},{key:"getProfile",value:function(){return this._getRequest("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers})}},{key:"editProfile",value:function(t,e){return this._getRequest("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})})}},{key:"getAllCards",value:function(){return this._getRequest("".concat(this._url,"/cards"),{method:"GET",headers:this._headers})}},{key:"createnewCard",value:function(t){return this._getRequest("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)})}},{key:"deleteCard",value:function(t){return this._getRequest("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"changeLike",value:function(t,e){var n=t?"DELETE":"PUT";return this._getRequest("".concat(this._url,"/cards/").concat(e,"/likes"),{method:n,headers:this._headers})}},{key:"updateAvatar",value:function(t){return this._getRequest("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)})}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),x=document.querySelector(".pages"),D=document.querySelector(".profile"),U=D.querySelector(".profile__button-info"),F=D.querySelector(".profile__button-add"),N=D.querySelector(".profile__button-avatar"),J=x.querySelector(".popup__form_type_edit"),G=x.querySelector(".popup_place_add").querySelector(".popup__form_type_add"),H={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error-message_visible"},z=x.querySelector(".popup_place_update-avatar").querySelector(".popup__form_type_update-avatar");U.addEventListener("click",(function(){$.setInputValues(nt.getUserInfo()),$.open(),Q.addButonInactive()})),F.addEventListener("click",(function(){tt.open(),W.addButonInactive()}));var M=new _(".popup_place_image");M.setEventListeners();var K=new q(H,".popup_place_card-delete");K.setEventListeners(),N.addEventListener("click",(function(){et.open(),X.addButonInactive()}));var Q=new c(H,J),W=new c(H,G),X=new c(H,z);Q.enableValidation(),W.enableValidation(),X.enableValidation();var Y=new i((function(t){Y.addItem(Z(t))}),".element");function Z(t){var e=new n(t,"#element-template",(function(){M.open({name:t.name,link:t.link})}),(function(t){K.open((function(){rt.deleteCard(t).then((function(){e.deleteCard(),K.close()})).catch((function(t){console.log(t)}))}))}),(function(t,n){rt.changeLike(t,n).then((function(t){e.toggleLike(t.likes)})).catch((function(t){console.log(t)}))}),nt.getUserInfo().id);return e.getView()}var $=new E(H,".popup_place_edit",{callbackSubmitForm:function(t){$.changeValueButtonAtBoot("Сохранение..."),rt.editProfile(t.forename,t.job).then((function(t){$.changeValueButtonAtBoot("Данные сохранены!"),nt.setUserInfo(t),$.close()})).catch((function(t){console.log(t)})).finally((function(){$.changeValueButtonAtBoot("Сохранить")}))}});$.setEventListeners();var tt=new E(H,".popup_place_add",{callbackSubmitForm:function(t){tt.changeValueButtonAtBoot("Создание..."),rt.createnewCard({name:t.name,link:t.link}).then((function(t){tt.changeValueButtonAtBoot("Карточка создалась!");var e=Z({name:t.name,link:t.link,_id:t._id,likes:t.likes,isLiked:!1,owner:t.owner});Y.addItem(e),tt.close()})).catch((function(t){console.log(t)})).finally((function(){tt.changeValueButtonAtBoot("Создать")}))}});tt.setEventListeners();var et=new E(H,".popup_place_update-avatar",{callbackSubmitForm:function(t){et.changeValueButtonAtBoot("Сохранение..."),rt.updateAvatar({avatar:t.link}).then((function(t){et.changeValueButtonAtBoot("Данные сохранены!"),nt.setUserInfo(t),et.close()})).catch((function(t){console.log(t)})).finally((function(){et.changeValueButtonAtBoot("Сохранить")}))}});et.setEventListeners();var nt=new O({profileTitleSelector:".profile__title",profileSubTitleSelector:".profile__subtitle",profileImageAvatarSelector:".profile__image-avatar"}),rt=new V({url:"https://mesto.nomoreparties.co/v1/cohort-76",headers:{authorization:"aeacf97e-5e0d-4830-af6d-c3921dcf63db","Content-Type":"application/json"}});rt.getProfile().then((function(t){nt.setUserInfo(t)})).then((function(){rt.getAllCards().then((function(t){var e=nt.getUserInfo().id;t.reverse().forEach((function(t){var n=t.likes.some((function(t){return t._id===e})),r=Z({name:t.name,link:t.link,_id:t._id,likes:t.likes,isLiked:n,owner:t.owner});Y.addItem(r)}))}))}))})();