function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,i,r,u,a,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,a=setTimeout(S,t),l?b(e):u}function w(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function S(){var e=v();if(w(e))return h(e);a=setTimeout(S,function(e){var n=t-(e-f);return s?m(n,r-(e-c)):n}(e))}function h(e){return a=void 0,p&&o?b(e):(o=i=void 0,u)}function O(){var e=v(),n=w(e);if(o=arguments,i=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(S,t),b(f)}return void 0===a&&(a=setTimeout(S,t)),u}return t=y(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=i=a=void 0},O.flush=function(){return void 0===a?u:h(v())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),j=document.querySelector('[name="email"]'),w=document.querySelector('[name="message"]');b.addEventListener("input",e(t)((function(e){S={email:j.value,message:w.value},localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),console.log(S),b.reset(),localStorage.clear()}));let S={};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(j.value=t.email,w.value=t.message,S=t,console.log("Previous input information was found"))}();
//# sourceMappingURL=03-feedback.ce076d2c.js.map