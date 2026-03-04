import{A as e,F as t,M as n,S as r,T as i,b as a,g as o,m as s,n as c,t as l,x as u,y as d}from"./defaultgamesystem-Bn_OpVZh.js";import{n as f}from"./MockData-DTzuSraw.js";var p=t(e(),1),m=n(),h=r(),g={CURRENT_THEME:`${a.EXTENSIONID}/CurrentTheme`},_={primary:l.theme_primary,offset:l.theme_offset,background:l.theme_background,border:l.theme_border,background_url:l.background_url},v=c.div`
  width: 100%;
  height: 100%;
  min-height: 50px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background: ${e=>s(e.$theme.background,.3)};
`,y=c.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
`,b=c.div`
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: space-evenly;
`,x=c.label`
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
`,S=c.input`
  width: 80px;
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 13px;
  box-sizing: border-box;
  color: ${e=>e.$theme.primary};
  background: ${e=>s(e.$theme.background,.7)};

  &:focus {
    outline: none;
    border-color: ${e=>e.$theme.offset};
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`,C=e=>e.sceneMetadata,w=e=>{let t=e.trim();if(!t)return null;let n=Number(t);return Number.isFinite(n)?String(n):null},T=(e,t)=>{if(!e)return``;let n=e.metadata?.[t];return n==null?``:String(n)};p.createRoot(document.getElementById(`root`)).render((0,h.jsx)(m.StrictMode,{children:(0,h.jsx)(u,{children:(0,h.jsx)(()=>{let[e,t]=(0,m.useState)({sceneMetadata:{},roomMetadata:{}}),[n,r]=(0,m.useState)(``),[s,c]=(0,m.useState)(null),[l,u]=(0,m.useState)(``),[d,p]=(0,m.useState)(``),E=(0,m.useMemo)(()=>C(e),[e]),D=(0,m.useMemo)(()=>{let t=e.sceneMetadata[g.CURRENT_THEME];return!t?.primary||!t?.offset||!t?.background||!t?.border?_:t},[e.sceneMetadata]),O=(0,m.useMemo)(()=>{let e=E[o.HP_CURRENT_BID];return typeof e==`string`&&e.trim().length>0?e:f.CURRENT_HP},[E]),k=(0,m.useMemo)(()=>{let e=E[o.HP_MAX_BID];return typeof e==`string`&&e.trim().length>0?e:f.MAX_HP},[E]),A=`${a.EXTENSIONID}/${O}`,j=`${a.EXTENSIONID}/${k}`;(0,m.useEffect)(()=>{let e=!0,a=async t=>{let n=t?.[0]||``;if(!n){if(!e)return;r(``),c(null);return}let a=await i.scene.items.getItems(t||[]),o=a.find(e=>e.id===n)||a[0]||null;e&&(r(n),c(o))};(async()=>{let[n,r,o]=await Promise.all([i.scene.getMetadata(),i.room.getMetadata(),i.player.getSelection()]);e&&(t({sceneMetadata:n,roomMetadata:r}),await a(o))})();let o=i.scene.onMetadataChange(n=>{e&&t(e=>({...e,sceneMetadata:n}))}),s=i.room.onMetadataChange(n=>{e&&t(e=>({...e,roomMetadata:n}))}),l=i.scene.items.onChange(t=>{!e||!n||c(t.find(e=>e.id===n)||null)}),u=i.player.onChange(e=>{a(e.selection)});return()=>{e=!1,o(),s(),l(),u()}},[n]),(0,m.useEffect)(()=>{u(T(s,A)),p(T(s,j))},[s,A,j]);let M=async(e,t)=>{if(!s)return;let n=w(t);if(n===null){let t=T(s,`${a.EXTENSIONID}/${e}`);e===O?u(t):p(t);return}await i.scene.items.updateItems([s],t=>{let r=t[0];r&&(r.metadata[`${a.EXTENSIONID}/${e}`]=n)})},N=!!s;return(0,h.jsx)(v,{$theme:D,children:(0,h.jsxs)(b,{children:[(0,h.jsxs)(y,{children:[(0,h.jsx)(x,{$theme:D,htmlFor:`forge-context-health`,children:`Health`}),(0,h.jsx)(S,{$theme:D,id:`forge-context-health`,type:`number`,value:l,disabled:!N,onChange:e=>u(e.target.value),onBlur:()=>{M(O,l)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]}),(0,h.jsxs)(y,{children:[(0,h.jsx)(x,{$theme:D,htmlFor:`forge-context-max-health`,children:`Max Health`}),(0,h.jsx)(S,{$theme:D,id:`forge-context-max-health`,type:`number`,value:d,disabled:!N,onChange:e=>p(e.target.value),onBlur:()=>{M(k,d)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]})]})})},{})})}));