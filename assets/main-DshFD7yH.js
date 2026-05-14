import{A as e,C as t,D as n,E as r,F as i,L as a,M as o,N as s,O as c,R as l,S as u,T as d,_ as f,b as p,c as m,d as h,f as g,g as _,h as v,j as y,k as b,l as x,m as S,o as C,p as w,s as T,t as E,u as D,v as ee,w as te,x as ne,y as O}from"./defaultgamesystem-CS_inPMT.js";import{$ as re,A as k,At as A,B as ie,C as ae,Ct as oe,D as se,Dt as ce,E as le,Et as ue,F as de,G as fe,H as pe,I as me,J as he,K as ge,L as _e,M as ve,Mt as ye,N as j,Ot as be,P as xe,Q as Se,R as M,S as Ce,St as N,T as we,Tt as Te,U as Ee,V as De,W as Oe,X as ke,Y as Ae,Z as je,_ as Me,_t as Ne,at as Pe,b as Fe,bt as Ie,c as Le,ct as Re,d as ze,dt as Be,et as Ve,f as He,ft as Ue,gt as We,h as Ge,ht as Ke,it as qe,j as Je,jt as Ye,k as P,kt as Xe,l as Ze,lt as Qe,m as $e,mt as et,n as F,nt as I,ot as L,p as tt,pt as nt,q as rt,r as it,rt as at,s as ot,st,tt as ct,u as lt,ut,v as dt,vt as ft,wt as pt,x as mt,xt as ht,y as gt,yt as _t,z as vt}from"./unitCollectionRemote-BwipsdM3.js";import{t as yt}from"./Translation-DgodBNwF.js";import{i as bt,o as xt,r as St,s as R}from"./hpAttributeMapping-BImx7fPa.js";var Ct=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},wt=(e=>e?Ct(e):Ct),z=l(i(),1),Tt=e=>e;function Et(e,t=Tt){let n=z.useSyncExternalStore(e.subscribe,z.useCallback(()=>t(e.getState()),[e,t]),z.useCallback(()=>t(e.getInitialState()),[e,t]));return z.useDebugValue(n),n}var Dt=e=>{let t=wt(e),n=e=>Et(t,e);return Object.assign(n,t),n},Ot=(e=>e?Dt(e):Dt),kt=l(s(),1);const B=Ot(e=>({cacheReady:!1,setCacheReady:t=>e({cacheReady:t}),sceneReady:!1,setSceneReady:t=>e({sceneReady:t}),items:[],setItems:t=>e({items:t}),localItems:[],setLocalItems:t=>e({localItems:t}),sceneMetadata:{},setSceneMetadata:t=>e({sceneMetadata:{...t}}),roomMetadata:{},setRoomMetadata:t=>e({roomMetadata:{...t}}),gridDpi:150,setGridDpi:t=>e({gridDpi:t}),playerData:void 0,setPlayerData:t=>e({playerData:t}),partyData:[],setPartyData:t=>e({partyData:t}),systemData:null,setSystemData:t=>e({systemData:t})}));var At=0;const jt=Ot(e=>({messages:[],initialized:!1,addMessage:t=>{let n=new Date,r=n.getHours(),i=n.getMinutes(),a=r>=12?`PM`:`AM`,o=`${r%12||12}:${i<10?`0${i}`:i} ${a}`;e(e=>({messages:[...e.messages,{id:At++,text:t,timestamp:o}]}))},setInitialized:t=>e({initialized:t})})),Mt=()=>{jt.getState().initialized||(c.broadcast.onMessage(`${t.EXTENSIONID}/chatlog`,e=>{let t=jt.getState().addMessage;typeof e.data==`string`?t(e.data):typeof e.data==`object`&&e.data.message&&t(e.data.message)}),jt.getState().setInitialized(!0))};var V=d(),Nt=`${t.EXTENSIONID}/chatlog`,Pt=`${t.EXTENSIONID}/roll-notification`;function Ft({children:e}){let t=B(e=>e.setItems),n=B(e=>e.setLocalItems),r=B(e=>e.setSceneMetadata),i=B(e=>e.setRoomMetadata),a=B(e=>e.setGridDpi),o=B(e=>e.setPlayerData),s=B(e=>e.setPartyData),l=B(e=>e.setSceneReady),u=B(e=>e.setCacheReady);return(0,z.useEffect)(()=>{let e=(e,t)=>{let n=t[O.ENABLE_CONSOLE_LOG];typeof n==`boolean`&&A.setEnabled(n)},d=e=>{ye(e);let{sceneMetadata:t,roomMetadata:n}=B.getState(),r=n,i=r[O.ENABLE_OBR_NOTIFICATION];if(r[O.SHOW_NOTIFICATION_TO_ALL]===!0){c.broadcast.sendMessage(Nt,{message:e},{destination:`ALL`}),i===!0&&c.broadcast.sendMessage(Pt,{message:e},{destination:`ALL`});return}jt.getState().addMessage(e),i===!0&&c.notification.show(e,`SUCCESS`)},f=({explicitMessage:e,tokenName:t,actionName:n,total:r})=>{if(typeof e==`string`&&e.trim().length>0)return e;let i=t||`Unknown`,a=n||`Action`;return typeof r==`number`&&Number.isFinite(r)?`${i} rolled ${a} for ${r}!`:`${i} rolled ${a}.`};Mt();let p=c.broadcast.onMessage(Pt,e=>{let t=e.data,n=typeof t?.message==`string`?t.message:null;n&&c.notification.show(n,`SUCCESS`)});pt(e=>{let t=oe(e.rollHtml);d(f({tokenName:e.senderName,actionName:e.actionName,total:t}))}),ue(e=>{d(f({explicitMessage:e.message}))}),Te(e=>{d(f({tokenName:e.playerName,actionName:e.result.diceNotation,total:e.result.totalValue}))}),ce(e=>{let t=e.output.trim();d(t.length>0?`${e.senderName} rolled ${e.actionName} for ${e.total}. ${t}`:f({tokenName:e.senderName,actionName:e.actionName,total:e.total}))});let m,h,g,_,v,y,b,x,S=async()=>{let[l,d,f,p,m,S,C,w,T,E,D,ee,te]=await Promise.all([c.scene.items.getItems(),c.scene.local.getItems(),c.scene.getMetadata(),c.room.getMetadata(),c.scene.grid.getDpi(),c.party.getPlayers(),c.player.getSelection(),c.player.getColor(),c.player.getRole(),c.player.getConnectionId(),c.player.getId(),c.player.getMetadata(),c.player.getName()]);t(l),n(d),r(f),i(p),e(f,p),a(m),o({id:D,name:te,connectionId:E,role:T,color:w,selection:C,metadata:ee}),s(S),h=c.scene.items.onChange(t),g=c.scene.local.onChange(n),y=c.scene.grid.onChange(e=>a(e.dpi)),b=c.player.onChange(o),x=c.party.onChange(s),_=c.scene.onMetadataChange(t=>{r(t),e(t,B.getState().roomMetadata)}),v=c.room.onMetadataChange(t=>{i(t),e(B.getState().sceneMetadata,t)}),u(!0),A.log(`CacheManager: Cache is ready`)};return c.onReady(async()=>{let e=await c.scene.isReady();l(e),e&&(A.log(`Scene is ready on initial load, syncing cache...`),await S()),m=c.scene.onReadyChange(async e=>{l(e),e?(A.log(`Scene became ready, syncing cache...`),await S()):(A.log(`Scene is no longer ready, clearing cache...`),u(!1))})}),()=>{m?.(),h?.(),g?.(),_?.(),v?.(),y?.(),b?.(),x?.(),p?.()}},[l,u,t,n,r,i,a,o,s]),(0,V.jsx)(V.Fragment,{children:e})}var It=(0,z.createContext)(void 0);const Lt=({children:e})=>{let[t,n]=(0,z.useState)(v),r=(0,z.useCallback)((e,t,r,i,a)=>{n(n=>n.PRIMARY===e&&n.OFFSET===t&&n.BACKGROUND===r&&n.BORDER===i&&n.BACKGROUND_URL===(a||void 0)?n:_(e,t,r,i,a))},[]);return(0,V.jsx)(It.Provider,{value:{theme:t,setTheme:n,updateThemeFromSystem:r},children:e})},Rt=()=>{let e=(0,z.useContext)(It);if(!e)throw Error(`useForgeTheme must be used within a ThemeProvider`);return e};var zt=(0,z.createContext)({});function Bt(e){let t=(0,z.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Vt=typeof window<`u`,Ht=Vt?z.useLayoutEffect:z.useEffect,Ut=(0,z.createContext)(null);function Wt(e,t){e.indexOf(t)===-1&&e.push(t)}function Gt(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Kt=(e,t,n)=>n>t?t:n<e?e:n,qt={},Jt=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Yt(e){return typeof e==`object`&&!!e}var Xt=e=>/^0[^.\s]+$/u.test(e);function Zt(e){let t;return()=>(t===void 0&&(t=e()),t)}var Qt=e=>e,$t=(e,t)=>n=>t(e(n)),en=(...e)=>e.reduce($t),tn=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},nn=class{constructor(){this.subscriptions=[]}add(e){return Wt(this.subscriptions,e),()=>Gt(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},rn=e=>e*1e3,an=e=>e/1e3;function on(e,t){return t?e*(1e3/t):0}var sn=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,cn=1e-7,ln=12;function un(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=sn(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>cn&&++s<ln);return o}function dn(e,t,n,r){if(e===t&&n===r)return Qt;let i=t=>un(t,0,1,e,n);return e=>e===0||e===1?e:sn(i(e),t,r)}var fn=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,pn=e=>t=>1-e(1-t),mn=dn(.33,1.53,.69,.99),H=pn(mn),hn=fn(H),gn=e=>(e*=2)<1?.5*H(e):.5*(2-2**(-10*(e-1))),_n=e=>1-Math.sin(Math.acos(e)),vn=pn(_n),yn=fn(_n),bn=dn(.42,0,1,1),xn=dn(0,0,.58,1),Sn=dn(.42,0,.58,1),Cn=e=>Array.isArray(e)&&typeof e[0]!=`number`,wn=e=>Array.isArray(e)&&typeof e[0]==`number`,Tn={linear:Qt,easeIn:bn,easeInOut:Sn,easeOut:xn,circIn:_n,circInOut:yn,circOut:vn,backIn:H,backInOut:hn,backOut:mn,anticipate:gn},En=e=>typeof e==`string`,Dn=e=>{if(wn(e)){e.length;let[t,n,r,i]=e;return dn(t,n,r,i)}else if(En(e))return Tn[e],`${e}`,Tn[e];return e},On=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],kn={value:null,addProjectionMetrics:null};function An(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.has(e)||s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),t&&kn.value&&kn.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var jn=40;function Mn(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=On.reduce((e,n)=>(e[n]=An(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=qt.useManualTiming?i.timestamp:performance.now();n=!1,qt.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,jn),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:On.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<On.length;t++)o[On[t]].cancel(e)},state:i,steps:o}}var{schedule:U,cancel:Nn,state:W,steps:Pn}=Mn(typeof requestAnimationFrame<`u`?requestAnimationFrame:Qt,!0),Fn;function In(){Fn=void 0}var Ln={now:()=>(Fn===void 0&&Ln.set(W.isProcessing||qt.useManualTiming?W.timestamp:performance.now()),Fn),set:e=>{Fn=e,queueMicrotask(In)}},Rn={layout:0,mainThread:0,waapi:0},zn=e=>t=>typeof t==`string`&&t.startsWith(e),Bn=zn(`--`),Vn=zn(`var(--`),Hn=e=>Vn(e)?Un.test(e.split(`/*`)[0].trim()):!1,Un=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Wn(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Gn={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Kn={...Gn,transform:e=>Kt(0,1,e)},qn={...Gn,default:1},Jn=e=>Math.round(e*1e5)/1e5,Yn=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Xn(e){return e==null}var Zn=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Qn=(e,t)=>n=>!!(typeof n==`string`&&Zn.test(n)&&n.startsWith(e)||t&&!Xn(n)&&Object.prototype.hasOwnProperty.call(n,t)),$n=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Yn);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},er=e=>Kt(0,255,e),tr={...Gn,transform:e=>Math.round(er(e))},nr={test:Qn(`rgb`,`red`),parse:$n(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+tr.transform(e)+`, `+tr.transform(t)+`, `+tr.transform(n)+`, `+Jn(Kn.transform(r))+`)`};function rr(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var ir={test:Qn(`#`),parse:rr,transform:nr.transform},ar=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),or=ar(`deg`),sr=ar(`%`),G=ar(`px`),cr=ar(`vh`),lr=ar(`vw`),ur=(()=>({...sr,parse:e=>sr.parse(e)/100,transform:e=>sr.transform(e*100)}))(),dr={test:Qn(`hsl`,`hue`),parse:$n(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+sr.transform(Jn(t))+`, `+sr.transform(Jn(n))+`, `+Jn(Kn.transform(r))+`)`},K={test:e=>nr.test(e)||ir.test(e)||dr.test(e),parse:e=>nr.test(e)?nr.parse(e):dr.test(e)?dr.parse(e):ir.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?nr.transform(e):dr.transform(e),getAnimatableNone:e=>{let t=K.parse(e);return t.alpha=0,K.transform(t)}},fr=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function pr(e){return isNaN(e)&&typeof e==`string`&&(e.match(Yn)?.length||0)+(e.match(fr)?.length||0)>0}var mr=`number`,hr=`color`,gr=`var`,_r=`var(`,vr="${}",yr=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function br(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(yr,e=>(K.test(e)?(r.color.push(a),i.push(hr),n.push(K.parse(e))):e.startsWith(_r)?(r.var.push(a),i.push(gr),n.push(e)):(r.number.push(a),i.push(mr),n.push(parseFloat(e))),++a,vr)).split(vr),indexes:r,types:i}}function xr(e){return br(e).values}function Sr(e){let{split:t,types:n}=br(e),r=t.length;return e=>{let i=``;for(let a=0;a<r;a++)if(i+=t[a],e[a]!==void 0){let t=n[a];t===mr?i+=Jn(e[a]):t===hr?i+=K.transform(e[a]):i+=e[a]}return i}}var Cr=e=>typeof e==`number`?0:K.test(e)?K.getAnimatableNone(e):e;function wr(e){let t=xr(e);return Sr(e)(t.map(Cr))}var Tr={test:pr,parse:xr,createTransformer:Sr,getAnimatableNone:wr};function Er(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Dr({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Er(s,r,e+1/3),a=Er(s,r,e),o=Er(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Or(e,t){return n=>n>0?t:e}var q=(e,t,n)=>e+(t-e)*n,kr=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Ar=[ir,nr,dr],jr=e=>Ar.find(t=>t.test(e));function Mr(e){let t=jr(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===dr&&(n=Dr(n)),n}var Nr=(e,t)=>{let n=Mr(e),r=Mr(t);if(!n||!r)return Or(e,t);let i={...n};return e=>(i.red=kr(n.red,r.red,e),i.green=kr(n.green,r.green,e),i.blue=kr(n.blue,r.blue,e),i.alpha=q(n.alpha,r.alpha,e),nr.transform(i))},Pr=new Set([`none`,`hidden`]);function Fr(e,t){return Pr.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Ir(e,t){return n=>q(e,t,n)}function Lr(e){return typeof e==`number`?Ir:typeof e==`string`?Hn(e)?Or:K.test(e)?Nr:Vr:Array.isArray(e)?Rr:typeof e==`object`?K.test(e)?Nr:zr:Or}function Rr(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Lr(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function zr(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Lr(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Br(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Vr=(e,t)=>{let n=Tr.createTransformer(t),r=br(e),i=br(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Pr.has(e)&&!i.values.length||Pr.has(t)&&!r.values.length?Fr(e,t):en(Rr(Br(r,i),i.values),n):(`${e}${t}`,Or(e,t))};function Hr(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?q(e,t,n):Lr(e)(e,t)}var Ur=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>U.update(t,e),stop:()=>Nn(t),now:()=>W.isProcessing?W.timestamp:Ln.now()}},Wr=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Gr=2e4;function Kr(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function qr(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Kr(r),Gr);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:an(i)}}var Jr=5;function Yr(e,t,n){let r=Math.max(t-Jr,0);return on(n-e(r),t-r)}var J={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Xr=.001;function Zr({duration:e=J.duration,bounce:t=J.bounce,velocity:n=J.velocity,mass:r=J.mass}){let i,a;J.maxDuration;let o=1-t;o=Kt(J.minDamping,J.maxDamping,o),e=Kt(J.minDuration,J.maxDuration,an(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=ei(t,o),c=Math.exp(-i);return Xr-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=ei(t**2,o);return(-i(t)+Xr>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Xr+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=$r(i,a,s);if(e=rn(e),isNaN(c))return{stiffness:J.stiffness,damping:J.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Qr=12;function $r(e,t,n){let r=n;for(let n=1;n<Qr;n++)r-=e(r)/t(r);return r}function ei(e,t){return e*Math.sqrt(1-t*t)}var ti=[`duration`,`bounce`],ni=[`stiffness`,`damping`,`mass`];function ri(e,t){return t.some(t=>e[t]!==void 0)}function ii(e){let t={velocity:J.velocity,stiffness:J.stiffness,damping:J.damping,mass:J.mass,isResolvedFromDuration:!1,...e};if(!ri(e,ni)&&ri(e,ti))if(e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Kt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:J.mass,stiffness:i,damping:a}}else{let n=Zr(e);t={...t,...n,mass:J.mass},t.isResolvedFromDuration=!0}return t}function ai(e=J.visualDuration,t=J.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=ii({...n,velocity:-an(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=an(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?J.restSpeed.granular:J.restSpeed.default,i||=v?J.restDelta.granular:J.restDelta.default;let y;if(h<1){let e=ei(_,h);y=t=>o-Math.exp(-h*_*t)*((m+h*_*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}else if(h===1)y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}let b={calculatedDuration:p&&d||null,next:e=>{let t=y(e);if(p)s.done=e>=d;else{let n=e===0?m:0;h<1&&(n=e===0?rn(m):Yr(y,e,t));let a=Math.abs(n)<=r,c=Math.abs(o-t)<=i;s.done=a&&c}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Kr(b),Gr),t=Wr(t=>b.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return b}ai.applyToOptions=e=>{let t=qr(e,100,ai);return e.ease=t.ease,e.duration=rn(t.duration),e.type=`keyframes`,e};function oi({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=ai({keyframes:[f.value,m(f.value)],velocity:Yr(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function si(e,t,n){let r=[],i=n||qt.mix||Hr,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=en(Array.isArray(t)?t[n]||Qt:t,a)),r.push(a)}return r}function ci(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=si(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=tn(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Kt(e[0],e[a-1],t)):l}function li(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=tn(0,t,r);e.push(q(n,1,i))}}function ui(e){let t=[0];return li(t,e.length-1),t}function di(e,t){return e.map(e=>e*t)}function fi(e,t){return e.map(()=>t||Sn).splice(0,e.length-1)}function pi({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=Cn(r)?r.map(Dn):Dn(r),a={done:!1,value:t[0]},o=ci(di(n&&n.length===t.length?n:ui(t),e),t,{ease:Array.isArray(i)?i:fi(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var mi=e=>e!==null;function hi(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(mi),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var gi={decay:oi,inertia:oi,tween:pi,keyframes:pi,spring:ai};function _i(e){typeof e.type==`string`&&(e.type=gi[e.type])}var vi=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},yi=e=>e/100,bi=class extends vi{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Ln.now()&&this.tick(Ln.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},Rn.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;_i(e);let{type:t=pi,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||pi;s!==pi&&typeof o[0]!=`number`&&(this.mixKeyframes=en(yi,Hr(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Kr(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Kt(0,1,n)*o}let b=_?{done:!1,value:l[0]}:y.next(v);i&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==oi&&(b.value=hi(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return an(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+an(e)}get time(){return an(this.currentTime)}set time(e){e=rn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Ln.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=an(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Ur,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Ln.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,Rn.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function xi(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Si=e=>e*180/Math.PI,Ci=e=>Ti(Si(Math.atan2(e[1],e[0]))),wi={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ci,rotateZ:Ci,skewX:e=>Si(Math.atan(e[1])),skewY:e=>Si(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Ti=e=>(e%=360,e<0&&(e+=360),e),Ei=Ci,Di=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Oi=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),ki={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Di,scaleY:Oi,scale:e=>(Di(e)+Oi(e))/2,rotateX:e=>Ti(Si(Math.atan2(e[6],e[5]))),rotateY:e=>Ti(Si(Math.atan2(-e[2],e[0]))),rotateZ:Ei,rotate:Ei,skewX:e=>Si(Math.atan(e[4])),skewY:e=>Si(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Ai(e){return e.includes(`scale`)?1:0}function ji(e,t){if(!e||e===`none`)return Ai(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=ki,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=wi,i=t}if(!i)return Ai(t);let a=r[t],o=i[1].split(`,`).map(Ni);return typeof a==`function`?a(o):o[a]}var Mi=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return ji(n,t)};function Ni(e){return parseFloat(e.trim())}var Pi=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Fi=(()=>new Set(Pi))(),Ii=e=>e===Gn||e===G,Li=new Set([`x`,`y`,`z`]),Ri=Pi.filter(e=>!Li.has(e));function zi(e){let t=[];return Ri.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var Bi={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>ji(t,`x`),y:(e,{transform:t})=>ji(t,`y`)};Bi.translateX=Bi.x,Bi.translateY=Bi.y;var Vi=new Set,Hi=!1,Ui=!1,Wi=!1;function Gi(){if(Ui){let e=Array.from(Vi).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=zi(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Ui=!1,Hi=!1,Vi.forEach(e=>e.complete(Wi)),Vi.clear()}function Ki(){Vi.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ui=!0)})}function qi(){Wi=!0,Ki(),Gi(),Wi=!1}var Ji=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Vi.add(this),Hi||(Hi=!0,U.read(Ki),U.resolveKeyframes(Gi))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}xi(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Vi.delete(this)}cancel(){this.state===`scheduled`&&(Vi.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Yi=e=>e.startsWith(`--`);function Xi(e,t,n){Yi(t)?e.style.setProperty(t,n):e.style[t]=n}var Zi=Zt(()=>window.ScrollTimeline!==void 0),Qi={};function $i(e,t){let n=Zt(e);return()=>Qi[t]??n()}var ea=$i(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),ta=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,na={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:ta([0,.65,.55,1]),circOut:ta([.55,0,1,.45]),backIn:ta([.31,.01,.66,-.59]),backOut:ta([.33,1.53,.69,.99])};function ra(e,t){if(e)return typeof e==`function`?ea()?Wr(e,t):`ease-out`:wn(e)?ta(e):Array.isArray(e)?e.map(e=>ra(e,t)||na.easeOut):na[e]}function ia(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=ra(s,i);Array.isArray(d)&&(u.easing=d),kn.value&&Rn.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return kn.value&&p.finished.finally(()=>{Rn.waapi--}),p}function aa(e){return typeof e==`function`&&`applyToOptions`in e}function oa({type:e,...t}){return aa(e)&&ea()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var sa=class extends vi{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=oa(e);this.animation=ia(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=hi(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):Xi(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return an(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+an(e)}get time(){return an(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=rn(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Zi()?(this.animation.timeline=e,Qt):t(this)}},ca={anticipate:gn,backInOut:hn,circInOut:yn};function la(e){return e in ca}function ua(e){typeof e.ease==`string`&&la(e.ease)&&(e.ease=ca[e.ease])}var da=10,fa=class extends sa{constructor(e){ua(e),_i(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new bi({...a,autoplay:!1}),s=Math.max(da,Ln.now()-this.startTime),c=Kt(0,da,s-da);t.setWithVelocity(o.sample(Math.max(0,s-c)).value,o.sample(s).value,c),o.stop()}},pa=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(Tr.test(e)||e===`0`)&&!e.startsWith(`url(`));function ma(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function ha(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=pa(i,t),s=pa(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:ma(e)||(n===`spring`||aa(n))&&r}function ga(e){e.duration=0,e.type=`keyframes`}var _a=new Set([`opacity`,`clipPath`,`filter`,`transform`]),va=Zt(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function ya(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:s,transformTemplate:c}=t.owner.getProps();return va()&&n&&_a.has(n)&&(n!==`transform`||!c)&&!s&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var ba=40,xa=class extends vi{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Ln.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||Ji)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Ln.now(),ha(e,i,a,o)||((qt.instantAnimations||!s)&&l?.(hi(e,n,t)),e[0]=e[e.length-1],ga(n),n.repeat=0);let u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>ba?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!c&&ya(u),f=u.motionValue?.owner?.current,p=d?new fa({...u,element:f}):new bi(u);p.finished.then(()=>{this.notifyFinished()}).catch(Qt),this.pendingTimeline&&=(this.stopTimeline=p.attachTimeline(this.pendingTimeline),void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),qi()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Sa(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Ca=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function wa(e){let t=Ca.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Ta(e,t,n=1){`${e}`;let[r,i]=wa(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Jt(e)?parseFloat(e):e}return Hn(i)?Ta(i,t,n+1):i}var Ea={type:`spring`,stiffness:500,damping:25,restSpeed:10},Da=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Oa={type:`keyframes`,duration:.8},ka={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Aa=(e,{keyframes:t})=>t.length>2?Oa:Fi.has(e)?e.startsWith(`scale`)?Da(t[1]):Ea:ka,ja=e=>e!==null;function Ma(e,{repeat:t,repeatType:n=`loop`},r){let i=e.filter(ja),a=t&&n!==`loop`&&t%2==1?0:i.length-1;return!a||r===void 0?i[a]:r}function Na(e,t){return e?.[t]??e?.default??e}function Pa({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:l,...u}){return!!Object.keys(u).length}var Fa=(e,t,n,r={},i,a)=>o=>{let s=Na(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=rn(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Pa(s)||Object.assign(u,Aa(e,u)),u.duration&&=rn(u.duration),u.repeatDelay&&=rn(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(ga(u),u.delay===0&&(d=!0)),(qt.instantAnimations||qt.skipAnimations)&&(d=!0,ga(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Ma(u.keyframes,s);if(e!==void 0){U.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new bi(u):new xa(u)};function Ia(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function La(e,t,n,r){if(typeof t==`function`){let[i,a]=Ia(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Ia(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Ra(e,t,n){let r=e.getProps();return La(r,t,n===void 0?r.custom:n,e)}var za=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Pi]),Ba=30,Va=e=>!isNaN(parseFloat(e)),Ha={current:void 0},Ua=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Ln.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ln.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Va(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new nn);let n=this.events[e].add(t);return e===`change`?()=>{n(),U.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ha.current&&Ha.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Ln.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ba)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Ba);return on(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Wa(e,t){return new Ua(e,t)}var Ga=e=>Array.isArray(e);function Ka(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Wa(n))}function qa(e){return Ga(e)?e[e.length-1]||0:e}function Ja(e,t){let{transitionEnd:n={},transition:r={},...i}=Ra(e,t)||{};for(let t in i={...i,...n},i)Ka(e,t,qa(i[t]))}var Ya=e=>!!(e&&e.getVelocity);function Xa(e){return!!(Ya(e)&&e.add)}function Za(e,t){let n=e.getValue(`willChange`);if(Xa(n))return n.add(t);if(!n&&qt.WillChange){let n=new qt.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Qa(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var $a=`data-`+Qa(`framerAppearId`);function eo(e){return e.props[$a]}function to({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function no(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);let c=[],l=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||l&&to(l,t))continue;let o={delay:n,...Na(a||{},t)},u=r.get();if(u!==void 0&&!r.isAnimating&&!Array.isArray(i)&&i===u&&!o.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){let n=eo(e);if(n){let e=window.MotionHandoffAnimation(n,t,U);e!==null&&(o.startTime=e,d=!0)}}Za(e,t),r.start(Fa(t,r,i,e.shouldReduceMotion&&za.has(t)?{type:!1}:o,e,d));let f=r.animation;f&&c.push(f)}return o&&Promise.all(c).then(()=>{U.update(()=>{o&&Ja(e,o)})}),c}function ro(e,t,n={}){let r=Ra(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(no(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return io(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function io(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(ro(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Sa(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function ao(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>ro(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=ro(e,t,n);else{let i=typeof t==`function`?Ra(e,t,n.custom):t;r=Promise.all(no(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var oo={test:e=>e===`auto`,parse:e=>e},so=e=>t=>t.test(e),co=[Gn,G,sr,or,lr,cr,oo],lo=e=>co.find(so(e));function uo(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||Xt(e)}var fo=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function po(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Yn)||[];if(!r)return e;let i=n.replace(r,``),a=fo.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var mo=/\b([a-z-]*)\(.*?\)/gu,ho={...Tr,getAnimatableNone:e=>{let t=e.match(mo);return t?t.map(po).join(` `):e}},go={...Gn,transform:Math.round},_o={borderWidth:G,borderTopWidth:G,borderRightWidth:G,borderBottomWidth:G,borderLeftWidth:G,borderRadius:G,borderTopLeftRadius:G,borderTopRightRadius:G,borderBottomRightRadius:G,borderBottomLeftRadius:G,width:G,maxWidth:G,height:G,maxHeight:G,top:G,right:G,bottom:G,left:G,inset:G,insetBlock:G,insetBlockStart:G,insetBlockEnd:G,insetInline:G,insetInlineStart:G,insetInlineEnd:G,padding:G,paddingTop:G,paddingRight:G,paddingBottom:G,paddingLeft:G,paddingBlock:G,paddingBlockStart:G,paddingBlockEnd:G,paddingInline:G,paddingInlineStart:G,paddingInlineEnd:G,margin:G,marginTop:G,marginRight:G,marginBottom:G,marginLeft:G,marginBlock:G,marginBlockStart:G,marginBlockEnd:G,marginInline:G,marginInlineStart:G,marginInlineEnd:G,fontSize:G,backgroundPositionX:G,backgroundPositionY:G,rotate:or,rotateX:or,rotateY:or,rotateZ:or,scale:qn,scaleX:qn,scaleY:qn,scaleZ:qn,skew:or,skewX:or,skewY:or,distance:G,translateX:G,translateY:G,translateZ:G,x:G,y:G,z:G,perspective:G,transformPerspective:G,opacity:Kn,originX:ur,originY:ur,originZ:G,zIndex:go,fillOpacity:Kn,strokeOpacity:Kn,numOctaves:go},vo={..._o,color:K,backgroundColor:K,outlineColor:K,fill:K,stroke:K,borderColor:K,borderTopColor:K,borderRightColor:K,borderBottomColor:K,borderLeftColor:K,filter:ho,WebkitFilter:ho},yo=e=>vo[e];function bo(e,t){let n=yo(e);return n!==ho&&(n=Tr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var xo=new Set([`auto`,`none`,`0`]);function So(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!xo.has(t)&&br(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=bo(n,i)}var Co=class extends Ji{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Hn(r))){let i=Ta(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!za.has(n)||e.length!==2)return;let[r,i]=e,a=lo(r),o=lo(i);if(Wn(r)!==Wn(i)&&Bi[n]){this.needsMeasurement=!0;return}if(a!==o)if(Ii(a)&&Ii(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Bi[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||uo(e[t]))&&n.push(t);n.length&&So(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Bi[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Bi[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function wo(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var To=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Eo(e){return Yt(e)&&`offsetHeight`in e}var{schedule:Do,cancel:Oo}=Mn(queueMicrotask,!1),ko={x:!1,y:!1};function Ao(){return ko.x||ko.y}function jo(e){return e===`x`||e===`y`?ko[e]?null:(ko[e]=!0,()=>{ko[e]=!1}):ko.x||ko.y?null:(ko.x=ko.y=!0,()=>{ko.x=ko.y=!1})}function Mo(e,t){let n=wo(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function No(e){return!(e.pointerType===`touch`||Ao())}function Po(e,t,n={}){let[r,i,a]=Mo(e,n),o=e=>{if(!No(e))return;let{target:n}=e,r=t(n,e);if(typeof r!=`function`||!n)return;let a=e=>{No(e)&&(r(e),n.removeEventListener(`pointerleave`,a))};n.addEventListener(`pointerleave`,a,i)};return r.forEach(e=>{e.addEventListener(`pointerenter`,o,i)}),a}var Fo=(e,t)=>t?e===t?!0:Fo(e,t.parentElement):!1,Io=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Lo=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Ro(e){return Lo.has(e.tagName)||e.isContentEditable===!0}var zo=new WeakSet;function Bo(e){return t=>{t.key===`Enter`&&e(t)}}function Vo(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Ho=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Bo(()=>{if(zo.has(n))return;Vo(n,`down`);let e=Bo(()=>{Vo(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Vo(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Uo(e){return Io(e)&&!Ao()}function Wo(e,t,n={}){let[r,i,a]=Mo(e,n),o=e=>{let r=e.currentTarget;if(!Uo(e))return;zo.add(r);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),zo.has(r)&&zo.delete(r),Uo(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Fo(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Eo(e)&&(e.addEventListener(`focus`,e=>Ho(e,i)),!Ro(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Go(e){return Yt(e)&&`ownerSVGElement`in e}function Ko(e){return Go(e)&&e.tagName===`svg`}var qo=[...co,K,Tr],Jo=e=>qo.find(so(e)),Yo=()=>({translate:0,scale:1,origin:0,originPoint:0}),Xo=()=>({x:Yo(),y:Yo()}),Zo=()=>({min:0,max:0}),Qo=()=>({x:Zo(),y:Zo()}),$o={current:null},es={current:!1},ts=typeof window<`u`;function ns(){if(es.current=!0,ts)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>$o.current=e.matches;e.addEventListener(`change`,t),t()}else $o.current=!1}var rs=new WeakMap;function is(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function as(e){return typeof e==`string`||Array.isArray(e)}var os=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],ss=[`initial`,...os];function cs(e){return is(e.animate)||ss.some(t=>as(e[t]))}function ls(e){return!!(cs(e)||e.variants)}function us(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Ya(i))e.addValue(r,i);else if(Ya(a))e.addValue(r,Wa(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Wa(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var ds=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],fs={};function ps(e){fs=e}function ms(){return fs}var hs=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ji,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Ln.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,U.render(this.render,!1,!0))};let{latestValues:s,renderState:c}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!i,this.isControllingVariants=cs(t),this.isVariantNode=ls(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in u){let t=u[e];s[e]!==void 0&&Ya(t)&&t.set(s[e])}}mount(e){this.current=e,rs.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(es.current||ns(),this.shouldReduceMotion=$o.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in this.projection&&this.projection.unmount(),Nn(this.notifyUpdate),Nn(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let n=Fi.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&U.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in fs){let t=fs[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qo()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<ds.length;t++){let n=ds[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=us(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Wa(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Jt(n)||Xt(n))?n=parseFloat(n):!Jo(n)&&Tr.test(t)&&(n=bo(e,t)),this.setBaseTarget(e,Ya(n)?n.get():n)),Ya(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=La(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Ya(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new nn),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Do.render(this.render)}},gs=class extends hs{constructor(){super(...arguments),this.KeyframeResolver=Co}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Ya(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},_s=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function vs({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function ys({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function bs(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function xs(e){return e===void 0||e===1}function Ss({scale:e,scaleX:t,scaleY:n}){return!xs(e)||!xs(t)||!xs(n)}function Cs(e){return Ss(e)||ws(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ws(e){return Ts(e.x)||Ts(e.y)}function Ts(e){return e&&e!==`0%`}function Es(e,t,n){return n+t*(e-n)}function Ds(e,t,n,r,i){return i!==void 0&&(e=Es(e,i,r)),Es(e,n,r)+t}function Os(e,t=0,n=1,r,i){e.min=Ds(e.min,t,n,r,i),e.max=Ds(e.max,t,n,r,i)}function ks(e,{x:t,y:n}){Os(e.x,t.translate,t.scale,t.originPoint),Os(e.y,n.translate,n.scale,n.originPoint)}var As=.999999999999,js=1.0000000000001;function Ms(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Fs(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,ks(e,o)),r&&Cs(a.latestValues)&&Fs(e,a.latestValues))}t.x<js&&t.x>As&&(t.x=1),t.y<js&&t.y>As&&(t.y=1)}function Ns(e,t){e.min+=t,e.max+=t}function Ps(e,t,n,r,i=.5){Os(e,t,n,q(e.min,e.max,i),r)}function Fs(e,t){Ps(e.x,t.x,t.scaleX,t.scale,t.originX),Ps(e.y,t.y,t.scaleY,t.scale,t.originY)}function Is(e,t){return vs(bs(e.getBoundingClientRect(),t))}function Ls(e,t,n){let r=Is(e,n),{scroll:i}=t;return i&&(Ns(r.x,i.offset.x),Ns(r.y,i.offset.y)),r}var Rs={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},zs=Pi.length;function Bs(e,t,n){let r=``,i=!0;for(let a=0;a<zs;a++){let o=Pi[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=To(s,_o[o]);if(!c){i=!1;let t=Rs[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Vs(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Fi.has(e)){o=!0;continue}else if(Bn(e)){i[e]=n;continue}else{let t=To(n,_o[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Bs(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Hs(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Us(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Ws={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(G.test(e))e=parseFloat(e);else return e;return`${Us(e,t.target.x)}% ${Us(e,t.target.y)}%`}},Gs={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=Tr.parse(e);if(i.length>5)return r;let a=Tr.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=q(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Ks={borderRadius:{...Ws,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:Ws,borderTopRightRadius:Ws,borderBottomLeftRadius:Ws,borderBottomRightRadius:Ws,boxShadow:Gs};function qs(e,{layout:t,layoutId:n}){return Fi.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Ks[e]||e===`opacity`)}function Js(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Ya(r[t])||i&&Ya(i[t])||qs(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Ys(e){return window.getComputedStyle(e)}var Xs=class extends gs{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Hs}readValueFromInstance(e,t){if(Fi.has(t))return this.projection?.isProjecting?Ai(t):Mi(e,t);{let n=Ys(e),r=(Bn(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Is(e,t)}build(e,t,n){Vs(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Js(e,t,n)}},Zs={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Qs={offset:`strokeDashoffset`,array:`strokeDasharray`};function $s(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Zs:Qs;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var ec=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function tc(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Vs(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of ec)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&$s(d,i,a,o,!1)}var nc=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),rc=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function ic(e,t,n,r){for(let n in Hs(e,t,void 0,r),t.attrs)e.setAttribute(nc.has(n)?n:Qa(n),t.attrs[n])}function ac(e,t,n){let r=Js(e,t,n);for(let n in e)if(Ya(e[n])||Ya(t[n])){let t=Pi.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var oc=class extends gs{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Qo}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Fi.has(t)){let e=yo(t);return e&&e.default||0}return t=nc.has(t)?t:Qa(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return ac(e,t,n)}build(e,t,n){tc(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){ic(e,t,n,r)}mount(e){this.isSVGTag=rc(e.tagName),super.mount(e)}},sc=ss.length;function cc(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&cc(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<sc;n++){let r=ss[n],i=e.props[r];(as(i)||i===!1)&&(t[r]=i)}return t}function lc(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var uc=[...os].reverse(),dc=os.length;function fc(e){return t=>Promise.all(t.map(({animation:t,options:n})=>ao(e,t,n)))}function pc(e){let t=fc(e),n=gc(),r=!0,i=t=>(n,r)=>{let i=Ra(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(n){t=n(e)}function o(a){let{props:o}=e,s=cc(e.parent)||{},c=[],l=new Set,u={},d=1/0;for(let t=0;t<dc;t++){let f=uc[t],p=n[f],m=o[f]===void 0?s[f]:o[f],h=as(m),g=f===a?p.isActive:null;g===!1&&(d=t);let _=m===s[f]&&m!==o[f]&&h;if(_&&r&&e.manuallyAnimateOnMount&&(_=!1),p.protectedKeys={...u},!p.isActive&&g===null||!m&&!p.prevProp||is(m)||typeof m==`boolean`)continue;let v=mc(p.prevProp,m),y=v||f===a&&p.isActive&&!_&&h||t>d&&h,b=!1,x=Array.isArray(m)?m:[m],S=x.reduce(i(f),{});g===!1&&(S={});let{prevResolvedValues:C={}}=p,w={...C,...S},T=t=>{y=!0,l.has(t)&&(b=!0,l.delete(t)),p.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in w){let t=S[e],n=C[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Ga(t)&&Ga(n)?!lc(t,n):t!==n,r?t==null?l.add(e):T(e):t!==void 0&&l.has(e)?T(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=S,p.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(y=!1);let E=_&&v;y&&(!E||b)&&c.push(...x.map(t=>{let n={type:f};if(typeof t==`string`&&r&&!E&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Ra(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Sa(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(l.size){let t={};if(typeof o.initial!=`boolean`){let n=Ra(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}l.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),c.push({animation:t})}let f=!!c.length;return r&&(o.initial===!1||o.initial===o.animate)&&!e.manuallyAnimateOnMount&&(f=!1),r=!1,f?t(c):Promise.resolve()}function s(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=o(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=gc()}}}function mc(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!lc(t,e):!1}function hc(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gc(){return{animate:hc(!0),whileInView:hc(),whileHover:hc(),whileTap:hc(),whileDrag:hc(),whileFocus:hc(),exit:hc()}}function _c(e,t){e.min=t.min,e.max=t.max}function vc(e,t){_c(e.x,t.x),_c(e.y,t.y)}function yc(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var bc=1e-4,xc=1-bc,Sc=1+bc,Cc=.01,wc=0-Cc,Tc=0+Cc;function Ec(e){return e.max-e.min}function Dc(e,t,n){return Math.abs(e-t)<=n}function Oc(e,t,n,r=.5){e.origin=r,e.originPoint=q(t.min,t.max,e.origin),e.scale=Ec(n)/Ec(t),e.translate=q(n.min,n.max,e.origin)-e.originPoint,(e.scale>=xc&&e.scale<=Sc||isNaN(e.scale))&&(e.scale=1),(e.translate>=wc&&e.translate<=Tc||isNaN(e.translate))&&(e.translate=0)}function kc(e,t,n,r){Oc(e.x,t.x,n.x,r?r.originX:void 0),Oc(e.y,t.y,n.y,r?r.originY:void 0)}function Ac(e,t,n){e.min=n.min+t.min,e.max=e.min+Ec(t)}function jc(e,t,n){Ac(e.x,t.x,n.x),Ac(e.y,t.y,n.y)}function Mc(e,t,n){e.min=t.min-n.min,e.max=e.min+Ec(t)}function Nc(e,t,n){Mc(e.x,t.x,n.x),Mc(e.y,t.y,n.y)}function Pc(e,t,n,r,i){return e-=t,e=Es(e,1/n,r),i!==void 0&&(e=Es(e,1/i,r)),e}function Fc(e,t=0,n=1,r=.5,i,a=e,o=e){if(sr.test(t)&&(t=parseFloat(t),t=q(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=q(a.min,a.max,r);e===a&&(s-=t),e.min=Pc(e.min,t,n,s,i),e.max=Pc(e.max,t,n,s,i)}function Ic(e,t,[n,r,i],a,o){Fc(e,t[n],t[r],t[i],t.scale,a,o)}var Lc=[`x`,`scaleX`,`originX`],Rc=[`y`,`scaleY`,`originY`];function zc(e,t,n,r){Ic(e.x,t,Lc,n?n.x:void 0,r?r.x:void 0),Ic(e.y,t,Rc,n?n.y:void 0,r?r.y:void 0)}function Bc(e){return e.translate===0&&e.scale===1}function Vc(e){return Bc(e.x)&&Bc(e.y)}function Hc(e,t){return e.min===t.min&&e.max===t.max}function Uc(e,t){return Hc(e.x,t.x)&&Hc(e.y,t.y)}function Wc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Gc(e,t){return Wc(e.x,t.x)&&Wc(e.y,t.y)}function Kc(e){return Ec(e.x)/Ec(e.y)}function qc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Jc(e){return[e(`x`),e(`y`)]}function Yc(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Xc=[`TopLeft`,`TopRight`,`BottomLeft`,`BottomRight`],Zc=Xc.length,Qc=e=>typeof e==`string`?parseFloat(e):e,$c=e=>typeof e==`number`||G.test(e);function el(e,t,n,r,i,a){i?(e.opacity=q(0,n.opacity??1,nl(r)),e.opacityExit=q(t.opacity??1,0,rl(r))):a&&(e.opacity=q(t.opacity??1,n.opacity??1,r));for(let i=0;i<Zc;i++){let a=`border${Xc[i]}Radius`,o=tl(t,a),s=tl(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||$c(o)===$c(s)?(e[a]=Math.max(q(Qc(o),Qc(s),r),0),(sr.test(s)||sr.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=q(t.rotate||0,n.rotate||0,r))}function tl(e,t){return e[t]===void 0?e.borderRadius:e[t]}var nl=il(0,.5,vn),rl=il(.5,.95,Qt);function il(e,t,n){return r=>r<e?0:r>t?1:n(tn(e,t,r))}function al(e,t,n){let r=Ya(e)?e:Wa(e);return r.start(Fa(``,r,t,n)),r.animation}function ol(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var sl=(e,t)=>e.depth-t.depth,cl=class{constructor(){this.children=[],this.isDirty=!1}add(e){Wt(this.children,e),this.isDirty=!0}remove(e){Gt(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(sl),this.isDirty=!1,this.children.forEach(e)}};function ll(e,t){let n=Ln.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Nn(r),e(a-t))};return U.setup(r,!0),()=>Nn(r)}function ul(e){return Ya(e)?e.get():e}var dl=class{constructor(){this.members=[]}add(e){Wt(this.members,e),e.scheduleRender()}remove(e){if(Gt(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t=this.members.findIndex(t=>e===t);if(t===0)return!1;let n;for(let e=t;e>=0;e--){let t=this.members[e];if(t.isPresent!==!1){n=t;break}}return n?(this.promote(n),!0):!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender();let r=n.options.layoutDependency,i=e.options.layoutDependency;r!==void 0&&i!==void 0&&r===i||(e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0));let{crossfade:a}=e.options;a===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}},fl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},pl={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},ml=[``,`X`,`Y`,`Z`],hl=1e3,gl=0;function _l(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function vl(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=eo(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,U,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&vl(r)}function yl({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=gl++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,kn.value&&(pl.nodes=pl.calculatedTargetDeltas=pl.calculatedProjections=0),this.nodes.forEach(Sl),this.nodes.forEach(kl),this.nodes.forEach(Al),this.nodes.forEach(Cl),kn.addProjectionMetrics&&kn.addProjectionMetrics(pl)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new cl)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new nn),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Go(t)&&!Ko(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;U.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=ll(i,250),fl.hasAnimatedSinceResize&&(fl.hasAnimatedSinceResize=!1,this.nodes.forEach(Ol)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Ll,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Gc(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Na(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||Ol(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Nn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(jl),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&vl(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Tl);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(El);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Dl),this.nodes.forEach(bl),this.nodes.forEach(xl)):this.nodes.forEach(El),this.clearAllSnapshots();let e=Ln.now();W.delta=Kt(0,1e3/60,e-W.timestamp),W.timestamp=e,W.isProcessing=!0,Pn.update.process(W),Pn.preRender.process(W),Pn.render.process(W),W.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Do.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(wl),this.sharedNodes.forEach(Ml)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,U.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){U.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ec(this.snapshot.measuredBox.x)&&!Ec(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Qo(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Vc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Cs(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Vl(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Qo();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Ul))){let{scroll:e}=this.root;e&&(Ns(t.x,e.offset.x),Ns(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Qo();if(vc(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&vc(t,e),Ns(t.x,i.offset.x),Ns(t.y,i.offset.y))}return t}applyTransform(e,t=!1){let n=Qo();vc(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Fs(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),Cs(r.latestValues)&&Fs(n,r.latestValues)}return Cs(this.latestValues)&&Fs(n,this.latestValues),n}removeTransform(e){let t=Qo();vc(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!Cs(n.latestValues))continue;Ss(n.latestValues)&&n.updateSnapshot();let r=Qo();vc(r,n.measurePageBox()),zc(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return Cs(this.latestValues)&&zc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==W.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=W.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Qo(),this.targetWithTransforms=Qo()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),jc(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):vc(this.target,this.layout.layoutBox),ks(this.target,this.targetDelta)):vc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),kn.value&&pl.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Ss(this.parent.latestValues)||ws(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qo(),this.relativeTargetOrigin=Qo(),Nc(this.relativeTargetOrigin,t,n),vc(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===W.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;vc(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Ms(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Qo());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(yc(this.prevProjectionDelta.x,this.projectionDelta.x),yc(this.prevProjectionDelta.y,this.projectionDelta.y)),kc(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!qc(this.projectionDelta.x,this.prevProjectionDelta.x)||!qc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),kn.value&&pl.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Xo(),this.projectionDelta=Xo(),this.projectionDeltaWithTransform=Xo()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Xo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=Qo(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Il));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;Nl(a.x,e.x,n),Nl(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Nc(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Fl(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Uc(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=Qo(),vc(d,this.relativeTarget)),s&&(this.animationValues=i,el(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Nn(this.pendingAnimation),void 0),this.pendingAnimation=U.update(()=>{fl.hasAnimatedSinceResize=!0,Rn.layout++,this.motionValue||=Wa(0),this.currentAnimation=al(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Rn.layout--},onComplete:()=>{Rn.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(hl),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Hl(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||Qo();let t=Ec(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Ec(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}vc(t,n),Fs(t,i),kc(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new dl),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&_l(`z`,e,r,this.animationValues);for(let t=0;t<ml.length;t++)_l(`rotate${ml[t]}`,e,r,this.animationValues),_l(`skew${ml[t]}`,e,r,this.animationValues);for(let t in e.render(),r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=ul(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=ul(t?.pointerEvents)||``),this.hasProjected&&!Cs(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Yc(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;for(let t in e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit,Ks){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Ks[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?ul(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Tl),this.root.sharedNodes.clear()}}}function bl(e){e.updateLayout()}function xl(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;i===`size`?Jc(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Ec(r);r.min=n[e].min,r.max=r.min+i}):Hl(i,t.layoutBox,n)&&Jc(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Ec(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Xo();kc(o,n,t.layoutBox);let s=Xo();a?kc(s,e.applyTransform(r,!0),t.measuredBox):kc(s,n,t.layoutBox);let c=!Vc(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=Qo();Nc(o,t.layoutBox,i.layoutBox);let s=Qo();Nc(s,n,a.layoutBox),Gc(o,s)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Sl(e){kn.value&&pl.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function Cl(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function wl(e){e.clearSnapshot()}function Tl(e){e.clearMeasurements()}function El(e){e.isLayoutDirty=!1}function Dl(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Ol(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function kl(e){e.resolveTargetDelta()}function Al(e){e.calcProjection()}function jl(e){e.resetSkewAndRotation()}function Ml(e){e.removeLeadSnapshot()}function Nl(e,t,n){e.translate=q(t.translate,0,n),e.scale=q(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Pl(e,t,n,r){e.min=q(t.min,n.min,r),e.max=q(t.max,n.max,r)}function Fl(e,t,n,r){Pl(e.x,t.x,n.x,r),Pl(e.y,t.y,n.y,r)}function Il(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Ll={duration:.45,ease:[.4,0,.1,1]},Rl=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),zl=Rl(`applewebkit/`)&&!Rl(`chrome/`)?Math.round:Qt;function Bl(e){e.min=zl(e.min),e.max=zl(e.max)}function Vl(e){Bl(e.x),Bl(e.y)}function Hl(e,t,n){return e===`position`||e===`preserve-aspect`&&!Dc(Kc(t),Kc(n),.2)}function Ul(e){return e!==e.root&&e.scroll?.wasRoot}var Wl=yl({attachResizeListener:(e,t)=>ol(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Gl={current:void 0},Kl=yl({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Gl.current){let e=new Wl({});e.mount(window),e.setOptions({layoutScroll:!0}),Gl.current=e}return Gl.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),ql=(0,z.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Jl(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Yl(...e){return t=>{let n=!1,r=e.map(e=>{let r=Jl(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Jl(e[t],null)}}}}function Xl(...e){return z.useCallback(Yl(...e),e)}var Zl=class extends z.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=Eo(e)&&e.offsetWidth||0,r=Eo(e)&&e.offsetHeight||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left,i.bottom=r-i.height-i.top}return null}componentDidUpdate(){}render(){return this.props.children}};function Ql({children:e,isPresent:t,anchorX:n,anchorY:r,root:i}){let a=(0,z.useId)(),o=(0,z.useRef)(null),s=(0,z.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=(0,z.useContext)(ql),l=Xl(o,e.props?.ref??e?.ref);return(0,z.useInsertionEffect)(()=>{let{width:e,height:l,top:u,left:d,right:f,bottom:p}=s.current;if(t||!o.current||!e||!l)return;let m=n===`left`?`left: ${d}`:`right: ${f}`,h=r===`bottom`?`bottom: ${p}`:`top: ${u}`;o.current.dataset.motionPopId=a;let g=document.createElement(`style`);c&&(g.nonce=c);let _=i??document.head;return _.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${m}px !important;
            ${h}px !important;
          }
        `),()=>{_.contains(g)&&_.removeChild(g)}},[t]),(0,V.jsx)(Zl,{isPresent:t,childRef:o,sizeRef:s,children:z.cloneElement(e,{ref:l})})}var $l=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Bt(eu),d=(0,z.useId)(),f=!0,p=(0,z.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,z.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),z.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),o===`popLayout`&&(e=(0,V.jsx)(Ql,{isPresent:n,anchorX:s,anchorY:c,root:l,children:e})),(0,V.jsx)(Ut.Provider,{value:p,children:e})};function eu(){return new Map}function tu(e=!0){let t=(0,z.useContext)(Ut);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,z.useId)();(0,z.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,z.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var nu=e=>e.key||``;function ru(e){let t=[];return z.Children.forEach(e,e=>{(0,z.isValidElement)(e)&&t.push(e)}),t}var iu=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=tu(o),f=(0,z.useMemo)(()=>ru(e),[e]),p=o&&!u?[]:f.map(nu),m=(0,z.useRef)(!0),h=(0,z.useRef)(f),g=Bt(()=>new Map),_=(0,z.useRef)(new Set),[v,y]=(0,z.useState)(f),[b,x]=(0,z.useState)(f);Ht(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=nu(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=nu(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(ru(e)),y(f),null}let{forceRender:C}=(0,z.useContext)(zt);return(0,V.jsx)(V.Fragment,{children:b.map(e=>{let v=nu(e),y=o&&!u?!1:f===b||p.includes(v);return(0,V.jsx)($l,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(_.current.add(v),g.has(v))g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},au=(0,z.createContext)({strict:!1}),ou={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},su=!1;function cu(){if(su)return;let e={};for(let t in ou)e[t]={isEnabled:e=>ou[t].some(t=>!!e[t])};ps(e),su=!0}function lu(){return cu(),ms()}function uu(e){let t=lu();for(let n in e)t[n]={...t[n],...e[n]};ps(t)}var du=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(`.`));function fu(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||du.has(e)}var pu=e=>!fu(e);function mu(e){typeof e==`function`&&(pu=t=>t.startsWith(`on`)?!fu(t):e(t))}try{mu((h(),a(D)).default)}catch{}function hu(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||(pu(i)||n===!0&&fu(i)||!t&&!fu(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var gu=(0,z.createContext)({});function _u(e,t){if(cs(e)){let{initial:t,animate:n}=e;return{initial:t===!1||as(t)?t:void 0,animate:as(n)?n:void 0}}return e.inherit===!1?{}:t}function vu(e){let{initial:t,animate:n}=_u(e,(0,z.useContext)(gu));return(0,z.useMemo)(()=>({initial:t,animate:n}),[yu(t),yu(n)])}function yu(e){return Array.isArray(e)?e.join(` `):e}var bu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function xu(e,t,n){for(let r in t)!Ya(t[r])&&!qs(r,n)&&(e[r]=t[r])}function Su({transformTemplate:e},t){return(0,z.useMemo)(()=>{let n=bu();return Vs(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Cu(e,t){let n=e.style||{},r={};return xu(r,n,e),Object.assign(r,Su(e,t)),r}function wu(e,t){let n={},r=Cu(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Tu=()=>({...bu(),attrs:{}});function Eu(e,t,n,r){let i=(0,z.useMemo)(()=>{let n=Tu();return tc(n,t,rc(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};xu(t,e.style,e),i.style={...t,...i.style}}return i}var Du=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Ou(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Du.indexOf(e)>-1||/[A-Z]/u.test(e))}function ku(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Ou(e)?Eu:wu)(t,r,i,e),c=hu(t,typeof e==`string`,a),l=e===z.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,z.useMemo)(()=>Ya(u)?u.get():u,[u]);return(0,z.createElement)(e,{...l,children:d})}function Au({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:ju(n,r,i,e),renderState:t()}}function ju(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=ul(a[e]);let{initial:o,animate:s}=e,c=cs(e),l=ls(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!is(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=La(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Mu=e=>(t,n)=>{let r=(0,z.useContext)(gu),i=(0,z.useContext)(Ut),a=()=>Au(e,t,r,i);return n?a():Bt(a)},Nu=Mu({scrapeMotionValuesFromProps:Js,createRenderState:bu}),Pu=Mu({scrapeMotionValuesFromProps:ac,createRenderState:Tu}),Fu=Symbol.for(`motionComponentSymbol`);function Iu(e,t,n){let r=(0,z.useRef)(n);(0,z.useInsertionEffect)(()=>{r.current=n});let i=(0,z.useRef)(null);return(0,z.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var Lu=(0,z.createContext)({});function Ru(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function zu(e,t,n,r,i,a){let{visualElement:o}=(0,z.useContext)(gu),s=(0,z.useContext)(au),c=(0,z.useContext)(Ut),l=(0,z.useContext)(ql).reducedMotion,u=(0,z.useRef)(null),d=(0,z.useRef)(!1);r||=s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:l,isSVG:a}),d.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));let f=u.current,p=(0,z.useContext)(Lu);f&&!f.projection&&i&&(f.type===`html`||f.type===`svg`)&&Bu(u.current,n,i,p);let m=(0,z.useRef)(!1);(0,z.useInsertionEffect)(()=>{f&&m.current&&f.update(n,c)});let h=n[$a],g=(0,z.useRef)(!!h&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return Ht(()=>{d.current=!0,f&&(m.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),g.current&&f.animationState&&f.animationState.animateChanges())}),(0,z.useEffect)(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(h)}),!1),f.enteringChildren=void 0)}),f}function Bu(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Vu(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Ru(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:l})}function Vu(e){if(e)return e.options.allowProjection===!1?Vu(e.parent):e.projection}function Hu(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&uu(r);let a=n?n===`svg`:Ou(e),o=a?Pu:Nu;function s(n,s){let c,l={...(0,z.useContext)(ql),...n,layoutId:Uu(n)},{isStatic:u}=l,d=vu(n),f=o(n,u);if(!u&&Vt){Wu(l,r);let t=Gu(l);c=t.MeasureLayout,d.visualElement=zu(e,f,l,i,t.ProjectionNode,a)}return(0,V.jsxs)(gu.Provider,{value:d,children:[c&&d.visualElement?(0,V.jsx)(c,{visualElement:d.visualElement,...l}):null,ku(e,n,Iu(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,z.forwardRef)(s);return c[Fu]=e,c}function Uu({layoutId:e}){let t=(0,z.useContext)(zt).id;return t&&e!==void 0?t+`-`+e:e}function Wu(e,t){(0,z.useContext)(au).strict}function Gu(e){let{drag:t,layout:n}=lu();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Ku(e,t){if(typeof Proxy>`u`)return Hu;let n=new Map,r=(n,r)=>Hu(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Hu(a,void 0,e,t)),n.get(a))})}var qu=(e,t)=>t.isSVG??Ou(e)?new oc(t):new Xs(t,{allowProjection:e!==z.Fragment}),Ju=class extends _s{constructor(e){super(e),e.animationState||=pc(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();is(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Yu=0,Xu={animation:{Feature:Ju},exit:{Feature:class extends _s{constructor(){super(...arguments),this.id=Yu++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Zu(e){return{point:{x:e.pageX,y:e.pageY}}}var Qu=e=>t=>Io(t)&&e(t,Zu(t));function $u(e,t,n,r){return ol(e,t,Qu(n),r)}var ed=({current:e})=>e?e.ownerDocument.defaultView:null,td=(e,t)=>Math.abs(e-t);function nd(e,t){let n=td(e.x,t.x),r=td(e.y,t.y);return Math.sqrt(n**2+r**2)}var rd=new Set([`auto`,`scroll`]),id=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=sd(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=nd(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=W;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=ad(t,this.transformPagePoint),U.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=sd(e.type===`pointercancel`?this.lastMoveEventInfo:ad(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Io(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=ad(Zu(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=W;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,sd(s,this.history)),this.removeListeners=en($u(this.contextWindow,`pointermove`,this.handlePointerMove),$u(this.contextWindow,`pointerup`,this.handlePointerUp),$u(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(rd.has(e.overflowX)||rd.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener(`scroll`,this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),U.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Nn(this.updatePoint)}};function ad(e,t){return t?{point:t(e.point)}:e}function od(e,t){return{x:e.x-t.x,y:e.y-t.y}}function sd({point:e},t){return{point:e,delta:od(e,ld(t)),offset:od(e,cd(t)),velocity:ud(t,.1)}}function cd(e){return e[0]}function ld(e){return e[e.length-1]}function ud(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=ld(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>rn(t)));)n--;if(!r)return{x:0,y:0};let a=an(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function dd(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?q(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?q(n,e,r.max):Math.min(e,n)),e}function fd(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function pd(e,{top:t,left:n,bottom:r,right:i}){return{x:fd(e.x,n,i),y:fd(e.y,t,r)}}function md(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function hd(e,t){return{x:md(e.x,t.x),y:md(e.y,t.y)}}function gd(e,t){let n=.5,r=Ec(e),i=Ec(t);return i>r?n=tn(t.min,t.max-r,e.min):r>i&&(n=tn(e.min,e.max-i,t.min)),Kt(0,1,n)}function _d(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var vd=.35;function yd(e=vd){return e===!1?e=0:e===!0&&(e=vd),{x:bd(e,`left`,`right`),y:bd(e,`top`,`bottom`)}}function bd(e,t,n){return{min:xd(e,t),max:xd(e,n)}}function xd(e,t){return typeof e==`number`?e:e[t]||0}var Sd=new WeakMap,Cd=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qo(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t?(this.stopAnimation(),this.snapToCursor(Zu(e).point)):this.pauseAnimation()},a=(e,t)=>{this.stopAnimation();let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=jo(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Jc(e=>{let t=this.getAxisMotionValue(e).get()||0;if(sr.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Ec(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&U.postRender(()=>i(e,t)),Za(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Td(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&a(e,t)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Jc(e=>this.getAnimationState(e)===`paused`&&this.getAxisMotionValue(e).animation?.play()),{dragSnapToOrigin:l}=this.getProps();this.panSession=new id(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:ed(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&U.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!wd(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=dd(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Ru(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=pd(n.layoutBox,e):this.constraints=!1,this.elastic=yd(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&Jc(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=_d(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ru(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Ls(n,r.root,this.visualElement.getTransformPagePoint()),a=hd(r.layout.layoutBox,i);if(t){let e=t(ys(a));this.hasMutatedConstraints=!!e,e&&(a=vs(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Jc(o=>{if(!wd(o,t,this.currentDirection))return;let c=s&&s[o]||{};a&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Za(this.visualElement,e),n.start(Fa(e,n,0,t,this.visualElement,!1))}stopAnimation(){Jc(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Jc(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Jc(t=>{let{drag:n}=this.getProps();if(!wd(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-q(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Ru(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Jc(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=gd({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Jc(t=>{if(!wd(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(q(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;Sd.set(this.visualElement,this);let e=this.visualElement.current,t=$u(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Ro(i);n&&r&&!a&&this.start(t)}),n=()=>{let{dragConstraints:e}=this.getProps();Ru(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener(`measure`,n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),U.read(n);let a=ol(window,`resize`,()=>this.scalePositionWithinConstraints()),o=r.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Jc(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{a(),t(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=vd,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function wd(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Td(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Ed=class extends _s{constructor(e){super(e),this.removeGroupControls=Qt,this.removeListeners=Qt,this.controls=new Cd(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Qt}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Dd=e=>(t,n)=>{e&&U.postRender(()=>e(t,n))},Od=class extends _s{constructor(){super(...arguments),this.removePointerDownListener=Qt}onPointerDown(e){this.session=new id(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ed(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Dd(e),onStart:Dd(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&U.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=$u(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},kd=!1,Ad=class extends z.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),kd&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),fl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),kd=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||U.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Do.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;kd=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function jd(e){let[t,n]=tu(),r=(0,z.useContext)(zt);return(0,V.jsx)(Ad,{...e,layoutGroup:r,switchLayoutGroup:(0,z.useContext)(Lu),isPresent:t,safeToRemove:n})}var Md={pan:{Feature:Od},drag:{Feature:Ed,ProjectionNode:Kl,MeasureLayout:jd}};function Nd(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&U.postRender(()=>i(t,Zu(t)))}var Pd=class extends _s{mount(){let{current:e}=this.node;e&&(this.unmount=Po(e,(e,t)=>(Nd(this.node,t,`Start`),e=>Nd(this.node,e,`End`))))}unmount(){}},Fd=class extends _s{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=en(ol(this.node.current,`focus`,()=>this.onFocus()),ol(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Id(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&U.postRender(()=>i(t,Zu(t)))}var Ld=class extends _s{mount(){let{current:e}=this.node;e&&(this.unmount=Wo(e,(e,t)=>(Id(this.node,t,`Start`),(e,{success:t})=>Id(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}},Rd=new WeakMap,zd=new WeakMap,Bd=e=>{let t=Rd.get(e.target);t&&t(e)},Vd=e=>{e.forEach(Bd)};function Hd({root:e,...t}){let n=e||document;zd.has(n)||zd.set(n,{});let r=zd.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Vd,{root:e,...t})),r[i]}function Ud(e,t,n){let r=Hd(t);return Rd.set(e,n),r.observe(e),()=>{Rd.delete(e),r.unobserve(e)}}var Wd={some:0,all:1},Gd=class extends _s{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Wd[r]};return Ud(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Kd(e,t))&&this.startObserver()}unmount(){}};function Kd({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var qd={inView:{Feature:Gd},tap:{Feature:Ld},focus:{Feature:Fd},hover:{Feature:Pd}},Jd={layout:{ProjectionNode:Kl,MeasureLayout:jd}},Yd=Ku({...Xu,...qd,...Md,...Jd},qu),Xd=N(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),Zd=N(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),Qd=N(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),$d=N(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),ef=N(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),tf=N(`circle-arrow-right`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m12 16 4-4-4-4`,key:`1i9zcv`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}]]),nf=N(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),rf=N(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),af=N(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),of=N(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),sf=N(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),cf=N(`minimize-2`,[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]),lf=N(`octagon-x`,[[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,key:`2d38gg`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),uf=!1;function df(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function ff(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var pf=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!uf:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(ff(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=df(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),mf=`-ms-`,hf=`-moz-`,Y=`-webkit-`,gf=`comm`,_f=`rule`,vf=`decl`,yf=`@import`,bf=`@keyframes`,xf=`@layer`,Sf=Math.abs,Cf=String.fromCharCode,wf=Object.assign;function Tf(e,t){return kf(e,0)^45?(((t<<2^kf(e,0))<<2^kf(e,1))<<2^kf(e,2))<<2^kf(e,3):0}function Ef(e){return e.trim()}function Df(e,t){return(e=t.exec(e))?e[0]:e}function X(e,t,n){return e.replace(t,n)}function Of(e,t){return e.indexOf(t)}function kf(e,t){return e.charCodeAt(t)|0}function Af(e,t,n){return e.slice(t,n)}function jf(e){return e.length}function Mf(e){return e.length}function Nf(e,t){return t.push(e),e}function Pf(e,t){return e.map(t).join(``)}var Ff=1,If=1,Lf=0,Rf=0,zf=0,Bf=``;function Vf(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ff,column:If,length:o,return:``}}function Hf(e,t){return wf(Vf(``,null,null,``,null,null,0),e,{length:-e.length},t)}function Uf(){return zf}function Wf(){return zf=Rf>0?kf(Bf,--Rf):0,If--,zf===10&&(If=1,Ff--),zf}function Gf(){return zf=Rf<Lf?kf(Bf,Rf++):0,If++,zf===10&&(If=1,Ff++),zf}function Kf(){return kf(Bf,Rf)}function qf(){return Rf}function Jf(e,t){return Af(Bf,e,t)}function Yf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xf(e){return Ff=If=1,Lf=jf(Bf=e),Rf=0,[]}function Zf(e){return Bf=``,e}function Qf(e){return Ef(Jf(Rf-1,tp(e===91?e+2:e===40?e+1:e)))}function $f(e){for(;(zf=Kf())&&zf<33;)Gf();return Yf(e)>2||Yf(zf)>3?``:` `}function ep(e,t){for(;--t&&Gf()&&!(zf<48||zf>102||zf>57&&zf<65||zf>70&&zf<97););return Jf(e,qf()+(t<6&&Kf()==32&&Gf()==32))}function tp(e){for(;Gf();)switch(zf){case e:return Rf;case 34:case 39:e!==34&&e!==39&&tp(zf);break;case 40:e===41&&tp(e);break;case 92:Gf();break}return Rf}function np(e,t){for(;Gf()&&e+zf!==57&&!(e+zf===84&&Kf()===47););return`/*`+Jf(t,Rf-1)+`*`+Cf(e===47?e:Gf())}function rp(e){for(;!Yf(Kf());)Gf();return Jf(e,Rf)}function ip(e){return Zf(ap(``,null,null,null,[``],e=Xf(e),0,[0],e))}function ap(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Gf()){case 40:if(m!=108&&kf(C,d-1)==58){Of(C+=X(Qf(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Qf(v);break;case 9:case 10:case 13:case 32:C+=$f(m);break;case 92:C+=ep(qf()-1,7);continue;case 47:switch(Kf()){case 42:case 47:Nf(sp(np(Gf(),qf()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=jf(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=X(C,/\f/g,``)),p>0&&jf(C)-d&&Nf(p>32?cp(C+`;`,r,n,d-1):cp(X(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(Nf(S=op(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)ap(C,t,S,S,b,a,d,s,x);else switch(f===99&&kf(C,3)===110?100:f){case 100:case 108:case 109:case 115:ap(e,S,S,r&&Nf(op(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:ap(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+jf(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Wf()==125)continue}switch(C+=Cf(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(jf(C)-1)*_,_=1;break;case 64:Kf()===45&&(C+=Qf(Gf())),f=Kf(),u=d=jf(y=C+=rp(qf())),v++;break;case 45:m===45&&jf(C)==2&&(h=0)}}return a}function op(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=Mf(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=Af(e,d+1,d=Sf(h=o[m])),y=e;_<p;++_)(y=Ef(h>0?f[_]+` `+v:X(v,/&\f/g,f[_])))&&(c[g++]=y);return Vf(e,t,n,i===0?_f:s,c,l,u)}function sp(e,t,n){return Vf(e,t,n,gf,Cf(Uf()),Af(e,2,-2),0)}function cp(e,t,n,r){return Vf(e,t,n,vf,Af(e,0,r),Af(e,r+1,-1),r)}function lp(e,t){for(var n=``,r=Mf(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function up(e,t,n,r){switch(e.type){case xf:if(e.children.length)break;case yf:case vf:return e.return=e.return||e.value;case gf:return``;case bf:return e.return=e.value+`{`+lp(e.children,r)+`}`;case _f:e.value=e.props.join(`,`)}return jf(n=lp(e.children,r))?e.return=e.value+`{`+n+`}`:``}function dp(e){var t=Mf(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function fp(e){return function(t){t.root||(t=t.return)&&e(t)}}var pp=function(e,t,n){for(var r=0,i=0;r=i,i=Kf(),r===38&&i===12&&(t[n]=1),!Yf(i);)Gf();return Jf(e,Rf)},mp=function(e,t){var n=-1,r=44;do switch(Yf(r)){case 0:r===38&&Kf()===12&&(t[n]=1),e[n]+=pp(Rf-1,t,n);break;case 2:e[n]+=Qf(r);break;case 4:if(r===44){e[++n]=Kf()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=Cf(r)}while(r=Gf());return e},hp=function(e,t){return Zf(mp(Xf(e),t))},gp=new WeakMap,_p=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!gp.get(n))&&!r){gp.set(e,!0);for(var i=[],a=hp(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},vp=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function yp(e,t){switch(Tf(e,t)){case 5103:return Y+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+hf+e+mf+e+e;case 6828:case 4268:return Y+e+mf+e+e;case 6165:return Y+e+mf+`flex-`+e+e;case 5187:return Y+e+X(e,/(\w+).+(:[^]+)/,Y+`box-$1$2`+mf+`flex-$1$2`)+e;case 5443:return Y+e+mf+`flex-item-`+X(e,/flex-|-self/,``)+e;case 4675:return Y+e+mf+`flex-line-pack`+X(e,/align-content|flex-|-self/,``)+e;case 5548:return Y+e+mf+X(e,`shrink`,`negative`)+e;case 5292:return Y+e+mf+X(e,`basis`,`preferred-size`)+e;case 6060:return Y+`box-`+X(e,`-grow`,``)+Y+e+mf+X(e,`grow`,`positive`)+e;case 4554:return Y+X(e,/([^-])(transform)/g,`$1`+Y+`$2`)+e;case 6187:return X(X(X(e,/(zoom-|grab)/,Y+`$1`),/(image-set)/,Y+`$1`),e,``)+e;case 5495:case 3959:return X(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return X(X(e,/(.+:)(flex-)?(.*)/,Y+`box-pack:$3`+mf+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+Y+e+e;case 4095:case 3583:case 4068:case 2532:return X(e,/(.+)-inline(.+)/,Y+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jf(e)-1-t>6)switch(kf(e,t+1)){case 109:if(kf(e,t+4)!==45)break;case 102:return X(e,/(.+:)(.+)-([^]+)/,`$1`+Y+`$2-$3$1`+hf+(kf(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Of(e,`stretch`)?yp(X(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(kf(e,t+1)!==115)break;case 6444:switch(kf(e,jf(e)-3-(~Of(e,`!important`)&&10))){case 107:return X(e,`:`,`:`+Y)+e;case 101:return X(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+Y+(kf(e,14)===45?`inline-`:``)+`box$3$1`+Y+`$2$3$1`+mf+`$2box$3`)+e}break;case 5936:switch(kf(e,t+11)){case 114:return Y+e+mf+X(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return Y+e+mf+X(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return Y+e+mf+X(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return Y+e+mf+e+e}return e}var bp=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case vf:e.return=yp(e.value,e.length);break;case bf:return lp([Hf(e,{value:X(e.value,`@`,`@`+Y)})],r);case _f:if(e.length)return Pf(e.props,function(t){switch(Df(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return lp([Hf(e,{props:[X(t,/:(read-\w+)/,`:`+hf+`$1`)]})],r);case`::placeholder`:return lp([Hf(e,{props:[X(t,/:(plac\w+)/,`:`+Y+`input-$1`)]}),Hf(e,{props:[X(t,/:(plac\w+)/,`:`+hf+`$1`)]}),Hf(e,{props:[X(t,/:(plac\w+)/,mf+`input-$1`)]})],r)}return``})}}],xp=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||bp,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[_p,vp],l,u=[up,fp(function(e){l.insert(e)})],d=dp(c.concat(r,u)),f=function(e){return lp(ip(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new pf({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},Sp=!0;function Cp(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var wp=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||Sp===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},Tp=function(e,t,n){wp(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function Ep(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}w();var Dp=!1,Op=/[A-Z]|^ms/g,kp=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ap=function(e){return e.charCodeAt(1)===45},jp=function(e){return e!=null&&typeof e!=`boolean`},Mp=S(function(e){return Ap(e)?e:e.replace(Op,`-$&`).toLowerCase()}),Np=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(kp,function(e,t,n){return Rp={name:t,styles:n,next:Rp},t})}return x[e]!==1&&!Ap(e)&&typeof t==`number`&&t!==0?t+`px`:t},Pp=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;function Fp(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return Rp={name:i.name,styles:i.styles,next:Rp},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Rp={name:o.name,styles:o.styles,next:Rp},o=o.next;return a.styles+`;`}return Ip(e,t,n);case`function`:if(e!==void 0){var s=Rp,c=n(e);return Rp=s,Fp(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function Ip(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Fp(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:jp(s)&&(r+=Mp(a)+`:`+Np(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&Dp)throw Error(Pp);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)jp(o[c])&&(r+=Mp(a)+`:`+Np(a,o[c])+`;`);else{var l=Fp(e,t,o);switch(a){case`animation`:case`animationName`:r+=Mp(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}var Lp=/label:\s*([^\s;{]+)\s*(;|$)/g,Rp;function zp(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Rp=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=Fp(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=Fp(n,t,e[o]),r&&(i+=a[o]);Lp.lastIndex=0;for(var s=``,c;(c=Lp.exec(i))!==null;)s+=`-`+c[1];return{name:Ep(i)+s,styles:i,next:Rp}}var Bp=function(e){return e()},Vp=z.useInsertionEffect?z.useInsertionEffect:!1,Hp=Vp||Bp;Vp||z.useLayoutEffect;var Up=z.createContext(typeof HTMLElement<`u`?xp({key:`css`}):null);Up.Provider;var Wp=function(e){return(0,z.forwardRef)(function(t,n){return e(t,(0,z.useContext)(Up),n)})},Gp=z.createContext({});({}).hasOwnProperty,h();var Kp=!1,qp=g,Jp=function(e){return e!==`theme`},Yp=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?qp:Jp},Xp=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},Zp=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return wp(t,n,r),Hp(function(){return Tp(t,n,r)}),null},Qp=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=Xp(t,n,r),c=s||Yp(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=Wp(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=z.useContext(Gp)}typeof e.className==`string`?a=Cp(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=zp(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?Yp(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),z.createElement(z.Fragment,null,z.createElement(Zp,{cache:t,serialized:m,isStringTag:typeof r==`string`}),z.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,`toString`,{value:function(){return o===void 0&&Kp?`NO_COMPONENT_SELECTOR`:`.`+o}}),h.withComponent=function(t,r){return e(t,Xe({},n,r,{shouldForwardProp:Xp(h,r,!0)})).apply(void 0,d)},h}},$p=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),em=Qp.bind(null);$p.forEach(function(e){em[e]=em(e)});const tm=em.div({position:`relative`,display:`flex`,height:`100vh`,flexDirection:`column`,backgroundColor:`transparent`}),nm=T.div`
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
`,rm=T(Yd.div)`
  ${{position:`fixed`,bottom:`0`,left:`0`,top:`0`,zIndex:`1000`,display:`flex`,width:`150px`,flexDirection:`column`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}}
  background-color: ${e=>f(e.theme.BACKGROUND,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 16px;
`,im=T.div`
  ${{flex:`none`,padding:`1.25rem`}}
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  background-color: ${e=>e.theme.OFFSET};
  border-radius: 12px 12px 0 0;
`,am=T.div`
  ${{marginTop:`0.25rem`,flex:`1 1 0%`,fontSize:`0.875rem`}}
  padding: 8px 6px;
  overflow-y: auto;
  text-align: center;
  color: ${e=>f(e.theme.PRIMARY,.7)};
`,om=T.h2`
  ${{margin:`0`,fontSize:`1.5rem`,fontWeight:`700`}}
  color: ${e=>e.theme.PRIMARY};
`,sm=T.div`
  position: relative;
`,cm=T.button`
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
`,lm=T.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  flex: 1;
`,um=T.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: small;
  font-weight: 600;
`,dm=T.div`
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
`,fm=T.button`
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
`,em.div({flex:`1 1 0%`});const pm=T.nav`
  ${{flex:`none`,paddingLeft:`0`,paddingRight:`0`,paddingBottom:`50px`,paddingTop:`0.5rem`}}
  border-top: 1px solid ${e=>e.theme.BORDER};
`,mm=T.button`
  ${{width:`100%`,cursor:`pointer`,borderStyle:`none`,paddingLeft:`1.25rem`,paddingRight:`1.25rem`,paddingTop:`0.75rem`,paddingBottom:`0.75rem`,textAlign:`left`,fontSize:`15px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isActive?e.theme.OFFSET:`transparent`};
  color: ${e=>e.theme.PRIMARY};
  font-weight: ${e=>e.$isActive?600:400};
  
  &:hover {
    background-color: ${e=>f(e.theme.OFFSET,.5)};
  }
`,hm=em.div({position:`fixed`,bottom:`0`,left:`0`,right:`0`,top:`0`,zIndex:`999`,backgroundColor:`rgba(0, 0, 0, 0.6)`}),gm=em.div({position:`fixed`,bottom:`2px`,left:`2px`,zIndex:`1000`,display:`flex`,height:`3rem`,width:`3rem`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}),_m=T.button`
  ${{position:`fixed`,zIndex:`1001`,display:`flex`,height:`2.5rem`,width:`2.5rem`,cursor:`pointer`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-shadow":`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,"--tw-shadow-colored":`0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color)`,boxShadow:`var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)`}}
  background-color: ${e=>f(e.theme.BACKGROUND,.75)};
  border: 2px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
`,vm=({isOpen:e,currentPage:t,onToggle:n,onNavigate:r,canAccessInitiativeList:i=!0})=>{let{theme:a}=Rt(),{t:o,locale:s,setLocale:c,availableLocales:l}=yt(),u=B(e=>e.playerData),d=String(u?.role||``).toUpperCase()===`GM`,[f,p]=(0,z.useState)(!1),m=(0,z.useRef)(null),h=(0,z.useMemo)(()=>({en:o(`common.locale.en`),es:o(`common.locale.es`),fr:o(`common.locale.fr`),de:o(`common.locale.de`)}),[o]);(0,z.useEffect)(()=>{e||p(!1)},[e]),(0,z.useEffect)(()=>{if(!f)return;let e=e=>{m.current&&!m.current.contains(e.target)&&p(!1)};return window.addEventListener(`mousedown`,e),()=>{window.removeEventListener(`mousedown`,e)}},[f]);let g=e=>{c(e),p(!1)};return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(iu,{children:e&&(0,V.jsxs)(rm,{theme:a,initial:{x:-300},animate:{x:0},exit:{x:-300},transition:{type:`tween`,duration:.3},style:{boxShadow:`4px 0 12px rgba(0, 0, 0, 0.15)`},children:[(0,V.jsxs)(im,{theme:a,children:[(0,V.jsx)(om,{theme:a,children:o(`nav.title`)}),(0,V.jsxs)(sm,{ref:m,children:[(0,V.jsxs)(cm,{theme:a,$open:f,type:`button`,"aria-haspopup":`listbox`,"aria-expanded":f,"aria-label":o(`nav.languageSwitcher`),onClick:()=>p(e=>!e),children:[(0,V.jsxs)(lm,{children:[(0,V.jsx)(of,{size:16}),(0,V.jsx)(um,{children:h[s]})]}),(0,V.jsx)(ef,{size:8})]}),f?(0,V.jsx)(dm,{theme:a,role:`listbox`,"aria-label":o(`nav.languageOptions`),children:l.map(e=>(0,V.jsxs)(fm,{theme:a,$active:e===s,type:`button`,role:`option`,"aria-selected":e===s,onClick:()=>g(e),children:[(0,V.jsx)(`span`,{children:h[e]}),e===s?(0,V.jsx)($d,{size:14}):null]},e))}):null]})]}),(0,V.jsxs)(am,{theme:a,children:[o(`nav.featureRequest`),(0,V.jsx)(`br`,{}),(0,V.jsx)(`br`,{}),o(`nav.featureSubmit`),` `,(0,V.jsx)(`a`,{href:`mailto:manuel@battle-system.com`,children:o(`nav.featureEmail`)}),` `,o(`nav.featureOr`),` `,(0,V.jsx)(`a`,{href:`https://discord.gg/Kh9hbHAZnX`,target:`_blank`,rel:`noreferrer`,children:o(`nav.battleSystemDiscord`)}),`.`]}),(0,V.jsxs)(pm,{theme:a,children:[i&&(0,V.jsx)(mm,{theme:a,$isActive:t===`ForgeMain`,onClick:()=>r(`ForgeMain`),children:o(`nav.main`)}),(0,V.jsx)(mm,{theme:a,$isActive:t===`Party`,onClick:()=>r(`Party`),children:o(`nav.party`)}),(0,V.jsx)(mm,{theme:a,$isActive:t===`ChatLog`,onClick:()=>r(`ChatLog`),children:o(`nav.systemLog`)}),d&&(0,V.jsx)(mm,{theme:a,$isActive:t===`System`,onClick:()=>r(`System`),children:o(`nav.system`)}),d&&(0,V.jsx)(mm,{theme:a,$isActive:t===`Settings`,onClick:()=>r(`Settings`),children:o(`nav.settings`)})]})]})}),e&&(0,V.jsx)(hm,{onClick:n}),(0,V.jsx)(gm,{children:(0,V.jsx)(_m,{theme:a,onClick:n,children:(0,V.jsx)(ke,{size:24})})})]})},ym=T.div`
  padding: 20px;
  color: ${e=>e.theme.PRIMARY};
  min-height: 100vh;
`,bm=T.h1`
  color: ${e=>e.theme.PRIMARY};
  background-color: ${e=>e.theme.OFFSET};
  padding: 2px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  font-variant: small-caps;
`,xm=T.div`
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
`;const Sm=T.button`
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
`,Cm=T.input`
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
`;var wm=T.button`
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
`;const Z=({label:e,isOn:t,onChange:n})=>{let{theme:r}=Rt();return(0,V.jsx)(wm,{theme:r,$isOn:t,onClick:()=>{let r=!t;A.log(`${e}: ${r}`),n(r)},role:`switch`,"aria-checked":t,"aria-label":e})};var Tm=T.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${e=>e.$zIndexBase};
`,Em=T.div`
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
`,Dm=T.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 15px 0;
  font-size: 18px;
`,Om=T.div`
  margin: 0 0 20px 0;
`,km=T.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;const Am=({isOpen:e,title:t,onClose:n,children:r,actions:i,closeOnOverlayClick:a=!0,minWidth:o,maxWidth:s,zIndexBase:c=9999})=>{let{theme:l}=Rt();return e?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Tm,{$zIndexBase:c,onClick:a?n:void 0}),(0,V.jsxs)(Em,{theme:l,$minWidth:o,$maxWidth:s,$zIndexBase:c,onClick:e=>e.stopPropagation(),children:[t&&(0,V.jsx)(Dm,{theme:l,children:t}),(0,V.jsx)(Om,{children:r}),i&&(0,V.jsx)(km,{children:i})]})]}):null},jm=e=>({reverseInitiative:e(`settings.tooltips.reverseInitiative`),popcornInitiative:e(`settings.tooltips.popcornInitiative`),initiativeDie:e(`settings.tooltips.initiativeDie`),initiativeModifierAttr:e(`settings.tooltips.initiativeModifierAttr`),initiativeModifierMath:e(`settings.tooltips.initiativeModifierMath`),showCardColumn:e(`settings.tooltips.showCardColumn`),showPlayerView:e(`settings.tooltips.showPlayerView`),showNonPartyUnits:e(`settings.tooltips.showNonPartyUnits`),showHpNumbersOnList:e(`settings.tooltips.showHpNumbersOnList`),ownerOnlyEdit:e(`settings.tooltips.ownerOnlyEdit`),showAdjustHpContextMenu:e(`settings.tooltips.showAdjustHpContextMenu`),showViewUnitContextMenuForPlayers:e(`settings.tooltips.showViewUnitContextMenuForPlayers`),showHpBarsOnTokens:e(`settings.tooltips.showHpBarsOnTokens`),hpOrientation:e(`settings.tooltips.hpOrientation`),showHpNumbersOnTokens:e(`settings.tooltips.showHpNumbersOnTokens`),showDeathEffect:e(`settings.tooltips.showDeathEffect`),showNamesOnTokens:e(`settings.tooltips.showNamesOnTokens`),showNamesToGm:e(`settings.tooltips.showNamesToGm`),showTurnEffect:e(`settings.tooltips.showTurnEffect`),useDescriptiveNames:e(`settings.tooltips.useDescriptiveNames`),enableRumble:e(`settings.tooltips.enableRumble`),enableBones:e(`settings.tooltips.enableBones`),enableDicePlus:e(`settings.tooltips.enableDicePlus`),enableTextBasedRolls:e(`settings.tooltips.enableTextBasedRolls`),enableObrNotification:e(`settings.tooltips.enableObrNotification`),showResultsToAll:e(`settings.tooltips.showResultsToAll`),enableDiscordLogging:e(`settings.tooltips.enableDiscordLogging`),discordUrl:e(`settings.tooltips.discordUrl`),enableConsoleLog:e(`settings.tooltips.enableConsoleLog`)}),Mm=()=>{let e=B(e=>e.systemData);return B(e=>e.cacheReady)?e?{theme:e.theme,cardLayout:e.cardLayout,listLayout:e.listLayout,attributes:e.attributes,systemName:e.systemName,importDate:e.importDate,isLoading:!1}:{theme:{primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,isLoading:!1}:{theme:null,cardLayout:[],listLayout:[],attributes:[],systemName:``,importDate:null,isLoading:!0}};var Nm=`modulepreload`,Pm=function(e){return`/`+e},Fm={};const Im=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Pm(t,n),t in Fm)return;Fm[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Nm,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};var Lm=T.h2`
  ${{marginBottom:`1rem`,paddingBottom:`0.5rem`,fontSize:`1.25rem`,fontWeight:`600`}}
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
`,Q=T.div`
  ${{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`}}
  color: ${e=>e.theme.PRIMARY};
`,$=T.label`
  ${{flex:`1 1 0%`,cursor:`pointer`,textAlign:`left`,fontSize:`1rem`}}
  color: ${e=>e.theme.PRIMARY};
`,Rm=T.div`
  ${{marginLeft:`1rem`,display:`flex`,placeContent:`space-between`,alignItems:`center`,gap:`0.75rem`}}
  color: ${e=>e.theme.PRIMARY};
`,zm=T.label`
  ${{fontSize:`0.875rem`}}
  text-align: left;
  color: ${e=>e.theme.PRIMARY};
`,Bm=T.p`
  ${{marginTop:`0.25rem`,fontSize:`0.75rem`}}
  color: ${e=>f(e.theme.PRIMARY,.7)};
`,Vm=T.input`
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
`,Hm=T.select`
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
`,Um=T.button`
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
`,Wm=em.div({marginTop:`0.5rem`,display:`flex`,justifyContent:`center`,gap:`0.75rem`}),Gm=T.p`
  margin: 8px 0 0;
  font-size: 13px;
  color: ${e=>e.$connected?e.theme.PRIMARY:f(e.theme.PRIMARY,.75)};
`,Km=T.p`
  color: ${e=>f(e.theme.PRIMARY,.9)};
  margin: 0;
  line-height: 1.5;
`;const qm=()=>{let{theme:e}=Rt(),{t:n}=yt(),{attributes:r}=Mm(),i=B(e=>e.roomMetadata);B(e=>e.sceneMetadata);let a=B(e=>e.items),o=B(e=>e.cacheReady),[s,l]=(0,z.useState)(!1),[u,d]=(0,z.useState)(!1),[f,m]=(0,z.useState)(`D20`),[h,g]=(0,z.useState)(!1),[_,v]=(0,z.useState)(``),[y,b]=(0,z.useState)(`@STAT`),[x,S]=(0,z.useState)(!1),[C,w]=(0,z.useState)(!1),[T,E]=(0,z.useState)(!0),[D,ee]=(0,z.useState)(!1),[te,ne]=(0,z.useState)(!0),[re,k]=(0,z.useState)(!0),[ie,oe]=(0,z.useState)(!1),[se,ce]=(0,z.useState)(`bottom`),[le,ue]=(0,z.useState)(!1),[de,fe]=(0,z.useState)(!1),[pe,me]=(0,z.useState)(!1),[he,ge]=(0,z.useState)(!1),[_e,ve]=(0,z.useState)(!1),[ye,j]=(0,z.useState)(!1),[be,xe]=(0,z.useState)(!1),[Se,M]=(0,z.useState)(!1),[Ce,N]=(0,z.useState)(!1),[Te,Ee]=(0,z.useState)(!1),[De,Oe]=(0,z.useState)(!1),[ke,Ae]=(0,z.useState)(!1),[je,Me]=(0,z.useState)(!1),[Ne,Pe]=(0,z.useState)(``),[Fe,Ie]=(0,z.useState)(!1),Re=(0,z.useRef)(null),Be=(0,z.useRef)(null),[Ve,He]=(0,z.useState)(()=>dt()),[Ue,We]=(0,z.useState)(()=>Ge()),[Ke,qe]=(0,z.useState)(()=>gt()),[Je,Xe]=(0,z.useState)(!1),[Qe,et]=(0,z.useState)(!1),F=jm(n);(0,z.useEffect)(()=>{let e=!0;return(async()=>{let t=await mt();e&&(He(t&&dt()),We(Ge()),qe(gt()))})(),()=>{e=!1}},[]);let I=i;(0,z.useEffect)(()=>{if(o){if(I[O.POPCORN_INITIATIVE]!==void 0&&l(I[O.POPCORN_INITIATIVE]),I[O.REVERSE_INITIATIVE]!==void 0&&d(I[O.REVERSE_INITIATIVE]),I[O.DICE_RANGE]!==void 0&&m(I[O.DICE_RANGE]),I[O.INITIATIVE_MODIFIER_BID]===void 0?v(``):v(I[O.INITIATIVE_MODIFIER_BID]||``),I[O.INITIATIVE_MODIFIER_EXPR]!==void 0){let e=(I[O.INITIATIVE_MODIFIER_EXPR]||`@STAT`).replace(/\bx\b/gi,`@STAT`).trim();b(e.length>0?e:`@STAT`)}else b(`@STAT`);if(I[O.SHOW_CARD_ACCESS]!==void 0&&g(I[O.SHOW_CARD_ACCESS]),I[O.SHOW_PLAYER_VIEW]!==void 0&&S(I[O.SHOW_PLAYER_VIEW]),I[O.SHOW_OWNER_ONLY_EDIT]!==void 0&&ee(I[O.SHOW_OWNER_ONLY_EDIT]),I[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?ne(!0):ne(I[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]),I[O.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===void 0?k(!0):k(I[O.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]),I[O.SHOW_NON_PARTY_UNITS]!==void 0&&w(I[O.SHOW_NON_PARTY_UNITS]),I[O.SHOW_LIST_HP_NUMBERS]===void 0?E(!0):E(I[O.SHOW_LIST_HP_NUMBERS]),I[O.SHOW_HP_BARS]!==void 0&&oe(I[O.SHOW_HP_BARS]),I[O.HP_BAR_ORIENTATION]!==void 0&&ce(I[O.HP_BAR_ORIENTATION]),I[O.SHOW_HP_NUMBERS]!==void 0&&ue(I[O.SHOW_HP_NUMBERS]),I[O.SHOW_DEATH_EFFECT]!==void 0&&fe(I[O.SHOW_DEATH_EFFECT]),I[O.SHOW_NAMES]!==void 0&&me(I[O.SHOW_NAMES]),I[O.SHOW_NAMES_TO_GM]!==void 0&&ge(I[O.SHOW_NAMES_TO_GM]),I[O.SHOW_TURN_EFFECT]!==void 0&&ve(I[O.SHOW_TURN_EFFECT]),I[O.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&j(I[O.USE_DESCRIPTIVE_DUPLICATES]),I[O.ENABLE_RUMBLE]!==void 0&&xe(I[O.ENABLE_RUMBLE]),I[O.ENABLE_BONES]!==void 0&&M(I[O.ENABLE_BONES]),I[O.ENABLE_DICE_PLUS]!==void 0&&N(I[O.ENABLE_DICE_PLUS]),I[O.ENABLE_TEXT_BASED_ROLLS]!==void 0&&Ee(I[O.ENABLE_TEXT_BASED_ROLLS]),I[O.ENABLE_OBR_NOTIFICATION]!==void 0&&Oe(I[O.ENABLE_OBR_NOTIFICATION]),I[O.SHOW_NOTIFICATION_TO_ALL]!==void 0&&Ae(I[O.SHOW_NOTIFICATION_TO_ALL]),I[O.ENABLE_DISCORD_LOGGING]!==void 0&&Me(I[O.ENABLE_DISCORD_LOGGING]),I[O.DISCORD_URL]!==void 0&&Pe(I[O.DISCORD_URL]),I[O.ENABLE_CONSOLE_LOG]!==void 0){let e=I[O.ENABLE_CONSOLE_LOG];Ie(e),A.setEnabled(e)}else Ie(!1)}},[o,I]);let L=async(e,t)=>{await c.room.setMetadata({[e]:t})},tt=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},nt=r.filter(e=>e.attr_type===`numb`).sort((e,t)=>(e.attr_name||``).localeCompare(t.attr_name||``)),rt=(e,t)=>{let r=e.trim();return r?t?/@STAT/i.test(r)?/\d\s*d\s*\d|\bd\s*\d/i.test(r)?{valid:!1,error:n(`settings.diceNotAllowedError`)}:Ze(r.replace(/@STAT/gi,`@${t}`))?{valid:!0}:{valid:!1,error:n(`settings.invalidSyntaxError`)}:{valid:!1,error:n(`settings.exprMustIncludeStatError`)}:{valid:!1,error:n(`settings.selectNumericAttributeError`)}:{valid:!1,error:n(`settings.exprRequiredError`)}},it=async(e,t)=>{await L(O.INITIATIVE_MODIFIER_BID,e),await L(O.INITIATIVE_MODIFIER_EXPR,t)},at=async e=>{if(v(e),!e){await it(``,y);return}let t=rt(y,e);t.valid||await c.notification.show(t.error||n(`settings.invalidModifierSettingsError`),`WARNING`),await it(e,y)},ot=async()=>{let e=y.trim(),t=(e.length>0?e:`@STAT`).replace(/\bx\b/gi,`@STAT`);if(b(t),!_){await it(``,t);return}let r=rt(t,_);if(!r.valid){await c.notification.show(r.error||n(`settings.invalidModifierExpressionError`),`WARNING`);return}await it(_,t)},st=async()=>{if(!_){await c.notification.show(n(`settings.selectAttributeBeforeTestingError`),`WARNING`);return}let e=y.replace(/\bx\b/gi,`@STAT`),t=rt(e,_);if(!t.valid){await c.notification.show(t.error||n(`settings.invalidModifierExpressionError`),`WARNING`);return}let r=tt(f),i=Math.floor(Math.random()*r)+1,a=Le(e.replace(/@STAT/gi,`@${_}`),{bidValueMap:{[_]:14},onMissingBid:`useZero`});if(!a.valid||!a.notation){await c.notification.show(n(`settings.couldNotResolveModifierError`),`ERROR`);return}let o=Number(a.notation),s=Number.isFinite(o)?Math.trunc(o):0,l=i+s,u=e.replace(/@STAT/gi,`14`);await c.notification.show(n(`settings.mockInitiativeResult`,{sides:r,baseRoll:i,expression:u,modifier:s,total:l}),`SUCCESS`)},ct=async()=>{try{let e=await we(),t=JSON.stringify(e,null,2),r=new Blob([t],{type:`text/plain;charset=utf-8`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`forge-collection-${new Date().toISOString().slice(0,10)}.txt`,a.click(),URL.revokeObjectURL(i),await c.notification.show(n(`settings.collectionExportComplete`,{count:e.length}),`SUCCESS`)}catch(e){A.log(`Collection export failed`,e),await c.notification.show(n(`settings.collectionExportFailed`),`ERROR`)}},lt=()=>{et(!0)},ut=()=>{et(!1),Re.current?.click()},ft=async e=>{let t=e.target.files?.[0];if(t)try{let e=await t.text(),r=JSON.parse(e);if(!Array.isArray(r)){await c.notification.show(n(`settings.collectionImportArrayError`),`ERROR`);return}let i=await ae(r);await c.notification.show(n(`settings.collectionImportCompleteSummary`,{created:i.created,updated:i.updated,skipped:i.skipped}),`SUCCESS`)}catch(e){A.log(`Collection import failed`,e),await c.notification.show(n(`settings.collectionImportFailed`),`ERROR`)}finally{e.target.value=``}},pt=async()=>{Xe(!0);try{await ze(),await c.broadcast.sendMessage(t.AUTHSYNCCHANNEL,{type:`BS_AUTH_STATE`,source:t.EXTENSIONID,snapshot:$e()},{destination:`LOCAL`}),He(dt()),We(Ge()),qe(gt()),await c.notification.show(n(`settings.connectedAccount`),`SUCCESS`)}catch(e){A.error(`Battle-System auth connection failed`,e),await c.notification.show(n(`settings.unableToConnectAccount`),`ERROR`),He(dt()),We(Ge()),qe(gt())}finally{Xe(!1)}};return(0,V.jsxs)(Yd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[(0,V.jsxs)(ym,{theme:e,children:[(0,V.jsx)(bm,{theme:e,children:n(`settings.pageTitle`)}),(0,V.jsxs)(xm,{theme:e,children:[(0,V.jsx)(Lm,{theme:e,children:n(`settings.accountSectionTitle`)}),(0,V.jsx)(Wm,{children:(0,V.jsx)(Sm,{theme:e,onClick:()=>{pt()},disabled:Je,children:n(Je?`settings.connecting`:Ve?`settings.reconnectAccount`:`settings.connectAccount`)})}),(0,V.jsx)(Gm,{theme:e,$connected:Ve,children:Ve?n(`settings.statusConnected`,{tier:Ue}):n(`settings.statusDisconnected`)})]}),(0,V.jsxs)(xm,{theme:e,children:[(0,V.jsx)(Lm,{theme:e,children:n(`settings.collectionSectionTitle`)}),(0,V.jsxs)(Wm,{children:[(0,V.jsx)(Sm,{theme:e,onClick:ct,children:n(`settings.export`)}),(0,V.jsx)(Sm,{theme:e,onClick:lt,children:n(`settings.import`)})]}),(0,V.jsx)(`input`,{ref:Re,type:`file`,accept:`.txt,.json,text/plain,application/json`,onChange:ft,style:{display:`none`}})]}),(0,V.jsxs)(xm,{theme:e,children:[(0,V.jsx)(Lm,{theme:e,children:n(`settings.listControlsSectionTitle`)}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.reverseInitiative,children:n(`settings.reverseInitiative`)})}),(0,V.jsx)(Z,{label:n(`settings.reverseInitiative`),isOn:u,onChange:async e=>{d(e),await L(O.REVERSE_INITIATIVE,e),e&&s&&(l(!1),await L(O.POPCORN_INITIATIVE,!1))}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.popcornInitiative,children:n(`settings.popcornInitiative`)})}),(0,V.jsx)(Z,{label:n(`settings.popcornInitiative`),isOn:s,onChange:async e=>{l(e),await L(O.POPCORN_INITIATIVE,e),e&&u&&(d(!1),await L(O.REVERSE_INITIATIVE,!1))}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.initiativeDie,children:n(`settings.initiativeDie`)})}),(0,V.jsx)(Vm,{theme:e,type:`text`,value:f,onChange:async e=>{let t=e.target.value;m(t),await L(O.DICE_RANGE,t),A.log(`Dice Range:`,t)},placeholder:`D20`,maxLength:3})]}),(0,V.jsxs)(Rm,{theme:e,children:[(0,V.jsx)(zm,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.initiativeModifierAttr,children:n(`settings.initiativeModifier`)})}),(0,V.jsxs)(Hm,{theme:e,value:_,onChange:async e=>{await at(e.target.value)},children:[(0,V.jsx)(`option`,{value:``,children:n(`settings.none`)}),nt.map(e=>(0,V.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,V.jsxs)(Rm,{theme:e,children:[(0,V.jsx)(zm,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.initiativeModifierMath,children:n(`settings.math`)})}),(0,V.jsx)(Vm,{theme:e,type:`text`,value:y,onChange:e=>{b(e.target.value)},onBlur:async()=>{await ot()},placeholder:`floor((@STAT-10)/2)`,maxLength:120,disabled:!_}),(0,V.jsx)(Um,{theme:e,type:`button`,onClick:()=>{st()},disabled:!_,children:n(`settings.test`)})]}),(0,V.jsx)(Bm,{theme:e,children:n(`settings.initiativeModifierHint`)}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.showCardColumn,children:n(`settings.showCardColumn`)})}),(0,V.jsx)(Z,{label:n(`settings.showCardColumn`),isOn:h,onChange:async e=>{g(e),await L(O.SHOW_CARD_ACCESS,e)}})]})]}),(0,V.jsxs)(xm,{theme:e,children:[(0,V.jsx)(Lm,{theme:e,children:n(`settings.playerControlsSectionTitle`)}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.showPlayerView,children:n(`settings.showPlayerView`)})}),(0,V.jsx)(Z,{label:n(`settings.showPlayerView`),isOn:x,onChange:async e=>{S(e),await L(O.SHOW_PLAYER_VIEW,e)}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.showNonPartyUnits,children:n(`settings.showNonPartyUnits`)})}),(0,V.jsx)(Z,{label:n(`settings.showNonPartyUnits`),isOn:C,onChange:async e=>{w(e),await L(O.SHOW_NON_PARTY_UNITS,e)}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.showHpNumbersOnList,children:n(`settings.showHpNumbersOnList`)})}),(0,V.jsx)(Z,{label:n(`settings.showHpNumbersOnList`),isOn:T,onChange:async e=>{E(e),await L(O.SHOW_LIST_HP_NUMBERS,e)}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.ownerOnlyEdit,children:n(`settings.ownerOnlyEdit`)})}),(0,V.jsx)(Z,{label:n(`settings.ownerOnlyEdit`),isOn:D,onChange:async e=>{ee(e),await L(O.SHOW_OWNER_ONLY_EDIT,e)}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.showAdjustHpContextMenu,children:n(`settings.showAdjustHpContextMenu`)})}),(0,V.jsx)(Z,{label:n(`settings.showAdjustHpContextMenu`),isOn:te,onChange:async e=>{ne(e),await L(O.SHOW_MODIFY_UNIT_CONTEXT_MENU,e)}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.showViewUnitContextMenuForPlayers,children:n(`settings.showViewUnitContextMenuForPlayers`)})}),(0,V.jsx)(Z,{label:n(`settings.showViewUnitContextMenuForPlayers`),isOn:re,onChange:async e=>{k(e),await L(O.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS,e)}})]})]}),(0,V.jsxs)(xm,{theme:e,children:[(0,V.jsx)(Lm,{theme:e,children:n(`settings.gameControlsSectionTitle`)}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.showHpBarsOnTokens,children:n(`settings.showHpBarsOnTokens`)})}),(0,V.jsx)(Z,{label:n(`settings.showHpBarsOnTokens`),isOn:ie,onChange:async e=>{oe(e),await L(O.SHOW_HP_BARS,e),e&&le&&(ue(!1),await L(O.SHOW_HP_NUMBERS,!1)),e&&I[O.HP_BAR_ORIENTATION]===void 0&&(ce(`bottom`),await L(O.HP_BAR_ORIENTATION,`bottom`))}})]}),(ie||le)&&(0,V.jsxs)(Rm,{theme:e,children:[(0,V.jsx)(zm,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.hpOrientation,children:n(`settings.orientation`)})}),(0,V.jsxs)(Hm,{theme:e,value:se,onChange:async e=>{let t=e.target.value;ce(t),await L(O.HP_BAR_ORIENTATION,t)},children:[(0,V.jsx)(`option`,{value:`top`,children:n(`common.orientation.top`)}),(0,V.jsx)(`option`,{value:`bottom`,children:n(`common.orientation.bottom`)}),(0,V.jsx)(`option`,{value:`left`,children:n(`common.orientation.left`)}),(0,V.jsx)(`option`,{value:`right`,children:n(`common.orientation.right`)})]})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.showHpNumbersOnTokens,children:n(`settings.showHpNumbersOnTokens`)})}),(0,V.jsx)(Z,{label:n(`settings.showHpNumbersOnTokens`),isOn:le,onChange:async e=>{ue(e),await L(O.SHOW_HP_NUMBERS,e),e&&ie&&(oe(!1),await L(O.SHOW_HP_BARS,!1)),e&&I[O.HP_BAR_ORIENTATION]===void 0&&(ce(`bottom`),await L(O.HP_BAR_ORIENTATION,`bottom`))}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.showDeathEffect,children:n(`settings.showDeathEffect`)})}),(0,V.jsx)(Z,{label:n(`settings.showDeathEffect`),isOn:de,onChange:async e=>{fe(e),await L(O.SHOW_DEATH_EFFECT,e)}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.showNamesOnTokens,children:n(`settings.showNamesOnTokens`)})}),(0,V.jsx)(Z,{label:n(`settings.showNamesOnTokens`),isOn:pe,onChange:async e=>{me(e),await L(O.SHOW_NAMES,e);let t=a.filter(e=>e.metadata[p.ON_LIST]===!0);e?(A.log(`Showing names on tokens`),await c.scene.items.updateItems(t,e=>{for(let t of e){let e=t.metadata[p.UNIT_NAME],n=t;e&&n.text&&(n.text.plainText=String(e))}})):(A.log(`Hiding names on tokens`),await c.scene.items.updateItems(t,e=>{for(let t of e){let e=t;e.text&&(e.text.plainText=``)}}))}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.showNamesToGm,children:n(`settings.showNamesToGm`)})}),(0,V.jsx)(Z,{label:n(`settings.showNamesToGm`),isOn:he,onChange:async e=>{ge(e),await L(O.SHOW_NAMES_TO_GM,e)}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.showTurnEffect,children:n(`settings.showTurnEffect`)})}),(0,V.jsx)(Z,{label:n(`settings.showTurnEffect`),isOn:_e,onChange:async e=>{ve(e),await L(O.SHOW_TURN_EFFECT,e)}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.useDescriptiveNames,children:n(`settings.useDescriptiveNames`)})}),(0,V.jsx)(Z,{label:n(`settings.useDescriptiveNames`),isOn:ye,onChange:async e=>{j(e),await L(O.USE_DESCRIPTIVE_DUPLICATES,e)}})]})]}),(0,V.jsxs)(xm,{theme:e,children:[(0,V.jsx)(Lm,{theme:e,children:n(`settings.diceControlsSectionTitle`)}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.enableTextBasedRolls,children:n(`settings.enableTextBasedRolls`)})}),(0,V.jsx)(Z,{label:n(`settings.enableTextBasedRolls`),isOn:Te,onChange:async e=>{Ee(e),await L(O.ENABLE_TEXT_BASED_ROLLS,e),e&&(Oe(!0),xe(!1),M(!1),N(!1),await L(O.ENABLE_OBR_NOTIFICATION,!0),await L(O.ENABLE_RUMBLE,!1),await L(O.ENABLE_BONES,!1),await L(O.ENABLE_DICE_PLUS,!1))}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.enableRumble,children:n(`settings.enableRumble`)})}),(0,V.jsx)(Z,{label:n(`settings.enableRumble`),isOn:be,onChange:async e=>{xe(e),await L(O.ENABLE_RUMBLE,e),e&&(M(!1),N(!1),Ee(!1),await L(O.ENABLE_BONES,!1),await L(O.ENABLE_DICE_PLUS,!1),await L(O.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.enableBones,children:n(`settings.enableBones`)})}),(0,V.jsx)(Z,{label:n(`settings.enableBones`),isOn:Se,onChange:async e=>{M(e),await L(O.ENABLE_BONES,e),e&&(xe(!1),N(!1),Ee(!1),await L(O.ENABLE_RUMBLE,!1),await L(O.ENABLE_DICE_PLUS,!1),await L(O.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.enableDicePlus,children:n(`settings.enableDicePlus`)})}),(0,V.jsx)(Z,{label:n(`settings.enableDicePlus`),isOn:Ce,onChange:async e=>{N(e),await L(O.ENABLE_DICE_PLUS,e),e&&(xe(!1),M(!1),Ee(!1),await L(O.ENABLE_RUMBLE,!1),await L(O.ENABLE_BONES,!1),await L(O.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.enableObrNotification,children:n(`settings.enableObrNotification`)})}),(0,V.jsx)(Z,{label:n(`settings.enableObrNotification`),isOn:De,onChange:async e=>{Oe(e),await L(O.ENABLE_OBR_NOTIFICATION,e)}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.showResultsToAll,children:n(`settings.showResultsToAll`)})}),(0,V.jsx)(Z,{label:n(`settings.showResultsToAll`),isOn:ke,onChange:async e=>{Ae(e),await L(O.SHOW_NOTIFICATION_TO_ALL,e)}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.enableDiscordLogging,children:n(`settings.enableDiscordLogging`)})}),(0,V.jsx)(Z,{label:n(`settings.enableDiscordLogging`),isOn:je,onChange:async e=>{if(e&&!Ye(Ne.trim())){await c.notification.show(n(`settings.invalidDiscordWebhookWarning`),`WARNING`),Me(!1),await L(O.ENABLE_DISCORD_LOGGING,!1);return}Me(e),await L(O.ENABLE_DISCORD_LOGGING,e)}})]}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)(zm,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.discordUrl,children:n(`settings.discordUrl`)})}),(0,V.jsx)(Vm,{theme:e,type:`text`,value:Ne,onChange:async e=>{let t=e.target.value,n=t.trim();Pe(t),await L(O.DISCORD_URL,n),A.log(`Discord URL:`,n)},placeholder:`https://discord.com/api/webhooks/...`,maxLength:200})]})]}),(0,V.jsxs)(xm,{theme:e,children:[(0,V.jsx)(Lm,{theme:e,children:n(`settings.otherSectionTitle`)}),(0,V.jsxs)(Q,{theme:e,children:[(0,V.jsx)($,{theme:e,children:(0,V.jsx)(P,{theme:e,text:F.enableConsoleLog,children:n(`settings.enableConsoleLog`)})}),(0,V.jsx)(Z,{label:n(`settings.enableConsoleLog`),isOn:Fe,onChange:async e=>{Ie(e),A.setEnabled(e),await L(O.ENABLE_CONSOLE_LOG,e)}})]})]}),(0,V.jsxs)(xm,{theme:e,children:[(0,V.jsx)(Lm,{theme:e,children:n(`settings.clashImportSectionTitle`)}),(0,V.jsx)(Wm,{children:(0,V.jsx)(P,{theme:e,text:n(`settings.clashImportTooltip`),children:(0,V.jsx)(Sm,{theme:e,onClick:()=>{Be.current?.click()},children:n(`settings.clashImportLocal`)})})}),(0,V.jsx)(`input`,{ref:Be,type:`file`,accept:`.txt,.json,text/plain,application/json`,onChange:async e=>{let t=e.target.files?.[0];if(t)try{let e=await t.text(),r=JSON.parse(e);if(!Array.isArray(r)){await c.notification.show(n(`settings.clashImportArrayError`),`ERROR`);return}let{migrateClashCollectionFromJson:i}=await Im(async()=>{let{migrateClashCollectionFromJson:e}=await import(`./clashToForgeMapper-CwNRRzoH.js`);return{migrateClashCollectionFromJson:e}},[]),a=i(r);if(a.records.length===0){await c.notification.show(n(`settings.clashImportFailed`),`ERROR`);return}let o=await ae(a.records);await c.notification.show(n(`settings.clashImportCompleteSummary`,{created:o.created,updated:o.updated,skipped:o.skipped,failed:a.skipped}),`SUCCESS`)}catch(e){A.log(`Clash collection import failed`,e),await c.notification.show(n(`settings.clashImportFailed`),`ERROR`)}finally{e.target.value=``}},style:{display:`none`}})]})]}),(0,V.jsx)(Am,{isOpen:Qe,title:n(`settings.confirmImportTitle`),onClose:()=>et(!1),actions:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Sm,{theme:e,variant:`secondary`,onClick:()=>et(!1),children:n(`settings.cancel`)}),(0,V.jsx)(Sm,{theme:e,onClick:ut,children:n(`settings.continue`)})]}),children:(0,V.jsx)(Km,{theme:e,children:n(`settings.importConfirmMessage`)})})]})};var Jm=T.div`
  ${{display:`flex`,height:`100%`,flexDirection:`column`,padding:`1rem`}}
`,Ym=T.div`
  ${{flex:`1 1 0%`,overflowY:`auto`,borderRadius:`0.5rem`,borderWidth:`2px`,"--tw-border-opacity":`1`,borderColor:`rgb(255 255 255 / var(--tw-border-opacity, 1))`,padding:`0.5rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  margin: 10px;
  white-space: break-spaces;
  word-wrap: break-word;
  margin-bottom: 50px;
`,Xm=T.div`
  ${{marginBottom:`0.5rem`,textAlign:`left`}}
`,Zm=T.span`
  ${{marginRight:`0.5rem`,fontSize:`0.75rem`,"--tw-text-opacity":`1`,color:`rgb(203 213 224 / var(--tw-text-opacity, 1))`}}
`,Qm=T.span`
  ${{fontSize:`0.875rem`,"--tw-text-opacity":`1`,color:`rgb(255 255 255 / var(--tw-text-opacity, 1))`}}
`;const $m=()=>{let e=jt(e=>e.messages),t=(0,z.useRef)(null),{theme:n}=Rt(),{t:r}=yt();return(0,z.useEffect)(()=>{t.current?.scrollIntoView({behavior:`smooth`})},[e]),(0,V.jsx)(Yd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,V.jsxs)(Jm,{children:[(0,V.jsx)(bm,{theme:n,children:r(`nav.systemLog`)}),(0,V.jsxs)(Ym,{children:[e.map(e=>(0,V.jsxs)(Xm,{children:[(0,V.jsx)(Zm,{children:e.timestamp}),(0,V.jsx)(Qm,{children:e.text})]},e.id)),(0,V.jsx)(`div`,{ref:t})]})]})})},eh=`buff_effect_one`,th=`debuff_effect_one`,nh=[{value:`buff_effect_one`,label:`Buff Effect One`},{value:`buff_effect_two`,label:`Buff Effect Two`}],rh=[{value:`debuff_effect_one`,label:`Debuff Effect One`},{value:`debuff_effect_two`,label:`Debuff Effect Two`}],ih=e=>nh.some(t=>t.value===e),ah=e=>rh.some(t=>t.value===e),oh=e=>{switch(e){case`buff_effect_two`:return`
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
`}};var ch=t.EXTENSIONID,lh=`com.battle-system.forge`;const uh={SYSTEM_NAME:`${ch}/SystemName`,IMPORT_DATE:`${ch}/ImportDate`,SNAPSHOT_PUBLIC_ID:`${ch}/SnapshotPublicId`};var dh=bt(E.attributes),fh=(e,t)=>e instanceof Error&&e.message?e.message:t,ph=T.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,mh=T.div`
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`,hh=T.h2`
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  padding: 12px 15px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 400;
`,gh=T.p`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`,_h=T.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 15px;
`,vh=T.div`
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
`,yh=T.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.theme.PRIMARY};
  margin-top: 5px;
`,bh=T.div`
  margin-top: 16px;
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 14px;
`,xh=T.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 10px 0;
  font-size: 15px;
`,Sh=T.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`,Ch=T.label`
  color: ${e=>e.theme.PRIMARY};
  min-width: 84px;
  font-size: 13px;
`,wh=T.select`
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
`,Th=T.div`
  background-color: ${()=>f(`#FF0000`,.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,Eh=T.div`
  background-color: ${()=>f(`#00FF00`,.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,Dh=T.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`,Oh=T.p`
  color: ${e=>f(e.theme.PRIMARY,.9)};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,kh=T.div`
  margin-top: 30px;
`,Ah=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,jh=T.div`
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Mh=T.div`
  flex: 1;
`,Nh=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`,Ph=T.div`
  color: ${e=>f(e.theme.PRIMARY,.7)};
  font-size: 13px;
  font-style: italic;
`,Fh=T.div`
  display: flex;
  gap: 8px;
`,Ih=T.button`
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
`,Lh={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}};const Rh=()=>{let{theme:e,updateThemeFromSystem:t}=Rt(),{t:n,locale:r}=yt(),i=B(e=>e.sceneMetadata),a=B(e=>e.roomMetadata),o=a,s=B(e=>e.systemData),l=B(e=>e.setSystemData),[u,d]=(0,z.useState)(()=>tt().premiumAuthorized),[p,m]=(0,z.useState)(``),[h,g]=(0,z.useState)(!1),[_,v]=(0,z.useState)(null),[y,b]=(0,z.useState)(null),[x,S]=(0,z.useState)(``),[w,T]=(0,z.useState)(null),[D,ee]=(0,z.useState)(null),[te,ne]=(0,z.useState)([]),[re,k]=(0,z.useState)(``),[ie,ae]=(0,z.useState)(``),[oe,se]=(0,z.useState)(eh),[ce,le]=(0,z.useState)(th),[ue,fe]=(0,z.useState)(!1),[pe,me]=(0,z.useState)(!1),[he,ge]=(0,z.useState)(null),[_e,ve]=(0,z.useState)(null),[ye,j]=(0,z.useState)([]),[be,xe]=(0,z.useState)(!1),[Se,M]=(0,z.useState)(null),[N,we]=(0,z.useState)(``),Te={buff_effect_one:n(`system.buffVisualPreset.buff_effect_one`),buff_effect_two:n(`system.buffVisualPreset.buff_effect_two`)},Ee={debuff_effect_one:n(`system.debuffVisualPreset.debuff_effect_one`),debuff_effect_two:n(`system.debuffVisualPreset.debuff_effect_two`)};(0,z.useEffect)(()=>{let e=!0,t=async()=>{await mt(),e&&d(tt().premiumAuthorized)},n=Fe(t=>{e&&d(t.premiumAuthorized)});return t(),()=>{e=!1,n()}},[]),(0,z.useEffect)(()=>{De(),je()},[i,a,s,u]);let De=()=>{try{if(!u){let e={primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},t=o[O.BUFF_VISUAL_PRESET],n=o[O.DEBUFF_VISUAL_PRESET],r=ih(t)?t:eh,i=ah(n)?n:th;S(E.name),T(null),ee(e),ne(E.attributes),k(dh.currentHpBid),ae(dh.maxHpBid),se(r),le(i);return}if(s){let e=o[O.HP_CURRENT_BID],t=o[O.HP_MAX_BID],n=o[O.BUFF_VISUAL_PRESET],r=o[O.DEBUFF_VISUAL_PRESET],i=ih(n)?n:null,a=ah(r)?r:null;S(s.systemName),T(s.importDate),ee(s.theme),ne(s.attributes),k(e||``),ae(t||``),he&&i===he&&ge(null),_e&&a===_e&&ve(null),!ue&&!he&&se(e=>i||e),!pe&&!_e&&le(e=>a||e);return}let e=a[uh.SYSTEM_NAME],t=a[uh.IMPORT_DATE],n=o[O.HP_CURRENT_BID],r=o[O.HP_MAX_BID],i=o[O.BUFF_VISUAL_PRESET],c=o[O.DEBUFF_VISUAL_PRESET],l=ih(i)?i:null,d=ah(c)?c:null;S(e||E.name),T(t||null),ee({primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url}),ne(E.attributes),k(n||``),ae(r||``),he&&l===he&&ge(null),_e&&d===_e&&ve(null),!ue&&!he&&se(e=>l||e),!pe&&!_e&&le(e=>d||e)}catch(e){A.error(`Error loading system from cache:`,e)}},Oe=async(e,t)=>{await c.room.setMetadata({[e]:t})},ke=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let r;try{r=JSON.parse(e)}catch{throw Error(n(`system.error.invalidJsonField`,{field:t}))}if(!Array.isArray(r))throw Error(n(`system.error.invalidArrayField`,{field:t}));return r}throw Error(n(`system.error.invalidFieldType`,{field:t}))},Ae=te.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`numb`||t===`resource`}),je=()=>{try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(n&&n.startsWith(`${lh}.`)&&n.endsWith(`.backup`)){let t=localStorage.getItem(n);if(t){let n=JSON.parse(t);e.push(n)}}}e.sort((e,t)=>new Date(t.backupDate).getTime()-new Date(e.backupDate).getTime()),j(e)}catch(e){A.error(`Error loading backups:`,e)}},Me=async e=>{try{if(!s){A.warn(`Cannot create backup: runtime system data is unavailable`);return}let e=s.systemName||E.name,t={name:e,backupDate:new Date().toISOString(),theme_primary:s.theme.primary,theme_offset:s.theme.offset,theme_background:s.theme.background,theme_border:s.theme.border,background_url:s.theme.background_url,card_layout:s.cardLayout,list_layout:s.listLayout,attributes:s.attributes},n=`${lh}.${e}.backup`;localStorage.setItem(n,JSON.stringify(t)),A.log(`Backup created for ${e}`),je()}catch(e){throw A.error(`Error creating backup:`,e),e}},Ne=e=>{try{let t=`${lh}.${e}.backup`;localStorage.removeItem(t),A.log(`Backup deleted for ${e}`),je(),b(n(`system.success.backupDeleted`,{name:e}))}catch(e){A.error(`Error deleting backup:`,e),v(n(`system.error.deleteBackup`))}},Pe=(e,t)=>{we(e),M(()=>t),xe(!0)},Ie=async()=>{xe(!1),Se&&(await Se(),M(null))},Le=()=>{xe(!1),M(null),we(``)},Re=async()=>{if(!p.trim()){v(n(`system.error.enterShareId`));return}Pe(n(`system.confirm.importSystem`),async()=>{await ze()})},ze=async()=>{if(!gt()){v(n(`system.error.premiumImport`));return}g(!0),v(null),b(null);try{await He();let{data:e,error:r}=await Ce(async()=>C.rpc(`bs_forge_import_system_snapshot`,{p_source_share_id:p.trim()}));if(r)throw r;if(!e){v(n(`system.error.noSystemFound`)),g(!1);return}let i=Array.isArray(e)?e[0]:e;if(!i||typeof i.snapshot_public_id!=`string`)throw Error(n(`system.error.snapshotInvalid`));let a=ke(i.card_layout,`card_layout`),o=ke(i.list_layout,`list_layout`),s=ke(i.attributes,`attributes`);if(!Array.isArray(s))throw Error(n(`system.error.attributesInvalid`));await Me(x);let u={primary:i.theme_primary,offset:i.theme_offset,background:i.theme_background,border:i.theme_border,background_url:i.background_url},d=new Date().toISOString();await c.room.setMetadata({[uh.SNAPSHOT_PUBLIC_ID]:i.snapshot_public_id,[uh.SYSTEM_NAME]:i.system_name,[uh.IMPORT_DATE]:d}),l({theme:u,cardLayout:a,listLayout:o,attributes:s,systemName:i.system_name,importDate:d,snapshotPublicId:i.snapshot_public_id}),S(i.system_name),T(d),ee(u),t(u.primary,u.offset,u.background,u.border,u.background_url),b(n(`system.success.systemImported`,{name:i.system_name})),m(``),A.log(`System snapshot imported and loaded:`,{systemName:i.system_name,snapshotPublicId:i.snapshot_public_id})}catch(e){A.error(`Error fetching system:`,e),v(fh(e,n(`system.error.fetchSystem`)))}finally{g(!1)}},Be=async e=>{Pe(n(`system.confirm.restoreBackup`,{name:e.name}),async()=>{await Ve(e)})},Ve=async e=>{g(!0),v(null),b(null);try{if(!gt()){v(n(`system.error.premiumRestore`));return}await He(),await Me(x);let r={primary:e.theme_primary,offset:e.theme_offset,background:e.theme_background,border:e.theme_border,background_url:e.background_url};if(!Array.isArray(e.card_layout)||!Array.isArray(e.list_layout)||!Array.isArray(e.attributes))throw Error(n(`system.error.backupInvalid`));let i=new Date().toISOString(),a=`forge-backup:${e.name.trim().toLowerCase()}`,{data:o,error:s}=await Ce(async()=>C.rpc(`bs_forge_upsert_user_snapshot_payload`,{p_source_share_id:a,p_system_name:e.name,p_background_url:e.background_url,p_theme_primary:e.theme_primary,p_theme_offset:e.theme_offset,p_theme_background:e.theme_background,p_theme_border:e.theme_border,p_card_layout:e.card_layout,p_list_layout:e.list_layout,p_attributes:e.attributes}));if(s)throw s;let u=Array.isArray(o)?o[0]:o;if(!u||typeof u.snapshot_public_id!=`string`)throw Error(n(`system.error.backupPublishFailed`));l({theme:r,cardLayout:e.card_layout,listLayout:e.list_layout,attributes:e.attributes,systemName:e.name,importDate:i,snapshotPublicId:u.snapshot_public_id}),await c.room.setMetadata({[uh.SNAPSHOT_PUBLIC_ID]:u.snapshot_public_id,[uh.SYSTEM_NAME]:e.name,[uh.IMPORT_DATE]:i}),S(e.name),T(i),ee(r),t(r.primary,r.offset,r.background,r.border,r.background_url),b(n(`system.success.backupRestored`,{name:e.name})),A.log(`System restored from backup:`,e.name)}catch(e){A.error(`Error restoring backup:`,e),v(n(`system.error.restoreBackup`))}finally{g(!1)}},Ue=async()=>{g(!0),v(null),b(null);try{let e={primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url};l({theme:e,cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,snapshotPublicId:null}),await c.room.setMetadata({[uh.SNAPSHOT_PUBLIC_ID]:null,[uh.SYSTEM_NAME]:E.name,[uh.IMPORT_DATE]:null}),S(E.name),T(null),ee(e),t(e.primary,e.offset,e.background,e.border,e.background_url),b(n(`system.success.resetDefault`))}catch(e){v(n(`system.error.resetDefault`)),A.error(`Error resetting to default:`,e)}finally{g(!1)}},We=e=>e?new Date(e).toLocaleDateString(r,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):null,Ge=!u,Ke=!u;return(0,V.jsxs)(Yd.div,{variants:Lh,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,V.jsxs)(ym,{theme:e,children:[(0,V.jsx)(bm,{theme:e,children:n(`system.pageTitle`)}),(0,V.jsx)(hh,{theme:e,children:x}),w?(0,V.jsx)(gh,{theme:e,children:n(`system.importedOn`,{value:We(w)})}):(0,V.jsx)(gh,{theme:e,children:n(`system.usingDefaultSystem`)}),D&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(_h,{children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(vh,{color:D.primary,theme:e,children:D.primary}),(0,V.jsx)(yh,{theme:e,children:n(`system.swatch.primary`)})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(vh,{color:D.offset,theme:e,children:D.offset}),(0,V.jsx)(yh,{theme:e,children:n(`system.swatch.offset`)})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(vh,{color:D.background,theme:e,children:D.background}),(0,V.jsx)(yh,{theme:e,children:n(`system.swatch.background`)})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(vh,{color:D.border,theme:e,children:D.border}),(0,V.jsx)(yh,{theme:e,children:n(`system.swatch.border`)})]})]}),(0,V.jsxs)(bh,{theme:e,children:[(0,V.jsx)(xh,{theme:e,children:n(`system.settingsSectionTitle`)}),(0,V.jsxs)(Sh,{children:[(0,V.jsx)(Ch,{theme:e,children:n(`system.currentHp`)}),(0,V.jsxs)(wh,{theme:e,value:re,disabled:Ke,onChange:async e=>{if(Ke)return;let t=e.target.value;k(t),await Oe(O.HP_CURRENT_BID,t)},children:[(0,V.jsx)(`option`,{value:``,children:n(`system.selectAttribute`)}),Ae.map(e=>(0,V.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?n(`system.resourceOptionSuffix`):``]},e.attr_bid))]})]}),(0,V.jsxs)(Sh,{children:[(0,V.jsx)(Ch,{theme:e,children:n(`system.maxHp`)}),(0,V.jsxs)(wh,{theme:e,value:ie,disabled:Ke,onChange:async e=>{if(Ke)return;let t=e.target.value;ae(t),await Oe(O.HP_MAX_BID,t)},children:[(0,V.jsx)(`option`,{value:``,children:n(`system.selectAttribute`)}),Ae.map(e=>(0,V.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name,String(e.attr_type||``).toLowerCase()===`resource`?n(`system.resourceOptionSuffix`):``]},e.attr_bid))]})]}),Ke&&(0,V.jsx)(gh,{theme:e,children:n(`system.premiumHpMappingLocked`)}),(0,V.jsxs)(Sh,{children:[(0,V.jsx)(Ch,{theme:e,children:n(`system.buffVisual`)}),(0,V.jsx)(wh,{theme:e,value:oe,onChange:async e=>{let t=e.target.value;if(ih(t)){se(t),ge(t),fe(!0);try{await Oe(O.BUFF_VISUAL_PRESET,t)}finally{fe(!1)}}},children:nh.map(e=>(0,V.jsx)(`option`,{value:e.value,children:Te[e.value]},e.value))})]}),(0,V.jsxs)(Sh,{children:[(0,V.jsx)(Ch,{theme:e,children:n(`system.debuffVisual`)}),(0,V.jsx)(wh,{theme:e,value:ce,onChange:async e=>{let t=e.target.value;if(ah(t)){le(t),ve(t),me(!0);try{await Oe(O.DEBUFF_VISUAL_PRESET,t)}finally{me(!1)}}},children:rh.map(e=>(0,V.jsx)(`option`,{value:e.value,children:Ee[e.value]},e.value))})]})]})]}),(0,V.jsxs)(mh,{theme:e,children:[(0,V.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0},children:n(`system.importSectionTitle`)}),(0,V.jsx)(`p`,{style:{color:f(e.PRIMARY,.8),fontSize:`14px`},children:n(Ge?`system.importLockedDescription`:`system.importDescription`)}),(0,V.jsx)(ph,{children:(0,V.jsx)(Cm,{theme:e,type:`text`,value:p,onChange:e=>m(e.target.value),placeholder:Ge?``:n(`system.shareIdPlaceholder`),disabled:h||Ge,onKeyPress:e=>e.key===`Enter`&&Re()})}),(0,V.jsxs)(Dh,{children:[(0,V.jsx)(Sm,{theme:e,onClick:Re,disabled:h||Ge||!p.trim(),children:n(h?`system.importButtonLoading`:`system.importButton`)}),(0,V.jsx)(Sm,{theme:e,variant:`secondary`,onClick:Ue,disabled:h,children:n(`system.useDefaultButton`)})]})]}),_&&(0,V.jsxs)(Th,{theme:e,children:[(0,V.jsx)(`strong`,{children:n(`system.errorPrefix`)}),` `,_]}),y&&(0,V.jsxs)(Eh,{theme:e,children:[(0,V.jsx)(`strong`,{children:n(`system.successPrefix`)}),` `,y]}),ye.length>0&&(0,V.jsx)(kh,{children:(0,V.jsxs)(xm,{theme:e,children:[(0,V.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0,marginBottom:`15px`},children:n(`system.backupsSectionTitle`)}),(0,V.jsx)(Ah,{children:ye.map(t=>(0,V.jsxs)(jh,{theme:e,children:[(0,V.jsxs)(Mh,{children:[(0,V.jsx)(Nh,{theme:e,children:t.name}),(0,V.jsx)(Ph,{theme:e,children:n(`system.backedUpOn`,{value:We(t.backupDate)})})]}),(0,V.jsxs)(Fh,{children:[(0,V.jsx)(Ih,{theme:e,onClick:()=>Be(t),disabled:h,title:n(`system.importBackupTitle`),children:(0,V.jsx)(de,{size:18})}),(0,V.jsx)(Ih,{theme:e,$variant:`danger`,onClick:()=>Ne(t.name),disabled:h,title:n(`system.deleteBackupTitle`),children:(0,V.jsx)(Je,{size:18})})]})]},`${t.name}-${t.backupDate}`))})]})})]}),(0,V.jsx)(Am,{isOpen:be,title:n(`system.confirmActionTitle`),onClose:Le,actions:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Sm,{theme:e,variant:`secondary`,onClick:Le,children:n(`system.cancel`)}),(0,V.jsx)(Sm,{theme:e,onClick:Ie,children:n(`system.confirm`)})]}),children:(0,V.jsx)(Oh,{theme:e,children:N})})]},`system`)};function zh(e,t){let n=e.replace(`#`,``);n.length===3&&(n=n.split(``).map(e=>e+e).join(``));let r=parseInt(n,16);return`rgba(${r>>16&255}, ${r>>8&255}, ${r&255}, ${t})`}var Bh=class{static async CenterViewportOnImage(e){let t=await c.scene.grid.getDpi(),n=await c.viewport.getScale(),r=await c.viewport.getWidth(),i=await c.viewport.getHeight(),a={x:r/2,y:i/2},o={x:a.x/n,y:a.y/n},s=await this.GetImageCenter(e,t),l={x:s.x-o.x,y:s.y-o.y},u={x:l.x*n*-1,y:l.y*n*-1};await c.viewport.animateTo({position:u,scale:n})}static async GetImageCenter(t,n){if(e(t)){let e=n/t.grid.dpi,r=t.image.width*e,i=t.image.height*e,a=t.grid.offset.x/t.image.width*r,o=t.grid.offset.y/t.image.height*i;return{x:t.position.x-a+r/2,y:t.position.y-o+i/2}}else if(o(t)&&t.points.length>0)return{x:t.points[0].x,y:t.points[0].y};else return{x:t.position.x,y:t.position.y}}};const Vh=`${R}/effects`;var Hh=`${R}/effects-expired`,Uh=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Wh=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Gh=T.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`,Kh=T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
`,qh=T.div`
  flex: 0 0 120px;
  min-width: 120px;
  display: flex;
  align-items: flex-end;
`,Jh=T.label`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`,Yh=T.input`
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
`,Xh=T.select`
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
`,Zh=T(Xh)`
  min-width: 180px;
  height: 96px;
  padding-right: 8px;
`,Qh=T.button`
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
`,$h=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 240px;
  overflow-y: auto;
`,eg=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background: ${e=>f(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,tg=T.div`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  font-size: 12px;
`,ng=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,rg=T.p`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,ig=T.p`
  color: #ff6b6b;
  margin: 0;
  font-size: 12px;
`,ag=T.div`
  position: relative;
  display: inline-flex;
`,og=T.button`
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
`,sg=T.span`
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
`,cg=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const lg=({items:e,units:n,setItems:r,playerData:i})=>{let[a,o]=(0,z.useState)(null),[s,l]=(0,z.useState)(``),[u,d]=(0,z.useState)(`1`),[f,m]=(0,z.useState)(`rounds`),[h,g]=(0,z.useState)(`start`),[_,v]=(0,z.useState)(`neutral`),[y,b]=(0,z.useState)([]),[x,S]=(0,z.useState)(null),C=(0,z.useMemo)(()=>{let t=new Map;return e.forEach(e=>{e.metadata?.[p.ON_LIST]===!0&&t.set(e.id,cg(e.metadata?.[Vh]))}),t},[e]),w=e=>C.get(e)||[],T=async(t,n)=>{let i=n.filter(e=>e.remaining>0);r(e.map(e=>{if(e.id!==t)return e;let n={...e.metadata||{}};return i.length>0?n[Vh]=i:delete n[Vh],{...e,metadata:n}})),await c.scene.items.updateItems([t],e=>{let t={...e[0].metadata||{}};i.length>0?t[Vh]=i:delete t[Vh],e[0].metadata=t})},E=async e=>{try{await c.broadcast.sendMessage(Hh,{message:e},{destination:`ALL`})}catch(t){A.error(`Failed to broadcast expired effect message`,t),await c.notification.show(e,`WARNING`)}},D=async e=>{if(e.length!==0)try{await c.broadcast.sendMessage(t.MARKCONNECT,e,{destination:`LOCAL`})}catch(e){A.error(`Failed to broadcast marked effect update`,e)}},ee=async(t,n)=>{if(String(i?.role||``).toUpperCase()!==`GM`)return;let r=[],a=[],o=[];e.forEach(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return;let i=cg(e.metadata?.[Vh]);if(i.length===0)return;let s=!1,c=[];i.forEach(r=>{if(!(r.endTiming===t&&(r.durationType===`turns`||e.id===n))){c.push(r);return}let i=r.remaining-1;if(s=!0,i<=0){a.push(`${e.name||`Unit`}: ${r.name} expired`),o.push({LabelName:r.name,TokenId:e.id,Show:!1});return}c.push({...r,remaining:i})}),s&&r.push({unitId:e.id,effects:c})});for(let e of r)await T(e.unitId,e.effects);if(await D(o),a.length>0)for(let e of a)await E(e)},te=(0,z.useMemo)(()=>a&&n.find(e=>e.id===a)||null,[a,n]),ne=(0,z.useMemo)(()=>a?w(a):[],[a,C]);return(0,z.useEffect)(()=>{let e=c.broadcast.onMessage(Hh,async e=>{let t=e.data?.message;typeof t!=`string`||!t.trim()||await c.notification.show(t,`WARNING`)});return()=>{e()}},[]),{effectsModalUnitId:a,selectedEffectsUnit:te,activeEffectsForSelectedUnit:ne,effectNameInput:s,setEffectNameInput:l,effectDurationInput:u,setEffectDurationInput:d,effectDurationType:f,setEffectDurationType:m,effectEndTiming:h,setEffectEndTiming:g,effectType:_,setEffectType:v,effectTargetIds:y,setEffectTargetIds:e=>{b(Array.from(new Set(e)))},effectsModalError:x,units:n,getEffectsForUnit:w,handleOpenEffectsModal:e=>{S(null),l(``),d(`1`),m(`rounds`),g(`start`),v(`neutral`),b([e]),o(e)},handleCloseEffectsModal:()=>{o(null),S(null)},handleAddEffect:async()=>{if(!a)return;let t=s.trim(),r=parseInt(u,10);if(!t){S(`Enter an effect name.`);return}if(!Number.isFinite(r)||r<=0){S(`Duration must be a positive number.`);return}let i=Array.from(new Set(y.filter(e=>n.some(t=>t.id===e))));if(i.length===0){S(`Select at least one target.`);return}let o=w(a),c=te?.name||e.find(e=>e.id===a)?.name||`Unknown`,p={id:crypto.randomUUID(),name:t,remaining:r,durationType:f,endTiming:h,effectType:_,targets:i,createdByName:c,createdById:a};await T(a,[...o,p]),await D([{LabelName:p.name,TokenId:a,Show:!0}]),S(null),l(``),d(`1`),v(`neutral`),b([a])},handleDeleteEffect:async e=>{if(!a)return;let t=w(a),n=t.find(t=>t.id===e);await T(a,t.filter(t=>t.id!==e)),n&&await D([{LabelName:n.name,TokenId:a,Show:!1}])},processEffectsForTurnEvent:ee}},ug=({manager:e})=>{let{theme:t}=Rt(),n=(0,z.useMemo)(()=>{let t=new Map;return e.units.forEach(e=>{t.set(e.id,e.name)}),t},[e.units]),r=e=>e===`buff`?`Buff`:e===`debuff`?`Debuff`:`Neutral`,i=e=>{if(e.length===0)return`No targets`;let t=e.map(e=>n.get(e)).filter(e=>typeof e==`string`&&e.length>0);return t.length===0?`${e.length} target${e.length===1?``:`s`}`:t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`};return(0,V.jsx)(Am,{isOpen:!!e.effectsModalUnitId,title:e.selectedEffectsUnit?`Effects: ${e.selectedEffectsUnit.name}`:`Effects`,onClose:e.handleCloseEffectsModal,minWidth:`520px`,maxWidth:`600px`,children:(0,V.jsxs)(Uh,{children:[(0,V.jsxs)(Wh,{children:[(0,V.jsxs)(Gh,{children:[(0,V.jsxs)(Kh,{style:{flex:`0 0 120px`},children:[(0,V.jsx)(Jh,{theme:t,children:`Effect`}),(0,V.jsx)(Yh,{theme:t,type:`text`,placeholder:`Name`,value:e.effectNameInput,onChange:t=>e.setEffectNameInput(t.target.value)})]}),(0,V.jsxs)(Kh,{style:{flex:`0 0 140px`},children:[(0,V.jsx)(Jh,{theme:t,children:`Duration`}),(0,V.jsx)(Yh,{theme:t,type:`number`,min:1,value:e.effectDurationInput,onChange:t=>e.setEffectDurationInput(t.target.value)})]}),(0,V.jsxs)(Kh,{style:{flex:`0 0 120px`},children:[(0,V.jsx)(Jh,{theme:t,children:`By`}),(0,V.jsxs)(Xh,{theme:t,value:e.effectDurationType,onChange:t=>e.setEffectDurationType(t.target.value),children:[(0,V.jsx)(`option`,{value:`turns`,children:`Turns`}),(0,V.jsx)(`option`,{value:`rounds`,children:`Rounds`})]})]})]}),(0,V.jsxs)(Gh,{children:[(0,V.jsxs)(Kh,{style:{flex:`0 0 120px`},children:[(0,V.jsx)(Jh,{theme:t,children:`Type`}),(0,V.jsxs)(Xh,{theme:t,value:e.effectType,onChange:t=>e.setEffectType(t.target.value),children:[(0,V.jsx)(`option`,{value:`neutral`,children:`Neutral`}),(0,V.jsx)(`option`,{value:`buff`,children:`Buff`}),(0,V.jsx)(`option`,{value:`debuff`,children:`Debuff`})]})]}),(0,V.jsxs)(Kh,{style:{flex:`0 0 140px`},children:[(0,V.jsx)(Jh,{theme:t,children:`Ends at`}),(0,V.jsxs)(Xh,{theme:t,value:e.effectEndTiming,onChange:t=>e.setEffectEndTiming(t.target.value),children:[(0,V.jsx)(`option`,{value:`start`,children:`Start of turn`}),(0,V.jsx)(`option`,{value:`end`,children:`End of turn`})]})]}),(0,V.jsx)(qh,{children:(0,V.jsx)(Qh,{theme:t,onClick:e.handleAddEffect,style:{width:`100%`},children:`Add`})})]})]}),(0,V.jsxs)(Kh,{children:[(0,V.jsx)(Jh,{theme:t,children:`Targets`}),(0,V.jsx)(Zh,{theme:t,multiple:!0,value:e.effectTargetIds,onChange:t=>{let n=Array.from(t.target.selectedOptions).map(e=>e.value);e.setEffectTargetIds(n)},children:e.units.map(e=>(0,V.jsx)(`option`,{value:e.id,children:e.name},e.id))})]}),e.effectsModalError&&(0,V.jsx)(ig,{theme:t,children:e.effectsModalError}),e.activeEffectsForSelectedUnit.length===0?(0,V.jsx)(rg,{theme:t,children:`No active effects.`}):(0,V.jsx)($h,{children:e.activeEffectsForSelectedUnit.map(n=>(0,V.jsxs)(eg,{theme:t,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(ng,{theme:t,children:n.name}),(0,V.jsxs)(tg,{theme:t,children:[r(n.effectType),` • `,n.remaining,` `,n.durationType,` • ends at `,n.endTiming===`start`?`start of turn`:`end of turn`,` • by `,n.createdByName]}),(0,V.jsxs)(tg,{theme:t,children:[`Targets: `,i(n.targets)]})]}),(0,V.jsx)(Qh,{theme:t,onClick:()=>{e.handleDeleteEffect(n.id)},children:`Delete`})]},n.id))})]})})},dg=({activeEffectsCount:e,canInteract:t,onOpen:n,icon:r})=>{let{theme:i}=Rt();return(0,V.jsxs)(ag,{children:[(0,V.jsx)(og,{theme:i,$active:e>0,disabled:!t,onClick:()=>{t&&n()},children:r||(0,V.jsx)(ie,{})}),e>0&&(0,V.jsx)(sg,{theme:i,children:e>99?`99+`:e})]})};var fg=T.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,pg=T.input`
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
`;const mg=({theme:e,unit:t,canInteract:n,elevationDraftValue:r,onElevationDraftChange:i,onCommitElevationChange:a})=>(0,V.jsx)(fg,{theme:e,children:(0,V.jsx)(pg,{theme:e,type:`text`,inputMode:`decimal`,min:-999,max:999,step:1,value:r??String(t.elevation??0),readOnly:!n,onChange:n?e=>i(t.id,e.target.value):void 0,onBlur:n?e=>a(t.id,e.target.value):void 0,onKeyDown:e=>{n&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}})}),hg=({theme:e,canInteract:t,icon:n,activeEffectsCount:r,onOpen:i})=>(0,V.jsx)(fg,{theme:e,children:(0,V.jsx)(dg,{activeEffectsCount:r,canInteract:t,icon:n||(0,V.jsx)(ie,{}),onOpen:i})});var gg=`${R}/elevation-badge`,_g=`${R}/elevation-badge-owner`,vg=`${R}/elevation`,yg=200,bg=40,xg=60,Sg=120,Cg=24,wg=(e,t)=>{if(!e)return;if(e.startsWith(`#`))return zh(e,t);let n=e.match(/^rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\)$/i);if(n){let[,e,r,i]=n;return`rgba(${e}, ${r}, ${i}, ${t})`}let r=e.match(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i);if(r){let[,e,n,i]=r;return`rgba(${e}, ${n}, ${i}, ${t})`}return e},Tg=e=>`
    0 1px 1px ${f(e.BACKGROUND,.95)},
    0 0 2px ${f(e.BACKGROUND,.85)}
  `,Eg=/(\d+)d(\d+)([kd][hl]\d+|!)?/gi,Dg={anchor:ht,aperture:Ie,award:_t,"battery-charging":Ne,book:Ke,calendar:nt,clock:ut,"cloud-lightning":Qe,drama:qe,carrot:Ue,bone:We,compass:st,"dollar-sign":Pe,feather:ct,eye:at,heart:je,moon:Ae,music:he,shield:fe,star:De,sun:ie,target:_e,users:xe,wind:ve,zap:k,sword:vt,swords:M,axe:ft,"bow-arrow":et,coins:Re,wand:j,flower:Ve,skull:Oe,castle:Be,cross:L,"test-tube-diagonal":me,squirrel:pe,snowflake:Ee,shell:ge,pickaxe:rt,"heart-plus":Se,"heart-crack":re,fan:I},Og=T.div`
  padding: 2px;
  width: 100%;
`,kg=T.h1`
  color: ${e=>e.theme.PRIMARY};
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`,Ag=T.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
`,jg=T.div`
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
`,Mg=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.$compactMode?`8px`:`16px`};
`,Ng=T.button`
  background: ${e=>e.disabled?f(e.theme.BORDER,.3):f(e.theme.OFFSET,.5)};
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
    background: ${e=>e.disabled?f(e.theme.BORDER,.3):e.theme.OFFSET};
  }
  
  &:active {
    transform: ${e=>e.disabled?`none`:`scale(0.95)`};
  }

  svg {
    filter: drop-shadow(0 1px 1px ${e=>f(e.theme.BACKGROUND,.95)})
      drop-shadow(0 0 2px ${e=>f(e.theme.BACKGROUND,.75)});
  }
`,Pg=T(Ng)`
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
`,Fg=T(Ng)`
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
`,Ig=T(Ng)`
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
`,Lg=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: ${e=>e.$compactMode?`14px`:`16px`};
  font-weight: 600;
  min-width: ${e=>e.$compactMode?`44px`:`80px`};
  text-align: center;
`,Rg=T.table`
  width: ${e=>e.$compact?`max-content`:`100%`};
  min-width: ${e=>e.$compact?`${yg}px`:`100%`};
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
`,zg=T.thead`
  background-color: ${e=>f(e.theme.BACKGROUND,.5)};
`,Bg=T.tr``,Vg=T.th`
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
`,Hg=T.div`
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
`,Ug=T.tbody``,Wg=T.tr`
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
`,Gg=T.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,Kg=T(Gg)`
  font-weight: 700;
  font-size: 18px;
  color: ${e=>e.theme.OFFSET};
  min-width: 60px;
`,qg=T(Gg)`
  min-width: 48px;
`,Jg=T.button`
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
`,Yg=T.img`
  width: 18px;
  height: 18px;
  pointer-events: none;
`,Xg=T.div`
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
`,Zg=T.input`
  background: ${e=>e.$isRollable?f(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.3)`};
  border: 1px solid ${e=>e.$isRollable?f(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?Tg(e.theme):`none`};
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
`,Qg=T(Gg)`
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
`,$g=T.input`
  background: ${e=>e.$isRollable?f(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.4)`};
  border: 1px solid ${e=>e.$isRollable?f(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?Tg(e.theme):`none`};
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
`,e_=T.select`
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
`,t_=T.span`
  margin: 0 2px;
  color: ${e=>e.theme.OFFSET};
  font-weight: 500;
`,n_=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,r_=T.button`
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
`,i_=T.input`
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
`,a_=T.span`
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
`,o_=T.div`
  display: flex;
  flex-wrap: wrap;
  width: 62px;
  gap: 3px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`,s_=T.button`
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
`,c_=T.button`
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
`,l_=T.div`
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
`,u_=T(Gg)`
  width: 24px;
  min-width: 24px;
  max-width: 24px;
  padding: 0;
  position: relative;
`,d_=T.div`
  position: absolute;
  inset: 0;
  min-height: 40px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0 10px;
`,f_=T.div`
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
`,p_=T.div`
  flex: 1;
  height: 100%;
  padding: 0 8px;
  margin: 0 -10px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`,m_=T.div`
  width: 6px;
  flex: 1;
  height: 100%;
  background-repeat: repeat-y;
  background-position: center;
  background-size: 6px 16px;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='16' viewBox='0 0 6 16' preserveAspectRatio='none'%3E%3Cpolyline points='3,0 0,4 6,8 0,12 3,16' fill='none' stroke='${encodeURIComponent(e.theme.BORDER)}' stroke-width='1.2'/%3E%3C/svg%3E")`};
`,h_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
`,g_=T.button`
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
`,__=T.p`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  margin: 0 0 12px 0;
  font-size: 13px;
`,v_=T.p`
  color: #ff6b6b;
  margin: 10px 0 0 0;
  font-size: 13px;
`,y_=T.div`
  height: 1px;
  margin: 12px 0;
  background: ${e=>f(e.theme.BORDER,.7)};
`,b_=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.35)};
`,x_=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,S_=T.div`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  font-size: 11px;
`,C_=T.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`,w_=T.button`
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
`,T_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,E_=T.p`
  color: ${e=>f(e.theme.PRIMARY,.78)};
  margin: 0;
  font-size: 12px;
`,D_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 320px;
  overflow-y: auto;
`,O_=T.div`
  background: ${e=>f(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,k_=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,A_=T.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #4b5563;
  background: rgba(0, 0, 0, 0.2);
  accent-color: #ffffff;
  margin: 0;
  pointer-events: none;
`,j_=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
`,M_=T.div`
  color: ${e=>f(e.theme.PRIMARY,.85)};
  font-size: 12px;
  font-style: italic;
  line-height: 1.25;
  white-space: pre-wrap;
`,N_=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`,P_=T.button`
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
`,F_=T.p`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,I_=T.div`
  width: 100%;
  min-height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>f(e.theme.BORDER,.8)};
  background: ${e=>f(e.theme.BACKGROUND,.55)};
`,L_=T.div`
  width: ${e=>e.$small?`40px`:`60px`};
  min-width: ${e=>e.$small?`40px`:`60px`};
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>f(e.theme.BORDER,.8)};
  background: ${e=>f(e.theme.BACKGROUND,.55)};
`,R_=(e,t,n)=>{let r=[{id:crypto.randomUUID(),type:`initiative`,description:n(`initiative.defaultInitiativeDescription`)},{id:crypto.randomUUID(),type:`name`,description:n(`initiative.defaultNameDescription`)}],i=t?[{id:`card-column`,type:`card-column`}]:[];if(!e||e.length===0)return[...r,...i];let a=[...e].sort((e,t)=>e.col-t.col).map(e=>({id:e.id,type:e.type,name:e.styles?.labelName,useIcon:e.styles?.labelMode===`icon`,iconType:e.styles?.labelIcon,description:e.styles?.description,styles:e.styles}));return[...r,...a,...i]};const z_=()=>{let{t:r}=yt(),{theme:i}=Rt(),{listLayout:a,attributes:o,isLoading:s}=Mm(),l=B(e=>e.roomMetadata),u=B(e=>e.sceneMetadata),d=B(e=>e.items),f=B(e=>e.partyData),m=B(e=>e.playerData),h=B(e=>e.gridDpi),g=B(e=>e.setItems),[_,v]=(0,z.useState)([]),[y,b]=(0,z.useState)([]),[x,S]=(0,z.useState)(null),[C,w]=(0,z.useState)(1),[T,E]=(0,z.useState)(new Set),[D,ee]=(0,z.useState)(null),[te,re]=(0,z.useState)(null),[k,ae]=(0,z.useState)(!1),[oe,se]=(0,z.useState)(!1),[ce,le]=(0,z.useState)(!1),[ue,de]=(0,z.useState)({}),[fe,pe]=(0,z.useState)({}),[me,he]=(0,z.useState)({}),[ge,_e]=(0,z.useState)(null),[ve,ye]=(0,z.useState)({}),[j,Se]=(0,z.useState)(null),[M,Ce]=(0,z.useState)(null),[N,we]=(0,z.useState)(!1),[Te,Ee]=(0,z.useState)(!1),[De,Oe]=(0,z.useState)(!1),[ke,Ae]=(0,z.useState)(()=>window.innerWidth<400),[je,Me]=(0,z.useState)(null),Ne=(0,z.useRef)(null),Pe=(0,z.useRef)({}),Fe=(0,z.useRef)({}),Ie=(0,z.useRef)(null);(0,z.useEffect)(()=>{let e=()=>{Ae(window.innerWidth<400)};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let Re=(0,z.useMemo)(()=>{let e=Array.isArray(m?.selection)?m.selection:[];return new Set(e)},[m?.selection]),ze=l,Be=ze[t.EXTENSIONID+`/enabdice`]===!0,Ve=ze[O.REVERSE_INITIATIVE]||!1,He=ze[O.POPCORN_INITIATIVE]||!1,Ue=ze[O.SHOW_CARD_ACCESS]||!1,We=ze[O.SHOW_NON_PARTY_UNITS]||!1,Ge=ze[O.SHOW_LIST_HP_NUMBERS],Ke=typeof Ge==`boolean`?Ge:!0,qe=ze[O.DICE_RANGE]||``,Je=ze[O.INITIATIVE_MODIFIER_BID]||``,Ye=ze[O.INITIATIVE_MODIFIER_EXPR]||`@STAT`,P=Ye.trim().length>0?Ye:`@STAT`,Xe=ze[O.SHOW_OWNER_ONLY_EDIT]||!1,Ze=String(m?.role||``).toUpperCase()===`GM`,Qe=m?.id||``,$e=ne(O.INITIATIVE_LIST_COMPACT,Qe);(0,z.useEffect)(()=>{let e=ze[$e],t=ze[O.INITIATIVE_LIST_COMPACT];Oe(typeof e==`boolean`?e:typeof t==`boolean`?t:!1)},[ze,$e]);let et=async()=>{let e=!De;Oe(e);try{await c.room.setMetadata({[$e]:e})}catch(t){A.error(`Failed to persist initiative list compact mode`,t),Oe(!e)}},F=async({notation:e,actionName:t,tokenName:n,senderId:r,senderColor:i})=>{try{await be({notation:e,actionName:t,senderName:n,senderId:r,senderColor:i},ze)}catch(t){A.error(`Failed to send dice roll from InitiativeList`,e,t),A.log(e)}},I=e=>{let t=e;if(typeof t==`string`)try{t=JSON.parse(t)}catch{return[]}return Array.isArray(t)?t.map((e,t)=>{let n=e&&typeof e==`object`?e:{},r=n.inUse,i=typeof r==`boolean`?r:typeof r==`string`?[`true`,`1`,`yes`].includes(r.trim().toLowerCase()):typeof r==`number`?r===1:void 0;return{id:typeof n.id==`string`&&n.id?n.id:`entry-${t}`,name:typeof n.name==`string`?n.name:``,description:typeof n.description==`string`?n.description:``,...i===void 0?{}:{inUse:i}}}):[]};(0,z.useEffect)(()=>{v(d.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>{let t=e.metadata?.[p.INITIATIVE]||0,n=e.metadata[p.UNIT_NAME]||e.name||`Unknown`,r=e.metadata?.[p.BOSS_MODE]===!0,i=e.metadata?.[vg]||0,a=f.find(t=>t.id===e.createdUserId)||(m?.id===e.createdUserId?m:void 0),o=String(a?.role||``).toUpperCase()===`GM`,s=a?.color||(m?.id===e.createdUserId?m?.color:void 0),c=o?void 0:wg(s,1),l={};return Object.keys(e.metadata||{}).forEach(t=>{t.startsWith(`com.battle-system.forge`)&&(l[t]=e.metadata?.[t])}),{id:e.id,initiative:t,name:n,isBoss:r,elevation:i,attributes:l,createdUserId:e.createdUserId,ownerNameOutlineColor:c,isInParty:e.metadata?.[p.IN_PARTY]===!0,isVisible:e.visible!==!1}}))},[d,f,m]);let L=(0,z.useMemo)(()=>He?[..._].sort((e,t)=>e.name.localeCompare(t.name)):[..._].sort((e,t)=>e.initiative===t.initiative?e.name.localeCompare(t.name):Ve?e.initiative-t.initiative:t.initiative-e.initiative),[_,Ve,He]),tt=lg({items:d,units:L,setItems:g,playerData:m}),nt=(0,z.useMemo)(()=>{let e=new Map;return f.forEach(t=>{e.set(t.id,t)}),m&&!e.has(m.id)&&e.set(m.id,m),Array.from(e.values()).sort((e,t)=>e.name.localeCompare(t.name))},[f,m]),rt=(e,t)=>{let n=parseInt(t)||0;v(t=>t.map(t=>t.id===e?{...t,initiative:n}:t))},it=(e,t)=>{g(d.map(n=>n.id===e?{...n,metadata:{...n.metadata,[p.INITIATIVE]:t}}:n)),c.scene.items.updateItems([e],e=>{e[0].metadata[p.INITIATIVE]=t})},at=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},st=(e,t,n)=>(typeof t==`number`&&(e=Math.max(t,e)),typeof n==`number`&&(e=Math.min(n,e)),e),ct=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(r.length===0)return st(0,i,a);let o=r.match(/^([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),s=r.match(/^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),c=null;if(o){let e=o[1],n=parseFloat(o[2]);switch(e){case`+`:c=t+n;break;case`-`:c=t-n;break;case`*`:c=t*n;break;case`/`:c=n===0?t:t/n;break}}else if(s){let e=parseFloat(s[1]),t=s[2],n=parseFloat(s[3]);switch(t){case`+`:c=e+n;break;case`-`:c=e-n;break;case`*`:c=e*n;break;case`/`:c=n===0?e:e/n;break}}else{let e=parseFloat(r);Number.isNaN(e)||(c=e)}return st(c===null||!Number.isFinite(c)?t:Math.trunc(c),i,a)},lt=e=>{let t=0;if(Je){let n=_.find(t=>t.id===e);if(n){let e=n.attributes?.[`${R}/${Je}`],r=Number(e),i=Number.isFinite(r)?r:0,a=Le(P.replace(/@STAT/gi,`@${Je}`).replace(/\bx\b/gi,`@${Je}`),{bidValueMap:{[Je]:i},onMissingBid:`useZero`});if(a.valid&&a.notation){let e=Number(a.notation);Number.isFinite(e)&&(t=Math.trunc(e))}}}return t},ut=(e,t=`normal`)=>{let n=at(qe),r=Math.floor(Math.random()*n)+1,i=t===`normal`?null:Math.floor(Math.random()*n)+1,a=(i===null?r:t===`advantage`?Math.max(r,i):Math.min(r,i))+lt(e);rt(e,String(a)),it(e,a)},dt=(e,t)=>{de(n=>({...n,[e]:t}))},ft=(e,t)=>{let n=ct(t,_.find(t=>t.id===e)?.initiative??0);de(t=>{let{[e]:n,...r}=t;return r}),v(t=>t.map(t=>t.id===e?{...t,initiative:n}:t)),it(e,n)},pt=e=>`ELE${e.slice(3)}`,mt=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o}},ht=async(t,r)=>{let i=pt(t);try{await c.scene.items.deleteItems([i])}catch{}if(r===0)return;let a=d.find(e=>e.id===t);if(!a||!e(a))return;let o=mt(a,h),s=`${r>0?`🡹`:`🡻`}${Math.abs(r)}`,l=n().id(i).name(`Elevation Badge`).plainText(s).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(36).fontFamily(`Segoe UI`).textAlign(`CENTER`).position({x:o.minX-40,y:o.minY}).metadata({[gg]:!0,[_g]:t}).attachedTo(t).visible(a.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build();try{await c.scene.items.addItems([l])}catch(e){A.error(`Failed to add elevation badge`,t,e)}},gt=(e,t)=>{pe(n=>({...n,[e]:t}))},_t=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(!r)return st(0,i,a);let o=parseFloat(r);return st(Number.isFinite(o)?Math.trunc(o):t,i,a)},vt=(e,t)=>{let n=_t(t,_.find(t=>t.id===e)?.elevation??0,{min:-999,max:999});pe(t=>{let{[e]:n,...r}=t;return r}),v(t=>t.map(t=>t.id===e?{...t,elevation:n}:t)),g(d.map(t=>t.id===e?{...t,metadata:{...t.metadata,[vg]:n}}:t)),c.scene.items.updateItems([e],e=>{e[0].metadata[vg]=n}),ht(e,n)},bt=(e,t)=>{let n=e.trim();if(!n)return e;let r=/^([+\-*/])\s*-?\d+(?:\.\d+)?$/.test(n),i=/^-?\d+(?:\.\d+)?\s*[+\-*/]\s*-?\d+(?:\.\d+)?$/.test(n),a=/^-?\d+(?:\.\d+)?$/.test(n);if(!r&&!i&&!a)return e;let o=typeof t==`number`?t:parseFloat(String(t)),s=Number.isFinite(o)?o:0;return String(ct(n,s))},xt=(e,t,n)=>{let r=`${R}/${t}`,i=d.find(t=>t.id===e)?.metadata?.[r],a=bt(n,i);v(t=>t.map(t=>t.id===e?{...t,attributes:{...t.attributes,[r]:a}}:t)),g(d.map(t=>t.id===e?{...t,metadata:{...t.metadata,[r]:a}}:t)),c.scene.items.updateItems([e],e=>{e[0].metadata[r]=a})},Ct=e=>String(e?.attr_bid??e?.bid??``).trim(),wt=e=>String(e?.attr_name??e?.name??``).trim(),Tt=e=>String(e?.attr_abbr??e?.abbr??``).trim(),Et=e=>String(e?.attr_type??e?.type??``).trim().toLowerCase(),Dt=e=>{let t=e?.attr_func??e?.func??``;return typeof t==`string`?t.trim():``},Ot=e=>e?.attr_meta??e?.meta??{},kt=e=>o.find(t=>Ct(t)===e)||null,At=e=>Dt(kt(e)).length>0,jt=e=>ot(o,t=>e.attributes?.[`${R}/${t}`],Ct,Et,Dt,wt,Tt),Mt=(e,t)=>{let n=Array.from(e.matchAll(Eg));if(n.length!==1)return null;let r=n[0],i=r[0]||``,a=r[1]||``,o=r[2]||``,s=r[3]||``,c=r.index;if(!i||!a||!o||typeof c!=`number`)return null;let l=Number(a);if(!Number.isFinite(l)||l!==1||s)return null;let u=`2d${o}${t===`advantage`?`kh1`:`kl1`}`;return`${e.slice(0,c)}${u}${e.slice(c+i.length)}`},Nt=(e,t)=>{let n=Dt(kt(t));if(n.length===0)return null;let r=jt(e),i=Le(n,{bidValueMap:r.bidValueMap,nameValueMap:r.nameValueMap,onMissingBid:`error`});return!i.valid||!i.notation?(A.warn(`Could not resolve notation for initiative list value-column`,{unitId:e.id,bid:t,error:i.error}),null):{notation:i.notation,actionName:wt(kt(t))||t}},Pt=(e,t)=>{let n=kt(t),r=Ot(n)?.derived?.formula,i=typeof r==`string`&&r.trim().length>0?r:Dt(n);if(typeof i!=`string`||i.trim().length===0)return`-`;let a=jt(e),o=Le(i,{bidValueMap:a.bidValueMap,nameValueMap:a.nameValueMap,onMissingBid:`error`});if(!o.valid||!o.notation)return A.warn(`Could not resolve derived formula for initiative list derived-column`,{unitId:e.id,bid:t,error:o.error}),`-`;let s=o.notation.trim(),c=Number(s);if(!Number.isFinite(c))return s||`-`;let l=Number(Ot(n)?.derived?.precision),u=Number.isFinite(l)?Math.max(0,Math.min(Math.trunc(l),8)):0,d=Ot(n)?.derived?.displayMode,f=u>0?c.toFixed(u):String(c);return d===`percent`?`${f}%`:f},Ft=async(e,t)=>{let n=Nt(e,t);if(!n)return;let r=f.find(t=>t.id===e.createdUserId);await F({notation:n.notation,actionName:n.actionName,tokenName:e.name,senderId:e.createdUserId||m?.id||`unknown`,senderColor:r?.color||m?.color||`#ffffff`})},It=async(e,t,n)=>{let i=Nt(e,t);if(!i)return;let a=n===`normal`?i.notation:Mt(i.notation,n);if(!a)return;let o=f.find(t=>t.id===e.createdUserId),s=n===`normal`?``:r(n===`advantage`?`initiative.modeSuffixAdvantage`:`initiative.modeSuffixDisadvantage`);await F({notation:a,actionName:`${i.actionName}${s}`,tokenName:e.name,senderId:e.createdUserId||m?.id||`unknown`,senderColor:o?.color||m?.color||`#ffffff`})},Lt=async(e,t)=>{let n=t===`normal`?e.notation:Mt(e.notation,t);if(!n)return;let i=t===`normal`?``:r(t===`advantage`?`initiative.modeSuffixAdvantage`:`initiative.modeSuffixDisadvantage`);await F({notation:n,actionName:`${e.actionName}${i}`,tokenName:e.tokenName,senderId:e.senderId,senderColor:e.senderColor})};(0,z.useEffect)(()=>()=>{Object.values(Pe.current).forEach(e=>{window.clearTimeout(e)})},[]),(0,z.useEffect)(()=>{if(!j&&!M)return;let e=e=>{e.key===`Escape`&&(Se(null),Ce(null))};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[j,M]);let zt=(e,t)=>`value-column:${e}:${t}`,Bt=(e,t)=>`${e}:${t}`,Vt=e=>!!ve[e],Ht=(e,t)=>{ye(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},Ut=e=>{Se(e)},Wt=()=>{Se(null)},Gt=()=>{Ce(null)},Kt=e=>{ye(t=>{let{[e]:n,...r}=t;return r})},qt=(e,t)=>{let n=Pe.current[e];n&&window.clearTimeout(n),Pe.current[e]=window.setTimeout(()=>{Fe.current[e]=!0,Ht(e,t),delete Pe.current[e]},500)},Jt=e=>{let t=Pe.current[e];t&&(window.clearTimeout(t),delete Pe.current[e])},Yt=e=>Fe.current[e]?(delete Fe.current[e],!0):!1,Xt=e=>{if(!Xe||Ze)return!0;let t=m?.id;return t?e.createdUserId===t:!1},Zt=e=>Ze?!0:e.isVisible,Qt=e=>Ze||We?!1:!e.isInParty;(0,z.useEffect)(()=>{s||b(R_(a,Ue,r))},[a,s,Ue]),(0,z.useEffect)(()=>{let e=u[O.CURRENT_TURN],t=u[O.CURRENT_ROUND];e?S(e):L.length>0&&S(L[0].id),t&&w(t)},[u,L]);let $t=async()=>{if(L.length===0)return;x&&await tt.processEffectsForTurnEvent(`end`,x);let e=L.findIndex(e=>e.id===x)+1;if(e>=L.length){let e=C+1;w(e),S(L[0].id),await c.scene.setMetadata({[O.CURRENT_TURN]:L[0].id,[O.CURRENT_ROUND]:e}),await tt.processEffectsForTurnEvent(`start`,L[0].id)}else S(L[e].id),await c.scene.setMetadata({[O.CURRENT_TURN]:L[e].id}),await tt.processEffectsForTurnEvent(`start`,L[e].id)},en=async()=>{if(L.length===0)return;let e=L.findIndex(e=>e.id===x)-1;if(e<0){let e=Math.max(1,C-1);w(e),S(L[L.length-1].id),await c.scene.setMetadata({[O.CURRENT_TURN]:L[L.length-1].id,[O.CURRENT_ROUND]:e})}else S(L[e].id),await c.scene.setMetadata({[O.CURRENT_TURN]:L[e].id})},tn=async e=>{He&&(T.has(e)||(S(e),await c.scene.setMetadata({[O.CURRENT_TURN]:e}),await tt.processEffectsForTurnEvent(`start`,e)))},nn=async()=>{x&&(await tt.processEffectsForTurnEvent(`end`,x),E(e=>new Set([...e,x])),T.size+1,L.length)},rn=async()=>{let e=C+1;w(e),E(new Set),S(null),await c.scene.setMetadata({[O.CURRENT_TURN]:null,[O.CURRENT_ROUND]:e})},an=async e=>{Ee(!0);try{if(e===`clear-list`){let e=d.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await c.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata&&p.ON_LIST in e.metadata&&delete e.metadata[p.ON_LIST]})}),g(d.map(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return e;let t={...e.metadata||{}};return delete t[p.ON_LIST],{...e,metadata:t}})))}if(e===`reset-initiative`){let e=d.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await c.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata[p.INITIATIVE]=0})}),g(d.map(e=>e.metadata?.[p.ON_LIST]===!0?{...e,metadata:{...e.metadata||{},[p.INITIATIVE]:0}}:e)),v(e=>e.map(e=>d.some(t=>t.id===e.id&&t.metadata?.[p.ON_LIST]===!0)?{...e,initiative:0}:e)),de({}))}let t=e===`clear-list`?null:e===`reset-initiative`?[...L].sort((e,t)=>e.name.localeCompare(t.name))[0]?.id??null:L[0]?.id??null;w(1),S(t),E(new Set),await c.scene.setMetadata({[O.CURRENT_TURN]:t,[O.CURRENT_ROUND]:1}),we(!1)}catch(t){A.error(`Failed to reset encounter state`,{mode:e,error:t})}finally{Ee(!1)}},on=async e=>{let t=d.find(t=>t.id===e);if(t)try{await Bh.CenterViewportOnImage(t)}catch(t){A.error(`Failed to center viewport on unit`,e,t)}},sn=async(e,n)=>{try{let r=await c.viewport.getHeight(),i=r>800?700:r-100;await c.popover.open({id:t.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(n)}`,height:i,width:350,anchorElementId:e,hidePaper:!0,disableClickAway:!0})}catch(e){A.error(`Failed to open cards popover`,e)}},cn=(e,t)=>{e.preventDefault(),e.stopPropagation(),re(null),ee(t)},ln=async e=>{if(D){if(!d.find(e=>e.id===D)){re(r(`initiative.tokenNotFoundInCache`));return}ae(!0),re(null);try{await c.scene.items.updateItems([D],t=>{let n=t[0];n.createdUserId=e}),g(d.map(t=>t.id===D?{...t,createdUserId:e}:t)),ee(null)}catch(t){A.error(`Failed to reassign token owner`,D,e,t),re(r(`initiative.assignOwnerPermissionError`))}finally{ae(!1)}}},un=async()=>{if(!D)return;let e=d.find(e=>e.id===D);if(!e){re(r(`initiative.tokenNotFoundInCache`));return}let t=e.metadata?.[p.BOSS_MODE]!==!0;if(t&&d.filter(e=>e.id!==D&&e.metadata?.[p.ON_LIST]===!0&&e.metadata?.[p.BOSS_MODE]===!0).length>=2){re(r(`initiative.maxBossesError`));return}se(!0),re(null);try{await c.scene.items.updateItems([D],e=>{let n={...e[0].metadata||{}};n[p.BOSS_MODE]=t,e[0].metadata=n}),g(d.map(e=>e.id===D?{...e,metadata:{...e.metadata||{},[p.BOSS_MODE]:t}}:e))}catch(e){A.error(`Failed to toggle boss mode`,D,e),re(r(`initiative.updateBossModeError`))}finally{se(!1)}},dn=async()=>{if(D){if(!d.find(e=>e.id===D)){re(r(`initiative.tokenNotFoundInCache`));return}le(!0),re(null);try{await c.scene.items.updateItems([D],e=>{let t={...e[0].metadata||{}};p.ON_LIST in t&&delete t[p.ON_LIST],e[0].metadata=t}),g(d.map(e=>{if(e.id!==D)return e;let t={...e.metadata||{}};return delete t[p.ON_LIST],{...e,metadata:t}})),ee(null)}catch(e){A.error(`Failed to remove token from initiative list`,D,e),re(r(`initiative.removeUnitError`))}finally{le(!1)}}},fn=(0,z.useMemo)(()=>D&&L.find(e=>e.id===D)||null,[D,L]),pn=(0,z.useMemo)(()=>D&&d.find(e=>e.id===D)||null,[D,d]),mn=pn?.metadata?.[p.BOSS_MODE]===!0,H=(0,z.useMemo)(()=>ge&&L.find(e=>e.id===ge.unitId)||null,[ge,L]),hn=(0,z.useMemo)(()=>ge&&o.find(e=>e.attr_bid===ge.bid)||null,[o,ge]),gn=(0,z.useMemo)(()=>{if(!ge||!H)return[];let e=H.attributes[`${R}/${ge.bid}`];return I(e)},[ge,H]),_n=(0,z.useMemo)(()=>gn.some(e=>typeof e.inUse==`boolean`),[gn]),vn=(0,z.useMemo)(()=>j&&L.find(e=>e.id===j.unitId)||null,[j,L]),yn=(0,z.useMemo)(()=>De?y.filter(e=>e.type===`initiative`||e.type===`name`?!0:e.type===`card-column`&&Ue):y,[De,y,Ue]),bn=(0,z.useMemo)(()=>St(ze,o),[o,ze]),xn=(0,z.useMemo)(()=>L.filter(e=>Zt(e)),[L,Ze]),Sn=(0,z.useMemo)(()=>{if(!H)return{};let e={};for(let t of o){let n=`${R}/${t.attr_bid}`,r=H.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(e[t.attr_bid]=i)}return e},[H,o]),Cn=(0,z.useMemo)(()=>{if(!H)return{};let e={};for(let t of o){let n=`${R}/${t.attr_bid}`,r=H.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(t.attr_name&&(e[t.attr_name]=i),t.attr_abbr&&(e[t.attr_abbr]=i))}return e},[H,o]),wn=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=(e[1]||``).trim();if(!n)continue;let r=Le(Be?n.replace(/(\d+d\d+(?:[kd][hl]\d+|!|\{[^{}]+\})?)\s+#[a-z0-9_]+/gi,`$1`):n,{bidValueMap:Sn,nameValueMap:Cn,onMissingBid:`error`,allowCurlyTags:Be});!r.valid||!r.notation||t.push(Be?n:r.notation)}return t};(0,z.useEffect)(()=>{Ie.current&&yn.length>0&&(A.debug(`Adjusting window width based on table size`),setTimeout(()=>{if(Ie.current){let e=Ie.current.offsetWidth+4,t=Math.min(e,800);c.action.setWidth(t),A.log(`Adjusted window width to `+t)}},100))},[De,yn.length,L.length]);let Tn=e=>{if(!e)return null;let t=Dg[e.toLowerCase()];return t?(0,V.jsx)(t,{}):null},En=(e,t)=>{let n=window.innerWidth-t-8,r=Math.min(Math.max(e-t/2,8),Math.max(8,n));return{left:r,arrowX:e-r}},Dn=e=>{let t=e.currentTarget.getBoundingClientRect(),n=`clientX`in e?e.clientX:t.left+t.width/2,r=t.top>72?`top`:`bottom`;return{anchorX:n,y:r===`top`?t.top:t.bottom,placement:r}},On=(e,t)=>{let n=Dn(e),r=Math.min(320,Math.max(140,t.length*7+28)),i=En(n.anchorX,r);Me({text:t,...n,...i})},kn=()=>{Me(null)};(0,z.useLayoutEffect)(()=>{if(!je||!Ne.current)return;let e=Ne.current.getBoundingClientRect().width,t=En(je.anchorX,e);(Math.abs(t.left-je.left)>.5||Math.abs(t.arrowX-je.arrowX)>.5)&&Me(e=>e&&{...e,...t})},[je]);let An=e=>e.type===`initiative`?(0,V.jsx)(xe,{}):e.type===`roller`?null:e.type===`name`?r(`initiative.nameHeader`):e.type===`card-column`?(0,V.jsx)(af,{}):e.type===`divider-column`?null:e.useIcon?Tn(e.iconType||`star`):e.name||e.type,jn=e=>e.type===`divider-column`?{fixedWidth:Cg}:e.type===`initiative`?{minWidth:xg}:e.type===`name`?{minWidth:Sg}:{minWidth:bg},Mn=(e,t)=>{let n=Xt(t),a=Qt(t),s=!Ze&&!Ke;if(a&&e.type!==`initiative`&&e.type!==`name`&&e.type!==`divider-column`)return(0,V.jsx)(Gg,{theme:i,children:(0,V.jsx)(I_,{theme:i})});switch(e.type){case`initiative`:if(He)return(0,V.jsx)(Kg,{theme:i,children:(0,V.jsx)(Xg,{onClick:e=>{e.stopPropagation(),n&&(T.has(t.id)||(t.id===x?nn():tn(t.id)))},children:T.has(t.id)?(0,V.jsx)(nf,{color:i.OFFSET}):t.id===x?(0,V.jsx)(tf,{color:i.PRIMARY}):(0,V.jsx)(rf,{color:i.BORDER})})});let a=`initiative:${t.id}`,l=Vt(a);return(0,V.jsx)(Kg,{theme:i,children:(0,V.jsx)(Zg,{theme:i,$isRollable:n&&!l,type:`text`,inputMode:`decimal`,value:ue[t.id]??String(t.initiative),readOnly:!n||!l,onChange:!n||!l?void 0:e=>dt(t.id,e.target.value),onBlur:!n||!l?void 0:e=>{ft(t.id,e.target.value),Kt(a)},onClick:()=>{n&&(l||Yt(a)||ut(t.id))},onContextMenu:e=>{n&&(e.preventDefault(),Ut({kind:`initiative`,fieldKey:a,unitId:t.id,input:e.currentTarget}))},onTouchStart:e=>{n&&(l||qt(a,e.currentTarget))},onTouchEnd:()=>{Jt(a)},onTouchCancel:()=>{Jt(a)},onKeyDown:e=>{if(n){if(!l&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),ut(t.id);return}l&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})});case`name`:let u=Re.has(t.id);return(0,V.jsx)(Qg,{theme:i,title:r(`initiative.rightClickAssignOwner`),$outlineColor:t.ownerNameOutlineColor,$isSelected:u,onDoubleClick:()=>on(t.id),onContextMenu:n?e=>cn(e,t.id):void 0,children:t.isBoss?`💀 ${t.name}`:t.name});case`roller`:return(0,V.jsx)(qg,{theme:i,children:(0,V.jsx)(Jg,{theme:i,disabled:!n,onClick:e=>{e.stopPropagation(),n&&ut(t.id)},title:r(`initiative.rollInitiativeTitle`,{max:at(qe)}),children:(0,V.jsx)(Yg,{src:`/dice.svg`,alt:r(`initiative.rollIconAlt`)})})});case`card-column`:return(0,V.jsx)(Gg,{theme:i,children:(0,V.jsx)(r_,{id:`card-access-${t.id}`,theme:i,disabled:!n,onClick:e=>{e.stopPropagation(),n&&sn(e.currentTarget.id,t.id)},title:r(`initiative.openCardTitle`,{unit:t.name}),children:(0,V.jsx)(tf,{})})});case`value-column`:return(0,V.jsx)(Gg,{theme:i,children:(0,V.jsx)(n_,{children:e.styles?.bidList?.map((r,a)=>{let o=At(r),c=zt(t.id,r),l=Bt(t.id,r),u=o&&Vt(c),d=t.attributes[`${R}/${r}`],f=me[l]??(d==null||d===``?`0`:String(d)),p=r===bn.currentHpBid||r===bn.maxHpBid,m=!!Qe&&t.createdUserId===Qe,h=s&&p&&!m;return(0,V.jsxs)(z.Fragment,{children:[a>0&&(0,V.jsx)(t_,{theme:i,children:e.styles?.dividers?.[a-1]||`/`}),h?(0,V.jsx)(L_,{theme:i,$small:e.styles?.bidList&&e.styles.bidList.length>2}):(0,V.jsx)($g,{theme:i,$isRollable:n&&o,value:f,$small:e.styles?.bidList&&e.styles.bidList.length>2,readOnly:!n||o&&!u,onChange:!n||o&&!u?void 0:e=>{let t=e.target.value;he(e=>({...e,[l]:t}))},onBlur:!n||o&&!u?void 0:e=>{xt(t.id,r,e.target.value),he(e=>{let{[l]:t,...n}=e;return n}),o&&Kt(c)},onClick:o?()=>{n&&(u||Yt(c)||Ft(t,r))}:void 0,onContextMenu:o?e=>{n&&(e.preventDefault(),Ut({kind:`attribute`,fieldKey:c,unitId:t.id,bid:r,input:e.currentTarget}))}:void 0,onTouchStart:o?e=>{n&&(u||qt(c,e.currentTarget))}:void 0,onTouchEnd:o?()=>{Jt(c)}:void 0,onTouchCancel:o?()=>{Jt(c)}:void 0,onKeyDown:e=>{if(n){if(o&&!u&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),Ft(t,r);return}(u||!o)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})]},r)})})});case`list-column`:return(0,V.jsx)(Gg,{theme:i,children:(0,V.jsx)(r_,{theme:i,disabled:!n,onClick:r=>{if(r.stopPropagation(),!n)return;let i=e.styles?.bidList?.[0];i&&_e({unitId:t.id,bid:i})},title:r(`initiative.openListReference`),children:(0,V.jsx)(Qd,{})})});case`checkbox-column`:return(0,V.jsx)(Gg,{theme:i,children:(0,V.jsx)(n_,{children:e.styles?.bidList?.map(r=>{let a=!!t.attributes[`${R}/${r}`],o=e.styles?.inputType===`slider`,s=e=>{v(n=>n.map(n=>n.id===t.id?{...n,attributes:{...n.attributes,[`${R}/${r}`]:e}}:n)),g(d.map(n=>n.id===t.id?{...n,metadata:{...n.metadata,[`${R}/${r}`]:e}}:n)),c.scene.items.updateItems([t.id],t=>{t[0].metadata[`${R}/${r}`]=e})};return o?(0,V.jsx)(c_,{type:`button`,theme:i,$active:a,disabled:!n,onClick:n?()=>{s(!a)}:void 0,children:(0,V.jsx)(l_,{theme:i,$active:a})},r):(0,V.jsx)(i_,{theme:i,type:`checkbox`,checked:a,disabled:!n,onChange:n?e=>{s(e.target.checked)}:void 0},r)})})});case`derived-column`:{let n=e.styles?.bidList||[];return n.length===0?(0,V.jsx)(Gg,{theme:i,children:`-`}):(0,V.jsx)(Gg,{theme:i,children:(0,V.jsx)(n_,{children:n.map((n,a)=>(0,V.jsxs)(z.Fragment,{children:[a>0&&(0,V.jsx)(t_,{theme:i,children:e.styles?.dividers?.[a-1]||`/`}),(0,V.jsx)(a_,{theme:i,title:r(`initiative.derivedValueFormula`),children:Pt(t,n)})]},n))})})}case`enum-column`:{let r=e.styles?.bidList?.[0];if(!r)return(0,V.jsx)(Gg,{theme:i,children:`-`});let a=Ot(kt(r)),o=Array.isArray(a.enum?.options)?a.enum.options.map(e=>String(e||``).trim()).filter(e=>e.length>0):[],s=`${R}/${r}`,l=t.attributes[s],u=typeof l==`string`?l.trim():``,f=o.includes(u)?u:o[0]||``,p=e=>{v(n=>n.map(n=>n.id===t.id?{...n,attributes:{...n.attributes,[s]:e}}:n)),g(d.map(n=>n.id===t.id?{...n,metadata:{...n.metadata,[s]:e}}:n)),c.scene.items.updateItems([t.id],t=>{t[0].metadata[s]=e})};return(0,V.jsx)(Gg,{theme:i,children:(0,V.jsx)(n_,{children:(0,V.jsx)(e_,{theme:i,disabled:!n,value:f,onClick:e=>e.stopPropagation(),onChange:n?e=>{p(e.target.value)}:void 0,children:o.length===0?(0,V.jsx)(`option`,{value:``,children:`No options`}):o.map(e=>(0,V.jsx)(`option`,{value:e,children:e},e))})})})}case`resource-column`:{let r=e.styles?.bidList?.[0];if(!r)return(0,V.jsx)(Gg,{theme:i,children:`-`});let a=t.attributes[`${R}/${r}`],s=o.find(e=>Ct(e)===r&&Et(e)===`resource`),l=a&&typeof a==`object`&&!Array.isArray(a)?a:null,u=l?Number(l.current??0):0,f=l?Number(l.max??0):0,p=(e,n)=>{let i=`${R}/${r}`,a={current:e,max:n};v(e=>e.map(e=>e.id===t.id?{...e,attributes:{...e.attributes,[i]:a}}:e)),g(d.map(e=>e.id===t.id?{...e,metadata:{...e.metadata,[i]:a}}:e)),c.scene.items.updateItems([t.id],e=>{e[0].metadata[i]=a})};if(Ot(s)?.resource?.showPips){let e=Number(Ot(s)?.resource?.pipCap),t=(Number.isFinite(e)&&e>0?Math.round(e):void 0)??f;if(t<=0)return(0,V.jsx)(Gg,{theme:i,children:`-`});let r=Math.max(1,Math.min(t,15)),a=Math.max(0,Math.min(u,r));return(0,V.jsx)(Gg,{theme:i,children:(0,V.jsx)(o_,{children:Array.from({length:r}).map((e,t)=>(0,V.jsx)(s_,{theme:i,$filled:t<a,disabled:!n,onClick:n?()=>{p(t+1===a?t:t+1,f)}:void 0},t))})})}return(0,V.jsx)(Gg,{theme:i,children:(0,V.jsxs)(n_,{children:[(0,V.jsx)($g,{theme:i,$isRollable:!1,value:String(u),$small:!1,readOnly:!n,onChange:n?e=>{let t=Number(e.target.value);isNaN(t)||p(t,f)}:void 0}),(0,V.jsx)(t_,{theme:i,children:`/`}),(0,V.jsx)($g,{theme:i,$isRollable:!1,value:String(f),$small:!1,readOnly:!n,onChange:n?e=>{let t=Number(e.target.value);isNaN(t)||p(u,t)}:void 0})]})})}case`special-column`:let f=Tn(e.iconType);if(e.styles?.specialType===`elevation`){let e=fe[t.id];return(0,V.jsx)(mg,{theme:i,unit:t,canInteract:n,elevationDraftValue:e,onElevationDraftChange:gt,onCommitElevationChange:vt})}else{let e=tt.getEffectsForUnit(t.id).length;return(0,V.jsx)(hg,{theme:i,canInteract:n,icon:f||(0,V.jsx)(ie,{}),activeEffectsCount:e,onOpen:()=>tt.handleOpenEffectsModal(t.id)})}case`divider-column`:return(0,V.jsx)(u_,{theme:i,children:(0,V.jsx)(d_,{children:e.styles?.styleDesign===`zigzag`?(0,V.jsx)(p_,{children:(0,V.jsx)(m_,{theme:i})}):(0,V.jsx)(f_,{theme:i,$style:e.styles?.styleDesign})})});default:return(0,V.jsx)(Gg,{theme:i,children:`-`})}};if(s)return(0,V.jsx)(Og,{children:(0,V.jsx)(kg,{theme:i,children:`Loading...`})});let U=De||ke,Nn=U?`R:${C}`:`Round: ${C}`,W=!De&&U;return(0,V.jsxs)(Og,{children:[(0,V.jsx)(Ag,{children:(0,V.jsxs)(Rg,{ref:Ie,theme:i,$compact:De,children:[(0,V.jsx)(zg,{theme:i,children:(0,V.jsx)(Bg,{children:yn.map(e=>{let t=e.description??`This has no description.`,n=jn(e);return(0,V.jsx)(Vg,{theme:i,$minWidth:n.minWidth,$fixedWidth:n.fixedWidth,onMouseEnter:e=>On(e,t),onMouseMove:e=>On(e,t),onMouseLeave:kn,onFocus:e=>On(e,t),onBlur:kn,children:An(e)},e.id)})})}),(0,V.jsx)(Ug,{children:xn.map(e=>(0,V.jsx)(Wg,{$isCurrentTurn:e.id===x,theme:i,children:yn.map(t=>(0,V.jsx)(z.Fragment,{children:Mn(t,e)},t.id))},e.id))})]})}),(0,V.jsxs)(jg,{theme:i,$compactMode:U,children:[(0,V.jsxs)(Mg,{$compactMode:U,children:[De?(0,V.jsxs)(V.Fragment,{children:[Ze&&(0,V.jsx)(Ng,{theme:i,$compact:!0,onClick:en,children:(0,V.jsx)(Xd,{})}),Ze&&(0,V.jsx)(Ng,{theme:i,$compact:!0,onClick:$t,children:(0,V.jsx)(Zd,{})})]}):He?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Ng,{theme:i,onClick:nn,disabled:!x||T.has(x),children:`End Turn`}),(0,V.jsx)(Lg,{theme:i,$compactMode:U,children:Nn}),(0,V.jsx)(Ng,{theme:i,$compact:U,onClick:rn,disabled:T.size<L.length,children:U?(0,V.jsx)(Zd,{}):r(`initiative.next`)})]}):(0,V.jsxs)(V.Fragment,{children:[Ze&&(0,V.jsx)(Ng,{theme:i,$compact:!0,onClick:en,children:(0,V.jsx)(Xd,{})}),(0,V.jsx)(Lg,{theme:i,$compactMode:U,children:Nn}),Ze&&(0,V.jsx)(Ng,{theme:i,$compact:!0,onClick:$t,children:(0,V.jsx)(Zd,{})})]}),W&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Fg,{theme:i,onClick:()=>{et()},title:r(`initiative.switchToCompactList`),children:(0,V.jsx)(cf,{})}),Ze&&(0,V.jsx)(Fg,{theme:i,onClick:()=>we(!0),disabled:Te,title:r(`initiative.resetRoundTurnState`),children:(0,V.jsx)(lf,{})})]}),De&&(0,V.jsx)(Fg,{theme:i,onClick:()=>{et()},title:r(`initiative.switchToFullsizeList`),children:(0,V.jsx)(sf,{})})]}),!De&&!W&&(0,V.jsx)(Ig,{theme:i,$hasReset:Ze,onClick:()=>{et()},title:r(`initiative.switchToCompactList`),children:(0,V.jsx)(cf,{})}),Ze&&!De&&!W&&(0,V.jsx)(Pg,{theme:i,onClick:()=>we(!0),disabled:Te,title:r(`initiative.resetRoundTurnState`),children:(0,V.jsx)(lf,{})})]}),je&&(0,V.jsx)(Hg,{ref:Ne,theme:i,$left:je.left,$y:je.y,$placement:je.placement,$arrowX:je.arrowX,role:`tooltip`,children:je.text}),(0,V.jsxs)(Am,{isOpen:!!D,title:fn?r(`initiative.unitTitle`,{unit:fn.name}):r(`initiative.unitFallbackTitle`),onClose:()=>{k||oe||ce||(ee(null),re(null))},closeOnOverlayClick:!k&&!oe&&!ce,maxWidth:`520px`,children:[(0,V.jsx)(__,{theme:i,children:r(`initiative.selectOwnerHint`)}),(0,V.jsxs)(h_,{children:[nt.map(e=>(0,V.jsxs)(g_,{theme:i,$isCurrent:pn?.createdUserId===e.id,onClick:()=>ln(e.id),disabled:k||oe||ce,children:[e.name,pn?.createdUserId===e.id?r(`initiative.currentSuffix`):``]},e.id)),(0,V.jsx)(g_,{theme:i,onClick:()=>{dn()},disabled:k||oe||ce,children:r(ce?`initiative.removing`:`initiative.removeUnitFromList`)})]}),(0,V.jsx)(y_,{theme:i}),(0,V.jsxs)(b_,{theme:i,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(x_,{theme:i,children:r(`initiative.bossMode`)}),(0,V.jsx)(S_,{theme:i,children:r(`initiative.bossModeHint`)})]}),(0,V.jsx)(C_,{children:(0,V.jsx)(w_,{type:`button`,theme:i,$active:mn,disabled:k||oe||ce,"aria-label":r(`initiative.toggleBossModeAria`),"aria-pressed":mn,onClick:()=>{un()}})})]}),te&&(0,V.jsx)(v_,{theme:i,children:te})]}),(0,V.jsxs)(Am,{isOpen:!!j,title:j?.kind===`initiative`?r(`initiative.initiativeTitle`,{unit:vn?.name||r(`initiative.unitFallbackTitle`)}):kt(j?.bid||``)?.attr_name||r(`initiative.rollOptionsTitle`),onClose:Wt,maxWidth:`460px`,children:[(0,V.jsx)(__,{theme:i,children:r(`initiative.chooseRollableAction`)}),(0,V.jsxs)(h_,{children:[(0,V.jsx)(g_,{theme:i,onClick:()=>{j&&(Wt(),Ht(j.fieldKey,j.input))},children:r(`initiative.editValue`)}),(()=>{if(!j||!vn)return null;if(j.kind===`initiative`)return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(g_,{theme:i,onClick:()=>{Wt(),ut(j.unitId,`advantage`)},children:r(`initiative.rollWithAdvantage`)}),(0,V.jsx)(g_,{theme:i,onClick:()=>{Wt(),ut(j.unitId,`disadvantage`)},children:r(`initiative.rollWithDisadvantage`)})]});let e=j.bid||``,t=Nt(vn,e);if(!t)return null;let n=Mt(t.notation,`advantage`),a=Mt(t.notation,`disadvantage`);return!n||!a?null:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(g_,{theme:i,onClick:()=>{Wt(),It(vn,e,`advantage`)},children:r(`initiative.rollWithAdvantage`)}),(0,V.jsx)(g_,{theme:i,onClick:()=>{Wt(),It(vn,e,`disadvantage`)},children:r(`initiative.rollWithDisadvantage`)})]})})()]})]}),(0,V.jsx)(ug,{manager:tt}),(0,V.jsxs)(Am,{isOpen:N,title:r(`initiative.resetEncounterTitle`),onClose:()=>{Te||we(!1)},closeOnOverlayClick:!Te,maxWidth:`460px`,children:[(0,V.jsx)(__,{theme:i,children:r(`initiative.chooseResetMode`)}),(0,V.jsxs)(h_,{children:[(0,V.jsx)(g_,{theme:i,onClick:()=>{an(`round`)},disabled:Te,children:r(Te?`initiative.resetting`:`initiative.resetRound`)}),(0,V.jsx)(g_,{theme:i,onClick:()=>{an(`reset-initiative`)},disabled:Te,children:r(Te?`initiative.resetting`:`initiative.resetRoundAndInitiative`)}),(0,V.jsx)(g_,{theme:i,onClick:()=>{an(`clear-list`)},disabled:Te,children:r(Te?`initiative.resetting`:`initiative.resetRoundAndClearList`)})]})]}),(0,V.jsx)(Am,{isOpen:!!ge,title:H?r(`initiative.listReferenceTitle`,{attribute:hn?.attr_name||r(`initiative.listReferenceFallback`),unit:H.name}):r(`initiative.listReferenceFallback`),onClose:()=>{_e(null)},maxWidth:`620px`,children:(0,V.jsxs)(T_,{children:[(0,V.jsx)(E_,{theme:i}),gn.length===0?(0,V.jsx)(F_,{theme:i,children:r(`initiative.noEntries`)}):(0,V.jsx)(D_,{children:gn.map(e=>(0,V.jsxs)(O_,{theme:i,children:[(0,V.jsxs)(k_,{children:[_n?(0,V.jsx)(A_,{type:`checkbox`,checked:!!e.inUse,readOnly:!0,tabIndex:-1}):null,(0,V.jsx)(j_,{theme:i,children:e.name||r(`initiative.unnamed`)})]}),e.description?(0,V.jsx)(M_,{theme:i,children:e.description}):null,(()=>{let t=wn(e.description||``);return t.length===0?null:(0,V.jsx)(N_,{children:t.map((t,n)=>(0,V.jsx)(P_,{type:`button`,theme:i,onClick:()=>{let n=H?.createdUserId?f.find(e=>e.id===H.createdUserId):null;F({notation:t,actionName:e.name||hn?.attr_name||r(`initiative.listRoll`),tokenName:H?.name||r(`initiative.unknown`),senderId:H?.createdUserId||m?.id||`unknown`,senderColor:n?.color||m?.color||`#ffffff`})},onContextMenu:n=>{n.preventDefault();let i=H?.createdUserId?f.find(e=>e.id===H.createdUserId):null;Ce({notation:t,actionName:e.name||hn?.attr_name||r(`initiative.listRoll`),tokenName:H?.name||r(`initiative.unknown`),senderId:H?.createdUserId||m?.id||`unknown`,senderColor:i?.color||m?.color||`#ffffff`})},title:t,children:t},`${e.id}-inline-notation-${n}`))})})()]},e.id))})]})}),(0,V.jsxs)(Am,{isOpen:!!M,title:M?.actionName||r(`initiative.rollOptionsTitle`),onClose:Gt,maxWidth:`460px`,zIndexBase:12e3,children:[(0,V.jsx)(__,{theme:i,children:r(`initiative.chooseRollMode`)}),(0,V.jsx)(h_,{children:(()=>{if(!M)return null;let e=Mt(M.notation,`advantage`),t=Mt(M.notation,`disadvantage`);return!e||!t?null:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(g_,{theme:i,onClick:()=>{M&&(Gt(),Lt(M,`advantage`))},children:r(`initiative.rollWithAdvantage`)}),(0,V.jsx)(g_,{theme:i,onClick:()=>{M&&(Gt(),Lt(M,`disadvantage`))},children:r(`initiative.rollWithDisadvantage`)})]})})()})]})]})},B_=`${t.EXTENSIONID}-partyhud`,V_=async()=>{await c.modal.open({id:B_,url:`/pages/forgeparty.html`,fullScreen:!0,hideBackdrop:!0,hidePaper:!0,disablePointerEvents:!0})},H_=async()=>{await c.modal.close(B_)};var U_=`forge:party_save`,W_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,G_=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>f(e.theme.BACKGROUND,.35)};
`,K_=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`,q_=T(K_)`
  justify-content: center;
`,J_=T.span`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: ${e=>f(e.theme.PRIMARY,.9)};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`,Y_=T.button`
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
`,X_=T.select`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px;
  min-width: 160px;
`,Z_=T.p`
  margin: 0;
  font-size: 12px;
  color: ${e=>f(e.theme.PRIMARY,.8)};
`,Q_=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${e=>e.$disabled?.55:1};
`,$_=T.span`
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
`,ev=T.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>f(e.theme.BACKGROUND,.35)};
`,tv=T.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
`,nv=T.img`
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
`,rv=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,iv=T.span`
  color: ${e=>e.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,av=T.input`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
`,ov=T.p`
  color: ${e=>e.theme.PRIMARY};
  margin: 0;
`,sv=T.span`
  display: block;
  font-size: 10px;
  color: ${e=>f(e.theme.PRIMARY,.55)};
  text-align: center;
  margin-top: 4px;
`,cv=e=>{switch(e){case`bottom`:return`left`;case`left`:return`top`;case`top`:return`right`;case`right`:default:return`bottom`}},lv=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,uv=e=>e===`default`||e===`plate`||e===`tech`||e===`deco`,dv=e=>e===`deco`?`plate`:e===`tech`?`tech`:e===`plate`?`plate`:`default`;const fv=()=>{let t=(0,z.useRef)(!1),[n,r]=(0,z.useState)(null),{theme:i}=Rt(),{t:a}=yt(),{attributes:o}=Mm(),s=B(e=>e.items);B(e=>e.sceneMetadata);let l=B(e=>e.roomMetadata),u=B(e=>e.playerData),d=l,f=String(u?.role||``).toUpperCase()===`GM`,m=u?.id,h=ne(O.PARTY_HUD_OPEN,m),g=ne(O.PARTY_HUD_ORIENTATION,m),_=(d[h]??d[O.PARTY_HUD_OPEN])===!0,v=d[g]??d[O.PARTY_HUD_ORIENTATION],y=lv(v)?v:`bottom`,b=d[O.PARTY_HUD_ATTR_ONE]||``,x=d[O.PARTY_HUD_ATTR_TWO]||``,S=d[O.PARTY_HUD_SHOW_HP_BARS]===!0,C=d[O.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!S,w=d[O.PARTY_HUD_BORDER_STYLE],T=uv(w)?dv(w):`default`,E=s.filter(e=>e.metadata[p.IN_PARTY]===!0),D=a(`common.orientation.${y}`);(0,z.useEffect)(()=>{try{let e=localStorage.getItem(U_);e&&r(JSON.parse(e).savedAt??null)}catch{}},[]);let ee=()=>{let e={savedAt:new Date().toISOString(),items:E};localStorage.setItem(U_,JSON.stringify(e)),r(e.savedAt)},te=async()=>{let e=localStorage.getItem(U_);if(e)try{let t=JSON.parse(e);if(!t.items.length)return;let n=new Set(t.items.map(e=>e.id)),r=s.filter(e=>n.has(e.id)).map(e=>e.id);r.length>0&&await c.scene.items.deleteItems(r);let[i,a]=await Promise.all([c.viewport.getWidth(),c.viewport.getHeight()]),o={x:i*.75,y:a*.6},l=await c.viewport.inverseTransformPoint(o),u={x:o.x-75,y:o.y-75},d=await c.viewport.inverseTransformPoint(u),f=d.x-l.x,p=d.y-l.y,m=t.items.map((e,t)=>({...e,position:{x:l.x+f*t,y:l.y+p*t}}));await c.scene.items.addItems(m)}catch{}},re=(0,z.useMemo)(()=>o.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[o]),k=async(e,t)=>{await c.room.setMetadata({[e]:t})},A=async e=>{await c.room.setMetadata(e)},ie=async()=>{let e=!_;if(await k(h,e),!e){await H_(),t.current=!1;return}await V_(),t.current=!0},ae=async()=>{await k(g,cv(y))},oe=async(e,t)=>{let n=t.trim();await c.scene.items.updateItems([e],e=>{let t={...e[0].metadata||{}};n?t[p.PORTRAIT_URL]=n:delete t[p.PORTRAIT_URL],e[0].metadata=t})};return(0,V.jsx)(Yd.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,V.jsxs)(ym,{theme:i,children:[(0,V.jsx)(bm,{theme:i,children:a(`party.pageTitle`)}),(0,V.jsxs)(G_,{theme:i,children:[(0,V.jsxs)(K_,{children:[(0,V.jsx)(Y_,{theme:i,onClick:()=>void ae(),children:a(`party.display`,{orientation:D})}),(0,V.jsx)(Y_,{theme:i,onClick:()=>void ie(),children:a(_?`party.closeHud`:`party.openHud`)})]}),f&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(q_,{children:[(0,V.jsx)(J_,{theme:i,children:a(`party.showInHud`)}),(0,V.jsxs)(Q_,{$disabled:!f,children:[(0,V.jsx)($_,{theme:i,children:a(`party.showHpBars`)}),(0,V.jsx)(Z,{label:a(`party.toggleHpBarsLabel`),isOn:S,onChange:e=>{if(f){if(e){A({[O.PARTY_HUD_SHOW_HP_BARS]:!0,[O.PARTY_HUD_SHOW_HP_NUMBERS]:!1});return}k(O.PARTY_HUD_SHOW_HP_BARS,!1)}}})]}),(0,V.jsxs)(Q_,{$disabled:!f,children:[(0,V.jsx)($_,{theme:i,children:a(`party.showHpNumbers`)}),(0,V.jsx)(Z,{label:a(`party.toggleHpNumbersLabel`),isOn:C,onChange:e=>{if(f){if(e){A({[O.PARTY_HUD_SHOW_HP_NUMBERS]:!0,[O.PARTY_HUD_SHOW_HP_BARS]:!1});return}k(O.PARTY_HUD_SHOW_HP_NUMBERS,!1)}}})]}),(0,V.jsxs)(X_,{theme:i,disabled:!f,value:b,onChange:e=>{let t=e.target.value;k(O.PARTY_HUD_ATTR_ONE,t),t&&t===x&&k(O.PARTY_HUD_ATTR_TWO,``)},children:[(0,V.jsx)(`option`,{value:``,children:a(`party.extraSlotNone`,{slot:1})}),re.map(e=>(0,V.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,V.jsxs)(X_,{theme:i,disabled:!f,value:x,onChange:e=>{let t=e.target.value;k(O.PARTY_HUD_ATTR_TWO,t),t&&t===b&&k(O.PARTY_HUD_ATTR_ONE,``)},children:[(0,V.jsx)(`option`,{value:``,children:a(`party.extraSlotNone`,{slot:2})}),re.map(e=>(0,V.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,V.jsxs)(X_,{theme:i,disabled:!f,value:T,onChange:e=>{let t=e.target.value;uv(t)&&k(O.PARTY_HUD_BORDER_STYLE,t)},children:[(0,V.jsx)(`option`,{value:`default`,children:a(`party.portraitBorderDefault`)}),(0,V.jsx)(`option`,{value:`plate`,children:a(`party.portraitBorderPlate`)}),(0,V.jsx)(`option`,{value:`tech`,children:a(`party.portraitBorderTech`)})]})]}),(0,V.jsx)(Z_,{theme:i,children:(0,V.jsxs)(V.Fragment,{children:[a(`party.configureHint`),(0,V.jsx)(`br`,{}),a(`party.listAttributesExcluded`)]})})]})]}),f&&(0,V.jsxs)(G_,{theme:i,children:[(0,V.jsxs)(q_,{children:[(0,V.jsx)(Y_,{theme:i,onClick:ee,disabled:E.length===0,children:a(`party.saveParty`)}),(0,V.jsx)(Y_,{theme:i,onClick:()=>void te(),disabled:n===null,children:a(`party.loadParty`)})]}),(0,V.jsx)(sv,{theme:i,children:n?a(`party.lastSaved`,{value:new Date(n).toLocaleString()}):a(`party.noSaveAvailable`)})]}),E.length===0?(0,V.jsx)(ov,{theme:i,children:a(`party.emptyState`)}):(0,V.jsx)(W_,{theme:i,children:E.map(t=>{let n=t.metadata?.[p.PORTRAIT_URL]||``,r=e(t)?t.image.url:void 0,o=t.metadata[p.UNIT_NAME]||t.name||a(`party.unknownUnit`),s=t.createdUserId===u?.id,c=f||s,l=r||`/logo.png`,d=!!n;return(0,V.jsxs)(ev,{theme:i,children:[(0,V.jsxs)(tv,{children:[(0,V.jsx)(nv,{theme:i,src:l,alt:o,$full:!d}),d&&(0,V.jsx)(nv,{theme:i,src:d?n:``,alt:a(`party.overrideAlt`,{unit:o}),$overlay:!0})]}),(0,V.jsxs)(rv,{children:[(0,V.jsx)(iv,{theme:i,title:o,children:o}),c&&(0,V.jsx)(av,{theme:i,defaultValue:n,placeholder:a(`party.portraitUrlPlaceholder`),onBlur:e=>{oe(t.id,e.target.value)}})]})]},t.id)})})]})})};var pv=`${R}/hp-bar-effect`,mv=`${R}/hp-bar-owner`,hv=`${R}/hp-number-text`,gv=`${R}/hp-number-owner`,_v=e=>`HPB${e.slice(3)}`,vv=e=>`HPN${e.slice(3)}`,yv=(e,t,n)=>Math.max(t,Math.min(n,e)),bv=(e,t,n,r)=>{let i=xt(e.metadata,t,r,`current`),a=xt(e.metadata,n,r,`max`);return a===null||a<=0||i===null?null:yv(i/a*100,0,100)},xv=(e,t,n,r)=>{let i=xt(e.metadata,t,r,`current`),a=xt(e.metadata,n,r,`max`);return i===null?null:{currentHp:Math.trunc(i),maxHp:a===null?null:Math.trunc(a)}},Sv=e=>{let t=String(e||`bottom`).toLowerCase();return t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`},Cv=e=>{switch(Sv(e)){case`top`:return 0;case`bottom`:return 1;case`left`:return 2;case`right`:return 3;default:return 1}},wv=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o,width:r,height:i}},Tv=(e,t,n)=>{let r=wv(e,t),i=r.minX+r.width*.5,a=r.minY+r.height*.5,o;switch(n){case`top`:o={x:i,y:r.minY+r.height*.18};break;case`bottom`:o={x:i,y:r.minY+r.height*.82};break;case`left`:o={x:r.minX+r.width*.18,y:a};break;case`right`:o={x:r.minX+r.width*.82,y:a};break}let s=r.width*.25,c=r.height*.18;return{x:o.x-s,y:o.y-c}};const Ev=()=>{let t=B(e=>e.cacheReady),i=B(e=>e.sceneReady),a=B(e=>e.items),o=B(e=>e.localItems),s=B(e=>e.gridDpi),l=B(e=>e.roomMetadata),u=B(e=>e.sceneMetadata),d=B(e=>e.systemData);return(0,z.useEffect)(()=>{if(!t||!i)return;let u=!1;return(async()=>{let t=l,i=t[O.SHOW_HP_BARS]??!1,f=t[O.SHOW_HP_NUMBERS]??!1,m=i,h=!i&&f,g=Sv(t[O.HP_BAR_ORIENTATION]),_=Cv(t[O.HP_BAR_ORIENTATION]),v=d?.attributes||[],{currentHpBid:x,maxHpBid:S}=St(t,v),C=o.filter(e=>y(e)&&e.metadata?.[pv]===!0),w=o.filter(e=>b(e)&&e.metadata?.[hv]===!0);if(!m&&C.length>0)try{await c.scene.local.deleteItems(C.map(e=>e.id))}catch(e){A.error(`Failed to remove HP bar effects`,e)}if(!h&&w.length>0)try{await c.scene.local.deleteItems(w.map(e=>e.id))}catch(e){A.error(`Failed to remove HP number texts`,e)}if(!m&&!h)return;let T=a.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),E=new Map,D=new Map;for(let t of T){if(m){let e=bv(t,x,S,v);e!==null&&E.set(_v(t.id),{unitId:t.id,hpPercent:e,visible:t.visible})}if(h&&e(t)){let e=xv(t,x,S,v);if(e){let n=e.maxHp===null?`${e.currentHp}`:`${e.currentHp}/${e.maxHp}`;D.set(vv(t.id),{unitId:t.id,text:n,position:Tv(t,s,g)})}}}if(m){let e=new Map(C.map(e=>[e.id,e])),t=Array.from(E.entries()).filter(([t])=>!e.has(t)),n=C.filter(e=>!E.has(e.id)),i=C.filter(e=>{let t=E.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`orientation`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return e.attachedTo!==t.unitId||!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-_)>.001});if(u)return;if(n.length>0)try{await c.scene.local.deleteItems(n.map(e=>e.id))}catch(e){A.error(`Failed to remove stale HP bar effects`,e)}if(t.length>0){let e=t.map(([e,t])=>r().id(e).name(`HP Bar Effect`).effectType(`ATTACHMENT`).attachedTo(t.unitId).layer(`ATTACHMENT`).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).visible(t.visible).uniforms([{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:_}]).sksl(`
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
`).metadata({[pv]:!0,[mv]:t.unitId}).build());try{await c.scene.local.addItems(e)}catch(e){A.error(`Failed to add HP bar effects`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await c.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=E.get(e.id);if(!t)return;e.attachedTo=t.unitId;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:_}],e.metadata={...e.metadata,[pv]:!0,[mv]:t.unitId}})})}catch(e){A.error(`Failed to update HP bar effects`,e)}}}if(h){let e=new Map(w.map(e=>[e.id,e])),t=Array.from(D.entries()).filter(([t])=>!e.has(t)),r=w.filter(e=>!D.has(e.id)),i=w.filter(e=>{let t=D.get(e.id);if(!t)return!1;let n=e.text?.plainText,r=Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01;return e.attachedTo!==t.unitId||n!==t.text||r});if(u)return;if(r.length>0)try{await c.scene.local.deleteItems(r.map(e=>e.id))}catch(e){A.error(`Failed to remove stale HP number texts`,e)}if(t.length>0){let e=t.map(([e,t])=>{let r=T.find(e=>e.id===t.unitId);return n().id(e).name(`HP Number Text`).layer(`ATTACHMENT`).plainText(t.text).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(28).fontFamily(`Segoe UI`).textAlign(`CENTER`).position(t.position).metadata({[hv]:!0,[gv]:t.unitId}).attachedTo(t.unitId).visible(r?.visible??!0).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build()});try{await c.scene.local.addItems(e)}catch(e){A.error(`Failed to add HP number texts`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await c.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=D.get(e.id);if(!t)return;e.attachedTo=t.unitId,e.position=t.position;let n=e;n.text&&(n.text.plainText=t.text),e.metadata={...e.metadata,[hv]:!0,[gv]:t.unitId}})})}catch(e){A.error(`Failed to update HP number texts`,e)}}}})(),()=>{u=!0}},[t,i,a,o,s,l,u,d]),null};var Dv=`${R}/death-effect-token`,Ov=`${R}/death-effect-owner`,kv=e=>`DTH${e.slice(3)}`,Av=(e,t,n)=>xt(e.metadata,t,n,`current`);const jv=()=>{let t=B(e=>e.cacheReady),n=B(e=>e.sceneReady),i=B(e=>e.items),a=B(e=>e.localItems),o=B(e=>e.roomMetadata),s=B(e=>e.sceneMetadata),l=B(e=>e.systemData);return(0,z.useEffect)(()=>{if(!t||!n)return;let s=!1;return(async()=>{let t=o,n=t[O.SHOW_DEATH_EFFECT]??!1,u=l?.attributes||[],d=St(t,u).currentHpBid,f=a.filter(e=>y(e)&&e.metadata?.[Dv]===!0);if(!n){if(f.length>0)try{await c.scene.local.deleteItems(f.map(e=>e.id))}catch(e){A.error(`Failed to remove death token effects`,e)}return}let m=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),h=new Map;m.forEach(e=>{Av(e,d,u)===0&&h.set(kv(e.id),{ownerId:e.id,visible:e.visible})});let g=new Map(f.map(e=>[e.id,e])),_=Array.from(h.entries()).filter(([e])=>!g.has(e)),v=f.filter(e=>!h.has(e.id)),b=f.filter(e=>{let t=h.get(e.id);if(!t)return!1;let n=e;return e.attachedTo!==t.ownerId||n.metadata?.[Ov]!==t.ownerId});if(!s){if(v.length>0)try{await c.scene.local.deleteItems(v.map(e=>e.id))}catch(e){A.error(`Failed to remove stale death token effects`,e)}if(_.length>0){let e=_.map(([e,t])=>r().id(e).name(`Death Token Effect`).effectType(`ATTACHMENT`).layer(`ATTACHMENT`).attachedTo(t.ownerId).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(`
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
`).visible(t.visible).metadata({[Dv]:!0,[Ov]:t.ownerId}).build());try{await c.scene.local.addItems(e)}catch(e){A.error(`Failed to add death token effects`,e)}}if(b.length>0)try{await c.scene.local.updateItems(b.map(e=>e.id),e=>{e.forEach(e=>{let t=h.get(e.id);t&&(e.attachedTo=t.ownerId,e.metadata={...e.metadata,[Dv]:!0,[Ov]:t.ownerId})})})}catch(e){A.error(`Failed to update death token effects`,e)}}})(),()=>{s=!0}},[t,n,i,a,o,s,l]),null};var Mv=`${R}/buff-effect-token`,Nv=`${R}/buff-effect-owner`,Pv=`${R}/debuff-effect-token`,Fv=`${R}/debuff-effect-owner`,Iv=`${R}/effect-preset`,Lv=e=>`EFB${e.slice(3)}`,Rv=e=>`EFD${e.slice(3)}`,zv=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const Bv=()=>{let t=B(e=>e.cacheReady),n=B(e=>e.sceneReady),i=B(e=>e.items),a=B(e=>e.localItems),o=B(e=>e.roomMetadata),s=B(e=>e.sceneMetadata);return(0,z.useEffect)(()=>{if(!t||!n)return;let s=!1;return(async()=>{let t=o,n=t[O.BUFF_VISUAL_PRESET],l=t[O.DEBUFF_VISUAL_PRESET],u=ih(n)?n:eh,d=ah(l)?l:th,f=oh(u),m=sh(d),h=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),g=new Set(h.map(e=>e.id)),_=new Map,v=(e,t)=>{let n=_.get(e)||{hasBuff:!1,hasDebuff:!1};t===`buff`?n.hasBuff=!0:n.hasDebuff=!0,_.set(e,n)};i.forEach(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return;let t=zv(e.metadata?.[Vh]);t.length!==0&&t.forEach(t=>{t.effectType!==`neutral`&&(t.targets.length>0?t.targets:[e.id]).forEach(e=>{g.has(e)&&(t.effectType===`buff`||t.effectType===`debuff`)&&v(e,t.effectType)})})});let b=new Map,x=new Map;h.forEach(e=>{let t=_.get(e.id);t?.hasBuff&&b.set(Lv(e.id),e.id),t?.hasDebuff&&x.set(Rv(e.id),e.id)});let S=a.filter(e=>y(e)&&e.metadata?.[Mv]===!0),C=a.filter(e=>y(e)&&e.metadata?.[Pv]===!0),w=async e=>{let{existing:t,desiredByOverlayId:n,preset:i,shader:a,name:o,flagKey:l,ownerKey:u}=e,d=new Map(t.map(e=>[e.id,e])),f=Array.from(n.entries()).filter(([e])=>!d.has(e)),p=t.filter(e=>!n.has(e.id)),m=t.filter(e=>{let t=n.get(e.id);if(!t)return!1;let r=e.metadata?.[Iv];return e.attachedTo!==t||r!==i});if(!s){if(p.length>0)try{await c.scene.local.deleteItems(p.map(e=>e.id))}catch(e){A.error(`Failed to remove stale ${o.toLowerCase()} overlays`,e)}if(f.length>0){let e=f.map(([e,t])=>r().id(e).name(o).effectType(`ATTACHMENT`).layer(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(a).metadata({[l]:!0,[u]:t,[Iv]:i}).build());try{await c.scene.local.addItems(e)}catch(e){A.error(`Failed to add ${o.toLowerCase()} overlays`,e)}}if(m.length>0)try{await c.scene.local.updateItems(m.map(e=>e.id),e=>{e.forEach(e=>{let t=n.get(e.id);if(!t)return;e.attachedTo=t;let r=e;r.sksl=a,e.metadata={...e.metadata,[l]:!0,[u]:t,[Iv]:i}})})}catch(e){A.error(`Failed to update ${o.toLowerCase()} overlays`,e)}}};await w({existing:S,desiredByOverlayId:b,preset:u,shader:f,name:`Buff Token Effect`,flagKey:Mv,ownerKey:Nv}),await w({existing:C,desiredByOverlayId:x,preset:d,shader:m,name:`Debuff Token Effect`,flagKey:Pv,ownerKey:Fv})})(),()=>{s=!0}},[t,n,i,a,o,s]),null};var Vv=`${R}/boss-hp-effect`,Hv=`${R}/boss-hp-owner`,Uv=`${R}/boss-hp-slot`,Wv=e=>`BOSSHP${e}`,Gv=(e,t,n)=>Math.max(t,Math.min(n,e)),Kv=(e,t,n,r)=>{let i=xt(e.metadata,t,r,`current`),a=xt(e.metadata,n,r,`max`);return a===null||a<=0||i===null?null:Gv(i/a*100,0,100)};const qv=()=>{let t=B(e=>e.cacheReady),n=B(e=>e.sceneReady),i=B(e=>e.items),a=B(e=>e.localItems),o=B(e=>e.roomMetadata),s=B(e=>e.sceneMetadata),l=B(e=>e.systemData);return(0,z.useEffect)(()=>{if(!t||!n)return;let s=!1;return(async()=>{let t=o,n=l?.attributes||[],{currentHpBid:u,maxHpBid:d}=St(t,n),f=a.filter(e=>y(e)&&e.metadata?.[Vv]===!0),m=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0&&t.metadata?.[p.BOSS_MODE]===!0).sort((e,t)=>{let n=Number(e.metadata?.[p.INITIATIVE]??0);return Number(t.metadata?.[p.INITIATIVE]??0)-n}).slice(0,2).map((e,t)=>{let r=Kv(e,u,d,n);return r===null?null:{id:Wv(t),unitId:e.id,slot:t,hpPercent:r}}).filter(e=>e!==null),h=new Map(m.map(e=>[e.id,e])),g=new Map(f.map(e=>[e.id,e])),_=f.filter(e=>!h.has(e.id)),v=m.filter(e=>!g.has(e.id)),b=f.filter(e=>{let t=h.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`slot`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-t.slot)>.001||e.metadata?.[Hv]!==t.unitId});if(!s){if(_.length>0)try{await c.scene.local.deleteItems(_.map(e=>e.id))}catch(e){A.error(`Failed to remove stale boss HP viewport effects`,e)}if(v.length>0){let e=v.map(e=>r().id(e.id).name(`Boss HP Bar`).effectType(`VIEWPORT`).locked(!0).disableHit(!0).uniforms([{name:`hpPercent`,value:e.hpPercent},{name:`slot`,value:e.slot}]).sksl(`
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
`).metadata({[Vv]:!0,[Hv]:e.unitId,[Uv]:e.slot}).build());try{await c.scene.local.addItems(e)}catch(e){A.error(`Failed to add boss HP viewport effects`,e)}}if(b.length>0)try{await c.scene.local.updateItems(b.map(e=>e.id),e=>{e.forEach(e=>{let t=h.get(e.id);if(!t)return;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`slot`,value:t.slot}],e.metadata={...e.metadata,[Vv]:!0,[Hv]:t.unitId,[Uv]:t.slot}})})}catch(e){A.error(`Failed to update boss HP viewport effects`,e)}}})(),()=>{s=!0}},[t,n,i,a,o,s,l]),null};var Jv=`${R}/current-turn-effect`;const Yv=()=>{let e=B(e=>e.cacheReady),t=B(e=>e.sceneReady),n=B(e=>e.items),i=B(e=>e.roomMetadata),a=B(e=>e.sceneMetadata);return(0,z.useEffect)(()=>{if(!e||!t)return;let o=!1;return(async()=>{let e=i[O.SHOW_TURN_EFFECT]===!0,t=a[O.CURRENT_TURN];if(!e||!t){try{await c.scene.local.deleteItems([Jv])}catch{}return}if(!n.find(e=>e.id===t)){try{await c.scene.local.deleteItems([Jv])}catch{}return}if(!o){try{let e=!1;if(await c.scene.local.updateItems([Jv],n=>{let r=n[0];r&&(r.attachedTo=t,e=!0)}),e)return}catch{}if(!o)try{let e=r().id(Jv).name(`Current Turn Effect`).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).sksl(`
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

`).build();await c.scene.local.addItems([e])}catch(e){A.error(`Failed to sync current turn effect`,e)}}})(),()=>{o=!0}},[e,t,n,i,a]),null};var Xv=`${R}/gm-name-label`,Zv=`${R}/gm-name-owner`,Qv=e=>`GMN${e.slice(3)}`,$v=24,ey=`Segoe UI`,ty=800,ny=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o,width:r,height:i}},ry=e=>{if(typeof document>`u`)return e.length*($v*.58);let t=document.createElement(`canvas`).getContext(`2d`);return t?(t.font=`${ty} ${$v}px ${ey}`,t.measureText(e).width):e.length*($v*.58)},iy=(e,t,n)=>{let r=ny(e,t),i=ry(n)*.5;return{x:r.minX+r.width*.5-i+6,y:r.minY+r.height-16}};const ay=()=>{let t=B(e=>e.cacheReady),r=B(e=>e.sceneReady),i=B(e=>e.items),a=B(e=>e.localItems),o=B(e=>e.gridDpi),s=B(e=>e.roomMetadata),l=B(e=>e.sceneMetadata),u=B(e=>e.playerData);return(0,z.useEffect)(()=>{if(!t||!r)return;let l=!1;return(async()=>{let t=s[O.SHOW_NAMES_TO_GM]??!1,r=String(u?.role||``).toUpperCase()===`GM`,d=a.filter(e=>b(e)&&e.metadata?.[Xv]===!0);if(!t||!r){if(d.length>0)try{await c.scene.local.deleteItems(d.map(e=>e.id))}catch(e){A.error(`Failed to remove GM name labels`,e)}return}let f=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),m=new Map;for(let e of f){let t=e.metadata?.[p.UNIT_NAME],n=String(t||``).trim();n&&m.set(Qv(e.id),{unitId:e.id,name:n,position:iy(e,o,n),visible:e.visible})}let h=new Map(d.map(e=>[e.id,e])),g=Array.from(m.entries()).filter(([e])=>!h.has(e)),_=d.filter(e=>!m.has(e.id)),v=d.filter(e=>{let t=m.get(e.id);if(!t)return!1;let n=e.text?.plainText,r=Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01;return e.attachedTo!==t.unitId||n!==t.name||e.visible!==t.visible||r});if(!l){if(_.length>0)try{await c.scene.local.deleteItems(_.map(e=>e.id))}catch(e){A.error(`Failed to remove stale GM name labels`,e)}if(g.length>0){let e=g.map(([e,t])=>n().id(e).name(`GM Name Label`).layer(`TEXT`).plainText(t.name).textType(`PLAIN`).fontWeight(800).fillOpacity(1).fillColor(`white`).strokeWidth(12).strokeColor(`black`).strokeOpacity(1).fontSize($v).fontFamily(ey).textAlign(`CENTER`).position(t.position).metadata({[Xv]:!0,[Zv]:t.unitId}).attachedTo(t.unitId).visible(t.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).build());try{await c.scene.local.addItems(e)}catch(e){A.error(`Failed to add GM name labels`,e)}}if(v.length>0)try{await c.scene.local.updateItems(v.map(e=>e.id),e=>{e.forEach(e=>{let t=m.get(e.id);if(!t)return;e.attachedTo=t.unitId,e.position=t.position,e.visible=t.visible;let n=e;n.text&&(n.text.plainText=t.name),e.metadata={...e.metadata,[Xv]:!0,[Zv]:t.unitId}})})}catch(e){A.error(`Failed to update GM name labels`,e)}}})(),()=>{l=!0}},[t,r,i,a,o,s,l,u]),null},oy=()=>{let[e,t]=(0,z.useState)(!1),{updateThemeFromSystem:n}=Rt(),r=B(e=>e.roomMetadata),i=B(e=>e.cacheReady),a=B(e=>e.systemData),o=B(e=>e.setSystemData),s=()=>({theme:{primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,snapshotPublicId:null});return(0,z.useEffect)(()=>{!i&&e&&(t(!1),o(null))},[i,e,o]),(0,z.useEffect)(()=>{!i||!a||n(a.theme.primary,a.theme.offset,a.theme.background,a.theme.border,a.theme.background_url)},[i,a,n]),(0,z.useEffect)(()=>{if(e)return;let n=!0,a=async()=>{if(i)try{A.log(`Starting app initialization...`),await c(),n&&(t(!0),A.log(`App initialization complete`))}catch(e){A.error(`Error during app initialization:`,e),n&&t(!0)}},c=async()=>{let e=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Snapshot ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Snapshot ${t} is not a JSON array`);return n}throw Error(`Snapshot ${t} has invalid type`)},t=async t=>{let{data:n,error:r}=await C.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:t});if(r)return A.error(`Failed to load room snapshot:`,r),!1;let i=Array.isArray(n)?n[0]:n;if(!i||typeof i.snapshot_public_id!=`string`)return A.warn(`Room snapshot reference was set, but no snapshot record was returned`),!1;let a=e(i.card_layout,`card_layout`),s=e(i.list_layout,`list_layout`),c=e(i.attributes,`attributes`);return o({theme:{primary:i.theme_primary,offset:i.theme_offset,background:i.theme_background,border:i.theme_border,background_url:i.background_url},cardLayout:a,listLayout:s,attributes:c,systemName:i.system_name,importDate:i.imported_at,snapshotPublicId:i.snapshot_public_id}),A.log(`System data hydrated from room snapshot`,{snapshotPublicId:i.snapshot_public_id,systemName:i.system_name}),!0};try{let e=r[uh.SNAPSHOT_PUBLIC_ID];if(typeof e==`string`&&e.trim().length>0&&await t(e))return;A.log(`Room snapshot reference missing or unavailable, initializing defaults`),await l()}catch(e){A.error(`Error loading system data:`,e),await l()}},l=async()=>{o(s()),A.log(`Default system initialized`)};return a(),()=>{n=!1}},[i,e,r,o,n]),(0,z.useEffect)(()=>{if(!i||!e)return;let t=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},n=r[uh.SNAPSHOT_PUBLIC_ID],c=typeof n==`string`&&n.trim().length>0?n.trim():null;if(c===(a?.snapshotPublicId??null))return;let l=!1;return(async()=>{if(!c){l||(o(s()),A.log(`Room snapshot reference cleared, reverted runtime system to defaults`));return}let{data:e,error:n}=await C.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:c});if(n){A.error(`Failed to refresh system from room snapshot change:`,n);return}let r=Array.isArray(e)?e[0]:e;if(!r||typeof r.snapshot_public_id!=`string`){A.warn(`Room snapshot reference changed, but snapshot record was not found`);return}let i=t(r.card_layout),a=t(r.list_layout),u=t(r.attributes);if(!i||!a||!u){A.warn(`Room snapshot refresh returned invalid payload arrays`);return}l||(o({theme:{primary:r.theme_primary,offset:r.theme_offset,background:r.theme_background,border:r.theme_border,background_url:r.background_url},cardLayout:i,listLayout:a,attributes:u,systemName:r.system_name,importDate:r.imported_at,snapshotPublicId:r.snapshot_public_id}),A.log(`Runtime system refreshed from room snapshot change`,{snapshotPublicId:r.snapshot_public_id,systemName:r.system_name}))})(),()=>{l=!0}},[i,e,r,a,o]),{isInitialized:e}};var sy=m`
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
`,cy=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e2232;
  color: #ffffff;
`,ly=T.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: #9d99ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,uy=T.p`
  margin-top: 20px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;function dy(){let{sceneReady:e,cacheReady:n,playerData:r,roomMetadata:i,sceneMetadata:a}=B(),{isInitialized:o}=oy(),{theme:s}=Rt(),{t:l}=yt(),[u,d]=(0,z.useState)(`ForgeMain`),[f,p]=(0,z.useState)(!1),m=(0,z.useRef)(!1),h=String(r?.role||``).toUpperCase()===`GM`,g=i,_=r?.id,v=(g[ne(O.PARTY_HUD_OPEN,_)]??g[O.PARTY_HUD_OPEN])===!0,y=g[O.SHOW_PLAYER_VIEW]||!1,b=h||y,x=e&&n&&o;return(0,z.useEffect)(()=>{x&&(async()=>{await Me(),dt()&&await c.broadcast.sendMessage(t.AUTHSYNCCHANNEL,{type:`BS_AUTH_STATE`,source:t.EXTENSIONID,snapshot:$e()},{destination:`LOCAL`})})()},[x]),(0,z.useEffect)(()=>{if(!x)return;let e=c.broadcast.onMessage(t.AUTHSYNCCHANNEL,e=>{let n=e.data;if(!(!n||typeof n!=`object`||n.source===t.EXTENSIONID)){if(n.type===`BS_AUTH_REQUEST`){if(!dt())return;c.broadcast.sendMessage(t.AUTHSYNCCHANNEL,{type:`BS_AUTH_STATE`,source:t.EXTENSIONID,snapshot:$e()},{destination:`LOCAL`});return}n.type!==`BS_AUTH_STATE`||dt()||!n.snapshot||lt(n.snapshot)}});return c.broadcast.sendMessage(t.AUTHSYNCCHANNEL,{type:`BS_AUTH_REQUEST`,source:t.EXTENSIONID},{destination:`LOCAL`}),()=>{e()}},[x]),(0,z.useEffect)(()=>{if(!x)return;let e=!0;return(async()=>{if(v&&!m.current){await V_(),e&&(m.current=!0);return}!v&&m.current&&(await H_(),e&&(m.current=!1))})(),()=>{e=!1}},[x,v]),(0,z.useEffect)(()=>{x&&!b&&u===`ForgeMain`&&d(`Party`)},[x,b,u]),(0,z.useEffect)(()=>{u!==`ForgeMain`&&c.action.setWidth(350)},[u]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(sy,{theme:s}),!e||!n||!o?(0,V.jsxs)(cy,{children:[(0,V.jsx)(ly,{}),(0,V.jsx)(uy,{children:l(e?n?o?`app.loadingFallback`:`app.initializingSystem`:`app.loadingCache`:`app.connectingScene`)})]}):(0,V.jsxs)(tm,{children:[(0,V.jsx)(Ev,{}),(0,V.jsx)(jv,{}),(0,V.jsx)(Bv,{}),(0,V.jsx)(qv,{}),(0,V.jsx)(Yv,{}),(0,V.jsx)(ay,{}),(0,V.jsx)(nm,{theme:s,$backgroundUrl:s.BACKGROUND_URL,children:(0,V.jsx)(iu,{mode:`wait`,children:(()=>{switch(u){case`ForgeMain`:return b?(0,V.jsx)(z_,{},`main`):(0,V.jsx)(fv,{},`party`);case`Settings`:return h?(0,V.jsx)(qm,{},`settings`):(0,V.jsx)(z_,{},`main`);case`Party`:return(0,V.jsx)(fv,{},`party`);case`System`:return h?(0,V.jsx)(Rh,{},`system`):(0,V.jsx)(z_,{},`main`);case`ChatLog`:return(0,V.jsx)($m,{},`chatlog`)}})()})}),(0,V.jsx)(vm,{isOpen:f,currentPage:u,onToggle:()=>p(!f),onNavigate:e=>{if(!b&&e===`ForgeMain`){d(`Party`),p(!1);return}if(!h&&(e===`Settings`||e===`System`)){d(`ForgeMain`),p(!1);return}d(e),p(!1)},canAccessInitiativeList:b})]})]})}var fy=dy,py=class{static{this.ALPHANUMERICTEXTMATCH=/\s[\da-zA-Z]$/}};function my(e){for(let t of gy)if(e.includes(t)){let n=gy[Math.floor(Math.random()*gy.length)];return e.replace(t,n)}return hy(e)}function hy(e){return`${gy[Math.floor(Math.random()*gy.length)]} ${e}`}const gy=`Grizzled.Wily.Stoic.Mellow.Pensive.Shrewd.Cautious.Hardy.Nimble.Tenacious.Gritty.Tolerant.Hardy.Adroit.Resilient.Slight.Stout.Durable.Subtle.Sober.Clever.Brave.Calm.Wise.Cunning.Alert.Swift.Agile.Loyal.Sturdy.Stable.Sneaky.Clever.Resourceful.Shady.Stalwart.Vigilant.Staunch.Fierce.Vigorous.Robust.Fearless.Dauntless.Resolute.Sagacious.Prudent.Judicious.Astute.Savvy.Sharp.Quick.Witty.Smart.Snippy.Crafty.Deft.Sly.Artful.Clever.Sneering.Tough.Rugged.Solid.Strong.Sturdy.Tough.Gritty.Rough.Hardened.Burly.Muscular.Brawny.Rowdy.Forceful.Snorting.Potent.Martial.Speckled.Mottled.Disheveled`.split(`.`);var _y=`com.battle-system.forge/view-unit`,vy=`com.battle-system.forge/view-unit-player`,yy=e=>e.trim().toLowerCase(),by=e=>{if(typeof e!=`string`)return null;let t=e.trim();return t.length>0?t:null},xy=e=>{let t=e.trim();return t?py.ALPHANUMERICTEXTMATCH.test(t)?t.slice(0,-2):t:e},Sy=e=>{let t=typeof e.text?.plainText==`string`?e.text.plainText.trim():``;if(t.length>0)return t;let n=e.metadata?.[p.UNIT_NAME],r=typeof n==`string`?n.trim():``;if(r.length>0)return r;let i=typeof e.name==`string`?e.name.trim():``;return i.length>0?i:typeof e.name==`string`?e.name:``},Cy=async(e,n)=>{let r=await c.viewport.getHeight(),i=r>800?700:r-100;await c.popover.open({id:t.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(e)}`,height:i,width:350,anchorElementId:n,hidePaper:!0,disableClickAway:!0})},wy=async e=>{let t=Array.from(new Set(e.map(e=>e.trim()).filter(e=>e.length>0))),n=new Map;if(t.length===0)return n;let r=await se(),i=new Map;for(let e of r){let t=yy(e.name);if(!t)continue;let n=i.get(t);n?n.push(e):i.set(t,[e])}for(let e of t){let t=yy(e),r=i.get(t)?.[0];!r||!r.metadata||n.set(t,le(r.metadata))}try{let e=await F(t);for(let t of e){let e=yy(t.name);!e||n.has(e)||!t.metadata||n.set(e,le(t.metadata))}let r=await it(t);for(let e of r){let t=yy(e.name);!t||n.has(t)||!e.metadata||n.set(t,le(e.metadata))}}catch(e){A.log(`Remote collection lookup failed, using local collection only`,e)}return n};function Ty({children:e}){let t=B(e=>e.roomMetadata);B(e=>e.sceneMetadata);let n=B(e=>e.items),r=B(e=>e.playerData),i=B(e=>e.systemData),a=t,o=i?.attributes??[],s=by(a[O.HP_CURRENT_BID]),l=by(a[O.HP_MAX_BID]),u=St(a,o),d=s||u.currentHpBid,f=l||u.maxHpBid,m=!!(d&&f),h=a[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?!0:a[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]===!0,g=a[O.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===void 0?!0:a[O.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===!0;return(0,z.useEffect)(()=>{c.onReady(()=>{c.contextMenu.create({id:p.ON_LIST,icons:[{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}}],async onClick(e){if(A.info(`Add to Combat Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[p.ON_LIST]===!0))await c.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[p.ON_LIST],delete t.metadata[p.INITIATIVE]});else{let t=[],r=[],i=new Set(e.items.map(e=>e.id)),o=a[O.USE_DESCRIPTIVE_DUPLICATES]===!0,s=new Set(n.filter(e=>{if(i.has(e.id))return!1;let t=e.metadata[p.UNIT_NAME];return typeof t==`string`&&t.trim().length>0}).map(e=>yy(String(e.metadata[p.UNIT_NAME]))));for(let n of e.items){if(n.metadata[p.FABRICATED]===!0)continue;let e=xy(n.text?.plainText||n.name);t.push(e)}await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let l=await wy(t);await c.action.setBadgeText(void 0);for(let t of e.items){let e={},n=t,i=Sy(n);if(t.metadata[p.FABRICATED]!==!0){let r=xy(n.text?.plainText||t.name),a=l.get(yy(r));a&&Object.assign(e,a),(typeof e[p.UNIT_NAME]!=`string`||!String(e[p.UNIT_NAME]).trim())&&(e[p.UNIT_NAME]=i),e[p.FABRICATED]=!0}if(o){let r=typeof t.metadata[p.UNIT_NAME]==`string`?String(t.metadata[p.UNIT_NAME]).trim():``,a=xy(n.text?.plainText||t.name).trim(),o=String(e[p.UNIT_NAME]||r||i||a||t.name).trim(),c=yy(o);if(c){let e=0;for(;s.has(c)&&e<20;)o=my(o),c=yy(o),e+=1;c&&s.add(c)}e[p.UNIT_NAME]=o}(typeof e[p.UNIT_NAME]!=`string`||!String(e[p.UNIT_NAME]).trim())&&(e[p.UNIT_NAME]=i),e[p.ON_LIST]=!0,e[p.INITIATIVE]=0,r.push({id:t.id,metadata:e})}await c.scene.items.updateItems(e.items,e=>{for(let t of e){let e=r.find(e=>e.id===t.id);if(e&&(Object.assign(t.metadata,e.metadata),a[O.SHOW_NAMES]===!0)){let n=t,r=typeof e.metadata[p.UNIT_NAME]==`string`&&String(e.metadata[p.UNIT_NAME]).trim().length>0?String(e.metadata[p.UNIT_NAME]).trim():Sy(n);n.text&&(n.text.plainText=r)}}})}}}),c.contextMenu.create({id:p.IN_PARTY,icons:[{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`!=`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`!=`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`==`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`==`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){A.info(`Add to Party Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[p.IN_PARTY]===!0)?await c.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[p.IN_PARTY]}):await c.scene.items.updateItems(e.items,e=>{for(let t of e)t.metadata[p.IN_PARTY]=!0})}}),c.contextMenu.create({id:_y,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}}],async onClick(e,t){A.info(`View Unit Clicked: ${e.items[0].name}`);let r=e.items[0];if(!r)return;let i={};if(r.metadata[p.FABRICATED]!==!0){let e=r,t=Sy(e),o=xy(e.text?.plainText||r.name);await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let s=await wy([o]);await c.action.setBadgeText(void 0);let l=s.get(yy(o));l&&Object.assign(i,l),(typeof i[p.UNIT_NAME]!=`string`||!String(i[p.UNIT_NAME]).trim())&&(i[p.UNIT_NAME]=t),i[p.FABRICATED]=!0,a[O.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[p.UNIT_NAME]!=null&&e.id!==r.id).map(e=>e.metadata[p.UNIT_NAME]).includes(o)&&(i[p.UNIT_NAME]=my(o)),await c.scene.items.updateItems([r],e=>{let t=e[0];if(Object.assign(t.metadata,i),a[O.SHOW_NAMES]===!0){let e=t,n=typeof i[p.UNIT_NAME]==`string`&&String(i[p.UNIT_NAME]).trim().length>0?String(i[p.UNIT_NAME]).trim():Sy(e);e.text&&(e.text.plainText=n)}})}await Cy(r.id,t)}}),g?c.contextMenu.create({id:vy,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e,t){A.info(`View Unit Clicked: ${e.items[0].name}`);let r=e.items[0];if(!r)return;let i={};if(r.metadata[p.FABRICATED]!==!0){let e=r,t=Sy(e),o=xy(e.text?.plainText||r.name);await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let s=await wy([o]);await c.action.setBadgeText(void 0);let l=s.get(yy(o));l&&Object.assign(i,l),(typeof i[p.UNIT_NAME]!=`string`||!String(i[p.UNIT_NAME]).trim())&&(i[p.UNIT_NAME]=t),i[p.FABRICATED]=!0,a[O.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[p.UNIT_NAME]!=null&&e.id!==r.id).map(e=>e.metadata[p.UNIT_NAME]).includes(o)&&(i[p.UNIT_NAME]=my(o)),await c.scene.items.updateItems([r],e=>{let t=e[0];if(Object.assign(t.metadata,i),a[O.SHOW_NAMES]===!0){let e=t,n=typeof i[p.UNIT_NAME]==`string`&&String(i[p.UNIT_NAME]).trim().length>0?String(i[p.UNIT_NAME]).trim():Sy(e);e.text&&(e.text.plainText=n)}})}await Cy(r.id,t)}}):c.contextMenu.remove(vy).catch(()=>{}),m&&h?c.contextMenu.create({id:p.MODIFY_UNIT,icons:[{icon:`/icon.svg`,label:`Adjust HP`,filter:{some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Adjust HP`,filter:{every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e,t){A.info(`Adjust HP Clicked: ${e.items[0].name}`),await c.popover.open({id:ee.CONTEXT_MENU,url:`/pages/forgecontext.html`,height:50,width:180,anchorElementId:t,hidePaper:!0})},embed:{url:`/pages/forgecontext.html?contextmenu=true`,height:70}}):c.contextMenu.remove(p.MODIFY_UNIT).catch(()=>{})})},[a,m,h,g]),(0,V.jsx)(V.Fragment,{children:e})}kt.createRoot(document.getElementById(`root`)).render((0,V.jsx)(z.StrictMode,{children:(0,V.jsx)(te,{children:(0,V.jsx)(Ft,{children:(0,V.jsx)(Ty,{children:(0,V.jsx)(Lt,{children:(0,V.jsx)(fy,{})})})})})}));