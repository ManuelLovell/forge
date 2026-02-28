import{A as e,C as t,D as n,E as r,M as i,N as a,O as o,S as s,T as c,_ as l,b as u,c as d,d as f,f as p,g as m,h,k as g,l as _,m as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T,v as ee,w as E,x as te,y as ne}from"./defaultgamesystem-B6QzEszZ.js";import{_ as D,a as re,d as O,f as ie,g as ae,h as oe,l as se,m as ce,n as le,o as ue,p as de,r as fe,s as pe,t as me,u as he,v as ge,y as _e}from"./FormulaParser-DGseWzs1.js";import{n as ve,t as k}from"./MockData-BtYwoHfq.js";var ye=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},be=(e=>e?ye(e):ye),A=a(e(),1),xe=e=>e;function Se(e,t=xe){let n=A.useSyncExternalStore(e.subscribe,A.useCallback(()=>t(e.getState()),[e,t]),A.useCallback(()=>t(e.getInitialState()),[e,t]));return A.useDebugValue(n),n}var j=e=>{let t=be(e),n=e=>Se(t,e);return Object.assign(n,t),n},Ce=(e=>e?j(e):j),we=a(g(),1);const M=Ce(e=>({cacheReady:!1,setCacheReady:t=>e({cacheReady:t}),sceneReady:!1,setSceneReady:t=>e({sceneReady:t}),items:[],setItems:t=>e({items:t}),localItems:[],setLocalItems:t=>e({localItems:t}),sceneMetadata:{},setSceneMetadata:t=>e({sceneMetadata:{...t}}),roomMetadata:{},setRoomMetadata:t=>e({roomMetadata:{...t}}),gridDpi:150,setGridDpi:t=>e({gridDpi:t}),playerData:void 0,setPlayerData:t=>e({playerData:t}),partyData:[],setPartyData:t=>e({partyData:t})}));var N=0;const P=Ce(e=>({messages:[],initialized:!1,addMessage:t=>{let n=new Date,r=n.getHours(),i=n.getMinutes(),a=r>=12?`PM`:`AM`,o=`${r%12||12}:${i<10?`0${i}`:i} ${a}`;e(e=>({messages:[...e.messages,{id:N++,text:t,timestamp:o}]}))},setInitialized:t=>e({initialized:t})})),Te=()=>{P.getState().initialized||(E.broadcast.onMessage(`${ne.EXTENSIONID}/chatlog`,e=>{let t=P.getState().addMessage;typeof e.data==`string`?t(e.data):typeof e.data==`object`&&e.data.message&&t(e.data.message)}),P.getState().setInitialized(!0))};var F=te(),Ee=`${ne.EXTENSIONID}/chatlog`,De=`${ne.EXTENSIONID}/roll-notification`;function Oe({children:e}){let t=M(e=>e.setItems),n=M(e=>e.setLocalItems),r=M(e=>e.setSceneMetadata),i=M(e=>e.setRoomMetadata),a=M(e=>e.setGridDpi),o=M(e=>e.setPlayerData),s=M(e=>e.setPartyData),c=M(e=>e.setSceneReady),l=M(e=>e.setCacheReady);return(0,A.useEffect)(()=>{let e=(e,t)=>{let n=e[h.ENABLE_CONSOLE_LOG];typeof n==`boolean`&&D.setEnabled(n)},u=e=>{_e(e);let{sceneMetadata:t,roomMetadata:n}=M.getState(),r=t,i=r[h.ENABLE_OBR_NOTIFICATION];if(r[h.SHOW_NOTIFICATION_TO_ALL]===!0){E.broadcast.sendMessage(Ee,{message:e},{destination:`ALL`}),i===!0&&E.broadcast.sendMessage(De,{message:e},{destination:`ALL`});return}P.getState().addMessage(e),i===!0&&E.notification.show(e,`SUCCESS`)},d=({explicitMessage:e,tokenName:t,actionName:n,total:r})=>{if(typeof e==`string`&&e.trim().length>0)return e;let i=t||`Unknown`,a=n||`Action`;return typeof r==`number`&&Number.isFinite(r)?`${i} rolled ${a} for ${r}!`:`${i} rolled ${a}.`};Te();let f=E.broadcast.onMessage(De,e=>{let t=e.data,n=typeof t?.message==`string`?t.message:null;n&&E.notification.show(n,`SUCCESS`)});de(e=>{let t=ie(e.rollHtml);u(d({tokenName:e.senderName,actionName:e.actionName,total:t}))}),oe(e=>{u(d({explicitMessage:e.message}))}),ce(e=>{u(d({tokenName:e.playerName,actionName:e.result.diceNotation,total:e.result.totalValue}))});let p,m,g,_,v,y,b,x,S=async()=>{let[c,u,d,f,p,h,S,C,w,T,ee,te]=await Promise.all([E.scene.items.getItems(),E.scene.local.getItems(),E.scene.getMetadata(),E.room.getMetadata(),E.scene.grid.getDpi(),E.party.getPlayers(),E.player.getColor(),E.player.getRole(),E.player.getConnectionId(),E.player.getId(),E.player.getMetadata(),E.player.getName()]);t(c),n(u),r(d),i(f),e(d,f),a(p),o({id:T,name:te,connectionId:w,role:C,color:S,metadata:ee}),s(h),m=E.scene.items.onChange(t),g=E.scene.local.onChange(n),y=E.scene.grid.onChange(e=>a(e.dpi)),b=E.player.onChange(o),x=E.party.onChange(s),_=E.scene.onMetadataChange(t=>{r(t),e(t,M.getState().roomMetadata)}),v=E.room.onMetadataChange(t=>{i(t),e(M.getState().sceneMetadata,t)}),l(!0),D.log(`CacheManager: Cache is ready`)};return E.onReady(async()=>{let e=await E.scene.isReady();c(e),e&&(D.log(`Scene is ready on initial load, syncing cache...`),await S()),p=E.scene.onReadyChange(async e=>{c(e),e?(D.log(`Scene became ready, syncing cache...`),await S()):(D.log(`Scene is no longer ready, clearing cache...`),l(!1))})}),()=>{p?.(),m?.(),g?.(),_?.(),v?.(),y?.(),b?.(),x?.(),f?.()}},[c,l,t,n,r,i,a,o,s]),(0,F.jsx)(F.Fragment,{children:e})}var ke=(0,A.createContext)(void 0);const Ae=({children:e})=>{let[t,n]=(0,A.useState)(p),r=(0,A.useCallback)((e,t,r,i,a)=>{n(n=>n.PRIMARY===e&&n.OFFSET===t&&n.BACKGROUND===r&&n.BORDER===i&&n.BACKGROUND_URL===(a||void 0)?n:x(e,t,r,i,a))},[]);return(0,F.jsx)(ke.Provider,{value:{theme:t,setTheme:n,updateThemeFromSystem:r},children:e})},je=()=>{let e=(0,A.useContext)(ke);if(!e)throw Error(`useForgeTheme must be used within a ThemeProvider`);return e};var Me=(0,A.createContext)({});function Ne(e){let t=(0,A.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Pe=typeof window<`u`,Fe=Pe?A.useLayoutEffect:A.useEffect,Ie=(0,A.createContext)(null);function Le(e,t){e.indexOf(t)===-1&&e.push(t)}function Re(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var ze=(e,t,n)=>n>t?t:n<e?e:n,Be={},Ve=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function He(e){return typeof e==`object`&&!!e}var I=e=>/^0[^.\s]+$/u.test(e);function Ue(e){let t;return()=>(t===void 0&&(t=e()),t)}var We=e=>e,Ge=(e,t)=>n=>t(e(n)),Ke=(...e)=>e.reduce(Ge),qe=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},Je=class{constructor(){this.subscriptions=[]}add(e){return Le(this.subscriptions,e),()=>Re(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},Ye=e=>e*1e3,Xe=e=>e/1e3;function Ze(e,t){return t?e*(1e3/t):0}var Qe=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,$e=1e-7,et=12;function tt(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Qe(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>$e&&++s<et);return o}function nt(e,t,n,r){if(e===t&&n===r)return We;let i=t=>tt(t,0,1,e,n);return e=>e===0||e===1?e:Qe(i(e),t,r)}var rt=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,it=e=>t=>1-e(1-t),at=nt(.33,1.53,.69,.99),ot=it(at),st=rt(ot),ct=e=>(e*=2)<1?.5*ot(e):.5*(2-2**(-10*(e-1))),lt=e=>1-Math.sin(Math.acos(e)),ut=it(lt),dt=rt(lt),ft=nt(.42,0,1,1),pt=nt(0,0,.58,1),mt=nt(.42,0,.58,1),ht=e=>Array.isArray(e)&&typeof e[0]!=`number`,gt=e=>Array.isArray(e)&&typeof e[0]==`number`,_t={linear:We,easeIn:ft,easeInOut:mt,easeOut:pt,circIn:lt,circInOut:dt,circOut:ut,backIn:ot,backInOut:st,backOut:at,anticipate:ct},vt=e=>typeof e==`string`,yt=e=>{if(gt(e)){e.length;let[t,n,r,i]=e;return nt(t,n,r,i)}else if(vt(e))return _t[e],`${e}`,_t[e];return e},bt=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],xt={value:null,addProjectionMetrics:null};function St(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.has(e)||s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),t&&xt.value&&xt.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Ct=40;function wt(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=bt.reduce((e,n)=>(e[n]=St(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Be.useManualTiming?i.timestamp:performance.now();n=!1,Be.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,Ct),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:bt.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<bt.length;t++)o[bt[t]].cancel(e)},state:i,steps:o}}var{schedule:L,cancel:Tt,state:R,steps:Et}=wt(typeof requestAnimationFrame<`u`?requestAnimationFrame:We,!0),Dt;function Ot(){Dt=void 0}var z={now:()=>(Dt===void 0&&z.set(R.isProcessing||Be.useManualTiming?R.timestamp:performance.now()),Dt),set:e=>{Dt=e,queueMicrotask(Ot)}},kt={layout:0,mainThread:0,waapi:0},At=e=>t=>typeof t==`string`&&t.startsWith(e),jt=At(`--`),Mt=At(`var(--`),Nt=e=>Mt(e)?Pt.test(e.split(`/*`)[0].trim()):!1,Pt=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ft(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var It={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Lt={...It,transform:e=>ze(0,1,e)},Rt={...It,default:1},zt=e=>Math.round(e*1e5)/1e5,Bt=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Vt(e){return e==null}var Ht=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ut=(e,t)=>n=>!!(typeof n==`string`&&Ht.test(n)&&n.startsWith(e)||t&&!Vt(n)&&Object.prototype.hasOwnProperty.call(n,t)),Wt=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Bt);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Gt=e=>ze(0,255,e),Kt={...It,transform:e=>Math.round(Gt(e))},qt={test:Ut(`rgb`,`red`),parse:Wt(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Kt.transform(e)+`, `+Kt.transform(t)+`, `+Kt.transform(n)+`, `+zt(Lt.transform(r))+`)`};function Jt(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Yt={test:Ut(`#`),parse:Jt,transform:qt.transform},Xt=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Zt=Xt(`deg`),Qt=Xt(`%`),B=Xt(`px`),$t=Xt(`vh`),en=Xt(`vw`),tn=(()=>({...Qt,parse:e=>Qt.parse(e)/100,transform:e=>Qt.transform(e*100)}))(),nn={test:Ut(`hsl`,`hue`),parse:Wt(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+Qt.transform(zt(t))+`, `+Qt.transform(zt(n))+`, `+zt(Lt.transform(r))+`)`},V={test:e=>qt.test(e)||Yt.test(e)||nn.test(e),parse:e=>qt.test(e)?qt.parse(e):nn.test(e)?nn.parse(e):Yt.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?qt.transform(e):nn.transform(e),getAnimatableNone:e=>{let t=V.parse(e);return t.alpha=0,V.transform(t)}},rn=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function an(e){return isNaN(e)&&typeof e==`string`&&(e.match(Bt)?.length||0)+(e.match(rn)?.length||0)>0}var on=`number`,sn=`color`,cn=`var`,ln=`var(`,un="${}",dn=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function fn(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(dn,e=>(V.test(e)?(r.color.push(a),i.push(sn),n.push(V.parse(e))):e.startsWith(ln)?(r.var.push(a),i.push(cn),n.push(e)):(r.number.push(a),i.push(on),n.push(parseFloat(e))),++a,un)).split(un),indexes:r,types:i}}function pn(e){return fn(e).values}function mn(e){let{split:t,types:n}=fn(e),r=t.length;return e=>{let i=``;for(let a=0;a<r;a++)if(i+=t[a],e[a]!==void 0){let t=n[a];t===on?i+=zt(e[a]):t===sn?i+=V.transform(e[a]):i+=e[a]}return i}}var hn=e=>typeof e==`number`?0:V.test(e)?V.getAnimatableNone(e):e;function gn(e){let t=pn(e);return mn(e)(t.map(hn))}var _n={test:an,parse:pn,createTransformer:mn,getAnimatableNone:gn};function vn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function yn({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=vn(s,r,e+1/3),a=vn(s,r,e),o=vn(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function bn(e,t){return n=>n>0?t:e}var H=(e,t,n)=>e+(t-e)*n,xn=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Sn=[Yt,qt,nn],Cn=e=>Sn.find(t=>t.test(e));function wn(e){let t=Cn(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===nn&&(n=yn(n)),n}var Tn=(e,t)=>{let n=wn(e),r=wn(t);if(!n||!r)return bn(e,t);let i={...n};return e=>(i.red=xn(n.red,r.red,e),i.green=xn(n.green,r.green,e),i.blue=xn(n.blue,r.blue,e),i.alpha=H(n.alpha,r.alpha,e),qt.transform(i))},En=new Set([`none`,`hidden`]);function Dn(e,t){return En.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function On(e,t){return n=>H(e,t,n)}function kn(e){return typeof e==`number`?On:typeof e==`string`?Nt(e)?bn:V.test(e)?Tn:Nn:Array.isArray(e)?An:typeof e==`object`?V.test(e)?Tn:jn:bn}function An(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>kn(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function jn(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=kn(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Mn(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Nn=(e,t)=>{let n=_n.createTransformer(t),r=fn(e),i=fn(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?En.has(e)&&!i.values.length||En.has(t)&&!r.values.length?Dn(e,t):Ke(An(Mn(r,i),i.values),n):(`${e}${t}`,bn(e,t))};function Pn(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?H(e,t,n):kn(e)(e,t)}var Fn=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>L.update(t,e),stop:()=>Tt(t),now:()=>R.isProcessing?R.timestamp:z.now()}},In=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Ln=2e4;function Rn(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function zn(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Rn(r),Ln);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:Xe(i)}}var Bn=5;function Vn(e,t,n){let r=Math.max(t-Bn,0);return Ze(n-e(r),t-r)}var U={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Hn=.001;function Un({duration:e=U.duration,bounce:t=U.bounce,velocity:n=U.velocity,mass:r=U.mass}){let i,a;U.maxDuration;let o=1-t;o=ze(U.minDamping,U.maxDamping,o),e=ze(U.minDuration,U.maxDuration,Xe(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Kn(t,o),c=Math.exp(-i);return Hn-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Kn(t**2,o);return(-i(t)+Hn>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Hn+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Gn(i,a,s);if(e=Ye(e),isNaN(c))return{stiffness:U.stiffness,damping:U.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Wn=12;function Gn(e,t,n){let r=n;for(let n=1;n<Wn;n++)r-=e(r)/t(r);return r}function Kn(e,t){return e*Math.sqrt(1-t*t)}var qn=[`duration`,`bounce`],Jn=[`stiffness`,`damping`,`mass`];function Yn(e,t){return t.some(t=>e[t]!==void 0)}function Xn(e){let t={velocity:U.velocity,stiffness:U.stiffness,damping:U.damping,mass:U.mass,isResolvedFromDuration:!1,...e};if(!Yn(e,Jn)&&Yn(e,qn))if(e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*ze(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:U.mass,stiffness:i,damping:a}}else{let n=Un(e);t={...t,...n,mass:U.mass},t.isResolvedFromDuration=!0}return t}function Zn(e=U.visualDuration,t=U.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Xn({...n,velocity:-Xe(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=Xe(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?U.restSpeed.granular:U.restSpeed.default,i||=v?U.restDelta.granular:U.restDelta.default;let y;if(h<1){let e=Kn(_,h);y=t=>o-Math.exp(-h*_*t)*((m+h*_*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}else if(h===1)y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}let b={calculatedDuration:p&&d||null,next:e=>{let t=y(e);if(p)s.done=e>=d;else{let n=e===0?m:0;h<1&&(n=e===0?Ye(m):Vn(y,e,t));let a=Math.abs(n)<=r,c=Math.abs(o-t)<=i;s.done=a&&c}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Rn(b),Ln),t=In(t=>b.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return b}Zn.applyToOptions=e=>{let t=zn(e,100,Zn);return e.ease=t.ease,e.duration=Ye(t.duration),e.type=`keyframes`,e};function Qn({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=Zn({keyframes:[f.value,m(f.value)],velocity:Vn(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function $n(e,t,n){let r=[],i=n||Be.mix||Pn,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Ke(Array.isArray(t)?t[n]||We:t,a)),r.push(a)}return r}function er(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=$n(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=qe(e[r],e[r+1],n);return s[r](i)};return n?t=>l(ze(e[0],e[a-1],t)):l}function tr(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=qe(0,t,r);e.push(H(n,1,i))}}function nr(e){let t=[0];return tr(t,e.length-1),t}function rr(e,t){return e.map(e=>e*t)}function ir(e,t){return e.map(()=>t||mt).splice(0,e.length-1)}function ar({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=ht(r)?r.map(yt):yt(r),a={done:!1,value:t[0]},o=er(rr(n&&n.length===t.length?n:nr(t),e),t,{ease:Array.isArray(i)?i:ir(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var or=e=>e!==null;function sr(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(or),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var cr={decay:Qn,inertia:Qn,tween:ar,keyframes:ar,spring:Zn};function lr(e){typeof e.type==`string`&&(e.type=cr[e.type])}var ur=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},dr=e=>e/100,fr=class extends ur{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==z.now()&&this.tick(z.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},kt.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;lr(e);let{type:t=ar,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||ar;s!==ar&&typeof o[0]!=`number`&&(this.mixKeyframes=Ke(dr,Pn(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Rn(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=ze(0,1,n)*o}let b=_?{done:!1,value:l[0]}:y.next(v);i&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==Qn&&(b.value=sr(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return Xe(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Xe(e)}get time(){return Xe(this.currentTime)}set time(e){e=Ye(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(z.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Xe(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Fn,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(z.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,kt.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function pr(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var mr=e=>e*180/Math.PI,hr=e=>_r(mr(Math.atan2(e[1],e[0]))),gr={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:hr,rotateZ:hr,skewX:e=>mr(Math.atan(e[1])),skewY:e=>mr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},_r=e=>(e%=360,e<0&&(e+=360),e),vr=hr,yr=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),br=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),xr={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:yr,scaleY:br,scale:e=>(yr(e)+br(e))/2,rotateX:e=>_r(mr(Math.atan2(e[6],e[5]))),rotateY:e=>_r(mr(Math.atan2(-e[2],e[0]))),rotateZ:vr,rotate:vr,skewX:e=>mr(Math.atan(e[4])),skewY:e=>mr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Sr(e){return e.includes(`scale`)?1:0}function Cr(e,t){if(!e||e===`none`)return Sr(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=xr,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=gr,i=t}if(!i)return Sr(t);let a=r[t],o=i[1].split(`,`).map(Tr);return typeof a==`function`?a(o):o[a]}var wr=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Cr(n,t)};function Tr(e){return parseFloat(e.trim())}var Er=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Dr=(()=>new Set(Er))(),Or=e=>e===It||e===B,kr=new Set([`x`,`y`,`z`]),Ar=Er.filter(e=>!kr.has(e));function jr(e){let t=[];return Ar.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var Mr={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Cr(t,`x`),y:(e,{transform:t})=>Cr(t,`y`)};Mr.translateX=Mr.x,Mr.translateY=Mr.y;var Nr=new Set,Pr=!1,Fr=!1,Ir=!1;function Lr(){if(Fr){let e=Array.from(Nr).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=jr(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Fr=!1,Pr=!1,Nr.forEach(e=>e.complete(Ir)),Nr.clear()}function Rr(){Nr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Fr=!0)})}function zr(){Ir=!0,Rr(),Lr(),Ir=!1}var Br=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Nr.add(this),Pr||(Pr=!0,L.read(Rr),L.resolveKeyframes(Lr))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}pr(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Nr.delete(this)}cancel(){this.state===`scheduled`&&(Nr.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Vr=e=>e.startsWith(`--`);function Hr(e,t,n){Vr(t)?e.style.setProperty(t,n):e.style[t]=n}var Ur=Ue(()=>window.ScrollTimeline!==void 0),Wr={};function Gr(e,t){let n=Ue(e);return()=>Wr[t]??n()}var Kr=Gr(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),qr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Jr={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:qr([0,.65,.55,1]),circOut:qr([.55,0,1,.45]),backIn:qr([.31,.01,.66,-.59]),backOut:qr([.33,1.53,.69,.99])};function Yr(e,t){if(e)return typeof e==`function`?Kr()?In(e,t):`ease-out`:gt(e)?qr(e):Array.isArray(e)?e.map(e=>Yr(e,t)||Jr.easeOut):Jr[e]}function Xr(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Yr(s,i);Array.isArray(d)&&(u.easing=d),xt.value&&kt.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return xt.value&&p.finished.finally(()=>{kt.waapi--}),p}function Zr(e){return typeof e==`function`&&`applyToOptions`in e}function Qr({type:e,...t}){return Zr(e)&&Kr()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var $r=class extends ur{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Qr(e);this.animation=Xr(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=sr(r,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(e):Hr(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Xe(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Xe(e)}get time(){return Xe(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ye(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Ur()?(this.animation.timeline=e,We):t(this)}},ei={anticipate:ct,backInOut:st,circInOut:dt};function ti(e){return e in ei}function ni(e){typeof e.ease==`string`&&ti(e.ease)&&(e.ease=ei[e.ease])}var ri=10,ii=class extends $r{constructor(e){ni(e),lr(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new fr({...a,autoplay:!1}),s=Math.max(ri,z.now()-this.startTime),c=ze(0,ri,s-ri);t.setWithVelocity(o.sample(Math.max(0,s-c)).value,o.sample(s).value,c),o.stop()}},ai=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(_n.test(e)||e===`0`)&&!e.startsWith(`url(`));function oi(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function si(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=ai(i,t),s=ai(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:oi(e)||(n===`spring`||Zr(n))&&r}function ci(e){e.duration=0,e.type=`keyframes`}var li=new Set([`opacity`,`clipPath`,`filter`,`transform`]),ui=Ue(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function di(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:s,transformTemplate:c}=t.owner.getProps();return ui()&&n&&li.has(n)&&(n!==`transform`||!c)&&!s&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var fi=40,pi=class extends ur{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=z.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||Br)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=z.now(),si(e,i,a,o)||((Be.instantAnimations||!s)&&l?.(sr(e,n,t)),e[0]=e[e.length-1],ci(n),n.repeat=0);let u={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>fi?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},d=!c&&di(u),f=u.motionValue?.owner?.current,p=d?new ii({...u,element:f}):new fr(u);p.finished.then(()=>{this.notifyFinished()}).catch(We),this.pendingTimeline&&=(this.stopTimeline=p.attachTimeline(this.pendingTimeline),void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),zr()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function mi(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var hi=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function gi(e){let t=hi.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function _i(e,t,n=1){`${e}`;let[r,i]=gi(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Ve(e)?parseFloat(e):e}return Nt(i)?_i(i,t,n+1):i}var vi={type:`spring`,stiffness:500,damping:25,restSpeed:10},yi=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),bi={type:`keyframes`,duration:.8},xi={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Si=(e,{keyframes:t})=>t.length>2?bi:Dr.has(e)?e.startsWith(`scale`)?yi(t[1]):vi:xi,Ci=e=>e!==null;function wi(e,{repeat:t,repeatType:n=`loop`},r){let i=e.filter(Ci),a=t&&n!==`loop`&&t%2==1?0:i.length-1;return!a||r===void 0?i[a]:r}function Ti(e,t){return e?.[t]??e?.default??e}function Ei({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:l,...u}){return!!Object.keys(u).length}var Di=(e,t,n,r={},i,a)=>o=>{let s=Ti(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=Ye(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Ei(s)||Object.assign(u,Si(e,u)),u.duration&&=Ye(u.duration),u.repeatDelay&&=Ye(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(ci(u),u.delay===0&&(d=!0)),(Be.instantAnimations||Be.skipAnimations)&&(d=!0,ci(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=wi(u.keyframes,s);if(e!==void 0){L.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new fr(u):new pi(u)};function Oi(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function ki(e,t,n,r){if(typeof t==`function`){let[i,a]=Oi(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Oi(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Ai(e,t,n){let r=e.getProps();return ki(r,t,n===void 0?r.custom:n,e)}var ji=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Er]),Mi=30,Ni=e=>!isNaN(parseFloat(e)),Pi={current:void 0},Fi=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=z.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=z.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Ni(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Je);let n=this.events[e].add(t);return e===`change`?()=>{n(),L.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Pi.current&&Pi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=z.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Mi)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Mi);return Ze(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Ii(e,t){return new Fi(e,t)}var Li=e=>Array.isArray(e);function Ri(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ii(n))}function zi(e){return Li(e)?e[e.length-1]||0:e}function Bi(e,t){let{transitionEnd:n={},transition:r={},...i}=Ai(e,t)||{};for(let t in i={...i,...n},i)Ri(e,t,zi(i[t]))}var W=e=>!!(e&&e.getVelocity);function Vi(e){return!!(W(e)&&e.add)}function Hi(e,t){let n=e.getValue(`willChange`);if(Vi(n))return n.add(t);if(!n&&Be.WillChange){let n=new Be.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Ui(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Wi=`data-`+Ui(`framerAppearId`);function Gi(e){return e.props[Wi]}function Ki({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function qi(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);let c=[],l=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||l&&Ki(l,t))continue;let o={delay:n,...Ti(a||{},t)},u=r.get();if(u!==void 0&&!r.isAnimating&&!Array.isArray(i)&&i===u&&!o.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){let n=Gi(e);if(n){let e=window.MotionHandoffAnimation(n,t,L);e!==null&&(o.startTime=e,d=!0)}}Hi(e,t),r.start(Di(t,r,i,e.shouldReduceMotion&&ji.has(t)?{type:!1}:o,e,d));let f=r.animation;f&&c.push(f)}return o&&Promise.all(c).then(()=>{L.update(()=>{o&&Bi(e,o)})}),c}function Ji(e,t,n={}){let r=Ai(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(qi(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return Yi(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function Yi(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(Ji(c,t,{...o,delay:n+(typeof r==`function`?0:r)+mi(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function Xi(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Ji(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Ji(e,t,n);else{let i=typeof t==`function`?Ai(e,t,n.custom):t;r=Promise.all(qi(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var Zi={test:e=>e===`auto`,parse:e=>e},Qi=e=>t=>t.test(e),$i=[It,B,Qt,Zt,en,$t,Zi],ea=e=>$i.find(Qi(e));function ta(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||I(e)}var na=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function ra(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Bt)||[];if(!r)return e;let i=n.replace(r,``),a=na.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var ia=/\b([a-z-]*)\(.*?\)/gu,aa={..._n,getAnimatableNone:e=>{let t=e.match(ia);return t?t.map(ra).join(` `):e}},oa={...It,transform:Math.round},sa={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,top:B,right:B,bottom:B,left:B,inset:B,insetBlock:B,insetBlockStart:B,insetBlockEnd:B,insetInline:B,insetInlineStart:B,insetInlineEnd:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,paddingBlock:B,paddingBlockStart:B,paddingBlockEnd:B,paddingInline:B,paddingInlineStart:B,paddingInlineEnd:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,marginBlock:B,marginBlockStart:B,marginBlockEnd:B,marginInline:B,marginInlineStart:B,marginInlineEnd:B,fontSize:B,backgroundPositionX:B,backgroundPositionY:B,rotate:Zt,rotateX:Zt,rotateY:Zt,rotateZ:Zt,scale:Rt,scaleX:Rt,scaleY:Rt,scaleZ:Rt,skew:Zt,skewX:Zt,skewY:Zt,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:Lt,originX:tn,originY:tn,originZ:B,zIndex:oa,fillOpacity:Lt,strokeOpacity:Lt,numOctaves:oa},ca={...sa,color:V,backgroundColor:V,outlineColor:V,fill:V,stroke:V,borderColor:V,borderTopColor:V,borderRightColor:V,borderBottomColor:V,borderLeftColor:V,filter:aa,WebkitFilter:aa},la=e=>ca[e];function ua(e,t){let n=la(e);return n!==aa&&(n=_n),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var da=new Set([`auto`,`none`,`0`]);function fa(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!da.has(t)&&fn(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=ua(n,i)}var pa=class extends Br{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Nt(r))){let i=_i(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!ji.has(n)||e.length!==2)return;let[r,i]=e,a=ea(r),o=ea(i);if(Ft(r)!==Ft(i)&&Mr[n]){this.needsMeasurement=!0;return}if(a!==o)if(Or(a)&&Or(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Mr[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||ta(e[t]))&&n.push(t);n.length&&fa(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Mr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function ma(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var ha=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function ga(e){return He(e)&&`offsetHeight`in e}var{schedule:_a,cancel:va}=wt(queueMicrotask,!1),ya={x:!1,y:!1};function ba(){return ya.x||ya.y}function xa(e){return e===`x`||e===`y`?ya[e]?null:(ya[e]=!0,()=>{ya[e]=!1}):ya.x||ya.y?null:(ya.x=ya.y=!0,()=>{ya.x=ya.y=!1})}function Sa(e,t){let n=ma(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Ca(e){return!(e.pointerType===`touch`||ba())}function wa(e,t,n={}){let[r,i,a]=Sa(e,n),o=e=>{if(!Ca(e))return;let{target:n}=e,r=t(n,e);if(typeof r!=`function`||!n)return;let a=e=>{Ca(e)&&(r(e),n.removeEventListener(`pointerleave`,a))};n.addEventListener(`pointerleave`,a,i)};return r.forEach(e=>{e.addEventListener(`pointerenter`,o,i)}),a}var Ta=(e,t)=>t?e===t?!0:Ta(e,t.parentElement):!1,Ea=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Da=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Oa(e){return Da.has(e.tagName)||e.isContentEditable===!0}var ka=new WeakSet;function Aa(e){return t=>{t.key===`Enter`&&e(t)}}function ja(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Ma=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Aa(()=>{if(ka.has(n))return;ja(n,`down`);let e=Aa(()=>{ja(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>ja(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Na(e){return Ea(e)&&!ba()}function Pa(e,t,n={}){let[r,i,a]=Sa(e,n),o=e=>{let r=e.currentTarget;if(!Na(e))return;ka.add(r);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),ka.has(r)&&ka.delete(r),Na(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Ta(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),ga(e)&&(e.addEventListener(`focus`,e=>Ma(e,i)),!Oa(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Fa(e){return He(e)&&`ownerSVGElement`in e}function Ia(e){return Fa(e)&&e.tagName===`svg`}var La=[...$i,V,_n],Ra=e=>La.find(Qi(e)),za=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ba=()=>({x:za(),y:za()}),Va=()=>({min:0,max:0}),G=()=>({x:Va(),y:Va()}),Ha={current:null},Ua={current:!1},Wa=typeof window<`u`;function Ga(){if(Ua.current=!0,Wa)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Ha.current=e.matches;e.addEventListener(`change`,t),t()}else Ha.current=!1}var Ka=new WeakMap;function qa(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Ja(e){return typeof e==`string`||Array.isArray(e)}var Ya=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Xa=[`initial`,...Ya];function Za(e){return qa(e.animate)||Xa.some(t=>Ja(e[t]))}function Qa(e){return!!(Za(e)||e.variants)}function $a(e,t,n){for(let r in t){let i=t[r],a=n[r];if(W(i))e.addValue(r,i);else if(W(a))e.addValue(r,Ii(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Ii(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var eo=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],to={};function no(e){to=e}function ro(){return to}var io=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Br,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=z.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,L.render(this.render,!1,!0))};let{latestValues:s,renderState:c}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!i,this.isControllingVariants=Za(t),this.isVariantNode=Qa(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in u){let t=u[e];s[e]!==void 0&&W(t)&&t.set(s[e])}}mount(e){this.current=e,Ka.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Ua.current||Ga(),this.shouldReduceMotion=Ha.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in this.projection&&this.projection.unmount(),Tt(this.notifyUpdate),Tt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let n=Dr.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&L.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in to){let t=to[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):G()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<eo.length;t++){let n=eo[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=$a(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Ii(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Ve(n)||I(n))?n=parseFloat(n):!Ra(n)&&_n.test(t)&&(n=ua(e,t)),this.setBaseTarget(e,W(n)?n.get():n)),W(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=ki(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!W(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Je),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){_a.render(this.render)}},ao=class extends io{constructor(){super(...arguments),this.KeyframeResolver=pa}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;W(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},oo=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function so({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function co({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function lo(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function uo(e){return e===void 0||e===1}function fo({scale:e,scaleX:t,scaleY:n}){return!uo(e)||!uo(t)||!uo(n)}function po(e){return fo(e)||mo(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function mo(e){return ho(e.x)||ho(e.y)}function ho(e){return e&&e!==`0%`}function go(e,t,n){return n+t*(e-n)}function _o(e,t,n,r,i){return i!==void 0&&(e=go(e,i,r)),go(e,n,r)+t}function vo(e,t=0,n=1,r,i){e.min=_o(e.min,t,n,r,i),e.max=_o(e.max,t,n,r,i)}function yo(e,{x:t,y:n}){vo(e.x,t.translate,t.scale,t.originPoint),vo(e.y,n.translate,n.scale,n.originPoint)}var bo=.999999999999,xo=1.0000000000001;function So(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&To(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,yo(e,o)),r&&po(a.latestValues)&&To(e,a.latestValues))}t.x<xo&&t.x>bo&&(t.x=1),t.y<xo&&t.y>bo&&(t.y=1)}function Co(e,t){e.min+=t,e.max+=t}function wo(e,t,n,r,i=.5){vo(e,t,n,H(e.min,e.max,i),r)}function To(e,t){wo(e.x,t.x,t.scaleX,t.scale,t.originX),wo(e.y,t.y,t.scaleY,t.scale,t.originY)}function Eo(e,t){return so(lo(e.getBoundingClientRect(),t))}function Do(e,t,n){let r=Eo(e,n),{scroll:i}=t;return i&&(Co(r.x,i.offset.x),Co(r.y,i.offset.y)),r}var Oo={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},ko=Er.length;function Ao(e,t,n){let r=``,i=!0;for(let a=0;a<ko;a++){let o=Er[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=ha(s,sa[o]);if(!c){i=!1;let t=Oo[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function jo(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Dr.has(e)){o=!0;continue}else if(jt(e)){i[e]=n;continue}else{let t=ha(n,sa[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Ao(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Mo(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function No(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Po={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(B.test(e))e=parseFloat(e);else return e;return`${No(e,t.target.x)}% ${No(e,t.target.y)}%`}},Fo={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=_n.parse(e);if(i.length>5)return r;let a=_n.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=H(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Io={borderRadius:{...Po,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:Po,borderTopRightRadius:Po,borderBottomLeftRadius:Po,borderBottomRightRadius:Po,boxShadow:Fo};function Lo(e,{layout:t,layoutId:n}){return Dr.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Io[e]||e===`opacity`)}function Ro(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(W(r[t])||i&&W(i[t])||Lo(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function zo(e){return window.getComputedStyle(e)}var Bo=class extends ao{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Mo}readValueFromInstance(e,t){if(Dr.has(t))return this.projection?.isProjecting?Sr(t):wr(e,t);{let n=zo(e),r=(jt(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Eo(e,t)}build(e,t,n){jo(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Ro(e,t,n)}},Vo={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Ho={offset:`strokeDashoffset`,array:`strokeDasharray`};function Uo(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Vo:Ho;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Wo=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Go(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(jo(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Wo)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Uo(d,i,a,o,!1)}var Ko=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),qo=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Jo(e,t,n,r){for(let n in Mo(e,t,void 0,r),t.attrs)e.setAttribute(Ko.has(n)?n:Ui(n),t.attrs[n])}function Yo(e,t,n){let r=Ro(e,t,n);for(let n in e)if(W(e[n])||W(t[n])){let t=Er.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Xo=class extends ao{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=G}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Dr.has(t)){let e=la(t);return e&&e.default||0}return t=Ko.has(t)?t:Ui(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Yo(e,t,n)}build(e,t,n){Go(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Jo(e,t,n,r)}mount(e){this.isSVGTag=qo(e.tagName),super.mount(e)}},Zo=Xa.length;function Qo(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&Qo(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Zo;n++){let r=Xa[n],i=e.props[r];(Ja(i)||i===!1)&&(t[r]=i)}return t}function $o(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var es=[...Ya].reverse(),ts=Ya.length;function ns(e){return t=>Promise.all(t.map(({animation:t,options:n})=>Xi(e,t,n)))}function rs(e){let t=ns(e),n=os(),r=!0,i=t=>(n,r)=>{let i=Ai(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(n){t=n(e)}function o(a){let{props:o}=e,s=Qo(e.parent)||{},c=[],l=new Set,u={},d=1/0;for(let t=0;t<ts;t++){let f=es[t],p=n[f],m=o[f]===void 0?s[f]:o[f],h=Ja(m),g=f===a?p.isActive:null;g===!1&&(d=t);let _=m===s[f]&&m!==o[f]&&h;if(_&&r&&e.manuallyAnimateOnMount&&(_=!1),p.protectedKeys={...u},!p.isActive&&g===null||!m&&!p.prevProp||qa(m)||typeof m==`boolean`)continue;let v=is(p.prevProp,m),y=v||f===a&&p.isActive&&!_&&h||t>d&&h,b=!1,x=Array.isArray(m)?m:[m],S=x.reduce(i(f),{});g===!1&&(S={});let{prevResolvedValues:C={}}=p,w={...C,...S},T=t=>{y=!0,l.has(t)&&(b=!0,l.delete(t)),p.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in w){let t=S[e],n=C[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Li(t)&&Li(n)?!$o(t,n):t!==n,r?t==null?l.add(e):T(e):t!==void 0&&l.has(e)?T(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=S,p.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(y=!1);let ee=_&&v;y&&(!ee||b)&&c.push(...x.map(t=>{let n={type:f};if(typeof t==`string`&&r&&!ee&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Ai(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=mi(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(l.size){let t={};if(typeof o.initial!=`boolean`){let n=Ai(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}l.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),c.push({animation:t})}let f=!!c.length;return r&&(o.initial===!1||o.initial===o.animate)&&!e.manuallyAnimateOnMount&&(f=!1),r=!1,f?t(c):Promise.resolve()}function s(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=o(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=os()}}}function is(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!$o(t,e):!1}function as(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function os(){return{animate:as(!0),whileInView:as(),whileHover:as(),whileTap:as(),whileDrag:as(),whileFocus:as(),exit:as()}}function ss(e,t){e.min=t.min,e.max=t.max}function cs(e,t){ss(e.x,t.x),ss(e.y,t.y)}function ls(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var us=1e-4,ds=1-us,fs=1+us,ps=.01,ms=0-ps,hs=0+ps;function gs(e){return e.max-e.min}function _s(e,t,n){return Math.abs(e-t)<=n}function vs(e,t,n,r=.5){e.origin=r,e.originPoint=H(t.min,t.max,e.origin),e.scale=gs(n)/gs(t),e.translate=H(n.min,n.max,e.origin)-e.originPoint,(e.scale>=ds&&e.scale<=fs||isNaN(e.scale))&&(e.scale=1),(e.translate>=ms&&e.translate<=hs||isNaN(e.translate))&&(e.translate=0)}function ys(e,t,n,r){vs(e.x,t.x,n.x,r?r.originX:void 0),vs(e.y,t.y,n.y,r?r.originY:void 0)}function bs(e,t,n){e.min=n.min+t.min,e.max=e.min+gs(t)}function xs(e,t,n){bs(e.x,t.x,n.x),bs(e.y,t.y,n.y)}function Ss(e,t,n){e.min=t.min-n.min,e.max=e.min+gs(t)}function Cs(e,t,n){Ss(e.x,t.x,n.x),Ss(e.y,t.y,n.y)}function ws(e,t,n,r,i){return e-=t,e=go(e,1/n,r),i!==void 0&&(e=go(e,1/i,r)),e}function Ts(e,t=0,n=1,r=.5,i,a=e,o=e){if(Qt.test(t)&&(t=parseFloat(t),t=H(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=H(a.min,a.max,r);e===a&&(s-=t),e.min=ws(e.min,t,n,s,i),e.max=ws(e.max,t,n,s,i)}function Es(e,t,[n,r,i],a,o){Ts(e,t[n],t[r],t[i],t.scale,a,o)}var Ds=[`x`,`scaleX`,`originX`],Os=[`y`,`scaleY`,`originY`];function ks(e,t,n,r){Es(e.x,t,Ds,n?n.x:void 0,r?r.x:void 0),Es(e.y,t,Os,n?n.y:void 0,r?r.y:void 0)}function As(e){return e.translate===0&&e.scale===1}function js(e){return As(e.x)&&As(e.y)}function Ms(e,t){return e.min===t.min&&e.max===t.max}function Ns(e,t){return Ms(e.x,t.x)&&Ms(e.y,t.y)}function Ps(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Fs(e,t){return Ps(e.x,t.x)&&Ps(e.y,t.y)}function Is(e){return gs(e.x)/gs(e.y)}function Ls(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Rs(e){return[e(`x`),e(`y`)]}function zs(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Bs=[`TopLeft`,`TopRight`,`BottomLeft`,`BottomRight`],Vs=Bs.length,Hs=e=>typeof e==`string`?parseFloat(e):e,Us=e=>typeof e==`number`||B.test(e);function Ws(e,t,n,r,i,a){i?(e.opacity=H(0,n.opacity??1,Ks(r)),e.opacityExit=H(t.opacity??1,0,qs(r))):a&&(e.opacity=H(t.opacity??1,n.opacity??1,r));for(let i=0;i<Vs;i++){let a=`border${Bs[i]}Radius`,o=Gs(t,a),s=Gs(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Us(o)===Us(s)?(e[a]=Math.max(H(Hs(o),Hs(s),r),0),(Qt.test(s)||Qt.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=H(t.rotate||0,n.rotate||0,r))}function Gs(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Ks=Js(0,.5,ut),qs=Js(.5,.95,We);function Js(e,t,n){return r=>r<e?0:r>t?1:n(qe(e,t,r))}function Ys(e,t,n){let r=W(e)?e:Ii(e);return r.start(Di(``,r,t,n)),r.animation}function Xs(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var Zs=(e,t)=>e.depth-t.depth,Qs=class{constructor(){this.children=[],this.isDirty=!1}add(e){Le(this.children,e),this.isDirty=!0}remove(e){Re(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Zs),this.isDirty=!1,this.children.forEach(e)}};function $s(e,t){let n=z.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Tt(r),e(a-t))};return L.setup(r,!0),()=>Tt(r)}function ec(e){return W(e)?e.get():e}var tc=class{constructor(){this.members=[]}add(e){Le(this.members,e),e.scheduleRender()}remove(e){if(Re(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t=this.members.findIndex(t=>e===t);if(t===0)return!1;let n;for(let e=t;e>=0;e--){let t=this.members[e];if(t.isPresent!==!1){n=t;break}}return n?(this.promote(n),!0):!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender();let r=n.options.layoutDependency,i=e.options.layoutDependency;r!==void 0&&i!==void 0&&r===i||(e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0));let{crossfade:a}=e.options;a===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}},nc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},rc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},ic=[``,`X`,`Y`,`Z`],ac=1e3,oc=0;function sc(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function cc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Gi(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,L,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&cc(r)}function lc({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=oc++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,xt.value&&(rc.nodes=rc.calculatedTargetDeltas=rc.calculatedProjections=0),this.nodes.forEach(fc),this.nodes.forEach(yc),this.nodes.forEach(bc),this.nodes.forEach(pc),xt.addProjectionMetrics&&xt.addProjectionMetrics(rc)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Qs)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Je),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Fa(t)&&!Ia(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;L.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=$s(i,250),nc.hasAnimatedSinceResize&&(nc.hasAnimatedSinceResize=!1,this.nodes.forEach(vc)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Dc,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Fs(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Ti(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||vc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Tt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(xc),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&cc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(hc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(gc);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(_c),this.nodes.forEach(uc),this.nodes.forEach(dc)):this.nodes.forEach(gc),this.clearAllSnapshots();let e=z.now();R.delta=ze(0,1e3/60,e-R.timestamp),R.timestamp=e,R.isProcessing=!0,Et.update.process(R),Et.preRender.process(R),Et.render.process(R),R.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,_a.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(mc),this.sharedNodes.forEach(Sc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,L.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){L.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!gs(this.snapshot.measuredBox.x)&&!gs(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=G(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!js(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||po(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),jc(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return G();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Nc))){let{scroll:e}=this.root;e&&(Co(t.x,e.offset.x),Co(t.y,e.offset.y))}return t}removeElementScroll(e){let t=G();if(cs(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&cs(t,e),Co(t.x,i.offset.x),Co(t.y,i.offset.y))}return t}applyTransform(e,t=!1){let n=G();cs(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&To(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),po(r.latestValues)&&To(n,r.latestValues)}return po(this.latestValues)&&To(n,this.latestValues),n}removeTransform(e){let t=G();cs(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!po(n.latestValues))continue;fo(n.latestValues)&&n.updateSnapshot();let r=G();cs(r,n.measurePageBox()),ks(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return po(this.latestValues)&&ks(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==R.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=R.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=G(),this.targetWithTransforms=G()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),xs(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):cs(this.target,this.layout.layoutBox),yo(this.target,this.targetDelta)):cs(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),xt.value&&rc.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||fo(this.parent.latestValues)||mo(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=G(),this.relativeTargetOrigin=G(),Cs(this.relativeTargetOrigin,t,n),cs(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===R.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;cs(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;So(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=G());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ls(this.prevProjectionDelta.x,this.projectionDelta.x),ls(this.prevProjectionDelta.y,this.projectionDelta.y)),ys(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Ls(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ls(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),xt.value&&rc.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ba(),this.projectionDelta=Ba(),this.projectionDeltaWithTransform=Ba()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Ba();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=G(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Ec));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;Cc(a.x,e.x,n),Cc(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Cs(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Tc(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Ns(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=G(),cs(d,this.relativeTarget)),s&&(this.animationValues=i,Ws(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Tt(this.pendingAnimation),void 0),this.pendingAnimation=L.update(()=>{nc.hasAnimatedSinceResize=!0,kt.layout++,this.motionValue||=Ii(0),this.currentAnimation=Ys(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{kt.layout--},onComplete:()=>{kt.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ac),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Mc(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||G();let t=gs(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=gs(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}cs(t,n),To(t,i),ys(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new tc),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&sc(`z`,e,r,this.animationValues);for(let t=0;t<ic.length;t++)sc(`rotate${ic[t]}`,e,r,this.animationValues),sc(`skew${ic[t]}`,e,r,this.animationValues);for(let t in e.render(),r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=ec(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=ec(t?.pointerEvents)||``),this.hasProjected&&!po(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=zs(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;for(let t in e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit,Io){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Io[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?ec(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(hc),this.root.sharedNodes.clear()}}}function uc(e){e.updateLayout()}function dc(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;i===`size`?Rs(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=gs(r);r.min=n[e].min,r.max=r.min+i}):Mc(i,t.layoutBox,n)&&Rs(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=gs(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Ba();ys(o,n,t.layoutBox);let s=Ba();a?ys(s,e.applyTransform(r,!0),t.measuredBox):ys(s,n,t.layoutBox);let c=!js(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=G();Cs(o,t.layoutBox,i.layoutBox);let s=G();Cs(s,n,a.layoutBox),Fs(o,s)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function fc(e){xt.value&&rc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function pc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function mc(e){e.clearSnapshot()}function hc(e){e.clearMeasurements()}function gc(e){e.isLayoutDirty=!1}function _c(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function vc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function yc(e){e.resolveTargetDelta()}function bc(e){e.calcProjection()}function xc(e){e.resetSkewAndRotation()}function Sc(e){e.removeLeadSnapshot()}function Cc(e,t,n){e.translate=H(t.translate,0,n),e.scale=H(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function wc(e,t,n,r){e.min=H(t.min,n.min,r),e.max=H(t.max,n.max,r)}function Tc(e,t,n,r){wc(e.x,t.x,n.x,r),wc(e.y,t.y,n.y,r)}function Ec(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Dc={duration:.45,ease:[.4,0,.1,1]},Oc=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),kc=Oc(`applewebkit/`)&&!Oc(`chrome/`)?Math.round:We;function Ac(e){e.min=kc(e.min),e.max=kc(e.max)}function jc(e){Ac(e.x),Ac(e.y)}function Mc(e,t,n){return e===`position`||e===`preserve-aspect`&&!_s(Is(t),Is(n),.2)}function Nc(e){return e!==e.root&&e.scroll?.wasRoot}var Pc=lc({attachResizeListener:(e,t)=>Xs(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Fc={current:void 0},Ic=lc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Fc.current){let e=new Pc({});e.mount(window),e.setOptions({layoutScroll:!0}),Fc.current=e}return Fc.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Lc=(0,A.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Rc(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function zc(...e){return t=>{let n=!1,r=e.map(e=>{let r=Rc(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Rc(e[t],null)}}}}function Bc(...e){return A.useCallback(zc(...e),e)}var Vc=class extends A.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=ga(e)&&e.offsetWidth||0,r=ga(e)&&e.offsetHeight||0,i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft,i.right=n-i.width-i.left,i.bottom=r-i.height-i.top}return null}componentDidUpdate(){}render(){return this.props.children}};function Hc({children:e,isPresent:t,anchorX:n,anchorY:r,root:i}){let a=(0,A.useId)(),o=(0,A.useRef)(null),s=(0,A.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=(0,A.useContext)(Lc),l=Bc(o,e.props?.ref??e?.ref);return(0,A.useInsertionEffect)(()=>{let{width:e,height:l,top:u,left:d,right:f,bottom:p}=s.current;if(t||!o.current||!e||!l)return;let m=n===`left`?`left: ${d}`:`right: ${f}`,h=r===`bottom`?`bottom: ${p}`:`top: ${u}`;o.current.dataset.motionPopId=a;let g=document.createElement(`style`);c&&(g.nonce=c);let _=i??document.head;return _.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${l}px !important;
            ${m}px !important;
            ${h}px !important;
          }
        `),()=>{_.contains(g)&&_.removeChild(g)}},[t]),(0,F.jsx)(Vc,{isPresent:t,childRef:o,sizeRef:s,children:A.cloneElement(e,{ref:l})})}var Uc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Ne(Wc),d=(0,A.useId)(),f=!0,p=(0,A.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,A.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),A.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),o===`popLayout`&&(e=(0,F.jsx)(Hc,{isPresent:n,anchorX:s,anchorY:c,root:l,children:e})),(0,F.jsx)(Ie.Provider,{value:p,children:e})};function Wc(){return new Map}function Gc(e=!0){let t=(0,A.useContext)(Ie);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,A.useId)();(0,A.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,A.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Kc=e=>e.key||``;function qc(e){let t=[];return A.Children.forEach(e,e=>{(0,A.isValidElement)(e)&&t.push(e)}),t}var Jc=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Gc(o),f=(0,A.useMemo)(()=>qc(e),[e]),p=o&&!u?[]:f.map(Kc),m=(0,A.useRef)(!0),h=(0,A.useRef)(f),g=Ne(()=>new Map),_=(0,A.useRef)(new Set),[v,y]=(0,A.useState)(f),[b,x]=(0,A.useState)(f);Fe(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=Kc(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=Kc(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(qc(e)),y(f),null}let{forceRender:C}=(0,A.useContext)(Me);return(0,F.jsx)(F.Fragment,{children:b.map(e=>{let v=Kc(e),y=o&&!u?!1:f===b||p.includes(v);return(0,F.jsx)(Uc,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(_.current.add(v),g.has(v))g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},Yc=(0,A.createContext)({strict:!1}),Xc={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Zc=!1;function Qc(){if(Zc)return;let e={};for(let t in Xc)e[t]={isEnabled:e=>Xc[t].some(t=>!!e[t])};no(e),Zc=!0}function $c(){return Qc(),ro()}function el(e){let t=$c();for(let n in e)t[n]={...t[n],...e[n]};no(t)}var tl=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(`.`));function nl(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||tl.has(e)}var rl=e=>!nl(e);function il(e){typeof e==`function`&&(rl=t=>t.startsWith(`on`)?!nl(t):e(t))}try{il((d(),i(C)).default)}catch{}function al(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||(rl(i)||n===!0&&nl(i)||!t&&!nl(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var ol=(0,A.createContext)({});function sl(e,t){if(Za(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Ja(t)?t:void 0,animate:Ja(n)?n:void 0}}return e.inherit===!1?{}:t}function cl(e){let{initial:t,animate:n}=sl(e,(0,A.useContext)(ol));return(0,A.useMemo)(()=>({initial:t,animate:n}),[ll(t),ll(n)])}function ll(e){return Array.isArray(e)?e.join(` `):e}var ul=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function dl(e,t,n){for(let r in t)!W(t[r])&&!Lo(r,n)&&(e[r]=t[r])}function fl({transformTemplate:e},t){return(0,A.useMemo)(()=>{let n=ul();return jo(n,t,e),Object.assign({},n.vars,n.style)},[t])}function pl(e,t){let n=e.style||{},r={};return dl(r,n,e),Object.assign(r,fl(e,t)),r}function ml(e,t){let n={},r=pl(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var hl=()=>({...ul(),attrs:{}});function gl(e,t,n,r){let i=(0,A.useMemo)(()=>{let n=hl();return Go(n,t,qo(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};dl(t,e.style,e),i.style={...t,...i.style}}return i}var _l=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function vl(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(_l.indexOf(e)>-1||/[A-Z]/u.test(e))}function yl(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??vl(e)?gl:ml)(t,r,i,e),c=al(t,typeof e==`string`,a),l=e===A.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,A.useMemo)(()=>W(u)?u.get():u,[u]);return(0,A.createElement)(e,{...l,children:d})}function bl({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:xl(n,r,i,e),renderState:t()}}function xl(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=ec(a[e]);let{initial:o,animate:s}=e,c=Za(e),l=Qa(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!qa(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=ki(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Sl=e=>(t,n)=>{let r=(0,A.useContext)(ol),i=(0,A.useContext)(Ie),a=()=>bl(e,t,r,i);return n?a():Ne(a)},Cl=Sl({scrapeMotionValuesFromProps:Ro,createRenderState:ul}),wl=Sl({scrapeMotionValuesFromProps:Yo,createRenderState:hl}),Tl=Symbol.for(`motionComponentSymbol`);function El(e,t,n){let r=(0,A.useRef)(n);(0,A.useInsertionEffect)(()=>{r.current=n});let i=(0,A.useRef)(null);return(0,A.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var Dl=(0,A.createContext)({});function Ol(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function kl(e,t,n,r,i,a){let{visualElement:o}=(0,A.useContext)(ol),s=(0,A.useContext)(Yc),c=(0,A.useContext)(Ie),l=(0,A.useContext)(Lc).reducedMotion,u=(0,A.useRef)(null),d=(0,A.useRef)(!1);r||=s.renderer,!u.current&&r&&(u.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:l,isSVG:a}),d.current&&u.current&&(u.current.manuallyAnimateOnMount=!0));let f=u.current,p=(0,A.useContext)(Dl);f&&!f.projection&&i&&(f.type===`html`||f.type===`svg`)&&Al(u.current,n,i,p);let m=(0,A.useRef)(!1);(0,A.useInsertionEffect)(()=>{f&&m.current&&f.update(n,c)});let h=n[Wi],g=(0,A.useRef)(!!h&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return Fe(()=>{d.current=!0,f&&(m.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),f.scheduleRenderMicrotask(),g.current&&f.animationState&&f.animationState.animateChanges())}),(0,A.useEffect)(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(h)}),!1),f.enteringChildren=void 0)}),f}function Al(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:jl(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Ol(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:l})}function jl(e){if(e)return e.options.allowProjection===!1?jl(e.parent):e.projection}function Ml(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&el(r);let a=n?n===`svg`:vl(e),o=a?wl:Cl;function s(n,s){let c,l={...(0,A.useContext)(Lc),...n,layoutId:Nl(n)},{isStatic:u}=l,d=cl(n),f=o(n,u);if(!u&&Pe){Pl(l,r);let t=Fl(l);c=t.MeasureLayout,d.visualElement=kl(e,f,l,i,t.ProjectionNode,a)}return(0,F.jsxs)(ol.Provider,{value:d,children:[c&&d.visualElement?(0,F.jsx)(c,{visualElement:d.visualElement,...l}):null,yl(e,n,El(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,A.forwardRef)(s);return c[Tl]=e,c}function Nl({layoutId:e}){let t=(0,A.useContext)(Me).id;return t&&e!==void 0?t+`-`+e:e}function Pl(e,t){(0,A.useContext)(Yc).strict}function Fl(e){let{drag:t,layout:n}=$c();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Il(e,t){if(typeof Proxy>`u`)return Ml;let n=new Map,r=(n,r)=>Ml(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Ml(a,void 0,e,t)),n.get(a))})}var Ll=(e,t)=>t.isSVG??vl(e)?new Xo(t):new Bo(t,{allowProjection:e!==A.Fragment}),Rl=class extends oo{constructor(e){super(e),e.animationState||=rs(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();qa(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},zl=0,Bl={animation:{Feature:Rl},exit:{Feature:class extends oo{constructor(){super(...arguments),this.id=zl++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Vl(e){return{point:{x:e.pageX,y:e.pageY}}}var Hl=e=>t=>Ea(t)&&e(t,Vl(t));function Ul(e,t,n,r){return Xs(e,t,Hl(n),r)}var Wl=({current:e})=>e?e.ownerDocument.defaultView:null,Gl=(e,t)=>Math.abs(e-t);function Kl(e,t){let n=Gl(e.x,t.x),r=Gl(e.y,t.y);return Math.sqrt(n**2+r**2)}var ql=new Set([`auto`,`scroll`]),Jl=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=Zl(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Kl(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=R;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Yl(t,this.transformPagePoint),L.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=Zl(e.type===`pointercancel`?this.lastMoveEventInfo:Yl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Ea(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Yl(Vl(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=R;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,Zl(s,this.history)),this.removeListeners=Ke(Ul(this.contextWindow,`pointermove`,this.handlePointerMove),Ul(this.contextWindow,`pointerup`,this.handlePointerUp),Ul(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(ql.has(e.overflowX)||ql.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener(`scroll`,this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),L.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Tt(this.updatePoint)}};function Yl(e,t){return t?{point:t(e.point)}:e}function Xl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Zl({point:e},t){return{point:e,delta:Xl(e,$l(t)),offset:Xl(e,Ql(t)),velocity:eu(t,.1)}}function Ql(e){return e[0]}function $l(e){return e[e.length-1]}function eu(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=$l(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ye(t)));)n--;if(!r)return{x:0,y:0};let a=Xe(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function tu(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?H(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?H(n,e,r.max):Math.min(e,n)),e}function nu(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function ru(e,{top:t,left:n,bottom:r,right:i}){return{x:nu(e.x,n,i),y:nu(e.y,t,r)}}function iu(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function au(e,t){return{x:iu(e.x,t.x),y:iu(e.y,t.y)}}function ou(e,t){let n=.5,r=gs(e),i=gs(t);return i>r?n=qe(t.min,t.max-r,e.min):r>i&&(n=qe(e.min,e.max-i,t.min)),ze(0,1,n)}function su(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var cu=.35;function lu(e=cu){return e===!1?e=0:e===!0&&(e=cu),{x:uu(e,`left`,`right`),y:uu(e,`top`,`bottom`)}}function uu(e,t,n){return{min:du(e,t),max:du(e,n)}}function du(e,t){return typeof e==`number`?e:e[t]||0}var fu=new WeakMap,pu=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=G(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t?(this.stopAnimation(),this.snapToCursor(Vl(e).point)):this.pauseAnimation()},a=(e,t)=>{this.stopAnimation();let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=xa(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Rs(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Qt.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=gs(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&L.postRender(()=>i(e,t)),Hi(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=hu(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&a(e,t)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Rs(e=>this.getAnimationState(e)===`paused`&&this.getAxisMotionValue(e).animation?.play()),{dragSnapToOrigin:l}=this.getProps();this.panSession=new Jl(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Wl(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&L.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!mu(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=tu(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Ol(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=ru(n.layoutBox,e):this.constraints=!1,this.elastic=lu(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&Rs(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=su(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ol(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Do(n,r.root,this.visualElement.getTransformPagePoint()),a=au(r.layout.layoutBox,i);if(t){let e=t(co(a));this.hasMutatedConstraints=!!e,e&&(a=so(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Rs(o=>{if(!mu(o,t,this.currentDirection))return;let c=s&&s[o]||{};a&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Hi(this.visualElement,e),n.start(Di(e,n,0,t,this.visualElement,!1))}stopAnimation(){Rs(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Rs(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Rs(t=>{let{drag:n}=this.getProps();if(!mu(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-H(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Ol(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Rs(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=ou({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Rs(t=>{if(!mu(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(H(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;fu.set(this.visualElement,this);let e=this.visualElement.current,t=Ul(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Oa(i);n&&r&&!a&&this.start(t)}),n=()=>{let{dragConstraints:e}=this.getProps();Ol(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener(`measure`,n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),L.read(n);let a=Xs(window,`resize`,()=>this.scalePositionWithinConstraints()),o=r.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Rs(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{a(),t(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=cu,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function mu(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function hu(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var gu=class extends oo{constructor(e){super(e),this.removeGroupControls=We,this.removeListeners=We,this.controls=new pu(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||We}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},_u=e=>(t,n)=>{e&&L.postRender(()=>e(t,n))},vu=class extends oo{constructor(){super(...arguments),this.removePointerDownListener=We}onPointerDown(e){this.session=new Jl(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Wl(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:_u(e),onStart:_u(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&L.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Ul(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},yu=!1,bu=class extends A.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),yu&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),nc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),yu=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||L.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),_a.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;yu=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function xu(e){let[t,n]=Gc(),r=(0,A.useContext)(Me);return(0,F.jsx)(bu,{...e,layoutGroup:r,switchLayoutGroup:(0,A.useContext)(Dl),isPresent:t,safeToRemove:n})}var Su={pan:{Feature:vu},drag:{Feature:gu,ProjectionNode:Ic,MeasureLayout:xu}};function Cu(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&L.postRender(()=>i(t,Vl(t)))}var wu=class extends oo{mount(){let{current:e}=this.node;e&&(this.unmount=wa(e,(e,t)=>(Cu(this.node,t,`Start`),e=>Cu(this.node,e,`End`))))}unmount(){}},Tu=class extends oo{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Ke(Xs(this.node.current,`focus`,()=>this.onFocus()),Xs(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Eu(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&L.postRender(()=>i(t,Vl(t)))}var Du=class extends oo{mount(){let{current:e}=this.node;e&&(this.unmount=Pa(e,(e,t)=>(Eu(this.node,t,`Start`),(e,{success:t})=>Eu(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}},Ou=new WeakMap,ku=new WeakMap,Au=e=>{let t=Ou.get(e.target);t&&t(e)},ju=e=>{e.forEach(Au)};function Mu({root:e,...t}){let n=e||document;ku.has(n)||ku.set(n,{});let r=ku.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(ju,{root:e,...t})),r[i]}function Nu(e,t,n){let r=Mu(t);return Ou.set(e,n),r.observe(e),()=>{Ou.delete(e),r.unobserve(e)}}var Pu={some:0,all:1},Fu=class extends oo{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Pu[r]};return Nu(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Iu(e,t))&&this.startObserver()}unmount(){}};function Iu({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Lu={inView:{Feature:Fu},tap:{Feature:Du},focus:{Feature:Tu},hover:{Feature:wu}},Ru={layout:{ProjectionNode:Ic,MeasureLayout:xu}},zu=Il({...Bl,...Lu,...Su,...Ru},Ll),Bu=O(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),Vu=O(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),Hu=O(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),Uu=O(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),Wu=O(`circle-arrow-right`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m12 16 4-4-4-4`,key:`1i9zcv`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}]]),Gu=O(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),Ku=O(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),qu=O(`clock`,[[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Ju=O(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Yu=O(`feather`,[[`path`,{d:`M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z`,key:`18jl4k`}],[`path`,{d:`M16 8 2 22`,key:`vp34q`}],[`path`,{d:`M17.5 15H9`,key:`1oz8nu`}]]),Xu=O(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),Zu=O(`heart`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]),Qu=O(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),$u=O(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),ed=O(`minimize-2`,[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]),td=O(`music`,[[`path`,{d:`M9 18V5l12-2v13`,key:`1jmyc2`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}],[`circle`,{cx:`18`,cy:`16`,r:`3`,key:`1hluhg`}]]),nd=O(`octagon-x`,[[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,key:`2d38gg`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),rd=O(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),id=O(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),ad=O(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),od=O(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),sd=O(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),cd=O(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),ld=O(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]);function ud(){return ud=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ud.apply(null,arguments)}var dd=!1;function fd(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function pd(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var md=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!dd:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(pd(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=fd(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),hd=`-ms-`,gd=`-moz-`,K=`-webkit-`,_d=`comm`,vd=`rule`,yd=`decl`,bd=`@import`,xd=`@keyframes`,Sd=`@layer`,Cd=Math.abs,wd=String.fromCharCode,Td=Object.assign;function Ed(e,t){return J(e,0)^45?(((t<<2^J(e,0))<<2^J(e,1))<<2^J(e,2))<<2^J(e,3):0}function Dd(e){return e.trim()}function Od(e,t){return(e=t.exec(e))?e[0]:e}function q(e,t,n){return e.replace(t,n)}function kd(e,t){return e.indexOf(t)}function J(e,t){return e.charCodeAt(t)|0}function Ad(e,t,n){return e.slice(t,n)}function jd(e){return e.length}function Md(e){return e.length}function Nd(e,t){return t.push(e),e}function Pd(e,t){return e.map(t).join(``)}var Fd=1,Id=1,Ld=0,Rd=0,Y=0,zd=``;function Bd(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Fd,column:Id,length:o,return:``}}function Vd(e,t){return Td(Bd(``,null,null,``,null,null,0),e,{length:-e.length},t)}function Hd(){return Y}function Ud(){return Y=Rd>0?J(zd,--Rd):0,Id--,Y===10&&(Id=1,Fd--),Y}function Wd(){return Y=Rd<Ld?J(zd,Rd++):0,Id++,Y===10&&(Id=1,Fd++),Y}function Gd(){return J(zd,Rd)}function Kd(){return Rd}function qd(e,t){return Ad(zd,e,t)}function Jd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yd(e){return Fd=Id=1,Ld=jd(zd=e),Rd=0,[]}function Xd(e){return zd=``,e}function Zd(e){return Dd(qd(Rd-1,ef(e===91?e+2:e===40?e+1:e)))}function Qd(e){for(;(Y=Gd())&&Y<33;)Wd();return Jd(e)>2||Jd(Y)>3?``:` `}function $d(e,t){for(;--t&&Wd()&&!(Y<48||Y>102||Y>57&&Y<65||Y>70&&Y<97););return qd(e,Kd()+(t<6&&Gd()==32&&Wd()==32))}function ef(e){for(;Wd();)switch(Y){case e:return Rd;case 34:case 39:e!==34&&e!==39&&ef(Y);break;case 40:e===41&&ef(e);break;case 92:Wd();break}return Rd}function tf(e,t){for(;Wd()&&e+Y!==57&&!(e+Y===84&&Gd()===47););return`/*`+qd(t,Rd-1)+`*`+wd(e===47?e:Wd())}function nf(e){for(;!Jd(Gd());)Wd();return qd(e,Rd)}function rf(e){return Xd(af(``,null,null,null,[``],e=Yd(e),0,[0],e))}function af(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Wd()){case 40:if(m!=108&&J(C,d-1)==58){kd(C+=q(Zd(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Zd(v);break;case 9:case 10:case 13:case 32:C+=Qd(m);break;case 92:C+=$d(Kd()-1,7);continue;case 47:switch(Gd()){case 42:case 47:Nd(sf(tf(Wd(),Kd()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=jd(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=q(C,/\f/g,``)),p>0&&jd(C)-d&&Nd(p>32?cf(C+`;`,r,n,d-1):cf(q(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(Nd(S=of(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123)if(u===0)af(C,t,S,S,b,a,d,s,x);else switch(f===99&&J(C,3)===110?100:f){case 100:case 108:case 109:case 115:af(e,S,S,r&&Nd(of(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:af(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+jd(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Ud()==125)continue}switch(C+=wd(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(jd(C)-1)*_,_=1;break;case 64:Gd()===45&&(C+=Zd(Wd())),f=Gd(),u=d=jd(y=C+=nf(Kd())),v++;break;case 45:m===45&&jd(C)==2&&(h=0)}}return a}function of(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=Md(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=Ad(e,d+1,d=Cd(h=o[m])),y=e;_<p;++_)(y=Dd(h>0?f[_]+` `+v:q(v,/&\f/g,f[_])))&&(c[g++]=y);return Bd(e,t,n,i===0?vd:s,c,l,u)}function sf(e,t,n){return Bd(e,t,n,_d,wd(Hd()),Ad(e,2,-2),0)}function cf(e,t,n,r){return Bd(e,t,n,yd,Ad(e,0,r),Ad(e,r+1,-1),r)}function lf(e,t){for(var n=``,r=Md(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function uf(e,t,n,r){switch(e.type){case Sd:if(e.children.length)break;case bd:case yd:return e.return=e.return||e.value;case _d:return``;case xd:return e.return=e.value+`{`+lf(e.children,r)+`}`;case vd:e.value=e.props.join(`,`)}return jd(n=lf(e.children,r))?e.return=e.value+`{`+n+`}`:``}function df(e){var t=Md(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function ff(e){return function(t){t.root||(t=t.return)&&e(t)}}var pf=function(e,t,n){for(var r=0,i=0;r=i,i=Gd(),r===38&&i===12&&(t[n]=1),!Jd(i);)Wd();return qd(e,Rd)},mf=function(e,t){var n=-1,r=44;do switch(Jd(r)){case 0:r===38&&Gd()===12&&(t[n]=1),e[n]+=pf(Rd-1,t,n);break;case 2:e[n]+=Zd(r);break;case 4:if(r===44){e[++n]=Gd()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=wd(r)}while(r=Wd());return e},hf=function(e,t){return Xd(mf(Yd(e),t))},gf=new WeakMap,_f=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!gf.get(n))&&!r){gf.set(e,!0);for(var i=[],a=hf(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},vf=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function yf(e,t){switch(Ed(e,t)){case 5103:return K+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+gd+e+hd+e+e;case 6828:case 4268:return K+e+hd+e+e;case 6165:return K+e+hd+`flex-`+e+e;case 5187:return K+e+q(e,/(\w+).+(:[^]+)/,K+`box-$1$2`+hd+`flex-$1$2`)+e;case 5443:return K+e+hd+`flex-item-`+q(e,/flex-|-self/,``)+e;case 4675:return K+e+hd+`flex-line-pack`+q(e,/align-content|flex-|-self/,``)+e;case 5548:return K+e+hd+q(e,`shrink`,`negative`)+e;case 5292:return K+e+hd+q(e,`basis`,`preferred-size`)+e;case 6060:return K+`box-`+q(e,`-grow`,``)+K+e+hd+q(e,`grow`,`positive`)+e;case 4554:return K+q(e,/([^-])(transform)/g,`$1`+K+`$2`)+e;case 6187:return q(q(q(e,/(zoom-|grab)/,K+`$1`),/(image-set)/,K+`$1`),e,``)+e;case 5495:case 3959:return q(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return q(q(e,/(.+:)(flex-)?(.*)/,K+`box-pack:$3`+hd+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+K+e+e;case 4095:case 3583:case 4068:case 2532:return q(e,/(.+)-inline(.+)/,K+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jd(e)-1-t>6)switch(J(e,t+1)){case 109:if(J(e,t+4)!==45)break;case 102:return q(e,/(.+:)(.+)-([^]+)/,`$1`+K+`$2-$3$1`+gd+(J(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~kd(e,`stretch`)?yf(q(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(J(e,t+1)!==115)break;case 6444:switch(J(e,jd(e)-3-(~kd(e,`!important`)&&10))){case 107:return q(e,`:`,`:`+K)+e;case 101:return q(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+K+(J(e,14)===45?`inline-`:``)+`box$3$1`+K+`$2$3$1`+hd+`$2box$3`)+e}break;case 5936:switch(J(e,t+11)){case 114:return K+e+hd+q(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return K+e+hd+q(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return K+e+hd+q(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return K+e+hd+e+e}return e}var bf=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case yd:e.return=yf(e.value,e.length);break;case xd:return lf([Vd(e,{value:q(e.value,`@`,`@`+K)})],r);case vd:if(e.length)return Pd(e.props,function(t){switch(Od(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return lf([Vd(e,{props:[q(t,/:(read-\w+)/,`:`+gd+`$1`)]})],r);case`::placeholder`:return lf([Vd(e,{props:[q(t,/:(plac\w+)/,`:`+K+`input-$1`)]}),Vd(e,{props:[q(t,/:(plac\w+)/,`:`+gd+`$1`)]}),Vd(e,{props:[q(t,/:(plac\w+)/,hd+`input-$1`)]})],r)}return``})}}],xf=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||bf,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[_f,vf],l,u=[uf,ff(function(e){l.insert(e)})],d=df(c.concat(r,u)),f=function(e){return lf(rf(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new md({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},Sf=!0;function Cf(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var wf=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||Sf===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},Tf=function(e,t,n){wf(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function Ef(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}T();var Df=!1,Of=/[A-Z]|^ms/g,kf=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Af=function(e){return e.charCodeAt(1)===45},jf=function(e){return e!=null&&typeof e!=`boolean`},Mf=f(function(e){return Af(e)?e:e.replace(Of,`-$&`).toLowerCase()}),Nf=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(kf,function(e,t,n){return Rf={name:t,styles:n,next:Rf},t})}return b[e]!==1&&!Af(e)&&typeof t==`number`&&t!==0?t+`px`:t},Pf=`Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.`;function Ff(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return Rf={name:i.name,styles:i.styles,next:Rf},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Rf={name:o.name,styles:o.styles,next:Rf},o=o.next;return a.styles+`;`}return If(e,t,n);case`function`:if(e!==void 0){var s=Rf,c=n(e);return Rf=s,Ff(e,t,c)}break}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function If(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ff(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:jf(s)&&(r+=Mf(a)+`:`+Nf(a,s)+`;`)}else{if(a===`NO_COMPONENT_SELECTOR`&&Df)throw Error(Pf);if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)jf(o[c])&&(r+=Mf(a)+`:`+Nf(a,o[c])+`;`);else{var l=Ff(e,t,o);switch(a){case`animation`:case`animationName`:r+=Mf(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}}return r}var Lf=/label:\s*([^\s;{]+)\s*(;|$)/g,Rf;function zf(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Rf=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=Ff(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=Ff(n,t,e[o]),r&&(i+=a[o]);Lf.lastIndex=0;for(var s=``,c;(c=Lf.exec(i))!==null;)s+=`-`+c[1];return{name:Ef(i)+s,styles:i,next:Rf}}var Bf=function(e){return e()},Vf=A.useInsertionEffect?A.useInsertionEffect:!1,Hf=Vf||Bf;Vf||A.useLayoutEffect;var Uf=A.createContext(typeof HTMLElement<`u`?xf({key:`css`}):null);Uf.Provider;var Wf=function(e){return(0,A.forwardRef)(function(t,n){return e(t,(0,A.useContext)(Uf),n)})},Gf=A.createContext({});({}).hasOwnProperty,d();var Kf=!1,qf=_,Jf=function(e){return e!==`theme`},Yf=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?qf:Jf},Xf=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},Zf=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return wf(t,n,r),Hf(function(){return Tf(t,n,r)}),null},Qf=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,a,o;n!==void 0&&(a=n.label,o=n.target);var s=Xf(t,n,r),c=s||Yf(i),l=!c(`as`);return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push(`label:`+a+`;`),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var f=u[0];d.push(f[0]);for(var p=u.length,m=1;m<p;m++)d.push(u[m],f[m])}var h=Wf(function(e,t,n){var r=l&&e.as||i,a=``,u=[],f=e;if(e.theme==null){for(var p in f={},e)f[p]=e[p];f.theme=A.useContext(Gf)}typeof e.className==`string`?a=Cf(t.registered,u,e.className):e.className!=null&&(a=e.className+` `);var m=zf(d.concat(u),t.registered,f);a+=t.key+`-`+m.name,o!==void 0&&(a+=` `+o);var h=l&&s===void 0?Yf(r):c,g={};for(var _ in e)l&&_===`as`||h(_)&&(g[_]=e[_]);return g.className=a,n&&(g.ref=n),A.createElement(A.Fragment,null,A.createElement(Zf,{cache:t,serialized:m,isStringTag:typeof r==`string`}),A.createElement(r,g))});return h.displayName=a===void 0?`Styled(`+(typeof i==`string`?i:i.displayName||i.name||`Component`)+`)`:a,h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=d,h.__emotion_forwardProp=s,Object.defineProperty(h,`toString`,{value:function(){return o===void 0&&Kf?`NO_COMPONENT_SELECTOR`:`.`+o}}),h.withComponent=function(t,r){return e(t,ud({},n,r,{shouldForwardProp:Xf(h,r,!0)})).apply(void 0,d)},h}},$f=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),ep=Qf.bind(null);$f.forEach(function(e){ep[e]=ep(e)});const tp=ep.div({position:`relative`,display:`flex`,height:`100vh`,flexDirection:`column`,backgroundColor:`transparent`}),np=y.div`
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
`,rp=y(zu.div)`
  ${{position:`fixed`,bottom:`0`,left:`0`,top:`0`,zIndex:`1000`,display:`flex`,width:`150px`,flexDirection:`column`,borderTopRightRadius:`0.5rem`,borderBottomRightRadius:`0.5rem`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}}
  background-color: ${e=>v(e.theme.BACKGROUND,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
`,ip=y.div`
  ${{flex:`none`,padding:`1.25rem`}}
  border-bottom: 1px solid ${e=>e.theme.BORDER};
  background-color: ${e=>e.theme.OFFSET};
`,ap=y.h2`
  ${{margin:`0`,marginBottom:`0.5rem`,fontSize:`1.125rem`}}
  color: ${e=>e.theme.PRIMARY};
`,op=y.p`
  ${{margin:`0`,fontSize:`0.875rem`}}
  color: ${e=>v(e.theme.PRIMARY,.7)};
`,sp=ep.div({flex:`1 1 0%`}),cp=y.nav`
  ${{flex:`none`,paddingLeft:`0`,paddingRight:`0`,paddingBottom:`50px`,paddingTop:`0.5rem`}}
  border-top: 1px solid ${e=>e.theme.BORDER};
`,lp=y.button`
  ${{width:`100%`,cursor:`pointer`,borderStyle:`none`,paddingLeft:`1.25rem`,paddingRight:`1.25rem`,paddingTop:`0.75rem`,paddingBottom:`0.75rem`,textAlign:`left`,fontSize:`15px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${e=>e.$isActive?e.theme.OFFSET:`transparent`};
  color: ${e=>e.theme.PRIMARY};
  font-weight: ${e=>e.$isActive?600:400};
  
  &:hover {
    background-color: ${e=>v(e.theme.OFFSET,.5)};
  }
`,up=ep.div({position:`fixed`,bottom:`0`,left:`0`,right:`0`,top:`0`,zIndex:`999`,backgroundColor:`rgba(0, 0, 0, 0.6)`}),dp=ep.div({position:`fixed`,bottom:`2px`,left:`2px`,zIndex:`1000`,display:`flex`,height:`3rem`,width:`3rem`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-backdrop-blur":`blur(8px)`,WebkitBackdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`,backdropFilter:`var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)`}),fp=y.button`
  ${{position:`fixed`,zIndex:`1001`,display:`flex`,height:`2.5rem`,width:`2.5rem`,cursor:`pointer`,alignItems:`center`,justifyContent:`center`,borderRadius:`9999px`,"--tw-shadow":`0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,"--tw-shadow-colored":`0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color)`,boxShadow:`var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)`}}
  background-color: ${e=>v(e.theme.BACKGROUND,.75)};
  border: 2px solid ${e=>e.theme.BORDER};
  color: ${e=>e.theme.PRIMARY};
`,pp=({isOpen:e,currentPage:t,onToggle:n,onNavigate:r})=>{let{theme:i}=je(),a=M(e=>e.playerData),o=String(a?.role||``).toUpperCase()===`GM`;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Jc,{children:e&&(0,F.jsxs)(rp,{theme:i,initial:{x:-300},animate:{x:0},exit:{x:-300},transition:{type:`tween`,duration:.3},style:{boxShadow:`4px 0 12px rgba(0, 0, 0, 0.15)`},children:[(0,F.jsxs)(ip,{theme:i,children:[(0,F.jsx)(ap,{theme:i,children:`Forge!`}),(0,F.jsx)(op,{theme:i,children:`Alpha Testing!`})]}),(0,F.jsx)(sp,{}),(0,F.jsxs)(cp,{theme:i,children:[(0,F.jsx)(lp,{theme:i,$isActive:t===`ForgeMain`,onClick:()=>r(`ForgeMain`),children:`Main`}),(0,F.jsx)(lp,{theme:i,$isActive:t===`Party`,onClick:()=>r(`Party`),children:`Party`}),(0,F.jsx)(lp,{theme:i,$isActive:t===`ChatLog`,onClick:()=>r(`ChatLog`),children:`System Log`}),o&&(0,F.jsx)(lp,{theme:i,$isActive:t===`System`,onClick:()=>r(`System`),children:`System`}),o&&(0,F.jsx)(lp,{theme:i,$isActive:t===`Settings`,onClick:()=>r(`Settings`),children:`Settings`})]})]})}),e&&(0,F.jsx)(up,{onClick:n}),(0,F.jsx)(dp,{children:(0,F.jsx)(fp,{theme:i,onClick:n,children:(0,F.jsx)(he,{size:24})})})]})},mp=y.div`
  padding: 20px;
  color: ${e=>e.theme.PRIMARY};
  min-height: 100vh;
`,hp=y.h1`
  color: ${e=>e.theme.PRIMARY};
  background-color: ${e=>e.theme.OFFSET};
  padding: 2px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  font-variant: small-caps;
`,gp=y.div`
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
`;const _p=y.button`
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
`,vp=y.input`
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
`;var yp=y.button`
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
`;const X=({label:e,isOn:t,onChange:n})=>{let{theme:r}=je();return(0,F.jsx)(yp,{theme:r,$isOn:t,onClick:()=>{let r=!t;D.log(`${e}: ${r}`),n(r)},role:`switch`,"aria-checked":t,"aria-label":e})};var bp=y.h2`
  ${{marginBottom:`1rem`,paddingBottom:`0.5rem`,fontSize:`1.25rem`,fontWeight:`600`}}
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
`,Z=y.div`
  ${{display:`flex`,alignItems:`center`,justifyContent:`space-between`,paddingTop:`0.25rem`,paddingBottom:`0.25rem`,":last-child":{borderBottomWidth:`0`}}}
  color: ${e=>e.theme.PRIMARY};
`,Q=y.label`
  ${{flex:`1 1 0%`,cursor:`pointer`,textAlign:`left`,fontSize:`1rem`}}
  color: ${e=>e.theme.PRIMARY};
`,xp=y.div`
  ${{marginLeft:`1rem`,display:`flex`,alignItems:`center`,gap:`0.75rem`}}
  color: ${e=>e.theme.PRIMARY};
`,Sp=y.label`
  ${{fontSize:`0.875rem`}}
  color: ${e=>e.theme.PRIMARY};
`,Cp=y.input`
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
`,wp=y.select`
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
`,Tp=ep.div({marginTop:`0.5rem`,display:`flex`,justifyContent:`center`,gap:`0.75rem`});const Ep=()=>{let{theme:e}=je();M(e=>e.roomMetadata);let t=M(e=>e.sceneMetadata),n=M(e=>e.items),r=M(e=>e.cacheReady),[i,a]=(0,A.useState)(!1),[o,s]=(0,A.useState)(!1),[c,l]=(0,A.useState)(`D20`),[u,d]=(0,A.useState)(!1),[f,p]=(0,A.useState)(!1),[g,_]=(0,A.useState)(!1),[v,y]=(0,A.useState)(!1),[b,x]=(0,A.useState)(!1),[S,C]=(0,A.useState)(`bottom`),[w,T]=(0,A.useState)(!1),[ee,te]=(0,A.useState)(!1),[ne,O]=(0,A.useState)(!1),[ie,ae]=(0,A.useState)(!1),[oe,se]=(0,A.useState)(!1),[ce,le]=(0,A.useState)(!1),[ue,de]=(0,A.useState)(!1),[pe,me]=(0,A.useState)(!1),[he,_e]=(0,A.useState)(!1),[ve,k]=(0,A.useState)(!1),[ye,be]=(0,A.useState)(!1),[xe,Se]=(0,A.useState)(``),[j,Ce]=(0,A.useState)(!1),we=(0,A.useRef)(null),N=t;(0,A.useEffect)(()=>{if(r)if(N[h.POPCORN_INITIATIVE]!==void 0&&a(N[h.POPCORN_INITIATIVE]),N[h.REVERSE_INITIATIVE]!==void 0&&s(N[h.REVERSE_INITIATIVE]),N[h.DICE_RANGE]!==void 0&&l(N[h.DICE_RANGE]),N[h.SHOW_CARD_ACCESS]!==void 0&&d(N[h.SHOW_CARD_ACCESS]),N[h.SHOW_PLAYER_VIEW]!==void 0&&p(N[h.SHOW_PLAYER_VIEW]),N[h.SHOW_OWNER_ONLY_EDIT]!==void 0&&y(N[h.SHOW_OWNER_ONLY_EDIT]),N[h.SHOW_NON_PARTY_UNITS]!==void 0&&_(N[h.SHOW_NON_PARTY_UNITS]),N[h.SHOW_HP_BARS]!==void 0&&x(N[h.SHOW_HP_BARS]),N[h.HP_BAR_ORIENTATION]!==void 0&&C(N[h.HP_BAR_ORIENTATION]),N[h.SHOW_HP_NUMBERS]!==void 0&&T(N[h.SHOW_HP_NUMBERS]),N[h.SHOW_DEATH_EFFECT]!==void 0&&te(N[h.SHOW_DEATH_EFFECT]),N[h.SHOW_NAMES]!==void 0&&O(N[h.SHOW_NAMES]),N[h.SHOW_TURN_EFFECT]!==void 0&&ae(N[h.SHOW_TURN_EFFECT]),N[h.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&se(N[h.USE_DESCRIPTIVE_DUPLICATES]),N[h.ENABLE_RUMBLE]!==void 0&&le(N[h.ENABLE_RUMBLE]),N[h.ENABLE_BONES]!==void 0&&de(N[h.ENABLE_BONES]),N[h.ENABLE_DICE_PLUS]!==void 0&&me(N[h.ENABLE_DICE_PLUS]),N[h.ENABLE_OBR_NOTIFICATION]!==void 0&&_e(N[h.ENABLE_OBR_NOTIFICATION]),N[h.SHOW_NOTIFICATION_TO_ALL]!==void 0&&k(N[h.SHOW_NOTIFICATION_TO_ALL]),N[h.ENABLE_DISCORD_LOGGING]!==void 0&&be(N[h.ENABLE_DISCORD_LOGGING]),N[h.DISCORD_URL]!==void 0&&Se(N[h.DISCORD_URL]),N[h.ENABLE_CONSOLE_LOG]!==void 0){let e=N[h.ENABLE_CONSOLE_LOG];Ce(e),D.setEnabled(e)}else Ce(!1)},[r,N]);let P=async(e,t)=>{await E.scene.setMetadata({[e]:t})};return(0,F.jsx)(zu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:(0,F.jsxs)(mp,{theme:e,children:[(0,F.jsx)(hp,{theme:e,children:`Settings`}),(0,F.jsxs)(gp,{theme:e,children:[(0,F.jsx)(bp,{theme:e,children:`Collection Management`}),(0,F.jsxs)(Tp,{children:[(0,F.jsx)(_p,{theme:e,onClick:async()=>{try{let e=await re(),t=JSON.stringify(e,null,2),n=new Blob([t],{type:`text/plain;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`forge-collection-${new Date().toISOString().slice(0,10)}.txt`,i.click(),URL.revokeObjectURL(r),alert(`Collection export complete. ${e.length} record(s) written.`)}catch(e){D.log(`Collection export failed`,e),alert(`Collection export failed. See console log for details.`)}},children:`Export`}),(0,F.jsx)(_p,{theme:e,onClick:()=>{window.confirm(`Import will overwrite duplicate records that share the same Name and Author. Continue?`)&&we.current?.click()},children:`Import`})]}),(0,F.jsx)(`input`,{ref:we,type:`file`,accept:`.txt,.json,text/plain,application/json`,onChange:async e=>{let t=e.target.files?.[0];if(t)try{let e=await t.text(),n=JSON.parse(e);if(!Array.isArray(n)){alert(`Import file must contain a JSON array of collection records.`);return}let r=await fe(n);alert(`Collection import complete. Created: ${r.created}, Updated: ${r.updated}, Skipped: ${r.skipped}.`)}catch(e){D.log(`Collection import failed`,e),alert(`Collection import failed. Ensure the file is valid JSON and try again.`)}finally{e.target.value=``}},style:{display:`none`}})]}),(0,F.jsxs)(gp,{theme:e,children:[(0,F.jsx)(bp,{theme:e,children:`List Controls`}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Reverse Initiative`}),(0,F.jsx)(X,{label:`Reverse Initiative`,isOn:o,onChange:async e=>{s(e),await P(h.REVERSE_INITIATIVE,e),e&&i&&(a(!1),await P(h.POPCORN_INITIATIVE,!1))}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Popcorn Initiative`}),(0,F.jsx)(X,{label:`Popcorn Initiative`,isOn:i,onChange:async e=>{a(e),await P(h.POPCORN_INITIATIVE,e),e&&o&&(s(!1),await P(h.REVERSE_INITIATIVE,!1))}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Initiative Die: `}),(0,F.jsx)(Cp,{theme:e,type:`text`,value:c,onChange:async e=>{let t=e.target.value;l(t),await P(h.DICE_RANGE,t),D.log(`Dice Range:`,t)},placeholder:`D20`,maxLength:3})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show Card Column`}),(0,F.jsx)(X,{label:`Show Stat Block Access`,isOn:u,onChange:async e=>{d(e),await P(h.SHOW_CARD_ACCESS,e)}})]})]}),(0,F.jsxs)(gp,{theme:e,children:[(0,F.jsx)(bp,{theme:e,children:`Player Controls`}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show Player View`}),(0,F.jsx)(X,{label:`Show Player View`,isOn:f,onChange:async e=>{p(e),await P(h.SHOW_PLAYER_VIEW,e)}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show Non-Party Units`}),(0,F.jsx)(X,{label:`Show Non-Party Units`,isOn:g,onChange:async e=>{_(e),await P(h.SHOW_NON_PARTY_UNITS,e)}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`GM/Owner Only Edit`}),(0,F.jsx)(X,{label:`Owner Only Edit`,isOn:v,onChange:async e=>{y(e),await P(h.SHOW_OWNER_ONLY_EDIT,e)}})]})]}),(0,F.jsxs)(gp,{theme:e,children:[(0,F.jsx)(bp,{theme:e,children:`Game Controls`}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show HP Bars on tokens`}),(0,F.jsx)(X,{label:`Show HP Bars on tokens`,isOn:b,onChange:async e=>{x(e),await P(h.SHOW_HP_BARS,e),e&&w&&(T(!1),await P(h.SHOW_HP_NUMBERS,!1)),e&&N[h.HP_BAR_ORIENTATION]===void 0&&(C(`bottom`),await P(h.HP_BAR_ORIENTATION,`bottom`))}})]}),(b||w)&&(0,F.jsxs)(xp,{theme:e,children:[(0,F.jsx)(Sp,{theme:e,children:`Orientation: `}),(0,F.jsxs)(wp,{theme:e,value:S,onChange:async e=>{let t=e.target.value;C(t),await P(h.HP_BAR_ORIENTATION,t)},children:[(0,F.jsx)(`option`,{value:`top`,children:`Top`}),(0,F.jsx)(`option`,{value:`bottom`,children:`Bottom`}),(0,F.jsx)(`option`,{value:`left`,children:`Left`}),(0,F.jsx)(`option`,{value:`right`,children:`Right`})]})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show HP Numbers on tokens`}),(0,F.jsx)(X,{label:`Show HP Numbers on tokens`,isOn:w,onChange:async e=>{T(e),await P(h.SHOW_HP_NUMBERS,e),e&&b&&(x(!1),await P(h.SHOW_HP_BARS,!1)),e&&N[h.HP_BAR_ORIENTATION]===void 0&&(C(`bottom`),await P(h.HP_BAR_ORIENTATION,`bottom`))}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show Death Effect`}),(0,F.jsx)(X,{label:`Show Death Effect`,isOn:ee,onChange:async e=>{te(e),await P(h.SHOW_DEATH_EFFECT,e)}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show Names on Tokens`}),(0,F.jsx)(X,{label:`Show names on tokens`,isOn:ne,onChange:async e=>{O(e),await P(h.SHOW_NAMES,e);let t=n.filter(e=>e.metadata[m.ON_LIST]===!0);e?(D.log(`Showing names on tokens`),await E.scene.items.updateItems(t,e=>{for(let t of e){let e=t.metadata[m.UNIT_NAME],n=t;e&&n.text&&(n.text.plainText=String(e))}})):(D.log(`Hiding names on tokens`),await E.scene.items.updateItems(t,e=>{for(let t of e){let e=t;e.text&&(e.text.plainText=``)}}))}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show Turn Effect`}),(0,F.jsx)(X,{label:`Show Turn Effect`,isOn:ie,onChange:async e=>{ae(e),await P(h.SHOW_TURN_EFFECT,e)}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Use Descriptive Names`}),(0,F.jsx)(X,{label:`Use Descriptive Duplicates Names`,isOn:oe,onChange:async e=>{se(e),await P(h.USE_DESCRIPTIVE_DUPLICATES,e)}})]})]}),(0,F.jsxs)(gp,{theme:e,children:[(0,F.jsx)(bp,{theme:e,children:`Dice Controls`}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Enable Rumble! Integration`}),(0,F.jsx)(X,{label:`Enable Rumble! Integration`,isOn:ce,onChange:async e=>{le(e),await P(h.ENABLE_RUMBLE,e),e&&(de(!1),me(!1),await P(h.ENABLE_BONES,!1),await P(h.ENABLE_DICE_PLUS,!1))}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Enable Bones! Integration`}),(0,F.jsx)(X,{label:`Enable Bones! Integration`,isOn:ue,onChange:async e=>{de(e),await P(h.ENABLE_BONES,e),e&&(le(!1),me(!1),await P(h.ENABLE_RUMBLE,!1),await P(h.ENABLE_DICE_PLUS,!1))}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Enable Dice+ Integration`}),(0,F.jsx)(X,{label:`Enable Dice+ Integration`,isOn:pe,onChange:async e=>{me(e),await P(h.ENABLE_DICE_PLUS,e),e&&(le(!1),de(!1),await P(h.ENABLE_RUMBLE,!1),await P(h.ENABLE_BONES,!1))}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Enable OBR Notification`}),(0,F.jsx)(X,{label:`Enable OBR Notification`,isOn:he,onChange:async e=>{_e(e),await P(h.ENABLE_OBR_NOTIFICATION,e)}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Show Results to All`}),(0,F.jsx)(X,{label:`Show Results to All`,isOn:ve,onChange:async e=>{k(e),await P(h.SHOW_NOTIFICATION_TO_ALL,e)}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Enable Discord Logging`}),(0,F.jsx)(X,{label:`Enable Discord Logging`,isOn:ye,onChange:async e=>{if(e&&!ge(xe.trim())){alert(`Please enter a valid Discord webhook URL before enabling Discord logging.`),be(!1),await P(h.ENABLE_DISCORD_LOGGING,!1);return}be(e),await P(h.ENABLE_DISCORD_LOGGING,e)}})]}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Sp,{theme:e,children:`Discord Url: `}),(0,F.jsx)(Cp,{theme:e,type:`text`,value:xe,onChange:async e=>{let t=e.target.value,n=t.trim();Se(t),await P(h.DISCORD_URL,n),D.log(`Discord URL:`,n)},placeholder:`https://discord.com/api/webhooks/...`,maxLength:200})]})]}),(0,F.jsxs)(gp,{theme:e,children:[(0,F.jsx)(bp,{theme:e,children:`Other`}),(0,F.jsxs)(Z,{theme:e,children:[(0,F.jsx)(Q,{theme:e,children:`Enable Console Log`}),(0,F.jsx)(X,{label:`Enable Console Log`,isOn:j,onChange:async e=>{Ce(e),D.setEnabled(e),await P(h.ENABLE_CONSOLE_LOG,e)}})]})]})]})})};var Dp=y.div`
  ${{display:`flex`,height:`100%`,flexDirection:`column`,padding:`1rem`}}
`,Op=y.div`
  ${{flex:`1 1 0%`,overflowY:`auto`,borderRadius:`0.5rem`,borderWidth:`2px`,"--tw-border-opacity":`1`,borderColor:`rgb(255 255 255 / var(--tw-border-opacity, 1))`,padding:`0.5rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  margin: 10px;
  white-space: break-spaces;
  word-wrap: break-word;
  margin-bottom: 50px;
`,kp=y.div`
  ${{marginBottom:`0.5rem`,textAlign:`left`}}
`,Ap=y.span`
  ${{marginRight:`0.5rem`,fontSize:`0.75rem`,"--tw-text-opacity":`1`,color:`rgb(203 213 224 / var(--tw-text-opacity, 1))`}}
`,jp=y.span`
  ${{fontSize:`0.875rem`,"--tw-text-opacity":`1`,color:`rgb(255 255 255 / var(--tw-text-opacity, 1))`}}
`;const Mp=()=>{let e=P(e=>e.messages),t=(0,A.useRef)(null),{theme:n}=je();return(0,A.useEffect)(()=>{t.current?.scrollIntoView({behavior:`smooth`})},[e]),(0,F.jsx)(zu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,F.jsxs)(Dp,{children:[(0,F.jsx)(hp,{theme:n,children:`System Log`}),(0,F.jsxs)(Op,{children:[e.map(e=>(0,F.jsxs)(kp,{children:[(0,F.jsx)(Ap,{children:e.timestamp}),(0,F.jsx)(jp,{children:e.text})]},e.id)),(0,F.jsx)(`div`,{ref:t})]})]})})};var Np=y.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,Pp=y.div`
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
`,Fp=y.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 15px 0;
  font-size: 18px;
`,Ip=y.div`
  margin: 0 0 20px 0;
`,Lp=y.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;const Rp=({isOpen:e,title:t,onClose:n,children:r,actions:i,closeOnOverlayClick:a=!0,minWidth:o,maxWidth:s})=>{let{theme:c}=je();return e?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Np,{onClick:a?n:void 0}),(0,F.jsxs)(Pp,{theme:c,$minWidth:o,$maxWidth:s,onClick:e=>e.stopPropagation(),children:[t&&(0,F.jsx)(Fp,{theme:c,children:t}),(0,F.jsx)(Ip,{children:r}),i&&(0,F.jsx)(Lp,{children:i})]})]}):null},zp=`buff_effect_one`,Bp=`debuff_effect_one`,Vp=[{value:`buff_effect_one`,label:`Buff Effect One`},{value:`buff_effect_two`,label:`Buff Effect Two`}],Hp=[{value:`debuff_effect_one`,label:`Debuff Effect One`},{value:`debuff_effect_two`,label:`Debuff Effect Two`}],Up=e=>Vp.some(t=>t.value===e),Wp=e=>Hp.some(t=>t.value===e),Gp=e=>{switch(e){case`buff_effect_two`:return`
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
`}},Kp=e=>{switch(e){case`debuff_effect_two`:return`
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
`}};var qp=ne.EXTENSIONID,Jp=`com.battle-system.forge`;const $={CURRENT_THEME:`${qp}/CurrentTheme`,CURRENT_CARD:`${qp}/CurrentCard`,CURRENT_LIST:`${qp}/CurrentList`,CURRENT_ATTR:`${qp}/CurrentAttr`,SYSTEM_NAME:`${qp}/SystemName`,IMPORT_DATE:`${qp}/ImportDate`};var Yp=(e,t)=>e instanceof Error&&e.message?e.message:t,Xp=(e,t)=>{if(Array.isArray(e))return e;if(typeof e==`string`){let n;try{n=JSON.parse(e)}catch{throw Error(`Imported ${t} is not valid JSON`)}if(!Array.isArray(n))throw Error(`Imported ${t} is not a JSON array`);return n}throw Error(`Imported ${t} has invalid type`)},Zp=y.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Qp=y.div`
  background-color: ${e=>v(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
`,$p=y.h2`
  color: ${e=>e.theme.PRIMARY};
  border-bottom: 2px solid ${e=>e.theme.BORDER};
  padding: 12px 15px;
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: 400;
`,em=y.p`
  color: ${e=>v(e.theme.PRIMARY,.8)};
  font-size: 14px;
  margin: 0 0 15px 0;
  font-style: italic;
`,tm=y.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 15px;
`,nm=y.div`
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
`,rm=y.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.theme.PRIMARY};
  margin-top: 5px;
`,im=y.div`
  margin-top: 16px;
  background-color: ${e=>v(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 14px;
`,am=y.h3`
  color: ${e=>e.theme.PRIMARY};
  margin: 0 0 10px 0;
  font-size: 15px;
`,om=y.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`,sm=y.label`
  color: ${e=>e.theme.PRIMARY};
  min-width: 84px;
  font-size: 13px;
`,cm=y.select`
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
`,lm=y.div`
  background-color: ${()=>v(`#FF0000`,.2)};
  border: 2px solid #FF0000;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,um=y.div`
  background-color: ${()=>v(`#00FF00`,.2)};
  border: 2px solid #00FF00;
  border-radius: 6px;
  padding: 15px;
  color: ${e=>e.theme.PRIMARY};
  margin: 15px 0;
`,dm=y.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`,fm=y.p`
  color: ${e=>v(e.theme.PRIMARY,.9)};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,pm=y.div`
  margin-top: 30px;
`,mm=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,hm=y.div`
  background-color: ${e=>v(e.theme.BACKGROUND,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,gm=y.div`
  flex: 1;
`,_m=y.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`,vm=y.div`
  color: ${e=>v(e.theme.PRIMARY,.7)};
  font-size: 13px;
  font-style: italic;
`,ym=y.div`
  display: flex;
  gap: 8px;
`,bm=y.button`
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
`,xm={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}};const Sm=()=>{let{theme:e,updateThemeFromSystem:t}=je(),n=M(e=>e.sceneMetadata),[r,i]=(0,A.useState)(``),[a,o]=(0,A.useState)(!1),[s,c]=(0,A.useState)(null),[l,u]=(0,A.useState)(null),[d,f]=(0,A.useState)(``),[p,m]=(0,A.useState)(null),[g,_]=(0,A.useState)(null),[y,b]=(0,A.useState)([]),[x,S]=(0,A.useState)(``),[C,T]=(0,A.useState)(``),[ee,te]=(0,A.useState)(zp),[ne,re]=(0,A.useState)(Bp),[O,ie]=(0,A.useState)([]),[ae,oe]=(0,A.useState)(!1),[ce,ue]=(0,A.useState)(null),[de,fe]=(0,A.useState)(``);(0,A.useEffect)(()=>{pe(),ge()},[n]),(0,A.useEffect)(()=>{pe(),ge()},[n]);let pe=()=>{try{let e=n[$.CURRENT_THEME],t=n[$.CURRENT_ATTR],r=n[$.SYSTEM_NAME]||w.name,i=n[$.IMPORT_DATE]||null,a=n[h.HP_CURRENT_BID],o=n[h.HP_MAX_BID],s=n[h.BUFF_VISUAL_PRESET],c=n[h.DEBUFF_VISUAL_PRESET],l=Array.isArray(t)?t:[];f(r),m(i),_(e||null),b(l),S(a||``),T(o||``),te(Up(s)?s:zp),re(Wp(c)?c:Bp)}catch(e){D.error(`Error loading system from cache:`,e)}},me=async(e,t)=>{await E.scene.setMetadata({[e]:t})},he=y.filter(e=>e.attr_type===`numb`),ge=()=>{try{let e=[];for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);if(n&&n.startsWith(`${Jp}.`)&&n.endsWith(`.backup`)){let t=localStorage.getItem(n);if(t){let n=JSON.parse(t);e.push(n)}}}e.sort((e,t)=>new Date(t.backupDate).getTime()-new Date(e.backupDate).getTime()),ie(e)}catch(e){D.error(`Error loading backups:`,e)}},_e=async e=>{try{let e=n[$.CURRENT_THEME],t=n[$.CURRENT_CARD],r=n[$.CURRENT_LIST],i=n[$.CURRENT_ATTR],a=n[$.SYSTEM_NAME]||w.name;if(!e||!Array.isArray(t)||!Array.isArray(r)||!Array.isArray(i)){D.warn(`Cannot create backup: system data incomplete`);return}let o={name:a,backupDate:new Date().toISOString(),theme_primary:e.primary,theme_offset:e.offset,theme_background:e.background,theme_border:e.border,background_url:e.background_url,card_layout:t,list_layout:r,attributes:i},s=`${Jp}.${a}.backup`;localStorage.setItem(s,JSON.stringify(o)),D.log(`Backup created for ${a}`),ge()}catch(e){throw D.error(`Error creating backup:`,e),e}},ve=e=>{try{let t=`${Jp}.${e}.backup`;localStorage.removeItem(t),D.log(`Backup deleted for ${e}`),ge(),u(`Backup for "${e}" deleted successfully`)}catch(e){D.error(`Error deleting backup:`,e),c(`Failed to delete backup`)}},k=(e,t)=>{fe(e),ue(()=>t),oe(!0)},ye=async()=>{oe(!1),ce&&(await ce(),ue(null))},be=()=>{oe(!1),ue(null),fe(``)},xe=async()=>{if(!r.trim()){c(`Please enter a share_id`);return}k(`This will overwrite your current system data. A backup of your current system will be saved to local storage. Do you want to continue?`,async()=>{await Se()})},Se=async()=>{o(!0),c(null),u(null);try{let{data:e,error:n}=await le.from(`v_bs_system_with_attributes`).select(`*`).eq(`share_id`,r).maybeSingle();if(n)throw n;if(!e){c(`No system found with that share_id`),o(!1);return}let a=e,s=Xp(a.card_layout,`card_layout`),l=Xp(a.list_layout,`list_layout`),p=a.attributes;if(!Array.isArray(p))throw Error(`Imported attributes are not a valid array`);await _e(d);let h={primary:a.theme_primary,offset:a.theme_offset,background:a.theme_background,border:a.theme_border,background_url:a.background_url};await E.scene.setMetadata({[$.CURRENT_THEME]:h,[$.CURRENT_CARD]:s,[$.CURRENT_LIST]:l,[$.CURRENT_ATTR]:p,[$.SYSTEM_NAME]:a.name,[$.IMPORT_DATE]:new Date().toISOString()}),f(a.name),m(new Date().toISOString()),_(h),t(h.primary,h.offset,h.background,h.border,h.background_url),u(`System "${a.name}" loaded successfully! Backup created.`),i(``),D.log(`System loaded:`,a.name)}catch(e){D.error(`Error fetching system:`,e),c(Yp(e,`An error occurred while fetching the system`))}finally{o(!1)}},j=async e=>{k(`This will restore the system "${e.name}" from backup. A backup of your current system will be created. Do you want to continue?`,async()=>{await Ce(e)})},Ce=async e=>{o(!0),c(null),u(null);try{await _e(d);let n={primary:e.theme_primary,offset:e.theme_offset,background:e.theme_background,border:e.theme_border,background_url:e.background_url};if(!Array.isArray(e.card_layout)||!Array.isArray(e.list_layout)||!Array.isArray(e.attributes))throw Error(`Backup data is invalid`);await E.scene.setMetadata({[$.CURRENT_THEME]:n,[$.CURRENT_CARD]:e.card_layout,[$.CURRENT_LIST]:e.list_layout,[$.CURRENT_ATTR]:e.attributes,[$.SYSTEM_NAME]:e.name,[$.IMPORT_DATE]:new Date().toISOString()}),f(e.name),m(new Date().toISOString()),_(n),t(n.primary,n.offset,n.background,n.border,n.background_url),u(`System "${e.name}" restored from backup successfully!`),D.log(`System restored from backup:`,e.name)}catch(e){D.error(`Error restoring backup:`,e),c(`Failed to restore system from backup`)}finally{o(!1)}},we=async()=>{o(!0),c(null),u(null);try{let e={primary:w.theme_primary,offset:w.theme_offset,background:w.theme_background,border:w.theme_border,background_url:w.background_url};await E.scene.setMetadata({[$.CURRENT_THEME]:e,[$.CURRENT_CARD]:w.card_layout,[$.CURRENT_LIST]:w.list_layout,[$.CURRENT_ATTR]:w.attributes,[$.SYSTEM_NAME]:w.name,[$.IMPORT_DATE]:null}),f(w.name),m(null),_(e),t(e.primary,e.offset,e.background,e.border,e.background_url),u(`Reset to default system successfully!`)}catch(e){c(`Failed to reset to default system`),D.error(`Error resetting to default:`,e)}finally{o(!1)}},N=e=>e?new Date(e).toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}):null;return(0,F.jsxs)(zu.div,{variants:xm,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,F.jsxs)(mp,{theme:e,children:[(0,F.jsx)(hp,{theme:e,children:`System Configuration`}),(0,F.jsx)($p,{theme:e,children:d}),p?(0,F.jsxs)(em,{theme:e,children:[`Imported: `,N(p)]}):(0,F.jsx)(em,{theme:e,children:`Using Default System`}),g&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(tm,{children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(nm,{color:g.primary,theme:e,children:g.primary}),(0,F.jsx)(rm,{theme:e,children:`PRIMARY`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(nm,{color:g.offset,theme:e,children:g.offset}),(0,F.jsx)(rm,{theme:e,children:`OFFSET`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(nm,{color:g.background,theme:e,children:g.background}),(0,F.jsx)(rm,{theme:e,children:`BG`})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(nm,{color:g.border,theme:e,children:g.border}),(0,F.jsx)(rm,{theme:e,children:`BORDER`})]})]}),(0,F.jsxs)(im,{theme:e,children:[(0,F.jsx)(am,{theme:e,children:`System Settings`}),(0,F.jsxs)(om,{children:[(0,F.jsx)(sm,{theme:e,children:`Current HP`}),(0,F.jsxs)(cm,{theme:e,value:x,onChange:async e=>{let t=e.target.value;S(t),await me(h.HP_CURRENT_BID,t)},children:[(0,F.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),he.map(e=>(0,F.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,F.jsxs)(om,{children:[(0,F.jsx)(sm,{theme:e,children:`Max HP`}),(0,F.jsxs)(cm,{theme:e,value:C,onChange:async e=>{let t=e.target.value;T(t),await me(h.HP_MAX_BID,t)},children:[(0,F.jsx)(`option`,{value:``,children:`-- Select Attribute --`}),he.map(e=>(0,F.jsxs)(`option`,{value:e.attr_bid,children:[e.attr_abbr,` — `,e.attr_name]},e.attr_bid))]})]}),(0,F.jsxs)(om,{children:[(0,F.jsx)(sm,{theme:e,children:`Buff Visual`}),(0,F.jsx)(cm,{theme:e,value:ee,onChange:async e=>{let t=e.target.value;Up(t)&&(te(t),await me(h.BUFF_VISUAL_PRESET,t))},children:Vp.map(e=>(0,F.jsx)(`option`,{value:e.value,children:e.label},e.value))})]}),(0,F.jsxs)(om,{children:[(0,F.jsx)(sm,{theme:e,children:`Debuff Visual`}),(0,F.jsx)(cm,{theme:e,value:ne,onChange:async e=>{let t=e.target.value;Wp(t)&&(re(t),await me(h.DEBUFF_VISUAL_PRESET,t))},children:Hp.map(e=>(0,F.jsx)(`option`,{value:e.value,children:e.label},e.value))})]})]})]}),(0,F.jsxs)(Qp,{theme:e,children:[(0,F.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0},children:`Import New System`}),(0,F.jsx)(`p`,{style:{color:v(e.PRIMARY,.8),fontSize:`14px`},children:`Enter a share_id to download and activate a new game system configuration.`}),(0,F.jsx)(Zp,{children:(0,F.jsx)(vp,{theme:e,type:`text`,value:r,onChange:e=>i(e.target.value),placeholder:`Enter Share Id...`,disabled:a,onKeyPress:e=>e.key===`Enter`&&xe()})}),(0,F.jsxs)(dm,{children:[(0,F.jsx)(_p,{theme:e,onClick:xe,disabled:a||!r.trim(),children:a?`....!`:`Import System`}),(0,F.jsx)(_p,{theme:e,variant:`secondary`,onClick:we,disabled:a,children:`Use Default`})]})]}),s&&(0,F.jsxs)(lm,{theme:e,children:[(0,F.jsx)(`strong`,{children:`Error:`}),` `,s]}),l&&(0,F.jsxs)(um,{theme:e,children:[(0,F.jsx)(`strong`,{children:`Success:`}),` `,l]}),O.length>0&&(0,F.jsx)(pm,{children:(0,F.jsxs)(gp,{theme:e,children:[(0,F.jsx)(`h3`,{style:{color:e.PRIMARY,marginTop:0,marginBottom:`15px`},children:`System Backups`}),(0,F.jsx)(mm,{children:O.map(t=>(0,F.jsxs)(hm,{theme:e,children:[(0,F.jsxs)(gm,{children:[(0,F.jsx)(_m,{theme:e,children:t.name}),(0,F.jsxs)(vm,{theme:e,children:[`Backed up: `,N(t.backupDate)]})]}),(0,F.jsxs)(ym,{children:[(0,F.jsx)(bm,{theme:e,onClick:()=>j(t),disabled:a,title:`Import this backup`,children:(0,F.jsx)(sd,{size:18})}),(0,F.jsx)(bm,{theme:e,$variant:`danger`,onClick:()=>ve(t.name),disabled:a,title:`Delete this backup`,children:(0,F.jsx)(se,{size:18})})]})]},`${t.name}-${t.backupDate}`))})]})})]}),(0,F.jsx)(Rp,{isOpen:ae,title:`Confirm Action`,onClose:be,actions:(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(_p,{theme:e,variant:`secondary`,onClick:be,children:`Cancel`}),(0,F.jsx)(_p,{theme:e,onClick:ye,children:`Confirm`})]}),children:(0,F.jsx)(fm,{theme:e,children:de})})]},`system`)},Cm=()=>{let[e,t]=(0,A.useState)({theme:null,cardLayout:[],listLayout:[],attributes:[],systemName:w.name,importDate:null,isLoading:!0}),n=M(e=>e.sceneMetadata);return(0,A.useEffect)(()=>{try{let e=n[$.CURRENT_THEME],r=n[$.CURRENT_CARD],i=n[$.CURRENT_LIST],a=n[$.CURRENT_ATTR];if(!e||!Array.isArray(r)||!Array.isArray(i)||!Array.isArray(a)){D.log(`System data missing, using defaults`),t({theme:{primary:w.theme_primary,offset:w.theme_offset,background:w.theme_background,border:w.theme_border,background_url:w.background_url},cardLayout:w.card_layout,listLayout:w.list_layout,attributes:w.attributes,systemName:w.name,importDate:null,isLoading:!1});return}t({theme:e,cardLayout:r,listLayout:i,attributes:a,systemName:n[$.SYSTEM_NAME]||w.name,importDate:n[$.IMPORT_DATE]||null,isLoading:!1})}catch(e){D.error(`Error loading system data:`,e),t({theme:{primary:w.theme_primary,offset:w.theme_offset,background:w.theme_background,border:w.theme_border,background_url:w.background_url},cardLayout:w.card_layout,listLayout:w.list_layout,attributes:w.attributes,systemName:w.name,importDate:null,isLoading:!1})}},[n]),e};function wm(e,t){let n=e.replace(`#`,``);n.length===3&&(n=n.split(``).map(e=>e+e).join(``));let r=parseInt(n,16);return`rgba(${r>>16&255}, ${r>>8&255}, ${r&255}, ${t})`}var Tm=class{static async CenterViewportOnImage(e){let t=await E.scene.grid.getDpi(),n=await E.viewport.getScale(),r=await E.viewport.getWidth(),i=await E.viewport.getHeight(),a={x:r/2,y:i/2},o={x:a.x/n,y:a.y/n},s=await this.GetImageCenter(e,t),c={x:s.x-o.x,y:s.y-o.y},l={x:c.x*n*-1,y:c.y*n*-1};await E.viewport.animateTo({position:l,scale:n})}static async GetImageCenter(e,t){if(r(e)){let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{x:e.position.x-a+r/2,y:e.position.y-o+i/2}}else if(o(e)&&e.points.length>0)return{x:e.points[0].x,y:e.points[0].y};else return{x:e.position.x,y:e.position.y}}};const Em=`${k}/effects`;var Dm=`${k}/effects-expired`,Om=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,km=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Am=y.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`,jm=y.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
`,Mm=y.div`
  flex: 0 0 120px;
  min-width: 120px;
  display: flex;
  align-items: flex-end;
`,Nm=y.label`
  color: ${e=>v(e.theme.PRIMARY,.75)};
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.4px;
`,Pm=y.input`
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
`,Fm=y.select`
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
`,Im=y(Fm)`
  min-width: 180px;
  height: 96px;
  padding-right: 8px;
`,Lm=y.button`
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
`,Rm=y.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 240px;
  overflow-y: auto;
`,zm=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background: ${e=>v(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,Bm=y.div`
  color: ${e=>v(e.theme.PRIMARY,.8)};
  font-size: 12px;
`,Vm=y.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,Hm=y.p`
  color: ${e=>v(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,Um=y.p`
  color: #ff6b6b;
  margin: 0;
  font-size: 12px;
`,Wm=y.div`
  position: relative;
  display: inline-flex;
`,Gm=y.button`
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
`,Km=y.span`
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
`,qm=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const Jm=({items:e,units:t,setItems:n,playerData:r})=>{let[i,a]=(0,A.useState)(null),[o,s]=(0,A.useState)(``),[c,l]=(0,A.useState)(`1`),[u,d]=(0,A.useState)(`rounds`),[f,p]=(0,A.useState)(`start`),[h,g]=(0,A.useState)(`neutral`),[_,v]=(0,A.useState)([]),[y,b]=(0,A.useState)(null),x=(0,A.useMemo)(()=>{let t=new Map;return e.forEach(e=>{e.metadata?.[m.ON_LIST]===!0&&t.set(e.id,qm(e.metadata?.[Em]))}),t},[e]),S=e=>x.get(e)||[],C=async(t,r)=>{let i=r.filter(e=>e.remaining>0);n(e.map(e=>{if(e.id!==t)return e;let n={...e.metadata||{}};return i.length>0?n[Em]=i:delete n[Em],{...e,metadata:n}})),await E.scene.items.updateItems([t],e=>{let t={...e[0].metadata||{}};i.length>0?t[Em]=i:delete t[Em],e[0].metadata=t})},w=async e=>{try{await E.broadcast.sendMessage(Dm,{message:e},{destination:`ALL`})}catch(t){D.error(`Failed to broadcast expired effect message`,t),await E.notification.show(e,`WARNING`)}},T=async(t,n)=>{if(String(r?.role||``).toUpperCase()!==`GM`)return;let i=[],a=[];e.forEach(e=>{if(e.metadata?.[m.ON_LIST]!==!0)return;let r=qm(e.metadata?.[Em]);if(r.length===0)return;let o=!1,s=[];r.forEach(r=>{if(!(r.endTiming===t&&(r.durationType===`turns`||e.id===n))){s.push(r);return}let i=r.remaining-1;if(o=!0,i<=0){a.push(`${e.name||`Unit`}: ${r.name} expired`);return}s.push({...r,remaining:i})}),o&&i.push({unitId:e.id,effects:s})});for(let e of i)await C(e.unitId,e.effects);if(a.length>0)for(let e of a)await w(e)},ee=(0,A.useMemo)(()=>i&&t.find(e=>e.id===i)||null,[i,t]),te=(0,A.useMemo)(()=>i?S(i):[],[i,x]);return(0,A.useEffect)(()=>{let e=E.broadcast.onMessage(Dm,async e=>{let t=e.data?.message;typeof t!=`string`||!t.trim()||await E.notification.show(t,`WARNING`)});return()=>{e()}},[]),{effectsModalUnitId:i,selectedEffectsUnit:ee,activeEffectsForSelectedUnit:te,effectNameInput:o,setEffectNameInput:s,effectDurationInput:c,setEffectDurationInput:l,effectDurationType:u,setEffectDurationType:d,effectEndTiming:f,setEffectEndTiming:p,effectType:h,setEffectType:g,effectTargetIds:_,setEffectTargetIds:e=>{v(Array.from(new Set(e)))},effectsModalError:y,units:t,getEffectsForUnit:S,handleOpenEffectsModal:e=>{b(null),s(``),l(`1`),d(`rounds`),p(`start`),g(`neutral`),v([e]),a(e)},handleCloseEffectsModal:()=>{a(null),b(null)},handleAddEffect:async()=>{if(!i)return;let n=o.trim(),r=parseInt(c,10);if(!n){b(`Enter an effect name.`);return}if(!Number.isFinite(r)||r<=0){b(`Duration must be a positive number.`);return}let a=Array.from(new Set(_.filter(e=>t.some(t=>t.id===e))));if(a.length===0){b(`Select at least one target.`);return}let d=S(i),p=ee?.name||e.find(e=>e.id===i)?.name||`Unknown`,m={id:crypto.randomUUID(),name:n,remaining:r,durationType:u,endTiming:f,effectType:h,targets:a,createdByName:p,createdById:i};await C(i,[...d,m]),b(null),s(``),l(`1`),g(`neutral`),v([i])},handleDeleteEffect:async e=>{i&&await C(i,S(i).filter(t=>t.id!==e))},processEffectsForTurnEvent:T}},Ym=({manager:e})=>{let{theme:t}=je(),n=(0,A.useMemo)(()=>{let t=new Map;return e.units.forEach(e=>{t.set(e.id,e.name)}),t},[e.units]),r=e=>e===`buff`?`Buff`:e===`debuff`?`Debuff`:`Neutral`,i=e=>{if(e.length===0)return`No targets`;let t=e.map(e=>n.get(e)).filter(e=>typeof e==`string`&&e.length>0);return t.length===0?`${e.length} target${e.length===1?``:`s`}`:t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`};return(0,F.jsx)(Rp,{isOpen:!!e.effectsModalUnitId,title:e.selectedEffectsUnit?`Effects: ${e.selectedEffectsUnit.name}`:`Effects`,onClose:e.handleCloseEffectsModal,minWidth:`520px`,maxWidth:`600px`,children:(0,F.jsxs)(Om,{children:[(0,F.jsxs)(km,{children:[(0,F.jsxs)(Am,{children:[(0,F.jsxs)(jm,{style:{flex:`0 0 120px`},children:[(0,F.jsx)(Nm,{theme:t,children:`Effect`}),(0,F.jsx)(Pm,{theme:t,type:`text`,placeholder:`Name`,value:e.effectNameInput,onChange:t=>e.setEffectNameInput(t.target.value)})]}),(0,F.jsxs)(jm,{style:{flex:`0 0 140px`},children:[(0,F.jsx)(Nm,{theme:t,children:`Duration`}),(0,F.jsx)(Pm,{theme:t,type:`number`,min:1,value:e.effectDurationInput,onChange:t=>e.setEffectDurationInput(t.target.value)})]}),(0,F.jsxs)(jm,{style:{flex:`0 0 120px`},children:[(0,F.jsx)(Nm,{theme:t,children:`By`}),(0,F.jsxs)(Fm,{theme:t,value:e.effectDurationType,onChange:t=>e.setEffectDurationType(t.target.value),children:[(0,F.jsx)(`option`,{value:`turns`,children:`Turns`}),(0,F.jsx)(`option`,{value:`rounds`,children:`Rounds`})]})]})]}),(0,F.jsxs)(Am,{children:[(0,F.jsxs)(jm,{style:{flex:`0 0 120px`},children:[(0,F.jsx)(Nm,{theme:t,children:`Type`}),(0,F.jsxs)(Fm,{theme:t,value:e.effectType,onChange:t=>e.setEffectType(t.target.value),children:[(0,F.jsx)(`option`,{value:`neutral`,children:`Neutral`}),(0,F.jsx)(`option`,{value:`buff`,children:`Buff`}),(0,F.jsx)(`option`,{value:`debuff`,children:`Debuff`})]})]}),(0,F.jsxs)(jm,{style:{flex:`0 0 140px`},children:[(0,F.jsx)(Nm,{theme:t,children:`Ends at`}),(0,F.jsxs)(Fm,{theme:t,value:e.effectEndTiming,onChange:t=>e.setEffectEndTiming(t.target.value),children:[(0,F.jsx)(`option`,{value:`start`,children:`Start of turn`}),(0,F.jsx)(`option`,{value:`end`,children:`End of turn`})]})]}),(0,F.jsx)(Mm,{children:(0,F.jsx)(Lm,{theme:t,onClick:e.handleAddEffect,style:{width:`100%`},children:`Add`})})]})]}),(0,F.jsxs)(jm,{children:[(0,F.jsx)(Nm,{theme:t,children:`Targets`}),(0,F.jsx)(Im,{theme:t,multiple:!0,value:e.effectTargetIds,onChange:t=>{let n=Array.from(t.target.selectedOptions).map(e=>e.value);e.setEffectTargetIds(n)},children:e.units.map(e=>(0,F.jsx)(`option`,{value:e.id,children:e.name},e.id))})]}),e.effectsModalError&&(0,F.jsx)(Um,{theme:t,children:e.effectsModalError}),e.activeEffectsForSelectedUnit.length===0?(0,F.jsx)(Hm,{theme:t,children:`No active effects.`}):(0,F.jsx)(Rm,{children:e.activeEffectsForSelectedUnit.map(n=>(0,F.jsxs)(zm,{theme:t,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(Vm,{theme:t,children:n.name}),(0,F.jsxs)(Bm,{theme:t,children:[r(n.effectType),` • `,n.remaining,` `,n.durationType,` • ends at `,n.endTiming===`start`?`start of turn`:`end of turn`,` • by `,n.createdByName]}),(0,F.jsxs)(Bm,{theme:t,children:[`Targets: `,i(n.targets)]})]}),(0,F.jsx)(Lm,{theme:t,onClick:()=>{e.handleDeleteEffect(n.id)},children:`Delete`})]},n.id))})]})})},Xm=({activeEffectsCount:e,canInteract:t,onOpen:n,icon:r})=>{let{theme:i}=je();return(0,F.jsxs)(Wm,{children:[(0,F.jsx)(Gm,{theme:i,$active:e>0,disabled:!t,onClick:()=>{t&&n()},children:r||(0,F.jsx)(ad,{})}),e>0&&(0,F.jsx)(Km,{theme:i,children:e>99?`99+`:e})]})};var Zm=y.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,Qm=y.input`
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
`;const $m=({theme:e,unit:t,canInteract:n,elevationDraftValue:r,onElevationDraftChange:i,onCommitElevationChange:a})=>(0,F.jsx)(Zm,{theme:e,children:(0,F.jsx)(Qm,{theme:e,type:`text`,inputMode:`decimal`,min:-999,max:999,step:1,value:r??String(t.elevation??0),readOnly:!n,onChange:n?e=>i(t.id,e.target.value):void 0,onBlur:n?e=>a(t.id,e.target.value):void 0,onKeyDown:e=>{n&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}})}),eh=({theme:e,canInteract:t,icon:n,activeEffectsCount:r,onOpen:i})=>(0,F.jsx)(Zm,{theme:e,children:(0,F.jsx)(Xm,{activeEffectsCount:r,canInteract:t,icon:n||(0,F.jsx)(ad,{}),onOpen:i})});var th=`${k}/elevation-badge`,nh=`${k}/elevation-badge-owner`,rh=`${k}/elevation`,ih=(e,t)=>{if(!e)return;if(e.startsWith(`#`))return wm(e,t);let n=e.match(/^rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\)$/i);if(n){let[,e,r,i]=n;return`rgba(${e}, ${r}, ${i}, ${t})`}let r=e.match(/^rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)$/i);if(r){let[,e,n,i]=r;return`rgba(${e}, ${n}, ${i}, ${t})`}return e},ah=e=>`
    0 1px 1px ${v(e.BACKGROUND,.95)},
    0 0 2px ${v(e.BACKGROUND,.85)}
  `,oh={heart:Zu,shield:rd,sun:ad,award:Hu,target:od,users:cd,star:id,zap:ld,clock:qu,eye:Ju,layers:Qu,music:td,feather:Yu,book:Uu},sh=y.div`
  padding: 2px;
  width: 100%;
`,ch=y.h1`
  color: ${e=>e.theme.PRIMARY};
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`,lh=y.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
`,uh=y.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$compactMode?`end`:`center`};
  gap: ${e=>e.$compactMode?`8px`:`16px`};
  position: relative;
  padding: ${e=>e.$compactMode?`4px 8px`:`8px`};
  background-color: ${e=>v(e.theme.BACKGROUND,.75)};
  border-top: 2px solid ${e=>e.theme.BORDER};
`,dh=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.$compactMode?`8px`:`16px`};
`,fh=y.button`
  background: ${e=>e.disabled?v(e.theme.BORDER,.3):v(e.theme.OFFSET,.5)};
  border: 2px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>ah(e.theme)};
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

  svg {
    filter: drop-shadow(0 1px 1px ${e=>v(e.theme.BACKGROUND,.95)})
      drop-shadow(0 0 2px ${e=>v(e.theme.BACKGROUND,.75)});
  }
`,ph=y(fh)`
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
    filter: drop-shadow(0 1px 1px ${e=>v(e.theme.BACKGROUND,.95)})
      drop-shadow(0 0 3px ${e=>v(e.theme.BACKGROUND,.8)});
  }
`,mh=y(fh)`
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
`,hh=y(fh)`
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
`,gh=y.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: ${e=>e.$compactMode?`14px`:`16px`};
  font-weight: 600;
  min-width: ${e=>e.$compactMode?`44px`:`80px`};
  text-align: center;
`,_h=y.table`
  width: ${e=>e.$compact?`max-content`:`100%`};
  min-width: ${e=>e.$compact?`0`:`100%`};
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
`,vh=y.thead`
  background-color: ${e=>v(e.theme.BACKGROUND,.75)};
`,yh=y.tr``,bh=y.th`
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
`,xh=y.div`
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
  border: 1px solid ${e=>v(e.theme.BORDER,.9)};
  background: ${e=>v(e.theme.BACKGROUND,.96)};
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
  line-height: 1.3;
  text-align: left;
  box-shadow: 0 8px 24px ${e=>v(e.theme.BACKGROUND,.65)};
  backdrop-filter: blur(8px);

  &::after {
    content: '';
    position: absolute;
    left: clamp(12px, ${e=>`${e.$arrowX}px`}, calc(100% - 12px));
    ${e=>e.$placement===`top`?`top: 100%;`:`bottom: 100%;`}
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    ${e=>e.$placement===`top`?`border-top: 6px solid ${v(e.theme.BACKGROUND,.96)};`:`border-bottom: 6px solid ${v(e.theme.BACKGROUND,.96)};`}
  }
`,Sh=y.tbody``,Ch=y.tr`
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
`,wh=y.td`
  color: ${e=>e.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`,Th=y(wh)`
  font-weight: 700;
  font-size: 18px;
  color: ${e=>e.theme.OFFSET};
  min-width: 60px;
`,Eh=y(wh)`
  min-width: 48px;
`,Dh=y.button`
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
`,Oh=y.img`
  width: 18px;
  height: 18px;
  pointer-events: none;
`,kh=y.div`
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
`,Ah=y.input`
  background: ${e=>e.$isRollable?v(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.3)`};
  border: 1px solid ${e=>e.$isRollable?v(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?ah(e.theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${v(e.theme.BACKGROUND,.28)}, 0 0 0 1px ${v(e.theme.OFFSET,.18)}`:`none`};
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
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${v(e.theme.OFFSET,.35)}, inset 0 0 0 1px ${v(e.theme.BACKGROUND,.35)}`:`none`};
  }
`,jh=y(wh)`
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
`,Mh=y.input`
  background: ${e=>e.$isRollable?v(e.theme.OFFSET,.3):`rgba(0, 0, 0, 0.4)`};
  border: 1px solid ${e=>e.$isRollable?v(e.theme.OFFSET,.8):e.theme.BORDER};
  border-radius: 4px;
  color: ${e=>e.theme.PRIMARY};
  text-shadow: ${e=>e.$isRollable?ah(e.theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${v(e.theme.BACKGROUND,.28)}, 0 0 0 1px ${v(e.theme.OFFSET,.18)}`:`none`};
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
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${v(e.theme.OFFSET,.35)}, inset 0 0 0 1px ${v(e.theme.BACKGROUND,.35)}`:`none`};
  }
`,Nh=y.span`
  margin: 0 2px;
  color: ${e=>e.theme.OFFSET};
  font-weight: 500;
`,Ph=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,Fh=y.button`
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
`,Ih=y.input`
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
`,Lh=y.button`
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
`,Rh=y.div`
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
`,zh=y(wh)`
  width: 24px;
  min-width: 24px;
  max-width: 24px;
  padding: 0;
  position: relative;
`,Bh=y.div`
  position: absolute;
  inset: 0;
  min-height: 40px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 0 10px;
`,Vh=y.div`
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
`,Hh=y.div`
  flex: 1;
  height: 100%;
  padding: 0 8px;
  margin: 0 -10px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`,Uh=y.div`
  width: 6px;
  flex: 1;
  height: 100%;
  background-repeat: repeat-y;
  background-position: center;
  background-size: 6px 16px;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='16' viewBox='0 0 6 16' preserveAspectRatio='none'%3E%3Cpolyline points='3,0 0,4 6,8 0,12 3,16' fill='none' stroke='${encodeURIComponent(e.theme.BORDER)}' stroke-width='1.2'/%3E%3C/svg%3E")`};
`,Wh=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 280px;
  overflow-y: auto;
`,Gh=y.button`
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
`,Kh=y.p`
  color: ${e=>v(e.theme.PRIMARY,.8)};
  margin: 0 0 12px 0;
  font-size: 13px;
`,qh=y.p`
  color: #ff6b6b;
  margin: 10px 0 0 0;
  font-size: 13px;
`,Jh=y.div`
  height: 1px;
  margin: 12px 0;
  background: ${e=>v(e.theme.BORDER,.7)};
`,Yh=y.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>v(e.theme.BACKGROUND,.35)};
`,Xh=y.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-weight: 600;
`,Zh=y.div`
  color: ${e=>v(e.theme.PRIMARY,.75)};
  font-size: 11px;
`,Qh=y.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`,$h=y.button`
  width: 50px;
  height: 28px;
  padding: 0;
  position: relative;
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 999px;
  background: ${e=>e.$active?v(e.theme.OFFSET,.55):v(e.theme.BACKGROUND,.45)};
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
    background: ${e=>e.$active?v(e.theme.OFFSET,.7):v(e.theme.OFFSET,.45)};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,eg=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,tg=y.p`
  color: ${e=>v(e.theme.PRIMARY,.78)};
  margin: 0;
  font-size: 12px;
`,ng=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 320px;
  overflow-y: auto;
`,rg=y.div`
  background: ${e=>v(e.theme.BACKGROUND,.35)};
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  padding: 8px;
`,ig=y.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,ag=y.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #4b5563;
  background: rgba(0, 0, 0, 0.2);
  accent-color: #ffffff;
  margin: 0;
  pointer-events: none;
`,og=y.div`
  color: ${e=>e.theme.PRIMARY};
  font-size: 13px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
`,sg=y.div`
  color: ${e=>v(e.theme.PRIMARY,.85)};
  font-size: 12px;
  font-style: italic;
  line-height: 1.25;
  white-space: pre-wrap;
`,cg=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`,lg=y.button`
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
`,ug=y.p`
  color: ${e=>v(e.theme.PRIMARY,.75)};
  margin: 0;
  font-size: 13px;
`,dg=(e,t)=>{let n=[{id:crypto.randomUUID(),type:`initiative`,description:`Initiative value used for turn order. Can be edited via Right-Click or rolled with Click.`},{id:crypto.randomUUID(),type:`name`,description:`Name of the unit or character.`}],r=t?[{id:`card-column`,type:`card-column`}]:[];if(!e||e.length===0)return[...n,...r];let i=[...e].sort((e,t)=>e.col-t.col).map(e=>({id:e.id,type:e.type,name:e.styles?.labelName,useIcon:e.styles?.labelMode===`icon`,iconType:e.styles?.labelIcon,description:e.styles?.description,styles:e.styles}));return[...n,...i,...r]};const fg=()=>{let{theme:e}=je(),{listLayout:n,attributes:i,isLoading:a}=Cm();M(e=>e.roomMetadata);let o=M(e=>e.sceneMetadata),s=M(e=>e.items),c=M(e=>e.partyData),u=M(e=>e.playerData),d=M(e=>e.gridDpi),f=M(e=>e.setItems),[p,g]=(0,A.useState)([]),[_,v]=(0,A.useState)([]),[y,b]=(0,A.useState)(null),[x,S]=(0,A.useState)(1),[C,w]=(0,A.useState)(new Set),[T,ee]=(0,A.useState)(null),[te,re]=(0,A.useState)(null),[O,ie]=(0,A.useState)(!1),[oe,se]=(0,A.useState)(!1),[ce,le]=(0,A.useState)(!1),[ue,de]=(0,A.useState)({}),[fe,pe]=(0,A.useState)({}),[he,ge]=(0,A.useState)(null),[_e,ve]=(0,A.useState)({}),[ye,be]=(0,A.useState)(!1),[xe,Se]=(0,A.useState)(!1),[j,Ce]=(0,A.useState)(!1),[we,N]=(0,A.useState)(()=>window.innerWidth<400),[P,Te]=(0,A.useState)(null),Ee=(0,A.useRef)(null),De=(0,A.useRef)({}),Oe=(0,A.useRef)({}),ke=(0,A.useRef)(null);(0,A.useEffect)(()=>{let e=()=>{N(window.innerWidth<400)};return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]);let Ae=o,Me=Ae[h.REVERSE_INITIATIVE]||!1,Ne=Ae[h.POPCORN_INITIATIVE]||!1,Pe=Ae[h.SHOW_CARD_ACCESS]||!1,Fe=Ae[h.DICE_RANGE]||``,Ie=Ae[h.SHOW_OWNER_ONLY_EDIT]||!1,Le=String(u?.role||``).toUpperCase()===`GM`,Re=u?.id||``,ze=l(h.INITIATIVE_LIST_COMPACT,Re);(0,A.useEffect)(()=>{let e=o[ze],t=o[h.INITIATIVE_LIST_COMPACT];Ce(typeof e==`boolean`?e:typeof t==`boolean`?t:!1)},[o,ze]);let Be=async()=>{let e=!j;Ce(e);try{await E.scene.setMetadata({[ze]:e})}catch(t){D.error(`Failed to persist initiative list compact mode`,t),Ce(!e)}},Ve=async({notation:e,actionName:t,tokenName:n,senderId:r,senderColor:i})=>{try{await ae({notation:e,actionName:t,senderName:n,senderId:r,senderColor:i},Ae)}catch(t){D.error(`Failed to send dice roll from InitiativeList`,e,t),D.log(e)}},He=e=>{let t=e;if(typeof t==`string`)try{t=JSON.parse(t)}catch{return[]}return Array.isArray(t)?t.map((e,t)=>{let n=e&&typeof e==`object`?e:{},r=n.inUse,i=typeof r==`boolean`?r:typeof r==`string`?[`true`,`1`,`yes`].includes(r.trim().toLowerCase()):typeof r==`number`?r===1:void 0;return{id:typeof n.id==`string`&&n.id?n.id:`entry-${t}`,name:typeof n.name==`string`?n.name:``,description:typeof n.description==`string`?n.description:``,...i===void 0?{}:{inUse:i}}}):[]};(0,A.useEffect)(()=>{g(s.filter(e=>e.metadata?.[m.ON_LIST]===!0).map(e=>{let t=e.metadata?.[m.INITIATIVE]||0,n=e.metadata[m.UNIT_NAME]||e.name||`Unknown`,r=e.metadata?.[m.BOSS_MODE]===!0,i=e.metadata?.[rh]||0,a=c.find(t=>t.id===e.createdUserId)||(u?.id===e.createdUserId?u:void 0),o=String(a?.role||``).toUpperCase()===`GM`,s=a?.color||(u?.id===e.createdUserId?u?.color:void 0),l=o?void 0:ih(s,1),d={};return Object.keys(e.metadata||{}).forEach(t=>{t.startsWith(`com.battle-system.forge`)&&(d[t]=e.metadata?.[t])}),{id:e.id,initiative:t,name:n,isBoss:r,elevation:i,attributes:d,createdUserId:e.createdUserId,ownerNameOutlineColor:l}}))},[s,c,u]);let I=(0,A.useMemo)(()=>Ne?[...p].sort((e,t)=>e.name.localeCompare(t.name)):[...p].sort((e,t)=>e.initiative===t.initiative?e.name.localeCompare(t.name):Me?e.initiative-t.initiative:t.initiative-e.initiative),[p,Me,Ne]),Ue=Jm({items:s,units:I,setItems:f,playerData:u}),We=(0,A.useMemo)(()=>{let e=new Map;return c.forEach(t=>{e.set(t.id,t)}),u&&!e.has(u.id)&&e.set(u.id,u),Array.from(e.values()).sort((e,t)=>e.name.localeCompare(t.name))},[c,u]),Ge=(e,t)=>{let n=parseInt(t)||0;g(t=>t.map(t=>t.id===e?{...t,initiative:n}:t))},Ke=(e,t)=>{f(s.map(n=>n.id===e?{...n,metadata:{...n.metadata,[m.INITIATIVE]:t}}:n)),E.scene.items.updateItems([e],e=>{e[0].metadata[m.INITIATIVE]=t})},qe=e=>{let t=(e||``).trim().match(/(\d+)/),n=t?parseInt(t[1],10):NaN;return Number.isFinite(n)&&n>0?n:20},Je=(e,t,n)=>(typeof t==`number`&&(e=Math.max(t,e)),typeof n==`number`&&(e=Math.min(n,e)),e),Ye=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(r.length===0)return Je(0,i,a);let o=r.match(/^([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),s=r.match(/^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/),c=null;if(o){let e=o[1],n=parseFloat(o[2]);switch(e){case`+`:c=t+n;break;case`-`:c=t-n;break;case`*`:c=t*n;break;case`/`:c=n===0?t:t/n;break}}else if(s){let e=parseFloat(s[1]),t=s[2],n=parseFloat(s[3]);switch(t){case`+`:c=e+n;break;case`-`:c=e-n;break;case`*`:c=e*n;break;case`/`:c=n===0?e:e/n;break}}else{let e=parseFloat(r);Number.isNaN(e)||(c=e)}return Je(c===null||!Number.isFinite(c)?t:Math.trunc(c),i,a)},Xe=e=>{let t=qe(Fe),n=Math.floor(Math.random()*t)+1;Ge(e,String(n)),Ke(e,n)},Ze=(e,t)=>{de(n=>({...n,[e]:t}))},Qe=(e,t)=>{let n=Ye(t,p.find(t=>t.id===e)?.initiative??0);de(t=>{let{[e]:n,...r}=t;return r}),g(t=>t.map(t=>t.id===e?{...t,initiative:n}:t)),Ke(e,n)},$e=e=>`ELE${e.slice(3)}`,et=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o}},tt=async(e,n)=>{let i=$e(e);try{await E.scene.items.deleteItems([i])}catch{}if(n===0)return;let a=s.find(t=>t.id===e);if(!a||!r(a))return;let o=et(a,d),c=`${n>0?`🡹`:`🡻`}${Math.abs(n)}`,l=t().id(i).name(`Elevation Badge`).plainText(c).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(36).fontFamily(`Segoe UI`).textAlign(`CENTER`).position({x:o.minX-40,y:o.minY}).metadata({[th]:!0,[nh]:e}).attachedTo(e).visible(a.visible).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build();try{await E.scene.items.addItems([l])}catch(t){D.error(`Failed to add elevation badge`,e,t)}},nt=(e,t)=>{pe(n=>({...n,[e]:t}))},rt=(e,t,n)=>{let r=e.trim(),{min:i,max:a}=n||{};if(!r)return Je(0,i,a);let o=parseFloat(r);return Je(Number.isFinite(o)?Math.trunc(o):t,i,a)},it=(e,t)=>{let n=rt(t,p.find(t=>t.id===e)?.elevation??0,{min:-999,max:999});pe(t=>{let{[e]:n,...r}=t;return r}),g(t=>t.map(t=>t.id===e?{...t,elevation:n}:t)),f(s.map(t=>t.id===e?{...t,metadata:{...t.metadata,[rh]:n}}:t)),E.scene.items.updateItems([e],e=>{e[0].metadata[rh]=n}),tt(e,n)},at=(e,t)=>{let n=e.trim();if(!n)return e;let r=/^([+\-*/])\s*-?\d+(?:\.\d+)?$/.test(n),i=/^-?\d+(?:\.\d+)?\s*[+\-*/]\s*-?\d+(?:\.\d+)?$/.test(n),a=/^-?\d+(?:\.\d+)?$/.test(n);if(!r&&!i&&!a)return e;let o=typeof t==`number`?t:parseFloat(String(t)),s=Number.isFinite(o)?o:0;return String(Ye(n,s))},ot=(e,t,n)=>{let r=`${k}/${t}`,i=p.find(t=>t.id===e)?.attributes?.[r],a=at(n,i);g(t=>t.map(t=>t.id===e?{...t,attributes:{...t.attributes,[r]:a}}:t)),f(s.map(t=>t.id===e?{...t,metadata:{...t.metadata,[r]:a}}:t)),E.scene.items.updateItems([e],e=>{e[0].metadata[r]=a})},st=e=>i.find(t=>t.attr_bid===e)||null,ct=e=>{let t=st(e);return typeof t?.attr_func==`string`&&t.attr_func.trim().length>0},lt=e=>{let t={};for(let n of i){let r=`${k}/${n.attr_bid}`,i=e.attributes?.[r];if(i==null||i===``)continue;let a=Number(i);Number.isFinite(a)&&(t[n.attr_bid]=a)}return t},ut=async(e,t)=>{let n=st(t)?.attr_func;if(typeof n!=`string`||n.trim().length===0)return;let r=me(n,{bidValueMap:lt(e),onMissingBid:`error`});if(!r.valid||!r.notation){D.warn(`Could not resolve notation for initiative list value-column`,{unitId:e.id,bid:t,error:r.error});return}let i=st(t)?.attr_name||t,a=c.find(t=>t.id===e.createdUserId);await Ve({notation:r.notation,actionName:i,tokenName:e.name,senderId:e.createdUserId||u?.id||`unknown`,senderColor:a?.color||u?.color||`#ffffff`})};(0,A.useEffect)(()=>()=>{Object.values(De.current).forEach(e=>{window.clearTimeout(e)})},[]);let dt=(e,t)=>`value-column:${e}:${t}`,ft=e=>!!_e[e],pt=(e,t)=>{ve(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},mt=e=>{ve(t=>{let{[e]:n,...r}=t;return r})},ht=(e,t)=>{let n=De.current[e];n&&window.clearTimeout(n),De.current[e]=window.setTimeout(()=>{Oe.current[e]=!0,pt(e,t),delete De.current[e]},500)},gt=e=>{let t=De.current[e];t&&(window.clearTimeout(t),delete De.current[e])},_t=e=>Oe.current[e]?(delete Oe.current[e],!0):!1,vt=e=>{if(!Ie||Le)return!0;let t=u?.id;return t?e.createdUserId===t:!1};(0,A.useEffect)(()=>{a||v(dg(n,Pe))},[n,a,Pe]),(0,A.useEffect)(()=>{let e=o[h.CURRENT_TURN],t=o[h.CURRENT_ROUND];e?b(e):I.length>0&&b(I[0].id),t&&S(t)},[o,I]);let yt=async()=>{if(I.length===0)return;y&&await Ue.processEffectsForTurnEvent(`end`,y);let e=I.findIndex(e=>e.id===y)+1;if(e>=I.length){let e=x+1;S(e),b(I[0].id),await E.scene.setMetadata({[h.CURRENT_TURN]:I[0].id,[h.CURRENT_ROUND]:e}),await Ue.processEffectsForTurnEvent(`start`,I[0].id)}else b(I[e].id),await E.scene.setMetadata({[h.CURRENT_TURN]:I[e].id}),await Ue.processEffectsForTurnEvent(`start`,I[e].id)},bt=async()=>{if(I.length===0)return;let e=I.findIndex(e=>e.id===y)-1;if(e<0){let e=Math.max(1,x-1);S(e),b(I[I.length-1].id),await E.scene.setMetadata({[h.CURRENT_TURN]:I[I.length-1].id,[h.CURRENT_ROUND]:e})}else b(I[e].id),await E.scene.setMetadata({[h.CURRENT_TURN]:I[e].id})},xt=async e=>{Ne&&(C.has(e)||(b(e),await E.scene.setMetadata({[h.CURRENT_TURN]:e}),await Ue.processEffectsForTurnEvent(`start`,e)))},St=async()=>{y&&(await Ue.processEffectsForTurnEvent(`end`,y),w(e=>new Set([...e,y])),C.size+1,I.length)},Ct=async()=>{let e=x+1;S(e),w(new Set),b(null),await E.scene.setMetadata({[h.CURRENT_TURN]:null,[h.CURRENT_ROUND]:e})},wt=async e=>{Se(!0);try{if(e===`clear-list`){let e=s.filter(e=>e.metadata?.[m.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await E.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata&&m.ON_LIST in e.metadata&&delete e.metadata[m.ON_LIST]})}),f(s.map(e=>{if(e.metadata?.[m.ON_LIST]!==!0)return e;let t={...e.metadata||{}};return delete t[m.ON_LIST],{...e,metadata:t}})))}if(e===`reset-initiative`){let e=s.filter(e=>e.metadata?.[m.ON_LIST]===!0).map(e=>e.id);e.length>0&&(await E.scene.items.updateItems(e,e=>{e.forEach(e=>{e.metadata[m.INITIATIVE]=0})}),f(s.map(e=>e.metadata?.[m.ON_LIST]===!0?{...e,metadata:{...e.metadata||{},[m.INITIATIVE]:0}}:e)),g(e=>e.map(e=>s.some(t=>t.id===e.id&&t.metadata?.[m.ON_LIST]===!0)?{...e,initiative:0}:e)),de({}))}let t=e===`clear-list`?null:e===`reset-initiative`?[...I].sort((e,t)=>e.name.localeCompare(t.name))[0]?.id??null:I[0]?.id??null;S(1),b(t),w(new Set),await E.scene.setMetadata({[h.CURRENT_TURN]:t,[h.CURRENT_ROUND]:1}),be(!1)}catch(t){D.error(`Failed to reset encounter state`,{mode:e,error:t})}finally{Se(!1)}},L=async e=>{let t=s.find(t=>t.id===e);if(t)try{await Tm.CenterViewportOnImage(t)}catch(t){D.error(`Failed to center viewport on unit`,e,t)}},Tt=async(e,t)=>{try{let n=await E.viewport.getHeight(),r=n>800?700:n-100;await E.popover.open({id:ne.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(t)}`,height:r,width:350,anchorElementId:e,hidePaper:!0,disableClickAway:!0})}catch(e){D.error(`Failed to open cards popover`,e)}},R=(e,t)=>{e.preventDefault(),e.stopPropagation(),re(null),ee(t)},Et=async e=>{if(T){if(!s.find(e=>e.id===T)){re(`Token not found in scene cache.`);return}ie(!0),re(null);try{await E.scene.items.updateItems([T],t=>{let n=t[0];n.createdUserId=e}),f(s.map(t=>t.id===T?{...t,createdUserId:e}:t)),ee(null)}catch(t){D.error(`Failed to reassign token owner`,T,e,t),re(`Unable to assign token owner. Ensure you have permission to edit this token.`)}finally{ie(!1)}}},Dt=async()=>{if(!T)return;let e=s.find(e=>e.id===T);if(!e){re(`Token not found in scene cache.`);return}let t=e.metadata?.[m.BOSS_MODE]!==!0;if(t&&s.filter(e=>e.id!==T&&e.metadata?.[m.ON_LIST]===!0&&e.metadata?.[m.BOSS_MODE]===!0).length>=2){re(`A maximum of 2 bosses can be enabled at once.`);return}se(!0),re(null);try{await E.scene.items.updateItems([T],e=>{let n={...e[0].metadata||{}};n[m.BOSS_MODE]=t,e[0].metadata=n}),f(s.map(e=>e.id===T?{...e,metadata:{...e.metadata||{},[m.BOSS_MODE]:t}}:e))}catch(e){D.error(`Failed to toggle boss mode`,T,e),re(`Unable to update boss mode for this token.`)}finally{se(!1)}},Ot=async()=>{if(T){if(!s.find(e=>e.id===T)){re(`Token not found in scene cache.`);return}le(!0),re(null);try{await E.scene.items.updateItems([T],e=>{let t={...e[0].metadata||{}};m.ON_LIST in t&&delete t[m.ON_LIST],e[0].metadata=t}),f(s.map(e=>{if(e.id!==T)return e;let t={...e.metadata||{}};return delete t[m.ON_LIST],{...e,metadata:t}})),ee(null)}catch(e){D.error(`Failed to remove token from initiative list`,T,e),re(`Unable to remove token from initiative list.`)}finally{le(!1)}}},z=(0,A.useMemo)(()=>T&&I.find(e=>e.id===T)||null,[T,I]),kt=(0,A.useMemo)(()=>T&&s.find(e=>e.id===T)||null,[T,s]),At=kt?.metadata?.[m.BOSS_MODE]===!0,jt=(0,A.useMemo)(()=>he&&I.find(e=>e.id===he.unitId)||null,[he,I]),Mt=(0,A.useMemo)(()=>he&&i.find(e=>e.attr_bid===he.bid)||null,[i,he]),Nt=(0,A.useMemo)(()=>{if(!he||!jt)return[];let e=jt.attributes[`${k}/${he.bid}`];return He(e)},[he,jt]),Pt=(0,A.useMemo)(()=>Nt.some(e=>typeof e.inUse==`boolean`),[Nt]),Ft=(0,A.useMemo)(()=>j?_.filter(e=>e.type===`initiative`||e.type===`name`?!0:e.type===`card-column`&&Pe):_,[j,_,Pe]),It=(0,A.useMemo)(()=>{if(!jt)return{};let e={};for(let t of i){let n=`${k}/${t.attr_bid}`,r=jt.attributes?.[n];if(r==null||r===``)continue;let i=Number(r);Number.isFinite(i)&&(e[t.attr_bid]=i)}return e},[jt,i]),Lt=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=(e[1]||``).trim();if(!n)continue;let r=me(n,{bidValueMap:It,onMissingBid:`error`});!r.valid||!r.notation||t.push(r.notation)}return t};(0,A.useEffect)(()=>{ke.current&&Ft.length>0&&(D.debug(`Adjusting window width based on table size`),setTimeout(()=>{if(ke.current){let e=ke.current.offsetWidth+4,t=Math.min(e,800);E.action.setWidth(t),D.log(`Adjusted window width to `+t)}},100))},[j,Ft.length]);let Rt=e=>{if(!e)return null;let t=oh[e.toLowerCase()];return t?(0,F.jsx)(t,{}):null},zt=(e,t)=>{let n=window.innerWidth-t-8,r=Math.min(Math.max(e-t/2,8),Math.max(8,n));return{left:r,arrowX:e-r}},Bt=e=>{let t=e.currentTarget.getBoundingClientRect(),n=`clientX`in e?e.clientX:t.left+t.width/2,r=t.top>72?`top`:`bottom`;return{anchorX:n,y:r===`top`?t.top:t.bottom,placement:r}},Vt=(e,t)=>{let n=Bt(e),r=Math.min(320,Math.max(140,t.length*7+28)),i=zt(n.anchorX,r);Te({text:t,...n,...i})},Ht=()=>{Te(null)};(0,A.useLayoutEffect)(()=>{if(!P||!Ee.current)return;let e=Ee.current.getBoundingClientRect().width,t=zt(P.anchorX,e);(Math.abs(t.left-P.left)>.5||Math.abs(t.arrowX-P.arrowX)>.5)&&Te(e=>e&&{...e,...t})},[P]);let Ut=e=>e.type===`initiative`?(0,F.jsx)(cd,{}):e.type===`roller`?null:e.type===`name`?`Name`:e.type===`card-column`?(0,F.jsx)(Xu,{}):e.type===`divider-column`?null:e.useIcon&&e.iconType?Rt(e.iconType):e.name||e.type,Wt=(t,n)=>{let r=vt(n);switch(t.type){case`initiative`:if(Ne)return(0,F.jsx)(Th,{theme:e,children:(0,F.jsx)(kh,{onClick:e=>{e.stopPropagation(),r&&(C.has(n.id)||(n.id===y?St():xt(n.id)))},children:C.has(n.id)?(0,F.jsx)(Gu,{color:e.OFFSET}):n.id===y?(0,F.jsx)(Wu,{color:e.PRIMARY}):(0,F.jsx)(Ku,{color:e.BORDER})})});let i=`initiative:${n.id}`,a=ft(i);return(0,F.jsx)(Th,{theme:e,children:(0,F.jsx)(Ah,{theme:e,$isRollable:r&&!a,type:`text`,inputMode:`decimal`,value:ue[n.id]??String(n.initiative),readOnly:!r||!a,onChange:!r||!a?void 0:e=>Ze(n.id,e.target.value),onBlur:!r||!a?void 0:e=>{Qe(n.id,e.target.value),mt(i)},onClick:()=>{r&&(a||_t(i)||Xe(n.id))},onContextMenu:e=>{r&&(e.preventDefault(),pt(i,e.currentTarget))},onTouchStart:e=>{r&&(a||ht(i,e.currentTarget))},onTouchEnd:()=>{gt(i)},onTouchCancel:()=>{gt(i)},onKeyDown:e=>{if(r){if(!a&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),Xe(n.id);return}a&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})});case`name`:return(0,F.jsx)(jh,{theme:e,title:`Right-click to assign owner`,$outlineColor:n.ownerNameOutlineColor,onDoubleClick:()=>L(n.id),onContextMenu:r?e=>R(e,n.id):void 0,children:n.isBoss?`💀 ${n.name}`:n.name});case`roller`:return(0,F.jsx)(Eh,{theme:e,children:(0,F.jsx)(Dh,{theme:e,disabled:!r,onClick:e=>{e.stopPropagation(),r&&Xe(n.id)},title:`Roll initiative (1-${qe(Fe)})`,children:(0,F.jsx)(Oh,{src:`/dice.svg`,alt:`Roll`})})});case`card-column`:return(0,F.jsx)(wh,{theme:e,children:(0,F.jsx)(Fh,{id:`card-access-${n.id}`,theme:e,disabled:!r,onClick:e=>{e.stopPropagation(),r&&Tt(e.currentTarget.id,n.id)},title:`Open card for ${n.name}`,children:(0,F.jsx)(Wu,{})})});case`value-column`:return(0,F.jsx)(wh,{theme:e,children:(0,F.jsx)(Ph,{children:t.styles?.bidList?.map((i,a)=>{let o=ct(i),s=dt(n.id,i),c=o&&ft(s),l=n.attributes[`${k}/${i}`],u=l==null||l===``?`0`:String(l);return(0,F.jsxs)(A.Fragment,{children:[a>0&&(0,F.jsx)(Nh,{theme:e,children:t.styles?.dividers?.[a-1]||`/`}),(0,F.jsx)(Mh,{theme:e,$isRollable:r&&o,value:u,$small:t.styles?.bidList&&t.styles.bidList.length>2,readOnly:!r||o&&!c,onChange:!r||o&&!c?void 0:e=>{let t=e.target.value;g(e=>e.map(e=>e.id===n.id?{...e,attributes:{...e.attributes,[`${k}/${i}`]:t}}:e))},onBlur:!r||o&&!c?void 0:e=>{ot(n.id,i,e.target.value),o&&mt(s)},onClick:o?()=>{r&&(c||_t(s)||ut(n,i))}:void 0,onContextMenu:o?e=>{r&&(e.preventDefault(),pt(s,e.currentTarget))}:void 0,onTouchStart:o?e=>{r&&(c||ht(s,e.currentTarget))}:void 0,onTouchEnd:o?()=>{gt(s)}:void 0,onTouchCancel:o?()=>{gt(s)}:void 0,onKeyDown:e=>{if(r){if(o&&!c&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),ut(n,i);return}(c||!o)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())}}})]},i)})})});case`list-column`:return(0,F.jsx)(wh,{theme:e,children:(0,F.jsx)(Fh,{theme:e,disabled:!r,onClick:e=>{if(e.stopPropagation(),!r)return;let i=t.styles?.bidList?.[0];i&&ge({unitId:n.id,bid:i})},title:`Open list reference`,children:(0,F.jsx)(Uu,{})})});case`checkbox-column`:return(0,F.jsx)(wh,{theme:e,children:(0,F.jsx)(Ph,{children:t.styles?.bidList?.map(i=>{let a=!!n.attributes[`${k}/${i}`],o=t.styles?.inputType===`slider`,c=e=>{g(t=>t.map(t=>t.id===n.id?{...t,attributes:{...t.attributes,[`${k}/${i}`]:e}}:t)),f(s.map(t=>t.id===n.id?{...t,metadata:{...t.metadata,[`${k}/${i}`]:e}}:t)),E.scene.items.updateItems([n.id],t=>{t[0].metadata[`${k}/${i}`]=e})};return o?(0,F.jsx)(Lh,{type:`button`,theme:e,$active:a,disabled:!r,onClick:r?()=>{c(!a)}:void 0,children:(0,F.jsx)(Rh,{theme:e,$active:a})},i):(0,F.jsx)(Ih,{theme:e,type:`checkbox`,checked:a,disabled:!r,onChange:r?e=>{c(e.target.checked)}:void 0},i)})})});case`special-column`:let o=Rt(t.iconType);if(t.styles?.specialType===`elevation`){let t=fe[n.id];return(0,F.jsx)($m,{theme:e,unit:n,canInteract:r,elevationDraftValue:t,onElevationDraftChange:nt,onCommitElevationChange:it})}else{let t=Ue.getEffectsForUnit(n.id).length;return(0,F.jsx)(eh,{theme:e,canInteract:r,icon:o||(0,F.jsx)(ad,{}),activeEffectsCount:t,onOpen:()=>Ue.handleOpenEffectsModal(n.id)})}case`divider-column`:return(0,F.jsx)(zh,{theme:e,children:(0,F.jsx)(Bh,{children:t.styles?.styleDesign===`zigzag`?(0,F.jsx)(Hh,{children:(0,F.jsx)(Uh,{theme:e})}):(0,F.jsx)(Vh,{theme:e,$style:t.styles?.styleDesign})})});default:return(0,F.jsx)(wh,{theme:e,children:`-`})}};if(a)return(0,F.jsx)(sh,{children:(0,F.jsx)(ch,{theme:e,children:`Loading...`})});let Gt=j||we,Kt=j?`R: ${x}`:`Round: ${x}`;return(0,F.jsxs)(sh,{children:[(0,F.jsx)(lh,{children:(0,F.jsxs)(_h,{ref:ke,theme:e,$compact:j,children:[(0,F.jsx)(vh,{theme:e,children:(0,F.jsx)(yh,{children:Ft.map(t=>{let n=t.description??`This has no description.`;return(0,F.jsx)(bh,{theme:e,onMouseEnter:e=>Vt(e,n),onMouseMove:e=>Vt(e,n),onMouseLeave:Ht,onFocus:e=>Vt(e,n),onBlur:Ht,children:Ut(t)},t.id)})})}),(0,F.jsx)(Sh,{children:I.map(t=>(0,F.jsx)(Ch,{$isCurrentTurn:t.id===y,theme:e,children:Ft.map(e=>(0,F.jsx)(A.Fragment,{children:Wt(e,t)},e.id))},t.id))})]})}),(0,F.jsxs)(uh,{theme:e,$compactMode:j,children:[(0,F.jsxs)(dh,{$compactMode:j,children:[j?(0,F.jsxs)(F.Fragment,{children:[Le&&(0,F.jsx)(fh,{theme:e,$compact:!0,onClick:bt,children:(0,F.jsx)(Bu,{})}),Le&&(0,F.jsx)(fh,{theme:e,$compact:!0,onClick:yt,children:(0,F.jsx)(Vu,{})})]}):Ne?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(fh,{theme:e,onClick:St,disabled:!y||C.has(y),children:`End Turn`}),(0,F.jsx)(gh,{theme:e,$compactMode:j,children:Kt}),(0,F.jsx)(fh,{theme:e,$compact:Gt,onClick:Ct,disabled:C.size<I.length,children:Gt?(0,F.jsx)(Vu,{}):`Next`})]}):(0,F.jsxs)(F.Fragment,{children:[Le&&(0,F.jsx)(fh,{theme:e,$compact:Gt,onClick:bt,children:Gt?(0,F.jsx)(Bu,{}):`Previous`}),(0,F.jsx)(gh,{theme:e,$compactMode:j,children:Kt}),Le&&(0,F.jsx)(fh,{theme:e,$compact:Gt,onClick:yt,children:Gt?(0,F.jsx)(Vu,{}):`Next`})]}),j&&(0,F.jsx)(mh,{theme:e,onClick:()=>{Be()},title:`Switch to Fullsize list`,children:(0,F.jsx)($u,{})})]}),!j&&(0,F.jsx)(hh,{theme:e,$hasReset:Le,onClick:()=>{Be()},title:`Switch to Compact list`,children:(0,F.jsx)(ed,{})}),Le&&!j&&(0,F.jsx)(ph,{theme:e,onClick:()=>be(!0),disabled:xe,title:`Reset round/turn state`,children:(0,F.jsx)(nd,{})})]}),P&&(0,F.jsx)(xh,{ref:Ee,theme:e,$left:P.left,$y:P.y,$placement:P.placement,$arrowX:P.arrowX,role:`tooltip`,children:P.text}),(0,F.jsxs)(Rp,{isOpen:!!T,title:z?`Unit: ${z.name}`:`Unit`,onClose:()=>{O||oe||ce||(ee(null),re(null))},closeOnOverlayClick:!O&&!oe&&!ce,maxWidth:`520px`,children:[(0,F.jsx)(Kh,{theme:e,children:`Select a player to become the owner.`}),(0,F.jsxs)(Wh,{children:[We.map(t=>(0,F.jsxs)(Gh,{theme:e,$isCurrent:kt?.createdUserId===t.id,onClick:()=>Et(t.id),disabled:O||oe||ce,children:[t.name,kt?.createdUserId===t.id?` (current)`:``]},t.id)),(0,F.jsx)(Gh,{theme:e,onClick:()=>{Ot()},disabled:O||oe||ce,children:ce?`Removing...`:`Remove Unit from List`})]}),(0,F.jsx)(Jh,{theme:e}),(0,F.jsxs)(Yh,{theme:e,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(Xh,{theme:e,children:`Boss Mode`}),(0,F.jsx)(Zh,{theme:e,children:`Shows a large encounter HP bar in scene (max 2 bosses).`})]}),(0,F.jsx)(Qh,{children:(0,F.jsx)($h,{type:`button`,theme:e,$active:At,disabled:O||oe||ce,"aria-label":`Toggle boss mode`,"aria-pressed":At,onClick:()=>{Dt()}})})]}),te&&(0,F.jsx)(qh,{theme:e,children:te})]}),(0,F.jsx)(Ym,{manager:Ue}),(0,F.jsxs)(Rp,{isOpen:ye,title:`Reset Encounter`,onClose:()=>{xe||be(!1)},closeOnOverlayClick:!xe,maxWidth:`460px`,children:[(0,F.jsx)(Kh,{theme:e,children:`Choose how you want to reset initiative state.`}),(0,F.jsxs)(Wh,{children:[(0,F.jsx)(Gh,{theme:e,onClick:()=>{wt(`round`)},disabled:xe,children:xe?`Resetting...`:`Reset Round`}),(0,F.jsx)(Gh,{theme:e,onClick:()=>{wt(`reset-initiative`)},disabled:xe,children:xe?`Resetting...`:`Reset Round & Initiative`}),(0,F.jsx)(Gh,{theme:e,onClick:()=>{wt(`clear-list`)},disabled:xe,children:xe?`Resetting...`:`Reset Round & Clear List`})]})]}),(0,F.jsx)(Rp,{isOpen:!!he,title:jt?`${Mt?.attr_name||`List`} for ${jt.name}`:`List Reference`,onClose:()=>{ge(null)},maxWidth:`620px`,children:(0,F.jsxs)(eg,{children:[(0,F.jsx)(tg,{theme:e}),Nt.length===0?(0,F.jsx)(ug,{theme:e,children:`No entries.`}):(0,F.jsx)(ng,{children:Nt.map(t=>(0,F.jsxs)(rg,{theme:e,children:[(0,F.jsxs)(ig,{children:[Pt?(0,F.jsx)(ag,{type:`checkbox`,checked:!!t.inUse,readOnly:!0,tabIndex:-1}):null,(0,F.jsx)(og,{theme:e,children:t.name||`(Unnamed)`})]}),t.description?(0,F.jsx)(sg,{theme:e,children:t.description}):null,(()=>{let n=Lt(t.description||``);return n.length===0?null:(0,F.jsx)(cg,{children:n.map((n,r)=>(0,F.jsx)(lg,{type:`button`,theme:e,onClick:()=>{let e=jt?.createdUserId?c.find(e=>e.id===jt.createdUserId):null;Ve({notation:n,actionName:t.name||Mt?.attr_name||`List Roll`,tokenName:jt?.name||`Unknown`,senderId:jt?.createdUserId||u?.id||`unknown`,senderColor:e?.color||u?.color||`#ffffff`})},title:n,children:n},`${t.id}-inline-notation-${r}`))})})()]},t.id))})]})})]})};var pg=`${ne.EXTENSIONID}-partyhud`,mg=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,hg=y.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>v(e.theme.BACKGROUND,.35)};
`,gg=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`,_g=y(gg)`
  justify-content: center;
`,vg=y.span`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: ${e=>v(e.theme.PRIMARY,.9)};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`,yg=y.button`
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
`,bg=y.select`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>v(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px;
  min-width: 160px;
`,xg=y.p`
  margin: 0;
  font-size: 12px;
  color: ${e=>v(e.theme.PRIMARY,.8)};
`,Sg=y.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${e=>e.$disabled?.55:1};
`,Cg=y.span`
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
`,wg=y.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>v(e.theme.BACKGROUND,.35)};
`,Tg=y.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
`,Eg=y.img`
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
`,Dg=y.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,Og=y.span`
  color: ${e=>e.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,kg=y.input`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>v(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
`,Ag=y.p`
  color: ${e=>e.theme.PRIMARY};
  margin: 0;
`,jg=e=>{switch(e){case`bottom`:return`left`;case`left`:return`top`;case`top`:return`right`;case`right`:default:return`bottom`}},Mg=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,Ng=async()=>{await E.modal.open({id:pg,url:`/pages/forgeparty.html`,fullScreen:!0,hideBackdrop:!0,hidePaper:!0,disablePointerEvents:!0})};const Pg=()=>{let e=(0,A.useRef)(!1),{theme:t}=je(),{attributes:n}=Cm(),i=M(e=>e.items),a=M(e=>e.sceneMetadata);M(e=>e.roomMetadata);let o=M(e=>e.playerData),s=a,c=String(o?.role||``).toUpperCase()===`GM`,u=o?.id,d=l(h.PARTY_HUD_OPEN,u),f=l(h.PARTY_HUD_ORIENTATION,u),p=(s[d]??s[h.PARTY_HUD_OPEN])===!0,g=s[f]??s[h.PARTY_HUD_ORIENTATION],_=Mg(g)?g:`bottom`,v=s[h.PARTY_HUD_ATTR_ONE]||``,y=s[h.PARTY_HUD_ATTR_TWO]||``,b=s[h.PARTY_HUD_SHOW_HP_BARS]===!0,x=s[h.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!b,S=i.filter(e=>e.metadata[m.IN_PARTY]===!0),C=(0,A.useMemo)(()=>n.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[n]),w=async(e,t)=>{await E.scene.setMetadata({[e]:t})},T=async()=>{let t=!p;if(await w(d,t),!t){await E.modal.close(pg),e.current=!1;return}await Ng(),e.current=!0},ee=async()=>{await w(f,jg(_))},te=async(e,t)=>{let n=t.trim();await E.scene.items.updateItems([e],e=>{let t={...e[0].metadata||{}};n?t[m.PORTRAIT_URL]=n:delete t[m.PORTRAIT_URL],e[0].metadata=t})};return(0,A.useEffect)(()=>{let t=!0;return(async()=>{if(p&&!e.current){await Ng(),t&&(e.current=!0);return}!p&&e.current&&(await E.modal.close(pg),t&&(e.current=!1))})(),()=>{t=!1}},[p]),(0,F.jsx)(zu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,F.jsxs)(mp,{theme:t,children:[(0,F.jsx)(hp,{theme:t,children:`Party`}),(0,F.jsxs)(hg,{theme:t,children:[(0,F.jsxs)(gg,{children:[(0,F.jsxs)(yg,{theme:t,onClick:()=>void ee(),children:[`Display: `,_.toUpperCase()]}),(0,F.jsx)(yg,{theme:t,onClick:()=>void T(),children:p?`Close Party HUD`:`Open Party HUD`})]}),c&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(_g,{children:[(0,F.jsx)(vg,{theme:t,children:`Show in HUD:`}),(0,F.jsxs)(Sg,{$disabled:!c,children:[(0,F.jsx)(Cg,{theme:t,children:`Show HP Bars`}),(0,F.jsx)(X,{label:`Party HUD Show HP Bars`,isOn:b,onChange:e=>{c&&(w(h.PARTY_HUD_SHOW_HP_BARS,e),e&&w(h.PARTY_HUD_SHOW_HP_NUMBERS,!1))}})]}),(0,F.jsxs)(Sg,{$disabled:!c,children:[(0,F.jsx)(Cg,{theme:t,children:`Show HP Numbers`}),(0,F.jsx)(X,{label:`Party HUD Show HP Numbers`,isOn:x,onChange:e=>{c&&(w(h.PARTY_HUD_SHOW_HP_NUMBERS,e),e&&w(h.PARTY_HUD_SHOW_HP_BARS,!1))}})]}),(0,F.jsxs)(bg,{theme:t,disabled:!c,value:v,onChange:e=>{let t=e.target.value;w(h.PARTY_HUD_ATTR_ONE,t),t&&t===y&&w(h.PARTY_HUD_ATTR_TWO,``)},children:[(0,F.jsx)(`option`,{value:``,children:`Extra Slot 1 (None)`}),C.map(e=>(0,F.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,F.jsxs)(bg,{theme:t,disabled:!c,value:y,onChange:e=>{let t=e.target.value;w(h.PARTY_HUD_ATTR_TWO,t),t&&t===v&&w(h.PARTY_HUD_ATTR_ONE,``)},children:[(0,F.jsx)(`option`,{value:``,children:`Extra Slot 2 (None)`}),C.map(e=>(0,F.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]})]}),(0,F.jsx)(xg,{theme:t,children:(0,F.jsxs)(F.Fragment,{children:[`Configure Party HUD and portraits.`,(0,F.jsx)(`br`,{}),`LIST attributes are excluded.`]})})]})]}),S.length===0?(0,F.jsx)(Ag,{theme:t,children:`No one is in the Party.  Add a unit using the ContextMenu on the token.`}):(0,F.jsx)(mg,{theme:t,children:S.map(e=>{let n=e.metadata?.[m.PORTRAIT_URL]||``,i=r(e)?e.image.url:void 0,a=e.metadata[m.UNIT_NAME]||e.name||`Unknown`,s=e.createdUserId===o?.id,l=c||s,u=i||`/logo.png`,d=!!n;return(0,F.jsxs)(wg,{theme:t,children:[(0,F.jsxs)(Tg,{children:[(0,F.jsx)(Eg,{theme:t,src:u,alt:a,$full:!d}),d&&(0,F.jsx)(Eg,{theme:t,src:d?n:``,alt:`${a} override`,$overlay:!0})]}),(0,F.jsxs)(Dg,{children:[(0,F.jsx)(Og,{theme:t,title:a,children:a}),l&&(0,F.jsx)(kg,{theme:t,defaultValue:n,placeholder:`Portrait URL override (optional)`,onBlur:t=>{te(e.id,t.target.value)}})]})]},e.id)})})]})})};var Fg=`${k}/hp-bar-effect`,Ig=`${k}/hp-bar-owner`,Lg=`${k}/hp-number-text`,Rg=`${k}/hp-number-owner`,zg=e=>`HPB${e.slice(3)}`,Bg=e=>`HPN${e.slice(3)}`,Vg=(e,t,n)=>Math.max(t,Math.min(n,e)),Hg=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},Ug=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||ve.CURRENT_HP,maxHpBid:n?.attr_bid||ve.MAX_HP}},Wg=(e,t)=>{let n=Ug(t),r=e[h.HP_CURRENT_BID],i=e[h.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},Gg=(e,t,n)=>{let r=e.metadata?.[`${k}/${t}`],i=e.metadata?.[`${k}/${n}`],a=Hg(r),o=Hg(i);return o===null||o<=0||a===null?null:Vg(a/o*100,0,100)},Kg=(e,t,n)=>{let r=e.metadata?.[`${k}/${t}`],i=e.metadata?.[`${k}/${n}`],a=Hg(r),o=Hg(i);return a===null?null:{currentHp:Math.trunc(a),maxHp:o===null?null:Math.trunc(o)}},qg=e=>{let t=String(e||`bottom`).toLowerCase();return t===`top`||t===`bottom`||t===`left`||t===`right`?t:`bottom`},Jg=e=>{switch(qg(e)){case`top`:return 0;case`bottom`:return 1;case`left`:return 2;case`right`:return 3;default:return 1}},Yg=(e,t)=>{let n=t/e.grid.dpi,r=e.image.width*n,i=e.image.height*n,a=e.grid.offset.x/e.image.width*r,o=e.grid.offset.y/e.image.height*i;return{minX:e.position.x-a,minY:e.position.y-o,width:r,height:i}},Xg=(e,t,n)=>{let r=Yg(e,t),i=r.minX+r.width*.5,a=r.minY+r.height*.5,o;switch(n){case`top`:o={x:i,y:r.minY+r.height*.18};break;case`bottom`:o={x:i,y:r.minY+r.height*.82};break;case`left`:o={x:r.minX+r.width*.18,y:a};break;case`right`:o={x:r.minX+r.width*.82,y:a};break}let s=r.width*.25,c=r.height*.18;return{x:o.x-s,y:o.y-c}};const Zg=()=>{let e=M(e=>e.cacheReady),i=M(e=>e.sceneReady),a=M(e=>e.items),o=M(e=>e.localItems),l=M(e=>e.gridDpi),u=M(e=>e.roomMetadata),d=M(e=>e.sceneMetadata);return(0,A.useEffect)(()=>{if(!e||!i)return;let u=!1;return(async()=>{let e=d,i=e[h.SHOW_HP_BARS]??!1,f=e[h.SHOW_HP_NUMBERS]??!1,p=i,g=!i&&f,_=qg(e[h.HP_BAR_ORIENTATION]),v=Jg(e[h.HP_BAR_ORIENTATION]),{currentHpBid:y,maxHpBid:b}=Wg(e,d[$.CURRENT_ATTR]||[]),x=o.filter(e=>n(e)&&e.metadata?.[Fg]===!0),S=o.filter(e=>c(e)&&e.metadata?.[Lg]===!0);if(!p&&x.length>0)try{await E.scene.local.deleteItems(x.map(e=>e.id))}catch(e){D.error(`Failed to remove HP bar effects`,e)}if(!g&&S.length>0)try{await E.scene.local.deleteItems(S.map(e=>e.id))}catch(e){D.error(`Failed to remove HP number texts`,e)}if(!p&&!g)return;let C=a.filter(e=>r(e)&&e.metadata?.[m.ON_LIST]===!0),w=new Map,T=new Map;for(let e of C){if(p){let t=Gg(e,y,b);t!==null&&w.set(zg(e.id),{unitId:e.id,hpPercent:t})}if(g&&r(e)){let t=Kg(e,y,b);if(t){let n=t.maxHp===null?`${t.currentHp}`:`${t.currentHp}/${t.maxHp}`;T.set(Bg(e.id),{unitId:e.id,text:n,position:Xg(e,l,_)})}}}if(p){let e=new Map(x.map(e=>[e.id,e])),t=Array.from(w.entries()).filter(([t])=>!e.has(t)),n=x.filter(e=>!w.has(e.id)),r=x.filter(e=>{let t=w.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`orientation`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return e.attachedTo!==t.unitId||!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-v)>.001});if(u)return;if(n.length>0)try{await E.scene.local.deleteItems(n.map(e=>e.id))}catch(e){D.error(`Failed to remove stale HP bar effects`,e)}if(t.length>0){let e=t.map(([e,t])=>s().id(e).name(`HP Bar Effect`).effectType(`ATTACHMENT`).attachedTo(t.unitId).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).uniforms([{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:v}]).sksl(`
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
`).metadata({[Fg]:!0,[Ig]:t.unitId}).build());try{await E.scene.local.addItems(e)}catch(e){D.error(`Failed to add HP bar effects`,e)}}if(r.length>0){let e=r.map(e=>e.id);try{await E.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=w.get(e.id);if(!t)return;e.attachedTo=t.unitId;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`orientation`,value:v}],e.metadata={...e.metadata,[Fg]:!0,[Ig]:t.unitId}})})}catch(e){D.error(`Failed to update HP bar effects`,e)}}}if(g){let e=new Map(S.map(e=>[e.id,e])),n=Array.from(T.entries()).filter(([t])=>!e.has(t)),r=S.filter(e=>!T.has(e.id)),i=S.filter(e=>{let t=T.get(e.id);if(!t)return!1;let n=e.text?.plainText,r=Math.abs(e.position.x-t.position.x)>.01||Math.abs(e.position.y-t.position.y)>.01;return e.attachedTo!==t.unitId||n!==t.text||r});if(u)return;if(r.length>0)try{await E.scene.local.deleteItems(r.map(e=>e.id))}catch(e){D.error(`Failed to remove stale HP number texts`,e)}if(n.length>0){let e=n.map(([e,n])=>{let r=C.find(e=>e.id===n.unitId);return t().id(e).name(`HP Number Text`).plainText(n.text).textType(`PLAIN`).fontWeight(900).fillOpacity(.95).fillColor(`white`).strokeWidth(8).strokeColor(`black`).strokeOpacity(1).fontSize(28).fontFamily(`Segoe UI`).textAlign(`CENTER`).position(n.position).metadata({[Lg]:!0,[Rg]:n.unitId}).attachedTo(n.unitId).visible(r?.visible??!0).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).layer(`TEXT`).build()});try{await E.scene.local.addItems(e)}catch(e){D.error(`Failed to add HP number texts`,e)}}if(i.length>0){let e=i.map(e=>e.id);try{await E.scene.local.updateItems(e,e=>{e.forEach(e=>{let t=T.get(e.id);if(!t)return;e.attachedTo=t.unitId,e.position=t.position;let n=e;n.text&&(n.text.plainText=t.text),e.metadata={...e.metadata,[Lg]:!0,[Rg]:t.unitId}})})}catch(e){D.error(`Failed to update HP number texts`,e)}}}})(),()=>{u=!0}},[e,i,a,o,l,u,d]),null};var Qg=`${k}/death-effect-token`,$g=`${k}/death-effect-owner`,e_=e=>`DTH${e.slice(3)}`,t_=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},n_=e=>({currentHpBid:e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`})?.attr_bid||ve.CURRENT_HP}),r_=(e,t)=>{let n=n_(t),r=e[h.HP_CURRENT_BID],i=new Set(t.map(e=>e.attr_bid));return r&&i.has(r)?r:n.currentHpBid},i_=(e,t)=>{let n=e.metadata?.[`${k}/${t}`];return t_(n)};const a_=()=>{let e=M(e=>e.cacheReady),t=M(e=>e.sceneReady),i=M(e=>e.items),a=M(e=>e.localItems),o=M(e=>e.roomMetadata),c=M(e=>e.sceneMetadata);return(0,A.useEffect)(()=>{if(!e||!t)return;let o=!1;return(async()=>{let e=c,t=e[h.SHOW_DEATH_EFFECT]??!1,l=r_(e,c[$.CURRENT_ATTR]||[]),u=a.filter(e=>n(e)&&e.metadata?.[Qg]===!0);if(!t){if(u.length>0)try{await E.scene.local.deleteItems(u.map(e=>e.id))}catch(e){D.error(`Failed to remove death token effects`,e)}return}let d=i.filter(e=>r(e)&&e.metadata?.[m.ON_LIST]===!0),f=new Map;d.forEach(e=>{i_(e,l)===0&&f.set(e_(e.id),e.id)});let p=new Map(u.map(e=>[e.id,e])),g=Array.from(f.entries()).filter(([e])=>!p.has(e)),_=u.filter(e=>!f.has(e.id)),v=u.filter(e=>{let t=f.get(e.id);if(!t)return!1;let n=e;return e.attachedTo!==t||n.metadata?.[$g]!==t});if(!o){if(_.length>0)try{await E.scene.local.deleteItems(_.map(e=>e.id))}catch(e){D.error(`Failed to remove stale death token effects`,e)}if(g.length>0){let e=g.map(([e,t])=>s().id(e).name(`Death Token Effect`).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(`
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
`).metadata({[Qg]:!0,[$g]:t}).build());try{await E.scene.local.addItems(e)}catch(e){D.error(`Failed to add death token effects`,e)}}if(v.length>0)try{await E.scene.local.updateItems(v.map(e=>e.id),e=>{e.forEach(e=>{let t=f.get(e.id);t&&(e.attachedTo=t,e.metadata={...e.metadata,[Qg]:!0,[$g]:t})})})}catch(e){D.error(`Failed to update death token effects`,e)}}})(),()=>{o=!0}},[e,t,i,a,o,c]),null};var o_=`${k}/buff-effect-token`,s_=`${k}/buff-effect-owner`,c_=`${k}/debuff-effect-token`,l_=`${k}/debuff-effect-owner`,u_=`${k}/effect-preset`,d_=e=>`EFB${e.slice(3)}`,f_=e=>`EFD${e.slice(3)}`,p_=e=>Array.isArray(e)?e.reduce((e,t)=>{if(!t||typeof t!=`object`)return e;let n=t,r=typeof n.name==`string`?n.name.trim():``,i=Number(n.remaining),a=Number.isFinite(i)?Math.max(0,Math.trunc(i)):0,o=n.durationType===`turns`?`turns`:`rounds`,s=n.endTiming===`end`?`end`:`start`,c=n.effectType===`buff`?`buff`:n.effectType===`debuff`?`debuff`:`neutral`,l=Array.isArray(n.targets)?Array.from(new Set(n.targets.filter(e=>typeof e==`string`&&e.length>0))):[];return!r||!a||e.push({id:typeof n.id==`string`&&n.id?n.id:crypto.randomUUID(),name:r,remaining:a,durationType:o,endTiming:s,effectType:c,targets:l,createdByName:typeof n.createdByName==`string`&&n.createdByName?n.createdByName:`Unknown`,createdById:typeof n.createdById==`string`?n.createdById:void 0}),e},[]):[];const m_=()=>{let e=M(e=>e.cacheReady),t=M(e=>e.sceneReady),i=M(e=>e.items),a=M(e=>e.localItems),o=M(e=>e.roomMetadata),c=M(e=>e.sceneMetadata);return(0,A.useEffect)(()=>{if(!e||!t)return;let o=!1;return(async()=>{let e=c,t=e[h.BUFF_VISUAL_PRESET],l=e[h.DEBUFF_VISUAL_PRESET],u=Up(t)?t:zp,d=Wp(l)?l:Bp,f=Gp(u),p=Kp(d),g=i.filter(e=>r(e)&&e.metadata?.[m.ON_LIST]===!0),_=new Set(g.map(e=>e.id)),v=new Map,y=(e,t)=>{let n=v.get(e)||{hasBuff:!1,hasDebuff:!1};t===`buff`?n.hasBuff=!0:n.hasDebuff=!0,v.set(e,n)};i.forEach(e=>{if(e.metadata?.[m.ON_LIST]!==!0)return;let t=p_(e.metadata?.[Em]);t.length!==0&&t.forEach(t=>{t.effectType!==`neutral`&&(t.targets.length>0?t.targets:[e.id]).forEach(e=>{_.has(e)&&(t.effectType===`buff`||t.effectType===`debuff`)&&y(e,t.effectType)})})});let b=new Map,x=new Map;g.forEach(e=>{let t=v.get(e.id);t?.hasBuff&&b.set(d_(e.id),e.id),t?.hasDebuff&&x.set(f_(e.id),e.id)});let S=a.filter(e=>n(e)&&e.metadata?.[o_]===!0),C=a.filter(e=>n(e)&&e.metadata?.[c_]===!0),w=async e=>{let{existing:t,desiredByOverlayId:n,preset:r,shader:i,name:a,flagKey:c,ownerKey:l}=e,u=new Map(t.map(e=>[e.id,e])),d=Array.from(n.entries()).filter(([e])=>!u.has(e)),f=t.filter(e=>!n.has(e.id)),p=t.filter(e=>{let t=n.get(e.id);if(!t)return!1;let i=e.metadata?.[u_];return e.attachedTo!==t||i!==r});if(!o){if(f.length>0)try{await E.scene.local.deleteItems(f.map(e=>e.id))}catch(e){D.error(`Failed to remove stale ${a.toLowerCase()} overlays`,e)}if(d.length>0){let e=d.map(([e,t])=>s().id(e).name(a).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(i).metadata({[c]:!0,[l]:t,[u_]:r}).build());try{await E.scene.local.addItems(e)}catch(e){D.error(`Failed to add ${a.toLowerCase()} overlays`,e)}}if(p.length>0)try{await E.scene.local.updateItems(p.map(e=>e.id),e=>{e.forEach(e=>{let t=n.get(e.id);if(!t)return;e.attachedTo=t;let a=e;a.sksl=i,e.metadata={...e.metadata,[c]:!0,[l]:t,[u_]:r}})})}catch(e){D.error(`Failed to update ${a.toLowerCase()} overlays`,e)}}};await w({existing:S,desiredByOverlayId:b,preset:u,shader:f,name:`Buff Token Effect`,flagKey:o_,ownerKey:s_}),await w({existing:C,desiredByOverlayId:x,preset:d,shader:p,name:`Debuff Token Effect`,flagKey:c_,ownerKey:l_})})(),()=>{o=!0}},[e,t,i,a,o,c]),null};var h_=`${k}/boss-hp-effect`,g_=`${k}/boss-hp-owner`,__=`${k}/boss-hp-slot`,v_=e=>`BOSSHP${e}`,y_=(e,t,n)=>Math.max(t,Math.min(n,e)),b_=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},x_=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||ve.CURRENT_HP,maxHpBid:n?.attr_bid||ve.MAX_HP}},S_=(e,t)=>{let n=x_(t),r=e[h.HP_CURRENT_BID],i=e[h.HP_MAX_BID],a=new Set(t.map(e=>e.attr_bid));return{currentHpBid:r&&a.has(r)?r:n.currentHpBid,maxHpBid:i&&a.has(i)?i:n.maxHpBid}},C_=(e,t,n)=>{let r=e.metadata?.[`${k}/${t}`],i=e.metadata?.[`${k}/${n}`],a=b_(r),o=b_(i);return o===null||o<=0||a===null?null:y_(a/o*100,0,100)};const w_=()=>{let e=M(e=>e.cacheReady),t=M(e=>e.sceneReady),i=M(e=>e.items),a=M(e=>e.localItems),o=M(e=>e.roomMetadata),c=M(e=>e.sceneMetadata);return(0,A.useEffect)(()=>{if(!e||!t)return;let o=!1;return(async()=>{let{currentHpBid:e,maxHpBid:t}=S_(c,c[$.CURRENT_ATTR]||[]),l=a.filter(e=>n(e)&&e.metadata?.[h_]===!0),u=i.filter(e=>r(e)&&e.metadata?.[m.ON_LIST]===!0&&e.metadata?.[m.BOSS_MODE]===!0).sort((e,t)=>{let n=Number(e.metadata?.[m.INITIATIVE]??0);return Number(t.metadata?.[m.INITIATIVE]??0)-n}).slice(0,2).map((n,r)=>{let i=C_(n,e,t);return i===null?null:{id:v_(r),unitId:n.id,slot:r,hpPercent:i}}).filter(e=>e!==null),d=new Map(u.map(e=>[e.id,e])),f=new Map(l.map(e=>[e.id,e])),p=l.filter(e=>!d.has(e.id)),h=u.filter(e=>!f.has(e.id)),g=l.filter(e=>{let t=d.get(e.id);if(!t)return!1;let n=e,r=n.uniforms?.find(e=>e.name===`hpPercent`),i=n.uniforms?.find(e=>e.name===`slot`),a=typeof r?.value==`number`?r.value:NaN,o=typeof i?.value==`number`?i.value:NaN;return!Number.isFinite(a)||Math.abs(a-t.hpPercent)>.001||!Number.isFinite(o)||Math.abs(o-t.slot)>.001||e.metadata?.[g_]!==t.unitId});if(!o){if(p.length>0)try{await E.scene.local.deleteItems(p.map(e=>e.id))}catch(e){D.error(`Failed to remove stale boss HP viewport effects`,e)}if(h.length>0){let e=h.map(e=>s().id(e.id).name(`Boss HP Bar`).effectType(`VIEWPORT`).locked(!0).disableHit(!0).uniforms([{name:`hpPercent`,value:e.hpPercent},{name:`slot`,value:e.slot}]).sksl(`
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
`).metadata({[h_]:!0,[g_]:e.unitId,[__]:e.slot}).build());try{await E.scene.local.addItems(e)}catch(e){D.error(`Failed to add boss HP viewport effects`,e)}}if(g.length>0)try{await E.scene.local.updateItems(g.map(e=>e.id),e=>{e.forEach(e=>{let t=d.get(e.id);if(!t)return;let n=e;n.uniforms=[{name:`hpPercent`,value:t.hpPercent},{name:`slot`,value:t.slot}],e.metadata={...e.metadata,[h_]:!0,[g_]:t.unitId,[__]:t.slot}})})}catch(e){D.error(`Failed to update boss HP viewport effects`,e)}}})(),()=>{o=!0}},[e,t,i,a,o,c]),null};var T_=`${k}/current-turn-effect`;const E_=()=>{let e=M(e=>e.cacheReady),t=M(e=>e.sceneReady),n=M(e=>e.items),r=M(e=>e.roomMetadata),i=M(e=>e.sceneMetadata);return(0,A.useEffect)(()=>{if(!e||!t)return;let r=!1;return(async()=>{let e=i[h.SHOW_TURN_EFFECT]===!0,t=i[h.CURRENT_TURN];if(!e||!t){try{await E.scene.local.deleteItems([T_])}catch{}return}if(!n.find(e=>e.id===t)){try{await E.scene.local.deleteItems([T_])}catch{}return}if(!r){try{let e=!1;if(await E.scene.local.updateItems([T_],n=>{let r=n[0];r&&(r.attachedTo=t,e=!0)}),e)return}catch{}if(!r)try{let e=s().id(T_).name(`Current Turn Effect`).effectType(`ATTACHMENT`).attachedTo(t).locked(!0).disableHit(!0).sksl(`
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

`).build();await E.scene.local.addItems([e])}catch(e){D.error(`Failed to sync current turn effect`,e)}}})(),()=>{r=!0}},[e,t,n,r,i]),null},D_=()=>{let[e,t]=(0,A.useState)(!1),{updateThemeFromSystem:n}=je(),r=M(e=>e.sceneMetadata),i=M(e=>e.cacheReady);return(0,A.useEffect)(()=>{if(!i)return;let e=r[$.CURRENT_THEME];if(!e?.primary||!e?.offset||!e?.background||!e?.border){n(w.theme_primary,w.theme_offset,w.theme_background,w.theme_border,w.background_url);return}n(e.primary,e.offset,e.background,e.border,e.background_url)},[i,r,n]),(0,A.useEffect)(()=>{if(e)return;let a=!0,o=async()=>{if(i)try{D.log(`Starting app initialization...`),await s(),a&&(t(!0),D.log(`App initialization complete`))}catch(e){D.error(`Error during app initialization:`,e),a&&t(!0)}},s=async()=>{try{let e=r[$.CURRENT_THEME],t=r[$.CURRENT_CARD],i=r[$.CURRENT_LIST],a=r[$.CURRENT_ATTR];if(!e||!Array.isArray(t)||!Array.isArray(i)||!Array.isArray(a)){D.log(`System data not found, initializing with defaults`),await c();return}D.log(`Loading existing system theme:`,e),n(e.primary,e.offset,e.background,e.border,e.background_url)}catch(e){D.error(`Error loading system data:`,e),await c()}},c=async()=>{let e={primary:w.theme_primary,offset:w.theme_offset,background:w.theme_background,border:w.theme_border,background_url:w.background_url};await E.scene.setMetadata({[$.CURRENT_THEME]:e,[$.CURRENT_CARD]:w.card_layout,[$.CURRENT_LIST]:w.list_layout,[$.CURRENT_ATTR]:w.attributes,[$.SYSTEM_NAME]:w.name,[$.IMPORT_DATE]:null}),D.log(`Default system initialized`),n(e.primary,e.offset,e.background,e.border,e.background_url)};return o(),()=>{a=!1}},[i,e]),{isInitialized:e}};var O_=S`
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
`,k_=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e2232;
  color: #ffffff;
`,A_=y.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: #9d99ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,j_=y.p`
  margin-top: 20px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
`;function M_(){let{sceneReady:e,cacheReady:t,playerData:n}=M(),{isInitialized:r}=D_(),{theme:i}=je(),[a,o]=(0,A.useState)(`ForgeMain`),[s,c]=(0,A.useState)(!1),l=String(n?.role||``).toUpperCase()===`GM`;return(0,A.useEffect)(()=>{a!==`ForgeMain`&&E.action.setWidth(350)},[a]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(O_,{theme:i}),!e||!t||!r?(0,F.jsxs)(k_,{children:[(0,F.jsx)(A_,{}),(0,F.jsx)(j_,{children:e?t?r?`Loading...`:`Initializing system...`:`Loading cache...`:`Connecting to scene...`})]}):(0,F.jsxs)(tp,{children:[(0,F.jsx)(Zg,{}),(0,F.jsx)(a_,{}),(0,F.jsx)(m_,{}),(0,F.jsx)(w_,{}),(0,F.jsx)(E_,{}),(0,F.jsx)(np,{theme:i,$backgroundUrl:i.BACKGROUND_URL,children:(0,F.jsx)(Jc,{mode:`wait`,children:(()=>{switch(a){case`ForgeMain`:return(0,F.jsx)(fg,{},`main`);case`Settings`:return l?(0,F.jsx)(Ep,{},`settings`):(0,F.jsx)(fg,{},`main`);case`Party`:return(0,F.jsx)(Pg,{},`party`);case`System`:return l?(0,F.jsx)(Sm,{},`system`):(0,F.jsx)(fg,{},`main`);case`ChatLog`:return(0,F.jsx)(Mp,{},`chatlog`)}})()})}),(0,F.jsx)(pp,{isOpen:s,currentPage:a,onToggle:()=>c(!s),onNavigate:e=>{if(!l&&(e===`Settings`||e===`System`)){o(`ForgeMain`),c(!1);return}o(e),c(!1)}})]})]})}var N_=M_,P_=class{static{this.ALPHANUMERICTEXTMATCH=/\s[\da-zA-Z]$/}};function F_(e){for(let t of L_)if(e.includes(t)){let n=L_[Math.floor(Math.random()*L_.length)];return e.replace(t,n)}return I_(e)}function I_(e){return`${L_[Math.floor(Math.random()*L_.length)]} ${e}`}const L_=`Grizzled.Wily.Stoic.Mellow.Pensive.Shrewd.Cautious.Hardy.Nimble.Tenacious.Gritty.Tolerant.Hardy.Adroit.Resilient.Slight.Stout.Durable.Subtle.Sober.Clever.Brave.Calm.Wise.Cunning.Alert.Swift.Agile.Loyal.Sturdy.Stable.Sneaky.Clever.Resourceful.Shady.Stalwart.Vigilant.Staunch.Fierce.Vigorous.Robust.Fearless.Dauntless.Resolute.Sagacious.Prudent.Judicious.Astute.Savvy.Sharp.Quick.Witty.Smart.Snippy.Crafty.Deft.Sly.Artful.Clever.Sneering.Tough.Rugged.Solid.Strong.Sturdy.Tough.Gritty.Rough.Hardened.Burly.Muscular.Brawny.Rowdy.Forceful.Snorting.Potent.Martial.Speckled.Mottled.Disheveled`.split(`.`);var R_=`com.battle-system.forge/view-unit`,z_=e=>e.trim().toLowerCase(),B_=e=>{let t=e.trim();return t?P_.ALPHANUMERICTEXTMATCH.test(t)?t.slice(0,-2):t:e},V_=async e=>{let t=await E.viewport.getHeight(),n=t>800?700:t-100;await E.popover.open({id:ne.CARDSID,url:`/pages/forgecard.html?unitid=${encodeURIComponent(e)}`,height:n,width:350,anchorReference:`POSITION`,anchorPosition:{left:await E.viewport.getWidth()/2,top:await E.viewport.getHeight()/2},anchorOrigin:{horizontal:`CENTER`,vertical:`CENTER`},transformOrigin:{horizontal:`CENTER`,vertical:`CENTER`},hidePaper:!0,disableClickAway:!0})},H_=async e=>{let t=Array.from(new Set(e.map(e=>e.trim()).filter(e=>e.length>0))),n=new Map;if(t.length===0)return n;try{let{data:e,error:r}=await le.from(`bs_forge_creatures`).select(`name,metadata,is_active`).eq(`is_active`,!0).in(`name`,t).limit(250);if(!r&&Array.isArray(e)){let t=e;for(let e of t){let t=z_(String(e.name||``));if(!t||n.has(t))continue;let r=e.metadata&&typeof e.metadata==`object`&&!Array.isArray(e.metadata)?ue(e.metadata):null;r&&n.set(t,r)}}}catch(e){D.log(`Supabase collection lookup failed, falling back to local collection`,e)}let r=await pe(),i=new Map;for(let e of r){let t=z_(e.name);if(!t)continue;let n=i.get(t);n?n.push(e):i.set(t,[e])}for(let e of t){let t=z_(e);if(n.has(t))continue;let r=i.get(t)?.[0];!r||!r.metadata||n.set(t,ue(r.metadata))}return n};function U_({children:e}){M(e=>e.roomMetadata);let t=M(e=>e.sceneMetadata),n=M(e=>e.items),r=M(e=>e.playerData),i=t;return(0,A.useEffect)(()=>{E.onReady(()=>{E.contextMenu.create({id:m.ON_LIST,icons:[{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,m.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Enter Combat`,filter:{every:[{key:[`metadata`,m.ON_LIST],operator:`!=`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,m.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Exit Combat`,filter:{every:[{key:[`metadata`,m.ON_LIST],operator:`==`,value:!0},{key:`type`,operator:`==`,value:`IMAGE`},{key:`createdUserId`,operator:`==`,value:r?.id}],roles:[`PLAYER`]}}],async onClick(e){if(D.info(`Add to Combat Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[m.ON_LIST]===!0))await E.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[m.ON_LIST],delete t.metadata[m.INITIATIVE]});else{let r=[],a=[],o=new Set(e.items.map(e=>e.id)),s=i[h.USE_DESCRIPTIVE_DUPLICATES]!==void 0,c=new Set(n.filter(e=>{if(o.has(e.id))return!1;let t=e.metadata[m.UNIT_NAME];return typeof t==`string`&&t.trim().length>0}).map(e=>z_(String(e.metadata[m.UNIT_NAME]))));for(let t of e.items){if(t.metadata[m.FABRICATED]===!0)continue;let e=B_(t.text?.plainText||t.name);r.push(e)}await E.action.setBadgeText(`Retrieving Data.. ⏱️`);let l=await H_(r);await E.action.setBadgeText(void 0);for(let t of e.items){let e={};if(t.metadata[m.FABRICATED]!==!0){let n=B_(t.text?.plainText||t.name),r=l.get(z_(n));if(r&&Object.assign(e,r),(typeof e[m.UNIT_NAME]!=`string`||!String(e[m.UNIT_NAME]).trim())&&(e[m.UNIT_NAME]=t.name),e[m.FABRICATED]=!0,s){let r=String(e[m.UNIT_NAME]||n||t.name).trim(),i=z_(r);if(i){let e=0;for(;c.has(i)&&e<20;)r=F_(r),i=z_(r),e+=1;i&&c.add(i)}e[m.UNIT_NAME]=r}}e[m.ON_LIST]=!0,e[m.INITIATIVE]=0,a.push({id:t.id,metadata:e})}await E.scene.items.updateItems(e.items,e=>{for(let n of e){let e=a.find(e=>e.id===n.id);if(e&&(Object.assign(n.metadata,e.metadata),t[h.SHOW_NAMES]===!0)){let t=n;t.text&&(t.text.plainText=String(e.metadata[m.UNIT_NAME]||``))}}})}}}),E.contextMenu.create({id:m.IN_PARTY,icons:[{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,m.IN_PARTY],operator:`!=`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Add to Party`,filter:{every:[{key:[`metadata`,m.IN_PARTY],operator:`!=`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,m.IN_PARTY],operator:`==`,value:!0}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`Remove from Party`,filter:{every:[{key:[`metadata`,m.IN_PARTY],operator:`==`,value:!0},{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){D.info(`Add to Party Clicked: ${e.items[0].name}`),e.items.every(e=>e.metadata[m.IN_PARTY]===!0)?await E.scene.items.updateItems(e.items,e=>{for(let t of e)delete t.metadata[m.IN_PARTY]}):await E.scene.items.updateItems(e.items,e=>{for(let t of e)t.metadata[m.IN_PARTY]=!0})}}),E.contextMenu.create({id:R_,icons:[{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`GM`]}},{icon:`/icon.svg`,label:`View Unit`,filter:{max:1,every:[{key:`createdUserId`,operator:`==`,value:r?.id}],some:[{key:`layer`,value:`CHARACTER`,coordinator:`||`},{key:`layer`,value:`MOUNT`}],roles:[`PLAYER`]}}],async onClick(e){D.info(`View Unit Clicked: ${e.items[0].name}`);let r=e.items[0];if(!r)return;let a={};if(r.metadata[m.FABRICATED]!==!0){let e=B_(r.text?.plainText||r.name);await E.action.setBadgeText(`Retrieving Data.. ⏱️`);let o=await H_([e]);await E.action.setBadgeText(void 0);let s=o.get(z_(e));s&&Object.assign(a,s),(typeof a[m.UNIT_NAME]!=`string`||!String(a[m.UNIT_NAME]).trim())&&(a[m.UNIT_NAME]=r.name),a[m.FABRICATED]=!0,i[h.USE_DESCRIPTIVE_DUPLICATES]!==void 0&&n.filter(e=>e.metadata[m.UNIT_NAME]!=null&&e.id!==r.id).map(e=>e.metadata[m.UNIT_NAME]).includes(e)&&(a[m.UNIT_NAME]=F_(e)),await E.scene.items.updateItems([r],e=>{let n=e[0];if(Object.assign(n.metadata,a),t[h.SHOW_NAMES]===!0){let e=n;e.text&&(e.text.plainText=String(a[m.UNIT_NAME]||``))}})}await V_(r.id)}})})},[i]),(0,F.jsx)(F.Fragment,{children:e})}we.createRoot(document.getElementById(`root`)).render((0,F.jsx)(A.StrictMode,{children:(0,F.jsx)(u,{children:(0,F.jsx)(Oe,{children:(0,F.jsx)(U_,{children:(0,F.jsx)(Ae,{children:(0,F.jsx)(N_,{})})})})})}));