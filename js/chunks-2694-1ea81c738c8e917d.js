(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2694],{14123:function(e,t,n){var r=0/0,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,s=l||f||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,w=function(){return s.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return r;if(p(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=u.test(e);return l||a.test(e)?c(e.slice(2),l?2:8):i.test(e)?r:+e}e.exports=function(e,t,n){var r,o,i,u,a,c,l=0,f=!1,s=!1,d=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function h(e){var n=e-c,r=e-l;return void 0===c||n>=t||n<0||s&&r>=i}function m(){var e,n,r,o=w();if(h(o))return E(o);a=setTimeout(m,(e=o-c,n=o-l,r=t-e,s?g(r,i-n):r))}function E(e){return(a=void 0,d&&r)?b(e):(r=o=void 0,u)}function S(){var e,n=w(),i=h(n);if(r=arguments,o=this,c=n,i){if(void 0===a)return l=e=c,a=setTimeout(m,t),f?b(e):u;if(s)return a=setTimeout(m,t),b(c)}return void 0===a&&(a=setTimeout(m,t)),u}return t=y(t)||0,p(n)&&(f=!!n.leading,i=(s="maxWait"in n)?v(y(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},S.flush=function(){return void 0===a?u:E(w())},S}},72694:function(e,t,n){"use strict";n.d(t,{O_:function(){return l},_:function(){return c}});var r=n(2265);n(14123);var o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function i(e,t,n,i){let u=(0,r.useRef)(t);o(()=>{u.current=t},[t]),(0,r.useEffect)(()=>{let t=(null==n?void 0:n.current)??window;if(!(t&&t.addEventListener))return;let r=e=>{u.current(e)};return t.addEventListener(e,r,i),()=>{t.removeEventListener(e,r,i)}},[e,n,i])}function u(e){let t=(0,r.useRef)(()=>{throw Error("Cannot call an event handler while rendering.")});return o(()=>{t.current=e},[e]),(0,r.useCallback)((...e)=>{var n;return null==(n=t.current)?void 0:n.call(t,...e)},[t])}var a="undefined"==typeof window;function c(e,t,n={}){let{initializeWithValue:o=!0}=n,c=(0,r.useCallback)(e=>n.serializer?n.serializer(e):JSON.stringify(e),[n]),l=(0,r.useCallback)(e=>{let r;if(n.deserializer)return n.deserializer(e);if("undefined"===e)return;let o=t instanceof Function?t():t;try{r=JSON.parse(e)}catch(e){return console.error("Error parsing JSON:",e),o}return r},[n,t]),f=(0,r.useCallback)(()=>{let n=t instanceof Function?t():t;if(a)return n;try{let t=window.localStorage.getItem(e);return t?l(t):n}catch(t){return console.warn(`Error reading localStorage key \u201C${e}\u201D:`,t),n}},[t,e,l]),[s,d]=(0,r.useState)(()=>o?f():t instanceof Function?t():t),v=u(t=>{a&&console.warn(`Tried setting localStorage key \u201C${e}\u201D even though environment is not a client`);try{let n=t instanceof Function?t(f()):t;window.localStorage.setItem(e,c(n)),d(n),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))}catch(t){console.warn(`Error setting localStorage key \u201C${e}\u201D:`,t)}}),g=u(()=>{a&&console.warn(`Tried removing localStorage key \u201C${e}\u201D even though environment is not a client`);let n=t instanceof Function?t():t;window.localStorage.removeItem(e),d(n),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))});(0,r.useEffect)(()=>{d(f())},[e]);let w=(0,r.useCallback)(t=>{t.key&&t.key!==e||d(f())},[e,f]);return i("storage",w),i("local-storage",w),[s,v,g]}function l(){let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{t(!0)},[]),e}}}]);