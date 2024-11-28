(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4095],{17620:function(e,t,r){Promise.resolve().then(r.bind(r,39890)),Promise.resolve().then(r.bind(r,61213)),Promise.resolve().then(r.bind(r,14694))},39890:function(e,t,r){"use strict";r.d(t,{default:function(){return u}});var n=r(57437),s=r(2265),a=r(72650),l=r(54559);let o=()=>{let[e,t]=(0,s.useState)(!1),[r,n]=(0,s.useState)(!0),{decodedJwt:o}=(0,a.U)();return(0,s.useEffect)(()=>{(async()=>{if(!o){t(!1),n(!1);return}try{let e=await fetch("".concat((0,l.o)(),"/meet"),{method:"GET",credentials:"include"});if(!e.ok)throw Error("Network response was not ok");let r=await e.json();t(r.isEligible)}catch(e){console.error("Error checking meet eligibility:",e),t(!1)}finally{n(!1)}})()},[o]),{isEligible:e,loading:r}};var c=e=>{let{onDismiss:t}=e,[r,o]=(0,s.useState)(!1),{decodedJwt:c}=(0,a.U)(),i=async()=>{await navigator.clipboard.writeText("research@pump.fun"),o(!0),setTimeout(()=>o(!1),2e3);try{c&&await fetch("".concat((0,l.o)(),"/meet/copy-email"),{method:"POST",credentials:"include"})}catch(e){console.error("Error updating copy email status:",e)}},u=async()=>{try{c&&await fetch("".concat((0,l.o)(),"/meet/dismiss"),{method:"POST",credentials:"include"}),t()}catch(e){console.error("Error dismissing announcement:",e)}};return(0,n.jsxs)("div",{className:"bg-green-300 p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between",children:[(0,n.jsx)("div",{className:"mb-2 lg:mb-0 lg:mr-8 flex-grow",children:(0,n.jsxs)("p",{className:"text-sm",children:["Hello there! Thanks for using pump. We would love to get your feedback. We'll reward you with ",(0,n.jsx)("strong",{children:"1 SOL"})," after a 30 minute call with someone from our team! Please email"," ",(0,n.jsx)("strong",{children:"research@pump.fun"})," and provide your wallet address. We will respond to you within 24 hours."]})}),(0,n.jsxs)("div",{className:"flex space-x-2 mt-2 lg:mt-0 flex-shrink-0",children:[(0,n.jsx)("button",{onClick:i,className:"bg-black text-white px-4 py-2 rounded text-sm whitespace-nowrap",children:r?"Copied!":"Copy email address"}),(0,n.jsx)("button",{onClick:u,className:"text-black px-4 py-2 rounded text-sm",children:"Dismiss"})]})]})},i=r(57653);function u(e){let{children:t}=e,{isEligible:r,loading:a}=o(),[l,u]=(0,s.useState)(!0);return(0,n.jsxs)(n.Fragment,{children:[!a&&r&&l&&(0,n.jsx)(c,{onDismiss:()=>u(!1)}),(0,n.jsx)(i.default,{}),(0,n.jsx)("main",{className:"h-full",children:t})]})}},61213:function(e,t,r){"use strict";r.d(t,{default:function(){return l}});var n=r(57437),s=r(11166),a=r(2265);function l(){return(0,a.useEffect)(()=>{(0,s.S1)({orgId:"o-1YWTMD-na1",devMode:!1})},[]),(0,n.jsx)(n.Fragment,{})}},20297:function(e,t,r){"use strict";r.d(t,{n:function(){return o}});var n=r(57437),s=r(26110),a=r(53974),l=r(62869);function o(){let[e,t]=(0,a._)("show-how-it-works",!0);return(0,n.jsxs)(s.Vq,{open:e,onOpenChange:e=>t(e),children:[(0,n.jsx)(s.hg,{asChild:!0,children:(0,n.jsx)("button",{className:"text-sm text-slate-50 hover:font-bold hover:bg-transparent hover:text-slate-50",children:"[how it works]"})}),(0,n.jsxs)(s.cZ,{className:"bg-primary text-white p-4 text-center",children:[(0,n.jsx)(s.fK,{className:"text-center",children:(0,n.jsx)(s.$N,{className:"text-center",children:"how it works"})}),(0,n.jsxs)("div",{children:["pump prevents rugs by making sure that all created tokens are safe. each coin on pump is a"," ",(0,n.jsx)("span",{className:"text-green-300 bold",children:"fair-launch"})," with"," ",(0,n.jsx)("span",{className:"text-blue-300",children:"no presale"})," and"," ",(0,n.jsx)("span",{className:"text-orange-300",children:"no team allocation."})]}),(0,n.jsxs)("div",{className:"bg-primary text-white p-4 space-y-4",children:[(0,n.jsx)("div",{className:"text-gray-300",children:"step 1: pick a coin that you like"}),(0,n.jsx)("div",{className:"text-gray-300",children:"step 2: buy the coin on the bonding curve"}),(0,n.jsx)("div",{className:"text-gray-300",children:"step 3: sell at any time to lock in your profits or losses"}),(0,n.jsx)("div",{className:"text-gray-300",children:"step 4: when enough people buy on the bonding curve it reaches a market cap of $100k"}),(0,n.jsx)("div",{className:"text-gray-300",children:"step 5: $17k of liquidity is then deposited in raydium and burned"})]}),(0,n.jsxs)(l.z,{onClick:()=>t(!1),variant:"ghost",className:"text-slate-50 hover:font-bold hover:bg-transparent hover:text-slate-50",children:["[I","'","m ready to pump]"]})]})]})}},57653:function(e,t,r){"use strict";r.d(t,{W:function(){return T},default:function(){return _}});var n=r(57437),s=r(88944),a=r(72650),l=r(53974),o=r(33145),c=r(27648),i=r(20297),u=r(36510),d=r(94743),f=r(2265),h=r(54559);let p=()=>{let[e,t]=(0,f.useState)(),[r,n]=(0,f.useState)(!1),s=async()=>{n(!0),t(await fetch("".concat((0,h.o)(),"/coins/latest")).then(e=>e.json())),n(!1)};return(0,f.useEffect)(()=>{s()},[]),{latestCoin:e,loading:r,fetchLatestCoin:s}};var m=r(94508),x=r(90225),g=r(61994),v=r(5753),w=r(30781),b=r(1708);let j=()=>{let[e,t]=(0,f.useState)(null),{latestCoin:r}=p(),{ipfsPrefix:s}=(0,x.y)(),{latestCoinCreated:a}=(0,u.L)(),{latestCoinCreatedBatched:l}=(0,d.o)(),[o,i]=(0,f.useState)(!1),{latestMessage:h,error:j}=(0,b.R)({url:"wss://prod-v2.nats.realtime.pump.fun",subject:"newCoinCreated.".concat("prod")});if((0,f.useEffect)(()=>{r&&t(r)},[r]),(0,f.useEffect)(()=>{a&&(t(a),i(!0),setTimeout(()=>i(!1),700))},[a]),(0,f.useEffect)(()=>{if(h)try{let e="string"==typeof h?JSON.parse(h):h;t(e),i(!0),setTimeout(()=>i(!1),700)}catch(e){console.error("Error processing reply:",e)}},[h]),(0,f.useEffect)(()=>{if(l)try{return}catch(e){console.error("Error processing batched coin update:",e)}},[l]),!e)return null;let{creator:y,symbol:N,created_timestamp:k,mint:S,image_uri:C}=e,E=(0,m.Py)(C,s),A=new Date(k).toLocaleDateString("en-US",{year:"2-digit",month:"2-digit",day:"2-digit"});return(0,n.jsxs)("div",{className:(0,g.Z)("p-2 rounded flex items-center gap-1 text-sm bg-blue-300",o&&"animate-shake"),children:[(0,n.jsxs)(w.qE,{className:"w-4 h-4",children:[(0,n.jsx)(w.F$,{alt:"anon",src:"https://www.pinclipart.com/picdir/big/184-1843111_pepe-the-frog-crying-png-clipart.png"}),(0,n.jsx)(w.Q5,{})]}),(0,n.jsx)(c.default,{href:"/profile/".concat(y),prefetch:!1,children:(0,n.jsxs)("span",{className:"hover:underline",children:[null==y?void 0:y.slice(0,6)," "]})}),(0,n.jsx)("span",{children:"created "}),(0,n.jsxs)(c.default,{className:"hover:underline flex gap-2",href:"/coin/".concat(S),prefetch:!1,children:[N,(0,n.jsx)(v.default,{width:20,height:20,alt:"",src:E,className:"h-5 w-5 rounded-full"})]}),(0,n.jsxs)("span",{children:[" on ",A," "]})]})},y=()=>{let[e,t]=(0,f.useState)(),[r,n]=(0,f.useState)(!1),s=async()=>{n(!0),t(await fetch("".concat((0,h.o)(),"/trades/latest")).then(e=>e.json())),n(!1)};return(0,f.useEffect)(()=>{s()},[]),{latestTrade:e,loading:r,fetchLatestTrade:s}};var N=r(18976),k=r(15452),S=r(55135),C=r(61252);let E=()=>{let[e,t]=(0,f.useState)(null),[r,s]=(0,f.useState)(!1),{latestTrade:a}=(0,N.A)(),{latestTrade:l}=y(),{ipfsPrefix:o}=(0,x.y)();if((0,f.useEffect)(()=>{l&&t(l)},[l]),(0,f.useEffect)(()=>{a&&(t(a),s(!0),setTimeout(()=>s(!1),700))},[a]),!e)return null;let{is_buy:i,twitter_username:u,pfp:d,sol_amount:h,token_amount:p,timestamp:w,mint:b,symbol:j,image_uri:E,user:A,profile_image:T,username:_}=e,R=(0,m.Py)(E,o);return(0,n.jsxs)("div",{className:(0,g.Z)("p-2 rounded flex items-center gap-1 text-sm",i?"bg-green-300":"bg-red-300",r&&"animate-shake"),children:[(0,n.jsx)(C.UserPreview,{username:_,profile_image:T,address:A}),i?"bought":"sold"," ",(0,k.s)(new S.BN(h)).toFixed(4)," SOL of",(0,n.jsxs)(c.default,{className:"hover:underline flex gap-2",href:"/coin/".concat(b),prefetch:!1,children:[j,(0,n.jsx)(v.default,{width:20,height:20,alt:"",src:R,className:"h-5 w-5 rounded-full"})]})]})};var A=r(63218);let T=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{className:"text-sm text-white hover:underline hover:font-bold",href:"https://twitter.com/pumpdotfun",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(o.default,{src:"/x-logo.png",alt:"X",width:16,height:16})}),(0,n.jsx)("a",{className:"text-sm text-white hover:underline hover:font-bold",href:"https://t.me/launchonpump",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(o.default,{src:"/telegram-logo.png",alt:"Telegram",width:16,height:16})}),(0,n.jsx)("a",{className:"text-sm text-white hover:underline hover:font-bold",href:"https://www.instagram.com/pumpdotfun_/",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(o.default,{src:"/instagram-logo.png",alt:"Instagram",width:16,height:16})}),(0,n.jsx)("a",{className:"text-sm text-white hover:underline hover:font-bold",href:"https://www.tiktok.com/@pump.fun",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(o.default,{src:"/tiktok-logo.png",alt:"TikTok",width:16,height:16})})]});var _=()=>{let e=(0,l.O_)(),{address:t,user:r}=(0,a.U)(),u=(0,s.Z)("only screen and (min-width : 768px)");return(0,n.jsxs)("nav",{className:"flex flex-wrap justify-between w-full p-2 items-center h-fit",children:[(0,n.jsxs)("div",{className:"flex items-center flex-wrap mr-4",children:[(0,n.jsx)(c.default,{href:"/board",className:"flex items-center",children:(0,n.jsx)(o.default,{src:"/logo.png",alt:"Pump",width:25,height:25})}),(0,n.jsxs)("div",{className:"flex flex-col gap-0.4 ml-6",children:[(0,n.jsxs)("div",{className:"flex gap-2",children:[e&&(0,n.jsx)(i.n,{}),(0,n.jsx)(c.default,{className:"text-sm text-white hover:underline hover:font-bold",href:"/advanced",rel:"noopener noreferrer",children:"[advanced]"})]}),(0,n.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,n.jsx)("a",{className:"text-sm text-white hover:underline hover:font-bold",href:"https://t.me/pumpfunsupport",target:"_blank",rel:"noopener noreferrer",children:"[support]"}),(0,n.jsx)(T,{})]})]}),u&&(0,n.jsxs)("div",{className:"hidden md:flex gap-2 ml-4",children:[(0,n.jsx)(E,{}),(0,n.jsx)("div",{className:"hidden lg:block",children:(0,n.jsx)(j,{})})]})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-0.4 items-end order-2 lg:order-3",children:[e&&(0,n.jsx)(A.w,{}),e&&t&&(0,n.jsxs)(c.default,{href:"/profile/".concat((null==r?void 0:r.username)||t),className:"text-white text-sm hover:underline relative",children:["[view profile]",!!(null==r?void 0:r.unread_notifs_count)&&(0,n.jsx)("div",{className:"text-white bg-red-500 px-1 rounded-full w-fit absolute top-[-6px] right-[-6px] text-xs",children:null==r?void 0:r.unread_notifs_count})]})]})]})}},61252:function(e,t,r){"use strict";r.d(t,{UserPreview:function(){return u}});var n=r(57437),s=r(94508),a=r(90225),l=r(88788),o=r(61994),c=r(27648),i=r(5753);let u=e=>{let{username:t,profile_image:r,address:u,devAddress:d,withBackground:f,big:h}=e,{ipfsPrefix:p}=(0,a.y)(),m=(0,s.Py)(r,p),x=(0,l.Q)((null==u?void 0:u.slice(0,6))||"anon");return(0,n.jsx)(c.default,{href:"/profile/".concat(t||u),children:(0,n.jsxs)("span",{className:"flex gap-1  items-center",children:[(0,n.jsx)(i.default,{src:m,width:h?64:16,height:h?64:16,alt:"",className:(0,o.Z)("rounded",h?"w-16":"w-4 h-4")}),(0,n.jsxs)("span",{className:(0,o.Z)("px-1 rounded hover:underline flex gap-1",f&&"text-black"),style:{backgroundColor:f?x:"transparent"},children:[t||(null==u?void 0:u.slice(0,6))||"anon"," ",d&&u.toLowerCase()===d.toLowerCase()&&"(dev)"]})]})})}},30781:function(e,t,r){"use strict";r.d(t,{qE:function(){return b},Q5:function(){return y},F$:function(){return j}});var n=r(57437),s=r(2265),a=r(73966),l=r(26606),o=r(61188),c=r(66840),i="Avatar",[u,d]=(0,a.b)(i),[f,h]=u(i),p=s.forwardRef((e,t)=>{let{__scopeAvatar:r,...a}=e,[l,o]=s.useState("idle");return(0,n.jsx)(f,{scope:r,imageLoadingStatus:l,onImageLoadingStatusChange:o,children:(0,n.jsx)(c.WV.span,{...a,ref:t})})});p.displayName=i;var m="AvatarImage",x=s.forwardRef((e,t)=>{let{__scopeAvatar:r,src:a,onLoadingStatusChange:i=()=>{},...u}=e,d=h(m,r),f=function(e){let[t,r]=s.useState("idle");return(0,o.b)(()=>{if(!e){r("error");return}let t=!0,n=new window.Image,s=e=>()=>{t&&r(e)};return r("loading"),n.onload=s("loaded"),n.onerror=s("error"),n.src=e,()=>{t=!1}},[e]),t}(a),p=(0,l.W)(e=>{i(e),d.onImageLoadingStatusChange(e)});return(0,o.b)(()=>{"idle"!==f&&p(f)},[f,p]),"loaded"===f?(0,n.jsx)(c.WV.img,{...u,ref:t,src:a}):null});x.displayName=m;var g="AvatarFallback",v=s.forwardRef((e,t)=>{let{__scopeAvatar:r,delayMs:a,...l}=e,o=h(g,r),[i,u]=s.useState(void 0===a);return s.useEffect(()=>{if(void 0!==a){let e=window.setTimeout(()=>u(!0),a);return()=>window.clearTimeout(e)}},[a]),i&&"loaded"!==o.imageLoadingStatus?(0,n.jsx)(c.WV.span,{...l,ref:t}):null});v.displayName=g;var w=r(94508);let b=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(p,{ref:t,className:(0,w.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...s})});b.displayName=p.displayName;let j=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(x,{ref:t,className:(0,w.cn)("aspect-square h-full w-full",r),...s})});j.displayName=x.displayName;let y=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(v,{ref:t,className:(0,w.cn)("flex h-full w-full items-center justify-center",r),...s})});y.displayName=v.displayName},88944:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(2265);function s(e){let[t,r]=(0,n.useState)();return(0,n.useEffect)(()=>{let t=window.matchMedia(e),n=()=>r(!!t.matches);return n(),t.addEventListener("change",n),()=>t.removeEventListener("change",n)},[e]),t}},36510:function(e,t,r){"use strict";r.d(t,{L:function(){return l}});var n=r(27771),s=r(9659),a=r(2265);let l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.J.CORE,[t,r]=(0,a.useState)(null),[l,o]=(0,a.useState)(null);return(0,n.q)(e),{latestCoinCreated:t,error:l}}},94743:function(e,t,r){"use strict";r.d(t,{o:function(){return c}});var n=r(27771),s=r(9659),a=r(76903),l=r(2265),o=r(70080);let c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.J.CORE,[t,r]=(0,l.useState)(null),[c,i]=(0,l.useState)(null),u=(0,l.useMemo)(()=>(0,n.q)(e),[e]),d=(0,l.useRef)(!1);return(0,l.useEffect)(()=>{if(d.current)return;let t="newCoinCreated-batched";console.log("Subscribing to",t),d.current=!0;let n=!0,s=e=>{var t;n&&(null==e?void 0:null===(t=e.subscribe)||void 0===t?void 0:t.data)&&r(e)},l=u.subscribe({query:(0,o.Ps)(a.L),variables:{name:t}}).subscribe({next:e=>{let{data:t}=e;t&&s(t)},error:t=>{console.error("Subscription error for instance ".concat(e,":"),t),n&&(i(t),d.current=!1)}});return()=>{n=!1,l&&(l.unsubscribe(),d.current=!1)}},[u,e]),{latestCoinCreatedBatched:t,error:c}}},1708:function(e,t,r){"use strict";r.d(t,{R:function(){return a}});var n=r(2265),s=r(88571);let a=e=>{let{url:t,subject:r,throttleMs:a=100,retryIntervalMs:l=2e3,maxRetryAttempts:o=5,enabled:c=!0}=e,[i,u]=(0,n.useState)(null),[d,f]=(0,n.useState)(null),h=(0,n.useRef)(null),p=(0,n.useRef)(null),m=(0,n.useRef)(0),x=(0,n.useRef)(null),g=(0,n.useRef)([]),v=(0,n.useRef)(!0),w=(0,n.useRef)(0),b=(0,n.useCallback)(()=>{v.current&&(null!==x.current&&cancelAnimationFrame(x.current),x.current=requestAnimationFrame(()=>{if(g.current.length>0){let e=Date.now();e-m.current>=a&&(u(g.current.pop()),m.current=e),g.current=[]}}))},[a]),j=(0,n.useCallback)(async()=>{if(c)try{f(null),console.log("Attempting to connect to NATS...");let e=await (0,s.$j)({servers:t,user:"subscriber",pass:"lW5a9y20NceF6AE9",timeout:1e4,waitOnFirstConnect:!0,reconnect:!0,reconnectTimeWait:l,maxReconnectAttempts:o});h.current=e,w.current=0,console.log("✅ Connected to NATS at ".concat(t));let n=e.subscribe(r);p.current=n,console.log("Subscribed to NATS subject: ".concat(r)),(async()=>{for await(let e of n){if(!v.current)return;try{let t=(0,s.bq)().decode(e.data);g.current.push(t),b()}catch(e){console.error("Failed to decode message:",e)}}})().catch(e=>{console.error("Subscription error:",e),f(e)}),e.closed().then(e=>{v.current&&(e?(console.error("NATS connection closed with error:",e),f(e),y()):console.log("NATS connection closed gracefully."))})}catch(e){console.error("NATS connection failed:",e),f(e),y()}},[t,r,l,o,b,c]),y=(0,n.useCallback)(()=>{if(w.current>=o){console.error("Max retry attempts reached. Giving up on reconnecting.");return}let e=l*2**w.current;w.current+=1,console.log("Retrying connection in ".concat(e,"ms (Attempt ").concat(w.current,"/").concat(o,")...")),setTimeout(()=>{v.current&&j()},e)},[l,o,j]),N=(0,n.useCallback)(()=>{var e,t;v.current&&(console.log("Manually reconnecting to NATS..."),null===(e=p.current)||void 0===e||e.unsubscribe(),p.current=null,null===(t=h.current)||void 0===t||t.close(),h.current=null,j())},[j]);return(0,n.useEffect)(()=>{let e=()=>{console.log("Cleaning up NATS subscription..."),v.current=!1,null!==x.current&&(cancelAnimationFrame(x.current),x.current=null),p.current&&(p.current.unsubscribe(),p.current=null),h.current&&(h.current.close(),h.current=null),u(null),f(null),g.current=[],m.current=0,w.current=0};return c?(v.current=!0,j()):e(),()=>{e()}},[j,c]),{latestMessage:i,error:d,reconnect:N}}},18976:function(e,t,r){"use strict";r.d(t,{A:function(){return a}});var n=r(93863),s=r(2265);let a=()=>{let[e,t]=(0,s.useState)(null),r=(0,n.s)();return(0,s.useEffect)(()=>{if(!r)return;let e=e=>{t(e)};return r.on("tradeCreated",e),()=>{r.off("tradeCreated",e)}},[r]),{latestTrade:e}}},27771:function(e,t,r){"use strict";r.d(t,{q:function(){return f}});var n=r(27412),s=r(56609),a=r(51587),l=r(66117),o=r(96749),c=r(17173),i=r(9659);let u={[i.J.ADVANCE]:{endpoint:"https://cvibx7pkrzevzesvdixnjd6zri.appsync-api.eu-west-1.amazonaws.com/graphql",region:"eu-west-1",apiKey:"da2-oxv3eh7osnd5pbsj7rhcxu5dou"},[i.J.CORE]:{endpoint:"https://prod.realtime.pump.fun/graphql",region:"us-east-1",apiKey:"da2-xolgs5smfnfqtbevb3o2uo2rpi"}},d={},f=e=>{if(d[e])return d[e];let t=u[e],r=(0,n.L)({uri:t.endpoint}),i=(0,o.createAuthLink)({url:t.endpoint,region:t.region,auth:{type:"API_KEY",apiKey:t.apiKey}}),f=(0,c.createSubscriptionHandshakeLink)({url:t.endpoint,region:t.region,auth:{type:"API_KEY",apiKey:t.apiKey}}),h=(0,s.V)(e=>{let{query:t}=e,r=t.definitions[0];return"OperationDefinition"===r.kind&&"subscription"===r.operation},f,i.concat(r)),p=new a.f({link:h,cache:new l.h});return d[e]=p,p}},9659:function(e,t,r){"use strict";r.d(t,{J:function(){return n}});let n={ADVANCE:"advance",CORE:"core"}},93863:function(e,t,r){"use strict";r.d(t,{SocketProvider:function(){return u},s:function(){return i}});var n=r(57437),s=r(54559),a=r(53974),l=r(2265),o=r(68680);let c=(0,l.createContext)(null),i=()=>(0,l.useContext)(c),u=e=>{let{children:t}=e,r=(0,a.O_)(),i=(0,l.useMemo)(()=>r?(0,o.ZP)((0,s.o)()||"",{transports:["websocket"]}):null,[r]);return(0,n.jsx)(c.Provider,{value:i,children:t})}},76903:function(e,t,r){"use strict";r.d(t,{L:function(){return n}});let n="subscription Subscribe($name: String!) {\n  subscribe(name: $name) {\n    name\n    data\n    __typename\n  }\n}\n"},88788:function(e,t,r){"use strict";r.d(t,{Q:function(){return n}});let n=e=>{let t=0;for(let r=0;r<e.length;r++)t=e.charCodeAt(r)+((t<<5)-t),t&=t;let r=(t=Math.abs(t))%128+127,n=(t>>8)%128+127,s=(t>>16)%128+127;return"#".concat(r.toString(16).padStart(2,"0")).concat(n.toString(16).padStart(2,"0")).concat(s.toString(16).padStart(2,"0"))}}},function(e){e.O(0,[3814,8310,3125,4335,9571,7148,2420,1787,2864,6530,7110,6137,2972,935,8001,2694,7917,6008,5726,8170,3974,9281,346,8680,8651,7173,4875,4524,393,9409,2971,2117,1744],function(){return e(e.s=17620)}),_N_E=e.O()}]);