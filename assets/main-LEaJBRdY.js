const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/clashToForgeMapper-Chi2Zbqs.js","assets/hpAttributeMapping-IzAaYiC1.js"])))=>i.map(i=>d[i]);
import{C as e,D as t,E as n,M as r,S as i,T as a,_ as o,b as s,c,d as l,f as u,g as d,h as f,j as p,k as m,l as h,m as g,o as _,p as v,s as y,t as b,u as x,v as S,w as C,x as ee,y as w}from"./defaultgamesystem-wC8q2zZ8.js";import{d as T,f as E,i as te,l as ne,m as D,o as O,p as k,r as re,s as A,u as j}from"./hpAttributeMapping-IzAaYiC1.js";import{$ as ie,A as ae,At as M,B as oe,C as se,Ct as ce,D as le,Dt as ue,E as de,Et as fe,F as pe,G as me,H as he,I as ge,J as _e,K as ve,L as ye,M as N,Mt as be,N as xe,Ot as Se,P as Ce,Q as we,R as Te,S as Ee,St as P,T as De,Tt as Oe,U as ke,V as Ae,W as je,X as Me,Y as Ne,Z as Pe,_ as Fe,_t as Ie,at as Le,b as Re,bt as F,c as ze,ct as Be,d as Ve,dt as He,et as Ue,f as We,ft as Ge,gt as Ke,h as qe,ht as Je,it as Ye,j as Xe,jt as Ze,k as I,kt as L,l as Qe,lt as R,m as $e,mt as z,n as B,nt as et,ot as tt,p as nt,pt as rt,q as it,r as at,rt as ot,s as st,st as ct,tt as lt,u as ut,ut as dt,v as ft,vt as pt,wt as mt,x as ht,xt as gt,y as _t,yt as vt,z as yt}from"./unitCollectionRemote-LfDvok3K.js";import{t as bt}from"./Translation-CPHpWyre.js";var xt=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},St=(e=>e?xt(e):xt),V=r(m(),1),Ct=e=>e;function wt(e,t=Ct){let n=V.useSyncExternalStore(e.subscribe,V.useCallback(()=>t(e.getState()),[e,t]),V.useCallback(()=>t(e.getInitialState()),[e,t]));return V.useDebugValue(n),n}var Tt=e=>{let t=St(e),n=e=>wt(t,e);return Object.assign(n,t),n},Et=(e=>e?Tt(e):Tt),Dt=r(t(),1);const H=Et(e=>({cacheReady:!1,setCacheReady:t=>e({cacheReady:t}),sceneReady:!1,setSceneReady:t=>e({sceneReady:t}),items:[],setItems:t=>e({items:t}),localItems:[],setLocalItems:t=>e({localItems:t}),sceneMetadata:{},setSceneMetadata:t=>e({sceneMetadata:{...t}}),roomMetadata:{},setRoomMetadata:t=>e({roomMetadata:{...t}}),gridDpi:150,setGridDpi:t=>e({gridDpi:t}),playerData:void 0,setPlayerData:t=>e({playerData:t}),partyData:[],setPartyData:t=>e({partyData:t}),systemData:null,setSystemData:t=>e({systemData:t})}));var Ot=0;const kt=Et(e=>({messages:[],initialized:!1,addMessage:t=>{let n=new Date,r=n.getHours(),i=n.getMinutes(),a=r>=12?`PM`:`AM`,o=`${r%12||12}:${i<10?`0${i}`:i} ${a}`;e(e=>({messages:[...e.messages,{id:Ot++,text:t,timestamp:o}]}))},setInitialized:t=>e({initialized:t})})),At=()=>{kt.getState().initialized||(i.broadcast.onMessage(`${D.EXTENSIONID}/chatlog`,e=>{let t=kt.getState().addMessage;typeof e.data==`string`?t(e.data):typeof e.data==`object`&&e.data.message&&t(e.data.message)}),kt.getState().setInitialized(!0))};var U=w(),jt=`${D.EXTENSIONID}/chatlog`,Mt=`${D.EXTENSIONID}/roll-notification`;function Nt({children:e}){let t=H(e=>e.setItems),n=H(e=>e.setLocalItems),r=H(e=>e.setSceneMetadata),a=H(e=>e.setRoomMetadata),o=H(e=>e.setGridDpi),s=H(e=>e.setPlayerData),c=H(e=>e.setPartyData),l=H(e=>e.setSceneReady),u=H(e=>e.setCacheReady);return(0,V.useEffect)(()=>{let e=(e,t)=>{let n=t[j.ENABLE_CONSOLE_LOG];typeof n==`boolean`&&M.setEnabled(n)},d=e=>{be(e);let{sceneMetadata:t,roomMetadata:n}=H.getState(),r=n,a=r[j.ENABLE_OBR_NOTIFICATION];if(r[j.SHOW_NOTIFICATION_TO_ALL]===!0){i.broadcast.sendMessage(jt,{message:e},{destination:`ALL`}),a===!0&&i.broadcast.sendMessage(Mt,{message:e},{destination:`ALL`});return}kt.getState().addMessage(e),a===!0&&i.notification.show(e,`SUCCESS`)},f=({explicitMessage:e,tokenName:t,actionName:n,total:r})=>{if(typeof e==`string`&&e.trim().length>0)return e;let i=t||`Unknown`,a=n||`Action`;return typeof r==`number`&&Number.isFinite(r)?`${i} rolled ${a} for ${r}!`:`${i} rolled ${a}.`};At();let p=i.broadcast.onMessage(Mt,e=>{let t=e.data,n=typeof t?.message==`string`?t.message:null;n&&i.notification.show(n,`SUCCESS`)});mt(e=>{let t=ce(e.rollHtml);d(f({tokenName:e.senderName,actionName:e.actionName,total:t}))}),fe(e=>{d(f({explicitMessage:e.message}))}),Oe(e=>{d(f({tokenName:e.playerName,actionName:e.result.diceNotation,total:e.result.totalValue}))}),ue(e=>{let t=e.output.trim();d(t.length>0?`${e.senderName} rolled ${e.actionName} for ${e.total}. ${t}`:f({tokenName:e.senderName,actionName:e.actionName,total:e.total}))});let m,h,g,_,v,y,b,x,S=async()=>{let[l,d,f,p,m,S,C,ee,w,T,E,te,ne]=await Promise.all([i.scene.items.getItems(),i.scene.local.getItems(),i.scene.getMetadata(),i.room.getMetadata(),i.scene.grid.getDpi(),i.party.getPlayers(),i.player.getSelection(),i.player.getColor(),i.player.getRole(),i.player.getConnectionId(),i.player.getId(),i.player.getMetadata(),i.player.getName()]);t(l),n(d),r(f),a(p),e(f,p),o(m),s({id:E,name:ne,connectionId:T,role:w,color:ee,selection:C,metadata:te}),c(S),h=i.scene.items.onChange(t),g=i.scene.local.onChange(n),y=i.scene.grid.onChange(e=>o(e.dpi)),b=i.player.onChange(s),x=i.party.onChange(c),_=i.scene.onMetadataChange(t=>{r(t),e(t,H.getState().roomMetadata)}),v=i.room.onMetadataChange(t=>{a(t),e(H.getState().sceneMetadata,t)}),u(!0),M.log(`CacheManager: Cache is ready`)};return i.onReady(async()=>{let e=await i.scene.isReady();l(e),e&&(M.log(`Scene is ready on initial load, syncing cache...`),await S()),m=i.scene.onReadyChange(async e=>{l(e),e?(M.log(`Scene became ready, syncing cache...`),await S()):(M.log(`Scene is no longer ready, clearing cache...`),u(!1))})}),()=>{m?.(),h?.(),g?.(),_?.(),v?.(),y?.(),b?.(),x?.(),p?.()}},[l,u,t,n,r,a,o,s,c]),(0,U.jsx)(U.Fragment,{children:e})}var Pt=(0,V.createContext)(void 0);const Ft=({children:e})=>{let[t,n]=(0,V.useState)(f),r=(0,V.useCallback)((e,t,r,i,a)=>{n(n=>n.PRIMARY===e&&n.OFFSET===t&&n.BACKGROUND===r&&n.BORDER===i&&n.BACKGROUND_URL===(a||void 0)?n:d(e,t,r,i,a))},[]);return(0,U.jsx)(Pt.Provider,{value:{theme:t,setTheme:n,updateThemeFromSystem:r},children:e})},It=()=>{let e=(0,V.useContext)(Pt);if(!e)throw Error(`useForgeTheme must be used within a ThemeProvider`);return e};var Lt=(0,V.createContext)({});function Rt(e){let t=(0,V.useRef)(null);return t.current===null&&(t.current=e()),t.current}var zt=typeof window<`u`,Bt=zt?V.useLayoutEffect:V.useEffect,Vt=(0,V.createContext)(null);function Ht(e,t){e.indexOf(t)===-1&&e.push(t)}function Ut(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Wt=(e,t,n)=>n>t?t:n<e?e:n,Gt={},Kt=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function qt(e){return typeof e==`object`&&!!e}var Jt=e=>/^0[^.\s]+$/u.test(e);function Yt(e){let t;return()=>(t===void 0&&(t=e()),t)}var Xt=e=>e,Zt=(e,t)=>n=>t(e(n)),Qt=(...e)=>e.reduce(Zt),$t=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},en=class{constructor(){this.subscriptions=[]}add(e){return Ht(this.subscriptions,e),()=>Ut(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},tn=e=>e*1e3,nn=e=>e/1e3;function rn(e,t){return t?e*(1e3/t):0}var an=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,on=1e-7,sn=12;function cn(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=an(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>on&&++s<sn);return o}function ln(e,t,n,r){if(e===t&&n===r)return Xt;let i=t=>cn(t,0,1,e,n);return e=>e===0||e===1?e:an(i(e),t,r)}var un=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,dn=e=>t=>1-e(1-t),fn=ln(.33,1.53,.69,.99),W=dn(fn),pn=un(W),mn=e=>(e*=2)<1?.5*W(e):.5*(2-2**(-10*(e-1))),hn=e=>1-Math.sin(Math.acos(e)),gn=dn(hn),_n=un(hn),vn=ln(.42,0,1,1),yn=ln(0,0,.58,1),bn=ln(.42,0,.58,1),xn=e=>Array.isArray(e)&&typeof e[0]!=`number`,Sn=e=>Array.isArray(e)&&typeof e[0]==`number`,Cn={linear:Xt,easeIn:vn,easeInOut:bn,easeOut:yn,circIn:hn,circInOut:_n,circOut:gn,backIn:W,backInOut:pn,backOut:fn,anticipate:mn},wn=e=>typeof e==`string`,Tn=e=>{if(Sn(e)){e.length;let[t,n,r,i]=e;return ln(t,n,r,i)}else if(wn(e))return Cn[e],`${e}`,Cn[e];return e},En=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],Dn={value:null,addProjectionMetrics:null};function On(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.has(e)||s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),t&&Dn.value&&Dn.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var kn=40;function An(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=En.reduce((e,n)=>(e[n]=On(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Gt.useManualTiming?i.timestamp:performance.now();n=!1,Gt.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,kn),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:En.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<En.length;t++)o[En[t]].cancel(e)},state:i,steps:o}}var{schedule:G,cancel:jn,state:Mn,steps:Nn}=An(typeof requestAnimationFrame<`u`?requestAnimationFrame:Xt,!0),Pn;function Fn(){Pn=void 0}var In={now:()=>(Pn===void 0&&In.set(Mn.isProcessing||Gt.useManualTiming?Mn.timestamp:performance.now()),Pn),set:e=>{Pn=e,queueMicrotask(Fn)}},Ln={layout:0,mainThread:0,waapi:0},Rn=e=>t=>typeof t==`string`&&t.startsWith(e),zn=Rn(`--`),Bn=Rn(`var(--`),Vn=e=>Bn(e)?Hn.test(e.split(`/*`)[0].trim()):!1,Hn=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Un(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Wn={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Gn={...Wn,transform:e=>Wt(0,1,e)},Kn={...Wn,default:1},qn=e=>Math.round(e*1e5)/1e5,Jn=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Yn(e){return e==null}var Xn=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Zn=(e,t)=>n=>!!(typeof n==`string`&&Xn.test(n)&&n.startsWith(e)||t&&!Yn(n)&&Object.prototype.hasOwnProperty.call(n,t)),Qn=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Jn);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},$n=e=>Wt(0,255,e),er={...Wn,transform:e=>Math.round($n(e))},tr={test:Zn(`rgb`,`red`),parse:Qn(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+er.transform(e)+`, `+er.transform(t)+`, `+er.transform(n)+`, `+qn(Gn.transform(r))+`)`};function nr(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var rr={test:Zn(`#`),parse:nr,transform:tr.transform},ir=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ar=ir(`deg`),or=ir(`%`),K=ir(`px`),sr=ir(`vh`),cr=ir(`vw`),lr=(()=>({...or,parse:e=>or.parse(e)/100,transform:e=>or.transform(e*100)}))(),ur={test:Zn(`hsl`,`hue`),parse:Qn(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+or.transform(qn(t))+`, `+or.transform(qn(n))+`, `+qn(Gn.transform(r))+`)`},dr={test:e=>tr.test(e)||rr.test(e)||ur.test(e),parse:e=>tr.test(e)?tr.parse(e):ur.test(e)?ur.parse(e):rr.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?tr.transform(e):ur.transform(e),getAnimatableNone:e=>{let t=dr.parse(e);return t.alpha=0,dr.transform(t)}},fr=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function pr(e){return isNaN(e)&&typeof e==`string`&&(e.match(Jn)?.length||0)+(e.match(fr)?.length||0)>0}var mr=`number`,hr=`color`,gr=`var`,_r=`var(`,vr="${}",yr=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function br(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(yr,e=>(dr.test(e)?(r.color.push(a),i.push(hr),n.push(dr.parse(e))):e.startsWith(_r)?(r.var.push(a),i.push(gr),n.push(e)):(r.number.push(a),i.push(mr),n.push(parseFloat(e))),++a,vr)).split(vr),indexes:r,types:i}}function xr(e){return br(e).values}function Sr(e){let{split:t,types:n}=br(e),r=t.length;return e=>{let i=``;for(let a=0;a<r;a++)if(i+=t[a],e[a]!==void 0){let t=n[a];t===mr?i+=qn(e[a]):t===hr?i+=dr.transform(e[a]):i+=e[a]}return i}}var Cr=e=>typeof e==`number`?0:dr.test(e)?dr.getAnimatableNone(e):e;function wr(e){let t=xr(e);return Sr(e)(t.map(Cr))}var Tr={test:pr,parse:xr,createTransformer:Sr,getAnimatableNone:wr};function Er(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Dr({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Er(s,r,e+1/3),a=Er(s,r,e),o=Er(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Or(e,t){return n=>n>0?t:e}var q=(e,t,n)=>e+(t-e)*n,kr=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Ar=[rr,tr,ur],jr=e=>Ar.find(t=>t.test(e));function Mr(e){let t=jr(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===ur&&(n=Dr(n)),n}var Nr=(e,t)=>{let n=Mr(e),r=Mr(t);if(!n||!r)return Or(e,t);let i={...n};return e=>(i.red=kr(n.red,r.red,e),i.green=kr(n.green,r.green,e),i.blue=kr(n.blue,r.blue,e),i.alpha=q(n.alpha,r.alpha,e),tr.transform(i))},Pr=new Set([`none`,`hidden`]);function Fr(e,t){return Pr.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Ir(e,t){return n=>q(e,t,n)}function Lr(e){return typeof e==`number`?Ir:typeof e==`string`?Vn(e)?Or:dr.test(e)?Nr:Vr:Array.isArray(e)?Rr:typeof e==`object`?dr.test(e)?Nr:zr:Or}function Rr(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Lr(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function zr(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Lr(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Br(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Vr=(e,t)=>{let n=Tr.createTransformer(t),r=br(e),i=br(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Pr.has(e)&&!i.values.length||Pr.has(t)&&!r.values.length?Fr(e,t):Qt(Rr(Br(r,i),i.values),n):(`${e}${t}`,Or(e,t))};function Hr(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?q(e,t,n):Lr(e)(e,t)}var Ur=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>G.update(t,e),stop:()=>jn(t),now:()=>Mn.isProcessing?Mn.timestamp:In.now()}},Wr=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Gr=2e4;function Kr(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function qr(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Kr(r),Gr);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:nn(i)}}var Jr=5;function Yr(e,t,n){let r=Math.max(t-Jr,0);return rn(n-e(r),t-r)}var J={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Xr=.001;function Zr({duration:e=J.duration,bounce:t=J.bounce,velocity:n=J.velocity,mass:r=J.mass}){let i,a;J.maxDuration;let o=1-t;o=Wt(J.minDamping,J.maxDamping,o),e=Wt(J.minDuration,J.maxDuration,nn(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=ei(t,o),c=Math.exp(-i);return Xr-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=ei(t**2,o);return(-i(t)+Xr>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Xr+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=$r(i,a,s);if(e=tn(e),isNaN(c))return{stiffness:J.stiffness,damping:J.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Qr=12;function $r(e,t,n){let r=n;for(let n=1;n<Qr;n++)r-=e(r)/t(r);return r}function ei(e,t){return e*Math.sqrt(1-t*t)}var ti=[`duration`,`bounce`],ni=[`stiffness`,`damping`,`mass`];function ri(e,t){return t.some(t=>e[t]!==void 0)}function ii(e){let t={velocity:J.velocity,stiffness:J.stiffness,damping:J.damping,mass:J.mass,isResolvedFromDuration:!1,...e};if(!ri(e,ni)&&ri(e,ti))if(e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Wt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:J.mass,stiffness:i,damping:a}}else{let n=Zr(e);t={...t,...n,mass:J.mass},t.isResolvedFromDuration=!0}return t}function ai(e=J.visualDuration,t=J.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=ii({...n,velocity:-nn(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=nn(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?J.restSpeed.granular:J.restSpeed.default,i||=v?J.restDelta.granular:J.restDelta.default;let y;if(h<1){let e=ei(_,h);y=t=>o-Math.exp(-h*_*t)*((m+h*_*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}else if(h===1)y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}let b={calculatedDuration:p&&d||null,next:e=>{let t=y(e);if(p)s.done=e>=d;else{let n=e===0?m:0;h<1&&(n=e===0?tn(m):Yr(y,e,t));let a=Math.abs(n)<=r,c=Math.abs(o-t)<=i;s.done=a&&c}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Kr(b),Gr),t=Wr(t=>b.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return b}ai.applyToOptions=e=>{let t=qr(e,100,ai);return e.ease=t.ease,e.duration=tn(t.duration),e.type=`keyframes`,e};function oi({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=ai({keyframes:[f.value,m(f.value)],velocity:Yr(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function si(e,t,n){let r=[],i=n||Gt.mix||Hr,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Qt(Array.isArray(t)?t[n]||Xt:t,a)),r.push(a)}return r}function ci(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=si(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=$t(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Wt(e[0],e[a-1],t)):l}function li(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=$t(0,t,r);e.push(q(n,1,i))}}function ui(e){let t=[0];return li(t,e.length-1),t}function di(e,t){return e.map(e=>e*t)}function fi(e,t){return e.map(()=>t||bn).splice(0,e.length-1)}function pi({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=xn(r)?r.map(Tn):Tn(r),a={done:!1,value:t[0]},o=ci(di(n&&n.length===t.length?n:ui(t),e),t,{ease:Array.isArray(i)?i:fi(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var mi=e=>e!==null;function hi(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(mi),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var gi={decay:oi,inertia:oi,tween:pi,keyframes:pi,spring:ai};function _i(e){typeof e.type==`string`&&(e.type=gi[e.type])}var vi=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},yi=e=>e/100,bi=class extends vi{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==In.now()&&this.tick(In.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},Ln.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;_i(e);let{type:t=pi,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||pi;s!==pi&&typeof o[0]!=`number`&&(this.mixKeyframes=Qt(yi,Hr(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Kr(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Wt(0,1,n)*o}let b=_?{done:!1,value:l[0]}:y.next(v);i&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==oi&&(b.value=hi(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return nn(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+nn(e)}get time(){return nn(this.currentTime)}set time(e){e=tn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(In.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=nn(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Ur,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(In.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,Ln.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function xi(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Si=e=>e*180/Math.PI,Ci=e=>Ti(Si(Math.atan2(e[1],e[0]))),wi={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ci,rotateZ:Ci,skewX:e=>Si(Math.atan(e[1])),skewY:e=>Si(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Ti=e=>(e%=360,e<0&&(e+=360),e),Ei=Ci,Di=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Oi=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),ki={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Di,scaleY:Oi,scale:e=>(Di(e)+Oi(e))/2,rotateX:e=>Ti(Si(Math.atan2(e[6],e[5]))),rotateY:e=>Ti(Si(Math.atan2(-e[2],e[0]))),rotateZ:Ei,rotate:Ei,skewX:e=>Si(Math.atan(e[4])),skewY:e=>Si(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Ai(e){return e.includes(`scale`)?1:0}function ji(e,t){if(!e||e===`none`)return Ai(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=ki,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=wi,i=t}if(!i)return Ai(t);let a=r[t],o=i[1].split(`,`).map(Ni);return typeof a==`function`?a(o):o[a]}var Mi=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return ji(n,t)};function Ni(e){return parseFloat(e.trim())}var Pi=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Fi=(()=>new Set(Pi))(),Ii=e=>e===Wn||e===K,Li=new Set([`x`,`y`,`z`]),Ri=Pi.filter(e=>!Li.has(e));function zi(e){let t=[];return Ri.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var Bi={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>ji(t,`x`),y:(e,{transform:t})=>ji(t,`y`)};Bi.translateX=Bi.x,Bi.translateY=Bi.y;var Vi=new Set,Hi=!1,Ui=!1,Wi=!1;function Gi(){if(Ui){let e=Array.from(Vi).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=zi(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Ui=!1,Hi=!1,Vi.forEach(e=>e.complete(Wi)),Vi.clear()}function Ki(){Vi.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ui=!0)})}function qi(){Wi=!0,Ki(),Gi(),Wi=!1}var Ji=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Vi.add(this),Hi||(Hi=!0,G.read(Ki),G.resolveKeyframes(Gi))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}xi(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Vi.delete(this)}cancel(){this.state===`scheduled`&&(Vi.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Yi=e=>e.startsWith(`--`);function Xi(e,t,n){Yi(t)?e.style.setProperty(t,n):e.style[t]=n}var Zi=Yt(()=>window.ScrollTimeline!==void 0),Qi={};function $i(e,t){let n=Yt(e);return()=>Qi[t]??n()}var ea=$i(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),ta=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,na={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:ta([0,.65,.55,1]),circOut:ta([.55,0,1,.45]),backIn:ta([.31,.01,.66,-.59]),backOut:ta([.33,1.53,.69,.99])};function ra(e,t){if(e)return typeof e==`function`?ea()?Wr(e,t):`ease-out`:Sn(e)?ta(e):Array.isArray(e)?e.map(e=>ra(e,t)||na.easeOut):na[e]}function ia(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=ra(s,i);Array.isArray(d)&&(u.easing=d),Dn.value&&Ln.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return Dn.value&&p.finished.finally(()=>{Ln.waapi--}),p}function aa(e){return typeof e==`function`&&`applyToOptions`in e}function oa({type:e,...t}){return aa(e)&&ea()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var sa=class extends vi{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=oa(e);this.animation=ia(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=hi(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):Xi(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return nn(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+nn(e)}get time(){return nn(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=tn(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Zi()?(this.animation.timeline=e,Xt):t(this)}},ca={anticipate:mn,backInOut:pn,circInOut:_n};function la(e){return e in ca}function ua(e){typeof e.ease==`string`&&la(e.ease)&&(e.ease=ca[e.ease])}var da=10,fa=class extends sa{constructor(e){ua(e),_i(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new bi({...a,autoplay:!1}),s=Math.max(da,In.now()-this.startTime),c=Wt(0,da,s-da);t.setWithVelocity(o.sample(Math.max(0,s-c)).value,o.sample(s).value,c),o.stop()}},pa=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(Tr.test(e)||e===`0`)&&!e.startsWith(`url(`));function ma(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function ha(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=pa(i,t),s=pa(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:ma(e)||(n===`spring`||aa(n))&&r}function ga(e){e.duration=0,e.type=`keyframes`}var _a=new Set([`opacity`,`clipPath`,`filter`,`transform`]),va=Yt(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function ya(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:s,transformTemplate:c}=t.owner.getProps();return va()&&n&&_a.has(n)&&(n!==`transform`||!c)&&!s&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var ba=40,xa=class extends vi{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=In.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||Ji)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=In.now(),ha(e,i,a,o)||((Gt.instantAnimations||!s)&&l?.(hi(e,n,t)),e[0]=e[e.length-1],ga(n),n.repeat=0);let u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>ba?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!c&&ya(u),f=u.motionValue?.owner?.current,p=d?new fa({...u,element:f}):new bi(u);p.finished.then(()=>{this.notifyFinished()}).catch(Xt),this.pendingTimeline&&=(this.stopTimeline=p.attachTimeline(this.pendingTimeline),void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),qi()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Sa(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Ca=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function wa(e){let t=Ca.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Ta(e,t,n=1){`${e}`;let[r,i]=wa(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Kt(e)?parseFloat(e):e}return Vn(i)?Ta(i,t,n+1):i}var Ea={type:`spring`,stiffness:500,damping:25,restSpeed:10},Da=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Oa={type:`keyframes`,duration:.8},ka={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Aa=(e,{keyframes:t})=>t.length>2?Oa:Fi.has(e)?e.startsWith(`scale`)?Da(t[1]):Ea:ka,ja=e=>e!==null;function Ma(e,{repeat:t,repeatType:n=`loop`},r){let i=e.filter(ja),a=t&&n!==`loop`&&t%2==1?0:i.length-1;return!a||r===void 0?i[a]:r}function Na(e,t){return e?.[t]??e?.default??e}function Pa({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:l,...u}){return!!Object.keys(u).length}var Fa=(e,t,n,r={},i,a)=>o=>{let s=Na(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=tn(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Pa(s)||Object.assign(u,Aa(e,u)),u.duration&&=tn(u.duration),u.repeatDelay&&=tn(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(ga(u),u.delay===0&&(d=!0)),(Gt.instantAnimations||Gt.skipAnimations)&&(d=!0,ga(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Ma(u.keyframes,s);if(e!==void 0){G.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new bi(u):new xa(u)};function Ia(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function La(e,t,n,r){if(typeof t==`function`){let[i,a]=Ia(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Ia(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Ra(e,t,n){let r=e.getProps();return La(r,t,n===void 0?r.custom:n,e)}var za=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Pi]),Ba=30,Va=e=>!isNaN(parseFloat(e)),Ha={current:void 0},Ua=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=In.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=In.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Va(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new en);let n=this.events[e].add(t);return e===`change`?()=>{n(),G.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ha.current&&Ha.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=In.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ba)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Ba);return rn(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Wa(e,t){return new Ua(e,t)}var Ga=e=>Array.isArray(e);function Ka(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Wa(n))}function qa(e){return Ga(e)?e[e.length-1]||0:e}function Ja(e,t){let{transitionEnd:n={},transition:r={},...i}=Ra(e,t)||{};for(let t in i={...i,...n},i)Ka(e,t,qa(i[t]))}var Ya=e=>!!(e&&e.getVelocity);function Xa(e){return!!(Ya(e)&&e.add)}function Za(e,t){let n=e.getValue(`willChange`);if(Xa(n))return n.add(t);if(!n&&Gt.WillChange){let n=new Gt.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Qa(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var $a=`data-`+Qa(`framerAppearId`);function eo(e){return e.props[$a]}function to({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function no(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);let c=[],l=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||l&&to(l,t))continue;let o={delay:n,...Na(a||{},t)},u=r.get();if(u!==void 0&&!r.isAnimating&&!Array.isArray(i)&&i===u&&!o.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){let n=eo(e);if(n){let e=window.MotionHandoffAnimation(n,t,G);e!==null&&(o.startTime=e,d=!0)}}Za(e,t),r.start(Fa(t,r,i,e.shouldReduceMotion&&za.has(t)?{type:!1}:o,e,d));let f=r.animation;f&&c.push(f)}return o&&Promise.all(c).then(()=>{G.update(()=>{o&&Ja(e,o)})}),c}function ro(e,t,n={}){let r=Ra(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(no(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return io(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function io(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(ro(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Sa(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function ao(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>ro(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=ro(e,t,n);else{let i=typeof t==`function`?Ra(e,t,n.custom):t;r=Promise.all(no(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var oo={test:e=>e===`auto`,parse:e=>e},so=e=>t=>t.test(e),co=[Wn,K,or,ar,cr,sr,oo],lo=e=>co.find(so(e));function uo(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||Jt(e)}var fo=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function po(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Jn)||[];if(!r)return e;let i=n.replace(r,``),a=fo.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var mo=/\b([a-z-]*)\(.*?\)/gu,ho={...Tr,getAnimatableNone:e=>{let t=e.match(mo);return t?t.map(po).join(` `):e}},go={...Wn,transform:Math.round},_o={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,top:K,right:K,bottom:K,left:K,inset:K,insetBlock:K,insetBlockStart:K,insetBlockEnd:K,insetInline:K,insetInlineStart:K,insetInlineEnd:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,paddingBlock:K,paddingBlockStart:K,paddingBlockEnd:K,paddingInline:K,paddingInlineStart:K,paddingInlineEnd:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,marginBlock:K,marginBlockStart:K,marginBlockEnd:K,marginInline:K,marginInlineStart:K,marginInlineEnd:K,fontSize:K,backgroundPositionX:K,backgroundPositionY:K,rotate:ar,rotateX:ar,rotateY:ar,rotateZ:ar,scale:Kn,scaleX:Kn,scaleY:Kn,scaleZ:Kn,skew:ar,skewX:ar,skewY:ar,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:Gn,originX:lr,originY:lr,originZ:K,zIndex:go,fillOpacity:Gn,strokeOpacity:Gn,numOctaves:go},vo={..._o,color:dr,backgroundColor:dr,outlineColor:dr,fill:dr,stroke:dr,borderColor:dr,borderTopColor:dr,borderRightColor:dr,borderBottomColor:dr,borderLeftColor:dr,filter:ho,WebkitFilter:ho},yo=e=>vo[e];function bo(e,t){let n=yo(e);return n!==ho&&(n=Tr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var xo=new Set([`auto`,`none`,`0`]);function So(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!xo.has(t)&&br(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=bo(n,i)}var Co=class extends Ji{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Vn(r))){let i=Ta(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!za.has(n)||e.length!==2)return;let[r,i]=e,a=lo(r),o=lo(i);if(Un(r)!==Un(i)&&Bi[n]){this.needsMeasurement=!0;return}if(a!==o)if(Ii(a)&&Ii(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Bi[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||uo(e[t]))&&n.push(t);n.length&&So(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Bi[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Bi[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function wo(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var To=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Eo(e){return qt(e)&&`offsetHeight`in e}var{schedule:Do,cancel:Oo}=An(queueMicrotask,!1),ko={x:!1,y:!1};function Ao(){return ko.x||ko.y}function jo(e){return e===`x`||e===`y`?ko[e]?null:(ko[e]=!0,()=>{ko[e]=!1}):ko.x||ko.y?null:(ko.x=ko.y=!0,()=>{ko.x=ko.y=!1})}function Mo(e,t){let n=wo(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function No(e){return!(e.pointerType===`touch`||Ao())}function Po(e,t,n={}){let[r,i,a]=Mo(e,n),o=e=>{if(!No(e))return;let{target:n}=e,r=t(n,e);if(typeof r!=`function`||!n)return;let a=e=>{No(e)&&(r(e),n.removeEventListener(`pointerleave`,a))};n.addEventListener(`pointerleave`,a,i)};return r.forEach(e=>{e.addEventListener(`pointerenter`,o,i)}),a}var Fo=(e,t)=>t?e===t?!0:Fo(e,t.parentElement):!1,Io=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Lo=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Ro(e){return Lo.has(e.tagName)||e.isContentEditable===!0}var zo=new WeakSet;function Bo(e){return t=>{t.key===`Enter`&&e(t)}}function Vo(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Ho=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Bo(()=>{if(zo.has(n))return;Vo(n,`down`);let e=Bo(()=>{Vo(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Vo(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Uo(e){return Io(e)&&!Ao()}function Wo(e,t,n={}){let[r,i,a]=Mo(e,n),o=e=>{let r=e.currentTarget;if(!Uo(e))return;zo.add(r);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),zo.has(r)&&zo.delete(r),Uo(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Fo(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Eo(e)&&(e.addEventListener(`focus`,e=>Ho(e,i)),!Ro(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Go(e){return qt(e)&&`ownerSVGElement`in e}function Ko(e){return Go(e)&&e.tagName===`svg`}var qo=[...co,dr,Tr],Jo=e=>qo.find(so(e)),Yo=()=>({translate:0,scale:1,origin:0,originPoint:0}),Xo=()=>({x:Yo(),y:Yo()}),Zo=()=>({min:0,max:0}),Qo=()=>({x:Zo(),y:Zo()}),$o={current:null},es={current:!1},ts=typeof window<`u`;function ns(){if(es.current=!0,ts)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>$o.current=e.matches;e.addEventListener(`change`,t),t()}else $o.current=!1}var rs=new WeakMap;function is(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function as(e){return typeof e==`string`||Array.isArray(e)}var os=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],ss=[`initial`,...os];function cs(e){return is(e.animate)||ss.some(t=>as(e[t]))}function ls(e){return!!(cs(e)||e.variants)}function us(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Ya(i))e.addValue(r,i);else if(Ya(a))e.addValue(r,Wa(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Wa(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var ds=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],fs={};function ps(e){fs=e}function ms(){return fs}var hs=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ji,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=In.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,G.render(this.render,!1,!0))};let{latestValues:s,renderState:c}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!i,this.isControllingVariants=cs(t),this.isVariantNode=ls(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in u){let t=u[e];s[e]!==void 0&&Ya(t)&&t.set(s[e])}}mount(e){this.current=e,rs.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(es.current||ns(),this.shouldReduceMotion=$o.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in this.projection&&this.projection.unmount(),jn(this.notifyUpdate),jn(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let n=Fi.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&G.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in fs){let t=fs[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qo()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<ds.length;t++){let n=ds[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=us(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Wa(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Kt(n)||Jt(n))?n=parseFloat(n):!Jo(n)&&Tr.test(t)&&(n=bo(e,t)),this.setBaseTarget(e,Ya(n)?n.get():n)),Ya(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=La(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Ya(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new en),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Do.render(this.render)}},gs=class extends hs{constructor(){super(...arguments),this.KeyframeResolver=Co}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Ya(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},_s=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function vs({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function ys({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function bs(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function xs(e){return e===void 0||e===1}function Ss({scale:e,scaleX:t,scaleY:n}){return!xs(e)||!xs(t)||!xs(n)}function Cs(e){return Ss(e)||ws(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ws(e){return Ts(e.x)||Ts(e.y)}function Ts(e){return e&&e!==`0%`}function Es(e,t,n){return n+t*(e-n)}function Ds(e,t,n,r,i){return i!==void 0&&(e=Es(e,i,r)),Es(e,n,r)+t}function Os(e,t=0,n=1,r,i){e.min=Ds(e.min,t,n,r,i),e.max=Ds(e.max,t,n,r,i)}function ks(e,{x:t,y:n}){Os(e.x,t.translate,t.scale,t.originPoint),Os(e.y,n.translate,n.scale,n.originPoint)}var As=.999999999999,js=1.0000000000001;function Ms(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Fs(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,ks(e,o)),r&&Cs(a.latestValues)&&Fs(e,a.latestValues))}t.x<js&&t.x>As&&(t.x=1),t.y<js&&t.y>As&&(t.y=1)}function Ns(e,t){e.min+=t,e.max+=t}function Ps(e,t,n,r,i=.5){Os(e,t,n,q(e.min,e.max,i),r)}function Fs(e,t){Ps(e.x,t.x,t.scaleX,t.scale,t.originX),Ps(e.y,t.y,t.scaleY,t.scale,t.originY)}function Is(e,t){return vs(bs(e.getBoundingClientRect(),t))}function Ls(e,t,n){let r=Is(e,n),{scroll:i}=t;return i&&(Ns(r.x,i.offset.x),Ns(r.y,i.offset.y)),r}var Rs={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},zs=Pi.length;function Bs(e,t,n){let r=``,i=!0;for(let a=0;a<zs;a++){let o=Pi[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=To(s,_o[o]);if(!c){i=!1;let t=Rs[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Vs(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Fi.has(e)){o=!0;continue}else if(zn(e)){i[e]=n;continue}else{let t=To(n,_o[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Bs(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Hs(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Us(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Ws={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(K.test(e))e=parseFloat(e);else return e;return`${Us(e,t.target.x)}% ${Us(e,t.target.y)}%`}},Gs={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=Tr.parse(e);if(i.length>5)return r;let a=Tr.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=q(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Ks={borderRadius:{...Ws,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:Ws,borderTopRightRadius:Ws,borderBottomLeftRadius:Ws,borderBottomRightRadius:Ws,boxShadow:Gs};function qs(e,{layout:t,layoutId:n}){return Fi.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Ks[e]||e===`opacity`)}function Js(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Ya(r[t])||i&&Ya(i[t])||qs(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Ys(e){return window.getComputedStyle(e)}var Xs=class extends gs{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Hs}readValueFromInstance(e,t){if(Fi.has(t))return this.projection?.isProjecting?Ai(t):Mi(e,t);{let n=Ys(e),r=(zn(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Is(e,t)}build(e,t,n){Vs(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Js(e,t,n)}},Zs={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Qs={offset:`strokeDashoffset`,array:`strokeDasharray`};function $s(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Zs:Qs;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var ec=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function tc(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Vs(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of ec)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&$s(d,i,a,o,!1)}var nc=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),rc=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function ic(e,t,n,r){for(let n in Hs(e,t,void 0,r),t.attrs)e.setAttribute(nc.has(n)?n:Qa(n),t.attrs[n])}function ac(e,t,n){let r=Js(e,t,n);for(let n in e)if(Ya(e[n])||Ya(t[n])){let t=Pi.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var oc=class extends gs{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Qo}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Fi.has(t)){let e=yo(t);return e&&e.default||0}return t=nc.has(t)?t:Qa(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return ac(e,t,n)}build(e,t,n){tc(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){ic(e,t,n,r)}mount(e){this.isSVGTag=rc(e.tagName),super.mount(e)}},sc=ss.length;function cc(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&cc(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<sc;n++){let r=ss[n],i=e.props[r];(as(i)||i===!1)&&(t[r]=i)}return t}function lc(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var uc=[...os].reverse(),dc=os.length;function fc(e){return t=>Promise.all(t.map(({animation:t,options:n})=>ao(e,t,n)))}function pc(e){let t=fc(e),n=gc(),r=!0,i=t=>(n,r)=>{let i=Ra(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(n){t=n(e)}function o(a){let{props:o}=e,s=cc(e.parent)||{},c=[],l=new Set,u={},d=1/0;for(let t=0;t<dc;t++){let f=uc[t],p=n[f],m=o[f]===void 0?s[f]:o[f],h=as(m),g=f===a?p.isActive:null;g===!1&&(d=t);let _=m===s[f]&&m!==o[f]&&h;if(_&&r&&e.manuallyAnimateOnMount&&(_=!1),p.protectedKeys={...u},!p.isActive&&g===null||!m&&!p.prevProp||is(m)||typeof m==`boolean`)continue;let v=mc(p.prevProp,m),y=v||f===a&&p.isActive&&!_&&h||t>d&&h,b=!1,x=Array.isArray(m)?m:[m],S=x.reduce(i(f),{});g===!1&&(S={});let{prevResolvedValues:C={}}=p,ee={...C,...S},w=t=>{y=!0,l.has(t)&&(b=!0,l.delete(t)),p.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in ee){let t=S[e],n=C[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Ga(t)&&Ga(n)?!lc(t,n):t!==n,r?t==null?l.add(e):w(e):t!==void 0&&l.has(e)?w(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=S,p.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(y=!1);let T=_&&v;y&&(!T||b)&&c.push(...x.map(t=>{let n={type:f};if(typeof t==`string`&&r&&!T&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Ra(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Sa(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(l.size){let t={};if(typeof o.initial!=`boolean`){let n=Ra(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}l.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),c.push({animation:t})}let f=!!c.length;return r&&(o.initial===!1||o.initial===o.animate)&&!e.manuallyAnimateOnMount&&(f=!1),r=!1,f?t(c):Promise.resolve()}function s(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=o(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=gc()}}}function mc(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!lc(t,e):!1}function hc(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gc(){return{animate:hc(!0),whileInView:hc(),whileHover:hc(),whileTap:hc(),whileDrag:hc(),whileFocus:hc(),exit:hc()}}function _c(e,t){e.min=t.min,e.max=t.max}function vc(e,t){_c(e.x,t.x),_c(e.y,t.y)}function yc(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var bc=1e-4,xc=1-bc,Sc=1+bc,Cc=.01,wc=0-Cc,Tc=0+Cc;function Ec(e){return e.max-e.min}function Dc(e,t,n){return Math.abs(e-t)<=n}function Oc(e,t,n,r=.5){e.origin=r,e.originPoint=q(t.min,t.max,e.origin),e.scale=Ec(n)/Ec(t),e.translate=q(n.min,n.max,e.origin)-e.originPoint,(e.scale>=xc&&e.scale<=Sc||isNaN(e.scale))&&(e.scale=1),(e.translate>=wc&&e.translate<=Tc||isNaN(e.translate))&&(e.translate=0)}function kc(e,t,n,r){Oc(e.x,t.x,n.x,r?r.originX:void 0),Oc(e.y,t.y,n.y,r?r.originY:void 0)}function Ac(e,t,n){e.min=n.min+t.min,e.max=e.min+Ec(t)}function jc(e,t,n){Ac(e.x,t.x,n.x),Ac(e.y,t.y,n.y)}function Mc(e,t,n){e.min=t.min-n.min,e.max=e.min+Ec(t)}function Nc(e,t,n){Mc(e.x,t.x,n.x),Mc(e.y,t.y,n.y)}function Pc(e,t,n,r,i){return e-=t,e=Es(e,1/n,r),i!==void 0&&(e=Es(e,1/i,r)),e}function Fc(e,t=0,n=1,r=.5,i,a=e,o=e){if(or.test(t)&&(t=parseFloat(t),t=q(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=q(a.min,a.max,r);e===a&&(s-=t),e.min=Pc(e.min,t,n,s,i),e.max=Pc(e.max,t,n,s,i)}function Ic(e,t,[n,r,i],a,o){Fc(e,t[n],t[r],t[i],t.scale,a,o)}var Lc=[`x`,`scaleX`,`originX`],Rc=[`y`,`scaleY`,`originY`];function zc(e,t,n,r){Ic(e.x,t,Lc,n?n.x:void 0,r?r.x:void 0),Ic(e.y,t,Rc,n?n.y:void 0,r?r.y:void 0)}function Bc(e){return e.translate===0&&e.scale===1}function Vc(e){return Bc(e.x)&&Bc(e.y)}function Hc(e,t){return e.min===t.min&&e.max===t.max}function Uc(e,t){return Hc(e.x,t.x)&&Hc(e.y,t.y)}function Wc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Gc(e,t){return Wc(e.x,t.x)&&Wc(e.y,t.y)}function Kc(e){return Ec(e.x)/Ec(e.y)}function qc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Jc(e){return[e(`x`),e(`y`)]}function Yc(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Xc=[`TopLeft`,`TopRight`,`BottomLeft`,`BottomRight`],Zc=Xc.length,Qc=e=>typeof e==`string`?parseFloat(e):e,$c=e=>typeof e==`number`||K.test(e);function el(e,t,n,r,i,a){i?(e.opacity=q(0,n.opacity??1,nl(r)),e.opacityExit=q(t.opacity??1,0,rl(r))):a&&(e.opacity=q(t.opacity??1,n.opacity??1,r));for(let i=0;i<Zc;i++){let a=`border${Xc[i]}Radius`,o=tl(t,a),s=tl(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||$c(o)===$c(s)?(e[a]=Math.max(q(Qc(o),Qc(s),r),0),(or.test(s)||or.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=q(t.rotate||0,n.rotate||0,r))}function tl(e,t){return e[t]===void 0?e.borderRadius:e[t]}var nl=il(0,.5,gn),rl=il(.5,.95,Xt);function il(e,t,n){return r=>r<e?0:r>t?1:n($t(e,t,r))}function al(e,t,n){let r=Ya(e)?e:Wa(e);return r.start(Fa(``,r,t,n)),r.animation}function ol(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var sl=(e,t)=>e.depth-t.depth,cl=class{constructor(){this.children=[],this.isDirty=!1}add(e){Ht(this.children,e),this.isDirty=!0}remove(e){Ut(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(sl),this.isDirty=!1,this.children.forEach(e)}};function ll(e,t){let n=In.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(jn(r),e(a-t))};return G.setup(r,!0),()=>jn(r)}function ul(e){return Ya(e)?e.get():e}var dl=class{constructor(){this.members=[]}add(e){Ht(this.members,e),e.scheduleRender()}remove(e){if(Ut(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t=this.members.findIndex(t=>e===t);if(t===0)return!1;let n;for(let e=t;e>=0;e--){let t=this.members[e];if(t.isPresent!==!1){n=t;break}}return n?(this.promote(n),!0):!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender();let r=n.options.layoutDependency,i=e.options.layoutDependency;r!==void 0&&i!==void 0&&r===i||(e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0));let{crossfade:a}=e.options;a===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}},fl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},pl={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},ml=[``,`X`,`Y`,`Z`],hl=1e3,gl=0;function _l(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function vl(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=eo(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,G,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&vl(r)}function yl({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=gl++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Dn.value&&(pl.nodes=pl.calculatedTargetDeltas=pl.calculatedProjections=0),this.nodes.forEach(Sl),this.nodes.forEach(kl),this.nodes.forEach(Al),this.nodes.forEach(Cl),Dn.addProjectionMetrics&&Dn.addProjectionMetrics(pl)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new cl)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new en),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Go(t)&&!Ko(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;G.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=ll(i,250),fl.hasAnimatedSinceResize&&(fl.hasAnimatedSinceResize=!1,this.nodes.forEach(Ol)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Ll,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Gc(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Na(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||Ol(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),jn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(jl),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&vl(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Tl);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(El);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Dl),this.nodes.forEach(bl),this.nodes.forEach(xl)):this.nodes.forEach(El),this.clearAllSnapshots();let e=In.now();Mn.delta=Wt(0,1e3/60,e-Mn.timestamp),Mn.timestamp=e,Mn.isProcessing=!0,Nn.update.process(Mn),Nn.preRender.process(Mn),Nn.render.process(Mn),Mn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Do.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(wl),this.sharedNodes.forEach(Ml)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,G.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){G.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ec(this.snapshot.measuredBox.x)&&!Ec(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Qo(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Vc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Cs(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Vl(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Qo();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Ul))){let{scroll:e}=this.root;e&&(Ns(t.x,e.offset.x),Ns(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Qo();if(vc(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&vc(t,e),Ns(t.x,i.offset.x),Ns(t.y,i.offset.y))}return t}applyTransform(e,t=!1){let n=Qo();vc(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Fs(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),Cs(r.latestValues)&&Fs(n,r.latestValues)}return Cs(this.latestValues)&&Fs(n,this.latestValues),n}removeTransform(e){let t=Qo();vc(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!Cs(n.latestValues))continue;Ss(n.latestValues)&&n.updateSnapshot();let r=Qo();vc(r,n.measurePageBox()),zc(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return Cs(this.latestValues)&&zc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Mn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=Mn.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qo(),this.targetWithTransforms=Qo()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),jc(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):vc(this.target,this.layout.layoutBox),ks(this.target,this.targetDelta)):vc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Dn.value&&pl.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Ss(this.parent.latestValues)||ws(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qo(),this.relativeTargetOrigin=Qo(),Nc(this.relativeTargetOrigin,t,n),vc(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Mn.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;vc(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Ms(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Qo());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(yc(this.prevProjectionDelta.x,this.projectionDelta.x),yc(this.prevProjectionDelta.y,this.projectionDelta.y)),kc(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!qc(this.projectionDelta.x,this.prevProjectionDelta.x)||!qc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Dn.value&&pl.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Xo(),this.projectionDelta=Xo(),this.projectionDeltaWithTransform=Xo()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Xo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=Qo(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Il));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;Nl(a.x,e.x,n),Nl(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Nc(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Fl(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Uc(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=Qo(),vc(d,this.relativeTarget)),s&&(this.animationValues=i,el(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(jn(this.pendingAnimation),void 0),this.pendingAnimation=G.update(()=>{fl.hasAnimatedSinceResize=!0,Ln.layout++,this.motionValue||=Wa(0),this.currentAnimation=al(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Ln.layout--},onComplete:()=>{Ln.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(hl),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Hl(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||Qo();let t=Ec(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Ec(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}vc(t,n),Fs(t,i),kc(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new dl),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&_l(`z`,e,r,this.animationValues);for(let t=0;t<ml.length;t++)_l(`rotate${ml[t]}`,e,r,this.animationValues),_l(`skew${ml[t]}`,e,r,this.animationValues);for(let t in e.render(),r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=ul(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=ul(t?.pointerEvents)||``),this.hasProjected&&!Cs(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Yc(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;for(let t in e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit,Ks){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Ks[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?ul(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Tl),this.root.sharedNodes.clear()}}}function bl(e){e.updateLayout()}function xl(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;i===`size`?Jc(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Ec(r);r.min=n[e].min,r.max=r.min+i}):Hl(i,t.layoutBox,n)&&Jc(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Ec(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Xo();kc(o,n,t.layoutBox);let s=Xo();a?kc(s,e.applyTransform(r,!0),t.measuredBox):kc(s,n,t.layoutBox);let c=!Vc(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=Qo();Nc(o,t.layoutBox,i.layoutBox);let s=Qo();Nc(s,n,a.layoutBox),Gc(o,s)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Sl(e){Dn.value&&pl.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function Cl(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function wl(e){e.clearSnapshot()}function Tl(e){e.clearMeasurements()}function El(e){e.isLayoutDirty=!1}function Dl(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Ol(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function kl(e){e.resolveTargetDelta()}function Al(e){e.calcProjection()}function jl(e){e.resetSkewAndRotation()}function Ml(e){e.removeLeadSnapshot()}function Nl(e,t,n){e.translate=q(t.translate,0,n),e.scale=q(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Pl(e,t,n,r){e.min=q(t.min,n.min,r),e.max=q(t.max,n.max,r)}function Fl(e,t,n,r){Pl(e.x,t.x,n.x,r),Pl(e.y,t.y,n.y,r)}function Il(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Ll={duration:.45,ease:[.4,0,.1,1]},Rl=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),zl=Rl(`applewebkit/`)&&!Rl(`chrome/`)?Math.round:Xt;function Bl(e){e.min=zl(e.min),e.max=zl(e.max)}function Vl(e){Bl(e.x),Bl(e.y)}function Hl(e,t,n){return e===`position`||e===`preserve-aspect`&&!Dc(Kc(t),Kc(n),.2)}function Ul(e){return e!==e.root&&e.scroll?.wasRoot}var Wl=yl({attachResizeListener:(e,t)=>ol(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Gl={current:void 0},Kl=yl({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Gl.current){let e=new Wl({});e.mount(window),e.setOptions({layoutScroll:!0}),Gl.current=e}return Gl.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),ql=(0,V.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Jl(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Yl(...e){return t=>{let n=!1,r=e.map(e=>{let r=Jl(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Jl(e[t],null)}}}}function Xl(...e){return V.useCallback(Yl(...e),e)}var Zl=class extends V.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=Eo(e)&&e.offsetWidth||0,r=Eo(e)&&e.offsetHeight||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left,i.bottom=r-i.height-i.top}return null}componentDidUpdate(){}render(){return this.props.children}};function Ql({children:e,isPresent:t,anchorX:n,anchorY:r,root:i}){let a=(0,V.useId)(),o=(0,V.useRef)(null),s=(0,V.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=(0,V.useContext)(ql),l=Xl(o,e.props?.ref??e?.ref);return(0,V.useInsertionEffect)(()=>{let{width:e,height:l,top:u,left:d,right:f,bottom:p}=s.current;if(t||!o.current||!e||!l)return;let m=n===`left`?`left: ${d}`:`right: ${f}`,h=r===`bottom`?`bottom: ${p}`:`top: ${u}`;o.current.dataset.motionPopId=a;let g=document.createElement(`style`);c&&(g.nonce=c);let _=i??document.head;return _.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${m}px !important;
            ${h}px !important;
          }
        `),()=>{_.contains(g)&&_.removeChild(g)}},[t]),(0,U.jsx)(Zl,{isPresent:t,childRef:o,sizeRef:s,children:V.cloneElement(e,{ref:l})})}var $l=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Rt(eu),d=(0,V.useId)(),f=!0,p=(0,V.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,V.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),V.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),o===`popLayout`&&(e=(0,U.jsx)(Ql,{isPresent:n,anchorX:s,anchorY:c,root:l,children:e})),(0,U.jsx)(Vt.Provider,{value:p,children:e})};function eu(){return new Map}function tu(e=!0){let t=(0,V.useContext)(Vt);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,V.useId)();(0,V.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,V.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var nu=e=>e.key||``;function ru(e){let t=[];return V.Children.forEach(e,e=>{(0,V.isValidElement)(e)&&t.push(e)}),t}var iu=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=tu(o),f=(0,V.useMemo)(()=>ru(e),[e]),p=o&&!u?[]:f.map(nu),m=(0,V.useRef)(!0),h=(0,V.useRef)(f),g=Rt(()=>new Map),_=(0,V.useRef)(new Set),[v,y]=(0,V.useState)(f),[b,x]=(0,V.useState)(f);Bt(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=nu(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=nu(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(ru(e)),y(f),null}let{forceRender:C}=(0,V.useContext)(Lt);return(0,U.jsx)(U.Fragment,{children:b.map(e=>{let v=nu(e),y=o&&!u?!1:f===b||p.includes(v);return(0,U.jsx)($l,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(_.current.add(v),g.has(v))g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},au=(0,V.createContext)({strict:!1}),ou={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},su=!1;function cu(){if(su)return;let e={};for(let t in ou)e[t]={isEnabled:e=>ou[t].some(t=>!!e[t])};ps(e),su=!0}function lu(){return cu(),ms()}function uu(e){let t=lu();for(let n in e)t[n]={...t[n],...e[n]};ps(t)}var du=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(`.`));function fu(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||du.has(e)}var pu=e=>!fu(e);function mu(e){typeof e==`function`&&(pu=t=>t.startsWith(`on`)?!fu(t):e(t))}try{mu((l(),p(x)).default)}catch{}function hu(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||(pu(i)||n===!0&&fu(i)||!t&&!fu(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var gu=(0,V.createContext)({});function _u(e,t){if(cs(e)){let{initial:t,animate:n}=e;return{initial:t===!1||as(t)?t:void 0,animate:as(n)?n:void 0}}return e.inherit===!1?{}:t}function vu(e){let{initial:t,animate:n}=_u(e,(0,V.useContext)(gu));return(0,V.useMemo)(()=>({initial:t,animate:n}),[yu(t),yu(n)])}function yu(e){return Array.isArray(e)?e.join(` `):e}var bu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function xu(e,t,n){for(let r in t)!Ya(t[r])&&!qs(r,n)&&(e[r]=t[r])}function Su({transformTemplate:e},t){return(0,V.useMemo)(()=>{let n=bu();return Vs(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Cu(e,t){let n=e.style||{},r={};return xu(r,n,e),Object.assign(r,Su(e,t)),r}function wu(e,t){let n={},r=Cu(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Tu=()=>({...bu(),attrs:{}});function Eu(e,t,n,r){let i=(0,V.useMemo)(()=>{let n=Tu();return tc(n,t,rc(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};xu(t,e.style,e),i.style={...t,...i.style}}return i}var Du=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Ou(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Du.indexOf(e)>-1||/[A-Z]/u.test(e))}function ku(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Ou(e)?Eu:wu)(t,r,i,e),c=hu(t,typeof e==`string`,a),l=e===V.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,V.useMemo)(()=>Ya(u)?u.get():u,[u]);return(0,V.createElement)(e,{...l,children:d})}function Au({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:ju(n,r,i,e),renderState:t()}}function ju(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=ul(a[e]);let{initial:o,animate:s}=e,c=cs(e),l=ls(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!is(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=La(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Mu=e=>(t,n)=>{let r=(0,V.useContext)(gu),i=(0,V.useContext)(Vt),a=()=>Au(e,t,r,i);return n?a():Rt(a)},Nu=Mu({scrapeMotionValuesFromProps:Js,createRenderState:bu}),Pu=Mu({scrapeMotionValuesFromProps:ac,createRenderState:Tu}),Fu=Symbol.for(`motionComponentSymbol`);function Iu(e,t,n){let r=(0,V.useRef)(n);(0,V.useInsertionEffect)(()=>{r.current=n});let i=(0,V.useRef)(null);return(0,V.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var Lu=(0,V.createContext)({});function Ru(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function zu(e,t,n,r,i,a){let{visualElement:o}=(0,V.useContext)(gu),s=(0,V.useContext)(au),c=(0,V.useContext)(Vt),l=(0,V.useContext)(ql).reducedMotion,u=(0,V.useRef)(null),d=(0,V.useRef)(!1);r||=s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:l,isSVG:a}),d.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));let f=u.current,p=(0,V.useContext)(Lu);f&&!f.projection&&i&&(f.type===`html`||f.type===`svg`)&&Bu(u.current,n,i,p);let m=(0,V.useRef)(!1);(0,V.useInsertionEffect)(()=>{f&&m.current&&f.update(n,c)});let h=n[$a],g=(0,V.useRef)(!!h&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return Bt(()=>{d.current=!0,f&&(m.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),g.current&&f.animationState&&f.animationState.animateChanges())}),(0,V.useEffect)(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(h)}),!1),f.enteringChildren=void 0)}),f}function Bu(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Vu(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Ru(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:l})}function Vu(e){if(e)return e.options.allowProjection===!1?Vu(e.parent):e.projection}function Hu(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&uu(r);let a=n?n===`svg`:Ou(e),o=a?Pu:Nu;function s(n,s){let c,l={...(0,V.useContext)(ql),...n,layoutId:Uu(n)},{isStatic:u}=l,d=vu(n),f=o(n,u);if(!u&&zt){Wu(l,r);let t=Gu(l);c=t.MeasureLayout,d.visualElement=zu(e,f,l,i,t.ProjectionNode,a)}return(0,U.jsxs)(gu.Provider,{value:d,children:[c&&d.visualElement?(0,U.jsx)(c,{visualElement:d.visualElement,...l}):null,ku(e,n,Iu(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,V.forwardRef)(s);return c[Fu]=e,c}function Uu({layoutId:e}){let t=(0,V.useContext)(Lt).id;return t&&e!==void 0?t+`-`+e:e}function Wu(e,t){(0,V.useContext)(au).strict}function Gu(e){let{drag:t,layout:n}=lu();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Ku(e,t){if(typeof Proxy>`u`)return Hu;let n=new Map,r=(n,r)=>Hu(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Hu(a,void 0,e,t)),n.get(a))})}var qu=(e,t)=>t.isSVG??Ou(e)?new oc(t):new Xs(t,{allowProjection:e!==V.Fragment}),Ju=class extends _s{constructor(e){super(e),e.animationState||=pc(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();is(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Yu=0,Xu={animation:{Feature:Ju},exit:{Feature:class extends _s{constructor(){super(...arguments),this.id=Yu++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Zu(e){return{point:{x:e.pageX,y:e.pageY}}}var Qu=e=>t=>Io(t)&&e(t,Zu(t));function $u(e,t,n,r){return ol(e,t,Qu(n),r)}var ed=({current:e})=>e?e.ownerDocument.defaultView:null,td=(e,t)=>Math.abs(e-t);function nd(e,t){let n=td(e.x,t.x),r=td(e.y,t.y);return Math.sqrt(n**2+r**2)}var rd=new Set([`auto`,`scroll`]),id=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=sd(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=nd(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=Mn;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=ad(t,this.transformPagePoint),G.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=sd(e.type===`pointercancel`?this.lastMoveEventInfo:ad(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Io(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=ad(Zu(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=Mn;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,sd(s,this.history)),this.removeListeners=Qt($u(this.contextWindow,`pointermove`,this.handlePointerMove),$u(this.contextWindow,`pointerup`,this.handlePointerUp),$u(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(rd.has(e.overflowX)||rd.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener(`scroll`,this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),G.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),jn(this.updatePoint)}};function ad(e,t){return t?{point:t(e.point)}:e}function od(e,t){return{x:e.x-t.x,y:e.y-t.y}}function sd({point:e},t){return{point:e,delta:od(e,ld(t)),offset:od(e,cd(t)),velocity:ud(t,.1)}}function cd(e){return e[0]}function ld(e){return e[e.length-1]}function ud(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=ld(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>tn(t)));)n--;if(!r)return{x:0,y:0};let a=nn(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function dd(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?q(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?q(n,e,r.max):Math.min(e,n)),e}function fd(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function pd(e,{top:t,left:n,bottom:r,right:i}){return{x:fd(e.x,n,i),y:fd(e.y,t,r)}}function md(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function hd(e,t){return{x:md(e.x,t.x),y:md(e.y,t.y)}}function gd(e,t){let n=.5,r=Ec(e),i=Ec(t);return i>r?n=$t(t.min,t.max-r,e.min):r>i&&(n=$t(e.min,e.max-i,t.min)),Wt(0,1,n)}function _d(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var vd=.35;function yd(e=vd){return e===!1?e=0:e===!0&&(e=vd),{x:bd(e,`left`,`right`),y:bd(e,`top`,`bottom`)}}function bd(e,t,n){return{min:xd(e,t),max:xd(e,n)}}function xd(e,t){return typeof e==`number`?e:e[t]||0}var Sd=new WeakMap,Cd=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qo(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t?(this.stopAnimation(),this.snapToCursor(Zu(e).point)):this.pauseAnimation()},a=(e,t)=>{this.stopAnimation();let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=jo(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Jc(e=>{let t=this.getAxisMotionValue(e).get()||0;if(or.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Ec(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&G.postRender(()=>i(e,t)),Za(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Td(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&a(e,t)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Jc(e=>this.getAnimationState(e)===`paused`&&this.getAxisMotionValue(e).animation?.play()),{dragSnapToOrigin:l}=this.getProps();this.panSession=new id(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:ed(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&G.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!wd(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=dd(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Ru(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=pd(n.layoutBox,e):this.constraints=!1,this.elastic=yd(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&Jc(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=_d(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ru(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Ls(n,r.root,this.visualElement.getTransformPagePoint()),a=hd(r.layout.layoutBox,i);if(t){let e=t(ys(a));this.hasMutatedConstraints=!!e,e&&(a=vs(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Jc(o=>{if(!wd(o,t,this.currentDirection))return;let c=s&&s[o]||{};a&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Za(this.visualElement,e),n.start(Fa(e,n,0,t,this.visualElement,!1))}stopAnimation(){Jc(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Jc(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Jc(t=>{let{drag:n}=this.getProps();if(!wd(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-q(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Ru(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Jc(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=gd({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Jc(t=>{if(!wd(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(q(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;Sd.set(this.visualElement,this);let e=this.visualElement.current,t=$u(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Ro(i);n&&r&&!a&&this.start(t)}),n=()=>{let{dragConstraints:e}=this.getProps();Ru(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener(`measure`,n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),G.read(n);let a=ol(window,`resize`,()=>this.scalePositionWithinConstraints()),o=r.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Jc(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{a(),t(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=vd,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function wd(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Td(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Ed=class extends _s{constructor(e){super(e),this.removeGroupControls=Xt,this.removeListeners=Xt,this.controls=new Cd(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Xt}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Dd=e=>(t,n)=>{e&&G.postRender(()=>e(t,n))},Od=class extends _s{constructor(){super(...arguments),this.removePointerDownListener=Xt}onPointerDown(e){this.session=new id(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ed(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Dd(e),onStart:Dd(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&G.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=$u(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},kd=!1,Ad=class extends V.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),kd&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),fl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),kd=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||G.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Do.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;kd=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function jd(e){let[t,n]=tu(),r=(0,V.useContext)(Lt);return(0,U.jsx)(Ad,{...e,layoutGroup:r,switchLayoutGroup:(0,V.useContext)(Lu),isPresent:t,safeToRemove:n})}var Md={pan:{Feature:Od},drag:{Feature:Ed,ProjectionNode:Kl,MeasureLayout:jd}};function Nd(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&G.postRender(()=>i(t,Zu(t)))}var Pd=class extends _s{mount(){let{current:e}=this.node;e&&(this.unmount=Po(e,(e,t)=>(Nd(this.node,t,`Start`),e=>Nd(this.node,e,`End`))))}unmount(){}},Fd=class extends _s{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Qt(ol(this.node.current,`focus`,()=>this.onFocus()),ol(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Id(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&G.postRender(()=>i(t,Zu(t)))}var Ld=class extends _s{mount(){let{current:e}=this.node;e&&(this.unmount=Wo(e,(e,t)=>(Id(this.node,t,`Start`),(e,{success:t})=>Id(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}},Rd=new WeakMap,zd=new WeakMap,Bd=e=>{let t=Rd.get(e.target);t&&t(e)},Vd=e=>{e.forEach(Bd)};function Hd({root:e,...t}){let n=e||document;zd.has(n)||zd.set(n,{});let r=zd.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Vd,{root:e,...t})),r[i]}function Ud(e,t,n){let r=Hd(t);return Rd.set(e,n),r.observe(e),()=>{Rd.delete(e),r.unobserve(e)}}var Wd={some:0,all:1},Gd=class extends _s{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Wd[r]};return Ud(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Kd(e,t))&&this.startObserver()}unmount(){}};function Kd({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var qd={inView:{Feature:Gd},tap:{Feature:Ld},focus:{Feature:Fd},hover:{Feature:Pd}},Jd={layout:{ProjectionNode:Kl,MeasureLayout:jd}},Yd=Ku({...Xu,...qd,...Md,...Jd},qu),Xd=P(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),Zd=P(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),Qd=P(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),$d=P(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),ef=P(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),tf=P(`circle-arrow-right`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m12 16 4-4-4-4`,key:`1i9zcv`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}]]),nf=P(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),rf=P(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),af=P(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),of=P(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),sf=P(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),cf=P(`minimize-2`,[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]),lf=P(`octagon-x`,[[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,key:`2d38gg`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),uf=!1;function df(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function ff(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var pf=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!uf:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(ff(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=df(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),mf=`-ms-`,hf=`-moz-`,Y=`-webkit-`,gf=`comm`,_f=`rule`,vf=`decl`,yf=`@import`,bf=`@keyframes`,xf=`@layer`,Sf=Math.abs,Cf=String.fromCharCode,wf=Object.assign;function Tf(e,t){return kf(e,0)^45?(((t<<2^kf(e,0))<<2^kf(e,1))<<2^kf(e,2))<<2^kf(e,3):0}function Ef(e){return e.trim()}function Df(e,t){return(e=t.exec(e))?e[0]:e}function X(e,t,n){return e.replace(t,n)}function Of(e,t){return e.indexOf(t)}function kf(e,t){return e.charCodeAt(t)|0}function Af(e,t,n){return e.slice(t,n)}function jf(e){return e.length}function Mf(e){return e.length}function Nf(e,t){return t.push(e),e}function Pf(e,t){return e.map(t).join(``)}var Ff=1,If=1,Lf=0,Rf=0,zf=0,Bf=``;function Vf(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ff,column:If,length:o,return:``}}function Hf(e,t){return wf(Vf(``,null,null,``,null,null,0),e,{length:-e.length},t)}function Uf(){return zf}function Wf(){return zf=Rf>0?kf(Bf,--Rf):0,If--,zf===10&&(If=1,Ff--),zf}function Gf(){return zf=Rf<Lf?kf(Bf,Rf++):0,If++,zf===10&&(If=1,Ff++),zf}function Kf(){return kf(Bf,Rf)}function qf(){return Rf}function Jf(e,t){return Af(Bf,e,t)}function Yf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xf(e){return Ff=If=1,Lf=jf(Bf=e),Rf=0,[]}function Zf(e){return Bf=``,e}function Qf(e){return Ef(Jf(Rf-1,tp(e===91?e+2:e===40?e+1:e)))}function $f(e){for(;(zf=Kf())&&zf<33;)Gf();return Yf(e)>2||Yf(zf)>3?``:` `}function ep(e,t){for(;--t&&Gf()&&!(zf<48||zf>102||zf>57&&zf<65||zf>70&&zf<97););return Jf(e,qf()+(t<6&&Kf()==32&&Gf()==32))}function tp(e){for(;Gf();)switch(zf){case e:return Rf;case 34:case 39:e!==34&&e!==39&&tp(zf);break;case 40:e===41&&tp(e);break;case 92:Gf();break}return Rf}function np(e,t){for(;Gf()&&e+zf!==57&&!(e+zf===84&&Kf()===47););return`/*`+Jf(t,Rf-1)+`*`+Cf(e===47?e:Gf())}function rp(e){for(;!Yf(Kf());)Gf();return Jf(e,Rf)}function ip(e){return Zf(ap(``,null,null,null,[``],e=Xf(e),0,[0],e))}function ap(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Gf()){case 40:if(m!=108&&kf(C,d-1)==58){Of(C+=X(Qf(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Qf(v);break;case 9:case 10:case 13:case 32:C+=$f(m);break;case 92:C+=ep(qf()-1,7);continue;case 47:switch(Kf()){case 42:case 47:Nf(sp(np(Gf(),qf()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=jf(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=X(C,/\f/g,``)),p>0&&jf(C)-d&&Nf(p>32?cp(C+`;`,r,n,d-1):cp(X(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(Nf(S=op(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)ap(C,t,S,S,b,a,d,s,x);else switch(f===99&&kf(C,3)===110?100:f){case 100:case 108:case 109:case 115:ap(e,S,S,r&&Nf(op(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:ap(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+jf(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Wf()==125)continue}switch(C+=Cf(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(jf(C)-1)*_,_=1;break;case 64:Kf()===45&&(C+=Qf(Gf())),f=Kf(),u=d=jf(y=C+=rp(qf())),v++;break;case 45:m===45&&jf(C)==2&&(h=0)}}return a}function op(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=Mf(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=Af(e,d+1,d=Sf(h=o[m])),y=e;_<p;++_)(y=Ef(h>0?f[_]+` `+v:X(v,/&\f/g,f[_])))&&(c[g++]=y);return Vf(e,t,n,i===0?_f:s,c,l,u)}function sp(e,t,n){return Vf(e,t,n,gf,Cf(Uf()),Af(e,2,-2),0)}function cp(e,t,n,r){return Vf(e,t,n,vf,Af(e,0,r),Af(e,r+1,-1),r)}function lp(e,t){for(var n=``,r=Mf(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function up(e,t,n,r){switch(e.type){case xf:if(e.children.length)break;case yf:case vf:return e.return=e.return||e.value;case gf:return``;case bf:return e.return=e.value+`{`+lp(e.children,r)+`}`;case _f:e.value=e.props.join(`,`)}return jf(n=lp(e.children,r))?e.return=e.value+`{`+n+`}`:``}function dp(e){var t=Mf(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function fp(e){return function(t){t.root||(t=t.return)&&e(t)}}var pp=function(e,t,n){for(var r=0,i=0;r=i,i=Kf(),r===38&&i===12&&(t[n]=1),!Yf(i);)Gf();return Jf(e,Rf)},mp=function(e,t){var n=-1,r=44;do switch(Yf(r)){case 0:r===38&&Kf()===12&&(t[n]=1),e[n]+=pp(Rf-1,t,n);break;case 2:e[n]+=Qf(r);break;case 4:if(r===44){e[++n]=Kf()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=Cf(r)}while(r=Gf());return e},hp=function(e,t){return Zf(mp(Xf(e),t))},gp=new WeakMap,_p=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!gp.get(n))&&!r){gp.set(e,!0);for(var i=[],a=hp(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},vp=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function yp(e,t){switch(Tf(e,t)){case 5103:return Y+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+hf+e+mf+e+e;case 6828:case 4268:return Y+e+mf+e+e;case 6165:return Y+e+mf+`flex-`+e+e;case 5187:return Y+e+X(e,/(\w+).+(:[^]+)/,Y+`box-$1$2`+mf+`flex-$1$2`)+e;case 5443:return Y+e+mf+`flex-item-`+X(e,/flex-|-self/,``)+e;case 4675:return Y+e+mf+`flex-line-pack`+X(e,/align-content|flex-|-self/,``)+e;case 5548:return Y+e+mf+X(e,`shrink`,`negative`)+e;case 5292:return Y+e+mf+X(e,`basis`,`preferred-size`)+e;case 6060:return Y+`box-`+X(e,`-grow`,``)+Y+e+mf+X(e,`grow`,`positive`)+e;case 4554:return Y+X(e,/([^-])(transform)/g,`$1`+Y+`$2`)+e;case 6187:return X(X(X(e,/(zoom-|grab)/,Y+`$1`),/(image-set)/,Y+`$1`),e,``)+e;case 5495:case 3959:return X(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return X(X(e,/(.+:)(flex-)?(.*)/,Y+`box-pack:$3`+mf+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+Y+e+e;case 4095:case 3583:case 4068:case 2532:return X(e,/(.+)-inline(.+)/,Y+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jf(e)-1-t>6)switch(kf(e,t+1)){case 109:if(kf(e,t+4)!==45)break;case 102:return X(e,/(.+:)(.+)-([^]+)/,`$1`+Y+`$2-$3$1`+hf+(kf(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Of(e,`stretch`)?yp(X(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(kf(e,t+1)!==115)break;case 6444:switch(kf(e,jf(e)-3-(~Of(e,`!important`)&&10))){case 107:return X(e,`:`,`:`+Y)+e;case 101:return X(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+Y+(kf(e,14)===45?`inline-`:``)+`box$3$1`+Y+`$2$3$1`+mf+`$2box$3`)+e}break;case 5936:switch(kf(e,t+11)){case 114:return Y+e+mf+X(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return Y+e+mf+X(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return Y+e+mf+X(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return Y+e+mf+e+e}return e}var bp=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case vf:e.return=yp(e.value,e.length);break;case bf:return lp([Hf(e,{value:X(e.value,`@`,`@`+Y)})],r);case _f:if(e.length)return Pf(e.props,function(t){switch(Df(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return lp([Hf(e,{props:[X(t,/:(read-\w+)/,`:`+hf+`$1`)]})],r);case`::placeholder`:return lp([Hf(e,{props:[X(t,/:(plac\w+)/,`:`+Y+`input-$1`)]}),Hf(e,{props:[X(t,/:(plac\w+)/,`:`+hf+`$1`)]}),Hf(e,{props:[X(t,/:(plac\w+)/,mf+`input-$1`)]})],r)}return``})}}],xp=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||bp,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[_p,vp],l,u=[up,fp(function(e){l.insert(e)})],d=dp(c.concat(r,u)),f=function(e){return lp(ip(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new pf({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},Sp=!0;function Cp(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var wp=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||Sp===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},Tp=function(e,t,n){wp(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function Ep(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}v();var Dp=!1,Op=/[A-Z]|^ms/g,kp=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ap=function(e){return e.charCodeAt(1)===45},jp=function(e){return e!=null&&typeof e!=`boolean`},Mp=g(function(e){return Ap(e)?e:e.replace(Op,`-$&`).toLowerCase()}),Np=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(kp,function(e,t,n){return Rp={name:t,styles:n,next:Rp},t})}return h[e]!==1&&!Ap(e)&&typeof t==`number`&&t!==0?t+`px`:t},Pp=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;function Fp(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return Rp={name:i.name,styles:i.styles,next:Rp},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Rp={name:o.name,styles:o.styles,next:Rp},o=o.next;return a.styles+`;`}return Ip(e,t,n);case`function`:if(e!==void 0){var s=Rp,c=n(e);return Rp=s,Fp(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function Ip(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Fp(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:jp(s)&&(r+=Mp(a)+`:`+Np(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&Dp)throw Error(Pp);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)jp(o[c])&&(r+=Mp(a)+`:`+Np(a,o[c])+`;`);else{var l=Fp(e,t,o);switch(a){case`animation`:case`animationName`:r+=Mp(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}var Lp=/label:\s*([^\s;{]+)\s*(;|$)/g,Rp;function zp(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Rp=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=Fp(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=Fp(n,t,e[o]),r&&(i+=a[o]);Lp.lastIndex=0;for(var s=``,c;(c=Lp.exec(i))!==null;)s+=`-`+c[1];return{name:Ep(i)+s,styles:i,next:Rp}}var Bp=function(e){return e()},Vp=V.useInsertionEffect?V.useInsertionEffect:!1,Hp=Vp||Bp;Vp||V.useLayoutEffect;var Up=V.createContext(typeof HTMLElement<`u`?xp({key:`css`}):null);Up.Provider;var Wp=function(e){return(0,V.forwardRef)(function(t,n){return e(t,(0,V.useContext)(Up),n)})},Gp=V.createContext({});({}).hasOwnProperty,l();var Kp=!1,qp=u,Jp=function(e){return e!==`theme`},Yp=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?qp:Jp},Xp=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},Zp=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return wp(t,n,r),Hp(function(){return Tp(t,n,r)}),null},Qp=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=Xp(t,n,r),c=s||Yp(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=Wp(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=V.useContext(Gp)}typeof e.className==`string`?a=Cp(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=zp(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?Yp(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),V.createElement(V.Fragment,null,V.createElement(Zp,{cache:t,serialized:m,isStringTag:typeof r==`string`}),V.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,`toString`,{value:function(){return o===void 0&&Kp?`NO_COMPONENT_SELECTOR`:`.`+o}}),h.withComponent=function(t,r){return e(t,L({},n,r,{shouldForwardProp:Xp(h,r,!0)})).apply(void 0,d)},h}},$p=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),em=Qp.bind(null);$p.forEach(function(e){em[e]=em(e)});const tm=em.div({position:`relative`,display:`flex`,height:`100vh`,flexDirection:`column`,backgroundColor:`transparent`}),nm=y.div`
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
`,rm=y(Yd.div)`
  ${{position:`fixed`,bottom:`0`,left:`0`,top:`0`,zIndex:`1000`,display:`flex`,width:`150px`,flexDirection:`column`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}}
  background-color: ${e=>o(e.theme.BACKGROUND,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 16px;
`,im=y.div`
  ${{flex:`none`,padding:`1.25rem`}}
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  background-color: ${e=>e.theme.OFFSET};
  border-radius: 12px 12px 0 0;
`,am=y.div`
  ${{marginTop:`0.25rem`,flex:`1 1 0%`,fontSize:`0.875rem`}}
  padding: 8px 6px;
  overflow-y: auto;
  text-align: center;
  color: ${e=>o(e.theme.PRIMARY,.7)};
`,om=y.h2`
  ${{margin:`0`,fontSize:`1.5rem`,fontWeight:`700`}}
  color: ${e=>e.theme.PRIMARY};
`,sm=y.div`
  position: relative;
`,cm=y.button`
  ${{display:`flex`,width:`100%`,cursor:`pointer`,alignItems:`center`,justifyContent:`space-between`,gap:`0.5rem`}}
  padding: 8px 10px;
  border-radius: 999px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>e.$open?o(e.theme.BACKGROUND,.82):o(e.theme.BACKGROUND,.68)};
  color: ${e=>e.theme.PRIMARY};
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${e=>o(e.theme.BACKGROUND,.86)};
  }

  &:active {
    transform: scale(0.98);
  }
`,lm=y.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  flex: 1;
`,um=y.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: small;
  font-weight: 600;
`,dm=y.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  padding: 6px;
  border-radius: 14px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>o(e.theme.BACKGROUND,.94)};
  box-shadow: 0 10px 24px ${e=>o(e.theme.BACKGROUND,.45)};
  z-index: 2;
`,fm=y.button`
  ${{display:`flex`,width:`100%`,cursor:`pointer`,alignItems:`center`,justifyContent:`space-between`,borderStyle:`none`}}
  padding: 8px 10px;
  border-radius: 10px;
  background: ${e=>e.$active?o(e.theme.OFFSET,.42):`transparent`};
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  text-align: left;

  &:hover {
    background: ${e=>o(e.theme.OFFSET,.32)};
  }
`;y.p`
  ${{margin:`0`,fontSize:`0.875rem`}}
  color: ${e=>o(e.theme.PRIMARY,.7)};
`,em.div({flex:`1 1 0%`});const pm=y.nav`
  ${{flex:`none`,paddingLeft:`0`,paddingRight:`0`,paddingBottom:`50px`,paddingTop:`0.5rem`}}
  border-top: 1px solid ${e=>e.theme.BORDER};
`,mm=y.button`
  ${{width:`100%`,cursor:`pointer`,borderStyle:`none`,paddingLeft:`1.25rem`,paddingRight:`1.25rem`,paddingTop:`0.75rem`,paddingBottom:`0.75rem`,textAlign:`left`,fontSize:`15px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isActive?e.theme.OFFSET:`transparent`};
  color: ${e=>e.theme.PRIMARY};
  font-weight: ${e=>e.$isActive?600:400};
  
  &:hover {
    background-color: ${e=>o(e.theme.OFFSET,.5)};
  }
`,hm=em.div({position:`fixed`,bottom:`0`,left:`0`,right:`0`,top:`0`,zIndex:`999`,backgroundColor:`rgba(0, 0, 0, 0.6)`}),gm=em.div({position:`fixed`,bottom:`2px`,left:`2px`,zIndex:`1000`,display:`flex`,height:`3rem`,width:`3rem`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}),_m=y.button`
  ${{position:`fixed`,zIndex:`1001`,display:`flex`,height:`2.5rem`,width:`2.5rem`,cursor:`pointer`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-shadow":`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,"--tw-shadow-colored":`0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color)`,boxShadow:`var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)`}}
  background-color: ${e=>o(e.theme.BACKGROUND,.75)};
  border: 2px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
`,vm=({isOpen:e,currentPage:t,onToggle:n,onNavigate:r,canAccessInitiativeList:i=!0})=>{let{theme:a}=It(),{t:o,locale:s,setLocale:c,availableLocales:l}=bt(),u=H(e=>e.playerData),d=String(u?.role||``).toUpperCase()===`GM`,[f,p]=(0,V.useState)(!1),m=(0,V.useRef)(null),h=(0,V.useMemo)(()=>({en:o(`common.locale.en`),es:o(`common.locale.es`),fr:o(`common.locale.fr`),de:o(`common.locale.de`)}),[o]);(0,V.useEffect)(()=>{e||p(!1)},[e]),(0,V.useEffect)(()=>{if(!f)return;let e=e=>{m.current&&!m.current.contains(e.target)&&p(!1)};return window.addEventListener(`mousedown`,e),()=>{window.removeEventListener(`mousedown`,e)}},[f]);let g=e=>{c(e),p(!1)};return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(iu,{children:e&&(0,U.jsxs)(rm,{theme:a,initial:{x:-300},animate:{x:0},exit:{x:-300},transition:{type:`tween`,duration:.3},style:{boxShadow:`4px 0 12px rgba(0, 0, 0, 0.15)`},children:[(0,U.jsxs)(im,{theme:a,children:[(0,U.jsx)(om,{theme:a,children:o(`nav.title`)}),(0,U.jsxs)(sm,{ref:m,children:[(0,U.jsxs)(cm,{theme:a,$open:f,type:`button`,"aria-haspopup":`listbox`,"aria-expanded":f,"aria-label":o(`nav.languageSwitcher`),onClick:()=>p(e=>!e),children:[(0,U.jsxs)(lm,{children:[(0,U.jsx)(of,{size:16}),(0,U.jsx)(um,{children:h[s]})]}),(0,U.jsx)(ef,{size:8})]}),f?(0,U.jsx)(dm,{theme:a,role:`listbox`,"aria-label":o(`nav.languageOptions`),children:l.map(e=>(0,U.jsxs)(fm,{theme:a,$active:e===s,type:`button`,role:`option`,"aria-selected":e===s,onClick:()=>g(e),children:[(0,U.jsx)(`span`,{children:h[e]}),e===s?(0,U.jsx)($d,{size:14}):null]},e))}):null]})]}),(0,U.jsxs)(am,{theme:a,children:[o(`nav.featureRequest`),(0,U.jsx)(`br`,{}),(0,U.jsx)(`br`,{}),o(`nav.featureSubmit`),` `,(0,U.jsx)(`a`,{href:`mailto:manuel@battle-system.com`,children:o(`nav.featureEmail`)}),` `,o(`nav.featureOr`),` `,(0,U.jsx)(`a`,{href:`https://discord.gg/Kh9hbHAZnX`,target:`_blank`,rel:`noreferrer`,children:o(`nav.battleSystemDiscord`)}),`.`]}),(0,U.jsxs)(pm,{theme:a,children:[i&&(0,U.jsx)(mm,{theme:a,$isActive:t===`ForgeMain`,onClick:()=>r(`ForgeMain`),children:o(`nav.main`)}),(0,U.jsx)(mm,{theme:a,$isActive:t===`Party`,onClick:()=>r(`Party`),children:o(`nav.party`)}),(0,U.jsx)(mm,{theme:a,$isActive:t===`ChatLog`,onClick:()=>r(`ChatLog`),children:o(`nav.systemLog`)}),d&&(0,U.jsx)(mm,{theme:a,$isActive:t===`System`,onClick:()=>r(`System`),children:o(`nav.system`)}),d&&(0,U.jsx)(mm,{theme:a,$isActive:t===`Settings`,onClick:()=>r(`Settings`),children:o(`nav.settings`)})]})]})}),e&&(0,U.jsx)(hm,{onClick:n}),(0,U.jsx)(gm,{children:(0,U.jsx)(_m,{theme:a,onClick:n,children:(0,U.jsx)(Me,{size:24})})})]})},ym=y.div`
  padding: 20px;
  color: ${e=>e.theme.PRIMARY};
  min-height: 100vh;
`,bm=y.h1`
  color: ${e=>e.theme.PRIMARY};
  background-color: ${e=>e.theme.OFFSET};
  padding: 2px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  font-variant: small-caps;
`,xm=y.div`
  background-color: ${e=>o(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 15px 0;
  backdrop-filter: blur(8px);
`;y.div`
  background-color: ${e=>e.theme.OFFSET};
  color: ${e=>e.theme.PRIMARY};
  padding: 12px 15px;
  border-radius: 6px 6px 0 0;
  margin: -20px -20px 15px -20px;
  font-weight: 600;
  font-size: 18px;
`;const Sm=y.button`
  background-color: ${e=>o(e.theme.OFFSET,e.variant===`secondary`?.5:.75)};
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
    background-color: ${e=>o(e.theme.OFFSET,.9)};
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
`,Cm=y.input`
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px 8px;
  font-size: 14px;
  width: 100%;
  
  &::placeholder {
    color: ${e=>o(e.theme.PRIMARY,.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`;y.textarea`
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
    color: ${e=>o(e.theme.PRIMARY,.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`,y.select`
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
`,y.label`
  color: ${e=>e.theme.PRIMARY};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
`,y.hr`
  border: none;
  border-top: 2px solid ${e=>e.theme.BORDER};
  margin: 20px 0;
`,y.p`
  color: ${e=>e.theme.PRIMARY};
  line-height: 1.6;
  margin: 10px 0;
`,y.span`
  background-color: ${e=>o(e.theme.OFFSET,.75)};
  color: ${e=>e.theme.PRIMARY};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 12px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
`,y.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,y.li`
  padding: 12px 15px;
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${e=>o(e.theme.OFFSET,.2)};
  }
`;var wm=y.button`
  ${{position:`relative`,display:`inline-flex`,height:`1.5rem`,width:`3rem`,alignItems:`center`,borderRadius:`9999px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isOn?o(e.theme.OFFSET,.8):o(e.theme.BORDER,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${e=>o(e.theme.OFFSET,.3)};
  }
  
  &::after {
    content: '';
    ${{display:`inline-block`,height:`1rem`,width:`1rem`,transform:`translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,borderRadius:`9999px`,transitionProperty:`transform`}}
    background-color: ${e=>e.theme.PRIMARY};
    ${e=>e.$isOn?`transform: translateX(1.375rem);`:`transform: translateX(0.25rem);`}
  }
`;const Z=({label:e,isOn:t,onChange:n})=>{let{theme:r}=It();return(0,U.jsx)(wm,{theme:r,$isOn:t,onClick:()=>{let r=!t;M.log(`${e}: ${r}`),n(r)},role:`switch`,"aria-checked":t,"aria-label":e})};var Tm=y.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${e=>e.$zIndexBase};
`,Em=y.div`
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
`,Dm=y.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 15px 0;
  font-size: 18px;
`,Om=y.div`
  margin: 0 0 20px 0;
`,km=y.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;const Am=({isOpen:e,title:t,onClose:n,children:r,actions:i,closeOnOverlayClick:a=!0,minWidth:o,maxWidth:s,zIndexBase:c=9999})=>{let{theme:l}=It();return e?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Tm,{$zIndexBase:c,onClick:a?n:void 0}),(0,U.jsxs)(Em,{theme:l,$minWidth:o,$maxWidth:s,$zIndexBase:c,onClick:e=>e.stopPropagation(),children:[t&&(0,U.jsx)(Dm,{theme:l,children:t}),(0,U.jsx)(Om,{children:r}),i&&(0,U.jsx)(km,{children:i})]})]}):null},jm=e=>({reverseInitiative:e(`settings.tooltips.reverseInitiative`),popcornInitiative:e(`settings.tooltips.popcornInitiative`),initiativeDie:e(`settings.tooltips.initiativeDie`),initiativeModifierAttr:e(`settings.tooltips.initiativeModifierAttr`),initiativeModifierMath:e(`settings.tooltips.initiativeModifierMath`),showCardColumn:e(`settings.tooltips.showCardColumn`),showPlayerView:e(`settings.tooltips.showPlayerView`),showNonPartyUnits:e(`settings.tooltips.showNonPartyUnits`),showHpNumbersOnList:e(`settings.tooltips.showHpNumbersOnList`),ownerOnlyEdit:e(`settings.tooltips.ownerOnlyEdit`),showAdjustHpContextMenu:e(`settings.tooltips.showAdjustHpContextMenu`),showViewUnitContextMenuForPlayers:e(`settings.tooltips.showViewUnitContextMenuForPlayers`),showHpBarsOnTokens:e(`settings.tooltips.showHpBarsOnTokens`),hpOrientation:e(`settings.tooltips.hpOrientation`),showHpNumbersOnTokens:e(`settings.tooltips.showHpNumbersOnTokens`),showDeathEffect:e(`settings.tooltips.showDeathEffect`),showNamesOnTokens:e(`settings.tooltips.showNamesOnTokens`),showNamesToGm:e(`settings.tooltips.showNamesToGm`),showTurnEffect:e(`settings.tooltips.showTurnEffect`),useDescriptiveNames:e(`settings.tooltips.useDescriptiveNames`),enableRumble:e(`settings.tooltips.enableRumble`),enableBones:e(`settings.tooltips.enableBones`),enableDicePlus:e(`settings.tooltips.enableDicePlus`),enableTextBasedRolls:e(`settings.tooltips.enableTextBasedRolls`),enableObrNotification:e(`settings.tooltips.enableObrNotification`),showResultsToAll:e(`settings.tooltips.showResultsToAll`),enableDiscordLogging:e(`settings.tooltips.enableDiscordLogging`),discordUrl:e(`settings.tooltips.discordUrl`),enableConsoleLog:e(`settings.tooltips.enableConsoleLog`)}),Mm=()=>{let e=H(e=>e.systemData);return H(e=>e.cacheReady)?e?{theme:e.theme,cardLayout:e.cardLayout,listLayout:e.listLayout,attributes:e.attributes,systemName:e.systemName,importDate:e.importDate,isLoading:!1}:{theme:{primary:b.theme_primary,offset:b.theme_offset,background:b.theme_background,border:b.theme_border,background_url:b.background_url},cardLayout:b.card_layout,listLayout:b.list_layout,attributes:b.attributes,systemName:b.name,importDate:null,isLoading:!1}:{theme:null,cardLayout:[],listLayout:[],attributes:[],systemName:``,importDate:null,isLoading:!0}};var Nm=`modulepreload`,Pm=function(e){return`/`+e},Fm={};const Im=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Pm(t,n),t in Fm)return;Fm[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Nm,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};var Lm=y.h2`
  ${{marginBottom:`1rem`,paddingBottom:`0.5rem`,fontSize:`1.25rem`,fontWeight:`600`}}
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
`,Q=y.div`
  ${{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`}}
  color: ${e=>e.theme.PRIMARY};
`,$=y.label`
  ${{flex:`1 1 0%`,cursor:`pointer`,textAlign:`left`,fontSize:`1rem`}}
  color: ${e=>e.theme.PRIMARY};
`,Rm=y.div`
  ${{marginLeft:`1rem`,display:`flex`,placeContent:`space-between`,alignItems:`center`,gap:`0.75rem`}}
  color: ${e=>e.theme.PRIMARY};
`,zm=y.label`
  ${{fontSize:`0.875rem`}}
  text-align: left;
  color: ${e=>e.theme.PRIMARY};
`,Bm=y.p`
  ${{marginTop:`0.25rem`,fontSize:`0.75rem`}}
  color: ${e=>o(e.theme.PRIMARY,.7)};
`,Vm=y.input`
  ${{borderRadius:`0.25rem`,paddingLeft:`0.75rem`,paddingRight:`0.75rem`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`,fontSize:`0.875rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  width: 50%;
  
  &::placeholder {
    color: ${e=>o(e.theme.PRIMARY,.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`,Hm=y.select`
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
`,Um=y.button`
  background-color: ${e=>o(e.theme.OFFSET,.45)};
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
`,Wm=em.div({marginTop:`0.5rem`,display:`flex`,justifyContent:`center`,gap:`0.75rem`}),Gm=y.p`
  margin: 8px 0 0;
  font-size: 13px;
  color: ${e=>e.$connected?e.theme.PRIMARY:o(e.theme.PRIMARY,.75)};
`,Km=y.p`
  color: ${e=>o(e.theme.PRIMARY,.9)};
  margin: 0;
  line-height: 1.5;
`;const qm=()=>{let{theme:e}=It(),{t}=bt(),{attributes:n}=Mm(),r=H(e=>e.roomMetadata);H(e=>e.sceneMetadata);let a=H(e=>e.items),o=H(e=>e.cacheReady),[s,c]=(0,V.useState)(!1),[l,u]=(0,V.useState)(!1),[d,f]=(0,V.useState)(`D20`),[p,m]=(0,V.useState)(!1),[h,g]=(0,V.useState)(``),[_,v]=(0,V.useState)(`@STAT`),[y,b]=(0,V.useState)(!1),[x,S]=(0,V.useState)(!1),[C,ee]=(0,V.useState)(!0),[w,E]=(0,V.useState)(!1),[te,ne]=(0,V.useState)(!0),[O,k]=(0,V.useState)(!0),[A,ie]=(0,V.useState)(!1),[ae,oe]=(0,V.useState)(`bottom`),[ce,le]=(0,V.useState)(!1),[ue,de]=(0,V.useState)(!1),[fe,pe]=(0,V.useState)(!1),[me,he]=(0,V.useState)(!1),[ge,_e]=(0,V.useState)(!1),[ve,ye]=(0,V.useState)(!1),[N,be]=(0,V.useState)(!1),[xe,Se]=(0,V.useState)(!1),[Ce,we]=(0,V.useState)(!1),[Te,Ee]=(0,V.useState)(!1),[P,Oe]=(0,V.useState)(!1),[ke,Ae]=(0,V.useState)(!1),[je,Me]=(0,V.useState)(!1),[Ne,Pe]=(0,V.useState)(``),[Fe,Ie]=(0,V.useState)(!1),Le=(0,V.useRef)(null),Re=(0,V.useRef)(null),[F,Be]=(0,V.useState)(()=>ft()),[He,Ue]=(0,V.useState)(()=>qe()),[We,Ge]=(0,V.useState)(()=>_t()),[Ke,Je]=(0,V.useState)(!1),[Ye,Xe]=(0,V.useState)(!1),L=jm(t);(0,V.useEffect)(()=>{let e=!0;return(async()=>{let t=await ht();e&&(Be(t&&ft()),Ue(qe()),Ge(_t()))})(),()=>{e=!1}},[]);let R=r;(0,V.useEffect)(()=>{if(o){if(R[j.POPCORN_INITIATIVE]!==void 0&&c(R[j.POPCORN_INITIATIVE]),R[j.REVERSE_INITIATIVE]!==void 0&&u(R[j.REVERSE_INITIATIVE]),R[j.DICE_RANGE]!==void 0&&f(R[j.DICE_RANGE]),R[j.INITIATIVE_MODIFIER_BID]===void 0?g(``):g(R[j.INITIATIVE_MODIFIER_BID]||``),R[j.INITIATIVE_MODIFIER_EXPR]!==void 0){let e=(R[j.INITIATIVE_MODIFIER_EXPR]||`@STAT`).replace(/\bx\b/gi,`@STAT`).trim();v(e.length>0?e:`@STAT`)}else v(`@STAT`);if(R[j.SHOW_CARD_ACCESS]!==void 0&&m(R[j.SHOW_CARD_ACCESS]),R[j.SHOW_PLAYER_VIEW]!==void 0&&b(R[j.SHOW_PLAYER_VIEW]),R[j.SHOW_OWNER_ONLY_EDIT]!==void 0&&E(R[j.SHOW_OWNER_ONLY_EDIT]),R[j.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?ne(!0):ne(R[j.SHOW_MODIFY_UNIT_CONTEXT_MENU]),R[j.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===void 0?k(!0):k(R[j.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]),R[j.SHOW_NON_PARTY_UNITS]!==void 0&&S(R[j.SHOW_NON_PARTY_UNITS]),R[j.SHOW_LIST_HP_NUMBERS]===void 0?ee(!0):ee(R[j.SHOW_LIST_HP_NUMBERS]),R[j.SHOW_HP_BARS]!==void 0&&ie(R[j.SHOW_HP_BARS]),R[j.HP_BAR_ORIENTATION]!==void 0&&oe(R[j.HP_BAR_ORIENTATION]),R[j.SHOW_HP_NUMBERS]!==void 0&&le(R[j.SHOW_HP_NUMBERS]),R[j.SHOW_DEATH_EFFECT]!==void 0&&de(R[j.SHOW_DEATH_EFFECT]),R[j.SHOW_NAMES]!==void 0&&pe(R[j.SHOW_NAMES]),R[j.SHOW_NAMES_TO_GM]!==void 0&&he(R[j.SHOW_NAMES_TO_GM]),R[j.SHOW_TURN_EFFECT]!==void 0&&_e(R[j.SHOW_TURN_EFFECT]),R[j.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&ye(R[j.USE_DESCRIPTIVE_DUPLICATES]),R[j.ENABLE_RUMBLE]!==void 0&&be(R[j.ENABLE_RUMBLE]),R[j.ENABLE_BONES]!==void 0&&Se(R[j.ENABLE_BONES]),R[j.ENABLE_DICE_PLUS]!==void 0&&we(R[j.ENABLE_DICE_PLUS]),R[j.ENABLE_TEXT_BASED_ROLLS]!==void 0&&Ee(R[j.ENABLE_TEXT_BASED_ROLLS]),R[j.ENABLE_OBR_NOTIFICATION]!==void 0&&Oe(R[j.ENABLE_OBR_NOTIFICATION]),R[j.SHOW_NOTIFICATION_TO_ALL]!==void 0&&Ae(R[j.SHOW_NOTIFICATION_TO_ALL]),R[j.ENABLE_DISCORD_LOGGING]!==void 0&&Me(R[j.ENABLE_DISCORD_LOGGING]),R[j.DISCORD_URL]!==void 0&&Pe(R[j.DISCORD_URL]),R[j.ENABLE_CONSOLE_LOG]!==void 0){let e=R[j.ENABLE_CONSOLE_LOG];Ie(e),M.setEnabled(e)}else Ie(!1)}},[o,R]);let z=async(e,t)=>{await i.room.setMetadata({[e]:t})},B=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},et=n.filter(e=>e.attr_type===`numb`).sort((e,t)=>(e.attr_name||``).localeCompare(t.attr_name||``)),tt=(e,n)=>{let r=e.trim();return r?n?/@STAT/i.test(r)?/\d\s*d\s*\d|\bd\s*\d/i.test(r)?{valid:!1,error:t(`settings.diceNotAllowedError`)}:Qe(r.replace(/@STAT/gi,`@${n}`))?{valid:!0}:{valid:!1,error:t(`settings.invalidSyntaxError`)}:{valid:!1,error:t(`settings.exprMustIncludeStatError`)}:{valid:!1,error:t(`settings.selectNumericAttributeError`)}:{valid:!1,error:t(`settings.exprRequiredError`)}},nt=async(e,t)=>{await z(j.INITIATIVE_MODIFIER_BID,e),await z(j.INITIATIVE_MODIFIER_EXPR,t)},rt=async e=>{if(g(e),!e){await nt(``,_);return}let n=tt(_,e);n.valid||await i.notification.show(n.error||t(`settings.invalidModifierSettingsError`),`WARNING`),await nt(e,_)},it=async()=>{let e=_.trim(),n=(e.length>0?e:`@STAT`).replace(/\bx\b/gi,`@STAT`);if(v(n),!h){await nt(``,n);return}let r=tt(n,h);if(!r.valid){await i.notification.show(r.error||t(`settings.invalidModifierExpressionError`),`WARNING`);return}await nt(h,n)},at=async()=>{if(!h){await i.notification.show(t(`settings.selectAttributeBeforeTestingError`),`WARNING`);return}let e=_.replace(/\bx\b/gi,`@STAT`),n=tt(e,h);if(!n.valid){await i.notification.show(n.error||t(`settings.invalidModifierExpressionError`),`WARNING`);return}let r=B(d),a=Math.floor(Math.random()*r)+1,o=ze(e.replace(/@STAT/gi,`@${h}`),{bidValueMap:{[h]:14},onMissingBid:`useZero`});if(!o.valid||!o.notation){await i.notification.show(t(`settings.couldNotResolveModifierError`),`ERROR`);return}let s=Number(o.notation),c=Number.isFinite(s)?Math.trunc(s):0,l=a+c,u=e.replace(/@STAT/gi,`14`);await i.notification.show(t(`settings.mockInitiativeResult`,{sides:r,baseRoll:a,expression:u,modifier:c,total:l}),`SUCCESS`)},ot=async()=>{try{let e=await De(),n=JSON.stringify(e,null,2),r=new Blob([n],{type:`text/plain;charset=utf-8`}),a=URL.createObjectURL(r),o=document.createElement(`a`);o.href=a,o.download=`forge-collection-${new Date().toISOString().slice(0,10)}.txt`,o.click(),URL.revokeObjectURL(a),await i.notification.show(t(`settings.collectionExportComplete`,{count:e.length}),`SUCCESS`)}catch(e){M.log(`Collection export failed`,e),await i.notification.show(t(`settings.collectionExportFailed`),`ERROR`)}},st=()=>{Xe(!0)},ct=()=>{Xe(!1),Le.current?.click()},lt=async e=>{let n=e.target.files?.[0];if(n)try{let e=await n.text(),r=JSON.parse(e);if(!Array.isArray(r)){await i.notification.show(t(`settings.collectionImportArrayError`),`ERROR`);return}let a=await se(r);await i.notification.show(t(`settings.collectionImportCompleteSummary`,{created:a.created,updated:a.updated,skipped:a.skipped}),`SUCCESS`)}catch(e){M.log(`Collection import failed`,e),await i.notification.show(t(`settings.collectionImportFailed`),`ERROR`)}finally{e.target.value=``}},ut=async()=>{Je(!0);try{await Ve(),await i.broadcast.sendMessage(D.AUTHSYNCCHANNEL,{type:`BS_AUTH_STATE`,source:D.EXTENSIONID,snapshot:$e()},{destination:`LOCAL`}),Be(ft()),Ue(qe()),Ge(_t()),await i.notification.show(t(`settings.connectedAccount`),`SUCCESS`)}catch(e){M.error(`Battle-System auth connection failed`,e),await i.notification.show(t(`settings.unableToConnectAccount`),`ERROR`),Be(ft()),Ue(qe()),Ge(_t())}finally{Je(!1)}};return(0,U.jsxs)(Yd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[(0,U.jsxs)(ym,{theme:e,children:[(0,U.jsx)(bm,{theme:e,children:t(`settings.pageTitle`)}),(0,U.jsxs)(xm,{theme:e,children:[(0,U.jsx)(Lm,{theme:e,children:t(`settings.accountSectionTitle`)}),(0,U.jsx)(Wm,{children:(0,U.jsx)(Sm,{theme:e,onClick:()=>{ut()},disabled:Ke,children:t(Ke?`settings.connecting`:F?`settings.reconnectAccount`:`settings.connectAccount`)})}),(0,U.jsx)(Gm,{theme:e,$connected:F,children:F?t(`settings.statusConnected`,{tier:He}):t(`settings.statusDisconnected`)})]}),(0,U.jsxs)(xm,{theme:e,children:[(0,U.jsx)(Lm,{theme:e,children:t(`settings.collectionSectionTitle`)}),(0,U.jsxs)(Wm,{children:[(0,U.jsx)(Sm,{theme:e,onClick:ot,children:t(`settings.export`)}),(0,U.jsx)(Sm,{theme:e,onClick:st,children:t(`settings.import`)})]}),(0,U.jsx)(`input`,{ref:Le,type:`file`,accept:`.txt,.json,text/plain,application/json`,onChange:lt,style:{display:`none`}})]}),(0,U.jsxs)(xm,{theme:e,children:[(0,U.jsx)(Lm,{theme:e,children:t(`settings.listControlsSectionTitle`)}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.reverseInitiative,children:t(`settings.reverseInitiative`)})}),(0,U.jsx)(Z,{label:t(`settings.reverseInitiative`),isOn:l,onChange:async e=>{u(e),await z(j.REVERSE_INITIATIVE,e),e&&s&&(c(!1),await z(j.POPCORN_INITIATIVE,!1))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.popcornInitiative,children:t(`settings.popcornInitiative`)})}),(0,U.jsx)(Z,{label:t(`settings.popcornInitiative`),isOn:s,onChange:async e=>{c(e),await z(j.POPCORN_INITIATIVE,e),e&&l&&(u(!1),await z(j.REVERSE_INITIATIVE,!1))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.initiativeDie,children:t(`settings.initiativeDie`)})}),(0,U.jsx)(Vm,{theme:e,type:`text`,value:d,onChange:async e=>{let t=e.target.value;f(t),await z(j.DICE_RANGE,t),M.log(`Dice Range:`,t)},placeholder:`D20`,maxLength:3})]}),(0,U.jsxs)(Rm,{theme:e,children:[(0,U.jsx)(zm,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.initiativeModifierAttr,children:t(`settings.initiativeModifier`)})}),(0,U.jsxs)(Hm,{theme:e,value:h,onChange:async e=>{await rt(e.target.value)},children:[(0,U.jsx)(`option`,{value:``,children:t(`settings.none`)}),et.map(e=>(0,U.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,U.jsxs)(Rm,{theme:e,children:[(0,U.jsx)(zm,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.initiativeModifierMath,children:t(`settings.math`)})}),(0,U.jsx)(Vm,{theme:e,type:`text`,value:_,onChange:e=>{v(e.target.value)},onBlur:async()=>{await it()},placeholder:`floor((@STAT-10)/2)`,maxLength:120,disabled:!h}),(0,U.jsx)(Um,{theme:e,type:`button`,onClick:()=>{at()},disabled:!h,children:t(`settings.test`)})]}),(0,U.jsx)(Bm,{theme:e,children:t(`settings.initiativeModifierHint`)}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.showCardColumn,children:t(`settings.showCardColumn`)})}),(0,U.jsx)(Z,{label:t(`settings.showCardColumn`),isOn:p,onChange:async e=>{m(e),await z(j.SHOW_CARD_ACCESS,e)}})]})]}),(0,U.jsxs)(xm,{theme:e,children:[(0,U.jsx)(Lm,{theme:e,children:t(`settings.playerControlsSectionTitle`)}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.showPlayerView,children:t(`settings.showPlayerView`)})}),(0,U.jsx)(Z,{label:t(`settings.showPlayerView`),isOn:y,onChange:async e=>{b(e),await z(j.SHOW_PLAYER_VIEW,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.showNonPartyUnits,children:t(`settings.showNonPartyUnits`)})}),(0,U.jsx)(Z,{label:t(`settings.showNonPartyUnits`),isOn:x,onChange:async e=>{S(e),await z(j.SHOW_NON_PARTY_UNITS,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.showHpNumbersOnList,children:t(`settings.showHpNumbersOnList`)})}),(0,U.jsx)(Z,{label:t(`settings.showHpNumbersOnList`),isOn:C,onChange:async e=>{ee(e),await z(j.SHOW_LIST_HP_NUMBERS,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.ownerOnlyEdit,children:t(`settings.ownerOnlyEdit`)})}),(0,U.jsx)(Z,{label:t(`settings.ownerOnlyEdit`),isOn:w,onChange:async e=>{E(e),await z(j.SHOW_OWNER_ONLY_EDIT,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.showAdjustHpContextMenu,children:t(`settings.showAdjustHpContextMenu`)})}),(0,U.jsx)(Z,{label:t(`settings.showAdjustHpContextMenu`),isOn:te,onChange:async e=>{ne(e),await z(j.SHOW_MODIFY_UNIT_CONTEXT_MENU,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.showViewUnitContextMenuForPlayers,children:t(`settings.showViewUnitContextMenuForPlayers`)})}),(0,U.jsx)(Z,{label:t(`settings.showViewUnitContextMenuForPlayers`),isOn:O,onChange:async e=>{k(e),await z(j.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS,e)}})]})]}),(0,U.jsxs)(xm,{theme:e,children:[(0,U.jsx)(Lm,{theme:e,children:t(`settings.gameControlsSectionTitle`)}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.showHpBarsOnTokens,children:t(`settings.showHpBarsOnTokens`)})}),(0,U.jsx)(Z,{label:t(`settings.showHpBarsOnTokens`),isOn:A,onChange:async e=>{ie(e),await z(j.SHOW_HP_BARS,e),e&&ce&&(le(!1),await z(j.SHOW_HP_NUMBERS,!1)),e&&R[j.HP_BAR_ORIENTATION]===void 0&&(oe(`bottom`),await z(j.HP_BAR_ORIENTATION,`bottom`))}})]}),(A||ce)&&(0,U.jsxs)(Rm,{theme:e,children:[(0,U.jsx)(zm,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.hpOrientation,children:t(`settings.orientation`)})}),(0,U.jsxs)(Hm,{theme:e,value:ae,onChange:async e=>{let t=e.target.value;oe(t),await z(j.HP_BAR_ORIENTATION,t)},children:[(0,U.jsx)(`option`,{value:`top`,children:t(`common.orientation.top`)}),(0,U.jsx)(`option`,{value:`bottom`,children:t(`common.orientation.bottom`)}),(0,U.jsx)(`option`,{value:`left`,children:t(`common.orientation.left`)}),(0,U.jsx)(`option`,{value:`right`,children:t(`common.orientation.right`)})]})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.showHpNumbersOnTokens,children:t(`settings.showHpNumbersOnTokens`)})}),(0,U.jsx)(Z,{label:t(`settings.showHpNumbersOnTokens`),isOn:ce,onChange:async e=>{le(e),await z(j.SHOW_HP_NUMBERS,e),e&&A&&(ie(!1),await z(j.SHOW_HP_BARS,!1)),e&&R[j.HP_BAR_ORIENTATION]===void 0&&(oe(`bottom`),await z(j.HP_BAR_ORIENTATION,`bottom`))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.showDeathEffect,children:t(`settings.showDeathEffect`)})}),(0,U.jsx)(Z,{label:t(`settings.showDeathEffect`),isOn:ue,onChange:async e=>{de(e),await z(j.SHOW_DEATH_EFFECT,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.showNamesOnTokens,children:t(`settings.showNamesOnTokens`)})}),(0,U.jsx)(Z,{label:t(`settings.showNamesOnTokens`),isOn:fe,onChange:async e=>{pe(e),await z(j.SHOW_NAMES,e);let t=a.filter(e=>e.metadata[T.ON_LIST]===!0);e?(M.log(`Showing names on tokens`),await i.scene.items.updateItems(t,e=>{for(let t of e){let e=t.metadata[T.UNIT_NAME],n=t;e&&n.text&&(n.text.plainText=String(e))}})):(M.log(`Hiding names on tokens`),await i.scene.items.updateItems(t,e=>{for(let t of e){let e=t;e.text&&(e.text.plainText=``)}}))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.showNamesToGm,children:t(`settings.showNamesToGm`)})}),(0,U.jsx)(Z,{label:t(`settings.showNamesToGm`),isOn:me,onChange:async e=>{he(e),await z(j.SHOW_NAMES_TO_GM,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.showTurnEffect,children:t(`settings.showTurnEffect`)})}),(0,U.jsx)(Z,{label:t(`settings.showTurnEffect`),isOn:ge,onChange:async e=>{_e(e),await z(j.SHOW_TURN_EFFECT,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.useDescriptiveNames,children:t(`settings.useDescriptiveNames`)})}),(0,U.jsx)(Z,{label:t(`settings.useDescriptiveNames`),isOn:ve,onChange:async e=>{ye(e),await z(j.USE_DESCRIPTIVE_DUPLICATES,e)}})]})]}),(0,U.jsxs)(xm,{theme:e,children:[(0,U.jsx)(Lm,{theme:e,children:t(`settings.diceControlsSectionTitle`)}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.enableTextBasedRolls,children:t(`settings.enableTextBasedRolls`)})}),(0,U.jsx)(Z,{label:t(`settings.enableTextBasedRolls`),isOn:Te,onChange:async e=>{Ee(e),await z(j.ENABLE_TEXT_BASED_ROLLS,e),e&&(Oe(!0),be(!1),Se(!1),we(!1),await z(j.ENABLE_OBR_NOTIFICATION,!0),await z(j.ENABLE_RUMBLE,!1),await z(j.ENABLE_BONES,!1),await z(j.ENABLE_DICE_PLUS,!1))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.enableRumble,children:t(`settings.enableRumble`)})}),(0,U.jsx)(Z,{label:t(`settings.enableRumble`),isOn:N,onChange:async e=>{be(e),await z(j.ENABLE_RUMBLE,e),e&&(Se(!1),we(!1),Ee(!1),await z(j.ENABLE_BONES,!1),await z(j.ENABLE_DICE_PLUS,!1),await z(j.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.enableBones,children:t(`settings.enableBones`)})}),(0,U.jsx)(Z,{label:t(`settings.enableBones`),isOn:xe,onChange:async e=>{Se(e),await z(j.ENABLE_BONES,e),e&&(be(!1),we(!1),Ee(!1),await z(j.ENABLE_RUMBLE,!1),await z(j.ENABLE_DICE_PLUS,!1),await z(j.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.enableDicePlus,children:t(`settings.enableDicePlus`)})}),(0,U.jsx)(Z,{label:t(`settings.enableDicePlus`),isOn:Ce,onChange:async e=>{we(e),await z(j.ENABLE_DICE_PLUS,e),e&&(be(!1),Se(!1),Ee(!1),await z(j.ENABLE_RUMBLE,!1),await z(j.ENABLE_BONES,!1),await z(j.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.enableObrNotification,children:t(`settings.enableObrNotification`)})}),(0,U.jsx)(Z,{label:t(`settings.enableObrNotification`),isOn:P,onChange:async e=>{Oe(e),await z(j.ENABLE_OBR_NOTIFICATION,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.showResultsToAll,children:t(`settings.showResultsToAll`)})}),(0,U.jsx)(Z,{label:t(`settings.showResultsToAll`),isOn:ke,onChange:async e=>{Ae(e),await z(j.SHOW_NOTIFICATION_TO_ALL,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.enableDiscordLogging,children:t(`settings.enableDiscordLogging`)})}),(0,U.jsx)(Z,{label:t(`settings.enableDiscordLogging`),isOn:je,onChange:async e=>{if(e&&!Ze(Ne.trim())){await i.notification.show(t(`settings.invalidDiscordWebhookWarning`),`WARNING`),Me(!1),await z(j.ENABLE_DISCORD_LOGGING,!1);return}Me(e),await z(j.ENABLE_DISCORD_LOGGING,e)}})]}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)(zm,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.discordUrl,children:t(`settings.discordUrl`)})}),(0,U.jsx)(Vm,{theme:e,type:`text`,value:Ne,onChange:async e=>{let t=e.target.value,n=t.trim();Pe(t),await z(j.DISCORD_URL,n),M.log(`Discord URL:`,n)},placeholder:`https://discord.com/api/webhooks/...`,maxLength:200})]})]}),(0,U.jsxs)(xm,{theme:e,children:[(0,U.jsx)(Lm,{theme:e,children:t(`settings.otherSectionTitle`)}),(0,U.jsxs)(Q,{theme:e,children:[(0,U.jsx)($,{theme:e,children:(0,U.jsx)(I,{theme:e,text:L.enableConsoleLog,children:t(`settings.enableConsoleLog`)})}),(0,U.jsx)(Z,{label:t(`settings.enableConsoleLog`),isOn:Fe,onChange:async e=>{Ie(e),M.setEnabled(e),await z(j.ENABLE_CONSOLE_LOG,e)}})]})]}),(0,U.jsxs)(xm,{theme:e,children:[(0,U.jsx)(Lm,{theme:e,children:t(`settings.clashImportSectionTitle`)}),(0,U.jsx)(Wm,{children:(0,U.jsx)(I,{theme:e,text:t(`settings.clashImportTooltip`),children:(0,U.jsx)(Sm,{theme:e,onClick:()=>{Re.current?.click()},children:t(`settings.clashImportLocal`)})})}),(0,U.jsx)(`input`,{ref:Re,type:`file`,accept:`.txt,.json,text/plain,application/json`,onChange:async e=>{let r=e.target.files?.[0];if(r)try{let e=await r.text(),a=JSON.parse(e);if(!Array.isArray(a)){await i.notification.show(t(`settings.clashImportArrayError`),`ERROR`);return}let{migrateClashCollectionFromJson:o}=await Im(async()=>{let{migrateClashCollectionFromJson:e}=await import(`./clashToForgeMapper-Chi2Zbqs.js`);return{migrateClashCollectionFromJson:e}},__vite__mapDeps([0,1])),s=re(R,n),c=o(a,{hp:{currentHpBid:s.currentHpBid,maxHpBid:s.maxHpBid,attributes:n}});if(c.records.length===0){await i.notification.show(t(`settings.clashImportFailed`),`ERROR`);return}let l=await se(c.records);await i.notification.show(t(`settings.clashImportCompleteSummary`,{created:l.created,updated:l.updated,skipped:l.skipped,failed:c.skipped}),`SUCCESS`)}catch(e){M.log(`Clash collection import failed`,e),await i.notification.show(t(`settings.clashImportFailed`),`ERROR`)}finally{e.target.value=``}},style:{display:`none`}})]})]}),(0,U.jsx)(Am,{isOpen:Ye,title:t(`settings.confirmImportTitle`),onClose:()=>Xe(!1),actions:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Sm,{theme:e,variant:`secondary`,onClick:()=>Xe(!1),children:t(`settings.cancel`)}),(0,U.jsx)(Sm,{theme:e,onClick:ct,children:t(`settings.continue`)})]}),children:(0,U.jsx)(Km,{theme:e,children:t(`settings.importConfirmMessage`)})})]})};var Jm=y.div`
  ${{display:`flex`,height:`100%`,flexDirection:`column`,padding:`1rem`}}
`,Ym=y.div`
  ${{flex:`1 1 0%`,overflowY:`auto`,borderRadius:`0.5rem`,borderWidth:`2px`,"--tw-border-opacity":`1`,borderColor:`rgb(255 255 255 / var(--tw-border-opacity, 1))`,padding:`0.5rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  margin: 10px;
  white-space: break-spaces;
  word-wrap: break-word;
  margin-bottom: 50px;
`,Xm=y.div`
  ${{marginBottom:`0.5rem`,textAlign:`left`}}
`,Zm=y.span`
  ${{marginRight:`0.5rem`,fontSize:`0.75rem`,"--tw-text-opacity":`1`,color:`rgb(203 213 224 / var(--tw-text-opacity, 1))`}}
`,Qm=y.span`
  ${{fontSize:`0.875rem`,"--tw-text-opacity":`1`,color:`rgb(255 255 255 / var(--tw-text-opacity, 1))`}}
`;const $m=()=>{let e=kt(e=>e.messages),t=(0,V.useRef)(null),{theme:n}=It(),{t:r}=bt();return(0,V.useEffect)(()=>{t.current?.scrollIntoView({behavior:`smooth`})},[e]),(0,U.jsx)(Yd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,U.jsxs)(Jm,{children:[(0,U.jsx)(bm,{theme:n,children:r(`nav.systemLog`)}),(0,U.jsxs)(Ym,{children:[e.map(e=>(0,U.jsxs)(Xm,{children:[(0,U.jsx)(Zm,{children:e.timestamp}),(0,U.jsx)(Qm,{children:e.text})]},e.id)),(0,U.jsx)(`div`,{ref:t})]})]})})},eh=`buff_effect_one`,th=`debuff_effect_one`,nh=[{value:`buff_effect_one`,label:`Buff Effect One`},{value:`buff_effect_two`,label:`Buff Effect Two`}],rh=[{value:`debuff_effect_one`,label:`Debuff Effect One`},{value:`debuff_effect_two`,label:`Debuff Effect Two`}],ih=e=>nh.some(t=>t.value===e),ah=e=>rh.some(t=>t.value===e),oh=e=>{switch(e){case`buff_effect_two`:return`
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
`}},sh=e=>{switch(e){case`debuff_effect_two`:return`
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
`}};var ch=D.EXTENSIONID,lh=`com.battle-system.forge`;const uh={SYSTEM_NAME:`${ch}/SystemName`,IMPORT_DATE:`${ch}/ImportDate`,SNAPSHOT_PUBLIC_ID:`${ch}/SnapshotPublicId`};var dh=te(b.attributes),fh=(e,t)=>e instanceof Error&&e.message?e.message:t,ph=y.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,mh=y.div`
  background-color: ${e=>o(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`,hh=y.h2`
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  padding: 12px 15px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 400;
`,gh=y.p`
  color: ${e=>o(e.theme.PRIMARY,.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`,_h=y.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 15px;
`,vh=y.div`
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
`,yh=y.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.theme.PRIMARY};
  margin-top: 5px;
`,bh=y.div`
  margin-top: 16px;
  background-color: ${e=>o(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 14px;
`,xh=y.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 10px 0;
  font-size: 15px;
`,Sh=y.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`,Ch=y.label`
  color: ${e=>e.theme.PRIMARY};
  min-width: 84px;
  font-size: 13px;
`,wh=y.select`
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
`,Th=y.div`
  background-color: ${()=>o(`#FF0000`,.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,Eh=y.div`
  background-color: ${()=>o(`#00FF00`,.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,Dh=y.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`,Oh=y.p`
  color: ${e=>o(e.theme.PRIMARY,.9)};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,kh=y.div`
  margin-top: 30px;
`,Ah=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,jh=y.div`
  background-color: ${e=>o(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Mh=y.div`
  flex: 1;
`,Nh=y.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`,Ph=y.div`
  color: ${e=>o(e.theme.PRIMARY,.7)};
  font-size: 13px;
  font-style: italic;
`,Fh=y.div`
  display: flex;
  gap: 8px;
`,Ih=y.button`
  background-color: ${e=>e.$variant===`danger`?o(`#FF0000`,.2):o(e.theme.OFFSET,.5)};
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
    background-color: ${e=>e.$variant===`danger`?o(`#FF0000`,.3):e.theme.OFFSET};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Lh={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}};const Rh=()=>{let{theme:e,updateThemeFromSystem:t}=It(),{t:n,locale:r}=bt(),a=H(e=>e.sceneMetadata),s=H(e=>e.roomMetadata),c=s,l=H(e=>e.systemData),u=H(e=>e.setSystemData),[d,f]=(0,V.useState)(()=>nt().premiumAuthorized),[p,m]=(0,V.useState)(``),[h,g]=(0,V.useState)(!1),[v,y]=(0,V.useState)(null),[x,S]=(0,V.useState)(null),[C,ee]=(0,V.useState)(``),[w,T]=(0,V.useState)(null),[E,te]=(0,V.useState)(null),[ne,D]=(0,V.useState)([]),[O,k]=(0,V.useState)(``),[re,A]=(0,V.useState)(``),[ie,ae]=(0,V.useState)(eh),[oe,se]=(0,V.useState)(th),[ce,le]=(0,V.useState)(!1),[ue,de]=(0,V.useState)(!1),[fe,me]=(0,V.useState)(null),[he,ge]=(0,V.useState)(null),[_e,ve]=(0,V.useState)([]),[ye,N]=(0,V.useState)(!1),[be,xe]=(0,V.useState)(null),[Se,Ce]=(0,V.useState)(``),we={buff_effect_one:n(`system.buffVisualPreset.buff_effect_one`),buff_effect_two:n(`system.buffVisualPreset.buff_effect_two`)},Te={debuff_effect_one:n(`system.debuffVisualPreset.debuff_effect_one`),debuff_effect_two:n(`system.debuffVisualPreset.debuff_effect_two`)};(0,V.useEffect)(()=>{let e=!0,t=async()=>{await ht(),e&&f(nt().premiumAuthorized)},n=Re(t=>{e&&f(t.premiumAuthorized)});return t(),()=>{e=!1,n()}},[]),(0,V.useEffect)(()=>{P(),Ae()},[a,s,l,d]);let P=()=>{try{if(!d){let e={primary:b.theme_primary,offset:b.theme_offset,background:b.theme_background,border:b.theme_border,background_url:b.background_url},t=c[j.BUFF_VISUAL_PRESET],n=c[j.DEBUFF_VISUAL_PRESET],r=ih(t)?t:eh,i=ah(n)?n:th;ee(b.name),T(null),te(e),D(b.attributes),k(dh.currentHpBid),A(dh.maxHpBid),ae(r),se(i);return}if(l){let e=c[j.HP_CURRENT_BID],t=c[j.HP_MAX_BID],n=c[j.BUFF_VISUAL_PRESET],r=c[j.DEBUFF_VISUAL_PRESET],i=ih(n)?n:null,a=ah(r)?r:null;ee(l.systemName),T(l.importDate),te(l.theme),D(l.attributes),k(e||``),A(t||``),fe&&i===fe&&me(null),he&&a===he&&ge(null),!ce&&!fe&&ae(e=>i||e),!ue&&!he&&se(e=>a||e);return}let e=s[uh.SYSTEM_NAME],t=s[uh.IMPORT_DATE],n=c[j.HP_CURRENT_BID],r=c[j.HP_MAX_BID],i=c[j.BUFF_VISUAL_PRESET],a=c[j.DEBUFF_VISUAL_PRESET],o=ih(i)?i:null,u=ah(a)?a:null;ee(e||b.name),T(t||null),te({primary:b.theme_primary,offset:b.theme_offset,background:b.theme_background,border:b.theme_border,background_url:b.background_url}),D(b.attributes),k(n||``),A(r||``),fe&&o===fe&&me(null),he&&u===he&&ge(null),!ce&&!fe&&ae(e=>o||e),!ue&&!he&&se(e=>u||e)}catch(e){M.error(`Error loading system from cache:`,e)}},De=async(e,t)=>{await i.room.setMetadata({[e]:t})},Oe=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let r;try{r=JSON.parse(e)}catch{throw Error(n(`system.error.invalidJsonField`,{field:t}))}if(!Array.isArray(r))throw Error(n(`system.error.invalidArrayField`,{field:t}));return r}throw Error(n(`system.error.invalidFieldType`,{field:t}))},ke=ne.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`numb`||t===`resource`}),Ae=()=>{try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(n&&n.startsWith(`${lh}.`)&&n.endsWith(`.backup`)){let t=localStorage.getItem(n);if(t){let n=JSON.parse(t);e.push(n)}}}e.sort((e,t)=>new Date(t.backupDate).getTime()-new Date(e.backupDate).getTime()),ve(e)}catch(e){M.error(`Error loading backups:`,e)}},je=async e=>{try{if(!l){M.warn(`Cannot create backup: runtime system data is unavailable`);return}let e=l.systemName||b.name,t={name:e,backupDate:new Date().toISOString(),theme_primary:l.theme.primary,theme_offset:l.theme.offset,theme_background:l.theme.background,theme_border:l.theme.border,background_url:l.theme.background_url,card_layout:l.cardLayout,list_layout:l.listLayout,attributes:l.attributes},n=`${lh}.${e}.backup`;localStorage.setItem(n,JSON.stringify(t)),M.log(`Backup created for ${e}`),Ae()}catch(e){throw M.error(`Error creating backup:`,e),e}},Me=e=>{try{let t=`${lh}.${e}.backup`;localStorage.removeItem(t),M.log(`Backup deleted for ${e}`),Ae(),S(n(`system.success.backupDeleted`,{name:e}))}catch(e){M.error(`Error deleting backup:`,e),y(n(`system.error.deleteBackup`))}},Ne=(e,t)=>{Ce(e),xe(()=>t),N(!0)},Pe=async()=>{N(!1),be&&(await be(),xe(null))},Fe=()=>{N(!1),xe(null),Ce(``)},Ie=async()=>{if(!p.trim()){y(n(`system.error.enterShareId`));return}Ne(n(`system.confirm.importSystem`),async()=>{await Le()})},Le=async()=>{if(!_t()){y(n(`system.error.premiumImport`));return}g(!0),y(null),S(null);try{await We();let{data:e,error:r}=await Ee(async()=>_.rpc(`bs_forge_import_system_snapshot`,{p_source_share_id:p.trim()}));if(r)throw r;if(!e){y(n(`system.error.noSystemFound`)),g(!1);return}let a=Array.isArray(e)?e[0]:e;if(!a||typeof a.snapshot_public_id!=`string`)throw Error(n(`system.error.snapshotInvalid`));let o=Oe(a.card_layout,`card_layout`),s=Oe(a.list_layout,`list_layout`),c=Oe(a.attributes,`attributes`);if(!Array.isArray(c))throw Error(n(`system.error.attributesInvalid`));await je(C);let l={primary:a.theme_primary,offset:a.theme_offset,background:a.theme_background,border:a.theme_border,background_url:a.background_url},d=new Date().toISOString();await i.room.setMetadata({[uh.SNAPSHOT_PUBLIC_ID]:a.snapshot_public_id,[uh.SYSTEM_NAME]:a.system_name,[uh.IMPORT_DATE]:d}),u({theme:l,cardLayout:o,listLayout:s,attributes:c,systemName:a.system_name,importDate:d,snapshotPublicId:a.snapshot_public_id}),ee(a.system_name),T(d),te(l),t(l.primary,l.offset,l.background,l.border,l.background_url),S(n(`system.success.systemImported`,{name:a.system_name})),m(``),M.log(`System snapshot imported and loaded:`,{systemName:a.system_name,snapshotPublicId:a.snapshot_public_id})}catch(e){M.error(`Error fetching system:`,e),y(fh(e,n(`system.error.fetchSystem`)))}finally{g(!1)}},F=async e=>{Ne(n(`system.confirm.restoreBackup`,{name:e.name}),async()=>{await ze(e)})},ze=async e=>{g(!0),y(null),S(null);try{if(!_t()){y(n(`system.error.premiumRestore`));return}await We(),await je(C);let r={primary:e.theme_primary,offset:e.theme_offset,background:e.theme_background,border:e.theme_border,background_url:e.background_url};if(!Array.isArray(e.card_layout)||!Array.isArray(e.list_layout)||!Array.isArray(e.attributes))throw Error(n(`system.error.backupInvalid`));let a=new Date().toISOString(),o=`forge-backup:${e.name.trim().toLowerCase()}`,{data:s,error:c}=await Ee(async()=>_.rpc(`bs_forge_upsert_user_snapshot_payload`,{p_source_share_id:o,p_system_name:e.name,p_background_url:e.background_url,p_theme_primary:e.theme_primary,p_theme_offset:e.theme_offset,p_theme_background:e.theme_background,p_theme_border:e.theme_border,p_card_layout:e.card_layout,p_list_layout:e.list_layout,p_attributes:e.attributes}));if(c)throw c;let l=Array.isArray(s)?s[0]:s;if(!l||typeof l.snapshot_public_id!=`string`)throw Error(n(`system.error.backupPublishFailed`));u({theme:r,cardLayout:e.card_layout,listLayout:e.list_layout,attributes:e.attributes,systemName:e.name,importDate:a,snapshotPublicId:l.snapshot_public_id}),await i.room.setMetadata({[uh.SNAPSHOT_PUBLIC_ID]:l.snapshot_public_id,[uh.SYSTEM_NAME]:e.name,[uh.IMPORT_DATE]:a}),ee(e.name),T(a),te(r),t(r.primary,r.offset,r.background,r.border,r.background_url),S(n(`system.success.backupRestored`,{name:e.name})),M.log(`System restored from backup:`,e.name)}catch(e){M.error(`Error restoring backup:`,e),y(n(`system.error.restoreBackup`))}finally{g(!1)}},Be=async()=>{g(!0),y(null),S(null);try{let e={primary:b.theme_primary,offset:b.theme_offset,background:b.theme_background,border:b.theme_border,background_url:b.background_url};u({theme:e,cardLayout:b.card_layout,listLayout:b.list_layout,attributes:b.attributes,systemName:b.name,importDate:null,snapshotPublicId:null}),await i.room.setMetadata({[uh.SNAPSHOT_PUBLIC_ID]:null,[uh.SYSTEM_NAME]:b.name,[uh.IMPORT_DATE]:null}),ee(b.name),T(null),te(e),t(e.primary,e.offset,e.background,e.border,e.background_url),S(n(`system.success.resetDefault`))}catch(e){y(n(`system.error.resetDefault`)),M.error(`Error resetting to default:`,e)}finally{g(!1)}},Ve=e=>e?new Date(e).toLocaleDateString(r,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):null,He=!d,Ue=!d;return(0,U.jsxs)(Yd.div,{variants:Lh,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,U.jsxs)(ym,{theme:e,children:[(0,U.jsx)(bm,{theme:e,children:n(`system.pageTitle`)}),(0,U.jsx)(hh,{theme:e,children:C}),w?(0,U.jsx)(gh,{theme:e,children:n(`system.importedOn`,{value:Ve(w)})}):(0,U.jsx)(gh,{theme:e,children:n(`system.usingDefaultSystem`)}),E&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(_h,{children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(vh,{color:E.primary,theme:e,children:E.primary}),(0,U.jsx)(yh,{theme:e,children:n(`system.swatch.primary`)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(vh,{color:E.offset,theme:e,children:E.offset}),(0,U.jsx)(yh,{theme:e,children:n(`system.swatch.offset`)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(vh,{color:E.background,theme:e,children:E.background}),(0,U.jsx)(yh,{theme:e,children:n(`system.swatch.background`)})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(vh,{color:E.border,theme:e,children:E.border}),(0,U.jsx)(yh,{theme:e,children:n(`system.swatch.border`)})]})]}),(0,U.jsxs)(bh,{theme:e,children:[(0,U.jsx)(xh,{theme:e,children:n(`system.settingsSectionTitle`)}),(0,U.jsxs)(Sh,{children:[(0,U.jsx)(Ch,{theme:e,children:n(`system.currentHp`)}),(0,U.jsxs)(wh,{theme:e,value:O,disabled:Ue,onChange:async e=>{if(Ue)return;let t=e.target.value;k(t),await De(j.HP_CURRENT_BID,t)},children:[(0,U.jsx)(`option`,{value:``,children:n(`system.selectAttribute`)}),ke.map(e=>(0,U.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?n(`system.resourceOptionSuffix`):``]},e.attr_bid))]})]}),(0,U.jsxs)(Sh,{children:[(0,U.jsx)(Ch,{theme:e,children:n(`system.maxHp`)}),(0,U.jsxs)(wh,{theme:e,value:re,disabled:Ue,onChange:async e=>{if(Ue)return;let t=e.target.value;A(t),await De(j.HP_MAX_BID,t)},children:[(0,U.jsx)(`option`,{value:``,children:n(`system.selectAttribute`)}),ke.map(e=>(0,U.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?n(`system.resourceOptionSuffix`):``]},e.attr_bid))]})]}),Ue&&(0,U.jsx)(gh,{theme:e,children:n(`system.premiumHpMappingLocked`)}),(0,U.jsxs)(Sh,{children:[(0,U.jsx)(Ch,{theme:e,children:n(`system.buffVisual`)}),(0,U.jsx)(wh,{theme:e,value:ie,onChange:async e=>{let t=e.target.value;if(ih(t)){ae(t),me(t),le(!0);try{await De(j.BUFF_VISUAL_PRESET,t)}finally{le(!1)}}},children:nh.map(e=>(0,U.jsx)(`option`,{value:e.value,children:we[e.value]},e.value))})]}),(0,U.jsxs)(Sh,{children:[(0,U.jsx)(Ch,{theme:e,children:n(`system.debuffVisual`)}),(0,U.jsx)(wh,{theme:e,value:oe,onChange:async e=>{let t=e.target.value;if(ah(t)){se(t),ge(t),de(!0);try{await De(j.DEBUFF_VISUAL_PRESET,t)}finally{de(!1)}}},children:rh.map(e=>(0,U.jsx)(`option`,{value:e.value,children:Te[e.value]},e.value))})]})]})]}),(0,U.jsxs)(mh,{theme:e,children:[(0,U.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0},children:n(`system.importSectionTitle`)}),(0,U.jsx)(`p`,{style:{color:o(e.PRIMARY,.8),fontSize:`14px`},children:n(He?`system.importLockedDescription`:`system.importDescription`)}),(0,U.jsx)(ph,{children:(0,U.jsx)(Cm,{theme:e,type:`text`,value:p,onChange:e=>m(e.target.value),placeholder:He?``:n(`system.shareIdPlaceholder`),disabled:h||He,onKeyPress:e=>e.key===`Enter`&&Ie()})}),(0,U.jsxs)(Dh,{children:[(0,U.jsx)(Sm,{theme:e,onClick:Ie,disabled:h||He||!p.trim(),children:n(h?`system.importButtonLoading`:`system.importButton`)}),(0,U.jsx)(Sm,{theme:e,variant:`secondary`,onClick:Be,disabled:h,children:n(`system.useDefaultButton`)})]})]}),v&&(0,U.jsxs)(Th,{theme:e,children:[(0,U.jsx)(`strong`,{children:n(`system.errorPrefix`)}),` `,v]}),x&&(0,U.jsxs)(Eh,{theme:e,children:[(0,U.jsx)(`strong`,{children:n(`system.successPrefix`)}),` `,x]}),_e.length>0&&(0,U.jsx)(kh,{children:(0,U.jsxs)(xm,{theme:e,children:[(0,U.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0,marginBottom:`15px`},children:n(`system.backupsSectionTitle`)}),(0,U.jsx)(Ah,{children:_e.map(t=>(0,U.jsxs)(jh,{theme:e,children:[(0,U.jsxs)(Mh,{children:[(0,U.jsx)(Nh,{theme:e,children:t.name}),(0,U.jsx)(Ph,{theme:e,children:n(`system.backedUpOn`,{value:Ve(t.backupDate)})})]}),(0,U.jsxs)(Fh,{children:[(0,U.jsx)(Ih,{theme:e,onClick:()=>F(t),disabled:h,title:n(`system.importBackupTitle`),children:(0,U.jsx)(pe,{size:18})}),(0,U.jsx)(Ih,{theme:e,$variant:`danger`,onClick:()=>Me(t.name),disabled:h,title:n(`system.deleteBackupTitle`),children:(0,U.jsx)(Xe,{size:18})})]})]},`${t.name}-${t.backupDate}`))})]})})]}),(0,U.jsx)(Am,{isOpen:ye,title:n(`system.confirmActionTitle`),onClose:Fe,actions:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Sm,{theme:e,variant:`secondary`,onClick:Fe,children:n(`system.cancel`)}),(0,U.jsx)(Sm,{theme:e,onClick:Pe,children:n(`system.confirm`)})]}),children:(0,U.jsx)(Oh,{theme:e,children:Se})})]},`system`)};function zh(e,t){let n=e.replace(`#`,``);n.length===3&&(n=n.split(``).map(e=>e+e).join(``));let r=parseInt(n,16);return`rgba(${r>>16&255}, ${r>>8&255}, ${r&255}, ${t})`}var Bh=class{static async CenterViewportOnImage(e){let t=await i.scene.grid.getDpi(),n=await i.viewport.getScale(),r=await i.viewport.getWidth(),a=await i.viewport.getHeight(),o={x:r/2,y:a/2},s={x:o.x/n,y:o.y/n},c=await this.GetImageCenter(e,t),l={x:c.x-s.x,y:c.y-s.y},u={x:l.x*n*-1,y:l.y*n*-1};await i.viewport.animateTo({position:u,scale:n})}static async GetImageCenter(e,t){if(C(e)){let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{x:e.position.x-a+r/2,y:e.position.y-o+i/2}}else if(n(e)&&e.points.length>0)return{x:e.points[0].x,y:e.points[0].y};else return{x:e.position.x,y:e.position.y}}};const Vh=`${A}/effects`;var Hh=`${A}/effects-expired`,Uh=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Wh=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Gh=y.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`,Kh=y.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
`,qh=y.div`
  flex: 0 0 120px;
  min-width: 120px;
  display: flex;
  align-items: flex-end;
`,Jh=y.label`
  color: ${e=>o(e.theme.PRIMARY,.75)};
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`,Yh=y.input`
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
`,Xh=y.select`
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
`,Zh=y(Xh)`
  min-width: 180px;
  height: 96px;
  padding-right: 8px;
`,Qh=y.button`
    background: ${e=>o(e.theme.OFFSET,.5)};
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
`,$h=y.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 240px;
  overflow-y: auto;
`,eg=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background: ${e=>o(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,tg=y.div`
  color: ${e=>o(e.theme.PRIMARY,.8)};
  font-size: 12px;
`,ng=y.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,rg=y.p`
  color: ${e=>o(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,ig=y.p`
  color: #ff6b6b;
  margin: 0;
  font-size: 12px;
`,ag=y.div`
  position: relative;
  display: inline-flex;
`,og=y.button`
  background: ${e=>e.$active?o(e.theme.OFFSET,.65):`rgba(0, 0, 0, 0.3)`};
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
`,sg=y.span`
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
`,cg=(e,t=`Unknown`)=>Array.isArray(e)?e.reduce((e,n)=>{if(!n||typeof n!=`object`)return e;let r=n,i=typeof r.name==`string`?r.name.trim():``,a=Number(r.remaining),o=Number.isFinite(a)?Math.max(0,Math.trunc(a)):0,s=r.durationType===`turns`?`turns`:`rounds`,c=r.endTiming===`end`?`end`:`start`,l=r.effectType===`buff`?`buff`:r.effectType===`debuff`?`debuff`:`neutral`,u=Array.isArray(r.targets)?Array.from(new Set(r.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!i||!o||e.push({id:typeof r.id==`string`&&r.id?r.id:crypto.randomUUID(),name:i,remaining:o,durationType:s,endTiming:c,effectType:l,targets:u,createdByName:typeof r.createdByName==`string`&&r.createdByName?r.createdByName:t,createdById:typeof r.createdById==`string`?r.createdById:void 0}),e},[]):[];const lg=({items:e,units:t,setItems:n,playerData:r})=>{let{t:a}=bt(),[o,s]=(0,V.useState)(null),[c,l]=(0,V.useState)(``),[u,d]=(0,V.useState)(`1`),[f,p]=(0,V.useState)(`rounds`),[m,h]=(0,V.useState)(`start`),[g,_]=(0,V.useState)(`neutral`),[v,y]=(0,V.useState)([]),[b,x]=(0,V.useState)(null),S=(0,V.useMemo)(()=>{let t=new Map;return e.forEach(e=>{e.metadata?.[T.ON_LIST]===!0&&t.set(e.id,cg(e.metadata?.[Vh],a(`effectsManager.unknownSource`)))}),t},[e,a]),C=e=>S.get(e)||[],ee=async(t,r)=>{let a=r.filter(e=>e.remaining>0);n(e.map(e=>{if(e.id!==t)return e;let n={...e.metadata||{}};return a.length>0?n[Vh]=a:delete n[Vh],{...e,metadata:n}})),await i.scene.items.updateItems([t],e=>{let t={...e[0].metadata||{}};a.length>0?t[Vh]=a:delete t[Vh],e[0].metadata=t})},w=async e=>{try{await i.broadcast.sendMessage(Hh,{message:e},{destination:`ALL`})}catch(t){M.error(`Failed to broadcast expired effect message`,t),await i.notification.show(e,`WARNING`)}},E=async e=>{if(e.length!==0)try{await i.broadcast.sendMessage(D.MARKCONNECT,e,{destination:`LOCAL`})}catch(e){M.error(`Failed to broadcast marked effect update`,e)}},te=async(t,n)=>{if(String(r?.role||``).toUpperCase()!==`GM`)return;let i=[],o=[],s=[];e.forEach(e=>{if(e.metadata?.[T.ON_LIST]!==!0)return;let r=cg(e.metadata?.[Vh],a(`effectsManager.unknownSource`));if(r.length===0)return;let c=!1,l=[];r.forEach(r=>{if(!(r.endTiming===t&&(r.durationType===`turns`||e.id===n))){l.push(r);return}let i=r.remaining-1;if(c=!0,i<=0){o.push(a(`effectsManager.expiredNotification`,{unit:e.name||a(`effectsManager.unitFallback`),effect:r.name})),s.push({LabelName:r.name,TokenId:e.id,Show:!1});return}l.push({...r,remaining:i})}),c&&i.push({unitId:e.id,effects:l})});for(let e of i)await ee(e.unitId,e.effects);if(await E(s),o.length>0)for(let e of o)await w(e)},ne=(0,V.useMemo)(()=>o&&t.find(e=>e.id===o)||null,[o,t]),O=(0,V.useMemo)(()=>o?C(o):[],[o,S]);return(0,V.useEffect)(()=>{let e=i.broadcast.onMessage(Hh,async e=>{let t=e.data?.message;typeof t!=`string`||!t.trim()||await i.notification.show(t,`WARNING`)});return()=>{e()}},[]),{effectsModalUnitId:o,selectedEffectsUnit:ne,activeEffectsForSelectedUnit:O,effectNameInput:c,setEffectNameInput:l,effectDurationInput:u,setEffectDurationInput:d,effectDurationType:f,setEffectDurationType:p,effectEndTiming:m,setEffectEndTiming:h,effectType:g,setEffectType:_,effectTargetIds:v,setEffectTargetIds:e=>{y(Array.from(new Set(e)))},effectsModalError:b,units:t,getEffectsForUnit:C,handleOpenEffectsModal:e=>{x(null),l(``),d(`1`),p(`rounds`),h(`start`),_(`neutral`),y([e]),s(e)},handleCloseEffectsModal:()=>{s(null),x(null)},handleAddEffect:async()=>{if(!o)return;let n=c.trim(),r=parseInt(u,10);if(!n){x(a(`effectsManager.error.enterName`));return}if(!Number.isFinite(r)||r<=0){x(a(`effectsManager.error.durationPositive`));return}let i=Array.from(new Set(v.filter(e=>t.some(t=>t.id===e))));if(i.length===0){x(a(`effectsManager.error.selectTarget`));return}let s=C(o),p=ne?.name||e.find(e=>e.id===o)?.name||a(`effectsManager.unknownSource`),h={id:crypto.randomUUID(),name:n,remaining:r,durationType:f,endTiming:m,effectType:g,targets:i,createdByName:p,createdById:o};await ee(o,[...s,h]),await E([{LabelName:h.name,TokenId:o,Show:!0}]),x(null),l(``),d(`1`),_(`neutral`),y([o])},handleDeleteEffect:async e=>{if(!o)return;let t=C(o),n=t.find(t=>t.id===e);await ee(o,t.filter(t=>t.id!==e)),n&&await E([{LabelName:n.name,TokenId:o,Show:!1}])},processEffectsForTurnEvent:te}},ug=({manager:e})=>{let{theme:t}=It(),{t:n}=bt(),r=(0,V.useMemo)(()=>{let t=new Map;return e.units.forEach(e=>{t.set(e.id,e.name)}),t},[e.units]),i=e=>n(e===`buff`?`effectsManager.type.buff`:e===`debuff`?`effectsManager.type.debuff`:`effectsManager.type.neutral`),a=e=>n(e===`turns`?`effectsManager.durationType.turns`:`effectsManager.durationType.rounds`),o=e=>n(e===`start`?`effectsManager.endTiming.start`:`effectsManager.endTiming.end`),s=e=>{if(e.length===0)return n(`effectsManager.targets.none`);let t=e.map(e=>r.get(e)).filter(e=>typeof e==`string`&&e.length>0);return t.length===0?n(`effectsManager.targets.count`,{count:e.length}):t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`};return(0,U.jsx)(Am,{isOpen:!!e.effectsModalUnitId,title:e.selectedEffectsUnit?n(`effectsManager.titleWithUnit`,{unit:e.selectedEffectsUnit.name}):n(`effectsManager.title`),onClose:e.handleCloseEffectsModal,minWidth:`520px`,maxWidth:`600px`,children:(0,U.jsxs)(Uh,{children:[(0,U.jsxs)(Wh,{children:[(0,U.jsxs)(Gh,{children:[(0,U.jsxs)(Kh,{style:{flex:`0 0 120px`},children:[(0,U.jsx)(Jh,{theme:t,children:n(`effectsManager.field.effect`)}),(0,U.jsx)(Yh,{theme:t,type:`text`,placeholder:n(`effectsManager.placeholder.name`),value:e.effectNameInput,onChange:t=>e.setEffectNameInput(t.target.value)})]}),(0,U.jsxs)(Kh,{style:{flex:`0 0 140px`},children:[(0,U.jsx)(Jh,{theme:t,children:n(`effectsManager.field.duration`)}),(0,U.jsx)(Yh,{theme:t,type:`number`,min:1,value:e.effectDurationInput,onChange:t=>e.setEffectDurationInput(t.target.value)})]}),(0,U.jsxs)(Kh,{style:{flex:`0 0 120px`},children:[(0,U.jsx)(Jh,{theme:t,children:n(`effectsManager.field.durationBy`)}),(0,U.jsxs)(Xh,{theme:t,value:e.effectDurationType,onChange:t=>e.setEffectDurationType(t.target.value),children:[(0,U.jsx)(`option`,{value:`turns`,children:n(`effectsManager.durationType.turns`)}),(0,U.jsx)(`option`,{value:`rounds`,children:n(`effectsManager.durationType.rounds`)})]})]})]}),(0,U.jsxs)(Gh,{children:[(0,U.jsxs)(Kh,{style:{flex:`0 0 120px`},children:[(0,U.jsx)(Jh,{theme:t,children:n(`effectsManager.field.type`)}),(0,U.jsxs)(Xh,{theme:t,value:e.effectType,onChange:t=>e.setEffectType(t.target.value),children:[(0,U.jsx)(`option`,{value:`neutral`,children:n(`effectsManager.type.neutral`)}),(0,U.jsx)(`option`,{value:`buff`,children:n(`effectsManager.type.buff`)}),(0,U.jsx)(`option`,{value:`debuff`,children:n(`effectsManager.type.debuff`)})]})]}),(0,U.jsxs)(Kh,{style:{flex:`0 0 140px`},children:[(0,U.jsx)(Jh,{theme:t,children:n(`effectsManager.field.endsAt`)}),(0,U.jsxs)(Xh,{theme:t,value:e.effectEndTiming,onChange:t=>e.setEffectEndTiming(t.target.value),children:[(0,U.jsx)(`option`,{value:`start`,children:n(`effectsManager.endTiming.start`)}),(0,U.jsx)(`option`,{value:`end`,children:n(`effectsManager.endTiming.end`)})]})]}),(0,U.jsx)(qh,{children:(0,U.jsx)(Qh,{theme:t,onClick:e.handleAddEffect,style:{width:`100%`},children:n(`effectsManager.add`)})})]})]}),(0,U.jsxs)(Kh,{children:[(0,U.jsx)(Jh,{theme:t,children:n(`effectsManager.field.targets`)}),(0,U.jsx)(Zh,{theme:t,multiple:!0,value:e.effectTargetIds,onChange:t=>{let n=Array.from(t.target.selectedOptions).map(e=>e.value);e.setEffectTargetIds(n)},children:e.units.map(e=>(0,U.jsx)(`option`,{value:e.id,children:e.name},e.id))})]}),e.effectsModalError&&(0,U.jsx)(ig,{theme:t,children:e.effectsModalError}),e.activeEffectsForSelectedUnit.length===0?(0,U.jsx)(rg,{theme:t,children:n(`effectsManager.empty`)}):(0,U.jsx)($h,{children:e.activeEffectsForSelectedUnit.map(r=>(0,U.jsxs)(eg,{theme:t,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(ng,{theme:t,children:r.name}),(0,U.jsx)(tg,{theme:t,children:n(`effectsManager.meta.summary`,{type:i(r.effectType),remaining:r.remaining,durationType:a(r.durationType),endTiming:o(r.endTiming),source:r.createdByName})}),(0,U.jsx)(tg,{theme:t,children:n(`effectsManager.targets.label`,{targets:s(r.targets)})})]}),(0,U.jsx)(Qh,{theme:t,onClick:()=>{e.handleDeleteEffect(r.id)},children:n(`effectsManager.delete`)})]},r.id))})]})})},dg=({activeEffectsCount:e,canInteract:t,onOpen:n,icon:r})=>{let{theme:i}=It();return(0,U.jsxs)(ag,{children:[(0,U.jsx)(og,{theme:i,$active:e>0,disabled:!t,onClick:()=>{t&&n()},children:r||(0,U.jsx)(oe,{})}),e>0&&(0,U.jsx)(sg,{theme:i,children:e>99?`99+`:e})]})};var fg=y.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,pg=y.input`
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
`;const mg=({theme:e,unit:t,canInteract:n,elevationDraftValue:r,onElevationDraftChange:i,onCommitElevationChange:a})=>(0,U.jsx)(fg,{theme:e,children:(0,U.jsx)(pg,{theme:e,type:`text`,inputMode:`decimal`,min:-999,max:999,step:1,value:r??String(t.elevation??0),readOnly:!n,onChange:n?e=>i(t.id,e.target.value):void 0,onBlur:n?e=>a(t.id,e.target.value):void 0,onKeyDown:e=>{n&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}})}),hg=({theme:e,canInteract:t,icon:n,activeEffectsCount:r,onOpen:i})=>(0,U.jsx)(fg,{theme:e,children:(0,U.jsx)(dg,{activeEffectsCount:r,canInteract:t,icon:n||(0,U.jsx)(oe,{}),onOpen:i})});var gg=`${A}/elevation-badge`,_g=`${A}/elevation-badge-owner`,vg=`${A}/elevation`,yg=200,bg=40,xg=60,Sg=120,Cg=24,wg=(e,t)=>{if(!e)return;if(e.startsWith(`#`))return zh(e,t);let n=e.match(/^rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\)$/i);if(n){let[,e,r,i]=n;return`rgba(${e}, ${r}, ${i}, ${t})`}let r=e.match(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i);if(r){let[,e,n,i]=r;return`rgba(${e}, ${n}, ${i}, ${t})`}return e},Tg=e=>`
    0 1px 1px ${o(e.BACKGROUND,.95)},
    0 0 2px ${o(e.BACKGROUND,.85)}
  `,Eg=/(\d+)d(\d+)([kd][hl]\d+|!)?/gi,Dg={anchor:gt,aperture:F,award:vt,"battery-charging":Ie,book:Je,calendar:rt,clock:dt,"cloud-lightning":R,drama:Ye,carrot:Ge,bone:Ke,compass:ct,"dollar-sign":Le,feather:lt,eye:ot,heart:Pe,moon:Ne,music:_e,shield:me,star:Ae,sun:oe,target:ye,users:Ce,wind:N,zap:ae,sword:yt,swords:Te,axe:pt,"bow-arrow":z,coins:Be,wand:xe,flower:Ue,skull:je,castle:He,cross:tt,"test-tube-diagonal":ge,squirrel:he,snowflake:ke,shell:ve,pickaxe:it,"heart-plus":we,"heart-crack":ie,fan:et},Og=y.div`
  padding: 2px;
  width: 100%;
`,kg=y.h1`
  color: ${e=>e.theme.PRIMARY};
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`,Ag=y.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
`,jg=y.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$compactMode?`end`:`center`};
  gap: ${e=>e.$compactMode?`8px`:`16px`};
  position: relative;
  padding: ${e=>e.$compactMode?`4px 8px`:`8px`};
  background-color: ${e=>o(e.theme.BACKGROUND,.75)};
  border-top: 2px solid ${e=>e.theme.BORDER};
`,Mg=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.$compactMode?`8px`:`16px`};
`,Ng=y.button`
  background: ${e=>e.disabled?o(e.theme.BORDER,.3):o(e.theme.OFFSET,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>Tg(e.theme)};
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
    background: ${e=>e.disabled?o(e.theme.BORDER,.3):e.theme.OFFSET};
  }
  
  &:active {
    transform: ${e=>e.disabled?`none`:`scale(0.95)`};
  }

  svg {
    filter: drop-shadow(0 1px 1px ${e=>o(e.theme.BACKGROUND,.95)})
      drop-shadow(0 0 2px ${e=>o(e.theme.BACKGROUND,.75)});
  }
`,Pg=y(Ng)`
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
    filter: drop-shadow(0 1px 1px ${e=>o(e.theme.BACKGROUND,.95)})
      drop-shadow(0 0 3px ${e=>o(e.theme.BACKGROUND,.8)});
  }
`,Fg=y(Ng)`
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
`,Ig=y(Ng)`
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
`,Lg=y.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: ${e=>e.$compactMode?`14px`:`16px`};
  font-weight: 600;
  min-width: ${e=>e.$compactMode?`44px`:`80px`};
  text-align: center;
`,Rg=y.table`
  width: ${e=>e.$compact?`max-content`:`100%`};
  min-width: ${e=>e.$compact?`${yg}px`:`100%`};
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
`,zg=y.thead`
  background-color: ${e=>o(e.theme.BACKGROUND,.5)};
`,Bg=y.tr``,Vg=y.th`
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
`,Hg=y.div`
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
  border: 1px solid ${e=>o(e.theme.BORDER,.9)};
  background: ${e=>o(e.theme.BACKGROUND,.96)};
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
  line-height: 1.3;
  text-align: left;
  box-shadow: 0 8px 24px ${e=>o(e.theme.BACKGROUND,.65)};
  backdrop-filter: blur(8px);

  &::after {
    content: '';
    position: absolute;
    left: clamp(12px, ${e=>`${e.$arrowX}px`}, calc(100% - 12px));
    ${e=>e.$placement===`top`?`top: 100%;`:`bottom: 100%;`}
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    ${e=>e.$placement===`top`?`border-top: 6px solid ${o(e.theme.BACKGROUND,.96)};`:`border-bottom: 6px solid ${o(e.theme.BACKGROUND,.96)};`}
  }
`,Ug=y.tbody``,Wg=y.tr`
  ${e=>e.$isCurrentTurn&&e.theme&&`
    background: linear-gradient(to left, ${o(e.theme.OFFSET,.4)} 0%, transparent 100%);
  `}
  cursor: context-menu;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &:not(:last-child) td {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`,Gg=y.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,Kg=y(Gg)`
  font-weight: 700;
  font-size: 18px;
  color: ${e=>e.theme.OFFSET};
  min-width: 60px;
`,qg=y(Gg)`
  min-width: 48px;
`,Jg=y.button`
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
`,Yg=y.img`
  width: 18px;
  height: 18px;
  pointer-events: none;
`,Xg=y.div`
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
`,Zg=y.input`
  background: ${e=>e.$isRollable?o(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.3)`};
  border: 1px solid ${e=>e.$isRollable?o(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?Tg(e.theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${o(e.theme.BACKGROUND,.28)}, 0 0 0 1px ${o(e.theme.OFFSET,.18)}`:`none`};
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
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${o(e.theme.OFFSET,.35)}, inset 0 0 0 1px ${o(e.theme.BACKGROUND,.35)}`:`none`};
  }
`,Qg=y(Gg)`
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
`,$g=y.input`
  background: ${e=>e.$isRollable?o(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.4)`};
  border: 1px solid ${e=>e.$isRollable?o(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?Tg(e.theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${o(e.theme.BACKGROUND,.28)}, 0 0 0 1px ${o(e.theme.OFFSET,.18)}`:`none`};
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
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${o(e.theme.OFFSET,.35)}, inset 0 0 0 1px ${o(e.theme.BACKGROUND,.35)}`:`none`};
  }
`,e_=y.select`
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
`,t_=y.span`
  margin: 0 2px;
  color: ${e=>e.theme.OFFSET};
  font-weight: 500;
`,n_=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,r_=y.button`
  background: ${e=>e.$active?o(e.theme.OFFSET,.65):`rgba(0, 0, 0, 0.3)`};
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
`,i_=y.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.BORDER};
  cursor: pointer;
  margin: 0 2px;
  background: ${e=>o(e.theme.BACKGROUND,.55)};
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
    box-shadow: ${e=>`0 0 0 2px ${o(e.theme.PRIMARY,.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,a_=y.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  min-width: 54px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.BORDER};
  background: ${e=>o(e.theme.PRIMARY,.75)};
  color: ${e=>o(e.theme.OFFSET,.96)};
  box-shadow: ${e=>`0 4px 14px ${o(e.theme.BACKGROUND,.65)}`};
  text-shadow: ${e=>`1px 1px 0 ${o(e.theme.BACKGROUND,.95)}`};
  padding: 4px 8px;
  font-size: 13px;
  font-weight: 700;
  font-style: italic;
  text-align: center;
`,o_=y.div`
  display: flex;
  flex-wrap: wrap;
  width: 62px;
  gap: 3px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,s_=y.button`
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
`,c_=y.button`
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
`,l_=y.div`
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
`,u_=y(Gg)`
  width: 24px;
  min-width: 24px;
  max-width: 24px;
  padding: 0;
  position: relative;
`,d_=y.div`
  position: absolute;
  inset: 0;
  min-height: 40px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0 10px;
`,f_=y.div`
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
            ${o(e.theme.BORDER,.2)},
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
`,p_=y.div`
  flex: 1;
  height: 100%;
  padding: 0 8px;
  margin: 0 -10px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`,m_=y.div`
  width: 6px;
  flex: 1;
  height: 100%;
  background-repeat: repeat-y;
  background-position: center;
  background-size: 6px 16px;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='16' viewBox='0 0 6 16' preserveAspectRatio='none'%3E%3Cpolyline points='3,0 0,4 6,8 0,12 3,16' fill='none' stroke='${encodeURIComponent(e.theme.BORDER)}' stroke-width='1.2'/%3E%3C/svg%3E")`};
`,h_=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
`,g_=y.button`
  width: 100%;
  text-align: left;
  background: ${e=>e.$isCurrent?o(e.theme.OFFSET,.45):o(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  padding: 8px 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>o(e.theme.OFFSET,.55)};
  }
`,__=y.p`
  color: ${e=>o(e.theme.PRIMARY,.8)};
  margin: 0 0 12px 0;
  font-size: 13px;
`,v_=y.p`
  color: #ff6b6b;
  margin: 10px 0 0 0;
  font-size: 13px;
`,y_=y.div`
  height: 1px;
  margin: 12px 0;
  background: ${e=>o(e.theme.BORDER,.7)};
`,b_=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>o(e.theme.BACKGROUND,.35)};
`,x_=y.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,S_=y.div`
  color: ${e=>o(e.theme.PRIMARY,.75)};
  font-size: 11px;
`,C_=y.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`,w_=y.button`
  width: 50px;
  height: 28px;
  padding: 0;
  position: relative;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 999px;
  background: ${e=>e.$active?o(e.theme.OFFSET,.55):o(e.theme.BACKGROUND,.45)};
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
    background: ${e=>e.$active?o(e.theme.OFFSET,.7):o(e.theme.OFFSET,.45)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,T_=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,E_=y.p`
  color: ${e=>o(e.theme.PRIMARY,.78)};
  margin: 0;
  font-size: 12px;
`,D_=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 320px;
  overflow-y: auto;
`,O_=y.div`
  background: ${e=>o(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,k_=y.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,A_=y.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #4b5563;
  background: rgba(0, 0, 0, 0.2);
  accent-color: #ffffff;
  margin: 0;
  pointer-events: none;
`,j_=y.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
`,M_=y.div`
  color: ${e=>o(e.theme.PRIMARY,.85)};
  font-size: 12px;
  font-style: italic;
  line-height: 1.25;
  white-space: pre-wrap;
`,N_=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`,P_=y.button`
  border: 1px solid ${e=>o(e.theme.OFFSET,.7)};
  border-radius: 999px;
  background: ${e=>o(e.theme.OFFSET,.35)};
  color: ${e=>e.theme.PRIMARY};
  font-size: 11px;
  padding: 2px 8px;
  cursor: pointer;

  &:hover {
    background: ${e=>o(e.theme.OFFSET,.55)};
  }
`,F_=y.p`
  color: ${e=>o(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,I_=y.div`
  width: 100%;
  min-height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>o(e.theme.BORDER,.8)};
  background: ${e=>o(e.theme.BACKGROUND,.55)};
`,L_=y.div`
  width: ${e=>e.$small?`40px`:`60px`};
  min-width: ${e=>e.$small?`40px`:`60px`};
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>o(e.theme.BORDER,.8)};
  background: ${e=>o(e.theme.BACKGROUND,.55)};
`,R_=(e,t,n)=>{let r=[{id:crypto.randomUUID(),type:`initiative`,description:n(`initiative.defaultInitiativeDescription`)},{id:crypto.randomUUID(),type:`name`,description:n(`initiative.defaultNameDescription`)}],i=t?[{id:`card-column`,type:`card-column`}]:[];if(!e||e.length===0)return[...r,...i];let a=[...e].sort((e,t)=>e.col-t.col).map(e=>({id:e.id,type:e.type,name:e.styles?.labelName,useIcon:e.styles?.labelMode===`icon`,iconType:e.styles?.labelIcon,description:e.styles?.description,styles:e.styles}));return[...r,...a,...i]};const z_=()=>{let{t:e}=bt(),{theme:t}=It(),{listLayout:n,attributes:r,isLoading:a}=Mm(),o=H(e=>e.roomMetadata),s=H(e=>e.sceneMetadata),c=H(e=>e.items),l=H(e=>e.partyData),u=H(e=>e.playerData),d=H(e=>e.gridDpi),f=H(e=>e.setItems),[p,m]=(0,V.useState)([]),[h,g]=(0,V.useState)([]),[_,v]=(0,V.useState)(null),[y,b]=(0,V.useState)(1),[x,S]=(0,V.useState)(new Set),[w,te]=(0,V.useState)(null),[ne,O]=(0,V.useState)(null),[k,ie]=(0,V.useState)(!1),[ae,se]=(0,V.useState)(!1),[ce,le]=(0,V.useState)(!1),[ue,de]=(0,V.useState)({}),[fe,pe]=(0,V.useState)({}),[me,he]=(0,V.useState)({}),[ge,_e]=(0,V.useState)(null),[ve,ye]=(0,V.useState)({}),[N,be]=(0,V.useState)(null),[xe,we]=(0,V.useState)(null),[Te,Ee]=(0,V.useState)(!1),[P,De]=(0,V.useState)(!1),[Oe,ke]=(0,V.useState)(!1),[Ae,je]=(0,V.useState)(()=>window.innerWidth<400),[Me,Ne]=(0,V.useState)(null),Pe=(0,V.useRef)(null),Fe=(0,V.useRef)({}),Ie=(0,V.useRef)({}),Le=(0,V.useRef)(null);(0,V.useEffect)(()=>{let e=()=>{je(window.innerWidth<400)};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let Re=(0,V.useMemo)(()=>{let e=Array.isArray(u?.selection)?u.selection:[];return new Set(e)},[u?.selection]),F=o,Be=F[D.EXTENSIONID+`/enabdice`]===!0,Ve=F[j.REVERSE_INITIATIVE]||!1,He=F[j.POPCORN_INITIATIVE]||!1,Ue=F[j.SHOW_CARD_ACCESS]||!1,We=F[j.SHOW_NON_PARTY_UNITS]||!1,Ge=F[j.SHOW_LIST_HP_NUMBERS],Ke=typeof Ge==`boolean`?Ge:!0,qe=F[j.DICE_RANGE]||``,Je=F[j.INITIATIVE_MODIFIER_BID]||``,Ye=F[j.INITIATIVE_MODIFIER_EXPR]||`@STAT`,Xe=Ye.trim().length>0?Ye:`@STAT`,Ze=F[j.SHOW_OWNER_ONLY_EDIT]||!1,I=String(u?.role||``).toUpperCase()===`GM`,L=u?.id||``,Qe=E(j.INITIATIVE_LIST_COMPACT,L);(0,V.useEffect)(()=>{let e=F[Qe],t=F[j.INITIATIVE_LIST_COMPACT];ke(typeof e==`boolean`?e:typeof t==`boolean`?t:!1)},[F,Qe]);let R=async()=>{let e=!Oe;ke(e);try{await i.room.setMetadata({[Qe]:e})}catch(t){M.error(`Failed to persist initiative list compact mode`,t),ke(!e)}},$e=async({notation:e,actionName:t,tokenName:n,senderId:r,senderColor:i})=>{try{await Se({notation:e,actionName:t,senderName:n,senderId:r,senderColor:i},F)}catch(t){M.error(`Failed to send dice roll from InitiativeList`,e,t),M.log(e)}},z=e=>{let t=e;if(typeof t==`string`)try{t=JSON.parse(t)}catch{return[]}return Array.isArray(t)?t.map((e,t)=>{let n=e&&typeof e==`object`?e:{},r=n.inUse,i=typeof r==`boolean`?r:typeof r==`string`?[`true`,`1`,`yes`].includes(r.trim().toLowerCase()):typeof r==`number`?r===1:void 0;return{id:typeof n.id==`string`&&n.id?n.id:`entry-${t}`,name:typeof n.name==`string`?n.name:``,description:typeof n.description==`string`?n.description:``,...i===void 0?{}:{inUse:i}}}):[]};(0,V.useEffect)(()=>{m(c.filter(e=>e.metadata?.[T.ON_LIST]===!0).map(e=>{let t=e.metadata?.[T.INITIATIVE]||0,n=e.metadata[T.UNIT_NAME]||e.name||`Unknown`,r=e.metadata?.[T.BOSS_MODE]===!0,i=e.metadata?.[vg]||0,a=l.find(t=>t.id===e.createdUserId)||(u?.id===e.createdUserId?u:void 0),o=String(a?.role||``).toUpperCase()===`GM`,s=a?.color||(u?.id===e.createdUserId?u?.color:void 0),c=o?void 0:wg(s,1),d={};return Object.keys(e.metadata||{}).forEach(t=>{t.startsWith(`com.battle-system.forge`)&&(d[t]=e.metadata?.[t])}),{id:e.id,initiative:t,name:n,isBoss:r,elevation:i,attributes:d,createdUserId:e.createdUserId,ownerNameOutlineColor:c,isInParty:e.metadata?.[T.IN_PARTY]===!0,isVisible:e.visible!==!1}}))},[c,l,u]);let B=(0,V.useMemo)(()=>He?[...p].sort((e,t)=>e.name.localeCompare(t.name)):[...p].sort((e,t)=>e.initiative===t.initiative?e.name.localeCompare(t.name):Ve?e.initiative-t.initiative:t.initiative-e.initiative),[p,Ve,He]),et=lg({items:c,units:B,setItems:f,playerData:u}),tt=(0,V.useMemo)(()=>{let e=new Map;return l.forEach(t=>{e.set(t.id,t)}),u&&!e.has(u.id)&&e.set(u.id,u),Array.from(e.values()).sort((e,t)=>e.name.localeCompare(t.name))},[l,u]),nt=(e,t)=>{let n=parseInt(t)||0;m(t=>t.map(t=>t.id===e?{...t,initiative:n}:t))},rt=(e,t)=>{f(c.map(n=>n.id===e?{...n,metadata:{...n.metadata,[T.INITIATIVE]:t}}:n)),i.scene.items.updateItems([e],e=>{e[0].metadata[T.INITIATIVE]=t})},it=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},at=(e,t,n)=>(typeof t==`number`&&(e=Math.max(t,e)),typeof n==`number`&&(e=Math.min(n,e)),e),ot=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(r.length===0)return at(0,i,a);let o=r.match(/^([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),s=r.match(/^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),c=null;if(o){let e=o[1],n=parseFloat(o[2]);switch(e){case`+`:c=t+n;break;case`-`:c=t-n;break;case`*`:c=t*n;break;case`/`:c=n===0?t:t/n;break}}else if(s){let e=parseFloat(s[1]),t=s[2],n=parseFloat(s[3]);switch(t){case`+`:c=e+n;break;case`-`:c=e-n;break;case`*`:c=e*n;break;case`/`:c=n===0?e:e/n;break}}else{let e=parseFloat(r);Number.isNaN(e)||(c=e)}return at(c===null||!Number.isFinite(c)?t:Math.trunc(c),i,a)},ct=e=>{let t=0;if(Je){let n=p.find(t=>t.id===e);if(n){let e=n.attributes?.[`${A}/${Je}`],r=Number(e),i=Number.isFinite(r)?r:0,a=ze(Xe.replace(/@STAT/gi,`@${Je}`).replace(/\bx\b/gi,`@${Je}`),{bidValueMap:{[Je]:i},onMissingBid:`useZero`});if(a.valid&&a.notation){let e=Number(a.notation);Number.isFinite(e)&&(t=Math.trunc(e))}}}return t},lt=(e,t=`normal`)=>{let n=it(qe),r=Math.floor(Math.random()*n)+1,i=t===`normal`?null:Math.floor(Math.random()*n)+1,a=(i===null?r:t===`advantage`?Math.max(r,i):Math.min(r,i))+ct(e);nt(e,String(a)),rt(e,a)},ut=(e,t)=>{de(n=>({...n,[e]:t}))},dt=(e,t)=>{let n=ot(t,p.find(t=>t.id===e)?.initiative??0);de(t=>{let{[e]:n,...r}=t;return r}),m(t=>t.map(t=>t.id===e?{...t,initiative:n}:t)),rt(e,n)},ft=e=>`ELE${e.slice(3)}`,pt=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o}},mt=async(e,t)=>{let n=ft(e);try{await i.scene.items.deleteItems([n])}catch{}if(t===0)return;let r=c.find(t=>t.id===e);if(!r||!C(r))return;let a=pt(r,d),o=`${t>0?`🡹`:`🡻`}${Math.abs(t)}`,s=ee().id(n).name(`Elevation Badge`).plainText(o).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(36).fontFamily(`Segoe UI`).textAlign(`CENTER`).position({x:a.minX-40,y:a.minY}).metadata({[gg]:!0,[_g]:e}).attachedTo(e).visible(r.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build();try{await i.scene.items.addItems([s])}catch(t){M.error(`Failed to add elevation badge`,e,t)}},ht=(e,t)=>{pe(n=>({...n,[e]:t}))},gt=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(!r)return at(0,i,a);let o=parseFloat(r);return at(Number.isFinite(o)?Math.trunc(o):t,i,a)},_t=(e,t)=>{let n=gt(t,p.find(t=>t.id===e)?.elevation??0,{min:-999,max:999});pe(t=>{let{[e]:n,...r}=t;return r}),m(t=>t.map(t=>t.id===e?{...t,elevation:n}:t)),f(c.map(t=>t.id===e?{...t,metadata:{...t.metadata,[vg]:n}}:t)),i.scene.items.updateItems([e],e=>{e[0].metadata[vg]=n}),mt(e,n)},vt=(e,t)=>{let n=e.trim();if(!n)return e;let r=/^([+\-*/])\s*-?\d+(?:\.\d+)?$/.test(n),i=/^-?\d+(?:\.\d+)?\s*[+\-*/]\s*-?\d+(?:\.\d+)?$/.test(n),a=/^-?\d+(?:\.\d+)?$/.test(n);if(!r&&!i&&!a)return e;let o=typeof t==`number`?t:parseFloat(String(t)),s=Number.isFinite(o)?o:0;return String(ot(n,s))},yt=(e,t,n)=>{let r=`${A}/${t}`,a=c.find(t=>t.id===e)?.metadata?.[r],o=vt(n,a);m(t=>t.map(t=>t.id===e?{...t,attributes:{...t.attributes,[r]:o}}:t)),f(c.map(t=>t.id===e?{...t,metadata:{...t.metadata,[r]:o}}:t)),i.scene.items.updateItems([e],e=>{e[0].metadata[r]=o})},xt=e=>String(e?.attr_bid??e?.bid??``).trim(),St=e=>String(e?.attr_name??e?.name??``).trim(),Ct=e=>String(e?.attr_abbr??e?.abbr??``).trim(),wt=e=>String(e?.attr_type??e?.type??``).trim().toLowerCase(),Tt=e=>{let t=e?.attr_func??e?.func??``;return typeof t==`string`?t.trim():``},Et=e=>e?.attr_meta??e?.meta??{},Dt=e=>r.find(t=>xt(t)===e)||null,Ot=e=>Tt(Dt(e)).length>0,kt=e=>st(r,t=>e.attributes?.[`${A}/${t}`],xt,wt,Tt,St,Ct),At=(e,t)=>{let n=Array.from(e.matchAll(Eg));if(n.length!==1)return null;let r=n[0],i=r[0]||``,a=r[1]||``,o=r[2]||``,s=r[3]||``,c=r.index;if(!i||!a||!o||typeof c!=`number`)return null;let l=Number(a);if(!Number.isFinite(l)||l!==1||s)return null;let u=`2d${o}${t===`advantage`?`kh1`:`kl1`}`;return`${e.slice(0,c)}${u}${e.slice(c+i.length)}`},jt=(e,t)=>{let n=Tt(Dt(t));if(n.length===0)return null;let r=kt(e),i=ze(n,{bidValueMap:r.bidValueMap,nameValueMap:r.nameValueMap,onMissingBid:`error`});return!i.valid||!i.notation?(M.warn(`Could not resolve notation for initiative list value-column`,{unitId:e.id,bid:t,error:i.error}),null):{notation:i.notation,actionName:St(Dt(t))||t}},Mt=(e,t)=>{let n=Dt(t),r=Et(n)?.derived?.formula,i=typeof r==`string`&&r.trim().length>0?r:Tt(n);if(typeof i!=`string`||i.trim().length===0)return`-`;let a=kt(e),o=ze(i,{bidValueMap:a.bidValueMap,nameValueMap:a.nameValueMap,onMissingBid:`error`});if(!o.valid||!o.notation)return M.warn(`Could not resolve derived formula for initiative list derived-column`,{unitId:e.id,bid:t,error:o.error}),`-`;let s=o.notation.trim(),c=Number(s);if(!Number.isFinite(c))return s||`-`;let l=Number(Et(n)?.derived?.precision),u=Number.isFinite(l)?Math.max(0,Math.min(Math.trunc(l),8)):0,d=Et(n)?.derived?.displayMode,f=u>0?c.toFixed(u):String(c);return d===`percent`?`${f}%`:f},Nt=async(e,t)=>{let n=jt(e,t);if(!n)return;let r=l.find(t=>t.id===e.createdUserId);await $e({notation:n.notation,actionName:n.actionName,tokenName:e.name,senderId:e.createdUserId||u?.id||`unknown`,senderColor:r?.color||u?.color||`#ffffff`})},Pt=async(t,n,r)=>{let i=jt(t,n);if(!i)return;let a=r===`normal`?i.notation:At(i.notation,r);if(!a)return;let o=l.find(e=>e.id===t.createdUserId),s=r===`normal`?``:e(r===`advantage`?`initiative.modeSuffixAdvantage`:`initiative.modeSuffixDisadvantage`);await $e({notation:a,actionName:`${i.actionName}${s}`,tokenName:t.name,senderId:t.createdUserId||u?.id||`unknown`,senderColor:o?.color||u?.color||`#ffffff`})},Ft=async(t,n)=>{let r=n===`normal`?t.notation:At(t.notation,n);if(!r)return;let i=n===`normal`?``:e(n===`advantage`?`initiative.modeSuffixAdvantage`:`initiative.modeSuffixDisadvantage`);await $e({notation:r,actionName:`${t.actionName}${i}`,tokenName:t.tokenName,senderId:t.senderId,senderColor:t.senderColor})};(0,V.useEffect)(()=>()=>{Object.values(Fe.current).forEach(e=>{window.clearTimeout(e)})},[]),(0,V.useEffect)(()=>{if(!N&&!xe)return;let e=e=>{e.key===`Escape`&&(be(null),we(null))};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[N,xe]);let Lt=(e,t)=>`value-column:${e}:${t}`,Rt=(e,t)=>`${e}:${t}`,zt=e=>!!ve[e],Bt=(e,t)=>{ye(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},Vt=e=>{be(e)},Ht=()=>{be(null)},Ut=()=>{we(null)},Wt=e=>{ye(t=>{let{[e]:n,...r}=t;return r})},Gt=(e,t)=>{let n=Fe.current[e];n&&window.clearTimeout(n),Fe.current[e]=window.setTimeout(()=>{Ie.current[e]=!0,Bt(e,t),delete Fe.current[e]},500)},Kt=e=>{let t=Fe.current[e];t&&(window.clearTimeout(t),delete Fe.current[e])},qt=e=>Ie.current[e]?(delete Ie.current[e],!0):!1,Jt=e=>{if(!Ze||I)return!0;let t=u?.id;return t?e.createdUserId===t:!1},Yt=e=>I?!0:e.isVisible,Xt=e=>I||We?!1:!e.isInParty;(0,V.useEffect)(()=>{a||g(R_(n,Ue,e))},[n,a,Ue]),(0,V.useEffect)(()=>{let e=s[j.CURRENT_TURN],t=s[j.CURRENT_ROUND];e?v(e):B.length>0&&v(B[0].id),t&&b(t)},[s,B]);let Zt=async()=>{if(B.length===0)return;_&&await et.processEffectsForTurnEvent(`end`,_);let e=B.findIndex(e=>e.id===_)+1;if(e>=B.length){let e=y+1;b(e),v(B[0].id),await i.scene.setMetadata({[j.CURRENT_TURN]:B[0].id,[j.CURRENT_ROUND]:e}),await et.processEffectsForTurnEvent(`start`,B[0].id)}else v(B[e].id),await i.scene.setMetadata({[j.CURRENT_TURN]:B[e].id}),await et.processEffectsForTurnEvent(`start`,B[e].id)},Qt=async()=>{if(B.length===0)return;let e=B.findIndex(e=>e.id===_)-1;if(e<0){let e=Math.max(1,y-1);b(e),v(B[B.length-1].id),await i.scene.setMetadata({[j.CURRENT_TURN]:B[B.length-1].id,[j.CURRENT_ROUND]:e})}else v(B[e].id),await i.scene.setMetadata({[j.CURRENT_TURN]:B[e].id})},$t=async e=>{He&&(x.has(e)||(v(e),await i.scene.setMetadata({[j.CURRENT_TURN]:e}),await et.processEffectsForTurnEvent(`start`,e)))},en=async()=>{_&&(await et.processEffectsForTurnEvent(`end`,_),S(e=>new Set([...e,_])),x.size+1,B.length)},tn=async()=>{let e=y+1;b(e),S(new Set),v(null),await i.scene.setMetadata({[j.CURRENT_TURN]:null,[j.CURRENT_ROUND]:e})},nn=async e=>{De(!0);try{if(e===`clear-list`){let e=c.filter(e=>e.metadata?.[T.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await i.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata&&T.ON_LIST in e.metadata&&delete e.metadata[T.ON_LIST]})}),f(c.map(e=>{if(e.metadata?.[T.ON_LIST]!==!0)return e;let t={...e.metadata||{}};return delete t[T.ON_LIST],{...e,metadata:t}})))}if(e===`reset-initiative`){let e=c.filter(e=>e.metadata?.[T.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await i.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata[T.INITIATIVE]=0})}),f(c.map(e=>e.metadata?.[T.ON_LIST]===!0?{...e,metadata:{...e.metadata||{},[T.INITIATIVE]:0}}:e)),m(e=>e.map(e=>c.some(t=>t.id===e.id&&t.metadata?.[T.ON_LIST]===!0)?{...e,initiative:0}:e)),de({}))}let t=e===`clear-list`?null:e===`reset-initiative`?[...B].sort((e,t)=>e.name.localeCompare(t.name))[0]?.id??null:B[0]?.id??null;b(1),v(t),S(new Set),await i.scene.setMetadata({[j.CURRENT_TURN]:t,[j.CURRENT_ROUND]:1}),Ee(!1)}catch(t){M.error(`Failed to reset encounter state`,{mode:e,error:t})}finally{De(!1)}},rn=async e=>{let t=c.find(t=>t.id===e);if(t)try{await Bh.CenterViewportOnImage(t)}catch(t){M.error(`Failed to center viewport on unit`,e,t)}},an=async(e,t)=>{try{let n=await i.viewport.getHeight(),r=n>800?700:n-100;await i.popover.open({id:D.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(t)}`,height:r,width:350,anchorElementId:e,hidePaper:!0,disableClickAway:!0})}catch(e){M.error(`Failed to open cards popover`,e)}},on=(e,t)=>{e.preventDefault(),e.stopPropagation(),O(null),te(t)},sn=async t=>{if(w){if(!c.find(e=>e.id===w)){O(e(`initiative.tokenNotFoundInCache`));return}ie(!0),O(null);try{await i.scene.items.updateItems([w],e=>{let n=e[0];n.createdUserId=t}),f(c.map(e=>e.id===w?{...e,createdUserId:t}:e)),te(null)}catch(n){M.error(`Failed to reassign token owner`,w,t,n),O(e(`initiative.assignOwnerPermissionError`))}finally{ie(!1)}}},cn=async()=>{if(!w)return;let t=c.find(e=>e.id===w);if(!t){O(e(`initiative.tokenNotFoundInCache`));return}let n=t.metadata?.[T.BOSS_MODE]!==!0;if(n&&c.filter(e=>e.id!==w&&e.metadata?.[T.ON_LIST]===!0&&e.metadata?.[T.BOSS_MODE]===!0).length>=2){O(e(`initiative.maxBossesError`));return}se(!0),O(null);try{await i.scene.items.updateItems([w],e=>{let t={...e[0].metadata||{}};t[T.BOSS_MODE]=n,e[0].metadata=t}),f(c.map(e=>e.id===w?{...e,metadata:{...e.metadata||{},[T.BOSS_MODE]:n}}:e))}catch(t){M.error(`Failed to toggle boss mode`,w,t),O(e(`initiative.updateBossModeError`))}finally{se(!1)}},ln=async()=>{if(w){if(!c.find(e=>e.id===w)){O(e(`initiative.tokenNotFoundInCache`));return}le(!0),O(null);try{await i.scene.items.updateItems([w],e=>{let t={...e[0].metadata||{}};T.ON_LIST in t&&delete t[T.ON_LIST],e[0].metadata=t}),f(c.map(e=>{if(e.id!==w)return e;let t={...e.metadata||{}};return delete t[T.ON_LIST],{...e,metadata:t}})),te(null)}catch(t){M.error(`Failed to remove token from initiative list`,w,t),O(e(`initiative.removeUnitError`))}finally{le(!1)}}},un=(0,V.useMemo)(()=>w&&B.find(e=>e.id===w)||null,[w,B]),dn=(0,V.useMemo)(()=>w&&c.find(e=>e.id===w)||null,[w,c]),fn=dn?.metadata?.[T.BOSS_MODE]===!0,W=(0,V.useMemo)(()=>ge&&B.find(e=>e.id===ge.unitId)||null,[ge,B]),pn=(0,V.useMemo)(()=>ge&&r.find(e=>e.attr_bid===ge.bid)||null,[r,ge]),mn=(0,V.useMemo)(()=>{if(!ge||!W)return[];let e=W.attributes[`${A}/${ge.bid}`];return z(e)},[ge,W]),hn=(0,V.useMemo)(()=>mn.some(e=>typeof e.inUse==`boolean`),[mn]),gn=(0,V.useMemo)(()=>N&&B.find(e=>e.id===N.unitId)||null,[N,B]),_n=(0,V.useMemo)(()=>Oe?h.filter(e=>e.type===`initiative`||e.type===`name`?!0:e.type===`card-column`&&Ue):h,[Oe,h,Ue]),vn=(0,V.useMemo)(()=>re(F,r),[r,F]),yn=(0,V.useMemo)(()=>B.filter(e=>Yt(e)),[B,I]),bn=(0,V.useMemo)(()=>{if(!W)return{};let e={};for(let t of r){let n=`${A}/${t.attr_bid}`,r=W.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(e[t.attr_bid]=i)}return e},[W,r]),xn=(0,V.useMemo)(()=>{if(!W)return{};let e={};for(let t of r){let n=`${A}/${t.attr_bid}`,r=W.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(t.attr_name&&(e[t.attr_name]=i),t.attr_abbr&&(e[t.attr_abbr]=i))}return e},[W,r]),Sn=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=(e[1]||``).trim();if(!n)continue;let r=ze(Be?n.replace(/(\d+d\d+(?:[kd][hl]\d+|!|\{[^{}]+\})?)\s+#[a-z0-9_]+/gi,`$1`):n,{bidValueMap:bn,nameValueMap:xn,onMissingBid:`error`,allowCurlyTags:Be});!r.valid||!r.notation||t.push(Be?n:r.notation)}return t};(0,V.useEffect)(()=>{Le.current&&_n.length>0&&(M.debug(`Adjusting window width based on table size`),setTimeout(()=>{if(Le.current){let e=Le.current.offsetWidth+4,t=Math.min(e,800);i.action.setWidth(t),M.log(`Adjusted window width to `+t)}},100))},[Oe,_n.length,B.length]);let Cn=e=>{if(!e)return null;let t=Dg[e.toLowerCase()];return t?(0,U.jsx)(t,{}):null},wn=(e,t)=>{let n=window.innerWidth-t-8,r=Math.min(Math.max(e-t/2,8),Math.max(8,n));return{left:r,arrowX:e-r}},Tn=e=>{let t=e.currentTarget.getBoundingClientRect(),n=`clientX`in e?e.clientX:t.left+t.width/2,r=t.top>72?`top`:`bottom`;return{anchorX:n,y:r===`top`?t.top:t.bottom,placement:r}},En=(e,t)=>{let n=Tn(e),r=Math.min(320,Math.max(140,t.length*7+28)),i=wn(n.anchorX,r);Ne({text:t,...n,...i})},Dn=()=>{Ne(null)};(0,V.useLayoutEffect)(()=>{if(!Me||!Pe.current)return;let e=Pe.current.getBoundingClientRect().width,t=wn(Me.anchorX,e);(Math.abs(t.left-Me.left)>.5||Math.abs(t.arrowX-Me.arrowX)>.5)&&Ne(e=>e&&{...e,...t})},[Me]);let On=t=>t.type===`initiative`?(0,U.jsx)(Ce,{}):t.type===`roller`?null:t.type===`name`?e(`initiative.nameHeader`):t.type===`card-column`?(0,U.jsx)(af,{}):t.type===`divider-column`?null:t.useIcon?Cn(t.iconType||`star`):t.name||t.type,kn=e=>e.type===`divider-column`?{fixedWidth:Cg}:e.type===`initiative`?{minWidth:xg}:e.type===`name`?{minWidth:Sg}:{minWidth:bg},An=(n,a)=>{let o=Jt(a),s=Xt(a),l=!I&&!Ke;if(s&&n.type!==`initiative`&&n.type!==`name`&&n.type!==`divider-column`)return(0,U.jsx)(Gg,{theme:t,children:(0,U.jsx)(I_,{theme:t})});switch(n.type){case`initiative`:if(He)return(0,U.jsx)(Kg,{theme:t,children:(0,U.jsx)(Xg,{onClick:e=>{e.stopPropagation(),o&&(x.has(a.id)||(a.id===_?en():$t(a.id)))},children:x.has(a.id)?(0,U.jsx)(nf,{color:t.OFFSET}):a.id===_?(0,U.jsx)(tf,{color:t.PRIMARY}):(0,U.jsx)(rf,{color:t.BORDER})})});let s=`initiative:${a.id}`,u=zt(s);return(0,U.jsx)(Kg,{theme:t,children:(0,U.jsx)(Zg,{theme:t,$isRollable:o&&!u,type:`text`,inputMode:`decimal`,value:ue[a.id]??String(a.initiative),readOnly:!o||!u,onChange:!o||!u?void 0:e=>ut(a.id,e.target.value),onBlur:!o||!u?void 0:e=>{dt(a.id,e.target.value),Wt(s)},onClick:()=>{o&&(u||qt(s)||lt(a.id))},onContextMenu:e=>{o&&(e.preventDefault(),Vt({kind:`initiative`,fieldKey:s,unitId:a.id,input:e.currentTarget}))},onTouchStart:e=>{o&&(u||Gt(s,e.currentTarget))},onTouchEnd:()=>{Kt(s)},onTouchCancel:()=>{Kt(s)},onKeyDown:e=>{if(o){if(!u&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),lt(a.id);return}u&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})});case`name`:let d=Re.has(a.id);return(0,U.jsx)(Qg,{theme:t,title:e(`initiative.rightClickAssignOwner`),$outlineColor:a.ownerNameOutlineColor,$isSelected:d,onDoubleClick:()=>rn(a.id),onContextMenu:o?e=>on(e,a.id):void 0,children:a.isBoss?`💀 ${a.name}`:a.name});case`roller`:return(0,U.jsx)(qg,{theme:t,children:(0,U.jsx)(Jg,{theme:t,disabled:!o,onClick:e=>{e.stopPropagation(),o&&lt(a.id)},title:e(`initiative.rollInitiativeTitle`,{max:it(qe)}),children:(0,U.jsx)(Yg,{src:`/dice.svg`,alt:e(`initiative.rollIconAlt`)})})});case`card-column`:return(0,U.jsx)(Gg,{theme:t,children:(0,U.jsx)(r_,{id:`card-access-${a.id}`,theme:t,disabled:!o,onClick:e=>{e.stopPropagation(),o&&an(e.currentTarget.id,a.id)},title:e(`initiative.openCardTitle`,{unit:a.name}),children:(0,U.jsx)(tf,{})})});case`value-column`:return(0,U.jsx)(Gg,{theme:t,children:(0,U.jsx)(n_,{children:n.styles?.bidList?.map((e,r)=>{let i=Ot(e),s=Lt(a.id,e),c=Rt(a.id,e),u=i&&zt(s),d=a.attributes[`${A}/${e}`],f=me[c]??(d==null||d===``?`0`:String(d)),p=e===vn.currentHpBid||e===vn.maxHpBid,m=!!L&&a.createdUserId===L,h=l&&p&&!m;return(0,U.jsxs)(V.Fragment,{children:[r>0&&(0,U.jsx)(t_,{theme:t,children:n.styles?.dividers?.[r-1]||`/`}),h?(0,U.jsx)(L_,{theme:t,$small:n.styles?.bidList&&n.styles.bidList.length>2}):(0,U.jsx)($g,{theme:t,$isRollable:o&&i,value:f,$small:n.styles?.bidList&&n.styles.bidList.length>2,readOnly:!o||i&&!u,onChange:!o||i&&!u?void 0:e=>{let t=e.target.value;he(e=>({...e,[c]:t}))},onBlur:!o||i&&!u?void 0:t=>{yt(a.id,e,t.target.value),he(e=>{let{[c]:t,...n}=e;return n}),i&&Wt(s)},onClick:i?()=>{o&&(u||qt(s)||Nt(a,e))}:void 0,onContextMenu:i?t=>{o&&(t.preventDefault(),Vt({kind:`attribute`,fieldKey:s,unitId:a.id,bid:e,input:t.currentTarget}))}:void 0,onTouchStart:i?e=>{o&&(u||Gt(s,e.currentTarget))}:void 0,onTouchEnd:i?()=>{Kt(s)}:void 0,onTouchCancel:i?()=>{Kt(s)}:void 0,onKeyDown:t=>{if(o){if(i&&!u&&(t.key===`Enter`||t.key===` `)){t.preventDefault(),Nt(a,e);return}(u||!i)&&t.key===`Enter`&&(t.preventDefault(),t.currentTarget.blur())}}})]},e)})})});case`list-column`:return(0,U.jsx)(Gg,{theme:t,children:(0,U.jsx)(r_,{theme:t,disabled:!o,onClick:e=>{if(e.stopPropagation(),!o)return;let t=n.styles?.bidList?.[0];t&&_e({unitId:a.id,bid:t})},title:e(`initiative.openListReference`),children:(0,U.jsx)(Qd,{})})});case`checkbox-column`:return(0,U.jsx)(Gg,{theme:t,children:(0,U.jsx)(n_,{children:n.styles?.bidList?.map(e=>{let r=!!a.attributes[`${A}/${e}`],s=n.styles?.inputType===`slider`,l=t=>{m(n=>n.map(n=>n.id===a.id?{...n,attributes:{...n.attributes,[`${A}/${e}`]:t}}:n)),f(c.map(n=>n.id===a.id?{...n,metadata:{...n.metadata,[`${A}/${e}`]:t}}:n)),i.scene.items.updateItems([a.id],n=>{n[0].metadata[`${A}/${e}`]=t})};return s?(0,U.jsx)(c_,{type:`button`,theme:t,$active:r,disabled:!o,onClick:o?()=>{l(!r)}:void 0,children:(0,U.jsx)(l_,{theme:t,$active:r})},e):(0,U.jsx)(i_,{theme:t,type:`checkbox`,checked:r,disabled:!o,onChange:o?e=>{l(e.target.checked)}:void 0},e)})})});case`derived-column`:{let r=n.styles?.bidList||[];return r.length===0?(0,U.jsx)(Gg,{theme:t,children:`-`}):(0,U.jsx)(Gg,{theme:t,children:(0,U.jsx)(n_,{children:r.map((r,i)=>(0,U.jsxs)(V.Fragment,{children:[i>0&&(0,U.jsx)(t_,{theme:t,children:n.styles?.dividers?.[i-1]||`/`}),(0,U.jsx)(a_,{theme:t,title:e(`initiative.derivedValueFormula`),children:Mt(a,r)})]},r))})})}case`enum-column`:{let e=n.styles?.bidList?.[0];if(!e)return(0,U.jsx)(Gg,{theme:t,children:`-`});let r=Et(Dt(e)),s=Array.isArray(r.enum?.options)?r.enum.options.map(e=>String(e||``).trim()).filter(e=>e.length>0):[],l=`${A}/${e}`,u=a.attributes[l],d=typeof u==`string`?u.trim():``,p=s.includes(d)?d:s[0]||``,h=e=>{m(t=>t.map(t=>t.id===a.id?{...t,attributes:{...t.attributes,[l]:e}}:t)),f(c.map(t=>t.id===a.id?{...t,metadata:{...t.metadata,[l]:e}}:t)),i.scene.items.updateItems([a.id],t=>{t[0].metadata[l]=e})};return(0,U.jsx)(Gg,{theme:t,children:(0,U.jsx)(n_,{children:(0,U.jsx)(e_,{theme:t,disabled:!o,value:p,onClick:e=>e.stopPropagation(),onChange:o?e=>{h(e.target.value)}:void 0,children:s.length===0?(0,U.jsx)(`option`,{value:``,children:`No options`}):s.map(e=>(0,U.jsx)(`option`,{value:e,children:e},e))})})})}case`resource-column`:{let e=n.styles?.bidList?.[0];if(!e)return(0,U.jsx)(Gg,{theme:t,children:`-`});let s=a.attributes[`${A}/${e}`],l=r.find(t=>xt(t)===e&&wt(t)===`resource`),u=s&&typeof s==`object`&&!Array.isArray(s)?s:null,d=u?Number(u.current??0):0,p=u?Number(u.max??0):0,h=(t,n)=>{let r=`${A}/${e}`,o={current:t,max:n};m(e=>e.map(e=>e.id===a.id?{...e,attributes:{...e.attributes,[r]:o}}:e)),f(c.map(e=>e.id===a.id?{...e,metadata:{...e.metadata,[r]:o}}:e)),i.scene.items.updateItems([a.id],e=>{e[0].metadata[r]=o})};if(Et(l)?.resource?.showPips){let e=Number(Et(l)?.resource?.pipCap),n=(Number.isFinite(e)&&e>0?Math.round(e):void 0)??p;if(n<=0)return(0,U.jsx)(Gg,{theme:t,children:`-`});let r=Math.max(1,Math.min(n,15)),i=Math.max(0,Math.min(d,r));return(0,U.jsx)(Gg,{theme:t,children:(0,U.jsx)(o_,{children:Array.from({length:r}).map((e,n)=>(0,U.jsx)(s_,{theme:t,$filled:n<i,disabled:!o,onClick:o?()=>{h(n+1===i?n:n+1,p)}:void 0},n))})})}return(0,U.jsx)(Gg,{theme:t,children:(0,U.jsxs)(n_,{children:[(0,U.jsx)($g,{theme:t,$isRollable:!1,value:String(d),$small:!1,readOnly:!o,onChange:o?e=>{let t=Number(e.target.value);isNaN(t)||h(t,p)}:void 0}),(0,U.jsx)(t_,{theme:t,children:`/`}),(0,U.jsx)($g,{theme:t,$isRollable:!1,value:String(p),$small:!1,readOnly:!o,onChange:o?e=>{let t=Number(e.target.value);isNaN(t)||h(d,t)}:void 0})]})})}case`special-column`:let p=Cn(n.iconType);if(n.styles?.specialType===`elevation`){let e=fe[a.id];return(0,U.jsx)(mg,{theme:t,unit:a,canInteract:o,elevationDraftValue:e,onElevationDraftChange:ht,onCommitElevationChange:_t})}else{let e=et.getEffectsForUnit(a.id).length;return(0,U.jsx)(hg,{theme:t,canInteract:o,icon:p||(0,U.jsx)(oe,{}),activeEffectsCount:e,onOpen:()=>et.handleOpenEffectsModal(a.id)})}case`divider-column`:return(0,U.jsx)(u_,{theme:t,children:(0,U.jsx)(d_,{children:n.styles?.styleDesign===`zigzag`?(0,U.jsx)(p_,{children:(0,U.jsx)(m_,{theme:t})}):(0,U.jsx)(f_,{theme:t,$style:n.styles?.styleDesign})})});default:return(0,U.jsx)(Gg,{theme:t,children:`-`})}};if(a)return(0,U.jsx)(Og,{children:(0,U.jsx)(kg,{theme:t,children:`Loading...`})});let G=Oe||Ae,jn=G?`R:${y}`:`Round: ${y}`,Mn=!Oe&&G;return(0,U.jsxs)(Og,{children:[(0,U.jsx)(Ag,{children:(0,U.jsxs)(Rg,{ref:Le,theme:t,$compact:Oe,children:[(0,U.jsx)(zg,{theme:t,children:(0,U.jsx)(Bg,{children:_n.map(e=>{let n=e.description??`This has no description.`,r=kn(e);return(0,U.jsx)(Vg,{theme:t,$minWidth:r.minWidth,$fixedWidth:r.fixedWidth,onMouseEnter:e=>En(e,n),onMouseMove:e=>En(e,n),onMouseLeave:Dn,onFocus:e=>En(e,n),onBlur:Dn,children:On(e)},e.id)})})}),(0,U.jsx)(Ug,{children:yn.map(e=>(0,U.jsx)(Wg,{$isCurrentTurn:e.id===_,theme:t,children:_n.map(t=>(0,U.jsx)(V.Fragment,{children:An(t,e)},t.id))},e.id))})]})}),(0,U.jsxs)(jg,{theme:t,$compactMode:G,children:[(0,U.jsxs)(Mg,{$compactMode:G,children:[Oe?(0,U.jsxs)(U.Fragment,{children:[I&&(0,U.jsx)(Ng,{theme:t,$compact:!0,onClick:Qt,children:(0,U.jsx)(Xd,{})}),I&&(0,U.jsx)(Ng,{theme:t,$compact:!0,onClick:Zt,children:(0,U.jsx)(Zd,{})})]}):He?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Ng,{theme:t,onClick:en,disabled:!_||x.has(_),children:`End Turn`}),(0,U.jsx)(Lg,{theme:t,$compactMode:G,children:jn}),(0,U.jsx)(Ng,{theme:t,$compact:G,onClick:tn,disabled:x.size<B.length,children:G?(0,U.jsx)(Zd,{}):e(`initiative.next`)})]}):(0,U.jsxs)(U.Fragment,{children:[I&&(0,U.jsx)(Ng,{theme:t,$compact:!0,onClick:Qt,children:(0,U.jsx)(Xd,{})}),(0,U.jsx)(Lg,{theme:t,$compactMode:G,children:jn}),I&&(0,U.jsx)(Ng,{theme:t,$compact:!0,onClick:Zt,children:(0,U.jsx)(Zd,{})})]}),Mn&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Fg,{theme:t,onClick:()=>{R()},title:e(`initiative.switchToCompactList`),children:(0,U.jsx)(cf,{})}),I&&(0,U.jsx)(Fg,{theme:t,onClick:()=>Ee(!0),disabled:P,title:e(`initiative.resetRoundTurnState`),children:(0,U.jsx)(lf,{})})]}),Oe&&(0,U.jsx)(Fg,{theme:t,onClick:()=>{R()},title:e(`initiative.switchToFullsizeList`),children:(0,U.jsx)(sf,{})})]}),!Oe&&!Mn&&(0,U.jsx)(Ig,{theme:t,$hasReset:I,onClick:()=>{R()},title:e(`initiative.switchToCompactList`),children:(0,U.jsx)(cf,{})}),I&&!Oe&&!Mn&&(0,U.jsx)(Pg,{theme:t,onClick:()=>Ee(!0),disabled:P,title:e(`initiative.resetRoundTurnState`),children:(0,U.jsx)(lf,{})})]}),Me&&(0,U.jsx)(Hg,{ref:Pe,theme:t,$left:Me.left,$y:Me.y,$placement:Me.placement,$arrowX:Me.arrowX,role:`tooltip`,children:Me.text}),(0,U.jsxs)(Am,{isOpen:!!w,title:un?e(`initiative.unitTitle`,{unit:un.name}):e(`initiative.unitFallbackTitle`),onClose:()=>{k||ae||ce||(te(null),O(null))},closeOnOverlayClick:!k&&!ae&&!ce,maxWidth:`520px`,children:[(0,U.jsx)(__,{theme:t,children:e(`initiative.selectOwnerHint`)}),(0,U.jsxs)(h_,{children:[tt.map(n=>(0,U.jsxs)(g_,{theme:t,$isCurrent:dn?.createdUserId===n.id,onClick:()=>sn(n.id),disabled:k||ae||ce,children:[n.name,dn?.createdUserId===n.id?e(`initiative.currentSuffix`):``]},n.id)),(0,U.jsx)(g_,{theme:t,onClick:()=>{ln()},disabled:k||ae||ce,children:e(ce?`initiative.removing`:`initiative.removeUnitFromList`)})]}),(0,U.jsx)(y_,{theme:t}),(0,U.jsxs)(b_,{theme:t,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(x_,{theme:t,children:e(`initiative.bossMode`)}),(0,U.jsx)(S_,{theme:t,children:e(`initiative.bossModeHint`)})]}),(0,U.jsx)(C_,{children:(0,U.jsx)(w_,{type:`button`,theme:t,$active:fn,disabled:k||ae||ce,"aria-label":e(`initiative.toggleBossModeAria`),"aria-pressed":fn,onClick:()=>{cn()}})})]}),ne&&(0,U.jsx)(v_,{theme:t,children:ne})]}),(0,U.jsxs)(Am,{isOpen:!!N,title:N?.kind===`initiative`?e(`initiative.initiativeTitle`,{unit:gn?.name||e(`initiative.unitFallbackTitle`)}):Dt(N?.bid||``)?.attr_name||e(`initiative.rollOptionsTitle`),onClose:Ht,maxWidth:`460px`,children:[(0,U.jsx)(__,{theme:t,children:e(`initiative.chooseRollableAction`)}),(0,U.jsxs)(h_,{children:[(0,U.jsx)(g_,{theme:t,onClick:()=>{N&&(Ht(),Bt(N.fieldKey,N.input))},children:e(`initiative.editValue`)}),(()=>{if(!N||!gn)return null;if(N.kind===`initiative`)return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(g_,{theme:t,onClick:()=>{Ht(),lt(N.unitId,`advantage`)},children:e(`initiative.rollWithAdvantage`)}),(0,U.jsx)(g_,{theme:t,onClick:()=>{Ht(),lt(N.unitId,`disadvantage`)},children:e(`initiative.rollWithDisadvantage`)})]});let n=N.bid||``,r=jt(gn,n);if(!r)return null;let i=At(r.notation,`advantage`),a=At(r.notation,`disadvantage`);return!i||!a?null:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(g_,{theme:t,onClick:()=>{Ht(),Pt(gn,n,`advantage`)},children:e(`initiative.rollWithAdvantage`)}),(0,U.jsx)(g_,{theme:t,onClick:()=>{Ht(),Pt(gn,n,`disadvantage`)},children:e(`initiative.rollWithDisadvantage`)})]})})()]})]}),(0,U.jsx)(ug,{manager:et}),(0,U.jsxs)(Am,{isOpen:Te,title:e(`initiative.resetEncounterTitle`),onClose:()=>{P||Ee(!1)},closeOnOverlayClick:!P,maxWidth:`460px`,children:[(0,U.jsx)(__,{theme:t,children:e(`initiative.chooseResetMode`)}),(0,U.jsxs)(h_,{children:[(0,U.jsx)(g_,{theme:t,onClick:()=>{nn(`round`)},disabled:P,children:e(P?`initiative.resetting`:`initiative.resetRound`)}),(0,U.jsx)(g_,{theme:t,onClick:()=>{nn(`reset-initiative`)},disabled:P,children:e(P?`initiative.resetting`:`initiative.resetRoundAndInitiative`)}),(0,U.jsx)(g_,{theme:t,onClick:()=>{nn(`clear-list`)},disabled:P,children:e(P?`initiative.resetting`:`initiative.resetRoundAndClearList`)})]})]}),(0,U.jsx)(Am,{isOpen:!!ge,title:W?e(`initiative.listReferenceTitle`,{attribute:pn?.attr_name||e(`initiative.listReferenceFallback`),unit:W.name}):e(`initiative.listReferenceFallback`),onClose:()=>{_e(null)},maxWidth:`620px`,children:(0,U.jsxs)(T_,{children:[(0,U.jsx)(E_,{theme:t}),mn.length===0?(0,U.jsx)(F_,{theme:t,children:e(`initiative.noEntries`)}):(0,U.jsx)(D_,{children:mn.map(n=>(0,U.jsxs)(O_,{theme:t,children:[(0,U.jsxs)(k_,{children:[hn?(0,U.jsx)(A_,{type:`checkbox`,checked:!!n.inUse,readOnly:!0,tabIndex:-1}):null,(0,U.jsx)(j_,{theme:t,children:n.name||e(`initiative.unnamed`)})]}),n.description?(0,U.jsx)(M_,{theme:t,children:n.description}):null,(()=>{let r=Sn(n.description||``);return r.length===0?null:(0,U.jsx)(N_,{children:r.map((r,i)=>(0,U.jsx)(P_,{type:`button`,theme:t,onClick:()=>{let t=W?.createdUserId?l.find(e=>e.id===W.createdUserId):null;$e({notation:r,actionName:n.name||pn?.attr_name||e(`initiative.listRoll`),tokenName:W?.name||e(`initiative.unknown`),senderId:W?.createdUserId||u?.id||`unknown`,senderColor:t?.color||u?.color||`#ffffff`})},onContextMenu:t=>{t.preventDefault();let i=W?.createdUserId?l.find(e=>e.id===W.createdUserId):null;we({notation:r,actionName:n.name||pn?.attr_name||e(`initiative.listRoll`),tokenName:W?.name||e(`initiative.unknown`),senderId:W?.createdUserId||u?.id||`unknown`,senderColor:i?.color||u?.color||`#ffffff`})},title:r,children:r},`${n.id}-inline-notation-${i}`))})})()]},n.id))})]})}),(0,U.jsxs)(Am,{isOpen:!!xe,title:xe?.actionName||e(`initiative.rollOptionsTitle`),onClose:Ut,maxWidth:`460px`,zIndexBase:12e3,children:[(0,U.jsx)(__,{theme:t,children:e(`initiative.chooseRollMode`)}),(0,U.jsx)(h_,{children:(()=>{if(!xe)return null;let n=At(xe.notation,`advantage`),r=At(xe.notation,`disadvantage`);return!n||!r?null:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(g_,{theme:t,onClick:()=>{xe&&(Ut(),Ft(xe,`advantage`))},children:e(`initiative.rollWithAdvantage`)}),(0,U.jsx)(g_,{theme:t,onClick:()=>{xe&&(Ut(),Ft(xe,`disadvantage`))},children:e(`initiative.rollWithDisadvantage`)})]})})()})]})]})},B_=`${D.EXTENSIONID}-partyhud`,V_=async()=>{await i.modal.open({id:B_,url:`/pages/forgeparty.html`,fullScreen:!0,hideBackdrop:!0,hidePaper:!0,disablePointerEvents:!0})},H_=async()=>{await i.modal.close(B_)};var U_=`forge:party_save`,W_=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,G_=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>o(e.theme.BACKGROUND,.35)};
`,K_=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`,q_=y(K_)`
  justify-content: center;
`,J_=y.span`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: ${e=>o(e.theme.PRIMARY,.9)};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`,Y_=y.button`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>o(e.theme.OFFSET,.45)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,X_=y.select`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>o(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px;
  min-width: 160px;
`,Z_=y.p`
  margin: 0;
  font-size: 12px;
  color: ${e=>o(e.theme.PRIMARY,.8)};
`,Q_=y.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${e=>e.$disabled?.55:1};
`,$_=y.span`
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
`,ev=y.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>o(e.theme.BACKGROUND,.35)};
`,tv=y.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
`,nv=y.img`
  width: ${e=>e.$full?`100%`:`40px`};
  height: ${e=>e.$full?`100%`:`40px`};
  min-width: ${e=>e.$full?`100%`:`40px`};
  position: absolute;
  left: ${e=>e.$overlay?`20px`:`0`};
  top: ${e=>e.$overlay?`20px`:`0`};
  object-fit: cover;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>o(e.theme.BACKGROUND,.6)};
`,rv=y.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,iv=y.span`
  color: ${e=>e.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,av=y.input`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>o(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
`,ov=y.p`
  color: ${e=>e.theme.PRIMARY};
  margin: 0;
`,sv=y.span`
  display: block;
  font-size: 10px;
  color: ${e=>o(e.theme.PRIMARY,.55)};
  text-align: center;
  margin-top: 4px;
`,cv=e=>{switch(e){case`bottom`:return`left`;case`left`:return`top`;case`top`:return`right`;case`right`:default:return`bottom`}},lv=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,uv=e=>e===`default`||e===`plate`||e===`tech`||e===`deco`,dv=e=>e===`deco`?`plate`:e===`tech`?`tech`:e===`plate`?`plate`:`default`;const fv=()=>{let e=(0,V.useRef)(!1),[t,n]=(0,V.useState)(null),{theme:r}=It(),{t:a}=bt(),{attributes:o}=Mm(),s=H(e=>e.items);H(e=>e.sceneMetadata);let c=H(e=>e.roomMetadata),l=H(e=>e.playerData),u=c,d=String(l?.role||``).toUpperCase()===`GM`,f=l?.id,p=E(j.PARTY_HUD_OPEN,f),m=E(j.PARTY_HUD_ORIENTATION,f),h=(u[p]??u[j.PARTY_HUD_OPEN])===!0,g=u[m]??u[j.PARTY_HUD_ORIENTATION],_=lv(g)?g:`bottom`,v=u[j.PARTY_HUD_ATTR_ONE]||``,y=u[j.PARTY_HUD_ATTR_TWO]||``,b=u[j.PARTY_HUD_SHOW_HP_BARS]===!0,x=u[j.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!b,S=u[j.PARTY_HUD_BORDER_STYLE],ee=uv(S)?dv(S):`default`,w=s.filter(e=>e.metadata[T.IN_PARTY]===!0),te=a(`common.orientation.${_}`);(0,V.useEffect)(()=>{try{let e=localStorage.getItem(U_);e&&n(JSON.parse(e).savedAt??null)}catch{}},[]);let ne=()=>{let e={savedAt:new Date().toISOString(),items:w};localStorage.setItem(U_,JSON.stringify(e)),n(e.savedAt)},D=async()=>{let e=localStorage.getItem(U_);if(e)try{let t=JSON.parse(e);if(!t.items.length)return;let n=new Set(t.items.map(e=>e.id)),r=s.filter(e=>n.has(e.id)).map(e=>e.id);r.length>0&&await i.scene.items.deleteItems(r);let[a,o]=await Promise.all([i.viewport.getWidth(),i.viewport.getHeight()]),c={x:a*.75,y:o*.6},l=await i.viewport.inverseTransformPoint(c),u={x:c.x-75,y:c.y-75},d=await i.viewport.inverseTransformPoint(u),f=d.x-l.x,p=d.y-l.y,m=t.items.map((e,t)=>({...e,position:{x:l.x+f*t,y:l.y+p*t}}));await i.scene.items.addItems(m)}catch{}},O=(0,V.useMemo)(()=>o.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[o]),k=async(e,t)=>{await i.room.setMetadata({[e]:t})},re=async e=>{await i.room.setMetadata(e)},A=async()=>{let t=!h;if(await k(p,t),!t){await H_(),e.current=!1;return}await V_(),e.current=!0},ie=async()=>{await k(m,cv(_))},ae=async(e,t)=>{let n=t.trim();await i.scene.items.updateItems([e],e=>{let t={...e[0].metadata||{}};n?t[T.PORTRAIT_URL]=n:delete t[T.PORTRAIT_URL],e[0].metadata=t})};return(0,U.jsx)(Yd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,U.jsxs)(ym,{theme:r,children:[(0,U.jsx)(bm,{theme:r,children:a(`party.pageTitle`)}),(0,U.jsxs)(G_,{theme:r,children:[(0,U.jsxs)(K_,{children:[(0,U.jsx)(Y_,{theme:r,onClick:()=>void ie(),children:a(`party.display`,{orientation:te})}),(0,U.jsx)(Y_,{theme:r,onClick:()=>void A(),children:a(h?`party.closeHud`:`party.openHud`)})]}),d&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(q_,{children:[(0,U.jsx)(J_,{theme:r,children:a(`party.showInHud`)}),(0,U.jsxs)(Q_,{$disabled:!d,children:[(0,U.jsx)($_,{theme:r,children:a(`party.showHpBars`)}),(0,U.jsx)(Z,{label:a(`party.toggleHpBarsLabel`),isOn:b,onChange:e=>{if(d){if(e){re({[j.PARTY_HUD_SHOW_HP_BARS]:!0,[j.PARTY_HUD_SHOW_HP_NUMBERS]:!1});return}k(j.PARTY_HUD_SHOW_HP_BARS,!1)}}})]}),(0,U.jsxs)(Q_,{$disabled:!d,children:[(0,U.jsx)($_,{theme:r,children:a(`party.showHpNumbers`)}),(0,U.jsx)(Z,{label:a(`party.toggleHpNumbersLabel`),isOn:x,onChange:e=>{if(d){if(e){re({[j.PARTY_HUD_SHOW_HP_NUMBERS]:!0,[j.PARTY_HUD_SHOW_HP_BARS]:!1});return}k(j.PARTY_HUD_SHOW_HP_NUMBERS,!1)}}})]}),(0,U.jsxs)(X_,{theme:r,disabled:!d,value:v,onChange:e=>{let t=e.target.value;k(j.PARTY_HUD_ATTR_ONE,t),t&&t===y&&k(j.PARTY_HUD_ATTR_TWO,``)},children:[(0,U.jsx)(`option`,{value:``,children:a(`party.extraSlotNone`,{slot:1})}),O.map(e=>(0,U.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,U.jsxs)(X_,{theme:r,disabled:!d,value:y,onChange:e=>{let t=e.target.value;k(j.PARTY_HUD_ATTR_TWO,t),t&&t===v&&k(j.PARTY_HUD_ATTR_ONE,``)},children:[(0,U.jsx)(`option`,{value:``,children:a(`party.extraSlotNone`,{slot:2})}),O.map(e=>(0,U.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,U.jsxs)(X_,{theme:r,disabled:!d,value:ee,onChange:e=>{let t=e.target.value;uv(t)&&k(j.PARTY_HUD_BORDER_STYLE,t)},children:[(0,U.jsx)(`option`,{value:`default`,children:a(`party.portraitBorderDefault`)}),(0,U.jsx)(`option`,{value:`plate`,children:a(`party.portraitBorderPlate`)}),(0,U.jsx)(`option`,{value:`tech`,children:a(`party.portraitBorderTech`)})]})]}),(0,U.jsx)(Z_,{theme:r,children:(0,U.jsxs)(U.Fragment,{children:[a(`party.configureHint`),(0,U.jsx)(`br`,{}),a(`party.listAttributesExcluded`)]})})]})]}),d&&(0,U.jsxs)(G_,{theme:r,children:[(0,U.jsxs)(q_,{children:[(0,U.jsx)(Y_,{theme:r,onClick:ne,disabled:w.length===0,children:a(`party.saveParty`)}),(0,U.jsx)(Y_,{theme:r,onClick:()=>void D(),disabled:t===null,children:a(`party.loadParty`)})]}),(0,U.jsx)(sv,{theme:r,children:t?a(`party.lastSaved`,{value:new Date(t).toLocaleString()}):a(`party.noSaveAvailable`)})]}),w.length===0?(0,U.jsx)(ov,{theme:r,children:a(`party.emptyState`)}):(0,U.jsx)(W_,{theme:r,children:w.map(e=>{let t=e.metadata?.[T.PORTRAIT_URL]||``,n=C(e)?e.image.url:void 0,i=e.metadata[T.UNIT_NAME]||e.name||a(`party.unknownUnit`),o=e.createdUserId===l?.id,s=d||o,c=n||`/logo.png`,u=!!t;return(0,U.jsxs)(ev,{theme:r,children:[(0,U.jsxs)(tv,{children:[(0,U.jsx)(nv,{theme:r,src:c,alt:i,$full:!u}),u&&(0,U.jsx)(nv,{theme:r,src:u?t:``,alt:a(`party.overrideAlt`,{unit:i}),$overlay:!0})]}),(0,U.jsxs)(rv,{children:[(0,U.jsx)(iv,{theme:r,title:i,children:i}),s&&(0,U.jsx)(av,{theme:r,defaultValue:t,placeholder:a(`party.portraitUrlPlaceholder`),onBlur:t=>{ae(e.id,t.target.value)}})]})]},e.id)})})]})})};var pv=`${A}/hp-bar-effect`,mv=`${A}/hp-bar-owner`,hv=`${A}/hp-number-text`,gv=`${A}/hp-number-owner`,_v=e=>`HPB${e.slice(3)}`,vv=e=>`HPN${e.slice(3)}`,yv=(e,t,n)=>Math.max(t,Math.min(n,e)),bv=(e,t,n,r)=>{let i=O(e.metadata,t,r,`current`),a=O(e.metadata,n,r,`max`);return a===null||a<=0||i===null?null:yv(i/a*100,0,100)},xv=(e,t,n,r)=>{let i=O(e.metadata,t,r,`current`),a=O(e.metadata,n,r,`max`);return i===null?null:{currentHp:Math.trunc(i),maxHp:a===null?null:Math.trunc(a)}},Sv=e=>{let t=String(e||`bottom`).toLowerCase();return t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`},Cv=e=>{switch(Sv(e)){case`top`:return 0;case`bottom`:return 1;case`left`:return 2;case`right`:return 3;default:return 1}},wv=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o,width:r,height:i}},Tv=(e,t,n)=>{let r=wv(e,t),i=r.minX+r.width*.5,a=r.minY+r.height*.5,o;switch(n){case`top`:o={x:i,y:r.minY+r.height*.18};break;case`bottom`:o={x:i,y:r.minY+r.height*.82};break;case`left`:o={x:r.minX+r.width*.18,y:a};break;case`right`:o={x:r.minX+r.width*.82,y:a};break}let s=r.width*.25,c=r.height*.18;return{x:o.x-s,y:o.y-c}};const Ev=()=>{let t=H(e=>e.cacheReady),n=H(e=>e.sceneReady),r=H(e=>e.items),o=H(e=>e.localItems),c=H(e=>e.gridDpi),l=H(e=>e.roomMetadata),u=H(e=>e.sceneMetadata),d=H(e=>e.systemData);return(0,V.useEffect)(()=>{if(!t||!n)return;let u=!1;return(async()=>{let t=l,n=t[j.SHOW_HP_BARS]??!1,f=t[j.SHOW_HP_NUMBERS]??!1,p=n,m=!n&&f,h=Sv(t[j.HP_BAR_ORIENTATION]),g=Cv(t[j.HP_BAR_ORIENTATION]),_=d?.attributes||[],{currentHpBid:v,maxHpBid:y}=re(t,_),b=o.filter(e=>a(e)&&e.metadata?.[pv]===!0),x=o.filter(t=>e(t)&&t.metadata?.[hv]===!0);if(!p&&b.length>0)try{await i.scene.local.deleteItems(b.map(e=>e.id))}catch(e){M.error(`Failed to remove HP bar effects`,e)}if(!m&&x.length>0)try{await i.scene.local.deleteItems(x.map(e=>e.id))}catch(e){M.error(`Failed to remove HP number texts`,e)}if(!p&&!m)return;let S=r.filter(e=>C(e)&&e.metadata?.[T.ON_LIST]===!0),w=new Map,E=new Map;for(let e of S){if(p){let t=bv(e,v,y,_);t!==null&&w.set(_v(e.id),{unitId:e.id,hpPercent:t,visible:e.visible})}if(m&&C(e)){let t=xv(e,v,y,_);if(t){let n=t.maxHp===null?`${t.currentHp}`:`${t.currentHp}/${t.maxHp}`;E.set(vv(e.id),{unitId:e.id,text:n,position:Tv(e,c,h)})}}}if(p){let e=new Map(b.map(e=>[e.id,e])),t=Array.from(w.entries()).filter(([t])=>!e.has(t)),n=b.filter(e=>!w.has(e.id)),r=b.filter(e=>{let t=w.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`orientation`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return e.attachedTo!==t.unitId||!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-g)>.001});if(u)return;if(n.length>0)try{await i.scene.local.deleteItems(n.map(e=>e.id))}catch(e){M.error(`Failed to remove stale HP bar effects`,e)}if(t.length>0){let e=t.map(([e,t])=>s().id(e).name(`HP Bar Effect`).effectType(`ATTACHMENT`).attachedTo(t.unitId).layer(`ATTACHMENT`).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).visible(t.visible).uniforms([{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:g}]).sksl(`
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
`).metadata({[pv]:!0,[mv]:t.unitId}).build());try{await i.scene.local.addItems(e)}catch(e){M.error(`Failed to add HP bar effects`,e)}}if(r.length>0){let e=r.map(e=>e.id);try{await i.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=w.get(e.id);if(!t)return;e.attachedTo=t.unitId;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:g}],e.metadata={...e.metadata,[pv]:!0,[mv]:t.unitId}})})}catch(e){M.error(`Failed to update HP bar effects`,e)}}}if(m){let e=new Map(x.map(e=>[e.id,e])),t=Array.from(E.entries()).filter(([t])=>!e.has(t)),n=x.filter(e=>!E.has(e.id)),r=x.filter(e=>{let t=E.get(e.id);if(!t)return!1;let n=e.text?.plainText,r=Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01;return e.attachedTo!==t.unitId||n!==t.text||r});if(u)return;if(n.length>0)try{await i.scene.local.deleteItems(n.map(e=>e.id))}catch(e){M.error(`Failed to remove stale HP number texts`,e)}if(t.length>0){let e=t.map(([e,t])=>{let n=S.find(e=>e.id===t.unitId);return ee().id(e).name(`HP Number Text`).layer(`ATTACHMENT`).plainText(t.text).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(28).fontFamily(`Segoe UI`).textAlign(`CENTER`).position(t.position).metadata({[hv]:!0,[gv]:t.unitId}).attachedTo(t.unitId).visible(n?.visible??!0).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build()});try{await i.scene.local.addItems(e)}catch(e){M.error(`Failed to add HP number texts`,e)}}if(r.length>0){let e=r.map(e=>e.id);try{await i.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=E.get(e.id);if(!t)return;e.attachedTo=t.unitId,e.position=t.position;let n=e;n.text&&(n.text.plainText=t.text),e.metadata={...e.metadata,[hv]:!0,[gv]:t.unitId}})})}catch(e){M.error(`Failed to update HP number texts`,e)}}}})(),()=>{u=!0}},[t,n,r,o,c,l,u,d]),null};var Dv=`${A}/death-effect-token`,Ov=`${A}/death-effect-owner`,kv=e=>`DTH${e.slice(3)}`,Av=(e,t,n)=>O(e.metadata,t,n,`current`);const jv=()=>{let e=H(e=>e.cacheReady),t=H(e=>e.sceneReady),n=H(e=>e.items),r=H(e=>e.localItems),o=H(e=>e.roomMetadata),c=H(e=>e.sceneMetadata),l=H(e=>e.systemData);return(0,V.useEffect)(()=>{if(!e||!t)return;let c=!1;return(async()=>{let e=o,t=e[j.SHOW_DEATH_EFFECT]??!1,u=l?.attributes||[],d=re(e,u).currentHpBid,f=r.filter(e=>a(e)&&e.metadata?.[Dv]===!0);if(!t){if(f.length>0)try{await i.scene.local.deleteItems(f.map(e=>e.id))}catch(e){M.error(`Failed to remove death token effects`,e)}return}let p=n.filter(e=>C(e)&&e.metadata?.[T.ON_LIST]===!0),m=new Map;p.forEach(e=>{Av(e,d,u)===0&&m.set(kv(e.id),{ownerId:e.id,visible:e.visible})});let h=new Map(f.map(e=>[e.id,e])),g=Array.from(m.entries()).filter(([e])=>!h.has(e)),_=f.filter(e=>!m.has(e.id)),v=f.filter(e=>{let t=m.get(e.id);if(!t)return!1;let n=e;return e.attachedTo!==t.ownerId||n.metadata?.[Ov]!==t.ownerId});if(!c){if(_.length>0)try{await i.scene.local.deleteItems(_.map(e=>e.id))}catch(e){M.error(`Failed to remove stale death token effects`,e)}if(g.length>0){let e=g.map(([e,t])=>s().id(e).name(`Death Token Effect`).effectType(`ATTACHMENT`).layer(`ATTACHMENT`).attachedTo(t.ownerId).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(`
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
`).visible(t.visible).metadata({[Dv]:!0,[Ov]:t.ownerId}).build());try{await i.scene.local.addItems(e)}catch(e){M.error(`Failed to add death token effects`,e)}}if(v.length>0)try{await i.scene.local.updateItems(v.map(e=>e.id),e=>{e.forEach(e=>{let t=m.get(e.id);t&&(e.attachedTo=t.ownerId,e.metadata={...e.metadata,[Dv]:!0,[Ov]:t.ownerId})})})}catch(e){M.error(`Failed to update death token effects`,e)}}})(),()=>{c=!0}},[e,t,n,r,o,c,l]),null};var Mv=`${A}/buff-effect-token`,Nv=`${A}/buff-effect-owner`,Pv=`${A}/debuff-effect-token`,Fv=`${A}/debuff-effect-owner`,Iv=`${A}/effect-preset`,Lv=e=>`EFB${e.slice(3)}`,Rv=e=>`EFD${e.slice(3)}`,zv=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const Bv=()=>{let e=H(e=>e.cacheReady),t=H(e=>e.sceneReady),n=H(e=>e.items),r=H(e=>e.localItems),o=H(e=>e.roomMetadata),c=H(e=>e.sceneMetadata);return(0,V.useEffect)(()=>{if(!e||!t)return;let c=!1;return(async()=>{let e=o,t=e[j.BUFF_VISUAL_PRESET],l=e[j.DEBUFF_VISUAL_PRESET],u=ih(t)?t:eh,d=ah(l)?l:th,f=oh(u),p=sh(d),m=n.filter(e=>C(e)&&e.metadata?.[T.ON_LIST]===!0),h=new Set(m.map(e=>e.id)),g=new Map,_=(e,t)=>{let n=g.get(e)||{hasBuff:!1,hasDebuff:!1};t===`buff`?n.hasBuff=!0:n.hasDebuff=!0,g.set(e,n)};n.forEach(e=>{if(e.metadata?.[T.ON_LIST]!==!0)return;let t=zv(e.metadata?.[Vh]);t.length!==0&&t.forEach(t=>{t.effectType!==`neutral`&&(t.targets.length>0?t.targets:[e.id]).forEach(e=>{h.has(e)&&(t.effectType===`buff`||t.effectType===`debuff`)&&_(e,t.effectType)})})});let v=new Map,y=new Map;m.forEach(e=>{let t=g.get(e.id);t?.hasBuff&&v.set(Lv(e.id),e.id),t?.hasDebuff&&y.set(Rv(e.id),e.id)});let b=r.filter(e=>a(e)&&e.metadata?.[Mv]===!0),x=r.filter(e=>a(e)&&e.metadata?.[Pv]===!0),S=async e=>{let{existing:t,desiredByOverlayId:n,preset:r,shader:a,name:o,flagKey:l,ownerKey:u}=e,d=new Map(t.map(e=>[e.id,e])),f=Array.from(n.entries()).filter(([e])=>!d.has(e)),p=t.filter(e=>!n.has(e.id)),m=t.filter(e=>{let t=n.get(e.id);if(!t)return!1;let i=e.metadata?.[Iv];return e.attachedTo!==t||i!==r});if(!c){if(p.length>0)try{await i.scene.local.deleteItems(p.map(e=>e.id))}catch(e){M.error(`Failed to remove stale ${o.toLowerCase()} overlays`,e)}if(f.length>0){let e=f.map(([e,t])=>s().id(e).name(o).effectType(`ATTACHMENT`).layer(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(a).metadata({[l]:!0,[u]:t,[Iv]:r}).build());try{await i.scene.local.addItems(e)}catch(e){M.error(`Failed to add ${o.toLowerCase()} overlays`,e)}}if(m.length>0)try{await i.scene.local.updateItems(m.map(e=>e.id),e=>{e.forEach(e=>{let t=n.get(e.id);if(!t)return;e.attachedTo=t;let i=e;i.sksl=a,e.metadata={...e.metadata,[l]:!0,[u]:t,[Iv]:r}})})}catch(e){M.error(`Failed to update ${o.toLowerCase()} overlays`,e)}}};await S({existing:b,desiredByOverlayId:v,preset:u,shader:f,name:`Buff Token Effect`,flagKey:Mv,ownerKey:Nv}),await S({existing:x,desiredByOverlayId:y,preset:d,shader:p,name:`Debuff Token Effect`,flagKey:Pv,ownerKey:Fv})})(),()=>{c=!0}},[e,t,n,r,o,c]),null};var Vv=`${A}/boss-hp-effect`,Hv=`${A}/boss-hp-owner`,Uv=`${A}/boss-hp-slot`,Wv=e=>`BOSSHP${e}`,Gv=(e,t,n)=>Math.max(t,Math.min(n,e)),Kv=(e,t,n,r)=>{let i=O(e.metadata,t,r,`current`),a=O(e.metadata,n,r,`max`);return a===null||a<=0||i===null?null:Gv(i/a*100,0,100)};const qv=()=>{let e=H(e=>e.cacheReady),t=H(e=>e.sceneReady),n=H(e=>e.items),r=H(e=>e.localItems),o=H(e=>e.roomMetadata),c=H(e=>e.sceneMetadata),l=H(e=>e.systemData);return(0,V.useEffect)(()=>{if(!e||!t)return;let c=!1;return(async()=>{let e=o,t=l?.attributes||[],{currentHpBid:u,maxHpBid:d}=re(e,t),f=r.filter(e=>a(e)&&e.metadata?.[Vv]===!0),p=n.filter(e=>C(e)&&e.metadata?.[T.ON_LIST]===!0&&e.metadata?.[T.BOSS_MODE]===!0).sort((e,t)=>{let n=Number(e.metadata?.[T.INITIATIVE]??0);return Number(t.metadata?.[T.INITIATIVE]??0)-n}).slice(0,2).map((e,n)=>{let r=Kv(e,u,d,t);return r===null?null:{id:Wv(n),unitId:e.id,slot:n,hpPercent:r}}).filter(e=>e!==null),m=new Map(p.map(e=>[e.id,e])),h=new Map(f.map(e=>[e.id,e])),g=f.filter(e=>!m.has(e.id)),_=p.filter(e=>!h.has(e.id)),v=f.filter(e=>{let t=m.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`slot`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-t.slot)>.001||e.metadata?.[Hv]!==t.unitId});if(!c){if(g.length>0)try{await i.scene.local.deleteItems(g.map(e=>e.id))}catch(e){M.error(`Failed to remove stale boss HP viewport effects`,e)}if(_.length>0){let e=_.map(e=>s().id(e.id).name(`Boss HP Bar`).effectType(`VIEWPORT`).locked(!0).disableHit(!0).uniforms([{name:`hpPercent`,value:e.hpPercent},{name:`slot`,value:e.slot}]).sksl(`
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
`).metadata({[Vv]:!0,[Hv]:e.unitId,[Uv]:e.slot}).build());try{await i.scene.local.addItems(e)}catch(e){M.error(`Failed to add boss HP viewport effects`,e)}}if(v.length>0)try{await i.scene.local.updateItems(v.map(e=>e.id),e=>{e.forEach(e=>{let t=m.get(e.id);if(!t)return;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`slot`,value:t.slot}],e.metadata={...e.metadata,[Vv]:!0,[Hv]:t.unitId,[Uv]:t.slot}})})}catch(e){M.error(`Failed to update boss HP viewport effects`,e)}}})(),()=>{c=!0}},[e,t,n,r,o,c,l]),null};var Jv=`${A}/current-turn-effect`;const Yv=()=>{let e=H(e=>e.cacheReady),t=H(e=>e.sceneReady),n=H(e=>e.items),r=H(e=>e.roomMetadata),a=H(e=>e.sceneMetadata);return(0,V.useEffect)(()=>{if(!e||!t)return;let o=!1;return(async()=>{let e=r[j.SHOW_TURN_EFFECT]===!0,t=a[j.CURRENT_TURN];if(!e||!t){try{await i.scene.local.deleteItems([Jv])}catch{}return}if(!n.find(e=>e.id===t)){try{await i.scene.local.deleteItems([Jv])}catch{}return}if(!o){try{let e=!1;if(await i.scene.local.updateItems([Jv],n=>{let r=n[0];r&&(r.attachedTo=t,e=!0)}),e)return}catch{}if(!o)try{let e=s().id(Jv).name(`Current Turn Effect`).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).sksl(`
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

`).build();await i.scene.local.addItems([e])}catch(e){M.error(`Failed to sync current turn effect`,e)}}})(),()=>{o=!0}},[e,t,n,r,a]),null};var Xv=`${A}/gm-name-label`,Zv=`${A}/gm-name-owner`,Qv=e=>`GMN${e.slice(3)}`,$v=24,ey=`Segoe UI`,ty=800,ny=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o,width:r,height:i}},ry=e=>{if(typeof document>`u`)return e.length*($v*.58);let t=document.createElement(`canvas`).getContext(`2d`);return t?(t.font=`${ty} ${$v}px ${ey}`,t.measureText(e).width):e.length*($v*.58)},iy=(e,t,n)=>{let r=ny(e,t),i=ry(n)*.5;return{x:r.minX+r.width*.5-i+6,y:r.minY+r.height-16}};const ay=()=>{let t=H(e=>e.cacheReady),n=H(e=>e.sceneReady),r=H(e=>e.items),a=H(e=>e.localItems),o=H(e=>e.gridDpi),s=H(e=>e.roomMetadata),c=H(e=>e.sceneMetadata),l=H(e=>e.playerData);return(0,V.useEffect)(()=>{if(!t||!n)return;let c=!1;return(async()=>{let t=s[j.SHOW_NAMES_TO_GM]??!1,n=String(l?.role||``).toUpperCase()===`GM`,u=a.filter(t=>e(t)&&t.metadata?.[Xv]===!0);if(!t||!n){if(u.length>0)try{await i.scene.local.deleteItems(u.map(e=>e.id))}catch(e){M.error(`Failed to remove GM name labels`,e)}return}let d=r.filter(e=>C(e)&&e.metadata?.[T.ON_LIST]===!0),f=new Map;for(let e of d){let t=e.metadata?.[T.UNIT_NAME],n=String(t||``).trim();n&&f.set(Qv(e.id),{unitId:e.id,name:n,position:iy(e,o,n),visible:e.visible})}let p=new Map(u.map(e=>[e.id,e])),m=Array.from(f.entries()).filter(([e])=>!p.has(e)),h=u.filter(e=>!f.has(e.id)),g=u.filter(e=>{let t=f.get(e.id);if(!t)return!1;let n=e.text?.plainText,r=Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01;return e.attachedTo!==t.unitId||n!==t.name||e.visible!==t.visible||r});if(!c){if(h.length>0)try{await i.scene.local.deleteItems(h.map(e=>e.id))}catch(e){M.error(`Failed to remove stale GM name labels`,e)}if(m.length>0){let e=m.map(([e,t])=>ee().id(e).name(`GM Name Label`).layer(`TEXT`).plainText(t.name).textType(`PLAIN`).fontWeight(800).fillOpacity(1).fillColor(`white`).strokeWidth(12).strokeColor(`black`).strokeOpacity(1).fontSize($v).fontFamily(ey).textAlign(`CENTER`).position(t.position).metadata({[Xv]:!0,[Zv]:t.unitId}).attachedTo(t.unitId).visible(t.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).build());try{await i.scene.local.addItems(e)}catch(e){M.error(`Failed to add GM name labels`,e)}}if(g.length>0)try{await i.scene.local.updateItems(g.map(e=>e.id),e=>{e.forEach(e=>{let t=f.get(e.id);if(!t)return;e.attachedTo=t.unitId,e.position=t.position,e.visible=t.visible;let n=e;n.text&&(n.text.plainText=t.name),e.metadata={...e.metadata,[Xv]:!0,[Zv]:t.unitId}})})}catch(e){M.error(`Failed to update GM name labels`,e)}}})(),()=>{c=!0}},[t,n,r,a,o,s,c,l]),null},oy=()=>{let[e,t]=(0,V.useState)(!1),{updateThemeFromSystem:n}=It(),r=H(e=>e.roomMetadata),i=H(e=>e.cacheReady),a=H(e=>e.systemData),o=H(e=>e.setSystemData),s=()=>({theme:{primary:b.theme_primary,offset:b.theme_offset,background:b.theme_background,border:b.theme_border,background_url:b.background_url},cardLayout:b.card_layout,listLayout:b.list_layout,attributes:b.attributes,systemName:b.name,importDate:null,snapshotPublicId:null});return(0,V.useEffect)(()=>{!i&&e&&(t(!1),o(null))},[i,e,o]),(0,V.useEffect)(()=>{!i||!a||n(a.theme.primary,a.theme.offset,a.theme.background,a.theme.border,a.theme.background_url)},[i,a,n]),(0,V.useEffect)(()=>{if(e)return;let n=!0,a=async()=>{if(i)try{M.log(`Starting app initialization...`),await c(),n&&(t(!0),M.log(`App initialization complete`))}catch(e){M.error(`Error during app initialization:`,e),n&&t(!0)}},c=async()=>{let e=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Snapshot ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Snapshot ${t} is not a JSON array`);return n}throw Error(`Snapshot ${t} has invalid type`)},t=async t=>{let{data:n,error:r}=await _.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:t});if(r)return M.error(`Failed to load room snapshot:`,r),!1;let i=Array.isArray(n)?n[0]:n;if(!i||typeof i.snapshot_public_id!=`string`)return M.warn(`Room snapshot reference was set, but no snapshot record was returned`),!1;let a=e(i.card_layout,`card_layout`),s=e(i.list_layout,`list_layout`),c=e(i.attributes,`attributes`);return o({theme:{primary:i.theme_primary,offset:i.theme_offset,background:i.theme_background,border:i.theme_border,background_url:i.background_url},cardLayout:a,listLayout:s,attributes:c,systemName:i.system_name,importDate:i.imported_at,snapshotPublicId:i.snapshot_public_id}),M.log(`System data hydrated from room snapshot`,{snapshotPublicId:i.snapshot_public_id,systemName:i.system_name}),!0};try{let e=r[uh.SNAPSHOT_PUBLIC_ID];if(typeof e==`string`&&e.trim().length>0&&await t(e))return;M.log(`Room snapshot reference missing or unavailable, initializing defaults`),await l()}catch(e){M.error(`Error loading system data:`,e),await l()}},l=async()=>{o(s()),M.log(`Default system initialized`)};return a(),()=>{n=!1}},[i,e,r,o,n]),(0,V.useEffect)(()=>{if(!i||!e)return;let t=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},n=r[uh.SNAPSHOT_PUBLIC_ID],c=typeof n==`string`&&n.trim().length>0?n.trim():null;if(c===(a?.snapshotPublicId??null))return;let l=!1;return(async()=>{if(!c){l||(o(s()),M.log(`Room snapshot reference cleared, reverted runtime system to defaults`));return}let{data:e,error:n}=await _.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:c});if(n){M.error(`Failed to refresh system from room snapshot change:`,n);return}let r=Array.isArray(e)?e[0]:e;if(!r||typeof r.snapshot_public_id!=`string`){M.warn(`Room snapshot reference changed, but snapshot record was not found`);return}let i=t(r.card_layout),a=t(r.list_layout),u=t(r.attributes);if(!i||!a||!u){M.warn(`Room snapshot refresh returned invalid payload arrays`);return}l||(o({theme:{primary:r.theme_primary,offset:r.theme_offset,background:r.theme_background,border:r.theme_border,background_url:r.background_url},cardLayout:i,listLayout:a,attributes:u,systemName:r.system_name,importDate:r.imported_at,snapshotPublicId:r.snapshot_public_id}),M.log(`Runtime system refreshed from room snapshot change`,{snapshotPublicId:r.snapshot_public_id,systemName:r.system_name}))})(),()=>{l=!0}},[i,e,r,a,o]),{isInitialized:e}};var sy=c`
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
    background-color: ${e=>o(e.theme.BACKGROUND,.5)};
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
    background: ${e=>o(e.theme.BACKGROUND,.3)};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>o(e.theme.OFFSET,.5)};
    border-radius: 5px;
    
    &:hover {
      background: ${e=>o(e.theme.OFFSET,.7)};
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
`,cy=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e2232;
  color: #ffffff;
`,ly=y.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: #9d99ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,uy=y.p`
  margin-top: 20px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;function dy(){let{sceneReady:e,cacheReady:t,playerData:n,roomMetadata:r,sceneMetadata:a}=H(),{isInitialized:o}=oy(),{theme:s}=It(),{t:c}=bt(),[l,u]=(0,V.useState)(`ForgeMain`),[d,f]=(0,V.useState)(!1),p=(0,V.useRef)(!1),m=String(n?.role||``).toUpperCase()===`GM`,h=r,g=n?.id,_=(h[E(j.PARTY_HUD_OPEN,g)]??h[j.PARTY_HUD_OPEN])===!0,v=h[j.SHOW_PLAYER_VIEW]||!1,y=m||v,b=e&&t&&o;return(0,V.useEffect)(()=>{b&&(async()=>{await Fe(),ft()&&await i.broadcast.sendMessage(D.AUTHSYNCCHANNEL,{type:`BS_AUTH_STATE`,source:D.EXTENSIONID,snapshot:$e()},{destination:`LOCAL`})})()},[b]),(0,V.useEffect)(()=>{if(!b)return;let e=i.broadcast.onMessage(D.AUTHSYNCCHANNEL,e=>{let t=e.data;if(!(!t||typeof t!=`object`||t.source===D.EXTENSIONID)){if(t.type===`BS_AUTH_REQUEST`){if(!ft())return;i.broadcast.sendMessage(D.AUTHSYNCCHANNEL,{type:`BS_AUTH_STATE`,source:D.EXTENSIONID,snapshot:$e()},{destination:`LOCAL`});return}t.type!==`BS_AUTH_STATE`||ft()||!t.snapshot||ut(t.snapshot)}});return i.broadcast.sendMessage(D.AUTHSYNCCHANNEL,{type:`BS_AUTH_REQUEST`,source:D.EXTENSIONID},{destination:`LOCAL`}),()=>{e()}},[b]),(0,V.useEffect)(()=>{if(!b)return;let e=!0;return(async()=>{if(_&&!p.current){await V_(),e&&(p.current=!0);return}!_&&p.current&&(await H_(),e&&(p.current=!1))})(),()=>{e=!1}},[b,_]),(0,V.useEffect)(()=>{b&&!y&&l===`ForgeMain`&&u(`Party`)},[b,y,l]),(0,V.useEffect)(()=>{l!==`ForgeMain`&&i.action.setWidth(350)},[l]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(sy,{theme:s}),!e||!t||!o?(0,U.jsxs)(cy,{children:[(0,U.jsx)(ly,{}),(0,U.jsx)(uy,{children:c(e?t?o?`app.loadingFallback`:`app.initializingSystem`:`app.loadingCache`:`app.connectingScene`)})]}):(0,U.jsxs)(tm,{children:[(0,U.jsx)(Ev,{}),(0,U.jsx)(jv,{}),(0,U.jsx)(Bv,{}),(0,U.jsx)(qv,{}),(0,U.jsx)(Yv,{}),(0,U.jsx)(ay,{}),(0,U.jsx)(nm,{theme:s,$backgroundUrl:s.BACKGROUND_URL,children:(0,U.jsx)(iu,{mode:`wait`,children:(()=>{switch(l){case`ForgeMain`:return y?(0,U.jsx)(z_,{},`main`):(0,U.jsx)(fv,{},`party`);case`Settings`:return m?(0,U.jsx)(qm,{},`settings`):(0,U.jsx)(z_,{},`main`);case`Party`:return(0,U.jsx)(fv,{},`party`);case`System`:return m?(0,U.jsx)(Rh,{},`system`):(0,U.jsx)(z_,{},`main`);case`ChatLog`:return(0,U.jsx)($m,{},`chatlog`)}})()})}),(0,U.jsx)(vm,{isOpen:d,currentPage:l,onToggle:()=>f(!d),onNavigate:e=>{if(!y&&e===`ForgeMain`){u(`Party`),f(!1);return}if(!m&&(e===`Settings`||e===`System`)){u(`ForgeMain`),f(!1);return}u(e),f(!1)},canAccessInitiativeList:y})]})]})}var fy=dy,py=class{static{this.ALPHANUMERICTEXTMATCH=/\s[\da-zA-Z]$/}};function my(e){for(let t of gy)if(e.includes(t)){let n=gy[Math.floor(Math.random()*gy.length)];return e.replace(t,n)}return hy(e)}function hy(e){return`${gy[Math.floor(Math.random()*gy.length)]} ${e}`}const gy=`Grizzled.Wily.Stoic.Mellow.Pensive.Shrewd.Cautious.Hardy.Nimble.Tenacious.Gritty.Tolerant.Hardy.Adroit.Resilient.Slight.Stout.Durable.Subtle.Sober.Clever.Brave.Calm.Wise.Cunning.Alert.Swift.Agile.Loyal.Sturdy.Stable.Sneaky.Clever.Resourceful.Shady.Stalwart.Vigilant.Staunch.Fierce.Vigorous.Robust.Fearless.Dauntless.Resolute.Sagacious.Prudent.Judicious.Astute.Savvy.Sharp.Quick.Witty.Smart.Snippy.Crafty.Deft.Sly.Artful.Clever.Sneering.Tough.Rugged.Solid.Strong.Sturdy.Tough.Gritty.Rough.Hardened.Burly.Muscular.Brawny.Rowdy.Forceful.Snorting.Potent.Martial.Speckled.Mottled.Disheveled`.split(`.`);var _y=`com.battle-system.forge/view-unit`,vy=`com.battle-system.forge/view-unit-player`,yy=e=>e.trim().toLowerCase(),by=e=>{if(typeof e!=`string`)return null;let t=e.trim();return t.length>0?t:null},xy=e=>{let t=e.trim();return t?py.ALPHANUMERICTEXTMATCH.test(t)?t.slice(0,-2):t:e},Sy=e=>{let t=typeof e.text?.plainText==`string`?e.text.plainText.trim():``;if(t.length>0)return t;let n=e.metadata?.[T.UNIT_NAME],r=typeof n==`string`?n.trim():``;if(r.length>0)return r;let i=typeof e.name==`string`?e.name.trim():``;return i.length>0?i:typeof e.name==`string`?e.name:``},Cy=async(e,t)=>{let n=await i.viewport.getHeight(),r=n>800?700:n-100;await i.popover.open({id:D.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(e)}`,height:r,width:350,anchorElementId:t,hidePaper:!0,disableClickAway:!0})},wy=async e=>{let t=Array.from(new Set(e.map(e=>e.trim()).filter(e=>e.length>0))),n=new Map;if(t.length===0)return n;let r=await le(),i=new Map;for(let e of r){let t=yy(e.name);if(!t)continue;let n=i.get(t);n?n.push(e):i.set(t,[e])}for(let e of t){let t=yy(e),r=i.get(t)?.[0];!r||!r.metadata||n.set(t,de(r.metadata))}try{let e=await B(t);for(let t of e){let e=yy(t.name);!e||n.has(e)||!t.metadata||n.set(e,de(t.metadata))}let r=await at(t);for(let e of r){let t=yy(e.name);!t||n.has(t)||!e.metadata||n.set(t,de(e.metadata))}}catch(e){M.log(`Remote collection lookup failed, using local collection only`,e)}return n};function Ty({children:e}){let t=H(e=>e.roomMetadata);H(e=>e.sceneMetadata);let n=H(e=>e.items),r=H(e=>e.playerData),a=H(e=>e.systemData),o=t,s=a?.attributes??[],c=by(o[j.HP_CURRENT_BID]),l=by(o[j.HP_MAX_BID]),u=re(o,s),d=c||u.currentHpBid,f=l||u.maxHpBid,p=!!(d&&f),m=o[j.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?!0:o[j.SHOW_MODIFY_UNIT_CONTEXT_MENU]===!0,h=o[j.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===void 0?!0:o[j.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===!0;return(0,V.useEffect)(()=>{i.onReady(()=>{i.contextMenu.create({id:T.ON_LIST,icons:[{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,T.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,T.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,T.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,T.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}}],async onClick(e){if(M.info(`Add to Combat Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[T.ON_LIST]===!0))await i.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[T.ON_LIST],delete t.metadata[T.INITIATIVE]});else{let t=[],r=[],a=new Set(e.items.map(e=>e.id)),s=o[j.USE_DESCRIPTIVE_DUPLICATES]===!0,c=new Set(n.filter(e=>{if(a.has(e.id))return!1;let t=e.metadata[T.UNIT_NAME];return typeof t==`string`&&t.trim().length>0}).map(e=>yy(String(e.metadata[T.UNIT_NAME]))));for(let n of e.items){if(n.metadata[T.FABRICATED]===!0)continue;let e=xy(n.text?.plainText||n.name);t.push(e)}await i.action.setBadgeText(`Retrieving Data.. ⏱️`);let l=await wy(t);await i.action.setBadgeText(void 0);for(let t of e.items){let e={},n=t,i=Sy(n);if(t.metadata[T.FABRICATED]!==!0){let r=xy(n.text?.plainText||t.name),a=l.get(yy(r));a&&Object.assign(e,a),(typeof e[T.UNIT_NAME]!=`string`||!String(e[T.UNIT_NAME]).trim())&&(e[T.UNIT_NAME]=i),e[T.FABRICATED]=!0}if(s){let r=typeof t.metadata[T.UNIT_NAME]==`string`?String(t.metadata[T.UNIT_NAME]).trim():``,a=xy(n.text?.plainText||t.name).trim(),o=String(e[T.UNIT_NAME]||r||i||a||t.name).trim(),s=yy(o);if(s){let e=0;for(;c.has(s)&&e<20;)o=my(o),s=yy(o),e+=1;s&&c.add(s)}e[T.UNIT_NAME]=o}(typeof e[T.UNIT_NAME]!=`string`||!String(e[T.UNIT_NAME]).trim())&&(e[T.UNIT_NAME]=i),e[T.ON_LIST]=!0,e[T.INITIATIVE]=0,r.push({id:t.id,metadata:e})}await i.scene.items.updateItems(e.items,e=>{for(let t of e){let e=r.find(e=>e.id===t.id);if(e&&(Object.assign(t.metadata,e.metadata),o[j.SHOW_NAMES]===!0)){let n=t,r=typeof e.metadata[T.UNIT_NAME]==`string`&&String(e.metadata[T.UNIT_NAME]).trim().length>0?String(e.metadata[T.UNIT_NAME]).trim():Sy(n);n.text&&(n.text.plainText=r)}}})}}}),i.contextMenu.create({id:T.IN_PARTY,icons:[{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,T.IN_PARTY],operator:`!=`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,T.IN_PARTY],operator:`!=`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,T.IN_PARTY],operator:`==`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,T.IN_PARTY],operator:`==`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){M.info(`Add to Party Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[T.IN_PARTY]===!0)?await i.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[T.IN_PARTY]}):await i.scene.items.updateItems(e.items,e=>{for(let t of e)t.metadata[T.IN_PARTY]=!0})}}),i.contextMenu.create({id:_y,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}}],async onClick(e,t){M.info(`View Unit Clicked: ${e.items[0].name}`);let r=e.items[0];if(!r)return;let a={};if(r.metadata[T.FABRICATED]!==!0){let e=r,t=Sy(e),s=xy(e.text?.plainText||r.name);await i.action.setBadgeText(`Retrieving Data.. ⏱️`);let c=await wy([s]);await i.action.setBadgeText(void 0);let l=c.get(yy(s));l&&Object.assign(a,l),(typeof a[T.UNIT_NAME]!=`string`||!String(a[T.UNIT_NAME]).trim())&&(a[T.UNIT_NAME]=t),a[T.FABRICATED]=!0,o[j.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[T.UNIT_NAME]!=null&&e.id!==r.id).map(e=>e.metadata[T.UNIT_NAME]).includes(s)&&(a[T.UNIT_NAME]=my(s)),await i.scene.items.updateItems([r],e=>{let t=e[0];if(Object.assign(t.metadata,a),o[j.SHOW_NAMES]===!0){let e=t,n=typeof a[T.UNIT_NAME]==`string`&&String(a[T.UNIT_NAME]).trim().length>0?String(a[T.UNIT_NAME]).trim():Sy(e);e.text&&(e.text.plainText=n)}})}await Cy(r.id,t)}}),h?i.contextMenu.create({id:vy,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e,t){M.info(`View Unit Clicked: ${e.items[0].name}`);let r=e.items[0];if(!r)return;let a={};if(r.metadata[T.FABRICATED]!==!0){let e=r,t=Sy(e),s=xy(e.text?.plainText||r.name);await i.action.setBadgeText(`Retrieving Data.. ⏱️`);let c=await wy([s]);await i.action.setBadgeText(void 0);let l=c.get(yy(s));l&&Object.assign(a,l),(typeof a[T.UNIT_NAME]!=`string`||!String(a[T.UNIT_NAME]).trim())&&(a[T.UNIT_NAME]=t),a[T.FABRICATED]=!0,o[j.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[T.UNIT_NAME]!=null&&e.id!==r.id).map(e=>e.metadata[T.UNIT_NAME]).includes(s)&&(a[T.UNIT_NAME]=my(s)),await i.scene.items.updateItems([r],e=>{let t=e[0];if(Object.assign(t.metadata,a),o[j.SHOW_NAMES]===!0){let e=t,n=typeof a[T.UNIT_NAME]==`string`&&String(a[T.UNIT_NAME]).trim().length>0?String(a[T.UNIT_NAME]).trim():Sy(e);e.text&&(e.text.plainText=n)}})}await Cy(r.id,t)}}):i.contextMenu.remove(vy).catch(()=>{}),p&&m?i.contextMenu.create({id:T.MODIFY_UNIT,icons:[{icon:`/icon.svg`,label:`Adjust HP`,filter:{some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Adjust HP`,filter:{every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e,t){M.info(`Adjust HP Clicked: ${e.items[0].name}`),await i.popover.open({id:ne.CONTEXT_MENU,url:`/pages/forgecontext.html`,height:50,width:180,anchorElementId:t,hidePaper:!0})},embed:{url:`/pages/forgecontext.html?contextmenu=true`,height:70}}):i.contextMenu.remove(T.MODIFY_UNIT).catch(()=>{})})},[o,p,m,h]),(0,U.jsx)(U.Fragment,{children:e})}Dt.createRoot(document.getElementById(`root`)).render((0,U.jsx)(V.StrictMode,{children:(0,U.jsx)(S,{children:(0,U.jsx)(Nt,{children:(0,U.jsx)(Ty,{children:(0,U.jsx)(Ft,{children:(0,U.jsx)(fy,{})})})})})}));