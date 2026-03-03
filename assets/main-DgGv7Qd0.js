import{A as e,C as t,D as n,E as r,F as i,M as a,O as o,P as s,S as c,T as l,_ as u,b as d,c as f,d as p,f as m,g as h,h as g,j as _,k as v,l as y,m as b,n as x,o as S,p as C,r as w,s as T,t as E,u as ee,v as te,w as ne,x as D,y as re}from"./defaultgamesystem-jXGW0PHK.js";import{C as ie,S as O,_ as ae,a as oe,b as se,c as ce,d as le,f as ue,g as k,h as de,i as fe,m as pe,n as me,o as he,r as ge,s as _e,t as ve,u as ye,v as be,w as A,x as xe,y as Se}from"./FormulaParser-DCdEICQ2.js";import{n as Ce,t as j}from"./MockData-DTzuSraw.js";var we=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},Te=(e=>e?we(e):we),M=i(a(),1),Ee=e=>e;function De(e,t=Ee){let n=M.useSyncExternalStore(e.subscribe,M.useCallback(()=>t(e.getState()),[e,t]),M.useCallback(()=>t(e.getInitialState()),[e,t]));return M.useDebugValue(n),n}var Oe=e=>{let t=Te(e),n=e=>De(t,e);return Object.assign(n,t),n},ke=(e=>e?Oe(e):Oe),Ae=i(e(),1);const N=ke(e=>({cacheReady:!1,setCacheReady:t=>e({cacheReady:t}),sceneReady:!1,setSceneReady:t=>e({sceneReady:t}),items:[],setItems:t=>e({items:t}),localItems:[],setLocalItems:t=>e({localItems:t}),sceneMetadata:{},setSceneMetadata:t=>e({sceneMetadata:{...t}}),roomMetadata:{},setRoomMetadata:t=>e({roomMetadata:{...t}}),gridDpi:150,setGridDpi:t=>e({gridDpi:t}),playerData:void 0,setPlayerData:t=>e({playerData:t}),partyData:[],setPartyData:t=>e({partyData:t})}));var je=0;const Me=ke(e=>({messages:[],initialized:!1,addMessage:t=>{let n=new Date,r=n.getHours(),i=n.getMinutes(),a=r>=12?`PM`:`AM`,o=`${r%12||12}:${i<10?`0${i}`:i} ${a}`;e(e=>({messages:[...e.messages,{id:je++,text:t,timestamp:o}]}))},setInitialized:t=>e({initialized:t})})),Ne=()=>{Me.getState().initialized||(l.broadcast.onMessage(`${d.EXTENSIONID}/chatlog`,e=>{let t=Me.getState().addMessage;typeof e.data==`string`?t(e.data):typeof e.data==`object`&&e.data.message&&t(e.data.message)}),Me.getState().setInitialized(!0))};var P=c(),Pe=`${d.EXTENSIONID}/chatlog`,Fe=`${d.EXTENSIONID}/roll-notification`;function Ie({children:e}){let t=N(e=>e.setItems),n=N(e=>e.setLocalItems),r=N(e=>e.setSceneMetadata),i=N(e=>e.setRoomMetadata),a=N(e=>e.setGridDpi),o=N(e=>e.setPlayerData),s=N(e=>e.setPartyData),c=N(e=>e.setSceneReady),u=N(e=>e.setCacheReady);return(0,M.useEffect)(()=>{let e=(e,t)=>{let n=e[h.ENABLE_CONSOLE_LOG];typeof n==`boolean`&&O.setEnabled(n)},d=e=>{A(e);let{sceneMetadata:t,roomMetadata:n}=N.getState(),r=t,i=r[h.ENABLE_OBR_NOTIFICATION];if(r[h.SHOW_NOTIFICATION_TO_ALL]===!0){l.broadcast.sendMessage(Pe,{message:e},{destination:`ALL`}),i===!0&&l.broadcast.sendMessage(Fe,{message:e},{destination:`ALL`});return}Me.getState().addMessage(e),i===!0&&l.notification.show(e,`SUCCESS`)},f=({explicitMessage:e,tokenName:t,actionName:n,total:r})=>{if(typeof e==`string`&&e.trim().length>0)return e;let i=t||`Unknown`,a=n||`Action`;return typeof r==`number`&&Number.isFinite(r)?`${i} rolled ${a} for ${r}!`:`${i} rolled ${a}.`};Ne();let p=l.broadcast.onMessage(Fe,e=>{let t=e.data,n=typeof t?.message==`string`?t.message:null;n&&l.notification.show(n,`SUCCESS`)});be(e=>{let t=ae(e.rollHtml);d(f({tokenName:e.senderName,actionName:e.actionName,total:t}))}),se(e=>{d(f({explicitMessage:e.message}))}),Se(e=>{d(f({tokenName:e.playerName,actionName:e.result.diceNotation,total:e.result.totalValue}))});let m,g,_,v,y,b,x,S,C=async()=>{let[c,d,f,p,m,h,C,w,T,E,ee,te]=await Promise.all([l.scene.items.getItems(),l.scene.local.getItems(),l.scene.getMetadata(),l.room.getMetadata(),l.scene.grid.getDpi(),l.party.getPlayers(),l.player.getColor(),l.player.getRole(),l.player.getConnectionId(),l.player.getId(),l.player.getMetadata(),l.player.getName()]);t(c),n(d),r(f),i(p),e(f,p),a(m),o({id:E,name:te,connectionId:T,role:w,color:C,metadata:ee}),s(h),g=l.scene.items.onChange(t),_=l.scene.local.onChange(n),b=l.scene.grid.onChange(e=>a(e.dpi)),x=l.player.onChange(o),S=l.party.onChange(s),v=l.scene.onMetadataChange(t=>{r(t),e(t,N.getState().roomMetadata)}),y=l.room.onMetadataChange(t=>{i(t),e(N.getState().sceneMetadata,t)}),u(!0),O.log(`CacheManager: Cache is ready`)};return l.onReady(async()=>{let e=await l.scene.isReady();c(e),e&&(O.log(`Scene is ready on initial load, syncing cache...`),await C()),m=l.scene.onReadyChange(async e=>{c(e),e?(O.log(`Scene became ready, syncing cache...`),await C()):(O.log(`Scene is no longer ready, clearing cache...`),u(!1))})}),()=>{m?.(),g?.(),_?.(),v?.(),y?.(),b?.(),x?.(),S?.(),p?.()}},[c,u,t,n,r,i,a,o,s]),(0,P.jsx)(P.Fragment,{children:e})}var Le=(0,M.createContext)(void 0);const Re=({children:e})=>{let[t,n]=(0,M.useState)(m),r=(0,M.useCallback)((e,t,r,i,a)=>{n(n=>n.PRIMARY===e&&n.OFFSET===t&&n.BACKGROUND===r&&n.BORDER===i&&n.BACKGROUND_URL===(a||void 0)?n:C(e,t,r,i,a))},[]);return(0,P.jsx)(Le.Provider,{value:{theme:t,setTheme:n,updateThemeFromSystem:r},children:e})},ze=()=>{let e=(0,M.useContext)(Le);if(!e)throw Error(`useForgeTheme must be used within a ThemeProvider`);return e};var Be=(0,M.createContext)({});function Ve(e){let t=(0,M.useRef)(null);return t.current===null&&(t.current=e()),t.current}var F=typeof window<`u`,I=F?M.useLayoutEffect:M.useEffect,He=(0,M.createContext)(null);function Ue(e,t){e.indexOf(t)===-1&&e.push(t)}function We(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Ge=(e,t,n)=>n>t?t:n<e?e:n,Ke={},qe=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function L(e){return typeof e==`object`&&!!e}var Je=e=>/^0[^.\s]+$/u.test(e);function Ye(e){let t;return()=>(t===void 0&&(t=e()),t)}var Xe=e=>e,Ze=(e,t)=>n=>t(e(n)),Qe=(...e)=>e.reduce(Ze),$e=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},et=class{constructor(){this.subscriptions=[]}add(e){return Ue(this.subscriptions,e),()=>We(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},tt=e=>e*1e3,nt=e=>e/1e3;function rt(e,t){return t?e*(1e3/t):0}var it=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,at=1e-7,ot=12;function st(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=it(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>at&&++s<ot);return o}function ct(e,t,n,r){if(e===t&&n===r)return Xe;let i=t=>st(t,0,1,e,n);return e=>e===0||e===1?e:it(i(e),t,r)}var lt=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ut=e=>t=>1-e(1-t),dt=ct(.33,1.53,.69,.99),ft=ut(dt),pt=lt(ft),mt=e=>(e*=2)<1?.5*ft(e):.5*(2-2**(-10*(e-1))),ht=e=>1-Math.sin(Math.acos(e)),gt=ut(ht),_t=lt(ht),vt=ct(.42,0,1,1),yt=ct(0,0,.58,1),bt=ct(.42,0,.58,1),xt=e=>Array.isArray(e)&&typeof e[0]!=`number`,St=e=>Array.isArray(e)&&typeof e[0]==`number`,Ct={linear:Xe,easeIn:vt,easeInOut:bt,easeOut:yt,circIn:ht,circInOut:_t,circOut:gt,backIn:ft,backInOut:pt,backOut:dt,anticipate:mt},wt=e=>typeof e==`string`,Tt=e=>{if(St(e)){e.length;let[t,n,r,i]=e;return ct(t,n,r,i)}else if(wt(e))return Ct[e],`${e}`,Ct[e];return e},Et=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],Dt={value:null,addProjectionMetrics:null};function Ot(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.has(e)||s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),t&&Dt.value&&Dt.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var kt=40;function At(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Et.reduce((e,n)=>(e[n]=Ot(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Ke.useManualTiming?i.timestamp:performance.now();n=!1,Ke.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,kt),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Et.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Et.length;t++)o[Et[t]].cancel(e)},state:i,steps:o}}var{schedule:R,cancel:jt,state:z,steps:Mt}=At(typeof requestAnimationFrame<`u`?requestAnimationFrame:Xe,!0),Nt;function Pt(){Nt=void 0}var Ft={now:()=>(Nt===void 0&&Ft.set(z.isProcessing||Ke.useManualTiming?z.timestamp:performance.now()),Nt),set:e=>{Nt=e,queueMicrotask(Pt)}},It={layout:0,mainThread:0,waapi:0},Lt=e=>t=>typeof t==`string`&&t.startsWith(e),Rt=Lt(`--`),zt=Lt(`var(--`),Bt=e=>zt(e)?Vt.test(e.split(`/*`)[0].trim()):!1,Vt=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ht(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Ut={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Wt={...Ut,transform:e=>Ge(0,1,e)},Gt={...Ut,default:1},Kt=e=>Math.round(e*1e5)/1e5,qt=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Jt(e){return e==null}var Yt=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Xt=(e,t)=>n=>!!(typeof n==`string`&&Yt.test(n)&&n.startsWith(e)||t&&!Jt(n)&&Object.prototype.hasOwnProperty.call(n,t)),Zt=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(qt);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Qt=e=>Ge(0,255,e),$t={...Ut,transform:e=>Math.round(Qt(e))},en={test:Xt(`rgb`,`red`),parse:Zt(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+$t.transform(e)+`, `+$t.transform(t)+`, `+$t.transform(n)+`, `+Kt(Wt.transform(r))+`)`};function tn(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var nn={test:Xt(`#`),parse:tn,transform:en.transform},rn=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),an=rn(`deg`),on=rn(`%`),B=rn(`px`),sn=rn(`vh`),cn=rn(`vw`),ln=(()=>({...on,parse:e=>on.parse(e)/100,transform:e=>on.transform(e*100)}))(),un={test:Xt(`hsl`,`hue`),parse:Zt(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+on.transform(Kt(t))+`, `+on.transform(Kt(n))+`, `+Kt(Wt.transform(r))+`)`},V={test:e=>en.test(e)||nn.test(e)||un.test(e),parse:e=>en.test(e)?en.parse(e):un.test(e)?un.parse(e):nn.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?en.transform(e):un.transform(e),getAnimatableNone:e=>{let t=V.parse(e);return t.alpha=0,V.transform(t)}},dn=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function fn(e){return isNaN(e)&&typeof e==`string`&&(e.match(qt)?.length||0)+(e.match(dn)?.length||0)>0}var pn=`number`,mn=`color`,hn=`var`,gn=`var(`,_n="${}",vn=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function yn(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(vn,e=>(V.test(e)?(r.color.push(a),i.push(mn),n.push(V.parse(e))):e.startsWith(gn)?(r.var.push(a),i.push(hn),n.push(e)):(r.number.push(a),i.push(pn),n.push(parseFloat(e))),++a,_n)).split(_n),indexes:r,types:i}}function bn(e){return yn(e).values}function xn(e){let{split:t,types:n}=yn(e),r=t.length;return e=>{let i=``;for(let a=0;a<r;a++)if(i+=t[a],e[a]!==void 0){let t=n[a];t===pn?i+=Kt(e[a]):t===mn?i+=V.transform(e[a]):i+=e[a]}return i}}var Sn=e=>typeof e==`number`?0:V.test(e)?V.getAnimatableNone(e):e;function Cn(e){let t=bn(e);return xn(e)(t.map(Sn))}var wn={test:fn,parse:bn,createTransformer:xn,getAnimatableNone:Cn};function Tn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function En({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Tn(s,r,e+1/3),a=Tn(s,r,e),o=Tn(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Dn(e,t){return n=>n>0?t:e}var H=(e,t,n)=>e+(t-e)*n,On=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},kn=[nn,en,un],An=e=>kn.find(t=>t.test(e));function jn(e){let t=An(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===un&&(n=En(n)),n}var Mn=(e,t)=>{let n=jn(e),r=jn(t);if(!n||!r)return Dn(e,t);let i={...n};return e=>(i.red=On(n.red,r.red,e),i.green=On(n.green,r.green,e),i.blue=On(n.blue,r.blue,e),i.alpha=H(n.alpha,r.alpha,e),en.transform(i))},Nn=new Set([`none`,`hidden`]);function Pn(e,t){return Nn.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Fn(e,t){return n=>H(e,t,n)}function In(e){return typeof e==`number`?Fn:typeof e==`string`?Bt(e)?Dn:V.test(e)?Mn:Bn:Array.isArray(e)?Ln:typeof e==`object`?V.test(e)?Mn:Rn:Dn}function Ln(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>In(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Rn(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=In(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function zn(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Bn=(e,t)=>{let n=wn.createTransformer(t),r=yn(e),i=yn(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Nn.has(e)&&!i.values.length||Nn.has(t)&&!r.values.length?Pn(e,t):Qe(Ln(zn(r,i),i.values),n):(`${e}${t}`,Dn(e,t))};function Vn(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?H(e,t,n):In(e)(e,t)}var Hn=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>R.update(t,e),stop:()=>jt(t),now:()=>z.isProcessing?z.timestamp:Ft.now()}},Un=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Wn=2e4;function Gn(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Kn(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Gn(r),Wn);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:nt(i)}}var qn=5;function Jn(e,t,n){let r=Math.max(t-qn,0);return rt(n-e(r),t-r)}var U={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Yn=.001;function Xn({duration:e=U.duration,bounce:t=U.bounce,velocity:n=U.velocity,mass:r=U.mass}){let i,a;U.maxDuration;let o=1-t;o=Ge(U.minDamping,U.maxDamping,o),e=Ge(U.minDuration,U.maxDuration,nt(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=$n(t,o),c=Math.exp(-i);return Yn-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=$n(t**2,o);return(-i(t)+Yn>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Yn+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Qn(i,a,s);if(e=tt(e),isNaN(c))return{stiffness:U.stiffness,damping:U.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Zn=12;function Qn(e,t,n){let r=n;for(let n=1;n<Zn;n++)r-=e(r)/t(r);return r}function $n(e,t){return e*Math.sqrt(1-t*t)}var er=[`duration`,`bounce`],tr=[`stiffness`,`damping`,`mass`];function nr(e,t){return t.some(t=>e[t]!==void 0)}function rr(e){let t={velocity:U.velocity,stiffness:U.stiffness,damping:U.damping,mass:U.mass,isResolvedFromDuration:!1,...e};if(!nr(e,tr)&&nr(e,er))if(e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Ge(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:U.mass,stiffness:i,damping:a}}else{let n=Xn(e);t={...t,...n,mass:U.mass},t.isResolvedFromDuration=!0}return t}function ir(e=U.visualDuration,t=U.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=rr({...n,velocity:-nt(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=nt(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?U.restSpeed.granular:U.restSpeed.default,i||=v?U.restDelta.granular:U.restDelta.default;let y;if(h<1){let e=$n(_,h);y=t=>o-Math.exp(-h*_*t)*((m+h*_*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}else if(h===1)y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}let b={calculatedDuration:p&&d||null,next:e=>{let t=y(e);if(p)s.done=e>=d;else{let n=e===0?m:0;h<1&&(n=e===0?tt(m):Jn(y,e,t));let a=Math.abs(n)<=r,c=Math.abs(o-t)<=i;s.done=a&&c}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Gn(b),Wn),t=Un(t=>b.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return b}ir.applyToOptions=e=>{let t=Kn(e,100,ir);return e.ease=t.ease,e.duration=tt(t.duration),e.type=`keyframes`,e};function ar({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=ir({keyframes:[f.value,m(f.value)],velocity:Jn(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function or(e,t,n){let r=[],i=n||Ke.mix||Vn,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Qe(Array.isArray(t)?t[n]||Xe:t,a)),r.push(a)}return r}function sr(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=or(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=$e(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Ge(e[0],e[a-1],t)):l}function cr(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=$e(0,t,r);e.push(H(n,1,i))}}function lr(e){let t=[0];return cr(t,e.length-1),t}function ur(e,t){return e.map(e=>e*t)}function dr(e,t){return e.map(()=>t||bt).splice(0,e.length-1)}function fr({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=xt(r)?r.map(Tt):Tt(r),a={done:!1,value:t[0]},o=sr(ur(n&&n.length===t.length?n:lr(t),e),t,{ease:Array.isArray(i)?i:dr(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var pr=e=>e!==null;function mr(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(pr),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var hr={decay:ar,inertia:ar,tween:fr,keyframes:fr,spring:ir};function gr(e){typeof e.type==`string`&&(e.type=hr[e.type])}var _r=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},vr=e=>e/100,yr=class extends _r{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Ft.now()&&this.tick(Ft.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},It.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;gr(e);let{type:t=fr,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||fr;s!==fr&&typeof o[0]!=`number`&&(this.mixKeyframes=Qe(vr,Vn(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Gn(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Ge(0,1,n)*o}let b=_?{done:!1,value:l[0]}:y.next(v);i&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==ar&&(b.value=mr(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return nt(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+nt(e)}get time(){return nt(this.currentTime)}set time(e){e=tt(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Ft.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=nt(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Hn,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Ft.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,It.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function br(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var xr=e=>e*180/Math.PI,Sr=e=>wr(xr(Math.atan2(e[1],e[0]))),Cr={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Sr,rotateZ:Sr,skewX:e=>xr(Math.atan(e[1])),skewY:e=>xr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},wr=e=>(e%=360,e<0&&(e+=360),e),Tr=Sr,Er=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Dr=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Or={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Er,scaleY:Dr,scale:e=>(Er(e)+Dr(e))/2,rotateX:e=>wr(xr(Math.atan2(e[6],e[5]))),rotateY:e=>wr(xr(Math.atan2(-e[2],e[0]))),rotateZ:Tr,rotate:Tr,skewX:e=>xr(Math.atan(e[4])),skewY:e=>xr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function kr(e){return e.includes(`scale`)?1:0}function Ar(e,t){if(!e||e===`none`)return kr(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Or,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Cr,i=t}if(!i)return kr(t);let a=r[t],o=i[1].split(`,`).map(Mr);return typeof a==`function`?a(o):o[a]}var jr=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Ar(n,t)};function Mr(e){return parseFloat(e.trim())}var Nr=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Pr=(()=>new Set(Nr))(),Fr=e=>e===Ut||e===B,Ir=new Set([`x`,`y`,`z`]),Lr=Nr.filter(e=>!Ir.has(e));function Rr(e){let t=[];return Lr.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var zr={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Ar(t,`x`),y:(e,{transform:t})=>Ar(t,`y`)};zr.translateX=zr.x,zr.translateY=zr.y;var Br=new Set,Vr=!1,Hr=!1,Ur=!1;function Wr(){if(Hr){let e=Array.from(Br).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Rr(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Hr=!1,Vr=!1,Br.forEach(e=>e.complete(Ur)),Br.clear()}function Gr(){Br.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Hr=!0)})}function Kr(){Ur=!0,Gr(),Wr(),Ur=!1}var qr=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Br.add(this),Vr||(Vr=!0,R.read(Gr),R.resolveKeyframes(Wr))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}br(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Br.delete(this)}cancel(){this.state===`scheduled`&&(Br.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Jr=e=>e.startsWith(`--`);function Yr(e,t,n){Jr(t)?e.style.setProperty(t,n):e.style[t]=n}var Xr=Ye(()=>window.ScrollTimeline!==void 0),Zr={};function Qr(e,t){let n=Ye(e);return()=>Zr[t]??n()}var $r=Qr(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),ei=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,ti={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:ei([0,.65,.55,1]),circOut:ei([.55,0,1,.45]),backIn:ei([.31,.01,.66,-.59]),backOut:ei([.33,1.53,.69,.99])};function ni(e,t){if(e)return typeof e==`function`?$r()?Un(e,t):`ease-out`:St(e)?ei(e):Array.isArray(e)?e.map(e=>ni(e,t)||ti.easeOut):ti[e]}function ri(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=ni(s,i);Array.isArray(d)&&(u.easing=d),Dt.value&&It.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return Dt.value&&p.finished.finally(()=>{It.waapi--}),p}function ii(e){return typeof e==`function`&&`applyToOptions`in e}function ai({type:e,...t}){return ii(e)&&$r()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var oi=class extends _r{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=ai(e);this.animation=ri(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=mr(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):Yr(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return nt(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+nt(e)}get time(){return nt(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=tt(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Xr()?(this.animation.timeline=e,Xe):t(this)}},si={anticipate:mt,backInOut:pt,circInOut:_t};function ci(e){return e in si}function li(e){typeof e.ease==`string`&&ci(e.ease)&&(e.ease=si[e.ease])}var ui=10,di=class extends oi{constructor(e){li(e),gr(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new yr({...a,autoplay:!1}),s=Math.max(ui,Ft.now()-this.startTime),c=Ge(0,ui,s-ui);t.setWithVelocity(o.sample(Math.max(0,s-c)).value,o.sample(s).value,c),o.stop()}},fi=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(wn.test(e)||e===`0`)&&!e.startsWith(`url(`));function pi(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function mi(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=fi(i,t),s=fi(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:pi(e)||(n===`spring`||ii(n))&&r}function hi(e){e.duration=0,e.type=`keyframes`}var gi=new Set([`opacity`,`clipPath`,`filter`,`transform`]),_i=Ye(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function vi(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:s,transformTemplate:c}=t.owner.getProps();return _i()&&n&&gi.has(n)&&(n!==`transform`||!c)&&!s&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var yi=40,bi=class extends _r{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Ft.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||qr)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Ft.now(),mi(e,i,a,o)||((Ke.instantAnimations||!s)&&l?.(mr(e,n,t)),e[0]=e[e.length-1],hi(n),n.repeat=0);let u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>yi?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!c&&vi(u),f=u.motionValue?.owner?.current,p=d?new di({...u,element:f}):new yr(u);p.finished.then(()=>{this.notifyFinished()}).catch(Xe),this.pendingTimeline&&=(this.stopTimeline=p.attachTimeline(this.pendingTimeline),void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Kr()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function xi(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Si=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Ci(e){let t=Si.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function wi(e,t,n=1){`${e}`;let[r,i]=Ci(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return qe(e)?parseFloat(e):e}return Bt(i)?wi(i,t,n+1):i}var Ti={type:`spring`,stiffness:500,damping:25,restSpeed:10},Ei=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Di={type:`keyframes`,duration:.8},Oi={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},ki=(e,{keyframes:t})=>t.length>2?Di:Pr.has(e)?e.startsWith(`scale`)?Ei(t[1]):Ti:Oi,Ai=e=>e!==null;function ji(e,{repeat:t,repeatType:n=`loop`},r){let i=e.filter(Ai),a=t&&n!==`loop`&&t%2==1?0:i.length-1;return!a||r===void 0?i[a]:r}function Mi(e,t){return e?.[t]??e?.default??e}function Ni({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:l,...u}){return!!Object.keys(u).length}var Pi=(e,t,n,r={},i,a)=>o=>{let s=Mi(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=tt(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Ni(s)||Object.assign(u,ki(e,u)),u.duration&&=tt(u.duration),u.repeatDelay&&=tt(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(hi(u),u.delay===0&&(d=!0)),(Ke.instantAnimations||Ke.skipAnimations)&&(d=!0,hi(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=ji(u.keyframes,s);if(e!==void 0){R.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new yr(u):new bi(u)};function Fi(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Ii(e,t,n,r){if(typeof t==`function`){let[i,a]=Fi(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Fi(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Li(e,t,n){let r=e.getProps();return Ii(r,t,n===void 0?r.custom:n,e)}var Ri=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Nr]),zi=30,Bi=e=>!isNaN(parseFloat(e)),Vi={current:void 0},Hi=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Ft.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ft.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Bi(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new et);let n=this.events[e].add(t);return e===`change`?()=>{n(),R.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Vi.current&&Vi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>zi)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,zi);return rt(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Ui(e,t){return new Hi(e,t)}var Wi=e=>Array.isArray(e);function Gi(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ui(n))}function Ki(e){return Wi(e)?e[e.length-1]||0:e}function qi(e,t){let{transitionEnd:n={},transition:r={},...i}=Li(e,t)||{};for(let t in i={...i,...n},i)Gi(e,t,Ki(i[t]))}var Ji=e=>!!(e&&e.getVelocity);function Yi(e){return!!(Ji(e)&&e.add)}function Xi(e,t){let n=e.getValue(`willChange`);if(Yi(n))return n.add(t);if(!n&&Ke.WillChange){let n=new Ke.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Zi(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Qi=`data-`+Zi(`framerAppearId`);function $i(e){return e.props[Qi]}function ea({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ta(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);let c=[],l=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||l&&ea(l,t))continue;let o={delay:n,...Mi(a||{},t)},u=r.get();if(u!==void 0&&!r.isAnimating&&!Array.isArray(i)&&i===u&&!o.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){let n=$i(e);if(n){let e=window.MotionHandoffAnimation(n,t,R);e!==null&&(o.startTime=e,d=!0)}}Xi(e,t),r.start(Pi(t,r,i,e.shouldReduceMotion&&Ri.has(t)?{type:!1}:o,e,d));let f=r.animation;f&&c.push(f)}return o&&Promise.all(c).then(()=>{R.update(()=>{o&&qi(e,o)})}),c}function na(e,t,n={}){let r=Li(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(ta(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return ra(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function ra(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(na(c,t,{...o,delay:n+(typeof r==`function`?0:r)+xi(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function ia(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>na(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=na(e,t,n);else{let i=typeof t==`function`?Li(e,t,n.custom):t;r=Promise.all(ta(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var aa={test:e=>e===`auto`,parse:e=>e},oa=e=>t=>t.test(e),sa=[Ut,B,on,an,cn,sn,aa],ca=e=>sa.find(oa(e));function la(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||Je(e)}var ua=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function da(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(qt)||[];if(!r)return e;let i=n.replace(r,``),a=ua.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var fa=/\b([a-z-]*)\(.*?\)/gu,pa={...wn,getAnimatableNone:e=>{let t=e.match(fa);return t?t.map(da).join(` `):e}},ma={...Ut,transform:Math.round},ha={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,top:B,right:B,bottom:B,left:B,inset:B,insetBlock:B,insetBlockStart:B,insetBlockEnd:B,insetInline:B,insetInlineStart:B,insetInlineEnd:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,paddingBlock:B,paddingBlockStart:B,paddingBlockEnd:B,paddingInline:B,paddingInlineStart:B,paddingInlineEnd:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,marginBlock:B,marginBlockStart:B,marginBlockEnd:B,marginInline:B,marginInlineStart:B,marginInlineEnd:B,fontSize:B,backgroundPositionX:B,backgroundPositionY:B,rotate:an,rotateX:an,rotateY:an,rotateZ:an,scale:Gt,scaleX:Gt,scaleY:Gt,scaleZ:Gt,skew:an,skewX:an,skewY:an,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:Wt,originX:ln,originY:ln,originZ:B,zIndex:ma,fillOpacity:Wt,strokeOpacity:Wt,numOctaves:ma},ga={...ha,color:V,backgroundColor:V,outlineColor:V,fill:V,stroke:V,borderColor:V,borderTopColor:V,borderRightColor:V,borderBottomColor:V,borderLeftColor:V,filter:pa,WebkitFilter:pa},_a=e=>ga[e];function va(e,t){let n=_a(e);return n!==pa&&(n=wn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var ya=new Set([`auto`,`none`,`0`]);function ba(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!ya.has(t)&&yn(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=va(n,i)}var xa=class extends qr{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Bt(r))){let i=wi(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Ri.has(n)||e.length!==2)return;let[r,i]=e,a=ca(r),o=ca(i);if(Ht(r)!==Ht(i)&&zr[n]){this.needsMeasurement=!0;return}if(a!==o)if(Fr(a)&&Fr(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else zr[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||la(e[t]))&&n.push(t);n.length&&ba(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=zr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=zr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function Sa(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var Ca=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function wa(e){return L(e)&&`offsetHeight`in e}var{schedule:Ta,cancel:Ea}=At(queueMicrotask,!1),Da={x:!1,y:!1};function Oa(){return Da.x||Da.y}function ka(e){return e===`x`||e===`y`?Da[e]?null:(Da[e]=!0,()=>{Da[e]=!1}):Da.x||Da.y?null:(Da.x=Da.y=!0,()=>{Da.x=Da.y=!1})}function Aa(e,t){let n=Sa(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function ja(e){return!(e.pointerType===`touch`||Oa())}function Ma(e,t,n={}){let[r,i,a]=Aa(e,n),o=e=>{if(!ja(e))return;let{target:n}=e,r=t(n,e);if(typeof r!=`function`||!n)return;let a=e=>{ja(e)&&(r(e),n.removeEventListener(`pointerleave`,a))};n.addEventListener(`pointerleave`,a,i)};return r.forEach(e=>{e.addEventListener(`pointerenter`,o,i)}),a}var Na=(e,t)=>t?e===t?!0:Na(e,t.parentElement):!1,Pa=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Fa=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Ia(e){return Fa.has(e.tagName)||e.isContentEditable===!0}var La=new WeakSet;function Ra(e){return t=>{t.key===`Enter`&&e(t)}}function za(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Ba=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Ra(()=>{if(La.has(n))return;za(n,`down`);let e=Ra(()=>{za(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>za(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Va(e){return Pa(e)&&!Oa()}function Ha(e,t,n={}){let[r,i,a]=Aa(e,n),o=e=>{let r=e.currentTarget;if(!Va(e))return;La.add(r);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),La.has(r)&&La.delete(r),Va(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Na(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),wa(e)&&(e.addEventListener(`focus`,e=>Ba(e,i)),!Ia(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Ua(e){return L(e)&&`ownerSVGElement`in e}function Wa(e){return Ua(e)&&e.tagName===`svg`}var Ga=[...sa,V,wn],Ka=e=>Ga.find(oa(e)),qa=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ja=()=>({x:qa(),y:qa()}),Ya=()=>({min:0,max:0}),W=()=>({x:Ya(),y:Ya()}),Xa={current:null},Za={current:!1},Qa=typeof window<`u`;function $a(){if(Za.current=!0,Qa)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Xa.current=e.matches;e.addEventListener(`change`,t),t()}else Xa.current=!1}var eo=new WeakMap;function to(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function no(e){return typeof e==`string`||Array.isArray(e)}var ro=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],io=[`initial`,...ro];function ao(e){return to(e.animate)||io.some(t=>no(e[t]))}function oo(e){return!!(ao(e)||e.variants)}function so(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Ji(i))e.addValue(r,i);else if(Ji(a))e.addValue(r,Ui(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Ui(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var co=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],lo={};function uo(e){lo=e}function fo(){return lo}var po=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=qr,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Ft.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,R.render(this.render,!1,!0))};let{latestValues:s,renderState:c}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!i,this.isControllingVariants=ao(t),this.isVariantNode=oo(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in u){let t=u[e];s[e]!==void 0&&Ji(t)&&t.set(s[e])}}mount(e){this.current=e,eo.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Za.current||$a(),this.shouldReduceMotion=Xa.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in this.projection&&this.projection.unmount(),jt(this.notifyUpdate),jt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let n=Pr.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&R.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in lo){let t=lo[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):W()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<co.length;t++){let n=co[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=so(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Ui(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(qe(n)||Je(n))?n=parseFloat(n):!Ka(n)&&wn.test(t)&&(n=va(e,t)),this.setBaseTarget(e,Ji(n)?n.get():n)),Ji(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Ii(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Ji(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new et),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Ta.render(this.render)}},mo=class extends po{constructor(){super(...arguments),this.KeyframeResolver=xa}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Ji(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},ho=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function go({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function _o({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function vo(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function yo(e){return e===void 0||e===1}function bo({scale:e,scaleX:t,scaleY:n}){return!yo(e)||!yo(t)||!yo(n)}function xo(e){return bo(e)||So(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function So(e){return Co(e.x)||Co(e.y)}function Co(e){return e&&e!==`0%`}function wo(e,t,n){return n+t*(e-n)}function To(e,t,n,r,i){return i!==void 0&&(e=wo(e,i,r)),wo(e,n,r)+t}function Eo(e,t=0,n=1,r,i){e.min=To(e.min,t,n,r,i),e.max=To(e.max,t,n,r,i)}function Do(e,{x:t,y:n}){Eo(e.x,t.translate,t.scale,t.originPoint),Eo(e.y,n.translate,n.scale,n.originPoint)}var Oo=.999999999999,ko=1.0000000000001;function Ao(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&No(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Do(e,o)),r&&xo(a.latestValues)&&No(e,a.latestValues))}t.x<ko&&t.x>Oo&&(t.x=1),t.y<ko&&t.y>Oo&&(t.y=1)}function jo(e,t){e.min+=t,e.max+=t}function Mo(e,t,n,r,i=.5){Eo(e,t,n,H(e.min,e.max,i),r)}function No(e,t){Mo(e.x,t.x,t.scaleX,t.scale,t.originX),Mo(e.y,t.y,t.scaleY,t.scale,t.originY)}function Po(e,t){return go(vo(e.getBoundingClientRect(),t))}function Fo(e,t,n){let r=Po(e,n),{scroll:i}=t;return i&&(jo(r.x,i.offset.x),jo(r.y,i.offset.y)),r}var Io={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Lo=Nr.length;function Ro(e,t,n){let r=``,i=!0;for(let a=0;a<Lo;a++){let o=Nr[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=Ca(s,ha[o]);if(!c){i=!1;let t=Io[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function zo(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Pr.has(e)){o=!0;continue}else if(Rt(e)){i[e]=n;continue}else{let t=Ca(n,ha[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Ro(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Bo(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Vo(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Ho={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(B.test(e))e=parseFloat(e);else return e;return`${Vo(e,t.target.x)}% ${Vo(e,t.target.y)}%`}},Uo={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=wn.parse(e);if(i.length>5)return r;let a=wn.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=H(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Wo={borderRadius:{...Ho,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:Ho,borderTopRightRadius:Ho,borderBottomLeftRadius:Ho,borderBottomRightRadius:Ho,boxShadow:Uo};function Go(e,{layout:t,layoutId:n}){return Pr.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Wo[e]||e===`opacity`)}function Ko(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Ji(r[t])||i&&Ji(i[t])||Go(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function qo(e){return window.getComputedStyle(e)}var Jo=class extends mo{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Bo}readValueFromInstance(e,t){if(Pr.has(t))return this.projection?.isProjecting?kr(t):jr(e,t);{let n=qo(e),r=(Rt(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Po(e,t)}build(e,t,n){zo(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Ko(e,t,n)}},Yo={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Xo={offset:`strokeDashoffset`,array:`strokeDasharray`};function Zo(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Yo:Xo;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Qo=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function $o(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(zo(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Qo)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Zo(d,i,a,o,!1)}var es=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),ts=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function ns(e,t,n,r){for(let n in Bo(e,t,void 0,r),t.attrs)e.setAttribute(es.has(n)?n:Zi(n),t.attrs[n])}function rs(e,t,n){let r=Ko(e,t,n);for(let n in e)if(Ji(e[n])||Ji(t[n])){let t=Nr.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var is=class extends mo{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=W}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Pr.has(t)){let e=_a(t);return e&&e.default||0}return t=es.has(t)?t:Zi(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return rs(e,t,n)}build(e,t,n){$o(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){ns(e,t,n,r)}mount(e){this.isSVGTag=ts(e.tagName),super.mount(e)}},as=io.length;function os(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&os(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<as;n++){let r=io[n],i=e.props[r];(no(i)||i===!1)&&(t[r]=i)}return t}function ss(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var cs=[...ro].reverse(),ls=ro.length;function us(e){return t=>Promise.all(t.map(({animation:t,options:n})=>ia(e,t,n)))}function ds(e){let t=us(e),n=ms(),r=!0,i=t=>(n,r)=>{let i=Li(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(n){t=n(e)}function o(a){let{props:o}=e,s=os(e.parent)||{},c=[],l=new Set,u={},d=1/0;for(let t=0;t<ls;t++){let f=cs[t],p=n[f],m=o[f]===void 0?s[f]:o[f],h=no(m),g=f===a?p.isActive:null;g===!1&&(d=t);let _=m===s[f]&&m!==o[f]&&h;if(_&&r&&e.manuallyAnimateOnMount&&(_=!1),p.protectedKeys={...u},!p.isActive&&g===null||!m&&!p.prevProp||to(m)||typeof m==`boolean`)continue;let v=fs(p.prevProp,m),y=v||f===a&&p.isActive&&!_&&h||t>d&&h,b=!1,x=Array.isArray(m)?m:[m],S=x.reduce(i(f),{});g===!1&&(S={});let{prevResolvedValues:C={}}=p,w={...C,...S},T=t=>{y=!0,l.has(t)&&(b=!0,l.delete(t)),p.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in w){let t=S[e],n=C[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Wi(t)&&Wi(n)?!ss(t,n):t!==n,r?t==null?l.add(e):T(e):t!==void 0&&l.has(e)?T(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=S,p.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(y=!1);let E=_&&v;y&&(!E||b)&&c.push(...x.map(t=>{let n={type:f};if(typeof t==`string`&&r&&!E&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Li(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=xi(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(l.size){let t={};if(typeof o.initial!=`boolean`){let n=Li(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}l.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),c.push({animation:t})}let f=!!c.length;return r&&(o.initial===!1||o.initial===o.animate)&&!e.manuallyAnimateOnMount&&(f=!1),r=!1,f?t(c):Promise.resolve()}function s(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=o(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=ms()}}}function fs(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!ss(t,e):!1}function ps(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ms(){return{animate:ps(!0),whileInView:ps(),whileHover:ps(),whileTap:ps(),whileDrag:ps(),whileFocus:ps(),exit:ps()}}function hs(e,t){e.min=t.min,e.max=t.max}function gs(e,t){hs(e.x,t.x),hs(e.y,t.y)}function _s(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var vs=1e-4,ys=1-vs,bs=1+vs,xs=.01,Ss=0-xs,Cs=0+xs;function ws(e){return e.max-e.min}function Ts(e,t,n){return Math.abs(e-t)<=n}function Es(e,t,n,r=.5){e.origin=r,e.originPoint=H(t.min,t.max,e.origin),e.scale=ws(n)/ws(t),e.translate=H(n.min,n.max,e.origin)-e.originPoint,(e.scale>=ys&&e.scale<=bs||isNaN(e.scale))&&(e.scale=1),(e.translate>=Ss&&e.translate<=Cs||isNaN(e.translate))&&(e.translate=0)}function Ds(e,t,n,r){Es(e.x,t.x,n.x,r?r.originX:void 0),Es(e.y,t.y,n.y,r?r.originY:void 0)}function Os(e,t,n){e.min=n.min+t.min,e.max=e.min+ws(t)}function ks(e,t,n){Os(e.x,t.x,n.x),Os(e.y,t.y,n.y)}function As(e,t,n){e.min=t.min-n.min,e.max=e.min+ws(t)}function js(e,t,n){As(e.x,t.x,n.x),As(e.y,t.y,n.y)}function Ms(e,t,n,r,i){return e-=t,e=wo(e,1/n,r),i!==void 0&&(e=wo(e,1/i,r)),e}function Ns(e,t=0,n=1,r=.5,i,a=e,o=e){if(on.test(t)&&(t=parseFloat(t),t=H(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=H(a.min,a.max,r);e===a&&(s-=t),e.min=Ms(e.min,t,n,s,i),e.max=Ms(e.max,t,n,s,i)}function Ps(e,t,[n,r,i],a,o){Ns(e,t[n],t[r],t[i],t.scale,a,o)}var Fs=[`x`,`scaleX`,`originX`],Is=[`y`,`scaleY`,`originY`];function Ls(e,t,n,r){Ps(e.x,t,Fs,n?n.x:void 0,r?r.x:void 0),Ps(e.y,t,Is,n?n.y:void 0,r?r.y:void 0)}function Rs(e){return e.translate===0&&e.scale===1}function zs(e){return Rs(e.x)&&Rs(e.y)}function Bs(e,t){return e.min===t.min&&e.max===t.max}function Vs(e,t){return Bs(e.x,t.x)&&Bs(e.y,t.y)}function Hs(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Us(e,t){return Hs(e.x,t.x)&&Hs(e.y,t.y)}function Ws(e){return ws(e.x)/ws(e.y)}function Gs(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Ks(e){return[e(`x`),e(`y`)]}function qs(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Js=[`TopLeft`,`TopRight`,`BottomLeft`,`BottomRight`],Ys=Js.length,Xs=e=>typeof e==`string`?parseFloat(e):e,Zs=e=>typeof e==`number`||B.test(e);function Qs(e,t,n,r,i,a){i?(e.opacity=H(0,n.opacity??1,ec(r)),e.opacityExit=H(t.opacity??1,0,tc(r))):a&&(e.opacity=H(t.opacity??1,n.opacity??1,r));for(let i=0;i<Ys;i++){let a=`border${Js[i]}Radius`,o=$s(t,a),s=$s(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Zs(o)===Zs(s)?(e[a]=Math.max(H(Xs(o),Xs(s),r),0),(on.test(s)||on.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=H(t.rotate||0,n.rotate||0,r))}function $s(e,t){return e[t]===void 0?e.borderRadius:e[t]}var ec=nc(0,.5,gt),tc=nc(.5,.95,Xe);function nc(e,t,n){return r=>r<e?0:r>t?1:n($e(e,t,r))}function rc(e,t,n){let r=Ji(e)?e:Ui(e);return r.start(Pi(``,r,t,n)),r.animation}function ic(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var ac=(e,t)=>e.depth-t.depth,oc=class{constructor(){this.children=[],this.isDirty=!1}add(e){Ue(this.children,e),this.isDirty=!0}remove(e){We(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ac),this.isDirty=!1,this.children.forEach(e)}};function sc(e,t){let n=Ft.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(jt(r),e(a-t))};return R.setup(r,!0),()=>jt(r)}function cc(e){return Ji(e)?e.get():e}var lc=class{constructor(){this.members=[]}add(e){Ue(this.members,e),e.scheduleRender()}remove(e){if(We(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t=this.members.findIndex(t=>e===t);if(t===0)return!1;let n;for(let e=t;e>=0;e--){let t=this.members[e];if(t.isPresent!==!1){n=t;break}}return n?(this.promote(n),!0):!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender();let r=n.options.layoutDependency,i=e.options.layoutDependency;r!==void 0&&i!==void 0&&r===i||(e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0));let{crossfade:a}=e.options;a===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}},uc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},dc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},fc=[``,`X`,`Y`,`Z`],pc=1e3,mc=0;function hc(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function gc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=$i(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,R,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&gc(r)}function _c({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=mc++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Dt.value&&(dc.nodes=dc.calculatedTargetDeltas=dc.calculatedProjections=0),this.nodes.forEach(bc),this.nodes.forEach(Dc),this.nodes.forEach(Oc),this.nodes.forEach(xc),Dt.addProjectionMetrics&&Dt.addProjectionMetrics(dc)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new oc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new et),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Ua(t)&&!Wa(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;R.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=sc(i,250),uc.hasAnimatedSinceResize&&(uc.hasAnimatedSinceResize=!1,this.nodes.forEach(Ec)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Fc,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Us(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Mi(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||Ec(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),jt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(kc),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&gc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Cc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(wc);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Tc),this.nodes.forEach(vc),this.nodes.forEach(yc)):this.nodes.forEach(wc),this.clearAllSnapshots();let e=Ft.now();z.delta=Ge(0,1e3/60,e-z.timestamp),z.timestamp=e,z.isProcessing=!0,Mt.update.process(z),Mt.preRender.process(z),Mt.render.process(z),z.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ta.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Sc),this.sharedNodes.forEach(Ac)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,R.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){R.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ws(this.snapshot.measuredBox.x)&&!ws(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=W(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!zs(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||xo(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),zc(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return W();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Vc))){let{scroll:e}=this.root;e&&(jo(t.x,e.offset.x),jo(t.y,e.offset.y))}return t}removeElementScroll(e){let t=W();if(gs(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&gs(t,e),jo(t.x,i.offset.x),jo(t.y,i.offset.y))}return t}applyTransform(e,t=!1){let n=W();gs(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&No(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),xo(r.latestValues)&&No(n,r.latestValues)}return xo(this.latestValues)&&No(n,this.latestValues),n}removeTransform(e){let t=W();gs(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!xo(n.latestValues))continue;bo(n.latestValues)&&n.updateSnapshot();let r=W();gs(r,n.measurePageBox()),Ls(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return xo(this.latestValues)&&Ls(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==z.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=z.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=W(),this.targetWithTransforms=W()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ks(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):gs(this.target,this.layout.layoutBox),Do(this.target,this.targetDelta)):gs(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Dt.value&&dc.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||bo(this.parent.latestValues)||So(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=W(),this.relativeTargetOrigin=W(),js(this.relativeTargetOrigin,t,n),gs(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===z.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;gs(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Ao(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=W());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(_s(this.prevProjectionDelta.x,this.projectionDelta.x),_s(this.prevProjectionDelta.y,this.projectionDelta.y)),Ds(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Gs(this.projectionDelta.x,this.prevProjectionDelta.x)||!Gs(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Dt.value&&dc.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ja(),this.projectionDelta=Ja(),this.projectionDeltaWithTransform=Ja()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Ja();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=W(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Pc));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;jc(a.x,e.x,n),jc(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(js(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Nc(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Vs(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=W(),gs(d,this.relativeTarget)),s&&(this.animationValues=i,Qs(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(jt(this.pendingAnimation),void 0),this.pendingAnimation=R.update(()=>{uc.hasAnimatedSinceResize=!0,It.layout++,this.motionValue||=Ui(0),this.currentAnimation=rc(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{It.layout--},onComplete:()=>{It.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(pc),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Bc(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||W();let t=ws(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=ws(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}gs(t,n),No(t,i),Ds(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new lc),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&hc(`z`,e,r,this.animationValues);for(let t=0;t<fc.length;t++)hc(`rotate${fc[t]}`,e,r,this.animationValues),hc(`skew${fc[t]}`,e,r,this.animationValues);for(let t in e.render(),r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=cc(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=cc(t?.pointerEvents)||``),this.hasProjected&&!xo(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=qs(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;for(let t in e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit,Wo){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Wo[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?cc(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Cc),this.root.sharedNodes.clear()}}}function vc(e){e.updateLayout()}function yc(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;i===`size`?Ks(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=ws(r);r.min=n[e].min,r.max=r.min+i}):Bc(i,t.layoutBox,n)&&Ks(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=ws(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Ja();Ds(o,n,t.layoutBox);let s=Ja();a?Ds(s,e.applyTransform(r,!0),t.measuredBox):Ds(s,n,t.layoutBox);let c=!zs(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=W();js(o,t.layoutBox,i.layoutBox);let s=W();js(s,n,a.layoutBox),Us(o,s)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function bc(e){Dt.value&&dc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function xc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Sc(e){e.clearSnapshot()}function Cc(e){e.clearMeasurements()}function wc(e){e.isLayoutDirty=!1}function Tc(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Ec(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Dc(e){e.resolveTargetDelta()}function Oc(e){e.calcProjection()}function kc(e){e.resetSkewAndRotation()}function Ac(e){e.removeLeadSnapshot()}function jc(e,t,n){e.translate=H(t.translate,0,n),e.scale=H(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Mc(e,t,n,r){e.min=H(t.min,n.min,r),e.max=H(t.max,n.max,r)}function Nc(e,t,n,r){Mc(e.x,t.x,n.x,r),Mc(e.y,t.y,n.y,r)}function Pc(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Fc={duration:.45,ease:[.4,0,.1,1]},Ic=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Lc=Ic(`applewebkit/`)&&!Ic(`chrome/`)?Math.round:Xe;function Rc(e){e.min=Lc(e.min),e.max=Lc(e.max)}function zc(e){Rc(e.x),Rc(e.y)}function Bc(e,t,n){return e===`position`||e===`preserve-aspect`&&!Ts(Ws(t),Ws(n),.2)}function Vc(e){return e!==e.root&&e.scroll?.wasRoot}var Hc=_c({attachResizeListener:(e,t)=>ic(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Uc={current:void 0},Wc=_c({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Uc.current){let e=new Hc({});e.mount(window),e.setOptions({layoutScroll:!0}),Uc.current=e}return Uc.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Gc=(0,M.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Kc(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function qc(...e){return t=>{let n=!1,r=e.map(e=>{let r=Kc(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Kc(e[t],null)}}}}function Jc(...e){return M.useCallback(qc(...e),e)}var Yc=class extends M.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=wa(e)&&e.offsetWidth||0,r=wa(e)&&e.offsetHeight||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left,i.bottom=r-i.height-i.top}return null}componentDidUpdate(){}render(){return this.props.children}};function Xc({children:e,isPresent:t,anchorX:n,anchorY:r,root:i}){let a=(0,M.useId)(),o=(0,M.useRef)(null),s=(0,M.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=(0,M.useContext)(Gc),l=Jc(o,e.props?.ref??e?.ref);return(0,M.useInsertionEffect)(()=>{let{width:e,height:l,top:u,left:d,right:f,bottom:p}=s.current;if(t||!o.current||!e||!l)return;let m=n===`left`?`left: ${d}`:`right: ${f}`,h=r===`bottom`?`bottom: ${p}`:`top: ${u}`;o.current.dataset.motionPopId=a;let g=document.createElement(`style`);c&&(g.nonce=c);let _=i??document.head;return _.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${m}px !important;
            ${h}px !important;
          }
        `),()=>{_.contains(g)&&_.removeChild(g)}},[t]),(0,P.jsx)(Yc,{isPresent:t,childRef:o,sizeRef:s,children:M.cloneElement(e,{ref:l})})}var Zc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Ve(Qc),d=(0,M.useId)(),f=!0,p=(0,M.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,M.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),M.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),o===`popLayout`&&(e=(0,P.jsx)(Xc,{isPresent:n,anchorX:s,anchorY:c,root:l,children:e})),(0,P.jsx)(He.Provider,{value:p,children:e})};function Qc(){return new Map}function $c(e=!0){let t=(0,M.useContext)(He);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,M.useId)();(0,M.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,M.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var el=e=>e.key||``;function tl(e){let t=[];return M.Children.forEach(e,e=>{(0,M.isValidElement)(e)&&t.push(e)}),t}var nl=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=$c(o),f=(0,M.useMemo)(()=>tl(e),[e]),p=o&&!u?[]:f.map(el),m=(0,M.useRef)(!0),h=(0,M.useRef)(f),g=Ve(()=>new Map),_=(0,M.useRef)(new Set),[v,y]=(0,M.useState)(f),[b,x]=(0,M.useState)(f);I(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=el(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=el(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(tl(e)),y(f),null}let{forceRender:C}=(0,M.useContext)(Be);return(0,P.jsx)(P.Fragment,{children:b.map(e=>{let v=el(e),y=o&&!u?!1:f===b||p.includes(v);return(0,P.jsx)(Zc,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(_.current.add(v),g.has(v))g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},rl=(0,M.createContext)({strict:!1}),il={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},al=!1;function ol(){if(al)return;let e={};for(let t in il)e[t]={isEnabled:e=>il[t].some(t=>!!e[t])};uo(e),al=!0}function sl(){return ol(),fo()}function cl(e){let t=sl();for(let n in e)t[n]={...t[n],...e[n]};uo(t)}var ll=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(`.`));function ul(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||ll.has(e)}var dl=e=>!ul(e);function fl(e){typeof e==`function`&&(dl=t=>t.startsWith(`on`)?!ul(t):e(t))}try{fl((f(),s(T)).default)}catch{}function pl(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||(dl(i)||n===!0&&ul(i)||!t&&!ul(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var ml=(0,M.createContext)({});function hl(e,t){if(ao(e)){let{initial:t,animate:n}=e;return{initial:t===!1||no(t)?t:void 0,animate:no(n)?n:void 0}}return e.inherit===!1?{}:t}function gl(e){let{initial:t,animate:n}=hl(e,(0,M.useContext)(ml));return(0,M.useMemo)(()=>({initial:t,animate:n}),[_l(t),_l(n)])}function _l(e){return Array.isArray(e)?e.join(` `):e}var vl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function yl(e,t,n){for(let r in t)!Ji(t[r])&&!Go(r,n)&&(e[r]=t[r])}function bl({transformTemplate:e},t){return(0,M.useMemo)(()=>{let n=vl();return zo(n,t,e),Object.assign({},n.vars,n.style)},[t])}function xl(e,t){let n=e.style||{},r={};return yl(r,n,e),Object.assign(r,bl(e,t)),r}function Sl(e,t){let n={},r=xl(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Cl=()=>({...vl(),attrs:{}});function wl(e,t,n,r){let i=(0,M.useMemo)(()=>{let n=Cl();return $o(n,t,ts(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};yl(t,e.style,e),i.style={...t,...i.style}}return i}var Tl=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function El(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Tl.indexOf(e)>-1||/[A-Z]/u.test(e))}function Dl(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??El(e)?wl:Sl)(t,r,i,e),c=pl(t,typeof e==`string`,a),l=e===M.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,M.useMemo)(()=>Ji(u)?u.get():u,[u]);return(0,M.createElement)(e,{...l,children:d})}function Ol({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:kl(n,r,i,e),renderState:t()}}function kl(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=cc(a[e]);let{initial:o,animate:s}=e,c=ao(e),l=oo(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!to(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Ii(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Al=e=>(t,n)=>{let r=(0,M.useContext)(ml),i=(0,M.useContext)(He),a=()=>Ol(e,t,r,i);return n?a():Ve(a)},jl=Al({scrapeMotionValuesFromProps:Ko,createRenderState:vl}),Ml=Al({scrapeMotionValuesFromProps:rs,createRenderState:Cl}),Nl=Symbol.for(`motionComponentSymbol`);function Pl(e,t,n){let r=(0,M.useRef)(n);(0,M.useInsertionEffect)(()=>{r.current=n});let i=(0,M.useRef)(null);return(0,M.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var Fl=(0,M.createContext)({});function Il(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Ll(e,t,n,r,i,a){let{visualElement:o}=(0,M.useContext)(ml),s=(0,M.useContext)(rl),c=(0,M.useContext)(He),l=(0,M.useContext)(Gc).reducedMotion,u=(0,M.useRef)(null),d=(0,M.useRef)(!1);r||=s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:l,isSVG:a}),d.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));let f=u.current,p=(0,M.useContext)(Fl);f&&!f.projection&&i&&(f.type===`html`||f.type===`svg`)&&Rl(u.current,n,i,p);let m=(0,M.useRef)(!1);(0,M.useInsertionEffect)(()=>{f&&m.current&&f.update(n,c)});let h=n[Qi],g=(0,M.useRef)(!!h&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return I(()=>{d.current=!0,f&&(m.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),g.current&&f.animationState&&f.animationState.animateChanges())}),(0,M.useEffect)(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(h)}),!1),f.enteringChildren=void 0)}),f}function Rl(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:zl(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Il(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:l})}function zl(e){if(e)return e.options.allowProjection===!1?zl(e.parent):e.projection}function Bl(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&cl(r);let a=n?n===`svg`:El(e),o=a?Ml:jl;function s(n,s){let c,l={...(0,M.useContext)(Gc),...n,layoutId:Vl(n)},{isStatic:u}=l,d=gl(n),f=o(n,u);if(!u&&F){Hl(l,r);let t=Ul(l);c=t.MeasureLayout,d.visualElement=Ll(e,f,l,i,t.ProjectionNode,a)}return(0,P.jsxs)(ml.Provider,{value:d,children:[c&&d.visualElement?(0,P.jsx)(c,{visualElement:d.visualElement,...l}):null,Dl(e,n,Pl(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,M.forwardRef)(s);return c[Nl]=e,c}function Vl({layoutId:e}){let t=(0,M.useContext)(Be).id;return t&&e!==void 0?t+`-`+e:e}function Hl(e,t){(0,M.useContext)(rl).strict}function Ul(e){let{drag:t,layout:n}=sl();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Wl(e,t){if(typeof Proxy>`u`)return Bl;let n=new Map,r=(n,r)=>Bl(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Bl(a,void 0,e,t)),n.get(a))})}var Gl=(e,t)=>t.isSVG??El(e)?new is(t):new Jo(t,{allowProjection:e!==M.Fragment}),Kl=class extends ho{constructor(e){super(e),e.animationState||=ds(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();to(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},ql=0,Jl={animation:{Feature:Kl},exit:{Feature:class extends ho{constructor(){super(...arguments),this.id=ql++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Yl(e){return{point:{x:e.pageX,y:e.pageY}}}var Xl=e=>t=>Pa(t)&&e(t,Yl(t));function Zl(e,t,n,r){return ic(e,t,Xl(n),r)}var Ql=({current:e})=>e?e.ownerDocument.defaultView:null,$l=(e,t)=>Math.abs(e-t);function eu(e,t){let n=$l(e.x,t.x),r=$l(e.y,t.y);return Math.sqrt(n**2+r**2)}var tu=new Set([`auto`,`scroll`]),nu=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=au(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=eu(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=z;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=ru(t,this.transformPagePoint),R.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=au(e.type===`pointercancel`?this.lastMoveEventInfo:ru(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Pa(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=ru(Yl(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=z;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,au(s,this.history)),this.removeListeners=Qe(Zl(this.contextWindow,`pointermove`,this.handlePointerMove),Zl(this.contextWindow,`pointerup`,this.handlePointerUp),Zl(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(tu.has(e.overflowX)||tu.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener(`scroll`,this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),R.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),jt(this.updatePoint)}};function ru(e,t){return t?{point:t(e.point)}:e}function iu(e,t){return{x:e.x-t.x,y:e.y-t.y}}function au({point:e},t){return{point:e,delta:iu(e,su(t)),offset:iu(e,ou(t)),velocity:cu(t,.1)}}function ou(e){return e[0]}function su(e){return e[e.length-1]}function cu(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=su(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>tt(t)));)n--;if(!r)return{x:0,y:0};let a=nt(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function lu(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?H(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?H(n,e,r.max):Math.min(e,n)),e}function uu(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function du(e,{top:t,left:n,bottom:r,right:i}){return{x:uu(e.x,n,i),y:uu(e.y,t,r)}}function fu(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function pu(e,t){return{x:fu(e.x,t.x),y:fu(e.y,t.y)}}function mu(e,t){let n=.5,r=ws(e),i=ws(t);return i>r?n=$e(t.min,t.max-r,e.min):r>i&&(n=$e(e.min,e.max-i,t.min)),Ge(0,1,n)}function hu(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var gu=.35;function _u(e=gu){return e===!1?e=0:e===!0&&(e=gu),{x:vu(e,`left`,`right`),y:vu(e,`top`,`bottom`)}}function vu(e,t,n){return{min:yu(e,t),max:yu(e,n)}}function yu(e,t){return typeof e==`number`?e:e[t]||0}var bu=new WeakMap,xu=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=W(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t?(this.stopAnimation(),this.snapToCursor(Yl(e).point)):this.pauseAnimation()},a=(e,t)=>{this.stopAnimation();let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ka(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ks(e=>{let t=this.getAxisMotionValue(e).get()||0;if(on.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=ws(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&R.postRender(()=>i(e,t)),Xi(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Cu(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&a(e,t)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Ks(e=>this.getAnimationState(e)===`paused`&&this.getAxisMotionValue(e).animation?.play()),{dragSnapToOrigin:l}=this.getProps();this.panSession=new nu(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Ql(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&R.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Su(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=lu(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Il(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=du(n.layoutBox,e):this.constraints=!1,this.elastic=_u(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&Ks(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=hu(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Il(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Fo(n,r.root,this.visualElement.getTransformPagePoint()),a=pu(r.layout.layoutBox,i);if(t){let e=t(_o(a));this.hasMutatedConstraints=!!e,e&&(a=go(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Ks(o=>{if(!Su(o,t,this.currentDirection))return;let c=s&&s[o]||{};a&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Xi(this.visualElement,e),n.start(Pi(e,n,0,t,this.visualElement,!1))}stopAnimation(){Ks(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Ks(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Ks(t=>{let{drag:n}=this.getProps();if(!Su(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-H(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Il(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Ks(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=mu({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Ks(t=>{if(!Su(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(H(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;bu.set(this.visualElement,this);let e=this.visualElement.current,t=Zl(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Ia(i);n&&r&&!a&&this.start(t)}),n=()=>{let{dragConstraints:e}=this.getProps();Il(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener(`measure`,n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),R.read(n);let a=ic(window,`resize`,()=>this.scalePositionWithinConstraints()),o=r.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Ks(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{a(),t(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=gu,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Su(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Cu(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var wu=class extends ho{constructor(e){super(e),this.removeGroupControls=Xe,this.removeListeners=Xe,this.controls=new xu(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Xe}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Tu=e=>(t,n)=>{e&&R.postRender(()=>e(t,n))},Eu=class extends ho{constructor(){super(...arguments),this.removePointerDownListener=Xe}onPointerDown(e){this.session=new nu(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ql(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Tu(e),onStart:Tu(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&R.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Zl(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Du=!1,Ou=class extends M.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Du&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),uc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Du=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||R.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Ta.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Du=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function ku(e){let[t,n]=$c(),r=(0,M.useContext)(Be);return(0,P.jsx)(Ou,{...e,layoutGroup:r,switchLayoutGroup:(0,M.useContext)(Fl),isPresent:t,safeToRemove:n})}var Au={pan:{Feature:Eu},drag:{Feature:wu,ProjectionNode:Wc,MeasureLayout:ku}};function ju(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&R.postRender(()=>i(t,Yl(t)))}var Mu=class extends ho{mount(){let{current:e}=this.node;e&&(this.unmount=Ma(e,(e,t)=>(ju(this.node,t,`Start`),e=>ju(this.node,e,`End`))))}unmount(){}},Nu=class extends ho{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Qe(ic(this.node.current,`focus`,()=>this.onFocus()),ic(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Pu(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&R.postRender(()=>i(t,Yl(t)))}var Fu=class extends ho{mount(){let{current:e}=this.node;e&&(this.unmount=Ha(e,(e,t)=>(Pu(this.node,t,`Start`),(e,{success:t})=>Pu(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}},Iu=new WeakMap,Lu=new WeakMap,Ru=e=>{let t=Iu.get(e.target);t&&t(e)},zu=e=>{e.forEach(Ru)};function Bu({root:e,...t}){let n=e||document;Lu.has(n)||Lu.set(n,{});let r=Lu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(zu,{root:e,...t})),r[i]}function Vu(e,t,n){let r=Bu(t);return Iu.set(e,n),r.observe(e),()=>{Iu.delete(e),r.unobserve(e)}}var Hu={some:0,all:1},Uu=class extends ho{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Hu[r]};return Vu(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Wu(e,t))&&this.startObserver()}unmount(){}};function Wu({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Gu={inView:{Feature:Uu},tap:{Feature:Fu},focus:{Feature:Nu},hover:{Feature:Mu}},Ku={layout:{ProjectionNode:Wc,MeasureLayout:ku}},qu=Wl({...Jl,...Gu,...Au,...Ku},Gl),Ju=k(`anchor`,[[`path`,{d:`M12 6v16`,key:`nqf5sj`}],[`path`,{d:`m19 13 2-1a9 9 0 0 1-18 0l2 1`,key:`y7qv08`}],[`path`,{d:`M9 11h6`,key:`1fldmi`}],[`circle`,{cx:`12`,cy:`4`,r:`2`,key:`muu5ef`}]]),Yu=k(`aperture`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m14.31 8 5.74 9.94`,key:`1y6ab4`}],[`path`,{d:`M9.69 8h11.48`,key:`1wxppr`}],[`path`,{d:`m7.38 12 5.74-9.94`,key:`1grp0k`}],[`path`,{d:`M9.69 16 3.95 6.06`,key:`libnyf`}],[`path`,{d:`M14.31 16H2.83`,key:`x5fava`}],[`path`,{d:`m16.62 12-5.74 9.94`,key:`1vwawt`}]]),Xu=k(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),Zu=k(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),Qu=k(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),$u=k(`axe`,[[`path`,{d:`m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9`,key:`5z9253`}],[`path`,{d:`M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z`,key:`19zklq`}]]),ed=k(`battery-charging`,[[`path`,{d:`m11 7-3 5h4l-3 5`,key:`b4a64w`}],[`path`,{d:`M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935`,key:`lre1cr`}],[`path`,{d:`M22 14v-4`,key:`14q9d5`}],[`path`,{d:`M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936`,key:`13q5k0`}]]),td=k(`bone`,[[`path`,{d:`M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z`,key:`w610uw`}]]),nd=k(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),rd=k(`book`,[[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),id=k(`bow-arrow`,[[`path`,{d:`M17 3h4v4`,key:`19p9u1`}],[`path`,{d:`M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17`,key:`12t3w9`}],[`path`,{d:`M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05`,key:`ogng5l`}],[`path`,{d:`M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z`,key:`8v3fy2`}],[`path`,{d:`M9.707 14.293 21 3`,key:`ydm3bn`}]]),ad=k(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),od=k(`carrot`,[[`path`,{d:`M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46`,key:`rfqxbe`}],[`path`,{d:`M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z`,key:`6b25w4`}],[`path`,{d:`M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z`,key:`fn65lo`}]]),sd=k(`castle`,[[`path`,{d:`M10 5V3`,key:`1y54qe`}],[`path`,{d:`M14 5V3`,key:`m6isi`}],[`path`,{d:`M15 21v-3a3 3 0 0 0-6 0v3`,key:`lbp5hj`}],[`path`,{d:`M18 3v8`,key:`2ollhf`}],[`path`,{d:`M18 5H6`,key:`98imr9`}],[`path`,{d:`M22 11H2`,key:`1lmjae`}],[`path`,{d:`M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9`,key:`1rly83`}],[`path`,{d:`M6 3v8`,key:`csox7g`}]]),cd=k(`circle-arrow-right`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m12 16 4-4-4-4`,key:`1i9zcv`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}]]),ld=k(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),ud=k(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),dd=k(`clock`,[[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),fd=k(`cloud-lightning`,[[`path`,{d:`M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973`,key:`1cez44`}],[`path`,{d:`m13 12-3 5h4l-3 5`,key:`1t22er`}]]),pd=k(`coins`,[[`circle`,{cx:`8`,cy:`8`,r:`6`,key:`3yglwk`}],[`path`,{d:`M18.09 10.37A6 6 0 1 1 10.34 18`,key:`t5s6rm`}],[`path`,{d:`M7 6h1v4`,key:`1obek4`}],[`path`,{d:`m16.71 13.88.7.71-2.82 2.82`,key:`1rbuyh`}]]),md=k(`compass`,[[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,key:`9ktpf1`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),hd=k(`cross`,[[`path`,{d:`M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z`,key:`1xbrqy`}]]),gd=k(`dollar-sign`,[[`line`,{x1:`12`,x2:`12`,y1:`2`,y2:`22`,key:`7eqyqh`}],[`path`,{d:`M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6`,key:`1b0p4s`}]]),_d=k(`drama`,[[`path`,{d:`M10 11h.01`,key:`d2at3l`}],[`path`,{d:`M14 6h.01`,key:`k028ub`}],[`path`,{d:`M18 6h.01`,key:`1v4wsw`}],[`path`,{d:`M6.5 13.1h.01`,key:`1748ia`}],[`path`,{d:`M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3`,key:`172yzv`}],[`path`,{d:`M17.4 9.9c-.8.8-2 .8-2.8 0`,key:`1obv0w`}],[`path`,{d:`M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7`,key:`rqjl8i`}],[`path`,{d:`M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4`,key:`1mr6wy`}]]),vd=k(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),yd=k(`fan`,[[`path`,{d:`M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z`,key:`484a7f`}],[`path`,{d:`M12 12v.01`,key:`u5ubse`}]]),bd=k(`feather`,[[`path`,{d:`M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z`,key:`18jl4k`}],[`path`,{d:`M16 8 2 22`,key:`vp34q`}],[`path`,{d:`M17.5 15H9`,key:`1oz8nu`}]]),xd=k(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),Sd=k(`flower`,[[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}],[`path`,{d:`M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5`,key:`14wa3c`}],[`path`,{d:`M12 7.5V9`,key:`1oy5b0`}],[`path`,{d:`M7.5 12H9`,key:`eltsq1`}],[`path`,{d:`M16.5 12H15`,key:`vk5kw4`}],[`path`,{d:`M12 16.5V15`,key:`k7eayi`}],[`path`,{d:`m8 8 1.88 1.88`,key:`nxy4qf`}],[`path`,{d:`M14.12 9.88 16 8`,key:`1lst6k`}],[`path`,{d:`m8 16 1.88-1.88`,key:`h2eex1`}],[`path`,{d:`M14.12 14.12 16 16`,key:`uqkrx3`}]]),Cd=k(`heart-crack`,[[`path`,{d:`M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15`,key:`idzbju`}],[`path`,{d:`M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z`,key:`1su70f`}]]),wd=k(`heart-plus`,[[`path`,{d:`m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49`,key:`wg5jx`}],[`path`,{d:`M15 15h6`,key:`1u4692`}],[`path`,{d:`M18 12v6`,key:`1houu1`}]]),Td=k(`heart`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]),Ed=k(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),Dd=k(`minimize-2`,[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]),Od=k(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),kd=k(`music`,[[`path`,{d:`M9 18V5l12-2v13`,key:`1jmyc2`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}],[`circle`,{cx:`18`,cy:`16`,r:`3`,key:`1hluhg`}]]),Ad=k(`octagon-x`,[[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,key:`2d38gg`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),jd=k(`pickaxe`,[[`path`,{d:`m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999`,key:`1lw9ds`}],[`path`,{d:`M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024`,key:`ffj4ej`}],[`path`,{d:`M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069`,key:`8tj4zw`}],[`path`,{d:`M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z`,key:`hh6h97`}]]),Md=k(`shell`,[[`path`,{d:`M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44`,key:`1cn552`}]]),Nd=k(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),Pd=k(`skull`,[[`path`,{d:`m12.5 17-.5-1-.5 1h1z`,key:`3me087`}],[`path`,{d:`M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z`,key:`1o5pge`}],[`circle`,{cx:`15`,cy:`12`,r:`1`,key:`1tmaij`}],[`circle`,{cx:`9`,cy:`12`,r:`1`,key:`1vctgf`}]]),Fd=k(`snowflake`,[[`path`,{d:`m10 20-1.25-2.5L6 18`,key:`18frcb`}],[`path`,{d:`M10 4 8.75 6.5 6 6`,key:`7mghy3`}],[`path`,{d:`m14 20 1.25-2.5L18 18`,key:`1chtki`}],[`path`,{d:`m14 4 1.25 2.5L18 6`,key:`1b4wsy`}],[`path`,{d:`m17 21-3-6h-4`,key:`15hhxa`}],[`path`,{d:`m17 3-3 6 1.5 3`,key:`11697g`}],[`path`,{d:`M2 12h6.5L10 9`,key:`kv9z4n`}],[`path`,{d:`m20 10-1.5 2 1.5 2`,key:`1swlpi`}],[`path`,{d:`M22 12h-6.5L14 15`,key:`1mxi28`}],[`path`,{d:`m4 10 1.5 2L4 14`,key:`k9enpj`}],[`path`,{d:`m7 21 3-6-1.5-3`,key:`j8hb9u`}],[`path`,{d:`m7 3 3 6h4`,key:`1otusx`}]]),Id=k(`squirrel`,[[`path`,{d:`M15.236 22a3 3 0 0 0-2.2-5`,key:`21bitc`}],[`path`,{d:`M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4`,key:`oh0fg0`}],[`path`,{d:`M18 13h.01`,key:`9veqaj`}],[`path`,{d:`M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10`,key:`980v8a`}]]),Ld=k(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),Rd=k(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),zd=k(`sword`,[[`path`,{d:`m11 19-6-6`,key:`s7kpr`}],[`path`,{d:`m5 21-2-2`,key:`1kw20b`}],[`path`,{d:`m8 16-4 4`,key:`1oqv8h`}],[`path`,{d:`M9.5 17.5 21 6V3h-3L6.5 14.5`,key:`pkxemp`}]]),Bd=k(`swords`,[[`polyline`,{points:`14.5 17.5 3 6 3 3 6 3 17.5 14.5`,key:`1hfsw2`}],[`line`,{x1:`13`,x2:`19`,y1:`19`,y2:`13`,key:`1vrmhu`}],[`line`,{x1:`16`,x2:`20`,y1:`16`,y2:`20`,key:`1bron3`}],[`line`,{x1:`19`,x2:`21`,y1:`21`,y2:`19`,key:`13pww6`}],[`polyline`,{points:`14.5 6.5 18 3 21 3 21 6 17.5 9.5`,key:`hbey2j`}],[`line`,{x1:`5`,x2:`9`,y1:`14`,y2:`18`,key:`1hf58s`}],[`line`,{x1:`7`,x2:`4`,y1:`17`,y2:`20`,key:`pidxm4`}],[`line`,{x1:`3`,x2:`5`,y1:`19`,y2:`21`,key:`1pehsh`}]]),Vd=k(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),Hd=k(`test-tube-diagonal`,[[`path`,{d:`M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3`,key:`1ub6xw`}],[`path`,{d:`m16 2 6 6`,key:`1gw87d`}],[`path`,{d:`M12 16H4`,key:`1cjfip`}]]),Ud=k(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),Wd=k(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),Gd=k(`wand`,[[`path`,{d:`M15 4V2`,key:`z1p9b7`}],[`path`,{d:`M15 16v-2`,key:`px0unx`}],[`path`,{d:`M8 9h2`,key:`1g203m`}],[`path`,{d:`M20 9h2`,key:`19tzq7`}],[`path`,{d:`M17.8 11.8 19 13`,key:`yihg8r`}],[`path`,{d:`M15 9h.01`,key:`x1ddxp`}],[`path`,{d:`M17.8 6.2 19 5`,key:`fd4us0`}],[`path`,{d:`m3 21 9-9`,key:`1jfql5`}],[`path`,{d:`M12.2 6.2 11 5`,key:`i3da3b`}]]),Kd=k(`wind`,[[`path`,{d:`M12.8 19.6A2 2 0 1 0 14 16H2`,key:`148xed`}],[`path`,{d:`M17.5 8a2.5 2.5 0 1 1 2 4H2`,key:`1u4tom`}],[`path`,{d:`M9.8 4.4A2 2 0 1 1 11 8H2`,key:`75valh`}]]),qd=k(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]);function Jd(){return Jd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jd.apply(null,arguments)}var Yd=!1;function Xd(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Zd(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var Qd=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!Yd:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(Zd(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=Xd(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),$d=`-ms-`,ef=`-moz-`,G=`-webkit-`,tf=`comm`,nf=`rule`,rf=`decl`,af=`@import`,of=`@keyframes`,sf=`@layer`,cf=Math.abs,lf=String.fromCharCode,uf=Object.assign;function df(e,t){return hf(e,0)^45?(((t<<2^hf(e,0))<<2^hf(e,1))<<2^hf(e,2))<<2^hf(e,3):0}function ff(e){return e.trim()}function pf(e,t){return(e=t.exec(e))?e[0]:e}function K(e,t,n){return e.replace(t,n)}function mf(e,t){return e.indexOf(t)}function hf(e,t){return e.charCodeAt(t)|0}function gf(e,t,n){return e.slice(t,n)}function _f(e){return e.length}function vf(e){return e.length}function yf(e,t){return t.push(e),e}function bf(e,t){return e.map(t).join(``)}var xf=1,Sf=1,Cf=0,wf=0,q=0,Tf=``;function Ef(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:xf,column:Sf,length:o,return:``}}function Df(e,t){return uf(Ef(``,null,null,``,null,null,0),e,{length:-e.length},t)}function Of(){return q}function kf(){return q=wf>0?hf(Tf,--wf):0,Sf--,q===10&&(Sf=1,xf--),q}function Af(){return q=wf<Cf?hf(Tf,wf++):0,Sf++,q===10&&(Sf=1,xf++),q}function jf(){return hf(Tf,wf)}function Mf(){return wf}function Nf(e,t){return gf(Tf,e,t)}function Pf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ff(e){return xf=Sf=1,Cf=_f(Tf=e),wf=0,[]}function If(e){return Tf=``,e}function Lf(e){return ff(Nf(wf-1,Bf(e===91?e+2:e===40?e+1:e)))}function Rf(e){for(;(q=jf())&&q<33;)Af();return Pf(e)>2||Pf(q)>3?``:` `}function zf(e,t){for(;--t&&Af()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Nf(e,Mf()+(t<6&&jf()==32&&Af()==32))}function Bf(e){for(;Af();)switch(q){case e:return wf;case 34:case 39:e!==34&&e!==39&&Bf(q);break;case 40:e===41&&Bf(e);break;case 92:Af();break}return wf}function Vf(e,t){for(;Af()&&e+q!==57&&!(e+q===84&&jf()===47););return`/*`+Nf(t,wf-1)+`*`+lf(e===47?e:Af())}function Hf(e){for(;!Pf(jf());)Af();return Nf(e,wf)}function Uf(e){return If(Wf(``,null,null,null,[``],e=Ff(e),0,[0],e))}function Wf(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Af()){case 40:if(m!=108&&hf(C,d-1)==58){mf(C+=K(Lf(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Lf(v);break;case 9:case 10:case 13:case 32:C+=Rf(m);break;case 92:C+=zf(Mf()-1,7);continue;case 47:switch(jf()){case 42:case 47:yf(Kf(Vf(Af(),Mf()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=_f(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=K(C,/\f/g,``)),p>0&&_f(C)-d&&yf(p>32?qf(C+`;`,r,n,d-1):qf(K(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(yf(S=Gf(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)Wf(C,t,S,S,b,a,d,s,x);else switch(f===99&&hf(C,3)===110?100:f){case 100:case 108:case 109:case 115:Wf(e,S,S,r&&yf(Gf(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:Wf(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+_f(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&kf()==125)continue}switch(C+=lf(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(_f(C)-1)*_,_=1;break;case 64:jf()===45&&(C+=Lf(Af())),f=jf(),u=d=_f(y=C+=Hf(Mf())),v++;break;case 45:m===45&&_f(C)==2&&(h=0)}}return a}function Gf(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=vf(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=gf(e,d+1,d=cf(h=o[m])),y=e;_<p;++_)(y=ff(h>0?f[_]+` `+v:K(v,/&\f/g,f[_])))&&(c[g++]=y);return Ef(e,t,n,i===0?nf:s,c,l,u)}function Kf(e,t,n){return Ef(e,t,n,tf,lf(Of()),gf(e,2,-2),0)}function qf(e,t,n,r){return Ef(e,t,n,rf,gf(e,0,r),gf(e,r+1,-1),r)}function Jf(e,t){for(var n=``,r=vf(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function Yf(e,t,n,r){switch(e.type){case sf:if(e.children.length)break;case af:case rf:return e.return=e.return||e.value;case tf:return``;case of:return e.return=e.value+`{`+Jf(e.children,r)+`}`;case nf:e.value=e.props.join(`,`)}return _f(n=Jf(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Xf(e){var t=vf(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Zf(e){return function(t){t.root||(t=t.return)&&e(t)}}var Qf=function(e,t,n){for(var r=0,i=0;r=i,i=jf(),r===38&&i===12&&(t[n]=1),!Pf(i);)Af();return Nf(e,wf)},$f=function(e,t){var n=-1,r=44;do switch(Pf(r)){case 0:r===38&&jf()===12&&(t[n]=1),e[n]+=Qf(wf-1,t,n);break;case 2:e[n]+=Lf(r);break;case 4:if(r===44){e[++n]=jf()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=lf(r)}while(r=Af());return e},ep=function(e,t){return If($f(Ff(e),t))},tp=new WeakMap,np=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!tp.get(n))&&!r){tp.set(e,!0);for(var i=[],a=ep(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},rp=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function ip(e,t){switch(df(e,t)){case 5103:return G+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+ef+e+$d+e+e;case 6828:case 4268:return G+e+$d+e+e;case 6165:return G+e+$d+`flex-`+e+e;case 5187:return G+e+K(e,/(\w+).+(:[^]+)/,G+`box-$1$2`+$d+`flex-$1$2`)+e;case 5443:return G+e+$d+`flex-item-`+K(e,/flex-|-self/,``)+e;case 4675:return G+e+$d+`flex-line-pack`+K(e,/align-content|flex-|-self/,``)+e;case 5548:return G+e+$d+K(e,`shrink`,`negative`)+e;case 5292:return G+e+$d+K(e,`basis`,`preferred-size`)+e;case 6060:return G+`box-`+K(e,`-grow`,``)+G+e+$d+K(e,`grow`,`positive`)+e;case 4554:return G+K(e,/([^-])(transform)/g,`$1`+G+`$2`)+e;case 6187:return K(K(K(e,/(zoom-|grab)/,G+`$1`),/(image-set)/,G+`$1`),e,``)+e;case 5495:case 3959:return K(e,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return K(K(e,/(.+:)(flex-)?(.*)/,G+`box-pack:$3`+$d+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+G+e+e;case 4095:case 3583:case 4068:case 2532:return K(e,/(.+)-inline(.+)/,G+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_f(e)-1-t>6)switch(hf(e,t+1)){case 109:if(hf(e,t+4)!==45)break;case 102:return K(e,/(.+:)(.+)-([^]+)/,`$1`+G+`$2-$3$1`+ef+(hf(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~mf(e,`stretch`)?ip(K(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(hf(e,t+1)!==115)break;case 6444:switch(hf(e,_f(e)-3-(~mf(e,`!important`)&&10))){case 107:return K(e,`:`,`:`+G)+e;case 101:return K(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+G+(hf(e,14)===45?`inline-`:``)+`box$3$1`+G+`$2$3$1`+$d+`$2box$3`)+e}break;case 5936:switch(hf(e,t+11)){case 114:return G+e+$d+K(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return G+e+$d+K(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return G+e+$d+K(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return G+e+$d+e+e}return e}var ap=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case rf:e.return=ip(e.value,e.length);break;case of:return Jf([Df(e,{value:K(e.value,`@`,`@`+G)})],r);case nf:if(e.length)return bf(e.props,function(t){switch(pf(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return Jf([Df(e,{props:[K(t,/:(read-\w+)/,`:`+ef+`$1`)]})],r);case`::placeholder`:return Jf([Df(e,{props:[K(t,/:(plac\w+)/,`:`+G+`input-$1`)]}),Df(e,{props:[K(t,/:(plac\w+)/,`:`+ef+`$1`)]}),Df(e,{props:[K(t,/:(plac\w+)/,$d+`input-$1`)]})],r)}return``})}}],op=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||ap,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[np,rp],l,u=[Yf,Zf(function(e){l.insert(e)})],d=Xf(c.concat(r,u)),f=function(e){return Jf(Uf(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new Qd({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},sp=!0;function cp(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var lp=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||sp===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},up=function(e,t,n){lp(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function dp(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}ee();var fp=!1,pp=/[A-Z]|^ms/g,mp=/_EMO_([^_]+?)_([^]*?)_EMO_/g,hp=function(e){return e.charCodeAt(1)===45},gp=function(e){return e!=null&&typeof e!=`boolean`},_p=p(function(e){return hp(e)?e:e.replace(pp,`-$&`).toLowerCase()}),vp=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(mp,function(e,t,n){return Cp={name:t,styles:n,next:Cp},t})}return S[e]!==1&&!hp(e)&&typeof t==`number`&&t!==0?t+`px`:t},yp=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;function bp(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return Cp={name:i.name,styles:i.styles,next:Cp},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Cp={name:o.name,styles:o.styles,next:Cp},o=o.next;return a.styles+`;`}return xp(e,t,n);case`function`:if(e!==void 0){var s=Cp,c=n(e);return Cp=s,bp(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function xp(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=bp(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:gp(s)&&(r+=_p(a)+`:`+vp(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&fp)throw Error(yp);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)gp(o[c])&&(r+=_p(a)+`:`+vp(a,o[c])+`;`);else{var l=bp(e,t,o);switch(a){case`animation`:case`animationName`:r+=_p(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}var Sp=/label:\s*([^\s;{]+)\s*(;|$)/g,Cp;function wp(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Cp=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=bp(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=bp(n,t,e[o]),r&&(i+=a[o]);Sp.lastIndex=0;for(var s=``,c;(c=Sp.exec(i))!==null;)s+=`-`+c[1];return{name:dp(i)+s,styles:i,next:Cp}}var Tp=function(e){return e()},Ep=M.useInsertionEffect?M.useInsertionEffect:!1,Dp=Ep||Tp;Ep||M.useLayoutEffect;var Op=M.createContext(typeof HTMLElement<`u`?op({key:`css`}):null);Op.Provider;var kp=function(e){return(0,M.forwardRef)(function(t,n){return e(t,(0,M.useContext)(Op),n)})},Ap=M.createContext({});({}).hasOwnProperty,f();var jp=!1,Mp=y,Np=function(e){return e!==`theme`},Pp=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?Mp:Np},Fp=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},Ip=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return lp(t,n,r),Dp(function(){return up(t,n,r)}),null},Lp=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=Fp(t,n,r),c=s||Pp(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=kp(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=M.useContext(Ap)}typeof e.className==`string`?a=cp(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=wp(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?Pp(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),M.createElement(M.Fragment,null,M.createElement(Ip,{cache:t,serialized:m,isStringTag:typeof r==`string`}),M.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,`toString`,{value:function(){return o===void 0&&jp?`NO_COMPONENT_SELECTOR`:`.`+o}}),h.withComponent=function(t,r){return e(t,Jd({},n,r,{shouldForwardProp:Fp(h,r,!0)})).apply(void 0,d)},h}},Rp=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),zp=Lp.bind(null);Rp.forEach(function(e){zp[e]=zp(e)});const Bp=zp.div({position:`relative`,display:`flex`,height:`100vh`,flexDirection:`column`,backgroundColor:`transparent`}),Vp=x.div`
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
`,Hp=x(qu.div)`
  ${{position:`fixed`,bottom:`0`,left:`0`,top:`0`,zIndex:`1000`,display:`flex`,width:`150px`,flexDirection:`column`,borderTopRightRadius:`0.5rem`,borderBottomRightRadius:`0.5rem`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}}
  background-color: ${e=>b(e.theme.BACKGROUND,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
`,Up=x.div`
  ${{flex:`none`,padding:`1.25rem`}}
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  background-color: ${e=>e.theme.OFFSET};
`,Wp=x.h2`
  ${{margin:`0`,marginBottom:`0.5rem`,fontSize:`1.125rem`}}
  color: ${e=>e.theme.PRIMARY};
`,Gp=x.p`
  ${{margin:`0`,fontSize:`0.875rem`}}
  color: ${e=>b(e.theme.PRIMARY,.7)};
`,Kp=zp.div({flex:`1 1 0%`}),qp=x.nav`
  ${{flex:`none`,paddingLeft:`0`,paddingRight:`0`,paddingBottom:`50px`,paddingTop:`0.5rem`}}
  border-top: 1px solid ${e=>e.theme.BORDER};
`,Jp=x.button`
  ${{width:`100%`,cursor:`pointer`,borderStyle:`none`,paddingLeft:`1.25rem`,paddingRight:`1.25rem`,paddingTop:`0.75rem`,paddingBottom:`0.75rem`,textAlign:`left`,fontSize:`15px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isActive?e.theme.OFFSET:`transparent`};
  color: ${e=>e.theme.PRIMARY};
  font-weight: ${e=>e.$isActive?600:400};
  
  &:hover {
    background-color: ${e=>b(e.theme.OFFSET,.5)};
  }
`,Yp=zp.div({position:`fixed`,bottom:`0`,left:`0`,right:`0`,top:`0`,zIndex:`999`,backgroundColor:`rgba(0, 0, 0, 0.6)`}),Xp=zp.div({position:`fixed`,bottom:`2px`,left:`2px`,zIndex:`1000`,display:`flex`,height:`3rem`,width:`3rem`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}),Zp=x.button`
  ${{position:`fixed`,zIndex:`1001`,display:`flex`,height:`2.5rem`,width:`2.5rem`,cursor:`pointer`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-shadow":`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,"--tw-shadow-colored":`0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color)`,boxShadow:`var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)`}}
  background-color: ${e=>b(e.theme.BACKGROUND,.75)};
  border: 2px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
`,Qp=({isOpen:e,currentPage:t,onToggle:n,onNavigate:r,canAccessInitiativeList:i=!0})=>{let{theme:a}=ze(),o=N(e=>e.playerData),s=String(o?.role||``).toUpperCase()===`GM`;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(nl,{children:e&&(0,P.jsxs)(Hp,{theme:a,initial:{x:-300},animate:{x:0},exit:{x:-300},transition:{type:`tween`,duration:.3},style:{boxShadow:`4px 0 12px rgba(0, 0, 0, 0.15)`},children:[(0,P.jsxs)(Up,{theme:a,children:[(0,P.jsx)(Wp,{theme:a,children:`Forge!`}),(0,P.jsx)(Gp,{theme:a,children:`Alpha Testing!`})]}),(0,P.jsx)(Kp,{}),(0,P.jsxs)(qp,{theme:a,children:[i&&(0,P.jsx)(Jp,{theme:a,$isActive:t===`ForgeMain`,onClick:()=>r(`ForgeMain`),children:`Main`}),(0,P.jsx)(Jp,{theme:a,$isActive:t===`Party`,onClick:()=>r(`Party`),children:`Party`}),(0,P.jsx)(Jp,{theme:a,$isActive:t===`ChatLog`,onClick:()=>r(`ChatLog`),children:`System Log`}),s&&(0,P.jsx)(Jp,{theme:a,$isActive:t===`System`,onClick:()=>r(`System`),children:`System`}),s&&(0,P.jsx)(Jp,{theme:a,$isActive:t===`Settings`,onClick:()=>r(`Settings`),children:`Settings`})]})]})}),e&&(0,P.jsx)(Yp,{onClick:n}),(0,P.jsx)(Xp,{children:(0,P.jsx)(Zp,{theme:a,onClick:n,children:(0,P.jsx)(de,{size:24})})})]})},$p=x.div`
  padding: 20px;
  color: ${e=>e.theme.PRIMARY};
  min-height: 100vh;
`,em=x.h1`
  color: ${e=>e.theme.PRIMARY};
  background-color: ${e=>e.theme.OFFSET};
  padding: 2px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  font-variant: small-caps;
`,tm=x.div`
  background-color: ${e=>b(e.theme.BACKGROUND,.3)};
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
`;const nm=x.button`
  background-color: ${e=>b(e.theme.OFFSET,e.variant===`secondary`?.5:.75)};
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
    background-color: ${e=>b(e.theme.OFFSET,.9)};
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
`,rm=x.input`
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px 8px;
  font-size: 14px;
  width: 100%;
  
  &::placeholder {
    color: ${e=>b(e.theme.PRIMARY,.5)};
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
    color: ${e=>b(e.theme.PRIMARY,.5)};
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
  background-color: ${e=>b(e.theme.OFFSET,.75)};
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
    background-color: ${e=>b(e.theme.OFFSET,.2)};
  }
`;var im=x.button`
  ${{position:`relative`,display:`inline-flex`,height:`1.5rem`,width:`3rem`,alignItems:`center`,borderRadius:`9999px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isOn?b(e.theme.OFFSET,.8):b(e.theme.BORDER,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${e=>b(e.theme.OFFSET,.3)};
  }
  
  &::after {
    content: '';
    ${{display:`inline-block`,height:`1rem`,width:`1rem`,transform:`translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,borderRadius:`9999px`,transitionProperty:`transform`}}
    background-color: ${e=>e.theme.PRIMARY};
    ${e=>e.$isOn?`transform: translateX(1.375rem);`:`transform: translateX(0.25rem);`}
  }
`;const J=({label:e,isOn:t,onChange:n})=>{let{theme:r}=ze();return(0,P.jsx)(im,{theme:r,$isOn:t,onClick:()=>{let r=!t;O.log(`${e}: ${r}`),n(r)},role:`switch`,"aria-checked":t,"aria-label":e})};var am=x.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,om=x.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${e=>e.theme.BACKGROUND};
  border: 3px solid ${e=>e.theme.BORDER};
  border-radius: 8px;
  padding: 25px;
  z-index: 10000;
  min-width: ${e=>e.$minWidth||`200px`};
  max-width: ${e=>e.$maxWidth||`500px`};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
`,sm=x.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 15px 0;
  font-size: 18px;
`,cm=x.div`
  margin: 0 0 20px 0;
`,lm=x.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;const um=({isOpen:e,title:t,onClose:n,children:r,actions:i,closeOnOverlayClick:a=!0,minWidth:o,maxWidth:s})=>{let{theme:c}=ze();return e?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(am,{onClick:a?n:void 0}),(0,P.jsxs)(om,{theme:c,$minWidth:o,$maxWidth:s,onClick:e=>e.stopPropagation(),children:[t&&(0,P.jsx)(sm,{theme:c,children:t}),(0,P.jsx)(cm,{children:r}),i&&(0,P.jsx)(lm,{children:i})]})]}):null};var dm=_(),fm=x.span`
  display: inline-flex;
  align-items: center;
`,pm=x.span`
  position: fixed;
  left: ${e=>`${e.$left}px`};
  top: ${e=>`${e.$top}px`};
  z-index: 99999;
  width: max-content;
  max-width: min(320px, calc(100vw - 16px));
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid ${e=>b(e.theme.BORDER,.9)};
  background: ${e=>b(e.theme.BACKGROUND,.96)};
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
  line-height: 1.3;
  text-align: left;
  box-shadow: 0 8px 24px ${e=>b(e.theme.BACKGROUND,.65)};
  backdrop-filter: blur(8px);
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    left: clamp(12px, ${e=>`${e.$arrowX}px`}, calc(100% - 12px));
    bottom: 100%;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid ${e=>b(e.theme.BACKGROUND,.96)};
  }
`,mm=x.span`
  display: inline-flex;
  align-items: center;
`;const Y=({theme:e,text:t,children:n})=>{let r=(0,M.useRef)(null),i=(0,M.useRef)(null),[a,o]=(0,M.useState)(!1),[s,c]=(0,M.useState)({left:8,top:8,arrowX:16}),l=()=>{let e=r.current,t=i.current;if(!e||!t)return;let n=e.getBoundingClientRect(),a=t.getBoundingClientRect().width,o=n.left+n.width/2,s=o-a/2,l=window.innerWidth-a-8,u=Math.min(Math.max(s,8),Math.max(8,l));c({left:u,top:n.bottom+8,arrowX:o-u})};return(0,M.useEffect)(()=>{if(!a)return;l();let e=()=>{l()};return window.addEventListener(`resize`,e),window.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`resize`,e),window.removeEventListener(`scroll`,e,!0)}},[a]),(0,P.jsxs)(fm,{theme:e,children:[(0,P.jsx)(mm,{ref:r,tabIndex:0,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onFocus:()=>o(!0),onBlur:()=>o(!1),children:n}),a&&(0,dm.createPortal)((0,P.jsx)(pm,{ref:i,theme:e,role:`tooltip`,$left:s.left,$top:s.top,$arrowX:s.arrowX,children:t}),document.body)]})},X={reverseInitiative:`Sorts initiative from low to high instead of high to low.`,popcornInitiative:`Lets players choose the next acting unit manually instead of following initiative order.`,initiativeDie:`Sets the die used when rolling initiative from the list (for example D20).`,initiativeModifierAttr:`Selects the numeric attribute used in initiative modifier math.`,initiativeModifierMath:`Math formula applied to the selected attribute. Use @STAT as the attribute value.`,showCardColumn:`Shows a quick-access column to open each unit's card/stat block.`,showPlayerView:`Allows Players to access the Initiative List view. If disabled, Players are routed away from the list.`,showNonPartyUnits:`If disabled, non-party unit stats are obscured for Players while keeping turn order visibility.`,showHpNumbersOnList:`If disabled, Players do not see exact HP/Max HP values in the Initiative List for non-owned units.`,ownerOnlyEdit:`Restricts editing controls to GMs and token owners.`,showAdjustHpContextMenu:`Shows or hides context menu options used to modify HP quickly.`,showHpBarsOnTokens:`Displays graphical HP bars on tokens in the scene.`,hpOrientation:`Sets where HP bars or HP numbers are anchored relative to tokens.`,showHpNumbersOnTokens:`Displays current/max HP numbers directly on tokens.`,showDeathEffect:`Shows a death visual effect when configured death conditions are met.`,showNamesOnTokens:`Toggles token name text visibility in scene.`,showTurnEffect:`Shows the active turn visual indicator in scene.`,useDescriptiveNames:`Appends descriptive suffixes to duplicate unit names for easier identification.`,enableRumble:`Enables Rumble integration for dice rolls.`,enableBones:`Enables Bones integration for dice rolls.`,enableDicePlus:`Enables Dice+ integration for dice rolls.`,enableObrNotification:`Enables in-app Owlbear notifications for supported roll and system events.`,showResultsToAll:`When enabled, notifications are shown to all players instead of only the local user.`,enableDiscordLogging:`Sends roll or event logs to a configured Discord webhook.`,discordUrl:`Discord webhook endpoint used when Discord logging is enabled.`,enableConsoleLog:`Turns verbose Forge logging on or off in the browser console.`};var hm=`https://www.battle-system.com`,gm=`/auth/bridge`,_m=`BATTLE_SYSTEM_ACCESS_TOKEN`,vm=`battle-system-auth-hub`,ym=`popup=yes,width=520,height=720,resizable=yes,scrollbars=yes,noopener=false,noreferrer=false`,bm=12e4,xm=e=>{if(!e||typeof e!=`object`)return!1;let t=e;return typeof t.type==`string`&&typeof t.state==`string`&&typeof t.access_token==`string`&&(typeof t.expires_at==`number`||t.expires_at===null)},Sm=()=>{let e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)};const Cm=async()=>{let e=Sm(),t=new URL(`${hm}${gm}`);t.searchParams.set(`return_origin`,window.location.origin),t.searchParams.set(`state`,e);let n=window.open(t.toString(),vm,ym);if(!n)throw Error(`Auth popup blocked. Please allow popups and try again.`);return new Promise((t,r)=>{let i=!1,a=null,o=null,s=()=>{window.removeEventListener(`message`,l),a!==null&&window.clearInterval(a),o!==null&&window.clearTimeout(o);try{n.closed||n.close()}catch{}},c=e=>{i||(i=!0,s(),e())},l=n=>{if(n.origin!==hm||!xm(n.data))return;let i=n.data;if(i.type===_m&&i.state===e){if(!i.access_token||i.expires_at!==null&&!Number.isFinite(i.expires_at)){c(()=>r(Error(`Invalid access token payload from auth hub.`)));return}he(i.access_token),c(()=>{t({accessToken:i.access_token,expiresAt:typeof i.expires_at==`number`?i.expires_at:null})})}};window.addEventListener(`message`,l),a=window.setInterval(()=>{n.closed&&c(()=>r(Error(`Auth popup closed before authentication completed.`)))},250),o=window.setTimeout(()=>{c(()=>r(Error(`Authentication timed out. Please try again.`)))},bm)})};var wm=`forge.auth`,Tm=`${wm}.accessToken`,Em=`${wm}.expiresAt`,Dm=`${wm}.everConnected`,Om=`${wm}.autoRetryAttempted`,km=e=>{let t=e.toLowerCase();return t.includes(`401`)||t.includes(`unauthorized`)||t.includes(`jwt`)||t.includes(`token`)},Am=e=>{if(!e||typeof e!=`object`)return!1;let t=e;return!!(typeof t.status==`number`&&t.status===401||typeof t.code==`string`&&km(t.code)||typeof t.message==`string`&&km(t.message)||typeof t.error==`string`&&km(t.error))},jm=e=>!e||typeof e!=`object`?null:e.error??null,Mm=e=>{if(e==null||e===``)return null;let t=typeof e==`number`?e:Number(e);return Number.isFinite(t)?t>0xe8d4a51000?t:t*1e3:null},Nm=(e,t)=>{sessionStorage.setItem(Tm,e),sessionStorage.setItem(Em,t===null?``:String(t)),localStorage.setItem(Dm,`1`)},Pm=()=>{sessionStorage.removeItem(Tm),sessionStorage.removeItem(Em)},Fm=()=>localStorage.getItem(Dm)===`1`,Im=()=>{let e=sessionStorage.getItem(Tm);if(!e)return!1;let t=Mm(sessionStorage.getItem(Em));return t!==null&&t<=Date.now()?(Pm(),!1):(he(e),!0)};const Lm=async()=>{let e=await Cm();Nm(e.accessToken,e.expiresAt)};var Rm=async e=>{try{return(await window.fetch(`${fe}/auth/v1/user`,{method:`GET`,headers:{apikey:ge,authorization:`Bearer ${e}`}})).ok}catch{return!1}};const zm=async()=>{let e=oe();return e?await Rm(e)?!0:(Hm(),!1):!1},Bm=()=>!!oe(),Vm=async()=>{Bm()||await Lm()},Hm=()=>{he(null),Pm()},Um=async()=>{if(!(Bm()&&(await zm(),Bm()))&&!(Im()&&await zm())&&Fm()&&sessionStorage.getItem(Om)!==`1`){sessionStorage.setItem(Om,`1`);try{await Lm()}catch{}}},Wm=async e=>{try{let t=await e();if(!Am(jm(t)))return t}catch(e){if(!Am(e))throw e}Hm(),await Vm();let t=await e(),n=jm(t);if(Am(n))throw n;return t},Gm=`buff_effect_one`,Km=`debuff_effect_one`,qm=[{value:`buff_effect_one`,label:`Buff Effect One`},{value:`buff_effect_two`,label:`Buff Effect Two`}],Jm=[{value:`debuff_effect_one`,label:`Debuff Effect One`},{value:`debuff_effect_two`,label:`Debuff Effect Two`}],Ym=e=>qm.some(t=>t.value===e),Xm=e=>Jm.some(t=>t.value===e),Zm=e=>{switch(e){case`buff_effect_two`:return`
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
`}};var $m=d.EXTENSIONID,eh=`com.battle-system.forge`;const Z={CURRENT_THEME:`${$m}/CurrentTheme`,CURRENT_CARD:`${$m}/CurrentCard`,CURRENT_LIST:`${$m}/CurrentList`,CURRENT_ATTR:`${$m}/CurrentAttr`,SYSTEM_NAME:`${$m}/SystemName`,IMPORT_DATE:`${$m}/ImportDate`};var th=(()=>{let e=E.attributes,t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||``,maxHpBid:n?.attr_bid||``}})(),nh=(e,t)=>e instanceof Error&&e.message?e.message:t,rh=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Imported ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Imported ${t} is not a JSON array`);return n}throw Error(`Imported ${t} has invalid type`)},ih=x.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,ah=x.div`
  background-color: ${e=>b(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`,oh=x.h2`
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  padding: 12px 15px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 400;
`,sh=x.p`
  color: ${e=>b(e.theme.PRIMARY,.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`,ch=x.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 15px;
`,lh=x.div`
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
`,uh=x.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.theme.PRIMARY};
  margin-top: 5px;
`,dh=x.div`
  margin-top: 16px;
  background-color: ${e=>b(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 14px;
`,fh=x.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 10px 0;
  font-size: 15px;
`,ph=x.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`,mh=x.label`
  color: ${e=>e.theme.PRIMARY};
  min-width: 84px;
  font-size: 13px;
`,hh=x.select`
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
`,gh=x.div`
  background-color: ${()=>b(`#FF0000`,.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,_h=x.div`
  background-color: ${()=>b(`#00FF00`,.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,vh=x.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`,yh=x.p`
  color: ${e=>b(e.theme.PRIMARY,.9)};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,bh=x.div`
  margin-top: 30px;
`,xh=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Sh=x.div`
  background-color: ${e=>b(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ch=x.div`
  flex: 1;
`,wh=x.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`,Th=x.div`
  color: ${e=>b(e.theme.PRIMARY,.7)};
  font-size: 13px;
  font-style: italic;
`,Eh=x.div`
  display: flex;
  gap: 8px;
`,Dh=x.button`
  background-color: ${e=>e.$variant===`danger`?b(`#FF0000`,.2):b(e.theme.OFFSET,.5)};
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
    background-color: ${e=>e.$variant===`danger`?b(`#FF0000`,.3):e.theme.OFFSET};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Oh={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}};const kh=()=>{let{theme:e,updateThemeFromSystem:t}=ze(),n=N(e=>e.sceneMetadata),[r,i]=(0,M.useState)(()=>Bm()),[a,o]=(0,M.useState)(``),[s,c]=(0,M.useState)(!1),[u,d]=(0,M.useState)(null),[f,p]=(0,M.useState)(null),[m,g]=(0,M.useState)(``),[_,v]=(0,M.useState)(null),[y,x]=(0,M.useState)(null),[S,C]=(0,M.useState)([]),[w,T]=(0,M.useState)(``),[ee,te]=(0,M.useState)(``),[ne,D]=(0,M.useState)(Gm),[re,ie]=(0,M.useState)(Km),[ae,oe]=(0,M.useState)([]),[se,ce]=(0,M.useState)(!1),[le,ue]=(0,M.useState)(null),[k,de]=(0,M.useState)(``);(0,M.useEffect)(()=>{i(Bm()),fe(),ge()},[n]),(0,M.useEffect)(()=>{fe(),ge()},[n]);let fe=()=>{try{if(!Bm()){let e={primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url};g(E.name),v(null),x(e),C(E.attributes),T(th.currentHpBid),te(th.maxHpBid),D(Gm),ie(Km);return}let e=n[Z.CURRENT_THEME],t=n[Z.CURRENT_ATTR],r=n[Z.SYSTEM_NAME]||E.name,i=n[Z.IMPORT_DATE]||null,a=n[h.HP_CURRENT_BID],o=n[h.HP_MAX_BID],s=n[h.BUFF_VISUAL_PRESET],c=n[h.DEBUFF_VISUAL_PRESET],l=Array.isArray(t)?t:[];g(r),v(i),x(e||null),C(l),T(a||``),te(o||``),D(Ym(s)?s:Gm),ie(Xm(c)?c:Km)}catch(e){O.error(`Error loading system from cache:`,e)}},me=async(e,t)=>{await l.scene.setMetadata({[e]:t})},he=S.filter(e=>e.attr_type===`numb`),ge=()=>{try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(n&&n.startsWith(`${eh}.`)&&n.endsWith(`.backup`)){let t=localStorage.getItem(n);if(t){let n=JSON.parse(t);e.push(n)}}}e.sort((e,t)=>new Date(t.backupDate).getTime()-new Date(e.backupDate).getTime()),oe(e)}catch(e){O.error(`Error loading backups:`,e)}},ve=async e=>{try{let e=n[Z.CURRENT_THEME],t=n[Z.CURRENT_CARD],r=n[Z.CURRENT_LIST],i=n[Z.CURRENT_ATTR],a=n[Z.SYSTEM_NAME]||E.name;if(!e||!Array.isArray(t)||!Array.isArray(r)||!Array.isArray(i)){O.warn(`Cannot create backup: system data incomplete`);return}let o={name:a,backupDate:new Date().toISOString(),theme_primary:e.primary,theme_offset:e.offset,theme_background:e.background,theme_border:e.border,background_url:e.background_url,card_layout:t,list_layout:r,attributes:i},s=`${eh}.${a}.backup`;localStorage.setItem(s,JSON.stringify(o)),O.log(`Backup created for ${a}`),ge()}catch(e){throw O.error(`Error creating backup:`,e),e}},ye=e=>{try{let t=`${eh}.${e}.backup`;localStorage.removeItem(t),O.log(`Backup deleted for ${e}`),ge(),p(`Backup for "${e}" deleted successfully`)}catch(e){O.error(`Error deleting backup:`,e),d(`Failed to delete backup`)}},be=(e,t)=>{de(e),ue(()=>t),ce(!0)},A=async()=>{ce(!1),le&&(await le(),ue(null))},xe=()=>{ce(!1),ue(null),de(``)},Se=async()=>{if(!a.trim()){d(`Please enter a share_id`);return}be(`This will overwrite your current system data. A backup of your current system will be saved to local storage. Do you want to continue?`,async()=>{await Ce()})},Ce=async()=>{if(!Bm()){d(`Please connect your Battle-System account before importing systems.`);return}c(!0),d(null),p(null);try{await Vm();let{data:e,error:n}=await Wm(async()=>_e.from(`v_bs_system_with_attributes`).select(`*`).eq(`share_id`,a).maybeSingle());if(n)throw n;if(!e){d(`No system found with that share_id`),c(!1);return}let r=e,i=rh(r.card_layout,`card_layout`),s=rh(r.list_layout,`list_layout`),u=r.attributes;if(!Array.isArray(u))throw Error(`Imported attributes are not a valid array`);await ve(m);let f={primary:r.theme_primary,offset:r.theme_offset,background:r.theme_background,border:r.theme_border,background_url:r.background_url};await l.scene.setMetadata({[Z.CURRENT_THEME]:f,[Z.CURRENT_CARD]:i,[Z.CURRENT_LIST]:s,[Z.CURRENT_ATTR]:u,[Z.SYSTEM_NAME]:r.name,[Z.IMPORT_DATE]:new Date().toISOString()}),g(r.name),v(new Date().toISOString()),x(f),t(f.primary,f.offset,f.background,f.border,f.background_url),p(`System "${r.name}" loaded successfully! Backup created.`),o(``),O.log(`System loaded:`,r.name)}catch(e){O.error(`Error fetching system:`,e),d(nh(e,`An error occurred while fetching the system`))}finally{c(!1)}},j=async e=>{be(`This will restore the system "${e.name}" from backup. A backup of your current system will be created. Do you want to continue?`,async()=>{await we(e)})},we=async e=>{c(!0),d(null),p(null);try{await ve(m);let n={primary:e.theme_primary,offset:e.theme_offset,background:e.theme_background,border:e.theme_border,background_url:e.background_url};if(!Array.isArray(e.card_layout)||!Array.isArray(e.list_layout)||!Array.isArray(e.attributes))throw Error(`Backup data is invalid`);await l.scene.setMetadata({[Z.CURRENT_THEME]:n,[Z.CURRENT_CARD]:e.card_layout,[Z.CURRENT_LIST]:e.list_layout,[Z.CURRENT_ATTR]:e.attributes,[Z.SYSTEM_NAME]:e.name,[Z.IMPORT_DATE]:new Date().toISOString()}),g(e.name),v(new Date().toISOString()),x(n),t(n.primary,n.offset,n.background,n.border,n.background_url),p(`System "${e.name}" restored from backup successfully!`),O.log(`System restored from backup:`,e.name)}catch(e){O.error(`Error restoring backup:`,e),d(`Failed to restore system from backup`)}finally{c(!1)}},Te=async()=>{c(!0),d(null),p(null);try{let e={primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url};await l.scene.setMetadata({[Z.CURRENT_THEME]:e,[Z.CURRENT_CARD]:E.card_layout,[Z.CURRENT_LIST]:E.list_layout,[Z.CURRENT_ATTR]:E.attributes,[Z.SYSTEM_NAME]:E.name,[Z.IMPORT_DATE]:null}),g(E.name),v(null),x(e),t(e.primary,e.offset,e.background,e.border,e.background_url),p(`Reset to default system successfully!`)}catch(e){d(`Failed to reset to default system`),O.error(`Error resetting to default:`,e)}finally{c(!1)}},Ee=e=>e?new Date(e).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):null,De=!r,Oe=!r;return(0,P.jsxs)(qu.div,{variants:Oh,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,P.jsxs)($p,{theme:e,children:[(0,P.jsx)(em,{theme:e,children:`System Configuration`}),(0,P.jsx)(oh,{theme:e,children:m}),_?(0,P.jsxs)(sh,{theme:e,children:[`Imported: `,Ee(_)]}):(0,P.jsx)(sh,{theme:e,children:`Using Default System`}),y&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(ch,{children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(lh,{color:y.primary,theme:e,children:y.primary}),(0,P.jsx)(uh,{theme:e,children:`PRIMARY`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(lh,{color:y.offset,theme:e,children:y.offset}),(0,P.jsx)(uh,{theme:e,children:`OFFSET`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(lh,{color:y.background,theme:e,children:y.background}),(0,P.jsx)(uh,{theme:e,children:`BG`})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(lh,{color:y.border,theme:e,children:y.border}),(0,P.jsx)(uh,{theme:e,children:`BORDER`})]})]}),(0,P.jsxs)(dh,{theme:e,children:[(0,P.jsx)(fh,{theme:e,children:`System Settings`}),(0,P.jsxs)(ph,{children:[(0,P.jsx)(mh,{theme:e,children:`Current HP`}),(0,P.jsxs)(hh,{theme:e,value:w,disabled:Oe,onChange:async e=>{if(Oe)return;let t=e.target.value;T(t),await me(h.HP_CURRENT_BID,t)},children:[(0,P.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),he.map(e=>(0,P.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,P.jsxs)(ph,{children:[(0,P.jsx)(mh,{theme:e,children:`Max HP`}),(0,P.jsxs)(hh,{theme:e,value:ee,disabled:Oe,onChange:async e=>{if(Oe)return;let t=e.target.value;te(t),await me(h.HP_MAX_BID,t)},children:[(0,P.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),he.map(e=>(0,P.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),Oe&&(0,P.jsx)(sh,{theme:e,children:`Log in to edit HP mapping.`}),(0,P.jsxs)(ph,{children:[(0,P.jsx)(mh,{theme:e,children:`Buff Visual`}),(0,P.jsx)(hh,{theme:e,value:ne,onChange:async e=>{let t=e.target.value;Ym(t)&&(D(t),await me(h.BUFF_VISUAL_PRESET,t))},children:qm.map(e=>(0,P.jsx)(`option`,{value:e.value,children:e.label},e.value))})]}),(0,P.jsxs)(ph,{children:[(0,P.jsx)(mh,{theme:e,children:`Debuff Visual`}),(0,P.jsx)(hh,{theme:e,value:re,onChange:async e=>{let t=e.target.value;Xm(t)&&(ie(t),await me(h.DEBUFF_VISUAL_PRESET,t))},children:Jm.map(e=>(0,P.jsx)(`option`,{value:e.value,children:e.label},e.value))})]})]})]}),(0,P.jsxs)(ah,{theme:e,children:[(0,P.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0},children:`Import New System`}),(0,P.jsx)(`p`,{style:{color:b(e.PRIMARY,.8),fontSize:`14px`},children:De?`Log in to import new/custom systems.`:`Enter a share_id to download and activate a new game system configuration.`}),(0,P.jsx)(ih,{children:(0,P.jsx)(rm,{theme:e,type:`text`,value:a,onChange:e=>o(e.target.value),placeholder:De?``:`Enter Share Id...`,disabled:s||De,onKeyPress:e=>e.key===`Enter`&&Se()})}),(0,P.jsxs)(vh,{children:[(0,P.jsx)(nm,{theme:e,onClick:Se,disabled:s||De||!a.trim(),children:s?`....!`:`Import System`}),(0,P.jsx)(nm,{theme:e,variant:`secondary`,onClick:Te,disabled:s,children:`Use Default`})]})]}),u&&(0,P.jsxs)(gh,{theme:e,children:[(0,P.jsx)(`strong`,{children:`Error:`}),` `,u]}),f&&(0,P.jsxs)(_h,{theme:e,children:[(0,P.jsx)(`strong`,{children:`Success:`}),` `,f]}),ae.length>0&&(0,P.jsx)(bh,{children:(0,P.jsxs)(tm,{theme:e,children:[(0,P.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0,marginBottom:`15px`},children:`System Backups`}),(0,P.jsx)(xh,{children:ae.map(t=>(0,P.jsxs)(Sh,{theme:e,children:[(0,P.jsxs)(Ch,{children:[(0,P.jsx)(wh,{theme:e,children:t.name}),(0,P.jsxs)(Th,{theme:e,children:[`Backed up: `,Ee(t.backupDate)]})]}),(0,P.jsxs)(Eh,{children:[(0,P.jsx)(Dh,{theme:e,onClick:()=>j(t),disabled:s,title:`Import this backup`,children:(0,P.jsx)(Ud,{size:18})}),(0,P.jsx)(Dh,{theme:e,$variant:`danger`,onClick:()=>ye(t.name),disabled:s,title:`Delete this backup`,children:(0,P.jsx)(pe,{size:18})})]})]},`${t.name}-${t.backupDate}`))})]})})]}),(0,P.jsx)(um,{isOpen:se,title:`Confirm Action`,onClose:xe,actions:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(nm,{theme:e,variant:`secondary`,onClick:xe,children:`Cancel`}),(0,P.jsx)(nm,{theme:e,onClick:A,children:`Confirm`})]}),children:(0,P.jsx)(yh,{theme:e,children:k})})]},`system`)},Ah=()=>{let[e,t]=(0,M.useState)({theme:null,cardLayout:[],listLayout:[],attributes:[],systemName:E.name,importDate:null,isLoading:!0}),n=N(e=>e.sceneMetadata);return(0,M.useEffect)(()=>{try{if(!Bm()){t({theme:{primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,isLoading:!1});return}let e=n[Z.CURRENT_THEME],r=n[Z.CURRENT_CARD],i=n[Z.CURRENT_LIST],a=n[Z.CURRENT_ATTR];if(!e||!Array.isArray(r)||!Array.isArray(i)||!Array.isArray(a)){O.log(`System data missing, using defaults`),t({theme:{primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,isLoading:!1});return}t({theme:e,cardLayout:r,listLayout:i,attributes:a,systemName:n[Z.SYSTEM_NAME]||E.name,importDate:n[Z.IMPORT_DATE]||null,isLoading:!1})}catch(e){O.error(`Error loading system data:`,e),t({theme:{primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,isLoading:!1})}},[n]),e};var jh=x.h2`
  ${{marginBottom:`1rem`,paddingBottom:`0.5rem`,fontSize:`1.25rem`,fontWeight:`600`}}
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
`,Q=x.div`
  ${{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`,":last-child":{borderBottomWidth:`0`}}}
  color: ${e=>e.theme.PRIMARY};
`,$=x.label`
  ${{flex:`1 1 0%`,cursor:`pointer`,textAlign:`left`,fontSize:`1rem`}}
  color: ${e=>e.theme.PRIMARY};
`,Mh=x.div`
  ${{marginLeft:`1rem`,display:`flex`,placeContent:`space-between`,alignItems:`center`,gap:`0.75rem`}}
  color: ${e=>e.theme.PRIMARY};
`,Nh=x.label`
  ${{fontSize:`0.875rem`}}
  text-align: left;
  color: ${e=>e.theme.PRIMARY};
`,Ph=x.p`
  ${{marginTop:`0.25rem`,fontSize:`0.75rem`}}
  color: ${e=>b(e.theme.PRIMARY,.7)};
`,Fh=x.input`
  ${{borderRadius:`0.25rem`,paddingLeft:`0.75rem`,paddingRight:`0.75rem`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`,fontSize:`0.875rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  width: 50%;
  
  &::placeholder {
    color: ${e=>b(e.theme.PRIMARY,.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`,Ih=x.select`
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
`,Lh=x.button`
  background-color: ${e=>b(e.theme.OFFSET,.45)};
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
`,Rh=zp.div({marginTop:`0.5rem`,display:`flex`,justifyContent:`center`,gap:`0.75rem`}),zh=x.p`
  margin: 8px 0 0;
  font-size: 13px;
  color: ${e=>e.$connected?e.theme.PRIMARY:b(e.theme.PRIMARY,.75)};
`,Bh=x.p`
  color: ${e=>b(e.theme.PRIMARY,.9)};
  margin: 0;
  line-height: 1.5;
`;const Vh=()=>{let{theme:e}=ze(),{attributes:t}=Ah();N(e=>e.roomMetadata);let n=N(e=>e.sceneMetadata),r=N(e=>e.items),i=N(e=>e.cacheReady),[a,o]=(0,M.useState)(!1),[s,c]=(0,M.useState)(!1),[d,f]=(0,M.useState)(`D20`),[p,m]=(0,M.useState)(!1),[g,_]=(0,M.useState)(``),[v,y]=(0,M.useState)(`@STAT`),[b,x]=(0,M.useState)(!1),[S,C]=(0,M.useState)(!1),[w,T]=(0,M.useState)(!0),[E,ee]=(0,M.useState)(!1),[te,ne]=(0,M.useState)(!0),[D,re]=(0,M.useState)(!1),[ae,oe]=(0,M.useState)(`bottom`),[se,le]=(0,M.useState)(!1),[ue,k]=(0,M.useState)(!1),[de,fe]=(0,M.useState)(!1),[pe,he]=(0,M.useState)(!1),[ge,_e]=(0,M.useState)(!1),[be,A]=(0,M.useState)(!1),[xe,Se]=(0,M.useState)(!1),[Ce,j]=(0,M.useState)(!1),[we,Te]=(0,M.useState)(!1),[Ee,De]=(0,M.useState)(!1),[Oe,ke]=(0,M.useState)(!1),[Ae,je]=(0,M.useState)(``),[Me,Ne]=(0,M.useState)(!1),Pe=(0,M.useRef)(null),[Fe,Ie]=(0,M.useState)(()=>Bm()),[Le,Re]=(0,M.useState)(!1),[Be,Ve]=(0,M.useState)(!1);(0,M.useEffect)(()=>{let e=!0;return(async()=>{let t=await zm();e&&Ie(t)})(),()=>{e=!1}},[]);let F=n;(0,M.useEffect)(()=>{if(i){if(F[h.POPCORN_INITIATIVE]!==void 0&&o(F[h.POPCORN_INITIATIVE]),F[h.REVERSE_INITIATIVE]!==void 0&&c(F[h.REVERSE_INITIATIVE]),F[h.DICE_RANGE]!==void 0&&f(F[h.DICE_RANGE]),F[h.INITIATIVE_MODIFIER_BID]===void 0?_(``):_(F[h.INITIATIVE_MODIFIER_BID]||``),F[h.INITIATIVE_MODIFIER_EXPR]!==void 0){let e=(F[h.INITIATIVE_MODIFIER_EXPR]||`@STAT`).replace(/\bx\b/gi,`@STAT`).trim();y(e.length>0?e:`@STAT`)}else y(`@STAT`);if(F[h.SHOW_CARD_ACCESS]!==void 0&&m(F[h.SHOW_CARD_ACCESS]),F[h.SHOW_PLAYER_VIEW]!==void 0&&x(F[h.SHOW_PLAYER_VIEW]),F[h.SHOW_OWNER_ONLY_EDIT]!==void 0&&ee(F[h.SHOW_OWNER_ONLY_EDIT]),F[h.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?ne(!0):ne(F[h.SHOW_MODIFY_UNIT_CONTEXT_MENU]),F[h.SHOW_NON_PARTY_UNITS]!==void 0&&C(F[h.SHOW_NON_PARTY_UNITS]),F[h.SHOW_LIST_HP_NUMBERS]===void 0?T(!0):T(F[h.SHOW_LIST_HP_NUMBERS]),F[h.SHOW_HP_BARS]!==void 0&&re(F[h.SHOW_HP_BARS]),F[h.HP_BAR_ORIENTATION]!==void 0&&oe(F[h.HP_BAR_ORIENTATION]),F[h.SHOW_HP_NUMBERS]!==void 0&&le(F[h.SHOW_HP_NUMBERS]),F[h.SHOW_DEATH_EFFECT]!==void 0&&k(F[h.SHOW_DEATH_EFFECT]),F[h.SHOW_NAMES]!==void 0&&fe(F[h.SHOW_NAMES]),F[h.SHOW_TURN_EFFECT]!==void 0&&he(F[h.SHOW_TURN_EFFECT]),F[h.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&_e(F[h.USE_DESCRIPTIVE_DUPLICATES]),F[h.ENABLE_RUMBLE]!==void 0&&A(F[h.ENABLE_RUMBLE]),F[h.ENABLE_BONES]!==void 0&&Se(F[h.ENABLE_BONES]),F[h.ENABLE_DICE_PLUS]!==void 0&&j(F[h.ENABLE_DICE_PLUS]),F[h.ENABLE_OBR_NOTIFICATION]!==void 0&&Te(F[h.ENABLE_OBR_NOTIFICATION]),F[h.SHOW_NOTIFICATION_TO_ALL]!==void 0&&De(F[h.SHOW_NOTIFICATION_TO_ALL]),F[h.ENABLE_DISCORD_LOGGING]!==void 0&&ke(F[h.ENABLE_DISCORD_LOGGING]),F[h.DISCORD_URL]!==void 0&&je(F[h.DISCORD_URL]),F[h.ENABLE_CONSOLE_LOG]!==void 0){let e=F[h.ENABLE_CONSOLE_LOG];Ne(e),O.setEnabled(e)}else Ne(!1)}},[i,F]);let I=async(e,t)=>{await l.scene.setMetadata({[e]:t})},He=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},Ue=t.filter(e=>e.attr_type===`numb`).sort((e,t)=>(e.attr_name||``).localeCompare(t.attr_name||``)),We=(e,t)=>{let n=e.trim();return n?t?/@STAT/i.test(n)?/\d\s*d\s*\d|\bd\s*\d/i.test(n)?{valid:!1,error:`Dice notation is not allowed in initiative modifiers.`}:me(n.replace(/@STAT/gi,`@${t}`))?{valid:!0}:{valid:!1,error:`Invalid expression syntax.`}:{valid:!1,error:`Expression must include @STAT (the selected attribute value).`}:{valid:!1,error:`Select a numeric attribute first.`}:{valid:!1,error:`Expression is required.`}},Ge=async(e,t)=>{await I(h.INITIATIVE_MODIFIER_BID,e),await I(h.INITIATIVE_MODIFIER_EXPR,t)},Ke=async e=>{if(_(e),!e){await Ge(``,v);return}let t=We(v,e);t.valid||await l.notification.show(t.error||`Invalid initiative modifier settings.`,`WARNING`),await Ge(e,v)},qe=async()=>{let e=v.trim(),t=(e.length>0?e:`@STAT`).replace(/\bx\b/gi,`@STAT`);if(y(t),!g){await Ge(``,t);return}let n=We(t,g);if(!n.valid){await l.notification.show(n.error||`Invalid initiative modifier expression.`,`WARNING`);return}await Ge(g,t)},L=async()=>{if(!g){await l.notification.show(`Select an Initiative Modifier attribute before testing.`,`WARNING`);return}let e=v.replace(/\bx\b/gi,`@STAT`),t=We(e,g);if(!t.valid){await l.notification.show(t.error||`Invalid initiative modifier expression.`,`WARNING`);return}let n=He(d),r=Math.floor(Math.random()*n)+1,i=ve(e.replace(/@STAT/gi,`@${g}`),{bidValueMap:{[g]:14},onMissingBid:`useZero`});if(!i.valid||!i.notation){await l.notification.show(`Could not resolve initiative modifier expression.`,`ERROR`);return}let a=Number(i.notation),o=Number.isFinite(a)?Math.trunc(a):0,s=r+o,c=e.replace(/@STAT/gi,`14`);await l.notification.show(`Mock Initiative: 1d${n}(${r}) + ${c}(${o}) = ${s}`,`SUCCESS`)},Je=async()=>{try{let e=await ye(),t=JSON.stringify(e,null,2),n=new Blob([t],{type:`text/plain;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`forge-collection-${new Date().toISOString().slice(0,10)}.txt`,i.click(),URL.revokeObjectURL(r),await l.notification.show(`Collection export complete. ${e.length} record(s) written.`,`SUCCESS`)}catch(e){O.log(`Collection export failed`,e),await l.notification.show(`Collection export failed. See console log for details.`,`ERROR`)}},Ye=()=>{Ve(!0)},Xe=()=>{Ve(!1),Pe.current?.click()},Ze=async e=>{let t=e.target.files?.[0];if(t)try{let e=await t.text(),n=JSON.parse(e);if(!Array.isArray(n)){await l.notification.show(`Import file must contain a JSON array of collection records.`,`ERROR`);return}let r=await ce(n);await l.notification.show(`Collection import complete. Created: ${r.created}, Updated: ${r.updated}, Skipped: ${r.skipped}.`,`SUCCESS`)}catch(e){O.log(`Collection import failed`,e),await l.notification.show(`Collection import failed. Ensure the file is valid JSON and try again.`,`ERROR`)}finally{e.target.value=``}},Qe=async()=>{Re(!0);try{await Lm(),Ie(Bm()),await l.notification.show(`Connected to Battle-System account.`,`SUCCESS`)}catch(e){O.error(`Battle-System auth connection failed`,e),await l.notification.show(`Unable to connect to Battle-System account. Please try again.`,`ERROR`),Ie(Bm())}finally{Re(!1)}};return(0,P.jsxs)(qu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[(0,P.jsxs)($p,{theme:e,children:[(0,P.jsx)(em,{theme:e,children:`Settings`}),(0,P.jsxs)(tm,{theme:e,children:[(0,P.jsx)(jh,{theme:e,children:`Battle-System Account`}),(0,P.jsx)(Rh,{children:(0,P.jsx)(nm,{theme:e,onClick:()=>{Qe()},disabled:Le,children:Le?`Connecting...`:Fe?`Reconnect to Battle-System`:`Connect to Battle-System`})}),(0,P.jsx)(zh,{theme:e,$connected:Fe,children:Fe?`Status: Connected`:`Status: Disconnected`})]}),(0,P.jsxs)(tm,{theme:e,children:[(0,P.jsx)(jh,{theme:e,children:`Collection Management`}),(0,P.jsxs)(Rh,{children:[(0,P.jsx)(nm,{theme:e,onClick:Je,children:`Export`}),(0,P.jsx)(nm,{theme:e,onClick:Ye,children:`Import`})]}),(0,P.jsx)(`input`,{ref:Pe,type:`file`,accept:`.txt,.json,text/plain,application/json`,onChange:Ze,style:{display:`none`}})]}),(0,P.jsxs)(tm,{theme:e,children:[(0,P.jsx)(jh,{theme:e,children:`List Controls`}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.reverseInitiative,children:`Reverse Initiative`})}),(0,P.jsx)(J,{label:`Reverse Initiative`,isOn:s,onChange:async e=>{c(e),await I(h.REVERSE_INITIATIVE,e),e&&a&&(o(!1),await I(h.POPCORN_INITIATIVE,!1))}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.popcornInitiative,children:`Popcorn Initiative`})}),(0,P.jsx)(J,{label:`Popcorn Initiative`,isOn:a,onChange:async e=>{o(e),await I(h.POPCORN_INITIATIVE,e),e&&s&&(c(!1),await I(h.REVERSE_INITIATIVE,!1))}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.initiativeDie,children:`Initiative Die:`})}),(0,P.jsx)(Fh,{theme:e,type:`text`,value:d,onChange:async e=>{let t=e.target.value;f(t),await I(h.DICE_RANGE,t),O.log(`Dice Range:`,t)},placeholder:`D20`,maxLength:3})]}),(0,P.jsxs)(Mh,{theme:e,children:[(0,P.jsx)(Nh,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.initiativeModifierAttr,children:`Initiative Modifier:`})}),(0,P.jsxs)(Ih,{theme:e,value:g,onChange:async e=>{await Ke(e.target.value)},children:[(0,P.jsx)(`option`,{value:``,children:`None`}),Ue.map(e=>(0,P.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,P.jsxs)(Mh,{theme:e,children:[(0,P.jsx)(Nh,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.initiativeModifierMath,children:`Math:`})}),(0,P.jsx)(Fh,{theme:e,type:`text`,value:v,onChange:e=>{y(e.target.value)},onBlur:async()=>{await qe()},placeholder:`floor((@STAT-10)/2)`,maxLength:120,disabled:!g}),(0,P.jsx)(Lh,{theme:e,type:`button`,onClick:()=>{L()},disabled:!g,children:`Test`})]}),(0,P.jsx)(Ph,{theme:e,children:`Use @STAT as the selected attribute value. Example: floor((@STAT-10)/2)`}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.showCardColumn,children:`Show Card Column`})}),(0,P.jsx)(J,{label:`Show Stat Block Access`,isOn:p,onChange:async e=>{m(e),await I(h.SHOW_CARD_ACCESS,e)}})]})]}),(0,P.jsxs)(tm,{theme:e,children:[(0,P.jsx)(jh,{theme:e,children:`Player Controls`}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.showPlayerView,children:`Show Player View`})}),(0,P.jsx)(J,{label:`Show Player View`,isOn:b,onChange:async e=>{x(e),await I(h.SHOW_PLAYER_VIEW,e)}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.showNonPartyUnits,children:`Show Non-Party Units`})}),(0,P.jsx)(J,{label:`Show Non-Party Units`,isOn:S,onChange:async e=>{C(e),await I(h.SHOW_NON_PARTY_UNITS,e)}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.showHpNumbersOnList,children:`Show HP Numbers on List`})}),(0,P.jsx)(J,{label:`Show HP Numbers on List`,isOn:w,onChange:async e=>{T(e),await I(h.SHOW_LIST_HP_NUMBERS,e)}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.ownerOnlyEdit,children:`GM/Owner Only Edit`})}),(0,P.jsx)(J,{label:`Owner Only Edit`,isOn:E,onChange:async e=>{ee(e),await I(h.SHOW_OWNER_ONLY_EDIT,e)}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.showAdjustHpContextMenu,children:`Show Adjust HP Context Menu`})}),(0,P.jsx)(J,{label:`Show Adjust HP Context Menu`,isOn:te,onChange:async e=>{ne(e),await I(h.SHOW_MODIFY_UNIT_CONTEXT_MENU,e)}})]})]}),(0,P.jsxs)(tm,{theme:e,children:[(0,P.jsx)(jh,{theme:e,children:`Game Controls`}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.showHpBarsOnTokens,children:`Show HP Bars on tokens`})}),(0,P.jsx)(J,{label:`Show HP Bars on tokens`,isOn:D,onChange:async e=>{re(e),await I(h.SHOW_HP_BARS,e),e&&se&&(le(!1),await I(h.SHOW_HP_NUMBERS,!1)),e&&F[h.HP_BAR_ORIENTATION]===void 0&&(oe(`bottom`),await I(h.HP_BAR_ORIENTATION,`bottom`))}})]}),(D||se)&&(0,P.jsxs)(Mh,{theme:e,children:[(0,P.jsx)(Nh,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.hpOrientation,children:`Orientation:`})}),(0,P.jsxs)(Ih,{theme:e,value:ae,onChange:async e=>{let t=e.target.value;oe(t),await I(h.HP_BAR_ORIENTATION,t)},children:[(0,P.jsx)(`option`,{value:`top`,children:`Top`}),(0,P.jsx)(`option`,{value:`bottom`,children:`Bottom`}),(0,P.jsx)(`option`,{value:`left`,children:`Left`}),(0,P.jsx)(`option`,{value:`right`,children:`Right`})]})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.showHpNumbersOnTokens,children:`Show HP Numbers on tokens`})}),(0,P.jsx)(J,{label:`Show HP Numbers on tokens`,isOn:se,onChange:async e=>{le(e),await I(h.SHOW_HP_NUMBERS,e),e&&D&&(re(!1),await I(h.SHOW_HP_BARS,!1)),e&&F[h.HP_BAR_ORIENTATION]===void 0&&(oe(`bottom`),await I(h.HP_BAR_ORIENTATION,`bottom`))}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.showDeathEffect,children:`Show Death Effect`})}),(0,P.jsx)(J,{label:`Show Death Effect`,isOn:ue,onChange:async e=>{k(e),await I(h.SHOW_DEATH_EFFECT,e)}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.showNamesOnTokens,children:`Show Names on Tokens`})}),(0,P.jsx)(J,{label:`Show names on tokens`,isOn:de,onChange:async e=>{fe(e),await I(h.SHOW_NAMES,e);let t=r.filter(e=>e.metadata[u.ON_LIST]===!0);e?(O.log(`Showing names on tokens`),await l.scene.items.updateItems(t,e=>{for(let t of e){let e=t.metadata[u.UNIT_NAME],n=t;e&&n.text&&(n.text.plainText=String(e))}})):(O.log(`Hiding names on tokens`),await l.scene.items.updateItems(t,e=>{for(let t of e){let e=t;e.text&&(e.text.plainText=``)}}))}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.showTurnEffect,children:`Show Turn Effect`})}),(0,P.jsx)(J,{label:`Show Turn Effect`,isOn:pe,onChange:async e=>{he(e),await I(h.SHOW_TURN_EFFECT,e)}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.useDescriptiveNames,children:`Use Descriptive Names`})}),(0,P.jsx)(J,{label:`Use Descriptive Duplicates Names`,isOn:ge,onChange:async e=>{_e(e),await I(h.USE_DESCRIPTIVE_DUPLICATES,e)}})]})]}),(0,P.jsxs)(tm,{theme:e,children:[(0,P.jsx)(jh,{theme:e,children:`Dice Controls`}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.enableRumble,children:`Enable Rumble! Integration`})}),(0,P.jsx)(J,{label:`Enable Rumble! Integration`,isOn:be,onChange:async e=>{A(e),await I(h.ENABLE_RUMBLE,e),e&&(Se(!1),j(!1),await I(h.ENABLE_BONES,!1),await I(h.ENABLE_DICE_PLUS,!1))}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.enableBones,children:`Enable Bones! Integration`})}),(0,P.jsx)(J,{label:`Enable Bones! Integration`,isOn:xe,onChange:async e=>{Se(e),await I(h.ENABLE_BONES,e),e&&(A(!1),j(!1),await I(h.ENABLE_RUMBLE,!1),await I(h.ENABLE_DICE_PLUS,!1))}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.enableDicePlus,children:`Enable Dice+ Integration`})}),(0,P.jsx)(J,{label:`Enable Dice+ Integration`,isOn:Ce,onChange:async e=>{j(e),await I(h.ENABLE_DICE_PLUS,e),e&&(A(!1),Se(!1),await I(h.ENABLE_RUMBLE,!1),await I(h.ENABLE_BONES,!1))}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.enableObrNotification,children:`Enable OBR Notification`})}),(0,P.jsx)(J,{label:`Enable OBR Notification`,isOn:we,onChange:async e=>{Te(e),await I(h.ENABLE_OBR_NOTIFICATION,e)}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.showResultsToAll,children:`Show Results to All`})}),(0,P.jsx)(J,{label:`Show Results to All`,isOn:Ee,onChange:async e=>{De(e),await I(h.SHOW_NOTIFICATION_TO_ALL,e)}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.enableDiscordLogging,children:`Enable Discord Logging`})}),(0,P.jsx)(J,{label:`Enable Discord Logging`,isOn:Oe,onChange:async e=>{if(e&&!ie(Ae.trim())){await l.notification.show(`Please enter a valid Discord webhook URL before enabling Discord logging.`,`WARNING`),ke(!1),await I(h.ENABLE_DISCORD_LOGGING,!1);return}ke(e),await I(h.ENABLE_DISCORD_LOGGING,e)}})]}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)(Nh,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.discordUrl,children:`Discord Url:`})}),(0,P.jsx)(Fh,{theme:e,type:`text`,value:Ae,onChange:async e=>{let t=e.target.value,n=t.trim();je(t),await I(h.DISCORD_URL,n),O.log(`Discord URL:`,n)},placeholder:`https://discord.com/api/webhooks/...`,maxLength:200})]})]}),(0,P.jsxs)(tm,{theme:e,children:[(0,P.jsx)(jh,{theme:e,children:`Other`}),(0,P.jsxs)(Q,{theme:e,children:[(0,P.jsx)($,{theme:e,children:(0,P.jsx)(Y,{theme:e,text:X.enableConsoleLog,children:`Enable Console Log`})}),(0,P.jsx)(J,{label:`Enable Console Log`,isOn:Me,onChange:async e=>{Ne(e),O.setEnabled(e),await I(h.ENABLE_CONSOLE_LOG,e)}})]})]})]}),(0,P.jsx)(um,{isOpen:Be,title:`Confirm Import`,onClose:()=>Ve(!1),actions:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(nm,{theme:e,variant:`secondary`,onClick:()=>Ve(!1),children:`Cancel`}),(0,P.jsx)(nm,{theme:e,onClick:Xe,children:`Continue`})]}),children:(0,P.jsx)(Bh,{theme:e,children:`Import will overwrite duplicate records that share the same Name and Author. Continue?`})})]})};var Hh=x.div`
  ${{display:`flex`,height:`100%`,flexDirection:`column`,padding:`1rem`}}
`,Uh=x.div`
  ${{flex:`1 1 0%`,overflowY:`auto`,borderRadius:`0.5rem`,borderWidth:`2px`,"--tw-border-opacity":`1`,borderColor:`rgb(255 255 255 / var(--tw-border-opacity, 1))`,padding:`0.5rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  margin: 10px;
  white-space: break-spaces;
  word-wrap: break-word;
  margin-bottom: 50px;
`,Wh=x.div`
  ${{marginBottom:`0.5rem`,textAlign:`left`}}
`,Gh=x.span`
  ${{marginRight:`0.5rem`,fontSize:`0.75rem`,"--tw-text-opacity":`1`,color:`rgb(203 213 224 / var(--tw-text-opacity, 1))`}}
`,Kh=x.span`
  ${{fontSize:`0.875rem`,"--tw-text-opacity":`1`,color:`rgb(255 255 255 / var(--tw-text-opacity, 1))`}}
`;const qh=()=>{let e=Me(e=>e.messages),t=(0,M.useRef)(null),{theme:n}=ze();return(0,M.useEffect)(()=>{t.current?.scrollIntoView({behavior:`smooth`})},[e]),(0,P.jsx)(qu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,P.jsxs)(Hh,{children:[(0,P.jsx)(em,{theme:n,children:`System Log`}),(0,P.jsxs)(Uh,{children:[e.map(e=>(0,P.jsxs)(Wh,{children:[(0,P.jsx)(Gh,{children:e.timestamp}),(0,P.jsx)(Kh,{children:e.text})]},e.id)),(0,P.jsx)(`div`,{ref:t})]})]})})};function Jh(e,t){let n=e.replace(`#`,``);n.length===3&&(n=n.split(``).map(e=>e+e).join(``));let r=parseInt(n,16);return`rgba(${r>>16&255}, ${r>>8&255}, ${r&255}, ${t})`}var Yh=class{static async CenterViewportOnImage(e){let t=await l.scene.grid.getDpi(),n=await l.viewport.getScale(),r=await l.viewport.getWidth(),i=await l.viewport.getHeight(),a={x:r/2,y:i/2},o={x:a.x/n,y:a.y/n},s=await this.GetImageCenter(e,t),c={x:s.x-o.x,y:s.y-o.y},u={x:c.x*n*-1,y:c.y*n*-1};await l.viewport.animateTo({position:u,scale:n})}static async GetImageCenter(e,t){if(n(e)){let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{x:e.position.x-a+r/2,y:e.position.y-o+i/2}}else if(v(e)&&e.points.length>0)return{x:e.points[0].x,y:e.points[0].y};else return{x:e.position.x,y:e.position.y}}};const Xh=`${j}/effects`;var Zh=`${j}/effects-expired`,Qh=x.div`
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
  color: ${e=>b(e.theme.PRIMARY,.75)};
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
    background: ${e=>b(e.theme.OFFSET,.5)};
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
  background: ${e=>b(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,ug=x.div`
  color: ${e=>b(e.theme.PRIMARY,.8)};
  font-size: 12px;
`,dg=x.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,fg=x.p`
  color: ${e=>b(e.theme.PRIMARY,.75)};
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
  background: ${e=>e.$active?b(e.theme.OFFSET,.65):`rgba(0, 0, 0, 0.3)`};
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
`,_g=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const vg=({items:e,units:t,setItems:n,playerData:r})=>{let[i,a]=(0,M.useState)(null),[o,s]=(0,M.useState)(``),[c,d]=(0,M.useState)(`1`),[f,p]=(0,M.useState)(`rounds`),[m,h]=(0,M.useState)(`start`),[g,_]=(0,M.useState)(`neutral`),[v,y]=(0,M.useState)([]),[b,x]=(0,M.useState)(null),S=(0,M.useMemo)(()=>{let t=new Map;return e.forEach(e=>{e.metadata?.[u.ON_LIST]===!0&&t.set(e.id,_g(e.metadata?.[Xh]))}),t},[e]),C=e=>S.get(e)||[],w=async(t,r)=>{let i=r.filter(e=>e.remaining>0);n(e.map(e=>{if(e.id!==t)return e;let n={...e.metadata||{}};return i.length>0?n[Xh]=i:delete n[Xh],{...e,metadata:n}})),await l.scene.items.updateItems([t],e=>{let t={...e[0].metadata||{}};i.length>0?t[Xh]=i:delete t[Xh],e[0].metadata=t})},T=async e=>{try{await l.broadcast.sendMessage(Zh,{message:e},{destination:`ALL`})}catch(t){O.error(`Failed to broadcast expired effect message`,t),await l.notification.show(e,`WARNING`)}},E=async(t,n)=>{if(String(r?.role||``).toUpperCase()!==`GM`)return;let i=[],a=[];e.forEach(e=>{if(e.metadata?.[u.ON_LIST]!==!0)return;let r=_g(e.metadata?.[Xh]);if(r.length===0)return;let o=!1,s=[];r.forEach(r=>{if(!(r.endTiming===t&&(r.durationType===`turns`||e.id===n))){s.push(r);return}let i=r.remaining-1;if(o=!0,i<=0){a.push(`${e.name||`Unit`}: ${r.name} expired`);return}s.push({...r,remaining:i})}),o&&i.push({unitId:e.id,effects:s})});for(let e of i)await w(e.unitId,e.effects);if(a.length>0)for(let e of a)await T(e)},ee=(0,M.useMemo)(()=>i&&t.find(e=>e.id===i)||null,[i,t]),te=(0,M.useMemo)(()=>i?C(i):[],[i,S]);return(0,M.useEffect)(()=>{let e=l.broadcast.onMessage(Zh,async e=>{let t=e.data?.message;typeof t!=`string`||!t.trim()||await l.notification.show(t,`WARNING`)});return()=>{e()}},[]),{effectsModalUnitId:i,selectedEffectsUnit:ee,activeEffectsForSelectedUnit:te,effectNameInput:o,setEffectNameInput:s,effectDurationInput:c,setEffectDurationInput:d,effectDurationType:f,setEffectDurationType:p,effectEndTiming:m,setEffectEndTiming:h,effectType:g,setEffectType:_,effectTargetIds:v,setEffectTargetIds:e=>{y(Array.from(new Set(e)))},effectsModalError:b,units:t,getEffectsForUnit:C,handleOpenEffectsModal:e=>{x(null),s(``),d(`1`),p(`rounds`),h(`start`),_(`neutral`),y([e]),a(e)},handleCloseEffectsModal:()=>{a(null),x(null)},handleAddEffect:async()=>{if(!i)return;let n=o.trim(),r=parseInt(c,10);if(!n){x(`Enter an effect name.`);return}if(!Number.isFinite(r)||r<=0){x(`Duration must be a positive number.`);return}let a=Array.from(new Set(v.filter(e=>t.some(t=>t.id===e))));if(a.length===0){x(`Select at least one target.`);return}let l=C(i),u=ee?.name||e.find(e=>e.id===i)?.name||`Unknown`,p={id:crypto.randomUUID(),name:n,remaining:r,durationType:f,endTiming:m,effectType:g,targets:a,createdByName:u,createdById:i};await w(i,[...l,p]),x(null),s(``),d(`1`),_(`neutral`),y([i])},handleDeleteEffect:async e=>{i&&await w(i,C(i).filter(t=>t.id!==e))},processEffectsForTurnEvent:E}},yg=({manager:e})=>{let{theme:t}=ze(),n=(0,M.useMemo)(()=>{let t=new Map;return e.units.forEach(e=>{t.set(e.id,e.name)}),t},[e.units]),r=e=>e===`buff`?`Buff`:e===`debuff`?`Debuff`:`Neutral`,i=e=>{if(e.length===0)return`No targets`;let t=e.map(e=>n.get(e)).filter(e=>typeof e==`string`&&e.length>0);return t.length===0?`${e.length} target${e.length===1?``:`s`}`:t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`};return(0,P.jsx)(um,{isOpen:!!e.effectsModalUnitId,title:e.selectedEffectsUnit?`Effects: ${e.selectedEffectsUnit.name}`:`Effects`,onClose:e.handleCloseEffectsModal,minWidth:`520px`,maxWidth:`600px`,children:(0,P.jsxs)(Qh,{children:[(0,P.jsxs)($h,{children:[(0,P.jsxs)(eg,{children:[(0,P.jsxs)(tg,{style:{flex:`0 0 120px`},children:[(0,P.jsx)(rg,{theme:t,children:`Effect`}),(0,P.jsx)(ig,{theme:t,type:`text`,placeholder:`Name`,value:e.effectNameInput,onChange:t=>e.setEffectNameInput(t.target.value)})]}),(0,P.jsxs)(tg,{style:{flex:`0 0 140px`},children:[(0,P.jsx)(rg,{theme:t,children:`Duration`}),(0,P.jsx)(ig,{theme:t,type:`number`,min:1,value:e.effectDurationInput,onChange:t=>e.setEffectDurationInput(t.target.value)})]}),(0,P.jsxs)(tg,{style:{flex:`0 0 120px`},children:[(0,P.jsx)(rg,{theme:t,children:`By`}),(0,P.jsxs)(ag,{theme:t,value:e.effectDurationType,onChange:t=>e.setEffectDurationType(t.target.value),children:[(0,P.jsx)(`option`,{value:`turns`,children:`Turns`}),(0,P.jsx)(`option`,{value:`rounds`,children:`Rounds`})]})]})]}),(0,P.jsxs)(eg,{children:[(0,P.jsxs)(tg,{style:{flex:`0 0 120px`},children:[(0,P.jsx)(rg,{theme:t,children:`Type`}),(0,P.jsxs)(ag,{theme:t,value:e.effectType,onChange:t=>e.setEffectType(t.target.value),children:[(0,P.jsx)(`option`,{value:`neutral`,children:`Neutral`}),(0,P.jsx)(`option`,{value:`buff`,children:`Buff`}),(0,P.jsx)(`option`,{value:`debuff`,children:`Debuff`})]})]}),(0,P.jsxs)(tg,{style:{flex:`0 0 140px`},children:[(0,P.jsx)(rg,{theme:t,children:`Ends at`}),(0,P.jsxs)(ag,{theme:t,value:e.effectEndTiming,onChange:t=>e.setEffectEndTiming(t.target.value),children:[(0,P.jsx)(`option`,{value:`start`,children:`Start of turn`}),(0,P.jsx)(`option`,{value:`end`,children:`End of turn`})]})]}),(0,P.jsx)(ng,{children:(0,P.jsx)(sg,{theme:t,onClick:e.handleAddEffect,style:{width:`100%`},children:`Add`})})]})]}),(0,P.jsxs)(tg,{children:[(0,P.jsx)(rg,{theme:t,children:`Targets`}),(0,P.jsx)(og,{theme:t,multiple:!0,value:e.effectTargetIds,onChange:t=>{let n=Array.from(t.target.selectedOptions).map(e=>e.value);e.setEffectTargetIds(n)},children:e.units.map(e=>(0,P.jsx)(`option`,{value:e.id,children:e.name},e.id))})]}),e.effectsModalError&&(0,P.jsx)(pg,{theme:t,children:e.effectsModalError}),e.activeEffectsForSelectedUnit.length===0?(0,P.jsx)(fg,{theme:t,children:`No active effects.`}):(0,P.jsx)(cg,{children:e.activeEffectsForSelectedUnit.map(n=>(0,P.jsxs)(lg,{theme:t,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(dg,{theme:t,children:n.name}),(0,P.jsxs)(ug,{theme:t,children:[r(n.effectType),` • `,n.remaining,` `,n.durationType,` • ends at `,n.endTiming===`start`?`start of turn`:`end of turn`,` • by `,n.createdByName]}),(0,P.jsxs)(ug,{theme:t,children:[`Targets: `,i(n.targets)]})]}),(0,P.jsx)(sg,{theme:t,onClick:()=>{e.handleDeleteEffect(n.id)},children:`Delete`})]},n.id))})]})})},bg=({activeEffectsCount:e,canInteract:t,onOpen:n,icon:r})=>{let{theme:i}=ze();return(0,P.jsxs)(mg,{children:[(0,P.jsx)(hg,{theme:i,$active:e>0,disabled:!t,onClick:()=>{t&&n()},children:r||(0,P.jsx)(Rd,{})}),e>0&&(0,P.jsx)(gg,{theme:i,children:e>99?`99+`:e})]})};var xg=x.td`
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
`;const Cg=({theme:e,unit:t,canInteract:n,elevationDraftValue:r,onElevationDraftChange:i,onCommitElevationChange:a})=>(0,P.jsx)(xg,{theme:e,children:(0,P.jsx)(Sg,{theme:e,type:`text`,inputMode:`decimal`,min:-999,max:999,step:1,value:r??String(t.elevation??0),readOnly:!n,onChange:n?e=>i(t.id,e.target.value):void 0,onBlur:n?e=>a(t.id,e.target.value):void 0,onKeyDown:e=>{n&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}})}),wg=({theme:e,canInteract:t,icon:n,activeEffectsCount:r,onOpen:i})=>(0,P.jsx)(xg,{theme:e,children:(0,P.jsx)(bg,{activeEffectsCount:r,canInteract:t,icon:n||(0,P.jsx)(Rd,{}),onOpen:i})});var Tg=`${j}/elevation-badge`,Eg=`${j}/elevation-badge-owner`,Dg=`${j}/elevation`,Og=200,kg=40,Ag=60,jg=120,Mg=24,Ng=(e,t)=>{if(!e)return;if(e.startsWith(`#`))return Jh(e,t);let n=e.match(/^rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\)$/i);if(n){let[,e,r,i]=n;return`rgba(${e}, ${r}, ${i}, ${t})`}let r=e.match(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i);if(r){let[,e,n,i]=r;return`rgba(${e}, ${n}, ${i}, ${t})`}return e},Pg=e=>`
    0 1px 1px ${b(e.BACKGROUND,.95)},
    0 0 2px ${b(e.BACKGROUND,.85)}
  `,Fg={anchor:Ju,aperture:Yu,award:Qu,batterycharging:ed,book:rd,calendar:ad,clock:dd,cloudlightning:fd,drama:_d,carrot:od,bone:td,compass:md,dollarsign:gd,feather:bd,eye:vd,heart:Td,moon:Od,music:kd,shield:Nd,star:Ld,sun:Rd,target:Vd,users:Wd,wind:Kd,zap:qd,sword:zd,swords:Bd,axe:$u,bowarrow:id,coins:pd,wand:Gd,flower:Sd,skull:Pd,castle:sd,cross:hd,testtubediagonal:Hd,squirrel:Id,snowflake:Fd,shell:Md,pickaxe:jd,heartplus:wd,heartcrack:Cd,fan:yd},Ig=x.div`
  padding: 2px;
  width: 100%;
`,Lg=x.h1`
  color: ${e=>e.theme.PRIMARY};
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`,Rg=x.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
`,zg=x.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$compactMode?`end`:`center`};
  gap: ${e=>e.$compactMode?`8px`:`16px`};
  position: relative;
  padding: ${e=>e.$compactMode?`4px 8px`:`8px`};
  background-color: ${e=>b(e.theme.BACKGROUND,.75)};
  border-top: 2px solid ${e=>e.theme.BORDER};
`,Bg=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.$compactMode?`8px`:`16px`};
`,Vg=x.button`
  background: ${e=>e.disabled?b(e.theme.BORDER,.3):b(e.theme.OFFSET,.5)};
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
    background: ${e=>e.disabled?b(e.theme.BORDER,.3):e.theme.OFFSET};
  }
  
  &:active {
    transform: ${e=>e.disabled?`none`:`scale(0.95)`};
  }

  svg {
    filter: drop-shadow(0 1px 1px ${e=>b(e.theme.BACKGROUND,.95)})
      drop-shadow(0 0 2px ${e=>b(e.theme.BACKGROUND,.75)});
  }
`,Hg=x(Vg)`
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
    filter: drop-shadow(0 1px 1px ${e=>b(e.theme.BACKGROUND,.95)})
      drop-shadow(0 0 3px ${e=>b(e.theme.BACKGROUND,.8)});
  }
`,Ug=x(Vg)`
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
`,Wg=x(Vg)`
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
`,Gg=x.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: ${e=>e.$compactMode?`14px`:`16px`};
  font-weight: 600;
  min-width: ${e=>e.$compactMode?`44px`:`80px`};
  text-align: center;
`,Kg=x.table`
  width: ${e=>e.$compact?`max-content`:`100%`};
  min-width: ${e=>e.$compact?`${Og}px`:`100%`};
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
`,qg=x.thead`
  background-color: ${e=>b(e.theme.BACKGROUND,.75)};
`,Jg=x.tr``,Yg=x.th`
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
`,Xg=x.div`
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
  border: 1px solid ${e=>b(e.theme.BORDER,.9)};
  background: ${e=>b(e.theme.BACKGROUND,.96)};
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
  line-height: 1.3;
  text-align: left;
  box-shadow: 0 8px 24px ${e=>b(e.theme.BACKGROUND,.65)};
  backdrop-filter: blur(8px);

  &::after {
    content: '';
    position: absolute;
    left: clamp(12px, ${e=>`${e.$arrowX}px`}, calc(100% - 12px));
    ${e=>e.$placement===`top`?`top: 100%;`:`bottom: 100%;`}
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    ${e=>e.$placement===`top`?`border-top: 6px solid ${b(e.theme.BACKGROUND,.96)};`:`border-bottom: 6px solid ${b(e.theme.BACKGROUND,.96)};`}
  }
`,Zg=x.tbody``,Qg=x.tr`
  ${e=>e.$isCurrentTurn&&e.theme&&`
    background: linear-gradient(to left, ${b(e.theme.OFFSET,.4)} 0%, transparent 100%);
  `}
  cursor: context-menu;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &:not(:last-child) td {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`,$g=x.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,e_=x($g)`
  font-weight: 700;
  font-size: 18px;
  color: ${e=>e.theme.OFFSET};
  min-width: 60px;
`,t_=x($g)`
  min-width: 48px;
`,n_=x.button`
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
`,r_=x.img`
  width: 18px;
  height: 18px;
  pointer-events: none;
`,i_=x.div`
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
`,a_=x.input`
  background: ${e=>e.$isRollable?b(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.3)`};
  border: 1px solid ${e=>e.$isRollable?b(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?Pg(e.theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${b(e.theme.BACKGROUND,.28)}, 0 0 0 1px ${b(e.theme.OFFSET,.18)}`:`none`};
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
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${b(e.theme.OFFSET,.35)}, inset 0 0 0 1px ${b(e.theme.BACKGROUND,.35)}`:`none`};
  }
`,o_=x($g)`
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
  text-shadow: ${e=>e.$outlineColor?`
        1px 1px 2px black,
        2px 2px 2px ${e.$outlineColor},
        4px 4px 4px ${e.$outlineColor}
      `:`none`};
`,s_=x.input`
  background: ${e=>e.$isRollable?b(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.4)`};
  border: 1px solid ${e=>e.$isRollable?b(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?Pg(e.theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${b(e.theme.BACKGROUND,.28)}, 0 0 0 1px ${b(e.theme.OFFSET,.18)}`:`none`};
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
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${b(e.theme.OFFSET,.35)}, inset 0 0 0 1px ${b(e.theme.BACKGROUND,.35)}`:`none`};
  }
`,c_=x.span`
  margin: 0 2px;
  color: ${e=>e.theme.OFFSET};
  font-weight: 500;
`,l_=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,u_=x.button`
  background: ${e=>e.$active?b(e.theme.OFFSET,.65):`rgba(0, 0, 0, 0.3)`};
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
`,d_=x.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.BORDER};
  cursor: pointer;
  margin: 0 2px;
  background: ${e=>b(e.theme.BACKGROUND,.55)};
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
    box-shadow: ${e=>`0 0 0 2px ${b(e.theme.PRIMARY,.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,f_=x.button`
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
`,p_=x.div`
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
`,m_=x($g)`
  width: 24px;
  min-width: 24px;
  max-width: 24px;
  padding: 0;
  position: relative;
`,h_=x.div`
  position: absolute;
  inset: 0;
  min-height: 40px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0 10px;
`,g_=x.div`
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
            ${b(e.theme.BORDER,.2)},
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
`,__=x.div`
  flex: 1;
  height: 100%;
  padding: 0 8px;
  margin: 0 -10px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`,v_=x.div`
  width: 6px;
  flex: 1;
  height: 100%;
  background-repeat: repeat-y;
  background-position: center;
  background-size: 6px 16px;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='16' viewBox='0 0 6 16' preserveAspectRatio='none'%3E%3Cpolyline points='3,0 0,4 6,8 0,12 3,16' fill='none' stroke='${encodeURIComponent(e.theme.BORDER)}' stroke-width='1.2'/%3E%3C/svg%3E")`};
`,y_=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
`,b_=x.button`
  width: 100%;
  text-align: left;
  background: ${e=>e.$isCurrent?b(e.theme.OFFSET,.45):b(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  padding: 8px 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>b(e.theme.OFFSET,.55)};
  }
`,x_=x.p`
  color: ${e=>b(e.theme.PRIMARY,.8)};
  margin: 0 0 12px 0;
  font-size: 13px;
`,S_=x.p`
  color: #ff6b6b;
  margin: 10px 0 0 0;
  font-size: 13px;
`,C_=x.div`
  height: 1px;
  margin: 12px 0;
  background: ${e=>b(e.theme.BORDER,.7)};
`,w_=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>b(e.theme.BACKGROUND,.35)};
`,T_=x.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,E_=x.div`
  color: ${e=>b(e.theme.PRIMARY,.75)};
  font-size: 11px;
`,D_=x.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`,O_=x.button`
  width: 50px;
  height: 28px;
  padding: 0;
  position: relative;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 999px;
  background: ${e=>e.$active?b(e.theme.OFFSET,.55):b(e.theme.BACKGROUND,.45)};
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
    background: ${e=>e.$active?b(e.theme.OFFSET,.7):b(e.theme.OFFSET,.45)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,k_=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,A_=x.p`
  color: ${e=>b(e.theme.PRIMARY,.78)};
  margin: 0;
  font-size: 12px;
`,j_=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 320px;
  overflow-y: auto;
`,M_=x.div`
  background: ${e=>b(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,N_=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,P_=x.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #4b5563;
  background: rgba(0, 0, 0, 0.2);
  accent-color: #ffffff;
  margin: 0;
  pointer-events: none;
`,F_=x.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
`,I_=x.div`
  color: ${e=>b(e.theme.PRIMARY,.85)};
  font-size: 12px;
  font-style: italic;
  line-height: 1.25;
  white-space: pre-wrap;
`,L_=x.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`,R_=x.button`
  border: 1px solid ${e=>b(e.theme.OFFSET,.7)};
  border-radius: 999px;
  background: ${e=>b(e.theme.OFFSET,.35)};
  color: ${e=>e.theme.PRIMARY};
  font-size: 11px;
  padding: 2px 8px;
  cursor: pointer;

  &:hover {
    background: ${e=>b(e.theme.OFFSET,.55)};
  }
`,z_=x.p`
  color: ${e=>b(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,B_=x.div`
  width: 100%;
  min-height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>b(e.theme.BORDER,.8)};
  background: ${e=>b(e.theme.BACKGROUND,.55)};
`,V_=x.div`
  width: ${e=>e.$small?`40px`:`60px`};
  min-width: ${e=>e.$small?`40px`:`60px`};
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>b(e.theme.BORDER,.8)};
  background: ${e=>b(e.theme.BACKGROUND,.55)};
`,H_=(e,t)=>{let n=[{id:crypto.randomUUID(),type:`initiative`,description:`Initiative value used for turn order. Can be edited via Right-Click or rolled with Click.`},{id:crypto.randomUUID(),type:`name`,description:`Name of the unit or character.`}],r=t?[{id:`card-column`,type:`card-column`}]:[];if(!e||e.length===0)return[...n,...r];let i=[...e].sort((e,t)=>e.col-t.col).map(e=>({id:e.id,type:e.type,name:e.styles?.labelName,useIcon:e.styles?.labelMode===`icon`,iconType:e.styles?.labelIcon,description:e.styles?.description,styles:e.styles}));return[...n,...i,...r]};const U_=()=>{let{theme:e}=ze(),{listLayout:t,attributes:r,isLoading:i}=Ah();N(e=>e.roomMetadata);let a=N(e=>e.sceneMetadata),o=N(e=>e.items),s=N(e=>e.partyData),c=N(e=>e.playerData),f=N(e=>e.gridDpi),p=N(e=>e.setItems),[m,g]=(0,M.useState)([]),[_,v]=(0,M.useState)([]),[y,b]=(0,M.useState)(null),[x,S]=(0,M.useState)(1),[C,w]=(0,M.useState)(new Set),[T,E]=(0,M.useState)(null),[ee,D]=(0,M.useState)(null),[re,ie]=(0,M.useState)(!1),[ae,oe]=(0,M.useState)(!1),[se,ce]=(0,M.useState)(!1),[le,ue]=(0,M.useState)({}),[k,de]=(0,M.useState)({}),[fe,pe]=(0,M.useState)(null),[me,he]=(0,M.useState)({}),[ge,_e]=(0,M.useState)(!1),[ye,be]=(0,M.useState)(!1),[A,Se]=(0,M.useState)(!1),[Ce,we]=(0,M.useState)(()=>window.innerWidth<400),[Te,Ee]=(0,M.useState)(null),De=(0,M.useRef)(null),Oe=(0,M.useRef)({}),ke=(0,M.useRef)({}),Ae=(0,M.useRef)(null);(0,M.useEffect)(()=>{let e=()=>{we(window.innerWidth<400)};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let je=a,Me=je[h.REVERSE_INITIATIVE]||!1,Ne=je[h.POPCORN_INITIATIVE]||!1,Pe=je[h.SHOW_CARD_ACCESS]||!1,Fe=je[h.SHOW_NON_PARTY_UNITS]||!1,Ie=je[h.SHOW_LIST_HP_NUMBERS],Le=typeof Ie==`boolean`?Ie:!0,Re=je[h.DICE_RANGE]||``,Be=je[h.INITIATIVE_MODIFIER_BID]||``,Ve=je[h.INITIATIVE_MODIFIER_EXPR]||`@STAT`,F=Ve.trim().length>0?Ve:`@STAT`,I=je[h.SHOW_OWNER_ONLY_EDIT]||!1,He=String(c?.role||``).toUpperCase()===`GM`,Ue=c?.id||``,We=te(h.INITIATIVE_LIST_COMPACT,Ue);(0,M.useEffect)(()=>{let e=a[We],t=a[h.INITIATIVE_LIST_COMPACT];Se(typeof e==`boolean`?e:typeof t==`boolean`?t:!1)},[a,We]);let Ge=async()=>{let e=!A;Se(e);try{await l.scene.setMetadata({[We]:e})}catch(t){O.error(`Failed to persist initiative list compact mode`,t),Se(!e)}},Ke=async({notation:e,actionName:t,tokenName:n,senderId:r,senderColor:i})=>{try{await xe({notation:e,actionName:t,senderName:n,senderId:r,senderColor:i},je)}catch(t){O.error(`Failed to send dice roll from InitiativeList`,e,t),O.log(e)}},qe=e=>{let t=e;if(typeof t==`string`)try{t=JSON.parse(t)}catch{return[]}return Array.isArray(t)?t.map((e,t)=>{let n=e&&typeof e==`object`?e:{},r=n.inUse,i=typeof r==`boolean`?r:typeof r==`string`?[`true`,`1`,`yes`].includes(r.trim().toLowerCase()):typeof r==`number`?r===1:void 0;return{id:typeof n.id==`string`&&n.id?n.id:`entry-${t}`,name:typeof n.name==`string`?n.name:``,description:typeof n.description==`string`?n.description:``,...i===void 0?{}:{inUse:i}}}):[]};(0,M.useEffect)(()=>{g(o.filter(e=>e.metadata?.[u.ON_LIST]===!0).map(e=>{let t=e.metadata?.[u.INITIATIVE]||0,n=e.metadata[u.UNIT_NAME]||e.name||`Unknown`,r=e.metadata?.[u.BOSS_MODE]===!0,i=e.metadata?.[Dg]||0,a=s.find(t=>t.id===e.createdUserId)||(c?.id===e.createdUserId?c:void 0),o=String(a?.role||``).toUpperCase()===`GM`,l=a?.color||(c?.id===e.createdUserId?c?.color:void 0),d=o?void 0:Ng(l,1),f={};return Object.keys(e.metadata||{}).forEach(t=>{t.startsWith(`com.battle-system.forge`)&&(f[t]=e.metadata?.[t])}),{id:e.id,initiative:t,name:n,isBoss:r,elevation:i,attributes:f,createdUserId:e.createdUserId,ownerNameOutlineColor:d,isInParty:e.metadata?.[u.IN_PARTY]===!0,isVisible:e.visible!==!1}}))},[o,s,c]);let L=(0,M.useMemo)(()=>Ne?[...m].sort((e,t)=>e.name.localeCompare(t.name)):[...m].sort((e,t)=>e.initiative===t.initiative?e.name.localeCompare(t.name):Me?e.initiative-t.initiative:t.initiative-e.initiative),[m,Me,Ne]),Je=vg({items:o,units:L,setItems:p,playerData:c}),Ye=(0,M.useMemo)(()=>{let e=new Map;return s.forEach(t=>{e.set(t.id,t)}),c&&!e.has(c.id)&&e.set(c.id,c),Array.from(e.values()).sort((e,t)=>e.name.localeCompare(t.name))},[s,c]),Xe=(e,t)=>{let n=parseInt(t)||0;g(t=>t.map(t=>t.id===e?{...t,initiative:n}:t))},Ze=(e,t)=>{p(o.map(n=>n.id===e?{...n,metadata:{...n.metadata,[u.INITIATIVE]:t}}:n)),l.scene.items.updateItems([e],e=>{e[0].metadata[u.INITIATIVE]=t})},Qe=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},$e=(e,t,n)=>(typeof t==`number`&&(e=Math.max(t,e)),typeof n==`number`&&(e=Math.min(n,e)),e),et=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(r.length===0)return $e(0,i,a);let o=r.match(/^([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),s=r.match(/^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),c=null;if(o){let e=o[1],n=parseFloat(o[2]);switch(e){case`+`:c=t+n;break;case`-`:c=t-n;break;case`*`:c=t*n;break;case`/`:c=n===0?t:t/n;break}}else if(s){let e=parseFloat(s[1]),t=s[2],n=parseFloat(s[3]);switch(t){case`+`:c=e+n;break;case`-`:c=e-n;break;case`*`:c=e*n;break;case`/`:c=n===0?e:e/n;break}}else{let e=parseFloat(r);Number.isNaN(e)||(c=e)}return $e(c===null||!Number.isFinite(c)?t:Math.trunc(c),i,a)},tt=e=>{let t=Qe(Re),n=Math.floor(Math.random()*t)+1,r=0;if(Be){let t=m.find(t=>t.id===e);if(t){let e=t.attributes?.[`${j}/${Be}`],n=Number(e),i=Number.isFinite(n)?n:0,a=ve(F.replace(/@STAT/gi,`@${Be}`).replace(/\bx\b/gi,`@${Be}`),{bidValueMap:{[Be]:i},onMissingBid:`useZero`});if(a.valid&&a.notation){let e=Number(a.notation);Number.isFinite(e)&&(r=Math.trunc(e))}}}let i=n+r;Xe(e,String(i)),Ze(e,i)},nt=(e,t)=>{ue(n=>({...n,[e]:t}))},rt=(e,t)=>{let n=et(t,m.find(t=>t.id===e)?.initiative??0);ue(t=>{let{[e]:n,...r}=t;return r}),g(t=>t.map(t=>t.id===e?{...t,initiative:n}:t)),Ze(e,n)},it=e=>`ELE${e.slice(3)}`,at=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o}},ot=async(e,t)=>{let r=it(e);try{await l.scene.items.deleteItems([r])}catch{}if(t===0)return;let i=o.find(t=>t.id===e);if(!i||!n(i))return;let a=at(i,f),s=`${t>0?`🡹`:`🡻`}${Math.abs(t)}`,c=ne().id(r).name(`Elevation Badge`).plainText(s).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(36).fontFamily(`Segoe UI`).textAlign(`CENTER`).position({x:a.minX-40,y:a.minY}).metadata({[Tg]:!0,[Eg]:e}).attachedTo(e).visible(i.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build();try{await l.scene.items.addItems([c])}catch(t){O.error(`Failed to add elevation badge`,e,t)}},st=(e,t)=>{de(n=>({...n,[e]:t}))},ct=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(!r)return $e(0,i,a);let o=parseFloat(r);return $e(Number.isFinite(o)?Math.trunc(o):t,i,a)},lt=(e,t)=>{let n=ct(t,m.find(t=>t.id===e)?.elevation??0,{min:-999,max:999});de(t=>{let{[e]:n,...r}=t;return r}),g(t=>t.map(t=>t.id===e?{...t,elevation:n}:t)),p(o.map(t=>t.id===e?{...t,metadata:{...t.metadata,[Dg]:n}}:t)),l.scene.items.updateItems([e],e=>{e[0].metadata[Dg]=n}),ot(e,n)},ut=(e,t)=>{let n=e.trim();if(!n)return e;let r=/^([+\-*/])\s*-?\d+(?:\.\d+)?$/.test(n),i=/^-?\d+(?:\.\d+)?\s*[+\-*/]\s*-?\d+(?:\.\d+)?$/.test(n),a=/^-?\d+(?:\.\d+)?$/.test(n);if(!r&&!i&&!a)return e;let o=typeof t==`number`?t:parseFloat(String(t)),s=Number.isFinite(o)?o:0;return String(et(n,s))},dt=(e,t,n)=>{let r=`${j}/${t}`,i=m.find(t=>t.id===e)?.attributes?.[r],a=ut(n,i);g(t=>t.map(t=>t.id===e?{...t,attributes:{...t.attributes,[r]:a}}:t)),p(o.map(t=>t.id===e?{...t,metadata:{...t.metadata,[r]:a}}:t)),l.scene.items.updateItems([e],e=>{e[0].metadata[r]=a})},ft=e=>r.find(t=>t.attr_bid===e)||null,pt=e=>{let t=ft(e);return typeof t?.attr_func==`string`&&t.attr_func.trim().length>0},mt=e=>{let t={};for(let n of r){let r=`${j}/${n.attr_bid}`,i=e.attributes?.[r];if(i==null||i===``)continue;let a=Number(i);Number.isFinite(a)&&(t[n.attr_bid]=a)}return t},ht=async(e,t)=>{let n=ft(t)?.attr_func;if(typeof n!=`string`||n.trim().length===0)return;let r=ve(n,{bidValueMap:mt(e),onMissingBid:`error`});if(!r.valid||!r.notation){O.warn(`Could not resolve notation for initiative list value-column`,{unitId:e.id,bid:t,error:r.error});return}let i=ft(t)?.attr_name||t,a=s.find(t=>t.id===e.createdUserId);await Ke({notation:r.notation,actionName:i,tokenName:e.name,senderId:e.createdUserId||c?.id||`unknown`,senderColor:a?.color||c?.color||`#ffffff`})};(0,M.useEffect)(()=>()=>{Object.values(Oe.current).forEach(e=>{window.clearTimeout(e)})},[]);let gt=(e,t)=>`value-column:${e}:${t}`,_t=e=>!!me[e],vt=(e,t)=>{he(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},yt=e=>{he(t=>{let{[e]:n,...r}=t;return r})},bt=(e,t)=>{let n=Oe.current[e];n&&window.clearTimeout(n),Oe.current[e]=window.setTimeout(()=>{ke.current[e]=!0,vt(e,t),delete Oe.current[e]},500)},xt=e=>{let t=Oe.current[e];t&&(window.clearTimeout(t),delete Oe.current[e])},St=e=>ke.current[e]?(delete ke.current[e],!0):!1,Ct=e=>{if(!I||He)return!0;let t=c?.id;return t?e.createdUserId===t:!1},wt=e=>He?!0:e.isVisible,Tt=e=>He||Fe?!1:!e.isInParty;(0,M.useEffect)(()=>{i||v(H_(t,Pe))},[t,i,Pe]),(0,M.useEffect)(()=>{let e=a[h.CURRENT_TURN],t=a[h.CURRENT_ROUND];e?b(e):L.length>0&&b(L[0].id),t&&S(t)},[a,L]);let Et=async()=>{if(L.length===0)return;y&&await Je.processEffectsForTurnEvent(`end`,y);let e=L.findIndex(e=>e.id===y)+1;if(e>=L.length){let e=x+1;S(e),b(L[0].id),await l.scene.setMetadata({[h.CURRENT_TURN]:L[0].id,[h.CURRENT_ROUND]:e}),await Je.processEffectsForTurnEvent(`start`,L[0].id)}else b(L[e].id),await l.scene.setMetadata({[h.CURRENT_TURN]:L[e].id}),await Je.processEffectsForTurnEvent(`start`,L[e].id)},Dt=async()=>{if(L.length===0)return;let e=L.findIndex(e=>e.id===y)-1;if(e<0){let e=Math.max(1,x-1);S(e),b(L[L.length-1].id),await l.scene.setMetadata({[h.CURRENT_TURN]:L[L.length-1].id,[h.CURRENT_ROUND]:e})}else b(L[e].id),await l.scene.setMetadata({[h.CURRENT_TURN]:L[e].id})},Ot=async e=>{Ne&&(C.has(e)||(b(e),await l.scene.setMetadata({[h.CURRENT_TURN]:e}),await Je.processEffectsForTurnEvent(`start`,e)))},kt=async()=>{y&&(await Je.processEffectsForTurnEvent(`end`,y),w(e=>new Set([...e,y])),C.size+1,L.length)},At=async()=>{let e=x+1;S(e),w(new Set),b(null),await l.scene.setMetadata({[h.CURRENT_TURN]:null,[h.CURRENT_ROUND]:e})},R=async e=>{be(!0);try{if(e===`clear-list`){let e=o.filter(e=>e.metadata?.[u.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await l.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata&&u.ON_LIST in e.metadata&&delete e.metadata[u.ON_LIST]})}),p(o.map(e=>{if(e.metadata?.[u.ON_LIST]!==!0)return e;let t={...e.metadata||{}};return delete t[u.ON_LIST],{...e,metadata:t}})))}if(e===`reset-initiative`){let e=o.filter(e=>e.metadata?.[u.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await l.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata[u.INITIATIVE]=0})}),p(o.map(e=>e.metadata?.[u.ON_LIST]===!0?{...e,metadata:{...e.metadata||{},[u.INITIATIVE]:0}}:e)),g(e=>e.map(e=>o.some(t=>t.id===e.id&&t.metadata?.[u.ON_LIST]===!0)?{...e,initiative:0}:e)),ue({}))}let t=e===`clear-list`?null:e===`reset-initiative`?[...L].sort((e,t)=>e.name.localeCompare(t.name))[0]?.id??null:L[0]?.id??null;S(1),b(t),w(new Set),await l.scene.setMetadata({[h.CURRENT_TURN]:t,[h.CURRENT_ROUND]:1}),_e(!1)}catch(t){O.error(`Failed to reset encounter state`,{mode:e,error:t})}finally{be(!1)}},jt=async e=>{let t=o.find(t=>t.id===e);if(t)try{await Yh.CenterViewportOnImage(t)}catch(t){O.error(`Failed to center viewport on unit`,e,t)}},z=async(e,t)=>{try{let n=await l.viewport.getHeight(),r=n>800?700:n-100;await l.popover.open({id:d.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(t)}`,height:r,width:350,anchorElementId:e,hidePaper:!0,disableClickAway:!0})}catch(e){O.error(`Failed to open cards popover`,e)}},Mt=(e,t)=>{e.preventDefault(),e.stopPropagation(),D(null),E(t)},Nt=async e=>{if(T){if(!o.find(e=>e.id===T)){D(`Token not found in scene cache.`);return}ie(!0),D(null);try{await l.scene.items.updateItems([T],t=>{let n=t[0];n.createdUserId=e}),p(o.map(t=>t.id===T?{...t,createdUserId:e}:t)),E(null)}catch(t){O.error(`Failed to reassign token owner`,T,e,t),D(`Unable to assign token owner. Ensure you have permission to edit this token.`)}finally{ie(!1)}}},Pt=async()=>{if(!T)return;let e=o.find(e=>e.id===T);if(!e){D(`Token not found in scene cache.`);return}let t=e.metadata?.[u.BOSS_MODE]!==!0;if(t&&o.filter(e=>e.id!==T&&e.metadata?.[u.ON_LIST]===!0&&e.metadata?.[u.BOSS_MODE]===!0).length>=2){D(`A maximum of 2 bosses can be enabled at once.`);return}oe(!0),D(null);try{await l.scene.items.updateItems([T],e=>{let n={...e[0].metadata||{}};n[u.BOSS_MODE]=t,e[0].metadata=n}),p(o.map(e=>e.id===T?{...e,metadata:{...e.metadata||{},[u.BOSS_MODE]:t}}:e))}catch(e){O.error(`Failed to toggle boss mode`,T,e),D(`Unable to update boss mode for this token.`)}finally{oe(!1)}},Ft=async()=>{if(T){if(!o.find(e=>e.id===T)){D(`Token not found in scene cache.`);return}ce(!0),D(null);try{await l.scene.items.updateItems([T],e=>{let t={...e[0].metadata||{}};u.ON_LIST in t&&delete t[u.ON_LIST],e[0].metadata=t}),p(o.map(e=>{if(e.id!==T)return e;let t={...e.metadata||{}};return delete t[u.ON_LIST],{...e,metadata:t}})),E(null)}catch(e){O.error(`Failed to remove token from initiative list`,T,e),D(`Unable to remove token from initiative list.`)}finally{ce(!1)}}},It=(0,M.useMemo)(()=>T&&L.find(e=>e.id===T)||null,[T,L]),Lt=(0,M.useMemo)(()=>T&&o.find(e=>e.id===T)||null,[T,o]),Rt=Lt?.metadata?.[u.BOSS_MODE]===!0,zt=(0,M.useMemo)(()=>fe&&L.find(e=>e.id===fe.unitId)||null,[fe,L]),Bt=(0,M.useMemo)(()=>fe&&r.find(e=>e.attr_bid===fe.bid)||null,[r,fe]),Vt=(0,M.useMemo)(()=>{if(!fe||!zt)return[];let e=zt.attributes[`${j}/${fe.bid}`];return qe(e)},[fe,zt]),Ht=(0,M.useMemo)(()=>Vt.some(e=>typeof e.inUse==`boolean`),[Vt]),Ut=(0,M.useMemo)(()=>A?_.filter(e=>e.type===`initiative`||e.type===`name`?!0:e.type===`card-column`&&Pe):_,[A,_,Pe]),Wt=(0,M.useMemo)(()=>{let e=r.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),t=r.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`}),n=e?.attr_bid,i=t?.attr_bid,a=je[h.HP_CURRENT_BID],o=je[h.HP_MAX_BID],s=new Set(r.map(e=>e.attr_bid));return{currentHpBid:a&&s.has(a)?a:n,maxHpBid:o&&s.has(o)?o:i}},[r,je]),Gt=(0,M.useMemo)(()=>L.filter(e=>wt(e)),[L,He]),Kt=(0,M.useMemo)(()=>{if(!zt)return{};let e={};for(let t of r){let n=`${j}/${t.attr_bid}`,r=zt.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(e[t.attr_bid]=i)}return e},[zt,r]),qt=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=(e[1]||``).trim();if(!n)continue;let r=ve(n,{bidValueMap:Kt,onMissingBid:`error`});!r.valid||!r.notation||t.push(r.notation)}return t};(0,M.useEffect)(()=>{Ae.current&&Ut.length>0&&(O.debug(`Adjusting window width based on table size`),setTimeout(()=>{if(Ae.current){let e=Ae.current.offsetWidth+4,t=Math.min(e,800);l.action.setWidth(t),O.log(`Adjusted window width to `+t)}},100))},[A,Ut.length,L.length]);let Jt=e=>{if(!e)return null;let t=Fg[e.toLowerCase()];return t?(0,P.jsx)(t,{}):null},Yt=(e,t)=>{let n=window.innerWidth-t-8,r=Math.min(Math.max(e-t/2,8),Math.max(8,n));return{left:r,arrowX:e-r}},Xt=e=>{let t=e.currentTarget.getBoundingClientRect(),n=`clientX`in e?e.clientX:t.left+t.width/2,r=t.top>72?`top`:`bottom`;return{anchorX:n,y:r===`top`?t.top:t.bottom,placement:r}},Zt=(e,t)=>{let n=Xt(e),r=Math.min(320,Math.max(140,t.length*7+28)),i=Yt(n.anchorX,r);Ee({text:t,...n,...i})},Qt=()=>{Ee(null)};(0,M.useLayoutEffect)(()=>{if(!Te||!De.current)return;let e=De.current.getBoundingClientRect().width,t=Yt(Te.anchorX,e);(Math.abs(t.left-Te.left)>.5||Math.abs(t.arrowX-Te.arrowX)>.5)&&Ee(e=>e&&{...e,...t})},[Te]);let $t=e=>e.type===`initiative`?(0,P.jsx)(Wd,{}):e.type===`roller`?null:e.type===`name`?`Name`:e.type===`card-column`?(0,P.jsx)(xd,{}):e.type===`divider-column`?null:e.useIcon&&e.iconType?Jt(e.iconType):e.name||e.type,en=e=>e.type===`divider-column`?{fixedWidth:Mg}:e.type===`initiative`?{minWidth:Ag}:e.type===`name`?{minWidth:jg}:{minWidth:kg},tn=(t,n)=>{let r=Ct(n),i=Tt(n),a=!He&&!Le;if(i&&t.type!==`initiative`&&t.type!==`name`&&t.type!==`divider-column`)return(0,P.jsx)($g,{theme:e,children:(0,P.jsx)(B_,{theme:e})});switch(t.type){case`initiative`:if(Ne)return(0,P.jsx)(e_,{theme:e,children:(0,P.jsx)(i_,{onClick:e=>{e.stopPropagation(),r&&(C.has(n.id)||(n.id===y?kt():Ot(n.id)))},children:C.has(n.id)?(0,P.jsx)(ld,{color:e.OFFSET}):n.id===y?(0,P.jsx)(cd,{color:e.PRIMARY}):(0,P.jsx)(ud,{color:e.BORDER})})});let i=`initiative:${n.id}`,s=_t(i);return(0,P.jsx)(e_,{theme:e,children:(0,P.jsx)(a_,{theme:e,$isRollable:r&&!s,type:`text`,inputMode:`decimal`,value:le[n.id]??String(n.initiative),readOnly:!r||!s,onChange:!r||!s?void 0:e=>nt(n.id,e.target.value),onBlur:!r||!s?void 0:e=>{rt(n.id,e.target.value),yt(i)},onClick:()=>{r&&(s||St(i)||tt(n.id))},onContextMenu:e=>{r&&(e.preventDefault(),vt(i,e.currentTarget))},onTouchStart:e=>{r&&(s||bt(i,e.currentTarget))},onTouchEnd:()=>{xt(i)},onTouchCancel:()=>{xt(i)},onKeyDown:e=>{if(r){if(!s&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),tt(n.id);return}s&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})});case`name`:return(0,P.jsx)(o_,{theme:e,title:`Right-click to assign owner`,$outlineColor:n.ownerNameOutlineColor,onDoubleClick:()=>jt(n.id),onContextMenu:r?e=>Mt(e,n.id):void 0,children:n.isBoss?`💀 ${n.name}`:n.name});case`roller`:return(0,P.jsx)(t_,{theme:e,children:(0,P.jsx)(n_,{theme:e,disabled:!r,onClick:e=>{e.stopPropagation(),r&&tt(n.id)},title:`Roll initiative (1-${Qe(Re)})`,children:(0,P.jsx)(r_,{src:`/dice.svg`,alt:`Roll`})})});case`card-column`:return(0,P.jsx)($g,{theme:e,children:(0,P.jsx)(u_,{id:`card-access-${n.id}`,theme:e,disabled:!r,onClick:e=>{e.stopPropagation(),r&&z(e.currentTarget.id,n.id)},title:`Open card for ${n.name}`,children:(0,P.jsx)(cd,{})})});case`value-column`:return(0,P.jsx)($g,{theme:e,children:(0,P.jsx)(l_,{children:t.styles?.bidList?.map((i,o)=>{let s=pt(i),c=gt(n.id,i),l=s&&_t(c),u=n.attributes[`${j}/${i}`],d=u==null||u===``?`0`:String(u),f=i===Wt.currentHpBid||i===Wt.maxHpBid,p=!!Ue&&n.createdUserId===Ue,m=a&&f&&!p;return(0,P.jsxs)(M.Fragment,{children:[o>0&&(0,P.jsx)(c_,{theme:e,children:t.styles?.dividers?.[o-1]||`/`}),m?(0,P.jsx)(V_,{theme:e,$small:t.styles?.bidList&&t.styles.bidList.length>2}):(0,P.jsx)(s_,{theme:e,$isRollable:r&&s,value:d,$small:t.styles?.bidList&&t.styles.bidList.length>2,readOnly:!r||s&&!l,onChange:!r||s&&!l?void 0:e=>{let t=e.target.value;g(e=>e.map(e=>e.id===n.id?{...e,attributes:{...e.attributes,[`${j}/${i}`]:t}}:e))},onBlur:!r||s&&!l?void 0:e=>{dt(n.id,i,e.target.value),s&&yt(c)},onClick:s?()=>{r&&(l||St(c)||ht(n,i))}:void 0,onContextMenu:s?e=>{r&&(e.preventDefault(),vt(c,e.currentTarget))}:void 0,onTouchStart:s?e=>{r&&(l||bt(c,e.currentTarget))}:void 0,onTouchEnd:s?()=>{xt(c)}:void 0,onTouchCancel:s?()=>{xt(c)}:void 0,onKeyDown:e=>{if(r){if(s&&!l&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),ht(n,i);return}(l||!s)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})]},i)})})});case`list-column`:return(0,P.jsx)($g,{theme:e,children:(0,P.jsx)(u_,{theme:e,disabled:!r,onClick:e=>{if(e.stopPropagation(),!r)return;let i=t.styles?.bidList?.[0];i&&pe({unitId:n.id,bid:i})},title:`Open list reference`,children:(0,P.jsx)(nd,{})})});case`checkbox-column`:return(0,P.jsx)($g,{theme:e,children:(0,P.jsx)(l_,{children:t.styles?.bidList?.map(i=>{let a=!!n.attributes[`${j}/${i}`],s=t.styles?.inputType===`slider`,c=e=>{g(t=>t.map(t=>t.id===n.id?{...t,attributes:{...t.attributes,[`${j}/${i}`]:e}}:t)),p(o.map(t=>t.id===n.id?{...t,metadata:{...t.metadata,[`${j}/${i}`]:e}}:t)),l.scene.items.updateItems([n.id],t=>{t[0].metadata[`${j}/${i}`]=e})};return s?(0,P.jsx)(f_,{type:`button`,theme:e,$active:a,disabled:!r,onClick:r?()=>{c(!a)}:void 0,children:(0,P.jsx)(p_,{theme:e,$active:a})},i):(0,P.jsx)(d_,{theme:e,type:`checkbox`,checked:a,disabled:!r,onChange:r?e=>{c(e.target.checked)}:void 0},i)})})});case`special-column`:let c=Jt(t.iconType);if(t.styles?.specialType===`elevation`){let t=k[n.id];return(0,P.jsx)(Cg,{theme:e,unit:n,canInteract:r,elevationDraftValue:t,onElevationDraftChange:st,onCommitElevationChange:lt})}else{let t=Je.getEffectsForUnit(n.id).length;return(0,P.jsx)(wg,{theme:e,canInteract:r,icon:c||(0,P.jsx)(Rd,{}),activeEffectsCount:t,onOpen:()=>Je.handleOpenEffectsModal(n.id)})}case`divider-column`:return(0,P.jsx)(m_,{theme:e,children:(0,P.jsx)(h_,{children:t.styles?.styleDesign===`zigzag`?(0,P.jsx)(__,{children:(0,P.jsx)(v_,{theme:e})}):(0,P.jsx)(g_,{theme:e,$style:t.styles?.styleDesign})})});default:return(0,P.jsx)($g,{theme:e,children:`-`})}};if(i)return(0,P.jsx)(Ig,{children:(0,P.jsx)(Lg,{theme:e,children:`Loading...`})});let nn=A||Ce,rn=A?`R: ${x}`:`Round: ${x}`;return(0,P.jsxs)(Ig,{children:[(0,P.jsx)(Rg,{children:(0,P.jsxs)(Kg,{ref:Ae,theme:e,$compact:A,children:[(0,P.jsx)(qg,{theme:e,children:(0,P.jsx)(Jg,{children:Ut.map(t=>{let n=t.description??`This has no description.`,r=en(t);return(0,P.jsx)(Yg,{theme:e,$minWidth:r.minWidth,$fixedWidth:r.fixedWidth,onMouseEnter:e=>Zt(e,n),onMouseMove:e=>Zt(e,n),onMouseLeave:Qt,onFocus:e=>Zt(e,n),onBlur:Qt,children:$t(t)},t.id)})})}),(0,P.jsx)(Zg,{children:Gt.map(t=>(0,P.jsx)(Qg,{$isCurrentTurn:t.id===y,theme:e,children:Ut.map(e=>(0,P.jsx)(M.Fragment,{children:tn(e,t)},e.id))},t.id))})]})}),(0,P.jsxs)(zg,{theme:e,$compactMode:A,children:[(0,P.jsxs)(Bg,{$compactMode:A,children:[A?(0,P.jsxs)(P.Fragment,{children:[He&&(0,P.jsx)(Vg,{theme:e,$compact:!0,onClick:Dt,children:(0,P.jsx)(Xu,{})}),He&&(0,P.jsx)(Vg,{theme:e,$compact:!0,onClick:Et,children:(0,P.jsx)(Zu,{})})]}):Ne?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Vg,{theme:e,onClick:kt,disabled:!y||C.has(y),children:`End Turn`}),(0,P.jsx)(Gg,{theme:e,$compactMode:A,children:rn}),(0,P.jsx)(Vg,{theme:e,$compact:nn,onClick:At,disabled:C.size<L.length,children:nn?(0,P.jsx)(Zu,{}):`Next`})]}):(0,P.jsxs)(P.Fragment,{children:[He&&(0,P.jsx)(Vg,{theme:e,$compact:!0,onClick:Dt,children:(0,P.jsx)(Xu,{})}),(0,P.jsx)(Gg,{theme:e,$compactMode:A,children:rn}),He&&(0,P.jsx)(Vg,{theme:e,$compact:!0,onClick:Et,children:(0,P.jsx)(Zu,{})})]}),A&&(0,P.jsx)(Ug,{theme:e,onClick:()=>{Ge()},title:`Switch to Fullsize list`,children:(0,P.jsx)(Ed,{})})]}),!A&&(0,P.jsx)(Wg,{theme:e,$hasReset:He,onClick:()=>{Ge()},title:`Switch to Compact list`,children:(0,P.jsx)(Dd,{})}),He&&!A&&(0,P.jsx)(Hg,{theme:e,onClick:()=>_e(!0),disabled:ye,title:`Reset round/turn state`,children:(0,P.jsx)(Ad,{})})]}),Te&&(0,P.jsx)(Xg,{ref:De,theme:e,$left:Te.left,$y:Te.y,$placement:Te.placement,$arrowX:Te.arrowX,role:`tooltip`,children:Te.text}),(0,P.jsxs)(um,{isOpen:!!T,title:It?`Unit: ${It.name}`:`Unit`,onClose:()=>{re||ae||se||(E(null),D(null))},closeOnOverlayClick:!re&&!ae&&!se,maxWidth:`520px`,children:[(0,P.jsx)(x_,{theme:e,children:`Select a player to become the owner.`}),(0,P.jsxs)(y_,{children:[Ye.map(t=>(0,P.jsxs)(b_,{theme:e,$isCurrent:Lt?.createdUserId===t.id,onClick:()=>Nt(t.id),disabled:re||ae||se,children:[t.name,Lt?.createdUserId===t.id?` (current)`:``]},t.id)),(0,P.jsx)(b_,{theme:e,onClick:()=>{Ft()},disabled:re||ae||se,children:se?`Removing...`:`Remove Unit from List`})]}),(0,P.jsx)(C_,{theme:e}),(0,P.jsxs)(w_,{theme:e,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(T_,{theme:e,children:`Boss Mode`}),(0,P.jsx)(E_,{theme:e,children:`Shows a large encounter HP bar in scene (max 2 bosses).`})]}),(0,P.jsx)(D_,{children:(0,P.jsx)(O_,{type:`button`,theme:e,$active:Rt,disabled:re||ae||se,"aria-label":`Toggle boss mode`,"aria-pressed":Rt,onClick:()=>{Pt()}})})]}),ee&&(0,P.jsx)(S_,{theme:e,children:ee})]}),(0,P.jsx)(yg,{manager:Je}),(0,P.jsxs)(um,{isOpen:ge,title:`Reset Encounter`,onClose:()=>{ye||_e(!1)},closeOnOverlayClick:!ye,maxWidth:`460px`,children:[(0,P.jsx)(x_,{theme:e,children:`Choose how you want to reset initiative state.`}),(0,P.jsxs)(y_,{children:[(0,P.jsx)(b_,{theme:e,onClick:()=>{R(`round`)},disabled:ye,children:ye?`Resetting...`:`Reset Round`}),(0,P.jsx)(b_,{theme:e,onClick:()=>{R(`reset-initiative`)},disabled:ye,children:ye?`Resetting...`:`Reset Round & Initiative`}),(0,P.jsx)(b_,{theme:e,onClick:()=>{R(`clear-list`)},disabled:ye,children:ye?`Resetting...`:`Reset Round & Clear List`})]})]}),(0,P.jsx)(um,{isOpen:!!fe,title:zt?`${Bt?.attr_name||`List`} for ${zt.name}`:`List Reference`,onClose:()=>{pe(null)},maxWidth:`620px`,children:(0,P.jsxs)(k_,{children:[(0,P.jsx)(A_,{theme:e}),Vt.length===0?(0,P.jsx)(z_,{theme:e,children:`No entries.`}):(0,P.jsx)(j_,{children:Vt.map(t=>(0,P.jsxs)(M_,{theme:e,children:[(0,P.jsxs)(N_,{children:[Ht?(0,P.jsx)(P_,{type:`checkbox`,checked:!!t.inUse,readOnly:!0,tabIndex:-1}):null,(0,P.jsx)(F_,{theme:e,children:t.name||`(Unnamed)`})]}),t.description?(0,P.jsx)(I_,{theme:e,children:t.description}):null,(()=>{let n=qt(t.description||``);return n.length===0?null:(0,P.jsx)(L_,{children:n.map((n,r)=>(0,P.jsx)(R_,{type:`button`,theme:e,onClick:()=>{let e=zt?.createdUserId?s.find(e=>e.id===zt.createdUserId):null;Ke({notation:n,actionName:t.name||Bt?.attr_name||`List Roll`,tokenName:zt?.name||`Unknown`,senderId:zt?.createdUserId||c?.id||`unknown`,senderColor:e?.color||c?.color||`#ffffff`})},title:n,children:n},`${t.id}-inline-notation-${r}`))})})()]},t.id))})]})})]})};var W_=`${d.EXTENSIONID}-partyhud`,G_=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,K_=x.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>b(e.theme.BACKGROUND,.35)};
`,q_=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`,J_=x(q_)`
  justify-content: center;
`,Y_=x.span`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: ${e=>b(e.theme.PRIMARY,.9)};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`,X_=x.button`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>b(e.theme.OFFSET,.45)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,Z_=x.select`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>b(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px;
  min-width: 160px;
`,Q_=x.p`
  margin: 0;
  font-size: 12px;
  color: ${e=>b(e.theme.PRIMARY,.8)};
`,$_=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${e=>e.$disabled?.55:1};
`,ev=x.span`
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
`,tv=x.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>b(e.theme.BACKGROUND,.35)};
`,nv=x.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
`,rv=x.img`
  width: ${e=>e.$full?`100%`:`40px`};
  height: ${e=>e.$full?`100%`:`40px`};
  min-width: ${e=>e.$full?`100%`:`40px`};
  position: absolute;
  left: ${e=>e.$overlay?`20px`:`0`};
  top: ${e=>e.$overlay?`20px`:`0`};
  object-fit: cover;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>b(e.theme.BACKGROUND,.6)};
`,iv=x.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,av=x.span`
  color: ${e=>e.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,ov=x.input`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>b(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
`,sv=x.p`
  color: ${e=>e.theme.PRIMARY};
  margin: 0;
`,cv=e=>{switch(e){case`bottom`:return`left`;case`left`:return`top`;case`top`:return`right`;case`right`:default:return`bottom`}},lv=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,uv=async()=>{await l.modal.open({id:W_,url:`/pages/forgeparty.html`,fullScreen:!0,hideBackdrop:!0,hidePaper:!0,disablePointerEvents:!0})};const dv=()=>{let e=(0,M.useRef)(!1),{theme:t}=ze(),{attributes:r}=Ah(),i=N(e=>e.items),a=N(e=>e.sceneMetadata);N(e=>e.roomMetadata);let o=N(e=>e.playerData),s=a,c=String(o?.role||``).toUpperCase()===`GM`,d=o?.id,f=te(h.PARTY_HUD_OPEN,d),p=te(h.PARTY_HUD_ORIENTATION,d),m=(s[f]??s[h.PARTY_HUD_OPEN])===!0,g=s[p]??s[h.PARTY_HUD_ORIENTATION],_=lv(g)?g:`bottom`,v=s[h.PARTY_HUD_ATTR_ONE]||``,y=s[h.PARTY_HUD_ATTR_TWO]||``,b=s[h.PARTY_HUD_SHOW_HP_BARS]===!0,x=s[h.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!b,S=i.filter(e=>e.metadata[u.IN_PARTY]===!0),C=(0,M.useMemo)(()=>r.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[r]),w=async(e,t)=>{await l.scene.setMetadata({[e]:t})},T=async()=>{let t=!m;if(await w(f,t),!t){await l.modal.close(W_),e.current=!1;return}await uv(),e.current=!0},E=async()=>{await w(p,cv(_))},ee=async(e,t)=>{let n=t.trim();await l.scene.items.updateItems([e],e=>{let t={...e[0].metadata||{}};n?t[u.PORTRAIT_URL]=n:delete t[u.PORTRAIT_URL],e[0].metadata=t})};return(0,M.useEffect)(()=>{let t=!0;return(async()=>{if(m&&!e.current){await uv(),t&&(e.current=!0);return}!m&&e.current&&(await l.modal.close(W_),t&&(e.current=!1))})(),()=>{t=!1}},[m]),(0,P.jsx)(qu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,P.jsxs)($p,{theme:t,children:[(0,P.jsx)(em,{theme:t,children:`Party`}),(0,P.jsxs)(K_,{theme:t,children:[(0,P.jsxs)(q_,{children:[(0,P.jsxs)(X_,{theme:t,onClick:()=>void E(),children:[`Display: `,_.toUpperCase()]}),(0,P.jsx)(X_,{theme:t,onClick:()=>void T(),children:m?`Close Party HUD`:`Open Party HUD`})]}),c&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(J_,{children:[(0,P.jsx)(Y_,{theme:t,children:`Show in HUD:`}),(0,P.jsxs)($_,{$disabled:!c,children:[(0,P.jsx)(ev,{theme:t,children:`Show HP Bars`}),(0,P.jsx)(J,{label:`Party HUD Show HP Bars`,isOn:b,onChange:e=>{c&&(w(h.PARTY_HUD_SHOW_HP_BARS,e),e&&w(h.PARTY_HUD_SHOW_HP_NUMBERS,!1))}})]}),(0,P.jsxs)($_,{$disabled:!c,children:[(0,P.jsx)(ev,{theme:t,children:`Show HP Numbers`}),(0,P.jsx)(J,{label:`Party HUD Show HP Numbers`,isOn:x,onChange:e=>{c&&(w(h.PARTY_HUD_SHOW_HP_NUMBERS,e),e&&w(h.PARTY_HUD_SHOW_HP_BARS,!1))}})]}),(0,P.jsxs)(Z_,{theme:t,disabled:!c,value:v,onChange:e=>{let t=e.target.value;w(h.PARTY_HUD_ATTR_ONE,t),t&&t===y&&w(h.PARTY_HUD_ATTR_TWO,``)},children:[(0,P.jsx)(`option`,{value:``,children:`Extra Slot 1 (None)`}),C.map(e=>(0,P.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,P.jsxs)(Z_,{theme:t,disabled:!c,value:y,onChange:e=>{let t=e.target.value;w(h.PARTY_HUD_ATTR_TWO,t),t&&t===v&&w(h.PARTY_HUD_ATTR_ONE,``)},children:[(0,P.jsx)(`option`,{value:``,children:`Extra Slot 2 (None)`}),C.map(e=>(0,P.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]})]}),(0,P.jsx)(Q_,{theme:t,children:(0,P.jsxs)(P.Fragment,{children:[`Configure Party HUD and portraits.`,(0,P.jsx)(`br`,{}),`LIST attributes are excluded.`]})})]})]}),S.length===0?(0,P.jsx)(sv,{theme:t,children:`No one is in the Party.  Add a unit using the ContextMenu on the token.`}):(0,P.jsx)(G_,{theme:t,children:S.map(e=>{let r=e.metadata?.[u.PORTRAIT_URL]||``,i=n(e)?e.image.url:void 0,a=e.metadata[u.UNIT_NAME]||e.name||`Unknown`,s=e.createdUserId===o?.id,l=c||s,d=i||`/logo.png`,f=!!r;return(0,P.jsxs)(tv,{theme:t,children:[(0,P.jsxs)(nv,{children:[(0,P.jsx)(rv,{theme:t,src:d,alt:a,$full:!f}),f&&(0,P.jsx)(rv,{theme:t,src:f?r:``,alt:`${a} override`,$overlay:!0})]}),(0,P.jsxs)(iv,{children:[(0,P.jsx)(av,{theme:t,title:a,children:a}),l&&(0,P.jsx)(ov,{theme:t,defaultValue:r,placeholder:`Portrait URL override (optional)`,onBlur:t=>{ee(e.id,t.target.value)}})]})]},e.id)})})]})})};var fv=`${j}/hp-bar-effect`,pv=`${j}/hp-bar-owner`,mv=`${j}/hp-number-text`,hv=`${j}/hp-number-owner`,gv=e=>`HPB${e.slice(3)}`,_v=e=>`HPN${e.slice(3)}`,vv=(e,t,n)=>Math.max(t,Math.min(n,e)),yv=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},bv=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||Ce.CURRENT_HP,maxHpBid:n?.attr_bid||Ce.MAX_HP}},xv=(e,t)=>{let n=bv(t),r=e[h.HP_CURRENT_BID],i=e[h.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},Sv=(e,t,n)=>{let r=e.metadata?.[`${j}/${t}`],i=e.metadata?.[`${j}/${n}`],a=yv(r),o=yv(i);return o===null||o<=0||a===null?null:vv(a/o*100,0,100)},Cv=(e,t,n)=>{let r=e.metadata?.[`${j}/${t}`],i=e.metadata?.[`${j}/${n}`],a=yv(r),o=yv(i);return a===null?null:{currentHp:Math.trunc(a),maxHp:o===null?null:Math.trunc(o)}},wv=e=>{let t=String(e||`bottom`).toLowerCase();return t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`},Tv=e=>{switch(wv(e)){case`top`:return 0;case`bottom`:return 1;case`left`:return 2;case`right`:return 3;default:return 1}},Ev=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o,width:r,height:i}},Dv=(e,t,n)=>{let r=Ev(e,t),i=r.minX+r.width*.5,a=r.minY+r.height*.5,o;switch(n){case`top`:o={x:i,y:r.minY+r.height*.18};break;case`bottom`:o={x:i,y:r.minY+r.height*.82};break;case`left`:o={x:r.minX+r.width*.18,y:a};break;case`right`:o={x:r.minX+r.width*.82,y:a};break}let s=r.width*.25,c=r.height*.18;return{x:o.x-s,y:o.y-c}};const Ov=()=>{let e=N(e=>e.cacheReady),i=N(e=>e.sceneReady),a=N(e=>e.items),s=N(e=>e.localItems),c=N(e=>e.gridDpi),d=N(e=>e.roomMetadata),f=N(e=>e.sceneMetadata);return(0,M.useEffect)(()=>{if(!e||!i)return;let d=!1;return(async()=>{let e=f,i=e[h.SHOW_HP_BARS]??!1,p=e[h.SHOW_HP_NUMBERS]??!1,m=i,g=!i&&p,_=wv(e[h.HP_BAR_ORIENTATION]),v=Tv(e[h.HP_BAR_ORIENTATION]),{currentHpBid:y,maxHpBid:b}=xv(e,f[Z.CURRENT_ATTR]||[]),x=s.filter(e=>o(e)&&e.metadata?.[fv]===!0),S=s.filter(e=>r(e)&&e.metadata?.[mv]===!0);if(!m&&x.length>0)try{await l.scene.local.deleteItems(x.map(e=>e.id))}catch(e){O.error(`Failed to remove HP bar effects`,e)}if(!g&&S.length>0)try{await l.scene.local.deleteItems(S.map(e=>e.id))}catch(e){O.error(`Failed to remove HP number texts`,e)}if(!m&&!g)return;let C=a.filter(e=>n(e)&&e.metadata?.[u.ON_LIST]===!0),w=new Map,T=new Map;for(let e of C){if(m){let t=Sv(e,y,b);t!==null&&w.set(gv(e.id),{unitId:e.id,hpPercent:t})}if(g&&n(e)){let t=Cv(e,y,b);if(t){let n=t.maxHp===null?`${t.currentHp}`:`${t.currentHp}/${t.maxHp}`;T.set(_v(e.id),{unitId:e.id,text:n,position:Dv(e,c,_)})}}}if(m){let e=new Map(x.map(e=>[e.id,e])),n=Array.from(w.entries()).filter(([t])=>!e.has(t)),r=x.filter(e=>!w.has(e.id)),i=x.filter(e=>{let t=w.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`orientation`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return e.attachedTo!==t.unitId||!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-v)>.001});if(d)return;if(r.length>0)try{await l.scene.local.deleteItems(r.map(e=>e.id))}catch(e){O.error(`Failed to remove stale HP bar effects`,e)}if(n.length>0){let e=n.map(([e,n])=>t().id(e).name(`HP Bar Effect`).effectType(`ATTACHMENT`).attachedTo(n.unitId).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).uniforms([{name:`hpPercent`,value:n.hpPercent},{name:`orientation`,value:v}]).sksl(`
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
`).metadata({[fv]:!0,[pv]:n.unitId}).build());try{await l.scene.local.addItems(e)}catch(e){O.error(`Failed to add HP bar effects`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await l.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=w.get(e.id);if(!t)return;e.attachedTo=t.unitId;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:v}],e.metadata={...e.metadata,[fv]:!0,[pv]:t.unitId}})})}catch(e){O.error(`Failed to update HP bar effects`,e)}}}if(g){let e=new Map(S.map(e=>[e.id,e])),t=Array.from(T.entries()).filter(([t])=>!e.has(t)),n=S.filter(e=>!T.has(e.id)),r=S.filter(e=>{let t=T.get(e.id);if(!t)return!1;let n=e.text?.plainText,r=Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01;return e.attachedTo!==t.unitId||n!==t.text||r});if(d)return;if(n.length>0)try{await l.scene.local.deleteItems(n.map(e=>e.id))}catch(e){O.error(`Failed to remove stale HP number texts`,e)}if(t.length>0){let e=t.map(([e,t])=>{let n=C.find(e=>e.id===t.unitId);return ne().id(e).name(`HP Number Text`).plainText(t.text).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(28).fontFamily(`Segoe UI`).textAlign(`CENTER`).position(t.position).metadata({[mv]:!0,[hv]:t.unitId}).attachedTo(t.unitId).visible(n?.visible??!0).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build()});try{await l.scene.local.addItems(e)}catch(e){O.error(`Failed to add HP number texts`,e)}}if(r.length>0){let e=r.map(e=>e.id);try{await l.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=T.get(e.id);if(!t)return;e.attachedTo=t.unitId,e.position=t.position;let n=e;n.text&&(n.text.plainText=t.text),e.metadata={...e.metadata,[mv]:!0,[hv]:t.unitId}})})}catch(e){O.error(`Failed to update HP number texts`,e)}}}})(),()=>{d=!0}},[e,i,a,s,c,d,f]),null};var kv=`${j}/death-effect-token`,Av=`${j}/death-effect-owner`,jv=e=>`DTH${e.slice(3)}`,Mv=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},Nv=e=>({currentHpBid:e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`})?.attr_bid||Ce.CURRENT_HP}),Pv=(e,t)=>{let n=Nv(t),r=e[h.HP_CURRENT_BID],i=new Set(t.map(e=>e.attr_bid));return r&&i.has(r)?r:n.currentHpBid},Fv=(e,t)=>{let n=e.metadata?.[`${j}/${t}`];return Mv(n)};const Iv=()=>{let e=N(e=>e.cacheReady),r=N(e=>e.sceneReady),i=N(e=>e.items),a=N(e=>e.localItems),s=N(e=>e.roomMetadata),c=N(e=>e.sceneMetadata);return(0,M.useEffect)(()=>{if(!e||!r)return;let s=!1;return(async()=>{let e=c,r=e[h.SHOW_DEATH_EFFECT]??!1,d=Pv(e,c[Z.CURRENT_ATTR]||[]),f=a.filter(e=>o(e)&&e.metadata?.[kv]===!0);if(!r){if(f.length>0)try{await l.scene.local.deleteItems(f.map(e=>e.id))}catch(e){O.error(`Failed to remove death token effects`,e)}return}let p=i.filter(e=>n(e)&&e.metadata?.[u.ON_LIST]===!0),m=new Map;p.forEach(e=>{Fv(e,d)===0&&m.set(jv(e.id),e.id)});let g=new Map(f.map(e=>[e.id,e])),_=Array.from(m.entries()).filter(([e])=>!g.has(e)),v=f.filter(e=>!m.has(e.id)),y=f.filter(e=>{let t=m.get(e.id);if(!t)return!1;let n=e;return e.attachedTo!==t||n.metadata?.[Av]!==t});if(!s){if(v.length>0)try{await l.scene.local.deleteItems(v.map(e=>e.id))}catch(e){O.error(`Failed to remove stale death token effects`,e)}if(_.length>0){let e=_.map(([e,n])=>t().id(e).name(`Death Token Effect`).effectType(`ATTACHMENT`).attachedTo(n).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(`
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
`).metadata({[kv]:!0,[Av]:n}).build());try{await l.scene.local.addItems(e)}catch(e){O.error(`Failed to add death token effects`,e)}}if(y.length>0)try{await l.scene.local.updateItems(y.map(e=>e.id),e=>{e.forEach(e=>{let t=m.get(e.id);t&&(e.attachedTo=t,e.metadata={...e.metadata,[kv]:!0,[Av]:t})})})}catch(e){O.error(`Failed to update death token effects`,e)}}})(),()=>{s=!0}},[e,r,i,a,s,c]),null};var Lv=`${j}/buff-effect-token`,Rv=`${j}/buff-effect-owner`,zv=`${j}/debuff-effect-token`,Bv=`${j}/debuff-effect-owner`,Vv=`${j}/effect-preset`,Hv=e=>`EFB${e.slice(3)}`,Uv=e=>`EFD${e.slice(3)}`,Wv=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const Gv=()=>{let e=N(e=>e.cacheReady),r=N(e=>e.sceneReady),i=N(e=>e.items),a=N(e=>e.localItems),s=N(e=>e.roomMetadata),c=N(e=>e.sceneMetadata);return(0,M.useEffect)(()=>{if(!e||!r)return;let s=!1;return(async()=>{let e=c,r=e[h.BUFF_VISUAL_PRESET],d=e[h.DEBUFF_VISUAL_PRESET],f=Ym(r)?r:Gm,p=Xm(d)?d:Km,m=Zm(f),g=Qm(p),_=i.filter(e=>n(e)&&e.metadata?.[u.ON_LIST]===!0),v=new Set(_.map(e=>e.id)),y=new Map,b=(e,t)=>{let n=y.get(e)||{hasBuff:!1,hasDebuff:!1};t===`buff`?n.hasBuff=!0:n.hasDebuff=!0,y.set(e,n)};i.forEach(e=>{if(e.metadata?.[u.ON_LIST]!==!0)return;let t=Wv(e.metadata?.[Xh]);t.length!==0&&t.forEach(t=>{t.effectType!==`neutral`&&(t.targets.length>0?t.targets:[e.id]).forEach(e=>{v.has(e)&&(t.effectType===`buff`||t.effectType===`debuff`)&&b(e,t.effectType)})})});let x=new Map,S=new Map;_.forEach(e=>{let t=y.get(e.id);t?.hasBuff&&x.set(Hv(e.id),e.id),t?.hasDebuff&&S.set(Uv(e.id),e.id)});let C=a.filter(e=>o(e)&&e.metadata?.[Lv]===!0),w=a.filter(e=>o(e)&&e.metadata?.[zv]===!0),T=async e=>{let{existing:n,desiredByOverlayId:r,preset:i,shader:a,name:o,flagKey:c,ownerKey:u}=e,d=new Map(n.map(e=>[e.id,e])),f=Array.from(r.entries()).filter(([e])=>!d.has(e)),p=n.filter(e=>!r.has(e.id)),m=n.filter(e=>{let t=r.get(e.id);if(!t)return!1;let n=e.metadata?.[Vv];return e.attachedTo!==t||n!==i});if(!s){if(p.length>0)try{await l.scene.local.deleteItems(p.map(e=>e.id))}catch(e){O.error(`Failed to remove stale ${o.toLowerCase()} overlays`,e)}if(f.length>0){let e=f.map(([e,n])=>t().id(e).name(o).effectType(`ATTACHMENT`).attachedTo(n).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(a).metadata({[c]:!0,[u]:n,[Vv]:i}).build());try{await l.scene.local.addItems(e)}catch(e){O.error(`Failed to add ${o.toLowerCase()} overlays`,e)}}if(m.length>0)try{await l.scene.local.updateItems(m.map(e=>e.id),e=>{e.forEach(e=>{let t=r.get(e.id);if(!t)return;e.attachedTo=t;let n=e;n.sksl=a,e.metadata={...e.metadata,[c]:!0,[u]:t,[Vv]:i}})})}catch(e){O.error(`Failed to update ${o.toLowerCase()} overlays`,e)}}};await T({existing:C,desiredByOverlayId:x,preset:f,shader:m,name:`Buff Token Effect`,flagKey:Lv,ownerKey:Rv}),await T({existing:w,desiredByOverlayId:S,preset:p,shader:g,name:`Debuff Token Effect`,flagKey:zv,ownerKey:Bv})})(),()=>{s=!0}},[e,r,i,a,s,c]),null};var Kv=`${j}/boss-hp-effect`,qv=`${j}/boss-hp-owner`,Jv=`${j}/boss-hp-slot`,Yv=e=>`BOSSHP${e}`,Xv=(e,t,n)=>Math.max(t,Math.min(n,e)),Zv=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},Qv=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||Ce.CURRENT_HP,maxHpBid:n?.attr_bid||Ce.MAX_HP}},$v=(e,t)=>{let n=Qv(t),r=e[h.HP_CURRENT_BID],i=e[h.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},ey=(e,t,n)=>{let r=e.metadata?.[`${j}/${t}`],i=e.metadata?.[`${j}/${n}`],a=Zv(r),o=Zv(i);return o===null||o<=0||a===null?null:Xv(a/o*100,0,100)};const ty=()=>{let e=N(e=>e.cacheReady),r=N(e=>e.sceneReady),i=N(e=>e.items),a=N(e=>e.localItems),s=N(e=>e.roomMetadata),c=N(e=>e.sceneMetadata);return(0,M.useEffect)(()=>{if(!e||!r)return;let s=!1;return(async()=>{let{currentHpBid:e,maxHpBid:r}=$v(c,c[Z.CURRENT_ATTR]||[]),d=a.filter(e=>o(e)&&e.metadata?.[Kv]===!0),f=i.filter(e=>n(e)&&e.metadata?.[u.ON_LIST]===!0&&e.metadata?.[u.BOSS_MODE]===!0).sort((e,t)=>{let n=Number(e.metadata?.[u.INITIATIVE]??0);return Number(t.metadata?.[u.INITIATIVE]??0)-n}).slice(0,2).map((t,n)=>{let i=ey(t,e,r);return i===null?null:{id:Yv(n),unitId:t.id,slot:n,hpPercent:i}}).filter(e=>e!==null),p=new Map(f.map(e=>[e.id,e])),m=new Map(d.map(e=>[e.id,e])),h=d.filter(e=>!p.has(e.id)),g=f.filter(e=>!m.has(e.id)),_=d.filter(e=>{let t=p.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`slot`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-t.slot)>.001||e.metadata?.[qv]!==t.unitId});if(!s){if(h.length>0)try{await l.scene.local.deleteItems(h.map(e=>e.id))}catch(e){O.error(`Failed to remove stale boss HP viewport effects`,e)}if(g.length>0){let e=g.map(e=>t().id(e.id).name(`Boss HP Bar`).effectType(`VIEWPORT`).locked(!0).disableHit(!0).uniforms([{name:`hpPercent`,value:e.hpPercent},{name:`slot`,value:e.slot}]).sksl(`
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
`).metadata({[Kv]:!0,[qv]:e.unitId,[Jv]:e.slot}).build());try{await l.scene.local.addItems(e)}catch(e){O.error(`Failed to add boss HP viewport effects`,e)}}if(_.length>0)try{await l.scene.local.updateItems(_.map(e=>e.id),e=>{e.forEach(e=>{let t=p.get(e.id);if(!t)return;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`slot`,value:t.slot}],e.metadata={...e.metadata,[Kv]:!0,[qv]:t.unitId,[Jv]:t.slot}})})}catch(e){O.error(`Failed to update boss HP viewport effects`,e)}}})(),()=>{s=!0}},[e,r,i,a,s,c]),null};var ny=`${j}/current-turn-effect`;const ry=()=>{let e=N(e=>e.cacheReady),n=N(e=>e.sceneReady),r=N(e=>e.items),i=N(e=>e.roomMetadata),a=N(e=>e.sceneMetadata);return(0,M.useEffect)(()=>{if(!e||!n)return;let i=!1;return(async()=>{let e=a[h.SHOW_TURN_EFFECT]===!0,n=a[h.CURRENT_TURN];if(!e||!n){try{await l.scene.local.deleteItems([ny])}catch{}return}if(!r.find(e=>e.id===n)){try{await l.scene.local.deleteItems([ny])}catch{}return}if(!i){try{let e=!1;if(await l.scene.local.updateItems([ny],t=>{let r=t[0];r&&(r.attachedTo=n,e=!0)}),e)return}catch{}if(!i)try{let e=t().id(ny).name(`Current Turn Effect`).effectType(`ATTACHMENT`).attachedTo(n).locked(!0).disableHit(!0).sksl(`
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

`).build();await l.scene.local.addItems([e])}catch(e){O.error(`Failed to sync current turn effect`,e)}}})(),()=>{i=!0}},[e,n,r,i,a]),null},iy=()=>{let[e,t]=(0,M.useState)(!1),{updateThemeFromSystem:n}=ze(),r=N(e=>e.sceneMetadata),i=N(e=>e.cacheReady);return(0,M.useEffect)(()=>{if(!i)return;let e=r[Z.CURRENT_THEME];if(!e?.primary||!e?.offset||!e?.background||!e?.border){n(E.theme_primary,E.theme_offset,E.theme_background,E.theme_border,E.background_url);return}n(e.primary,e.offset,e.background,e.border,e.background_url)},[i,r,n]),(0,M.useEffect)(()=>{if(e)return;let a=!0,o=async()=>{if(i)try{O.log(`Starting app initialization...`),await s(),a&&(t(!0),O.log(`App initialization complete`))}catch(e){O.error(`Error during app initialization:`,e),a&&t(!0)}},s=async()=>{try{let e=r[Z.CURRENT_THEME],t=r[Z.CURRENT_CARD],i=r[Z.CURRENT_LIST],a=r[Z.CURRENT_ATTR];if(!e||!Array.isArray(t)||!Array.isArray(i)||!Array.isArray(a)){O.log(`System data not found, initializing with defaults`),await c();return}O.log(`Loading existing system theme:`,e),n(e.primary,e.offset,e.background,e.border,e.background_url)}catch(e){O.error(`Error loading system data:`,e),await c()}},c=async()=>{let e={primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url};await l.scene.setMetadata({[Z.CURRENT_THEME]:e,[Z.CURRENT_CARD]:E.card_layout,[Z.CURRENT_LIST]:E.list_layout,[Z.CURRENT_ATTR]:E.attributes,[Z.SYSTEM_NAME]:E.name,[Z.IMPORT_DATE]:null}),O.log(`Default system initialized`),n(e.primary,e.offset,e.background,e.border,e.background_url)};return o(),()=>{a=!1}},[i,e]),{isInitialized:e}};var ay=w`
  ${{"*, ::before, ::after":{boxSizing:`border-box`,borderWidth:`0`,borderStyle:`solid`,borderColor:`#e2e8f0`,"--tw-border-spacing-x":`0`,"--tw-border-spacing-y":`0`,"--tw-translate-x":`0`,"--tw-translate-y":`0`,"--tw-rotate":`0`,"--tw-skew-x":`0`,"--tw-skew-y":`0`,"--tw-scale-x":`1`,"--tw-scale-y":`1`,"--tw-pan-x":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pan-y":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pinch-zoom":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-scroll-snap-strictness":`proximity`,"--tw-gradient-from-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-via-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-to-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ordinal":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-slashed-zero":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-figure":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-spacing":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-fraction":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-shadow":`0 0 #0000`,"--tw-ring-shadow":`0 0 #0000`,"--tw-shadow":`0 0 #0000`,"--tw-shadow-colored":`0 0 #0000`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`0px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`rgb(66 153 225 / 0.5)`,"--tw-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-drop-shadow":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-opacity":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-size":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-layout":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-paint":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-style":`var(--tw-empty,/*!*/ /*!*/)`},"::before, ::after":{"--tw-content":`''`},"html, :host":{lineHeight:`1.5`,WebkitTextSizeAdjust:`100%`,MozTabSize:`4`,tabSize:`4`,fontFamily:`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,fontFeatureSettings:` normal`,fontVariationSettings:` normal`,WebkitTapHighlightColor:`transparent`},body:{margin:`0`,lineHeight:`inherit`},hr:{height:`0`,color:`inherit`,borderTopWidth:`1px`},"abbr:where([title])":{textDecoration:`underline dotted`},"h1, h2, h3, h4, h5, h6":{fontSize:`inherit`,fontWeight:`inherit`},a:{color:`inherit`,textDecoration:`inherit`},"b, strong":{fontWeight:`bolder`},"code, kbd, samp, pre":{fontFamily:`Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,fontFeatureSettings:` normal`,fontVariationSettings:` normal`,fontSize:`1em`},small:{fontSize:`80%`},"sub, sup":{fontSize:`75%`,lineHeight:`0`,position:`relative`,verticalAlign:`baseline`},sub:{bottom:`-0.25em`},sup:{top:`-0.5em`},table:{textIndent:`0`,borderColor:`inherit`,borderCollapse:`collapse`},"button, input, optgroup, select, textarea":{fontFamily:`inherit`,fontFeatureSettings:`inherit`,fontVariationSettings:`inherit`,fontSize:`100%`,fontWeight:`inherit`,lineHeight:`inherit`,letterSpacing:`inherit`,color:`inherit`,margin:`0`,padding:`0`},"button, select":{textTransform:`none`},"button, input:where([type='button']), input:where([type='reset']), input:where([type='submit'])":{WebkitAppearance:`button`,backgroundColor:`transparent`,backgroundImage:`none`},":-moz-focusring":{outline:`auto`},":-moz-ui-invalid":{boxShadow:`none`},progress:{verticalAlign:`baseline`},"::-webkit-inner-spin-button, ::-webkit-outer-spin-button":{height:`auto`},"[type='search']":{WebkitAppearance:`textfield`,outlineOffset:`-2px`},"::-webkit-search-decoration":{WebkitAppearance:`none`},"::-webkit-file-upload-button":{WebkitAppearance:`button`,font:`inherit`},summary:{display:`list-item`},"blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre":{margin:`0`},fieldset:{margin:`0`,padding:`0`},legend:{padding:`0`},"ol, ul, menu":{listStyle:`none`,margin:`0`,padding:`0`},dialog:{padding:`0`},textarea:{resize:`vertical`},"input::placeholder, textarea::placeholder":{opacity:`1`,color:`#cbd5e0`},'button, [role="button"]':{cursor:`pointer`},":disabled":{cursor:`default`},"img, svg, video, canvas, audio, iframe, embed, object":{display:`block`,verticalAlign:`middle`},"img, video":{maxWidth:`100%`,height:`auto`},'[hidden]:where(:not([hidden="until-found"]))':{display:`none`},"::backdrop":{"--tw-border-spacing-x":`0`,"--tw-border-spacing-y":`0`,"--tw-translate-x":`0`,"--tw-translate-y":`0`,"--tw-rotate":`0`,"--tw-skew-x":`0`,"--tw-skew-y":`0`,"--tw-scale-x":`1`,"--tw-scale-y":`1`,"--tw-pan-x":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pan-y":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pinch-zoom":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-scroll-snap-strictness":`proximity`,"--tw-gradient-from-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-via-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-to-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ordinal":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-slashed-zero":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-figure":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-spacing":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-fraction":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-shadow":`0 0 #0000`,"--tw-ring-shadow":`0 0 #0000`,"--tw-shadow":`0 0 #0000`,"--tw-shadow-colored":`0 0 #0000`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`0px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`rgb(66 153 225 / 0.5)`,"--tw-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-drop-shadow":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-opacity":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-size":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-layout":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-paint":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-style":`var(--tw-empty,/*!*/ /*!*/)`},"input:where([type='text']),input:where(:not([type])),input:where([type='email']),input:where([type='url']),input:where([type='password']),input:where([type='number']),input:where([type='date']),input:where([type='datetime-local']),input:where([type='month']),input:where([type='search']),input:where([type='tel']),input:where([type='time']),input:where([type='week']),select:where([multiple]),textarea,select":{appearance:`none`,backgroundColor:`#fff`,borderColor:`#a0aec0`,borderWidth:`1px`,borderRadius:`0px`,paddingTop:`0.5rem`,paddingRight:`0.75rem`,paddingBottom:`0.5rem`,paddingLeft:`0.75rem`,fontSize:`1rem`,lineHeight:`1.5rem`,"--tw-shadow":`0 0 #0000`},"input:where([type='text']):focus, input:where(:not([type])):focus, input:where([type='email']):focus, input:where([type='url']):focus, input:where([type='password']):focus, input:where([type='number']):focus, input:where([type='date']):focus, input:where([type='datetime-local']):focus, input:where([type='month']):focus, input:where([type='search']):focus, input:where([type='tel']):focus, input:where([type='time']):focus, input:where([type='week']):focus, select:where([multiple]):focus, textarea:focus, select:focus":{outline:`2px solid transparent`,outlineOffset:`2px`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`0px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`#3182ce`,"--tw-ring-offset-shadow":`var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,"--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:`var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,borderColor:`#3182ce`},"input::placeholder,textarea::placeholder":{color:`#a0aec0`,opacity:`1`},"::-webkit-datetime-edit-fields-wrapper":{padding:`0`},"::-webkit-date-and-time-value":{minHeight:`1.5em`,textAlign:`inherit`},"::-webkit-datetime-edit":{display:`inline-flex`},"::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field":{paddingTop:`0`,paddingBottom:`0`},select:{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a0aec0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,backgroundPosition:`right 0.5rem center`,backgroundRepeat:`no-repeat`,backgroundSize:`1.5em 1.5em`,paddingRight:`2.5rem`,printColorAdjust:`exact`},'select:where([multiple]),select:where([size]:not([size="1"]))':{backgroundImage:`initial`,backgroundPosition:`initial`,backgroundRepeat:`unset`,backgroundSize:`initial`,paddingRight:`0.75rem`,printColorAdjust:`unset`},"input:where([type='checkbox']),input:where([type='radio'])":{appearance:`none`,padding:`0`,printColorAdjust:`exact`,display:`inline-block`,verticalAlign:`middle`,backgroundOrigin:`border-box`,userSelect:`none`,flexShrink:`0`,height:`1rem`,width:`1rem`,color:`#3182ce`,backgroundColor:`#fff`,borderColor:`#a0aec0`,borderWidth:`1px`,"--tw-shadow":`0 0 #0000`},"input:where([type='checkbox'])":{borderRadius:`0px`},"input:where([type='radio'])":{borderRadius:`100%`},"input:where([type='checkbox']):focus,input:where([type='radio']):focus":{outline:`2px solid transparent`,outlineOffset:`2px`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`2px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`#3182ce`,"--tw-ring-offset-shadow":`var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,"--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:`var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`},"input:where([type='checkbox']):checked,input:where([type='radio']):checked":{borderColor:`transparent`,backgroundColor:`currentColor`,backgroundSize:`100% 100%`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`},"input:where([type='checkbox']):checked":{backgroundImage:`url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`},"@media (forced-colors: active)":{"input:where([type='checkbox']):checked":{appearance:`auto`},"input:where([type='radio']):checked":{appearance:`auto`},"input:where([type='checkbox']):indeterminate":{appearance:`auto`}},"input:where([type='radio']):checked":{backgroundImage:`url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`},"input:where([type='checkbox']):checked:hover,input:where([type='checkbox']):checked:focus,input:where([type='radio']):checked:hover,input:where([type='radio']):checked:focus":{borderColor:`transparent`,backgroundColor:`currentColor`},"input:where([type='checkbox']):indeterminate":{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")`,borderColor:`transparent`,backgroundColor:`currentColor`,backgroundSize:`100% 100%`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`},"input:where([type='checkbox']):indeterminate:hover,input:where([type='checkbox']):indeterminate:focus":{borderColor:`transparent`,backgroundColor:`currentColor`},"input:where([type='file'])":{background:`unset`,borderColor:`inherit`,borderWidth:`0`,borderRadius:`0`,padding:`0`,fontSize:`unset`,lineHeight:`inherit`},"input:where([type='file']):focus":{outline:`1px auto -webkit-focus-ring-color`}}}
  
  :root {
    --forge-primary: ${e=>e.theme.PRIMARY};
    --forge-offset: ${e=>e.theme.OFFSET};
    --forge-background: ${e=>e.theme.BACKGROUND};
    --forge-border: ${e=>e.theme.BORDER};
  }

  /* Base styling for the entire app */
  body {
    background-color: ${e=>b(e.theme.BACKGROUND,.5)};
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
    background: ${e=>b(e.theme.BACKGROUND,.3)};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>b(e.theme.OFFSET,.5)};
    border-radius: 5px;
    
    &:hover {
      background: ${e=>b(e.theme.OFFSET,.7)};
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
`,oy=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e2232;
  color: #ffffff;
`,sy=x.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: #9d99ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,cy=x.p`
  margin-top: 20px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;function ly(){let{sceneReady:e,cacheReady:t,playerData:n,roomMetadata:r,sceneMetadata:i}=N(),{isInitialized:a}=iy(),{theme:o}=ze(),[s,c]=(0,M.useState)(`ForgeMain`),[u,d]=(0,M.useState)(!1),f=String(n?.role||``).toUpperCase()===`GM`,p=i[h.SHOW_PLAYER_VIEW]||!1,m=f||p,g=e&&t&&a;return(0,M.useEffect)(()=>{g&&Um()},[g]),(0,M.useEffect)(()=>{g&&!m&&s===`ForgeMain`&&c(`Party`)},[g,m,s]),(0,M.useEffect)(()=>{s!==`ForgeMain`&&l.action.setWidth(350)},[s]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ay,{theme:o}),!e||!t||!a?(0,P.jsxs)(oy,{children:[(0,P.jsx)(sy,{}),(0,P.jsx)(cy,{children:e?t?a?`Loading...`:`Initializing system...`:`Loading cache...`:`Connecting to scene...`})]}):(0,P.jsxs)(Bp,{children:[(0,P.jsx)(Ov,{}),(0,P.jsx)(Iv,{}),(0,P.jsx)(Gv,{}),(0,P.jsx)(ty,{}),(0,P.jsx)(ry,{}),(0,P.jsx)(Vp,{theme:o,$backgroundUrl:o.BACKGROUND_URL,children:(0,P.jsx)(nl,{mode:`wait`,children:(()=>{switch(s){case`ForgeMain`:return m?(0,P.jsx)(U_,{},`main`):(0,P.jsx)(dv,{},`party`);case`Settings`:return f?(0,P.jsx)(Vh,{},`settings`):(0,P.jsx)(U_,{},`main`);case`Party`:return(0,P.jsx)(dv,{},`party`);case`System`:return f?(0,P.jsx)(kh,{},`system`):(0,P.jsx)(U_,{},`main`);case`ChatLog`:return(0,P.jsx)(qh,{},`chatlog`)}})()})}),(0,P.jsx)(Qp,{isOpen:u,currentPage:s,onToggle:()=>d(!u),onNavigate:e=>{if(!m&&e===`ForgeMain`){c(`Party`),d(!1);return}if(!f&&(e===`Settings`||e===`System`)){c(`ForgeMain`),d(!1);return}c(e),d(!1)},canAccessInitiativeList:m})]})]})}var uy=ly,dy=class{static{this.ALPHANUMERICTEXTMATCH=/\s[\da-zA-Z]$/}};function fy(e){for(let t of my)if(e.includes(t)){let n=my[Math.floor(Math.random()*my.length)];return e.replace(t,n)}return py(e)}function py(e){return`${my[Math.floor(Math.random()*my.length)]} ${e}`}const my=`Grizzled.Wily.Stoic.Mellow.Pensive.Shrewd.Cautious.Hardy.Nimble.Tenacious.Gritty.Tolerant.Hardy.Adroit.Resilient.Slight.Stout.Durable.Subtle.Sober.Clever.Brave.Calm.Wise.Cunning.Alert.Swift.Agile.Loyal.Sturdy.Stable.Sneaky.Clever.Resourceful.Shady.Stalwart.Vigilant.Staunch.Fierce.Vigorous.Robust.Fearless.Dauntless.Resolute.Sagacious.Prudent.Judicious.Astute.Savvy.Sharp.Quick.Witty.Smart.Snippy.Crafty.Deft.Sly.Artful.Clever.Sneering.Tough.Rugged.Solid.Strong.Sturdy.Tough.Gritty.Rough.Hardened.Burly.Muscular.Brawny.Rowdy.Forceful.Snorting.Potent.Martial.Speckled.Mottled.Disheveled`.split(`.`);var hy=`com.battle-system.forge/view-unit`,gy=e=>e.trim().toLowerCase(),_y=e=>{let t=e.trim();return t?dy.ALPHANUMERICTEXTMATCH.test(t)?t.slice(0,-2):t:e},vy=async e=>{let t=await l.viewport.getHeight(),n=t>800?700:t-100;await l.popover.open({id:d.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(e)}`,height:n,width:350,anchorReference:`POSITION`,anchorPosition:{left:await l.viewport.getWidth()/2,top:await l.viewport.getHeight()/2},anchorOrigin:{horizontal:`CENTER`,vertical:`CENTER`},transformOrigin:{horizontal:`CENTER`,vertical:`CENTER`},hidePaper:!0,disableClickAway:!0})},yy=async e=>{let t=Array.from(new Set(e.map(e=>e.trim()).filter(e=>e.length>0))),n=new Map;if(t.length===0)return n;try{let{data:e,error:r}=await _e.from(`bs_forge_creatures`).select(`name,metadata,is_active`).eq(`is_active`,!0).in(`name`,t).limit(250);if(!r&&Array.isArray(e)){let t=e;for(let e of t){let t=gy(String(e.name||``));if(!t||n.has(t))continue;let r=e.metadata&&typeof e.metadata==`object`&&!Array.isArray(e.metadata)?le(e.metadata):null;r&&n.set(t,r)}}}catch(e){O.log(`Supabase collection lookup failed, falling back to local collection`,e)}let r=await ue(),i=new Map;for(let e of r){let t=gy(e.name);if(!t)continue;let n=i.get(t);n?n.push(e):i.set(t,[e])}for(let e of t){let t=gy(e);if(n.has(t))continue;let r=i.get(t)?.[0];!r||!r.metadata||n.set(t,le(r.metadata))}return n};function by({children:e}){N(e=>e.roomMetadata);let t=N(e=>e.sceneMetadata),n=N(e=>e.items),r=N(e=>e.playerData),i=t,a=i[h.HP_CURRENT_BID]!==void 0&&i[h.HP_MAX_BID]!==void 0,o=i[h.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?!0:i[h.SHOW_MODIFY_UNIT_CONTEXT_MENU]===!0;return(0,M.useEffect)(()=>{l.onReady(()=>{l.contextMenu.create({id:u.ON_LIST,icons:[{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,u.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,u.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,u.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,u.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}}],async onClick(e){if(O.info(`Add to Combat Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[u.ON_LIST]===!0))await l.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[u.ON_LIST],delete t.metadata[u.INITIATIVE]});else{let r=[],a=[],o=new Set(e.items.map(e=>e.id)),s=i[h.USE_DESCRIPTIVE_DUPLICATES]!==void 0,c=new Set(n.filter(e=>{if(o.has(e.id))return!1;let t=e.metadata[u.UNIT_NAME];return typeof t==`string`&&t.trim().length>0}).map(e=>gy(String(e.metadata[u.UNIT_NAME]))));for(let t of e.items){if(t.metadata[u.FABRICATED]===!0)continue;let e=_y(t.text?.plainText||t.name);r.push(e)}await l.action.setBadgeText(`Retrieving Data.. ⏱️`);let d=await yy(r);await l.action.setBadgeText(void 0);for(let t of e.items){let e={};if(t.metadata[u.FABRICATED]!==!0){let n=_y(t.text?.plainText||t.name),r=d.get(gy(n));if(r&&Object.assign(e,r),(typeof e[u.UNIT_NAME]!=`string`||!String(e[u.UNIT_NAME]).trim())&&(e[u.UNIT_NAME]=t.name),e[u.FABRICATED]=!0,s){let r=String(e[u.UNIT_NAME]||n||t.name).trim(),i=gy(r);if(i){let e=0;for(;c.has(i)&&e<20;)r=fy(r),i=gy(r),e+=1;i&&c.add(i)}e[u.UNIT_NAME]=r}}e[u.ON_LIST]=!0,e[u.INITIATIVE]=0,a.push({id:t.id,metadata:e})}await l.scene.items.updateItems(e.items,e=>{for(let n of e){let e=a.find(e=>e.id===n.id);if(e&&(Object.assign(n.metadata,e.metadata),t[h.SHOW_NAMES]===!0)){let t=n;t.text&&(t.text.plainText=String(e.metadata[u.UNIT_NAME]||``))}}})}}}),l.contextMenu.create({id:u.IN_PARTY,icons:[{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,u.IN_PARTY],operator:`!=`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,u.IN_PARTY],operator:`!=`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,u.IN_PARTY],operator:`==`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,u.IN_PARTY],operator:`==`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){O.info(`Add to Party Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[u.IN_PARTY]===!0)?await l.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[u.IN_PARTY]}):await l.scene.items.updateItems(e.items,e=>{for(let t of e)t.metadata[u.IN_PARTY]=!0})}}),l.contextMenu.create({id:hy,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){O.info(`View Unit Clicked: ${e.items[0].name}`);let r=e.items[0];if(!r)return;let a={};if(r.metadata[u.FABRICATED]!==!0){let e=_y(r.text?.plainText||r.name);await l.action.setBadgeText(`Retrieving Data.. ⏱️`);let o=await yy([e]);await l.action.setBadgeText(void 0);let s=o.get(gy(e));s&&Object.assign(a,s),(typeof a[u.UNIT_NAME]!=`string`||!String(a[u.UNIT_NAME]).trim())&&(a[u.UNIT_NAME]=r.name),a[u.FABRICATED]=!0,i[h.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[u.UNIT_NAME]!=null&&e.id!==r.id).map(e=>e.metadata[u.UNIT_NAME]).includes(e)&&(a[u.UNIT_NAME]=fy(e)),await l.scene.items.updateItems([r],e=>{let n=e[0];if(Object.assign(n.metadata,a),t[h.SHOW_NAMES]===!0){let e=n;e.text&&(e.text.plainText=String(a[u.UNIT_NAME]||``))}})}await vy(r.id)}}),a&&o?l.contextMenu.create({id:u.MODIFY_UNIT,icons:[{icon:`/icon.svg`,label:`Adjust HP`,filter:{some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Adjust HP`,filter:{every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e,t){O.info(`Adjust HP Clicked: ${e.items[0].name}`),await l.popover.open({id:g.CONTEXT_MENU,url:`/pages/forgecontext.html`,height:50,width:180,anchorElementId:t,hidePaper:!0})},embed:{url:`/pages/forgecontext.html?contextmenu=true`,height:70}}):l.contextMenu.remove(u.MODIFY_UNIT).catch(()=>{})})},[i,a,o]),(0,P.jsx)(P.Fragment,{children:e})}Ae.createRoot(document.getElementById(`root`)).render((0,P.jsx)(M.StrictMode,{children:(0,P.jsx)(D,{children:(0,P.jsx)(Ie,{children:(0,P.jsx)(by,{children:(0,P.jsx)(Re,{children:(0,P.jsx)(uy,{})})})})})}));