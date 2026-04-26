import{A as e,C as t,D as n,E as r,F as i,L as a,M as o,N as s,O as c,R as l,S as u,T as d,_ as f,b as p,c as m,d as h,f as g,g as _,h as v,j as y,k as b,l as x,m as S,o as C,p as w,s as T,t as E,u as D,v as ee,w as te,x as ne,y as O}from"./defaultgamesystem-CWetXqo_.js";import{$ as re,A as k,At as ie,B as ae,C as oe,Ct as se,D as ce,Dt as le,E as A,Et as ue,F as de,G as fe,H as pe,I as me,J as he,K as ge,L as _e,M as ve,N as ye,O as be,Ot as j,P as M,Q as xe,R as Se,S as Ce,St as we,Tt as Te,U as Ee,V as De,W as Oe,X as ke,Y as Ae,Z as je,_ as Me,_t as Ne,at as Pe,b as Fe,bt as N,c as Ie,ct as Le,d as Re,dt as P,et as ze,f as Be,ft as Ve,g as He,gt as Ue,h as We,ht as Ge,it as Ke,j as qe,k as Je,kt as Ye,l as Xe,lt as Ze,m as F,mt as I,n as L,nt as Qe,ot as R,pt as $e,q as et,r as tt,rt as nt,s as rt,st as it,tt as at,u as ot,ut as st,v as ct,vt as lt,w as ut,wt as dt,xt as ft,y as pt,yt as mt,z as ht}from"./unitCollectionRemote-DFWPaeUV.js";import{n as gt,t as z}from"./MockData-DTzuSraw.js";var _t=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},vt=(e=>e?_t(e):_t),B=l(i(),1),yt=e=>e;function bt(e,t=yt){let n=B.useSyncExternalStore(e.subscribe,B.useCallback(()=>t(e.getState()),[e,t]),B.useCallback(()=>t(e.getInitialState()),[e,t]));return B.useDebugValue(n),n}var xt=e=>{let t=vt(e),n=e=>bt(t,e);return Object.assign(n,t),n},St=(e=>e?xt(e):xt),Ct=l(s(),1);const V=St(e=>({cacheReady:!1,setCacheReady:t=>e({cacheReady:t}),sceneReady:!1,setSceneReady:t=>e({sceneReady:t}),items:[],setItems:t=>e({items:t}),localItems:[],setLocalItems:t=>e({localItems:t}),sceneMetadata:{},setSceneMetadata:t=>e({sceneMetadata:{...t}}),roomMetadata:{},setRoomMetadata:t=>e({roomMetadata:{...t}}),gridDpi:150,setGridDpi:t=>e({gridDpi:t}),playerData:void 0,setPlayerData:t=>e({playerData:t}),partyData:[],setPartyData:t=>e({partyData:t}),systemData:null,setSystemData:t=>e({systemData:t})}));var wt=0;const Tt=St(e=>({messages:[],initialized:!1,addMessage:t=>{let n=new Date,r=n.getHours(),i=n.getMinutes(),a=r>=12?`PM`:`AM`,o=`${r%12||12}:${i<10?`0${i}`:i} ${a}`;e(e=>({messages:[...e.messages,{id:wt++,text:t,timestamp:o}]}))},setInitialized:t=>e({initialized:t})})),Et=()=>{Tt.getState().initialized||(c.broadcast.onMessage(`${t.EXTENSIONID}/chatlog`,e=>{let t=Tt.getState().addMessage;typeof e.data==`string`?t(e.data):typeof e.data==`object`&&e.data.message&&t(e.data.message)}),Tt.getState().setInitialized(!0))};var H=d(),Dt=`${t.EXTENSIONID}/chatlog`,Ot=`${t.EXTENSIONID}/roll-notification`;function kt({children:e}){let t=V(e=>e.setItems),n=V(e=>e.setLocalItems),r=V(e=>e.setSceneMetadata),i=V(e=>e.setRoomMetadata),a=V(e=>e.setGridDpi),o=V(e=>e.setPlayerData),s=V(e=>e.setPartyData),l=V(e=>e.setSceneReady),u=V(e=>e.setCacheReady);return(0,B.useEffect)(()=>{let e=(e,t)=>{let n=t[O.ENABLE_CONSOLE_LOG];typeof n==`boolean`&&j.setEnabled(n)},d=e=>{ie(e);let{sceneMetadata:t,roomMetadata:n}=V.getState(),r=n,i=r[O.ENABLE_OBR_NOTIFICATION];if(r[O.SHOW_NOTIFICATION_TO_ALL]===!0){c.broadcast.sendMessage(Dt,{message:e},{destination:`ALL`}),i===!0&&c.broadcast.sendMessage(Ot,{message:e},{destination:`ALL`});return}Tt.getState().addMessage(e),i===!0&&c.notification.show(e,`SUCCESS`)},f=({explicitMessage:e,tokenName:t,actionName:n,total:r})=>{if(typeof e==`string`&&e.trim().length>0)return e;let i=t||`Unknown`,a=n||`Action`;return typeof r==`number`&&Number.isFinite(r)?`${i} rolled ${a} for ${r}!`:`${i} rolled ${a}.`};Et();let p=c.broadcast.onMessage(Ot,e=>{let t=e.data,n=typeof t?.message==`string`?t.message:null;n&&c.notification.show(n,`SUCCESS`)});we(e=>{let t=ft(e.rollHtml);d(f({tokenName:e.senderName,actionName:e.actionName,total:t}))}),dt(e=>{d(f({explicitMessage:e.message}))}),se(e=>{d(f({tokenName:e.playerName,actionName:e.result.diceNotation,total:e.result.totalValue}))}),Te(e=>{let t=e.output.trim();d(t.length>0?`${e.senderName} rolled ${e.actionName} for ${e.total}. ${t}`:f({tokenName:e.senderName,actionName:e.actionName,total:e.total}))});let m,h,g,_,v,y,b,x,S=async()=>{let[l,d,f,p,m,S,C,w,T,E,D,ee,te]=await Promise.all([c.scene.items.getItems(),c.scene.local.getItems(),c.scene.getMetadata(),c.room.getMetadata(),c.scene.grid.getDpi(),c.party.getPlayers(),c.player.getSelection(),c.player.getColor(),c.player.getRole(),c.player.getConnectionId(),c.player.getId(),c.player.getMetadata(),c.player.getName()]);t(l),n(d),r(f),i(p),e(f,p),a(m),o({id:D,name:te,connectionId:E,role:T,color:w,selection:C,metadata:ee}),s(S),h=c.scene.items.onChange(t),g=c.scene.local.onChange(n),y=c.scene.grid.onChange(e=>a(e.dpi)),b=c.player.onChange(o),x=c.party.onChange(s),_=c.scene.onMetadataChange(t=>{r(t),e(t,V.getState().roomMetadata)}),v=c.room.onMetadataChange(t=>{i(t),e(V.getState().sceneMetadata,t)}),u(!0),j.log(`CacheManager: Cache is ready`)};return c.onReady(async()=>{let e=await c.scene.isReady();l(e),e&&(j.log(`Scene is ready on initial load, syncing cache...`),await S()),m=c.scene.onReadyChange(async e=>{l(e),e?(j.log(`Scene became ready, syncing cache...`),await S()):(j.log(`Scene is no longer ready, clearing cache...`),u(!1))})}),()=>{m?.(),h?.(),g?.(),_?.(),v?.(),y?.(),b?.(),x?.(),p?.()}},[l,u,t,n,r,i,a,o,s]),(0,H.jsx)(H.Fragment,{children:e})}var At=(0,B.createContext)(void 0);const jt=({children:e})=>{let[t,n]=(0,B.useState)(v),r=(0,B.useCallback)((e,t,r,i,a)=>{n(n=>n.PRIMARY===e&&n.OFFSET===t&&n.BACKGROUND===r&&n.BORDER===i&&n.BACKGROUND_URL===(a||void 0)?n:_(e,t,r,i,a))},[]);return(0,H.jsx)(At.Provider,{value:{theme:t,setTheme:n,updateThemeFromSystem:r},children:e})},Mt=()=>{let e=(0,B.useContext)(At);if(!e)throw Error(`useForgeTheme must be used within a ThemeProvider`);return e};var Nt=(0,B.createContext)({});function Pt(e){let t=(0,B.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Ft=typeof window<`u`,It=Ft?B.useLayoutEffect:B.useEffect,Lt=(0,B.createContext)(null);function Rt(e,t){e.indexOf(t)===-1&&e.push(t)}function zt(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Bt=(e,t,n)=>n>t?t:n<e?e:n,Vt={},Ht=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Ut(e){return typeof e==`object`&&!!e}var Wt=e=>/^0[^.\s]+$/u.test(e);function Gt(e){let t;return()=>(t===void 0&&(t=e()),t)}var Kt=e=>e,qt=(e,t)=>n=>t(e(n)),Jt=(...e)=>e.reduce(qt),Yt=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},Xt=class{constructor(){this.subscriptions=[]}add(e){return Rt(this.subscriptions,e),()=>zt(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},Zt=e=>e*1e3,Qt=e=>e/1e3;function $t(e,t){return t?e*(1e3/t):0}var en=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,tn=1e-7,nn=12;function rn(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=en(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>tn&&++s<nn);return o}function an(e,t,n,r){if(e===t&&n===r)return Kt;let i=t=>rn(t,0,1,e,n);return e=>e===0||e===1?e:en(i(e),t,r)}var on=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,sn=e=>t=>1-e(1-t),cn=an(.33,1.53,.69,.99),ln=sn(cn),un=on(ln),dn=e=>(e*=2)<1?.5*ln(e):.5*(2-2**(-10*(e-1))),U=e=>1-Math.sin(Math.acos(e)),fn=sn(U),pn=on(U),mn=an(.42,0,1,1),hn=an(0,0,.58,1),gn=an(.42,0,.58,1),_n=e=>Array.isArray(e)&&typeof e[0]!=`number`,vn=e=>Array.isArray(e)&&typeof e[0]==`number`,yn={linear:Kt,easeIn:mn,easeInOut:gn,easeOut:hn,circIn:U,circInOut:pn,circOut:fn,backIn:ln,backInOut:un,backOut:cn,anticipate:dn},bn=e=>typeof e==`string`,xn=e=>{if(vn(e)){e.length;let[t,n,r,i]=e;return an(t,n,r,i)}else if(bn(e))return yn[e],`${e}`,yn[e];return e},Sn=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],Cn={value:null,addProjectionMetrics:null};function wn(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.has(e)||s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),t&&Cn.value&&Cn.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Tn=40;function En(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Sn.reduce((e,n)=>(e[n]=wn(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Vt.useManualTiming?i.timestamp:performance.now();n=!1,Vt.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,Tn),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Sn.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Sn.length;t++)o[Sn[t]].cancel(e)},state:i,steps:o}}var{schedule:W,cancel:Dn,state:On,steps:kn}=En(typeof requestAnimationFrame<`u`?requestAnimationFrame:Kt,!0),An;function jn(){An=void 0}var Mn={now:()=>(An===void 0&&Mn.set(On.isProcessing||Vt.useManualTiming?On.timestamp:performance.now()),An),set:e=>{An=e,queueMicrotask(jn)}},Nn={layout:0,mainThread:0,waapi:0},Pn=e=>t=>typeof t==`string`&&t.startsWith(e),Fn=Pn(`--`),In=Pn(`var(--`),Ln=e=>In(e)?Rn.test(e.split(`/*`)[0].trim()):!1,Rn=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function zn(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Bn={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Vn={...Bn,transform:e=>Bt(0,1,e)},Hn={...Bn,default:1},Un=e=>Math.round(e*1e5)/1e5,Wn=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Gn(e){return e==null}var Kn=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,qn=(e,t)=>n=>!!(typeof n==`string`&&Kn.test(n)&&n.startsWith(e)||t&&!Gn(n)&&Object.prototype.hasOwnProperty.call(n,t)),Jn=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Wn);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Yn=e=>Bt(0,255,e),Xn={...Bn,transform:e=>Math.round(Yn(e))},Zn={test:qn(`rgb`,`red`),parse:Jn(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Xn.transform(e)+`, `+Xn.transform(t)+`, `+Xn.transform(n)+`, `+Un(Vn.transform(r))+`)`};function Qn(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var $n={test:qn(`#`),parse:Qn,transform:Zn.transform},er=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),tr=er(`deg`),nr=er(`%`),G=er(`px`),rr=er(`vh`),ir=er(`vw`),ar=(()=>({...nr,parse:e=>nr.parse(e)/100,transform:e=>nr.transform(e*100)}))(),or={test:qn(`hsl`,`hue`),parse:Jn(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+nr.transform(Un(t))+`, `+nr.transform(Un(n))+`, `+Un(Vn.transform(r))+`)`},K={test:e=>Zn.test(e)||$n.test(e)||or.test(e),parse:e=>Zn.test(e)?Zn.parse(e):or.test(e)?or.parse(e):$n.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?Zn.transform(e):or.transform(e),getAnimatableNone:e=>{let t=K.parse(e);return t.alpha=0,K.transform(t)}},sr=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function cr(e){return isNaN(e)&&typeof e==`string`&&(e.match(Wn)?.length||0)+(e.match(sr)?.length||0)>0}var lr=`number`,ur=`color`,dr=`var`,fr=`var(`,pr="${}",mr=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function hr(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(mr,e=>(K.test(e)?(r.color.push(a),i.push(ur),n.push(K.parse(e))):e.startsWith(fr)?(r.var.push(a),i.push(dr),n.push(e)):(r.number.push(a),i.push(lr),n.push(parseFloat(e))),++a,pr)).split(pr),indexes:r,types:i}}function gr(e){return hr(e).values}function _r(e){let{split:t,types:n}=hr(e),r=t.length;return e=>{let i=``;for(let a=0;a<r;a++)if(i+=t[a],e[a]!==void 0){let t=n[a];t===lr?i+=Un(e[a]):t===ur?i+=K.transform(e[a]):i+=e[a]}return i}}var vr=e=>typeof e==`number`?0:K.test(e)?K.getAnimatableNone(e):e;function yr(e){let t=gr(e);return _r(e)(t.map(vr))}var br={test:cr,parse:gr,createTransformer:_r,getAnimatableNone:yr};function xr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Sr({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=xr(s,r,e+1/3),a=xr(s,r,e),o=xr(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Cr(e,t){return n=>n>0?t:e}var q=(e,t,n)=>e+(t-e)*n,wr=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Tr=[$n,Zn,or],Er=e=>Tr.find(t=>t.test(e));function Dr(e){let t=Er(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===or&&(n=Sr(n)),n}var Or=(e,t)=>{let n=Dr(e),r=Dr(t);if(!n||!r)return Cr(e,t);let i={...n};return e=>(i.red=wr(n.red,r.red,e),i.green=wr(n.green,r.green,e),i.blue=wr(n.blue,r.blue,e),i.alpha=q(n.alpha,r.alpha,e),Zn.transform(i))},kr=new Set([`none`,`hidden`]);function Ar(e,t){return kr.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function jr(e,t){return n=>q(e,t,n)}function Mr(e){return typeof e==`number`?jr:typeof e==`string`?Ln(e)?Cr:K.test(e)?Or:Ir:Array.isArray(e)?Nr:typeof e==`object`?K.test(e)?Or:Pr:Cr}function Nr(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Mr(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Pr(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Mr(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Fr(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Ir=(e,t)=>{let n=br.createTransformer(t),r=hr(e),i=hr(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?kr.has(e)&&!i.values.length||kr.has(t)&&!r.values.length?Ar(e,t):Jt(Nr(Fr(r,i),i.values),n):(`${e}${t}`,Cr(e,t))};function Lr(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?q(e,t,n):Mr(e)(e,t)}var Rr=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>W.update(t,e),stop:()=>Dn(t),now:()=>On.isProcessing?On.timestamp:Mn.now()}},zr=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Br=2e4;function Vr(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Hr(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Vr(r),Br);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:Qt(i)}}var Ur=5;function Wr(e,t,n){let r=Math.max(t-Ur,0);return $t(n-e(r),t-r)}var J={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Gr=.001;function Kr({duration:e=J.duration,bounce:t=J.bounce,velocity:n=J.velocity,mass:r=J.mass}){let i,a;J.maxDuration;let o=1-t;o=Bt(J.minDamping,J.maxDamping,o),e=Bt(J.minDuration,J.maxDuration,Qt(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Yr(t,o),c=Math.exp(-i);return Gr-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Yr(t**2,o);return(-i(t)+Gr>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Gr+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Jr(i,a,s);if(e=Zt(e),isNaN(c))return{stiffness:J.stiffness,damping:J.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var qr=12;function Jr(e,t,n){let r=n;for(let n=1;n<qr;n++)r-=e(r)/t(r);return r}function Yr(e,t){return e*Math.sqrt(1-t*t)}var Xr=[`duration`,`bounce`],Zr=[`stiffness`,`damping`,`mass`];function Qr(e,t){return t.some(t=>e[t]!==void 0)}function $r(e){let t={velocity:J.velocity,stiffness:J.stiffness,damping:J.damping,mass:J.mass,isResolvedFromDuration:!1,...e};if(!Qr(e,Zr)&&Qr(e,Xr))if(e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Bt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:J.mass,stiffness:i,damping:a}}else{let n=Kr(e);t={...t,...n,mass:J.mass},t.isResolvedFromDuration=!0}return t}function ei(e=J.visualDuration,t=J.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=$r({...n,velocity:-Qt(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=Qt(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?J.restSpeed.granular:J.restSpeed.default,i||=v?J.restDelta.granular:J.restDelta.default;let y;if(h<1){let e=Yr(_,h);y=t=>o-Math.exp(-h*_*t)*((m+h*_*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}else if(h===1)y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}let b={calculatedDuration:p&&d||null,next:e=>{let t=y(e);if(p)s.done=e>=d;else{let n=e===0?m:0;h<1&&(n=e===0?Zt(m):Wr(y,e,t));let a=Math.abs(n)<=r,c=Math.abs(o-t)<=i;s.done=a&&c}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Vr(b),Br),t=zr(t=>b.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return b}ei.applyToOptions=e=>{let t=Hr(e,100,ei);return e.ease=t.ease,e.duration=Zt(t.duration),e.type=`keyframes`,e};function ti({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=ei({keyframes:[f.value,m(f.value)],velocity:Wr(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function ni(e,t,n){let r=[],i=n||Vt.mix||Lr,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Jt(Array.isArray(t)?t[n]||Kt:t,a)),r.push(a)}return r}function ri(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=ni(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=Yt(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Bt(e[0],e[a-1],t)):l}function ii(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=Yt(0,t,r);e.push(q(n,1,i))}}function ai(e){let t=[0];return ii(t,e.length-1),t}function oi(e,t){return e.map(e=>e*t)}function si(e,t){return e.map(()=>t||gn).splice(0,e.length-1)}function ci({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=_n(r)?r.map(xn):xn(r),a={done:!1,value:t[0]},o=ri(oi(n&&n.length===t.length?n:ai(t),e),t,{ease:Array.isArray(i)?i:si(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var li=e=>e!==null;function ui(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(li),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var di={decay:ti,inertia:ti,tween:ci,keyframes:ci,spring:ei};function fi(e){typeof e.type==`string`&&(e.type=di[e.type])}var pi=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},mi=e=>e/100,hi=class extends pi{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Mn.now()&&this.tick(Mn.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},Nn.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;fi(e);let{type:t=ci,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||ci;s!==ci&&typeof o[0]!=`number`&&(this.mixKeyframes=Jt(mi,Lr(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Vr(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Bt(0,1,n)*o}let b=_?{done:!1,value:l[0]}:y.next(v);i&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==ti&&(b.value=ui(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return Qt(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Qt(e)}get time(){return Qt(this.currentTime)}set time(e){e=Zt(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Mn.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Qt(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Rr,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Mn.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,Nn.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function gi(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var _i=e=>e*180/Math.PI,vi=e=>bi(_i(Math.atan2(e[1],e[0]))),yi={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:vi,rotateZ:vi,skewX:e=>_i(Math.atan(e[1])),skewY:e=>_i(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},bi=e=>(e%=360,e<0&&(e+=360),e),xi=vi,Si=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ci=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),wi={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Si,scaleY:Ci,scale:e=>(Si(e)+Ci(e))/2,rotateX:e=>bi(_i(Math.atan2(e[6],e[5]))),rotateY:e=>bi(_i(Math.atan2(-e[2],e[0]))),rotateZ:xi,rotate:xi,skewX:e=>_i(Math.atan(e[4])),skewY:e=>_i(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Ti(e){return e.includes(`scale`)?1:0}function Ei(e,t){if(!e||e===`none`)return Ti(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=wi,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=yi,i=t}if(!i)return Ti(t);let a=r[t],o=i[1].split(`,`).map(Oi);return typeof a==`function`?a(o):o[a]}var Di=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Ei(n,t)};function Oi(e){return parseFloat(e.trim())}var ki=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Ai=(()=>new Set(ki))(),ji=e=>e===Bn||e===G,Mi=new Set([`x`,`y`,`z`]),Ni=ki.filter(e=>!Mi.has(e));function Pi(e){let t=[];return Ni.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var Fi={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Ei(t,`x`),y:(e,{transform:t})=>Ei(t,`y`)};Fi.translateX=Fi.x,Fi.translateY=Fi.y;var Ii=new Set,Li=!1,Ri=!1,zi=!1;function Bi(){if(Ri){let e=Array.from(Ii).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Pi(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Ri=!1,Li=!1,Ii.forEach(e=>e.complete(zi)),Ii.clear()}function Vi(){Ii.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ri=!0)})}function Hi(){zi=!0,Vi(),Bi(),zi=!1}var Ui=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Ii.add(this),Li||(Li=!0,W.read(Vi),W.resolveKeyframes(Bi))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}gi(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ii.delete(this)}cancel(){this.state===`scheduled`&&(Ii.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Wi=e=>e.startsWith(`--`);function Gi(e,t,n){Wi(t)?e.style.setProperty(t,n):e.style[t]=n}var Ki=Gt(()=>window.ScrollTimeline!==void 0),qi={};function Ji(e,t){let n=Gt(e);return()=>qi[t]??n()}var Yi=Ji(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Xi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Zi={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Xi([0,.65,.55,1]),circOut:Xi([.55,0,1,.45]),backIn:Xi([.31,.01,.66,-.59]),backOut:Xi([.33,1.53,.69,.99])};function Qi(e,t){if(e)return typeof e==`function`?Yi()?zr(e,t):`ease-out`:vn(e)?Xi(e):Array.isArray(e)?e.map(e=>Qi(e,t)||Zi.easeOut):Zi[e]}function $i(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Qi(s,i);Array.isArray(d)&&(u.easing=d),Cn.value&&Nn.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return Cn.value&&p.finished.finally(()=>{Nn.waapi--}),p}function ea(e){return typeof e==`function`&&`applyToOptions`in e}function ta({type:e,...t}){return ea(e)&&Yi()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var na=class extends pi{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=ta(e);this.animation=$i(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=ui(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):Gi(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Qt(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Qt(e)}get time(){return Qt(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Zt(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Ki()?(this.animation.timeline=e,Kt):t(this)}},ra={anticipate:dn,backInOut:un,circInOut:pn};function ia(e){return e in ra}function aa(e){typeof e.ease==`string`&&ia(e.ease)&&(e.ease=ra[e.ease])}var oa=10,sa=class extends na{constructor(e){aa(e),fi(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new hi({...a,autoplay:!1}),s=Math.max(oa,Mn.now()-this.startTime),c=Bt(0,oa,s-oa);t.setWithVelocity(o.sample(Math.max(0,s-c)).value,o.sample(s).value,c),o.stop()}},ca=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(br.test(e)||e===`0`)&&!e.startsWith(`url(`));function la(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function ua(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=ca(i,t),s=ca(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:la(e)||(n===`spring`||ea(n))&&r}function da(e){e.duration=0,e.type=`keyframes`}var fa=new Set([`opacity`,`clipPath`,`filter`,`transform`]),pa=Gt(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function ma(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:s,transformTemplate:c}=t.owner.getProps();return pa()&&n&&fa.has(n)&&(n!==`transform`||!c)&&!s&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var ha=40,ga=class extends pi{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Mn.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||Ui)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Mn.now(),ua(e,i,a,o)||((Vt.instantAnimations||!s)&&l?.(ui(e,n,t)),e[0]=e[e.length-1],da(n),n.repeat=0);let u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>ha?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!c&&ma(u),f=u.motionValue?.owner?.current,p=d?new sa({...u,element:f}):new hi(u);p.finished.then(()=>{this.notifyFinished()}).catch(Kt),this.pendingTimeline&&=(this.stopTimeline=p.attachTimeline(this.pendingTimeline),void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Hi()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function _a(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var va=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ya(e){let t=va.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function ba(e,t,n=1){`${e}`;let[r,i]=ya(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Ht(e)?parseFloat(e):e}return Ln(i)?ba(i,t,n+1):i}var xa={type:`spring`,stiffness:500,damping:25,restSpeed:10},Sa=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Ca={type:`keyframes`,duration:.8},wa={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Ta=(e,{keyframes:t})=>t.length>2?Ca:Ai.has(e)?e.startsWith(`scale`)?Sa(t[1]):xa:wa,Ea=e=>e!==null;function Da(e,{repeat:t,repeatType:n=`loop`},r){let i=e.filter(Ea),a=t&&n!==`loop`&&t%2==1?0:i.length-1;return!a||r===void 0?i[a]:r}function Oa(e,t){return e?.[t]??e?.default??e}function ka({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:l,...u}){return!!Object.keys(u).length}var Aa=(e,t,n,r={},i,a)=>o=>{let s=Oa(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=Zt(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};ka(s)||Object.assign(u,Ta(e,u)),u.duration&&=Zt(u.duration),u.repeatDelay&&=Zt(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(da(u),u.delay===0&&(d=!0)),(Vt.instantAnimations||Vt.skipAnimations)&&(d=!0,da(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Da(u.keyframes,s);if(e!==void 0){W.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new hi(u):new ga(u)};function ja(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Ma(e,t,n,r){if(typeof t==`function`){let[i,a]=ja(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=ja(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Na(e,t,n){let r=e.getProps();return Ma(r,t,n===void 0?r.custom:n,e)}var Pa=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...ki]),Fa=30,Ia=e=>!isNaN(parseFloat(e)),La={current:void 0},Ra=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Mn.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Mn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Ia(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Xt);let n=this.events[e].add(t);return e===`change`?()=>{n(),W.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return La.current&&La.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Mn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Fa)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Fa);return $t(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function za(e,t){return new Ra(e,t)}var Ba=e=>Array.isArray(e);function Va(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,za(n))}function Ha(e){return Ba(e)?e[e.length-1]||0:e}function Ua(e,t){let{transitionEnd:n={},transition:r={},...i}=Na(e,t)||{};for(let t in i={...i,...n},i)Va(e,t,Ha(i[t]))}var Wa=e=>!!(e&&e.getVelocity);function Ga(e){return!!(Wa(e)&&e.add)}function Ka(e,t){let n=e.getValue(`willChange`);if(Ga(n))return n.add(t);if(!n&&Vt.WillChange){let n=new Vt.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function qa(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Ja=`data-`+qa(`framerAppearId`);function Ya(e){return e.props[Ja]}function Xa({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Za(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);let c=[],l=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||l&&Xa(l,t))continue;let o={delay:n,...Oa(a||{},t)},u=r.get();if(u!==void 0&&!r.isAnimating&&!Array.isArray(i)&&i===u&&!o.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){let n=Ya(e);if(n){let e=window.MotionHandoffAnimation(n,t,W);e!==null&&(o.startTime=e,d=!0)}}Ka(e,t),r.start(Aa(t,r,i,e.shouldReduceMotion&&Pa.has(t)?{type:!1}:o,e,d));let f=r.animation;f&&c.push(f)}return o&&Promise.all(c).then(()=>{W.update(()=>{o&&Ua(e,o)})}),c}function Qa(e,t,n={}){let r=Na(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Za(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return $a(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function $a(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(Qa(c,t,{...o,delay:n+(typeof r==`function`?0:r)+_a(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function eo(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Qa(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Qa(e,t,n);else{let i=typeof t==`function`?Na(e,t,n.custom):t;r=Promise.all(Za(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var to={test:e=>e===`auto`,parse:e=>e},no=e=>t=>t.test(e),ro=[Bn,G,nr,tr,ir,rr,to],io=e=>ro.find(no(e));function ao(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||Wt(e)}var oo=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function so(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Wn)||[];if(!r)return e;let i=n.replace(r,``),a=oo.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var co=/\b([a-z-]*)\(.*?\)/gu,lo={...br,getAnimatableNone:e=>{let t=e.match(co);return t?t.map(so).join(` `):e}},uo={...Bn,transform:Math.round},fo={borderWidth:G,borderTopWidth:G,borderRightWidth:G,borderBottomWidth:G,borderLeftWidth:G,borderRadius:G,borderTopLeftRadius:G,borderTopRightRadius:G,borderBottomRightRadius:G,borderBottomLeftRadius:G,width:G,maxWidth:G,height:G,maxHeight:G,top:G,right:G,bottom:G,left:G,inset:G,insetBlock:G,insetBlockStart:G,insetBlockEnd:G,insetInline:G,insetInlineStart:G,insetInlineEnd:G,padding:G,paddingTop:G,paddingRight:G,paddingBottom:G,paddingLeft:G,paddingBlock:G,paddingBlockStart:G,paddingBlockEnd:G,paddingInline:G,paddingInlineStart:G,paddingInlineEnd:G,margin:G,marginTop:G,marginRight:G,marginBottom:G,marginLeft:G,marginBlock:G,marginBlockStart:G,marginBlockEnd:G,marginInline:G,marginInlineStart:G,marginInlineEnd:G,fontSize:G,backgroundPositionX:G,backgroundPositionY:G,rotate:tr,rotateX:tr,rotateY:tr,rotateZ:tr,scale:Hn,scaleX:Hn,scaleY:Hn,scaleZ:Hn,skew:tr,skewX:tr,skewY:tr,distance:G,translateX:G,translateY:G,translateZ:G,x:G,y:G,z:G,perspective:G,transformPerspective:G,opacity:Vn,originX:ar,originY:ar,originZ:G,zIndex:uo,fillOpacity:Vn,strokeOpacity:Vn,numOctaves:uo},po={...fo,color:K,backgroundColor:K,outlineColor:K,fill:K,stroke:K,borderColor:K,borderTopColor:K,borderRightColor:K,borderBottomColor:K,borderLeftColor:K,filter:lo,WebkitFilter:lo},mo=e=>po[e];function ho(e,t){let n=mo(e);return n!==lo&&(n=br),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var go=new Set([`auto`,`none`,`0`]);function _o(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!go.has(t)&&hr(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=ho(n,i)}var vo=class extends Ui{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Ln(r))){let i=ba(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Pa.has(n)||e.length!==2)return;let[r,i]=e,a=io(r),o=io(i);if(zn(r)!==zn(i)&&Fi[n]){this.needsMeasurement=!0;return}if(a!==o)if(ji(a)&&ji(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Fi[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||ao(e[t]))&&n.push(t);n.length&&_o(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Fi[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Fi[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function yo(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var bo=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function xo(e){return Ut(e)&&`offsetHeight`in e}var{schedule:So,cancel:Co}=En(queueMicrotask,!1),wo={x:!1,y:!1};function To(){return wo.x||wo.y}function Eo(e){return e===`x`||e===`y`?wo[e]?null:(wo[e]=!0,()=>{wo[e]=!1}):wo.x||wo.y?null:(wo.x=wo.y=!0,()=>{wo.x=wo.y=!1})}function Do(e,t){let n=yo(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Oo(e){return!(e.pointerType===`touch`||To())}function ko(e,t,n={}){let[r,i,a]=Do(e,n),o=e=>{if(!Oo(e))return;let{target:n}=e,r=t(n,e);if(typeof r!=`function`||!n)return;let a=e=>{Oo(e)&&(r(e),n.removeEventListener(`pointerleave`,a))};n.addEventListener(`pointerleave`,a,i)};return r.forEach(e=>{e.addEventListener(`pointerenter`,o,i)}),a}var Ao=(e,t)=>t?e===t?!0:Ao(e,t.parentElement):!1,jo=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Mo=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function No(e){return Mo.has(e.tagName)||e.isContentEditable===!0}var Po=new WeakSet;function Fo(e){return t=>{t.key===`Enter`&&e(t)}}function Io(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Lo=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Fo(()=>{if(Po.has(n))return;Io(n,`down`);let e=Fo(()=>{Io(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Io(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Ro(e){return jo(e)&&!To()}function zo(e,t,n={}){let[r,i,a]=Do(e,n),o=e=>{let r=e.currentTarget;if(!Ro(e))return;Po.add(r);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),Po.has(r)&&Po.delete(r),Ro(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Ao(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),xo(e)&&(e.addEventListener(`focus`,e=>Lo(e,i)),!No(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Bo(e){return Ut(e)&&`ownerSVGElement`in e}function Vo(e){return Bo(e)&&e.tagName===`svg`}var Ho=[...ro,K,br],Uo=e=>Ho.find(no(e)),Wo=()=>({translate:0,scale:1,origin:0,originPoint:0}),Go=()=>({x:Wo(),y:Wo()}),Ko=()=>({min:0,max:0}),qo=()=>({x:Ko(),y:Ko()}),Jo={current:null},Yo={current:!1},Xo=typeof window<`u`;function Zo(){if(Yo.current=!0,Xo)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Jo.current=e.matches;e.addEventListener(`change`,t),t()}else Jo.current=!1}var Qo=new WeakMap;function $o(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function es(e){return typeof e==`string`||Array.isArray(e)}var ts=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],ns=[`initial`,...ts];function rs(e){return $o(e.animate)||ns.some(t=>es(e[t]))}function is(e){return!!(rs(e)||e.variants)}function as(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Wa(i))e.addValue(r,i);else if(Wa(a))e.addValue(r,za(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,za(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var os=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],ss={};function cs(e){ss=e}function ls(){return ss}var us=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ui,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Mn.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,W.render(this.render,!1,!0))};let{latestValues:s,renderState:c}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!i,this.isControllingVariants=rs(t),this.isVariantNode=is(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in u){let t=u[e];s[e]!==void 0&&Wa(t)&&t.set(s[e])}}mount(e){this.current=e,Qo.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Yo.current||Zo(),this.shouldReduceMotion=Jo.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in this.projection&&this.projection.unmount(),Dn(this.notifyUpdate),Dn(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let n=Ai.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&W.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in ss){let t=ss[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):qo()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<os.length;t++){let n=os[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=as(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=za(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Ht(n)||Wt(n))?n=parseFloat(n):!Uo(n)&&br.test(t)&&(n=ho(e,t)),this.setBaseTarget(e,Wa(n)?n.get():n)),Wa(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Ma(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Wa(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Xt),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){So.render(this.render)}},ds=class extends us{constructor(){super(...arguments),this.KeyframeResolver=vo}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Wa(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},fs=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function ps({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function ms({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function hs(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function gs(e){return e===void 0||e===1}function _s({scale:e,scaleX:t,scaleY:n}){return!gs(e)||!gs(t)||!gs(n)}function vs(e){return _s(e)||ys(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ys(e){return bs(e.x)||bs(e.y)}function bs(e){return e&&e!==`0%`}function xs(e,t,n){return n+t*(e-n)}function Ss(e,t,n,r,i){return i!==void 0&&(e=xs(e,i,r)),xs(e,n,r)+t}function Cs(e,t=0,n=1,r,i){e.min=Ss(e.min,t,n,r,i),e.max=Ss(e.max,t,n,r,i)}function ws(e,{x:t,y:n}){Cs(e.x,t.translate,t.scale,t.originPoint),Cs(e.y,n.translate,n.scale,n.originPoint)}var Ts=.999999999999,Es=1.0000000000001;function Ds(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&As(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,ws(e,o)),r&&vs(a.latestValues)&&As(e,a.latestValues))}t.x<Es&&t.x>Ts&&(t.x=1),t.y<Es&&t.y>Ts&&(t.y=1)}function Os(e,t){e.min+=t,e.max+=t}function ks(e,t,n,r,i=.5){Cs(e,t,n,q(e.min,e.max,i),r)}function As(e,t){ks(e.x,t.x,t.scaleX,t.scale,t.originX),ks(e.y,t.y,t.scaleY,t.scale,t.originY)}function js(e,t){return ps(hs(e.getBoundingClientRect(),t))}function Ms(e,t,n){let r=js(e,n),{scroll:i}=t;return i&&(Os(r.x,i.offset.x),Os(r.y,i.offset.y)),r}var Ns={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Ps=ki.length;function Fs(e,t,n){let r=``,i=!0;for(let a=0;a<Ps;a++){let o=ki[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=bo(s,fo[o]);if(!c){i=!1;let t=Ns[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Is(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Ai.has(e)){o=!0;continue}else if(Fn(e)){i[e]=n;continue}else{let t=bo(n,fo[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Fs(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Ls(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Rs(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var zs={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(G.test(e))e=parseFloat(e);else return e;return`${Rs(e,t.target.x)}% ${Rs(e,t.target.y)}%`}},Bs={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=br.parse(e);if(i.length>5)return r;let a=br.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=q(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Vs={borderRadius:{...zs,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:zs,borderTopRightRadius:zs,borderBottomLeftRadius:zs,borderBottomRightRadius:zs,boxShadow:Bs};function Hs(e,{layout:t,layoutId:n}){return Ai.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Vs[e]||e===`opacity`)}function Us(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Wa(r[t])||i&&Wa(i[t])||Hs(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Ws(e){return window.getComputedStyle(e)}var Gs=class extends ds{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Ls}readValueFromInstance(e,t){if(Ai.has(t))return this.projection?.isProjecting?Ti(t):Di(e,t);{let n=Ws(e),r=(Fn(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return js(e,t)}build(e,t,n){Is(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Us(e,t,n)}},Ks={offset:`stroke-dashoffset`,array:`stroke-dasharray`},qs={offset:`strokeDashoffset`,array:`strokeDasharray`};function Js(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Ks:qs;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Ys=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Xs(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Is(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Ys)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Js(d,i,a,o,!1)}var Zs=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Qs=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function $s(e,t,n,r){for(let n in Ls(e,t,void 0,r),t.attrs)e.setAttribute(Zs.has(n)?n:qa(n),t.attrs[n])}function ec(e,t,n){let r=Us(e,t,n);for(let n in e)if(Wa(e[n])||Wa(t[n])){let t=ki.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var tc=class extends ds{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=qo}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ai.has(t)){let e=mo(t);return e&&e.default||0}return t=Zs.has(t)?t:qa(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return ec(e,t,n)}build(e,t,n){Xs(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){$s(e,t,n,r)}mount(e){this.isSVGTag=Qs(e.tagName),super.mount(e)}},nc=ns.length;function rc(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&rc(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<nc;n++){let r=ns[n],i=e.props[r];(es(i)||i===!1)&&(t[r]=i)}return t}function ic(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var ac=[...ts].reverse(),oc=ts.length;function sc(e){return t=>Promise.all(t.map(({animation:t,options:n})=>eo(e,t,n)))}function cc(e){let t=sc(e),n=dc(),r=!0,i=t=>(n,r)=>{let i=Na(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(n){t=n(e)}function o(a){let{props:o}=e,s=rc(e.parent)||{},c=[],l=new Set,u={},d=1/0;for(let t=0;t<oc;t++){let f=ac[t],p=n[f],m=o[f]===void 0?s[f]:o[f],h=es(m),g=f===a?p.isActive:null;g===!1&&(d=t);let _=m===s[f]&&m!==o[f]&&h;if(_&&r&&e.manuallyAnimateOnMount&&(_=!1),p.protectedKeys={...u},!p.isActive&&g===null||!m&&!p.prevProp||$o(m)||typeof m==`boolean`)continue;let v=lc(p.prevProp,m),y=v||f===a&&p.isActive&&!_&&h||t>d&&h,b=!1,x=Array.isArray(m)?m:[m],S=x.reduce(i(f),{});g===!1&&(S={});let{prevResolvedValues:C={}}=p,w={...C,...S},T=t=>{y=!0,l.has(t)&&(b=!0,l.delete(t)),p.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in w){let t=S[e],n=C[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Ba(t)&&Ba(n)?!ic(t,n):t!==n,r?t==null?l.add(e):T(e):t!==void 0&&l.has(e)?T(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=S,p.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(y=!1);let E=_&&v;y&&(!E||b)&&c.push(...x.map(t=>{let n={type:f};if(typeof t==`string`&&r&&!E&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Na(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=_a(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(l.size){let t={};if(typeof o.initial!=`boolean`){let n=Na(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}l.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),c.push({animation:t})}let f=!!c.length;return r&&(o.initial===!1||o.initial===o.animate)&&!e.manuallyAnimateOnMount&&(f=!1),r=!1,f?t(c):Promise.resolve()}function s(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=o(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=dc()}}}function lc(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!ic(t,e):!1}function uc(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function dc(){return{animate:uc(!0),whileInView:uc(),whileHover:uc(),whileTap:uc(),whileDrag:uc(),whileFocus:uc(),exit:uc()}}function fc(e,t){e.min=t.min,e.max=t.max}function pc(e,t){fc(e.x,t.x),fc(e.y,t.y)}function mc(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var hc=1e-4,gc=1-hc,_c=1+hc,vc=.01,yc=0-vc,bc=0+vc;function xc(e){return e.max-e.min}function Sc(e,t,n){return Math.abs(e-t)<=n}function Cc(e,t,n,r=.5){e.origin=r,e.originPoint=q(t.min,t.max,e.origin),e.scale=xc(n)/xc(t),e.translate=q(n.min,n.max,e.origin)-e.originPoint,(e.scale>=gc&&e.scale<=_c||isNaN(e.scale))&&(e.scale=1),(e.translate>=yc&&e.translate<=bc||isNaN(e.translate))&&(e.translate=0)}function wc(e,t,n,r){Cc(e.x,t.x,n.x,r?r.originX:void 0),Cc(e.y,t.y,n.y,r?r.originY:void 0)}function Tc(e,t,n){e.min=n.min+t.min,e.max=e.min+xc(t)}function Ec(e,t,n){Tc(e.x,t.x,n.x),Tc(e.y,t.y,n.y)}function Dc(e,t,n){e.min=t.min-n.min,e.max=e.min+xc(t)}function Oc(e,t,n){Dc(e.x,t.x,n.x),Dc(e.y,t.y,n.y)}function kc(e,t,n,r,i){return e-=t,e=xs(e,1/n,r),i!==void 0&&(e=xs(e,1/i,r)),e}function Ac(e,t=0,n=1,r=.5,i,a=e,o=e){if(nr.test(t)&&(t=parseFloat(t),t=q(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=q(a.min,a.max,r);e===a&&(s-=t),e.min=kc(e.min,t,n,s,i),e.max=kc(e.max,t,n,s,i)}function jc(e,t,[n,r,i],a,o){Ac(e,t[n],t[r],t[i],t.scale,a,o)}var Mc=[`x`,`scaleX`,`originX`],Nc=[`y`,`scaleY`,`originY`];function Pc(e,t,n,r){jc(e.x,t,Mc,n?n.x:void 0,r?r.x:void 0),jc(e.y,t,Nc,n?n.y:void 0,r?r.y:void 0)}function Fc(e){return e.translate===0&&e.scale===1}function Ic(e){return Fc(e.x)&&Fc(e.y)}function Lc(e,t){return e.min===t.min&&e.max===t.max}function Rc(e,t){return Lc(e.x,t.x)&&Lc(e.y,t.y)}function zc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Bc(e,t){return zc(e.x,t.x)&&zc(e.y,t.y)}function Vc(e){return xc(e.x)/xc(e.y)}function Hc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Uc(e){return[e(`x`),e(`y`)]}function Wc(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Gc=[`TopLeft`,`TopRight`,`BottomLeft`,`BottomRight`],Kc=Gc.length,qc=e=>typeof e==`string`?parseFloat(e):e,Jc=e=>typeof e==`number`||G.test(e);function Yc(e,t,n,r,i,a){i?(e.opacity=q(0,n.opacity??1,Zc(r)),e.opacityExit=q(t.opacity??1,0,Qc(r))):a&&(e.opacity=q(t.opacity??1,n.opacity??1,r));for(let i=0;i<Kc;i++){let a=`border${Gc[i]}Radius`,o=Xc(t,a),s=Xc(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Jc(o)===Jc(s)?(e[a]=Math.max(q(qc(o),qc(s),r),0),(nr.test(s)||nr.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=q(t.rotate||0,n.rotate||0,r))}function Xc(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Zc=$c(0,.5,fn),Qc=$c(.5,.95,Kt);function $c(e,t,n){return r=>r<e?0:r>t?1:n(Yt(e,t,r))}function el(e,t,n){let r=Wa(e)?e:za(e);return r.start(Aa(``,r,t,n)),r.animation}function tl(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var nl=(e,t)=>e.depth-t.depth,rl=class{constructor(){this.children=[],this.isDirty=!1}add(e){Rt(this.children,e),this.isDirty=!0}remove(e){zt(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(nl),this.isDirty=!1,this.children.forEach(e)}};function il(e,t){let n=Mn.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Dn(r),e(a-t))};return W.setup(r,!0),()=>Dn(r)}function al(e){return Wa(e)?e.get():e}var ol=class{constructor(){this.members=[]}add(e){Rt(this.members,e),e.scheduleRender()}remove(e){if(zt(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t=this.members.findIndex(t=>e===t);if(t===0)return!1;let n;for(let e=t;e>=0;e--){let t=this.members[e];if(t.isPresent!==!1){n=t;break}}return n?(this.promote(n),!0):!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender();let r=n.options.layoutDependency,i=e.options.layoutDependency;r!==void 0&&i!==void 0&&r===i||(e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0));let{crossfade:a}=e.options;a===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}},sl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},cl={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},ll=[``,`X`,`Y`,`Z`],ul=1e3,dl=0;function fl(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function pl(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Ya(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,W,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&pl(r)}function ml({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=dl++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Cn.value&&(cl.nodes=cl.calculatedTargetDeltas=cl.calculatedProjections=0),this.nodes.forEach(_l),this.nodes.forEach(wl),this.nodes.forEach(Tl),this.nodes.forEach(vl),Cn.addProjectionMetrics&&Cn.addProjectionMetrics(cl)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new rl)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Xt),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Bo(t)&&!Vo(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;W.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=il(i,250),sl.hasAnimatedSinceResize&&(sl.hasAnimatedSinceResize=!1,this.nodes.forEach(Cl)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Ml,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Bc(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Oa(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||Cl(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Dn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(El),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&pl(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(bl);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(xl);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Sl),this.nodes.forEach(hl),this.nodes.forEach(gl)):this.nodes.forEach(xl),this.clearAllSnapshots();let e=Mn.now();On.delta=Bt(0,1e3/60,e-On.timestamp),On.timestamp=e,On.isProcessing=!0,kn.update.process(On),kn.preRender.process(On),kn.render.process(On),On.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,So.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yl),this.sharedNodes.forEach(Dl)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,W.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){W.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!xc(this.snapshot.measuredBox.x)&&!xc(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=qo(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Ic(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||vs(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Il(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return qo();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Rl))){let{scroll:e}=this.root;e&&(Os(t.x,e.offset.x),Os(t.y,e.offset.y))}return t}removeElementScroll(e){let t=qo();if(pc(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&pc(t,e),Os(t.x,i.offset.x),Os(t.y,i.offset.y))}return t}applyTransform(e,t=!1){let n=qo();pc(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&As(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),vs(r.latestValues)&&As(n,r.latestValues)}return vs(this.latestValues)&&As(n,this.latestValues),n}removeTransform(e){let t=qo();pc(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!vs(n.latestValues))continue;_s(n.latestValues)&&n.updateSnapshot();let r=qo();pc(r,n.measurePageBox()),Pc(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return vs(this.latestValues)&&Pc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==On.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=On.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=qo(),this.targetWithTransforms=qo()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Ec(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):pc(this.target,this.layout.layoutBox),ws(this.target,this.targetDelta)):pc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Cn.value&&cl.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||_s(this.parent.latestValues)||ys(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=qo(),this.relativeTargetOrigin=qo(),Oc(this.relativeTargetOrigin,t,n),pc(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===On.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;pc(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Ds(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=qo());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(mc(this.prevProjectionDelta.x,this.projectionDelta.x),mc(this.prevProjectionDelta.y,this.projectionDelta.y)),wc(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Hc(this.projectionDelta.x,this.prevProjectionDelta.x)||!Hc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Cn.value&&cl.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Go(),this.projectionDelta=Go(),this.projectionDeltaWithTransform=Go()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Go();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=qo(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(jl));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;Ol(a.x,e.x,n),Ol(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Oc(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Al(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Rc(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=qo(),pc(d,this.relativeTarget)),s&&(this.animationValues=i,Yc(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Dn(this.pendingAnimation),void 0),this.pendingAnimation=W.update(()=>{sl.hasAnimatedSinceResize=!0,Nn.layout++,this.motionValue||=za(0),this.currentAnimation=el(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Nn.layout--},onComplete:()=>{Nn.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ul),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Ll(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||qo();let t=xc(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=xc(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}pc(t,n),As(t,i),wc(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new ol),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&fl(`z`,e,r,this.animationValues);for(let t=0;t<ll.length;t++)fl(`rotate${ll[t]}`,e,r,this.animationValues),fl(`skew${ll[t]}`,e,r,this.animationValues);for(let t in e.render(),r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=al(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=al(t?.pointerEvents)||``),this.hasProjected&&!vs(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Wc(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;for(let t in e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit,Vs){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Vs[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?al(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(bl),this.root.sharedNodes.clear()}}}function hl(e){e.updateLayout()}function gl(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;i===`size`?Uc(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=xc(r);r.min=n[e].min,r.max=r.min+i}):Ll(i,t.layoutBox,n)&&Uc(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=xc(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Go();wc(o,n,t.layoutBox);let s=Go();a?wc(s,e.applyTransform(r,!0),t.measuredBox):wc(s,n,t.layoutBox);let c=!Ic(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=qo();Oc(o,t.layoutBox,i.layoutBox);let s=qo();Oc(s,n,a.layoutBox),Bc(o,s)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function _l(e){Cn.value&&cl.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function vl(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function yl(e){e.clearSnapshot()}function bl(e){e.clearMeasurements()}function xl(e){e.isLayoutDirty=!1}function Sl(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Cl(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function wl(e){e.resolveTargetDelta()}function Tl(e){e.calcProjection()}function El(e){e.resetSkewAndRotation()}function Dl(e){e.removeLeadSnapshot()}function Ol(e,t,n){e.translate=q(t.translate,0,n),e.scale=q(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function kl(e,t,n,r){e.min=q(t.min,n.min,r),e.max=q(t.max,n.max,r)}function Al(e,t,n,r){kl(e.x,t.x,n.x,r),kl(e.y,t.y,n.y,r)}function jl(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Ml={duration:.45,ease:[.4,0,.1,1]},Nl=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Pl=Nl(`applewebkit/`)&&!Nl(`chrome/`)?Math.round:Kt;function Fl(e){e.min=Pl(e.min),e.max=Pl(e.max)}function Il(e){Fl(e.x),Fl(e.y)}function Ll(e,t,n){return e===`position`||e===`preserve-aspect`&&!Sc(Vc(t),Vc(n),.2)}function Rl(e){return e!==e.root&&e.scroll?.wasRoot}var zl=ml({attachResizeListener:(e,t)=>tl(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Bl={current:void 0},Vl=ml({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Bl.current){let e=new zl({});e.mount(window),e.setOptions({layoutScroll:!0}),Bl.current=e}return Bl.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Hl=(0,B.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Ul(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Wl(...e){return t=>{let n=!1,r=e.map(e=>{let r=Ul(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Ul(e[t],null)}}}}function Gl(...e){return B.useCallback(Wl(...e),e)}var Kl=class extends B.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=xo(e)&&e.offsetWidth||0,r=xo(e)&&e.offsetHeight||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left,i.bottom=r-i.height-i.top}return null}componentDidUpdate(){}render(){return this.props.children}};function ql({children:e,isPresent:t,anchorX:n,anchorY:r,root:i}){let a=(0,B.useId)(),o=(0,B.useRef)(null),s=(0,B.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=(0,B.useContext)(Hl),l=Gl(o,e.props?.ref??e?.ref);return(0,B.useInsertionEffect)(()=>{let{width:e,height:l,top:u,left:d,right:f,bottom:p}=s.current;if(t||!o.current||!e||!l)return;let m=n===`left`?`left: ${d}`:`right: ${f}`,h=r===`bottom`?`bottom: ${p}`:`top: ${u}`;o.current.dataset.motionPopId=a;let g=document.createElement(`style`);c&&(g.nonce=c);let _=i??document.head;return _.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${m}px !important;
            ${h}px !important;
          }
        `),()=>{_.contains(g)&&_.removeChild(g)}},[t]),(0,H.jsx)(Kl,{isPresent:t,childRef:o,sizeRef:s,children:B.cloneElement(e,{ref:l})})}var Jl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Pt(Yl),d=(0,B.useId)(),f=!0,p=(0,B.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,B.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),B.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),o===`popLayout`&&(e=(0,H.jsx)(ql,{isPresent:n,anchorX:s,anchorY:c,root:l,children:e})),(0,H.jsx)(Lt.Provider,{value:p,children:e})};function Yl(){return new Map}function Xl(e=!0){let t=(0,B.useContext)(Lt);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,B.useId)();(0,B.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,B.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Zl=e=>e.key||``;function Ql(e){let t=[];return B.Children.forEach(e,e=>{(0,B.isValidElement)(e)&&t.push(e)}),t}var $l=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Xl(o),f=(0,B.useMemo)(()=>Ql(e),[e]),p=o&&!u?[]:f.map(Zl),m=(0,B.useRef)(!0),h=(0,B.useRef)(f),g=Pt(()=>new Map),_=(0,B.useRef)(new Set),[v,y]=(0,B.useState)(f),[b,x]=(0,B.useState)(f);It(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=Zl(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=Zl(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(Ql(e)),y(f),null}let{forceRender:C}=(0,B.useContext)(Nt);return(0,H.jsx)(H.Fragment,{children:b.map(e=>{let v=Zl(e),y=o&&!u?!1:f===b||p.includes(v);return(0,H.jsx)(Jl,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(_.current.add(v),g.has(v))g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},eu=(0,B.createContext)({strict:!1}),tu={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},nu=!1;function ru(){if(nu)return;let e={};for(let t in tu)e[t]={isEnabled:e=>tu[t].some(t=>!!e[t])};cs(e),nu=!0}function iu(){return ru(),ls()}function au(e){let t=iu();for(let n in e)t[n]={...t[n],...e[n]};cs(t)}var ou=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(`.`));function su(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||ou.has(e)}var cu=e=>!su(e);function lu(e){typeof e==`function`&&(cu=t=>t.startsWith(`on`)?!su(t):e(t))}try{lu((h(),a(D)).default)}catch{}function uu(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||(cu(i)||n===!0&&su(i)||!t&&!su(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var du=(0,B.createContext)({});function fu(e,t){if(rs(e)){let{initial:t,animate:n}=e;return{initial:t===!1||es(t)?t:void 0,animate:es(n)?n:void 0}}return e.inherit===!1?{}:t}function pu(e){let{initial:t,animate:n}=fu(e,(0,B.useContext)(du));return(0,B.useMemo)(()=>({initial:t,animate:n}),[mu(t),mu(n)])}function mu(e){return Array.isArray(e)?e.join(` `):e}var hu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function gu(e,t,n){for(let r in t)!Wa(t[r])&&!Hs(r,n)&&(e[r]=t[r])}function _u({transformTemplate:e},t){return(0,B.useMemo)(()=>{let n=hu();return Is(n,t,e),Object.assign({},n.vars,n.style)},[t])}function vu(e,t){let n=e.style||{},r={};return gu(r,n,e),Object.assign(r,_u(e,t)),r}function yu(e,t){let n={},r=vu(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var bu=()=>({...hu(),attrs:{}});function xu(e,t,n,r){let i=(0,B.useMemo)(()=>{let n=bu();return Xs(n,t,Qs(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};gu(t,e.style,e),i.style={...t,...i.style}}return i}var Su=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Cu(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Su.indexOf(e)>-1||/[A-Z]/u.test(e))}function wu(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Cu(e)?xu:yu)(t,r,i,e),c=uu(t,typeof e==`string`,a),l=e===B.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,B.useMemo)(()=>Wa(u)?u.get():u,[u]);return(0,B.createElement)(e,{...l,children:d})}function Tu({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Eu(n,r,i,e),renderState:t()}}function Eu(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=al(a[e]);let{initial:o,animate:s}=e,c=rs(e),l=is(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!$o(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Ma(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Du=e=>(t,n)=>{let r=(0,B.useContext)(du),i=(0,B.useContext)(Lt),a=()=>Tu(e,t,r,i);return n?a():Pt(a)},Ou=Du({scrapeMotionValuesFromProps:Us,createRenderState:hu}),ku=Du({scrapeMotionValuesFromProps:ec,createRenderState:bu}),Au=Symbol.for(`motionComponentSymbol`);function ju(e,t,n){let r=(0,B.useRef)(n);(0,B.useInsertionEffect)(()=>{r.current=n});let i=(0,B.useRef)(null);return(0,B.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var Mu=(0,B.createContext)({});function Nu(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Pu(e,t,n,r,i,a){let{visualElement:o}=(0,B.useContext)(du),s=(0,B.useContext)(eu),c=(0,B.useContext)(Lt),l=(0,B.useContext)(Hl).reducedMotion,u=(0,B.useRef)(null),d=(0,B.useRef)(!1);r||=s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:l,isSVG:a}),d.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));let f=u.current,p=(0,B.useContext)(Mu);f&&!f.projection&&i&&(f.type===`html`||f.type===`svg`)&&Fu(u.current,n,i,p);let m=(0,B.useRef)(!1);(0,B.useInsertionEffect)(()=>{f&&m.current&&f.update(n,c)});let h=n[Ja],g=(0,B.useRef)(!!h&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return It(()=>{d.current=!0,f&&(m.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),g.current&&f.animationState&&f.animationState.animateChanges())}),(0,B.useEffect)(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(h)}),!1),f.enteringChildren=void 0)}),f}function Fu(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Iu(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Nu(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:l})}function Iu(e){if(e)return e.options.allowProjection===!1?Iu(e.parent):e.projection}function Lu(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&au(r);let a=n?n===`svg`:Cu(e),o=a?ku:Ou;function s(n,s){let c,l={...(0,B.useContext)(Hl),...n,layoutId:Ru(n)},{isStatic:u}=l,d=pu(n),f=o(n,u);if(!u&&Ft){zu(l,r);let t=Bu(l);c=t.MeasureLayout,d.visualElement=Pu(e,f,l,i,t.ProjectionNode,a)}return(0,H.jsxs)(du.Provider,{value:d,children:[c&&d.visualElement?(0,H.jsx)(c,{visualElement:d.visualElement,...l}):null,wu(e,n,ju(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,B.forwardRef)(s);return c[Au]=e,c}function Ru({layoutId:e}){let t=(0,B.useContext)(Nt).id;return t&&e!==void 0?t+`-`+e:e}function zu(e,t){(0,B.useContext)(eu).strict}function Bu(e){let{drag:t,layout:n}=iu();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Vu(e,t){if(typeof Proxy>`u`)return Lu;let n=new Map,r=(n,r)=>Lu(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Lu(a,void 0,e,t)),n.get(a))})}var Hu=(e,t)=>t.isSVG??Cu(e)?new tc(t):new Gs(t,{allowProjection:e!==B.Fragment}),Uu=class extends fs{constructor(e){super(e),e.animationState||=cc(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();$o(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Wu=0,Gu={animation:{Feature:Uu},exit:{Feature:class extends fs{constructor(){super(...arguments),this.id=Wu++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Ku(e){return{point:{x:e.pageX,y:e.pageY}}}var qu=e=>t=>jo(t)&&e(t,Ku(t));function Ju(e,t,n,r){return tl(e,t,qu(n),r)}var Yu=({current:e})=>e?e.ownerDocument.defaultView:null,Xu=(e,t)=>Math.abs(e-t);function Zu(e,t){let n=Xu(e.x,t.x),r=Xu(e.y,t.y);return Math.sqrt(n**2+r**2)}var Qu=new Set([`auto`,`scroll`]),$u=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=nd(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Zu(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=On;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=ed(t,this.transformPagePoint),W.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=nd(e.type===`pointercancel`?this.lastMoveEventInfo:ed(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!jo(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=ed(Ku(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=On;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,nd(s,this.history)),this.removeListeners=Jt(Ju(this.contextWindow,`pointermove`,this.handlePointerMove),Ju(this.contextWindow,`pointerup`,this.handlePointerUp),Ju(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(Qu.has(e.overflowX)||Qu.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener(`scroll`,this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),W.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Dn(this.updatePoint)}};function ed(e,t){return t?{point:t(e.point)}:e}function td(e,t){return{x:e.x-t.x,y:e.y-t.y}}function nd({point:e},t){return{point:e,delta:td(e,id(t)),offset:td(e,rd(t)),velocity:ad(t,.1)}}function rd(e){return e[0]}function id(e){return e[e.length-1]}function ad(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=id(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Zt(t)));)n--;if(!r)return{x:0,y:0};let a=Qt(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function od(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?q(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?q(n,e,r.max):Math.min(e,n)),e}function sd(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function cd(e,{top:t,left:n,bottom:r,right:i}){return{x:sd(e.x,n,i),y:sd(e.y,t,r)}}function ld(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function ud(e,t){return{x:ld(e.x,t.x),y:ld(e.y,t.y)}}function dd(e,t){let n=.5,r=xc(e),i=xc(t);return i>r?n=Yt(t.min,t.max-r,e.min):r>i&&(n=Yt(e.min,e.max-i,t.min)),Bt(0,1,n)}function fd(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var pd=.35;function md(e=pd){return e===!1?e=0:e===!0&&(e=pd),{x:hd(e,`left`,`right`),y:hd(e,`top`,`bottom`)}}function hd(e,t,n){return{min:gd(e,t),max:gd(e,n)}}function gd(e,t){return typeof e==`number`?e:e[t]||0}var _d=new WeakMap,vd=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=qo(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t?(this.stopAnimation(),this.snapToCursor(Ku(e).point)):this.pauseAnimation()},a=(e,t)=>{this.stopAnimation();let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Eo(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Uc(e=>{let t=this.getAxisMotionValue(e).get()||0;if(nr.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=xc(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&W.postRender(()=>i(e,t)),Ka(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=bd(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&a(e,t)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Uc(e=>this.getAnimationState(e)===`paused`&&this.getAxisMotionValue(e).animation?.play()),{dragSnapToOrigin:l}=this.getProps();this.panSession=new $u(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Yu(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&W.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!yd(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=od(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Nu(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=cd(n.layoutBox,e):this.constraints=!1,this.elastic=md(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&Uc(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=fd(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Nu(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Ms(n,r.root,this.visualElement.getTransformPagePoint()),a=ud(r.layout.layoutBox,i);if(t){let e=t(ms(a));this.hasMutatedConstraints=!!e,e&&(a=ps(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Uc(o=>{if(!yd(o,t,this.currentDirection))return;let c=s&&s[o]||{};a&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Ka(this.visualElement,e),n.start(Aa(e,n,0,t,this.visualElement,!1))}stopAnimation(){Uc(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Uc(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Uc(t=>{let{drag:n}=this.getProps();if(!yd(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-q(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Nu(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Uc(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=dd({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Uc(t=>{if(!yd(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(q(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;_d.set(this.visualElement,this);let e=this.visualElement.current,t=Ju(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&No(i);n&&r&&!a&&this.start(t)}),n=()=>{let{dragConstraints:e}=this.getProps();Nu(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener(`measure`,n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),W.read(n);let a=tl(window,`resize`,()=>this.scalePositionWithinConstraints()),o=r.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Uc(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{a(),t(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=pd,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function yd(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function bd(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var xd=class extends fs{constructor(e){super(e),this.removeGroupControls=Kt,this.removeListeners=Kt,this.controls=new vd(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Kt}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Sd=e=>(t,n)=>{e&&W.postRender(()=>e(t,n))},Cd=class extends fs{constructor(){super(...arguments),this.removePointerDownListener=Kt}onPointerDown(e){this.session=new $u(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Yu(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Sd(e),onStart:Sd(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&W.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Ju(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},wd=!1,Td=class extends B.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),wd&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),sl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),wd=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||W.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),So.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;wd=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Ed(e){let[t,n]=Xl(),r=(0,B.useContext)(Nt);return(0,H.jsx)(Td,{...e,layoutGroup:r,switchLayoutGroup:(0,B.useContext)(Mu),isPresent:t,safeToRemove:n})}var Dd={pan:{Feature:Cd},drag:{Feature:xd,ProjectionNode:Vl,MeasureLayout:Ed}};function Od(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&W.postRender(()=>i(t,Ku(t)))}var kd=class extends fs{mount(){let{current:e}=this.node;e&&(this.unmount=ko(e,(e,t)=>(Od(this.node,t,`Start`),e=>Od(this.node,e,`End`))))}unmount(){}},Ad=class extends fs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Jt(tl(this.node.current,`focus`,()=>this.onFocus()),tl(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function jd(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&W.postRender(()=>i(t,Ku(t)))}var Md=class extends fs{mount(){let{current:e}=this.node;e&&(this.unmount=zo(e,(e,t)=>(jd(this.node,t,`Start`),(e,{success:t})=>jd(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}},Nd=new WeakMap,Pd=new WeakMap,Fd=e=>{let t=Nd.get(e.target);t&&t(e)},Id=e=>{e.forEach(Fd)};function Ld({root:e,...t}){let n=e||document;Pd.has(n)||Pd.set(n,{});let r=Pd.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Id,{root:e,...t})),r[i]}function Rd(e,t,n){let r=Ld(t);return Nd.set(e,n),r.observe(e),()=>{Nd.delete(e),r.unobserve(e)}}var zd={some:0,all:1},Bd=class extends fs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:zd[r]};return Rd(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Vd(e,t))&&this.startObserver()}unmount(){}};function Vd({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Hd={inView:{Feature:Bd},tap:{Feature:Md},focus:{Feature:Ad},hover:{Feature:kd}},Ud={layout:{ProjectionNode:Vl,MeasureLayout:Ed}},Wd=Vu({...Gu,...Hd,...Dd,...Ud},Hu),Gd=N(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),Kd=N(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),qd=N(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),Jd=N(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),Yd=N(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),Xd=N(`circle-arrow-right`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m12 16 4-4-4-4`,key:`1i9zcv`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}]]),Zd=N(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),Qd=N(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),$d=N(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),ef=N(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),tf=N(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),nf=N(`minimize-2`,[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]),rf=N(`octagon-x`,[[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,key:`2d38gg`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),af=!1;function of(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function sf(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var cf=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!af:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(sf(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=of(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),lf=`-ms-`,uf=`-moz-`,Y=`-webkit-`,df=`comm`,ff=`rule`,pf=`decl`,mf=`@import`,hf=`@keyframes`,gf=`@layer`,_f=Math.abs,vf=String.fromCharCode,yf=Object.assign;function bf(e,t){return wf(e,0)^45?(((t<<2^wf(e,0))<<2^wf(e,1))<<2^wf(e,2))<<2^wf(e,3):0}function xf(e){return e.trim()}function Sf(e,t){return(e=t.exec(e))?e[0]:e}function X(e,t,n){return e.replace(t,n)}function Cf(e,t){return e.indexOf(t)}function wf(e,t){return e.charCodeAt(t)|0}function Tf(e,t,n){return e.slice(t,n)}function Ef(e){return e.length}function Df(e){return e.length}function Of(e,t){return t.push(e),e}function kf(e,t){return e.map(t).join(``)}var Af=1,jf=1,Mf=0,Nf=0,Pf=0,Ff=``;function If(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Af,column:jf,length:o,return:``}}function Lf(e,t){return yf(If(``,null,null,``,null,null,0),e,{length:-e.length},t)}function Rf(){return Pf}function zf(){return Pf=Nf>0?wf(Ff,--Nf):0,jf--,Pf===10&&(jf=1,Af--),Pf}function Bf(){return Pf=Nf<Mf?wf(Ff,Nf++):0,jf++,Pf===10&&(jf=1,Af++),Pf}function Vf(){return wf(Ff,Nf)}function Hf(){return Nf}function Uf(e,t){return Tf(Ff,e,t)}function Wf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gf(e){return Af=jf=1,Mf=Ef(Ff=e),Nf=0,[]}function Kf(e){return Ff=``,e}function qf(e){return xf(Uf(Nf-1,Xf(e===91?e+2:e===40?e+1:e)))}function Jf(e){for(;(Pf=Vf())&&Pf<33;)Bf();return Wf(e)>2||Wf(Pf)>3?``:` `}function Yf(e,t){for(;--t&&Bf()&&!(Pf<48||Pf>102||Pf>57&&Pf<65||Pf>70&&Pf<97););return Uf(e,Hf()+(t<6&&Vf()==32&&Bf()==32))}function Xf(e){for(;Bf();)switch(Pf){case e:return Nf;case 34:case 39:e!==34&&e!==39&&Xf(Pf);break;case 40:e===41&&Xf(e);break;case 92:Bf();break}return Nf}function Zf(e,t){for(;Bf()&&e+Pf!==57&&!(e+Pf===84&&Vf()===47););return`/*`+Uf(t,Nf-1)+`*`+vf(e===47?e:Bf())}function Qf(e){for(;!Wf(Vf());)Bf();return Uf(e,Nf)}function $f(e){return Kf(ep(``,null,null,null,[``],e=Gf(e),0,[0],e))}function ep(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Bf()){case 40:if(m!=108&&wf(C,d-1)==58){Cf(C+=X(qf(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=qf(v);break;case 9:case 10:case 13:case 32:C+=Jf(m);break;case 92:C+=Yf(Hf()-1,7);continue;case 47:switch(Vf()){case 42:case 47:Of(np(Zf(Bf(),Hf()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=Ef(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=X(C,/\f/g,``)),p>0&&Ef(C)-d&&Of(p>32?rp(C+`;`,r,n,d-1):rp(X(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(Of(S=tp(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)ep(C,t,S,S,b,a,d,s,x);else switch(f===99&&wf(C,3)===110?100:f){case 100:case 108:case 109:case 115:ep(e,S,S,r&&Of(tp(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:ep(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Ef(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&zf()==125)continue}switch(C+=vf(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Ef(C)-1)*_,_=1;break;case 64:Vf()===45&&(C+=qf(Bf())),f=Vf(),u=d=Ef(y=C+=Qf(Hf())),v++;break;case 45:m===45&&Ef(C)==2&&(h=0)}}return a}function tp(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=Df(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=Tf(e,d+1,d=_f(h=o[m])),y=e;_<p;++_)(y=xf(h>0?f[_]+` `+v:X(v,/&\f/g,f[_])))&&(c[g++]=y);return If(e,t,n,i===0?ff:s,c,l,u)}function np(e,t,n){return If(e,t,n,df,vf(Rf()),Tf(e,2,-2),0)}function rp(e,t,n,r){return If(e,t,n,pf,Tf(e,0,r),Tf(e,r+1,-1),r)}function ip(e,t){for(var n=``,r=Df(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function ap(e,t,n,r){switch(e.type){case gf:if(e.children.length)break;case mf:case pf:return e.return=e.return||e.value;case df:return``;case hf:return e.return=e.value+`{`+ip(e.children,r)+`}`;case ff:e.value=e.props.join(`,`)}return Ef(n=ip(e.children,r))?e.return=e.value+`{`+n+`}`:``}function op(e){var t=Df(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function sp(e){return function(t){t.root||(t=t.return)&&e(t)}}var cp=function(e,t,n){for(var r=0,i=0;r=i,i=Vf(),r===38&&i===12&&(t[n]=1),!Wf(i);)Bf();return Uf(e,Nf)},lp=function(e,t){var n=-1,r=44;do switch(Wf(r)){case 0:r===38&&Vf()===12&&(t[n]=1),e[n]+=cp(Nf-1,t,n);break;case 2:e[n]+=qf(r);break;case 4:if(r===44){e[++n]=Vf()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=vf(r)}while(r=Bf());return e},up=function(e,t){return Kf(lp(Gf(e),t))},dp=new WeakMap,fp=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!dp.get(n))&&!r){dp.set(e,!0);for(var i=[],a=up(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},pp=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function mp(e,t){switch(bf(e,t)){case 5103:return Y+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+uf+e+lf+e+e;case 6828:case 4268:return Y+e+lf+e+e;case 6165:return Y+e+lf+`flex-`+e+e;case 5187:return Y+e+X(e,/(\w+).+(:[^]+)/,Y+`box-$1$2`+lf+`flex-$1$2`)+e;case 5443:return Y+e+lf+`flex-item-`+X(e,/flex-|-self/,``)+e;case 4675:return Y+e+lf+`flex-line-pack`+X(e,/align-content|flex-|-self/,``)+e;case 5548:return Y+e+lf+X(e,`shrink`,`negative`)+e;case 5292:return Y+e+lf+X(e,`basis`,`preferred-size`)+e;case 6060:return Y+`box-`+X(e,`-grow`,``)+Y+e+lf+X(e,`grow`,`positive`)+e;case 4554:return Y+X(e,/([^-])(transform)/g,`$1`+Y+`$2`)+e;case 6187:return X(X(X(e,/(zoom-|grab)/,Y+`$1`),/(image-set)/,Y+`$1`),e,``)+e;case 5495:case 3959:return X(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return X(X(e,/(.+:)(flex-)?(.*)/,Y+`box-pack:$3`+lf+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+Y+e+e;case 4095:case 3583:case 4068:case 2532:return X(e,/(.+)-inline(.+)/,Y+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ef(e)-1-t>6)switch(wf(e,t+1)){case 109:if(wf(e,t+4)!==45)break;case 102:return X(e,/(.+:)(.+)-([^]+)/,`$1`+Y+`$2-$3$1`+uf+(wf(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Cf(e,`stretch`)?mp(X(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(wf(e,t+1)!==115)break;case 6444:switch(wf(e,Ef(e)-3-(~Cf(e,`!important`)&&10))){case 107:return X(e,`:`,`:`+Y)+e;case 101:return X(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+Y+(wf(e,14)===45?`inline-`:``)+`box$3$1`+Y+`$2$3$1`+lf+`$2box$3`)+e}break;case 5936:switch(wf(e,t+11)){case 114:return Y+e+lf+X(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return Y+e+lf+X(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return Y+e+lf+X(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return Y+e+lf+e+e}return e}var hp=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case pf:e.return=mp(e.value,e.length);break;case hf:return ip([Lf(e,{value:X(e.value,`@`,`@`+Y)})],r);case ff:if(e.length)return kf(e.props,function(t){switch(Sf(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return ip([Lf(e,{props:[X(t,/:(read-\w+)/,`:`+uf+`$1`)]})],r);case`::placeholder`:return ip([Lf(e,{props:[X(t,/:(plac\w+)/,`:`+Y+`input-$1`)]}),Lf(e,{props:[X(t,/:(plac\w+)/,`:`+uf+`$1`)]}),Lf(e,{props:[X(t,/:(plac\w+)/,lf+`input-$1`)]})],r)}return``})}}],gp=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||hp,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[fp,pp],l,u=[ap,sp(function(e){l.insert(e)})],d=op(c.concat(r,u)),f=function(e){return ip($f(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new cf({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},_p=!0;function vp(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var yp=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||_p===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},bp=function(e,t,n){yp(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function xp(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}w();var Sp=!1,Cp=/[A-Z]|^ms/g,wp=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Tp=function(e){return e.charCodeAt(1)===45},Ep=function(e){return e!=null&&typeof e!=`boolean`},Dp=S(function(e){return Tp(e)?e:e.replace(Cp,`-$&`).toLowerCase()}),Op=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(wp,function(e,t,n){return Np={name:t,styles:n,next:Np},t})}return x[e]!==1&&!Tp(e)&&typeof t==`number`&&t!==0?t+`px`:t},kp=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;function Ap(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return Np={name:i.name,styles:i.styles,next:Np},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Np={name:o.name,styles:o.styles,next:Np},o=o.next;return a.styles+`;`}return jp(e,t,n);case`function`:if(e!==void 0){var s=Np,c=n(e);return Np=s,Ap(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function jp(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ap(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:Ep(s)&&(r+=Dp(a)+`:`+Op(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&Sp)throw Error(kp);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)Ep(o[c])&&(r+=Dp(a)+`:`+Op(a,o[c])+`;`);else{var l=Ap(e,t,o);switch(a){case`animation`:case`animationName`:r+=Dp(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}var Mp=/label:\s*([^\s;{]+)\s*(;|$)/g,Np;function Pp(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Np=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=Ap(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=Ap(n,t,e[o]),r&&(i+=a[o]);Mp.lastIndex=0;for(var s=``,c;(c=Mp.exec(i))!==null;)s+=`-`+c[1];return{name:xp(i)+s,styles:i,next:Np}}var Fp=function(e){return e()},Ip=B.useInsertionEffect?B.useInsertionEffect:!1,Lp=Ip||Fp;Ip||B.useLayoutEffect;var Rp=B.createContext(typeof HTMLElement<`u`?gp({key:`css`}):null);Rp.Provider;var zp=function(e){return(0,B.forwardRef)(function(t,n){return e(t,(0,B.useContext)(Rp),n)})},Bp=B.createContext({});({}).hasOwnProperty,h();var Vp=!1,Hp=g,Up=function(e){return e!==`theme`},Wp=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?Hp:Up},Gp=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},Kp=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return yp(t,n,r),Lp(function(){return bp(t,n,r)}),null},qp=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=Gp(t,n,r),c=s||Wp(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=zp(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=B.useContext(Bp)}typeof e.className==`string`?a=vp(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=Pp(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?Wp(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),B.createElement(B.Fragment,null,B.createElement(Kp,{cache:t,serialized:m,isStringTag:typeof r==`string`}),B.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,`toString`,{value:function(){return o===void 0&&Vp?`NO_COMPONENT_SELECTOR`:`.`+o}}),h.withComponent=function(t,r){return e(t,le({},n,r,{shouldForwardProp:Gp(h,r,!0)})).apply(void 0,d)},h}},Jp=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),Yp=qp.bind(null);Jp.forEach(function(e){Yp[e]=Yp(e)});const Xp=Yp.div({position:`relative`,display:`flex`,height:`100vh`,flexDirection:`column`,backgroundColor:`transparent`}),Zp=T.div`
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
`,Qp=T(Wd.div)`
  ${{position:`fixed`,bottom:`0`,left:`0`,top:`0`,zIndex:`1000`,display:`flex`,width:`150px`,flexDirection:`column`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}}
  background-color: ${e=>f(e.theme.BACKGROUND,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 16px;
`,$p=T.div`
  ${{flex:`none`,padding:`1.25rem`}}
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  background-color: ${e=>e.theme.OFFSET};
  border-radius: 12px 12px 0 0;
`,em=T.div`
  ${{marginTop:`0.25rem`,flex:`1 1 0%`,placeContent:`center`,fontSize:`0.875rem`}}
  padding: 2px 6px;
  color: ${e=>f(e.theme.PRIMARY,.7)};
`,tm=T.h2`
  ${{margin:`0`,fontSize:`1.5rem`,fontWeight:`700`}}
  color: ${e=>e.theme.PRIMARY};
`,nm=T.div`
  position: relative;
`,rm=T.button`
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
`,im=T.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  flex: 1;
`,am=T.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: small;
  font-weight: 600;
`,om=T.div`
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
`,sm=T.button`
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
`,Yp.div({flex:`1 1 0%`});const cm=T.nav`
  ${{flex:`none`,paddingLeft:`0`,paddingRight:`0`,paddingBottom:`50px`,paddingTop:`0.5rem`}}
  border-top: 1px solid ${e=>e.theme.BORDER};
`,lm=T.button`
  ${{width:`100%`,cursor:`pointer`,borderStyle:`none`,paddingLeft:`1.25rem`,paddingRight:`1.25rem`,paddingTop:`0.75rem`,paddingBottom:`0.75rem`,textAlign:`left`,fontSize:`15px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isActive?e.theme.OFFSET:`transparent`};
  color: ${e=>e.theme.PRIMARY};
  font-weight: ${e=>e.$isActive?600:400};
  
  &:hover {
    background-color: ${e=>f(e.theme.OFFSET,.5)};
  }
`,um=Yp.div({position:`fixed`,bottom:`0`,left:`0`,right:`0`,top:`0`,zIndex:`999`,backgroundColor:`rgba(0, 0, 0, 0.6)`}),dm=Yp.div({position:`fixed`,bottom:`2px`,left:`2px`,zIndex:`1000`,display:`flex`,height:`3rem`,width:`3rem`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}),fm=T.button`
  ${{position:`fixed`,zIndex:`1001`,display:`flex`,height:`2.5rem`,width:`2.5rem`,cursor:`pointer`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-shadow":`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,"--tw-shadow-colored":`0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color)`,boxShadow:`var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)`}}
  background-color: ${e=>f(e.theme.BACKGROUND,.75)};
  border: 2px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
`,pm=({isOpen:e,currentPage:t,onToggle:n,onNavigate:r,canAccessInitiativeList:i=!0})=>{let{theme:a}=Mt(),{t:o,locale:s,setLocale:c,availableLocales:l}=ce(),u=V(e=>e.playerData),d=String(u?.role||``).toUpperCase()===`GM`,[f,p]=(0,B.useState)(!1),m=(0,B.useRef)(null),h=(0,B.useMemo)(()=>({en:o(`common.locale.en`),es:o(`common.locale.es`),fr:o(`common.locale.fr`),de:o(`common.locale.de`)}),[o]);(0,B.useEffect)(()=>{e||p(!1)},[e]),(0,B.useEffect)(()=>{if(!f)return;let e=e=>{m.current&&!m.current.contains(e.target)&&p(!1)};return window.addEventListener(`mousedown`,e),()=>{window.removeEventListener(`mousedown`,e)}},[f]);let g=e=>{c(e),p(!1)};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)($l,{children:e&&(0,H.jsxs)(Qp,{theme:a,initial:{x:-300},animate:{x:0},exit:{x:-300},transition:{type:`tween`,duration:.3},style:{boxShadow:`4px 0 12px rgba(0, 0, 0, 0.15)`},children:[(0,H.jsxs)($p,{theme:a,children:[(0,H.jsx)(tm,{theme:a,children:o(`nav.title`)}),(0,H.jsxs)(nm,{ref:m,children:[(0,H.jsxs)(rm,{theme:a,$open:f,type:`button`,"aria-haspopup":`listbox`,"aria-expanded":f,"aria-label":o(`nav.languageSwitcher`),onClick:()=>p(e=>!e),children:[(0,H.jsxs)(im,{children:[(0,H.jsx)(ef,{size:16}),(0,H.jsx)(am,{children:h[s]})]}),(0,H.jsx)(Yd,{size:8})]}),f?(0,H.jsx)(om,{theme:a,role:`listbox`,"aria-label":o(`nav.languageOptions`),children:l.map(e=>(0,H.jsxs)(sm,{theme:a,$active:e===s,type:`button`,role:`option`,"aria-selected":e===s,onClick:()=>g(e),children:[(0,H.jsx)(`span`,{children:h[e]}),e===s?(0,H.jsx)(Jd,{size:14}):null]},e))}):null]})]}),(0,H.jsxs)(em,{theme:a,children:[o(`nav.goodLuck`),(0,H.jsx)(`br`,{}),(0,H.jsx)(`br`,{}),o(`nav.questions`),(0,H.jsxs)(`a`,{href:`https://discord.gg/Kh9hbHAZnX`,target:`_blank`,rel:`noreferrer`,children:[(0,H.jsx)(`br`,{}),o(`nav.battleSystemDiscord`)]}),`.`,(0,H.jsx)(`br`,{}),(0,H.jsxs)(`a`,{href:`https://www.patreon.com/c/battlesystem`,target:`_blank`,rel:`noreferrer`,children:[(0,H.jsx)(`br`,{}),o(`nav.patreon`)]}),`.`]}),(0,H.jsxs)(cm,{theme:a,children:[i&&(0,H.jsx)(lm,{theme:a,$isActive:t===`ForgeMain`,onClick:()=>r(`ForgeMain`),children:o(`nav.main`)}),(0,H.jsx)(lm,{theme:a,$isActive:t===`Party`,onClick:()=>r(`Party`),children:o(`nav.party`)}),(0,H.jsx)(lm,{theme:a,$isActive:t===`ChatLog`,onClick:()=>r(`ChatLog`),children:o(`nav.systemLog`)}),d&&(0,H.jsx)(lm,{theme:a,$isActive:t===`System`,onClick:()=>r(`System`),children:o(`nav.system`)}),d&&(0,H.jsx)(lm,{theme:a,$isActive:t===`Settings`,onClick:()=>r(`Settings`),children:o(`nav.settings`)})]})]})}),e&&(0,H.jsx)(um,{onClick:n}),(0,H.jsx)(dm,{children:(0,H.jsx)(fm,{theme:a,onClick:n,children:(0,H.jsx)(he,{size:24})})})]})},mm=T.div`
  padding: 20px;
  color: ${e=>e.theme.PRIMARY};
  min-height: 100vh;
`,hm=T.h1`
  color: ${e=>e.theme.PRIMARY};
  background-color: ${e=>e.theme.OFFSET};
  padding: 2px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  font-variant: small-caps;
`,gm=T.div`
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
`;const _m=T.button`
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
`,vm=T.input`
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
`;var ym=T.button`
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
`;const Z=({label:e,isOn:t,onChange:n})=>{let{theme:r}=Mt();return(0,H.jsx)(ym,{theme:r,$isOn:t,onClick:()=>{let r=!t;j.log(`${e}: ${r}`),n(r)},role:`switch`,"aria-checked":t,"aria-label":e})};var bm=T.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${e=>e.$zIndexBase};
`,xm=T.div`
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
`,Sm=T.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 15px 0;
  font-size: 18px;
`,Cm=T.div`
  margin: 0 0 20px 0;
`,wm=T.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;const Tm=({isOpen:e,title:t,onClose:n,children:r,actions:i,closeOnOverlayClick:a=!0,minWidth:o,maxWidth:s,zIndexBase:c=9999})=>{let{theme:l}=Mt();return e?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(bm,{$zIndexBase:c,onClick:a?n:void 0}),(0,H.jsxs)(xm,{theme:l,$minWidth:o,$maxWidth:s,$zIndexBase:c,onClick:e=>e.stopPropagation(),children:[t&&(0,H.jsx)(Sm,{theme:l,children:t}),(0,H.jsx)(Cm,{children:r}),i&&(0,H.jsx)(wm,{children:i})]})]}):null},Em=e=>({reverseInitiative:e(`settings.tooltips.reverseInitiative`),popcornInitiative:e(`settings.tooltips.popcornInitiative`),initiativeDie:e(`settings.tooltips.initiativeDie`),initiativeModifierAttr:e(`settings.tooltips.initiativeModifierAttr`),initiativeModifierMath:e(`settings.tooltips.initiativeModifierMath`),showCardColumn:e(`settings.tooltips.showCardColumn`),showPlayerView:e(`settings.tooltips.showPlayerView`),showNonPartyUnits:e(`settings.tooltips.showNonPartyUnits`),showHpNumbersOnList:e(`settings.tooltips.showHpNumbersOnList`),ownerOnlyEdit:e(`settings.tooltips.ownerOnlyEdit`),showAdjustHpContextMenu:e(`settings.tooltips.showAdjustHpContextMenu`),showViewUnitContextMenuForPlayers:e(`settings.tooltips.showViewUnitContextMenuForPlayers`),showHpBarsOnTokens:e(`settings.tooltips.showHpBarsOnTokens`),hpOrientation:e(`settings.tooltips.hpOrientation`),showHpNumbersOnTokens:e(`settings.tooltips.showHpNumbersOnTokens`),showDeathEffect:e(`settings.tooltips.showDeathEffect`),showNamesOnTokens:e(`settings.tooltips.showNamesOnTokens`),showTurnEffect:e(`settings.tooltips.showTurnEffect`),useDescriptiveNames:e(`settings.tooltips.useDescriptiveNames`),enableRumble:e(`settings.tooltips.enableRumble`),enableBones:e(`settings.tooltips.enableBones`),enableDicePlus:e(`settings.tooltips.enableDicePlus`),enableTextBasedRolls:e(`settings.tooltips.enableTextBasedRolls`),enableObrNotification:e(`settings.tooltips.enableObrNotification`),showResultsToAll:e(`settings.tooltips.showResultsToAll`),enableDiscordLogging:e(`settings.tooltips.enableDiscordLogging`),discordUrl:e(`settings.tooltips.discordUrl`),enableConsoleLog:e(`settings.tooltips.enableConsoleLog`)}),Dm=()=>{let e=V(e=>e.systemData);return V(e=>e.cacheReady)?e?{theme:e.theme,cardLayout:e.cardLayout,listLayout:e.listLayout,attributes:e.attributes,systemName:e.systemName,importDate:e.importDate,isLoading:!1}:{theme:{primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,isLoading:!1}:{theme:null,cardLayout:[],listLayout:[],attributes:[],systemName:``,importDate:null,isLoading:!0}};var Om=T.h2`
  ${{marginBottom:`1rem`,paddingBottom:`0.5rem`,fontSize:`1.25rem`,fontWeight:`600`}}
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
`,Q=T.div`
  ${{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`}}
  color: ${e=>e.theme.PRIMARY};
`,$=T.label`
  ${{flex:`1 1 0%`,cursor:`pointer`,textAlign:`left`,fontSize:`1rem`}}
  color: ${e=>e.theme.PRIMARY};
`,km=T.div`
  ${{marginLeft:`1rem`,display:`flex`,placeContent:`space-between`,alignItems:`center`,gap:`0.75rem`}}
  color: ${e=>e.theme.PRIMARY};
`,Am=T.label`
  ${{fontSize:`0.875rem`}}
  text-align: left;
  color: ${e=>e.theme.PRIMARY};
`,jm=T.p`
  ${{marginTop:`0.25rem`,fontSize:`0.75rem`}}
  color: ${e=>f(e.theme.PRIMARY,.7)};
`,Mm=T.input`
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
`,Nm=T.select`
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
`,Pm=T.button`
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
`,Fm=Yp.div({marginTop:`0.5rem`,display:`flex`,justifyContent:`center`,gap:`0.75rem`}),Im=T.p`
  margin: 8px 0 0;
  font-size: 13px;
  color: ${e=>e.$connected?e.theme.PRIMARY:f(e.theme.PRIMARY,.75)};
`,Lm=T.p`
  color: ${e=>f(e.theme.PRIMARY,.9)};
  margin: 0;
  line-height: 1.5;
`;const Rm=()=>{let{theme:e}=Mt(),{t}=ce(),{attributes:n}=Dm(),r=V(e=>e.roomMetadata);V(e=>e.sceneMetadata);let i=V(e=>e.items),a=V(e=>e.cacheReady),[o,s]=(0,B.useState)(!1),[l,u]=(0,B.useState)(!1),[d,f]=(0,B.useState)(`D20`),[m,h]=(0,B.useState)(!1),[g,_]=(0,B.useState)(``),[v,y]=(0,B.useState)(`@STAT`),[b,x]=(0,B.useState)(!1),[S,C]=(0,B.useState)(!1),[w,T]=(0,B.useState)(!0),[E,D]=(0,B.useState)(!1),[ee,te]=(0,B.useState)(!0),[ne,re]=(0,B.useState)(!0),[k,ie]=(0,B.useState)(!1),[ae,oe]=(0,B.useState)(`bottom`),[se,le]=(0,B.useState)(!1),[ue,de]=(0,B.useState)(!1),[fe,pe]=(0,B.useState)(!1),[me,he]=(0,B.useState)(!1),[ge,_e]=(0,B.useState)(!1),[ve,ye]=(0,B.useState)(!1),[be,M]=(0,B.useState)(!1),[xe,Se]=(0,B.useState)(!1),[we,Te]=(0,B.useState)(!1),[Ee,De]=(0,B.useState)(!1),[Oe,ke]=(0,B.useState)(!1),[Ae,je]=(0,B.useState)(!1),[Me,Ne]=(0,B.useState)(``),[Pe,N]=(0,B.useState)(!1),Le=(0,B.useRef)(null),[Re,P]=(0,B.useState)(()=>We()),[ze,Ve]=(0,B.useState)(()=>Be()),[Ue,Ge]=(0,B.useState)(()=>He()),[Ke,qe]=(0,B.useState)(!1),[Je,Ze]=(0,B.useState)(!1),F=Em(t);(0,B.useEffect)(()=>{let e=!0;return(async()=>{let t=await ct();e&&(P(t&&We()),Ve(Be()),Ge(He()))})(),()=>{e=!1}},[]);let I=r;(0,B.useEffect)(()=>{if(a){if(I[O.POPCORN_INITIATIVE]!==void 0&&s(I[O.POPCORN_INITIATIVE]),I[O.REVERSE_INITIATIVE]!==void 0&&u(I[O.REVERSE_INITIATIVE]),I[O.DICE_RANGE]!==void 0&&f(I[O.DICE_RANGE]),I[O.INITIATIVE_MODIFIER_BID]===void 0?_(``):_(I[O.INITIATIVE_MODIFIER_BID]||``),I[O.INITIATIVE_MODIFIER_EXPR]!==void 0){let e=(I[O.INITIATIVE_MODIFIER_EXPR]||`@STAT`).replace(/\bx\b/gi,`@STAT`).trim();y(e.length>0?e:`@STAT`)}else y(`@STAT`);if(I[O.SHOW_CARD_ACCESS]!==void 0&&h(I[O.SHOW_CARD_ACCESS]),I[O.SHOW_PLAYER_VIEW]!==void 0&&x(I[O.SHOW_PLAYER_VIEW]),I[O.SHOW_OWNER_ONLY_EDIT]!==void 0&&D(I[O.SHOW_OWNER_ONLY_EDIT]),I[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?te(!0):te(I[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]),I[O.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===void 0?re(!0):re(I[O.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]),I[O.SHOW_NON_PARTY_UNITS]!==void 0&&C(I[O.SHOW_NON_PARTY_UNITS]),I[O.SHOW_LIST_HP_NUMBERS]===void 0?T(!0):T(I[O.SHOW_LIST_HP_NUMBERS]),I[O.SHOW_HP_BARS]!==void 0&&ie(I[O.SHOW_HP_BARS]),I[O.HP_BAR_ORIENTATION]!==void 0&&oe(I[O.HP_BAR_ORIENTATION]),I[O.SHOW_HP_NUMBERS]!==void 0&&le(I[O.SHOW_HP_NUMBERS]),I[O.SHOW_DEATH_EFFECT]!==void 0&&de(I[O.SHOW_DEATH_EFFECT]),I[O.SHOW_NAMES]!==void 0&&pe(I[O.SHOW_NAMES]),I[O.SHOW_TURN_EFFECT]!==void 0&&he(I[O.SHOW_TURN_EFFECT]),I[O.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&_e(I[O.USE_DESCRIPTIVE_DUPLICATES]),I[O.ENABLE_RUMBLE]!==void 0&&ye(I[O.ENABLE_RUMBLE]),I[O.ENABLE_BONES]!==void 0&&M(I[O.ENABLE_BONES]),I[O.ENABLE_DICE_PLUS]!==void 0&&Se(I[O.ENABLE_DICE_PLUS]),I[O.ENABLE_TEXT_BASED_ROLLS]!==void 0&&Te(I[O.ENABLE_TEXT_BASED_ROLLS]),I[O.ENABLE_OBR_NOTIFICATION]!==void 0&&De(I[O.ENABLE_OBR_NOTIFICATION]),I[O.SHOW_NOTIFICATION_TO_ALL]!==void 0&&ke(I[O.SHOW_NOTIFICATION_TO_ALL]),I[O.ENABLE_DISCORD_LOGGING]!==void 0&&je(I[O.ENABLE_DISCORD_LOGGING]),I[O.DISCORD_URL]!==void 0&&Ne(I[O.DISCORD_URL]),I[O.ENABLE_CONSOLE_LOG]!==void 0){let e=I[O.ENABLE_CONSOLE_LOG];N(e),j.setEnabled(e)}else N(!1)}},[a,I]);let L=async(e,t)=>{await c.room.setMetadata({[e]:t})},Qe=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},R=n.filter(e=>e.attr_type===`numb`).sort((e,t)=>(e.attr_name||``).localeCompare(t.attr_name||``)),$e=(e,n)=>{let r=e.trim();return r?n?/@STAT/i.test(r)?/\d\s*d\s*\d|\bd\s*\d/i.test(r)?{valid:!1,error:t(`settings.diceNotAllowedError`)}:Ie(r.replace(/@STAT/gi,`@${n}`))?{valid:!0}:{valid:!1,error:t(`settings.invalidSyntaxError`)}:{valid:!1,error:t(`settings.exprMustIncludeStatError`)}:{valid:!1,error:t(`settings.selectNumericAttributeError`)}:{valid:!1,error:t(`settings.exprRequiredError`)}},et=async(e,t)=>{await L(O.INITIATIVE_MODIFIER_BID,e),await L(O.INITIATIVE_MODIFIER_EXPR,t)},tt=async e=>{if(_(e),!e){await et(``,v);return}let n=$e(v,e);n.valid||await c.notification.show(n.error||t(`settings.invalidModifierSettingsError`),`WARNING`),await et(e,v)},nt=async()=>{let e=v.trim(),n=(e.length>0?e:`@STAT`).replace(/\bx\b/gi,`@STAT`);if(y(n),!g){await et(``,n);return}let r=$e(n,g);if(!r.valid){await c.notification.show(r.error||t(`settings.invalidModifierExpressionError`),`WARNING`);return}await et(g,n)},it=async()=>{if(!g){await c.notification.show(t(`settings.selectAttributeBeforeTestingError`),`WARNING`);return}let e=v.replace(/\bx\b/gi,`@STAT`),n=$e(e,g);if(!n.valid){await c.notification.show(n.error||t(`settings.invalidModifierExpressionError`),`WARNING`);return}let r=Qe(d),i=Math.floor(Math.random()*r)+1,a=rt(e.replace(/@STAT/gi,`@${g}`),{bidValueMap:{[g]:14},onMissingBid:`useZero`});if(!a.valid||!a.notation){await c.notification.show(t(`settings.couldNotResolveModifierError`),`ERROR`);return}let o=Number(a.notation),s=Number.isFinite(o)?Math.trunc(o):0,l=i+s,u=e.replace(/@STAT/gi,`14`);await c.notification.show(t(`settings.mockInitiativeResult`,{sides:r,baseRoll:i,expression:u,modifier:s,total:l}),`SUCCESS`)},at=async()=>{try{let e=await Ce(),n=JSON.stringify(e,null,2),r=new Blob([n],{type:`text/plain;charset=utf-8`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`forge-collection-${new Date().toISOString().slice(0,10)}.txt`,a.click(),URL.revokeObjectURL(i),await c.notification.show(t(`settings.collectionExportComplete`,{count:e.length}),`SUCCESS`)}catch(e){j.log(`Collection export failed`,e),await c.notification.show(t(`settings.collectionExportFailed`),`ERROR`)}},ot=()=>{Ze(!0)},st=()=>{Ze(!1),Le.current?.click()},lt=async e=>{let n=e.target.files?.[0];if(n)try{let e=await n.text(),r=JSON.parse(e);if(!Array.isArray(r)){await c.notification.show(t(`settings.collectionImportArrayError`),`ERROR`);return}let i=await Fe(r);await c.notification.show(t(`settings.collectionImportCompleteSummary`,{created:i.created,updated:i.updated,skipped:i.skipped}),`SUCCESS`)}catch(e){j.log(`Collection import failed`,e),await c.notification.show(t(`settings.collectionImportFailed`),`ERROR`)}finally{e.target.value=``}},ut=async()=>{qe(!0);try{await Xe(),P(We()),Ve(Be()),Ge(He()),await c.notification.show(t(`settings.connectedAccount`),`SUCCESS`)}catch(e){j.error(`Battle-System auth connection failed`,e),await c.notification.show(t(`settings.unableToConnectAccount`),`ERROR`),P(We()),Ve(Be()),Ge(He())}finally{qe(!1)}};return(0,H.jsxs)(Wd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[(0,H.jsxs)(mm,{theme:e,children:[(0,H.jsx)(hm,{theme:e,children:t(`settings.pageTitle`)}),(0,H.jsxs)(gm,{theme:e,children:[(0,H.jsx)(Om,{theme:e,children:t(`settings.accountSectionTitle`)}),(0,H.jsx)(Fm,{children:(0,H.jsx)(_m,{theme:e,onClick:()=>{ut()},disabled:Ke,children:t(Ke?`settings.connecting`:Re?`settings.reconnectAccount`:`settings.connectAccount`)})}),(0,H.jsx)(Im,{theme:e,$connected:Re,children:Re?t(`settings.statusConnected`,{tier:ze}):t(`settings.statusDisconnected`)})]}),(0,H.jsxs)(gm,{theme:e,children:[(0,H.jsx)(Om,{theme:e,children:t(`settings.collectionSectionTitle`)}),(0,H.jsxs)(Fm,{children:[(0,H.jsx)(_m,{theme:e,onClick:at,children:t(`settings.export`)}),(0,H.jsx)(_m,{theme:e,onClick:ot,children:t(`settings.import`)})]}),(0,H.jsx)(`input`,{ref:Le,type:`file`,accept:`.txt,.json,text/plain,application/json`,onChange:lt,style:{display:`none`}})]}),(0,H.jsxs)(gm,{theme:e,children:[(0,H.jsx)(Om,{theme:e,children:t(`settings.listControlsSectionTitle`)}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.reverseInitiative,children:t(`settings.reverseInitiative`)})}),(0,H.jsx)(Z,{label:t(`settings.reverseInitiative`),isOn:l,onChange:async e=>{u(e),await L(O.REVERSE_INITIATIVE,e),e&&o&&(s(!1),await L(O.POPCORN_INITIATIVE,!1))}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.popcornInitiative,children:t(`settings.popcornInitiative`)})}),(0,H.jsx)(Z,{label:t(`settings.popcornInitiative`),isOn:o,onChange:async e=>{s(e),await L(O.POPCORN_INITIATIVE,e),e&&l&&(u(!1),await L(O.REVERSE_INITIATIVE,!1))}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.initiativeDie,children:t(`settings.initiativeDie`)})}),(0,H.jsx)(Mm,{theme:e,type:`text`,value:d,onChange:async e=>{let t=e.target.value;f(t),await L(O.DICE_RANGE,t),j.log(`Dice Range:`,t)},placeholder:`D20`,maxLength:3})]}),(0,H.jsxs)(km,{theme:e,children:[(0,H.jsx)(Am,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.initiativeModifierAttr,children:t(`settings.initiativeModifier`)})}),(0,H.jsxs)(Nm,{theme:e,value:g,onChange:async e=>{await tt(e.target.value)},children:[(0,H.jsx)(`option`,{value:``,children:t(`settings.none`)}),R.map(e=>(0,H.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,H.jsxs)(km,{theme:e,children:[(0,H.jsx)(Am,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.initiativeModifierMath,children:t(`settings.math`)})}),(0,H.jsx)(Mm,{theme:e,type:`text`,value:v,onChange:e=>{y(e.target.value)},onBlur:async()=>{await nt()},placeholder:`floor((@STAT-10)/2)`,maxLength:120,disabled:!g}),(0,H.jsx)(Pm,{theme:e,type:`button`,onClick:()=>{it()},disabled:!g,children:t(`settings.test`)})]}),(0,H.jsx)(jm,{theme:e,children:t(`settings.initiativeModifierHint`)}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.showCardColumn,children:t(`settings.showCardColumn`)})}),(0,H.jsx)(Z,{label:t(`settings.showCardColumn`),isOn:m,onChange:async e=>{h(e),await L(O.SHOW_CARD_ACCESS,e)}})]})]}),(0,H.jsxs)(gm,{theme:e,children:[(0,H.jsx)(Om,{theme:e,children:t(`settings.playerControlsSectionTitle`)}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.showPlayerView,children:t(`settings.showPlayerView`)})}),(0,H.jsx)(Z,{label:t(`settings.showPlayerView`),isOn:b,onChange:async e=>{x(e),await L(O.SHOW_PLAYER_VIEW,e)}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.showNonPartyUnits,children:t(`settings.showNonPartyUnits`)})}),(0,H.jsx)(Z,{label:t(`settings.showNonPartyUnits`),isOn:S,onChange:async e=>{C(e),await L(O.SHOW_NON_PARTY_UNITS,e)}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.showHpNumbersOnList,children:t(`settings.showHpNumbersOnList`)})}),(0,H.jsx)(Z,{label:t(`settings.showHpNumbersOnList`),isOn:w,onChange:async e=>{T(e),await L(O.SHOW_LIST_HP_NUMBERS,e)}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.ownerOnlyEdit,children:t(`settings.ownerOnlyEdit`)})}),(0,H.jsx)(Z,{label:t(`settings.ownerOnlyEdit`),isOn:E,onChange:async e=>{D(e),await L(O.SHOW_OWNER_ONLY_EDIT,e)}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.showAdjustHpContextMenu,children:t(`settings.showAdjustHpContextMenu`)})}),(0,H.jsx)(Z,{label:t(`settings.showAdjustHpContextMenu`),isOn:ee,onChange:async e=>{te(e),await L(O.SHOW_MODIFY_UNIT_CONTEXT_MENU,e)}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.showViewUnitContextMenuForPlayers,children:t(`settings.showViewUnitContextMenuForPlayers`)})}),(0,H.jsx)(Z,{label:t(`settings.showViewUnitContextMenuForPlayers`),isOn:ne,onChange:async e=>{re(e),await L(O.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS,e)}})]})]}),(0,H.jsxs)(gm,{theme:e,children:[(0,H.jsx)(Om,{theme:e,children:t(`settings.gameControlsSectionTitle`)}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.showHpBarsOnTokens,children:t(`settings.showHpBarsOnTokens`)})}),(0,H.jsx)(Z,{label:t(`settings.showHpBarsOnTokens`),isOn:k,onChange:async e=>{ie(e),await L(O.SHOW_HP_BARS,e),e&&se&&(le(!1),await L(O.SHOW_HP_NUMBERS,!1)),e&&I[O.HP_BAR_ORIENTATION]===void 0&&(oe(`bottom`),await L(O.HP_BAR_ORIENTATION,`bottom`))}})]}),(k||se)&&(0,H.jsxs)(km,{theme:e,children:[(0,H.jsx)(Am,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.hpOrientation,children:t(`settings.orientation`)})}),(0,H.jsxs)(Nm,{theme:e,value:ae,onChange:async e=>{let t=e.target.value;oe(t),await L(O.HP_BAR_ORIENTATION,t)},children:[(0,H.jsx)(`option`,{value:`top`,children:t(`common.orientation.top`)}),(0,H.jsx)(`option`,{value:`bottom`,children:t(`common.orientation.bottom`)}),(0,H.jsx)(`option`,{value:`left`,children:t(`common.orientation.left`)}),(0,H.jsx)(`option`,{value:`right`,children:t(`common.orientation.right`)})]})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.showHpNumbersOnTokens,children:t(`settings.showHpNumbersOnTokens`)})}),(0,H.jsx)(Z,{label:t(`settings.showHpNumbersOnTokens`),isOn:se,onChange:async e=>{le(e),await L(O.SHOW_HP_NUMBERS,e),e&&k&&(ie(!1),await L(O.SHOW_HP_BARS,!1)),e&&I[O.HP_BAR_ORIENTATION]===void 0&&(oe(`bottom`),await L(O.HP_BAR_ORIENTATION,`bottom`))}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.showDeathEffect,children:t(`settings.showDeathEffect`)})}),(0,H.jsx)(Z,{label:t(`settings.showDeathEffect`),isOn:ue,onChange:async e=>{de(e),await L(O.SHOW_DEATH_EFFECT,e)}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.showNamesOnTokens,children:t(`settings.showNamesOnTokens`)})}),(0,H.jsx)(Z,{label:t(`settings.showNamesOnTokens`),isOn:fe,onChange:async e=>{pe(e),await L(O.SHOW_NAMES,e);let t=i.filter(e=>e.metadata[p.ON_LIST]===!0);e?(j.log(`Showing names on tokens`),await c.scene.items.updateItems(t,e=>{for(let t of e){let e=t.metadata[p.UNIT_NAME],n=t;e&&n.text&&(n.text.plainText=String(e))}})):(j.log(`Hiding names on tokens`),await c.scene.items.updateItems(t,e=>{for(let t of e){let e=t;e.text&&(e.text.plainText=``)}}))}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.showTurnEffect,children:t(`settings.showTurnEffect`)})}),(0,H.jsx)(Z,{label:t(`settings.showTurnEffect`),isOn:me,onChange:async e=>{he(e),await L(O.SHOW_TURN_EFFECT,e)}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.useDescriptiveNames,children:t(`settings.useDescriptiveNames`)})}),(0,H.jsx)(Z,{label:t(`settings.useDescriptiveNames`),isOn:ge,onChange:async e=>{_e(e),await L(O.USE_DESCRIPTIVE_DUPLICATES,e)}})]})]}),(0,H.jsxs)(gm,{theme:e,children:[(0,H.jsx)(Om,{theme:e,children:t(`settings.diceControlsSectionTitle`)}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.enableTextBasedRolls,children:t(`settings.enableTextBasedRolls`)})}),(0,H.jsx)(Z,{label:t(`settings.enableTextBasedRolls`),isOn:we,onChange:async e=>{Te(e),await L(O.ENABLE_TEXT_BASED_ROLLS,e),e&&(De(!0),ye(!1),M(!1),Se(!1),await L(O.ENABLE_OBR_NOTIFICATION,!0),await L(O.ENABLE_RUMBLE,!1),await L(O.ENABLE_BONES,!1),await L(O.ENABLE_DICE_PLUS,!1))}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.enableRumble,children:t(`settings.enableRumble`)})}),(0,H.jsx)(Z,{label:t(`settings.enableRumble`),isOn:ve,onChange:async e=>{ye(e),await L(O.ENABLE_RUMBLE,e),e&&(M(!1),Se(!1),Te(!1),await L(O.ENABLE_BONES,!1),await L(O.ENABLE_DICE_PLUS,!1),await L(O.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.enableBones,children:t(`settings.enableBones`)})}),(0,H.jsx)(Z,{label:t(`settings.enableBones`),isOn:be,onChange:async e=>{M(e),await L(O.ENABLE_BONES,e),e&&(ye(!1),Se(!1),Te(!1),await L(O.ENABLE_RUMBLE,!1),await L(O.ENABLE_DICE_PLUS,!1),await L(O.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.enableDicePlus,children:t(`settings.enableDicePlus`)})}),(0,H.jsx)(Z,{label:t(`settings.enableDicePlus`),isOn:xe,onChange:async e=>{Se(e),await L(O.ENABLE_DICE_PLUS,e),e&&(ye(!1),M(!1),Te(!1),await L(O.ENABLE_RUMBLE,!1),await L(O.ENABLE_BONES,!1),await L(O.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.enableObrNotification,children:t(`settings.enableObrNotification`)})}),(0,H.jsx)(Z,{label:t(`settings.enableObrNotification`),isOn:Ee,onChange:async e=>{De(e),await L(O.ENABLE_OBR_NOTIFICATION,e)}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.showResultsToAll,children:t(`settings.showResultsToAll`)})}),(0,H.jsx)(Z,{label:t(`settings.showResultsToAll`),isOn:Oe,onChange:async e=>{ke(e),await L(O.SHOW_NOTIFICATION_TO_ALL,e)}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.enableDiscordLogging,children:t(`settings.enableDiscordLogging`)})}),(0,H.jsx)(Z,{label:t(`settings.enableDiscordLogging`),isOn:Ae,onChange:async e=>{if(e&&!Ye(Me.trim())){await c.notification.show(t(`settings.invalidDiscordWebhookWarning`),`WARNING`),je(!1),await L(O.ENABLE_DISCORD_LOGGING,!1);return}je(e),await L(O.ENABLE_DISCORD_LOGGING,e)}})]}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)(Am,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.discordUrl,children:t(`settings.discordUrl`)})}),(0,H.jsx)(Mm,{theme:e,type:`text`,value:Me,onChange:async e=>{let t=e.target.value,n=t.trim();Ne(t),await L(O.DISCORD_URL,n),j.log(`Discord URL:`,n)},placeholder:`https://discord.com/api/webhooks/...`,maxLength:200})]})]}),(0,H.jsxs)(gm,{theme:e,children:[(0,H.jsx)(Om,{theme:e,children:t(`settings.otherSectionTitle`)}),(0,H.jsxs)(Q,{theme:e,children:[(0,H.jsx)($,{theme:e,children:(0,H.jsx)(A,{theme:e,text:F.enableConsoleLog,children:t(`settings.enableConsoleLog`)})}),(0,H.jsx)(Z,{label:t(`settings.enableConsoleLog`),isOn:Pe,onChange:async e=>{N(e),j.setEnabled(e),await L(O.ENABLE_CONSOLE_LOG,e)}})]})]})]}),(0,H.jsx)(Tm,{isOpen:Je,title:t(`settings.confirmImportTitle`),onClose:()=>Ze(!1),actions:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(_m,{theme:e,variant:`secondary`,onClick:()=>Ze(!1),children:t(`settings.cancel`)}),(0,H.jsx)(_m,{theme:e,onClick:st,children:t(`settings.continue`)})]}),children:(0,H.jsx)(Lm,{theme:e,children:t(`settings.importConfirmMessage`)})})]})};var zm=T.div`
  ${{display:`flex`,height:`100%`,flexDirection:`column`,padding:`1rem`}}
`,Bm=T.div`
  ${{flex:`1 1 0%`,overflowY:`auto`,borderRadius:`0.5rem`,borderWidth:`2px`,"--tw-border-opacity":`1`,borderColor:`rgb(255 255 255 / var(--tw-border-opacity, 1))`,padding:`0.5rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  margin: 10px;
  white-space: break-spaces;
  word-wrap: break-word;
  margin-bottom: 50px;
`,Vm=T.div`
  ${{marginBottom:`0.5rem`,textAlign:`left`}}
`,Hm=T.span`
  ${{marginRight:`0.5rem`,fontSize:`0.75rem`,"--tw-text-opacity":`1`,color:`rgb(203 213 224 / var(--tw-text-opacity, 1))`}}
`,Um=T.span`
  ${{fontSize:`0.875rem`,"--tw-text-opacity":`1`,color:`rgb(255 255 255 / var(--tw-text-opacity, 1))`}}
`;const Wm=()=>{let e=Tt(e=>e.messages),t=(0,B.useRef)(null),{theme:n}=Mt();return(0,B.useEffect)(()=>{t.current?.scrollIntoView({behavior:`smooth`})},[e]),(0,H.jsx)(Wd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,H.jsxs)(zm,{children:[(0,H.jsx)(hm,{theme:n,children:`System Log`}),(0,H.jsxs)(Bm,{children:[e.map(e=>(0,H.jsxs)(Vm,{children:[(0,H.jsx)(Hm,{children:e.timestamp}),(0,H.jsx)(Um,{children:e.text})]},e.id)),(0,H.jsx)(`div`,{ref:t})]})]})})},Gm=`buff_effect_one`,Km=`debuff_effect_one`,qm=[{value:`buff_effect_one`,label:`Buff Effect One`},{value:`buff_effect_two`,label:`Buff Effect Two`}],Jm=[{value:`debuff_effect_one`,label:`Debuff Effect One`},{value:`debuff_effect_two`,label:`Debuff Effect Two`}],Ym=e=>qm.some(t=>t.value===e),Xm=e=>Jm.some(t=>t.value===e),Zm=e=>{switch(e){case`buff_effect_two`:return`
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
`}},Qm=e=>{switch(e){case`debuff_effect_two`:return`
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
`}};var $m=t.EXTENSIONID,eh=`com.battle-system.forge`;const th={SYSTEM_NAME:`${$m}/SystemName`,IMPORT_DATE:`${$m}/ImportDate`,SNAPSHOT_PUBLIC_ID:`${$m}/SnapshotPublicId`};var nh=(()=>{let e=E.attributes,t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||``,maxHpBid:n?.attr_bid||``}})(),rh=(e,t)=>e instanceof Error&&e.message?e.message:t,ih=T.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,ah=T.div`
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`,oh=T.h2`
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  padding: 12px 15px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 400;
`,sh=T.p`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`,ch=T.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 15px;
`,lh=T.div`
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
`,uh=T.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.theme.PRIMARY};
  margin-top: 5px;
`,dh=T.div`
  margin-top: 16px;
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 14px;
`,fh=T.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 10px 0;
  font-size: 15px;
`,ph=T.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`,mh=T.label`
  color: ${e=>e.theme.PRIMARY};
  min-width: 84px;
  font-size: 13px;
`,hh=T.select`
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
`,gh=T.div`
  background-color: ${()=>f(`#FF0000`,.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,_h=T.div`
  background-color: ${()=>f(`#00FF00`,.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,vh=T.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`,yh=T.p`
  color: ${e=>f(e.theme.PRIMARY,.9)};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,bh=T.div`
  margin-top: 30px;
`,xh=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Sh=T.div`
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ch=T.div`
  flex: 1;
`,wh=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`,Th=T.div`
  color: ${e=>f(e.theme.PRIMARY,.7)};
  font-size: 13px;
  font-style: italic;
`,Eh=T.div`
  display: flex;
  gap: 8px;
`,Dh=T.button`
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
`,Oh={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}};const kh=()=>{let{theme:e,updateThemeFromSystem:t}=Mt(),n=V(e=>e.sceneMetadata),r=V(e=>e.roomMetadata),i=r,a=V(e=>e.systemData),o=V(e=>e.setSystemData),[s,l]=(0,B.useState)(()=>Re().premiumAuthorized),[u,d]=(0,B.useState)(``),[p,m]=(0,B.useState)(!1),[h,g]=(0,B.useState)(null),[_,v]=(0,B.useState)(null),[y,b]=(0,B.useState)(``),[x,S]=(0,B.useState)(null),[w,T]=(0,B.useState)(null),[D,ee]=(0,B.useState)([]),[te,ne]=(0,B.useState)(``),[re,k]=(0,B.useState)(``),[ie,ae]=(0,B.useState)(Gm),[oe,se]=(0,B.useState)(Km),[ce,le]=(0,B.useState)(!1),[A,ue]=(0,B.useState)(!1),[de,fe]=(0,B.useState)(null),[pe,me]=(0,B.useState)(null),[he,ge]=(0,B.useState)([]),[_e,ve]=(0,B.useState)(!1),[be,M]=(0,B.useState)(null),[xe,Se]=(0,B.useState)(``);(0,B.useEffect)(()=>{let e=!0,t=async()=>{await ct(),e&&l(Re().premiumAuthorized)},n=Me(t=>{e&&l(t.premiumAuthorized)});return t(),()=>{e=!1,n()}},[]),(0,B.useEffect)(()=>{Ce(),De()},[n,r,a,s]);let Ce=()=>{try{if(!s){let e={primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},t=i[O.BUFF_VISUAL_PRESET],n=i[O.DEBUFF_VISUAL_PRESET],r=Ym(t)?t:Gm,a=Xm(n)?n:Km;b(E.name),S(null),T(e),ee(E.attributes),ne(nh.currentHpBid),k(nh.maxHpBid),ae(r),se(a);return}if(a){let e=i[O.HP_CURRENT_BID],t=i[O.HP_MAX_BID],n=i[O.BUFF_VISUAL_PRESET],r=i[O.DEBUFF_VISUAL_PRESET],o=Ym(n)?n:null,s=Xm(r)?r:null;b(a.systemName),S(a.importDate),T(a.theme),ee(a.attributes),ne(e||``),k(t||``),de&&o===de&&fe(null),pe&&s===pe&&me(null),!ce&&!de&&ae(e=>o||e),!A&&!pe&&se(e=>s||e);return}let e=r[th.SYSTEM_NAME],t=r[th.IMPORT_DATE],n=i[O.HP_CURRENT_BID],o=i[O.HP_MAX_BID],c=i[O.BUFF_VISUAL_PRESET],l=i[O.DEBUFF_VISUAL_PRESET],u=Ym(c)?c:null,d=Xm(l)?l:null;b(e||E.name),S(t||null),T({primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url}),ee(E.attributes),ne(n||``),k(o||``),de&&u===de&&fe(null),pe&&d===pe&&me(null),!ce&&!de&&ae(e=>u||e),!A&&!pe&&se(e=>d||e)}catch(e){j.error(`Error loading system from cache:`,e)}},we=async(e,t)=>{await c.room.setMetadata({[e]:t})},Te=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Imported ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Imported ${t} is not a JSON array`);return n}throw Error(`Imported ${t} has invalid type`)},Ee=D.filter(e=>e.attr_type===`numb`),De=()=>{try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(n&&n.startsWith(`${eh}.`)&&n.endsWith(`.backup`)){let t=localStorage.getItem(n);if(t){let n=JSON.parse(t);e.push(n)}}}e.sort((e,t)=>new Date(t.backupDate).getTime()-new Date(e.backupDate).getTime()),ge(e)}catch(e){j.error(`Error loading backups:`,e)}},Oe=async e=>{try{if(!a){j.warn(`Cannot create backup: runtime system data is unavailable`);return}let e=a.systemName||E.name,t={name:e,backupDate:new Date().toISOString(),theme_primary:a.theme.primary,theme_offset:a.theme.offset,theme_background:a.theme.background,theme_border:a.theme.border,background_url:a.theme.background_url,card_layout:a.cardLayout,list_layout:a.listLayout,attributes:a.attributes},n=`${eh}.${e}.backup`;localStorage.setItem(n,JSON.stringify(t)),j.log(`Backup created for ${e}`),De()}catch(e){throw j.error(`Error creating backup:`,e),e}},ke=e=>{try{let t=`${eh}.${e}.backup`;localStorage.removeItem(t),j.log(`Backup deleted for ${e}`),De(),v(`Backup for "${e}" deleted successfully`)}catch(e){j.error(`Error deleting backup:`,e),g(`Failed to delete backup`)}},Ae=(e,t)=>{Se(e),M(()=>t),ve(!0)},je=async()=>{ve(!1),be&&(await be(),M(null))},Ne=()=>{ve(!1),M(null),Se(``)},Pe=async()=>{if(!u.trim()){g(`Please enter a share_id`);return}Ae(`This will overwrite your current system data. A backup of your current system will be saved to local storage. Do you want to continue?`,async()=>{await Fe()})},Fe=async()=>{if(!He()){g(`Premium account required. Connect and use a premium Battle-System account before importing systems.`);return}m(!0),g(null),v(null);try{await ot();let{data:e,error:n}=await pt(async()=>C.rpc(`bs_forge_import_system_snapshot`,{p_source_share_id:u.trim()}));if(n)throw n;if(!e){g(`No system found with that share_id`),m(!1);return}let r=Array.isArray(e)?e[0]:e;if(!r||typeof r.snapshot_public_id!=`string`)throw Error(`Snapshot import did not return a valid record`);let i=Te(r.card_layout,`card_layout`),a=Te(r.list_layout,`list_layout`),s=Te(r.attributes,`attributes`);if(!Array.isArray(s))throw Error(`Imported attributes are not a valid array`);await Oe(y);let l={primary:r.theme_primary,offset:r.theme_offset,background:r.theme_background,border:r.theme_border,background_url:r.background_url},f=new Date().toISOString();await c.room.setMetadata({[th.SNAPSHOT_PUBLIC_ID]:r.snapshot_public_id,[th.SYSTEM_NAME]:r.system_name,[th.IMPORT_DATE]:f}),o({theme:l,cardLayout:i,listLayout:a,attributes:s,systemName:r.system_name,importDate:f,snapshotPublicId:r.snapshot_public_id}),b(r.system_name),S(f),T(l),t(l.primary,l.offset,l.background,l.border,l.background_url),v(`System "${r.system_name}" loaded successfully! Backup created.`),d(``),j.log(`System snapshot imported and loaded:`,{systemName:r.system_name,snapshotPublicId:r.snapshot_public_id})}catch(e){j.error(`Error fetching system:`,e),g(rh(e,`An error occurred while fetching the system`))}finally{m(!1)}},N=async e=>{Ae(`This will restore the system "${e.name}" from backup. A backup of your current system will be created. Do you want to continue?`,async()=>{await Ie(e)})},Ie=async e=>{m(!0),g(null),v(null);try{if(!He()){g(`Premium account required. Connect and use a premium Battle-System account before restoring backups for room sharing.`);return}await ot(),await Oe(y);let n={primary:e.theme_primary,offset:e.theme_offset,background:e.theme_background,border:e.theme_border,background_url:e.background_url};if(!Array.isArray(e.card_layout)||!Array.isArray(e.list_layout)||!Array.isArray(e.attributes))throw Error(`Backup data is invalid`);let r=new Date().toISOString(),i=`forge-backup:${e.name.trim().toLowerCase()}`,{data:a,error:s}=await pt(async()=>C.rpc(`bs_forge_upsert_user_snapshot_payload`,{p_source_share_id:i,p_system_name:e.name,p_background_url:e.background_url,p_theme_primary:e.theme_primary,p_theme_offset:e.theme_offset,p_theme_background:e.theme_background,p_theme_border:e.theme_border,p_card_layout:e.card_layout,p_list_layout:e.list_layout,p_attributes:e.attributes}));if(s)throw s;let l=Array.isArray(a)?a[0]:a;if(!l||typeof l.snapshot_public_id!=`string`)throw Error(`Backup restore snapshot publish failed`);o({theme:n,cardLayout:e.card_layout,listLayout:e.list_layout,attributes:e.attributes,systemName:e.name,importDate:r,snapshotPublicId:l.snapshot_public_id}),await c.room.setMetadata({[th.SNAPSHOT_PUBLIC_ID]:l.snapshot_public_id,[th.SYSTEM_NAME]:e.name,[th.IMPORT_DATE]:r}),b(e.name),S(r),T(n),t(n.primary,n.offset,n.background,n.border,n.background_url),v(`System "${e.name}" restored from backup successfully!`),j.log(`System restored from backup:`,e.name)}catch(e){j.error(`Error restoring backup:`,e),g(`Failed to restore system from backup`)}finally{m(!1)}},Le=async()=>{m(!0),g(null),v(null);try{let e={primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url};o({theme:e,cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,snapshotPublicId:null}),await c.room.setMetadata({[th.SNAPSHOT_PUBLIC_ID]:null,[th.SYSTEM_NAME]:E.name,[th.IMPORT_DATE]:null}),b(E.name),S(null),T(e),t(e.primary,e.offset,e.background,e.border,e.background_url),v(`Reset to default system successfully!`)}catch(e){g(`Failed to reset to default system`),j.error(`Error resetting to default:`,e)}finally{m(!1)}},P=e=>e?new Date(e).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):null,ze=!s,Be=!s;return(0,H.jsxs)(Wd.div,{variants:Oh,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,H.jsxs)(mm,{theme:e,children:[(0,H.jsx)(hm,{theme:e,children:`System Configuration`}),(0,H.jsx)(oh,{theme:e,children:y}),x?(0,H.jsxs)(sh,{theme:e,children:[`Imported: `,P(x)]}):(0,H.jsx)(sh,{theme:e,children:`Using Default System`}),w&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(ch,{children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(lh,{color:w.primary,theme:e,children:w.primary}),(0,H.jsx)(uh,{theme:e,children:`PRIMARY`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(lh,{color:w.offset,theme:e,children:w.offset}),(0,H.jsx)(uh,{theme:e,children:`OFFSET`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(lh,{color:w.background,theme:e,children:w.background}),(0,H.jsx)(uh,{theme:e,children:`BG`})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(lh,{color:w.border,theme:e,children:w.border}),(0,H.jsx)(uh,{theme:e,children:`BORDER`})]})]}),(0,H.jsxs)(dh,{theme:e,children:[(0,H.jsx)(fh,{theme:e,children:`System Settings`}),(0,H.jsxs)(ph,{children:[(0,H.jsx)(mh,{theme:e,children:`Current HP`}),(0,H.jsxs)(hh,{theme:e,value:te,disabled:Be,onChange:async e=>{if(Be)return;let t=e.target.value;ne(t),await we(O.HP_CURRENT_BID,t)},children:[(0,H.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),Ee.map(e=>(0,H.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,H.jsxs)(ph,{children:[(0,H.jsx)(mh,{theme:e,children:`Max HP`}),(0,H.jsxs)(hh,{theme:e,value:re,disabled:Be,onChange:async e=>{if(Be)return;let t=e.target.value;k(t),await we(O.HP_MAX_BID,t)},children:[(0,H.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),Ee.map(e=>(0,H.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),Be&&(0,H.jsx)(sh,{theme:e,children:`Premium account required to edit HP mapping.`}),(0,H.jsxs)(ph,{children:[(0,H.jsx)(mh,{theme:e,children:`Buff Visual`}),(0,H.jsx)(hh,{theme:e,value:ie,onChange:async e=>{let t=e.target.value;if(Ym(t)){ae(t),fe(t),le(!0);try{await we(O.BUFF_VISUAL_PRESET,t)}finally{le(!1)}}},children:qm.map(e=>(0,H.jsx)(`option`,{value:e.value,children:e.label},e.value))})]}),(0,H.jsxs)(ph,{children:[(0,H.jsx)(mh,{theme:e,children:`Debuff Visual`}),(0,H.jsx)(hh,{theme:e,value:oe,onChange:async e=>{let t=e.target.value;if(Xm(t)){se(t),me(t),ue(!0);try{await we(O.DEBUFF_VISUAL_PRESET,t)}finally{ue(!1)}}},children:Jm.map(e=>(0,H.jsx)(`option`,{value:e.value,children:e.label},e.value))})]})]})]}),(0,H.jsxs)(ah,{theme:e,children:[(0,H.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0},children:`Import New System`}),(0,H.jsx)(`p`,{style:{color:f(e.PRIMARY,.8),fontSize:`14px`},children:ze?`Premium account required to import new/custom systems.`:`Enter a share_id to download and activate a new game system configuration.`}),(0,H.jsx)(ih,{children:(0,H.jsx)(vm,{theme:e,type:`text`,value:u,onChange:e=>d(e.target.value),placeholder:ze?``:`Enter Share Id...`,disabled:p||ze,onKeyPress:e=>e.key===`Enter`&&Pe()})}),(0,H.jsxs)(vh,{children:[(0,H.jsx)(_m,{theme:e,onClick:Pe,disabled:p||ze||!u.trim(),children:p?`....!`:`Import System`}),(0,H.jsx)(_m,{theme:e,variant:`secondary`,onClick:Le,disabled:p,children:`Use Default`})]})]}),h&&(0,H.jsxs)(gh,{theme:e,children:[(0,H.jsx)(`strong`,{children:`Error:`}),` `,h]}),_&&(0,H.jsxs)(_h,{theme:e,children:[(0,H.jsx)(`strong`,{children:`Success:`}),` `,_]}),he.length>0&&(0,H.jsx)(bh,{children:(0,H.jsxs)(gm,{theme:e,children:[(0,H.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0,marginBottom:`15px`},children:`System Backups`}),(0,H.jsx)(xh,{children:he.map(t=>(0,H.jsxs)(Sh,{theme:e,children:[(0,H.jsxs)(Ch,{children:[(0,H.jsx)(wh,{theme:e,children:t.name}),(0,H.jsxs)(Th,{theme:e,children:[`Backed up: `,P(t.backupDate)]})]}),(0,H.jsxs)(Eh,{children:[(0,H.jsx)(Dh,{theme:e,onClick:()=>N(t),disabled:p,title:`Import this backup`,children:(0,H.jsx)(ye,{size:18})}),(0,H.jsx)(Dh,{theme:e,$variant:`danger`,onClick:()=>ke(t.name),disabled:p,title:`Delete this backup`,children:(0,H.jsx)(Je,{size:18})})]})]},`${t.name}-${t.backupDate}`))})]})})]}),(0,H.jsx)(Tm,{isOpen:_e,title:`Confirm Action`,onClose:Ne,actions:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(_m,{theme:e,variant:`secondary`,onClick:Ne,children:`Cancel`}),(0,H.jsx)(_m,{theme:e,onClick:je,children:`Confirm`})]}),children:(0,H.jsx)(yh,{theme:e,children:xe})})]},`system`)};function Ah(e,t){let n=e.replace(`#`,``);n.length===3&&(n=n.split(``).map(e=>e+e).join(``));let r=parseInt(n,16);return`rgba(${r>>16&255}, ${r>>8&255}, ${r&255}, ${t})`}var jh=class{static async CenterViewportOnImage(e){let t=await c.scene.grid.getDpi(),n=await c.viewport.getScale(),r=await c.viewport.getWidth(),i=await c.viewport.getHeight(),a={x:r/2,y:i/2},o={x:a.x/n,y:a.y/n},s=await this.GetImageCenter(e,t),l={x:s.x-o.x,y:s.y-o.y},u={x:l.x*n*-1,y:l.y*n*-1};await c.viewport.animateTo({position:u,scale:n})}static async GetImageCenter(t,n){if(e(t)){let e=n/t.grid.dpi,r=t.image.width*e,i=t.image.height*e,a=t.grid.offset.x/t.image.width*r,o=t.grid.offset.y/t.image.height*i;return{x:t.position.x-a+r/2,y:t.position.y-o+i/2}}else if(o(t)&&t.points.length>0)return{x:t.points[0].x,y:t.points[0].y};else return{x:t.position.x,y:t.position.y}}};const Mh=`${z}/effects`;var Nh=`${z}/effects-expired`,Ph=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Fh=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ih=T.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`,Lh=T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
`,Rh=T.div`
  flex: 0 0 120px;
  min-width: 120px;
  display: flex;
  align-items: flex-end;
`,zh=T.label`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`,Bh=T.input`
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
`,Vh=T.select`
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
`,Hh=T(Vh)`
  min-width: 180px;
  height: 96px;
  padding-right: 8px;
`,Uh=T.button`
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
`,Wh=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 240px;
  overflow-y: auto;
`,Gh=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background: ${e=>f(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,Kh=T.div`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  font-size: 12px;
`,qh=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,Jh=T.p`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,Yh=T.p`
  color: #ff6b6b;
  margin: 0;
  font-size: 12px;
`,Xh=T.div`
  position: relative;
  display: inline-flex;
`,Zh=T.button`
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
`,Qh=T.span`
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
`,$h=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const eg=({items:e,units:n,setItems:r,playerData:i})=>{let[a,o]=(0,B.useState)(null),[s,l]=(0,B.useState)(``),[u,d]=(0,B.useState)(`1`),[f,m]=(0,B.useState)(`rounds`),[h,g]=(0,B.useState)(`start`),[_,v]=(0,B.useState)(`neutral`),[y,b]=(0,B.useState)([]),[x,S]=(0,B.useState)(null),C=(0,B.useMemo)(()=>{let t=new Map;return e.forEach(e=>{e.metadata?.[p.ON_LIST]===!0&&t.set(e.id,$h(e.metadata?.[Mh]))}),t},[e]),w=e=>C.get(e)||[],T=async(t,n)=>{let i=n.filter(e=>e.remaining>0);r(e.map(e=>{if(e.id!==t)return e;let n={...e.metadata||{}};return i.length>0?n[Mh]=i:delete n[Mh],{...e,metadata:n}})),await c.scene.items.updateItems([t],e=>{let t={...e[0].metadata||{}};i.length>0?t[Mh]=i:delete t[Mh],e[0].metadata=t})},E=async e=>{try{await c.broadcast.sendMessage(Nh,{message:e},{destination:`ALL`})}catch(t){j.error(`Failed to broadcast expired effect message`,t),await c.notification.show(e,`WARNING`)}},D=async e=>{if(e.length!==0)try{await c.broadcast.sendMessage(t.MARKCONNECT,e,{destination:`LOCAL`})}catch(e){j.error(`Failed to broadcast marked effect update`,e)}},ee=async(t,n)=>{if(String(i?.role||``).toUpperCase()!==`GM`)return;let r=[],a=[],o=[];e.forEach(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return;let i=$h(e.metadata?.[Mh]);if(i.length===0)return;let s=!1,c=[];i.forEach(r=>{if(!(r.endTiming===t&&(r.durationType===`turns`||e.id===n))){c.push(r);return}let i=r.remaining-1;if(s=!0,i<=0){a.push(`${e.name||`Unit`}: ${r.name} expired`),o.push({LabelName:r.name,TokenId:e.id,Show:!1});return}c.push({...r,remaining:i})}),s&&r.push({unitId:e.id,effects:c})});for(let e of r)await T(e.unitId,e.effects);if(await D(o),a.length>0)for(let e of a)await E(e)},te=(0,B.useMemo)(()=>a&&n.find(e=>e.id===a)||null,[a,n]),ne=(0,B.useMemo)(()=>a?w(a):[],[a,C]);return(0,B.useEffect)(()=>{let e=c.broadcast.onMessage(Nh,async e=>{let t=e.data?.message;typeof t!=`string`||!t.trim()||await c.notification.show(t,`WARNING`)});return()=>{e()}},[]),{effectsModalUnitId:a,selectedEffectsUnit:te,activeEffectsForSelectedUnit:ne,effectNameInput:s,setEffectNameInput:l,effectDurationInput:u,setEffectDurationInput:d,effectDurationType:f,setEffectDurationType:m,effectEndTiming:h,setEffectEndTiming:g,effectType:_,setEffectType:v,effectTargetIds:y,setEffectTargetIds:e=>{b(Array.from(new Set(e)))},effectsModalError:x,units:n,getEffectsForUnit:w,handleOpenEffectsModal:e=>{S(null),l(``),d(`1`),m(`rounds`),g(`start`),v(`neutral`),b([e]),o(e)},handleCloseEffectsModal:()=>{o(null),S(null)},handleAddEffect:async()=>{if(!a)return;let t=s.trim(),r=parseInt(u,10);if(!t){S(`Enter an effect name.`);return}if(!Number.isFinite(r)||r<=0){S(`Duration must be a positive number.`);return}let i=Array.from(new Set(y.filter(e=>n.some(t=>t.id===e))));if(i.length===0){S(`Select at least one target.`);return}let o=w(a),c=te?.name||e.find(e=>e.id===a)?.name||`Unknown`,p={id:crypto.randomUUID(),name:t,remaining:r,durationType:f,endTiming:h,effectType:_,targets:i,createdByName:c,createdById:a};await T(a,[...o,p]),await D([{LabelName:p.name,TokenId:a,Show:!0}]),S(null),l(``),d(`1`),v(`neutral`),b([a])},handleDeleteEffect:async e=>{if(!a)return;let t=w(a),n=t.find(t=>t.id===e);await T(a,t.filter(t=>t.id!==e)),n&&await D([{LabelName:n.name,TokenId:a,Show:!1}])},processEffectsForTurnEvent:ee}},tg=({manager:e})=>{let{theme:t}=Mt(),n=(0,B.useMemo)(()=>{let t=new Map;return e.units.forEach(e=>{t.set(e.id,e.name)}),t},[e.units]),r=e=>e===`buff`?`Buff`:e===`debuff`?`Debuff`:`Neutral`,i=e=>{if(e.length===0)return`No targets`;let t=e.map(e=>n.get(e)).filter(e=>typeof e==`string`&&e.length>0);return t.length===0?`${e.length} target${e.length===1?``:`s`}`:t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`};return(0,H.jsx)(Tm,{isOpen:!!e.effectsModalUnitId,title:e.selectedEffectsUnit?`Effects: ${e.selectedEffectsUnit.name}`:`Effects`,onClose:e.handleCloseEffectsModal,minWidth:`520px`,maxWidth:`600px`,children:(0,H.jsxs)(Ph,{children:[(0,H.jsxs)(Fh,{children:[(0,H.jsxs)(Ih,{children:[(0,H.jsxs)(Lh,{style:{flex:`0 0 120px`},children:[(0,H.jsx)(zh,{theme:t,children:`Effect`}),(0,H.jsx)(Bh,{theme:t,type:`text`,placeholder:`Name`,value:e.effectNameInput,onChange:t=>e.setEffectNameInput(t.target.value)})]}),(0,H.jsxs)(Lh,{style:{flex:`0 0 140px`},children:[(0,H.jsx)(zh,{theme:t,children:`Duration`}),(0,H.jsx)(Bh,{theme:t,type:`number`,min:1,value:e.effectDurationInput,onChange:t=>e.setEffectDurationInput(t.target.value)})]}),(0,H.jsxs)(Lh,{style:{flex:`0 0 120px`},children:[(0,H.jsx)(zh,{theme:t,children:`By`}),(0,H.jsxs)(Vh,{theme:t,value:e.effectDurationType,onChange:t=>e.setEffectDurationType(t.target.value),children:[(0,H.jsx)(`option`,{value:`turns`,children:`Turns`}),(0,H.jsx)(`option`,{value:`rounds`,children:`Rounds`})]})]})]}),(0,H.jsxs)(Ih,{children:[(0,H.jsxs)(Lh,{style:{flex:`0 0 120px`},children:[(0,H.jsx)(zh,{theme:t,children:`Type`}),(0,H.jsxs)(Vh,{theme:t,value:e.effectType,onChange:t=>e.setEffectType(t.target.value),children:[(0,H.jsx)(`option`,{value:`neutral`,children:`Neutral`}),(0,H.jsx)(`option`,{value:`buff`,children:`Buff`}),(0,H.jsx)(`option`,{value:`debuff`,children:`Debuff`})]})]}),(0,H.jsxs)(Lh,{style:{flex:`0 0 140px`},children:[(0,H.jsx)(zh,{theme:t,children:`Ends at`}),(0,H.jsxs)(Vh,{theme:t,value:e.effectEndTiming,onChange:t=>e.setEffectEndTiming(t.target.value),children:[(0,H.jsx)(`option`,{value:`start`,children:`Start of turn`}),(0,H.jsx)(`option`,{value:`end`,children:`End of turn`})]})]}),(0,H.jsx)(Rh,{children:(0,H.jsx)(Uh,{theme:t,onClick:e.handleAddEffect,style:{width:`100%`},children:`Add`})})]})]}),(0,H.jsxs)(Lh,{children:[(0,H.jsx)(zh,{theme:t,children:`Targets`}),(0,H.jsx)(Hh,{theme:t,multiple:!0,value:e.effectTargetIds,onChange:t=>{let n=Array.from(t.target.selectedOptions).map(e=>e.value);e.setEffectTargetIds(n)},children:e.units.map(e=>(0,H.jsx)(`option`,{value:e.id,children:e.name},e.id))})]}),e.effectsModalError&&(0,H.jsx)(Yh,{theme:t,children:e.effectsModalError}),e.activeEffectsForSelectedUnit.length===0?(0,H.jsx)(Jh,{theme:t,children:`No active effects.`}):(0,H.jsx)(Wh,{children:e.activeEffectsForSelectedUnit.map(n=>(0,H.jsxs)(Gh,{theme:t,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(qh,{theme:t,children:n.name}),(0,H.jsxs)(Kh,{theme:t,children:[r(n.effectType),` • `,n.remaining,` `,n.durationType,` • ends at `,n.endTiming===`start`?`start of turn`:`end of turn`,` • by `,n.createdByName]}),(0,H.jsxs)(Kh,{theme:t,children:[`Targets: `,i(n.targets)]})]}),(0,H.jsx)(Uh,{theme:t,onClick:()=>{e.handleDeleteEffect(n.id)},children:`Delete`})]},n.id))})]})})},ng=({activeEffectsCount:e,canInteract:t,onOpen:n,icon:r})=>{let{theme:i}=Mt();return(0,H.jsxs)(Xh,{children:[(0,H.jsx)(Zh,{theme:i,$active:e>0,disabled:!t,onClick:()=>{t&&n()},children:r||(0,H.jsx)(Se,{})}),e>0&&(0,H.jsx)(Qh,{theme:i,children:e>99?`99+`:e})]})};var rg=T.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,ig=T.input`
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
`;const ag=({theme:e,unit:t,canInteract:n,elevationDraftValue:r,onElevationDraftChange:i,onCommitElevationChange:a})=>(0,H.jsx)(rg,{theme:e,children:(0,H.jsx)(ig,{theme:e,type:`text`,inputMode:`decimal`,min:-999,max:999,step:1,value:r??String(t.elevation??0),readOnly:!n,onChange:n?e=>i(t.id,e.target.value):void 0,onBlur:n?e=>a(t.id,e.target.value):void 0,onKeyDown:e=>{n&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}})}),og=({theme:e,canInteract:t,icon:n,activeEffectsCount:r,onOpen:i})=>(0,H.jsx)(rg,{theme:e,children:(0,H.jsx)(ng,{activeEffectsCount:r,canInteract:t,icon:n||(0,H.jsx)(Se,{}),onOpen:i})});var sg=`${z}/elevation-badge`,cg=`${z}/elevation-badge-owner`,lg=`${z}/elevation`,ug=200,dg=40,fg=60,pg=120,mg=24,hg=(e,t)=>{if(!e)return;if(e.startsWith(`#`))return Ah(e,t);let n=e.match(/^rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\)$/i);if(n){let[,e,r,i]=n;return`rgba(${e}, ${r}, ${i}, ${t})`}let r=e.match(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i);if(r){let[,e,n,i]=r;return`rgba(${e}, ${n}, ${i}, ${t})`}return e},gg=e=>`
    0 1px 1px ${f(e.BACKGROUND,.95)},
    0 0 2px ${f(e.BACKGROUND,.85)}
  `,_g=/(\d+)d(\d+)([kd][hl]\d+|!)?/gi,vg={anchor:mt,aperture:lt,award:Ne,batterycharging:Ge,book:$e,calendar:P,clock:Le,cloudlightning:it,drama:Qe,carrot:st,bone:I,compass:Pe,dollarsign:nt,feather:re,eye:at,heart:Ae,moon:et,music:ge,shield:Ee,star:ht,sun:Se,target:de,users:ve,wind:k,zap:be,sword:_e,swords:me,axe:Ue,bowarrow:Ve,coins:R,wand:qe,flower:xe,skull:pe,castle:Ze,cross:Ke,testtubediagonal:M,squirrel:ae,snowflake:De,shell:Oe,pickaxe:fe,heartplus:ke,heartcrack:je,fan:ze},yg=T.div`
  padding: 2px;
  width: 100%;
`,bg=T.h1`
  color: ${e=>e.theme.PRIMARY};
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`,xg=T.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
`,Sg=T.div`
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
`,Cg=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.$compactMode?`8px`:`16px`};
`,wg=T.button`
  background: ${e=>e.disabled?f(e.theme.BORDER,.3):f(e.theme.OFFSET,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>gg(e.theme)};
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
`,Tg=T(wg)`
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
`,Eg=T(wg)`
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
`,Dg=T(wg)`
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
`,Og=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: ${e=>e.$compactMode?`14px`:`16px`};
  font-weight: 600;
  min-width: ${e=>e.$compactMode?`44px`:`80px`};
  text-align: center;
`,kg=T.table`
  width: ${e=>e.$compact?`max-content`:`100%`};
  min-width: ${e=>e.$compact?`${ug}px`:`100%`};
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
`,Ag=T.thead`
  background-color: ${e=>f(e.theme.BACKGROUND,.5)};
`,jg=T.tr``,Mg=T.th`
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
`,Ng=T.div`
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
`,Pg=T.tbody``,Fg=T.tr`
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
`,Ig=T.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,Lg=T(Ig)`
  font-weight: 700;
  font-size: 18px;
  color: ${e=>e.theme.OFFSET};
  min-width: 60px;
`,Rg=T(Ig)`
  min-width: 48px;
`,zg=T.button`
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
`,Bg=T.img`
  width: 18px;
  height: 18px;
  pointer-events: none;
`,Vg=T.div`
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
`,Hg=T.input`
  background: ${e=>e.$isRollable?f(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.3)`};
  border: 1px solid ${e=>e.$isRollable?f(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?gg(e.theme):`none`};
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
`,Ug=T(Ig)`
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
`,Wg=T.input`
  background: ${e=>e.$isRollable?f(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.4)`};
  border: 1px solid ${e=>e.$isRollable?f(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?gg(e.theme):`none`};
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
`,Gg=T.select`
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
`,Kg=T.span`
  margin: 0 2px;
  color: ${e=>e.theme.OFFSET};
  font-weight: 500;
`,qg=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,Jg=T.button`
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
`,Yg=T.input`
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
`,Xg=T.span`
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
`,Zg=T.div`
  display: flex;
  flex-wrap: wrap;
  width: 62px;
  gap: 3px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,Qg=T.button`
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
`,$g=T.button`
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
`,e_=T.div`
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
`,t_=T(Ig)`
  width: 24px;
  min-width: 24px;
  max-width: 24px;
  padding: 0;
  position: relative;
`,n_=T.div`
  position: absolute;
  inset: 0;
  min-height: 40px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0 10px;
`,r_=T.div`
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
`,i_=T.div`
  flex: 1;
  height: 100%;
  padding: 0 8px;
  margin: 0 -10px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`,a_=T.div`
  width: 6px;
  flex: 1;
  height: 100%;
  background-repeat: repeat-y;
  background-position: center;
  background-size: 6px 16px;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='16' viewBox='0 0 6 16' preserveAspectRatio='none'%3E%3Cpolyline points='3,0 0,4 6,8 0,12 3,16' fill='none' stroke='${encodeURIComponent(e.theme.BORDER)}' stroke-width='1.2'/%3E%3C/svg%3E")`};
`,o_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
`,s_=T.button`
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
`,c_=T.p`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  margin: 0 0 12px 0;
  font-size: 13px;
`,l_=T.p`
  color: #ff6b6b;
  margin: 10px 0 0 0;
  font-size: 13px;
`,u_=T.div`
  height: 1px;
  margin: 12px 0;
  background: ${e=>f(e.theme.BORDER,.7)};
`,d_=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.35)};
`,f_=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,p_=T.div`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  font-size: 11px;
`,m_=T.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`,h_=T.button`
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
`,g_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,__=T.p`
  color: ${e=>f(e.theme.PRIMARY,.78)};
  margin: 0;
  font-size: 12px;
`,v_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 320px;
  overflow-y: auto;
`,y_=T.div`
  background: ${e=>f(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,b_=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,x_=T.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #4b5563;
  background: rgba(0, 0, 0, 0.2);
  accent-color: #ffffff;
  margin: 0;
  pointer-events: none;
`,S_=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
`,C_=T.div`
  color: ${e=>f(e.theme.PRIMARY,.85)};
  font-size: 12px;
  font-style: italic;
  line-height: 1.25;
  white-space: pre-wrap;
`,w_=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`,T_=T.button`
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
`,E_=T.p`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,D_=T.div`
  width: 100%;
  min-height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>f(e.theme.BORDER,.8)};
  background: ${e=>f(e.theme.BACKGROUND,.55)};
`,O_=T.div`
  width: ${e=>e.$small?`40px`:`60px`};
  min-width: ${e=>e.$small?`40px`:`60px`};
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>f(e.theme.BORDER,.8)};
  background: ${e=>f(e.theme.BACKGROUND,.55)};
`,k_=(e,t,n)=>{let r=[{id:crypto.randomUUID(),type:`initiative`,description:n(`initiative.defaultInitiativeDescription`)},{id:crypto.randomUUID(),type:`name`,description:n(`initiative.defaultNameDescription`)}],i=t?[{id:`card-column`,type:`card-column`}]:[];if(!e||e.length===0)return[...r,...i];let a=[...e].sort((e,t)=>e.col-t.col).map(e=>({id:e.id,type:e.type,name:e.styles?.labelName,useIcon:e.styles?.labelMode===`icon`,iconType:e.styles?.labelIcon,description:e.styles?.description,styles:e.styles}));return[...r,...a,...i]};const A_=()=>{let{t:r}=ce(),{theme:i}=Mt(),{listLayout:a,attributes:o,isLoading:s}=Dm(),l=V(e=>e.roomMetadata),u=V(e=>e.sceneMetadata),d=V(e=>e.items),f=V(e=>e.partyData),m=V(e=>e.playerData),h=V(e=>e.gridDpi),g=V(e=>e.setItems),[_,v]=(0,B.useState)([]),[y,b]=(0,B.useState)([]),[x,S]=(0,B.useState)(null),[C,w]=(0,B.useState)(1),[T,E]=(0,B.useState)(new Set),[D,ee]=(0,B.useState)(null),[te,re]=(0,B.useState)(null),[k,ie]=(0,B.useState)(!1),[ae,oe]=(0,B.useState)(!1),[se,le]=(0,B.useState)(!1),[A,de]=(0,B.useState)({}),[fe,pe]=(0,B.useState)({}),[me,he]=(0,B.useState)({}),[ge,_e]=(0,B.useState)(null),[ye,be]=(0,B.useState)({}),[M,xe]=(0,B.useState)(null),[Ce,we]=(0,B.useState)(null),[Te,Ee]=(0,B.useState)(!1),[De,Oe]=(0,B.useState)(!1),[ke,Ae]=(0,B.useState)(!1),[je,Me]=(0,B.useState)(()=>window.innerWidth<400),[Ne,Pe]=(0,B.useState)(null),Fe=(0,B.useRef)(null),N=(0,B.useRef)({}),Ie=(0,B.useRef)({}),Le=(0,B.useRef)(null);(0,B.useEffect)(()=>{let e=()=>{Me(window.innerWidth<400)};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let Re=(0,B.useMemo)(()=>{let e=Array.isArray(m?.selection)?m.selection:[];return new Set(e)},[m?.selection]),P=l,ze=P[O.REVERSE_INITIATIVE]||!1,Be=P[O.POPCORN_INITIATIVE]||!1,Ve=P[O.SHOW_CARD_ACCESS]||!1,He=P[O.SHOW_NON_PARTY_UNITS]||!1,Ue=P[O.SHOW_LIST_HP_NUMBERS],We=typeof Ue==`boolean`?Ue:!0,Ge=P[O.DICE_RANGE]||``,Ke=P[O.INITIATIVE_MODIFIER_BID]||``,qe=P[O.INITIATIVE_MODIFIER_EXPR]||`@STAT`,Je=qe.trim().length>0?qe:`@STAT`,Ye=P[O.SHOW_OWNER_ONLY_EDIT]||!1,Xe=String(m?.role||``).toUpperCase()===`GM`,Ze=m?.id||``,F=ne(O.INITIATIVE_LIST_COMPACT,Ze);(0,B.useEffect)(()=>{let e=P[F],t=P[O.INITIATIVE_LIST_COMPACT];Ae(typeof e==`boolean`?e:typeof t==`boolean`?t:!1)},[P,F]);let I=async()=>{let e=!ke;Ae(e);try{await c.room.setMetadata({[F]:e})}catch(t){j.error(`Failed to persist initiative list compact mode`,t),Ae(!e)}},L=async({notation:e,actionName:t,tokenName:n,senderId:r,senderColor:i})=>{try{await ue({notation:e,actionName:t,senderName:n,senderId:r,senderColor:i},P)}catch(t){j.error(`Failed to send dice roll from InitiativeList`,e,t),j.log(e)}},Qe=e=>{let t=e;if(typeof t==`string`)try{t=JSON.parse(t)}catch{return[]}return Array.isArray(t)?t.map((e,t)=>{let n=e&&typeof e==`object`?e:{},r=n.inUse,i=typeof r==`boolean`?r:typeof r==`string`?[`true`,`1`,`yes`].includes(r.trim().toLowerCase()):typeof r==`number`?r===1:void 0;return{id:typeof n.id==`string`&&n.id?n.id:`entry-${t}`,name:typeof n.name==`string`?n.name:``,description:typeof n.description==`string`?n.description:``,...i===void 0?{}:{inUse:i}}}):[]};(0,B.useEffect)(()=>{v(d.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>{let t=e.metadata?.[p.INITIATIVE]||0,n=e.metadata[p.UNIT_NAME]||e.name||`Unknown`,r=e.metadata?.[p.BOSS_MODE]===!0,i=e.metadata?.[lg]||0,a=f.find(t=>t.id===e.createdUserId)||(m?.id===e.createdUserId?m:void 0),o=String(a?.role||``).toUpperCase()===`GM`,s=a?.color||(m?.id===e.createdUserId?m?.color:void 0),c=o?void 0:hg(s,1),l={};return Object.keys(e.metadata||{}).forEach(t=>{t.startsWith(`com.battle-system.forge`)&&(l[t]=e.metadata?.[t])}),{id:e.id,initiative:t,name:n,isBoss:r,elevation:i,attributes:l,createdUserId:e.createdUserId,ownerNameOutlineColor:c,isInParty:e.metadata?.[p.IN_PARTY]===!0,isVisible:e.visible!==!1}}))},[d,f,m]);let R=(0,B.useMemo)(()=>Be?[..._].sort((e,t)=>e.name.localeCompare(t.name)):[..._].sort((e,t)=>e.initiative===t.initiative?e.name.localeCompare(t.name):ze?e.initiative-t.initiative:t.initiative-e.initiative),[_,ze,Be]),$e=eg({items:d,units:R,setItems:g,playerData:m}),et=(0,B.useMemo)(()=>{let e=new Map;return f.forEach(t=>{e.set(t.id,t)}),m&&!e.has(m.id)&&e.set(m.id,m),Array.from(e.values()).sort((e,t)=>e.name.localeCompare(t.name))},[f,m]),tt=(e,t)=>{let n=parseInt(t)||0;v(t=>t.map(t=>t.id===e?{...t,initiative:n}:t))},nt=(e,t)=>{g(d.map(n=>n.id===e?{...n,metadata:{...n.metadata,[p.INITIATIVE]:t}}:n)),c.scene.items.updateItems([e],e=>{e[0].metadata[p.INITIATIVE]=t})},it=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},at=(e,t,n)=>(typeof t==`number`&&(e=Math.max(t,e)),typeof n==`number`&&(e=Math.min(n,e)),e),ot=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(r.length===0)return at(0,i,a);let o=r.match(/^([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),s=r.match(/^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),c=null;if(o){let e=o[1],n=parseFloat(o[2]);switch(e){case`+`:c=t+n;break;case`-`:c=t-n;break;case`*`:c=t*n;break;case`/`:c=n===0?t:t/n;break}}else if(s){let e=parseFloat(s[1]),t=s[2],n=parseFloat(s[3]);switch(t){case`+`:c=e+n;break;case`-`:c=e-n;break;case`*`:c=e*n;break;case`/`:c=n===0?e:e/n;break}}else{let e=parseFloat(r);Number.isNaN(e)||(c=e)}return at(c===null||!Number.isFinite(c)?t:Math.trunc(c),i,a)},st=e=>{let t=0;if(Ke){let n=_.find(t=>t.id===e);if(n){let e=n.attributes?.[`${z}/${Ke}`],r=Number(e),i=Number.isFinite(r)?r:0,a=rt(Je.replace(/@STAT/gi,`@${Ke}`).replace(/\bx\b/gi,`@${Ke}`),{bidValueMap:{[Ke]:i},onMissingBid:`useZero`});if(a.valid&&a.notation){let e=Number(a.notation);Number.isFinite(e)&&(t=Math.trunc(e))}}}return t},ct=(e,t=`normal`)=>{let n=it(Ge),r=Math.floor(Math.random()*n)+1,i=t===`normal`?null:Math.floor(Math.random()*n)+1,a=(i===null?r:t===`advantage`?Math.max(r,i):Math.min(r,i))+st(e);tt(e,String(a)),nt(e,a)},lt=(e,t)=>{de(n=>({...n,[e]:t}))},ut=(e,t)=>{let n=ot(t,_.find(t=>t.id===e)?.initiative??0);de(t=>{let{[e]:n,...r}=t;return r}),v(t=>t.map(t=>t.id===e?{...t,initiative:n}:t)),nt(e,n)},dt=e=>`ELE${e.slice(3)}`,ft=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o}},pt=async(t,r)=>{let i=dt(t);try{await c.scene.items.deleteItems([i])}catch{}if(r===0)return;let a=d.find(e=>e.id===t);if(!a||!e(a))return;let o=ft(a,h),s=`${r>0?`🡹`:`🡻`}${Math.abs(r)}`,l=n().id(i).name(`Elevation Badge`).plainText(s).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(36).fontFamily(`Segoe UI`).textAlign(`CENTER`).position({x:o.minX-40,y:o.minY}).metadata({[sg]:!0,[cg]:t}).attachedTo(t).visible(a.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build();try{await c.scene.items.addItems([l])}catch(e){j.error(`Failed to add elevation badge`,t,e)}},mt=(e,t)=>{pe(n=>({...n,[e]:t}))},ht=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(!r)return at(0,i,a);let o=parseFloat(r);return at(Number.isFinite(o)?Math.trunc(o):t,i,a)},gt=(e,t)=>{let n=ht(t,_.find(t=>t.id===e)?.elevation??0,{min:-999,max:999});pe(t=>{let{[e]:n,...r}=t;return r}),v(t=>t.map(t=>t.id===e?{...t,elevation:n}:t)),g(d.map(t=>t.id===e?{...t,metadata:{...t.metadata,[lg]:n}}:t)),c.scene.items.updateItems([e],e=>{e[0].metadata[lg]=n}),pt(e,n)},_t=(e,t)=>{let n=e.trim();if(!n)return e;let r=/^([+\-*/])\s*-?\d+(?:\.\d+)?$/.test(n),i=/^-?\d+(?:\.\d+)?\s*[+\-*/]\s*-?\d+(?:\.\d+)?$/.test(n),a=/^-?\d+(?:\.\d+)?$/.test(n);if(!r&&!i&&!a)return e;let o=typeof t==`number`?t:parseFloat(String(t)),s=Number.isFinite(o)?o:0;return String(ot(n,s))},vt=(e,t,n)=>{let r=`${z}/${t}`,i=d.find(t=>t.id===e)?.metadata?.[r],a=_t(n,i);v(t=>t.map(t=>t.id===e?{...t,attributes:{...t.attributes,[r]:a}}:t)),g(d.map(t=>t.id===e?{...t,metadata:{...t.metadata,[r]:a}}:t)),c.scene.items.updateItems([e],e=>{e[0].metadata[r]=a})},yt=e=>String(e?.attr_bid??e?.bid??``).trim(),bt=e=>String(e?.attr_name??e?.name??``).trim(),xt=e=>String(e?.attr_abbr??e?.abbr??``).trim(),St=e=>String(e?.attr_type??e?.type??``).trim().toLowerCase(),Ct=e=>{let t=e?.attr_func??e?.func??``;return typeof t==`string`?t.trim():``},wt=e=>e?.attr_meta??e?.meta??{},Tt=e=>o.find(t=>yt(t)===e)||null,Et=e=>Ct(Tt(e)).length>0,Dt=e=>{let t={};for(let n of o){let r=yt(n);if(!r)continue;let i=`${z}/${r}`,a=e.attributes?.[i];if(a==null||a===``)continue;let o=Number(a);Number.isFinite(o)&&(t[r]=o)}return t},Ot=e=>{let t={};for(let n of o){let r=n,i=yt(r);if(!i)continue;let a=`${z}/${i}`,o=e.attributes?.[a];if(o==null||o===``)continue;let s=Number(o);if(!Number.isFinite(s))continue;let c=bt(r);c&&(t[c]=s);let l=xt(r);l&&(t[l]=s)}return t},kt=(e,t)=>{let n=Array.from(e.matchAll(_g));if(n.length!==1)return null;let r=n[0],i=r[0]||``,a=r[1]||``,o=r[2]||``,s=r[3]||``,c=r.index;if(!i||!a||!o||typeof c!=`number`)return null;let l=Number(a);if(!Number.isFinite(l)||l!==1||s)return null;let u=`2d${o}${t===`advantage`?`kh1`:`kl1`}`;return`${e.slice(0,c)}${u}${e.slice(c+i.length)}`},At=(e,t)=>{let n=Ct(Tt(t));if(n.length===0)return null;let r=rt(n,{bidValueMap:Dt(e),nameValueMap:Ot(e),onMissingBid:`error`});return!r.valid||!r.notation?(j.warn(`Could not resolve notation for initiative list value-column`,{unitId:e.id,bid:t,error:r.error}),null):{notation:r.notation,actionName:bt(Tt(t))||t}},jt=(e,t)=>{let n=Tt(t),r=wt(n)?.derived?.formula,i=typeof r==`string`&&r.trim().length>0?r:Ct(n);if(typeof i!=`string`||i.trim().length===0)return`-`;let a=rt(i,{bidValueMap:Dt(e),nameValueMap:Ot(e),onMissingBid:`error`});if(!a.valid||!a.notation)return j.warn(`Could not resolve derived formula for initiative list derived-column`,{unitId:e.id,bid:t,error:a.error}),`-`;let o=a.notation.trim(),s=Number(o);if(!Number.isFinite(s))return o||`-`;let c=Number(wt(n)?.derived?.precision),l=Number.isFinite(c)?Math.max(0,Math.min(Math.trunc(c),8)):0,u=wt(n)?.derived?.displayMode,d=l>0?s.toFixed(l):String(s);return u===`percent`?`${d}%`:d},Nt=async(e,t)=>{let n=At(e,t);if(!n)return;let r=f.find(t=>t.id===e.createdUserId);await L({notation:n.notation,actionName:n.actionName,tokenName:e.name,senderId:e.createdUserId||m?.id||`unknown`,senderColor:r?.color||m?.color||`#ffffff`})},Pt=async(e,t,n)=>{let i=At(e,t);if(!i)return;let a=n===`normal`?i.notation:kt(i.notation,n);if(!a)return;let o=f.find(t=>t.id===e.createdUserId),s=n===`normal`?``:r(n===`advantage`?`initiative.modeSuffixAdvantage`:`initiative.modeSuffixDisadvantage`);await L({notation:a,actionName:`${i.actionName}${s}`,tokenName:e.name,senderId:e.createdUserId||m?.id||`unknown`,senderColor:o?.color||m?.color||`#ffffff`})},Ft=async(e,t)=>{let n=t===`normal`?e.notation:kt(e.notation,t);if(!n)return;let i=t===`normal`?``:r(t===`advantage`?`initiative.modeSuffixAdvantage`:`initiative.modeSuffixDisadvantage`);await L({notation:n,actionName:`${e.actionName}${i}`,tokenName:e.tokenName,senderId:e.senderId,senderColor:e.senderColor})};(0,B.useEffect)(()=>()=>{Object.values(N.current).forEach(e=>{window.clearTimeout(e)})},[]),(0,B.useEffect)(()=>{if(!M&&!Ce)return;let e=e=>{e.key===`Escape`&&(xe(null),we(null))};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[M,Ce]);let It=(e,t)=>`value-column:${e}:${t}`,Lt=(e,t)=>`${e}:${t}`,Rt=e=>!!ye[e],zt=(e,t)=>{be(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},Bt=e=>{xe(e)},Vt=()=>{xe(null)},Ht=()=>{we(null)},Ut=e=>{be(t=>{let{[e]:n,...r}=t;return r})},Wt=(e,t)=>{let n=N.current[e];n&&window.clearTimeout(n),N.current[e]=window.setTimeout(()=>{Ie.current[e]=!0,zt(e,t),delete N.current[e]},500)},Gt=e=>{let t=N.current[e];t&&(window.clearTimeout(t),delete N.current[e])},Kt=e=>Ie.current[e]?(delete Ie.current[e],!0):!1,qt=e=>{if(!Ye||Xe)return!0;let t=m?.id;return t?e.createdUserId===t:!1},Jt=e=>Xe?!0:e.isVisible,Yt=e=>Xe||He?!1:!e.isInParty;(0,B.useEffect)(()=>{s||b(k_(a,Ve,r))},[a,s,Ve]),(0,B.useEffect)(()=>{let e=u[O.CURRENT_TURN],t=u[O.CURRENT_ROUND];e?S(e):R.length>0&&S(R[0].id),t&&w(t)},[u,R]);let Xt=async()=>{if(R.length===0)return;x&&await $e.processEffectsForTurnEvent(`end`,x);let e=R.findIndex(e=>e.id===x)+1;if(e>=R.length){let e=C+1;w(e),S(R[0].id),await c.scene.setMetadata({[O.CURRENT_TURN]:R[0].id,[O.CURRENT_ROUND]:e}),await $e.processEffectsForTurnEvent(`start`,R[0].id)}else S(R[e].id),await c.scene.setMetadata({[O.CURRENT_TURN]:R[e].id}),await $e.processEffectsForTurnEvent(`start`,R[e].id)},Zt=async()=>{if(R.length===0)return;let e=R.findIndex(e=>e.id===x)-1;if(e<0){let e=Math.max(1,C-1);w(e),S(R[R.length-1].id),await c.scene.setMetadata({[O.CURRENT_TURN]:R[R.length-1].id,[O.CURRENT_ROUND]:e})}else S(R[e].id),await c.scene.setMetadata({[O.CURRENT_TURN]:R[e].id})},Qt=async e=>{Be&&(T.has(e)||(S(e),await c.scene.setMetadata({[O.CURRENT_TURN]:e}),await $e.processEffectsForTurnEvent(`start`,e)))},$t=async()=>{x&&(await $e.processEffectsForTurnEvent(`end`,x),E(e=>new Set([...e,x])),T.size+1,R.length)},en=async()=>{let e=C+1;w(e),E(new Set),S(null),await c.scene.setMetadata({[O.CURRENT_TURN]:null,[O.CURRENT_ROUND]:e})},tn=async e=>{Oe(!0);try{if(e===`clear-list`){let e=d.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await c.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata&&p.ON_LIST in e.metadata&&delete e.metadata[p.ON_LIST]})}),g(d.map(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return e;let t={...e.metadata||{}};return delete t[p.ON_LIST],{...e,metadata:t}})))}if(e===`reset-initiative`){let e=d.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await c.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata[p.INITIATIVE]=0})}),g(d.map(e=>e.metadata?.[p.ON_LIST]===!0?{...e,metadata:{...e.metadata||{},[p.INITIATIVE]:0}}:e)),v(e=>e.map(e=>d.some(t=>t.id===e.id&&t.metadata?.[p.ON_LIST]===!0)?{...e,initiative:0}:e)),de({}))}let t=e===`clear-list`?null:e===`reset-initiative`?[...R].sort((e,t)=>e.name.localeCompare(t.name))[0]?.id??null:R[0]?.id??null;w(1),S(t),E(new Set),await c.scene.setMetadata({[O.CURRENT_TURN]:t,[O.CURRENT_ROUND]:1}),Ee(!1)}catch(t){j.error(`Failed to reset encounter state`,{mode:e,error:t})}finally{Oe(!1)}},nn=async e=>{let t=d.find(t=>t.id===e);if(t)try{await jh.CenterViewportOnImage(t)}catch(t){j.error(`Failed to center viewport on unit`,e,t)}},rn=async(e,n)=>{try{let r=await c.viewport.getHeight(),i=r>800?700:r-100;await c.popover.open({id:t.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(n)}`,height:i,width:350,anchorElementId:e,hidePaper:!0,disableClickAway:!0})}catch(e){j.error(`Failed to open cards popover`,e)}},an=(e,t)=>{e.preventDefault(),e.stopPropagation(),re(null),ee(t)},on=async e=>{if(D){if(!d.find(e=>e.id===D)){re(r(`initiative.tokenNotFoundInCache`));return}ie(!0),re(null);try{await c.scene.items.updateItems([D],t=>{let n=t[0];n.createdUserId=e}),g(d.map(t=>t.id===D?{...t,createdUserId:e}:t)),ee(null)}catch(t){j.error(`Failed to reassign token owner`,D,e,t),re(r(`initiative.assignOwnerPermissionError`))}finally{ie(!1)}}},sn=async()=>{if(!D)return;let e=d.find(e=>e.id===D);if(!e){re(r(`initiative.tokenNotFoundInCache`));return}let t=e.metadata?.[p.BOSS_MODE]!==!0;if(t&&d.filter(e=>e.id!==D&&e.metadata?.[p.ON_LIST]===!0&&e.metadata?.[p.BOSS_MODE]===!0).length>=2){re(r(`initiative.maxBossesError`));return}oe(!0),re(null);try{await c.scene.items.updateItems([D],e=>{let n={...e[0].metadata||{}};n[p.BOSS_MODE]=t,e[0].metadata=n}),g(d.map(e=>e.id===D?{...e,metadata:{...e.metadata||{},[p.BOSS_MODE]:t}}:e))}catch(e){j.error(`Failed to toggle boss mode`,D,e),re(r(`initiative.updateBossModeError`))}finally{oe(!1)}},cn=async()=>{if(D){if(!d.find(e=>e.id===D)){re(r(`initiative.tokenNotFoundInCache`));return}le(!0),re(null);try{await c.scene.items.updateItems([D],e=>{let t={...e[0].metadata||{}};p.ON_LIST in t&&delete t[p.ON_LIST],e[0].metadata=t}),g(d.map(e=>{if(e.id!==D)return e;let t={...e.metadata||{}};return delete t[p.ON_LIST],{...e,metadata:t}})),ee(null)}catch(e){j.error(`Failed to remove token from initiative list`,D,e),re(r(`initiative.removeUnitError`))}finally{le(!1)}}},ln=(0,B.useMemo)(()=>D&&R.find(e=>e.id===D)||null,[D,R]),un=(0,B.useMemo)(()=>D&&d.find(e=>e.id===D)||null,[D,d]),dn=un?.metadata?.[p.BOSS_MODE]===!0,U=(0,B.useMemo)(()=>ge&&R.find(e=>e.id===ge.unitId)||null,[ge,R]),fn=(0,B.useMemo)(()=>ge&&o.find(e=>e.attr_bid===ge.bid)||null,[o,ge]),pn=(0,B.useMemo)(()=>{if(!ge||!U)return[];let e=U.attributes[`${z}/${ge.bid}`];return Qe(e)},[ge,U]),mn=(0,B.useMemo)(()=>pn.some(e=>typeof e.inUse==`boolean`),[pn]),hn=(0,B.useMemo)(()=>M&&R.find(e=>e.id===M.unitId)||null,[M,R]),gn=(0,B.useMemo)(()=>ke?y.filter(e=>e.type===`initiative`||e.type===`name`?!0:e.type===`card-column`&&Ve):y,[ke,y,Ve]),_n=(0,B.useMemo)(()=>{let e=o.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),t=o.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`}),n=e?.attr_bid,r=t?.attr_bid,i=P[O.HP_CURRENT_BID],a=P[O.HP_MAX_BID],s=new Set(o.map(e=>e.attr_bid));return{currentHpBid:i&&s.has(i)?i:n,maxHpBid:a&&s.has(a)?a:r}},[o,P]),vn=(0,B.useMemo)(()=>R.filter(e=>Jt(e)),[R,Xe]),yn=(0,B.useMemo)(()=>{if(!U)return{};let e={};for(let t of o){let n=`${z}/${t.attr_bid}`,r=U.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(e[t.attr_bid]=i)}return e},[U,o]),bn=(0,B.useMemo)(()=>{if(!U)return{};let e={};for(let t of o){let n=`${z}/${t.attr_bid}`,r=U.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(t.attr_name&&(e[t.attr_name]=i),t.attr_abbr&&(e[t.attr_abbr]=i))}return e},[U,o]),xn=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=(e[1]||``).trim();if(!n)continue;let r=rt(n,{bidValueMap:yn,nameValueMap:bn,onMissingBid:`error`});!r.valid||!r.notation||t.push(r.notation)}return t};(0,B.useEffect)(()=>{Le.current&&gn.length>0&&(j.debug(`Adjusting window width based on table size`),setTimeout(()=>{if(Le.current){let e=Le.current.offsetWidth+4,t=Math.min(e,800);c.action.setWidth(t),j.log(`Adjusted window width to `+t)}},100))},[ke,gn.length,R.length]);let Sn=e=>{if(!e)return null;let t=vg[e.toLowerCase()];return t?(0,H.jsx)(t,{}):null},Cn=(e,t)=>{let n=window.innerWidth-t-8,r=Math.min(Math.max(e-t/2,8),Math.max(8,n));return{left:r,arrowX:e-r}},wn=e=>{let t=e.currentTarget.getBoundingClientRect(),n=`clientX`in e?e.clientX:t.left+t.width/2,r=t.top>72?`top`:`bottom`;return{anchorX:n,y:r===`top`?t.top:t.bottom,placement:r}},Tn=(e,t)=>{let n=wn(e),r=Math.min(320,Math.max(140,t.length*7+28)),i=Cn(n.anchorX,r);Pe({text:t,...n,...i})},En=()=>{Pe(null)};(0,B.useLayoutEffect)(()=>{if(!Ne||!Fe.current)return;let e=Fe.current.getBoundingClientRect().width,t=Cn(Ne.anchorX,e);(Math.abs(t.left-Ne.left)>.5||Math.abs(t.arrowX-Ne.arrowX)>.5)&&Pe(e=>e&&{...e,...t})},[Ne]);let W=e=>e.type===`initiative`?(0,H.jsx)(ve,{}):e.type===`roller`?null:e.type===`name`?r(`initiative.nameHeader`):e.type===`card-column`?(0,H.jsx)($d,{}):e.type===`divider-column`?null:e.useIcon?Sn(e.iconType||`star`):e.name||e.type,Dn=e=>e.type===`divider-column`?{fixedWidth:mg}:e.type===`initiative`?{minWidth:fg}:e.type===`name`?{minWidth:pg}:{minWidth:dg},On=(e,t)=>{let n=qt(t),a=Yt(t),s=!Xe&&!We;if(a&&e.type!==`initiative`&&e.type!==`name`&&e.type!==`divider-column`)return(0,H.jsx)(Ig,{theme:i,children:(0,H.jsx)(D_,{theme:i})});switch(e.type){case`initiative`:if(Be)return(0,H.jsx)(Lg,{theme:i,children:(0,H.jsx)(Vg,{onClick:e=>{e.stopPropagation(),n&&(T.has(t.id)||(t.id===x?$t():Qt(t.id)))},children:T.has(t.id)?(0,H.jsx)(Zd,{color:i.OFFSET}):t.id===x?(0,H.jsx)(Xd,{color:i.PRIMARY}):(0,H.jsx)(Qd,{color:i.BORDER})})});let a=`initiative:${t.id}`,l=Rt(a);return(0,H.jsx)(Lg,{theme:i,children:(0,H.jsx)(Hg,{theme:i,$isRollable:n&&!l,type:`text`,inputMode:`decimal`,value:A[t.id]??String(t.initiative),readOnly:!n||!l,onChange:!n||!l?void 0:e=>lt(t.id,e.target.value),onBlur:!n||!l?void 0:e=>{ut(t.id,e.target.value),Ut(a)},onClick:()=>{n&&(l||Kt(a)||ct(t.id))},onContextMenu:e=>{n&&(e.preventDefault(),Bt({kind:`initiative`,fieldKey:a,unitId:t.id,input:e.currentTarget}))},onTouchStart:e=>{n&&(l||Wt(a,e.currentTarget))},onTouchEnd:()=>{Gt(a)},onTouchCancel:()=>{Gt(a)},onKeyDown:e=>{if(n){if(!l&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),ct(t.id);return}l&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})});case`name`:let u=Re.has(t.id);return(0,H.jsx)(Ug,{theme:i,title:r(`initiative.rightClickAssignOwner`),$outlineColor:t.ownerNameOutlineColor,$isSelected:u,onDoubleClick:()=>nn(t.id),onContextMenu:n?e=>an(e,t.id):void 0,children:t.isBoss?`💀 ${t.name}`:t.name});case`roller`:return(0,H.jsx)(Rg,{theme:i,children:(0,H.jsx)(zg,{theme:i,disabled:!n,onClick:e=>{e.stopPropagation(),n&&ct(t.id)},title:r(`initiative.rollInitiativeTitle`,{max:it(Ge)}),children:(0,H.jsx)(Bg,{src:`/dice.svg`,alt:r(`initiative.rollIconAlt`)})})});case`card-column`:return(0,H.jsx)(Ig,{theme:i,children:(0,H.jsx)(Jg,{id:`card-access-${t.id}`,theme:i,disabled:!n,onClick:e=>{e.stopPropagation(),n&&rn(e.currentTarget.id,t.id)},title:r(`initiative.openCardTitle`,{unit:t.name}),children:(0,H.jsx)(Xd,{})})});case`value-column`:return(0,H.jsx)(Ig,{theme:i,children:(0,H.jsx)(qg,{children:e.styles?.bidList?.map((r,a)=>{let o=Et(r),c=It(t.id,r),l=Lt(t.id,r),u=o&&Rt(c),d=t.attributes[`${z}/${r}`],f=me[l]??(d==null||d===``?`0`:String(d)),p=r===_n.currentHpBid||r===_n.maxHpBid,m=!!Ze&&t.createdUserId===Ze,h=s&&p&&!m;return(0,H.jsxs)(B.Fragment,{children:[a>0&&(0,H.jsx)(Kg,{theme:i,children:e.styles?.dividers?.[a-1]||`/`}),h?(0,H.jsx)(O_,{theme:i,$small:e.styles?.bidList&&e.styles.bidList.length>2}):(0,H.jsx)(Wg,{theme:i,$isRollable:n&&o,value:f,$small:e.styles?.bidList&&e.styles.bidList.length>2,readOnly:!n||o&&!u,onChange:!n||o&&!u?void 0:e=>{let t=e.target.value;he(e=>({...e,[l]:t}))},onBlur:!n||o&&!u?void 0:e=>{vt(t.id,r,e.target.value),he(e=>{let{[l]:t,...n}=e;return n}),o&&Ut(c)},onClick:o?()=>{n&&(u||Kt(c)||Nt(t,r))}:void 0,onContextMenu:o?e=>{n&&(e.preventDefault(),Bt({kind:`attribute`,fieldKey:c,unitId:t.id,bid:r,input:e.currentTarget}))}:void 0,onTouchStart:o?e=>{n&&(u||Wt(c,e.currentTarget))}:void 0,onTouchEnd:o?()=>{Gt(c)}:void 0,onTouchCancel:o?()=>{Gt(c)}:void 0,onKeyDown:e=>{if(n){if(o&&!u&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),Nt(t,r);return}(u||!o)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})]},r)})})});case`list-column`:return(0,H.jsx)(Ig,{theme:i,children:(0,H.jsx)(Jg,{theme:i,disabled:!n,onClick:r=>{if(r.stopPropagation(),!n)return;let i=e.styles?.bidList?.[0];i&&_e({unitId:t.id,bid:i})},title:r(`initiative.openListReference`),children:(0,H.jsx)(qd,{})})});case`checkbox-column`:return(0,H.jsx)(Ig,{theme:i,children:(0,H.jsx)(qg,{children:e.styles?.bidList?.map(r=>{let a=!!t.attributes[`${z}/${r}`],o=e.styles?.inputType===`slider`,s=e=>{v(n=>n.map(n=>n.id===t.id?{...n,attributes:{...n.attributes,[`${z}/${r}`]:e}}:n)),g(d.map(n=>n.id===t.id?{...n,metadata:{...n.metadata,[`${z}/${r}`]:e}}:n)),c.scene.items.updateItems([t.id],t=>{t[0].metadata[`${z}/${r}`]=e})};return o?(0,H.jsx)($g,{type:`button`,theme:i,$active:a,disabled:!n,onClick:n?()=>{s(!a)}:void 0,children:(0,H.jsx)(e_,{theme:i,$active:a})},r):(0,H.jsx)(Yg,{theme:i,type:`checkbox`,checked:a,disabled:!n,onChange:n?e=>{s(e.target.checked)}:void 0},r)})})});case`derived-column`:{let n=e.styles?.bidList||[];return n.length===0?(0,H.jsx)(Ig,{theme:i,children:`-`}):(0,H.jsx)(Ig,{theme:i,children:(0,H.jsx)(qg,{children:n.map((n,a)=>(0,H.jsxs)(B.Fragment,{children:[a>0&&(0,H.jsx)(Kg,{theme:i,children:e.styles?.dividers?.[a-1]||`/`}),(0,H.jsx)(Xg,{theme:i,title:r(`initiative.derivedValueFormula`),children:jt(t,n)})]},n))})})}case`enum-column`:{let r=e.styles?.bidList?.[0];if(!r)return(0,H.jsx)(Ig,{theme:i,children:`-`});let a=wt(Tt(r)),o=Array.isArray(a.enum?.options)?a.enum.options.map(e=>String(e||``).trim()).filter(e=>e.length>0):[],s=`${z}/${r}`,l=t.attributes[s],u=typeof l==`string`?l.trim():``,f=o.includes(u)?u:o[0]||``,p=e=>{v(n=>n.map(n=>n.id===t.id?{...n,attributes:{...n.attributes,[s]:e}}:n)),g(d.map(n=>n.id===t.id?{...n,metadata:{...n.metadata,[s]:e}}:n)),c.scene.items.updateItems([t.id],t=>{t[0].metadata[s]=e})};return(0,H.jsx)(Ig,{theme:i,children:(0,H.jsx)(qg,{children:(0,H.jsx)(Gg,{theme:i,disabled:!n,value:f,onClick:e=>e.stopPropagation(),onChange:n?e=>{p(e.target.value)}:void 0,children:o.length===0?(0,H.jsx)(`option`,{value:``,children:`No options`}):o.map(e=>(0,H.jsx)(`option`,{value:e,children:e},e))})})})}case`resource-column`:{let r=e.styles?.bidList?.[0];if(!r)return(0,H.jsx)(Ig,{theme:i,children:`-`});let a=t.attributes[`${z}/${r}`],s=o.find(e=>yt(e)===r&&St(e)===`resource`),l=a&&typeof a==`object`&&!Array.isArray(a)?a:null,u=l?Number(l.current??0):0,f=l?Number(l.max??0):0,p=(e,n)=>{let i=`${z}/${r}`,a={current:e,max:n};v(e=>e.map(e=>e.id===t.id?{...e,attributes:{...e.attributes,[i]:a}}:e)),g(d.map(e=>e.id===t.id?{...e,metadata:{...e.metadata,[i]:a}}:e)),c.scene.items.updateItems([t.id],e=>{e[0].metadata[i]=a})};if(wt(s)?.resource?.showPips){let e=Number(wt(s)?.resource?.pipCap),t=(Number.isFinite(e)&&e>0?Math.round(e):void 0)??f;if(t<=0)return(0,H.jsx)(Ig,{theme:i,children:`-`});let r=Math.max(1,Math.min(t,15)),a=Math.max(0,Math.min(u,r));return(0,H.jsx)(Ig,{theme:i,children:(0,H.jsx)(Zg,{children:Array.from({length:r}).map((e,t)=>(0,H.jsx)(Qg,{theme:i,$filled:t<a,disabled:!n,onClick:n?()=>{p(t+1===a?t:t+1,f)}:void 0},t))})})}return(0,H.jsx)(Ig,{theme:i,children:(0,H.jsxs)(qg,{children:[(0,H.jsx)(Wg,{theme:i,$isRollable:!1,value:String(u),$small:!1,readOnly:!n,onChange:n?e=>{let t=Number(e.target.value);isNaN(t)||p(t,f)}:void 0}),(0,H.jsx)(Kg,{theme:i,children:`/`}),(0,H.jsx)(Wg,{theme:i,$isRollable:!1,value:String(f),$small:!1,readOnly:!n,onChange:n?e=>{let t=Number(e.target.value);isNaN(t)||p(u,t)}:void 0})]})})}case`special-column`:let f=Sn(e.iconType);if(e.styles?.specialType===`elevation`){let e=fe[t.id];return(0,H.jsx)(ag,{theme:i,unit:t,canInteract:n,elevationDraftValue:e,onElevationDraftChange:mt,onCommitElevationChange:gt})}else{let e=$e.getEffectsForUnit(t.id).length;return(0,H.jsx)(og,{theme:i,canInteract:n,icon:f||(0,H.jsx)(Se,{}),activeEffectsCount:e,onOpen:()=>$e.handleOpenEffectsModal(t.id)})}case`divider-column`:return(0,H.jsx)(t_,{theme:i,children:(0,H.jsx)(n_,{children:e.styles?.styleDesign===`zigzag`?(0,H.jsx)(i_,{children:(0,H.jsx)(a_,{theme:i})}):(0,H.jsx)(r_,{theme:i,$style:e.styles?.styleDesign})})});default:return(0,H.jsx)(Ig,{theme:i,children:`-`})}};if(s)return(0,H.jsx)(yg,{children:(0,H.jsx)(bg,{theme:i,children:`Loading...`})});let kn=ke||je,An=kn?`R:${C}`:`Round: ${C}`,jn=!ke&&kn;return(0,H.jsxs)(yg,{children:[(0,H.jsx)(xg,{children:(0,H.jsxs)(kg,{ref:Le,theme:i,$compact:ke,children:[(0,H.jsx)(Ag,{theme:i,children:(0,H.jsx)(jg,{children:gn.map(e=>{let t=e.description??`This has no description.`,n=Dn(e);return(0,H.jsx)(Mg,{theme:i,$minWidth:n.minWidth,$fixedWidth:n.fixedWidth,onMouseEnter:e=>Tn(e,t),onMouseMove:e=>Tn(e,t),onMouseLeave:En,onFocus:e=>Tn(e,t),onBlur:En,children:W(e)},e.id)})})}),(0,H.jsx)(Pg,{children:vn.map(e=>(0,H.jsx)(Fg,{$isCurrentTurn:e.id===x,theme:i,children:gn.map(t=>(0,H.jsx)(B.Fragment,{children:On(t,e)},t.id))},e.id))})]})}),(0,H.jsxs)(Sg,{theme:i,$compactMode:kn,children:[(0,H.jsxs)(Cg,{$compactMode:kn,children:[ke?(0,H.jsxs)(H.Fragment,{children:[Xe&&(0,H.jsx)(wg,{theme:i,$compact:!0,onClick:Zt,children:(0,H.jsx)(Gd,{})}),Xe&&(0,H.jsx)(wg,{theme:i,$compact:!0,onClick:Xt,children:(0,H.jsx)(Kd,{})})]}):Be?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(wg,{theme:i,onClick:$t,disabled:!x||T.has(x),children:`End Turn`}),(0,H.jsx)(Og,{theme:i,$compactMode:kn,children:An}),(0,H.jsx)(wg,{theme:i,$compact:kn,onClick:en,disabled:T.size<R.length,children:kn?(0,H.jsx)(Kd,{}):r(`initiative.next`)})]}):(0,H.jsxs)(H.Fragment,{children:[Xe&&(0,H.jsx)(wg,{theme:i,$compact:!0,onClick:Zt,children:(0,H.jsx)(Gd,{})}),(0,H.jsx)(Og,{theme:i,$compactMode:kn,children:An}),Xe&&(0,H.jsx)(wg,{theme:i,$compact:!0,onClick:Xt,children:(0,H.jsx)(Kd,{})})]}),jn&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Eg,{theme:i,onClick:()=>{I()},title:r(`initiative.switchToCompactList`),children:(0,H.jsx)(nf,{})}),Xe&&(0,H.jsx)(Eg,{theme:i,onClick:()=>Ee(!0),disabled:De,title:r(`initiative.resetRoundTurnState`),children:(0,H.jsx)(rf,{})})]}),ke&&(0,H.jsx)(Eg,{theme:i,onClick:()=>{I()},title:r(`initiative.switchToFullsizeList`),children:(0,H.jsx)(tf,{})})]}),!ke&&!jn&&(0,H.jsx)(Dg,{theme:i,$hasReset:Xe,onClick:()=>{I()},title:r(`initiative.switchToCompactList`),children:(0,H.jsx)(nf,{})}),Xe&&!ke&&!jn&&(0,H.jsx)(Tg,{theme:i,onClick:()=>Ee(!0),disabled:De,title:r(`initiative.resetRoundTurnState`),children:(0,H.jsx)(rf,{})})]}),Ne&&(0,H.jsx)(Ng,{ref:Fe,theme:i,$left:Ne.left,$y:Ne.y,$placement:Ne.placement,$arrowX:Ne.arrowX,role:`tooltip`,children:Ne.text}),(0,H.jsxs)(Tm,{isOpen:!!D,title:ln?r(`initiative.unitTitle`,{unit:ln.name}):r(`initiative.unitFallbackTitle`),onClose:()=>{k||ae||se||(ee(null),re(null))},closeOnOverlayClick:!k&&!ae&&!se,maxWidth:`520px`,children:[(0,H.jsx)(c_,{theme:i,children:r(`initiative.selectOwnerHint`)}),(0,H.jsxs)(o_,{children:[et.map(e=>(0,H.jsxs)(s_,{theme:i,$isCurrent:un?.createdUserId===e.id,onClick:()=>on(e.id),disabled:k||ae||se,children:[e.name,un?.createdUserId===e.id?r(`initiative.currentSuffix`):``]},e.id)),(0,H.jsx)(s_,{theme:i,onClick:()=>{cn()},disabled:k||ae||se,children:r(se?`initiative.removing`:`initiative.removeUnitFromList`)})]}),(0,H.jsx)(u_,{theme:i}),(0,H.jsxs)(d_,{theme:i,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(f_,{theme:i,children:r(`initiative.bossMode`)}),(0,H.jsx)(p_,{theme:i,children:r(`initiative.bossModeHint`)})]}),(0,H.jsx)(m_,{children:(0,H.jsx)(h_,{type:`button`,theme:i,$active:dn,disabled:k||ae||se,"aria-label":r(`initiative.toggleBossModeAria`),"aria-pressed":dn,onClick:()=>{sn()}})})]}),te&&(0,H.jsx)(l_,{theme:i,children:te})]}),(0,H.jsxs)(Tm,{isOpen:!!M,title:M?.kind===`initiative`?r(`initiative.initiativeTitle`,{unit:hn?.name||r(`initiative.unitFallbackTitle`)}):Tt(M?.bid||``)?.attr_name||r(`initiative.rollOptionsTitle`),onClose:Vt,maxWidth:`460px`,children:[(0,H.jsx)(c_,{theme:i,children:r(`initiative.chooseRollableAction`)}),(0,H.jsxs)(o_,{children:[(0,H.jsx)(s_,{theme:i,onClick:()=>{M&&(Vt(),zt(M.fieldKey,M.input))},children:r(`initiative.editValue`)}),(()=>{if(!M||!hn)return null;if(M.kind===`initiative`)return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(s_,{theme:i,onClick:()=>{Vt(),ct(M.unitId,`advantage`)},children:r(`initiative.rollWithAdvantage`)}),(0,H.jsx)(s_,{theme:i,onClick:()=>{Vt(),ct(M.unitId,`disadvantage`)},children:r(`initiative.rollWithDisadvantage`)})]});let e=M.bid||``,t=At(hn,e);if(!t)return null;let n=kt(t.notation,`advantage`),a=kt(t.notation,`disadvantage`);return!n||!a?null:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(s_,{theme:i,onClick:()=>{Vt(),Pt(hn,e,`advantage`)},children:r(`initiative.rollWithAdvantage`)}),(0,H.jsx)(s_,{theme:i,onClick:()=>{Vt(),Pt(hn,e,`disadvantage`)},children:r(`initiative.rollWithDisadvantage`)})]})})()]})]}),(0,H.jsx)(tg,{manager:$e}),(0,H.jsxs)(Tm,{isOpen:Te,title:r(`initiative.resetEncounterTitle`),onClose:()=>{De||Ee(!1)},closeOnOverlayClick:!De,maxWidth:`460px`,children:[(0,H.jsx)(c_,{theme:i,children:r(`initiative.chooseResetMode`)}),(0,H.jsxs)(o_,{children:[(0,H.jsx)(s_,{theme:i,onClick:()=>{tn(`round`)},disabled:De,children:r(De?`initiative.resetting`:`initiative.resetRound`)}),(0,H.jsx)(s_,{theme:i,onClick:()=>{tn(`reset-initiative`)},disabled:De,children:r(De?`initiative.resetting`:`initiative.resetRoundAndInitiative`)}),(0,H.jsx)(s_,{theme:i,onClick:()=>{tn(`clear-list`)},disabled:De,children:r(De?`initiative.resetting`:`initiative.resetRoundAndClearList`)})]})]}),(0,H.jsx)(Tm,{isOpen:!!ge,title:U?r(`initiative.listReferenceTitle`,{attribute:fn?.attr_name||r(`initiative.listReferenceFallback`),unit:U.name}):r(`initiative.listReferenceFallback`),onClose:()=>{_e(null)},maxWidth:`620px`,children:(0,H.jsxs)(g_,{children:[(0,H.jsx)(__,{theme:i}),pn.length===0?(0,H.jsx)(E_,{theme:i,children:r(`initiative.noEntries`)}):(0,H.jsx)(v_,{children:pn.map(e=>(0,H.jsxs)(y_,{theme:i,children:[(0,H.jsxs)(b_,{children:[mn?(0,H.jsx)(x_,{type:`checkbox`,checked:!!e.inUse,readOnly:!0,tabIndex:-1}):null,(0,H.jsx)(S_,{theme:i,children:e.name||r(`initiative.unnamed`)})]}),e.description?(0,H.jsx)(C_,{theme:i,children:e.description}):null,(()=>{let t=xn(e.description||``);return t.length===0?null:(0,H.jsx)(w_,{children:t.map((t,n)=>(0,H.jsx)(T_,{type:`button`,theme:i,onClick:()=>{let n=U?.createdUserId?f.find(e=>e.id===U.createdUserId):null;L({notation:t,actionName:e.name||fn?.attr_name||r(`initiative.listRoll`),tokenName:U?.name||r(`initiative.unknown`),senderId:U?.createdUserId||m?.id||`unknown`,senderColor:n?.color||m?.color||`#ffffff`})},onContextMenu:n=>{n.preventDefault();let i=U?.createdUserId?f.find(e=>e.id===U.createdUserId):null;we({notation:t,actionName:e.name||fn?.attr_name||r(`initiative.listRoll`),tokenName:U?.name||r(`initiative.unknown`),senderId:U?.createdUserId||m?.id||`unknown`,senderColor:i?.color||m?.color||`#ffffff`})},title:t,children:t},`${e.id}-inline-notation-${n}`))})})()]},e.id))})]})}),(0,H.jsxs)(Tm,{isOpen:!!Ce,title:Ce?.actionName||r(`initiative.rollOptionsTitle`),onClose:Ht,maxWidth:`460px`,zIndexBase:12e3,children:[(0,H.jsx)(c_,{theme:i,children:r(`initiative.chooseRollMode`)}),(0,H.jsx)(o_,{children:(()=>{if(!Ce)return null;let e=kt(Ce.notation,`advantage`),t=kt(Ce.notation,`disadvantage`);return!e||!t?null:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(s_,{theme:i,onClick:()=>{Ce&&(Ht(),Ft(Ce,`advantage`))},children:r(`initiative.rollWithAdvantage`)}),(0,H.jsx)(s_,{theme:i,onClick:()=>{Ce&&(Ht(),Ft(Ce,`disadvantage`))},children:r(`initiative.rollWithDisadvantage`)})]})})()})]})]})},j_=`${t.EXTENSIONID}-partyhud`,M_=async()=>{await c.modal.open({id:j_,url:`/pages/forgeparty.html`,fullScreen:!0,hideBackdrop:!0,hidePaper:!0,disablePointerEvents:!0})},N_=async()=>{await c.modal.close(j_)};var P_=`forge:party_save`,F_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,I_=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>f(e.theme.BACKGROUND,.35)};
`,L_=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`,R_=T(L_)`
  justify-content: center;
`,z_=T.span`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: ${e=>f(e.theme.PRIMARY,.9)};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`,B_=T.button`
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
`,V_=T.select`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px;
  min-width: 160px;
`,H_=T.p`
  margin: 0;
  font-size: 12px;
  color: ${e=>f(e.theme.PRIMARY,.8)};
`,U_=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${e=>e.$disabled?.55:1};
`,W_=T.span`
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
`,G_=T.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>f(e.theme.BACKGROUND,.35)};
`,K_=T.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
`,q_=T.img`
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
`,J_=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,Y_=T.span`
  color: ${e=>e.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,X_=T.input`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
`,Z_=T.p`
  color: ${e=>e.theme.PRIMARY};
  margin: 0;
`,Q_=T.span`
  display: block;
  font-size: 10px;
  color: ${e=>f(e.theme.PRIMARY,.55)};
  text-align: center;
  margin-top: 4px;
`,$_=e=>{switch(e){case`bottom`:return`left`;case`left`:return`top`;case`top`:return`right`;case`right`:default:return`bottom`}},ev=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,tv=e=>e===`default`||e===`plate`||e===`tech`||e===`deco`,nv=e=>e===`deco`?`plate`:e===`tech`?`tech`:e===`plate`?`plate`:`default`;const rv=()=>{let t=(0,B.useRef)(!1),[n,r]=(0,B.useState)(null),{theme:i}=Mt(),{t:a}=ce(),{attributes:o}=Dm(),s=V(e=>e.items);V(e=>e.sceneMetadata);let l=V(e=>e.roomMetadata),u=V(e=>e.playerData),d=l,f=String(u?.role||``).toUpperCase()===`GM`,m=u?.id,h=ne(O.PARTY_HUD_OPEN,m),g=ne(O.PARTY_HUD_ORIENTATION,m),_=(d[h]??d[O.PARTY_HUD_OPEN])===!0,v=d[g]??d[O.PARTY_HUD_ORIENTATION],y=ev(v)?v:`bottom`,b=d[O.PARTY_HUD_ATTR_ONE]||``,x=d[O.PARTY_HUD_ATTR_TWO]||``,S=d[O.PARTY_HUD_SHOW_HP_BARS]===!0,C=d[O.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!S,w=d[O.PARTY_HUD_BORDER_STYLE],T=tv(w)?nv(w):`default`,E=s.filter(e=>e.metadata[p.IN_PARTY]===!0),D=a(`common.orientation.${y}`);(0,B.useEffect)(()=>{try{let e=localStorage.getItem(P_);e&&r(JSON.parse(e).savedAt??null)}catch{}},[]);let ee=()=>{let e={savedAt:new Date().toISOString(),items:E};localStorage.setItem(P_,JSON.stringify(e)),r(e.savedAt)},te=async()=>{let e=localStorage.getItem(P_);if(e)try{let t=JSON.parse(e);if(!t.items.length)return;let n=new Set(t.items.map(e=>e.id)),r=s.filter(e=>n.has(e.id)).map(e=>e.id);r.length>0&&await c.scene.items.deleteItems(r);let[i,a]=await Promise.all([c.viewport.getWidth(),c.viewport.getHeight()]),o={x:i*.75,y:a*.6},l=await c.viewport.inverseTransformPoint(o),u={x:o.x-75,y:o.y-75},d=await c.viewport.inverseTransformPoint(u),f=d.x-l.x,p=d.y-l.y,m=t.items.map((e,t)=>({...e,position:{x:l.x+f*t,y:l.y+p*t}}));await c.scene.items.addItems(m)}catch{}},re=(0,B.useMemo)(()=>o.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[o]),k=async(e,t)=>{await c.room.setMetadata({[e]:t})},ie=async e=>{await c.room.setMetadata(e)},ae=async()=>{let e=!_;if(await k(h,e),!e){await N_(),t.current=!1;return}await M_(),t.current=!0},oe=async()=>{await k(g,$_(y))},se=async(e,t)=>{let n=t.trim();await c.scene.items.updateItems([e],e=>{let t={...e[0].metadata||{}};n?t[p.PORTRAIT_URL]=n:delete t[p.PORTRAIT_URL],e[0].metadata=t})};return(0,H.jsx)(Wd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,H.jsxs)(mm,{theme:i,children:[(0,H.jsx)(hm,{theme:i,children:a(`party.pageTitle`)}),(0,H.jsxs)(I_,{theme:i,children:[(0,H.jsxs)(L_,{children:[(0,H.jsx)(B_,{theme:i,onClick:()=>void oe(),children:a(`party.display`,{orientation:D})}),(0,H.jsx)(B_,{theme:i,onClick:()=>void ae(),children:a(_?`party.closeHud`:`party.openHud`)})]}),f&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(R_,{children:[(0,H.jsx)(z_,{theme:i,children:a(`party.showInHud`)}),(0,H.jsxs)(U_,{$disabled:!f,children:[(0,H.jsx)(W_,{theme:i,children:a(`party.showHpBars`)}),(0,H.jsx)(Z,{label:a(`party.toggleHpBarsLabel`),isOn:S,onChange:e=>{if(f){if(e){ie({[O.PARTY_HUD_SHOW_HP_BARS]:!0,[O.PARTY_HUD_SHOW_HP_NUMBERS]:!1});return}k(O.PARTY_HUD_SHOW_HP_BARS,!1)}}})]}),(0,H.jsxs)(U_,{$disabled:!f,children:[(0,H.jsx)(W_,{theme:i,children:a(`party.showHpNumbers`)}),(0,H.jsx)(Z,{label:a(`party.toggleHpNumbersLabel`),isOn:C,onChange:e=>{if(f){if(e){ie({[O.PARTY_HUD_SHOW_HP_NUMBERS]:!0,[O.PARTY_HUD_SHOW_HP_BARS]:!1});return}k(O.PARTY_HUD_SHOW_HP_NUMBERS,!1)}}})]}),(0,H.jsxs)(V_,{theme:i,disabled:!f,value:b,onChange:e=>{let t=e.target.value;k(O.PARTY_HUD_ATTR_ONE,t),t&&t===x&&k(O.PARTY_HUD_ATTR_TWO,``)},children:[(0,H.jsx)(`option`,{value:``,children:a(`party.extraSlotNone`,{slot:1})}),re.map(e=>(0,H.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,H.jsxs)(V_,{theme:i,disabled:!f,value:x,onChange:e=>{let t=e.target.value;k(O.PARTY_HUD_ATTR_TWO,t),t&&t===b&&k(O.PARTY_HUD_ATTR_ONE,``)},children:[(0,H.jsx)(`option`,{value:``,children:a(`party.extraSlotNone`,{slot:2})}),re.map(e=>(0,H.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,H.jsxs)(V_,{theme:i,disabled:!f,value:T,onChange:e=>{let t=e.target.value;tv(t)&&k(O.PARTY_HUD_BORDER_STYLE,t)},children:[(0,H.jsx)(`option`,{value:`default`,children:a(`party.portraitBorderDefault`)}),(0,H.jsx)(`option`,{value:`plate`,children:a(`party.portraitBorderPlate`)}),(0,H.jsx)(`option`,{value:`tech`,children:a(`party.portraitBorderTech`)})]})]}),(0,H.jsx)(H_,{theme:i,children:(0,H.jsxs)(H.Fragment,{children:[a(`party.configureHint`),(0,H.jsx)(`br`,{}),a(`party.listAttributesExcluded`)]})})]})]}),f&&(0,H.jsxs)(I_,{theme:i,children:[(0,H.jsxs)(R_,{children:[(0,H.jsx)(B_,{theme:i,onClick:ee,disabled:E.length===0,children:a(`party.saveParty`)}),(0,H.jsx)(B_,{theme:i,onClick:()=>void te(),disabled:n===null,children:a(`party.loadParty`)})]}),(0,H.jsx)(Q_,{theme:i,children:n?a(`party.lastSaved`,{value:new Date(n).toLocaleString()}):a(`party.noSaveAvailable`)})]}),E.length===0?(0,H.jsx)(Z_,{theme:i,children:a(`party.emptyState`)}):(0,H.jsx)(F_,{theme:i,children:E.map(t=>{let n=t.metadata?.[p.PORTRAIT_URL]||``,r=e(t)?t.image.url:void 0,o=t.metadata[p.UNIT_NAME]||t.name||a(`party.unknownUnit`),s=t.createdUserId===u?.id,c=f||s,l=r||`/logo.png`,d=!!n;return(0,H.jsxs)(G_,{theme:i,children:[(0,H.jsxs)(K_,{children:[(0,H.jsx)(q_,{theme:i,src:l,alt:o,$full:!d}),d&&(0,H.jsx)(q_,{theme:i,src:d?n:``,alt:a(`party.overrideAlt`,{unit:o}),$overlay:!0})]}),(0,H.jsxs)(J_,{children:[(0,H.jsx)(Y_,{theme:i,title:o,children:o}),c&&(0,H.jsx)(X_,{theme:i,defaultValue:n,placeholder:a(`party.portraitUrlPlaceholder`),onBlur:e=>{se(t.id,e.target.value)}})]})]},t.id)})})]})})};var iv=`${z}/hp-bar-effect`,av=`${z}/hp-bar-owner`,ov=`${z}/hp-number-text`,sv=`${z}/hp-number-owner`,cv=e=>`HPB${e.slice(3)}`,lv=e=>`HPN${e.slice(3)}`,uv=(e,t,n)=>Math.max(t,Math.min(n,e)),dv=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},fv=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||gt.CURRENT_HP,maxHpBid:n?.attr_bid||gt.MAX_HP}},pv=(e,t)=>{let n=fv(t),r=e[O.HP_CURRENT_BID],i=e[O.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},mv=(e,t,n)=>{let r=e.metadata?.[`${z}/${t}`],i=e.metadata?.[`${z}/${n}`],a=dv(r),o=dv(i);return o===null||o<=0||a===null?null:uv(a/o*100,0,100)},hv=(e,t,n)=>{let r=e.metadata?.[`${z}/${t}`],i=e.metadata?.[`${z}/${n}`],a=dv(r),o=dv(i);return a===null?null:{currentHp:Math.trunc(a),maxHp:o===null?null:Math.trunc(o)}},gv=e=>{let t=String(e||`bottom`).toLowerCase();return t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`},_v=e=>{switch(gv(e)){case`top`:return 0;case`bottom`:return 1;case`left`:return 2;case`right`:return 3;default:return 1}},vv=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o,width:r,height:i}},yv=(e,t,n)=>{let r=vv(e,t),i=r.minX+r.width*.5,a=r.minY+r.height*.5,o;switch(n){case`top`:o={x:i,y:r.minY+r.height*.18};break;case`bottom`:o={x:i,y:r.minY+r.height*.82};break;case`left`:o={x:r.minX+r.width*.18,y:a};break;case`right`:o={x:r.minX+r.width*.82,y:a};break}let s=r.width*.25,c=r.height*.18;return{x:o.x-s,y:o.y-c}};const bv=()=>{let t=V(e=>e.cacheReady),i=V(e=>e.sceneReady),a=V(e=>e.items),o=V(e=>e.localItems),s=V(e=>e.gridDpi),l=V(e=>e.roomMetadata),u=V(e=>e.sceneMetadata),d=V(e=>e.systemData);return(0,B.useEffect)(()=>{if(!t||!i)return;let u=!1;return(async()=>{let t=l,i=t[O.SHOW_HP_BARS]??!1,f=t[O.SHOW_HP_NUMBERS]??!1,m=i,h=!i&&f,g=gv(t[O.HP_BAR_ORIENTATION]),_=_v(t[O.HP_BAR_ORIENTATION]),{currentHpBid:v,maxHpBid:x}=pv(t,d?.attributes||[]),S=o.filter(e=>y(e)&&e.metadata?.[iv]===!0),C=o.filter(e=>b(e)&&e.metadata?.[ov]===!0);if(!m&&S.length>0)try{await c.scene.local.deleteItems(S.map(e=>e.id))}catch(e){j.error(`Failed to remove HP bar effects`,e)}if(!h&&C.length>0)try{await c.scene.local.deleteItems(C.map(e=>e.id))}catch(e){j.error(`Failed to remove HP number texts`,e)}if(!m&&!h)return;let w=a.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),T=new Map,E=new Map;for(let t of w){if(m){let e=mv(t,v,x);e!==null&&T.set(cv(t.id),{unitId:t.id,hpPercent:e})}if(h&&e(t)){let e=hv(t,v,x);if(e){let n=e.maxHp===null?`${e.currentHp}`:`${e.currentHp}/${e.maxHp}`;E.set(lv(t.id),{unitId:t.id,text:n,position:yv(t,s,g)})}}}if(m){let e=new Map(S.map(e=>[e.id,e])),t=Array.from(T.entries()).filter(([t])=>!e.has(t)),n=S.filter(e=>!T.has(e.id)),i=S.filter(e=>{let t=T.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`orientation`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return e.attachedTo!==t.unitId||!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-_)>.001});if(u)return;if(n.length>0)try{await c.scene.local.deleteItems(n.map(e=>e.id))}catch(e){j.error(`Failed to remove stale HP bar effects`,e)}if(t.length>0){let e=t.map(([e,t])=>r().id(e).name(`HP Bar Effect`).effectType(`ATTACHMENT`).attachedTo(t.unitId).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).uniforms([{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:_}]).sksl(`
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
`).metadata({[iv]:!0,[av]:t.unitId}).build());try{await c.scene.local.addItems(e)}catch(e){j.error(`Failed to add HP bar effects`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await c.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=T.get(e.id);if(!t)return;e.attachedTo=t.unitId;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:_}],e.metadata={...e.metadata,[iv]:!0,[av]:t.unitId}})})}catch(e){j.error(`Failed to update HP bar effects`,e)}}}if(h){let e=new Map(C.map(e=>[e.id,e])),t=Array.from(E.entries()).filter(([t])=>!e.has(t)),r=C.filter(e=>!E.has(e.id)),i=C.filter(e=>{let t=E.get(e.id);if(!t)return!1;let n=e.text?.plainText,r=Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01;return e.attachedTo!==t.unitId||n!==t.text||r});if(u)return;if(r.length>0)try{await c.scene.local.deleteItems(r.map(e=>e.id))}catch(e){j.error(`Failed to remove stale HP number texts`,e)}if(t.length>0){let e=t.map(([e,t])=>{let r=w.find(e=>e.id===t.unitId);return n().id(e).name(`HP Number Text`).plainText(t.text).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(28).fontFamily(`Segoe UI`).textAlign(`CENTER`).position(t.position).metadata({[ov]:!0,[sv]:t.unitId}).attachedTo(t.unitId).visible(r?.visible??!0).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build()});try{await c.scene.local.addItems(e)}catch(e){j.error(`Failed to add HP number texts`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await c.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=E.get(e.id);if(!t)return;e.attachedTo=t.unitId,e.position=t.position;let n=e;n.text&&(n.text.plainText=t.text),e.metadata={...e.metadata,[ov]:!0,[sv]:t.unitId}})})}catch(e){j.error(`Failed to update HP number texts`,e)}}}})(),()=>{u=!0}},[t,i,a,o,s,l,u,d]),null};var xv=`${z}/death-effect-token`,Sv=`${z}/death-effect-owner`,Cv=e=>`DTH${e.slice(3)}`,wv=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},Tv=e=>({currentHpBid:e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`})?.attr_bid||gt.CURRENT_HP}),Ev=(e,t)=>{let n=Tv(t),r=e[O.HP_CURRENT_BID],i=new Set(t.map(e=>e.attr_bid));return r&&i.has(r)?r:n.currentHpBid},Dv=(e,t)=>{let n=e.metadata?.[`${z}/${t}`];return wv(n)};const Ov=()=>{let t=V(e=>e.cacheReady),n=V(e=>e.sceneReady),i=V(e=>e.items),a=V(e=>e.localItems),o=V(e=>e.roomMetadata),s=V(e=>e.sceneMetadata),l=V(e=>e.systemData);return(0,B.useEffect)(()=>{if(!t||!n)return;let s=!1;return(async()=>{let t=o,n=t[O.SHOW_DEATH_EFFECT]??!1,u=Ev(t,l?.attributes||[]),d=a.filter(e=>y(e)&&e.metadata?.[xv]===!0);if(!n){if(d.length>0)try{await c.scene.local.deleteItems(d.map(e=>e.id))}catch(e){j.error(`Failed to remove death token effects`,e)}return}let f=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),m=new Map;f.forEach(e=>{Dv(e,u)===0&&m.set(Cv(e.id),e.id)});let h=new Map(d.map(e=>[e.id,e])),g=Array.from(m.entries()).filter(([e])=>!h.has(e)),_=d.filter(e=>!m.has(e.id)),v=d.filter(e=>{let t=m.get(e.id);if(!t)return!1;let n=e;return e.attachedTo!==t||n.metadata?.[Sv]!==t});if(!s){if(_.length>0)try{await c.scene.local.deleteItems(_.map(e=>e.id))}catch(e){j.error(`Failed to remove stale death token effects`,e)}if(g.length>0){let e=g.map(([e,t])=>r().id(e).name(`Death Token Effect`).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(`
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
`).metadata({[xv]:!0,[Sv]:t}).build());try{await c.scene.local.addItems(e)}catch(e){j.error(`Failed to add death token effects`,e)}}if(v.length>0)try{await c.scene.local.updateItems(v.map(e=>e.id),e=>{e.forEach(e=>{let t=m.get(e.id);t&&(e.attachedTo=t,e.metadata={...e.metadata,[xv]:!0,[Sv]:t})})})}catch(e){j.error(`Failed to update death token effects`,e)}}})(),()=>{s=!0}},[t,n,i,a,o,s,l]),null};var kv=`${z}/buff-effect-token`,Av=`${z}/buff-effect-owner`,jv=`${z}/debuff-effect-token`,Mv=`${z}/debuff-effect-owner`,Nv=`${z}/effect-preset`,Pv=e=>`EFB${e.slice(3)}`,Fv=e=>`EFD${e.slice(3)}`,Iv=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const Lv=()=>{let t=V(e=>e.cacheReady),n=V(e=>e.sceneReady),i=V(e=>e.items),a=V(e=>e.localItems),o=V(e=>e.roomMetadata),s=V(e=>e.sceneMetadata);return(0,B.useEffect)(()=>{if(!t||!n)return;let s=!1;return(async()=>{let t=o,n=t[O.BUFF_VISUAL_PRESET],l=t[O.DEBUFF_VISUAL_PRESET],u=Ym(n)?n:Gm,d=Xm(l)?l:Km,f=Zm(u),m=Qm(d),h=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),g=new Set(h.map(e=>e.id)),_=new Map,v=(e,t)=>{let n=_.get(e)||{hasBuff:!1,hasDebuff:!1};t===`buff`?n.hasBuff=!0:n.hasDebuff=!0,_.set(e,n)};i.forEach(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return;let t=Iv(e.metadata?.[Mh]);t.length!==0&&t.forEach(t=>{t.effectType!==`neutral`&&(t.targets.length>0?t.targets:[e.id]).forEach(e=>{g.has(e)&&(t.effectType===`buff`||t.effectType===`debuff`)&&v(e,t.effectType)})})});let b=new Map,x=new Map;h.forEach(e=>{let t=_.get(e.id);t?.hasBuff&&b.set(Pv(e.id),e.id),t?.hasDebuff&&x.set(Fv(e.id),e.id)});let S=a.filter(e=>y(e)&&e.metadata?.[kv]===!0),C=a.filter(e=>y(e)&&e.metadata?.[jv]===!0),w=async e=>{let{existing:t,desiredByOverlayId:n,preset:i,shader:a,name:o,flagKey:l,ownerKey:u}=e,d=new Map(t.map(e=>[e.id,e])),f=Array.from(n.entries()).filter(([e])=>!d.has(e)),p=t.filter(e=>!n.has(e.id)),m=t.filter(e=>{let t=n.get(e.id);if(!t)return!1;let r=e.metadata?.[Nv];return e.attachedTo!==t||r!==i});if(!s){if(p.length>0)try{await c.scene.local.deleteItems(p.map(e=>e.id))}catch(e){j.error(`Failed to remove stale ${o.toLowerCase()} overlays`,e)}if(f.length>0){let e=f.map(([e,t])=>r().id(e).name(o).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(a).metadata({[l]:!0,[u]:t,[Nv]:i}).build());try{await c.scene.local.addItems(e)}catch(e){j.error(`Failed to add ${o.toLowerCase()} overlays`,e)}}if(m.length>0)try{await c.scene.local.updateItems(m.map(e=>e.id),e=>{e.forEach(e=>{let t=n.get(e.id);if(!t)return;e.attachedTo=t;let r=e;r.sksl=a,e.metadata={...e.metadata,[l]:!0,[u]:t,[Nv]:i}})})}catch(e){j.error(`Failed to update ${o.toLowerCase()} overlays`,e)}}};await w({existing:S,desiredByOverlayId:b,preset:u,shader:f,name:`Buff Token Effect`,flagKey:kv,ownerKey:Av}),await w({existing:C,desiredByOverlayId:x,preset:d,shader:m,name:`Debuff Token Effect`,flagKey:jv,ownerKey:Mv})})(),()=>{s=!0}},[t,n,i,a,o,s]),null};var Rv=`${z}/boss-hp-effect`,zv=`${z}/boss-hp-owner`,Bv=`${z}/boss-hp-slot`,Vv=e=>`BOSSHP${e}`,Hv=(e,t,n)=>Math.max(t,Math.min(n,e)),Uv=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},Wv=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||gt.CURRENT_HP,maxHpBid:n?.attr_bid||gt.MAX_HP}},Gv=(e,t)=>{let n=Wv(t),r=e[O.HP_CURRENT_BID],i=e[O.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},Kv=(e,t,n)=>{let r=e.metadata?.[`${z}/${t}`],i=e.metadata?.[`${z}/${n}`],a=Uv(r),o=Uv(i);return o===null||o<=0||a===null?null:Hv(a/o*100,0,100)};const qv=()=>{let t=V(e=>e.cacheReady),n=V(e=>e.sceneReady),i=V(e=>e.items),a=V(e=>e.localItems),o=V(e=>e.roomMetadata),s=V(e=>e.sceneMetadata),l=V(e=>e.systemData);return(0,B.useEffect)(()=>{if(!t||!n)return;let s=!1;return(async()=>{let{currentHpBid:t,maxHpBid:n}=Gv(o,l?.attributes||[]),u=a.filter(e=>y(e)&&e.metadata?.[Rv]===!0),d=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0&&t.metadata?.[p.BOSS_MODE]===!0).sort((e,t)=>{let n=Number(e.metadata?.[p.INITIATIVE]??0);return Number(t.metadata?.[p.INITIATIVE]??0)-n}).slice(0,2).map((e,r)=>{let i=Kv(e,t,n);return i===null?null:{id:Vv(r),unitId:e.id,slot:r,hpPercent:i}}).filter(e=>e!==null),f=new Map(d.map(e=>[e.id,e])),m=new Map(u.map(e=>[e.id,e])),h=u.filter(e=>!f.has(e.id)),g=d.filter(e=>!m.has(e.id)),_=u.filter(e=>{let t=f.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`slot`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-t.slot)>.001||e.metadata?.[zv]!==t.unitId});if(!s){if(h.length>0)try{await c.scene.local.deleteItems(h.map(e=>e.id))}catch(e){j.error(`Failed to remove stale boss HP viewport effects`,e)}if(g.length>0){let e=g.map(e=>r().id(e.id).name(`Boss HP Bar`).effectType(`VIEWPORT`).locked(!0).disableHit(!0).uniforms([{name:`hpPercent`,value:e.hpPercent},{name:`slot`,value:e.slot}]).sksl(`
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
`).metadata({[Rv]:!0,[zv]:e.unitId,[Bv]:e.slot}).build());try{await c.scene.local.addItems(e)}catch(e){j.error(`Failed to add boss HP viewport effects`,e)}}if(_.length>0)try{await c.scene.local.updateItems(_.map(e=>e.id),e=>{e.forEach(e=>{let t=f.get(e.id);if(!t)return;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`slot`,value:t.slot}],e.metadata={...e.metadata,[Rv]:!0,[zv]:t.unitId,[Bv]:t.slot}})})}catch(e){j.error(`Failed to update boss HP viewport effects`,e)}}})(),()=>{s=!0}},[t,n,i,a,o,s,l]),null};var Jv=`${z}/current-turn-effect`;const Yv=()=>{let e=V(e=>e.cacheReady),t=V(e=>e.sceneReady),n=V(e=>e.items),i=V(e=>e.roomMetadata),a=V(e=>e.sceneMetadata);return(0,B.useEffect)(()=>{if(!e||!t)return;let o=!1;return(async()=>{let e=i[O.SHOW_TURN_EFFECT]===!0,t=a[O.CURRENT_TURN];if(!e||!t){try{await c.scene.local.deleteItems([Jv])}catch{}return}if(!n.find(e=>e.id===t)){try{await c.scene.local.deleteItems([Jv])}catch{}return}if(!o){try{let e=!1;if(await c.scene.local.updateItems([Jv],n=>{let r=n[0];r&&(r.attachedTo=t,e=!0)}),e)return}catch{}if(!o)try{let e=r().id(Jv).name(`Current Turn Effect`).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).sksl(`
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

`).build();await c.scene.local.addItems([e])}catch(e){j.error(`Failed to sync current turn effect`,e)}}})(),()=>{o=!0}},[e,t,n,i,a]),null},Xv=()=>{let[e,t]=(0,B.useState)(!1),{updateThemeFromSystem:n}=Mt(),r=V(e=>e.roomMetadata),i=V(e=>e.cacheReady),a=V(e=>e.systemData),o=V(e=>e.setSystemData),s=()=>({theme:{primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,snapshotPublicId:null});return(0,B.useEffect)(()=>{!i&&e&&(t(!1),o(null))},[i,e,o]),(0,B.useEffect)(()=>{!i||!a||n(a.theme.primary,a.theme.offset,a.theme.background,a.theme.border,a.theme.background_url)},[i,a,n]),(0,B.useEffect)(()=>{if(e)return;let n=!0,a=async()=>{if(i)try{j.log(`Starting app initialization...`),await c(),n&&(t(!0),j.log(`App initialization complete`))}catch(e){j.error(`Error during app initialization:`,e),n&&t(!0)}},c=async()=>{let e=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Snapshot ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Snapshot ${t} is not a JSON array`);return n}throw Error(`Snapshot ${t} has invalid type`)},t=async t=>{let{data:n,error:r}=await C.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:t});if(r)return j.error(`Failed to load room snapshot:`,r),!1;let i=Array.isArray(n)?n[0]:n;if(!i||typeof i.snapshot_public_id!=`string`)return j.warn(`Room snapshot reference was set, but no snapshot record was returned`),!1;let a=e(i.card_layout,`card_layout`),s=e(i.list_layout,`list_layout`),c=e(i.attributes,`attributes`);return o({theme:{primary:i.theme_primary,offset:i.theme_offset,background:i.theme_background,border:i.theme_border,background_url:i.background_url},cardLayout:a,listLayout:s,attributes:c,systemName:i.system_name,importDate:i.imported_at,snapshotPublicId:i.snapshot_public_id}),j.log(`System data hydrated from room snapshot`,{snapshotPublicId:i.snapshot_public_id,systemName:i.system_name}),!0};try{let e=r[th.SNAPSHOT_PUBLIC_ID];if(typeof e==`string`&&e.trim().length>0&&await t(e))return;j.log(`Room snapshot reference missing or unavailable, initializing defaults`),await l()}catch(e){j.error(`Error loading system data:`,e),await l()}},l=async()=>{o(s()),j.log(`Default system initialized`)};return a(),()=>{n=!1}},[i,e,r,o,n]),(0,B.useEffect)(()=>{if(!i||!e)return;let t=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},n=r[th.SNAPSHOT_PUBLIC_ID],c=typeof n==`string`&&n.trim().length>0?n.trim():null;if(c===(a?.snapshotPublicId??null))return;let l=!1;return(async()=>{if(!c){l||(o(s()),j.log(`Room snapshot reference cleared, reverted runtime system to defaults`));return}let{data:e,error:n}=await C.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:c});if(n){j.error(`Failed to refresh system from room snapshot change:`,n);return}let r=Array.isArray(e)?e[0]:e;if(!r||typeof r.snapshot_public_id!=`string`){j.warn(`Room snapshot reference changed, but snapshot record was not found`);return}let i=t(r.card_layout),a=t(r.list_layout),u=t(r.attributes);if(!i||!a||!u){j.warn(`Room snapshot refresh returned invalid payload arrays`);return}l||(o({theme:{primary:r.theme_primary,offset:r.theme_offset,background:r.theme_background,border:r.theme_border,background_url:r.background_url},cardLayout:i,listLayout:a,attributes:u,systemName:r.system_name,importDate:r.imported_at,snapshotPublicId:r.snapshot_public_id}),j.log(`Runtime system refreshed from room snapshot change`,{snapshotPublicId:r.snapshot_public_id,systemName:r.system_name}))})(),()=>{l=!0}},[i,e,r,a,o]),{isInitialized:e}};var Zv=m`
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
`,Qv=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e2232;
  color: #ffffff;
`,$v=T.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: #9d99ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,ey=T.p`
  margin-top: 20px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;function ty(){let{sceneReady:e,cacheReady:t,playerData:n,roomMetadata:r,sceneMetadata:i}=V(),{isInitialized:a}=Xv(),{theme:o}=Mt(),{t:s}=ce(),[l,u]=(0,B.useState)(`ForgeMain`),[d,f]=(0,B.useState)(!1),p=(0,B.useRef)(!1),m=String(n?.role||``).toUpperCase()===`GM`,h=r,g=n?.id,_=(h[ne(O.PARTY_HUD_OPEN,g)]??h[O.PARTY_HUD_OPEN])===!0,v=h[O.SHOW_PLAYER_VIEW]||!1,y=m||v,b=e&&t&&a;return(0,B.useEffect)(()=>{b&&F()},[b]),(0,B.useEffect)(()=>{if(!b)return;let e=!0;return(async()=>{if(_&&!p.current){await M_(),e&&(p.current=!0);return}!_&&p.current&&(await N_(),e&&(p.current=!1))})(),()=>{e=!1}},[b,_]),(0,B.useEffect)(()=>{b&&!y&&l===`ForgeMain`&&u(`Party`)},[b,y,l]),(0,B.useEffect)(()=>{l!==`ForgeMain`&&c.action.setWidth(350)},[l]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Zv,{theme:o}),!e||!t||!a?(0,H.jsxs)(Qv,{children:[(0,H.jsx)($v,{}),(0,H.jsx)(ey,{children:s(e?t?a?`app.loadingFallback`:`app.initializingSystem`:`app.loadingCache`:`app.connectingScene`)})]}):(0,H.jsxs)(Xp,{children:[(0,H.jsx)(bv,{}),(0,H.jsx)(Ov,{}),(0,H.jsx)(Lv,{}),(0,H.jsx)(qv,{}),(0,H.jsx)(Yv,{}),(0,H.jsx)(Zp,{theme:o,$backgroundUrl:o.BACKGROUND_URL,children:(0,H.jsx)($l,{mode:`wait`,children:(()=>{switch(l){case`ForgeMain`:return y?(0,H.jsx)(A_,{},`main`):(0,H.jsx)(rv,{},`party`);case`Settings`:return m?(0,H.jsx)(Rm,{},`settings`):(0,H.jsx)(A_,{},`main`);case`Party`:return(0,H.jsx)(rv,{},`party`);case`System`:return m?(0,H.jsx)(kh,{},`system`):(0,H.jsx)(A_,{},`main`);case`ChatLog`:return(0,H.jsx)(Wm,{},`chatlog`)}})()})}),(0,H.jsx)(pm,{isOpen:d,currentPage:l,onToggle:()=>f(!d),onNavigate:e=>{if(!y&&e===`ForgeMain`){u(`Party`),f(!1);return}if(!m&&(e===`Settings`||e===`System`)){u(`ForgeMain`),f(!1);return}u(e),f(!1)},canAccessInitiativeList:y})]})]})}var ny=ty,ry=class{static{this.ALPHANUMERICTEXTMATCH=/\s[\da-zA-Z]$/}};function iy(e){for(let t of oy)if(e.includes(t)){let n=oy[Math.floor(Math.random()*oy.length)];return e.replace(t,n)}return ay(e)}function ay(e){return`${oy[Math.floor(Math.random()*oy.length)]} ${e}`}const oy=`Grizzled.Wily.Stoic.Mellow.Pensive.Shrewd.Cautious.Hardy.Nimble.Tenacious.Gritty.Tolerant.Hardy.Adroit.Resilient.Slight.Stout.Durable.Subtle.Sober.Clever.Brave.Calm.Wise.Cunning.Alert.Swift.Agile.Loyal.Sturdy.Stable.Sneaky.Clever.Resourceful.Shady.Stalwart.Vigilant.Staunch.Fierce.Vigorous.Robust.Fearless.Dauntless.Resolute.Sagacious.Prudent.Judicious.Astute.Savvy.Sharp.Quick.Witty.Smart.Snippy.Crafty.Deft.Sly.Artful.Clever.Sneering.Tough.Rugged.Solid.Strong.Sturdy.Tough.Gritty.Rough.Hardened.Burly.Muscular.Brawny.Rowdy.Forceful.Snorting.Potent.Martial.Speckled.Mottled.Disheveled`.split(`.`);var sy=`com.battle-system.forge/view-unit`,cy=`com.battle-system.forge/view-unit-player`,ly=e=>e.trim().toLowerCase(),uy=e=>{if(typeof e!=`string`)return null;let t=e.trim();return t.length>0?t:null},dy=e=>{let t=e.trim();return t?ry.ALPHANUMERICTEXTMATCH.test(t)?t.slice(0,-2):t:e},fy=e=>{let t=typeof e.text?.plainText==`string`?e.text.plainText.trim():``;if(t.length>0)return t;let n=e.metadata?.[p.UNIT_NAME],r=typeof n==`string`?n.trim():``;if(r.length>0)return r;let i=typeof e.name==`string`?e.name.trim():``;return i.length>0?i:typeof e.name==`string`?e.name:``},py=async e=>{let n=await c.viewport.getHeight(),r=n>800?700:n-100;await c.popover.open({id:t.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(e)}`,height:r,width:350,anchorReference:`POSITION`,anchorPosition:{left:await c.viewport.getWidth()/2,top:await c.viewport.getHeight()/2},anchorOrigin:{horizontal:`CENTER`,vertical:`CENTER`},transformOrigin:{horizontal:`CENTER`,vertical:`CENTER`},hidePaper:!0,disableClickAway:!0})},my=async e=>{let t=Array.from(new Set(e.map(e=>e.trim()).filter(e=>e.length>0))),n=new Map;if(t.length===0)return n;let r=await ut(),i=new Map;for(let e of r){let t=ly(e.name);if(!t)continue;let n=i.get(t);n?n.push(e):i.set(t,[e])}for(let e of t){let t=ly(e),r=i.get(t)?.[0];!r||!r.metadata||n.set(t,oe(r.metadata))}try{let e=await L(t);for(let t of e){let e=ly(t.name);!e||n.has(e)||!t.metadata||n.set(e,oe(t.metadata))}let r=await tt(t);for(let e of r){let t=ly(e.name);!t||n.has(t)||!e.metadata||n.set(t,oe(e.metadata))}}catch(e){j.log(`Remote collection lookup failed, using local collection only`,e)}return n};function hy({children:e}){let t=V(e=>e.roomMetadata);V(e=>e.sceneMetadata);let n=V(e=>e.items),r=V(e=>e.playerData),i=V(e=>e.systemData),a=t,o=i?.attributes??[],s=new Set(o.map(e=>e.attr_bid)),l=o.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`})?.attr_bid,u=o.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`})?.attr_bid,d=uy(a[O.HP_CURRENT_BID]),f=uy(a[O.HP_MAX_BID]),m=d&&(s.size===0||s.has(d))?d:l||(s.size===0?gt.CURRENT_HP:``),h=f&&(s.size===0||s.has(f))?f:u||(s.size===0?gt.MAX_HP:``),g=!!(m&&h),_=a[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?!0:a[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]===!0,v=a[O.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===void 0?!0:a[O.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===!0;return(0,B.useEffect)(()=>{c.onReady(()=>{c.contextMenu.create({id:p.ON_LIST,icons:[{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}}],async onClick(e){if(j.info(`Add to Combat Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[p.ON_LIST]===!0))await c.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[p.ON_LIST],delete t.metadata[p.INITIATIVE]});else{let t=[],r=[],i=new Set(e.items.map(e=>e.id)),o=a[O.USE_DESCRIPTIVE_DUPLICATES]===!0,s=new Set(n.filter(e=>{if(i.has(e.id))return!1;let t=e.metadata[p.UNIT_NAME];return typeof t==`string`&&t.trim().length>0}).map(e=>ly(String(e.metadata[p.UNIT_NAME]))));for(let n of e.items){if(n.metadata[p.FABRICATED]===!0)continue;let e=dy(n.text?.plainText||n.name);t.push(e)}await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let l=await my(t);await c.action.setBadgeText(void 0);for(let t of e.items){let e={},n=t,i=fy(n);if(t.metadata[p.FABRICATED]!==!0){let r=dy(n.text?.plainText||t.name),a=l.get(ly(r));a&&Object.assign(e,a),(typeof e[p.UNIT_NAME]!=`string`||!String(e[p.UNIT_NAME]).trim())&&(e[p.UNIT_NAME]=i),e[p.FABRICATED]=!0}if(o){let r=typeof t.metadata[p.UNIT_NAME]==`string`?String(t.metadata[p.UNIT_NAME]).trim():``,a=dy(n.text?.plainText||t.name).trim(),o=String(e[p.UNIT_NAME]||r||i||a||t.name).trim(),c=ly(o);if(c){let e=0;for(;s.has(c)&&e<20;)o=iy(o),c=ly(o),e+=1;c&&s.add(c)}e[p.UNIT_NAME]=o}(typeof e[p.UNIT_NAME]!=`string`||!String(e[p.UNIT_NAME]).trim())&&(e[p.UNIT_NAME]=i),e[p.ON_LIST]=!0,e[p.INITIATIVE]=0,r.push({id:t.id,metadata:e})}await c.scene.items.updateItems(e.items,e=>{for(let t of e){let e=r.find(e=>e.id===t.id);if(e&&(Object.assign(t.metadata,e.metadata),a[O.SHOW_NAMES]===!0)){let n=t,r=typeof e.metadata[p.UNIT_NAME]==`string`&&String(e.metadata[p.UNIT_NAME]).trim().length>0?String(e.metadata[p.UNIT_NAME]).trim():fy(n);n.text&&(n.text.plainText=r)}}})}}}),c.contextMenu.create({id:p.IN_PARTY,icons:[{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`!=`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`!=`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`==`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`==`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){j.info(`Add to Party Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[p.IN_PARTY]===!0)?await c.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[p.IN_PARTY]}):await c.scene.items.updateItems(e.items,e=>{for(let t of e)t.metadata[p.IN_PARTY]=!0})}}),c.contextMenu.create({id:sy,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}}],async onClick(e){j.info(`View Unit Clicked: ${e.items[0].name}`);let t=e.items[0];if(!t)return;let r={};if(t.metadata[p.FABRICATED]!==!0){let e=t,i=fy(e),o=dy(e.text?.plainText||t.name);await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let s=await my([o]);await c.action.setBadgeText(void 0);let l=s.get(ly(o));l&&Object.assign(r,l),(typeof r[p.UNIT_NAME]!=`string`||!String(r[p.UNIT_NAME]).trim())&&(r[p.UNIT_NAME]=i),r[p.FABRICATED]=!0,a[O.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[p.UNIT_NAME]!=null&&e.id!==t.id).map(e=>e.metadata[p.UNIT_NAME]).includes(o)&&(r[p.UNIT_NAME]=iy(o)),await c.scene.items.updateItems([t],e=>{let t=e[0];if(Object.assign(t.metadata,r),a[O.SHOW_NAMES]===!0){let e=t,n=typeof r[p.UNIT_NAME]==`string`&&String(r[p.UNIT_NAME]).trim().length>0?String(r[p.UNIT_NAME]).trim():fy(e);e.text&&(e.text.plainText=n)}})}await py(t.id)}}),v?c.contextMenu.create({id:cy,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){j.info(`View Unit Clicked: ${e.items[0].name}`);let t=e.items[0];if(!t)return;let r={};if(t.metadata[p.FABRICATED]!==!0){let e=t,i=fy(e),o=dy(e.text?.plainText||t.name);await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let s=await my([o]);await c.action.setBadgeText(void 0);let l=s.get(ly(o));l&&Object.assign(r,l),(typeof r[p.UNIT_NAME]!=`string`||!String(r[p.UNIT_NAME]).trim())&&(r[p.UNIT_NAME]=i),r[p.FABRICATED]=!0,a[O.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[p.UNIT_NAME]!=null&&e.id!==t.id).map(e=>e.metadata[p.UNIT_NAME]).includes(o)&&(r[p.UNIT_NAME]=iy(o)),await c.scene.items.updateItems([t],e=>{let t=e[0];if(Object.assign(t.metadata,r),a[O.SHOW_NAMES]===!0){let e=t,n=typeof r[p.UNIT_NAME]==`string`&&String(r[p.UNIT_NAME]).trim().length>0?String(r[p.UNIT_NAME]).trim():fy(e);e.text&&(e.text.plainText=n)}})}await py(t.id)}}):c.contextMenu.remove(cy).catch(()=>{}),g&&_?c.contextMenu.create({id:p.MODIFY_UNIT,icons:[{icon:`/icon.svg`,label:`Adjust HP`,filter:{some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Adjust HP`,filter:{every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e,t){j.info(`Adjust HP Clicked: ${e.items[0].name}`),await c.popover.open({id:ee.CONTEXT_MENU,url:`/pages/forgecontext.html`,height:50,width:180,anchorElementId:t,hidePaper:!0})},embed:{url:`/pages/forgecontext.html?contextmenu=true`,height:70}}):c.contextMenu.remove(p.MODIFY_UNIT).catch(()=>{})})},[a,g,_,v]),(0,H.jsx)(H.Fragment,{children:e})}Ct.createRoot(document.getElementById(`root`)).render((0,H.jsx)(B.StrictMode,{children:(0,H.jsx)(te,{children:(0,H.jsx)(kt,{children:(0,H.jsx)(hy,{children:(0,H.jsx)(jt,{children:(0,H.jsx)(ny,{})})})})})}));