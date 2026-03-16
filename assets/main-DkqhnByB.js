import{A as e,C as t,D as n,E as r,F as i,L as a,M as o,N as s,O as c,R as l,S as u,T as d,_ as f,b as p,c as m,d as h,f as g,g as _,h as v,j as y,k as b,l as x,m as S,o as C,p as w,s as T,t as E,u as ee,v as te,w as ne,x as re,y as D}from"./defaultgamesystem-BOilZxMK.js";import{A as ie,D as ae,E as oe,F as se,I as ce,L as O,M as le,N as ue,O as de,P as fe,R as pe,S as me,T as he,_ as ge,b as _e,c as ve,d as ye,g as k,h as be,j as xe,k as A,l as Se,m as Ce,n as we,p as Te,r as Ee,s as De,u as Oe,v as ke,w as j,x as Ae,z as je}from"./unitCollectionRemote-D9v7HCNC.js";import{n as Me,t as M}from"./MockData-DTzuSraw.js";var Ne=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},N=(e=>e?Ne(e):Ne),P=l(i(),1),Pe=e=>e;function Fe(e,t=Pe){let n=P.useSyncExternalStore(e.subscribe,P.useCallback(()=>t(e.getState()),[e,t]),P.useCallback(()=>t(e.getInitialState()),[e,t]));return P.useDebugValue(n),n}var Ie=e=>{let t=N(e),n=e=>Fe(t,e);return Object.assign(n,t),n},Le=(e=>e?Ie(e):Ie),Re=l(s(),1);const F=Le(e=>({cacheReady:!1,setCacheReady:t=>e({cacheReady:t}),sceneReady:!1,setSceneReady:t=>e({sceneReady:t}),items:[],setItems:t=>e({items:t}),localItems:[],setLocalItems:t=>e({localItems:t}),sceneMetadata:{},setSceneMetadata:t=>e({sceneMetadata:{...t}}),roomMetadata:{},setRoomMetadata:t=>e({roomMetadata:{...t}}),gridDpi:150,setGridDpi:t=>e({gridDpi:t}),playerData:void 0,setPlayerData:t=>e({playerData:t}),partyData:[],setPartyData:t=>e({partyData:t}),systemData:null,setSystemData:t=>e({systemData:t})}));var ze=0;const Be=Le(e=>({messages:[],initialized:!1,addMessage:t=>{let n=new Date,r=n.getHours(),i=n.getMinutes(),a=r>=12?`PM`:`AM`,o=`${r%12||12}:${i<10?`0${i}`:i} ${a}`;e(e=>({messages:[...e.messages,{id:ze++,text:t,timestamp:o}]}))},setInitialized:t=>e({initialized:t})})),Ve=()=>{Be.getState().initialized||(c.broadcast.onMessage(`${t.EXTENSIONID}/chatlog`,e=>{let t=Be.getState().addMessage;typeof e.data==`string`?t(e.data):typeof e.data==`object`&&e.data.message&&t(e.data.message)}),Be.getState().setInitialized(!0))};var I=d(),He=`${t.EXTENSIONID}/chatlog`,Ue=`${t.EXTENSIONID}/roll-notification`;function We({children:e}){let t=F(e=>e.setItems),n=F(e=>e.setLocalItems),r=F(e=>e.setSceneMetadata),i=F(e=>e.setRoomMetadata),a=F(e=>e.setGridDpi),o=F(e=>e.setPlayerData),s=F(e=>e.setPartyData),l=F(e=>e.setSceneReady),u=F(e=>e.setCacheReady);return(0,P.useEffect)(()=>{let e=(e,t)=>{let n=e[D.ENABLE_CONSOLE_LOG];typeof n==`boolean`&&O.setEnabled(n)},d=e=>{je(e);let{sceneMetadata:t,roomMetadata:n}=F.getState(),r=t,i=r[D.ENABLE_OBR_NOTIFICATION];if(r[D.SHOW_NOTIFICATION_TO_ALL]===!0){c.broadcast.sendMessage(He,{message:e},{destination:`ALL`}),i===!0&&c.broadcast.sendMessage(Ue,{message:e},{destination:`ALL`});return}Be.getState().addMessage(e),i===!0&&c.notification.show(e,`SUCCESS`)},f=({explicitMessage:e,tokenName:t,actionName:n,total:r})=>{if(typeof e==`string`&&e.trim().length>0)return e;let i=t||`Unknown`,a=n||`Action`;return typeof r==`number`&&Number.isFinite(r)?`${i} rolled ${a} for ${r}!`:`${i} rolled ${a}.`};Ve();let p=c.broadcast.onMessage(Ue,e=>{let t=e.data,n=typeof t?.message==`string`?t.message:null;n&&c.notification.show(n,`SUCCESS`)});xe(e=>{let t=ie(e.rollHtml);d(f({tokenName:e.senderName,actionName:e.actionName,total:t}))}),ue(e=>{d(f({explicitMessage:e.message}))}),le(e=>{d(f({tokenName:e.playerName,actionName:e.result.diceNotation,total:e.result.totalValue}))}),fe(e=>{let t=e.output.trim();d(t.length>0?`${e.senderName} rolled ${e.actionName} for ${e.total}. ${t}`:f({tokenName:e.senderName,actionName:e.actionName,total:e.total}))});let m,h,g,_,v,y,b,x,S=async()=>{let[l,d,f,p,m,S,C,w,T,E,ee,te]=await Promise.all([c.scene.items.getItems(),c.scene.local.getItems(),c.scene.getMetadata(),c.room.getMetadata(),c.scene.grid.getDpi(),c.party.getPlayers(),c.player.getColor(),c.player.getRole(),c.player.getConnectionId(),c.player.getId(),c.player.getMetadata(),c.player.getName()]);t(l),n(d),r(f),i(p),e(f,p),a(m),o({id:E,name:te,connectionId:T,role:w,color:C,metadata:ee}),s(S),h=c.scene.items.onChange(t),g=c.scene.local.onChange(n),y=c.scene.grid.onChange(e=>a(e.dpi)),b=c.player.onChange(o),x=c.party.onChange(s),_=c.scene.onMetadataChange(t=>{r(t),e(t,F.getState().roomMetadata)}),v=c.room.onMetadataChange(t=>{i(t),e(F.getState().sceneMetadata,t)}),u(!0),O.log(`CacheManager: Cache is ready`)};return c.onReady(async()=>{let e=await c.scene.isReady();l(e),e&&(O.log(`Scene is ready on initial load, syncing cache...`),await S()),m=c.scene.onReadyChange(async e=>{l(e),e?(O.log(`Scene became ready, syncing cache...`),await S()):(O.log(`Scene is no longer ready, clearing cache...`),u(!1))})}),()=>{m?.(),h?.(),g?.(),_?.(),v?.(),y?.(),b?.(),x?.(),p?.()}},[l,u,t,n,r,i,a,o,s]),(0,I.jsx)(I.Fragment,{children:e})}var Ge=(0,P.createContext)(void 0);const Ke=({children:e})=>{let[t,n]=(0,P.useState)(v),r=(0,P.useCallback)((e,t,r,i,a)=>{n(n=>n.PRIMARY===e&&n.OFFSET===t&&n.BACKGROUND===r&&n.BORDER===i&&n.BACKGROUND_URL===(a||void 0)?n:_(e,t,r,i,a))},[]);return(0,I.jsx)(Ge.Provider,{value:{theme:t,setTheme:n,updateThemeFromSystem:r},children:e})},qe=()=>{let e=(0,P.useContext)(Ge);if(!e)throw Error(`useForgeTheme must be used within a ThemeProvider`);return e};var Je=(0,P.createContext)({});function Ye(e){let t=(0,P.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Xe=typeof window<`u`,Ze=Xe?P.useLayoutEffect:P.useEffect,L=(0,P.createContext)(null);function Qe(e,t){e.indexOf(t)===-1&&e.push(t)}function R(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var z=(e,t,n)=>n>t?t:n<e?e:n,$e={},et=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function tt(e){return typeof e==`object`&&!!e}var nt=e=>/^0[^.\s]+$/u.test(e);function rt(e){let t;return()=>(t===void 0&&(t=e()),t)}var it=e=>e,at=(e,t)=>n=>t(e(n)),ot=(...e)=>e.reduce(at),st=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},ct=class{constructor(){this.subscriptions=[]}add(e){return Qe(this.subscriptions,e),()=>R(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},lt=e=>e*1e3,ut=e=>e/1e3;function dt(e,t){return t?e*(1e3/t):0}var ft=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,pt=1e-7,mt=12;function ht(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=ft(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>pt&&++s<mt);return o}function gt(e,t,n,r){if(e===t&&n===r)return it;let i=t=>ht(t,0,1,e,n);return e=>e===0||e===1?e:ft(i(e),t,r)}var _t=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,vt=e=>t=>1-e(1-t),yt=gt(.33,1.53,.69,.99),bt=vt(yt),xt=_t(bt),St=e=>(e*=2)<1?.5*bt(e):.5*(2-2**(-10*(e-1))),Ct=e=>1-Math.sin(Math.acos(e)),wt=vt(Ct),Tt=_t(Ct),Et=gt(.42,0,1,1),Dt=gt(0,0,.58,1),Ot=gt(.42,0,.58,1),kt=e=>Array.isArray(e)&&typeof e[0]!=`number`,At=e=>Array.isArray(e)&&typeof e[0]==`number`,jt={linear:it,easeIn:Et,easeInOut:Ot,easeOut:Dt,circIn:Ct,circInOut:Tt,circOut:wt,backIn:bt,backInOut:xt,backOut:yt,anticipate:St},Mt=e=>typeof e==`string`,Nt=e=>{if(At(e)){e.length;let[t,n,r,i]=e;return gt(t,n,r,i)}else if(Mt(e))return jt[e],`${e}`,jt[e];return e},Pt=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],Ft={value:null,addProjectionMetrics:null};function It(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.has(e)||s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),t&&Ft.value&&Ft.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Lt=40;function Rt(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Pt.reduce((e,n)=>(e[n]=It(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=$e.useManualTiming?i.timestamp:performance.now();n=!1,$e.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,Lt),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Pt.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Pt.length;t++)o[Pt[t]].cancel(e)},state:i,steps:o}}var{schedule:B,cancel:zt,state:V,steps:Bt}=Rt(typeof requestAnimationFrame<`u`?requestAnimationFrame:it,!0),Vt;function Ht(){Vt=void 0}var Ut={now:()=>(Vt===void 0&&Ut.set(V.isProcessing||$e.useManualTiming?V.timestamp:performance.now()),Vt),set:e=>{Vt=e,queueMicrotask(Ht)}},Wt={layout:0,mainThread:0,waapi:0},Gt=e=>t=>typeof t==`string`&&t.startsWith(e),Kt=Gt(`--`),qt=Gt(`var(--`),Jt=e=>qt(e)?Yt.test(e.split(`/*`)[0].trim()):!1,Yt=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Xt(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Zt={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Qt={...Zt,transform:e=>z(0,1,e)},$t={...Zt,default:1},en=e=>Math.round(e*1e5)/1e5,tn=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function nn(e){return e==null}var rn=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,an=(e,t)=>n=>!!(typeof n==`string`&&rn.test(n)&&n.startsWith(e)||t&&!nn(n)&&Object.prototype.hasOwnProperty.call(n,t)),on=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(tn);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},sn=e=>z(0,255,e),cn={...Zt,transform:e=>Math.round(sn(e))},ln={test:an(`rgb`,`red`),parse:on(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+cn.transform(e)+`, `+cn.transform(t)+`, `+cn.transform(n)+`, `+en(Qt.transform(r))+`)`};function un(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var dn={test:an(`#`),parse:un,transform:ln.transform},fn=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),pn=fn(`deg`),mn=fn(`%`),H=fn(`px`),hn=fn(`vh`),gn=fn(`vw`),_n=(()=>({...mn,parse:e=>mn.parse(e)/100,transform:e=>mn.transform(e*100)}))(),vn={test:an(`hsl`,`hue`),parse:on(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+mn.transform(en(t))+`, `+mn.transform(en(n))+`, `+en(Qt.transform(r))+`)`},U={test:e=>ln.test(e)||dn.test(e)||vn.test(e),parse:e=>ln.test(e)?ln.parse(e):vn.test(e)?vn.parse(e):dn.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?ln.transform(e):vn.transform(e),getAnimatableNone:e=>{let t=U.parse(e);return t.alpha=0,U.transform(t)}},yn=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function bn(e){return isNaN(e)&&typeof e==`string`&&(e.match(tn)?.length||0)+(e.match(yn)?.length||0)>0}var xn=`number`,Sn=`color`,Cn=`var`,wn=`var(`,Tn="${}",En=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Dn(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(En,e=>(U.test(e)?(r.color.push(a),i.push(Sn),n.push(U.parse(e))):e.startsWith(wn)?(r.var.push(a),i.push(Cn),n.push(e)):(r.number.push(a),i.push(xn),n.push(parseFloat(e))),++a,Tn)).split(Tn),indexes:r,types:i}}function On(e){return Dn(e).values}function kn(e){let{split:t,types:n}=Dn(e),r=t.length;return e=>{let i=``;for(let a=0;a<r;a++)if(i+=t[a],e[a]!==void 0){let t=n[a];t===xn?i+=en(e[a]):t===Sn?i+=U.transform(e[a]):i+=e[a]}return i}}var An=e=>typeof e==`number`?0:U.test(e)?U.getAnimatableNone(e):e;function jn(e){let t=On(e);return kn(e)(t.map(An))}var Mn={test:bn,parse:On,createTransformer:kn,getAnimatableNone:jn};function Nn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Pn({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Nn(s,r,e+1/3),a=Nn(s,r,e),o=Nn(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Fn(e,t){return n=>n>0?t:e}var W=(e,t,n)=>e+(t-e)*n,In=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Ln=[dn,ln,vn],Rn=e=>Ln.find(t=>t.test(e));function zn(e){let t=Rn(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===vn&&(n=Pn(n)),n}var Bn=(e,t)=>{let n=zn(e),r=zn(t);if(!n||!r)return Fn(e,t);let i={...n};return e=>(i.red=In(n.red,r.red,e),i.green=In(n.green,r.green,e),i.blue=In(n.blue,r.blue,e),i.alpha=W(n.alpha,r.alpha,e),ln.transform(i))},Vn=new Set([`none`,`hidden`]);function Hn(e,t){return Vn.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Un(e,t){return n=>W(e,t,n)}function Wn(e){return typeof e==`number`?Un:typeof e==`string`?Jt(e)?Fn:U.test(e)?Bn:Jn:Array.isArray(e)?Gn:typeof e==`object`?U.test(e)?Bn:Kn:Fn}function Gn(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Wn(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Kn(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Wn(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function qn(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Jn=(e,t)=>{let n=Mn.createTransformer(t),r=Dn(e),i=Dn(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Vn.has(e)&&!i.values.length||Vn.has(t)&&!r.values.length?Hn(e,t):ot(Gn(qn(r,i),i.values),n):(`${e}${t}`,Fn(e,t))};function Yn(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?W(e,t,n):Wn(e)(e,t)}var Xn=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>B.update(t,e),stop:()=>zt(t),now:()=>V.isProcessing?V.timestamp:Ut.now()}},Zn=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Qn=2e4;function $n(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function er(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min($n(r),Qn);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:ut(i)}}var tr=5;function nr(e,t,n){let r=Math.max(t-tr,0);return dt(n-e(r),t-r)}var G={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},rr=.001;function ir({duration:e=G.duration,bounce:t=G.bounce,velocity:n=G.velocity,mass:r=G.mass}){let i,a;G.maxDuration;let o=1-t;o=z(G.minDamping,G.maxDamping,o),e=z(G.minDuration,G.maxDuration,ut(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=sr(t,o),c=Math.exp(-i);return rr-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=sr(t**2,o);return(-i(t)+rr>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-rr+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=or(i,a,s);if(e=lt(e),isNaN(c))return{stiffness:G.stiffness,damping:G.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var ar=12;function or(e,t,n){let r=n;for(let n=1;n<ar;n++)r-=e(r)/t(r);return r}function sr(e,t){return e*Math.sqrt(1-t*t)}var cr=[`duration`,`bounce`],lr=[`stiffness`,`damping`,`mass`];function ur(e,t){return t.some(t=>e[t]!==void 0)}function dr(e){let t={velocity:G.velocity,stiffness:G.stiffness,damping:G.damping,mass:G.mass,isResolvedFromDuration:!1,...e};if(!ur(e,lr)&&ur(e,cr))if(e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*z(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:G.mass,stiffness:i,damping:a}}else{let n=ir(e);t={...t,...n,mass:G.mass},t.isResolvedFromDuration=!0}return t}function fr(e=G.visualDuration,t=G.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=dr({...n,velocity:-ut(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=ut(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?G.restSpeed.granular:G.restSpeed.default,i||=v?G.restDelta.granular:G.restDelta.default;let y;if(h<1){let e=sr(_,h);y=t=>o-Math.exp(-h*_*t)*((m+h*_*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}else if(h===1)y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}let b={calculatedDuration:p&&d||null,next:e=>{let t=y(e);if(p)s.done=e>=d;else{let n=e===0?m:0;h<1&&(n=e===0?lt(m):nr(y,e,t));let a=Math.abs(n)<=r,c=Math.abs(o-t)<=i;s.done=a&&c}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min($n(b),Qn),t=Zn(t=>b.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return b}fr.applyToOptions=e=>{let t=er(e,100,fr);return e.ease=t.ease,e.duration=lt(t.duration),e.type=`keyframes`,e};function pr({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=fr({keyframes:[f.value,m(f.value)],velocity:nr(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function mr(e,t,n){let r=[],i=n||$e.mix||Yn,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=ot(Array.isArray(t)?t[n]||it:t,a)),r.push(a)}return r}function hr(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=mr(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=st(e[r],e[r+1],n);return s[r](i)};return n?t=>l(z(e[0],e[a-1],t)):l}function gr(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=st(0,t,r);e.push(W(n,1,i))}}function _r(e){let t=[0];return gr(t,e.length-1),t}function vr(e,t){return e.map(e=>e*t)}function yr(e,t){return e.map(()=>t||Ot).splice(0,e.length-1)}function br({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=kt(r)?r.map(Nt):Nt(r),a={done:!1,value:t[0]},o=hr(vr(n&&n.length===t.length?n:_r(t),e),t,{ease:Array.isArray(i)?i:yr(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var xr=e=>e!==null;function Sr(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(xr),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Cr={decay:pr,inertia:pr,tween:br,keyframes:br,spring:fr};function wr(e){typeof e.type==`string`&&(e.type=Cr[e.type])}var Tr=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},Er=e=>e/100,Dr=class extends Tr{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Ut.now()&&this.tick(Ut.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},Wt.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;wr(e);let{type:t=br,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||br;s!==br&&typeof o[0]!=`number`&&(this.mixKeyframes=ot(Er,Yn(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=$n(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=z(0,1,n)*o}let b=_?{done:!1,value:l[0]}:y.next(v);i&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==pr&&(b.value=Sr(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return ut(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+ut(e)}get time(){return ut(this.currentTime)}set time(e){e=lt(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Ut.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=ut(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Xn,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Ut.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,Wt.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function Or(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var kr=e=>e*180/Math.PI,Ar=e=>Mr(kr(Math.atan2(e[1],e[0]))),jr={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ar,rotateZ:Ar,skewX:e=>kr(Math.atan(e[1])),skewY:e=>kr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Mr=e=>(e%=360,e<0&&(e+=360),e),Nr=Ar,Pr=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Fr=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Ir={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Pr,scaleY:Fr,scale:e=>(Pr(e)+Fr(e))/2,rotateX:e=>Mr(kr(Math.atan2(e[6],e[5]))),rotateY:e=>Mr(kr(Math.atan2(-e[2],e[0]))),rotateZ:Nr,rotate:Nr,skewX:e=>kr(Math.atan(e[4])),skewY:e=>kr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Lr(e){return e.includes(`scale`)?1:0}function Rr(e,t){if(!e||e===`none`)return Lr(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Ir,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=jr,i=t}if(!i)return Lr(t);let a=r[t],o=i[1].split(`,`).map(Br);return typeof a==`function`?a(o):o[a]}var zr=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Rr(n,t)};function Br(e){return parseFloat(e.trim())}var Vr=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Hr=(()=>new Set(Vr))(),Ur=e=>e===Zt||e===H,Wr=new Set([`x`,`y`,`z`]),Gr=Vr.filter(e=>!Wr.has(e));function Kr(e){let t=[];return Gr.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var qr={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Rr(t,`x`),y:(e,{transform:t})=>Rr(t,`y`)};qr.translateX=qr.x,qr.translateY=qr.y;var Jr=new Set,Yr=!1,Xr=!1,Zr=!1;function Qr(){if(Xr){let e=Array.from(Jr).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Kr(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Xr=!1,Yr=!1,Jr.forEach(e=>e.complete(Zr)),Jr.clear()}function $r(){Jr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Xr=!0)})}function ei(){Zr=!0,$r(),Qr(),Zr=!1}var ti=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Jr.add(this),Yr||(Yr=!0,B.read($r),B.resolveKeyframes(Qr))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Or(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Jr.delete(this)}cancel(){this.state===`scheduled`&&(Jr.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},ni=e=>e.startsWith(`--`);function ri(e,t,n){ni(t)?e.style.setProperty(t,n):e.style[t]=n}var ii=rt(()=>window.ScrollTimeline!==void 0),ai={};function oi(e,t){let n=rt(e);return()=>ai[t]??n()}var si=oi(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),ci=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,li={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:ci([0,.65,.55,1]),circOut:ci([.55,0,1,.45]),backIn:ci([.31,.01,.66,-.59]),backOut:ci([.33,1.53,.69,.99])};function ui(e,t){if(e)return typeof e==`function`?si()?Zn(e,t):`ease-out`:At(e)?ci(e):Array.isArray(e)?e.map(e=>ui(e,t)||li.easeOut):li[e]}function di(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=ui(s,i);Array.isArray(d)&&(u.easing=d),Ft.value&&Wt.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return Ft.value&&p.finished.finally(()=>{Wt.waapi--}),p}function fi(e){return typeof e==`function`&&`applyToOptions`in e}function pi({type:e,...t}){return fi(e)&&si()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var mi=class extends Tr{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=pi(e);this.animation=di(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Sr(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):ri(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return ut(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+ut(e)}get time(){return ut(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=lt(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&ii()?(this.animation.timeline=e,it):t(this)}},hi={anticipate:St,backInOut:xt,circInOut:Tt};function gi(e){return e in hi}function _i(e){typeof e.ease==`string`&&gi(e.ease)&&(e.ease=hi[e.ease])}var vi=10,yi=class extends mi{constructor(e){_i(e),wr(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Dr({...a,autoplay:!1}),s=Math.max(vi,Ut.now()-this.startTime),c=z(0,vi,s-vi);t.setWithVelocity(o.sample(Math.max(0,s-c)).value,o.sample(s).value,c),o.stop()}},bi=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(Mn.test(e)||e===`0`)&&!e.startsWith(`url(`));function xi(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Si(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=bi(i,t),s=bi(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:xi(e)||(n===`spring`||fi(n))&&r}function Ci(e){e.duration=0,e.type=`keyframes`}var wi=new Set([`opacity`,`clipPath`,`filter`,`transform`]),Ti=rt(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Ei(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:s,transformTemplate:c}=t.owner.getProps();return Ti()&&n&&wi.has(n)&&(n!==`transform`||!c)&&!s&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Di=40,Oi=class extends Tr{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Ut.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||ti)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Ut.now(),Si(e,i,a,o)||(($e.instantAnimations||!s)&&l?.(Sr(e,n,t)),e[0]=e[e.length-1],Ci(n),n.repeat=0);let u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Di?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!c&&Ei(u),f=u.motionValue?.owner?.current,p=d?new yi({...u,element:f}):new Dr(u);p.finished.then(()=>{this.notifyFinished()}).catch(it),this.pendingTimeline&&=(this.stopTimeline=p.attachTimeline(this.pendingTimeline),void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),ei()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function ki(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Ai=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ji(e){let t=Ai.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Mi(e,t,n=1){`${e}`;let[r,i]=ji(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return et(e)?parseFloat(e):e}return Jt(i)?Mi(i,t,n+1):i}var Ni={type:`spring`,stiffness:500,damping:25,restSpeed:10},Pi=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Fi={type:`keyframes`,duration:.8},Ii={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Li=(e,{keyframes:t})=>t.length>2?Fi:Hr.has(e)?e.startsWith(`scale`)?Pi(t[1]):Ni:Ii,Ri=e=>e!==null;function zi(e,{repeat:t,repeatType:n=`loop`},r){let i=e.filter(Ri),a=t&&n!==`loop`&&t%2==1?0:i.length-1;return!a||r===void 0?i[a]:r}function Bi(e,t){return e?.[t]??e?.default??e}function Vi({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:l,...u}){return!!Object.keys(u).length}var Hi=(e,t,n,r={},i,a)=>o=>{let s=Bi(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=lt(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Vi(s)||Object.assign(u,Li(e,u)),u.duration&&=lt(u.duration),u.repeatDelay&&=lt(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Ci(u),u.delay===0&&(d=!0)),($e.instantAnimations||$e.skipAnimations)&&(d=!0,Ci(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=zi(u.keyframes,s);if(e!==void 0){B.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Dr(u):new Oi(u)};function Ui(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Wi(e,t,n,r){if(typeof t==`function`){let[i,a]=Ui(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Ui(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Gi(e,t,n){let r=e.getProps();return Wi(r,t,n===void 0?r.custom:n,e)}var Ki=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Vr]),qi=30,Ji=e=>!isNaN(parseFloat(e)),Yi={current:void 0},Xi=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Ut.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ut.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Ji(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new ct);let n=this.events[e].add(t);return e===`change`?()=>{n(),B.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Yi.current&&Yi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Ut.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>qi)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,qi);return dt(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Zi(e,t){return new Xi(e,t)}var Qi=e=>Array.isArray(e);function $i(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Zi(n))}function ea(e){return Qi(e)?e[e.length-1]||0:e}function ta(e,t){let{transitionEnd:n={},transition:r={},...i}=Gi(e,t)||{};for(let t in i={...i,...n},i)$i(e,t,ea(i[t]))}var na=e=>!!(e&&e.getVelocity);function ra(e){return!!(na(e)&&e.add)}function ia(e,t){let n=e.getValue(`willChange`);if(ra(n))return n.add(t);if(!n&&$e.WillChange){let n=new $e.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function aa(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var oa=`data-`+aa(`framerAppearId`);function sa(e){return e.props[oa]}function ca({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function la(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);let c=[],l=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||l&&ca(l,t))continue;let o={delay:n,...Bi(a||{},t)},u=r.get();if(u!==void 0&&!r.isAnimating&&!Array.isArray(i)&&i===u&&!o.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){let n=sa(e);if(n){let e=window.MotionHandoffAnimation(n,t,B);e!==null&&(o.startTime=e,d=!0)}}ia(e,t),r.start(Hi(t,r,i,e.shouldReduceMotion&&Ki.has(t)?{type:!1}:o,e,d));let f=r.animation;f&&c.push(f)}return o&&Promise.all(c).then(()=>{B.update(()=>{o&&ta(e,o)})}),c}function ua(e,t,n={}){let r=Gi(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(la(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return da(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function da(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(ua(c,t,{...o,delay:n+(typeof r==`function`?0:r)+ki(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function fa(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>ua(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=ua(e,t,n);else{let i=typeof t==`function`?Gi(e,t,n.custom):t;r=Promise.all(la(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var pa={test:e=>e===`auto`,parse:e=>e},ma=e=>t=>t.test(e),ha=[Zt,H,mn,pn,gn,hn,pa],ga=e=>ha.find(ma(e));function _a(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||nt(e)}var va=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function ya(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(tn)||[];if(!r)return e;let i=n.replace(r,``),a=va.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var ba=/\b([a-z-]*)\(.*?\)/gu,xa={...Mn,getAnimatableNone:e=>{let t=e.match(ba);return t?t.map(ya).join(` `):e}},Sa={...Zt,transform:Math.round},Ca={borderWidth:H,borderTopWidth:H,borderRightWidth:H,borderBottomWidth:H,borderLeftWidth:H,borderRadius:H,borderTopLeftRadius:H,borderTopRightRadius:H,borderBottomRightRadius:H,borderBottomLeftRadius:H,width:H,maxWidth:H,height:H,maxHeight:H,top:H,right:H,bottom:H,left:H,inset:H,insetBlock:H,insetBlockStart:H,insetBlockEnd:H,insetInline:H,insetInlineStart:H,insetInlineEnd:H,padding:H,paddingTop:H,paddingRight:H,paddingBottom:H,paddingLeft:H,paddingBlock:H,paddingBlockStart:H,paddingBlockEnd:H,paddingInline:H,paddingInlineStart:H,paddingInlineEnd:H,margin:H,marginTop:H,marginRight:H,marginBottom:H,marginLeft:H,marginBlock:H,marginBlockStart:H,marginBlockEnd:H,marginInline:H,marginInlineStart:H,marginInlineEnd:H,fontSize:H,backgroundPositionX:H,backgroundPositionY:H,rotate:pn,rotateX:pn,rotateY:pn,rotateZ:pn,scale:$t,scaleX:$t,scaleY:$t,scaleZ:$t,skew:pn,skewX:pn,skewY:pn,distance:H,translateX:H,translateY:H,translateZ:H,x:H,y:H,z:H,perspective:H,transformPerspective:H,opacity:Qt,originX:_n,originY:_n,originZ:H,zIndex:Sa,fillOpacity:Qt,strokeOpacity:Qt,numOctaves:Sa},wa={...Ca,color:U,backgroundColor:U,outlineColor:U,fill:U,stroke:U,borderColor:U,borderTopColor:U,borderRightColor:U,borderBottomColor:U,borderLeftColor:U,filter:xa,WebkitFilter:xa},Ta=e=>wa[e];function Ea(e,t){let n=Ta(e);return n!==xa&&(n=Mn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Da=new Set([`auto`,`none`,`0`]);function Oa(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Da.has(t)&&Dn(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Ea(n,i)}var ka=class extends ti{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Jt(r))){let i=Mi(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Ki.has(n)||e.length!==2)return;let[r,i]=e,a=ga(r),o=ga(i);if(Xt(r)!==Xt(i)&&qr[n]){this.needsMeasurement=!0;return}if(a!==o)if(Ur(a)&&Ur(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else qr[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||_a(e[t]))&&n.push(t);n.length&&Oa(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=qr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=qr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function Aa(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var ja=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Ma(e){return tt(e)&&`offsetHeight`in e}var{schedule:Na,cancel:Pa}=Rt(queueMicrotask,!1),Fa={x:!1,y:!1};function Ia(){return Fa.x||Fa.y}function La(e){return e===`x`||e===`y`?Fa[e]?null:(Fa[e]=!0,()=>{Fa[e]=!1}):Fa.x||Fa.y?null:(Fa.x=Fa.y=!0,()=>{Fa.x=Fa.y=!1})}function Ra(e,t){let n=Aa(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function za(e){return!(e.pointerType===`touch`||Ia())}function Ba(e,t,n={}){let[r,i,a]=Ra(e,n),o=e=>{if(!za(e))return;let{target:n}=e,r=t(n,e);if(typeof r!=`function`||!n)return;let a=e=>{za(e)&&(r(e),n.removeEventListener(`pointerleave`,a))};n.addEventListener(`pointerleave`,a,i)};return r.forEach(e=>{e.addEventListener(`pointerenter`,o,i)}),a}var Va=(e,t)=>t?e===t?!0:Va(e,t.parentElement):!1,Ha=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Ua=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Wa(e){return Ua.has(e.tagName)||e.isContentEditable===!0}var Ga=new WeakSet;function Ka(e){return t=>{t.key===`Enter`&&e(t)}}function qa(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Ja=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Ka(()=>{if(Ga.has(n))return;qa(n,`down`);let e=Ka(()=>{qa(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>qa(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Ya(e){return Ha(e)&&!Ia()}function Xa(e,t,n={}){let[r,i,a]=Ra(e,n),o=e=>{let r=e.currentTarget;if(!Ya(e))return;Ga.add(r);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),Ga.has(r)&&Ga.delete(r),Ya(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Va(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Ma(e)&&(e.addEventListener(`focus`,e=>Ja(e,i)),!Wa(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Za(e){return tt(e)&&`ownerSVGElement`in e}function Qa(e){return Za(e)&&e.tagName===`svg`}var $a=[...ha,U,Mn],eo=e=>$a.find(ma(e)),to=()=>({translate:0,scale:1,origin:0,originPoint:0}),no=()=>({x:to(),y:to()}),ro=()=>({min:0,max:0}),K=()=>({x:ro(),y:ro()}),io={current:null},ao={current:!1},oo=typeof window<`u`;function so(){if(ao.current=!0,oo)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>io.current=e.matches;e.addEventListener(`change`,t),t()}else io.current=!1}var co=new WeakMap;function lo(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function uo(e){return typeof e==`string`||Array.isArray(e)}var fo=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],po=[`initial`,...fo];function mo(e){return lo(e.animate)||po.some(t=>uo(e[t]))}function ho(e){return!!(mo(e)||e.variants)}function go(e,t,n){for(let r in t){let i=t[r],a=n[r];if(na(i))e.addValue(r,i);else if(na(a))e.addValue(r,Zi(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Zi(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var _o=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],vo={};function yo(e){vo=e}function bo(){return vo}var xo=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ti,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Ut.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,B.render(this.render,!1,!0))};let{latestValues:s,renderState:c}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!i,this.isControllingVariants=mo(t),this.isVariantNode=ho(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in u){let t=u[e];s[e]!==void 0&&na(t)&&t.set(s[e])}}mount(e){this.current=e,co.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(ao.current||so(),this.shouldReduceMotion=io.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in this.projection&&this.projection.unmount(),zt(this.notifyUpdate),zt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let n=Hr.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&B.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in vo){let t=vo[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):K()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<_o.length;t++){let n=_o[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=go(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Zi(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(et(n)||nt(n))?n=parseFloat(n):!eo(n)&&Mn.test(t)&&(n=Ea(e,t)),this.setBaseTarget(e,na(n)?n.get():n)),na(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Wi(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!na(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new ct),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Na.render(this.render)}},So=class extends xo{constructor(){super(...arguments),this.KeyframeResolver=ka}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;na(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},Co=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function wo({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function To({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Eo(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Do(e){return e===void 0||e===1}function Oo({scale:e,scaleX:t,scaleY:n}){return!Do(e)||!Do(t)||!Do(n)}function ko(e){return Oo(e)||Ao(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ao(e){return jo(e.x)||jo(e.y)}function jo(e){return e&&e!==`0%`}function Mo(e,t,n){return n+t*(e-n)}function No(e,t,n,r,i){return i!==void 0&&(e=Mo(e,i,r)),Mo(e,n,r)+t}function Po(e,t=0,n=1,r,i){e.min=No(e.min,t,n,r,i),e.max=No(e.max,t,n,r,i)}function Fo(e,{x:t,y:n}){Po(e.x,t.translate,t.scale,t.originPoint),Po(e.y,n.translate,n.scale,n.originPoint)}var Io=.999999999999,Lo=1.0000000000001;function Ro(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Vo(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Fo(e,o)),r&&ko(a.latestValues)&&Vo(e,a.latestValues))}t.x<Lo&&t.x>Io&&(t.x=1),t.y<Lo&&t.y>Io&&(t.y=1)}function zo(e,t){e.min+=t,e.max+=t}function Bo(e,t,n,r,i=.5){Po(e,t,n,W(e.min,e.max,i),r)}function Vo(e,t){Bo(e.x,t.x,t.scaleX,t.scale,t.originX),Bo(e.y,t.y,t.scaleY,t.scale,t.originY)}function Ho(e,t){return wo(Eo(e.getBoundingClientRect(),t))}function Uo(e,t,n){let r=Ho(e,n),{scroll:i}=t;return i&&(zo(r.x,i.offset.x),zo(r.y,i.offset.y)),r}var Wo={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Go=Vr.length;function Ko(e,t,n){let r=``,i=!0;for(let a=0;a<Go;a++){let o=Vr[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=ja(s,Ca[o]);if(!c){i=!1;let t=Wo[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function qo(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Hr.has(e)){o=!0;continue}else if(Kt(e)){i[e]=n;continue}else{let t=ja(n,Ca[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Ko(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Jo(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Yo(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Xo={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(H.test(e))e=parseFloat(e);else return e;return`${Yo(e,t.target.x)}% ${Yo(e,t.target.y)}%`}},Zo={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=Mn.parse(e);if(i.length>5)return r;let a=Mn.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=W(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Qo={borderRadius:{...Xo,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:Xo,borderTopRightRadius:Xo,borderBottomLeftRadius:Xo,borderBottomRightRadius:Xo,boxShadow:Zo};function $o(e,{layout:t,layoutId:n}){return Hr.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Qo[e]||e===`opacity`)}function es(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(na(r[t])||i&&na(i[t])||$o(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function ts(e){return window.getComputedStyle(e)}var ns=class extends So{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Jo}readValueFromInstance(e,t){if(Hr.has(t))return this.projection?.isProjecting?Lr(t):zr(e,t);{let n=ts(e),r=(Kt(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ho(e,t)}build(e,t,n){qo(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return es(e,t,n)}},rs={offset:`stroke-dashoffset`,array:`stroke-dasharray`},is={offset:`strokeDashoffset`,array:`strokeDasharray`};function as(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?rs:is;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var os=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function ss(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(qo(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of os)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&as(d,i,a,o,!1)}var cs=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),ls=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function us(e,t,n,r){for(let n in Jo(e,t,void 0,r),t.attrs)e.setAttribute(cs.has(n)?n:aa(n),t.attrs[n])}function ds(e,t,n){let r=es(e,t,n);for(let n in e)if(na(e[n])||na(t[n])){let t=Vr.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var fs=class extends So{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=K}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Hr.has(t)){let e=Ta(t);return e&&e.default||0}return t=cs.has(t)?t:aa(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return ds(e,t,n)}build(e,t,n){ss(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){us(e,t,n,r)}mount(e){this.isSVGTag=ls(e.tagName),super.mount(e)}},ps=po.length;function ms(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&ms(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<ps;n++){let r=po[n],i=e.props[r];(uo(i)||i===!1)&&(t[r]=i)}return t}function hs(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var gs=[...fo].reverse(),_s=fo.length;function vs(e){return t=>Promise.all(t.map(({animation:t,options:n})=>fa(e,t,n)))}function ys(e){let t=vs(e),n=Ss(),r=!0,i=t=>(n,r)=>{let i=Gi(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(n){t=n(e)}function o(a){let{props:o}=e,s=ms(e.parent)||{},c=[],l=new Set,u={},d=1/0;for(let t=0;t<_s;t++){let f=gs[t],p=n[f],m=o[f]===void 0?s[f]:o[f],h=uo(m),g=f===a?p.isActive:null;g===!1&&(d=t);let _=m===s[f]&&m!==o[f]&&h;if(_&&r&&e.manuallyAnimateOnMount&&(_=!1),p.protectedKeys={...u},!p.isActive&&g===null||!m&&!p.prevProp||lo(m)||typeof m==`boolean`)continue;let v=bs(p.prevProp,m),y=v||f===a&&p.isActive&&!_&&h||t>d&&h,b=!1,x=Array.isArray(m)?m:[m],S=x.reduce(i(f),{});g===!1&&(S={});let{prevResolvedValues:C={}}=p,w={...C,...S},T=t=>{y=!0,l.has(t)&&(b=!0,l.delete(t)),p.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in w){let t=S[e],n=C[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Qi(t)&&Qi(n)?!hs(t,n):t!==n,r?t==null?l.add(e):T(e):t!==void 0&&l.has(e)?T(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=S,p.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(y=!1);let E=_&&v;y&&(!E||b)&&c.push(...x.map(t=>{let n={type:f};if(typeof t==`string`&&r&&!E&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Gi(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=ki(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(l.size){let t={};if(typeof o.initial!=`boolean`){let n=Gi(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}l.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),c.push({animation:t})}let f=!!c.length;return r&&(o.initial===!1||o.initial===o.animate)&&!e.manuallyAnimateOnMount&&(f=!1),r=!1,f?t(c):Promise.resolve()}function s(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=o(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=Ss()}}}function bs(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!hs(t,e):!1}function xs(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ss(){return{animate:xs(!0),whileInView:xs(),whileHover:xs(),whileTap:xs(),whileDrag:xs(),whileFocus:xs(),exit:xs()}}function Cs(e,t){e.min=t.min,e.max=t.max}function ws(e,t){Cs(e.x,t.x),Cs(e.y,t.y)}function Ts(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Es=1e-4,Ds=1-Es,Os=1+Es,ks=.01,As=0-ks,js=0+ks;function Ms(e){return e.max-e.min}function Ns(e,t,n){return Math.abs(e-t)<=n}function Ps(e,t,n,r=.5){e.origin=r,e.originPoint=W(t.min,t.max,e.origin),e.scale=Ms(n)/Ms(t),e.translate=W(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Ds&&e.scale<=Os||isNaN(e.scale))&&(e.scale=1),(e.translate>=As&&e.translate<=js||isNaN(e.translate))&&(e.translate=0)}function Fs(e,t,n,r){Ps(e.x,t.x,n.x,r?r.originX:void 0),Ps(e.y,t.y,n.y,r?r.originY:void 0)}function Is(e,t,n){e.min=n.min+t.min,e.max=e.min+Ms(t)}function Ls(e,t,n){Is(e.x,t.x,n.x),Is(e.y,t.y,n.y)}function Rs(e,t,n){e.min=t.min-n.min,e.max=e.min+Ms(t)}function zs(e,t,n){Rs(e.x,t.x,n.x),Rs(e.y,t.y,n.y)}function Bs(e,t,n,r,i){return e-=t,e=Mo(e,1/n,r),i!==void 0&&(e=Mo(e,1/i,r)),e}function Vs(e,t=0,n=1,r=.5,i,a=e,o=e){if(mn.test(t)&&(t=parseFloat(t),t=W(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=W(a.min,a.max,r);e===a&&(s-=t),e.min=Bs(e.min,t,n,s,i),e.max=Bs(e.max,t,n,s,i)}function Hs(e,t,[n,r,i],a,o){Vs(e,t[n],t[r],t[i],t.scale,a,o)}var Us=[`x`,`scaleX`,`originX`],Ws=[`y`,`scaleY`,`originY`];function Gs(e,t,n,r){Hs(e.x,t,Us,n?n.x:void 0,r?r.x:void 0),Hs(e.y,t,Ws,n?n.y:void 0,r?r.y:void 0)}function Ks(e){return e.translate===0&&e.scale===1}function qs(e){return Ks(e.x)&&Ks(e.y)}function Js(e,t){return e.min===t.min&&e.max===t.max}function Ys(e,t){return Js(e.x,t.x)&&Js(e.y,t.y)}function Xs(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Zs(e,t){return Xs(e.x,t.x)&&Xs(e.y,t.y)}function Qs(e){return Ms(e.x)/Ms(e.y)}function $s(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function ec(e){return[e(`x`),e(`y`)]}function tc(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var nc=[`TopLeft`,`TopRight`,`BottomLeft`,`BottomRight`],rc=nc.length,ic=e=>typeof e==`string`?parseFloat(e):e,ac=e=>typeof e==`number`||H.test(e);function oc(e,t,n,r,i,a){i?(e.opacity=W(0,n.opacity??1,cc(r)),e.opacityExit=W(t.opacity??1,0,lc(r))):a&&(e.opacity=W(t.opacity??1,n.opacity??1,r));for(let i=0;i<rc;i++){let a=`border${nc[i]}Radius`,o=sc(t,a),s=sc(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||ac(o)===ac(s)?(e[a]=Math.max(W(ic(o),ic(s),r),0),(mn.test(s)||mn.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=W(t.rotate||0,n.rotate||0,r))}function sc(e,t){return e[t]===void 0?e.borderRadius:e[t]}var cc=uc(0,.5,wt),lc=uc(.5,.95,it);function uc(e,t,n){return r=>r<e?0:r>t?1:n(st(e,t,r))}function dc(e,t,n){let r=na(e)?e:Zi(e);return r.start(Hi(``,r,t,n)),r.animation}function fc(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var pc=(e,t)=>e.depth-t.depth,mc=class{constructor(){this.children=[],this.isDirty=!1}add(e){Qe(this.children,e),this.isDirty=!0}remove(e){R(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(pc),this.isDirty=!1,this.children.forEach(e)}};function hc(e,t){let n=Ut.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(zt(r),e(a-t))};return B.setup(r,!0),()=>zt(r)}function gc(e){return na(e)?e.get():e}var _c=class{constructor(){this.members=[]}add(e){Qe(this.members,e),e.scheduleRender()}remove(e){if(R(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t=this.members.findIndex(t=>e===t);if(t===0)return!1;let n;for(let e=t;e>=0;e--){let t=this.members[e];if(t.isPresent!==!1){n=t;break}}return n?(this.promote(n),!0):!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender();let r=n.options.layoutDependency,i=e.options.layoutDependency;r!==void 0&&i!==void 0&&r===i||(e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0));let{crossfade:a}=e.options;a===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}},vc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},yc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},bc=[``,`X`,`Y`,`Z`],xc=1e3,Sc=0;function Cc(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function wc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=sa(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,B,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&wc(r)}function Tc({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Sc++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ft.value&&(yc.nodes=yc.calculatedTargetDeltas=yc.calculatedProjections=0),this.nodes.forEach(Oc),this.nodes.forEach(Fc),this.nodes.forEach(Ic),this.nodes.forEach(kc),Ft.addProjectionMetrics&&Ft.addProjectionMetrics(yc)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new mc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new ct),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Za(t)&&!Qa(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;B.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=hc(i,250),vc.hasAnimatedSinceResize&&(vc.hasAnimatedSinceResize=!1,this.nodes.forEach(Pc)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Uc,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Zs(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Bi(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||Pc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),zt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Lc),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&wc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(jc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Mc);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Nc),this.nodes.forEach(Ec),this.nodes.forEach(Dc)):this.nodes.forEach(Mc),this.clearAllSnapshots();let e=Ut.now();V.delta=z(0,1e3/60,e-V.timestamp),V.timestamp=e,V.isProcessing=!0,Bt.update.process(V),Bt.preRender.process(V),Bt.render.process(V),V.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Na.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Ac),this.sharedNodes.forEach(Rc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,B.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){B.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ms(this.snapshot.measuredBox.x)&&!Ms(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=K(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!qs(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||ko(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),qc(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return K();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Yc))){let{scroll:e}=this.root;e&&(zo(t.x,e.offset.x),zo(t.y,e.offset.y))}return t}removeElementScroll(e){let t=K();if(ws(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&ws(t,e),zo(t.x,i.offset.x),zo(t.y,i.offset.y))}return t}applyTransform(e,t=!1){let n=K();ws(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Vo(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),ko(r.latestValues)&&Vo(n,r.latestValues)}return ko(this.latestValues)&&Vo(n,this.latestValues),n}removeTransform(e){let t=K();ws(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!ko(n.latestValues))continue;Oo(n.latestValues)&&n.updateSnapshot();let r=K();ws(r,n.measurePageBox()),Gs(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return ko(this.latestValues)&&Gs(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==V.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=V.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=K(),this.targetWithTransforms=K()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Ls(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ws(this.target,this.layout.layoutBox),Fo(this.target,this.targetDelta)):ws(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Ft.value&&yc.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Oo(this.parent.latestValues)||Ao(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=K(),this.relativeTargetOrigin=K(),zs(this.relativeTargetOrigin,t,n),ws(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===V.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;ws(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Ro(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=K());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ts(this.prevProjectionDelta.x,this.projectionDelta.x),Ts(this.prevProjectionDelta.y,this.projectionDelta.y)),Fs(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!$s(this.projectionDelta.x,this.prevProjectionDelta.x)||!$s(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Ft.value&&yc.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=no(),this.projectionDelta=no(),this.projectionDeltaWithTransform=no()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=no();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=K(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Hc));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;zc(a.x,e.x,n),zc(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(zs(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Vc(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Ys(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=K(),ws(d,this.relativeTarget)),s&&(this.animationValues=i,oc(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(zt(this.pendingAnimation),void 0),this.pendingAnimation=B.update(()=>{vc.hasAnimatedSinceResize=!0,Wt.layout++,this.motionValue||=Zi(0),this.currentAnimation=dc(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Wt.layout--},onComplete:()=>{Wt.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(xc),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Jc(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||K();let t=Ms(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Ms(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}ws(t,n),Vo(t,i),Fs(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new _c),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&Cc(`z`,e,r,this.animationValues);for(let t=0;t<bc.length;t++)Cc(`rotate${bc[t]}`,e,r,this.animationValues),Cc(`skew${bc[t]}`,e,r,this.animationValues);for(let t in e.render(),r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=gc(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=gc(t?.pointerEvents)||``),this.hasProjected&&!ko(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=tc(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;for(let t in e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit,Qo){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Qo[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?gc(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(jc),this.root.sharedNodes.clear()}}}function Ec(e){e.updateLayout()}function Dc(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;i===`size`?ec(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Ms(r);r.min=n[e].min,r.max=r.min+i}):Jc(i,t.layoutBox,n)&&ec(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Ms(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=no();Fs(o,n,t.layoutBox);let s=no();a?Fs(s,e.applyTransform(r,!0),t.measuredBox):Fs(s,n,t.layoutBox);let c=!qs(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=K();zs(o,t.layoutBox,i.layoutBox);let s=K();zs(s,n,a.layoutBox),Zs(o,s)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Oc(e){Ft.value&&yc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function kc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Ac(e){e.clearSnapshot()}function jc(e){e.clearMeasurements()}function Mc(e){e.isLayoutDirty=!1}function Nc(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Pc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Fc(e){e.resolveTargetDelta()}function Ic(e){e.calcProjection()}function Lc(e){e.resetSkewAndRotation()}function Rc(e){e.removeLeadSnapshot()}function zc(e,t,n){e.translate=W(t.translate,0,n),e.scale=W(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Bc(e,t,n,r){e.min=W(t.min,n.min,r),e.max=W(t.max,n.max,r)}function Vc(e,t,n,r){Bc(e.x,t.x,n.x,r),Bc(e.y,t.y,n.y,r)}function Hc(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Uc={duration:.45,ease:[.4,0,.1,1]},Wc=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Gc=Wc(`applewebkit/`)&&!Wc(`chrome/`)?Math.round:it;function Kc(e){e.min=Gc(e.min),e.max=Gc(e.max)}function qc(e){Kc(e.x),Kc(e.y)}function Jc(e,t,n){return e===`position`||e===`preserve-aspect`&&!Ns(Qs(t),Qs(n),.2)}function Yc(e){return e!==e.root&&e.scroll?.wasRoot}var Xc=Tc({attachResizeListener:(e,t)=>fc(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Zc={current:void 0},Qc=Tc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Zc.current){let e=new Xc({});e.mount(window),e.setOptions({layoutScroll:!0}),Zc.current=e}return Zc.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),$c=(0,P.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function el(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function tl(...e){return t=>{let n=!1,r=e.map(e=>{let r=el(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():el(e[t],null)}}}}function nl(...e){return P.useCallback(tl(...e),e)}var rl=class extends P.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=Ma(e)&&e.offsetWidth||0,r=Ma(e)&&e.offsetHeight||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left,i.bottom=r-i.height-i.top}return null}componentDidUpdate(){}render(){return this.props.children}};function il({children:e,isPresent:t,anchorX:n,anchorY:r,root:i}){let a=(0,P.useId)(),o=(0,P.useRef)(null),s=(0,P.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=(0,P.useContext)($c),l=nl(o,e.props?.ref??e?.ref);return(0,P.useInsertionEffect)(()=>{let{width:e,height:l,top:u,left:d,right:f,bottom:p}=s.current;if(t||!o.current||!e||!l)return;let m=n===`left`?`left: ${d}`:`right: ${f}`,h=r===`bottom`?`bottom: ${p}`:`top: ${u}`;o.current.dataset.motionPopId=a;let g=document.createElement(`style`);c&&(g.nonce=c);let _=i??document.head;return _.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${m}px !important;
            ${h}px !important;
          }
        `),()=>{_.contains(g)&&_.removeChild(g)}},[t]),(0,I.jsx)(rl,{isPresent:t,childRef:o,sizeRef:s,children:P.cloneElement(e,{ref:l})})}var al=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Ye(ol),d=(0,P.useId)(),f=!0,p=(0,P.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,P.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),P.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),o===`popLayout`&&(e=(0,I.jsx)(il,{isPresent:n,anchorX:s,anchorY:c,root:l,children:e})),(0,I.jsx)(L.Provider,{value:p,children:e})};function ol(){return new Map}function sl(e=!0){let t=(0,P.useContext)(L);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,P.useId)();(0,P.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,P.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var cl=e=>e.key||``;function ll(e){let t=[];return P.Children.forEach(e,e=>{(0,P.isValidElement)(e)&&t.push(e)}),t}var ul=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=sl(o),f=(0,P.useMemo)(()=>ll(e),[e]),p=o&&!u?[]:f.map(cl),m=(0,P.useRef)(!0),h=(0,P.useRef)(f),g=Ye(()=>new Map),_=(0,P.useRef)(new Set),[v,y]=(0,P.useState)(f),[b,x]=(0,P.useState)(f);Ze(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=cl(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=cl(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(ll(e)),y(f),null}let{forceRender:C}=(0,P.useContext)(Je);return(0,I.jsx)(I.Fragment,{children:b.map(e=>{let v=cl(e),y=o&&!u?!1:f===b||p.includes(v);return(0,I.jsx)(al,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(_.current.add(v),g.has(v))g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},dl=(0,P.createContext)({strict:!1}),fl={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},pl=!1;function ml(){if(pl)return;let e={};for(let t in fl)e[t]={isEnabled:e=>fl[t].some(t=>!!e[t])};yo(e),pl=!0}function hl(){return ml(),bo()}function gl(e){let t=hl();for(let n in e)t[n]={...t[n],...e[n]};yo(t)}var _l=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(`.`));function vl(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||_l.has(e)}var yl=e=>!vl(e);function bl(e){typeof e==`function`&&(yl=t=>t.startsWith(`on`)?!vl(t):e(t))}try{bl((h(),a(ee)).default)}catch{}function xl(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||(yl(i)||n===!0&&vl(i)||!t&&!vl(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var Sl=(0,P.createContext)({});function Cl(e,t){if(mo(e)){let{initial:t,animate:n}=e;return{initial:t===!1||uo(t)?t:void 0,animate:uo(n)?n:void 0}}return e.inherit===!1?{}:t}function wl(e){let{initial:t,animate:n}=Cl(e,(0,P.useContext)(Sl));return(0,P.useMemo)(()=>({initial:t,animate:n}),[Tl(t),Tl(n)])}function Tl(e){return Array.isArray(e)?e.join(` `):e}var El=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Dl(e,t,n){for(let r in t)!na(t[r])&&!$o(r,n)&&(e[r]=t[r])}function Ol({transformTemplate:e},t){return(0,P.useMemo)(()=>{let n=El();return qo(n,t,e),Object.assign({},n.vars,n.style)},[t])}function kl(e,t){let n=e.style||{},r={};return Dl(r,n,e),Object.assign(r,Ol(e,t)),r}function Al(e,t){let n={},r=kl(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var jl=()=>({...El(),attrs:{}});function Ml(e,t,n,r){let i=(0,P.useMemo)(()=>{let n=jl();return ss(n,t,ls(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};Dl(t,e.style,e),i.style={...t,...i.style}}return i}var Nl=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Pl(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Nl.indexOf(e)>-1||/[A-Z]/u.test(e))}function Fl(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Pl(e)?Ml:Al)(t,r,i,e),c=xl(t,typeof e==`string`,a),l=e===P.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,P.useMemo)(()=>na(u)?u.get():u,[u]);return(0,P.createElement)(e,{...l,children:d})}function Il({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Ll(n,r,i,e),renderState:t()}}function Ll(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=gc(a[e]);let{initial:o,animate:s}=e,c=mo(e),l=ho(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!lo(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Wi(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Rl=e=>(t,n)=>{let r=(0,P.useContext)(Sl),i=(0,P.useContext)(L),a=()=>Il(e,t,r,i);return n?a():Ye(a)},zl=Rl({scrapeMotionValuesFromProps:es,createRenderState:El}),Bl=Rl({scrapeMotionValuesFromProps:ds,createRenderState:jl}),Vl=Symbol.for(`motionComponentSymbol`);function Hl(e,t,n){let r=(0,P.useRef)(n);(0,P.useInsertionEffect)(()=>{r.current=n});let i=(0,P.useRef)(null);return(0,P.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var Ul=(0,P.createContext)({});function Wl(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Gl(e,t,n,r,i,a){let{visualElement:o}=(0,P.useContext)(Sl),s=(0,P.useContext)(dl),c=(0,P.useContext)(L),l=(0,P.useContext)($c).reducedMotion,u=(0,P.useRef)(null),d=(0,P.useRef)(!1);r||=s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:l,isSVG:a}),d.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));let f=u.current,p=(0,P.useContext)(Ul);f&&!f.projection&&i&&(f.type===`html`||f.type===`svg`)&&Kl(u.current,n,i,p);let m=(0,P.useRef)(!1);(0,P.useInsertionEffect)(()=>{f&&m.current&&f.update(n,c)});let h=n[oa],g=(0,P.useRef)(!!h&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return Ze(()=>{d.current=!0,f&&(m.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),g.current&&f.animationState&&f.animationState.animateChanges())}),(0,P.useEffect)(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(h)}),!1),f.enteringChildren=void 0)}),f}function Kl(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:ql(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Wl(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:l})}function ql(e){if(e)return e.options.allowProjection===!1?ql(e.parent):e.projection}function Jl(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&gl(r);let a=n?n===`svg`:Pl(e),o=a?Bl:zl;function s(n,s){let c,l={...(0,P.useContext)($c),...n,layoutId:Yl(n)},{isStatic:u}=l,d=wl(n),f=o(n,u);if(!u&&Xe){Xl(l,r);let t=Zl(l);c=t.MeasureLayout,d.visualElement=Gl(e,f,l,i,t.ProjectionNode,a)}return(0,I.jsxs)(Sl.Provider,{value:d,children:[c&&d.visualElement?(0,I.jsx)(c,{visualElement:d.visualElement,...l}):null,Fl(e,n,Hl(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,P.forwardRef)(s);return c[Vl]=e,c}function Yl({layoutId:e}){let t=(0,P.useContext)(Je).id;return t&&e!==void 0?t+`-`+e:e}function Xl(e,t){(0,P.useContext)(dl).strict}function Zl(e){let{drag:t,layout:n}=hl();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Ql(e,t){if(typeof Proxy>`u`)return Jl;let n=new Map,r=(n,r)=>Jl(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Jl(a,void 0,e,t)),n.get(a))})}var $l=(e,t)=>t.isSVG??Pl(e)?new fs(t):new ns(t,{allowProjection:e!==P.Fragment}),eu=class extends Co{constructor(e){super(e),e.animationState||=ys(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();lo(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},tu=0,nu={animation:{Feature:eu},exit:{Feature:class extends Co{constructor(){super(...arguments),this.id=tu++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function ru(e){return{point:{x:e.pageX,y:e.pageY}}}var iu=e=>t=>Ha(t)&&e(t,ru(t));function au(e,t,n,r){return fc(e,t,iu(n),r)}var ou=({current:e})=>e?e.ownerDocument.defaultView:null,su=(e,t)=>Math.abs(e-t);function cu(e,t){let n=su(e.x,t.x),r=su(e.y,t.y);return Math.sqrt(n**2+r**2)}var lu=new Set([`auto`,`scroll`]),uu=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=pu(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=cu(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=V;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=du(t,this.transformPagePoint),B.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=pu(e.type===`pointercancel`?this.lastMoveEventInfo:du(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Ha(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=du(ru(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=V;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,pu(s,this.history)),this.removeListeners=ot(au(this.contextWindow,`pointermove`,this.handlePointerMove),au(this.contextWindow,`pointerup`,this.handlePointerUp),au(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(lu.has(e.overflowX)||lu.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener(`scroll`,this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),B.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),zt(this.updatePoint)}};function du(e,t){return t?{point:t(e.point)}:e}function fu(e,t){return{x:e.x-t.x,y:e.y-t.y}}function pu({point:e},t){return{point:e,delta:fu(e,hu(t)),offset:fu(e,mu(t)),velocity:gu(t,.1)}}function mu(e){return e[0]}function hu(e){return e[e.length-1]}function gu(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=hu(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>lt(t)));)n--;if(!r)return{x:0,y:0};let a=ut(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function _u(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?W(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?W(n,e,r.max):Math.min(e,n)),e}function vu(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function yu(e,{top:t,left:n,bottom:r,right:i}){return{x:vu(e.x,n,i),y:vu(e.y,t,r)}}function bu(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function xu(e,t){return{x:bu(e.x,t.x),y:bu(e.y,t.y)}}function Su(e,t){let n=.5,r=Ms(e),i=Ms(t);return i>r?n=st(t.min,t.max-r,e.min):r>i&&(n=st(e.min,e.max-i,t.min)),z(0,1,n)}function Cu(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var wu=.35;function Tu(e=wu){return e===!1?e=0:e===!0&&(e=wu),{x:Eu(e,`left`,`right`),y:Eu(e,`top`,`bottom`)}}function Eu(e,t,n){return{min:Du(e,t),max:Du(e,n)}}function Du(e,t){return typeof e==`number`?e:e[t]||0}var Ou=new WeakMap,ku=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=K(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t?(this.stopAnimation(),this.snapToCursor(ru(e).point)):this.pauseAnimation()},a=(e,t)=>{this.stopAnimation();let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=La(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ec(e=>{let t=this.getAxisMotionValue(e).get()||0;if(mn.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Ms(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&B.postRender(()=>i(e,t)),ia(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=ju(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&a(e,t)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>ec(e=>this.getAnimationState(e)===`paused`&&this.getAxisMotionValue(e).animation?.play()),{dragSnapToOrigin:l}=this.getProps();this.panSession=new uu(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:ou(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&B.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Au(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=_u(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Wl(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=yu(n.layoutBox,e):this.constraints=!1,this.elastic=Tu(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&ec(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=Cu(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Wl(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Uo(n,r.root,this.visualElement.getTransformPagePoint()),a=xu(r.layout.layoutBox,i);if(t){let e=t(To(a));this.hasMutatedConstraints=!!e,e&&(a=wo(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=ec(o=>{if(!Au(o,t,this.currentDirection))return;let c=s&&s[o]||{};a&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return ia(this.visualElement,e),n.start(Hi(e,n,0,t,this.visualElement,!1))}stopAnimation(){ec(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ec(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){ec(t=>{let{drag:n}=this.getProps();if(!Au(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-W(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Wl(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};ec(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=Su({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),ec(t=>{if(!Au(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(W(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;Ou.set(this.visualElement,this);let e=this.visualElement.current,t=au(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Wa(i);n&&r&&!a&&this.start(t)}),n=()=>{let{dragConstraints:e}=this.getProps();Wl(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener(`measure`,n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),B.read(n);let a=fc(window,`resize`,()=>this.scalePositionWithinConstraints()),o=r.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(ec(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{a(),t(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=wu,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Au(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function ju(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Mu=class extends Co{constructor(e){super(e),this.removeGroupControls=it,this.removeListeners=it,this.controls=new ku(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||it}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Nu=e=>(t,n)=>{e&&B.postRender(()=>e(t,n))},Pu=class extends Co{constructor(){super(...arguments),this.removePointerDownListener=it}onPointerDown(e){this.session=new uu(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ou(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Nu(e),onStart:Nu(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&B.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=au(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Fu=!1,Iu=class extends P.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Fu&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),vc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Fu=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||B.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Na.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Fu=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Lu(e){let[t,n]=sl(),r=(0,P.useContext)(Je);return(0,I.jsx)(Iu,{...e,layoutGroup:r,switchLayoutGroup:(0,P.useContext)(Ul),isPresent:t,safeToRemove:n})}var Ru={pan:{Feature:Pu},drag:{Feature:Mu,ProjectionNode:Qc,MeasureLayout:Lu}};function zu(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&B.postRender(()=>i(t,ru(t)))}var Bu=class extends Co{mount(){let{current:e}=this.node;e&&(this.unmount=Ba(e,(e,t)=>(zu(this.node,t,`Start`),e=>zu(this.node,e,`End`))))}unmount(){}},Vu=class extends Co{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=ot(fc(this.node.current,`focus`,()=>this.onFocus()),fc(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Hu(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&B.postRender(()=>i(t,ru(t)))}var Uu=class extends Co{mount(){let{current:e}=this.node;e&&(this.unmount=Xa(e,(e,t)=>(Hu(this.node,t,`Start`),(e,{success:t})=>Hu(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}},Wu=new WeakMap,Gu=new WeakMap,Ku=e=>{let t=Wu.get(e.target);t&&t(e)},qu=e=>{e.forEach(Ku)};function Ju({root:e,...t}){let n=e||document;Gu.has(n)||Gu.set(n,{});let r=Gu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(qu,{root:e,...t})),r[i]}function Yu(e,t,n){let r=Ju(t);return Wu.set(e,n),r.observe(e),()=>{Wu.delete(e),r.unobserve(e)}}var Xu={some:0,all:1},Zu=class extends Co{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Xu[r]};return Yu(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Qu(e,t))&&this.startObserver()}unmount(){}};function Qu({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var $u={inView:{Feature:Zu},tap:{Feature:Uu},focus:{Feature:Vu},hover:{Feature:Bu}},ed={layout:{ProjectionNode:Qc,MeasureLayout:Lu}},td=Ql({...nu,...$u,...Ru,...ed},$l),nd=A(`anchor`,[[`path`,{d:`M12 6v16`,key:`nqf5sj`}],[`path`,{d:`m19 13 2-1a9 9 0 0 1-18 0l2 1`,key:`y7qv08`}],[`path`,{d:`M9 11h6`,key:`1fldmi`}],[`circle`,{cx:`12`,cy:`4`,r:`2`,key:`muu5ef`}]]),rd=A(`aperture`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m14.31 8 5.74 9.94`,key:`1y6ab4`}],[`path`,{d:`M9.69 8h11.48`,key:`1wxppr`}],[`path`,{d:`m7.38 12 5.74-9.94`,key:`1grp0k`}],[`path`,{d:`M9.69 16 3.95 6.06`,key:`libnyf`}],[`path`,{d:`M14.31 16H2.83`,key:`x5fava`}],[`path`,{d:`m16.62 12-5.74 9.94`,key:`1vwawt`}]]),id=A(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),ad=A(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),od=A(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),sd=A(`axe`,[[`path`,{d:`m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9`,key:`5z9253`}],[`path`,{d:`M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z`,key:`19zklq`}]]),cd=A(`battery-charging`,[[`path`,{d:`m11 7-3 5h4l-3 5`,key:`b4a64w`}],[`path`,{d:`M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935`,key:`lre1cr`}],[`path`,{d:`M22 14v-4`,key:`14q9d5`}],[`path`,{d:`M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936`,key:`13q5k0`}]]),ld=A(`bone`,[[`path`,{d:`M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z`,key:`w610uw`}]]),ud=A(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),dd=A(`book`,[[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),fd=A(`bow-arrow`,[[`path`,{d:`M17 3h4v4`,key:`19p9u1`}],[`path`,{d:`M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17`,key:`12t3w9`}],[`path`,{d:`M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05`,key:`ogng5l`}],[`path`,{d:`M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z`,key:`8v3fy2`}],[`path`,{d:`M9.707 14.293 21 3`,key:`ydm3bn`}]]),pd=A(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),md=A(`carrot`,[[`path`,{d:`M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46`,key:`rfqxbe`}],[`path`,{d:`M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z`,key:`6b25w4`}],[`path`,{d:`M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z`,key:`fn65lo`}]]),hd=A(`castle`,[[`path`,{d:`M10 5V3`,key:`1y54qe`}],[`path`,{d:`M14 5V3`,key:`m6isi`}],[`path`,{d:`M15 21v-3a3 3 0 0 0-6 0v3`,key:`lbp5hj`}],[`path`,{d:`M18 3v8`,key:`2ollhf`}],[`path`,{d:`M18 5H6`,key:`98imr9`}],[`path`,{d:`M22 11H2`,key:`1lmjae`}],[`path`,{d:`M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9`,key:`1rly83`}],[`path`,{d:`M6 3v8`,key:`csox7g`}]]),gd=A(`circle-arrow-right`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m12 16 4-4-4-4`,key:`1i9zcv`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}]]),_d=A(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),vd=A(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),yd=A(`clock`,[[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),bd=A(`cloud-lightning`,[[`path`,{d:`M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973`,key:`1cez44`}],[`path`,{d:`m13 12-3 5h4l-3 5`,key:`1t22er`}]]),xd=A(`coins`,[[`circle`,{cx:`8`,cy:`8`,r:`6`,key:`3yglwk`}],[`path`,{d:`M18.09 10.37A6 6 0 1 1 10.34 18`,key:`t5s6rm`}],[`path`,{d:`M7 6h1v4`,key:`1obek4`}],[`path`,{d:`m16.71 13.88.7.71-2.82 2.82`,key:`1rbuyh`}]]),Sd=A(`compass`,[[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,key:`9ktpf1`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Cd=A(`cross`,[[`path`,{d:`M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z`,key:`1xbrqy`}]]),wd=A(`dollar-sign`,[[`line`,{x1:`12`,x2:`12`,y1:`2`,y2:`22`,key:`7eqyqh`}],[`path`,{d:`M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6`,key:`1b0p4s`}]]),Td=A(`drama`,[[`path`,{d:`M10 11h.01`,key:`d2at3l`}],[`path`,{d:`M14 6h.01`,key:`k028ub`}],[`path`,{d:`M18 6h.01`,key:`1v4wsw`}],[`path`,{d:`M6.5 13.1h.01`,key:`1748ia`}],[`path`,{d:`M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3`,key:`172yzv`}],[`path`,{d:`M17.4 9.9c-.8.8-2 .8-2.8 0`,key:`1obv0w`}],[`path`,{d:`M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7`,key:`rqjl8i`}],[`path`,{d:`M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4`,key:`1mr6wy`}]]),Ed=A(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Dd=A(`fan`,[[`path`,{d:`M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z`,key:`484a7f`}],[`path`,{d:`M12 12v.01`,key:`u5ubse`}]]),Od=A(`feather`,[[`path`,{d:`M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z`,key:`18jl4k`}],[`path`,{d:`M16 8 2 22`,key:`vp34q`}],[`path`,{d:`M17.5 15H9`,key:`1oz8nu`}]]),kd=A(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),Ad=A(`flower`,[[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}],[`path`,{d:`M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5`,key:`14wa3c`}],[`path`,{d:`M12 7.5V9`,key:`1oy5b0`}],[`path`,{d:`M7.5 12H9`,key:`eltsq1`}],[`path`,{d:`M16.5 12H15`,key:`vk5kw4`}],[`path`,{d:`M12 16.5V15`,key:`k7eayi`}],[`path`,{d:`m8 8 1.88 1.88`,key:`nxy4qf`}],[`path`,{d:`M14.12 9.88 16 8`,key:`1lst6k`}],[`path`,{d:`m8 16 1.88-1.88`,key:`h2eex1`}],[`path`,{d:`M14.12 14.12 16 16`,key:`uqkrx3`}]]),jd=A(`heart-crack`,[[`path`,{d:`M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15`,key:`idzbju`}],[`path`,{d:`M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z`,key:`1su70f`}]]),Md=A(`heart-plus`,[[`path`,{d:`m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49`,key:`wg5jx`}],[`path`,{d:`M15 15h6`,key:`1u4692`}],[`path`,{d:`M18 12v6`,key:`1houu1`}]]),Nd=A(`heart`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]),Pd=A(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),Fd=A(`minimize-2`,[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]),Id=A(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),Ld=A(`music`,[[`path`,{d:`M9 18V5l12-2v13`,key:`1jmyc2`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}],[`circle`,{cx:`18`,cy:`16`,r:`3`,key:`1hluhg`}]]),Rd=A(`octagon-x`,[[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,key:`2d38gg`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),zd=A(`pickaxe`,[[`path`,{d:`m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999`,key:`1lw9ds`}],[`path`,{d:`M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024`,key:`ffj4ej`}],[`path`,{d:`M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069`,key:`8tj4zw`}],[`path`,{d:`M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z`,key:`hh6h97`}]]),Bd=A(`shell`,[[`path`,{d:`M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44`,key:`1cn552`}]]),Vd=A(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),Hd=A(`skull`,[[`path`,{d:`m12.5 17-.5-1-.5 1h1z`,key:`3me087`}],[`path`,{d:`M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z`,key:`1o5pge`}],[`circle`,{cx:`15`,cy:`12`,r:`1`,key:`1tmaij`}],[`circle`,{cx:`9`,cy:`12`,r:`1`,key:`1vctgf`}]]),Ud=A(`snowflake`,[[`path`,{d:`m10 20-1.25-2.5L6 18`,key:`18frcb`}],[`path`,{d:`M10 4 8.75 6.5 6 6`,key:`7mghy3`}],[`path`,{d:`m14 20 1.25-2.5L18 18`,key:`1chtki`}],[`path`,{d:`m14 4 1.25 2.5L18 6`,key:`1b4wsy`}],[`path`,{d:`m17 21-3-6h-4`,key:`15hhxa`}],[`path`,{d:`m17 3-3 6 1.5 3`,key:`11697g`}],[`path`,{d:`M2 12h6.5L10 9`,key:`kv9z4n`}],[`path`,{d:`m20 10-1.5 2 1.5 2`,key:`1swlpi`}],[`path`,{d:`M22 12h-6.5L14 15`,key:`1mxi28`}],[`path`,{d:`m4 10 1.5 2L4 14`,key:`k9enpj`}],[`path`,{d:`m7 21 3-6-1.5-3`,key:`j8hb9u`}],[`path`,{d:`m7 3 3 6h4`,key:`1otusx`}]]),Wd=A(`squirrel`,[[`path`,{d:`M15.236 22a3 3 0 0 0-2.2-5`,key:`21bitc`}],[`path`,{d:`M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4`,key:`oh0fg0`}],[`path`,{d:`M18 13h.01`,key:`9veqaj`}],[`path`,{d:`M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10`,key:`980v8a`}]]),Gd=A(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),Kd=A(`sword`,[[`path`,{d:`m11 19-6-6`,key:`s7kpr`}],[`path`,{d:`m5 21-2-2`,key:`1kw20b`}],[`path`,{d:`m8 16-4 4`,key:`1oqv8h`}],[`path`,{d:`M9.5 17.5 21 6V3h-3L6.5 14.5`,key:`pkxemp`}]]),qd=A(`swords`,[[`polyline`,{points:`14.5 17.5 3 6 3 3 6 3 17.5 14.5`,key:`1hfsw2`}],[`line`,{x1:`13`,x2:`19`,y1:`19`,y2:`13`,key:`1vrmhu`}],[`line`,{x1:`16`,x2:`20`,y1:`16`,y2:`20`,key:`1bron3`}],[`line`,{x1:`19`,x2:`21`,y1:`21`,y2:`19`,key:`13pww6`}],[`polyline`,{points:`14.5 6.5 18 3 21 3 21 6 17.5 9.5`,key:`hbey2j`}],[`line`,{x1:`5`,x2:`9`,y1:`14`,y2:`18`,key:`1hf58s`}],[`line`,{x1:`7`,x2:`4`,y1:`17`,y2:`20`,key:`pidxm4`}],[`line`,{x1:`3`,x2:`5`,y1:`19`,y2:`21`,key:`1pehsh`}]]),Jd=A(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),Yd=A(`test-tube-diagonal`,[[`path`,{d:`M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3`,key:`1ub6xw`}],[`path`,{d:`m16 2 6 6`,key:`1gw87d`}],[`path`,{d:`M12 16H4`,key:`1cjfip`}]]),Xd=A(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),Zd=A(`wand`,[[`path`,{d:`M15 4V2`,key:`z1p9b7`}],[`path`,{d:`M15 16v-2`,key:`px0unx`}],[`path`,{d:`M8 9h2`,key:`1g203m`}],[`path`,{d:`M20 9h2`,key:`19tzq7`}],[`path`,{d:`M17.8 11.8 19 13`,key:`yihg8r`}],[`path`,{d:`M15 9h.01`,key:`x1ddxp`}],[`path`,{d:`M17.8 6.2 19 5`,key:`fd4us0`}],[`path`,{d:`m3 21 9-9`,key:`1jfql5`}],[`path`,{d:`M12.2 6.2 11 5`,key:`i3da3b`}]]),Qd=A(`wind`,[[`path`,{d:`M12.8 19.6A2 2 0 1 0 14 16H2`,key:`148xed`}],[`path`,{d:`M17.5 8a2.5 2.5 0 1 1 2 4H2`,key:`1u4tom`}],[`path`,{d:`M9.8 4.4A2 2 0 1 1 11 8H2`,key:`75valh`}]]),$d=A(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]),ef=!1;function tf(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function nf(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var rf=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!ef:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(nf(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=tf(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),af=`-ms-`,of=`-moz-`,q=`-webkit-`,sf=`comm`,cf=`rule`,lf=`decl`,uf=`@import`,df=`@keyframes`,ff=`@layer`,pf=Math.abs,mf=String.fromCharCode,hf=Object.assign;function gf(e,t){return bf(e,0)^45?(((t<<2^bf(e,0))<<2^bf(e,1))<<2^bf(e,2))<<2^bf(e,3):0}function _f(e){return e.trim()}function vf(e,t){return(e=t.exec(e))?e[0]:e}function J(e,t,n){return e.replace(t,n)}function yf(e,t){return e.indexOf(t)}function bf(e,t){return e.charCodeAt(t)|0}function xf(e,t,n){return e.slice(t,n)}function Sf(e){return e.length}function Cf(e){return e.length}function wf(e,t){return t.push(e),e}function Tf(e,t){return e.map(t).join(``)}var Ef=1,Df=1,Of=0,kf=0,Y=0,Af=``;function jf(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ef,column:Df,length:o,return:``}}function Mf(e,t){return hf(jf(``,null,null,``,null,null,0),e,{length:-e.length},t)}function Nf(){return Y}function Pf(){return Y=kf>0?bf(Af,--kf):0,Df--,Y===10&&(Df=1,Ef--),Y}function Ff(){return Y=kf<Of?bf(Af,kf++):0,Df++,Y===10&&(Df=1,Ef++),Y}function If(){return bf(Af,kf)}function Lf(){return kf}function Rf(e,t){return xf(Af,e,t)}function zf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Bf(e){return Ef=Df=1,Of=Sf(Af=e),kf=0,[]}function Vf(e){return Af=``,e}function Hf(e){return _f(Rf(kf-1,Gf(e===91?e+2:e===40?e+1:e)))}function Uf(e){for(;(Y=If())&&Y<33;)Ff();return zf(e)>2||zf(Y)>3?``:` `}function Wf(e,t){for(;--t&&Ff()&&!(Y<48||Y>102||Y>57&&Y<65||Y>70&&Y<97););return Rf(e,Lf()+(t<6&&If()==32&&Ff()==32))}function Gf(e){for(;Ff();)switch(Y){case e:return kf;case 34:case 39:e!==34&&e!==39&&Gf(Y);break;case 40:e===41&&Gf(e);break;case 92:Ff();break}return kf}function Kf(e,t){for(;Ff()&&e+Y!==57&&!(e+Y===84&&If()===47););return`/*`+Rf(t,kf-1)+`*`+mf(e===47?e:Ff())}function qf(e){for(;!zf(If());)Ff();return Rf(e,kf)}function Jf(e){return Vf(Yf(``,null,null,null,[``],e=Bf(e),0,[0],e))}function Yf(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Ff()){case 40:if(m!=108&&bf(C,d-1)==58){yf(C+=J(Hf(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Hf(v);break;case 9:case 10:case 13:case 32:C+=Uf(m);break;case 92:C+=Wf(Lf()-1,7);continue;case 47:switch(If()){case 42:case 47:wf(Zf(Kf(Ff(),Lf()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=Sf(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=J(C,/\f/g,``)),p>0&&Sf(C)-d&&wf(p>32?Qf(C+`;`,r,n,d-1):Qf(J(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(wf(S=Xf(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)Yf(C,t,S,S,b,a,d,s,x);else switch(f===99&&bf(C,3)===110?100:f){case 100:case 108:case 109:case 115:Yf(e,S,S,r&&wf(Xf(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:Yf(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Sf(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Pf()==125)continue}switch(C+=mf(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Sf(C)-1)*_,_=1;break;case 64:If()===45&&(C+=Hf(Ff())),f=If(),u=d=Sf(y=C+=qf(Lf())),v++;break;case 45:m===45&&Sf(C)==2&&(h=0)}}return a}function Xf(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=Cf(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=xf(e,d+1,d=pf(h=o[m])),y=e;_<p;++_)(y=_f(h>0?f[_]+` `+v:J(v,/&\f/g,f[_])))&&(c[g++]=y);return jf(e,t,n,i===0?cf:s,c,l,u)}function Zf(e,t,n){return jf(e,t,n,sf,mf(Nf()),xf(e,2,-2),0)}function Qf(e,t,n,r){return jf(e,t,n,lf,xf(e,0,r),xf(e,r+1,-1),r)}function $f(e,t){for(var n=``,r=Cf(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function ep(e,t,n,r){switch(e.type){case ff:if(e.children.length)break;case uf:case lf:return e.return=e.return||e.value;case sf:return``;case df:return e.return=e.value+`{`+$f(e.children,r)+`}`;case cf:e.value=e.props.join(`,`)}return Sf(n=$f(e.children,r))?e.return=e.value+`{`+n+`}`:``}function tp(e){var t=Cf(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function np(e){return function(t){t.root||(t=t.return)&&e(t)}}var rp=function(e,t,n){for(var r=0,i=0;r=i,i=If(),r===38&&i===12&&(t[n]=1),!zf(i);)Ff();return Rf(e,kf)},ip=function(e,t){var n=-1,r=44;do switch(zf(r)){case 0:r===38&&If()===12&&(t[n]=1),e[n]+=rp(kf-1,t,n);break;case 2:e[n]+=Hf(r);break;case 4:if(r===44){e[++n]=If()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=mf(r)}while(r=Ff());return e},ap=function(e,t){return Vf(ip(Bf(e),t))},op=new WeakMap,sp=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!op.get(n))&&!r){op.set(e,!0);for(var i=[],a=ap(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},cp=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function lp(e,t){switch(gf(e,t)){case 5103:return q+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+of+e+af+e+e;case 6828:case 4268:return q+e+af+e+e;case 6165:return q+e+af+`flex-`+e+e;case 5187:return q+e+J(e,/(\w+).+(:[^]+)/,q+`box-$1$2`+af+`flex-$1$2`)+e;case 5443:return q+e+af+`flex-item-`+J(e,/flex-|-self/,``)+e;case 4675:return q+e+af+`flex-line-pack`+J(e,/align-content|flex-|-self/,``)+e;case 5548:return q+e+af+J(e,`shrink`,`negative`)+e;case 5292:return q+e+af+J(e,`basis`,`preferred-size`)+e;case 6060:return q+`box-`+J(e,`-grow`,``)+q+e+af+J(e,`grow`,`positive`)+e;case 4554:return q+J(e,/([^-])(transform)/g,`$1`+q+`$2`)+e;case 6187:return J(J(J(e,/(zoom-|grab)/,q+`$1`),/(image-set)/,q+`$1`),e,``)+e;case 5495:case 3959:return J(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return J(J(e,/(.+:)(flex-)?(.*)/,q+`box-pack:$3`+af+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+q+e+e;case 4095:case 3583:case 4068:case 2532:return J(e,/(.+)-inline(.+)/,q+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Sf(e)-1-t>6)switch(bf(e,t+1)){case 109:if(bf(e,t+4)!==45)break;case 102:return J(e,/(.+:)(.+)-([^]+)/,`$1`+q+`$2-$3$1`+of+(bf(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~yf(e,`stretch`)?lp(J(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(bf(e,t+1)!==115)break;case 6444:switch(bf(e,Sf(e)-3-(~yf(e,`!important`)&&10))){case 107:return J(e,`:`,`:`+q)+e;case 101:return J(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+q+(bf(e,14)===45?`inline-`:``)+`box$3$1`+q+`$2$3$1`+af+`$2box$3`)+e}break;case 5936:switch(bf(e,t+11)){case 114:return q+e+af+J(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return q+e+af+J(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return q+e+af+J(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return q+e+af+e+e}return e}var up=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case lf:e.return=lp(e.value,e.length);break;case df:return $f([Mf(e,{value:J(e.value,`@`,`@`+q)})],r);case cf:if(e.length)return Tf(e.props,function(t){switch(vf(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return $f([Mf(e,{props:[J(t,/:(read-\w+)/,`:`+of+`$1`)]})],r);case`::placeholder`:return $f([Mf(e,{props:[J(t,/:(plac\w+)/,`:`+q+`input-$1`)]}),Mf(e,{props:[J(t,/:(plac\w+)/,`:`+of+`$1`)]}),Mf(e,{props:[J(t,/:(plac\w+)/,af+`input-$1`)]})],r)}return``})}}],dp=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||up,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[sp,cp],l,u=[ep,np(function(e){l.insert(e)})],d=tp(c.concat(r,u)),f=function(e){return $f(Jf(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new rf({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},fp=!0;function pp(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var mp=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||fp===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},hp=function(e,t,n){mp(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function gp(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}w();var _p=!1,vp=/[A-Z]|^ms/g,yp=/_EMO_([^_]+?)_([^]*?)_EMO_/g,bp=function(e){return e.charCodeAt(1)===45},xp=function(e){return e!=null&&typeof e!=`boolean`},Sp=S(function(e){return bp(e)?e:e.replace(vp,`-$&`).toLowerCase()}),Cp=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(yp,function(e,t,n){return Op={name:t,styles:n,next:Op},t})}return x[e]!==1&&!bp(e)&&typeof t==`number`&&t!==0?t+`px`:t},wp=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;function Tp(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return Op={name:i.name,styles:i.styles,next:Op},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Op={name:o.name,styles:o.styles,next:Op},o=o.next;return a.styles+`;`}return Ep(e,t,n);case`function`:if(e!==void 0){var s=Op,c=n(e);return Op=s,Tp(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function Ep(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Tp(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:xp(s)&&(r+=Sp(a)+`:`+Cp(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&_p)throw Error(wp);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)xp(o[c])&&(r+=Sp(a)+`:`+Cp(a,o[c])+`;`);else{var l=Tp(e,t,o);switch(a){case`animation`:case`animationName`:r+=Sp(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}var Dp=/label:\s*([^\s;{]+)\s*(;|$)/g,Op;function kp(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Op=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=Tp(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=Tp(n,t,e[o]),r&&(i+=a[o]);Dp.lastIndex=0;for(var s=``,c;(c=Dp.exec(i))!==null;)s+=`-`+c[1];return{name:gp(i)+s,styles:i,next:Op}}var Ap=function(e){return e()},jp=P.useInsertionEffect?P.useInsertionEffect:!1,Mp=jp||Ap;jp||P.useLayoutEffect;var Np=P.createContext(typeof HTMLElement<`u`?dp({key:`css`}):null);Np.Provider;var Pp=function(e){return(0,P.forwardRef)(function(t,n){return e(t,(0,P.useContext)(Np),n)})},Fp=P.createContext({});({}).hasOwnProperty,h();var Ip=!1,Lp=g,Rp=function(e){return e!==`theme`},zp=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?Lp:Rp},Bp=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},Vp=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return mp(t,n,r),Mp(function(){return hp(t,n,r)}),null},Hp=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=Bp(t,n,r),c=s||zp(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=Pp(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=P.useContext(Fp)}typeof e.className==`string`?a=pp(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=kp(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?zp(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),P.createElement(P.Fragment,null,P.createElement(Vp,{cache:t,serialized:m,isStringTag:typeof r==`string`}),P.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,`toString`,{value:function(){return o===void 0&&Ip?`NO_COMPONENT_SELECTOR`:`.`+o}}),h.withComponent=function(t,r){return e(t,ce({},n,r,{shouldForwardProp:Bp(h,r,!0)})).apply(void 0,d)},h}},Up=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),Wp=Hp.bind(null);Up.forEach(function(e){Wp[e]=Wp(e)});const Gp=Wp.div({position:`relative`,display:`flex`,height:`100vh`,flexDirection:`column`,backgroundColor:`transparent`}),Kp=T.div`
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
`,qp=T(td.div)`
  ${{position:`fixed`,bottom:`0`,left:`0`,top:`0`,zIndex:`1000`,display:`flex`,width:`150px`,flexDirection:`column`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}}
  background-color: ${e=>f(e.theme.BACKGROUND,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 16px;
`,Jp=T.div`
  ${{flex:`none`,padding:`1.25rem`}}
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  background-color: ${e=>e.theme.OFFSET};
  border-radius: 12px 12px 0 0;
`,Yp=T.div`
  ${{marginTop:`0.25rem`,flex:`1 1 0%`,placeContent:`center`,fontSize:`0.875rem`}}
  padding: 2px 6px;
  color: ${e=>f(e.theme.PRIMARY,.7)};
`,Xp=T.h2`
  ${{margin:`0`,marginBottom:`0.5rem`,fontSize:`1.125rem`}}
  color: ${e=>e.theme.PRIMARY};
`,Zp=T.p`
  ${{margin:`0`,fontSize:`0.875rem`}}
  color: ${e=>f(e.theme.PRIMARY,.7)};
`;Wp.div({flex:`1 1 0%`});const Qp=T.nav`
  ${{flex:`none`,paddingLeft:`0`,paddingRight:`0`,paddingBottom:`50px`,paddingTop:`0.5rem`}}
  border-top: 1px solid ${e=>e.theme.BORDER};
`,$p=T.button`
  ${{width:`100%`,cursor:`pointer`,borderStyle:`none`,paddingLeft:`1.25rem`,paddingRight:`1.25rem`,paddingTop:`0.75rem`,paddingBottom:`0.75rem`,textAlign:`left`,fontSize:`15px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isActive?e.theme.OFFSET:`transparent`};
  color: ${e=>e.theme.PRIMARY};
  font-weight: ${e=>e.$isActive?600:400};
  
  &:hover {
    background-color: ${e=>f(e.theme.OFFSET,.5)};
  }
`,em=Wp.div({position:`fixed`,bottom:`0`,left:`0`,right:`0`,top:`0`,zIndex:`999`,backgroundColor:`rgba(0, 0, 0, 0.6)`}),tm=Wp.div({position:`fixed`,bottom:`2px`,left:`2px`,zIndex:`1000`,display:`flex`,height:`3rem`,width:`3rem`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}),nm=T.button`
  ${{position:`fixed`,zIndex:`1001`,display:`flex`,height:`2.5rem`,width:`2.5rem`,cursor:`pointer`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-shadow":`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,"--tw-shadow-colored":`0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color)`,boxShadow:`var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)`}}
  background-color: ${e=>f(e.theme.BACKGROUND,.75)};
  border: 2px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
`,rm=({isOpen:e,currentPage:t,onToggle:n,onNavigate:r,canAccessInitiativeList:i=!0})=>{let{theme:a}=qe(),o=F(e=>e.playerData),s=String(o?.role||``).toUpperCase()===`GM`;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ul,{children:e&&(0,I.jsxs)(qp,{theme:a,initial:{x:-300},animate:{x:0},exit:{x:-300},transition:{type:`tween`,duration:.3},style:{boxShadow:`4px 0 12px rgba(0, 0, 0, 0.15)`},children:[(0,I.jsxs)(Jp,{theme:a,children:[(0,I.jsx)(Xp,{theme:a,children:`Forge!`}),(0,I.jsx)(Zp,{theme:a,children:`Beta Testing!`})]}),(0,I.jsxs)(Yp,{theme:a,children:[`Thanks for checking it out!  Please report any bugs/issues to the`,(0,I.jsx)(`a`,{href:`https://discord.gg/Kh9hbHAZnX`,target:`_blank`,rel:`noreferrer`,children:` Battle-System Discord`}),`.`]}),(0,I.jsxs)(Qp,{theme:a,children:[i&&(0,I.jsx)($p,{theme:a,$isActive:t===`ForgeMain`,onClick:()=>r(`ForgeMain`),children:`Main`}),(0,I.jsx)($p,{theme:a,$isActive:t===`Party`,onClick:()=>r(`Party`),children:`Party`}),(0,I.jsx)($p,{theme:a,$isActive:t===`ChatLog`,onClick:()=>r(`ChatLog`),children:`System Log`}),s&&(0,I.jsx)($p,{theme:a,$isActive:t===`System`,onClick:()=>r(`System`),children:`System`}),s&&(0,I.jsx)($p,{theme:a,$isActive:t===`Settings`,onClick:()=>r(`Settings`),children:`Settings`})]})]})}),e&&(0,I.jsx)(em,{onClick:n}),(0,I.jsx)(tm,{children:(0,I.jsx)(nm,{theme:a,onClick:n,children:(0,I.jsx)(de,{size:24})})})]})},im=T.div`
  padding: 20px;
  color: ${e=>e.theme.PRIMARY};
  min-height: 100vh;
`,am=T.h1`
  color: ${e=>e.theme.PRIMARY};
  background-color: ${e=>e.theme.OFFSET};
  padding: 2px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  font-variant: small-caps;
`,om=T.div`
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
`;const sm=T.button`
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
`,cm=T.input`
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
`;var lm=T.button`
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
`;const X=({label:e,isOn:t,onChange:n})=>{let{theme:r}=qe();return(0,I.jsx)(lm,{theme:r,$isOn:t,onClick:()=>{let r=!t;O.log(`${e}: ${r}`),n(r)},role:`switch`,"aria-checked":t,"aria-label":e})};var um=T.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,dm=T.div`
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
`,fm=T.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 15px 0;
  font-size: 18px;
`,pm=T.div`
  margin: 0 0 20px 0;
`,mm=T.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;const hm=({isOpen:e,title:t,onClose:n,children:r,actions:i,closeOnOverlayClick:a=!0,minWidth:o,maxWidth:s})=>{let{theme:c}=qe();return e?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(um,{onClick:a?n:void 0}),(0,I.jsxs)(dm,{theme:c,$minWidth:o,$maxWidth:s,onClick:e=>e.stopPropagation(),children:[t&&(0,I.jsx)(fm,{theme:c,children:t}),(0,I.jsx)(pm,{children:r}),i&&(0,I.jsx)(mm,{children:i})]})]}):null},Z={reverseInitiative:`Sorts initiative from low to high instead of high to low.`,popcornInitiative:`Lets players choose the next acting unit manually instead of following initiative order.`,initiativeDie:`Sets the die used when rolling initiative from the list (for example D20).`,initiativeModifierAttr:`Selects the numeric attribute used in initiative modifier math.`,initiativeModifierMath:`Math formula applied to the selected attribute. Use @STAT as the attribute value.`,showCardColumn:`Shows a quick-access column to open each unit's card/stat block.`,showPlayerView:`Allows Players to access the Initiative List view. If disabled, Players are routed away from the list.`,showNonPartyUnits:`If disabled, non-party unit stats are obscured for Players while keeping turn order visibility.`,showHpNumbersOnList:`If disabled, Players do not see exact HP/Max HP values in the Initiative List for non-owned units.`,ownerOnlyEdit:`Restricts editing controls to GMs and token owners.`,showAdjustHpContextMenu:`Shows or hides context menu options used to modify HP quickly.`,showViewUnitContextMenuForPlayers:`Shows or hides the View Unit right-click context menu option for Players while keeping it available for GMs.`,showHpBarsOnTokens:`Displays graphical HP bars on tokens in the scene.`,hpOrientation:`Sets where HP bars or HP numbers are anchored relative to tokens.`,showHpNumbersOnTokens:`Displays current/max HP numbers directly on tokens.`,showDeathEffect:`Shows a death visual effect when configured death conditions are met.`,showNamesOnTokens:`Toggles token name text visibility in scene.`,showTurnEffect:`Shows the active turn visual indicator in scene.`,useDescriptiveNames:`Appends descriptive suffixes to duplicate unit names for easier identification.`,enableRumble:`Enables Rumble integration for dice rolls.`,enableBones:`Enables Bones integration for dice rolls.`,enableDicePlus:`Enables Dice+ integration for dice rolls.`,enableTextBasedRolls:`Enables built-in text-based dice rolling handled directly by Forge.`,enableObrNotification:`Enables in-app Owlbear notifications for supported roll and system events.`,showResultsToAll:`When enabled, notifications are shown to all players instead of only the local user.`,enableDiscordLogging:`Sends roll or event logs to a configured Discord webhook.`,discordUrl:`Discord webhook endpoint used when Discord logging is enabled.`,enableConsoleLog:`Turns verbose Forge logging on or off in the browser console.`},gm=()=>{let e=F(e=>e.systemData);return F(e=>e.cacheReady)?e?{theme:e.theme,cardLayout:e.cardLayout,listLayout:e.listLayout,attributes:e.attributes,systemName:e.systemName,importDate:e.importDate,isLoading:!1}:{theme:{primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,isLoading:!1}:{theme:null,cardLayout:[],listLayout:[],attributes:[],systemName:``,importDate:null,isLoading:!0}};var _m=T.h2`
  ${{marginBottom:`1rem`,paddingBottom:`0.5rem`,fontSize:`1.25rem`,fontWeight:`600`}}
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
`,Q=T.div`
  ${{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`,":last-child":{borderBottomWidth:`0`}}}
  color: ${e=>e.theme.PRIMARY};
`,$=T.label`
  ${{flex:`1 1 0%`,cursor:`pointer`,textAlign:`left`,fontSize:`1rem`}}
  color: ${e=>e.theme.PRIMARY};
`,vm=T.div`
  ${{marginLeft:`1rem`,display:`flex`,placeContent:`space-between`,alignItems:`center`,gap:`0.75rem`}}
  color: ${e=>e.theme.PRIMARY};
`,ym=T.label`
  ${{fontSize:`0.875rem`}}
  text-align: left;
  color: ${e=>e.theme.PRIMARY};
`,bm=T.p`
  ${{marginTop:`0.25rem`,fontSize:`0.75rem`}}
  color: ${e=>f(e.theme.PRIMARY,.7)};
`,xm=T.input`
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
`,Sm=T.select`
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
`,Cm=T.button`
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
`,wm=Wp.div({marginTop:`0.5rem`,display:`flex`,justifyContent:`center`,gap:`0.75rem`}),Tm=T.p`
  margin: 8px 0 0;
  font-size: 13px;
  color: ${e=>e.$connected?e.theme.PRIMARY:f(e.theme.PRIMARY,.75)};
`,Em=T.p`
  color: ${e=>f(e.theme.PRIMARY,.9)};
  margin: 0;
  line-height: 1.5;
`;const Dm=()=>{let{theme:e}=qe(),{attributes:t}=gm();F(e=>e.roomMetadata);let n=F(e=>e.sceneMetadata),r=F(e=>e.items),i=F(e=>e.cacheReady),[a,o]=(0,P.useState)(!1),[s,l]=(0,P.useState)(!1),[u,d]=(0,P.useState)(`D20`),[f,m]=(0,P.useState)(!1),[h,g]=(0,P.useState)(``),[_,v]=(0,P.useState)(`@STAT`),[y,b]=(0,P.useState)(!1),[x,S]=(0,P.useState)(!1),[C,w]=(0,P.useState)(!0),[T,E]=(0,P.useState)(!1),[ee,te]=(0,P.useState)(!0),[ne,re]=(0,P.useState)(!0),[ie,ae]=(0,P.useState)(!1),[oe,se]=(0,P.useState)(`bottom`),[ce,le]=(0,P.useState)(!1),[ue,de]=(0,P.useState)(!1),[fe,me]=(0,P.useState)(!1),[he,ge]=(0,P.useState)(!1),[xe,A]=(0,P.useState)(!1),[we,Te]=(0,P.useState)(!1),[Ee,Oe]=(0,P.useState)(!1),[Ae,je]=(0,P.useState)(!1),[Me,M]=(0,P.useState)(!1),[Ne,N]=(0,P.useState)(!1),[Pe,Fe]=(0,P.useState)(!1),[Ie,Le]=(0,P.useState)(!1),[Re,ze]=(0,P.useState)(``),[Be,Ve]=(0,P.useState)(!1),He=(0,P.useRef)(null),[Ue,We]=(0,P.useState)(()=>Ce()),[Ge,Ke]=(0,P.useState)(()=>ye()),[Je,Ye]=(0,P.useState)(()=>be()),[Xe,Ze]=(0,P.useState)(!1),[L,Qe]=(0,P.useState)(!1);(0,P.useEffect)(()=>{let e=!0;return(async()=>{let t=await k();e&&(We(t&&Ce()),Ke(ye()),Ye(be()))})(),()=>{e=!1}},[]);let R=n;(0,P.useEffect)(()=>{if(i){if(R[D.POPCORN_INITIATIVE]!==void 0&&o(R[D.POPCORN_INITIATIVE]),R[D.REVERSE_INITIATIVE]!==void 0&&l(R[D.REVERSE_INITIATIVE]),R[D.DICE_RANGE]!==void 0&&d(R[D.DICE_RANGE]),R[D.INITIATIVE_MODIFIER_BID]===void 0?g(``):g(R[D.INITIATIVE_MODIFIER_BID]||``),R[D.INITIATIVE_MODIFIER_EXPR]!==void 0){let e=(R[D.INITIATIVE_MODIFIER_EXPR]||`@STAT`).replace(/\bx\b/gi,`@STAT`).trim();v(e.length>0?e:`@STAT`)}else v(`@STAT`);if(R[D.SHOW_CARD_ACCESS]!==void 0&&m(R[D.SHOW_CARD_ACCESS]),R[D.SHOW_PLAYER_VIEW]!==void 0&&b(R[D.SHOW_PLAYER_VIEW]),R[D.SHOW_OWNER_ONLY_EDIT]!==void 0&&E(R[D.SHOW_OWNER_ONLY_EDIT]),R[D.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?te(!0):te(R[D.SHOW_MODIFY_UNIT_CONTEXT_MENU]),R[D.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===void 0?re(!0):re(R[D.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]),R[D.SHOW_NON_PARTY_UNITS]!==void 0&&S(R[D.SHOW_NON_PARTY_UNITS]),R[D.SHOW_LIST_HP_NUMBERS]===void 0?w(!0):w(R[D.SHOW_LIST_HP_NUMBERS]),R[D.SHOW_HP_BARS]!==void 0&&ae(R[D.SHOW_HP_BARS]),R[D.HP_BAR_ORIENTATION]!==void 0&&se(R[D.HP_BAR_ORIENTATION]),R[D.SHOW_HP_NUMBERS]!==void 0&&le(R[D.SHOW_HP_NUMBERS]),R[D.SHOW_DEATH_EFFECT]!==void 0&&de(R[D.SHOW_DEATH_EFFECT]),R[D.SHOW_NAMES]!==void 0&&me(R[D.SHOW_NAMES]),R[D.SHOW_TURN_EFFECT]!==void 0&&ge(R[D.SHOW_TURN_EFFECT]),R[D.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&A(R[D.USE_DESCRIPTIVE_DUPLICATES]),R[D.ENABLE_RUMBLE]!==void 0&&Te(R[D.ENABLE_RUMBLE]),R[D.ENABLE_BONES]!==void 0&&Oe(R[D.ENABLE_BONES]),R[D.ENABLE_DICE_PLUS]!==void 0&&je(R[D.ENABLE_DICE_PLUS]),R[D.ENABLE_TEXT_BASED_ROLLS]!==void 0&&M(R[D.ENABLE_TEXT_BASED_ROLLS]),R[D.ENABLE_OBR_NOTIFICATION]!==void 0&&N(R[D.ENABLE_OBR_NOTIFICATION]),R[D.SHOW_NOTIFICATION_TO_ALL]!==void 0&&Fe(R[D.SHOW_NOTIFICATION_TO_ALL]),R[D.ENABLE_DISCORD_LOGGING]!==void 0&&Le(R[D.ENABLE_DISCORD_LOGGING]),R[D.DISCORD_URL]!==void 0&&ze(R[D.DISCORD_URL]),R[D.ENABLE_CONSOLE_LOG]!==void 0){let e=R[D.ENABLE_CONSOLE_LOG];Ve(e),O.setEnabled(e)}else Ve(!1)}},[i,R]);let z=async(e,t)=>{await c.scene.setMetadata({[e]:t})},$e=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},et=t.filter(e=>e.attr_type===`numb`).sort((e,t)=>(e.attr_name||``).localeCompare(t.attr_name||``)),tt=(e,t)=>{let n=e.trim();return n?t?/@STAT/i.test(n)?/\d\s*d\s*\d|\bd\s*\d/i.test(n)?{valid:!1,error:`Dice notation is not allowed in initiative modifiers.`}:ve(n.replace(/@STAT/gi,`@${t}`))?{valid:!0}:{valid:!1,error:`Invalid expression syntax.`}:{valid:!1,error:`Expression must include @STAT (the selected attribute value).`}:{valid:!1,error:`Select a numeric attribute first.`}:{valid:!1,error:`Expression is required.`}},nt=async(e,t)=>{await z(D.INITIATIVE_MODIFIER_BID,e),await z(D.INITIATIVE_MODIFIER_EXPR,t)},rt=async e=>{if(g(e),!e){await nt(``,_);return}let t=tt(_,e);t.valid||await c.notification.show(t.error||`Invalid initiative modifier settings.`,`WARNING`),await nt(e,_)},it=async()=>{let e=_.trim(),t=(e.length>0?e:`@STAT`).replace(/\bx\b/gi,`@STAT`);if(v(t),!h){await nt(``,t);return}let n=tt(t,h);if(!n.valid){await c.notification.show(n.error||`Invalid initiative modifier expression.`,`WARNING`);return}await nt(h,t)},at=async()=>{if(!h){await c.notification.show(`Select an Initiative Modifier attribute before testing.`,`WARNING`);return}let e=_.replace(/\bx\b/gi,`@STAT`),t=tt(e,h);if(!t.valid){await c.notification.show(t.error||`Invalid initiative modifier expression.`,`WARNING`);return}let n=$e(u),r=Math.floor(Math.random()*n)+1,i=De(e.replace(/@STAT/gi,`@${h}`),{bidValueMap:{[h]:14},onMissingBid:`useZero`});if(!i.valid||!i.notation){await c.notification.show(`Could not resolve initiative modifier expression.`,`ERROR`);return}let a=Number(i.notation),o=Number.isFinite(a)?Math.trunc(a):0,s=r+o,l=e.replace(/@STAT/gi,`14`);await c.notification.show(`Mock Initiative: 1d${n}(${r}) + ${l}(${o}) = ${s}`,`SUCCESS`)},ot=async()=>{try{let e=await _e(),t=JSON.stringify(e,null,2),n=new Blob([t],{type:`text/plain;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`forge-collection-${new Date().toISOString().slice(0,10)}.txt`,i.click(),URL.revokeObjectURL(r),await c.notification.show(`Collection export complete. ${e.length} record(s) written.`,`SUCCESS`)}catch(e){O.log(`Collection export failed`,e),await c.notification.show(`Collection export failed. See console log for details.`,`ERROR`)}},st=()=>{Qe(!0)},ct=()=>{Qe(!1),He.current?.click()},lt=async e=>{let t=e.target.files?.[0];if(t)try{let e=await t.text(),n=JSON.parse(e);if(!Array.isArray(n)){await c.notification.show(`Import file must contain a JSON array of collection records.`,`ERROR`);return}let r=await ke(n);await c.notification.show(`Collection import complete. Created: ${r.created}, Updated: ${r.updated}, Skipped: ${r.skipped}.`,`SUCCESS`)}catch(e){O.log(`Collection import failed`,e),await c.notification.show(`Collection import failed. Ensure the file is valid JSON and try again.`,`ERROR`)}finally{e.target.value=``}},ut=async()=>{Ze(!0);try{await Se(),We(Ce()),Ke(ye()),Ye(be()),await c.notification.show(`Connected to Battle-System account.`,`SUCCESS`)}catch(e){O.error(`Battle-System auth connection failed`,e),await c.notification.show(`Unable to connect to Battle-System account. Please try again.`,`ERROR`),We(Ce()),Ke(ye()),Ye(be())}finally{Ze(!1)}};return(0,I.jsxs)(td.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[(0,I.jsxs)(im,{theme:e,children:[(0,I.jsx)(am,{theme:e,children:`Settings`}),(0,I.jsxs)(om,{theme:e,children:[(0,I.jsx)(_m,{theme:e,children:`Battle-System Account`}),(0,I.jsx)(wm,{children:(0,I.jsx)(sm,{theme:e,onClick:()=>{ut()},disabled:Xe,children:Xe?`Connecting...`:Ue?`Reconnect to Battle-System`:`Connect to Battle-System`})}),(0,I.jsx)(Tm,{theme:e,$connected:Ue,children:Ue?`Status: Connected (${Ge} tier)`:`Status: Disconnected`})]}),(0,I.jsxs)(om,{theme:e,children:[(0,I.jsx)(_m,{theme:e,children:`Collection Management`}),(0,I.jsxs)(wm,{children:[(0,I.jsx)(sm,{theme:e,onClick:ot,children:`Export`}),(0,I.jsx)(sm,{theme:e,onClick:st,children:`Import`})]}),(0,I.jsx)(`input`,{ref:He,type:`file`,accept:`.txt,.json,text/plain,application/json`,onChange:lt,style:{display:`none`}})]}),(0,I.jsxs)(om,{theme:e,children:[(0,I.jsx)(_m,{theme:e,children:`List Controls`}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.reverseInitiative,children:`Reverse Initiative`})}),(0,I.jsx)(X,{label:`Reverse Initiative`,isOn:s,onChange:async e=>{l(e),await z(D.REVERSE_INITIATIVE,e),e&&a&&(o(!1),await z(D.POPCORN_INITIATIVE,!1))}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.popcornInitiative,children:`Popcorn Initiative`})}),(0,I.jsx)(X,{label:`Popcorn Initiative`,isOn:a,onChange:async e=>{o(e),await z(D.POPCORN_INITIATIVE,e),e&&s&&(l(!1),await z(D.REVERSE_INITIATIVE,!1))}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.initiativeDie,children:`Initiative Die:`})}),(0,I.jsx)(xm,{theme:e,type:`text`,value:u,onChange:async e=>{let t=e.target.value;d(t),await z(D.DICE_RANGE,t),O.log(`Dice Range:`,t)},placeholder:`D20`,maxLength:3})]}),(0,I.jsxs)(vm,{theme:e,children:[(0,I.jsx)(ym,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.initiativeModifierAttr,children:`Initiative Modifier:`})}),(0,I.jsxs)(Sm,{theme:e,value:h,onChange:async e=>{await rt(e.target.value)},children:[(0,I.jsx)(`option`,{value:``,children:`None`}),et.map(e=>(0,I.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,I.jsxs)(vm,{theme:e,children:[(0,I.jsx)(ym,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.initiativeModifierMath,children:`Math:`})}),(0,I.jsx)(xm,{theme:e,type:`text`,value:_,onChange:e=>{v(e.target.value)},onBlur:async()=>{await it()},placeholder:`floor((@STAT-10)/2)`,maxLength:120,disabled:!h}),(0,I.jsx)(Cm,{theme:e,type:`button`,onClick:()=>{at()},disabled:!h,children:`Test`})]}),(0,I.jsx)(bm,{theme:e,children:`Use @STAT as the selected attribute value. Example: floor((@STAT-10)/2)`}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.showCardColumn,children:`Show Card Column`})}),(0,I.jsx)(X,{label:`Show Stat Block Access`,isOn:f,onChange:async e=>{m(e),await z(D.SHOW_CARD_ACCESS,e)}})]})]}),(0,I.jsxs)(om,{theme:e,children:[(0,I.jsx)(_m,{theme:e,children:`Player Controls`}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.showPlayerView,children:`Show Player View`})}),(0,I.jsx)(X,{label:`Show Player View`,isOn:y,onChange:async e=>{b(e),await z(D.SHOW_PLAYER_VIEW,e)}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.showNonPartyUnits,children:`Show Non-Party Units`})}),(0,I.jsx)(X,{label:`Show Non-Party Units`,isOn:x,onChange:async e=>{S(e),await z(D.SHOW_NON_PARTY_UNITS,e)}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.showHpNumbersOnList,children:`Show HP Numbers on List`})}),(0,I.jsx)(X,{label:`Show HP Numbers on List`,isOn:C,onChange:async e=>{w(e),await z(D.SHOW_LIST_HP_NUMBERS,e)}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.ownerOnlyEdit,children:`GM/Owner Only Edit`})}),(0,I.jsx)(X,{label:`Owner Only Edit`,isOn:T,onChange:async e=>{E(e),await z(D.SHOW_OWNER_ONLY_EDIT,e)}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.showAdjustHpContextMenu,children:`Show Adjust HP Context Menu`})}),(0,I.jsx)(X,{label:`Show Adjust HP Context Menu`,isOn:ee,onChange:async e=>{te(e),await z(D.SHOW_MODIFY_UNIT_CONTEXT_MENU,e)}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.showViewUnitContextMenuForPlayers,children:`Show View Unit Context Menu for Players`})}),(0,I.jsx)(X,{label:`Show View Unit Context Menu for Players`,isOn:ne,onChange:async e=>{re(e),await z(D.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS,e)}})]})]}),(0,I.jsxs)(om,{theme:e,children:[(0,I.jsx)(_m,{theme:e,children:`Game Controls`}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.showHpBarsOnTokens,children:`Show HP Bars on tokens`})}),(0,I.jsx)(X,{label:`Show HP Bars on tokens`,isOn:ie,onChange:async e=>{ae(e),await z(D.SHOW_HP_BARS,e),e&&ce&&(le(!1),await z(D.SHOW_HP_NUMBERS,!1)),e&&R[D.HP_BAR_ORIENTATION]===void 0&&(se(`bottom`),await z(D.HP_BAR_ORIENTATION,`bottom`))}})]}),(ie||ce)&&(0,I.jsxs)(vm,{theme:e,children:[(0,I.jsx)(ym,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.hpOrientation,children:`Orientation:`})}),(0,I.jsxs)(Sm,{theme:e,value:oe,onChange:async e=>{let t=e.target.value;se(t),await z(D.HP_BAR_ORIENTATION,t)},children:[(0,I.jsx)(`option`,{value:`top`,children:`Top`}),(0,I.jsx)(`option`,{value:`bottom`,children:`Bottom`}),(0,I.jsx)(`option`,{value:`left`,children:`Left`}),(0,I.jsx)(`option`,{value:`right`,children:`Right`})]})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.showHpNumbersOnTokens,children:`Show HP Numbers on tokens`})}),(0,I.jsx)(X,{label:`Show HP Numbers on tokens`,isOn:ce,onChange:async e=>{le(e),await z(D.SHOW_HP_NUMBERS,e),e&&ie&&(ae(!1),await z(D.SHOW_HP_BARS,!1)),e&&R[D.HP_BAR_ORIENTATION]===void 0&&(se(`bottom`),await z(D.HP_BAR_ORIENTATION,`bottom`))}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.showDeathEffect,children:`Show Death Effect`})}),(0,I.jsx)(X,{label:`Show Death Effect`,isOn:ue,onChange:async e=>{de(e),await z(D.SHOW_DEATH_EFFECT,e)}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.showNamesOnTokens,children:`Show Names on Tokens`})}),(0,I.jsx)(X,{label:`Show names on tokens`,isOn:fe,onChange:async e=>{me(e),await z(D.SHOW_NAMES,e);let t=r.filter(e=>e.metadata[p.ON_LIST]===!0);e?(O.log(`Showing names on tokens`),await c.scene.items.updateItems(t,e=>{for(let t of e){let e=t.metadata[p.UNIT_NAME],n=t;e&&n.text&&(n.text.plainText=String(e))}})):(O.log(`Hiding names on tokens`),await c.scene.items.updateItems(t,e=>{for(let t of e){let e=t;e.text&&(e.text.plainText=``)}}))}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.showTurnEffect,children:`Show Turn Effect`})}),(0,I.jsx)(X,{label:`Show Turn Effect`,isOn:he,onChange:async e=>{ge(e),await z(D.SHOW_TURN_EFFECT,e)}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.useDescriptiveNames,children:`Use Descriptive Names`})}),(0,I.jsx)(X,{label:`Use Descriptive Duplicates Names`,isOn:xe,onChange:async e=>{A(e),await z(D.USE_DESCRIPTIVE_DUPLICATES,e)}})]})]}),(0,I.jsxs)(om,{theme:e,children:[(0,I.jsx)(_m,{theme:e,children:`Dice Controls`}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.enableTextBasedRolls,children:`Enable Text-Based Rolls`})}),(0,I.jsx)(X,{label:`Enable Text-Based Rolls`,isOn:Me,onChange:async e=>{M(e),await z(D.ENABLE_TEXT_BASED_ROLLS,e),e&&(N(!0),Te(!1),Oe(!1),je(!1),await z(D.ENABLE_OBR_NOTIFICATION,!0),await z(D.ENABLE_RUMBLE,!1),await z(D.ENABLE_BONES,!1),await z(D.ENABLE_DICE_PLUS,!1))}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.enableRumble,children:`Enable Rumble! Integration`})}),(0,I.jsx)(X,{label:`Enable Rumble! Integration`,isOn:we,onChange:async e=>{Te(e),await z(D.ENABLE_RUMBLE,e),e&&(Oe(!1),je(!1),M(!1),await z(D.ENABLE_BONES,!1),await z(D.ENABLE_DICE_PLUS,!1),await z(D.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.enableBones,children:`Enable Bones! Integration`})}),(0,I.jsx)(X,{label:`Enable Bones! Integration`,isOn:Ee,onChange:async e=>{Oe(e),await z(D.ENABLE_BONES,e),e&&(Te(!1),je(!1),M(!1),await z(D.ENABLE_RUMBLE,!1),await z(D.ENABLE_DICE_PLUS,!1),await z(D.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.enableDicePlus,children:`Enable Dice+ Integration`})}),(0,I.jsx)(X,{label:`Enable Dice+ Integration`,isOn:Ae,onChange:async e=>{je(e),await z(D.ENABLE_DICE_PLUS,e),e&&(Te(!1),Oe(!1),M(!1),await z(D.ENABLE_RUMBLE,!1),await z(D.ENABLE_BONES,!1),await z(D.ENABLE_TEXT_BASED_ROLLS,!1))}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.enableObrNotification,children:`Enable OBR Notification`})}),(0,I.jsx)(X,{label:`Enable OBR Notification`,isOn:Ne,onChange:async e=>{N(e),await z(D.ENABLE_OBR_NOTIFICATION,e)}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.showResultsToAll,children:`Show Results to All`})}),(0,I.jsx)(X,{label:`Show Results to All`,isOn:Pe,onChange:async e=>{Fe(e),await z(D.SHOW_NOTIFICATION_TO_ALL,e)}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.enableDiscordLogging,children:`Enable Discord Logging`})}),(0,I.jsx)(X,{label:`Enable Discord Logging`,isOn:Ie,onChange:async e=>{if(e&&!pe(Re.trim())){await c.notification.show(`Please enter a valid Discord webhook URL before enabling Discord logging.`,`WARNING`),Le(!1),await z(D.ENABLE_DISCORD_LOGGING,!1);return}Le(e),await z(D.ENABLE_DISCORD_LOGGING,e)}})]}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)(ym,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.discordUrl,children:`Discord Url:`})}),(0,I.jsx)(xm,{theme:e,type:`text`,value:Re,onChange:async e=>{let t=e.target.value,n=t.trim();ze(t),await z(D.DISCORD_URL,n),O.log(`Discord URL:`,n)},placeholder:`https://discord.com/api/webhooks/...`,maxLength:200})]})]}),(0,I.jsxs)(om,{theme:e,children:[(0,I.jsx)(_m,{theme:e,children:`Other`}),(0,I.jsxs)(Q,{theme:e,children:[(0,I.jsx)($,{theme:e,children:(0,I.jsx)(j,{theme:e,text:Z.enableConsoleLog,children:`Enable Console Log`})}),(0,I.jsx)(X,{label:`Enable Console Log`,isOn:Be,onChange:async e=>{Ve(e),O.setEnabled(e),await z(D.ENABLE_CONSOLE_LOG,e)}})]})]})]}),(0,I.jsx)(hm,{isOpen:L,title:`Confirm Import`,onClose:()=>Qe(!1),actions:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(sm,{theme:e,variant:`secondary`,onClick:()=>Qe(!1),children:`Cancel`}),(0,I.jsx)(sm,{theme:e,onClick:ct,children:`Continue`})]}),children:(0,I.jsx)(Em,{theme:e,children:`Import will overwrite duplicate records that share the same Name and Author. Continue?`})})]})};var Om=T.div`
  ${{display:`flex`,height:`100%`,flexDirection:`column`,padding:`1rem`}}
`,km=T.div`
  ${{flex:`1 1 0%`,overflowY:`auto`,borderRadius:`0.5rem`,borderWidth:`2px`,"--tw-border-opacity":`1`,borderColor:`rgb(255 255 255 / var(--tw-border-opacity, 1))`,padding:`0.5rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  margin: 10px;
  white-space: break-spaces;
  word-wrap: break-word;
  margin-bottom: 50px;
`,Am=T.div`
  ${{marginBottom:`0.5rem`,textAlign:`left`}}
`,jm=T.span`
  ${{marginRight:`0.5rem`,fontSize:`0.75rem`,"--tw-text-opacity":`1`,color:`rgb(203 213 224 / var(--tw-text-opacity, 1))`}}
`,Mm=T.span`
  ${{fontSize:`0.875rem`,"--tw-text-opacity":`1`,color:`rgb(255 255 255 / var(--tw-text-opacity, 1))`}}
`;const Nm=()=>{let e=Be(e=>e.messages),t=(0,P.useRef)(null),{theme:n}=qe();return(0,P.useEffect)(()=>{t.current?.scrollIntoView({behavior:`smooth`})},[e]),(0,I.jsx)(td.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,I.jsxs)(Om,{children:[(0,I.jsx)(am,{theme:n,children:`System Log`}),(0,I.jsxs)(km,{children:[e.map(e=>(0,I.jsxs)(Am,{children:[(0,I.jsx)(jm,{children:e.timestamp}),(0,I.jsx)(Mm,{children:e.text})]},e.id)),(0,I.jsx)(`div`,{ref:t})]})]})})},Pm=`buff_effect_one`,Fm=`debuff_effect_one`,Im=[{value:`buff_effect_one`,label:`Buff Effect One`},{value:`buff_effect_two`,label:`Buff Effect Two`}],Lm=[{value:`debuff_effect_one`,label:`Debuff Effect One`},{value:`debuff_effect_two`,label:`Debuff Effect Two`}],Rm=e=>Im.some(t=>t.value===e),zm=e=>Lm.some(t=>t.value===e),Bm=e=>{switch(e){case`buff_effect_two`:return`
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
`}},Vm=e=>{switch(e){case`debuff_effect_two`:return`
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
`}};var Hm=t.EXTENSIONID,Um=`com.battle-system.forge`;const Wm={SYSTEM_NAME:`${Hm}/SystemName`,IMPORT_DATE:`${Hm}/ImportDate`,SNAPSHOT_PUBLIC_ID:`${Hm}/SnapshotPublicId`};var Gm=(()=>{let e=E.attributes,t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||``,maxHpBid:n?.attr_bid||``}})(),Km=(e,t)=>e instanceof Error&&e.message?e.message:t,qm=T.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Jm=T.div`
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`,Ym=T.h2`
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  padding: 12px 15px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 400;
`,Xm=T.p`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`,Zm=T.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 15px;
`,Qm=T.div`
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
`,$m=T.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.theme.PRIMARY};
  margin-top: 5px;
`,eh=T.div`
  margin-top: 16px;
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 14px;
`,th=T.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 10px 0;
  font-size: 15px;
`,nh=T.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`,rh=T.label`
  color: ${e=>e.theme.PRIMARY};
  min-width: 84px;
  font-size: 13px;
`,ih=T.select`
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
`,ah=T.div`
  background-color: ${()=>f(`#FF0000`,.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,oh=T.div`
  background-color: ${()=>f(`#00FF00`,.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,sh=T.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`,ch=T.p`
  color: ${e=>f(e.theme.PRIMARY,.9)};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,lh=T.div`
  margin-top: 30px;
`,uh=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,dh=T.div`
  background-color: ${e=>f(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,fh=T.div`
  flex: 1;
`,ph=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`,mh=T.div`
  color: ${e=>f(e.theme.PRIMARY,.7)};
  font-size: 13px;
  font-style: italic;
`,hh=T.div`
  display: flex;
  gap: 8px;
`,gh=T.button`
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
`,_h={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}};const vh=()=>{let{theme:e,updateThemeFromSystem:t}=qe(),n=F(e=>e.sceneMetadata),r=F(e=>e.roomMetadata),i=F(e=>e.systemData),a=F(e=>e.setSystemData),[o,s]=(0,P.useState)(()=>be()),[l,u]=(0,P.useState)(``),[d,p]=(0,P.useState)(!1),[m,h]=(0,P.useState)(null),[g,_]=(0,P.useState)(null),[v,y]=(0,P.useState)(``),[b,x]=(0,P.useState)(null),[S,w]=(0,P.useState)(null),[T,ee]=(0,P.useState)([]),[te,ne]=(0,P.useState)(``),[re,ie]=(0,P.useState)(``),[ae,se]=(0,P.useState)(Pm),[ce,le]=(0,P.useState)(Fm),[ue,de]=(0,P.useState)([]),[fe,pe]=(0,P.useState)(!1),[me,_e]=(0,P.useState)(null),[ve,ye]=(0,P.useState)(``);(0,P.useEffect)(()=>{s(be()),k(),Ce()},[n,r,i]),(0,P.useEffect)(()=>{k(),Ce()},[n,r,i]);let k=()=>{try{if(!be()){let e={primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url};y(E.name),x(null),w(e),ee(E.attributes),ne(Gm.currentHpBid),ie(Gm.maxHpBid),se(Pm),le(Fm);return}if(i){let e=n[D.HP_CURRENT_BID],t=n[D.HP_MAX_BID],r=n[D.BUFF_VISUAL_PRESET],a=n[D.DEBUFF_VISUAL_PRESET];y(i.systemName),x(i.importDate),w(i.theme),ee(i.attributes),ne(e||``),ie(t||``),se(Rm(r)?r:Pm),le(zm(a)?a:Fm);return}let e=r[Wm.SYSTEM_NAME],t=r[Wm.IMPORT_DATE],a=n[D.HP_CURRENT_BID],o=n[D.HP_MAX_BID],s=n[D.BUFF_VISUAL_PRESET],c=n[D.DEBUFF_VISUAL_PRESET];y(e||E.name),x(t||null),w({primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url}),ee(E.attributes),ne(a||``),ie(o||``),se(Rm(s)?s:Pm),le(zm(c)?c:Fm)}catch(e){O.error(`Error loading system from cache:`,e)}},xe=async(e,t)=>{await c.scene.setMetadata({[e]:t})},A=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Imported ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Imported ${t} is not a JSON array`);return n}throw Error(`Imported ${t} has invalid type`)},Se=T.filter(e=>e.attr_type===`numb`),Ce=()=>{try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(n&&n.startsWith(`${Um}.`)&&n.endsWith(`.backup`)){let t=localStorage.getItem(n);if(t){let n=JSON.parse(t);e.push(n)}}}e.sort((e,t)=>new Date(t.backupDate).getTime()-new Date(e.backupDate).getTime()),de(e)}catch(e){O.error(`Error loading backups:`,e)}},we=async e=>{try{if(!i){O.warn(`Cannot create backup: runtime system data is unavailable`);return}let e=i.systemName||E.name,t={name:e,backupDate:new Date().toISOString(),theme_primary:i.theme.primary,theme_offset:i.theme.offset,theme_background:i.theme.background,theme_border:i.theme.border,background_url:i.theme.background_url,card_layout:i.cardLayout,list_layout:i.listLayout,attributes:i.attributes},n=`${Um}.${e}.backup`;localStorage.setItem(n,JSON.stringify(t)),O.log(`Backup created for ${e}`),Ce()}catch(e){throw O.error(`Error creating backup:`,e),e}},Te=e=>{try{let t=`${Um}.${e}.backup`;localStorage.removeItem(t),O.log(`Backup deleted for ${e}`),Ce(),_(`Backup for "${e}" deleted successfully`)}catch(e){O.error(`Error deleting backup:`,e),h(`Failed to delete backup`)}},Ee=(e,t)=>{ye(e),_e(()=>t),pe(!0)},De=async()=>{pe(!1),me&&(await me(),_e(null))},ke=()=>{pe(!1),_e(null),ye(``)},j=async()=>{if(!l.trim()){h(`Please enter a share_id`);return}Ee(`This will overwrite your current system data. A backup of your current system will be saved to local storage. Do you want to continue?`,async()=>{await Ae()})},Ae=async()=>{if(!be()){h(`Premium account required. Connect and use a premium Battle-System account before importing systems.`);return}p(!0),h(null),_(null);try{await Oe();let{data:e,error:n}=await ge(async()=>C.rpc(`bs_forge_import_system_snapshot`,{p_source_share_id:l.trim()}));if(n)throw n;if(!e){h(`No system found with that share_id`),p(!1);return}let r=Array.isArray(e)?e[0]:e;if(!r||typeof r.snapshot_public_id!=`string`)throw Error(`Snapshot import did not return a valid record`);let i=A(r.card_layout,`card_layout`),o=A(r.list_layout,`list_layout`),s=A(r.attributes,`attributes`);if(!Array.isArray(s))throw Error(`Imported attributes are not a valid array`);await we(v);let d={primary:r.theme_primary,offset:r.theme_offset,background:r.theme_background,border:r.theme_border,background_url:r.background_url},f=new Date().toISOString();await c.room.setMetadata({[Wm.SNAPSHOT_PUBLIC_ID]:r.snapshot_public_id,[Wm.SYSTEM_NAME]:r.system_name,[Wm.IMPORT_DATE]:f}),a({theme:d,cardLayout:i,listLayout:o,attributes:s,systemName:r.system_name,importDate:f,snapshotPublicId:r.snapshot_public_id}),y(r.system_name),x(f),w(d),t(d.primary,d.offset,d.background,d.border,d.background_url),_(`System "${r.system_name}" loaded successfully! Backup created.`),u(``),O.log(`System snapshot imported and loaded:`,{systemName:r.system_name,snapshotPublicId:r.snapshot_public_id})}catch(e){O.error(`Error fetching system:`,e),h(Km(e,`An error occurred while fetching the system`))}finally{p(!1)}},je=async e=>{Ee(`This will restore the system "${e.name}" from backup. A backup of your current system will be created. Do you want to continue?`,async()=>{await Me(e)})},Me=async e=>{p(!0),h(null),_(null);try{if(!be()){h(`Premium account required. Connect and use a premium Battle-System account before restoring backups for room sharing.`);return}await Oe(),await we(v);let n={primary:e.theme_primary,offset:e.theme_offset,background:e.theme_background,border:e.theme_border,background_url:e.background_url};if(!Array.isArray(e.card_layout)||!Array.isArray(e.list_layout)||!Array.isArray(e.attributes))throw Error(`Backup data is invalid`);let r=new Date().toISOString(),i=`forge-backup:${e.name.trim().toLowerCase()}`,{data:o,error:s}=await ge(async()=>C.rpc(`bs_forge_upsert_user_snapshot_payload`,{p_source_share_id:i,p_system_name:e.name,p_background_url:e.background_url,p_theme_primary:e.theme_primary,p_theme_offset:e.theme_offset,p_theme_background:e.theme_background,p_theme_border:e.theme_border,p_card_layout:e.card_layout,p_list_layout:e.list_layout,p_attributes:e.attributes}));if(s)throw s;let l=Array.isArray(o)?o[0]:o;if(!l||typeof l.snapshot_public_id!=`string`)throw Error(`Backup restore snapshot publish failed`);a({theme:n,cardLayout:e.card_layout,listLayout:e.list_layout,attributes:e.attributes,systemName:e.name,importDate:r,snapshotPublicId:l.snapshot_public_id}),await c.room.setMetadata({[Wm.SNAPSHOT_PUBLIC_ID]:l.snapshot_public_id,[Wm.SYSTEM_NAME]:e.name,[Wm.IMPORT_DATE]:r}),y(e.name),x(r),w(n),t(n.primary,n.offset,n.background,n.border,n.background_url),_(`System "${e.name}" restored from backup successfully!`),O.log(`System restored from backup:`,e.name)}catch(e){O.error(`Error restoring backup:`,e),h(`Failed to restore system from backup`)}finally{p(!1)}},M=async()=>{p(!0),h(null),_(null);try{let e={primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url};a({theme:e,cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,snapshotPublicId:null}),await c.room.setMetadata({[Wm.SNAPSHOT_PUBLIC_ID]:null,[Wm.SYSTEM_NAME]:E.name,[Wm.IMPORT_DATE]:null}),y(E.name),x(null),w(e),t(e.primary,e.offset,e.background,e.border,e.background_url),_(`Reset to default system successfully!`)}catch(e){h(`Failed to reset to default system`),O.error(`Error resetting to default:`,e)}finally{p(!1)}},Ne=e=>e?new Date(e).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):null,N=!o,Pe=!o;return(0,I.jsxs)(td.div,{variants:_h,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,I.jsxs)(im,{theme:e,children:[(0,I.jsx)(am,{theme:e,children:`System Configuration`}),(0,I.jsx)(Ym,{theme:e,children:v}),b?(0,I.jsxs)(Xm,{theme:e,children:[`Imported: `,Ne(b)]}):(0,I.jsx)(Xm,{theme:e,children:`Using Default System`}),S&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(Zm,{children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(Qm,{color:S.primary,theme:e,children:S.primary}),(0,I.jsx)($m,{theme:e,children:`PRIMARY`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(Qm,{color:S.offset,theme:e,children:S.offset}),(0,I.jsx)($m,{theme:e,children:`OFFSET`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(Qm,{color:S.background,theme:e,children:S.background}),(0,I.jsx)($m,{theme:e,children:`BG`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(Qm,{color:S.border,theme:e,children:S.border}),(0,I.jsx)($m,{theme:e,children:`BORDER`})]})]}),(0,I.jsxs)(eh,{theme:e,children:[(0,I.jsx)(th,{theme:e,children:`System Settings`}),(0,I.jsxs)(nh,{children:[(0,I.jsx)(rh,{theme:e,children:`Current HP`}),(0,I.jsxs)(ih,{theme:e,value:te,disabled:Pe,onChange:async e=>{if(Pe)return;let t=e.target.value;ne(t),await xe(D.HP_CURRENT_BID,t)},children:[(0,I.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),Se.map(e=>(0,I.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,I.jsxs)(nh,{children:[(0,I.jsx)(rh,{theme:e,children:`Max HP`}),(0,I.jsxs)(ih,{theme:e,value:re,disabled:Pe,onChange:async e=>{if(Pe)return;let t=e.target.value;ie(t),await xe(D.HP_MAX_BID,t)},children:[(0,I.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),Se.map(e=>(0,I.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),Pe&&(0,I.jsx)(Xm,{theme:e,children:`Premium account required to edit HP mapping.`}),(0,I.jsxs)(nh,{children:[(0,I.jsx)(rh,{theme:e,children:`Buff Visual`}),(0,I.jsx)(ih,{theme:e,value:ae,onChange:async e=>{let t=e.target.value;Rm(t)&&(se(t),await xe(D.BUFF_VISUAL_PRESET,t))},children:Im.map(e=>(0,I.jsx)(`option`,{value:e.value,children:e.label},e.value))})]}),(0,I.jsxs)(nh,{children:[(0,I.jsx)(rh,{theme:e,children:`Debuff Visual`}),(0,I.jsx)(ih,{theme:e,value:ce,onChange:async e=>{let t=e.target.value;zm(t)&&(le(t),await xe(D.DEBUFF_VISUAL_PRESET,t))},children:Lm.map(e=>(0,I.jsx)(`option`,{value:e.value,children:e.label},e.value))})]})]})]}),(0,I.jsxs)(Jm,{theme:e,children:[(0,I.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0},children:`Import New System`}),(0,I.jsx)(`p`,{style:{color:f(e.PRIMARY,.8),fontSize:`14px`},children:N?`Premium account required to import new/custom systems.`:`Enter a share_id to download and activate a new game system configuration.`}),(0,I.jsx)(qm,{children:(0,I.jsx)(cm,{theme:e,type:`text`,value:l,onChange:e=>u(e.target.value),placeholder:N?``:`Enter Share Id...`,disabled:d||N,onKeyPress:e=>e.key===`Enter`&&j()})}),(0,I.jsxs)(sh,{children:[(0,I.jsx)(sm,{theme:e,onClick:j,disabled:d||N||!l.trim(),children:d?`....!`:`Import System`}),(0,I.jsx)(sm,{theme:e,variant:`secondary`,onClick:M,disabled:d,children:`Use Default`})]})]}),m&&(0,I.jsxs)(ah,{theme:e,children:[(0,I.jsx)(`strong`,{children:`Error:`}),` `,m]}),g&&(0,I.jsxs)(oh,{theme:e,children:[(0,I.jsx)(`strong`,{children:`Success:`}),` `,g]}),ue.length>0&&(0,I.jsx)(lh,{children:(0,I.jsxs)(om,{theme:e,children:[(0,I.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0,marginBottom:`15px`},children:`System Backups`}),(0,I.jsx)(uh,{children:ue.map(t=>(0,I.jsxs)(dh,{theme:e,children:[(0,I.jsxs)(fh,{children:[(0,I.jsx)(ph,{theme:e,children:t.name}),(0,I.jsxs)(mh,{theme:e,children:[`Backed up: `,Ne(t.backupDate)]})]}),(0,I.jsxs)(hh,{children:[(0,I.jsx)(gh,{theme:e,onClick:()=>je(t),disabled:d,title:`Import this backup`,children:(0,I.jsx)(oe,{size:18})}),(0,I.jsx)(gh,{theme:e,$variant:`danger`,onClick:()=>Te(t.name),disabled:d,title:`Delete this backup`,children:(0,I.jsx)(he,{size:18})})]})]},`${t.name}-${t.backupDate}`))})]})})]}),(0,I.jsx)(hm,{isOpen:fe,title:`Confirm Action`,onClose:ke,actions:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(sm,{theme:e,variant:`secondary`,onClick:ke,children:`Cancel`}),(0,I.jsx)(sm,{theme:e,onClick:De,children:`Confirm`})]}),children:(0,I.jsx)(ch,{theme:e,children:ve})})]},`system`)};function yh(e,t){let n=e.replace(`#`,``);n.length===3&&(n=n.split(``).map(e=>e+e).join(``));let r=parseInt(n,16);return`rgba(${r>>16&255}, ${r>>8&255}, ${r&255}, ${t})`}var bh=class{static async CenterViewportOnImage(e){let t=await c.scene.grid.getDpi(),n=await c.viewport.getScale(),r=await c.viewport.getWidth(),i=await c.viewport.getHeight(),a={x:r/2,y:i/2},o={x:a.x/n,y:a.y/n},s=await this.GetImageCenter(e,t),l={x:s.x-o.x,y:s.y-o.y},u={x:l.x*n*-1,y:l.y*n*-1};await c.viewport.animateTo({position:u,scale:n})}static async GetImageCenter(t,n){if(e(t)){let e=n/t.grid.dpi,r=t.image.width*e,i=t.image.height*e,a=t.grid.offset.x/t.image.width*r,o=t.grid.offset.y/t.image.height*i;return{x:t.position.x-a+r/2,y:t.position.y-o+i/2}}else if(o(t)&&t.points.length>0)return{x:t.points[0].x,y:t.points[0].y};else return{x:t.position.x,y:t.position.y}}};const xh=`${M}/effects`;var Sh=`${M}/effects-expired`,Ch=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,wh=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Th=T.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`,Eh=T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
`,Dh=T.div`
  flex: 0 0 120px;
  min-width: 120px;
  display: flex;
  align-items: flex-end;
`,Oh=T.label`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`,kh=T.input`
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
`,Ah=T.select`
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
`,jh=T(Ah)`
  min-width: 180px;
  height: 96px;
  padding-right: 8px;
`,Mh=T.button`
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
`,Nh=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 240px;
  overflow-y: auto;
`,Ph=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background: ${e=>f(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,Fh=T.div`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  font-size: 12px;
`,Ih=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,Lh=T.p`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,Rh=T.p`
  color: #ff6b6b;
  margin: 0;
  font-size: 12px;
`,zh=T.div`
  position: relative;
  display: inline-flex;
`,Bh=T.button`
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
`,Vh=T.span`
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
`,Hh=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const Uh=({items:e,units:t,setItems:n,playerData:r})=>{let[i,a]=(0,P.useState)(null),[o,s]=(0,P.useState)(``),[l,u]=(0,P.useState)(`1`),[d,f]=(0,P.useState)(`rounds`),[m,h]=(0,P.useState)(`start`),[g,_]=(0,P.useState)(`neutral`),[v,y]=(0,P.useState)([]),[b,x]=(0,P.useState)(null),S=(0,P.useMemo)(()=>{let t=new Map;return e.forEach(e=>{e.metadata?.[p.ON_LIST]===!0&&t.set(e.id,Hh(e.metadata?.[xh]))}),t},[e]),C=e=>S.get(e)||[],w=async(t,r)=>{let i=r.filter(e=>e.remaining>0);n(e.map(e=>{if(e.id!==t)return e;let n={...e.metadata||{}};return i.length>0?n[xh]=i:delete n[xh],{...e,metadata:n}})),await c.scene.items.updateItems([t],e=>{let t={...e[0].metadata||{}};i.length>0?t[xh]=i:delete t[xh],e[0].metadata=t})},T=async e=>{try{await c.broadcast.sendMessage(Sh,{message:e},{destination:`ALL`})}catch(t){O.error(`Failed to broadcast expired effect message`,t),await c.notification.show(e,`WARNING`)}},E=async(t,n)=>{if(String(r?.role||``).toUpperCase()!==`GM`)return;let i=[],a=[];e.forEach(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return;let r=Hh(e.metadata?.[xh]);if(r.length===0)return;let o=!1,s=[];r.forEach(r=>{if(!(r.endTiming===t&&(r.durationType===`turns`||e.id===n))){s.push(r);return}let i=r.remaining-1;if(o=!0,i<=0){a.push(`${e.name||`Unit`}: ${r.name} expired`);return}s.push({...r,remaining:i})}),o&&i.push({unitId:e.id,effects:s})});for(let e of i)await w(e.unitId,e.effects);if(a.length>0)for(let e of a)await T(e)},ee=(0,P.useMemo)(()=>i&&t.find(e=>e.id===i)||null,[i,t]),te=(0,P.useMemo)(()=>i?C(i):[],[i,S]);return(0,P.useEffect)(()=>{let e=c.broadcast.onMessage(Sh,async e=>{let t=e.data?.message;typeof t!=`string`||!t.trim()||await c.notification.show(t,`WARNING`)});return()=>{e()}},[]),{effectsModalUnitId:i,selectedEffectsUnit:ee,activeEffectsForSelectedUnit:te,effectNameInput:o,setEffectNameInput:s,effectDurationInput:l,setEffectDurationInput:u,effectDurationType:d,setEffectDurationType:f,effectEndTiming:m,setEffectEndTiming:h,effectType:g,setEffectType:_,effectTargetIds:v,setEffectTargetIds:e=>{y(Array.from(new Set(e)))},effectsModalError:b,units:t,getEffectsForUnit:C,handleOpenEffectsModal:e=>{x(null),s(``),u(`1`),f(`rounds`),h(`start`),_(`neutral`),y([e]),a(e)},handleCloseEffectsModal:()=>{a(null),x(null)},handleAddEffect:async()=>{if(!i)return;let n=o.trim(),r=parseInt(l,10);if(!n){x(`Enter an effect name.`);return}if(!Number.isFinite(r)||r<=0){x(`Duration must be a positive number.`);return}let a=Array.from(new Set(v.filter(e=>t.some(t=>t.id===e))));if(a.length===0){x(`Select at least one target.`);return}let c=C(i),f=ee?.name||e.find(e=>e.id===i)?.name||`Unknown`,p={id:crypto.randomUUID(),name:n,remaining:r,durationType:d,endTiming:m,effectType:g,targets:a,createdByName:f,createdById:i};await w(i,[...c,p]),x(null),s(``),u(`1`),_(`neutral`),y([i])},handleDeleteEffect:async e=>{i&&await w(i,C(i).filter(t=>t.id!==e))},processEffectsForTurnEvent:E}},Wh=({manager:e})=>{let{theme:t}=qe(),n=(0,P.useMemo)(()=>{let t=new Map;return e.units.forEach(e=>{t.set(e.id,e.name)}),t},[e.units]),r=e=>e===`buff`?`Buff`:e===`debuff`?`Debuff`:`Neutral`,i=e=>{if(e.length===0)return`No targets`;let t=e.map(e=>n.get(e)).filter(e=>typeof e==`string`&&e.length>0);return t.length===0?`${e.length} target${e.length===1?``:`s`}`:t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`};return(0,I.jsx)(hm,{isOpen:!!e.effectsModalUnitId,title:e.selectedEffectsUnit?`Effects: ${e.selectedEffectsUnit.name}`:`Effects`,onClose:e.handleCloseEffectsModal,minWidth:`520px`,maxWidth:`600px`,children:(0,I.jsxs)(Ch,{children:[(0,I.jsxs)(wh,{children:[(0,I.jsxs)(Th,{children:[(0,I.jsxs)(Eh,{style:{flex:`0 0 120px`},children:[(0,I.jsx)(Oh,{theme:t,children:`Effect`}),(0,I.jsx)(kh,{theme:t,type:`text`,placeholder:`Name`,value:e.effectNameInput,onChange:t=>e.setEffectNameInput(t.target.value)})]}),(0,I.jsxs)(Eh,{style:{flex:`0 0 140px`},children:[(0,I.jsx)(Oh,{theme:t,children:`Duration`}),(0,I.jsx)(kh,{theme:t,type:`number`,min:1,value:e.effectDurationInput,onChange:t=>e.setEffectDurationInput(t.target.value)})]}),(0,I.jsxs)(Eh,{style:{flex:`0 0 120px`},children:[(0,I.jsx)(Oh,{theme:t,children:`By`}),(0,I.jsxs)(Ah,{theme:t,value:e.effectDurationType,onChange:t=>e.setEffectDurationType(t.target.value),children:[(0,I.jsx)(`option`,{value:`turns`,children:`Turns`}),(0,I.jsx)(`option`,{value:`rounds`,children:`Rounds`})]})]})]}),(0,I.jsxs)(Th,{children:[(0,I.jsxs)(Eh,{style:{flex:`0 0 120px`},children:[(0,I.jsx)(Oh,{theme:t,children:`Type`}),(0,I.jsxs)(Ah,{theme:t,value:e.effectType,onChange:t=>e.setEffectType(t.target.value),children:[(0,I.jsx)(`option`,{value:`neutral`,children:`Neutral`}),(0,I.jsx)(`option`,{value:`buff`,children:`Buff`}),(0,I.jsx)(`option`,{value:`debuff`,children:`Debuff`})]})]}),(0,I.jsxs)(Eh,{style:{flex:`0 0 140px`},children:[(0,I.jsx)(Oh,{theme:t,children:`Ends at`}),(0,I.jsxs)(Ah,{theme:t,value:e.effectEndTiming,onChange:t=>e.setEffectEndTiming(t.target.value),children:[(0,I.jsx)(`option`,{value:`start`,children:`Start of turn`}),(0,I.jsx)(`option`,{value:`end`,children:`End of turn`})]})]}),(0,I.jsx)(Dh,{children:(0,I.jsx)(Mh,{theme:t,onClick:e.handleAddEffect,style:{width:`100%`},children:`Add`})})]})]}),(0,I.jsxs)(Eh,{children:[(0,I.jsx)(Oh,{theme:t,children:`Targets`}),(0,I.jsx)(jh,{theme:t,multiple:!0,value:e.effectTargetIds,onChange:t=>{let n=Array.from(t.target.selectedOptions).map(e=>e.value);e.setEffectTargetIds(n)},children:e.units.map(e=>(0,I.jsx)(`option`,{value:e.id,children:e.name},e.id))})]}),e.effectsModalError&&(0,I.jsx)(Rh,{theme:t,children:e.effectsModalError}),e.activeEffectsForSelectedUnit.length===0?(0,I.jsx)(Lh,{theme:t,children:`No active effects.`}):(0,I.jsx)(Nh,{children:e.activeEffectsForSelectedUnit.map(n=>(0,I.jsxs)(Ph,{theme:t,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(Ih,{theme:t,children:n.name}),(0,I.jsxs)(Fh,{theme:t,children:[r(n.effectType),` • `,n.remaining,` `,n.durationType,` • ends at `,n.endTiming===`start`?`start of turn`:`end of turn`,` • by `,n.createdByName]}),(0,I.jsxs)(Fh,{theme:t,children:[`Targets: `,i(n.targets)]})]}),(0,I.jsx)(Mh,{theme:t,onClick:()=>{e.handleDeleteEffect(n.id)},children:`Delete`})]},n.id))})]})})},Gh=({activeEffectsCount:e,canInteract:t,onOpen:n,icon:r})=>{let{theme:i}=qe();return(0,I.jsxs)(zh,{children:[(0,I.jsx)(Bh,{theme:i,$active:e>0,disabled:!t,onClick:()=>{t&&n()},children:r||(0,I.jsx)(Gd,{})}),e>0&&(0,I.jsx)(Vh,{theme:i,children:e>99?`99+`:e})]})};var Kh=T.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,qh=T.input`
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
`;const Jh=({theme:e,unit:t,canInteract:n,elevationDraftValue:r,onElevationDraftChange:i,onCommitElevationChange:a})=>(0,I.jsx)(Kh,{theme:e,children:(0,I.jsx)(qh,{theme:e,type:`text`,inputMode:`decimal`,min:-999,max:999,step:1,value:r??String(t.elevation??0),readOnly:!n,onChange:n?e=>i(t.id,e.target.value):void 0,onBlur:n?e=>a(t.id,e.target.value):void 0,onKeyDown:e=>{n&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}})}),Yh=({theme:e,canInteract:t,icon:n,activeEffectsCount:r,onOpen:i})=>(0,I.jsx)(Kh,{theme:e,children:(0,I.jsx)(Gh,{activeEffectsCount:r,canInteract:t,icon:n||(0,I.jsx)(Gd,{}),onOpen:i})});var Xh=`${M}/elevation-badge`,Zh=`${M}/elevation-badge-owner`,Qh=`${M}/elevation`,$h=200,eg=40,tg=60,ng=120,rg=24,ig=(e,t)=>{if(!e)return;if(e.startsWith(`#`))return yh(e,t);let n=e.match(/^rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\)$/i);if(n){let[,e,r,i]=n;return`rgba(${e}, ${r}, ${i}, ${t})`}let r=e.match(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i);if(r){let[,e,n,i]=r;return`rgba(${e}, ${n}, ${i}, ${t})`}return e},ag=e=>`
    0 1px 1px ${f(e.BACKGROUND,.95)},
    0 0 2px ${f(e.BACKGROUND,.85)}
  `,og=/(\d+)d(\d+)([kd][hl]\d+|!)?/gi,sg={anchor:nd,aperture:rd,award:od,batterycharging:cd,book:dd,calendar:pd,clock:yd,cloudlightning:bd,drama:Td,carrot:md,bone:ld,compass:Sd,dollarsign:wd,feather:Od,eye:Ed,heart:Nd,moon:Id,music:Ld,shield:Vd,star:ae,sun:Gd,target:Jd,users:Xd,wind:Qd,zap:$d,sword:Kd,swords:qd,axe:sd,bowarrow:fd,coins:xd,wand:Zd,flower:Ad,skull:Hd,castle:hd,cross:Cd,testtubediagonal:Yd,squirrel:Wd,snowflake:Ud,shell:Bd,pickaxe:zd,heartplus:Md,heartcrack:jd,fan:Dd},cg=T.div`
  padding: 2px;
  width: 100%;
`,lg=T.h1`
  color: ${e=>e.theme.PRIMARY};
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`,ug=T.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
`,dg=T.div`
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
`,fg=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.$compactMode?`8px`:`16px`};
`,pg=T.button`
  background: ${e=>e.disabled?f(e.theme.BORDER,.3):f(e.theme.OFFSET,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>ag(e.theme)};
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
`,mg=T(pg)`
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
`,hg=T(pg)`
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
`,gg=T(pg)`
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
`,_g=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: ${e=>e.$compactMode?`14px`:`16px`};
  font-weight: 600;
  min-width: ${e=>e.$compactMode?`44px`:`80px`};
  text-align: center;
`,vg=T.table`
  width: ${e=>e.$compact?`max-content`:`100%`};
  min-width: ${e=>e.$compact?`${$h}px`:`100%`};
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
`,yg=T.thead`
  background-color: ${e=>f(e.theme.BACKGROUND,.5)};
`,bg=T.tr``,xg=T.th`
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
`,Sg=T.div`
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
`,Cg=T.tbody``,wg=T.tr`
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
`,Tg=T.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,Eg=T(Tg)`
  font-weight: 700;
  font-size: 18px;
  color: ${e=>e.theme.OFFSET};
  min-width: 60px;
`,Dg=T(Tg)`
  min-width: 48px;
`,Og=T.button`
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
`,kg=T.img`
  width: 18px;
  height: 18px;
  pointer-events: none;
`,Ag=T.div`
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
`,jg=T.input`
  background: ${e=>e.$isRollable?f(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.3)`};
  border: 1px solid ${e=>e.$isRollable?f(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?ag(e.theme):`none`};
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
`,Mg=T(Tg)`
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
`,Ng=T.input`
  background: ${e=>e.$isRollable?f(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.4)`};
  border: 1px solid ${e=>e.$isRollable?f(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?ag(e.theme):`none`};
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
`,Pg=T.span`
  margin: 0 2px;
  color: ${e=>e.theme.OFFSET};
  font-weight: 500;
`,Fg=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,Ig=T.button`
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
`,Lg=T.input`
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
`,Rg=T.button`
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
`,zg=T.div`
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
`,Bg=T(Tg)`
  width: 24px;
  min-width: 24px;
  max-width: 24px;
  padding: 0;
  position: relative;
`,Vg=T.div`
  position: absolute;
  inset: 0;
  min-height: 40px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0 10px;
`,Hg=T.div`
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
`,Ug=T.div`
  flex: 1;
  height: 100%;
  padding: 0 8px;
  margin: 0 -10px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`,Wg=T.div`
  width: 6px;
  flex: 1;
  height: 100%;
  background-repeat: repeat-y;
  background-position: center;
  background-size: 6px 16px;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='16' viewBox='0 0 6 16' preserveAspectRatio='none'%3E%3Cpolyline points='3,0 0,4 6,8 0,12 3,16' fill='none' stroke='${encodeURIComponent(e.theme.BORDER)}' stroke-width='1.2'/%3E%3C/svg%3E")`};
`,Gg=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
`,Kg=T.button`
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
`,qg=T.p`
  color: ${e=>f(e.theme.PRIMARY,.8)};
  margin: 0 0 12px 0;
  font-size: 13px;
`,Jg=T.p`
  color: #ff6b6b;
  margin: 10px 0 0 0;
  font-size: 13px;
`,Yg=T.div`
  height: 1px;
  margin: 12px 0;
  background: ${e=>f(e.theme.BORDER,.7)};
`,Xg=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.35)};
`,Zg=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,Qg=T.div`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  font-size: 11px;
`,$g=T.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`,e_=T.button`
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
`,t_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,n_=T.p`
  color: ${e=>f(e.theme.PRIMARY,.78)};
  margin: 0;
  font-size: 12px;
`,r_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 320px;
  overflow-y: auto;
`,i_=T.div`
  background: ${e=>f(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,a_=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,o_=T.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #4b5563;
  background: rgba(0, 0, 0, 0.2);
  accent-color: #ffffff;
  margin: 0;
  pointer-events: none;
`,s_=T.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
`,c_=T.div`
  color: ${e=>f(e.theme.PRIMARY,.85)};
  font-size: 12px;
  font-style: italic;
  line-height: 1.25;
  white-space: pre-wrap;
`,l_=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`,u_=T.button`
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
`,d_=T.p`
  color: ${e=>f(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,f_=T.div`
  width: 100%;
  min-height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>f(e.theme.BORDER,.8)};
  background: ${e=>f(e.theme.BACKGROUND,.55)};
`,p_=T.div`
  width: ${e=>e.$small?`40px`:`60px`};
  min-width: ${e=>e.$small?`40px`:`60px`};
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>f(e.theme.BORDER,.8)};
  background: ${e=>f(e.theme.BACKGROUND,.55)};
`,m_=(e,t)=>{let n=[{id:crypto.randomUUID(),type:`initiative`,description:`Initiative value used for turn order. Can be edited via Right-Click or rolled with Click.`},{id:crypto.randomUUID(),type:`name`,description:`Name of the unit or character.`}],r=t?[{id:`card-column`,type:`card-column`}]:[];if(!e||e.length===0)return[...n,...r];let i=[...e].sort((e,t)=>e.col-t.col).map(e=>({id:e.id,type:e.type,name:e.styles?.labelName,useIcon:e.styles?.labelMode===`icon`,iconType:e.styles?.labelIcon,description:e.styles?.description,styles:e.styles}));return[...n,...i,...r]};const h_=()=>{let{theme:r}=qe(),{listLayout:i,attributes:a,isLoading:o}=gm();F(e=>e.roomMetadata);let s=F(e=>e.sceneMetadata),l=F(e=>e.items),u=F(e=>e.partyData),d=F(e=>e.playerData),f=F(e=>e.gridDpi),m=F(e=>e.setItems),[h,g]=(0,P.useState)([]),[_,v]=(0,P.useState)([]),[y,b]=(0,P.useState)(null),[x,S]=(0,P.useState)(1),[C,w]=(0,P.useState)(new Set),[T,E]=(0,P.useState)(null),[ee,te]=(0,P.useState)(null),[ne,ie]=(0,P.useState)(!1),[ae,oe]=(0,P.useState)(!1),[ce,le]=(0,P.useState)(!1),[ue,de]=(0,P.useState)({}),[fe,pe]=(0,P.useState)({}),[me,he]=(0,P.useState)({}),[ge,_e]=(0,P.useState)(null),[ve,ye]=(0,P.useState)({}),[k,be]=(0,P.useState)(null),[xe,A]=(0,P.useState)(!1),[Se,Ce]=(0,P.useState)(!1),[we,Te]=(0,P.useState)(!1),[Ee,Oe]=(0,P.useState)(()=>window.innerWidth<400),[ke,j]=(0,P.useState)(null),Ae=(0,P.useRef)(null),je=(0,P.useRef)({}),Me=(0,P.useRef)({}),Ne=(0,P.useRef)(null);(0,P.useEffect)(()=>{let e=()=>{Oe(window.innerWidth<400)};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let N=s,Pe=N[D.REVERSE_INITIATIVE]||!1,Fe=N[D.POPCORN_INITIATIVE]||!1,Ie=N[D.SHOW_CARD_ACCESS]||!1,Le=N[D.SHOW_NON_PARTY_UNITS]||!1,Re=N[D.SHOW_LIST_HP_NUMBERS],ze=typeof Re==`boolean`?Re:!0,Be=N[D.DICE_RANGE]||``,Ve=N[D.INITIATIVE_MODIFIER_BID]||``,He=N[D.INITIATIVE_MODIFIER_EXPR]||`@STAT`,Ue=He.trim().length>0?He:`@STAT`,We=N[D.SHOW_OWNER_ONLY_EDIT]||!1,Ge=String(d?.role||``).toUpperCase()===`GM`,Ke=d?.id||``,Je=re(D.INITIATIVE_LIST_COMPACT,Ke);(0,P.useEffect)(()=>{let e=s[Je],t=s[D.INITIATIVE_LIST_COMPACT];Te(typeof e==`boolean`?e:typeof t==`boolean`?t:!1)},[s,Je]);let Ye=async()=>{let e=!we;Te(e);try{await c.scene.setMetadata({[Je]:e})}catch(t){O.error(`Failed to persist initiative list compact mode`,t),Te(!e)}},Xe=async({notation:e,actionName:t,tokenName:n,senderId:r,senderColor:i})=>{try{await se({notation:e,actionName:t,senderName:n,senderId:r,senderColor:i},N)}catch(t){O.error(`Failed to send dice roll from InitiativeList`,e,t),O.log(e)}},Ze=e=>{let t=e;if(typeof t==`string`)try{t=JSON.parse(t)}catch{return[]}return Array.isArray(t)?t.map((e,t)=>{let n=e&&typeof e==`object`?e:{},r=n.inUse,i=typeof r==`boolean`?r:typeof r==`string`?[`true`,`1`,`yes`].includes(r.trim().toLowerCase()):typeof r==`number`?r===1:void 0;return{id:typeof n.id==`string`&&n.id?n.id:`entry-${t}`,name:typeof n.name==`string`?n.name:``,description:typeof n.description==`string`?n.description:``,...i===void 0?{}:{inUse:i}}}):[]};(0,P.useEffect)(()=>{g(l.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>{let t=e.metadata?.[p.INITIATIVE]||0,n=e.metadata[p.UNIT_NAME]||e.name||`Unknown`,r=e.metadata?.[p.BOSS_MODE]===!0,i=e.metadata?.[Qh]||0,a=u.find(t=>t.id===e.createdUserId)||(d?.id===e.createdUserId?d:void 0),o=String(a?.role||``).toUpperCase()===`GM`,s=a?.color||(d?.id===e.createdUserId?d?.color:void 0),c=o?void 0:ig(s,1),l={};return Object.keys(e.metadata||{}).forEach(t=>{t.startsWith(`com.battle-system.forge`)&&(l[t]=e.metadata?.[t])}),{id:e.id,initiative:t,name:n,isBoss:r,elevation:i,attributes:l,createdUserId:e.createdUserId,ownerNameOutlineColor:c,isInParty:e.metadata?.[p.IN_PARTY]===!0,isVisible:e.visible!==!1}}))},[l,u,d]);let L=(0,P.useMemo)(()=>Fe?[...h].sort((e,t)=>e.name.localeCompare(t.name)):[...h].sort((e,t)=>e.initiative===t.initiative?e.name.localeCompare(t.name):Pe?e.initiative-t.initiative:t.initiative-e.initiative),[h,Pe,Fe]),Qe=Uh({items:l,units:L,setItems:m,playerData:d}),R=(0,P.useMemo)(()=>{let e=new Map;return u.forEach(t=>{e.set(t.id,t)}),d&&!e.has(d.id)&&e.set(d.id,d),Array.from(e.values()).sort((e,t)=>e.name.localeCompare(t.name))},[u,d]),z=(e,t)=>{let n=parseInt(t)||0;g(t=>t.map(t=>t.id===e?{...t,initiative:n}:t))},$e=(e,t)=>{m(l.map(n=>n.id===e?{...n,metadata:{...n.metadata,[p.INITIATIVE]:t}}:n)),c.scene.items.updateItems([e],e=>{e[0].metadata[p.INITIATIVE]=t})},et=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},tt=(e,t,n)=>(typeof t==`number`&&(e=Math.max(t,e)),typeof n==`number`&&(e=Math.min(n,e)),e),nt=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(r.length===0)return tt(0,i,a);let o=r.match(/^([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),s=r.match(/^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),c=null;if(o){let e=o[1],n=parseFloat(o[2]);switch(e){case`+`:c=t+n;break;case`-`:c=t-n;break;case`*`:c=t*n;break;case`/`:c=n===0?t:t/n;break}}else if(s){let e=parseFloat(s[1]),t=s[2],n=parseFloat(s[3]);switch(t){case`+`:c=e+n;break;case`-`:c=e-n;break;case`*`:c=e*n;break;case`/`:c=n===0?e:e/n;break}}else{let e=parseFloat(r);Number.isNaN(e)||(c=e)}return tt(c===null||!Number.isFinite(c)?t:Math.trunc(c),i,a)},rt=e=>{let t=0;if(Ve){let n=h.find(t=>t.id===e);if(n){let e=n.attributes?.[`${M}/${Ve}`],r=Number(e),i=Number.isFinite(r)?r:0,a=De(Ue.replace(/@STAT/gi,`@${Ve}`).replace(/\bx\b/gi,`@${Ve}`),{bidValueMap:{[Ve]:i},onMissingBid:`useZero`});if(a.valid&&a.notation){let e=Number(a.notation);Number.isFinite(e)&&(t=Math.trunc(e))}}}return t},it=(e,t=`normal`)=>{let n=et(Be),r=Math.floor(Math.random()*n)+1,i=t===`normal`?null:Math.floor(Math.random()*n)+1,a=(i===null?r:t===`advantage`?Math.max(r,i):Math.min(r,i))+rt(e);z(e,String(a)),$e(e,a)},at=(e,t)=>{de(n=>({...n,[e]:t}))},ot=(e,t)=>{let n=nt(t,h.find(t=>t.id===e)?.initiative??0);de(t=>{let{[e]:n,...r}=t;return r}),g(t=>t.map(t=>t.id===e?{...t,initiative:n}:t)),$e(e,n)},st=e=>`ELE${e.slice(3)}`,ct=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o}},lt=async(t,r)=>{let i=st(t);try{await c.scene.items.deleteItems([i])}catch{}if(r===0)return;let a=l.find(e=>e.id===t);if(!a||!e(a))return;let o=ct(a,f),s=`${r>0?`🡹`:`🡻`}${Math.abs(r)}`,u=n().id(i).name(`Elevation Badge`).plainText(s).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(36).fontFamily(`Segoe UI`).textAlign(`CENTER`).position({x:o.minX-40,y:o.minY}).metadata({[Xh]:!0,[Zh]:t}).attachedTo(t).visible(a.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build();try{await c.scene.items.addItems([u])}catch(e){O.error(`Failed to add elevation badge`,t,e)}},ut=(e,t)=>{pe(n=>({...n,[e]:t}))},dt=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(!r)return tt(0,i,a);let o=parseFloat(r);return tt(Number.isFinite(o)?Math.trunc(o):t,i,a)},ft=(e,t)=>{let n=dt(t,h.find(t=>t.id===e)?.elevation??0,{min:-999,max:999});pe(t=>{let{[e]:n,...r}=t;return r}),g(t=>t.map(t=>t.id===e?{...t,elevation:n}:t)),m(l.map(t=>t.id===e?{...t,metadata:{...t.metadata,[Qh]:n}}:t)),c.scene.items.updateItems([e],e=>{e[0].metadata[Qh]=n}),lt(e,n)},pt=(e,t)=>{let n=e.trim();if(!n)return e;let r=/^([+\-*/])\s*-?\d+(?:\.\d+)?$/.test(n),i=/^-?\d+(?:\.\d+)?\s*[+\-*/]\s*-?\d+(?:\.\d+)?$/.test(n),a=/^-?\d+(?:\.\d+)?$/.test(n);if(!r&&!i&&!a)return e;let o=typeof t==`number`?t:parseFloat(String(t)),s=Number.isFinite(o)?o:0;return String(nt(n,s))},mt=(e,t,n)=>{let r=`${M}/${t}`,i=l.find(t=>t.id===e)?.metadata?.[r],a=pt(n,i);g(t=>t.map(t=>t.id===e?{...t,attributes:{...t.attributes,[r]:a}}:t)),m(l.map(t=>t.id===e?{...t,metadata:{...t.metadata,[r]:a}}:t)),c.scene.items.updateItems([e],e=>{e[0].metadata[r]=a})},ht=e=>a.find(t=>t.attr_bid===e)||null,gt=e=>{let t=ht(e);return typeof t?.attr_func==`string`&&t.attr_func.trim().length>0},_t=e=>{let t={};for(let n of a){let r=`${M}/${n.attr_bid}`,i=e.attributes?.[r];if(i==null||i===``)continue;let a=Number(i);Number.isFinite(a)&&(t[n.attr_bid]=a)}return t},vt=e=>{let t={};for(let n of a){let r=`${M}/${n.attr_bid}`,i=e.attributes?.[r];if(i==null||i===``)continue;let a=Number(i);Number.isFinite(a)&&(n.attr_name&&(t[n.attr_name]=a),n.attr_abbr&&(t[n.attr_abbr]=a))}return t},yt=(e,t)=>{let n=Array.from(e.matchAll(og));if(n.length!==1)return null;let r=n[0],i=r[0]||``,a=r[1]||``,o=r[2]||``,s=r[3]||``,c=r.index;if(!i||!a||!o||typeof c!=`number`)return null;let l=Number(a);if(!Number.isFinite(l)||l!==1||s)return null;let u=`2d${o}${t===`advantage`?`kh1`:`kl1`}`;return`${e.slice(0,c)}${u}${e.slice(c+i.length)}`},bt=(e,t)=>{let n=ht(t)?.attr_func;if(typeof n!=`string`||n.trim().length===0)return null;let r=De(n,{bidValueMap:_t(e),nameValueMap:vt(e),onMissingBid:`error`});return!r.valid||!r.notation?(O.warn(`Could not resolve notation for initiative list value-column`,{unitId:e.id,bid:t,error:r.error}),null):{notation:r.notation,actionName:ht(t)?.attr_name||t}},xt=async(e,t)=>{let n=bt(e,t);if(!n)return;let r=u.find(t=>t.id===e.createdUserId);await Xe({notation:n.notation,actionName:n.actionName,tokenName:e.name,senderId:e.createdUserId||d?.id||`unknown`,senderColor:r?.color||d?.color||`#ffffff`})},St=async(e,t,n)=>{let r=bt(e,t);if(!r)return;let i=n===`normal`?r.notation:yt(r.notation,n);if(!i)return;let a=u.find(t=>t.id===e.createdUserId),o=n===`normal`?``:n===`advantage`?` (Advantage)`:` (Disadvantage)`;await Xe({notation:i,actionName:`${r.actionName}${o}`,tokenName:e.name,senderId:e.createdUserId||d?.id||`unknown`,senderColor:a?.color||d?.color||`#ffffff`})};(0,P.useEffect)(()=>()=>{Object.values(je.current).forEach(e=>{window.clearTimeout(e)})},[]),(0,P.useEffect)(()=>{if(!k)return;let e=e=>{e.key===`Escape`&&be(null)};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[k]);let Ct=(e,t)=>`value-column:${e}:${t}`,wt=(e,t)=>`${e}:${t}`,Tt=e=>!!ve[e],Et=(e,t)=>{ye(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},Dt=e=>{be(e)},Ot=()=>{be(null)},kt=e=>{ye(t=>{let{[e]:n,...r}=t;return r})},At=(e,t)=>{let n=je.current[e];n&&window.clearTimeout(n),je.current[e]=window.setTimeout(()=>{Me.current[e]=!0,Et(e,t),delete je.current[e]},500)},jt=e=>{let t=je.current[e];t&&(window.clearTimeout(t),delete je.current[e])},Mt=e=>Me.current[e]?(delete Me.current[e],!0):!1,Nt=e=>{if(!We||Ge)return!0;let t=d?.id;return t?e.createdUserId===t:!1},Pt=e=>Ge?!0:e.isVisible,Ft=e=>Ge||Le?!1:!e.isInParty;(0,P.useEffect)(()=>{o||v(m_(i,Ie))},[i,o,Ie]),(0,P.useEffect)(()=>{let e=s[D.CURRENT_TURN],t=s[D.CURRENT_ROUND];e?b(e):L.length>0&&b(L[0].id),t&&S(t)},[s,L]);let It=async()=>{if(L.length===0)return;y&&await Qe.processEffectsForTurnEvent(`end`,y);let e=L.findIndex(e=>e.id===y)+1;if(e>=L.length){let e=x+1;S(e),b(L[0].id),await c.scene.setMetadata({[D.CURRENT_TURN]:L[0].id,[D.CURRENT_ROUND]:e}),await Qe.processEffectsForTurnEvent(`start`,L[0].id)}else b(L[e].id),await c.scene.setMetadata({[D.CURRENT_TURN]:L[e].id}),await Qe.processEffectsForTurnEvent(`start`,L[e].id)},Lt=async()=>{if(L.length===0)return;let e=L.findIndex(e=>e.id===y)-1;if(e<0){let e=Math.max(1,x-1);S(e),b(L[L.length-1].id),await c.scene.setMetadata({[D.CURRENT_TURN]:L[L.length-1].id,[D.CURRENT_ROUND]:e})}else b(L[e].id),await c.scene.setMetadata({[D.CURRENT_TURN]:L[e].id})},Rt=async e=>{Fe&&(C.has(e)||(b(e),await c.scene.setMetadata({[D.CURRENT_TURN]:e}),await Qe.processEffectsForTurnEvent(`start`,e)))},B=async()=>{y&&(await Qe.processEffectsForTurnEvent(`end`,y),w(e=>new Set([...e,y])),C.size+1,L.length)},zt=async()=>{let e=x+1;S(e),w(new Set),b(null),await c.scene.setMetadata({[D.CURRENT_TURN]:null,[D.CURRENT_ROUND]:e})},V=async e=>{Ce(!0);try{if(e===`clear-list`){let e=l.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await c.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata&&p.ON_LIST in e.metadata&&delete e.metadata[p.ON_LIST]})}),m(l.map(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return e;let t={...e.metadata||{}};return delete t[p.ON_LIST],{...e,metadata:t}})))}if(e===`reset-initiative`){let e=l.filter(e=>e.metadata?.[p.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await c.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata[p.INITIATIVE]=0})}),m(l.map(e=>e.metadata?.[p.ON_LIST]===!0?{...e,metadata:{...e.metadata||{},[p.INITIATIVE]:0}}:e)),g(e=>e.map(e=>l.some(t=>t.id===e.id&&t.metadata?.[p.ON_LIST]===!0)?{...e,initiative:0}:e)),de({}))}let t=e===`clear-list`?null:e===`reset-initiative`?[...L].sort((e,t)=>e.name.localeCompare(t.name))[0]?.id??null:L[0]?.id??null;S(1),b(t),w(new Set),await c.scene.setMetadata({[D.CURRENT_TURN]:t,[D.CURRENT_ROUND]:1}),A(!1)}catch(t){O.error(`Failed to reset encounter state`,{mode:e,error:t})}finally{Ce(!1)}},Bt=async e=>{let t=l.find(t=>t.id===e);if(t)try{await bh.CenterViewportOnImage(t)}catch(t){O.error(`Failed to center viewport on unit`,e,t)}},Vt=async(e,n)=>{try{let r=await c.viewport.getHeight(),i=r>800?700:r-100;await c.popover.open({id:t.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(n)}`,height:i,width:350,anchorElementId:e,hidePaper:!0,disableClickAway:!0})}catch(e){O.error(`Failed to open cards popover`,e)}},Ht=(e,t)=>{e.preventDefault(),e.stopPropagation(),te(null),E(t)},Ut=async e=>{if(T){if(!l.find(e=>e.id===T)){te(`Token not found in scene cache.`);return}ie(!0),te(null);try{await c.scene.items.updateItems([T],t=>{let n=t[0];n.createdUserId=e}),m(l.map(t=>t.id===T?{...t,createdUserId:e}:t)),E(null)}catch(t){O.error(`Failed to reassign token owner`,T,e,t),te(`Unable to assign token owner. Ensure you have permission to edit this token.`)}finally{ie(!1)}}},Wt=async()=>{if(!T)return;let e=l.find(e=>e.id===T);if(!e){te(`Token not found in scene cache.`);return}let t=e.metadata?.[p.BOSS_MODE]!==!0;if(t&&l.filter(e=>e.id!==T&&e.metadata?.[p.ON_LIST]===!0&&e.metadata?.[p.BOSS_MODE]===!0).length>=2){te(`A maximum of 2 bosses can be enabled at once.`);return}oe(!0),te(null);try{await c.scene.items.updateItems([T],e=>{let n={...e[0].metadata||{}};n[p.BOSS_MODE]=t,e[0].metadata=n}),m(l.map(e=>e.id===T?{...e,metadata:{...e.metadata||{},[p.BOSS_MODE]:t}}:e))}catch(e){O.error(`Failed to toggle boss mode`,T,e),te(`Unable to update boss mode for this token.`)}finally{oe(!1)}},Gt=async()=>{if(T){if(!l.find(e=>e.id===T)){te(`Token not found in scene cache.`);return}le(!0),te(null);try{await c.scene.items.updateItems([T],e=>{let t={...e[0].metadata||{}};p.ON_LIST in t&&delete t[p.ON_LIST],e[0].metadata=t}),m(l.map(e=>{if(e.id!==T)return e;let t={...e.metadata||{}};return delete t[p.ON_LIST],{...e,metadata:t}})),E(null)}catch(e){O.error(`Failed to remove token from initiative list`,T,e),te(`Unable to remove token from initiative list.`)}finally{le(!1)}}},Kt=(0,P.useMemo)(()=>T&&L.find(e=>e.id===T)||null,[T,L]),qt=(0,P.useMemo)(()=>T&&l.find(e=>e.id===T)||null,[T,l]),Jt=qt?.metadata?.[p.BOSS_MODE]===!0,Yt=(0,P.useMemo)(()=>ge&&L.find(e=>e.id===ge.unitId)||null,[ge,L]),Xt=(0,P.useMemo)(()=>ge&&a.find(e=>e.attr_bid===ge.bid)||null,[a,ge]),Zt=(0,P.useMemo)(()=>{if(!ge||!Yt)return[];let e=Yt.attributes[`${M}/${ge.bid}`];return Ze(e)},[ge,Yt]),Qt=(0,P.useMemo)(()=>Zt.some(e=>typeof e.inUse==`boolean`),[Zt]),$t=(0,P.useMemo)(()=>k&&L.find(e=>e.id===k.unitId)||null,[k,L]),en=(0,P.useMemo)(()=>we?_.filter(e=>e.type===`initiative`||e.type===`name`?!0:e.type===`card-column`&&Ie):_,[we,_,Ie]),tn=(0,P.useMemo)(()=>{let e=a.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),t=a.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`}),n=e?.attr_bid,r=t?.attr_bid,i=N[D.HP_CURRENT_BID],o=N[D.HP_MAX_BID],s=new Set(a.map(e=>e.attr_bid));return{currentHpBid:i&&s.has(i)?i:n,maxHpBid:o&&s.has(o)?o:r}},[a,N]),nn=(0,P.useMemo)(()=>L.filter(e=>Pt(e)),[L,Ge]),rn=(0,P.useMemo)(()=>{if(!Yt)return{};let e={};for(let t of a){let n=`${M}/${t.attr_bid}`,r=Yt.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(e[t.attr_bid]=i)}return e},[Yt,a]),an=(0,P.useMemo)(()=>{if(!Yt)return{};let e={};for(let t of a){let n=`${M}/${t.attr_bid}`,r=Yt.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(t.attr_name&&(e[t.attr_name]=i),t.attr_abbr&&(e[t.attr_abbr]=i))}return e},[Yt,a]),on=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=(e[1]||``).trim();if(!n)continue;let r=De(n,{bidValueMap:rn,nameValueMap:an,onMissingBid:`error`});!r.valid||!r.notation||t.push(r.notation)}return t};(0,P.useEffect)(()=>{Ne.current&&en.length>0&&(O.debug(`Adjusting window width based on table size`),setTimeout(()=>{if(Ne.current){let e=Ne.current.offsetWidth+4,t=Math.min(e,800);c.action.setWidth(t),O.log(`Adjusted window width to `+t)}},100))},[we,en.length,L.length]);let sn=e=>{if(!e)return null;let t=sg[e.toLowerCase()];return t?(0,I.jsx)(t,{}):null},cn=(e,t)=>{let n=window.innerWidth-t-8,r=Math.min(Math.max(e-t/2,8),Math.max(8,n));return{left:r,arrowX:e-r}},ln=e=>{let t=e.currentTarget.getBoundingClientRect(),n=`clientX`in e?e.clientX:t.left+t.width/2,r=t.top>72?`top`:`bottom`;return{anchorX:n,y:r===`top`?t.top:t.bottom,placement:r}},un=(e,t)=>{let n=ln(e),r=Math.min(320,Math.max(140,t.length*7+28)),i=cn(n.anchorX,r);j({text:t,...n,...i})},dn=()=>{j(null)};(0,P.useLayoutEffect)(()=>{if(!ke||!Ae.current)return;let e=Ae.current.getBoundingClientRect().width,t=cn(ke.anchorX,e);(Math.abs(t.left-ke.left)>.5||Math.abs(t.arrowX-ke.arrowX)>.5)&&j(e=>e&&{...e,...t})},[ke]);let fn=e=>e.type===`initiative`?(0,I.jsx)(Xd,{}):e.type===`roller`?null:e.type===`name`?`Name`:e.type===`card-column`?(0,I.jsx)(kd,{}):e.type===`divider-column`?null:e.useIcon&&e.iconType?sn(e.iconType):e.name||e.type,pn=e=>e.type===`divider-column`?{fixedWidth:rg}:e.type===`initiative`?{minWidth:tg}:e.type===`name`?{minWidth:ng}:{minWidth:eg},mn=(e,t)=>{let n=Nt(t),i=Ft(t),a=!Ge&&!ze;if(i&&e.type!==`initiative`&&e.type!==`name`&&e.type!==`divider-column`)return(0,I.jsx)(Tg,{theme:r,children:(0,I.jsx)(f_,{theme:r})});switch(e.type){case`initiative`:if(Fe)return(0,I.jsx)(Eg,{theme:r,children:(0,I.jsx)(Ag,{onClick:e=>{e.stopPropagation(),n&&(C.has(t.id)||(t.id===y?B():Rt(t.id)))},children:C.has(t.id)?(0,I.jsx)(_d,{color:r.OFFSET}):t.id===y?(0,I.jsx)(gd,{color:r.PRIMARY}):(0,I.jsx)(vd,{color:r.BORDER})})});let i=`initiative:${t.id}`,o=Tt(i);return(0,I.jsx)(Eg,{theme:r,children:(0,I.jsx)(jg,{theme:r,$isRollable:n&&!o,type:`text`,inputMode:`decimal`,value:ue[t.id]??String(t.initiative),readOnly:!n||!o,onChange:!n||!o?void 0:e=>at(t.id,e.target.value),onBlur:!n||!o?void 0:e=>{ot(t.id,e.target.value),kt(i)},onClick:()=>{n&&(o||Mt(i)||it(t.id))},onContextMenu:e=>{n&&(e.preventDefault(),Dt({kind:`initiative`,fieldKey:i,unitId:t.id,input:e.currentTarget}))},onTouchStart:e=>{n&&(o||At(i,e.currentTarget))},onTouchEnd:()=>{jt(i)},onTouchCancel:()=>{jt(i)},onKeyDown:e=>{if(n){if(!o&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),it(t.id);return}o&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})});case`name`:return(0,I.jsx)(Mg,{theme:r,title:`Right-click to assign owner`,$outlineColor:t.ownerNameOutlineColor,onDoubleClick:()=>Bt(t.id),onContextMenu:n?e=>Ht(e,t.id):void 0,children:t.isBoss?`💀 ${t.name}`:t.name});case`roller`:return(0,I.jsx)(Dg,{theme:r,children:(0,I.jsx)(Og,{theme:r,disabled:!n,onClick:e=>{e.stopPropagation(),n&&it(t.id)},title:`Roll initiative (1-${et(Be)})`,children:(0,I.jsx)(kg,{src:`/dice.svg`,alt:`Roll`})})});case`card-column`:return(0,I.jsx)(Tg,{theme:r,children:(0,I.jsx)(Ig,{id:`card-access-${t.id}`,theme:r,disabled:!n,onClick:e=>{e.stopPropagation(),n&&Vt(e.currentTarget.id,t.id)},title:`Open card for ${t.name}`,children:(0,I.jsx)(gd,{})})});case`value-column`:return(0,I.jsx)(Tg,{theme:r,children:(0,I.jsx)(Fg,{children:e.styles?.bidList?.map((i,o)=>{let s=gt(i),c=Ct(t.id,i),l=wt(t.id,i),u=s&&Tt(c),d=t.attributes[`${M}/${i}`],f=me[l]??(d==null||d===``?`0`:String(d)),p=i===tn.currentHpBid||i===tn.maxHpBid,m=!!Ke&&t.createdUserId===Ke,h=a&&p&&!m;return(0,I.jsxs)(P.Fragment,{children:[o>0&&(0,I.jsx)(Pg,{theme:r,children:e.styles?.dividers?.[o-1]||`/`}),h?(0,I.jsx)(p_,{theme:r,$small:e.styles?.bidList&&e.styles.bidList.length>2}):(0,I.jsx)(Ng,{theme:r,$isRollable:n&&s,value:f,$small:e.styles?.bidList&&e.styles.bidList.length>2,readOnly:!n||s&&!u,onChange:!n||s&&!u?void 0:e=>{let t=e.target.value;he(e=>({...e,[l]:t}))},onBlur:!n||s&&!u?void 0:e=>{mt(t.id,i,e.target.value),he(e=>{let{[l]:t,...n}=e;return n}),s&&kt(c)},onClick:s?()=>{n&&(u||Mt(c)||xt(t,i))}:void 0,onContextMenu:s?e=>{n&&(e.preventDefault(),Dt({kind:`attribute`,fieldKey:c,unitId:t.id,bid:i,input:e.currentTarget}))}:void 0,onTouchStart:s?e=>{n&&(u||At(c,e.currentTarget))}:void 0,onTouchEnd:s?()=>{jt(c)}:void 0,onTouchCancel:s?()=>{jt(c)}:void 0,onKeyDown:e=>{if(n){if(s&&!u&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),xt(t,i);return}(u||!s)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})]},i)})})});case`list-column`:return(0,I.jsx)(Tg,{theme:r,children:(0,I.jsx)(Ig,{theme:r,disabled:!n,onClick:r=>{if(r.stopPropagation(),!n)return;let i=e.styles?.bidList?.[0];i&&_e({unitId:t.id,bid:i})},title:`Open list reference`,children:(0,I.jsx)(ud,{})})});case`checkbox-column`:return(0,I.jsx)(Tg,{theme:r,children:(0,I.jsx)(Fg,{children:e.styles?.bidList?.map(i=>{let a=!!t.attributes[`${M}/${i}`],o=e.styles?.inputType===`slider`,s=e=>{g(n=>n.map(n=>n.id===t.id?{...n,attributes:{...n.attributes,[`${M}/${i}`]:e}}:n)),m(l.map(n=>n.id===t.id?{...n,metadata:{...n.metadata,[`${M}/${i}`]:e}}:n)),c.scene.items.updateItems([t.id],t=>{t[0].metadata[`${M}/${i}`]=e})};return o?(0,I.jsx)(Rg,{type:`button`,theme:r,$active:a,disabled:!n,onClick:n?()=>{s(!a)}:void 0,children:(0,I.jsx)(zg,{theme:r,$active:a})},i):(0,I.jsx)(Lg,{theme:r,type:`checkbox`,checked:a,disabled:!n,onChange:n?e=>{s(e.target.checked)}:void 0},i)})})});case`special-column`:let s=sn(e.iconType);if(e.styles?.specialType===`elevation`){let e=fe[t.id];return(0,I.jsx)(Jh,{theme:r,unit:t,canInteract:n,elevationDraftValue:e,onElevationDraftChange:ut,onCommitElevationChange:ft})}else{let e=Qe.getEffectsForUnit(t.id).length;return(0,I.jsx)(Yh,{theme:r,canInteract:n,icon:s||(0,I.jsx)(Gd,{}),activeEffectsCount:e,onOpen:()=>Qe.handleOpenEffectsModal(t.id)})}case`divider-column`:return(0,I.jsx)(Bg,{theme:r,children:(0,I.jsx)(Vg,{children:e.styles?.styleDesign===`zigzag`?(0,I.jsx)(Ug,{children:(0,I.jsx)(Wg,{theme:r})}):(0,I.jsx)(Hg,{theme:r,$style:e.styles?.styleDesign})})});default:return(0,I.jsx)(Tg,{theme:r,children:`-`})}};if(o)return(0,I.jsx)(cg,{children:(0,I.jsx)(lg,{theme:r,children:`Loading...`})});let H=we||Ee,hn=we?`R: ${x}`:`Round: ${x}`;return(0,I.jsxs)(cg,{children:[(0,I.jsx)(ug,{children:(0,I.jsxs)(vg,{ref:Ne,theme:r,$compact:we,children:[(0,I.jsx)(yg,{theme:r,children:(0,I.jsx)(bg,{children:en.map(e=>{let t=e.description??`This has no description.`,n=pn(e);return(0,I.jsx)(xg,{theme:r,$minWidth:n.minWidth,$fixedWidth:n.fixedWidth,onMouseEnter:e=>un(e,t),onMouseMove:e=>un(e,t),onMouseLeave:dn,onFocus:e=>un(e,t),onBlur:dn,children:fn(e)},e.id)})})}),(0,I.jsx)(Cg,{children:nn.map(e=>(0,I.jsx)(wg,{$isCurrentTurn:e.id===y,theme:r,children:en.map(t=>(0,I.jsx)(P.Fragment,{children:mn(t,e)},t.id))},e.id))})]})}),(0,I.jsxs)(dg,{theme:r,$compactMode:we,children:[(0,I.jsxs)(fg,{$compactMode:we,children:[we?(0,I.jsxs)(I.Fragment,{children:[Ge&&(0,I.jsx)(pg,{theme:r,$compact:!0,onClick:Lt,children:(0,I.jsx)(id,{})}),Ge&&(0,I.jsx)(pg,{theme:r,$compact:!0,onClick:It,children:(0,I.jsx)(ad,{})})]}):Fe?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(pg,{theme:r,onClick:B,disabled:!y||C.has(y),children:`End Turn`}),(0,I.jsx)(_g,{theme:r,$compactMode:we,children:hn}),(0,I.jsx)(pg,{theme:r,$compact:H,onClick:zt,disabled:C.size<L.length,children:H?(0,I.jsx)(ad,{}):`Next`})]}):(0,I.jsxs)(I.Fragment,{children:[Ge&&(0,I.jsx)(pg,{theme:r,$compact:!0,onClick:Lt,children:(0,I.jsx)(id,{})}),(0,I.jsx)(_g,{theme:r,$compactMode:we,children:hn}),Ge&&(0,I.jsx)(pg,{theme:r,$compact:!0,onClick:It,children:(0,I.jsx)(ad,{})})]}),we&&(0,I.jsx)(hg,{theme:r,onClick:()=>{Ye()},title:`Switch to Fullsize list`,children:(0,I.jsx)(Pd,{})})]}),!we&&(0,I.jsx)(gg,{theme:r,$hasReset:Ge,onClick:()=>{Ye()},title:`Switch to Compact list`,children:(0,I.jsx)(Fd,{})}),Ge&&!we&&(0,I.jsx)(mg,{theme:r,onClick:()=>A(!0),disabled:Se,title:`Reset round/turn state`,children:(0,I.jsx)(Rd,{})})]}),ke&&(0,I.jsx)(Sg,{ref:Ae,theme:r,$left:ke.left,$y:ke.y,$placement:ke.placement,$arrowX:ke.arrowX,role:`tooltip`,children:ke.text}),(0,I.jsxs)(hm,{isOpen:!!T,title:Kt?`Unit: ${Kt.name}`:`Unit`,onClose:()=>{ne||ae||ce||(E(null),te(null))},closeOnOverlayClick:!ne&&!ae&&!ce,maxWidth:`520px`,children:[(0,I.jsx)(qg,{theme:r,children:`Select a player to become the owner.`}),(0,I.jsxs)(Gg,{children:[R.map(e=>(0,I.jsxs)(Kg,{theme:r,$isCurrent:qt?.createdUserId===e.id,onClick:()=>Ut(e.id),disabled:ne||ae||ce,children:[e.name,qt?.createdUserId===e.id?` (current)`:``]},e.id)),(0,I.jsx)(Kg,{theme:r,onClick:()=>{Gt()},disabled:ne||ae||ce,children:ce?`Removing...`:`Remove Unit from List`})]}),(0,I.jsx)(Yg,{theme:r}),(0,I.jsxs)(Xg,{theme:r,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(Zg,{theme:r,children:`Boss Mode`}),(0,I.jsx)(Qg,{theme:r,children:`Shows a large encounter HP bar in scene (max 2 bosses).`})]}),(0,I.jsx)($g,{children:(0,I.jsx)(e_,{type:`button`,theme:r,$active:Jt,disabled:ne||ae||ce,"aria-label":`Toggle boss mode`,"aria-pressed":Jt,onClick:()=>{Wt()}})})]}),ee&&(0,I.jsx)(Jg,{theme:r,children:ee})]}),(0,I.jsxs)(hm,{isOpen:!!k,title:k?.kind===`initiative`?`Initiative: ${$t?.name||`Unit`}`:ht(k?.bid||``)?.attr_name||`Roll Options`,onClose:Ot,maxWidth:`460px`,children:[(0,I.jsx)(qg,{theme:r,children:`Choose an action for this rollable field.`}),(0,I.jsxs)(Gg,{children:[(0,I.jsx)(Kg,{theme:r,onClick:()=>{k&&(Ot(),Et(k.fieldKey,k.input))},children:`Edit value`}),(()=>{if(!k||!$t)return null;if(k.kind===`initiative`)return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Kg,{theme:r,onClick:()=>{Ot(),it(k.unitId,`advantage`)},children:`Roll with Advantage`}),(0,I.jsx)(Kg,{theme:r,onClick:()=>{Ot(),it(k.unitId,`disadvantage`)},children:`Roll with Disadvantage`})]});let e=k.bid||``,t=bt($t,e);if(!t)return null;let n=yt(t.notation,`advantage`),i=yt(t.notation,`disadvantage`);return!n||!i?null:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Kg,{theme:r,onClick:()=>{Ot(),St($t,e,`advantage`)},children:`Roll with Advantage`}),(0,I.jsx)(Kg,{theme:r,onClick:()=>{Ot(),St($t,e,`disadvantage`)},children:`Roll with Disadvantage`})]})})()]})]}),(0,I.jsx)(Wh,{manager:Qe}),(0,I.jsxs)(hm,{isOpen:xe,title:`Reset Encounter`,onClose:()=>{Se||A(!1)},closeOnOverlayClick:!Se,maxWidth:`460px`,children:[(0,I.jsx)(qg,{theme:r,children:`Choose how you want to reset initiative state.`}),(0,I.jsxs)(Gg,{children:[(0,I.jsx)(Kg,{theme:r,onClick:()=>{V(`round`)},disabled:Se,children:Se?`Resetting...`:`Reset Round`}),(0,I.jsx)(Kg,{theme:r,onClick:()=>{V(`reset-initiative`)},disabled:Se,children:Se?`Resetting...`:`Reset Round & Initiative`}),(0,I.jsx)(Kg,{theme:r,onClick:()=>{V(`clear-list`)},disabled:Se,children:Se?`Resetting...`:`Reset Round & Clear List`})]})]}),(0,I.jsx)(hm,{isOpen:!!ge,title:Yt?`${Xt?.attr_name||`List`} for ${Yt.name}`:`List Reference`,onClose:()=>{_e(null)},maxWidth:`620px`,children:(0,I.jsxs)(t_,{children:[(0,I.jsx)(n_,{theme:r}),Zt.length===0?(0,I.jsx)(d_,{theme:r,children:`No entries.`}):(0,I.jsx)(r_,{children:Zt.map(e=>(0,I.jsxs)(i_,{theme:r,children:[(0,I.jsxs)(a_,{children:[Qt?(0,I.jsx)(o_,{type:`checkbox`,checked:!!e.inUse,readOnly:!0,tabIndex:-1}):null,(0,I.jsx)(s_,{theme:r,children:e.name||`(Unnamed)`})]}),e.description?(0,I.jsx)(c_,{theme:r,children:e.description}):null,(()=>{let t=on(e.description||``);return t.length===0?null:(0,I.jsx)(l_,{children:t.map((t,n)=>(0,I.jsx)(u_,{type:`button`,theme:r,onClick:()=>{let n=Yt?.createdUserId?u.find(e=>e.id===Yt.createdUserId):null;Xe({notation:t,actionName:e.name||Xt?.attr_name||`List Roll`,tokenName:Yt?.name||`Unknown`,senderId:Yt?.createdUserId||d?.id||`unknown`,senderColor:n?.color||d?.color||`#ffffff`})},title:t,children:t},`${e.id}-inline-notation-${n}`))})})()]},e.id))})]})})]})},g_=`${t.EXTENSIONID}-partyhud`,__=async()=>{await c.modal.open({id:g_,url:`/pages/forgeparty.html`,fullScreen:!0,hideBackdrop:!0,hidePaper:!0,disablePointerEvents:!0})},v_=async()=>{await c.modal.close(g_)};var y_=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,b_=T.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>f(e.theme.BACKGROUND,.35)};
`,x_=T.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`,S_=T(x_)`
  justify-content: center;
`,C_=T.span`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: ${e=>f(e.theme.PRIMARY,.9)};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`,w_=T.button`
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
`,T_=T.select`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px;
  min-width: 160px;
`,E_=T.p`
  margin: 0;
  font-size: 12px;
  color: ${e=>f(e.theme.PRIMARY,.8)};
`,D_=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${e=>e.$disabled?.55:1};
`,O_=T.span`
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
`,k_=T.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>f(e.theme.BACKGROUND,.35)};
`,A_=T.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
`,j_=T.img`
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
`,M_=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,N_=T.span`
  color: ${e=>e.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,P_=T.input`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>f(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
`,F_=T.p`
  color: ${e=>e.theme.PRIMARY};
  margin: 0;
`,I_=e=>{switch(e){case`bottom`:return`left`;case`left`:return`top`;case`top`:return`right`;case`right`:default:return`bottom`}},L_=e=>e===`bottom`||e===`left`||e===`top`||e===`right`;const R_=()=>{let t=(0,P.useRef)(!1),{theme:n}=qe(),{attributes:r}=gm(),i=F(e=>e.items),a=F(e=>e.sceneMetadata);F(e=>e.roomMetadata);let o=F(e=>e.playerData),s=a,l=String(o?.role||``).toUpperCase()===`GM`,u=o?.id,d=re(D.PARTY_HUD_OPEN,u),f=re(D.PARTY_HUD_ORIENTATION,u),m=(s[d]??s[D.PARTY_HUD_OPEN])===!0,h=s[f]??s[D.PARTY_HUD_ORIENTATION],g=L_(h)?h:`bottom`,_=s[D.PARTY_HUD_ATTR_ONE]||``,v=s[D.PARTY_HUD_ATTR_TWO]||``,y=s[D.PARTY_HUD_SHOW_HP_BARS]===!0,b=s[D.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!y,x=i.filter(e=>e.metadata[p.IN_PARTY]===!0),S=(0,P.useMemo)(()=>r.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[r]),C=async(e,t)=>{await c.scene.setMetadata({[e]:t})},w=async()=>{let e=!m;if(await C(d,e),!e){await v_(),t.current=!1;return}await __(),t.current=!0},T=async()=>{await C(f,I_(g))},E=async(e,t)=>{let n=t.trim();await c.scene.items.updateItems([e],e=>{let t={...e[0].metadata||{}};n?t[p.PORTRAIT_URL]=n:delete t[p.PORTRAIT_URL],e[0].metadata=t})};return(0,I.jsx)(td.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,I.jsxs)(im,{theme:n,children:[(0,I.jsx)(am,{theme:n,children:`Party`}),(0,I.jsxs)(b_,{theme:n,children:[(0,I.jsxs)(x_,{children:[(0,I.jsxs)(w_,{theme:n,onClick:()=>void T(),children:[`Display: `,g.toUpperCase()]}),(0,I.jsx)(w_,{theme:n,onClick:()=>void w(),children:m?`Close Party HUD`:`Open Party HUD`})]}),l&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(S_,{children:[(0,I.jsx)(C_,{theme:n,children:`Show in HUD:`}),(0,I.jsxs)(D_,{$disabled:!l,children:[(0,I.jsx)(O_,{theme:n,children:`Show HP Bars`}),(0,I.jsx)(X,{label:`Party HUD Show HP Bars`,isOn:y,onChange:e=>{l&&(C(D.PARTY_HUD_SHOW_HP_BARS,e),e&&C(D.PARTY_HUD_SHOW_HP_NUMBERS,!1))}})]}),(0,I.jsxs)(D_,{$disabled:!l,children:[(0,I.jsx)(O_,{theme:n,children:`Show HP Numbers`}),(0,I.jsx)(X,{label:`Party HUD Show HP Numbers`,isOn:b,onChange:e=>{l&&(C(D.PARTY_HUD_SHOW_HP_NUMBERS,e),e&&C(D.PARTY_HUD_SHOW_HP_BARS,!1))}})]}),(0,I.jsxs)(T_,{theme:n,disabled:!l,value:_,onChange:e=>{let t=e.target.value;C(D.PARTY_HUD_ATTR_ONE,t),t&&t===v&&C(D.PARTY_HUD_ATTR_TWO,``)},children:[(0,I.jsx)(`option`,{value:``,children:`Extra Slot 1 (None)`}),S.map(e=>(0,I.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,I.jsxs)(T_,{theme:n,disabled:!l,value:v,onChange:e=>{let t=e.target.value;C(D.PARTY_HUD_ATTR_TWO,t),t&&t===_&&C(D.PARTY_HUD_ATTR_ONE,``)},children:[(0,I.jsx)(`option`,{value:``,children:`Extra Slot 2 (None)`}),S.map(e=>(0,I.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]})]}),(0,I.jsx)(E_,{theme:n,children:(0,I.jsxs)(I.Fragment,{children:[`Configure Party HUD and portraits.`,(0,I.jsx)(`br`,{}),`LIST attributes are excluded.`]})})]})]}),x.length===0?(0,I.jsx)(F_,{theme:n,children:`No one is in the Party.  Add a unit using the ContextMenu on the token.`}):(0,I.jsx)(y_,{theme:n,children:x.map(t=>{let r=t.metadata?.[p.PORTRAIT_URL]||``,i=e(t)?t.image.url:void 0,a=t.metadata[p.UNIT_NAME]||t.name||`Unknown`,s=t.createdUserId===o?.id,c=l||s,u=i||`/logo.png`,d=!!r;return(0,I.jsxs)(k_,{theme:n,children:[(0,I.jsxs)(A_,{children:[(0,I.jsx)(j_,{theme:n,src:u,alt:a,$full:!d}),d&&(0,I.jsx)(j_,{theme:n,src:d?r:``,alt:`${a} override`,$overlay:!0})]}),(0,I.jsxs)(M_,{children:[(0,I.jsx)(N_,{theme:n,title:a,children:a}),c&&(0,I.jsx)(P_,{theme:n,defaultValue:r,placeholder:`Portrait URL override (optional)`,onBlur:e=>{E(t.id,e.target.value)}})]})]},t.id)})})]})})};var z_=`${M}/hp-bar-effect`,B_=`${M}/hp-bar-owner`,V_=`${M}/hp-number-text`,H_=`${M}/hp-number-owner`,U_=e=>`HPB${e.slice(3)}`,W_=e=>`HPN${e.slice(3)}`,G_=(e,t,n)=>Math.max(t,Math.min(n,e)),K_=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},q_=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||Me.CURRENT_HP,maxHpBid:n?.attr_bid||Me.MAX_HP}},J_=(e,t)=>{let n=q_(t),r=e[D.HP_CURRENT_BID],i=e[D.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},Y_=(e,t,n)=>{let r=e.metadata?.[`${M}/${t}`],i=e.metadata?.[`${M}/${n}`],a=K_(r),o=K_(i);return o===null||o<=0||a===null?null:G_(a/o*100,0,100)},X_=(e,t,n)=>{let r=e.metadata?.[`${M}/${t}`],i=e.metadata?.[`${M}/${n}`],a=K_(r),o=K_(i);return a===null?null:{currentHp:Math.trunc(a),maxHp:o===null?null:Math.trunc(o)}},Z_=e=>{let t=String(e||`bottom`).toLowerCase();return t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`},Q_=e=>{switch(Z_(e)){case`top`:return 0;case`bottom`:return 1;case`left`:return 2;case`right`:return 3;default:return 1}},$_=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o,width:r,height:i}},ev=(e,t,n)=>{let r=$_(e,t),i=r.minX+r.width*.5,a=r.minY+r.height*.5,o;switch(n){case`top`:o={x:i,y:r.minY+r.height*.18};break;case`bottom`:o={x:i,y:r.minY+r.height*.82};break;case`left`:o={x:r.minX+r.width*.18,y:a};break;case`right`:o={x:r.minX+r.width*.82,y:a};break}let s=r.width*.25,c=r.height*.18;return{x:o.x-s,y:o.y-c}};const tv=()=>{let t=F(e=>e.cacheReady),i=F(e=>e.sceneReady),a=F(e=>e.items),o=F(e=>e.localItems),s=F(e=>e.gridDpi),l=F(e=>e.roomMetadata),u=F(e=>e.sceneMetadata),d=F(e=>e.systemData);return(0,P.useEffect)(()=>{if(!t||!i)return;let l=!1;return(async()=>{let t=u,i=t[D.SHOW_HP_BARS]??!1,f=t[D.SHOW_HP_NUMBERS]??!1,m=i,h=!i&&f,g=Z_(t[D.HP_BAR_ORIENTATION]),_=Q_(t[D.HP_BAR_ORIENTATION]),{currentHpBid:v,maxHpBid:x}=J_(t,d?.attributes||[]),S=o.filter(e=>y(e)&&e.metadata?.[z_]===!0),C=o.filter(e=>b(e)&&e.metadata?.[V_]===!0);if(!m&&S.length>0)try{await c.scene.local.deleteItems(S.map(e=>e.id))}catch(e){O.error(`Failed to remove HP bar effects`,e)}if(!h&&C.length>0)try{await c.scene.local.deleteItems(C.map(e=>e.id))}catch(e){O.error(`Failed to remove HP number texts`,e)}if(!m&&!h)return;let w=a.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),T=new Map,E=new Map;for(let t of w){if(m){let e=Y_(t,v,x);e!==null&&T.set(U_(t.id),{unitId:t.id,hpPercent:e})}if(h&&e(t)){let e=X_(t,v,x);if(e){let n=e.maxHp===null?`${e.currentHp}`:`${e.currentHp}/${e.maxHp}`;E.set(W_(t.id),{unitId:t.id,text:n,position:ev(t,s,g)})}}}if(m){let e=new Map(S.map(e=>[e.id,e])),t=Array.from(T.entries()).filter(([t])=>!e.has(t)),n=S.filter(e=>!T.has(e.id)),i=S.filter(e=>{let t=T.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`orientation`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return e.attachedTo!==t.unitId||!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-_)>.001});if(l)return;if(n.length>0)try{await c.scene.local.deleteItems(n.map(e=>e.id))}catch(e){O.error(`Failed to remove stale HP bar effects`,e)}if(t.length>0){let e=t.map(([e,t])=>r().id(e).name(`HP Bar Effect`).effectType(`ATTACHMENT`).attachedTo(t.unitId).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).uniforms([{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:_}]).sksl(`
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
`).metadata({[z_]:!0,[B_]:t.unitId}).build());try{await c.scene.local.addItems(e)}catch(e){O.error(`Failed to add HP bar effects`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await c.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=T.get(e.id);if(!t)return;e.attachedTo=t.unitId;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:_}],e.metadata={...e.metadata,[z_]:!0,[B_]:t.unitId}})})}catch(e){O.error(`Failed to update HP bar effects`,e)}}}if(h){let e=new Map(C.map(e=>[e.id,e])),t=Array.from(E.entries()).filter(([t])=>!e.has(t)),r=C.filter(e=>!E.has(e.id)),i=C.filter(e=>{let t=E.get(e.id);if(!t)return!1;let n=e.text?.plainText,r=Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01;return e.attachedTo!==t.unitId||n!==t.text||r});if(l)return;if(r.length>0)try{await c.scene.local.deleteItems(r.map(e=>e.id))}catch(e){O.error(`Failed to remove stale HP number texts`,e)}if(t.length>0){let e=t.map(([e,t])=>{let r=w.find(e=>e.id===t.unitId);return n().id(e).name(`HP Number Text`).plainText(t.text).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(28).fontFamily(`Segoe UI`).textAlign(`CENTER`).position(t.position).metadata({[V_]:!0,[H_]:t.unitId}).attachedTo(t.unitId).visible(r?.visible??!0).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build()});try{await c.scene.local.addItems(e)}catch(e){O.error(`Failed to add HP number texts`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await c.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=E.get(e.id);if(!t)return;e.attachedTo=t.unitId,e.position=t.position;let n=e;n.text&&(n.text.plainText=t.text),e.metadata={...e.metadata,[V_]:!0,[H_]:t.unitId}})})}catch(e){O.error(`Failed to update HP number texts`,e)}}}})(),()=>{l=!0}},[t,i,a,o,s,l,u,d]),null};var nv=`${M}/death-effect-token`,rv=`${M}/death-effect-owner`,iv=e=>`DTH${e.slice(3)}`,av=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},ov=e=>({currentHpBid:e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`})?.attr_bid||Me.CURRENT_HP}),sv=(e,t)=>{let n=ov(t),r=e[D.HP_CURRENT_BID],i=new Set(t.map(e=>e.attr_bid));return r&&i.has(r)?r:n.currentHpBid},cv=(e,t)=>{let n=e.metadata?.[`${M}/${t}`];return av(n)};const lv=()=>{let t=F(e=>e.cacheReady),n=F(e=>e.sceneReady),i=F(e=>e.items),a=F(e=>e.localItems),o=F(e=>e.roomMetadata),s=F(e=>e.sceneMetadata),l=F(e=>e.systemData);return(0,P.useEffect)(()=>{if(!t||!n)return;let o=!1;return(async()=>{let t=s,n=t[D.SHOW_DEATH_EFFECT]??!1,u=sv(t,l?.attributes||[]),d=a.filter(e=>y(e)&&e.metadata?.[nv]===!0);if(!n){if(d.length>0)try{await c.scene.local.deleteItems(d.map(e=>e.id))}catch(e){O.error(`Failed to remove death token effects`,e)}return}let f=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),m=new Map;f.forEach(e=>{cv(e,u)===0&&m.set(iv(e.id),e.id)});let h=new Map(d.map(e=>[e.id,e])),g=Array.from(m.entries()).filter(([e])=>!h.has(e)),_=d.filter(e=>!m.has(e.id)),v=d.filter(e=>{let t=m.get(e.id);if(!t)return!1;let n=e;return e.attachedTo!==t||n.metadata?.[rv]!==t});if(!o){if(_.length>0)try{await c.scene.local.deleteItems(_.map(e=>e.id))}catch(e){O.error(`Failed to remove stale death token effects`,e)}if(g.length>0){let e=g.map(([e,t])=>r().id(e).name(`Death Token Effect`).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(`
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
`).metadata({[nv]:!0,[rv]:t}).build());try{await c.scene.local.addItems(e)}catch(e){O.error(`Failed to add death token effects`,e)}}if(v.length>0)try{await c.scene.local.updateItems(v.map(e=>e.id),e=>{e.forEach(e=>{let t=m.get(e.id);t&&(e.attachedTo=t,e.metadata={...e.metadata,[nv]:!0,[rv]:t})})})}catch(e){O.error(`Failed to update death token effects`,e)}}})(),()=>{o=!0}},[t,n,i,a,o,s,l]),null};var uv=`${M}/buff-effect-token`,dv=`${M}/buff-effect-owner`,fv=`${M}/debuff-effect-token`,pv=`${M}/debuff-effect-owner`,mv=`${M}/effect-preset`,hv=e=>`EFB${e.slice(3)}`,gv=e=>`EFD${e.slice(3)}`,_v=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const vv=()=>{let t=F(e=>e.cacheReady),n=F(e=>e.sceneReady),i=F(e=>e.items),a=F(e=>e.localItems),o=F(e=>e.roomMetadata),s=F(e=>e.sceneMetadata);return(0,P.useEffect)(()=>{if(!t||!n)return;let o=!1;return(async()=>{let t=s,n=t[D.BUFF_VISUAL_PRESET],l=t[D.DEBUFF_VISUAL_PRESET],u=Rm(n)?n:Pm,d=zm(l)?l:Fm,f=Bm(u),m=Vm(d),h=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0),g=new Set(h.map(e=>e.id)),_=new Map,v=(e,t)=>{let n=_.get(e)||{hasBuff:!1,hasDebuff:!1};t===`buff`?n.hasBuff=!0:n.hasDebuff=!0,_.set(e,n)};i.forEach(e=>{if(e.metadata?.[p.ON_LIST]!==!0)return;let t=_v(e.metadata?.[xh]);t.length!==0&&t.forEach(t=>{t.effectType!==`neutral`&&(t.targets.length>0?t.targets:[e.id]).forEach(e=>{g.has(e)&&(t.effectType===`buff`||t.effectType===`debuff`)&&v(e,t.effectType)})})});let b=new Map,x=new Map;h.forEach(e=>{let t=_.get(e.id);t?.hasBuff&&b.set(hv(e.id),e.id),t?.hasDebuff&&x.set(gv(e.id),e.id)});let S=a.filter(e=>y(e)&&e.metadata?.[uv]===!0),C=a.filter(e=>y(e)&&e.metadata?.[fv]===!0),w=async e=>{let{existing:t,desiredByOverlayId:n,preset:i,shader:a,name:s,flagKey:l,ownerKey:u}=e,d=new Map(t.map(e=>[e.id,e])),f=Array.from(n.entries()).filter(([e])=>!d.has(e)),p=t.filter(e=>!n.has(e.id)),m=t.filter(e=>{let t=n.get(e.id);if(!t)return!1;let r=e.metadata?.[mv];return e.attachedTo!==t||r!==i});if(!o){if(p.length>0)try{await c.scene.local.deleteItems(p.map(e=>e.id))}catch(e){O.error(`Failed to remove stale ${s.toLowerCase()} overlays`,e)}if(f.length>0){let e=f.map(([e,t])=>r().id(e).name(s).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(a).metadata({[l]:!0,[u]:t,[mv]:i}).build());try{await c.scene.local.addItems(e)}catch(e){O.error(`Failed to add ${s.toLowerCase()} overlays`,e)}}if(m.length>0)try{await c.scene.local.updateItems(m.map(e=>e.id),e=>{e.forEach(e=>{let t=n.get(e.id);if(!t)return;e.attachedTo=t;let r=e;r.sksl=a,e.metadata={...e.metadata,[l]:!0,[u]:t,[mv]:i}})})}catch(e){O.error(`Failed to update ${s.toLowerCase()} overlays`,e)}}};await w({existing:S,desiredByOverlayId:b,preset:u,shader:f,name:`Buff Token Effect`,flagKey:uv,ownerKey:dv}),await w({existing:C,desiredByOverlayId:x,preset:d,shader:m,name:`Debuff Token Effect`,flagKey:fv,ownerKey:pv})})(),()=>{o=!0}},[t,n,i,a,o,s]),null};var yv=`${M}/boss-hp-effect`,bv=`${M}/boss-hp-owner`,xv=`${M}/boss-hp-slot`,Sv=e=>`BOSSHP${e}`,Cv=(e,t,n)=>Math.max(t,Math.min(n,e)),wv=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},Tv=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||Me.CURRENT_HP,maxHpBid:n?.attr_bid||Me.MAX_HP}},Ev=(e,t)=>{let n=Tv(t),r=e[D.HP_CURRENT_BID],i=e[D.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},Dv=(e,t,n)=>{let r=e.metadata?.[`${M}/${t}`],i=e.metadata?.[`${M}/${n}`],a=wv(r),o=wv(i);return o===null||o<=0||a===null?null:Cv(a/o*100,0,100)};const Ov=()=>{let t=F(e=>e.cacheReady),n=F(e=>e.sceneReady),i=F(e=>e.items),a=F(e=>e.localItems),o=F(e=>e.roomMetadata),s=F(e=>e.sceneMetadata),l=F(e=>e.systemData);return(0,P.useEffect)(()=>{if(!t||!n)return;let o=!1;return(async()=>{let{currentHpBid:t,maxHpBid:n}=Ev(s,l?.attributes||[]),u=a.filter(e=>y(e)&&e.metadata?.[yv]===!0),d=i.filter(t=>e(t)&&t.metadata?.[p.ON_LIST]===!0&&t.metadata?.[p.BOSS_MODE]===!0).sort((e,t)=>{let n=Number(e.metadata?.[p.INITIATIVE]??0);return Number(t.metadata?.[p.INITIATIVE]??0)-n}).slice(0,2).map((e,r)=>{let i=Dv(e,t,n);return i===null?null:{id:Sv(r),unitId:e.id,slot:r,hpPercent:i}}).filter(e=>e!==null),f=new Map(d.map(e=>[e.id,e])),m=new Map(u.map(e=>[e.id,e])),h=u.filter(e=>!f.has(e.id)),g=d.filter(e=>!m.has(e.id)),_=u.filter(e=>{let t=f.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`slot`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-t.slot)>.001||e.metadata?.[bv]!==t.unitId});if(!o){if(h.length>0)try{await c.scene.local.deleteItems(h.map(e=>e.id))}catch(e){O.error(`Failed to remove stale boss HP viewport effects`,e)}if(g.length>0){let e=g.map(e=>r().id(e.id).name(`Boss HP Bar`).effectType(`VIEWPORT`).locked(!0).disableHit(!0).uniforms([{name:`hpPercent`,value:e.hpPercent},{name:`slot`,value:e.slot}]).sksl(`
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
`).metadata({[yv]:!0,[bv]:e.unitId,[xv]:e.slot}).build());try{await c.scene.local.addItems(e)}catch(e){O.error(`Failed to add boss HP viewport effects`,e)}}if(_.length>0)try{await c.scene.local.updateItems(_.map(e=>e.id),e=>{e.forEach(e=>{let t=f.get(e.id);if(!t)return;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`slot`,value:t.slot}],e.metadata={...e.metadata,[yv]:!0,[bv]:t.unitId,[xv]:t.slot}})})}catch(e){O.error(`Failed to update boss HP viewport effects`,e)}}})(),()=>{o=!0}},[t,n,i,a,o,s,l]),null};var kv=`${M}/current-turn-effect`;const Av=()=>{let e=F(e=>e.cacheReady),t=F(e=>e.sceneReady),n=F(e=>e.items),i=F(e=>e.roomMetadata),a=F(e=>e.sceneMetadata);return(0,P.useEffect)(()=>{if(!e||!t)return;let i=!1;return(async()=>{let e=a[D.SHOW_TURN_EFFECT]===!0,t=a[D.CURRENT_TURN];if(!e||!t){try{await c.scene.local.deleteItems([kv])}catch{}return}if(!n.find(e=>e.id===t)){try{await c.scene.local.deleteItems([kv])}catch{}return}if(!i){try{let e=!1;if(await c.scene.local.updateItems([kv],n=>{let r=n[0];r&&(r.attachedTo=t,e=!0)}),e)return}catch{}if(!i)try{let e=r().id(kv).name(`Current Turn Effect`).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).sksl(`
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

`).build();await c.scene.local.addItems([e])}catch(e){O.error(`Failed to sync current turn effect`,e)}}})(),()=>{i=!0}},[e,t,n,i,a]),null},jv=()=>{let[e,t]=(0,P.useState)(!1),{updateThemeFromSystem:n}=qe(),r=F(e=>e.roomMetadata),i=F(e=>e.cacheReady),a=F(e=>e.systemData),o=F(e=>e.setSystemData),s=()=>({theme:{primary:E.theme_primary,offset:E.theme_offset,background:E.theme_background,border:E.theme_border,background_url:E.background_url},cardLayout:E.card_layout,listLayout:E.list_layout,attributes:E.attributes,systemName:E.name,importDate:null,snapshotPublicId:null});return(0,P.useEffect)(()=>{!i&&e&&(t(!1),o(null))},[i,e,o]),(0,P.useEffect)(()=>{!i||!a||n(a.theme.primary,a.theme.offset,a.theme.background,a.theme.border,a.theme.background_url)},[i,a,n]),(0,P.useEffect)(()=>{if(e)return;let n=!0,a=async()=>{if(i)try{O.log(`Starting app initialization...`),await c(),n&&(t(!0),O.log(`App initialization complete`))}catch(e){O.error(`Error during app initialization:`,e),n&&t(!0)}},c=async()=>{let e=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Snapshot ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Snapshot ${t} is not a JSON array`);return n}throw Error(`Snapshot ${t} has invalid type`)},t=async t=>{let{data:n,error:r}=await C.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:t});if(r)return O.error(`Failed to load room snapshot:`,r),!1;let i=Array.isArray(n)?n[0]:n;if(!i||typeof i.snapshot_public_id!=`string`)return O.warn(`Room snapshot reference was set, but no snapshot record was returned`),!1;let a=e(i.card_layout,`card_layout`),s=e(i.list_layout,`list_layout`),c=e(i.attributes,`attributes`);return o({theme:{primary:i.theme_primary,offset:i.theme_offset,background:i.theme_background,border:i.theme_border,background_url:i.background_url},cardLayout:a,listLayout:s,attributes:c,systemName:i.system_name,importDate:i.imported_at,snapshotPublicId:i.snapshot_public_id}),O.log(`System data hydrated from room snapshot`,{snapshotPublicId:i.snapshot_public_id,systemName:i.system_name}),!0};try{let e=r[Wm.SNAPSHOT_PUBLIC_ID];if(typeof e==`string`&&e.trim().length>0&&await t(e))return;O.log(`Room snapshot reference missing or unavailable, initializing defaults`),await l()}catch(e){O.error(`Error loading system data:`,e),await l()}},l=async()=>{o(s()),O.log(`Default system initialized`)};return a(),()=>{n=!1}},[i,e,r,o,n]),(0,P.useEffect)(()=>{if(!i||!e)return;let t=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},n=r[Wm.SNAPSHOT_PUBLIC_ID],c=typeof n==`string`&&n.trim().length>0?n.trim():null;if(c===(a?.snapshotPublicId??null))return;let l=!1;return(async()=>{if(!c){l||(o(s()),O.log(`Room snapshot reference cleared, reverted runtime system to defaults`));return}let{data:e,error:n}=await C.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:c});if(n){O.error(`Failed to refresh system from room snapshot change:`,n);return}let r=Array.isArray(e)?e[0]:e;if(!r||typeof r.snapshot_public_id!=`string`){O.warn(`Room snapshot reference changed, but snapshot record was not found`);return}let i=t(r.card_layout),a=t(r.list_layout),u=t(r.attributes);if(!i||!a||!u){O.warn(`Room snapshot refresh returned invalid payload arrays`);return}l||(o({theme:{primary:r.theme_primary,offset:r.theme_offset,background:r.theme_background,border:r.theme_border,background_url:r.background_url},cardLayout:i,listLayout:a,attributes:u,systemName:r.system_name,importDate:r.imported_at,snapshotPublicId:r.snapshot_public_id}),O.log(`Runtime system refreshed from room snapshot change`,{snapshotPublicId:r.snapshot_public_id,systemName:r.system_name}))})(),()=>{l=!0}},[i,e,r,a,o]),{isInitialized:e}};var Mv=m`
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
`,Nv=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e2232;
  color: #ffffff;
`,Pv=T.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: #9d99ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Fv=T.p`
  margin-top: 20px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;function Iv(){let{sceneReady:e,cacheReady:t,playerData:n,roomMetadata:r,sceneMetadata:i}=F(),{isInitialized:a}=jv(),{theme:o}=qe(),[s,l]=(0,P.useState)(`ForgeMain`),[u,d]=(0,P.useState)(!1),f=(0,P.useRef)(!1),p=String(n?.role||``).toUpperCase()===`GM`,m=i,h=n?.id,g=(m[re(D.PARTY_HUD_OPEN,h)]??m[D.PARTY_HUD_OPEN])===!0,_=m[D.SHOW_PLAYER_VIEW]||!1,v=p||_,y=e&&t&&a;return(0,P.useEffect)(()=>{y&&Te()},[y]),(0,P.useEffect)(()=>{if(!y)return;let e=!0;return(async()=>{if(g&&!f.current){await __(),e&&(f.current=!0);return}!g&&f.current&&(await v_(),e&&(f.current=!1))})(),()=>{e=!1}},[y,g]),(0,P.useEffect)(()=>{y&&!v&&s===`ForgeMain`&&l(`Party`)},[y,v,s]),(0,P.useEffect)(()=>{s!==`ForgeMain`&&c.action.setWidth(350)},[s]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Mv,{theme:o}),!e||!t||!a?(0,I.jsxs)(Nv,{children:[(0,I.jsx)(Pv,{}),(0,I.jsx)(Fv,{children:e?t?a?`Loading...`:`Initializing system...`:`Loading cache...`:`Connecting to scene...`})]}):(0,I.jsxs)(Gp,{children:[(0,I.jsx)(tv,{}),(0,I.jsx)(lv,{}),(0,I.jsx)(vv,{}),(0,I.jsx)(Ov,{}),(0,I.jsx)(Av,{}),(0,I.jsx)(Kp,{theme:o,$backgroundUrl:o.BACKGROUND_URL,children:(0,I.jsx)(ul,{mode:`wait`,children:(()=>{switch(s){case`ForgeMain`:return v?(0,I.jsx)(h_,{},`main`):(0,I.jsx)(R_,{},`party`);case`Settings`:return p?(0,I.jsx)(Dm,{},`settings`):(0,I.jsx)(h_,{},`main`);case`Party`:return(0,I.jsx)(R_,{},`party`);case`System`:return p?(0,I.jsx)(vh,{},`system`):(0,I.jsx)(h_,{},`main`);case`ChatLog`:return(0,I.jsx)(Nm,{},`chatlog`)}})()})}),(0,I.jsx)(rm,{isOpen:u,currentPage:s,onToggle:()=>d(!u),onNavigate:e=>{if(!v&&e===`ForgeMain`){l(`Party`),d(!1);return}if(!p&&(e===`Settings`||e===`System`)){l(`ForgeMain`),d(!1);return}l(e),d(!1)},canAccessInitiativeList:v})]})]})}var Lv=Iv,Rv=class{static{this.ALPHANUMERICTEXTMATCH=/\s[\da-zA-Z]$/}};function zv(e){for(let t of Vv)if(e.includes(t)){let n=Vv[Math.floor(Math.random()*Vv.length)];return e.replace(t,n)}return Bv(e)}function Bv(e){return`${Vv[Math.floor(Math.random()*Vv.length)]} ${e}`}const Vv=`Grizzled.Wily.Stoic.Mellow.Pensive.Shrewd.Cautious.Hardy.Nimble.Tenacious.Gritty.Tolerant.Hardy.Adroit.Resilient.Slight.Stout.Durable.Subtle.Sober.Clever.Brave.Calm.Wise.Cunning.Alert.Swift.Agile.Loyal.Sturdy.Stable.Sneaky.Clever.Resourceful.Shady.Stalwart.Vigilant.Staunch.Fierce.Vigorous.Robust.Fearless.Dauntless.Resolute.Sagacious.Prudent.Judicious.Astute.Savvy.Sharp.Quick.Witty.Smart.Snippy.Crafty.Deft.Sly.Artful.Clever.Sneering.Tough.Rugged.Solid.Strong.Sturdy.Tough.Gritty.Rough.Hardened.Burly.Muscular.Brawny.Rowdy.Forceful.Snorting.Potent.Martial.Speckled.Mottled.Disheveled`.split(`.`);var Hv=`com.battle-system.forge/view-unit`,Uv=`com.battle-system.forge/view-unit-player`,Wv=e=>e.trim().toLowerCase(),Gv=e=>{if(typeof e!=`string`)return null;let t=e.trim();return t.length>0?t:null},Kv=e=>{let t=e.trim();return t?Rv.ALPHANUMERICTEXTMATCH.test(t)?t.slice(0,-2):t:e},qv=e=>{let t=typeof e.text?.plainText==`string`?e.text.plainText.trim():``;if(t.length>0)return t;let n=e.metadata?.[p.UNIT_NAME],r=typeof n==`string`?n.trim():``;if(r.length>0)return r;let i=typeof e.name==`string`?e.name.trim():``;return i.length>0?i:typeof e.name==`string`?e.name:``},Jv=async e=>{let n=await c.viewport.getHeight(),r=n>800?700:n-100;await c.popover.open({id:t.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(e)}`,height:r,width:350,anchorReference:`POSITION`,anchorPosition:{left:await c.viewport.getWidth()/2,top:await c.viewport.getHeight()/2},anchorOrigin:{horizontal:`CENTER`,vertical:`CENTER`},transformOrigin:{horizontal:`CENTER`,vertical:`CENTER`},hidePaper:!0,disableClickAway:!0})},Yv=async e=>{let t=Array.from(new Set(e.map(e=>e.trim()).filter(e=>e.length>0))),n=new Map;if(t.length===0)return n;let r=await me(),i=new Map;for(let e of r){let t=Wv(e.name);if(!t)continue;let n=i.get(t);n?n.push(e):i.set(t,[e])}for(let e of t){let t=Wv(e),r=i.get(t)?.[0];!r||!r.metadata||n.set(t,Ae(r.metadata))}try{let e=await we(t);for(let t of e){let e=Wv(t.name);!e||n.has(e)||!t.metadata||n.set(e,Ae(t.metadata))}let r=await Ee(t);for(let e of r){let t=Wv(e.name);!t||n.has(t)||!e.metadata||n.set(t,Ae(e.metadata))}}catch(e){O.log(`Remote collection lookup failed, using local collection only`,e)}return n};function Xv({children:e}){F(e=>e.roomMetadata);let t=F(e=>e.sceneMetadata),n=F(e=>e.items),r=F(e=>e.playerData),i=F(e=>e.systemData),a=t,o=i?.attributes??[],s=new Set(o.map(e=>e.attr_bid)),l=o.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`})?.attr_bid,u=o.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`})?.attr_bid,d=Gv(a[D.HP_CURRENT_BID]),f=Gv(a[D.HP_MAX_BID]),m=d&&(s.size===0||s.has(d))?d:l||(s.size===0?Me.CURRENT_HP:``),h=f&&(s.size===0||s.has(f))?f:u||(s.size===0?Me.MAX_HP:``),g=!!(m&&h),_=a[D.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?!0:a[D.SHOW_MODIFY_UNIT_CONTEXT_MENU]===!0,v=a[D.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===void 0?!0:a[D.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS]===!0;return(0,P.useEffect)(()=>{c.onReady(()=>{c.contextMenu.create({id:p.ON_LIST,icons:[{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,p.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}}],async onClick(e){if(O.info(`Add to Combat Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[p.ON_LIST]===!0))await c.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[p.ON_LIST],delete t.metadata[p.INITIATIVE]});else{let r=[],i=[],o=new Set(e.items.map(e=>e.id)),s=a[D.USE_DESCRIPTIVE_DUPLICATES]!==void 0,l=new Set(n.filter(e=>{if(o.has(e.id))return!1;let t=e.metadata[p.UNIT_NAME];return typeof t==`string`&&t.trim().length>0}).map(e=>Wv(String(e.metadata[p.UNIT_NAME]))));for(let t of e.items){if(t.metadata[p.FABRICATED]===!0)continue;let e=Kv(t.text?.plainText||t.name);r.push(e)}await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let u=await Yv(r);await c.action.setBadgeText(void 0);for(let t of e.items){let e={},n=t,r=qv(n);if(t.metadata[p.FABRICATED]!==!0){let i=Kv(n.text?.plainText||t.name),a=u.get(Wv(i));if(a&&Object.assign(e,a),(typeof e[p.UNIT_NAME]!=`string`||!String(e[p.UNIT_NAME]).trim())&&(e[p.UNIT_NAME]=r),e[p.FABRICATED]=!0,s){let n=String(e[p.UNIT_NAME]||i||t.name).trim(),r=Wv(n);if(r){let e=0;for(;l.has(r)&&e<20;)n=zv(n),r=Wv(n),e+=1;r&&l.add(r)}e[p.UNIT_NAME]=n}}(typeof e[p.UNIT_NAME]!=`string`||!String(e[p.UNIT_NAME]).trim())&&(e[p.UNIT_NAME]=r),e[p.ON_LIST]=!0,e[p.INITIATIVE]=0,i.push({id:t.id,metadata:e})}await c.scene.items.updateItems(e.items,e=>{for(let n of e){let e=i.find(e=>e.id===n.id);if(e&&(Object.assign(n.metadata,e.metadata),t[D.SHOW_NAMES]===!0)){let t=n,r=typeof e.metadata[p.UNIT_NAME]==`string`&&String(e.metadata[p.UNIT_NAME]).trim().length>0?String(e.metadata[p.UNIT_NAME]).trim():qv(t);t.text&&(t.text.plainText=r)}}})}}}),c.contextMenu.create({id:p.IN_PARTY,icons:[{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`!=`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`!=`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`==`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,p.IN_PARTY],operator:`==`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){O.info(`Add to Party Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[p.IN_PARTY]===!0)?await c.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[p.IN_PARTY]}):await c.scene.items.updateItems(e.items,e=>{for(let t of e)t.metadata[p.IN_PARTY]=!0})}}),c.contextMenu.create({id:Hv,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}}],async onClick(e){O.info(`View Unit Clicked: ${e.items[0].name}`);let r=e.items[0];if(!r)return;let i={};if(r.metadata[p.FABRICATED]!==!0){let e=r,o=qv(e),s=Kv(e.text?.plainText||r.name);await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let l=await Yv([s]);await c.action.setBadgeText(void 0);let u=l.get(Wv(s));u&&Object.assign(i,u),(typeof i[p.UNIT_NAME]!=`string`||!String(i[p.UNIT_NAME]).trim())&&(i[p.UNIT_NAME]=o),i[p.FABRICATED]=!0,a[D.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[p.UNIT_NAME]!=null&&e.id!==r.id).map(e=>e.metadata[p.UNIT_NAME]).includes(s)&&(i[p.UNIT_NAME]=zv(s)),await c.scene.items.updateItems([r],e=>{let n=e[0];if(Object.assign(n.metadata,i),t[D.SHOW_NAMES]===!0){let e=n,t=typeof i[p.UNIT_NAME]==`string`&&String(i[p.UNIT_NAME]).trim().length>0?String(i[p.UNIT_NAME]).trim():qv(e);e.text&&(e.text.plainText=t)}})}await Jv(r.id)}}),v?c.contextMenu.create({id:Uv,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){O.info(`View Unit Clicked: ${e.items[0].name}`);let r=e.items[0];if(!r)return;let i={};if(r.metadata[p.FABRICATED]!==!0){let e=r,o=qv(e),s=Kv(e.text?.plainText||r.name);await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let l=await Yv([s]);await c.action.setBadgeText(void 0);let u=l.get(Wv(s));u&&Object.assign(i,u),(typeof i[p.UNIT_NAME]!=`string`||!String(i[p.UNIT_NAME]).trim())&&(i[p.UNIT_NAME]=o),i[p.FABRICATED]=!0,a[D.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[p.UNIT_NAME]!=null&&e.id!==r.id).map(e=>e.metadata[p.UNIT_NAME]).includes(s)&&(i[p.UNIT_NAME]=zv(s)),await c.scene.items.updateItems([r],e=>{let n=e[0];if(Object.assign(n.metadata,i),t[D.SHOW_NAMES]===!0){let e=n,t=typeof i[p.UNIT_NAME]==`string`&&String(i[p.UNIT_NAME]).trim().length>0?String(i[p.UNIT_NAME]).trim():qv(e);e.text&&(e.text.plainText=t)}})}await Jv(r.id)}}):c.contextMenu.remove(Uv).catch(()=>{}),g&&_?c.contextMenu.create({id:p.MODIFY_UNIT,icons:[{icon:`/icon.svg`,label:`Adjust HP`,filter:{some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Adjust HP`,filter:{every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e,t){O.info(`Adjust HP Clicked: ${e.items[0].name}`),await c.popover.open({id:te.CONTEXT_MENU,url:`/pages/forgecontext.html`,height:50,width:180,anchorElementId:t,hidePaper:!0})},embed:{url:`/pages/forgecontext.html?contextmenu=true`,height:70}}):c.contextMenu.remove(p.MODIFY_UNIT).catch(()=>{})})},[a,g,_,v]),(0,I.jsx)(I.Fragment,{children:e})}Re.createRoot(document.getElementById(`root`)).render((0,I.jsx)(P.StrictMode,{children:(0,I.jsx)(ne,{children:(0,I.jsx)(We,{children:(0,I.jsx)(Xv,{children:(0,I.jsx)(Ke,{children:(0,I.jsx)(Lv,{})})})})})}));