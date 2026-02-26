import{A as e,C as t,D as n,E as r,M as i,N as a,O as o,S as s,T as c,_ as l,b as u,c as d,d as f,f as p,g as m,h,k as g,l as _,m as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T,v as ee,w as E,x as D,y as te}from"./defaultgamesystem-BND08bdE.js";import{_ as O,a as ne,d as k,f as re,g as ie,h as ae,l as oe,m as se,n as ce,o as le,p as ue,r as de,s as fe,t as pe,u as me,v as he,y as ge}from"./FormulaParser-D7wgfFuL.js";import{n as _e,t as A}from"./MockData-BtYwoHfq.js";var ve=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},ye=(e=>e?ve(e):ve),j=a(e(),1),be=e=>e;function xe(e,t=be){let n=j.useSyncExternalStore(e.subscribe,j.useCallback(()=>t(e.getState()),[e,t]),j.useCallback(()=>t(e.getInitialState()),[e,t]));return j.useDebugValue(n),n}var Se=e=>{let t=ye(e),n=e=>xe(t,e);return Object.assign(n,t),n},Ce=(e=>e?Se(e):Se),we=a(g(),1);const M=Ce(e=>({cacheReady:!1,setCacheReady:t=>e({cacheReady:t}),sceneReady:!1,setSceneReady:t=>e({sceneReady:t}),items:[],setItems:t=>e({items:t}),localItems:[],setLocalItems:t=>e({localItems:t}),sceneMetadata:{},setSceneMetadata:t=>e({sceneMetadata:{...t}}),roomMetadata:{},setRoomMetadata:t=>e({roomMetadata:{...t}}),gridDpi:150,setGridDpi:t=>e({gridDpi:t}),playerData:void 0,setPlayerData:t=>e({playerData:t}),partyData:[],setPartyData:t=>e({partyData:t})}));var N=0;const P=Ce(e=>({messages:[],initialized:!1,addMessage:t=>{let n=new Date,r=n.getHours(),i=n.getMinutes(),a=r>=12?`PM`:`AM`,o=`${r%12||12}:${i<10?`0${i}`:i} ${a}`;e(e=>({messages:[...e.messages,{id:N++,text:t,timestamp:o}]}))},setInitialized:t=>e({initialized:t})})),Te=()=>{P.getState().initialized||(E.broadcast.onMessage(`${te.EXTENSIONID}/chatlog`,e=>{let t=P.getState().addMessage;typeof e.data==`string`?t(e.data):typeof e.data==`object`&&e.data.message&&t(e.data.message)}),P.getState().setInitialized(!0))};var F=D(),Ee=`${te.EXTENSIONID}/chatlog`,De=`${te.EXTENSIONID}/roll-notification`;function Oe({children:e}){let t=M(e=>e.setItems),n=M(e=>e.setLocalItems),r=M(e=>e.setSceneMetadata),i=M(e=>e.setRoomMetadata),a=M(e=>e.setGridDpi),o=M(e=>e.setPlayerData),s=M(e=>e.setPartyData),c=M(e=>e.setSceneReady),l=M(e=>e.setCacheReady);return(0,j.useEffect)(()=>{let e=(e,t)=>{let n=e[h.ENABLE_CONSOLE_LOG];typeof n==`boolean`&&O.setEnabled(n)},u=e=>{ge(e);let{sceneMetadata:t,roomMetadata:n}=M.getState(),r=t,i=r[h.ENABLE_OBR_NOTIFICATION];if(r[h.SHOW_NOTIFICATION_TO_ALL]===!0){E.broadcast.sendMessage(Ee,{message:e},{destination:`ALL`}),i===!0&&E.broadcast.sendMessage(De,{message:e},{destination:`ALL`});return}P.getState().addMessage(e),i===!0&&E.notification.show(e,`SUCCESS`)},d=({explicitMessage:e,tokenName:t,actionName:n,total:r})=>{if(typeof e==`string`&&e.trim().length>0)return e;let i=t||`Unknown`,a=n||`Action`;return typeof r==`number`&&Number.isFinite(r)?`${i} rolled ${a} for ${r}!`:`${i} rolled ${a}.`};Te();let f=E.broadcast.onMessage(De,e=>{let t=e.data,n=typeof t?.message==`string`?t.message:null;n&&E.notification.show(n,`SUCCESS`)});ue(e=>{let t=re(e.rollHtml);u(d({tokenName:e.senderName,actionName:e.actionName,total:t}))}),ae(e=>{u(d({explicitMessage:e.message}))}),se(e=>{u(d({tokenName:e.playerName,actionName:e.result.diceNotation,total:e.result.totalValue}))});let p,m,g,_,v,y,b,x,S=async()=>{let[c,u,d,f,p,h,S,C,w,T,ee,D]=await Promise.all([E.scene.items.getItems(),E.scene.local.getItems(),E.scene.getMetadata(),E.room.getMetadata(),E.scene.grid.getDpi(),E.party.getPlayers(),E.player.getColor(),E.player.getRole(),E.player.getConnectionId(),E.player.getId(),E.player.getMetadata(),E.player.getName()]);t(c),n(u),r(d),i(f),e(d,f),a(p),o({id:T,name:D,connectionId:w,role:C,color:S,metadata:ee}),s(h),m=E.scene.items.onChange(t),g=E.scene.local.onChange(n),y=E.scene.grid.onChange(e=>a(e.dpi)),b=E.player.onChange(o),x=E.party.onChange(s),_=E.scene.onMetadataChange(t=>{r(t),e(t,M.getState().roomMetadata)}),v=E.room.onMetadataChange(t=>{i(t),e(M.getState().sceneMetadata,t)}),l(!0),O.log(`CacheManager: Cache is ready`)};return E.onReady(async()=>{let e=await E.scene.isReady();c(e),e&&(O.log(`Scene is ready on initial load, syncing cache...`),await S()),p=E.scene.onReadyChange(async e=>{c(e),e?(O.log(`Scene became ready, syncing cache...`),await S()):(O.log(`Scene is no longer ready, clearing cache...`),l(!1))})}),()=>{p?.(),m?.(),g?.(),_?.(),v?.(),y?.(),b?.(),x?.(),f?.()}},[c,l,t,n,r,i,a,o,s]),(0,F.jsx)(F.Fragment,{children:e})}var ke=(0,j.createContext)(void 0);const Ae=({children:e})=>{let[t,n]=(0,j.useState)(p),r=(0,j.useCallback)((e,t,r,i,a)=>{n(n=>n.PRIMARY===e&&n.OFFSET===t&&n.BACKGROUND===r&&n.BORDER===i&&n.BACKGROUND_URL===(a||void 0)?n:x(e,t,r,i,a))},[]);return(0,F.jsx)(ke.Provider,{value:{theme:t,setTheme:n,updateThemeFromSystem:r},children:e})},je=()=>{let e=(0,j.useContext)(ke);if(!e)throw Error(`useForgeTheme must be used within a ThemeProvider`);return e};var Me=(0,j.createContext)({});function I(e){let t=(0,j.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Ne=typeof window<`u`,Pe=Ne?j.useLayoutEffect:j.useEffect,Fe=(0,j.createContext)(null);function Ie(e,t){e.indexOf(t)===-1&&e.push(t)}function Le(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var Re=(e,t,n)=>n>t?t:n<e?e:n,ze={},Be=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Ve(e){return typeof e==`object`&&!!e}var He=e=>/^0[^.\s]+$/u.test(e);function Ue(e){let t;return()=>(t===void 0&&(t=e()),t)}var We=e=>e,Ge=(e,t)=>n=>t(e(n)),Ke=(...e)=>e.reduce(Ge),qe=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},Je=class{constructor(){this.subscriptions=[]}add(e){return Ie(this.subscriptions,e),()=>Le(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},Ye=e=>e*1e3,Xe=e=>e/1e3;function Ze(e,t){return t?e*(1e3/t):0}var Qe=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,$e=1e-7,et=12;function tt(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Qe(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>$e&&++s<et);return o}function nt(e,t,n,r){if(e===t&&n===r)return We;let i=t=>tt(t,0,1,e,n);return e=>e===0||e===1?e:Qe(i(e),t,r)}var rt=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,it=e=>t=>1-e(1-t),at=nt(.33,1.53,.69,.99),ot=it(at),st=rt(ot),ct=e=>(e*=2)<1?.5*ot(e):.5*(2-2**(-10*(e-1))),lt=e=>1-Math.sin(Math.acos(e)),ut=it(lt),dt=rt(lt),ft=nt(.42,0,1,1),pt=nt(0,0,.58,1),mt=nt(.42,0,.58,1),ht=e=>Array.isArray(e)&&typeof e[0]!=`number`,gt=e=>Array.isArray(e)&&typeof e[0]==`number`,_t={linear:We,easeIn:ft,easeInOut:mt,easeOut:pt,circIn:lt,circInOut:dt,circOut:ut,backIn:ot,backInOut:st,backOut:at,anticipate:ct},vt=e=>typeof e==`string`,yt=e=>{if(gt(e)){e.length;let[t,n,r,i]=e;return nt(t,n,r,i)}else if(vt(e))return _t[e],`${e}`,_t[e];return e},bt=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],xt={value:null,addProjectionMetrics:null};function St(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.has(e)||s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),t&&xt.value&&xt.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Ct=40;function wt(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=bt.reduce((e,n)=>(e[n]=St(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=ze.useManualTiming?i.timestamp:performance.now();n=!1,ze.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,Ct),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:bt.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<bt.length;t++)o[bt[t]].cancel(e)},state:i,steps:o}}var{schedule:L,cancel:Tt,state:R,steps:Et}=wt(typeof requestAnimationFrame<`u`?requestAnimationFrame:We,!0),Dt;function Ot(){Dt=void 0}var kt={now:()=>(Dt===void 0&&kt.set(R.isProcessing||ze.useManualTiming?R.timestamp:performance.now()),Dt),set:e=>{Dt=e,queueMicrotask(Ot)}},At={layout:0,mainThread:0,waapi:0},jt=e=>t=>typeof t==`string`&&t.startsWith(e),Mt=jt(`--`),Nt=jt(`var(--`),Pt=e=>Nt(e)?Ft.test(e.split(`/*`)[0].trim()):!1,Ft=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function It(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Lt={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Rt={...Lt,transform:e=>Re(0,1,e)},zt={...Lt,default:1},Bt=e=>Math.round(e*1e5)/1e5,Vt=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ht(e){return e==null}var Ut=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Wt=(e,t)=>n=>!!(typeof n==`string`&&Ut.test(n)&&n.startsWith(e)||t&&!Ht(n)&&Object.prototype.hasOwnProperty.call(n,t)),Gt=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Vt);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Kt=e=>Re(0,255,e),qt={...Lt,transform:e=>Math.round(Kt(e))},Jt={test:Wt(`rgb`,`red`),parse:Gt(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+qt.transform(e)+`, `+qt.transform(t)+`, `+qt.transform(n)+`, `+Bt(Rt.transform(r))+`)`};function Yt(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Xt={test:Wt(`#`),parse:Yt,transform:Jt.transform},Zt=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Qt=Zt(`deg`),$t=Zt(`%`),z=Zt(`px`),en=Zt(`vh`),tn=Zt(`vw`),nn=(()=>({...$t,parse:e=>$t.parse(e)/100,transform:e=>$t.transform(e*100)}))(),rn={test:Wt(`hsl`,`hue`),parse:Gt(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+$t.transform(Bt(t))+`, `+$t.transform(Bt(n))+`, `+Bt(Rt.transform(r))+`)`},B={test:e=>Jt.test(e)||Xt.test(e)||rn.test(e),parse:e=>Jt.test(e)?Jt.parse(e):rn.test(e)?rn.parse(e):Xt.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?Jt.transform(e):rn.transform(e),getAnimatableNone:e=>{let t=B.parse(e);return t.alpha=0,B.transform(t)}},an=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function on(e){return isNaN(e)&&typeof e==`string`&&(e.match(Vt)?.length||0)+(e.match(an)?.length||0)>0}var sn=`number`,cn=`color`,ln=`var`,un=`var(`,dn="${}",fn=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function pn(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(fn,e=>(B.test(e)?(r.color.push(a),i.push(cn),n.push(B.parse(e))):e.startsWith(un)?(r.var.push(a),i.push(ln),n.push(e)):(r.number.push(a),i.push(sn),n.push(parseFloat(e))),++a,dn)).split(dn),indexes:r,types:i}}function mn(e){return pn(e).values}function hn(e){let{split:t,types:n}=pn(e),r=t.length;return e=>{let i=``;for(let a=0;a<r;a++)if(i+=t[a],e[a]!==void 0){let t=n[a];t===sn?i+=Bt(e[a]):t===cn?i+=B.transform(e[a]):i+=e[a]}return i}}var gn=e=>typeof e==`number`?0:B.test(e)?B.getAnimatableNone(e):e;function _n(e){let t=mn(e);return hn(e)(t.map(gn))}var vn={test:on,parse:mn,createTransformer:hn,getAnimatableNone:_n};function yn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function bn({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=yn(s,r,e+1/3),a=yn(s,r,e),o=yn(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function xn(e,t){return n=>n>0?t:e}var V=(e,t,n)=>e+(t-e)*n,Sn=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Cn=[Xt,Jt,rn],wn=e=>Cn.find(t=>t.test(e));function Tn(e){let t=wn(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===rn&&(n=bn(n)),n}var En=(e,t)=>{let n=Tn(e),r=Tn(t);if(!n||!r)return xn(e,t);let i={...n};return e=>(i.red=Sn(n.red,r.red,e),i.green=Sn(n.green,r.green,e),i.blue=Sn(n.blue,r.blue,e),i.alpha=V(n.alpha,r.alpha,e),Jt.transform(i))},Dn=new Set([`none`,`hidden`]);function On(e,t){return Dn.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function kn(e,t){return n=>V(e,t,n)}function An(e){return typeof e==`number`?kn:typeof e==`string`?Pt(e)?xn:B.test(e)?En:Pn:Array.isArray(e)?jn:typeof e==`object`?B.test(e)?En:Mn:xn}function jn(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>An(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Mn(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=An(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Nn(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Pn=(e,t)=>{let n=vn.createTransformer(t),r=pn(e),i=pn(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Dn.has(e)&&!i.values.length||Dn.has(t)&&!r.values.length?On(e,t):Ke(jn(Nn(r,i),i.values),n):(`${e}${t}`,xn(e,t))};function Fn(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?V(e,t,n):An(e)(e,t)}var In=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>L.update(t,e),stop:()=>Tt(t),now:()=>R.isProcessing?R.timestamp:kt.now()}},Ln=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Rn=2e4;function zn(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Bn(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(zn(r),Rn);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:Xe(i)}}var Vn=5;function Hn(e,t,n){let r=Math.max(t-Vn,0);return Ze(n-e(r),t-r)}var H={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Un=.001;function Wn({duration:e=H.duration,bounce:t=H.bounce,velocity:n=H.velocity,mass:r=H.mass}){let i,a;H.maxDuration;let o=1-t;o=Re(H.minDamping,H.maxDamping,o),e=Re(H.minDuration,H.maxDuration,Xe(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=qn(t,o),c=Math.exp(-i);return Un-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=qn(t**2,o);return(-i(t)+Un>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Un+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Kn(i,a,s);if(e=Ye(e),isNaN(c))return{stiffness:H.stiffness,damping:H.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Gn=12;function Kn(e,t,n){let r=n;for(let n=1;n<Gn;n++)r-=e(r)/t(r);return r}function qn(e,t){return e*Math.sqrt(1-t*t)}var Jn=[`duration`,`bounce`],Yn=[`stiffness`,`damping`,`mass`];function Xn(e,t){return t.some(t=>e[t]!==void 0)}function Zn(e){let t={velocity:H.velocity,stiffness:H.stiffness,damping:H.damping,mass:H.mass,isResolvedFromDuration:!1,...e};if(!Xn(e,Yn)&&Xn(e,Jn))if(e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Re(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:H.mass,stiffness:i,damping:a}}else{let n=Wn(e);t={...t,...n,mass:H.mass},t.isResolvedFromDuration=!0}return t}function Qn(e=H.visualDuration,t=H.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Zn({...n,velocity:-Xe(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=Xe(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?H.restSpeed.granular:H.restSpeed.default,i||=v?H.restDelta.granular:H.restDelta.default;let y;if(h<1){let e=qn(_,h);y=t=>o-Math.exp(-h*_*t)*((m+h*_*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}else if(h===1)y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}let b={calculatedDuration:p&&d||null,next:e=>{let t=y(e);if(p)s.done=e>=d;else{let n=e===0?m:0;h<1&&(n=e===0?Ye(m):Hn(y,e,t));let a=Math.abs(n)<=r,c=Math.abs(o-t)<=i;s.done=a&&c}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(zn(b),Rn),t=Ln(t=>b.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return b}Qn.applyToOptions=e=>{let t=Bn(e,100,Qn);return e.ease=t.ease,e.duration=Ye(t.duration),e.type=`keyframes`,e};function $n({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=Qn({keyframes:[f.value,m(f.value)],velocity:Hn(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function er(e,t,n){let r=[],i=n||ze.mix||Fn,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Ke(Array.isArray(t)?t[n]||We:t,a)),r.push(a)}return r}function tr(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=er(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=qe(e[r],e[r+1],n);return s[r](i)};return n?t=>l(Re(e[0],e[a-1],t)):l}function nr(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=qe(0,t,r);e.push(V(n,1,i))}}function rr(e){let t=[0];return nr(t,e.length-1),t}function ir(e,t){return e.map(e=>e*t)}function ar(e,t){return e.map(()=>t||mt).splice(0,e.length-1)}function or({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=ht(r)?r.map(yt):yt(r),a={done:!1,value:t[0]},o=tr(ir(n&&n.length===t.length?n:rr(t),e),t,{ease:Array.isArray(i)?i:ar(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var sr=e=>e!==null;function cr(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(sr),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var lr={decay:$n,inertia:$n,tween:or,keyframes:or,spring:Qn};function ur(e){typeof e.type==`string`&&(e.type=lr[e.type])}var dr=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},fr=e=>e/100,pr=class extends dr{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==kt.now()&&this.tick(kt.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},At.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;ur(e);let{type:t=or,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||or;s!==or&&typeof o[0]!=`number`&&(this.mixKeyframes=Ke(fr,Fn(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=zn(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=Re(0,1,n)*o}let b=_?{done:!1,value:l[0]}:y.next(v);i&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==$n&&(b.value=cr(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return Xe(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Xe(e)}get time(){return Xe(this.currentTime)}set time(e){e=Ye(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(kt.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Xe(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=In,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(kt.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,At.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function mr(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var hr=e=>e*180/Math.PI,gr=e=>vr(hr(Math.atan2(e[1],e[0]))),_r={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:gr,rotateZ:gr,skewX:e=>hr(Math.atan(e[1])),skewY:e=>hr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},vr=e=>(e%=360,e<0&&(e+=360),e),yr=gr,br=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),xr=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Sr={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:br,scaleY:xr,scale:e=>(br(e)+xr(e))/2,rotateX:e=>vr(hr(Math.atan2(e[6],e[5]))),rotateY:e=>vr(hr(Math.atan2(-e[2],e[0]))),rotateZ:yr,rotate:yr,skewX:e=>hr(Math.atan(e[4])),skewY:e=>hr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Cr(e){return e.includes(`scale`)?1:0}function wr(e,t){if(!e||e===`none`)return Cr(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Sr,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=_r,i=t}if(!i)return Cr(t);let a=r[t],o=i[1].split(`,`).map(Er);return typeof a==`function`?a(o):o[a]}var Tr=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return wr(n,t)};function Er(e){return parseFloat(e.trim())}var Dr=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Or=(()=>new Set(Dr))(),kr=e=>e===Lt||e===z,Ar=new Set([`x`,`y`,`z`]),jr=Dr.filter(e=>!Ar.has(e));function Mr(e){let t=[];return jr.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var Nr={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>wr(t,`x`),y:(e,{transform:t})=>wr(t,`y`)};Nr.translateX=Nr.x,Nr.translateY=Nr.y;var Pr=new Set,Fr=!1,Ir=!1,Lr=!1;function Rr(){if(Ir){let e=Array.from(Pr).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Mr(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Ir=!1,Fr=!1,Pr.forEach(e=>e.complete(Lr)),Pr.clear()}function zr(){Pr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ir=!0)})}function Br(){Lr=!0,zr(),Rr(),Lr=!1}var Vr=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Pr.add(this),Fr||(Fr=!0,L.read(zr),L.resolveKeyframes(Rr))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}mr(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Pr.delete(this)}cancel(){this.state===`scheduled`&&(Pr.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Hr=e=>e.startsWith(`--`);function Ur(e,t,n){Hr(t)?e.style.setProperty(t,n):e.style[t]=n}var Wr=Ue(()=>window.ScrollTimeline!==void 0),Gr={};function Kr(e,t){let n=Ue(e);return()=>Gr[t]??n()}var qr=Kr(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Jr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Yr={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Jr([0,.65,.55,1]),circOut:Jr([.55,0,1,.45]),backIn:Jr([.31,.01,.66,-.59]),backOut:Jr([.33,1.53,.69,.99])};function Xr(e,t){if(e)return typeof e==`function`?qr()?Ln(e,t):`ease-out`:gt(e)?Jr(e):Array.isArray(e)?e.map(e=>Xr(e,t)||Yr.easeOut):Yr[e]}function Zr(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Xr(s,i);Array.isArray(d)&&(u.easing=d),xt.value&&At.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return xt.value&&p.finished.finally(()=>{At.waapi--}),p}function Qr(e){return typeof e==`function`&&`applyToOptions`in e}function $r({type:e,...t}){return Qr(e)&&qr()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var ei=class extends dr{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=$r(e);this.animation=Zr(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=cr(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):Ur(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Xe(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Xe(e)}get time(){return Xe(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ye(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Wr()?(this.animation.timeline=e,We):t(this)}},ti={anticipate:ct,backInOut:st,circInOut:dt};function ni(e){return e in ti}function ri(e){typeof e.ease==`string`&&ni(e.ease)&&(e.ease=ti[e.ease])}var ii=10,ai=class extends ei{constructor(e){ri(e),ur(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new pr({...a,autoplay:!1}),s=Math.max(ii,kt.now()-this.startTime),c=Re(0,ii,s-ii);t.setWithVelocity(o.sample(Math.max(0,s-c)).value,o.sample(s).value,c),o.stop()}},oi=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(vn.test(e)||e===`0`)&&!e.startsWith(`url(`));function si(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function ci(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=oi(i,t),s=oi(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:si(e)||(n===`spring`||Qr(n))&&r}function li(e){e.duration=0,e.type=`keyframes`}var ui=new Set([`opacity`,`clipPath`,`filter`,`transform`]),di=Ue(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function fi(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:s,transformTemplate:c}=t.owner.getProps();return di()&&n&&ui.has(n)&&(n!==`transform`||!c)&&!s&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var pi=40,mi=class extends dr{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=kt.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||Vr)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=kt.now(),ci(e,i,a,o)||((ze.instantAnimations||!s)&&l?.(cr(e,n,t)),e[0]=e[e.length-1],li(n),n.repeat=0);let u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>pi?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!c&&fi(u),f=u.motionValue?.owner?.current,p=d?new ai({...u,element:f}):new pr(u);p.finished.then(()=>{this.notifyFinished()}).catch(We),this.pendingTimeline&&=(this.stopTimeline=p.attachTimeline(this.pendingTimeline),void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Br()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function hi(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var gi=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function _i(e){let t=gi.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function vi(e,t,n=1){`${e}`;let[r,i]=_i(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Be(e)?parseFloat(e):e}return Pt(i)?vi(i,t,n+1):i}var yi={type:`spring`,stiffness:500,damping:25,restSpeed:10},bi=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),xi={type:`keyframes`,duration:.8},Si={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Ci=(e,{keyframes:t})=>t.length>2?xi:Or.has(e)?e.startsWith(`scale`)?bi(t[1]):yi:Si,wi=e=>e!==null;function Ti(e,{repeat:t,repeatType:n=`loop`},r){let i=e.filter(wi),a=t&&n!==`loop`&&t%2==1?0:i.length-1;return!a||r===void 0?i[a]:r}function Ei(e,t){return e?.[t]??e?.default??e}function Di({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:l,...u}){return!!Object.keys(u).length}var Oi=(e,t,n,r={},i,a)=>o=>{let s=Ei(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=Ye(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Di(s)||Object.assign(u,Ci(e,u)),u.duration&&=Ye(u.duration),u.repeatDelay&&=Ye(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(li(u),u.delay===0&&(d=!0)),(ze.instantAnimations||ze.skipAnimations)&&(d=!0,li(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Ti(u.keyframes,s);if(e!==void 0){L.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new pr(u):new mi(u)};function ki(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Ai(e,t,n,r){if(typeof t==`function`){let[i,a]=ki(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=ki(r);t=t(n===void 0?e.custom:n,i,a)}return t}function ji(e,t,n){let r=e.getProps();return Ai(r,t,n===void 0?r.custom:n,e)}var Mi=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Dr]),Ni=30,Pi=e=>!isNaN(parseFloat(e)),Fi={current:void 0},Ii=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=kt.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=kt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Pi(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Je);let n=this.events[e].add(t);return e===`change`?()=>{n(),L.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Fi.current&&Fi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=kt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ni)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Ni);return Ze(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Li(e,t){return new Ii(e,t)}var Ri=e=>Array.isArray(e);function zi(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Li(n))}function Bi(e){return Ri(e)?e[e.length-1]||0:e}function Vi(e,t){let{transitionEnd:n={},transition:r={},...i}=ji(e,t)||{};for(let t in i={...i,...n},i)zi(e,t,Bi(i[t]))}var U=e=>!!(e&&e.getVelocity);function Hi(e){return!!(U(e)&&e.add)}function Ui(e,t){let n=e.getValue(`willChange`);if(Hi(n))return n.add(t);if(!n&&ze.WillChange){let n=new ze.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Wi(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Gi=`data-`+Wi(`framerAppearId`);function Ki(e){return e.props[Gi]}function qi({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Ji(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);let c=[],l=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||l&&qi(l,t))continue;let o={delay:n,...Ei(a||{},t)},u=r.get();if(u!==void 0&&!r.isAnimating&&!Array.isArray(i)&&i===u&&!o.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){let n=Ki(e);if(n){let e=window.MotionHandoffAnimation(n,t,L);e!==null&&(o.startTime=e,d=!0)}}Ui(e,t),r.start(Oi(t,r,i,e.shouldReduceMotion&&Mi.has(t)?{type:!1}:o,e,d));let f=r.animation;f&&c.push(f)}return o&&Promise.all(c).then(()=>{L.update(()=>{o&&Vi(e,o)})}),c}function Yi(e,t,n={}){let r=ji(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Ji(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return Xi(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function Xi(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(Yi(c,t,{...o,delay:n+(typeof r==`function`?0:r)+hi(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function Zi(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Yi(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Yi(e,t,n);else{let i=typeof t==`function`?ji(e,t,n.custom):t;r=Promise.all(Ji(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var Qi={test:e=>e===`auto`,parse:e=>e},$i=e=>t=>t.test(e),ea=[Lt,z,$t,Qt,tn,en,Qi],ta=e=>ea.find($i(e));function na(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||He(e)}var ra=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function ia(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Vt)||[];if(!r)return e;let i=n.replace(r,``),a=ra.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var aa=/\b([a-z-]*)\(.*?\)/gu,oa={...vn,getAnimatableNone:e=>{let t=e.match(aa);return t?t.map(ia).join(` `):e}},sa={...Lt,transform:Math.round},ca={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,top:z,right:z,bottom:z,left:z,inset:z,insetBlock:z,insetBlockStart:z,insetBlockEnd:z,insetInline:z,insetInlineStart:z,insetInlineEnd:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,paddingBlock:z,paddingBlockStart:z,paddingBlockEnd:z,paddingInline:z,paddingInlineStart:z,paddingInlineEnd:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,marginBlock:z,marginBlockStart:z,marginBlockEnd:z,marginInline:z,marginInlineStart:z,marginInlineEnd:z,fontSize:z,backgroundPositionX:z,backgroundPositionY:z,rotate:Qt,rotateX:Qt,rotateY:Qt,rotateZ:Qt,scale:zt,scaleX:zt,scaleY:zt,scaleZ:zt,skew:Qt,skewX:Qt,skewY:Qt,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:Rt,originX:nn,originY:nn,originZ:z,zIndex:sa,fillOpacity:Rt,strokeOpacity:Rt,numOctaves:sa},la={...ca,color:B,backgroundColor:B,outlineColor:B,fill:B,stroke:B,borderColor:B,borderTopColor:B,borderRightColor:B,borderBottomColor:B,borderLeftColor:B,filter:oa,WebkitFilter:oa},ua=e=>la[e];function da(e,t){let n=ua(e);return n!==oa&&(n=vn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var fa=new Set([`auto`,`none`,`0`]);function pa(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!fa.has(t)&&pn(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=da(n,i)}var ma=class extends Vr{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Pt(r))){let i=vi(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Mi.has(n)||e.length!==2)return;let[r,i]=e,a=ta(r),o=ta(i);if(It(r)!==It(i)&&Nr[n]){this.needsMeasurement=!0;return}if(a!==o)if(kr(a)&&kr(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Nr[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||na(e[t]))&&n.push(t);n.length&&pa(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Nr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Nr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function ha(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var ga=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function _a(e){return Ve(e)&&`offsetHeight`in e}var{schedule:va,cancel:ya}=wt(queueMicrotask,!1),ba={x:!1,y:!1};function xa(){return ba.x||ba.y}function Sa(e){return e===`x`||e===`y`?ba[e]?null:(ba[e]=!0,()=>{ba[e]=!1}):ba.x||ba.y?null:(ba.x=ba.y=!0,()=>{ba.x=ba.y=!1})}function Ca(e,t){let n=ha(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function wa(e){return!(e.pointerType===`touch`||xa())}function Ta(e,t,n={}){let[r,i,a]=Ca(e,n),o=e=>{if(!wa(e))return;let{target:n}=e,r=t(n,e);if(typeof r!=`function`||!n)return;let a=e=>{wa(e)&&(r(e),n.removeEventListener(`pointerleave`,a))};n.addEventListener(`pointerleave`,a,i)};return r.forEach(e=>{e.addEventListener(`pointerenter`,o,i)}),a}var Ea=(e,t)=>t?e===t?!0:Ea(e,t.parentElement):!1,Da=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Oa=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function ka(e){return Oa.has(e.tagName)||e.isContentEditable===!0}var Aa=new WeakSet;function ja(e){return t=>{t.key===`Enter`&&e(t)}}function Ma(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Na=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=ja(()=>{if(Aa.has(n))return;Ma(n,`down`);let e=ja(()=>{Ma(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Ma(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Pa(e){return Da(e)&&!xa()}function Fa(e,t,n={}){let[r,i,a]=Ca(e,n),o=e=>{let r=e.currentTarget;if(!Pa(e))return;Aa.add(r);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),Aa.has(r)&&Aa.delete(r),Pa(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Ea(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),_a(e)&&(e.addEventListener(`focus`,e=>Na(e,i)),!ka(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Ia(e){return Ve(e)&&`ownerSVGElement`in e}function La(e){return Ia(e)&&e.tagName===`svg`}var Ra=[...ea,B,vn],za=e=>Ra.find($i(e)),Ba=()=>({translate:0,scale:1,origin:0,originPoint:0}),Va=()=>({x:Ba(),y:Ba()}),Ha=()=>({min:0,max:0}),W=()=>({x:Ha(),y:Ha()}),Ua={current:null},Wa={current:!1},Ga=typeof window<`u`;function Ka(){if(Wa.current=!0,Ga)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Ua.current=e.matches;e.addEventListener(`change`,t),t()}else Ua.current=!1}var qa=new WeakMap;function Ja(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Ya(e){return typeof e==`string`||Array.isArray(e)}var Xa=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Za=[`initial`,...Xa];function Qa(e){return Ja(e.animate)||Za.some(t=>Ya(e[t]))}function $a(e){return!!(Qa(e)||e.variants)}function eo(e,t,n){for(let r in t){let i=t[r],a=n[r];if(U(i))e.addValue(r,i);else if(U(a))e.addValue(r,Li(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Li(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var to=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],no={};function ro(e){no=e}function io(){return no}var ao=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Vr,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=kt.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,L.render(this.render,!1,!0))};let{latestValues:s,renderState:c}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!i,this.isControllingVariants=Qa(t),this.isVariantNode=$a(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in u){let t=u[e];s[e]!==void 0&&U(t)&&t.set(s[e])}}mount(e){this.current=e,qa.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Wa.current||Ka(),this.shouldReduceMotion=Ua.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in this.projection&&this.projection.unmount(),Tt(this.notifyUpdate),Tt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let n=Or.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&L.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in no){let t=no[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):W()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<to.length;t++){let n=to[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=eo(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Li(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Be(n)||He(n))?n=parseFloat(n):!za(n)&&vn.test(t)&&(n=da(e,t)),this.setBaseTarget(e,U(n)?n.get():n)),U(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Ai(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!U(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Je),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){va.render(this.render)}},oo=class extends ao{constructor(){super(...arguments),this.KeyframeResolver=ma}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;U(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},so=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function co({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function lo({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function uo(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function fo(e){return e===void 0||e===1}function po({scale:e,scaleX:t,scaleY:n}){return!fo(e)||!fo(t)||!fo(n)}function mo(e){return po(e)||ho(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ho(e){return go(e.x)||go(e.y)}function go(e){return e&&e!==`0%`}function _o(e,t,n){return n+t*(e-n)}function vo(e,t,n,r,i){return i!==void 0&&(e=_o(e,i,r)),_o(e,n,r)+t}function yo(e,t=0,n=1,r,i){e.min=vo(e.min,t,n,r,i),e.max=vo(e.max,t,n,r,i)}function bo(e,{x:t,y:n}){yo(e.x,t.translate,t.scale,t.originPoint),yo(e.y,n.translate,n.scale,n.originPoint)}var xo=.999999999999,So=1.0000000000001;function Co(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Eo(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,bo(e,o)),r&&mo(a.latestValues)&&Eo(e,a.latestValues))}t.x<So&&t.x>xo&&(t.x=1),t.y<So&&t.y>xo&&(t.y=1)}function wo(e,t){e.min+=t,e.max+=t}function To(e,t,n,r,i=.5){yo(e,t,n,V(e.min,e.max,i),r)}function Eo(e,t){To(e.x,t.x,t.scaleX,t.scale,t.originX),To(e.y,t.y,t.scaleY,t.scale,t.originY)}function Do(e,t){return co(uo(e.getBoundingClientRect(),t))}function Oo(e,t,n){let r=Do(e,n),{scroll:i}=t;return i&&(wo(r.x,i.offset.x),wo(r.y,i.offset.y)),r}var ko={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Ao=Dr.length;function jo(e,t,n){let r=``,i=!0;for(let a=0;a<Ao;a++){let o=Dr[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=ga(s,ca[o]);if(!c){i=!1;let t=ko[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Mo(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Or.has(e)){o=!0;continue}else if(Mt(e)){i[e]=n;continue}else{let t=ga(n,ca[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=jo(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function No(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Po(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Fo={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(z.test(e))e=parseFloat(e);else return e;return`${Po(e,t.target.x)}% ${Po(e,t.target.y)}%`}},Io={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=vn.parse(e);if(i.length>5)return r;let a=vn.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=V(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Lo={borderRadius:{...Fo,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:Fo,borderTopRightRadius:Fo,borderBottomLeftRadius:Fo,borderBottomRightRadius:Fo,boxShadow:Io};function Ro(e,{layout:t,layoutId:n}){return Or.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Lo[e]||e===`opacity`)}function zo(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(U(r[t])||i&&U(i[t])||Ro(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Bo(e){return window.getComputedStyle(e)}var Vo=class extends oo{constructor(){super(...arguments),this.type=`html`,this.renderInstance=No}readValueFromInstance(e,t){if(Or.has(t))return this.projection?.isProjecting?Cr(t):Tr(e,t);{let n=Bo(e),r=(Mt(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Do(e,t)}build(e,t,n){Mo(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return zo(e,t,n)}},Ho={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Uo={offset:`strokeDashoffset`,array:`strokeDasharray`};function Wo(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Ho:Uo;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Go=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Ko(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Mo(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Go)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Wo(d,i,a,o,!1)}var qo=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Jo=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Yo(e,t,n,r){for(let n in No(e,t,void 0,r),t.attrs)e.setAttribute(qo.has(n)?n:Wi(n),t.attrs[n])}function Xo(e,t,n){let r=zo(e,t,n);for(let n in e)if(U(e[n])||U(t[n])){let t=Dr.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Zo=class extends oo{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=W}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Or.has(t)){let e=ua(t);return e&&e.default||0}return t=qo.has(t)?t:Wi(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Xo(e,t,n)}build(e,t,n){Ko(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Yo(e,t,n,r)}mount(e){this.isSVGTag=Jo(e.tagName),super.mount(e)}},Qo=Za.length;function $o(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&$o(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Qo;n++){let r=Za[n],i=e.props[r];(Ya(i)||i===!1)&&(t[r]=i)}return t}function es(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var ts=[...Xa].reverse(),ns=Xa.length;function rs(e){return t=>Promise.all(t.map(({animation:t,options:n})=>Zi(e,t,n)))}function is(e){let t=rs(e),n=ss(),r=!0,i=t=>(n,r)=>{let i=ji(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(n){t=n(e)}function o(a){let{props:o}=e,s=$o(e.parent)||{},c=[],l=new Set,u={},d=1/0;for(let t=0;t<ns;t++){let f=ts[t],p=n[f],m=o[f]===void 0?s[f]:o[f],h=Ya(m),g=f===a?p.isActive:null;g===!1&&(d=t);let _=m===s[f]&&m!==o[f]&&h;if(_&&r&&e.manuallyAnimateOnMount&&(_=!1),p.protectedKeys={...u},!p.isActive&&g===null||!m&&!p.prevProp||Ja(m)||typeof m==`boolean`)continue;let v=as(p.prevProp,m),y=v||f===a&&p.isActive&&!_&&h||t>d&&h,b=!1,x=Array.isArray(m)?m:[m],S=x.reduce(i(f),{});g===!1&&(S={});let{prevResolvedValues:C={}}=p,w={...C,...S},T=t=>{y=!0,l.has(t)&&(b=!0,l.delete(t)),p.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in w){let t=S[e],n=C[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Ri(t)&&Ri(n)?!es(t,n):t!==n,r?t==null?l.add(e):T(e):t!==void 0&&l.has(e)?T(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=S,p.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(y=!1);let ee=_&&v;y&&(!ee||b)&&c.push(...x.map(t=>{let n={type:f};if(typeof t==`string`&&r&&!ee&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=ji(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=hi(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(l.size){let t={};if(typeof o.initial!=`boolean`){let n=ji(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}l.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),c.push({animation:t})}let f=!!c.length;return r&&(o.initial===!1||o.initial===o.animate)&&!e.manuallyAnimateOnMount&&(f=!1),r=!1,f?t(c):Promise.resolve()}function s(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=o(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=ss()}}}function as(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!es(t,e):!1}function os(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ss(){return{animate:os(!0),whileInView:os(),whileHover:os(),whileTap:os(),whileDrag:os(),whileFocus:os(),exit:os()}}function cs(e,t){e.min=t.min,e.max=t.max}function ls(e,t){cs(e.x,t.x),cs(e.y,t.y)}function us(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var ds=1e-4,fs=1-ds,ps=1+ds,ms=.01,hs=0-ms,gs=0+ms;function _s(e){return e.max-e.min}function vs(e,t,n){return Math.abs(e-t)<=n}function ys(e,t,n,r=.5){e.origin=r,e.originPoint=V(t.min,t.max,e.origin),e.scale=_s(n)/_s(t),e.translate=V(n.min,n.max,e.origin)-e.originPoint,(e.scale>=fs&&e.scale<=ps||isNaN(e.scale))&&(e.scale=1),(e.translate>=hs&&e.translate<=gs||isNaN(e.translate))&&(e.translate=0)}function bs(e,t,n,r){ys(e.x,t.x,n.x,r?r.originX:void 0),ys(e.y,t.y,n.y,r?r.originY:void 0)}function xs(e,t,n){e.min=n.min+t.min,e.max=e.min+_s(t)}function Ss(e,t,n){xs(e.x,t.x,n.x),xs(e.y,t.y,n.y)}function Cs(e,t,n){e.min=t.min-n.min,e.max=e.min+_s(t)}function ws(e,t,n){Cs(e.x,t.x,n.x),Cs(e.y,t.y,n.y)}function Ts(e,t,n,r,i){return e-=t,e=_o(e,1/n,r),i!==void 0&&(e=_o(e,1/i,r)),e}function Es(e,t=0,n=1,r=.5,i,a=e,o=e){if($t.test(t)&&(t=parseFloat(t),t=V(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=V(a.min,a.max,r);e===a&&(s-=t),e.min=Ts(e.min,t,n,s,i),e.max=Ts(e.max,t,n,s,i)}function Ds(e,t,[n,r,i],a,o){Es(e,t[n],t[r],t[i],t.scale,a,o)}var Os=[`x`,`scaleX`,`originX`],ks=[`y`,`scaleY`,`originY`];function As(e,t,n,r){Ds(e.x,t,Os,n?n.x:void 0,r?r.x:void 0),Ds(e.y,t,ks,n?n.y:void 0,r?r.y:void 0)}function js(e){return e.translate===0&&e.scale===1}function Ms(e){return js(e.x)&&js(e.y)}function Ns(e,t){return e.min===t.min&&e.max===t.max}function Ps(e,t){return Ns(e.x,t.x)&&Ns(e.y,t.y)}function Fs(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Is(e,t){return Fs(e.x,t.x)&&Fs(e.y,t.y)}function Ls(e){return _s(e.x)/_s(e.y)}function Rs(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function zs(e){return[e(`x`),e(`y`)]}function Bs(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Vs=[`TopLeft`,`TopRight`,`BottomLeft`,`BottomRight`],Hs=Vs.length,Us=e=>typeof e==`string`?parseFloat(e):e,Ws=e=>typeof e==`number`||z.test(e);function Gs(e,t,n,r,i,a){i?(e.opacity=V(0,n.opacity??1,qs(r)),e.opacityExit=V(t.opacity??1,0,Js(r))):a&&(e.opacity=V(t.opacity??1,n.opacity??1,r));for(let i=0;i<Hs;i++){let a=`border${Vs[i]}Radius`,o=Ks(t,a),s=Ks(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Ws(o)===Ws(s)?(e[a]=Math.max(V(Us(o),Us(s),r),0),($t.test(s)||$t.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=V(t.rotate||0,n.rotate||0,r))}function Ks(e,t){return e[t]===void 0?e.borderRadius:e[t]}var qs=Ys(0,.5,ut),Js=Ys(.5,.95,We);function Ys(e,t,n){return r=>r<e?0:r>t?1:n(qe(e,t,r))}function Xs(e,t,n){let r=U(e)?e:Li(e);return r.start(Oi(``,r,t,n)),r.animation}function Zs(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var Qs=(e,t)=>e.depth-t.depth,$s=class{constructor(){this.children=[],this.isDirty=!1}add(e){Ie(this.children,e),this.isDirty=!0}remove(e){Le(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Qs),this.isDirty=!1,this.children.forEach(e)}};function ec(e,t){let n=kt.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Tt(r),e(a-t))};return L.setup(r,!0),()=>Tt(r)}function tc(e){return U(e)?e.get():e}var nc=class{constructor(){this.members=[]}add(e){Ie(this.members,e),e.scheduleRender()}remove(e){if(Le(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t=this.members.findIndex(t=>e===t);if(t===0)return!1;let n;for(let e=t;e>=0;e--){let t=this.members[e];if(t.isPresent!==!1){n=t;break}}return n?(this.promote(n),!0):!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender();let r=n.options.layoutDependency,i=e.options.layoutDependency;r!==void 0&&i!==void 0&&r===i||(e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0));let{crossfade:a}=e.options;a===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}},rc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ic={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},ac=[``,`X`,`Y`,`Z`],oc=1e3,sc=0;function cc(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function lc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Ki(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,L,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&lc(r)}function uc({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=sc++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,xt.value&&(ic.nodes=ic.calculatedTargetDeltas=ic.calculatedProjections=0),this.nodes.forEach(pc),this.nodes.forEach(bc),this.nodes.forEach(xc),this.nodes.forEach(mc),xt.addProjectionMetrics&&xt.addProjectionMetrics(ic)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new $s)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Je),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Ia(t)&&!La(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;L.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=ec(i,250),rc.hasAnimatedSinceResize&&(rc.hasAnimatedSinceResize=!1,this.nodes.forEach(yc)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Oc,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Is(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Ei(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||yc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Tt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Sc),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&lc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(gc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(_c);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(vc),this.nodes.forEach(dc),this.nodes.forEach(fc)):this.nodes.forEach(_c),this.clearAllSnapshots();let e=kt.now();R.delta=Re(0,1e3/60,e-R.timestamp),R.timestamp=e,R.isProcessing=!0,Et.update.process(R),Et.preRender.process(R),Et.render.process(R),R.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,va.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(hc),this.sharedNodes.forEach(Cc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,L.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){L.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!_s(this.snapshot.measuredBox.x)&&!_s(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=W(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Ms(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||mo(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Mc(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return W();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Pc))){let{scroll:e}=this.root;e&&(wo(t.x,e.offset.x),wo(t.y,e.offset.y))}return t}removeElementScroll(e){let t=W();if(ls(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&ls(t,e),wo(t.x,i.offset.x),wo(t.y,i.offset.y))}return t}applyTransform(e,t=!1){let n=W();ls(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Eo(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),mo(r.latestValues)&&Eo(n,r.latestValues)}return mo(this.latestValues)&&Eo(n,this.latestValues),n}removeTransform(e){let t=W();ls(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!mo(n.latestValues))continue;po(n.latestValues)&&n.updateSnapshot();let r=W();ls(r,n.measurePageBox()),As(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return mo(this.latestValues)&&As(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==R.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=R.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=W(),this.targetWithTransforms=W()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Ss(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ls(this.target,this.layout.layoutBox),bo(this.target,this.targetDelta)):ls(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),xt.value&&ic.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||po(this.parent.latestValues)||ho(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=W(),this.relativeTargetOrigin=W(),ws(this.relativeTargetOrigin,t,n),ls(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===R.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;ls(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Co(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=W());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(us(this.prevProjectionDelta.x,this.projectionDelta.x),us(this.prevProjectionDelta.y,this.projectionDelta.y)),bs(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Rs(this.projectionDelta.x,this.prevProjectionDelta.x)||!Rs(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),xt.value&&ic.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Va(),this.projectionDelta=Va(),this.projectionDeltaWithTransform=Va()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Va();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=W(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Dc));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;wc(a.x,e.x,n),wc(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ws(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Ec(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Ps(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=W(),ls(d,this.relativeTarget)),s&&(this.animationValues=i,Gs(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Tt(this.pendingAnimation),void 0),this.pendingAnimation=L.update(()=>{rc.hasAnimatedSinceResize=!0,At.layout++,this.motionValue||=Li(0),this.currentAnimation=Xs(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{At.layout--},onComplete:()=>{At.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(oc),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Nc(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||W();let t=_s(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=_s(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}ls(t,n),Eo(t,i),bs(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new nc),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&cc(`z`,e,r,this.animationValues);for(let t=0;t<ac.length;t++)cc(`rotate${ac[t]}`,e,r,this.animationValues),cc(`skew${ac[t]}`,e,r,this.animationValues);for(let t in e.render(),r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=tc(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=tc(t?.pointerEvents)||``),this.hasProjected&&!mo(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Bs(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;for(let t in e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit,Lo){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Lo[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?tc(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(gc),this.root.sharedNodes.clear()}}}function dc(e){e.updateLayout()}function fc(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;i===`size`?zs(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=_s(r);r.min=n[e].min,r.max=r.min+i}):Nc(i,t.layoutBox,n)&&zs(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=_s(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Va();bs(o,n,t.layoutBox);let s=Va();a?bs(s,e.applyTransform(r,!0),t.measuredBox):bs(s,n,t.layoutBox);let c=!Ms(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=W();ws(o,t.layoutBox,i.layoutBox);let s=W();ws(s,n,a.layoutBox),Is(o,s)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function pc(e){xt.value&&ic.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function mc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function hc(e){e.clearSnapshot()}function gc(e){e.clearMeasurements()}function _c(e){e.isLayoutDirty=!1}function vc(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function yc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function bc(e){e.resolveTargetDelta()}function xc(e){e.calcProjection()}function Sc(e){e.resetSkewAndRotation()}function Cc(e){e.removeLeadSnapshot()}function wc(e,t,n){e.translate=V(t.translate,0,n),e.scale=V(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Tc(e,t,n,r){e.min=V(t.min,n.min,r),e.max=V(t.max,n.max,r)}function Ec(e,t,n,r){Tc(e.x,t.x,n.x,r),Tc(e.y,t.y,n.y,r)}function Dc(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Oc={duration:.45,ease:[.4,0,.1,1]},kc=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ac=kc(`applewebkit/`)&&!kc(`chrome/`)?Math.round:We;function jc(e){e.min=Ac(e.min),e.max=Ac(e.max)}function Mc(e){jc(e.x),jc(e.y)}function Nc(e,t,n){return e===`position`||e===`preserve-aspect`&&!vs(Ls(t),Ls(n),.2)}function Pc(e){return e!==e.root&&e.scroll?.wasRoot}var Fc=uc({attachResizeListener:(e,t)=>Zs(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Ic={current:void 0},Lc=uc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ic.current){let e=new Fc({});e.mount(window),e.setOptions({layoutScroll:!0}),Ic.current=e}return Ic.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Rc=(0,j.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function zc(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Bc(...e){return t=>{let n=!1,r=e.map(e=>{let r=zc(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():zc(e[t],null)}}}}function Vc(...e){return j.useCallback(Bc(...e),e)}var Hc=class extends j.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=_a(e)&&e.offsetWidth||0,r=_a(e)&&e.offsetHeight||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left,i.bottom=r-i.height-i.top}return null}componentDidUpdate(){}render(){return this.props.children}};function Uc({children:e,isPresent:t,anchorX:n,anchorY:r,root:i}){let a=(0,j.useId)(),o=(0,j.useRef)(null),s=(0,j.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=(0,j.useContext)(Rc),l=Vc(o,e.props?.ref??e?.ref);return(0,j.useInsertionEffect)(()=>{let{width:e,height:l,top:u,left:d,right:f,bottom:p}=s.current;if(t||!o.current||!e||!l)return;let m=n===`left`?`left: ${d}`:`right: ${f}`,h=r===`bottom`?`bottom: ${p}`:`top: ${u}`;o.current.dataset.motionPopId=a;let g=document.createElement(`style`);c&&(g.nonce=c);let _=i??document.head;return _.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${m}px !important;
            ${h}px !important;
          }
        `),()=>{_.contains(g)&&_.removeChild(g)}},[t]),(0,F.jsx)(Hc,{isPresent:t,childRef:o,sizeRef:s,children:j.cloneElement(e,{ref:l})})}var Wc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=I(Gc),d=(0,j.useId)(),f=!0,p=(0,j.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,j.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),j.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),o===`popLayout`&&(e=(0,F.jsx)(Uc,{isPresent:n,anchorX:s,anchorY:c,root:l,children:e})),(0,F.jsx)(Fe.Provider,{value:p,children:e})};function Gc(){return new Map}function Kc(e=!0){let t=(0,j.useContext)(Fe);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,j.useId)();(0,j.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,j.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var qc=e=>e.key||``;function Jc(e){let t=[];return j.Children.forEach(e,e=>{(0,j.isValidElement)(e)&&t.push(e)}),t}var Yc=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Kc(o),f=(0,j.useMemo)(()=>Jc(e),[e]),p=o&&!u?[]:f.map(qc),m=(0,j.useRef)(!0),h=(0,j.useRef)(f),g=I(()=>new Map),_=(0,j.useRef)(new Set),[v,y]=(0,j.useState)(f),[b,x]=(0,j.useState)(f);Pe(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=qc(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=qc(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(Jc(e)),y(f),null}let{forceRender:C}=(0,j.useContext)(Me);return(0,F.jsx)(F.Fragment,{children:b.map(e=>{let v=qc(e),y=o&&!u?!1:f===b||p.includes(v);return(0,F.jsx)(Wc,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(_.current.add(v),g.has(v))g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},Xc=(0,j.createContext)({strict:!1}),Zc={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Qc=!1;function $c(){if(Qc)return;let e={};for(let t in Zc)e[t]={isEnabled:e=>Zc[t].some(t=>!!e[t])};ro(e),Qc=!0}function el(){return $c(),io()}function tl(e){let t=el();for(let n in e)t[n]={...t[n],...e[n]};ro(t)}var nl=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(`.`));function rl(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||nl.has(e)}var il=e=>!rl(e);function al(e){typeof e==`function`&&(il=t=>t.startsWith(`on`)?!rl(t):e(t))}try{al((d(),i(C)).default)}catch{}function ol(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||(il(i)||n===!0&&rl(i)||!t&&!rl(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var sl=(0,j.createContext)({});function cl(e,t){if(Qa(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Ya(t)?t:void 0,animate:Ya(n)?n:void 0}}return e.inherit===!1?{}:t}function ll(e){let{initial:t,animate:n}=cl(e,(0,j.useContext)(sl));return(0,j.useMemo)(()=>({initial:t,animate:n}),[ul(t),ul(n)])}function ul(e){return Array.isArray(e)?e.join(` `):e}var dl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function fl(e,t,n){for(let r in t)!U(t[r])&&!Ro(r,n)&&(e[r]=t[r])}function pl({transformTemplate:e},t){return(0,j.useMemo)(()=>{let n=dl();return Mo(n,t,e),Object.assign({},n.vars,n.style)},[t])}function ml(e,t){let n=e.style||{},r={};return fl(r,n,e),Object.assign(r,pl(e,t)),r}function hl(e,t){let n={},r=ml(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var gl=()=>({...dl(),attrs:{}});function _l(e,t,n,r){let i=(0,j.useMemo)(()=>{let n=gl();return Ko(n,t,Jo(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};fl(t,e.style,e),i.style={...t,...i.style}}return i}var vl=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function yl(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(vl.indexOf(e)>-1||/[A-Z]/u.test(e))}function bl(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??yl(e)?_l:hl)(t,r,i,e),c=ol(t,typeof e==`string`,a),l=e===j.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,j.useMemo)(()=>U(u)?u.get():u,[u]);return(0,j.createElement)(e,{...l,children:d})}function xl({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Sl(n,r,i,e),renderState:t()}}function Sl(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=tc(a[e]);let{initial:o,animate:s}=e,c=Qa(e),l=$a(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Ja(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Ai(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Cl=e=>(t,n)=>{let r=(0,j.useContext)(sl),i=(0,j.useContext)(Fe),a=()=>xl(e,t,r,i);return n?a():I(a)},wl=Cl({scrapeMotionValuesFromProps:zo,createRenderState:dl}),Tl=Cl({scrapeMotionValuesFromProps:Xo,createRenderState:gl}),El=Symbol.for(`motionComponentSymbol`);function Dl(e,t,n){let r=(0,j.useRef)(n);(0,j.useInsertionEffect)(()=>{r.current=n});let i=(0,j.useRef)(null);return(0,j.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var Ol=(0,j.createContext)({});function kl(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Al(e,t,n,r,i,a){let{visualElement:o}=(0,j.useContext)(sl),s=(0,j.useContext)(Xc),c=(0,j.useContext)(Fe),l=(0,j.useContext)(Rc).reducedMotion,u=(0,j.useRef)(null),d=(0,j.useRef)(!1);r||=s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:l,isSVG:a}),d.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));let f=u.current,p=(0,j.useContext)(Ol);f&&!f.projection&&i&&(f.type===`html`||f.type===`svg`)&&jl(u.current,n,i,p);let m=(0,j.useRef)(!1);(0,j.useInsertionEffect)(()=>{f&&m.current&&f.update(n,c)});let h=n[Gi],g=(0,j.useRef)(!!h&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return Pe(()=>{d.current=!0,f&&(m.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),g.current&&f.animationState&&f.animationState.animateChanges())}),(0,j.useEffect)(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(h)}),!1),f.enteringChildren=void 0)}),f}function jl(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Ml(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&kl(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:l})}function Ml(e){if(e)return e.options.allowProjection===!1?Ml(e.parent):e.projection}function Nl(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&tl(r);let a=n?n===`svg`:yl(e),o=a?Tl:wl;function s(n,s){let c,l={...(0,j.useContext)(Rc),...n,layoutId:Pl(n)},{isStatic:u}=l,d=ll(n),f=o(n,u);if(!u&&Ne){Fl(l,r);let t=Il(l);c=t.MeasureLayout,d.visualElement=Al(e,f,l,i,t.ProjectionNode,a)}return(0,F.jsxs)(sl.Provider,{value:d,children:[c&&d.visualElement?(0,F.jsx)(c,{visualElement:d.visualElement,...l}):null,bl(e,n,Dl(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,j.forwardRef)(s);return c[El]=e,c}function Pl({layoutId:e}){let t=(0,j.useContext)(Me).id;return t&&e!==void 0?t+`-`+e:e}function Fl(e,t){(0,j.useContext)(Xc).strict}function Il(e){let{drag:t,layout:n}=el();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Ll(e,t){if(typeof Proxy>`u`)return Nl;let n=new Map,r=(n,r)=>Nl(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Nl(a,void 0,e,t)),n.get(a))})}var Rl=(e,t)=>t.isSVG??yl(e)?new Zo(t):new Vo(t,{allowProjection:e!==j.Fragment}),zl=class extends so{constructor(e){super(e),e.animationState||=is(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Ja(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Bl=0,Vl={animation:{Feature:zl},exit:{Feature:class extends so{constructor(){super(...arguments),this.id=Bl++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Hl(e){return{point:{x:e.pageX,y:e.pageY}}}var Ul=e=>t=>Da(t)&&e(t,Hl(t));function Wl(e,t,n,r){return Zs(e,t,Ul(n),r)}var Gl=({current:e})=>e?e.ownerDocument.defaultView:null,Kl=(e,t)=>Math.abs(e-t);function ql(e,t){let n=Kl(e.x,t.x),r=Kl(e.y,t.y);return Math.sqrt(n**2+r**2)}var Jl=new Set([`auto`,`scroll`]),Yl=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=Ql(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=ql(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=R;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Xl(t,this.transformPagePoint),L.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=Ql(e.type===`pointercancel`?this.lastMoveEventInfo:Xl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Da(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Xl(Hl(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=R;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,Ql(s,this.history)),this.removeListeners=Ke(Wl(this.contextWindow,`pointermove`,this.handlePointerMove),Wl(this.contextWindow,`pointerup`,this.handlePointerUp),Wl(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(Jl.has(e.overflowX)||Jl.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener(`scroll`,this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),L.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Tt(this.updatePoint)}};function Xl(e,t){return t?{point:t(e.point)}:e}function Zl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ql({point:e},t){return{point:e,delta:Zl(e,eu(t)),offset:Zl(e,$l(t)),velocity:tu(t,.1)}}function $l(e){return e[0]}function eu(e){return e[e.length-1]}function tu(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=eu(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ye(t)));)n--;if(!r)return{x:0,y:0};let a=Xe(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function nu(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?V(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?V(n,e,r.max):Math.min(e,n)),e}function ru(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function iu(e,{top:t,left:n,bottom:r,right:i}){return{x:ru(e.x,n,i),y:ru(e.y,t,r)}}function au(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function ou(e,t){return{x:au(e.x,t.x),y:au(e.y,t.y)}}function su(e,t){let n=.5,r=_s(e),i=_s(t);return i>r?n=qe(t.min,t.max-r,e.min):r>i&&(n=qe(e.min,e.max-i,t.min)),Re(0,1,n)}function cu(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var lu=.35;function uu(e=lu){return e===!1?e=0:e===!0&&(e=lu),{x:du(e,`left`,`right`),y:du(e,`top`,`bottom`)}}function du(e,t,n){return{min:fu(e,t),max:fu(e,n)}}function fu(e,t){return typeof e==`number`?e:e[t]||0}var pu=new WeakMap,mu=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=W(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t?(this.stopAnimation(),this.snapToCursor(Hl(e).point)):this.pauseAnimation()},a=(e,t)=>{this.stopAnimation();let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Sa(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zs(e=>{let t=this.getAxisMotionValue(e).get()||0;if($t.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=_s(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&L.postRender(()=>i(e,t)),Ui(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=gu(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&a(e,t)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>zs(e=>this.getAnimationState(e)===`paused`&&this.getAxisMotionValue(e).animation?.play()),{dragSnapToOrigin:l}=this.getProps();this.panSession=new Yl(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Gl(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&L.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!hu(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=nu(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&kl(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=iu(n.layoutBox,e):this.constraints=!1,this.elastic=uu(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&zs(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=cu(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!kl(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Oo(n,r.root,this.visualElement.getTransformPagePoint()),a=ou(r.layout.layoutBox,i);if(t){let e=t(lo(a));this.hasMutatedConstraints=!!e,e&&(a=co(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=zs(o=>{if(!hu(o,t,this.currentDirection))return;let c=s&&s[o]||{};a&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Ui(this.visualElement,e),n.start(Oi(e,n,0,t,this.visualElement,!1))}stopAnimation(){zs(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){zs(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){zs(t=>{let{drag:n}=this.getProps();if(!hu(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-V(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!kl(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};zs(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=su({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),zs(t=>{if(!hu(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(V(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;pu.set(this.visualElement,this);let e=this.visualElement.current,t=Wl(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&ka(i);n&&r&&!a&&this.start(t)}),n=()=>{let{dragConstraints:e}=this.getProps();kl(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener(`measure`,n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),L.read(n);let a=Zs(window,`resize`,()=>this.scalePositionWithinConstraints()),o=r.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(zs(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{a(),t(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=lu,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function hu(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function gu(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var _u=class extends so{constructor(e){super(e),this.removeGroupControls=We,this.removeListeners=We,this.controls=new mu(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||We}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},vu=e=>(t,n)=>{e&&L.postRender(()=>e(t,n))},yu=class extends so{constructor(){super(...arguments),this.removePointerDownListener=We}onPointerDown(e){this.session=new Yl(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Gl(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:vu(e),onStart:vu(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&L.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Wl(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},bu=!1,xu=class extends j.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),bu&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),rc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),bu=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||L.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),va.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;bu=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Su(e){let[t,n]=Kc(),r=(0,j.useContext)(Me);return(0,F.jsx)(xu,{...e,layoutGroup:r,switchLayoutGroup:(0,j.useContext)(Ol),isPresent:t,safeToRemove:n})}var Cu={pan:{Feature:yu},drag:{Feature:_u,ProjectionNode:Lc,MeasureLayout:Su}};function wu(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&L.postRender(()=>i(t,Hl(t)))}var Tu=class extends so{mount(){let{current:e}=this.node;e&&(this.unmount=Ta(e,(e,t)=>(wu(this.node,t,`Start`),e=>wu(this.node,e,`End`))))}unmount(){}},Eu=class extends so{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Ke(Zs(this.node.current,`focus`,()=>this.onFocus()),Zs(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Du(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&L.postRender(()=>i(t,Hl(t)))}var Ou=class extends so{mount(){let{current:e}=this.node;e&&(this.unmount=Fa(e,(e,t)=>(Du(this.node,t,`Start`),(e,{success:t})=>Du(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}},ku=new WeakMap,Au=new WeakMap,ju=e=>{let t=ku.get(e.target);t&&t(e)},Mu=e=>{e.forEach(ju)};function Nu({root:e,...t}){let n=e||document;Au.has(n)||Au.set(n,{});let r=Au.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Mu,{root:e,...t})),r[i]}function Pu(e,t,n){let r=Nu(t);return ku.set(e,n),r.observe(e),()=>{ku.delete(e),r.unobserve(e)}}var Fu={some:0,all:1},Iu=class extends so{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Fu[r]};return Pu(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Lu(e,t))&&this.startObserver()}unmount(){}};function Lu({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Ru={inView:{Feature:Iu},tap:{Feature:Ou},focus:{Feature:Eu},hover:{Feature:Tu}},zu={layout:{ProjectionNode:Lc,MeasureLayout:Su}},Bu=Ll({...Vl,...Ru,...Cu,...zu},Rl),Vu=k(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),Hu=k(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),Uu=k(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),Wu=k(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),Gu=k(`circle-arrow-right`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m12 16 4-4-4-4`,key:`1i9zcv`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}]]),Ku=k(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),qu=k(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Ju=k(`clock`,[[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Yu=k(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Xu=k(`feather`,[[`path`,{d:`M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z`,key:`18jl4k`}],[`path`,{d:`M16 8 2 22`,key:`vp34q`}],[`path`,{d:`M17.5 15H9`,key:`1oz8nu`}]]),Zu=k(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),Qu=k(`heart`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]),$u=k(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),ed=k(`music`,[[`path`,{d:`M9 18V5l12-2v13`,key:`1jmyc2`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}],[`circle`,{cx:`18`,cy:`16`,r:`3`,key:`1hluhg`}]]),td=k(`octagon-x`,[[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,key:`2d38gg`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),nd=k(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),rd=k(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),id=k(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),ad=k(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),od=k(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),sd=k(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),cd=k(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]);function ld(){return ld=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ld.apply(null,arguments)}var ud=!1;function dd(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function fd(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var pd=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!ud:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(fd(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=dd(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),G=`-ms-`,md=`-moz-`,K=`-webkit-`,hd=`comm`,gd=`rule`,_d=`decl`,vd=`@import`,yd=`@keyframes`,bd=`@layer`,xd=Math.abs,Sd=String.fromCharCode,Cd=Object.assign;function wd(e,t){return J(e,0)^45?(((t<<2^J(e,0))<<2^J(e,1))<<2^J(e,2))<<2^J(e,3):0}function Td(e){return e.trim()}function Ed(e,t){return(e=t.exec(e))?e[0]:e}function q(e,t,n){return e.replace(t,n)}function Dd(e,t){return e.indexOf(t)}function J(e,t){return e.charCodeAt(t)|0}function Od(e,t,n){return e.slice(t,n)}function kd(e){return e.length}function Ad(e){return e.length}function jd(e,t){return t.push(e),e}function Md(e,t){return e.map(t).join(``)}var Nd=1,Pd=1,Fd=0,Id=0,Y=0,Ld=``;function Rd(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Nd,column:Pd,length:o,return:``}}function zd(e,t){return Cd(Rd(``,null,null,``,null,null,0),e,{length:-e.length},t)}function Bd(){return Y}function Vd(){return Y=Id>0?J(Ld,--Id):0,Pd--,Y===10&&(Pd=1,Nd--),Y}function Hd(){return Y=Id<Fd?J(Ld,Id++):0,Pd++,Y===10&&(Pd=1,Nd++),Y}function Ud(){return J(Ld,Id)}function Wd(){return Id}function Gd(e,t){return Od(Ld,e,t)}function Kd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qd(e){return Nd=Pd=1,Fd=kd(Ld=e),Id=0,[]}function Jd(e){return Ld=``,e}function Yd(e){return Td(Gd(Id-1,Qd(e===91?e+2:e===40?e+1:e)))}function Xd(e){for(;(Y=Ud())&&Y<33;)Hd();return Kd(e)>2||Kd(Y)>3?``:` `}function Zd(e,t){for(;--t&&Hd()&&!(Y<48||Y>102||Y>57&&Y<65||Y>70&&Y<97););return Gd(e,Wd()+(t<6&&Ud()==32&&Hd()==32))}function Qd(e){for(;Hd();)switch(Y){case e:return Id;case 34:case 39:e!==34&&e!==39&&Qd(Y);break;case 40:e===41&&Qd(e);break;case 92:Hd();break}return Id}function $d(e,t){for(;Hd()&&e+Y!==57&&!(e+Y===84&&Ud()===47););return`/*`+Gd(t,Id-1)+`*`+Sd(e===47?e:Hd())}function ef(e){for(;!Kd(Ud());)Hd();return Gd(e,Id)}function tf(e){return Jd(nf(``,null,null,null,[``],e=qd(e),0,[0],e))}function nf(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Hd()){case 40:if(m!=108&&J(C,d-1)==58){Dd(C+=q(Yd(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Yd(v);break;case 9:case 10:case 13:case 32:C+=Xd(m);break;case 92:C+=Zd(Wd()-1,7);continue;case 47:switch(Ud()){case 42:case 47:jd(af($d(Hd(),Wd()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=kd(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=q(C,/\f/g,``)),p>0&&kd(C)-d&&jd(p>32?of(C+`;`,r,n,d-1):of(q(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(jd(S=rf(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)nf(C,t,S,S,b,a,d,s,x);else switch(f===99&&J(C,3)===110?100:f){case 100:case 108:case 109:case 115:nf(e,S,S,r&&jd(rf(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:nf(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+kd(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Vd()==125)continue}switch(C+=Sd(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(kd(C)-1)*_,_=1;break;case 64:Ud()===45&&(C+=Yd(Hd())),f=Ud(),u=d=kd(y=C+=ef(Wd())),v++;break;case 45:m===45&&kd(C)==2&&(h=0)}}return a}function rf(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=Ad(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=Od(e,d+1,d=xd(h=o[m])),y=e;_<p;++_)(y=Td(h>0?f[_]+` `+v:q(v,/&\f/g,f[_])))&&(c[g++]=y);return Rd(e,t,n,i===0?gd:s,c,l,u)}function af(e,t,n){return Rd(e,t,n,hd,Sd(Bd()),Od(e,2,-2),0)}function of(e,t,n,r){return Rd(e,t,n,_d,Od(e,0,r),Od(e,r+1,-1),r)}function sf(e,t){for(var n=``,r=Ad(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function cf(e,t,n,r){switch(e.type){case bd:if(e.children.length)break;case vd:case _d:return e.return=e.return||e.value;case hd:return``;case yd:return e.return=e.value+`{`+sf(e.children,r)+`}`;case gd:e.value=e.props.join(`,`)}return kd(n=sf(e.children,r))?e.return=e.value+`{`+n+`}`:``}function lf(e){var t=Ad(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function uf(e){return function(t){t.root||(t=t.return)&&e(t)}}var df=function(e,t,n){for(var r=0,i=0;r=i,i=Ud(),r===38&&i===12&&(t[n]=1),!Kd(i);)Hd();return Gd(e,Id)},ff=function(e,t){var n=-1,r=44;do switch(Kd(r)){case 0:r===38&&Ud()===12&&(t[n]=1),e[n]+=df(Id-1,t,n);break;case 2:e[n]+=Yd(r);break;case 4:if(r===44){e[++n]=Ud()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=Sd(r)}while(r=Hd());return e},pf=function(e,t){return Jd(ff(qd(e),t))},mf=new WeakMap,hf=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!mf.get(n))&&!r){mf.set(e,!0);for(var i=[],a=pf(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},gf=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function _f(e,t){switch(wd(e,t)){case 5103:return K+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+md+e+G+e+e;case 6828:case 4268:return K+e+G+e+e;case 6165:return K+e+G+`flex-`+e+e;case 5187:return K+e+q(e,/(\w+).+(:[^]+)/,K+`box-$1$2`+G+`flex-$1$2`)+e;case 5443:return K+e+G+`flex-item-`+q(e,/flex-|-self/,``)+e;case 4675:return K+e+G+`flex-line-pack`+q(e,/align-content|flex-|-self/,``)+e;case 5548:return K+e+G+q(e,`shrink`,`negative`)+e;case 5292:return K+e+G+q(e,`basis`,`preferred-size`)+e;case 6060:return K+`box-`+q(e,`-grow`,``)+K+e+G+q(e,`grow`,`positive`)+e;case 4554:return K+q(e,/([^-])(transform)/g,`$1`+K+`$2`)+e;case 6187:return q(q(q(e,/(zoom-|grab)/,K+`$1`),/(image-set)/,K+`$1`),e,``)+e;case 5495:case 3959:return q(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return q(q(e,/(.+:)(flex-)?(.*)/,K+`box-pack:$3`+G+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+K+e+e;case 4095:case 3583:case 4068:case 2532:return q(e,/(.+)-inline(.+)/,K+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kd(e)-1-t>6)switch(J(e,t+1)){case 109:if(J(e,t+4)!==45)break;case 102:return q(e,/(.+:)(.+)-([^]+)/,`$1`+K+`$2-$3$1`+md+(J(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Dd(e,`stretch`)?_f(q(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(J(e,t+1)!==115)break;case 6444:switch(J(e,kd(e)-3-(~Dd(e,`!important`)&&10))){case 107:return q(e,`:`,`:`+K)+e;case 101:return q(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+K+(J(e,14)===45?`inline-`:``)+`box$3$1`+K+`$2$3$1`+G+`$2box$3`)+e}break;case 5936:switch(J(e,t+11)){case 114:return K+e+G+q(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return K+e+G+q(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return K+e+G+q(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return K+e+G+e+e}return e}var vf=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case _d:e.return=_f(e.value,e.length);break;case yd:return sf([zd(e,{value:q(e.value,`@`,`@`+K)})],r);case gd:if(e.length)return Md(e.props,function(t){switch(Ed(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return sf([zd(e,{props:[q(t,/:(read-\w+)/,`:`+md+`$1`)]})],r);case`::placeholder`:return sf([zd(e,{props:[q(t,/:(plac\w+)/,`:`+K+`input-$1`)]}),zd(e,{props:[q(t,/:(plac\w+)/,`:`+md+`$1`)]}),zd(e,{props:[q(t,/:(plac\w+)/,G+`input-$1`)]})],r)}return``})}}],yf=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||vf,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[hf,gf],l,u=[cf,uf(function(e){l.insert(e)})],d=lf(c.concat(r,u)),f=function(e){return sf(tf(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new pd({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},bf=!0;function xf(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var Sf=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||bf===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},Cf=function(e,t,n){Sf(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function wf(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}T();var Tf=!1,Ef=/[A-Z]|^ms/g,Df=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Of=function(e){return e.charCodeAt(1)===45},kf=function(e){return e!=null&&typeof e!=`boolean`},Af=f(function(e){return Of(e)?e:e.replace(Ef,`-$&`).toLowerCase()}),jf=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(Df,function(e,t,n){return If={name:t,styles:n,next:If},t})}return b[e]!==1&&!Of(e)&&typeof t==`number`&&t!==0?t+`px`:t},Mf=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;function Nf(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return If={name:i.name,styles:i.styles,next:If},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)If={name:o.name,styles:o.styles,next:If},o=o.next;return a.styles+`;`}return Pf(e,t,n);case`function`:if(e!==void 0){var s=If,c=n(e);return If=s,Nf(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function Pf(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Nf(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:kf(s)&&(r+=Af(a)+`:`+jf(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&Tf)throw Error(Mf);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)kf(o[c])&&(r+=Af(a)+`:`+jf(a,o[c])+`;`);else{var l=Nf(e,t,o);switch(a){case`animation`:case`animationName`:r+=Af(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}var Ff=/label:\s*([^\s;{]+)\s*(;|$)/g,If;function Lf(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;If=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=Nf(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=Nf(n,t,e[o]),r&&(i+=a[o]);Ff.lastIndex=0;for(var s=``,c;(c=Ff.exec(i))!==null;)s+=`-`+c[1];return{name:wf(i)+s,styles:i,next:If}}var Rf=function(e){return e()},zf=j.useInsertionEffect?j.useInsertionEffect:!1,Bf=zf||Rf;zf||j.useLayoutEffect;var Vf=j.createContext(typeof HTMLElement<`u`?yf({key:`css`}):null);Vf.Provider;var Hf=function(e){return(0,j.forwardRef)(function(t,n){return e(t,(0,j.useContext)(Vf),n)})},Uf=j.createContext({});({}).hasOwnProperty,d();var Wf=!1,Gf=_,Kf=function(e){return e!==`theme`},qf=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?Gf:Kf},Jf=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},Yf=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Sf(t,n,r),Bf(function(){return Cf(t,n,r)}),null},Xf=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=Jf(t,n,r),c=s||qf(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=Hf(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=j.useContext(Uf)}typeof e.className==`string`?a=xf(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=Lf(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?qf(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),j.createElement(j.Fragment,null,j.createElement(Yf,{cache:t,serialized:m,isStringTag:typeof r==`string`}),j.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,`toString`,{value:function(){return o===void 0&&Wf?`NO_COMPONENT_SELECTOR`:`.`+o}}),h.withComponent=function(t,r){return e(t,ld({},n,r,{shouldForwardProp:Jf(h,r,!0)})).apply(void 0,d)},h}},Zf=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),Qf=Xf.bind(null);Zf.forEach(function(e){Qf[e]=Qf(e)});const $f=Qf.div({position:`relative`,display:`flex`,height:`100vh`,flexDirection:`column`,backgroundColor:`transparent`}),ep=y.div`
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
`,tp=y(Bu.div)`
  ${{position:`fixed`,bottom:`0`,left:`0`,top:`0`,zIndex:`1000`,display:`flex`,width:`150px`,flexDirection:`column`,borderTopRightRadius:`0.5rem`,borderBottomRightRadius:`0.5rem`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}}
  background-color: ${e=>v(e.theme.BACKGROUND,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
`,np=y.div`
  ${{flex:`none`,padding:`1.25rem`}}
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  background-color: ${e=>e.theme.OFFSET};
`,rp=y.h2`
  ${{margin:`0`,marginBottom:`0.5rem`,fontSize:`1.125rem`}}
  color: ${e=>e.theme.PRIMARY};
`,ip=y.p`
  ${{margin:`0`,fontSize:`0.875rem`}}
  color: ${e=>v(e.theme.PRIMARY,.7)};
`,ap=Qf.div({flex:`1 1 0%`}),op=y.nav`
  ${{flex:`none`,paddingLeft:`0`,paddingRight:`0`,paddingBottom:`50px`,paddingTop:`0.5rem`}}
  border-top: 1px solid ${e=>e.theme.BORDER};
`,sp=y.button`
  ${{width:`100%`,cursor:`pointer`,borderStyle:`none`,paddingLeft:`1.25rem`,paddingRight:`1.25rem`,paddingTop:`0.75rem`,paddingBottom:`0.75rem`,textAlign:`left`,fontSize:`15px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isActive?e.theme.OFFSET:`transparent`};
  color: ${e=>e.theme.PRIMARY};
  font-weight: ${e=>e.$isActive?600:400};
  
  &:hover {
    background-color: ${e=>v(e.theme.OFFSET,.5)};
  }
`,cp=Qf.div({position:`fixed`,bottom:`0`,left:`0`,right:`0`,top:`0`,zIndex:`999`,backgroundColor:`rgba(0, 0, 0, 0.6)`}),lp=Qf.div({position:`fixed`,bottom:`2px`,left:`2px`,zIndex:`1000`,display:`flex`,height:`3rem`,width:`3rem`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}),up=y.button`
  ${{position:`fixed`,zIndex:`1001`,display:`flex`,height:`2.5rem`,width:`2.5rem`,cursor:`pointer`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-shadow":`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,"--tw-shadow-colored":`0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color)`,boxShadow:`var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)`}}
  background-color: ${e=>v(e.theme.BACKGROUND,.75)};
  border: 2px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
`,dp=({isOpen:e,currentPage:t,onToggle:n,onNavigate:r})=>{let{theme:i}=je(),a=M(e=>e.playerData),o=String(a?.role||``).toUpperCase()===`GM`;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Yc,{children:e&&(0,F.jsxs)(tp,{theme:i,initial:{x:-300},animate:{x:0},exit:{x:-300},transition:{type:`tween`,duration:.3},style:{boxShadow:`4px 0 12px rgba(0, 0, 0, 0.15)`},children:[(0,F.jsxs)(np,{theme:i,children:[(0,F.jsx)(rp,{theme:i,children:`Forge!`}),(0,F.jsx)(ip,{theme:i,children:`Alpha Testing!`})]}),(0,F.jsx)(ap,{}),(0,F.jsxs)(op,{theme:i,children:[(0,F.jsx)(sp,{theme:i,$isActive:t===`ForgeMain`,onClick:()=>r(`ForgeMain`),children:`Main`}),(0,F.jsx)(sp,{theme:i,$isActive:t===`Party`,onClick:()=>r(`Party`),children:`Party`}),(0,F.jsx)(sp,{theme:i,$isActive:t===`ChatLog`,onClick:()=>r(`ChatLog`),children:`System Log`}),o&&(0,F.jsx)(sp,{theme:i,$isActive:t===`System`,onClick:()=>r(`System`),children:`System`}),o&&(0,F.jsx)(sp,{theme:i,$isActive:t===`Settings`,onClick:()=>r(`Settings`),children:`Settings`})]})]})}),e&&(0,F.jsx)(cp,{onClick:n}),(0,F.jsx)(lp,{children:(0,F.jsx)(up,{theme:i,onClick:n,children:(0,F.jsx)(me,{size:24})})})]})},fp=y.div`
  padding: 20px;
  color: ${e=>e.theme.PRIMARY};
  min-height: 100vh;
`,pp=y.h1`
  color: ${e=>e.theme.PRIMARY};
  background-color: ${e=>e.theme.OFFSET};
  padding: 2px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  font-variant: small-caps;
`,mp=y.div`
  background-color: ${e=>v(e.theme.BACKGROUND,.3)};
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
`;const hp=y.button`
  background-color: ${e=>v(e.theme.OFFSET,e.variant===`secondary`?.5:.75)};
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
    background-color: ${e=>v(e.theme.OFFSET,.9)};
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
`,gp=y.input`
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px 8px;
  font-size: 14px;
  width: 100%;
  
  &::placeholder {
    color: ${e=>v(e.theme.PRIMARY,.5)};
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
    color: ${e=>v(e.theme.PRIMARY,.5)};
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
  background-color: ${e=>v(e.theme.OFFSET,.75)};
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
    background-color: ${e=>v(e.theme.OFFSET,.2)};
  }
`;var _p=y.button`
  ${{position:`relative`,display:`inline-flex`,height:`1.5rem`,width:`3rem`,alignItems:`center`,borderRadius:`9999px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isOn?v(e.theme.OFFSET,.8):v(e.theme.BORDER,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${e=>v(e.theme.OFFSET,.3)};
  }
  
  &::after {
    content: '';
    ${{display:`inline-block`,height:`1rem`,width:`1rem`,transform:`translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,borderRadius:`9999px`,transitionProperty:`transform`}}
    background-color: ${e=>e.theme.PRIMARY};
    ${e=>e.$isOn?`transform: translateX(1.375rem);`:`transform: translateX(0.25rem);`}
  }
`;const X=({label:e,isOn:t,onChange:n})=>{let{theme:r}=je();return(0,F.jsx)(_p,{theme:r,$isOn:t,onClick:()=>{let r=!t;O.log(`${e}: ${r}`),n(r)},role:`switch`,"aria-checked":t,"aria-label":e})};var vp=y.h2`
  ${{marginBottom:`1rem`,paddingBottom:`0.5rem`,fontSize:`1.25rem`,fontWeight:`600`}}
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
`,Z=y.div`
  ${{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`,":last-child":{borderBottomWidth:`0`}}}
  color: ${e=>e.theme.PRIMARY};
`,Q=y.label`
  ${{flex:`1 1 0%`,cursor:`pointer`,textAlign:`left`,fontSize:`1rem`}}
  color: ${e=>e.theme.PRIMARY};
`,yp=y.div`
  ${{marginLeft:`1rem`,display:`flex`,alignItems:`center`,gap:`0.75rem`}}
  color: ${e=>e.theme.PRIMARY};
`,bp=y.label`
  ${{fontSize:`0.875rem`}}
  color: ${e=>e.theme.PRIMARY};
`,xp=y.input`
  ${{borderRadius:`0.25rem`,paddingLeft:`0.75rem`,paddingRight:`0.75rem`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`,fontSize:`0.875rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  color: ${e=>e.theme.PRIMARY};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  width: 50%;
  
  &::placeholder {
    color: ${e=>v(e.theme.PRIMARY,.5)};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.OFFSET};
    background-color: rgba(0, 0, 0, 0.6);
  }
`,Sp=y.select`
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
`,Cp=Qf.div({marginTop:`0.5rem`,display:`flex`,justifyContent:`center`,gap:`0.75rem`});const wp=()=>{let{theme:e}=je();M(e=>e.roomMetadata);let t=M(e=>e.sceneMetadata),n=M(e=>e.items),r=M(e=>e.cacheReady),[i,a]=(0,j.useState)(!1),[o,s]=(0,j.useState)(!1),[c,l]=(0,j.useState)(`D20`),[u,d]=(0,j.useState)(!1),[f,p]=(0,j.useState)(!1),[g,_]=(0,j.useState)(!1),[v,y]=(0,j.useState)(!1),[b,x]=(0,j.useState)(!1),[S,C]=(0,j.useState)(`bottom`),[w,T]=(0,j.useState)(!1),[ee,D]=(0,j.useState)(!1),[te,k]=(0,j.useState)(!1),[re,ie]=(0,j.useState)(!1),[ae,oe]=(0,j.useState)(!1),[se,ce]=(0,j.useState)(!1),[le,ue]=(0,j.useState)(!1),[fe,pe]=(0,j.useState)(!1),[me,ge]=(0,j.useState)(!1),[_e,A]=(0,j.useState)(!1),[ve,ye]=(0,j.useState)(!1),[be,xe]=(0,j.useState)(``),[Se,Ce]=(0,j.useState)(!1),we=(0,j.useRef)(null),N=t;(0,j.useEffect)(()=>{if(r)if(N[h.POPCORN_INITIATIVE]!==void 0&&a(N[h.POPCORN_INITIATIVE]),N[h.REVERSE_INITIATIVE]!==void 0&&s(N[h.REVERSE_INITIATIVE]),N[h.DICE_RANGE]!==void 0&&l(N[h.DICE_RANGE]),N[h.SHOW_CARD_ACCESS]!==void 0&&d(N[h.SHOW_CARD_ACCESS]),N[h.SHOW_PLAYER_VIEW]!==void 0&&p(N[h.SHOW_PLAYER_VIEW]),N[h.SHOW_OWNER_ONLY_EDIT]!==void 0&&y(N[h.SHOW_OWNER_ONLY_EDIT]),N[h.SHOW_NON_PARTY_UNITS]!==void 0&&_(N[h.SHOW_NON_PARTY_UNITS]),N[h.SHOW_HP_BARS]!==void 0&&x(N[h.SHOW_HP_BARS]),N[h.HP_BAR_ORIENTATION]!==void 0&&C(N[h.HP_BAR_ORIENTATION]),N[h.SHOW_HP_NUMBERS]!==void 0&&T(N[h.SHOW_HP_NUMBERS]),N[h.SHOW_DEATH_EFFECT]!==void 0&&D(N[h.SHOW_DEATH_EFFECT]),N[h.SHOW_NAMES]!==void 0&&k(N[h.SHOW_NAMES]),N[h.SHOW_TURN_EFFECT]!==void 0&&ie(N[h.SHOW_TURN_EFFECT]),N[h.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&oe(N[h.USE_DESCRIPTIVE_DUPLICATES]),N[h.ENABLE_RUMBLE]!==void 0&&ce(N[h.ENABLE_RUMBLE]),N[h.ENABLE_BONES]!==void 0&&ue(N[h.ENABLE_BONES]),N[h.ENABLE_DICE_PLUS]!==void 0&&pe(N[h.ENABLE_DICE_PLUS]),N[h.ENABLE_OBR_NOTIFICATION]!==void 0&&ge(N[h.ENABLE_OBR_NOTIFICATION]),N[h.SHOW_NOTIFICATION_TO_ALL]!==void 0&&A(N[h.SHOW_NOTIFICATION_TO_ALL]),N[h.ENABLE_DISCORD_LOGGING]!==void 0&&ye(N[h.ENABLE_DISCORD_LOGGING]),N[h.DISCORD_URL]!==void 0&&xe(N[h.DISCORD_URL]),N[h.ENABLE_CONSOLE_LOG]!==void 0){let e=N[h.ENABLE_CONSOLE_LOG];Ce(e),O.setEnabled(e)}else Ce(!1)},[r,N]);let P=async(e,t)=>{await E.scene.setMetadata({[e]:t})};return(0,F.jsx)(Bu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:(0,F.jsxs)(fp,{theme:e,children:[(0,F.jsx)(pp,{theme:e,children:`Settings`}),(0,F.jsxs)(mp,{theme:e,children:[(0,F.jsx)(vp,{theme:e,children:`Collection Management`}),(0,F.jsxs)(Cp,{children:[(0,F.jsx)(hp,{theme:e,onClick:async()=>{try{let e=await ne(),t=JSON.stringify(e,null,2),n=new Blob([t],{type:`text/plain;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`forge-collection-${new Date().toISOString().slice(0,10)}.txt`,i.click(),URL.revokeObjectURL(r),alert(`Collection export complete. ${e.length} record(s) written.`)}catch(e){O.log(`Collection export failed`,e),alert(`Collection export failed. See console log for details.`)}},children:`Export`}),(0,F.jsx)(hp,{theme:e,onClick:()=>{window.confirm(`Import will overwrite duplicate records that share the same Name and Author. Continue?`)&&we.current?.click()},children:`Import`})]}),(0,F.jsx)(`input`,{ref:we,type:`file`,accept:`.txt,.json,text/plain,application/json`,onChange:async e=>{let t=e.target.files?.[0];if(t)try{let e=await t.text(),n=JSON.parse(e);if(!Array.isArray(n)){alert(`Import file must contain a JSON array of collection records.`);return}let r=await de(n);alert(`Collection import complete. Created: ${r.created}, Updated: ${r.updated}, Skipped: ${r.skipped}.`)}catch(e){O.log(`Collection import failed`,e),alert(`Collection import failed. Ensure the file is valid JSON and try again.`)}finally{e.target.value=``}},style:{display:`none`}})]}),(0,F.jsxs)(mp,{theme:e,children:[(0,F.jsx)(vp,{theme:e,children:`List Controls`}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Reverse Initiative`}),(0,F.jsx)(X,{label:`Reverse Initiative`,isOn:o,onChange:async e=>{s(e),await P(h.REVERSE_INITIATIVE,e),e&&i&&(a(!1),await P(h.POPCORN_INITIATIVE,!1))}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Popcorn Initiative`}),(0,F.jsx)(X,{label:`Popcorn Initiative`,isOn:i,onChange:async e=>{a(e),await P(h.POPCORN_INITIATIVE,e),e&&o&&(s(!1),await P(h.REVERSE_INITIATIVE,!1))}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Initiative Die: `}),(0,F.jsx)(xp,{theme:e,type:`text`,value:c,onChange:async e=>{let t=e.target.value;l(t),await P(h.DICE_RANGE,t),O.log(`Dice Range:`,t)},placeholder:`D20`,maxLength:3})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show Card Column`}),(0,F.jsx)(X,{label:`Show Stat Block Access`,isOn:u,onChange:async e=>{d(e),await P(h.SHOW_CARD_ACCESS,e)}})]})]}),(0,F.jsxs)(mp,{theme:e,children:[(0,F.jsx)(vp,{theme:e,children:`Player Controls`}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show Player View`}),(0,F.jsx)(X,{label:`Show Player View`,isOn:f,onChange:async e=>{p(e),await P(h.SHOW_PLAYER_VIEW,e)}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show Non-Party Units`}),(0,F.jsx)(X,{label:`Show Non-Party Units`,isOn:g,onChange:async e=>{_(e),await P(h.SHOW_NON_PARTY_UNITS,e)}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`GM/Owner Only Edit`}),(0,F.jsx)(X,{label:`Owner Only Edit`,isOn:v,onChange:async e=>{y(e),await P(h.SHOW_OWNER_ONLY_EDIT,e)}})]})]}),(0,F.jsxs)(mp,{theme:e,children:[(0,F.jsx)(vp,{theme:e,children:`Game Controls`}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show HP Bars on tokens`}),(0,F.jsx)(X,{label:`Show HP Bars on tokens`,isOn:b,onChange:async e=>{x(e),await P(h.SHOW_HP_BARS,e),e&&w&&(T(!1),await P(h.SHOW_HP_NUMBERS,!1)),e&&N[h.HP_BAR_ORIENTATION]===void 0&&(C(`bottom`),await P(h.HP_BAR_ORIENTATION,`bottom`))}})]}),(b||w)&&(0,F.jsxs)(yp,{theme:e,children:[(0,F.jsx)(bp,{theme:e,children:`Orientation: `}),(0,F.jsxs)(Sp,{theme:e,value:S,onChange:async e=>{let t=e.target.value;C(t),await P(h.HP_BAR_ORIENTATION,t)},children:[(0,F.jsx)(`option`,{value:`top`,children:`Top`}),(0,F.jsx)(`option`,{value:`bottom`,children:`Bottom`}),(0,F.jsx)(`option`,{value:`left`,children:`Left`}),(0,F.jsx)(`option`,{value:`right`,children:`Right`})]})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show HP Numbers on tokens`}),(0,F.jsx)(X,{label:`Show HP Numbers on tokens`,isOn:w,onChange:async e=>{T(e),await P(h.SHOW_HP_NUMBERS,e),e&&b&&(x(!1),await P(h.SHOW_HP_BARS,!1)),e&&N[h.HP_BAR_ORIENTATION]===void 0&&(C(`bottom`),await P(h.HP_BAR_ORIENTATION,`bottom`))}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show Death Effect`}),(0,F.jsx)(X,{label:`Show Death Effect`,isOn:ee,onChange:async e=>{D(e),await P(h.SHOW_DEATH_EFFECT,e)}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show Names on Tokens`}),(0,F.jsx)(X,{label:`Show names on tokens`,isOn:te,onChange:async e=>{k(e),await P(h.SHOW_NAMES,e);let t=n.filter(e=>e.metadata[m.ON_LIST]===!0);e?(O.log(`Showing names on tokens`),await E.scene.items.updateItems(t,e=>{for(let t of e){let e=t.metadata[m.UNIT_NAME],n=t;e&&n.text&&(n.text.plainText=String(e))}})):(O.log(`Hiding names on tokens`),await E.scene.items.updateItems(t,e=>{for(let t of e){let e=t;e.text&&(e.text.plainText=``)}}))}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show Turn Effect`}),(0,F.jsx)(X,{label:`Show Turn Effect`,isOn:re,onChange:async e=>{ie(e),await P(h.SHOW_TURN_EFFECT,e)}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Use Descriptive Names`}),(0,F.jsx)(X,{label:`Use Descriptive Duplicates Names`,isOn:ae,onChange:async e=>{oe(e),await P(h.USE_DESCRIPTIVE_DUPLICATES,e)}})]})]}),(0,F.jsxs)(mp,{theme:e,children:[(0,F.jsx)(vp,{theme:e,children:`Dice Controls`}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Enable Rumble! Integration`}),(0,F.jsx)(X,{label:`Enable Rumble! Integration`,isOn:se,onChange:async e=>{ce(e),await P(h.ENABLE_RUMBLE,e),e&&(ue(!1),pe(!1),await P(h.ENABLE_BONES,!1),await P(h.ENABLE_DICE_PLUS,!1))}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Enable Bones! Integration`}),(0,F.jsx)(X,{label:`Enable Bones! Integration`,isOn:le,onChange:async e=>{ue(e),await P(h.ENABLE_BONES,e),e&&(ce(!1),pe(!1),await P(h.ENABLE_RUMBLE,!1),await P(h.ENABLE_DICE_PLUS,!1))}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Enable Dice+ Integration`}),(0,F.jsx)(X,{label:`Enable Dice+ Integration`,isOn:fe,onChange:async e=>{pe(e),await P(h.ENABLE_DICE_PLUS,e),e&&(ce(!1),ue(!1),await P(h.ENABLE_RUMBLE,!1),await P(h.ENABLE_BONES,!1))}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Enable OBR Notification`}),(0,F.jsx)(X,{label:`Enable OBR Notification`,isOn:me,onChange:async e=>{ge(e),await P(h.ENABLE_OBR_NOTIFICATION,e)}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show Results to All`}),(0,F.jsx)(X,{label:`Show Results to All`,isOn:_e,onChange:async e=>{A(e),await P(h.SHOW_NOTIFICATION_TO_ALL,e)}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Enable Discord Logging`}),(0,F.jsx)(X,{label:`Enable Discord Logging`,isOn:ve,onChange:async e=>{if(e&&!he(be.trim())){alert(`Please enter a valid Discord webhook URL before enabling Discord logging.`),ye(!1),await P(h.ENABLE_DISCORD_LOGGING,!1);return}ye(e),await P(h.ENABLE_DISCORD_LOGGING,e)}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(bp,{theme:e,children:`Discord Url: `}),(0,F.jsx)(xp,{theme:e,type:`text`,value:be,onChange:async e=>{let t=e.target.value,n=t.trim();xe(t),await P(h.DISCORD_URL,n),O.log(`Discord URL:`,n)},placeholder:`https://discord.com/api/webhooks/...`,maxLength:200})]})]}),(0,F.jsxs)(mp,{theme:e,children:[(0,F.jsx)(vp,{theme:e,children:`Other`}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Enable Console Log`}),(0,F.jsx)(X,{label:`Enable Console Log`,isOn:Se,onChange:async e=>{Ce(e),O.setEnabled(e),await P(h.ENABLE_CONSOLE_LOG,e)}})]})]})]})})};var Tp=y.div`
  ${{display:`flex`,height:`100%`,flexDirection:`column`,padding:`1rem`}}
`,Ep=y.div`
  ${{flex:`1 1 0%`,overflowY:`auto`,borderRadius:`0.5rem`,borderWidth:`2px`,"--tw-border-opacity":`1`,borderColor:`rgb(255 255 255 / var(--tw-border-opacity, 1))`,padding:`0.5rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  margin: 10px;
  white-space: break-spaces;
  word-wrap: break-word;
  margin-bottom: 50px;
`,Dp=y.div`
  ${{marginBottom:`0.5rem`,textAlign:`left`}}
`,Op=y.span`
  ${{marginRight:`0.5rem`,fontSize:`0.75rem`,"--tw-text-opacity":`1`,color:`rgb(203 213 224 / var(--tw-text-opacity, 1))`}}
`,kp=y.span`
  ${{fontSize:`0.875rem`,"--tw-text-opacity":`1`,color:`rgb(255 255 255 / var(--tw-text-opacity, 1))`}}
`;const Ap=()=>{let e=P(e=>e.messages),t=(0,j.useRef)(null),{theme:n}=je();return(0,j.useEffect)(()=>{t.current?.scrollIntoView({behavior:`smooth`})},[e]),(0,F.jsx)(Bu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,F.jsxs)(Tp,{children:[(0,F.jsx)(pp,{theme:n,children:`System Log`}),(0,F.jsxs)(Ep,{children:[e.map(e=>(0,F.jsxs)(Dp,{children:[(0,F.jsx)(Op,{children:e.timestamp}),(0,F.jsx)(kp,{children:e.text})]},e.id)),(0,F.jsx)(`div`,{ref:t})]})]})})};var jp=y.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,Mp=y.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${e=>e.theme.BACKGROUND};
  border: 3px solid ${e=>e.theme.BORDER};
  border-radius: 8px;
  padding: 25px;
  z-index: 10000;
  min-width: ${e=>e.$minWidth||`300px`};
  max-width: ${e=>e.$maxWidth||`500px`};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
`,Np=y.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 15px 0;
  font-size: 18px;
`,Pp=y.div`
  margin: 0 0 20px 0;
`,Fp=y.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;const Ip=({isOpen:e,title:t,onClose:n,children:r,actions:i,closeOnOverlayClick:a=!0,minWidth:o,maxWidth:s})=>{let{theme:c}=je();return e?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(jp,{onClick:a?n:void 0}),(0,F.jsxs)(Mp,{theme:c,$minWidth:o,$maxWidth:s,onClick:e=>e.stopPropagation(),children:[t&&(0,F.jsx)(Np,{theme:c,children:t}),(0,F.jsx)(Pp,{children:r}),i&&(0,F.jsx)(Fp,{children:i})]})]}):null},Lp=`buff_effect_one`,Rp=`debuff_effect_one`,zp=[{value:`buff_effect_one`,label:`Buff Effect One`},{value:`buff_effect_two`,label:`Buff Effect Two`}],Bp=[{value:`debuff_effect_one`,label:`Debuff Effect One`},{value:`debuff_effect_two`,label:`Debuff Effect Two`}],Vp=e=>zp.some(t=>t.value===e),Hp=e=>Bp.some(t=>t.value===e),Up=e=>{switch(e){case`buff_effect_two`:return`
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
`}},Wp=e=>{switch(e){case`debuff_effect_two`:return`
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
`}};var Gp=te.EXTENSIONID,Kp=`com.battle-system.forge`;const $={CURRENT_THEME:`${Gp}/CurrentTheme`,CURRENT_CARD:`${Gp}/CurrentCard`,CURRENT_LIST:`${Gp}/CurrentList`,CURRENT_ATTR:`${Gp}/CurrentAttr`,SYSTEM_NAME:`${Gp}/SystemName`,IMPORT_DATE:`${Gp}/ImportDate`};var qp=(e,t)=>e instanceof Error&&e.message?e.message:t,Jp=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Imported ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Imported ${t} is not a JSON array`);return n}throw Error(`Imported ${t} has invalid type`)},Yp=y.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Xp=y.div`
  background-color: ${e=>v(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`,Zp=y.h2`
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  padding: 12px 15px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 400;
`,Qp=y.p`
  color: ${e=>v(e.theme.PRIMARY,.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`,$p=y.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 15px;
`,em=y.div`
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
`,tm=y.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.theme.PRIMARY};
  margin-top: 5px;
`,nm=y.div`
  margin-top: 16px;
  background-color: ${e=>v(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 14px;
`,rm=y.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 10px 0;
  font-size: 15px;
`,im=y.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`,am=y.label`
  color: ${e=>e.theme.PRIMARY};
  min-width: 84px;
  font-size: 13px;
`,om=y.select`
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
`,sm=y.div`
  background-color: ${()=>v(`#FF0000`,.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,cm=y.div`
  background-color: ${()=>v(`#00FF00`,.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,lm=y.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`,um=y.p`
  color: ${e=>v(e.theme.PRIMARY,.9)};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,dm=y.div`
  margin-top: 30px;
`,fm=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,pm=y.div`
  background-color: ${e=>v(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,mm=y.div`
  flex: 1;
`,hm=y.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`,gm=y.div`
  color: ${e=>v(e.theme.PRIMARY,.7)};
  font-size: 13px;
  font-style: italic;
`,_m=y.div`
  display: flex;
  gap: 8px;
`,vm=y.button`
  background-color: ${e=>e.$variant===`danger`?v(`#FF0000`,.2):v(e.theme.OFFSET,.5)};
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
    background-color: ${e=>e.$variant===`danger`?v(`#FF0000`,.3):e.theme.OFFSET};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,ym={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}};const bm=()=>{let{theme:e,updateThemeFromSystem:t}=je(),n=M(e=>e.sceneMetadata),[r,i]=(0,j.useState)(``),[a,o]=(0,j.useState)(!1),[s,c]=(0,j.useState)(null),[l,u]=(0,j.useState)(null),[d,f]=(0,j.useState)(``),[p,m]=(0,j.useState)(null),[g,_]=(0,j.useState)(null),[y,b]=(0,j.useState)([]),[x,S]=(0,j.useState)(``),[C,T]=(0,j.useState)(``),[ee,D]=(0,j.useState)(Lp),[te,ne]=(0,j.useState)(Rp),[k,re]=(0,j.useState)([]),[ie,ae]=(0,j.useState)(!1),[se,le]=(0,j.useState)(null),[ue,de]=(0,j.useState)(``);(0,j.useEffect)(()=>{fe(),he()},[n]),(0,j.useEffect)(()=>{fe(),he()},[n]);let fe=()=>{try{let e=n[$.CURRENT_THEME],t=n[$.CURRENT_ATTR],r=n[$.SYSTEM_NAME]||w.name,i=n[$.IMPORT_DATE]||null,a=n[h.HP_CURRENT_BID],o=n[h.HP_MAX_BID],s=n[h.BUFF_VISUAL_PRESET],c=n[h.DEBUFF_VISUAL_PRESET],l=Array.isArray(t)?t:[];f(r),m(i),_(e||null),b(l),S(a||``),T(o||``),D(Vp(s)?s:Lp),ne(Hp(c)?c:Rp)}catch(e){O.error(`Error loading system from cache:`,e)}},pe=async(e,t)=>{await E.scene.setMetadata({[e]:t})},me=y.filter(e=>e.attr_type===`numb`),he=()=>{try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(n&&n.startsWith(`${Kp}.`)&&n.endsWith(`.backup`)){let t=localStorage.getItem(n);if(t){let n=JSON.parse(t);e.push(n)}}}e.sort((e,t)=>new Date(t.backupDate).getTime()-new Date(e.backupDate).getTime()),re(e)}catch(e){O.error(`Error loading backups:`,e)}},ge=async e=>{try{let e=n[$.CURRENT_THEME],t=n[$.CURRENT_CARD],r=n[$.CURRENT_LIST],i=n[$.CURRENT_ATTR],a=n[$.SYSTEM_NAME]||w.name;if(!e||!Array.isArray(t)||!Array.isArray(r)||!Array.isArray(i)){O.warn(`Cannot create backup: system data incomplete`);return}let o={name:a,backupDate:new Date().toISOString(),theme_primary:e.primary,theme_offset:e.offset,theme_background:e.background,theme_border:e.border,background_url:e.background_url,card_layout:t,list_layout:r,attributes:i},s=`${Kp}.${a}.backup`;localStorage.setItem(s,JSON.stringify(o)),O.log(`Backup created for ${a}`),he()}catch(e){throw O.error(`Error creating backup:`,e),e}},_e=e=>{try{let t=`${Kp}.${e}.backup`;localStorage.removeItem(t),O.log(`Backup deleted for ${e}`),he(),u(`Backup for "${e}" deleted successfully`)}catch(e){O.error(`Error deleting backup:`,e),c(`Failed to delete backup`)}},A=(e,t)=>{de(e),le(()=>t),ae(!0)},ve=async()=>{ae(!1),se&&(await se(),le(null))},ye=()=>{ae(!1),le(null),de(``)},be=async()=>{if(!r.trim()){c(`Please enter a share_id`);return}A(`This will overwrite your current system data. A backup of your current system will be saved to local storage. Do you want to continue?`,async()=>{await xe()})},xe=async()=>{o(!0),c(null),u(null);try{let{data:e,error:n}=await ce.from(`v_bs_system_with_attributes`).select(`*`).eq(`share_id`,r).maybeSingle();if(n)throw n;if(!e){c(`No system found with that share_id`),o(!1);return}let a=e,s=Jp(a.card_layout,`card_layout`),l=Jp(a.list_layout,`list_layout`),p=a.attributes;if(!Array.isArray(p))throw Error(`Imported attributes are not a valid array`);await ge(d);let h={primary:a.theme_primary,offset:a.theme_offset,background:a.theme_background,border:a.theme_border,background_url:a.background_url};await E.scene.setMetadata({[$.CURRENT_THEME]:h,[$.CURRENT_CARD]:s,[$.CURRENT_LIST]:l,[$.CURRENT_ATTR]:p,[$.SYSTEM_NAME]:a.name,[$.IMPORT_DATE]:new Date().toISOString()}),f(a.name),m(new Date().toISOString()),_(h),t(h.primary,h.offset,h.background,h.border,h.background_url),u(`System "${a.name}" loaded successfully! Backup created.`),i(``),O.log(`System loaded:`,a.name)}catch(e){O.error(`Error fetching system:`,e),c(qp(e,`An error occurred while fetching the system`))}finally{o(!1)}},Se=async e=>{A(`This will restore the system "${e.name}" from backup. A backup of your current system will be created. Do you want to continue?`,async()=>{await Ce(e)})},Ce=async e=>{o(!0),c(null),u(null);try{await ge(d);let n={primary:e.theme_primary,offset:e.theme_offset,background:e.theme_background,border:e.theme_border,background_url:e.background_url};if(!Array.isArray(e.card_layout)||!Array.isArray(e.list_layout)||!Array.isArray(e.attributes))throw Error(`Backup data is invalid`);await E.scene.setMetadata({[$.CURRENT_THEME]:n,[$.CURRENT_CARD]:e.card_layout,[$.CURRENT_LIST]:e.list_layout,[$.CURRENT_ATTR]:e.attributes,[$.SYSTEM_NAME]:e.name,[$.IMPORT_DATE]:new Date().toISOString()}),f(e.name),m(new Date().toISOString()),_(n),t(n.primary,n.offset,n.background,n.border,n.background_url),u(`System "${e.name}" restored from backup successfully!`),O.log(`System restored from backup:`,e.name)}catch(e){O.error(`Error restoring backup:`,e),c(`Failed to restore system from backup`)}finally{o(!1)}},we=async()=>{o(!0),c(null),u(null);try{let e={primary:w.theme_primary,offset:w.theme_offset,background:w.theme_background,border:w.theme_border,background_url:w.background_url};await E.scene.setMetadata({[$.CURRENT_THEME]:e,[$.CURRENT_CARD]:w.card_layout,[$.CURRENT_LIST]:w.list_layout,[$.CURRENT_ATTR]:w.attributes,[$.SYSTEM_NAME]:w.name,[$.IMPORT_DATE]:null}),f(w.name),m(null),_(e),t(e.primary,e.offset,e.background,e.border,e.background_url),u(`Reset to default system successfully!`)}catch(e){c(`Failed to reset to default system`),O.error(`Error resetting to default:`,e)}finally{o(!1)}},N=e=>e?new Date(e).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):null;return(0,F.jsxs)(Bu.div,{variants:ym,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,F.jsxs)(fp,{theme:e,children:[(0,F.jsx)(pp,{theme:e,children:`System Configuration`}),(0,F.jsx)(Zp,{theme:e,children:d}),p?(0,F.jsxs)(Qp,{theme:e,children:[`Imported: `,N(p)]}):(0,F.jsx)(Qp,{theme:e,children:`Using Default System`}),g&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)($p,{children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(em,{color:g.primary,theme:e,children:g.primary}),(0,F.jsx)(tm,{theme:e,children:`PRIMARY`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(em,{color:g.offset,theme:e,children:g.offset}),(0,F.jsx)(tm,{theme:e,children:`OFFSET`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(em,{color:g.background,theme:e,children:g.background}),(0,F.jsx)(tm,{theme:e,children:`BG`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(em,{color:g.border,theme:e,children:g.border}),(0,F.jsx)(tm,{theme:e,children:`BORDER`})]})]}),(0,F.jsxs)(nm,{theme:e,children:[(0,F.jsx)(rm,{theme:e,children:`System Settings`}),(0,F.jsxs)(im,{children:[(0,F.jsx)(am,{theme:e,children:`Current HP`}),(0,F.jsxs)(om,{theme:e,value:x,onChange:async e=>{let t=e.target.value;S(t),await pe(h.HP_CURRENT_BID,t)},children:[(0,F.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),me.map(e=>(0,F.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,F.jsxs)(im,{children:[(0,F.jsx)(am,{theme:e,children:`Max HP`}),(0,F.jsxs)(om,{theme:e,value:C,onChange:async e=>{let t=e.target.value;T(t),await pe(h.HP_MAX_BID,t)},children:[(0,F.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),me.map(e=>(0,F.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,F.jsxs)(im,{children:[(0,F.jsx)(am,{theme:e,children:`Buff Visual`}),(0,F.jsx)(om,{theme:e,value:ee,onChange:async e=>{let t=e.target.value;Vp(t)&&(D(t),await pe(h.BUFF_VISUAL_PRESET,t))},children:zp.map(e=>(0,F.jsx)(`option`,{value:e.value,children:e.label},e.value))})]}),(0,F.jsxs)(im,{children:[(0,F.jsx)(am,{theme:e,children:`Debuff Visual`}),(0,F.jsx)(om,{theme:e,value:te,onChange:async e=>{let t=e.target.value;Hp(t)&&(ne(t),await pe(h.DEBUFF_VISUAL_PRESET,t))},children:Bp.map(e=>(0,F.jsx)(`option`,{value:e.value,children:e.label},e.value))})]})]})]}),(0,F.jsxs)(Xp,{theme:e,children:[(0,F.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0},children:`Import New System`}),(0,F.jsx)(`p`,{style:{color:v(e.PRIMARY,.8),fontSize:`14px`},children:`Enter a share_id to download and activate a new game system configuration.`}),(0,F.jsx)(Yp,{children:(0,F.jsx)(gp,{theme:e,type:`text`,value:r,onChange:e=>i(e.target.value),placeholder:`Enter Share Id...`,disabled:a,onKeyPress:e=>e.key===`Enter`&&be()})}),(0,F.jsxs)(lm,{children:[(0,F.jsx)(hp,{theme:e,onClick:be,disabled:a||!r.trim(),children:a?`....!`:`Import System`}),(0,F.jsx)(hp,{theme:e,variant:`secondary`,onClick:we,disabled:a,children:`Use Default`})]})]}),s&&(0,F.jsxs)(sm,{theme:e,children:[(0,F.jsx)(`strong`,{children:`Error:`}),` `,s]}),l&&(0,F.jsxs)(cm,{theme:e,children:[(0,F.jsx)(`strong`,{children:`Success:`}),` `,l]}),k.length>0&&(0,F.jsx)(dm,{children:(0,F.jsxs)(mp,{theme:e,children:[(0,F.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0,marginBottom:`15px`},children:`System Backups`}),(0,F.jsx)(fm,{children:k.map(t=>(0,F.jsxs)(pm,{theme:e,children:[(0,F.jsxs)(mm,{children:[(0,F.jsx)(hm,{theme:e,children:t.name}),(0,F.jsxs)(gm,{theme:e,children:[`Backed up: `,N(t.backupDate)]})]}),(0,F.jsxs)(_m,{children:[(0,F.jsx)(vm,{theme:e,onClick:()=>Se(t),disabled:a,title:`Import this backup`,children:(0,F.jsx)(od,{size:18})}),(0,F.jsx)(vm,{theme:e,$variant:`danger`,onClick:()=>_e(t.name),disabled:a,title:`Delete this backup`,children:(0,F.jsx)(oe,{size:18})})]})]},`${t.name}-${t.backupDate}`))})]})})]}),(0,F.jsx)(Ip,{isOpen:ie,title:`Confirm Action`,onClose:ye,actions:(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(hp,{theme:e,variant:`secondary`,onClick:ye,children:`Cancel`}),(0,F.jsx)(hp,{theme:e,onClick:ve,children:`Confirm`})]}),children:(0,F.jsx)(um,{theme:e,children:ue})})]},`system`)},xm=()=>{let[e,t]=(0,j.useState)({theme:null,cardLayout:[],listLayout:[],attributes:[],systemName:w.name,importDate:null,isLoading:!0}),n=M(e=>e.sceneMetadata);return(0,j.useEffect)(()=>{try{let e=n[$.CURRENT_THEME],r=n[$.CURRENT_CARD],i=n[$.CURRENT_LIST],a=n[$.CURRENT_ATTR];if(!e||!Array.isArray(r)||!Array.isArray(i)||!Array.isArray(a)){O.log(`System data missing, using defaults`),t({theme:{primary:w.theme_primary,offset:w.theme_offset,background:w.theme_background,border:w.theme_border,background_url:w.background_url},cardLayout:w.card_layout,listLayout:w.list_layout,attributes:w.attributes,systemName:w.name,importDate:null,isLoading:!1});return}t({theme:e,cardLayout:r,listLayout:i,attributes:a,systemName:n[$.SYSTEM_NAME]||w.name,importDate:n[$.IMPORT_DATE]||null,isLoading:!1})}catch(e){O.error(`Error loading system data:`,e),t({theme:{primary:w.theme_primary,offset:w.theme_offset,background:w.theme_background,border:w.theme_border,background_url:w.background_url},cardLayout:w.card_layout,listLayout:w.list_layout,attributes:w.attributes,systemName:w.name,importDate:null,isLoading:!1})}},[n]),e};function Sm(e,t){let n=e.replace(`#`,``);n.length===3&&(n=n.split(``).map(e=>e+e).join(``));let r=parseInt(n,16);return`rgba(${r>>16&255}, ${r>>8&255}, ${r&255}, ${t})`}var Cm=class{static async CenterViewportOnImage(e){let t=await E.scene.grid.getDpi(),n=await E.viewport.getScale(),r=await E.viewport.getWidth(),i=await E.viewport.getHeight(),a={x:r/2,y:i/2},o={x:a.x/n,y:a.y/n},s=await this.GetImageCenter(e,t),c={x:s.x-o.x,y:s.y-o.y},l={x:c.x*n*-1,y:c.y*n*-1};await E.viewport.animateTo({position:l,scale:n})}static async GetImageCenter(e,t){if(r(e)){let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{x:e.position.x-a+r/2,y:e.position.y-o+i/2}}else if(o(e)&&e.points.length>0)return{x:e.points[0].x,y:e.points[0].y};else return{x:e.position.x,y:e.position.y}}};const wm=`${A}/effects`;var Tm=`${A}/effects-expired`,Em=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Dm=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Om=y.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`,km=y.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
`,Am=y.div`
  flex: 0 0 120px;
  min-width: 120px;
  display: flex;
  align-items: flex-end;
`,jm=y.label`
  color: ${e=>v(e.theme.PRIMARY,.75)};
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`,Mm=y.input`
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
`,Nm=y.select`
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
`,Pm=y(Nm)`
  min-width: 180px;
  height: 96px;
  padding-right: 8px;
`,Fm=y.button`
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
    background: ${e=>v(e.theme.OFFSET,.5)};
  }
`,Im=y.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 240px;
  overflow-y: auto;
`,Lm=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background: ${e=>v(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,Rm=y.div`
  color: ${e=>v(e.theme.PRIMARY,.8)};
  font-size: 12px;
`,zm=y.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,Bm=y.p`
  color: ${e=>v(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,Vm=y.p`
  color: #ff6b6b;
  margin: 0;
  font-size: 12px;
`,Hm=y.div`
  position: relative;
  display: inline-flex;
`,Um=y.button`
  background: ${e=>e.$active?v(e.theme.OFFSET,.65):`rgba(0, 0, 0, 0.3)`};
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
`,Wm=y.span`
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
`,Gm=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const Km=({items:e,units:t,setItems:n,playerData:r})=>{let[i,a]=(0,j.useState)(null),[o,s]=(0,j.useState)(``),[c,l]=(0,j.useState)(`1`),[u,d]=(0,j.useState)(`rounds`),[f,p]=(0,j.useState)(`start`),[h,g]=(0,j.useState)(`neutral`),[_,v]=(0,j.useState)([]),[y,b]=(0,j.useState)(null),x=(0,j.useMemo)(()=>{let t=new Map;return e.forEach(e=>{e.metadata?.[m.ON_LIST]===!0&&t.set(e.id,Gm(e.metadata?.[wm]))}),t},[e]),S=e=>x.get(e)||[],C=async(t,r)=>{let i=r.filter(e=>e.remaining>0);n(e.map(e=>{if(e.id!==t)return e;let n={...e.metadata||{}};return i.length>0?n[wm]=i:delete n[wm],{...e,metadata:n}})),await E.scene.items.updateItems([t],e=>{let t={...e[0].metadata||{}};i.length>0?t[wm]=i:delete t[wm],e[0].metadata=t})},w=async e=>{try{await E.broadcast.sendMessage(Tm,{message:e},{destination:`ALL`})}catch(t){O.error(`Failed to broadcast expired effect message`,t),await E.notification.show(e,`WARNING`)}},T=async(t,n)=>{if(String(r?.role||``).toUpperCase()!==`GM`)return;let i=[],a=[];e.forEach(e=>{if(e.metadata?.[m.ON_LIST]!==!0)return;let r=Gm(e.metadata?.[wm]);if(r.length===0)return;let o=!1,s=[];r.forEach(r=>{if(!(r.endTiming===t&&(r.durationType===`turns`||e.id===n))){s.push(r);return}let i=r.remaining-1;if(o=!0,i<=0){a.push(`${e.name||`Unit`}: ${r.name} expired`);return}s.push({...r,remaining:i})}),o&&i.push({unitId:e.id,effects:s})});for(let e of i)await C(e.unitId,e.effects);if(a.length>0)for(let e of a)await w(e)},ee=(0,j.useMemo)(()=>i&&t.find(e=>e.id===i)||null,[i,t]),D=(0,j.useMemo)(()=>i?S(i):[],[i,x]);return(0,j.useEffect)(()=>{let e=E.broadcast.onMessage(Tm,async e=>{let t=e.data?.message;typeof t!=`string`||!t.trim()||await E.notification.show(t,`WARNING`)});return()=>{e()}},[]),{effectsModalUnitId:i,selectedEffectsUnit:ee,activeEffectsForSelectedUnit:D,effectNameInput:o,setEffectNameInput:s,effectDurationInput:c,setEffectDurationInput:l,effectDurationType:u,setEffectDurationType:d,effectEndTiming:f,setEffectEndTiming:p,effectType:h,setEffectType:g,effectTargetIds:_,setEffectTargetIds:e=>{v(Array.from(new Set(e)))},effectsModalError:y,units:t,getEffectsForUnit:S,handleOpenEffectsModal:e=>{b(null),s(``),l(`1`),d(`rounds`),p(`start`),g(`neutral`),v([e]),a(e)},handleCloseEffectsModal:()=>{a(null),b(null)},handleAddEffect:async()=>{if(!i)return;let n=o.trim(),r=parseInt(c,10);if(!n){b(`Enter an effect name.`);return}if(!Number.isFinite(r)||r<=0){b(`Duration must be a positive number.`);return}let a=Array.from(new Set(_.filter(e=>t.some(t=>t.id===e))));if(a.length===0){b(`Select at least one target.`);return}let d=S(i),p=ee?.name||e.find(e=>e.id===i)?.name||`Unknown`,m={id:crypto.randomUUID(),name:n,remaining:r,durationType:u,endTiming:f,effectType:h,targets:a,createdByName:p,createdById:i};await C(i,[...d,m]),b(null),s(``),l(`1`),g(`neutral`),v([i])},handleDeleteEffect:async e=>{i&&await C(i,S(i).filter(t=>t.id!==e))},processEffectsForTurnEvent:T}},qm=({manager:e})=>{let{theme:t}=je(),n=(0,j.useMemo)(()=>{let t=new Map;return e.units.forEach(e=>{t.set(e.id,e.name)}),t},[e.units]),r=e=>e===`buff`?`Buff`:e===`debuff`?`Debuff`:`Neutral`,i=e=>{if(e.length===0)return`No targets`;let t=e.map(e=>n.get(e)).filter(e=>typeof e==`string`&&e.length>0);return t.length===0?`${e.length} target${e.length===1?``:`s`}`:t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`};return(0,F.jsx)(Ip,{isOpen:!!e.effectsModalUnitId,title:e.selectedEffectsUnit?`Effects: ${e.selectedEffectsUnit.name}`:`Effects`,onClose:e.handleCloseEffectsModal,minWidth:`520px`,maxWidth:`600px`,children:(0,F.jsxs)(Em,{children:[(0,F.jsxs)(Dm,{children:[(0,F.jsxs)(Om,{children:[(0,F.jsxs)(km,{style:{flex:`0 0 120px`},children:[(0,F.jsx)(jm,{theme:t,children:`Effect`}),(0,F.jsx)(Mm,{theme:t,type:`text`,placeholder:`Name`,value:e.effectNameInput,onChange:t=>e.setEffectNameInput(t.target.value)})]}),(0,F.jsxs)(km,{style:{flex:`0 0 140px`},children:[(0,F.jsx)(jm,{theme:t,children:`Duration`}),(0,F.jsx)(Mm,{theme:t,type:`number`,min:1,value:e.effectDurationInput,onChange:t=>e.setEffectDurationInput(t.target.value)})]}),(0,F.jsxs)(km,{style:{flex:`0 0 120px`},children:[(0,F.jsx)(jm,{theme:t,children:`By`}),(0,F.jsxs)(Nm,{theme:t,value:e.effectDurationType,onChange:t=>e.setEffectDurationType(t.target.value),children:[(0,F.jsx)(`option`,{value:`turns`,children:`Turns`}),(0,F.jsx)(`option`,{value:`rounds`,children:`Rounds`})]})]})]}),(0,F.jsxs)(Om,{children:[(0,F.jsxs)(km,{style:{flex:`0 0 120px`},children:[(0,F.jsx)(jm,{theme:t,children:`Type`}),(0,F.jsxs)(Nm,{theme:t,value:e.effectType,onChange:t=>e.setEffectType(t.target.value),children:[(0,F.jsx)(`option`,{value:`neutral`,children:`Neutral`}),(0,F.jsx)(`option`,{value:`buff`,children:`Buff`}),(0,F.jsx)(`option`,{value:`debuff`,children:`Debuff`})]})]}),(0,F.jsxs)(km,{style:{flex:`0 0 140px`},children:[(0,F.jsx)(jm,{theme:t,children:`Ends at`}),(0,F.jsxs)(Nm,{theme:t,value:e.effectEndTiming,onChange:t=>e.setEffectEndTiming(t.target.value),children:[(0,F.jsx)(`option`,{value:`start`,children:`Start of turn`}),(0,F.jsx)(`option`,{value:`end`,children:`End of turn`})]})]}),(0,F.jsx)(Am,{children:(0,F.jsx)(Fm,{theme:t,onClick:e.handleAddEffect,style:{width:`100%`},children:`Add`})})]})]}),(0,F.jsxs)(km,{children:[(0,F.jsx)(jm,{theme:t,children:`Targets`}),(0,F.jsx)(Pm,{theme:t,multiple:!0,value:e.effectTargetIds,onChange:t=>{let n=Array.from(t.target.selectedOptions).map(e=>e.value);e.setEffectTargetIds(n)},children:e.units.map(e=>(0,F.jsx)(`option`,{value:e.id,children:e.name},e.id))})]}),e.effectsModalError&&(0,F.jsx)(Vm,{theme:t,children:e.effectsModalError}),e.activeEffectsForSelectedUnit.length===0?(0,F.jsx)(Bm,{theme:t,children:`No active effects.`}):(0,F.jsx)(Im,{children:e.activeEffectsForSelectedUnit.map(n=>(0,F.jsxs)(Lm,{theme:t,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(zm,{theme:t,children:n.name}),(0,F.jsxs)(Rm,{theme:t,children:[r(n.effectType),` • `,n.remaining,` `,n.durationType,` • ends at `,n.endTiming===`start`?`start of turn`:`end of turn`,` • by `,n.createdByName]}),(0,F.jsxs)(Rm,{theme:t,children:[`Targets: `,i(n.targets)]})]}),(0,F.jsx)(Fm,{theme:t,onClick:()=>{e.handleDeleteEffect(n.id)},children:`Delete`})]},n.id))})]})})},Jm=({activeEffectsCount:e,canInteract:t,onOpen:n,icon:r})=>{let{theme:i}=je();return(0,F.jsxs)(Hm,{children:[(0,F.jsx)(Um,{theme:i,$active:e>0,disabled:!t,onClick:()=>{t&&n()},children:r||(0,F.jsx)(id,{})}),e>0&&(0,F.jsx)(Wm,{theme:i,children:e>99?`99+`:e})]})};var Ym=y.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,Xm=y.input`
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
`;const Zm=({theme:e,unit:t,canInteract:n,elevationDraftValue:r,onElevationDraftChange:i,onCommitElevationChange:a})=>(0,F.jsx)(Ym,{theme:e,children:(0,F.jsx)(Xm,{theme:e,type:`text`,inputMode:`decimal`,min:-999,max:999,step:1,value:r??String(t.elevation??0),readOnly:!n,onChange:n?e=>i(t.id,e.target.value):void 0,onBlur:n?e=>a(t.id,e.target.value):void 0,onKeyDown:e=>{n&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}})}),Qm=({theme:e,canInteract:t,icon:n,activeEffectsCount:r,onOpen:i})=>(0,F.jsx)(Ym,{theme:e,children:(0,F.jsx)(Jm,{activeEffectsCount:r,canInteract:t,icon:n||(0,F.jsx)(id,{}),onOpen:i})});var $m=`${A}/elevation-badge`,eh=`${A}/elevation-badge-owner`,th=`${A}/elevation`,nh=(e,t)=>{if(!e)return;if(e.startsWith(`#`))return Sm(e,t);let n=e.match(/^rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\)$/i);if(n){let[,e,r,i]=n;return`rgba(${e}, ${r}, ${i}, ${t})`}let r=e.match(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i);if(r){let[,e,n,i]=r;return`rgba(${e}, ${n}, ${i}, ${t})`}return e},rh={heart:Qu,shield:nd,sun:id,award:Uu,target:ad,users:sd,star:rd,zap:cd,clock:Ju,eye:Yu,layers:$u,music:ed,feather:Xu,book:Wu},ih=y.div`
  padding: 2px;
  width: 100%;
`,ah=y.h1`
  color: ${e=>e.theme.PRIMARY};
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`,oh=y.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
`,sh=y.div`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  padding: 8px;
  background-color: ${e=>v(e.theme.BACKGROUND,.75)};
  border-top: 2px solid ${e=>e.theme.BORDER};
`,ch=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`,lh=y.button`
  background: ${e=>e.disabled?v(e.theme.BORDER,.3):v(e.theme.OFFSET,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  padding: 4px 4px;
  width: ${e=>e.$compact?`40px`:`80px`};
  font-size: 14px;
  font-weight: 600;
  font-variant: small-caps;
  cursor: ${e=>e.disabled?`not-allowed`:`pointer`};
  transition: all 0.2s ease;
  opacity: ${e=>e.disabled?.5:1};
  
  &:hover {
    background: ${e=>e.disabled?v(e.theme.BORDER,.3):e.theme.OFFSET};
  }
  
  &:active {
    transform: ${e=>e.disabled?`none`:`scale(0.95)`};
  }
`,uh=y(lh)`
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
  }
`,dh=y.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  min-width: 80px;
  text-align: center;
`,fh=y.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
`,ph=y.thead`
  background-color: ${e=>v(e.theme.BACKGROUND,.75)};
`,mh=y.tr``,hh=y.th`
  color: ${e=>e.theme.OFFSET};
  padding-bottom: 6px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  font-variant: small-caps;
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  
  svg {
    width: 20px;
    height: 20px;
    display: inline-block;
  }
`,gh=y.tbody``,_h=y.tr`
  ${e=>e.$isCurrentTurn&&e.theme&&`
    background: linear-gradient(to left, ${v(e.theme.OFFSET,.4)} 0%, transparent 100%);
  `}
  cursor: context-menu;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &:not(:last-child) td {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`,vh=y.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,yh=y(vh)`
  font-weight: 700;
  font-size: 18px;
  color: ${e=>e.theme.OFFSET};
  min-width: 60px;
`,bh=y(vh)`
  min-width: 48px;
`,xh=y.button`
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
`,Sh=y.img`
  width: 18px;
  height: 18px;
  pointer-events: none;
`,Ch=y.div`
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
`,wh=y.input`
  background: ${e=>e.$isRollable?v(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.3)`};
  border: 1px solid ${e=>e.$isRollable?v(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
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
  }
`,Th=y(vh)`
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
`,Eh=y.input`
  background: ${e=>e.$isRollable?v(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.4)`};
  border: 1px solid ${e=>e.$isRollable?v(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
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
  }
`,Dh=y.span`
  margin: 0 2px;
  color: ${e=>e.theme.OFFSET};
  font-weight: 500;
`,Oh=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,kh=y.button`
  background: ${e=>e.$active?v(e.theme.OFFSET,.65):`rgba(0, 0, 0, 0.3)`};
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
`,Ah=y.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.BORDER};
  cursor: pointer;
  margin: 0 2px;
  background: ${e=>v(e.theme.BACKGROUND,.55)};
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
    box-shadow: ${e=>`0 0 0 2px ${v(e.theme.PRIMARY,.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,jh=y.button`
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
`,Mh=y.div`
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
`,Nh=y(vh)`
  width: 24px;
  min-width: 24px;
  max-width: 24px;
  padding: 0;
  position: relative;
`,Ph=y.div`
  position: absolute;
  inset: 0;
  min-height: 40px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0 10px;
`,Fh=y.div`
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
            ${v(e.theme.BORDER,.2)},
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
`,Ih=y.div`
  flex: 1;
  height: 100%;
  padding: 0 8px;
  margin: 0 -10px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`,Lh=y.div`
  width: 6px;
  flex: 1;
  height: 100%;
  background-repeat: repeat-y;
  background-position: center;
  background-size: 6px 16px;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='16' viewBox='0 0 6 16' preserveAspectRatio='none'%3E%3Cpolyline points='3,0 0,4 6,8 0,12 3,16' fill='none' stroke='${encodeURIComponent(e.theme.BORDER)}' stroke-width='1.2'/%3E%3C/svg%3E")`};
`,Rh=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
`,zh=y.button`
  width: 100%;
  text-align: left;
  background: ${e=>e.$isCurrent?v(e.theme.OFFSET,.45):v(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  padding: 8px 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>v(e.theme.OFFSET,.55)};
  }
`,Bh=y.p`
  color: ${e=>v(e.theme.PRIMARY,.8)};
  margin: 0 0 12px 0;
  font-size: 13px;
`,Vh=y.p`
  color: #ff6b6b;
  margin: 10px 0 0 0;
  font-size: 13px;
`,Hh=y.div`
  height: 1px;
  margin: 12px 0;
  background: ${e=>v(e.theme.BORDER,.7)};
`,Uh=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>v(e.theme.BACKGROUND,.35)};
`,Wh=y.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,Gh=y.div`
  color: ${e=>v(e.theme.PRIMARY,.75)};
  font-size: 11px;
`,Kh=y.button`
  min-width: 110px;
  height: 32px;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  background: ${e=>e.$active?v(e.theme.OFFSET,.55):v(e.theme.BACKGROUND,.45)};
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;

  &:hover {
    background: ${e=>e.$active?v(e.theme.OFFSET,.7):v(e.theme.OFFSET,.45)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,qh=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Jh=y.p`
  color: ${e=>v(e.theme.PRIMARY,.78)};
  margin: 0;
  font-size: 12px;
`,Yh=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 320px;
  overflow-y: auto;
`,Xh=y.div`
  background: ${e=>v(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,Zh=y.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,Qh=y.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #4b5563;
  background: rgba(0, 0, 0, 0.2);
  accent-color: #ffffff;
  margin: 0;
  pointer-events: none;
`,$h=y.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
`,eg=y.div`
  color: ${e=>v(e.theme.PRIMARY,.85)};
  font-size: 12px;
  font-style: italic;
  line-height: 1.25;
  white-space: pre-wrap;
`,tg=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`,ng=y.button`
  border: 1px solid ${e=>v(e.theme.OFFSET,.7)};
  border-radius: 999px;
  background: ${e=>v(e.theme.OFFSET,.35)};
  color: ${e=>e.theme.PRIMARY};
  font-size: 11px;
  padding: 2px 8px;
  cursor: pointer;

  &:hover {
    background: ${e=>v(e.theme.OFFSET,.55)};
  }
`,rg=y.p`
  color: ${e=>v(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,ig=(e,t,n)=>{let r=[{id:crypto.randomUUID(),type:`initiative`},...t?[{id:`roller-column`,type:`roller`}]:[],{id:crypto.randomUUID(),type:`name`}],i=n?[{id:`card-column`,type:`card-column`}]:[];if(!e||e.length===0)return[...r,...i];let a=[...e].sort((e,t)=>e.col-t.col).map(e=>({id:e.id,type:e.type,name:e.styles?.labelName,useIcon:e.styles?.labelMode===`icon`,iconType:e.styles?.labelIcon,description:e.styles?.description,styles:e.styles}));return[...r,...a,...i]};const ag=()=>{let{theme:e}=je(),{listLayout:n,attributes:i,isLoading:a}=xm();M(e=>e.roomMetadata);let o=M(e=>e.sceneMetadata),s=M(e=>e.items),c=M(e=>e.partyData),l=M(e=>e.playerData),u=M(e=>e.gridDpi),d=M(e=>e.setItems),[f,p]=(0,j.useState)([]),[g,_]=(0,j.useState)([]),[v,y]=(0,j.useState)(null),[b,x]=(0,j.useState)(1),[S,C]=(0,j.useState)(new Set),[w,T]=(0,j.useState)(null),[ee,D]=(0,j.useState)(null),[ne,k]=(0,j.useState)(!1),[re,ae]=(0,j.useState)(!1),[oe,se]=(0,j.useState)({}),[ce,le]=(0,j.useState)({}),[ue,de]=(0,j.useState)(null),[fe,me]=(0,j.useState)({}),[he,ge]=(0,j.useState)(!1),[_e,ve]=(0,j.useState)(!1),[ye,be]=(0,j.useState)(()=>window.innerWidth<400),xe=(0,j.useRef)({}),Se=(0,j.useRef)({}),Ce=(0,j.useRef)(null);(0,j.useEffect)(()=>{let e=()=>{be(window.innerWidth<400)};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let we=o,N=we[h.REVERSE_INITIATIVE]||!1,P=we[h.POPCORN_INITIATIVE]||!1,Te=we[h.SHOW_ROLLER_COLUMN]||!1,Ee=we[h.SHOW_CARD_ACCESS]||!1,De=we[h.DICE_RANGE]||``,Oe=we[h.SHOW_OWNER_ONLY_EDIT]||!1,ke=String(l?.role||``).toUpperCase()===`GM`,Ae=async({notation:e,actionName:t,tokenName:n,senderId:r,senderColor:i})=>{try{await ie({notation:e,actionName:t,senderName:n,senderId:r,senderColor:i},we)}catch(t){O.error(`Failed to send dice roll from InitiativeList`,e,t),O.log(e)}},Me=e=>{let t=e;if(typeof t==`string`)try{t=JSON.parse(t)}catch{return[]}return Array.isArray(t)?t.map((e,t)=>{let n=e&&typeof e==`object`?e:{},r=n.inUse,i=typeof r==`boolean`?r:typeof r==`string`?[`true`,`1`,`yes`].includes(r.trim().toLowerCase()):typeof r==`number`?r===1:void 0;return{id:typeof n.id==`string`&&n.id?n.id:`entry-${t}`,name:typeof n.name==`string`?n.name:``,description:typeof n.description==`string`?n.description:``,...i===void 0?{}:{inUse:i}}}):[]};(0,j.useEffect)(()=>{p(s.filter(e=>e.metadata?.[m.ON_LIST]===!0).map(e=>{let t=e.metadata?.[m.INITIATIVE]||0,n=e.metadata[m.UNIT_NAME]||e.name||`Unknown`,r=e.metadata?.[m.BOSS_MODE]===!0,i=e.metadata?.[th]||0,a=c.find(t=>t.id===e.createdUserId)||(l?.id===e.createdUserId?l:void 0),o=String(a?.role||``).toUpperCase()===`GM`,s=a?.color||(l?.id===e.createdUserId?l?.color:void 0),u=o?void 0:nh(s,1),d={};return Object.keys(e.metadata||{}).forEach(t=>{t.startsWith(`com.battle-system.forge`)&&(d[t]=e.metadata?.[t])}),{id:e.id,initiative:t,name:n,isBoss:r,elevation:i,attributes:d,createdUserId:e.createdUserId,ownerNameOutlineColor:u}}))},[s,c,l]);let I=(0,j.useMemo)(()=>P?[...f].sort((e,t)=>e.name.localeCompare(t.name)):[...f].sort((e,t)=>e.initiative===t.initiative?e.name.localeCompare(t.name):N?e.initiative-t.initiative:t.initiative-e.initiative),[f,N,P]),Ne=Km({items:s,units:I,setItems:d,playerData:l}),Pe=(0,j.useMemo)(()=>{let e=new Map;return c.forEach(t=>{e.set(t.id,t)}),l&&!e.has(l.id)&&e.set(l.id,l),Array.from(e.values()).sort((e,t)=>e.name.localeCompare(t.name))},[c,l]),Fe=(e,t)=>{let n=parseInt(t)||0;p(t=>t.map(t=>t.id===e?{...t,initiative:n}:t))},Ie=(e,t)=>{d(s.map(n=>n.id===e?{...n,metadata:{...n.metadata,[m.INITIATIVE]:t}}:n)),E.scene.items.updateItems([e],e=>{e[0].metadata[m.INITIATIVE]=t})},Le=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},Re=(e,t,n)=>(typeof t==`number`&&(e=Math.max(t,e)),typeof n==`number`&&(e=Math.min(n,e)),e),ze=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(r.length===0)return Re(0,i,a);let o=r.match(/^([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),s=r.match(/^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),c=null;if(o){let e=o[1],n=parseFloat(o[2]);switch(e){case`+`:c=t+n;break;case`-`:c=t-n;break;case`*`:c=t*n;break;case`/`:c=n===0?t:t/n;break}}else if(s){let e=parseFloat(s[1]),t=s[2],n=parseFloat(s[3]);switch(t){case`+`:c=e+n;break;case`-`:c=e-n;break;case`*`:c=e*n;break;case`/`:c=n===0?e:e/n;break}}else{let e=parseFloat(r);Number.isNaN(e)||(c=e)}return Re(c===null||!Number.isFinite(c)?t:Math.trunc(c),i,a)},Be=e=>{let t=Le(De),n=Math.floor(Math.random()*t)+1;Fe(e,String(n)),Ie(e,n)},Ve=(e,t)=>{se(n=>({...n,[e]:t}))},He=(e,t)=>{let n=ze(t,f.find(t=>t.id===e)?.initiative??0);se(t=>{let{[e]:n,...r}=t;return r}),p(t=>t.map(t=>t.id===e?{...t,initiative:n}:t)),Ie(e,n)},Ue=e=>`ELE${e.slice(3)}`,We=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o}},Ge=async(e,n)=>{let i=Ue(e);try{await E.scene.items.deleteItems([i])}catch{}if(n===0)return;let a=s.find(t=>t.id===e);if(!a||!r(a))return;let o=We(a,u),c=`${n>0?`🡹`:`🡻`}${Math.abs(n)}`,l=t().id(i).name(`Elevation Badge`).plainText(c).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(36).fontFamily(`Segoe UI`).textAlign(`CENTER`).position({x:o.minX-40,y:o.minY}).metadata({[$m]:!0,[eh]:e}).attachedTo(e).visible(a.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build();try{await E.scene.items.addItems([l])}catch(t){O.error(`Failed to add elevation badge`,e,t)}},Ke=(e,t)=>{le(n=>({...n,[e]:t}))},qe=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(!r)return Re(0,i,a);let o=parseFloat(r);return Re(Number.isFinite(o)?Math.trunc(o):t,i,a)},Je=(e,t)=>{let n=qe(t,f.find(t=>t.id===e)?.elevation??0,{min:-999,max:999});le(t=>{let{[e]:n,...r}=t;return r}),p(t=>t.map(t=>t.id===e?{...t,elevation:n}:t)),d(s.map(t=>t.id===e?{...t,metadata:{...t.metadata,[th]:n}}:t)),E.scene.items.updateItems([e],e=>{e[0].metadata[th]=n}),Ge(e,n)},Ye=(e,t)=>{let n=e.trim();if(!n)return e;let r=/^([+\-*/])\s*-?\d+(?:\.\d+)?$/.test(n),i=/^-?\d+(?:\.\d+)?\s*[+\-*/]\s*-?\d+(?:\.\d+)?$/.test(n),a=/^-?\d+(?:\.\d+)?$/.test(n);if(!r&&!i&&!a)return e;let o=typeof t==`number`?t:parseFloat(String(t)),s=Number.isFinite(o)?o:0;return String(ze(n,s))},Xe=(e,t,n)=>{let r=`${A}/${t}`,i=f.find(t=>t.id===e)?.attributes?.[r],a=Ye(n,i);p(t=>t.map(t=>t.id===e?{...t,attributes:{...t.attributes,[r]:a}}:t)),d(s.map(t=>t.id===e?{...t,metadata:{...t.metadata,[r]:a}}:t)),E.scene.items.updateItems([e],e=>{e[0].metadata[r]=a})},Ze=e=>i.find(t=>t.attr_bid===e)||null,Qe=e=>{let t=Ze(e);return typeof t?.attr_func==`string`&&t.attr_func.trim().length>0},$e=e=>{let t={};for(let n of i){let r=`${A}/${n.attr_bid}`,i=e.attributes?.[r];if(i==null||i===``)continue;let a=Number(i);Number.isFinite(a)&&(t[n.attr_bid]=a)}return t},et=async(e,t)=>{let n=Ze(t)?.attr_func;if(typeof n!=`string`||n.trim().length===0)return;let r=pe(n,{bidValueMap:$e(e),onMissingBid:`error`});if(!r.valid||!r.notation){O.warn(`Could not resolve notation for initiative list value-column`,{unitId:e.id,bid:t,error:r.error});return}let i=Ze(t)?.attr_name||t,a=c.find(t=>t.id===e.createdUserId);await Ae({notation:r.notation,actionName:i,tokenName:e.name,senderId:e.createdUserId||l?.id||`unknown`,senderColor:a?.color||l?.color||`#ffffff`})};(0,j.useEffect)(()=>()=>{Object.values(xe.current).forEach(e=>{window.clearTimeout(e)})},[]);let tt=(e,t)=>`value-column:${e}:${t}`,nt=e=>!!fe[e],rt=(e,t)=>{me(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},it=e=>{me(t=>{let{[e]:n,...r}=t;return r})},at=(e,t)=>{let n=xe.current[e];n&&window.clearTimeout(n),xe.current[e]=window.setTimeout(()=>{Se.current[e]=!0,rt(e,t),delete xe.current[e]},500)},ot=e=>{let t=xe.current[e];t&&(window.clearTimeout(t),delete xe.current[e])},st=e=>Se.current[e]?(delete Se.current[e],!0):!1,ct=e=>{if(!Oe||ke)return!0;let t=l?.id;return t?e.createdUserId===t:!1};(0,j.useEffect)(()=>{a||_(ig(n,Te,Ee))},[n,a,Te,Ee]),(0,j.useEffect)(()=>{let e=o[h.CURRENT_TURN],t=o[h.CURRENT_ROUND];e?y(e):I.length>0&&y(I[0].id),t&&x(t)},[o,I]);let lt=async()=>{if(I.length===0)return;v&&await Ne.processEffectsForTurnEvent(`end`,v);let e=I.findIndex(e=>e.id===v)+1;if(e>=I.length){let e=b+1;x(e),y(I[0].id),await E.scene.setMetadata({[h.CURRENT_TURN]:I[0].id,[h.CURRENT_ROUND]:e}),await Ne.processEffectsForTurnEvent(`start`,I[0].id)}else y(I[e].id),await E.scene.setMetadata({[h.CURRENT_TURN]:I[e].id}),await Ne.processEffectsForTurnEvent(`start`,I[e].id)},ut=async()=>{if(I.length===0)return;let e=I.findIndex(e=>e.id===v)-1;if(e<0){let e=Math.max(1,b-1);x(e),y(I[I.length-1].id),await E.scene.setMetadata({[h.CURRENT_TURN]:I[I.length-1].id,[h.CURRENT_ROUND]:e})}else y(I[e].id),await E.scene.setMetadata({[h.CURRENT_TURN]:I[e].id})},dt=async e=>{P&&(S.has(e)||(y(e),await E.scene.setMetadata({[h.CURRENT_TURN]:e}),await Ne.processEffectsForTurnEvent(`start`,e)))},ft=async()=>{v&&(await Ne.processEffectsForTurnEvent(`end`,v),C(e=>new Set([...e,v])),S.size+1,I.length)},pt=async()=>{let e=b+1;x(e),C(new Set),y(null),await E.scene.setMetadata({[h.CURRENT_TURN]:null,[h.CURRENT_ROUND]:e})},mt=async e=>{ve(!0);try{if(e){let e=s.filter(e=>e.metadata?.[m.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await E.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata&&m.ON_LIST in e.metadata&&delete e.metadata[m.ON_LIST]})}),d(s.map(e=>{if(e.metadata?.[m.ON_LIST]!==!0)return e;let t={...e.metadata||{}};return delete t[m.ON_LIST],{...e,metadata:t}})))}let t=e?null:I[0]?.id??null;x(1),y(t),C(new Set),await E.scene.setMetadata({[h.CURRENT_TURN]:t,[h.CURRENT_ROUND]:1}),ge(!1)}catch(t){O.error(`Failed to reset encounter state`,{clearList:e,error:t})}finally{ve(!1)}},ht=async e=>{let t=s.find(t=>t.id===e);if(t)try{await Cm.CenterViewportOnImage(t)}catch(t){O.error(`Failed to center viewport on unit`,e,t)}},gt=async(e,t)=>{try{let n=await E.viewport.getHeight(),r=n>800?700:n-100;await E.popover.open({id:te.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(t)}`,height:r,width:350,anchorElementId:e,hidePaper:!0,disableClickAway:!0})}catch(e){O.error(`Failed to open cards popover`,e)}},_t=(e,t)=>{e.preventDefault(),e.stopPropagation(),D(null),T(t)},vt=async e=>{if(w){if(!s.find(e=>e.id===w)){D(`Token not found in scene cache.`);return}k(!0),D(null);try{await E.scene.items.updateItems([w],t=>{let n=t[0];n.createdUserId=e}),d(s.map(t=>t.id===w?{...t,createdUserId:e}:t)),T(null)}catch(t){O.error(`Failed to reassign token owner`,w,e,t),D(`Unable to assign token owner. Ensure you have permission to edit this token.`)}finally{k(!1)}}},yt=async()=>{if(!w)return;let e=s.find(e=>e.id===w);if(!e){D(`Token not found in scene cache.`);return}let t=e.metadata?.[m.BOSS_MODE]!==!0;if(t&&s.filter(e=>e.id!==w&&e.metadata?.[m.ON_LIST]===!0&&e.metadata?.[m.BOSS_MODE]===!0).length>=2){D(`A maximum of 2 bosses can be enabled at once.`);return}ae(!0),D(null);try{await E.scene.items.updateItems([w],e=>{let n={...e[0].metadata||{}};n[m.BOSS_MODE]=t,e[0].metadata=n}),d(s.map(e=>e.id===w?{...e,metadata:{...e.metadata||{},[m.BOSS_MODE]:t}}:e))}catch(e){O.error(`Failed to toggle boss mode`,w,e),D(`Unable to update boss mode for this token.`)}finally{ae(!1)}},bt=(0,j.useMemo)(()=>w&&I.find(e=>e.id===w)||null,[w,I]),xt=(0,j.useMemo)(()=>w&&s.find(e=>e.id===w)||null,[w,s]),St=xt?.metadata?.[m.BOSS_MODE]===!0,Ct=(0,j.useMemo)(()=>ue&&I.find(e=>e.id===ue.unitId)||null,[ue,I]),wt=(0,j.useMemo)(()=>ue&&i.find(e=>e.attr_bid===ue.bid)||null,[i,ue]),L=(0,j.useMemo)(()=>{if(!ue||!Ct)return[];let e=Ct.attributes[`${A}/${ue.bid}`];return Me(e)},[ue,Ct]),Tt=(0,j.useMemo)(()=>L.some(e=>typeof e.inUse==`boolean`),[L]),R=(0,j.useMemo)(()=>{if(!Ct)return{};let e={};for(let t of i){let n=`${A}/${t.attr_bid}`,r=Ct.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(e[t.attr_bid]=i)}return e},[Ct,i]),Et=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=(e[1]||``).trim();if(!n)continue;let r=pe(n,{bidValueMap:R,onMissingBid:`error`});!r.valid||!r.notation||t.push(r.notation)}return t};(0,j.useEffect)(()=>{Ce.current&&g.length>0&&(O.debug(`Adjusting window width based on table size`),setTimeout(()=>{if(Ce.current){let e=Ce.current.offsetWidth+4,t=Math.min(e,800);E.action.setWidth(t),O.log(`Adjusted window width to `+t)}},100))},[Ce.current?.offsetWidth]);let Dt=e=>{if(!e)return null;let t=rh[e.toLowerCase()];return t?(0,F.jsx)(t,{}):null},Ot=e=>e.type===`initiative`?(0,F.jsx)(sd,{}):e.type===`roller`?null:e.type===`name`?`Name`:e.type===`card-column`?(0,F.jsx)(Zu,{}):e.type===`divider-column`?null:e.useIcon&&e.iconType?Dt(e.iconType):e.name||e.type,kt=(t,n)=>{let r=ct(n);switch(t.type){case`initiative`:if(P)return(0,F.jsx)(yh,{theme:e,children:(0,F.jsx)(Ch,{onClick:e=>{e.stopPropagation(),r&&(S.has(n.id)||(n.id===v?ft():dt(n.id)))},children:S.has(n.id)?(0,F.jsx)(Ku,{color:e.OFFSET}):n.id===v?(0,F.jsx)(Gu,{color:e.PRIMARY}):(0,F.jsx)(qu,{color:e.BORDER})})});let i=`initiative:${n.id}`,a=nt(i);return(0,F.jsx)(yh,{theme:e,children:(0,F.jsx)(wh,{theme:e,$isRollable:r&&!a,type:`text`,inputMode:`decimal`,value:oe[n.id]??String(n.initiative),readOnly:!r||!a,onChange:!r||!a?void 0:e=>Ve(n.id,e.target.value),onBlur:!r||!a?void 0:e=>{He(n.id,e.target.value),it(i)},onClick:()=>{r&&(a||st(i)||Be(n.id))},onContextMenu:e=>{r&&(e.preventDefault(),rt(i,e.currentTarget))},onTouchStart:e=>{r&&(a||at(i,e.currentTarget))},onTouchEnd:()=>{ot(i)},onTouchCancel:()=>{ot(i)},onKeyDown:e=>{if(r){if(!a&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),Be(n.id);return}a&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})});case`name`:return(0,F.jsx)(Th,{theme:e,title:`Right-click to assign owner`,$outlineColor:n.ownerNameOutlineColor,onDoubleClick:()=>ht(n.id),onContextMenu:r?e=>_t(e,n.id):void 0,children:n.isBoss?`💀 ${n.name}`:n.name});case`roller`:return(0,F.jsx)(bh,{theme:e,children:(0,F.jsx)(xh,{theme:e,disabled:!r,onClick:e=>{e.stopPropagation(),r&&Be(n.id)},title:`Roll initiative (1-${Le(De)})`,children:(0,F.jsx)(Sh,{src:`/dice.svg`,alt:`Roll`})})});case`card-column`:return(0,F.jsx)(vh,{theme:e,children:(0,F.jsx)(kh,{id:`card-access-${n.id}`,theme:e,disabled:!r,onClick:e=>{e.stopPropagation(),r&&gt(e.currentTarget.id,n.id)},title:`Open card for ${n.name}`,children:(0,F.jsx)(Gu,{})})});case`value-column`:return(0,F.jsx)(vh,{theme:e,children:(0,F.jsx)(Oh,{children:t.styles?.bidList?.map((i,a)=>{let o=Qe(i),s=tt(n.id,i),c=o&&nt(s),l=n.attributes[`${A}/${i}`],u=l==null||l===``?`0`:String(l);return(0,F.jsxs)(j.Fragment,{children:[a>0&&(0,F.jsx)(Dh,{theme:e,children:t.styles?.dividers?.[a-1]||`/`}),(0,F.jsx)(Eh,{theme:e,$isRollable:r&&o,value:u,$small:t.styles?.bidList&&t.styles.bidList.length>2,readOnly:!r||o&&!c,onChange:!r||o&&!c?void 0:e=>{let t=e.target.value;p(e=>e.map(e=>e.id===n.id?{...e,attributes:{...e.attributes,[`${A}/${i}`]:t}}:e))},onBlur:!r||o&&!c?void 0:e=>{Xe(n.id,i,e.target.value),o&&it(s)},onClick:o?()=>{r&&(c||st(s)||et(n,i))}:void 0,onContextMenu:o?e=>{r&&(e.preventDefault(),rt(s,e.currentTarget))}:void 0,onTouchStart:o?e=>{r&&(c||at(s,e.currentTarget))}:void 0,onTouchEnd:o?()=>{ot(s)}:void 0,onTouchCancel:o?()=>{ot(s)}:void 0,onKeyDown:e=>{if(r){if(o&&!c&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),et(n,i);return}(c||!o)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})]},i)})})});case`list-column`:return(0,F.jsx)(vh,{theme:e,children:(0,F.jsx)(kh,{theme:e,disabled:!r,onClick:e=>{if(e.stopPropagation(),!r)return;let i=t.styles?.bidList?.[0];i&&de({unitId:n.id,bid:i})},title:`Open list reference`,children:(0,F.jsx)(Wu,{})})});case`checkbox-column`:return(0,F.jsx)(vh,{theme:e,children:(0,F.jsx)(Oh,{children:t.styles?.bidList?.map(i=>{let a=!!n.attributes[`${A}/${i}`],o=t.styles?.inputType===`slider`,c=e=>{p(t=>t.map(t=>t.id===n.id?{...t,attributes:{...t.attributes,[`${A}/${i}`]:e}}:t)),d(s.map(t=>t.id===n.id?{...t,metadata:{...t.metadata,[`${A}/${i}`]:e}}:t)),E.scene.items.updateItems([n.id],t=>{t[0].metadata[`${A}/${i}`]=e})};return o?(0,F.jsx)(jh,{type:`button`,theme:e,$active:a,disabled:!r,onClick:r?()=>{c(!a)}:void 0,children:(0,F.jsx)(Mh,{theme:e,$active:a})},i):(0,F.jsx)(Ah,{theme:e,type:`checkbox`,checked:a,disabled:!r,onChange:r?e=>{c(e.target.checked)}:void 0},i)})})});case`special-column`:let o=Dt(t.iconType);if(t.styles?.specialType===`elevation`){let t=ce[n.id];return(0,F.jsx)(Zm,{theme:e,unit:n,canInteract:r,elevationDraftValue:t,onElevationDraftChange:Ke,onCommitElevationChange:Je})}else{let t=Ne.getEffectsForUnit(n.id).length;return(0,F.jsx)(Qm,{theme:e,canInteract:r,icon:o||(0,F.jsx)(id,{}),activeEffectsCount:t,onOpen:()=>Ne.handleOpenEffectsModal(n.id)})}case`divider-column`:return(0,F.jsx)(Nh,{theme:e,children:(0,F.jsx)(Ph,{children:t.styles?.styleDesign===`zigzag`?(0,F.jsx)(Ih,{children:(0,F.jsx)(Lh,{theme:e})}):(0,F.jsx)(Fh,{theme:e,$style:t.styles?.styleDesign})})});default:return(0,F.jsx)(vh,{theme:e,children:`-`})}};return a?(0,F.jsx)(ih,{children:(0,F.jsx)(ah,{theme:e,children:`Loading...`})}):(0,F.jsxs)(ih,{children:[(0,F.jsx)(oh,{children:(0,F.jsxs)(fh,{ref:Ce,theme:e,children:[(0,F.jsx)(ph,{theme:e,children:(0,F.jsx)(mh,{children:g.map(t=>(0,F.jsx)(hh,{theme:e,children:Ot(t)},t.id))})}),(0,F.jsx)(gh,{children:I.map(t=>(0,F.jsx)(_h,{$isCurrentTurn:t.id===v,theme:e,children:g.map(e=>(0,F.jsx)(j.Fragment,{children:kt(e,t)},e.id))},t.id))})]})}),(0,F.jsxs)(sh,{theme:e,children:[(0,F.jsx)(ch,{children:P?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(lh,{theme:e,onClick:ft,disabled:!v||S.has(v),children:`End Turn`}),(0,F.jsxs)(dh,{theme:e,children:[`Round: `,b]}),(0,F.jsx)(lh,{theme:e,onClick:pt,disabled:S.size<I.length,children:`Next`})]}):(0,F.jsxs)(F.Fragment,{children:[ke&&(0,F.jsx)(lh,{theme:e,$compact:ye,onClick:ut,children:ye?(0,F.jsx)(Vu,{}):`Previous`}),(0,F.jsxs)(dh,{theme:e,children:[`Round: `,b]}),ke&&(0,F.jsx)(lh,{theme:e,$compact:ye,onClick:lt,children:ye?(0,F.jsx)(Hu,{}):`Next`})]})}),ke&&(0,F.jsx)(uh,{theme:e,onClick:()=>ge(!0),disabled:_e,title:`Reset round/turn state`,children:(0,F.jsx)(td,{})})]}),(0,F.jsxs)(Ip,{isOpen:!!w,title:bt?`Unit: ${bt.name}`:`Unit`,onClose:()=>{ne||re||(T(null),D(null))},closeOnOverlayClick:!ne&&!re,maxWidth:`520px`,children:[(0,F.jsx)(Bh,{theme:e,children:`Select a player to become the owner.`}),(0,F.jsx)(Rh,{children:Pe.map(t=>(0,F.jsxs)(zh,{theme:e,$isCurrent:xt?.createdUserId===t.id,onClick:()=>vt(t.id),disabled:ne||re,children:[t.name,xt?.createdUserId===t.id?` (current)`:``]},t.id))}),(0,F.jsx)(Hh,{theme:e}),(0,F.jsxs)(Uh,{theme:e,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(Wh,{theme:e,children:`Boss Mode`}),(0,F.jsx)(Gh,{theme:e,children:`Shows a large encounter HP bar in scene (max 2 bosses).`})]}),(0,F.jsx)(Kh,{theme:e,$active:St,disabled:ne||re,onClick:()=>{yt()},children:re?`Updating...`:St?`Enabled`:`Disabled`})]}),ee&&(0,F.jsx)(Vh,{theme:e,children:ee})]}),(0,F.jsx)(qm,{manager:Ne}),(0,F.jsxs)(Ip,{isOpen:he,title:`Reset Encounter`,onClose:()=>{_e||ge(!1)},closeOnOverlayClick:!_e,maxWidth:`460px`,children:[(0,F.jsx)(Bh,{theme:e,children:`Choose how you want to reset initiative state.`}),(0,F.jsxs)(Rh,{children:[(0,F.jsx)(zh,{theme:e,onClick:()=>{mt(!1)},disabled:_e,children:_e?`Resetting...`:`Reset Round`}),(0,F.jsx)(zh,{theme:e,onClick:()=>{mt(!0)},disabled:_e,children:_e?`Resetting...`:`Reset Round and Clear Initiative List`})]})]}),(0,F.jsx)(Ip,{isOpen:!!ue,title:Ct?`${wt?.attr_name||`List`} for ${Ct.name}`:`List Reference`,onClose:()=>{de(null)},maxWidth:`620px`,children:(0,F.jsxs)(qh,{children:[(0,F.jsx)(Jh,{theme:e}),L.length===0?(0,F.jsx)(rg,{theme:e,children:`No entries.`}):(0,F.jsx)(Yh,{children:L.map(t=>(0,F.jsxs)(Xh,{theme:e,children:[(0,F.jsxs)(Zh,{children:[Tt?(0,F.jsx)(Qh,{type:`checkbox`,checked:!!t.inUse,readOnly:!0,tabIndex:-1}):null,(0,F.jsx)($h,{theme:e,children:t.name||`(Unnamed)`})]}),t.description?(0,F.jsx)(eg,{theme:e,children:t.description}):null,(()=>{let n=Et(t.description||``);return n.length===0?null:(0,F.jsx)(tg,{children:n.map((n,r)=>(0,F.jsx)(ng,{type:`button`,theme:e,onClick:()=>{let e=Ct?.createdUserId?c.find(e=>e.id===Ct.createdUserId):null;Ae({notation:n,actionName:t.name||wt?.attr_name||`List Roll`,tokenName:Ct?.name||`Unknown`,senderId:Ct?.createdUserId||l?.id||`unknown`,senderColor:e?.color||l?.color||`#ffffff`})},title:n,children:n},`${t.id}-inline-notation-${r}`))})})()]},t.id))})]})})]})};var og=`${te.EXTENSIONID}-partyhud`,sg=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,cg=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>v(e.theme.BACKGROUND,.35)};
`,lg=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`,ug=y(lg)`
  justify-content: center;
`,dg=y.span`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: ${e=>v(e.theme.PRIMARY,.9)};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`,fg=y.button`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>v(e.theme.OFFSET,.45)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,pg=y.select`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>v(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px;
  min-width: 160px;
`,mg=y.p`
  margin: 0;
  font-size: 12px;
  color: ${e=>v(e.theme.PRIMARY,.8)};
`,hg=y.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${e=>e.$disabled?.55:1};
`,gg=y.span`
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
`,_g=y.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>v(e.theme.BACKGROUND,.35)};
`,vg=y.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
`,yg=y.img`
  width: ${e=>e.$full?`100%`:`40px`};
  height: ${e=>e.$full?`100%`:`40px`};
  min-width: ${e=>e.$full?`100%`:`40px`};
  position: absolute;
  left: ${e=>e.$overlay?`20px`:`0`};
  top: ${e=>e.$overlay?`20px`:`0`};
  object-fit: cover;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>v(e.theme.BACKGROUND,.6)};
`,bg=y.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,xg=y.span`
  color: ${e=>e.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,Sg=y.input`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>v(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
`,Cg=y.p`
  color: ${e=>e.theme.PRIMARY};
  margin: 0;
`,wg=e=>{switch(e){case`bottom`:return`left`;case`left`:return`top`;case`top`:return`right`;case`right`:default:return`bottom`}},Tg=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,Eg=async()=>{await E.modal.open({id:og,url:`/pages/forgeparty.html`,fullScreen:!0,hideBackdrop:!0,hidePaper:!0,disablePointerEvents:!0})};const Dg=()=>{let e=(0,j.useRef)(!1),{theme:t}=je(),{attributes:n}=xm(),i=M(e=>e.items),a=M(e=>e.sceneMetadata);M(e=>e.roomMetadata);let o=M(e=>e.playerData),s=a,c=String(o?.role||``).toUpperCase()===`GM`,u=o?.id,d=l(h.PARTY_HUD_OPEN,u),f=l(h.PARTY_HUD_ORIENTATION,u),p=(s[d]??s[h.PARTY_HUD_OPEN])===!0,g=s[f]??s[h.PARTY_HUD_ORIENTATION],_=Tg(g)?g:`bottom`,v=s[h.PARTY_HUD_ATTR_ONE]||``,y=s[h.PARTY_HUD_ATTR_TWO]||``,b=s[h.PARTY_HUD_SHOW_HP_BARS]===!0,x=s[h.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!b,S=i.filter(e=>e.metadata[m.IN_PARTY]===!0),C=(0,j.useMemo)(()=>n.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[n]),w=async(e,t)=>{await E.scene.setMetadata({[e]:t})},T=async()=>{let t=!p;if(await w(d,t),!t){await E.modal.close(og),e.current=!1;return}await Eg(),e.current=!0},ee=async()=>{await w(f,wg(_))},D=async(e,t)=>{let n=t.trim();await E.scene.items.updateItems([e],e=>{let t={...e[0].metadata||{}};n?t[m.PORTRAIT_URL]=n:delete t[m.PORTRAIT_URL],e[0].metadata=t})};return(0,j.useEffect)(()=>{let t=!0;return(async()=>{if(p&&!e.current){await Eg(),t&&(e.current=!0);return}!p&&e.current&&(await E.modal.close(og),t&&(e.current=!1))})(),()=>{t=!1}},[p]),(0,F.jsx)(Bu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,F.jsxs)(fp,{theme:t,children:[(0,F.jsx)(pp,{theme:t,children:`Party`}),(0,F.jsxs)(cg,{theme:t,children:[(0,F.jsxs)(lg,{children:[(0,F.jsxs)(fg,{theme:t,onClick:()=>void ee(),children:[`Display: `,_.toUpperCase()]}),(0,F.jsx)(fg,{theme:t,onClick:()=>void T(),children:p?`Close Party HUD`:`Open Party HUD`})]}),c&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(ug,{children:[(0,F.jsx)(dg,{theme:t,children:`Show in HUD:`}),(0,F.jsxs)(hg,{$disabled:!c,children:[(0,F.jsx)(gg,{theme:t,children:`Show HP Bars`}),(0,F.jsx)(X,{label:`Party HUD Show HP Bars`,isOn:b,onChange:e=>{c&&(w(h.PARTY_HUD_SHOW_HP_BARS,e),e&&w(h.PARTY_HUD_SHOW_HP_NUMBERS,!1))}})]}),(0,F.jsxs)(hg,{$disabled:!c,children:[(0,F.jsx)(gg,{theme:t,children:`Show HP Numbers`}),(0,F.jsx)(X,{label:`Party HUD Show HP Numbers`,isOn:x,onChange:e=>{c&&(w(h.PARTY_HUD_SHOW_HP_NUMBERS,e),e&&w(h.PARTY_HUD_SHOW_HP_BARS,!1))}})]}),(0,F.jsxs)(pg,{theme:t,disabled:!c,value:v,onChange:e=>{let t=e.target.value;w(h.PARTY_HUD_ATTR_ONE,t),t&&t===y&&w(h.PARTY_HUD_ATTR_TWO,``)},children:[(0,F.jsx)(`option`,{value:``,children:`Extra Slot 1 (None)`}),C.map(e=>(0,F.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,F.jsxs)(pg,{theme:t,disabled:!c,value:y,onChange:e=>{let t=e.target.value;w(h.PARTY_HUD_ATTR_TWO,t),t&&t===v&&w(h.PARTY_HUD_ATTR_ONE,``)},children:[(0,F.jsx)(`option`,{value:``,children:`Extra Slot 2 (None)`}),C.map(e=>(0,F.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]})]}),(0,F.jsx)(mg,{theme:t,children:(0,F.jsxs)(F.Fragment,{children:[`Configure Party HUD and portraits.`,(0,F.jsx)(`br`,{}),`LIST attributes are excluded.`]})})]})]}),S.length===0?(0,F.jsx)(Cg,{theme:t,children:`No one is in the Party.  Add a unit using the ContextMenu on the token.`}):(0,F.jsx)(sg,{theme:t,children:S.map(e=>{let n=e.metadata?.[m.PORTRAIT_URL]||``,i=r(e)?e.image.url:void 0,a=e.metadata[m.UNIT_NAME]||e.name||`Unknown`,s=e.createdUserId===o?.id,l=c||s,u=i||`/logo.png`,d=!!n;return(0,F.jsxs)(_g,{theme:t,children:[(0,F.jsxs)(vg,{children:[(0,F.jsx)(yg,{theme:t,src:u,alt:a,$full:!d}),d&&(0,F.jsx)(yg,{theme:t,src:d?n:``,alt:`${a} override`,$overlay:!0})]}),(0,F.jsxs)(bg,{children:[(0,F.jsx)(xg,{theme:t,title:a,children:a}),l&&(0,F.jsx)(Sg,{theme:t,defaultValue:n,placeholder:`Portrait URL override (optional)`,onBlur:t=>{D(e.id,t.target.value)}})]})]},e.id)})})]})})};var Og=`${A}/hp-bar-effect`,kg=`${A}/hp-bar-owner`,Ag=`${A}/hp-number-text`,jg=`${A}/hp-number-owner`,Mg=e=>`HPB${e.slice(3)}`,Ng=e=>`HPN${e.slice(3)}`,Pg=(e,t,n)=>Math.max(t,Math.min(n,e)),Fg=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},Ig=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||_e.CURRENT_HP,maxHpBid:n?.attr_bid||_e.MAX_HP}},Lg=(e,t)=>{let n=Ig(t),r=e[h.HP_CURRENT_BID],i=e[h.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},Rg=(e,t,n)=>{let r=e.metadata?.[`${A}/${t}`],i=e.metadata?.[`${A}/${n}`],a=Fg(r),o=Fg(i);return o===null||o<=0||a===null?null:Pg(a/o*100,0,100)},zg=(e,t,n)=>{let r=e.metadata?.[`${A}/${t}`],i=e.metadata?.[`${A}/${n}`],a=Fg(r),o=Fg(i);return a===null?null:{currentHp:Math.trunc(a),maxHp:o===null?null:Math.trunc(o)}},Bg=e=>{let t=String(e||`bottom`).toLowerCase();return t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`},Vg=e=>{switch(Bg(e)){case`top`:return 0;case`bottom`:return 1;case`left`:return 2;case`right`:return 3;default:return 1}},Hg=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o,width:r,height:i}},Ug=(e,t,n)=>{let r=Hg(e,t),i=r.minX+r.width*.5,a=r.minY+r.height*.5,o;switch(n){case`top`:o={x:i,y:r.minY+r.height*.18};break;case`bottom`:o={x:i,y:r.minY+r.height*.82};break;case`left`:o={x:r.minX+r.width*.18,y:a};break;case`right`:o={x:r.minX+r.width*.82,y:a};break}let s=r.width*.25,c=r.height*.18;return{x:o.x-s,y:o.y-c}};const Wg=()=>{let e=M(e=>e.cacheReady),i=M(e=>e.sceneReady),a=M(e=>e.items),o=M(e=>e.localItems),l=M(e=>e.gridDpi),u=M(e=>e.roomMetadata),d=M(e=>e.sceneMetadata);return(0,j.useEffect)(()=>{if(!e||!i)return;let u=!1;return(async()=>{let e=d,i=e[h.SHOW_HP_BARS]??!1,f=e[h.SHOW_HP_NUMBERS]??!1,p=i,g=!i&&f,_=Bg(e[h.HP_BAR_ORIENTATION]),v=Vg(e[h.HP_BAR_ORIENTATION]),{currentHpBid:y,maxHpBid:b}=Lg(e,d[$.CURRENT_ATTR]||[]),x=o.filter(e=>n(e)&&e.metadata?.[Og]===!0),S=o.filter(e=>c(e)&&e.metadata?.[Ag]===!0);if(!p&&x.length>0)try{await E.scene.local.deleteItems(x.map(e=>e.id))}catch(e){O.error(`Failed to remove HP bar effects`,e)}if(!g&&S.length>0)try{await E.scene.local.deleteItems(S.map(e=>e.id))}catch(e){O.error(`Failed to remove HP number texts`,e)}if(!p&&!g)return;let C=a.filter(e=>r(e)&&e.metadata?.[m.ON_LIST]===!0),w=new Map,T=new Map;for(let e of C){if(p){let t=Rg(e,y,b);t!==null&&w.set(Mg(e.id),{unitId:e.id,hpPercent:t})}if(g&&r(e)){let t=zg(e,y,b);if(t){let n=t.maxHp===null?`${t.currentHp}`:`${t.currentHp}/${t.maxHp}`;T.set(Ng(e.id),{unitId:e.id,text:n,position:Ug(e,l,_)})}}}if(p){let e=new Map(x.map(e=>[e.id,e])),t=Array.from(w.entries()).filter(([t])=>!e.has(t)),n=x.filter(e=>!w.has(e.id)),r=x.filter(e=>{let t=w.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`orientation`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return e.attachedTo!==t.unitId||!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-v)>.001});if(u)return;if(n.length>0)try{await E.scene.local.deleteItems(n.map(e=>e.id))}catch(e){O.error(`Failed to remove stale HP bar effects`,e)}if(t.length>0){let e=t.map(([e,t])=>s().id(e).name(`HP Bar Effect`).effectType(`ATTACHMENT`).attachedTo(t.unitId).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).uniforms([{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:v}]).sksl(`
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
`).metadata({[Og]:!0,[kg]:t.unitId}).build());try{await E.scene.local.addItems(e)}catch(e){O.error(`Failed to add HP bar effects`,e)}}if(r.length>0){let e=r.map(e=>e.id);try{await E.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=w.get(e.id);if(!t)return;e.attachedTo=t.unitId;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:v}],e.metadata={...e.metadata,[Og]:!0,[kg]:t.unitId}})})}catch(e){O.error(`Failed to update HP bar effects`,e)}}}if(g){let e=new Map(S.map(e=>[e.id,e])),n=Array.from(T.entries()).filter(([t])=>!e.has(t)),r=S.filter(e=>!T.has(e.id)),i=S.filter(e=>{let t=T.get(e.id);if(!t)return!1;let n=e.text?.plainText,r=Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01;return e.attachedTo!==t.unitId||n!==t.text||r});if(u)return;if(r.length>0)try{await E.scene.local.deleteItems(r.map(e=>e.id))}catch(e){O.error(`Failed to remove stale HP number texts`,e)}if(n.length>0){let e=n.map(([e,n])=>{let r=C.find(e=>e.id===n.unitId);return t().id(e).name(`HP Number Text`).plainText(n.text).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(28).fontFamily(`Segoe UI`).textAlign(`CENTER`).position(n.position).metadata({[Ag]:!0,[jg]:n.unitId}).attachedTo(n.unitId).visible(r?.visible??!0).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build()});try{await E.scene.local.addItems(e)}catch(e){O.error(`Failed to add HP number texts`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await E.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=T.get(e.id);if(!t)return;e.attachedTo=t.unitId,e.position=t.position;let n=e;n.text&&(n.text.plainText=t.text),e.metadata={...e.metadata,[Ag]:!0,[jg]:t.unitId}})})}catch(e){O.error(`Failed to update HP number texts`,e)}}}})(),()=>{u=!0}},[e,i,a,o,l,u,d]),null};var Gg=`${A}/death-effect-token`,Kg=`${A}/death-effect-owner`,qg=e=>`DTH${e.slice(3)}`,Jg=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},Yg=e=>({currentHpBid:e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`})?.attr_bid||_e.CURRENT_HP}),Xg=(e,t)=>{let n=Yg(t),r=e[h.HP_CURRENT_BID],i=new Set(t.map(e=>e.attr_bid));return r&&i.has(r)?r:n.currentHpBid},Zg=(e,t)=>{let n=e.metadata?.[`${A}/${t}`];return Jg(n)};const Qg=()=>{let e=M(e=>e.cacheReady),t=M(e=>e.sceneReady),i=M(e=>e.items),a=M(e=>e.localItems),o=M(e=>e.roomMetadata),c=M(e=>e.sceneMetadata);return(0,j.useEffect)(()=>{if(!e||!t)return;let o=!1;return(async()=>{let e=c,t=e[h.SHOW_DEATH_EFFECT]??!1,l=Xg(e,c[$.CURRENT_ATTR]||[]),u=a.filter(e=>n(e)&&e.metadata?.[Gg]===!0);if(!t){if(u.length>0)try{await E.scene.local.deleteItems(u.map(e=>e.id))}catch(e){O.error(`Failed to remove death token effects`,e)}return}let d=i.filter(e=>r(e)&&e.metadata?.[m.ON_LIST]===!0),f=new Map;d.forEach(e=>{Zg(e,l)===0&&f.set(qg(e.id),e.id)});let p=new Map(u.map(e=>[e.id,e])),g=Array.from(f.entries()).filter(([e])=>!p.has(e)),_=u.filter(e=>!f.has(e.id)),v=u.filter(e=>{let t=f.get(e.id);if(!t)return!1;let n=e;return e.attachedTo!==t||n.metadata?.[Kg]!==t});if(!o){if(_.length>0)try{await E.scene.local.deleteItems(_.map(e=>e.id))}catch(e){O.error(`Failed to remove stale death token effects`,e)}if(g.length>0){let e=g.map(([e,t])=>s().id(e).name(`Death Token Effect`).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(`
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
`).metadata({[Gg]:!0,[Kg]:t}).build());try{await E.scene.local.addItems(e)}catch(e){O.error(`Failed to add death token effects`,e)}}if(v.length>0)try{await E.scene.local.updateItems(v.map(e=>e.id),e=>{e.forEach(e=>{let t=f.get(e.id);t&&(e.attachedTo=t,e.metadata={...e.metadata,[Gg]:!0,[Kg]:t})})})}catch(e){O.error(`Failed to update death token effects`,e)}}})(),()=>{o=!0}},[e,t,i,a,o,c]),null};var $g=`${A}/buff-effect-token`,e_=`${A}/buff-effect-owner`,t_=`${A}/debuff-effect-token`,n_=`${A}/debuff-effect-owner`,r_=`${A}/effect-preset`,i_=e=>`EFB${e.slice(3)}`,a_=e=>`EFD${e.slice(3)}`,o_=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const s_=()=>{let e=M(e=>e.cacheReady),t=M(e=>e.sceneReady),i=M(e=>e.items),a=M(e=>e.localItems),o=M(e=>e.roomMetadata),c=M(e=>e.sceneMetadata);return(0,j.useEffect)(()=>{if(!e||!t)return;let o=!1;return(async()=>{let e=c,t=e[h.BUFF_VISUAL_PRESET],l=e[h.DEBUFF_VISUAL_PRESET],u=Vp(t)?t:Lp,d=Hp(l)?l:Rp,f=Up(u),p=Wp(d),g=i.filter(e=>r(e)&&e.metadata?.[m.ON_LIST]===!0),_=new Set(g.map(e=>e.id)),v=new Map,y=(e,t)=>{let n=v.get(e)||{hasBuff:!1,hasDebuff:!1};t===`buff`?n.hasBuff=!0:n.hasDebuff=!0,v.set(e,n)};i.forEach(e=>{if(e.metadata?.[m.ON_LIST]!==!0)return;let t=o_(e.metadata?.[wm]);t.length!==0&&t.forEach(t=>{t.effectType!==`neutral`&&(t.targets.length>0?t.targets:[e.id]).forEach(e=>{_.has(e)&&(t.effectType===`buff`||t.effectType===`debuff`)&&y(e,t.effectType)})})});let b=new Map,x=new Map;g.forEach(e=>{let t=v.get(e.id);t?.hasBuff&&b.set(i_(e.id),e.id),t?.hasDebuff&&x.set(a_(e.id),e.id)});let S=a.filter(e=>n(e)&&e.metadata?.[$g]===!0),C=a.filter(e=>n(e)&&e.metadata?.[t_]===!0),w=async e=>{let{existing:t,desiredByOverlayId:n,preset:r,shader:i,name:a,flagKey:c,ownerKey:l}=e,u=new Map(t.map(e=>[e.id,e])),d=Array.from(n.entries()).filter(([e])=>!u.has(e)),f=t.filter(e=>!n.has(e.id)),p=t.filter(e=>{let t=n.get(e.id);if(!t)return!1;let i=e.metadata?.[r_];return e.attachedTo!==t||i!==r});if(!o){if(f.length>0)try{await E.scene.local.deleteItems(f.map(e=>e.id))}catch(e){O.error(`Failed to remove stale ${a.toLowerCase()} overlays`,e)}if(d.length>0){let e=d.map(([e,t])=>s().id(e).name(a).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(i).metadata({[c]:!0,[l]:t,[r_]:r}).build());try{await E.scene.local.addItems(e)}catch(e){O.error(`Failed to add ${a.toLowerCase()} overlays`,e)}}if(p.length>0)try{await E.scene.local.updateItems(p.map(e=>e.id),e=>{e.forEach(e=>{let t=n.get(e.id);if(!t)return;e.attachedTo=t;let a=e;a.sksl=i,e.metadata={...e.metadata,[c]:!0,[l]:t,[r_]:r}})})}catch(e){O.error(`Failed to update ${a.toLowerCase()} overlays`,e)}}};await w({existing:S,desiredByOverlayId:b,preset:u,shader:f,name:`Buff Token Effect`,flagKey:$g,ownerKey:e_}),await w({existing:C,desiredByOverlayId:x,preset:d,shader:p,name:`Debuff Token Effect`,flagKey:t_,ownerKey:n_})})(),()=>{o=!0}},[e,t,i,a,o,c]),null};var c_=`${A}/boss-hp-effect`,l_=`${A}/boss-hp-owner`,u_=`${A}/boss-hp-slot`,d_=e=>`BOSSHP${e}`,f_=(e,t,n)=>Math.max(t,Math.min(n,e)),p_=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},m_=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||_e.CURRENT_HP,maxHpBid:n?.attr_bid||_e.MAX_HP}},h_=(e,t)=>{let n=m_(t),r=e[h.HP_CURRENT_BID],i=e[h.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},g_=(e,t,n)=>{let r=e.metadata?.[`${A}/${t}`],i=e.metadata?.[`${A}/${n}`],a=p_(r),o=p_(i);return o===null||o<=0||a===null?null:f_(a/o*100,0,100)};const __=()=>{let e=M(e=>e.cacheReady),t=M(e=>e.sceneReady),i=M(e=>e.items),a=M(e=>e.localItems),o=M(e=>e.roomMetadata),c=M(e=>e.sceneMetadata);return(0,j.useEffect)(()=>{if(!e||!t)return;let o=!1;return(async()=>{let{currentHpBid:e,maxHpBid:t}=h_(c,c[$.CURRENT_ATTR]||[]),l=a.filter(e=>n(e)&&e.metadata?.[c_]===!0),u=i.filter(e=>r(e)&&e.metadata?.[m.ON_LIST]===!0&&e.metadata?.[m.BOSS_MODE]===!0).sort((e,t)=>{let n=Number(e.metadata?.[m.INITIATIVE]??0);return Number(t.metadata?.[m.INITIATIVE]??0)-n}).slice(0,2).map((n,r)=>{let i=g_(n,e,t);return i===null?null:{id:d_(r),unitId:n.id,slot:r,hpPercent:i}}).filter(e=>e!==null),d=new Map(u.map(e=>[e.id,e])),f=new Map(l.map(e=>[e.id,e])),p=l.filter(e=>!d.has(e.id)),h=u.filter(e=>!f.has(e.id)),g=l.filter(e=>{let t=d.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`slot`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-t.slot)>.001||e.metadata?.[l_]!==t.unitId});if(!o){if(p.length>0)try{await E.scene.local.deleteItems(p.map(e=>e.id))}catch(e){O.error(`Failed to remove stale boss HP viewport effects`,e)}if(h.length>0){let e=h.map(e=>s().id(e.id).name(`Boss HP Bar`).effectType(`VIEWPORT`).locked(!0).disableHit(!0).uniforms([{name:`hpPercent`,value:e.hpPercent},{name:`slot`,value:e.slot}]).sksl(`
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
`).metadata({[c_]:!0,[l_]:e.unitId,[u_]:e.slot}).build());try{await E.scene.local.addItems(e)}catch(e){O.error(`Failed to add boss HP viewport effects`,e)}}if(g.length>0)try{await E.scene.local.updateItems(g.map(e=>e.id),e=>{e.forEach(e=>{let t=d.get(e.id);if(!t)return;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`slot`,value:t.slot}],e.metadata={...e.metadata,[c_]:!0,[l_]:t.unitId,[u_]:t.slot}})})}catch(e){O.error(`Failed to update boss HP viewport effects`,e)}}})(),()=>{o=!0}},[e,t,i,a,o,c]),null};var v_=`${A}/current-turn-effect`;const y_=()=>{let e=M(e=>e.cacheReady),t=M(e=>e.sceneReady),n=M(e=>e.items),r=M(e=>e.roomMetadata),i=M(e=>e.sceneMetadata);return(0,j.useEffect)(()=>{if(!e||!t)return;let r=!1;return(async()=>{let e=i[h.SHOW_TURN_EFFECT]===!0,t=i[h.CURRENT_TURN];if(!e||!t){try{await E.scene.local.deleteItems([v_])}catch{}return}if(!n.find(e=>e.id===t)){try{await E.scene.local.deleteItems([v_])}catch{}return}if(!r){try{let e=!1;if(await E.scene.local.updateItems([v_],n=>{let r=n[0];r&&(r.attachedTo=t,e=!0)}),e)return}catch{}if(!r)try{let e=s().id(v_).name(`Current Turn Effect`).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).sksl(`
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

`).build();await E.scene.local.addItems([e])}catch(e){O.error(`Failed to sync current turn effect`,e)}}})(),()=>{r=!0}},[e,t,n,r,i]),null},b_=()=>{let[e,t]=(0,j.useState)(!1),{updateThemeFromSystem:n}=je(),r=M(e=>e.sceneMetadata),i=M(e=>e.cacheReady);return(0,j.useEffect)(()=>{if(!i)return;let e=r[$.CURRENT_THEME];if(!e?.primary||!e?.offset||!e?.background||!e?.border){n(w.theme_primary,w.theme_offset,w.theme_background,w.theme_border,w.background_url);return}n(e.primary,e.offset,e.background,e.border,e.background_url)},[i,r,n]),(0,j.useEffect)(()=>{if(e)return;let a=!0,o=async()=>{if(i)try{O.log(`Starting app initialization...`),await s(),a&&(t(!0),O.log(`App initialization complete`))}catch(e){O.error(`Error during app initialization:`,e),a&&t(!0)}},s=async()=>{try{let e=r[$.CURRENT_THEME],t=r[$.CURRENT_CARD],i=r[$.CURRENT_LIST],a=r[$.CURRENT_ATTR];if(!e||!Array.isArray(t)||!Array.isArray(i)||!Array.isArray(a)){O.log(`System data not found, initializing with defaults`),await c();return}O.log(`Loading existing system theme:`,e),n(e.primary,e.offset,e.background,e.border,e.background_url)}catch(e){O.error(`Error loading system data:`,e),await c()}},c=async()=>{let e={primary:w.theme_primary,offset:w.theme_offset,background:w.theme_background,border:w.theme_border,background_url:w.background_url};await E.scene.setMetadata({[$.CURRENT_THEME]:e,[$.CURRENT_CARD]:w.card_layout,[$.CURRENT_LIST]:w.list_layout,[$.CURRENT_ATTR]:w.attributes,[$.SYSTEM_NAME]:w.name,[$.IMPORT_DATE]:null}),O.log(`Default system initialized`),n(e.primary,e.offset,e.background,e.border,e.background_url)};return o(),()=>{a=!1}},[i,e]),{isInitialized:e}};var x_=S`
  ${{"*, ::before, ::after":{boxSizing:`border-box`,borderWidth:`0`,borderStyle:`solid`,borderColor:`#e2e8f0`,"--tw-border-spacing-x":`0`,"--tw-border-spacing-y":`0`,"--tw-translate-x":`0`,"--tw-translate-y":`0`,"--tw-rotate":`0`,"--tw-skew-x":`0`,"--tw-skew-y":`0`,"--tw-scale-x":`1`,"--tw-scale-y":`1`,"--tw-pan-x":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pan-y":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pinch-zoom":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-scroll-snap-strictness":`proximity`,"--tw-gradient-from-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-via-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-to-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ordinal":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-slashed-zero":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-figure":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-spacing":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-fraction":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-shadow":`0 0 #0000`,"--tw-ring-shadow":`0 0 #0000`,"--tw-shadow":`0 0 #0000`,"--tw-shadow-colored":`0 0 #0000`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`0px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`rgb(66 153 225 / 0.5)`,"--tw-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-drop-shadow":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-opacity":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-size":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-layout":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-paint":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-style":`var(--tw-empty,/*!*/ /*!*/)`},"::before, ::after":{"--tw-content":`''`},"html, :host":{lineHeight:`1.5`,WebkitTextSizeAdjust:`100%`,MozTabSize:`4`,tabSize:`4`,fontFamily:`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,fontFeatureSettings:` normal`,fontVariationSettings:` normal`,WebkitTapHighlightColor:`transparent`},body:{margin:`0`,lineHeight:`inherit`},hr:{height:`0`,color:`inherit`,borderTopWidth:`1px`},"abbr:where([title])":{textDecoration:`underline dotted`},"h1, h2, h3, h4, h5, h6":{fontSize:`inherit`,fontWeight:`inherit`},a:{color:`inherit`,textDecoration:`inherit`},"b, strong":{fontWeight:`bolder`},"code, kbd, samp, pre":{fontFamily:`Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,fontFeatureSettings:` normal`,fontVariationSettings:` normal`,fontSize:`1em`},small:{fontSize:`80%`},"sub, sup":{fontSize:`75%`,lineHeight:`0`,position:`relative`,verticalAlign:`baseline`},sub:{bottom:`-0.25em`},sup:{top:`-0.5em`},table:{textIndent:`0`,borderColor:`inherit`,borderCollapse:`collapse`},"button, input, optgroup, select, textarea":{fontFamily:`inherit`,fontFeatureSettings:`inherit`,fontVariationSettings:`inherit`,fontSize:`100%`,fontWeight:`inherit`,lineHeight:`inherit`,letterSpacing:`inherit`,color:`inherit`,margin:`0`,padding:`0`},"button, select":{textTransform:`none`},"button, input:where([type='button']), input:where([type='reset']), input:where([type='submit'])":{WebkitAppearance:`button`,backgroundColor:`transparent`,backgroundImage:`none`},":-moz-focusring":{outline:`auto`},":-moz-ui-invalid":{boxShadow:`none`},progress:{verticalAlign:`baseline`},"::-webkit-inner-spin-button, ::-webkit-outer-spin-button":{height:`auto`},"[type='search']":{WebkitAppearance:`textfield`,outlineOffset:`-2px`},"::-webkit-search-decoration":{WebkitAppearance:`none`},"::-webkit-file-upload-button":{WebkitAppearance:`button`,font:`inherit`},summary:{display:`list-item`},"blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre":{margin:`0`},fieldset:{margin:`0`,padding:`0`},legend:{padding:`0`},"ol, ul, menu":{listStyle:`none`,margin:`0`,padding:`0`},dialog:{padding:`0`},textarea:{resize:`vertical`},"input::placeholder, textarea::placeholder":{opacity:`1`,color:`#cbd5e0`},'button, [role="button"]':{cursor:`pointer`},":disabled":{cursor:`default`},"img, svg, video, canvas, audio, iframe, embed, object":{display:`block`,verticalAlign:`middle`},"img, video":{maxWidth:`100%`,height:`auto`},'[hidden]:where(:not([hidden="until-found"]))':{display:`none`},"::backdrop":{"--tw-border-spacing-x":`0`,"--tw-border-spacing-y":`0`,"--tw-translate-x":`0`,"--tw-translate-y":`0`,"--tw-rotate":`0`,"--tw-skew-x":`0`,"--tw-skew-y":`0`,"--tw-scale-x":`1`,"--tw-scale-y":`1`,"--tw-pan-x":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pan-y":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-pinch-zoom":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-scroll-snap-strictness":`proximity`,"--tw-gradient-from-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-via-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-gradient-to-position":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ordinal":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-slashed-zero":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-figure":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-spacing":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-numeric-fraction":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-shadow":`0 0 #0000`,"--tw-ring-shadow":`0 0 #0000`,"--tw-shadow":`0 0 #0000`,"--tw-shadow-colored":`0 0 #0000`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`0px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`rgb(66 153 225 / 0.5)`,"--tw-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-drop-shadow":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-blur":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-brightness":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-contrast":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-grayscale":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-hue-rotate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-invert":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-opacity":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-saturate":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-backdrop-sepia":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-size":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-layout":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-paint":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-contain-style":`var(--tw-empty,/*!*/ /*!*/)`},"input:where([type='text']),input:where(:not([type])),input:where([type='email']),input:where([type='url']),input:where([type='password']),input:where([type='number']),input:where([type='date']),input:where([type='datetime-local']),input:where([type='month']),input:where([type='search']),input:where([type='tel']),input:where([type='time']),input:where([type='week']),select:where([multiple]),textarea,select":{appearance:`none`,backgroundColor:`#fff`,borderColor:`#a0aec0`,borderWidth:`1px`,borderRadius:`0px`,paddingTop:`0.5rem`,paddingRight:`0.75rem`,paddingBottom:`0.5rem`,paddingLeft:`0.75rem`,fontSize:`1rem`,lineHeight:`1.5rem`,"--tw-shadow":`0 0 #0000`},"input:where([type='text']):focus, input:where(:not([type])):focus, input:where([type='email']):focus, input:where([type='url']):focus, input:where([type='password']):focus, input:where([type='number']):focus, input:where([type='date']):focus, input:where([type='datetime-local']):focus, input:where([type='month']):focus, input:where([type='search']):focus, input:where([type='tel']):focus, input:where([type='time']):focus, input:where([type='week']):focus, select:where([multiple]):focus, textarea:focus, select:focus":{outline:`2px solid transparent`,outlineOffset:`2px`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`0px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`#3182ce`,"--tw-ring-offset-shadow":`var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,"--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:`var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,borderColor:`#3182ce`},"input::placeholder,textarea::placeholder":{color:`#a0aec0`,opacity:`1`},"::-webkit-datetime-edit-fields-wrapper":{padding:`0`},"::-webkit-date-and-time-value":{minHeight:`1.5em`,textAlign:`inherit`},"::-webkit-datetime-edit":{display:`inline-flex`},"::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field":{paddingTop:`0`,paddingBottom:`0`},select:{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a0aec0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,backgroundPosition:`right 0.5rem center`,backgroundRepeat:`no-repeat`,backgroundSize:`1.5em 1.5em`,paddingRight:`2.5rem`,printColorAdjust:`exact`},'select:where([multiple]),select:where([size]:not([size="1"]))':{backgroundImage:`initial`,backgroundPosition:`initial`,backgroundRepeat:`unset`,backgroundSize:`initial`,paddingRight:`0.75rem`,printColorAdjust:`unset`},"input:where([type='checkbox']),input:where([type='radio'])":{appearance:`none`,padding:`0`,printColorAdjust:`exact`,display:`inline-block`,verticalAlign:`middle`,backgroundOrigin:`border-box`,userSelect:`none`,flexShrink:`0`,height:`1rem`,width:`1rem`,color:`#3182ce`,backgroundColor:`#fff`,borderColor:`#a0aec0`,borderWidth:`1px`,"--tw-shadow":`0 0 #0000`},"input:where([type='checkbox'])":{borderRadius:`0px`},"input:where([type='radio'])":{borderRadius:`100%`},"input:where([type='checkbox']):focus,input:where([type='radio']):focus":{outline:`2px solid transparent`,outlineOffset:`2px`,"--tw-ring-inset":`var(--tw-empty,/*!*/ /*!*/)`,"--tw-ring-offset-width":`2px`,"--tw-ring-offset-color":`#fff`,"--tw-ring-color":`#3182ce`,"--tw-ring-offset-shadow":`var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,"--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:`var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`},"input:where([type='checkbox']):checked,input:where([type='radio']):checked":{borderColor:`transparent`,backgroundColor:`currentColor`,backgroundSize:`100% 100%`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`},"input:where([type='checkbox']):checked":{backgroundImage:`url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`},"@media (forced-colors: active)":{"input:where([type='checkbox']):checked":{appearance:`auto`},"input:where([type='radio']):checked":{appearance:`auto`},"input:where([type='checkbox']):indeterminate":{appearance:`auto`}},"input:where([type='radio']):checked":{backgroundImage:`url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`},"input:where([type='checkbox']):checked:hover,input:where([type='checkbox']):checked:focus,input:where([type='radio']):checked:hover,input:where([type='radio']):checked:focus":{borderColor:`transparent`,backgroundColor:`currentColor`},"input:where([type='checkbox']):indeterminate":{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e")`,borderColor:`transparent`,backgroundColor:`currentColor`,backgroundSize:`100% 100%`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`},"input:where([type='checkbox']):indeterminate:hover,input:where([type='checkbox']):indeterminate:focus":{borderColor:`transparent`,backgroundColor:`currentColor`},"input:where([type='file'])":{background:`unset`,borderColor:`inherit`,borderWidth:`0`,borderRadius:`0`,padding:`0`,fontSize:`unset`,lineHeight:`inherit`},"input:where([type='file']):focus":{outline:`1px auto -webkit-focus-ring-color`}}}
  
  :root {
    --forge-primary: ${e=>e.theme.PRIMARY};
    --forge-offset: ${e=>e.theme.OFFSET};
    --forge-background: ${e=>e.theme.BACKGROUND};
    --forge-border: ${e=>e.theme.BORDER};
  }

  /* Base styling for the entire app */
  body {
    background-color: ${e=>v(e.theme.BACKGROUND,.5)};
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
    background: ${e=>v(e.theme.BACKGROUND,.3)};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>v(e.theme.OFFSET,.5)};
    border-radius: 5px;
    
    &:hover {
      background: ${e=>v(e.theme.OFFSET,.7)};
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

  .tippy-box[data-theme~='battlesystem'] {
    font-style: italic;
    background: ${e=>e.theme.BACKGROUND};
    color: ${e=>e.theme.PRIMARY};
    border: 1px solid ${e=>e.theme.BORDER};
  }

  .tippy-box[data-theme~='battlesystem'][data-placement^='top']>.tippy-arrow::before {
    border-top-color: ${e=>e.theme.BACKGROUND};
  }

  .tippy-box[data-theme~='battlesystem'][data-placement^='bottom']>.tippy-arrow::before {
    border-bottom-color: ${e=>e.theme.BACKGROUND};
  }

  .tippy-box[data-theme~='battlesystem'][data-placement^='left']>.tippy-arrow::before {
    border-left-color: ${e=>e.theme.BACKGROUND};
  }

  .tippy-box[data-theme~='battlesystem'][data-placement^='right']>.tippy-arrow::before {
    border-right-color: ${e=>e.theme.BACKGROUND};
  }
`,S_=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e2232;
  color: #ffffff;
`,C_=y.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: #9d99ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,w_=y.p`
  margin-top: 20px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;function T_(){let{sceneReady:e,cacheReady:t,playerData:n}=M(),{isInitialized:r}=b_(),{theme:i}=je(),[a,o]=(0,j.useState)(`ForgeMain`),[s,c]=(0,j.useState)(!1),l=String(n?.role||``).toUpperCase()===`GM`;return(0,j.useEffect)(()=>{a!==`ForgeMain`&&E.action.setWidth(350)},[a]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(x_,{theme:i}),!e||!t||!r?(0,F.jsxs)(S_,{children:[(0,F.jsx)(C_,{}),(0,F.jsx)(w_,{children:e?t?r?`Loading...`:`Initializing system...`:`Loading cache...`:`Connecting to scene...`})]}):(0,F.jsxs)($f,{children:[(0,F.jsx)(Wg,{}),(0,F.jsx)(Qg,{}),(0,F.jsx)(s_,{}),(0,F.jsx)(__,{}),(0,F.jsx)(y_,{}),(0,F.jsx)(ep,{theme:i,$backgroundUrl:i.BACKGROUND_URL,children:(0,F.jsx)(Yc,{mode:`wait`,children:(()=>{switch(a){case`ForgeMain`:return(0,F.jsx)(ag,{},`main`);case`Settings`:return l?(0,F.jsx)(wp,{},`settings`):(0,F.jsx)(ag,{},`main`);case`Party`:return(0,F.jsx)(Dg,{},`party`);case`System`:return l?(0,F.jsx)(bm,{},`system`):(0,F.jsx)(ag,{},`main`);case`ChatLog`:return(0,F.jsx)(Ap,{},`chatlog`)}})()})}),(0,F.jsx)(dp,{isOpen:s,currentPage:a,onToggle:()=>c(!s),onNavigate:e=>{if(!l&&(e===`Settings`||e===`System`)){o(`ForgeMain`),c(!1);return}o(e),c(!1)}})]})]})}var E_=T_,D_=class{static{this.ALPHANUMERICTEXTMATCH=/\s[\da-zA-Z]$/}};function O_(e){for(let t of A_)if(e.includes(t)){let n=A_[Math.floor(Math.random()*A_.length)];return e.replace(t,n)}return k_(e)}function k_(e){return`${A_[Math.floor(Math.random()*A_.length)]} ${e}`}const A_=`Grizzled.Wily.Stoic.Mellow.Pensive.Shrewd.Cautious.Hardy.Nimble.Tenacious.Gritty.Tolerant.Hardy.Adroit.Resilient.Slight.Stout.Durable.Subtle.Sober.Clever.Brave.Calm.Wise.Cunning.Alert.Swift.Agile.Loyal.Sturdy.Stable.Sneaky.Clever.Resourceful.Shady.Stalwart.Vigilant.Staunch.Fierce.Vigorous.Robust.Fearless.Dauntless.Resolute.Sagacious.Prudent.Judicious.Astute.Savvy.Sharp.Quick.Witty.Smart.Snippy.Crafty.Deft.Sly.Artful.Clever.Sneering.Tough.Rugged.Solid.Strong.Sturdy.Tough.Gritty.Rough.Hardened.Burly.Muscular.Brawny.Rowdy.Forceful.Snorting.Potent.Martial.Speckled.Mottled.Disheveled`.split(`.`);var j_=`com.battle-system.forge/view-unit`,M_=e=>e.trim().toLowerCase(),N_=e=>{let t=e.trim();return t?D_.ALPHANUMERICTEXTMATCH.test(t)?t.slice(0,-2):t:e},P_=async e=>{let t=await E.viewport.getHeight(),n=t>800?700:t-100;await E.popover.open({id:te.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(e)}`,height:n,width:350,anchorReference:`POSITION`,anchorPosition:{left:await E.viewport.getWidth()/2,top:await E.viewport.getHeight()/2},anchorOrigin:{horizontal:`CENTER`,vertical:`CENTER`},transformOrigin:{horizontal:`CENTER`,vertical:`CENTER`},hidePaper:!0,disableClickAway:!0})},F_=async e=>{let t=Array.from(new Set(e.map(e=>e.trim()).filter(e=>e.length>0))),n=new Map;if(t.length===0)return n;try{let{data:e,error:r}=await ce.from(`bs_forge_creatures`).select(`name,metadata,is_active`).eq(`is_active`,!0).in(`name`,t).limit(250);if(!r&&Array.isArray(e)){let t=e;for(let e of t){let t=M_(String(e.name||``));if(!t||n.has(t))continue;let r=e.metadata&&typeof e.metadata==`object`&&!Array.isArray(e.metadata)?le(e.metadata):null;r&&n.set(t,r)}}}catch(e){O.log(`Supabase collection lookup failed, falling back to local collection`,e)}let r=await fe(),i=new Map;for(let e of r){let t=M_(e.name);if(!t)continue;let n=i.get(t);n?n.push(e):i.set(t,[e])}for(let e of t){let t=M_(e);if(n.has(t))continue;let r=i.get(t)?.[0];!r||!r.metadata||n.set(t,le(r.metadata))}return n};function I_({children:e}){M(e=>e.roomMetadata);let t=M(e=>e.sceneMetadata),n=M(e=>e.items),r=M(e=>e.playerData),i=t;return(0,j.useEffect)(()=>{E.onReady(()=>{E.contextMenu.create({id:m.ON_LIST,icons:[{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,m.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,m.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,m.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,m.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}}],async onClick(e){if(O.info(`Add to Combat Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[m.ON_LIST]===!0))await E.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[m.ON_LIST],delete t.metadata[m.INITIATIVE]});else{let r=[],a=[];for(let t of e.items){if(t.metadata[m.FABRICATED]===!0)continue;let e=N_(t.text?.plainText||t.name);r.push(e)}await E.action.setBadgeText(`Retrieving Data.. ⏱️`);let o=await F_(r);await E.action.setBadgeText(void 0);for(let t of e.items){let e={};if(t.metadata[m.FABRICATED]!==!0){let r=N_(t.text?.plainText||t.name),a=o.get(M_(r));a&&Object.assign(e,a),(typeof e[m.UNIT_NAME]!=`string`||!String(e[m.UNIT_NAME]).trim())&&(e[m.UNIT_NAME]=t.name),e[m.FABRICATED]=!0,i[h.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[m.UNIT_NAME]!=null&&e.id!==t.id).map(e=>e.metadata[m.UNIT_NAME]).includes(r)&&(e[m.UNIT_NAME]=O_(r))}e[m.ON_LIST]=!0,e[m.INITIATIVE]=0,a.push({id:t.id,metadata:e})}await E.scene.items.updateItems(e.items,e=>{for(let n of e){let e=a.find(e=>e.id===n.id);if(e&&(Object.assign(n.metadata,e.metadata),t[h.SHOW_NAMES]===!0)){let t=n;t.text&&(t.text.plainText=String(e.metadata[m.UNIT_NAME]||``))}}})}}}),E.contextMenu.create({id:m.IN_PARTY,icons:[{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,m.IN_PARTY],operator:`!=`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,m.IN_PARTY],operator:`!=`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,m.IN_PARTY],operator:`==`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,m.IN_PARTY],operator:`==`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){O.info(`Add to Party Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[m.IN_PARTY]===!0)?await E.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[m.IN_PARTY]}):await E.scene.items.updateItems(e.items,e=>{for(let t of e)t.metadata[m.IN_PARTY]=!0})}}),E.contextMenu.create({id:j_,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){O.info(`View Unit Clicked: ${e.items[0].name}`);let r=e.items[0];if(!r)return;let a={};if(r.metadata[m.FABRICATED]!==!0){let e=N_(r.text?.plainText||r.name);await E.action.setBadgeText(`Retrieving Data.. ⏱️`);let o=await F_([e]);await E.action.setBadgeText(void 0);let s=o.get(M_(e));s&&Object.assign(a,s),(typeof a[m.UNIT_NAME]!=`string`||!String(a[m.UNIT_NAME]).trim())&&(a[m.UNIT_NAME]=r.name),a[m.FABRICATED]=!0,i[h.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[m.UNIT_NAME]!=null&&e.id!==r.id).map(e=>e.metadata[m.UNIT_NAME]).includes(e)&&(a[m.UNIT_NAME]=O_(e)),await E.scene.items.updateItems([r],e=>{let n=e[0];if(Object.assign(n.metadata,a),t[h.SHOW_NAMES]===!0){let e=n;e.text&&(e.text.plainText=String(a[m.UNIT_NAME]||``))}})}await P_(r.id)}})})},[i]),(0,F.jsx)(F.Fragment,{children:e})}we.createRoot(document.getElementById(`root`)).render((0,F.jsx)(j.StrictMode,{children:(0,F.jsx)(u,{children:(0,F.jsx)(Oe,{children:(0,F.jsx)(I_,{children:(0,F.jsx)(Ae,{children:(0,F.jsx)(E_,{})})})})})}));