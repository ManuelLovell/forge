import{_ as e,c as t,o as n}from"./tslib.es6-B50zIwoW.js";import{n as r,t as i}from"./PluginGateComponent-BqCn6KcS.js";import{f as a,m as o,p as s,t as c}from"./styled-components.browser.esm-DHy5LH3R.js";import"./react-dom-kWs4TVWh.js";import{r as l}from"./Constants-BX77kWGP.js";import{t as u}from"./createLucideIcon-gARKqKD9.js";import{t as d}from"./arrow-right-Bz2u8H70.js";import{t as f}from"./plus-C-EN8o4A.js";import{t as p}from"./x-C4zz0Fc8.js";import{t as m}from"./Translation-D3JFL327.js";import{o as h,s as g,t as _}from"./systemKeys-BMkLiNP4.js";import{i as v,n as y,r as b,t as x}from"./rollResolutionPopover-BwKje41H.js";import{a as S}from"./supabaseClient-ByYw65z_.js";/* empty css               */import{i as C}from"./defaultgamesystem-Bf6m7RzJ.js";var w=u(`minus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]),T=e(r(),1),E=o(),D=s(),O=c.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  color: ${e=>e.$theme.primary};
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: none !important;
  background-size: initial !important;
  background-position: initial !important;
  background-repeat: no-repeat !important;
  backdrop-filter: blur(6px);
`,k=c.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${e=>e.$compact?`8px 8px 6px`:`10px 8px 8px`};
  background: ${e=>a(e.$theme.background,.48)};
  background-image: none !important;
  background-size: initial !important;
  background-position: initial !important;
  background-repeat: no-repeat !important;
  display: flex;
  flex-direction: column;
`,A=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 0;
`,j=c.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,M=c.button`
  padding: 0;
  border: none;
  background: none;
  color: ${e=>e.$theme.primary};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.1;
  cursor: pointer;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,N=c.button`
  width: 22px;
  height: 22px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  background: ${e=>a(e.$theme.background,.82)};
  color: ${e=>e.$theme.primary};
  cursor: pointer;

  &:hover {
    background: ${e=>a(e.$theme.offset,.5)};
  }
`,P=c.div`
  display: flex;
  gap: 6px;
  margin-top: 2px;
`,F=c.button`
  display: inline-flex;
  flex: 1 1 0;
  min-width: 0;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 4px;
  min-height: 34px;
  padding: 6px 6px;
  border-radius: 12px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>e.$active?a(e.$theme.offset,.68):a(e.$theme.background,.78)};
  color: ${e=>e.$theme.primary};
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,I=c.div`
  margin-top: 2px;
  margin-bottom: 2px;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-size: 40px;
  font-weight: 800;
  line-height: 1;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,L=c.p`
  margin: 6px 0 0;
  text-align: left;
  font-size: 12px;
  color: ${e=>a(e.$theme.primary,.75)};
`,R=c.button`
  width: 100%;
  box-sizing: border-box;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>a(e.$theme.offset,.72)};
  color: ${e=>e.$theme.primary};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  overflow: hidden;
`;const z=({theme:e,isOpen:t,isProcessMode:n,total:r,mode:i,onModeChange:a,onApply:o,onExitProcessMode:s,onClose:c})=>{let{t:l}=m();return!t||r===null?null:(0,D.jsx)(O,{$theme:e,children:(0,D.jsxs)(k,{$theme:e,$compact:n,children:[(0,D.jsxs)(A,{children:[n?(0,D.jsx)(M,{type:`button`,$theme:e,onClick:s,children:l(`rollResolution.applyResult`)}):(0,D.jsx)(j,{children:l(`rollResolution.title`)}),(0,D.jsx)(N,{type:`button`,$theme:e,"aria-label":l(`rollResolution.close`),onClick:c,children:(0,D.jsx)(p,{size:14})})]}),n?(0,D.jsx)(L,{$theme:e,children:l(`rollResolution.processHint`)}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(P,{$theme:e,children:[(0,D.jsxs)(F,{type:`button`,$theme:e,$active:i===`subtract`,onClick:()=>a(`subtract`),children:[(0,D.jsx)(w,{size:14}),l(`rollResolution.modeSubtract`)]}),(0,D.jsxs)(F,{type:`button`,$theme:e,$active:i===`add`,onClick:()=>a(`add`),children:[(0,D.jsx)(f,{size:14}),l(`rollResolution.modeAdd`)]})]}),(0,D.jsx)(I,{$theme:e,children:Math.abs(r)}),(0,D.jsx)(R,{type:`button`,$theme:e,"aria-label":l(`rollResolution.apply`),onClick:o,children:(0,D.jsx)(d,{size:18})})]})]})})};var B=`${l.EXTENSIONID}/`,V=e=>`${B}${e}`,H=e=>e?Object.keys(e.metadata||{}).some(e=>e.startsWith(B)):!1,U=(e,t,n)=>{let r=V(t.bid),i=String(t.type||``).toLowerCase();if(i===`numb`){let t=Number(e.metadata?.[r]);return{key:r,value:(Number.isFinite(t)?t:0)+n}}if(i===`resource`){let i=e.metadata?.[r],a=i&&typeof i==`object`&&!Array.isArray(i)?i:{},o=Number(a.current),s=Number(a.max),c=Number(t.defaultMax),l=Number.isFinite(o)?o:0,u=Number.isFinite(s)?Math.max(0,s):Number.isFinite(c)?Math.max(0,c):null,d=l+n,f=Math.max(0,d);return{key:r,value:{current:typeof u==`number`?Math.min(f,u):f,max:typeof u==`number`?u:Number.isFinite(s)?s:0}}}return null};const W=async(e,n,r)=>{let i=(await t.scene.items.getItems()).find(t=>t.id===e);if(!H(i))return{status:`invalid-target`};if(!n?.bid)return{status:`missing-attribute`};let a=U(i,n,r);if(!a)return{status:`missing-attribute`};try{return await t.scene.items.updateItems([e],e=>{e[0].metadata[a.key]=a.value}),{status:`success`,itemId:e,delta:r}}catch(e){return{status:`write-failed`,error:e}}},G=async(e,r)=>{let i=r>=0?h(`buff_effect_two`):g(`debuff_effect_two`),a=`rrfx-${e}-${crypto.randomUUID()}`,o=n().id(a).name(`Roll Resolution Effect`).effectType(`ATTACHMENT`).layer(`ATTACHMENT`).attachedTo(e).locked(!0).disableHit(!0).disableAttachmentBehavior([`ROTATION`,`SCALE`]).sksl(i).build();try{await t.scene.local.addItems([o]),await new Promise(e=>{window.setTimeout(e,1e3)}),await t.scene.local.deleteItems([a])}catch{}};var K={primary:C.theme_primary,offset:C.theme_offset,background:C.theme_background,border:C.theme_border},q=240,J=84,Y=()=>{if(typeof window>`u`)return null;let e=new URLSearchParams(window.location.search),t=Number(e.get(`total`)),n=e.get(`source`),r=e.get(`bid`),i=e.get(`type`),a=Number(e.get(`defaultMax`)),o=e.get(`message`);return!Number.isFinite(t)||!n||!r||i!==`numb`&&i!==`resource`?null:{total:Math.abs(t),source:n,message:o?.trim()||null,attribute:{bid:r,type:i,defaultMax:Number.isFinite(a)?a:void 0}}};T.createRoot(document.getElementById(`root`)).render((0,D.jsx)(E.StrictMode,{children:(0,D.jsx)(i,{children:(0,D.jsx)(()=>{let{t:e}=m(),[n,r]=(0,E.useState)(()=>Y()),[i,a]=(0,E.useState)(K),[o,s]=(0,E.useState)(!1),[c,l]=(0,E.useState)(`subtract`),[u,d]=(0,E.useState)([]),f=(0,E.useRef)(null);return(0,E.useEffect)(()=>{let e=!0,n=async t=>{let n=t[_.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&a(K);return}try{let{data:t,error:r}=await S.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(r){e&&a(K);return}let i=Array.isArray(t)?t[0]:t;if(!i||typeof i.snapshot_public_id!=`string`){e&&a(K);return}e&&a({primary:i.theme_primary,offset:i.theme_offset,background:i.theme_background,border:i.theme_border})}catch{e&&a(K)}};return t.onReady(async()=>{if(!e)return;await n(await t.room.getMetadata());let r=t.room.onMetadataChange(t=>{e&&n(t)});e||r()}),()=>{e=!1}},[]),(0,E.useEffect)(()=>{let e=q,n=o?J:164;(async()=>{try{await t.popover.getWidth(y)!==e&&await t.popover.setWidth(y,e),await t.popover.getHeight(y)!==n&&await t.popover.setHeight(y,n)}catch{}})()},[o]),(0,E.useEffect)(()=>{let e=t.broadcast.onMessage(x,e=>{let t=e.data;v(t)&&(r({total:Math.abs(t.total),source:t.source,message:t.message?.trim()||null,attribute:t.attribute}),l(`subtract`),s(!1),f.current=null)});return()=>{e()}},[]),(0,E.useEffect)(()=>{let e=!0;(async()=>{let n=await t.player.getSelection();e&&d(Array.isArray(n)?n:[])})();let n=t.player.onChange(e=>{d(Array.isArray(e.selection)?e.selection:[])});return()=>{e=!1,n()}},[]),(0,E.useEffect)(()=>{if(!o||!n){f.current=null;return}if(u.length!==1)return;let r=u[0];!r||f.current===r||(f.current=r,(async()=>{let i=c===`subtract`?-Math.abs(n.total):Math.abs(n.total),a=await W(r,n.attribute,i);if(a.status===`success`){G(r,i),await t.player.deselect();return}if(a.status===`invalid-target`||a.status===`missing-attribute`){await t.player.deselect();return}await t.notification.show(e(`rollResolution.applyFailed`),`ERROR`)})().finally(()=>{f.current=null}))},[o,c,u,n,e]),n?(0,D.jsx)(z,{theme:i,isOpen:!0,isProcessMode:o,total:n.total,mode:c,onModeChange:l,onApply:()=>{s(!0),t.player.deselect()},onExitProcessMode:()=>s(!1),onClose:()=>{b()}}):null},{})})}));