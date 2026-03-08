import{A as e,C as t,D as n,E as r,F as i,L as a,M as o,N as s,O as c,R as l,S as u,T as d,_ as f,b as p,c as m,d as h,f as g,g as _,h as v,j as y,k as b,l as x,m as S,o as C,p as w,s as T,t as E,u as ee,v as D,w as te,x as ne,y as O}from"./defaultgamesystem-DB0eKH9e.js";import{A as re,C as ie,D as ae,E as oe,F as se,M as ce,N as k,O as le,P as ue,S as A,T as j,b as de,c as fe,f as pe,g as me,h as he,j as ge,k as _e,l as ve,m as ye,n as be,p as xe,r as Se,s as Ce,u as we,v as Te,w as Ee,y as De}from"./unitCollectionRemote-B-sHLn8r.js";import{n as Oe,t as M}from"./MockData-DTzuSraw.js";var ke=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},Ae=(e=>e?ke(e):ke),N=l(i(),1),je=e=>e;function Me(e,t=je){let n=N.useSyncExternalStore(e.subscribe,N.useCallback(()=>t(e.getState()),[e,t]),N.useCallback(()=>t(e.getInitialState()),[e,t]));return N.useDebugValue(n),n}var Ne=e=>{let t=Ae(e),n=e=>Me(t,e);return Object.assign(n,t),n},Pe=(e=>e?Ne(e):Ne),Fe=l(s(),1);const P=Pe(e=>({cacheReady:!1,setCacheReady:t=>e({cacheReady:t}),sceneReady:!1,setSceneReady:t=>e({sceneReady:t}),items:[],setItems:t=>e({items:t}),localItems:[],setLocalItems:t=>e({localItems:t}),sceneMetadata:{},setSceneMetadata:t=>e({sceneMetadata:{...t}}),roomMetadata:{},setRoomMetadata:t=>e({roomMetadata:{...t}}),gridDpi:150,setGridDpi:t=>e({gridDpi:t}),playerData:void 0,setPlayerData:t=>e({playerData:t}),partyData:[],setPartyData:t=>e({partyData:t}),systemData:null,setSystemData:t=>e({systemData:t})}));var Ie=0;const Le=Pe(e=>({messages:[],initialized:!1,addMessage:t=>{let n=new Date,r=n.getHours(),i=n.getMinutes(),a=r>=12?`PM`:`AM`,o=`${r%12||12}:${i<10?`0${i}`:i} ${a}`;e(e=>({messages:[...e.messages,{id:Ie++,text:t,timestamp:o}]}))},setInitialized:t=>e({initialized:t})})),Re=()=>{Le.getState().initialized||(c.broadcast.onMessage(`${t.EXTENSIONID}/chatlog`,e=>{let t=Le.getState().addMessage;typeof e.data==`string`?t(e.data):typeof e.data==`object`&&e.data.message&&t(e.data.message)}),Le.getState().setInitialized(!0))};var F=d(),ze=`${t.EXTENSIONID}/chatlog`,Be=`${t.EXTENSIONID}/roll-notification`;function Ve({children:e}){let t=P(e=>e.setItems),n=P(e=>e.setLocalItems),r=P(e=>e.setSceneMetadata),i=P(e=>e.setRoomMetadata),a=P(e=>e.setGridDpi),o=P(e=>e.setPlayerData),s=P(e=>e.setPartyData),l=P(e=>e.setSceneReady),u=P(e=>e.setCacheReady);return(0,N.useEffect)(()=>{let e=(e,t)=>{let n=e[O.ENABLE_CONSOLE_LOG];typeof n==`boolean`&&k.setEnabled(n)},d=e=>{se(e);let{sceneMetadata:t,roomMetadata:n}=P.getState(),r=t,i=r[O.ENABLE_OBR_NOTIFICATION];if(r[O.SHOW_NOTIFICATION_TO_ALL]===!0){c.broadcast.sendMessage(ze,{message:e},{destination:`ALL`}),i===!0&&c.broadcast.sendMessage(Be,{message:e},{destination:`ALL`});return}Le.getState().addMessage(e),i===!0&&c.notification.show(e,`SUCCESS`)},f=({explicitMessage:e,tokenName:t,actionName:n,total:r})=>{if(typeof e==`string`&&e.trim().length>0)return e;let i=t||`Unknown`,a=n||`Action`;return typeof r==`number`&&Number.isFinite(r)?`${i} rolled ${a} for ${r}!`:`${i} rolled ${a}.`};Re();let p=c.broadcast.onMessage(Be,e=>{let t=e.data,n=typeof t?.message==`string`?t.message:null;n&&c.notification.show(n,`SUCCESS`)});ae(e=>{let t=oe(e.rollHtml);d(f({tokenName:e.senderName,actionName:e.actionName,total:t}))}),_e(e=>{d(f({explicitMessage:e.message}))}),le(e=>{d(f({tokenName:e.playerName,actionName:e.result.diceNotation,total:e.result.totalValue}))}),re(e=>{let t=e.output.trim();d(t.length>0?`${e.senderName} rolled ${e.actionName} for ${e.total}. ${t}`:f({tokenName:e.senderName,actionName:e.actionName,total:e.total}))});let m,h,g,_,v,y,b,x,S=async()=>{let[l,d,f,p,m,S,C,w,T,E,ee,D]=await Promise.all([c.scene.items.getItems(),c.scene.local.getItems(),c.scene.getMetadata(),c.room.getMetadata(),c.scene.grid.getDpi(),c.party.getPlayers(),c.player.getColor(),c.player.getRole(),c.player.getConnectionId(),c.player.getId(),c.player.getMetadata(),c.player.getName()]);t(l),n(d),r(f),i(p),e(f,p),a(m),o({id:E,name:D,connectionId:T,role:w,color:C,metadata:ee}),s(S),h=c.scene.items.onChange(t),g=c.scene.local.onChange(n),y=c.scene.grid.onChange(e=>a(e.dpi)),b=c.player.onChange(o),x=c.party.onChange(s),_=c.scene.onMetadataChange(t=>{r(t),e(t,P.getState().roomMetadata)}),v=c.room.onMetadataChange(t=>{i(t),e(P.getState().sceneMetadata,t)}),u(!0),k.log(`CacheManager: Cache is ready`)};return c.onReady(async()=>{let e=await c.scene.isReady();l(e),e&&(k.log(`Scene is ready on initial load, syncing cache...`),await S()),m=c.scene.onReadyChange(async e=>{l(e),e?(k.log(`Scene became ready, syncing cache...`),await S()):(k.log(`Scene is no longer ready, clearing cache...`),u(!1))})}),()=>{m?.(),h?.(),g?.(),_?.(),v?.(),y?.(),b?.(),x?.(),p?.()}},[l,u,t,n,r,i,a,o,s]),(0,F.jsx)(F.Fragment,{children:e})}var He=(0,N.createContext)(void 0);const Ue=({children:e})=>{let[t,n]=(0,N.useState)(v),r=(0,N.useCallback)((e,t,r,i,a)=>{n(n=>n.PRIMARY===e&&n.OFFSET===t&&n.BACKGROUND===r&&n.BORDER===i&&n.BACKGROUND_URL===(a||void 0)?n:_(e,t,r,i,a))},[]);return(0,F.jsx)(He.Provider,{value:{theme:t,setTheme:n,updateThemeFromSystem:r},children:e})},We=()=>{let e=(0,N.useContext)(He);if(!e)throw Error(`useForgeTheme must be used within a ThemeProvider`);return e};var Ge=(0,N.createContext)({});function Ke(e){let t=(0,N.useRef)(null);return t.current===null&&(t.current=e()),t.current}var I=typeof window<`u`,L=I?N.useLayoutEffect:N.useEffect,R=(0,N.createContext)(null);function qe(e,t){e.indexOf(t)===-1&&e.push(t)}function Je(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Ye=(e,t,n)=>n>t?t:n<e?e:n,Xe={},Ze=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Qe(e){return typeof e==`object`&&!!e}var $e=e=>/^0[^.\s]+$/u.test(e);function et(e){let t;return()=>(t===void 0&&(t=e()),t)}var tt=e=>e,nt=(e,t)=>n=>t(e(n)),rt=(...e)=>e.reduce(nt),it=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},at=class{constructor(){this.subscriptions=[]}add(e){return qe(this.subscriptions,e),()=>Je(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},ot=e=>e*1e3,st=e=>e/1e3;function ct(e,t){return t?e*(1e3/t):0}var lt=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,ut=1e-7,dt=12;function ft(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=lt(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>ut&&++s<dt);return o}function pt(e,t,n,r){if(e===t&&n===r)return tt;let i=t=>ft(t,0,1,e,n);return e=>e===0||e===1?e:lt(i(e),t,r)}var mt=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ht=e=>t=>1-e(1-t),gt=pt(.33,1.53,.69,.99),_t=ht(gt),vt=mt(_t),yt=e=>(e*=2)<1?.5*_t(e):.5*(2-2**(-10*(e-1))),bt=e=>1-Math.sin(Math.acos(e)),xt=ht(bt),St=mt(bt),Ct=pt(.42,0,1,1),wt=pt(0,0,.58,1),Tt=pt(.42,0,.58,1),Et=e=>Array.isArray(e)&&typeof e[0]!=`number`,Dt=e=>Array.isArray(e)&&typeof e[0]==`number`,Ot={linear:tt,easeIn:Ct,easeInOut:Tt,easeOut:wt,circIn:bt,circInOut:St,circOut:xt,backIn:_t,backInOut:vt,backOut:gt,anticipate:yt},kt=e=>typeof e==`string`,At=e=>{if(Dt(e)){e.length;let[t,n,r,i]=e;return pt(t,n,r,i)}else if(kt(e))return Ot[e],`${e}`,Ot[e];return e},jt=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],Mt={value:null,addProjectionMetrics:null};function Nt(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.has(e)||s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),t&&Mt.value&&Mt.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Pt=40;function Ft(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=jt.reduce((e,n)=>(e[n]=Nt(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Xe.useManualTiming?i.timestamp:performance.now();n=!1,Xe.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,Pt),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:jt.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<jt.length;t++)o[jt[t]].cancel(e)},state:i,steps:o}}var{schedule:z,cancel:It,state:B,steps:Lt}=Ft(typeof requestAnimationFrame<`u`?requestAnimationFrame:tt,!0),Rt;function zt(){Rt=void 0}var V={now:()=>(Rt===void 0&&V.set(B.isProcessing||Xe.useManualTiming?B.timestamp:performance.now()),Rt),set:e=>{Rt=e,queueMicrotask(zt)}},Bt={layout:0,mainThread:0,waapi:0},Vt=e=>t=>typeof t==`string`&&t.startsWith(e),Ht=Vt(`--`),Ut=Vt(`var(--`),Wt=e=>Ut(e)?Gt.test(e.split(`/*`)[0].trim()):!1,Gt=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Kt(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var qt={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Jt={...qt,transform:e=>Ye(0,1,e)},Yt={...qt,default:1},Xt=e=>Math.round(e*1e5)/1e5,Zt=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Qt(e){return e==null}var $t=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,en=(e,t)=>n=>!!(typeof n==`string`&&$t.test(n)&&n.startsWith(e)||t&&!Qt(n)&&Object.prototype.hasOwnProperty.call(n,t)),tn=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Zt);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},nn=e=>Ye(0,255,e),rn={...qt,transform:e=>Math.round(nn(e))},an={test:en(`rgb`,`red`),parse:tn(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+rn.transform(e)+`, `+rn.transform(t)+`, `+rn.transform(n)+`, `+Xt(Jt.transform(r))+`)`};function on(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var sn={test:en(`#`),parse:on,transform:an.transform},cn=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ln=cn(`deg`),un=cn(`%`),H=cn(`px`),dn=cn(`vh`),fn=cn(`vw`),pn=(()=>({...un,parse:e=>un.parse(e)/100,transform:e=>un.transform(e*100)}))(),mn={test:en(`hsl`,`hue`),parse:tn(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+un.transform(Xt(t))+`, `+un.transform(Xt(n))+`, `+Xt(Jt.transform(r))+`)`},U={test:e=>an.test(e)||sn.test(e)||mn.test(e),parse:e=>an.test(e)?an.parse(e):mn.test(e)?mn.parse(e):sn.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?an.transform(e):mn.transform(e),getAnimatableNone:e=>{let t=U.parse(e);return t.alpha=0,U.transform(t)}},hn=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function gn(e){return isNaN(e)&&typeof e==`string`&&(e.match(Zt)?.length||0)+(e.match(hn)?.length||0)>0}var _n=`number`,vn=`color`,yn=`var`,bn=`var(`,xn="${}",Sn=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Cn(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Sn,e=>(U.test(e)?(r.color.push(a),i.push(vn),n.push(U.parse(e))):e.startsWith(bn)?(r.var.push(a),i.push(yn),n.push(e)):(r.number.push(a),i.push(_n),n.push(parseFloat(e))),++a,xn)).split(xn),indexes:r,types:i}}function wn(e){return Cn(e).values}function Tn(e){let{split:t,types:n}=Cn(e),r=t.length;return e=>{let i=``;for(let a=0;a<r;a++)if(i+=t[a],e[a]!==void 0){let t=n[a];t===_n?i+=Xt(e[a]):t===vn?i+=U.transform(e[a]):i+=e[a]}return i}}var En=e=>typeof e==`number`?0:U.test(e)?U.getAnimatableNone(e):e;function Dn(e){let t=wn(e);return Tn(e)(t.map(En))}var On={test:gn,parse:wn,createTransformer:Tn,getAnimatableNone:Dn};function kn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function An({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=kn(s,r,e+1/3),a=kn(s,r,e),o=kn(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function jn(e,t){return n=>n>0?t:e}var W=(e,t,n)=>e+(t-e)*n,Mn=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Nn=[sn,an,mn],Pn=e=>Nn.find(t=>t.test(e));function Fn(e){let t=Pn(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===mn&&(n=An(n)),n}var In=(e,t)=>{let n=Fn(e),r=Fn(t);if(!n||!r)return jn(e,t);let i={...n};return e=>(i.red=Mn(n.red,r.red,e),i.green=Mn(n.green,r.green,e),i.blue=Mn(n.blue,r.blue,e),i.alpha=W(n.alpha,r.alpha,e),an.transform(i))},Ln=new Set([`none`,`hidden`]);function Rn(e,t){return Ln.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function zn(e,t){return n=>W(e,t,n)}function Bn(e){return typeof e==`number`?zn:typeof e==`string`?Wt(e)?jn:U.test(e)?In:Wn:Array.isArray(e)?Vn:typeof e==`object`?U.test(e)?In:Hn:jn}function Vn(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Bn(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Hn(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Bn(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Un(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Wn=(e,t)=>{let n=On.createTransformer(t),r=Cn(e),i=Cn(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Ln.has(e)&&!i.values.length||Ln.has(t)&&!r.values.length?Rn(e,t):rt(Vn(Un(r,i),i.values),n):(`${e}${t}`,jn(e,t))};function Gn(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?W(e,t,n):Bn(e)(e,t)}var Kn=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>z.update(t,e),stop:()=>It(t),now:()=>B.isProcessing?B.timestamp:V.now()}},qn=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Jn=2e4;function Yn(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Xn(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Yn(r),Jn);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:st(i)}}var Zn=5;function Qn(e,t,n){let r=Math.max(t-Zn,0);return ct(n-e(r),t-r)}var G={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},$n=.001;function er({duration:e=G.duration,bounce:t=G.bounce,velocity:n=G.velocity,mass:r=G.mass}){let i,a;G.maxDuration;let o=1-t;o=Ye(G.minDamping,G.maxDamping,o),e=Ye(G.minDuration,G.maxDuration,st(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=rr(t,o),c=Math.exp(-i);return $n-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=rr(t**2,o);return(-i(t)+$n>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-$n+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=nr(i,a,s);if(e=ot(e),isNaN(c))return{stiffness:G.stiffness,damping:G.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var tr=12;function nr(e,t,n){let r=n;for(let n=1;n<tr;n++)r-=e(r)/t(r);return r}function rr(e,t){return e*Math.sqrt(1-t*t)}var ir=[`duration`,`bounce`],ar=[`stiffness`,`damping`,`mass`];function or(e,t){return t.some(t=>e[t]!==void 0)}function sr(e){let t={velocity:G.velocity,stiffness:G.stiffness,damping:G.damping,mass:G.mass,isResolvedFromDuration:!1,...e};if(!or(e,ar)&&or(e,ir))if(e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Ye(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:G.mass,stiffness:i,damping:a}}else{let n=er(e);t={...t,...n,mass:G.mass},t.isResolvedFromDuration=!0}return t}function cr(e=G.visualDuration,t=G.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=sr({...n,velocity:-st(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=st(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?G.restSpeed.granular:G.restSpeed.default,i||=v?G.restDelta.granular:G.restDelta.default;let y;if(h<1){let e=rr(_,h);y=t=>o-Math.exp(-h*_*t)*((m+h*_*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}else if(h===1)y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}let b={calculatedDuration:p&&d||null,next:e=>{let t=y(e);if(p)s.done=e>=d;else{let n=e===0?m:0;h<1&&(n=e===0?ot(m):Qn(y,e,t));let a=Math.abs(n)<=r,c=Math.abs(o-t)<=i;s.done=a&&c}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Yn(b),Jn),t=qn(t=>b.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return b}cr.applyToOptions=e=>{let t=Xn(e,100,cr);return e.ease=t.ease,e.duration=ot(t.duration),e.type=`keyframes`,e};function lr({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=cr({keyframes:[f.value,m(f.value)],velocity:Qn(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function ur(e,t,n){let r=[],i=n||Xe.mix||Gn,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=rt(Array.isArray(t)?t[n]||tt:t,a)),r.push(a)}return r}function dr(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=ur(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=it(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Ye(e[0],e[a-1],t)):l}function fr(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=it(0,t,r);e.push(W(n,1,i))}}function pr(e){let t=[0];return fr(t,e.length-1),t}function mr(e,t){return e.map(e=>e*t)}function hr(e,t){return e.map(()=>t||Tt).splice(0,e.length-1)}function gr({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=Et(r)?r.map(At):At(r),a={done:!1,value:t[0]},o=dr(mr(n&&n.length===t.length?n:pr(t),e),t,{ease:Array.isArray(i)?i:hr(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var _r=e=>e!==null;function vr(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(_r),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var yr={decay:lr,inertia:lr,tween:gr,keyframes:gr,spring:cr};function br(e){typeof e.type==`string`&&(e.type=yr[e.type])}var xr=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},Sr=e=>e/100,Cr=class extends xr{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==V.now()&&this.tick(V.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},Bt.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;br(e);let{type:t=gr,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||gr;s!==gr&&typeof o[0]!=`number`&&(this.mixKeyframes=rt(Sr,Gn(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Yn(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Ye(0,1,n)*o}let b=_?{done:!1,value:l[0]}:y.next(v);i&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==lr&&(b.value=vr(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return st(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+st(e)}get time(){return st(this.currentTime)}set time(e){e=ot(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(V.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=st(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Kn,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(V.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,Bt.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function wr(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Tr=e=>e*180/Math.PI,Er=e=>Or(Tr(Math.atan2(e[1],e[0]))),Dr={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Er,rotateZ:Er,skewX:e=>Tr(Math.atan(e[1])),skewY:e=>Tr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Or=e=>(e%=360,e<0&&(e+=360),e),kr=Er,Ar=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),jr=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Mr={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ar,scaleY:jr,scale:e=>(Ar(e)+jr(e))/2,rotateX:e=>Or(Tr(Math.atan2(e[6],e[5]))),rotateY:e=>Or(Tr(Math.atan2(-e[2],e[0]))),rotateZ:kr,rotate:kr,skewX:e=>Tr(Math.atan(e[4])),skewY:e=>Tr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Nr(e){return e.includes(`scale`)?1:0}function Pr(e,t){if(!e||e===`none`)return Nr(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Mr,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Dr,i=t}if(!i)return Nr(t);let a=r[t],o=i[1].split(`,`).map(Ir);return typeof a==`function`?a(o):o[a]}var Fr=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Pr(n,t)};function Ir(e){return parseFloat(e.trim())}var Lr=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Rr=(()=>new Set(Lr))(),zr=e=>e===qt||e===H,Br=new Set([`x`,`y`,`z`]),Vr=Lr.filter(e=>!Br.has(e));function Hr(e){let t=[];return Vr.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var Ur={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Pr(t,`x`),y:(e,{transform:t})=>Pr(t,`y`)};Ur.translateX=Ur.x,Ur.translateY=Ur.y;var Wr=new Set,Gr=!1,Kr=!1,qr=!1;function Jr(){if(Kr){let e=Array.from(Wr).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Hr(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Kr=!1,Gr=!1,Wr.forEach(e=>e.complete(qr)),Wr.clear()}function Yr(){Wr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Kr=!0)})}function Xr(){qr=!0,Yr(),Jr(),qr=!1}var Zr=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Wr.add(this),Gr||(Gr=!0,z.read(Yr),z.resolveKeyframes(Jr))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}wr(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Wr.delete(this)}cancel(){this.state===`scheduled`&&(Wr.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Qr=e=>e.startsWith(`--`);function $r(e,t,n){Qr(t)?e.style.setProperty(t,n):e.style[t]=n}var ei=et(()=>window.ScrollTimeline!==void 0),ti={};function ni(e,t){let n=et(e);return()=>ti[t]??n()}var ri=ni(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),ii=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,ai={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:ii([0,.65,.55,1]),circOut:ii([.55,0,1,.45]),backIn:ii([.31,.01,.66,-.59]),backOut:ii([.33,1.53,.69,.99])};function oi(e,t){if(e)return typeof e==`function`?ri()?qn(e,t):`ease-out`:Dt(e)?ii(e):Array.isArray(e)?e.map(e=>oi(e,t)||ai.easeOut):ai[e]}function si(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=oi(s,i);Array.isArray(d)&&(u.easing=d),Mt.value&&Bt.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return Mt.value&&p.finished.finally(()=>{Bt.waapi--}),p}function ci(e){return typeof e==`function`&&`applyToOptions`in e}function li({type:e,...t}){return ci(e)&&ri()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var ui=class extends xr{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=li(e);this.animation=si(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=vr(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):$r(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return st(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+st(e)}get time(){return st(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ot(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&ei()?(this.animation.timeline=e,tt):t(this)}},di={anticipate:yt,backInOut:vt,circInOut:St};function fi(e){return e in di}function pi(e){typeof e.ease==`string`&&fi(e.ease)&&(e.ease=di[e.ease])}var mi=10,hi=class extends ui{constructor(e){pi(e),br(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Cr({...a,autoplay:!1}),s=Math.max(mi,V.now()-this.startTime),c=Ye(0,mi,s-mi);t.setWithVelocity(o.sample(Math.max(0,s-c)).value,o.sample(s).value,c),o.stop()}},gi=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(On.test(e)||e===`0`)&&!e.startsWith(`url(`));function _i(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function vi(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=gi(i,t),s=gi(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:_i(e)||(n===`spring`||ci(n))&&r}function yi(e){e.duration=0,e.type=`keyframes`}var bi=new Set([`opacity`,`clipPath`,`filter`,`transform`]),xi=et(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Si(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:s,transformTemplate:c}=t.owner.getProps();return xi()&&n&&bi.has(n)&&(n!==`transform`||!c)&&!s&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Ci=40,wi=class extends xr{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=V.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||Zr)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=V.now(),vi(e,i,a,o)||((Xe.instantAnimations||!s)&&l?.(vr(e,n,t)),e[0]=e[e.length-1],yi(n),n.repeat=0);let u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Ci?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!c&&Si(u),f=u.motionValue?.owner?.current,p=d?new hi({...u,element:f}):new Cr(u);p.finished.then(()=>{this.notifyFinished()}).catch(tt),this.pendingTimeline&&=(this.stopTimeline=p.attachTimeline(this.pendingTimeline),void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Xr()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Ti(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Ei=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Di(e){let t=Ei.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Oi(e,t,n=1){`${e}`;let[r,i]=Di(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Ze(e)?parseFloat(e):e}return Wt(i)?Oi(i,t,n+1):i}var ki={type:`spring`,stiffness:500,damping:25,restSpeed:10},Ai=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),ji={type:`keyframes`,duration:.8},Mi={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Ni=(e,{keyframes:t})=>t.length>2?ji:Rr.has(e)?e.startsWith(`scale`)?Ai(t[1]):ki:Mi,Pi=e=>e!==null;function Fi(e,{repeat:t,repeatType:n=`loop`},r){let i=e.filter(Pi),a=t&&n!==`loop`&&t%2==1?0:i.length-1;return!a||r===void 0?i[a]:r}function Ii(e,t){return e?.[t]??e?.default??e}function Li({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:l,...u}){return!!Object.keys(u).length}var Ri=(e,t,n,r={},i,a)=>o=>{let s=Ii(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=ot(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Li(s)||Object.assign(u,Ni(e,u)),u.duration&&=ot(u.duration),u.repeatDelay&&=ot(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(yi(u),u.delay===0&&(d=!0)),(Xe.instantAnimations||Xe.skipAnimations)&&(d=!0,yi(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Fi(u.keyframes,s);if(e!==void 0){z.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Cr(u):new wi(u)};function zi(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Bi(e,t,n,r){if(typeof t==`function`){let[i,a]=zi(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=zi(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Vi(e,t,n){let r=e.getProps();return Bi(r,t,n===void 0?r.custom:n,e)}var Hi=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Lr]),Ui=30,Wi=e=>!isNaN(parseFloat(e)),Gi={current:void 0},Ki=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=V.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=V.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Wi(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new at);let n=this.events[e].add(t);return e===`change`?()=>{n(),z.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Gi.current&&Gi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=V.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ui)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Ui);return ct(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function qi(e,t){return new Ki(e,t)}var Ji=e=>Array.isArray(e);function Yi(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,qi(n))}function Xi(e){return Ji(e)?e[e.length-1]||0:e}function Zi(e,t){let{transitionEnd:n={},transition:r={},...i}=Vi(e,t)||{};for(let t in i={...i,...n},i)Yi(e,t,Xi(i[t]))}var Qi=e=>!!(e&&e.getVelocity);function $i(e){return!!(Qi(e)&&e.add)}function ea(e,t){let n=e.getValue(`willChange`);if($i(n))return n.add(t);if(!n&&Xe.WillChange){let n=new Xe.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function ta(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var na=`data-`+ta(`framerAppearId`);function ra(e){return e.props[na]}function ia({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function aa(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);let c=[],l=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||l&&ia(l,t))continue;let o={delay:n,...Ii(a||{},t)},u=r.get();if(u!==void 0&&!r.isAnimating&&!Array.isArray(i)&&i===u&&!o.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){let n=ra(e);if(n){let e=window.MotionHandoffAnimation(n,t,z);e!==null&&(o.startTime=e,d=!0)}}ea(e,t),r.start(Ri(t,r,i,e.shouldReduceMotion&&Hi.has(t)?{type:!1}:o,e,d));let f=r.animation;f&&c.push(f)}return o&&Promise.all(c).then(()=>{z.update(()=>{o&&Zi(e,o)})}),c}function oa(e,t,n={}){let r=Vi(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(aa(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return sa(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function sa(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(oa(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Ti(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function ca(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>oa(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=oa(e,t,n);else{let i=typeof t==`function`?Vi(e,t,n.custom):t;r=Promise.all(aa(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var la={test:e=>e===`auto`,parse:e=>e},ua=e=>t=>t.test(e),da=[qt,H,un,ln,fn,dn,la],fa=e=>da.find(ua(e));function pa(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||$e(e)}var ma=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function ha(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Zt)||[];if(!r)return e;let i=n.replace(r,``),a=ma.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var ga=/\b([a-z-]*)\(.*?\)/gu,_a={...On,getAnimatableNone:e=>{let t=e.match(ga);return t?t.map(ha).join(` `):e}},va={...qt,transform:Math.round},ya={borderWidth:H,borderTopWidth:H,borderRightWidth:H,borderBottomWidth:H,borderLeftWidth:H,borderRadius:H,borderTopLeftRadius:H,borderTopRightRadius:H,borderBottomRightRadius:H,borderBottomLeftRadius:H,width:H,maxWidth:H,height:H,maxHeight:H,top:H,right:H,bottom:H,left:H,inset:H,insetBlock:H,insetBlockStart:H,insetBlockEnd:H,insetInline:H,insetInlineStart:H,insetInlineEnd:H,padding:H,paddingTop:H,paddingRight:H,paddingBottom:H,paddingLeft:H,paddingBlock:H,paddingBlockStart:H,paddingBlockEnd:H,paddingInline:H,paddingInlineStart:H,paddingInlineEnd:H,margin:H,marginTop:H,marginRight:H,marginBottom:H,marginLeft:H,marginBlock:H,marginBlockStart:H,marginBlockEnd:H,marginInline:H,marginInlineStart:H,marginInlineEnd:H,fontSize:H,backgroundPositionX:H,backgroundPositionY:H,rotate:ln,rotateX:ln,rotateY:ln,rotateZ:ln,scale:Yt,scaleX:Yt,scaleY:Yt,scaleZ:Yt,skew:ln,skewX:ln,skewY:ln,distance:H,translateX:H,translateY:H,translateZ:H,x:H,y:H,z:H,perspective:H,transformPerspective:H,opacity:Jt,originX:pn,originY:pn,originZ:H,zIndex:va,fillOpacity:Jt,strokeOpacity:Jt,numOctaves:va},ba={...ya,color:U,backgroundColor:U,outlineColor:U,fill:U,stroke:U,borderColor:U,borderTopColor:U,borderRightColor:U,borderBottomColor:U,borderLeftColor:U,filter:_a,WebkitFilter:_a},xa=e=>ba[e];function Sa(e,t){let n=xa(e);return n!==_a&&(n=On),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Ca=new Set([`auto`,`none`,`0`]);function wa(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Ca.has(t)&&Cn(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Sa(n,i)}var Ta=class extends Zr{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Wt(r))){let i=Oi(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Hi.has(n)||e.length!==2)return;let[r,i]=e,a=fa(r),o=fa(i);if(Kt(r)!==Kt(i)&&Ur[n]){this.needsMeasurement=!0;return}if(a!==o)if(zr(a)&&zr(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Ur[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||pa(e[t]))&&n.push(t);n.length&&wa(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ur[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Ur[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function Ea(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var Da=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Oa(e){return Qe(e)&&`offsetHeight`in e}var{schedule:ka,cancel:Aa}=Ft(queueMicrotask,!1),ja={x:!1,y:!1};function Ma(){return ja.x||ja.y}function Na(e){return e===`x`||e===`y`?ja[e]?null:(ja[e]=!0,()=>{ja[e]=!1}):ja.x||ja.y?null:(ja.x=ja.y=!0,()=>{ja.x=ja.y=!1})}function Pa(e,t){let n=Ea(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Fa(e){return!(e.pointerType===`touch`||Ma())}function Ia(e,t,n={}){let[r,i,a]=Pa(e,n),o=e=>{if(!Fa(e))return;let{target:n}=e,r=t(n,e);if(typeof r!=`function`||!n)return;let a=e=>{Fa(e)&&(r(e),n.removeEventListener(`pointerleave`,a))};n.addEventListener(`pointerleave`,a,i)};return r.forEach(e=>{e.addEventListener(`pointerenter`,o,i)}),a}var La=(e,t)=>t?e===t?!0:La(e,t.parentElement):!1,Ra=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,za=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Ba(e){return za.has(e.tagName)||e.isContentEditable===!0}var Va=new WeakSet;function Ha(e){return t=>{t.key===`Enter`&&e(t)}}function Ua(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Wa=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Ha(()=>{if(Va.has(n))return;Ua(n,`down`);let e=Ha(()=>{Ua(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Ua(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Ga(e){return Ra(e)&&!Ma()}function Ka(e,t,n={}){let[r,i,a]=Pa(e,n),o=e=>{let r=e.currentTarget;if(!Ga(e))return;Va.add(r);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),Va.has(r)&&Va.delete(r),Ga(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||La(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Oa(e)&&(e.addEventListener(`focus`,e=>Wa(e,i)),!Ba(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function qa(e){return Qe(e)&&`ownerSVGElement`in e}function Ja(e){return qa(e)&&e.tagName===`svg`}var Ya=[...da,U,On],Xa=e=>Ya.find(ua(e)),Za=()=>({translate:0,scale:1,origin:0,originPoint:0}),Qa=()=>({x:Za(),y:Za()}),$a=()=>({min:0,max:0}),K=()=>({x:$a(),y:$a()}),eo={current:null},to={current:!1},no=typeof window<`u`;function ro(){if(to.current=!0,no)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>eo.current=e.matches;e.addEventListener(`change`,t),t()}else eo.current=!1}var io=new WeakMap;function ao(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function oo(e){return typeof e==`string`||Array.isArray(e)}var so=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],co=[`initial`,...so];function lo(e){return ao(e.animate)||co.some(t=>oo(e[t]))}function uo(e){return!!(lo(e)||e.variants)}function fo(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Qi(i))e.addValue(r,i);else if(Qi(a))e.addValue(r,qi(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,qi(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var po=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],mo={};function ho(e){mo=e}function go(){return mo}var _o=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Zr,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=V.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,z.render(this.render,!1,!0))};let{latestValues:s,renderState:c}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!i,this.isControllingVariants=lo(t),this.isVariantNode=uo(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in u){let t=u[e];s[e]!==void 0&&Qi(t)&&t.set(s[e])}}mount(e){this.current=e,io.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(to.current||ro(),this.shouldReduceMotion=eo.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in this.projection&&this.projection.unmount(),It(this.notifyUpdate),It(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let n=Rr.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&z.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in mo){let t=mo[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):K()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<po.length;t++){let n=po[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=fo(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=qi(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Ze(n)||$e(n))?n=parseFloat(n):!Xa(n)&&On.test(t)&&(n=Sa(e,t)),this.setBaseTarget(e,Qi(n)?n.get():n)),Qi(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Bi(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Qi(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new at),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){ka.render(this.render)}},vo=class extends _o{constructor(){super(...arguments),this.KeyframeResolver=Ta}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Qi(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},yo=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function bo({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function xo({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function So(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Co(e){return e===void 0||e===1}function wo({scale:e,scaleX:t,scaleY:n}){return!Co(e)||!Co(t)||!Co(n)}function To(e){return wo(e)||Eo(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Eo(e){return Do(e.x)||Do(e.y)}function Do(e){return e&&e!==`0%`}function Oo(e,t,n){return n+t*(e-n)}function ko(e,t,n,r,i){return i!==void 0&&(e=Oo(e,i,r)),Oo(e,n,r)+t}function Ao(e,t=0,n=1,r,i){e.min=ko(e.min,t,n,r,i),e.max=ko(e.max,t,n,r,i)}function jo(e,{x:t,y:n}){Ao(e.x,t.translate,t.scale,t.originPoint),Ao(e.y,n.translate,n.scale,n.originPoint)}var Mo=.999999999999,No=1.0000000000001;function Po(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Lo(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,jo(e,o)),r&&To(a.latestValues)&&Lo(e,a.latestValues))}t.x<No&&t.x>Mo&&(t.x=1),t.y<No&&t.y>Mo&&(t.y=1)}function Fo(e,t){e.min+=t,e.max+=t}function Io(e,t,n,r,i=.5){Ao(e,t,n,W(e.min,e.max,i),r)}function Lo(e,t){Io(e.x,t.x,t.scaleX,t.scale,t.originX),Io(e.y,t.y,t.scaleY,t.scale,t.originY)}function Ro(e,t){return bo(So(e.getBoundingClientRect(),t))}function zo(e,t,n){let r=Ro(e,n),{scroll:i}=t;return i&&(Fo(r.x,i.offset.x),Fo(r.y,i.offset.y)),r}var Bo={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Vo=Lr.length;function Ho(e,t,n){let r=``,i=!0;for(let a=0;a<Vo;a++){let o=Lr[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=Da(s,ya[o]);if(!c){i=!1;let t=Bo[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Uo(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Rr.has(e)){o=!0;continue}else if(Ht(e)){i[e]=n;continue}else{let t=Da(n,ya[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Ho(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Wo(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Go(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Ko={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(H.test(e))e=parseFloat(e);else return e;return`${Go(e,t.target.x)}% ${Go(e,t.target.y)}%`}},qo={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=On.parse(e);if(i.length>5)return r;let a=On.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=W(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Jo={borderRadius:{...Ko,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:Ko,borderTopRightRadius:Ko,borderBottomLeftRadius:Ko,borderBottomRightRadius:Ko,boxShadow:qo};function Yo(e,{layout:t,layoutId:n}){return Rr.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Jo[e]||e===`opacity`)}function Xo(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Qi(r[t])||i&&Qi(i[t])||Yo(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Zo(e){return window.getComputedStyle(e)}var Qo=class extends vo{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Wo}readValueFromInstance(e,t){if(Rr.has(t))return this.projection?.isProjecting?Nr(t):Fr(e,t);{let n=Zo(e),r=(Ht(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ro(e,t)}build(e,t,n){Uo(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Xo(e,t,n)}},$o={offset:`stroke-dashoffset`,array:`stroke-dasharray`},es={offset:`strokeDashoffset`,array:`strokeDasharray`};function ts(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?$o:es;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var ns=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function rs(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Uo(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of ns)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&ts(d,i,a,o,!1)}var is=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),as=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function os(e,t,n,r){for(let n in Wo(e,t,void 0,r),t.attrs)e.setAttribute(is.has(n)?n:ta(n),t.attrs[n])}function ss(e,t,n){let r=Xo(e,t,n);for(let n in e)if(Qi(e[n])||Qi(t[n])){let t=Lr.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var cs=class extends vo{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=K}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Rr.has(t)){let e=xa(t);return e&&e.default||0}return t=is.has(t)?t:ta(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return ss(e,t,n)}build(e,t,n){rs(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){os(e,t,n,r)}mount(e){this.isSVGTag=as(e.tagName),super.mount(e)}},ls=co.length;function us(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&us(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<ls;n++){let r=co[n],i=e.props[r];(oo(i)||i===!1)&&(t[r]=i)}return t}function ds(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var fs=[...so].reverse(),ps=so.length;function ms(e){return t=>Promise.all(t.map(({animation:t,options:n})=>ca(e,t,n)))}function hs(e){let t=ms(e),n=vs(),r=!0,i=t=>(n,r)=>{let i=Vi(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(n){t=n(e)}function o(a){let{props:o}=e,s=us(e.parent)||{},c=[],l=new Set,u={},d=1/0;for(let t=0;t<ps;t++){let f=fs[t],p=n[f],m=o[f]===void 0?s[f]:o[f],h=oo(m),g=f===a?p.isActive:null;g===!1&&(d=t);let _=m===s[f]&&m!==o[f]&&h;if(_&&r&&e.manuallyAnimateOnMount&&(_=!1),p.protectedKeys={...u},!p.isActive&&g===null||!m&&!p.prevProp||ao(m)||typeof m==`boolean`)continue;let v=gs(p.prevProp,m),y=v||f===a&&p.isActive&&!_&&h||t>d&&h,b=!1,x=Array.isArray(m)?m:[m],S=x.reduce(i(f),{});g===!1&&(S={});let{prevResolvedValues:C={}}=p,w={...C,...S},T=t=>{y=!0,l.has(t)&&(b=!0,l.delete(t)),p.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in w){let t=S[e],n=C[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Ji(t)&&Ji(n)?!ds(t,n):t!==n,r?t==null?l.add(e):T(e):t!==void 0&&l.has(e)?T(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=S,p.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(y=!1);let E=_&&v;y&&(!E||b)&&c.push(...x.map(t=>{let n={type:f};if(typeof t==`string`&&r&&!E&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Vi(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Ti(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(l.size){let t={};if(typeof o.initial!=`boolean`){let n=Vi(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}l.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),c.push({animation:t})}let f=!!c.length;return r&&(o.initial===!1||o.initial===o.animate)&&!e.manuallyAnimateOnMount&&(f=!1),r=!1,f?t(c):Promise.resolve()}function s(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=o(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=vs()}}}function gs(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!ds(t,e):!1}function _s(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function vs(){return{animate:_s(!0),whileInView:_s(),whileHover:_s(),whileTap:_s(),whileDrag:_s(),whileFocus:_s(),exit:_s()}}function ys(e,t){e.min=t.min,e.max=t.max}function bs(e,t){ys(e.x,t.x),ys(e.y,t.y)}function xs(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Ss=1e-4,Cs=1-Ss,ws=1+Ss,Ts=.01,Es=0-Ts,Ds=0+Ts;function Os(e){return e.max-e.min}function ks(e,t,n){return Math.abs(e-t)<=n}function As(e,t,n,r=.5){e.origin=r,e.originPoint=W(t.min,t.max,e.origin),e.scale=Os(n)/Os(t),e.translate=W(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Cs&&e.scale<=ws||isNaN(e.scale))&&(e.scale=1),(e.translate>=Es&&e.translate<=Ds||isNaN(e.translate))&&(e.translate=0)}function js(e,t,n,r){As(e.x,t.x,n.x,r?r.originX:void 0),As(e.y,t.y,n.y,r?r.originY:void 0)}function Ms(e,t,n){e.min=n.min+t.min,e.max=e.min+Os(t)}function Ns(e,t,n){Ms(e.x,t.x,n.x),Ms(e.y,t.y,n.y)}function Ps(e,t,n){e.min=t.min-n.min,e.max=e.min+Os(t)}function Fs(e,t,n){Ps(e.x,t.x,n.x),Ps(e.y,t.y,n.y)}function Is(e,t,n,r,i){return e-=t,e=Oo(e,1/n,r),i!==void 0&&(e=Oo(e,1/i,r)),e}function Ls(e,t=0,n=1,r=.5,i,a=e,o=e){if(un.test(t)&&(t=parseFloat(t),t=W(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=W(a.min,a.max,r);e===a&&(s-=t),e.min=Is(e.min,t,n,s,i),e.max=Is(e.max,t,n,s,i)}function Rs(e,t,[n,r,i],a,o){Ls(e,t[n],t[r],t[i],t.scale,a,o)}var zs=[`x`,`scaleX`,`originX`],Bs=[`y`,`scaleY`,`originY`];function Vs(e,t,n,r){Rs(e.x,t,zs,n?n.x:void 0,r?r.x:void 0),Rs(e.y,t,Bs,n?n.y:void 0,r?r.y:void 0)}function Hs(e){return e.translate===0&&e.scale===1}function Us(e){return Hs(e.x)&&Hs(e.y)}function Ws(e,t){return e.min===t.min&&e.max===t.max}function Gs(e,t){return Ws(e.x,t.x)&&Ws(e.y,t.y)}function Ks(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function qs(e,t){return Ks(e.x,t.x)&&Ks(e.y,t.y)}function Js(e){return Os(e.x)/Os(e.y)}function Ys(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Xs(e){return[e(`x`),e(`y`)]}function Zs(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Qs=[`TopLeft`,`TopRight`,`BottomLeft`,`BottomRight`],$s=Qs.length,ec=e=>typeof e==`string`?parseFloat(e):e,tc=e=>typeof e==`number`||H.test(e);function nc(e,t,n,r,i,a){i?(e.opacity=W(0,n.opacity??1,ic(r)),e.opacityExit=W(t.opacity??1,0,ac(r))):a&&(e.opacity=W(t.opacity??1,n.opacity??1,r));for(let i=0;i<$s;i++){let a=`border${Qs[i]}Radius`,o=rc(t,a),s=rc(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||tc(o)===tc(s)?(e[a]=Math.max(W(ec(o),ec(s),r),0),(un.test(s)||un.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=W(t.rotate||0,n.rotate||0,r))}function rc(e,t){return e[t]===void 0?e.borderRadius:e[t]}var ic=oc(0,.5,xt),ac=oc(.5,.95,tt);function oc(e,t,n){return r=>r<e?0:r>t?1:n(it(e,t,r))}function sc(e,t,n){let r=Qi(e)?e:qi(e);return r.start(Ri(``,r,t,n)),r.animation}function cc(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var lc=(e,t)=>e.depth-t.depth,uc=class{constructor(){this.children=[],this.isDirty=!1}add(e){qe(this.children,e),this.isDirty=!0}remove(e){Je(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(lc),this.isDirty=!1,this.children.forEach(e)}};function dc(e,t){let n=V.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(It(r),e(a-t))};return z.setup(r,!0),()=>It(r)}function fc(e){return Qi(e)?e.get():e}var pc=class{constructor(){this.members=[]}add(e){qe(this.members,e),e.scheduleRender()}remove(e){if(Je(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t=this.members.findIndex(t=>e===t);if(t===0)return!1;let n;for(let e=t;e>=0;e--){let t=this.members[e];if(t.isPresent!==!1){n=t;break}}return n?(this.promote(n),!0):!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender();let r=n.options.layoutDependency,i=e.options.layoutDependency;r!==void 0&&i!==void 0&&r===i||(e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0));let{crossfade:a}=e.options;a===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}},mc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},hc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},gc=[``,`X`,`Y`,`Z`],_c=1e3,vc=0;function yc(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function bc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=ra(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,z,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&bc(r)}function xc({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=vc++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Mt.value&&(hc.nodes=hc.calculatedTargetDeltas=hc.calculatedProjections=0),this.nodes.forEach(wc),this.nodes.forEach(jc),this.nodes.forEach(Mc),this.nodes.forEach(Tc),Mt.addProjectionMetrics&&Mt.addProjectionMetrics(hc)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new uc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new at),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=qa(t)&&!Ja(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;z.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=dc(i,250),mc.hasAnimatedSinceResize&&(mc.hasAnimatedSinceResize=!1,this.nodes.forEach(Ac)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||zc,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!qs(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Ii(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||Ac(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),It(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Nc),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&bc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Dc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Oc);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(kc),this.nodes.forEach(Sc),this.nodes.forEach(Cc)):this.nodes.forEach(Oc),this.clearAllSnapshots();let e=V.now();B.delta=Ye(0,1e3/60,e-B.timestamp),B.timestamp=e,B.isProcessing=!0,Lt.update.process(B),Lt.preRender.process(B),Lt.render.process(B),B.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ka.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Ec),this.sharedNodes.forEach(Pc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,z.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){z.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Os(this.snapshot.measuredBox.x)&&!Os(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=K(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Us(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||To(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Uc(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return K();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Gc))){let{scroll:e}=this.root;e&&(Fo(t.x,e.offset.x),Fo(t.y,e.offset.y))}return t}removeElementScroll(e){let t=K();if(bs(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&bs(t,e),Fo(t.x,i.offset.x),Fo(t.y,i.offset.y))}return t}applyTransform(e,t=!1){let n=K();bs(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Lo(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),To(r.latestValues)&&Lo(n,r.latestValues)}return To(this.latestValues)&&Lo(n,this.latestValues),n}removeTransform(e){let t=K();bs(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!To(n.latestValues))continue;wo(n.latestValues)&&n.updateSnapshot();let r=K();bs(r,n.measurePageBox()),Vs(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return To(this.latestValues)&&Vs(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==B.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=B.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=K(),this.targetWithTransforms=K()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Ns(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):bs(this.target,this.layout.layoutBox),jo(this.target,this.targetDelta)):bs(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Mt.value&&hc.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||wo(this.parent.latestValues)||Eo(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=K(),this.relativeTargetOrigin=K(),Fs(this.relativeTargetOrigin,t,n),bs(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===B.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;bs(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Po(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=K());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(xs(this.prevProjectionDelta.x,this.projectionDelta.x),xs(this.prevProjectionDelta.y,this.projectionDelta.y)),js(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Ys(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ys(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Mt.value&&hc.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Qa(),this.projectionDelta=Qa(),this.projectionDeltaWithTransform=Qa()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Qa();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=K(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Rc));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;Fc(a.x,e.x,n),Fc(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Fs(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Lc(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Gs(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=K(),bs(d,this.relativeTarget)),s&&(this.animationValues=i,nc(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(It(this.pendingAnimation),void 0),this.pendingAnimation=z.update(()=>{mc.hasAnimatedSinceResize=!0,Bt.layout++,this.motionValue||=qi(0),this.currentAnimation=sc(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Bt.layout--},onComplete:()=>{Bt.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(_c),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Wc(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||K();let t=Os(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Os(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}bs(t,n),Lo(t,i),js(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new pc),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&yc(`z`,e,r,this.animationValues);for(let t=0;t<gc.length;t++)yc(`rotate${gc[t]}`,e,r,this.animationValues),yc(`skew${gc[t]}`,e,r,this.animationValues);for(let t in e.render(),r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=fc(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=fc(t?.pointerEvents)||``),this.hasProjected&&!To(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Zs(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;for(let t in e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit,Jo){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Jo[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?fc(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Dc),this.root.sharedNodes.clear()}}}function Sc(e){e.updateLayout()}function Cc(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;i===`size`?Xs(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Os(r);r.min=n[e].min,r.max=r.min+i}):Wc(i,t.layoutBox,n)&&Xs(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Os(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Qa();js(o,n,t.layoutBox);let s=Qa();a?js(s,e.applyTransform(r,!0),t.measuredBox):js(s,n,t.layoutBox);let c=!Us(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=K();Fs(o,t.layoutBox,i.layoutBox);let s=K();Fs(s,n,a.layoutBox),qs(o,s)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function wc(e){Mt.value&&hc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function Tc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Ec(e){e.clearSnapshot()}function Dc(e){e.clearMeasurements()}function Oc(e){e.isLayoutDirty=!1}function kc(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Ac(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function jc(e){e.resolveTargetDelta()}function Mc(e){e.calcProjection()}function Nc(e){e.resetSkewAndRotation()}function Pc(e){e.removeLeadSnapshot()}function Fc(e,t,n){e.translate=W(t.translate,0,n),e.scale=W(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Ic(e,t,n,r){e.min=W(t.min,n.min,r),e.max=W(t.max,n.max,r)}function Lc(e,t,n,r){Ic(e.x,t.x,n.x,r),Ic(e.y,t.y,n.y,r)}function Rc(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var zc={duration:.45,ease:[.4,0,.1,1]},Bc=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Vc=Bc(`applewebkit/`)&&!Bc(`chrome/`)?Math.round:tt;function Hc(e){e.min=Vc(e.min),e.max=Vc(e.max)}function Uc(e){Hc(e.x),Hc(e.y)}function Wc(e,t,n){return e===`position`||e===`preserve-aspect`&&!ks(Js(t),Js(n),.2)}function Gc(e){return e!==e.root&&e.scroll?.wasRoot}var Kc=xc({attachResizeListener:(e,t)=>cc(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),qc={current:void 0},Jc=xc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!qc.current){let e=new Kc({});e.mount(window),e.setOptions({layoutScroll:!0}),qc.current=e}return qc.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Yc=(0,N.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Xc(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Zc(...e){return t=>{let n=!1,r=e.map(e=>{let r=Xc(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Xc(e[t],null)}}}}function Qc(...e){return N.useCallback(Zc(...e),e)}var $c=class extends N.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=Oa(e)&&e.offsetWidth||0,r=Oa(e)&&e.offsetHeight||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left,i.bottom=r-i.height-i.top}return null}componentDidUpdate(){}render(){return this.props.children}};function el({children:e,isPresent:t,anchorX:n,anchorY:r,root:i}){let a=(0,N.useId)(),o=(0,N.useRef)(null),s=(0,N.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=(0,N.useContext)(Yc),l=Qc(o,e.props?.ref??e?.ref);return(0,N.useInsertionEffect)(()=>{let{width:e,height:l,top:u,left:d,right:f,bottom:p}=s.current;if(t||!o.current||!e||!l)return;let m=n===`left`?`left: ${d}`:`right: ${f}`,h=r===`bottom`?`bottom: ${p}`:`top: ${u}`;o.current.dataset.motionPopId=a;let g=document.createElement(`style`);c&&(g.nonce=c);let _=i??document.head;return _.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${m}px !important;
            ${h}px !important;
          }
        `),()=>{_.contains(g)&&_.removeChild(g)}},[t]),(0,F.jsx)($c,{isPresent:t,childRef:o,sizeRef:s,children:N.cloneElement(e,{ref:l})})}var tl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Ke(nl),d=(0,N.useId)(),f=!0,p=(0,N.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,N.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),N.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),o===`popLayout`&&(e=(0,F.jsx)(el,{isPresent:n,anchorX:s,anchorY:c,root:l,children:e})),(0,F.jsx)(R.Provider,{value:p,children:e})};function nl(){return new Map}function rl(e=!0){let t=(0,N.useContext)(R);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,N.useId)();(0,N.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,N.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var il=e=>e.key||``;function al(e){let t=[];return N.Children.forEach(e,e=>{(0,N.isValidElement)(e)&&t.push(e)}),t}var ol=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=rl(o),f=(0,N.useMemo)(()=>al(e),[e]),p=o&&!u?[]:f.map(il),m=(0,N.useRef)(!0),h=(0,N.useRef)(f),g=Ke(()=>new Map),_=(0,N.useRef)(new Set),[v,y]=(0,N.useState)(f),[b,x]=(0,N.useState)(f);L(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=il(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=il(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(al(e)),y(f),null}let{forceRender:C}=(0,N.useContext)(Ge);return(0,F.jsx)(F.Fragment,{children:b.map(e=>{let v=il(e),y=o&&!u?!1:f===b||p.includes(v);return(0,F.jsx)(tl,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(_.current.add(v),g.has(v))g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},sl=(0,N.createContext)({strict:!1}),cl={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},ll=!1;function ul(){if(ll)return;let e={};for(let t in cl)e[t]={isEnabled:e=>cl[t].some(t=>!!e[t])};ho(e),ll=!0}function dl(){return ul(),go()}function fl(e){let t=dl();for(let n in e)t[n]={...t[n],...e[n]};ho(t)}var pl=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(`.`));function ml(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||pl.has(e)}var hl=e=>!ml(e);function gl(e){typeof e==`function`&&(hl=t=>t.startsWith(`on`)?!ml(t):e(t))}try{gl((h(),a(ee)).default)}catch{}function _l(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||(hl(i)||n===!0&&ml(i)||!t&&!ml(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var vl=(0,N.createContext)({});function yl(e,t){if(lo(e)){let{initial:t,animate:n}=e;return{initial:t===!1||oo(t)?t:void 0,animate:oo(n)?n:void 0}}return e.inherit===!1?{}:t}function bl(e){let{initial:t,animate:n}=yl(e,(0,N.useContext)(vl));return(0,N.useMemo)(()=>({initial:t,animate:n}),[xl(t),xl(n)])}function xl(e){return Array.isArray(e)?e.join(` `):e}var Sl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Cl(e,t,n){for(let r in t)!Qi(t[r])&&!Yo(r,n)&&(e[r]=t[r])}function wl({transformTemplate:e},t){return(0,N.useMemo)(()=>{let n=Sl();return Uo(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Tl(e,t){let n=e.style||{},r={};return Cl(r,n,e),Object.assign(r,wl(e,t)),r}function El(e,t){let n={},r=Tl(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Dl=()=>({...Sl(),attrs:{}});function Ol(e,t,n,r){let i=(0,N.useMemo)(()=>{let n=Dl();return rs(n,t,as(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};Cl(t,e.style,e),i.style={...t,...i.style}}return i}var kl=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Al(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(kl.indexOf(e)>-1||/[A-Z]/u.test(e))}function jl(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Al(e)?Ol:El)(t,r,i,e),c=_l(t,typeof e==`string`,a),l=e===N.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,N.useMemo)(()=>Qi(u)?u.get():u,[u]);return(0,N.createElement)(e,{...l,children:d})}function Ml({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Nl(n,r,i,e),renderState:t()}}function Nl(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=fc(a[e]);let{initial:o,animate:s}=e,c=lo(e),l=uo(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!ao(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Bi(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Pl=e=>(t,n)=>{let r=(0,N.useContext)(vl),i=(0,N.useContext)(R),a=()=>Ml(e,t,r,i);return n?a():Ke(a)},Fl=Pl({scrapeMotionValuesFromProps:Xo,createRenderState:Sl}),Il=Pl({scrapeMotionValuesFromProps:ss,createRenderState:Dl}),Ll=Symbol.for(`motionComponentSymbol`);function Rl(e,t,n){let r=(0,N.useRef)(n);(0,N.useInsertionEffect)(()=>{r.current=n});let i=(0,N.useRef)(null);return(0,N.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var zl=(0,N.createContext)({});function Bl(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Vl(e,t,n,r,i,a){let{visualElement:o}=(0,N.useContext)(vl),s=(0,N.useContext)(sl),c=(0,N.useContext)(R),l=(0,N.useContext)(Yc).reducedMotion,u=(0,N.useRef)(null),d=(0,N.useRef)(!1);r||=s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:l,isSVG:a}),d.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));let f=u.current,p=(0,N.useContext)(zl);f&&!f.projection&&i&&(f.type===`html`||f.type===`svg`)&&Hl(u.current,n,i,p);let m=(0,N.useRef)(!1);(0,N.useInsertionEffect)(()=>{f&&m.current&&f.update(n,c)});let h=n[na],g=(0,N.useRef)(!!h&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return L(()=>{d.current=!0,f&&(m.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),g.current&&f.animationState&&f.animationState.animateChanges())}),(0,N.useEffect)(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(h)}),!1),f.enteringChildren=void 0)}),f}function Hl(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Ul(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Bl(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:l})}function Ul(e){if(e)return e.options.allowProjection===!1?Ul(e.parent):e.projection}function Wl(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&fl(r);let a=n?n===`svg`:Al(e),o=a?Il:Fl;function s(n,s){let c,l={...(0,N.useContext)(Yc),...n,layoutId:Gl(n)},{isStatic:u}=l,d=bl(n),f=o(n,u);if(!u&&I){Kl(l,r);let t=ql(l);c=t.MeasureLayout,d.visualElement=Vl(e,f,l,i,t.ProjectionNode,a)}return(0,F.jsxs)(vl.Provider,{value:d,children:[c&&d.visualElement?(0,F.jsx)(c,{visualElement:d.visualElement,...l}):null,jl(e,n,Rl(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,N.forwardRef)(s);return c[Ll]=e,c}function Gl({layoutId:e}){let t=(0,N.useContext)(Ge).id;return t&&e!==void 0?t+`-`+e:e}function Kl(e,t){(0,N.useContext)(sl).strict}function ql(e){let{drag:t,layout:n}=dl();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Jl(e,t){if(typeof Proxy>`u`)return Wl;let n=new Map,r=(n,r)=>Wl(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Wl(a,void 0,e,t)),n.get(a))})}var Yl=(e,t)=>t.isSVG??Al(e)?new cs(t):new Qo(t,{allowProjection:e!==N.Fragment}),Xl=class extends yo{constructor(e){super(e),e.animationState||=hs(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();ao(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Zl=0,Ql={animation:{Feature:Xl},exit:{Feature:class extends yo{constructor(){super(...arguments),this.id=Zl++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function $l(e){return{point:{x:e.pageX,y:e.pageY}}}var eu=e=>t=>Ra(t)&&e(t,$l(t));function tu(e,t,n,r){return cc(e,t,eu(n),r)}var nu=({current:e})=>e?e.ownerDocument.defaultView:null,ru=(e,t)=>Math.abs(e-t);function iu(e,t){let n=ru(e.x,t.x),r=ru(e.y,t.y);return Math.sqrt(n**2+r**2)}var au=new Set([`auto`,`scroll`]),ou=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=lu(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=iu(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=B;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=su(t,this.transformPagePoint),z.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=lu(e.type===`pointercancel`?this.lastMoveEventInfo:su(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Ra(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=su($l(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=B;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,lu(s,this.history)),this.removeListeners=rt(tu(this.contextWindow,`pointermove`,this.handlePointerMove),tu(this.contextWindow,`pointerup`,this.handlePointerUp),tu(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(au.has(e.overflowX)||au.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener(`scroll`,this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),z.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),It(this.updatePoint)}};function su(e,t){return t?{point:t(e.point)}:e}function cu(e,t){return{x:e.x-t.x,y:e.y-t.y}}function lu({point:e},t){return{point:e,delta:cu(e,du(t)),offset:cu(e,uu(t)),velocity:fu(t,.1)}}function uu(e){return e[0]}function du(e){return e[e.length-1]}function fu(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=du(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>ot(t)));)n--;if(!r)return{x:0,y:0};let a=st(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function pu(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?W(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?W(n,e,r.max):Math.min(e,n)),e}function mu(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function hu(e,{top:t,left:n,bottom:r,right:i}){return{x:mu(e.x,n,i),y:mu(e.y,t,r)}}function gu(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function _u(e,t){return{x:gu(e.x,t.x),y:gu(e.y,t.y)}}function vu(e,t){let n=.5,r=Os(e),i=Os(t);return i>r?n=it(t.min,t.max-r,e.min):r>i&&(n=it(e.min,e.max-i,t.min)),Ye(0,1,n)}function yu(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var bu=.35;function xu(e=bu){return e===!1?e=0:e===!0&&(e=bu),{x:Su(e,`left`,`right`),y:Su(e,`top`,`bottom`)}}function Su(e,t,n){return{min:Cu(e,t),max:Cu(e,n)}}function Cu(e,t){return typeof e==`number`?e:e[t]||0}var wu=new WeakMap,Tu=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=K(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t?(this.stopAnimation(),this.snapToCursor($l(e).point)):this.pauseAnimation()},a=(e,t)=>{this.stopAnimation();let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Na(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xs(e=>{let t=this.getAxisMotionValue(e).get()||0;if(un.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Os(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&z.postRender(()=>i(e,t)),ea(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Du(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&a(e,t)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Xs(e=>this.getAnimationState(e)===`paused`&&this.getAxisMotionValue(e).animation?.play()),{dragSnapToOrigin:l}=this.getProps();this.panSession=new ou(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:nu(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&z.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Eu(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=pu(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Bl(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=hu(n.layoutBox,e):this.constraints=!1,this.elastic=xu(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&Xs(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=yu(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Bl(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=zo(n,r.root,this.visualElement.getTransformPagePoint()),a=_u(r.layout.layoutBox,i);if(t){let e=t(xo(a));this.hasMutatedConstraints=!!e,e&&(a=bo(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Xs(o=>{if(!Eu(o,t,this.currentDirection))return;let c=s&&s[o]||{};a&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return ea(this.visualElement,e),n.start(Ri(e,n,0,t,this.visualElement,!1))}stopAnimation(){Xs(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Xs(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Xs(t=>{let{drag:n}=this.getProps();if(!Eu(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-W(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Bl(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Xs(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=vu({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Xs(t=>{if(!Eu(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(W(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;wu.set(this.visualElement,this);let e=this.visualElement.current,t=tu(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Ba(i);n&&r&&!a&&this.start(t)}),n=()=>{let{dragConstraints:e}=this.getProps();Bl(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener(`measure`,n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),z.read(n);let a=cc(window,`resize`,()=>this.scalePositionWithinConstraints()),o=r.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Xs(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{a(),t(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=bu,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Eu(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Du(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Ou=class extends yo{constructor(e){super(e),this.removeGroupControls=tt,this.removeListeners=tt,this.controls=new Tu(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||tt}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},ku=e=>(t,n)=>{e&&z.postRender(()=>e(t,n))},Au=class extends yo{constructor(){super(...arguments),this.removePointerDownListener=tt}onPointerDown(e){this.session=new ou(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:nu(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:ku(e),onStart:ku(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&z.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=tu(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},ju=!1,Mu=class extends N.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),ju&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),mc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),ju=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||z.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),ka.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;ju=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Nu(e){let[t,n]=rl(),r=(0,N.useContext)(Ge);return(0,F.jsx)(Mu,{...e,layoutGroup:r,switchLayoutGroup:(0,N.useContext)(zl),isPresent:t,safeToRemove:n})}var Pu={pan:{Feature:Au},drag:{Feature:Ou,ProjectionNode:Jc,MeasureLayout:Nu}};function Fu(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&z.postRender(()=>i(t,$l(t)))}var Iu=class extends yo{mount(){let{current:e}=this.node;e&&(this.unmount=Ia(e,(e,t)=>(Fu(this.node,t,`Start`),e=>Fu(this.node,e,`End`))))}unmount(){}},Lu=class extends yo{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=rt(cc(this.node.current,`focus`,()=>this.onFocus()),cc(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Ru(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&z.postRender(()=>i(t,$l(t)))}var zu=class extends yo{mount(){let{current:e}=this.node;e&&(this.unmount=Ka(e,(e,t)=>(Ru(this.node,t,`Start`),(e,{success:t})=>Ru(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}},Bu=new WeakMap,Vu=new WeakMap,Hu=e=>{let t=Bu.get(e.target);t&&t(e)},Uu=e=>{e.forEach(Hu)};function Wu({root:e,...t}){let n=e||document;Vu.has(n)||Vu.set(n,{});let r=Vu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Uu,{root:e,...t})),r[i]}function Gu(e,t,n){let r=Wu(t);return Bu.set(e,n),r.observe(e),()=>{Bu.delete(e),r.unobserve(e)}}var Ku={some:0,all:1},qu=class extends yo{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Ku[r]};return Gu(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Ju(e,t))&&this.startObserver()}unmount(){}};function Ju({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Yu={inView:{Feature:qu},tap:{Feature:zu},focus:{Feature:Lu},hover:{Feature:Iu}},Xu={layout:{ProjectionNode:Jc,MeasureLayout:Nu}},Zu=Jl({...Ql,...Yu,...Pu,...Xu},Yl),Qu=j(`anchor`,[[`path`,{d:`M12 6v16`,key:`nqf5sj`}],[`path`,{d:`m19 13 2-1a9 9 0 0 1-18 0l2 1`,key:`y7qv08`}],[`path`,{d:`M9 11h6`,key:`1fldmi`}],[`circle`,{cx:`12`,cy:`4`,r:`2`,key:`muu5ef`}]]),$u=j(`aperture`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m14.31 8 5.74 9.94`,key:`1y6ab4`}],[`path`,{d:`M9.69 8h11.48`,key:`1wxppr`}],[`path`,{d:`m7.38 12 5.74-9.94`,key:`1grp0k`}],[`path`,{d:`M9.69 16 3.95 6.06`,key:`libnyf`}],[`path`,{d:`M14.31 16H2.83`,key:`x5fava`}],[`path`,{d:`m16.62 12-5.74 9.94`,key:`1vwawt`}]]),ed=j(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),td=j(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),nd=j(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),rd=j(`axe`,[[`path`,{d:`m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9`,key:`5z9253`}],[`path`,{d:`M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z`,key:`19zklq`}]]),id=j(`battery-charging`,[[`path`,{d:`m11 7-3 5h4l-3 5`,key:`b4a64w`}],[`path`,{d:`M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935`,key:`lre1cr`}],[`path`,{d:`M22 14v-4`,key:`14q9d5`}],[`path`,{d:`M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936`,key:`13q5k0`}]]),ad=j(`bone`,[[`path`,{d:`M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z`,key:`w610uw`}]]),od=j(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),sd=j(`book`,[[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),cd=j(`bow-arrow`,[[`path`,{d:`M17 3h4v4`,key:`19p9u1`}],[`path`,{d:`M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17`,key:`12t3w9`}],[`path`,{d:`M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05`,key:`ogng5l`}],[`path`,{d:`M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z`,key:`8v3fy2`}],[`path`,{d:`M9.707 14.293 21 3`,key:`ydm3bn`}]]),ld=j(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),ud=j(`carrot`,[[`path`,{d:`M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46`,key:`rfqxbe`}],[`path`,{d:`M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z`,key:`6b25w4`}],[`path`,{d:`M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z`,key:`fn65lo`}]]),dd=j(`castle`,[[`path`,{d:`M10 5V3`,key:`1y54qe`}],[`path`,{d:`M14 5V3`,key:`m6isi`}],[`path`,{d:`M15 21v-3a3 3 0 0 0-6 0v3`,key:`lbp5hj`}],[`path`,{d:`M18 3v8`,key:`2ollhf`}],[`path`,{d:`M18 5H6`,key:`98imr9`}],[`path`,{d:`M22 11H2`,key:`1lmjae`}],[`path`,{d:`M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9`,key:`1rly83`}],[`path`,{d:`M6 3v8`,key:`csox7g`}]]),fd=j(`circle-arrow-right`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m12 16 4-4-4-4`,key:`1i9zcv`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}]]),pd=j(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),md=j(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),hd=j(`clock`,[[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),gd=j(`cloud-lightning`,[[`path`,{d:`M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973`,key:`1cez44`}],[`path`,{d:`m13 12-3 5h4l-3 5`,key:`1t22er`}]]),_d=j(`coins`,[[`circle`,{cx:`8`,cy:`8`,r:`6`,key:`3yglwk`}],[`path`,{d:`M18.09 10.37A6 6 0 1 1 10.34 18`,key:`t5s6rm`}],[`path`,{d:`M7 6h1v4`,key:`1obek4`}],[`path`,{d:`m16.71 13.88.7.71-2.82 2.82`,key:`1rbuyh`}]]),vd=j(`compass`,[[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,key:`9ktpf1`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),yd=j(`cross`,[[`path`,{d:`M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z`,key:`1xbrqy`}]]),bd=j(`dollar-sign`,[[`line`,{x1:`12`,x2:`12`,y1:`2`,y2:`22`,key:`7eqyqh`}],[`path`,{d:`M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6`,key:`1b0p4s`}]]),xd=j(`drama`,[[`path`,{d:`M10 11h.01`,key:`d2at3l`}],[`path`,{d:`M14 6h.01`,key:`k028ub`}],[`path`,{d:`M18 6h.01`,key:`1v4wsw`}],[`path`,{d:`M6.5 13.1h.01`,key:`1748ia`}],[`path`,{d:`M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3`,key:`172yzv`}],[`path`,{d:`M17.4 9.9c-.8.8-2 .8-2.8 0`,key:`1obv0w`}],[`path`,{d:`M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7`,key:`rqjl8i`}],[`path`,{d:`M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4`,key:`1mr6wy`}]]),Sd=j(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Cd=j(`fan`,[[`path`,{d:`M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z`,key:`484a7f`}],[`path`,{d:`M12 12v.01`,key:`u5ubse`}]]),wd=j(`feather`,[[`path`,{d:`M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z`,key:`18jl4k`}],[`path`,{d:`M16 8 2 22`,key:`vp34q`}],[`path`,{d:`M17.5 15H9`,key:`1oz8nu`}]]),Td=j(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),Ed=j(`flower`,[[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}],[`path`,{d:`M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5`,key:`14wa3c`}],[`path`,{d:`M12 7.5V9`,key:`1oy5b0`}],[`path`,{d:`M7.5 12H9`,key:`eltsq1`}],[`path`,{d:`M16.5 12H15`,key:`vk5kw4`}],[`path`,{d:`M12 16.5V15`,key:`k7eayi`}],[`path`,{d:`m8 8 1.88 1.88`,key:`nxy4qf`}],[`path`,{d:`M14.12 9.88 16 8`,key:`1lst6k`}],[`path`,{d:`m8 16 1.88-1.88`,key:`h2eex1`}],[`path`,{d:`M14.12 14.12 16 16`,key:`uqkrx3`}]]),Dd=j(`heart-crack`,[[`path`,{d:`M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15`,key:`idzbju`}],[`path`,{d:`M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z`,key:`1su70f`}]]),Od=j(`heart-plus`,[[`path`,{d:`m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49`,key:`wg5jx`}],[`path`,{d:`M15 15h6`,key:`1u4692`}],[`path`,{d:`M18 12v6`,key:`1houu1`}]]),kd=j(`heart`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]),Ad=j(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),jd=j(`minimize-2`,[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]),Md=j(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),Nd=j(`music`,[[`path`,{d:`M9 18V5l12-2v13`,key:`1jmyc2`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}],[`circle`,{cx:`18`,cy:`16`,r:`3`,key:`1hluhg`}]]),Pd=j(`octagon-x`,[[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,key:`2d38gg`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),Fd=j(`pickaxe`,[[`path`,{d:`m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999`,key:`1lw9ds`}],[`path`,{d:`M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024`,key:`ffj4ej`}],[`path`,{d:`M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069`,key:`8tj4zw`}],[`path`,{d:`M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z`,key:`hh6h97`}]]),Id=j(`shell`,[[`path`,{d:`M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44`,key:`1cn552`}]]),Ld=j(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),Rd=j(`skull`,[[`path`,{d:`m12.5 17-.5-1-.5 1h1z`,key:`3me087`}],[`path`,{d:`M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z`,key:`1o5pge`}],[`circle`,{cx:`15`,cy:`12`,r:`1`,key:`1tmaij`}],[`circle`,{cx:`9`,cy:`12`,r:`1`,key:`1vctgf`}]]),zd=j(`snowflake`,[[`path`,{d:`m10 20-1.25-2.5L6 18`,key:`18frcb`}],[`path`,{d:`M10 4 8.75 6.5 6 6`,key:`7mghy3`}],[`path`,{d:`m14 20 1.25-2.5L18 18`,key:`1chtki`}],[`path`,{d:`m14 4 1.25 2.5L18 6`,key:`1b4wsy`}],[`path`,{d:`m17 21-3-6h-4`,key:`15hhxa`}],[`path`,{d:`m17 3-3 6 1.5 3`,key:`11697g`}],[`path`,{d:`M2 12h6.5L10 9`,key:`kv9z4n`}],[`path`,{d:`m20 10-1.5 2 1.5 2`,key:`1swlpi`}],[`path`,{d:`M22 12h-6.5L14 15`,key:`1mxi28`}],[`path`,{d:`m4 10 1.5 2L4 14`,key:`k9enpj`}],[`path`,{d:`m7 21 3-6-1.5-3`,key:`j8hb9u`}],[`path`,{d:`m7 3 3 6h4`,key:`1otusx`}]]),Bd=j(`squirrel`,[[`path`,{d:`M15.236 22a3 3 0 0 0-2.2-5`,key:`21bitc`}],[`path`,{d:`M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4`,key:`oh0fg0`}],[`path`,{d:`M18 13h.01`,key:`9veqaj`}],[`path`,{d:`M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10`,key:`980v8a`}]]),Vd=j(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),Hd=j(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),Ud=j(`sword`,[[`path`,{d:`m11 19-6-6`,key:`s7kpr`}],[`path`,{d:`m5 21-2-2`,key:`1kw20b`}],[`path`,{d:`m8 16-4 4`,key:`1oqv8h`}],[`path`,{d:`M9.5 17.5 21 6V3h-3L6.5 14.5`,key:`pkxemp`}]]),Wd=j(`swords`,[[`polyline`,{points:`14.5 17.5 3 6 3 3 6 3 17.5 14.5`,key:`1hfsw2`}],[`line`,{x1:`13`,x2:`19`,y1:`19`,y2:`13`,key:`1vrmhu`}],[`line`,{x1:`16`,x2:`20`,y1:`16`,y2:`20`,key:`1bron3`}],[`line`,{x1:`19`,x2:`21`,y1:`21`,y2:`19`,key:`13pww6`}],[`polyline`,{points:`14.5 6.5 18 3 21 3 21 6 17.5 9.5`,key:`hbey2j`}],[`line`,{x1:`5`,x2:`9`,y1:`14`,y2:`18`,key:`1hf58s`}],[`line`,{x1:`7`,x2:`4`,y1:`17`,y2:`20`,key:`pidxm4`}],[`line`,{x1:`3`,x2:`5`,y1:`19`,y2:`21`,key:`1pehsh`}]]),Gd=j(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),Kd=j(`test-tube-diagonal`,[[`path`,{d:`M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3`,key:`1ub6xw`}],[`path`,{d:`m16 2 6 6`,key:`1gw87d`}],[`path`,{d:`M12 16H4`,key:`1cjfip`}]]),qd=j(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),Jd=j(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),Yd=j(`wand`,[[`path`,{d:`M15 4V2`,key:`z1p9b7`}],[`path`,{d:`M15 16v-2`,key:`px0unx`}],[`path`,{d:`M8 9h2`,key:`1g203m`}],[`path`,{d:`M20 9h2`,key:`19tzq7`}],[`path`,{d:`M17.8 11.8 19 13`,key:`yihg8r`}],[`path`,{d:`M15 9h.01`,key:`x1ddxp`}],[`path`,{d:`M17.8 6.2 19 5`,key:`fd4us0`}],[`path`,{d:`m3 21 9-9`,key:`1jfql5`}],[`path`,{d:`M12.2 6.2 11 5`,key:`i3da3b`}]]),Xd=j(`wind`,[[`path`,{d:`M12.8 19.6A2 2 0 1 0 14 16H2`,key:`148xed`}],[`path`,{d:`M17.5 8a2.5 2.5 0 1 1 2 4H2`,key:`1u4tom`}],[`path`,{d:`M9.8 4.4A2 2 0 1 1 11 8H2`,key:`75valh`}]]),Zd=j(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]),Qd=!1;function $d(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function ef(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var tf=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!Qd:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(ef(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=$d(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),nf=`-ms-`,rf=`-moz-`,q=`-webkit-`,af=`comm`,of=`rule`,sf=`decl`,cf=`@import`,lf=`@keyframes`,uf=`@layer`,df=Math.abs,ff=String.fromCharCode,pf=Object.assign;function mf(e,t){return vf(e,0)^45?(((t<<2^vf(e,0))<<2^vf(e,1))<<2^vf(e,2))<<2^vf(e,3):0}function hf(e){return e.trim()}function gf(e,t){return(e=t.exec(e))?e[0]:e}function J(e,t,n){return e.replace(t,n)}function _f(e,t){return e.indexOf(t)}function vf(e,t){return e.charCodeAt(t)|0}function yf(e,t,n){return e.slice(t,n)}function bf(e){return e.length}function xf(e){return e.length}function Sf(e,t){return t.push(e),e}function Cf(e,t){return e.map(t).join(``)}var wf=1,Tf=1,Ef=0,Df=0,Y=0,Of=``;function kf(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:wf,column:Tf,length:o,return:``}}function Af(e,t){return pf(kf(``,null,null,``,null,null,0),e,{length:-e.length},t)}function jf(){return Y}function Mf(){return Y=Df>0?vf(Of,--Df):0,Tf--,Y===10&&(Tf=1,wf--),Y}function Nf(){return Y=Df<Ef?vf(Of,Df++):0,Tf++,Y===10&&(Tf=1,wf++),Y}function Pf(){return vf(Of,Df)}function Ff(){return Df}function If(e,t){return yf(Of,e,t)}function Lf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rf(e){return wf=Tf=1,Ef=bf(Of=e),Df=0,[]}function zf(e){return Of=``,e}function Bf(e){return hf(If(Df-1,Uf(e===91?e+2:e===40?e+1:e)))}function Vf(e){for(;(Y=Pf())&&Y<33;)Nf();return Lf(e)>2||Lf(Y)>3?``:` `}function Hf(e,t){for(;--t&&Nf()&&!(Y<48||Y>102||Y>57&&Y<65||Y>70&&Y<97););return If(e,Ff()+(t<6&&Pf()==32&&Nf()==32))}function Uf(e){for(;Nf();)switch(Y){case e:return Df;case 34:case 39:e!==34&&e!==39&&Uf(Y);break;case 40:e===41&&Uf(e);break;case 92:Nf();break}return Df}function Wf(e,t){for(;Nf()&&e+Y!==57&&!(e+Y===84&&Pf()===47););return`/*`+If(t,Df-1)+`*`+ff(e===47?e:Nf())}function Gf(e){for(;!Lf(Pf());)Nf();return If(e,Df)}function Kf(e){return zf(qf(``,null,null,null,[``],e=Rf(e),0,[0],e))}function qf(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Nf()){case 40:if(m!=108&&vf(C,d-1)==58){_f(C+=J(Bf(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Bf(v);break;case 9:case 10:case 13:case 32:C+=Vf(m);break;case 92:C+=Hf(Ff()-1,7);continue;case 47:switch(Pf()){case 42:case 47:Sf(Yf(Wf(Nf(),Ff()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=bf(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=J(C,/\f/g,``)),p>0&&bf(C)-d&&Sf(p>32?Xf(C+`;`,r,n,d-1):Xf(J(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(Sf(S=Jf(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)qf(C,t,S,S,b,a,d,s,x);else switch(f===99&&vf(C,3)===110?100:f){case 100:case 108:case 109:case 115:qf(e,S,S,r&&Sf(Jf(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:qf(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+bf(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Mf()==125)continue}switch(C+=ff(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(bf(C)-1)*_,_=1;break;case 64:Pf()===45&&(C+=Bf(Nf())),f=Pf(),u=d=bf(y=C+=Gf(Ff())),v++;break;case 45:m===45&&bf(C)==2&&(h=0)}}return a}function Jf(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=xf(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=yf(e,d+1,d=df(h=o[m])),y=e;_<p;++_)(y=hf(h>0?f[_]+` `+v:J(v,/&\f/g,f[_])))&&(c[g++]=y);return kf(e,t,n,i===0?of:s,c,l,u)}function Yf(e,t,n){return kf(e,t,n,af,ff(jf()),yf(e,2,-2),0)}function Xf(e,t,n,r){return kf(e,t,n,sf,yf(e,0,r),yf(e,r+1,-1),r)}function Zf(e,t){for(var n=``,r=xf(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function Qf(e,t,n,r){switch(e.type){case uf:if(e.children.length)break;case cf:case sf:return e.return=e.return||e.value;case af:return``;case lf:return e.return=e.value+`{`+Zf(e.children,r)+`}`;case of:e.value=e.props.join(`,`)}return bf(n=Zf(e.children,r))?e.return=e.value+`{`+n+`}`:``}function $f(e){var t=xf(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function ep(e){return function(t){t.root||(t=t.return)&&e(t)}}var tp=function(e,t,n){for(var r=0,i=0;r=i,i=Pf(),r===38&&i===12&&(t[n]=1),!Lf(i);)Nf();return If(e,Df)},np=function(e,t){var n=-1,r=44;do switch(Lf(r)){case 0:r===38&&Pf()===12&&(t[n]=1),e[n]+=tp(Df-1,t,n);break;case 2:e[n]+=Bf(r);break;case 4:if(r===44){e[++n]=Pf()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=ff(r)}while(r=Nf());return e},rp=function(e,t){return zf(np(Rf(e),t))},ip=new WeakMap,ap=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!ip.get(n))&&!r){ip.set(e,!0);for(var i=[],a=rp(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},op=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function sp(e,t){switch(mf(e,t)){case 5103:return q+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+rf+e+nf+e+e;case 6828:case 4268:return q+e+nf+e+e;case 6165:return q+e+nf+`flex-`+e+e;case 5187:return q+e+J(e,/(\w+).+(:[^]+)/,q+`box-$1$2`+nf+`flex-$1$2`)+e;case 5443:return q+e+nf+`flex-item-`+J(e,/flex-|-self/,``)+e;case 4675:return q+e+nf+`flex-line-pack`+J(e,/align-content|flex-|-self/,``)+e;case 5548:return q+e+nf+J(e,`shrink`,`negative`)+e;case 5292:return q+e+nf+J(e,`basis`,`preferred-size`)+e;case 6060:return q+`box-`+J(e,`-grow`,``)+q+e+nf+J(e,`grow`,`positive`)+e;case 4554:return q+J(e,/([^-])(transform)/g,`$1`+q+`$2`)+e;case 6187:return J(J(J(e,/(zoom-|grab)/,q+`$1`),/(image-set)/,q+`$1`),e,``)+e;case 5495:case 3959:return J(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return J(J(e,/(.+:)(flex-)?(.*)/,q+`box-pack:$3`+nf+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+q+e+e;case 4095:case 3583:case 4068:case 2532:return J(e,/(.+)-inline(.+)/,q+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bf(e)-1-t>6)switch(vf(e,t+1)){case 109:if(vf(e,t+4)!==45)break;case 102:return J(e,/(.+:)(.+)-([^]+)/,`$1`+q+`$2-$3$1`+rf+(vf(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~_f(e,`stretch`)?sp(J(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(vf(e,t+1)!==115)break;case 6444:switch(vf(e,bf(e)-3-(~_f(e,`!important`)&&10))){case 107:return J(e,`:`,`:`+q)+e;case 101:return J(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+q+(vf(e,14)===45?`inline-`:``)+`box$3$1`+q+`$2$3$1`+nf+`$2box$3`)+e}break;case 5936:switch(vf(e,t+11)){case 114:return q+e+nf+J(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return q+e+nf+J(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return q+e+nf+J(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return q+e+nf+e+e}return e}var cp=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case sf:e.return=sp(e.value,e.length);break;case lf:return Zf([Af(e,{value:J(e.value,`@`,`@`+q)})],r);case of:if(e.length)return Cf(e.props,function(t){switch(gf(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return Zf([Af(e,{props:[J(t,/:(read-\w+)/,`:`+rf+`$1`)]})],r);case`::placeholder`:return Zf([Af(e,{props:[J(t,/:(plac\w+)/,`:`+q+`input-$1`)]}),Af(e,{props:[J(t,/:(plac\w+)/,`:`+rf+`$1`)]}),Af(e,{props:[J(t,/:(plac\w+)/,nf+`input-$1`)]})],r)}return``})}}],lp=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||cp,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[ap,op],l,u=[Qf,ep(function(e){l.insert(e)})],d=$f(c.concat(r,u)),f=function(e){return Zf(Kf(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new tf({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},up=!0;function dp(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var fp=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||up===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},pp=function(e,t,n){fp(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function mp(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}w();var hp=!1,gp=/[A-Z]|^ms/g,_p=/_EMO_([^_]+?)_([^]*?)_EMO_/g,vp=function(e){return e.charCodeAt(1)===45},yp=function(e){return e!=null&&typeof e!=`boolean`},bp=S(function(e){return vp(e)?e:e.replace(gp,`-$&`).toLowerCase()}),xp=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(_p,function(e,t,n){return Ep={name:t,styles:n,next:Ep},t})}return x[e]!==1&&!vp(e)&&typeof t==`number`&&t!==0?t+`px`:t},Sp=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;function Cp(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return Ep={name:i.name,styles:i.styles,next:Ep},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Ep={name:o.name,styles:o.styles,next:Ep},o=o.next;return a.styles+`;`}return wp(e,t,n);case`function`:if(e!==void 0){var s=Ep,c=n(e);return Ep=s,Cp(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function wp(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Cp(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:yp(s)&&(r+=bp(a)+`:`+xp(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&hp)throw Error(Sp);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)yp(o[c])&&(r+=bp(a)+`:`+xp(a,o[c])+`;`);else{var l=Cp(e,t,o);switch(a){case`animation`:case`animationName`:r+=bp(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}var Tp=/label:\s*([^\s;{]+)\s*(;|$)/g,Ep;function Dp(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Ep=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=Cp(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=Cp(n,t,e[o]),r&&(i+=a[o]);Tp.lastIndex=0;for(var s=``,c;(c=Tp.exec(i))!==null;)s+=`-`+c[1];return{name:mp(i)+s,styles:i,next:Ep}}var Op=function(e){return e()},kp=N.useInsertionEffect?N.useInsertionEffect:!1,Ap=kp||Op;kp||N.useLayoutEffect;var jp=N.createContext(typeof HTMLElement<`u`?lp({key:`css`}):null);jp.Provider;var Mp=function(e){return(0,N.forwardRef)(function(t,n){return e(t,(0,N.useContext)(jp),n)})},Np=N.createContext({});({}).hasOwnProperty,h();var Pp=!1,Fp=g,Ip=function(e){return e!==`theme`},Lp=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?Fp:Ip},Rp=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},zp=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return fp(t,n,r),Ap(function(){return pp(t,n,r)}),null},Bp=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=Rp(t,n,r),c=s||Lp(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=Mp(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=N.useContext(Np)}typeof e.className==`string`?a=dp(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=Dp(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?Lp(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),N.createElement(N.Fragment,null,N.createElement(zp,{cache:t,serialized:m,isStringTag:typeof r==`string`}),N.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,`toString`,{value:function(){return o===void 0&&Pp?`NO_COMPONENT_SELECTOR`:`.`+o}}),h.withComponent=function(t,r){return e(t,ce({},n,r,{shouldForwardProp:Rp(h,r,!0)})).apply(void 0,d)},h}},Vp=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),Hp=Bp.bind(null);Vp.forEach(function(e){Hp[e]=Hp(e)});const Up=Hp.div({position:`relative`,display:`flex`,height:`100vh`,flexDirection:`column`,backgroundColor:`transparent`}),Wp=T.div`
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
`,Gp=T(Zu.div)`
  ${{position:`fixed`,bottom:`0`,left:`0`,top:`0`,zIndex:`1000`,display:`flex`,width:`150px`,flexDirection:`column`,borderTopRightRadius:`0.5rem`,borderBottomRightRadius:`0.5rem`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}}
  background-color: ${e=>f(e.theme.BACKGROUND,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
`,Kp=T.div`
  ${{flex:`none`,padding:`1.25rem`}}
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  background-color: ${e=>e.theme.OFFSET};
`,qp=T.h2`
  ${{margin:`0`,marginBottom:`0.5rem`,fontSize:`1.125rem`}}
  color: ${e=>e.theme.PRIMARY};
`,Jp=T.p`
  ${{margin:`0`,fontSize:`0.875rem`}}
  color: ${e=>f(e.theme.PRIMARY,.7)};
`,Yp=Hp.div({flex:`1 1 0%`}),Xp=T.nav`
  ${{flex:`none`,paddingLeft:`0`,paddingRight:`0`,paddingBottom:`50px`,paddingTop:`0.5rem`}}
  border-top: 1px solid ${e=>e.theme.BORDER};
`,Zp=T.button`
  ${{width:`100%`,cursor:`pointer`,borderStyle:`none`,paddingLeft:`1.25rem`,paddingRight:`1.25rem`,paddingTop:`0.75rem`,paddingBottom:`0.75rem`,textAlign:`left`,fontSize:`15px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isActive?e.theme.OFFSET:`transparent`};
  color: ${e=>e.theme.PRIMARY};
  font-weight: ${e=>e.$isActive?600:400};
  
  &:hover {
    background-color: ${e=>f(e.theme.OFFSET,.5)};
  }
`,Qp=Hp.div({position:`fixed`,bottom:`0`,left:`0`,right:`0`,top:`0`,zIndex:`999`,backgroundColor:`rgba(0, 0, 0, 0.6)`}),$p=Hp.div({position:`fixed`,bottom:`2px`,left:`2px`,zIndex:`1000`,display:`flex`,height:`3rem`,width:`3rem`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}),em=T.button`
  ${{position:`fixed`,zIndex:`1001`,display:`flex`,height:`2.5rem`,width:`2.5rem`,cursor:`pointer`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-shadow":`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,"--tw-shadow-colored":`0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color)`,boxShadow:`var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)`}}
  background-color: ${e=>f(e.theme.BACKGROUND,.75)};
  border: 2px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
`,tm=({isOpen:e,currentPage:t,onToggle:n,onNavigate:r,canAccessInitiativeList:i=!0})=>{let{theme:a}=We(),o=P(e=>e.playerData),s=String(o?.role||``).toUpperCase()===`GM`;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ol,{children:e&&(0,F.jsxs)(Gp,{theme:a,initial:{x:-300},animate:{x:0},exit:{x:-300},transition:{type:`tween`,duration:.3},style:{boxShadow:`4px 0 12px rgba(0, 0, 0, 0.15)`},children:[(0,F.jsxs)(Kp,{theme:a,children:[(0,F.jsx)(qp,{theme:a,children:`Forge!`}),(0,F.jsx)(Jp,{theme:a,children:`Alpha Testing!`})]}),(0,F.jsx)(Yp,{}),(0,F.jsxs)(Xp,{theme:a,children:[i&&(0,F.jsx)(Zp,{theme:a,$isActive:t===`ForgeMain`,onClick:()=>r(`ForgeMain`),children:`Main`}),(0,F.jsx)(Zp,{theme:a,$isActive:t===`Party`,onClick:()=>r(`Party`),children:`Party`}),(0,F.jsx)(Zp,{theme:a,$isActive:t===`ChatLog`,onClick:()=>r(`ChatLog`),children:`System Log`}),s&&(0,F.jsx)(Zp,{theme:a,$isActive:t===`System`,onClick:()=>r(`System`),children:`System`}),s&&(0,F.jsx)(Zp,{theme:a,$isActive:t===`Settings`,onClick:()=>r(`Settings`),children:`Settings`})]})]})}),e&&(0,F.jsx)(Qp,{onClick:n}),(0,F.jsx)($p,{children:(0,F.jsx)(em,{theme:a,onClick:n,children:(0,F.jsx)(Ee,{size:24})})})]})},nm=T.div`
  padding: 20px;
  color: ${e=>e.theme.PRIMARY};
  min-height: 100vh;
`,rm=T.h1`
  color: ${e=>e.theme.PRIMARY};
  background-color: ${e=>e.theme.OFFSET};
  padding: 2px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  font-variant: small-caps;
`,im=T.div`
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
`;const am=T.button`
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
`,om=T.input`
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
`;var sm=T.button`
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
`;const X=({label:e,isOn:t,onChange:n})=>{let{theme:r}=We();return(0,F.jsx)(sm,{theme:r,$isOn:t,onClick:()=>{let r=!t;k.log(`${e}: ${r}`),n(r)},role:`switch`,"aria-checked":t,"aria-label":e})};var cm=T.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,lm=T.div`
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
`,um=T.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 15px 0;
  font-size: 18px;
`,dm=T.div`
  margin: 0 0 20px 0;
`,fm=T.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;const pm=({isOpen:e,title:t,onClose:n,children:r,actions:i,closeOnOverlayClick:a=!0,minWidth:o,maxWidth:s})=>{let{theme:c}=We();return e?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(cm,{onClick:a?n:void 0}),(0,F.jsxs)(lm,{theme:c,$minWidth:o,$maxWidth:s,onClick:e=>e.stopPropagation(),children:[t&&(0,F.jsx)(um,{theme:c,children:t}),(0,F.jsx)(dm,{children:r}),i&&(0,F.jsx)(fm,{children:i})]})]}):null},Z={reverseInitiative:`Sorts initiative from low to high instead of high to low.`,popcornInitiative:`Lets players choose the next acting unit manually instead of following initiative order.`,initiativeDie:`Sets the die used when rolling initiative from the list (for example D20).`,initiativeModifierAttr:`Selects the numeric attribute used in initiative modifier math.`,initiativeModifierMath:`Math formula applied to the selected attribute. Use @STAT as the attribute value.`,showCardColumn:`Shows a quick-access column to open each unit's card/stat block.`,showPlayerView:`Allows Players to access the Initiative List view. If disabled, Players are routed away from the list.`,showNonPartyUnits:`If disabled, non-party unit stats are obscured for Players while keeping turn order visibility.`,showHpNumbersOnList:`If disabled, Players do not see exact HP/Max HP values in the Initiative List for non-owned units.`,ownerOnlyEdit:`Restricts editing controls to GMs and token owners.`,showAdjustHpContextMenu:`Shows or hides context menu options used to modify HP quickly.`,showHpBarsOnTokens:`Displays graphical HP bars on tokens in the scene.`,hpOrientation:`Sets where HP bars or HP numbers are anchored relative to tokens.`,showHpNumbersOnTokens:`Displays current/max HP numbers directly on tokens.`,showDeathEffect:`Shows a death visual effect when configured death conditions are met.`,showNamesOnTokens:`Toggles token name text visibility in scene.`,showTurnEffect:`Shows the active turn visual indicator in scene.`,useDescriptiveNames:`Appends descriptive suffixes to duplicate unit names for easier identification.`,enableRumble:`Enables Rumble integration for dice rolls.`,enableBones:`Enables Bones integration for dice rolls.`,enableDicePlus:`Enables Dice+ integration for dice rolls.`,enableTextBasedRolls:`Enables built-in text-based dice rolling handled directly by Forge.`,enableObrNotification:`Enables in-app Owlbear notifications for supported roll and system events.`,showResultsToAll:`When enabled, notifications are shown to all players instead of only the local user.`,enableDiscordLogging:`Sends roll or event logs to a configured Discord webhook.`,discordUrl:`Discord webhook endpoint used when Discord logging is enabled.`,enableConsoleLog:`Turns verbose Forge logging on or off in the browser console.`},mm=()=>{let e=P(e=>e.systemData);return P(e=>e.cacheReady)?e?{theme:e.theme,cardLayout:e.cardLayout,listLayout:e.listLayout,attributes:e.attributes,systemName:e.systemName,importDate:e.importDate,isLoading:!1}:{theme:{primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,isLoading:!1}:{theme:null,cardLayout:[],listLayout:[],attributes:[],systemName:``,importDate:null,isLoading:!0}};var hm=T.h2`
  ${{marginBottom:`1rem`,paddingBottom:`0.5rem`,fontSize:`1.25rem`,fontWeight:`600`}}
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
`,Q=T.div`
  ${{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`,":last-child":{borderBottomWidth:`0`}}}
  color: ${e=>e.theme.PRIMARY};
`,$=T.label`
  ${{flex:`1 1 0%`,cursor:`pointer`,textAlign:`left`,fontSize:`1rem`}}
  color: ${e=>e.theme.PRIMARY};
`,gm=T.div`
  ${{marginLeft:`1rem`,display:`flex`,placeContent:`space-between`,alignItems:`center`,gap:`0.75rem`}}
  color: ${e=>e.theme.PRIMARY};
`,_m=T.label`
  ${{fontSize:`0.875rem`}}
  text-align: left;
  color: ${e=>e.theme.PRIMARY};
`,vm=T.p`
  ${{marginTop:`0.25rem`,fontSize:`0.75rem`}}
  color: ${e=>f(e.theme.PRIMARY,.7)};
`,ym=T.input`
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
`,bm=T.select`
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
`,xm=T.button`
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
`,Sm=Hp.div({marginTop:`0.5rem`,display:`flex`,justifyContent:`center`,gap:`0.75rem`}),Cm=T.p`
  margin: 8px 0 0;
  font-size: 13px;
  color: ${e=>e.$connected?e.theme.PRIMARY:f(e.theme.PRIMARY,.75)};
`,wm=T.p`
  color: ${e=>f(e.theme.PRIMARY,.9)};
  margin: 0;
  line-height: 1.5;
`;const Tm=()=>{let{theme:e}=We(),{attributes:t}=mm();P(e=>e.roomMetadata);let n=P(e=>e.sceneMetadata),r=P(e=>e.items),i=P(e=>e.cacheReady),[a,o]=(0,N.useState)(!1),[s,l]=(0,N.useState)(!1),[u,d]=(0,N.useState)(`D20`),[f,m]=(0,N.useState)(!1),[h,g]=(0,N.useState)(``),[_,v]=(0,N.useState)(`@STAT`),[y,b]=(0,N.useState)(!1),[x,S]=(0,N.useState)(!1),[C,w]=(0,N.useState)(!0),[T,E]=(0,N.useState)(!1),[ee,D]=(0,N.useState)(!0),[te,ne]=(0,N.useState)(!1),[re,ie]=(0,N.useState)(`bottom`),[ae,oe]=(0,N.useState)(!1),[se,ce]=(0,N.useState)(!1),[le,j]=(0,N.useState)(!1),[de,pe]=(0,N.useState)(!1),[he,ge]=(0,N.useState)(!1),[_e,be]=(0,N.useState)(!1),[Se,we]=(0,N.useState)(!1),[Ee,De]=(0,N.useState)(!1),[Oe,M]=(0,N.useState)(!1),[ke,Ae]=(0,N.useState)(!1),[je,Me]=(0,N.useState)(!1),[Ne,Pe]=(0,N.useState)(!1),[Fe,Ie]=(0,N.useState)(``),[Le,Re]=(0,N.useState)(!1),ze=(0,N.useRef)(null),[Be,Ve]=(0,N.useState)(()=>xe()),[He,Ue]=(0,N.useState)(!1),[Ge,Ke]=(0,N.useState)(!1);(0,N.useEffect)(()=>{let e=!0;return(async()=>{let t=await ye();e&&Ve(t)})(),()=>{e=!1}},[]);let I=n;(0,N.useEffect)(()=>{if(i){if(I[O.POPCORN_INITIATIVE]!==void 0&&o(I[O.POPCORN_INITIATIVE]),I[O.REVERSE_INITIATIVE]!==void 0&&l(I[O.REVERSE_INITIATIVE]),I[O.DICE_RANGE]!==void 0&&d(I[O.DICE_RANGE]),I[O.INITIATIVE_MODIFIER_BID]===void 0?g(``):g(I[O.INITIATIVE_MODIFIER_BID]||``),I[O.INITIATIVE_MODIFIER_EXPR]!==void 0){let e=(I[O.INITIATIVE_MODIFIER_EXPR]||`@STAT`).replace(/\bx\b/gi,`@STAT`).trim();v(e.length>0?e:`@STAT`)}else v(`@STAT`);if(I[O.SHOW_CARD_ACCESS]!==void 0&&m(I[O.SHOW_CARD_ACCESS]),I[O.SHOW_PLAYER_VIEW]!==void 0&&b(I[O.SHOW_PLAYER_VIEW]),I[O.SHOW_OWNER_ONLY_EDIT]!==void 0&&E(I[O.SHOW_OWNER_ONLY_EDIT]),I[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?D(!0):D(I[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]),I[O.SHOW_NON_PARTY_UNITS]!==void 0&&S(I[O.SHOW_NON_PARTY_UNITS]),I[O.SHOW_LIST_HP_NUMBERS]===void 0?w(!0):w(I[O.SHOW_LIST_HP_NUMBERS]),I[O.SHOW_HP_BARS]!==void 0&&ne(I[O.SHOW_HP_BARS]),I[O.HP_BAR_ORIENTATION]!==void 0&&ie(I[O.HP_BAR_ORIENTATION]),I[O.SHOW_HP_NUMBERS]!==void 0&&oe(I[O.SHOW_HP_NUMBERS]),I[O.SHOW_DEATH_EFFECT]!==void 0&&ce(I[O.SHOW_DEATH_EFFECT]),I[O.SHOW_NAMES]!==void 0&&j(I[O.SHOW_NAMES]),I[O.SHOW_TURN_EFFECT]!==void 0&&pe(I[O.SHOW_TURN_EFFECT]),I[O.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&ge(I[O.USE_DESCRIPTIVE_DUPLICATES]),I[O.ENABLE_RUMBLE]!==void 0&&be(I[O.ENABLE_RUMBLE]),I[O.ENABLE_BONES]!==void 0&&we(I[O.ENABLE_BONES]),I[O.ENABLE_DICE_PLUS]!==void 0&&De(I[O.ENABLE_DICE_PLUS]),I[O.ENABLE_TEXT_BASED_ROLLS]!==void 0&&M(I[O.ENABLE_TEXT_BASED_ROLLS]),I[O.ENABLE_OBR_NOTIFICATION]!==void 0&&Ae(I[O.ENABLE_OBR_NOTIFICATION]),I[O.SHOW_NOTIFICATION_TO_ALL]!==void 0&&Me(I[O.SHOW_NOTIFICATION_TO_ALL]),I[O.ENABLE_DISCORD_LOGGING]!==void 0&&Pe(I[O.ENABLE_DISCORD_LOGGING]),I[O.DISCORD_URL]!==void 0&&Ie(I[O.DISCORD_URL]),I[O.ENABLE_CONSOLE_LOG]!==void 0){let e=I[O.ENABLE_CONSOLE_LOG];Re(e),k.setEnabled(e)}else Re(!1)}},[i,I]);let L=async(e,t)=>{await c.scene.setMetadata({[e]:t})},R=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},qe=t.filter(e=>e.attr_type===`numb`).sort((e,t)=>(e.attr_name||``).localeCompare(t.attr_name||``)),Je=(e,t)=>{let n=e.trim();return n?t?/@STAT/i.test(n)?/\d\s*d\s*\d|\bd\s*\d/i.test(n)?{valid:!1,error:`Dice notation is not allowed in initiative modifiers.`}:fe(n.replace(/@STAT/gi,`@${t}`))?{valid:!0}:{valid:!1,error:`Invalid expression syntax.`}:{valid:!1,error:`Expression must include @STAT (the selected attribute value).`}:{valid:!1,error:`Select a numeric attribute first.`}:{valid:!1,error:`Expression is required.`}},Ye=async(e,t)=>{await L(O.INITIATIVE_MODIFIER_BID,e),await L(O.INITIATIVE_MODIFIER_EXPR,t)},Xe=async e=>{if(g(e),!e){await Ye(``,_);return}let t=Je(_,e);t.valid||await c.notification.show(t.error||`Invalid initiative modifier settings.`,`WARNING`),await Ye(e,_)},Ze=async()=>{let e=_.trim(),t=(e.length>0?e:`@STAT`).replace(/\bx\b/gi,`@STAT`);if(v(t),!h){await Ye(``,t);return}let n=Je(t,h);if(!n.valid){await c.notification.show(n.error||`Invalid initiative modifier expression.`,`WARNING`);return}await Ye(h,t)},Qe=async()=>{if(!h){await c.notification.show(`Select an Initiative Modifier attribute before testing.`,`WARNING`);return}let e=_.replace(/\bx\b/gi,`@STAT`),t=Je(e,h);if(!t.valid){await c.notification.show(t.error||`Invalid initiative modifier expression.`,`WARNING`);return}let n=R(u),r=Math.floor(Math.random()*n)+1,i=Ce(e.replace(/@STAT/gi,`@${h}`),{bidValueMap:{[h]:14},onMissingBid:`useZero`});if(!i.valid||!i.notation){await c.notification.show(`Could not resolve initiative modifier expression.`,`ERROR`);return}let a=Number(i.notation),o=Number.isFinite(a)?Math.trunc(a):0,s=r+o,l=e.replace(/@STAT/gi,`14`);await c.notification.show(`Mock Initiative: 1d${n}(${r}) + ${l}(${o}) = ${s}`,`SUCCESS`)},$e=async()=>{try{let e=await Te(),t=JSON.stringify(e,null,2),n=new Blob([t],{type:`text/plain;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`forge-collection-${new Date().toISOString().slice(0,10)}.txt`,i.click(),URL.revokeObjectURL(r),await c.notification.show(`Collection export complete. ${e.length} record(s) written.`,`SUCCESS`)}catch(e){k.log(`Collection export failed`,e),await c.notification.show(`Collection export failed. See console log for details.`,`ERROR`)}},et=()=>{Ke(!0)},tt=()=>{Ke(!1),ze.current?.click()},nt=async e=>{let t=e.target.files?.[0];if(t)try{let e=await t.text(),n=JSON.parse(e);if(!Array.isArray(n)){await c.notification.show(`Import file must contain a JSON array of collection records.`,`ERROR`);return}let r=await me(n);await c.notification.show(`Collection import complete. Created: ${r.created}, Updated: ${r.updated}, Skipped: ${r.skipped}.`,`SUCCESS`)}catch(e){k.log(`Collection import failed`,e),await c.notification.show(`Collection import failed. Ensure the file is valid JSON and try again.`,`ERROR`)}finally{e.target.value=``}},rt=async()=>{Ue(!0);try{await ve(),Ve(xe()),await c.notification.show(`Connected to Battle-System account.`,`SUCCESS`)}catch(e){k.error(`Battle-System auth connection failed`,e),await c.notification.show(`Unable to connect to Battle-System account. Please try again.`,`ERROR`),Ve(xe())}finally{Ue(!1)}};return(0,F.jsxs)(Zu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[(0,F.jsxs)(nm,{theme:e,children:[(0,F.jsx)(rm,{theme:e,children:`Settings`}),(0,F.jsxs)(im,{theme:e,children:[(0,F.jsx)(hm,{theme:e,children:`Battle-System Account`}),(0,F.jsx)(Sm,{children:(0,F.jsx)(am,{theme:e,onClick:()=>{rt()},disabled:He,children:He?`Connecting...`:Be?`Reconnect to Battle-System`:`Connect to Battle-System`})}),(0,F.jsx)(Cm,{theme:e,$connected:Be,children:Be?`Status: Connected`:`Status: Disconnected`})]}),(0,F.jsxs)(im,{theme:e,children:[(0,F.jsx)(hm,{theme:e,children:`Collection Management`}),(0,F.jsxs)(Sm,{children:[(0,F.jsx)(am,{theme:e,onClick:$e,children:`Export`}),(0,F.jsx)(am,{theme:e,onClick:et,children:`Import`})]}),(0,F.jsx)(`input`,{ref:ze,type:`file`,accept:`.txt,.json,text/plain,application/json`,onChange:nt,style:{display:`none`}})]}),(0,F.jsxs)(im,{theme:e,children:[(0,F.jsx)(hm,{theme:e,children:`List Controls`}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.reverseInitiative,children:`Reverse Initiative`})}),(0,F.jsx)(X,{label:`Reverse Initiative`,isOn:s,onChange:async e=>{l(e),await L(O.REVERSE_INITIATIVE,e),e&&a&&(o(!1),await L(O.POPCORN_INITIATIVE,!1))}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.popcornInitiative,children:`Popcorn Initiative`})}),(0,F.jsx)(X,{label:`Popcorn Initiative`,isOn:a,onChange:async e=>{o(e),await L(O.POPCORN_INITIATIVE,e),e&&s&&(l(!1),await L(O.REVERSE_INITIATIVE,!1))}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.initiativeDie,children:`Initiative Die:`})}),(0,F.jsx)(ym,{theme:e,type:`text`,value:u,onChange:async e=>{let t=e.target.value;d(t),await L(O.DICE_RANGE,t),k.log(`Dice Range:`,t)},placeholder:`D20`,maxLength:3})]}),(0,F.jsxs)(gm,{theme:e,children:[(0,F.jsx)(_m,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.initiativeModifierAttr,children:`Initiative Modifier:`})}),(0,F.jsxs)(bm,{theme:e,value:h,onChange:async e=>{await Xe(e.target.value)},children:[(0,F.jsx)(`option`,{value:``,children:`None`}),qe.map(e=>(0,F.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,F.jsxs)(gm,{theme:e,children:[(0,F.jsx)(_m,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.initiativeModifierMath,children:`Math:`})}),(0,F.jsx)(ym,{theme:e,type:`text`,value:_,onChange:e=>{v(e.target.value)},onBlur:async()=>{await Ze()},placeholder:`floor((@STAT-10)/2)`,maxLength:120,disabled:!h}),(0,F.jsx)(xm,{theme:e,type:`button`,onClick:()=>{Qe()},disabled:!h,children:`Test`})]}),(0,F.jsx)(vm,{theme:e,children:`Use @STAT as the selected attribute value. Example: floor((@STAT-10)/2)`}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.showCardColumn,children:`Show Card Column`})}),(0,F.jsx)(X,{label:`Show Stat Block Access`,isOn:f,onChange:async e=>{m(e),await L(O.SHOW_CARD_ACCESS,e)}})]})]}),(0,F.jsxs)(im,{theme:e,children:[(0,F.jsx)(hm,{theme:e,children:`Player Controls`}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.showPlayerView,children:`Show Player View`})}),(0,F.jsx)(X,{label:`Show Player View`,isOn:y,onChange:async e=>{b(e),await L(O.SHOW_PLAYER_VIEW,e)}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.showNonPartyUnits,children:`Show Non-Party Units`})}),(0,F.jsx)(X,{label:`Show Non-Party Units`,isOn:x,onChange:async e=>{S(e),await L(O.SHOW_NON_PARTY_UNITS,e)}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.showHpNumbersOnList,children:`Show HP Numbers on List`})}),(0,F.jsx)(X,{label:`Show HP Numbers on List`,isOn:C,onChange:async e=>{w(e),await L(O.SHOW_LIST_HP_NUMBERS,e)}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.ownerOnlyEdit,children:`GM/Owner Only Edit`})}),(0,F.jsx)(X,{label:`Owner Only Edit`,isOn:T,onChange:async e=>{E(e),await L(O.SHOW_OWNER_ONLY_EDIT,e)}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.showAdjustHpContextMenu,children:`Show Adjust HP Context Menu`})}),(0,F.jsx)(X,{label:`Show Adjust HP Context Menu`,isOn:ee,onChange:async e=>{D(e),await L(O.SHOW_MODIFY_UNIT_CONTEXT_MENU,e)}})]})]}),(0,F.jsxs)(im,{theme:e,children:[(0,F.jsx)(hm,{theme:e,children:`Game Controls`}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.showHpBarsOnTokens,children:`Show HP Bars on tokens`})}),(0,F.jsx)(X,{label:`Show HP Bars on tokens`,isOn:te,onChange:async e=>{ne(e),await L(O.SHOW_HP_BARS,e),e&&ae&&(oe(!1),await L(O.SHOW_HP_NUMBERS,!1)),e&&I[O.HP_BAR_ORIENTATION]===void 0&&(ie(`bottom`),await L(O.HP_BAR_ORIENTATION,`bottom`))}})]}),(te||ae)&&(0,F.jsxs)(gm,{theme:e,children:[(0,F.jsx)(_m,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.hpOrientation,children:`Orientation:`})}),(0,F.jsxs)(bm,{theme:e,value:re,onChange:async e=>{let t=e.target.value;ie(t),await L(O.HP_BAR_ORIENTATION,t)},children:[(0,F.jsx)(`option`,{value:`top`,children:`Top`}),(0,F.jsx)(`option`,{value:`bottom`,children:`Bottom`}),(0,F.jsx)(`option`,{value:`left`,children:`Left`}),(0,F.jsx)(`option`,{value:`right`,children:`Right`})]})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.showHpNumbersOnTokens,children:`Show HP Numbers on tokens`})}),(0,F.jsx)(X,{label:`Show HP Numbers on tokens`,isOn:ae,onChange:async e=>{oe(e),await L(O.SHOW_HP_NUMBERS,e),e&&te&&(ne(!1),await L(O.SHOW_HP_BARS,!1)),e&&I[O.HP_BAR_ORIENTATION]===void 0&&(ie(`bottom`),await L(O.HP_BAR_ORIENTATION,`bottom`))}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.showDeathEffect,children:`Show Death Effect`})}),(0,F.jsx)(X,{label:`Show Death Effect`,isOn:se,onChange:async e=>{ce(e),await L(O.SHOW_DEATH_EFFECT,e)}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.showNamesOnTokens,children:`Show Names on Tokens`})}),(0,F.jsx)(X,{label:`Show names on tokens`,isOn:le,onChange:async e=>{j(e),await L(O.SHOW_NAMES,e);let t=r.filter(e=>e.metadata[p.ON_LIST]===!0);e?(k.log(`Showing names on tokens`),await c.scene.items.updateItems(t,e=>{for(let t of e){let e=t.metadata[p.UNIT_NAME],n=t;e&&n.text&&(n.text.plainText=String(e))}})):(k.log(`Hiding names on tokens`),await c.scene.items.updateItems(t,e=>{for(let t of e){let e=t;e.text&&(e.text.plainText=``)}}))}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.showTurnEffect,children:`Show Turn Effect`})}),(0,F.jsx)(X,{label:`Show Turn Effect`,isOn:de,onChange:async e=>{pe(e),await L(O.SHOW_TURN_EFFECT,e)}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.useDescriptiveNames,children:`Use Descriptive Names`})}),(0,F.jsx)(X,{label:`Use Descriptive Duplicates Names`,isOn:he,onChange:async e=>{ge(e),await L(O.USE_DESCRIPTIVE_DUPLICATES,e)}})]})]}),(0,F.jsxs)(im,{theme:e,children:[(0,F.jsx)(hm,{theme:e,children:`Dice Controls`}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.enableTextBasedRolls,children:`Enable Text-Based Rolls`})}),(0,F.jsx)(X,{label:`Enable Text-Based Rolls`,isOn:Oe,onChange:async e=>{M(e),await L(O.ENABLE_TEXT_BASED_ROLLS,e),e&&(Ae(!0),be(!1),we(!1),De(!1),await L(O.ENABLE_OBR_NOTIFICATION,!0),await L(O.ENABLE_RUMBLE,!1),await L(O.ENABLE_BONES,!1),await L(O.ENABLE_DICE_PLUS,!1))}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.enableRumble,children:`Enable Rumble! Integration`})}),(0,F.jsx)(X,{label:`Enable Rumble! Integration`,isOn:_e,onChange:async e=>{be(e),await L(O.ENABLE_RUMBLE,e),e&&(we(!1),De(!1),M(!1),await L(O.ENABLE_BONES,!1),await L(O.ENABLE_DICE_PLUS,!1),await L(O.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.enableBones,children:`Enable Bones! Integration`})}),(0,F.jsx)(X,{label:`Enable Bones! Integration`,isOn:Se,onChange:async e=>{we(e),await L(O.ENABLE_BONES,e),e&&(be(!1),De(!1),M(!1),await L(O.ENABLE_RUMBLE,!1),await L(O.ENABLE_DICE_PLUS,!1),await L(O.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.enableDicePlus,children:`Enable Dice+ Integration`})}),(0,F.jsx)(X,{label:`Enable Dice+ Integration`,isOn:Ee,onChange:async e=>{De(e),await L(O.ENABLE_DICE_PLUS,e),e&&(be(!1),we(!1),M(!1),await L(O.ENABLE_RUMBLE,!1),await L(O.ENABLE_BONES,!1),await L(O.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.enableObrNotification,children:`Enable OBR Notification`})}),(0,F.jsx)(X,{label:`Enable OBR Notification`,isOn:ke,onChange:async e=>{Ae(e),await L(O.ENABLE_OBR_NOTIFICATION,e)}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.showResultsToAll,children:`Show Results to All`})}),(0,F.jsx)(X,{label:`Show Results to All`,isOn:je,onChange:async e=>{Me(e),await L(O.SHOW_NOTIFICATION_TO_ALL,e)}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.enableDiscordLogging,children:`Enable Discord Logging`})}),(0,F.jsx)(X,{label:`Enable Discord Logging`,isOn:Ne,onChange:async e=>{if(e&&!ue(Fe.trim())){await c.notification.show(`Please enter a valid Discord webhook URL before enabling Discord logging.`,`WARNING`),Pe(!1),await L(O.ENABLE_DISCORD_LOGGING,!1);return}Pe(e),await L(O.ENABLE_DISCORD_LOGGING,e)}})]}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)(_m,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.discordUrl,children:`Discord Url:`})}),(0,F.jsx)(ym,{theme:e,type:`text`,value:Fe,onChange:async e=>{let t=e.target.value,n=t.trim();Ie(t),await L(O.DISCORD_URL,n),k.log(`Discord URL:`,n)},placeholder:`https://discord.com/api/webhooks/...`,maxLength:200})]})]}),(0,F.jsxs)(im,{theme:e,children:[(0,F.jsx)(hm,{theme:e,children:`Other`}),(0,F.jsxs)(Q,{theme:e,children:[(0,F.jsx)($,{theme:e,children:(0,F.jsx)(A,{theme:e,text:Z.enableConsoleLog,children:`Enable Console Log`})}),(0,F.jsx)(X,{label:`Enable Console Log`,isOn:Le,onChange:async e=>{Re(e),k.setEnabled(e),await L(O.ENABLE_CONSOLE_LOG,e)}})]})]})]}),(0,F.jsx)(pm,{isOpen:Ge,title:`Confirm Import`,onClose:()=>Ke(!1),actions:(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(am,{theme:e,variant:`secondary`,onClick:()=>Ke(!1),children:`Cancel`}),(0,F.jsx)(am,{theme:e,onClick:tt,children:`Continue`})]}),children:(0,F.jsx)(wm,{theme:e,children:`Import will overwrite duplicate records that share the same Name and Author. Continue?`})})]})};var Em=T.div`
  ${{display:`flex`,height:`100%`,flexDirection:`column`,padding:`1rem`}}
`,Dm=T.div`
  ${{flex:`1 1 0%`,overflowY:`auto`,borderRadius:`0.5rem`,borderWidth:`2px`,"--tw-border-opacity":`1`,borderColor:`rgb(255 255 255 / var(--tw-border-opacity, 1))`,padding:`0.5rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  margin: 10px;
  white-space: break-spaces;
  word-wrap: break-word;
  margin-bottom: 50px;
`,Om=T.div`
  ${{marginBottom:`0.5rem`,textAlign:`left`}}
`,km=T.span`
  ${{marginRight:`0.5rem`,fontSize:`0.75rem`,"--tw-text-opacity":`1`,color:`rgb(203 213 224 / var(--tw-text-opacity, 1))`}}
`,Am=T.span`
  ${{fontSize:`0.875rem`,"--tw-text-opacity":`1`,color:`rgb(255 255 255 / var(--tw-text-opacity, 1))`}}
`;const jm=()=>{let e=Le(e=>e.messages),t=(0,N.useRef)(null),{theme:n}=We();return(0,N.useEffect)(()=>{t.current?.scrollIntoView({behavior:`smooth`})},[e]),(0,F.jsx)(Zu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,F.jsxs)(Em,{children:[(0,F.jsx)(rm,{theme:n,children:`System Log`}),(0,F.jsxs)(Dm,{children:[e.map(e=>(0,F.jsxs)(Om,{children:[(0,F.jsx)(km,{children:e.timestamp}),(0,F.jsx)(Am,{children:e.text})]},e.id)),(0,F.jsx)(`div`,{ref:t})]})]})})},Mm=`buff_effect_one`,Nm=`debuff_effect_one`,Pm=[{value:`buff_effect_one`,label:`Buff Effect One`},{value:`buff_effect_two`,label:`Buff Effect Two`}],Fm=[{value:`debuff_effect_one`,label:`Debuff Effect One`},{value:`debuff_effect_two`,label:`Debuff Effect Two`}],Im=e=>Pm.some(t=>t.value===e),Lm=e=>Fm.some(t=>t.value===e),Rm=e=>{switch(e){case`buff_effect_two`:return`
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
`}},zm=e=>{switch(e){case`debuff_effect_two`:return`
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
`}};var Bm=t.EXTENSIONID,Vm=`com.battle-system.forge`;const Hm={SYSTEM_NAME:`${Bm}/SystemName`,IMPORT_DATE:`${Bm}/ImportDate`,SNAPSHOT_PUBLIC_ID:`${Bm}/SnapshotPublicId`};var Um=(()=>{let e=E.attributes,t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||``,maxHpBid:n?.attr_bid||``}})(),Wm=(e,t)=>e instanceof Error&&e.message?e.message:t,Gm=T.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Km=T.div`
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`,qm=T.h2`
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  padding: 12px 15px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 400;
`,Jm=T.p`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`,Ym=T.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 15px;
`,Xm=T.div`
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
`,Zm=T.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.theme.PRIMARY};
  margin-top: 5px;
`,Qm=T.div`
  margin-top: 16px;
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 14px;
`,$m=T.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 10px 0;
  font-size: 15px;
`,eh=T.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`,th=T.label`
  color: ${e=>e.theme.PRIMARY};
  min-width: 84px;
  font-size: 13px;
`,nh=T.select`
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
`,rh=T.div`
  background-color: ${()=>f(`#FF0000`,.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,ih=T.div`
  background-color: ${()=>f(`#00FF00`,.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,ah=T.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`,oh=T.p`
  color: ${e=>f(e.theme.PRIMARY,.9)};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,sh=T.div`
  margin-top: 30px;
`,ch=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,lh=T.div`
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,uh=T.div`
  flex: 1;
`,dh=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`,fh=T.div`
  color: ${e=>f(e.theme.PRIMARY,.7)};
  font-size: 13px;
  font-style: italic;
`,ph=T.div`
  display: flex;
  gap: 8px;
`,mh=T.button`
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
`,hh={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}};const gh=()=>{let{theme:e,updateThemeFromSystem:t}=We(),n=P(e=>e.sceneMetadata),r=P(e=>e.roomMetadata),i=P(e=>e.systemData),a=P(e=>e.setSystemData),[o,s]=(0,N.useState)(()=>xe()),[l,u]=(0,N.useState)(``),[d,p]=(0,N.useState)(!1),[m,h]=(0,N.useState)(null),[g,_]=(0,N.useState)(null),[v,y]=(0,N.useState)(``),[b,x]=(0,N.useState)(null),[S,w]=(0,N.useState)(null),[T,ee]=(0,N.useState)([]),[D,te]=(0,N.useState)(``),[ne,re]=(0,N.useState)(``),[ae,oe]=(0,N.useState)(Mm),[se,ce]=(0,N.useState)(Nm),[le,ue]=(0,N.useState)([]),[A,j]=(0,N.useState)(!1),[de,fe]=(0,N.useState)(null),[pe,me]=(0,N.useState)(``);(0,N.useEffect)(()=>{s(xe()),ge(),be()},[n,r,i]),(0,N.useEffect)(()=>{ge(),be()},[n,r,i]);let ge=()=>{try{if(!xe()){let e={primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url};y(E.name),x(null),w(e),ee(E.attributes),te(Um.currentHpBid),re(Um.maxHpBid),oe(Mm),ce(Nm);return}if(i){let e=n[O.HP_CURRENT_BID],t=n[O.HP_MAX_BID],r=n[O.BUFF_VISUAL_PRESET],a=n[O.DEBUFF_VISUAL_PRESET];y(i.systemName),x(i.importDate),w(i.theme),ee(i.attributes),te(e||``),re(t||``),oe(Im(r)?r:Mm),ce(Lm(a)?a:Nm);return}let e=r[Hm.SYSTEM_NAME],t=r[Hm.IMPORT_DATE],a=n[O.HP_CURRENT_BID],o=n[O.HP_MAX_BID],s=n[O.BUFF_VISUAL_PRESET],c=n[O.DEBUFF_VISUAL_PRESET];y(e||E.name),x(t||null),w({primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url}),ee(E.attributes),te(a||``),re(o||``),oe(Im(s)?s:Mm),ce(Lm(c)?c:Nm)}catch(e){k.error(`Error loading system from cache:`,e)}},_e=async(e,t)=>{await c.scene.setMetadata({[e]:t})},ve=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Imported ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Imported ${t} is not a JSON array`);return n}throw Error(`Imported ${t} has invalid type`)},ye=T.filter(e=>e.attr_type===`numb`),be=()=>{try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(n&&n.startsWith(`${Vm}.`)&&n.endsWith(`.backup`)){let t=localStorage.getItem(n);if(t){let n=JSON.parse(t);e.push(n)}}}e.sort((e,t)=>new Date(t.backupDate).getTime()-new Date(e.backupDate).getTime()),ue(e)}catch(e){k.error(`Error loading backups:`,e)}},Se=async e=>{try{if(!i){k.warn(`Cannot create backup: runtime system data is unavailable`);return}let e=i.systemName||E.name,t={name:e,backupDate:new Date().toISOString(),theme_primary:i.theme.primary,theme_offset:i.theme.offset,theme_background:i.theme.background,theme_border:i.theme.border,background_url:i.theme.background_url,card_layout:i.cardLayout,list_layout:i.listLayout,attributes:i.attributes},n=`${Vm}.${e}.backup`;localStorage.setItem(n,JSON.stringify(t)),k.log(`Backup created for ${e}`),be()}catch(e){throw k.error(`Error creating backup:`,e),e}},Ce=e=>{try{let t=`${Vm}.${e}.backup`;localStorage.removeItem(t),k.log(`Backup deleted for ${e}`),be(),_(`Backup for "${e}" deleted successfully`)}catch(e){k.error(`Error deleting backup:`,e),h(`Failed to delete backup`)}},Te=(e,t)=>{me(e),fe(()=>t),j(!0)},Ee=async()=>{j(!1),de&&(await de(),fe(null))},De=()=>{j(!1),fe(null),me(``)},Oe=async()=>{if(!l.trim()){h(`Please enter a share_id`);return}Te(`This will overwrite your current system data. A backup of your current system will be saved to local storage. Do you want to continue?`,async()=>{await M()})},M=async()=>{if(!xe()){h(`Please connect your Battle-System account before importing systems.`);return}p(!0),h(null),_(null);try{await we();let{data:e,error:n}=await he(async()=>C.rpc(`bs_forge_import_system_snapshot`,{p_source_share_id:l.trim()}));if(n)throw n;if(!e){h(`No system found with that share_id`),p(!1);return}let r=Array.isArray(e)?e[0]:e;if(!r||typeof r.snapshot_public_id!=`string`)throw Error(`Snapshot import did not return a valid record`);let i=ve(r.card_layout,`card_layout`),o=ve(r.list_layout,`list_layout`),s=ve(r.attributes,`attributes`);if(!Array.isArray(s))throw Error(`Imported attributes are not a valid array`);await Se(v);let d={primary:r.theme_primary,offset:r.theme_offset,background:r.theme_background,border:r.theme_border,background_url:r.background_url},f=new Date().toISOString();await c.room.setMetadata({[Hm.SNAPSHOT_PUBLIC_ID]:r.snapshot_public_id,[Hm.SYSTEM_NAME]:r.system_name,[Hm.IMPORT_DATE]:f}),a({theme:d,cardLayout:i,listLayout:o,attributes:s,systemName:r.system_name,importDate:f,snapshotPublicId:r.snapshot_public_id}),y(r.system_name),x(f),w(d),t(d.primary,d.offset,d.background,d.border,d.background_url),_(`System "${r.system_name}" loaded successfully! Backup created.`),u(``),k.log(`System snapshot imported and loaded:`,{systemName:r.system_name,snapshotPublicId:r.snapshot_public_id})}catch(e){k.error(`Error fetching system:`,e),h(Wm(e,`An error occurred while fetching the system`))}finally{p(!1)}},ke=async e=>{Te(`This will restore the system "${e.name}" from backup. A backup of your current system will be created. Do you want to continue?`,async()=>{await Ae(e)})},Ae=async e=>{p(!0),h(null),_(null);try{if(!xe()){h(`Please connect your Battle-System account before restoring backups for room sharing.`);return}await we(),await Se(v);let n={primary:e.theme_primary,offset:e.theme_offset,background:e.theme_background,border:e.theme_border,background_url:e.background_url};if(!Array.isArray(e.card_layout)||!Array.isArray(e.list_layout)||!Array.isArray(e.attributes))throw Error(`Backup data is invalid`);let r=new Date().toISOString(),i=`forge-backup:${e.name.trim().toLowerCase()}`,{data:o,error:s}=await he(async()=>C.rpc(`bs_forge_upsert_user_snapshot_payload`,{p_source_share_id:i,p_system_name:e.name,p_background_url:e.background_url,p_theme_primary:e.theme_primary,p_theme_offset:e.theme_offset,p_theme_background:e.theme_background,p_theme_border:e.theme_border,p_card_layout:e.card_layout,p_list_layout:e.list_layout,p_attributes:e.attributes}));if(s)throw s;let l=Array.isArray(o)?o[0]:o;if(!l||typeof l.snapshot_public_id!=`string`)throw Error(`Backup restore snapshot publish failed`);a({theme:n,cardLayout:e.card_layout,listLayout:e.list_layout,attributes:e.attributes,systemName:e.name,importDate:r,snapshotPublicId:l.snapshot_public_id}),await c.room.setMetadata({[Hm.SNAPSHOT_PUBLIC_ID]:l.snapshot_public_id,[Hm.SYSTEM_NAME]:e.name,[Hm.IMPORT_DATE]:r}),y(e.name),x(r),w(n),t(n.primary,n.offset,n.background,n.border,n.background_url),_(`System "${e.name}" restored from backup successfully!`),k.log(`System restored from backup:`,e.name)}catch(e){k.error(`Error restoring backup:`,e),h(`Failed to restore system from backup`)}finally{p(!1)}},je=async()=>{p(!0),h(null),_(null);try{let e={primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url};a({theme:e,cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,snapshotPublicId:null}),await c.room.setMetadata({[Hm.SNAPSHOT_PUBLIC_ID]:null,[Hm.SYSTEM_NAME]:E.name,[Hm.IMPORT_DATE]:null}),y(E.name),x(null),w(e),t(e.primary,e.offset,e.background,e.border,e.background_url),_(`Reset to default system successfully!`)}catch(e){h(`Failed to reset to default system`),k.error(`Error resetting to default:`,e)}finally{p(!1)}},Me=e=>e?new Date(e).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):null,Ne=!o,Pe=!o;return(0,F.jsxs)(Zu.div,{variants:hh,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,F.jsxs)(nm,{theme:e,children:[(0,F.jsx)(rm,{theme:e,children:`System Configuration`}),(0,F.jsx)(qm,{theme:e,children:v}),b?(0,F.jsxs)(Jm,{theme:e,children:[`Imported: `,Me(b)]}):(0,F.jsx)(Jm,{theme:e,children:`Using Default System`}),S&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Ym,{children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(Xm,{color:S.primary,theme:e,children:S.primary}),(0,F.jsx)(Zm,{theme:e,children:`PRIMARY`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(Xm,{color:S.offset,theme:e,children:S.offset}),(0,F.jsx)(Zm,{theme:e,children:`OFFSET`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(Xm,{color:S.background,theme:e,children:S.background}),(0,F.jsx)(Zm,{theme:e,children:`BG`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(Xm,{color:S.border,theme:e,children:S.border}),(0,F.jsx)(Zm,{theme:e,children:`BORDER`})]})]}),(0,F.jsxs)(Qm,{theme:e,children:[(0,F.jsx)($m,{theme:e,children:`System Settings`}),(0,F.jsxs)(eh,{children:[(0,F.jsx)(th,{theme:e,children:`Current HP`}),(0,F.jsxs)(nh,{theme:e,value:D,disabled:Pe,onChange:async e=>{if(Pe)return;let t=e.target.value;te(t),await _e(O.HP_CURRENT_BID,t)},children:[(0,F.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),ye.map(e=>(0,F.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,F.jsxs)(eh,{children:[(0,F.jsx)(th,{theme:e,children:`Max HP`}),(0,F.jsxs)(nh,{theme:e,value:ne,disabled:Pe,onChange:async e=>{if(Pe)return;let t=e.target.value;re(t),await _e(O.HP_MAX_BID,t)},children:[(0,F.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),ye.map(e=>(0,F.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),Pe&&(0,F.jsx)(Jm,{theme:e,children:`Log in to edit HP mapping.`}),(0,F.jsxs)(eh,{children:[(0,F.jsx)(th,{theme:e,children:`Buff Visual`}),(0,F.jsx)(nh,{theme:e,value:ae,onChange:async e=>{let t=e.target.value;Im(t)&&(oe(t),await _e(O.BUFF_VISUAL_PRESET,t))},children:Pm.map(e=>(0,F.jsx)(`option`,{value:e.value,children:e.label},e.value))})]}),(0,F.jsxs)(eh,{children:[(0,F.jsx)(th,{theme:e,children:`Debuff Visual`}),(0,F.jsx)(nh,{theme:e,value:se,onChange:async e=>{let t=e.target.value;Lm(t)&&(ce(t),await _e(O.DEBUFF_VISUAL_PRESET,t))},children:Fm.map(e=>(0,F.jsx)(`option`,{value:e.value,children:e.label},e.value))})]})]})]}),(0,F.jsxs)(Km,{theme:e,children:[(0,F.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0},children:`Import New System`}),(0,F.jsx)(`p`,{style:{color:f(e.PRIMARY,.8),fontSize:`14px`},children:Ne?`Log in to import new/custom systems.`:`Enter a share_id to download and activate a new game system configuration.`}),(0,F.jsx)(Gm,{children:(0,F.jsx)(om,{theme:e,type:`text`,value:l,onChange:e=>u(e.target.value),placeholder:Ne?``:`Enter Share Id...`,disabled:d||Ne,onKeyPress:e=>e.key===`Enter`&&Oe()})}),(0,F.jsxs)(ah,{children:[(0,F.jsx)(am,{theme:e,onClick:Oe,disabled:d||Ne||!l.trim(),children:d?`....!`:`Import System`}),(0,F.jsx)(am,{theme:e,variant:`secondary`,onClick:je,disabled:d,children:`Use Default`})]})]}),m&&(0,F.jsxs)(rh,{theme:e,children:[(0,F.jsx)(`strong`,{children:`Error:`}),` `,m]}),g&&(0,F.jsxs)(ih,{theme:e,children:[(0,F.jsx)(`strong`,{children:`Success:`}),` `,g]}),le.length>0&&(0,F.jsx)(sh,{children:(0,F.jsxs)(im,{theme:e,children:[(0,F.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0,marginBottom:`15px`},children:`System Backups`}),(0,F.jsx)(ch,{children:le.map(t=>(0,F.jsxs)(lh,{theme:e,children:[(0,F.jsxs)(uh,{children:[(0,F.jsx)(dh,{theme:e,children:t.name}),(0,F.jsxs)(fh,{theme:e,children:[`Backed up: `,Me(t.backupDate)]})]}),(0,F.jsxs)(ph,{children:[(0,F.jsx)(mh,{theme:e,onClick:()=>ke(t),disabled:d,title:`Import this backup`,children:(0,F.jsx)(qd,{size:18})}),(0,F.jsx)(mh,{theme:e,$variant:`danger`,onClick:()=>Ce(t.name),disabled:d,title:`Delete this backup`,children:(0,F.jsx)(ie,{size:18})})]})]},`${t.name}-${t.backupDate}`))})]})})]}),(0,F.jsx)(pm,{isOpen:A,title:`Confirm Action`,onClose:De,actions:(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(am,{theme:e,variant:`secondary`,onClick:De,children:`Cancel`}),(0,F.jsx)(am,{theme:e,onClick:Ee,children:`Confirm`})]}),children:(0,F.jsx)(oh,{theme:e,children:pe})})]},`system`)};function _h(e,t){let n=e.replace(`#`,``);n.length===3&&(n=n.split(``).map(e=>e+e).join(``));let r=parseInt(n,16);return`rgba(${r>>16&255}, ${r>>8&255}, ${r&255}, ${t})`}var vh=class{static async CenterViewportOnImage(e){let t=await c.scene.grid.getDpi(),n=await c.viewport.getScale(),r=await c.viewport.getWidth(),i=await c.viewport.getHeight(),a={x:r/2,y:i/2},o={x:a.x/n,y:a.y/n},s=await this.GetImageCenter(e,t),l={x:s.x-o.x,y:s.y-o.y},u={x:l.x*n*-1,y:l.y*n*-1};await c.viewport.animateTo({position:u,scale:n})}static async GetImageCenter(t,n){if(e(t)){let e=n/t.grid.dpi,r=t.image.width*e,i=t.image.height*e,a=t.grid.offset.x/t.image.width*r,o=t.grid.offset.y/t.image.height*i;return{x:t.position.x-a+r/2,y:t.position.y-o+i/2}}else if(o(t)&&t.points.length>0)return{x:t.points[0].x,y:t.points[0].y};else return{x:t.position.x,y:t.position.y}}};const yh=`${M}/effects`;var bh=`${M}/effects-expired`,xh=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Sh=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ch=T.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`,wh=T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
`,Th=T.div`
  flex: 0 0 120px;
  min-width: 120px;
  display: flex;
  align-items: flex-end;
`,Eh=T.label`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`,Dh=T.input`
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
`,Oh=T.select`
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
`,kh=T(Oh)`
  min-width: 180px;
  height: 96px;
  padding-right: 8px;
`,Ah=T.button`
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
`,jh=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 240px;
  overflow-y: auto;
`,Mh=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background: ${e=>f(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,Nh=T.div`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  font-size: 12px;
`,Ph=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,Fh=T.p`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,Ih=T.p`
  color: #ff6b6b;
  margin: 0;
  font-size: 12px;
`,Lh=T.div`
  position: relative;
  display: inline-flex;
`,Rh=T.button`
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
`,zh=T.span`
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
`,Bh=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const Vh=({items:e,units:t,setItems:n,playerData:r})=>{let[i,a]=(0,N.useState)(null),[o,s]=(0,N.useState)(``),[l,u]=(0,N.useState)(`1`),[d,f]=(0,N.useState)(`rounds`),[m,h]=(0,N.useState)(`start`),[g,_]=(0,N.useState)(`neutral`),[v,y]=(0,N.useState)([]),[b,x]=(0,N.useState)(null),S=(0,N.useMemo)(()=>{let t=new Map;return e.forEach(e=>{e.metadata?.[p.ON_LIST]===!0&&t.set(e.id,Bh(e.metadata?.[yh]))}),t},[e]),C=e=>S.get(e)||[],w=async(t,r)=>{let i=r.filter(e=>e.remaining>0);n(e.map(e=>{if(e.id!==t)return e;let n={...e.metadata||{}};return i.length>0?n[yh]=i:delete n[yh],{...e,metadata:n}})),await c.scene.items.updateItems([t],e=>{let t={...e[0].metadata||{}};i.length>0?t[yh]=i:delete t[yh],e[0].metadata=t})},T=async e=>{try{await c.broadcast.sendMessage(bh,{message:e},{destination:`ALL`})}catch(t){k.error(`Failed to broadcast expired effect message`,t),await c.notification.show(e,`WARNING`)}},E=async(t,n)=>{if(String(r?.role||``).toUpperCase()!==`GM`)return;let i=[],a=[];e.forEach(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return;let r=Bh(e.metadata?.[yh]);if(r.length===0)return;let o=!1,s=[];r.forEach(r=>{if(!(r.endTiming===t&&(r.durationType===`turns`||e.id===n))){s.push(r);return}let i=r.remaining-1;if(o=!0,i<=0){a.push(`${e.name||`Unit`}: ${r.name} expired`);return}s.push({...r,remaining:i})}),o&&i.push({unitId:e.id,effects:s})});for(let e of i)await w(e.unitId,e.effects);if(a.length>0)for(let e of a)await T(e)},ee=(0,N.useMemo)(()=>i&&t.find(e=>e.id===i)||null,[i,t]),D=(0,N.useMemo)(()=>i?C(i):[],[i,S]);return(0,N.useEffect)(()=>{let e=c.broadcast.onMessage(bh,async e=>{let t=e.data?.message;typeof t!=`string`||!t.trim()||await c.notification.show(t,`WARNING`)});return()=>{e()}},[]),{effectsModalUnitId:i,selectedEffectsUnit:ee,activeEffectsForSelectedUnit:D,effectNameInput:o,setEffectNameInput:s,effectDurationInput:l,setEffectDurationInput:u,effectDurationType:d,setEffectDurationType:f,effectEndTiming:m,setEffectEndTiming:h,effectType:g,setEffectType:_,effectTargetIds:v,setEffectTargetIds:e=>{y(Array.from(new Set(e)))},effectsModalError:b,units:t,getEffectsForUnit:C,handleOpenEffectsModal:e=>{x(null),s(``),u(`1`),f(`rounds`),h(`start`),_(`neutral`),y([e]),a(e)},handleCloseEffectsModal:()=>{a(null),x(null)},handleAddEffect:async()=>{if(!i)return;let n=o.trim(),r=parseInt(l,10);if(!n){x(`Enter an effect name.`);return}if(!Number.isFinite(r)||r<=0){x(`Duration must be a positive number.`);return}let a=Array.from(new Set(v.filter(e=>t.some(t=>t.id===e))));if(a.length===0){x(`Select at least one target.`);return}let c=C(i),f=ee?.name||e.find(e=>e.id===i)?.name||`Unknown`,p={id:crypto.randomUUID(),name:n,remaining:r,durationType:d,endTiming:m,effectType:g,targets:a,createdByName:f,createdById:i};await w(i,[...c,p]),x(null),s(``),u(`1`),_(`neutral`),y([i])},handleDeleteEffect:async e=>{i&&await w(i,C(i).filter(t=>t.id!==e))},processEffectsForTurnEvent:E}},Hh=({manager:e})=>{let{theme:t}=We(),n=(0,N.useMemo)(()=>{let t=new Map;return e.units.forEach(e=>{t.set(e.id,e.name)}),t},[e.units]),r=e=>e===`buff`?`Buff`:e===`debuff`?`Debuff`:`Neutral`,i=e=>{if(e.length===0)return`No targets`;let t=e.map(e=>n.get(e)).filter(e=>typeof e==`string`&&e.length>0);return t.length===0?`${e.length} target${e.length===1?``:`s`}`:t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`};return(0,F.jsx)(pm,{isOpen:!!e.effectsModalUnitId,title:e.selectedEffectsUnit?`Effects: ${e.selectedEffectsUnit.name}`:`Effects`,onClose:e.handleCloseEffectsModal,minWidth:`520px`,maxWidth:`600px`,children:(0,F.jsxs)(xh,{children:[(0,F.jsxs)(Sh,{children:[(0,F.jsxs)(Ch,{children:[(0,F.jsxs)(wh,{style:{flex:`0 0 120px`},children:[(0,F.jsx)(Eh,{theme:t,children:`Effect`}),(0,F.jsx)(Dh,{theme:t,type:`text`,placeholder:`Name`,value:e.effectNameInput,onChange:t=>e.setEffectNameInput(t.target.value)})]}),(0,F.jsxs)(wh,{style:{flex:`0 0 140px`},children:[(0,F.jsx)(Eh,{theme:t,children:`Duration`}),(0,F.jsx)(Dh,{theme:t,type:`number`,min:1,value:e.effectDurationInput,onChange:t=>e.setEffectDurationInput(t.target.value)})]}),(0,F.jsxs)(wh,{style:{flex:`0 0 120px`},children:[(0,F.jsx)(Eh,{theme:t,children:`By`}),(0,F.jsxs)(Oh,{theme:t,value:e.effectDurationType,onChange:t=>e.setEffectDurationType(t.target.value),children:[(0,F.jsx)(`option`,{value:`turns`,children:`Turns`}),(0,F.jsx)(`option`,{value:`rounds`,children:`Rounds`})]})]})]}),(0,F.jsxs)(Ch,{children:[(0,F.jsxs)(wh,{style:{flex:`0 0 120px`},children:[(0,F.jsx)(Eh,{theme:t,children:`Type`}),(0,F.jsxs)(Oh,{theme:t,value:e.effectType,onChange:t=>e.setEffectType(t.target.value),children:[(0,F.jsx)(`option`,{value:`neutral`,children:`Neutral`}),(0,F.jsx)(`option`,{value:`buff`,children:`Buff`}),(0,F.jsx)(`option`,{value:`debuff`,children:`Debuff`})]})]}),(0,F.jsxs)(wh,{style:{flex:`0 0 140px`},children:[(0,F.jsx)(Eh,{theme:t,children:`Ends at`}),(0,F.jsxs)(Oh,{theme:t,value:e.effectEndTiming,onChange:t=>e.setEffectEndTiming(t.target.value),children:[(0,F.jsx)(`option`,{value:`start`,children:`Start of turn`}),(0,F.jsx)(`option`,{value:`end`,children:`End of turn`})]})]}),(0,F.jsx)(Th,{children:(0,F.jsx)(Ah,{theme:t,onClick:e.handleAddEffect,style:{width:`100%`},children:`Add`})})]})]}),(0,F.jsxs)(wh,{children:[(0,F.jsx)(Eh,{theme:t,children:`Targets`}),(0,F.jsx)(kh,{theme:t,multiple:!0,value:e.effectTargetIds,onChange:t=>{let n=Array.from(t.target.selectedOptions).map(e=>e.value);e.setEffectTargetIds(n)},children:e.units.map(e=>(0,F.jsx)(`option`,{value:e.id,children:e.name},e.id))})]}),e.effectsModalError&&(0,F.jsx)(Ih,{theme:t,children:e.effectsModalError}),e.activeEffectsForSelectedUnit.length===0?(0,F.jsx)(Fh,{theme:t,children:`No active effects.`}):(0,F.jsx)(jh,{children:e.activeEffectsForSelectedUnit.map(n=>(0,F.jsxs)(Mh,{theme:t,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(Ph,{theme:t,children:n.name}),(0,F.jsxs)(Nh,{theme:t,children:[r(n.effectType),` • `,n.remaining,` `,n.durationType,` • ends at `,n.endTiming===`start`?`start of turn`:`end of turn`,` • by `,n.createdByName]}),(0,F.jsxs)(Nh,{theme:t,children:[`Targets: `,i(n.targets)]})]}),(0,F.jsx)(Ah,{theme:t,onClick:()=>{e.handleDeleteEffect(n.id)},children:`Delete`})]},n.id))})]})})},Uh=({activeEffectsCount:e,canInteract:t,onOpen:n,icon:r})=>{let{theme:i}=We();return(0,F.jsxs)(Lh,{children:[(0,F.jsx)(Rh,{theme:i,$active:e>0,disabled:!t,onClick:()=>{t&&n()},children:r||(0,F.jsx)(Hd,{})}),e>0&&(0,F.jsx)(zh,{theme:i,children:e>99?`99+`:e})]})};var Wh=T.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,Gh=T.input`
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
`;const Kh=({theme:e,unit:t,canInteract:n,elevationDraftValue:r,onElevationDraftChange:i,onCommitElevationChange:a})=>(0,F.jsx)(Wh,{theme:e,children:(0,F.jsx)(Gh,{theme:e,type:`text`,inputMode:`decimal`,min:-999,max:999,step:1,value:r??String(t.elevation??0),readOnly:!n,onChange:n?e=>i(t.id,e.target.value):void 0,onBlur:n?e=>a(t.id,e.target.value):void 0,onKeyDown:e=>{n&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}})}),qh=({theme:e,canInteract:t,icon:n,activeEffectsCount:r,onOpen:i})=>(0,F.jsx)(Wh,{theme:e,children:(0,F.jsx)(Uh,{activeEffectsCount:r,canInteract:t,icon:n||(0,F.jsx)(Hd,{}),onOpen:i})});var Jh=`${M}/elevation-badge`,Yh=`${M}/elevation-badge-owner`,Xh=`${M}/elevation`,Zh=200,Qh=40,$h=60,eg=120,tg=24,ng=(e,t)=>{if(!e)return;if(e.startsWith(`#`))return _h(e,t);let n=e.match(/^rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\)$/i);if(n){let[,e,r,i]=n;return`rgba(${e}, ${r}, ${i}, ${t})`}let r=e.match(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i);if(r){let[,e,n,i]=r;return`rgba(${e}, ${n}, ${i}, ${t})`}return e},rg=e=>`
    0 1px 1px ${f(e.BACKGROUND,.95)},
    0 0 2px ${f(e.BACKGROUND,.85)}
  `,ig={anchor:Qu,aperture:$u,award:nd,batterycharging:id,book:sd,calendar:ld,clock:hd,cloudlightning:gd,drama:xd,carrot:ud,bone:ad,compass:vd,dollarsign:bd,feather:wd,eye:Sd,heart:kd,moon:Md,music:Nd,shield:Ld,star:Vd,sun:Hd,target:Gd,users:Jd,wind:Xd,zap:Zd,sword:Ud,swords:Wd,axe:rd,bowarrow:cd,coins:_d,wand:Yd,flower:Ed,skull:Rd,castle:dd,cross:yd,testtubediagonal:Kd,squirrel:Bd,snowflake:zd,shell:Id,pickaxe:Fd,heartplus:Od,heartcrack:Dd,fan:Cd},ag=T.div`
  padding: 2px;
  width: 100%;
`,og=T.h1`
  color: ${e=>e.theme.PRIMARY};
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`,sg=T.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
`,cg=T.div`
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
`,lg=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.$compactMode?`8px`:`16px`};
`,ug=T.button`
  background: ${e=>e.disabled?f(e.theme.BORDER,.3):f(e.theme.OFFSET,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>rg(e.theme)};
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
`,dg=T(ug)`
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
`,fg=T(ug)`
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
`,pg=T(ug)`
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
`,mg=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: ${e=>e.$compactMode?`14px`:`16px`};
  font-weight: 600;
  min-width: ${e=>e.$compactMode?`44px`:`80px`};
  text-align: center;
`,hg=T.table`
  width: ${e=>e.$compact?`max-content`:`100%`};
  min-width: ${e=>e.$compact?`${Zh}px`:`100%`};
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
`,gg=T.thead`
  background-color: ${e=>f(e.theme.BACKGROUND,.75)};
`,_g=T.tr``,vg=T.th`
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
`,yg=T.div`
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
`,bg=T.tbody``,xg=T.tr`
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
`,Sg=T.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,Cg=T(Sg)`
  font-weight: 700;
  font-size: 18px;
  color: ${e=>e.theme.OFFSET};
  min-width: 60px;
`,wg=T(Sg)`
  min-width: 48px;
`,Tg=T.button`
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
`,Eg=T.img`
  width: 18px;
  height: 18px;
  pointer-events: none;
`,Dg=T.div`
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
`,Og=T.input`
  background: ${e=>e.$isRollable?f(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.3)`};
  border: 1px solid ${e=>e.$isRollable?f(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?rg(e.theme):`none`};
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
`,kg=T(Sg)`
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
`,Ag=T.input`
  background: ${e=>e.$isRollable?f(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.4)`};
  border: 1px solid ${e=>e.$isRollable?f(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?rg(e.theme):`none`};
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
`,jg=T.span`
  margin: 0 2px;
  color: ${e=>e.theme.OFFSET};
  font-weight: 500;
`,Mg=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,Ng=T.button`
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
`,Pg=T.input`
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
`,Fg=T.button`
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
`,Ig=T.div`
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
`,Lg=T(Sg)`
  width: 24px;
  min-width: 24px;
  max-width: 24px;
  padding: 0;
  position: relative;
`,Rg=T.div`
  position: absolute;
  inset: 0;
  min-height: 40px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0 10px;
`,zg=T.div`
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
`,Bg=T.div`
  flex: 1;
  height: 100%;
  padding: 0 8px;
  margin: 0 -10px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`,Vg=T.div`
  width: 6px;
  flex: 1;
  height: 100%;
  background-repeat: repeat-y;
  background-position: center;
  background-size: 6px 16px;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='16' viewBox='0 0 6 16' preserveAspectRatio='none'%3E%3Cpolyline points='3,0 0,4 6,8 0,12 3,16' fill='none' stroke='${encodeURIComponent(e.theme.BORDER)}' stroke-width='1.2'/%3E%3C/svg%3E")`};
`,Hg=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
`,Ug=T.button`
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
`,Wg=T.p`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  margin: 0 0 12px 0;
  font-size: 13px;
`,Gg=T.p`
  color: #ff6b6b;
  margin: 10px 0 0 0;
  font-size: 13px;
`,Kg=T.div`
  height: 1px;
  margin: 12px 0;
  background: ${e=>f(e.theme.BORDER,.7)};
`,qg=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.35)};
`,Jg=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,Yg=T.div`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  font-size: 11px;
`,Xg=T.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`,Zg=T.button`
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
`,Qg=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,$g=T.p`
  color: ${e=>f(e.theme.PRIMARY,.78)};
  margin: 0;
  font-size: 12px;
`,e_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 320px;
  overflow-y: auto;
`,t_=T.div`
  background: ${e=>f(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,n_=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,r_=T.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #4b5563;
  background: rgba(0, 0, 0, 0.2);
  accent-color: #ffffff;
  margin: 0;
  pointer-events: none;
`,i_=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
`,a_=T.div`
  color: ${e=>f(e.theme.PRIMARY,.85)};
  font-size: 12px;
  font-style: italic;
  line-height: 1.25;
  white-space: pre-wrap;
`,o_=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`,s_=T.button`
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
`,c_=T.p`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,l_=T.div`
  width: 100%;
  min-height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>f(e.theme.BORDER,.8)};
  background: ${e=>f(e.theme.BACKGROUND,.55)};
`,u_=T.div`
  width: ${e=>e.$small?`40px`:`60px`};
  min-width: ${e=>e.$small?`40px`:`60px`};
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>f(e.theme.BORDER,.8)};
  background: ${e=>f(e.theme.BACKGROUND,.55)};
`,d_=(e,t)=>{let n=[{id:crypto.randomUUID(),type:`initiative`,description:`Initiative value used for turn order. Can be edited via Right-Click or rolled with Click.`},{id:crypto.randomUUID(),type:`name`,description:`Name of the unit or character.`}],r=t?[{id:`card-column`,type:`card-column`}]:[];if(!e||e.length===0)return[...n,...r];let i=[...e].sort((e,t)=>e.col-t.col).map(e=>({id:e.id,type:e.type,name:e.styles?.labelName,useIcon:e.styles?.labelMode===`icon`,iconType:e.styles?.labelIcon,description:e.styles?.description,styles:e.styles}));return[...n,...i,...r]};const f_=()=>{let{theme:r}=We(),{listLayout:i,attributes:a,isLoading:o}=mm();P(e=>e.roomMetadata);let s=P(e=>e.sceneMetadata),l=P(e=>e.items),u=P(e=>e.partyData),d=P(e=>e.playerData),f=P(e=>e.gridDpi),m=P(e=>e.setItems),[h,g]=(0,N.useState)([]),[_,v]=(0,N.useState)([]),[y,b]=(0,N.useState)(null),[x,S]=(0,N.useState)(1),[C,w]=(0,N.useState)(new Set),[T,E]=(0,N.useState)(null),[ee,D]=(0,N.useState)(null),[te,re]=(0,N.useState)(!1),[ie,ae]=(0,N.useState)(!1),[oe,se]=(0,N.useState)(!1),[ce,le]=(0,N.useState)({}),[ue,A]=(0,N.useState)({}),[j,de]=(0,N.useState)(null),[fe,pe]=(0,N.useState)({}),[me,he]=(0,N.useState)(!1),[_e,ve]=(0,N.useState)(!1),[ye,be]=(0,N.useState)(!1),[xe,Se]=(0,N.useState)(()=>window.innerWidth<400),[we,Te]=(0,N.useState)(null),Ee=(0,N.useRef)(null),De=(0,N.useRef)({}),Oe=(0,N.useRef)({}),ke=(0,N.useRef)(null);(0,N.useEffect)(()=>{let e=()=>{Se(window.innerWidth<400)};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let Ae=s,je=Ae[O.REVERSE_INITIATIVE]||!1,Me=Ae[O.POPCORN_INITIATIVE]||!1,Ne=Ae[O.SHOW_CARD_ACCESS]||!1,Pe=Ae[O.SHOW_NON_PARTY_UNITS]||!1,Fe=Ae[O.SHOW_LIST_HP_NUMBERS],Ie=typeof Fe==`boolean`?Fe:!0,Le=Ae[O.DICE_RANGE]||``,Re=Ae[O.INITIATIVE_MODIFIER_BID]||``,ze=Ae[O.INITIATIVE_MODIFIER_EXPR]||`@STAT`,Be=ze.trim().length>0?ze:`@STAT`,Ve=Ae[O.SHOW_OWNER_ONLY_EDIT]||!1,He=String(d?.role||``).toUpperCase()===`GM`,Ue=d?.id||``,Ge=ne(O.INITIATIVE_LIST_COMPACT,Ue);(0,N.useEffect)(()=>{let e=s[Ge],t=s[O.INITIATIVE_LIST_COMPACT];be(typeof e==`boolean`?e:typeof t==`boolean`?t:!1)},[s,Ge]);let Ke=async()=>{let e=!ye;be(e);try{await c.scene.setMetadata({[Ge]:e})}catch(t){k.error(`Failed to persist initiative list compact mode`,t),be(!e)}},I=async({notation:e,actionName:t,tokenName:n,senderId:r,senderColor:i})=>{try{await ge({notation:e,actionName:t,senderName:n,senderId:r,senderColor:i},Ae)}catch(t){k.error(`Failed to send dice roll from InitiativeList`,e,t),k.log(e)}},L=e=>{let t=e;if(typeof t==`string`)try{t=JSON.parse(t)}catch{return[]}return Array.isArray(t)?t.map((e,t)=>{let n=e&&typeof e==`object`?e:{},r=n.inUse,i=typeof r==`boolean`?r:typeof r==`string`?[`true`,`1`,`yes`].includes(r.trim().toLowerCase()):typeof r==`number`?r===1:void 0;return{id:typeof n.id==`string`&&n.id?n.id:`entry-${t}`,name:typeof n.name==`string`?n.name:``,description:typeof n.description==`string`?n.description:``,...i===void 0?{}:{inUse:i}}}):[]};(0,N.useEffect)(()=>{g(l.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>{let t=e.metadata?.[p.INITIATIVE]||0,n=e.metadata[p.UNIT_NAME]||e.name||`Unknown`,r=e.metadata?.[p.BOSS_MODE]===!0,i=e.metadata?.[Xh]||0,a=u.find(t=>t.id===e.createdUserId)||(d?.id===e.createdUserId?d:void 0),o=String(a?.role||``).toUpperCase()===`GM`,s=a?.color||(d?.id===e.createdUserId?d?.color:void 0),c=o?void 0:ng(s,1),l={};return Object.keys(e.metadata||{}).forEach(t=>{t.startsWith(`com.battle-system.forge`)&&(l[t]=e.metadata?.[t])}),{id:e.id,initiative:t,name:n,isBoss:r,elevation:i,attributes:l,createdUserId:e.createdUserId,ownerNameOutlineColor:c,isInParty:e.metadata?.[p.IN_PARTY]===!0,isVisible:e.visible!==!1}}))},[l,u,d]);let R=(0,N.useMemo)(()=>Me?[...h].sort((e,t)=>e.name.localeCompare(t.name)):[...h].sort((e,t)=>e.initiative===t.initiative?e.name.localeCompare(t.name):je?e.initiative-t.initiative:t.initiative-e.initiative),[h,je,Me]),qe=Vh({items:l,units:R,setItems:m,playerData:d}),Je=(0,N.useMemo)(()=>{let e=new Map;return u.forEach(t=>{e.set(t.id,t)}),d&&!e.has(d.id)&&e.set(d.id,d),Array.from(e.values()).sort((e,t)=>e.name.localeCompare(t.name))},[u,d]),Ye=(e,t)=>{let n=parseInt(t)||0;g(t=>t.map(t=>t.id===e?{...t,initiative:n}:t))},Xe=(e,t)=>{m(l.map(n=>n.id===e?{...n,metadata:{...n.metadata,[p.INITIATIVE]:t}}:n)),c.scene.items.updateItems([e],e=>{e[0].metadata[p.INITIATIVE]=t})},Ze=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},Qe=(e,t,n)=>(typeof t==`number`&&(e=Math.max(t,e)),typeof n==`number`&&(e=Math.min(n,e)),e),$e=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(r.length===0)return Qe(0,i,a);let o=r.match(/^([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),s=r.match(/^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),c=null;if(o){let e=o[1],n=parseFloat(o[2]);switch(e){case`+`:c=t+n;break;case`-`:c=t-n;break;case`*`:c=t*n;break;case`/`:c=n===0?t:t/n;break}}else if(s){let e=parseFloat(s[1]),t=s[2],n=parseFloat(s[3]);switch(t){case`+`:c=e+n;break;case`-`:c=e-n;break;case`*`:c=e*n;break;case`/`:c=n===0?e:e/n;break}}else{let e=parseFloat(r);Number.isNaN(e)||(c=e)}return Qe(c===null||!Number.isFinite(c)?t:Math.trunc(c),i,a)},et=e=>{let t=Ze(Le),n=Math.floor(Math.random()*t)+1,r=0;if(Re){let t=h.find(t=>t.id===e);if(t){let e=t.attributes?.[`${M}/${Re}`],n=Number(e),i=Number.isFinite(n)?n:0,a=Ce(Be.replace(/@STAT/gi,`@${Re}`).replace(/\bx\b/gi,`@${Re}`),{bidValueMap:{[Re]:i},onMissingBid:`useZero`});if(a.valid&&a.notation){let e=Number(a.notation);Number.isFinite(e)&&(r=Math.trunc(e))}}}let i=n+r;Ye(e,String(i)),Xe(e,i)},tt=(e,t)=>{le(n=>({...n,[e]:t}))},nt=(e,t)=>{let n=$e(t,h.find(t=>t.id===e)?.initiative??0);le(t=>{let{[e]:n,...r}=t;return r}),g(t=>t.map(t=>t.id===e?{...t,initiative:n}:t)),Xe(e,n)},rt=e=>`ELE${e.slice(3)}`,it=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o}},at=async(t,r)=>{let i=rt(t);try{await c.scene.items.deleteItems([i])}catch{}if(r===0)return;let a=l.find(e=>e.id===t);if(!a||!e(a))return;let o=it(a,f),s=`${r>0?`🡹`:`🡻`}${Math.abs(r)}`,u=n().id(i).name(`Elevation Badge`).plainText(s).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(36).fontFamily(`Segoe UI`).textAlign(`CENTER`).position({x:o.minX-40,y:o.minY}).metadata({[Jh]:!0,[Yh]:t}).attachedTo(t).visible(a.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build();try{await c.scene.items.addItems([u])}catch(e){k.error(`Failed to add elevation badge`,t,e)}},ot=(e,t)=>{A(n=>({...n,[e]:t}))},st=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(!r)return Qe(0,i,a);let o=parseFloat(r);return Qe(Number.isFinite(o)?Math.trunc(o):t,i,a)},ct=(e,t)=>{let n=st(t,h.find(t=>t.id===e)?.elevation??0,{min:-999,max:999});A(t=>{let{[e]:n,...r}=t;return r}),g(t=>t.map(t=>t.id===e?{...t,elevation:n}:t)),m(l.map(t=>t.id===e?{...t,metadata:{...t.metadata,[Xh]:n}}:t)),c.scene.items.updateItems([e],e=>{e[0].metadata[Xh]=n}),at(e,n)},lt=(e,t)=>{let n=e.trim();if(!n)return e;let r=/^([+\-*/])\s*-?\d+(?:\.\d+)?$/.test(n),i=/^-?\d+(?:\.\d+)?\s*[+\-*/]\s*-?\d+(?:\.\d+)?$/.test(n),a=/^-?\d+(?:\.\d+)?$/.test(n);if(!r&&!i&&!a)return e;let o=typeof t==`number`?t:parseFloat(String(t)),s=Number.isFinite(o)?o:0;return String($e(n,s))},ut=(e,t,n)=>{let r=`${M}/${t}`,i=h.find(t=>t.id===e)?.attributes?.[r],a=lt(n,i);g(t=>t.map(t=>t.id===e?{...t,attributes:{...t.attributes,[r]:a}}:t)),m(l.map(t=>t.id===e?{...t,metadata:{...t.metadata,[r]:a}}:t)),c.scene.items.updateItems([e],e=>{e[0].metadata[r]=a})},dt=e=>a.find(t=>t.attr_bid===e)||null,ft=e=>{let t=dt(e);return typeof t?.attr_func==`string`&&t.attr_func.trim().length>0},pt=e=>{let t={};for(let n of a){let r=`${M}/${n.attr_bid}`,i=e.attributes?.[r];if(i==null||i===``)continue;let a=Number(i);Number.isFinite(a)&&(t[n.attr_bid]=a)}return t},mt=async(e,t)=>{let n=dt(t)?.attr_func;if(typeof n!=`string`||n.trim().length===0)return;let r=Ce(n,{bidValueMap:pt(e),onMissingBid:`error`});if(!r.valid||!r.notation){k.warn(`Could not resolve notation for initiative list value-column`,{unitId:e.id,bid:t,error:r.error});return}let i=dt(t)?.attr_name||t,a=u.find(t=>t.id===e.createdUserId);await I({notation:r.notation,actionName:i,tokenName:e.name,senderId:e.createdUserId||d?.id||`unknown`,senderColor:a?.color||d?.color||`#ffffff`})};(0,N.useEffect)(()=>()=>{Object.values(De.current).forEach(e=>{window.clearTimeout(e)})},[]);let ht=(e,t)=>`value-column:${e}:${t}`,gt=e=>!!fe[e],_t=(e,t)=>{pe(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},vt=e=>{pe(t=>{let{[e]:n,...r}=t;return r})},yt=(e,t)=>{let n=De.current[e];n&&window.clearTimeout(n),De.current[e]=window.setTimeout(()=>{Oe.current[e]=!0,_t(e,t),delete De.current[e]},500)},bt=e=>{let t=De.current[e];t&&(window.clearTimeout(t),delete De.current[e])},xt=e=>Oe.current[e]?(delete Oe.current[e],!0):!1,St=e=>{if(!Ve||He)return!0;let t=d?.id;return t?e.createdUserId===t:!1},Ct=e=>He?!0:e.isVisible,wt=e=>He||Pe?!1:!e.isInParty;(0,N.useEffect)(()=>{o||v(d_(i,Ne))},[i,o,Ne]),(0,N.useEffect)(()=>{let e=s[O.CURRENT_TURN],t=s[O.CURRENT_ROUND];e?b(e):R.length>0&&b(R[0].id),t&&S(t)},[s,R]);let Tt=async()=>{if(R.length===0)return;y&&await qe.processEffectsForTurnEvent(`end`,y);let e=R.findIndex(e=>e.id===y)+1;if(e>=R.length){let e=x+1;S(e),b(R[0].id),await c.scene.setMetadata({[O.CURRENT_TURN]:R[0].id,[O.CURRENT_ROUND]:e}),await qe.processEffectsForTurnEvent(`start`,R[0].id)}else b(R[e].id),await c.scene.setMetadata({[O.CURRENT_TURN]:R[e].id}),await qe.processEffectsForTurnEvent(`start`,R[e].id)},Et=async()=>{if(R.length===0)return;let e=R.findIndex(e=>e.id===y)-1;if(e<0){let e=Math.max(1,x-1);S(e),b(R[R.length-1].id),await c.scene.setMetadata({[O.CURRENT_TURN]:R[R.length-1].id,[O.CURRENT_ROUND]:e})}else b(R[e].id),await c.scene.setMetadata({[O.CURRENT_TURN]:R[e].id})},Dt=async e=>{Me&&(C.has(e)||(b(e),await c.scene.setMetadata({[O.CURRENT_TURN]:e}),await qe.processEffectsForTurnEvent(`start`,e)))},Ot=async()=>{y&&(await qe.processEffectsForTurnEvent(`end`,y),w(e=>new Set([...e,y])),C.size+1,R.length)},kt=async()=>{let e=x+1;S(e),w(new Set),b(null),await c.scene.setMetadata({[O.CURRENT_TURN]:null,[O.CURRENT_ROUND]:e})},At=async e=>{ve(!0);try{if(e===`clear-list`){let e=l.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await c.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata&&p.ON_LIST in e.metadata&&delete e.metadata[p.ON_LIST]})}),m(l.map(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return e;let t={...e.metadata||{}};return delete t[p.ON_LIST],{...e,metadata:t}})))}if(e===`reset-initiative`){let e=l.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await c.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata[p.INITIATIVE]=0})}),m(l.map(e=>e.metadata?.[p.ON_LIST]===!0?{...e,metadata:{...e.metadata||{},[p.INITIATIVE]:0}}:e)),g(e=>e.map(e=>l.some(t=>t.id===e.id&&t.metadata?.[p.ON_LIST]===!0)?{...e,initiative:0}:e)),le({}))}let t=e===`clear-list`?null:e===`reset-initiative`?[...R].sort((e,t)=>e.name.localeCompare(t.name))[0]?.id??null:R[0]?.id??null;S(1),b(t),w(new Set),await c.scene.setMetadata({[O.CURRENT_TURN]:t,[O.CURRENT_ROUND]:1}),he(!1)}catch(t){k.error(`Failed to reset encounter state`,{mode:e,error:t})}finally{ve(!1)}},jt=async e=>{let t=l.find(t=>t.id===e);if(t)try{await vh.CenterViewportOnImage(t)}catch(t){k.error(`Failed to center viewport on unit`,e,t)}},Mt=async(e,n)=>{try{let r=await c.viewport.getHeight(),i=r>800?700:r-100;await c.popover.open({id:t.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(n)}`,height:i,width:350,anchorElementId:e,hidePaper:!0,disableClickAway:!0})}catch(e){k.error(`Failed to open cards popover`,e)}},Nt=(e,t)=>{e.preventDefault(),e.stopPropagation(),D(null),E(t)},Pt=async e=>{if(T){if(!l.find(e=>e.id===T)){D(`Token not found in scene cache.`);return}re(!0),D(null);try{await c.scene.items.updateItems([T],t=>{let n=t[0];n.createdUserId=e}),m(l.map(t=>t.id===T?{...t,createdUserId:e}:t)),E(null)}catch(t){k.error(`Failed to reassign token owner`,T,e,t),D(`Unable to assign token owner. Ensure you have permission to edit this token.`)}finally{re(!1)}}},Ft=async()=>{if(!T)return;let e=l.find(e=>e.id===T);if(!e){D(`Token not found in scene cache.`);return}let t=e.metadata?.[p.BOSS_MODE]!==!0;if(t&&l.filter(e=>e.id!==T&&e.metadata?.[p.ON_LIST]===!0&&e.metadata?.[p.BOSS_MODE]===!0).length>=2){D(`A maximum of 2 bosses can be enabled at once.`);return}ae(!0),D(null);try{await c.scene.items.updateItems([T],e=>{let n={...e[0].metadata||{}};n[p.BOSS_MODE]=t,e[0].metadata=n}),m(l.map(e=>e.id===T?{...e,metadata:{...e.metadata||{},[p.BOSS_MODE]:t}}:e))}catch(e){k.error(`Failed to toggle boss mode`,T,e),D(`Unable to update boss mode for this token.`)}finally{ae(!1)}},z=async()=>{if(T){if(!l.find(e=>e.id===T)){D(`Token not found in scene cache.`);return}se(!0),D(null);try{await c.scene.items.updateItems([T],e=>{let t={...e[0].metadata||{}};p.ON_LIST in t&&delete t[p.ON_LIST],e[0].metadata=t}),m(l.map(e=>{if(e.id!==T)return e;let t={...e.metadata||{}};return delete t[p.ON_LIST],{...e,metadata:t}})),E(null)}catch(e){k.error(`Failed to remove token from initiative list`,T,e),D(`Unable to remove token from initiative list.`)}finally{se(!1)}}},It=(0,N.useMemo)(()=>T&&R.find(e=>e.id===T)||null,[T,R]),B=(0,N.useMemo)(()=>T&&l.find(e=>e.id===T)||null,[T,l]),Lt=B?.metadata?.[p.BOSS_MODE]===!0,Rt=(0,N.useMemo)(()=>j&&R.find(e=>e.id===j.unitId)||null,[j,R]),zt=(0,N.useMemo)(()=>j&&a.find(e=>e.attr_bid===j.bid)||null,[a,j]),V=(0,N.useMemo)(()=>{if(!j||!Rt)return[];let e=Rt.attributes[`${M}/${j.bid}`];return L(e)},[j,Rt]),Bt=(0,N.useMemo)(()=>V.some(e=>typeof e.inUse==`boolean`),[V]),Vt=(0,N.useMemo)(()=>ye?_.filter(e=>e.type===`initiative`||e.type===`name`?!0:e.type===`card-column`&&Ne):_,[ye,_,Ne]),Ht=(0,N.useMemo)(()=>{let e=a.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),t=a.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`}),n=e?.attr_bid,r=t?.attr_bid,i=Ae[O.HP_CURRENT_BID],o=Ae[O.HP_MAX_BID],s=new Set(a.map(e=>e.attr_bid));return{currentHpBid:i&&s.has(i)?i:n,maxHpBid:o&&s.has(o)?o:r}},[a,Ae]),Ut=(0,N.useMemo)(()=>R.filter(e=>Ct(e)),[R,He]),Wt=(0,N.useMemo)(()=>{if(!Rt)return{};let e={};for(let t of a){let n=`${M}/${t.attr_bid}`,r=Rt.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(e[t.attr_bid]=i)}return e},[Rt,a]),Gt=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=(e[1]||``).trim();if(!n)continue;let r=Ce(n,{bidValueMap:Wt,onMissingBid:`error`});!r.valid||!r.notation||t.push(r.notation)}return t};(0,N.useEffect)(()=>{ke.current&&Vt.length>0&&(k.debug(`Adjusting window width based on table size`),setTimeout(()=>{if(ke.current){let e=ke.current.offsetWidth+4,t=Math.min(e,800);c.action.setWidth(t),k.log(`Adjusted window width to `+t)}},100))},[ye,Vt.length,R.length]);let Kt=e=>{if(!e)return null;let t=ig[e.toLowerCase()];return t?(0,F.jsx)(t,{}):null},qt=(e,t)=>{let n=window.innerWidth-t-8,r=Math.min(Math.max(e-t/2,8),Math.max(8,n));return{left:r,arrowX:e-r}},Jt=e=>{let t=e.currentTarget.getBoundingClientRect(),n=`clientX`in e?e.clientX:t.left+t.width/2,r=t.top>72?`top`:`bottom`;return{anchorX:n,y:r===`top`?t.top:t.bottom,placement:r}},Yt=(e,t)=>{let n=Jt(e),r=Math.min(320,Math.max(140,t.length*7+28)),i=qt(n.anchorX,r);Te({text:t,...n,...i})},Xt=()=>{Te(null)};(0,N.useLayoutEffect)(()=>{if(!we||!Ee.current)return;let e=Ee.current.getBoundingClientRect().width,t=qt(we.anchorX,e);(Math.abs(t.left-we.left)>.5||Math.abs(t.arrowX-we.arrowX)>.5)&&Te(e=>e&&{...e,...t})},[we]);let Zt=e=>e.type===`initiative`?(0,F.jsx)(Jd,{}):e.type===`roller`?null:e.type===`name`?`Name`:e.type===`card-column`?(0,F.jsx)(Td,{}):e.type===`divider-column`?null:e.useIcon&&e.iconType?Kt(e.iconType):e.name||e.type,Qt=e=>e.type===`divider-column`?{fixedWidth:tg}:e.type===`initiative`?{minWidth:$h}:e.type===`name`?{minWidth:eg}:{minWidth:Qh},$t=(e,t)=>{let n=St(t),i=wt(t),a=!He&&!Ie;if(i&&e.type!==`initiative`&&e.type!==`name`&&e.type!==`divider-column`)return(0,F.jsx)(Sg,{theme:r,children:(0,F.jsx)(l_,{theme:r})});switch(e.type){case`initiative`:if(Me)return(0,F.jsx)(Cg,{theme:r,children:(0,F.jsx)(Dg,{onClick:e=>{e.stopPropagation(),n&&(C.has(t.id)||(t.id===y?Ot():Dt(t.id)))},children:C.has(t.id)?(0,F.jsx)(pd,{color:r.OFFSET}):t.id===y?(0,F.jsx)(fd,{color:r.PRIMARY}):(0,F.jsx)(md,{color:r.BORDER})})});let i=`initiative:${t.id}`,o=gt(i);return(0,F.jsx)(Cg,{theme:r,children:(0,F.jsx)(Og,{theme:r,$isRollable:n&&!o,type:`text`,inputMode:`decimal`,value:ce[t.id]??String(t.initiative),readOnly:!n||!o,onChange:!n||!o?void 0:e=>tt(t.id,e.target.value),onBlur:!n||!o?void 0:e=>{nt(t.id,e.target.value),vt(i)},onClick:()=>{n&&(o||xt(i)||et(t.id))},onContextMenu:e=>{n&&(e.preventDefault(),_t(i,e.currentTarget))},onTouchStart:e=>{n&&(o||yt(i,e.currentTarget))},onTouchEnd:()=>{bt(i)},onTouchCancel:()=>{bt(i)},onKeyDown:e=>{if(n){if(!o&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),et(t.id);return}o&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})});case`name`:return(0,F.jsx)(kg,{theme:r,title:`Right-click to assign owner`,$outlineColor:t.ownerNameOutlineColor,onDoubleClick:()=>jt(t.id),onContextMenu:n?e=>Nt(e,t.id):void 0,children:t.isBoss?`💀 ${t.name}`:t.name});case`roller`:return(0,F.jsx)(wg,{theme:r,children:(0,F.jsx)(Tg,{theme:r,disabled:!n,onClick:e=>{e.stopPropagation(),n&&et(t.id)},title:`Roll initiative (1-${Ze(Le)})`,children:(0,F.jsx)(Eg,{src:`/dice.svg`,alt:`Roll`})})});case`card-column`:return(0,F.jsx)(Sg,{theme:r,children:(0,F.jsx)(Ng,{id:`card-access-${t.id}`,theme:r,disabled:!n,onClick:e=>{e.stopPropagation(),n&&Mt(e.currentTarget.id,t.id)},title:`Open card for ${t.name}`,children:(0,F.jsx)(fd,{})})});case`value-column`:return(0,F.jsx)(Sg,{theme:r,children:(0,F.jsx)(Mg,{children:e.styles?.bidList?.map((i,o)=>{let s=ft(i),c=ht(t.id,i),l=s&&gt(c),u=t.attributes[`${M}/${i}`],d=u==null||u===``?`0`:String(u),f=i===Ht.currentHpBid||i===Ht.maxHpBid,p=!!Ue&&t.createdUserId===Ue,m=a&&f&&!p;return(0,F.jsxs)(N.Fragment,{children:[o>0&&(0,F.jsx)(jg,{theme:r,children:e.styles?.dividers?.[o-1]||`/`}),m?(0,F.jsx)(u_,{theme:r,$small:e.styles?.bidList&&e.styles.bidList.length>2}):(0,F.jsx)(Ag,{theme:r,$isRollable:n&&s,value:d,$small:e.styles?.bidList&&e.styles.bidList.length>2,readOnly:!n||s&&!l,onChange:!n||s&&!l?void 0:e=>{let n=e.target.value;g(e=>e.map(e=>e.id===t.id?{...e,attributes:{...e.attributes,[`${M}/${i}`]:n}}:e))},onBlur:!n||s&&!l?void 0:e=>{ut(t.id,i,e.target.value),s&&vt(c)},onClick:s?()=>{n&&(l||xt(c)||mt(t,i))}:void 0,onContextMenu:s?e=>{n&&(e.preventDefault(),_t(c,e.currentTarget))}:void 0,onTouchStart:s?e=>{n&&(l||yt(c,e.currentTarget))}:void 0,onTouchEnd:s?()=>{bt(c)}:void 0,onTouchCancel:s?()=>{bt(c)}:void 0,onKeyDown:e=>{if(n){if(s&&!l&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),mt(t,i);return}(l||!s)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})]},i)})})});case`list-column`:return(0,F.jsx)(Sg,{theme:r,children:(0,F.jsx)(Ng,{theme:r,disabled:!n,onClick:r=>{if(r.stopPropagation(),!n)return;let i=e.styles?.bidList?.[0];i&&de({unitId:t.id,bid:i})},title:`Open list reference`,children:(0,F.jsx)(od,{})})});case`checkbox-column`:return(0,F.jsx)(Sg,{theme:r,children:(0,F.jsx)(Mg,{children:e.styles?.bidList?.map(i=>{let a=!!t.attributes[`${M}/${i}`],o=e.styles?.inputType===`slider`,s=e=>{g(n=>n.map(n=>n.id===t.id?{...n,attributes:{...n.attributes,[`${M}/${i}`]:e}}:n)),m(l.map(n=>n.id===t.id?{...n,metadata:{...n.metadata,[`${M}/${i}`]:e}}:n)),c.scene.items.updateItems([t.id],t=>{t[0].metadata[`${M}/${i}`]=e})};return o?(0,F.jsx)(Fg,{type:`button`,theme:r,$active:a,disabled:!n,onClick:n?()=>{s(!a)}:void 0,children:(0,F.jsx)(Ig,{theme:r,$active:a})},i):(0,F.jsx)(Pg,{theme:r,type:`checkbox`,checked:a,disabled:!n,onChange:n?e=>{s(e.target.checked)}:void 0},i)})})});case`special-column`:let s=Kt(e.iconType);if(e.styles?.specialType===`elevation`){let e=ue[t.id];return(0,F.jsx)(Kh,{theme:r,unit:t,canInteract:n,elevationDraftValue:e,onElevationDraftChange:ot,onCommitElevationChange:ct})}else{let e=qe.getEffectsForUnit(t.id).length;return(0,F.jsx)(qh,{theme:r,canInteract:n,icon:s||(0,F.jsx)(Hd,{}),activeEffectsCount:e,onOpen:()=>qe.handleOpenEffectsModal(t.id)})}case`divider-column`:return(0,F.jsx)(Lg,{theme:r,children:(0,F.jsx)(Rg,{children:e.styles?.styleDesign===`zigzag`?(0,F.jsx)(Bg,{children:(0,F.jsx)(Vg,{theme:r})}):(0,F.jsx)(zg,{theme:r,$style:e.styles?.styleDesign})})});default:return(0,F.jsx)(Sg,{theme:r,children:`-`})}};if(o)return(0,F.jsx)(ag,{children:(0,F.jsx)(og,{theme:r,children:`Loading...`})});let en=ye||xe,tn=ye?`R: ${x}`:`Round: ${x}`;return(0,F.jsxs)(ag,{children:[(0,F.jsx)(sg,{children:(0,F.jsxs)(hg,{ref:ke,theme:r,$compact:ye,children:[(0,F.jsx)(gg,{theme:r,children:(0,F.jsx)(_g,{children:Vt.map(e=>{let t=e.description??`This has no description.`,n=Qt(e);return(0,F.jsx)(vg,{theme:r,$minWidth:n.minWidth,$fixedWidth:n.fixedWidth,onMouseEnter:e=>Yt(e,t),onMouseMove:e=>Yt(e,t),onMouseLeave:Xt,onFocus:e=>Yt(e,t),onBlur:Xt,children:Zt(e)},e.id)})})}),(0,F.jsx)(bg,{children:Ut.map(e=>(0,F.jsx)(xg,{$isCurrentTurn:e.id===y,theme:r,children:Vt.map(t=>(0,F.jsx)(N.Fragment,{children:$t(t,e)},t.id))},e.id))})]})}),(0,F.jsxs)(cg,{theme:r,$compactMode:ye,children:[(0,F.jsxs)(lg,{$compactMode:ye,children:[ye?(0,F.jsxs)(F.Fragment,{children:[He&&(0,F.jsx)(ug,{theme:r,$compact:!0,onClick:Et,children:(0,F.jsx)(ed,{})}),He&&(0,F.jsx)(ug,{theme:r,$compact:!0,onClick:Tt,children:(0,F.jsx)(td,{})})]}):Me?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ug,{theme:r,onClick:Ot,disabled:!y||C.has(y),children:`End Turn`}),(0,F.jsx)(mg,{theme:r,$compactMode:ye,children:tn}),(0,F.jsx)(ug,{theme:r,$compact:en,onClick:kt,disabled:C.size<R.length,children:en?(0,F.jsx)(td,{}):`Next`})]}):(0,F.jsxs)(F.Fragment,{children:[He&&(0,F.jsx)(ug,{theme:r,$compact:!0,onClick:Et,children:(0,F.jsx)(ed,{})}),(0,F.jsx)(mg,{theme:r,$compactMode:ye,children:tn}),He&&(0,F.jsx)(ug,{theme:r,$compact:!0,onClick:Tt,children:(0,F.jsx)(td,{})})]}),ye&&(0,F.jsx)(fg,{theme:r,onClick:()=>{Ke()},title:`Switch to Fullsize list`,children:(0,F.jsx)(Ad,{})})]}),!ye&&(0,F.jsx)(pg,{theme:r,$hasReset:He,onClick:()=>{Ke()},title:`Switch to Compact list`,children:(0,F.jsx)(jd,{})}),He&&!ye&&(0,F.jsx)(dg,{theme:r,onClick:()=>he(!0),disabled:_e,title:`Reset round/turn state`,children:(0,F.jsx)(Pd,{})})]}),we&&(0,F.jsx)(yg,{ref:Ee,theme:r,$left:we.left,$y:we.y,$placement:we.placement,$arrowX:we.arrowX,role:`tooltip`,children:we.text}),(0,F.jsxs)(pm,{isOpen:!!T,title:It?`Unit: ${It.name}`:`Unit`,onClose:()=>{te||ie||oe||(E(null),D(null))},closeOnOverlayClick:!te&&!ie&&!oe,maxWidth:`520px`,children:[(0,F.jsx)(Wg,{theme:r,children:`Select a player to become the owner.`}),(0,F.jsxs)(Hg,{children:[Je.map(e=>(0,F.jsxs)(Ug,{theme:r,$isCurrent:B?.createdUserId===e.id,onClick:()=>Pt(e.id),disabled:te||ie||oe,children:[e.name,B?.createdUserId===e.id?` (current)`:``]},e.id)),(0,F.jsx)(Ug,{theme:r,onClick:()=>{z()},disabled:te||ie||oe,children:oe?`Removing...`:`Remove Unit from List`})]}),(0,F.jsx)(Kg,{theme:r}),(0,F.jsxs)(qg,{theme:r,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(Jg,{theme:r,children:`Boss Mode`}),(0,F.jsx)(Yg,{theme:r,children:`Shows a large encounter HP bar in scene (max 2 bosses).`})]}),(0,F.jsx)(Xg,{children:(0,F.jsx)(Zg,{type:`button`,theme:r,$active:Lt,disabled:te||ie||oe,"aria-label":`Toggle boss mode`,"aria-pressed":Lt,onClick:()=>{Ft()}})})]}),ee&&(0,F.jsx)(Gg,{theme:r,children:ee})]}),(0,F.jsx)(Hh,{manager:qe}),(0,F.jsxs)(pm,{isOpen:me,title:`Reset Encounter`,onClose:()=>{_e||he(!1)},closeOnOverlayClick:!_e,maxWidth:`460px`,children:[(0,F.jsx)(Wg,{theme:r,children:`Choose how you want to reset initiative state.`}),(0,F.jsxs)(Hg,{children:[(0,F.jsx)(Ug,{theme:r,onClick:()=>{At(`round`)},disabled:_e,children:_e?`Resetting...`:`Reset Round`}),(0,F.jsx)(Ug,{theme:r,onClick:()=>{At(`reset-initiative`)},disabled:_e,children:_e?`Resetting...`:`Reset Round & Initiative`}),(0,F.jsx)(Ug,{theme:r,onClick:()=>{At(`clear-list`)},disabled:_e,children:_e?`Resetting...`:`Reset Round & Clear List`})]})]}),(0,F.jsx)(pm,{isOpen:!!j,title:Rt?`${zt?.attr_name||`List`} for ${Rt.name}`:`List Reference`,onClose:()=>{de(null)},maxWidth:`620px`,children:(0,F.jsxs)(Qg,{children:[(0,F.jsx)($g,{theme:r}),V.length===0?(0,F.jsx)(c_,{theme:r,children:`No entries.`}):(0,F.jsx)(e_,{children:V.map(e=>(0,F.jsxs)(t_,{theme:r,children:[(0,F.jsxs)(n_,{children:[Bt?(0,F.jsx)(r_,{type:`checkbox`,checked:!!e.inUse,readOnly:!0,tabIndex:-1}):null,(0,F.jsx)(i_,{theme:r,children:e.name||`(Unnamed)`})]}),e.description?(0,F.jsx)(a_,{theme:r,children:e.description}):null,(()=>{let t=Gt(e.description||``);return t.length===0?null:(0,F.jsx)(o_,{children:t.map((t,n)=>(0,F.jsx)(s_,{type:`button`,theme:r,onClick:()=>{let n=Rt?.createdUserId?u.find(e=>e.id===Rt.createdUserId):null;I({notation:t,actionName:e.name||zt?.attr_name||`List Roll`,tokenName:Rt?.name||`Unknown`,senderId:Rt?.createdUserId||d?.id||`unknown`,senderColor:n?.color||d?.color||`#ffffff`})},title:t,children:t},`${e.id}-inline-notation-${n}`))})})()]},e.id))})]})})]})},p_=`${t.EXTENSIONID}-partyhud`,m_=async()=>{await c.modal.open({id:p_,url:`/pages/forgeparty.html`,fullScreen:!0,hideBackdrop:!0,hidePaper:!0,disablePointerEvents:!0})},h_=async()=>{await c.modal.close(p_)};var g_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,__=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>f(e.theme.BACKGROUND,.35)};
`,v_=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`,y_=T(v_)`
  justify-content: center;
`,b_=T.span`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: ${e=>f(e.theme.PRIMARY,.9)};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`,x_=T.button`
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
`,S_=T.select`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px;
  min-width: 160px;
`,C_=T.p`
  margin: 0;
  font-size: 12px;
  color: ${e=>f(e.theme.PRIMARY,.8)};
`,w_=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${e=>e.$disabled?.55:1};
`,T_=T.span`
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
`,E_=T.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>f(e.theme.BACKGROUND,.35)};
`,D_=T.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
`,O_=T.img`
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
`,k_=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,A_=T.span`
  color: ${e=>e.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,j_=T.input`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
`,M_=T.p`
  color: ${e=>e.theme.PRIMARY};
  margin: 0;
`,N_=e=>{switch(e){case`bottom`:return`left`;case`left`:return`top`;case`top`:return`right`;case`right`:default:return`bottom`}},P_=e=>e===`bottom`||e===`left`||e===`top`||e===`right`;const F_=()=>{let t=(0,N.useRef)(!1),{theme:n}=We(),{attributes:r}=mm(),i=P(e=>e.items),a=P(e=>e.sceneMetadata);P(e=>e.roomMetadata);let o=P(e=>e.playerData),s=a,l=String(o?.role||``).toUpperCase()===`GM`,u=o?.id,d=ne(O.PARTY_HUD_OPEN,u),f=ne(O.PARTY_HUD_ORIENTATION,u),m=(s[d]??s[O.PARTY_HUD_OPEN])===!0,h=s[f]??s[O.PARTY_HUD_ORIENTATION],g=P_(h)?h:`bottom`,_=s[O.PARTY_HUD_ATTR_ONE]||``,v=s[O.PARTY_HUD_ATTR_TWO]||``,y=s[O.PARTY_HUD_SHOW_HP_BARS]===!0,b=s[O.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!y,x=i.filter(e=>e.metadata[p.IN_PARTY]===!0),S=(0,N.useMemo)(()=>r.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[r]),C=async(e,t)=>{await c.scene.setMetadata({[e]:t})},w=async()=>{let e=!m;if(await C(d,e),!e){await h_(),t.current=!1;return}await m_(),t.current=!0},T=async()=>{await C(f,N_(g))},E=async(e,t)=>{let n=t.trim();await c.scene.items.updateItems([e],e=>{let t={...e[0].metadata||{}};n?t[p.PORTRAIT_URL]=n:delete t[p.PORTRAIT_URL],e[0].metadata=t})};return(0,F.jsx)(Zu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,F.jsxs)(nm,{theme:n,children:[(0,F.jsx)(rm,{theme:n,children:`Party`}),(0,F.jsxs)(__,{theme:n,children:[(0,F.jsxs)(v_,{children:[(0,F.jsxs)(x_,{theme:n,onClick:()=>void T(),children:[`Display: `,g.toUpperCase()]}),(0,F.jsx)(x_,{theme:n,onClick:()=>void w(),children:m?`Close Party HUD`:`Open Party HUD`})]}),l&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(y_,{children:[(0,F.jsx)(b_,{theme:n,children:`Show in HUD:`}),(0,F.jsxs)(w_,{$disabled:!l,children:[(0,F.jsx)(T_,{theme:n,children:`Show HP Bars`}),(0,F.jsx)(X,{label:`Party HUD Show HP Bars`,isOn:y,onChange:e=>{l&&(C(O.PARTY_HUD_SHOW_HP_BARS,e),e&&C(O.PARTY_HUD_SHOW_HP_NUMBERS,!1))}})]}),(0,F.jsxs)(w_,{$disabled:!l,children:[(0,F.jsx)(T_,{theme:n,children:`Show HP Numbers`}),(0,F.jsx)(X,{label:`Party HUD Show HP Numbers`,isOn:b,onChange:e=>{l&&(C(O.PARTY_HUD_SHOW_HP_NUMBERS,e),e&&C(O.PARTY_HUD_SHOW_HP_BARS,!1))}})]}),(0,F.jsxs)(S_,{theme:n,disabled:!l,value:_,onChange:e=>{let t=e.target.value;C(O.PARTY_HUD_ATTR_ONE,t),t&&t===v&&C(O.PARTY_HUD_ATTR_TWO,``)},children:[(0,F.jsx)(`option`,{value:``,children:`Extra Slot 1 (None)`}),S.map(e=>(0,F.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,F.jsxs)(S_,{theme:n,disabled:!l,value:v,onChange:e=>{let t=e.target.value;C(O.PARTY_HUD_ATTR_TWO,t),t&&t===_&&C(O.PARTY_HUD_ATTR_ONE,``)},children:[(0,F.jsx)(`option`,{value:``,children:`Extra Slot 2 (None)`}),S.map(e=>(0,F.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]})]}),(0,F.jsx)(C_,{theme:n,children:(0,F.jsxs)(F.Fragment,{children:[`Configure Party HUD and portraits.`,(0,F.jsx)(`br`,{}),`LIST attributes are excluded.`]})})]})]}),x.length===0?(0,F.jsx)(M_,{theme:n,children:`No one is in the Party.  Add a unit using the ContextMenu on the token.`}):(0,F.jsx)(g_,{theme:n,children:x.map(t=>{let r=t.metadata?.[p.PORTRAIT_URL]||``,i=e(t)?t.image.url:void 0,a=t.metadata[p.UNIT_NAME]||t.name||`Unknown`,s=t.createdUserId===o?.id,c=l||s,u=i||`/logo.png`,d=!!r;return(0,F.jsxs)(E_,{theme:n,children:[(0,F.jsxs)(D_,{children:[(0,F.jsx)(O_,{theme:n,src:u,alt:a,$full:!d}),d&&(0,F.jsx)(O_,{theme:n,src:d?r:``,alt:`${a} override`,$overlay:!0})]}),(0,F.jsxs)(k_,{children:[(0,F.jsx)(A_,{theme:n,title:a,children:a}),c&&(0,F.jsx)(j_,{theme:n,defaultValue:r,placeholder:`Portrait URL override (optional)`,onBlur:e=>{E(t.id,e.target.value)}})]})]},t.id)})})]})})};var I_=`${M}/hp-bar-effect`,L_=`${M}/hp-bar-owner`,R_=`${M}/hp-number-text`,z_=`${M}/hp-number-owner`,B_=e=>`HPB${e.slice(3)}`,V_=e=>`HPN${e.slice(3)}`,H_=(e,t,n)=>Math.max(t,Math.min(n,e)),U_=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},W_=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||Oe.CURRENT_HP,maxHpBid:n?.attr_bid||Oe.MAX_HP}},G_=(e,t)=>{let n=W_(t),r=e[O.HP_CURRENT_BID],i=e[O.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},K_=(e,t,n)=>{let r=e.metadata?.[`${M}/${t}`],i=e.metadata?.[`${M}/${n}`],a=U_(r),o=U_(i);return o===null||o<=0||a===null?null:H_(a/o*100,0,100)},q_=(e,t,n)=>{let r=e.metadata?.[`${M}/${t}`],i=e.metadata?.[`${M}/${n}`],a=U_(r),o=U_(i);return a===null?null:{currentHp:Math.trunc(a),maxHp:o===null?null:Math.trunc(o)}},J_=e=>{let t=String(e||`bottom`).toLowerCase();return t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`},Y_=e=>{switch(J_(e)){case`top`:return 0;case`bottom`:return 1;case`left`:return 2;case`right`:return 3;default:return 1}},X_=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o,width:r,height:i}},Z_=(e,t,n)=>{let r=X_(e,t),i=r.minX+r.width*.5,a=r.minY+r.height*.5,o;switch(n){case`top`:o={x:i,y:r.minY+r.height*.18};break;case`bottom`:o={x:i,y:r.minY+r.height*.82};break;case`left`:o={x:r.minX+r.width*.18,y:a};break;case`right`:o={x:r.minX+r.width*.82,y:a};break}let s=r.width*.25,c=r.height*.18;return{x:o.x-s,y:o.y-c}};const Q_=()=>{let t=P(e=>e.cacheReady),i=P(e=>e.sceneReady),a=P(e=>e.items),o=P(e=>e.localItems),s=P(e=>e.gridDpi),l=P(e=>e.roomMetadata),u=P(e=>e.sceneMetadata),d=P(e=>e.systemData);return(0,N.useEffect)(()=>{if(!t||!i)return;let l=!1;return(async()=>{let t=u,i=t[O.SHOW_HP_BARS]??!1,f=t[O.SHOW_HP_NUMBERS]??!1,m=i,h=!i&&f,g=J_(t[O.HP_BAR_ORIENTATION]),_=Y_(t[O.HP_BAR_ORIENTATION]),{currentHpBid:v,maxHpBid:x}=G_(t,d?.attributes||[]),S=o.filter(e=>y(e)&&e.metadata?.[I_]===!0),C=o.filter(e=>b(e)&&e.metadata?.[R_]===!0);if(!m&&S.length>0)try{await c.scene.local.deleteItems(S.map(e=>e.id))}catch(e){k.error(`Failed to remove HP bar effects`,e)}if(!h&&C.length>0)try{await c.scene.local.deleteItems(C.map(e=>e.id))}catch(e){k.error(`Failed to remove HP number texts`,e)}if(!m&&!h)return;let w=a.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),T=new Map,E=new Map;for(let t of w){if(m){let e=K_(t,v,x);e!==null&&T.set(B_(t.id),{unitId:t.id,hpPercent:e})}if(h&&e(t)){let e=q_(t,v,x);if(e){let n=e.maxHp===null?`${e.currentHp}`:`${e.currentHp}/${e.maxHp}`;E.set(V_(t.id),{unitId:t.id,text:n,position:Z_(t,s,g)})}}}if(m){let e=new Map(S.map(e=>[e.id,e])),t=Array.from(T.entries()).filter(([t])=>!e.has(t)),n=S.filter(e=>!T.has(e.id)),i=S.filter(e=>{let t=T.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`orientation`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return e.attachedTo!==t.unitId||!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-_)>.001});if(l)return;if(n.length>0)try{await c.scene.local.deleteItems(n.map(e=>e.id))}catch(e){k.error(`Failed to remove stale HP bar effects`,e)}if(t.length>0){let e=t.map(([e,t])=>r().id(e).name(`HP Bar Effect`).effectType(`ATTACHMENT`).attachedTo(t.unitId).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).uniforms([{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:_}]).sksl(`
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
`).metadata({[I_]:!0,[L_]:t.unitId}).build());try{await c.scene.local.addItems(e)}catch(e){k.error(`Failed to add HP bar effects`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await c.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=T.get(e.id);if(!t)return;e.attachedTo=t.unitId;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:_}],e.metadata={...e.metadata,[I_]:!0,[L_]:t.unitId}})})}catch(e){k.error(`Failed to update HP bar effects`,e)}}}if(h){let e=new Map(C.map(e=>[e.id,e])),t=Array.from(E.entries()).filter(([t])=>!e.has(t)),r=C.filter(e=>!E.has(e.id)),i=C.filter(e=>{let t=E.get(e.id);if(!t)return!1;let n=e.text?.plainText,r=Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01;return e.attachedTo!==t.unitId||n!==t.text||r});if(l)return;if(r.length>0)try{await c.scene.local.deleteItems(r.map(e=>e.id))}catch(e){k.error(`Failed to remove stale HP number texts`,e)}if(t.length>0){let e=t.map(([e,t])=>{let r=w.find(e=>e.id===t.unitId);return n().id(e).name(`HP Number Text`).plainText(t.text).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(28).fontFamily(`Segoe UI`).textAlign(`CENTER`).position(t.position).metadata({[R_]:!0,[z_]:t.unitId}).attachedTo(t.unitId).visible(r?.visible??!0).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build()});try{await c.scene.local.addItems(e)}catch(e){k.error(`Failed to add HP number texts`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await c.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=E.get(e.id);if(!t)return;e.attachedTo=t.unitId,e.position=t.position;let n=e;n.text&&(n.text.plainText=t.text),e.metadata={...e.metadata,[R_]:!0,[z_]:t.unitId}})})}catch(e){k.error(`Failed to update HP number texts`,e)}}}})(),()=>{l=!0}},[t,i,a,o,s,l,u,d]),null};var $_=`${M}/death-effect-token`,ev=`${M}/death-effect-owner`,tv=e=>`DTH${e.slice(3)}`,nv=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},rv=e=>({currentHpBid:e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`})?.attr_bid||Oe.CURRENT_HP}),iv=(e,t)=>{let n=rv(t),r=e[O.HP_CURRENT_BID],i=new Set(t.map(e=>e.attr_bid));return r&&i.has(r)?r:n.currentHpBid},av=(e,t)=>{let n=e.metadata?.[`${M}/${t}`];return nv(n)};const ov=()=>{let t=P(e=>e.cacheReady),n=P(e=>e.sceneReady),i=P(e=>e.items),a=P(e=>e.localItems),o=P(e=>e.roomMetadata),s=P(e=>e.sceneMetadata),l=P(e=>e.systemData);return(0,N.useEffect)(()=>{if(!t||!n)return;let o=!1;return(async()=>{let t=s,n=t[O.SHOW_DEATH_EFFECT]??!1,u=iv(t,l?.attributes||[]),d=a.filter(e=>y(e)&&e.metadata?.[$_]===!0);if(!n){if(d.length>0)try{await c.scene.local.deleteItems(d.map(e=>e.id))}catch(e){k.error(`Failed to remove death token effects`,e)}return}let f=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),m=new Map;f.forEach(e=>{av(e,u)===0&&m.set(tv(e.id),e.id)});let h=new Map(d.map(e=>[e.id,e])),g=Array.from(m.entries()).filter(([e])=>!h.has(e)),_=d.filter(e=>!m.has(e.id)),v=d.filter(e=>{let t=m.get(e.id);if(!t)return!1;let n=e;return e.attachedTo!==t||n.metadata?.[ev]!==t});if(!o){if(_.length>0)try{await c.scene.local.deleteItems(_.map(e=>e.id))}catch(e){k.error(`Failed to remove stale death token effects`,e)}if(g.length>0){let e=g.map(([e,t])=>r().id(e).name(`Death Token Effect`).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(`
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
`).metadata({[$_]:!0,[ev]:t}).build());try{await c.scene.local.addItems(e)}catch(e){k.error(`Failed to add death token effects`,e)}}if(v.length>0)try{await c.scene.local.updateItems(v.map(e=>e.id),e=>{e.forEach(e=>{let t=m.get(e.id);t&&(e.attachedTo=t,e.metadata={...e.metadata,[$_]:!0,[ev]:t})})})}catch(e){k.error(`Failed to update death token effects`,e)}}})(),()=>{o=!0}},[t,n,i,a,o,s,l]),null};var sv=`${M}/buff-effect-token`,cv=`${M}/buff-effect-owner`,lv=`${M}/debuff-effect-token`,uv=`${M}/debuff-effect-owner`,dv=`${M}/effect-preset`,fv=e=>`EFB${e.slice(3)}`,pv=e=>`EFD${e.slice(3)}`,mv=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const hv=()=>{let t=P(e=>e.cacheReady),n=P(e=>e.sceneReady),i=P(e=>e.items),a=P(e=>e.localItems),o=P(e=>e.roomMetadata),s=P(e=>e.sceneMetadata);return(0,N.useEffect)(()=>{if(!t||!n)return;let o=!1;return(async()=>{let t=s,n=t[O.BUFF_VISUAL_PRESET],l=t[O.DEBUFF_VISUAL_PRESET],u=Im(n)?n:Mm,d=Lm(l)?l:Nm,f=Rm(u),m=zm(d),h=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),g=new Set(h.map(e=>e.id)),_=new Map,v=(e,t)=>{let n=_.get(e)||{hasBuff:!1,hasDebuff:!1};t===`buff`?n.hasBuff=!0:n.hasDebuff=!0,_.set(e,n)};i.forEach(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return;let t=mv(e.metadata?.[yh]);t.length!==0&&t.forEach(t=>{t.effectType!==`neutral`&&(t.targets.length>0?t.targets:[e.id]).forEach(e=>{g.has(e)&&(t.effectType===`buff`||t.effectType===`debuff`)&&v(e,t.effectType)})})});let b=new Map,x=new Map;h.forEach(e=>{let t=_.get(e.id);t?.hasBuff&&b.set(fv(e.id),e.id),t?.hasDebuff&&x.set(pv(e.id),e.id)});let S=a.filter(e=>y(e)&&e.metadata?.[sv]===!0),C=a.filter(e=>y(e)&&e.metadata?.[lv]===!0),w=async e=>{let{existing:t,desiredByOverlayId:n,preset:i,shader:a,name:s,flagKey:l,ownerKey:u}=e,d=new Map(t.map(e=>[e.id,e])),f=Array.from(n.entries()).filter(([e])=>!d.has(e)),p=t.filter(e=>!n.has(e.id)),m=t.filter(e=>{let t=n.get(e.id);if(!t)return!1;let r=e.metadata?.[dv];return e.attachedTo!==t||r!==i});if(!o){if(p.length>0)try{await c.scene.local.deleteItems(p.map(e=>e.id))}catch(e){k.error(`Failed to remove stale ${s.toLowerCase()} overlays`,e)}if(f.length>0){let e=f.map(([e,t])=>r().id(e).name(s).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(a).metadata({[l]:!0,[u]:t,[dv]:i}).build());try{await c.scene.local.addItems(e)}catch(e){k.error(`Failed to add ${s.toLowerCase()} overlays`,e)}}if(m.length>0)try{await c.scene.local.updateItems(m.map(e=>e.id),e=>{e.forEach(e=>{let t=n.get(e.id);if(!t)return;e.attachedTo=t;let r=e;r.sksl=a,e.metadata={...e.metadata,[l]:!0,[u]:t,[dv]:i}})})}catch(e){k.error(`Failed to update ${s.toLowerCase()} overlays`,e)}}};await w({existing:S,desiredByOverlayId:b,preset:u,shader:f,name:`Buff Token Effect`,flagKey:sv,ownerKey:cv}),await w({existing:C,desiredByOverlayId:x,preset:d,shader:m,name:`Debuff Token Effect`,flagKey:lv,ownerKey:uv})})(),()=>{o=!0}},[t,n,i,a,o,s]),null};var gv=`${M}/boss-hp-effect`,_v=`${M}/boss-hp-owner`,vv=`${M}/boss-hp-slot`,yv=e=>`BOSSHP${e}`,bv=(e,t,n)=>Math.max(t,Math.min(n,e)),xv=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},Sv=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||Oe.CURRENT_HP,maxHpBid:n?.attr_bid||Oe.MAX_HP}},Cv=(e,t)=>{let n=Sv(t),r=e[O.HP_CURRENT_BID],i=e[O.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},wv=(e,t,n)=>{let r=e.metadata?.[`${M}/${t}`],i=e.metadata?.[`${M}/${n}`],a=xv(r),o=xv(i);return o===null||o<=0||a===null?null:bv(a/o*100,0,100)};const Tv=()=>{let t=P(e=>e.cacheReady),n=P(e=>e.sceneReady),i=P(e=>e.items),a=P(e=>e.localItems),o=P(e=>e.roomMetadata),s=P(e=>e.sceneMetadata),l=P(e=>e.systemData);return(0,N.useEffect)(()=>{if(!t||!n)return;let o=!1;return(async()=>{let{currentHpBid:t,maxHpBid:n}=Cv(s,l?.attributes||[]),u=a.filter(e=>y(e)&&e.metadata?.[gv]===!0),d=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0&&t.metadata?.[p.BOSS_MODE]===!0).sort((e,t)=>{let n=Number(e.metadata?.[p.INITIATIVE]??0);return Number(t.metadata?.[p.INITIATIVE]??0)-n}).slice(0,2).map((e,r)=>{let i=wv(e,t,n);return i===null?null:{id:yv(r),unitId:e.id,slot:r,hpPercent:i}}).filter(e=>e!==null),f=new Map(d.map(e=>[e.id,e])),m=new Map(u.map(e=>[e.id,e])),h=u.filter(e=>!f.has(e.id)),g=d.filter(e=>!m.has(e.id)),_=u.filter(e=>{let t=f.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`slot`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-t.slot)>.001||e.metadata?.[_v]!==t.unitId});if(!o){if(h.length>0)try{await c.scene.local.deleteItems(h.map(e=>e.id))}catch(e){k.error(`Failed to remove stale boss HP viewport effects`,e)}if(g.length>0){let e=g.map(e=>r().id(e.id).name(`Boss HP Bar`).effectType(`VIEWPORT`).locked(!0).disableHit(!0).uniforms([{name:`hpPercent`,value:e.hpPercent},{name:`slot`,value:e.slot}]).sksl(`
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
`).metadata({[gv]:!0,[_v]:e.unitId,[vv]:e.slot}).build());try{await c.scene.local.addItems(e)}catch(e){k.error(`Failed to add boss HP viewport effects`,e)}}if(_.length>0)try{await c.scene.local.updateItems(_.map(e=>e.id),e=>{e.forEach(e=>{let t=f.get(e.id);if(!t)return;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`slot`,value:t.slot}],e.metadata={...e.metadata,[gv]:!0,[_v]:t.unitId,[vv]:t.slot}})})}catch(e){k.error(`Failed to update boss HP viewport effects`,e)}}})(),()=>{o=!0}},[t,n,i,a,o,s,l]),null};var Ev=`${M}/current-turn-effect`;const Dv=()=>{let e=P(e=>e.cacheReady),t=P(e=>e.sceneReady),n=P(e=>e.items),i=P(e=>e.roomMetadata),a=P(e=>e.sceneMetadata);return(0,N.useEffect)(()=>{if(!e||!t)return;let i=!1;return(async()=>{let e=a[O.SHOW_TURN_EFFECT]===!0,t=a[O.CURRENT_TURN];if(!e||!t){try{await c.scene.local.deleteItems([Ev])}catch{}return}if(!n.find(e=>e.id===t)){try{await c.scene.local.deleteItems([Ev])}catch{}return}if(!i){try{let e=!1;if(await c.scene.local.updateItems([Ev],n=>{let r=n[0];r&&(r.attachedTo=t,e=!0)}),e)return}catch{}if(!i)try{let e=r().id(Ev).name(`Current Turn Effect`).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).sksl(`
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

`).build();await c.scene.local.addItems([e])}catch(e){k.error(`Failed to sync current turn effect`,e)}}})(),()=>{i=!0}},[e,t,n,i,a]),null},Ov=()=>{let[e,t]=(0,N.useState)(!1),{updateThemeFromSystem:n}=We(),r=P(e=>e.roomMetadata),i=P(e=>e.cacheReady),a=P(e=>e.systemData),o=P(e=>e.setSystemData),s=()=>({theme:{primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,snapshotPublicId:null});return(0,N.useEffect)(()=>{!i&&e&&(t(!1),o(null))},[i,e,o]),(0,N.useEffect)(()=>{!i||!a||n(a.theme.primary,a.theme.offset,a.theme.background,a.theme.border,a.theme.background_url)},[i,a,n]),(0,N.useEffect)(()=>{if(e)return;let n=!0,a=async()=>{if(i)try{k.log(`Starting app initialization...`),await c(),n&&(t(!0),k.log(`App initialization complete`))}catch(e){k.error(`Error during app initialization:`,e),n&&t(!0)}},c=async()=>{let e=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Snapshot ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Snapshot ${t} is not a JSON array`);return n}throw Error(`Snapshot ${t} has invalid type`)},t=async t=>{let{data:n,error:r}=await C.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:t});if(r)return k.error(`Failed to load room snapshot:`,r),!1;let i=Array.isArray(n)?n[0]:n;if(!i||typeof i.snapshot_public_id!=`string`)return k.warn(`Room snapshot reference was set, but no snapshot record was returned`),!1;let a=e(i.card_layout,`card_layout`),s=e(i.list_layout,`list_layout`),c=e(i.attributes,`attributes`);return o({theme:{primary:i.theme_primary,offset:i.theme_offset,background:i.theme_background,border:i.theme_border,background_url:i.background_url},cardLayout:a,listLayout:s,attributes:c,systemName:i.system_name,importDate:i.imported_at,snapshotPublicId:i.snapshot_public_id}),k.log(`System data hydrated from room snapshot`,{snapshotPublicId:i.snapshot_public_id,systemName:i.system_name}),!0};try{let e=r[Hm.SNAPSHOT_PUBLIC_ID];if(typeof e==`string`&&e.trim().length>0&&await t(e))return;k.log(`Room snapshot reference missing or unavailable, initializing defaults`),await l()}catch(e){k.error(`Error loading system data:`,e),await l()}},l=async()=>{o(s()),k.log(`Default system initialized`)};return a(),()=>{n=!1}},[i,e,r,o,n]),(0,N.useEffect)(()=>{if(!i||!e)return;let t=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},n=r[Hm.SNAPSHOT_PUBLIC_ID],c=typeof n==`string`&&n.trim().length>0?n.trim():null;if(c===(a?.snapshotPublicId??null))return;let l=!1;return(async()=>{if(!c){l||(o(s()),k.log(`Room snapshot reference cleared, reverted runtime system to defaults`));return}let{data:e,error:n}=await C.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:c});if(n){k.error(`Failed to refresh system from room snapshot change:`,n);return}let r=Array.isArray(e)?e[0]:e;if(!r||typeof r.snapshot_public_id!=`string`){k.warn(`Room snapshot reference changed, but snapshot record was not found`);return}let i=t(r.card_layout),a=t(r.list_layout),u=t(r.attributes);if(!i||!a||!u){k.warn(`Room snapshot refresh returned invalid payload arrays`);return}l||(o({theme:{primary:r.theme_primary,offset:r.theme_offset,background:r.theme_background,border:r.theme_border,background_url:r.background_url},cardLayout:i,listLayout:a,attributes:u,systemName:r.system_name,importDate:r.imported_at,snapshotPublicId:r.snapshot_public_id}),k.log(`Runtime system refreshed from room snapshot change`,{snapshotPublicId:r.snapshot_public_id,systemName:r.system_name}))})(),()=>{l=!0}},[i,e,r,a,o]),{isInitialized:e}};var kv=m`
  ${{"*, ::before, ::after":{boxSizing:`border-box`,borderWidth:`0`,borderStyle:`solid`,borderColor:`#e2e8f0`,"--tw-border-spacing-x":`0`,"--tw-border-spacing-y":`0`,"--tw-translate-x":`0`,"--tw-translate-y":`0`,"--tw-rotate":`0`,"--tw-skew-x":`0`,"--tw-skew-y":`0`,"--tw-scale-x":`1`,"--tw-scale-y":`1`,"--tw-pan-x":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pan-y":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pinch-zoom":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-scroll-snap-strictness":`proximity`,"--tw-gradient-from-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-via-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-to-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ordinal":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-slashed-zero":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-figure":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-spacing":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-fraction":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-shadow":`0 0 #0000`,"--tw-ring-shadow":`0 0 #0000`,"--tw-shadow":`0 0 #0000`,"--tw-shadow-colored":`0 0 #0000`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`0px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`rgb(66 153 225 / 0.5)`,"--tw-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-drop-shadow":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-opacity":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-size":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-layout":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-paint":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-style":`var(--tw-empty,/*!*/ /*!*/)`},"::before, ::after":{"--tw-content":`''`},"html, :host":{lineHeight:`1.5`,WebkitTextSizeAdjust:`100%`,MozTabSize:`4`,tabSize:`4`,fontFamily:`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,fontFeatureSettings:` normal`,fontVariationSettings:` normal`,WebkitTapHighlightColor:`transparent`},body:{margin:`0`,lineHeight:`inherit`},hr:{height:`0`,color:`inherit`,borderTopWidth:`1px`},"abbr:where([title])":{textDecoration:`underline dotted`},"h1, h2, h3, h4, h5, h6":{fontSize:`inherit`,fontWeight:`inherit`},a:{color:`inherit`,textDecoration:`inherit`},"b, strong":{fontWeight:`bolder`},"code, kbd, samp, pre":{fontFamily:`Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,fontFeatureSettings:` normal`,fontVariationSettings:` normal`,fontSize:`1em`},small:{fontSize:`80%`},"sub, sup":{fontSize:`75%`,lineHeight:`0`,position:`relative`,verticalAlign:`baseline`},sub:{bottom:`-0.25em`},sup:{top:`-0.5em`},table:{textIndent:`0`,borderColor:`inherit`,borderCollapse:`collapse`},"button, input, optgroup, select, textarea":{fontFamily:`inherit`,fontFeatureSettings:`inherit`,fontVariationSettings:`inherit`,fontSize:`100%`,fontWeight:`inherit`,lineHeight:`inherit`,letterSpacing:`inherit`,color:`inherit`,margin:`0`,padding:`0`},"button, select":{textTransform:`none`},"button, input:where([type='button']), input:where([type='reset']), input:where([type='submit'])":{WebkitAppearance:`button`,backgroundColor:`transparent`,backgroundImage:`none`},":-moz-focusring":{outline:`auto`},":-moz-ui-invalid":{boxShadow:`none`},progress:{verticalAlign:`baseline`},"::-webkit-inner-spin-button, ::-webkit-outer-spin-button":{height:`auto`},"[type='search']":{WebkitAppearance:`textfield`,outlineOffset:`-2px`},"::-webkit-search-decoration":{WebkitAppearance:`none`},"::-webkit-file-upload-button":{WebkitAppearance:`button`,font:`inherit`},summary:{display:`list-item`},"blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre":{margin:`0`},fieldset:{margin:`0`,padding:`0`},legend:{padding:`0`},"ol, ul, menu":{listStyle:`none`,margin:`0`,padding:`0`},dialog:{padding:`0`},textarea:{resize:`vertical`},"input::placeholder, textarea::placeholder":{opacity:`1`,color:`#cbd5e0`},'button, [role="button"]':{cursor:`pointer`},":disabled":{cursor:`default`},"img, svg, video, canvas, audio, iframe, embed, object":{display:`block`,verticalAlign:`middle`},"img, video":{maxWidth:`100%`,height:`auto`},'[hidden]:where(:not([hidden="until-found"]))':{display:`none`},"::backdrop":{"--tw-border-spacing-x":`0`,"--tw-border-spacing-y":`0`,"--tw-translate-x":`0`,"--tw-translate-y":`0`,"--tw-rotate":`0`,"--tw-skew-x":`0`,"--tw-skew-y":`0`,"--tw-scale-x":`1`,"--tw-scale-y":`1`,"--tw-pan-x":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pan-y":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pinch-zoom":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-scroll-snap-strictness":`proximity`,"--tw-gradient-from-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-via-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-to-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ordinal":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-slashed-zero":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-figure":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-spacing":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-fraction":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-shadow":`0 0 #0000`,"--tw-ring-shadow":`0 0 #0000`,"--tw-shadow":`0 0 #0000`,"--tw-shadow-colored":`0 0 #0000`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`0px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`rgb(66 153 225 / 0.5)`,"--tw-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-drop-shadow":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-opacity":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-size":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-layout":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-paint":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-style":`var(--tw-empty,/*!*/ /*!*/)`},"input:where([type='text']),input:where(:not([type])),input:where([type='email']),input:where([type='url']),input:where([type='password']),input:where([type='number']),input:where([type='date']),input:where([type='datetime-local']),input:where([type='month']),input:where([type='search']),input:where([type='tel']),input:where([type='time']),input:where([type='week']),select:where([multiple]),textarea,select":{appearance:`none`,backgroundColor:`#fff`,borderColor:`#a0aec0`,borderWidth:`1px`,borderRadius:`0px`,paddingTop:`0.5rem`,paddingRight:`0.75rem`,paddingBottom:`0.5rem`,paddingLeft:`0.75rem`,fontSize:`1rem`,lineHeight:`1.5rem`,"--tw-shadow":`0 0 #0000`},"input:where([type='text']):focus, input:where(:not([type])):focus, input:where([type='email']):focus, input:where([type='url']):focus, input:where([type='password']):focus, input:where([type='number']):focus, input:where([type='date']):focus, input:where([type='datetime-local']):focus, input:where([type='month']):focus, input:where([type='search']):focus, input:where([type='tel']):focus, input:where([type='time']):focus, input:where([type='week']):focus, select:where([multiple]):focus, textarea:focus, select:focus":{outline:`2px solid transparent`,outlineOffset:`2px`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`0px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`#3182ce`,"--tw-ring-offset-shadow":`var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,"--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:`var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,borderColor:`#3182ce`},"input::placeholder,textarea::placeholder":{color:`#a0aec0`,opacity:`1`},"::-webkit-datetime-edit-fields-wrapper":{padding:`0`},"::-webkit-date-and-time-value":{minHeight:`1.5em`,textAlign:`inherit`},"::-webkit-datetime-edit":{display:`inline-flex`},"::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field":{paddingTop:`0`,paddingBottom:`0`},select:{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a0aec0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,backgroundPosition:`right 0.5rem center`,backgroundRepeat:`no-repeat`,backgroundSize:`1.5em 1.5em`,paddingRight:`2.5rem`,printColorAdjust:`exact`},'select:where([multiple]),select:where([size]:not([size="1"]))':{backgroundImage:`initial`,backgroundPosition:`initial`,backgroundRepeat:`unset`,backgroundSize:`initial`,paddingRight:`0.75rem`,printColorAdjust:`unset`},"input:where([type='checkbox']),input:where([type='radio'])":{appearance:`none`,padding:`0`,printColorAdjust:`exact`,display:`inline-block`,verticalAlign:`middle`,backgroundOrigin:`border-box`,userSelect:`none`,flexShrink:`0`,height:`1rem`,width:`1rem`,color:`#3182ce`,backgroundColor:`#fff`,borderColor:`#a0aec0`,borderWidth:`1px`,"--tw-shadow":`0 0 #0000`},"input:where([type='checkbox'])":{borderRadius:`0px`},"input:where([type='radio'])":{borderRadius:`100%`},"input:where([type='checkbox']):focus,input:where([type='radio']):focus":{outline:`2px solid transparent`,outlineOffset:`2px`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`2px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`#3182ce`,"--tw-ring-offset-shadow":`var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,"--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:`var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`},"input:where([type='checkbox']):checked,input:where([type='radio']):checked":{borderColor:`transparent`,backgroundColor:`currentColor`,backgroundSize:`100% 100%`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`},"input:where([type='checkbox']):checked":{backgroundImage:`url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`},"@media (forced-colors: active)":{"input:where([type='checkbox']):checked":{appearance:`auto`},"input:where([type='radio']):checked":{appearance:`auto`},"input:where([type='checkbox']):indeterminate":{appearance:`auto`}},"input:where([type='radio']):checked":{backgroundImage:`url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`},"input:where([type='checkbox']):checked:hover,input:where([type='checkbox']):checked:focus,input:where([type='radio']):checked:hover,input:where([type='radio']):checked:focus":{borderColor:`transparent`,backgroundColor:`currentColor`},"input:where([type='checkbox']):indeterminate":{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")`,borderColor:`transparent`,backgroundColor:`currentColor`,backgroundSize:`100% 100%`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`},"input:where([type='checkbox']):indeterminate:hover,input:where([type='checkbox']):indeterminate:focus":{borderColor:`transparent`,backgroundColor:`currentColor`},"input:where([type='file'])":{background:`unset`,borderColor:`inherit`,borderWidth:`0`,borderRadius:`0`,padding:`0`,fontSize:`unset`,lineHeight:`inherit`},"input:where([type='file']):focus":{outline:`1px auto -webkit-focus-ring-color`}}}
  
  :root {
    --forge-primary: ${e=>e.theme.PRIMARY};
    --forge-offset: ${e=>e.theme.OFFSET};
    --forge-background: ${e=>e.theme.BACKGROUND};
    --forge-border: ${e=>e.theme.BORDER};
  }

  /* Base styling for the entire app */
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
`,Av=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e2232;
  color: #ffffff;
`,jv=T.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: #9d99ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Mv=T.p`
  margin-top: 20px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;function Nv(){let{sceneReady:e,cacheReady:t,playerData:n,roomMetadata:r,sceneMetadata:i}=P(),{isInitialized:a}=Ov(),{theme:o}=We(),[s,l]=(0,N.useState)(`ForgeMain`),[u,d]=(0,N.useState)(!1),f=(0,N.useRef)(!1),p=String(n?.role||``).toUpperCase()===`GM`,m=i,h=n?.id,g=(m[ne(O.PARTY_HUD_OPEN,h)]??m[O.PARTY_HUD_OPEN])===!0,_=m[O.SHOW_PLAYER_VIEW]||!1,v=p||_,y=e&&t&&a;return(0,N.useEffect)(()=>{y&&pe()},[y]),(0,N.useEffect)(()=>{if(!y)return;let e=!0;return(async()=>{if(g&&!f.current){await m_(),e&&(f.current=!0);return}!g&&f.current&&(await h_(),e&&(f.current=!1))})(),()=>{e=!1}},[y,g]),(0,N.useEffect)(()=>{y&&!v&&s===`ForgeMain`&&l(`Party`)},[y,v,s]),(0,N.useEffect)(()=>{s!==`ForgeMain`&&c.action.setWidth(350)},[s]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(kv,{theme:o}),!e||!t||!a?(0,F.jsxs)(Av,{children:[(0,F.jsx)(jv,{}),(0,F.jsx)(Mv,{children:e?t?a?`Loading...`:`Initializing system...`:`Loading cache...`:`Connecting to scene...`})]}):(0,F.jsxs)(Up,{children:[(0,F.jsx)(Q_,{}),(0,F.jsx)(ov,{}),(0,F.jsx)(hv,{}),(0,F.jsx)(Tv,{}),(0,F.jsx)(Dv,{}),(0,F.jsx)(Wp,{theme:o,$backgroundUrl:o.BACKGROUND_URL,children:(0,F.jsx)(ol,{mode:`wait`,children:(()=>{switch(s){case`ForgeMain`:return v?(0,F.jsx)(f_,{},`main`):(0,F.jsx)(F_,{},`party`);case`Settings`:return p?(0,F.jsx)(Tm,{},`settings`):(0,F.jsx)(f_,{},`main`);case`Party`:return(0,F.jsx)(F_,{},`party`);case`System`:return p?(0,F.jsx)(gh,{},`system`):(0,F.jsx)(f_,{},`main`);case`ChatLog`:return(0,F.jsx)(jm,{},`chatlog`)}})()})}),(0,F.jsx)(tm,{isOpen:u,currentPage:s,onToggle:()=>d(!u),onNavigate:e=>{if(!v&&e===`ForgeMain`){l(`Party`),d(!1);return}if(!p&&(e===`Settings`||e===`System`)){l(`ForgeMain`),d(!1);return}l(e),d(!1)},canAccessInitiativeList:v})]})]})}var Pv=Nv,Fv=class{static{this.ALPHANUMERICTEXTMATCH=/\s[\da-zA-Z]$/}};function Iv(e){for(let t of Rv)if(e.includes(t)){let n=Rv[Math.floor(Math.random()*Rv.length)];return e.replace(t,n)}return Lv(e)}function Lv(e){return`${Rv[Math.floor(Math.random()*Rv.length)]} ${e}`}const Rv=`Grizzled.Wily.Stoic.Mellow.Pensive.Shrewd.Cautious.Hardy.Nimble.Tenacious.Gritty.Tolerant.Hardy.Adroit.Resilient.Slight.Stout.Durable.Subtle.Sober.Clever.Brave.Calm.Wise.Cunning.Alert.Swift.Agile.Loyal.Sturdy.Stable.Sneaky.Clever.Resourceful.Shady.Stalwart.Vigilant.Staunch.Fierce.Vigorous.Robust.Fearless.Dauntless.Resolute.Sagacious.Prudent.Judicious.Astute.Savvy.Sharp.Quick.Witty.Smart.Snippy.Crafty.Deft.Sly.Artful.Clever.Sneering.Tough.Rugged.Solid.Strong.Sturdy.Tough.Gritty.Rough.Hardened.Burly.Muscular.Brawny.Rowdy.Forceful.Snorting.Potent.Martial.Speckled.Mottled.Disheveled`.split(`.`);var zv=`com.battle-system.forge/view-unit`,Bv=e=>e.trim().toLowerCase(),Vv=e=>{if(typeof e!=`string`)return null;let t=e.trim();return t.length>0?t:null},Hv=e=>{let t=e.trim();return t?Fv.ALPHANUMERICTEXTMATCH.test(t)?t.slice(0,-2):t:e},Uv=e=>{let t=typeof e.text?.plainText==`string`?e.text.plainText.trim():``;if(t.length>0)return t;let n=e.metadata?.[p.UNIT_NAME],r=typeof n==`string`?n.trim():``;if(r.length>0)return r;let i=typeof e.name==`string`?e.name.trim():``;return i.length>0?i:typeof e.name==`string`?e.name:``},Wv=async e=>{let n=await c.viewport.getHeight(),r=n>800?700:n-100;await c.popover.open({id:t.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(e)}`,height:r,width:350,anchorReference:`POSITION`,anchorPosition:{left:await c.viewport.getWidth()/2,top:await c.viewport.getHeight()/2},anchorOrigin:{horizontal:`CENTER`,vertical:`CENTER`},transformOrigin:{horizontal:`CENTER`,vertical:`CENTER`},hidePaper:!0,disableClickAway:!0})},Gv=async e=>{let t=Array.from(new Set(e.map(e=>e.trim()).filter(e=>e.length>0))),n=new Map;if(t.length===0)return n;let r=await de(),i=new Map;for(let e of r){let t=Bv(e.name);if(!t)continue;let n=i.get(t);n?n.push(e):i.set(t,[e])}for(let e of t){let t=Bv(e),r=i.get(t)?.[0];!r||!r.metadata||n.set(t,De(r.metadata))}try{let e=await be(t);for(let t of e){let e=Bv(t.name);!e||n.has(e)||!t.metadata||n.set(e,De(t.metadata))}let r=await Se(t);for(let e of r){let t=Bv(e.name);!t||n.has(t)||!e.metadata||n.set(t,De(e.metadata))}}catch(e){k.log(`Remote collection lookup failed, using local collection only`,e)}return n};function Kv({children:e}){P(e=>e.roomMetadata);let t=P(e=>e.sceneMetadata),n=P(e=>e.items),r=P(e=>e.playerData),i=P(e=>e.systemData),a=t,o=i?.attributes??[],s=new Set(o.map(e=>e.attr_bid)),l=o.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`})?.attr_bid,u=o.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`})?.attr_bid,d=Vv(a[O.HP_CURRENT_BID]),f=Vv(a[O.HP_MAX_BID]),m=d&&(s.size===0||s.has(d))?d:l||(s.size===0?Oe.CURRENT_HP:``),h=f&&(s.size===0||s.has(f))?f:u||(s.size===0?Oe.MAX_HP:``),g=!!(m&&h),_=a[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?!0:a[O.SHOW_MODIFY_UNIT_CONTEXT_MENU]===!0;return(0,N.useEffect)(()=>{c.onReady(()=>{c.contextMenu.create({id:p.ON_LIST,icons:[{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}}],async onClick(e){if(k.info(`Add to Combat Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[p.ON_LIST]===!0))await c.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[p.ON_LIST],delete t.metadata[p.INITIATIVE]});else{let r=[],i=[],o=new Set(e.items.map(e=>e.id)),s=a[O.USE_DESCRIPTIVE_DUPLICATES]!==void 0,l=new Set(n.filter(e=>{if(o.has(e.id))return!1;let t=e.metadata[p.UNIT_NAME];return typeof t==`string`&&t.trim().length>0}).map(e=>Bv(String(e.metadata[p.UNIT_NAME]))));for(let t of e.items){if(t.metadata[p.FABRICATED]===!0)continue;let e=Hv(t.text?.plainText||t.name);r.push(e)}await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let u=await Gv(r);await c.action.setBadgeText(void 0);for(let t of e.items){let e={},n=t,r=Uv(n);if(t.metadata[p.FABRICATED]!==!0){let i=Hv(n.text?.plainText||t.name),a=u.get(Bv(i));if(a&&Object.assign(e,a),(typeof e[p.UNIT_NAME]!=`string`||!String(e[p.UNIT_NAME]).trim())&&(e[p.UNIT_NAME]=r),e[p.FABRICATED]=!0,s){let n=String(e[p.UNIT_NAME]||i||t.name).trim(),r=Bv(n);if(r){let e=0;for(;l.has(r)&&e<20;)n=Iv(n),r=Bv(n),e+=1;r&&l.add(r)}e[p.UNIT_NAME]=n}}(typeof e[p.UNIT_NAME]!=`string`||!String(e[p.UNIT_NAME]).trim())&&(e[p.UNIT_NAME]=r),e[p.ON_LIST]=!0,e[p.INITIATIVE]=0,i.push({id:t.id,metadata:e})}await c.scene.items.updateItems(e.items,e=>{for(let n of e){let e=i.find(e=>e.id===n.id);if(e&&(Object.assign(n.metadata,e.metadata),t[O.SHOW_NAMES]===!0)){let t=n,r=typeof e.metadata[p.UNIT_NAME]==`string`&&String(e.metadata[p.UNIT_NAME]).trim().length>0?String(e.metadata[p.UNIT_NAME]).trim():Uv(t);t.text&&(t.text.plainText=r)}}})}}}),c.contextMenu.create({id:p.IN_PARTY,icons:[{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`!=`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`!=`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`==`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`==`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){k.info(`Add to Party Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[p.IN_PARTY]===!0)?await c.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[p.IN_PARTY]}):await c.scene.items.updateItems(e.items,e=>{for(let t of e)t.metadata[p.IN_PARTY]=!0})}}),c.contextMenu.create({id:zv,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){k.info(`View Unit Clicked: ${e.items[0].name}`);let r=e.items[0];if(!r)return;let i={};if(r.metadata[p.FABRICATED]!==!0){let e=r,o=Uv(e),s=Hv(e.text?.plainText||r.name);await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let l=await Gv([s]);await c.action.setBadgeText(void 0);let u=l.get(Bv(s));u&&Object.assign(i,u),(typeof i[p.UNIT_NAME]!=`string`||!String(i[p.UNIT_NAME]).trim())&&(i[p.UNIT_NAME]=o),i[p.FABRICATED]=!0,a[O.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[p.UNIT_NAME]!=null&&e.id!==r.id).map(e=>e.metadata[p.UNIT_NAME]).includes(s)&&(i[p.UNIT_NAME]=Iv(s)),await c.scene.items.updateItems([r],e=>{let n=e[0];if(Object.assign(n.metadata,i),t[O.SHOW_NAMES]===!0){let e=n,t=typeof i[p.UNIT_NAME]==`string`&&String(i[p.UNIT_NAME]).trim().length>0?String(i[p.UNIT_NAME]).trim():Uv(e);e.text&&(e.text.plainText=t)}})}await Wv(r.id)}}),g&&_?c.contextMenu.create({id:p.MODIFY_UNIT,icons:[{icon:`/icon.svg`,label:`Adjust HP`,filter:{some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Adjust HP`,filter:{every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e,t){k.info(`Adjust HP Clicked: ${e.items[0].name}`),await c.popover.open({id:D.CONTEXT_MENU,url:`/pages/forgecontext.html`,height:50,width:180,anchorElementId:t,hidePaper:!0})},embed:{url:`/pages/forgecontext.html?contextmenu=true`,height:70}}):c.contextMenu.remove(p.MODIFY_UNIT).catch(()=>{})})},[a,g,_]),(0,F.jsx)(F.Fragment,{children:e})}Fe.createRoot(document.getElementById(`root`)).render((0,F.jsx)(N.StrictMode,{children:(0,F.jsx)(te,{children:(0,F.jsx)(Ve,{children:(0,F.jsx)(Kv,{children:(0,F.jsx)(Ue,{children:(0,F.jsx)(Pv,{})})})})})}));