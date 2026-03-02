import{A as e,P as t,S as n,T as r,b as i,g as a,j as o,m as s,n as c,t as l,x as u,y as d}from"./defaultgamesystem-CNO7r0LB.js";import{n as f}from"./MockData-DTzuSraw.js";var p=t(e(),1),m=o(),h=n(),g={CURRENT_THEME:`${i.EXTENSIONID}/CurrentTheme`},_={primary:l.theme_primary,offset:l.theme_offset,background:l.theme_background,border:l.theme_border,background_url:l.background_url},v=c.div`
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
`,C=e=>e.sceneMetadata,w=e=>{let t=e.trim();if(!t)return null;let n=Number(t);return Number.isFinite(n)?String(n):null},T=(e,t)=>{if(!e)return``;let n=e.metadata?.[t];return n==null?``:String(n)};p.createRoot(document.getElementById(`root`)).render((0,h.jsx)(m.StrictMode,{children:(0,h.jsx)(u,{children:(0,h.jsx)(()=>{let[e,t]=(0,m.useState)({sceneMetadata:{},roomMetadata:{}}),[n,o]=(0,m.useState)(``),[s,c]=(0,m.useState)(null),[l,u]=(0,m.useState)(``),[d,p]=(0,m.useState)(``),E=(0,m.useMemo)(()=>C(e),[e]),D=(0,m.useMemo)(()=>{let t=e.sceneMetadata[g.CURRENT_THEME];return!t?.primary||!t?.offset||!t?.background||!t?.border?_:t},[e.sceneMetadata]),O=(0,m.useMemo)(()=>{let e=E[a.HP_CURRENT_BID];return typeof e==`string`&&e.trim().length>0?e:f.CURRENT_HP},[E]),k=(0,m.useMemo)(()=>{let e=E[a.HP_MAX_BID];return typeof e==`string`&&e.trim().length>0?e:f.MAX_HP},[E]),A=`${i.EXTENSIONID}/${O}`,j=`${i.EXTENSIONID}/${k}`;(0,m.useEffect)(()=>{let e=!0,i=async t=>{let n=t?.[0]||``;if(!n){if(!e)return;o(``),c(null);return}let i=await r.scene.items.getItems(t||[]),a=i.find(e=>e.id===n)||i[0]||null;e&&(o(n),c(a))};(async()=>{let[n,a,o]=await Promise.all([r.scene.getMetadata(),r.room.getMetadata(),r.player.getSelection()]);e&&(t({sceneMetadata:n,roomMetadata:a}),await i(o))})();let a=r.scene.onMetadataChange(n=>{e&&t(e=>({...e,sceneMetadata:n}))}),s=r.room.onMetadataChange(n=>{e&&t(e=>({...e,roomMetadata:n}))}),l=r.scene.items.onChange(t=>{!e||!n||c(t.find(e=>e.id===n)||null)}),u=r.player.onChange(e=>{i(e.selection)});return()=>{e=!1,a(),s(),l(),u()}},[n]),(0,m.useEffect)(()=>{u(T(s,A)),p(T(s,j))},[s,A,j]);let M=async(e,t)=>{if(!s)return;let n=w(t);if(n===null){let t=T(s,`${i.EXTENSIONID}/${e}`);e===O?u(t):p(t);return}await r.scene.items.updateItems([s],t=>{let r=t[0];r&&(r.metadata[`${i.EXTENSIONID}/${e}`]=n)})},N=!!s;return(0,h.jsx)(v,{$theme:D,children:(0,h.jsxs)(b,{children:[(0,h.jsxs)(y,{children:[(0,h.jsx)(x,{$theme:D,htmlFor:`forge-context-health`,children:`Health`}),(0,h.jsx)(S,{$theme:D,id:`forge-context-health`,type:`number`,value:l,disabled:!N,onChange:e=>u(e.target.value),onBlur:()=>{M(O,l)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]}),(0,h.jsxs)(y,{children:[(0,h.jsx)(x,{$theme:D,htmlFor:`forge-context-max-health`,children:`Max Health`}),(0,h.jsx)(S,{$theme:D,id:`forge-context-max-health`,type:`number`,value:d,disabled:!N,onChange:e=>p(e.target.value),onBlur:()=>{M(k,d)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]})]})})},{})})}));