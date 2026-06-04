const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/clashToForgeMapper-C2ummYEj.js","assets/hpAttributeMapping-ZQP7zQoG.js"])))=>i.map(i=>d[i]);
import{C as e,D as t,E as n,N as r,O as i,P as a,S as o,T as s,_ as c,b as l,c as u,d,f,g as p,h as m,j as h,k as g,l as _,m as v,o as y,p as b,s as x,t as S,u as C,v as w,w as T,x as E,y as D}from"./defaultgamesystem-CLGH9eTD.js";import{_ as O,c as k,d as A,f as ee,g as te,h as ne,i as re,m as j,n as ie,o as ae,p as M,r as oe,s as se,u as ce}from"./hpAttributeMapping-ZQP7zQoG.js";import{$ as le,A as ue,B as de,C as fe,Ct as pe,D as me,Dt as N,E as P,Et as he,F as ge,G as _e,H as ve,I as F,J as ye,K as I,L as be,M as xe,N as Se,O as Ce,Ot as we,P as Te,Q as Ee,R as De,S as Oe,St as ke,Tt as Ae,U as je,V as Me,W as Ne,X as Pe,Y as Fe,Z as Ie,_ as Le,_t as Re,at as ze,b as Be,bt as Ve,c as He,ct as Ue,d as We,dt as Ge,et as Ke,f as qe,ft as Je,g as Ye,gt as Xe,h as Ze,ht as Qe,it as $e,j as et,k as tt,kt as L,l as R,lt as z,m as nt,mt as rt,n as it,nt as B,ot as at,pt as ot,q as st,r as ct,rt as lt,s as ut,st as dt,tt as ft,u as pt,ut as mt,v as ht,vt as gt,w as _t,wt as vt,xt as yt,y as bt,yt as xt,z as St}from"./unitCollectionRemote-BsC1cTL2.js";import{t as Ct}from"./Translation-KDr0OcYe.js";var wt=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},Tt=(e=>e?wt(e):wt),V=a(h(),1),Et=e=>e;function Dt(e,t=Et){let n=V.useSyncExternalStore(e.subscribe,V.useCallback(()=>t(e.getState()),[e,t]),V.useCallback(()=>t(e.getInitialState()),[e,t]));return V.useDebugValue(n),n}var Ot=e=>{let t=Tt(e),n=e=>Dt(t,e);return Object.assign(n,t),n},kt=(e=>e?Ot(e):Ot),At=a(g(),1);const H=kt(e=>({cacheReady:!1,setCacheReady:t=>e({cacheReady:t}),sceneReady:!1,setSceneReady:t=>e({sceneReady:t}),items:[],setItems:t=>e({items:t}),localItems:[],setLocalItems:t=>e({localItems:t}),sceneMetadata:{},setSceneMetadata:t=>e({sceneMetadata:{...t}}),roomMetadata:{},setRoomMetadata:t=>e({roomMetadata:{...t}}),gridDpi:150,setGridDpi:t=>e({gridDpi:t}),playerData:void 0,setPlayerData:t=>e({playerData:t}),partyData:[],setPartyData:t=>e({partyData:t}),systemData:null,setSystemData:t=>e({systemData:t})}));var jt=0;const Mt=kt(e=>({messages:[],initialized:!1,addMessage:t=>{let n=new Date,r=n.getHours(),i=n.getMinutes(),a=r>=12?`PM`:`AM`,o=`${r%12||12}:${i<10?`0${i}`:i} ${a}`;e(e=>({messages:[...e.messages,{id:jt++,text:t,timestamp:o}]}))},setInitialized:t=>e({initialized:t})})),Nt=()=>{Mt.getState().initialized||(T.broadcast.onMessage(`${O.EXTENSIONID}/chatlog`,e=>{let t=Mt.getState().addMessage;typeof e.data==`string`?t(e.data):typeof e.data==`object`&&e.data.message&&t(e.data.message)}),Mt.getState().setInitialized(!0))};var U=l(),Pt=`${O.EXTENSIONID}/chatlog`,Ft=`${O.EXTENSIONID}/roll-notification`;function It({children:e}){let t=H(e=>e.setItems),n=H(e=>e.setLocalItems),r=H(e=>e.setSceneMetadata),i=H(e=>e.setRoomMetadata),a=H(e=>e.setGridDpi),o=H(e=>e.setPlayerData),s=H(e=>e.setPartyData),c=H(e=>e.setSceneReady),l=H(e=>e.setCacheReady);return(0,V.useEffect)(()=>{let e=(e,t)=>{let n=t[M.ENABLE_CONSOLE_LOG];typeof n==`boolean`&&N.setEnabled(n)},u=e=>{L(e);let{sceneMetadata:t,roomMetadata:n}=H.getState(),r=n,i=r[M.ENABLE_OBR_NOTIFICATION];if(r[M.SHOW_NOTIFICATION_TO_ALL]===!0){T.broadcast.sendMessage(Pt,{message:e},{destination:`ALL`}),i===!0&&T.broadcast.sendMessage(Ft,{message:e},{destination:`ALL`});return}Mt.getState().addMessage(e),i===!0&&T.notification.show(e,`SUCCESS`)},d=({explicitMessage:e,tokenName:t,actionName:n,total:r})=>{if(typeof e==`string`&&e.trim().length>0)return e;let i=t||`Unknown`,a=n||`Action`;return typeof r==`number`&&Number.isFinite(r)?`${i} rolled ${a} for ${r}!`:`${i} rolled ${a}.`};Nt();let f=T.broadcast.onMessage(Ft,e=>{let t=e.data,n=typeof t?.message==`string`?t.message:null;n&&T.notification.show(n,`SUCCESS`)});yt(e=>{let t=Ve(e.rollHtml);u(d({tokenName:e.senderName,actionName:e.actionName,total:t}))}),pe(e=>{u(d({explicitMessage:e.message}))}),ke(e=>{u(d({tokenName:e.playerName,actionName:e.result.diceNotation,total:e.result.totalValue}))}),vt(e=>{let t=e.output.trim();u(t.length>0?`${e.senderName} rolled ${e.actionName} for ${e.total}. ${t}`:d({tokenName:e.senderName,actionName:e.actionName,total:e.total}))});let p,m,h,g,_,v,y,b,x=async()=>{let[c,u,d,f,p,x,S,C,w,E,D,O,k]=await Promise.all([T.scene.items.getItems(),T.scene.local.getItems(),T.scene.getMetadata(),T.room.getMetadata(),T.scene.grid.getDpi(),T.party.getPlayers(),T.player.getSelection(),T.player.getColor(),T.player.getRole(),T.player.getConnectionId(),T.player.getId(),T.player.getMetadata(),T.player.getName()]);t(c),n(u),r(d),i(f),e(d,f),a(p),o({id:D,name:k,connectionId:E,role:w,color:C,selection:S,metadata:O}),s(x),m=T.scene.items.onChange(t),h=T.scene.local.onChange(n),v=T.scene.grid.onChange(e=>a(e.dpi)),y=T.player.onChange(o),b=T.party.onChange(s),g=T.scene.onMetadataChange(t=>{r(t),e(t,H.getState().roomMetadata)}),_=T.room.onMetadataChange(t=>{i(t),e(H.getState().sceneMetadata,t)}),l(!0),N.log(`CacheManager: Cache is ready`)};return T.onReady(async()=>{let e=await T.scene.isReady();c(e),e&&(N.log(`Scene is ready on initial load, syncing cache...`),await x()),p=T.scene.onReadyChange(async e=>{c(e),e?(N.log(`Scene became ready, syncing cache...`),await x()):(N.log(`Scene is no longer ready, clearing cache...`),l(!1))})}),()=>{p?.(),m?.(),h?.(),g?.(),_?.(),v?.(),y?.(),b?.(),f?.()}},[c,l,t,n,r,i,a,o,s]),(0,U.jsx)(U.Fragment,{children:e})}var Lt=(0,V.createContext)(void 0);const Rt=({children:e})=>{let[t,n]=(0,V.useState)(p),r=(0,V.useCallback)((e,t,r,i,a)=>{n(n=>n.PRIMARY===e&&n.OFFSET===t&&n.BACKGROUND===r&&n.BORDER===i&&n.BACKGROUND_URL===(a||void 0)?n:c(e,t,r,i,a))},[]);return(0,U.jsx)(Lt.Provider,{value:{theme:t,setTheme:n,updateThemeFromSystem:r},children:e})},zt=()=>{let e=(0,V.useContext)(Lt);if(!e)throw Error(`useForgeTheme must be used within a ThemeProvider`);return e};var Bt=(0,V.createContext)({});function Vt(e){let t=(0,V.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Ht=typeof window<`u`,Ut=Ht?V.useLayoutEffect:V.useEffect,Wt=(0,V.createContext)(null);function Gt(e,t){e.indexOf(t)===-1&&e.push(t)}function Kt(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var qt=(e,t,n)=>n>t?t:n<e?e:n,Jt={},Yt=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Xt(e){return typeof e==`object`&&!!e}var Zt=e=>/^0[^.\s]+$/u.test(e);function Qt(e){let t;return()=>(t===void 0&&(t=e()),t)}var $t=e=>e,en=(e,t)=>n=>t(e(n)),tn=(...e)=>e.reduce(en),nn=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},rn=class{constructor(){this.subscriptions=[]}add(e){return Gt(this.subscriptions,e),()=>Kt(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},an=e=>e*1e3,on=e=>e/1e3;function sn(e,t){return t?e*(1e3/t):0}var cn=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,ln=1e-7,un=12;function dn(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=cn(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>ln&&++s<un);return o}function fn(e,t,n,r){if(e===t&&n===r)return $t;let i=t=>dn(t,0,1,e,n);return e=>e===0||e===1?e:cn(i(e),t,r)}var pn=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,mn=e=>t=>1-e(1-t),hn=fn(.33,1.53,.69,.99),gn=mn(hn),_n=pn(gn),vn=e=>(e*=2)<1?.5*gn(e):.5*(2-2**(-10*(e-1))),W=e=>1-Math.sin(Math.acos(e)),yn=mn(W),bn=pn(W),xn=fn(.42,0,1,1),Sn=fn(0,0,.58,1),Cn=fn(.42,0,.58,1),wn=e=>Array.isArray(e)&&typeof e[0]!=`number`,Tn=e=>Array.isArray(e)&&typeof e[0]==`number`,En={linear:$t,easeIn:xn,easeInOut:Cn,easeOut:Sn,circIn:W,circInOut:bn,circOut:yn,backIn:gn,backInOut:_n,backOut:hn,anticipate:vn},Dn=e=>typeof e==`string`,On=e=>{if(Tn(e)){e.length;let[t,n,r,i]=e;return fn(t,n,r,i)}else if(Dn(e))return En[e],`${e}`,En[e];return e},kn=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],An={value:null,addProjectionMetrics:null};function jn(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.has(e)||s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),t&&An.value&&An.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Mn=40;function Nn(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=kn.reduce((e,n)=>(e[n]=jn(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Jt.useManualTiming?i.timestamp:performance.now();n=!1,Jt.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,Mn),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:kn.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<kn.length;t++)o[kn[t]].cancel(e)},state:i,steps:o}}var{schedule:G,cancel:Pn,state:Fn,steps:In}=Nn(typeof requestAnimationFrame<`u`?requestAnimationFrame:$t,!0),Ln;function Rn(){Ln=void 0}var zn={now:()=>(Ln===void 0&&zn.set(Fn.isProcessing||Jt.useManualTiming?Fn.timestamp:performance.now()),Ln),set:e=>{Ln=e,queueMicrotask(Rn)}},Bn={layout:0,mainThread:0,waapi:0},Vn=e=>t=>typeof t==`string`&&t.startsWith(e),Hn=Vn(`--`),Un=Vn(`var(--`),Wn=e=>Un(e)?Gn.test(e.split(`/*`)[0].trim()):!1,Gn=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Kn(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var qn={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Jn={...qn,transform:e=>qt(0,1,e)},Yn={...qn,default:1},Xn=e=>Math.round(e*1e5)/1e5,Zn=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Qn(e){return e==null}var $n=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,er=(e,t)=>n=>!!(typeof n==`string`&&$n.test(n)&&n.startsWith(e)||t&&!Qn(n)&&Object.prototype.hasOwnProperty.call(n,t)),tr=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Zn);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},nr=e=>qt(0,255,e),rr={...qn,transform:e=>Math.round(nr(e))},ir={test:er(`rgb`,`red`),parse:tr(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+rr.transform(e)+`, `+rr.transform(t)+`, `+rr.transform(n)+`, `+Xn(Jn.transform(r))+`)`};function ar(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var or={test:er(`#`),parse:ar,transform:ir.transform},sr=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),cr=sr(`deg`),lr=sr(`%`),K=sr(`px`),ur=sr(`vh`),dr=sr(`vw`),fr=(()=>({...lr,parse:e=>lr.parse(e)/100,transform:e=>lr.transform(e*100)}))(),pr={test:er(`hsl`,`hue`),parse:tr(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+lr.transform(Xn(t))+`, `+lr.transform(Xn(n))+`, `+Xn(Jn.transform(r))+`)`},mr={test:e=>ir.test(e)||or.test(e)||pr.test(e),parse:e=>ir.test(e)?ir.parse(e):pr.test(e)?pr.parse(e):or.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?ir.transform(e):pr.transform(e),getAnimatableNone:e=>{let t=mr.parse(e);return t.alpha=0,mr.transform(t)}},hr=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function gr(e){return isNaN(e)&&typeof e==`string`&&(e.match(Zn)?.length||0)+(e.match(hr)?.length||0)>0}var _r=`number`,vr=`color`,yr=`var`,br=`var(`,xr="${}",Sr=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Cr(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Sr,e=>(mr.test(e)?(r.color.push(a),i.push(vr),n.push(mr.parse(e))):e.startsWith(br)?(r.var.push(a),i.push(yr),n.push(e)):(r.number.push(a),i.push(_r),n.push(parseFloat(e))),++a,xr)).split(xr),indexes:r,types:i}}function wr(e){return Cr(e).values}function Tr(e){let{split:t,types:n}=Cr(e),r=t.length;return e=>{let i=``;for(let a=0;a<r;a++)if(i+=t[a],e[a]!==void 0){let t=n[a];t===_r?i+=Xn(e[a]):t===vr?i+=mr.transform(e[a]):i+=e[a]}return i}}var Er=e=>typeof e==`number`?0:mr.test(e)?mr.getAnimatableNone(e):e;function Dr(e){let t=wr(e);return Tr(e)(t.map(Er))}var Or={test:gr,parse:wr,createTransformer:Tr,getAnimatableNone:Dr};function kr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ar({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=kr(s,r,e+1/3),a=kr(s,r,e),o=kr(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function jr(e,t){return n=>n>0?t:e}var q=(e,t,n)=>e+(t-e)*n,Mr=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Nr=[or,ir,pr],Pr=e=>Nr.find(t=>t.test(e));function Fr(e){let t=Pr(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===pr&&(n=Ar(n)),n}var Ir=(e,t)=>{let n=Fr(e),r=Fr(t);if(!n||!r)return jr(e,t);let i={...n};return e=>(i.red=Mr(n.red,r.red,e),i.green=Mr(n.green,r.green,e),i.blue=Mr(n.blue,r.blue,e),i.alpha=q(n.alpha,r.alpha,e),ir.transform(i))},Lr=new Set([`none`,`hidden`]);function Rr(e,t){return Lr.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function zr(e,t){return n=>q(e,t,n)}function Br(e){return typeof e==`number`?zr:typeof e==`string`?Wn(e)?jr:mr.test(e)?Ir:Wr:Array.isArray(e)?Vr:typeof e==`object`?mr.test(e)?Ir:Hr:jr}function Vr(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Br(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Hr(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Br(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Ur(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Wr=(e,t)=>{let n=Or.createTransformer(t),r=Cr(e),i=Cr(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Lr.has(e)&&!i.values.length||Lr.has(t)&&!r.values.length?Rr(e,t):tn(Vr(Ur(r,i),i.values),n):(`${e}${t}`,jr(e,t))};function Gr(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?q(e,t,n):Br(e)(e,t)}var Kr=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>G.update(t,e),stop:()=>Pn(t),now:()=>Fn.isProcessing?Fn.timestamp:zn.now()}},qr=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Jr=2e4;function Yr(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Xr(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Yr(r),Jr);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:on(i)}}var Zr=5;function Qr(e,t,n){let r=Math.max(t-Zr,0);return sn(n-e(r),t-r)}var J={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},$r=.001;function ei({duration:e=J.duration,bounce:t=J.bounce,velocity:n=J.velocity,mass:r=J.mass}){let i,a;J.maxDuration;let o=1-t;o=qt(J.minDamping,J.maxDamping,o),e=qt(J.minDuration,J.maxDuration,on(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=ri(t,o),c=Math.exp(-i);return $r-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=ri(t**2,o);return(-i(t)+$r>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-$r+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=ni(i,a,s);if(e=an(e),isNaN(c))return{stiffness:J.stiffness,damping:J.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var ti=12;function ni(e,t,n){let r=n;for(let n=1;n<ti;n++)r-=e(r)/t(r);return r}function ri(e,t){return e*Math.sqrt(1-t*t)}var ii=[`duration`,`bounce`],ai=[`stiffness`,`damping`,`mass`];function oi(e,t){return t.some(t=>e[t]!==void 0)}function si(e){let t={velocity:J.velocity,stiffness:J.stiffness,damping:J.damping,mass:J.mass,isResolvedFromDuration:!1,...e};if(!oi(e,ai)&&oi(e,ii))if(e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*qt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:J.mass,stiffness:i,damping:a}}else{let n=ei(e);t={...t,...n,mass:J.mass},t.isResolvedFromDuration=!0}return t}function ci(e=J.visualDuration,t=J.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=si({...n,velocity:-on(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=on(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?J.restSpeed.granular:J.restSpeed.default,i||=v?J.restDelta.granular:J.restDelta.default;let y;if(h<1){let e=ri(_,h);y=t=>o-Math.exp(-h*_*t)*((m+h*_*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}else if(h===1)y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}let b={calculatedDuration:p&&d||null,next:e=>{let t=y(e);if(p)s.done=e>=d;else{let n=e===0?m:0;h<1&&(n=e===0?an(m):Qr(y,e,t));let a=Math.abs(n)<=r,c=Math.abs(o-t)<=i;s.done=a&&c}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Yr(b),Jr),t=qr(t=>b.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return b}ci.applyToOptions=e=>{let t=Xr(e,100,ci);return e.ease=t.ease,e.duration=an(t.duration),e.type=`keyframes`,e};function li({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=ci({keyframes:[f.value,m(f.value)],velocity:Qr(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function ui(e,t,n){let r=[],i=n||Jt.mix||Gr,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=tn(Array.isArray(t)?t[n]||$t:t,a)),r.push(a)}return r}function di(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=ui(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=nn(e[r],e[r+1],n);return s[r](i)};return n?t=>l(qt(e[0],e[a-1],t)):l}function fi(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=nn(0,t,r);e.push(q(n,1,i))}}function pi(e){let t=[0];return fi(t,e.length-1),t}function mi(e,t){return e.map(e=>e*t)}function hi(e,t){return e.map(()=>t||Cn).splice(0,e.length-1)}function gi({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=wn(r)?r.map(On):On(r),a={done:!1,value:t[0]},o=di(mi(n&&n.length===t.length?n:pi(t),e),t,{ease:Array.isArray(i)?i:hi(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var _i=e=>e!==null;function vi(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(_i),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var yi={decay:li,inertia:li,tween:gi,keyframes:gi,spring:ci};function bi(e){typeof e.type==`string`&&(e.type=yi[e.type])}var xi=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},Si=e=>e/100,Ci=class extends xi{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==zn.now()&&this.tick(zn.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},Bn.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;bi(e);let{type:t=gi,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||gi;s!==gi&&typeof o[0]!=`number`&&(this.mixKeyframes=tn(Si,Gr(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Yr(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=qt(0,1,n)*o}let b=_?{done:!1,value:l[0]}:y.next(v);i&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==li&&(b.value=vi(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return on(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+on(e)}get time(){return on(this.currentTime)}set time(e){e=an(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(zn.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=on(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Kr,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(zn.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,Bn.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function wi(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Ti=e=>e*180/Math.PI,Ei=e=>Oi(Ti(Math.atan2(e[1],e[0]))),Di={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ei,rotateZ:Ei,skewX:e=>Ti(Math.atan(e[1])),skewY:e=>Ti(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Oi=e=>(e%=360,e<0&&(e+=360),e),ki=Ei,Ai=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),ji=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Mi={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ai,scaleY:ji,scale:e=>(Ai(e)+ji(e))/2,rotateX:e=>Oi(Ti(Math.atan2(e[6],e[5]))),rotateY:e=>Oi(Ti(Math.atan2(-e[2],e[0]))),rotateZ:ki,rotate:ki,skewX:e=>Ti(Math.atan(e[4])),skewY:e=>Ti(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Ni(e){return e.includes(`scale`)?1:0}function Pi(e,t){if(!e||e===`none`)return Ni(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Mi,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Di,i=t}if(!i)return Ni(t);let a=r[t],o=i[1].split(`,`).map(Ii);return typeof a==`function`?a(o):o[a]}var Fi=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Pi(n,t)};function Ii(e){return parseFloat(e.trim())}var Li=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Ri=(()=>new Set(Li))(),zi=e=>e===qn||e===K,Bi=new Set([`x`,`y`,`z`]),Vi=Li.filter(e=>!Bi.has(e));function Hi(e){let t=[];return Vi.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var Ui={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Pi(t,`x`),y:(e,{transform:t})=>Pi(t,`y`)};Ui.translateX=Ui.x,Ui.translateY=Ui.y;var Wi=new Set,Gi=!1,Ki=!1,qi=!1;function Ji(){if(Ki){let e=Array.from(Wi).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Hi(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Ki=!1,Gi=!1,Wi.forEach(e=>e.complete(qi)),Wi.clear()}function Yi(){Wi.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ki=!0)})}function Xi(){qi=!0,Yi(),Ji(),qi=!1}var Zi=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Wi.add(this),Gi||(Gi=!0,G.read(Yi),G.resolveKeyframes(Ji))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}wi(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Wi.delete(this)}cancel(){this.state===`scheduled`&&(Wi.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Qi=e=>e.startsWith(`--`);function $i(e,t,n){Qi(t)?e.style.setProperty(t,n):e.style[t]=n}var ea=Qt(()=>window.ScrollTimeline!==void 0),ta={};function na(e,t){let n=Qt(e);return()=>ta[t]??n()}var ra=na(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),ia=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,aa={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:ia([0,.65,.55,1]),circOut:ia([.55,0,1,.45]),backIn:ia([.31,.01,.66,-.59]),backOut:ia([.33,1.53,.69,.99])};function oa(e,t){if(e)return typeof e==`function`?ra()?qr(e,t):`ease-out`:Tn(e)?ia(e):Array.isArray(e)?e.map(e=>oa(e,t)||aa.easeOut):aa[e]}function sa(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=oa(s,i);Array.isArray(d)&&(u.easing=d),An.value&&Bn.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return An.value&&p.finished.finally(()=>{Bn.waapi--}),p}function ca(e){return typeof e==`function`&&`applyToOptions`in e}function la({type:e,...t}){return ca(e)&&ra()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var ua=class extends xi{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=la(e);this.animation=sa(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=vi(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):$i(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return on(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+on(e)}get time(){return on(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=an(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&ea()?(this.animation.timeline=e,$t):t(this)}},da={anticipate:vn,backInOut:_n,circInOut:bn};function fa(e){return e in da}function pa(e){typeof e.ease==`string`&&fa(e.ease)&&(e.ease=da[e.ease])}var ma=10,ha=class extends ua{constructor(e){pa(e),bi(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Ci({...a,autoplay:!1}),s=Math.max(ma,zn.now()-this.startTime),c=qt(0,ma,s-ma);t.setWithVelocity(o.sample(Math.max(0,s-c)).value,o.sample(s).value,c),o.stop()}},ga=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(Or.test(e)||e===`0`)&&!e.startsWith(`url(`));function _a(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function va(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=ga(i,t),s=ga(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:_a(e)||(n===`spring`||ca(n))&&r}function ya(e){e.duration=0,e.type=`keyframes`}var ba=new Set([`opacity`,`clipPath`,`filter`,`transform`]),xa=Qt(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Sa(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:s,transformTemplate:c}=t.owner.getProps();return xa()&&n&&ba.has(n)&&(n!==`transform`||!c)&&!s&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Ca=40,wa=class extends xi{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=zn.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||Zi)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=zn.now(),va(e,i,a,o)||((Jt.instantAnimations||!s)&&l?.(vi(e,n,t)),e[0]=e[e.length-1],ya(n),n.repeat=0);let u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Ca?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!c&&Sa(u),f=u.motionValue?.owner?.current,p=d?new ha({...u,element:f}):new Ci(u);p.finished.then(()=>{this.notifyFinished()}).catch($t),this.pendingTimeline&&=(this.stopTimeline=p.attachTimeline(this.pendingTimeline),void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Xi()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Ta(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Ea=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Da(e){let t=Ea.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Oa(e,t,n=1){`${e}`;let[r,i]=Da(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Yt(e)?parseFloat(e):e}return Wn(i)?Oa(i,t,n+1):i}var ka={type:`spring`,stiffness:500,damping:25,restSpeed:10},Aa=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),ja={type:`keyframes`,duration:.8},Ma={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Na=(e,{keyframes:t})=>t.length>2?ja:Ri.has(e)?e.startsWith(`scale`)?Aa(t[1]):ka:Ma,Pa=e=>e!==null;function Fa(e,{repeat:t,repeatType:n=`loop`},r){let i=e.filter(Pa),a=t&&n!==`loop`&&t%2==1?0:i.length-1;return!a||r===void 0?i[a]:r}function Ia(e,t){return e?.[t]??e?.default??e}function La({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:l,...u}){return!!Object.keys(u).length}var Ra=(e,t,n,r={},i,a)=>o=>{let s=Ia(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=an(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};La(s)||Object.assign(u,Na(e,u)),u.duration&&=an(u.duration),u.repeatDelay&&=an(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(ya(u),u.delay===0&&(d=!0)),(Jt.instantAnimations||Jt.skipAnimations)&&(d=!0,ya(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Fa(u.keyframes,s);if(e!==void 0){G.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Ci(u):new wa(u)};function za(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Ba(e,t,n,r){if(typeof t==`function`){let[i,a]=za(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=za(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Va(e,t,n){let r=e.getProps();return Ba(r,t,n===void 0?r.custom:n,e)}var Ha=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Li]),Ua=30,Wa=e=>!isNaN(parseFloat(e)),Ga={current:void 0},Ka=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=zn.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=zn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Wa(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new rn);let n=this.events[e].add(t);return e===`change`?()=>{n(),G.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ga.current&&Ga.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=zn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ua)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Ua);return sn(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function qa(e,t){return new Ka(e,t)}var Ja=e=>Array.isArray(e);function Ya(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,qa(n))}function Xa(e){return Ja(e)?e[e.length-1]||0:e}function Za(e,t){let{transitionEnd:n={},transition:r={},...i}=Va(e,t)||{};for(let t in i={...i,...n},i)Ya(e,t,Xa(i[t]))}var Qa=e=>!!(e&&e.getVelocity);function $a(e){return!!(Qa(e)&&e.add)}function eo(e,t){let n=e.getValue(`willChange`);if($a(n))return n.add(t);if(!n&&Jt.WillChange){let n=new Jt.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function to(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var no=`data-`+to(`framerAppearId`);function ro(e){return e.props[no]}function io({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ao(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);let c=[],l=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||l&&io(l,t))continue;let o={delay:n,...Ia(a||{},t)},u=r.get();if(u!==void 0&&!r.isAnimating&&!Array.isArray(i)&&i===u&&!o.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){let n=ro(e);if(n){let e=window.MotionHandoffAnimation(n,t,G);e!==null&&(o.startTime=e,d=!0)}}eo(e,t),r.start(Ra(t,r,i,e.shouldReduceMotion&&Ha.has(t)?{type:!1}:o,e,d));let f=r.animation;f&&c.push(f)}return o&&Promise.all(c).then(()=>{G.update(()=>{o&&Za(e,o)})}),c}function oo(e,t,n={}){let r=Va(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(ao(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return so(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function so(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(oo(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Ta(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function co(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>oo(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=oo(e,t,n);else{let i=typeof t==`function`?Va(e,t,n.custom):t;r=Promise.all(ao(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var lo={test:e=>e===`auto`,parse:e=>e},uo=e=>t=>t.test(e),fo=[qn,K,lr,cr,dr,ur,lo],po=e=>fo.find(uo(e));function mo(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||Zt(e)}var ho=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function go(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Zn)||[];if(!r)return e;let i=n.replace(r,``),a=ho.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var _o=/\b([a-z-]*)\(.*?\)/gu,vo={...Or,getAnimatableNone:e=>{let t=e.match(_o);return t?t.map(go).join(` `):e}},yo={...qn,transform:Math.round},bo={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,top:K,right:K,bottom:K,left:K,inset:K,insetBlock:K,insetBlockStart:K,insetBlockEnd:K,insetInline:K,insetInlineStart:K,insetInlineEnd:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,paddingBlock:K,paddingBlockStart:K,paddingBlockEnd:K,paddingInline:K,paddingInlineStart:K,paddingInlineEnd:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,marginBlock:K,marginBlockStart:K,marginBlockEnd:K,marginInline:K,marginInlineStart:K,marginInlineEnd:K,fontSize:K,backgroundPositionX:K,backgroundPositionY:K,rotate:cr,rotateX:cr,rotateY:cr,rotateZ:cr,scale:Yn,scaleX:Yn,scaleY:Yn,scaleZ:Yn,skew:cr,skewX:cr,skewY:cr,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:Jn,originX:fr,originY:fr,originZ:K,zIndex:yo,fillOpacity:Jn,strokeOpacity:Jn,numOctaves:yo},xo={...bo,color:mr,backgroundColor:mr,outlineColor:mr,fill:mr,stroke:mr,borderColor:mr,borderTopColor:mr,borderRightColor:mr,borderBottomColor:mr,borderLeftColor:mr,filter:vo,WebkitFilter:vo},So=e=>xo[e];function Co(e,t){let n=So(e);return n!==vo&&(n=Or),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var wo=new Set([`auto`,`none`,`0`]);function To(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!wo.has(t)&&Cr(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Co(n,i)}var Eo=class extends Zi{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Wn(r))){let i=Oa(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Ha.has(n)||e.length!==2)return;let[r,i]=e,a=po(r),o=po(i);if(Kn(r)!==Kn(i)&&Ui[n]){this.needsMeasurement=!0;return}if(a!==o)if(zi(a)&&zi(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Ui[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||mo(e[t]))&&n.push(t);n.length&&To(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ui[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Ui[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function Do(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var Oo=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function ko(e){return Xt(e)&&`offsetHeight`in e}var{schedule:Ao,cancel:jo}=Nn(queueMicrotask,!1),Mo={x:!1,y:!1};function No(){return Mo.x||Mo.y}function Po(e){return e===`x`||e===`y`?Mo[e]?null:(Mo[e]=!0,()=>{Mo[e]=!1}):Mo.x||Mo.y?null:(Mo.x=Mo.y=!0,()=>{Mo.x=Mo.y=!1})}function Fo(e,t){let n=Do(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Io(e){return!(e.pointerType===`touch`||No())}function Lo(e,t,n={}){let[r,i,a]=Fo(e,n),o=e=>{if(!Io(e))return;let{target:n}=e,r=t(n,e);if(typeof r!=`function`||!n)return;let a=e=>{Io(e)&&(r(e),n.removeEventListener(`pointerleave`,a))};n.addEventListener(`pointerleave`,a,i)};return r.forEach(e=>{e.addEventListener(`pointerenter`,o,i)}),a}var Ro=(e,t)=>t?e===t?!0:Ro(e,t.parentElement):!1,zo=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Bo=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Vo(e){return Bo.has(e.tagName)||e.isContentEditable===!0}var Ho=new WeakSet;function Uo(e){return t=>{t.key===`Enter`&&e(t)}}function Wo(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Go=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Uo(()=>{if(Ho.has(n))return;Wo(n,`down`);let e=Uo(()=>{Wo(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Wo(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Ko(e){return zo(e)&&!No()}function qo(e,t,n={}){let[r,i,a]=Fo(e,n),o=e=>{let r=e.currentTarget;if(!Ko(e))return;Ho.add(r);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),Ho.has(r)&&Ho.delete(r),Ko(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Ro(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),ko(e)&&(e.addEventListener(`focus`,e=>Go(e,i)),!Vo(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Jo(e){return Xt(e)&&`ownerSVGElement`in e}function Yo(e){return Jo(e)&&e.tagName===`svg`}var Xo=[...fo,mr,Or],Zo=e=>Xo.find(uo(e)),Qo=()=>({translate:0,scale:1,origin:0,originPoint:0}),$o=()=>({x:Qo(),y:Qo()}),es=()=>({min:0,max:0}),ts=()=>({x:es(),y:es()}),ns={current:null},rs={current:!1},is=typeof window<`u`;function as(){if(rs.current=!0,is)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>ns.current=e.matches;e.addEventListener(`change`,t),t()}else ns.current=!1}var os=new WeakMap;function ss(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function cs(e){return typeof e==`string`||Array.isArray(e)}var ls=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],us=[`initial`,...ls];function ds(e){return ss(e.animate)||us.some(t=>cs(e[t]))}function fs(e){return!!(ds(e)||e.variants)}function ps(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Qa(i))e.addValue(r,i);else if(Qa(a))e.addValue(r,qa(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,qa(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var ms=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],hs={};function gs(e){hs=e}function _s(){return hs}var vs=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Zi,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=zn.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,G.render(this.render,!1,!0))};let{latestValues:s,renderState:c}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!i,this.isControllingVariants=ds(t),this.isVariantNode=fs(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in u){let t=u[e];s[e]!==void 0&&Qa(t)&&t.set(s[e])}}mount(e){this.current=e,os.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(rs.current||as(),this.shouldReduceMotion=ns.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in this.projection&&this.projection.unmount(),Pn(this.notifyUpdate),Pn(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let n=Ri.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&G.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in hs){let t=hs[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ts()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<ms.length;t++){let n=ms[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=ps(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=qa(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Yt(n)||Zt(n))?n=parseFloat(n):!Zo(n)&&Or.test(t)&&(n=Co(e,t)),this.setBaseTarget(e,Qa(n)?n.get():n)),Qa(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Ba(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Qa(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new rn),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Ao.render(this.render)}},ys=class extends vs{constructor(){super(...arguments),this.KeyframeResolver=Eo}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Qa(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},bs=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function xs({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Ss({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Cs(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ws(e){return e===void 0||e===1}function Ts({scale:e,scaleX:t,scaleY:n}){return!ws(e)||!ws(t)||!ws(n)}function Es(e){return Ts(e)||Ds(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ds(e){return Os(e.x)||Os(e.y)}function Os(e){return e&&e!==`0%`}function ks(e,t,n){return n+t*(e-n)}function As(e,t,n,r,i){return i!==void 0&&(e=ks(e,i,r)),ks(e,n,r)+t}function js(e,t=0,n=1,r,i){e.min=As(e.min,t,n,r,i),e.max=As(e.max,t,n,r,i)}function Ms(e,{x:t,y:n}){js(e.x,t.translate,t.scale,t.originPoint),js(e.y,n.translate,n.scale,n.originPoint)}var Ns=.999999999999,Ps=1.0000000000001;function Fs(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Rs(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Ms(e,o)),r&&Es(a.latestValues)&&Rs(e,a.latestValues))}t.x<Ps&&t.x>Ns&&(t.x=1),t.y<Ps&&t.y>Ns&&(t.y=1)}function Is(e,t){e.min+=t,e.max+=t}function Ls(e,t,n,r,i=.5){js(e,t,n,q(e.min,e.max,i),r)}function Rs(e,t){Ls(e.x,t.x,t.scaleX,t.scale,t.originX),Ls(e.y,t.y,t.scaleY,t.scale,t.originY)}function zs(e,t){return xs(Cs(e.getBoundingClientRect(),t))}function Bs(e,t,n){let r=zs(e,n),{scroll:i}=t;return i&&(Is(r.x,i.offset.x),Is(r.y,i.offset.y)),r}var Vs={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Hs=Li.length;function Us(e,t,n){let r=``,i=!0;for(let a=0;a<Hs;a++){let o=Li[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=Oo(s,bo[o]);if(!c){i=!1;let t=Vs[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Ws(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Ri.has(e)){o=!0;continue}else if(Hn(e)){i[e]=n;continue}else{let t=Oo(n,bo[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Us(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Gs(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Ks(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var qs={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(K.test(e))e=parseFloat(e);else return e;return`${Ks(e,t.target.x)}% ${Ks(e,t.target.y)}%`}},Js={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=Or.parse(e);if(i.length>5)return r;let a=Or.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=q(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Ys={borderRadius:{...qs,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:qs,borderTopRightRadius:qs,borderBottomLeftRadius:qs,borderBottomRightRadius:qs,boxShadow:Js};function Xs(e,{layout:t,layoutId:n}){return Ri.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Ys[e]||e===`opacity`)}function Zs(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Qa(r[t])||i&&Qa(i[t])||Xs(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Qs(e){return window.getComputedStyle(e)}var $s=class extends ys{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Gs}readValueFromInstance(e,t){if(Ri.has(t))return this.projection?.isProjecting?Ni(t):Fi(e,t);{let n=Qs(e),r=(Hn(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return zs(e,t)}build(e,t,n){Ws(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Zs(e,t,n)}},ec={offset:`stroke-dashoffset`,array:`stroke-dasharray`},tc={offset:`strokeDashoffset`,array:`strokeDasharray`};function nc(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?ec:tc;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var rc=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function ic(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Ws(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of rc)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&nc(d,i,a,o,!1)}var ac=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),oc=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function sc(e,t,n,r){for(let n in Gs(e,t,void 0,r),t.attrs)e.setAttribute(ac.has(n)?n:to(n),t.attrs[n])}function cc(e,t,n){let r=Zs(e,t,n);for(let n in e)if(Qa(e[n])||Qa(t[n])){let t=Li.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var lc=class extends ys{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=ts}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ri.has(t)){let e=So(t);return e&&e.default||0}return t=ac.has(t)?t:to(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return cc(e,t,n)}build(e,t,n){ic(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){sc(e,t,n,r)}mount(e){this.isSVGTag=oc(e.tagName),super.mount(e)}},uc=us.length;function dc(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&dc(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<uc;n++){let r=us[n],i=e.props[r];(cs(i)||i===!1)&&(t[r]=i)}return t}function fc(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var pc=[...ls].reverse(),mc=ls.length;function hc(e){return t=>Promise.all(t.map(({animation:t,options:n})=>co(e,t,n)))}function gc(e){let t=hc(e),n=yc(),r=!0,i=t=>(n,r)=>{let i=Va(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(n){t=n(e)}function o(a){let{props:o}=e,s=dc(e.parent)||{},c=[],l=new Set,u={},d=1/0;for(let t=0;t<mc;t++){let f=pc[t],p=n[f],m=o[f]===void 0?s[f]:o[f],h=cs(m),g=f===a?p.isActive:null;g===!1&&(d=t);let _=m===s[f]&&m!==o[f]&&h;if(_&&r&&e.manuallyAnimateOnMount&&(_=!1),p.protectedKeys={...u},!p.isActive&&g===null||!m&&!p.prevProp||ss(m)||typeof m==`boolean`)continue;let v=_c(p.prevProp,m),y=v||f===a&&p.isActive&&!_&&h||t>d&&h,b=!1,x=Array.isArray(m)?m:[m],S=x.reduce(i(f),{});g===!1&&(S={});let{prevResolvedValues:C={}}=p,w={...C,...S},T=t=>{y=!0,l.has(t)&&(b=!0,l.delete(t)),p.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in w){let t=S[e],n=C[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Ja(t)&&Ja(n)?!fc(t,n):t!==n,r?t==null?l.add(e):T(e):t!==void 0&&l.has(e)?T(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=S,p.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(y=!1);let E=_&&v;y&&(!E||b)&&c.push(...x.map(t=>{let n={type:f};if(typeof t==`string`&&r&&!E&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Va(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Ta(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(l.size){let t={};if(typeof o.initial!=`boolean`){let n=Va(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}l.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),c.push({animation:t})}let f=!!c.length;return r&&(o.initial===!1||o.initial===o.animate)&&!e.manuallyAnimateOnMount&&(f=!1),r=!1,f?t(c):Promise.resolve()}function s(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=o(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=yc()}}}function _c(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!fc(t,e):!1}function vc(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function yc(){return{animate:vc(!0),whileInView:vc(),whileHover:vc(),whileTap:vc(),whileDrag:vc(),whileFocus:vc(),exit:vc()}}function bc(e,t){e.min=t.min,e.max=t.max}function xc(e,t){bc(e.x,t.x),bc(e.y,t.y)}function Sc(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Cc=1e-4,wc=1-Cc,Tc=1+Cc,Ec=.01,Dc=0-Ec,Oc=0+Ec;function kc(e){return e.max-e.min}function Ac(e,t,n){return Math.abs(e-t)<=n}function jc(e,t,n,r=.5){e.origin=r,e.originPoint=q(t.min,t.max,e.origin),e.scale=kc(n)/kc(t),e.translate=q(n.min,n.max,e.origin)-e.originPoint,(e.scale>=wc&&e.scale<=Tc||isNaN(e.scale))&&(e.scale=1),(e.translate>=Dc&&e.translate<=Oc||isNaN(e.translate))&&(e.translate=0)}function Mc(e,t,n,r){jc(e.x,t.x,n.x,r?r.originX:void 0),jc(e.y,t.y,n.y,r?r.originY:void 0)}function Nc(e,t,n){e.min=n.min+t.min,e.max=e.min+kc(t)}function Pc(e,t,n){Nc(e.x,t.x,n.x),Nc(e.y,t.y,n.y)}function Fc(e,t,n){e.min=t.min-n.min,e.max=e.min+kc(t)}function Ic(e,t,n){Fc(e.x,t.x,n.x),Fc(e.y,t.y,n.y)}function Lc(e,t,n,r,i){return e-=t,e=ks(e,1/n,r),i!==void 0&&(e=ks(e,1/i,r)),e}function Rc(e,t=0,n=1,r=.5,i,a=e,o=e){if(lr.test(t)&&(t=parseFloat(t),t=q(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=q(a.min,a.max,r);e===a&&(s-=t),e.min=Lc(e.min,t,n,s,i),e.max=Lc(e.max,t,n,s,i)}function zc(e,t,[n,r,i],a,o){Rc(e,t[n],t[r],t[i],t.scale,a,o)}var Bc=[`x`,`scaleX`,`originX`],Vc=[`y`,`scaleY`,`originY`];function Hc(e,t,n,r){zc(e.x,t,Bc,n?n.x:void 0,r?r.x:void 0),zc(e.y,t,Vc,n?n.y:void 0,r?r.y:void 0)}function Uc(e){return e.translate===0&&e.scale===1}function Wc(e){return Uc(e.x)&&Uc(e.y)}function Gc(e,t){return e.min===t.min&&e.max===t.max}function Kc(e,t){return Gc(e.x,t.x)&&Gc(e.y,t.y)}function qc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Jc(e,t){return qc(e.x,t.x)&&qc(e.y,t.y)}function Yc(e){return kc(e.x)/kc(e.y)}function Xc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Zc(e){return[e(`x`),e(`y`)]}function Qc(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var $c=[`TopLeft`,`TopRight`,`BottomLeft`,`BottomRight`],el=$c.length,tl=e=>typeof e==`string`?parseFloat(e):e,nl=e=>typeof e==`number`||K.test(e);function rl(e,t,n,r,i,a){i?(e.opacity=q(0,n.opacity??1,al(r)),e.opacityExit=q(t.opacity??1,0,ol(r))):a&&(e.opacity=q(t.opacity??1,n.opacity??1,r));for(let i=0;i<el;i++){let a=`border${$c[i]}Radius`,o=il(t,a),s=il(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||nl(o)===nl(s)?(e[a]=Math.max(q(tl(o),tl(s),r),0),(lr.test(s)||lr.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=q(t.rotate||0,n.rotate||0,r))}function il(e,t){return e[t]===void 0?e.borderRadius:e[t]}var al=sl(0,.5,yn),ol=sl(.5,.95,$t);function sl(e,t,n){return r=>r<e?0:r>t?1:n(nn(e,t,r))}function cl(e,t,n){let r=Qa(e)?e:qa(e);return r.start(Ra(``,r,t,n)),r.animation}function ll(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var ul=(e,t)=>e.depth-t.depth,dl=class{constructor(){this.children=[],this.isDirty=!1}add(e){Gt(this.children,e),this.isDirty=!0}remove(e){Kt(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ul),this.isDirty=!1,this.children.forEach(e)}};function fl(e,t){let n=zn.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Pn(r),e(a-t))};return G.setup(r,!0),()=>Pn(r)}function pl(e){return Qa(e)?e.get():e}var ml=class{constructor(){this.members=[]}add(e){Gt(this.members,e),e.scheduleRender()}remove(e){if(Kt(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t=this.members.findIndex(t=>e===t);if(t===0)return!1;let n;for(let e=t;e>=0;e--){let t=this.members[e];if(t.isPresent!==!1){n=t;break}}return n?(this.promote(n),!0):!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender();let r=n.options.layoutDependency,i=e.options.layoutDependency;r!==void 0&&i!==void 0&&r===i||(e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0));let{crossfade:a}=e.options;a===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}},hl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},gl={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},_l=[``,`X`,`Y`,`Z`],vl=1e3,yl=0;function bl(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function xl(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=ro(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,G,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&xl(r)}function Sl({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=yl++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,An.value&&(gl.nodes=gl.calculatedTargetDeltas=gl.calculatedProjections=0),this.nodes.forEach(Tl),this.nodes.forEach(Ml),this.nodes.forEach(Nl),this.nodes.forEach(El),An.addProjectionMetrics&&An.addProjectionMetrics(gl)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new dl)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new rn),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Jo(t)&&!Yo(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;G.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=fl(i,250),hl.hasAnimatedSinceResize&&(hl.hasAnimatedSinceResize=!1,this.nodes.forEach(jl)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Bl,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Jc(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Ia(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||jl(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Pn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Pl),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&xl(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ol);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(kl);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Al),this.nodes.forEach(Cl),this.nodes.forEach(wl)):this.nodes.forEach(kl),this.clearAllSnapshots();let e=zn.now();Fn.delta=qt(0,1e3/60,e-Fn.timestamp),Fn.timestamp=e,Fn.isProcessing=!0,In.update.process(Fn),In.preRender.process(Fn),In.render.process(Fn),Fn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ao.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Dl),this.sharedNodes.forEach(Fl)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,G.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){G.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!kc(this.snapshot.measuredBox.x)&&!kc(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=ts(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Wc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Es(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Wl(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return ts();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Kl))){let{scroll:e}=this.root;e&&(Is(t.x,e.offset.x),Is(t.y,e.offset.y))}return t}removeElementScroll(e){let t=ts();if(xc(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&xc(t,e),Is(t.x,i.offset.x),Is(t.y,i.offset.y))}return t}applyTransform(e,t=!1){let n=ts();xc(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Rs(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),Es(r.latestValues)&&Rs(n,r.latestValues)}return Es(this.latestValues)&&Rs(n,this.latestValues),n}removeTransform(e){let t=ts();xc(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!Es(n.latestValues))continue;Ts(n.latestValues)&&n.updateSnapshot();let r=ts();xc(r,n.measurePageBox()),Hc(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return Es(this.latestValues)&&Hc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Fn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=Fn.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ts(),this.targetWithTransforms=ts()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Pc(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):xc(this.target,this.layout.layoutBox),Ms(this.target,this.targetDelta)):xc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),An.value&&gl.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Ts(this.parent.latestValues)||Ds(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ts(),this.relativeTargetOrigin=ts(),Ic(this.relativeTargetOrigin,t,n),xc(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Fn.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;xc(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Fs(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=ts());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Sc(this.prevProjectionDelta.x,this.projectionDelta.x),Sc(this.prevProjectionDelta.y,this.projectionDelta.y)),Mc(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Xc(this.projectionDelta.x,this.prevProjectionDelta.x)||!Xc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),An.value&&gl.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=$o(),this.projectionDelta=$o(),this.projectionDeltaWithTransform=$o()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=$o();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=ts(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(zl));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;Il(a.x,e.x,n),Il(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ic(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Rl(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Kc(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=ts(),xc(d,this.relativeTarget)),s&&(this.animationValues=i,rl(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Pn(this.pendingAnimation),void 0),this.pendingAnimation=G.update(()=>{hl.hasAnimatedSinceResize=!0,Bn.layout++,this.motionValue||=qa(0),this.currentAnimation=cl(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Bn.layout--},onComplete:()=>{Bn.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(vl),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Gl(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||ts();let t=kc(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=kc(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}xc(t,n),Rs(t,i),Mc(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new ml),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&bl(`z`,e,r,this.animationValues);for(let t=0;t<_l.length;t++)bl(`rotate${_l[t]}`,e,r,this.animationValues),bl(`skew${_l[t]}`,e,r,this.animationValues);for(let t in e.render(),r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=pl(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=pl(t?.pointerEvents)||``),this.hasProjected&&!Es(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Qc(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;for(let t in e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit,Ys){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Ys[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?pl(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Ol),this.root.sharedNodes.clear()}}}function Cl(e){e.updateLayout()}function wl(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;i===`size`?Zc(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=kc(r);r.min=n[e].min,r.max=r.min+i}):Gl(i,t.layoutBox,n)&&Zc(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=kc(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=$o();Mc(o,n,t.layoutBox);let s=$o();a?Mc(s,e.applyTransform(r,!0),t.measuredBox):Mc(s,n,t.layoutBox);let c=!Wc(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=ts();Ic(o,t.layoutBox,i.layoutBox);let s=ts();Ic(s,n,a.layoutBox),Jc(o,s)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Tl(e){An.value&&gl.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function El(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Dl(e){e.clearSnapshot()}function Ol(e){e.clearMeasurements()}function kl(e){e.isLayoutDirty=!1}function Al(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function jl(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Ml(e){e.resolveTargetDelta()}function Nl(e){e.calcProjection()}function Pl(e){e.resetSkewAndRotation()}function Fl(e){e.removeLeadSnapshot()}function Il(e,t,n){e.translate=q(t.translate,0,n),e.scale=q(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Ll(e,t,n,r){e.min=q(t.min,n.min,r),e.max=q(t.max,n.max,r)}function Rl(e,t,n,r){Ll(e.x,t.x,n.x,r),Ll(e.y,t.y,n.y,r)}function zl(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Bl={duration:.45,ease:[.4,0,.1,1]},Vl=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Hl=Vl(`applewebkit/`)&&!Vl(`chrome/`)?Math.round:$t;function Ul(e){e.min=Hl(e.min),e.max=Hl(e.max)}function Wl(e){Ul(e.x),Ul(e.y)}function Gl(e,t,n){return e===`position`||e===`preserve-aspect`&&!Ac(Yc(t),Yc(n),.2)}function Kl(e){return e!==e.root&&e.scroll?.wasRoot}var ql=Sl({attachResizeListener:(e,t)=>ll(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Jl={current:void 0},Yl=Sl({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Jl.current){let e=new ql({});e.mount(window),e.setOptions({layoutScroll:!0}),Jl.current=e}return Jl.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Xl=(0,V.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Zl(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Ql(...e){return t=>{let n=!1,r=e.map(e=>{let r=Zl(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Zl(e[t],null)}}}}function $l(...e){return V.useCallback(Ql(...e),e)}var eu=class extends V.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=ko(e)&&e.offsetWidth||0,r=ko(e)&&e.offsetHeight||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left,i.bottom=r-i.height-i.top}return null}componentDidUpdate(){}render(){return this.props.children}};function tu({children:e,isPresent:t,anchorX:n,anchorY:r,root:i}){let a=(0,V.useId)(),o=(0,V.useRef)(null),s=(0,V.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=(0,V.useContext)(Xl),l=$l(o,e.props?.ref??e?.ref);return(0,V.useInsertionEffect)(()=>{let{width:e,height:l,top:u,left:d,right:f,bottom:p}=s.current;if(t||!o.current||!e||!l)return;let m=n===`left`?`left: ${d}`:`right: ${f}`,h=r===`bottom`?`bottom: ${p}`:`top: ${u}`;o.current.dataset.motionPopId=a;let g=document.createElement(`style`);c&&(g.nonce=c);let _=i??document.head;return _.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${m}px !important;
            ${h}px !important;
          }
        `),()=>{_.contains(g)&&_.removeChild(g)}},[t]),(0,U.jsx)(eu,{isPresent:t,childRef:o,sizeRef:s,children:V.cloneElement(e,{ref:l})})}var nu=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Vt(ru),d=(0,V.useId)(),f=!0,p=(0,V.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,V.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),V.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),o===`popLayout`&&(e=(0,U.jsx)(tu,{isPresent:n,anchorX:s,anchorY:c,root:l,children:e})),(0,U.jsx)(Wt.Provider,{value:p,children:e})};function ru(){return new Map}function iu(e=!0){let t=(0,V.useContext)(Wt);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,V.useId)();(0,V.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,V.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var au=e=>e.key||``;function ou(e){let t=[];return V.Children.forEach(e,e=>{(0,V.isValidElement)(e)&&t.push(e)}),t}var su=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=iu(o),f=(0,V.useMemo)(()=>ou(e),[e]),p=o&&!u?[]:f.map(au),m=(0,V.useRef)(!0),h=(0,V.useRef)(f),g=Vt(()=>new Map),_=(0,V.useRef)(new Set),[v,y]=(0,V.useState)(f),[b,x]=(0,V.useState)(f);Ut(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=au(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=au(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(ou(e)),y(f),null}let{forceRender:C}=(0,V.useContext)(Bt);return(0,U.jsx)(U.Fragment,{children:b.map(e=>{let v=au(e),y=o&&!u?!1:f===b||p.includes(v);return(0,U.jsx)(nu,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(_.current.add(v),g.has(v))g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},cu=(0,V.createContext)({strict:!1}),lu={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},uu=!1;function du(){if(uu)return;let e={};for(let t in lu)e[t]={isEnabled:e=>lu[t].some(t=>!!e[t])};gs(e),uu=!0}function fu(){return du(),_s()}function pu(e){let t=fu();for(let n in e)t[n]={...t[n],...e[n]};gs(t)}var mu=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(`.`));function hu(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||mu.has(e)}var gu=e=>!hu(e);function _u(e){typeof e==`function`&&(gu=t=>t.startsWith(`on`)?!hu(t):e(t))}try{_u((f(),r(d)).default)}catch{}function vu(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||(gu(i)||n===!0&&hu(i)||!t&&!hu(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var yu=(0,V.createContext)({});function bu(e,t){if(ds(e)){let{initial:t,animate:n}=e;return{initial:t===!1||cs(t)?t:void 0,animate:cs(n)?n:void 0}}return e.inherit===!1?{}:t}function xu(e){let{initial:t,animate:n}=bu(e,(0,V.useContext)(yu));return(0,V.useMemo)(()=>({initial:t,animate:n}),[Su(t),Su(n)])}function Su(e){return Array.isArray(e)?e.join(` `):e}var Cu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function wu(e,t,n){for(let r in t)!Qa(t[r])&&!Xs(r,n)&&(e[r]=t[r])}function Tu({transformTemplate:e},t){return(0,V.useMemo)(()=>{let n=Cu();return Ws(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Eu(e,t){let n=e.style||{},r={};return wu(r,n,e),Object.assign(r,Tu(e,t)),r}function Du(e,t){let n={},r=Eu(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Ou=()=>({...Cu(),attrs:{}});function ku(e,t,n,r){let i=(0,V.useMemo)(()=>{let n=Ou();return ic(n,t,oc(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};wu(t,e.style,e),i.style={...t,...i.style}}return i}var Au=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function ju(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Au.indexOf(e)>-1||/[A-Z]/u.test(e))}function Mu(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??ju(e)?ku:Du)(t,r,i,e),c=vu(t,typeof e==`string`,a),l=e===V.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,V.useMemo)(()=>Qa(u)?u.get():u,[u]);return(0,V.createElement)(e,{...l,children:d})}function Nu({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Pu(n,r,i,e),renderState:t()}}function Pu(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=pl(a[e]);let{initial:o,animate:s}=e,c=ds(e),l=fs(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!ss(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Ba(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Fu=e=>(t,n)=>{let r=(0,V.useContext)(yu),i=(0,V.useContext)(Wt),a=()=>Nu(e,t,r,i);return n?a():Vt(a)},Iu=Fu({scrapeMotionValuesFromProps:Zs,createRenderState:Cu}),Lu=Fu({scrapeMotionValuesFromProps:cc,createRenderState:Ou}),Ru=Symbol.for(`motionComponentSymbol`);function zu(e,t,n){let r=(0,V.useRef)(n);(0,V.useInsertionEffect)(()=>{r.current=n});let i=(0,V.useRef)(null);return(0,V.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var Bu=(0,V.createContext)({});function Vu(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Hu(e,t,n,r,i,a){let{visualElement:o}=(0,V.useContext)(yu),s=(0,V.useContext)(cu),c=(0,V.useContext)(Wt),l=(0,V.useContext)(Xl).reducedMotion,u=(0,V.useRef)(null),d=(0,V.useRef)(!1);r||=s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:l,isSVG:a}),d.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));let f=u.current,p=(0,V.useContext)(Bu);f&&!f.projection&&i&&(f.type===`html`||f.type===`svg`)&&Uu(u.current,n,i,p);let m=(0,V.useRef)(!1);(0,V.useInsertionEffect)(()=>{f&&m.current&&f.update(n,c)});let h=n[no],g=(0,V.useRef)(!!h&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return Ut(()=>{d.current=!0,f&&(m.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),g.current&&f.animationState&&f.animationState.animateChanges())}),(0,V.useEffect)(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(h)}),!1),f.enteringChildren=void 0)}),f}function Uu(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Wu(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Vu(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:l})}function Wu(e){if(e)return e.options.allowProjection===!1?Wu(e.parent):e.projection}function Gu(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&pu(r);let a=n?n===`svg`:ju(e),o=a?Lu:Iu;function s(n,s){let c,l={...(0,V.useContext)(Xl),...n,layoutId:Ku(n)},{isStatic:u}=l,d=xu(n),f=o(n,u);if(!u&&Ht){qu(l,r);let t=Ju(l);c=t.MeasureLayout,d.visualElement=Hu(e,f,l,i,t.ProjectionNode,a)}return(0,U.jsxs)(yu.Provider,{value:d,children:[c&&d.visualElement?(0,U.jsx)(c,{visualElement:d.visualElement,...l}):null,Mu(e,n,zu(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,V.forwardRef)(s);return c[Ru]=e,c}function Ku({layoutId:e}){let t=(0,V.useContext)(Bt).id;return t&&e!==void 0?t+`-`+e:e}function qu(e,t){(0,V.useContext)(cu).strict}function Ju(e){let{drag:t,layout:n}=fu();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Yu(e,t){if(typeof Proxy>`u`)return Gu;let n=new Map,r=(n,r)=>Gu(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Gu(a,void 0,e,t)),n.get(a))})}var Xu=(e,t)=>t.isSVG??ju(e)?new lc(t):new $s(t,{allowProjection:e!==V.Fragment}),Zu=class extends bs{constructor(e){super(e),e.animationState||=gc(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();ss(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Qu=0,$u={animation:{Feature:Zu},exit:{Feature:class extends bs{constructor(){super(...arguments),this.id=Qu++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function ed(e){return{point:{x:e.pageX,y:e.pageY}}}var td=e=>t=>zo(t)&&e(t,ed(t));function nd(e,t,n,r){return ll(e,t,td(n),r)}var rd=({current:e})=>e?e.ownerDocument.defaultView:null,id=(e,t)=>Math.abs(e-t);function ad(e,t){let n=id(e.x,t.x),r=id(e.y,t.y);return Math.sqrt(n**2+r**2)}var od=new Set([`auto`,`scroll`]),sd=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=ud(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=ad(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=Fn;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=cd(t,this.transformPagePoint),G.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=ud(e.type===`pointercancel`?this.lastMoveEventInfo:cd(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!zo(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=cd(ed(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=Fn;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,ud(s,this.history)),this.removeListeners=tn(nd(this.contextWindow,`pointermove`,this.handlePointerMove),nd(this.contextWindow,`pointerup`,this.handlePointerUp),nd(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(od.has(e.overflowX)||od.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener(`scroll`,this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),G.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Pn(this.updatePoint)}};function cd(e,t){return t?{point:t(e.point)}:e}function ld(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ud({point:e},t){return{point:e,delta:ld(e,fd(t)),offset:ld(e,dd(t)),velocity:pd(t,.1)}}function dd(e){return e[0]}function fd(e){return e[e.length-1]}function pd(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=fd(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>an(t)));)n--;if(!r)return{x:0,y:0};let a=on(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function md(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?q(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?q(n,e,r.max):Math.min(e,n)),e}function hd(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function gd(e,{top:t,left:n,bottom:r,right:i}){return{x:hd(e.x,n,i),y:hd(e.y,t,r)}}function _d(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function vd(e,t){return{x:_d(e.x,t.x),y:_d(e.y,t.y)}}function yd(e,t){let n=.5,r=kc(e),i=kc(t);return i>r?n=nn(t.min,t.max-r,e.min):r>i&&(n=nn(e.min,e.max-i,t.min)),qt(0,1,n)}function bd(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var xd=.35;function Sd(e=xd){return e===!1?e=0:e===!0&&(e=xd),{x:Cd(e,`left`,`right`),y:Cd(e,`top`,`bottom`)}}function Cd(e,t,n){return{min:wd(e,t),max:wd(e,n)}}function wd(e,t){return typeof e==`number`?e:e[t]||0}var Td=new WeakMap,Ed=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ts(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t?(this.stopAnimation(),this.snapToCursor(ed(e).point)):this.pauseAnimation()},a=(e,t)=>{this.stopAnimation();let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Po(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Zc(e=>{let t=this.getAxisMotionValue(e).get()||0;if(lr.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=kc(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&G.postRender(()=>i(e,t)),eo(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Od(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&a(e,t)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Zc(e=>this.getAnimationState(e)===`paused`&&this.getAxisMotionValue(e).animation?.play()),{dragSnapToOrigin:l}=this.getProps();this.panSession=new sd(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:rd(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&G.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Dd(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=md(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Vu(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=gd(n.layoutBox,e):this.constraints=!1,this.elastic=Sd(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&Zc(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=bd(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Vu(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Bs(n,r.root,this.visualElement.getTransformPagePoint()),a=vd(r.layout.layoutBox,i);if(t){let e=t(Ss(a));this.hasMutatedConstraints=!!e,e&&(a=xs(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Zc(o=>{if(!Dd(o,t,this.currentDirection))return;let c=s&&s[o]||{};a&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return eo(this.visualElement,e),n.start(Ra(e,n,0,t,this.visualElement,!1))}stopAnimation(){Zc(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Zc(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Zc(t=>{let{drag:n}=this.getProps();if(!Dd(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-q(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Vu(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Zc(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=yd({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Zc(t=>{if(!Dd(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(q(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;Td.set(this.visualElement,this);let e=this.visualElement.current,t=nd(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Vo(i);n&&r&&!a&&this.start(t)}),n=()=>{let{dragConstraints:e}=this.getProps();Vu(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener(`measure`,n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),G.read(n);let a=ll(window,`resize`,()=>this.scalePositionWithinConstraints()),o=r.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Zc(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{a(),t(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=xd,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Dd(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Od(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var kd=class extends bs{constructor(e){super(e),this.removeGroupControls=$t,this.removeListeners=$t,this.controls=new Ed(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$t}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Ad=e=>(t,n)=>{e&&G.postRender(()=>e(t,n))},jd=class extends bs{constructor(){super(...arguments),this.removePointerDownListener=$t}onPointerDown(e){this.session=new sd(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:rd(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Ad(e),onStart:Ad(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&G.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=nd(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Md=!1,Nd=class extends V.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Md&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),hl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Md=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||G.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Ao.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Md=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Pd(e){let[t,n]=iu(),r=(0,V.useContext)(Bt);return(0,U.jsx)(Nd,{...e,layoutGroup:r,switchLayoutGroup:(0,V.useContext)(Bu),isPresent:t,safeToRemove:n})}var Fd={pan:{Feature:jd},drag:{Feature:kd,ProjectionNode:Yl,MeasureLayout:Pd}};function Id(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&G.postRender(()=>i(t,ed(t)))}var Ld=class extends bs{mount(){let{current:e}=this.node;e&&(this.unmount=Lo(e,(e,t)=>(Id(this.node,t,`Start`),e=>Id(this.node,e,`End`))))}unmount(){}},Rd=class extends bs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=tn(ll(this.node.current,`focus`,()=>this.onFocus()),ll(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function zd(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&G.postRender(()=>i(t,ed(t)))}var Bd=class extends bs{mount(){let{current:e}=this.node;e&&(this.unmount=qo(e,(e,t)=>(zd(this.node,t,`Start`),(e,{success:t})=>zd(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}},Vd=new WeakMap,Hd=new WeakMap,Ud=e=>{let t=Vd.get(e.target);t&&t(e)},Wd=e=>{e.forEach(Ud)};function Gd({root:e,...t}){let n=e||document;Hd.has(n)||Hd.set(n,{});let r=Hd.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Wd,{root:e,...t})),r[i]}function Kd(e,t,n){let r=Gd(t);return Vd.set(e,n),r.observe(e),()=>{Vd.delete(e),r.unobserve(e)}}var qd={some:0,all:1},Jd=class extends bs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:qd[r]};return Kd(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Yd(e,t))&&this.startObserver()}unmount(){}};function Yd({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Xd={inView:{Feature:Jd},tap:{Feature:Bd},focus:{Feature:Rd},hover:{Feature:Ld}},Zd={layout:{ProjectionNode:Yl,MeasureLayout:Pd}},Qd=Yu({...$u,...Xd,...Fd,...Zd},Xu),$d=xt(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),ef=xt(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),tf=xt(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),nf=xt(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),rf=xt(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),af=xt(`circle-arrow-right`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m12 16 4-4-4-4`,key:`1i9zcv`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}]]),of=xt(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),sf=xt(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),cf=xt(`dices`,[[`rect`,{width:`12`,height:`12`,x:`2`,y:`10`,rx:`2`,ry:`2`,key:`6agr2n`}],[`path`,{d:`m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6`,key:`1o487t`}],[`path`,{d:`M6 18h.01`,key:`uhywen`}],[`path`,{d:`M10 14h.01`,key:`ssrbsk`}],[`path`,{d:`M15 6h.01`,key:`cblpky`}],[`path`,{d:`M18 9h.01`,key:`2061c0`}]]),lf=xt(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),uf=xt(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),df=xt(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),ff=xt(`minimize-2`,[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]),pf=xt(`octagon-x`,[[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,key:`2d38gg`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),mf=!1;function hf(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function gf(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var _f=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!mf:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(gf(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=hf(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),vf=`-ms-`,yf=`-moz-`,Y=`-webkit-`,bf=`comm`,xf=`rule`,Sf=`decl`,Cf=`@import`,wf=`@keyframes`,Tf=`@layer`,Ef=Math.abs,Df=String.fromCharCode,Of=Object.assign;function kf(e,t){return Nf(e,0)^45?(((t<<2^Nf(e,0))<<2^Nf(e,1))<<2^Nf(e,2))<<2^Nf(e,3):0}function Af(e){return e.trim()}function jf(e,t){return(e=t.exec(e))?e[0]:e}function X(e,t,n){return e.replace(t,n)}function Mf(e,t){return e.indexOf(t)}function Nf(e,t){return e.charCodeAt(t)|0}function Pf(e,t,n){return e.slice(t,n)}function Ff(e){return e.length}function If(e){return e.length}function Lf(e,t){return t.push(e),e}function Rf(e,t){return e.map(t).join(``)}var zf=1,Bf=1,Vf=0,Hf=0,Uf=0,Wf=``;function Gf(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:zf,column:Bf,length:o,return:``}}function Kf(e,t){return Of(Gf(``,null,null,``,null,null,0),e,{length:-e.length},t)}function qf(){return Uf}function Jf(){return Uf=Hf>0?Nf(Wf,--Hf):0,Bf--,Uf===10&&(Bf=1,zf--),Uf}function Yf(){return Uf=Hf<Vf?Nf(Wf,Hf++):0,Bf++,Uf===10&&(Bf=1,zf++),Uf}function Xf(){return Nf(Wf,Hf)}function Zf(){return Hf}function Qf(e,t){return Pf(Wf,e,t)}function $f(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ep(e){return zf=Bf=1,Vf=Ff(Wf=e),Hf=0,[]}function tp(e){return Wf=``,e}function np(e){return Af(Qf(Hf-1,ap(e===91?e+2:e===40?e+1:e)))}function rp(e){for(;(Uf=Xf())&&Uf<33;)Yf();return $f(e)>2||$f(Uf)>3?``:` `}function ip(e,t){for(;--t&&Yf()&&!(Uf<48||Uf>102||Uf>57&&Uf<65||Uf>70&&Uf<97););return Qf(e,Zf()+(t<6&&Xf()==32&&Yf()==32))}function ap(e){for(;Yf();)switch(Uf){case e:return Hf;case 34:case 39:e!==34&&e!==39&&ap(Uf);break;case 40:e===41&&ap(e);break;case 92:Yf();break}return Hf}function op(e,t){for(;Yf()&&e+Uf!==57&&!(e+Uf===84&&Xf()===47););return`/*`+Qf(t,Hf-1)+`*`+Df(e===47?e:Yf())}function sp(e){for(;!$f(Xf());)Yf();return Qf(e,Hf)}function cp(e){return tp(lp(``,null,null,null,[``],e=ep(e),0,[0],e))}function lp(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Yf()){case 40:if(m!=108&&Nf(C,d-1)==58){Mf(C+=X(np(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=np(v);break;case 9:case 10:case 13:case 32:C+=rp(m);break;case 92:C+=ip(Zf()-1,7);continue;case 47:switch(Xf()){case 42:case 47:Lf(dp(op(Yf(),Zf()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=Ff(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=X(C,/\f/g,``)),p>0&&Ff(C)-d&&Lf(p>32?fp(C+`;`,r,n,d-1):fp(X(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(Lf(S=up(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)lp(C,t,S,S,b,a,d,s,x);else switch(f===99&&Nf(C,3)===110?100:f){case 100:case 108:case 109:case 115:lp(e,S,S,r&&Lf(up(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:lp(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Ff(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Jf()==125)continue}switch(C+=Df(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Ff(C)-1)*_,_=1;break;case 64:Xf()===45&&(C+=np(Yf())),f=Xf(),u=d=Ff(y=C+=sp(Zf())),v++;break;case 45:m===45&&Ff(C)==2&&(h=0)}}return a}function up(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=If(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=Pf(e,d+1,d=Ef(h=o[m])),y=e;_<p;++_)(y=Af(h>0?f[_]+` `+v:X(v,/&\f/g,f[_])))&&(c[g++]=y);return Gf(e,t,n,i===0?xf:s,c,l,u)}function dp(e,t,n){return Gf(e,t,n,bf,Df(qf()),Pf(e,2,-2),0)}function fp(e,t,n,r){return Gf(e,t,n,Sf,Pf(e,0,r),Pf(e,r+1,-1),r)}function pp(e,t){for(var n=``,r=If(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function mp(e,t,n,r){switch(e.type){case Tf:if(e.children.length)break;case Cf:case Sf:return e.return=e.return||e.value;case bf:return``;case wf:return e.return=e.value+`{`+pp(e.children,r)+`}`;case xf:e.value=e.props.join(`,`)}return Ff(n=pp(e.children,r))?e.return=e.value+`{`+n+`}`:``}function hp(e){var t=If(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function gp(e){return function(t){t.root||(t=t.return)&&e(t)}}var _p=function(e,t,n){for(var r=0,i=0;r=i,i=Xf(),r===38&&i===12&&(t[n]=1),!$f(i);)Yf();return Qf(e,Hf)},vp=function(e,t){var n=-1,r=44;do switch($f(r)){case 0:r===38&&Xf()===12&&(t[n]=1),e[n]+=_p(Hf-1,t,n);break;case 2:e[n]+=np(r);break;case 4:if(r===44){e[++n]=Xf()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=Df(r)}while(r=Yf());return e},yp=function(e,t){return tp(vp(ep(e),t))},bp=new WeakMap,xp=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!bp.get(n))&&!r){bp.set(e,!0);for(var i=[],a=yp(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},Sp=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function Cp(e,t){switch(kf(e,t)){case 5103:return Y+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+yf+e+vf+e+e;case 6828:case 4268:return Y+e+vf+e+e;case 6165:return Y+e+vf+`flex-`+e+e;case 5187:return Y+e+X(e,/(\w+).+(:[^]+)/,Y+`box-$1$2`+vf+`flex-$1$2`)+e;case 5443:return Y+e+vf+`flex-item-`+X(e,/flex-|-self/,``)+e;case 4675:return Y+e+vf+`flex-line-pack`+X(e,/align-content|flex-|-self/,``)+e;case 5548:return Y+e+vf+X(e,`shrink`,`negative`)+e;case 5292:return Y+e+vf+X(e,`basis`,`preferred-size`)+e;case 6060:return Y+`box-`+X(e,`-grow`,``)+Y+e+vf+X(e,`grow`,`positive`)+e;case 4554:return Y+X(e,/([^-])(transform)/g,`$1`+Y+`$2`)+e;case 6187:return X(X(X(e,/(zoom-|grab)/,Y+`$1`),/(image-set)/,Y+`$1`),e,``)+e;case 5495:case 3959:return X(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return X(X(e,/(.+:)(flex-)?(.*)/,Y+`box-pack:$3`+vf+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+Y+e+e;case 4095:case 3583:case 4068:case 2532:return X(e,/(.+)-inline(.+)/,Y+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ff(e)-1-t>6)switch(Nf(e,t+1)){case 109:if(Nf(e,t+4)!==45)break;case 102:return X(e,/(.+:)(.+)-([^]+)/,`$1`+Y+`$2-$3$1`+yf+(Nf(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Mf(e,`stretch`)?Cp(X(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(Nf(e,t+1)!==115)break;case 6444:switch(Nf(e,Ff(e)-3-(~Mf(e,`!important`)&&10))){case 107:return X(e,`:`,`:`+Y)+e;case 101:return X(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+Y+(Nf(e,14)===45?`inline-`:``)+`box$3$1`+Y+`$2$3$1`+vf+`$2box$3`)+e}break;case 5936:switch(Nf(e,t+11)){case 114:return Y+e+vf+X(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return Y+e+vf+X(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return Y+e+vf+X(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return Y+e+vf+e+e}return e}var wp=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Sf:e.return=Cp(e.value,e.length);break;case wf:return pp([Kf(e,{value:X(e.value,`@`,`@`+Y)})],r);case xf:if(e.length)return Rf(e.props,function(t){switch(jf(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return pp([Kf(e,{props:[X(t,/:(read-\w+)/,`:`+yf+`$1`)]})],r);case`::placeholder`:return pp([Kf(e,{props:[X(t,/:(plac\w+)/,`:`+Y+`input-$1`)]}),Kf(e,{props:[X(t,/:(plac\w+)/,`:`+yf+`$1`)]}),Kf(e,{props:[X(t,/:(plac\w+)/,vf+`input-$1`)]})],r)}return``})}}],Tp=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||wp,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[xp,Sp],l,u=[mp,gp(function(e){l.insert(e)})],d=hp(c.concat(r,u)),f=function(e){return pp(cp(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new _f({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},Ep=!0;function Dp(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var Op=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||Ep===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},kp=function(e,t,n){Op(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function Ap(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}v();var jp=!1,Mp=/[A-Z]|^ms/g,Np=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Pp=function(e){return e.charCodeAt(1)===45},Fp=function(e){return e!=null&&typeof e!=`boolean`},Ip=m(function(e){return Pp(e)?e:e.replace(Mp,`-$&`).toLowerCase()}),Lp=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(Np,function(e,t,n){return Hp={name:t,styles:n,next:Hp},t})}return C[e]!==1&&!Pp(e)&&typeof t==`number`&&t!==0?t+`px`:t},Rp=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;function zp(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return Hp={name:i.name,styles:i.styles,next:Hp},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Hp={name:o.name,styles:o.styles,next:Hp},o=o.next;return a.styles+`;`}return Bp(e,t,n);case`function`:if(e!==void 0){var s=Hp,c=n(e);return Hp=s,zp(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function Bp(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=zp(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:Fp(s)&&(r+=Ip(a)+`:`+Lp(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&jp)throw Error(Rp);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)Fp(o[c])&&(r+=Ip(a)+`:`+Lp(a,o[c])+`;`);else{var l=zp(e,t,o);switch(a){case`animation`:case`animationName`:r+=Ip(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}var Vp=/label:\s*([^\s;{]+)\s*(;|$)/g,Hp;function Up(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Hp=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=zp(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=zp(n,t,e[o]),r&&(i+=a[o]);Vp.lastIndex=0;for(var s=``,c;(c=Vp.exec(i))!==null;)s+=`-`+c[1];return{name:Ap(i)+s,styles:i,next:Hp}}var Wp=function(e){return e()},Gp=V.useInsertionEffect?V.useInsertionEffect:!1,Kp=Gp||Wp;Gp||V.useLayoutEffect;var qp=V.createContext(typeof HTMLElement<`u`?Tp({key:`css`}):null);qp.Provider;var Jp=function(e){return(0,V.forwardRef)(function(t,n){return e(t,(0,V.useContext)(qp),n)})},Yp=V.createContext({});({}).hasOwnProperty,f();var Xp=!1,Zp=b,Qp=function(e){return e!==`theme`},$p=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?Zp:Qp},em=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},tm=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Op(t,n,r),Kp(function(){return kp(t,n,r)}),null},nm=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=em(t,n,r),c=s||$p(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=Jp(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=V.useContext(Yp)}typeof e.className==`string`?a=Dp(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=Up(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?$p(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),V.createElement(V.Fragment,null,V.createElement(tm,{cache:t,serialized:m,isStringTag:typeof r==`string`}),V.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,`toString`,{value:function(){return o===void 0&&Xp?`NO_COMPONENT_SELECTOR`:`.`+o}}),h.withComponent=function(t,r){return e(t,he({},n,r,{shouldForwardProp:em(h,r,!0)})).apply(void 0,d)},h}},rm=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),im=nm.bind(null);rm.forEach(function(e){im[e]=im(e)});const am=im.div({position:`relative`,display:`flex`,height:`100vh`,flexDirection:`column`,backgroundColor:`transparent`}),om=x.div`
  ${{position:`relative`,flex:`1 1 0%`,overflow:`auto`}}
  
  ${e=>e.$backgroundUrl&&`
    &::before {
      content: '';
      position: fixed;
      height: 350px;
      width: 350px;
      right: 0;
      bottom: 56px;
      filter: blur(2px);
      background-image: url(${e.$backgroundUrl});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom right;
      opacity: 0.3;
      pointer-events: none;
      z-index: -1;
    }
  `}
`,sm=x(Qd.div)`
  ${{position:`fixed`,bottom:`0`,left:`0`,top:`0`,zIndex:`1000`,display:`flex`,width:`150px`,flexDirection:`column`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}}
  background-color: ${e=>w(e.theme.BACKGROUND,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 16px;
`,cm=x.div`
  ${{flex:`none`,padding:`1.25rem`}}
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  background-color: ${e=>e.theme.OFFSET};
  border-radius: 12px 12px 0 0;
`,lm=x.div`
  ${{marginTop:`0.25rem`,flex:`1 1 0%`,fontSize:`0.875rem`}}
  padding: 8px 6px;
  overflow-y: auto;
  text-align: center;
  color: ${e=>w(e.theme.PRIMARY,.7)};
`,um=x.h2`
  ${{margin:`0`,fontSize:`1.5rem`,fontWeight:`700`}}
  color: ${e=>e.theme.PRIMARY};
`,dm=x.div`
  position: relative;
`,fm=x.button`
  ${{display:`flex`,width:`100%`,cursor:`pointer`,alignItems:`center`,justifyContent:`space-between`,gap:`0.5rem`}}
  padding: 8px 10px;
  border-radius: 999px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>e.$open?w(e.theme.BACKGROUND,.82):w(e.theme.BACKGROUND,.68)};
  color: ${e=>e.theme.PRIMARY};
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${e=>w(e.theme.BACKGROUND,.86)};
  }

  &:active {
    transform: scale(0.98);
  }
`,pm=x.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  flex: 1;
`,mm=x.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: small;
  font-weight: 600;
`,hm=x.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  padding: 6px;
  border-radius: 14px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>w(e.theme.BACKGROUND,.94)};
  box-shadow: 0 10px 24px ${e=>w(e.theme.BACKGROUND,.45)};
  z-index: 2;
`,gm=x.button`
  ${{display:`flex`,width:`100%`,cursor:`pointer`,alignItems:`center`,justifyContent:`space-between`,borderStyle:`none`}}
  padding: 8px 10px;
  border-radius: 10px;
  background: ${e=>e.$active?w(e.theme.OFFSET,.42):`transparent`};
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  text-align: left;

  &:hover {
    background: ${e=>w(e.theme.OFFSET,.32)};
  }
`;x.p`
  ${{margin:`0`,fontSize:`0.875rem`}}
  color: ${e=>w(e.theme.PRIMARY,.7)};
`,im.div({flex:`1 1 0%`});const _m=x.nav`
  ${{flex:`none`,paddingLeft:`0`,paddingRight:`0`,paddingBottom:`50px`,paddingTop:`0.5rem`}}
  border-top: 1px solid ${e=>e.theme.BORDER};
`,vm=x.button`
  ${{width:`100%`,cursor:`pointer`,borderStyle:`none`,paddingLeft:`1.25rem`,paddingRight:`1.25rem`,paddingTop:`0.75rem`,paddingBottom:`0.75rem`,textAlign:`left`,fontSize:`15px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isActive?e.theme.OFFSET:`transparent`};
  color: ${e=>e.theme.PRIMARY};
  font-weight: ${e=>e.$isActive?600:400};
  
  &:hover {
    background-color: ${e=>w(e.theme.OFFSET,.5)};
  }
`,ym=im.div({position:`fixed`,bottom:`0`,left:`0`,right:`0`,top:`0`,zIndex:`999`,backgroundColor:`rgba(0, 0, 0, 0.6)`}),bm=im.div({position:`fixed`,bottom:`2px`,left:`2px`,zIndex:`1000`,display:`flex`,height:`3rem`,width:`3rem`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}),xm=x.button`
  ${{position:`fixed`,zIndex:`1001`,display:`flex`,height:`2.5rem`,width:`2.5rem`,cursor:`pointer`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-shadow":`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,"--tw-shadow-colored":`0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color)`,boxShadow:`var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)`}}
  background-color: ${e=>w(e.theme.BACKGROUND,.75)};
  border: 2px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
`,Sm=({isOpen:e,currentPage:t,onToggle:n,onNavigate:r,canAccessInitiativeList:i=!0})=>{let{theme:a}=zt(),{t:o,locale:s,setLocale:c,availableLocales:l}=Ct(),u=H(e=>e.playerData),d=String(u?.role||``).toUpperCase()===`GM`,[f,p]=(0,V.useState)(!1),m=(0,V.useRef)(null),h=(0,V.useMemo)(()=>({en:o(`common.locale.en`),es:o(`common.locale.es`),fr:o(`common.locale.fr`),de:o(`common.locale.de`)}),[o]);(0,V.useEffect)(()=>{e||p(!1)},[e]),(0,V.useEffect)(()=>{if(!f)return;let e=e=>{m.current&&!m.current.contains(e.target)&&p(!1)};return window.addEventListener(`mousedown`,e),()=>{window.removeEventListener(`mousedown`,e)}},[f]);let g=e=>{c(e),p(!1)};return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(su,{children:e&&(0,U.jsxs)(sm,{theme:a,initial:{x:-300},animate:{x:0},exit:{x:-300},transition:{type:`tween`,duration:.3},style:{boxShadow:`4px 0 12px rgba(0, 0, 0, 0.15)`},children:[(0,U.jsxs)(cm,{theme:a,children:[(0,U.jsx)(um,{theme:a,children:o(`nav.title`)}),(0,U.jsxs)(dm,{ref:m,children:[(0,U.jsxs)(fm,{theme:a,$open:f,type:`button`,"aria-haspopup":`listbox`,"aria-expanded":f,"aria-label":o(`nav.languageSwitcher`),onClick:()=>p(e=>!e),children:[(0,U.jsxs)(pm,{children:[(0,U.jsx)(uf,{size:16}),(0,U.jsx)(mm,{children:h[s]})]}),(0,U.jsx)(rf,{size:8})]}),f?(0,U.jsx)(hm,{theme:a,role:`listbox`,"aria-label":o(`nav.languageOptions`),children:l.map(e=>(0,U.jsxs)(gm,{theme:a,$active:e===s,type:`button`,role:`option`,"aria-selected":e===s,onClick:()=>g(e),children:[(0,U.jsx)(`span`,{children:h[e]}),e===s?(0,U.jsx)(nf,{size:14}):null]},e))}):null]})]}),(0,U.jsxs)(lm,{theme:a,children:[o(`nav.featureRequest`),(0,U.jsx)(`br`,{}),(0,U.jsx)(`br`,{}),o(`nav.featureSubmit`),` `,(0,U.jsx)(`a`,{href:`mailto:manuel@battle-system.com`,children:o(`nav.featureEmail`)}),` `,o(`nav.featureOr`),` `,(0,U.jsx)(`a`,{href:`https://discord.gg/Kh9hbHAZnX`,target:`_blank`,rel:`noreferrer`,children:o(`nav.battleSystemDiscord`)}),`.`]}),(0,U.jsxs)(_m,{theme:a,children:[i&&(0,U.jsx)(vm,{theme:a,$isActive:t===`ForgeMain`,onClick:()=>r(`ForgeMain`),children:o(`nav.main`)}),(0,U.jsx)(vm,{theme:a,$isActive:t===`Party`,onClick:()=>r(`Party`),children:o(`nav.party`)}),(0,U.jsx)(vm,{theme:a,$isActive:t===`ChatLog`,onClick:()=>r(`ChatLog`),children:o(`nav.systemLog`)}),d&&(0,U.jsx)(vm,{theme:a,$isActive:t===`System`,onClick:()=>r(`System`),children:o(`nav.system`)}),d&&(0,U.jsx)(vm,{theme:a,$isActive:t===`Settings`,onClick:()=>r(`Settings`),children:o(`nav.settings`)})]})]})}),e&&(0,U.jsx)(ym,{onClick:n}),(0,U.jsx)(bm,{children:(0,U.jsx)(xm,{theme:a,onClick:n,children:(0,U.jsx)(st,{size:24})})})]})},Cm=x.div`
  padding: 20px;
  color: ${e=>e.theme.PRIMARY};
  min-height: 100vh;
`,wm=x.h1`
  color: ${e=>e.theme.PRIMARY};
  background-color: ${e=>e.theme.OFFSET};
  padding: 2px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  font-variant: small-caps;
`,Tm=x.div`
  background-color: ${e=>w(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 15px 0;
  backdrop-filter: blur(8px);
`;x.div`
  background-color: ${e=>e.theme.OFFSET};
  color: ${e=>e.theme.PRIMARY};
  padding: 12px 15px;
  border-radius: 6px 6px 0 0;
  margin: -20px -20px 15px -20px;
  font-weight: 600;
  font-size: 18px;
`;const Em=x.button`
  background-color: ${e=>w(e.theme.OFFSET,e.variant===`secondary`?.5:.75)};
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px 8px;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>w(e.theme.OFFSET,.9)};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,Dm=x.input`
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px 8px;
  font-size: 14px;
  width: 100%;
  
  &::placeholder {
    color: ${e=>w(e.theme.PRIMARY,.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`;x.textarea`
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 10px 15px;
  font-size: 14px;
  width: 100%;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  
  &::placeholder {
    color: ${e=>w(e.theme.PRIMARY,.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`,x.select`
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
  
  option {
    background-color: ${e=>e.theme.BACKGROUND};
    color: ${e=>e.theme.PRIMARY};
  }
`,x.label`
  color: ${e=>e.theme.PRIMARY};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
`,x.hr`
  border: none;
  border-top: 2px solid ${e=>e.theme.BORDER};
  margin: 20px 0;
`,x.p`
  color: ${e=>e.theme.PRIMARY};
  line-height: 1.6;
  margin: 10px 0;
`,x.span`
  background-color: ${e=>w(e.theme.OFFSET,.75)};
  color: ${e=>e.theme.PRIMARY};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 12px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
`,x.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,x.li`
  padding: 12px 15px;
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${e=>w(e.theme.OFFSET,.2)};
  }
`;var Om=x.button`
  ${{position:`relative`,display:`inline-flex`,height:`1.5rem`,width:`3rem`,alignItems:`center`,borderRadius:`9999px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isOn?w(e.theme.OFFSET,.8):w(e.theme.BORDER,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${e=>w(e.theme.OFFSET,.3)};
  }
  
  &::after {
    content: '';
    ${{display:`inline-block`,height:`1rem`,width:`1rem`,transform:`translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,borderRadius:`9999px`,transitionProperty:`transform`}}
    background-color: ${e=>e.theme.PRIMARY};
    ${e=>e.$isOn?`transform: translateX(1.375rem);`:`transform: translateX(0.25rem);`}
  }
`;const Z=({label:e,isOn:t,onChange:n})=>{let{theme:r}=zt();return(0,U.jsx)(Om,{theme:r,$isOn:t,onClick:()=>{let r=!t;N.log(`${e}: ${r}`),n(r)},role:`switch`,"aria-checked":t,"aria-label":e})};var km=x.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${e=>e.$zIndexBase};
`,Am=x.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${e=>e.theme.BACKGROUND};
  border: 3px solid ${e=>e.theme.BORDER};
  border-radius: 8px;
  padding: 25px;
  z-index: ${e=>e.$zIndexBase+1};
  min-width: ${e=>e.$minWidth||`200px`};
  max-width: ${e=>e.$maxWidth||`500px`};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
`,jm=x.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 15px 0;
  font-size: 18px;
`,Mm=x.div`
  margin: 0 0 20px 0;
`,Nm=x.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;const Pm=({isOpen:e,title:t,onClose:n,children:r,actions:i,closeOnOverlayClick:a=!0,minWidth:o,maxWidth:s,zIndexBase:c=9999})=>{let{theme:l}=zt();return e?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(km,{$zIndexBase:c,onClick:a?n:void 0}),(0,U.jsxs)(Am,{theme:l,$minWidth:o,$maxWidth:s,$zIndexBase:c,onClick:e=>e.stopPropagation(),children:[t&&(0,U.jsx)(jm,{theme:l,children:t}),(0,U.jsx)(Mm,{children:r}),i&&(0,U.jsx)(Nm,{children:i})]})]}):null},Fm=e=>({reverseInitiative:e(`settings.tooltips.reverseInitiative`),popcornInitiative:e(`settings.tooltips.popcornInitiative`),initiativeDie:e(`settings.tooltips.initiativeDie`),initiativeModifierAttr:e(`settings.tooltips.initiativeModifierAttr`),initiativeModifierMath:e(`settings.tooltips.initiativeModifierMath`),showCardColumn:e(`settings.tooltips.showCardColumn`),showPlayerView:e(`settings.tooltips.showPlayerView`),showNonPartyUnits:e(`settings.tooltips.showNonPartyUnits`),showHpNumbersOnList:e(`settings.tooltips.showHpNumbersOnList`),ownerOnlyEdit:e(`settings.tooltips.ownerOnlyEdit`),showAdjustHpContextMenu:e(`settings.tooltips.showAdjustHpContextMenu`),showViewUnitContextMenuForPlayers:e(`settings.tooltips.showViewUnitContextMenuForPlayers`),showHpBarsOnTokens:e(`settings.tooltips.showHpBarsOnTokens`),hpOrientation:e(`settings.tooltips.hpOrientation`),showHpNumbersOnTokens:e(`settings.tooltips.showHpNumbersOnTokens`),showDeathEffect:e(`settings.tooltips.showDeathEffect`),showNamesOnTokens:e(`settings.tooltips.showNamesOnTokens`),showNamesToGm:e(`settings.tooltips.showNamesToGm`),showTurnEffect:e(`settings.tooltips.showTurnEffect`),useDescriptiveNames:e(`settings.tooltips.useDescriptiveNames`),enableRumble:e(`settings.tooltips.enableRumble`),enableBones:e(`settings.tooltips.enableBones`),enableDicePlus:e(`settings.tooltips.enableDicePlus`),enableTextBasedRolls:e(`settings.tooltips.enableTextBasedRolls`),enableObrNotification:e(`settings.tooltips.enableObrNotification`),showResultsToAll:e(`settings.tooltips.showResultsToAll`),enableDiscordLogging:e(`settings.tooltips.enableDiscordLogging`),discordUrl:e(`settings.tooltips.discordUrl`),enableConsoleLog:e(`settings.tooltips.enableConsoleLog`)}),Im=()=>{let e=H(e=>e.systemData);return H(e=>e.cacheReady)?e?{theme:e.theme,cardLayout:e.cardLayout,listLayout:e.listLayout,attributes:e.attributes,systemName:e.systemName,importDate:e.importDate,isLoading:!1}:{theme:{primary:S.theme_primary,offset:S.theme_offset,background:S.theme_background,border:S.theme_border,background_url:S.background_url},cardLayout:S.card_layout,listLayout:S.list_layout,attributes:S.attributes,systemName:S.name,importDate:null,isLoading:!1}:{theme:null,cardLayout:[],listLayout:[],attributes:[],systemName:``,importDate:null,isLoading:!0}};var Lm=`modulepreload`,Rm=function(e){return`/`+e},zm={};const Bm=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Rm(t,n),t in zm)return;zm[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Lm,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};var Vm=x.h2`
  ${{marginBottom:`1rem`,paddingBottom:`0.5rem`,fontSize:`1.25rem`,fontWeight:`600`}}
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
`,Q=x.div`
  ${{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`}}
  color: ${e=>e.theme.PRIMARY};
`,$=x.label`
  ${{flex:`1 1 0%`,cursor:`pointer`,textAlign:`left`,fontSize:`1rem`}}
  color: ${e=>e.theme.PRIMARY};
`,Hm=x.div`
  ${{marginLeft:`1rem`,display:`flex`,placeContent:`space-between`,alignItems:`center`,gap:`0.75rem`}}
  color: ${e=>e.theme.PRIMARY};
`,Um=x.label`
  ${{fontSize:`0.875rem`}}
  text-align: left;
  color: ${e=>e.theme.PRIMARY};
`,Wm=x.p`
  ${{marginTop:`0.25rem`,fontSize:`0.75rem`}}
  color: ${e=>w(e.theme.PRIMARY,.7)};
`,Gm=x.input`
  ${{borderRadius:`0.25rem`,paddingLeft:`0.75rem`,paddingRight:`0.75rem`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`,fontSize:`0.875rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  width: 50%;
  
  &::placeholder {
    color: ${e=>w(e.theme.PRIMARY,.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`,Km=x.select`
  ${{borderRadius:`0.25rem`,paddingLeft:`0.75rem`,paddingRight:`0.75rem`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`,fontSize:`0.875rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`,qm=x.button`
  background-color: ${e=>w(e.theme.OFFSET,.45)};
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: ${e=>e.theme.OFFSET};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Jm=im.div({marginTop:`0.5rem`,display:`flex`,justifyContent:`center`,gap:`0.75rem`}),Ym=x.p`
  margin: 8px 0 0;
  font-size: 13px;
  color: ${e=>e.$connected?e.theme.PRIMARY:w(e.theme.PRIMARY,.75)};
`,Xm=x.p`
  color: ${e=>w(e.theme.PRIMARY,.9)};
  margin: 0;
  line-height: 1.5;
`;const Zm=()=>{let{theme:e}=zt(),{t}=Ct(),{attributes:n}=Im(),r=H(e=>e.roomMetadata);H(e=>e.sceneMetadata);let i=H(e=>e.items),a=H(e=>e.cacheReady),[o,s]=(0,V.useState)(!1),[c,l]=(0,V.useState)(!1),[u,d]=(0,V.useState)(`D20`),[f,p]=(0,V.useState)(!1),[m,h]=(0,V.useState)(``),[g,_]=(0,V.useState)(`@STAT`),[v,y]=(0,V.useState)(!1),[b,x]=(0,V.useState)(!1),[S,C]=(0,V.useState)(!0),[w,E]=(0,V.useState)(!1),[D,k]=(0,V.useState)(!0),[ee,te]=(0,V.useState)(!0),[ne,re]=(0,V.useState)(!1),[ie,ae]=(0,V.useState)(`bottom`),[se,le]=(0,V.useState)(!1),[ue,de]=(0,V.useState)(!1),[fe,pe]=(0,V.useState)(!1),[me,he]=(0,V.useState)(!1),[ge,_e]=(0,V.useState)(!1),[ve,F]=(0,V.useState)(!1),[ye,I]=(0,V.useState)(!1),[be,xe]=(0,V.useState)(!1),[Se,Ce]=(0,V.useState)(!1),[Te,Ee]=(0,V.useState)(!1),[De,ke]=(0,V.useState)(!1),[Ae,je]=(0,V.useState)(!1),[Me,Ne]=(0,V.useState)(!1),[Pe,Fe]=(0,V.useState)(``),[Ie,Le]=(0,V.useState)(!1),Re=(0,V.useRef)(null),ze=(0,V.useRef)(null),[Ve,Ue]=(0,V.useState)(()=>Ze()),[Ge,Ke]=(0,V.useState)(()=>qe()),[Je,Xe]=(0,V.useState)(()=>Ye()),[Qe,$e]=(0,V.useState)(!1),[et,tt]=(0,V.useState)(!1),L=Fm(t);(0,V.useEffect)(()=>{let e=!0;return(async()=>{let t=await ht();e&&(Ue(t&&Ze()),Ke(qe()),Xe(Ye()))})(),()=>{e=!1}},[]);let R=r;(0,V.useEffect)(()=>{if(a){if(R[M.POPCORN_INITIATIVE]!==void 0&&s(R[M.POPCORN_INITIATIVE]),R[M.REVERSE_INITIATIVE]!==void 0&&l(R[M.REVERSE_INITIATIVE]),R[M.DICE_RANGE]!==void 0&&d(R[M.DICE_RANGE]),R[M.INITIATIVE_MODIFIER_BID]===void 0?h(``):h(R[M.INITIATIVE_MODIFIER_BID]||``),R[M.INITIATIVE_MODIFIER_EXPR]!==void 0){let e=(R[M.INITIATIVE_MODIFIER_EXPR]||`@STAT`).replace(/\bx\b/gi,`@STAT`).trim();_(e.length>0?e:`@STAT`)}else _(`@STAT`);if(R[M.SHOW_CARD_ACCESS]!==void 0&&p(R[M.SHOW_CARD_ACCESS]),R[M.SHOW_PLAYER_VIEW]!==void 0&&y(R[M.SHOW_PLAYER_VIEW]),R[M.SHOW_OWNER_ONLY_EDIT]!==void 0&&E(R[M.SHOW_OWNER_ONLY_EDIT]),R[M.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?k(!0):k(R[M.SHOW_MODIFY_UNIT_CONTEXT_MENU]),R[M.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===void 0?te(!0):te(R[M.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]),R[M.SHOW_NON_PARTY_UNITS]!==void 0&&x(R[M.SHOW_NON_PARTY_UNITS]),R[M.SHOW_LIST_HP_NUMBERS]===void 0?C(!0):C(R[M.SHOW_LIST_HP_NUMBERS]),R[M.SHOW_HP_BARS]!==void 0&&re(R[M.SHOW_HP_BARS]),R[M.HP_BAR_ORIENTATION]!==void 0&&ae(R[M.HP_BAR_ORIENTATION]),R[M.SHOW_HP_NUMBERS]!==void 0&&le(R[M.SHOW_HP_NUMBERS]),R[M.SHOW_DEATH_EFFECT]!==void 0&&de(R[M.SHOW_DEATH_EFFECT]),R[M.SHOW_NAMES]!==void 0&&pe(R[M.SHOW_NAMES]),R[M.SHOW_NAMES_TO_GM]!==void 0&&he(R[M.SHOW_NAMES_TO_GM]),R[M.SHOW_TURN_EFFECT]!==void 0&&_e(R[M.SHOW_TURN_EFFECT]),R[M.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&F(R[M.USE_DESCRIPTIVE_DUPLICATES]),R[M.ENABLE_RUMBLE]!==void 0&&I(R[M.ENABLE_RUMBLE]),R[M.ENABLE_BONES]!==void 0&&xe(R[M.ENABLE_BONES]),R[M.ENABLE_DICE_PLUS]!==void 0&&Ce(R[M.ENABLE_DICE_PLUS]),R[M.ENABLE_TEXT_BASED_ROLLS]!==void 0&&Ee(R[M.ENABLE_TEXT_BASED_ROLLS]),R[M.ENABLE_OBR_NOTIFICATION]!==void 0&&ke(R[M.ENABLE_OBR_NOTIFICATION]),R[M.SHOW_NOTIFICATION_TO_ALL]!==void 0&&je(R[M.SHOW_NOTIFICATION_TO_ALL]),R[M.ENABLE_DISCORD_LOGGING]!==void 0&&Ne(R[M.ENABLE_DISCORD_LOGGING]),R[M.DISCORD_URL]!==void 0&&Fe(R[M.DISCORD_URL]),R[M.ENABLE_CONSOLE_LOG]!==void 0){let e=R[M.ENABLE_CONSOLE_LOG];Le(e),N.setEnabled(e)}else Le(!1)}},[a,R]);let z=async(e,t)=>{await T.room.setMetadata({[e]:t})},nt=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},rt=n.filter(e=>e.attr_type===`numb`).sort((e,t)=>(e.attr_name||``).localeCompare(t.attr_name||``)),it=(e,n)=>{let r=e.trim();return r?n?/@STAT/i.test(r)?/\d\s*d\s*\d|\bd\s*\d/i.test(r)?{valid:!1,error:t(`settings.diceNotAllowedError`)}:A(r.replace(/@STAT/gi,`@${n}`))?{valid:!0}:{valid:!1,error:t(`settings.invalidSyntaxError`)}:{valid:!1,error:t(`settings.exprMustIncludeStatError`)}:{valid:!1,error:t(`settings.selectNumericAttributeError`)}:{valid:!1,error:t(`settings.exprRequiredError`)}},B=async(e,t)=>{await z(M.INITIATIVE_MODIFIER_BID,e),await z(M.INITIATIVE_MODIFIER_EXPR,t)},at=async e=>{if(h(e),!e){await B(``,g);return}let n=it(g,e);n.valid||await T.notification.show(n.error||t(`settings.invalidModifierSettingsError`),`WARNING`),await B(e,g)},ot=async()=>{let e=g.trim(),n=(e.length>0?e:`@STAT`).replace(/\bx\b/gi,`@STAT`);if(_(n),!m){await B(``,n);return}let r=it(n,m);if(!r.valid){await T.notification.show(r.error||t(`settings.invalidModifierExpressionError`),`WARNING`);return}await B(m,n)},st=async()=>{if(!m){await T.notification.show(t(`settings.selectAttributeBeforeTestingError`),`WARNING`);return}let e=g.replace(/\bx\b/gi,`@STAT`),n=it(e,m);if(!n.valid){await T.notification.show(n.error||t(`settings.invalidModifierExpressionError`),`WARNING`);return}let r=nt(u),i=Math.floor(Math.random()*r)+1,a=ce(e.replace(/@STAT/gi,`@${m}`),{bidValueMap:{[m]:14},onMissingBid:`useZero`});if(!a.valid||!a.notation){await T.notification.show(t(`settings.couldNotResolveModifierError`),`ERROR`);return}let o=Number(a.notation),s=Number.isFinite(o)?Math.trunc(o):0,c=i+s,l=e.replace(/@STAT/gi,`14`);await T.notification.show(t(`settings.mockInitiativeResult`,{sides:r,baseRoll:i,expression:l,modifier:s,total:c}),`SUCCESS`)},ct=async()=>{try{let e=await Oe(),n=JSON.stringify(e,null,2),r=new Blob([n],{type:`text/plain;charset=utf-8`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`forge-collection-${new Date().toISOString().slice(0,10)}.txt`,a.click(),URL.revokeObjectURL(i),await T.notification.show(t(`settings.collectionExportComplete`,{count:e.length}),`SUCCESS`)}catch(e){N.log(`Collection export failed`,e),await T.notification.show(t(`settings.collectionExportFailed`),`ERROR`)}},lt=()=>{tt(!0)},ut=()=>{tt(!1),Re.current?.click()},dt=async e=>{let n=e.target.files?.[0];if(n)try{let e=await n.text(),r=JSON.parse(e);if(!Array.isArray(r)){await T.notification.show(t(`settings.collectionImportArrayError`),`ERROR`);return}let i=await Be(r);await T.notification.show(t(`settings.collectionImportCompleteSummary`,{created:i.created,updated:i.updated,skipped:i.skipped}),`SUCCESS`)}catch(e){N.log(`Collection import failed`,e),await T.notification.show(t(`settings.collectionImportFailed`),`ERROR`)}finally{e.target.value=``}},ft=async()=>{$e(!0);try{await He(),await T.broadcast.sendMessage(O.AUTHSYNCCHANNEL,{type:`BS_AUTH_STATE`,source:O.EXTENSIONID,snapshot:We()},{destination:`LOCAL`}),Ue(Ze()),Ke(qe()),Xe(Ye()),await T.notification.show(t(`settings.connectedAccount`),`SUCCESS`)}catch(e){N.error(`Battle-System auth connection failed`,e),await T.notification.show(t(`settings.unableToConnectAccount`),`ERROR`),Ue(Ze()),Ke(qe()),Xe(Ye())}finally{$e(!1)}};return(0,U.jsxs)(Qd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[(0,U.jsxs)(Cm,{theme:e,children:[(0,U.jsx)(wm,{theme:e,children:t(`settings.pageTitle`)}),(0,U.jsxs)(Tm,{theme:e,children:[(0,U.jsx)(Vm,{theme:e,children:t(`settings.accountSectionTitle`)}),(0,U.jsx)(Jm,{children:(0,U.jsx)(Em,{theme:e,onClick:()=>{ft()},disabled:Qe,children:t(Qe?`settings.connecting`:Ve?`settings.reconnectAccount`:`settings.connectAccount`)})}),(0,U.jsx)(Ym,{theme:e,$connected:Ve,children:Ve?t(`settings.statusConnected`,{tier:Ge}):t(`settings.statusDisconnected`)})]}),(0,U.jsxs)(Tm,{theme:e,children:[(0,U.jsx)(Vm,{theme:e,children:t(`settings.collectionSectionTitle`)}),(0,U.jsxs)(Jm,{children:[(0,U.jsx)(Em,{theme:e,onClick:ct,children:t(`settings.export`)}),(0,U.jsx)(Em,{theme:e,onClick:lt,children:t(`settings.import`)})]}),(0,U.jsx)(`input`,{ref:Re,type:`file`,accept:`.txt,.json,text/plain,application/json`,onChange:dt,style:{display:`none`}})]}),(0,U.jsxs)(Tm,{theme:e,children:[(0,U.jsx)(Vm,{theme:e,children:t(`settings.listControlsSectionTitle`)}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.reverseInitiative,children:t(`settings.reverseInitiative`)})}),(0,U.jsx)(Z,{label:t(`settings.reverseInitiative`),isOn:c,onChange:async e=>{l(e),await z(M.REVERSE_INITIATIVE,e),e&&o&&(s(!1),await z(M.POPCORN_INITIATIVE,!1))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.popcornInitiative,children:t(`settings.popcornInitiative`)})}),(0,U.jsx)(Z,{label:t(`settings.popcornInitiative`),isOn:o,onChange:async e=>{s(e),await z(M.POPCORN_INITIATIVE,e),e&&c&&(l(!1),await z(M.REVERSE_INITIATIVE,!1))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.initiativeDie,children:t(`settings.initiativeDie`)})}),(0,U.jsx)(Gm,{theme:e,type:`text`,value:u,onChange:async e=>{let t=e.target.value;d(t),await z(M.DICE_RANGE,t),N.log(`Dice Range:`,t)},placeholder:`D20`,maxLength:3})]}),(0,U.jsxs)(Hm,{theme:e,children:[(0,U.jsx)(Um,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.initiativeModifierAttr,children:t(`settings.initiativeModifier`)})}),(0,U.jsxs)(Km,{theme:e,value:m,onChange:async e=>{await at(e.target.value)},children:[(0,U.jsx)(`option`,{value:``,children:t(`settings.none`)}),rt.map(e=>(0,U.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,U.jsxs)(Hm,{theme:e,children:[(0,U.jsx)(Um,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.initiativeModifierMath,children:t(`settings.math`)})}),(0,U.jsx)(Gm,{theme:e,type:`text`,value:g,onChange:e=>{_(e.target.value)},onBlur:async()=>{await ot()},placeholder:`floor((@STAT-10)/2)`,maxLength:120,disabled:!m}),(0,U.jsx)(qm,{theme:e,type:`button`,onClick:()=>{st()},disabled:!m,children:t(`settings.test`)})]}),(0,U.jsx)(Wm,{theme:e,children:t(`settings.initiativeModifierHint`)}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.showCardColumn,children:t(`settings.showCardColumn`)})}),(0,U.jsx)(Z,{label:t(`settings.showCardColumn`),isOn:f,onChange:async e=>{p(e),await z(M.SHOW_CARD_ACCESS,e)}})]})]}),(0,U.jsxs)(Tm,{theme:e,children:[(0,U.jsx)(Vm,{theme:e,children:t(`settings.playerControlsSectionTitle`)}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.showPlayerView,children:t(`settings.showPlayerView`)})}),(0,U.jsx)(Z,{label:t(`settings.showPlayerView`),isOn:v,onChange:async e=>{y(e),await z(M.SHOW_PLAYER_VIEW,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.showNonPartyUnits,children:t(`settings.showNonPartyUnits`)})}),(0,U.jsx)(Z,{label:t(`settings.showNonPartyUnits`),isOn:b,onChange:async e=>{x(e),await z(M.SHOW_NON_PARTY_UNITS,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.showHpNumbersOnList,children:t(`settings.showHpNumbersOnList`)})}),(0,U.jsx)(Z,{label:t(`settings.showHpNumbersOnList`),isOn:S,onChange:async e=>{C(e),await z(M.SHOW_LIST_HP_NUMBERS,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.ownerOnlyEdit,children:t(`settings.ownerOnlyEdit`)})}),(0,U.jsx)(Z,{label:t(`settings.ownerOnlyEdit`),isOn:w,onChange:async e=>{E(e),await z(M.SHOW_OWNER_ONLY_EDIT,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.showAdjustHpContextMenu,children:t(`settings.showAdjustHpContextMenu`)})}),(0,U.jsx)(Z,{label:t(`settings.showAdjustHpContextMenu`),isOn:D,onChange:async e=>{k(e),await z(M.SHOW_MODIFY_UNIT_CONTEXT_MENU,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.showViewUnitContextMenuForPlayers,children:t(`settings.showViewUnitContextMenuForPlayers`)})}),(0,U.jsx)(Z,{label:t(`settings.showViewUnitContextMenuForPlayers`),isOn:ee,onChange:async e=>{te(e),await z(M.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS,e)}})]})]}),(0,U.jsxs)(Tm,{theme:e,children:[(0,U.jsx)(Vm,{theme:e,children:t(`settings.gameControlsSectionTitle`)}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.showHpBarsOnTokens,children:t(`settings.showHpBarsOnTokens`)})}),(0,U.jsx)(Z,{label:t(`settings.showHpBarsOnTokens`),isOn:ne,onChange:async e=>{re(e),await z(M.SHOW_HP_BARS,e),e&&se&&(le(!1),await z(M.SHOW_HP_NUMBERS,!1)),e&&R[M.HP_BAR_ORIENTATION]===void 0&&(ae(`bottom`),await z(M.HP_BAR_ORIENTATION,`bottom`))}})]}),(ne||se)&&(0,U.jsxs)(Hm,{theme:e,children:[(0,U.jsx)(Um,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.hpOrientation,children:t(`settings.orientation`)})}),(0,U.jsxs)(Km,{theme:e,value:ie,onChange:async e=>{let t=e.target.value;ae(t),await z(M.HP_BAR_ORIENTATION,t)},children:[(0,U.jsx)(`option`,{value:`top`,children:t(`common.orientation.top`)}),(0,U.jsx)(`option`,{value:`bottom`,children:t(`common.orientation.bottom`)}),(0,U.jsx)(`option`,{value:`left`,children:t(`common.orientation.left`)}),(0,U.jsx)(`option`,{value:`right`,children:t(`common.orientation.right`)})]})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.showHpNumbersOnTokens,children:t(`settings.showHpNumbersOnTokens`)})}),(0,U.jsx)(Z,{label:t(`settings.showHpNumbersOnTokens`),isOn:se,onChange:async e=>{le(e),await z(M.SHOW_HP_NUMBERS,e),e&&ne&&(re(!1),await z(M.SHOW_HP_BARS,!1)),e&&R[M.HP_BAR_ORIENTATION]===void 0&&(ae(`bottom`),await z(M.HP_BAR_ORIENTATION,`bottom`))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.showDeathEffect,children:t(`settings.showDeathEffect`)})}),(0,U.jsx)(Z,{label:t(`settings.showDeathEffect`),isOn:ue,onChange:async e=>{de(e),await z(M.SHOW_DEATH_EFFECT,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.showNamesOnTokens,children:t(`settings.showNamesOnTokens`)})}),(0,U.jsx)(Z,{label:t(`settings.showNamesOnTokens`),isOn:fe,onChange:async e=>{pe(e),await z(M.SHOW_NAMES,e);let t=i.filter(e=>e.metadata[j.ON_LIST]===!0);e?(N.log(`Showing names on tokens`),await T.scene.items.updateItems(t,e=>{for(let t of e){let e=t.metadata[j.UNIT_NAME],n=t;e&&n.text&&(n.text.plainText=String(e))}})):(N.log(`Hiding names on tokens`),await T.scene.items.updateItems(t,e=>{for(let t of e){let e=t;e.text&&(e.text.plainText=``)}}))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.showNamesToGm,children:t(`settings.showNamesToGm`)})}),(0,U.jsx)(Z,{label:t(`settings.showNamesToGm`),isOn:me,onChange:async e=>{he(e),await z(M.SHOW_NAMES_TO_GM,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.showTurnEffect,children:t(`settings.showTurnEffect`)})}),(0,U.jsx)(Z,{label:t(`settings.showTurnEffect`),isOn:ge,onChange:async e=>{_e(e),await z(M.SHOW_TURN_EFFECT,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.useDescriptiveNames,children:t(`settings.useDescriptiveNames`)})}),(0,U.jsx)(Z,{label:t(`settings.useDescriptiveNames`),isOn:ve,onChange:async e=>{F(e),await z(M.USE_DESCRIPTIVE_DUPLICATES,e)}})]})]}),(0,U.jsxs)(Tm,{theme:e,children:[(0,U.jsx)(Vm,{theme:e,children:t(`settings.diceControlsSectionTitle`)}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.enableTextBasedRolls,children:t(`settings.enableTextBasedRolls`)})}),(0,U.jsx)(Z,{label:t(`settings.enableTextBasedRolls`),isOn:Te,onChange:async e=>{Ee(e),await z(M.ENABLE_TEXT_BASED_ROLLS,e),e&&(ke(!0),I(!1),xe(!1),Ce(!1),await z(M.ENABLE_OBR_NOTIFICATION,!0),await z(M.ENABLE_RUMBLE,!1),await z(M.ENABLE_BONES,!1),await z(M.ENABLE_DICE_PLUS,!1))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.enableRumble,children:t(`settings.enableRumble`)})}),(0,U.jsx)(Z,{label:t(`settings.enableRumble`),isOn:ye,onChange:async e=>{I(e),await z(M.ENABLE_RUMBLE,e),e&&(xe(!1),Ce(!1),Ee(!1),await z(M.ENABLE_BONES,!1),await z(M.ENABLE_DICE_PLUS,!1),await z(M.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.enableBones,children:t(`settings.enableBones`)})}),(0,U.jsx)(Z,{label:t(`settings.enableBones`),isOn:be,onChange:async e=>{xe(e),await z(M.ENABLE_BONES,e),e&&(I(!1),Ce(!1),Ee(!1),await z(M.ENABLE_RUMBLE,!1),await z(M.ENABLE_DICE_PLUS,!1),await z(M.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.enableDicePlus,children:t(`settings.enableDicePlus`)})}),(0,U.jsx)(Z,{label:t(`settings.enableDicePlus`),isOn:Se,onChange:async e=>{Ce(e),await z(M.ENABLE_DICE_PLUS,e),e&&(I(!1),xe(!1),Ee(!1),await z(M.ENABLE_RUMBLE,!1),await z(M.ENABLE_BONES,!1),await z(M.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.enableObrNotification,children:t(`settings.enableObrNotification`)})}),(0,U.jsx)(Z,{label:t(`settings.enableObrNotification`),isOn:De,onChange:async e=>{ke(e),await z(M.ENABLE_OBR_NOTIFICATION,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.showResultsToAll,children:t(`settings.showResultsToAll`)})}),(0,U.jsx)(Z,{label:t(`settings.showResultsToAll`),isOn:Ae,onChange:async e=>{je(e),await z(M.SHOW_NOTIFICATION_TO_ALL,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.enableDiscordLogging,children:t(`settings.enableDiscordLogging`)})}),(0,U.jsx)(Z,{label:t(`settings.enableDiscordLogging`),isOn:Me,onChange:async e=>{if(e&&!we(Pe.trim())){await T.notification.show(t(`settings.invalidDiscordWebhookWarning`),`WARNING`),Ne(!1),await z(M.ENABLE_DISCORD_LOGGING,!1);return}Ne(e),await z(M.ENABLE_DISCORD_LOGGING,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)(Um,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.discordUrl,children:t(`settings.discordUrl`)})}),(0,U.jsx)(Gm,{theme:e,type:`text`,value:Pe,onChange:async e=>{let t=e.target.value,n=t.trim();Fe(t),await z(M.DISCORD_URL,n),N.log(`Discord URL:`,n)},placeholder:`https://discord.com/api/webhooks/...`,maxLength:200})]})]}),(0,U.jsxs)(Tm,{theme:e,children:[(0,U.jsx)(Vm,{theme:e,children:t(`settings.otherSectionTitle`)}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(P,{theme:e,text:L.enableConsoleLog,children:t(`settings.enableConsoleLog`)})}),(0,U.jsx)(Z,{label:t(`settings.enableConsoleLog`),isOn:Ie,onChange:async e=>{Le(e),N.setEnabled(e),await z(M.ENABLE_CONSOLE_LOG,e)}})]})]}),(0,U.jsxs)(Tm,{theme:e,children:[(0,U.jsx)(Vm,{theme:e,children:t(`settings.clashImportSectionTitle`)}),(0,U.jsx)(Jm,{children:(0,U.jsx)(P,{theme:e,text:t(`settings.clashImportTooltip`),children:(0,U.jsx)(Em,{theme:e,onClick:()=>{ze.current?.click()},children:t(`settings.clashImportLocal`)})})}),(0,U.jsx)(`input`,{ref:ze,type:`file`,accept:`.txt,.json,text/plain,application/json`,onChange:async e=>{let r=e.target.files?.[0];if(r)try{let e=await r.text(),i=JSON.parse(e);if(!Array.isArray(i)){await T.notification.show(t(`settings.clashImportArrayError`),`ERROR`);return}let{migrateClashCollectionFromJson:a}=await Bm(async()=>{let{migrateClashCollectionFromJson:e}=await import(`./clashToForgeMapper-C2ummYEj.js`);return{migrateClashCollectionFromJson:e}},__vite__mapDeps([0,1])),o=oe(R,n),s=a(i,{hp:{currentHpBid:o.currentHpBid,maxHpBid:o.maxHpBid,attributes:n}});if(s.records.length===0){await T.notification.show(t(`settings.clashImportFailed`),`ERROR`);return}let c=await Be(s.records);await T.notification.show(t(`settings.clashImportCompleteSummary`,{created:c.created,updated:c.updated,skipped:c.skipped,failed:s.skipped}),`SUCCESS`)}catch(e){N.log(`Clash collection import failed`,e),await T.notification.show(t(`settings.clashImportFailed`),`ERROR`)}finally{e.target.value=``}},style:{display:`none`}})]})]}),(0,U.jsx)(Pm,{isOpen:et,title:t(`settings.confirmImportTitle`),onClose:()=>tt(!1),actions:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Em,{theme:e,variant:`secondary`,onClick:()=>tt(!1),children:t(`settings.cancel`)}),(0,U.jsx)(Em,{theme:e,onClick:ut,children:t(`settings.continue`)})]}),children:(0,U.jsx)(Xm,{theme:e,children:t(`settings.importConfirmMessage`)})})]})};var Qm=x.div`
  ${{display:`flex`,height:`100%`,flexDirection:`column`,padding:`1rem`}}
`,$m=x.div`
  ${{flex:`1 1 0%`,overflowY:`auto`,borderRadius:`0.5rem`,borderWidth:`2px`,"--tw-border-opacity":`1`,borderColor:`rgb(255 255 255 / var(--tw-border-opacity, 1))`,padding:`0.5rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  margin: 10px;
  white-space: break-spaces;
  word-wrap: break-word;
  margin-bottom: 50px;
`,eh=x.div`
  ${{marginBottom:`0.5rem`,textAlign:`left`}}
`,th=x.span`
  ${{marginRight:`0.5rem`,fontSize:`0.75rem`,"--tw-text-opacity":`1`,color:`rgb(203 213 224 / var(--tw-text-opacity, 1))`}}
`,nh=x.span`
  ${{fontSize:`0.875rem`,"--tw-text-opacity":`1`,color:`rgb(255 255 255 / var(--tw-text-opacity, 1))`}}
`;const rh=()=>{let e=Mt(e=>e.messages),t=(0,V.useRef)(null),{theme:n}=zt(),{t:r}=Ct();return(0,V.useEffect)(()=>{t.current?.scrollIntoView({behavior:`smooth`})},[e]),(0,U.jsx)(Qd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,U.jsxs)(Qm,{children:[(0,U.jsx)(wm,{theme:n,children:r(`nav.systemLog`)}),(0,U.jsxs)($m,{children:[e.map(e=>(0,U.jsxs)(eh,{children:[(0,U.jsx)(th,{children:e.timestamp}),(0,U.jsx)(nh,{children:e.text})]},e.id)),(0,U.jsx)(`div`,{ref:t})]})]})})},ih=`buff_effect_one`,ah=`debuff_effect_one`,oh=[{value:`buff_effect_one`,label:`Buff Effect One`},{value:`buff_effect_two`,label:`Buff Effect Two`}],sh=[{value:`debuff_effect_one`,label:`Debuff Effect One`},{value:`debuff_effect_two`,label:`Debuff Effect Two`}],ch=e=>oh.some(t=>t.value===e),lh=e=>sh.some(t=>t.value===e),uh=e=>{switch(e){case`buff_effect_two`:return`
uniform float2 size;
uniform float time;

float arrowShape(float2 p) {
  // Vertical shaft
  float shaftWidth = smoothstep(0.10, 0.03, abs(p.x));
  float shaftY = smoothstep(-0.07, -0.03, p.y) * (1.0 - smoothstep(0.30, 0.34, p.y));
  float shaft = shaftWidth * shaftY;

  // Upward triangular head (apex near negative y)
  float headTop = -0.34;
  float headBase = -0.08;
  float headVertical = smoothstep(headTop - 0.02, headTop + 0.02, p.y)
    * (1.0 - smoothstep(headBase - 0.02, headBase + 0.02, p.y));
  float t = clamp((p.y - headTop) / max(headBase - headTop, 0.001), 0.0, 1.0);
  float halfWidth = t * 0.23;
  float headWidth = smoothstep(halfWidth + 0.02, halfWidth - 0.005, abs(p.x));
  float head = headVertical * headWidth;

  // Slight neck blend to connect shaft and head cleanly
  float neck = smoothstep(0.12, 0.02, abs(p.x)) * smoothstep(-0.11, -0.07, p.y) * (1.0 - smoothstep(-0.04, -0.01, p.y));

  return max(max(shaft, head), neck);
}

half4 main(float2 coord) {
  float2 uv = (coord - size * 0.5) / max(size.y, 1.0);

  float flowSpeed = 0.55;
  float2 flowUv = uv;
  flowUv.y += time * flowSpeed;

  float2 tiled = flowUv * float2(3.0, 4.0);
  float2 cell = fract(tiled) - 0.5;

  float row = floor(tiled.y);
  float stagger = (mod(row, 2.0) * 0.5) - 0.25;
  cell.x += stagger;
  cell = fract(cell + 0.5) - 0.5;

  float arrow = arrowShape(cell * float2(1.0, 1.25));

  float trail = smoothstep(0.52, 0.12, abs(cell.x)) * smoothstep(0.42, -0.15, cell.y) * 0.22;
  float pulse = 0.65 + 0.35 * sin(time * 2.3 + row * 0.9);
  float intensity = clamp((arrow + trail) * pulse, 0.0, 1.0);

  float3 greenLow = float3(0.08, 0.38, 0.16);
  float3 greenHigh = float3(0.38, 1.0, 0.52);
  float3 color = mix(greenLow, greenHigh, intensity);

  float minDimension = max(min(size.x, size.y), 1.0);
  float radialNormalized = length((coord - size * 0.5) / (minDimension * 0.5));
  float edgeFade = 1.0 - smoothstep(0.70, 0.90, radialNormalized);

  float alpha = clamp(intensity * 0.62, 0.0, 0.55);
  alpha *= edgeFade;

  return half4(color * alpha, alpha);
}
`;case`buff_effect_one`:default:return`
uniform float2 size;
uniform float time;

float3 palette(float t) {
    float3 a = float3(0.5, 0.5, 0.5);
    float3 b = float3(0.5, 0.5, 0.5);
    float3 c = float3(1.0, 1.0, 1.0);
    float3 d = float3(0.0, 0.1, 0.2);
    return a + b * cos(6.28318 * (c * t + d));
}

half4 main(float2 coord) {
    float animTime = time * 0.55;
    float2 uv = (coord * 2.0 - size.xy) / max(size.y, 1.0);

    // Scale up the motion pattern on token attachments.
    uv *= 0.6;

    float angle = atan(uv.y, uv.x);
    angle = sin(4.0 * (angle - animTime * 0.2));
    angle = angle - 2.0 * length(uv);
    angle += animTime * 0.5;

    float2 polar = float2(length(uv), angle);
    uv = float2(polar.x * cos(angle), polar.x * sin(angle));
    uv = abs(uv);

    float2 uv0 = uv;
    float3 col = float3(0.0);
    const int steps = 2;

    for (int i = 0; i < steps; i++) {
        float3 col0 = palette(length(uv0) + float(i) * 0.2 + animTime * 0.8);

        uv = 1.75 * (fract(uv * 1.35) - 0.5);
        float d = 0.2 * length(uv) * cos(1.5 * (length(uv0) - animTime * 0.6));
        d = abs(d);
        d = pow(0.015 / max(d, 0.0012), 1.08);
        d = 0.5 * d / max(length(uv0), 0.015);
        d *= pow(2.0, -length(uv0));

        col += col0 * d * pow(float(steps - i) / float(steps), 2.0);
    }

    // Transparent black background: alpha follows light intensity.
    float light = max(col.r, max(col.g, col.b));
    float alpha = clamp(light * 0.55, 0.0, 0.45);
    float globalOpacity = 2.5;

    // Circular edge trim: fully transparent by 90% radius from center.
    float minDimension = max(min(size.x, size.y), 1.0);
    float radialNormalized = length((coord - size.xy * 0.5) / (minDimension * 0.5));
    float edgeFade = 1.0 - smoothstep(0.72, 0.90, radialNormalized);
    alpha *= edgeFade * 0.75 * globalOpacity;

    // Avoid harsh white clipping and keep highlights soft.
    float3 softColor = col / (float3(1.0) + col * 1.35);
    softColor *= 0.9;
    return half4(softColor * alpha, alpha);
}
`}},dh=e=>{switch(e){case`debuff_effect_two`:return`
uniform float2 size;
uniform float time;

float arrowShape(float2 p) {
  float shaftWidth = smoothstep(0.09, 0.028, abs(p.x));
  float shaftY = smoothstep(-0.34, -0.26, p.y) * (1.0 - smoothstep(0.00, 0.05, p.y));
  float shaft = shaftWidth * shaftY;

  float headBase = 0.00;
  float headTip = 0.34;
  float headVertical = smoothstep(headBase - 0.02, headBase + 0.02, p.y)
    * (1.0 - smoothstep(headTip - 0.02, headTip + 0.02, p.y));
  float t = clamp((p.y - headBase) / max(headTip - headBase, 0.001), 0.0, 1.0);
  float halfWidth = mix(0.24, 0.008, t);
  float headWidth = smoothstep(halfWidth + 0.02, halfWidth - 0.005, abs(p.x));
  float head = headVertical * headWidth;

  float neck = smoothstep(0.10, 0.02, abs(p.x)) * smoothstep(-0.04, 0.02, p.y) * (1.0 - smoothstep(0.06, 0.10, p.y));

  return max(max(shaft, head), neck);
}

half4 main(float2 coord) {
  float2 uv = (coord - size * 0.5) / max(size.y, 1.0);

  float flowSpeed = 0.55;
  float2 flowUv = uv;
  flowUv.y -= time * flowSpeed;

  float2 tiled = flowUv * float2(3.0, 4.0);
  float2 cell = fract(tiled) - 0.5;

  float row = floor(tiled.y);
  float stagger = (mod(row, 2.0) * 0.5) - 0.25;
  cell.x += stagger;
  cell = fract(cell + 0.5) - 0.5;

  float arrow = arrowShape(cell * float2(1.0, 1.25));

  float trail = smoothstep(0.48, 0.10, abs(cell.x)) * smoothstep(-0.02, -0.34, cell.y) * 0.20;
  float pulse = 0.65 + 0.35 * sin(time * 2.3 + row * 0.9);
  float intensity = clamp((arrow + trail) * pulse, 0.0, 1.0);

  float3 redLow = float3(0.34, 0.05, 0.08);
  float3 redHigh = float3(1.0, 0.22, 0.18);
  float3 color = mix(redLow, redHigh, intensity);

  float minDimension = max(min(size.x, size.y), 1.0);
  float radialNormalized = length((coord - size * 0.5) / (minDimension * 0.5));
  float edgeFade = 1.0 - smoothstep(0.70, 0.90, radialNormalized);

  float alpha = clamp(intensity * 0.62, 0.0, 0.55);
  alpha *= edgeFade;

  return half4(color * alpha, alpha);
}`;case`debuff_effect_one`:default:return`
uniform float2 size;
uniform float time;

float hash(float n) {
    return fract(sin(n) * 43758.5453123);
}

float noise(float2 p){
    float2 i = floor(p);
    float2 f = fract(p);

    float a = hash(i.x + i.y * 57.0);
    float b = hash(i.x + 1.0 + i.y * 57.0);
    float c = hash(i.x + (i.y + 1.0) * 57.0);
    float d = hash(i.x + 1.0 + (i.y + 1.0) * 57.0);

    float2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
           (c - a) * u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
}

half4 main(float2 coord)
{
    float2 uv = (coord - size.xy * 0.5) / max(size.y, 1.0);
    float r = length(uv);

    float a = atan(uv.y, uv.x);
    if (a < 0.0) a += 6.28318;

    float numCracks = 14.0;
    float angleStep = 6.28318 / numCracks;

    float crackIndex = floor(a / angleStep);
    float baseAngle = crackIndex * angleStep + angleStep * 0.5;

    float jagged = sin(r * 22.0 + crackIndex * 10.0 + time * 7.0) * 0.12;
    float crackAngle = baseAngle + jagged;

    float angleDiff = abs(a - crackAngle);
    angleDiff = min(angleDiff, 6.28318 - angleDiff);

    float thickness = 0.03 + 0.016 * noise(float2(r * 3.2, crackIndex));
    float crackLine = smoothstep(thickness, 0.0, angleDiff);
    float crackHalo = smoothstep(thickness * 1.9, thickness * 0.55, angleDiff);
    float crackOutline = clamp(crackHalo - crackLine, 0.0, 1.0);

    // ---- INWARD PULSE ----
    float speed = 0.5;
    float maxRadius = 1.2;

    float activationRadius = maxRadius - mod(time * speed, maxRadius);

    float bandWidth = 0.11;
    float pulseBand =
        smoothstep(activationRadius + bandWidth, activationRadius, r) -
        smoothstep(activationRadius, activationRadius - bandWidth, r);
    pulseBand = pow(clamp(pulseBand, 0.0, 1.0), 0.6);

    // Keep strongest visibility in the middle band; soften center and far edge.
    float innerFade = smoothstep(0.20, 0.36, r);
    float outerFade = 1.0 - smoothstep(0.74, 0.92, r);
    float radialBandMask = clamp(innerFade * outerFade, 0.0, 1.0);

    float intensity = crackLine * (pulseBand * 3.8 + 0.2);
    intensity *= radialBandMask;
    intensity = clamp(intensity, 0.0, 1.0);
    float visibleMask = smoothstep(0.04, 0.24, intensity);
    float emissive = pow(intensity, 0.55) * visibleMask;

    // ---- RED COLOR ----
    float3 crackColor = float3(1.0, 0.15, 0.1);

    float outlineStrength = crackOutline * (pulseBand * 1.2 + 0.35) * radialBandMask;
    float3 baseCol = crackColor * emissive;
    float3 col = mix(baseCol, float3(0.0), clamp(outlineStrength, 0.0, 0.75));

    // Alpha follows crack emission so non-red areas stay transparent.
    float alpha = clamp(emissive * 1.15, 0.0, 0.85);
    alpha *= radialBandMask;

    // Circular edge fade
    float minDimension = max(min(size.x, size.y), 1.0);
    float radialNormalized = length((coord - size.xy * 0.5) / (minDimension * 0.5));
    float edgeFade = 1.0 - smoothstep(0.70, 0.88, radialNormalized);
    alpha *= edgeFade;

    // Mild tone compression keeps red vivid without whitening.
    float3 softColor = col / (float3(1.0) + col * 0.22);
    return half4(softColor, alpha);
}
`}};var fh=O.EXTENSIONID,ph=`com.battle-system.forge`;const mh={SYSTEM_NAME:`${fh}/SystemName`,IMPORT_DATE:`${fh}/ImportDate`,SNAPSHOT_PUBLIC_ID:`${fh}/SnapshotPublicId`};var hh=re(S.attributes),gh=(e,t)=>e instanceof Error&&e.message?e.message:t,_h=x.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,vh=x.div`
  background-color: ${e=>w(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`,yh=x.h2`
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  padding: 12px 15px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 400;
`,bh=x.p`
  color: ${e=>w(e.theme.PRIMARY,.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`,xh=x.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 15px;
`,Sh=x.div`
  background-color: ${e=>e.color};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  height: 30px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
`,Ch=x.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.theme.PRIMARY};
  margin-top: 5px;
`,wh=x.div`
  margin-top: 16px;
  background-color: ${e=>w(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 14px;
`,Th=x.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 10px 0;
  font-size: 15px;
`,Eh=x.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`,Dh=x.label`
  color: ${e=>e.theme.PRIMARY};
  min-width: 84px;
  font-size: 13px;
`,Oh=x.select`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 6px 20px 6px 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  font-size: 13px;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
  }
`,kh=x.div`
  background-color: ${()=>w(`#FF0000`,.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,Ah=x.div`
  background-color: ${()=>w(`#00FF00`,.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,jh=x.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`,Mh=x.p`
  color: ${e=>w(e.theme.PRIMARY,.9)};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,Nh=x.div`
  margin-top: 30px;
`,Ph=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Fh=x.div`
  background-color: ${e=>w(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ih=x.div`
  flex: 1;
`,Lh=x.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`,Rh=x.div`
  color: ${e=>w(e.theme.PRIMARY,.7)};
  font-size: 13px;
  font-style: italic;
`,zh=x.div`
  display: flex;
  gap: 8px;
`,Bh=x.button`
  background-color: ${e=>e.$variant===`danger`?w(`#FF0000`,.2):w(e.theme.OFFSET,.5)};
  border: 2px solid ${e=>e.$variant===`danger`?`#FF0000`:e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.$variant===`danger`?`#FF0000`:e.theme.PRIMARY};
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${e=>e.$variant===`danger`?w(`#FF0000`,.3):e.theme.OFFSET};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Vh={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}},Hh=[`circle`,`square`,`diamond`,`hex`,`shield`],Uh={shape:`circle`,color:`#f5c542`,attribute:``},Wh=e=>typeof e==`string`&&Hh.includes(e),Gh=(e,t)=>{if(typeof e!=`string`)return t;let n=e.trim();return/^#[0-9a-fA-F]{6}$/.test(n)?n:t},Kh=(e,t,n,r)=>({shape:Wh(e[t])?e[t]:Uh.shape,color:Gh(e[n],Uh.color),attribute:typeof e[r]==`string`?e[r]:Uh.attribute});const qh=()=>{let{theme:e,updateThemeFromSystem:t}=zt(),{t:n,locale:r}=Ct(),i=H(e=>e.sceneMetadata),a=H(e=>e.roomMetadata),o=a,s=H(e=>e.systemData),c=H(e=>e.setSystemData),[l,u]=(0,V.useState)(()=>pt().premiumAuthorized),[d,f]=(0,V.useState)(``),[p,m]=(0,V.useState)(!1),[h,g]=(0,V.useState)(null),[_,v]=(0,V.useState)(null),[b,x]=(0,V.useState)(``),[C,E]=(0,V.useState)(null),[D,O]=(0,V.useState)(null),[k,A]=(0,V.useState)([]),[ee,te]=(0,V.useState)(``),[ne,re]=(0,V.useState)(``),[j,ie]=(0,V.useState)(ih),[ae,oe]=(0,V.useState)(ah),[se,ce]=(0,V.useState)(!1),[le,ue]=(0,V.useState)(!1),[de,fe]=(0,V.useState)(null),[pe,me]=(0,V.useState)(null),[P,he]=(0,V.useState)(Uh),[ge,_e]=(0,V.useState)({...Uh,color:`#5bb5ff`}),[ve,F]=(0,V.useState)([]),[ye,I]=(0,V.useState)(!1),[be,Se]=(0,V.useState)(null),[we,Te]=(0,V.useState)(``),Ee={buff_effect_one:n(`system.buffVisualPreset.buff_effect_one`),buff_effect_two:n(`system.buffVisualPreset.buff_effect_two`)},De={debuff_effect_one:n(`system.debuffVisualPreset.debuff_effect_one`),debuff_effect_two:n(`system.debuffVisualPreset.debuff_effect_two`)},Oe={circle:n(`system.tokenBadgeShape.circle`),square:n(`system.tokenBadgeShape.square`),diamond:n(`system.tokenBadgeShape.diamond`),hex:n(`system.tokenBadgeShape.hex`),shield:n(`system.tokenBadgeShape.shield`)};(0,V.useEffect)(()=>{let e=!0,t=async()=>{await ht(),e&&u(pt().premiumAuthorized)},n=Le(t=>{e&&u(t.premiumAuthorized)});return t(),()=>{e=!1,n()}},[]),(0,V.useEffect)(()=>{ke(),Fe()},[i,a,s,l]);let ke=()=>{try{if(s){let e=o[M.HP_CURRENT_BID],t=o[M.HP_MAX_BID],n=o[M.BUFF_VISUAL_PRESET],r=o[M.DEBUFF_VISUAL_PRESET],i=ch(n)?n:null,a=lh(r)?r:null,c=Kh(o,M.TOKEN_BADGE_ONE_SHAPE,M.TOKEN_BADGE_ONE_COLOR,M.TOKEN_BADGE_ONE_ATTRIBUTE),l=Kh(o,M.TOKEN_BADGE_TWO_SHAPE,M.TOKEN_BADGE_TWO_COLOR,M.TOKEN_BADGE_TWO_ATTRIBUTE);x(s.systemName),E(s.importDate),O(s.theme),A(s.attributes),te(e||``),re(t||``),de&&i===de&&fe(null),pe&&a===pe&&me(null),!se&&!de&&ie(e=>i||e),!le&&!pe&&oe(e=>a||e),he(c),_e(l);return}if(!l){let e={primary:S.theme_primary,offset:S.theme_offset,background:S.theme_background,border:S.theme_border,background_url:S.background_url},t=o[M.BUFF_VISUAL_PRESET],n=o[M.DEBUFF_VISUAL_PRESET],r=ch(t)?t:ih,i=lh(n)?n:ah,a=Kh(o,M.TOKEN_BADGE_ONE_SHAPE,M.TOKEN_BADGE_ONE_COLOR,M.TOKEN_BADGE_ONE_ATTRIBUTE),s=Kh(o,M.TOKEN_BADGE_TWO_SHAPE,M.TOKEN_BADGE_TWO_COLOR,M.TOKEN_BADGE_TWO_ATTRIBUTE);x(S.name),E(null),O(e),A(S.attributes),te(hh.currentHpBid),re(hh.maxHpBid),ie(r),oe(i),he(a),_e(s);return}let e=a[mh.SYSTEM_NAME],t=a[mh.IMPORT_DATE],n=o[M.HP_CURRENT_BID],r=o[M.HP_MAX_BID],i=o[M.BUFF_VISUAL_PRESET],c=o[M.DEBUFF_VISUAL_PRESET],u=ch(i)?i:null,d=lh(c)?c:null,f=Kh(o,M.TOKEN_BADGE_ONE_SHAPE,M.TOKEN_BADGE_ONE_COLOR,M.TOKEN_BADGE_ONE_ATTRIBUTE),p=Kh(o,M.TOKEN_BADGE_TWO_SHAPE,M.TOKEN_BADGE_TWO_COLOR,M.TOKEN_BADGE_TWO_ATTRIBUTE);x(e||S.name),E(t||null),O({primary:S.theme_primary,offset:S.theme_offset,background:S.theme_background,border:S.theme_border,background_url:S.background_url}),A(S.attributes),te(n||``),re(r||``),de&&u===de&&fe(null),pe&&d===pe&&me(null),!se&&!de&&ie(e=>u||e),!le&&!pe&&oe(e=>d||e),he(f),_e(p)}catch(e){N.error(`Error loading system from cache:`,e)}},Ae=async(e,t)=>{await T.room.setMetadata({[e]:t})},je=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let r;try{r=JSON.parse(e)}catch{throw Error(n(`system.error.invalidJsonField`,{field:t}))}if(!Array.isArray(r))throw Error(n(`system.error.invalidArrayField`,{field:t}));return r}throw Error(n(`system.error.invalidFieldType`,{field:t}))},Me=k.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`numb`||t===`resource`}),Ne=k.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`numb`||t===`resource`||t===`derived`}),Pe=async(e,t,n)=>{let r=e===1?he:_e,i=e===1?{shape:M.TOKEN_BADGE_ONE_SHAPE,color:M.TOKEN_BADGE_ONE_COLOR,attribute:M.TOKEN_BADGE_ONE_ATTRIBUTE}:{shape:M.TOKEN_BADGE_TWO_SHAPE,color:M.TOKEN_BADGE_TWO_COLOR,attribute:M.TOKEN_BADGE_TWO_ATTRIBUTE};r(e=>({...e,[t]:n})),await Ae(i[t],n)},Fe=()=>{try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(n&&n.startsWith(`${ph}.`)&&n.endsWith(`.backup`)){let t=localStorage.getItem(n);if(t){let n=JSON.parse(t);e.push(n)}}}e.sort((e,t)=>new Date(t.backupDate).getTime()-new Date(e.backupDate).getTime()),F(e)}catch(e){N.error(`Error loading backups:`,e)}},Ie=async e=>{try{if(!s){N.warn(`Cannot create backup: runtime system data is unavailable`);return}let e=s.systemName||S.name,t={name:e,backupDate:new Date().toISOString(),theme_primary:s.theme.primary,theme_offset:s.theme.offset,theme_background:s.theme.background,theme_border:s.theme.border,background_url:s.theme.background_url,card_layout:s.cardLayout,list_layout:s.listLayout,attributes:s.attributes},n=`${ph}.${e}.backup`;localStorage.setItem(n,JSON.stringify(t)),N.log(`Backup created for ${e}`),Fe()}catch(e){throw N.error(`Error creating backup:`,e),e}},Re=e=>{try{let t=`${ph}.${e}.backup`;localStorage.removeItem(t),N.log(`Backup deleted for ${e}`),Fe(),v(n(`system.success.backupDeleted`,{name:e}))}catch(e){N.error(`Error deleting backup:`,e),g(n(`system.error.deleteBackup`))}},ze=(e,t)=>{Te(e),Se(()=>t),I(!0)},Be=async()=>{I(!1),be&&(await be(),Se(null))},Ve=()=>{I(!1),Se(null),Te(``)},He=async()=>{if(!d.trim()){g(n(`system.error.enterShareId`));return}ze(n(`system.confirm.importSystem`),async()=>{await Ue()})},Ue=async()=>{if(!Ye()){g(n(`system.error.premiumImport`));return}m(!0),g(null),v(null);try{await R();let{data:e,error:r}=await bt(async()=>y.rpc(`bs_forge_import_system_snapshot`,{p_source_share_id:d.trim()}));if(r)throw r;if(!e){g(n(`system.error.noSystemFound`)),m(!1);return}let i=Array.isArray(e)?e[0]:e;if(!i||typeof i.snapshot_public_id!=`string`)throw Error(n(`system.error.snapshotInvalid`));let a=je(i.card_layout,`card_layout`),o=je(i.list_layout,`list_layout`),s=je(i.attributes,`attributes`);if(!Array.isArray(s))throw Error(n(`system.error.attributesInvalid`));await Ie(b);let l={primary:i.theme_primary,offset:i.theme_offset,background:i.theme_background,border:i.theme_border,background_url:i.background_url},u=new Date().toISOString();await T.room.setMetadata({[mh.SNAPSHOT_PUBLIC_ID]:i.snapshot_public_id,[mh.SYSTEM_NAME]:i.system_name,[mh.IMPORT_DATE]:u}),c({theme:l,cardLayout:a,listLayout:o,attributes:s,systemName:i.system_name,importDate:u,snapshotPublicId:i.snapshot_public_id}),x(i.system_name),E(u),O(l),t(l.primary,l.offset,l.background,l.border,l.background_url),v(n(`system.success.systemImported`,{name:i.system_name})),f(``),N.log(`System snapshot imported and loaded:`,{systemName:i.system_name,snapshotPublicId:i.snapshot_public_id})}catch(e){N.error(`Error fetching system:`,e),g(gh(e,n(`system.error.fetchSystem`)))}finally{m(!1)}},We=async e=>{ze(n(`system.confirm.restoreBackup`,{name:e.name}),async()=>{await Ge(e)})},Ge=async e=>{m(!0),g(null),v(null);try{if(!Ye()){g(n(`system.error.premiumRestore`));return}await R(),await Ie(b);let r={primary:e.theme_primary,offset:e.theme_offset,background:e.theme_background,border:e.theme_border,background_url:e.background_url};if(!Array.isArray(e.card_layout)||!Array.isArray(e.list_layout)||!Array.isArray(e.attributes))throw Error(n(`system.error.backupInvalid`));let i=new Date().toISOString(),a=`forge-backup:${e.name.trim().toLowerCase()}`,{data:o,error:s}=await bt(async()=>y.rpc(`bs_forge_upsert_user_snapshot_payload`,{p_source_share_id:a,p_system_name:e.name,p_background_url:e.background_url,p_theme_primary:e.theme_primary,p_theme_offset:e.theme_offset,p_theme_background:e.theme_background,p_theme_border:e.theme_border,p_card_layout:e.card_layout,p_list_layout:e.list_layout,p_attributes:e.attributes}));if(s)throw s;let l=Array.isArray(o)?o[0]:o;if(!l||typeof l.snapshot_public_id!=`string`)throw Error(n(`system.error.backupPublishFailed`));c({theme:r,cardLayout:e.card_layout,listLayout:e.list_layout,attributes:e.attributes,systemName:e.name,importDate:i,snapshotPublicId:l.snapshot_public_id}),await T.room.setMetadata({[mh.SNAPSHOT_PUBLIC_ID]:l.snapshot_public_id,[mh.SYSTEM_NAME]:e.name,[mh.IMPORT_DATE]:i}),x(e.name),E(i),O(r),t(r.primary,r.offset,r.background,r.border,r.background_url),v(n(`system.success.backupRestored`,{name:e.name})),N.log(`System restored from backup:`,e.name)}catch(e){N.error(`Error restoring backup:`,e),g(n(`system.error.restoreBackup`))}finally{m(!1)}},Ke=async()=>{m(!0),g(null),v(null);try{let e={primary:S.theme_primary,offset:S.theme_offset,background:S.theme_background,border:S.theme_border,background_url:S.background_url};c({theme:e,cardLayout:S.card_layout,listLayout:S.list_layout,attributes:S.attributes,systemName:S.name,importDate:null,snapshotPublicId:null}),await T.room.setMetadata({[mh.SNAPSHOT_PUBLIC_ID]:null,[mh.SYSTEM_NAME]:S.name,[mh.IMPORT_DATE]:null}),x(S.name),E(null),O(e),t(e.primary,e.offset,e.background,e.border,e.background_url),v(n(`system.success.resetDefault`))}catch(e){g(n(`system.error.resetDefault`)),N.error(`Error resetting to default:`,e)}finally{m(!1)}},qe=e=>e?new Date(e).toLocaleDateString(r,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):null,Je=!l,Xe=!l;return(0,U.jsxs)(Qd.div,{variants:Vh,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,U.jsxs)(Cm,{theme:e,children:[(0,U.jsx)(wm,{theme:e,children:n(`system.pageTitle`)}),(0,U.jsx)(yh,{theme:e,children:b}),C?(0,U.jsx)(bh,{theme:e,children:n(`system.importedOn`,{value:qe(C)})}):(0,U.jsx)(bh,{theme:e,children:n(`system.usingDefaultSystem`)}),D&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(xh,{children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(Sh,{color:D.primary,theme:e,children:D.primary}),(0,U.jsx)(Ch,{theme:e,children:n(`system.swatch.primary`)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(Sh,{color:D.offset,theme:e,children:D.offset}),(0,U.jsx)(Ch,{theme:e,children:n(`system.swatch.offset`)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(Sh,{color:D.background,theme:e,children:D.background}),(0,U.jsx)(Ch,{theme:e,children:n(`system.swatch.background`)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(Sh,{color:D.border,theme:e,children:D.border}),(0,U.jsx)(Ch,{theme:e,children:n(`system.swatch.border`)})]})]}),(0,U.jsxs)(wh,{theme:e,children:[(0,U.jsx)(Th,{theme:e,children:n(`system.settingsSectionTitle`)}),(0,U.jsxs)(Eh,{children:[(0,U.jsx)(Dh,{theme:e,children:n(`system.currentHp`)}),(0,U.jsxs)(Oh,{theme:e,value:ee,disabled:Xe,onChange:async e=>{if(Xe)return;let t=e.target.value;te(t),await Ae(M.HP_CURRENT_BID,t)},children:[(0,U.jsx)(`option`,{value:``,children:n(`system.selectAttribute`)}),Me.map(e=>(0,U.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?n(`system.resourceOptionSuffix`):``]},e.attr_bid))]})]}),(0,U.jsxs)(Eh,{children:[(0,U.jsx)(Dh,{theme:e,children:n(`system.maxHp`)}),(0,U.jsxs)(Oh,{theme:e,value:ne,disabled:Xe,onChange:async e=>{if(Xe)return;let t=e.target.value;re(t),await Ae(M.HP_MAX_BID,t)},children:[(0,U.jsx)(`option`,{value:``,children:n(`system.selectAttribute`)}),Me.map(e=>(0,U.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?n(`system.resourceOptionSuffix`):``]},e.attr_bid))]})]}),Xe&&(0,U.jsx)(bh,{theme:e,children:n(`system.premiumHpMappingLocked`)}),(0,U.jsxs)(Eh,{children:[(0,U.jsx)(Dh,{theme:e,children:n(`system.buffVisual`)}),(0,U.jsx)(Oh,{theme:e,value:j,onChange:async e=>{let t=e.target.value;if(ch(t)){ie(t),fe(t),ce(!0);try{await Ae(M.BUFF_VISUAL_PRESET,t)}finally{ce(!1)}}},children:oh.map(e=>(0,U.jsx)(`option`,{value:e.value,children:Ee[e.value]},e.value))})]}),(0,U.jsxs)(Eh,{children:[(0,U.jsx)(Dh,{theme:e,children:n(`system.debuffVisual`)}),(0,U.jsx)(Oh,{theme:e,value:ae,onChange:async e=>{let t=e.target.value;if(lh(t)){oe(t),me(t),ue(!0);try{await Ae(M.DEBUFF_VISUAL_PRESET,t)}finally{ue(!1)}}},children:sh.map(e=>(0,U.jsx)(`option`,{value:e.value,children:De[e.value]},e.value))})]}),(0,U.jsxs)(Eh,{children:[(0,U.jsx)(Dh,{theme:e,children:n(`system.tokenBadgeOne`)}),(0,U.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,width:`100%`},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,width:`100%`,alignItems:`center`},children:[(0,U.jsx)(Oh,{theme:e,value:P.shape,"aria-label":n(`system.tokenBadgeShape`),onChange:async e=>{let t=e.target.value;Wh(t)&&await Pe(1,`shape`,t)},children:Hh.map(e=>(0,U.jsx)(`option`,{value:e,children:Oe[e]},e))}),(0,U.jsx)(Dm,{theme:e,type:`color`,"aria-label":n(`system.tokenBadgeColor`),value:P.color,onChange:async e=>{await Pe(1,`color`,e.target.value)},style:{width:`56px`,padding:`4px`,minHeight:`36px`,flexShrink:0}})]}),(0,U.jsx)(`div`,{style:{width:`100%`,boxSizing:`border-box`},children:(0,U.jsxs)(Oh,{theme:e,value:P.attribute,"aria-label":n(`system.tokenBadgeAttribute`),onChange:async e=>{await Pe(1,`attribute`,e.target.value)},children:[(0,U.jsx)(`option`,{value:``,children:n(`system.tokenBadgeNoAttribute`)}),Ne.map(e=>(0,U.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?n(`system.resourceOptionSuffix`):``]},`badge-one-${e.attr_bid}`))]})})]})]}),(0,U.jsxs)(Eh,{children:[(0,U.jsx)(Dh,{theme:e,children:n(`system.tokenBadgeTwo`)}),(0,U.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,width:`100%`},children:[(0,U.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,width:`100%`,alignItems:`center`},children:[(0,U.jsx)(Oh,{theme:e,value:ge.shape,"aria-label":n(`system.tokenBadgeShape`),onChange:async e=>{let t=e.target.value;Wh(t)&&await Pe(2,`shape`,t)},children:Hh.map(e=>(0,U.jsx)(`option`,{value:e,children:Oe[e]},e))}),(0,U.jsx)(Dm,{theme:e,type:`color`,"aria-label":n(`system.tokenBadgeColor`),value:ge.color,onChange:async e=>{await Pe(2,`color`,e.target.value)},style:{width:`56px`,padding:`4px`,minHeight:`36px`,flexShrink:0}})]}),(0,U.jsx)(`div`,{style:{width:`100%`,boxSizing:`border-box`},children:(0,U.jsxs)(Oh,{theme:e,value:ge.attribute,"aria-label":n(`system.tokenBadgeAttribute`),onChange:async e=>{await Pe(2,`attribute`,e.target.value)},children:[(0,U.jsx)(`option`,{value:``,children:n(`system.tokenBadgeNoAttribute`)}),Ne.map(e=>(0,U.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?n(`system.resourceOptionSuffix`):``]},`badge-two-${e.attr_bid}`))]})})]})]})]})]}),(0,U.jsxs)(vh,{theme:e,children:[(0,U.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0},children:n(`system.importSectionTitle`)}),(0,U.jsx)(`p`,{style:{color:w(e.PRIMARY,.8),fontSize:`14px`},children:n(Je?`system.importLockedDescription`:`system.importDescription`)}),(0,U.jsx)(_h,{children:(0,U.jsx)(Dm,{theme:e,type:`text`,value:d,onChange:e=>f(e.target.value),placeholder:Je?``:n(`system.shareIdPlaceholder`),disabled:p||Je,onKeyPress:e=>e.key===`Enter`&&He()})}),(0,U.jsxs)(jh,{children:[(0,U.jsx)(Em,{theme:e,onClick:He,disabled:p||Je||!d.trim(),children:n(p?`system.importButtonLoading`:`system.importButton`)}),(0,U.jsx)(Em,{theme:e,variant:`secondary`,onClick:Ke,disabled:p,children:n(`system.useDefaultButton`)})]})]}),h&&(0,U.jsxs)(kh,{theme:e,children:[(0,U.jsx)(`strong`,{children:n(`system.errorPrefix`)}),` `,h]}),_&&(0,U.jsxs)(Ah,{theme:e,children:[(0,U.jsx)(`strong`,{children:n(`system.successPrefix`)}),` `,_]}),ve.length>0&&(0,U.jsx)(Nh,{children:(0,U.jsxs)(Tm,{theme:e,children:[(0,U.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0,marginBottom:`15px`},children:n(`system.backupsSectionTitle`)}),(0,U.jsx)(Ph,{children:ve.map(t=>(0,U.jsxs)(Fh,{theme:e,children:[(0,U.jsxs)(Ih,{children:[(0,U.jsx)(Lh,{theme:e,children:t.name}),(0,U.jsx)(Rh,{theme:e,children:n(`system.backedUpOn`,{value:qe(t.backupDate)})})]}),(0,U.jsxs)(zh,{children:[(0,U.jsx)(Bh,{theme:e,onClick:()=>We(t),disabled:p,title:n(`system.importBackupTitle`),children:(0,U.jsx)(xe,{size:18})}),(0,U.jsx)(Bh,{theme:e,$variant:`danger`,onClick:()=>Re(t.name),disabled:p,title:n(`system.deleteBackupTitle`),children:(0,U.jsx)(Ce,{size:18})})]})]},`${t.name}-${t.backupDate}`))})]})})]}),(0,U.jsx)(Pm,{isOpen:ye,title:n(`system.confirmActionTitle`),onClose:Ve,actions:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Em,{theme:e,variant:`secondary`,onClick:Ve,children:n(`system.cancel`)}),(0,U.jsx)(Em,{theme:e,onClick:Be,children:n(`system.confirm`)})]}),children:(0,U.jsx)(Mh,{theme:e,children:we})})]},`system`)};function Jh(e,t){let n=e.replace(`#`,``);n.length===3&&(n=n.split(``).map(e=>e+e).join(``));let r=parseInt(n,16);return`rgba(${r>>16&255}, ${r>>8&255}, ${r&255}, ${t})`}var Yh=class{static async CenterViewportOnImage(e){let t=await T.scene.grid.getDpi(),n=await T.viewport.getScale(),r=await T.viewport.getWidth(),i=await T.viewport.getHeight(),a={x:r/2,y:i/2},o={x:a.x/n,y:a.y/n},s=await this.GetImageCenter(e,t),c={x:s.x-o.x,y:s.y-o.y},l={x:c.x*n*-1,y:c.y*n*-1};await T.viewport.animateTo({position:l,scale:n})}static async GetImageCenter(e,t){if(n(e)){let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{x:e.position.x-a+r/2,y:e.position.y-o+i/2}}else if(i(e)&&e.points.length>0)return{x:e.points[0].x,y:e.points[0].y};else return{x:e.position.x,y:e.position.y}}};const Xh=`${k}/effects`;var Zh=`${k}/effects-expired`,Qh=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,$h=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,eg=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`,tg=x.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
`,ng=x.div`
  flex: 0 0 120px;
  min-width: 120px;
  display: flex;
  align-items: flex-end;
`,rg=x.label`
  color: ${e=>w(e.theme.PRIMARY,.75)};
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`,ig=x.input`
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 13px;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
  }
`,ag=x.select`
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: 6px 8px;
  height: 38px;
  font-size: 13px;
  cursor: pointer;
  appearance: auto;
  -webkit-appearance: menulist;
  -moz-appearance: menulist;
  padding-right: 22px;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
  }
`,og=x(ag)`
  min-width: 180px;
  height: 96px;
  padding-right: 8px;
`,sg=x.button`
    background: ${e=>w(e.theme.OFFSET,.5)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 4px;
  height: 38px;
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 10px;
  cursor: pointer;
  font-size: 13px;
  width: auto;

  &:hover {
    font-size: 16px;
  }
`,cg=x.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 240px;
  overflow-y: auto;
`,lg=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background: ${e=>w(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,ug=x.div`
  color: ${e=>w(e.theme.PRIMARY,.8)};
  font-size: 12px;
`,dg=x.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,fg=x.p`
  color: ${e=>w(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,pg=x.p`
  color: #ff6b6b;
  margin: 0;
  font-size: 12px;
`,mg=x.div`
  position: relative;
  display: inline-flex;
`,hg=x.button`
  background: ${e=>e.$active?w(e.theme.OFFSET,.65):`rgba(0, 0, 0, 0.3)`};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.$active?e.theme.PRIMARY:e.theme.OFFSET};
  padding: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${e=>e.theme.OFFSET};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,gg=x.span`
  position: absolute;
  top: -7px;
  right: -7px;
  min-width: 16px;
  height: 16px;
  border-radius: 999px;
  background: ${e=>e.theme.PRIMARY};
  color: ${e=>e.theme.BACKGROUND};
  border: 1px solid ${e=>e.theme.BORDER};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  padding: 0 3px;
`,_g=(e,t=`Unknown`)=>Array.isArray(e)?e.reduce((e,n)=>{if(!n||typeof n!=`object`)return e;let r=n,i=typeof r.name==`string`?r.name.trim():``,a=Number(r.remaining),o=Number.isFinite(a)?Math.max(0,Math.trunc(a)):0,s=r.durationType===`turns`?`turns`:`rounds`,c=r.endTiming===`end`?`end`:`start`,l=r.effectType===`buff`?`buff`:r.effectType===`debuff`?`debuff`:`neutral`,u=Array.isArray(r.targets)?Array.from(new Set(r.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!i||!o||e.push({id:typeof r.id==`string`&&r.id?r.id:crypto.randomUUID(),name:i,remaining:o,durationType:s,endTiming:c,effectType:l,targets:u,createdByName:typeof r.createdByName==`string`&&r.createdByName?r.createdByName:t,createdById:typeof r.createdById==`string`?r.createdById:void 0}),e},[]):[];const vg=({items:e,units:t,setItems:n,playerData:r})=>{let{t:i}=Ct(),[a,o]=(0,V.useState)(null),[s,c]=(0,V.useState)(``),[l,u]=(0,V.useState)(`1`),[d,f]=(0,V.useState)(`rounds`),[p,m]=(0,V.useState)(`start`),[h,g]=(0,V.useState)(`neutral`),[_,v]=(0,V.useState)([]),[y,b]=(0,V.useState)(null),x=(0,V.useMemo)(()=>{let t=new Map;return e.forEach(e=>{e.metadata?.[j.ON_LIST]===!0&&t.set(e.id,_g(e.metadata?.[Xh],i(`effectsManager.unknownSource`)))}),t},[e,i]),S=e=>x.get(e)||[],C=async(t,r)=>{let i=r.filter(e=>e.remaining>0);n(e.map(e=>{if(e.id!==t)return e;let n={...e.metadata||{}};return i.length>0?n[Xh]=i:delete n[Xh],{...e,metadata:n}})),await T.scene.items.updateItems([t],e=>{let t={...e[0].metadata||{}};i.length>0?t[Xh]=i:delete t[Xh],e[0].metadata=t})},w=async e=>{try{await T.broadcast.sendMessage(Zh,{message:e},{destination:`ALL`})}catch(t){N.error(`Failed to broadcast expired effect message`,t),await T.notification.show(e,`WARNING`)}},E=async e=>{if(e.length!==0)try{await T.broadcast.sendMessage(O.MARKCONNECT,e,{destination:`LOCAL`})}catch(e){N.error(`Failed to broadcast marked effect update`,e)}},D=async(t,n)=>{if(String(r?.role||``).toUpperCase()!==`GM`)return;let a=[],o=[],s=[];e.forEach(e=>{if(e.metadata?.[j.ON_LIST]!==!0)return;let r=_g(e.metadata?.[Xh],i(`effectsManager.unknownSource`));if(r.length===0)return;let c=!1,l=[];r.forEach(r=>{if(!(r.endTiming===t&&(r.durationType===`turns`||e.id===n))){l.push(r);return}let a=r.remaining-1;if(c=!0,a<=0){o.push(i(`effectsManager.expiredNotification`,{unit:e.name||i(`effectsManager.unitFallback`),effect:r.name})),s.push({LabelName:r.name,TokenId:e.id,Show:!1});return}l.push({...r,remaining:a})}),c&&a.push({unitId:e.id,effects:l})});for(let e of a)await C(e.unitId,e.effects);if(await E(s),o.length>0)for(let e of o)await w(e)},k=(0,V.useMemo)(()=>a&&t.find(e=>e.id===a)||null,[a,t]),A=(0,V.useMemo)(()=>a?S(a):[],[a,x]);return(0,V.useEffect)(()=>{let e=T.broadcast.onMessage(Zh,async e=>{let t=e.data?.message;typeof t!=`string`||!t.trim()||await T.notification.show(t,`WARNING`)});return()=>{e()}},[]),{effectsModalUnitId:a,selectedEffectsUnit:k,activeEffectsForSelectedUnit:A,effectNameInput:s,setEffectNameInput:c,effectDurationInput:l,setEffectDurationInput:u,effectDurationType:d,setEffectDurationType:f,effectEndTiming:p,setEffectEndTiming:m,effectType:h,setEffectType:g,effectTargetIds:_,setEffectTargetIds:e=>{v(Array.from(new Set(e)))},effectsModalError:y,units:t,getEffectsForUnit:S,handleOpenEffectsModal:e=>{b(null),c(``),u(`1`),f(`rounds`),m(`start`),g(`neutral`),v([e]),o(e)},handleCloseEffectsModal:()=>{o(null),b(null)},handleAddEffect:async()=>{if(!a)return;let n=s.trim(),r=parseInt(l,10);if(!n){b(i(`effectsManager.error.enterName`));return}if(!Number.isFinite(r)||r<=0){b(i(`effectsManager.error.durationPositive`));return}let o=Array.from(new Set(_.filter(e=>t.some(t=>t.id===e))));if(o.length===0){b(i(`effectsManager.error.selectTarget`));return}let f=S(a),m=k?.name||e.find(e=>e.id===a)?.name||i(`effectsManager.unknownSource`),y={id:crypto.randomUUID(),name:n,remaining:r,durationType:d,endTiming:p,effectType:h,targets:o,createdByName:m,createdById:a};await C(a,[...f,y]),await E([{LabelName:y.name,TokenId:a,Show:!0}]),b(null),c(``),u(`1`),g(`neutral`),v([a])},handleDeleteEffect:async e=>{if(!a)return;let t=S(a),n=t.find(t=>t.id===e);await C(a,t.filter(t=>t.id!==e)),n&&await E([{LabelName:n.name,TokenId:a,Show:!1}])},processEffectsForTurnEvent:D}},yg=({manager:e})=>{let{theme:t}=zt(),{t:n}=Ct(),r=(0,V.useMemo)(()=>{let t=new Map;return e.units.forEach(e=>{t.set(e.id,e.name)}),t},[e.units]),i=e=>n(e===`buff`?`effectsManager.type.buff`:e===`debuff`?`effectsManager.type.debuff`:`effectsManager.type.neutral`),a=e=>n(e===`turns`?`effectsManager.durationType.turns`:`effectsManager.durationType.rounds`),o=e=>n(e===`start`?`effectsManager.endTiming.start`:`effectsManager.endTiming.end`),s=e=>{if(e.length===0)return n(`effectsManager.targets.none`);let t=e.map(e=>r.get(e)).filter(e=>typeof e==`string`&&e.length>0);return t.length===0?n(`effectsManager.targets.count`,{count:e.length}):t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`};return(0,U.jsx)(Pm,{isOpen:!!e.effectsModalUnitId,title:e.selectedEffectsUnit?n(`effectsManager.titleWithUnit`,{unit:e.selectedEffectsUnit.name}):n(`effectsManager.title`),onClose:e.handleCloseEffectsModal,minWidth:`520px`,maxWidth:`600px`,children:(0,U.jsxs)(Qh,{children:[(0,U.jsxs)($h,{children:[(0,U.jsxs)(eg,{children:[(0,U.jsxs)(tg,{style:{flex:`0 0 120px`},children:[(0,U.jsx)(rg,{theme:t,children:n(`effectsManager.field.effect`)}),(0,U.jsx)(ig,{theme:t,type:`text`,placeholder:n(`effectsManager.placeholder.name`),value:e.effectNameInput,onChange:t=>e.setEffectNameInput(t.target.value)})]}),(0,U.jsxs)(tg,{style:{flex:`0 0 140px`},children:[(0,U.jsx)(rg,{theme:t,children:n(`effectsManager.field.duration`)}),(0,U.jsx)(ig,{theme:t,type:`number`,min:1,value:e.effectDurationInput,onChange:t=>e.setEffectDurationInput(t.target.value)})]}),(0,U.jsxs)(tg,{style:{flex:`0 0 120px`},children:[(0,U.jsx)(rg,{theme:t,children:n(`effectsManager.field.durationBy`)}),(0,U.jsxs)(ag,{theme:t,value:e.effectDurationType,onChange:t=>e.setEffectDurationType(t.target.value),children:[(0,U.jsx)(`option`,{value:`turns`,children:n(`effectsManager.durationType.turns`)}),(0,U.jsx)(`option`,{value:`rounds`,children:n(`effectsManager.durationType.rounds`)})]})]})]}),(0,U.jsxs)(eg,{children:[(0,U.jsxs)(tg,{style:{flex:`0 0 120px`},children:[(0,U.jsx)(rg,{theme:t,children:n(`effectsManager.field.type`)}),(0,U.jsxs)(ag,{theme:t,value:e.effectType,onChange:t=>e.setEffectType(t.target.value),children:[(0,U.jsx)(`option`,{value:`neutral`,children:n(`effectsManager.type.neutral`)}),(0,U.jsx)(`option`,{value:`buff`,children:n(`effectsManager.type.buff`)}),(0,U.jsx)(`option`,{value:`debuff`,children:n(`effectsManager.type.debuff`)})]})]}),(0,U.jsxs)(tg,{style:{flex:`0 0 140px`},children:[(0,U.jsx)(rg,{theme:t,children:n(`effectsManager.field.endsAt`)}),(0,U.jsxs)(ag,{theme:t,value:e.effectEndTiming,onChange:t=>e.setEffectEndTiming(t.target.value),children:[(0,U.jsx)(`option`,{value:`start`,children:n(`effectsManager.endTiming.start`)}),(0,U.jsx)(`option`,{value:`end`,children:n(`effectsManager.endTiming.end`)})]})]}),(0,U.jsx)(ng,{children:(0,U.jsx)(sg,{theme:t,onClick:e.handleAddEffect,style:{width:`100%`},children:n(`effectsManager.add`)})})]})]}),(0,U.jsxs)(tg,{children:[(0,U.jsx)(rg,{theme:t,children:n(`effectsManager.field.targets`)}),(0,U.jsx)(og,{theme:t,multiple:!0,value:e.effectTargetIds,onChange:t=>{let n=Array.from(t.target.selectedOptions).map(e=>e.value);e.setEffectTargetIds(n)},children:e.units.map(e=>(0,U.jsx)(`option`,{value:e.id,children:e.name},e.id))})]}),e.effectsModalError&&(0,U.jsx)(pg,{theme:t,children:e.effectsModalError}),e.activeEffectsForSelectedUnit.length===0?(0,U.jsx)(fg,{theme:t,children:n(`effectsManager.empty`)}):(0,U.jsx)(cg,{children:e.activeEffectsForSelectedUnit.map(r=>(0,U.jsxs)(lg,{theme:t,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(dg,{theme:t,children:r.name}),(0,U.jsx)(ug,{theme:t,children:n(`effectsManager.meta.summary`,{type:i(r.effectType),remaining:r.remaining,durationType:a(r.durationType),endTiming:o(r.endTiming),source:r.createdByName})}),(0,U.jsx)(ug,{theme:t,children:n(`effectsManager.targets.label`,{targets:s(r.targets)})})]}),(0,U.jsx)(sg,{theme:t,onClick:()=>{e.handleDeleteEffect(r.id)},children:n(`effectsManager.delete`)})]},r.id))})]})})},bg=({activeEffectsCount:e,canInteract:t,onOpen:n,icon:r})=>{let{theme:i}=zt();return(0,U.jsxs)(mg,{children:[(0,U.jsx)(hg,{theme:i,$active:e>0,disabled:!t,onClick:()=>{t&&n()},children:r||(0,U.jsx)(be,{})}),e>0&&(0,U.jsx)(gg,{theme:i,children:e>99?`99+`:e})]})};var xg=x.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,Sg=x.input`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 4px;
  font-size: 14px;
  width: 60px;
  text-align: center;
  backdrop-filter: blur(12px);
  cursor: text;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
  }
`;const Cg=({theme:e,unit:t,canInteract:n,elevationDraftValue:r,onElevationDraftChange:i,onCommitElevationChange:a})=>(0,U.jsx)(xg,{theme:e,children:(0,U.jsx)(Sg,{theme:e,type:`text`,inputMode:`decimal`,min:-999,max:999,step:1,value:r??String(t.elevation??0),readOnly:!n,onChange:n?e=>i(t.id,e.target.value):void 0,onBlur:n?e=>a(t.id,e.target.value):void 0,onKeyDown:e=>{n&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}})}),wg=({theme:e,canInteract:t,icon:n,activeEffectsCount:r,onOpen:i})=>(0,U.jsx)(xg,{theme:e,children:(0,U.jsx)(bg,{activeEffectsCount:r,canInteract:t,icon:n||(0,U.jsx)(be,{}),onOpen:i})});var Tg=`${k}/elevation-badge`,Eg=`${k}/elevation-badge-owner`,Dg=`${k}/elevation`,Og=200,kg=40,Ag=60,jg=120,Mg=24,Ng=(e,t)=>{if(!e)return;if(e.startsWith(`#`))return Jh(e,t);let n=e.match(/^rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\)$/i);if(n){let[,e,r,i]=n;return`rgba(${e}, ${r}, ${i}, ${t})`}let r=e.match(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i);if(r){let[,e,n,i]=r;return`rgba(${e}, ${n}, ${i}, ${t})`}return e},Pg=e=>`
    0 1px 1px ${w(e.BACKGROUND,.95)},
    0 0 2px ${w(e.BACKGROUND,.85)}
  `,Fg=/(\d+)d(\d+)([kd][hl]\d+|!)?/gi,Ig=u`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,Lg={anchor:gt,aperture:Re,award:Xe,"battery-charging":rt,book:Je,calendar:mt,clock:dt,"cloud-lightning":at,drama:ft,carrot:z,bone:ot,compass:$e,"dollar-sign":B,feather:Ee,eye:Ke,heart:ye,moon:I,music:_e,shield:ve,star:De,sun:be,target:Te,users:et,wind:tt,zap:me,sword:F,swords:ge,axe:Qe,"bow-arrow":Ge,coins:ze,wand:ue,flower:Ie,skull:Me,castle:Ue,cross:lt,"test-tube-diagonal":Se,squirrel:St,snowflake:de,shell:je,pickaxe:Ne,"heart-plus":Fe,"heart-crack":Pe,fan:le},Rg=x.div`
  padding: 2px;
  width: 100%;
`,zg=x.h1`
  color: ${e=>e.theme.PRIMARY};
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`,Bg=x.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
`,Vg=x.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$compactMode?`end`:`center`};
  gap: ${e=>e.$compactMode?`8px`:`16px`};
  position: relative;
  padding: ${e=>e.$compactMode?`4px 8px`:`8px`};
  background-color: ${e=>w(e.theme.BACKGROUND,.75)};
  border-top: 2px solid ${e=>e.theme.BORDER};
`,Hg=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.$compactMode?`8px`:`16px`};
`,Ug=x.button`
  background: ${e=>e.disabled?w(e.theme.BORDER,.3):w(e.theme.OFFSET,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>Pg(e.theme)};
  padding: 4px 4px;
  height: 36px;
  width: ${e=>e.$compact?`40px`:`80px`};
  font-size: 14px;
  font-weight: 600;
  font-variant: small-caps;
  cursor: ${e=>e.disabled?`not-allowed`:`pointer`};
  transition: all 0.2s ease;
  opacity: ${e=>e.disabled?.5:1};
  
  &:hover {
    background: ${e=>e.disabled?w(e.theme.BORDER,.3):e.theme.OFFSET};
  }
  
  &:active {
    transform: ${e=>e.disabled?`none`:`scale(0.95)`};
  }

  svg {
    filter: drop-shadow(0 1px 1px ${e=>w(e.theme.BACKGROUND,.95)})
      drop-shadow(0 0 2px ${e=>w(e.theme.BACKGROUND,.75)});
  }
`,Wg=x(Ug)`
  position: absolute;
  right: 8px;
  width: 40px;
  height: 36px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
    filter: drop-shadow(0 1px 1px ${e=>w(e.theme.BACKGROUND,.95)})
      drop-shadow(0 0 3px ${e=>w(e.theme.BACKGROUND,.8)});
  }
`,Gg=x(Ug)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 36px;
  padding: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`,Kg=x(Ug)`
  position: absolute;
  right: ${e=>e.$hasReset?`52px`:`8px`};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 36px;
  padding: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`,qg=x.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: ${e=>e.$compactMode?`14px`:`16px`};
  font-weight: 600;
  min-width: ${e=>e.$compactMode?`44px`:`80px`};
  text-align: center;
`,Jg=x.table`
  width: ${e=>e.$compact?`max-content`:`100%`};
  min-width: ${e=>e.$compact?`${Og}px`:`100%`};
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
`,Yg=x.thead`
  background-color: ${e=>w(e.theme.BACKGROUND,.5)};
`,Xg=x.tr``,Zg=x.th`
  color: ${e=>e.theme.OFFSET};
  padding-bottom: 6px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  font-variant: small-caps;
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  min-width: ${e=>e.$fixedWidth?`${e.$fixedWidth}px`:`${e.$minWidth||0}px`};
  width: ${e=>e.$fixedWidth?`${e.$fixedWidth}px`:`auto`};
  max-width: ${e=>e.$fixedWidth?`${e.$fixedWidth}px`:`none`};
  
  svg {
    width: 20px;
    height: 20px;
    display: inline-block;
  }
`,Qg=x.button`
  border: 1px solid ${e=>w(e.theme.BORDER,e.$active?.95:.5)};
  background: ${e=>e.$active?w(e.theme.OFFSET,.28):`transparent`};
  color: ${e=>e.theme.OFFSET};
  border-radius: 6px;
  width: 75%;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.18s ease;

  &:hover {
    border-color: ${e=>w(e.theme.OFFSET,.95)};
    background: ${e=>w(e.theme.OFFSET,e.$active?.38:.18)};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,$g=x.div`
  position: fixed;
  left: ${e=>`${e.$left}px`};
  top: ${e=>`${e.$y}px`};
  transform: ${e=>e.$placement===`top`?`translateY(calc(-100% - 10px))`:`translateY(10px)`};
  pointer-events: none;
  z-index: 99999;
  width: max-content;
  max-width: min(320px, calc(100vw - 16px));
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid ${e=>w(e.theme.BORDER,.9)};
  background: ${e=>w(e.theme.BACKGROUND,.96)};
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
  line-height: 1.3;
  text-align: left;
  box-shadow: 0 8px 24px ${e=>w(e.theme.BACKGROUND,.65)};
  backdrop-filter: blur(8px);

  &::after {
    content: '';
    position: absolute;
    left: clamp(12px, ${e=>`${e.$arrowX}px`}, calc(100% - 12px));
    ${e=>e.$placement===`top`?`top: 100%;`:`bottom: 100%;`}
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    ${e=>e.$placement===`top`?`border-top: 6px solid ${w(e.theme.BACKGROUND,.96)};`:`border-bottom: 6px solid ${w(e.theme.BACKGROUND,.96)};`}
  }
`,e_=x.tbody``,t_=x.tr`
  ${e=>e.$isCurrentTurn&&e.theme&&`
    background: linear-gradient(to left, ${w(e.theme.OFFSET,.4)} 0%, transparent 100%);
  `}
  cursor: context-menu;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &:not(:last-child) td {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`,n_=x.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,r_=x(n_)`
  font-weight: 700;
  font-size: 18px;
  color: ${e=>e.theme.OFFSET};
  min-width: 60px;
`,i_=x(n_)`
  min-width: 48px;
`,a_=x.button`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.BORDER};
  background: rgba(0, 0, 0, 0.3);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${e=>e.theme.OFFSET};
  }
`,o_=x.img`
  width: 18px;
  height: 18px;
  pointer-events: none;
`,s_=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    width: 24px;
    height: 24px;
  }
`,c_=x.input`
  background: ${e=>e.$isRollable?w(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.3)`};
  border: 1px solid ${e=>e.$isRollable?w(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?Pg(e.theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${w(e.theme.BACKGROUND,.28)}, 0 0 0 1px ${w(e.theme.OFFSET,.18)}`:`none`};
  padding: 2px 4px;
  font-size: 18px;
  font-weight: 700;
  width: 50px;
  text-align: center;
  backdrop-filter: blur(12px);
  cursor: ${e=>e.$isRollable?`pointer`:`text`};
  
  /* Remove spinner controls */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${w(e.theme.OFFSET,.35)}, inset 0 0 0 1px ${w(e.theme.BACKGROUND,.35)}`:`none`};
  }
`,l_=x.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,u_=x.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  background: ${e=>w(e.theme.OFFSET,.2)};
  border: 1px solid ${e=>w(e.theme.OFFSET,.95)};
  border-radius: 4px;
  box-shadow:
    0 0 0 1px ${e=>w(e.theme.BACKGROUND,.65)} inset,
    0 0 10px ${e=>w(e.theme.OFFSET,.55)};
`,d_=x.div`
  position: absolute;
  inset: 0;
  background: ${e=>w(e.theme.OFFSET,.2)};
  border-radius: inherit;
`,f_=x.div`
  position: absolute;
  inset: 0;
  background: ${e=>w(e.theme.OFFSET,.5)};
  border-radius: inherit;
  opacity: 0;
  animation: ${Ig} 2.8s ease-in-out infinite;

  filter: hue-rotate(180deg) saturate(1.15) brightness(1.08);
`,p_=x.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    color: ${e=>e.theme.OFFSET};
    filter:
      drop-shadow(0 1px 1px ${e=>w(e.theme.BACKGROUND,.95)})
      drop-shadow(0 0 3px ${e=>w(e.theme.BACKGROUND,.85)});
  }
`,m_=x(n_)`
  text-align: left;
  font-weight: 500;
  min-width: 120px;
  max-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  color: ${e=>e.$isSelected?e.theme.OFFSET:e.theme.PRIMARY};
  text-shadow: ${e=>e.$outlineColor?`
        1px 1px 2px black,
        2px 2px 2px ${e.$outlineColor},
        4px 4px 4px ${e.$outlineColor}
      `:`none`};
`,h_=x.input`
  background: ${e=>e.$isRollable?w(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.4)`};
  border: 1px solid ${e=>e.$isRollable?w(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?Pg(e.theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${w(e.theme.BACKGROUND,.28)}, 0 0 0 1px ${w(e.theme.OFFSET,.18)}`:`none`};
  padding: 2px 4px;
  font-size: ${e=>e.$small?`12px`:`14px`};
  width: ${e=>e.$small?`40px`:`60px`};
  text-align: center;
  backdrop-filter: blur(12px);
  cursor: ${e=>e.$isRollable?`pointer`:`text`};
  
  /* Remove spinner controls */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${w(e.theme.OFFSET,.35)}, inset 0 0 0 1px ${w(e.theme.BACKGROUND,.35)}`:`none`};
  }
`,g_=x.select`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 4px;
  font-size: 13px;
  min-width: 72px;
  max-width: 140px;
  text-align: center;
  text-align-last: center;
  backdrop-filter: blur(12px);

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,__=x.span`
  margin: 0 2px;
  color: ${e=>e.theme.OFFSET};
  font-weight: 500;
`,v_=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,y_=x.button`
  background: ${e=>e.$active?w(e.theme.OFFSET,.65):`rgba(0, 0, 0, 0.3)`};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.$active?e.theme.PRIMARY:e.theme.OFFSET};
  padding: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${e=>e.theme.OFFSET};
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`,b_=x.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.BORDER};
  cursor: pointer;
  margin: 0 2px;
  background: ${e=>w(e.theme.BACKGROUND,.55)};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  background-image: none;

  &:checked {
    background-color: ${e=>e.theme.PRIMARY};
    border-color: ${e=>e.theme.BORDER};
    background-image: none !important;
    background-size: initial;
    background-position: initial;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
    box-shadow: ${e=>`0 0 0 2px ${w(e.theme.PRIMARY,.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,x_=x.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  min-width: 54px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.BORDER};
  background: ${e=>w(e.theme.PRIMARY,.75)};
  color: ${e=>w(e.theme.OFFSET,.96)};
  box-shadow: ${e=>`0 4px 14px ${w(e.theme.BACKGROUND,.65)}`};
  text-shadow: ${e=>`1px 1px 0 ${w(e.theme.BACKGROUND,.95)}`};
  padding: 4px 8px;
  font-size: 13px;
  font-weight: 700;
  font-style: italic;
  text-align: center;
`,S_=x.div`
  display: flex;
  flex-wrap: wrap;
  width: 62px;
  gap: 3px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,C_=x.button`
  width: 10px;
  height: 10px;
  min-width: 10px;
  min-height: 10px;
  border-radius: 50%;
  border: 1px solid ${e=>e.theme.BORDER};
  background: ${e=>e.$filled?e.theme.PRIMARY:`transparent`};
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`,w_=x.button`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  max-width: 24px;
  max-height: 24px;
  flex: 0 0 24px;
  border-radius: 6px;
  background: ${e=>e.theme.BACKGROUND};
  border: 1px solid ${e=>e.theme.BORDER};
  box-sizing: border-box;
  padding: 0;
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,T_=x.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 16px;
  box-sizing: border-box;
  border-radius: 6px;
  background: ${e=>e.theme.PRIMARY};
  border: 1px solid ${e=>e.theme.BORDER};
  top: 0;
  transform: translateY(${e=>e.$active?`-1px`:`6px`});
  transition: transform 200ms;
`,E_=x(n_)`
  width: 24px;
  min-width: 24px;
  max-width: 24px;
  padding: 0;
  position: relative;
`,D_=x.div`
  position: absolute;
  inset: 0;
  min-height: 40px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0 10px;
`,O_=x.div`
  flex: 1;
  height: 100%;

  ${e=>{switch(e.$style){case`dash`:case`dashed`:return`
          width: 0;
          border-left: 2px dashed ${e.theme.BORDER};
        `;case`shadow`:return`
          width: 6px;
          background: linear-gradient(
            to right,
            transparent,
            ${w(e.theme.BORDER,.2)},
            transparent
          );
        `;case`ridge`:return`
          width: 2px;
          background: ${e.theme.BORDER};
          box-shadow: inset 1px 0 0 ${e.theme.BORDER}, -1px 0 0 #000;
        `;case`pulse`:return`
          width: 3px;
          background: ${e.theme.BORDER};
          animation: divider-flicker 1.2s infinite alternate;

          @keyframes divider-flicker {
            from { opacity: 0.3; }
            to { opacity: 1; }
          }
        `;default:return`
          width: 2px;
          background: linear-gradient(
            to right,
            transparent,
            ${e.theme.BORDER},
            transparent
          );
        `}}}
`,k_=x.div`
  flex: 1;
  height: 100%;
  padding: 0 8px;
  margin: 0 -10px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`,A_=x.div`
  width: 6px;
  flex: 1;
  height: 100%;
  background-repeat: repeat-y;
  background-position: center;
  background-size: 6px 16px;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='16' viewBox='0 0 6 16' preserveAspectRatio='none'%3E%3Cpolyline points='3,0 0,4 6,8 0,12 3,16' fill='none' stroke='${encodeURIComponent(e.theme.BORDER)}' stroke-width='1.2'/%3E%3C/svg%3E")`};
`,j_=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
`,M_=x.button`
  width: 100%;
  text-align: left;
  background: ${e=>e.$isCurrent?w(e.theme.OFFSET,.45):w(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  padding: 8px 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>w(e.theme.OFFSET,.55)};
  }
`,N_=x.p`
  color: ${e=>w(e.theme.PRIMARY,.8)};
  margin: 0 0 12px 0;
  font-size: 13px;
`,P_=x.p`
  color: #ff6b6b;
  margin: 10px 0 0 0;
  font-size: 13px;
`,F_=x.div`
  height: 1px;
  margin: 12px 0;
  background: ${e=>w(e.theme.BORDER,.7)};
`,I_=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>w(e.theme.BACKGROUND,.35)};
`,L_=x.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,R_=x.div`
  color: ${e=>w(e.theme.PRIMARY,.75)};
  font-size: 11px;
`,z_=x.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`,B_=x.button`
  width: 50px;
  height: 28px;
  padding: 0;
  position: relative;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 999px;
  background: ${e=>e.$active?w(e.theme.OFFSET,.55):w(e.theme.BACKGROUND,.45)};
  cursor: pointer;
  transition: all 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: ${e=>e.$active?`25px`:`3px`};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${e=>e.theme.BORDER};
    background: ${e=>e.theme.PRIMARY};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
    transition: left 0.2s ease;
  }

  &:hover {
    background: ${e=>e.$active?w(e.theme.OFFSET,.7):w(e.theme.OFFSET,.45)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,V_=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,H_=x.p`
  color: ${e=>w(e.theme.PRIMARY,.78)};
  margin: 0;
  font-size: 12px;
`,U_=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 320px;
  overflow-y: auto;
`,W_=x.div`
  background: ${e=>w(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,G_=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,K_=x.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #4b5563;
  background: rgba(0, 0, 0, 0.2);
  accent-color: #ffffff;
  margin: 0;
  pointer-events: none;
`,q_=x.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
`,J_=x.div`
  color: ${e=>w(e.theme.PRIMARY,.85)};
  font-size: 12px;
  font-style: italic;
  line-height: 1.25;
  white-space: pre-wrap;
`,Y_=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`,X_=x.button`
  border: 1px solid ${e=>w(e.theme.OFFSET,.7)};
  border-radius: 999px;
  background: ${e=>w(e.theme.OFFSET,.35)};
  color: ${e=>e.theme.PRIMARY};
  font-size: 11px;
  padding: 2px 8px;
  cursor: pointer;

  &:hover {
    background: ${e=>w(e.theme.OFFSET,.55)};
  }
`,Z_=x.p`
  color: ${e=>w(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,Q_=x.div`
  width: 100%;
  min-height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>w(e.theme.BORDER,.8)};
  background: ${e=>w(e.theme.BACKGROUND,.55)};
`,$_=x.div`
  width: ${e=>e.$small?`40px`:`60px`};
  min-width: ${e=>e.$small?`40px`:`60px`};
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>w(e.theme.BORDER,.8)};
  background: ${e=>w(e.theme.BACKGROUND,.55)};
`,ev=(e,t,n)=>{let r=[{id:crypto.randomUUID(),type:`initiative`,description:n(`initiative.defaultInitiativeDescription`)},{id:crypto.randomUUID(),type:`name`,description:n(`initiative.defaultNameDescription`)}],i=t?[{id:`card-column`,type:`card-column`}]:[];if(!e||e.length===0)return[...r,...i];let a=[...e].sort((e,t)=>e.col-t.col).map(e=>({id:e.id,type:e.type,name:e.styles?.labelName,useIcon:e.styles?.labelMode===`icon`,iconType:e.styles?.labelIcon,description:e.styles?.description,styles:e.styles}));return[...r,...a,...i]};const tv=()=>{let{t}=Ct(),{theme:r}=zt(),{listLayout:i,attributes:a,isLoading:o}=Im(),s=H(e=>e.roomMetadata),c=H(e=>e.sceneMetadata),l=H(e=>e.items),u=H(e=>e.partyData),d=H(e=>e.playerData),f=H(e=>e.gridDpi),p=H(e=>e.setItems),[m,h]=(0,V.useState)([]),[g,_]=(0,V.useState)([]),[v,y]=(0,V.useState)(null),[b,x]=(0,V.useState)(1),[S,C]=(0,V.useState)(new Set),[w,E]=(0,V.useState)(null),[D,A]=(0,V.useState)(null),[ee,te]=(0,V.useState)(!1),[re,ie]=(0,V.useState)(!1),[ae,le]=(0,V.useState)(!1),[ue,de]=(0,V.useState)({}),[fe,pe]=(0,V.useState)({}),[me,P]=(0,V.useState)({}),[he,ge]=(0,V.useState)(null),[_e,ve]=(0,V.useState)({}),[F,ye]=(0,V.useState)(null),[I,xe]=(0,V.useState)(null),[Se,Ce]=(0,V.useState)(!1),[we,Te]=(0,V.useState)(!1),[Ee,De]=(0,V.useState)(!1),[Oe,ke]=(0,V.useState)(()=>window.innerWidth<400),[je,Me]=(0,V.useState)(!1),[Ne,Pe]=(0,V.useState)(new Set),[Fe,Ie]=(0,V.useState)(null),Le=(0,V.useRef)(null),Re=(0,V.useRef)({}),ze=(0,V.useRef)({}),Be=(0,V.useRef)(null);(0,V.useEffect)(()=>{let e=()=>{ke(window.innerWidth<400)};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]),(0,V.useEffect)(()=>{Pe(e=>{if(e.size===0)return e;let t=new Set(m.map(e=>e.id)),n=!1,r=new Set;return e.forEach(e=>{t.has(e)?r.add(e):n=!0}),n?r:e})},[m]);let Ve=(0,V.useMemo)(()=>{let e=Array.isArray(d?.selection)?d.selection:[];return new Set(e)},[d?.selection]),He=s,Ue=He[O.EXTENSIONID+`/enabdice`]===!0,We=He[M.REVERSE_INITIATIVE]||!1,Ge=He[M.POPCORN_INITIATIVE]||!1,Ke=He[M.SHOW_CARD_ACCESS]||!1,qe=He[M.SHOW_NON_PARTY_UNITS]||!1,Je=He[M.SHOW_LIST_HP_NUMBERS],Ye=typeof Je==`boolean`?Je:!0,Xe=He[M.DICE_RANGE]||``,Ze=He[M.INITIATIVE_MODIFIER_BID]||``,Qe=He[M.INITIATIVE_MODIFIER_EXPR]||`@STAT`,$e=Qe.trim().length>0?Qe:`@STAT`,tt=He[M.SHOW_OWNER_ONLY_EDIT]||!1,L=String(d?.role||``).toUpperCase()===`GM`,R=d?.id||``,z=ne(M.INITIATIVE_LIST_COMPACT,R);(0,V.useEffect)(()=>{Ge&&(Me(!1),Pe(new Set))},[Ge]),(0,V.useEffect)(()=>{let e=He[z],t=He[M.INITIATIVE_LIST_COMPACT];De(typeof e==`boolean`?e:typeof t==`boolean`?t:!1)},[He,z]);let nt=async()=>{let e=!Ee;De(e);try{await T.room.setMetadata({[z]:e})}catch(t){N.error(`Failed to persist initiative list compact mode`,t),De(!e)}},rt=async({notation:e,actionName:t,tokenName:n,senderId:r,senderColor:i})=>{try{await Ae({notation:e,actionName:t,senderName:n,senderId:r,senderColor:i},He)}catch(t){N.error(`Failed to send dice roll from InitiativeList`,e,t),N.log(e)}},it=e=>{let t=e;if(typeof t==`string`)try{t=JSON.parse(t)}catch{return[]}return Array.isArray(t)?t.map((e,t)=>{let n=e&&typeof e==`object`?e:{},r=n.inUse,i=typeof r==`boolean`?r:typeof r==`string`?[`true`,`1`,`yes`].includes(r.trim().toLowerCase()):typeof r==`number`?r===1:void 0;return{id:typeof n.id==`string`&&n.id?n.id:`entry-${t}`,name:typeof n.name==`string`?n.name:``,description:typeof n.description==`string`?n.description:``,...i===void 0?{}:{inUse:i}}}):[]};(0,V.useEffect)(()=>{h(l.filter(e=>e.metadata?.[j.ON_LIST]===!0).map(e=>{let t=e.metadata?.[j.INITIATIVE]||0,n=e.metadata[j.UNIT_NAME]||e.name||`Unknown`,r=e.metadata?.[j.BOSS_MODE]===!0,i=e.metadata?.[Dg]||0,a=u.find(t=>t.id===e.createdUserId)||(d?.id===e.createdUserId?d:void 0),o=String(a?.role||``).toUpperCase()===`GM`,s=a?.color||(d?.id===e.createdUserId?d?.color:void 0),c=o?void 0:Ng(s,1),l={};return Object.keys(e.metadata||{}).forEach(t=>{t.startsWith(`com.battle-system.forge`)&&(l[t]=e.metadata?.[t])}),{id:e.id,initiative:t,name:n,isBoss:r,elevation:i,attributes:l,createdUserId:e.createdUserId,ownerNameOutlineColor:c,isInParty:e.metadata?.[j.IN_PARTY]===!0,isVisible:e.visible!==!1}}))},[l,u,d]);let B=(0,V.useMemo)(()=>Ge?[...m].sort((e,t)=>e.name.localeCompare(t.name)):[...m].sort((e,t)=>e.initiative===t.initiative?e.name.localeCompare(t.name):We?e.initiative-t.initiative:t.initiative-e.initiative),[m,We,Ge]),at=vg({items:l,units:B,setItems:p,playerData:d}),ot=(0,V.useMemo)(()=>{let e=new Map;return u.forEach(t=>{e.set(t.id,t)}),d&&!e.has(d.id)&&e.set(d.id,d),Array.from(e.values()).sort((e,t)=>e.name.localeCompare(t.name))},[u,d]),st=(e,t)=>{let n=parseInt(t)||0;h(t=>t.map(t=>t.id===e?{...t,initiative:n}:t))},ct=(e,t)=>{p(l.map(n=>n.id===e?{...n,metadata:{...n.metadata,[j.INITIATIVE]:t}}:n)),T.scene.items.updateItems([e],e=>{e[0].metadata[j.INITIATIVE]=t})},lt=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},ut=(e,t,n)=>(typeof t==`number`&&(e=Math.max(t,e)),typeof n==`number`&&(e=Math.min(n,e)),e),dt=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(r.length===0)return ut(0,i,a);let o=r.match(/^([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),s=r.match(/^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),c=null;if(o){let e=o[1],n=parseFloat(o[2]);switch(e){case`+`:c=t+n;break;case`-`:c=t-n;break;case`*`:c=t*n;break;case`/`:c=n===0?t:t/n;break}}else if(s){let e=parseFloat(s[1]),t=s[2],n=parseFloat(s[3]);switch(t){case`+`:c=e+n;break;case`-`:c=e-n;break;case`*`:c=e*n;break;case`/`:c=n===0?e:e/n;break}}else{let e=parseFloat(r);Number.isNaN(e)||(c=e)}return ut(c===null||!Number.isFinite(c)?t:Math.trunc(c),i,a)},ft=e=>{let t=0;if(Ze){let n=m.find(t=>t.id===e);if(n){let e=n.attributes?.[`${k}/${Ze}`],r=Number(e),i=Number.isFinite(r)?r:0,a=ce($e.replace(/@STAT/gi,`@${Ze}`).replace(/\bx\b/gi,`@${Ze}`),{bidValueMap:{[Ze]:i},onMissingBid:`useZero`});if(a.valid&&a.notation){let e=Number(a.notation);Number.isFinite(e)&&(t=Math.trunc(e))}}}return t},pt=(e,t=`normal`)=>{let n=lt(Xe),r=Math.floor(Math.random()*n)+1,i=t===`normal`?null:Math.floor(Math.random()*n)+1,a=(i===null?r:t===`advantage`?Math.max(r,i):Math.min(r,i))+ft(e);st(e,String(a)),ct(e,a)},mt=e=>{Pe(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},ht=()=>{if(!Ge){if(!je){Me(!0);return}Array.from(Ne).forEach(e=>{let t=m.find(t=>t.id===e);!t||!en(t)||pt(e)}),Pe(new Set),Me(!1)}},gt=(e,t)=>{de(n=>({...n,[e]:t}))},_t=(e,t)=>{let n=dt(t,m.find(t=>t.id===e)?.initiative??0);de(t=>{let{[e]:n,...r}=t;return r}),h(t=>t.map(t=>t.id===e?{...t,initiative:n}:t)),ct(e,n)},vt=e=>`ELE${e.slice(3)}`,yt=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o}},bt=async(t,r)=>{let i=vt(t);try{await T.scene.items.deleteItems([i])}catch{}if(r===0)return;let a=l.find(e=>e.id===t);if(!a||!n(a))return;let o=yt(a,f),s=`${r>0?`🡹`:`🡻`}${Math.abs(r)}`,c=e().id(i).name(`Elevation Badge`).plainText(s).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(36).fontFamily(`Segoe UI`).textAlign(`CENTER`).position({x:o.minX-40,y:o.minY}).metadata({[Tg]:!0,[Eg]:t}).attachedTo(t).layer(`ATTACHMENT`).visible(a.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).build();try{await T.scene.items.addItems([c])}catch(e){N.error(`Failed to add elevation badge`,t,e)}},xt=(e,t)=>{pe(n=>({...n,[e]:t}))},St=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(!r)return ut(0,i,a);let o=parseFloat(r);return ut(Number.isFinite(o)?Math.trunc(o):t,i,a)},wt=(e,t)=>{let n=St(t,m.find(t=>t.id===e)?.elevation??0,{min:-999,max:999});pe(t=>{let{[e]:n,...r}=t;return r}),h(t=>t.map(t=>t.id===e?{...t,elevation:n}:t)),p(l.map(t=>t.id===e?{...t,metadata:{...t.metadata,[Dg]:n}}:t)),T.scene.items.updateItems([e],e=>{e[0].metadata[Dg]=n}),bt(e,n)},Tt=(e,t)=>{let n=e.trim();if(!n)return e;let r=/^([+\-*/])\s*-?\d+(?:\.\d+)?$/.test(n),i=/^-?\d+(?:\.\d+)?\s*[+\-*/]\s*-?\d+(?:\.\d+)?$/.test(n),a=/^-?\d+(?:\.\d+)?$/.test(n);if(!r&&!i&&!a)return e;let o=typeof t==`number`?t:parseFloat(String(t)),s=Number.isFinite(o)?o:0;return String(dt(n,s))},Et=(e,t,n)=>{let r=`${k}/${t}`,i=l.find(t=>t.id===e)?.metadata?.[r],a=Tt(n,i);h(t=>t.map(t=>t.id===e?{...t,attributes:{...t.attributes,[r]:a}}:t)),p(l.map(t=>t.id===e?{...t,metadata:{...t.metadata,[r]:a}}:t)),T.scene.items.updateItems([e],e=>{e[0].metadata[r]=a})},Dt=e=>String(e?.attr_bid??e?.bid??``).trim(),Ot=e=>String(e?.attr_name??e?.name??``).trim(),kt=e=>String(e?.attr_abbr??e?.abbr??``).trim(),At=e=>String(e?.attr_type??e?.type??``).trim().toLowerCase(),jt=e=>{let t=e?.attr_func??e?.func??``;return typeof t==`string`?t.trim():``},Mt=e=>e?.attr_meta??e?.meta??{},Nt=e=>a.find(t=>Dt(t)===e)||null,Pt=e=>jt(Nt(e)).length>0,Ft=e=>se(a,t=>e.attributes?.[`${k}/${t}`],Dt,At,jt,Ot,kt),It=(e,t)=>{let n=Array.from(e.matchAll(Fg));if(n.length!==1)return null;let r=n[0],i=r[0]||``,a=r[1]||``,o=r[2]||``,s=r[3]||``,c=r.index;if(!i||!a||!o||typeof c!=`number`)return null;let l=Number(a);if(!Number.isFinite(l)||l!==1||s)return null;let u=`2d${o}${t===`advantage`?`kh1`:`kl1`}`;return`${e.slice(0,c)}${u}${e.slice(c+i.length)}`},Lt=(e,t)=>{let n=jt(Nt(t));if(n.length===0)return null;let r=Ft(e),i=ce(n,{bidValueMap:r.bidValueMap,nameValueMap:r.nameValueMap,onMissingBid:`error`});return!i.valid||!i.notation?(N.warn(`Could not resolve notation for initiative list value-column`,{unitId:e.id,bid:t,error:i.error}),null):{notation:i.notation,actionName:Ot(Nt(t))||t}},Rt=(e,t)=>{let n=Nt(t),r=Mt(n)?.derived?.formula,i=typeof r==`string`&&r.trim().length>0?r:jt(n);if(typeof i!=`string`||i.trim().length===0)return`-`;let a=Ft(e),o=ce(i,{bidValueMap:a.bidValueMap,nameValueMap:a.nameValueMap,onMissingBid:`error`});if(!o.valid||!o.notation)return N.warn(`Could not resolve derived formula for initiative list derived-column`,{unitId:e.id,bid:t,error:o.error}),`-`;let s=o.notation.trim(),c=Number(s);if(!Number.isFinite(c))return s||`-`;let l=Number(Mt(n)?.derived?.precision),u=Number.isFinite(l)?Math.max(0,Math.min(Math.trunc(l),8)):0,d=Mt(n)?.derived?.displayMode,f=u>0?c.toFixed(u):String(c);return d===`percent`?`${f}%`:f},Bt=async(e,t)=>{let n=Lt(e,t);if(!n)return;let r=u.find(t=>t.id===e.createdUserId);await rt({notation:n.notation,actionName:n.actionName,tokenName:e.name,senderId:e.createdUserId||d?.id||`unknown`,senderColor:r?.color||d?.color||`#ffffff`})},Vt=async(e,n,r)=>{let i=Lt(e,n);if(!i)return;let a=r===`normal`?i.notation:It(i.notation,r);if(!a)return;let o=u.find(t=>t.id===e.createdUserId),s=r===`normal`?``:t(r===`advantage`?`initiative.modeSuffixAdvantage`:`initiative.modeSuffixDisadvantage`);await rt({notation:a,actionName:`${i.actionName}${s}`,tokenName:e.name,senderId:e.createdUserId||d?.id||`unknown`,senderColor:o?.color||d?.color||`#ffffff`})},Ht=async(e,n)=>{let r=n===`normal`?e.notation:It(e.notation,n);if(!r)return;let i=n===`normal`?``:t(n===`advantage`?`initiative.modeSuffixAdvantage`:`initiative.modeSuffixDisadvantage`);await rt({notation:r,actionName:`${e.actionName}${i}`,tokenName:e.tokenName,senderId:e.senderId,senderColor:e.senderColor})};(0,V.useEffect)(()=>()=>{Object.values(Re.current).forEach(e=>{window.clearTimeout(e)})},[]),(0,V.useEffect)(()=>{if(!F&&!I)return;let e=e=>{e.key===`Escape`&&(ye(null),xe(null))};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[F,I]);let Ut=(e,t)=>`value-column:${e}:${t}`,Wt=(e,t)=>`${e}:${t}`,Gt=e=>!!_e[e],Kt=(e,t)=>{ve(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},qt=e=>{ye(e)},Jt=()=>{ye(null)},Yt=()=>{xe(null)},Xt=e=>{ve(t=>{let{[e]:n,...r}=t;return r})},Zt=(e,t)=>{let n=Re.current[e];n&&window.clearTimeout(n),Re.current[e]=window.setTimeout(()=>{ze.current[e]=!0,Kt(e,t),delete Re.current[e]},500)},Qt=e=>{let t=Re.current[e];t&&(window.clearTimeout(t),delete Re.current[e])},$t=e=>ze.current[e]?(delete ze.current[e],!0):!1,en=e=>{if(!tt||L)return!0;let t=d?.id;return t?e.createdUserId===t:!1},tn=e=>L?!0:e.isVisible,nn=e=>L||qe?!1:!e.isInParty;(0,V.useEffect)(()=>{o||_(ev(i,Ke,t))},[i,o,Ke]),(0,V.useEffect)(()=>{let e=c[M.CURRENT_TURN],t=c[M.CURRENT_ROUND];e?y(e):B.length>0&&y(B[0].id),t&&x(t)},[c,B]);let rn=async()=>{if(B.length===0)return;v&&await at.processEffectsForTurnEvent(`end`,v);let e=B.findIndex(e=>e.id===v)+1;if(e>=B.length){let e=b+1;x(e),y(B[0].id),await T.scene.setMetadata({[M.CURRENT_TURN]:B[0].id,[M.CURRENT_ROUND]:e}),await at.processEffectsForTurnEvent(`start`,B[0].id)}else y(B[e].id),await T.scene.setMetadata({[M.CURRENT_TURN]:B[e].id}),await at.processEffectsForTurnEvent(`start`,B[e].id)},an=async()=>{if(B.length===0)return;let e=B.findIndex(e=>e.id===v)-1;if(e<0){let e=Math.max(1,b-1);x(e),y(B[B.length-1].id),await T.scene.setMetadata({[M.CURRENT_TURN]:B[B.length-1].id,[M.CURRENT_ROUND]:e})}else y(B[e].id),await T.scene.setMetadata({[M.CURRENT_TURN]:B[e].id})},on=async e=>{Ge&&(S.has(e)||(y(e),await T.scene.setMetadata({[M.CURRENT_TURN]:e}),await at.processEffectsForTurnEvent(`start`,e)))},sn=async()=>{v&&(await at.processEffectsForTurnEvent(`end`,v),C(e=>new Set([...e,v])),S.size+1,B.length)},cn=async()=>{let e=b+1;x(e),C(new Set),y(null),await T.scene.setMetadata({[M.CURRENT_TURN]:null,[M.CURRENT_ROUND]:e})},ln=async e=>{Te(!0);try{if(e===`clear-list`){let e=l.filter(e=>e.metadata?.[j.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await T.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata&&j.ON_LIST in e.metadata&&delete e.metadata[j.ON_LIST]})}),p(l.map(e=>{if(e.metadata?.[j.ON_LIST]!==!0)return e;let t={...e.metadata||{}};return delete t[j.ON_LIST],{...e,metadata:t}})))}if(e===`reset-initiative`){let e=l.filter(e=>e.metadata?.[j.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await T.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata[j.INITIATIVE]=0})}),p(l.map(e=>e.metadata?.[j.ON_LIST]===!0?{...e,metadata:{...e.metadata||{},[j.INITIATIVE]:0}}:e)),h(e=>e.map(e=>l.some(t=>t.id===e.id&&t.metadata?.[j.ON_LIST]===!0)?{...e,initiative:0}:e)),de({}))}let t=e===`clear-list`?null:e===`reset-initiative`?[...B].sort((e,t)=>e.name.localeCompare(t.name))[0]?.id??null:B[0]?.id??null;x(1),y(t),C(new Set),await T.scene.setMetadata({[M.CURRENT_TURN]:t,[M.CURRENT_ROUND]:1}),Ce(!1)}catch(t){N.error(`Failed to reset encounter state`,{mode:e,error:t})}finally{Te(!1)}},un=async e=>{let t=l.find(t=>t.id===e);if(t)try{await Yh.CenterViewportOnImage(t)}catch(t){N.error(`Failed to center viewport on unit`,e,t)}},dn=async(e,t)=>{try{let n=await T.viewport.getHeight(),r=n>800?700:n-100;await T.popover.open({id:O.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(t)}`,height:r,width:350,anchorElementId:e,hidePaper:!0,disableClickAway:!0})}catch(e){N.error(`Failed to open cards popover`,e)}},fn=(e,t)=>{e.preventDefault(),e.stopPropagation(),A(null),E(t)},pn=async e=>{if(w){if(!l.find(e=>e.id===w)){A(t(`initiative.tokenNotFoundInCache`));return}te(!0),A(null);try{await T.scene.items.updateItems([w],t=>{let n=t[0];n.createdUserId=e}),p(l.map(t=>t.id===w?{...t,createdUserId:e}:t)),E(null)}catch(n){N.error(`Failed to reassign token owner`,w,e,n),A(t(`initiative.assignOwnerPermissionError`))}finally{te(!1)}}},mn=async()=>{if(!w)return;let e=l.find(e=>e.id===w);if(!e){A(t(`initiative.tokenNotFoundInCache`));return}let n=e.metadata?.[j.BOSS_MODE]!==!0;if(n&&l.filter(e=>e.id!==w&&e.metadata?.[j.ON_LIST]===!0&&e.metadata?.[j.BOSS_MODE]===!0).length>=2){A(t(`initiative.maxBossesError`));return}ie(!0),A(null);try{await T.scene.items.updateItems([w],e=>{let t={...e[0].metadata||{}};t[j.BOSS_MODE]=n,e[0].metadata=t}),p(l.map(e=>e.id===w?{...e,metadata:{...e.metadata||{},[j.BOSS_MODE]:n}}:e))}catch(e){N.error(`Failed to toggle boss mode`,w,e),A(t(`initiative.updateBossModeError`))}finally{ie(!1)}},hn=async()=>{if(w){if(!l.find(e=>e.id===w)){A(t(`initiative.tokenNotFoundInCache`));return}le(!0),A(null);try{await T.scene.items.updateItems([w],e=>{let t={...e[0].metadata||{}};j.ON_LIST in t&&delete t[j.ON_LIST],e[0].metadata=t}),p(l.map(e=>{if(e.id!==w)return e;let t={...e.metadata||{}};return delete t[j.ON_LIST],{...e,metadata:t}})),E(null)}catch(e){N.error(`Failed to remove token from initiative list`,w,e),A(t(`initiative.removeUnitError`))}finally{le(!1)}}},gn=(0,V.useMemo)(()=>w&&B.find(e=>e.id===w)||null,[w,B]),_n=(0,V.useMemo)(()=>w&&l.find(e=>e.id===w)||null,[w,l]),vn=_n?.metadata?.[j.BOSS_MODE]===!0,W=(0,V.useMemo)(()=>he&&B.find(e=>e.id===he.unitId)||null,[he,B]),yn=(0,V.useMemo)(()=>he&&a.find(e=>e.attr_bid===he.bid)||null,[a,he]),bn=(0,V.useMemo)(()=>{if(!he||!W)return[];let e=W.attributes[`${k}/${he.bid}`];return it(e)},[he,W]),xn=(0,V.useMemo)(()=>bn.some(e=>typeof e.inUse==`boolean`),[bn]),Sn=(0,V.useMemo)(()=>F&&B.find(e=>e.id===F.unitId)||null,[F,B]),Cn=(0,V.useMemo)(()=>Ee?g.filter(e=>e.type===`initiative`||e.type===`name`?!0:e.type===`card-column`&&Ke):g,[Ee,g,Ke]),wn=(0,V.useMemo)(()=>oe(He,a),[a,He]),Tn=(0,V.useMemo)(()=>B.filter(e=>tn(e)),[B,L]),En=(0,V.useMemo)(()=>{if(!W)return{};let e={};for(let t of a){let n=`${k}/${t.attr_bid}`,r=W.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(e[t.attr_bid]=i)}return e},[W,a]),Dn=(0,V.useMemo)(()=>{if(!W)return{};let e={};for(let t of a){let n=`${k}/${t.attr_bid}`,r=W.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(t.attr_name&&(e[t.attr_name]=i),t.attr_abbr&&(e[t.attr_abbr]=i))}return e},[W,a]),On=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=(e[1]||``).trim();if(!n)continue;let r=ce(Ue?n.replace(/(\d+d\d+(?:[kd][hl]\d+|!|\{[^{}]+\})?)\s+#[a-z0-9_]+/gi,`$1`):n,{bidValueMap:En,nameValueMap:Dn,onMissingBid:`error`,allowCurlyTags:Ue});!r.valid||!r.notation||t.push(Ue?n:r.notation)}return t};(0,V.useEffect)(()=>{Be.current&&Cn.length>0&&(N.debug(`Adjusting window width based on table size`),setTimeout(()=>{if(Be.current){let e=Be.current.offsetWidth+4,t=Math.min(e,800);T.action.setWidth(t),N.log(`Adjusted window width to `+t)}},100))},[Ee,Cn.length,B.length]);let kn=e=>{if(!e)return null;let t=Lg[e.toLowerCase()];return t?(0,U.jsx)(t,{}):null},An=(e,t)=>{let n=window.innerWidth-t-8,r=Math.min(Math.max(e-t/2,8),Math.max(8,n));return{left:r,arrowX:e-r}},jn=e=>{let t=e.currentTarget.getBoundingClientRect(),n=`clientX`in e?e.clientX:t.left+t.width/2,r=t.top>72?`top`:`bottom`;return{anchorX:n,y:r===`top`?t.top:t.bottom,placement:r}},Mn=(e,t)=>{let n=jn(e),r=Math.min(320,Math.max(140,t.length*7+28)),i=An(n.anchorX,r);Ie({text:t,...n,...i})},Nn=()=>{Ie(null)};(0,V.useLayoutEffect)(()=>{if(!Fe||!Le.current)return;let e=Le.current.getBoundingClientRect().width,t=An(Fe.anchorX,e);(Math.abs(t.left-Fe.left)>.5||Math.abs(t.arrowX-Fe.arrowX)>.5)&&Ie(e=>e&&{...e,...t})},[Fe]);let G=e=>e.type===`initiative`?Ge?(0,U.jsx)(et,{}):(0,U.jsx)(Qg,{type:`button`,theme:r,$active:je,"aria-pressed":je,onClick:e=>{e.stopPropagation(),ht()},children:je?(0,U.jsx)(cf,{}):(0,U.jsx)(et,{})}):e.type===`roller`?null:e.type===`name`?t(`initiative.nameHeader`):e.type===`card-column`?(0,U.jsx)(lf,{}):e.type===`divider-column`?null:e.useIcon?kn(e.iconType||`star`):e.name||e.type,Pn=e=>e.type===`divider-column`?{fixedWidth:Mg}:e.type===`initiative`?{minWidth:Ag}:e.type===`name`?{minWidth:jg}:{minWidth:kg},Fn=(e,n)=>{let i=en(n),o=nn(n),s=!L&&!Ye;if(o&&e.type!==`initiative`&&e.type!==`name`&&e.type!==`divider-column`)return(0,U.jsx)(n_,{theme:r,children:(0,U.jsx)(Q_,{theme:r})});switch(e.type){case`initiative`:if(Ge)return(0,U.jsx)(r_,{theme:r,children:(0,U.jsx)(s_,{onClick:e=>{e.stopPropagation(),i&&(S.has(n.id)||(n.id===v?sn():on(n.id)))},children:S.has(n.id)?(0,U.jsx)(of,{color:r.OFFSET}):n.id===v?(0,U.jsx)(af,{color:r.PRIMARY}):(0,U.jsx)(sf,{color:r.BORDER})})});let o=`initiative:${n.id}`,c=Gt(o),u=Ne.has(n.id);return(0,U.jsx)(r_,{theme:r,children:(0,U.jsxs)(l_,{children:[(0,U.jsx)(c_,{theme:r,$isRollable:i&&!c,type:`text`,inputMode:`decimal`,value:ue[n.id]??String(n.initiative),readOnly:!i||!c,onChange:!i||!c?void 0:e=>gt(n.id,e.target.value),onBlur:!i||!c?void 0:e=>{_t(n.id,e.target.value),Xt(o)},onClick:()=>{if(i&&!c){if(je){mt(n.id);return}$t(o)||pt(n.id)}},onContextMenu:e=>{i&&(e.preventDefault(),qt({kind:`initiative`,fieldKey:o,unitId:n.id,input:e.currentTarget}))},onTouchStart:e=>{i&&(c||Zt(o,e.currentTarget))},onTouchEnd:()=>{Qt(o)},onTouchCancel:()=>{Qt(o)},onKeyDown:e=>{if(i){if(!c&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),je?mt(n.id):pt(n.id);return}c&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}}),je&&u&&(0,U.jsxs)(u_,{theme:r,children:[(0,U.jsx)(d_,{theme:r}),(0,U.jsx)(f_,{theme:r}),(0,U.jsx)(p_,{theme:r,children:(0,U.jsx)(cf,{})})]})]})});case`name`:let d=Ve.has(n.id);return(0,U.jsx)(m_,{theme:r,title:t(`initiative.rightClickAssignOwner`),$outlineColor:n.ownerNameOutlineColor,$isSelected:d,onDoubleClick:()=>un(n.id),onContextMenu:i?e=>fn(e,n.id):void 0,children:n.isBoss?`💀 ${n.name}`:n.name});case`roller`:return(0,U.jsx)(i_,{theme:r,children:(0,U.jsx)(a_,{theme:r,disabled:!i,onClick:e=>{e.stopPropagation(),i&&pt(n.id)},title:t(`initiative.rollInitiativeTitle`,{max:lt(Xe)}),children:(0,U.jsx)(o_,{src:`/dice.svg`,alt:t(`initiative.rollIconAlt`)})})});case`card-column`:return(0,U.jsx)(n_,{theme:r,children:(0,U.jsx)(y_,{id:`card-access-${n.id}`,theme:r,disabled:!i,onClick:e=>{e.stopPropagation(),i&&dn(e.currentTarget.id,n.id)},title:t(`initiative.openCardTitle`,{unit:n.name}),children:(0,U.jsx)(af,{})})});case`value-column`:return(0,U.jsx)(n_,{theme:r,children:(0,U.jsx)(v_,{children:e.styles?.bidList?.map((t,a)=>{let o=Pt(t),c=Ut(n.id,t),l=Wt(n.id,t),u=o&&Gt(c),d=n.attributes[`${k}/${t}`],f=me[l]??(d==null||d===``?`0`:String(d)),p=t===wn.currentHpBid||t===wn.maxHpBid,m=!!R&&n.createdUserId===R,h=s&&p&&!m;return(0,U.jsxs)(V.Fragment,{children:[a>0&&(0,U.jsx)(__,{theme:r,children:e.styles?.dividers?.[a-1]||`/`}),h?(0,U.jsx)($_,{theme:r,$small:e.styles?.bidList&&e.styles.bidList.length>2}):(0,U.jsx)(h_,{theme:r,$isRollable:i&&o,value:f,$small:e.styles?.bidList&&e.styles.bidList.length>2,readOnly:!i||o&&!u,onChange:!i||o&&!u?void 0:e=>{let t=e.target.value;P(e=>({...e,[l]:t}))},onBlur:!i||o&&!u?void 0:e=>{Et(n.id,t,e.target.value),P(e=>{let{[l]:t,...n}=e;return n}),o&&Xt(c)},onClick:o?()=>{i&&(u||$t(c)||Bt(n,t))}:void 0,onContextMenu:o?e=>{i&&(e.preventDefault(),qt({kind:`attribute`,fieldKey:c,unitId:n.id,bid:t,input:e.currentTarget}))}:void 0,onTouchStart:o?e=>{i&&(u||Zt(c,e.currentTarget))}:void 0,onTouchEnd:o?()=>{Qt(c)}:void 0,onTouchCancel:o?()=>{Qt(c)}:void 0,onKeyDown:e=>{if(i){if(o&&!u&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),Bt(n,t);return}(u||!o)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})]},t)})})});case`list-column`:return(0,U.jsx)(n_,{theme:r,children:(0,U.jsx)(y_,{theme:r,disabled:!i,onClick:t=>{if(t.stopPropagation(),!i)return;let r=e.styles?.bidList?.[0];r&&ge({unitId:n.id,bid:r})},title:t(`initiative.openListReference`),children:(0,U.jsx)(tf,{})})});case`checkbox-column`:return(0,U.jsx)(n_,{theme:r,children:(0,U.jsx)(v_,{children:e.styles?.bidList?.map(t=>{let a=!!n.attributes[`${k}/${t}`],o=e.styles?.inputType===`slider`,s=e=>{h(r=>r.map(r=>r.id===n.id?{...r,attributes:{...r.attributes,[`${k}/${t}`]:e}}:r)),p(l.map(r=>r.id===n.id?{...r,metadata:{...r.metadata,[`${k}/${t}`]:e}}:r)),T.scene.items.updateItems([n.id],n=>{n[0].metadata[`${k}/${t}`]=e})};return o?(0,U.jsx)(w_,{type:`button`,theme:r,$active:a,disabled:!i,onClick:i?()=>{s(!a)}:void 0,children:(0,U.jsx)(T_,{theme:r,$active:a})},t):(0,U.jsx)(b_,{theme:r,type:`checkbox`,checked:a,disabled:!i,onChange:i?e=>{s(e.target.checked)}:void 0},t)})})});case`derived-column`:{let i=e.styles?.bidList||[];return i.length===0?(0,U.jsx)(n_,{theme:r,children:`-`}):(0,U.jsx)(n_,{theme:r,children:(0,U.jsx)(v_,{children:i.map((i,a)=>(0,U.jsxs)(V.Fragment,{children:[a>0&&(0,U.jsx)(__,{theme:r,children:e.styles?.dividers?.[a-1]||`/`}),(0,U.jsx)(x_,{theme:r,title:t(`initiative.derivedValueFormula`),children:Rt(n,i)})]},i))})})}case`enum-column`:{let t=e.styles?.bidList?.[0];if(!t)return(0,U.jsx)(n_,{theme:r,children:`-`});let a=Mt(Nt(t)),o=Array.isArray(a.enum?.options)?a.enum.options.map(e=>String(e||``).trim()).filter(e=>e.length>0):[],s=`${k}/${t}`,c=n.attributes[s],u=typeof c==`string`?c.trim():``,d=o.includes(u)?u:o[0]||``,f=e=>{h(t=>t.map(t=>t.id===n.id?{...t,attributes:{...t.attributes,[s]:e}}:t)),p(l.map(t=>t.id===n.id?{...t,metadata:{...t.metadata,[s]:e}}:t)),T.scene.items.updateItems([n.id],t=>{t[0].metadata[s]=e})};return(0,U.jsx)(n_,{theme:r,children:(0,U.jsx)(v_,{children:(0,U.jsx)(g_,{theme:r,disabled:!i,value:d,onClick:e=>e.stopPropagation(),onChange:i?e=>{f(e.target.value)}:void 0,children:o.length===0?(0,U.jsx)(`option`,{value:``,children:`No options`}):o.map(e=>(0,U.jsx)(`option`,{value:e,children:e},e))})})})}case`resource-column`:{let t=e.styles?.bidList?.[0];if(!t)return(0,U.jsx)(n_,{theme:r,children:`-`});let o=n.attributes[`${k}/${t}`],s=a.find(e=>Dt(e)===t&&At(e)===`resource`),c=o&&typeof o==`object`&&!Array.isArray(o)?o:null,u=c?Number(c.current??0):0,d=c?Number(c.max??0):0,f=(e,r)=>{let i=`${k}/${t}`,a={current:e,max:r};h(e=>e.map(e=>e.id===n.id?{...e,attributes:{...e.attributes,[i]:a}}:e)),p(l.map(e=>e.id===n.id?{...e,metadata:{...e.metadata,[i]:a}}:e)),T.scene.items.updateItems([n.id],e=>{e[0].metadata[i]=a})};if(Mt(s)?.resource?.showPips){let e=Number(Mt(s)?.resource?.pipCap),t=(Number.isFinite(e)&&e>0?Math.round(e):void 0)??d;if(t<=0)return(0,U.jsx)(n_,{theme:r,children:`-`});let n=Math.max(1,Math.min(t,15)),a=Math.max(0,Math.min(u,n));return(0,U.jsx)(n_,{theme:r,children:(0,U.jsx)(S_,{children:Array.from({length:n}).map((e,t)=>(0,U.jsx)(C_,{theme:r,$filled:t<a,disabled:!i,onClick:i?()=>{f(t+1===a?t:t+1,d)}:void 0},t))})})}return(0,U.jsx)(n_,{theme:r,children:(0,U.jsxs)(v_,{children:[(0,U.jsx)(h_,{theme:r,$isRollable:!1,value:String(u),$small:!1,readOnly:!i,onChange:i?e=>{let t=Number(e.target.value);isNaN(t)||f(t,d)}:void 0}),(0,U.jsx)(__,{theme:r,children:`/`}),(0,U.jsx)(h_,{theme:r,$isRollable:!1,value:String(d),$small:!1,readOnly:!i,onChange:i?e=>{let t=Number(e.target.value);isNaN(t)||f(u,t)}:void 0})]})})}case`special-column`:let f=kn(e.iconType);if(e.styles?.specialType===`elevation`){let e=fe[n.id];return(0,U.jsx)(Cg,{theme:r,unit:n,canInteract:i,elevationDraftValue:e,onElevationDraftChange:xt,onCommitElevationChange:wt})}else{let e=at.getEffectsForUnit(n.id).length;return(0,U.jsx)(wg,{theme:r,canInteract:i,icon:f||(0,U.jsx)(be,{}),activeEffectsCount:e,onOpen:()=>at.handleOpenEffectsModal(n.id)})}case`divider-column`:return(0,U.jsx)(E_,{theme:r,children:(0,U.jsx)(D_,{children:e.styles?.styleDesign===`zigzag`?(0,U.jsx)(k_,{children:(0,U.jsx)(A_,{theme:r})}):(0,U.jsx)(O_,{theme:r,$style:e.styles?.styleDesign})})});default:return(0,U.jsx)(n_,{theme:r,children:`-`})}};if(o)return(0,U.jsx)(Rg,{children:(0,U.jsx)(zg,{theme:r,children:`Loading...`})});let In=Ee||Oe,Ln=In?`R:${b}`:`Round: ${b}`,Rn=!Ee&&In;return(0,U.jsxs)(Rg,{children:[(0,U.jsx)(Bg,{children:(0,U.jsxs)(Jg,{ref:Be,theme:r,$compact:Ee,children:[(0,U.jsx)(Yg,{theme:r,children:(0,U.jsx)(Xg,{children:Cn.map(e=>{let t=e.description??`This has no description.`,n=Pn(e);return(0,U.jsx)(Zg,{theme:r,$minWidth:n.minWidth,$fixedWidth:n.fixedWidth,onMouseEnter:e=>Mn(e,t),onMouseMove:e=>Mn(e,t),onMouseLeave:Nn,onFocus:e=>Mn(e,t),onBlur:Nn,children:G(e)},e.id)})})}),(0,U.jsx)(e_,{children:Tn.map(e=>(0,U.jsx)(t_,{$isCurrentTurn:e.id===v,theme:r,children:Cn.map(t=>(0,U.jsx)(V.Fragment,{children:Fn(t,e)},t.id))},e.id))})]})}),(0,U.jsxs)(Vg,{theme:r,$compactMode:In,children:[(0,U.jsxs)(Hg,{$compactMode:In,children:[Ee?(0,U.jsxs)(U.Fragment,{children:[L&&(0,U.jsx)(Ug,{theme:r,$compact:!0,onClick:an,children:(0,U.jsx)($d,{})}),L&&(0,U.jsx)(Ug,{theme:r,$compact:!0,onClick:rn,children:(0,U.jsx)(ef,{})})]}):Ge?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Ug,{theme:r,onClick:sn,disabled:!v||S.has(v),children:`End Turn`}),(0,U.jsx)(qg,{theme:r,$compactMode:In,children:Ln}),(0,U.jsx)(Ug,{theme:r,$compact:In,onClick:cn,disabled:S.size<B.length,children:In?(0,U.jsx)(ef,{}):t(`initiative.next`)})]}):(0,U.jsxs)(U.Fragment,{children:[L&&(0,U.jsx)(Ug,{theme:r,$compact:!0,onClick:an,children:(0,U.jsx)($d,{})}),(0,U.jsx)(qg,{theme:r,$compactMode:In,children:Ln}),L&&(0,U.jsx)(Ug,{theme:r,$compact:!0,onClick:rn,children:(0,U.jsx)(ef,{})})]}),Rn&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Gg,{theme:r,onClick:()=>{nt()},title:t(`initiative.switchToCompactList`),children:(0,U.jsx)(ff,{})}),L&&(0,U.jsx)(Gg,{theme:r,onClick:()=>Ce(!0),disabled:we,title:t(`initiative.resetRoundTurnState`),children:(0,U.jsx)(pf,{})})]}),Ee&&(0,U.jsx)(Gg,{theme:r,onClick:()=>{nt()},title:t(`initiative.switchToFullsizeList`),children:(0,U.jsx)(df,{})})]}),!Ee&&!Rn&&(0,U.jsx)(Kg,{theme:r,$hasReset:L,onClick:()=>{nt()},title:t(`initiative.switchToCompactList`),children:(0,U.jsx)(ff,{})}),L&&!Ee&&!Rn&&(0,U.jsx)(Wg,{theme:r,onClick:()=>Ce(!0),disabled:we,title:t(`initiative.resetRoundTurnState`),children:(0,U.jsx)(pf,{})})]}),Fe&&(0,U.jsx)($g,{ref:Le,theme:r,$left:Fe.left,$y:Fe.y,$placement:Fe.placement,$arrowX:Fe.arrowX,role:`tooltip`,children:Fe.text}),(0,U.jsxs)(Pm,{isOpen:!!w,title:gn?t(`initiative.unitTitle`,{unit:gn.name}):t(`initiative.unitFallbackTitle`),onClose:()=>{ee||re||ae||(E(null),A(null))},closeOnOverlayClick:!ee&&!re&&!ae,maxWidth:`520px`,children:[(0,U.jsx)(N_,{theme:r,children:t(`initiative.selectOwnerHint`)}),(0,U.jsxs)(j_,{children:[ot.map(e=>(0,U.jsxs)(M_,{theme:r,$isCurrent:_n?.createdUserId===e.id,onClick:()=>pn(e.id),disabled:ee||re||ae,children:[e.name,_n?.createdUserId===e.id?t(`initiative.currentSuffix`):``]},e.id)),(0,U.jsx)(M_,{theme:r,onClick:()=>{hn()},disabled:ee||re||ae,children:t(ae?`initiative.removing`:`initiative.removeUnitFromList`)})]}),(0,U.jsx)(F_,{theme:r}),(0,U.jsxs)(I_,{theme:r,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(L_,{theme:r,children:t(`initiative.bossMode`)}),(0,U.jsx)(R_,{theme:r,children:t(`initiative.bossModeHint`)})]}),(0,U.jsx)(z_,{children:(0,U.jsx)(B_,{type:`button`,theme:r,$active:vn,disabled:ee||re||ae,"aria-label":t(`initiative.toggleBossModeAria`),"aria-pressed":vn,onClick:()=>{mn()}})})]}),D&&(0,U.jsx)(P_,{theme:r,children:D})]}),(0,U.jsxs)(Pm,{isOpen:!!F,title:F?.kind===`initiative`?t(`initiative.initiativeTitle`,{unit:Sn?.name||t(`initiative.unitFallbackTitle`)}):Nt(F?.bid||``)?.attr_name||t(`initiative.rollOptionsTitle`),onClose:Jt,maxWidth:`460px`,children:[(0,U.jsx)(N_,{theme:r,children:t(`initiative.chooseRollableAction`)}),(0,U.jsxs)(j_,{children:[(0,U.jsx)(M_,{theme:r,onClick:()=>{F&&(Jt(),Kt(F.fieldKey,F.input))},children:t(`initiative.editValue`)}),(()=>{if(!F||!Sn)return null;if(F.kind===`initiative`)return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(M_,{theme:r,onClick:()=>{Jt(),pt(F.unitId,`advantage`)},children:t(`initiative.rollWithAdvantage`)}),(0,U.jsx)(M_,{theme:r,onClick:()=>{Jt(),pt(F.unitId,`disadvantage`)},children:t(`initiative.rollWithDisadvantage`)})]});let e=F.bid||``,n=Lt(Sn,e);if(!n)return null;let i=It(n.notation,`advantage`),a=It(n.notation,`disadvantage`);return!i||!a?null:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(M_,{theme:r,onClick:()=>{Jt(),Vt(Sn,e,`advantage`)},children:t(`initiative.rollWithAdvantage`)}),(0,U.jsx)(M_,{theme:r,onClick:()=>{Jt(),Vt(Sn,e,`disadvantage`)},children:t(`initiative.rollWithDisadvantage`)})]})})()]})]}),(0,U.jsx)(yg,{manager:at}),(0,U.jsxs)(Pm,{isOpen:Se,title:t(`initiative.resetEncounterTitle`),onClose:()=>{we||Ce(!1)},closeOnOverlayClick:!we,maxWidth:`460px`,children:[(0,U.jsx)(N_,{theme:r,children:t(`initiative.chooseResetMode`)}),(0,U.jsxs)(j_,{children:[(0,U.jsx)(M_,{theme:r,onClick:()=>{ln(`round`)},disabled:we,children:t(we?`initiative.resetting`:`initiative.resetRound`)}),(0,U.jsx)(M_,{theme:r,onClick:()=>{ln(`reset-initiative`)},disabled:we,children:t(we?`initiative.resetting`:`initiative.resetRoundAndInitiative`)}),(0,U.jsx)(M_,{theme:r,onClick:()=>{ln(`clear-list`)},disabled:we,children:t(we?`initiative.resetting`:`initiative.resetRoundAndClearList`)})]})]}),(0,U.jsx)(Pm,{isOpen:!!he,title:W?t(`initiative.listReferenceTitle`,{attribute:yn?.attr_name||t(`initiative.listReferenceFallback`),unit:W.name}):t(`initiative.listReferenceFallback`),onClose:()=>{ge(null)},maxWidth:`620px`,children:(0,U.jsxs)(V_,{children:[(0,U.jsx)(H_,{theme:r}),bn.length===0?(0,U.jsx)(Z_,{theme:r,children:t(`initiative.noEntries`)}):(0,U.jsx)(U_,{children:bn.map(e=>(0,U.jsxs)(W_,{theme:r,children:[(0,U.jsxs)(G_,{children:[xn?(0,U.jsx)(K_,{type:`checkbox`,checked:!!e.inUse,readOnly:!0,tabIndex:-1}):null,(0,U.jsx)(q_,{theme:r,children:e.name||t(`initiative.unnamed`)})]}),e.description?(0,U.jsx)(J_,{theme:r,children:e.description}):null,(()=>{let n=On(e.description||``);return n.length===0?null:(0,U.jsx)(Y_,{children:n.map((n,i)=>(0,U.jsx)(X_,{type:`button`,theme:r,onClick:()=>{let r=W?.createdUserId?u.find(e=>e.id===W.createdUserId):null;rt({notation:n,actionName:e.name||yn?.attr_name||t(`initiative.listRoll`),tokenName:W?.name||t(`initiative.unknown`),senderId:W?.createdUserId||d?.id||`unknown`,senderColor:r?.color||d?.color||`#ffffff`})},onContextMenu:r=>{r.preventDefault();let i=W?.createdUserId?u.find(e=>e.id===W.createdUserId):null;xe({notation:n,actionName:e.name||yn?.attr_name||t(`initiative.listRoll`),tokenName:W?.name||t(`initiative.unknown`),senderId:W?.createdUserId||d?.id||`unknown`,senderColor:i?.color||d?.color||`#ffffff`})},title:n,children:n},`${e.id}-inline-notation-${i}`))})})()]},e.id))})]})}),(0,U.jsxs)(Pm,{isOpen:!!I,title:I?.actionName||t(`initiative.rollOptionsTitle`),onClose:Yt,maxWidth:`460px`,zIndexBase:12e3,children:[(0,U.jsx)(N_,{theme:r,children:t(`initiative.chooseRollMode`)}),(0,U.jsx)(j_,{children:(()=>{if(!I)return null;let e=It(I.notation,`advantage`),n=It(I.notation,`disadvantage`);return!e||!n?null:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(M_,{theme:r,onClick:()=>{I&&(Yt(),Ht(I,`advantage`))},children:t(`initiative.rollWithAdvantage`)}),(0,U.jsx)(M_,{theme:r,onClick:()=>{I&&(Yt(),Ht(I,`disadvantage`))},children:t(`initiative.rollWithDisadvantage`)})]})})()})]})]})},nv=`${O.EXTENSIONID}-partyhud`,rv=async()=>{await T.modal.open({id:nv,url:`/pages/forgeparty.html`,fullScreen:!0,hideBackdrop:!0,hidePaper:!0,disablePointerEvents:!0})},iv=async()=>{await T.modal.close(nv)};var av=`forge:party_save`,ov=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,sv=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>w(e.theme.BACKGROUND,.35)};
`,cv=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`,lv=x(cv)`
  justify-content: center;
`,uv=x.span`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: ${e=>w(e.theme.PRIMARY,.9)};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`,dv=x.button`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>w(e.theme.OFFSET,.45)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,fv=x.select`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>w(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px;
  min-width: 160px;
`,pv=x.p`
  margin: 0;
  font-size: 12px;
  color: ${e=>w(e.theme.PRIMARY,.8)};
`,mv=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${e=>e.$disabled?.55:1};
`,hv=x.span`
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
`,gv=x.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>w(e.theme.BACKGROUND,.35)};
`,_v=x.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
`,vv=x.img`
  width: ${e=>e.$full?`100%`:`40px`};
  height: ${e=>e.$full?`100%`:`40px`};
  min-width: ${e=>e.$full?`100%`:`40px`};
  position: absolute;
  left: ${e=>e.$overlay?`20px`:`0`};
  top: ${e=>e.$overlay?`20px`:`0`};
  object-fit: cover;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>w(e.theme.BACKGROUND,.6)};
`,yv=x.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,bv=x.span`
  color: ${e=>e.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,xv=x.input`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>w(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
`,Sv=x.p`
  color: ${e=>e.theme.PRIMARY};
  margin: 0;
`,Cv=x.span`
  display: block;
  font-size: 10px;
  color: ${e=>w(e.theme.PRIMARY,.55)};
  text-align: center;
  margin-top: 4px;
`,wv=e=>{switch(e){case`bottom`:return`left`;case`left`:return`top`;case`top`:return`right`;case`right`:default:return`bottom`}},Tv=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,Ev=e=>e===`default`||e===`plate`||e===`tech`||e===`deco`,Dv=e=>e===`deco`?`plate`:e===`tech`?`tech`:e===`plate`?`plate`:`default`;const Ov=()=>{let e=(0,V.useRef)(!1),[t,r]=(0,V.useState)(null),{theme:i}=zt(),{t:a}=Ct(),{attributes:o}=Im(),s=H(e=>e.items);H(e=>e.sceneMetadata);let c=H(e=>e.roomMetadata),l=H(e=>e.playerData),u=c,d=String(l?.role||``).toUpperCase()===`GM`,f=l?.id,p=ne(M.PARTY_HUD_OPEN,f),m=ne(M.PARTY_HUD_ORIENTATION,f),h=(u[p]??u[M.PARTY_HUD_OPEN])===!0,g=u[m]??u[M.PARTY_HUD_ORIENTATION],_=Tv(g)?g:`bottom`,v=u[M.PARTY_HUD_ATTR_ONE]||``,y=u[M.PARTY_HUD_ATTR_TWO]||``,b=u[M.PARTY_HUD_SHOW_HP_BARS]===!0,x=u[M.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!b,S=u[M.PARTY_HUD_BORDER_STYLE],C=Ev(S)?Dv(S):`default`,w=s.filter(e=>e.metadata[j.IN_PARTY]===!0),E=a(`common.orientation.${_}`);(0,V.useEffect)(()=>{try{let e=localStorage.getItem(av);e&&r(JSON.parse(e).savedAt??null)}catch{}},[]);let D=()=>{let e={savedAt:new Date().toISOString(),items:w};localStorage.setItem(av,JSON.stringify(e)),r(e.savedAt)},O=async()=>{let e=localStorage.getItem(av);if(e)try{let t=JSON.parse(e);if(!t.items.length)return;let n=new Set(t.items.map(e=>e.id)),r=s.filter(e=>n.has(e.id)).map(e=>e.id);r.length>0&&await T.scene.items.deleteItems(r);let[i,a]=await Promise.all([T.viewport.getWidth(),T.viewport.getHeight()]),o={x:i*.75,y:a*.6},c=await T.viewport.inverseTransformPoint(o),l={x:o.x-75,y:o.y-75},u=await T.viewport.inverseTransformPoint(l),d=u.x-c.x,f=u.y-c.y,p=t.items.map((e,t)=>({...e,position:{x:c.x+d*t,y:c.y+f*t}}));await T.scene.items.addItems(p)}catch{}},k=(0,V.useMemo)(()=>o.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[o]),A=async(e,t)=>{await T.room.setMetadata({[e]:t})},ee=async e=>{await T.room.setMetadata(e)},te=async()=>{let t=!h;if(await A(p,t),!t){await iv(),e.current=!1;return}await rv(),e.current=!0},re=async()=>{await A(m,wv(_))},ie=async(e,t)=>{let n=t.trim();await T.scene.items.updateItems([e],e=>{let t={...e[0].metadata||{}};n?t[j.PORTRAIT_URL]=n:delete t[j.PORTRAIT_URL],e[0].metadata=t})};return(0,U.jsx)(Qd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,U.jsxs)(Cm,{theme:i,children:[(0,U.jsx)(wm,{theme:i,children:a(`party.pageTitle`)}),(0,U.jsxs)(sv,{theme:i,children:[(0,U.jsxs)(cv,{children:[(0,U.jsx)(dv,{theme:i,onClick:()=>void re(),children:a(`party.display`,{orientation:E})}),(0,U.jsx)(dv,{theme:i,onClick:()=>void te(),children:a(h?`party.closeHud`:`party.openHud`)})]}),d&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(lv,{children:[(0,U.jsx)(uv,{theme:i,children:a(`party.showInHud`)}),(0,U.jsxs)(mv,{$disabled:!d,children:[(0,U.jsx)(hv,{theme:i,children:a(`party.showHpBars`)}),(0,U.jsx)(Z,{label:a(`party.toggleHpBarsLabel`),isOn:b,onChange:e=>{if(d){if(e){ee({[M.PARTY_HUD_SHOW_HP_BARS]:!0,[M.PARTY_HUD_SHOW_HP_NUMBERS]:!1});return}A(M.PARTY_HUD_SHOW_HP_BARS,!1)}}})]}),(0,U.jsxs)(mv,{$disabled:!d,children:[(0,U.jsx)(hv,{theme:i,children:a(`party.showHpNumbers`)}),(0,U.jsx)(Z,{label:a(`party.toggleHpNumbersLabel`),isOn:x,onChange:e=>{if(d){if(e){ee({[M.PARTY_HUD_SHOW_HP_NUMBERS]:!0,[M.PARTY_HUD_SHOW_HP_BARS]:!1});return}A(M.PARTY_HUD_SHOW_HP_NUMBERS,!1)}}})]}),(0,U.jsxs)(fv,{theme:i,disabled:!d,value:v,onChange:e=>{let t=e.target.value;A(M.PARTY_HUD_ATTR_ONE,t),t&&t===y&&A(M.PARTY_HUD_ATTR_TWO,``)},children:[(0,U.jsx)(`option`,{value:``,children:a(`party.extraSlotNone`,{slot:1})}),k.map(e=>(0,U.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,U.jsxs)(fv,{theme:i,disabled:!d,value:y,onChange:e=>{let t=e.target.value;A(M.PARTY_HUD_ATTR_TWO,t),t&&t===v&&A(M.PARTY_HUD_ATTR_ONE,``)},children:[(0,U.jsx)(`option`,{value:``,children:a(`party.extraSlotNone`,{slot:2})}),k.map(e=>(0,U.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,U.jsxs)(fv,{theme:i,disabled:!d,value:C,onChange:e=>{let t=e.target.value;Ev(t)&&A(M.PARTY_HUD_BORDER_STYLE,t)},children:[(0,U.jsx)(`option`,{value:`default`,children:a(`party.portraitBorderDefault`)}),(0,U.jsx)(`option`,{value:`plate`,children:a(`party.portraitBorderPlate`)}),(0,U.jsx)(`option`,{value:`tech`,children:a(`party.portraitBorderTech`)})]})]}),(0,U.jsx)(pv,{theme:i,children:(0,U.jsxs)(U.Fragment,{children:[a(`party.configureHint`),(0,U.jsx)(`br`,{}),a(`party.listAttributesExcluded`)]})})]})]}),d&&(0,U.jsxs)(sv,{theme:i,children:[(0,U.jsxs)(lv,{children:[(0,U.jsx)(dv,{theme:i,onClick:D,disabled:w.length===0,children:a(`party.saveParty`)}),(0,U.jsx)(dv,{theme:i,onClick:()=>void O(),disabled:t===null,children:a(`party.loadParty`)})]}),(0,U.jsx)(Cv,{theme:i,children:t?a(`party.lastSaved`,{value:new Date(t).toLocaleString()}):a(`party.noSaveAvailable`)})]}),w.length===0?(0,U.jsx)(Sv,{theme:i,children:a(`party.emptyState`)}):(0,U.jsx)(ov,{theme:i,children:w.map(e=>{let t=e.metadata?.[j.PORTRAIT_URL]||``,r=n(e)?e.image.url:void 0,o=e.metadata[j.UNIT_NAME]||e.name||a(`party.unknownUnit`),s=e.createdUserId===l?.id,c=d||s,u=r||`/logo.png`,f=!!t;return(0,U.jsxs)(gv,{theme:i,children:[(0,U.jsxs)(_v,{children:[(0,U.jsx)(vv,{theme:i,src:u,alt:o,$full:!f}),f&&(0,U.jsx)(vv,{theme:i,src:f?t:``,alt:a(`party.overrideAlt`,{unit:o}),$overlay:!0})]}),(0,U.jsxs)(yv,{children:[(0,U.jsx)(bv,{theme:i,title:o,children:o}),c&&(0,U.jsx)(xv,{theme:i,defaultValue:t,placeholder:a(`party.portraitUrlPlaceholder`),onBlur:t=>{ie(e.id,t.target.value)}})]})]},e.id)})})]})})};var kv=(e,t,n)=>Math.max(t,Math.min(n,e));const Av=`${k}/token-badge-shape`,jv=`${k}/token-badge-shape-owner`,Mv=`${k}/token-badge-shape-slot`,Nv=`${k}/token-badge-text`,Pv=`${k}/token-badge-text-owner`,Fv=`${k}/token-badge-text-slot`;var Iv={square:[{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:0,y:1}],diamond:[{x:.5,y:0},{x:1,y:.5},{x:.5,y:1},{x:0,y:.5}],hex:[{x:.25,y:0},{x:.75,y:0},{x:1,y:.5},{x:.75,y:1},{x:.25,y:1},{x:0,y:.5}],shield:[{x:.14,y:.06},{x:.86,y:.06},{x:.92,y:.26},{x:.86,y:.58},{x:.67,y:.84},{x:.5,y:1},{x:.33,y:.84},{x:.14,y:.58},{x:.08,y:.26}],circle:Array.from({length:20},(e,t)=>{let n=Math.PI*2*t/20;return{x:.5+Math.cos(n)*.5,y:.5+Math.sin(n)*.5}})},Lv=e=>e===`circle`||e===`square`||e===`diamond`||e===`hex`||e===`shield`,Rv=(e,t)=>{if(typeof e!=`string`)return t;let n=e.trim();return/^#[0-9a-fA-F]{6}$/.test(n)?n:t},zv=(e,t)=>{let n=t/e.grid.dpi,r=Math.abs(e.scale.x||1),i=Math.abs(e.scale.y||1),a=e.image.width*n*r,o=e.image.height*n*i,s=e.grid.offset.x/e.image.width*a,c=e.grid.offset.y/e.image.height*o;return{minX:e.position.x-s,minY:e.position.y-c,width:a,height:o}},Bv=(e,t,n)=>{let r=zv(e,t),i=n===`left`||n===`right`,a=n===`top`?{x:.5,y:.18}:n===`bottom`?{x:.5,y:.82}:n===`left`?{x:.18,y:.5}:{x:.82,y:.5},o=i?{x:.05,y:.3}:{x:.3,y:.05};return{minX:r.minX+(a.x-o.x)*r.width,maxX:r.minX+(a.x+o.x)*r.width,minY:r.minY+(a.y-o.y)*r.height,maxY:r.minY+(a.y+o.y)*r.height,width:r.width,height:r.height}},Vv=(e,t)=>{let n=zv(e,t);return kv(Math.round(Math.min(n.width,n.height)*.2),24,48)},Hv=(e,t,n,r,i,a)=>{let o=Bv(e,t,n),s=kv(Math.round(i*.12),4,10),c=o.maxX-i*.5,l=a&&(n===`left`||n===`right`)?70:0,u=a&&(n===`left`||n===`right`)?35:0,d;switch(n){case`top`:d={x:c,y:o.maxY+s+r*(i+s)};break;case`left`:d={x:o.maxX-u+s,y:o.minY+l+r*(i+s)};break;case`right`:d={x:o.minX-i+u-s,y:o.minY+l+r*(i+s)};break;case`bottom`:default:d={x:c,y:o.minY-i-s-r*(i+s)};break}return{width:i,height:i,topLeftPosition:d}},Uv=(e,t)=>{switch(t){case`square`:case`diamond`:case`circle`:case`hex`:case`shield`:return Math.max(e-4,20);default:return e}},Wv=(e,t,n)=>Iv[n].map(n=>({x:n.x*e,y:n.y*t})),Gv=(e,t,n,r)=>({x:e.x,y:e.y}),Kv=(e,t,n)=>{if(!ie(n,t))return null;let r=ae(e.metadata,t,n,`current`);return r===null?null:`${Math.trunc(r)}`};const qv=e=>[{slot:1,shape:Lv(e[M.TOKEN_BADGE_ONE_SHAPE])?e[M.TOKEN_BADGE_ONE_SHAPE]:`circle`,color:Rv(e[M.TOKEN_BADGE_ONE_COLOR],`#f5c542`),attribute:typeof e[M.TOKEN_BADGE_ONE_ATTRIBUTE]==`string`?e[M.TOKEN_BADGE_ONE_ATTRIBUTE].trim():``},{slot:2,shape:Lv(e[M.TOKEN_BADGE_TWO_SHAPE])?e[M.TOKEN_BADGE_TWO_SHAPE]:`circle`,color:Rv(e[M.TOKEN_BADGE_TWO_COLOR],`#5bb5ff`),attribute:typeof e[M.TOKEN_BADGE_TWO_ATTRIBUTE]==`string`?e[M.TOKEN_BADGE_TWO_ATTRIBUTE].trim():``}].filter(e=>e.attribute.length>0),Jv=(e,t)=>`TBS${t}${e.slice(3)}`,Yv=(e,t)=>`TBT${t}${e.slice(3)}`,Xv=(e,t,n,r,i,a)=>{let o=[],s=[];return a.map(t=>{let n=Kv(e,t.attribute,i);return n===null?null:{...t,text:n}}).filter(e=>e!==null).forEach((i,a)=>{let c=Uv(Vv(e,t),i.shape),l=Hv(e,t,n,a,c,r),u=Wv(c,c,i.shape),d=Gv(l.topLeftPosition,c,c,i.shape),f=kv(Math.round(c*(i.text.length>=3?.5:.6)),12,24);o.push({unitId:e.id,position:l.topLeftPosition,points:u,color:i.color,strokeWidth:3,visible:e.visible,slot:i.slot}),s.push({unitId:e.id,position:d,width:c,height:c,text:i.text,fontSize:f,visible:e.visible,slot:i.slot})}),{desiredShapes:o,desiredTexts:s}};var Zv=`${k}/hp-bar-effect`,Qv=`${k}/hp-bar-owner`,$v=`${k}/hp-number-text`,ey=`${k}/hp-number-owner`,ty=e=>`HPB${e.slice(3)}`,ny=e=>`HPN${e.slice(3)}`,ry=(e,t,n)=>Math.max(t,Math.min(n,e)),iy=(e,t=.5,n=`#ffffff`)=>{if(typeof e!=`string`||!/^#[0-9a-fA-F]{6}$/.test(e))return n;let r=ry(t,0,1),i=t=>{let n=Number.parseInt(e.slice(t,t+2),16);return Math.round(n+(255-n)*r)};return`#${i(1).toString(16).padStart(2,`0`)}${i(3).toString(16).padStart(2,`0`)}${i(5).toString(16).padStart(2,`0`)}`},ay=(e,t,n,r)=>{let i=ae(e.metadata,t,r,`current`),a=ae(e.metadata,n,r,`max`);return a===null||a<=0||i===null?null:ry(i/a*100,0,100)},oy=(e,t,n,r)=>{let i=ae(e.metadata,t,r,`current`),a=ae(e.metadata,n,r,`max`);return i===null?null:{currentHp:Math.trunc(i),maxHp:a===null?null:Math.trunc(a)}},sy=e=>{let t=String(e||`bottom`).toLowerCase();return t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`},cy=e=>{switch(sy(e)){case`top`:return 0;case`bottom`:return 1;case`left`:return 2;case`right`:return 3;default:return 1}},ly=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o,width:r,height:i}},uy=(e,t,n)=>{let r=ly(e,t),i=r.minX+r.width*.5,a=r.minY+r.height*.5,o;switch(n){case`top`:o={x:i,y:r.minY+r.height*.18};break;case`bottom`:o={x:i,y:r.minY+r.height*.82};break;case`left`:o={x:r.minX+r.width*.18,y:a};break;case`right`:o={x:r.minX+r.width*.82,y:a};break}let s=r.width*.25,c=r.height*.18;return{x:o.x-s,y:o.y-c}};const dy=()=>{let r=H(e=>e.cacheReady),a=H(e=>e.sceneReady),c=H(e=>e.items),l=H(e=>e.localItems),u=H(e=>e.gridDpi),d=H(e=>e.roomMetadata),f=H(e=>e.sceneMetadata),p=H(e=>e.systemData);return(0,V.useEffect)(()=>{if(!r||!a)return;let f=!1;return(async()=>{let r=d,a=r[M.SHOW_HP_BARS]??!1,m=r[M.SHOW_HP_NUMBERS]??!1,h=a,g=!a&&m,_=sy(r[M.HP_BAR_ORIENTATION]),v=cy(r[M.HP_BAR_ORIENTATION]),y=qv(r),b=p?.attributes||[],x=iy(p?.theme.border,.5,`#ffffff`),{currentHpBid:S,maxHpBid:C}=oe(r,b),w=l.filter(e=>t(e)&&e.metadata?.[Zv]===!0),D=l.filter(e=>s(e)&&e.metadata?.[$v]===!0),O=l.filter(e=>i(e)&&e.metadata?.[Av]===!0),k=l.filter(e=>s(e)&&e.metadata?.[Nv]===!0);if(!h&&w.length>0)try{await T.scene.local.deleteItems(w.map(e=>e.id))}catch(e){N.error(`Failed to remove HP bar effects`,e)}if(!g&&D.length>0)try{await T.scene.local.deleteItems(D.map(e=>e.id))}catch(e){N.error(`Failed to remove HP number texts`,e)}if(y.length===0){if(O.length>0)try{await T.scene.local.deleteItems(O.map(e=>e.id))}catch(e){N.error(`Failed to remove token badge shapes`,e)}if(k.length>0)try{await T.scene.local.deleteItems(k.map(e=>e.id))}catch(e){N.error(`Failed to remove token badge texts`,e)}}if(!h&&!g&&y.length===0)return;let A=c.filter(e=>n(e)&&e.metadata?.[j.ON_LIST]===!0),ee=new Map,te=new Map,ne=new Map,re=new Map;for(let e of A){if(h){let t=ay(e,S,C,b);t!==null&&ee.set(ty(e.id),{unitId:e.id,hpPercent:t,visible:e.visible})}if(g&&n(e)){let t=oy(e,S,C,b);if(t){let n=t.maxHp===null?`${t.currentHp}`:`${t.currentHp}/${t.maxHp}`;te.set(ny(e.id),{unitId:e.id,text:n,position:uy(e,u,_)})}}if(n(e)&&y.length>0){let{desiredShapes:t,desiredTexts:n}=Xv(e,u,_,g,b,y);t.forEach(t=>{ne.set(Jv(e.id,t.slot),t)}),n.forEach(t=>{re.set(Yv(e.id,t.slot),t)})}}if(h){let e=new Map(w.map(e=>[e.id,e])),t=Array.from(ee.entries()).filter(([t])=>!e.has(t)),n=w.filter(e=>!ee.has(e.id)),r=w.filter(e=>{let t=ee.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`orientation`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return e.attachedTo!==t.unitId||!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-v)>.001});if(f)return;if(n.length>0)try{await T.scene.local.deleteItems(n.map(e=>e.id))}catch(e){N.error(`Failed to remove stale HP bar effects`,e)}if(t.length>0){let e=t.map(([e,t])=>o().id(e).name(`HP Bar Effect`).effectType(`ATTACHMENT`).attachedTo(t.unitId).layer(`ATTACHMENT`).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).visible(t.visible).uniforms([{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:v}]).sksl(`
uniform vec2 size;
uniform float time;
uniform float hpPercent;
uniform float orientation;

float sdBox(float2 p, float2 b) {
    float2 d = abs(p) - b;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

float hash(float n) {
    return fract(sin(n) * 43758.5453123);
}

half4 main(float2 coord) {
    float2 uv = coord / size;

    const float longSize = 0.6;
    const float shortSize = 0.1;
    bool isVertical = orientation >= 1.5;

    float2 center = float2(0.5, 0.82); // bottom default
    if (orientation < 0.5) {
        center = float2(0.5, 0.18); // top
    } else if (orientation < 1.5) {
        center = float2(0.5, 0.82); // bottom
    } else if (orientation < 2.5) {
        center = float2(0.18, 0.5); // left
    } else {
        center = float2(0.82, 0.5); // right
    }

    float2 halfSize = isVertical ? float2(shortSize * 0.5, longSize * 0.5) : float2(longSize * 0.5, shortSize * 0.5);

    float hpNorm = clamp(hpPercent / 100.0, 0.0, 1.0);

    float3 hpColor = (hpNorm > 0.5)
        ? mix(float3(0.9, 0.8, 0.1), float3(0.1, 0.8, 0.2), (hpNorm - 0.5) * 2.0)
        : mix(float3(0.8, 0.1, 0.1), float3(0.9, 0.8, 0.1), hpNorm * 2.0);

    float2 fillHalfSize = halfSize;
    float2 fillCenter = center;

    if (!isVertical) {
        float fillWidth = longSize * hpNorm;
        fillHalfSize = float2(fillWidth * 0.5, halfSize.y);
        fillCenter = float2(center.x - halfSize.x + fillHalfSize.x, center.y);
    } else {
        float fillHeight = longSize * hpNorm;
        fillHalfSize = float2(halfSize.x, fillHeight * 0.5);
        fillCenter = float2(center.x, center.y + halfSize.y - fillHalfSize.y);
    }

    float fillDist = sdBox(uv - fillCenter, fillHalfSize);
    float fillMask = step(fillDist, 0.0);

    float3 fillColor = hpColor;
    float fadeFactor = 1.0;
    if (!isVertical) {
        float rightEdgeX = fillCenter.x + fillHalfSize.x;
        fadeFactor = clamp((rightEdgeX - uv.x) * 100.0, 0.0, 1.0);
    } else {
        float topEdgeY = fillCenter.y - fillHalfSize.y;
        fadeFactor = clamp((uv.y - topEdgeY) * 100.0, 0.0, 1.0);
    }
    float verticalGrad = 0.8 + 0.1 * (uv.y - fillCenter.y + halfSize.y) / max(halfSize.y, 0.001);
    fillColor *= verticalGrad;
    float fillAlpha = fillMask * fadeFactor;

    const float borderThickness = 0.012;
    float2 innerHalfSize = max(halfSize - float2(borderThickness, borderThickness), float2(0.001, 0.001));
    float outerDist = sdBox(uv - center, halfSize);
    float innerDist = sdBox(uv - center, innerHalfSize);
    float outerMask = 1.0 - smoothstep(0.0, 0.003, outerDist);
    float innerMask = 1.0 - smoothstep(0.0, 0.003, innerDist);
    float borderShape = clamp(outerMask - innerMask, 0.0, 1.0);
    float pulse = 0.8 + 0.2 * sin(time * 2.0);
    float borderGlow = exp(-abs(outerDist) * 180.0) * pulse * 0.35;
    float borderMask = borderShape * pulse + borderGlow;

    float3 particleColor = hpColor;
    float particleAlpha = 0.0;

    if (hpNorm <= 0.8) {
        for (int i = 0; i < 5; i++) {
            float seed = float(i);
            float axisOffset = mix(-(!isVertical ? halfSize.y : halfSize.x), (!isVertical ? halfSize.y : halfSize.x), (float(i) + 0.5) * 0.2);
            float driftNorm = fract(time * 0.2 + hash(seed));

            float2 particlePos;
            if (!isVertical) {
                particlePos = float2(
                    mix(fillCenter.x + fillHalfSize.x, center.x + halfSize.x, driftNorm),
                    center.y + axisOffset
                );
            } else {
                particlePos = float2(
                    center.x + axisOffset,
                    mix(fillCenter.y - fillHalfSize.y, center.y - halfSize.y, driftNorm)
                );
            }

            float d = length(uv - particlePos);
            float particleSize = 0.0015 + 0.06 * hash(seed + 1.0);
            particleAlpha += (1.0 - driftNorm) * exp(-d / particleSize);
        }
    }
    particleAlpha *= innerMask;

    float3 emptyColor = hpColor * 0.05;
    float emptyMask = 0.0;
    if (!isVertical) {
        float emptyWidth = longSize * (1.0 - hpNorm);
        if (emptyWidth > 0.0) {
            float2 emptyCenter = float2(fillCenter.x + fillHalfSize.x + emptyWidth * 0.5, center.y);
            float2 emptyHalfSize = float2(emptyWidth * 0.5, halfSize.y);
            emptyMask = step(sdBox(uv - emptyCenter, emptyHalfSize), 0.0);
        }
    } else {
        float emptyHeight = longSize * (1.0 - hpNorm);
        if (emptyHeight > 0.0) {
            float2 emptyCenter = float2(center.x, center.y - halfSize.y + emptyHeight * 0.5);
            float2 emptyHalfSize = float2(halfSize.x, emptyHeight * 0.5);
            emptyMask = step(sdBox(uv - emptyCenter, emptyHalfSize), 0.0);
        }
    }

    float3 color = fillColor * fillAlpha +
        emptyColor * emptyMask +
        hpColor * borderMask +
        particleColor * particleAlpha;

    float alpha = fillAlpha +
        emptyMask * 0.05 +
        borderMask +
        particleAlpha;

    return half4(color, clamp(alpha, 0.0, 1.0));
}
`).metadata({[Zv]:!0,[Qv]:t.unitId}).build());try{await T.scene.local.addItems(e)}catch(e){N.error(`Failed to add HP bar effects`,e)}}if(r.length>0){let e=r.map(e=>e.id);try{await T.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=ee.get(e.id);if(!t)return;e.attachedTo=t.unitId;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:v}],e.metadata={...e.metadata,[Zv]:!0,[Qv]:t.unitId}})})}catch(e){N.error(`Failed to update HP bar effects`,e)}}}if(g){let t=new Map(D.map(e=>[e.id,e])),n=Array.from(te.entries()).filter(([e])=>!t.has(e)),r=D.filter(e=>!te.has(e.id)),i=D.filter(e=>{let t=te.get(e.id);if(!t)return!1;let n=e.text?.plainText,r=Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01;return e.attachedTo!==t.unitId||n!==t.text||r});if(f)return;if(r.length>0)try{await T.scene.local.deleteItems(r.map(e=>e.id))}catch(e){N.error(`Failed to remove stale HP number texts`,e)}if(n.length>0){let t=n.map(([t,n])=>{let r=A.find(e=>e.id===n.unitId);return e().id(t).name(`HP Number Text`).layer(`ATTACHMENT`).plainText(n.text).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(28).fontFamily(`Segoe UI`).textAlign(`CENTER`).position(n.position).metadata({[$v]:!0,[ey]:n.unitId}).attachedTo(n.unitId).visible(r?.visible??!0).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build()});try{await T.scene.local.addItems(t)}catch(e){N.error(`Failed to add HP number texts`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await T.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=te.get(e.id);if(!t)return;e.attachedTo=t.unitId,e.position=t.position;let n=e;n.text&&(n.text.plainText=t.text),e.metadata={...e.metadata,[$v]:!0,[ey]:t.unitId}})})}catch(e){N.error(`Failed to update HP number texts`,e)}}}if(y.length>0){let t=new Map(O.map(e=>[e.id,e])),n=Array.from(ne.entries()).filter(([e])=>!t.has(e)),r=O.filter(e=>!ne.has(e.id)),a=O.filter(e=>{let t=ne.get(e.id);return t?e.attachedTo!==t.unitId||Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01||e.points.length!==t.points.length||e.points.some((e,n)=>{let r=t.points[n];return!r||Math.abs(e.x-r.x)>.01||Math.abs(e.y-r.y)>.01})||e.style.fillColor!==t.color||e.style.strokeColor!==x||Math.abs(e.style.strokeWidth-t.strokeWidth)>.01||e.visible!==t.visible:!1});if(f)return;if(r.length>0)try{await T.scene.local.deleteItems(r.map(e=>e.id))}catch(e){N.error(`Failed to remove stale token badge shapes`,e)}if(n.length>0){let e=n.map(([e,t])=>E().id(e).name(`Token Badge ${t.slot}`).layer(`ATTACHMENT`).position(t.position).points(t.points).fillColor(t.color).fillOpacity(.95).strokeColor(x).strokeOpacity(1).strokeWidth(t.strokeWidth).tension(0).closed(!0).metadata({[Av]:!0,[jv]:t.unitId,[Mv]:t.slot}).attachedTo(t.unitId).visible(t.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).build());try{await T.scene.local.addItems(e)}catch(e){N.error(`Failed to add token badge shapes`,e)}}if(a.length>0)try{await T.scene.local.updateItems(a.map(e=>e.id),e=>{e.forEach(e=>{let t=ne.get(e.id);!t||!i(e)||(e.attachedTo=t.unitId,e.position=t.position,e.points=t.points,e.visible=t.visible,e.style={...e.style,fillColor:t.color,fillOpacity:.95,strokeColor:x,strokeOpacity:1,strokeWidth:t.strokeWidth,strokeDash:[],tension:0,closed:!0},e.metadata={...e.metadata,[Av]:!0,[jv]:t.unitId,[Mv]:t.slot})})})}catch(e){N.error(`Failed to update token badge shapes`,e)}let o=new Map(k.map(e=>[e.id,e])),c=Array.from(re.entries()).filter(([e])=>!o.has(e)),l=k.filter(e=>!re.has(e.id)),u=k.filter(e=>{let t=re.get(e.id);if(!t)return!1;let n=e.text,r=n?.plainText,i=n?.style?.fontSize,a=typeof n?.width==`number`?n.width:null,o=typeof n?.height==`number`?n.height:null;return e.attachedTo!==t.unitId||Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01||a===null||Math.abs(a-t.width)>.01||o===null||Math.abs(o-t.height)>.01||r!==t.text||i!==t.fontSize||e.visible!==t.visible});if(f)return;if(l.length>0)try{await T.scene.local.deleteItems(l.map(e=>e.id))}catch(e){N.error(`Failed to remove stale token badge texts`,e)}if(c.length>0){let t=c.map(([t,n])=>e().id(t).name(`Token Badge ${n.slot} Text`).layer(`TEXT`).plainText(n.text).textType(`PLAIN`).width(n.width).height(n.height).padding(0).fontWeight(900).fillOpacity(1).fillColor(`white`).strokeWidth(4).strokeColor(`black`).strokeOpacity(1).fontSize(n.fontSize).fontFamily(`Segoe UI`).textAlign(`CENTER`).textAlignVertical(`MIDDLE`).position(n.position).metadata({[Nv]:!0,[Pv]:n.unitId,[Fv]:n.slot}).attachedTo(n.unitId).visible(n.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).build());try{await T.scene.local.addItems(t)}catch(e){N.error(`Failed to add token badge texts`,e)}}if(u.length>0)try{await T.scene.local.updateItems(u.map(e=>e.id),e=>{e.forEach(e=>{let t=re.get(e.id);if(!t||!s(e))return;e.attachedTo=t.unitId,e.position=t.position,e.visible=t.visible;let n=e;n.text&&(n.text.plainText=t.text,n.text.width=t.width,n.text.height=t.height,n.text.style&&(n.text.style.fontSize=t.fontSize)),e.metadata={...e.metadata,[Nv]:!0,[Pv]:t.unitId,[Fv]:t.slot}})})}catch(e){N.error(`Failed to update token badge texts`,e)}}})(),()=>{f=!0}},[r,a,c,l,u,d,f,p]),null};var fy=`${k}/death-effect-token`,py=`${k}/death-effect-owner`,my=e=>`DTH${e.slice(3)}`,hy=(e,t,n)=>ae(e.metadata,t,n,`current`);const gy=()=>{let e=H(e=>e.cacheReady),r=H(e=>e.sceneReady),i=H(e=>e.items),a=H(e=>e.localItems),s=H(e=>e.roomMetadata),c=H(e=>e.sceneMetadata),l=H(e=>e.systemData);return(0,V.useEffect)(()=>{if(!e||!r)return;let c=!1;return(async()=>{let e=s,r=e[M.SHOW_DEATH_EFFECT]??!1,u=l?.attributes||[],d=oe(e,u).currentHpBid,f=a.filter(e=>t(e)&&e.metadata?.[fy]===!0);if(!r){if(f.length>0)try{await T.scene.local.deleteItems(f.map(e=>e.id))}catch(e){N.error(`Failed to remove death token effects`,e)}return}let p=i.filter(e=>n(e)&&e.metadata?.[j.ON_LIST]===!0),m=new Map;p.forEach(e=>{hy(e,d,u)===0&&m.set(my(e.id),{ownerId:e.id,visible:e.visible})});let h=new Map(f.map(e=>[e.id,e])),g=Array.from(m.entries()).filter(([e])=>!h.has(e)),_=f.filter(e=>!m.has(e.id)),v=f.filter(e=>{let t=m.get(e.id);if(!t)return!1;let n=e;return e.attachedTo!==t.ownerId||n.metadata?.[py]!==t.ownerId});if(!c){if(_.length>0)try{await T.scene.local.deleteItems(_.map(e=>e.id))}catch(e){N.error(`Failed to remove stale death token effects`,e)}if(g.length>0){let e=g.map(([e,t])=>o().id(e).name(`Death Token Effect`).effectType(`ATTACHMENT`).layer(`ATTACHMENT`).attachedTo(t.ownerId).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(`
uniform float2 size;
uniform float time;

float circle(float2 p, float r)
{
    return length(p) - r;
}

float box(float2 p, float2 b)
{
    float2 d = abs(p) - b;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

float sdEllipse(float2 p, float2 r)
{
    return length(p / r) - 1.0;
}

float sdRoundBox(float2 p, float2 b, float r)
{
    float2 q = abs(p) - b;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float opUnion(float a, float b)
{
    return min(a, b);
}

float opSub(float a, float b)
{
    return max(a, -b);
}

float sdSegment(float2 p, float2 a, float2 b)
{
    float2 pa = p - a;
    float2 ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h);
}

float skullOutline(float2 uv)
{
    float head = sdEllipse(uv - float2(0.0, 0.08), float2(0.205, 0.215));
    float jaw = sdRoundBox(uv - float2(0.0, -0.165), float2(0.105, 0.095), 0.050);
    float s = opUnion(head, jaw);

    float pinchL = circle(uv - float2(-0.17, -0.08), 0.062);
    float pinchR = circle(uv - float2(0.17, -0.08), 0.062);
    s = opSub(s, pinchL);
    s = opSub(s, pinchR);

    float bottomCut = box(uv - float2(0.0, -0.300), float2(0.50, 0.080));
    s = opSub(s, bottomCut);

    return abs(s);
}

half4 main(float2 coord)
{
    float2 uv = (coord - 0.5 * size.xy) / max(size.y, 1.0);

    // Skia/attachment coordinates render inverted relative to authored orientation.
    uv.y *= -1.0;

    float pulse = 1.0 + 0.035 * sin(time * 2.3);

    uv *= 1.05 / pulse;
    uv.y += 0.012;

    float dOutline = skullOutline(uv);

    float2 eyeLC = float2(-0.072, 0.062);
    float2 eyeRC = float2(0.072, 0.062);
    float ex = 0.025;
    float dEyeL = min(
        sdSegment(uv, eyeLC + float2(-ex, -ex), eyeLC + float2(ex, ex)),
        sdSegment(uv, eyeLC + float2(-ex, ex), eyeLC + float2(ex, -ex))
    );
    float dEyeR = min(
        sdSegment(uv, eyeRC + float2(-ex, -ex), eyeRC + float2(ex, ex)),
        sdSegment(uv, eyeRC + float2(-ex, ex), eyeRC + float2(ex, -ex))
    );

    float2 n0 = float2(0.0, -0.028);
    float2 n1 = float2(-0.026, -0.083);
    float2 n2 = float2(0.026, -0.083);
    float dNose = min(
        sdSegment(uv, n0, n1),
        min(sdSegment(uv, n1, n2), sdSegment(uv, n2, n0))
    );

    float d = min(dOutline, min(dEyeL, min(dEyeR, dNose)));

    // 2x thicker line profile for token readability.
    float line = smoothstep(0.036, 0.0, d);
    float core = smoothstep(0.018, 0.0, d);

    // Make lower skull thinner.
    float bottomMask = 1.0 - smoothstep(-0.10, 0.08, uv.y);
    line *= mix(1.0, 0.62, bottomMask);
    core *= mix(1.0, 0.68, bottomMask);

    // Heavy emphasis on upper skull arc.
    float topMask = smoothstep(-0.10, 0.10, uv.y);
    float topLine = smoothstep(0.132, 0.0, dOutline) * topMask;
    float topCore = smoothstep(0.066, 0.0, dOutline) * topMask;
    line = max(line, topLine);
    core = max(core, topCore);

    // Pulse glow: expand and brighten slightly over time while staying local.
    float pulseWave = 0.5 + 0.5 * sin(time * 2.3 + 0.7);
    float glowRadius = 0.10 + 0.03 * pulseWave;
    float glowMask = smoothstep(glowRadius, 0.0, d);
    float glowStrength = 0.010 + 0.006 * pulseWave;
    float glow = (glowStrength / (d + 0.006)) * glowMask;

    // Extra red background aura around the skull silhouette.
    float outerAura = smoothstep(0.24 + 0.03 * pulseWave, 0.0, dOutline);
    outerAura *= 0.30 + 0.18 * pulseWave;
    float upperAuraBias = smoothstep(-0.06, 0.20, uv.y);
    outerAura *= mix(0.45, 1.15, upperAuraBias);

    float3 red = float3(1.0, 0.16, 0.05);
    float3 hot = float3(1.0, 0.88, 0.65);
    float pulseBrightness = 0.92 + 0.10 * sin(time * 2.3 + 0.3);
    float3 col = (red * (0.62 * line + 0.58 * glow + outerAura) + hot * (0.98 * core)) * pulseBrightness;

    float alpha = clamp(0.50 * line + 1.10 * core + 0.65 * glow + 0.45 * outerAura, 0.0, 1.0);

    return half4(col, alpha);
}
`).visible(t.visible).metadata({[fy]:!0,[py]:t.ownerId}).build());try{await T.scene.local.addItems(e)}catch(e){N.error(`Failed to add death token effects`,e)}}if(v.length>0)try{await T.scene.local.updateItems(v.map(e=>e.id),e=>{e.forEach(e=>{let t=m.get(e.id);t&&(e.attachedTo=t.ownerId,e.metadata={...e.metadata,[fy]:!0,[py]:t.ownerId})})})}catch(e){N.error(`Failed to update death token effects`,e)}}})(),()=>{c=!0}},[e,r,i,a,s,c,l]),null};var _y=`${k}/buff-effect-token`,vy=`${k}/buff-effect-owner`,yy=`${k}/debuff-effect-token`,by=`${k}/debuff-effect-owner`,xy=`${k}/effect-preset`,Sy=e=>`EFB${e.slice(3)}`,Cy=e=>`EFD${e.slice(3)}`,wy=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const Ty=()=>{let e=H(e=>e.cacheReady),r=H(e=>e.sceneReady),i=H(e=>e.items),a=H(e=>e.localItems),s=H(e=>e.roomMetadata),c=H(e=>e.sceneMetadata);return(0,V.useEffect)(()=>{if(!e||!r)return;let c=!1;return(async()=>{let e=s,r=e[M.BUFF_VISUAL_PRESET],l=e[M.DEBUFF_VISUAL_PRESET],u=ch(r)?r:ih,d=lh(l)?l:ah,f=uh(u),p=dh(d),m=i.filter(e=>n(e)&&e.metadata?.[j.ON_LIST]===!0),h=new Set(m.map(e=>e.id)),g=new Map,_=(e,t)=>{let n=g.get(e)||{hasBuff:!1,hasDebuff:!1};t===`buff`?n.hasBuff=!0:n.hasDebuff=!0,g.set(e,n)};i.forEach(e=>{if(e.metadata?.[j.ON_LIST]!==!0)return;let t=wy(e.metadata?.[Xh]);t.length!==0&&t.forEach(t=>{t.effectType!==`neutral`&&(t.targets.length>0?t.targets:[e.id]).forEach(e=>{h.has(e)&&(t.effectType===`buff`||t.effectType===`debuff`)&&_(e,t.effectType)})})});let v=new Map,y=new Map;m.forEach(e=>{let t=g.get(e.id);t?.hasBuff&&v.set(Sy(e.id),e.id),t?.hasDebuff&&y.set(Cy(e.id),e.id)});let b=a.filter(e=>t(e)&&e.metadata?.[_y]===!0),x=a.filter(e=>t(e)&&e.metadata?.[yy]===!0),S=async e=>{let{existing:t,desiredByOverlayId:n,preset:r,shader:i,name:a,flagKey:s,ownerKey:l}=e,u=new Map(t.map(e=>[e.id,e])),d=Array.from(n.entries()).filter(([e])=>!u.has(e)),f=t.filter(e=>!n.has(e.id)),p=t.filter(e=>{let t=n.get(e.id);if(!t)return!1;let i=e.metadata?.[xy];return e.attachedTo!==t||i!==r});if(!c){if(f.length>0)try{await T.scene.local.deleteItems(f.map(e=>e.id))}catch(e){N.error(`Failed to remove stale ${a.toLowerCase()} overlays`,e)}if(d.length>0){let e=d.map(([e,t])=>o().id(e).name(a).effectType(`ATTACHMENT`).layer(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(i).metadata({[s]:!0,[l]:t,[xy]:r}).build());try{await T.scene.local.addItems(e)}catch(e){N.error(`Failed to add ${a.toLowerCase()} overlays`,e)}}if(p.length>0)try{await T.scene.local.updateItems(p.map(e=>e.id),e=>{e.forEach(e=>{let t=n.get(e.id);if(!t)return;e.attachedTo=t;let a=e;a.sksl=i,e.metadata={...e.metadata,[s]:!0,[l]:t,[xy]:r}})})}catch(e){N.error(`Failed to update ${a.toLowerCase()} overlays`,e)}}};await S({existing:b,desiredByOverlayId:v,preset:u,shader:f,name:`Buff Token Effect`,flagKey:_y,ownerKey:vy}),await S({existing:x,desiredByOverlayId:y,preset:d,shader:p,name:`Debuff Token Effect`,flagKey:yy,ownerKey:by})})(),()=>{c=!0}},[e,r,i,a,s,c]),null};var Ey=`${k}/boss-hp-effect`,Dy=`${k}/boss-hp-owner`,Oy=`${k}/boss-hp-slot`,ky=e=>`BOSSHP${e}`,Ay=(e,t,n)=>Math.max(t,Math.min(n,e)),jy=(e,t,n,r)=>{let i=ae(e.metadata,t,r,`current`),a=ae(e.metadata,n,r,`max`);return a===null||a<=0||i===null?null:Ay(i/a*100,0,100)};const My=()=>{let e=H(e=>e.cacheReady),r=H(e=>e.sceneReady),i=H(e=>e.items),a=H(e=>e.localItems),s=H(e=>e.roomMetadata),c=H(e=>e.sceneMetadata),l=H(e=>e.systemData);return(0,V.useEffect)(()=>{if(!e||!r)return;let c=!1;return(async()=>{let e=s,r=l?.attributes||[],{currentHpBid:u,maxHpBid:d}=oe(e,r),f=a.filter(e=>t(e)&&e.metadata?.[Ey]===!0),p=i.filter(e=>n(e)&&e.metadata?.[j.ON_LIST]===!0&&e.metadata?.[j.BOSS_MODE]===!0).sort((e,t)=>{let n=Number(e.metadata?.[j.INITIATIVE]??0);return Number(t.metadata?.[j.INITIATIVE]??0)-n}).slice(0,2).map((e,t)=>{let n=jy(e,u,d,r);return n===null?null:{id:ky(t),unitId:e.id,slot:t,hpPercent:n}}).filter(e=>e!==null),m=new Map(p.map(e=>[e.id,e])),h=new Map(f.map(e=>[e.id,e])),g=f.filter(e=>!m.has(e.id)),_=p.filter(e=>!h.has(e.id)),v=f.filter(e=>{let t=m.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`slot`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-t.slot)>.001||e.metadata?.[Dy]!==t.unitId});if(!c){if(g.length>0)try{await T.scene.local.deleteItems(g.map(e=>e.id))}catch(e){N.error(`Failed to remove stale boss HP viewport effects`,e)}if(_.length>0){let e=_.map(e=>o().id(e.id).name(`Boss HP Bar`).effectType(`VIEWPORT`).locked(!0).disableHit(!0).uniforms([{name:`hpPercent`,value:e.hpPercent},{name:`slot`,value:e.slot}]).sksl(`
uniform float2 size;
uniform float3x3 view;
uniform float time;
uniform float hpPercent;
uniform float slot;

float inRect(float2 p, float2 minPoint, float2 maxPoint) {
  return step(minPoint.x, p.x)
    * step(minPoint.y, p.y)
    * step(p.x, maxPoint.x)
    * step(p.y, maxPoint.y);
}

float hash(float n) {
  return fract(sin(n) * 43758.5453123);
}

half4 main(float2 coord) {
  float2 viewCoord = (float3(coord, 1.0) * view).xy;

  float barWidth = size.x * 0.80;
  float barHeight = 26.0;
  float left = (size.x - barWidth) * 0.5;
  float top = 50.0 + (slot * 42.0);

  float2 outerMin = float2(left, top);
  float2 outerMax = outerMin + float2(barWidth, barHeight);

  float2 goldTrimMin = outerMin + float2(2.0, 2.0);
  float2 goldTrimMax = outerMax - float2(2.0, 2.0);

  float2 innerFrameMin = outerMin + float2(5.0, 5.0);
  float2 innerFrameMax = outerMax - float2(5.0, 5.0);

  float2 trackMin = outerMin + float2(8.0, 8.0);
  float2 trackMax = outerMax - float2(8.0, 8.0);

  float fillRatio = clamp(hpPercent / 100.0, 0.0, 1.0);
  float fillWidth = (trackMax.x - trackMin.x) * fillRatio;
  float2 fillMax = float2(trackMin.x + fillWidth, trackMax.y);

  float outerMask = inRect(viewCoord, outerMin, outerMax);
  float goldMask = inRect(viewCoord, goldTrimMin, goldTrimMax);
  float innerMask = inRect(viewCoord, innerFrameMin, innerFrameMax);
  float trackMask = inRect(viewCoord, trackMin, trackMax);
  float fillMask = inRect(viewCoord, trackMin, fillMax);

  float yNorm = clamp((viewCoord.y - outerMin.y) / max(barHeight, 1.0), 0.0, 1.0);
  float3 goldColor = mix(float3(0.34, 0.24, 0.05), float3(0.96, 0.84, 0.38), 1.0 - yNorm);
  float3 blackFrame = float3(0.03, 0.03, 0.03);
  float3 trackColor = float3(0.08, 0.02, 0.02);
  float3 fillLow = float3(0.45, 0.02, 0.03);
  float3 fillHigh = float3(0.98, 0.18, 0.08);
  float3 fillColor = mix(fillLow, fillHigh, yNorm);

  float2 trackSize = max(trackMax - trackMin, float2(1.0));
  float2 fillLocal = (viewCoord - trackMin) / trackSize;

  float particleMask = 0.0;
  float streakMask = 0.0;
  if (fillRatio > 0.0) {
    float fillInnerWidth = max(fillMax.x - trackMin.x, 0.001);
    float fillInnerHeight = max(trackMax.y - trackMin.y, 0.001);

    // Brighter glints moving left-to-right through the fill.
    for (int i = 0; i < 22; i++) {
      float seed = float(i) + slot * 41.0;
      float drift = fract(time * 0.42 + hash(seed * 2.7));
      float px = trackMin.x + (drift * fillInnerWidth);
      float py = trackMin.y + hash(seed * 5.1) * fillInnerHeight;
      float radius = 2.0 + hash(seed * 7.3) * 3.8;

      float2 delta = viewCoord - float2(px, py);
      float d = length(delta);
      particleMask += exp(-d / radius) * (0.45 + 0.55 * drift);
    }

    // Animated energy ribbons for a clearly "alive" fill.
    float bandA = sin((fillLocal.x * 28.0) - (time * 3.8) + (fillLocal.y * 9.0));
    float bandB = sin((fillLocal.x * 20.0) - (time * 2.6) - (fillLocal.y * 12.0));
    streakMask = smoothstep(0.35, 0.95, bandA * 0.65 + bandB * 0.35);
  }
  particleMask *= fillMask;
  streakMask *= fillMask;

  float3 color = float3(0.0);
  float alpha = 0.0;

  if (outerMask > 0.0) {
    color = goldColor;
    alpha = 0.96;
  }

  if (goldMask > 0.0) {
    color = blackFrame;
    alpha = 0.98;
  }

  if (innerMask > 0.0) {
    color = goldColor;
    alpha = 0.92;
  }

  if (trackMask > 0.0) {
    color = trackColor;
    alpha = 0.32;
  }

  if (fillMask > 0.0) {
    float basePulse = 0.88 + 0.12 * sin(time * 2.0 + slot * 1.3);
    color = fillColor * basePulse;
    alpha = 0.95;
  }

  if (particleMask > 0.0 || streakMask > 0.0) {
    float sparkle = clamp(particleMask * 0.32 + streakMask * 0.45, 0.0, 1.0);
    float3 particleColor = mix(float3(1.0, 0.82, 0.42), float3(1.0, 0.96, 0.70), streakMask * 0.6);
    color += particleColor * sparkle * 0.55;
    alpha = max(alpha, 0.95);
  }

  return half4(color * alpha, alpha);
}
`).metadata({[Ey]:!0,[Dy]:e.unitId,[Oy]:e.slot}).build());try{await T.scene.local.addItems(e)}catch(e){N.error(`Failed to add boss HP viewport effects`,e)}}if(v.length>0)try{await T.scene.local.updateItems(v.map(e=>e.id),e=>{e.forEach(e=>{let t=m.get(e.id);if(!t)return;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`slot`,value:t.slot}],e.metadata={...e.metadata,[Ey]:!0,[Dy]:t.unitId,[Oy]:t.slot}})})}catch(e){N.error(`Failed to update boss HP viewport effects`,e)}}})(),()=>{c=!0}},[e,r,i,a,s,c,l]),null};var Ny=`${k}/current-turn-effect`;const Py=()=>{let e=H(e=>e.cacheReady),t=H(e=>e.sceneReady),n=H(e=>e.items),r=H(e=>e.roomMetadata),i=H(e=>e.sceneMetadata);return(0,V.useEffect)(()=>{if(!e||!t)return;let a=!1;return(async()=>{let e=r[M.SHOW_TURN_EFFECT]===!0,t=i[M.CURRENT_TURN];if(!e||!t){try{await T.scene.local.deleteItems([Ny])}catch{}return}if(!n.find(e=>e.id===t)){try{await T.scene.local.deleteItems([Ny])}catch{}return}if(!a){try{let e=!1;if(await T.scene.local.updateItems([Ny],n=>{let r=n[0];r&&(r.attachedTo=t,e=!0)}),e)return}catch{}if(!a)try{let e=o().id(Ny).name(`Current Turn Effect`).effectType(`ATTACHMENT`).layer(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).sksl(`
uniform vec2 size;
uniform float time;

float sdBox(float2 p, float2 b)
{
    float2 d = abs(p) - b;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

float edgeMask(float2 pos, float2 outerMin, float2 outerMax)
{
    float2 center = (outerMin + outerMax) * 0.5;
    float2 halfSize = (outerMax - outerMin) * 0.5;

    float dist = abs(sdBox(pos - center, halfSize));
    return dist;
}

float2 perimeterPoint(float2 outerMin, float2 outerMax, float dist)
{
    float width  = outerMax.x - outerMin.x;
    float height = outerMax.y - outerMin.y;
    float perimeter = 2.0 * (width + height);

    dist = mod(dist, perimeter);

    if(dist < width)
        return float2(outerMin.x + dist, outerMin.y);

    if(dist < width + height)
        return float2(outerMax.x, outerMin.y + (dist - width));

    if(dist < 2.0*width + height)
        return float2(outerMax.x - (dist - width - height), outerMax.y);

    return float2(outerMin.x, outerMax.y - (dist - 2.0*width - height));
}

float cometEffect(float2 outerMin, float2 outerMax, float2 pos)
{
    float width  = outerMax.x - outerMin.x;
    float height = outerMax.y - outerMin.y;
    float perimeter = 2.0 * (width + height);

    float head = fract(time * 0.4) * perimeter;

    float edgeDist = edgeMask(pos, outerMin, outerMax);
    float edgeThickness = 0.013;
    float edgeBand = exp(-edgeDist / edgeThickness);

    float glow = 0.10;

    float cometWidth = 0.025 * perimeter;
    float trailLength = 0.12 * perimeter;

    float2 pHead = perimeterPoint(outerMin, outerMax, head);
    float headInfluence = exp(-length(pos - pHead) / (cometWidth * 0.25));
    glow += headInfluence;

    for(int i = 1; i <= 16; i++)
    {
        float t = float(i) / 16.0;
        float sampled = head - t * trailLength;
        float2 p = perimeterPoint(outerMin, outerMax, sampled);

        float influence = exp(-length(pos - p) / cometWidth);
        glow += influence * (1.0 - t);
    }

    float2 center = (outerMin + outerMax) * 0.5;

    float cornerPositions[4];
    cornerPositions[0] = 0.0;
    cornerPositions[1] = width;
    cornerPositions[2] = width + height;
    cornerPositions[3] = 2.0*width + height;

    for(int i = 0; i < 4; i++)
    {
        float impact = exp(-abs(head - cornerPositions[i]) / (0.02 * perimeter));
        float2 corner = perimeterPoint(outerMin, outerMax, cornerPositions[i]);
        float inward = exp(-length(pos - mix(corner, center, 0.3)) / 0.02);
        glow += impact * inward * 1.5;
    }

    return glow * edgeBand;
}

half4 main(float2 coord)
{
    float2 pos = coord / size;

    float padding = 0.025;
    float innerPad = 0.005;

    float2 outerMin = float2(padding, padding);
    float2 outerMax = float2(1.0 - padding, 1.0 - padding);

    outerMin += float2(innerPad);
    outerMax -= float2(innerPad);

    float d = cometEffect(outerMin, outerMax, pos);

    float3 selectionColor = float3(148.0/255.0, 24.0/255.0, 148.0/255.0);

    float intensity = pow(d, 0.75);

    float3 color = selectionColor * intensity;

    // clamp alpha so it never overflows
    float alpha = clamp(intensity * 0.6, 0.0, 1.0);

    return half4(color, alpha);
}

`).build();await T.scene.local.addItems([e])}catch(e){N.error(`Failed to sync current turn effect`,e)}}})(),()=>{a=!0}},[e,t,n,r,i]),null};var Fy=`${k}/gm-name-label`,Iy=`${k}/gm-name-owner`,Ly=e=>`GMN${e.slice(3)}`,Ry=24,zy=`Segoe UI`,By=800,Vy=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o,width:r,height:i}},Hy=e=>{if(typeof document>`u`)return e.length*(Ry*.58);let t=document.createElement(`canvas`).getContext(`2d`);return t?(t.font=`${By} ${Ry}px ${zy}`,t.measureText(e).width):e.length*(Ry*.58)},Uy=(e,t,n)=>{let r=Vy(e,t),i=Hy(n)*.5;return{x:r.minX+r.width*.5-i+6,y:r.minY+r.height-16}};const Wy=()=>{let t=H(e=>e.cacheReady),r=H(e=>e.sceneReady),i=H(e=>e.items),a=H(e=>e.localItems),o=H(e=>e.gridDpi),c=H(e=>e.roomMetadata),l=H(e=>e.sceneMetadata),u=H(e=>e.playerData);return(0,V.useEffect)(()=>{if(!t||!r)return;let l=!1;return(async()=>{let t=c[M.SHOW_NAMES_TO_GM]??!1,r=String(u?.role||``).toUpperCase()===`GM`,d=a.filter(e=>s(e)&&e.metadata?.[Fy]===!0);if(!t||!r){if(d.length>0)try{await T.scene.local.deleteItems(d.map(e=>e.id))}catch(e){N.error(`Failed to remove GM name labels`,e)}return}let f=i.filter(e=>n(e)&&e.metadata?.[j.ON_LIST]===!0),p=new Map;for(let e of f){let t=e.metadata?.[j.UNIT_NAME],n=String(t||``).trim();n&&p.set(Ly(e.id),{unitId:e.id,name:n,position:Uy(e,o,n),visible:e.visible})}let m=new Map(d.map(e=>[e.id,e])),h=Array.from(p.entries()).filter(([e])=>!m.has(e)),g=d.filter(e=>!p.has(e.id)),_=d.filter(e=>{let t=p.get(e.id);if(!t)return!1;let n=e.text?.plainText,r=Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01;return e.attachedTo!==t.unitId||n!==t.name||e.visible!==t.visible||r});if(!l){if(g.length>0)try{await T.scene.local.deleteItems(g.map(e=>e.id))}catch(e){N.error(`Failed to remove stale GM name labels`,e)}if(h.length>0){let t=h.map(([t,n])=>e().id(t).name(`GM Name Label`).layer(`TEXT`).plainText(n.name).textType(`PLAIN`).fontWeight(800).fillOpacity(1).fillColor(`white`).strokeWidth(12).strokeColor(`black`).strokeOpacity(1).fontSize(Ry).fontFamily(zy).textAlign(`CENTER`).position(n.position).metadata({[Fy]:!0,[Iy]:n.unitId}).attachedTo(n.unitId).visible(n.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).build());try{await T.scene.local.addItems(t)}catch(e){N.error(`Failed to add GM name labels`,e)}}if(_.length>0)try{await T.scene.local.updateItems(_.map(e=>e.id),e=>{e.forEach(e=>{let t=p.get(e.id);if(!t)return;e.attachedTo=t.unitId,e.position=t.position,e.visible=t.visible;let n=e;n.text&&(n.text.plainText=t.name),e.metadata={...e.metadata,[Fy]:!0,[Iy]:t.unitId}})})}catch(e){N.error(`Failed to update GM name labels`,e)}}})(),()=>{l=!0}},[t,r,i,a,o,c,l,u]),null},Gy=()=>{let[e,t]=(0,V.useState)(!1),{updateThemeFromSystem:n}=zt(),r=H(e=>e.roomMetadata),i=H(e=>e.cacheReady),a=H(e=>e.systemData),o=H(e=>e.setSystemData),s=()=>({theme:{primary:S.theme_primary,offset:S.theme_offset,background:S.theme_background,border:S.theme_border,background_url:S.background_url},cardLayout:S.card_layout,listLayout:S.list_layout,attributes:S.attributes,systemName:S.name,importDate:null,snapshotPublicId:null});return(0,V.useEffect)(()=>{!i&&e&&(t(!1),o(null))},[i,e,o]),(0,V.useEffect)(()=>{!i||!a||n(a.theme.primary,a.theme.offset,a.theme.background,a.theme.border,a.theme.background_url)},[i,a,n]),(0,V.useEffect)(()=>{if(e)return;let n=!0,a=async()=>{if(i)try{N.log(`Starting app initialization...`),await c(),n&&(t(!0),N.log(`App initialization complete`))}catch(e){N.error(`Error during app initialization:`,e),n&&t(!0)}},c=async()=>{let e=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Snapshot ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Snapshot ${t} is not a JSON array`);return n}throw Error(`Snapshot ${t} has invalid type`)},t=async t=>{let{data:n,error:r}=await y.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:t});if(r)return N.error(`Failed to load room snapshot:`,r),!1;let i=Array.isArray(n)?n[0]:n;if(!i||typeof i.snapshot_public_id!=`string`)return N.warn(`Room snapshot reference was set, but no snapshot record was returned`),!1;let a=e(i.card_layout,`card_layout`),s=e(i.list_layout,`list_layout`),c=e(i.attributes,`attributes`);return o({theme:{primary:i.theme_primary,offset:i.theme_offset,background:i.theme_background,border:i.theme_border,background_url:i.background_url},cardLayout:a,listLayout:s,attributes:c,systemName:i.system_name,importDate:i.imported_at,snapshotPublicId:i.snapshot_public_id}),N.log(`System data hydrated from room snapshot`,{snapshotPublicId:i.snapshot_public_id,systemName:i.system_name}),!0};try{let e=r[mh.SNAPSHOT_PUBLIC_ID];if(typeof e==`string`&&e.trim().length>0&&await t(e))return;N.log(`Room snapshot reference missing or unavailable, initializing defaults`),await l()}catch(e){N.error(`Error loading system data:`,e),await l()}},l=async()=>{o(s()),N.log(`Default system initialized`)};return a(),()=>{n=!1}},[i,e,r,o,n]),(0,V.useEffect)(()=>{if(!i||!e)return;let t=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},n=r[mh.SNAPSHOT_PUBLIC_ID],c=typeof n==`string`&&n.trim().length>0?n.trim():null;if(c===(a?.snapshotPublicId??null))return;let l=!1;return(async()=>{if(!c){l||(o(s()),N.log(`Room snapshot reference cleared, reverted runtime system to defaults`));return}let{data:e,error:n}=await y.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:c});if(n){N.error(`Failed to refresh system from room snapshot change:`,n);return}let r=Array.isArray(e)?e[0]:e;if(!r||typeof r.snapshot_public_id!=`string`){N.warn(`Room snapshot reference changed, but snapshot record was not found`);return}let i=t(r.card_layout),a=t(r.list_layout),u=t(r.attributes);if(!i||!a||!u){N.warn(`Room snapshot refresh returned invalid payload arrays`);return}l||(o({theme:{primary:r.theme_primary,offset:r.theme_offset,background:r.theme_background,border:r.theme_border,background_url:r.background_url},cardLayout:i,listLayout:a,attributes:u,systemName:r.system_name,importDate:r.imported_at,snapshotPublicId:r.snapshot_public_id}),N.log(`Runtime system refreshed from room snapshot change`,{snapshotPublicId:r.snapshot_public_id,systemName:r.system_name}))})(),()=>{l=!0}},[i,e,r,a,o]),{isInitialized:e}};var Ky=_`
  ${{"*, ::before, ::after":{boxSizing:`border-box`,borderWidth:`0`,borderStyle:`solid`,borderColor:`#e2e8f0`,"--tw-border-spacing-x":`0`,"--tw-border-spacing-y":`0`,"--tw-translate-x":`0`,"--tw-translate-y":`0`,"--tw-rotate":`0`,"--tw-skew-x":`0`,"--tw-skew-y":`0`,"--tw-scale-x":`1`,"--tw-scale-y":`1`,"--tw-pan-x":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pan-y":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pinch-zoom":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-scroll-snap-strictness":`proximity`,"--tw-gradient-from-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-via-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-to-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ordinal":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-slashed-zero":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-figure":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-spacing":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-fraction":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-shadow":`0 0 #0000`,"--tw-ring-shadow":`0 0 #0000`,"--tw-shadow":`0 0 #0000`,"--tw-shadow-colored":`0 0 #0000`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`0px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`rgb(66 153 225 / 0.5)`,"--tw-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-drop-shadow":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-opacity":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-size":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-layout":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-paint":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-style":`var(--tw-empty,/*!*/ /*!*/)`},"::before, ::after":{"--tw-content":`''`},"html, :host":{lineHeight:`1.5`,WebkitTextSizeAdjust:`100%`,MozTabSize:`4`,tabSize:`4`,fontFamily:`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,fontFeatureSettings:` normal`,fontVariationSettings:` normal`,WebkitTapHighlightColor:`transparent`},body:{margin:`0`,lineHeight:`inherit`},hr:{height:`0`,color:`inherit`,borderTopWidth:`1px`},"abbr:where([title])":{textDecoration:`underline dotted`},"h1, h2, h3, h4, h5, h6":{fontSize:`inherit`,fontWeight:`inherit`},a:{color:`inherit`,textDecoration:`inherit`},"b, strong":{fontWeight:`bolder`},"code, kbd, samp, pre":{fontFamily:`Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,fontFeatureSettings:` normal`,fontVariationSettings:` normal`,fontSize:`1em`},small:{fontSize:`80%`},"sub, sup":{fontSize:`75%`,lineHeight:`0`,position:`relative`,verticalAlign:`baseline`},sub:{bottom:`-0.25em`},sup:{top:`-0.5em`},table:{textIndent:`0`,borderColor:`inherit`,borderCollapse:`collapse`},"button, input, optgroup, select, textarea":{fontFamily:`inherit`,fontFeatureSettings:`inherit`,fontVariationSettings:`inherit`,fontSize:`100%`,fontWeight:`inherit`,lineHeight:`inherit`,letterSpacing:`inherit`,color:`inherit`,margin:`0`,padding:`0`},"button, select":{textTransform:`none`},"button, input:where([type='button']), input:where([type='reset']), input:where([type='submit'])":{WebkitAppearance:`button`,backgroundColor:`transparent`,backgroundImage:`none`},":-moz-focusring":{outline:`auto`},":-moz-ui-invalid":{boxShadow:`none`},progress:{verticalAlign:`baseline`},"::-webkit-inner-spin-button, ::-webkit-outer-spin-button":{height:`auto`},"[type='search']":{WebkitAppearance:`textfield`,outlineOffset:`-2px`},"::-webkit-search-decoration":{WebkitAppearance:`none`},"::-webkit-file-upload-button":{WebkitAppearance:`button`,font:`inherit`},summary:{display:`list-item`},"blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre":{margin:`0`},fieldset:{margin:`0`,padding:`0`},legend:{padding:`0`},"ol, ul, menu":{listStyle:`none`,margin:`0`,padding:`0`},dialog:{padding:`0`},textarea:{resize:`vertical`},"input::placeholder, textarea::placeholder":{opacity:`1`,color:`#cbd5e0`},'button, [role="button"]':{cursor:`pointer`},":disabled":{cursor:`default`},"img, svg, video, canvas, audio, iframe, embed, object":{display:`block`,verticalAlign:`middle`},"img, video":{maxWidth:`100%`,height:`auto`},'[hidden]:where(:not([hidden="until-found"]))':{display:`none`},"::backdrop":{"--tw-border-spacing-x":`0`,"--tw-border-spacing-y":`0`,"--tw-translate-x":`0`,"--tw-translate-y":`0`,"--tw-rotate":`0`,"--tw-skew-x":`0`,"--tw-skew-y":`0`,"--tw-scale-x":`1`,"--tw-scale-y":`1`,"--tw-pan-x":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pan-y":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pinch-zoom":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-scroll-snap-strictness":`proximity`,"--tw-gradient-from-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-via-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-to-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ordinal":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-slashed-zero":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-figure":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-spacing":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-fraction":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-shadow":`0 0 #0000`,"--tw-ring-shadow":`0 0 #0000`,"--tw-shadow":`0 0 #0000`,"--tw-shadow-colored":`0 0 #0000`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`0px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`rgb(66 153 225 / 0.5)`,"--tw-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-drop-shadow":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-opacity":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-size":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-layout":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-paint":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-style":`var(--tw-empty,/*!*/ /*!*/)`},"input:where([type='text']),input:where(:not([type])),input:where([type='email']),input:where([type='url']),input:where([type='password']),input:where([type='number']),input:where([type='date']),input:where([type='datetime-local']),input:where([type='month']),input:where([type='search']),input:where([type='tel']),input:where([type='time']),input:where([type='week']),select:where([multiple]),textarea,select":{appearance:`none`,backgroundColor:`#fff`,borderColor:`#a0aec0`,borderWidth:`1px`,borderRadius:`0px`,paddingTop:`0.5rem`,paddingRight:`0.75rem`,paddingBottom:`0.5rem`,paddingLeft:`0.75rem`,fontSize:`1rem`,lineHeight:`1.5rem`,"--tw-shadow":`0 0 #0000`},"input:where([type='text']):focus, input:where(:not([type])):focus, input:where([type='email']):focus, input:where([type='url']):focus, input:where([type='password']):focus, input:where([type='number']):focus, input:where([type='date']):focus, input:where([type='datetime-local']):focus, input:where([type='month']):focus, input:where([type='search']):focus, input:where([type='tel']):focus, input:where([type='time']):focus, input:where([type='week']):focus, select:where([multiple]):focus, textarea:focus, select:focus":{outline:`2px solid transparent`,outlineOffset:`2px`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`0px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`#3182ce`,"--tw-ring-offset-shadow":`var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,"--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:`var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,borderColor:`#3182ce`},"input::placeholder,textarea::placeholder":{color:`#a0aec0`,opacity:`1`},"::-webkit-datetime-edit-fields-wrapper":{padding:`0`},"::-webkit-date-and-time-value":{minHeight:`1.5em`,textAlign:`inherit`},"::-webkit-datetime-edit":{display:`inline-flex`},"::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field":{paddingTop:`0`,paddingBottom:`0`},select:{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a0aec0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,backgroundPosition:`right 0.5rem center`,backgroundRepeat:`no-repeat`,backgroundSize:`1.5em 1.5em`,paddingRight:`2.5rem`,printColorAdjust:`exact`},'select:where([multiple]),select:where([size]:not([size="1"]))':{backgroundImage:`initial`,backgroundPosition:`initial`,backgroundRepeat:`unset`,backgroundSize:`initial`,paddingRight:`0.75rem`,printColorAdjust:`unset`},"input:where([type='checkbox']),input:where([type='radio'])":{appearance:`none`,padding:`0`,printColorAdjust:`exact`,display:`inline-block`,verticalAlign:`middle`,backgroundOrigin:`border-box`,userSelect:`none`,flexShrink:`0`,height:`1rem`,width:`1rem`,color:`#3182ce`,backgroundColor:`#fff`,borderColor:`#a0aec0`,borderWidth:`1px`,"--tw-shadow":`0 0 #0000`},"input:where([type='checkbox'])":{borderRadius:`0px`},"input:where([type='radio'])":{borderRadius:`100%`},"input:where([type='checkbox']):focus,input:where([type='radio']):focus":{outline:`2px solid transparent`,outlineOffset:`2px`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`2px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`#3182ce`,"--tw-ring-offset-shadow":`var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,"--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:`var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`},"input:where([type='checkbox']):checked,input:where([type='radio']):checked":{borderColor:`transparent`,backgroundColor:`currentColor`,backgroundSize:`100% 100%`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`},"input:where([type='checkbox']):checked":{backgroundImage:`url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`},"@media (forced-colors: active)":{"input:where([type='checkbox']):checked":{appearance:`auto`},"input:where([type='radio']):checked":{appearance:`auto`},"input:where([type='checkbox']):indeterminate":{appearance:`auto`}},"input:where([type='radio']):checked":{backgroundImage:`url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`},"input:where([type='checkbox']):checked:hover,input:where([type='checkbox']):checked:focus,input:where([type='radio']):checked:hover,input:where([type='radio']):checked:focus":{borderColor:`transparent`,backgroundColor:`currentColor`},"input:where([type='checkbox']):indeterminate":{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")`,borderColor:`transparent`,backgroundColor:`currentColor`,backgroundSize:`100% 100%`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`},"input:where([type='checkbox']):indeterminate:hover,input:where([type='checkbox']):indeterminate:focus":{borderColor:`transparent`,backgroundColor:`currentColor`},"input:where([type='file'])":{background:`unset`,borderColor:`inherit`,borderWidth:`0`,borderRadius:`0`,padding:`0`,fontSize:`unset`,lineHeight:`inherit`},"input:where([type='file']):focus":{outline:`1px auto -webkit-focus-ring-color`}}}
  
  :root {
    --forge-primary: ${e=>e.theme.PRIMARY};
    --forge-offset: ${e=>e.theme.OFFSET};
    --forge-background: ${e=>e.theme.BACKGROUND};
    --forge-border: ${e=>e.theme.BORDER};
  }

  /* Base styling for the entire app */
  html {
    background-color: #00000080;
    }
  body {
    background-color: ${e=>w(e.theme.BACKGROUND,.5)};
    color: ${e=>e.theme.PRIMARY};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    color: ${e=>e.theme.PRIMARY};
  }

  /* Links */
  a {
    color: ${e=>e.theme.OFFSET};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${e=>w(e.theme.BACKGROUND,.3)};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>w(e.theme.OFFSET,.5)};
    border-radius: 5px;
    
    &:hover {
      background: ${e=>w(e.theme.OFFSET,.7)};
    }
  }
  
  /* Below animations are for modal created using React-Modal */
  .ReactModal__Overlay {
    transition: transform 300ms ease-in-out;
    transition-delay: 100ms;
    transform: scale(0);
  }
  .ReactModal__Overlay--after-open{
    transform: scale(1);
  }
  .ReactModal__Overlay--before-close{
    transform: scale(0);
  }

  .tippy-box[data-theme~='dynamic'] {
    font-style: italic;
    background: ${e=>e.theme.BACKGROUND};
    color: ${e=>e.theme.PRIMARY};
    border: 1px solid ${e=>e.theme.BORDER};
  }

  .tippy-box[data-theme~='dynamic'][data-placement^='top']>.tippy-arrow::before {
    border-top-color: ${e=>e.theme.BACKGROUND};
  }

  .tippy-box[data-theme~='dynamic'][data-placement^='bottom']>.tippy-arrow::before {
    border-bottom-color: ${e=>e.theme.BACKGROUND};
  }

  .tippy-box[data-theme~='dynamic'][data-placement^='left']>.tippy-arrow::before {
    border-left-color: ${e=>e.theme.BACKGROUND};
  }

  .tippy-box[data-theme~='dynamic'][data-placement^='right']>.tippy-arrow::before {
    border-right-color: ${e=>e.theme.BACKGROUND};
  }
`,qy=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e2232;
  color: #ffffff;
`,Jy=x.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: #9d99ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Yy=x.p`
  margin-top: 20px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;function Xy(){let{sceneReady:e,cacheReady:t,playerData:n,roomMetadata:r,sceneMetadata:i}=H(),{isInitialized:a}=Gy(),{theme:o}=zt(),{t:s}=Ct(),[c,l]=(0,V.useState)(`ForgeMain`),[u,d]=(0,V.useState)(!1),f=(0,V.useRef)(!1),p=String(n?.role||``).toUpperCase()===`GM`,m=r,h=n?.id,g=(m[ne(M.PARTY_HUD_OPEN,h)]??m[M.PARTY_HUD_OPEN])===!0,_=m[M.SHOW_PLAYER_VIEW]||!1,v=p||_,y=e&&t&&a;return(0,V.useEffect)(()=>{y&&(async()=>{await nt(),Ze()&&await T.broadcast.sendMessage(O.AUTHSYNCCHANNEL,{type:`BS_AUTH_STATE`,source:O.EXTENSIONID,snapshot:We()},{destination:`LOCAL`})})()},[y]),(0,V.useEffect)(()=>{if(!y)return;let e=T.broadcast.onMessage(O.AUTHSYNCCHANNEL,e=>{let t=e.data;if(!(!t||typeof t!=`object`||t.source===O.EXTENSIONID)){if(t.type===`BS_AUTH_REQUEST`){if(!Ze())return;T.broadcast.sendMessage(O.AUTHSYNCCHANNEL,{type:`BS_AUTH_STATE`,source:O.EXTENSIONID,snapshot:We()},{destination:`LOCAL`});return}t.type!==`BS_AUTH_STATE`||Ze()||!t.snapshot||ut(t.snapshot)}});return T.broadcast.sendMessage(O.AUTHSYNCCHANNEL,{type:`BS_AUTH_REQUEST`,source:O.EXTENSIONID},{destination:`LOCAL`}),()=>{e()}},[y]),(0,V.useEffect)(()=>{if(!y)return;let e=!0;return(async()=>{if(g&&!f.current){await rv(),e&&(f.current=!0);return}!g&&f.current&&(await iv(),e&&(f.current=!1))})(),()=>{e=!1}},[y,g]),(0,V.useEffect)(()=>{y&&!v&&c===`ForgeMain`&&l(`Party`)},[y,v,c]),(0,V.useEffect)(()=>{c!==`ForgeMain`&&T.action.setWidth(350)},[c]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Ky,{theme:o}),!e||!t||!a?(0,U.jsxs)(qy,{children:[(0,U.jsx)(Jy,{}),(0,U.jsx)(Yy,{children:s(e?t?a?`app.loadingFallback`:`app.initializingSystem`:`app.loadingCache`:`app.connectingScene`)})]}):(0,U.jsxs)(am,{children:[(0,U.jsx)(dy,{}),(0,U.jsx)(gy,{}),(0,U.jsx)(Ty,{}),(0,U.jsx)(My,{}),(0,U.jsx)(Py,{}),(0,U.jsx)(Wy,{}),(0,U.jsx)(om,{theme:o,$backgroundUrl:o.BACKGROUND_URL,children:(0,U.jsx)(su,{mode:`wait`,children:(()=>{switch(c){case`ForgeMain`:return v?(0,U.jsx)(tv,{},`main`):(0,U.jsx)(Ov,{},`party`);case`Settings`:return p?(0,U.jsx)(Zm,{},`settings`):(0,U.jsx)(tv,{},`main`);case`Party`:return(0,U.jsx)(Ov,{},`party`);case`System`:return p?(0,U.jsx)(qh,{},`system`):(0,U.jsx)(tv,{},`main`);case`ChatLog`:return(0,U.jsx)(rh,{},`chatlog`)}})()})}),(0,U.jsx)(Sm,{isOpen:u,currentPage:c,onToggle:()=>d(!u),onNavigate:e=>{if(!v&&e===`ForgeMain`){l(`Party`),d(!1);return}if(!p&&(e===`Settings`||e===`System`)){l(`ForgeMain`),d(!1);return}l(e),d(!1)},canAccessInitiativeList:v})]})]})}var Zy=Xy,Qy=class{static{this.ALPHANUMERICTEXTMATCH=/\s[\da-zA-Z]$/}};function $y(e){for(let t of tb)if(e.includes(t)){let n=tb[Math.floor(Math.random()*tb.length)];return e.replace(t,n)}return eb(e)}function eb(e){return`${tb[Math.floor(Math.random()*tb.length)]} ${e}`}const tb=`Grizzled.Wily.Stoic.Mellow.Pensive.Shrewd.Cautious.Hardy.Nimble.Tenacious.Gritty.Tolerant.Hardy.Adroit.Resilient.Slight.Stout.Durable.Subtle.Sober.Clever.Brave.Calm.Wise.Cunning.Alert.Swift.Agile.Loyal.Sturdy.Stable.Sneaky.Clever.Resourceful.Shady.Stalwart.Vigilant.Staunch.Fierce.Vigorous.Robust.Fearless.Dauntless.Resolute.Sagacious.Prudent.Judicious.Astute.Savvy.Sharp.Quick.Witty.Smart.Snippy.Crafty.Deft.Sly.Artful.Clever.Sneering.Tough.Rugged.Solid.Strong.Sturdy.Tough.Gritty.Rough.Hardened.Burly.Muscular.Brawny.Rowdy.Forceful.Snorting.Potent.Martial.Speckled.Mottled.Disheveled`.split(`.`);var nb=`com.battle-system.forge/view-unit`,rb=`com.battle-system.forge/view-unit-player`,ib=e=>e.trim().toLowerCase(),ab=e=>{if(typeof e!=`string`)return null;let t=e.trim();return t.length>0?t:null},ob=e=>{let t=e.trim();return t?Qy.ALPHANUMERICTEXTMATCH.test(t)?t.slice(0,-2):t:e},sb=e=>{let t=typeof e.text?.plainText==`string`?e.text.plainText.trim():``;if(t.length>0)return t;let n=e.metadata?.[j.UNIT_NAME],r=typeof n==`string`?n.trim():``;if(r.length>0)return r;let i=typeof e.name==`string`?e.name.trim():``;return i.length>0?i:typeof e.name==`string`?e.name:``},cb=async(e,t)=>{let n=await T.viewport.getHeight(),r=n>800?700:n-100;await T.popover.open({id:O.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(e)}`,height:r,width:350,anchorElementId:t,hidePaper:!0,disableClickAway:!0})},lb=async e=>{let t=Array.from(new Set(e.map(e=>e.trim()).filter(e=>e.length>0))),n=new Map;if(t.length===0)return n;let r=await _t(),i=new Map;for(let e of r){let t=ib(e.name);if(!t)continue;let n=i.get(t);n?n.push(e):i.set(t,[e])}for(let e of t){let t=ib(e),r=i.get(t)?.[0];!r||!r.metadata||n.set(t,fe(r.metadata))}try{let e=await it(t);for(let t of e){let e=ib(t.name);!e||n.has(e)||!t.metadata||n.set(e,fe(t.metadata))}let r=await ct(t);for(let e of r){let t=ib(e.name);!t||n.has(t)||!e.metadata||n.set(t,fe(e.metadata))}}catch(e){N.log(`Remote collection lookup failed, using local collection only`,e)}return n};function ub({children:e}){let t=H(e=>e.roomMetadata);H(e=>e.sceneMetadata);let n=H(e=>e.items),r=H(e=>e.playerData),i=H(e=>e.systemData),a=t,o=i?.attributes??[],s=ab(a[M.HP_CURRENT_BID]),c=ab(a[M.HP_MAX_BID]),l=oe(a,o),u=s||l.currentHpBid,d=c||l.maxHpBid,f=!!(u&&d),p=a[M.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?!0:a[M.SHOW_MODIFY_UNIT_CONTEXT_MENU]===!0,m=a[M.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===void 0?!0:a[M.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===!0;return(0,V.useEffect)(()=>{T.onReady(()=>{T.contextMenu.create({id:j.ON_LIST,icons:[{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,j.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,j.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,j.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,j.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}}],async onClick(e){if(N.info(`Add to Combat Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[j.ON_LIST]===!0))await T.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[j.ON_LIST],delete t.metadata[j.INITIATIVE]});else{let t=[],r=[],i=new Set(e.items.map(e=>e.id)),o=a[M.USE_DESCRIPTIVE_DUPLICATES]===!0,s=new Set(n.filter(e=>{if(i.has(e.id))return!1;let t=e.metadata[j.UNIT_NAME];return typeof t==`string`&&t.trim().length>0}).map(e=>ib(String(e.metadata[j.UNIT_NAME]))));for(let n of e.items){if(n.metadata[j.FABRICATED]===!0)continue;let e=ob(n.text?.plainText||n.name);t.push(e)}await T.action.setBadgeText(`Retrieving Data.. ⏱️`);let c=await lb(t);await T.action.setBadgeText(void 0);for(let t of e.items){let e={},n=t,i=sb(n);if(t.metadata[j.FABRICATED]!==!0){let r=ob(n.text?.plainText||t.name),a=c.get(ib(r));a&&Object.assign(e,a),(typeof e[j.UNIT_NAME]!=`string`||!String(e[j.UNIT_NAME]).trim())&&(e[j.UNIT_NAME]=i),e[j.FABRICATED]=!0}if(o){let r=typeof t.metadata[j.UNIT_NAME]==`string`?String(t.metadata[j.UNIT_NAME]).trim():``,a=ob(n.text?.plainText||t.name).trim(),o=String(e[j.UNIT_NAME]||r||i||a||t.name).trim(),c=ib(o);if(c){let e=0;for(;s.has(c)&&e<20;)o=$y(o),c=ib(o),e+=1;c&&s.add(c)}e[j.UNIT_NAME]=o}(typeof e[j.UNIT_NAME]!=`string`||!String(e[j.UNIT_NAME]).trim())&&(e[j.UNIT_NAME]=i),e[j.ON_LIST]=!0,e[j.INITIATIVE]=0,r.push({id:t.id,metadata:e})}await T.scene.items.updateItems(e.items,e=>{for(let t of e){let e=r.find(e=>e.id===t.id);if(e&&(Object.assign(t.metadata,e.metadata),a[M.SHOW_NAMES]===!0)){let n=t,r=typeof e.metadata[j.UNIT_NAME]==`string`&&String(e.metadata[j.UNIT_NAME]).trim().length>0?String(e.metadata[j.UNIT_NAME]).trim():sb(n);n.text&&(n.text.plainText=r)}}})}}}),T.contextMenu.create({id:j.IN_PARTY,icons:[{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,j.IN_PARTY],operator:`!=`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,j.IN_PARTY],operator:`!=`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,j.IN_PARTY],operator:`==`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,j.IN_PARTY],operator:`==`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){N.info(`Add to Party Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[j.IN_PARTY]===!0)?await T.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[j.IN_PARTY]}):await T.scene.items.updateItems(e.items,e=>{for(let t of e)t.metadata[j.IN_PARTY]=!0})}}),T.contextMenu.create({id:nb,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}}],async onClick(e,t){N.info(`View Unit Clicked: ${e.items[0].name}`);let r=e.items[0];if(!r)return;let i={};if(r.metadata[j.FABRICATED]!==!0){let e=r,t=sb(e),o=ob(e.text?.plainText||r.name);await T.action.setBadgeText(`Retrieving Data.. ⏱️`);let s=await lb([o]);await T.action.setBadgeText(void 0);let c=s.get(ib(o));c&&Object.assign(i,c),(typeof i[j.UNIT_NAME]!=`string`||!String(i[j.UNIT_NAME]).trim())&&(i[j.UNIT_NAME]=t),i[j.FABRICATED]=!0,a[M.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[j.UNIT_NAME]!=null&&e.id!==r.id).map(e=>e.metadata[j.UNIT_NAME]).includes(o)&&(i[j.UNIT_NAME]=$y(o)),await T.scene.items.updateItems([r],e=>{let t=e[0];if(Object.assign(t.metadata,i),a[M.SHOW_NAMES]===!0){let e=t,n=typeof i[j.UNIT_NAME]==`string`&&String(i[j.UNIT_NAME]).trim().length>0?String(i[j.UNIT_NAME]).trim():sb(e);e.text&&(e.text.plainText=n)}})}await cb(r.id,t)}}),m?T.contextMenu.create({id:rb,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e,t){N.info(`View Unit Clicked: ${e.items[0].name}`);let r=e.items[0];if(!r)return;let i={};if(r.metadata[j.FABRICATED]!==!0){let e=r,t=sb(e),o=ob(e.text?.plainText||r.name);await T.action.setBadgeText(`Retrieving Data.. ⏱️`);let s=await lb([o]);await T.action.setBadgeText(void 0);let c=s.get(ib(o));c&&Object.assign(i,c),(typeof i[j.UNIT_NAME]!=`string`||!String(i[j.UNIT_NAME]).trim())&&(i[j.UNIT_NAME]=t),i[j.FABRICATED]=!0,a[M.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[j.UNIT_NAME]!=null&&e.id!==r.id).map(e=>e.metadata[j.UNIT_NAME]).includes(o)&&(i[j.UNIT_NAME]=$y(o)),await T.scene.items.updateItems([r],e=>{let t=e[0];if(Object.assign(t.metadata,i),a[M.SHOW_NAMES]===!0){let e=t,n=typeof i[j.UNIT_NAME]==`string`&&String(i[j.UNIT_NAME]).trim().length>0?String(i[j.UNIT_NAME]).trim():sb(e);e.text&&(e.text.plainText=n)}})}await cb(r.id,t)}}):T.contextMenu.remove(rb).catch(()=>{}),f&&p?T.contextMenu.create({id:j.MODIFY_UNIT,icons:[{icon:`/icon.svg`,label:`Adjust HP`,filter:{some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Adjust HP`,filter:{every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e,t){N.info(`Adjust HP Clicked: ${e.items[0].name}`),await T.popover.open({id:ee.CONTEXT_MENU,url:`/pages/forgecontext.html`,height:50,width:180,anchorElementId:t,hidePaper:!0})},embed:{url:`/pages/forgecontext.html?contextmenu=true`,height:70}}):T.contextMenu.remove(j.MODIFY_UNIT).catch(()=>{})})},[a,f,p,m]),(0,U.jsx)(U.Fragment,{children:e})}At.createRoot(document.getElementById(`root`)).render((0,U.jsx)(V.StrictMode,{children:(0,U.jsx)(D,{children:(0,U.jsx)(It,{children:(0,U.jsx)(ub,{children:(0,U.jsx)(Rt,{children:(0,U.jsx)(Zy,{})})})})})}));