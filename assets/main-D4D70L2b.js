import{A as e,C as t,D as n,E as r,F as i,L as a,M as o,N as s,O as c,R as l,S as u,T as d,_ as f,b as p,c as m,d as h,f as g,g as _,h as v,j as y,k as b,l as x,m as S,o as C,p as w,s as T,t as E,u as D,v as ee,w as te,x as ne,y as O}from"./defaultgamesystem-CWetXqo_.js";import{$ as re,A as k,B as ie,C as ae,Ct as oe,D as se,Dt as A,E as j,Et as ce,F as le,G as ue,H as de,I as fe,J as pe,K as me,L as he,M as ge,N as _e,O as ve,Ot as M,P as ye,Q as be,R as xe,S as Se,St as Ce,Tt as we,U as Te,V as Ee,W as De,X as Oe,Y as ke,Z as Ae,_ as je,_t as Me,at as Ne,b as Pe,bt as Fe,c as Ie,ct as Le,d as Re,dt as ze,et as Be,f as Ve,ft as He,g as Ue,gt as We,h as Ge,ht as Ke,it as qe,j as Je,k as Ye,kt as Xe,l as Ze,lt as Qe,m as N,mt as P,n as F,nt as $e,ot as I,pt as et,q as tt,r as nt,rt,s as it,st as at,tt as ot,u as st,ut as ct,v as lt,vt as ut,w as dt,wt as ft,xt as pt,y as mt,yt as ht,z as gt}from"./unitCollectionRemote-lP9nkzZh.js";import{t as _t}from"./Translation-DLw_JKyZ.js";import{i as vt,o as yt,r as bt,s as L}from"./hpAttributeMapping-hMS1vsob.js";var xt=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},St=(e=>e?xt(e):xt),R=l(i(),1),Ct=e=>e;function wt(e,t=Ct){let n=R.useSyncExternalStore(e.subscribe,R.useCallback(()=>t(e.getState()),[e,t]),R.useCallback(()=>t(e.getInitialState()),[e,t]));return R.useDebugValue(n),n}var Tt=e=>{let t=St(e),n=e=>wt(t,e);return Object.assign(n,t),n},Et=(e=>e?Tt(e):Tt),Dt=l(s(),1);const z=Et(e=>({cacheReady:!1,setCacheReady:t=>e({cacheReady:t}),sceneReady:!1,setSceneReady:t=>e({sceneReady:t}),items:[],setItems:t=>e({items:t}),localItems:[],setLocalItems:t=>e({localItems:t}),sceneMetadata:{},setSceneMetadata:t=>e({sceneMetadata:{...t}}),roomMetadata:{},setRoomMetadata:t=>e({roomMetadata:{...t}}),gridDpi:150,setGridDpi:t=>e({gridDpi:t}),playerData:void 0,setPlayerData:t=>e({playerData:t}),partyData:[],setPartyData:t=>e({partyData:t}),systemData:null,setSystemData:t=>e({systemData:t})}));var Ot=0;const kt=Et(e=>({messages:[],initialized:!1,addMessage:t=>{let n=new Date,r=n.getHours(),i=n.getMinutes(),a=r>=12?`PM`:`AM`,o=`${r%12||12}:${i<10?`0${i}`:i} ${a}`;e(e=>({messages:[...e.messages,{id:Ot++,text:t,timestamp:o}]}))},setInitialized:t=>e({initialized:t})})),At=()=>{kt.getState().initialized||(c.broadcast.onMessage(`${t.EXTENSIONID}/chatlog`,e=>{let t=kt.getState().addMessage;typeof e.data==`string`?t(e.data):typeof e.data==`object`&&e.data.message&&t(e.data.message)}),kt.getState().setInitialized(!0))};var B=d(),jt=`${t.EXTENSIONID}/chatlog`,Mt=`${t.EXTENSIONID}/roll-notification`;function Nt({children:e}){let t=z(e=>e.setItems),n=z(e=>e.setLocalItems),r=z(e=>e.setSceneMetadata),i=z(e=>e.setRoomMetadata),a=z(e=>e.setGridDpi),o=z(e=>e.setPlayerData),s=z(e=>e.setPartyData),l=z(e=>e.setSceneReady),u=z(e=>e.setCacheReady);return(0,R.useEffect)(()=>{let e=(e,t)=>{let n=t[O.ENABLE_CONSOLE_LOG];typeof n==`boolean`&&A.setEnabled(n)},d=e=>{Xe(e);let{sceneMetadata:t,roomMetadata:n}=z.getState(),r=n,i=r[O.ENABLE_OBR_NOTIFICATION];if(r[O.SHOW_NOTIFICATION_TO_ALL]===!0){c.broadcast.sendMessage(jt,{message:e},{destination:`ALL`}),i===!0&&c.broadcast.sendMessage(Mt,{message:e},{destination:`ALL`});return}kt.getState().addMessage(e),i===!0&&c.notification.show(e,`SUCCESS`)},f=({explicitMessage:e,tokenName:t,actionName:n,total:r})=>{if(typeof e==`string`&&e.trim().length>0)return e;let i=t||`Unknown`,a=n||`Action`;return typeof r==`number`&&Number.isFinite(r)?`${i} rolled ${a} for ${r}!`:`${i} rolled ${a}.`};At();let p=c.broadcast.onMessage(Mt,e=>{let t=e.data,n=typeof t?.message==`string`?t.message:null;n&&c.notification.show(n,`SUCCESS`)});pt(e=>{let t=Fe(e.rollHtml);d(f({tokenName:e.senderName,actionName:e.actionName,total:t}))}),oe(e=>{d(f({explicitMessage:e.message}))}),Ce(e=>{d(f({tokenName:e.playerName,actionName:e.result.diceNotation,total:e.result.totalValue}))}),ft(e=>{let t=e.output.trim();d(t.length>0?`${e.senderName} rolled ${e.actionName} for ${e.total}. ${t}`:f({tokenName:e.senderName,actionName:e.actionName,total:e.total}))});let m,h,g,_,v,y,b,x,S=async()=>{let[l,d,f,p,m,S,C,w,T,E,D,ee,te]=await Promise.all([c.scene.items.getItems(),c.scene.local.getItems(),c.scene.getMetadata(),c.room.getMetadata(),c.scene.grid.getDpi(),c.party.getPlayers(),c.player.getSelection(),c.player.getColor(),c.player.getRole(),c.player.getConnectionId(),c.player.getId(),c.player.getMetadata(),c.player.getName()]);t(l),n(d),r(f),i(p),e(f,p),a(m),o({id:D,name:te,connectionId:E,role:T,color:w,selection:C,metadata:ee}),s(S),h=c.scene.items.onChange(t),g=c.scene.local.onChange(n),y=c.scene.grid.onChange(e=>a(e.dpi)),b=c.player.onChange(o),x=c.party.onChange(s),_=c.scene.onMetadataChange(t=>{r(t),e(t,z.getState().roomMetadata)}),v=c.room.onMetadataChange(t=>{i(t),e(z.getState().sceneMetadata,t)}),u(!0),A.log(`CacheManager: Cache is ready`)};return c.onReady(async()=>{let e=await c.scene.isReady();l(e),e&&(A.log(`Scene is ready on initial load, syncing cache...`),await S()),m=c.scene.onReadyChange(async e=>{l(e),e?(A.log(`Scene became ready, syncing cache...`),await S()):(A.log(`Scene is no longer ready, clearing cache...`),u(!1))})}),()=>{m?.(),h?.(),g?.(),_?.(),v?.(),y?.(),b?.(),x?.(),p?.()}},[l,u,t,n,r,i,a,o,s]),(0,B.jsx)(B.Fragment,{children:e})}var Pt=(0,R.createContext)(void 0);const Ft=({children:e})=>{let[t,n]=(0,R.useState)(v),r=(0,R.useCallback)((e,t,r,i,a)=>{n(n=>n.PRIMARY===e&&n.OFFSET===t&&n.BACKGROUND===r&&n.BORDER===i&&n.BACKGROUND_URL===(a||void 0)?n:_(e,t,r,i,a))},[]);return(0,B.jsx)(Pt.Provider,{value:{theme:t,setTheme:n,updateThemeFromSystem:r},children:e})},It=()=>{let e=(0,R.useContext)(Pt);if(!e)throw Error(`useForgeTheme must be used within a ThemeProvider`);return e};var Lt=(0,R.createContext)({});function Rt(e){let t=(0,R.useRef)(null);return t.current===null&&(t.current=e()),t.current}var zt=typeof window<`u`,Bt=zt?R.useLayoutEffect:R.useEffect,Vt=(0,R.createContext)(null);function Ht(e,t){e.indexOf(t)===-1&&e.push(t)}function Ut(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Wt=(e,t,n)=>n>t?t:n<e?e:n,Gt={},Kt=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function qt(e){return typeof e==`object`&&!!e}var Jt=e=>/^0[^.\s]+$/u.test(e);function Yt(e){let t;return()=>(t===void 0&&(t=e()),t)}var Xt=e=>e,Zt=(e,t)=>n=>t(e(n)),Qt=(...e)=>e.reduce(Zt),$t=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},en=class{constructor(){this.subscriptions=[]}add(e){return Ht(this.subscriptions,e),()=>Ut(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},tn=e=>e*1e3,nn=e=>e/1e3;function rn(e,t){return t?e*(1e3/t):0}var an=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,on=1e-7,sn=12;function cn(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=an(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>on&&++s<sn);return o}function ln(e,t,n,r){if(e===t&&n===r)return Xt;let i=t=>cn(t,0,1,e,n);return e=>e===0||e===1?e:an(i(e),t,r)}var un=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,dn=e=>t=>1-e(1-t),fn=ln(.33,1.53,.69,.99),pn=dn(fn),mn=un(pn),V=e=>(e*=2)<1?.5*pn(e):.5*(2-2**(-10*(e-1))),hn=e=>1-Math.sin(Math.acos(e)),gn=dn(hn),_n=un(hn),vn=ln(.42,0,1,1),yn=ln(0,0,.58,1),bn=ln(.42,0,.58,1),xn=e=>Array.isArray(e)&&typeof e[0]!=`number`,Sn=e=>Array.isArray(e)&&typeof e[0]==`number`,Cn={linear:Xt,easeIn:vn,easeInOut:bn,easeOut:yn,circIn:hn,circInOut:_n,circOut:gn,backIn:pn,backInOut:mn,backOut:fn,anticipate:V},wn=e=>typeof e==`string`,Tn=e=>{if(Sn(e)){e.length;let[t,n,r,i]=e;return ln(t,n,r,i)}else if(wn(e))return Cn[e],`${e}`,Cn[e];return e},En=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],Dn={value:null,addProjectionMetrics:null};function On(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.has(e)||s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),t&&Dn.value&&Dn.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var kn=40;function An(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=En.reduce((e,n)=>(e[n]=On(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Gt.useManualTiming?i.timestamp:performance.now();n=!1,Gt.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,kn),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:En.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<En.length;t++)o[En[t]].cancel(e)},state:i,steps:o}}var{schedule:H,cancel:jn,state:U,steps:Mn}=An(typeof requestAnimationFrame<`u`?requestAnimationFrame:Xt,!0),Nn;function Pn(){Nn=void 0}var Fn={now:()=>(Nn===void 0&&Fn.set(U.isProcessing||Gt.useManualTiming?U.timestamp:performance.now()),Nn),set:e=>{Nn=e,queueMicrotask(Pn)}},In={layout:0,mainThread:0,waapi:0},Ln=e=>t=>typeof t==`string`&&t.startsWith(e),Rn=Ln(`--`),zn=Ln(`var(--`),Bn=e=>zn(e)?Vn.test(e.split(`/*`)[0].trim()):!1,Vn=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Hn(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Un={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Wn={...Un,transform:e=>Wt(0,1,e)},Gn={...Un,default:1},Kn=e=>Math.round(e*1e5)/1e5,qn=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Jn(e){return e==null}var Yn=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Xn=(e,t)=>n=>!!(typeof n==`string`&&Yn.test(n)&&n.startsWith(e)||t&&!Jn(n)&&Object.prototype.hasOwnProperty.call(n,t)),Zn=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(qn);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Qn=e=>Wt(0,255,e),$n={...Un,transform:e=>Math.round(Qn(e))},er={test:Xn(`rgb`,`red`),parse:Zn(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+$n.transform(e)+`, `+$n.transform(t)+`, `+$n.transform(n)+`, `+Kn(Wn.transform(r))+`)`};function tr(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var nr={test:Xn(`#`),parse:tr,transform:er.transform},rr=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ir=rr(`deg`),ar=rr(`%`),W=rr(`px`),or=rr(`vh`),sr=rr(`vw`),cr=(()=>({...ar,parse:e=>ar.parse(e)/100,transform:e=>ar.transform(e*100)}))(),lr={test:Xn(`hsl`,`hue`),parse:Zn(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+ar.transform(Kn(t))+`, `+ar.transform(Kn(n))+`, `+Kn(Wn.transform(r))+`)`},G={test:e=>er.test(e)||nr.test(e)||lr.test(e),parse:e=>er.test(e)?er.parse(e):lr.test(e)?lr.parse(e):nr.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?er.transform(e):lr.transform(e),getAnimatableNone:e=>{let t=G.parse(e);return t.alpha=0,G.transform(t)}},ur=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function dr(e){return isNaN(e)&&typeof e==`string`&&(e.match(qn)?.length||0)+(e.match(ur)?.length||0)>0}var fr=`number`,pr=`color`,mr=`var`,hr=`var(`,gr="${}",_r=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function vr(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(_r,e=>(G.test(e)?(r.color.push(a),i.push(pr),n.push(G.parse(e))):e.startsWith(hr)?(r.var.push(a),i.push(mr),n.push(e)):(r.number.push(a),i.push(fr),n.push(parseFloat(e))),++a,gr)).split(gr),indexes:r,types:i}}function yr(e){return vr(e).values}function br(e){let{split:t,types:n}=vr(e),r=t.length;return e=>{let i=``;for(let a=0;a<r;a++)if(i+=t[a],e[a]!==void 0){let t=n[a];t===fr?i+=Kn(e[a]):t===pr?i+=G.transform(e[a]):i+=e[a]}return i}}var xr=e=>typeof e==`number`?0:G.test(e)?G.getAnimatableNone(e):e;function Sr(e){let t=yr(e);return br(e)(t.map(xr))}var Cr={test:dr,parse:yr,createTransformer:br,getAnimatableNone:Sr};function wr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Tr({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=wr(s,r,e+1/3),a=wr(s,r,e),o=wr(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Er(e,t){return n=>n>0?t:e}var K=(e,t,n)=>e+(t-e)*n,Dr=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Or=[nr,er,lr],kr=e=>Or.find(t=>t.test(e));function Ar(e){let t=kr(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===lr&&(n=Tr(n)),n}var jr=(e,t)=>{let n=Ar(e),r=Ar(t);if(!n||!r)return Er(e,t);let i={...n};return e=>(i.red=Dr(n.red,r.red,e),i.green=Dr(n.green,r.green,e),i.blue=Dr(n.blue,r.blue,e),i.alpha=K(n.alpha,r.alpha,e),er.transform(i))},Mr=new Set([`none`,`hidden`]);function Nr(e,t){return Mr.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Pr(e,t){return n=>K(e,t,n)}function Fr(e){return typeof e==`number`?Pr:typeof e==`string`?Bn(e)?Er:G.test(e)?jr:zr:Array.isArray(e)?Ir:typeof e==`object`?G.test(e)?jr:Lr:Er}function Ir(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Fr(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Lr(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Fr(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Rr(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var zr=(e,t)=>{let n=Cr.createTransformer(t),r=vr(e),i=vr(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Mr.has(e)&&!i.values.length||Mr.has(t)&&!r.values.length?Nr(e,t):Qt(Ir(Rr(r,i),i.values),n):(`${e}${t}`,Er(e,t))};function Br(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?K(e,t,n):Fr(e)(e,t)}var Vr=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>H.update(t,e),stop:()=>jn(t),now:()=>U.isProcessing?U.timestamp:Fn.now()}},Hr=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Ur=2e4;function Wr(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Gr(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Wr(r),Ur);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:nn(i)}}var Kr=5;function qr(e,t,n){let r=Math.max(t-Kr,0);return rn(n-e(r),t-r)}var q={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Jr=.001;function Yr({duration:e=q.duration,bounce:t=q.bounce,velocity:n=q.velocity,mass:r=q.mass}){let i,a;q.maxDuration;let o=1-t;o=Wt(q.minDamping,q.maxDamping,o),e=Wt(q.minDuration,q.maxDuration,nn(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Qr(t,o),c=Math.exp(-i);return Jr-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Qr(t**2,o);return(-i(t)+Jr>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Jr+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Zr(i,a,s);if(e=tn(e),isNaN(c))return{stiffness:q.stiffness,damping:q.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Xr=12;function Zr(e,t,n){let r=n;for(let n=1;n<Xr;n++)r-=e(r)/t(r);return r}function Qr(e,t){return e*Math.sqrt(1-t*t)}var $r=[`duration`,`bounce`],ei=[`stiffness`,`damping`,`mass`];function ti(e,t){return t.some(t=>e[t]!==void 0)}function ni(e){let t={velocity:q.velocity,stiffness:q.stiffness,damping:q.damping,mass:q.mass,isResolvedFromDuration:!1,...e};if(!ti(e,ei)&&ti(e,$r))if(e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Wt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:q.mass,stiffness:i,damping:a}}else{let n=Yr(e);t={...t,...n,mass:q.mass},t.isResolvedFromDuration=!0}return t}function ri(e=q.visualDuration,t=q.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=ni({...n,velocity:-nn(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=nn(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?q.restSpeed.granular:q.restSpeed.default,i||=v?q.restDelta.granular:q.restDelta.default;let y;if(h<1){let e=Qr(_,h);y=t=>o-Math.exp(-h*_*t)*((m+h*_*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}else if(h===1)y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}let b={calculatedDuration:p&&d||null,next:e=>{let t=y(e);if(p)s.done=e>=d;else{let n=e===0?m:0;h<1&&(n=e===0?tn(m):qr(y,e,t));let a=Math.abs(n)<=r,c=Math.abs(o-t)<=i;s.done=a&&c}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Wr(b),Ur),t=Hr(t=>b.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return b}ri.applyToOptions=e=>{let t=Gr(e,100,ri);return e.ease=t.ease,e.duration=tn(t.duration),e.type=`keyframes`,e};function ii({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=ri({keyframes:[f.value,m(f.value)],velocity:qr(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function ai(e,t,n){let r=[],i=n||Gt.mix||Br,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Qt(Array.isArray(t)?t[n]||Xt:t,a)),r.push(a)}return r}function oi(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=ai(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=$t(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Wt(e[0],e[a-1],t)):l}function si(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=$t(0,t,r);e.push(K(n,1,i))}}function ci(e){let t=[0];return si(t,e.length-1),t}function li(e,t){return e.map(e=>e*t)}function ui(e,t){return e.map(()=>t||bn).splice(0,e.length-1)}function di({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=xn(r)?r.map(Tn):Tn(r),a={done:!1,value:t[0]},o=oi(li(n&&n.length===t.length?n:ci(t),e),t,{ease:Array.isArray(i)?i:ui(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var fi=e=>e!==null;function pi(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(fi),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var mi={decay:ii,inertia:ii,tween:di,keyframes:di,spring:ri};function hi(e){typeof e.type==`string`&&(e.type=mi[e.type])}var gi=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},_i=e=>e/100,vi=class extends gi{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Fn.now()&&this.tick(Fn.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},In.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;hi(e);let{type:t=di,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||di;s!==di&&typeof o[0]!=`number`&&(this.mixKeyframes=Qt(_i,Br(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Wr(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Wt(0,1,n)*o}let b=_?{done:!1,value:l[0]}:y.next(v);i&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==ii&&(b.value=pi(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return nn(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+nn(e)}get time(){return nn(this.currentTime)}set time(e){e=tn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Fn.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=nn(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Vr,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Fn.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,In.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function yi(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var bi=e=>e*180/Math.PI,xi=e=>Ci(bi(Math.atan2(e[1],e[0]))),Si={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:xi,rotateZ:xi,skewX:e=>bi(Math.atan(e[1])),skewY:e=>bi(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Ci=e=>(e%=360,e<0&&(e+=360),e),wi=xi,Ti=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ei=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Di={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ti,scaleY:Ei,scale:e=>(Ti(e)+Ei(e))/2,rotateX:e=>Ci(bi(Math.atan2(e[6],e[5]))),rotateY:e=>Ci(bi(Math.atan2(-e[2],e[0]))),rotateZ:wi,rotate:wi,skewX:e=>bi(Math.atan(e[4])),skewY:e=>bi(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Oi(e){return e.includes(`scale`)?1:0}function ki(e,t){if(!e||e===`none`)return Oi(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Di,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Si,i=t}if(!i)return Oi(t);let a=r[t],o=i[1].split(`,`).map(ji);return typeof a==`function`?a(o):o[a]}var Ai=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return ki(n,t)};function ji(e){return parseFloat(e.trim())}var Mi=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Ni=(()=>new Set(Mi))(),Pi=e=>e===Un||e===W,Fi=new Set([`x`,`y`,`z`]),Ii=Mi.filter(e=>!Fi.has(e));function Li(e){let t=[];return Ii.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var Ri={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>ki(t,`x`),y:(e,{transform:t})=>ki(t,`y`)};Ri.translateX=Ri.x,Ri.translateY=Ri.y;var zi=new Set,Bi=!1,Vi=!1,Hi=!1;function Ui(){if(Vi){let e=Array.from(zi).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Li(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Vi=!1,Bi=!1,zi.forEach(e=>e.complete(Hi)),zi.clear()}function Wi(){zi.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Vi=!0)})}function Gi(){Hi=!0,Wi(),Ui(),Hi=!1}var Ki=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(zi.add(this),Bi||(Bi=!0,H.read(Wi),H.resolveKeyframes(Ui))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}yi(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),zi.delete(this)}cancel(){this.state===`scheduled`&&(zi.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},qi=e=>e.startsWith(`--`);function Ji(e,t,n){qi(t)?e.style.setProperty(t,n):e.style[t]=n}var Yi=Yt(()=>window.ScrollTimeline!==void 0),Xi={};function Zi(e,t){let n=Yt(e);return()=>Xi[t]??n()}var Qi=Zi(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),$i=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,ea={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:$i([0,.65,.55,1]),circOut:$i([.55,0,1,.45]),backIn:$i([.31,.01,.66,-.59]),backOut:$i([.33,1.53,.69,.99])};function ta(e,t){if(e)return typeof e==`function`?Qi()?Hr(e,t):`ease-out`:Sn(e)?$i(e):Array.isArray(e)?e.map(e=>ta(e,t)||ea.easeOut):ea[e]}function na(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=ta(s,i);Array.isArray(d)&&(u.easing=d),Dn.value&&In.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return Dn.value&&p.finished.finally(()=>{In.waapi--}),p}function ra(e){return typeof e==`function`&&`applyToOptions`in e}function ia({type:e,...t}){return ra(e)&&Qi()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var aa=class extends gi{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=ia(e);this.animation=na(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=pi(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):Ji(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return nn(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+nn(e)}get time(){return nn(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=tn(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Yi()?(this.animation.timeline=e,Xt):t(this)}},oa={anticipate:V,backInOut:mn,circInOut:_n};function sa(e){return e in oa}function ca(e){typeof e.ease==`string`&&sa(e.ease)&&(e.ease=oa[e.ease])}var la=10,ua=class extends aa{constructor(e){ca(e),hi(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new vi({...a,autoplay:!1}),s=Math.max(la,Fn.now()-this.startTime),c=Wt(0,la,s-la);t.setWithVelocity(o.sample(Math.max(0,s-c)).value,o.sample(s).value,c),o.stop()}},da=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(Cr.test(e)||e===`0`)&&!e.startsWith(`url(`));function fa(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function pa(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=da(i,t),s=da(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:fa(e)||(n===`spring`||ra(n))&&r}function ma(e){e.duration=0,e.type=`keyframes`}var ha=new Set([`opacity`,`clipPath`,`filter`,`transform`]),ga=Yt(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function _a(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:s,transformTemplate:c}=t.owner.getProps();return ga()&&n&&ha.has(n)&&(n!==`transform`||!c)&&!s&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var va=40,ya=class extends gi{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Fn.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||Ki)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Fn.now(),pa(e,i,a,o)||((Gt.instantAnimations||!s)&&l?.(pi(e,n,t)),e[0]=e[e.length-1],ma(n),n.repeat=0);let u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>va?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!c&&_a(u),f=u.motionValue?.owner?.current,p=d?new ua({...u,element:f}):new vi(u);p.finished.then(()=>{this.notifyFinished()}).catch(Xt),this.pendingTimeline&&=(this.stopTimeline=p.attachTimeline(this.pendingTimeline),void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Gi()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function ba(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var xa=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Sa(e){let t=xa.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Ca(e,t,n=1){`${e}`;let[r,i]=Sa(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Kt(e)?parseFloat(e):e}return Bn(i)?Ca(i,t,n+1):i}var wa={type:`spring`,stiffness:500,damping:25,restSpeed:10},Ta=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Ea={type:`keyframes`,duration:.8},Da={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Oa=(e,{keyframes:t})=>t.length>2?Ea:Ni.has(e)?e.startsWith(`scale`)?Ta(t[1]):wa:Da,ka=e=>e!==null;function Aa(e,{repeat:t,repeatType:n=`loop`},r){let i=e.filter(ka),a=t&&n!==`loop`&&t%2==1?0:i.length-1;return!a||r===void 0?i[a]:r}function ja(e,t){return e?.[t]??e?.default??e}function Ma({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:l,...u}){return!!Object.keys(u).length}var Na=(e,t,n,r={},i,a)=>o=>{let s=ja(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=tn(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Ma(s)||Object.assign(u,Oa(e,u)),u.duration&&=tn(u.duration),u.repeatDelay&&=tn(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(ma(u),u.delay===0&&(d=!0)),(Gt.instantAnimations||Gt.skipAnimations)&&(d=!0,ma(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Aa(u.keyframes,s);if(e!==void 0){H.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new vi(u):new ya(u)};function Pa(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Fa(e,t,n,r){if(typeof t==`function`){let[i,a]=Pa(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Pa(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Ia(e,t,n){let r=e.getProps();return Fa(r,t,n===void 0?r.custom:n,e)}var La=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Mi]),Ra=30,za=e=>!isNaN(parseFloat(e)),Ba={current:void 0},Va=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Fn.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Fn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=za(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new en);let n=this.events[e].add(t);return e===`change`?()=>{n(),H.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ba.current&&Ba.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Fn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ra)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Ra);return rn(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Ha(e,t){return new Va(e,t)}var Ua=e=>Array.isArray(e);function Wa(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ha(n))}function Ga(e){return Ua(e)?e[e.length-1]||0:e}function Ka(e,t){let{transitionEnd:n={},transition:r={},...i}=Ia(e,t)||{};for(let t in i={...i,...n},i)Wa(e,t,Ga(i[t]))}var qa=e=>!!(e&&e.getVelocity);function Ja(e){return!!(qa(e)&&e.add)}function Ya(e,t){let n=e.getValue(`willChange`);if(Ja(n))return n.add(t);if(!n&&Gt.WillChange){let n=new Gt.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Xa(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Za=`data-`+Xa(`framerAppearId`);function Qa(e){return e.props[Za]}function $a({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function eo(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);let c=[],l=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||l&&$a(l,t))continue;let o={delay:n,...ja(a||{},t)},u=r.get();if(u!==void 0&&!r.isAnimating&&!Array.isArray(i)&&i===u&&!o.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){let n=Qa(e);if(n){let e=window.MotionHandoffAnimation(n,t,H);e!==null&&(o.startTime=e,d=!0)}}Ya(e,t),r.start(Na(t,r,i,e.shouldReduceMotion&&La.has(t)?{type:!1}:o,e,d));let f=r.animation;f&&c.push(f)}return o&&Promise.all(c).then(()=>{H.update(()=>{o&&Ka(e,o)})}),c}function to(e,t,n={}){let r=Ia(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(eo(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return no(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function no(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(to(c,t,{...o,delay:n+(typeof r==`function`?0:r)+ba(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function ro(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>to(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=to(e,t,n);else{let i=typeof t==`function`?Ia(e,t,n.custom):t;r=Promise.all(eo(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var io={test:e=>e===`auto`,parse:e=>e},ao=e=>t=>t.test(e),oo=[Un,W,ar,ir,sr,or,io],so=e=>oo.find(ao(e));function co(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||Jt(e)}var lo=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function uo(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(qn)||[];if(!r)return e;let i=n.replace(r,``),a=lo.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var fo=/\b([a-z-]*)\(.*?\)/gu,po={...Cr,getAnimatableNone:e=>{let t=e.match(fo);return t?t.map(uo).join(` `):e}},mo={...Un,transform:Math.round},ho={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,inset:W,insetBlock:W,insetBlockStart:W,insetBlockEnd:W,insetInline:W,insetInlineStart:W,insetInlineEnd:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,paddingBlock:W,paddingBlockStart:W,paddingBlockEnd:W,paddingInline:W,paddingInlineStart:W,paddingInlineEnd:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,marginBlock:W,marginBlockStart:W,marginBlockEnd:W,marginInline:W,marginInlineStart:W,marginInlineEnd:W,fontSize:W,backgroundPositionX:W,backgroundPositionY:W,rotate:ir,rotateX:ir,rotateY:ir,rotateZ:ir,scale:Gn,scaleX:Gn,scaleY:Gn,scaleZ:Gn,skew:ir,skewX:ir,skewY:ir,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:Wn,originX:cr,originY:cr,originZ:W,zIndex:mo,fillOpacity:Wn,strokeOpacity:Wn,numOctaves:mo},go={...ho,color:G,backgroundColor:G,outlineColor:G,fill:G,stroke:G,borderColor:G,borderTopColor:G,borderRightColor:G,borderBottomColor:G,borderLeftColor:G,filter:po,WebkitFilter:po},_o=e=>go[e];function vo(e,t){let n=_o(e);return n!==po&&(n=Cr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var yo=new Set([`auto`,`none`,`0`]);function bo(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!yo.has(t)&&vr(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=vo(n,i)}var xo=class extends Ki{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Bn(r))){let i=Ca(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!La.has(n)||e.length!==2)return;let[r,i]=e,a=so(r),o=so(i);if(Hn(r)!==Hn(i)&&Ri[n]){this.needsMeasurement=!0;return}if(a!==o)if(Pi(a)&&Pi(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Ri[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||co(e[t]))&&n.push(t);n.length&&bo(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ri[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Ri[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function So(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var Co=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function wo(e){return qt(e)&&`offsetHeight`in e}var{schedule:To,cancel:Eo}=An(queueMicrotask,!1),Do={x:!1,y:!1};function Oo(){return Do.x||Do.y}function ko(e){return e===`x`||e===`y`?Do[e]?null:(Do[e]=!0,()=>{Do[e]=!1}):Do.x||Do.y?null:(Do.x=Do.y=!0,()=>{Do.x=Do.y=!1})}function Ao(e,t){let n=So(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function jo(e){return!(e.pointerType===`touch`||Oo())}function Mo(e,t,n={}){let[r,i,a]=Ao(e,n),o=e=>{if(!jo(e))return;let{target:n}=e,r=t(n,e);if(typeof r!=`function`||!n)return;let a=e=>{jo(e)&&(r(e),n.removeEventListener(`pointerleave`,a))};n.addEventListener(`pointerleave`,a,i)};return r.forEach(e=>{e.addEventListener(`pointerenter`,o,i)}),a}var No=(e,t)=>t?e===t?!0:No(e,t.parentElement):!1,Po=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Fo=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Io(e){return Fo.has(e.tagName)||e.isContentEditable===!0}var Lo=new WeakSet;function Ro(e){return t=>{t.key===`Enter`&&e(t)}}function zo(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Bo=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Ro(()=>{if(Lo.has(n))return;zo(n,`down`);let e=Ro(()=>{zo(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>zo(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Vo(e){return Po(e)&&!Oo()}function Ho(e,t,n={}){let[r,i,a]=Ao(e,n),o=e=>{let r=e.currentTarget;if(!Vo(e))return;Lo.add(r);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),Lo.has(r)&&Lo.delete(r),Vo(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||No(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),wo(e)&&(e.addEventListener(`focus`,e=>Bo(e,i)),!Io(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Uo(e){return qt(e)&&`ownerSVGElement`in e}function Wo(e){return Uo(e)&&e.tagName===`svg`}var Go=[...oo,G,Cr],Ko=e=>Go.find(ao(e)),qo=()=>({translate:0,scale:1,origin:0,originPoint:0}),Jo=()=>({x:qo(),y:qo()}),Yo=()=>({min:0,max:0}),Xo=()=>({x:Yo(),y:Yo()}),Zo={current:null},Qo={current:!1},$o=typeof window<`u`;function es(){if(Qo.current=!0,$o)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Zo.current=e.matches;e.addEventListener(`change`,t),t()}else Zo.current=!1}var ts=new WeakMap;function ns(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function rs(e){return typeof e==`string`||Array.isArray(e)}var is=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],as=[`initial`,...is];function os(e){return ns(e.animate)||as.some(t=>rs(e[t]))}function ss(e){return!!(os(e)||e.variants)}function cs(e,t,n){for(let r in t){let i=t[r],a=n[r];if(qa(i))e.addValue(r,i);else if(qa(a))e.addValue(r,Ha(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Ha(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var ls=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],us={};function ds(e){us=e}function fs(){return us}var ps=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ki,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Fn.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,H.render(this.render,!1,!0))};let{latestValues:s,renderState:c}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!i,this.isControllingVariants=os(t),this.isVariantNode=ss(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in u){let t=u[e];s[e]!==void 0&&qa(t)&&t.set(s[e])}}mount(e){this.current=e,ts.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Qo.current||es(),this.shouldReduceMotion=Zo.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in this.projection&&this.projection.unmount(),jn(this.notifyUpdate),jn(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let n=Ni.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&H.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in us){let t=us[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Xo()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<ls.length;t++){let n=ls[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=cs(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Ha(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Kt(n)||Jt(n))?n=parseFloat(n):!Ko(n)&&Cr.test(t)&&(n=vo(e,t)),this.setBaseTarget(e,qa(n)?n.get():n)),qa(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Fa(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!qa(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new en),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){To.render(this.render)}},ms=class extends ps{constructor(){super(...arguments),this.KeyframeResolver=xo}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;qa(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},hs=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function gs({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function _s({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function vs(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ys(e){return e===void 0||e===1}function bs({scale:e,scaleX:t,scaleY:n}){return!ys(e)||!ys(t)||!ys(n)}function xs(e){return bs(e)||Ss(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ss(e){return Cs(e.x)||Cs(e.y)}function Cs(e){return e&&e!==`0%`}function ws(e,t,n){return n+t*(e-n)}function Ts(e,t,n,r,i){return i!==void 0&&(e=ws(e,i,r)),ws(e,n,r)+t}function Es(e,t=0,n=1,r,i){e.min=Ts(e.min,t,n,r,i),e.max=Ts(e.max,t,n,r,i)}function Ds(e,{x:t,y:n}){Es(e.x,t.translate,t.scale,t.originPoint),Es(e.y,n.translate,n.scale,n.originPoint)}var Os=.999999999999,ks=1.0000000000001;function As(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Ns(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Ds(e,o)),r&&xs(a.latestValues)&&Ns(e,a.latestValues))}t.x<ks&&t.x>Os&&(t.x=1),t.y<ks&&t.y>Os&&(t.y=1)}function js(e,t){e.min+=t,e.max+=t}function Ms(e,t,n,r,i=.5){Es(e,t,n,K(e.min,e.max,i),r)}function Ns(e,t){Ms(e.x,t.x,t.scaleX,t.scale,t.originX),Ms(e.y,t.y,t.scaleY,t.scale,t.originY)}function Ps(e,t){return gs(vs(e.getBoundingClientRect(),t))}function Fs(e,t,n){let r=Ps(e,n),{scroll:i}=t;return i&&(js(r.x,i.offset.x),js(r.y,i.offset.y)),r}var Is={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Ls=Mi.length;function Rs(e,t,n){let r=``,i=!0;for(let a=0;a<Ls;a++){let o=Mi[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=Co(s,ho[o]);if(!c){i=!1;let t=Is[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function zs(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Ni.has(e)){o=!0;continue}else if(Rn(e)){i[e]=n;continue}else{let t=Co(n,ho[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Rs(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Bs(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Vs(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Hs={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(W.test(e))e=parseFloat(e);else return e;return`${Vs(e,t.target.x)}% ${Vs(e,t.target.y)}%`}},Us={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=Cr.parse(e);if(i.length>5)return r;let a=Cr.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=K(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Ws={borderRadius:{...Hs,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:Hs,borderTopRightRadius:Hs,borderBottomLeftRadius:Hs,borderBottomRightRadius:Hs,boxShadow:Us};function Gs(e,{layout:t,layoutId:n}){return Ni.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Ws[e]||e===`opacity`)}function Ks(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(qa(r[t])||i&&qa(i[t])||Gs(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function qs(e){return window.getComputedStyle(e)}var Js=class extends ms{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Bs}readValueFromInstance(e,t){if(Ni.has(t))return this.projection?.isProjecting?Oi(t):Ai(e,t);{let n=qs(e),r=(Rn(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ps(e,t)}build(e,t,n){zs(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Ks(e,t,n)}},Ys={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Xs={offset:`strokeDashoffset`,array:`strokeDasharray`};function Zs(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Ys:Xs;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Qs=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function $s(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(zs(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Qs)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Zs(d,i,a,o,!1)}var ec=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),tc=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function nc(e,t,n,r){for(let n in Bs(e,t,void 0,r),t.attrs)e.setAttribute(ec.has(n)?n:Xa(n),t.attrs[n])}function rc(e,t,n){let r=Ks(e,t,n);for(let n in e)if(qa(e[n])||qa(t[n])){let t=Mi.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var ic=class extends ms{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Xo}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ni.has(t)){let e=_o(t);return e&&e.default||0}return t=ec.has(t)?t:Xa(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return rc(e,t,n)}build(e,t,n){$s(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){nc(e,t,n,r)}mount(e){this.isSVGTag=tc(e.tagName),super.mount(e)}},ac=as.length;function oc(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&oc(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<ac;n++){let r=as[n],i=e.props[r];(rs(i)||i===!1)&&(t[r]=i)}return t}function sc(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var cc=[...is].reverse(),lc=is.length;function uc(e){return t=>Promise.all(t.map(({animation:t,options:n})=>ro(e,t,n)))}function dc(e){let t=uc(e),n=mc(),r=!0,i=t=>(n,r)=>{let i=Ia(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(n){t=n(e)}function o(a){let{props:o}=e,s=oc(e.parent)||{},c=[],l=new Set,u={},d=1/0;for(let t=0;t<lc;t++){let f=cc[t],p=n[f],m=o[f]===void 0?s[f]:o[f],h=rs(m),g=f===a?p.isActive:null;g===!1&&(d=t);let _=m===s[f]&&m!==o[f]&&h;if(_&&r&&e.manuallyAnimateOnMount&&(_=!1),p.protectedKeys={...u},!p.isActive&&g===null||!m&&!p.prevProp||ns(m)||typeof m==`boolean`)continue;let v=fc(p.prevProp,m),y=v||f===a&&p.isActive&&!_&&h||t>d&&h,b=!1,x=Array.isArray(m)?m:[m],S=x.reduce(i(f),{});g===!1&&(S={});let{prevResolvedValues:C={}}=p,w={...C,...S},T=t=>{y=!0,l.has(t)&&(b=!0,l.delete(t)),p.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in w){let t=S[e],n=C[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Ua(t)&&Ua(n)?!sc(t,n):t!==n,r?t==null?l.add(e):T(e):t!==void 0&&l.has(e)?T(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=S,p.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(y=!1);let E=_&&v;y&&(!E||b)&&c.push(...x.map(t=>{let n={type:f};if(typeof t==`string`&&r&&!E&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Ia(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=ba(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(l.size){let t={};if(typeof o.initial!=`boolean`){let n=Ia(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}l.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),c.push({animation:t})}let f=!!c.length;return r&&(o.initial===!1||o.initial===o.animate)&&!e.manuallyAnimateOnMount&&(f=!1),r=!1,f?t(c):Promise.resolve()}function s(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=o(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=mc()}}}function fc(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!sc(t,e):!1}function pc(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function mc(){return{animate:pc(!0),whileInView:pc(),whileHover:pc(),whileTap:pc(),whileDrag:pc(),whileFocus:pc(),exit:pc()}}function hc(e,t){e.min=t.min,e.max=t.max}function gc(e,t){hc(e.x,t.x),hc(e.y,t.y)}function _c(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var vc=1e-4,yc=1-vc,bc=1+vc,xc=.01,Sc=0-xc,Cc=0+xc;function wc(e){return e.max-e.min}function Tc(e,t,n){return Math.abs(e-t)<=n}function Ec(e,t,n,r=.5){e.origin=r,e.originPoint=K(t.min,t.max,e.origin),e.scale=wc(n)/wc(t),e.translate=K(n.min,n.max,e.origin)-e.originPoint,(e.scale>=yc&&e.scale<=bc||isNaN(e.scale))&&(e.scale=1),(e.translate>=Sc&&e.translate<=Cc||isNaN(e.translate))&&(e.translate=0)}function Dc(e,t,n,r){Ec(e.x,t.x,n.x,r?r.originX:void 0),Ec(e.y,t.y,n.y,r?r.originY:void 0)}function Oc(e,t,n){e.min=n.min+t.min,e.max=e.min+wc(t)}function kc(e,t,n){Oc(e.x,t.x,n.x),Oc(e.y,t.y,n.y)}function Ac(e,t,n){e.min=t.min-n.min,e.max=e.min+wc(t)}function jc(e,t,n){Ac(e.x,t.x,n.x),Ac(e.y,t.y,n.y)}function Mc(e,t,n,r,i){return e-=t,e=ws(e,1/n,r),i!==void 0&&(e=ws(e,1/i,r)),e}function Nc(e,t=0,n=1,r=.5,i,a=e,o=e){if(ar.test(t)&&(t=parseFloat(t),t=K(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=K(a.min,a.max,r);e===a&&(s-=t),e.min=Mc(e.min,t,n,s,i),e.max=Mc(e.max,t,n,s,i)}function Pc(e,t,[n,r,i],a,o){Nc(e,t[n],t[r],t[i],t.scale,a,o)}var Fc=[`x`,`scaleX`,`originX`],Ic=[`y`,`scaleY`,`originY`];function Lc(e,t,n,r){Pc(e.x,t,Fc,n?n.x:void 0,r?r.x:void 0),Pc(e.y,t,Ic,n?n.y:void 0,r?r.y:void 0)}function Rc(e){return e.translate===0&&e.scale===1}function zc(e){return Rc(e.x)&&Rc(e.y)}function Bc(e,t){return e.min===t.min&&e.max===t.max}function Vc(e,t){return Bc(e.x,t.x)&&Bc(e.y,t.y)}function Hc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Uc(e,t){return Hc(e.x,t.x)&&Hc(e.y,t.y)}function Wc(e){return wc(e.x)/wc(e.y)}function Gc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Kc(e){return[e(`x`),e(`y`)]}function qc(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Jc=[`TopLeft`,`TopRight`,`BottomLeft`,`BottomRight`],Yc=Jc.length,Xc=e=>typeof e==`string`?parseFloat(e):e,Zc=e=>typeof e==`number`||W.test(e);function Qc(e,t,n,r,i,a){i?(e.opacity=K(0,n.opacity??1,el(r)),e.opacityExit=K(t.opacity??1,0,tl(r))):a&&(e.opacity=K(t.opacity??1,n.opacity??1,r));for(let i=0;i<Yc;i++){let a=`border${Jc[i]}Radius`,o=$c(t,a),s=$c(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Zc(o)===Zc(s)?(e[a]=Math.max(K(Xc(o),Xc(s),r),0),(ar.test(s)||ar.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=K(t.rotate||0,n.rotate||0,r))}function $c(e,t){return e[t]===void 0?e.borderRadius:e[t]}var el=nl(0,.5,gn),tl=nl(.5,.95,Xt);function nl(e,t,n){return r=>r<e?0:r>t?1:n($t(e,t,r))}function rl(e,t,n){let r=qa(e)?e:Ha(e);return r.start(Na(``,r,t,n)),r.animation}function il(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var al=(e,t)=>e.depth-t.depth,ol=class{constructor(){this.children=[],this.isDirty=!1}add(e){Ht(this.children,e),this.isDirty=!0}remove(e){Ut(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(al),this.isDirty=!1,this.children.forEach(e)}};function sl(e,t){let n=Fn.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(jn(r),e(a-t))};return H.setup(r,!0),()=>jn(r)}function cl(e){return qa(e)?e.get():e}var ll=class{constructor(){this.members=[]}add(e){Ht(this.members,e),e.scheduleRender()}remove(e){if(Ut(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t=this.members.findIndex(t=>e===t);if(t===0)return!1;let n;for(let e=t;e>=0;e--){let t=this.members[e];if(t.isPresent!==!1){n=t;break}}return n?(this.promote(n),!0):!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender();let r=n.options.layoutDependency,i=e.options.layoutDependency;r!==void 0&&i!==void 0&&r===i||(e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0));let{crossfade:a}=e.options;a===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}},ul={hasAnimatedSinceResize:!0,hasEverUpdated:!1},dl={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},fl=[``,`X`,`Y`,`Z`],pl=1e3,ml=0;function hl(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function gl(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Qa(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,H,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&gl(r)}function _l({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=ml++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Dn.value&&(dl.nodes=dl.calculatedTargetDeltas=dl.calculatedProjections=0),this.nodes.forEach(bl),this.nodes.forEach(Dl),this.nodes.forEach(Ol),this.nodes.forEach(xl),Dn.addProjectionMetrics&&Dn.addProjectionMetrics(dl)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new ol)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new en),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Uo(t)&&!Wo(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;H.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=sl(i,250),ul.hasAnimatedSinceResize&&(ul.hasAnimatedSinceResize=!1,this.nodes.forEach(El)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Fl,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Uc(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...ja(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||El(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),jn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(kl),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&gl(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Cl);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(wl);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Tl),this.nodes.forEach(vl),this.nodes.forEach(yl)):this.nodes.forEach(wl),this.clearAllSnapshots();let e=Fn.now();U.delta=Wt(0,1e3/60,e-U.timestamp),U.timestamp=e,U.isProcessing=!0,Mn.update.process(U),Mn.preRender.process(U),Mn.render.process(U),U.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,To.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Sl),this.sharedNodes.forEach(Al)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,H.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){H.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!wc(this.snapshot.measuredBox.x)&&!wc(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Xo(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!zc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||xs(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),zl(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Xo();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Vl))){let{scroll:e}=this.root;e&&(js(t.x,e.offset.x),js(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Xo();if(gc(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&gc(t,e),js(t.x,i.offset.x),js(t.y,i.offset.y))}return t}applyTransform(e,t=!1){let n=Xo();gc(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Ns(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),xs(r.latestValues)&&Ns(n,r.latestValues)}return xs(this.latestValues)&&Ns(n,this.latestValues),n}removeTransform(e){let t=Xo();gc(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!xs(n.latestValues))continue;bs(n.latestValues)&&n.updateSnapshot();let r=Xo();gc(r,n.measurePageBox()),Lc(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return xs(this.latestValues)&&Lc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==U.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=U.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Xo(),this.targetWithTransforms=Xo()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),kc(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):gc(this.target,this.layout.layoutBox),Ds(this.target,this.targetDelta)):gc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Dn.value&&dl.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||bs(this.parent.latestValues)||Ss(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Xo(),this.relativeTargetOrigin=Xo(),jc(this.relativeTargetOrigin,t,n),gc(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===U.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;gc(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;As(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Xo());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(_c(this.prevProjectionDelta.x,this.projectionDelta.x),_c(this.prevProjectionDelta.y,this.projectionDelta.y)),Dc(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Gc(this.projectionDelta.x,this.prevProjectionDelta.x)||!Gc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Dn.value&&dl.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Jo(),this.projectionDelta=Jo(),this.projectionDeltaWithTransform=Jo()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Jo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=Xo(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Pl));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;jl(a.x,e.x,n),jl(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(jc(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Nl(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Vc(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=Xo(),gc(d,this.relativeTarget)),s&&(this.animationValues=i,Qc(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(jn(this.pendingAnimation),void 0),this.pendingAnimation=H.update(()=>{ul.hasAnimatedSinceResize=!0,In.layout++,this.motionValue||=Ha(0),this.currentAnimation=rl(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{In.layout--},onComplete:()=>{In.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(pl),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Bl(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||Xo();let t=wc(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=wc(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}gc(t,n),Ns(t,i),Dc(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new ll),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&hl(`z`,e,r,this.animationValues);for(let t=0;t<fl.length;t++)hl(`rotate${fl[t]}`,e,r,this.animationValues),hl(`skew${fl[t]}`,e,r,this.animationValues);for(let t in e.render(),r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=cl(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=cl(t?.pointerEvents)||``),this.hasProjected&&!xs(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=qc(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;for(let t in e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit,Ws){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Ws[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?cl(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Cl),this.root.sharedNodes.clear()}}}function vl(e){e.updateLayout()}function yl(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;i===`size`?Kc(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=wc(r);r.min=n[e].min,r.max=r.min+i}):Bl(i,t.layoutBox,n)&&Kc(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=wc(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Jo();Dc(o,n,t.layoutBox);let s=Jo();a?Dc(s,e.applyTransform(r,!0),t.measuredBox):Dc(s,n,t.layoutBox);let c=!zc(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=Xo();jc(o,t.layoutBox,i.layoutBox);let s=Xo();jc(s,n,a.layoutBox),Uc(o,s)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function bl(e){Dn.value&&dl.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function xl(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Sl(e){e.clearSnapshot()}function Cl(e){e.clearMeasurements()}function wl(e){e.isLayoutDirty=!1}function Tl(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function El(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Dl(e){e.resolveTargetDelta()}function Ol(e){e.calcProjection()}function kl(e){e.resetSkewAndRotation()}function Al(e){e.removeLeadSnapshot()}function jl(e,t,n){e.translate=K(t.translate,0,n),e.scale=K(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Ml(e,t,n,r){e.min=K(t.min,n.min,r),e.max=K(t.max,n.max,r)}function Nl(e,t,n,r){Ml(e.x,t.x,n.x,r),Ml(e.y,t.y,n.y,r)}function Pl(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Fl={duration:.45,ease:[.4,0,.1,1]},Il=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ll=Il(`applewebkit/`)&&!Il(`chrome/`)?Math.round:Xt;function Rl(e){e.min=Ll(e.min),e.max=Ll(e.max)}function zl(e){Rl(e.x),Rl(e.y)}function Bl(e,t,n){return e===`position`||e===`preserve-aspect`&&!Tc(Wc(t),Wc(n),.2)}function Vl(e){return e!==e.root&&e.scroll?.wasRoot}var Hl=_l({attachResizeListener:(e,t)=>il(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Ul={current:void 0},Wl=_l({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ul.current){let e=new Hl({});e.mount(window),e.setOptions({layoutScroll:!0}),Ul.current=e}return Ul.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Gl=(0,R.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Kl(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function ql(...e){return t=>{let n=!1,r=e.map(e=>{let r=Kl(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Kl(e[t],null)}}}}function Jl(...e){return R.useCallback(ql(...e),e)}var Yl=class extends R.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=wo(e)&&e.offsetWidth||0,r=wo(e)&&e.offsetHeight||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left,i.bottom=r-i.height-i.top}return null}componentDidUpdate(){}render(){return this.props.children}};function Xl({children:e,isPresent:t,anchorX:n,anchorY:r,root:i}){let a=(0,R.useId)(),o=(0,R.useRef)(null),s=(0,R.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=(0,R.useContext)(Gl),l=Jl(o,e.props?.ref??e?.ref);return(0,R.useInsertionEffect)(()=>{let{width:e,height:l,top:u,left:d,right:f,bottom:p}=s.current;if(t||!o.current||!e||!l)return;let m=n===`left`?`left: ${d}`:`right: ${f}`,h=r===`bottom`?`bottom: ${p}`:`top: ${u}`;o.current.dataset.motionPopId=a;let g=document.createElement(`style`);c&&(g.nonce=c);let _=i??document.head;return _.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${m}px !important;
            ${h}px !important;
          }
        `),()=>{_.contains(g)&&_.removeChild(g)}},[t]),(0,B.jsx)(Yl,{isPresent:t,childRef:o,sizeRef:s,children:R.cloneElement(e,{ref:l})})}var Zl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Rt(Ql),d=(0,R.useId)(),f=!0,p=(0,R.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,R.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),R.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),o===`popLayout`&&(e=(0,B.jsx)(Xl,{isPresent:n,anchorX:s,anchorY:c,root:l,children:e})),(0,B.jsx)(Vt.Provider,{value:p,children:e})};function Ql(){return new Map}function $l(e=!0){let t=(0,R.useContext)(Vt);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,R.useId)();(0,R.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,R.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var eu=e=>e.key||``;function tu(e){let t=[];return R.Children.forEach(e,e=>{(0,R.isValidElement)(e)&&t.push(e)}),t}var nu=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=$l(o),f=(0,R.useMemo)(()=>tu(e),[e]),p=o&&!u?[]:f.map(eu),m=(0,R.useRef)(!0),h=(0,R.useRef)(f),g=Rt(()=>new Map),_=(0,R.useRef)(new Set),[v,y]=(0,R.useState)(f),[b,x]=(0,R.useState)(f);Bt(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=eu(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=eu(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(tu(e)),y(f),null}let{forceRender:C}=(0,R.useContext)(Lt);return(0,B.jsx)(B.Fragment,{children:b.map(e=>{let v=eu(e),y=o&&!u?!1:f===b||p.includes(v);return(0,B.jsx)(Zl,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(_.current.add(v),g.has(v))g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},ru=(0,R.createContext)({strict:!1}),iu={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},au=!1;function ou(){if(au)return;let e={};for(let t in iu)e[t]={isEnabled:e=>iu[t].some(t=>!!e[t])};ds(e),au=!0}function su(){return ou(),fs()}function cu(e){let t=su();for(let n in e)t[n]={...t[n],...e[n]};ds(t)}var lu=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(`.`));function uu(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||lu.has(e)}var du=e=>!uu(e);function fu(e){typeof e==`function`&&(du=t=>t.startsWith(`on`)?!uu(t):e(t))}try{fu((h(),a(D)).default)}catch{}function pu(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||(du(i)||n===!0&&uu(i)||!t&&!uu(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var mu=(0,R.createContext)({});function hu(e,t){if(os(e)){let{initial:t,animate:n}=e;return{initial:t===!1||rs(t)?t:void 0,animate:rs(n)?n:void 0}}return e.inherit===!1?{}:t}function gu(e){let{initial:t,animate:n}=hu(e,(0,R.useContext)(mu));return(0,R.useMemo)(()=>({initial:t,animate:n}),[_u(t),_u(n)])}function _u(e){return Array.isArray(e)?e.join(` `):e}var vu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function yu(e,t,n){for(let r in t)!qa(t[r])&&!Gs(r,n)&&(e[r]=t[r])}function bu({transformTemplate:e},t){return(0,R.useMemo)(()=>{let n=vu();return zs(n,t,e),Object.assign({},n.vars,n.style)},[t])}function xu(e,t){let n=e.style||{},r={};return yu(r,n,e),Object.assign(r,bu(e,t)),r}function Su(e,t){let n={},r=xu(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Cu=()=>({...vu(),attrs:{}});function wu(e,t,n,r){let i=(0,R.useMemo)(()=>{let n=Cu();return $s(n,t,tc(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};yu(t,e.style,e),i.style={...t,...i.style}}return i}var Tu=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Eu(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Tu.indexOf(e)>-1||/[A-Z]/u.test(e))}function Du(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Eu(e)?wu:Su)(t,r,i,e),c=pu(t,typeof e==`string`,a),l=e===R.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,R.useMemo)(()=>qa(u)?u.get():u,[u]);return(0,R.createElement)(e,{...l,children:d})}function Ou({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:ku(n,r,i,e),renderState:t()}}function ku(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=cl(a[e]);let{initial:o,animate:s}=e,c=os(e),l=ss(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!ns(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Fa(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Au=e=>(t,n)=>{let r=(0,R.useContext)(mu),i=(0,R.useContext)(Vt),a=()=>Ou(e,t,r,i);return n?a():Rt(a)},ju=Au({scrapeMotionValuesFromProps:Ks,createRenderState:vu}),Mu=Au({scrapeMotionValuesFromProps:rc,createRenderState:Cu}),Nu=Symbol.for(`motionComponentSymbol`);function Pu(e,t,n){let r=(0,R.useRef)(n);(0,R.useInsertionEffect)(()=>{r.current=n});let i=(0,R.useRef)(null);return(0,R.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var Fu=(0,R.createContext)({});function Iu(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Lu(e,t,n,r,i,a){let{visualElement:o}=(0,R.useContext)(mu),s=(0,R.useContext)(ru),c=(0,R.useContext)(Vt),l=(0,R.useContext)(Gl).reducedMotion,u=(0,R.useRef)(null),d=(0,R.useRef)(!1);r||=s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:l,isSVG:a}),d.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));let f=u.current,p=(0,R.useContext)(Fu);f&&!f.projection&&i&&(f.type===`html`||f.type===`svg`)&&Ru(u.current,n,i,p);let m=(0,R.useRef)(!1);(0,R.useInsertionEffect)(()=>{f&&m.current&&f.update(n,c)});let h=n[Za],g=(0,R.useRef)(!!h&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return Bt(()=>{d.current=!0,f&&(m.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),g.current&&f.animationState&&f.animationState.animateChanges())}),(0,R.useEffect)(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(h)}),!1),f.enteringChildren=void 0)}),f}function Ru(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:zu(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Iu(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:l})}function zu(e){if(e)return e.options.allowProjection===!1?zu(e.parent):e.projection}function Bu(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&cu(r);let a=n?n===`svg`:Eu(e),o=a?Mu:ju;function s(n,s){let c,l={...(0,R.useContext)(Gl),...n,layoutId:Vu(n)},{isStatic:u}=l,d=gu(n),f=o(n,u);if(!u&&zt){Hu(l,r);let t=Uu(l);c=t.MeasureLayout,d.visualElement=Lu(e,f,l,i,t.ProjectionNode,a)}return(0,B.jsxs)(mu.Provider,{value:d,children:[c&&d.visualElement?(0,B.jsx)(c,{visualElement:d.visualElement,...l}):null,Du(e,n,Pu(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,R.forwardRef)(s);return c[Nu]=e,c}function Vu({layoutId:e}){let t=(0,R.useContext)(Lt).id;return t&&e!==void 0?t+`-`+e:e}function Hu(e,t){(0,R.useContext)(ru).strict}function Uu(e){let{drag:t,layout:n}=su();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Wu(e,t){if(typeof Proxy>`u`)return Bu;let n=new Map,r=(n,r)=>Bu(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Bu(a,void 0,e,t)),n.get(a))})}var Gu=(e,t)=>t.isSVG??Eu(e)?new ic(t):new Js(t,{allowProjection:e!==R.Fragment}),Ku=class extends hs{constructor(e){super(e),e.animationState||=dc(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();ns(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},qu=0,Ju={animation:{Feature:Ku},exit:{Feature:class extends hs{constructor(){super(...arguments),this.id=qu++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Yu(e){return{point:{x:e.pageX,y:e.pageY}}}var Xu=e=>t=>Po(t)&&e(t,Yu(t));function Zu(e,t,n,r){return il(e,t,Xu(n),r)}var Qu=({current:e})=>e?e.ownerDocument.defaultView:null,$u=(e,t)=>Math.abs(e-t);function ed(e,t){let n=$u(e.x,t.x),r=$u(e.y,t.y);return Math.sqrt(n**2+r**2)}var td=new Set([`auto`,`scroll`]),nd=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=ad(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=ed(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=U;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=rd(t,this.transformPagePoint),H.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=ad(e.type===`pointercancel`?this.lastMoveEventInfo:rd(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Po(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=rd(Yu(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=U;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,ad(s,this.history)),this.removeListeners=Qt(Zu(this.contextWindow,`pointermove`,this.handlePointerMove),Zu(this.contextWindow,`pointerup`,this.handlePointerUp),Zu(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(td.has(e.overflowX)||td.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener(`scroll`,this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),H.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),jn(this.updatePoint)}};function rd(e,t){return t?{point:t(e.point)}:e}function id(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ad({point:e},t){return{point:e,delta:id(e,sd(t)),offset:id(e,od(t)),velocity:cd(t,.1)}}function od(e){return e[0]}function sd(e){return e[e.length-1]}function cd(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=sd(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>tn(t)));)n--;if(!r)return{x:0,y:0};let a=nn(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function ld(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?K(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?K(n,e,r.max):Math.min(e,n)),e}function ud(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function dd(e,{top:t,left:n,bottom:r,right:i}){return{x:ud(e.x,n,i),y:ud(e.y,t,r)}}function fd(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function pd(e,t){return{x:fd(e.x,t.x),y:fd(e.y,t.y)}}function md(e,t){let n=.5,r=wc(e),i=wc(t);return i>r?n=$t(t.min,t.max-r,e.min):r>i&&(n=$t(e.min,e.max-i,t.min)),Wt(0,1,n)}function hd(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var gd=.35;function _d(e=gd){return e===!1?e=0:e===!0&&(e=gd),{x:vd(e,`left`,`right`),y:vd(e,`top`,`bottom`)}}function vd(e,t,n){return{min:yd(e,t),max:yd(e,n)}}function yd(e,t){return typeof e==`number`?e:e[t]||0}var bd=new WeakMap,xd=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Xo(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t?(this.stopAnimation(),this.snapToCursor(Yu(e).point)):this.pauseAnimation()},a=(e,t)=>{this.stopAnimation();let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ko(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Kc(e=>{let t=this.getAxisMotionValue(e).get()||0;if(ar.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=wc(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&H.postRender(()=>i(e,t)),Ya(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Cd(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&a(e,t)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Kc(e=>this.getAnimationState(e)===`paused`&&this.getAxisMotionValue(e).animation?.play()),{dragSnapToOrigin:l}=this.getProps();this.panSession=new nd(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Qu(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&H.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Sd(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=ld(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Iu(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=dd(n.layoutBox,e):this.constraints=!1,this.elastic=_d(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&Kc(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=hd(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Iu(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Fs(n,r.root,this.visualElement.getTransformPagePoint()),a=pd(r.layout.layoutBox,i);if(t){let e=t(_s(a));this.hasMutatedConstraints=!!e,e&&(a=gs(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Kc(o=>{if(!Sd(o,t,this.currentDirection))return;let c=s&&s[o]||{};a&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Ya(this.visualElement,e),n.start(Na(e,n,0,t,this.visualElement,!1))}stopAnimation(){Kc(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Kc(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Kc(t=>{let{drag:n}=this.getProps();if(!Sd(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-K(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Iu(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Kc(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=md({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Kc(t=>{if(!Sd(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(K(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;bd.set(this.visualElement,this);let e=this.visualElement.current,t=Zu(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Io(i);n&&r&&!a&&this.start(t)}),n=()=>{let{dragConstraints:e}=this.getProps();Iu(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener(`measure`,n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),H.read(n);let a=il(window,`resize`,()=>this.scalePositionWithinConstraints()),o=r.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Kc(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{a(),t(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=gd,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Sd(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Cd(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var wd=class extends hs{constructor(e){super(e),this.removeGroupControls=Xt,this.removeListeners=Xt,this.controls=new xd(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Xt}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Td=e=>(t,n)=>{e&&H.postRender(()=>e(t,n))},Ed=class extends hs{constructor(){super(...arguments),this.removePointerDownListener=Xt}onPointerDown(e){this.session=new nd(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Qu(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Td(e),onStart:Td(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&H.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Zu(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Dd=!1,Od=class extends R.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Dd&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),ul.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Dd=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||H.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),To.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Dd=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function kd(e){let[t,n]=$l(),r=(0,R.useContext)(Lt);return(0,B.jsx)(Od,{...e,layoutGroup:r,switchLayoutGroup:(0,R.useContext)(Fu),isPresent:t,safeToRemove:n})}var Ad={pan:{Feature:Ed},drag:{Feature:wd,ProjectionNode:Wl,MeasureLayout:kd}};function jd(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&H.postRender(()=>i(t,Yu(t)))}var Md=class extends hs{mount(){let{current:e}=this.node;e&&(this.unmount=Mo(e,(e,t)=>(jd(this.node,t,`Start`),e=>jd(this.node,e,`End`))))}unmount(){}},Nd=class extends hs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Qt(il(this.node.current,`focus`,()=>this.onFocus()),il(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Pd(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&H.postRender(()=>i(t,Yu(t)))}var Fd=class extends hs{mount(){let{current:e}=this.node;e&&(this.unmount=Ho(e,(e,t)=>(Pd(this.node,t,`Start`),(e,{success:t})=>Pd(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}},Id=new WeakMap,Ld=new WeakMap,Rd=e=>{let t=Id.get(e.target);t&&t(e)},zd=e=>{e.forEach(Rd)};function Bd({root:e,...t}){let n=e||document;Ld.has(n)||Ld.set(n,{});let r=Ld.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(zd,{root:e,...t})),r[i]}function Vd(e,t,n){let r=Bd(t);return Id.set(e,n),r.observe(e),()=>{Id.delete(e),r.unobserve(e)}}var Hd={some:0,all:1},Ud=class extends hs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Hd[r]};return Vd(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Wd(e,t))&&this.startObserver()}unmount(){}};function Wd({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Gd={inView:{Feature:Ud},tap:{Feature:Fd},focus:{Feature:Nd},hover:{Feature:Md}},Kd={layout:{ProjectionNode:Wl,MeasureLayout:kd}},qd=Wu({...Ju,...Gd,...Ad,...Kd},Gu),Jd=ht(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),Yd=ht(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),Xd=ht(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),Zd=ht(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),Qd=ht(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),$d=ht(`circle-arrow-right`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m12 16 4-4-4-4`,key:`1i9zcv`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}]]),ef=ht(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),tf=ht(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),nf=ht(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),rf=ht(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),af=ht(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),of=ht(`minimize-2`,[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]),sf=ht(`octagon-x`,[[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,key:`2d38gg`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),cf=!1;function lf(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function uf(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var df=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!cf:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(uf(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=lf(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),ff=`-ms-`,pf=`-moz-`,J=`-webkit-`,mf=`comm`,hf=`rule`,gf=`decl`,_f=`@import`,vf=`@keyframes`,yf=`@layer`,bf=Math.abs,xf=String.fromCharCode,Sf=Object.assign;function Cf(e,t){return Df(e,0)^45?(((t<<2^Df(e,0))<<2^Df(e,1))<<2^Df(e,2))<<2^Df(e,3):0}function wf(e){return e.trim()}function Tf(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function Ef(e,t){return e.indexOf(t)}function Df(e,t){return e.charCodeAt(t)|0}function Of(e,t,n){return e.slice(t,n)}function kf(e){return e.length}function Af(e){return e.length}function jf(e,t){return t.push(e),e}function Mf(e,t){return e.map(t).join(``)}var Nf=1,Pf=1,Ff=0,If=0,X=0,Lf=``;function Rf(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Nf,column:Pf,length:o,return:``}}function zf(e,t){return Sf(Rf(``,null,null,``,null,null,0),e,{length:-e.length},t)}function Bf(){return X}function Vf(){return X=If>0?Df(Lf,--If):0,Pf--,X===10&&(Pf=1,Nf--),X}function Hf(){return X=If<Ff?Df(Lf,If++):0,Pf++,X===10&&(Pf=1,Nf++),X}function Uf(){return Df(Lf,If)}function Wf(){return If}function Gf(e,t){return Of(Lf,e,t)}function Kf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qf(e){return Nf=Pf=1,Ff=kf(Lf=e),If=0,[]}function Jf(e){return Lf=``,e}function Yf(e){return wf(Gf(If-1,Qf(e===91?e+2:e===40?e+1:e)))}function Xf(e){for(;(X=Uf())&&X<33;)Hf();return Kf(e)>2||Kf(X)>3?``:` `}function Zf(e,t){for(;--t&&Hf()&&!(X<48||X>102||X>57&&X<65||X>70&&X<97););return Gf(e,Wf()+(t<6&&Uf()==32&&Hf()==32))}function Qf(e){for(;Hf();)switch(X){case e:return If;case 34:case 39:e!==34&&e!==39&&Qf(X);break;case 40:e===41&&Qf(e);break;case 92:Hf();break}return If}function $f(e,t){for(;Hf()&&e+X!==57&&!(e+X===84&&Uf()===47););return`/*`+Gf(t,If-1)+`*`+xf(e===47?e:Hf())}function ep(e){for(;!Kf(Uf());)Hf();return Gf(e,If)}function tp(e){return Jf(np(``,null,null,null,[``],e=qf(e),0,[0],e))}function np(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Hf()){case 40:if(m!=108&&Df(C,d-1)==58){Ef(C+=Y(Yf(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Yf(v);break;case 9:case 10:case 13:case 32:C+=Xf(m);break;case 92:C+=Zf(Wf()-1,7);continue;case 47:switch(Uf()){case 42:case 47:jf(ip($f(Hf(),Wf()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=kf(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=Y(C,/\f/g,``)),p>0&&kf(C)-d&&jf(p>32?ap(C+`;`,r,n,d-1):ap(Y(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(jf(S=rp(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)np(C,t,S,S,b,a,d,s,x);else switch(f===99&&Df(C,3)===110?100:f){case 100:case 108:case 109:case 115:np(e,S,S,r&&jf(rp(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:np(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+kf(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Vf()==125)continue}switch(C+=xf(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(kf(C)-1)*_,_=1;break;case 64:Uf()===45&&(C+=Yf(Hf())),f=Uf(),u=d=kf(y=C+=ep(Wf())),v++;break;case 45:m===45&&kf(C)==2&&(h=0)}}return a}function rp(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=Af(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=Of(e,d+1,d=bf(h=o[m])),y=e;_<p;++_)(y=wf(h>0?f[_]+` `+v:Y(v,/&\f/g,f[_])))&&(c[g++]=y);return Rf(e,t,n,i===0?hf:s,c,l,u)}function ip(e,t,n){return Rf(e,t,n,mf,xf(Bf()),Of(e,2,-2),0)}function ap(e,t,n,r){return Rf(e,t,n,gf,Of(e,0,r),Of(e,r+1,-1),r)}function op(e,t){for(var n=``,r=Af(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function sp(e,t,n,r){switch(e.type){case yf:if(e.children.length)break;case _f:case gf:return e.return=e.return||e.value;case mf:return``;case vf:return e.return=e.value+`{`+op(e.children,r)+`}`;case hf:e.value=e.props.join(`,`)}return kf(n=op(e.children,r))?e.return=e.value+`{`+n+`}`:``}function cp(e){var t=Af(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function lp(e){return function(t){t.root||(t=t.return)&&e(t)}}var up=function(e,t,n){for(var r=0,i=0;r=i,i=Uf(),r===38&&i===12&&(t[n]=1),!Kf(i);)Hf();return Gf(e,If)},dp=function(e,t){var n=-1,r=44;do switch(Kf(r)){case 0:r===38&&Uf()===12&&(t[n]=1),e[n]+=up(If-1,t,n);break;case 2:e[n]+=Yf(r);break;case 4:if(r===44){e[++n]=Uf()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=xf(r)}while(r=Hf());return e},fp=function(e,t){return Jf(dp(qf(e),t))},pp=new WeakMap,mp=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!pp.get(n))&&!r){pp.set(e,!0);for(var i=[],a=fp(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},hp=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function gp(e,t){switch(Cf(e,t)){case 5103:return J+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+pf+e+ff+e+e;case 6828:case 4268:return J+e+ff+e+e;case 6165:return J+e+ff+`flex-`+e+e;case 5187:return J+e+Y(e,/(\w+).+(:[^]+)/,J+`box-$1$2`+ff+`flex-$1$2`)+e;case 5443:return J+e+ff+`flex-item-`+Y(e,/flex-|-self/,``)+e;case 4675:return J+e+ff+`flex-line-pack`+Y(e,/align-content|flex-|-self/,``)+e;case 5548:return J+e+ff+Y(e,`shrink`,`negative`)+e;case 5292:return J+e+ff+Y(e,`basis`,`preferred-size`)+e;case 6060:return J+`box-`+Y(e,`-grow`,``)+J+e+ff+Y(e,`grow`,`positive`)+e;case 4554:return J+Y(e,/([^-])(transform)/g,`$1`+J+`$2`)+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,J+`$1`),/(image-set)/,J+`$1`),e,``)+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,J+`box-pack:$3`+ff+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+J+e+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,J+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kf(e)-1-t>6)switch(Df(e,t+1)){case 109:if(Df(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,`$1`+J+`$2-$3$1`+pf+(Df(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Ef(e,`stretch`)?gp(Y(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(Df(e,t+1)!==115)break;case 6444:switch(Df(e,kf(e)-3-(~Ef(e,`!important`)&&10))){case 107:return Y(e,`:`,`:`+J)+e;case 101:return Y(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+J+(Df(e,14)===45?`inline-`:``)+`box$3$1`+J+`$2$3$1`+ff+`$2box$3`)+e}break;case 5936:switch(Df(e,t+11)){case 114:return J+e+ff+Y(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return J+e+ff+Y(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return J+e+ff+Y(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return J+e+ff+e+e}return e}var _p=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case gf:e.return=gp(e.value,e.length);break;case vf:return op([zf(e,{value:Y(e.value,`@`,`@`+J)})],r);case hf:if(e.length)return Mf(e.props,function(t){switch(Tf(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return op([zf(e,{props:[Y(t,/:(read-\w+)/,`:`+pf+`$1`)]})],r);case`::placeholder`:return op([zf(e,{props:[Y(t,/:(plac\w+)/,`:`+J+`input-$1`)]}),zf(e,{props:[Y(t,/:(plac\w+)/,`:`+pf+`$1`)]}),zf(e,{props:[Y(t,/:(plac\w+)/,ff+`input-$1`)]})],r)}return``})}}],vp=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||_p,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[mp,hp],l,u=[sp,lp(function(e){l.insert(e)})],d=cp(c.concat(r,u)),f=function(e){return op(tp(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new df({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},yp=!0;function bp(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var xp=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||yp===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},Sp=function(e,t,n){xp(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function Cp(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}w();var wp=!1,Tp=/[A-Z]|^ms/g,Ep=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Dp=function(e){return e.charCodeAt(1)===45},Op=function(e){return e!=null&&typeof e!=`boolean`},kp=S(function(e){return Dp(e)?e:e.replace(Tp,`-$&`).toLowerCase()}),Ap=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(Ep,function(e,t,n){return Fp={name:t,styles:n,next:Fp},t})}return x[e]!==1&&!Dp(e)&&typeof t==`number`&&t!==0?t+`px`:t},jp=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;function Mp(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return Fp={name:i.name,styles:i.styles,next:Fp},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Fp={name:o.name,styles:o.styles,next:Fp},o=o.next;return a.styles+`;`}return Np(e,t,n);case`function`:if(e!==void 0){var s=Fp,c=n(e);return Fp=s,Mp(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function Np(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Mp(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:Op(s)&&(r+=kp(a)+`:`+Ap(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&wp)throw Error(jp);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)Op(o[c])&&(r+=kp(a)+`:`+Ap(a,o[c])+`;`);else{var l=Mp(e,t,o);switch(a){case`animation`:case`animationName`:r+=kp(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}var Pp=/label:\s*([^\s;{]+)\s*(;|$)/g,Fp;function Ip(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Fp=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=Mp(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=Mp(n,t,e[o]),r&&(i+=a[o]);Pp.lastIndex=0;for(var s=``,c;(c=Pp.exec(i))!==null;)s+=`-`+c[1];return{name:Cp(i)+s,styles:i,next:Fp}}var Lp=function(e){return e()},Rp=R.useInsertionEffect?R.useInsertionEffect:!1,zp=Rp||Lp;Rp||R.useLayoutEffect;var Bp=R.createContext(typeof HTMLElement<`u`?vp({key:`css`}):null);Bp.Provider;var Vp=function(e){return(0,R.forwardRef)(function(t,n){return e(t,(0,R.useContext)(Bp),n)})},Hp=R.createContext({});({}).hasOwnProperty,h();var Up=!1,Wp=g,Gp=function(e){return e!==`theme`},Kp=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?Wp:Gp},qp=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},Jp=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return xp(t,n,r),zp(function(){return Sp(t,n,r)}),null},Yp=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=qp(t,n,r),c=s||Kp(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=Vp(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=R.useContext(Hp)}typeof e.className==`string`?a=bp(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=Ip(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?Kp(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),R.createElement(R.Fragment,null,R.createElement(Jp,{cache:t,serialized:m,isStringTag:typeof r==`string`}),R.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,`toString`,{value:function(){return o===void 0&&Up?`NO_COMPONENT_SELECTOR`:`.`+o}}),h.withComponent=function(t,r){return e(t,ce({},n,r,{shouldForwardProp:qp(h,r,!0)})).apply(void 0,d)},h}},Xp=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),Zp=Yp.bind(null);Xp.forEach(function(e){Zp[e]=Zp(e)});const Qp=Zp.div({position:`relative`,display:`flex`,height:`100vh`,flexDirection:`column`,backgroundColor:`transparent`}),$p=T.div`
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
`,em=T(qd.div)`
  ${{position:`fixed`,bottom:`0`,left:`0`,top:`0`,zIndex:`1000`,display:`flex`,width:`150px`,flexDirection:`column`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}}
  background-color: ${e=>f(e.theme.BACKGROUND,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 16px;
`,tm=T.div`
  ${{flex:`none`,padding:`1.25rem`}}
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  background-color: ${e=>e.theme.OFFSET};
  border-radius: 12px 12px 0 0;
`,nm=T.div`
  ${{marginTop:`0.25rem`,flex:`1 1 0%`,placeContent:`center`,fontSize:`0.875rem`}}
  padding: 2px 6px;
  color: ${e=>f(e.theme.PRIMARY,.7)};
`,rm=T.h2`
  ${{margin:`0`,fontSize:`1.5rem`,fontWeight:`700`}}
  color: ${e=>e.theme.PRIMARY};
`,im=T.div`
  position: relative;
`,am=T.button`
  ${{display:`flex`,width:`100%`,cursor:`pointer`,alignItems:`center`,justifyContent:`space-between`,gap:`0.5rem`}}
  padding: 8px 10px;
  border-radius: 999px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>e.$open?f(e.theme.BACKGROUND,.82):f(e.theme.BACKGROUND,.68)};
  color: ${e=>e.theme.PRIMARY};
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${e=>f(e.theme.BACKGROUND,.86)};
  }

  &:active {
    transform: scale(0.98);
  }
`,om=T.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  flex: 1;
`,sm=T.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: small;
  font-weight: 600;
`,cm=T.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  padding: 6px;
  border-radius: 14px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>f(e.theme.BACKGROUND,.94)};
  box-shadow: 0 10px 24px ${e=>f(e.theme.BACKGROUND,.45)};
  z-index: 2;
`,lm=T.button`
  ${{display:`flex`,width:`100%`,cursor:`pointer`,alignItems:`center`,justifyContent:`space-between`,borderStyle:`none`}}
  padding: 8px 10px;
  border-radius: 10px;
  background: ${e=>e.$active?f(e.theme.OFFSET,.42):`transparent`};
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  text-align: left;

  &:hover {
    background: ${e=>f(e.theme.OFFSET,.32)};
  }
`;T.p`
  ${{margin:`0`,fontSize:`0.875rem`}}
  color: ${e=>f(e.theme.PRIMARY,.7)};
`,Zp.div({flex:`1 1 0%`});const um=T.nav`
  ${{flex:`none`,paddingLeft:`0`,paddingRight:`0`,paddingBottom:`50px`,paddingTop:`0.5rem`}}
  border-top: 1px solid ${e=>e.theme.BORDER};
`,dm=T.button`
  ${{width:`100%`,cursor:`pointer`,borderStyle:`none`,paddingLeft:`1.25rem`,paddingRight:`1.25rem`,paddingTop:`0.75rem`,paddingBottom:`0.75rem`,textAlign:`left`,fontSize:`15px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isActive?e.theme.OFFSET:`transparent`};
  color: ${e=>e.theme.PRIMARY};
  font-weight: ${e=>e.$isActive?600:400};
  
  &:hover {
    background-color: ${e=>f(e.theme.OFFSET,.5)};
  }
`,fm=Zp.div({position:`fixed`,bottom:`0`,left:`0`,right:`0`,top:`0`,zIndex:`999`,backgroundColor:`rgba(0, 0, 0, 0.6)`}),pm=Zp.div({position:`fixed`,bottom:`2px`,left:`2px`,zIndex:`1000`,display:`flex`,height:`3rem`,width:`3rem`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}),mm=T.button`
  ${{position:`fixed`,zIndex:`1001`,display:`flex`,height:`2.5rem`,width:`2.5rem`,cursor:`pointer`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-shadow":`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,"--tw-shadow-colored":`0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color)`,boxShadow:`var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)`}}
  background-color: ${e=>f(e.theme.BACKGROUND,.75)};
  border: 2px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
`,hm=({isOpen:e,currentPage:t,onToggle:n,onNavigate:r,canAccessInitiativeList:i=!0})=>{let{theme:a}=It(),{t:o,locale:s,setLocale:c,availableLocales:l}=_t(),u=z(e=>e.playerData),d=String(u?.role||``).toUpperCase()===`GM`,[f,p]=(0,R.useState)(!1),m=(0,R.useRef)(null),h=(0,R.useMemo)(()=>({en:o(`common.locale.en`),es:o(`common.locale.es`),fr:o(`common.locale.fr`),de:o(`common.locale.de`)}),[o]);(0,R.useEffect)(()=>{e||p(!1)},[e]),(0,R.useEffect)(()=>{if(!f)return;let e=e=>{m.current&&!m.current.contains(e.target)&&p(!1)};return window.addEventListener(`mousedown`,e),()=>{window.removeEventListener(`mousedown`,e)}},[f]);let g=e=>{c(e),p(!1)};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(nu,{children:e&&(0,B.jsxs)(em,{theme:a,initial:{x:-300},animate:{x:0},exit:{x:-300},transition:{type:`tween`,duration:.3},style:{boxShadow:`4px 0 12px rgba(0, 0, 0, 0.15)`},children:[(0,B.jsxs)(tm,{theme:a,children:[(0,B.jsx)(rm,{theme:a,children:o(`nav.title`)}),(0,B.jsxs)(im,{ref:m,children:[(0,B.jsxs)(am,{theme:a,$open:f,type:`button`,"aria-haspopup":`listbox`,"aria-expanded":f,"aria-label":o(`nav.languageSwitcher`),onClick:()=>p(e=>!e),children:[(0,B.jsxs)(om,{children:[(0,B.jsx)(rf,{size:16}),(0,B.jsx)(sm,{children:h[s]})]}),(0,B.jsx)(Qd,{size:8})]}),f?(0,B.jsx)(cm,{theme:a,role:`listbox`,"aria-label":o(`nav.languageOptions`),children:l.map(e=>(0,B.jsxs)(lm,{theme:a,$active:e===s,type:`button`,role:`option`,"aria-selected":e===s,onClick:()=>g(e),children:[(0,B.jsx)(`span`,{children:h[e]}),e===s?(0,B.jsx)(Zd,{size:14}):null]},e))}):null]})]}),(0,B.jsxs)(nm,{theme:a,children:[o(`nav.goodLuck`),(0,B.jsx)(`br`,{}),(0,B.jsx)(`br`,{}),o(`nav.questions`),(0,B.jsxs)(`a`,{href:`https://discord.gg/Kh9hbHAZnX`,target:`_blank`,rel:`noreferrer`,children:[(0,B.jsx)(`br`,{}),o(`nav.battleSystemDiscord`)]}),`.`,(0,B.jsx)(`br`,{}),(0,B.jsxs)(`a`,{href:`https://www.patreon.com/c/battlesystem`,target:`_blank`,rel:`noreferrer`,children:[(0,B.jsx)(`br`,{}),o(`nav.patreon`)]}),`.`]}),(0,B.jsxs)(um,{theme:a,children:[i&&(0,B.jsx)(dm,{theme:a,$isActive:t===`ForgeMain`,onClick:()=>r(`ForgeMain`),children:o(`nav.main`)}),(0,B.jsx)(dm,{theme:a,$isActive:t===`Party`,onClick:()=>r(`Party`),children:o(`nav.party`)}),(0,B.jsx)(dm,{theme:a,$isActive:t===`ChatLog`,onClick:()=>r(`ChatLog`),children:o(`nav.systemLog`)}),d&&(0,B.jsx)(dm,{theme:a,$isActive:t===`System`,onClick:()=>r(`System`),children:o(`nav.system`)}),d&&(0,B.jsx)(dm,{theme:a,$isActive:t===`Settings`,onClick:()=>r(`Settings`),children:o(`nav.settings`)})]})]})}),e&&(0,B.jsx)(fm,{onClick:n}),(0,B.jsx)(pm,{children:(0,B.jsx)(mm,{theme:a,onClick:n,children:(0,B.jsx)(tt,{size:24})})})]})},gm=T.div`
  padding: 20px;
  color: ${e=>e.theme.PRIMARY};
  min-height: 100vh;
`,_m=T.h1`
  color: ${e=>e.theme.PRIMARY};
  background-color: ${e=>e.theme.OFFSET};
  padding: 2px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  font-variant: small-caps;
`,vm=T.div`
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 15px 0;
  backdrop-filter: blur(8px);
`;T.div`
  background-color: ${e=>e.theme.OFFSET};
  color: ${e=>e.theme.PRIMARY};
  padding: 12px 15px;
  border-radius: 6px 6px 0 0;
  margin: -20px -20px 15px -20px;
  font-weight: 600;
  font-size: 18px;
`;const ym=T.button`
  background-color: ${e=>f(e.theme.OFFSET,e.variant===`secondary`?.5:.75)};
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
    background-color: ${e=>f(e.theme.OFFSET,.9)};
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
`,bm=T.input`
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px 8px;
  font-size: 14px;
  width: 100%;
  
  &::placeholder {
    color: ${e=>f(e.theme.PRIMARY,.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`;T.textarea`
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
    color: ${e=>f(e.theme.PRIMARY,.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`,T.select`
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
`,T.label`
  color: ${e=>e.theme.PRIMARY};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
`,T.hr`
  border: none;
  border-top: 2px solid ${e=>e.theme.BORDER};
  margin: 20px 0;
`,T.p`
  color: ${e=>e.theme.PRIMARY};
  line-height: 1.6;
  margin: 10px 0;
`,T.span`
  background-color: ${e=>f(e.theme.OFFSET,.75)};
  color: ${e=>e.theme.PRIMARY};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 12px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
`,T.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,T.li`
  padding: 12px 15px;
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${e=>f(e.theme.OFFSET,.2)};
  }
`;var xm=T.button`
  ${{position:`relative`,display:`inline-flex`,height:`1.5rem`,width:`3rem`,alignItems:`center`,borderRadius:`9999px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isOn?f(e.theme.OFFSET,.8):f(e.theme.BORDER,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${e=>f(e.theme.OFFSET,.3)};
  }
  
  &::after {
    content: '';
    ${{display:`inline-block`,height:`1rem`,width:`1rem`,transform:`translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,borderRadius:`9999px`,transitionProperty:`transform`}}
    background-color: ${e=>e.theme.PRIMARY};
    ${e=>e.$isOn?`transform: translateX(1.375rem);`:`transform: translateX(0.25rem);`}
  }
`;const Z=({label:e,isOn:t,onChange:n})=>{let{theme:r}=It();return(0,B.jsx)(xm,{theme:r,$isOn:t,onClick:()=>{let r=!t;A.log(`${e}: ${r}`),n(r)},role:`switch`,"aria-checked":t,"aria-label":e})};var Sm=T.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${e=>e.$zIndexBase};
`,Cm=T.div`
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
`,wm=T.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 15px 0;
  font-size: 18px;
`,Tm=T.div`
  margin: 0 0 20px 0;
`,Em=T.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;const Dm=({isOpen:e,title:t,onClose:n,children:r,actions:i,closeOnOverlayClick:a=!0,minWidth:o,maxWidth:s,zIndexBase:c=9999})=>{let{theme:l}=It();return e?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Sm,{$zIndexBase:c,onClick:a?n:void 0}),(0,B.jsxs)(Cm,{theme:l,$minWidth:o,$maxWidth:s,$zIndexBase:c,onClick:e=>e.stopPropagation(),children:[t&&(0,B.jsx)(wm,{theme:l,children:t}),(0,B.jsx)(Tm,{children:r}),i&&(0,B.jsx)(Em,{children:i})]})]}):null},Om=e=>({reverseInitiative:e(`settings.tooltips.reverseInitiative`),popcornInitiative:e(`settings.tooltips.popcornInitiative`),initiativeDie:e(`settings.tooltips.initiativeDie`),initiativeModifierAttr:e(`settings.tooltips.initiativeModifierAttr`),initiativeModifierMath:e(`settings.tooltips.initiativeModifierMath`),showCardColumn:e(`settings.tooltips.showCardColumn`),showPlayerView:e(`settings.tooltips.showPlayerView`),showNonPartyUnits:e(`settings.tooltips.showNonPartyUnits`),showHpNumbersOnList:e(`settings.tooltips.showHpNumbersOnList`),ownerOnlyEdit:e(`settings.tooltips.ownerOnlyEdit`),showAdjustHpContextMenu:e(`settings.tooltips.showAdjustHpContextMenu`),showViewUnitContextMenuForPlayers:e(`settings.tooltips.showViewUnitContextMenuForPlayers`),showHpBarsOnTokens:e(`settings.tooltips.showHpBarsOnTokens`),hpOrientation:e(`settings.tooltips.hpOrientation`),showHpNumbersOnTokens:e(`settings.tooltips.showHpNumbersOnTokens`),showDeathEffect:e(`settings.tooltips.showDeathEffect`),showNamesOnTokens:e(`settings.tooltips.showNamesOnTokens`),showTurnEffect:e(`settings.tooltips.showTurnEffect`),useDescriptiveNames:e(`settings.tooltips.useDescriptiveNames`),enableRumble:e(`settings.tooltips.enableRumble`),enableBones:e(`settings.tooltips.enableBones`),enableDicePlus:e(`settings.tooltips.enableDicePlus`),enableTextBasedRolls:e(`settings.tooltips.enableTextBasedRolls`),enableObrNotification:e(`settings.tooltips.enableObrNotification`),showResultsToAll:e(`settings.tooltips.showResultsToAll`),enableDiscordLogging:e(`settings.tooltips.enableDiscordLogging`),discordUrl:e(`settings.tooltips.discordUrl`),enableConsoleLog:e(`settings.tooltips.enableConsoleLog`)}),km=()=>{let e=z(e=>e.systemData);return z(e=>e.cacheReady)?e?{theme:e.theme,cardLayout:e.cardLayout,listLayout:e.listLayout,attributes:e.attributes,systemName:e.systemName,importDate:e.importDate,isLoading:!1}:{theme:{primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,isLoading:!1}:{theme:null,cardLayout:[],listLayout:[],attributes:[],systemName:``,importDate:null,isLoading:!0}};var Am=T.h2`
  ${{marginBottom:`1rem`,paddingBottom:`0.5rem`,fontSize:`1.25rem`,fontWeight:`600`}}
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
`,Q=T.div`
  ${{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`}}
  color: ${e=>e.theme.PRIMARY};
`,$=T.label`
  ${{flex:`1 1 0%`,cursor:`pointer`,textAlign:`left`,fontSize:`1rem`}}
  color: ${e=>e.theme.PRIMARY};
`,jm=T.div`
  ${{marginLeft:`1rem`,display:`flex`,placeContent:`space-between`,alignItems:`center`,gap:`0.75rem`}}
  color: ${e=>e.theme.PRIMARY};
`,Mm=T.label`
  ${{fontSize:`0.875rem`}}
  text-align: left;
  color: ${e=>e.theme.PRIMARY};
`,Nm=T.p`
  ${{marginTop:`0.25rem`,fontSize:`0.75rem`}}
  color: ${e=>f(e.theme.PRIMARY,.7)};
`,Pm=T.input`
  ${{borderRadius:`0.25rem`,paddingLeft:`0.75rem`,paddingRight:`0.75rem`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`,fontSize:`0.875rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  width: 50%;
  
  &::placeholder {
    color: ${e=>f(e.theme.PRIMARY,.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`,Fm=T.select`
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
`,Im=T.button`
  background-color: ${e=>f(e.theme.OFFSET,.45)};
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
`,Lm=Zp.div({marginTop:`0.5rem`,display:`flex`,justifyContent:`center`,gap:`0.75rem`}),Rm=T.p`
  margin: 8px 0 0;
  font-size: 13px;
  color: ${e=>e.$connected?e.theme.PRIMARY:f(e.theme.PRIMARY,.75)};
`,zm=T.p`
  color: ${e=>f(e.theme.PRIMARY,.9)};
  margin: 0;
  line-height: 1.5;
`;const Bm=()=>{let{theme:e}=It(),{t}=_t(),{attributes:n}=km(),r=z(e=>e.roomMetadata);z(e=>e.sceneMetadata);let i=z(e=>e.items),a=z(e=>e.cacheReady),[o,s]=(0,R.useState)(!1),[l,u]=(0,R.useState)(!1),[d,f]=(0,R.useState)(`D20`),[m,h]=(0,R.useState)(!1),[g,_]=(0,R.useState)(``),[v,y]=(0,R.useState)(`@STAT`),[b,x]=(0,R.useState)(!1),[S,C]=(0,R.useState)(!1),[w,T]=(0,R.useState)(!0),[E,D]=(0,R.useState)(!1),[ee,te]=(0,R.useState)(!0),[ne,re]=(0,R.useState)(!0),[k,ie]=(0,R.useState)(!1),[ae,oe]=(0,R.useState)(`bottom`),[se,ce]=(0,R.useState)(!1),[le,ue]=(0,R.useState)(!1),[de,fe]=(0,R.useState)(!1),[pe,me]=(0,R.useState)(!1),[he,ge]=(0,R.useState)(!1),[_e,ve]=(0,R.useState)(!1),[ye,be]=(0,R.useState)(!1),[xe,Ce]=(0,R.useState)(!1),[we,Te]=(0,R.useState)(!1),[Ee,De]=(0,R.useState)(!1),[Oe,ke]=(0,R.useState)(!1),[Ae,je]=(0,R.useState)(!1),[Me,Ne]=(0,R.useState)(``),[Fe,Le]=(0,R.useState)(!1),Re=(0,R.useRef)(null),[ze,Be]=(0,R.useState)(()=>Ge()),[He,We]=(0,R.useState)(()=>Ve()),[Ke,qe]=(0,R.useState)(()=>Ue()),[Je,Ye]=(0,R.useState)(!1),[Xe,Qe]=(0,R.useState)(!1),N=Om(t);(0,R.useEffect)(()=>{let e=!0;return(async()=>{let t=await lt();e&&(Be(t&&Ge()),We(Ve()),qe(Ue()))})(),()=>{e=!1}},[]);let P=r;(0,R.useEffect)(()=>{if(a){if(P[O.POPCORN_INITIATIVE]!==void 0&&s(P[O.POPCORN_INITIATIVE]),P[O.REVERSE_INITIATIVE]!==void 0&&u(P[O.REVERSE_INITIATIVE]),P[O.DICE_RANGE]!==void 0&&f(P[O.DICE_RANGE]),P[O.INITIATIVE_MODIFIER_BID]===void 0?_(``):_(P[O.INITIATIVE_MODIFIER_BID]||``),P[O.INITIATIVE_MODIFIER_EXPR]!==void 0){let e=(P[O.INITIATIVE_MODIFIER_EXPR]||`@STAT`).replace(/\bx\b/gi,`@STAT`).trim();y(e.length>0?e:`@STAT`)}else y(`@STAT`);if(P[O.SHOW_CARD_ACCESS]!==void 0&&h(P[O.SHOW_CARD_ACCESS]),P[O.SHOW_PLAYER_VIEW]!==void 0&&x(P[O.SHOW_PLAYER_VIEW]),P[O.SHOW_OWNER_ONLY_EDIT]!==void 0&&D(P[O.SHOW_OWNER_ONLY_EDIT]),P[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?te(!0):te(P[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]),P[O.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===void 0?re(!0):re(P[O.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]),P[O.SHOW_NON_PARTY_UNITS]!==void 0&&C(P[O.SHOW_NON_PARTY_UNITS]),P[O.SHOW_LIST_HP_NUMBERS]===void 0?T(!0):T(P[O.SHOW_LIST_HP_NUMBERS]),P[O.SHOW_HP_BARS]!==void 0&&ie(P[O.SHOW_HP_BARS]),P[O.HP_BAR_ORIENTATION]!==void 0&&oe(P[O.HP_BAR_ORIENTATION]),P[O.SHOW_HP_NUMBERS]!==void 0&&ce(P[O.SHOW_HP_NUMBERS]),P[O.SHOW_DEATH_EFFECT]!==void 0&&ue(P[O.SHOW_DEATH_EFFECT]),P[O.SHOW_NAMES]!==void 0&&fe(P[O.SHOW_NAMES]),P[O.SHOW_TURN_EFFECT]!==void 0&&me(P[O.SHOW_TURN_EFFECT]),P[O.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&ge(P[O.USE_DESCRIPTIVE_DUPLICATES]),P[O.ENABLE_RUMBLE]!==void 0&&ve(P[O.ENABLE_RUMBLE]),P[O.ENABLE_BONES]!==void 0&&be(P[O.ENABLE_BONES]),P[O.ENABLE_DICE_PLUS]!==void 0&&Ce(P[O.ENABLE_DICE_PLUS]),P[O.ENABLE_TEXT_BASED_ROLLS]!==void 0&&Te(P[O.ENABLE_TEXT_BASED_ROLLS]),P[O.ENABLE_OBR_NOTIFICATION]!==void 0&&De(P[O.ENABLE_OBR_NOTIFICATION]),P[O.SHOW_NOTIFICATION_TO_ALL]!==void 0&&ke(P[O.SHOW_NOTIFICATION_TO_ALL]),P[O.ENABLE_DISCORD_LOGGING]!==void 0&&je(P[O.ENABLE_DISCORD_LOGGING]),P[O.DISCORD_URL]!==void 0&&Ne(P[O.DISCORD_URL]),P[O.ENABLE_CONSOLE_LOG]!==void 0){let e=P[O.ENABLE_CONSOLE_LOG];Le(e),A.setEnabled(e)}else Le(!1)}},[a,P]);let F=async(e,t)=>{await c.room.setMetadata({[e]:t})},$e=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},I=n.filter(e=>e.attr_type===`numb`).sort((e,t)=>(e.attr_name||``).localeCompare(t.attr_name||``)),et=(e,n)=>{let r=e.trim();return r?n?/@STAT/i.test(r)?/\d\s*d\s*\d|\bd\s*\d/i.test(r)?{valid:!1,error:t(`settings.diceNotAllowedError`)}:Ie(r.replace(/@STAT/gi,`@${n}`))?{valid:!0}:{valid:!1,error:t(`settings.invalidSyntaxError`)}:{valid:!1,error:t(`settings.exprMustIncludeStatError`)}:{valid:!1,error:t(`settings.selectNumericAttributeError`)}:{valid:!1,error:t(`settings.exprRequiredError`)}},tt=async(e,t)=>{await F(O.INITIATIVE_MODIFIER_BID,e),await F(O.INITIATIVE_MODIFIER_EXPR,t)},nt=async e=>{if(_(e),!e){await tt(``,v);return}let n=et(v,e);n.valid||await c.notification.show(n.error||t(`settings.invalidModifierSettingsError`),`WARNING`),await tt(e,v)},rt=async()=>{let e=v.trim(),n=(e.length>0?e:`@STAT`).replace(/\bx\b/gi,`@STAT`);if(y(n),!g){await tt(``,n);return}let r=et(n,g);if(!r.valid){await c.notification.show(r.error||t(`settings.invalidModifierExpressionError`),`WARNING`);return}await tt(g,n)},at=async()=>{if(!g){await c.notification.show(t(`settings.selectAttributeBeforeTestingError`),`WARNING`);return}let e=v.replace(/\bx\b/gi,`@STAT`),n=et(e,g);if(!n.valid){await c.notification.show(n.error||t(`settings.invalidModifierExpressionError`),`WARNING`);return}let r=$e(d),i=Math.floor(Math.random()*r)+1,a=it(e.replace(/@STAT/gi,`@${g}`),{bidValueMap:{[g]:14},onMissingBid:`useZero`});if(!a.valid||!a.notation){await c.notification.show(t(`settings.couldNotResolveModifierError`),`ERROR`);return}let o=Number(a.notation),s=Number.isFinite(o)?Math.trunc(o):0,l=i+s,u=e.replace(/@STAT/gi,`14`);await c.notification.show(t(`settings.mockInitiativeResult`,{sides:r,baseRoll:i,expression:u,modifier:s,total:l}),`SUCCESS`)},ot=async()=>{try{let e=await Se(),n=JSON.stringify(e,null,2),r=new Blob([n],{type:`text/plain;charset=utf-8`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`forge-collection-${new Date().toISOString().slice(0,10)}.txt`,a.click(),URL.revokeObjectURL(i),await c.notification.show(t(`settings.collectionExportComplete`,{count:e.length}),`SUCCESS`)}catch(e){A.log(`Collection export failed`,e),await c.notification.show(t(`settings.collectionExportFailed`),`ERROR`)}},st=()=>{Qe(!0)},ct=()=>{Qe(!1),Re.current?.click()},ut=async e=>{let n=e.target.files?.[0];if(n)try{let e=await n.text(),r=JSON.parse(e);if(!Array.isArray(r)){await c.notification.show(t(`settings.collectionImportArrayError`),`ERROR`);return}let i=await Pe(r);await c.notification.show(t(`settings.collectionImportCompleteSummary`,{created:i.created,updated:i.updated,skipped:i.skipped}),`SUCCESS`)}catch(e){A.log(`Collection import failed`,e),await c.notification.show(t(`settings.collectionImportFailed`),`ERROR`)}finally{e.target.value=``}},dt=async()=>{Ye(!0);try{await Ze(),Be(Ge()),We(Ve()),qe(Ue()),await c.notification.show(t(`settings.connectedAccount`),`SUCCESS`)}catch(e){A.error(`Battle-System auth connection failed`,e),await c.notification.show(t(`settings.unableToConnectAccount`),`ERROR`),Be(Ge()),We(Ve()),qe(Ue())}finally{Ye(!1)}};return(0,B.jsxs)(qd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[(0,B.jsxs)(gm,{theme:e,children:[(0,B.jsx)(_m,{theme:e,children:t(`settings.pageTitle`)}),(0,B.jsxs)(vm,{theme:e,children:[(0,B.jsx)(Am,{theme:e,children:t(`settings.accountSectionTitle`)}),(0,B.jsx)(Lm,{children:(0,B.jsx)(ym,{theme:e,onClick:()=>{dt()},disabled:Je,children:t(Je?`settings.connecting`:ze?`settings.reconnectAccount`:`settings.connectAccount`)})}),(0,B.jsx)(Rm,{theme:e,$connected:ze,children:ze?t(`settings.statusConnected`,{tier:He}):t(`settings.statusDisconnected`)})]}),(0,B.jsxs)(vm,{theme:e,children:[(0,B.jsx)(Am,{theme:e,children:t(`settings.collectionSectionTitle`)}),(0,B.jsxs)(Lm,{children:[(0,B.jsx)(ym,{theme:e,onClick:ot,children:t(`settings.export`)}),(0,B.jsx)(ym,{theme:e,onClick:st,children:t(`settings.import`)})]}),(0,B.jsx)(`input`,{ref:Re,type:`file`,accept:`.txt,.json,text/plain,application/json`,onChange:ut,style:{display:`none`}})]}),(0,B.jsxs)(vm,{theme:e,children:[(0,B.jsx)(Am,{theme:e,children:t(`settings.listControlsSectionTitle`)}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.reverseInitiative,children:t(`settings.reverseInitiative`)})}),(0,B.jsx)(Z,{label:t(`settings.reverseInitiative`),isOn:l,onChange:async e=>{u(e),await F(O.REVERSE_INITIATIVE,e),e&&o&&(s(!1),await F(O.POPCORN_INITIATIVE,!1))}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.popcornInitiative,children:t(`settings.popcornInitiative`)})}),(0,B.jsx)(Z,{label:t(`settings.popcornInitiative`),isOn:o,onChange:async e=>{s(e),await F(O.POPCORN_INITIATIVE,e),e&&l&&(u(!1),await F(O.REVERSE_INITIATIVE,!1))}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.initiativeDie,children:t(`settings.initiativeDie`)})}),(0,B.jsx)(Pm,{theme:e,type:`text`,value:d,onChange:async e=>{let t=e.target.value;f(t),await F(O.DICE_RANGE,t),A.log(`Dice Range:`,t)},placeholder:`D20`,maxLength:3})]}),(0,B.jsxs)(jm,{theme:e,children:[(0,B.jsx)(Mm,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.initiativeModifierAttr,children:t(`settings.initiativeModifier`)})}),(0,B.jsxs)(Fm,{theme:e,value:g,onChange:async e=>{await nt(e.target.value)},children:[(0,B.jsx)(`option`,{value:``,children:t(`settings.none`)}),I.map(e=>(0,B.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,B.jsxs)(jm,{theme:e,children:[(0,B.jsx)(Mm,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.initiativeModifierMath,children:t(`settings.math`)})}),(0,B.jsx)(Pm,{theme:e,type:`text`,value:v,onChange:e=>{y(e.target.value)},onBlur:async()=>{await rt()},placeholder:`floor((@STAT-10)/2)`,maxLength:120,disabled:!g}),(0,B.jsx)(Im,{theme:e,type:`button`,onClick:()=>{at()},disabled:!g,children:t(`settings.test`)})]}),(0,B.jsx)(Nm,{theme:e,children:t(`settings.initiativeModifierHint`)}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.showCardColumn,children:t(`settings.showCardColumn`)})}),(0,B.jsx)(Z,{label:t(`settings.showCardColumn`),isOn:m,onChange:async e=>{h(e),await F(O.SHOW_CARD_ACCESS,e)}})]})]}),(0,B.jsxs)(vm,{theme:e,children:[(0,B.jsx)(Am,{theme:e,children:t(`settings.playerControlsSectionTitle`)}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.showPlayerView,children:t(`settings.showPlayerView`)})}),(0,B.jsx)(Z,{label:t(`settings.showPlayerView`),isOn:b,onChange:async e=>{x(e),await F(O.SHOW_PLAYER_VIEW,e)}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.showNonPartyUnits,children:t(`settings.showNonPartyUnits`)})}),(0,B.jsx)(Z,{label:t(`settings.showNonPartyUnits`),isOn:S,onChange:async e=>{C(e),await F(O.SHOW_NON_PARTY_UNITS,e)}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.showHpNumbersOnList,children:t(`settings.showHpNumbersOnList`)})}),(0,B.jsx)(Z,{label:t(`settings.showHpNumbersOnList`),isOn:w,onChange:async e=>{T(e),await F(O.SHOW_LIST_HP_NUMBERS,e)}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.ownerOnlyEdit,children:t(`settings.ownerOnlyEdit`)})}),(0,B.jsx)(Z,{label:t(`settings.ownerOnlyEdit`),isOn:E,onChange:async e=>{D(e),await F(O.SHOW_OWNER_ONLY_EDIT,e)}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.showAdjustHpContextMenu,children:t(`settings.showAdjustHpContextMenu`)})}),(0,B.jsx)(Z,{label:t(`settings.showAdjustHpContextMenu`),isOn:ee,onChange:async e=>{te(e),await F(O.SHOW_MODIFY_UNIT_CONTEXT_MENU,e)}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.showViewUnitContextMenuForPlayers,children:t(`settings.showViewUnitContextMenuForPlayers`)})}),(0,B.jsx)(Z,{label:t(`settings.showViewUnitContextMenuForPlayers`),isOn:ne,onChange:async e=>{re(e),await F(O.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS,e)}})]})]}),(0,B.jsxs)(vm,{theme:e,children:[(0,B.jsx)(Am,{theme:e,children:t(`settings.gameControlsSectionTitle`)}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.showHpBarsOnTokens,children:t(`settings.showHpBarsOnTokens`)})}),(0,B.jsx)(Z,{label:t(`settings.showHpBarsOnTokens`),isOn:k,onChange:async e=>{ie(e),await F(O.SHOW_HP_BARS,e),e&&se&&(ce(!1),await F(O.SHOW_HP_NUMBERS,!1)),e&&P[O.HP_BAR_ORIENTATION]===void 0&&(oe(`bottom`),await F(O.HP_BAR_ORIENTATION,`bottom`))}})]}),(k||se)&&(0,B.jsxs)(jm,{theme:e,children:[(0,B.jsx)(Mm,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.hpOrientation,children:t(`settings.orientation`)})}),(0,B.jsxs)(Fm,{theme:e,value:ae,onChange:async e=>{let t=e.target.value;oe(t),await F(O.HP_BAR_ORIENTATION,t)},children:[(0,B.jsx)(`option`,{value:`top`,children:t(`common.orientation.top`)}),(0,B.jsx)(`option`,{value:`bottom`,children:t(`common.orientation.bottom`)}),(0,B.jsx)(`option`,{value:`left`,children:t(`common.orientation.left`)}),(0,B.jsx)(`option`,{value:`right`,children:t(`common.orientation.right`)})]})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.showHpNumbersOnTokens,children:t(`settings.showHpNumbersOnTokens`)})}),(0,B.jsx)(Z,{label:t(`settings.showHpNumbersOnTokens`),isOn:se,onChange:async e=>{ce(e),await F(O.SHOW_HP_NUMBERS,e),e&&k&&(ie(!1),await F(O.SHOW_HP_BARS,!1)),e&&P[O.HP_BAR_ORIENTATION]===void 0&&(oe(`bottom`),await F(O.HP_BAR_ORIENTATION,`bottom`))}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.showDeathEffect,children:t(`settings.showDeathEffect`)})}),(0,B.jsx)(Z,{label:t(`settings.showDeathEffect`),isOn:le,onChange:async e=>{ue(e),await F(O.SHOW_DEATH_EFFECT,e)}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.showNamesOnTokens,children:t(`settings.showNamesOnTokens`)})}),(0,B.jsx)(Z,{label:t(`settings.showNamesOnTokens`),isOn:de,onChange:async e=>{fe(e),await F(O.SHOW_NAMES,e);let t=i.filter(e=>e.metadata[p.ON_LIST]===!0);e?(A.log(`Showing names on tokens`),await c.scene.items.updateItems(t,e=>{for(let t of e){let e=t.metadata[p.UNIT_NAME],n=t;e&&n.text&&(n.text.plainText=String(e))}})):(A.log(`Hiding names on tokens`),await c.scene.items.updateItems(t,e=>{for(let t of e){let e=t;e.text&&(e.text.plainText=``)}}))}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.showTurnEffect,children:t(`settings.showTurnEffect`)})}),(0,B.jsx)(Z,{label:t(`settings.showTurnEffect`),isOn:pe,onChange:async e=>{me(e),await F(O.SHOW_TURN_EFFECT,e)}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.useDescriptiveNames,children:t(`settings.useDescriptiveNames`)})}),(0,B.jsx)(Z,{label:t(`settings.useDescriptiveNames`),isOn:he,onChange:async e=>{ge(e),await F(O.USE_DESCRIPTIVE_DUPLICATES,e)}})]})]}),(0,B.jsxs)(vm,{theme:e,children:[(0,B.jsx)(Am,{theme:e,children:t(`settings.diceControlsSectionTitle`)}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.enableTextBasedRolls,children:t(`settings.enableTextBasedRolls`)})}),(0,B.jsx)(Z,{label:t(`settings.enableTextBasedRolls`),isOn:we,onChange:async e=>{Te(e),await F(O.ENABLE_TEXT_BASED_ROLLS,e),e&&(De(!0),ve(!1),be(!1),Ce(!1),await F(O.ENABLE_OBR_NOTIFICATION,!0),await F(O.ENABLE_RUMBLE,!1),await F(O.ENABLE_BONES,!1),await F(O.ENABLE_DICE_PLUS,!1))}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.enableRumble,children:t(`settings.enableRumble`)})}),(0,B.jsx)(Z,{label:t(`settings.enableRumble`),isOn:_e,onChange:async e=>{ve(e),await F(O.ENABLE_RUMBLE,e),e&&(be(!1),Ce(!1),Te(!1),await F(O.ENABLE_BONES,!1),await F(O.ENABLE_DICE_PLUS,!1),await F(O.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.enableBones,children:t(`settings.enableBones`)})}),(0,B.jsx)(Z,{label:t(`settings.enableBones`),isOn:ye,onChange:async e=>{be(e),await F(O.ENABLE_BONES,e),e&&(ve(!1),Ce(!1),Te(!1),await F(O.ENABLE_RUMBLE,!1),await F(O.ENABLE_DICE_PLUS,!1),await F(O.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.enableDicePlus,children:t(`settings.enableDicePlus`)})}),(0,B.jsx)(Z,{label:t(`settings.enableDicePlus`),isOn:xe,onChange:async e=>{Ce(e),await F(O.ENABLE_DICE_PLUS,e),e&&(ve(!1),be(!1),Te(!1),await F(O.ENABLE_RUMBLE,!1),await F(O.ENABLE_BONES,!1),await F(O.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.enableObrNotification,children:t(`settings.enableObrNotification`)})}),(0,B.jsx)(Z,{label:t(`settings.enableObrNotification`),isOn:Ee,onChange:async e=>{De(e),await F(O.ENABLE_OBR_NOTIFICATION,e)}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.showResultsToAll,children:t(`settings.showResultsToAll`)})}),(0,B.jsx)(Z,{label:t(`settings.showResultsToAll`),isOn:Oe,onChange:async e=>{ke(e),await F(O.SHOW_NOTIFICATION_TO_ALL,e)}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.enableDiscordLogging,children:t(`settings.enableDiscordLogging`)})}),(0,B.jsx)(Z,{label:t(`settings.enableDiscordLogging`),isOn:Ae,onChange:async e=>{if(e&&!M(Me.trim())){await c.notification.show(t(`settings.invalidDiscordWebhookWarning`),`WARNING`),je(!1),await F(O.ENABLE_DISCORD_LOGGING,!1);return}je(e),await F(O.ENABLE_DISCORD_LOGGING,e)}})]}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)(Mm,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.discordUrl,children:t(`settings.discordUrl`)})}),(0,B.jsx)(Pm,{theme:e,type:`text`,value:Me,onChange:async e=>{let t=e.target.value,n=t.trim();Ne(t),await F(O.DISCORD_URL,n),A.log(`Discord URL:`,n)},placeholder:`https://discord.com/api/webhooks/...`,maxLength:200})]})]}),(0,B.jsxs)(vm,{theme:e,children:[(0,B.jsx)(Am,{theme:e,children:t(`settings.otherSectionTitle`)}),(0,B.jsxs)(Q,{theme:e,children:[(0,B.jsx)($,{theme:e,children:(0,B.jsx)(j,{theme:e,text:N.enableConsoleLog,children:t(`settings.enableConsoleLog`)})}),(0,B.jsx)(Z,{label:t(`settings.enableConsoleLog`),isOn:Fe,onChange:async e=>{Le(e),A.setEnabled(e),await F(O.ENABLE_CONSOLE_LOG,e)}})]})]})]}),(0,B.jsx)(Dm,{isOpen:Xe,title:t(`settings.confirmImportTitle`),onClose:()=>Qe(!1),actions:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(ym,{theme:e,variant:`secondary`,onClick:()=>Qe(!1),children:t(`settings.cancel`)}),(0,B.jsx)(ym,{theme:e,onClick:ct,children:t(`settings.continue`)})]}),children:(0,B.jsx)(zm,{theme:e,children:t(`settings.importConfirmMessage`)})})]})};var Vm=T.div`
  ${{display:`flex`,height:`100%`,flexDirection:`column`,padding:`1rem`}}
`,Hm=T.div`
  ${{flex:`1 1 0%`,overflowY:`auto`,borderRadius:`0.5rem`,borderWidth:`2px`,"--tw-border-opacity":`1`,borderColor:`rgb(255 255 255 / var(--tw-border-opacity, 1))`,padding:`0.5rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  margin: 10px;
  white-space: break-spaces;
  word-wrap: break-word;
  margin-bottom: 50px;
`,Um=T.div`
  ${{marginBottom:`0.5rem`,textAlign:`left`}}
`,Wm=T.span`
  ${{marginRight:`0.5rem`,fontSize:`0.75rem`,"--tw-text-opacity":`1`,color:`rgb(203 213 224 / var(--tw-text-opacity, 1))`}}
`,Gm=T.span`
  ${{fontSize:`0.875rem`,"--tw-text-opacity":`1`,color:`rgb(255 255 255 / var(--tw-text-opacity, 1))`}}
`;const Km=()=>{let e=kt(e=>e.messages),t=(0,R.useRef)(null),{theme:n}=It(),{t:r}=_t();return(0,R.useEffect)(()=>{t.current?.scrollIntoView({behavior:`smooth`})},[e]),(0,B.jsx)(qd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,B.jsxs)(Vm,{children:[(0,B.jsx)(_m,{theme:n,children:r(`nav.systemLog`)}),(0,B.jsxs)(Hm,{children:[e.map(e=>(0,B.jsxs)(Um,{children:[(0,B.jsx)(Wm,{children:e.timestamp}),(0,B.jsx)(Gm,{children:e.text})]},e.id)),(0,B.jsx)(`div`,{ref:t})]})]})})},qm=`buff_effect_one`,Jm=`debuff_effect_one`,Ym=[{value:`buff_effect_one`,label:`Buff Effect One`},{value:`buff_effect_two`,label:`Buff Effect Two`}],Xm=[{value:`debuff_effect_one`,label:`Debuff Effect One`},{value:`debuff_effect_two`,label:`Debuff Effect Two`}],Zm=e=>Ym.some(t=>t.value===e),Qm=e=>Xm.some(t=>t.value===e),$m=e=>{switch(e){case`buff_effect_two`:return`
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
`}},eh=e=>{switch(e){case`debuff_effect_two`:return`
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
`}};var th=t.EXTENSIONID,nh=`com.battle-system.forge`;const rh={SYSTEM_NAME:`${th}/SystemName`,IMPORT_DATE:`${th}/ImportDate`,SNAPSHOT_PUBLIC_ID:`${th}/SnapshotPublicId`};var ih=vt(E.attributes),ah=(e,t)=>e instanceof Error&&e.message?e.message:t,oh=T.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,sh=T.div`
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`,ch=T.h2`
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  padding: 12px 15px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 400;
`,lh=T.p`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`,uh=T.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 15px;
`,dh=T.div`
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
`,fh=T.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.theme.PRIMARY};
  margin-top: 5px;
`,ph=T.div`
  margin-top: 16px;
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 14px;
`,mh=T.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 10px 0;
  font-size: 15px;
`,hh=T.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`,gh=T.label`
  color: ${e=>e.theme.PRIMARY};
  min-width: 84px;
  font-size: 13px;
`,_h=T.select`
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
`,vh=T.div`
  background-color: ${()=>f(`#FF0000`,.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,yh=T.div`
  background-color: ${()=>f(`#00FF00`,.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,bh=T.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`,xh=T.p`
  color: ${e=>f(e.theme.PRIMARY,.9)};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,Sh=T.div`
  margin-top: 30px;
`,Ch=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,wh=T.div`
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Th=T.div`
  flex: 1;
`,Eh=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`,Dh=T.div`
  color: ${e=>f(e.theme.PRIMARY,.7)};
  font-size: 13px;
  font-style: italic;
`,Oh=T.div`
  display: flex;
  gap: 8px;
`,kh=T.button`
  background-color: ${e=>e.$variant===`danger`?f(`#FF0000`,.2):f(e.theme.OFFSET,.5)};
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
    background-color: ${e=>e.$variant===`danger`?f(`#FF0000`,.3):e.theme.OFFSET};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Ah={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}};const jh=()=>{let{theme:e,updateThemeFromSystem:t}=It(),{t:n,locale:r}=_t(),i=z(e=>e.sceneMetadata),a=z(e=>e.roomMetadata),o=a,s=z(e=>e.systemData),l=z(e=>e.setSystemData),[u,d]=(0,R.useState)(()=>Re().premiumAuthorized),[p,m]=(0,R.useState)(``),[h,g]=(0,R.useState)(!1),[_,v]=(0,R.useState)(null),[y,b]=(0,R.useState)(null),[x,S]=(0,R.useState)(``),[w,T]=(0,R.useState)(null),[D,ee]=(0,R.useState)(null),[te,ne]=(0,R.useState)([]),[re,k]=(0,R.useState)(``),[ie,ae]=(0,R.useState)(``),[oe,se]=(0,R.useState)(qm),[j,ce]=(0,R.useState)(Jm),[le,ue]=(0,R.useState)(!1),[de,fe]=(0,R.useState)(!1),[pe,me]=(0,R.useState)(null),[he,_e]=(0,R.useState)(null),[M,ye]=(0,R.useState)([]),[be,xe]=(0,R.useState)(!1),[Se,Ce]=(0,R.useState)(null),[we,Te]=(0,R.useState)(``),Ee={buff_effect_one:n(`system.buffVisualPreset.buff_effect_one`),buff_effect_two:n(`system.buffVisualPreset.buff_effect_two`)},De={debuff_effect_one:n(`system.debuffVisualPreset.debuff_effect_one`),debuff_effect_two:n(`system.debuffVisualPreset.debuff_effect_two`)};(0,R.useEffect)(()=>{let e=!0,t=async()=>{await lt(),e&&d(Re().premiumAuthorized)},n=je(t=>{e&&d(t.premiumAuthorized)});return t(),()=>{e=!1,n()}},[]),(0,R.useEffect)(()=>{Oe(),Ne()},[i,a,s,u]);let Oe=()=>{try{if(!u){let e={primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},t=o[O.BUFF_VISUAL_PRESET],n=o[O.DEBUFF_VISUAL_PRESET],r=Zm(t)?t:qm,i=Qm(n)?n:Jm;S(E.name),T(null),ee(e),ne(E.attributes),k(ih.currentHpBid),ae(ih.maxHpBid),se(r),ce(i);return}if(s){let e=o[O.HP_CURRENT_BID],t=o[O.HP_MAX_BID],n=o[O.BUFF_VISUAL_PRESET],r=o[O.DEBUFF_VISUAL_PRESET],i=Zm(n)?n:null,a=Qm(r)?r:null;S(s.systemName),T(s.importDate),ee(s.theme),ne(s.attributes),k(e||``),ae(t||``),pe&&i===pe&&me(null),he&&a===he&&_e(null),!le&&!pe&&se(e=>i||e),!de&&!he&&ce(e=>a||e);return}let e=a[rh.SYSTEM_NAME],t=a[rh.IMPORT_DATE],n=o[O.HP_CURRENT_BID],r=o[O.HP_MAX_BID],i=o[O.BUFF_VISUAL_PRESET],c=o[O.DEBUFF_VISUAL_PRESET],l=Zm(i)?i:null,d=Qm(c)?c:null;S(e||E.name),T(t||null),ee({primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url}),ne(E.attributes),k(n||``),ae(r||``),pe&&l===pe&&me(null),he&&d===he&&_e(null),!le&&!pe&&se(e=>l||e),!de&&!he&&ce(e=>d||e)}catch(e){A.error(`Error loading system from cache:`,e)}},ke=async(e,t)=>{await c.room.setMetadata({[e]:t})},Ae=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let r;try{r=JSON.parse(e)}catch{throw Error(n(`system.error.invalidJsonField`,{field:t}))}if(!Array.isArray(r))throw Error(n(`system.error.invalidArrayField`,{field:t}));return r}throw Error(n(`system.error.invalidFieldType`,{field:t}))},Me=te.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`numb`||t===`resource`}),Ne=()=>{try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(n&&n.startsWith(`${nh}.`)&&n.endsWith(`.backup`)){let t=localStorage.getItem(n);if(t){let n=JSON.parse(t);e.push(n)}}}e.sort((e,t)=>new Date(t.backupDate).getTime()-new Date(e.backupDate).getTime()),ye(e)}catch(e){A.error(`Error loading backups:`,e)}},Pe=async e=>{try{if(!s){A.warn(`Cannot create backup: runtime system data is unavailable`);return}let e=s.systemName||E.name,t={name:e,backupDate:new Date().toISOString(),theme_primary:s.theme.primary,theme_offset:s.theme.offset,theme_background:s.theme.background,theme_border:s.theme.border,background_url:s.theme.background_url,card_layout:s.cardLayout,list_layout:s.listLayout,attributes:s.attributes},n=`${nh}.${e}.backup`;localStorage.setItem(n,JSON.stringify(t)),A.log(`Backup created for ${e}`),Ne()}catch(e){throw A.error(`Error creating backup:`,e),e}},Fe=e=>{try{let t=`${nh}.${e}.backup`;localStorage.removeItem(t),A.log(`Backup deleted for ${e}`),Ne(),b(n(`system.success.backupDeleted`,{name:e}))}catch(e){A.error(`Error deleting backup:`,e),v(n(`system.error.deleteBackup`))}},Ie=(e,t)=>{Te(e),Ce(()=>t),xe(!0)},Le=async()=>{xe(!1),Se&&(await Se(),Ce(null))},ze=()=>{xe(!1),Ce(null),Te(``)},Be=async()=>{if(!p.trim()){v(n(`system.error.enterShareId`));return}Ie(n(`system.confirm.importSystem`),async()=>{await Ve()})},Ve=async()=>{if(!Ue()){v(n(`system.error.premiumImport`));return}g(!0),v(null),b(null);try{await st();let{data:e,error:r}=await mt(async()=>C.rpc(`bs_forge_import_system_snapshot`,{p_source_share_id:p.trim()}));if(r)throw r;if(!e){v(n(`system.error.noSystemFound`)),g(!1);return}let i=Array.isArray(e)?e[0]:e;if(!i||typeof i.snapshot_public_id!=`string`)throw Error(n(`system.error.snapshotInvalid`));let a=Ae(i.card_layout,`card_layout`),o=Ae(i.list_layout,`list_layout`),s=Ae(i.attributes,`attributes`);if(!Array.isArray(s))throw Error(n(`system.error.attributesInvalid`));await Pe(x);let u={primary:i.theme_primary,offset:i.theme_offset,background:i.theme_background,border:i.theme_border,background_url:i.background_url},d=new Date().toISOString();await c.room.setMetadata({[rh.SNAPSHOT_PUBLIC_ID]:i.snapshot_public_id,[rh.SYSTEM_NAME]:i.system_name,[rh.IMPORT_DATE]:d}),l({theme:u,cardLayout:a,listLayout:o,attributes:s,systemName:i.system_name,importDate:d,snapshotPublicId:i.snapshot_public_id}),S(i.system_name),T(d),ee(u),t(u.primary,u.offset,u.background,u.border,u.background_url),b(n(`system.success.systemImported`,{name:i.system_name})),m(``),A.log(`System snapshot imported and loaded:`,{systemName:i.system_name,snapshotPublicId:i.snapshot_public_id})}catch(e){A.error(`Error fetching system:`,e),v(ah(e,n(`system.error.fetchSystem`)))}finally{g(!1)}},He=async e=>{Ie(n(`system.confirm.restoreBackup`,{name:e.name}),async()=>{await We(e)})},We=async e=>{g(!0),v(null),b(null);try{if(!Ue()){v(n(`system.error.premiumRestore`));return}await st(),await Pe(x);let r={primary:e.theme_primary,offset:e.theme_offset,background:e.theme_background,border:e.theme_border,background_url:e.background_url};if(!Array.isArray(e.card_layout)||!Array.isArray(e.list_layout)||!Array.isArray(e.attributes))throw Error(n(`system.error.backupInvalid`));let i=new Date().toISOString(),a=`forge-backup:${e.name.trim().toLowerCase()}`,{data:o,error:s}=await mt(async()=>C.rpc(`bs_forge_upsert_user_snapshot_payload`,{p_source_share_id:a,p_system_name:e.name,p_background_url:e.background_url,p_theme_primary:e.theme_primary,p_theme_offset:e.theme_offset,p_theme_background:e.theme_background,p_theme_border:e.theme_border,p_card_layout:e.card_layout,p_list_layout:e.list_layout,p_attributes:e.attributes}));if(s)throw s;let u=Array.isArray(o)?o[0]:o;if(!u||typeof u.snapshot_public_id!=`string`)throw Error(n(`system.error.backupPublishFailed`));l({theme:r,cardLayout:e.card_layout,listLayout:e.list_layout,attributes:e.attributes,systemName:e.name,importDate:i,snapshotPublicId:u.snapshot_public_id}),await c.room.setMetadata({[rh.SNAPSHOT_PUBLIC_ID]:u.snapshot_public_id,[rh.SYSTEM_NAME]:e.name,[rh.IMPORT_DATE]:i}),S(e.name),T(i),ee(r),t(r.primary,r.offset,r.background,r.border,r.background_url),b(n(`system.success.backupRestored`,{name:e.name})),A.log(`System restored from backup:`,e.name)}catch(e){A.error(`Error restoring backup:`,e),v(n(`system.error.restoreBackup`))}finally{g(!1)}},Ge=async()=>{g(!0),v(null),b(null);try{let e={primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url};l({theme:e,cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,snapshotPublicId:null}),await c.room.setMetadata({[rh.SNAPSHOT_PUBLIC_ID]:null,[rh.SYSTEM_NAME]:E.name,[rh.IMPORT_DATE]:null}),S(E.name),T(null),ee(e),t(e.primary,e.offset,e.background,e.border,e.background_url),b(n(`system.success.resetDefault`))}catch(e){v(n(`system.error.resetDefault`)),A.error(`Error resetting to default:`,e)}finally{g(!1)}},Ke=e=>e?new Date(e).toLocaleDateString(r,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):null,qe=!u,Je=!u;return(0,B.jsxs)(qd.div,{variants:Ah,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,B.jsxs)(gm,{theme:e,children:[(0,B.jsx)(_m,{theme:e,children:n(`system.pageTitle`)}),(0,B.jsx)(ch,{theme:e,children:x}),w?(0,B.jsx)(lh,{theme:e,children:n(`system.importedOn`,{value:Ke(w)})}):(0,B.jsx)(lh,{theme:e,children:n(`system.usingDefaultSystem`)}),D&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(uh,{children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(dh,{color:D.primary,theme:e,children:D.primary}),(0,B.jsx)(fh,{theme:e,children:n(`system.swatch.primary`)})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(dh,{color:D.offset,theme:e,children:D.offset}),(0,B.jsx)(fh,{theme:e,children:n(`system.swatch.offset`)})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(dh,{color:D.background,theme:e,children:D.background}),(0,B.jsx)(fh,{theme:e,children:n(`system.swatch.background`)})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(dh,{color:D.border,theme:e,children:D.border}),(0,B.jsx)(fh,{theme:e,children:n(`system.swatch.border`)})]})]}),(0,B.jsxs)(ph,{theme:e,children:[(0,B.jsx)(mh,{theme:e,children:n(`system.settingsSectionTitle`)}),(0,B.jsxs)(hh,{children:[(0,B.jsx)(gh,{theme:e,children:n(`system.currentHp`)}),(0,B.jsxs)(_h,{theme:e,value:re,disabled:Je,onChange:async e=>{if(Je)return;let t=e.target.value;k(t),await ke(O.HP_CURRENT_BID,t)},children:[(0,B.jsx)(`option`,{value:``,children:n(`system.selectAttribute`)}),Me.map(e=>(0,B.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?n(`system.resourceOptionSuffix`):``]},e.attr_bid))]})]}),(0,B.jsxs)(hh,{children:[(0,B.jsx)(gh,{theme:e,children:n(`system.maxHp`)}),(0,B.jsxs)(_h,{theme:e,value:ie,disabled:Je,onChange:async e=>{if(Je)return;let t=e.target.value;ae(t),await ke(O.HP_MAX_BID,t)},children:[(0,B.jsx)(`option`,{value:``,children:n(`system.selectAttribute`)}),Me.map(e=>(0,B.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?n(`system.resourceOptionSuffix`):``]},e.attr_bid))]})]}),Je&&(0,B.jsx)(lh,{theme:e,children:n(`system.premiumHpMappingLocked`)}),(0,B.jsxs)(hh,{children:[(0,B.jsx)(gh,{theme:e,children:n(`system.buffVisual`)}),(0,B.jsx)(_h,{theme:e,value:oe,onChange:async e=>{let t=e.target.value;if(Zm(t)){se(t),me(t),ue(!0);try{await ke(O.BUFF_VISUAL_PRESET,t)}finally{ue(!1)}}},children:Ym.map(e=>(0,B.jsx)(`option`,{value:e.value,children:Ee[e.value]},e.value))})]}),(0,B.jsxs)(hh,{children:[(0,B.jsx)(gh,{theme:e,children:n(`system.debuffVisual`)}),(0,B.jsx)(_h,{theme:e,value:j,onChange:async e=>{let t=e.target.value;if(Qm(t)){ce(t),_e(t),fe(!0);try{await ke(O.DEBUFF_VISUAL_PRESET,t)}finally{fe(!1)}}},children:Xm.map(e=>(0,B.jsx)(`option`,{value:e.value,children:De[e.value]},e.value))})]})]})]}),(0,B.jsxs)(sh,{theme:e,children:[(0,B.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0},children:n(`system.importSectionTitle`)}),(0,B.jsx)(`p`,{style:{color:f(e.PRIMARY,.8),fontSize:`14px`},children:n(qe?`system.importLockedDescription`:`system.importDescription`)}),(0,B.jsx)(oh,{children:(0,B.jsx)(bm,{theme:e,type:`text`,value:p,onChange:e=>m(e.target.value),placeholder:qe?``:n(`system.shareIdPlaceholder`),disabled:h||qe,onKeyPress:e=>e.key===`Enter`&&Be()})}),(0,B.jsxs)(bh,{children:[(0,B.jsx)(ym,{theme:e,onClick:Be,disabled:h||qe||!p.trim(),children:n(h?`system.importButtonLoading`:`system.importButton`)}),(0,B.jsx)(ym,{theme:e,variant:`secondary`,onClick:Ge,disabled:h,children:n(`system.useDefaultButton`)})]})]}),_&&(0,B.jsxs)(vh,{theme:e,children:[(0,B.jsx)(`strong`,{children:n(`system.errorPrefix`)}),` `,_]}),y&&(0,B.jsxs)(yh,{theme:e,children:[(0,B.jsx)(`strong`,{children:n(`system.successPrefix`)}),` `,y]}),M.length>0&&(0,B.jsx)(Sh,{children:(0,B.jsxs)(vm,{theme:e,children:[(0,B.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0,marginBottom:`15px`},children:n(`system.backupsSectionTitle`)}),(0,B.jsx)(Ch,{children:M.map(t=>(0,B.jsxs)(wh,{theme:e,children:[(0,B.jsxs)(Th,{children:[(0,B.jsx)(Eh,{theme:e,children:t.name}),(0,B.jsx)(Dh,{theme:e,children:n(`system.backedUpOn`,{value:Ke(t.backupDate)})})]}),(0,B.jsxs)(Oh,{children:[(0,B.jsx)(kh,{theme:e,onClick:()=>He(t),disabled:h,title:n(`system.importBackupTitle`),children:(0,B.jsx)(ge,{size:18})}),(0,B.jsx)(kh,{theme:e,$variant:`danger`,onClick:()=>Fe(t.name),disabled:h,title:n(`system.deleteBackupTitle`),children:(0,B.jsx)(ve,{size:18})})]})]},`${t.name}-${t.backupDate}`))})]})})]}),(0,B.jsx)(Dm,{isOpen:be,title:n(`system.confirmActionTitle`),onClose:ze,actions:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(ym,{theme:e,variant:`secondary`,onClick:ze,children:n(`system.cancel`)}),(0,B.jsx)(ym,{theme:e,onClick:Le,children:n(`system.confirm`)})]}),children:(0,B.jsx)(xh,{theme:e,children:we})})]},`system`)};function Mh(e,t){let n=e.replace(`#`,``);n.length===3&&(n=n.split(``).map(e=>e+e).join(``));let r=parseInt(n,16);return`rgba(${r>>16&255}, ${r>>8&255}, ${r&255}, ${t})`}var Nh=class{static async CenterViewportOnImage(e){let t=await c.scene.grid.getDpi(),n=await c.viewport.getScale(),r=await c.viewport.getWidth(),i=await c.viewport.getHeight(),a={x:r/2,y:i/2},o={x:a.x/n,y:a.y/n},s=await this.GetImageCenter(e,t),l={x:s.x-o.x,y:s.y-o.y},u={x:l.x*n*-1,y:l.y*n*-1};await c.viewport.animateTo({position:u,scale:n})}static async GetImageCenter(t,n){if(e(t)){let e=n/t.grid.dpi,r=t.image.width*e,i=t.image.height*e,a=t.grid.offset.x/t.image.width*r,o=t.grid.offset.y/t.image.height*i;return{x:t.position.x-a+r/2,y:t.position.y-o+i/2}}else if(o(t)&&t.points.length>0)return{x:t.points[0].x,y:t.points[0].y};else return{x:t.position.x,y:t.position.y}}};const Ph=`${L}/effects`;var Fh=`${L}/effects-expired`,Ih=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Lh=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Rh=T.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`,zh=T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
`,Bh=T.div`
  flex: 0 0 120px;
  min-width: 120px;
  display: flex;
  align-items: flex-end;
`,Vh=T.label`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`,Hh=T.input`
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
`,Uh=T.select`
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
`,Wh=T(Uh)`
  min-width: 180px;
  height: 96px;
  padding-right: 8px;
`,Gh=T.button`
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 4px;
  height: 38px;
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 10px;
  cursor: pointer;
  font-size: 13px;
  width: auto;

  &:hover {
    background: ${e=>f(e.theme.OFFSET,.5)};
  }
`,Kh=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 240px;
  overflow-y: auto;
`,qh=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background: ${e=>f(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,Jh=T.div`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  font-size: 12px;
`,Yh=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,Xh=T.p`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,Zh=T.p`
  color: #ff6b6b;
  margin: 0;
  font-size: 12px;
`,Qh=T.div`
  position: relative;
  display: inline-flex;
`,$h=T.button`
  background: ${e=>e.$active?f(e.theme.OFFSET,.65):`rgba(0, 0, 0, 0.3)`};
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
`,eg=T.span`
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
`,tg=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const ng=({items:e,units:n,setItems:r,playerData:i})=>{let[a,o]=(0,R.useState)(null),[s,l]=(0,R.useState)(``),[u,d]=(0,R.useState)(`1`),[f,m]=(0,R.useState)(`rounds`),[h,g]=(0,R.useState)(`start`),[_,v]=(0,R.useState)(`neutral`),[y,b]=(0,R.useState)([]),[x,S]=(0,R.useState)(null),C=(0,R.useMemo)(()=>{let t=new Map;return e.forEach(e=>{e.metadata?.[p.ON_LIST]===!0&&t.set(e.id,tg(e.metadata?.[Ph]))}),t},[e]),w=e=>C.get(e)||[],T=async(t,n)=>{let i=n.filter(e=>e.remaining>0);r(e.map(e=>{if(e.id!==t)return e;let n={...e.metadata||{}};return i.length>0?n[Ph]=i:delete n[Ph],{...e,metadata:n}})),await c.scene.items.updateItems([t],e=>{let t={...e[0].metadata||{}};i.length>0?t[Ph]=i:delete t[Ph],e[0].metadata=t})},E=async e=>{try{await c.broadcast.sendMessage(Fh,{message:e},{destination:`ALL`})}catch(t){A.error(`Failed to broadcast expired effect message`,t),await c.notification.show(e,`WARNING`)}},D=async e=>{if(e.length!==0)try{await c.broadcast.sendMessage(t.MARKCONNECT,e,{destination:`LOCAL`})}catch(e){A.error(`Failed to broadcast marked effect update`,e)}},ee=async(t,n)=>{if(String(i?.role||``).toUpperCase()!==`GM`)return;let r=[],a=[],o=[];e.forEach(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return;let i=tg(e.metadata?.[Ph]);if(i.length===0)return;let s=!1,c=[];i.forEach(r=>{if(!(r.endTiming===t&&(r.durationType===`turns`||e.id===n))){c.push(r);return}let i=r.remaining-1;if(s=!0,i<=0){a.push(`${e.name||`Unit`}: ${r.name} expired`),o.push({LabelName:r.name,TokenId:e.id,Show:!1});return}c.push({...r,remaining:i})}),s&&r.push({unitId:e.id,effects:c})});for(let e of r)await T(e.unitId,e.effects);if(await D(o),a.length>0)for(let e of a)await E(e)},te=(0,R.useMemo)(()=>a&&n.find(e=>e.id===a)||null,[a,n]),ne=(0,R.useMemo)(()=>a?w(a):[],[a,C]);return(0,R.useEffect)(()=>{let e=c.broadcast.onMessage(Fh,async e=>{let t=e.data?.message;typeof t!=`string`||!t.trim()||await c.notification.show(t,`WARNING`)});return()=>{e()}},[]),{effectsModalUnitId:a,selectedEffectsUnit:te,activeEffectsForSelectedUnit:ne,effectNameInput:s,setEffectNameInput:l,effectDurationInput:u,setEffectDurationInput:d,effectDurationType:f,setEffectDurationType:m,effectEndTiming:h,setEffectEndTiming:g,effectType:_,setEffectType:v,effectTargetIds:y,setEffectTargetIds:e=>{b(Array.from(new Set(e)))},effectsModalError:x,units:n,getEffectsForUnit:w,handleOpenEffectsModal:e=>{S(null),l(``),d(`1`),m(`rounds`),g(`start`),v(`neutral`),b([e]),o(e)},handleCloseEffectsModal:()=>{o(null),S(null)},handleAddEffect:async()=>{if(!a)return;let t=s.trim(),r=parseInt(u,10);if(!t){S(`Enter an effect name.`);return}if(!Number.isFinite(r)||r<=0){S(`Duration must be a positive number.`);return}let i=Array.from(new Set(y.filter(e=>n.some(t=>t.id===e))));if(i.length===0){S(`Select at least one target.`);return}let o=w(a),c=te?.name||e.find(e=>e.id===a)?.name||`Unknown`,p={id:crypto.randomUUID(),name:t,remaining:r,durationType:f,endTiming:h,effectType:_,targets:i,createdByName:c,createdById:a};await T(a,[...o,p]),await D([{LabelName:p.name,TokenId:a,Show:!0}]),S(null),l(``),d(`1`),v(`neutral`),b([a])},handleDeleteEffect:async e=>{if(!a)return;let t=w(a),n=t.find(t=>t.id===e);await T(a,t.filter(t=>t.id!==e)),n&&await D([{LabelName:n.name,TokenId:a,Show:!1}])},processEffectsForTurnEvent:ee}},rg=({manager:e})=>{let{theme:t}=It(),n=(0,R.useMemo)(()=>{let t=new Map;return e.units.forEach(e=>{t.set(e.id,e.name)}),t},[e.units]),r=e=>e===`buff`?`Buff`:e===`debuff`?`Debuff`:`Neutral`,i=e=>{if(e.length===0)return`No targets`;let t=e.map(e=>n.get(e)).filter(e=>typeof e==`string`&&e.length>0);return t.length===0?`${e.length} target${e.length===1?``:`s`}`:t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`};return(0,B.jsx)(Dm,{isOpen:!!e.effectsModalUnitId,title:e.selectedEffectsUnit?`Effects: ${e.selectedEffectsUnit.name}`:`Effects`,onClose:e.handleCloseEffectsModal,minWidth:`520px`,maxWidth:`600px`,children:(0,B.jsxs)(Ih,{children:[(0,B.jsxs)(Lh,{children:[(0,B.jsxs)(Rh,{children:[(0,B.jsxs)(zh,{style:{flex:`0 0 120px`},children:[(0,B.jsx)(Vh,{theme:t,children:`Effect`}),(0,B.jsx)(Hh,{theme:t,type:`text`,placeholder:`Name`,value:e.effectNameInput,onChange:t=>e.setEffectNameInput(t.target.value)})]}),(0,B.jsxs)(zh,{style:{flex:`0 0 140px`},children:[(0,B.jsx)(Vh,{theme:t,children:`Duration`}),(0,B.jsx)(Hh,{theme:t,type:`number`,min:1,value:e.effectDurationInput,onChange:t=>e.setEffectDurationInput(t.target.value)})]}),(0,B.jsxs)(zh,{style:{flex:`0 0 120px`},children:[(0,B.jsx)(Vh,{theme:t,children:`By`}),(0,B.jsxs)(Uh,{theme:t,value:e.effectDurationType,onChange:t=>e.setEffectDurationType(t.target.value),children:[(0,B.jsx)(`option`,{value:`turns`,children:`Turns`}),(0,B.jsx)(`option`,{value:`rounds`,children:`Rounds`})]})]})]}),(0,B.jsxs)(Rh,{children:[(0,B.jsxs)(zh,{style:{flex:`0 0 120px`},children:[(0,B.jsx)(Vh,{theme:t,children:`Type`}),(0,B.jsxs)(Uh,{theme:t,value:e.effectType,onChange:t=>e.setEffectType(t.target.value),children:[(0,B.jsx)(`option`,{value:`neutral`,children:`Neutral`}),(0,B.jsx)(`option`,{value:`buff`,children:`Buff`}),(0,B.jsx)(`option`,{value:`debuff`,children:`Debuff`})]})]}),(0,B.jsxs)(zh,{style:{flex:`0 0 140px`},children:[(0,B.jsx)(Vh,{theme:t,children:`Ends at`}),(0,B.jsxs)(Uh,{theme:t,value:e.effectEndTiming,onChange:t=>e.setEffectEndTiming(t.target.value),children:[(0,B.jsx)(`option`,{value:`start`,children:`Start of turn`}),(0,B.jsx)(`option`,{value:`end`,children:`End of turn`})]})]}),(0,B.jsx)(Bh,{children:(0,B.jsx)(Gh,{theme:t,onClick:e.handleAddEffect,style:{width:`100%`},children:`Add`})})]})]}),(0,B.jsxs)(zh,{children:[(0,B.jsx)(Vh,{theme:t,children:`Targets`}),(0,B.jsx)(Wh,{theme:t,multiple:!0,value:e.effectTargetIds,onChange:t=>{let n=Array.from(t.target.selectedOptions).map(e=>e.value);e.setEffectTargetIds(n)},children:e.units.map(e=>(0,B.jsx)(`option`,{value:e.id,children:e.name},e.id))})]}),e.effectsModalError&&(0,B.jsx)(Zh,{theme:t,children:e.effectsModalError}),e.activeEffectsForSelectedUnit.length===0?(0,B.jsx)(Xh,{theme:t,children:`No active effects.`}):(0,B.jsx)(Kh,{children:e.activeEffectsForSelectedUnit.map(n=>(0,B.jsxs)(qh,{theme:t,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(Yh,{theme:t,children:n.name}),(0,B.jsxs)(Jh,{theme:t,children:[r(n.effectType),` • `,n.remaining,` `,n.durationType,` • ends at `,n.endTiming===`start`?`start of turn`:`end of turn`,` • by `,n.createdByName]}),(0,B.jsxs)(Jh,{theme:t,children:[`Targets: `,i(n.targets)]})]}),(0,B.jsx)(Gh,{theme:t,onClick:()=>{e.handleDeleteEffect(n.id)},children:`Delete`})]},n.id))})]})})},ig=({activeEffectsCount:e,canInteract:t,onOpen:n,icon:r})=>{let{theme:i}=It();return(0,B.jsxs)(Qh,{children:[(0,B.jsx)($h,{theme:i,$active:e>0,disabled:!t,onClick:()=>{t&&n()},children:r||(0,B.jsx)(he,{})}),e>0&&(0,B.jsx)(eg,{theme:i,children:e>99?`99+`:e})]})};var ag=T.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,og=T.input`
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
`;const sg=({theme:e,unit:t,canInteract:n,elevationDraftValue:r,onElevationDraftChange:i,onCommitElevationChange:a})=>(0,B.jsx)(ag,{theme:e,children:(0,B.jsx)(og,{theme:e,type:`text`,inputMode:`decimal`,min:-999,max:999,step:1,value:r??String(t.elevation??0),readOnly:!n,onChange:n?e=>i(t.id,e.target.value):void 0,onBlur:n?e=>a(t.id,e.target.value):void 0,onKeyDown:e=>{n&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}})}),cg=({theme:e,canInteract:t,icon:n,activeEffectsCount:r,onOpen:i})=>(0,B.jsx)(ag,{theme:e,children:(0,B.jsx)(ig,{activeEffectsCount:r,canInteract:t,icon:n||(0,B.jsx)(he,{}),onOpen:i})});var lg=`${L}/elevation-badge`,ug=`${L}/elevation-badge-owner`,dg=`${L}/elevation`,fg=200,pg=40,mg=60,hg=120,gg=24,_g=(e,t)=>{if(!e)return;if(e.startsWith(`#`))return Mh(e,t);let n=e.match(/^rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\)$/i);if(n){let[,e,r,i]=n;return`rgba(${e}, ${r}, ${i}, ${t})`}let r=e.match(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i);if(r){let[,e,n,i]=r;return`rgba(${e}, ${n}, ${i}, ${t})`}return e},vg=e=>`
    0 1px 1px ${f(e.BACKGROUND,.95)},
    0 0 2px ${f(e.BACKGROUND,.85)}
  `,yg=/(\d+)d(\d+)([kd][hl]\d+|!)?/gi,bg={anchor:ut,aperture:Me,award:We,batterycharging:P,book:He,calendar:ct,clock:at,cloudlightning:I,drama:ot,carrot:Qe,bone:et,compass:qe,dollarsign:$e,feather:be,eye:Be,heart:pe,moon:me,music:ue,shield:de,star:xe,sun:he,target:ye,users:Je,wind:Ye,zap:se,sword:fe,swords:le,axe:Ke,bowarrow:ze,coins:Ne,wand:k,flower:Ae,skull:Ee,castle:Le,cross:rt,testtubediagonal:_e,squirrel:gt,snowflake:ie,shell:Te,pickaxe:De,heartplus:ke,heartcrack:Oe,fan:re},xg=T.div`
  padding: 2px;
  width: 100%;
`,Sg=T.h1`
  color: ${e=>e.theme.PRIMARY};
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`,Cg=T.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
`,wg=T.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$compactMode?`end`:`center`};
  gap: ${e=>e.$compactMode?`8px`:`16px`};
  position: relative;
  padding: ${e=>e.$compactMode?`4px 8px`:`8px`};
  background-color: ${e=>f(e.theme.BACKGROUND,.75)};
  border-top: 2px solid ${e=>e.theme.BORDER};
`,Tg=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.$compactMode?`8px`:`16px`};
`,Eg=T.button`
  background: ${e=>e.disabled?f(e.theme.BORDER,.3):f(e.theme.OFFSET,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>vg(e.theme)};
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
    background: ${e=>e.disabled?f(e.theme.BORDER,.3):e.theme.OFFSET};
  }
  
  &:active {
    transform: ${e=>e.disabled?`none`:`scale(0.95)`};
  }

  svg {
    filter: drop-shadow(0 1px 1px ${e=>f(e.theme.BACKGROUND,.95)})
      drop-shadow(0 0 2px ${e=>f(e.theme.BACKGROUND,.75)});
  }
`,Dg=T(Eg)`
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
    filter: drop-shadow(0 1px 1px ${e=>f(e.theme.BACKGROUND,.95)})
      drop-shadow(0 0 3px ${e=>f(e.theme.BACKGROUND,.8)});
  }
`,Og=T(Eg)`
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
`,kg=T(Eg)`
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
`,Ag=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: ${e=>e.$compactMode?`14px`:`16px`};
  font-weight: 600;
  min-width: ${e=>e.$compactMode?`44px`:`80px`};
  text-align: center;
`,jg=T.table`
  width: ${e=>e.$compact?`max-content`:`100%`};
  min-width: ${e=>e.$compact?`${fg}px`:`100%`};
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
`,Mg=T.thead`
  background-color: ${e=>f(e.theme.BACKGROUND,.5)};
`,Ng=T.tr``,Pg=T.th`
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
`,Fg=T.div`
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
  border: 1px solid ${e=>f(e.theme.BORDER,.9)};
  background: ${e=>f(e.theme.BACKGROUND,.96)};
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
  line-height: 1.3;
  text-align: left;
  box-shadow: 0 8px 24px ${e=>f(e.theme.BACKGROUND,.65)};
  backdrop-filter: blur(8px);

  &::after {
    content: '';
    position: absolute;
    left: clamp(12px, ${e=>`${e.$arrowX}px`}, calc(100% - 12px));
    ${e=>e.$placement===`top`?`top: 100%;`:`bottom: 100%;`}
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    ${e=>e.$placement===`top`?`border-top: 6px solid ${f(e.theme.BACKGROUND,.96)};`:`border-bottom: 6px solid ${f(e.theme.BACKGROUND,.96)};`}
  }
`,Ig=T.tbody``,Lg=T.tr`
  ${e=>e.$isCurrentTurn&&e.theme&&`
    background: linear-gradient(to left, ${f(e.theme.OFFSET,.4)} 0%, transparent 100%);
  `}
  cursor: context-menu;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &:not(:last-child) td {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`,Rg=T.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,zg=T(Rg)`
  font-weight: 700;
  font-size: 18px;
  color: ${e=>e.theme.OFFSET};
  min-width: 60px;
`,Bg=T(Rg)`
  min-width: 48px;
`,Vg=T.button`
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
`,Hg=T.img`
  width: 18px;
  height: 18px;
  pointer-events: none;
`,Ug=T.div`
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
`,Wg=T.input`
  background: ${e=>e.$isRollable?f(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.3)`};
  border: 1px solid ${e=>e.$isRollable?f(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?vg(e.theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${f(e.theme.BACKGROUND,.28)}, 0 0 0 1px ${f(e.theme.OFFSET,.18)}`:`none`};
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
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${f(e.theme.OFFSET,.35)}, inset 0 0 0 1px ${f(e.theme.BACKGROUND,.35)}`:`none`};
  }
`,Gg=T(Rg)`
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
`,Kg=T.input`
  background: ${e=>e.$isRollable?f(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.4)`};
  border: 1px solid ${e=>e.$isRollable?f(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?vg(e.theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${f(e.theme.BACKGROUND,.28)}, 0 0 0 1px ${f(e.theme.OFFSET,.18)}`:`none`};
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
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${f(e.theme.OFFSET,.35)}, inset 0 0 0 1px ${f(e.theme.BACKGROUND,.35)}`:`none`};
  }
`,qg=T.select`
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
`,Jg=T.span`
  margin: 0 2px;
  color: ${e=>e.theme.OFFSET};
  font-weight: 500;
`,Yg=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,Xg=T.button`
  background: ${e=>e.$active?f(e.theme.OFFSET,.65):`rgba(0, 0, 0, 0.3)`};
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
`,Zg=T.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.BORDER};
  cursor: pointer;
  margin: 0 2px;
  background: ${e=>f(e.theme.BACKGROUND,.55)};
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
    box-shadow: ${e=>`0 0 0 2px ${f(e.theme.PRIMARY,.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,Qg=T.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  min-width: 54px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.BORDER};
  background: ${e=>f(e.theme.PRIMARY,.75)};
  color: ${e=>f(e.theme.OFFSET,.96)};
  box-shadow: ${e=>`0 4px 14px ${f(e.theme.BACKGROUND,.65)}`};
  text-shadow: ${e=>`1px 1px 0 ${f(e.theme.BACKGROUND,.95)}`};
  padding: 4px 8px;
  font-size: 13px;
  font-weight: 700;
  font-style: italic;
  text-align: center;
`,$g=T.div`
  display: flex;
  flex-wrap: wrap;
  width: 62px;
  gap: 3px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,e_=T.button`
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
`,t_=T.button`
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
`,n_=T.div`
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
`,r_=T(Rg)`
  width: 24px;
  min-width: 24px;
  max-width: 24px;
  padding: 0;
  position: relative;
`,i_=T.div`
  position: absolute;
  inset: 0;
  min-height: 40px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0 10px;
`,a_=T.div`
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
            ${f(e.theme.BORDER,.2)},
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
`,o_=T.div`
  flex: 1;
  height: 100%;
  padding: 0 8px;
  margin: 0 -10px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`,s_=T.div`
  width: 6px;
  flex: 1;
  height: 100%;
  background-repeat: repeat-y;
  background-position: center;
  background-size: 6px 16px;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='16' viewBox='0 0 6 16' preserveAspectRatio='none'%3E%3Cpolyline points='3,0 0,4 6,8 0,12 3,16' fill='none' stroke='${encodeURIComponent(e.theme.BORDER)}' stroke-width='1.2'/%3E%3C/svg%3E")`};
`,c_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
`,l_=T.button`
  width: 100%;
  text-align: left;
  background: ${e=>e.$isCurrent?f(e.theme.OFFSET,.45):f(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  padding: 8px 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>f(e.theme.OFFSET,.55)};
  }
`,u_=T.p`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  margin: 0 0 12px 0;
  font-size: 13px;
`,d_=T.p`
  color: #ff6b6b;
  margin: 10px 0 0 0;
  font-size: 13px;
`,f_=T.div`
  height: 1px;
  margin: 12px 0;
  background: ${e=>f(e.theme.BORDER,.7)};
`,p_=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.35)};
`,m_=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,h_=T.div`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  font-size: 11px;
`,g_=T.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`,__=T.button`
  width: 50px;
  height: 28px;
  padding: 0;
  position: relative;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 999px;
  background: ${e=>e.$active?f(e.theme.OFFSET,.55):f(e.theme.BACKGROUND,.45)};
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
    background: ${e=>e.$active?f(e.theme.OFFSET,.7):f(e.theme.OFFSET,.45)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,v_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,y_=T.p`
  color: ${e=>f(e.theme.PRIMARY,.78)};
  margin: 0;
  font-size: 12px;
`,b_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 320px;
  overflow-y: auto;
`,x_=T.div`
  background: ${e=>f(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,S_=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,C_=T.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #4b5563;
  background: rgba(0, 0, 0, 0.2);
  accent-color: #ffffff;
  margin: 0;
  pointer-events: none;
`,w_=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
`,T_=T.div`
  color: ${e=>f(e.theme.PRIMARY,.85)};
  font-size: 12px;
  font-style: italic;
  line-height: 1.25;
  white-space: pre-wrap;
`,E_=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`,D_=T.button`
  border: 1px solid ${e=>f(e.theme.OFFSET,.7)};
  border-radius: 999px;
  background: ${e=>f(e.theme.OFFSET,.35)};
  color: ${e=>e.theme.PRIMARY};
  font-size: 11px;
  padding: 2px 8px;
  cursor: pointer;

  &:hover {
    background: ${e=>f(e.theme.OFFSET,.55)};
  }
`,O_=T.p`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,k_=T.div`
  width: 100%;
  min-height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>f(e.theme.BORDER,.8)};
  background: ${e=>f(e.theme.BACKGROUND,.55)};
`,A_=T.div`
  width: ${e=>e.$small?`40px`:`60px`};
  min-width: ${e=>e.$small?`40px`:`60px`};
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>f(e.theme.BORDER,.8)};
  background: ${e=>f(e.theme.BACKGROUND,.55)};
`,j_=(e,t,n)=>{let r=[{id:crypto.randomUUID(),type:`initiative`,description:n(`initiative.defaultInitiativeDescription`)},{id:crypto.randomUUID(),type:`name`,description:n(`initiative.defaultNameDescription`)}],i=t?[{id:`card-column`,type:`card-column`}]:[];if(!e||e.length===0)return[...r,...i];let a=[...e].sort((e,t)=>e.col-t.col).map(e=>({id:e.id,type:e.type,name:e.styles?.labelName,useIcon:e.styles?.labelMode===`icon`,iconType:e.styles?.labelIcon,description:e.styles?.description,styles:e.styles}));return[...r,...a,...i]};const M_=()=>{let{t:r}=_t(),{theme:i}=It(),{listLayout:a,attributes:o,isLoading:s}=km(),l=z(e=>e.roomMetadata),u=z(e=>e.sceneMetadata),d=z(e=>e.items),f=z(e=>e.partyData),m=z(e=>e.playerData),h=z(e=>e.gridDpi),g=z(e=>e.setItems),[_,v]=(0,R.useState)([]),[y,b]=(0,R.useState)([]),[x,S]=(0,R.useState)(null),[C,w]=(0,R.useState)(1),[T,E]=(0,R.useState)(new Set),[D,ee]=(0,R.useState)(null),[te,re]=(0,R.useState)(null),[k,ie]=(0,R.useState)(!1),[ae,oe]=(0,R.useState)(!1),[se,j]=(0,R.useState)(!1),[ce,le]=(0,R.useState)({}),[ue,de]=(0,R.useState)({}),[fe,pe]=(0,R.useState)({}),[me,ge]=(0,R.useState)(null),[_e,ve]=(0,R.useState)({}),[M,ye]=(0,R.useState)(null),[be,xe]=(0,R.useState)(null),[Se,Ce]=(0,R.useState)(!1),[Te,Ee]=(0,R.useState)(!1),[De,Oe]=(0,R.useState)(!1),[ke,Ae]=(0,R.useState)(()=>window.innerWidth<400),[je,Me]=(0,R.useState)(null),Ne=(0,R.useRef)(null),Pe=(0,R.useRef)({}),Fe=(0,R.useRef)({}),Ie=(0,R.useRef)(null);(0,R.useEffect)(()=>{let e=()=>{Ae(window.innerWidth<400)};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let Le=(0,R.useMemo)(()=>{let e=Array.isArray(m?.selection)?m.selection:[];return new Set(e)},[m?.selection]),Re=l,ze=Re[O.REVERSE_INITIATIVE]||!1,Be=Re[O.POPCORN_INITIATIVE]||!1,Ve=Re[O.SHOW_CARD_ACCESS]||!1,He=Re[O.SHOW_NON_PARTY_UNITS]||!1,Ue=Re[O.SHOW_LIST_HP_NUMBERS],We=typeof Ue==`boolean`?Ue:!0,Ge=Re[O.DICE_RANGE]||``,Ke=Re[O.INITIATIVE_MODIFIER_BID]||``,qe=Re[O.INITIATIVE_MODIFIER_EXPR]||`@STAT`,Ye=qe.trim().length>0?qe:`@STAT`,Xe=Re[O.SHOW_OWNER_ONLY_EDIT]||!1,Ze=String(m?.role||``).toUpperCase()===`GM`,Qe=m?.id||``,N=ne(O.INITIATIVE_LIST_COMPACT,Qe);(0,R.useEffect)(()=>{let e=Re[N],t=Re[O.INITIATIVE_LIST_COMPACT];Oe(typeof e==`boolean`?e:typeof t==`boolean`?t:!1)},[Re,N]);let P=async()=>{let e=!De;Oe(e);try{await c.room.setMetadata({[N]:e})}catch(t){A.error(`Failed to persist initiative list compact mode`,t),Oe(!e)}},F=async({notation:e,actionName:t,tokenName:n,senderId:r,senderColor:i})=>{try{await we({notation:e,actionName:t,senderName:n,senderId:r,senderColor:i},Re)}catch(t){A.error(`Failed to send dice roll from InitiativeList`,e,t),A.log(e)}},$e=e=>{let t=e;if(typeof t==`string`)try{t=JSON.parse(t)}catch{return[]}return Array.isArray(t)?t.map((e,t)=>{let n=e&&typeof e==`object`?e:{},r=n.inUse,i=typeof r==`boolean`?r:typeof r==`string`?[`true`,`1`,`yes`].includes(r.trim().toLowerCase()):typeof r==`number`?r===1:void 0;return{id:typeof n.id==`string`&&n.id?n.id:`entry-${t}`,name:typeof n.name==`string`?n.name:``,description:typeof n.description==`string`?n.description:``,...i===void 0?{}:{inUse:i}}}):[]};(0,R.useEffect)(()=>{v(d.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>{let t=e.metadata?.[p.INITIATIVE]||0,n=e.metadata[p.UNIT_NAME]||e.name||`Unknown`,r=e.metadata?.[p.BOSS_MODE]===!0,i=e.metadata?.[dg]||0,a=f.find(t=>t.id===e.createdUserId)||(m?.id===e.createdUserId?m:void 0),o=String(a?.role||``).toUpperCase()===`GM`,s=a?.color||(m?.id===e.createdUserId?m?.color:void 0),c=o?void 0:_g(s,1),l={};return Object.keys(e.metadata||{}).forEach(t=>{t.startsWith(`com.battle-system.forge`)&&(l[t]=e.metadata?.[t])}),{id:e.id,initiative:t,name:n,isBoss:r,elevation:i,attributes:l,createdUserId:e.createdUserId,ownerNameOutlineColor:c,isInParty:e.metadata?.[p.IN_PARTY]===!0,isVisible:e.visible!==!1}}))},[d,f,m]);let I=(0,R.useMemo)(()=>Be?[..._].sort((e,t)=>e.name.localeCompare(t.name)):[..._].sort((e,t)=>e.initiative===t.initiative?e.name.localeCompare(t.name):ze?e.initiative-t.initiative:t.initiative-e.initiative),[_,ze,Be]),et=ng({items:d,units:I,setItems:g,playerData:m}),tt=(0,R.useMemo)(()=>{let e=new Map;return f.forEach(t=>{e.set(t.id,t)}),m&&!e.has(m.id)&&e.set(m.id,m),Array.from(e.values()).sort((e,t)=>e.name.localeCompare(t.name))},[f,m]),nt=(e,t)=>{let n=parseInt(t)||0;v(t=>t.map(t=>t.id===e?{...t,initiative:n}:t))},rt=(e,t)=>{g(d.map(n=>n.id===e?{...n,metadata:{...n.metadata,[p.INITIATIVE]:t}}:n)),c.scene.items.updateItems([e],e=>{e[0].metadata[p.INITIATIVE]=t})},at=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},ot=(e,t,n)=>(typeof t==`number`&&(e=Math.max(t,e)),typeof n==`number`&&(e=Math.min(n,e)),e),st=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(r.length===0)return ot(0,i,a);let o=r.match(/^([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),s=r.match(/^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),c=null;if(o){let e=o[1],n=parseFloat(o[2]);switch(e){case`+`:c=t+n;break;case`-`:c=t-n;break;case`*`:c=t*n;break;case`/`:c=n===0?t:t/n;break}}else if(s){let e=parseFloat(s[1]),t=s[2],n=parseFloat(s[3]);switch(t){case`+`:c=e+n;break;case`-`:c=e-n;break;case`*`:c=e*n;break;case`/`:c=n===0?e:e/n;break}}else{let e=parseFloat(r);Number.isNaN(e)||(c=e)}return ot(c===null||!Number.isFinite(c)?t:Math.trunc(c),i,a)},ct=e=>{let t=0;if(Ke){let n=_.find(t=>t.id===e);if(n){let e=n.attributes?.[`${L}/${Ke}`],r=Number(e),i=Number.isFinite(r)?r:0,a=it(Ye.replace(/@STAT/gi,`@${Ke}`).replace(/\bx\b/gi,`@${Ke}`),{bidValueMap:{[Ke]:i},onMissingBid:`useZero`});if(a.valid&&a.notation){let e=Number(a.notation);Number.isFinite(e)&&(t=Math.trunc(e))}}}return t},lt=(e,t=`normal`)=>{let n=at(Ge),r=Math.floor(Math.random()*n)+1,i=t===`normal`?null:Math.floor(Math.random()*n)+1,a=(i===null?r:t===`advantage`?Math.max(r,i):Math.min(r,i))+ct(e);nt(e,String(a)),rt(e,a)},ut=(e,t)=>{le(n=>({...n,[e]:t}))},dt=(e,t)=>{let n=st(t,_.find(t=>t.id===e)?.initiative??0);le(t=>{let{[e]:n,...r}=t;return r}),v(t=>t.map(t=>t.id===e?{...t,initiative:n}:t)),rt(e,n)},ft=e=>`ELE${e.slice(3)}`,pt=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o}},mt=async(t,r)=>{let i=ft(t);try{await c.scene.items.deleteItems([i])}catch{}if(r===0)return;let a=d.find(e=>e.id===t);if(!a||!e(a))return;let o=pt(a,h),s=`${r>0?`🡹`:`🡻`}${Math.abs(r)}`,l=n().id(i).name(`Elevation Badge`).plainText(s).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(36).fontFamily(`Segoe UI`).textAlign(`CENTER`).position({x:o.minX-40,y:o.minY}).metadata({[lg]:!0,[ug]:t}).attachedTo(t).visible(a.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build();try{await c.scene.items.addItems([l])}catch(e){A.error(`Failed to add elevation badge`,t,e)}},ht=(e,t)=>{de(n=>({...n,[e]:t}))},gt=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(!r)return ot(0,i,a);let o=parseFloat(r);return ot(Number.isFinite(o)?Math.trunc(o):t,i,a)},vt=(e,t)=>{let n=gt(t,_.find(t=>t.id===e)?.elevation??0,{min:-999,max:999});de(t=>{let{[e]:n,...r}=t;return r}),v(t=>t.map(t=>t.id===e?{...t,elevation:n}:t)),g(d.map(t=>t.id===e?{...t,metadata:{...t.metadata,[dg]:n}}:t)),c.scene.items.updateItems([e],e=>{e[0].metadata[dg]=n}),mt(e,n)},yt=(e,t)=>{let n=e.trim();if(!n)return e;let r=/^([+\-*/])\s*-?\d+(?:\.\d+)?$/.test(n),i=/^-?\d+(?:\.\d+)?\s*[+\-*/]\s*-?\d+(?:\.\d+)?$/.test(n),a=/^-?\d+(?:\.\d+)?$/.test(n);if(!r&&!i&&!a)return e;let o=typeof t==`number`?t:parseFloat(String(t)),s=Number.isFinite(o)?o:0;return String(st(n,s))},xt=(e,t,n)=>{let r=`${L}/${t}`,i=d.find(t=>t.id===e)?.metadata?.[r],a=yt(n,i);v(t=>t.map(t=>t.id===e?{...t,attributes:{...t.attributes,[r]:a}}:t)),g(d.map(t=>t.id===e?{...t,metadata:{...t.metadata,[r]:a}}:t)),c.scene.items.updateItems([e],e=>{e[0].metadata[r]=a})},St=e=>String(e?.attr_bid??e?.bid??``).trim(),Ct=e=>String(e?.attr_name??e?.name??``).trim(),wt=e=>String(e?.attr_abbr??e?.abbr??``).trim(),Tt=e=>String(e?.attr_type??e?.type??``).trim().toLowerCase(),Et=e=>{let t=e?.attr_func??e?.func??``;return typeof t==`string`?t.trim():``},Dt=e=>e?.attr_meta??e?.meta??{},Ot=e=>o.find(t=>St(t)===e)||null,kt=e=>Et(Ot(e)).length>0,At=e=>{let t={};for(let n of o){let r=St(n);if(!r)continue;let i=`${L}/${r}`,a=e.attributes?.[i];if(a==null||a===``)continue;let o=Number(a);Number.isFinite(o)&&(t[r]=o)}return t},jt=e=>{let t={};for(let n of o){let r=n,i=St(r);if(!i)continue;let a=`${L}/${i}`,o=e.attributes?.[a];if(o==null||o===``)continue;let s=Number(o);if(!Number.isFinite(s))continue;let c=Ct(r);c&&(t[c]=s);let l=wt(r);l&&(t[l]=s)}return t},Mt=(e,t)=>{let n=Array.from(e.matchAll(yg));if(n.length!==1)return null;let r=n[0],i=r[0]||``,a=r[1]||``,o=r[2]||``,s=r[3]||``,c=r.index;if(!i||!a||!o||typeof c!=`number`)return null;let l=Number(a);if(!Number.isFinite(l)||l!==1||s)return null;let u=`2d${o}${t===`advantage`?`kh1`:`kl1`}`;return`${e.slice(0,c)}${u}${e.slice(c+i.length)}`},Nt=(e,t)=>{let n=Et(Ot(t));if(n.length===0)return null;let r=it(n,{bidValueMap:At(e),nameValueMap:jt(e),onMissingBid:`error`});return!r.valid||!r.notation?(A.warn(`Could not resolve notation for initiative list value-column`,{unitId:e.id,bid:t,error:r.error}),null):{notation:r.notation,actionName:Ct(Ot(t))||t}},Pt=(e,t)=>{let n=Ot(t),r=Dt(n)?.derived?.formula,i=typeof r==`string`&&r.trim().length>0?r:Et(n);if(typeof i!=`string`||i.trim().length===0)return`-`;let a=it(i,{bidValueMap:At(e),nameValueMap:jt(e),onMissingBid:`error`});if(!a.valid||!a.notation)return A.warn(`Could not resolve derived formula for initiative list derived-column`,{unitId:e.id,bid:t,error:a.error}),`-`;let o=a.notation.trim(),s=Number(o);if(!Number.isFinite(s))return o||`-`;let c=Number(Dt(n)?.derived?.precision),l=Number.isFinite(c)?Math.max(0,Math.min(Math.trunc(c),8)):0,u=Dt(n)?.derived?.displayMode,d=l>0?s.toFixed(l):String(s);return u===`percent`?`${d}%`:d},Ft=async(e,t)=>{let n=Nt(e,t);if(!n)return;let r=f.find(t=>t.id===e.createdUserId);await F({notation:n.notation,actionName:n.actionName,tokenName:e.name,senderId:e.createdUserId||m?.id||`unknown`,senderColor:r?.color||m?.color||`#ffffff`})},Lt=async(e,t,n)=>{let i=Nt(e,t);if(!i)return;let a=n===`normal`?i.notation:Mt(i.notation,n);if(!a)return;let o=f.find(t=>t.id===e.createdUserId),s=n===`normal`?``:r(n===`advantage`?`initiative.modeSuffixAdvantage`:`initiative.modeSuffixDisadvantage`);await F({notation:a,actionName:`${i.actionName}${s}`,tokenName:e.name,senderId:e.createdUserId||m?.id||`unknown`,senderColor:o?.color||m?.color||`#ffffff`})},Rt=async(e,t)=>{let n=t===`normal`?e.notation:Mt(e.notation,t);if(!n)return;let i=t===`normal`?``:r(t===`advantage`?`initiative.modeSuffixAdvantage`:`initiative.modeSuffixDisadvantage`);await F({notation:n,actionName:`${e.actionName}${i}`,tokenName:e.tokenName,senderId:e.senderId,senderColor:e.senderColor})};(0,R.useEffect)(()=>()=>{Object.values(Pe.current).forEach(e=>{window.clearTimeout(e)})},[]),(0,R.useEffect)(()=>{if(!M&&!be)return;let e=e=>{e.key===`Escape`&&(ye(null),xe(null))};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[M,be]);let zt=(e,t)=>`value-column:${e}:${t}`,Bt=(e,t)=>`${e}:${t}`,Vt=e=>!!_e[e],Ht=(e,t)=>{ve(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},Ut=e=>{ye(e)},Wt=()=>{ye(null)},Gt=()=>{xe(null)},Kt=e=>{ve(t=>{let{[e]:n,...r}=t;return r})},qt=(e,t)=>{let n=Pe.current[e];n&&window.clearTimeout(n),Pe.current[e]=window.setTimeout(()=>{Fe.current[e]=!0,Ht(e,t),delete Pe.current[e]},500)},Jt=e=>{let t=Pe.current[e];t&&(window.clearTimeout(t),delete Pe.current[e])},Yt=e=>Fe.current[e]?(delete Fe.current[e],!0):!1,Xt=e=>{if(!Xe||Ze)return!0;let t=m?.id;return t?e.createdUserId===t:!1},Zt=e=>Ze?!0:e.isVisible,Qt=e=>Ze||He?!1:!e.isInParty;(0,R.useEffect)(()=>{s||b(j_(a,Ve,r))},[a,s,Ve]),(0,R.useEffect)(()=>{let e=u[O.CURRENT_TURN],t=u[O.CURRENT_ROUND];e?S(e):I.length>0&&S(I[0].id),t&&w(t)},[u,I]);let $t=async()=>{if(I.length===0)return;x&&await et.processEffectsForTurnEvent(`end`,x);let e=I.findIndex(e=>e.id===x)+1;if(e>=I.length){let e=C+1;w(e),S(I[0].id),await c.scene.setMetadata({[O.CURRENT_TURN]:I[0].id,[O.CURRENT_ROUND]:e}),await et.processEffectsForTurnEvent(`start`,I[0].id)}else S(I[e].id),await c.scene.setMetadata({[O.CURRENT_TURN]:I[e].id}),await et.processEffectsForTurnEvent(`start`,I[e].id)},en=async()=>{if(I.length===0)return;let e=I.findIndex(e=>e.id===x)-1;if(e<0){let e=Math.max(1,C-1);w(e),S(I[I.length-1].id),await c.scene.setMetadata({[O.CURRENT_TURN]:I[I.length-1].id,[O.CURRENT_ROUND]:e})}else S(I[e].id),await c.scene.setMetadata({[O.CURRENT_TURN]:I[e].id})},tn=async e=>{Be&&(T.has(e)||(S(e),await c.scene.setMetadata({[O.CURRENT_TURN]:e}),await et.processEffectsForTurnEvent(`start`,e)))},nn=async()=>{x&&(await et.processEffectsForTurnEvent(`end`,x),E(e=>new Set([...e,x])),T.size+1,I.length)},rn=async()=>{let e=C+1;w(e),E(new Set),S(null),await c.scene.setMetadata({[O.CURRENT_TURN]:null,[O.CURRENT_ROUND]:e})},an=async e=>{Ee(!0);try{if(e===`clear-list`){let e=d.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await c.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata&&p.ON_LIST in e.metadata&&delete e.metadata[p.ON_LIST]})}),g(d.map(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return e;let t={...e.metadata||{}};return delete t[p.ON_LIST],{...e,metadata:t}})))}if(e===`reset-initiative`){let e=d.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await c.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata[p.INITIATIVE]=0})}),g(d.map(e=>e.metadata?.[p.ON_LIST]===!0?{...e,metadata:{...e.metadata||{},[p.INITIATIVE]:0}}:e)),v(e=>e.map(e=>d.some(t=>t.id===e.id&&t.metadata?.[p.ON_LIST]===!0)?{...e,initiative:0}:e)),le({}))}let t=e===`clear-list`?null:e===`reset-initiative`?[...I].sort((e,t)=>e.name.localeCompare(t.name))[0]?.id??null:I[0]?.id??null;w(1),S(t),E(new Set),await c.scene.setMetadata({[O.CURRENT_TURN]:t,[O.CURRENT_ROUND]:1}),Ce(!1)}catch(t){A.error(`Failed to reset encounter state`,{mode:e,error:t})}finally{Ee(!1)}},on=async e=>{let t=d.find(t=>t.id===e);if(t)try{await Nh.CenterViewportOnImage(t)}catch(t){A.error(`Failed to center viewport on unit`,e,t)}},sn=async(e,n)=>{try{let r=await c.viewport.getHeight(),i=r>800?700:r-100;await c.popover.open({id:t.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(n)}`,height:i,width:350,anchorElementId:e,hidePaper:!0,disableClickAway:!0})}catch(e){A.error(`Failed to open cards popover`,e)}},cn=(e,t)=>{e.preventDefault(),e.stopPropagation(),re(null),ee(t)},ln=async e=>{if(D){if(!d.find(e=>e.id===D)){re(r(`initiative.tokenNotFoundInCache`));return}ie(!0),re(null);try{await c.scene.items.updateItems([D],t=>{let n=t[0];n.createdUserId=e}),g(d.map(t=>t.id===D?{...t,createdUserId:e}:t)),ee(null)}catch(t){A.error(`Failed to reassign token owner`,D,e,t),re(r(`initiative.assignOwnerPermissionError`))}finally{ie(!1)}}},un=async()=>{if(!D)return;let e=d.find(e=>e.id===D);if(!e){re(r(`initiative.tokenNotFoundInCache`));return}let t=e.metadata?.[p.BOSS_MODE]!==!0;if(t&&d.filter(e=>e.id!==D&&e.metadata?.[p.ON_LIST]===!0&&e.metadata?.[p.BOSS_MODE]===!0).length>=2){re(r(`initiative.maxBossesError`));return}oe(!0),re(null);try{await c.scene.items.updateItems([D],e=>{let n={...e[0].metadata||{}};n[p.BOSS_MODE]=t,e[0].metadata=n}),g(d.map(e=>e.id===D?{...e,metadata:{...e.metadata||{},[p.BOSS_MODE]:t}}:e))}catch(e){A.error(`Failed to toggle boss mode`,D,e),re(r(`initiative.updateBossModeError`))}finally{oe(!1)}},dn=async()=>{if(D){if(!d.find(e=>e.id===D)){re(r(`initiative.tokenNotFoundInCache`));return}j(!0),re(null);try{await c.scene.items.updateItems([D],e=>{let t={...e[0].metadata||{}};p.ON_LIST in t&&delete t[p.ON_LIST],e[0].metadata=t}),g(d.map(e=>{if(e.id!==D)return e;let t={...e.metadata||{}};return delete t[p.ON_LIST],{...e,metadata:t}})),ee(null)}catch(e){A.error(`Failed to remove token from initiative list`,D,e),re(r(`initiative.removeUnitError`))}finally{j(!1)}}},fn=(0,R.useMemo)(()=>D&&I.find(e=>e.id===D)||null,[D,I]),pn=(0,R.useMemo)(()=>D&&d.find(e=>e.id===D)||null,[D,d]),mn=pn?.metadata?.[p.BOSS_MODE]===!0,V=(0,R.useMemo)(()=>me&&I.find(e=>e.id===me.unitId)||null,[me,I]),hn=(0,R.useMemo)(()=>me&&o.find(e=>e.attr_bid===me.bid)||null,[o,me]),gn=(0,R.useMemo)(()=>{if(!me||!V)return[];let e=V.attributes[`${L}/${me.bid}`];return $e(e)},[me,V]),_n=(0,R.useMemo)(()=>gn.some(e=>typeof e.inUse==`boolean`),[gn]),vn=(0,R.useMemo)(()=>M&&I.find(e=>e.id===M.unitId)||null,[M,I]),yn=(0,R.useMemo)(()=>De?y.filter(e=>e.type===`initiative`||e.type===`name`?!0:e.type===`card-column`&&Ve):y,[De,y,Ve]),bn=(0,R.useMemo)(()=>bt(Re,o),[o,Re]),xn=(0,R.useMemo)(()=>I.filter(e=>Zt(e)),[I,Ze]),Sn=(0,R.useMemo)(()=>{if(!V)return{};let e={};for(let t of o){let n=`${L}/${t.attr_bid}`,r=V.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(e[t.attr_bid]=i)}return e},[V,o]),Cn=(0,R.useMemo)(()=>{if(!V)return{};let e={};for(let t of o){let n=`${L}/${t.attr_bid}`,r=V.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(t.attr_name&&(e[t.attr_name]=i),t.attr_abbr&&(e[t.attr_abbr]=i))}return e},[V,o]),wn=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=(e[1]||``).trim();if(!n)continue;let r=it(n,{bidValueMap:Sn,nameValueMap:Cn,onMissingBid:`error`});!r.valid||!r.notation||t.push(r.notation)}return t};(0,R.useEffect)(()=>{Ie.current&&yn.length>0&&(A.debug(`Adjusting window width based on table size`),setTimeout(()=>{if(Ie.current){let e=Ie.current.offsetWidth+4,t=Math.min(e,800);c.action.setWidth(t),A.log(`Adjusted window width to `+t)}},100))},[De,yn.length,I.length]);let Tn=e=>{if(!e)return null;let t=bg[e.toLowerCase()];return t?(0,B.jsx)(t,{}):null},En=(e,t)=>{let n=window.innerWidth-t-8,r=Math.min(Math.max(e-t/2,8),Math.max(8,n));return{left:r,arrowX:e-r}},Dn=e=>{let t=e.currentTarget.getBoundingClientRect(),n=`clientX`in e?e.clientX:t.left+t.width/2,r=t.top>72?`top`:`bottom`;return{anchorX:n,y:r===`top`?t.top:t.bottom,placement:r}},On=(e,t)=>{let n=Dn(e),r=Math.min(320,Math.max(140,t.length*7+28)),i=En(n.anchorX,r);Me({text:t,...n,...i})},kn=()=>{Me(null)};(0,R.useLayoutEffect)(()=>{if(!je||!Ne.current)return;let e=Ne.current.getBoundingClientRect().width,t=En(je.anchorX,e);(Math.abs(t.left-je.left)>.5||Math.abs(t.arrowX-je.arrowX)>.5)&&Me(e=>e&&{...e,...t})},[je]);let An=e=>e.type===`initiative`?(0,B.jsx)(Je,{}):e.type===`roller`?null:e.type===`name`?r(`initiative.nameHeader`):e.type===`card-column`?(0,B.jsx)(nf,{}):e.type===`divider-column`?null:e.useIcon?Tn(e.iconType||`star`):e.name||e.type,H=e=>e.type===`divider-column`?{fixedWidth:gg}:e.type===`initiative`?{minWidth:mg}:e.type===`name`?{minWidth:hg}:{minWidth:pg},jn=(e,t)=>{let n=Xt(t),a=Qt(t),s=!Ze&&!We;if(a&&e.type!==`initiative`&&e.type!==`name`&&e.type!==`divider-column`)return(0,B.jsx)(Rg,{theme:i,children:(0,B.jsx)(k_,{theme:i})});switch(e.type){case`initiative`:if(Be)return(0,B.jsx)(zg,{theme:i,children:(0,B.jsx)(Ug,{onClick:e=>{e.stopPropagation(),n&&(T.has(t.id)||(t.id===x?nn():tn(t.id)))},children:T.has(t.id)?(0,B.jsx)(ef,{color:i.OFFSET}):t.id===x?(0,B.jsx)($d,{color:i.PRIMARY}):(0,B.jsx)(tf,{color:i.BORDER})})});let a=`initiative:${t.id}`,l=Vt(a);return(0,B.jsx)(zg,{theme:i,children:(0,B.jsx)(Wg,{theme:i,$isRollable:n&&!l,type:`text`,inputMode:`decimal`,value:ce[t.id]??String(t.initiative),readOnly:!n||!l,onChange:!n||!l?void 0:e=>ut(t.id,e.target.value),onBlur:!n||!l?void 0:e=>{dt(t.id,e.target.value),Kt(a)},onClick:()=>{n&&(l||Yt(a)||lt(t.id))},onContextMenu:e=>{n&&(e.preventDefault(),Ut({kind:`initiative`,fieldKey:a,unitId:t.id,input:e.currentTarget}))},onTouchStart:e=>{n&&(l||qt(a,e.currentTarget))},onTouchEnd:()=>{Jt(a)},onTouchCancel:()=>{Jt(a)},onKeyDown:e=>{if(n){if(!l&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),lt(t.id);return}l&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})});case`name`:let u=Le.has(t.id);return(0,B.jsx)(Gg,{theme:i,title:r(`initiative.rightClickAssignOwner`),$outlineColor:t.ownerNameOutlineColor,$isSelected:u,onDoubleClick:()=>on(t.id),onContextMenu:n?e=>cn(e,t.id):void 0,children:t.isBoss?`💀 ${t.name}`:t.name});case`roller`:return(0,B.jsx)(Bg,{theme:i,children:(0,B.jsx)(Vg,{theme:i,disabled:!n,onClick:e=>{e.stopPropagation(),n&&lt(t.id)},title:r(`initiative.rollInitiativeTitle`,{max:at(Ge)}),children:(0,B.jsx)(Hg,{src:`/dice.svg`,alt:r(`initiative.rollIconAlt`)})})});case`card-column`:return(0,B.jsx)(Rg,{theme:i,children:(0,B.jsx)(Xg,{id:`card-access-${t.id}`,theme:i,disabled:!n,onClick:e=>{e.stopPropagation(),n&&sn(e.currentTarget.id,t.id)},title:r(`initiative.openCardTitle`,{unit:t.name}),children:(0,B.jsx)($d,{})})});case`value-column`:return(0,B.jsx)(Rg,{theme:i,children:(0,B.jsx)(Yg,{children:e.styles?.bidList?.map((r,a)=>{let o=kt(r),c=zt(t.id,r),l=Bt(t.id,r),u=o&&Vt(c),d=t.attributes[`${L}/${r}`],f=fe[l]??(d==null||d===``?`0`:String(d)),p=r===bn.currentHpBid||r===bn.maxHpBid,m=!!Qe&&t.createdUserId===Qe,h=s&&p&&!m;return(0,B.jsxs)(R.Fragment,{children:[a>0&&(0,B.jsx)(Jg,{theme:i,children:e.styles?.dividers?.[a-1]||`/`}),h?(0,B.jsx)(A_,{theme:i,$small:e.styles?.bidList&&e.styles.bidList.length>2}):(0,B.jsx)(Kg,{theme:i,$isRollable:n&&o,value:f,$small:e.styles?.bidList&&e.styles.bidList.length>2,readOnly:!n||o&&!u,onChange:!n||o&&!u?void 0:e=>{let t=e.target.value;pe(e=>({...e,[l]:t}))},onBlur:!n||o&&!u?void 0:e=>{xt(t.id,r,e.target.value),pe(e=>{let{[l]:t,...n}=e;return n}),o&&Kt(c)},onClick:o?()=>{n&&(u||Yt(c)||Ft(t,r))}:void 0,onContextMenu:o?e=>{n&&(e.preventDefault(),Ut({kind:`attribute`,fieldKey:c,unitId:t.id,bid:r,input:e.currentTarget}))}:void 0,onTouchStart:o?e=>{n&&(u||qt(c,e.currentTarget))}:void 0,onTouchEnd:o?()=>{Jt(c)}:void 0,onTouchCancel:o?()=>{Jt(c)}:void 0,onKeyDown:e=>{if(n){if(o&&!u&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),Ft(t,r);return}(u||!o)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})]},r)})})});case`list-column`:return(0,B.jsx)(Rg,{theme:i,children:(0,B.jsx)(Xg,{theme:i,disabled:!n,onClick:r=>{if(r.stopPropagation(),!n)return;let i=e.styles?.bidList?.[0];i&&ge({unitId:t.id,bid:i})},title:r(`initiative.openListReference`),children:(0,B.jsx)(Xd,{})})});case`checkbox-column`:return(0,B.jsx)(Rg,{theme:i,children:(0,B.jsx)(Yg,{children:e.styles?.bidList?.map(r=>{let a=!!t.attributes[`${L}/${r}`],o=e.styles?.inputType===`slider`,s=e=>{v(n=>n.map(n=>n.id===t.id?{...n,attributes:{...n.attributes,[`${L}/${r}`]:e}}:n)),g(d.map(n=>n.id===t.id?{...n,metadata:{...n.metadata,[`${L}/${r}`]:e}}:n)),c.scene.items.updateItems([t.id],t=>{t[0].metadata[`${L}/${r}`]=e})};return o?(0,B.jsx)(t_,{type:`button`,theme:i,$active:a,disabled:!n,onClick:n?()=>{s(!a)}:void 0,children:(0,B.jsx)(n_,{theme:i,$active:a})},r):(0,B.jsx)(Zg,{theme:i,type:`checkbox`,checked:a,disabled:!n,onChange:n?e=>{s(e.target.checked)}:void 0},r)})})});case`derived-column`:{let n=e.styles?.bidList||[];return n.length===0?(0,B.jsx)(Rg,{theme:i,children:`-`}):(0,B.jsx)(Rg,{theme:i,children:(0,B.jsx)(Yg,{children:n.map((n,a)=>(0,B.jsxs)(R.Fragment,{children:[a>0&&(0,B.jsx)(Jg,{theme:i,children:e.styles?.dividers?.[a-1]||`/`}),(0,B.jsx)(Qg,{theme:i,title:r(`initiative.derivedValueFormula`),children:Pt(t,n)})]},n))})})}case`enum-column`:{let r=e.styles?.bidList?.[0];if(!r)return(0,B.jsx)(Rg,{theme:i,children:`-`});let a=Dt(Ot(r)),o=Array.isArray(a.enum?.options)?a.enum.options.map(e=>String(e||``).trim()).filter(e=>e.length>0):[],s=`${L}/${r}`,l=t.attributes[s],u=typeof l==`string`?l.trim():``,f=o.includes(u)?u:o[0]||``,p=e=>{v(n=>n.map(n=>n.id===t.id?{...n,attributes:{...n.attributes,[s]:e}}:n)),g(d.map(n=>n.id===t.id?{...n,metadata:{...n.metadata,[s]:e}}:n)),c.scene.items.updateItems([t.id],t=>{t[0].metadata[s]=e})};return(0,B.jsx)(Rg,{theme:i,children:(0,B.jsx)(Yg,{children:(0,B.jsx)(qg,{theme:i,disabled:!n,value:f,onClick:e=>e.stopPropagation(),onChange:n?e=>{p(e.target.value)}:void 0,children:o.length===0?(0,B.jsx)(`option`,{value:``,children:`No options`}):o.map(e=>(0,B.jsx)(`option`,{value:e,children:e},e))})})})}case`resource-column`:{let r=e.styles?.bidList?.[0];if(!r)return(0,B.jsx)(Rg,{theme:i,children:`-`});let a=t.attributes[`${L}/${r}`],s=o.find(e=>St(e)===r&&Tt(e)===`resource`),l=a&&typeof a==`object`&&!Array.isArray(a)?a:null,u=l?Number(l.current??0):0,f=l?Number(l.max??0):0,p=(e,n)=>{let i=`${L}/${r}`,a={current:e,max:n};v(e=>e.map(e=>e.id===t.id?{...e,attributes:{...e.attributes,[i]:a}}:e)),g(d.map(e=>e.id===t.id?{...e,metadata:{...e.metadata,[i]:a}}:e)),c.scene.items.updateItems([t.id],e=>{e[0].metadata[i]=a})};if(Dt(s)?.resource?.showPips){let e=Number(Dt(s)?.resource?.pipCap),t=(Number.isFinite(e)&&e>0?Math.round(e):void 0)??f;if(t<=0)return(0,B.jsx)(Rg,{theme:i,children:`-`});let r=Math.max(1,Math.min(t,15)),a=Math.max(0,Math.min(u,r));return(0,B.jsx)(Rg,{theme:i,children:(0,B.jsx)($g,{children:Array.from({length:r}).map((e,t)=>(0,B.jsx)(e_,{theme:i,$filled:t<a,disabled:!n,onClick:n?()=>{p(t+1===a?t:t+1,f)}:void 0},t))})})}return(0,B.jsx)(Rg,{theme:i,children:(0,B.jsxs)(Yg,{children:[(0,B.jsx)(Kg,{theme:i,$isRollable:!1,value:String(u),$small:!1,readOnly:!n,onChange:n?e=>{let t=Number(e.target.value);isNaN(t)||p(t,f)}:void 0}),(0,B.jsx)(Jg,{theme:i,children:`/`}),(0,B.jsx)(Kg,{theme:i,$isRollable:!1,value:String(f),$small:!1,readOnly:!n,onChange:n?e=>{let t=Number(e.target.value);isNaN(t)||p(u,t)}:void 0})]})})}case`special-column`:let f=Tn(e.iconType);if(e.styles?.specialType===`elevation`){let e=ue[t.id];return(0,B.jsx)(sg,{theme:i,unit:t,canInteract:n,elevationDraftValue:e,onElevationDraftChange:ht,onCommitElevationChange:vt})}else{let e=et.getEffectsForUnit(t.id).length;return(0,B.jsx)(cg,{theme:i,canInteract:n,icon:f||(0,B.jsx)(he,{}),activeEffectsCount:e,onOpen:()=>et.handleOpenEffectsModal(t.id)})}case`divider-column`:return(0,B.jsx)(r_,{theme:i,children:(0,B.jsx)(i_,{children:e.styles?.styleDesign===`zigzag`?(0,B.jsx)(o_,{children:(0,B.jsx)(s_,{theme:i})}):(0,B.jsx)(a_,{theme:i,$style:e.styles?.styleDesign})})});default:return(0,B.jsx)(Rg,{theme:i,children:`-`})}};if(s)return(0,B.jsx)(xg,{children:(0,B.jsx)(Sg,{theme:i,children:`Loading...`})});let U=De||ke,Mn=U?`R:${C}`:`Round: ${C}`,Nn=!De&&U;return(0,B.jsxs)(xg,{children:[(0,B.jsx)(Cg,{children:(0,B.jsxs)(jg,{ref:Ie,theme:i,$compact:De,children:[(0,B.jsx)(Mg,{theme:i,children:(0,B.jsx)(Ng,{children:yn.map(e=>{let t=e.description??`This has no description.`,n=H(e);return(0,B.jsx)(Pg,{theme:i,$minWidth:n.minWidth,$fixedWidth:n.fixedWidth,onMouseEnter:e=>On(e,t),onMouseMove:e=>On(e,t),onMouseLeave:kn,onFocus:e=>On(e,t),onBlur:kn,children:An(e)},e.id)})})}),(0,B.jsx)(Ig,{children:xn.map(e=>(0,B.jsx)(Lg,{$isCurrentTurn:e.id===x,theme:i,children:yn.map(t=>(0,B.jsx)(R.Fragment,{children:jn(t,e)},t.id))},e.id))})]})}),(0,B.jsxs)(wg,{theme:i,$compactMode:U,children:[(0,B.jsxs)(Tg,{$compactMode:U,children:[De?(0,B.jsxs)(B.Fragment,{children:[Ze&&(0,B.jsx)(Eg,{theme:i,$compact:!0,onClick:en,children:(0,B.jsx)(Jd,{})}),Ze&&(0,B.jsx)(Eg,{theme:i,$compact:!0,onClick:$t,children:(0,B.jsx)(Yd,{})})]}):Be?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Eg,{theme:i,onClick:nn,disabled:!x||T.has(x),children:`End Turn`}),(0,B.jsx)(Ag,{theme:i,$compactMode:U,children:Mn}),(0,B.jsx)(Eg,{theme:i,$compact:U,onClick:rn,disabled:T.size<I.length,children:U?(0,B.jsx)(Yd,{}):r(`initiative.next`)})]}):(0,B.jsxs)(B.Fragment,{children:[Ze&&(0,B.jsx)(Eg,{theme:i,$compact:!0,onClick:en,children:(0,B.jsx)(Jd,{})}),(0,B.jsx)(Ag,{theme:i,$compactMode:U,children:Mn}),Ze&&(0,B.jsx)(Eg,{theme:i,$compact:!0,onClick:$t,children:(0,B.jsx)(Yd,{})})]}),Nn&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Og,{theme:i,onClick:()=>{P()},title:r(`initiative.switchToCompactList`),children:(0,B.jsx)(of,{})}),Ze&&(0,B.jsx)(Og,{theme:i,onClick:()=>Ce(!0),disabled:Te,title:r(`initiative.resetRoundTurnState`),children:(0,B.jsx)(sf,{})})]}),De&&(0,B.jsx)(Og,{theme:i,onClick:()=>{P()},title:r(`initiative.switchToFullsizeList`),children:(0,B.jsx)(af,{})})]}),!De&&!Nn&&(0,B.jsx)(kg,{theme:i,$hasReset:Ze,onClick:()=>{P()},title:r(`initiative.switchToCompactList`),children:(0,B.jsx)(of,{})}),Ze&&!De&&!Nn&&(0,B.jsx)(Dg,{theme:i,onClick:()=>Ce(!0),disabled:Te,title:r(`initiative.resetRoundTurnState`),children:(0,B.jsx)(sf,{})})]}),je&&(0,B.jsx)(Fg,{ref:Ne,theme:i,$left:je.left,$y:je.y,$placement:je.placement,$arrowX:je.arrowX,role:`tooltip`,children:je.text}),(0,B.jsxs)(Dm,{isOpen:!!D,title:fn?r(`initiative.unitTitle`,{unit:fn.name}):r(`initiative.unitFallbackTitle`),onClose:()=>{k||ae||se||(ee(null),re(null))},closeOnOverlayClick:!k&&!ae&&!se,maxWidth:`520px`,children:[(0,B.jsx)(u_,{theme:i,children:r(`initiative.selectOwnerHint`)}),(0,B.jsxs)(c_,{children:[tt.map(e=>(0,B.jsxs)(l_,{theme:i,$isCurrent:pn?.createdUserId===e.id,onClick:()=>ln(e.id),disabled:k||ae||se,children:[e.name,pn?.createdUserId===e.id?r(`initiative.currentSuffix`):``]},e.id)),(0,B.jsx)(l_,{theme:i,onClick:()=>{dn()},disabled:k||ae||se,children:r(se?`initiative.removing`:`initiative.removeUnitFromList`)})]}),(0,B.jsx)(f_,{theme:i}),(0,B.jsxs)(p_,{theme:i,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(m_,{theme:i,children:r(`initiative.bossMode`)}),(0,B.jsx)(h_,{theme:i,children:r(`initiative.bossModeHint`)})]}),(0,B.jsx)(g_,{children:(0,B.jsx)(__,{type:`button`,theme:i,$active:mn,disabled:k||ae||se,"aria-label":r(`initiative.toggleBossModeAria`),"aria-pressed":mn,onClick:()=>{un()}})})]}),te&&(0,B.jsx)(d_,{theme:i,children:te})]}),(0,B.jsxs)(Dm,{isOpen:!!M,title:M?.kind===`initiative`?r(`initiative.initiativeTitle`,{unit:vn?.name||r(`initiative.unitFallbackTitle`)}):Ot(M?.bid||``)?.attr_name||r(`initiative.rollOptionsTitle`),onClose:Wt,maxWidth:`460px`,children:[(0,B.jsx)(u_,{theme:i,children:r(`initiative.chooseRollableAction`)}),(0,B.jsxs)(c_,{children:[(0,B.jsx)(l_,{theme:i,onClick:()=>{M&&(Wt(),Ht(M.fieldKey,M.input))},children:r(`initiative.editValue`)}),(()=>{if(!M||!vn)return null;if(M.kind===`initiative`)return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(l_,{theme:i,onClick:()=>{Wt(),lt(M.unitId,`advantage`)},children:r(`initiative.rollWithAdvantage`)}),(0,B.jsx)(l_,{theme:i,onClick:()=>{Wt(),lt(M.unitId,`disadvantage`)},children:r(`initiative.rollWithDisadvantage`)})]});let e=M.bid||``,t=Nt(vn,e);if(!t)return null;let n=Mt(t.notation,`advantage`),a=Mt(t.notation,`disadvantage`);return!n||!a?null:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(l_,{theme:i,onClick:()=>{Wt(),Lt(vn,e,`advantage`)},children:r(`initiative.rollWithAdvantage`)}),(0,B.jsx)(l_,{theme:i,onClick:()=>{Wt(),Lt(vn,e,`disadvantage`)},children:r(`initiative.rollWithDisadvantage`)})]})})()]})]}),(0,B.jsx)(rg,{manager:et}),(0,B.jsxs)(Dm,{isOpen:Se,title:r(`initiative.resetEncounterTitle`),onClose:()=>{Te||Ce(!1)},closeOnOverlayClick:!Te,maxWidth:`460px`,children:[(0,B.jsx)(u_,{theme:i,children:r(`initiative.chooseResetMode`)}),(0,B.jsxs)(c_,{children:[(0,B.jsx)(l_,{theme:i,onClick:()=>{an(`round`)},disabled:Te,children:r(Te?`initiative.resetting`:`initiative.resetRound`)}),(0,B.jsx)(l_,{theme:i,onClick:()=>{an(`reset-initiative`)},disabled:Te,children:r(Te?`initiative.resetting`:`initiative.resetRoundAndInitiative`)}),(0,B.jsx)(l_,{theme:i,onClick:()=>{an(`clear-list`)},disabled:Te,children:r(Te?`initiative.resetting`:`initiative.resetRoundAndClearList`)})]})]}),(0,B.jsx)(Dm,{isOpen:!!me,title:V?r(`initiative.listReferenceTitle`,{attribute:hn?.attr_name||r(`initiative.listReferenceFallback`),unit:V.name}):r(`initiative.listReferenceFallback`),onClose:()=>{ge(null)},maxWidth:`620px`,children:(0,B.jsxs)(v_,{children:[(0,B.jsx)(y_,{theme:i}),gn.length===0?(0,B.jsx)(O_,{theme:i,children:r(`initiative.noEntries`)}):(0,B.jsx)(b_,{children:gn.map(e=>(0,B.jsxs)(x_,{theme:i,children:[(0,B.jsxs)(S_,{children:[_n?(0,B.jsx)(C_,{type:`checkbox`,checked:!!e.inUse,readOnly:!0,tabIndex:-1}):null,(0,B.jsx)(w_,{theme:i,children:e.name||r(`initiative.unnamed`)})]}),e.description?(0,B.jsx)(T_,{theme:i,children:e.description}):null,(()=>{let t=wn(e.description||``);return t.length===0?null:(0,B.jsx)(E_,{children:t.map((t,n)=>(0,B.jsx)(D_,{type:`button`,theme:i,onClick:()=>{let n=V?.createdUserId?f.find(e=>e.id===V.createdUserId):null;F({notation:t,actionName:e.name||hn?.attr_name||r(`initiative.listRoll`),tokenName:V?.name||r(`initiative.unknown`),senderId:V?.createdUserId||m?.id||`unknown`,senderColor:n?.color||m?.color||`#ffffff`})},onContextMenu:n=>{n.preventDefault();let i=V?.createdUserId?f.find(e=>e.id===V.createdUserId):null;xe({notation:t,actionName:e.name||hn?.attr_name||r(`initiative.listRoll`),tokenName:V?.name||r(`initiative.unknown`),senderId:V?.createdUserId||m?.id||`unknown`,senderColor:i?.color||m?.color||`#ffffff`})},title:t,children:t},`${e.id}-inline-notation-${n}`))})})()]},e.id))})]})}),(0,B.jsxs)(Dm,{isOpen:!!be,title:be?.actionName||r(`initiative.rollOptionsTitle`),onClose:Gt,maxWidth:`460px`,zIndexBase:12e3,children:[(0,B.jsx)(u_,{theme:i,children:r(`initiative.chooseRollMode`)}),(0,B.jsx)(c_,{children:(()=>{if(!be)return null;let e=Mt(be.notation,`advantage`),t=Mt(be.notation,`disadvantage`);return!e||!t?null:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(l_,{theme:i,onClick:()=>{be&&(Gt(),Rt(be,`advantage`))},children:r(`initiative.rollWithAdvantage`)}),(0,B.jsx)(l_,{theme:i,onClick:()=>{be&&(Gt(),Rt(be,`disadvantage`))},children:r(`initiative.rollWithDisadvantage`)})]})})()})]})]})},N_=`${t.EXTENSIONID}-partyhud`,P_=async()=>{await c.modal.open({id:N_,url:`/pages/forgeparty.html`,fullScreen:!0,hideBackdrop:!0,hidePaper:!0,disablePointerEvents:!0})},F_=async()=>{await c.modal.close(N_)};var I_=`forge:party_save`,L_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,R_=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>f(e.theme.BACKGROUND,.35)};
`,z_=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`,B_=T(z_)`
  justify-content: center;
`,V_=T.span`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: ${e=>f(e.theme.PRIMARY,.9)};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`,H_=T.button`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.OFFSET,.45)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,U_=T.select`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px;
  min-width: 160px;
`,W_=T.p`
  margin: 0;
  font-size: 12px;
  color: ${e=>f(e.theme.PRIMARY,.8)};
`,G_=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${e=>e.$disabled?.55:1};
`,K_=T.span`
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
`,q_=T.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>f(e.theme.BACKGROUND,.35)};
`,J_=T.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
`,Y_=T.img`
  width: ${e=>e.$full?`100%`:`40px`};
  height: ${e=>e.$full?`100%`:`40px`};
  min-width: ${e=>e.$full?`100%`:`40px`};
  position: absolute;
  left: ${e=>e.$overlay?`20px`:`0`};
  top: ${e=>e.$overlay?`20px`:`0`};
  object-fit: cover;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>f(e.theme.BACKGROUND,.6)};
`,X_=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,Z_=T.span`
  color: ${e=>e.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,Q_=T.input`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
`,$_=T.p`
  color: ${e=>e.theme.PRIMARY};
  margin: 0;
`,ev=T.span`
  display: block;
  font-size: 10px;
  color: ${e=>f(e.theme.PRIMARY,.55)};
  text-align: center;
  margin-top: 4px;
`,tv=e=>{switch(e){case`bottom`:return`left`;case`left`:return`top`;case`top`:return`right`;case`right`:default:return`bottom`}},nv=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,rv=e=>e===`default`||e===`plate`||e===`tech`||e===`deco`,iv=e=>e===`deco`?`plate`:e===`tech`?`tech`:e===`plate`?`plate`:`default`;const av=()=>{let t=(0,R.useRef)(!1),[n,r]=(0,R.useState)(null),{theme:i}=It(),{t:a}=_t(),{attributes:o}=km(),s=z(e=>e.items);z(e=>e.sceneMetadata);let l=z(e=>e.roomMetadata),u=z(e=>e.playerData),d=l,f=String(u?.role||``).toUpperCase()===`GM`,m=u?.id,h=ne(O.PARTY_HUD_OPEN,m),g=ne(O.PARTY_HUD_ORIENTATION,m),_=(d[h]??d[O.PARTY_HUD_OPEN])===!0,v=d[g]??d[O.PARTY_HUD_ORIENTATION],y=nv(v)?v:`bottom`,b=d[O.PARTY_HUD_ATTR_ONE]||``,x=d[O.PARTY_HUD_ATTR_TWO]||``,S=d[O.PARTY_HUD_SHOW_HP_BARS]===!0,C=d[O.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!S,w=d[O.PARTY_HUD_BORDER_STYLE],T=rv(w)?iv(w):`default`,E=s.filter(e=>e.metadata[p.IN_PARTY]===!0),D=a(`common.orientation.${y}`);(0,R.useEffect)(()=>{try{let e=localStorage.getItem(I_);e&&r(JSON.parse(e).savedAt??null)}catch{}},[]);let ee=()=>{let e={savedAt:new Date().toISOString(),items:E};localStorage.setItem(I_,JSON.stringify(e)),r(e.savedAt)},te=async()=>{let e=localStorage.getItem(I_);if(e)try{let t=JSON.parse(e);if(!t.items.length)return;let n=new Set(t.items.map(e=>e.id)),r=s.filter(e=>n.has(e.id)).map(e=>e.id);r.length>0&&await c.scene.items.deleteItems(r);let[i,a]=await Promise.all([c.viewport.getWidth(),c.viewport.getHeight()]),o={x:i*.75,y:a*.6},l=await c.viewport.inverseTransformPoint(o),u={x:o.x-75,y:o.y-75},d=await c.viewport.inverseTransformPoint(u),f=d.x-l.x,p=d.y-l.y,m=t.items.map((e,t)=>({...e,position:{x:l.x+f*t,y:l.y+p*t}}));await c.scene.items.addItems(m)}catch{}},re=(0,R.useMemo)(()=>o.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[o]),k=async(e,t)=>{await c.room.setMetadata({[e]:t})},ie=async e=>{await c.room.setMetadata(e)},ae=async()=>{let e=!_;if(await k(h,e),!e){await F_(),t.current=!1;return}await P_(),t.current=!0},oe=async()=>{await k(g,tv(y))},se=async(e,t)=>{let n=t.trim();await c.scene.items.updateItems([e],e=>{let t={...e[0].metadata||{}};n?t[p.PORTRAIT_URL]=n:delete t[p.PORTRAIT_URL],e[0].metadata=t})};return(0,B.jsx)(qd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,B.jsxs)(gm,{theme:i,children:[(0,B.jsx)(_m,{theme:i,children:a(`party.pageTitle`)}),(0,B.jsxs)(R_,{theme:i,children:[(0,B.jsxs)(z_,{children:[(0,B.jsx)(H_,{theme:i,onClick:()=>void oe(),children:a(`party.display`,{orientation:D})}),(0,B.jsx)(H_,{theme:i,onClick:()=>void ae(),children:a(_?`party.closeHud`:`party.openHud`)})]}),f&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(B_,{children:[(0,B.jsx)(V_,{theme:i,children:a(`party.showInHud`)}),(0,B.jsxs)(G_,{$disabled:!f,children:[(0,B.jsx)(K_,{theme:i,children:a(`party.showHpBars`)}),(0,B.jsx)(Z,{label:a(`party.toggleHpBarsLabel`),isOn:S,onChange:e=>{if(f){if(e){ie({[O.PARTY_HUD_SHOW_HP_BARS]:!0,[O.PARTY_HUD_SHOW_HP_NUMBERS]:!1});return}k(O.PARTY_HUD_SHOW_HP_BARS,!1)}}})]}),(0,B.jsxs)(G_,{$disabled:!f,children:[(0,B.jsx)(K_,{theme:i,children:a(`party.showHpNumbers`)}),(0,B.jsx)(Z,{label:a(`party.toggleHpNumbersLabel`),isOn:C,onChange:e=>{if(f){if(e){ie({[O.PARTY_HUD_SHOW_HP_NUMBERS]:!0,[O.PARTY_HUD_SHOW_HP_BARS]:!1});return}k(O.PARTY_HUD_SHOW_HP_NUMBERS,!1)}}})]}),(0,B.jsxs)(U_,{theme:i,disabled:!f,value:b,onChange:e=>{let t=e.target.value;k(O.PARTY_HUD_ATTR_ONE,t),t&&t===x&&k(O.PARTY_HUD_ATTR_TWO,``)},children:[(0,B.jsx)(`option`,{value:``,children:a(`party.extraSlotNone`,{slot:1})}),re.map(e=>(0,B.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,B.jsxs)(U_,{theme:i,disabled:!f,value:x,onChange:e=>{let t=e.target.value;k(O.PARTY_HUD_ATTR_TWO,t),t&&t===b&&k(O.PARTY_HUD_ATTR_ONE,``)},children:[(0,B.jsx)(`option`,{value:``,children:a(`party.extraSlotNone`,{slot:2})}),re.map(e=>(0,B.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,B.jsxs)(U_,{theme:i,disabled:!f,value:T,onChange:e=>{let t=e.target.value;rv(t)&&k(O.PARTY_HUD_BORDER_STYLE,t)},children:[(0,B.jsx)(`option`,{value:`default`,children:a(`party.portraitBorderDefault`)}),(0,B.jsx)(`option`,{value:`plate`,children:a(`party.portraitBorderPlate`)}),(0,B.jsx)(`option`,{value:`tech`,children:a(`party.portraitBorderTech`)})]})]}),(0,B.jsx)(W_,{theme:i,children:(0,B.jsxs)(B.Fragment,{children:[a(`party.configureHint`),(0,B.jsx)(`br`,{}),a(`party.listAttributesExcluded`)]})})]})]}),f&&(0,B.jsxs)(R_,{theme:i,children:[(0,B.jsxs)(B_,{children:[(0,B.jsx)(H_,{theme:i,onClick:ee,disabled:E.length===0,children:a(`party.saveParty`)}),(0,B.jsx)(H_,{theme:i,onClick:()=>void te(),disabled:n===null,children:a(`party.loadParty`)})]}),(0,B.jsx)(ev,{theme:i,children:n?a(`party.lastSaved`,{value:new Date(n).toLocaleString()}):a(`party.noSaveAvailable`)})]}),E.length===0?(0,B.jsx)($_,{theme:i,children:a(`party.emptyState`)}):(0,B.jsx)(L_,{theme:i,children:E.map(t=>{let n=t.metadata?.[p.PORTRAIT_URL]||``,r=e(t)?t.image.url:void 0,o=t.metadata[p.UNIT_NAME]||t.name||a(`party.unknownUnit`),s=t.createdUserId===u?.id,c=f||s,l=r||`/logo.png`,d=!!n;return(0,B.jsxs)(q_,{theme:i,children:[(0,B.jsxs)(J_,{children:[(0,B.jsx)(Y_,{theme:i,src:l,alt:o,$full:!d}),d&&(0,B.jsx)(Y_,{theme:i,src:d?n:``,alt:a(`party.overrideAlt`,{unit:o}),$overlay:!0})]}),(0,B.jsxs)(X_,{children:[(0,B.jsx)(Z_,{theme:i,title:o,children:o}),c&&(0,B.jsx)(Q_,{theme:i,defaultValue:n,placeholder:a(`party.portraitUrlPlaceholder`),onBlur:e=>{se(t.id,e.target.value)}})]})]},t.id)})})]})})};var ov=`${L}/hp-bar-effect`,sv=`${L}/hp-bar-owner`,cv=`${L}/hp-number-text`,lv=`${L}/hp-number-owner`,uv=e=>`HPB${e.slice(3)}`,dv=e=>`HPN${e.slice(3)}`,fv=(e,t,n)=>Math.max(t,Math.min(n,e)),pv=(e,t,n,r)=>{let i=yt(e.metadata,t,r,`current`),a=yt(e.metadata,n,r,`max`);return a===null||a<=0||i===null?null:fv(i/a*100,0,100)},mv=(e,t,n,r)=>{let i=yt(e.metadata,t,r,`current`),a=yt(e.metadata,n,r,`max`);return i===null?null:{currentHp:Math.trunc(i),maxHp:a===null?null:Math.trunc(a)}},hv=e=>{let t=String(e||`bottom`).toLowerCase();return t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`},gv=e=>{switch(hv(e)){case`top`:return 0;case`bottom`:return 1;case`left`:return 2;case`right`:return 3;default:return 1}},_v=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o,width:r,height:i}},vv=(e,t,n)=>{let r=_v(e,t),i=r.minX+r.width*.5,a=r.minY+r.height*.5,o;switch(n){case`top`:o={x:i,y:r.minY+r.height*.18};break;case`bottom`:o={x:i,y:r.minY+r.height*.82};break;case`left`:o={x:r.minX+r.width*.18,y:a};break;case`right`:o={x:r.minX+r.width*.82,y:a};break}let s=r.width*.25,c=r.height*.18;return{x:o.x-s,y:o.y-c}};const yv=()=>{let t=z(e=>e.cacheReady),i=z(e=>e.sceneReady),a=z(e=>e.items),o=z(e=>e.localItems),s=z(e=>e.gridDpi),l=z(e=>e.roomMetadata),u=z(e=>e.sceneMetadata),d=z(e=>e.systemData);return(0,R.useEffect)(()=>{if(!t||!i)return;let u=!1;return(async()=>{let t=l,i=t[O.SHOW_HP_BARS]??!1,f=t[O.SHOW_HP_NUMBERS]??!1,m=i,h=!i&&f,g=hv(t[O.HP_BAR_ORIENTATION]),_=gv(t[O.HP_BAR_ORIENTATION]),v=d?.attributes||[],{currentHpBid:x,maxHpBid:S}=bt(t,v),C=o.filter(e=>y(e)&&e.metadata?.[ov]===!0),w=o.filter(e=>b(e)&&e.metadata?.[cv]===!0);if(!m&&C.length>0)try{await c.scene.local.deleteItems(C.map(e=>e.id))}catch(e){A.error(`Failed to remove HP bar effects`,e)}if(!h&&w.length>0)try{await c.scene.local.deleteItems(w.map(e=>e.id))}catch(e){A.error(`Failed to remove HP number texts`,e)}if(!m&&!h)return;let T=a.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),E=new Map,D=new Map;for(let t of T){if(m){let e=pv(t,x,S,v);e!==null&&E.set(uv(t.id),{unitId:t.id,hpPercent:e,visible:t.visible})}if(h&&e(t)){let e=mv(t,x,S,v);if(e){let n=e.maxHp===null?`${e.currentHp}`:`${e.currentHp}/${e.maxHp}`;D.set(dv(t.id),{unitId:t.id,text:n,position:vv(t,s,g)})}}}if(m){let e=new Map(C.map(e=>[e.id,e])),t=Array.from(E.entries()).filter(([t])=>!e.has(t)),n=C.filter(e=>!E.has(e.id)),i=C.filter(e=>{let t=E.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`orientation`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return e.attachedTo!==t.unitId||!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-_)>.001});if(u)return;if(n.length>0)try{await c.scene.local.deleteItems(n.map(e=>e.id))}catch(e){A.error(`Failed to remove stale HP bar effects`,e)}if(t.length>0){let e=t.map(([e,t])=>r().id(e).name(`HP Bar Effect`).effectType(`ATTACHMENT`).attachedTo(t.unitId).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).visible(t.visible).uniforms([{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:_}]).sksl(`
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
`).metadata({[ov]:!0,[sv]:t.unitId}).build());try{await c.scene.local.addItems(e)}catch(e){A.error(`Failed to add HP bar effects`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await c.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=E.get(e.id);if(!t)return;e.attachedTo=t.unitId;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:_}],e.metadata={...e.metadata,[ov]:!0,[sv]:t.unitId}})})}catch(e){A.error(`Failed to update HP bar effects`,e)}}}if(h){let e=new Map(w.map(e=>[e.id,e])),t=Array.from(D.entries()).filter(([t])=>!e.has(t)),r=w.filter(e=>!D.has(e.id)),i=w.filter(e=>{let t=D.get(e.id);if(!t)return!1;let n=e.text?.plainText,r=Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01;return e.attachedTo!==t.unitId||n!==t.text||r});if(u)return;if(r.length>0)try{await c.scene.local.deleteItems(r.map(e=>e.id))}catch(e){A.error(`Failed to remove stale HP number texts`,e)}if(t.length>0){let e=t.map(([e,t])=>{let r=T.find(e=>e.id===t.unitId);return n().id(e).name(`HP Number Text`).plainText(t.text).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(28).fontFamily(`Segoe UI`).textAlign(`CENTER`).position(t.position).metadata({[cv]:!0,[lv]:t.unitId}).attachedTo(t.unitId).visible(r?.visible??!0).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build()});try{await c.scene.local.addItems(e)}catch(e){A.error(`Failed to add HP number texts`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await c.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=D.get(e.id);if(!t)return;e.attachedTo=t.unitId,e.position=t.position;let n=e;n.text&&(n.text.plainText=t.text),e.metadata={...e.metadata,[cv]:!0,[lv]:t.unitId}})})}catch(e){A.error(`Failed to update HP number texts`,e)}}}})(),()=>{u=!0}},[t,i,a,o,s,l,u,d]),null};var bv=`${L}/death-effect-token`,xv=`${L}/death-effect-owner`,Sv=e=>`DTH${e.slice(3)}`,Cv=(e,t,n)=>yt(e.metadata,t,n,`current`);const wv=()=>{let t=z(e=>e.cacheReady),n=z(e=>e.sceneReady),i=z(e=>e.items),a=z(e=>e.localItems),o=z(e=>e.roomMetadata),s=z(e=>e.sceneMetadata),l=z(e=>e.systemData);return(0,R.useEffect)(()=>{if(!t||!n)return;let s=!1;return(async()=>{let t=o,n=t[O.SHOW_DEATH_EFFECT]??!1,u=l?.attributes||[],d=bt(t,u).currentHpBid,f=a.filter(e=>y(e)&&e.metadata?.[bv]===!0);if(!n){if(f.length>0)try{await c.scene.local.deleteItems(f.map(e=>e.id))}catch(e){A.error(`Failed to remove death token effects`,e)}return}let m=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),h=new Map;m.forEach(e=>{Cv(e,d,u)===0&&h.set(Sv(e.id),{ownerId:e.id,visible:e.visible})});let g=new Map(f.map(e=>[e.id,e])),_=Array.from(h.entries()).filter(([e])=>!g.has(e)),v=f.filter(e=>!h.has(e.id)),b=f.filter(e=>{let t=h.get(e.id);if(!t)return!1;let n=e;return e.attachedTo!==t.ownerId||n.metadata?.[xv]!==t.ownerId});if(!s){if(v.length>0)try{await c.scene.local.deleteItems(v.map(e=>e.id))}catch(e){A.error(`Failed to remove stale death token effects`,e)}if(_.length>0){let e=_.map(([e,t])=>r().id(e).name(`Death Token Effect`).effectType(`ATTACHMENT`).attachedTo(t.ownerId).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(`
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
`).visible(t.visible).metadata({[bv]:!0,[xv]:t.ownerId}).build());try{await c.scene.local.addItems(e)}catch(e){A.error(`Failed to add death token effects`,e)}}if(b.length>0)try{await c.scene.local.updateItems(b.map(e=>e.id),e=>{e.forEach(e=>{let t=h.get(e.id);t&&(e.attachedTo=t.ownerId,e.metadata={...e.metadata,[bv]:!0,[xv]:t.ownerId})})})}catch(e){A.error(`Failed to update death token effects`,e)}}})(),()=>{s=!0}},[t,n,i,a,o,s,l]),null};var Tv=`${L}/buff-effect-token`,Ev=`${L}/buff-effect-owner`,Dv=`${L}/debuff-effect-token`,Ov=`${L}/debuff-effect-owner`,kv=`${L}/effect-preset`,Av=e=>`EFB${e.slice(3)}`,jv=e=>`EFD${e.slice(3)}`,Mv=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const Nv=()=>{let t=z(e=>e.cacheReady),n=z(e=>e.sceneReady),i=z(e=>e.items),a=z(e=>e.localItems),o=z(e=>e.roomMetadata),s=z(e=>e.sceneMetadata);return(0,R.useEffect)(()=>{if(!t||!n)return;let s=!1;return(async()=>{let t=o,n=t[O.BUFF_VISUAL_PRESET],l=t[O.DEBUFF_VISUAL_PRESET],u=Zm(n)?n:qm,d=Qm(l)?l:Jm,f=$m(u),m=eh(d),h=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),g=new Set(h.map(e=>e.id)),_=new Map,v=(e,t)=>{let n=_.get(e)||{hasBuff:!1,hasDebuff:!1};t===`buff`?n.hasBuff=!0:n.hasDebuff=!0,_.set(e,n)};i.forEach(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return;let t=Mv(e.metadata?.[Ph]);t.length!==0&&t.forEach(t=>{t.effectType!==`neutral`&&(t.targets.length>0?t.targets:[e.id]).forEach(e=>{g.has(e)&&(t.effectType===`buff`||t.effectType===`debuff`)&&v(e,t.effectType)})})});let b=new Map,x=new Map;h.forEach(e=>{let t=_.get(e.id);t?.hasBuff&&b.set(Av(e.id),e.id),t?.hasDebuff&&x.set(jv(e.id),e.id)});let S=a.filter(e=>y(e)&&e.metadata?.[Tv]===!0),C=a.filter(e=>y(e)&&e.metadata?.[Dv]===!0),w=async e=>{let{existing:t,desiredByOverlayId:n,preset:i,shader:a,name:o,flagKey:l,ownerKey:u}=e,d=new Map(t.map(e=>[e.id,e])),f=Array.from(n.entries()).filter(([e])=>!d.has(e)),p=t.filter(e=>!n.has(e.id)),m=t.filter(e=>{let t=n.get(e.id);if(!t)return!1;let r=e.metadata?.[kv];return e.attachedTo!==t||r!==i});if(!s){if(p.length>0)try{await c.scene.local.deleteItems(p.map(e=>e.id))}catch(e){A.error(`Failed to remove stale ${o.toLowerCase()} overlays`,e)}if(f.length>0){let e=f.map(([e,t])=>r().id(e).name(o).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(a).metadata({[l]:!0,[u]:t,[kv]:i}).build());try{await c.scene.local.addItems(e)}catch(e){A.error(`Failed to add ${o.toLowerCase()} overlays`,e)}}if(m.length>0)try{await c.scene.local.updateItems(m.map(e=>e.id),e=>{e.forEach(e=>{let t=n.get(e.id);if(!t)return;e.attachedTo=t;let r=e;r.sksl=a,e.metadata={...e.metadata,[l]:!0,[u]:t,[kv]:i}})})}catch(e){A.error(`Failed to update ${o.toLowerCase()} overlays`,e)}}};await w({existing:S,desiredByOverlayId:b,preset:u,shader:f,name:`Buff Token Effect`,flagKey:Tv,ownerKey:Ev}),await w({existing:C,desiredByOverlayId:x,preset:d,shader:m,name:`Debuff Token Effect`,flagKey:Dv,ownerKey:Ov})})(),()=>{s=!0}},[t,n,i,a,o,s]),null};var Pv=`${L}/boss-hp-effect`,Fv=`${L}/boss-hp-owner`,Iv=`${L}/boss-hp-slot`,Lv=e=>`BOSSHP${e}`,Rv=(e,t,n)=>Math.max(t,Math.min(n,e)),zv=(e,t,n,r)=>{let i=yt(e.metadata,t,r,`current`),a=yt(e.metadata,n,r,`max`);return a===null||a<=0||i===null?null:Rv(i/a*100,0,100)};const Bv=()=>{let t=z(e=>e.cacheReady),n=z(e=>e.sceneReady),i=z(e=>e.items),a=z(e=>e.localItems),o=z(e=>e.roomMetadata),s=z(e=>e.sceneMetadata),l=z(e=>e.systemData);return(0,R.useEffect)(()=>{if(!t||!n)return;let s=!1;return(async()=>{let t=o,n=l?.attributes||[],{currentHpBid:u,maxHpBid:d}=bt(t,n),f=a.filter(e=>y(e)&&e.metadata?.[Pv]===!0),m=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0&&t.metadata?.[p.BOSS_MODE]===!0).sort((e,t)=>{let n=Number(e.metadata?.[p.INITIATIVE]??0);return Number(t.metadata?.[p.INITIATIVE]??0)-n}).slice(0,2).map((e,t)=>{let r=zv(e,u,d,n);return r===null?null:{id:Lv(t),unitId:e.id,slot:t,hpPercent:r}}).filter(e=>e!==null),h=new Map(m.map(e=>[e.id,e])),g=new Map(f.map(e=>[e.id,e])),_=f.filter(e=>!h.has(e.id)),v=m.filter(e=>!g.has(e.id)),b=f.filter(e=>{let t=h.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`slot`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-t.slot)>.001||e.metadata?.[Fv]!==t.unitId});if(!s){if(_.length>0)try{await c.scene.local.deleteItems(_.map(e=>e.id))}catch(e){A.error(`Failed to remove stale boss HP viewport effects`,e)}if(v.length>0){let e=v.map(e=>r().id(e.id).name(`Boss HP Bar`).effectType(`VIEWPORT`).locked(!0).disableHit(!0).uniforms([{name:`hpPercent`,value:e.hpPercent},{name:`slot`,value:e.slot}]).sksl(`
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
`).metadata({[Pv]:!0,[Fv]:e.unitId,[Iv]:e.slot}).build());try{await c.scene.local.addItems(e)}catch(e){A.error(`Failed to add boss HP viewport effects`,e)}}if(b.length>0)try{await c.scene.local.updateItems(b.map(e=>e.id),e=>{e.forEach(e=>{let t=h.get(e.id);if(!t)return;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`slot`,value:t.slot}],e.metadata={...e.metadata,[Pv]:!0,[Fv]:t.unitId,[Iv]:t.slot}})})}catch(e){A.error(`Failed to update boss HP viewport effects`,e)}}})(),()=>{s=!0}},[t,n,i,a,o,s,l]),null};var Vv=`${L}/current-turn-effect`;const Hv=()=>{let e=z(e=>e.cacheReady),t=z(e=>e.sceneReady),n=z(e=>e.items),i=z(e=>e.roomMetadata),a=z(e=>e.sceneMetadata);return(0,R.useEffect)(()=>{if(!e||!t)return;let o=!1;return(async()=>{let e=i[O.SHOW_TURN_EFFECT]===!0,t=a[O.CURRENT_TURN];if(!e||!t){try{await c.scene.local.deleteItems([Vv])}catch{}return}if(!n.find(e=>e.id===t)){try{await c.scene.local.deleteItems([Vv])}catch{}return}if(!o){try{let e=!1;if(await c.scene.local.updateItems([Vv],n=>{let r=n[0];r&&(r.attachedTo=t,e=!0)}),e)return}catch{}if(!o)try{let e=r().id(Vv).name(`Current Turn Effect`).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).sksl(`
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

`).build();await c.scene.local.addItems([e])}catch(e){A.error(`Failed to sync current turn effect`,e)}}})(),()=>{o=!0}},[e,t,n,i,a]),null},Uv=()=>{let[e,t]=(0,R.useState)(!1),{updateThemeFromSystem:n}=It(),r=z(e=>e.roomMetadata),i=z(e=>e.cacheReady),a=z(e=>e.systemData),o=z(e=>e.setSystemData),s=()=>({theme:{primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,snapshotPublicId:null});return(0,R.useEffect)(()=>{!i&&e&&(t(!1),o(null))},[i,e,o]),(0,R.useEffect)(()=>{!i||!a||n(a.theme.primary,a.theme.offset,a.theme.background,a.theme.border,a.theme.background_url)},[i,a,n]),(0,R.useEffect)(()=>{if(e)return;let n=!0,a=async()=>{if(i)try{A.log(`Starting app initialization...`),await c(),n&&(t(!0),A.log(`App initialization complete`))}catch(e){A.error(`Error during app initialization:`,e),n&&t(!0)}},c=async()=>{let e=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Snapshot ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Snapshot ${t} is not a JSON array`);return n}throw Error(`Snapshot ${t} has invalid type`)},t=async t=>{let{data:n,error:r}=await C.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:t});if(r)return A.error(`Failed to load room snapshot:`,r),!1;let i=Array.isArray(n)?n[0]:n;if(!i||typeof i.snapshot_public_id!=`string`)return A.warn(`Room snapshot reference was set, but no snapshot record was returned`),!1;let a=e(i.card_layout,`card_layout`),s=e(i.list_layout,`list_layout`),c=e(i.attributes,`attributes`);return o({theme:{primary:i.theme_primary,offset:i.theme_offset,background:i.theme_background,border:i.theme_border,background_url:i.background_url},cardLayout:a,listLayout:s,attributes:c,systemName:i.system_name,importDate:i.imported_at,snapshotPublicId:i.snapshot_public_id}),A.log(`System data hydrated from room snapshot`,{snapshotPublicId:i.snapshot_public_id,systemName:i.system_name}),!0};try{let e=r[rh.SNAPSHOT_PUBLIC_ID];if(typeof e==`string`&&e.trim().length>0&&await t(e))return;A.log(`Room snapshot reference missing or unavailable, initializing defaults`),await l()}catch(e){A.error(`Error loading system data:`,e),await l()}},l=async()=>{o(s()),A.log(`Default system initialized`)};return a(),()=>{n=!1}},[i,e,r,o,n]),(0,R.useEffect)(()=>{if(!i||!e)return;let t=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},n=r[rh.SNAPSHOT_PUBLIC_ID],c=typeof n==`string`&&n.trim().length>0?n.trim():null;if(c===(a?.snapshotPublicId??null))return;let l=!1;return(async()=>{if(!c){l||(o(s()),A.log(`Room snapshot reference cleared, reverted runtime system to defaults`));return}let{data:e,error:n}=await C.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:c});if(n){A.error(`Failed to refresh system from room snapshot change:`,n);return}let r=Array.isArray(e)?e[0]:e;if(!r||typeof r.snapshot_public_id!=`string`){A.warn(`Room snapshot reference changed, but snapshot record was not found`);return}let i=t(r.card_layout),a=t(r.list_layout),u=t(r.attributes);if(!i||!a||!u){A.warn(`Room snapshot refresh returned invalid payload arrays`);return}l||(o({theme:{primary:r.theme_primary,offset:r.theme_offset,background:r.theme_background,border:r.theme_border,background_url:r.background_url},cardLayout:i,listLayout:a,attributes:u,systemName:r.system_name,importDate:r.imported_at,snapshotPublicId:r.snapshot_public_id}),A.log(`Runtime system refreshed from room snapshot change`,{snapshotPublicId:r.snapshot_public_id,systemName:r.system_name}))})(),()=>{l=!0}},[i,e,r,a,o]),{isInitialized:e}};var Wv=m`
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
    background-color: ${e=>f(e.theme.BACKGROUND,.5)};
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
    background: ${e=>f(e.theme.BACKGROUND,.3)};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>f(e.theme.OFFSET,.5)};
    border-radius: 5px;
    
    &:hover {
      background: ${e=>f(e.theme.OFFSET,.7)};
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
`,Gv=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e2232;
  color: #ffffff;
`,Kv=T.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: #9d99ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,qv=T.p`
  margin-top: 20px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;function Jv(){let{sceneReady:e,cacheReady:t,playerData:n,roomMetadata:r,sceneMetadata:i}=z(),{isInitialized:a}=Uv(),{theme:o}=It(),{t:s}=_t(),[l,u]=(0,R.useState)(`ForgeMain`),[d,f]=(0,R.useState)(!1),p=(0,R.useRef)(!1),m=String(n?.role||``).toUpperCase()===`GM`,h=r,g=n?.id,_=(h[ne(O.PARTY_HUD_OPEN,g)]??h[O.PARTY_HUD_OPEN])===!0,v=h[O.SHOW_PLAYER_VIEW]||!1,y=m||v,b=e&&t&&a;return(0,R.useEffect)(()=>{b&&N()},[b]),(0,R.useEffect)(()=>{if(!b)return;let e=!0;return(async()=>{if(_&&!p.current){await P_(),e&&(p.current=!0);return}!_&&p.current&&(await F_(),e&&(p.current=!1))})(),()=>{e=!1}},[b,_]),(0,R.useEffect)(()=>{b&&!y&&l===`ForgeMain`&&u(`Party`)},[b,y,l]),(0,R.useEffect)(()=>{l!==`ForgeMain`&&c.action.setWidth(350)},[l]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Wv,{theme:o}),!e||!t||!a?(0,B.jsxs)(Gv,{children:[(0,B.jsx)(Kv,{}),(0,B.jsx)(qv,{children:s(e?t?a?`app.loadingFallback`:`app.initializingSystem`:`app.loadingCache`:`app.connectingScene`)})]}):(0,B.jsxs)(Qp,{children:[(0,B.jsx)(yv,{}),(0,B.jsx)(wv,{}),(0,B.jsx)(Nv,{}),(0,B.jsx)(Bv,{}),(0,B.jsx)(Hv,{}),(0,B.jsx)($p,{theme:o,$backgroundUrl:o.BACKGROUND_URL,children:(0,B.jsx)(nu,{mode:`wait`,children:(()=>{switch(l){case`ForgeMain`:return y?(0,B.jsx)(M_,{},`main`):(0,B.jsx)(av,{},`party`);case`Settings`:return m?(0,B.jsx)(Bm,{},`settings`):(0,B.jsx)(M_,{},`main`);case`Party`:return(0,B.jsx)(av,{},`party`);case`System`:return m?(0,B.jsx)(jh,{},`system`):(0,B.jsx)(M_,{},`main`);case`ChatLog`:return(0,B.jsx)(Km,{},`chatlog`)}})()})}),(0,B.jsx)(hm,{isOpen:d,currentPage:l,onToggle:()=>f(!d),onNavigate:e=>{if(!y&&e===`ForgeMain`){u(`Party`),f(!1);return}if(!m&&(e===`Settings`||e===`System`)){u(`ForgeMain`),f(!1);return}u(e),f(!1)},canAccessInitiativeList:y})]})]})}var Yv=Jv,Xv=class{static{this.ALPHANUMERICTEXTMATCH=/\s[\da-zA-Z]$/}};function Zv(e){for(let t of $v)if(e.includes(t)){let n=$v[Math.floor(Math.random()*$v.length)];return e.replace(t,n)}return Qv(e)}function Qv(e){return`${$v[Math.floor(Math.random()*$v.length)]} ${e}`}const $v=`Grizzled.Wily.Stoic.Mellow.Pensive.Shrewd.Cautious.Hardy.Nimble.Tenacious.Gritty.Tolerant.Hardy.Adroit.Resilient.Slight.Stout.Durable.Subtle.Sober.Clever.Brave.Calm.Wise.Cunning.Alert.Swift.Agile.Loyal.Sturdy.Stable.Sneaky.Clever.Resourceful.Shady.Stalwart.Vigilant.Staunch.Fierce.Vigorous.Robust.Fearless.Dauntless.Resolute.Sagacious.Prudent.Judicious.Astute.Savvy.Sharp.Quick.Witty.Smart.Snippy.Crafty.Deft.Sly.Artful.Clever.Sneering.Tough.Rugged.Solid.Strong.Sturdy.Tough.Gritty.Rough.Hardened.Burly.Muscular.Brawny.Rowdy.Forceful.Snorting.Potent.Martial.Speckled.Mottled.Disheveled`.split(`.`);var ey=`com.battle-system.forge/view-unit`,ty=`com.battle-system.forge/view-unit-player`,ny=e=>e.trim().toLowerCase(),ry=e=>{if(typeof e!=`string`)return null;let t=e.trim();return t.length>0?t:null},iy=e=>{let t=e.trim();return t?Xv.ALPHANUMERICTEXTMATCH.test(t)?t.slice(0,-2):t:e},ay=e=>{let t=typeof e.text?.plainText==`string`?e.text.plainText.trim():``;if(t.length>0)return t;let n=e.metadata?.[p.UNIT_NAME],r=typeof n==`string`?n.trim():``;if(r.length>0)return r;let i=typeof e.name==`string`?e.name.trim():``;return i.length>0?i:typeof e.name==`string`?e.name:``},oy=async e=>{let n=await c.viewport.getHeight(),r=n>800?700:n-100;await c.popover.open({id:t.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(e)}`,height:r,width:350,anchorReference:`POSITION`,anchorPosition:{left:await c.viewport.getWidth()/2,top:await c.viewport.getHeight()/2},anchorOrigin:{horizontal:`CENTER`,vertical:`CENTER`},transformOrigin:{horizontal:`CENTER`,vertical:`CENTER`},hidePaper:!0,disableClickAway:!0})},sy=async e=>{let t=Array.from(new Set(e.map(e=>e.trim()).filter(e=>e.length>0))),n=new Map;if(t.length===0)return n;let r=await dt(),i=new Map;for(let e of r){let t=ny(e.name);if(!t)continue;let n=i.get(t);n?n.push(e):i.set(t,[e])}for(let e of t){let t=ny(e),r=i.get(t)?.[0];!r||!r.metadata||n.set(t,ae(r.metadata))}try{let e=await F(t);for(let t of e){let e=ny(t.name);!e||n.has(e)||!t.metadata||n.set(e,ae(t.metadata))}let r=await nt(t);for(let e of r){let t=ny(e.name);!t||n.has(t)||!e.metadata||n.set(t,ae(e.metadata))}}catch(e){A.log(`Remote collection lookup failed, using local collection only`,e)}return n};function cy({children:e}){let t=z(e=>e.roomMetadata);z(e=>e.sceneMetadata);let n=z(e=>e.items),r=z(e=>e.playerData),i=z(e=>e.systemData),a=t,o=i?.attributes??[],s=ry(a[O.HP_CURRENT_BID]),l=ry(a[O.HP_MAX_BID]),u=bt(a,o),d=s||u.currentHpBid,f=l||u.maxHpBid,m=!!(d&&f),h=a[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?!0:a[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]===!0,g=a[O.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===void 0?!0:a[O.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===!0;return(0,R.useEffect)(()=>{c.onReady(()=>{c.contextMenu.create({id:p.ON_LIST,icons:[{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}}],async onClick(e){if(A.info(`Add to Combat Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[p.ON_LIST]===!0))await c.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[p.ON_LIST],delete t.metadata[p.INITIATIVE]});else{let t=[],r=[],i=new Set(e.items.map(e=>e.id)),o=a[O.USE_DESCRIPTIVE_DUPLICATES]===!0,s=new Set(n.filter(e=>{if(i.has(e.id))return!1;let t=e.metadata[p.UNIT_NAME];return typeof t==`string`&&t.trim().length>0}).map(e=>ny(String(e.metadata[p.UNIT_NAME]))));for(let n of e.items){if(n.metadata[p.FABRICATED]===!0)continue;let e=iy(n.text?.plainText||n.name);t.push(e)}await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let l=await sy(t);await c.action.setBadgeText(void 0);for(let t of e.items){let e={},n=t,i=ay(n);if(t.metadata[p.FABRICATED]!==!0){let r=iy(n.text?.plainText||t.name),a=l.get(ny(r));a&&Object.assign(e,a),(typeof e[p.UNIT_NAME]!=`string`||!String(e[p.UNIT_NAME]).trim())&&(e[p.UNIT_NAME]=i),e[p.FABRICATED]=!0}if(o){let r=typeof t.metadata[p.UNIT_NAME]==`string`?String(t.metadata[p.UNIT_NAME]).trim():``,a=iy(n.text?.plainText||t.name).trim(),o=String(e[p.UNIT_NAME]||r||i||a||t.name).trim(),c=ny(o);if(c){let e=0;for(;s.has(c)&&e<20;)o=Zv(o),c=ny(o),e+=1;c&&s.add(c)}e[p.UNIT_NAME]=o}(typeof e[p.UNIT_NAME]!=`string`||!String(e[p.UNIT_NAME]).trim())&&(e[p.UNIT_NAME]=i),e[p.ON_LIST]=!0,e[p.INITIATIVE]=0,r.push({id:t.id,metadata:e})}await c.scene.items.updateItems(e.items,e=>{for(let t of e){let e=r.find(e=>e.id===t.id);if(e&&(Object.assign(t.metadata,e.metadata),a[O.SHOW_NAMES]===!0)){let n=t,r=typeof e.metadata[p.UNIT_NAME]==`string`&&String(e.metadata[p.UNIT_NAME]).trim().length>0?String(e.metadata[p.UNIT_NAME]).trim():ay(n);n.text&&(n.text.plainText=r)}}})}}}),c.contextMenu.create({id:p.IN_PARTY,icons:[{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`!=`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`!=`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`==`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`==`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){A.info(`Add to Party Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[p.IN_PARTY]===!0)?await c.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[p.IN_PARTY]}):await c.scene.items.updateItems(e.items,e=>{for(let t of e)t.metadata[p.IN_PARTY]=!0})}}),c.contextMenu.create({id:ey,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}}],async onClick(e){A.info(`View Unit Clicked: ${e.items[0].name}`);let t=e.items[0];if(!t)return;let r={};if(t.metadata[p.FABRICATED]!==!0){let e=t,i=ay(e),o=iy(e.text?.plainText||t.name);await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let s=await sy([o]);await c.action.setBadgeText(void 0);let l=s.get(ny(o));l&&Object.assign(r,l),(typeof r[p.UNIT_NAME]!=`string`||!String(r[p.UNIT_NAME]).trim())&&(r[p.UNIT_NAME]=i),r[p.FABRICATED]=!0,a[O.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[p.UNIT_NAME]!=null&&e.id!==t.id).map(e=>e.metadata[p.UNIT_NAME]).includes(o)&&(r[p.UNIT_NAME]=Zv(o)),await c.scene.items.updateItems([t],e=>{let t=e[0];if(Object.assign(t.metadata,r),a[O.SHOW_NAMES]===!0){let e=t,n=typeof r[p.UNIT_NAME]==`string`&&String(r[p.UNIT_NAME]).trim().length>0?String(r[p.UNIT_NAME]).trim():ay(e);e.text&&(e.text.plainText=n)}})}await oy(t.id)}}),g?c.contextMenu.create({id:ty,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){A.info(`View Unit Clicked: ${e.items[0].name}`);let t=e.items[0];if(!t)return;let r={};if(t.metadata[p.FABRICATED]!==!0){let e=t,i=ay(e),o=iy(e.text?.plainText||t.name);await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let s=await sy([o]);await c.action.setBadgeText(void 0);let l=s.get(ny(o));l&&Object.assign(r,l),(typeof r[p.UNIT_NAME]!=`string`||!String(r[p.UNIT_NAME]).trim())&&(r[p.UNIT_NAME]=i),r[p.FABRICATED]=!0,a[O.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[p.UNIT_NAME]!=null&&e.id!==t.id).map(e=>e.metadata[p.UNIT_NAME]).includes(o)&&(r[p.UNIT_NAME]=Zv(o)),await c.scene.items.updateItems([t],e=>{let t=e[0];if(Object.assign(t.metadata,r),a[O.SHOW_NAMES]===!0){let e=t,n=typeof r[p.UNIT_NAME]==`string`&&String(r[p.UNIT_NAME]).trim().length>0?String(r[p.UNIT_NAME]).trim():ay(e);e.text&&(e.text.plainText=n)}})}await oy(t.id)}}):c.contextMenu.remove(ty).catch(()=>{}),m&&h?c.contextMenu.create({id:p.MODIFY_UNIT,icons:[{icon:`/icon.svg`,label:`Adjust HP`,filter:{some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Adjust HP`,filter:{every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e,t){A.info(`Adjust HP Clicked: ${e.items[0].name}`),await c.popover.open({id:ee.CONTEXT_MENU,url:`/pages/forgecontext.html`,height:50,width:180,anchorElementId:t,hidePaper:!0})},embed:{url:`/pages/forgecontext.html?contextmenu=true`,height:70}}):c.contextMenu.remove(p.MODIFY_UNIT).catch(()=>{})})},[a,m,h,g]),(0,B.jsx)(B.Fragment,{children:e})}Dt.createRoot(document.getElementById(`root`)).render((0,B.jsx)(R.StrictMode,{children:(0,B.jsx)(te,{children:(0,B.jsx)(Nt,{children:(0,B.jsx)(cy,{children:(0,B.jsx)(Ft,{children:(0,B.jsx)(Yv,{})})})})})}));