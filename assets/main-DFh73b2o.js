import{A as e,C as t,D as n,E as r,N as i,O as a,P as o,S as s,T as c,_ as l,b as u,c as d,d as f,f as p,g as m,h,j as g,k as _,l as v,m as y,n as b,o as x,p as S,r as C,s as w,t as T,u as E,v as ee,w as te,x as ne,y as D}from"./defaultgamesystem-CNO7r0LB.js";import{_ as O,a as re,d as k,f as ie,g as ae,h as oe,l as se,m as ce,n as le,o as ue,p as de,r as fe,s as A,t as pe,u as me,v as he,y as ge}from"./FormulaParser-D6laRZKS.js";import{n as _e,t as j}from"./MockData-DTzuSraw.js";var ve=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},ye=(e=>e?ve(e):ve),M=o(g(),1),be=e=>e;function N(e,t=be){let n=M.useSyncExternalStore(e.subscribe,M.useCallback(()=>t(e.getState()),[e,t]),M.useCallback(()=>t(e.getInitialState()),[e,t]));return M.useDebugValue(n),n}var xe=e=>{let t=ye(e),n=e=>N(t,e);return Object.assign(n,t),n},Se=(e=>e?xe(e):xe),Ce=o(e(),1);const P=Se(e=>({cacheReady:!1,setCacheReady:t=>e({cacheReady:t}),sceneReady:!1,setSceneReady:t=>e({sceneReady:t}),items:[],setItems:t=>e({items:t}),localItems:[],setLocalItems:t=>e({localItems:t}),sceneMetadata:{},setSceneMetadata:t=>e({sceneMetadata:{...t}}),roomMetadata:{},setRoomMetadata:t=>e({roomMetadata:{...t}}),gridDpi:150,setGridDpi:t=>e({gridDpi:t}),playerData:void 0,setPlayerData:t=>e({playerData:t}),partyData:[],setPartyData:t=>e({partyData:t})}));var we=0;const F=Se(e=>({messages:[],initialized:!1,addMessage:t=>{let n=new Date,r=n.getHours(),i=n.getMinutes(),a=r>=12?`PM`:`AM`,o=`${r%12||12}:${i<10?`0${i}`:i} ${a}`;e(e=>({messages:[...e.messages,{id:we++,text:t,timestamp:o}]}))},setInitialized:t=>e({initialized:t})})),I=()=>{F.getState().initialized||(c.broadcast.onMessage(`${u.EXTENSIONID}/chatlog`,e=>{let t=F.getState().addMessage;typeof e.data==`string`?t(e.data):typeof e.data==`object`&&e.data.message&&t(e.data.message)}),F.getState().setInitialized(!0))};var L=s(),Te=`${u.EXTENSIONID}/chatlog`,Ee=`${u.EXTENSIONID}/roll-notification`;function De({children:e}){let t=P(e=>e.setItems),n=P(e=>e.setLocalItems),r=P(e=>e.setSceneMetadata),i=P(e=>e.setRoomMetadata),a=P(e=>e.setGridDpi),o=P(e=>e.setPlayerData),s=P(e=>e.setPartyData),l=P(e=>e.setSceneReady),u=P(e=>e.setCacheReady);return(0,M.useEffect)(()=>{let e=(e,t)=>{let n=e[m.ENABLE_CONSOLE_LOG];typeof n==`boolean`&&O.setEnabled(n)},d=e=>{ge(e);let{sceneMetadata:t,roomMetadata:n}=P.getState(),r=t,i=r[m.ENABLE_OBR_NOTIFICATION];if(r[m.SHOW_NOTIFICATION_TO_ALL]===!0){c.broadcast.sendMessage(Te,{message:e},{destination:`ALL`}),i===!0&&c.broadcast.sendMessage(Ee,{message:e},{destination:`ALL`});return}F.getState().addMessage(e),i===!0&&c.notification.show(e,`SUCCESS`)},f=({explicitMessage:e,tokenName:t,actionName:n,total:r})=>{if(typeof e==`string`&&e.trim().length>0)return e;let i=t||`Unknown`,a=n||`Action`;return typeof r==`number`&&Number.isFinite(r)?`${i} rolled ${a} for ${r}!`:`${i} rolled ${a}.`};I();let p=c.broadcast.onMessage(Ee,e=>{let t=e.data,n=typeof t?.message==`string`?t.message:null;n&&c.notification.show(n,`SUCCESS`)});de(e=>{let t=ie(e.rollHtml);d(f({tokenName:e.senderName,actionName:e.actionName,total:t}))}),oe(e=>{d(f({explicitMessage:e.message}))}),ce(e=>{d(f({tokenName:e.playerName,actionName:e.result.diceNotation,total:e.result.totalValue}))});let h,g,_,v,y,b,x,S,C=async()=>{let[l,d,f,p,m,h,C,w,T,E,ee,te]=await Promise.all([c.scene.items.getItems(),c.scene.local.getItems(),c.scene.getMetadata(),c.room.getMetadata(),c.scene.grid.getDpi(),c.party.getPlayers(),c.player.getColor(),c.player.getRole(),c.player.getConnectionId(),c.player.getId(),c.player.getMetadata(),c.player.getName()]);t(l),n(d),r(f),i(p),e(f,p),a(m),o({id:E,name:te,connectionId:T,role:w,color:C,metadata:ee}),s(h),g=c.scene.items.onChange(t),_=c.scene.local.onChange(n),b=c.scene.grid.onChange(e=>a(e.dpi)),x=c.player.onChange(o),S=c.party.onChange(s),v=c.scene.onMetadataChange(t=>{r(t),e(t,P.getState().roomMetadata)}),y=c.room.onMetadataChange(t=>{i(t),e(P.getState().sceneMetadata,t)}),u(!0),O.log(`CacheManager: Cache is ready`)};return c.onReady(async()=>{let e=await c.scene.isReady();l(e),e&&(O.log(`Scene is ready on initial load, syncing cache...`),await C()),h=c.scene.onReadyChange(async e=>{l(e),e?(O.log(`Scene became ready, syncing cache...`),await C()):(O.log(`Scene is no longer ready, clearing cache...`),u(!1))})}),()=>{h?.(),g?.(),_?.(),v?.(),y?.(),b?.(),x?.(),S?.(),p?.()}},[l,u,t,n,r,i,a,o,s]),(0,L.jsx)(L.Fragment,{children:e})}var Oe=(0,M.createContext)(void 0);const ke=({children:e})=>{let[t,n]=(0,M.useState)(p),r=(0,M.useCallback)((e,t,r,i,a)=>{n(n=>n.PRIMARY===e&&n.OFFSET===t&&n.BACKGROUND===r&&n.BORDER===i&&n.BACKGROUND_URL===(a||void 0)?n:S(e,t,r,i,a))},[]);return(0,L.jsx)(Oe.Provider,{value:{theme:t,setTheme:n,updateThemeFromSystem:r},children:e})},Ae=()=>{let e=(0,M.useContext)(Oe);if(!e)throw Error(`useForgeTheme must be used within a ThemeProvider`);return e};var je=(0,M.createContext)({});function Me(e){let t=(0,M.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Ne=typeof window<`u`,Pe=Ne?M.useLayoutEffect:M.useEffect,Fe=(0,M.createContext)(null);function Ie(e,t){e.indexOf(t)===-1&&e.push(t)}function Le(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Re=(e,t,n)=>n>t?t:n<e?e:n,ze={},Be=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Ve(e){return typeof e==`object`&&!!e}var R=e=>/^0[^.\s]+$/u.test(e);function He(e){let t;return()=>(t===void 0&&(t=e()),t)}var Ue=e=>e,We=(e,t)=>n=>t(e(n)),Ge=(...e)=>e.reduce(We),Ke=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},qe=class{constructor(){this.subscriptions=[]}add(e){return Ie(this.subscriptions,e),()=>Le(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},Je=e=>e*1e3,Ye=e=>e/1e3;function Xe(e,t){return t?e*(1e3/t):0}var Ze=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Qe=1e-7,$e=12;function et(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Ze(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>Qe&&++s<$e);return o}function tt(e,t,n,r){if(e===t&&n===r)return Ue;let i=t=>et(t,0,1,e,n);return e=>e===0||e===1?e:Ze(i(e),t,r)}var nt=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,rt=e=>t=>1-e(1-t),it=tt(.33,1.53,.69,.99),at=rt(it),ot=nt(at),st=e=>(e*=2)<1?.5*at(e):.5*(2-2**(-10*(e-1))),ct=e=>1-Math.sin(Math.acos(e)),lt=rt(ct),ut=nt(ct),dt=tt(.42,0,1,1),ft=tt(0,0,.58,1),pt=tt(.42,0,.58,1),mt=e=>Array.isArray(e)&&typeof e[0]!=`number`,ht=e=>Array.isArray(e)&&typeof e[0]==`number`,gt={linear:Ue,easeIn:dt,easeInOut:pt,easeOut:ft,circIn:ct,circInOut:ut,circOut:lt,backIn:at,backInOut:ot,backOut:it,anticipate:st},_t=e=>typeof e==`string`,vt=e=>{if(ht(e)){e.length;let[t,n,r,i]=e;return tt(t,n,r,i)}else if(_t(e))return gt[e],`${e}`,gt[e];return e},yt=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],bt={value:null,addProjectionMetrics:null};function xt(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.has(e)||s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),t&&bt.value&&bt.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var St=40;function Ct(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=yt.reduce((e,n)=>(e[n]=xt(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=ze.useManualTiming?i.timestamp:performance.now();n=!1,ze.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,St),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:yt.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<yt.length;t++)o[yt[t]].cancel(e)},state:i,steps:o}}var{schedule:z,cancel:wt,state:B,steps:Tt}=Ct(typeof requestAnimationFrame<`u`?requestAnimationFrame:Ue,!0),Et;function Dt(){Et=void 0}var Ot={now:()=>(Et===void 0&&Ot.set(B.isProcessing||ze.useManualTiming?B.timestamp:performance.now()),Et),set:e=>{Et=e,queueMicrotask(Dt)}},kt={layout:0,mainThread:0,waapi:0},At=e=>t=>typeof t==`string`&&t.startsWith(e),jt=At(`--`),Mt=At(`var(--`),Nt=e=>Mt(e)?Pt.test(e.split(`/*`)[0].trim()):!1,Pt=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ft(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var It={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Lt={...It,transform:e=>Re(0,1,e)},Rt={...It,default:1},zt=e=>Math.round(e*1e5)/1e5,Bt=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Vt(e){return e==null}var Ht=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ut=(e,t)=>n=>!!(typeof n==`string`&&Ht.test(n)&&n.startsWith(e)||t&&!Vt(n)&&Object.prototype.hasOwnProperty.call(n,t)),Wt=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Bt);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Gt=e=>Re(0,255,e),Kt={...It,transform:e=>Math.round(Gt(e))},qt={test:Ut(`rgb`,`red`),parse:Wt(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Kt.transform(e)+`, `+Kt.transform(t)+`, `+Kt.transform(n)+`, `+zt(Lt.transform(r))+`)`};function Jt(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Yt={test:Ut(`#`),parse:Jt,transform:qt.transform},Xt=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Zt=Xt(`deg`),Qt=Xt(`%`),V=Xt(`px`),$t=Xt(`vh`),en=Xt(`vw`),tn=(()=>({...Qt,parse:e=>Qt.parse(e)/100,transform:e=>Qt.transform(e*100)}))(),nn={test:Ut(`hsl`,`hue`),parse:Wt(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+Qt.transform(zt(t))+`, `+Qt.transform(zt(n))+`, `+zt(Lt.transform(r))+`)`},H={test:e=>qt.test(e)||Yt.test(e)||nn.test(e),parse:e=>qt.test(e)?qt.parse(e):nn.test(e)?nn.parse(e):Yt.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?qt.transform(e):nn.transform(e),getAnimatableNone:e=>{let t=H.parse(e);return t.alpha=0,H.transform(t)}},rn=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function an(e){return isNaN(e)&&typeof e==`string`&&(e.match(Bt)?.length||0)+(e.match(rn)?.length||0)>0}var on=`number`,sn=`color`,cn=`var`,ln=`var(`,un="${}",dn=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function fn(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(dn,e=>(H.test(e)?(r.color.push(a),i.push(sn),n.push(H.parse(e))):e.startsWith(ln)?(r.var.push(a),i.push(cn),n.push(e)):(r.number.push(a),i.push(on),n.push(parseFloat(e))),++a,un)).split(un),indexes:r,types:i}}function pn(e){return fn(e).values}function mn(e){let{split:t,types:n}=fn(e),r=t.length;return e=>{let i=``;for(let a=0;a<r;a++)if(i+=t[a],e[a]!==void 0){let t=n[a];t===on?i+=zt(e[a]):t===sn?i+=H.transform(e[a]):i+=e[a]}return i}}var hn=e=>typeof e==`number`?0:H.test(e)?H.getAnimatableNone(e):e;function gn(e){let t=pn(e);return mn(e)(t.map(hn))}var _n={test:an,parse:pn,createTransformer:mn,getAnimatableNone:gn};function vn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function yn({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=vn(s,r,e+1/3),a=vn(s,r,e),o=vn(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function bn(e,t){return n=>n>0?t:e}var U=(e,t,n)=>e+(t-e)*n,xn=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Sn=[Yt,qt,nn],Cn=e=>Sn.find(t=>t.test(e));function wn(e){let t=Cn(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===nn&&(n=yn(n)),n}var Tn=(e,t)=>{let n=wn(e),r=wn(t);if(!n||!r)return bn(e,t);let i={...n};return e=>(i.red=xn(n.red,r.red,e),i.green=xn(n.green,r.green,e),i.blue=xn(n.blue,r.blue,e),i.alpha=U(n.alpha,r.alpha,e),qt.transform(i))},En=new Set([`none`,`hidden`]);function Dn(e,t){return En.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function On(e,t){return n=>U(e,t,n)}function kn(e){return typeof e==`number`?On:typeof e==`string`?Nt(e)?bn:H.test(e)?Tn:Nn:Array.isArray(e)?An:typeof e==`object`?H.test(e)?Tn:jn:bn}function An(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>kn(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function jn(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=kn(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Mn(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Nn=(e,t)=>{let n=_n.createTransformer(t),r=fn(e),i=fn(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?En.has(e)&&!i.values.length||En.has(t)&&!r.values.length?Dn(e,t):Ge(An(Mn(r,i),i.values),n):(`${e}${t}`,bn(e,t))};function Pn(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?U(e,t,n):kn(e)(e,t)}var Fn=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>z.update(t,e),stop:()=>wt(t),now:()=>B.isProcessing?B.timestamp:Ot.now()}},In=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Ln=2e4;function Rn(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function zn(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Rn(r),Ln);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:Ye(i)}}var Bn=5;function Vn(e,t,n){let r=Math.max(t-Bn,0);return Xe(n-e(r),t-r)}var W={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Hn=.001;function Un({duration:e=W.duration,bounce:t=W.bounce,velocity:n=W.velocity,mass:r=W.mass}){let i,a;W.maxDuration;let o=1-t;o=Re(W.minDamping,W.maxDamping,o),e=Re(W.minDuration,W.maxDuration,Ye(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Kn(t,o),c=Math.exp(-i);return Hn-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Kn(t**2,o);return(-i(t)+Hn>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Hn+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Gn(i,a,s);if(e=Je(e),isNaN(c))return{stiffness:W.stiffness,damping:W.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Wn=12;function Gn(e,t,n){let r=n;for(let n=1;n<Wn;n++)r-=e(r)/t(r);return r}function Kn(e,t){return e*Math.sqrt(1-t*t)}var qn=[`duration`,`bounce`],Jn=[`stiffness`,`damping`,`mass`];function Yn(e,t){return t.some(t=>e[t]!==void 0)}function Xn(e){let t={velocity:W.velocity,stiffness:W.stiffness,damping:W.damping,mass:W.mass,isResolvedFromDuration:!1,...e};if(!Yn(e,Jn)&&Yn(e,qn))if(e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Re(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:W.mass,stiffness:i,damping:a}}else{let n=Un(e);t={...t,...n,mass:W.mass},t.isResolvedFromDuration=!0}return t}function Zn(e=W.visualDuration,t=W.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Xn({...n,velocity:-Ye(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=Ye(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?W.restSpeed.granular:W.restSpeed.default,i||=v?W.restDelta.granular:W.restDelta.default;let y;if(h<1){let e=Kn(_,h);y=t=>o-Math.exp(-h*_*t)*((m+h*_*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}else if(h===1)y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}let b={calculatedDuration:p&&d||null,next:e=>{let t=y(e);if(p)s.done=e>=d;else{let n=e===0?m:0;h<1&&(n=e===0?Je(m):Vn(y,e,t));let a=Math.abs(n)<=r,c=Math.abs(o-t)<=i;s.done=a&&c}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Rn(b),Ln),t=In(t=>b.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return b}Zn.applyToOptions=e=>{let t=zn(e,100,Zn);return e.ease=t.ease,e.duration=Je(t.duration),e.type=`keyframes`,e};function Qn({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=Zn({keyframes:[f.value,m(f.value)],velocity:Vn(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function $n(e,t,n){let r=[],i=n||ze.mix||Pn,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Ge(Array.isArray(t)?t[n]||Ue:t,a)),r.push(a)}return r}function er(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=$n(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=Ke(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Re(e[0],e[a-1],t)):l}function tr(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=Ke(0,t,r);e.push(U(n,1,i))}}function nr(e){let t=[0];return tr(t,e.length-1),t}function rr(e,t){return e.map(e=>e*t)}function ir(e,t){return e.map(()=>t||pt).splice(0,e.length-1)}function ar({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=mt(r)?r.map(vt):vt(r),a={done:!1,value:t[0]},o=er(rr(n&&n.length===t.length?n:nr(t),e),t,{ease:Array.isArray(i)?i:ir(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var or=e=>e!==null;function sr(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(or),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var cr={decay:Qn,inertia:Qn,tween:ar,keyframes:ar,spring:Zn};function lr(e){typeof e.type==`string`&&(e.type=cr[e.type])}var ur=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},dr=e=>e/100,fr=class extends ur{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Ot.now()&&this.tick(Ot.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},kt.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;lr(e);let{type:t=ar,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||ar;s!==ar&&typeof o[0]!=`number`&&(this.mixKeyframes=Ge(dr,Pn(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Rn(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Re(0,1,n)*o}let b=_?{done:!1,value:l[0]}:y.next(v);i&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==Qn&&(b.value=sr(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return Ye(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Ye(e)}get time(){return Ye(this.currentTime)}set time(e){e=Je(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Ot.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Ye(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Fn,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Ot.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,kt.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function pr(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var mr=e=>e*180/Math.PI,hr=e=>_r(mr(Math.atan2(e[1],e[0]))),gr={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:hr,rotateZ:hr,skewX:e=>mr(Math.atan(e[1])),skewY:e=>mr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},_r=e=>(e%=360,e<0&&(e+=360),e),vr=hr,yr=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),br=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),xr={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:yr,scaleY:br,scale:e=>(yr(e)+br(e))/2,rotateX:e=>_r(mr(Math.atan2(e[6],e[5]))),rotateY:e=>_r(mr(Math.atan2(-e[2],e[0]))),rotateZ:vr,rotate:vr,skewX:e=>mr(Math.atan(e[4])),skewY:e=>mr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Sr(e){return e.includes(`scale`)?1:0}function Cr(e,t){if(!e||e===`none`)return Sr(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=xr,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=gr,i=t}if(!i)return Sr(t);let a=r[t],o=i[1].split(`,`).map(Tr);return typeof a==`function`?a(o):o[a]}var wr=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Cr(n,t)};function Tr(e){return parseFloat(e.trim())}var Er=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Dr=(()=>new Set(Er))(),Or=e=>e===It||e===V,kr=new Set([`x`,`y`,`z`]),Ar=Er.filter(e=>!kr.has(e));function jr(e){let t=[];return Ar.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var Mr={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Cr(t,`x`),y:(e,{transform:t})=>Cr(t,`y`)};Mr.translateX=Mr.x,Mr.translateY=Mr.y;var Nr=new Set,Pr=!1,Fr=!1,Ir=!1;function Lr(){if(Fr){let e=Array.from(Nr).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=jr(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Fr=!1,Pr=!1,Nr.forEach(e=>e.complete(Ir)),Nr.clear()}function Rr(){Nr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Fr=!0)})}function zr(){Ir=!0,Rr(),Lr(),Ir=!1}var Br=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Nr.add(this),Pr||(Pr=!0,z.read(Rr),z.resolveKeyframes(Lr))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}pr(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Nr.delete(this)}cancel(){this.state===`scheduled`&&(Nr.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Vr=e=>e.startsWith(`--`);function Hr(e,t,n){Vr(t)?e.style.setProperty(t,n):e.style[t]=n}var Ur=He(()=>window.ScrollTimeline!==void 0),Wr={};function Gr(e,t){let n=He(e);return()=>Wr[t]??n()}var Kr=Gr(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),qr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Jr={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:qr([0,.65,.55,1]),circOut:qr([.55,0,1,.45]),backIn:qr([.31,.01,.66,-.59]),backOut:qr([.33,1.53,.69,.99])};function Yr(e,t){if(e)return typeof e==`function`?Kr()?In(e,t):`ease-out`:ht(e)?qr(e):Array.isArray(e)?e.map(e=>Yr(e,t)||Jr.easeOut):Jr[e]}function Xr(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Yr(s,i);Array.isArray(d)&&(u.easing=d),bt.value&&kt.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return bt.value&&p.finished.finally(()=>{kt.waapi--}),p}function Zr(e){return typeof e==`function`&&`applyToOptions`in e}function Qr({type:e,...t}){return Zr(e)&&Kr()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var $r=class extends ur{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Qr(e);this.animation=Xr(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=sr(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):Hr(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Ye(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Ye(e)}get time(){return Ye(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Je(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Ur()?(this.animation.timeline=e,Ue):t(this)}},ei={anticipate:st,backInOut:ot,circInOut:ut};function ti(e){return e in ei}function ni(e){typeof e.ease==`string`&&ti(e.ease)&&(e.ease=ei[e.ease])}var ri=10,ii=class extends $r{constructor(e){ni(e),lr(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new fr({...a,autoplay:!1}),s=Math.max(ri,Ot.now()-this.startTime),c=Re(0,ri,s-ri);t.setWithVelocity(o.sample(Math.max(0,s-c)).value,o.sample(s).value,c),o.stop()}},ai=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(_n.test(e)||e===`0`)&&!e.startsWith(`url(`));function oi(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function si(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=ai(i,t),s=ai(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:oi(e)||(n===`spring`||Zr(n))&&r}function ci(e){e.duration=0,e.type=`keyframes`}var li=new Set([`opacity`,`clipPath`,`filter`,`transform`]),ui=He(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function di(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:s,transformTemplate:c}=t.owner.getProps();return ui()&&n&&li.has(n)&&(n!==`transform`||!c)&&!s&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var fi=40,pi=class extends ur{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Ot.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||Br)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Ot.now(),si(e,i,a,o)||((ze.instantAnimations||!s)&&l?.(sr(e,n,t)),e[0]=e[e.length-1],ci(n),n.repeat=0);let u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>fi?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!c&&di(u),f=u.motionValue?.owner?.current,p=d?new ii({...u,element:f}):new fr(u);p.finished.then(()=>{this.notifyFinished()}).catch(Ue),this.pendingTimeline&&=(this.stopTimeline=p.attachTimeline(this.pendingTimeline),void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),zr()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function mi(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var hi=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function gi(e){let t=hi.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function _i(e,t,n=1){`${e}`;let[r,i]=gi(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Be(e)?parseFloat(e):e}return Nt(i)?_i(i,t,n+1):i}var vi={type:`spring`,stiffness:500,damping:25,restSpeed:10},yi=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),bi={type:`keyframes`,duration:.8},xi={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Si=(e,{keyframes:t})=>t.length>2?bi:Dr.has(e)?e.startsWith(`scale`)?yi(t[1]):vi:xi,Ci=e=>e!==null;function wi(e,{repeat:t,repeatType:n=`loop`},r){let i=e.filter(Ci),a=t&&n!==`loop`&&t%2==1?0:i.length-1;return!a||r===void 0?i[a]:r}function Ti(e,t){return e?.[t]??e?.default??e}function Ei({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:l,...u}){return!!Object.keys(u).length}var Di=(e,t,n,r={},i,a)=>o=>{let s=Ti(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=Je(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Ei(s)||Object.assign(u,Si(e,u)),u.duration&&=Je(u.duration),u.repeatDelay&&=Je(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(ci(u),u.delay===0&&(d=!0)),(ze.instantAnimations||ze.skipAnimations)&&(d=!0,ci(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=wi(u.keyframes,s);if(e!==void 0){z.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new fr(u):new pi(u)};function Oi(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function ki(e,t,n,r){if(typeof t==`function`){let[i,a]=Oi(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Oi(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Ai(e,t,n){let r=e.getProps();return ki(r,t,n===void 0?r.custom:n,e)}var ji=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Er]),Mi=30,Ni=e=>!isNaN(parseFloat(e)),Pi={current:void 0},Fi=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Ot.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ot.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Ni(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new qe);let n=this.events[e].add(t);return e===`change`?()=>{n(),z.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Pi.current&&Pi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Ot.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Mi)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Mi);return Xe(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Ii(e,t){return new Fi(e,t)}var Li=e=>Array.isArray(e);function Ri(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ii(n))}function zi(e){return Li(e)?e[e.length-1]||0:e}function Bi(e,t){let{transitionEnd:n={},transition:r={},...i}=Ai(e,t)||{};for(let t in i={...i,...n},i)Ri(e,t,zi(i[t]))}var Vi=e=>!!(e&&e.getVelocity);function Hi(e){return!!(Vi(e)&&e.add)}function Ui(e,t){let n=e.getValue(`willChange`);if(Hi(n))return n.add(t);if(!n&&ze.WillChange){let n=new ze.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Wi(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Gi=`data-`+Wi(`framerAppearId`);function Ki(e){return e.props[Gi]}function qi({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Ji(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);let c=[],l=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||l&&qi(l,t))continue;let o={delay:n,...Ti(a||{},t)},u=r.get();if(u!==void 0&&!r.isAnimating&&!Array.isArray(i)&&i===u&&!o.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){let n=Ki(e);if(n){let e=window.MotionHandoffAnimation(n,t,z);e!==null&&(o.startTime=e,d=!0)}}Ui(e,t),r.start(Di(t,r,i,e.shouldReduceMotion&&ji.has(t)?{type:!1}:o,e,d));let f=r.animation;f&&c.push(f)}return o&&Promise.all(c).then(()=>{z.update(()=>{o&&Bi(e,o)})}),c}function Yi(e,t,n={}){let r=Ai(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Ji(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return Xi(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function Xi(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(Yi(c,t,{...o,delay:n+(typeof r==`function`?0:r)+mi(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function Zi(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Yi(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Yi(e,t,n);else{let i=typeof t==`function`?Ai(e,t,n.custom):t;r=Promise.all(Ji(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var Qi={test:e=>e===`auto`,parse:e=>e},$i=e=>t=>t.test(e),ea=[It,V,Qt,Zt,en,$t,Qi],ta=e=>ea.find($i(e));function na(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||R(e)}var ra=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function ia(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Bt)||[];if(!r)return e;let i=n.replace(r,``),a=ra.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var aa=/\b([a-z-]*)\(.*?\)/gu,oa={..._n,getAnimatableNone:e=>{let t=e.match(aa);return t?t.map(ia).join(` `):e}},sa={...It,transform:Math.round},ca={borderWidth:V,borderTopWidth:V,borderRightWidth:V,borderBottomWidth:V,borderLeftWidth:V,borderRadius:V,borderTopLeftRadius:V,borderTopRightRadius:V,borderBottomRightRadius:V,borderBottomLeftRadius:V,width:V,maxWidth:V,height:V,maxHeight:V,top:V,right:V,bottom:V,left:V,inset:V,insetBlock:V,insetBlockStart:V,insetBlockEnd:V,insetInline:V,insetInlineStart:V,insetInlineEnd:V,padding:V,paddingTop:V,paddingRight:V,paddingBottom:V,paddingLeft:V,paddingBlock:V,paddingBlockStart:V,paddingBlockEnd:V,paddingInline:V,paddingInlineStart:V,paddingInlineEnd:V,margin:V,marginTop:V,marginRight:V,marginBottom:V,marginLeft:V,marginBlock:V,marginBlockStart:V,marginBlockEnd:V,marginInline:V,marginInlineStart:V,marginInlineEnd:V,fontSize:V,backgroundPositionX:V,backgroundPositionY:V,rotate:Zt,rotateX:Zt,rotateY:Zt,rotateZ:Zt,scale:Rt,scaleX:Rt,scaleY:Rt,scaleZ:Rt,skew:Zt,skewX:Zt,skewY:Zt,distance:V,translateX:V,translateY:V,translateZ:V,x:V,y:V,z:V,perspective:V,transformPerspective:V,opacity:Lt,originX:tn,originY:tn,originZ:V,zIndex:sa,fillOpacity:Lt,strokeOpacity:Lt,numOctaves:sa},la={...ca,color:H,backgroundColor:H,outlineColor:H,fill:H,stroke:H,borderColor:H,borderTopColor:H,borderRightColor:H,borderBottomColor:H,borderLeftColor:H,filter:oa,WebkitFilter:oa},ua=e=>la[e];function da(e,t){let n=ua(e);return n!==oa&&(n=_n),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var fa=new Set([`auto`,`none`,`0`]);function pa(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!fa.has(t)&&fn(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=da(n,i)}var ma=class extends Br{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Nt(r))){let i=_i(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!ji.has(n)||e.length!==2)return;let[r,i]=e,a=ta(r),o=ta(i);if(Ft(r)!==Ft(i)&&Mr[n]){this.needsMeasurement=!0;return}if(a!==o)if(Or(a)&&Or(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Mr[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||na(e[t]))&&n.push(t);n.length&&pa(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Mr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function ha(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var ga=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function _a(e){return Ve(e)&&`offsetHeight`in e}var{schedule:va,cancel:ya}=Ct(queueMicrotask,!1),ba={x:!1,y:!1};function xa(){return ba.x||ba.y}function Sa(e){return e===`x`||e===`y`?ba[e]?null:(ba[e]=!0,()=>{ba[e]=!1}):ba.x||ba.y?null:(ba.x=ba.y=!0,()=>{ba.x=ba.y=!1})}function Ca(e,t){let n=ha(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function wa(e){return!(e.pointerType===`touch`||xa())}function Ta(e,t,n={}){let[r,i,a]=Ca(e,n),o=e=>{if(!wa(e))return;let{target:n}=e,r=t(n,e);if(typeof r!=`function`||!n)return;let a=e=>{wa(e)&&(r(e),n.removeEventListener(`pointerleave`,a))};n.addEventListener(`pointerleave`,a,i)};return r.forEach(e=>{e.addEventListener(`pointerenter`,o,i)}),a}var Ea=(e,t)=>t?e===t?!0:Ea(e,t.parentElement):!1,Da=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Oa=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function ka(e){return Oa.has(e.tagName)||e.isContentEditable===!0}var Aa=new WeakSet;function ja(e){return t=>{t.key===`Enter`&&e(t)}}function Ma(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Na=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=ja(()=>{if(Aa.has(n))return;Ma(n,`down`);let e=ja(()=>{Ma(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Ma(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Pa(e){return Da(e)&&!xa()}function Fa(e,t,n={}){let[r,i,a]=Ca(e,n),o=e=>{let r=e.currentTarget;if(!Pa(e))return;Aa.add(r);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),Aa.has(r)&&Aa.delete(r),Pa(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Ea(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),_a(e)&&(e.addEventListener(`focus`,e=>Na(e,i)),!ka(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Ia(e){return Ve(e)&&`ownerSVGElement`in e}function La(e){return Ia(e)&&e.tagName===`svg`}var Ra=[...ea,H,_n],za=e=>Ra.find($i(e)),Ba=()=>({translate:0,scale:1,origin:0,originPoint:0}),Va=()=>({x:Ba(),y:Ba()}),Ha=()=>({min:0,max:0}),G=()=>({x:Ha(),y:Ha()}),Ua={current:null},Wa={current:!1},Ga=typeof window<`u`;function Ka(){if(Wa.current=!0,Ga)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Ua.current=e.matches;e.addEventListener(`change`,t),t()}else Ua.current=!1}var qa=new WeakMap;function Ja(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Ya(e){return typeof e==`string`||Array.isArray(e)}var Xa=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Za=[`initial`,...Xa];function Qa(e){return Ja(e.animate)||Za.some(t=>Ya(e[t]))}function $a(e){return!!(Qa(e)||e.variants)}function eo(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Vi(i))e.addValue(r,i);else if(Vi(a))e.addValue(r,Ii(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Ii(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var to=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],no={};function ro(e){no=e}function io(){return no}var ao=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Br,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Ot.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,z.render(this.render,!1,!0))};let{latestValues:s,renderState:c}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!i,this.isControllingVariants=Qa(t),this.isVariantNode=$a(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in u){let t=u[e];s[e]!==void 0&&Vi(t)&&t.set(s[e])}}mount(e){this.current=e,qa.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Wa.current||Ka(),this.shouldReduceMotion=Ua.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in this.projection&&this.projection.unmount(),wt(this.notifyUpdate),wt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let n=Dr.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&z.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in no){let t=no[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):G()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<to.length;t++){let n=to[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=eo(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Ii(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Be(n)||R(n))?n=parseFloat(n):!za(n)&&_n.test(t)&&(n=da(e,t)),this.setBaseTarget(e,Vi(n)?n.get():n)),Vi(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=ki(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Vi(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new qe),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){va.render(this.render)}},oo=class extends ao{constructor(){super(...arguments),this.KeyframeResolver=ma}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Vi(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},so=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function co({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function lo({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function uo(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function fo(e){return e===void 0||e===1}function po({scale:e,scaleX:t,scaleY:n}){return!fo(e)||!fo(t)||!fo(n)}function mo(e){return po(e)||ho(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ho(e){return go(e.x)||go(e.y)}function go(e){return e&&e!==`0%`}function _o(e,t,n){return n+t*(e-n)}function vo(e,t,n,r,i){return i!==void 0&&(e=_o(e,i,r)),_o(e,n,r)+t}function yo(e,t=0,n=1,r,i){e.min=vo(e.min,t,n,r,i),e.max=vo(e.max,t,n,r,i)}function bo(e,{x:t,y:n}){yo(e.x,t.translate,t.scale,t.originPoint),yo(e.y,n.translate,n.scale,n.originPoint)}var xo=.999999999999,So=1.0000000000001;function Co(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Eo(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,bo(e,o)),r&&mo(a.latestValues)&&Eo(e,a.latestValues))}t.x<So&&t.x>xo&&(t.x=1),t.y<So&&t.y>xo&&(t.y=1)}function wo(e,t){e.min+=t,e.max+=t}function To(e,t,n,r,i=.5){yo(e,t,n,U(e.min,e.max,i),r)}function Eo(e,t){To(e.x,t.x,t.scaleX,t.scale,t.originX),To(e.y,t.y,t.scaleY,t.scale,t.originY)}function Do(e,t){return co(uo(e.getBoundingClientRect(),t))}function Oo(e,t,n){let r=Do(e,n),{scroll:i}=t;return i&&(wo(r.x,i.offset.x),wo(r.y,i.offset.y)),r}var ko={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Ao=Er.length;function jo(e,t,n){let r=``,i=!0;for(let a=0;a<Ao;a++){let o=Er[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=ga(s,ca[o]);if(!c){i=!1;let t=ko[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Mo(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Dr.has(e)){o=!0;continue}else if(jt(e)){i[e]=n;continue}else{let t=ga(n,ca[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=jo(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function No(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Po(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Fo={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(V.test(e))e=parseFloat(e);else return e;return`${Po(e,t.target.x)}% ${Po(e,t.target.y)}%`}},Io={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=_n.parse(e);if(i.length>5)return r;let a=_n.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=U(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Lo={borderRadius:{...Fo,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:Fo,borderTopRightRadius:Fo,borderBottomLeftRadius:Fo,borderBottomRightRadius:Fo,boxShadow:Io};function Ro(e,{layout:t,layoutId:n}){return Dr.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Lo[e]||e===`opacity`)}function zo(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Vi(r[t])||i&&Vi(i[t])||Ro(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Bo(e){return window.getComputedStyle(e)}var Vo=class extends oo{constructor(){super(...arguments),this.type=`html`,this.renderInstance=No}readValueFromInstance(e,t){if(Dr.has(t))return this.projection?.isProjecting?Sr(t):wr(e,t);{let n=Bo(e),r=(jt(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Do(e,t)}build(e,t,n){Mo(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return zo(e,t,n)}},Ho={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Uo={offset:`strokeDashoffset`,array:`strokeDasharray`};function Wo(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Ho:Uo;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Go=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Ko(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Mo(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Go)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Wo(d,i,a,o,!1)}var qo=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Jo=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Yo(e,t,n,r){for(let n in No(e,t,void 0,r),t.attrs)e.setAttribute(qo.has(n)?n:Wi(n),t.attrs[n])}function Xo(e,t,n){let r=zo(e,t,n);for(let n in e)if(Vi(e[n])||Vi(t[n])){let t=Er.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Zo=class extends oo{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=G}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Dr.has(t)){let e=ua(t);return e&&e.default||0}return t=qo.has(t)?t:Wi(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Xo(e,t,n)}build(e,t,n){Ko(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Yo(e,t,n,r)}mount(e){this.isSVGTag=Jo(e.tagName),super.mount(e)}},Qo=Za.length;function $o(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&$o(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Qo;n++){let r=Za[n],i=e.props[r];(Ya(i)||i===!1)&&(t[r]=i)}return t}function es(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var ts=[...Xa].reverse(),ns=Xa.length;function rs(e){return t=>Promise.all(t.map(({animation:t,options:n})=>Zi(e,t,n)))}function is(e){let t=rs(e),n=ss(),r=!0,i=t=>(n,r)=>{let i=Ai(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(n){t=n(e)}function o(a){let{props:o}=e,s=$o(e.parent)||{},c=[],l=new Set,u={},d=1/0;for(let t=0;t<ns;t++){let f=ts[t],p=n[f],m=o[f]===void 0?s[f]:o[f],h=Ya(m),g=f===a?p.isActive:null;g===!1&&(d=t);let _=m===s[f]&&m!==o[f]&&h;if(_&&r&&e.manuallyAnimateOnMount&&(_=!1),p.protectedKeys={...u},!p.isActive&&g===null||!m&&!p.prevProp||Ja(m)||typeof m==`boolean`)continue;let v=as(p.prevProp,m),y=v||f===a&&p.isActive&&!_&&h||t>d&&h,b=!1,x=Array.isArray(m)?m:[m],S=x.reduce(i(f),{});g===!1&&(S={});let{prevResolvedValues:C={}}=p,w={...C,...S},T=t=>{y=!0,l.has(t)&&(b=!0,l.delete(t)),p.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in w){let t=S[e],n=C[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Li(t)&&Li(n)?!es(t,n):t!==n,r?t==null?l.add(e):T(e):t!==void 0&&l.has(e)?T(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=S,p.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(y=!1);let E=_&&v;y&&(!E||b)&&c.push(...x.map(t=>{let n={type:f};if(typeof t==`string`&&r&&!E&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Ai(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=mi(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(l.size){let t={};if(typeof o.initial!=`boolean`){let n=Ai(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}l.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),c.push({animation:t})}let f=!!c.length;return r&&(o.initial===!1||o.initial===o.animate)&&!e.manuallyAnimateOnMount&&(f=!1),r=!1,f?t(c):Promise.resolve()}function s(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=o(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=ss()}}}function as(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!es(t,e):!1}function os(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ss(){return{animate:os(!0),whileInView:os(),whileHover:os(),whileTap:os(),whileDrag:os(),whileFocus:os(),exit:os()}}function cs(e,t){e.min=t.min,e.max=t.max}function ls(e,t){cs(e.x,t.x),cs(e.y,t.y)}function us(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var ds=1e-4,fs=1-ds,ps=1+ds,ms=.01,hs=0-ms,gs=0+ms;function _s(e){return e.max-e.min}function vs(e,t,n){return Math.abs(e-t)<=n}function ys(e,t,n,r=.5){e.origin=r,e.originPoint=U(t.min,t.max,e.origin),e.scale=_s(n)/_s(t),e.translate=U(n.min,n.max,e.origin)-e.originPoint,(e.scale>=fs&&e.scale<=ps||isNaN(e.scale))&&(e.scale=1),(e.translate>=hs&&e.translate<=gs||isNaN(e.translate))&&(e.translate=0)}function bs(e,t,n,r){ys(e.x,t.x,n.x,r?r.originX:void 0),ys(e.y,t.y,n.y,r?r.originY:void 0)}function xs(e,t,n){e.min=n.min+t.min,e.max=e.min+_s(t)}function Ss(e,t,n){xs(e.x,t.x,n.x),xs(e.y,t.y,n.y)}function Cs(e,t,n){e.min=t.min-n.min,e.max=e.min+_s(t)}function ws(e,t,n){Cs(e.x,t.x,n.x),Cs(e.y,t.y,n.y)}function Ts(e,t,n,r,i){return e-=t,e=_o(e,1/n,r),i!==void 0&&(e=_o(e,1/i,r)),e}function Es(e,t=0,n=1,r=.5,i,a=e,o=e){if(Qt.test(t)&&(t=parseFloat(t),t=U(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=U(a.min,a.max,r);e===a&&(s-=t),e.min=Ts(e.min,t,n,s,i),e.max=Ts(e.max,t,n,s,i)}function Ds(e,t,[n,r,i],a,o){Es(e,t[n],t[r],t[i],t.scale,a,o)}var Os=[`x`,`scaleX`,`originX`],ks=[`y`,`scaleY`,`originY`];function As(e,t,n,r){Ds(e.x,t,Os,n?n.x:void 0,r?r.x:void 0),Ds(e.y,t,ks,n?n.y:void 0,r?r.y:void 0)}function js(e){return e.translate===0&&e.scale===1}function Ms(e){return js(e.x)&&js(e.y)}function Ns(e,t){return e.min===t.min&&e.max===t.max}function Ps(e,t){return Ns(e.x,t.x)&&Ns(e.y,t.y)}function Fs(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Is(e,t){return Fs(e.x,t.x)&&Fs(e.y,t.y)}function Ls(e){return _s(e.x)/_s(e.y)}function Rs(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function zs(e){return[e(`x`),e(`y`)]}function Bs(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Vs=[`TopLeft`,`TopRight`,`BottomLeft`,`BottomRight`],Hs=Vs.length,Us=e=>typeof e==`string`?parseFloat(e):e,Ws=e=>typeof e==`number`||V.test(e);function Gs(e,t,n,r,i,a){i?(e.opacity=U(0,n.opacity??1,qs(r)),e.opacityExit=U(t.opacity??1,0,Js(r))):a&&(e.opacity=U(t.opacity??1,n.opacity??1,r));for(let i=0;i<Hs;i++){let a=`border${Vs[i]}Radius`,o=Ks(t,a),s=Ks(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Ws(o)===Ws(s)?(e[a]=Math.max(U(Us(o),Us(s),r),0),(Qt.test(s)||Qt.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=U(t.rotate||0,n.rotate||0,r))}function Ks(e,t){return e[t]===void 0?e.borderRadius:e[t]}var qs=Ys(0,.5,lt),Js=Ys(.5,.95,Ue);function Ys(e,t,n){return r=>r<e?0:r>t?1:n(Ke(e,t,r))}function Xs(e,t,n){let r=Vi(e)?e:Ii(e);return r.start(Di(``,r,t,n)),r.animation}function Zs(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var Qs=(e,t)=>e.depth-t.depth,$s=class{constructor(){this.children=[],this.isDirty=!1}add(e){Ie(this.children,e),this.isDirty=!0}remove(e){Le(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Qs),this.isDirty=!1,this.children.forEach(e)}};function ec(e,t){let n=Ot.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(wt(r),e(a-t))};return z.setup(r,!0),()=>wt(r)}function tc(e){return Vi(e)?e.get():e}var nc=class{constructor(){this.members=[]}add(e){Ie(this.members,e),e.scheduleRender()}remove(e){if(Le(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t=this.members.findIndex(t=>e===t);if(t===0)return!1;let n;for(let e=t;e>=0;e--){let t=this.members[e];if(t.isPresent!==!1){n=t;break}}return n?(this.promote(n),!0):!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender();let r=n.options.layoutDependency,i=e.options.layoutDependency;r!==void 0&&i!==void 0&&r===i||(e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0));let{crossfade:a}=e.options;a===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}},rc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ic={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},ac=[``,`X`,`Y`,`Z`],oc=1e3,sc=0;function cc(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function lc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Ki(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,z,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&lc(r)}function uc({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=sc++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,bt.value&&(ic.nodes=ic.calculatedTargetDeltas=ic.calculatedProjections=0),this.nodes.forEach(pc),this.nodes.forEach(bc),this.nodes.forEach(xc),this.nodes.forEach(mc),bt.addProjectionMetrics&&bt.addProjectionMetrics(ic)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new $s)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new qe),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Ia(t)&&!La(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;z.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=ec(i,250),rc.hasAnimatedSinceResize&&(rc.hasAnimatedSinceResize=!1,this.nodes.forEach(yc)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Oc,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Is(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Ti(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||yc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),wt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Sc),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&lc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(gc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(_c);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(vc),this.nodes.forEach(dc),this.nodes.forEach(fc)):this.nodes.forEach(_c),this.clearAllSnapshots();let e=Ot.now();B.delta=Re(0,1e3/60,e-B.timestamp),B.timestamp=e,B.isProcessing=!0,Tt.update.process(B),Tt.preRender.process(B),Tt.render.process(B),B.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,va.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(hc),this.sharedNodes.forEach(Cc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,z.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){z.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!_s(this.snapshot.measuredBox.x)&&!_s(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=G(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Ms(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||mo(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Mc(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return G();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Pc))){let{scroll:e}=this.root;e&&(wo(t.x,e.offset.x),wo(t.y,e.offset.y))}return t}removeElementScroll(e){let t=G();if(ls(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&ls(t,e),wo(t.x,i.offset.x),wo(t.y,i.offset.y))}return t}applyTransform(e,t=!1){let n=G();ls(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Eo(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),mo(r.latestValues)&&Eo(n,r.latestValues)}return mo(this.latestValues)&&Eo(n,this.latestValues),n}removeTransform(e){let t=G();ls(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!mo(n.latestValues))continue;po(n.latestValues)&&n.updateSnapshot();let r=G();ls(r,n.measurePageBox()),As(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return mo(this.latestValues)&&As(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==B.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=B.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=G(),this.targetWithTransforms=G()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Ss(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ls(this.target,this.layout.layoutBox),bo(this.target,this.targetDelta)):ls(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),bt.value&&ic.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||po(this.parent.latestValues)||ho(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=G(),this.relativeTargetOrigin=G(),ws(this.relativeTargetOrigin,t,n),ls(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===B.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;ls(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Co(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=G());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(us(this.prevProjectionDelta.x,this.projectionDelta.x),us(this.prevProjectionDelta.y,this.projectionDelta.y)),bs(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Rs(this.projectionDelta.x,this.prevProjectionDelta.x)||!Rs(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),bt.value&&ic.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Va(),this.projectionDelta=Va(),this.projectionDeltaWithTransform=Va()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Va();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=G(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Dc));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;wc(a.x,e.x,n),wc(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ws(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Ec(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Ps(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=G(),ls(d,this.relativeTarget)),s&&(this.animationValues=i,Gs(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(wt(this.pendingAnimation),void 0),this.pendingAnimation=z.update(()=>{rc.hasAnimatedSinceResize=!0,kt.layout++,this.motionValue||=Ii(0),this.currentAnimation=Xs(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{kt.layout--},onComplete:()=>{kt.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(oc),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Nc(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||G();let t=_s(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=_s(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}ls(t,n),Eo(t,i),bs(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new nc),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&cc(`z`,e,r,this.animationValues);for(let t=0;t<ac.length;t++)cc(`rotate${ac[t]}`,e,r,this.animationValues),cc(`skew${ac[t]}`,e,r,this.animationValues);for(let t in e.render(),r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=tc(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=tc(t?.pointerEvents)||``),this.hasProjected&&!mo(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Bs(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;for(let t in e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit,Lo){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Lo[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?tc(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(gc),this.root.sharedNodes.clear()}}}function dc(e){e.updateLayout()}function fc(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;i===`size`?zs(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=_s(r);r.min=n[e].min,r.max=r.min+i}):Nc(i,t.layoutBox,n)&&zs(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=_s(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Va();bs(o,n,t.layoutBox);let s=Va();a?bs(s,e.applyTransform(r,!0),t.measuredBox):bs(s,n,t.layoutBox);let c=!Ms(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=G();ws(o,t.layoutBox,i.layoutBox);let s=G();ws(s,n,a.layoutBox),Is(o,s)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function pc(e){bt.value&&ic.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function mc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function hc(e){e.clearSnapshot()}function gc(e){e.clearMeasurements()}function _c(e){e.isLayoutDirty=!1}function vc(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function yc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function bc(e){e.resolveTargetDelta()}function xc(e){e.calcProjection()}function Sc(e){e.resetSkewAndRotation()}function Cc(e){e.removeLeadSnapshot()}function wc(e,t,n){e.translate=U(t.translate,0,n),e.scale=U(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Tc(e,t,n,r){e.min=U(t.min,n.min,r),e.max=U(t.max,n.max,r)}function Ec(e,t,n,r){Tc(e.x,t.x,n.x,r),Tc(e.y,t.y,n.y,r)}function Dc(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Oc={duration:.45,ease:[.4,0,.1,1]},kc=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ac=kc(`applewebkit/`)&&!kc(`chrome/`)?Math.round:Ue;function jc(e){e.min=Ac(e.min),e.max=Ac(e.max)}function Mc(e){jc(e.x),jc(e.y)}function Nc(e,t,n){return e===`position`||e===`preserve-aspect`&&!vs(Ls(t),Ls(n),.2)}function Pc(e){return e!==e.root&&e.scroll?.wasRoot}var Fc=uc({attachResizeListener:(e,t)=>Zs(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Ic={current:void 0},Lc=uc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ic.current){let e=new Fc({});e.mount(window),e.setOptions({layoutScroll:!0}),Ic.current=e}return Ic.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Rc=(0,M.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function zc(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Bc(...e){return t=>{let n=!1,r=e.map(e=>{let r=zc(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():zc(e[t],null)}}}}function Vc(...e){return M.useCallback(Bc(...e),e)}var Hc=class extends M.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=_a(e)&&e.offsetWidth||0,r=_a(e)&&e.offsetHeight||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left,i.bottom=r-i.height-i.top}return null}componentDidUpdate(){}render(){return this.props.children}};function Uc({children:e,isPresent:t,anchorX:n,anchorY:r,root:i}){let a=(0,M.useId)(),o=(0,M.useRef)(null),s=(0,M.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=(0,M.useContext)(Rc),l=Vc(o,e.props?.ref??e?.ref);return(0,M.useInsertionEffect)(()=>{let{width:e,height:l,top:u,left:d,right:f,bottom:p}=s.current;if(t||!o.current||!e||!l)return;let m=n===`left`?`left: ${d}`:`right: ${f}`,h=r===`bottom`?`bottom: ${p}`:`top: ${u}`;o.current.dataset.motionPopId=a;let g=document.createElement(`style`);c&&(g.nonce=c);let _=i??document.head;return _.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${m}px !important;
            ${h}px !important;
          }
        `),()=>{_.contains(g)&&_.removeChild(g)}},[t]),(0,L.jsx)(Hc,{isPresent:t,childRef:o,sizeRef:s,children:M.cloneElement(e,{ref:l})})}var Wc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Me(Gc),d=(0,M.useId)(),f=!0,p=(0,M.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,M.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),M.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),o===`popLayout`&&(e=(0,L.jsx)(Uc,{isPresent:n,anchorX:s,anchorY:c,root:l,children:e})),(0,L.jsx)(Fe.Provider,{value:p,children:e})};function Gc(){return new Map}function Kc(e=!0){let t=(0,M.useContext)(Fe);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,M.useId)();(0,M.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,M.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var qc=e=>e.key||``;function Jc(e){let t=[];return M.Children.forEach(e,e=>{(0,M.isValidElement)(e)&&t.push(e)}),t}var Yc=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Kc(o),f=(0,M.useMemo)(()=>Jc(e),[e]),p=o&&!u?[]:f.map(qc),m=(0,M.useRef)(!0),h=(0,M.useRef)(f),g=Me(()=>new Map),_=(0,M.useRef)(new Set),[v,y]=(0,M.useState)(f),[b,x]=(0,M.useState)(f);Pe(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=qc(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=qc(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(Jc(e)),y(f),null}let{forceRender:C}=(0,M.useContext)(je);return(0,L.jsx)(L.Fragment,{children:b.map(e=>{let v=qc(e),y=o&&!u?!1:f===b||p.includes(v);return(0,L.jsx)(Wc,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(_.current.add(v),g.has(v))g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},Xc=(0,M.createContext)({strict:!1}),Zc={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Qc=!1;function $c(){if(Qc)return;let e={};for(let t in Zc)e[t]={isEnabled:e=>Zc[t].some(t=>!!e[t])};ro(e),Qc=!0}function el(){return $c(),io()}function tl(e){let t=el();for(let n in e)t[n]={...t[n],...e[n]};ro(t)}var nl=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(`.`));function rl(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||nl.has(e)}var il=e=>!rl(e);function al(e){typeof e==`function`&&(il=t=>t.startsWith(`on`)?!rl(t):e(t))}try{al((d(),i(w)).default)}catch{}function ol(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||(il(i)||n===!0&&rl(i)||!t&&!rl(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var sl=(0,M.createContext)({});function cl(e,t){if(Qa(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Ya(t)?t:void 0,animate:Ya(n)?n:void 0}}return e.inherit===!1?{}:t}function ll(e){let{initial:t,animate:n}=cl(e,(0,M.useContext)(sl));return(0,M.useMemo)(()=>({initial:t,animate:n}),[ul(t),ul(n)])}function ul(e){return Array.isArray(e)?e.join(` `):e}var dl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function fl(e,t,n){for(let r in t)!Vi(t[r])&&!Ro(r,n)&&(e[r]=t[r])}function pl({transformTemplate:e},t){return(0,M.useMemo)(()=>{let n=dl();return Mo(n,t,e),Object.assign({},n.vars,n.style)},[t])}function ml(e,t){let n=e.style||{},r={};return fl(r,n,e),Object.assign(r,pl(e,t)),r}function hl(e,t){let n={},r=ml(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var gl=()=>({...dl(),attrs:{}});function _l(e,t,n,r){let i=(0,M.useMemo)(()=>{let n=gl();return Ko(n,t,Jo(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};fl(t,e.style,e),i.style={...t,...i.style}}return i}var vl=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function yl(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(vl.indexOf(e)>-1||/[A-Z]/u.test(e))}function bl(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??yl(e)?_l:hl)(t,r,i,e),c=ol(t,typeof e==`string`,a),l=e===M.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,M.useMemo)(()=>Vi(u)?u.get():u,[u]);return(0,M.createElement)(e,{...l,children:d})}function xl({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Sl(n,r,i,e),renderState:t()}}function Sl(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=tc(a[e]);let{initial:o,animate:s}=e,c=Qa(e),l=$a(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Ja(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=ki(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Cl=e=>(t,n)=>{let r=(0,M.useContext)(sl),i=(0,M.useContext)(Fe),a=()=>xl(e,t,r,i);return n?a():Me(a)},wl=Cl({scrapeMotionValuesFromProps:zo,createRenderState:dl}),Tl=Cl({scrapeMotionValuesFromProps:Xo,createRenderState:gl}),El=Symbol.for(`motionComponentSymbol`);function Dl(e,t,n){let r=(0,M.useRef)(n);(0,M.useInsertionEffect)(()=>{r.current=n});let i=(0,M.useRef)(null);return(0,M.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var Ol=(0,M.createContext)({});function kl(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Al(e,t,n,r,i,a){let{visualElement:o}=(0,M.useContext)(sl),s=(0,M.useContext)(Xc),c=(0,M.useContext)(Fe),l=(0,M.useContext)(Rc).reducedMotion,u=(0,M.useRef)(null),d=(0,M.useRef)(!1);r||=s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:l,isSVG:a}),d.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));let f=u.current,p=(0,M.useContext)(Ol);f&&!f.projection&&i&&(f.type===`html`||f.type===`svg`)&&jl(u.current,n,i,p);let m=(0,M.useRef)(!1);(0,M.useInsertionEffect)(()=>{f&&m.current&&f.update(n,c)});let h=n[Gi],g=(0,M.useRef)(!!h&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return Pe(()=>{d.current=!0,f&&(m.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),g.current&&f.animationState&&f.animationState.animateChanges())}),(0,M.useEffect)(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(h)}),!1),f.enteringChildren=void 0)}),f}function jl(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Ml(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&kl(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:l})}function Ml(e){if(e)return e.options.allowProjection===!1?Ml(e.parent):e.projection}function Nl(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&tl(r);let a=n?n===`svg`:yl(e),o=a?Tl:wl;function s(n,s){let c,l={...(0,M.useContext)(Rc),...n,layoutId:Pl(n)},{isStatic:u}=l,d=ll(n),f=o(n,u);if(!u&&Ne){Fl(l,r);let t=Il(l);c=t.MeasureLayout,d.visualElement=Al(e,f,l,i,t.ProjectionNode,a)}return(0,L.jsxs)(sl.Provider,{value:d,children:[c&&d.visualElement?(0,L.jsx)(c,{visualElement:d.visualElement,...l}):null,bl(e,n,Dl(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,M.forwardRef)(s);return c[El]=e,c}function Pl({layoutId:e}){let t=(0,M.useContext)(je).id;return t&&e!==void 0?t+`-`+e:e}function Fl(e,t){(0,M.useContext)(Xc).strict}function Il(e){let{drag:t,layout:n}=el();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Ll(e,t){if(typeof Proxy>`u`)return Nl;let n=new Map,r=(n,r)=>Nl(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Nl(a,void 0,e,t)),n.get(a))})}var Rl=(e,t)=>t.isSVG??yl(e)?new Zo(t):new Vo(t,{allowProjection:e!==M.Fragment}),zl=class extends so{constructor(e){super(e),e.animationState||=is(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Ja(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Bl=0,Vl={animation:{Feature:zl},exit:{Feature:class extends so{constructor(){super(...arguments),this.id=Bl++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Hl(e){return{point:{x:e.pageX,y:e.pageY}}}var Ul=e=>t=>Da(t)&&e(t,Hl(t));function Wl(e,t,n,r){return Zs(e,t,Ul(n),r)}var Gl=({current:e})=>e?e.ownerDocument.defaultView:null,Kl=(e,t)=>Math.abs(e-t);function ql(e,t){let n=Kl(e.x,t.x),r=Kl(e.y,t.y);return Math.sqrt(n**2+r**2)}var Jl=new Set([`auto`,`scroll`]),Yl=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=Ql(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=ql(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=B;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Xl(t,this.transformPagePoint),z.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=Ql(e.type===`pointercancel`?this.lastMoveEventInfo:Xl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Da(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Xl(Hl(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=B;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,Ql(s,this.history)),this.removeListeners=Ge(Wl(this.contextWindow,`pointermove`,this.handlePointerMove),Wl(this.contextWindow,`pointerup`,this.handlePointerUp),Wl(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(Jl.has(e.overflowX)||Jl.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener(`scroll`,this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),z.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),wt(this.updatePoint)}};function Xl(e,t){return t?{point:t(e.point)}:e}function Zl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ql({point:e},t){return{point:e,delta:Zl(e,eu(t)),offset:Zl(e,$l(t)),velocity:tu(t,.1)}}function $l(e){return e[0]}function eu(e){return e[e.length-1]}function tu(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=eu(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Je(t)));)n--;if(!r)return{x:0,y:0};let a=Ye(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function nu(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?U(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?U(n,e,r.max):Math.min(e,n)),e}function ru(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function iu(e,{top:t,left:n,bottom:r,right:i}){return{x:ru(e.x,n,i),y:ru(e.y,t,r)}}function au(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function ou(e,t){return{x:au(e.x,t.x),y:au(e.y,t.y)}}function su(e,t){let n=.5,r=_s(e),i=_s(t);return i>r?n=Ke(t.min,t.max-r,e.min):r>i&&(n=Ke(e.min,e.max-i,t.min)),Re(0,1,n)}function cu(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var lu=.35;function uu(e=lu){return e===!1?e=0:e===!0&&(e=lu),{x:du(e,`left`,`right`),y:du(e,`top`,`bottom`)}}function du(e,t,n){return{min:fu(e,t),max:fu(e,n)}}function fu(e,t){return typeof e==`number`?e:e[t]||0}var pu=new WeakMap,mu=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=G(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t?(this.stopAnimation(),this.snapToCursor(Hl(e).point)):this.pauseAnimation()},a=(e,t)=>{this.stopAnimation();let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Sa(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zs(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Qt.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=_s(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&z.postRender(()=>i(e,t)),Ui(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=gu(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&a(e,t)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>zs(e=>this.getAnimationState(e)===`paused`&&this.getAxisMotionValue(e).animation?.play()),{dragSnapToOrigin:l}=this.getProps();this.panSession=new Yl(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Gl(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&z.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!hu(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=nu(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&kl(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=iu(n.layoutBox,e):this.constraints=!1,this.elastic=uu(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&zs(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=cu(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!kl(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Oo(n,r.root,this.visualElement.getTransformPagePoint()),a=ou(r.layout.layoutBox,i);if(t){let e=t(lo(a));this.hasMutatedConstraints=!!e,e&&(a=co(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=zs(o=>{if(!hu(o,t,this.currentDirection))return;let c=s&&s[o]||{};a&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Ui(this.visualElement,e),n.start(Di(e,n,0,t,this.visualElement,!1))}stopAnimation(){zs(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){zs(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){zs(t=>{let{drag:n}=this.getProps();if(!hu(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-U(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!kl(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};zs(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=su({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),zs(t=>{if(!hu(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(U(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;pu.set(this.visualElement,this);let e=this.visualElement.current,t=Wl(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&ka(i);n&&r&&!a&&this.start(t)}),n=()=>{let{dragConstraints:e}=this.getProps();kl(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener(`measure`,n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),z.read(n);let a=Zs(window,`resize`,()=>this.scalePositionWithinConstraints()),o=r.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(zs(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{a(),t(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=lu,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function hu(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function gu(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var _u=class extends so{constructor(e){super(e),this.removeGroupControls=Ue,this.removeListeners=Ue,this.controls=new mu(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ue}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},vu=e=>(t,n)=>{e&&z.postRender(()=>e(t,n))},yu=class extends so{constructor(){super(...arguments),this.removePointerDownListener=Ue}onPointerDown(e){this.session=new Yl(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Gl(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:vu(e),onStart:vu(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&z.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Wl(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},bu=!1,xu=class extends M.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),bu&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),rc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),bu=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||z.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),va.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;bu=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Su(e){let[t,n]=Kc(),r=(0,M.useContext)(je);return(0,L.jsx)(xu,{...e,layoutGroup:r,switchLayoutGroup:(0,M.useContext)(Ol),isPresent:t,safeToRemove:n})}var Cu={pan:{Feature:yu},drag:{Feature:_u,ProjectionNode:Lc,MeasureLayout:Su}};function wu(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&z.postRender(()=>i(t,Hl(t)))}var Tu=class extends so{mount(){let{current:e}=this.node;e&&(this.unmount=Ta(e,(e,t)=>(wu(this.node,t,`Start`),e=>wu(this.node,e,`End`))))}unmount(){}},Eu=class extends so{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Ge(Zs(this.node.current,`focus`,()=>this.onFocus()),Zs(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Du(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&z.postRender(()=>i(t,Hl(t)))}var Ou=class extends so{mount(){let{current:e}=this.node;e&&(this.unmount=Fa(e,(e,t)=>(Du(this.node,t,`Start`),(e,{success:t})=>Du(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}},ku=new WeakMap,Au=new WeakMap,ju=e=>{let t=ku.get(e.target);t&&t(e)},Mu=e=>{e.forEach(ju)};function Nu({root:e,...t}){let n=e||document;Au.has(n)||Au.set(n,{});let r=Au.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Mu,{root:e,...t})),r[i]}function Pu(e,t,n){let r=Nu(t);return ku.set(e,n),r.observe(e),()=>{ku.delete(e),r.unobserve(e)}}var Fu={some:0,all:1},Iu=class extends so{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Fu[r]};return Pu(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Lu(e,t))&&this.startObserver()}unmount(){}};function Lu({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Ru={inView:{Feature:Iu},tap:{Feature:Ou},focus:{Feature:Eu},hover:{Feature:Tu}},zu={layout:{ProjectionNode:Lc,MeasureLayout:Su}},Bu=Ll({...Vl,...Ru,...Cu,...zu},Rl),Vu=k(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),Hu=k(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),Uu=k(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),Wu=k(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),Gu=k(`circle-arrow-right`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m12 16 4-4-4-4`,key:`1i9zcv`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}]]),Ku=k(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),qu=k(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Ju=k(`clock`,[[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Yu=k(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Xu=k(`feather`,[[`path`,{d:`M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z`,key:`18jl4k`}],[`path`,{d:`M16 8 2 22`,key:`vp34q`}],[`path`,{d:`M17.5 15H9`,key:`1oz8nu`}]]),Zu=k(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),Qu=k(`heart`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]),$u=k(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),ed=k(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),td=k(`minimize-2`,[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]),nd=k(`music`,[[`path`,{d:`M9 18V5l12-2v13`,key:`1jmyc2`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}],[`circle`,{cx:`18`,cy:`16`,r:`3`,key:`1hluhg`}]]),rd=k(`octagon-x`,[[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,key:`2d38gg`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),id=k(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),ad=k(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),od=k(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),sd=k(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),cd=k(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),ld=k(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),ud=k(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]);function dd(){return dd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dd.apply(null,arguments)}var fd=!1;function pd(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function md(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var hd=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!fd:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(md(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=pd(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),gd=`-ms-`,_d=`-moz-`,K=`-webkit-`,vd=`comm`,yd=`rule`,bd=`decl`,xd=`@import`,Sd=`@keyframes`,Cd=`@layer`,wd=Math.abs,Td=String.fromCharCode,Ed=Object.assign;function Dd(e,t){return J(e,0)^45?(((t<<2^J(e,0))<<2^J(e,1))<<2^J(e,2))<<2^J(e,3):0}function Od(e){return e.trim()}function kd(e,t){return(e=t.exec(e))?e[0]:e}function q(e,t,n){return e.replace(t,n)}function Ad(e,t){return e.indexOf(t)}function J(e,t){return e.charCodeAt(t)|0}function jd(e,t,n){return e.slice(t,n)}function Md(e){return e.length}function Nd(e){return e.length}function Pd(e,t){return t.push(e),e}function Fd(e,t){return e.map(t).join(``)}var Id=1,Ld=1,Rd=0,zd=0,Y=0,Bd=``;function Vd(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Id,column:Ld,length:o,return:``}}function Hd(e,t){return Ed(Vd(``,null,null,``,null,null,0),e,{length:-e.length},t)}function Ud(){return Y}function Wd(){return Y=zd>0?J(Bd,--zd):0,Ld--,Y===10&&(Ld=1,Id--),Y}function Gd(){return Y=zd<Rd?J(Bd,zd++):0,Ld++,Y===10&&(Ld=1,Id++),Y}function Kd(){return J(Bd,zd)}function qd(){return zd}function Jd(e,t){return jd(Bd,e,t)}function Yd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xd(e){return Id=Ld=1,Rd=Md(Bd=e),zd=0,[]}function Zd(e){return Bd=``,e}function Qd(e){return Od(Jd(zd-1,tf(e===91?e+2:e===40?e+1:e)))}function $d(e){for(;(Y=Kd())&&Y<33;)Gd();return Yd(e)>2||Yd(Y)>3?``:` `}function ef(e,t){for(;--t&&Gd()&&!(Y<48||Y>102||Y>57&&Y<65||Y>70&&Y<97););return Jd(e,qd()+(t<6&&Kd()==32&&Gd()==32))}function tf(e){for(;Gd();)switch(Y){case e:return zd;case 34:case 39:e!==34&&e!==39&&tf(Y);break;case 40:e===41&&tf(e);break;case 92:Gd();break}return zd}function nf(e,t){for(;Gd()&&e+Y!==57&&!(e+Y===84&&Kd()===47););return`/*`+Jd(t,zd-1)+`*`+Td(e===47?e:Gd())}function rf(e){for(;!Yd(Kd());)Gd();return Jd(e,zd)}function af(e){return Zd(of(``,null,null,null,[``],e=Xd(e),0,[0],e))}function of(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Gd()){case 40:if(m!=108&&J(C,d-1)==58){Ad(C+=q(Qd(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Qd(v);break;case 9:case 10:case 13:case 32:C+=$d(m);break;case 92:C+=ef(qd()-1,7);continue;case 47:switch(Kd()){case 42:case 47:Pd(cf(nf(Gd(),qd()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=Md(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=q(C,/\f/g,``)),p>0&&Md(C)-d&&Pd(p>32?lf(C+`;`,r,n,d-1):lf(q(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(Pd(S=sf(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)of(C,t,S,S,b,a,d,s,x);else switch(f===99&&J(C,3)===110?100:f){case 100:case 108:case 109:case 115:of(e,S,S,r&&Pd(sf(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:of(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Md(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Wd()==125)continue}switch(C+=Td(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Md(C)-1)*_,_=1;break;case 64:Kd()===45&&(C+=Qd(Gd())),f=Kd(),u=d=Md(y=C+=rf(qd())),v++;break;case 45:m===45&&Md(C)==2&&(h=0)}}return a}function sf(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=Nd(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=jd(e,d+1,d=wd(h=o[m])),y=e;_<p;++_)(y=Od(h>0?f[_]+` `+v:q(v,/&\f/g,f[_])))&&(c[g++]=y);return Vd(e,t,n,i===0?yd:s,c,l,u)}function cf(e,t,n){return Vd(e,t,n,vd,Td(Ud()),jd(e,2,-2),0)}function lf(e,t,n,r){return Vd(e,t,n,bd,jd(e,0,r),jd(e,r+1,-1),r)}function uf(e,t){for(var n=``,r=Nd(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function df(e,t,n,r){switch(e.type){case Cd:if(e.children.length)break;case xd:case bd:return e.return=e.return||e.value;case vd:return``;case Sd:return e.return=e.value+`{`+uf(e.children,r)+`}`;case yd:e.value=e.props.join(`,`)}return Md(n=uf(e.children,r))?e.return=e.value+`{`+n+`}`:``}function ff(e){var t=Nd(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function pf(e){return function(t){t.root||(t=t.return)&&e(t)}}var mf=function(e,t,n){for(var r=0,i=0;r=i,i=Kd(),r===38&&i===12&&(t[n]=1),!Yd(i);)Gd();return Jd(e,zd)},hf=function(e,t){var n=-1,r=44;do switch(Yd(r)){case 0:r===38&&Kd()===12&&(t[n]=1),e[n]+=mf(zd-1,t,n);break;case 2:e[n]+=Qd(r);break;case 4:if(r===44){e[++n]=Kd()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=Td(r)}while(r=Gd());return e},gf=function(e,t){return Zd(hf(Xd(e),t))},_f=new WeakMap,vf=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!_f.get(n))&&!r){_f.set(e,!0);for(var i=[],a=gf(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},yf=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function bf(e,t){switch(Dd(e,t)){case 5103:return K+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+_d+e+gd+e+e;case 6828:case 4268:return K+e+gd+e+e;case 6165:return K+e+gd+`flex-`+e+e;case 5187:return K+e+q(e,/(\w+).+(:[^]+)/,K+`box-$1$2`+gd+`flex-$1$2`)+e;case 5443:return K+e+gd+`flex-item-`+q(e,/flex-|-self/,``)+e;case 4675:return K+e+gd+`flex-line-pack`+q(e,/align-content|flex-|-self/,``)+e;case 5548:return K+e+gd+q(e,`shrink`,`negative`)+e;case 5292:return K+e+gd+q(e,`basis`,`preferred-size`)+e;case 6060:return K+`box-`+q(e,`-grow`,``)+K+e+gd+q(e,`grow`,`positive`)+e;case 4554:return K+q(e,/([^-])(transform)/g,`$1`+K+`$2`)+e;case 6187:return q(q(q(e,/(zoom-|grab)/,K+`$1`),/(image-set)/,K+`$1`),e,``)+e;case 5495:case 3959:return q(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return q(q(e,/(.+:)(flex-)?(.*)/,K+`box-pack:$3`+gd+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+K+e+e;case 4095:case 3583:case 4068:case 2532:return q(e,/(.+)-inline(.+)/,K+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Md(e)-1-t>6)switch(J(e,t+1)){case 109:if(J(e,t+4)!==45)break;case 102:return q(e,/(.+:)(.+)-([^]+)/,`$1`+K+`$2-$3$1`+_d+(J(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Ad(e,`stretch`)?bf(q(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(J(e,t+1)!==115)break;case 6444:switch(J(e,Md(e)-3-(~Ad(e,`!important`)&&10))){case 107:return q(e,`:`,`:`+K)+e;case 101:return q(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+K+(J(e,14)===45?`inline-`:``)+`box$3$1`+K+`$2$3$1`+gd+`$2box$3`)+e}break;case 5936:switch(J(e,t+11)){case 114:return K+e+gd+q(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return K+e+gd+q(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return K+e+gd+q(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return K+e+gd+e+e}return e}var xf=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case bd:e.return=bf(e.value,e.length);break;case Sd:return uf([Hd(e,{value:q(e.value,`@`,`@`+K)})],r);case yd:if(e.length)return Fd(e.props,function(t){switch(kd(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return uf([Hd(e,{props:[q(t,/:(read-\w+)/,`:`+_d+`$1`)]})],r);case`::placeholder`:return uf([Hd(e,{props:[q(t,/:(plac\w+)/,`:`+K+`input-$1`)]}),Hd(e,{props:[q(t,/:(plac\w+)/,`:`+_d+`$1`)]}),Hd(e,{props:[q(t,/:(plac\w+)/,gd+`input-$1`)]})],r)}return``})}}],Sf=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||xf,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[vf,yf],l,u=[df,pf(function(e){l.insert(e)})],d=ff(c.concat(r,u)),f=function(e){return uf(af(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new hd({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},Cf=!0;function wf(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var Tf=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||Cf===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},Ef=function(e,t,n){Tf(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function Df(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}E();var Of=!1,kf=/[A-Z]|^ms/g,Af=/_EMO_([^_]+?)_([^]*?)_EMO_/g,jf=function(e){return e.charCodeAt(1)===45},Mf=function(e){return e!=null&&typeof e!=`boolean`},Nf=f(function(e){return jf(e)?e:e.replace(kf,`-$&`).toLowerCase()}),Pf=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(Af,function(e,t,n){return zf={name:t,styles:n,next:zf},t})}return x[e]!==1&&!jf(e)&&typeof t==`number`&&t!==0?t+`px`:t},Ff=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;function If(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return zf={name:i.name,styles:i.styles,next:zf},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)zf={name:o.name,styles:o.styles,next:zf},o=o.next;return a.styles+`;`}return Lf(e,t,n);case`function`:if(e!==void 0){var s=zf,c=n(e);return zf=s,If(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function Lf(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=If(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:Mf(s)&&(r+=Nf(a)+`:`+Pf(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&Of)throw Error(Ff);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)Mf(o[c])&&(r+=Nf(a)+`:`+Pf(a,o[c])+`;`);else{var l=If(e,t,o);switch(a){case`animation`:case`animationName`:r+=Nf(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}var Rf=/label:\s*([^\s;{]+)\s*(;|$)/g,zf;function Bf(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;zf=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=If(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=If(n,t,e[o]),r&&(i+=a[o]);Rf.lastIndex=0;for(var s=``,c;(c=Rf.exec(i))!==null;)s+=`-`+c[1];return{name:Df(i)+s,styles:i,next:zf}}var Vf=function(e){return e()},Hf=M.useInsertionEffect?M.useInsertionEffect:!1,Uf=Hf||Vf;Hf||M.useLayoutEffect;var Wf=M.createContext(typeof HTMLElement<`u`?Sf({key:`css`}):null);Wf.Provider;var Gf=function(e){return(0,M.forwardRef)(function(t,n){return e(t,(0,M.useContext)(Wf),n)})},Kf=M.createContext({});({}).hasOwnProperty,d();var qf=!1,Jf=v,Yf=function(e){return e!==`theme`},Xf=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?Jf:Yf},Zf=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},Qf=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Tf(t,n,r),Uf(function(){return Ef(t,n,r)}),null},$f=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=Zf(t,n,r),c=s||Xf(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=Gf(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=M.useContext(Kf)}typeof e.className==`string`?a=wf(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=Bf(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?Xf(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),M.createElement(M.Fragment,null,M.createElement(Qf,{cache:t,serialized:m,isStringTag:typeof r==`string`}),M.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,`toString`,{value:function(){return o===void 0&&qf?`NO_COMPONENT_SELECTOR`:`.`+o}}),h.withComponent=function(t,r){return e(t,dd({},n,r,{shouldForwardProp:Zf(h,r,!0)})).apply(void 0,d)},h}},ep=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),tp=$f.bind(null);ep.forEach(function(e){tp[e]=tp(e)});const np=tp.div({position:`relative`,display:`flex`,height:`100vh`,flexDirection:`column`,backgroundColor:`transparent`}),rp=b.div`
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
`,ip=b(Bu.div)`
  ${{position:`fixed`,bottom:`0`,left:`0`,top:`0`,zIndex:`1000`,display:`flex`,width:`150px`,flexDirection:`column`,borderTopRightRadius:`0.5rem`,borderBottomRightRadius:`0.5rem`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}}
  background-color: ${e=>y(e.theme.BACKGROUND,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
`,ap=b.div`
  ${{flex:`none`,padding:`1.25rem`}}
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  background-color: ${e=>e.theme.OFFSET};
`,op=b.h2`
  ${{margin:`0`,marginBottom:`0.5rem`,fontSize:`1.125rem`}}
  color: ${e=>e.theme.PRIMARY};
`,sp=b.p`
  ${{margin:`0`,fontSize:`0.875rem`}}
  color: ${e=>y(e.theme.PRIMARY,.7)};
`,cp=tp.div({flex:`1 1 0%`}),lp=b.nav`
  ${{flex:`none`,paddingLeft:`0`,paddingRight:`0`,paddingBottom:`50px`,paddingTop:`0.5rem`}}
  border-top: 1px solid ${e=>e.theme.BORDER};
`,up=b.button`
  ${{width:`100%`,cursor:`pointer`,borderStyle:`none`,paddingLeft:`1.25rem`,paddingRight:`1.25rem`,paddingTop:`0.75rem`,paddingBottom:`0.75rem`,textAlign:`left`,fontSize:`15px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isActive?e.theme.OFFSET:`transparent`};
  color: ${e=>e.theme.PRIMARY};
  font-weight: ${e=>e.$isActive?600:400};
  
  &:hover {
    background-color: ${e=>y(e.theme.OFFSET,.5)};
  }
`,dp=tp.div({position:`fixed`,bottom:`0`,left:`0`,right:`0`,top:`0`,zIndex:`999`,backgroundColor:`rgba(0, 0, 0, 0.6)`}),fp=tp.div({position:`fixed`,bottom:`2px`,left:`2px`,zIndex:`1000`,display:`flex`,height:`3rem`,width:`3rem`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}),pp=b.button`
  ${{position:`fixed`,zIndex:`1001`,display:`flex`,height:`2.5rem`,width:`2.5rem`,cursor:`pointer`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-shadow":`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,"--tw-shadow-colored":`0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color)`,boxShadow:`var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)`}}
  background-color: ${e=>y(e.theme.BACKGROUND,.75)};
  border: 2px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
`,mp=({isOpen:e,currentPage:t,onToggle:n,onNavigate:r})=>{let{theme:i}=Ae(),a=P(e=>e.playerData),o=String(a?.role||``).toUpperCase()===`GM`;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Yc,{children:e&&(0,L.jsxs)(ip,{theme:i,initial:{x:-300},animate:{x:0},exit:{x:-300},transition:{type:`tween`,duration:.3},style:{boxShadow:`4px 0 12px rgba(0, 0, 0, 0.15)`},children:[(0,L.jsxs)(ap,{theme:i,children:[(0,L.jsx)(op,{theme:i,children:`Forge!`}),(0,L.jsx)(sp,{theme:i,children:`Alpha Testing!`})]}),(0,L.jsx)(cp,{}),(0,L.jsxs)(lp,{theme:i,children:[(0,L.jsx)(up,{theme:i,$isActive:t===`ForgeMain`,onClick:()=>r(`ForgeMain`),children:`Main`}),(0,L.jsx)(up,{theme:i,$isActive:t===`Party`,onClick:()=>r(`Party`),children:`Party`}),(0,L.jsx)(up,{theme:i,$isActive:t===`ChatLog`,onClick:()=>r(`ChatLog`),children:`System Log`}),o&&(0,L.jsx)(up,{theme:i,$isActive:t===`System`,onClick:()=>r(`System`),children:`System`}),o&&(0,L.jsx)(up,{theme:i,$isActive:t===`Settings`,onClick:()=>r(`Settings`),children:`Settings`})]})]})}),e&&(0,L.jsx)(dp,{onClick:n}),(0,L.jsx)(fp,{children:(0,L.jsx)(pp,{theme:i,onClick:n,children:(0,L.jsx)(me,{size:24})})})]})},hp=b.div`
  padding: 20px;
  color: ${e=>e.theme.PRIMARY};
  min-height: 100vh;
`,gp=b.h1`
  color: ${e=>e.theme.PRIMARY};
  background-color: ${e=>e.theme.OFFSET};
  padding: 2px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  font-variant: small-caps;
`,_p=b.div`
  background-color: ${e=>y(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 15px 0;
  backdrop-filter: blur(8px);
`;b.div`
  background-color: ${e=>e.theme.OFFSET};
  color: ${e=>e.theme.PRIMARY};
  padding: 12px 15px;
  border-radius: 6px 6px 0 0;
  margin: -20px -20px 15px -20px;
  font-weight: 600;
  font-size: 18px;
`;const vp=b.button`
  background-color: ${e=>y(e.theme.OFFSET,e.variant===`secondary`?.5:.75)};
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
    background-color: ${e=>y(e.theme.OFFSET,.9)};
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
`,yp=b.input`
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px 8px;
  font-size: 14px;
  width: 100%;
  
  &::placeholder {
    color: ${e=>y(e.theme.PRIMARY,.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`;b.textarea`
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
    color: ${e=>y(e.theme.PRIMARY,.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`,b.select`
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
`,b.label`
  color: ${e=>e.theme.PRIMARY};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
`,b.hr`
  border: none;
  border-top: 2px solid ${e=>e.theme.BORDER};
  margin: 20px 0;
`,b.p`
  color: ${e=>e.theme.PRIMARY};
  line-height: 1.6;
  margin: 10px 0;
`,b.span`
  background-color: ${e=>y(e.theme.OFFSET,.75)};
  color: ${e=>e.theme.PRIMARY};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 12px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
`,b.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,b.li`
  padding: 12px 15px;
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${e=>y(e.theme.OFFSET,.2)};
  }
`;var bp=b.button`
  ${{position:`relative`,display:`inline-flex`,height:`1.5rem`,width:`3rem`,alignItems:`center`,borderRadius:`9999px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isOn?y(e.theme.OFFSET,.8):y(e.theme.BORDER,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${e=>y(e.theme.OFFSET,.3)};
  }
  
  &::after {
    content: '';
    ${{display:`inline-block`,height:`1rem`,width:`1rem`,transform:`translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,borderRadius:`9999px`,transitionProperty:`transform`}}
    background-color: ${e=>e.theme.PRIMARY};
    ${e=>e.$isOn?`transform: translateX(1.375rem);`:`transform: translateX(0.25rem);`}
  }
`;const X=({label:e,isOn:t,onChange:n})=>{let{theme:r}=Ae();return(0,L.jsx)(bp,{theme:r,$isOn:t,onClick:()=>{let r=!t;O.log(`${e}: ${r}`),n(r)},role:`switch`,"aria-checked":t,"aria-label":e})};var xp=b.h2`
  ${{marginBottom:`1rem`,paddingBottom:`0.5rem`,fontSize:`1.25rem`,fontWeight:`600`}}
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
`,Z=b.div`
  ${{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`,":last-child":{borderBottomWidth:`0`}}}
  color: ${e=>e.theme.PRIMARY};
`,Q=b.label`
  ${{flex:`1 1 0%`,cursor:`pointer`,textAlign:`left`,fontSize:`1rem`}}
  color: ${e=>e.theme.PRIMARY};
`,Sp=b.div`
  ${{marginLeft:`1rem`,display:`flex`,alignItems:`center`,gap:`0.75rem`}}
  color: ${e=>e.theme.PRIMARY};
`,Cp=b.label`
  ${{fontSize:`0.875rem`}}
  color: ${e=>e.theme.PRIMARY};
`,wp=b.input`
  ${{borderRadius:`0.25rem`,paddingLeft:`0.75rem`,paddingRight:`0.75rem`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`,fontSize:`0.875rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  width: 50%;
  
  &::placeholder {
    color: ${e=>y(e.theme.PRIMARY,.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`,Tp=b.select`
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
`,Ep=tp.div({marginTop:`0.5rem`,display:`flex`,justifyContent:`center`,gap:`0.75rem`});const Dp=()=>{let{theme:e}=Ae();P(e=>e.roomMetadata);let t=P(e=>e.sceneMetadata),n=P(e=>e.items),r=P(e=>e.cacheReady),[i,a]=(0,M.useState)(!1),[o,s]=(0,M.useState)(!1),[u,d]=(0,M.useState)(`D20`),[f,p]=(0,M.useState)(!1),[h,g]=(0,M.useState)(!1),[_,v]=(0,M.useState)(!1),[y,b]=(0,M.useState)(!1),[x,S]=(0,M.useState)(!0),[C,w]=(0,M.useState)(!1),[T,E]=(0,M.useState)(`bottom`),[ee,te]=(0,M.useState)(!1),[ne,D]=(0,M.useState)(!1),[k,ie]=(0,M.useState)(!1),[ae,oe]=(0,M.useState)(!1),[se,ce]=(0,M.useState)(!1),[le,ue]=(0,M.useState)(!1),[de,A]=(0,M.useState)(!1),[pe,me]=(0,M.useState)(!1),[ge,_e]=(0,M.useState)(!1),[j,ve]=(0,M.useState)(!1),[ye,be]=(0,M.useState)(!1),[N,xe]=(0,M.useState)(``),[Se,Ce]=(0,M.useState)(!1),we=(0,M.useRef)(null),F=t;(0,M.useEffect)(()=>{if(r)if(F[m.POPCORN_INITIATIVE]!==void 0&&a(F[m.POPCORN_INITIATIVE]),F[m.REVERSE_INITIATIVE]!==void 0&&s(F[m.REVERSE_INITIATIVE]),F[m.DICE_RANGE]!==void 0&&d(F[m.DICE_RANGE]),F[m.SHOW_CARD_ACCESS]!==void 0&&p(F[m.SHOW_CARD_ACCESS]),F[m.SHOW_PLAYER_VIEW]!==void 0&&g(F[m.SHOW_PLAYER_VIEW]),F[m.SHOW_OWNER_ONLY_EDIT]!==void 0&&b(F[m.SHOW_OWNER_ONLY_EDIT]),F[m.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?S(!0):S(F[m.SHOW_MODIFY_UNIT_CONTEXT_MENU]),F[m.SHOW_NON_PARTY_UNITS]!==void 0&&v(F[m.SHOW_NON_PARTY_UNITS]),F[m.SHOW_HP_BARS]!==void 0&&w(F[m.SHOW_HP_BARS]),F[m.HP_BAR_ORIENTATION]!==void 0&&E(F[m.HP_BAR_ORIENTATION]),F[m.SHOW_HP_NUMBERS]!==void 0&&te(F[m.SHOW_HP_NUMBERS]),F[m.SHOW_DEATH_EFFECT]!==void 0&&D(F[m.SHOW_DEATH_EFFECT]),F[m.SHOW_NAMES]!==void 0&&ie(F[m.SHOW_NAMES]),F[m.SHOW_TURN_EFFECT]!==void 0&&oe(F[m.SHOW_TURN_EFFECT]),F[m.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&ce(F[m.USE_DESCRIPTIVE_DUPLICATES]),F[m.ENABLE_RUMBLE]!==void 0&&ue(F[m.ENABLE_RUMBLE]),F[m.ENABLE_BONES]!==void 0&&A(F[m.ENABLE_BONES]),F[m.ENABLE_DICE_PLUS]!==void 0&&me(F[m.ENABLE_DICE_PLUS]),F[m.ENABLE_OBR_NOTIFICATION]!==void 0&&_e(F[m.ENABLE_OBR_NOTIFICATION]),F[m.SHOW_NOTIFICATION_TO_ALL]!==void 0&&ve(F[m.SHOW_NOTIFICATION_TO_ALL]),F[m.ENABLE_DISCORD_LOGGING]!==void 0&&be(F[m.ENABLE_DISCORD_LOGGING]),F[m.DISCORD_URL]!==void 0&&xe(F[m.DISCORD_URL]),F[m.ENABLE_CONSOLE_LOG]!==void 0){let e=F[m.ENABLE_CONSOLE_LOG];Ce(e),O.setEnabled(e)}else Ce(!1)},[r,F]);let I=async(e,t)=>{await c.scene.setMetadata({[e]:t})};return(0,L.jsx)(Bu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:(0,L.jsxs)(hp,{theme:e,children:[(0,L.jsx)(gp,{theme:e,children:`Settings`}),(0,L.jsxs)(_p,{theme:e,children:[(0,L.jsx)(xp,{theme:e,children:`Collection Management`}),(0,L.jsxs)(Ep,{children:[(0,L.jsx)(vp,{theme:e,onClick:async()=>{try{let e=await re(),t=JSON.stringify(e,null,2),n=new Blob([t],{type:`text/plain;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`forge-collection-${new Date().toISOString().slice(0,10)}.txt`,i.click(),URL.revokeObjectURL(r),alert(`Collection export complete. ${e.length} record(s) written.`)}catch(e){O.log(`Collection export failed`,e),alert(`Collection export failed. See console log for details.`)}},children:`Export`}),(0,L.jsx)(vp,{theme:e,onClick:()=>{window.confirm(`Import will overwrite duplicate records that share the same Name and Author. Continue?`)&&we.current?.click()},children:`Import`})]}),(0,L.jsx)(`input`,{ref:we,type:`file`,accept:`.txt,.json,text/plain,application/json`,onChange:async e=>{let t=e.target.files?.[0];if(t)try{let e=await t.text(),n=JSON.parse(e);if(!Array.isArray(n)){alert(`Import file must contain a JSON array of collection records.`);return}let r=await fe(n);alert(`Collection import complete. Created: ${r.created}, Updated: ${r.updated}, Skipped: ${r.skipped}.`)}catch(e){O.log(`Collection import failed`,e),alert(`Collection import failed. Ensure the file is valid JSON and try again.`)}finally{e.target.value=``}},style:{display:`none`}})]}),(0,L.jsxs)(_p,{theme:e,children:[(0,L.jsx)(xp,{theme:e,children:`List Controls`}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Reverse Initiative`}),(0,L.jsx)(X,{label:`Reverse Initiative`,isOn:o,onChange:async e=>{s(e),await I(m.REVERSE_INITIATIVE,e),e&&i&&(a(!1),await I(m.POPCORN_INITIATIVE,!1))}})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Popcorn Initiative`}),(0,L.jsx)(X,{label:`Popcorn Initiative`,isOn:i,onChange:async e=>{a(e),await I(m.POPCORN_INITIATIVE,e),e&&o&&(s(!1),await I(m.REVERSE_INITIATIVE,!1))}})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Initiative Die: `}),(0,L.jsx)(wp,{theme:e,type:`text`,value:u,onChange:async e=>{let t=e.target.value;d(t),await I(m.DICE_RANGE,t),O.log(`Dice Range:`,t)},placeholder:`D20`,maxLength:3})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Show Card Column`}),(0,L.jsx)(X,{label:`Show Stat Block Access`,isOn:f,onChange:async e=>{p(e),await I(m.SHOW_CARD_ACCESS,e)}})]})]}),(0,L.jsxs)(_p,{theme:e,children:[(0,L.jsx)(xp,{theme:e,children:`Player Controls`}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Show Player View`}),(0,L.jsx)(X,{label:`Show Player View`,isOn:h,onChange:async e=>{g(e),await I(m.SHOW_PLAYER_VIEW,e)}})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Show Non-Party Units`}),(0,L.jsx)(X,{label:`Show Non-Party Units`,isOn:_,onChange:async e=>{v(e),await I(m.SHOW_NON_PARTY_UNITS,e)}})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`GM/Owner Only Edit`}),(0,L.jsx)(X,{label:`Owner Only Edit`,isOn:y,onChange:async e=>{b(e),await I(m.SHOW_OWNER_ONLY_EDIT,e)}})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Show Adjust HP Context Menu`}),(0,L.jsx)(X,{label:`Show Adjust HP Context Menu`,isOn:x,onChange:async e=>{S(e),await I(m.SHOW_MODIFY_UNIT_CONTEXT_MENU,e)}})]})]}),(0,L.jsxs)(_p,{theme:e,children:[(0,L.jsx)(xp,{theme:e,children:`Game Controls`}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Show HP Bars on tokens`}),(0,L.jsx)(X,{label:`Show HP Bars on tokens`,isOn:C,onChange:async e=>{w(e),await I(m.SHOW_HP_BARS,e),e&&ee&&(te(!1),await I(m.SHOW_HP_NUMBERS,!1)),e&&F[m.HP_BAR_ORIENTATION]===void 0&&(E(`bottom`),await I(m.HP_BAR_ORIENTATION,`bottom`))}})]}),(C||ee)&&(0,L.jsxs)(Sp,{theme:e,children:[(0,L.jsx)(Cp,{theme:e,children:`Orientation: `}),(0,L.jsxs)(Tp,{theme:e,value:T,onChange:async e=>{let t=e.target.value;E(t),await I(m.HP_BAR_ORIENTATION,t)},children:[(0,L.jsx)(`option`,{value:`top`,children:`Top`}),(0,L.jsx)(`option`,{value:`bottom`,children:`Bottom`}),(0,L.jsx)(`option`,{value:`left`,children:`Left`}),(0,L.jsx)(`option`,{value:`right`,children:`Right`})]})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Show HP Numbers on tokens`}),(0,L.jsx)(X,{label:`Show HP Numbers on tokens`,isOn:ee,onChange:async e=>{te(e),await I(m.SHOW_HP_NUMBERS,e),e&&C&&(w(!1),await I(m.SHOW_HP_BARS,!1)),e&&F[m.HP_BAR_ORIENTATION]===void 0&&(E(`bottom`),await I(m.HP_BAR_ORIENTATION,`bottom`))}})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Show Death Effect`}),(0,L.jsx)(X,{label:`Show Death Effect`,isOn:ne,onChange:async e=>{D(e),await I(m.SHOW_DEATH_EFFECT,e)}})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Show Names on Tokens`}),(0,L.jsx)(X,{label:`Show names on tokens`,isOn:k,onChange:async e=>{ie(e),await I(m.SHOW_NAMES,e);let t=n.filter(e=>e.metadata[l.ON_LIST]===!0);e?(O.log(`Showing names on tokens`),await c.scene.items.updateItems(t,e=>{for(let t of e){let e=t.metadata[l.UNIT_NAME],n=t;e&&n.text&&(n.text.plainText=String(e))}})):(O.log(`Hiding names on tokens`),await c.scene.items.updateItems(t,e=>{for(let t of e){let e=t;e.text&&(e.text.plainText=``)}}))}})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Show Turn Effect`}),(0,L.jsx)(X,{label:`Show Turn Effect`,isOn:ae,onChange:async e=>{oe(e),await I(m.SHOW_TURN_EFFECT,e)}})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Use Descriptive Names`}),(0,L.jsx)(X,{label:`Use Descriptive Duplicates Names`,isOn:se,onChange:async e=>{ce(e),await I(m.USE_DESCRIPTIVE_DUPLICATES,e)}})]})]}),(0,L.jsxs)(_p,{theme:e,children:[(0,L.jsx)(xp,{theme:e,children:`Dice Controls`}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Enable Rumble! Integration`}),(0,L.jsx)(X,{label:`Enable Rumble! Integration`,isOn:le,onChange:async e=>{ue(e),await I(m.ENABLE_RUMBLE,e),e&&(A(!1),me(!1),await I(m.ENABLE_BONES,!1),await I(m.ENABLE_DICE_PLUS,!1))}})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Enable Bones! Integration`}),(0,L.jsx)(X,{label:`Enable Bones! Integration`,isOn:de,onChange:async e=>{A(e),await I(m.ENABLE_BONES,e),e&&(ue(!1),me(!1),await I(m.ENABLE_RUMBLE,!1),await I(m.ENABLE_DICE_PLUS,!1))}})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Enable Dice+ Integration`}),(0,L.jsx)(X,{label:`Enable Dice+ Integration`,isOn:pe,onChange:async e=>{me(e),await I(m.ENABLE_DICE_PLUS,e),e&&(ue(!1),A(!1),await I(m.ENABLE_RUMBLE,!1),await I(m.ENABLE_BONES,!1))}})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Enable OBR Notification`}),(0,L.jsx)(X,{label:`Enable OBR Notification`,isOn:ge,onChange:async e=>{_e(e),await I(m.ENABLE_OBR_NOTIFICATION,e)}})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Show Results to All`}),(0,L.jsx)(X,{label:`Show Results to All`,isOn:j,onChange:async e=>{ve(e),await I(m.SHOW_NOTIFICATION_TO_ALL,e)}})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Enable Discord Logging`}),(0,L.jsx)(X,{label:`Enable Discord Logging`,isOn:ye,onChange:async e=>{if(e&&!he(N.trim())){alert(`Please enter a valid Discord webhook URL before enabling Discord logging.`),be(!1),await I(m.ENABLE_DISCORD_LOGGING,!1);return}be(e),await I(m.ENABLE_DISCORD_LOGGING,e)}})]}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Cp,{theme:e,children:`Discord Url: `}),(0,L.jsx)(wp,{theme:e,type:`text`,value:N,onChange:async e=>{let t=e.target.value,n=t.trim();xe(t),await I(m.DISCORD_URL,n),O.log(`Discord URL:`,n)},placeholder:`https://discord.com/api/webhooks/...`,maxLength:200})]})]}),(0,L.jsxs)(_p,{theme:e,children:[(0,L.jsx)(xp,{theme:e,children:`Other`}),(0,L.jsxs)(Z,{theme:e,children:[(0,L.jsx)(Q,{theme:e,children:`Enable Console Log`}),(0,L.jsx)(X,{label:`Enable Console Log`,isOn:Se,onChange:async e=>{Ce(e),O.setEnabled(e),await I(m.ENABLE_CONSOLE_LOG,e)}})]})]})]})})};var Op=b.div`
  ${{display:`flex`,height:`100%`,flexDirection:`column`,padding:`1rem`}}
`,kp=b.div`
  ${{flex:`1 1 0%`,overflowY:`auto`,borderRadius:`0.5rem`,borderWidth:`2px`,"--tw-border-opacity":`1`,borderColor:`rgb(255 255 255 / var(--tw-border-opacity, 1))`,padding:`0.5rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  margin: 10px;
  white-space: break-spaces;
  word-wrap: break-word;
  margin-bottom: 50px;
`,Ap=b.div`
  ${{marginBottom:`0.5rem`,textAlign:`left`}}
`,jp=b.span`
  ${{marginRight:`0.5rem`,fontSize:`0.75rem`,"--tw-text-opacity":`1`,color:`rgb(203 213 224 / var(--tw-text-opacity, 1))`}}
`,Mp=b.span`
  ${{fontSize:`0.875rem`,"--tw-text-opacity":`1`,color:`rgb(255 255 255 / var(--tw-text-opacity, 1))`}}
`;const Np=()=>{let e=F(e=>e.messages),t=(0,M.useRef)(null),{theme:n}=Ae();return(0,M.useEffect)(()=>{t.current?.scrollIntoView({behavior:`smooth`})},[e]),(0,L.jsx)(Bu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,L.jsxs)(Op,{children:[(0,L.jsx)(gp,{theme:n,children:`System Log`}),(0,L.jsxs)(kp,{children:[e.map(e=>(0,L.jsxs)(Ap,{children:[(0,L.jsx)(jp,{children:e.timestamp}),(0,L.jsx)(Mp,{children:e.text})]},e.id)),(0,L.jsx)(`div`,{ref:t})]})]})})};var Pp=b.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,Fp=b.div`
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
`,Ip=b.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 15px 0;
  font-size: 18px;
`,Lp=b.div`
  margin: 0 0 20px 0;
`,Rp=b.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;const zp=({isOpen:e,title:t,onClose:n,children:r,actions:i,closeOnOverlayClick:a=!0,minWidth:o,maxWidth:s})=>{let{theme:c}=Ae();return e?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Pp,{onClick:a?n:void 0}),(0,L.jsxs)(Fp,{theme:c,$minWidth:o,$maxWidth:s,onClick:e=>e.stopPropagation(),children:[t&&(0,L.jsx)(Ip,{theme:c,children:t}),(0,L.jsx)(Lp,{children:r}),i&&(0,L.jsx)(Rp,{children:i})]})]}):null},Bp=`buff_effect_one`,Vp=`debuff_effect_one`,Hp=[{value:`buff_effect_one`,label:`Buff Effect One`},{value:`buff_effect_two`,label:`Buff Effect Two`}],Up=[{value:`debuff_effect_one`,label:`Debuff Effect One`},{value:`debuff_effect_two`,label:`Debuff Effect Two`}],Wp=e=>Hp.some(t=>t.value===e),Gp=e=>Up.some(t=>t.value===e),Kp=e=>{switch(e){case`buff_effect_two`:return`
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
`}},qp=e=>{switch(e){case`debuff_effect_two`:return`
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
`}};var Jp=u.EXTENSIONID,Yp=`com.battle-system.forge`;const $={CURRENT_THEME:`${Jp}/CurrentTheme`,CURRENT_CARD:`${Jp}/CurrentCard`,CURRENT_LIST:`${Jp}/CurrentList`,CURRENT_ATTR:`${Jp}/CurrentAttr`,SYSTEM_NAME:`${Jp}/SystemName`,IMPORT_DATE:`${Jp}/ImportDate`};var Xp=(e,t)=>e instanceof Error&&e.message?e.message:t,Zp=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Imported ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Imported ${t} is not a JSON array`);return n}throw Error(`Imported ${t} has invalid type`)},Qp=b.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,$p=b.div`
  background-color: ${e=>y(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`,em=b.h2`
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  padding: 12px 15px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 400;
`,tm=b.p`
  color: ${e=>y(e.theme.PRIMARY,.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`,nm=b.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 15px;
`,rm=b.div`
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
`,im=b.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.theme.PRIMARY};
  margin-top: 5px;
`,am=b.div`
  margin-top: 16px;
  background-color: ${e=>y(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 14px;
`,om=b.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 10px 0;
  font-size: 15px;
`,sm=b.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`,cm=b.label`
  color: ${e=>e.theme.PRIMARY};
  min-width: 84px;
  font-size: 13px;
`,lm=b.select`
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
`,um=b.div`
  background-color: ${()=>y(`#FF0000`,.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,dm=b.div`
  background-color: ${()=>y(`#00FF00`,.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,fm=b.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`,pm=b.p`
  color: ${e=>y(e.theme.PRIMARY,.9)};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,mm=b.div`
  margin-top: 30px;
`,hm=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,gm=b.div`
  background-color: ${e=>y(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,_m=b.div`
  flex: 1;
`,vm=b.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`,ym=b.div`
  color: ${e=>y(e.theme.PRIMARY,.7)};
  font-size: 13px;
  font-style: italic;
`,bm=b.div`
  display: flex;
  gap: 8px;
`,xm=b.button`
  background-color: ${e=>e.$variant===`danger`?y(`#FF0000`,.2):y(e.theme.OFFSET,.5)};
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
    background-color: ${e=>e.$variant===`danger`?y(`#FF0000`,.3):e.theme.OFFSET};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Sm={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}};const Cm=()=>{let{theme:e,updateThemeFromSystem:t}=Ae(),n=P(e=>e.sceneMetadata),[r,i]=(0,M.useState)(``),[a,o]=(0,M.useState)(!1),[s,l]=(0,M.useState)(null),[u,d]=(0,M.useState)(null),[f,p]=(0,M.useState)(``),[h,g]=(0,M.useState)(null),[_,v]=(0,M.useState)(null),[b,x]=(0,M.useState)([]),[S,C]=(0,M.useState)(``),[w,E]=(0,M.useState)(``),[ee,te]=(0,M.useState)(Bp),[ne,D]=(0,M.useState)(Vp),[re,k]=(0,M.useState)([]),[ie,ae]=(0,M.useState)(!1),[oe,ce]=(0,M.useState)(null),[ue,de]=(0,M.useState)(``);(0,M.useEffect)(()=>{fe(),me()},[n]),(0,M.useEffect)(()=>{fe(),me()},[n]);let fe=()=>{try{let e=n[$.CURRENT_THEME],t=n[$.CURRENT_ATTR],r=n[$.SYSTEM_NAME]||T.name,i=n[$.IMPORT_DATE]||null,a=n[m.HP_CURRENT_BID],o=n[m.HP_MAX_BID],s=n[m.BUFF_VISUAL_PRESET],c=n[m.DEBUFF_VISUAL_PRESET],l=Array.isArray(t)?t:[];p(r),g(i),v(e||null),x(l),C(a||``),E(o||``),te(Wp(s)?s:Bp),D(Gp(c)?c:Vp)}catch(e){O.error(`Error loading system from cache:`,e)}},A=async(e,t)=>{await c.scene.setMetadata({[e]:t})},pe=b.filter(e=>e.attr_type===`numb`),me=()=>{try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(n&&n.startsWith(`${Yp}.`)&&n.endsWith(`.backup`)){let t=localStorage.getItem(n);if(t){let n=JSON.parse(t);e.push(n)}}}e.sort((e,t)=>new Date(t.backupDate).getTime()-new Date(e.backupDate).getTime()),k(e)}catch(e){O.error(`Error loading backups:`,e)}},he=async e=>{try{let e=n[$.CURRENT_THEME],t=n[$.CURRENT_CARD],r=n[$.CURRENT_LIST],i=n[$.CURRENT_ATTR],a=n[$.SYSTEM_NAME]||T.name;if(!e||!Array.isArray(t)||!Array.isArray(r)||!Array.isArray(i)){O.warn(`Cannot create backup: system data incomplete`);return}let o={name:a,backupDate:new Date().toISOString(),theme_primary:e.primary,theme_offset:e.offset,theme_background:e.background,theme_border:e.border,background_url:e.background_url,card_layout:t,list_layout:r,attributes:i},s=`${Yp}.${a}.backup`;localStorage.setItem(s,JSON.stringify(o)),O.log(`Backup created for ${a}`),me()}catch(e){throw O.error(`Error creating backup:`,e),e}},ge=e=>{try{let t=`${Yp}.${e}.backup`;localStorage.removeItem(t),O.log(`Backup deleted for ${e}`),me(),d(`Backup for "${e}" deleted successfully`)}catch(e){O.error(`Error deleting backup:`,e),l(`Failed to delete backup`)}},_e=(e,t)=>{de(e),ce(()=>t),ae(!0)},j=async()=>{ae(!1),oe&&(await oe(),ce(null))},ve=()=>{ae(!1),ce(null),de(``)},ye=async()=>{if(!r.trim()){l(`Please enter a share_id`);return}_e(`This will overwrite your current system data. A backup of your current system will be saved to local storage. Do you want to continue?`,async()=>{await be()})},be=async()=>{o(!0),l(null),d(null);try{let{data:e,error:n}=await le.from(`v_bs_system_with_attributes`).select(`*`).eq(`share_id`,r).maybeSingle();if(n)throw n;if(!e){l(`No system found with that share_id`),o(!1);return}let a=e,s=Zp(a.card_layout,`card_layout`),u=Zp(a.list_layout,`list_layout`),m=a.attributes;if(!Array.isArray(m))throw Error(`Imported attributes are not a valid array`);await he(f);let h={primary:a.theme_primary,offset:a.theme_offset,background:a.theme_background,border:a.theme_border,background_url:a.background_url};await c.scene.setMetadata({[$.CURRENT_THEME]:h,[$.CURRENT_CARD]:s,[$.CURRENT_LIST]:u,[$.CURRENT_ATTR]:m,[$.SYSTEM_NAME]:a.name,[$.IMPORT_DATE]:new Date().toISOString()}),p(a.name),g(new Date().toISOString()),v(h),t(h.primary,h.offset,h.background,h.border,h.background_url),d(`System "${a.name}" loaded successfully! Backup created.`),i(``),O.log(`System loaded:`,a.name)}catch(e){O.error(`Error fetching system:`,e),l(Xp(e,`An error occurred while fetching the system`))}finally{o(!1)}},N=async e=>{_e(`This will restore the system "${e.name}" from backup. A backup of your current system will be created. Do you want to continue?`,async()=>{await xe(e)})},xe=async e=>{o(!0),l(null),d(null);try{await he(f);let n={primary:e.theme_primary,offset:e.theme_offset,background:e.theme_background,border:e.theme_border,background_url:e.background_url};if(!Array.isArray(e.card_layout)||!Array.isArray(e.list_layout)||!Array.isArray(e.attributes))throw Error(`Backup data is invalid`);await c.scene.setMetadata({[$.CURRENT_THEME]:n,[$.CURRENT_CARD]:e.card_layout,[$.CURRENT_LIST]:e.list_layout,[$.CURRENT_ATTR]:e.attributes,[$.SYSTEM_NAME]:e.name,[$.IMPORT_DATE]:new Date().toISOString()}),p(e.name),g(new Date().toISOString()),v(n),t(n.primary,n.offset,n.background,n.border,n.background_url),d(`System "${e.name}" restored from backup successfully!`),O.log(`System restored from backup:`,e.name)}catch(e){O.error(`Error restoring backup:`,e),l(`Failed to restore system from backup`)}finally{o(!1)}},Se=async()=>{o(!0),l(null),d(null);try{let e={primary:T.theme_primary,offset:T.theme_offset,background:T.theme_background,border:T.theme_border,background_url:T.background_url};await c.scene.setMetadata({[$.CURRENT_THEME]:e,[$.CURRENT_CARD]:T.card_layout,[$.CURRENT_LIST]:T.list_layout,[$.CURRENT_ATTR]:T.attributes,[$.SYSTEM_NAME]:T.name,[$.IMPORT_DATE]:null}),p(T.name),g(null),v(e),t(e.primary,e.offset,e.background,e.border,e.background_url),d(`Reset to default system successfully!`)}catch(e){l(`Failed to reset to default system`),O.error(`Error resetting to default:`,e)}finally{o(!1)}},Ce=e=>e?new Date(e).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):null;return(0,L.jsxs)(Bu.div,{variants:Sm,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,L.jsxs)(hp,{theme:e,children:[(0,L.jsx)(gp,{theme:e,children:`System Configuration`}),(0,L.jsx)(em,{theme:e,children:f}),h?(0,L.jsxs)(tm,{theme:e,children:[`Imported: `,Ce(h)]}):(0,L.jsx)(tm,{theme:e,children:`Using Default System`}),_&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(nm,{children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(rm,{color:_.primary,theme:e,children:_.primary}),(0,L.jsx)(im,{theme:e,children:`PRIMARY`})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(rm,{color:_.offset,theme:e,children:_.offset}),(0,L.jsx)(im,{theme:e,children:`OFFSET`})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(rm,{color:_.background,theme:e,children:_.background}),(0,L.jsx)(im,{theme:e,children:`BG`})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(rm,{color:_.border,theme:e,children:_.border}),(0,L.jsx)(im,{theme:e,children:`BORDER`})]})]}),(0,L.jsxs)(am,{theme:e,children:[(0,L.jsx)(om,{theme:e,children:`System Settings`}),(0,L.jsxs)(sm,{children:[(0,L.jsx)(cm,{theme:e,children:`Current HP`}),(0,L.jsxs)(lm,{theme:e,value:S,onChange:async e=>{let t=e.target.value;C(t),await A(m.HP_CURRENT_BID,t)},children:[(0,L.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),pe.map(e=>(0,L.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,L.jsxs)(sm,{children:[(0,L.jsx)(cm,{theme:e,children:`Max HP`}),(0,L.jsxs)(lm,{theme:e,value:w,onChange:async e=>{let t=e.target.value;E(t),await A(m.HP_MAX_BID,t)},children:[(0,L.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),pe.map(e=>(0,L.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,L.jsxs)(sm,{children:[(0,L.jsx)(cm,{theme:e,children:`Buff Visual`}),(0,L.jsx)(lm,{theme:e,value:ee,onChange:async e=>{let t=e.target.value;Wp(t)&&(te(t),await A(m.BUFF_VISUAL_PRESET,t))},children:Hp.map(e=>(0,L.jsx)(`option`,{value:e.value,children:e.label},e.value))})]}),(0,L.jsxs)(sm,{children:[(0,L.jsx)(cm,{theme:e,children:`Debuff Visual`}),(0,L.jsx)(lm,{theme:e,value:ne,onChange:async e=>{let t=e.target.value;Gp(t)&&(D(t),await A(m.DEBUFF_VISUAL_PRESET,t))},children:Up.map(e=>(0,L.jsx)(`option`,{value:e.value,children:e.label},e.value))})]})]})]}),(0,L.jsxs)($p,{theme:e,children:[(0,L.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0},children:`Import New System`}),(0,L.jsx)(`p`,{style:{color:y(e.PRIMARY,.8),fontSize:`14px`},children:`Enter a share_id to download and activate a new game system configuration.`}),(0,L.jsx)(Qp,{children:(0,L.jsx)(yp,{theme:e,type:`text`,value:r,onChange:e=>i(e.target.value),placeholder:`Enter Share Id...`,disabled:a,onKeyPress:e=>e.key===`Enter`&&ye()})}),(0,L.jsxs)(fm,{children:[(0,L.jsx)(vp,{theme:e,onClick:ye,disabled:a||!r.trim(),children:a?`....!`:`Import System`}),(0,L.jsx)(vp,{theme:e,variant:`secondary`,onClick:Se,disabled:a,children:`Use Default`})]})]}),s&&(0,L.jsxs)(um,{theme:e,children:[(0,L.jsx)(`strong`,{children:`Error:`}),` `,s]}),u&&(0,L.jsxs)(dm,{theme:e,children:[(0,L.jsx)(`strong`,{children:`Success:`}),` `,u]}),re.length>0&&(0,L.jsx)(mm,{children:(0,L.jsxs)(_p,{theme:e,children:[(0,L.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0,marginBottom:`15px`},children:`System Backups`}),(0,L.jsx)(hm,{children:re.map(t=>(0,L.jsxs)(gm,{theme:e,children:[(0,L.jsxs)(_m,{children:[(0,L.jsx)(vm,{theme:e,children:t.name}),(0,L.jsxs)(ym,{theme:e,children:[`Backed up: `,Ce(t.backupDate)]})]}),(0,L.jsxs)(bm,{children:[(0,L.jsx)(xm,{theme:e,onClick:()=>N(t),disabled:a,title:`Import this backup`,children:(0,L.jsx)(cd,{size:18})}),(0,L.jsx)(xm,{theme:e,$variant:`danger`,onClick:()=>ge(t.name),disabled:a,title:`Delete this backup`,children:(0,L.jsx)(se,{size:18})})]})]},`${t.name}-${t.backupDate}`))})]})})]}),(0,L.jsx)(zp,{isOpen:ie,title:`Confirm Action`,onClose:ve,actions:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(vp,{theme:e,variant:`secondary`,onClick:ve,children:`Cancel`}),(0,L.jsx)(vp,{theme:e,onClick:j,children:`Confirm`})]}),children:(0,L.jsx)(pm,{theme:e,children:ue})})]},`system`)},wm=()=>{let[e,t]=(0,M.useState)({theme:null,cardLayout:[],listLayout:[],attributes:[],systemName:T.name,importDate:null,isLoading:!0}),n=P(e=>e.sceneMetadata);return(0,M.useEffect)(()=>{try{let e=n[$.CURRENT_THEME],r=n[$.CURRENT_CARD],i=n[$.CURRENT_LIST],a=n[$.CURRENT_ATTR];if(!e||!Array.isArray(r)||!Array.isArray(i)||!Array.isArray(a)){O.log(`System data missing, using defaults`),t({theme:{primary:T.theme_primary,offset:T.theme_offset,background:T.theme_background,border:T.theme_border,background_url:T.background_url},cardLayout:T.card_layout,listLayout:T.list_layout,attributes:T.attributes,systemName:T.name,importDate:null,isLoading:!1});return}t({theme:e,cardLayout:r,listLayout:i,attributes:a,systemName:n[$.SYSTEM_NAME]||T.name,importDate:n[$.IMPORT_DATE]||null,isLoading:!1})}catch(e){O.error(`Error loading system data:`,e),t({theme:{primary:T.theme_primary,offset:T.theme_offset,background:T.theme_background,border:T.theme_border,background_url:T.background_url},cardLayout:T.card_layout,listLayout:T.list_layout,attributes:T.attributes,systemName:T.name,importDate:null,isLoading:!1})}},[n]),e};function Tm(e,t){let n=e.replace(`#`,``);n.length===3&&(n=n.split(``).map(e=>e+e).join(``));let r=parseInt(n,16);return`rgba(${r>>16&255}, ${r>>8&255}, ${r&255}, ${t})`}var Em=class{static async CenterViewportOnImage(e){let t=await c.scene.grid.getDpi(),n=await c.viewport.getScale(),r=await c.viewport.getWidth(),i=await c.viewport.getHeight(),a={x:r/2,y:i/2},o={x:a.x/n,y:a.y/n},s=await this.GetImageCenter(e,t),l={x:s.x-o.x,y:s.y-o.y},u={x:l.x*n*-1,y:l.y*n*-1};await c.viewport.animateTo({position:u,scale:n})}static async GetImageCenter(e,t){if(n(e)){let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{x:e.position.x-a+r/2,y:e.position.y-o+i/2}}else if(_(e)&&e.points.length>0)return{x:e.points[0].x,y:e.points[0].y};else return{x:e.position.x,y:e.position.y}}};const Dm=`${j}/effects`;var Om=`${j}/effects-expired`,km=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Am=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,jm=b.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`,Mm=b.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
`,Nm=b.div`
  flex: 0 0 120px;
  min-width: 120px;
  display: flex;
  align-items: flex-end;
`,Pm=b.label`
  color: ${e=>y(e.theme.PRIMARY,.75)};
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`,Fm=b.input`
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
`,Im=b.select`
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
`,Lm=b(Im)`
  min-width: 180px;
  height: 96px;
  padding-right: 8px;
`,Rm=b.button`
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
    background: ${e=>y(e.theme.OFFSET,.5)};
  }
`,zm=b.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 240px;
  overflow-y: auto;
`,Bm=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background: ${e=>y(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,Vm=b.div`
  color: ${e=>y(e.theme.PRIMARY,.8)};
  font-size: 12px;
`,Hm=b.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,Um=b.p`
  color: ${e=>y(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,Wm=b.p`
  color: #ff6b6b;
  margin: 0;
  font-size: 12px;
`,Gm=b.div`
  position: relative;
  display: inline-flex;
`,Km=b.button`
  background: ${e=>e.$active?y(e.theme.OFFSET,.65):`rgba(0, 0, 0, 0.3)`};
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
`,qm=b.span`
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
`,Jm=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const Ym=({items:e,units:t,setItems:n,playerData:r})=>{let[i,a]=(0,M.useState)(null),[o,s]=(0,M.useState)(``),[u,d]=(0,M.useState)(`1`),[f,p]=(0,M.useState)(`rounds`),[m,h]=(0,M.useState)(`start`),[g,_]=(0,M.useState)(`neutral`),[v,y]=(0,M.useState)([]),[b,x]=(0,M.useState)(null),S=(0,M.useMemo)(()=>{let t=new Map;return e.forEach(e=>{e.metadata?.[l.ON_LIST]===!0&&t.set(e.id,Jm(e.metadata?.[Dm]))}),t},[e]),C=e=>S.get(e)||[],w=async(t,r)=>{let i=r.filter(e=>e.remaining>0);n(e.map(e=>{if(e.id!==t)return e;let n={...e.metadata||{}};return i.length>0?n[Dm]=i:delete n[Dm],{...e,metadata:n}})),await c.scene.items.updateItems([t],e=>{let t={...e[0].metadata||{}};i.length>0?t[Dm]=i:delete t[Dm],e[0].metadata=t})},T=async e=>{try{await c.broadcast.sendMessage(Om,{message:e},{destination:`ALL`})}catch(t){O.error(`Failed to broadcast expired effect message`,t),await c.notification.show(e,`WARNING`)}},E=async(t,n)=>{if(String(r?.role||``).toUpperCase()!==`GM`)return;let i=[],a=[];e.forEach(e=>{if(e.metadata?.[l.ON_LIST]!==!0)return;let r=Jm(e.metadata?.[Dm]);if(r.length===0)return;let o=!1,s=[];r.forEach(r=>{if(!(r.endTiming===t&&(r.durationType===`turns`||e.id===n))){s.push(r);return}let i=r.remaining-1;if(o=!0,i<=0){a.push(`${e.name||`Unit`}: ${r.name} expired`);return}s.push({...r,remaining:i})}),o&&i.push({unitId:e.id,effects:s})});for(let e of i)await w(e.unitId,e.effects);if(a.length>0)for(let e of a)await T(e)},ee=(0,M.useMemo)(()=>i&&t.find(e=>e.id===i)||null,[i,t]),te=(0,M.useMemo)(()=>i?C(i):[],[i,S]);return(0,M.useEffect)(()=>{let e=c.broadcast.onMessage(Om,async e=>{let t=e.data?.message;typeof t!=`string`||!t.trim()||await c.notification.show(t,`WARNING`)});return()=>{e()}},[]),{effectsModalUnitId:i,selectedEffectsUnit:ee,activeEffectsForSelectedUnit:te,effectNameInput:o,setEffectNameInput:s,effectDurationInput:u,setEffectDurationInput:d,effectDurationType:f,setEffectDurationType:p,effectEndTiming:m,setEffectEndTiming:h,effectType:g,setEffectType:_,effectTargetIds:v,setEffectTargetIds:e=>{y(Array.from(new Set(e)))},effectsModalError:b,units:t,getEffectsForUnit:C,handleOpenEffectsModal:e=>{x(null),s(``),d(`1`),p(`rounds`),h(`start`),_(`neutral`),y([e]),a(e)},handleCloseEffectsModal:()=>{a(null),x(null)},handleAddEffect:async()=>{if(!i)return;let n=o.trim(),r=parseInt(u,10);if(!n){x(`Enter an effect name.`);return}if(!Number.isFinite(r)||r<=0){x(`Duration must be a positive number.`);return}let a=Array.from(new Set(v.filter(e=>t.some(t=>t.id===e))));if(a.length===0){x(`Select at least one target.`);return}let c=C(i),l=ee?.name||e.find(e=>e.id===i)?.name||`Unknown`,p={id:crypto.randomUUID(),name:n,remaining:r,durationType:f,endTiming:m,effectType:g,targets:a,createdByName:l,createdById:i};await w(i,[...c,p]),x(null),s(``),d(`1`),_(`neutral`),y([i])},handleDeleteEffect:async e=>{i&&await w(i,C(i).filter(t=>t.id!==e))},processEffectsForTurnEvent:E}},Xm=({manager:e})=>{let{theme:t}=Ae(),n=(0,M.useMemo)(()=>{let t=new Map;return e.units.forEach(e=>{t.set(e.id,e.name)}),t},[e.units]),r=e=>e===`buff`?`Buff`:e===`debuff`?`Debuff`:`Neutral`,i=e=>{if(e.length===0)return`No targets`;let t=e.map(e=>n.get(e)).filter(e=>typeof e==`string`&&e.length>0);return t.length===0?`${e.length} target${e.length===1?``:`s`}`:t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`};return(0,L.jsx)(zp,{isOpen:!!e.effectsModalUnitId,title:e.selectedEffectsUnit?`Effects: ${e.selectedEffectsUnit.name}`:`Effects`,onClose:e.handleCloseEffectsModal,minWidth:`520px`,maxWidth:`600px`,children:(0,L.jsxs)(km,{children:[(0,L.jsxs)(Am,{children:[(0,L.jsxs)(jm,{children:[(0,L.jsxs)(Mm,{style:{flex:`0 0 120px`},children:[(0,L.jsx)(Pm,{theme:t,children:`Effect`}),(0,L.jsx)(Fm,{theme:t,type:`text`,placeholder:`Name`,value:e.effectNameInput,onChange:t=>e.setEffectNameInput(t.target.value)})]}),(0,L.jsxs)(Mm,{style:{flex:`0 0 140px`},children:[(0,L.jsx)(Pm,{theme:t,children:`Duration`}),(0,L.jsx)(Fm,{theme:t,type:`number`,min:1,value:e.effectDurationInput,onChange:t=>e.setEffectDurationInput(t.target.value)})]}),(0,L.jsxs)(Mm,{style:{flex:`0 0 120px`},children:[(0,L.jsx)(Pm,{theme:t,children:`By`}),(0,L.jsxs)(Im,{theme:t,value:e.effectDurationType,onChange:t=>e.setEffectDurationType(t.target.value),children:[(0,L.jsx)(`option`,{value:`turns`,children:`Turns`}),(0,L.jsx)(`option`,{value:`rounds`,children:`Rounds`})]})]})]}),(0,L.jsxs)(jm,{children:[(0,L.jsxs)(Mm,{style:{flex:`0 0 120px`},children:[(0,L.jsx)(Pm,{theme:t,children:`Type`}),(0,L.jsxs)(Im,{theme:t,value:e.effectType,onChange:t=>e.setEffectType(t.target.value),children:[(0,L.jsx)(`option`,{value:`neutral`,children:`Neutral`}),(0,L.jsx)(`option`,{value:`buff`,children:`Buff`}),(0,L.jsx)(`option`,{value:`debuff`,children:`Debuff`})]})]}),(0,L.jsxs)(Mm,{style:{flex:`0 0 140px`},children:[(0,L.jsx)(Pm,{theme:t,children:`Ends at`}),(0,L.jsxs)(Im,{theme:t,value:e.effectEndTiming,onChange:t=>e.setEffectEndTiming(t.target.value),children:[(0,L.jsx)(`option`,{value:`start`,children:`Start of turn`}),(0,L.jsx)(`option`,{value:`end`,children:`End of turn`})]})]}),(0,L.jsx)(Nm,{children:(0,L.jsx)(Rm,{theme:t,onClick:e.handleAddEffect,style:{width:`100%`},children:`Add`})})]})]}),(0,L.jsxs)(Mm,{children:[(0,L.jsx)(Pm,{theme:t,children:`Targets`}),(0,L.jsx)(Lm,{theme:t,multiple:!0,value:e.effectTargetIds,onChange:t=>{let n=Array.from(t.target.selectedOptions).map(e=>e.value);e.setEffectTargetIds(n)},children:e.units.map(e=>(0,L.jsx)(`option`,{value:e.id,children:e.name},e.id))})]}),e.effectsModalError&&(0,L.jsx)(Wm,{theme:t,children:e.effectsModalError}),e.activeEffectsForSelectedUnit.length===0?(0,L.jsx)(Um,{theme:t,children:`No active effects.`}):(0,L.jsx)(zm,{children:e.activeEffectsForSelectedUnit.map(n=>(0,L.jsxs)(Bm,{theme:t,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(Hm,{theme:t,children:n.name}),(0,L.jsxs)(Vm,{theme:t,children:[r(n.effectType),` • `,n.remaining,` `,n.durationType,` • ends at `,n.endTiming===`start`?`start of turn`:`end of turn`,` • by `,n.createdByName]}),(0,L.jsxs)(Vm,{theme:t,children:[`Targets: `,i(n.targets)]})]}),(0,L.jsx)(Rm,{theme:t,onClick:()=>{e.handleDeleteEffect(n.id)},children:`Delete`})]},n.id))})]})})},Zm=({activeEffectsCount:e,canInteract:t,onOpen:n,icon:r})=>{let{theme:i}=Ae();return(0,L.jsxs)(Gm,{children:[(0,L.jsx)(Km,{theme:i,$active:e>0,disabled:!t,onClick:()=>{t&&n()},children:r||(0,L.jsx)(od,{})}),e>0&&(0,L.jsx)(qm,{theme:i,children:e>99?`99+`:e})]})};var Qm=b.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,$m=b.input`
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
`;const eh=({theme:e,unit:t,canInteract:n,elevationDraftValue:r,onElevationDraftChange:i,onCommitElevationChange:a})=>(0,L.jsx)(Qm,{theme:e,children:(0,L.jsx)($m,{theme:e,type:`text`,inputMode:`decimal`,min:-999,max:999,step:1,value:r??String(t.elevation??0),readOnly:!n,onChange:n?e=>i(t.id,e.target.value):void 0,onBlur:n?e=>a(t.id,e.target.value):void 0,onKeyDown:e=>{n&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}})}),th=({theme:e,canInteract:t,icon:n,activeEffectsCount:r,onOpen:i})=>(0,L.jsx)(Qm,{theme:e,children:(0,L.jsx)(Zm,{activeEffectsCount:r,canInteract:t,icon:n||(0,L.jsx)(od,{}),onOpen:i})});var nh=`${j}/elevation-badge`,rh=`${j}/elevation-badge-owner`,ih=`${j}/elevation`,ah=200,oh=40,sh=60,ch=120,lh=24,uh=(e,t)=>{if(!e)return;if(e.startsWith(`#`))return Tm(e,t);let n=e.match(/^rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\)$/i);if(n){let[,e,r,i]=n;return`rgba(${e}, ${r}, ${i}, ${t})`}let r=e.match(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i);if(r){let[,e,n,i]=r;return`rgba(${e}, ${n}, ${i}, ${t})`}return e},dh=e=>`
    0 1px 1px ${y(e.BACKGROUND,.95)},
    0 0 2px ${y(e.BACKGROUND,.85)}
  `,fh={heart:Qu,shield:id,sun:od,award:Uu,target:sd,users:ld,star:ad,zap:ud,clock:Ju,eye:Yu,layers:$u,music:nd,feather:Xu,book:Wu},ph=b.div`
  padding: 2px;
  width: 100%;
`,mh=b.h1`
  color: ${e=>e.theme.PRIMARY};
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`,hh=b.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
`,gh=b.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$compactMode?`end`:`center`};
  gap: ${e=>e.$compactMode?`8px`:`16px`};
  position: relative;
  padding: ${e=>e.$compactMode?`4px 8px`:`8px`};
  background-color: ${e=>y(e.theme.BACKGROUND,.75)};
  border-top: 2px solid ${e=>e.theme.BORDER};
`,_h=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.$compactMode?`8px`:`16px`};
`,vh=b.button`
  background: ${e=>e.disabled?y(e.theme.BORDER,.3):y(e.theme.OFFSET,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>dh(e.theme)};
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
    background: ${e=>e.disabled?y(e.theme.BORDER,.3):e.theme.OFFSET};
  }
  
  &:active {
    transform: ${e=>e.disabled?`none`:`scale(0.95)`};
  }

  svg {
    filter: drop-shadow(0 1px 1px ${e=>y(e.theme.BACKGROUND,.95)})
      drop-shadow(0 0 2px ${e=>y(e.theme.BACKGROUND,.75)});
  }
`,yh=b(vh)`
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
    filter: drop-shadow(0 1px 1px ${e=>y(e.theme.BACKGROUND,.95)})
      drop-shadow(0 0 3px ${e=>y(e.theme.BACKGROUND,.8)});
  }
`,bh=b(vh)`
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
`,xh=b(vh)`
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
`,Sh=b.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: ${e=>e.$compactMode?`14px`:`16px`};
  font-weight: 600;
  min-width: ${e=>e.$compactMode?`44px`:`80px`};
  text-align: center;
`,Ch=b.table`
  width: ${e=>e.$compact?`max-content`:`100%`};
  min-width: ${e=>e.$compact?`${ah}px`:`100%`};
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
`,wh=b.thead`
  background-color: ${e=>y(e.theme.BACKGROUND,.75)};
`,Th=b.tr``,Eh=b.th`
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
`,Dh=b.div`
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
  border: 1px solid ${e=>y(e.theme.BORDER,.9)};
  background: ${e=>y(e.theme.BACKGROUND,.96)};
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
  line-height: 1.3;
  text-align: left;
  box-shadow: 0 8px 24px ${e=>y(e.theme.BACKGROUND,.65)};
  backdrop-filter: blur(8px);

  &::after {
    content: '';
    position: absolute;
    left: clamp(12px, ${e=>`${e.$arrowX}px`}, calc(100% - 12px));
    ${e=>e.$placement===`top`?`top: 100%;`:`bottom: 100%;`}
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    ${e=>e.$placement===`top`?`border-top: 6px solid ${y(e.theme.BACKGROUND,.96)};`:`border-bottom: 6px solid ${y(e.theme.BACKGROUND,.96)};`}
  }
`,Oh=b.tbody``,kh=b.tr`
  ${e=>e.$isCurrentTurn&&e.theme&&`
    background: linear-gradient(to left, ${y(e.theme.OFFSET,.4)} 0%, transparent 100%);
  `}
  cursor: context-menu;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &:not(:last-child) td {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`,Ah=b.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,jh=b(Ah)`
  font-weight: 700;
  font-size: 18px;
  color: ${e=>e.theme.OFFSET};
  min-width: 60px;
`,Mh=b(Ah)`
  min-width: 48px;
`,Nh=b.button`
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
`,Ph=b.img`
  width: 18px;
  height: 18px;
  pointer-events: none;
`,Fh=b.div`
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
`,Ih=b.input`
  background: ${e=>e.$isRollable?y(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.3)`};
  border: 1px solid ${e=>e.$isRollable?y(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?dh(e.theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${y(e.theme.BACKGROUND,.28)}, 0 0 0 1px ${y(e.theme.OFFSET,.18)}`:`none`};
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
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${y(e.theme.OFFSET,.35)}, inset 0 0 0 1px ${y(e.theme.BACKGROUND,.35)}`:`none`};
  }
`,Lh=b(Ah)`
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
`,Rh=b.input`
  background: ${e=>e.$isRollable?y(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.4)`};
  border: 1px solid ${e=>e.$isRollable?y(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?dh(e.theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${y(e.theme.BACKGROUND,.28)}, 0 0 0 1px ${y(e.theme.OFFSET,.18)}`:`none`};
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
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${y(e.theme.OFFSET,.35)}, inset 0 0 0 1px ${y(e.theme.BACKGROUND,.35)}`:`none`};
  }
`,zh=b.span`
  margin: 0 2px;
  color: ${e=>e.theme.OFFSET};
  font-weight: 500;
`,Bh=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,Vh=b.button`
  background: ${e=>e.$active?y(e.theme.OFFSET,.65):`rgba(0, 0, 0, 0.3)`};
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
`,Hh=b.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.BORDER};
  cursor: pointer;
  margin: 0 2px;
  background: ${e=>y(e.theme.BACKGROUND,.55)};
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
    box-shadow: ${e=>`0 0 0 2px ${y(e.theme.PRIMARY,.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,Uh=b.button`
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
`,Wh=b.div`
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
`,Gh=b(Ah)`
  width: 24px;
  min-width: 24px;
  max-width: 24px;
  padding: 0;
  position: relative;
`,Kh=b.div`
  position: absolute;
  inset: 0;
  min-height: 40px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0 10px;
`,qh=b.div`
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
            ${y(e.theme.BORDER,.2)},
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
`,Jh=b.div`
  flex: 1;
  height: 100%;
  padding: 0 8px;
  margin: 0 -10px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`,Yh=b.div`
  width: 6px;
  flex: 1;
  height: 100%;
  background-repeat: repeat-y;
  background-position: center;
  background-size: 6px 16px;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='16' viewBox='0 0 6 16' preserveAspectRatio='none'%3E%3Cpolyline points='3,0 0,4 6,8 0,12 3,16' fill='none' stroke='${encodeURIComponent(e.theme.BORDER)}' stroke-width='1.2'/%3E%3C/svg%3E")`};
`,Xh=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
`,Zh=b.button`
  width: 100%;
  text-align: left;
  background: ${e=>e.$isCurrent?y(e.theme.OFFSET,.45):y(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  padding: 8px 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>y(e.theme.OFFSET,.55)};
  }
`,Qh=b.p`
  color: ${e=>y(e.theme.PRIMARY,.8)};
  margin: 0 0 12px 0;
  font-size: 13px;
`,$h=b.p`
  color: #ff6b6b;
  margin: 10px 0 0 0;
  font-size: 13px;
`,eg=b.div`
  height: 1px;
  margin: 12px 0;
  background: ${e=>y(e.theme.BORDER,.7)};
`,tg=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>y(e.theme.BACKGROUND,.35)};
`,ng=b.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,rg=b.div`
  color: ${e=>y(e.theme.PRIMARY,.75)};
  font-size: 11px;
`,ig=b.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`,ag=b.button`
  width: 50px;
  height: 28px;
  padding: 0;
  position: relative;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 999px;
  background: ${e=>e.$active?y(e.theme.OFFSET,.55):y(e.theme.BACKGROUND,.45)};
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
    background: ${e=>e.$active?y(e.theme.OFFSET,.7):y(e.theme.OFFSET,.45)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,og=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,sg=b.p`
  color: ${e=>y(e.theme.PRIMARY,.78)};
  margin: 0;
  font-size: 12px;
`,cg=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 320px;
  overflow-y: auto;
`,lg=b.div`
  background: ${e=>y(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,ug=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,dg=b.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #4b5563;
  background: rgba(0, 0, 0, 0.2);
  accent-color: #ffffff;
  margin: 0;
  pointer-events: none;
`,fg=b.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
`,pg=b.div`
  color: ${e=>y(e.theme.PRIMARY,.85)};
  font-size: 12px;
  font-style: italic;
  line-height: 1.25;
  white-space: pre-wrap;
`,mg=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`,hg=b.button`
  border: 1px solid ${e=>y(e.theme.OFFSET,.7)};
  border-radius: 999px;
  background: ${e=>y(e.theme.OFFSET,.35)};
  color: ${e=>e.theme.PRIMARY};
  font-size: 11px;
  padding: 2px 8px;
  cursor: pointer;

  &:hover {
    background: ${e=>y(e.theme.OFFSET,.55)};
  }
`,gg=b.p`
  color: ${e=>y(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,_g=b.div`
  width: 100%;
  min-height: 24px;
  border-radius: 4px;
  border: 1px solid ${e=>y(e.theme.BORDER,.8)};
  background: ${e=>y(e.theme.BACKGROUND,.55)};
`,vg=(e,t)=>{let n=[{id:crypto.randomUUID(),type:`initiative`,description:`Initiative value used for turn order. Can be edited via Right-Click or rolled with Click.`},{id:crypto.randomUUID(),type:`name`,description:`Name of the unit or character.`}],r=t?[{id:`card-column`,type:`card-column`}]:[];if(!e||e.length===0)return[...n,...r];let i=[...e].sort((e,t)=>e.col-t.col).map(e=>({id:e.id,type:e.type,name:e.styles?.labelName,useIcon:e.styles?.labelMode===`icon`,iconType:e.styles?.labelIcon,description:e.styles?.description,styles:e.styles}));return[...n,...i,...r]};const yg=()=>{let{theme:e}=Ae(),{listLayout:t,attributes:r,isLoading:i}=wm();P(e=>e.roomMetadata);let a=P(e=>e.sceneMetadata),o=P(e=>e.items),s=P(e=>e.partyData),d=P(e=>e.playerData),f=P(e=>e.gridDpi),p=P(e=>e.setItems),[h,g]=(0,M.useState)([]),[_,v]=(0,M.useState)([]),[y,b]=(0,M.useState)(null),[x,S]=(0,M.useState)(1),[C,w]=(0,M.useState)(new Set),[T,E]=(0,M.useState)(null),[ne,D]=(0,M.useState)(null),[re,k]=(0,M.useState)(!1),[ie,oe]=(0,M.useState)(!1),[se,ce]=(0,M.useState)(!1),[le,ue]=(0,M.useState)({}),[de,fe]=(0,M.useState)({}),[A,me]=(0,M.useState)(null),[he,ge]=(0,M.useState)({}),[_e,ve]=(0,M.useState)(!1),[ye,be]=(0,M.useState)(!1),[N,xe]=(0,M.useState)(!1),[Se,Ce]=(0,M.useState)(()=>window.innerWidth<400),[we,F]=(0,M.useState)(null),I=(0,M.useRef)(null),Te=(0,M.useRef)({}),Ee=(0,M.useRef)({}),De=(0,M.useRef)(null);(0,M.useEffect)(()=>{let e=()=>{Ce(window.innerWidth<400)};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let Oe=a,ke=Oe[m.REVERSE_INITIATIVE]||!1,je=Oe[m.POPCORN_INITIATIVE]||!1,Me=Oe[m.SHOW_CARD_ACCESS]||!1,Ne=Oe[m.SHOW_NON_PARTY_UNITS]||!1,Pe=Oe[m.DICE_RANGE]||``,Fe=Oe[m.SHOW_OWNER_ONLY_EDIT]||!1,Ie=String(d?.role||``).toUpperCase()===`GM`,Le=d?.id||``,Re=ee(m.INITIATIVE_LIST_COMPACT,Le);(0,M.useEffect)(()=>{let e=a[Re],t=a[m.INITIATIVE_LIST_COMPACT];xe(typeof e==`boolean`?e:typeof t==`boolean`?t:!1)},[a,Re]);let ze=async()=>{let e=!N;xe(e);try{await c.scene.setMetadata({[Re]:e})}catch(t){O.error(`Failed to persist initiative list compact mode`,t),xe(!e)}},Be=async({notation:e,actionName:t,tokenName:n,senderId:r,senderColor:i})=>{try{await ae({notation:e,actionName:t,senderName:n,senderId:r,senderColor:i},Oe)}catch(t){O.error(`Failed to send dice roll from InitiativeList`,e,t),O.log(e)}},Ve=e=>{let t=e;if(typeof t==`string`)try{t=JSON.parse(t)}catch{return[]}return Array.isArray(t)?t.map((e,t)=>{let n=e&&typeof e==`object`?e:{},r=n.inUse,i=typeof r==`boolean`?r:typeof r==`string`?[`true`,`1`,`yes`].includes(r.trim().toLowerCase()):typeof r==`number`?r===1:void 0;return{id:typeof n.id==`string`&&n.id?n.id:`entry-${t}`,name:typeof n.name==`string`?n.name:``,description:typeof n.description==`string`?n.description:``,...i===void 0?{}:{inUse:i}}}):[]};(0,M.useEffect)(()=>{g(o.filter(e=>e.metadata?.[l.ON_LIST]===!0).map(e=>{let t=e.metadata?.[l.INITIATIVE]||0,n=e.metadata[l.UNIT_NAME]||e.name||`Unknown`,r=e.metadata?.[l.BOSS_MODE]===!0,i=e.metadata?.[ih]||0,a=s.find(t=>t.id===e.createdUserId)||(d?.id===e.createdUserId?d:void 0),o=String(a?.role||``).toUpperCase()===`GM`,c=a?.color||(d?.id===e.createdUserId?d?.color:void 0),u=o?void 0:uh(c,1),f={};return Object.keys(e.metadata||{}).forEach(t=>{t.startsWith(`com.battle-system.forge`)&&(f[t]=e.metadata?.[t])}),{id:e.id,initiative:t,name:n,isBoss:r,elevation:i,attributes:f,createdUserId:e.createdUserId,ownerNameOutlineColor:u,isInParty:e.metadata?.[l.IN_PARTY]===!0,isVisible:e.visible!==!1}}))},[o,s,d]);let R=(0,M.useMemo)(()=>je?[...h].sort((e,t)=>e.name.localeCompare(t.name)):[...h].sort((e,t)=>e.initiative===t.initiative?e.name.localeCompare(t.name):ke?e.initiative-t.initiative:t.initiative-e.initiative),[h,ke,je]),He=Ym({items:o,units:R,setItems:p,playerData:d}),Ue=(0,M.useMemo)(()=>{let e=new Map;return s.forEach(t=>{e.set(t.id,t)}),d&&!e.has(d.id)&&e.set(d.id,d),Array.from(e.values()).sort((e,t)=>e.name.localeCompare(t.name))},[s,d]),We=(e,t)=>{let n=parseInt(t)||0;g(t=>t.map(t=>t.id===e?{...t,initiative:n}:t))},Ge=(e,t)=>{p(o.map(n=>n.id===e?{...n,metadata:{...n.metadata,[l.INITIATIVE]:t}}:n)),c.scene.items.updateItems([e],e=>{e[0].metadata[l.INITIATIVE]=t})},Ke=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},qe=(e,t,n)=>(typeof t==`number`&&(e=Math.max(t,e)),typeof n==`number`&&(e=Math.min(n,e)),e),Je=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(r.length===0)return qe(0,i,a);let o=r.match(/^([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),s=r.match(/^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),c=null;if(o){let e=o[1],n=parseFloat(o[2]);switch(e){case`+`:c=t+n;break;case`-`:c=t-n;break;case`*`:c=t*n;break;case`/`:c=n===0?t:t/n;break}}else if(s){let e=parseFloat(s[1]),t=s[2],n=parseFloat(s[3]);switch(t){case`+`:c=e+n;break;case`-`:c=e-n;break;case`*`:c=e*n;break;case`/`:c=n===0?e:e/n;break}}else{let e=parseFloat(r);Number.isNaN(e)||(c=e)}return qe(c===null||!Number.isFinite(c)?t:Math.trunc(c),i,a)},Ye=e=>{let t=Ke(Pe),n=Math.floor(Math.random()*t)+1;We(e,String(n)),Ge(e,n)},Xe=(e,t)=>{ue(n=>({...n,[e]:t}))},Ze=(e,t)=>{let n=Je(t,h.find(t=>t.id===e)?.initiative??0);ue(t=>{let{[e]:n,...r}=t;return r}),g(t=>t.map(t=>t.id===e?{...t,initiative:n}:t)),Ge(e,n)},Qe=e=>`ELE${e.slice(3)}`,$e=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o}},et=async(e,t)=>{let r=Qe(e);try{await c.scene.items.deleteItems([r])}catch{}if(t===0)return;let i=o.find(t=>t.id===e);if(!i||!n(i))return;let a=$e(i,f),s=`${t>0?`🡹`:`🡻`}${Math.abs(t)}`,l=te().id(r).name(`Elevation Badge`).plainText(s).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(36).fontFamily(`Segoe UI`).textAlign(`CENTER`).position({x:a.minX-40,y:a.minY}).metadata({[nh]:!0,[rh]:e}).attachedTo(e).visible(i.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build();try{await c.scene.items.addItems([l])}catch(t){O.error(`Failed to add elevation badge`,e,t)}},tt=(e,t)=>{fe(n=>({...n,[e]:t}))},nt=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(!r)return qe(0,i,a);let o=parseFloat(r);return qe(Number.isFinite(o)?Math.trunc(o):t,i,a)},rt=(e,t)=>{let n=nt(t,h.find(t=>t.id===e)?.elevation??0,{min:-999,max:999});fe(t=>{let{[e]:n,...r}=t;return r}),g(t=>t.map(t=>t.id===e?{...t,elevation:n}:t)),p(o.map(t=>t.id===e?{...t,metadata:{...t.metadata,[ih]:n}}:t)),c.scene.items.updateItems([e],e=>{e[0].metadata[ih]=n}),et(e,n)},it=(e,t)=>{let n=e.trim();if(!n)return e;let r=/^([+\-*/])\s*-?\d+(?:\.\d+)?$/.test(n),i=/^-?\d+(?:\.\d+)?\s*[+\-*/]\s*-?\d+(?:\.\d+)?$/.test(n),a=/^-?\d+(?:\.\d+)?$/.test(n);if(!r&&!i&&!a)return e;let o=typeof t==`number`?t:parseFloat(String(t)),s=Number.isFinite(o)?o:0;return String(Je(n,s))},at=(e,t,n)=>{let r=`${j}/${t}`,i=h.find(t=>t.id===e)?.attributes?.[r],a=it(n,i);g(t=>t.map(t=>t.id===e?{...t,attributes:{...t.attributes,[r]:a}}:t)),p(o.map(t=>t.id===e?{...t,metadata:{...t.metadata,[r]:a}}:t)),c.scene.items.updateItems([e],e=>{e[0].metadata[r]=a})},ot=e=>r.find(t=>t.attr_bid===e)||null,st=e=>{let t=ot(e);return typeof t?.attr_func==`string`&&t.attr_func.trim().length>0},ct=e=>{let t={};for(let n of r){let r=`${j}/${n.attr_bid}`,i=e.attributes?.[r];if(i==null||i===``)continue;let a=Number(i);Number.isFinite(a)&&(t[n.attr_bid]=a)}return t},lt=async(e,t)=>{let n=ot(t)?.attr_func;if(typeof n!=`string`||n.trim().length===0)return;let r=pe(n,{bidValueMap:ct(e),onMissingBid:`error`});if(!r.valid||!r.notation){O.warn(`Could not resolve notation for initiative list value-column`,{unitId:e.id,bid:t,error:r.error});return}let i=ot(t)?.attr_name||t,a=s.find(t=>t.id===e.createdUserId);await Be({notation:r.notation,actionName:i,tokenName:e.name,senderId:e.createdUserId||d?.id||`unknown`,senderColor:a?.color||d?.color||`#ffffff`})};(0,M.useEffect)(()=>()=>{Object.values(Te.current).forEach(e=>{window.clearTimeout(e)})},[]);let ut=(e,t)=>`value-column:${e}:${t}`,dt=e=>!!he[e],ft=(e,t)=>{ge(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},pt=e=>{ge(t=>{let{[e]:n,...r}=t;return r})},mt=(e,t)=>{let n=Te.current[e];n&&window.clearTimeout(n),Te.current[e]=window.setTimeout(()=>{Ee.current[e]=!0,ft(e,t),delete Te.current[e]},500)},ht=e=>{let t=Te.current[e];t&&(window.clearTimeout(t),delete Te.current[e])},gt=e=>Ee.current[e]?(delete Ee.current[e],!0):!1,_t=e=>{if(!Fe||Ie)return!0;let t=d?.id;return t?e.createdUserId===t:!1},vt=e=>Ie?!0:e.isVisible,yt=e=>Ie||Ne?!1:!e.isInParty;(0,M.useEffect)(()=>{i||v(vg(t,Me))},[t,i,Me]),(0,M.useEffect)(()=>{let e=a[m.CURRENT_TURN],t=a[m.CURRENT_ROUND];e?b(e):R.length>0&&b(R[0].id),t&&S(t)},[a,R]);let bt=async()=>{if(R.length===0)return;y&&await He.processEffectsForTurnEvent(`end`,y);let e=R.findIndex(e=>e.id===y)+1;if(e>=R.length){let e=x+1;S(e),b(R[0].id),await c.scene.setMetadata({[m.CURRENT_TURN]:R[0].id,[m.CURRENT_ROUND]:e}),await He.processEffectsForTurnEvent(`start`,R[0].id)}else b(R[e].id),await c.scene.setMetadata({[m.CURRENT_TURN]:R[e].id}),await He.processEffectsForTurnEvent(`start`,R[e].id)},xt=async()=>{if(R.length===0)return;let e=R.findIndex(e=>e.id===y)-1;if(e<0){let e=Math.max(1,x-1);S(e),b(R[R.length-1].id),await c.scene.setMetadata({[m.CURRENT_TURN]:R[R.length-1].id,[m.CURRENT_ROUND]:e})}else b(R[e].id),await c.scene.setMetadata({[m.CURRENT_TURN]:R[e].id})},St=async e=>{je&&(C.has(e)||(b(e),await c.scene.setMetadata({[m.CURRENT_TURN]:e}),await He.processEffectsForTurnEvent(`start`,e)))},Ct=async()=>{y&&(await He.processEffectsForTurnEvent(`end`,y),w(e=>new Set([...e,y])),C.size+1,R.length)},z=async()=>{let e=x+1;S(e),w(new Set),b(null),await c.scene.setMetadata({[m.CURRENT_TURN]:null,[m.CURRENT_ROUND]:e})},wt=async e=>{be(!0);try{if(e===`clear-list`){let e=o.filter(e=>e.metadata?.[l.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await c.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata&&l.ON_LIST in e.metadata&&delete e.metadata[l.ON_LIST]})}),p(o.map(e=>{if(e.metadata?.[l.ON_LIST]!==!0)return e;let t={...e.metadata||{}};return delete t[l.ON_LIST],{...e,metadata:t}})))}if(e===`reset-initiative`){let e=o.filter(e=>e.metadata?.[l.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await c.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata[l.INITIATIVE]=0})}),p(o.map(e=>e.metadata?.[l.ON_LIST]===!0?{...e,metadata:{...e.metadata||{},[l.INITIATIVE]:0}}:e)),g(e=>e.map(e=>o.some(t=>t.id===e.id&&t.metadata?.[l.ON_LIST]===!0)?{...e,initiative:0}:e)),ue({}))}let t=e===`clear-list`?null:e===`reset-initiative`?[...R].sort((e,t)=>e.name.localeCompare(t.name))[0]?.id??null:R[0]?.id??null;S(1),b(t),w(new Set),await c.scene.setMetadata({[m.CURRENT_TURN]:t,[m.CURRENT_ROUND]:1}),ve(!1)}catch(t){O.error(`Failed to reset encounter state`,{mode:e,error:t})}finally{be(!1)}},B=async e=>{let t=o.find(t=>t.id===e);if(t)try{await Em.CenterViewportOnImage(t)}catch(t){O.error(`Failed to center viewport on unit`,e,t)}},Tt=async(e,t)=>{try{let n=await c.viewport.getHeight(),r=n>800?700:n-100;await c.popover.open({id:u.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(t)}`,height:r,width:350,anchorElementId:e,hidePaper:!0,disableClickAway:!0})}catch(e){O.error(`Failed to open cards popover`,e)}},Et=(e,t)=>{e.preventDefault(),e.stopPropagation(),D(null),E(t)},Dt=async e=>{if(T){if(!o.find(e=>e.id===T)){D(`Token not found in scene cache.`);return}k(!0),D(null);try{await c.scene.items.updateItems([T],t=>{let n=t[0];n.createdUserId=e}),p(o.map(t=>t.id===T?{...t,createdUserId:e}:t)),E(null)}catch(t){O.error(`Failed to reassign token owner`,T,e,t),D(`Unable to assign token owner. Ensure you have permission to edit this token.`)}finally{k(!1)}}},Ot=async()=>{if(!T)return;let e=o.find(e=>e.id===T);if(!e){D(`Token not found in scene cache.`);return}let t=e.metadata?.[l.BOSS_MODE]!==!0;if(t&&o.filter(e=>e.id!==T&&e.metadata?.[l.ON_LIST]===!0&&e.metadata?.[l.BOSS_MODE]===!0).length>=2){D(`A maximum of 2 bosses can be enabled at once.`);return}oe(!0),D(null);try{await c.scene.items.updateItems([T],e=>{let n={...e[0].metadata||{}};n[l.BOSS_MODE]=t,e[0].metadata=n}),p(o.map(e=>e.id===T?{...e,metadata:{...e.metadata||{},[l.BOSS_MODE]:t}}:e))}catch(e){O.error(`Failed to toggle boss mode`,T,e),D(`Unable to update boss mode for this token.`)}finally{oe(!1)}},kt=async()=>{if(T){if(!o.find(e=>e.id===T)){D(`Token not found in scene cache.`);return}ce(!0),D(null);try{await c.scene.items.updateItems([T],e=>{let t={...e[0].metadata||{}};l.ON_LIST in t&&delete t[l.ON_LIST],e[0].metadata=t}),p(o.map(e=>{if(e.id!==T)return e;let t={...e.metadata||{}};return delete t[l.ON_LIST],{...e,metadata:t}})),E(null)}catch(e){O.error(`Failed to remove token from initiative list`,T,e),D(`Unable to remove token from initiative list.`)}finally{ce(!1)}}},At=(0,M.useMemo)(()=>T&&R.find(e=>e.id===T)||null,[T,R]),jt=(0,M.useMemo)(()=>T&&o.find(e=>e.id===T)||null,[T,o]),Mt=jt?.metadata?.[l.BOSS_MODE]===!0,Nt=(0,M.useMemo)(()=>A&&R.find(e=>e.id===A.unitId)||null,[A,R]),Pt=(0,M.useMemo)(()=>A&&r.find(e=>e.attr_bid===A.bid)||null,[r,A]),Ft=(0,M.useMemo)(()=>{if(!A||!Nt)return[];let e=Nt.attributes[`${j}/${A.bid}`];return Ve(e)},[A,Nt]),It=(0,M.useMemo)(()=>Ft.some(e=>typeof e.inUse==`boolean`),[Ft]),Lt=(0,M.useMemo)(()=>N?_.filter(e=>e.type===`initiative`||e.type===`name`?!0:e.type===`card-column`&&Me):_,[N,_,Me]),Rt=(0,M.useMemo)(()=>R.filter(e=>vt(e)),[R,Ie]),zt=(0,M.useMemo)(()=>{if(!Nt)return{};let e={};for(let t of r){let n=`${j}/${t.attr_bid}`,r=Nt.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(e[t.attr_bid]=i)}return e},[Nt,r]),Bt=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=(e[1]||``).trim();if(!n)continue;let r=pe(n,{bidValueMap:zt,onMissingBid:`error`});!r.valid||!r.notation||t.push(r.notation)}return t};(0,M.useEffect)(()=>{De.current&&Lt.length>0&&(O.debug(`Adjusting window width based on table size`),setTimeout(()=>{if(De.current){let e=De.current.offsetWidth+4,t=Math.min(e,800);c.action.setWidth(t),O.log(`Adjusted window width to `+t)}},100))},[N,Lt.length,R.length]);let Vt=e=>{if(!e)return null;let t=fh[e.toLowerCase()];return t?(0,L.jsx)(t,{}):null},Ht=(e,t)=>{let n=window.innerWidth-t-8,r=Math.min(Math.max(e-t/2,8),Math.max(8,n));return{left:r,arrowX:e-r}},Ut=e=>{let t=e.currentTarget.getBoundingClientRect(),n=`clientX`in e?e.clientX:t.left+t.width/2,r=t.top>72?`top`:`bottom`;return{anchorX:n,y:r===`top`?t.top:t.bottom,placement:r}},Wt=(e,t)=>{let n=Ut(e),r=Math.min(320,Math.max(140,t.length*7+28)),i=Ht(n.anchorX,r);F({text:t,...n,...i})},Gt=()=>{F(null)};(0,M.useLayoutEffect)(()=>{if(!we||!I.current)return;let e=I.current.getBoundingClientRect().width,t=Ht(we.anchorX,e);(Math.abs(t.left-we.left)>.5||Math.abs(t.arrowX-we.arrowX)>.5)&&F(e=>e&&{...e,...t})},[we]);let Kt=e=>e.type===`initiative`?(0,L.jsx)(ld,{}):e.type===`roller`?null:e.type===`name`?`Name`:e.type===`card-column`?(0,L.jsx)(Zu,{}):e.type===`divider-column`?null:e.useIcon&&e.iconType?Vt(e.iconType):e.name||e.type,qt=e=>e.type===`divider-column`?{fixedWidth:lh}:e.type===`initiative`?{minWidth:sh}:e.type===`name`?{minWidth:ch}:{minWidth:oh},Jt=(t,n)=>{let r=_t(n);if(yt(n)&&t.type!==`initiative`&&t.type!==`name`)return t.type===`divider-column`?(0,L.jsx)(Gh,{theme:e,children:(0,L.jsx)(_g,{theme:e})}):(0,L.jsx)(Ah,{theme:e,children:(0,L.jsx)(_g,{theme:e})});switch(t.type){case`initiative`:if(je)return(0,L.jsx)(jh,{theme:e,children:(0,L.jsx)(Fh,{onClick:e=>{e.stopPropagation(),r&&(C.has(n.id)||(n.id===y?Ct():St(n.id)))},children:C.has(n.id)?(0,L.jsx)(Ku,{color:e.OFFSET}):n.id===y?(0,L.jsx)(Gu,{color:e.PRIMARY}):(0,L.jsx)(qu,{color:e.BORDER})})});let i=`initiative:${n.id}`,a=dt(i);return(0,L.jsx)(jh,{theme:e,children:(0,L.jsx)(Ih,{theme:e,$isRollable:r&&!a,type:`text`,inputMode:`decimal`,value:le[n.id]??String(n.initiative),readOnly:!r||!a,onChange:!r||!a?void 0:e=>Xe(n.id,e.target.value),onBlur:!r||!a?void 0:e=>{Ze(n.id,e.target.value),pt(i)},onClick:()=>{r&&(a||gt(i)||Ye(n.id))},onContextMenu:e=>{r&&(e.preventDefault(),ft(i,e.currentTarget))},onTouchStart:e=>{r&&(a||mt(i,e.currentTarget))},onTouchEnd:()=>{ht(i)},onTouchCancel:()=>{ht(i)},onKeyDown:e=>{if(r){if(!a&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),Ye(n.id);return}a&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})});case`name`:return(0,L.jsx)(Lh,{theme:e,title:`Right-click to assign owner`,$outlineColor:n.ownerNameOutlineColor,onDoubleClick:()=>B(n.id),onContextMenu:r?e=>Et(e,n.id):void 0,children:n.isBoss?`💀 ${n.name}`:n.name});case`roller`:return(0,L.jsx)(Mh,{theme:e,children:(0,L.jsx)(Nh,{theme:e,disabled:!r,onClick:e=>{e.stopPropagation(),r&&Ye(n.id)},title:`Roll initiative (1-${Ke(Pe)})`,children:(0,L.jsx)(Ph,{src:`/dice.svg`,alt:`Roll`})})});case`card-column`:return(0,L.jsx)(Ah,{theme:e,children:(0,L.jsx)(Vh,{id:`card-access-${n.id}`,theme:e,disabled:!r,onClick:e=>{e.stopPropagation(),r&&Tt(e.currentTarget.id,n.id)},title:`Open card for ${n.name}`,children:(0,L.jsx)(Gu,{})})});case`value-column`:return(0,L.jsx)(Ah,{theme:e,children:(0,L.jsx)(Bh,{children:t.styles?.bidList?.map((i,a)=>{let o=st(i),s=ut(n.id,i),c=o&&dt(s),l=n.attributes[`${j}/${i}`],u=l==null||l===``?`0`:String(l);return(0,L.jsxs)(M.Fragment,{children:[a>0&&(0,L.jsx)(zh,{theme:e,children:t.styles?.dividers?.[a-1]||`/`}),(0,L.jsx)(Rh,{theme:e,$isRollable:r&&o,value:u,$small:t.styles?.bidList&&t.styles.bidList.length>2,readOnly:!r||o&&!c,onChange:!r||o&&!c?void 0:e=>{let t=e.target.value;g(e=>e.map(e=>e.id===n.id?{...e,attributes:{...e.attributes,[`${j}/${i}`]:t}}:e))},onBlur:!r||o&&!c?void 0:e=>{at(n.id,i,e.target.value),o&&pt(s)},onClick:o?()=>{r&&(c||gt(s)||lt(n,i))}:void 0,onContextMenu:o?e=>{r&&(e.preventDefault(),ft(s,e.currentTarget))}:void 0,onTouchStart:o?e=>{r&&(c||mt(s,e.currentTarget))}:void 0,onTouchEnd:o?()=>{ht(s)}:void 0,onTouchCancel:o?()=>{ht(s)}:void 0,onKeyDown:e=>{if(r){if(o&&!c&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),lt(n,i);return}(c||!o)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})]},i)})})});case`list-column`:return(0,L.jsx)(Ah,{theme:e,children:(0,L.jsx)(Vh,{theme:e,disabled:!r,onClick:e=>{if(e.stopPropagation(),!r)return;let i=t.styles?.bidList?.[0];i&&me({unitId:n.id,bid:i})},title:`Open list reference`,children:(0,L.jsx)(Wu,{})})});case`checkbox-column`:return(0,L.jsx)(Ah,{theme:e,children:(0,L.jsx)(Bh,{children:t.styles?.bidList?.map(i=>{let a=!!n.attributes[`${j}/${i}`],s=t.styles?.inputType===`slider`,l=e=>{g(t=>t.map(t=>t.id===n.id?{...t,attributes:{...t.attributes,[`${j}/${i}`]:e}}:t)),p(o.map(t=>t.id===n.id?{...t,metadata:{...t.metadata,[`${j}/${i}`]:e}}:t)),c.scene.items.updateItems([n.id],t=>{t[0].metadata[`${j}/${i}`]=e})};return s?(0,L.jsx)(Uh,{type:`button`,theme:e,$active:a,disabled:!r,onClick:r?()=>{l(!a)}:void 0,children:(0,L.jsx)(Wh,{theme:e,$active:a})},i):(0,L.jsx)(Hh,{theme:e,type:`checkbox`,checked:a,disabled:!r,onChange:r?e=>{l(e.target.checked)}:void 0},i)})})});case`special-column`:let s=Vt(t.iconType);if(t.styles?.specialType===`elevation`){let t=de[n.id];return(0,L.jsx)(eh,{theme:e,unit:n,canInteract:r,elevationDraftValue:t,onElevationDraftChange:tt,onCommitElevationChange:rt})}else{let t=He.getEffectsForUnit(n.id).length;return(0,L.jsx)(th,{theme:e,canInteract:r,icon:s||(0,L.jsx)(od,{}),activeEffectsCount:t,onOpen:()=>He.handleOpenEffectsModal(n.id)})}case`divider-column`:return(0,L.jsx)(Gh,{theme:e,children:(0,L.jsx)(Kh,{children:t.styles?.styleDesign===`zigzag`?(0,L.jsx)(Jh,{children:(0,L.jsx)(Yh,{theme:e})}):(0,L.jsx)(qh,{theme:e,$style:t.styles?.styleDesign})})});default:return(0,L.jsx)(Ah,{theme:e,children:`-`})}};if(i)return(0,L.jsx)(ph,{children:(0,L.jsx)(mh,{theme:e,children:`Loading...`})});let Yt=N||Se,Xt=N?`R: ${x}`:`Round: ${x}`;return(0,L.jsxs)(ph,{children:[(0,L.jsx)(hh,{children:(0,L.jsxs)(Ch,{ref:De,theme:e,$compact:N,children:[(0,L.jsx)(wh,{theme:e,children:(0,L.jsx)(Th,{children:Lt.map(t=>{let n=t.description??`This has no description.`,r=qt(t);return(0,L.jsx)(Eh,{theme:e,$minWidth:r.minWidth,$fixedWidth:r.fixedWidth,onMouseEnter:e=>Wt(e,n),onMouseMove:e=>Wt(e,n),onMouseLeave:Gt,onFocus:e=>Wt(e,n),onBlur:Gt,children:Kt(t)},t.id)})})}),(0,L.jsx)(Oh,{children:Rt.map(t=>(0,L.jsx)(kh,{$isCurrentTurn:t.id===y,theme:e,children:Lt.map(e=>(0,L.jsx)(M.Fragment,{children:Jt(e,t)},e.id))},t.id))})]})}),(0,L.jsxs)(gh,{theme:e,$compactMode:N,children:[(0,L.jsxs)(_h,{$compactMode:N,children:[N?(0,L.jsxs)(L.Fragment,{children:[Ie&&(0,L.jsx)(vh,{theme:e,$compact:!0,onClick:xt,children:(0,L.jsx)(Vu,{})}),Ie&&(0,L.jsx)(vh,{theme:e,$compact:!0,onClick:bt,children:(0,L.jsx)(Hu,{})})]}):je?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(vh,{theme:e,onClick:Ct,disabled:!y||C.has(y),children:`End Turn`}),(0,L.jsx)(Sh,{theme:e,$compactMode:N,children:Xt}),(0,L.jsx)(vh,{theme:e,$compact:Yt,onClick:z,disabled:C.size<R.length,children:Yt?(0,L.jsx)(Hu,{}):`Next`})]}):(0,L.jsxs)(L.Fragment,{children:[Ie&&(0,L.jsx)(vh,{theme:e,$compact:!0,onClick:xt,children:(0,L.jsx)(Vu,{})}),(0,L.jsx)(Sh,{theme:e,$compactMode:N,children:Xt}),Ie&&(0,L.jsx)(vh,{theme:e,$compact:!0,onClick:bt,children:(0,L.jsx)(Hu,{})})]}),N&&(0,L.jsx)(bh,{theme:e,onClick:()=>{ze()},title:`Switch to Fullsize list`,children:(0,L.jsx)(ed,{})})]}),!N&&(0,L.jsx)(xh,{theme:e,$hasReset:Ie,onClick:()=>{ze()},title:`Switch to Compact list`,children:(0,L.jsx)(td,{})}),Ie&&!N&&(0,L.jsx)(yh,{theme:e,onClick:()=>ve(!0),disabled:ye,title:`Reset round/turn state`,children:(0,L.jsx)(rd,{})})]}),we&&(0,L.jsx)(Dh,{ref:I,theme:e,$left:we.left,$y:we.y,$placement:we.placement,$arrowX:we.arrowX,role:`tooltip`,children:we.text}),(0,L.jsxs)(zp,{isOpen:!!T,title:At?`Unit: ${At.name}`:`Unit`,onClose:()=>{re||ie||se||(E(null),D(null))},closeOnOverlayClick:!re&&!ie&&!se,maxWidth:`520px`,children:[(0,L.jsx)(Qh,{theme:e,children:`Select a player to become the owner.`}),(0,L.jsxs)(Xh,{children:[Ue.map(t=>(0,L.jsxs)(Zh,{theme:e,$isCurrent:jt?.createdUserId===t.id,onClick:()=>Dt(t.id),disabled:re||ie||se,children:[t.name,jt?.createdUserId===t.id?` (current)`:``]},t.id)),(0,L.jsx)(Zh,{theme:e,onClick:()=>{kt()},disabled:re||ie||se,children:se?`Removing...`:`Remove Unit from List`})]}),(0,L.jsx)(eg,{theme:e}),(0,L.jsxs)(tg,{theme:e,children:[(0,L.jsxs)(`div`,{children:[(0,L.jsx)(ng,{theme:e,children:`Boss Mode`}),(0,L.jsx)(rg,{theme:e,children:`Shows a large encounter HP bar in scene (max 2 bosses).`})]}),(0,L.jsx)(ig,{children:(0,L.jsx)(ag,{type:`button`,theme:e,$active:Mt,disabled:re||ie||se,"aria-label":`Toggle boss mode`,"aria-pressed":Mt,onClick:()=>{Ot()}})})]}),ne&&(0,L.jsx)($h,{theme:e,children:ne})]}),(0,L.jsx)(Xm,{manager:He}),(0,L.jsxs)(zp,{isOpen:_e,title:`Reset Encounter`,onClose:()=>{ye||ve(!1)},closeOnOverlayClick:!ye,maxWidth:`460px`,children:[(0,L.jsx)(Qh,{theme:e,children:`Choose how you want to reset initiative state.`}),(0,L.jsxs)(Xh,{children:[(0,L.jsx)(Zh,{theme:e,onClick:()=>{wt(`round`)},disabled:ye,children:ye?`Resetting...`:`Reset Round`}),(0,L.jsx)(Zh,{theme:e,onClick:()=>{wt(`reset-initiative`)},disabled:ye,children:ye?`Resetting...`:`Reset Round & Initiative`}),(0,L.jsx)(Zh,{theme:e,onClick:()=>{wt(`clear-list`)},disabled:ye,children:ye?`Resetting...`:`Reset Round & Clear List`})]})]}),(0,L.jsx)(zp,{isOpen:!!A,title:Nt?`${Pt?.attr_name||`List`} for ${Nt.name}`:`List Reference`,onClose:()=>{me(null)},maxWidth:`620px`,children:(0,L.jsxs)(og,{children:[(0,L.jsx)(sg,{theme:e}),Ft.length===0?(0,L.jsx)(gg,{theme:e,children:`No entries.`}):(0,L.jsx)(cg,{children:Ft.map(t=>(0,L.jsxs)(lg,{theme:e,children:[(0,L.jsxs)(ug,{children:[It?(0,L.jsx)(dg,{type:`checkbox`,checked:!!t.inUse,readOnly:!0,tabIndex:-1}):null,(0,L.jsx)(fg,{theme:e,children:t.name||`(Unnamed)`})]}),t.description?(0,L.jsx)(pg,{theme:e,children:t.description}):null,(()=>{let n=Bt(t.description||``);return n.length===0?null:(0,L.jsx)(mg,{children:n.map((n,r)=>(0,L.jsx)(hg,{type:`button`,theme:e,onClick:()=>{let e=Nt?.createdUserId?s.find(e=>e.id===Nt.createdUserId):null;Be({notation:n,actionName:t.name||Pt?.attr_name||`List Roll`,tokenName:Nt?.name||`Unknown`,senderId:Nt?.createdUserId||d?.id||`unknown`,senderColor:e?.color||d?.color||`#ffffff`})},title:n,children:n},`${t.id}-inline-notation-${r}`))})})()]},t.id))})]})})]})};var bg=`${u.EXTENSIONID}-partyhud`,xg=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Sg=b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>y(e.theme.BACKGROUND,.35)};
`,Cg=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`,wg=b(Cg)`
  justify-content: center;
`,Tg=b.span`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: ${e=>y(e.theme.PRIMARY,.9)};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`,Eg=b.button`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>y(e.theme.OFFSET,.45)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,Dg=b.select`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>y(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px;
  min-width: 160px;
`,Og=b.p`
  margin: 0;
  font-size: 12px;
  color: ${e=>y(e.theme.PRIMARY,.8)};
`,kg=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${e=>e.$disabled?.55:1};
`,Ag=b.span`
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
`,jg=b.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>y(e.theme.BACKGROUND,.35)};
`,Mg=b.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
`,Ng=b.img`
  width: ${e=>e.$full?`100%`:`40px`};
  height: ${e=>e.$full?`100%`:`40px`};
  min-width: ${e=>e.$full?`100%`:`40px`};
  position: absolute;
  left: ${e=>e.$overlay?`20px`:`0`};
  top: ${e=>e.$overlay?`20px`:`0`};
  object-fit: cover;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>y(e.theme.BACKGROUND,.6)};
`,Pg=b.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,Fg=b.span`
  color: ${e=>e.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,Ig=b.input`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>y(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
`,Lg=b.p`
  color: ${e=>e.theme.PRIMARY};
  margin: 0;
`,Rg=e=>{switch(e){case`bottom`:return`left`;case`left`:return`top`;case`top`:return`right`;case`right`:default:return`bottom`}},zg=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,Bg=async()=>{await c.modal.open({id:bg,url:`/pages/forgeparty.html`,fullScreen:!0,hideBackdrop:!0,hidePaper:!0,disablePointerEvents:!0})};const Vg=()=>{let e=(0,M.useRef)(!1),{theme:t}=Ae(),{attributes:r}=wm(),i=P(e=>e.items),a=P(e=>e.sceneMetadata);P(e=>e.roomMetadata);let o=P(e=>e.playerData),s=a,u=String(o?.role||``).toUpperCase()===`GM`,d=o?.id,f=ee(m.PARTY_HUD_OPEN,d),p=ee(m.PARTY_HUD_ORIENTATION,d),h=(s[f]??s[m.PARTY_HUD_OPEN])===!0,g=s[p]??s[m.PARTY_HUD_ORIENTATION],_=zg(g)?g:`bottom`,v=s[m.PARTY_HUD_ATTR_ONE]||``,y=s[m.PARTY_HUD_ATTR_TWO]||``,b=s[m.PARTY_HUD_SHOW_HP_BARS]===!0,x=s[m.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!b,S=i.filter(e=>e.metadata[l.IN_PARTY]===!0),C=(0,M.useMemo)(()=>r.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[r]),w=async(e,t)=>{await c.scene.setMetadata({[e]:t})},T=async()=>{let t=!h;if(await w(f,t),!t){await c.modal.close(bg),e.current=!1;return}await Bg(),e.current=!0},E=async()=>{await w(p,Rg(_))},te=async(e,t)=>{let n=t.trim();await c.scene.items.updateItems([e],e=>{let t={...e[0].metadata||{}};n?t[l.PORTRAIT_URL]=n:delete t[l.PORTRAIT_URL],e[0].metadata=t})};return(0,M.useEffect)(()=>{let t=!0;return(async()=>{if(h&&!e.current){await Bg(),t&&(e.current=!0);return}!h&&e.current&&(await c.modal.close(bg),t&&(e.current=!1))})(),()=>{t=!1}},[h]),(0,L.jsx)(Bu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,L.jsxs)(hp,{theme:t,children:[(0,L.jsx)(gp,{theme:t,children:`Party`}),(0,L.jsxs)(Sg,{theme:t,children:[(0,L.jsxs)(Cg,{children:[(0,L.jsxs)(Eg,{theme:t,onClick:()=>void E(),children:[`Display: `,_.toUpperCase()]}),(0,L.jsx)(Eg,{theme:t,onClick:()=>void T(),children:h?`Close Party HUD`:`Open Party HUD`})]}),u&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(wg,{children:[(0,L.jsx)(Tg,{theme:t,children:`Show in HUD:`}),(0,L.jsxs)(kg,{$disabled:!u,children:[(0,L.jsx)(Ag,{theme:t,children:`Show HP Bars`}),(0,L.jsx)(X,{label:`Party HUD Show HP Bars`,isOn:b,onChange:e=>{u&&(w(m.PARTY_HUD_SHOW_HP_BARS,e),e&&w(m.PARTY_HUD_SHOW_HP_NUMBERS,!1))}})]}),(0,L.jsxs)(kg,{$disabled:!u,children:[(0,L.jsx)(Ag,{theme:t,children:`Show HP Numbers`}),(0,L.jsx)(X,{label:`Party HUD Show HP Numbers`,isOn:x,onChange:e=>{u&&(w(m.PARTY_HUD_SHOW_HP_NUMBERS,e),e&&w(m.PARTY_HUD_SHOW_HP_BARS,!1))}})]}),(0,L.jsxs)(Dg,{theme:t,disabled:!u,value:v,onChange:e=>{let t=e.target.value;w(m.PARTY_HUD_ATTR_ONE,t),t&&t===y&&w(m.PARTY_HUD_ATTR_TWO,``)},children:[(0,L.jsx)(`option`,{value:``,children:`Extra Slot 1 (None)`}),C.map(e=>(0,L.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,L.jsxs)(Dg,{theme:t,disabled:!u,value:y,onChange:e=>{let t=e.target.value;w(m.PARTY_HUD_ATTR_TWO,t),t&&t===v&&w(m.PARTY_HUD_ATTR_ONE,``)},children:[(0,L.jsx)(`option`,{value:``,children:`Extra Slot 2 (None)`}),C.map(e=>(0,L.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]})]}),(0,L.jsx)(Og,{theme:t,children:(0,L.jsxs)(L.Fragment,{children:[`Configure Party HUD and portraits.`,(0,L.jsx)(`br`,{}),`LIST attributes are excluded.`]})})]})]}),S.length===0?(0,L.jsx)(Lg,{theme:t,children:`No one is in the Party.  Add a unit using the ContextMenu on the token.`}):(0,L.jsx)(xg,{theme:t,children:S.map(e=>{let r=e.metadata?.[l.PORTRAIT_URL]||``,i=n(e)?e.image.url:void 0,a=e.metadata[l.UNIT_NAME]||e.name||`Unknown`,s=e.createdUserId===o?.id,c=u||s,d=i||`/logo.png`,f=!!r;return(0,L.jsxs)(jg,{theme:t,children:[(0,L.jsxs)(Mg,{children:[(0,L.jsx)(Ng,{theme:t,src:d,alt:a,$full:!f}),f&&(0,L.jsx)(Ng,{theme:t,src:f?r:``,alt:`${a} override`,$overlay:!0})]}),(0,L.jsxs)(Pg,{children:[(0,L.jsx)(Fg,{theme:t,title:a,children:a}),c&&(0,L.jsx)(Ig,{theme:t,defaultValue:r,placeholder:`Portrait URL override (optional)`,onBlur:t=>{te(e.id,t.target.value)}})]})]},e.id)})})]})})};var Hg=`${j}/hp-bar-effect`,Ug=`${j}/hp-bar-owner`,Wg=`${j}/hp-number-text`,Gg=`${j}/hp-number-owner`,Kg=e=>`HPB${e.slice(3)}`,qg=e=>`HPN${e.slice(3)}`,Jg=(e,t,n)=>Math.max(t,Math.min(n,e)),Yg=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},Xg=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||_e.CURRENT_HP,maxHpBid:n?.attr_bid||_e.MAX_HP}},Zg=(e,t)=>{let n=Xg(t),r=e[m.HP_CURRENT_BID],i=e[m.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},Qg=(e,t,n)=>{let r=e.metadata?.[`${j}/${t}`],i=e.metadata?.[`${j}/${n}`],a=Yg(r),o=Yg(i);return o===null||o<=0||a===null?null:Jg(a/o*100,0,100)},$g=(e,t,n)=>{let r=e.metadata?.[`${j}/${t}`],i=e.metadata?.[`${j}/${n}`],a=Yg(r),o=Yg(i);return a===null?null:{currentHp:Math.trunc(a),maxHp:o===null?null:Math.trunc(o)}},e_=e=>{let t=String(e||`bottom`).toLowerCase();return t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`},t_=e=>{switch(e_(e)){case`top`:return 0;case`bottom`:return 1;case`left`:return 2;case`right`:return 3;default:return 1}},n_=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o,width:r,height:i}},r_=(e,t,n)=>{let r=n_(e,t),i=r.minX+r.width*.5,a=r.minY+r.height*.5,o;switch(n){case`top`:o={x:i,y:r.minY+r.height*.18};break;case`bottom`:o={x:i,y:r.minY+r.height*.82};break;case`left`:o={x:r.minX+r.width*.18,y:a};break;case`right`:o={x:r.minX+r.width*.82,y:a};break}let s=r.width*.25,c=r.height*.18;return{x:o.x-s,y:o.y-c}};const i_=()=>{let e=P(e=>e.cacheReady),i=P(e=>e.sceneReady),o=P(e=>e.items),s=P(e=>e.localItems),u=P(e=>e.gridDpi),d=P(e=>e.roomMetadata),f=P(e=>e.sceneMetadata);return(0,M.useEffect)(()=>{if(!e||!i)return;let d=!1;return(async()=>{let e=f,i=e[m.SHOW_HP_BARS]??!1,p=e[m.SHOW_HP_NUMBERS]??!1,h=i,g=!i&&p,_=e_(e[m.HP_BAR_ORIENTATION]),v=t_(e[m.HP_BAR_ORIENTATION]),{currentHpBid:y,maxHpBid:b}=Zg(e,f[$.CURRENT_ATTR]||[]),x=s.filter(e=>a(e)&&e.metadata?.[Hg]===!0),S=s.filter(e=>r(e)&&e.metadata?.[Wg]===!0);if(!h&&x.length>0)try{await c.scene.local.deleteItems(x.map(e=>e.id))}catch(e){O.error(`Failed to remove HP bar effects`,e)}if(!g&&S.length>0)try{await c.scene.local.deleteItems(S.map(e=>e.id))}catch(e){O.error(`Failed to remove HP number texts`,e)}if(!h&&!g)return;let C=o.filter(e=>n(e)&&e.metadata?.[l.ON_LIST]===!0),w=new Map,T=new Map;for(let e of C){if(h){let t=Qg(e,y,b);t!==null&&w.set(Kg(e.id),{unitId:e.id,hpPercent:t})}if(g&&n(e)){let t=$g(e,y,b);if(t){let n=t.maxHp===null?`${t.currentHp}`:`${t.currentHp}/${t.maxHp}`;T.set(qg(e.id),{unitId:e.id,text:n,position:r_(e,u,_)})}}}if(h){let e=new Map(x.map(e=>[e.id,e])),n=Array.from(w.entries()).filter(([t])=>!e.has(t)),r=x.filter(e=>!w.has(e.id)),i=x.filter(e=>{let t=w.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`orientation`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return e.attachedTo!==t.unitId||!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-v)>.001});if(d)return;if(r.length>0)try{await c.scene.local.deleteItems(r.map(e=>e.id))}catch(e){O.error(`Failed to remove stale HP bar effects`,e)}if(n.length>0){let e=n.map(([e,n])=>t().id(e).name(`HP Bar Effect`).effectType(`ATTACHMENT`).attachedTo(n.unitId).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).uniforms([{name:`hpPercent`,value:n.hpPercent},{name:`orientation`,value:v}]).sksl(`
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
`).metadata({[Hg]:!0,[Ug]:n.unitId}).build());try{await c.scene.local.addItems(e)}catch(e){O.error(`Failed to add HP bar effects`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await c.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=w.get(e.id);if(!t)return;e.attachedTo=t.unitId;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:v}],e.metadata={...e.metadata,[Hg]:!0,[Ug]:t.unitId}})})}catch(e){O.error(`Failed to update HP bar effects`,e)}}}if(g){let e=new Map(S.map(e=>[e.id,e])),t=Array.from(T.entries()).filter(([t])=>!e.has(t)),n=S.filter(e=>!T.has(e.id)),r=S.filter(e=>{let t=T.get(e.id);if(!t)return!1;let n=e.text?.plainText,r=Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01;return e.attachedTo!==t.unitId||n!==t.text||r});if(d)return;if(n.length>0)try{await c.scene.local.deleteItems(n.map(e=>e.id))}catch(e){O.error(`Failed to remove stale HP number texts`,e)}if(t.length>0){let e=t.map(([e,t])=>{let n=C.find(e=>e.id===t.unitId);return te().id(e).name(`HP Number Text`).plainText(t.text).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(28).fontFamily(`Segoe UI`).textAlign(`CENTER`).position(t.position).metadata({[Wg]:!0,[Gg]:t.unitId}).attachedTo(t.unitId).visible(n?.visible??!0).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build()});try{await c.scene.local.addItems(e)}catch(e){O.error(`Failed to add HP number texts`,e)}}if(r.length>0){let e=r.map(e=>e.id);try{await c.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=T.get(e.id);if(!t)return;e.attachedTo=t.unitId,e.position=t.position;let n=e;n.text&&(n.text.plainText=t.text),e.metadata={...e.metadata,[Wg]:!0,[Gg]:t.unitId}})})}catch(e){O.error(`Failed to update HP number texts`,e)}}}})(),()=>{d=!0}},[e,i,o,s,u,d,f]),null};var a_=`${j}/death-effect-token`,o_=`${j}/death-effect-owner`,s_=e=>`DTH${e.slice(3)}`,c_=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},l_=e=>({currentHpBid:e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`})?.attr_bid||_e.CURRENT_HP}),u_=(e,t)=>{let n=l_(t),r=e[m.HP_CURRENT_BID],i=new Set(t.map(e=>e.attr_bid));return r&&i.has(r)?r:n.currentHpBid},d_=(e,t)=>{let n=e.metadata?.[`${j}/${t}`];return c_(n)};const f_=()=>{let e=P(e=>e.cacheReady),r=P(e=>e.sceneReady),i=P(e=>e.items),o=P(e=>e.localItems),s=P(e=>e.roomMetadata),u=P(e=>e.sceneMetadata);return(0,M.useEffect)(()=>{if(!e||!r)return;let s=!1;return(async()=>{let e=u,r=e[m.SHOW_DEATH_EFFECT]??!1,d=u_(e,u[$.CURRENT_ATTR]||[]),f=o.filter(e=>a(e)&&e.metadata?.[a_]===!0);if(!r){if(f.length>0)try{await c.scene.local.deleteItems(f.map(e=>e.id))}catch(e){O.error(`Failed to remove death token effects`,e)}return}let p=i.filter(e=>n(e)&&e.metadata?.[l.ON_LIST]===!0),h=new Map;p.forEach(e=>{d_(e,d)===0&&h.set(s_(e.id),e.id)});let g=new Map(f.map(e=>[e.id,e])),_=Array.from(h.entries()).filter(([e])=>!g.has(e)),v=f.filter(e=>!h.has(e.id)),y=f.filter(e=>{let t=h.get(e.id);if(!t)return!1;let n=e;return e.attachedTo!==t||n.metadata?.[o_]!==t});if(!s){if(v.length>0)try{await c.scene.local.deleteItems(v.map(e=>e.id))}catch(e){O.error(`Failed to remove stale death token effects`,e)}if(_.length>0){let e=_.map(([e,n])=>t().id(e).name(`Death Token Effect`).effectType(`ATTACHMENT`).attachedTo(n).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(`
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
`).metadata({[a_]:!0,[o_]:n}).build());try{await c.scene.local.addItems(e)}catch(e){O.error(`Failed to add death token effects`,e)}}if(y.length>0)try{await c.scene.local.updateItems(y.map(e=>e.id),e=>{e.forEach(e=>{let t=h.get(e.id);t&&(e.attachedTo=t,e.metadata={...e.metadata,[a_]:!0,[o_]:t})})})}catch(e){O.error(`Failed to update death token effects`,e)}}})(),()=>{s=!0}},[e,r,i,o,s,u]),null};var p_=`${j}/buff-effect-token`,m_=`${j}/buff-effect-owner`,h_=`${j}/debuff-effect-token`,g_=`${j}/debuff-effect-owner`,__=`${j}/effect-preset`,v_=e=>`EFB${e.slice(3)}`,y_=e=>`EFD${e.slice(3)}`,b_=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const x_=()=>{let e=P(e=>e.cacheReady),r=P(e=>e.sceneReady),i=P(e=>e.items),o=P(e=>e.localItems),s=P(e=>e.roomMetadata),u=P(e=>e.sceneMetadata);return(0,M.useEffect)(()=>{if(!e||!r)return;let s=!1;return(async()=>{let e=u,r=e[m.BUFF_VISUAL_PRESET],d=e[m.DEBUFF_VISUAL_PRESET],f=Wp(r)?r:Bp,p=Gp(d)?d:Vp,h=Kp(f),g=qp(p),_=i.filter(e=>n(e)&&e.metadata?.[l.ON_LIST]===!0),v=new Set(_.map(e=>e.id)),y=new Map,b=(e,t)=>{let n=y.get(e)||{hasBuff:!1,hasDebuff:!1};t===`buff`?n.hasBuff=!0:n.hasDebuff=!0,y.set(e,n)};i.forEach(e=>{if(e.metadata?.[l.ON_LIST]!==!0)return;let t=b_(e.metadata?.[Dm]);t.length!==0&&t.forEach(t=>{t.effectType!==`neutral`&&(t.targets.length>0?t.targets:[e.id]).forEach(e=>{v.has(e)&&(t.effectType===`buff`||t.effectType===`debuff`)&&b(e,t.effectType)})})});let x=new Map,S=new Map;_.forEach(e=>{let t=y.get(e.id);t?.hasBuff&&x.set(v_(e.id),e.id),t?.hasDebuff&&S.set(y_(e.id),e.id)});let C=o.filter(e=>a(e)&&e.metadata?.[p_]===!0),w=o.filter(e=>a(e)&&e.metadata?.[h_]===!0),T=async e=>{let{existing:n,desiredByOverlayId:r,preset:i,shader:a,name:o,flagKey:l,ownerKey:u}=e,d=new Map(n.map(e=>[e.id,e])),f=Array.from(r.entries()).filter(([e])=>!d.has(e)),p=n.filter(e=>!r.has(e.id)),m=n.filter(e=>{let t=r.get(e.id);if(!t)return!1;let n=e.metadata?.[__];return e.attachedTo!==t||n!==i});if(!s){if(p.length>0)try{await c.scene.local.deleteItems(p.map(e=>e.id))}catch(e){O.error(`Failed to remove stale ${o.toLowerCase()} overlays`,e)}if(f.length>0){let e=f.map(([e,n])=>t().id(e).name(o).effectType(`ATTACHMENT`).attachedTo(n).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(a).metadata({[l]:!0,[u]:n,[__]:i}).build());try{await c.scene.local.addItems(e)}catch(e){O.error(`Failed to add ${o.toLowerCase()} overlays`,e)}}if(m.length>0)try{await c.scene.local.updateItems(m.map(e=>e.id),e=>{e.forEach(e=>{let t=r.get(e.id);if(!t)return;e.attachedTo=t;let n=e;n.sksl=a,e.metadata={...e.metadata,[l]:!0,[u]:t,[__]:i}})})}catch(e){O.error(`Failed to update ${o.toLowerCase()} overlays`,e)}}};await T({existing:C,desiredByOverlayId:x,preset:f,shader:h,name:`Buff Token Effect`,flagKey:p_,ownerKey:m_}),await T({existing:w,desiredByOverlayId:S,preset:p,shader:g,name:`Debuff Token Effect`,flagKey:h_,ownerKey:g_})})(),()=>{s=!0}},[e,r,i,o,s,u]),null};var S_=`${j}/boss-hp-effect`,C_=`${j}/boss-hp-owner`,w_=`${j}/boss-hp-slot`,T_=e=>`BOSSHP${e}`,E_=(e,t,n)=>Math.max(t,Math.min(n,e)),D_=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},O_=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||_e.CURRENT_HP,maxHpBid:n?.attr_bid||_e.MAX_HP}},k_=(e,t)=>{let n=O_(t),r=e[m.HP_CURRENT_BID],i=e[m.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},A_=(e,t,n)=>{let r=e.metadata?.[`${j}/${t}`],i=e.metadata?.[`${j}/${n}`],a=D_(r),o=D_(i);return o===null||o<=0||a===null?null:E_(a/o*100,0,100)};const j_=()=>{let e=P(e=>e.cacheReady),r=P(e=>e.sceneReady),i=P(e=>e.items),o=P(e=>e.localItems),s=P(e=>e.roomMetadata),u=P(e=>e.sceneMetadata);return(0,M.useEffect)(()=>{if(!e||!r)return;let s=!1;return(async()=>{let{currentHpBid:e,maxHpBid:r}=k_(u,u[$.CURRENT_ATTR]||[]),d=o.filter(e=>a(e)&&e.metadata?.[S_]===!0),f=i.filter(e=>n(e)&&e.metadata?.[l.ON_LIST]===!0&&e.metadata?.[l.BOSS_MODE]===!0).sort((e,t)=>{let n=Number(e.metadata?.[l.INITIATIVE]??0);return Number(t.metadata?.[l.INITIATIVE]??0)-n}).slice(0,2).map((t,n)=>{let i=A_(t,e,r);return i===null?null:{id:T_(n),unitId:t.id,slot:n,hpPercent:i}}).filter(e=>e!==null),p=new Map(f.map(e=>[e.id,e])),m=new Map(d.map(e=>[e.id,e])),h=d.filter(e=>!p.has(e.id)),g=f.filter(e=>!m.has(e.id)),_=d.filter(e=>{let t=p.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`slot`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-t.slot)>.001||e.metadata?.[C_]!==t.unitId});if(!s){if(h.length>0)try{await c.scene.local.deleteItems(h.map(e=>e.id))}catch(e){O.error(`Failed to remove stale boss HP viewport effects`,e)}if(g.length>0){let e=g.map(e=>t().id(e.id).name(`Boss HP Bar`).effectType(`VIEWPORT`).locked(!0).disableHit(!0).uniforms([{name:`hpPercent`,value:e.hpPercent},{name:`slot`,value:e.slot}]).sksl(`
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
`).metadata({[S_]:!0,[C_]:e.unitId,[w_]:e.slot}).build());try{await c.scene.local.addItems(e)}catch(e){O.error(`Failed to add boss HP viewport effects`,e)}}if(_.length>0)try{await c.scene.local.updateItems(_.map(e=>e.id),e=>{e.forEach(e=>{let t=p.get(e.id);if(!t)return;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`slot`,value:t.slot}],e.metadata={...e.metadata,[S_]:!0,[C_]:t.unitId,[w_]:t.slot}})})}catch(e){O.error(`Failed to update boss HP viewport effects`,e)}}})(),()=>{s=!0}},[e,r,i,o,s,u]),null};var M_=`${j}/current-turn-effect`;const N_=()=>{let e=P(e=>e.cacheReady),n=P(e=>e.sceneReady),r=P(e=>e.items),i=P(e=>e.roomMetadata),a=P(e=>e.sceneMetadata);return(0,M.useEffect)(()=>{if(!e||!n)return;let i=!1;return(async()=>{let e=a[m.SHOW_TURN_EFFECT]===!0,n=a[m.CURRENT_TURN];if(!e||!n){try{await c.scene.local.deleteItems([M_])}catch{}return}if(!r.find(e=>e.id===n)){try{await c.scene.local.deleteItems([M_])}catch{}return}if(!i){try{let e=!1;if(await c.scene.local.updateItems([M_],t=>{let r=t[0];r&&(r.attachedTo=n,e=!0)}),e)return}catch{}if(!i)try{let e=t().id(M_).name(`Current Turn Effect`).effectType(`ATTACHMENT`).attachedTo(n).locked(!0).disableHit(!0).sksl(`
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

`).build();await c.scene.local.addItems([e])}catch(e){O.error(`Failed to sync current turn effect`,e)}}})(),()=>{i=!0}},[e,n,r,i,a]),null},P_=()=>{let[e,t]=(0,M.useState)(!1),{updateThemeFromSystem:n}=Ae(),r=P(e=>e.sceneMetadata),i=P(e=>e.cacheReady);return(0,M.useEffect)(()=>{if(!i)return;let e=r[$.CURRENT_THEME];if(!e?.primary||!e?.offset||!e?.background||!e?.border){n(T.theme_primary,T.theme_offset,T.theme_background,T.theme_border,T.background_url);return}n(e.primary,e.offset,e.background,e.border,e.background_url)},[i,r,n]),(0,M.useEffect)(()=>{if(e)return;let a=!0,o=async()=>{if(i)try{O.log(`Starting app initialization...`),await s(),a&&(t(!0),O.log(`App initialization complete`))}catch(e){O.error(`Error during app initialization:`,e),a&&t(!0)}},s=async()=>{try{let e=r[$.CURRENT_THEME],t=r[$.CURRENT_CARD],i=r[$.CURRENT_LIST],a=r[$.CURRENT_ATTR];if(!e||!Array.isArray(t)||!Array.isArray(i)||!Array.isArray(a)){O.log(`System data not found, initializing with defaults`),await l();return}O.log(`Loading existing system theme:`,e),n(e.primary,e.offset,e.background,e.border,e.background_url)}catch(e){O.error(`Error loading system data:`,e),await l()}},l=async()=>{let e={primary:T.theme_primary,offset:T.theme_offset,background:T.theme_background,border:T.theme_border,background_url:T.background_url};await c.scene.setMetadata({[$.CURRENT_THEME]:e,[$.CURRENT_CARD]:T.card_layout,[$.CURRENT_LIST]:T.list_layout,[$.CURRENT_ATTR]:T.attributes,[$.SYSTEM_NAME]:T.name,[$.IMPORT_DATE]:null}),O.log(`Default system initialized`),n(e.primary,e.offset,e.background,e.border,e.background_url)};return o(),()=>{a=!1}},[i,e]),{isInitialized:e}};var F_=C`
  ${{"*, ::before, ::after":{boxSizing:`border-box`,borderWidth:`0`,borderStyle:`solid`,borderColor:`#e2e8f0`,"--tw-border-spacing-x":`0`,"--tw-border-spacing-y":`0`,"--tw-translate-x":`0`,"--tw-translate-y":`0`,"--tw-rotate":`0`,"--tw-skew-x":`0`,"--tw-skew-y":`0`,"--tw-scale-x":`1`,"--tw-scale-y":`1`,"--tw-pan-x":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pan-y":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pinch-zoom":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-scroll-snap-strictness":`proximity`,"--tw-gradient-from-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-via-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-to-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ordinal":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-slashed-zero":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-figure":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-spacing":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-fraction":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-shadow":`0 0 #0000`,"--tw-ring-shadow":`0 0 #0000`,"--tw-shadow":`0 0 #0000`,"--tw-shadow-colored":`0 0 #0000`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`0px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`rgb(66 153 225 / 0.5)`,"--tw-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-drop-shadow":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-opacity":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-size":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-layout":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-paint":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-style":`var(--tw-empty,/*!*/ /*!*/)`},"::before, ::after":{"--tw-content":`''`},"html, :host":{lineHeight:`1.5`,WebkitTextSizeAdjust:`100%`,MozTabSize:`4`,tabSize:`4`,fontFamily:`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,fontFeatureSettings:` normal`,fontVariationSettings:` normal`,WebkitTapHighlightColor:`transparent`},body:{margin:`0`,lineHeight:`inherit`},hr:{height:`0`,color:`inherit`,borderTopWidth:`1px`},"abbr:where([title])":{textDecoration:`underline dotted`},"h1, h2, h3, h4, h5, h6":{fontSize:`inherit`,fontWeight:`inherit`},a:{color:`inherit`,textDecoration:`inherit`},"b, strong":{fontWeight:`bolder`},"code, kbd, samp, pre":{fontFamily:`Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,fontFeatureSettings:` normal`,fontVariationSettings:` normal`,fontSize:`1em`},small:{fontSize:`80%`},"sub, sup":{fontSize:`75%`,lineHeight:`0`,position:`relative`,verticalAlign:`baseline`},sub:{bottom:`-0.25em`},sup:{top:`-0.5em`},table:{textIndent:`0`,borderColor:`inherit`,borderCollapse:`collapse`},"button, input, optgroup, select, textarea":{fontFamily:`inherit`,fontFeatureSettings:`inherit`,fontVariationSettings:`inherit`,fontSize:`100%`,fontWeight:`inherit`,lineHeight:`inherit`,letterSpacing:`inherit`,color:`inherit`,margin:`0`,padding:`0`},"button, select":{textTransform:`none`},"button, input:where([type='button']), input:where([type='reset']), input:where([type='submit'])":{WebkitAppearance:`button`,backgroundColor:`transparent`,backgroundImage:`none`},":-moz-focusring":{outline:`auto`},":-moz-ui-invalid":{boxShadow:`none`},progress:{verticalAlign:`baseline`},"::-webkit-inner-spin-button, ::-webkit-outer-spin-button":{height:`auto`},"[type='search']":{WebkitAppearance:`textfield`,outlineOffset:`-2px`},"::-webkit-search-decoration":{WebkitAppearance:`none`},"::-webkit-file-upload-button":{WebkitAppearance:`button`,font:`inherit`},summary:{display:`list-item`},"blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre":{margin:`0`},fieldset:{margin:`0`,padding:`0`},legend:{padding:`0`},"ol, ul, menu":{listStyle:`none`,margin:`0`,padding:`0`},dialog:{padding:`0`},textarea:{resize:`vertical`},"input::placeholder, textarea::placeholder":{opacity:`1`,color:`#cbd5e0`},'button, [role="button"]':{cursor:`pointer`},":disabled":{cursor:`default`},"img, svg, video, canvas, audio, iframe, embed, object":{display:`block`,verticalAlign:`middle`},"img, video":{maxWidth:`100%`,height:`auto`},'[hidden]:where(:not([hidden="until-found"]))':{display:`none`},"::backdrop":{"--tw-border-spacing-x":`0`,"--tw-border-spacing-y":`0`,"--tw-translate-x":`0`,"--tw-translate-y":`0`,"--tw-rotate":`0`,"--tw-skew-x":`0`,"--tw-skew-y":`0`,"--tw-scale-x":`1`,"--tw-scale-y":`1`,"--tw-pan-x":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pan-y":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pinch-zoom":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-scroll-snap-strictness":`proximity`,"--tw-gradient-from-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-via-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-to-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ordinal":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-slashed-zero":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-figure":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-spacing":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-fraction":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-shadow":`0 0 #0000`,"--tw-ring-shadow":`0 0 #0000`,"--tw-shadow":`0 0 #0000`,"--tw-shadow-colored":`0 0 #0000`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`0px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`rgb(66 153 225 / 0.5)`,"--tw-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-drop-shadow":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-opacity":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-size":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-layout":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-paint":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-style":`var(--tw-empty,/*!*/ /*!*/)`},"input:where([type='text']),input:where(:not([type])),input:where([type='email']),input:where([type='url']),input:where([type='password']),input:where([type='number']),input:where([type='date']),input:where([type='datetime-local']),input:where([type='month']),input:where([type='search']),input:where([type='tel']),input:where([type='time']),input:where([type='week']),select:where([multiple]),textarea,select":{appearance:`none`,backgroundColor:`#fff`,borderColor:`#a0aec0`,borderWidth:`1px`,borderRadius:`0px`,paddingTop:`0.5rem`,paddingRight:`0.75rem`,paddingBottom:`0.5rem`,paddingLeft:`0.75rem`,fontSize:`1rem`,lineHeight:`1.5rem`,"--tw-shadow":`0 0 #0000`},"input:where([type='text']):focus, input:where(:not([type])):focus, input:where([type='email']):focus, input:where([type='url']):focus, input:where([type='password']):focus, input:where([type='number']):focus, input:where([type='date']):focus, input:where([type='datetime-local']):focus, input:where([type='month']):focus, input:where([type='search']):focus, input:where([type='tel']):focus, input:where([type='time']):focus, input:where([type='week']):focus, select:where([multiple]):focus, textarea:focus, select:focus":{outline:`2px solid transparent`,outlineOffset:`2px`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`0px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`#3182ce`,"--tw-ring-offset-shadow":`var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,"--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:`var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,borderColor:`#3182ce`},"input::placeholder,textarea::placeholder":{color:`#a0aec0`,opacity:`1`},"::-webkit-datetime-edit-fields-wrapper":{padding:`0`},"::-webkit-date-and-time-value":{minHeight:`1.5em`,textAlign:`inherit`},"::-webkit-datetime-edit":{display:`inline-flex`},"::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field":{paddingTop:`0`,paddingBottom:`0`},select:{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a0aec0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,backgroundPosition:`right 0.5rem center`,backgroundRepeat:`no-repeat`,backgroundSize:`1.5em 1.5em`,paddingRight:`2.5rem`,printColorAdjust:`exact`},'select:where([multiple]),select:where([size]:not([size="1"]))':{backgroundImage:`initial`,backgroundPosition:`initial`,backgroundRepeat:`unset`,backgroundSize:`initial`,paddingRight:`0.75rem`,printColorAdjust:`unset`},"input:where([type='checkbox']),input:where([type='radio'])":{appearance:`none`,padding:`0`,printColorAdjust:`exact`,display:`inline-block`,verticalAlign:`middle`,backgroundOrigin:`border-box`,userSelect:`none`,flexShrink:`0`,height:`1rem`,width:`1rem`,color:`#3182ce`,backgroundColor:`#fff`,borderColor:`#a0aec0`,borderWidth:`1px`,"--tw-shadow":`0 0 #0000`},"input:where([type='checkbox'])":{borderRadius:`0px`},"input:where([type='radio'])":{borderRadius:`100%`},"input:where([type='checkbox']):focus,input:where([type='radio']):focus":{outline:`2px solid transparent`,outlineOffset:`2px`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`2px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`#3182ce`,"--tw-ring-offset-shadow":`var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,"--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:`var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`},"input:where([type='checkbox']):checked,input:where([type='radio']):checked":{borderColor:`transparent`,backgroundColor:`currentColor`,backgroundSize:`100% 100%`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`},"input:where([type='checkbox']):checked":{backgroundImage:`url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`},"@media (forced-colors: active)":{"input:where([type='checkbox']):checked":{appearance:`auto`},"input:where([type='radio']):checked":{appearance:`auto`},"input:where([type='checkbox']):indeterminate":{appearance:`auto`}},"input:where([type='radio']):checked":{backgroundImage:`url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`},"input:where([type='checkbox']):checked:hover,input:where([type='checkbox']):checked:focus,input:where([type='radio']):checked:hover,input:where([type='radio']):checked:focus":{borderColor:`transparent`,backgroundColor:`currentColor`},"input:where([type='checkbox']):indeterminate":{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")`,borderColor:`transparent`,backgroundColor:`currentColor`,backgroundSize:`100% 100%`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`},"input:where([type='checkbox']):indeterminate:hover,input:where([type='checkbox']):indeterminate:focus":{borderColor:`transparent`,backgroundColor:`currentColor`},"input:where([type='file'])":{background:`unset`,borderColor:`inherit`,borderWidth:`0`,borderRadius:`0`,padding:`0`,fontSize:`unset`,lineHeight:`inherit`},"input:where([type='file']):focus":{outline:`1px auto -webkit-focus-ring-color`}}}
  
  :root {
    --forge-primary: ${e=>e.theme.PRIMARY};
    --forge-offset: ${e=>e.theme.OFFSET};
    --forge-background: ${e=>e.theme.BACKGROUND};
    --forge-border: ${e=>e.theme.BORDER};
  }

  /* Base styling for the entire app */
  body {
    background-color: ${e=>y(e.theme.BACKGROUND,.5)};
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
    background: ${e=>y(e.theme.BACKGROUND,.3)};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>y(e.theme.OFFSET,.5)};
    border-radius: 5px;
    
    &:hover {
      background: ${e=>y(e.theme.OFFSET,.7)};
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
`,I_=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e2232;
  color: #ffffff;
`,L_=b.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: #9d99ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,R_=b.p`
  margin-top: 20px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;function z_(){let{sceneReady:e,cacheReady:t,playerData:n}=P(),{isInitialized:r}=P_(),{theme:i}=Ae(),[a,o]=(0,M.useState)(`ForgeMain`),[s,l]=(0,M.useState)(!1),u=String(n?.role||``).toUpperCase()===`GM`;return(0,M.useEffect)(()=>{a!==`ForgeMain`&&c.action.setWidth(350)},[a]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(F_,{theme:i}),!e||!t||!r?(0,L.jsxs)(I_,{children:[(0,L.jsx)(L_,{}),(0,L.jsx)(R_,{children:e?t?r?`Loading...`:`Initializing system...`:`Loading cache...`:`Connecting to scene...`})]}):(0,L.jsxs)(np,{children:[(0,L.jsx)(i_,{}),(0,L.jsx)(f_,{}),(0,L.jsx)(x_,{}),(0,L.jsx)(j_,{}),(0,L.jsx)(N_,{}),(0,L.jsx)(rp,{theme:i,$backgroundUrl:i.BACKGROUND_URL,children:(0,L.jsx)(Yc,{mode:`wait`,children:(()=>{switch(a){case`ForgeMain`:return(0,L.jsx)(yg,{},`main`);case`Settings`:return u?(0,L.jsx)(Dp,{},`settings`):(0,L.jsx)(yg,{},`main`);case`Party`:return(0,L.jsx)(Vg,{},`party`);case`System`:return u?(0,L.jsx)(Cm,{},`system`):(0,L.jsx)(yg,{},`main`);case`ChatLog`:return(0,L.jsx)(Np,{},`chatlog`)}})()})}),(0,L.jsx)(mp,{isOpen:s,currentPage:a,onToggle:()=>l(!s),onNavigate:e=>{if(!u&&(e===`Settings`||e===`System`)){o(`ForgeMain`),l(!1);return}o(e),l(!1)}})]})]})}var B_=z_,V_=class{static{this.ALPHANUMERICTEXTMATCH=/\s[\da-zA-Z]$/}};function H_(e){for(let t of W_)if(e.includes(t)){let n=W_[Math.floor(Math.random()*W_.length)];return e.replace(t,n)}return U_(e)}function U_(e){return`${W_[Math.floor(Math.random()*W_.length)]} ${e}`}const W_=`Grizzled.Wily.Stoic.Mellow.Pensive.Shrewd.Cautious.Hardy.Nimble.Tenacious.Gritty.Tolerant.Hardy.Adroit.Resilient.Slight.Stout.Durable.Subtle.Sober.Clever.Brave.Calm.Wise.Cunning.Alert.Swift.Agile.Loyal.Sturdy.Stable.Sneaky.Clever.Resourceful.Shady.Stalwart.Vigilant.Staunch.Fierce.Vigorous.Robust.Fearless.Dauntless.Resolute.Sagacious.Prudent.Judicious.Astute.Savvy.Sharp.Quick.Witty.Smart.Snippy.Crafty.Deft.Sly.Artful.Clever.Sneering.Tough.Rugged.Solid.Strong.Sturdy.Tough.Gritty.Rough.Hardened.Burly.Muscular.Brawny.Rowdy.Forceful.Snorting.Potent.Martial.Speckled.Mottled.Disheveled`.split(`.`);var G_=`com.battle-system.forge/view-unit`,K_=e=>e.trim().toLowerCase(),q_=e=>{let t=e.trim();return t?V_.ALPHANUMERICTEXTMATCH.test(t)?t.slice(0,-2):t:e},J_=async e=>{let t=await c.viewport.getHeight(),n=t>800?700:t-100;await c.popover.open({id:u.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(e)}`,height:n,width:350,anchorReference:`POSITION`,anchorPosition:{left:await c.viewport.getWidth()/2,top:await c.viewport.getHeight()/2},anchorOrigin:{horizontal:`CENTER`,vertical:`CENTER`},transformOrigin:{horizontal:`CENTER`,vertical:`CENTER`},hidePaper:!0,disableClickAway:!0})},Y_=async e=>{let t=Array.from(new Set(e.map(e=>e.trim()).filter(e=>e.length>0))),n=new Map;if(t.length===0)return n;try{let{data:e,error:r}=await le.from(`bs_forge_creatures`).select(`name,metadata,is_active`).eq(`is_active`,!0).in(`name`,t).limit(250);if(!r&&Array.isArray(e)){let t=e;for(let e of t){let t=K_(String(e.name||``));if(!t||n.has(t))continue;let r=e.metadata&&typeof e.metadata==`object`&&!Array.isArray(e.metadata)?ue(e.metadata):null;r&&n.set(t,r)}}}catch(e){O.log(`Supabase collection lookup failed, falling back to local collection`,e)}let r=await A(),i=new Map;for(let e of r){let t=K_(e.name);if(!t)continue;let n=i.get(t);n?n.push(e):i.set(t,[e])}for(let e of t){let t=K_(e);if(n.has(t))continue;let r=i.get(t)?.[0];!r||!r.metadata||n.set(t,ue(r.metadata))}return n};function X_({children:e}){P(e=>e.roomMetadata);let t=P(e=>e.sceneMetadata),n=P(e=>e.items),r=P(e=>e.playerData),i=t,a=i[m.HP_CURRENT_BID]!==void 0&&i[m.HP_MAX_BID]!==void 0,o=i[m.SHOW_MODIFY_UNIT_CONTEXT_MENU]===void 0?!0:i[m.SHOW_MODIFY_UNIT_CONTEXT_MENU]===!0;return(0,M.useEffect)(()=>{c.onReady(()=>{c.contextMenu.create({id:l.ON_LIST,icons:[{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,l.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,l.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,l.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,l.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}}],async onClick(e){if(O.info(`Add to Combat Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[l.ON_LIST]===!0))await c.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[l.ON_LIST],delete t.metadata[l.INITIATIVE]});else{let r=[],a=[],o=new Set(e.items.map(e=>e.id)),s=i[m.USE_DESCRIPTIVE_DUPLICATES]!==void 0,u=new Set(n.filter(e=>{if(o.has(e.id))return!1;let t=e.metadata[l.UNIT_NAME];return typeof t==`string`&&t.trim().length>0}).map(e=>K_(String(e.metadata[l.UNIT_NAME]))));for(let t of e.items){if(t.metadata[l.FABRICATED]===!0)continue;let e=q_(t.text?.plainText||t.name);r.push(e)}await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let d=await Y_(r);await c.action.setBadgeText(void 0);for(let t of e.items){let e={};if(t.metadata[l.FABRICATED]!==!0){let n=q_(t.text?.plainText||t.name),r=d.get(K_(n));if(r&&Object.assign(e,r),(typeof e[l.UNIT_NAME]!=`string`||!String(e[l.UNIT_NAME]).trim())&&(e[l.UNIT_NAME]=t.name),e[l.FABRICATED]=!0,s){let r=String(e[l.UNIT_NAME]||n||t.name).trim(),i=K_(r);if(i){let e=0;for(;u.has(i)&&e<20;)r=H_(r),i=K_(r),e+=1;i&&u.add(i)}e[l.UNIT_NAME]=r}}e[l.ON_LIST]=!0,e[l.INITIATIVE]=0,a.push({id:t.id,metadata:e})}await c.scene.items.updateItems(e.items,e=>{for(let n of e){let e=a.find(e=>e.id===n.id);if(e&&(Object.assign(n.metadata,e.metadata),t[m.SHOW_NAMES]===!0)){let t=n;t.text&&(t.text.plainText=String(e.metadata[l.UNIT_NAME]||``))}}})}}}),c.contextMenu.create({id:l.IN_PARTY,icons:[{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,l.IN_PARTY],operator:`!=`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,l.IN_PARTY],operator:`!=`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,l.IN_PARTY],operator:`==`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,l.IN_PARTY],operator:`==`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){O.info(`Add to Party Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[l.IN_PARTY]===!0)?await c.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[l.IN_PARTY]}):await c.scene.items.updateItems(e.items,e=>{for(let t of e)t.metadata[l.IN_PARTY]=!0})}}),c.contextMenu.create({id:G_,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){O.info(`View Unit Clicked: ${e.items[0].name}`);let r=e.items[0];if(!r)return;let a={};if(r.metadata[l.FABRICATED]!==!0){let e=q_(r.text?.plainText||r.name);await c.action.setBadgeText(`Retrieving Data.. ⏱️`);let o=await Y_([e]);await c.action.setBadgeText(void 0);let s=o.get(K_(e));s&&Object.assign(a,s),(typeof a[l.UNIT_NAME]!=`string`||!String(a[l.UNIT_NAME]).trim())&&(a[l.UNIT_NAME]=r.name),a[l.FABRICATED]=!0,i[m.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[l.UNIT_NAME]!=null&&e.id!==r.id).map(e=>e.metadata[l.UNIT_NAME]).includes(e)&&(a[l.UNIT_NAME]=H_(e)),await c.scene.items.updateItems([r],e=>{let n=e[0];if(Object.assign(n.metadata,a),t[m.SHOW_NAMES]===!0){let e=n;e.text&&(e.text.plainText=String(a[l.UNIT_NAME]||``))}})}await J_(r.id)}}),a&&o?c.contextMenu.create({id:l.MODIFY_UNIT,icons:[{icon:`/icon.svg`,label:`Adjust HP`,filter:{some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Adjust HP`,filter:{every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e,t){O.info(`Adjust HP Clicked: ${e.items[0].name}`),await c.popover.open({id:h.CONTEXT_MENU,url:`/pages/forgecontext.html`,height:50,width:180,anchorElementId:t,hidePaper:!0})},embed:{url:`/pages/forgecontext.html?contextmenu=true`,height:70}}):c.contextMenu.remove(l.MODIFY_UNIT).catch(()=>{})})},[i,a,o]),(0,L.jsx)(L.Fragment,{children:e})}Ce.createRoot(document.getElementById(`root`)).render((0,L.jsx)(M.StrictMode,{children:(0,L.jsx)(ne,{children:(0,L.jsx)(De,{children:(0,L.jsx)(X_,{children:(0,L.jsx)(ke,{children:(0,L.jsx)(B_,{})})})})})}));