!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,y=Math.min,m=function(){return s.Date.now()};function g(e,t,n){var r,i,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,f=setTimeout(j,t),d?g(e):a}function S(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function j(){var e=m();if(S(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-c);return s?y(n,u-(e-l)):n}(e))}function O(e){return f=void 0,v&&r?g(e):(r=i=void 0,a)}function T(){var e=m(),n=S(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return h(c);if(s)return f=setTimeout(j,t),g(c)}return void 0===f&&(f=setTimeout(j,t)),a}return t=w(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?p(w(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},T.flush=function(){return void 0===f?a:O(m())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var h,S=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},j="feedback-form-state",O=document.querySelector(".feedback-form"),T=O.querySelector("input"),x=O.querySelector("textarea"),E=e(t)((function(e,t){return S(e,t)}),500);O.addEventListener("input",(function(){var e=new FormData(O),t={};e.forEach((function(e,n){return t[n]=e})),E(j,t)})),O.addEventListener("submit",(function(e){var t;e.preventDefault(),T.value="",x.value="",t=j,localStorage.removeItem(t)})),window.performance&&"reload"===window.performance.getEntriesByType("navigation")[0].type&&void 0!==(h=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}(j))&&(T.value=h.email,x.value=h.message)}();
//# sourceMappingURL=03-feedback.a6800949.js.map
