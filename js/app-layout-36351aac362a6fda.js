(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{35883:function(){},89214:function(){},85568:function(){},52361:function(){},94616:function(){},20593:function(e,t,n){Promise.resolve().then(n.bind(n,1952)),Promise.resolve().then(n.bind(n,97761)),Promise.resolve().then(n.bind(n,4349)),Promise.resolve().then(n.t.bind(n,88003,23)),Promise.resolve().then(n.t.bind(n,89042,23)),Promise.resolve().then(n.t.bind(n,47960,23)),Promise.resolve().then(n.t.bind(n,36539,23)),Promise.resolve().then(n.bind(n,90225)),Promise.resolve().then(n.bind(n,66320)),Promise.resolve().then(n.bind(n,71589)),Promise.resolve().then(n.bind(n,55774)),Promise.resolve().then(n.bind(n,72650)),Promise.resolve().then(n.bind(n,86083)),Promise.resolve().then(n.bind(n,93863)),Promise.resolve().then(n.bind(n,23715)),Promise.resolve().then(n.bind(n,70548)),Promise.resolve().then(n.bind(n,97233))},66320:function(e,t,n){"use strict";n.d(t,{JitoProvider:function(){return c},c:function(){return i}});var r=n(57437),a=n(54559),o=n(2265);let s=(0,o.createContext)({useJito:!1}),i=()=>(0,o.useContext)(s),c=e=>{let{children:t}=e,[n,i]=(0,o.useState)(!1),[c,l]=(0,o.useState)(),u=async()=>{let{jitoTipAccount:e}=await fetch("".concat((0,a.o)(),"/send-transaction/jito-tip-account")).then(e=>e.json());l(e)};return(0,o.useEffect)(()=>{u(),.01>Math.random()&&i(!0)},[]),(0,r.jsx)(s.Provider,{value:{tipAccount:n?c:"HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY",useJito:n},children:t})}},55774:function(e,t,n){"use strict";n.d(t,{default:function(){return d}});var r=n(57437),a=n(99376),o=n(2265),s=n(72694),i=()=>{let e=(0,a.usePathname)(),t=(0,s.O_)(),[n,i]=(0,s._)("consentModeBanner",()=>!e.startsWith("/mobile")),[c,l]=(0,s._)("consentMode",{security_storage:"granted",functionality_storage:"granted",personalization_storage:"granted",ad_storage:"denied",analytics_storage:"granted"}),[u,d]=(0,o.useState)({necessary:!0,analytics:!0,preferences:!0,marketing:!1}),m=function(){t&&window&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push(arguments))};function f(e){let t={security_storage:e.necessary?"granted":"denied",functionality_storage:e.necessary?"granted":"denied",personalization_storage:e.preferences?"granted":"denied",ad_storage:e.marketing?"granted":"denied",analytics_storage:e.analytics?"granted":"denied"};m("consent","update",t),l(t),i(!1)}m("consent","default",c),(0,o.useEffect)(()=>{0!==Object.entries(c).length&&p()},[c]);let p=()=>{d({necessary:(null==c?void 0:c.functionality_storage)==="granted",analytics:"granted"===c.analytics_storage,preferences:"granted"===c.personalization_storage,marketing:"granted"===c.ad_storage})},h=e=>{let t=e.target.name;console.log("setValues",e.target.name,e.target.checked);let n={[t]:e.target.checked};d({...u,...n})};return n&&t&&(0,r.jsxs)("div",{className:"fixed bottom-0 w-full text-white bg-slate-800 p-4 text-sm text-center z-10",children:[(0,r.jsx)("h3",{className:"text-lg",children:"Cookie settings"}),(0,r.jsx)("p",{children:"We use cookies to provide you with the best possible experience. They also allow us to analyze user behavior in order to constantly improve the website for you."}),(0,r.jsxs)("div",{className:"flex justify-center gap-4 my-3",children:[(0,r.jsx)("button",{id:"btn-accept-all",className:"bg-green-600 py-2 px-3 rounded text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",onClick:()=>{f({necessary:!0,analytics:!0,preferences:!0,marketing:!0})},children:"Accept All"}),(0,r.jsx)("button",{id:"btn-accept-some",className:"bg-slate-600 py-2 px-3 rounded text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",onClick:()=>{f(u)},children:"Accept Selection"}),(0,r.jsx)("button",{id:"btn-reject-all",className:"bg-slate-600 py-2 px-3 rounded text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",onClick:()=>{f({necessary:!1,analytics:!1,preferences:!1,marketing:!1})},children:"Reject All"})]}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-3 items-center justify-center cookie-consent-options",children:[(0,r.jsxs)("label",{className:"flex",children:[(0,r.jsx)("input",{className:"mr-2",id:"consent-necessary",type:"checkbox",name:"necessary",checked:u.necessary,disabled:!0}),"Necessary"]}),(0,r.jsxs)("label",{className:"flex",children:[(0,r.jsx)("input",{className:"mr-2",id:"consent-analytics",type:"checkbox",name:"analytics",checked:u.analytics,onChange:e=>h(e)}),"Analytics"]}),(0,r.jsxs)("label",{className:"flex",children:[(0,r.jsx)("input",{className:"mr-2",id:"consent-preferences",type:"checkbox",name:"preferences",checked:u.preferences,onChange:e=>h(e)}),"Preferences"]})]})]})},c=n(13786),l=n(89736);let u={gtmId:"GTM-WPXVCX8X"};function d(e){let{children:t}=e;return(0,r.jsxs)(l.rr,{appId:"cm1p2gzot03fzqty5xzgjgthq",clientId:void 0,config:{appearance:{theme:"dark",accentColor:"#81c784",logo:"https://pump.fun/logo.png",walletChainType:"solana-only"},embeddedWallets:{createOnLogin:"users-without-wallets"}},children:[t,(0,r.jsx)(i,{}),(0,r.jsx)(c.GoogleTagManager,{...u})]})}},93863:function(e,t,n){"use strict";n.d(t,{SocketProvider:function(){return u},s:function(){return l}});var r=n(57437),a=n(54559),o=n(53974),s=n(2265),i=n(68680);let c=(0,s.createContext)(null),l=()=>(0,s.useContext)(c),u=e=>{let{children:t}=e,n=(0,o.O_)(),l=(0,s.useMemo)(()=>n?(0,i.ZP)((0,a.o)()||"",{transports:["websocket"]}):null,[n]);return(0,r.jsx)(c.Provider,{value:l,children:t})}},23715:function(e,t,n){"use strict";n.d(t,{O:function(){return i},SolPriceProvider:function(){return c}});var r=n(57437),a=n(54559),o=n(2265);let s=(0,o.createContext)({solPrice:0}),i=()=>(0,o.useContext)(s),c=e=>{let{children:t}=e,[n,i]=(0,o.useState)(0),c=async()=>{let{solPrice:e}=await fetch("".concat((0,a.o)(),"/sol-price")).then(e=>e.json());i(e)};return(0,o.useEffect)(()=>{c();let e=setInterval(()=>{c()},12e4);return()=>clearInterval(e)},[]),(0,r.jsx)(s.Provider,{value:{solPrice:n},children:t})}},70548:function(e,t,n){"use strict";n.d(t,{UserBalancesProvider:function(){return d},j:function(){return u}});var r=n(57437),a=n(1197),o=n(13816),s=n(64024),i=n(2265),c=n(72650);let l=(0,i.createContext)({balances:[],fetchAllTokenBalances:async()=>{},updateBalance:async(e,t)=>{},getMintBalance:e=>null}),u=()=>(0,i.useContext)(l),d=e=>{let{children:t}=e,{address:n}=(0,c.U)(),{connection:u}=(0,o.R)(),[d,m]=(0,i.useState)([]),f=async()=>{n&&m((await u.getParsedTokenAccountsByOwner(new s.PublicKey(n),{programId:a.H_})).value.filter(e=>{var t,n,r;return(null===(r=e.account.data.parsed)||void 0===r?void 0:null===(n=r.info)||void 0===n?void 0:null===(t=n.tokenAmount)||void 0===t?void 0:t.amount)>8e8}).map(e=>{var t,n,r,a,o;return{mint:null===(n=e.account.data.parsed)||void 0===n?void 0:null===(t=n.info)||void 0===t?void 0:t.mint,balance:null===(o=e.account.data.parsed)||void 0===o?void 0:null===(a=o.info)||void 0===a?void 0:null===(r=a.tokenAmount)||void 0===r?void 0:r.amount}}))},p=async(e,t)=>{m(d.map(n=>n.mint===e?{mint:e,balance:t}:n))};return(0,i.useEffect)(()=>{n&&f()},[n]),(0,r.jsx)(l.Provider,{value:{balances:d,fetchAllTokenBalances:f,updateBalance:p,getMintBalance:e=>{if(!d||!d.length)return null;let t=d.find(t=>t.mint===e);return t?t.balance:null}},children:t})}},97233:function(e,t,n){"use strict";n.d(t,{SolanaWalletProvider:function(){return N}});var r=n(57437),a=n(49089),o=n(86454),s=n(68757),i=n(54968),c=n(39110),l=n(4298),u=n(11867),d=n(25223),m=n(54017),f=n(96931),p=n(58030),h=n(6355),g=n(28179),v=n(38700),y=n(64708),b=n(13861),x=n(74007),w=n(1061),P=n(85485),k=n(42225),j=n(53974),C=n(2265),_=n(97048);let N=e=>{let{children:t}=e,n=(0,j.O_)(),N="https://pump-fe.helius-rpc.com?api-key=1b8db865-a5a1-4535-9aec-01061440523b",B=(0,C.useMemo)(()=>[new l.O,new u.e,new d.X,new m.B,new f.P({endpoint:N}),new p.r,new h.A({endpoint:N}),new g.y({endpoint:N}),new v.T({endpoint:N}),new y.A({endpoint:N}),new b.U({endpoint:N}),new x.uG({endpoint:N}),new w.V,new P.p,new k.Z({network:o.Q.Mainnet,options:{projectId:"dd9aa8f3-7b94-423f-98c9-feda0a668e2e=8303e8dad67459c5373e4a160b89deb0740318496a2a8a4d53a0d8e53b8dcb09",metadata:{name:"Pump",description:"Launch a coin that is instantly tradable without having to seed liquidity. Deploy a coin on Solana for under 2$ in one click.",url:"https://pump.fun/",icons:["https://pump.fun/_next/image?url=%2Flogo.png&w=64&q=75"]}}})],[]);return(0,C.useEffect)(()=>{if((0,s.H)()&&_.tq){let e=setInterval(()=>{localStorage.removeItem("walletName")},1e3);return()=>clearInterval(e)}},[n]),(0,r.jsx)(i.U,{endpoint:N,config:{commitment:a.S0},children:(0,r.jsx)(c.n,{wallets:B,autoConnect:!0,children:t})})}},49089:function(e,t,n){"use strict";n.d(t,{Nm:function(){return g},RZ:function(){return m},S0:function(){return o},WX:function(){return i},YT:function(){return l},Ys:function(){return u},b0:function(){return f},b8:function(){return v},kn:function(){return p},r4:function(){return c},sM:function(){return d},w6:function(){return s}});var r=n(32308),a=n(64024);let o="confirmed",s=1e5,i=26e4,c=1e5,l=5e3,u=1,d=1.05,m=1;async function f(e,t,n){return new a.VersionedTransaction(new a.TransactionMessage({payerKey:e,instructions:t,recentBlockhash:n}).compileToV0Message())}async function p(e,t){if(t.some(e=>e.programId.equals(a.ComputeBudgetProgram.programId)))throw Error("ComputeBudgetInstructions present in simulatedInstructions");let n=[a.ComputeBudgetProgram.setComputeUnitLimit({units:14e5}),a.ComputeBudgetProgram.setComputeUnitPrice({microLamports:1})];return n.push(...t),await f(e,n,"11111111111111111111111111111111")}async function h(e,t,n){try{var r;let a=await e.simulateTransaction(t,{sigVerify:!1,replaceRecentBlockhash:!0}),o=a.value;if(o.err)return console.error("failed to simulate transaction",a),n;return null!==(r=o.unitsConsumed)&&void 0!==r?r:n}catch(e){return console.error("failed to simulate transaction",e),n}}async function g(e,t){try{var n;let a=await fetch(e.rpcEndpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:"1",method:"getPriorityFeeEstimate",params:[{transaction:r.bs58.encode(t.serialize()),options:{priorityLevel:"High"}}]})}).then(e=>e.json());if(a.error)throw Error(a.error.message);let o=Math.floor(Math.min(Math.max((null==a?void 0:null===(n=a.result)||void 0===n?void 0:n.priorityFeeEstimate)||0,s),5e7));return console.log("priority fee estimate",o),o}catch(e){console.error("failed to fetch priority fee",e)}return s}async function v(e,t,n,r,o){let s=await p(t,n),[i,c]=await Promise.all([h(e,s,r),g(e,s)]);return[a.ComputeBudgetProgram.setComputeUnitLimit({units:i*o}),a.ComputeBudgetProgram.setComputeUnitPrice({microLamports:c}),...n]}},47960:function(){}},function(e){e.O(0,[2838,2732,1963,3814,7229,1866,2864,7110,935,2694,7917,3974,9281,8680,6435,1792,5960,2971,2117,1744],function(){return e(e.s=20593)}),_N_E=e.O()}]);