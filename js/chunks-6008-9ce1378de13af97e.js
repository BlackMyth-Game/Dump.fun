"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6008],{26008:function(t,e,n){n.d(e,{ee:function(){return tG},Eh:function(){return tK},VY:function(){return tJ},fC:function(){return tq},D7:function(){return tk}});var r=n(2265);let i=["top","right","bottom","left"],o=Math.min,l=Math.max,a=Math.round,f=Math.floor,u=t=>({x:t,y:t}),c={left:"right",right:"left",bottom:"top",top:"bottom"},s={start:"end",end:"start"};function d(t,e){return"function"==typeof t?t(e):t}function p(t){return t.split("-")[0]}function h(t){return t.split("-")[1]}function m(t){return"x"===t?"y":"x"}function g(t){return"y"===t?"height":"width"}function y(t){return["top","bottom"].includes(p(t))?"y":"x"}function v(t){return t.replace(/start|end/g,t=>s[t])}function w(t){return t.replace(/left|right|bottom|top/g,t=>c[t])}function x(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function b(t){let{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function A(t,e,n){let r,{reference:i,floating:o}=t,l=y(e),a=m(y(e)),f=g(a),u=p(e),c="y"===l,s=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,v=i[f]/2-o[f]/2;switch(u){case"top":r={x:s,y:i.y-o.height};break;case"bottom":r={x:s,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:d};break;case"left":r={x:i.x-o.width,y:d};break;default:r={x:i.x,y:i.y}}switch(h(e)){case"start":r[a]-=v*(n&&c?-1:1);break;case"end":r[a]+=v*(n&&c?-1:1)}return r}let R=async(t,e,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=n,a=o.filter(Boolean),f=await (null==l.isRTL?void 0:l.isRTL(e)),u=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:c,y:s}=A(u,r,f),d=r,p={},h=0;for(let n=0;n<a.length;n++){let{name:o,fn:m}=a[n],{x:g,y:y,data:v,reset:w}=await m({x:c,y:s,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:u,platform:l,elements:{reference:t,floating:e}});c=null!=g?g:c,s=null!=y?y:s,p={...p,[o]:{...p[o],...v}},w&&h<=50&&(h++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(u=!0===w.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):w.rects),{x:c,y:s}=A(u,d,f)),n=-1)}return{x:c,y:s,placement:d,strategy:i,middlewareData:p}};async function E(t,e){var n;void 0===e&&(e={});let{x:r,y:i,platform:o,rects:l,elements:a,strategy:f}=t,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:s="floating",altBoundary:p=!1,padding:h=0}=d(e,t),m=x(h),g=a[p?"floating"===s?"reference":"floating":s],y=b(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(g)))||n?g:g.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:u,rootBoundary:c,strategy:f})),v="floating"===s?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,w=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),A=await (null==o.isElement?void 0:o.isElement(w))&&await (null==o.getScale?void 0:o.getScale(w))||{x:1,y:1},R=b(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:w,strategy:f}):v);return{top:(y.top-R.top+m.top)/A.y,bottom:(R.bottom-y.bottom+m.bottom)/A.y,left:(y.left-R.left+m.left)/A.x,right:(R.right-y.right+m.right)/A.x}}function L(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function T(t){return i.some(e=>t[e]>=0)}async function S(t,e){let{placement:n,platform:r,elements:i}=t,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),l=p(n),a=h(n),f="y"===y(n),u=["left","top"].includes(l)?-1:1,c=o&&f?-1:1,s=d(e,t),{mainAxis:m,crossAxis:g,alignmentAxis:v}="number"==typeof s?{mainAxis:s,crossAxis:0,alignmentAxis:null}:{mainAxis:s.mainAxis||0,crossAxis:s.crossAxis||0,alignmentAxis:s.alignmentAxis};return a&&"number"==typeof v&&(g="end"===a?-1*v:v),f?{x:g*c,y:m*u}:{x:m*u,y:g*c}}function O(){return"undefined"!=typeof window}function C(t){return H(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function k(t){var e;return null==(e=(H(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function H(t){return!!O()&&(t instanceof Node||t instanceof P(t).Node)}function D(t){return!!O()&&(t instanceof Element||t instanceof P(t).Element)}function W(t){return!!O()&&(t instanceof HTMLElement||t instanceof P(t).HTMLElement)}function F(t){return!!O()&&"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof P(t).ShadowRoot)}function j(t){let{overflow:e,overflowX:n,overflowY:r,display:i}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function M(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch(t){return!1}})}function V(t){let e=z(),n=D(t)?B(t):t;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function z(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function N(t){return["html","body","#document"].includes(C(t))}function B(t){return P(t).getComputedStyle(t)}function _(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Y(t){if("html"===C(t))return t;let e=t.assignedSlot||t.parentNode||F(t)&&t.host||k(t);return F(e)?e.host:e}function I(t,e,n){var r;void 0===e&&(e=[]),void 0===n&&(n=!0);let i=function t(e){let n=Y(e);return N(n)?e.ownerDocument?e.ownerDocument.body:e.body:W(n)&&j(n)?n:t(n)}(t),o=i===(null==(r=t.ownerDocument)?void 0:r.body),l=P(i);if(o){let t=X(l);return e.concat(l,l.visualViewport||[],j(i)?i:[],t&&n?I(t):[])}return e.concat(i,I(i,[],n))}function X(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function $(t){let e=B(t),n=parseFloat(e.width)||0,r=parseFloat(e.height)||0,i=W(t),o=i?t.offsetWidth:n,l=i?t.offsetHeight:r,f=a(n)!==o||a(r)!==l;return f&&(n=o,r=l),{width:n,height:r,$:f}}function q(t){return D(t)?t:t.contextElement}function G(t){let e=q(t);if(!W(e))return u(1);let n=e.getBoundingClientRect(),{width:r,height:i,$:o}=$(e),l=(o?a(n.width):n.width)/r,f=(o?a(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),f&&Number.isFinite(f)||(f=1),{x:l,y:f}}let J=u(0);function K(t){let e=P(t);return z()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:J}function Q(t,e,n,r){var i;void 0===e&&(e=!1),void 0===n&&(n=!1);let o=t.getBoundingClientRect(),l=q(t),a=u(1);e&&(r?D(r)&&(a=G(r)):a=G(t));let f=(void 0===(i=n)&&(i=!1),r&&(!i||r===P(l))&&i)?K(l):u(0),c=(o.left+f.x)/a.x,s=(o.top+f.y)/a.y,d=o.width/a.x,p=o.height/a.y;if(l){let t=P(l),e=r&&D(r)?P(r):r,n=t,i=X(n);for(;i&&r&&e!==n;){let t=G(i),e=i.getBoundingClientRect(),r=B(i),o=e.left+(i.clientLeft+parseFloat(r.paddingLeft))*t.x,l=e.top+(i.clientTop+parseFloat(r.paddingTop))*t.y;c*=t.x,s*=t.y,d*=t.x,p*=t.y,c+=o,s+=l,i=X(n=P(i))}}return b({width:d,height:p,x:c,y:s})}function U(t,e){let n=_(t).scrollLeft;return e?e.left+n:Q(k(t)).left+n}function Z(t,e,n){let r;if("viewport"===e)r=function(t,e){let n=P(t),r=k(t),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,a=0,f=0;if(i){o=i.width,l=i.height;let t=z();(!t||t&&"fixed"===e)&&(a=i.offsetLeft,f=i.offsetTop)}return{width:o,height:l,x:a,y:f}}(t,n);else if("document"===e)r=function(t){let e=k(t),n=_(t),r=t.ownerDocument.body,i=l(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=l(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+U(t),f=-n.scrollTop;return"rtl"===B(r).direction&&(a+=l(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:f}}(k(t));else if(D(e))r=function(t,e){let n=Q(t,!0,"fixed"===e),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=W(t)?G(t):u(1),l=t.clientWidth*o.x;return{width:l,height:t.clientHeight*o.y,x:i*o.x,y:r*o.y}}(e,n);else{let n=K(t);r={...e,x:e.x-n.x,y:e.y-n.y}}return b(r)}function tt(t){return"static"===B(t).position}function te(t,e){if(!W(t)||"fixed"===B(t).position)return null;if(e)return e(t);let n=t.offsetParent;return k(t)===n&&(n=n.ownerDocument.body),n}function tn(t,e){let n=P(t);if(M(t))return n;if(!W(t)){let e=Y(t);for(;e&&!N(e);){if(D(e)&&!tt(e))return e;e=Y(e)}return n}let r=te(t,e);for(;r&&["table","td","th"].includes(C(r))&&tt(r);)r=te(r,e);return r&&N(r)&&tt(r)&&!V(r)?n:r||function(t){let e=Y(t);for(;W(e)&&!N(e);){if(V(e))return e;if(M(e))break;e=Y(e)}return null}(t)||n}let tr=async function(t){let e=this.getOffsetParent||tn,n=this.getDimensions,r=await n(t.floating);return{reference:function(t,e,n){let r=W(e),i=k(e),o="fixed"===n,l=Q(t,!0,o,e),a={scrollLeft:0,scrollTop:0},f=u(0);if(r||!r&&!o){if(("body"!==C(e)||j(i))&&(a=_(e)),r){let t=Q(e,!0,o,e);f.x=t.x+e.clientLeft,f.y=t.y+e.clientTop}else i&&(f.x=U(i))}let c=0,s=0;if(i&&!r&&!o){let t=i.getBoundingClientRect();s=t.top+a.scrollTop,c=t.left+a.scrollLeft-U(i,t)}return{x:l.left+a.scrollLeft-f.x-c,y:l.top+a.scrollTop-f.y-s,width:l.width,height:l.height}}(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},ti={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t,o="fixed"===i,l=k(r),a=!!e&&M(e.floating);if(r===l||a&&o)return n;let f={scrollLeft:0,scrollTop:0},c=u(1),s=u(0),d=W(r);if((d||!d&&!o)&&(("body"!==C(r)||j(l))&&(f=_(r)),W(r))){let t=Q(r);c=G(r),s.x=t.x+r.clientLeft,s.y=t.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-f.scrollLeft*c.x+s.x,y:n.y*c.y-f.scrollTop*c.y+s.y}},getDocumentElement:k,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t,a=[..."clippingAncestors"===n?M(e)?[]:function(t,e){let n=e.get(t);if(n)return n;let r=I(t,[],!1).filter(t=>D(t)&&"body"!==C(t)),i=null,o="fixed"===B(t).position,l=o?Y(t):t;for(;D(l)&&!N(l);){let e=B(l),n=V(l);n||"fixed"!==e.position||(i=null),(o?!n&&!i:!n&&"static"===e.position&&!!i&&["absolute","fixed"].includes(i.position)||j(l)&&!n&&function t(e,n){let r=Y(e);return!(r===n||!D(r)||N(r))&&("fixed"===B(r).position||t(r,n))}(t,l))?r=r.filter(t=>t!==l):i=e,l=Y(l)}return e.set(t,r),r}(e,this._c):[].concat(n),r],f=a[0],u=a.reduce((t,n)=>{let r=Z(e,n,i);return t.top=l(r.top,t.top),t.right=o(r.right,t.right),t.bottom=o(r.bottom,t.bottom),t.left=l(r.left,t.left),t},Z(e,f,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},getOffsetParent:tn,getElementRects:tr,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:e,height:n}=$(t);return{width:e,height:n}},getScale:G,isElement:D,isRTL:function(t){return"rtl"===B(t).direction}},to=t=>({name:"arrow",options:t,async fn(e){let{x:n,y:r,placement:i,rects:a,platform:f,elements:u,middlewareData:c}=e,{element:s,padding:p=0}=d(t,e)||{};if(null==s)return{};let v=x(p),w={x:n,y:r},b=m(y(i)),A=g(b),R=await f.getDimensions(s),E="y"===b,L=E?"clientHeight":"clientWidth",T=a.reference[A]+a.reference[b]-w[b]-a.floating[A],S=w[b]-a.reference[b],O=await (null==f.getOffsetParent?void 0:f.getOffsetParent(s)),C=O?O[L]:0;C&&await (null==f.isElement?void 0:f.isElement(O))||(C=u.floating[L]||a.floating[A]);let P=C/2-R[A]/2-1,k=o(v[E?"top":"left"],P),H=o(v[E?"bottom":"right"],P),D=C-R[A]-H,W=C/2-R[A]/2+(T/2-S/2),F=l(k,o(W,D)),j=!c.arrow&&null!=h(i)&&W!==F&&a.reference[A]/2-(W<k?k:H)-R[A]/2<0,M=j?W<k?W-k:W-D:0;return{[b]:w[b]+M,data:{[b]:F,centerOffset:W-F-M,...j&&{alignmentOffset:M}},reset:j}}}),tl=(t,e,n)=>{let r=new Map,i={platform:ti,...n},o={...i.platform,_c:r};return R(t,e,{...i,platform:o})};var ta=n(54887),tf="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;function tu(t,e){let n,r,i;if(t===e)return!0;if(typeof t!=typeof e)return!1;if("function"==typeof t&&t.toString()===e.toString())return!0;if(t&&e&&"object"==typeof t){if(Array.isArray(t)){if((n=t.length)!==e.length)return!1;for(r=n;0!=r--;)if(!tu(t[r],e[r]))return!1;return!0}if((n=(i=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(e,i[r]))return!1;for(r=n;0!=r--;){let n=i[r];if(("_owner"!==n||!t.$$typeof)&&!tu(t[n],e[n]))return!1}return!0}return t!=t&&e!=e}function tc(t){return"undefined"==typeof window?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function ts(t,e){let n=tc(t);return Math.round(e*n)/n}function td(t){let e=r.useRef(t);return tf(()=>{e.current=t}),e}let tp=t=>({name:"arrow",options:t,fn(e){let{element:n,padding:r}="function"==typeof t?t(e):t;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?to({element:n.current,padding:r}).fn(e):{}:n?to({element:n,padding:r}).fn(e):{}}}),th=(t,e)=>{var n;return{...(void 0===(n=t)&&(n=0),{name:"offset",options:n,async fn(t){var e,r;let{x:i,y:o,placement:l,middlewareData:a}=t,f=await S(t,n);return l===(null==(e=a.offset)?void 0:e.placement)&&null!=(r=a.arrow)&&r.alignmentOffset?{}:{x:i+f.x,y:o+f.y,data:{...f,placement:l}}}}),options:[t,e]}},tm=(t,e)=>{var n;return{...(void 0===(n=t)&&(n={}),{name:"shift",options:n,async fn(t){let{x:e,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:f=!1,limiter:u={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...c}=d(n,t),s={x:e,y:r},h=await E(t,c),g=y(p(i)),v=m(g),w=s[v],x=s[g];if(a){let t="y"===v?"top":"left",e="y"===v?"bottom":"right",n=w+h[t],r=w-h[e];w=l(n,o(w,r))}if(f){let t="y"===g?"top":"left",e="y"===g?"bottom":"right",n=x+h[t],r=x-h[e];x=l(n,o(x,r))}let b=u.fn({...t,[v]:w,[g]:x});return{...b,data:{x:b.x-e,y:b.y-r,enabled:{[v]:a,[g]:f}}}}}),options:[t,e]}},tg=(t,e)=>{var n;return{...(void 0===(n=t)&&(n={}),{options:n,fn(t){let{x:e,y:r,placement:i,rects:o,middlewareData:l}=t,{offset:a=0,mainAxis:f=!0,crossAxis:u=!0}=d(n,t),c={x:e,y:r},s=y(i),h=m(s),g=c[h],v=c[s],w=d(a,t),x="number"==typeof w?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(f){let t="y"===h?"height":"width",e=o.reference[h]-o.floating[t]+x.mainAxis,n=o.reference[h]+o.reference[t]-x.mainAxis;g<e?g=e:g>n&&(g=n)}if(u){var b,A;let t="y"===h?"width":"height",e=["top","left"].includes(p(i)),n=o.reference[s]-o.floating[t]+(e&&(null==(b=l.offset)?void 0:b[s])||0)+(e?0:x.crossAxis),r=o.reference[s]+o.reference[t]+(e?0:(null==(A=l.offset)?void 0:A[s])||0)-(e?x.crossAxis:0);v<n?v=n:v>r&&(v=r)}return{[h]:g,[s]:v}}}),options:[t,e]}},ty=(t,e)=>{var n;return{...(void 0===(n=t)&&(n={}),{name:"flip",options:n,async fn(t){var e,r,i,o,l;let{placement:a,middlewareData:f,rects:u,initialPlacement:c,platform:s,elements:x}=t,{mainAxis:b=!0,crossAxis:A=!0,fallbackPlacements:R,fallbackStrategy:L="bestFit",fallbackAxisSideDirection:T="none",flipAlignment:S=!0,...O}=d(n,t);if(null!=(e=f.arrow)&&e.alignmentOffset)return{};let C=p(a),P=y(c),k=p(c)===c,H=await (null==s.isRTL?void 0:s.isRTL(x.floating)),D=R||(k||!S?[w(c)]:function(t){let e=w(t);return[v(t),e,v(e)]}(c)),W="none"!==T;!R&&W&&D.push(...function(t,e,n,r){let i=h(t),o=function(t,e,n){let r=["left","right"],i=["right","left"];switch(t){case"top":case"bottom":if(n)return e?i:r;return e?r:i;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(p(t),"start"===n,r);return i&&(o=o.map(t=>t+"-"+i),e&&(o=o.concat(o.map(v)))),o}(c,S,T,H));let F=[c,...D],j=await E(t,O),M=[],V=(null==(r=f.flip)?void 0:r.overflows)||[];if(b&&M.push(j[C]),A){let t=function(t,e,n){void 0===n&&(n=!1);let r=h(t),i=m(y(t)),o=g(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[o]>e.floating[o]&&(l=w(l)),[l,w(l)]}(a,u,H);M.push(j[t[0]],j[t[1]])}if(V=[...V,{placement:a,overflows:M}],!M.every(t=>t<=0)){let t=((null==(i=f.flip)?void 0:i.index)||0)+1,e=F[t];if(e)return{data:{index:t,overflows:V},reset:{placement:e}};let n=null==(o=V.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:o.placement;if(!n)switch(L){case"bestFit":{let t=null==(l=V.filter(t=>{if(W){let e=y(t.placement);return e===P||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:l[0];t&&(n=t);break}case"initialPlacement":n=c}if(a!==n)return{reset:{placement:n}}}return{}}}),options:[t,e]}},tv=(t,e)=>{var n;return{...(void 0===(n=t)&&(n={}),{name:"size",options:n,async fn(t){var e,r;let i,a;let{placement:f,rects:u,platform:c,elements:s}=t,{apply:m=()=>{},...g}=d(n,t),v=await E(t,g),w=p(f),x=h(f),b="y"===y(f),{width:A,height:R}=u.floating;"top"===w||"bottom"===w?(i=w,a=x===(await (null==c.isRTL?void 0:c.isRTL(s.floating))?"start":"end")?"left":"right"):(a=w,i="end"===x?"top":"bottom");let L=R-v.top-v.bottom,T=A-v.left-v.right,S=o(R-v[i],L),O=o(A-v[a],T),C=!t.middlewareData.shift,P=S,k=O;if(null!=(e=t.middlewareData.shift)&&e.enabled.x&&(k=T),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(P=L),C&&!x){let t=l(v.left,0),e=l(v.right,0),n=l(v.top,0),r=l(v.bottom,0);b?k=A-2*(0!==t||0!==e?t+e:l(v.left,v.right)):P=R-2*(0!==n||0!==r?n+r:l(v.top,v.bottom))}await m({...t,availableWidth:k,availableHeight:P});let H=await c.getDimensions(s.floating);return A!==H.width||R!==H.height?{reset:{rects:!0}}:{}}}),options:[t,e]}},tw=(t,e)=>{var n;return{...(void 0===(n=t)&&(n={}),{name:"hide",options:n,async fn(t){let{rects:e}=t,{strategy:r="referenceHidden",...i}=d(n,t);switch(r){case"referenceHidden":{let n=L(await E(t,{...i,elementContext:"reference"}),e.reference);return{data:{referenceHiddenOffsets:n,referenceHidden:T(n)}}}case"escaped":{let n=L(await E(t,{...i,altBoundary:!0}),e.floating);return{data:{escapedOffsets:n,escaped:T(n)}}}default:return{}}}}),options:[t,e]}},tx=(t,e)=>({...tp(t),options:[t,e]});var tb=n(66840),tA=n(57437),tR=r.forwardRef((t,e)=>{let{children:n,width:r=10,height:i=5,...o}=t;return(0,tA.jsx)(tb.WV.svg,{...o,ref:e,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:(0,tA.jsx)("polygon",{points:"0,0 30,0 15,10"})})});tR.displayName="Arrow";var tE=n(98575),tL=n(73966),tT=n(26606),tS=n(61188),tO=n(90420),tC="Popper",[tP,tk]=(0,tL.b)(tC),[tH,tD]=tP(tC),tW=t=>{let{__scopePopper:e,children:n}=t,[i,o]=r.useState(null);return(0,tA.jsx)(tH,{scope:e,anchor:i,onAnchorChange:o,children:n})};tW.displayName=tC;var tF="PopperAnchor",tj=r.forwardRef((t,e)=>{let{__scopePopper:n,virtualRef:i,...o}=t,l=tD(tF,n),a=r.useRef(null),f=(0,tE.e)(e,a);return r.useEffect(()=>{l.onAnchorChange((null==i?void 0:i.current)||a.current)}),i?null:(0,tA.jsx)(tb.WV.div,{...o,ref:f})});tj.displayName=tF;var tM="PopperContent",[tV,tz]=tP(tM),tN=r.forwardRef((t,e)=>{var n,i,a,u,c,s,d,p;let{__scopePopper:h,side:m="bottom",sideOffset:g=0,align:y="center",alignOffset:v=0,arrowPadding:w=0,avoidCollisions:x=!0,collisionBoundary:b=[],collisionPadding:A=0,sticky:R="partial",hideWhenDetached:E=!1,updatePositionStrategy:L="optimized",onPlaced:T,...S}=t,O=tD(tM,h),[C,P]=r.useState(null),H=(0,tE.e)(e,t=>P(t)),[D,W]=r.useState(null),F=(0,tO.t)(D),j=null!==(d=null==F?void 0:F.width)&&void 0!==d?d:0,M=null!==(p=null==F?void 0:F.height)&&void 0!==p?p:0,V="number"==typeof A?A:{top:0,right:0,bottom:0,left:0,...A},z=Array.isArray(b)?b:[b],N=z.length>0,B={padding:V,boundary:z.filter(tI),altBoundary:N},{refs:_,floatingStyles:Y,placement:X,isPositioned:$,middlewareData:G}=function(t){void 0===t&&(t={});let{placement:e="bottom",strategy:n="absolute",middleware:i=[],platform:o,elements:{reference:l,floating:a}={},transform:f=!0,whileElementsMounted:u,open:c}=t,[s,d]=r.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[p,h]=r.useState(i);tu(p,i)||h(i);let[m,g]=r.useState(null),[y,v]=r.useState(null),w=r.useCallback(t=>{t!==R.current&&(R.current=t,g(t))},[]),x=r.useCallback(t=>{t!==E.current&&(E.current=t,v(t))},[]),b=l||m,A=a||y,R=r.useRef(null),E=r.useRef(null),L=r.useRef(s),T=null!=u,S=td(u),O=td(o),C=td(c),P=r.useCallback(()=>{if(!R.current||!E.current)return;let t={placement:e,strategy:n,middleware:p};O.current&&(t.platform=O.current),tl(R.current,E.current,t).then(t=>{let e={...t,isPositioned:!1!==C.current};k.current&&!tu(L.current,e)&&(L.current=e,ta.flushSync(()=>{d(e)}))})},[p,e,n,O,C]);tf(()=>{!1===c&&L.current.isPositioned&&(L.current.isPositioned=!1,d(t=>({...t,isPositioned:!1})))},[c]);let k=r.useRef(!1);tf(()=>(k.current=!0,()=>{k.current=!1}),[]),tf(()=>{if(b&&(R.current=b),A&&(E.current=A),b&&A){if(S.current)return S.current(b,A,P);P()}},[b,A,P,S,T]);let H=r.useMemo(()=>({reference:R,floating:E,setReference:w,setFloating:x}),[w,x]),D=r.useMemo(()=>({reference:b,floating:A}),[b,A]),W=r.useMemo(()=>{let t={position:n,left:0,top:0};if(!D.floating)return t;let e=ts(D.floating,s.x),r=ts(D.floating,s.y);return f?{...t,transform:"translate("+e+"px, "+r+"px)",...tc(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:e,top:r}},[n,f,D.floating,s.x,s.y]);return r.useMemo(()=>({...s,update:P,refs:H,elements:D,floatingStyles:W}),[s,P,H,D,W])}({strategy:"fixed",placement:m+("center"!==y?"-"+y:""),whileElementsMounted:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t,e,n,r){let i;void 0===r&&(r={});let{ancestorScroll:a=!0,ancestorResize:u=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=q(t),h=a||u?[...p?I(p):[],...I(e)]:[];h.forEach(t=>{a&&t.addEventListener("scroll",n,{passive:!0}),u&&t.addEventListener("resize",n)});let m=p&&s?function(t,e){let n,r=null,i=k(t);function a(){var t;clearTimeout(n),null==(t=r)||t.disconnect(),r=null}return!function u(c,s){void 0===c&&(c=!1),void 0===s&&(s=1),a();let{left:d,top:p,width:h,height:m}=t.getBoundingClientRect();if(c||e(),!h||!m)return;let g=f(p),y=f(i.clientWidth-(d+h)),v={rootMargin:-g+"px "+-y+"px "+-f(i.clientHeight-(p+m))+"px "+-f(d)+"px",threshold:l(0,o(1,s))||1},w=!0;function x(t){let e=t[0].intersectionRatio;if(e!==s){if(!w)return u();e?u(!1,e):n=setTimeout(()=>{u(!1,1e-7)},1e3)}w=!1}try{r=new IntersectionObserver(x,{...v,root:i.ownerDocument})}catch(t){r=new IntersectionObserver(x,v)}r.observe(t)}(!0),a}(p,n):null,g=-1,y=null;c&&(y=new ResizeObserver(t=>{let[r]=t;r&&r.target===p&&y&&(y.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var t;null==(t=y)||t.observe(e)})),n()}),p&&!d&&y.observe(p),y.observe(e));let v=d?Q(t):null;return d&&function e(){let r=Q(t);v&&(r.x!==v.x||r.y!==v.y||r.width!==v.width||r.height!==v.height)&&n(),v=r,i=requestAnimationFrame(e)}(),n(),()=>{var t;h.forEach(t=>{a&&t.removeEventListener("scroll",n),u&&t.removeEventListener("resize",n)}),null==m||m(),null==(t=y)||t.disconnect(),y=null,d&&cancelAnimationFrame(i)}}(...e,{animationFrame:"always"===L})},elements:{reference:O.anchor},middleware:[th({mainAxis:g+M,alignmentAxis:v}),x&&tm({mainAxis:!0,crossAxis:!1,limiter:"partial"===R?tg():void 0,...B}),x&&ty({...B}),tv({...B,apply:t=>{let{elements:e,rects:n,availableWidth:r,availableHeight:i}=t,{width:o,height:l}=n.reference,a=e.floating.style;a.setProperty("--radix-popper-available-width","".concat(r,"px")),a.setProperty("--radix-popper-available-height","".concat(i,"px")),a.setProperty("--radix-popper-anchor-width","".concat(o,"px")),a.setProperty("--radix-popper-anchor-height","".concat(l,"px"))}}),D&&tx({element:D,padding:w}),tX({arrowWidth:j,arrowHeight:M}),E&&tw({strategy:"referenceHidden",...B})]}),[J,K]=t$(X),U=(0,tT.W)(T);(0,tS.b)(()=>{$&&(null==U||U())},[$,U]);let Z=null===(n=G.arrow)||void 0===n?void 0:n.x,tt=null===(i=G.arrow)||void 0===i?void 0:i.y,te=(null===(a=G.arrow)||void 0===a?void 0:a.centerOffset)!==0,[tn,tr]=r.useState();return(0,tS.b)(()=>{C&&tr(window.getComputedStyle(C).zIndex)},[C]),(0,tA.jsx)("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...Y,transform:$?Y.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:tn,"--radix-popper-transform-origin":[null===(u=G.transformOrigin)||void 0===u?void 0:u.x,null===(c=G.transformOrigin)||void 0===c?void 0:c.y].join(" "),...(null===(s=G.hide)||void 0===s?void 0:s.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:(0,tA.jsx)(tV,{scope:h,placedSide:J,onArrowChange:W,arrowX:Z,arrowY:tt,shouldHideArrow:te,children:(0,tA.jsx)(tb.WV.div,{"data-side":J,"data-align":K,...S,ref:H,style:{...S.style,animation:$?void 0:"none"}})})})});tN.displayName=tM;var tB="PopperArrow",t_={top:"bottom",right:"left",bottom:"top",left:"right"},tY=r.forwardRef(function(t,e){let{__scopePopper:n,...r}=t,i=tz(tB,n),o=t_[i.placedSide];return(0,tA.jsx)("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:(0,tA.jsx)(tR,{...r,ref:e,style:{...r.style,display:"block"}})})});function tI(t){return null!==t}tY.displayName=tB;var tX=t=>({name:"transformOrigin",options:t,fn(e){var n,r,i,o,l;let{placement:a,rects:f,middlewareData:u}=e,c=(null===(n=u.arrow)||void 0===n?void 0:n.centerOffset)!==0,s=c?0:t.arrowWidth,d=c?0:t.arrowHeight,[p,h]=t$(a),m={start:"0%",center:"50%",end:"100%"}[h],g=(null!==(o=null===(r=u.arrow)||void 0===r?void 0:r.x)&&void 0!==o?o:0)+s/2,y=(null!==(l=null===(i=u.arrow)||void 0===i?void 0:i.y)&&void 0!==l?l:0)+d/2,v="",w="";return"bottom"===p?(v=c?m:"".concat(g,"px"),w="".concat(-d,"px")):"top"===p?(v=c?m:"".concat(g,"px"),w="".concat(f.floating.height+d,"px")):"right"===p?(v="".concat(-d,"px"),w=c?m:"".concat(y,"px")):"left"===p&&(v="".concat(f.floating.width+d,"px"),w=c?m:"".concat(y,"px")),{data:{x:v,y:w}}}});function t$(t){let[e,n="center"]=t.split("-");return[e,n]}var tq=tW,tG=tj,tJ=tN,tK=tY},90420:function(t,e,n){n.d(e,{t:function(){return o}});var r=n(2265),i=n(61188);function o(t){let[e,n]=r.useState(void 0);return(0,i.b)(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});let e=new ResizeObserver(e=>{let r,i;if(!Array.isArray(e)||!e.length)return;let o=e[0];if("borderBoxSize"in o){let t=o.borderBoxSize,e=Array.isArray(t)?t[0]:t;r=e.inlineSize,i=e.blockSize}else r=t.offsetWidth,i=t.offsetHeight;n({width:r,height:i})});return e.observe(t,{box:"border-box"}),()=>e.unobserve(t)}n(void 0)},[t]),e}}}]);