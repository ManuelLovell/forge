import{A as e,C as t,D as n,E as r,F as i,L as a,M as o,N as s,O as c,R as l,S as u,T as d,_ as f,b as p,c as m,d as h,f as g,g as _,h as v,j as y,k as b,l as x,m as S,o as C,p as w,s as T,t as E,u as ee,v as te,w as ne,x as re,y as D}from"./defaultgamesystem-Dpv8RqCc.js";import{$ as ie,A as ae,B as oe,C as se,Ct as ce,D as le,Dt as O,E as k,Et as ue,F as de,G as fe,H as pe,I as me,J as he,K as ge,L as _e,M as ve,N as ye,O as be,Ot as xe,P as A,Q as Se,R as Ce,S as we,St as Te,Tt as Ee,U as De,V as j,W as Oe,X as ke,Y as Ae,Z as je,_ as Me,_t as Ne,at as Pe,b as Fe,bt as Ie,c as Le,ct as M,d as Re,dt as ze,et as Be,f as Ve,ft as He,g as Ue,gt as We,h as Ge,ht as Ke,it as qe,j as Je,k as Ye,kt as Xe,l as Ze,lt as N,m as P,mt as Qe,n as $e,nt as F,ot as et,pt as tt,q as nt,r as rt,rt as it,s as at,st as ot,tt as st,u as ct,ut as lt,v as ut,vt as dt,w as ft,wt as pt,xt as mt,y as ht,yt as gt,z as _t}from"./unitCollectionRemote-Bz40qrs3.js";import{n as vt,t as I}from"./MockData-DTzuSraw.js";var yt=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},bt=(e=>e?yt(e):yt),L=l(i(),1),xt=e=>e;function St(e,t=xt){let n=L.useSyncExternalStore(e.subscribe,L.useCallback(()=>t(e.getState()),[e,t]),L.useCallback(()=>t(e.getInitialState()),[e,t]));return L.useDebugValue(n),n}var Ct=e=>{let t=bt(e),n=e=>St(t,e);return Object.assign(n,t),n},wt=(e=>e?Ct(e):Ct),Tt=l(s(),1);const R=wt(e=>({cacheReady:!1,setCacheReady:t=>e({cacheReady:t}),sceneReady:!1,setSceneReady:t=>e({sceneReady:t}),items:[],setItems:t=>e({items:t}),localItems:[],setLocalItems:t=>e({localItems:t}),sceneMetadata:{},setSceneMetadata:t=>e({sceneMetadata:{...t}}),roomMetadata:{},setRoomMetadata:t=>e({roomMetadata:{...t}}),gridDpi:150,setGridDpi:t=>e({gridDpi:t}),playerData:void 0,setPlayerData:t=>e({playerData:t}),partyData:[],setPartyData:t=>e({partyData:t}),systemData:null,setSystemData:t=>e({systemData:t})}));var Et=0;const Dt=wt(e=>({messages:[],initialized:!1,addMessage:t=>{let n=new Date,r=n.getHours(),i=n.getMinutes(),a=r>=12?`PM`:`AM`,o=`${r%12||12}:${i<10?`0${i}`:i} ${a}`;e(e=>({messages:[...e.messages,{id:Et++,text:t,timestamp:o}]}))},setInitialized:t=>e({initialized:t})})),Ot=()=>{Dt.getState().initialized||(c.broadcast.onMessage(`${t.EXTENSIONID}/chatlog`,e=>{let t=Dt.getState().addMessage;typeof e.data==`string`?t(e.data):typeof e.data==`object`&&e.data.message&&t(e.data.message)}),Dt.getState().setInitialized(!0))};var z=d(),kt=`${t.EXTENSIONID}/chatlog`,At=`${t.EXTENSIONID}/roll-notification`;function jt({children:e}){let t=R(e=>e.setItems),n=R(e=>e.setLocalItems),r=R(e=>e.setSceneMetadata),i=R(e=>e.setRoomMetadata),a=R(e=>e.setGridDpi),o=R(e=>e.setPlayerData),s=R(e=>e.setPartyData),l=R(e=>e.setSceneReady),u=R(e=>e.setCacheReady);return(0,L.useEffect)(()=>{let e=(e,t)=>{let n=t[D.ENABLE_CONSOLE_LOG];typeof n==`boolean`&&O.setEnabled(n)},d=e=>{Xe(e);let{sceneMetadata:t,roomMetadata:n}=R.getState(),r=n,i=r[D.ENABLE_OBR_NOTIFICATION];if(r[D.SHOW_NOTIFICATION_TO_ALL]===!0){c.broadcast.sendMessage(kt,{message:e},{destination:`ALL`}),i===!0&&c.broadcast.sendMessage(At,{message:e},{destination:`ALL`});return}Dt.getState().addMessage(e),i===!0&&c.notification.show(e,`SUCCESS`)},f=({explicitMessage:e,tokenName:t,actionName:n,total:r})=>{if(typeof e==`string`&&e.trim().length>0)return e;let i=t||`Unknown`,a=n||`Action`;return typeof r==`number`&&Number.isFinite(r)?`${i} rolled ${a} for ${r}!`:`${i} rolled ${a}.`};Ot();let p=c.broadcast.onMessage(At,e=>{let t=e.data,n=typeof t?.message==`string`?t.message:null;n&&c.notification.show(n,`SUCCESS`)});mt(e=>{let t=Ie(e.rollHtml);d(f({tokenName:e.senderName,actionName:e.actionName,total:t}))}),ce(e=>{d(f({explicitMessage:e.message}))}),Te(e=>{d(f({tokenName:e.playerName,actionName:e.result.diceNotation,total:e.result.totalValue}))}),pt(e=>{let t=e.output.trim();d(t.length>0?`${e.senderName} rolled ${e.actionName} for ${e.total}. ${t}`:f({tokenName:e.senderName,actionName:e.actionName,total:e.total}))});let m,h,g,_,v,y,b,x,S=async()=>{let[l,d,f,p,m,S,C,w,T,E,ee,te,ne]=await Promise.all([c.scene.items.getItems(),c.scene.local.getItems(),c.scene.getMetadata(),c.room.getMetadata(),c.scene.grid.getDpi(),c.party.getPlayers(),c.player.getSelection(),c.player.getColor(),c.player.getRole(),c.player.getConnectionId(),c.player.getId(),c.player.getMetadata(),c.player.getName()]);t(l),n(d),r(f),i(p),e(f,p),a(m),o({id:ee,name:ne,connectionId:E,role:T,color:w,selection:C,metadata:te}),s(S),h=c.scene.items.onChange(t),g=c.scene.local.onChange(n),y=c.scene.grid.onChange(e=>a(e.dpi)),b=c.player.onChange(o),x=c.party.onChange(s),_=c.scene.onMetadataChange(t=>{r(t),e(t,R.getState().roomMetadata)}),v=c.room.onMetadataChange(t=>{i(t),e(R.getState().sceneMetadata,t)}),u(!0),O.log(`CacheManager: Cache is ready`)};return c.onReady(async()=>{let e=await c.scene.isReady();l(e),e&&(O.log(`Scene is ready on initial load, syncing cache...`),await S()),m=c.scene.onReadyChange(async e=>{l(e),e?(O.log(`Scene became ready, syncing cache...`),await S()):(O.log(`Scene is no longer ready, clearing cache...`),u(!1))})}),()=>{m?.(),h?.(),g?.(),_?.(),v?.(),y?.(),b?.(),x?.(),p?.()}},[l,u,t,n,r,i,a,o,s]),(0,z.jsx)(z.Fragment,{children:e})}var Mt=(0,L.createContext)(void 0);const Nt=({children:e})=>{let[t,n]=(0,L.useState)(v),r=(0,L.useCallback)((e,t,r,i,a)=>{n(n=>n.PRIMARY===e&&n.OFFSET===t&&n.BACKGROUND===r&&n.BORDER===i&&n.BACKGROUND_URL===(a||void 0)?n:_(e,t,r,i,a))},[]);return(0,z.jsx)(Mt.Provider,{value:{theme:t,setTheme:n,updateThemeFromSystem:r},children:e})},Pt=()=>{let e=(0,L.useContext)(Mt);if(!e)throw Error(`useForgeTheme must be used within a ThemeProvider`);return e};var Ft=(0,L.createContext)({});function It(e){let t=(0,L.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Lt=typeof window<`u`,Rt=Lt?L.useLayoutEffect:L.useEffect,zt=(0,L.createContext)(null);function Bt(e,t){e.indexOf(t)===-1&&e.push(t)}function Vt(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Ht=(e,t,n)=>n>t?t:n<e?e:n,Ut={},Wt=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Gt(e){return typeof e==`object`&&!!e}var Kt=e=>/^0[^.\s]+$/u.test(e);function qt(e){let t;return()=>(t===void 0&&(t=e()),t)}var Jt=e=>e,Yt=(e,t)=>n=>t(e(n)),Xt=(...e)=>e.reduce(Yt),Zt=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},Qt=class{constructor(){this.subscriptions=[]}add(e){return Bt(this.subscriptions,e),()=>Vt(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},$t=e=>e*1e3,en=e=>e/1e3;function tn(e,t){return t?e*(1e3/t):0}var nn=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,rn=1e-7,an=12;function on(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=nn(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>rn&&++s<an);return o}function sn(e,t,n,r){if(e===t&&n===r)return Jt;let i=t=>on(t,0,1,e,n);return e=>e===0||e===1?e:nn(i(e),t,r)}var cn=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ln=e=>t=>1-e(1-t),un=sn(.33,1.53,.69,.99),dn=ln(un),fn=cn(dn),B=e=>(e*=2)<1?.5*dn(e):.5*(2-2**(-10*(e-1))),pn=e=>1-Math.sin(Math.acos(e)),mn=ln(pn),hn=cn(pn),gn=sn(.42,0,1,1),_n=sn(0,0,.58,1),vn=sn(.42,0,.58,1),yn=e=>Array.isArray(e)&&typeof e[0]!=`number`,bn=e=>Array.isArray(e)&&typeof e[0]==`number`,xn={linear:Jt,easeIn:gn,easeInOut:vn,easeOut:_n,circIn:pn,circInOut:hn,circOut:mn,backIn:dn,backInOut:fn,backOut:un,anticipate:B},Sn=e=>typeof e==`string`,Cn=e=>{if(bn(e)){e.length;let[t,n,r,i]=e;return sn(t,n,r,i)}else if(Sn(e))return xn[e],`${e}`,xn[e];return e},wn=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],Tn={value:null,addProjectionMetrics:null};function En(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.has(e)||s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),t&&Tn.value&&Tn.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Dn=40;function On(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=wn.reduce((e,n)=>(e[n]=En(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Ut.useManualTiming?i.timestamp:performance.now();n=!1,Ut.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,Dn),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:wn.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<wn.length;t++)o[wn[t]].cancel(e)},state:i,steps:o}}var{schedule:V,cancel:kn,state:H,steps:An}=On(typeof requestAnimationFrame<`u`?requestAnimationFrame:Jt,!0),jn;function Mn(){jn=void 0}var Nn={now:()=>(jn===void 0&&Nn.set(H.isProcessing||Ut.useManualTiming?H.timestamp:performance.now()),jn),set:e=>{jn=e,queueMicrotask(Mn)}},Pn={layout:0,mainThread:0,waapi:0},Fn=e=>t=>typeof t==`string`&&t.startsWith(e),In=Fn(`--`),Ln=Fn(`var(--`),Rn=e=>Ln(e)?zn.test(e.split(`/*`)[0].trim()):!1,zn=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Bn(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Vn={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Hn={...Vn,transform:e=>Ht(0,1,e)},Un={...Vn,default:1},Wn=e=>Math.round(e*1e5)/1e5,Gn=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Kn(e){return e==null}var qn=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Jn=(e,t)=>n=>!!(typeof n==`string`&&qn.test(n)&&n.startsWith(e)||t&&!Kn(n)&&Object.prototype.hasOwnProperty.call(n,t)),Yn=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Gn);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Xn=e=>Ht(0,255,e),Zn={...Vn,transform:e=>Math.round(Xn(e))},Qn={test:Jn(`rgb`,`red`),parse:Yn(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Zn.transform(e)+`, `+Zn.transform(t)+`, `+Zn.transform(n)+`, `+Wn(Hn.transform(r))+`)`};function $n(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var er={test:Jn(`#`),parse:$n,transform:Qn.transform},tr=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),nr=tr(`deg`),rr=tr(`%`),U=tr(`px`),ir=tr(`vh`),ar=tr(`vw`),or=(()=>({...rr,parse:e=>rr.parse(e)/100,transform:e=>rr.transform(e*100)}))(),sr={test:Jn(`hsl`,`hue`),parse:Yn(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+rr.transform(Wn(t))+`, `+rr.transform(Wn(n))+`, `+Wn(Hn.transform(r))+`)`},W={test:e=>Qn.test(e)||er.test(e)||sr.test(e),parse:e=>Qn.test(e)?Qn.parse(e):sr.test(e)?sr.parse(e):er.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?Qn.transform(e):sr.transform(e),getAnimatableNone:e=>{let t=W.parse(e);return t.alpha=0,W.transform(t)}},cr=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function lr(e){return isNaN(e)&&typeof e==`string`&&(e.match(Gn)?.length||0)+(e.match(cr)?.length||0)>0}var ur=`number`,dr=`color`,fr=`var`,pr=`var(`,mr="${}",hr=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function gr(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(hr,e=>(W.test(e)?(r.color.push(a),i.push(dr),n.push(W.parse(e))):e.startsWith(pr)?(r.var.push(a),i.push(fr),n.push(e)):(r.number.push(a),i.push(ur),n.push(parseFloat(e))),++a,mr)).split(mr),indexes:r,types:i}}function _r(e){return gr(e).values}function vr(e){let{split:t,types:n}=gr(e),r=t.length;return e=>{let i=``;for(let a=0;a<r;a++)if(i+=t[a],e[a]!==void 0){let t=n[a];t===ur?i+=Wn(e[a]):t===dr?i+=W.transform(e[a]):i+=e[a]}return i}}var yr=e=>typeof e==`number`?0:W.test(e)?W.getAnimatableNone(e):e;function br(e){let t=_r(e);return vr(e)(t.map(yr))}var xr={test:lr,parse:_r,createTransformer:vr,getAnimatableNone:br};function Sr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Cr({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Sr(s,r,e+1/3),a=Sr(s,r,e),o=Sr(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function wr(e,t){return n=>n>0?t:e}var G=(e,t,n)=>e+(t-e)*n,Tr=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Er=[er,Qn,sr],Dr=e=>Er.find(t=>t.test(e));function Or(e){let t=Dr(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===sr&&(n=Cr(n)),n}var kr=(e,t)=>{let n=Or(e),r=Or(t);if(!n||!r)return wr(e,t);let i={...n};return e=>(i.red=Tr(n.red,r.red,e),i.green=Tr(n.green,r.green,e),i.blue=Tr(n.blue,r.blue,e),i.alpha=G(n.alpha,r.alpha,e),Qn.transform(i))},Ar=new Set([`none`,`hidden`]);function jr(e,t){return Ar.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Mr(e,t){return n=>G(e,t,n)}function Nr(e){return typeof e==`number`?Mr:typeof e==`string`?Rn(e)?wr:W.test(e)?kr:Lr:Array.isArray(e)?Pr:typeof e==`object`?W.test(e)?kr:Fr:wr}function Pr(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Nr(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Fr(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Nr(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Ir(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Lr=(e,t)=>{let n=xr.createTransformer(t),r=gr(e),i=gr(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Ar.has(e)&&!i.values.length||Ar.has(t)&&!r.values.length?jr(e,t):Xt(Pr(Ir(r,i),i.values),n):(`${e}${t}`,wr(e,t))};function Rr(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?G(e,t,n):Nr(e)(e,t)}var zr=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>V.update(t,e),stop:()=>kn(t),now:()=>H.isProcessing?H.timestamp:Nn.now()}},Br=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Vr=2e4;function Hr(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Ur(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Hr(r),Vr);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:en(i)}}var Wr=5;function Gr(e,t,n){let r=Math.max(t-Wr,0);return tn(n-e(r),t-r)}var K={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Kr=.001;function qr({duration:e=K.duration,bounce:t=K.bounce,velocity:n=K.velocity,mass:r=K.mass}){let i,a;K.maxDuration;let o=1-t;o=Ht(K.minDamping,K.maxDamping,o),e=Ht(K.minDuration,K.maxDuration,en(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Xr(t,o),c=Math.exp(-i);return Kr-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Xr(t**2,o);return(-i(t)+Kr>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Kr+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Yr(i,a,s);if(e=$t(e),isNaN(c))return{stiffness:K.stiffness,damping:K.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Jr=12;function Yr(e,t,n){let r=n;for(let n=1;n<Jr;n++)r-=e(r)/t(r);return r}function Xr(e,t){return e*Math.sqrt(1-t*t)}var Zr=[`duration`,`bounce`],Qr=[`stiffness`,`damping`,`mass`];function $r(e,t){return t.some(t=>e[t]!==void 0)}function ei(e){let t={velocity:K.velocity,stiffness:K.stiffness,damping:K.damping,mass:K.mass,isResolvedFromDuration:!1,...e};if(!$r(e,Qr)&&$r(e,Zr))if(e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Ht(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:K.mass,stiffness:i,damping:a}}else{let n=qr(e);t={...t,...n,mass:K.mass},t.isResolvedFromDuration=!0}return t}function ti(e=K.visualDuration,t=K.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=ei({...n,velocity:-en(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=en(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?K.restSpeed.granular:K.restSpeed.default,i||=v?K.restDelta.granular:K.restDelta.default;let y;if(h<1){let e=Xr(_,h);y=t=>o-Math.exp(-h*_*t)*((m+h*_*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}else if(h===1)y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}let b={calculatedDuration:p&&d||null,next:e=>{let t=y(e);if(p)s.done=e>=d;else{let n=e===0?m:0;h<1&&(n=e===0?$t(m):Gr(y,e,t));let a=Math.abs(n)<=r,c=Math.abs(o-t)<=i;s.done=a&&c}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Hr(b),Vr),t=Br(t=>b.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return b}ti.applyToOptions=e=>{let t=Ur(e,100,ti);return e.ease=t.ease,e.duration=$t(t.duration),e.type=`keyframes`,e};function ni({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=ti({keyframes:[f.value,m(f.value)],velocity:Gr(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function ri(e,t,n){let r=[],i=n||Ut.mix||Rr,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Xt(Array.isArray(t)?t[n]||Jt:t,a)),r.push(a)}return r}function ii(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=ri(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=Zt(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Ht(e[0],e[a-1],t)):l}function ai(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=Zt(0,t,r);e.push(G(n,1,i))}}function oi(e){let t=[0];return ai(t,e.length-1),t}function si(e,t){return e.map(e=>e*t)}function ci(e,t){return e.map(()=>t||vn).splice(0,e.length-1)}function li({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=yn(r)?r.map(Cn):Cn(r),a={done:!1,value:t[0]},o=ii(si(n&&n.length===t.length?n:oi(t),e),t,{ease:Array.isArray(i)?i:ci(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var ui=e=>e!==null;function di(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(ui),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var fi={decay:ni,inertia:ni,tween:li,keyframes:li,spring:ti};function pi(e){typeof e.type==`string`&&(e.type=fi[e.type])}var mi=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},hi=e=>e/100,gi=class extends mi{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Nn.now()&&this.tick(Nn.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},Pn.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;pi(e);let{type:t=li,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||li;s!==li&&typeof o[0]!=`number`&&(this.mixKeyframes=Xt(hi,Rr(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Hr(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Ht(0,1,n)*o}let b=_?{done:!1,value:l[0]}:y.next(v);i&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==ni&&(b.value=di(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return en(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+en(e)}get time(){return en(this.currentTime)}set time(e){e=$t(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Nn.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=en(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=zr,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Nn.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,Pn.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function _i(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var vi=e=>e*180/Math.PI,yi=e=>xi(vi(Math.atan2(e[1],e[0]))),bi={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:yi,rotateZ:yi,skewX:e=>vi(Math.atan(e[1])),skewY:e=>vi(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},xi=e=>(e%=360,e<0&&(e+=360),e),Si=yi,Ci=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),wi=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Ti={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ci,scaleY:wi,scale:e=>(Ci(e)+wi(e))/2,rotateX:e=>xi(vi(Math.atan2(e[6],e[5]))),rotateY:e=>xi(vi(Math.atan2(-e[2],e[0]))),rotateZ:Si,rotate:Si,skewX:e=>vi(Math.atan(e[4])),skewY:e=>vi(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Ei(e){return e.includes(`scale`)?1:0}function Di(e,t){if(!e||e===`none`)return Ei(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Ti,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=bi,i=t}if(!i)return Ei(t);let a=r[t],o=i[1].split(`,`).map(ki);return typeof a==`function`?a(o):o[a]}var Oi=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Di(n,t)};function ki(e){return parseFloat(e.trim())}var Ai=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],ji=(()=>new Set(Ai))(),Mi=e=>e===Vn||e===U,Ni=new Set([`x`,`y`,`z`]),Pi=Ai.filter(e=>!Ni.has(e));function Fi(e){let t=[];return Pi.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var Ii={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Di(t,`x`),y:(e,{transform:t})=>Di(t,`y`)};Ii.translateX=Ii.x,Ii.translateY=Ii.y;var Li=new Set,Ri=!1,zi=!1,Bi=!1;function Vi(){if(zi){let e=Array.from(Li).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Fi(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}zi=!1,Ri=!1,Li.forEach(e=>e.complete(Bi)),Li.clear()}function Hi(){Li.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(zi=!0)})}function Ui(){Bi=!0,Hi(),Vi(),Bi=!1}var Wi=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Li.add(this),Ri||(Ri=!0,V.read(Hi),V.resolveKeyframes(Vi))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}_i(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Li.delete(this)}cancel(){this.state===`scheduled`&&(Li.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Gi=e=>e.startsWith(`--`);function Ki(e,t,n){Gi(t)?e.style.setProperty(t,n):e.style[t]=n}var qi=qt(()=>window.ScrollTimeline!==void 0),Ji={};function Yi(e,t){let n=qt(e);return()=>Ji[t]??n()}var Xi=Yi(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Zi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Qi={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Zi([0,.65,.55,1]),circOut:Zi([.55,0,1,.45]),backIn:Zi([.31,.01,.66,-.59]),backOut:Zi([.33,1.53,.69,.99])};function $i(e,t){if(e)return typeof e==`function`?Xi()?Br(e,t):`ease-out`:bn(e)?Zi(e):Array.isArray(e)?e.map(e=>$i(e,t)||Qi.easeOut):Qi[e]}function ea(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=$i(s,i);Array.isArray(d)&&(u.easing=d),Tn.value&&Pn.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return Tn.value&&p.finished.finally(()=>{Pn.waapi--}),p}function ta(e){return typeof e==`function`&&`applyToOptions`in e}function na({type:e,...t}){return ta(e)&&Xi()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var ra=class extends mi{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=na(e);this.animation=ea(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=di(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):Ki(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return en(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+en(e)}get time(){return en(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=$t(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&qi()?(this.animation.timeline=e,Jt):t(this)}},ia={anticipate:B,backInOut:fn,circInOut:hn};function aa(e){return e in ia}function oa(e){typeof e.ease==`string`&&aa(e.ease)&&(e.ease=ia[e.ease])}var sa=10,ca=class extends ra{constructor(e){oa(e),pi(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new gi({...a,autoplay:!1}),s=Math.max(sa,Nn.now()-this.startTime),c=Ht(0,sa,s-sa);t.setWithVelocity(o.sample(Math.max(0,s-c)).value,o.sample(s).value,c),o.stop()}},la=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(xr.test(e)||e===`0`)&&!e.startsWith(`url(`));function ua(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function da(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=la(i,t),s=la(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:ua(e)||(n===`spring`||ta(n))&&r}function fa(e){e.duration=0,e.type=`keyframes`}var pa=new Set([`opacity`,`clipPath`,`filter`,`transform`]),ma=qt(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function ha(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:s,transformTemplate:c}=t.owner.getProps();return ma()&&n&&pa.has(n)&&(n!==`transform`||!c)&&!s&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var ga=40,_a=class extends mi{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Nn.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||Wi)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Nn.now(),da(e,i,a,o)||((Ut.instantAnimations||!s)&&l?.(di(e,n,t)),e[0]=e[e.length-1],fa(n),n.repeat=0);let u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>ga?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!c&&ha(u),f=u.motionValue?.owner?.current,p=d?new ca({...u,element:f}):new gi(u);p.finished.then(()=>{this.notifyFinished()}).catch(Jt),this.pendingTimeline&&=(this.stopTimeline=p.attachTimeline(this.pendingTimeline),void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Ui()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function va(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var ya=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ba(e){let t=ya.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function xa(e,t,n=1){`${e}`;let[r,i]=ba(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Wt(e)?parseFloat(e):e}return Rn(i)?xa(i,t,n+1):i}var Sa={type:`spring`,stiffness:500,damping:25,restSpeed:10},Ca=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),wa={type:`keyframes`,duration:.8},Ta={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Ea=(e,{keyframes:t})=>t.length>2?wa:ji.has(e)?e.startsWith(`scale`)?Ca(t[1]):Sa:Ta,Da=e=>e!==null;function Oa(e,{repeat:t,repeatType:n=`loop`},r){let i=e.filter(Da),a=t&&n!==`loop`&&t%2==1?0:i.length-1;return!a||r===void 0?i[a]:r}function ka(e,t){return e?.[t]??e?.default??e}function Aa({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:l,...u}){return!!Object.keys(u).length}var ja=(e,t,n,r={},i,a)=>o=>{let s=ka(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=$t(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Aa(s)||Object.assign(u,Ea(e,u)),u.duration&&=$t(u.duration),u.repeatDelay&&=$t(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(fa(u),u.delay===0&&(d=!0)),(Ut.instantAnimations||Ut.skipAnimations)&&(d=!0,fa(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Oa(u.keyframes,s);if(e!==void 0){V.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new gi(u):new _a(u)};function Ma(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Na(e,t,n,r){if(typeof t==`function`){let[i,a]=Ma(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Ma(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Pa(e,t,n){let r=e.getProps();return Na(r,t,n===void 0?r.custom:n,e)}var Fa=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Ai]),Ia=30,La=e=>!isNaN(parseFloat(e)),Ra={current:void 0},za=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Nn.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Nn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=La(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Qt);let n=this.events[e].add(t);return e===`change`?()=>{n(),V.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ra.current&&Ra.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Nn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ia)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Ia);return tn(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Ba(e,t){return new za(e,t)}var Va=e=>Array.isArray(e);function Ha(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ba(n))}function Ua(e){return Va(e)?e[e.length-1]||0:e}function Wa(e,t){let{transitionEnd:n={},transition:r={},...i}=Pa(e,t)||{};for(let t in i={...i,...n},i)Ha(e,t,Ua(i[t]))}var Ga=e=>!!(e&&e.getVelocity);function Ka(e){return!!(Ga(e)&&e.add)}function qa(e,t){let n=e.getValue(`willChange`);if(Ka(n))return n.add(t);if(!n&&Ut.WillChange){let n=new Ut.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Ja(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Ya=`data-`+Ja(`framerAppearId`);function Xa(e){return e.props[Ya]}function Za({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Qa(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);let c=[],l=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||l&&Za(l,t))continue;let o={delay:n,...ka(a||{},t)},u=r.get();if(u!==void 0&&!r.isAnimating&&!Array.isArray(i)&&i===u&&!o.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){let n=Xa(e);if(n){let e=window.MotionHandoffAnimation(n,t,V);e!==null&&(o.startTime=e,d=!0)}}qa(e,t),r.start(ja(t,r,i,e.shouldReduceMotion&&Fa.has(t)?{type:!1}:o,e,d));let f=r.animation;f&&c.push(f)}return o&&Promise.all(c).then(()=>{V.update(()=>{o&&Wa(e,o)})}),c}function $a(e,t,n={}){let r=Pa(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Qa(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return eo(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function eo(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push($a(c,t,{...o,delay:n+(typeof r==`function`?0:r)+va(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function to(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>$a(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=$a(e,t,n);else{let i=typeof t==`function`?Pa(e,t,n.custom):t;r=Promise.all(Qa(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var no={test:e=>e===`auto`,parse:e=>e},ro=e=>t=>t.test(e),io=[Vn,U,rr,nr,ar,ir,no],ao=e=>io.find(ro(e));function oo(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||Kt(e)}var so=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function co(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Gn)||[];if(!r)return e;let i=n.replace(r,``),a=so.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var lo=/\b([a-z-]*)\(.*?\)/gu,uo={...xr,getAnimatableNone:e=>{let t=e.match(lo);return t?t.map(co).join(` `):e}},fo={...Vn,transform:Math.round},po={borderWidth:U,borderTopWidth:U,borderRightWidth:U,borderBottomWidth:U,borderLeftWidth:U,borderRadius:U,borderTopLeftRadius:U,borderTopRightRadius:U,borderBottomRightRadius:U,borderBottomLeftRadius:U,width:U,maxWidth:U,height:U,maxHeight:U,top:U,right:U,bottom:U,left:U,inset:U,insetBlock:U,insetBlockStart:U,insetBlockEnd:U,insetInline:U,insetInlineStart:U,insetInlineEnd:U,padding:U,paddingTop:U,paddingRight:U,paddingBottom:U,paddingLeft:U,paddingBlock:U,paddingBlockStart:U,paddingBlockEnd:U,paddingInline:U,paddingInlineStart:U,paddingInlineEnd:U,margin:U,marginTop:U,marginRight:U,marginBottom:U,marginLeft:U,marginBlock:U,marginBlockStart:U,marginBlockEnd:U,marginInline:U,marginInlineStart:U,marginInlineEnd:U,fontSize:U,backgroundPositionX:U,backgroundPositionY:U,rotate:nr,rotateX:nr,rotateY:nr,rotateZ:nr,scale:Un,scaleX:Un,scaleY:Un,scaleZ:Un,skew:nr,skewX:nr,skewY:nr,distance:U,translateX:U,translateY:U,translateZ:U,x:U,y:U,z:U,perspective:U,transformPerspective:U,opacity:Hn,originX:or,originY:or,originZ:U,zIndex:fo,fillOpacity:Hn,strokeOpacity:Hn,numOctaves:fo},mo={...po,color:W,backgroundColor:W,outlineColor:W,fill:W,stroke:W,borderColor:W,borderTopColor:W,borderRightColor:W,borderBottomColor:W,borderLeftColor:W,filter:uo,WebkitFilter:uo},ho=e=>mo[e];function go(e,t){let n=ho(e);return n!==uo&&(n=xr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var _o=new Set([`auto`,`none`,`0`]);function vo(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!_o.has(t)&&gr(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=go(n,i)}var yo=class extends Wi{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Rn(r))){let i=xa(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Fa.has(n)||e.length!==2)return;let[r,i]=e,a=ao(r),o=ao(i);if(Bn(r)!==Bn(i)&&Ii[n]){this.needsMeasurement=!0;return}if(a!==o)if(Mi(a)&&Mi(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Ii[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||oo(e[t]))&&n.push(t);n.length&&vo(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ii[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Ii[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function bo(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var xo=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function So(e){return Gt(e)&&`offsetHeight`in e}var{schedule:Co,cancel:wo}=On(queueMicrotask,!1),To={x:!1,y:!1};function Eo(){return To.x||To.y}function Do(e){return e===`x`||e===`y`?To[e]?null:(To[e]=!0,()=>{To[e]=!1}):To.x||To.y?null:(To.x=To.y=!0,()=>{To.x=To.y=!1})}function Oo(e,t){let n=bo(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function ko(e){return!(e.pointerType===`touch`||Eo())}function Ao(e,t,n={}){let[r,i,a]=Oo(e,n),o=e=>{if(!ko(e))return;let{target:n}=e,r=t(n,e);if(typeof r!=`function`||!n)return;let a=e=>{ko(e)&&(r(e),n.removeEventListener(`pointerleave`,a))};n.addEventListener(`pointerleave`,a,i)};return r.forEach(e=>{e.addEventListener(`pointerenter`,o,i)}),a}var jo=(e,t)=>t?e===t?!0:jo(e,t.parentElement):!1,Mo=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,No=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Po(e){return No.has(e.tagName)||e.isContentEditable===!0}var Fo=new WeakSet;function Io(e){return t=>{t.key===`Enter`&&e(t)}}function Lo(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Ro=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Io(()=>{if(Fo.has(n))return;Lo(n,`down`);let e=Io(()=>{Lo(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Lo(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function zo(e){return Mo(e)&&!Eo()}function Bo(e,t,n={}){let[r,i,a]=Oo(e,n),o=e=>{let r=e.currentTarget;if(!zo(e))return;Fo.add(r);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),Fo.has(r)&&Fo.delete(r),zo(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||jo(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),So(e)&&(e.addEventListener(`focus`,e=>Ro(e,i)),!Po(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Vo(e){return Gt(e)&&`ownerSVGElement`in e}function Ho(e){return Vo(e)&&e.tagName===`svg`}var Uo=[...io,W,xr],Wo=e=>Uo.find(ro(e)),Go=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ko=()=>({x:Go(),y:Go()}),qo=()=>({min:0,max:0}),Jo=()=>({x:qo(),y:qo()}),Yo={current:null},Xo={current:!1},Zo=typeof window<`u`;function Qo(){if(Xo.current=!0,Zo)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Yo.current=e.matches;e.addEventListener(`change`,t),t()}else Yo.current=!1}var $o=new WeakMap;function es(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function ts(e){return typeof e==`string`||Array.isArray(e)}var ns=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],rs=[`initial`,...ns];function is(e){return es(e.animate)||rs.some(t=>ts(e[t]))}function as(e){return!!(is(e)||e.variants)}function os(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Ga(i))e.addValue(r,i);else if(Ga(a))e.addValue(r,Ba(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Ba(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var ss=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],cs={};function ls(e){cs=e}function us(){return cs}var ds=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Wi,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Nn.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,V.render(this.render,!1,!0))};let{latestValues:s,renderState:c}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!i,this.isControllingVariants=is(t),this.isVariantNode=as(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in u){let t=u[e];s[e]!==void 0&&Ga(t)&&t.set(s[e])}}mount(e){this.current=e,$o.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Xo.current||Qo(),this.shouldReduceMotion=Yo.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in this.projection&&this.projection.unmount(),kn(this.notifyUpdate),kn(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let n=ji.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&V.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in cs){let t=cs[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Jo()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<ss.length;t++){let n=ss[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=os(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Ba(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Wt(n)||Kt(n))?n=parseFloat(n):!Wo(n)&&xr.test(t)&&(n=go(e,t)),this.setBaseTarget(e,Ga(n)?n.get():n)),Ga(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Na(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Ga(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Qt),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Co.render(this.render)}},fs=class extends ds{constructor(){super(...arguments),this.KeyframeResolver=yo}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Ga(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},ps=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function ms({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function hs({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function gs(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function _s(e){return e===void 0||e===1}function vs({scale:e,scaleX:t,scaleY:n}){return!_s(e)||!_s(t)||!_s(n)}function ys(e){return vs(e)||bs(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function bs(e){return xs(e.x)||xs(e.y)}function xs(e){return e&&e!==`0%`}function Ss(e,t,n){return n+t*(e-n)}function Cs(e,t,n,r,i){return i!==void 0&&(e=Ss(e,i,r)),Ss(e,n,r)+t}function ws(e,t=0,n=1,r,i){e.min=Cs(e.min,t,n,r,i),e.max=Cs(e.max,t,n,r,i)}function Ts(e,{x:t,y:n}){ws(e.x,t.translate,t.scale,t.originPoint),ws(e.y,n.translate,n.scale,n.originPoint)}var Es=.999999999999,Ds=1.0000000000001;function Os(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&js(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Ts(e,o)),r&&ys(a.latestValues)&&js(e,a.latestValues))}t.x<Ds&&t.x>Es&&(t.x=1),t.y<Ds&&t.y>Es&&(t.y=1)}function ks(e,t){e.min+=t,e.max+=t}function As(e,t,n,r,i=.5){ws(e,t,n,G(e.min,e.max,i),r)}function js(e,t){As(e.x,t.x,t.scaleX,t.scale,t.originX),As(e.y,t.y,t.scaleY,t.scale,t.originY)}function Ms(e,t){return ms(gs(e.getBoundingClientRect(),t))}function Ns(e,t,n){let r=Ms(e,n),{scroll:i}=t;return i&&(ks(r.x,i.offset.x),ks(r.y,i.offset.y)),r}var Ps={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Fs=Ai.length;function Is(e,t,n){let r=``,i=!0;for(let a=0;a<Fs;a++){let o=Ai[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=xo(s,po[o]);if(!c){i=!1;let t=Ps[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Ls(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(ji.has(e)){o=!0;continue}else if(In(e)){i[e]=n;continue}else{let t=xo(n,po[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Is(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Rs(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function zs(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Bs={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(U.test(e))e=parseFloat(e);else return e;return`${zs(e,t.target.x)}% ${zs(e,t.target.y)}%`}},Vs={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=xr.parse(e);if(i.length>5)return r;let a=xr.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=G(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Hs={borderRadius:{...Bs,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:Bs,borderTopRightRadius:Bs,borderBottomLeftRadius:Bs,borderBottomRightRadius:Bs,boxShadow:Vs};function Us(e,{layout:t,layoutId:n}){return ji.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Hs[e]||e===`opacity`)}function Ws(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Ga(r[t])||i&&Ga(i[t])||Us(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Gs(e){return window.getComputedStyle(e)}var Ks=class extends fs{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Rs}readValueFromInstance(e,t){if(ji.has(t))return this.projection?.isProjecting?Ei(t):Oi(e,t);{let n=Gs(e),r=(In(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ms(e,t)}build(e,t,n){Ls(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Ws(e,t,n)}},qs={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Js={offset:`strokeDashoffset`,array:`strokeDasharray`};function Ys(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?qs:Js;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Xs=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Zs(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Ls(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Xs)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Ys(d,i,a,o,!1)}var Qs=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),$s=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function ec(e,t,n,r){for(let n in Rs(e,t,void 0,r),t.attrs)e.setAttribute(Qs.has(n)?n:Ja(n),t.attrs[n])}function tc(e,t,n){let r=Ws(e,t,n);for(let n in e)if(Ga(e[n])||Ga(t[n])){let t=Ai.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var nc=class extends fs{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Jo}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ji.has(t)){let e=ho(t);return e&&e.default||0}return t=Qs.has(t)?t:Ja(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return tc(e,t,n)}build(e,t,n){Zs(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){ec(e,t,n,r)}mount(e){this.isSVGTag=$s(e.tagName),super.mount(e)}},rc=rs.length;function ic(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&ic(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<rc;n++){let r=rs[n],i=e.props[r];(ts(i)||i===!1)&&(t[r]=i)}return t}function ac(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var oc=[...ns].reverse(),sc=ns.length;function cc(e){return t=>Promise.all(t.map(({animation:t,options:n})=>to(e,t,n)))}function lc(e){let t=cc(e),n=fc(),r=!0,i=t=>(n,r)=>{let i=Pa(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(n){t=n(e)}function o(a){let{props:o}=e,s=ic(e.parent)||{},c=[],l=new Set,u={},d=1/0;for(let t=0;t<sc;t++){let f=oc[t],p=n[f],m=o[f]===void 0?s[f]:o[f],h=ts(m),g=f===a?p.isActive:null;g===!1&&(d=t);let _=m===s[f]&&m!==o[f]&&h;if(_&&r&&e.manuallyAnimateOnMount&&(_=!1),p.protectedKeys={...u},!p.isActive&&g===null||!m&&!p.prevProp||es(m)||typeof m==`boolean`)continue;let v=uc(p.prevProp,m),y=v||f===a&&p.isActive&&!_&&h||t>d&&h,b=!1,x=Array.isArray(m)?m:[m],S=x.reduce(i(f),{});g===!1&&(S={});let{prevResolvedValues:C={}}=p,w={...C,...S},T=t=>{y=!0,l.has(t)&&(b=!0,l.delete(t)),p.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in w){let t=S[e],n=C[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Va(t)&&Va(n)?!ac(t,n):t!==n,r?t==null?l.add(e):T(e):t!==void 0&&l.has(e)?T(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=S,p.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(y=!1);let E=_&&v;y&&(!E||b)&&c.push(...x.map(t=>{let n={type:f};if(typeof t==`string`&&r&&!E&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Pa(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=va(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(l.size){let t={};if(typeof o.initial!=`boolean`){let n=Pa(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}l.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),c.push({animation:t})}let f=!!c.length;return r&&(o.initial===!1||o.initial===o.animate)&&!e.manuallyAnimateOnMount&&(f=!1),r=!1,f?t(c):Promise.resolve()}function s(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=o(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=fc()}}}function uc(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!ac(t,e):!1}function dc(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function fc(){return{animate:dc(!0),whileInView:dc(),whileHover:dc(),whileTap:dc(),whileDrag:dc(),whileFocus:dc(),exit:dc()}}function pc(e,t){e.min=t.min,e.max=t.max}function mc(e,t){pc(e.x,t.x),pc(e.y,t.y)}function hc(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var gc=1e-4,_c=1-gc,vc=1+gc,yc=.01,bc=0-yc,xc=0+yc;function Sc(e){return e.max-e.min}function Cc(e,t,n){return Math.abs(e-t)<=n}function wc(e,t,n,r=.5){e.origin=r,e.originPoint=G(t.min,t.max,e.origin),e.scale=Sc(n)/Sc(t),e.translate=G(n.min,n.max,e.origin)-e.originPoint,(e.scale>=_c&&e.scale<=vc||isNaN(e.scale))&&(e.scale=1),(e.translate>=bc&&e.translate<=xc||isNaN(e.translate))&&(e.translate=0)}function Tc(e,t,n,r){wc(e.x,t.x,n.x,r?r.originX:void 0),wc(e.y,t.y,n.y,r?r.originY:void 0)}function Ec(e,t,n){e.min=n.min+t.min,e.max=e.min+Sc(t)}function Dc(e,t,n){Ec(e.x,t.x,n.x),Ec(e.y,t.y,n.y)}function Oc(e,t,n){e.min=t.min-n.min,e.max=e.min+Sc(t)}function kc(e,t,n){Oc(e.x,t.x,n.x),Oc(e.y,t.y,n.y)}function Ac(e,t,n,r,i){return e-=t,e=Ss(e,1/n,r),i!==void 0&&(e=Ss(e,1/i,r)),e}function jc(e,t=0,n=1,r=.5,i,a=e,o=e){if(rr.test(t)&&(t=parseFloat(t),t=G(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=G(a.min,a.max,r);e===a&&(s-=t),e.min=Ac(e.min,t,n,s,i),e.max=Ac(e.max,t,n,s,i)}function Mc(e,t,[n,r,i],a,o){jc(e,t[n],t[r],t[i],t.scale,a,o)}var Nc=[`x`,`scaleX`,`originX`],Pc=[`y`,`scaleY`,`originY`];function Fc(e,t,n,r){Mc(e.x,t,Nc,n?n.x:void 0,r?r.x:void 0),Mc(e.y,t,Pc,n?n.y:void 0,r?r.y:void 0)}function Ic(e){return e.translate===0&&e.scale===1}function Lc(e){return Ic(e.x)&&Ic(e.y)}function Rc(e,t){return e.min===t.min&&e.max===t.max}function zc(e,t){return Rc(e.x,t.x)&&Rc(e.y,t.y)}function Bc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Vc(e,t){return Bc(e.x,t.x)&&Bc(e.y,t.y)}function Hc(e){return Sc(e.x)/Sc(e.y)}function Uc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Wc(e){return[e(`x`),e(`y`)]}function Gc(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Kc=[`TopLeft`,`TopRight`,`BottomLeft`,`BottomRight`],qc=Kc.length,Jc=e=>typeof e==`string`?parseFloat(e):e,Yc=e=>typeof e==`number`||U.test(e);function Xc(e,t,n,r,i,a){i?(e.opacity=G(0,n.opacity??1,Qc(r)),e.opacityExit=G(t.opacity??1,0,$c(r))):a&&(e.opacity=G(t.opacity??1,n.opacity??1,r));for(let i=0;i<qc;i++){let a=`border${Kc[i]}Radius`,o=Zc(t,a),s=Zc(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Yc(o)===Yc(s)?(e[a]=Math.max(G(Jc(o),Jc(s),r),0),(rr.test(s)||rr.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=G(t.rotate||0,n.rotate||0,r))}function Zc(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Qc=el(0,.5,mn),$c=el(.5,.95,Jt);function el(e,t,n){return r=>r<e?0:r>t?1:n(Zt(e,t,r))}function tl(e,t,n){let r=Ga(e)?e:Ba(e);return r.start(ja(``,r,t,n)),r.animation}function nl(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var rl=(e,t)=>e.depth-t.depth,il=class{constructor(){this.children=[],this.isDirty=!1}add(e){Bt(this.children,e),this.isDirty=!0}remove(e){Vt(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(rl),this.isDirty=!1,this.children.forEach(e)}};function al(e,t){let n=Nn.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(kn(r),e(a-t))};return V.setup(r,!0),()=>kn(r)}function ol(e){return Ga(e)?e.get():e}var sl=class{constructor(){this.members=[]}add(e){Bt(this.members,e),e.scheduleRender()}remove(e){if(Vt(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t=this.members.findIndex(t=>e===t);if(t===0)return!1;let n;for(let e=t;e>=0;e--){let t=this.members[e];if(t.isPresent!==!1){n=t;break}}return n?(this.promote(n),!0):!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender();let r=n.options.layoutDependency,i=e.options.layoutDependency;r!==void 0&&i!==void 0&&r===i||(e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0));let{crossfade:a}=e.options;a===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}},cl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ll={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},ul=[``,`X`,`Y`,`Z`],dl=1e3,fl=0;function pl(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function ml(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Xa(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,V,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&ml(r)}function hl({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=fl++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Tn.value&&(ll.nodes=ll.calculatedTargetDeltas=ll.calculatedProjections=0),this.nodes.forEach(vl),this.nodes.forEach(Tl),this.nodes.forEach(El),this.nodes.forEach(yl),Tn.addProjectionMetrics&&Tn.addProjectionMetrics(ll)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new il)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Qt),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Vo(t)&&!Ho(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;V.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=al(i,250),cl.hasAnimatedSinceResize&&(cl.hasAnimatedSinceResize=!1,this.nodes.forEach(wl)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Nl,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Vc(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...ka(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||wl(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),kn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Dl),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ml(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(xl);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Sl);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Cl),this.nodes.forEach(gl),this.nodes.forEach(_l)):this.nodes.forEach(Sl),this.clearAllSnapshots();let e=Nn.now();H.delta=Ht(0,1e3/60,e-H.timestamp),H.timestamp=e,H.isProcessing=!0,An.update.process(H),An.preRender.process(H),An.render.process(H),H.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Co.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(bl),this.sharedNodes.forEach(Ol)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,V.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){V.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Sc(this.snapshot.measuredBox.x)&&!Sc(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Jo(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Lc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||ys(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Ll(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Jo();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(zl))){let{scroll:e}=this.root;e&&(ks(t.x,e.offset.x),ks(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Jo();if(mc(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&mc(t,e),ks(t.x,i.offset.x),ks(t.y,i.offset.y))}return t}applyTransform(e,t=!1){let n=Jo();mc(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&js(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),ys(r.latestValues)&&js(n,r.latestValues)}return ys(this.latestValues)&&js(n,this.latestValues),n}removeTransform(e){let t=Jo();mc(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!ys(n.latestValues))continue;vs(n.latestValues)&&n.updateSnapshot();let r=Jo();mc(r,n.measurePageBox()),Fc(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return ys(this.latestValues)&&Fc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==H.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=H.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Jo(),this.targetWithTransforms=Jo()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Dc(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):mc(this.target,this.layout.layoutBox),Ts(this.target,this.targetDelta)):mc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Tn.value&&ll.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||vs(this.parent.latestValues)||bs(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Jo(),this.relativeTargetOrigin=Jo(),kc(this.relativeTargetOrigin,t,n),mc(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===H.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;mc(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Os(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Jo());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(hc(this.prevProjectionDelta.x,this.projectionDelta.x),hc(this.prevProjectionDelta.y,this.projectionDelta.y)),Tc(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Uc(this.projectionDelta.x,this.prevProjectionDelta.x)||!Uc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Tn.value&&ll.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ko(),this.projectionDelta=Ko(),this.projectionDeltaWithTransform=Ko()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Ko();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=Jo(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Ml));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;kl(a.x,e.x,n),kl(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(kc(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),jl(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&zc(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=Jo(),mc(d,this.relativeTarget)),s&&(this.animationValues=i,Xc(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(kn(this.pendingAnimation),void 0),this.pendingAnimation=V.update(()=>{cl.hasAnimatedSinceResize=!0,Pn.layout++,this.motionValue||=Ba(0),this.currentAnimation=tl(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Pn.layout--},onComplete:()=>{Pn.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(dl),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Rl(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||Jo();let t=Sc(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Sc(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}mc(t,n),js(t,i),Tc(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new sl),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&pl(`z`,e,r,this.animationValues);for(let t=0;t<ul.length;t++)pl(`rotate${ul[t]}`,e,r,this.animationValues),pl(`skew${ul[t]}`,e,r,this.animationValues);for(let t in e.render(),r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=ol(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=ol(t?.pointerEvents)||``),this.hasProjected&&!ys(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Gc(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;for(let t in e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit,Hs){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Hs[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?ol(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(xl),this.root.sharedNodes.clear()}}}function gl(e){e.updateLayout()}function _l(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;i===`size`?Wc(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Sc(r);r.min=n[e].min,r.max=r.min+i}):Rl(i,t.layoutBox,n)&&Wc(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Sc(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Ko();Tc(o,n,t.layoutBox);let s=Ko();a?Tc(s,e.applyTransform(r,!0),t.measuredBox):Tc(s,n,t.layoutBox);let c=!Lc(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=Jo();kc(o,t.layoutBox,i.layoutBox);let s=Jo();kc(s,n,a.layoutBox),Vc(o,s)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function vl(e){Tn.value&&ll.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function yl(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function bl(e){e.clearSnapshot()}function xl(e){e.clearMeasurements()}function Sl(e){e.isLayoutDirty=!1}function Cl(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function wl(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Tl(e){e.resolveTargetDelta()}function El(e){e.calcProjection()}function Dl(e){e.resetSkewAndRotation()}function Ol(e){e.removeLeadSnapshot()}function kl(e,t,n){e.translate=G(t.translate,0,n),e.scale=G(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Al(e,t,n,r){e.min=G(t.min,n.min,r),e.max=G(t.max,n.max,r)}function jl(e,t,n,r){Al(e.x,t.x,n.x,r),Al(e.y,t.y,n.y,r)}function Ml(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Nl={duration:.45,ease:[.4,0,.1,1]},Pl=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Fl=Pl(`applewebkit/`)&&!Pl(`chrome/`)?Math.round:Jt;function Il(e){e.min=Fl(e.min),e.max=Fl(e.max)}function Ll(e){Il(e.x),Il(e.y)}function Rl(e,t,n){return e===`position`||e===`preserve-aspect`&&!Cc(Hc(t),Hc(n),.2)}function zl(e){return e!==e.root&&e.scroll?.wasRoot}var Bl=hl({attachResizeListener:(e,t)=>nl(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Vl={current:void 0},Hl=hl({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Vl.current){let e=new Bl({});e.mount(window),e.setOptions({layoutScroll:!0}),Vl.current=e}return Vl.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Ul=(0,L.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Wl(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Gl(...e){return t=>{let n=!1,r=e.map(e=>{let r=Wl(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Wl(e[t],null)}}}}function Kl(...e){return L.useCallback(Gl(...e),e)}var ql=class extends L.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=So(e)&&e.offsetWidth||0,r=So(e)&&e.offsetHeight||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left,i.bottom=r-i.height-i.top}return null}componentDidUpdate(){}render(){return this.props.children}};function Jl({children:e,isPresent:t,anchorX:n,anchorY:r,root:i}){let a=(0,L.useId)(),o=(0,L.useRef)(null),s=(0,L.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=(0,L.useContext)(Ul),l=Kl(o,e.props?.ref??e?.ref);return(0,L.useInsertionEffect)(()=>{let{width:e,height:l,top:u,left:d,right:f,bottom:p}=s.current;if(t||!o.current||!e||!l)return;let m=n===`left`?`left: ${d}`:`right: ${f}`,h=r===`bottom`?`bottom: ${p}`:`top: ${u}`;o.current.dataset.motionPopId=a;let g=document.createElement(`style`);c&&(g.nonce=c);let _=i??document.head;return _.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${m}px !important;
            ${h}px !important;
          }
        `),()=>{_.contains(g)&&_.removeChild(g)}},[t]),(0,z.jsx)(ql,{isPresent:t,childRef:o,sizeRef:s,children:L.cloneElement(e,{ref:l})})}var Yl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=It(Xl),d=(0,L.useId)(),f=!0,p=(0,L.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,L.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),L.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),o===`popLayout`&&(e=(0,z.jsx)(Jl,{isPresent:n,anchorX:s,anchorY:c,root:l,children:e})),(0,z.jsx)(zt.Provider,{value:p,children:e})};function Xl(){return new Map}function Zl(e=!0){let t=(0,L.useContext)(zt);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,L.useId)();(0,L.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,L.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Ql=e=>e.key||``;function $l(e){let t=[];return L.Children.forEach(e,e=>{(0,L.isValidElement)(e)&&t.push(e)}),t}var eu=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Zl(o),f=(0,L.useMemo)(()=>$l(e),[e]),p=o&&!u?[]:f.map(Ql),m=(0,L.useRef)(!0),h=(0,L.useRef)(f),g=It(()=>new Map),_=(0,L.useRef)(new Set),[v,y]=(0,L.useState)(f),[b,x]=(0,L.useState)(f);Rt(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=Ql(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=Ql(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x($l(e)),y(f),null}let{forceRender:C}=(0,L.useContext)(Ft);return(0,z.jsx)(z.Fragment,{children:b.map(e=>{let v=Ql(e),y=o&&!u?!1:f===b||p.includes(v);return(0,z.jsx)(Yl,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(_.current.add(v),g.has(v))g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},tu=(0,L.createContext)({strict:!1}),nu={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},ru=!1;function iu(){if(ru)return;let e={};for(let t in nu)e[t]={isEnabled:e=>nu[t].some(t=>!!e[t])};ls(e),ru=!0}function au(){return iu(),us()}function ou(e){let t=au();for(let n in e)t[n]={...t[n],...e[n]};ls(t)}var su=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(`.`));function cu(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||su.has(e)}var lu=e=>!cu(e);function uu(e){typeof e==`function`&&(lu=t=>t.startsWith(`on`)?!cu(t):e(t))}try{uu((h(),a(ee)).default)}catch{}function du(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||(lu(i)||n===!0&&cu(i)||!t&&!cu(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var fu=(0,L.createContext)({});function pu(e,t){if(is(e)){let{initial:t,animate:n}=e;return{initial:t===!1||ts(t)?t:void 0,animate:ts(n)?n:void 0}}return e.inherit===!1?{}:t}function mu(e){let{initial:t,animate:n}=pu(e,(0,L.useContext)(fu));return(0,L.useMemo)(()=>({initial:t,animate:n}),[hu(t),hu(n)])}function hu(e){return Array.isArray(e)?e.join(` `):e}var gu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function _u(e,t,n){for(let r in t)!Ga(t[r])&&!Us(r,n)&&(e[r]=t[r])}function vu({transformTemplate:e},t){return(0,L.useMemo)(()=>{let n=gu();return Ls(n,t,e),Object.assign({},n.vars,n.style)},[t])}function yu(e,t){let n=e.style||{},r={};return _u(r,n,e),Object.assign(r,vu(e,t)),r}function bu(e,t){let n={},r=yu(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var xu=()=>({...gu(),attrs:{}});function Su(e,t,n,r){let i=(0,L.useMemo)(()=>{let n=xu();return Zs(n,t,$s(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};_u(t,e.style,e),i.style={...t,...i.style}}return i}var Cu=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function wu(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Cu.indexOf(e)>-1||/[A-Z]/u.test(e))}function Tu(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??wu(e)?Su:bu)(t,r,i,e),c=du(t,typeof e==`string`,a),l=e===L.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,L.useMemo)(()=>Ga(u)?u.get():u,[u]);return(0,L.createElement)(e,{...l,children:d})}function Eu({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Du(n,r,i,e),renderState:t()}}function Du(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=ol(a[e]);let{initial:o,animate:s}=e,c=is(e),l=as(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!es(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Na(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Ou=e=>(t,n)=>{let r=(0,L.useContext)(fu),i=(0,L.useContext)(zt),a=()=>Eu(e,t,r,i);return n?a():It(a)},ku=Ou({scrapeMotionValuesFromProps:Ws,createRenderState:gu}),Au=Ou({scrapeMotionValuesFromProps:tc,createRenderState:xu}),ju=Symbol.for(`motionComponentSymbol`);function Mu(e,t,n){let r=(0,L.useRef)(n);(0,L.useInsertionEffect)(()=>{r.current=n});let i=(0,L.useRef)(null);return(0,L.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var Nu=(0,L.createContext)({});function Pu(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Fu(e,t,n,r,i,a){let{visualElement:o}=(0,L.useContext)(fu),s=(0,L.useContext)(tu),c=(0,L.useContext)(zt),l=(0,L.useContext)(Ul).reducedMotion,u=(0,L.useRef)(null),d=(0,L.useRef)(!1);r||=s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:l,isSVG:a}),d.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));let f=u.current,p=(0,L.useContext)(Nu);f&&!f.projection&&i&&(f.type===`html`||f.type===`svg`)&&Iu(u.current,n,i,p);let m=(0,L.useRef)(!1);(0,L.useInsertionEffect)(()=>{f&&m.current&&f.update(n,c)});let h=n[Ya],g=(0,L.useRef)(!!h&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return Rt(()=>{d.current=!0,f&&(m.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),g.current&&f.animationState&&f.animationState.animateChanges())}),(0,L.useEffect)(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(h)}),!1),f.enteringChildren=void 0)}),f}function Iu(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Lu(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Pu(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:l})}function Lu(e){if(e)return e.options.allowProjection===!1?Lu(e.parent):e.projection}function Ru(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&ou(r);let a=n?n===`svg`:wu(e),o=a?Au:ku;function s(n,s){let c,l={...(0,L.useContext)(Ul),...n,layoutId:zu(n)},{isStatic:u}=l,d=mu(n),f=o(n,u);if(!u&&Lt){Bu(l,r);let t=Vu(l);c=t.MeasureLayout,d.visualElement=Fu(e,f,l,i,t.ProjectionNode,a)}return(0,z.jsxs)(fu.Provider,{value:d,children:[c&&d.visualElement?(0,z.jsx)(c,{visualElement:d.visualElement,...l}):null,Tu(e,n,Mu(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,L.forwardRef)(s);return c[ju]=e,c}function zu({layoutId:e}){let t=(0,L.useContext)(Ft).id;return t&&e!==void 0?t+`-`+e:e}function Bu(e,t){(0,L.useContext)(tu).strict}function Vu(e){let{drag:t,layout:n}=au();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Hu(e,t){if(typeof Proxy>`u`)return Ru;let n=new Map,r=(n,r)=>Ru(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Ru(a,void 0,e,t)),n.get(a))})}var Uu=(e,t)=>t.isSVG??wu(e)?new nc(t):new Ks(t,{allowProjection:e!==L.Fragment}),Wu=class extends ps{constructor(e){super(e),e.animationState||=lc(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();es(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Gu=0,Ku={animation:{Feature:Wu},exit:{Feature:class extends ps{constructor(){super(...arguments),this.id=Gu++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function qu(e){return{point:{x:e.pageX,y:e.pageY}}}var Ju=e=>t=>Mo(t)&&e(t,qu(t));function Yu(e,t,n,r){return nl(e,t,Ju(n),r)}var Xu=({current:e})=>e?e.ownerDocument.defaultView:null,Zu=(e,t)=>Math.abs(e-t);function Qu(e,t){let n=Zu(e.x,t.x),r=Zu(e.y,t.y);return Math.sqrt(n**2+r**2)}var $u=new Set([`auto`,`scroll`]),ed=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=rd(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Qu(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=H;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=td(t,this.transformPagePoint),V.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=rd(e.type===`pointercancel`?this.lastMoveEventInfo:td(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Mo(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=td(qu(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=H;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,rd(s,this.history)),this.removeListeners=Xt(Yu(this.contextWindow,`pointermove`,this.handlePointerMove),Yu(this.contextWindow,`pointerup`,this.handlePointerUp),Yu(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);($u.has(e.overflowX)||$u.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener(`scroll`,this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),V.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),kn(this.updatePoint)}};function td(e,t){return t?{point:t(e.point)}:e}function nd(e,t){return{x:e.x-t.x,y:e.y-t.y}}function rd({point:e},t){return{point:e,delta:nd(e,ad(t)),offset:nd(e,id(t)),velocity:od(t,.1)}}function id(e){return e[0]}function ad(e){return e[e.length-1]}function od(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=ad(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>$t(t)));)n--;if(!r)return{x:0,y:0};let a=en(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function sd(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?G(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?G(n,e,r.max):Math.min(e,n)),e}function cd(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function ld(e,{top:t,left:n,bottom:r,right:i}){return{x:cd(e.x,n,i),y:cd(e.y,t,r)}}function ud(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function dd(e,t){return{x:ud(e.x,t.x),y:ud(e.y,t.y)}}function fd(e,t){let n=.5,r=Sc(e),i=Sc(t);return i>r?n=Zt(t.min,t.max-r,e.min):r>i&&(n=Zt(e.min,e.max-i,t.min)),Ht(0,1,n)}function pd(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var md=.35;function hd(e=md){return e===!1?e=0:e===!0&&(e=md),{x:gd(e,`left`,`right`),y:gd(e,`top`,`bottom`)}}function gd(e,t,n){return{min:_d(e,t),max:_d(e,n)}}function _d(e,t){return typeof e==`number`?e:e[t]||0}var vd=new WeakMap,yd=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Jo(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t?(this.stopAnimation(),this.snapToCursor(qu(e).point)):this.pauseAnimation()},a=(e,t)=>{this.stopAnimation();let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Do(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Wc(e=>{let t=this.getAxisMotionValue(e).get()||0;if(rr.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Sc(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&V.postRender(()=>i(e,t)),qa(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=xd(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&a(e,t)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Wc(e=>this.getAnimationState(e)===`paused`&&this.getAxisMotionValue(e).animation?.play()),{dragSnapToOrigin:l}=this.getProps();this.panSession=new ed(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Xu(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&V.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!bd(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=sd(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Pu(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=ld(n.layoutBox,e):this.constraints=!1,this.elastic=hd(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&Wc(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=pd(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Pu(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Ns(n,r.root,this.visualElement.getTransformPagePoint()),a=dd(r.layout.layoutBox,i);if(t){let e=t(hs(a));this.hasMutatedConstraints=!!e,e&&(a=ms(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Wc(o=>{if(!bd(o,t,this.currentDirection))return;let c=s&&s[o]||{};a&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return qa(this.visualElement,e),n.start(ja(e,n,0,t,this.visualElement,!1))}stopAnimation(){Wc(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Wc(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Wc(t=>{let{drag:n}=this.getProps();if(!bd(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-G(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Pu(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Wc(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=fd({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Wc(t=>{if(!bd(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(G(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;vd.set(this.visualElement,this);let e=this.visualElement.current,t=Yu(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Po(i);n&&r&&!a&&this.start(t)}),n=()=>{let{dragConstraints:e}=this.getProps();Pu(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener(`measure`,n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),V.read(n);let a=nl(window,`resize`,()=>this.scalePositionWithinConstraints()),o=r.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Wc(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{a(),t(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=md,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function bd(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function xd(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Sd=class extends ps{constructor(e){super(e),this.removeGroupControls=Jt,this.removeListeners=Jt,this.controls=new yd(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Jt}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Cd=e=>(t,n)=>{e&&V.postRender(()=>e(t,n))},wd=class extends ps{constructor(){super(...arguments),this.removePointerDownListener=Jt}onPointerDown(e){this.session=new ed(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Xu(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Cd(e),onStart:Cd(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&V.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Yu(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Td=!1,Ed=class extends L.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Td&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),cl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Td=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||V.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Co.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Td=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Dd(e){let[t,n]=Zl(),r=(0,L.useContext)(Ft);return(0,z.jsx)(Ed,{...e,layoutGroup:r,switchLayoutGroup:(0,L.useContext)(Nu),isPresent:t,safeToRemove:n})}var Od={pan:{Feature:wd},drag:{Feature:Sd,ProjectionNode:Hl,MeasureLayout:Dd}};function kd(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&V.postRender(()=>i(t,qu(t)))}var Ad=class extends ps{mount(){let{current:e}=this.node;e&&(this.unmount=Ao(e,(e,t)=>(kd(this.node,t,`Start`),e=>kd(this.node,e,`End`))))}unmount(){}},jd=class extends ps{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Xt(nl(this.node.current,`focus`,()=>this.onFocus()),nl(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Md(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&V.postRender(()=>i(t,qu(t)))}var Nd=class extends ps{mount(){let{current:e}=this.node;e&&(this.unmount=Bo(e,(e,t)=>(Md(this.node,t,`Start`),(e,{success:t})=>Md(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}},Pd=new WeakMap,Fd=new WeakMap,Id=e=>{let t=Pd.get(e.target);t&&t(e)},Ld=e=>{e.forEach(Id)};function Rd({root:e,...t}){let n=e||document;Fd.has(n)||Fd.set(n,{});let r=Fd.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Ld,{root:e,...t})),r[i]}function zd(e,t,n){let r=Rd(t);return Pd.set(e,n),r.observe(e),()=>{Pd.delete(e),r.unobserve(e)}}var Bd={some:0,all:1},Vd=class extends ps{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Bd[r]};return zd(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Hd(e,t))&&this.startObserver()}unmount(){}};function Hd({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Ud={inView:{Feature:Vd},tap:{Feature:Nd},focus:{Feature:jd},hover:{Feature:Ad}},Wd={layout:{ProjectionNode:Hl,MeasureLayout:Dd}},Gd=Hu({...Ku,...Ud,...Od,...Wd},Uu),Kd=gt(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),qd=gt(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),Jd=gt(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),Yd=gt(`circle-arrow-right`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m12 16 4-4-4-4`,key:`1i9zcv`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}]]),Xd=gt(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),Zd=gt(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Qd=gt(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),$d=gt(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),ef=gt(`minimize-2`,[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]),tf=gt(`octagon-x`,[[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,key:`2d38gg`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),nf=!1;function rf(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function af(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var of=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!nf:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(af(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=rf(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),sf=`-ms-`,cf=`-moz-`,q=`-webkit-`,lf=`comm`,uf=`rule`,df=`decl`,ff=`@import`,pf=`@keyframes`,mf=`@layer`,hf=Math.abs,gf=String.fromCharCode,_f=Object.assign;function vf(e,t){return Sf(e,0)^45?(((t<<2^Sf(e,0))<<2^Sf(e,1))<<2^Sf(e,2))<<2^Sf(e,3):0}function yf(e){return e.trim()}function bf(e,t){return(e=t.exec(e))?e[0]:e}function J(e,t,n){return e.replace(t,n)}function xf(e,t){return e.indexOf(t)}function Sf(e,t){return e.charCodeAt(t)|0}function Cf(e,t,n){return e.slice(t,n)}function wf(e){return e.length}function Tf(e){return e.length}function Ef(e,t){return t.push(e),e}function Df(e,t){return e.map(t).join(``)}var Of=1,kf=1,Af=0,jf=0,Y=0,Mf=``;function Nf(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Of,column:kf,length:o,return:``}}function Pf(e,t){return _f(Nf(``,null,null,``,null,null,0),e,{length:-e.length},t)}function Ff(){return Y}function If(){return Y=jf>0?Sf(Mf,--jf):0,kf--,Y===10&&(kf=1,Of--),Y}function Lf(){return Y=jf<Af?Sf(Mf,jf++):0,kf++,Y===10&&(kf=1,Of++),Y}function Rf(){return Sf(Mf,jf)}function zf(){return jf}function Bf(e,t){return Cf(Mf,e,t)}function Vf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hf(e){return Of=kf=1,Af=wf(Mf=e),jf=0,[]}function Uf(e){return Mf=``,e}function Wf(e){return yf(Bf(jf-1,qf(e===91?e+2:e===40?e+1:e)))}function Gf(e){for(;(Y=Rf())&&Y<33;)Lf();return Vf(e)>2||Vf(Y)>3?``:` `}function Kf(e,t){for(;--t&&Lf()&&!(Y<48||Y>102||Y>57&&Y<65||Y>70&&Y<97););return Bf(e,zf()+(t<6&&Rf()==32&&Lf()==32))}function qf(e){for(;Lf();)switch(Y){case e:return jf;case 34:case 39:e!==34&&e!==39&&qf(Y);break;case 40:e===41&&qf(e);break;case 92:Lf();break}return jf}function Jf(e,t){for(;Lf()&&e+Y!==57&&!(e+Y===84&&Rf()===47););return`/*`+Bf(t,jf-1)+`*`+gf(e===47?e:Lf())}function Yf(e){for(;!Vf(Rf());)Lf();return Bf(e,jf)}function Xf(e){return Uf(Zf(``,null,null,null,[``],e=Hf(e),0,[0],e))}function Zf(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Lf()){case 40:if(m!=108&&Sf(C,d-1)==58){xf(C+=J(Wf(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Wf(v);break;case 9:case 10:case 13:case 32:C+=Gf(m);break;case 92:C+=Kf(zf()-1,7);continue;case 47:switch(Rf()){case 42:case 47:Ef($f(Jf(Lf(),zf()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=wf(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=J(C,/\f/g,``)),p>0&&wf(C)-d&&Ef(p>32?ep(C+`;`,r,n,d-1):ep(J(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(Ef(S=Qf(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)Zf(C,t,S,S,b,a,d,s,x);else switch(f===99&&Sf(C,3)===110?100:f){case 100:case 108:case 109:case 115:Zf(e,S,S,r&&Ef(Qf(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:Zf(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+wf(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&If()==125)continue}switch(C+=gf(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(wf(C)-1)*_,_=1;break;case 64:Rf()===45&&(C+=Wf(Lf())),f=Rf(),u=d=wf(y=C+=Yf(zf())),v++;break;case 45:m===45&&wf(C)==2&&(h=0)}}return a}function Qf(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=Tf(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=Cf(e,d+1,d=hf(h=o[m])),y=e;_<p;++_)(y=yf(h>0?f[_]+` `+v:J(v,/&\f/g,f[_])))&&(c[g++]=y);return Nf(e,t,n,i===0?uf:s,c,l,u)}function $f(e,t,n){return Nf(e,t,n,lf,gf(Ff()),Cf(e,2,-2),0)}function ep(e,t,n,r){return Nf(e,t,n,df,Cf(e,0,r),Cf(e,r+1,-1),r)}function tp(e,t){for(var n=``,r=Tf(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function np(e,t,n,r){switch(e.type){case mf:if(e.children.length)break;case ff:case df:return e.return=e.return||e.value;case lf:return``;case pf:return e.return=e.value+`{`+tp(e.children,r)+`}`;case uf:e.value=e.props.join(`,`)}return wf(n=tp(e.children,r))?e.return=e.value+`{`+n+`}`:``}function rp(e){var t=Tf(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function ip(e){return function(t){t.root||(t=t.return)&&e(t)}}var ap=function(e,t,n){for(var r=0,i=0;r=i,i=Rf(),r===38&&i===12&&(t[n]=1),!Vf(i);)Lf();return Bf(e,jf)},op=function(e,t){var n=-1,r=44;do switch(Vf(r)){case 0:r===38&&Rf()===12&&(t[n]=1),e[n]+=ap(jf-1,t,n);break;case 2:e[n]+=Wf(r);break;case 4:if(r===44){e[++n]=Rf()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=gf(r)}while(r=Lf());return e},sp=function(e,t){return Uf(op(Hf(e),t))},cp=new WeakMap,lp=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!cp.get(n))&&!r){cp.set(e,!0);for(var i=[],a=sp(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},up=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function dp(e,t){switch(vf(e,t)){case 5103:return q+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+cf+e+sf+e+e;case 6828:case 4268:return q+e+sf+e+e;case 6165:return q+e+sf+`flex-`+e+e;case 5187:return q+e+J(e,/(\w+).+(:[^]+)/,q+`box-$1$2`+sf+`flex-$1$2`)+e;case 5443:return q+e+sf+`flex-item-`+J(e,/flex-|-self/,``)+e;case 4675:return q+e+sf+`flex-line-pack`+J(e,/align-content|flex-|-self/,``)+e;case 5548:return q+e+sf+J(e,`shrink`,`negative`)+e;case 5292:return q+e+sf+J(e,`basis`,`preferred-size`)+e;case 6060:return q+`box-`+J(e,`-grow`,``)+q+e+sf+J(e,`grow`,`positive`)+e;case 4554:return q+J(e,/([^-])(transform)/g,`$1`+q+`$2`)+e;case 6187:return J(J(J(e,/(zoom-|grab)/,q+`$1`),/(image-set)/,q+`$1`),e,``)+e;case 5495:case 3959:return J(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return J(J(e,/(.+:)(flex-)?(.*)/,q+`box-pack:$3`+sf+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+q+e+e;case 4095:case 3583:case 4068:case 2532:return J(e,/(.+)-inline(.+)/,q+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(wf(e)-1-t>6)switch(Sf(e,t+1)){case 109:if(Sf(e,t+4)!==45)break;case 102:return J(e,/(.+:)(.+)-([^]+)/,`$1`+q+`$2-$3$1`+cf+(Sf(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~xf(e,`stretch`)?dp(J(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(Sf(e,t+1)!==115)break;case 6444:switch(Sf(e,wf(e)-3-(~xf(e,`!important`)&&10))){case 107:return J(e,`:`,`:`+q)+e;case 101:return J(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+q+(Sf(e,14)===45?`inline-`:``)+`box$3$1`+q+`$2$3$1`+sf+`$2box$3`)+e}break;case 5936:switch(Sf(e,t+11)){case 114:return q+e+sf+J(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return q+e+sf+J(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return q+e+sf+J(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return q+e+sf+e+e}return e}var fp=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case df:e.return=dp(e.value,e.length);break;case pf:return tp([Pf(e,{value:J(e.value,`@`,`@`+q)})],r);case uf:if(e.length)return Df(e.props,function(t){switch(bf(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return tp([Pf(e,{props:[J(t,/:(read-\w+)/,`:`+cf+`$1`)]})],r);case`::placeholder`:return tp([Pf(e,{props:[J(t,/:(plac\w+)/,`:`+q+`input-$1`)]}),Pf(e,{props:[J(t,/:(plac\w+)/,`:`+cf+`$1`)]}),Pf(e,{props:[J(t,/:(plac\w+)/,sf+`input-$1`)]})],r)}return``})}}],pp=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||fp,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[lp,up],l,u=[np,ip(function(e){l.insert(e)})],d=rp(c.concat(r,u)),f=function(e){return tp(Xf(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new of({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},mp=!0;function hp(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var gp=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||mp===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},_p=function(e,t,n){gp(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function vp(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}w();var yp=!1,bp=/[A-Z]|^ms/g,xp=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Sp=function(e){return e.charCodeAt(1)===45},Cp=function(e){return e!=null&&typeof e!=`boolean`},wp=S(function(e){return Sp(e)?e:e.replace(bp,`-$&`).toLowerCase()}),Tp=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(xp,function(e,t,n){return Ap={name:t,styles:n,next:Ap},t})}return x[e]!==1&&!Sp(e)&&typeof t==`number`&&t!==0?t+`px`:t},Ep=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;function Dp(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return Ap={name:i.name,styles:i.styles,next:Ap},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Ap={name:o.name,styles:o.styles,next:Ap},o=o.next;return a.styles+`;`}return Op(e,t,n);case`function`:if(e!==void 0){var s=Ap,c=n(e);return Ap=s,Dp(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function Op(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Dp(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:Cp(s)&&(r+=wp(a)+`:`+Tp(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&yp)throw Error(Ep);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)Cp(o[c])&&(r+=wp(a)+`:`+Tp(a,o[c])+`;`);else{var l=Dp(e,t,o);switch(a){case`animation`:case`animationName`:r+=wp(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}var kp=/label:\s*([^\s;{]+)\s*(;|$)/g,Ap;function jp(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Ap=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=Dp(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=Dp(n,t,e[o]),r&&(i+=a[o]);kp.lastIndex=0;for(var s=``,c;(c=kp.exec(i))!==null;)s+=`-`+c[1];return{name:vp(i)+s,styles:i,next:Ap}}var Mp=function(e){return e()},Np=L.useInsertionEffect?L.useInsertionEffect:!1,Pp=Np||Mp;Np||L.useLayoutEffect;var Fp=L.createContext(typeof HTMLElement<`u`?pp({key:`css`}):null);Fp.Provider;var Ip=function(e){return(0,L.forwardRef)(function(t,n){return e(t,(0,L.useContext)(Fp),n)})},Lp=L.createContext({});({}).hasOwnProperty,h();var Rp=!1,zp=g,Bp=function(e){return e!==`theme`},Vp=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?zp:Bp},Hp=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},Up=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return gp(t,n,r),Pp(function(){return _p(t,n,r)}),null},Wp=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=Hp(t,n,r),c=s||Vp(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=Ip(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=L.useContext(Lp)}typeof e.className==`string`?a=hp(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=jp(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?Vp(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),L.createElement(L.Fragment,null,L.createElement(Up,{cache:t,serialized:m,isStringTag:typeof r==`string`}),L.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,`toString`,{value:function(){return o===void 0&&Rp?`NO_COMPONENT_SELECTOR`:`.`+o}}),h.withComponent=function(t,r){return e(t,ue({},n,r,{shouldForwardProp:Hp(h,r,!0)})).apply(void 0,d)},h}},Gp=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),Kp=Wp.bind(null);Gp.forEach(function(e){Kp[e]=Kp(e)});const qp=Kp.div({position:`relative`,display:`flex`,height:`100vh`,flexDirection:`column`,backgroundColor:`transparent`}),Jp=T.div`
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
`,Yp=T(Gd.div)`
  ${{position:`fixed`,bottom:`0`,left:`0`,top:`0`,zIndex:`1000`,display:`flex`,width:`150px`,flexDirection:`column`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}}
  background-color: ${e=>f(e.theme.BACKGROUND,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 16px;
`,Xp=T.div`
  ${{flex:`none`,padding:`1.25rem`}}
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  background-color: ${e=>e.theme.OFFSET};
  border-radius: 12px 12px 0 0;
`,Zp=T.div`
  ${{marginTop:`0.25rem`,flex:`1 1 0%`,placeContent:`center`,fontSize:`0.875rem`}}
  padding: 2px 6px;
  color: ${e=>f(e.theme.PRIMARY,.7)};
`,Qp=T.h2`
  ${{margin:`0`,marginBottom:`0.5rem`,fontSize:`1.5rem`,fontWeight:`700`}}
  color: ${e=>e.theme.PRIMARY};
`;T.p`
  ${{margin:`0`,fontSize:`0.875rem`}}
  color: ${e=>f(e.theme.PRIMARY,.7)};
`,Kp.div({flex:`1 1 0%`});const $p=T.nav`
  ${{flex:`none`,paddingLeft:`0`,paddingRight:`0`,paddingBottom:`50px`,paddingTop:`0.5rem`}}
  border-top: 1px solid ${e=>e.theme.BORDER};
`,em=T.button`
  ${{width:`100%`,cursor:`pointer`,borderStyle:`none`,paddingLeft:`1.25rem`,paddingRight:`1.25rem`,paddingTop:`0.75rem`,paddingBottom:`0.75rem`,textAlign:`left`,fontSize:`15px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isActive?e.theme.OFFSET:`transparent`};
  color: ${e=>e.theme.PRIMARY};
  font-weight: ${e=>e.$isActive?600:400};
  
  &:hover {
    background-color: ${e=>f(e.theme.OFFSET,.5)};
  }
`,tm=Kp.div({position:`fixed`,bottom:`0`,left:`0`,right:`0`,top:`0`,zIndex:`999`,backgroundColor:`rgba(0, 0, 0, 0.6)`}),nm=Kp.div({position:`fixed`,bottom:`2px`,left:`2px`,zIndex:`1000`,display:`flex`,height:`3rem`,width:`3rem`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}),rm=T.button`
  ${{position:`fixed`,zIndex:`1001`,display:`flex`,height:`2.5rem`,width:`2.5rem`,cursor:`pointer`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-shadow":`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,"--tw-shadow-colored":`0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color)`,boxShadow:`var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)`}}
  background-color: ${e=>f(e.theme.BACKGROUND,.75)};
  border: 2px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
`,im=({isOpen:e,currentPage:t,onToggle:n,onNavigate:r,canAccessInitiativeList:i=!0})=>{let{theme:a}=Pt(),o=R(e=>e.playerData),s=String(o?.role||``).toUpperCase()===`GM`;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(eu,{children:e&&(0,z.jsxs)(Yp,{theme:a,initial:{x:-300},animate:{x:0},exit:{x:-300},transition:{type:`tween`,duration:.3},style:{boxShadow:`4px 0 12px rgba(0, 0, 0, 0.15)`},children:[(0,z.jsx)(Xp,{theme:a,children:(0,z.jsx)(Qp,{theme:a,children:`Forge!`})}),(0,z.jsxs)(Zp,{theme:a,children:[`Good Luck!`,(0,z.jsx)(`br`,{}),(0,z.jsx)(`br`,{}),`Questions?`,(0,z.jsxs)(`a`,{href:`https://discord.gg/Kh9hbHAZnX`,target:`_blank`,rel:`noreferrer`,children:[(0,z.jsx)(`br`,{}),`Battle-System`,(0,z.jsx)(`br`,{}),`Discord`]}),`.`,(0,z.jsx)(`br`,{}),(0,z.jsxs)(`a`,{href:`https://www.patreon.com/c/battlesystem`,target:`_blank`,rel:`noreferrer`,children:[(0,z.jsx)(`br`,{}),`Patreon`]}),`.`]}),(0,z.jsxs)($p,{theme:a,children:[i&&(0,z.jsx)(em,{theme:a,$isActive:t===`ForgeMain`,onClick:()=>r(`ForgeMain`),children:`Main`}),(0,z.jsx)(em,{theme:a,$isActive:t===`Party`,onClick:()=>r(`Party`),children:`Party`}),(0,z.jsx)(em,{theme:a,$isActive:t===`ChatLog`,onClick:()=>r(`ChatLog`),children:`System Log`}),s&&(0,z.jsx)(em,{theme:a,$isActive:t===`System`,onClick:()=>r(`System`),children:`System`}),s&&(0,z.jsx)(em,{theme:a,$isActive:t===`Settings`,onClick:()=>r(`Settings`),children:`Settings`})]})]})}),e&&(0,z.jsx)(tm,{onClick:n}),(0,z.jsx)(nm,{children:(0,z.jsx)(rm,{theme:a,onClick:n,children:(0,z.jsx)(nt,{size:24})})})]})},am=T.div`
  padding: 20px;
  color: ${e=>e.theme.PRIMARY};
  min-height: 100vh;
`,om=T.h1`
  color: ${e=>e.theme.PRIMARY};
  background-color: ${e=>e.theme.OFFSET};
  padding: 2px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  font-variant: small-caps;
`,sm=T.div`
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
`;const cm=T.button`
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
`,lm=T.input`
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
`;var um=T.button`
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
`;const X=({label:e,isOn:t,onChange:n})=>{let{theme:r}=Pt();return(0,z.jsx)(um,{theme:r,$isOn:t,onClick:()=>{let r=!t;O.log(`${e}: ${r}`),n(r)},role:`switch`,"aria-checked":t,"aria-label":e})};var dm=T.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${e=>e.$zIndexBase};
`,fm=T.div`
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
`,pm=T.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 15px 0;
  font-size: 18px;
`,mm=T.div`
  margin: 0 0 20px 0;
`,hm=T.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;const gm=({isOpen:e,title:t,onClose:n,children:r,actions:i,closeOnOverlayClick:a=!0,minWidth:o,maxWidth:s,zIndexBase:c=9999})=>{let{theme:l}=Pt();return e?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(dm,{$zIndexBase:c,onClick:a?n:void 0}),(0,z.jsxs)(fm,{theme:l,$minWidth:o,$maxWidth:s,$zIndexBase:c,onClick:e=>e.stopPropagation(),children:[t&&(0,z.jsx)(pm,{theme:l,children:t}),(0,z.jsx)(mm,{children:r}),i&&(0,z.jsx)(hm,{children:i})]})]}):null},Z={reverseInitiative:`Sorts initiative from low to high instead of high to low.`,popcornInitiative:`Lets players choose the next acting unit manually instead of following initiative order.`,initiativeDie:`Sets the die used when rolling initiative from the list (for example D20).`,initiativeModifierAttr:`Selects the numeric attribute used in initiative modifier math.`,initiativeModifierMath:`Math formula applied to the selected attribute. Use @STAT as the attribute value.`,showCardColumn:`Shows a quick-access column to open each unit's card/stat block.`,showPlayerView:`Allows Players to access the Initiative List view. If disabled, Players are routed away from the list.`,showNonPartyUnits:`If disabled, non-party unit stats are obscured for Players while keeping turn order visibility.`,showHpNumbersOnList:`If disabled, Players do not see exact HP/Max HP values in the Initiative List for non-owned units.`,ownerOnlyEdit:`Restricts editing controls to GMs and token owners.`,showAdjustHpContextMenu:`Shows or hides context menu options used to modify HP quickly.`,showViewUnitContextMenuForPlayers:`Shows or hides the View Unit right-click context menu option for Players while keeping it available for GMs.`,showHpBarsOnTokens:`Displays graphical HP bars on tokens in the scene.`,hpOrientation:`Sets where HP bars or HP numbers are anchored relative to tokens.`,showHpNumbersOnTokens:`Displays current/max HP numbers directly on tokens.`,showDeathEffect:`Shows a death visual effect when configured death conditions are met.`,showNamesOnTokens:`Toggles token name text visibility in scene.`,showTurnEffect:`Shows the active turn visual indicator in scene.`,useDescriptiveNames:`Appends descriptive suffixes to duplicate unit names for easier identification.`,enableRumble:`Enables Rumble integration for dice rolls.`,enableBones:`Enables Bones integration for dice rolls.`,enableDicePlus:`Enables Dice+ integration for dice rolls.`,enableTextBasedRolls:`Enables built-in text-based dice rolling handled directly by Forge.`,enableObrNotification:`Enables in-app Owlbear notifications for supported roll and system events.`,showResultsToAll:`When enabled, notifications are shown to all players instead of only the local user.`,enableDiscordLogging:`Sends roll or event logs to a configured Discord webhook.`,discordUrl:`Discord webhook endpoint used when Discord logging is enabled.`,enableConsoleLog:`Turns verbose Forge logging on or off in the browser console.`},_m=()=>{let e=R(e=>e.systemData);return R(e=>e.cacheReady)?e?{theme:e.theme,cardLayout:e.cardLayout,listLayout:e.listLayout,attributes:e.attributes,systemName:e.systemName,importDate:e.importDate,isLoading:!1}:{theme:{primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,isLoading:!1}:{theme:null,cardLayout:[],listLayout:[],attributes:[],systemName:``,importDate:null,isLoading:!0}};var vm=T.h2`
  ${{marginBottom:`1rem`,paddingBottom:`0.5rem`,fontSize:`1.25rem`,fontWeight:`600`}}
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
`,Q=T.div`
  ${{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`,":last-child":{borderBottomWidth:`0`}}}
  color: ${e=>e.theme.PRIMARY};
`,$=T.label`
  ${{flex:`1 1 0%`,cursor:`pointer`,textAlign:`left`,fontSize:`1rem`}}
  color: ${e=>e.theme.PRIMARY};
`,ym=T.div`
  ${{marginLeft:`1rem`,display:`flex`,placeContent:`space-between`,alignItems:`center`,gap:`0.75rem`}}
  color: ${e=>e.theme.PRIMARY};
`,bm=T.label`
  ${{fontSize:`0.875rem`}}
  text-align: left;
  color: ${e=>e.theme.PRIMARY};
`,xm=T.p`
  ${{marginTop:`0.25rem`,fontSize:`0.75rem`}}
  color: ${e=>f(e.theme.PRIMARY,.7)};
`,Sm=T.input`
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
`,Cm=T.select`
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
`,wm=T.button`
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
`,Tm=Kp.div({marginTop:`0.5rem`,display:`flex`,justifyContent:`center`,gap:`0.75rem`}),Em=T.p`
  margin: 8px 0 0;
  font-size: 13px;
  color: ${e=>e.$connected?e.theme.PRIMARY:f(e.theme.PRIMARY,.75)};
`,Dm=T.p`
  color: ${e=>f(e.theme.PRIMARY,.9)};
  margin: 0;
  line-height: 1.5;
`;const Om=()=>{let{theme:e}=Pt(),{attributes:t}=_m(),n=R(e=>e.roomMetadata);R(e=>e.sceneMetadata);let r=R(e=>e.items),i=R(e=>e.cacheReady),[a,o]=(0,L.useState)(!1),[s,l]=(0,L.useState)(!1),[u,d]=(0,L.useState)(`D20`),[f,m]=(0,L.useState)(!1),[h,g]=(0,L.useState)(``),[_,v]=(0,L.useState)(`@STAT`),[y,b]=(0,L.useState)(!1),[x,S]=(0,L.useState)(!1),[C,w]=(0,L.useState)(!0),[T,E]=(0,L.useState)(!1),[ee,te]=(0,L.useState)(!0),[ne,re]=(0,L.useState)(!0),[ie,ae]=(0,L.useState)(!1),[oe,se]=(0,L.useState)(`bottom`),[ce,le]=(0,L.useState)(!1),[ue,de]=(0,L.useState)(!1),[fe,pe]=(0,L.useState)(!1),[me,he]=(0,L.useState)(!1),[ge,_e]=(0,L.useState)(!1),[ve,ye]=(0,L.useState)(!1),[be,A]=(0,L.useState)(!1),[Se,Ce]=(0,L.useState)(!1),[Te,Ee]=(0,L.useState)(!1),[De,j]=(0,L.useState)(!1),[Oe,ke]=(0,L.useState)(!1),[Ae,je]=(0,L.useState)(!1),[Me,Ne]=(0,L.useState)(``),[Pe,Ie]=(0,L.useState)(!1),M=(0,L.useRef)(null),[Re,ze]=(0,L.useState)(()=>Ge()),[Be,He]=(0,L.useState)(()=>Ve()),[We,Ke]=(0,L.useState)(()=>Ue()),[qe,Je]=(0,L.useState)(!1),[Ye,Xe]=(0,L.useState)(!1);(0,L.useEffect)(()=>{let e=!0;return(async()=>{let t=await ut();e&&(ze(t&&Ge()),He(Ve()),Ke(Ue()))})(),()=>{e=!1}},[]);let N=n;(0,L.useEffect)(()=>{if(i){if(N[D.POPCORN_INITIATIVE]!==void 0&&o(N[D.POPCORN_INITIATIVE]),N[D.REVERSE_INITIATIVE]!==void 0&&l(N[D.REVERSE_INITIATIVE]),N[D.DICE_RANGE]!==void 0&&d(N[D.DICE_RANGE]),N[D.INITIATIVE_MODIFIER_BID]===void 0?g(``):g(N[D.INITIATIVE_MODIFIER_BID]||``),N[D.INITIATIVE_MODIFIER_EXPR]!==void 0){let e=(N[D.INITIATIVE_MODIFIER_EXPR]||`@STAT`).replace(/\bx\b/gi,`@STAT`).trim();v(e.length>0?e:`@STAT`)}else v(`@STAT`);if(N[D.SHOW_CARD_ACCESS]!==void 0&&m(N[D.SHOW_CARD_ACCESS]),N[D.SHOW_PLAYER_VIEW]!==void 0&&b(N[D.SHOW_PLAYER_VIEW]),N[D.SHOW_OWNER_ONLY_EDIT]!==void 0&&E(N[D.SHOW_OWNER_ONLY_EDIT]),N[D.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?te(!0):te(N[D.SHOW_MODIFY_UNIT_CONTEXT_MENU]),N[D.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===void 0?re(!0):re(N[D.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]),N[D.SHOW_NON_PARTY_UNITS]!==void 0&&S(N[D.SHOW_NON_PARTY_UNITS]),N[D.SHOW_LIST_HP_NUMBERS]===void 0?w(!0):w(N[D.SHOW_LIST_HP_NUMBERS]),N[D.SHOW_HP_BARS]!==void 0&&ae(N[D.SHOW_HP_BARS]),N[D.HP_BAR_ORIENTATION]!==void 0&&se(N[D.HP_BAR_ORIENTATION]),N[D.SHOW_HP_NUMBERS]!==void 0&&le(N[D.SHOW_HP_NUMBERS]),N[D.SHOW_DEATH_EFFECT]!==void 0&&de(N[D.SHOW_DEATH_EFFECT]),N[D.SHOW_NAMES]!==void 0&&pe(N[D.SHOW_NAMES]),N[D.SHOW_TURN_EFFECT]!==void 0&&he(N[D.SHOW_TURN_EFFECT]),N[D.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&_e(N[D.USE_DESCRIPTIVE_DUPLICATES]),N[D.ENABLE_RUMBLE]!==void 0&&ye(N[D.ENABLE_RUMBLE]),N[D.ENABLE_BONES]!==void 0&&A(N[D.ENABLE_BONES]),N[D.ENABLE_DICE_PLUS]!==void 0&&Ce(N[D.ENABLE_DICE_PLUS]),N[D.ENABLE_TEXT_BASED_ROLLS]!==void 0&&Ee(N[D.ENABLE_TEXT_BASED_ROLLS]),N[D.ENABLE_OBR_NOTIFICATION]!==void 0&&j(N[D.ENABLE_OBR_NOTIFICATION]),N[D.SHOW_NOTIFICATION_TO_ALL]!==void 0&&ke(N[D.SHOW_NOTIFICATION_TO_ALL]),N[D.ENABLE_DISCORD_LOGGING]!==void 0&&je(N[D.ENABLE_DISCORD_LOGGING]),N[D.DISCORD_URL]!==void 0&&Ne(N[D.DISCORD_URL]),N[D.ENABLE_CONSOLE_LOG]!==void 0){let e=N[D.ENABLE_CONSOLE_LOG];Ie(e),O.setEnabled(e)}else Ie(!1)}},[i,N]);let P=async(e,t)=>{await c.room.setMetadata({[e]:t})},Qe=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},$e=t.filter(e=>e.attr_type===`numb`).sort((e,t)=>(e.attr_name||``).localeCompare(t.attr_name||``)),F=(e,t)=>{let n=e.trim();return n?t?/@STAT/i.test(n)?/\d\s*d\s*\d|\bd\s*\d/i.test(n)?{valid:!1,error:`Dice notation is not allowed in initiative modifiers.`}:Le(n.replace(/@STAT/gi,`@${t}`))?{valid:!0}:{valid:!1,error:`Invalid expression syntax.`}:{valid:!1,error:`Expression must include @STAT (the selected attribute value).`}:{valid:!1,error:`Select a numeric attribute first.`}:{valid:!1,error:`Expression is required.`}},et=async(e,t)=>{await P(D.INITIATIVE_MODIFIER_BID,e),await P(D.INITIATIVE_MODIFIER_EXPR,t)},tt=async e=>{if(g(e),!e){await et(``,_);return}let t=F(_,e);t.valid||await c.notification.show(t.error||`Invalid initiative modifier settings.`,`WARNING`),await et(e,_)},nt=async()=>{let e=_.trim(),t=(e.length>0?e:`@STAT`).replace(/\bx\b/gi,`@STAT`);if(v(t),!h){await et(``,t);return}let n=F(t,h);if(!n.valid){await c.notification.show(n.error||`Invalid initiative modifier expression.`,`WARNING`);return}await et(h,t)},rt=async()=>{if(!h){await c.notification.show(`Select an Initiative Modifier attribute before testing.`,`WARNING`);return}let e=_.replace(/\bx\b/gi,`@STAT`),t=F(e,h);if(!t.valid){await c.notification.show(t.error||`Invalid initiative modifier expression.`,`WARNING`);return}let n=Qe(u),r=Math.floor(Math.random()*n)+1,i=at(e.replace(/@STAT/gi,`@${h}`),{bidValueMap:{[h]:14},onMissingBid:`useZero`});if(!i.valid||!i.notation){await c.notification.show(`Could not resolve initiative modifier expression.`,`ERROR`);return}let a=Number(i.notation),o=Number.isFinite(a)?Math.trunc(a):0,s=r+o,l=e.replace(/@STAT/gi,`14`);await c.notification.show(`Mock Initiative: 1d${n}(${r}) + ${l}(${o}) = ${s}`,`SUCCESS`)},it=async()=>{try{let e=await we(),t=JSON.stringify(e,null,2),n=new Blob([t],{type:`text/plain;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`forge-collection-${new Date().toISOString().slice(0,10)}.txt`,i.click(),URL.revokeObjectURL(r),await c.notification.show(`Collection export complete. ${e.length} record(s) written.`,`SUCCESS`)}catch(e){O.log(`Collection export failed`,e),await c.notification.show(`Collection export failed. See console log for details.`,`ERROR`)}},ot=()=>{Xe(!0)},st=()=>{Xe(!1),M.current?.click()},ct=async e=>{let t=e.target.files?.[0];if(t)try{let e=await t.text(),n=JSON.parse(e);if(!Array.isArray(n)){await c.notification.show(`Import file must contain a JSON array of collection records.`,`ERROR`);return}let r=await Fe(n);await c.notification.show(`Collection import complete. Created: ${r.created}, Updated: ${r.updated}, Skipped: ${r.skipped}.`,`SUCCESS`)}catch(e){O.log(`Collection import failed`,e),await c.notification.show(`Collection import failed. Ensure the file is valid JSON and try again.`,`ERROR`)}finally{e.target.value=``}},lt=async()=>{Je(!0);try{await Ze(),ze(Ge()),He(Ve()),Ke(Ue()),await c.notification.show(`Connected to Battle-System account.`,`SUCCESS`)}catch(e){O.error(`Battle-System auth connection failed`,e),await c.notification.show(`Unable to connect to Battle-System account. Please try again.`,`ERROR`),ze(Ge()),He(Ve()),Ke(Ue())}finally{Je(!1)}};return(0,z.jsxs)(Gd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[(0,z.jsxs)(am,{theme:e,children:[(0,z.jsx)(om,{theme:e,children:`Settings`}),(0,z.jsxs)(sm,{theme:e,children:[(0,z.jsx)(vm,{theme:e,children:`Battle-System Account`}),(0,z.jsx)(Tm,{children:(0,z.jsx)(cm,{theme:e,onClick:()=>{lt()},disabled:qe,children:qe?`Connecting...`:Re?`Reconnect to Battle-System`:`Connect to Battle-System`})}),(0,z.jsx)(Em,{theme:e,$connected:Re,children:Re?`Status: Connected (${Be} tier)`:`Status: Disconnected`})]}),(0,z.jsxs)(sm,{theme:e,children:[(0,z.jsx)(vm,{theme:e,children:`Collection Management`}),(0,z.jsxs)(Tm,{children:[(0,z.jsx)(cm,{theme:e,onClick:it,children:`Export`}),(0,z.jsx)(cm,{theme:e,onClick:ot,children:`Import`})]}),(0,z.jsx)(`input`,{ref:M,type:`file`,accept:`.txt,.json,text/plain,application/json`,onChange:ct,style:{display:`none`}})]}),(0,z.jsxs)(sm,{theme:e,children:[(0,z.jsx)(vm,{theme:e,children:`List Controls`}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.reverseInitiative,children:`Reverse Initiative`})}),(0,z.jsx)(X,{label:`Reverse Initiative`,isOn:s,onChange:async e=>{l(e),await P(D.REVERSE_INITIATIVE,e),e&&a&&(o(!1),await P(D.POPCORN_INITIATIVE,!1))}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.popcornInitiative,children:`Popcorn Initiative`})}),(0,z.jsx)(X,{label:`Popcorn Initiative`,isOn:a,onChange:async e=>{o(e),await P(D.POPCORN_INITIATIVE,e),e&&s&&(l(!1),await P(D.REVERSE_INITIATIVE,!1))}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.initiativeDie,children:`Initiative Die:`})}),(0,z.jsx)(Sm,{theme:e,type:`text`,value:u,onChange:async e=>{let t=e.target.value;d(t),await P(D.DICE_RANGE,t),O.log(`Dice Range:`,t)},placeholder:`D20`,maxLength:3})]}),(0,z.jsxs)(ym,{theme:e,children:[(0,z.jsx)(bm,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.initiativeModifierAttr,children:`Initiative Modifier:`})}),(0,z.jsxs)(Cm,{theme:e,value:h,onChange:async e=>{await tt(e.target.value)},children:[(0,z.jsx)(`option`,{value:``,children:`None`}),$e.map(e=>(0,z.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,z.jsxs)(ym,{theme:e,children:[(0,z.jsx)(bm,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.initiativeModifierMath,children:`Math:`})}),(0,z.jsx)(Sm,{theme:e,type:`text`,value:_,onChange:e=>{v(e.target.value)},onBlur:async()=>{await nt()},placeholder:`floor((@STAT-10)/2)`,maxLength:120,disabled:!h}),(0,z.jsx)(wm,{theme:e,type:`button`,onClick:()=>{rt()},disabled:!h,children:`Test`})]}),(0,z.jsx)(xm,{theme:e,children:`Use @STAT as the selected attribute value. Example: floor((@STAT-10)/2)`}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.showCardColumn,children:`Show Card Column`})}),(0,z.jsx)(X,{label:`Show Stat Block Access`,isOn:f,onChange:async e=>{m(e),await P(D.SHOW_CARD_ACCESS,e)}})]})]}),(0,z.jsxs)(sm,{theme:e,children:[(0,z.jsx)(vm,{theme:e,children:`Player Controls`}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.showPlayerView,children:`Show Player View`})}),(0,z.jsx)(X,{label:`Show Player View`,isOn:y,onChange:async e=>{b(e),await P(D.SHOW_PLAYER_VIEW,e)}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.showNonPartyUnits,children:`Show Non-Party Units`})}),(0,z.jsx)(X,{label:`Show Non-Party Units`,isOn:x,onChange:async e=>{S(e),await P(D.SHOW_NON_PARTY_UNITS,e)}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.showHpNumbersOnList,children:`Show HP Numbers on List`})}),(0,z.jsx)(X,{label:`Show HP Numbers on List`,isOn:C,onChange:async e=>{w(e),await P(D.SHOW_LIST_HP_NUMBERS,e)}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.ownerOnlyEdit,children:`GM/Owner Only Edit`})}),(0,z.jsx)(X,{label:`Owner Only Edit`,isOn:T,onChange:async e=>{E(e),await P(D.SHOW_OWNER_ONLY_EDIT,e)}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.showAdjustHpContextMenu,children:`Show Adjust HP Context Menu`})}),(0,z.jsx)(X,{label:`Show Adjust HP Context Menu`,isOn:ee,onChange:async e=>{te(e),await P(D.SHOW_MODIFY_UNIT_CONTEXT_MENU,e)}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.showViewUnitContextMenuForPlayers,children:`Show View Unit Context Menu for Players`})}),(0,z.jsx)(X,{label:`Show View Unit Context Menu for Players`,isOn:ne,onChange:async e=>{re(e),await P(D.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS,e)}})]})]}),(0,z.jsxs)(sm,{theme:e,children:[(0,z.jsx)(vm,{theme:e,children:`Game Controls`}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.showHpBarsOnTokens,children:`Show HP Bars on tokens`})}),(0,z.jsx)(X,{label:`Show HP Bars on tokens`,isOn:ie,onChange:async e=>{ae(e),await P(D.SHOW_HP_BARS,e),e&&ce&&(le(!1),await P(D.SHOW_HP_NUMBERS,!1)),e&&N[D.HP_BAR_ORIENTATION]===void 0&&(se(`bottom`),await P(D.HP_BAR_ORIENTATION,`bottom`))}})]}),(ie||ce)&&(0,z.jsxs)(ym,{theme:e,children:[(0,z.jsx)(bm,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.hpOrientation,children:`Orientation:`})}),(0,z.jsxs)(Cm,{theme:e,value:oe,onChange:async e=>{let t=e.target.value;se(t),await P(D.HP_BAR_ORIENTATION,t)},children:[(0,z.jsx)(`option`,{value:`top`,children:`Top`}),(0,z.jsx)(`option`,{value:`bottom`,children:`Bottom`}),(0,z.jsx)(`option`,{value:`left`,children:`Left`}),(0,z.jsx)(`option`,{value:`right`,children:`Right`})]})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.showHpNumbersOnTokens,children:`Show HP Numbers on tokens`})}),(0,z.jsx)(X,{label:`Show HP Numbers on tokens`,isOn:ce,onChange:async e=>{le(e),await P(D.SHOW_HP_NUMBERS,e),e&&ie&&(ae(!1),await P(D.SHOW_HP_BARS,!1)),e&&N[D.HP_BAR_ORIENTATION]===void 0&&(se(`bottom`),await P(D.HP_BAR_ORIENTATION,`bottom`))}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.showDeathEffect,children:`Show Death Effect`})}),(0,z.jsx)(X,{label:`Show Death Effect`,isOn:ue,onChange:async e=>{de(e),await P(D.SHOW_DEATH_EFFECT,e)}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.showNamesOnTokens,children:`Show Names on Tokens`})}),(0,z.jsx)(X,{label:`Show names on tokens`,isOn:fe,onChange:async e=>{pe(e),await P(D.SHOW_NAMES,e);let t=r.filter(e=>e.metadata[p.ON_LIST]===!0);e?(O.log(`Showing names on tokens`),await c.scene.items.updateItems(t,e=>{for(let t of e){let e=t.metadata[p.UNIT_NAME],n=t;e&&n.text&&(n.text.plainText=String(e))}})):(O.log(`Hiding names on tokens`),await c.scene.items.updateItems(t,e=>{for(let t of e){let e=t;e.text&&(e.text.plainText=``)}}))}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.showTurnEffect,children:`Show Turn Effect`})}),(0,z.jsx)(X,{label:`Show Turn Effect`,isOn:me,onChange:async e=>{he(e),await P(D.SHOW_TURN_EFFECT,e)}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.useDescriptiveNames,children:`Use Descriptive Names`})}),(0,z.jsx)(X,{label:`Use Descriptive Duplicates Names`,isOn:ge,onChange:async e=>{_e(e),await P(D.USE_DESCRIPTIVE_DUPLICATES,e)}})]})]}),(0,z.jsxs)(sm,{theme:e,children:[(0,z.jsx)(vm,{theme:e,children:`Dice Controls`}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.enableTextBasedRolls,children:`Enable Text-Based Rolls`})}),(0,z.jsx)(X,{label:`Enable Text-Based Rolls`,isOn:Te,onChange:async e=>{Ee(e),await P(D.ENABLE_TEXT_BASED_ROLLS,e),e&&(j(!0),ye(!1),A(!1),Ce(!1),await P(D.ENABLE_OBR_NOTIFICATION,!0),await P(D.ENABLE_RUMBLE,!1),await P(D.ENABLE_BONES,!1),await P(D.ENABLE_DICE_PLUS,!1))}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.enableRumble,children:`Enable Rumble! Integration`})}),(0,z.jsx)(X,{label:`Enable Rumble! Integration`,isOn:ve,onChange:async e=>{ye(e),await P(D.ENABLE_RUMBLE,e),e&&(A(!1),Ce(!1),Ee(!1),await P(D.ENABLE_BONES,!1),await P(D.ENABLE_DICE_PLUS,!1),await P(D.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.enableBones,children:`Enable Bones! Integration`})}),(0,z.jsx)(X,{label:`Enable Bones! Integration`,isOn:be,onChange:async e=>{A(e),await P(D.ENABLE_BONES,e),e&&(ye(!1),Ce(!1),Ee(!1),await P(D.ENABLE_RUMBLE,!1),await P(D.ENABLE_DICE_PLUS,!1),await P(D.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.enableDicePlus,children:`Enable Dice+ Integration`})}),(0,z.jsx)(X,{label:`Enable Dice+ Integration`,isOn:Se,onChange:async e=>{Ce(e),await P(D.ENABLE_DICE_PLUS,e),e&&(ye(!1),A(!1),Ee(!1),await P(D.ENABLE_RUMBLE,!1),await P(D.ENABLE_BONES,!1),await P(D.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.enableObrNotification,children:`Enable OBR Notification`})}),(0,z.jsx)(X,{label:`Enable OBR Notification`,isOn:De,onChange:async e=>{j(e),await P(D.ENABLE_OBR_NOTIFICATION,e)}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.showResultsToAll,children:`Show Results to All`})}),(0,z.jsx)(X,{label:`Show Results to All`,isOn:Oe,onChange:async e=>{ke(e),await P(D.SHOW_NOTIFICATION_TO_ALL,e)}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.enableDiscordLogging,children:`Enable Discord Logging`})}),(0,z.jsx)(X,{label:`Enable Discord Logging`,isOn:Ae,onChange:async e=>{if(e&&!xe(Me.trim())){await c.notification.show(`Please enter a valid Discord webhook URL before enabling Discord logging.`,`WARNING`),je(!1),await P(D.ENABLE_DISCORD_LOGGING,!1);return}je(e),await P(D.ENABLE_DISCORD_LOGGING,e)}})]}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)(bm,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.discordUrl,children:`Discord Url:`})}),(0,z.jsx)(Sm,{theme:e,type:`text`,value:Me,onChange:async e=>{let t=e.target.value,n=t.trim();Ne(t),await P(D.DISCORD_URL,n),O.log(`Discord URL:`,n)},placeholder:`https://discord.com/api/webhooks/...`,maxLength:200})]})]}),(0,z.jsxs)(sm,{theme:e,children:[(0,z.jsx)(vm,{theme:e,children:`Other`}),(0,z.jsxs)(Q,{theme:e,children:[(0,z.jsx)($,{theme:e,children:(0,z.jsx)(k,{theme:e,text:Z.enableConsoleLog,children:`Enable Console Log`})}),(0,z.jsx)(X,{label:`Enable Console Log`,isOn:Pe,onChange:async e=>{Ie(e),O.setEnabled(e),await P(D.ENABLE_CONSOLE_LOG,e)}})]})]})]}),(0,z.jsx)(gm,{isOpen:Ye,title:`Confirm Import`,onClose:()=>Xe(!1),actions:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(cm,{theme:e,variant:`secondary`,onClick:()=>Xe(!1),children:`Cancel`}),(0,z.jsx)(cm,{theme:e,onClick:st,children:`Continue`})]}),children:(0,z.jsx)(Dm,{theme:e,children:`Import will overwrite duplicate records that share the same Name and Author. Continue?`})})]})};var km=T.div`
  ${{display:`flex`,height:`100%`,flexDirection:`column`,padding:`1rem`}}
`,Am=T.div`
  ${{flex:`1 1 0%`,overflowY:`auto`,borderRadius:`0.5rem`,borderWidth:`2px`,"--tw-border-opacity":`1`,borderColor:`rgb(255 255 255 / var(--tw-border-opacity, 1))`,padding:`0.5rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  margin: 10px;
  white-space: break-spaces;
  word-wrap: break-word;
  margin-bottom: 50px;
`,jm=T.div`
  ${{marginBottom:`0.5rem`,textAlign:`left`}}
`,Mm=T.span`
  ${{marginRight:`0.5rem`,fontSize:`0.75rem`,"--tw-text-opacity":`1`,color:`rgb(203 213 224 / var(--tw-text-opacity, 1))`}}
`,Nm=T.span`
  ${{fontSize:`0.875rem`,"--tw-text-opacity":`1`,color:`rgb(255 255 255 / var(--tw-text-opacity, 1))`}}
`;const Pm=()=>{let e=Dt(e=>e.messages),t=(0,L.useRef)(null),{theme:n}=Pt();return(0,L.useEffect)(()=>{t.current?.scrollIntoView({behavior:`smooth`})},[e]),(0,z.jsx)(Gd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,z.jsxs)(km,{children:[(0,z.jsx)(om,{theme:n,children:`System Log`}),(0,z.jsxs)(Am,{children:[e.map(e=>(0,z.jsxs)(jm,{children:[(0,z.jsx)(Mm,{children:e.timestamp}),(0,z.jsx)(Nm,{children:e.text})]},e.id)),(0,z.jsx)(`div`,{ref:t})]})]})})},Fm=`buff_effect_one`,Im=`debuff_effect_one`,Lm=[{value:`buff_effect_one`,label:`Buff Effect One`},{value:`buff_effect_two`,label:`Buff Effect Two`}],Rm=[{value:`debuff_effect_one`,label:`Debuff Effect One`},{value:`debuff_effect_two`,label:`Debuff Effect Two`}],zm=e=>Lm.some(t=>t.value===e),Bm=e=>Rm.some(t=>t.value===e),Vm=e=>{switch(e){case`buff_effect_two`:return`
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
`}},Hm=e=>{switch(e){case`debuff_effect_two`:return`
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
`}};var Um=t.EXTENSIONID,Wm=`com.battle-system.forge`;const Gm={SYSTEM_NAME:`${Um}/SystemName`,IMPORT_DATE:`${Um}/ImportDate`,SNAPSHOT_PUBLIC_ID:`${Um}/SnapshotPublicId`};var Km=(()=>{let e=E.attributes,t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||``,maxHpBid:n?.attr_bid||``}})(),qm=(e,t)=>e instanceof Error&&e.message?e.message:t,Jm=T.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Ym=T.div`
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`,Xm=T.h2`
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  padding: 12px 15px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 400;
`,Zm=T.p`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`,Qm=T.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 15px;
`,$m=T.div`
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
`,eh=T.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.theme.PRIMARY};
  margin-top: 5px;
`,th=T.div`
  margin-top: 16px;
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 14px;
`,nh=T.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 10px 0;
  font-size: 15px;
`,rh=T.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`,ih=T.label`
  color: ${e=>e.theme.PRIMARY};
  min-width: 84px;
  font-size: 13px;
`,ah=T.select`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 13px;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
  }
`,oh=T.div`
  background-color: ${()=>f(`#FF0000`,.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,sh=T.div`
  background-color: ${()=>f(`#00FF00`,.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,ch=T.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`,lh=T.p`
  color: ${e=>f(e.theme.PRIMARY,.9)};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,uh=T.div`
  margin-top: 30px;
`,dh=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,fh=T.div`
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ph=T.div`
  flex: 1;
`,mh=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`,hh=T.div`
  color: ${e=>f(e.theme.PRIMARY,.7)};
  font-size: 13px;
  font-style: italic;
`,gh=T.div`
  display: flex;
  gap: 8px;
`,_h=T.button`
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
`,vh={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}};const yh=()=>{let{theme:e,updateThemeFromSystem:t}=Pt(),n=R(e=>e.sceneMetadata),r=R(e=>e.roomMetadata),i=r,a=R(e=>e.systemData),o=R(e=>e.setSystemData),[s,l]=(0,L.useState)(()=>Re().premiumAuthorized),[u,d]=(0,L.useState)(``),[p,m]=(0,L.useState)(!1),[h,g]=(0,L.useState)(null),[_,v]=(0,L.useState)(null),[y,b]=(0,L.useState)(``),[x,S]=(0,L.useState)(null),[w,T]=(0,L.useState)(null),[ee,te]=(0,L.useState)([]),[ne,re]=(0,L.useState)(``),[ie,ae]=(0,L.useState)(``),[oe,se]=(0,L.useState)(Fm),[ce,le]=(0,L.useState)(Im),[k,ue]=(0,L.useState)([]),[de,fe]=(0,L.useState)(!1),[pe,me]=(0,L.useState)(null),[he,ge]=(0,L.useState)(``);(0,L.useEffect)(()=>{let e=!0,t=async()=>{await ut(),e&&l(Re().premiumAuthorized)},n=Me(t=>{e&&l(t.premiumAuthorized)});return t(),()=>{e=!1,n()}},[]),(0,L.useEffect)(()=>{_e(),Se()},[n,r,a,s]);let _e=()=>{try{if(!s){let e={primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url};b(E.name),S(null),T(e),te(E.attributes),re(Km.currentHpBid),ae(Km.maxHpBid),se(Fm),le(Im);return}if(a){let e=i[D.HP_CURRENT_BID],t=i[D.HP_MAX_BID],n=i[D.BUFF_VISUAL_PRESET],r=i[D.DEBUFF_VISUAL_PRESET];b(a.systemName),S(a.importDate),T(a.theme),te(a.attributes),re(e||``),ae(t||``),se(zm(n)?n:Fm),le(Bm(r)?r:Im);return}let e=r[Gm.SYSTEM_NAME],t=r[Gm.IMPORT_DATE],n=i[D.HP_CURRENT_BID],o=i[D.HP_MAX_BID],c=i[D.BUFF_VISUAL_PRESET],l=i[D.DEBUFF_VISUAL_PRESET];b(e||E.name),S(t||null),T({primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url}),te(E.attributes),re(n||``),ae(o||``),se(zm(c)?c:Fm),le(Bm(l)?l:Im)}catch(e){O.error(`Error loading system from cache:`,e)}},ye=async(e,t)=>{await c.room.setMetadata({[e]:t})},xe=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Imported ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Imported ${t} is not a JSON array`);return n}throw Error(`Imported ${t} has invalid type`)},A=ee.filter(e=>e.attr_type===`numb`),Se=()=>{try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(n&&n.startsWith(`${Wm}.`)&&n.endsWith(`.backup`)){let t=localStorage.getItem(n);if(t){let n=JSON.parse(t);e.push(n)}}}e.sort((e,t)=>new Date(t.backupDate).getTime()-new Date(e.backupDate).getTime()),ue(e)}catch(e){O.error(`Error loading backups:`,e)}},Ce=async e=>{try{if(!a){O.warn(`Cannot create backup: runtime system data is unavailable`);return}let e=a.systemName||E.name,t={name:e,backupDate:new Date().toISOString(),theme_primary:a.theme.primary,theme_offset:a.theme.offset,theme_background:a.theme.background,theme_border:a.theme.border,background_url:a.theme.background_url,card_layout:a.cardLayout,list_layout:a.listLayout,attributes:a.attributes},n=`${Wm}.${e}.backup`;localStorage.setItem(n,JSON.stringify(t)),O.log(`Backup created for ${e}`),Se()}catch(e){throw O.error(`Error creating backup:`,e),e}},we=e=>{try{let t=`${Wm}.${e}.backup`;localStorage.removeItem(t),O.log(`Backup deleted for ${e}`),Se(),v(`Backup for "${e}" deleted successfully`)}catch(e){O.error(`Error deleting backup:`,e),g(`Failed to delete backup`)}},Te=(e,t)=>{ge(e),me(()=>t),fe(!0)},Ee=async()=>{fe(!1),pe&&(await pe(),me(null))},De=()=>{fe(!1),me(null),ge(``)},j=async()=>{if(!u.trim()){g(`Please enter a share_id`);return}Te(`This will overwrite your current system data. A backup of your current system will be saved to local storage. Do you want to continue?`,async()=>{await Oe()})},Oe=async()=>{if(!Ue()){g(`Premium account required. Connect and use a premium Battle-System account before importing systems.`);return}m(!0),g(null),v(null);try{await ct();let{data:e,error:n}=await ht(async()=>C.rpc(`bs_forge_import_system_snapshot`,{p_source_share_id:u.trim()}));if(n)throw n;if(!e){g(`No system found with that share_id`),m(!1);return}let r=Array.isArray(e)?e[0]:e;if(!r||typeof r.snapshot_public_id!=`string`)throw Error(`Snapshot import did not return a valid record`);let i=xe(r.card_layout,`card_layout`),a=xe(r.list_layout,`list_layout`),s=xe(r.attributes,`attributes`);if(!Array.isArray(s))throw Error(`Imported attributes are not a valid array`);await Ce(y);let l={primary:r.theme_primary,offset:r.theme_offset,background:r.theme_background,border:r.theme_border,background_url:r.background_url},f=new Date().toISOString();await c.room.setMetadata({[Gm.SNAPSHOT_PUBLIC_ID]:r.snapshot_public_id,[Gm.SYSTEM_NAME]:r.system_name,[Gm.IMPORT_DATE]:f}),o({theme:l,cardLayout:i,listLayout:a,attributes:s,systemName:r.system_name,importDate:f,snapshotPublicId:r.snapshot_public_id}),b(r.system_name),S(f),T(l),t(l.primary,l.offset,l.background,l.border,l.background_url),v(`System "${r.system_name}" loaded successfully! Backup created.`),d(``),O.log(`System snapshot imported and loaded:`,{systemName:r.system_name,snapshotPublicId:r.snapshot_public_id})}catch(e){O.error(`Error fetching system:`,e),g(qm(e,`An error occurred while fetching the system`))}finally{m(!1)}},ke=async e=>{Te(`This will restore the system "${e.name}" from backup. A backup of your current system will be created. Do you want to continue?`,async()=>{await Ae(e)})},Ae=async e=>{m(!0),g(null),v(null);try{if(!Ue()){g(`Premium account required. Connect and use a premium Battle-System account before restoring backups for room sharing.`);return}await ct(),await Ce(y);let n={primary:e.theme_primary,offset:e.theme_offset,background:e.theme_background,border:e.theme_border,background_url:e.background_url};if(!Array.isArray(e.card_layout)||!Array.isArray(e.list_layout)||!Array.isArray(e.attributes))throw Error(`Backup data is invalid`);let r=new Date().toISOString(),i=`forge-backup:${e.name.trim().toLowerCase()}`,{data:a,error:s}=await ht(async()=>C.rpc(`bs_forge_upsert_user_snapshot_payload`,{p_source_share_id:i,p_system_name:e.name,p_background_url:e.background_url,p_theme_primary:e.theme_primary,p_theme_offset:e.theme_offset,p_theme_background:e.theme_background,p_theme_border:e.theme_border,p_card_layout:e.card_layout,p_list_layout:e.list_layout,p_attributes:e.attributes}));if(s)throw s;let l=Array.isArray(a)?a[0]:a;if(!l||typeof l.snapshot_public_id!=`string`)throw Error(`Backup restore snapshot publish failed`);o({theme:n,cardLayout:e.card_layout,listLayout:e.list_layout,attributes:e.attributes,systemName:e.name,importDate:r,snapshotPublicId:l.snapshot_public_id}),await c.room.setMetadata({[Gm.SNAPSHOT_PUBLIC_ID]:l.snapshot_public_id,[Gm.SYSTEM_NAME]:e.name,[Gm.IMPORT_DATE]:r}),b(e.name),S(r),T(n),t(n.primary,n.offset,n.background,n.border,n.background_url),v(`System "${e.name}" restored from backup successfully!`),O.log(`System restored from backup:`,e.name)}catch(e){O.error(`Error restoring backup:`,e),g(`Failed to restore system from backup`)}finally{m(!1)}},je=async()=>{m(!0),g(null),v(null);try{let e={primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url};o({theme:e,cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,snapshotPublicId:null}),await c.room.setMetadata({[Gm.SNAPSHOT_PUBLIC_ID]:null,[Gm.SYSTEM_NAME]:E.name,[Gm.IMPORT_DATE]:null}),b(E.name),S(null),T(e),t(e.primary,e.offset,e.background,e.border,e.background_url),v(`Reset to default system successfully!`)}catch(e){g(`Failed to reset to default system`),O.error(`Error resetting to default:`,e)}finally{m(!1)}},Ne=e=>e?new Date(e).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):null,Pe=!s,Fe=!s;return(0,z.jsxs)(Gd.div,{variants:vh,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,z.jsxs)(am,{theme:e,children:[(0,z.jsx)(om,{theme:e,children:`System Configuration`}),(0,z.jsx)(Xm,{theme:e,children:y}),x?(0,z.jsxs)(Zm,{theme:e,children:[`Imported: `,Ne(x)]}):(0,z.jsx)(Zm,{theme:e,children:`Using Default System`}),w&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(Qm,{children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)($m,{color:w.primary,theme:e,children:w.primary}),(0,z.jsx)(eh,{theme:e,children:`PRIMARY`})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)($m,{color:w.offset,theme:e,children:w.offset}),(0,z.jsx)(eh,{theme:e,children:`OFFSET`})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)($m,{color:w.background,theme:e,children:w.background}),(0,z.jsx)(eh,{theme:e,children:`BG`})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)($m,{color:w.border,theme:e,children:w.border}),(0,z.jsx)(eh,{theme:e,children:`BORDER`})]})]}),(0,z.jsxs)(th,{theme:e,children:[(0,z.jsx)(nh,{theme:e,children:`System Settings`}),(0,z.jsxs)(rh,{children:[(0,z.jsx)(ih,{theme:e,children:`Current HP`}),(0,z.jsxs)(ah,{theme:e,value:ne,disabled:Fe,onChange:async e=>{if(Fe)return;let t=e.target.value;re(t),await ye(D.HP_CURRENT_BID,t)},children:[(0,z.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),A.map(e=>(0,z.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,z.jsxs)(rh,{children:[(0,z.jsx)(ih,{theme:e,children:`Max HP`}),(0,z.jsxs)(ah,{theme:e,value:ie,disabled:Fe,onChange:async e=>{if(Fe)return;let t=e.target.value;ae(t),await ye(D.HP_MAX_BID,t)},children:[(0,z.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),A.map(e=>(0,z.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),Fe&&(0,z.jsx)(Zm,{theme:e,children:`Premium account required to edit HP mapping.`}),(0,z.jsxs)(rh,{children:[(0,z.jsx)(ih,{theme:e,children:`Buff Visual`}),(0,z.jsx)(ah,{theme:e,value:oe,onChange:async e=>{let t=e.target.value;zm(t)&&(se(t),await ye(D.BUFF_VISUAL_PRESET,t))},children:Lm.map(e=>(0,z.jsx)(`option`,{value:e.value,children:e.label},e.value))})]}),(0,z.jsxs)(rh,{children:[(0,z.jsx)(ih,{theme:e,children:`Debuff Visual`}),(0,z.jsx)(ah,{theme:e,value:ce,onChange:async e=>{let t=e.target.value;Bm(t)&&(le(t),await ye(D.DEBUFF_VISUAL_PRESET,t))},children:Rm.map(e=>(0,z.jsx)(`option`,{value:e.value,children:e.label},e.value))})]})]})]}),(0,z.jsxs)(Ym,{theme:e,children:[(0,z.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0},children:`Import New System`}),(0,z.jsx)(`p`,{style:{color:f(e.PRIMARY,.8),fontSize:`14px`},children:Pe?`Premium account required to import new/custom systems.`:`Enter a share_id to download and activate a new game system configuration.`}),(0,z.jsx)(Jm,{children:(0,z.jsx)(lm,{theme:e,type:`text`,value:u,onChange:e=>d(e.target.value),placeholder:Pe?``:`Enter Share Id...`,disabled:p||Pe,onKeyPress:e=>e.key===`Enter`&&j()})}),(0,z.jsxs)(ch,{children:[(0,z.jsx)(cm,{theme:e,onClick:j,disabled:p||Pe||!u.trim(),children:p?`....!`:`Import System`}),(0,z.jsx)(cm,{theme:e,variant:`secondary`,onClick:je,disabled:p,children:`Use Default`})]})]}),h&&(0,z.jsxs)(oh,{theme:e,children:[(0,z.jsx)(`strong`,{children:`Error:`}),` `,h]}),_&&(0,z.jsxs)(sh,{theme:e,children:[(0,z.jsx)(`strong`,{children:`Success:`}),` `,_]}),k.length>0&&(0,z.jsx)(uh,{children:(0,z.jsxs)(sm,{theme:e,children:[(0,z.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0,marginBottom:`15px`},children:`System Backups`}),(0,z.jsx)(dh,{children:k.map(t=>(0,z.jsxs)(fh,{theme:e,children:[(0,z.jsxs)(ph,{children:[(0,z.jsx)(mh,{theme:e,children:t.name}),(0,z.jsxs)(hh,{theme:e,children:[`Backed up: `,Ne(t.backupDate)]})]}),(0,z.jsxs)(gh,{children:[(0,z.jsx)(_h,{theme:e,onClick:()=>ke(t),disabled:p,title:`Import this backup`,children:(0,z.jsx)(ve,{size:18})}),(0,z.jsx)(_h,{theme:e,$variant:`danger`,onClick:()=>we(t.name),disabled:p,title:`Delete this backup`,children:(0,z.jsx)(be,{size:18})})]})]},`${t.name}-${t.backupDate}`))})]})})]}),(0,z.jsx)(gm,{isOpen:de,title:`Confirm Action`,onClose:De,actions:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(cm,{theme:e,variant:`secondary`,onClick:De,children:`Cancel`}),(0,z.jsx)(cm,{theme:e,onClick:Ee,children:`Confirm`})]}),children:(0,z.jsx)(lh,{theme:e,children:he})})]},`system`)};function bh(e,t){let n=e.replace(`#`,``);n.length===3&&(n=n.split(``).map(e=>e+e).join(``));let r=parseInt(n,16);return`rgba(${r>>16&255}, ${r>>8&255}, ${r&255}, ${t})`}var xh=class{static async CenterViewportOnImage(e){let t=await c.scene.grid.getDpi(),n=await c.viewport.getScale(),r=await c.viewport.getWidth(),i=await c.viewport.getHeight(),a={x:r/2,y:i/2},o={x:a.x/n,y:a.y/n},s=await this.GetImageCenter(e,t),l={x:s.x-o.x,y:s.y-o.y},u={x:l.x*n*-1,y:l.y*n*-1};await c.viewport.animateTo({position:u,scale:n})}static async GetImageCenter(t,n){if(e(t)){let e=n/t.grid.dpi,r=t.image.width*e,i=t.image.height*e,a=t.grid.offset.x/t.image.width*r,o=t.grid.offset.y/t.image.height*i;return{x:t.position.x-a+r/2,y:t.position.y-o+i/2}}else if(o(t)&&t.points.length>0)return{x:t.points[0].x,y:t.points[0].y};else return{x:t.position.x,y:t.position.y}}};const Sh=`${I}/effects`;var Ch=`${I}/effects-expired`,wh=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Th=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Eh=T.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`,Dh=T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
`,Oh=T.div`
  flex: 0 0 120px;
  min-width: 120px;
  display: flex;
  align-items: flex-end;
`,kh=T.label`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`,Ah=T.input`
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
`,jh=T.select`
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
`,Mh=T(jh)`
  min-width: 180px;
  height: 96px;
  padding-right: 8px;
`,Nh=T.button`
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
`,Ph=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 240px;
  overflow-y: auto;
`,Fh=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background: ${e=>f(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,Ih=T.div`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  font-size: 12px;
`,Lh=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,Rh=T.p`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,zh=T.p`
  color: #ff6b6b;
  margin: 0;
  font-size: 12px;
`,Bh=T.div`
  position: relative;
  display: inline-flex;
`,Vh=T.button`
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
`,Hh=T.span`
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
`,Uh=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const Wh=({items:e,units:t,setItems:n,playerData:r})=>{let[i,a]=(0,L.useState)(null),[o,s]=(0,L.useState)(``),[l,u]=(0,L.useState)(`1`),[d,f]=(0,L.useState)(`rounds`),[m,h]=(0,L.useState)(`start`),[g,_]=(0,L.useState)(`neutral`),[v,y]=(0,L.useState)([]),[b,x]=(0,L.useState)(null),S=(0,L.useMemo)(()=>{let t=new Map;return e.forEach(e=>{e.metadata?.[p.ON_LIST]===!0&&t.set(e.id,Uh(e.metadata?.[Sh]))}),t},[e]),C=e=>S.get(e)||[],w=async(t,r)=>{let i=r.filter(e=>e.remaining>0);n(e.map(e=>{if(e.id!==t)return e;let n={...e.metadata||{}};return i.length>0?n[Sh]=i:delete n[Sh],{...e,metadata:n}})),await c.scene.items.updateItems([t],e=>{let t={...e[0].metadata||{}};i.length>0?t[Sh]=i:delete t[Sh],e[0].metadata=t})},T=async e=>{try{await c.broadcast.sendMessage(Ch,{message:e},{destination:`ALL`})}catch(t){O.error(`Failed to broadcast expired effect message`,t),await c.notification.show(e,`WARNING`)}},E=async(t,n)=>{if(String(r?.role||``).toUpperCase()!==`GM`)return;let i=[],a=[];e.forEach(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return;let r=Uh(e.metadata?.[Sh]);if(r.length===0)return;let o=!1,s=[];r.forEach(r=>{if(!(r.endTiming===t&&(r.durationType===`turns`||e.id===n))){s.push(r);return}let i=r.remaining-1;if(o=!0,i<=0){a.push(`${e.name||`Unit`}: ${r.name} expired`);return}s.push({...r,remaining:i})}),o&&i.push({unitId:e.id,effects:s})});for(let e of i)await w(e.unitId,e.effects);if(a.length>0)for(let e of a)await T(e)},ee=(0,L.useMemo)(()=>i&&t.find(e=>e.id===i)||null,[i,t]),te=(0,L.useMemo)(()=>i?C(i):[],[i,S]);return(0,L.useEffect)(()=>{let e=c.broadcast.onMessage(Ch,async e=>{let t=e.data?.message;typeof t!=`string`||!t.trim()||await c.notification.show(t,`WARNING`)});return()=>{e()}},[]),{effectsModalUnitId:i,selectedEffectsUnit:ee,activeEffectsForSelectedUnit:te,effectNameInput:o,setEffectNameInput:s,effectDurationInput:l,setEffectDurationInput:u,effectDurationType:d,setEffectDurationType:f,effectEndTiming:m,setEffectEndTiming:h,effectType:g,setEffectType:_,effectTargetIds:v,setEffectTargetIds:e=>{y(Array.from(new Set(e)))},effectsModalError:b,units:t,getEffectsForUnit:C,handleOpenEffectsModal:e=>{x(null),s(``),u(`1`),f(`rounds`),h(`start`),_(`neutral`),y([e]),a(e)},handleCloseEffectsModal:()=>{a(null),x(null)},handleAddEffect:async()=>{if(!i)return;let n=o.trim(),r=parseInt(l,10);if(!n){x(`Enter an effect name.`);return}if(!Number.isFinite(r)||r<=0){x(`Duration must be a positive number.`);return}let a=Array.from(new Set(v.filter(e=>t.some(t=>t.id===e))));if(a.length===0){x(`Select at least one target.`);return}let c=C(i),f=ee?.name||e.find(e=>e.id===i)?.name||`Unknown`,p={id:crypto.randomUUID(),name:n,remaining:r,durationType:d,endTiming:m,effectType:g,targets:a,createdByName:f,createdById:i};await w(i,[...c,p]),x(null),s(``),u(`1`),_(`neutral`),y([i])},handleDeleteEffect:async e=>{i&&await w(i,C(i).filter(t=>t.id!==e))},processEffectsForTurnEvent:E}},Gh=({manager:e})=>{let{theme:t}=Pt(),n=(0,L.useMemo)(()=>{let t=new Map;return e.units.forEach(e=>{t.set(e.id,e.name)}),t},[e.units]),r=e=>e===`buff`?`Buff`:e===`debuff`?`Debuff`:`Neutral`,i=e=>{if(e.length===0)return`No targets`;let t=e.map(e=>n.get(e)).filter(e=>typeof e==`string`&&e.length>0);return t.length===0?`${e.length} target${e.length===1?``:`s`}`:t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`};return(0,z.jsx)(gm,{isOpen:!!e.effectsModalUnitId,title:e.selectedEffectsUnit?`Effects: ${e.selectedEffectsUnit.name}`:`Effects`,onClose:e.handleCloseEffectsModal,minWidth:`520px`,maxWidth:`600px`,children:(0,z.jsxs)(wh,{children:[(0,z.jsxs)(Th,{children:[(0,z.jsxs)(Eh,{children:[(0,z.jsxs)(Dh,{style:{flex:`0 0 120px`},children:[(0,z.jsx)(kh,{theme:t,children:`Effect`}),(0,z.jsx)(Ah,{theme:t,type:`text`,placeholder:`Name`,value:e.effectNameInput,onChange:t=>e.setEffectNameInput(t.target.value)})]}),(0,z.jsxs)(Dh,{style:{flex:`0 0 140px`},children:[(0,z.jsx)(kh,{theme:t,children:`Duration`}),(0,z.jsx)(Ah,{theme:t,type:`number`,min:1,value:e.effectDurationInput,onChange:t=>e.setEffectDurationInput(t.target.value)})]}),(0,z.jsxs)(Dh,{style:{flex:`0 0 120px`},children:[(0,z.jsx)(kh,{theme:t,children:`By`}),(0,z.jsxs)(jh,{theme:t,value:e.effectDurationType,onChange:t=>e.setEffectDurationType(t.target.value),children:[(0,z.jsx)(`option`,{value:`turns`,children:`Turns`}),(0,z.jsx)(`option`,{value:`rounds`,children:`Rounds`})]})]})]}),(0,z.jsxs)(Eh,{children:[(0,z.jsxs)(Dh,{style:{flex:`0 0 120px`},children:[(0,z.jsx)(kh,{theme:t,children:`Type`}),(0,z.jsxs)(jh,{theme:t,value:e.effectType,onChange:t=>e.setEffectType(t.target.value),children:[(0,z.jsx)(`option`,{value:`neutral`,children:`Neutral`}),(0,z.jsx)(`option`,{value:`buff`,children:`Buff`}),(0,z.jsx)(`option`,{value:`debuff`,children:`Debuff`})]})]}),(0,z.jsxs)(Dh,{style:{flex:`0 0 140px`},children:[(0,z.jsx)(kh,{theme:t,children:`Ends at`}),(0,z.jsxs)(jh,{theme:t,value:e.effectEndTiming,onChange:t=>e.setEffectEndTiming(t.target.value),children:[(0,z.jsx)(`option`,{value:`start`,children:`Start of turn`}),(0,z.jsx)(`option`,{value:`end`,children:`End of turn`})]})]}),(0,z.jsx)(Oh,{children:(0,z.jsx)(Nh,{theme:t,onClick:e.handleAddEffect,style:{width:`100%`},children:`Add`})})]})]}),(0,z.jsxs)(Dh,{children:[(0,z.jsx)(kh,{theme:t,children:`Targets`}),(0,z.jsx)(Mh,{theme:t,multiple:!0,value:e.effectTargetIds,onChange:t=>{let n=Array.from(t.target.selectedOptions).map(e=>e.value);e.setEffectTargetIds(n)},children:e.units.map(e=>(0,z.jsx)(`option`,{value:e.id,children:e.name},e.id))})]}),e.effectsModalError&&(0,z.jsx)(zh,{theme:t,children:e.effectsModalError}),e.activeEffectsForSelectedUnit.length===0?(0,z.jsx)(Rh,{theme:t,children:`No active effects.`}):(0,z.jsx)(Ph,{children:e.activeEffectsForSelectedUnit.map(n=>(0,z.jsxs)(Fh,{theme:t,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(Lh,{theme:t,children:n.name}),(0,z.jsxs)(Ih,{theme:t,children:[r(n.effectType),` • `,n.remaining,` `,n.durationType,` • ends at `,n.endTiming===`start`?`start of turn`:`end of turn`,` • by `,n.createdByName]}),(0,z.jsxs)(Ih,{theme:t,children:[`Targets: `,i(n.targets)]})]}),(0,z.jsx)(Nh,{theme:t,onClick:()=>{e.handleDeleteEffect(n.id)},children:`Delete`})]},n.id))})]})})},Kh=({activeEffectsCount:e,canInteract:t,onOpen:n,icon:r})=>{let{theme:i}=Pt();return(0,z.jsxs)(Bh,{children:[(0,z.jsx)(Vh,{theme:i,$active:e>0,disabled:!t,onClick:()=>{t&&n()},children:r||(0,z.jsx)(_e,{})}),e>0&&(0,z.jsx)(Hh,{theme:i,children:e>99?`99+`:e})]})};var qh=T.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,Jh=T.input`
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
`;const Yh=({theme:e,unit:t,canInteract:n,elevationDraftValue:r,onElevationDraftChange:i,onCommitElevationChange:a})=>(0,z.jsx)(qh,{theme:e,children:(0,z.jsx)(Jh,{theme:e,type:`text`,inputMode:`decimal`,min:-999,max:999,step:1,value:r??String(t.elevation??0),readOnly:!n,onChange:n?e=>i(t.id,e.target.value):void 0,onBlur:n?e=>a(t.id,e.target.value):void 0,onKeyDown:e=>{n&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}})}),Xh=({theme:e,canInteract:t,icon:n,activeEffectsCount:r,onOpen:i})=>(0,z.jsx)(qh,{theme:e,children:(0,z.jsx)(Kh,{activeEffectsCount:r,canInteract:t,icon:n||(0,z.jsx)(_e,{}),onOpen:i})});var Zh=`${I}/elevation-badge`,Qh=`${I}/elevation-badge-owner`,$h=`${I}/elevation`,eg=200,tg=40,ng=60,rg=120,ig=24,ag=(e,t)=>{if(!e)return;if(e.startsWith(`#`))return bh(e,t);let n=e.match(/^rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\)$/i);if(n){let[,e,r,i]=n;return`rgba(${e}, ${r}, ${i}, ${t})`}let r=e.match(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i);if(r){let[,e,n,i]=r;return`rgba(${e}, ${n}, ${i}, ${t})`}return e},og=e=>`
    0 1px 1px ${f(e.BACKGROUND,.95)},
    0 0 2px ${f(e.BACKGROUND,.85)}
  `,sg=/(\d+)d(\d+)([kd][hl]\d+|!)?/gi,cg={anchor:dt,aperture:Ne,award:We,batterycharging:Qe,book:He,calendar:lt,clock:ot,cloudlightning:et,drama:st,carrot:N,bone:tt,compass:qe,dollarsign:F,feather:Se,eye:Be,heart:he,moon:ge,music:fe,shield:pe,star:Ce,sun:_e,target:A,users:Je,wind:Ye,zap:le,sword:me,swords:de,axe:Ke,bowarrow:ze,coins:Pe,wand:ae,flower:je,skull:j,castle:M,cross:it,testtubediagonal:ye,squirrel:_t,snowflake:oe,shell:De,pickaxe:Oe,heartplus:Ae,heartcrack:ke,fan:ie},lg=T.div`
  padding: 2px;
  width: 100%;
`,ug=T.h1`
  color: ${e=>e.theme.PRIMARY};
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`,dg=T.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
`,fg=T.div`
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
`,pg=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.$compactMode?`8px`:`16px`};
`,mg=T.button`
  background: ${e=>e.disabled?f(e.theme.BORDER,.3):f(e.theme.OFFSET,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>og(e.theme)};
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
`,hg=T(mg)`
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
`,gg=T(mg)`
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
`,_g=T(mg)`
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
`,vg=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: ${e=>e.$compactMode?`14px`:`16px`};
  font-weight: 600;
  min-width: ${e=>e.$compactMode?`44px`:`80px`};
  text-align: center;
`,yg=T.table`
  width: ${e=>e.$compact?`max-content`:`100%`};
  min-width: ${e=>e.$compact?`${eg}px`:`100%`};
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
`,bg=T.thead`
  background-color: ${e=>f(e.theme.BACKGROUND,.5)};
`,xg=T.tr``,Sg=T.th`
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
`,Cg=T.div`
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
`,wg=T.tbody``,Tg=T.tr`
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
`,Eg=T.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,Dg=T(Eg)`
  font-weight: 700;
  font-size: 18px;
  color: ${e=>e.theme.OFFSET};
  min-width: 60px;
`,Og=T(Eg)`
  min-width: 48px;
`,kg=T.button`
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
`,Ag=T.img`
  width: 18px;
  height: 18px;
  pointer-events: none;
`,jg=T.div`
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
`,Mg=T.input`
  background: ${e=>e.$isRollable?f(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.3)`};
  border: 1px solid ${e=>e.$isRollable?f(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?og(e.theme):`none`};
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
`,Ng=T(Eg)`
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
`,Pg=T.input`
  background: ${e=>e.$isRollable?f(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.4)`};
  border: 1px solid ${e=>e.$isRollable?f(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?og(e.theme):`none`};
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
`,Fg=T.select`
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
`,Ig=T.span`
  margin: 0 2px;
  color: ${e=>e.theme.OFFSET};
  font-weight: 500;
`,Lg=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,Rg=T.button`
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
`,zg=T.input`
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
`,Bg=T.span`
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
`,Vg=T.div`
  display: flex;
  flex-wrap: wrap;
  width: 62px;
  gap: 3px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,Hg=T.button`
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
`,Ug=T.button`
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
`,Wg=T.div`
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
`,Gg=T(Eg)`
  width: 24px;
  min-width: 24px;
  max-width: 24px;
  padding: 0;
  position: relative;
`,Kg=T.div`
  position: absolute;
  inset: 0;
  min-height: 40px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0 10px;
`,qg=T.div`
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
`,Jg=T.div`
  flex: 1;
  height: 100%;
  padding: 0 8px;
  margin: 0 -10px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`,Yg=T.div`
  width: 6px;
  flex: 1;
  height: 100%;
  background-repeat: repeat-y;
  background-position: center;
  background-size: 6px 16px;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='16' viewBox='0 0 6 16' preserveAspectRatio='none'%3E%3Cpolyline points='3,0 0,4 6,8 0,12 3,16' fill='none' stroke='${encodeURIComponent(e.theme.BORDER)}' stroke-width='1.2'/%3E%3C/svg%3E")`};
`,Xg=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
`,Zg=T.button`
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
`,Qg=T.p`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  margin: 0 0 12px 0;
  font-size: 13px;
`,$g=T.p`
  color: #ff6b6b;
  margin: 10px 0 0 0;
  font-size: 13px;
`,e_=T.div`
  height: 1px;
  margin: 12px 0;
  background: ${e=>f(e.theme.BORDER,.7)};
`,t_=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.35)};
`,n_=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,r_=T.div`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  font-size: 11px;
`,i_=T.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`,a_=T.button`
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
`,o_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,s_=T.p`
  color: ${e=>f(e.theme.PRIMARY,.78)};
  margin: 0;
  font-size: 12px;
`,c_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 320px;
  overflow-y: auto;
`,l_=T.div`
  background: ${e=>f(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,u_=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,d_=T.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #4b5563;
  background: rgba(0, 0, 0, 0.2);
  accent-color: #ffffff;
  margin: 0;
  pointer-events: none;
`,f_=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
`,p_=T.div`
  color: ${e=>f(e.theme.PRIMARY,.85)};
  font-size: 12px;
  font-style: italic;
  line-height: 1.25;
  white-space: pre-wrap;
`,m_=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`,h_=T.button`
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
`,g_=T.p`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,__=T.div`
  width: 100%;
  min-height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>f(e.theme.BORDER,.8)};
  background: ${e=>f(e.theme.BACKGROUND,.55)};
`,v_=T.div`
  width: ${e=>e.$small?`40px`:`60px`};
  min-width: ${e=>e.$small?`40px`:`60px`};
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>f(e.theme.BORDER,.8)};
  background: ${e=>f(e.theme.BACKGROUND,.55)};
`,y_=(e,t)=>{let n=[{id:crypto.randomUUID(),type:`initiative`,description:`Initiative value used for turn order. Can be edited via Right-Click or rolled with Click.`},{id:crypto.randomUUID(),type:`name`,description:`Name of the unit or character.`}],r=t?[{id:`card-column`,type:`card-column`}]:[];if(!e||e.length===0)return[...n,...r];let i=[...e].sort((e,t)=>e.col-t.col).map(e=>({id:e.id,type:e.type,name:e.styles?.labelName,useIcon:e.styles?.labelMode===`icon`,iconType:e.styles?.labelIcon,description:e.styles?.description,styles:e.styles}));return[...n,...i,...r]};const b_=()=>{let{theme:r}=Pt(),{listLayout:i,attributes:a,isLoading:o}=_m(),s=R(e=>e.roomMetadata),l=R(e=>e.sceneMetadata),u=R(e=>e.items),d=R(e=>e.partyData),f=R(e=>e.playerData),m=R(e=>e.gridDpi),h=R(e=>e.setItems),[g,_]=(0,L.useState)([]),[v,y]=(0,L.useState)([]),[b,x]=(0,L.useState)(null),[S,C]=(0,L.useState)(1),[w,T]=(0,L.useState)(new Set),[E,ee]=(0,L.useState)(null),[te,ne]=(0,L.useState)(null),[ie,ae]=(0,L.useState)(!1),[oe,se]=(0,L.useState)(!1),[ce,le]=(0,L.useState)(!1),[k,ue]=(0,L.useState)({}),[de,fe]=(0,L.useState)({}),[pe,me]=(0,L.useState)({}),[he,ge]=(0,L.useState)(null),[ve,ye]=(0,L.useState)({}),[be,xe]=(0,L.useState)(null),[A,Se]=(0,L.useState)(null),[Ce,we]=(0,L.useState)(!1),[Te,De]=(0,L.useState)(!1),[j,Oe]=(0,L.useState)(!1),[ke,Ae]=(0,L.useState)(()=>window.innerWidth<400),[je,Me]=(0,L.useState)(null),Ne=(0,L.useRef)(null),Pe=(0,L.useRef)({}),Fe=(0,L.useRef)({}),Ie=(0,L.useRef)(null);(0,L.useEffect)(()=>{let e=()=>{Ae(window.innerWidth<400)};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let Le=(0,L.useMemo)(()=>{let e=Array.isArray(f?.selection)?f.selection:[];return new Set(e)},[f?.selection]),M=s,Re=M[D.REVERSE_INITIATIVE]||!1,ze=M[D.POPCORN_INITIATIVE]||!1,Be=M[D.SHOW_CARD_ACCESS]||!1,Ve=M[D.SHOW_NON_PARTY_UNITS]||!1,He=M[D.SHOW_LIST_HP_NUMBERS],Ue=typeof He==`boolean`?He:!0,We=M[D.DICE_RANGE]||``,Ge=M[D.INITIATIVE_MODIFIER_BID]||``,Ke=M[D.INITIATIVE_MODIFIER_EXPR]||`@STAT`,qe=Ke.trim().length>0?Ke:`@STAT`,Ye=M[D.SHOW_OWNER_ONLY_EDIT]||!1,Xe=String(f?.role||``).toUpperCase()===`GM`,Ze=f?.id||``,N=re(D.INITIATIVE_LIST_COMPACT,Ze);(0,L.useEffect)(()=>{let e=M[N],t=M[D.INITIATIVE_LIST_COMPACT];Oe(typeof e==`boolean`?e:typeof t==`boolean`?t:!1)},[M,N]);let P=async()=>{let e=!j;Oe(e);try{await c.room.setMetadata({[N]:e})}catch(t){O.error(`Failed to persist initiative list compact mode`,t),Oe(!e)}},Qe=async({notation:e,actionName:t,tokenName:n,senderId:r,senderColor:i})=>{try{await Ee({notation:e,actionName:t,senderName:n,senderId:r,senderColor:i},M)}catch(t){O.error(`Failed to send dice roll from InitiativeList`,e,t),O.log(e)}},$e=e=>{let t=e;if(typeof t==`string`)try{t=JSON.parse(t)}catch{return[]}return Array.isArray(t)?t.map((e,t)=>{let n=e&&typeof e==`object`?e:{},r=n.inUse,i=typeof r==`boolean`?r:typeof r==`string`?[`true`,`1`,`yes`].includes(r.trim().toLowerCase()):typeof r==`number`?r===1:void 0;return{id:typeof n.id==`string`&&n.id?n.id:`entry-${t}`,name:typeof n.name==`string`?n.name:``,description:typeof n.description==`string`?n.description:``,...i===void 0?{}:{inUse:i}}}):[]};(0,L.useEffect)(()=>{_(u.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>{let t=e.metadata?.[p.INITIATIVE]||0,n=e.metadata[p.UNIT_NAME]||e.name||`Unknown`,r=e.metadata?.[p.BOSS_MODE]===!0,i=e.metadata?.[$h]||0,a=d.find(t=>t.id===e.createdUserId)||(f?.id===e.createdUserId?f:void 0),o=String(a?.role||``).toUpperCase()===`GM`,s=a?.color||(f?.id===e.createdUserId?f?.color:void 0),c=o?void 0:ag(s,1),l={};return Object.keys(e.metadata||{}).forEach(t=>{t.startsWith(`com.battle-system.forge`)&&(l[t]=e.metadata?.[t])}),{id:e.id,initiative:t,name:n,isBoss:r,elevation:i,attributes:l,createdUserId:e.createdUserId,ownerNameOutlineColor:c,isInParty:e.metadata?.[p.IN_PARTY]===!0,isVisible:e.visible!==!1}}))},[u,d,f]);let F=(0,L.useMemo)(()=>ze?[...g].sort((e,t)=>e.name.localeCompare(t.name)):[...g].sort((e,t)=>e.initiative===t.initiative?e.name.localeCompare(t.name):Re?e.initiative-t.initiative:t.initiative-e.initiative),[g,Re,ze]),et=Wh({items:u,units:F,setItems:h,playerData:f}),tt=(0,L.useMemo)(()=>{let e=new Map;return d.forEach(t=>{e.set(t.id,t)}),f&&!e.has(f.id)&&e.set(f.id,f),Array.from(e.values()).sort((e,t)=>e.name.localeCompare(t.name))},[d,f]),nt=(e,t)=>{let n=parseInt(t)||0;_(t=>t.map(t=>t.id===e?{...t,initiative:n}:t))},rt=(e,t)=>{h(u.map(n=>n.id===e?{...n,metadata:{...n.metadata,[p.INITIATIVE]:t}}:n)),c.scene.items.updateItems([e],e=>{e[0].metadata[p.INITIATIVE]=t})},it=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},ot=(e,t,n)=>(typeof t==`number`&&(e=Math.max(t,e)),typeof n==`number`&&(e=Math.min(n,e)),e),st=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(r.length===0)return ot(0,i,a);let o=r.match(/^([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),s=r.match(/^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),c=null;if(o){let e=o[1],n=parseFloat(o[2]);switch(e){case`+`:c=t+n;break;case`-`:c=t-n;break;case`*`:c=t*n;break;case`/`:c=n===0?t:t/n;break}}else if(s){let e=parseFloat(s[1]),t=s[2],n=parseFloat(s[3]);switch(t){case`+`:c=e+n;break;case`-`:c=e-n;break;case`*`:c=e*n;break;case`/`:c=n===0?e:e/n;break}}else{let e=parseFloat(r);Number.isNaN(e)||(c=e)}return ot(c===null||!Number.isFinite(c)?t:Math.trunc(c),i,a)},ct=e=>{let t=0;if(Ge){let n=g.find(t=>t.id===e);if(n){let e=n.attributes?.[`${I}/${Ge}`],r=Number(e),i=Number.isFinite(r)?r:0,a=at(qe.replace(/@STAT/gi,`@${Ge}`).replace(/\bx\b/gi,`@${Ge}`),{bidValueMap:{[Ge]:i},onMissingBid:`useZero`});if(a.valid&&a.notation){let e=Number(a.notation);Number.isFinite(e)&&(t=Math.trunc(e))}}}return t},lt=(e,t=`normal`)=>{let n=it(We),r=Math.floor(Math.random()*n)+1,i=t===`normal`?null:Math.floor(Math.random()*n)+1,a=(i===null?r:t===`advantage`?Math.max(r,i):Math.min(r,i))+ct(e);nt(e,String(a)),rt(e,a)},ut=(e,t)=>{ue(n=>({...n,[e]:t}))},dt=(e,t)=>{let n=st(t,g.find(t=>t.id===e)?.initiative??0);ue(t=>{let{[e]:n,...r}=t;return r}),_(t=>t.map(t=>t.id===e?{...t,initiative:n}:t)),rt(e,n)},ft=e=>`ELE${e.slice(3)}`,pt=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o}},mt=async(t,r)=>{let i=ft(t);try{await c.scene.items.deleteItems([i])}catch{}if(r===0)return;let a=u.find(e=>e.id===t);if(!a||!e(a))return;let o=pt(a,m),s=`${r>0?`🡹`:`🡻`}${Math.abs(r)}`,l=n().id(i).name(`Elevation Badge`).plainText(s).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(36).fontFamily(`Segoe UI`).textAlign(`CENTER`).position({x:o.minX-40,y:o.minY}).metadata({[Zh]:!0,[Qh]:t}).attachedTo(t).visible(a.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build();try{await c.scene.items.addItems([l])}catch(e){O.error(`Failed to add elevation badge`,t,e)}},ht=(e,t)=>{fe(n=>({...n,[e]:t}))},gt=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(!r)return ot(0,i,a);let o=parseFloat(r);return ot(Number.isFinite(o)?Math.trunc(o):t,i,a)},_t=(e,t)=>{let n=gt(t,g.find(t=>t.id===e)?.elevation??0,{min:-999,max:999});fe(t=>{let{[e]:n,...r}=t;return r}),_(t=>t.map(t=>t.id===e?{...t,elevation:n}:t)),h(u.map(t=>t.id===e?{...t,metadata:{...t.metadata,[$h]:n}}:t)),c.scene.items.updateItems([e],e=>{e[0].metadata[$h]=n}),mt(e,n)},vt=(e,t)=>{let n=e.trim();if(!n)return e;let r=/^([+\-*/])\s*-?\d+(?:\.\d+)?$/.test(n),i=/^-?\d+(?:\.\d+)?\s*[+\-*/]\s*-?\d+(?:\.\d+)?$/.test(n),a=/^-?\d+(?:\.\d+)?$/.test(n);if(!r&&!i&&!a)return e;let o=typeof t==`number`?t:parseFloat(String(t)),s=Number.isFinite(o)?o:0;return String(st(n,s))},yt=(e,t,n)=>{let r=`${I}/${t}`,i=u.find(t=>t.id===e)?.metadata?.[r],a=vt(n,i);_(t=>t.map(t=>t.id===e?{...t,attributes:{...t.attributes,[r]:a}}:t)),h(u.map(t=>t.id===e?{...t,metadata:{...t.metadata,[r]:a}}:t)),c.scene.items.updateItems([e],e=>{e[0].metadata[r]=a})},bt=e=>String(e?.attr_bid??e?.bid??``).trim(),xt=e=>String(e?.attr_name??e?.name??``).trim(),St=e=>String(e?.attr_abbr??e?.abbr??``).trim(),Ct=e=>String(e?.attr_type??e?.type??``).trim().toLowerCase(),wt=e=>{let t=e?.attr_func??e?.func??``;return typeof t==`string`?t.trim():``},Tt=e=>e?.attr_meta??e?.meta??{},Et=e=>a.find(t=>bt(t)===e)||null,Dt=e=>wt(Et(e)).length>0,Ot=e=>{let t={};for(let n of a){let r=bt(n);if(!r)continue;let i=`${I}/${r}`,a=e.attributes?.[i];if(a==null||a===``)continue;let o=Number(a);Number.isFinite(o)&&(t[r]=o)}return t},kt=e=>{let t={};for(let n of a){let r=n,i=bt(r);if(!i)continue;let a=`${I}/${i}`,o=e.attributes?.[a];if(o==null||o===``)continue;let s=Number(o);if(!Number.isFinite(s))continue;let c=xt(r);c&&(t[c]=s);let l=St(r);l&&(t[l]=s)}return t},At=(e,t)=>{let n=Array.from(e.matchAll(sg));if(n.length!==1)return null;let r=n[0],i=r[0]||``,a=r[1]||``,o=r[2]||``,s=r[3]||``,c=r.index;if(!i||!a||!o||typeof c!=`number`)return null;let l=Number(a);if(!Number.isFinite(l)||l!==1||s)return null;let u=`2d${o}${t===`advantage`?`kh1`:`kl1`}`;return`${e.slice(0,c)}${u}${e.slice(c+i.length)}`},jt=(e,t)=>{let n=wt(Et(t));if(n.length===0)return null;let r=at(n,{bidValueMap:Ot(e),nameValueMap:kt(e),onMissingBid:`error`});return!r.valid||!r.notation?(O.warn(`Could not resolve notation for initiative list value-column`,{unitId:e.id,bid:t,error:r.error}),null):{notation:r.notation,actionName:xt(Et(t))||t}},Mt=(e,t)=>{let n=Et(t),r=Tt(n)?.derived?.formula,i=typeof r==`string`&&r.trim().length>0?r:wt(n);if(typeof i!=`string`||i.trim().length===0)return`-`;let a=at(i,{bidValueMap:Ot(e),nameValueMap:kt(e),onMissingBid:`error`});if(!a.valid||!a.notation)return O.warn(`Could not resolve derived formula for initiative list derived-column`,{unitId:e.id,bid:t,error:a.error}),`-`;let o=a.notation.trim(),s=Number(o);if(!Number.isFinite(s))return o||`-`;let c=Number(Tt(n)?.derived?.precision),l=Number.isFinite(c)?Math.max(0,Math.min(Math.trunc(c),8)):0,u=Tt(n)?.derived?.displayMode,d=l>0?s.toFixed(l):String(s);return u===`percent`?`${d}%`:d},Nt=async(e,t)=>{let n=jt(e,t);if(!n)return;let r=d.find(t=>t.id===e.createdUserId);await Qe({notation:n.notation,actionName:n.actionName,tokenName:e.name,senderId:e.createdUserId||f?.id||`unknown`,senderColor:r?.color||f?.color||`#ffffff`})},Ft=async(e,t,n)=>{let r=jt(e,t);if(!r)return;let i=n===`normal`?r.notation:At(r.notation,n);if(!i)return;let a=d.find(t=>t.id===e.createdUserId),o=n===`normal`?``:n===`advantage`?` (Advantage)`:` (Disadvantage)`;await Qe({notation:i,actionName:`${r.actionName}${o}`,tokenName:e.name,senderId:e.createdUserId||f?.id||`unknown`,senderColor:a?.color||f?.color||`#ffffff`})},It=async(e,t)=>{let n=t===`normal`?e.notation:At(e.notation,t);if(!n)return;let r=t===`normal`?``:t===`advantage`?` (Advantage)`:` (Disadvantage)`;await Qe({notation:n,actionName:`${e.actionName}${r}`,tokenName:e.tokenName,senderId:e.senderId,senderColor:e.senderColor})};(0,L.useEffect)(()=>()=>{Object.values(Pe.current).forEach(e=>{window.clearTimeout(e)})},[]),(0,L.useEffect)(()=>{if(!be&&!A)return;let e=e=>{e.key===`Escape`&&(xe(null),Se(null))};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[be,A]);let Lt=(e,t)=>`value-column:${e}:${t}`,Rt=(e,t)=>`${e}:${t}`,zt=e=>!!ve[e],Bt=(e,t)=>{ye(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},Vt=e=>{xe(e)},Ht=()=>{xe(null)},Ut=()=>{Se(null)},Wt=e=>{ye(t=>{let{[e]:n,...r}=t;return r})},Gt=(e,t)=>{let n=Pe.current[e];n&&window.clearTimeout(n),Pe.current[e]=window.setTimeout(()=>{Fe.current[e]=!0,Bt(e,t),delete Pe.current[e]},500)},Kt=e=>{let t=Pe.current[e];t&&(window.clearTimeout(t),delete Pe.current[e])},qt=e=>Fe.current[e]?(delete Fe.current[e],!0):!1,Jt=e=>{if(!Ye||Xe)return!0;let t=f?.id;return t?e.createdUserId===t:!1},Yt=e=>Xe?!0:e.isVisible,Xt=e=>Xe||Ve?!1:!e.isInParty;(0,L.useEffect)(()=>{o||y(y_(i,Be))},[i,o,Be]),(0,L.useEffect)(()=>{let e=l[D.CURRENT_TURN],t=l[D.CURRENT_ROUND];e?x(e):F.length>0&&x(F[0].id),t&&C(t)},[l,F]);let Zt=async()=>{if(F.length===0)return;b&&await et.processEffectsForTurnEvent(`end`,b);let e=F.findIndex(e=>e.id===b)+1;if(e>=F.length){let e=S+1;C(e),x(F[0].id),await c.scene.setMetadata({[D.CURRENT_TURN]:F[0].id,[D.CURRENT_ROUND]:e}),await et.processEffectsForTurnEvent(`start`,F[0].id)}else x(F[e].id),await c.scene.setMetadata({[D.CURRENT_TURN]:F[e].id}),await et.processEffectsForTurnEvent(`start`,F[e].id)},Qt=async()=>{if(F.length===0)return;let e=F.findIndex(e=>e.id===b)-1;if(e<0){let e=Math.max(1,S-1);C(e),x(F[F.length-1].id),await c.scene.setMetadata({[D.CURRENT_TURN]:F[F.length-1].id,[D.CURRENT_ROUND]:e})}else x(F[e].id),await c.scene.setMetadata({[D.CURRENT_TURN]:F[e].id})},$t=async e=>{ze&&(w.has(e)||(x(e),await c.scene.setMetadata({[D.CURRENT_TURN]:e}),await et.processEffectsForTurnEvent(`start`,e)))},en=async()=>{b&&(await et.processEffectsForTurnEvent(`end`,b),T(e=>new Set([...e,b])),w.size+1,F.length)},tn=async()=>{let e=S+1;C(e),T(new Set),x(null),await c.scene.setMetadata({[D.CURRENT_TURN]:null,[D.CURRENT_ROUND]:e})},nn=async e=>{De(!0);try{if(e===`clear-list`){let e=u.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await c.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata&&p.ON_LIST in e.metadata&&delete e.metadata[p.ON_LIST]})}),h(u.map(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return e;let t={...e.metadata||{}};return delete t[p.ON_LIST],{...e,metadata:t}})))}if(e===`reset-initiative`){let e=u.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await c.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata[p.INITIATIVE]=0})}),h(u.map(e=>e.metadata?.[p.ON_LIST]===!0?{...e,metadata:{...e.metadata||{},[p.INITIATIVE]:0}}:e)),_(e=>e.map(e=>u.some(t=>t.id===e.id&&t.metadata?.[p.ON_LIST]===!0)?{...e,initiative:0}:e)),ue({}))}let t=e===`clear-list`?null:e===`reset-initiative`?[...F].sort((e,t)=>e.name.localeCompare(t.name))[0]?.id??null:F[0]?.id??null;C(1),x(t),T(new Set),await c.scene.setMetadata({[D.CURRENT_TURN]:t,[D.CURRENT_ROUND]:1}),we(!1)}catch(t){O.error(`Failed to reset encounter state`,{mode:e,error:t})}finally{De(!1)}},rn=async e=>{let t=u.find(t=>t.id===e);if(t)try{await xh.CenterViewportOnImage(t)}catch(t){O.error(`Failed to center viewport on unit`,e,t)}},an=async(e,n)=>{try{let r=await c.viewport.getHeight(),i=r>800?700:r-100;await c.popover.open({id:t.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(n)}`,height:i,width:350,anchorElementId:e,hidePaper:!0,disableClickAway:!0})}catch(e){O.error(`Failed to open cards popover`,e)}},on=(e,t)=>{e.preventDefault(),e.stopPropagation(),ne(null),ee(t)},sn=async e=>{if(E){if(!u.find(e=>e.id===E)){ne(`Token not found in scene cache.`);return}ae(!0),ne(null);try{await c.scene.items.updateItems([E],t=>{let n=t[0];n.createdUserId=e}),h(u.map(t=>t.id===E?{...t,createdUserId:e}:t)),ee(null)}catch(t){O.error(`Failed to reassign token owner`,E,e,t),ne(`Unable to assign token owner. Ensure you have permission to edit this token.`)}finally{ae(!1)}}},cn=async()=>{if(!E)return;let e=u.find(e=>e.id===E);if(!e){ne(`Token not found in scene cache.`);return}let t=e.metadata?.[p.BOSS_MODE]!==!0;if(t&&u.filter(e=>e.id!==E&&e.metadata?.[p.ON_LIST]===!0&&e.metadata?.[p.BOSS_MODE]===!0).length>=2){ne(`A maximum of 2 bosses can be enabled at once.`);return}se(!0),ne(null);try{await c.scene.items.updateItems([E],e=>{let n={...e[0].metadata||{}};n[p.BOSS_MODE]=t,e[0].metadata=n}),h(u.map(e=>e.id===E?{...e,metadata:{...e.metadata||{},[p.BOSS_MODE]:t}}:e))}catch(e){O.error(`Failed to toggle boss mode`,E,e),ne(`Unable to update boss mode for this token.`)}finally{se(!1)}},ln=async()=>{if(E){if(!u.find(e=>e.id===E)){ne(`Token not found in scene cache.`);return}le(!0),ne(null);try{await c.scene.items.updateItems([E],e=>{let t={...e[0].metadata||{}};p.ON_LIST in t&&delete t[p.ON_LIST],e[0].metadata=t}),h(u.map(e=>{if(e.id!==E)return e;let t={...e.metadata||{}};return delete t[p.ON_LIST],{...e,metadata:t}})),ee(null)}catch(e){O.error(`Failed to remove token from initiative list`,E,e),ne(`Unable to remove token from initiative list.`)}finally{le(!1)}}},un=(0,L.useMemo)(()=>E&&F.find(e=>e.id===E)||null,[E,F]),dn=(0,L.useMemo)(()=>E&&u.find(e=>e.id===E)||null,[E,u]),fn=dn?.metadata?.[p.BOSS_MODE]===!0,B=(0,L.useMemo)(()=>he&&F.find(e=>e.id===he.unitId)||null,[he,F]),pn=(0,L.useMemo)(()=>he&&a.find(e=>e.attr_bid===he.bid)||null,[a,he]),mn=(0,L.useMemo)(()=>{if(!he||!B)return[];let e=B.attributes[`${I}/${he.bid}`];return $e(e)},[he,B]),hn=(0,L.useMemo)(()=>mn.some(e=>typeof e.inUse==`boolean`),[mn]),gn=(0,L.useMemo)(()=>be&&F.find(e=>e.id===be.unitId)||null,[be,F]),_n=(0,L.useMemo)(()=>j?v.filter(e=>e.type===`initiative`||e.type===`name`?!0:e.type===`card-column`&&Be):v,[j,v,Be]),vn=(0,L.useMemo)(()=>{let e=a.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),t=a.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`}),n=e?.attr_bid,r=t?.attr_bid,i=M[D.HP_CURRENT_BID],o=M[D.HP_MAX_BID],s=new Set(a.map(e=>e.attr_bid));return{currentHpBid:i&&s.has(i)?i:n,maxHpBid:o&&s.has(o)?o:r}},[a,M]),yn=(0,L.useMemo)(()=>F.filter(e=>Yt(e)),[F,Xe]),bn=(0,L.useMemo)(()=>{if(!B)return{};let e={};for(let t of a){let n=`${I}/${t.attr_bid}`,r=B.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(e[t.attr_bid]=i)}return e},[B,a]),xn=(0,L.useMemo)(()=>{if(!B)return{};let e={};for(let t of a){let n=`${I}/${t.attr_bid}`,r=B.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(t.attr_name&&(e[t.attr_name]=i),t.attr_abbr&&(e[t.attr_abbr]=i))}return e},[B,a]),Sn=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=(e[1]||``).trim();if(!n)continue;let r=at(n,{bidValueMap:bn,nameValueMap:xn,onMissingBid:`error`});!r.valid||!r.notation||t.push(r.notation)}return t};(0,L.useEffect)(()=>{Ie.current&&_n.length>0&&(O.debug(`Adjusting window width based on table size`),setTimeout(()=>{if(Ie.current){let e=Ie.current.offsetWidth+4,t=Math.min(e,800);c.action.setWidth(t),O.log(`Adjusted window width to `+t)}},100))},[j,_n.length,F.length]);let Cn=e=>{if(!e)return null;let t=cg[e.toLowerCase()];return t?(0,z.jsx)(t,{}):null},wn=(e,t)=>{let n=window.innerWidth-t-8,r=Math.min(Math.max(e-t/2,8),Math.max(8,n));return{left:r,arrowX:e-r}},Tn=e=>{let t=e.currentTarget.getBoundingClientRect(),n=`clientX`in e?e.clientX:t.left+t.width/2,r=t.top>72?`top`:`bottom`;return{anchorX:n,y:r===`top`?t.top:t.bottom,placement:r}},En=(e,t)=>{let n=Tn(e),r=Math.min(320,Math.max(140,t.length*7+28)),i=wn(n.anchorX,r);Me({text:t,...n,...i})},Dn=()=>{Me(null)};(0,L.useLayoutEffect)(()=>{if(!je||!Ne.current)return;let e=Ne.current.getBoundingClientRect().width,t=wn(je.anchorX,e);(Math.abs(t.left-je.left)>.5||Math.abs(t.arrowX-je.arrowX)>.5)&&Me(e=>e&&{...e,...t})},[je]);let On=e=>e.type===`initiative`?(0,z.jsx)(Je,{}):e.type===`roller`?null:e.type===`name`?`Name`:e.type===`card-column`?(0,z.jsx)(Qd,{}):e.type===`divider-column`?null:e.useIcon?Cn(e.iconType||`star`):e.name||e.type,V=e=>e.type===`divider-column`?{fixedWidth:ig}:e.type===`initiative`?{minWidth:ng}:e.type===`name`?{minWidth:rg}:{minWidth:tg},kn=(e,t)=>{let n=Jt(t),i=Xt(t),o=!Xe&&!Ue;if(i&&e.type!==`initiative`&&e.type!==`name`&&e.type!==`divider-column`)return(0,z.jsx)(Eg,{theme:r,children:(0,z.jsx)(__,{theme:r})});switch(e.type){case`initiative`:if(ze)return(0,z.jsx)(Dg,{theme:r,children:(0,z.jsx)(jg,{onClick:e=>{e.stopPropagation(),n&&(w.has(t.id)||(t.id===b?en():$t(t.id)))},children:w.has(t.id)?(0,z.jsx)(Xd,{color:r.OFFSET}):t.id===b?(0,z.jsx)(Yd,{color:r.PRIMARY}):(0,z.jsx)(Zd,{color:r.BORDER})})});let i=`initiative:${t.id}`,s=zt(i);return(0,z.jsx)(Dg,{theme:r,children:(0,z.jsx)(Mg,{theme:r,$isRollable:n&&!s,type:`text`,inputMode:`decimal`,value:k[t.id]??String(t.initiative),readOnly:!n||!s,onChange:!n||!s?void 0:e=>ut(t.id,e.target.value),onBlur:!n||!s?void 0:e=>{dt(t.id,e.target.value),Wt(i)},onClick:()=>{n&&(s||qt(i)||lt(t.id))},onContextMenu:e=>{n&&(e.preventDefault(),Vt({kind:`initiative`,fieldKey:i,unitId:t.id,input:e.currentTarget}))},onTouchStart:e=>{n&&(s||Gt(i,e.currentTarget))},onTouchEnd:()=>{Kt(i)},onTouchCancel:()=>{Kt(i)},onKeyDown:e=>{if(n){if(!s&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),lt(t.id);return}s&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})});case`name`:let l=Le.has(t.id);return(0,z.jsx)(Ng,{theme:r,title:`Right-click to assign owner`,$outlineColor:t.ownerNameOutlineColor,$isSelected:l,onDoubleClick:()=>rn(t.id),onContextMenu:n?e=>on(e,t.id):void 0,children:t.isBoss?`💀 ${t.name}`:t.name});case`roller`:return(0,z.jsx)(Og,{theme:r,children:(0,z.jsx)(kg,{theme:r,disabled:!n,onClick:e=>{e.stopPropagation(),n&&lt(t.id)},title:`Roll initiative (1-${it(We)})`,children:(0,z.jsx)(Ag,{src:`/dice.svg`,alt:`Roll`})})});case`card-column`:return(0,z.jsx)(Eg,{theme:r,children:(0,z.jsx)(Rg,{id:`card-access-${t.id}`,theme:r,disabled:!n,onClick:e=>{e.stopPropagation(),n&&an(e.currentTarget.id,t.id)},title:`Open card for ${t.name}`,children:(0,z.jsx)(Yd,{})})});case`value-column`:return(0,z.jsx)(Eg,{theme:r,children:(0,z.jsx)(Lg,{children:e.styles?.bidList?.map((i,a)=>{let s=Dt(i),c=Lt(t.id,i),l=Rt(t.id,i),u=s&&zt(c),d=t.attributes[`${I}/${i}`],f=pe[l]??(d==null||d===``?`0`:String(d)),p=i===vn.currentHpBid||i===vn.maxHpBid,m=!!Ze&&t.createdUserId===Ze,h=o&&p&&!m;return(0,z.jsxs)(L.Fragment,{children:[a>0&&(0,z.jsx)(Ig,{theme:r,children:e.styles?.dividers?.[a-1]||`/`}),h?(0,z.jsx)(v_,{theme:r,$small:e.styles?.bidList&&e.styles.bidList.length>2}):(0,z.jsx)(Pg,{theme:r,$isRollable:n&&s,value:f,$small:e.styles?.bidList&&e.styles.bidList.length>2,readOnly:!n||s&&!u,onChange:!n||s&&!u?void 0:e=>{let t=e.target.value;me(e=>({...e,[l]:t}))},onBlur:!n||s&&!u?void 0:e=>{yt(t.id,i,e.target.value),me(e=>{let{[l]:t,...n}=e;return n}),s&&Wt(c)},onClick:s?()=>{n&&(u||qt(c)||Nt(t,i))}:void 0,onContextMenu:s?e=>{n&&(e.preventDefault(),Vt({kind:`attribute`,fieldKey:c,unitId:t.id,bid:i,input:e.currentTarget}))}:void 0,onTouchStart:s?e=>{n&&(u||Gt(c,e.currentTarget))}:void 0,onTouchEnd:s?()=>{Kt(c)}:void 0,onTouchCancel:s?()=>{Kt(c)}:void 0,onKeyDown:e=>{if(n){if(s&&!u&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),Nt(t,i);return}(u||!s)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})]},i)})})});case`list-column`:return(0,z.jsx)(Eg,{theme:r,children:(0,z.jsx)(Rg,{theme:r,disabled:!n,onClick:r=>{if(r.stopPropagation(),!n)return;let i=e.styles?.bidList?.[0];i&&ge({unitId:t.id,bid:i})},title:`Open list reference`,children:(0,z.jsx)(Jd,{})})});case`checkbox-column`:return(0,z.jsx)(Eg,{theme:r,children:(0,z.jsx)(Lg,{children:e.styles?.bidList?.map(i=>{let a=!!t.attributes[`${I}/${i}`],o=e.styles?.inputType===`slider`,s=e=>{_(n=>n.map(n=>n.id===t.id?{...n,attributes:{...n.attributes,[`${I}/${i}`]:e}}:n)),h(u.map(n=>n.id===t.id?{...n,metadata:{...n.metadata,[`${I}/${i}`]:e}}:n)),c.scene.items.updateItems([t.id],t=>{t[0].metadata[`${I}/${i}`]=e})};return o?(0,z.jsx)(Ug,{type:`button`,theme:r,$active:a,disabled:!n,onClick:n?()=>{s(!a)}:void 0,children:(0,z.jsx)(Wg,{theme:r,$active:a})},i):(0,z.jsx)(zg,{theme:r,type:`checkbox`,checked:a,disabled:!n,onChange:n?e=>{s(e.target.checked)}:void 0},i)})})});case`derived-column`:{let n=e.styles?.bidList||[];return n.length===0?(0,z.jsx)(Eg,{theme:r,children:`-`}):(0,z.jsx)(Eg,{theme:r,children:(0,z.jsx)(Lg,{children:n.map((n,i)=>(0,z.jsxs)(L.Fragment,{children:[i>0&&(0,z.jsx)(Ig,{theme:r,children:e.styles?.dividers?.[i-1]||`/`}),(0,z.jsx)(Bg,{theme:r,title:`Derived value (formula)`,children:Mt(t,n)})]},n))})})}case`enum-column`:{let i=e.styles?.bidList?.[0];if(!i)return(0,z.jsx)(Eg,{theme:r,children:`-`});let a=Tt(Et(i)),o=Array.isArray(a.enum?.options)?a.enum.options.map(e=>String(e||``).trim()).filter(e=>e.length>0):[],s=`${I}/${i}`,l=t.attributes[s],d=typeof l==`string`?l.trim():``,f=o.includes(d)?d:o[0]||``,p=e=>{_(n=>n.map(n=>n.id===t.id?{...n,attributes:{...n.attributes,[s]:e}}:n)),h(u.map(n=>n.id===t.id?{...n,metadata:{...n.metadata,[s]:e}}:n)),c.scene.items.updateItems([t.id],t=>{t[0].metadata[s]=e})};return(0,z.jsx)(Eg,{theme:r,children:(0,z.jsx)(Lg,{children:(0,z.jsx)(Fg,{theme:r,disabled:!n,value:f,onClick:e=>e.stopPropagation(),onChange:n?e=>{p(e.target.value)}:void 0,children:o.length===0?(0,z.jsx)(`option`,{value:``,children:`No options`}):o.map(e=>(0,z.jsx)(`option`,{value:e,children:e},e))})})})}case`resource-column`:{let i=e.styles?.bidList?.[0];if(!i)return(0,z.jsx)(Eg,{theme:r,children:`-`});let o=t.attributes[`${I}/${i}`],s=a.find(e=>bt(e)===i&&Ct(e)===`resource`),l=o&&typeof o==`object`&&!Array.isArray(o)?o:null,d=l?Number(l.current??0):0,f=l?Number(l.max??0):0,p=(e,n)=>{let r=`${I}/${i}`,a={current:e,max:n};_(e=>e.map(e=>e.id===t.id?{...e,attributes:{...e.attributes,[r]:a}}:e)),h(u.map(e=>e.id===t.id?{...e,metadata:{...e.metadata,[r]:a}}:e)),c.scene.items.updateItems([t.id],e=>{e[0].metadata[r]=a})};if(Tt(s)?.resource?.showPips){let e=Number(Tt(s)?.resource?.pipCap),t=(Number.isFinite(e)&&e>0?Math.round(e):void 0)??f;if(t<=0)return(0,z.jsx)(Eg,{theme:r,children:`-`});let i=Math.max(1,Math.min(t,15)),a=Math.max(0,Math.min(d,i));return(0,z.jsx)(Eg,{theme:r,children:(0,z.jsx)(Vg,{children:Array.from({length:i}).map((e,t)=>(0,z.jsx)(Hg,{theme:r,$filled:t<a,disabled:!n,onClick:n?()=>{p(t+1===a?t:t+1,f)}:void 0},t))})})}return(0,z.jsx)(Eg,{theme:r,children:(0,z.jsxs)(Lg,{children:[(0,z.jsx)(Pg,{theme:r,$isRollable:!1,value:String(d),$small:!1,readOnly:!n,onChange:n?e=>{let t=Number(e.target.value);isNaN(t)||p(t,f)}:void 0}),(0,z.jsx)(Ig,{theme:r,children:`/`}),(0,z.jsx)(Pg,{theme:r,$isRollable:!1,value:String(f),$small:!1,readOnly:!n,onChange:n?e=>{let t=Number(e.target.value);isNaN(t)||p(d,t)}:void 0})]})})}case`special-column`:let d=Cn(e.iconType);if(e.styles?.specialType===`elevation`){let e=de[t.id];return(0,z.jsx)(Yh,{theme:r,unit:t,canInteract:n,elevationDraftValue:e,onElevationDraftChange:ht,onCommitElevationChange:_t})}else{let e=et.getEffectsForUnit(t.id).length;return(0,z.jsx)(Xh,{theme:r,canInteract:n,icon:d||(0,z.jsx)(_e,{}),activeEffectsCount:e,onOpen:()=>et.handleOpenEffectsModal(t.id)})}case`divider-column`:return(0,z.jsx)(Gg,{theme:r,children:(0,z.jsx)(Kg,{children:e.styles?.styleDesign===`zigzag`?(0,z.jsx)(Jg,{children:(0,z.jsx)(Yg,{theme:r})}):(0,z.jsx)(qg,{theme:r,$style:e.styles?.styleDesign})})});default:return(0,z.jsx)(Eg,{theme:r,children:`-`})}};if(o)return(0,z.jsx)(lg,{children:(0,z.jsx)(ug,{theme:r,children:`Loading...`})});let H=j||ke,An=j?`R: ${S}`:`Round: ${S}`;return(0,z.jsxs)(lg,{children:[(0,z.jsx)(dg,{children:(0,z.jsxs)(yg,{ref:Ie,theme:r,$compact:j,children:[(0,z.jsx)(bg,{theme:r,children:(0,z.jsx)(xg,{children:_n.map(e=>{let t=e.description??`This has no description.`,n=V(e);return(0,z.jsx)(Sg,{theme:r,$minWidth:n.minWidth,$fixedWidth:n.fixedWidth,onMouseEnter:e=>En(e,t),onMouseMove:e=>En(e,t),onMouseLeave:Dn,onFocus:e=>En(e,t),onBlur:Dn,children:On(e)},e.id)})})}),(0,z.jsx)(wg,{children:yn.map(e=>(0,z.jsx)(Tg,{$isCurrentTurn:e.id===b,theme:r,children:_n.map(t=>(0,z.jsx)(L.Fragment,{children:kn(t,e)},t.id))},e.id))})]})}),(0,z.jsxs)(fg,{theme:r,$compactMode:j,children:[(0,z.jsxs)(pg,{$compactMode:j,children:[j?(0,z.jsxs)(z.Fragment,{children:[Xe&&(0,z.jsx)(mg,{theme:r,$compact:!0,onClick:Qt,children:(0,z.jsx)(Kd,{})}),Xe&&(0,z.jsx)(mg,{theme:r,$compact:!0,onClick:Zt,children:(0,z.jsx)(qd,{})})]}):ze?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(mg,{theme:r,onClick:en,disabled:!b||w.has(b),children:`End Turn`}),(0,z.jsx)(vg,{theme:r,$compactMode:j,children:An}),(0,z.jsx)(mg,{theme:r,$compact:H,onClick:tn,disabled:w.size<F.length,children:H?(0,z.jsx)(qd,{}):`Next`})]}):(0,z.jsxs)(z.Fragment,{children:[Xe&&(0,z.jsx)(mg,{theme:r,$compact:!0,onClick:Qt,children:(0,z.jsx)(Kd,{})}),(0,z.jsx)(vg,{theme:r,$compactMode:j,children:An}),Xe&&(0,z.jsx)(mg,{theme:r,$compact:!0,onClick:Zt,children:(0,z.jsx)(qd,{})})]}),j&&(0,z.jsx)(gg,{theme:r,onClick:()=>{P()},title:`Switch to Fullsize list`,children:(0,z.jsx)($d,{})})]}),!j&&(0,z.jsx)(_g,{theme:r,$hasReset:Xe,onClick:()=>{P()},title:`Switch to Compact list`,children:(0,z.jsx)(ef,{})}),Xe&&!j&&(0,z.jsx)(hg,{theme:r,onClick:()=>we(!0),disabled:Te,title:`Reset round/turn state`,children:(0,z.jsx)(tf,{})})]}),je&&(0,z.jsx)(Cg,{ref:Ne,theme:r,$left:je.left,$y:je.y,$placement:je.placement,$arrowX:je.arrowX,role:`tooltip`,children:je.text}),(0,z.jsxs)(gm,{isOpen:!!E,title:un?`Unit: ${un.name}`:`Unit`,onClose:()=>{ie||oe||ce||(ee(null),ne(null))},closeOnOverlayClick:!ie&&!oe&&!ce,maxWidth:`520px`,children:[(0,z.jsx)(Qg,{theme:r,children:`Select a player to become the owner.`}),(0,z.jsxs)(Xg,{children:[tt.map(e=>(0,z.jsxs)(Zg,{theme:r,$isCurrent:dn?.createdUserId===e.id,onClick:()=>sn(e.id),disabled:ie||oe||ce,children:[e.name,dn?.createdUserId===e.id?` (current)`:``]},e.id)),(0,z.jsx)(Zg,{theme:r,onClick:()=>{ln()},disabled:ie||oe||ce,children:ce?`Removing...`:`Remove Unit from List`})]}),(0,z.jsx)(e_,{theme:r}),(0,z.jsxs)(t_,{theme:r,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(n_,{theme:r,children:`Boss Mode`}),(0,z.jsx)(r_,{theme:r,children:`Shows a large encounter HP bar in scene (max 2 bosses).`})]}),(0,z.jsx)(i_,{children:(0,z.jsx)(a_,{type:`button`,theme:r,$active:fn,disabled:ie||oe||ce,"aria-label":`Toggle boss mode`,"aria-pressed":fn,onClick:()=>{cn()}})})]}),te&&(0,z.jsx)($g,{theme:r,children:te})]}),(0,z.jsxs)(gm,{isOpen:!!be,title:be?.kind===`initiative`?`Initiative: ${gn?.name||`Unit`}`:Et(be?.bid||``)?.attr_name||`Roll Options`,onClose:Ht,maxWidth:`460px`,children:[(0,z.jsx)(Qg,{theme:r,children:`Choose an action for this rollable field.`}),(0,z.jsxs)(Xg,{children:[(0,z.jsx)(Zg,{theme:r,onClick:()=>{be&&(Ht(),Bt(be.fieldKey,be.input))},children:`Edit value`}),(()=>{if(!be||!gn)return null;if(be.kind===`initiative`)return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Zg,{theme:r,onClick:()=>{Ht(),lt(be.unitId,`advantage`)},children:`Roll with Advantage`}),(0,z.jsx)(Zg,{theme:r,onClick:()=>{Ht(),lt(be.unitId,`disadvantage`)},children:`Roll with Disadvantage`})]});let e=be.bid||``,t=jt(gn,e);if(!t)return null;let n=At(t.notation,`advantage`),i=At(t.notation,`disadvantage`);return!n||!i?null:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Zg,{theme:r,onClick:()=>{Ht(),Ft(gn,e,`advantage`)},children:`Roll with Advantage`}),(0,z.jsx)(Zg,{theme:r,onClick:()=>{Ht(),Ft(gn,e,`disadvantage`)},children:`Roll with Disadvantage`})]})})()]})]}),(0,z.jsx)(Gh,{manager:et}),(0,z.jsxs)(gm,{isOpen:Ce,title:`Reset Encounter`,onClose:()=>{Te||we(!1)},closeOnOverlayClick:!Te,maxWidth:`460px`,children:[(0,z.jsx)(Qg,{theme:r,children:`Choose how you want to reset initiative state.`}),(0,z.jsxs)(Xg,{children:[(0,z.jsx)(Zg,{theme:r,onClick:()=>{nn(`round`)},disabled:Te,children:Te?`Resetting...`:`Reset Round`}),(0,z.jsx)(Zg,{theme:r,onClick:()=>{nn(`reset-initiative`)},disabled:Te,children:Te?`Resetting...`:`Reset Round & Initiative`}),(0,z.jsx)(Zg,{theme:r,onClick:()=>{nn(`clear-list`)},disabled:Te,children:Te?`Resetting...`:`Reset Round & Clear List`})]})]}),(0,z.jsx)(gm,{isOpen:!!he,title:B?`${pn?.attr_name||`List`} for ${B.name}`:`List Reference`,onClose:()=>{ge(null)},maxWidth:`620px`,children:(0,z.jsxs)(o_,{children:[(0,z.jsx)(s_,{theme:r}),mn.length===0?(0,z.jsx)(g_,{theme:r,children:`No entries.`}):(0,z.jsx)(c_,{children:mn.map(e=>(0,z.jsxs)(l_,{theme:r,children:[(0,z.jsxs)(u_,{children:[hn?(0,z.jsx)(d_,{type:`checkbox`,checked:!!e.inUse,readOnly:!0,tabIndex:-1}):null,(0,z.jsx)(f_,{theme:r,children:e.name||`(Unnamed)`})]}),e.description?(0,z.jsx)(p_,{theme:r,children:e.description}):null,(()=>{let t=Sn(e.description||``);return t.length===0?null:(0,z.jsx)(m_,{children:t.map((t,n)=>(0,z.jsx)(h_,{type:`button`,theme:r,onClick:()=>{let n=B?.createdUserId?d.find(e=>e.id===B.createdUserId):null;Qe({notation:t,actionName:e.name||pn?.attr_name||`List Roll`,tokenName:B?.name||`Unknown`,senderId:B?.createdUserId||f?.id||`unknown`,senderColor:n?.color||f?.color||`#ffffff`})},onContextMenu:n=>{n.preventDefault();let r=B?.createdUserId?d.find(e=>e.id===B.createdUserId):null;Se({notation:t,actionName:e.name||pn?.attr_name||`List Roll`,tokenName:B?.name||`Unknown`,senderId:B?.createdUserId||f?.id||`unknown`,senderColor:r?.color||f?.color||`#ffffff`})},title:t,children:t},`${e.id}-inline-notation-${n}`))})})()]},e.id))})]})}),(0,z.jsxs)(gm,{isOpen:!!A,title:A?.actionName||`Roll Options`,onClose:Ut,maxWidth:`460px`,zIndexBase:12e3,children:[(0,z.jsx)(Qg,{theme:r,children:`Choose a roll mode for this notation.`}),(0,z.jsx)(Xg,{children:(()=>{if(!A)return null;let e=At(A.notation,`advantage`),t=At(A.notation,`disadvantage`);return!e||!t?null:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Zg,{theme:r,onClick:()=>{A&&(Ut(),It(A,`advantage`))},children:`Roll with Advantage`}),(0,z.jsx)(Zg,{theme:r,onClick:()=>{A&&(Ut(),It(A,`disadvantage`))},children:`Roll with Disadvantage`})]})})()})]})]})},x_=`${t.EXTENSIONID}-partyhud`,S_=async()=>{await c.modal.open({id:x_,url:`/pages/forgeparty.html`,fullScreen:!0,hideBackdrop:!0,hidePaper:!0,disablePointerEvents:!0})},C_=async()=>{await c.modal.close(x_)};var w_=`forge:party_save`,T_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,E_=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>f(e.theme.BACKGROUND,.35)};
`,D_=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`,O_=T(D_)`
  justify-content: center;
`,k_=T.span`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: ${e=>f(e.theme.PRIMARY,.9)};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`,A_=T.button`
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
`,j_=T.select`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px;
  min-width: 160px;
`,M_=T.p`
  margin: 0;
  font-size: 12px;
  color: ${e=>f(e.theme.PRIMARY,.8)};
`,N_=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${e=>e.$disabled?.55:1};
`,P_=T.span`
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
`,F_=T.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>f(e.theme.BACKGROUND,.35)};
`,I_=T.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
`,L_=T.img`
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
`,R_=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,z_=T.span`
  color: ${e=>e.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,B_=T.input`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
`,V_=T.p`
  color: ${e=>e.theme.PRIMARY};
  margin: 0;
`,H_=T.span`
  display: block;
  font-size: 10px;
  color: ${e=>f(e.theme.PRIMARY,.55)};
  text-align: center;
  margin-top: 4px;
`,U_=e=>{switch(e){case`bottom`:return`left`;case`left`:return`top`;case`top`:return`right`;case`right`:default:return`bottom`}},W_=e=>e===`bottom`||e===`left`||e===`top`||e===`right`;const G_=()=>{let t=(0,L.useRef)(!1),[n,r]=(0,L.useState)(null),{theme:i}=Pt(),{attributes:a}=_m(),o=R(e=>e.items);R(e=>e.sceneMetadata);let s=R(e=>e.roomMetadata),l=R(e=>e.playerData),u=s,d=String(l?.role||``).toUpperCase()===`GM`,f=l?.id,m=re(D.PARTY_HUD_OPEN,f),h=re(D.PARTY_HUD_ORIENTATION,f),g=(u[m]??u[D.PARTY_HUD_OPEN])===!0,_=u[h]??u[D.PARTY_HUD_ORIENTATION],v=W_(_)?_:`bottom`,y=u[D.PARTY_HUD_ATTR_ONE]||``,b=u[D.PARTY_HUD_ATTR_TWO]||``,x=u[D.PARTY_HUD_SHOW_HP_BARS]===!0,S=u[D.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!x,C=o.filter(e=>e.metadata[p.IN_PARTY]===!0);(0,L.useEffect)(()=>{try{let e=localStorage.getItem(w_);e&&r(JSON.parse(e).savedAt??null)}catch{}},[]);let w=()=>{let e={savedAt:new Date().toISOString(),items:C};localStorage.setItem(w_,JSON.stringify(e)),r(e.savedAt)},T=async()=>{let e=localStorage.getItem(w_);if(e)try{let t=JSON.parse(e);if(!t.items.length)return;let n=new Set(t.items.map(e=>e.id)),r=o.filter(e=>n.has(e.id)).map(e=>e.id);r.length>0&&await c.scene.items.deleteItems(r);let[i,a]=await Promise.all([c.viewport.getWidth(),c.viewport.getHeight()]),s={x:i*.75,y:a*.6},l=await c.viewport.inverseTransformPoint(s),u={x:s.x-75,y:s.y-75},d=await c.viewport.inverseTransformPoint(u),f=d.x-l.x,p=d.y-l.y,m=t.items.map((e,t)=>({...e,position:{x:l.x+f*t,y:l.y+p*t}}));await c.scene.items.addItems(m)}catch{}},E=(0,L.useMemo)(()=>a.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[a]),ee=async(e,t)=>{await c.room.setMetadata({[e]:t})},te=async e=>{await c.room.setMetadata(e)},ne=async()=>{let e=!g;if(await ee(m,e),!e){await C_(),t.current=!1;return}await S_(),t.current=!0},ie=async()=>{await ee(h,U_(v))},ae=async(e,t)=>{let n=t.trim();await c.scene.items.updateItems([e],e=>{let t={...e[0].metadata||{}};n?t[p.PORTRAIT_URL]=n:delete t[p.PORTRAIT_URL],e[0].metadata=t})};return(0,z.jsx)(Gd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,z.jsxs)(am,{theme:i,children:[(0,z.jsx)(om,{theme:i,children:`Party`}),(0,z.jsxs)(E_,{theme:i,children:[(0,z.jsxs)(D_,{children:[(0,z.jsxs)(A_,{theme:i,onClick:()=>void ie(),children:[`Display: `,v.toUpperCase()]}),(0,z.jsx)(A_,{theme:i,onClick:()=>void ne(),children:g?`Close Party HUD`:`Open Party HUD`})]}),d&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(O_,{children:[(0,z.jsx)(k_,{theme:i,children:`Show in HUD:`}),(0,z.jsxs)(N_,{$disabled:!d,children:[(0,z.jsx)(P_,{theme:i,children:`Show HP Bars`}),(0,z.jsx)(X,{label:`Party HUD Show HP Bars`,isOn:x,onChange:e=>{if(d){if(e){te({[D.PARTY_HUD_SHOW_HP_BARS]:!0,[D.PARTY_HUD_SHOW_HP_NUMBERS]:!1});return}ee(D.PARTY_HUD_SHOW_HP_BARS,!1)}}})]}),(0,z.jsxs)(N_,{$disabled:!d,children:[(0,z.jsx)(P_,{theme:i,children:`Show HP Numbers`}),(0,z.jsx)(X,{label:`Party HUD Show HP Numbers`,isOn:S,onChange:e=>{if(d){if(e){te({[D.PARTY_HUD_SHOW_HP_NUMBERS]:!0,[D.PARTY_HUD_SHOW_HP_BARS]:!1});return}ee(D.PARTY_HUD_SHOW_HP_NUMBERS,!1)}}})]}),(0,z.jsxs)(j_,{theme:i,disabled:!d,value:y,onChange:e=>{let t=e.target.value;ee(D.PARTY_HUD_ATTR_ONE,t),t&&t===b&&ee(D.PARTY_HUD_ATTR_TWO,``)},children:[(0,z.jsx)(`option`,{value:``,children:`Extra Slot 1 (None)`}),E.map(e=>(0,z.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,z.jsxs)(j_,{theme:i,disabled:!d,value:b,onChange:e=>{let t=e.target.value;ee(D.PARTY_HUD_ATTR_TWO,t),t&&t===y&&ee(D.PARTY_HUD_ATTR_ONE,``)},children:[(0,z.jsx)(`option`,{value:``,children:`Extra Slot 2 (None)`}),E.map(e=>(0,z.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]})]}),(0,z.jsx)(M_,{theme:i,children:(0,z.jsxs)(z.Fragment,{children:[`Configure Party HUD and portraits.`,(0,z.jsx)(`br`,{}),`LIST attributes are excluded.`]})})]})]}),d&&(0,z.jsxs)(E_,{theme:i,children:[(0,z.jsxs)(O_,{children:[(0,z.jsx)(A_,{theme:i,onClick:w,disabled:C.length===0,children:`Save Party`}),(0,z.jsx)(A_,{theme:i,onClick:()=>void T(),disabled:n===null,children:`Load Party`})]}),(0,z.jsx)(H_,{theme:i,children:n?`Last saved: ${new Date(n).toLocaleString()}`:`No save available.`})]}),C.length===0?(0,z.jsx)(V_,{theme:i,children:`No one is in the Party.  Add a unit using the ContextMenu on the token.`}):(0,z.jsx)(T_,{theme:i,children:C.map(t=>{let n=t.metadata?.[p.PORTRAIT_URL]||``,r=e(t)?t.image.url:void 0,a=t.metadata[p.UNIT_NAME]||t.name||`Unknown`,o=t.createdUserId===l?.id,s=d||o,c=r||`/logo.png`,u=!!n;return(0,z.jsxs)(F_,{theme:i,children:[(0,z.jsxs)(I_,{children:[(0,z.jsx)(L_,{theme:i,src:c,alt:a,$full:!u}),u&&(0,z.jsx)(L_,{theme:i,src:u?n:``,alt:`${a} override`,$overlay:!0})]}),(0,z.jsxs)(R_,{children:[(0,z.jsx)(z_,{theme:i,title:a,children:a}),s&&(0,z.jsx)(B_,{theme:i,defaultValue:n,placeholder:`Portrait URL override (optional)`,onBlur:e=>{ae(t.id,e.target.value)}})]})]},t.id)})})]})})};var K_=`${I}/hp-bar-effect`,q_=`${I}/hp-bar-owner`,J_=`${I}/hp-number-text`,Y_=`${I}/hp-number-owner`,X_=e=>`HPB${e.slice(3)}`,Z_=e=>`HPN${e.slice(3)}`,Q_=(e,t,n)=>Math.max(t,Math.min(n,e)),$_=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},ev=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||vt.CURRENT_HP,maxHpBid:n?.attr_bid||vt.MAX_HP}},tv=(e,t)=>{let n=ev(t),r=e[D.HP_CURRENT_BID],i=e[D.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},nv=(e,t,n)=>{let r=e.metadata?.[`${I}/${t}`],i=e.metadata?.[`${I}/${n}`],a=$_(r),o=$_(i);return o===null||o<=0||a===null?null:Q_(a/o*100,0,100)},rv=(e,t,n)=>{let r=e.metadata?.[`${I}/${t}`],i=e.metadata?.[`${I}/${n}`],a=$_(r),o=$_(i);return a===null?null:{currentHp:Math.trunc(a),maxHp:o===null?null:Math.trunc(o)}},iv=e=>{let t=String(e||`bottom`).toLowerCase();return t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`},av=e=>{switch(iv(e)){case`top`:return 0;case`bottom`:return 1;case`left`:return 2;case`right`:return 3;default:return 1}},ov=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o,width:r,height:i}},sv=(e,t,n)=>{let r=ov(e,t),i=r.minX+r.width*.5,a=r.minY+r.height*.5,o;switch(n){case`top`:o={x:i,y:r.minY+r.height*.18};break;case`bottom`:o={x:i,y:r.minY+r.height*.82};break;case`left`:o={x:r.minX+r.width*.18,y:a};break;case`right`:o={x:r.minX+r.width*.82,y:a};break}let s=r.width*.25,c=r.height*.18;return{x:o.x-s,y:o.y-c}};const cv=()=>{let t=R(e=>e.cacheReady),i=R(e=>e.sceneReady),a=R(e=>e.items),o=R(e=>e.localItems),s=R(e=>e.gridDpi),l=R(e=>e.roomMetadata),u=R(e=>e.sceneMetadata),d=R(e=>e.systemData);return(0,L.useEffect)(()=>{if(!t||!i)return;let u=!1;return(async()=>{let t=l,i=t[D.SHOW_HP_BARS]??!1,f=t[D.SHOW_HP_NUMBERS]??!1,m=i,h=!i&&f,g=iv(t[D.HP_BAR_ORIENTATION]),_=av(t[D.HP_BAR_ORIENTATION]),{currentHpBid:v,maxHpBid:x}=tv(t,d?.attributes||[]),S=o.filter(e=>y(e)&&e.metadata?.[K_]===!0),C=o.filter(e=>b(e)&&e.metadata?.[J_]===!0);if(!m&&S.length>0)try{await c.scene.local.deleteItems(S.map(e=>e.id))}catch(e){O.error(`Failed to remove HP bar effects`,e)}if(!h&&C.length>0)try{await c.scene.local.deleteItems(C.map(e=>e.id))}catch(e){O.error(`Failed to remove HP number texts`,e)}if(!m&&!h)return;let w=a.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),T=new Map,E=new Map;for(let t of w){if(m){let e=nv(t,v,x);e!==null&&T.set(X_(t.id),{unitId:t.id,hpPercent:e})}if(h&&e(t)){let e=rv(t,v,x);if(e){let n=e.maxHp===null?`${e.currentHp}`:`${e.currentHp}/${e.maxHp}`;E.set(Z_(t.id),{unitId:t.id,text:n,position:sv(t,s,g)})}}}if(m){let e=new Map(S.map(e=>[e.id,e])),t=Array.from(T.entries()).filter(([t])=>!e.has(t)),n=S.filter(e=>!T.has(e.id)),i=S.filter(e=>{let t=T.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`orientation`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return e.attachedTo!==t.unitId||!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-_)>.001});if(u)return;if(n.length>0)try{await c.scene.local.deleteItems(n.map(e=>e.id))}catch(e){O.error(`Failed to remove stale HP bar effects`,e)}if(t.length>0){let e=t.map(([e,t])=>r().id(e).name(`HP Bar Effect`).effectType(`ATTACHMENT`).attachedTo(t.unitId).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).uniforms([{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:_}]).sksl(`
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
`).metadata({[K_]:!0,[q_]:t.unitId}).build());try{await c.scene.local.addItems(e)}catch(e){O.error(`Failed to add HP bar effects`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await c.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=T.get(e.id);if(!t)return;e.attachedTo=t.unitId;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:_}],e.metadata={...e.metadata,[K_]:!0,[q_]:t.unitId}})})}catch(e){O.error(`Failed to update HP bar effects`,e)}}}if(h){let e=new Map(C.map(e=>[e.id,e])),t=Array.from(E.entries()).filter(([t])=>!e.has(t)),r=C.filter(e=>!E.has(e.id)),i=C.filter(e=>{let t=E.get(e.id);if(!t)return!1;let n=e.text?.plainText,r=Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01;return e.attachedTo!==t.unitId||n!==t.text||r});if(u)return;if(r.length>0)try{await c.scene.local.deleteItems(r.map(e=>e.id))}catch(e){O.error(`Failed to remove stale HP number texts`,e)}if(t.length>0){let e=t.map(([e,t])=>{let r=w.find(e=>e.id===t.unitId);return n().id(e).name(`HP Number Text`).plainText(t.text).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(28).fontFamily(`Segoe UI`).textAlign(`CENTER`).position(t.position).metadata({[J_]:!0,[Y_]:t.unitId}).attachedTo(t.unitId).visible(r?.visible??!0).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build()});try{await c.scene.local.addItems(e)}catch(e){O.error(`Failed to add HP number texts`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await c.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=E.get(e.id);if(!t)return;e.attachedTo=t.unitId,e.position=t.position;let n=e;n.text&&(n.text.plainText=t.text),e.metadata={...e.metadata,[J_]:!0,[Y_]:t.unitId}})})}catch(e){O.error(`Failed to update HP number texts`,e)}}}})(),()=>{u=!0}},[t,i,a,o,s,l,u,d]),null};var lv=`${I}/death-effect-token`,uv=`${I}/death-effect-owner`,dv=e=>`DTH${e.slice(3)}`,fv=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},pv=e=>({currentHpBid:e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`})?.attr_bid||vt.CURRENT_HP}),mv=(e,t)=>{let n=pv(t),r=e[D.HP_CURRENT_BID],i=new Set(t.map(e=>e.attr_bid));return r&&i.has(r)?r:n.currentHpBid},hv=(e,t)=>{let n=e.metadata?.[`${I}/${t}`];return fv(n)};const gv=()=>{let t=R(e=>e.cacheReady),n=R(e=>e.sceneReady),i=R(e=>e.items),a=R(e=>e.localItems),o=R(e=>e.roomMetadata),s=R(e=>e.sceneMetadata),l=R(e=>e.systemData);return(0,L.useEffect)(()=>{if(!t||!n)return;let s=!1;return(async()=>{let t=o,n=t[D.SHOW_DEATH_EFFECT]??!1,u=mv(t,l?.attributes||[]),d=a.filter(e=>y(e)&&e.metadata?.[lv]===!0);if(!n){if(d.length>0)try{await c.scene.local.deleteItems(d.map(e=>e.id))}catch(e){O.error(`Failed to remove death token effects`,e)}return}let f=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),m=new Map;f.forEach(e=>{hv(e,u)===0&&m.set(dv(e.id),e.id)});let h=new Map(d.map(e=>[e.id,e])),g=Array.from(m.entries()).filter(([e])=>!h.has(e)),_=d.filter(e=>!m.has(e.id)),v=d.filter(e=>{let t=m.get(e.id);if(!t)return!1;let n=e;return e.attachedTo!==t||n.metadata?.[uv]!==t});if(!s){if(_.length>0)try{await c.scene.local.deleteItems(_.map(e=>e.id))}catch(e){O.error(`Failed to remove stale death token effects`,e)}if(g.length>0){let e=g.map(([e,t])=>r().id(e).name(`Death Token Effect`).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(`
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
`).metadata({[lv]:!0,[uv]:t}).build());try{await c.scene.local.addItems(e)}catch(e){O.error(`Failed to add death token effects`,e)}}if(v.length>0)try{await c.scene.local.updateItems(v.map(e=>e.id),e=>{e.forEach(e=>{let t=m.get(e.id);t&&(e.attachedTo=t,e.metadata={...e.metadata,[lv]:!0,[uv]:t})})})}catch(e){O.error(`Failed to update death token effects`,e)}}})(),()=>{s=!0}},[t,n,i,a,o,s,l]),null};var _v=`${I}/buff-effect-token`,vv=`${I}/buff-effect-owner`,yv=`${I}/debuff-effect-token`,bv=`${I}/debuff-effect-owner`,xv=`${I}/effect-preset`,Sv=e=>`EFB${e.slice(3)}`,Cv=e=>`EFD${e.slice(3)}`,wv=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const Tv=()=>{let t=R(e=>e.cacheReady),n=R(e=>e.sceneReady),i=R(e=>e.items),a=R(e=>e.localItems),o=R(e=>e.roomMetadata),s=R(e=>e.sceneMetadata);return(0,L.useEffect)(()=>{if(!t||!n)return;let s=!1;return(async()=>{let t=o,n=t[D.BUFF_VISUAL_PRESET],l=t[D.DEBUFF_VISUAL_PRESET],u=zm(n)?n:Fm,d=Bm(l)?l:Im,f=Vm(u),m=Hm(d),h=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),g=new Set(h.map(e=>e.id)),_=new Map,v=(e,t)=>{let n=_.get(e)||{hasBuff:!1,hasDebuff:!1};t===`buff`?n.hasBuff=!0:n.hasDebuff=!0,_.set(e,n)};i.forEach(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return;let t=wv(e.metadata?.[Sh]);t.length!==0&&t.forEach(t=>{t.effectType!==`neutral`&&(t.targets.length>0?t.targets:[e.id]).forEach(e=>{g.has(e)&&(t.effectType===`buff`||t.effectType===`debuff`)&&v(e,t.effectType)})})});let b=new Map,x=new Map;h.forEach(e=>{let t=_.get(e.id);t?.hasBuff&&b.set(Sv(e.id),e.id),t?.hasDebuff&&x.set(Cv(e.id),e.id)});let S=a.filter(e=>y(e)&&e.metadata?.[_v]===!0),C=a.filter(e=>y(e)&&e.metadata?.[yv]===!0),w=async e=>{let{existing:t,desiredByOverlayId:n,preset:i,shader:a,name:o,flagKey:l,ownerKey:u}=e,d=new Map(t.map(e=>[e.id,e])),f=Array.from(n.entries()).filter(([e])=>!d.has(e)),p=t.filter(e=>!n.has(e.id)),m=t.filter(e=>{let t=n.get(e.id);if(!t)return!1;let r=e.metadata?.[xv];return e.attachedTo!==t||r!==i});if(!s){if(p.length>0)try{await c.scene.local.deleteItems(p.map(e=>e.id))}catch(e){O.error(`Failed to remove stale ${o.toLowerCase()} overlays`,e)}if(f.length>0){let e=f.map(([e,t])=>r().id(e).name(o).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(a).metadata({[l]:!0,[u]:t,[xv]:i}).build());try{await c.scene.local.addItems(e)}catch(e){O.error(`Failed to add ${o.toLowerCase()} overlays`,e)}}if(m.length>0)try{await c.scene.local.updateItems(m.map(e=>e.id),e=>{e.forEach(e=>{let t=n.get(e.id);if(!t)return;e.attachedTo=t;let r=e;r.sksl=a,e.metadata={...e.metadata,[l]:!0,[u]:t,[xv]:i}})})}catch(e){O.error(`Failed to update ${o.toLowerCase()} overlays`,e)}}};await w({existing:S,desiredByOverlayId:b,preset:u,shader:f,name:`Buff Token Effect`,flagKey:_v,ownerKey:vv}),await w({existing:C,desiredByOverlayId:x,preset:d,shader:m,name:`Debuff Token Effect`,flagKey:yv,ownerKey:bv})})(),()=>{s=!0}},[t,n,i,a,o,s]),null};var Ev=`${I}/boss-hp-effect`,Dv=`${I}/boss-hp-owner`,Ov=`${I}/boss-hp-slot`,kv=e=>`BOSSHP${e}`,Av=(e,t,n)=>Math.max(t,Math.min(n,e)),jv=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},Mv=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||vt.CURRENT_HP,maxHpBid:n?.attr_bid||vt.MAX_HP}},Nv=(e,t)=>{let n=Mv(t),r=e[D.HP_CURRENT_BID],i=e[D.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},Pv=(e,t,n)=>{let r=e.metadata?.[`${I}/${t}`],i=e.metadata?.[`${I}/${n}`],a=jv(r),o=jv(i);return o===null||o<=0||a===null?null:Av(a/o*100,0,100)};const Fv=()=>{let t=R(e=>e.cacheReady),n=R(e=>e.sceneReady),i=R(e=>e.items),a=R(e=>e.localItems),o=R(e=>e.roomMetadata),s=R(e=>e.sceneMetadata),l=R(e=>e.systemData);return(0,L.useEffect)(()=>{if(!t||!n)return;let s=!1;return(async()=>{let{currentHpBid:t,maxHpBid:n}=Nv(o,l?.attributes||[]),u=a.filter(e=>y(e)&&e.metadata?.[Ev]===!0),d=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0&&t.metadata?.[p.BOSS_MODE]===!0).sort((e,t)=>{let n=Number(e.metadata?.[p.INITIATIVE]??0);return Number(t.metadata?.[p.INITIATIVE]??0)-n}).slice(0,2).map((e,r)=>{let i=Pv(e,t,n);return i===null?null:{id:kv(r),unitId:e.id,slot:r,hpPercent:i}}).filter(e=>e!==null),f=new Map(d.map(e=>[e.id,e])),m=new Map(u.map(e=>[e.id,e])),h=u.filter(e=>!f.has(e.id)),g=d.filter(e=>!m.has(e.id)),_=u.filter(e=>{let t=f.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`slot`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-t.slot)>.001||e.metadata?.[Dv]!==t.unitId});if(!s){if(h.length>0)try{await c.scene.local.deleteItems(h.map(e=>e.id))}catch(e){O.error(`Failed to remove stale boss HP viewport effects`,e)}if(g.length>0){let e=g.map(e=>r().id(e.id).name(`Boss HP Bar`).effectType(`VIEWPORT`).locked(!0).disableHit(!0).uniforms([{name:`hpPercent`,value:e.hpPercent},{name:`slot`,value:e.slot}]).sksl(`
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
`).metadata({[Ev]:!0,[Dv]:e.unitId,[Ov]:e.slot}).build());try{await c.scene.local.addItems(e)}catch(e){O.error(`Failed to add boss HP viewport effects`,e)}}if(_.length>0)try{await c.scene.local.updateItems(_.map(e=>e.id),e=>{e.forEach(e=>{let t=f.get(e.id);if(!t)return;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`slot`,value:t.slot}],e.metadata={...e.metadata,[Ev]:!0,[Dv]:t.unitId,[Ov]:t.slot}})})}catch(e){O.error(`Failed to update boss HP viewport effects`,e)}}})(),()=>{s=!0}},[t,n,i,a,o,s,l]),null};var Iv=`${I}/current-turn-effect`;const Lv=()=>{let e=R(e=>e.cacheReady),t=R(e=>e.sceneReady),n=R(e=>e.items),i=R(e=>e.roomMetadata),a=R(e=>e.sceneMetadata);return(0,L.useEffect)(()=>{if(!e||!t)return;let o=!1;return(async()=>{let e=i[D.SHOW_TURN_EFFECT]===!0,t=a[D.CURRENT_TURN];if(!e||!t){try{await c.scene.local.deleteItems([Iv])}catch{}return}if(!n.find(e=>e.id===t)){try{await c.scene.local.deleteItems([Iv])}catch{}return}if(!o){try{let e=!1;if(await c.scene.local.updateItems([Iv],n=>{let r=n[0];r&&(r.attachedTo=t,e=!0)}),e)return}catch{}if(!o)try{let e=r().id(Iv).name(`Current Turn Effect`).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).sksl(`
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

`).build();await c.scene.local.addItems([e])}catch(e){O.error(`Failed to sync current turn effect`,e)}}})(),()=>{o=!0}},[e,t,n,i,a]),null},Rv=()=>{let[e,t]=(0,L.useState)(!1),{updateThemeFromSystem:n}=Pt(),r=R(e=>e.roomMetadata),i=R(e=>e.cacheReady),a=R(e=>e.systemData),o=R(e=>e.setSystemData),s=()=>({theme:{primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,snapshotPublicId:null});return(0,L.useEffect)(()=>{!i&&e&&(t(!1),o(null))},[i,e,o]),(0,L.useEffect)(()=>{!i||!a||n(a.theme.primary,a.theme.offset,a.theme.background,a.theme.border,a.theme.background_url)},[i,a,n]),(0,L.useEffect)(()=>{if(e)return;let n=!0,a=async()=>{if(i)try{O.log(`Starting app initialization...`),await c(),n&&(t(!0),O.log(`App initialization complete`))}catch(e){O.error(`Error during app initialization:`,e),n&&t(!0)}},c=async()=>{let e=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Snapshot ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Snapshot ${t} is not a JSON array`);return n}throw Error(`Snapshot ${t} has invalid type`)},t=async t=>{let{data:n,error:r}=await C.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:t});if(r)return O.error(`Failed to load room snapshot:`,r),!1;let i=Array.isArray(n)?n[0]:n;if(!i||typeof i.snapshot_public_id!=`string`)return O.warn(`Room snapshot reference was set, but no snapshot record was returned`),!1;let a=e(i.card_layout,`card_layout`),s=e(i.list_layout,`list_layout`),c=e(i.attributes,`attributes`);return o({theme:{primary:i.theme_primary,offset:i.theme_offset,background:i.theme_background,border:i.theme_border,background_url:i.background_url},cardLayout:a,listLayout:s,attributes:c,systemName:i.system_name,importDate:i.imported_at,snapshotPublicId:i.snapshot_public_id}),O.log(`System data hydrated from room snapshot`,{snapshotPublicId:i.snapshot_public_id,systemName:i.system_name}),!0};try{let e=r[Gm.SNAPSHOT_PUBLIC_ID];if(typeof e==`string`&&e.trim().length>0&&await t(e))return;O.log(`Room snapshot reference missing or unavailable, initializing defaults`),await l()}catch(e){O.error(`Error loading system data:`,e),await l()}},l=async()=>{o(s()),O.log(`Default system initialized`)};return a(),()=>{n=!1}},[i,e,r,o,n]),(0,L.useEffect)(()=>{if(!i||!e)return;let t=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},n=r[Gm.SNAPSHOT_PUBLIC_ID],c=typeof n==`string`&&n.trim().length>0?n.trim():null;if(c===(a?.snapshotPublicId??null))return;let l=!1;return(async()=>{if(!c){l||(o(s()),O.log(`Room snapshot reference cleared, reverted runtime system to defaults`));return}let{data:e,error:n}=await C.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:c});if(n){O.error(`Failed to refresh system from room snapshot change:`,n);return}let r=Array.isArray(e)?e[0]:e;if(!r||typeof r.snapshot_public_id!=`string`){O.warn(`Room snapshot reference changed, but snapshot record was not found`);return}let i=t(r.card_layout),a=t(r.list_layout),u=t(r.attributes);if(!i||!a||!u){O.warn(`Room snapshot refresh returned invalid payload arrays`);return}l||(o({theme:{primary:r.theme_primary,offset:r.theme_offset,background:r.theme_background,border:r.theme_border,background_url:r.background_url},cardLayout:i,listLayout:a,attributes:u,systemName:r.system_name,importDate:r.imported_at,snapshotPublicId:r.snapshot_public_id}),O.log(`Runtime system refreshed from room snapshot change`,{snapshotPublicId:r.snapshot_public_id,systemName:r.system_name}))})(),()=>{l=!0}},[i,e,r,a,o]),{isInitialized:e}};var zv=m`
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
`,Bv=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e2232;
  color: #ffffff;
`,Vv=T.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: #9d99ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Hv=T.p`
  margin-top: 20px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;function Uv(){let{sceneReady:e,cacheReady:t,playerData:n,roomMetadata:r,sceneMetadata:i}=R(),{isInitialized:a}=Rv(),{theme:o}=Pt(),[s,l]=(0,L.useState)(`ForgeMain`),[u,d]=(0,L.useState)(!1),f=(0,L.useRef)(!1),p=String(n?.role||``).toUpperCase()===`GM`,m=r,h=n?.id,g=(m[re(D.PARTY_HUD_OPEN,h)]??m[D.PARTY_HUD_OPEN])===!0,_=m[D.SHOW_PLAYER_VIEW]||!1,v=p||_,y=e&&t&&a;return(0,L.useEffect)(()=>{y&&P()},[y]),(0,L.useEffect)(()=>{if(!y)return;let e=!0;return(async()=>{if(g&&!f.current){await S_(),e&&(f.current=!0);return}!g&&f.current&&(await C_(),e&&(f.current=!1))})(),()=>{e=!1}},[y,g]),(0,L.useEffect)(()=>{y&&!v&&s===`ForgeMain`&&l(`Party`)},[y,v,s]),(0,L.useEffect)(()=>{s!==`ForgeMain`&&c.action.setWidth(350)},[s]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(zv,{theme:o}),!e||!t||!a?(0,z.jsxs)(Bv,{children:[(0,z.jsx)(Vv,{}),(0,z.jsx)(Hv,{children:e?t?a?`Loading...`:`Initializing system...`:`Loading cache...`:`Connecting to scene...`})]}):(0,z.jsxs)(qp,{children:[(0,z.jsx)(cv,{}),(0,z.jsx)(gv,{}),(0,z.jsx)(Tv,{}),(0,z.jsx)(Fv,{}),(0,z.jsx)(Lv,{}),(0,z.jsx)(Jp,{theme:o,$backgroundUrl:o.BACKGROUND_URL,children:(0,z.jsx)(eu,{mode:`wait`,children:(()=>{switch(s){case`ForgeMain`:return v?(0,z.jsx)(b_,{},`main`):(0,z.jsx)(G_,{},`party`);case`Settings`:return p?(0,z.jsx)(Om,{},`settings`):(0,z.jsx)(b_,{},`main`);case`Party`:return(0,z.jsx)(G_,{},`party`);case`System`:return p?(0,z.jsx)(yh,{},`system`):(0,z.jsx)(b_,{},`main`);case`ChatLog`:return(0,z.jsx)(Pm,{},`chatlog`)}})()})}),(0,z.jsx)(im,{isOpen:u,currentPage:s,onToggle:()=>d(!u),onNavigate:e=>{if(!v&&e===`ForgeMain`){l(`Party`),d(!1);return}if(!p&&(e===`Settings`||e===`System`)){l(`ForgeMain`),d(!1);return}l(e),d(!1)},canAccessInitiativeList:v})]})]})}var Wv=Uv,Gv=class{static{this.ALPHANUMERICTEXTMATCH=/\s[\da-zA-Z]$/}};function Kv(e){for(let t of Jv)if(e.includes(t)){let n=Jv[Math.floor(Math.random()*Jv.length)];return e.replace(t,n)}return qv(e)}function qv(e){return`${Jv[Math.floor(Math.random()*Jv.length)]} ${e}`}const Jv=`Grizzled.Wily.Stoic.Mellow.Pensive.Shrewd.Cautious.Hardy.Nimble.Tenacious.Gritty.Tolerant.Hardy.Adroit.Resilient.Slight.Stout.Durable.Subtle.Sober.Clever.Brave.Calm.Wise.Cunning.Alert.Swift.Agile.Loyal.Sturdy.Stable.Sneaky.Clever.Resourceful.Shady.Stalwart.Vigilant.Staunch.Fierce.Vigorous.Robust.Fearless.Dauntless.Resolute.Sagacious.Prudent.Judicious.Astute.Savvy.Sharp.Quick.Witty.Smart.Snippy.Crafty.Deft.Sly.Artful.Clever.Sneering.Tough.Rugged.Solid.Strong.Sturdy.Tough.Gritty.Rough.Hardened.Burly.Muscular.Brawny.Rowdy.Forceful.Snorting.Potent.Martial.Speckled.Mottled.Disheveled`.split(`.`);var Yv=`com.battle-system.forge/view-unit`,Xv=`com.battle-system.forge/view-unit-player`,Zv=e=>e.trim().toLowerCase(),Qv=e=>{if(typeof e!=`string`)return null;let t=e.trim();return t.length>0?t:null},$v=e=>{let t=e.trim();return t?Gv.ALPHANUMERICTEXTMATCH.test(t)?t.slice(0,-2):t:e},ey=e=>{let t=typeof e.text?.plainText==`string`?e.text.plainText.trim():``;if(t.length>0)return t;let n=e.metadata?.[p.UNIT_NAME],r=typeof n==`string`?n.trim():``;if(r.length>0)return r;let i=typeof e.name==`string`?e.name.trim():``;return i.length>0?i:typeof e.name==`string`?e.name:``},ty=async e=>{let n=await c.viewport.getHeight(),r=n>800?700:n-100;await c.popover.open({id:t.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(e)}`,height:r,width:350,anchorReference:`POSITION`,anchorPosition:{left:await c.viewport.getWidth()/2,top:await c.viewport.getHeight()/2},anchorOrigin:{horizontal:`CENTER`,vertical:`CENTER`},transformOrigin:{horizontal:`CENTER`,vertical:`CENTER`},hidePaper:!0,disableClickAway:!0})},ny=async e=>{let t=Array.from(new Set(e.map(e=>e.trim()).filter(e=>e.length>0))),n=new Map;if(t.length===0)return n;let r=await ft(),i=new Map;for(let e of r){let t=Zv(e.name);if(!t)continue;let n=i.get(t);n?n.push(e):i.set(t,[e])}for(let e of t){let t=Zv(e),r=i.get(t)?.[0];!r||!r.metadata||n.set(t,se(r.metadata))}try{let e=await $e(t);for(let t of e){let e=Zv(t.name);!e||n.has(e)||!t.metadata||n.set(e,se(t.metadata))}let r=await rt(t);for(let e of r){let t=Zv(e.name);!t||n.has(t)||!e.metadata||n.set(t,se(e.metadata))}}catch(e){O.log(`Remote collection lookup failed, using local collection only`,e)}return n};function ry({children:e}){let t=R(e=>e.roomMetadata);R(e=>e.sceneMetadata);let n=R(e=>e.items),r=R(e=>e.playerData),i=R(e=>e.systemData),a=t,o=i?.attributes??[],s=new Set(o.map(e=>e.attr_bid)),l=o.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`})?.attr_bid,u=o.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`})?.attr_bid,d=Qv(a[D.HP_CURRENT_BID]),f=Qv(a[D.HP_MAX_BID]),m=d&&(s.size===0||s.has(d))?d:l||(s.size===0?vt.CURRENT_HP:``),h=f&&(s.size===0||s.has(f))?f:u||(s.size===0?vt.MAX_HP:``),g=!!(m&&h),_=a[D.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?!0:a[D.SHOW_MODIFY_UNIT_CONTEXT_MENU]===!0,v=a[D.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===void 0?!0:a[D.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===!0;return(0,L.useEffect)(()=>{c.onReady(()=>{c.contextMenu.create({id:p.ON_LIST,icons:[{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}}],async onClick(e){if(O.info(`Add to Combat Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[p.ON_LIST]===!0))await c.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[p.ON_LIST],delete t.metadata[p.INITIATIVE]});else{let t=[],r=[],i=new Set(e.items.map(e=>e.id)),o=a[D.USE_DESCRIPTIVE_DUPLICATES]===!0,s=new Set(n.filter(e=>{if(i.has(e.id))return!1;let t=e.metadata[p.UNIT_NAME];return typeof t==`string`&&t.trim().length>0}).map(e=>Zv(String(e.metadata[p.UNIT_NAME]))));for(let n of e.items){if(n.metadata[p.FABRICATED]===!0)continue;let e=$v(n.text?.plainText||n.name);t.push(e)}await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let l=await ny(t);await c.action.setBadgeText(void 0);for(let t of e.items){let e={},n=t,i=ey(n);if(t.metadata[p.FABRICATED]!==!0){let r=$v(n.text?.plainText||t.name),a=l.get(Zv(r));a&&Object.assign(e,a),(typeof e[p.UNIT_NAME]!=`string`||!String(e[p.UNIT_NAME]).trim())&&(e[p.UNIT_NAME]=i),e[p.FABRICATED]=!0}if(o){let r=typeof t.metadata[p.UNIT_NAME]==`string`?String(t.metadata[p.UNIT_NAME]).trim():``,a=$v(n.text?.plainText||t.name).trim(),o=String(e[p.UNIT_NAME]||r||i||a||t.name).trim(),c=Zv(o);if(c){let e=0;for(;s.has(c)&&e<20;)o=Kv(o),c=Zv(o),e+=1;c&&s.add(c)}e[p.UNIT_NAME]=o}(typeof e[p.UNIT_NAME]!=`string`||!String(e[p.UNIT_NAME]).trim())&&(e[p.UNIT_NAME]=i),e[p.ON_LIST]=!0,e[p.INITIATIVE]=0,r.push({id:t.id,metadata:e})}await c.scene.items.updateItems(e.items,e=>{for(let t of e){let e=r.find(e=>e.id===t.id);if(e&&(Object.assign(t.metadata,e.metadata),a[D.SHOW_NAMES]===!0)){let n=t,r=typeof e.metadata[p.UNIT_NAME]==`string`&&String(e.metadata[p.UNIT_NAME]).trim().length>0?String(e.metadata[p.UNIT_NAME]).trim():ey(n);n.text&&(n.text.plainText=r)}}})}}}),c.contextMenu.create({id:p.IN_PARTY,icons:[{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`!=`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`!=`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`==`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`==`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){O.info(`Add to Party Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[p.IN_PARTY]===!0)?await c.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[p.IN_PARTY]}):await c.scene.items.updateItems(e.items,e=>{for(let t of e)t.metadata[p.IN_PARTY]=!0})}}),c.contextMenu.create({id:Yv,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}}],async onClick(e){O.info(`View Unit Clicked: ${e.items[0].name}`);let t=e.items[0];if(!t)return;let r={};if(t.metadata[p.FABRICATED]!==!0){let e=t,i=ey(e),o=$v(e.text?.plainText||t.name);await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let s=await ny([o]);await c.action.setBadgeText(void 0);let l=s.get(Zv(o));l&&Object.assign(r,l),(typeof r[p.UNIT_NAME]!=`string`||!String(r[p.UNIT_NAME]).trim())&&(r[p.UNIT_NAME]=i),r[p.FABRICATED]=!0,a[D.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[p.UNIT_NAME]!=null&&e.id!==t.id).map(e=>e.metadata[p.UNIT_NAME]).includes(o)&&(r[p.UNIT_NAME]=Kv(o)),await c.scene.items.updateItems([t],e=>{let t=e[0];if(Object.assign(t.metadata,r),a[D.SHOW_NAMES]===!0){let e=t,n=typeof r[p.UNIT_NAME]==`string`&&String(r[p.UNIT_NAME]).trim().length>0?String(r[p.UNIT_NAME]).trim():ey(e);e.text&&(e.text.plainText=n)}})}await ty(t.id)}}),v?c.contextMenu.create({id:Xv,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){O.info(`View Unit Clicked: ${e.items[0].name}`);let t=e.items[0];if(!t)return;let r={};if(t.metadata[p.FABRICATED]!==!0){let e=t,i=ey(e),o=$v(e.text?.plainText||t.name);await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let s=await ny([o]);await c.action.setBadgeText(void 0);let l=s.get(Zv(o));l&&Object.assign(r,l),(typeof r[p.UNIT_NAME]!=`string`||!String(r[p.UNIT_NAME]).trim())&&(r[p.UNIT_NAME]=i),r[p.FABRICATED]=!0,a[D.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[p.UNIT_NAME]!=null&&e.id!==t.id).map(e=>e.metadata[p.UNIT_NAME]).includes(o)&&(r[p.UNIT_NAME]=Kv(o)),await c.scene.items.updateItems([t],e=>{let t=e[0];if(Object.assign(t.metadata,r),a[D.SHOW_NAMES]===!0){let e=t,n=typeof r[p.UNIT_NAME]==`string`&&String(r[p.UNIT_NAME]).trim().length>0?String(r[p.UNIT_NAME]).trim():ey(e);e.text&&(e.text.plainText=n)}})}await ty(t.id)}}):c.contextMenu.remove(Xv).catch(()=>{}),g&&_?c.contextMenu.create({id:p.MODIFY_UNIT,icons:[{icon:`/icon.svg`,label:`Adjust HP`,filter:{some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Adjust HP`,filter:{every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e,t){O.info(`Adjust HP Clicked: ${e.items[0].name}`),await c.popover.open({id:te.CONTEXT_MENU,url:`/pages/forgecontext.html`,height:50,width:180,anchorElementId:t,hidePaper:!0})},embed:{url:`/pages/forgecontext.html?contextmenu=true`,height:70}}):c.contextMenu.remove(p.MODIFY_UNIT).catch(()=>{})})},[a,g,_,v]),(0,z.jsx)(z.Fragment,{children:e})}Tt.createRoot(document.getElementById(`root`)).render((0,z.jsx)(L.StrictMode,{children:(0,z.jsx)(ne,{children:(0,z.jsx)(jt,{children:(0,z.jsx)(ry,{children:(0,z.jsx)(Nt,{children:(0,z.jsx)(Wv,{})})})})})}));