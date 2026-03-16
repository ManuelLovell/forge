import{C as e,F as t,N as n,O as r,R as i,S as a,T as o,_ as s,o as c,s as l,t as u,w as d,y as f}from"./defaultgamesystem-BOilZxMK.js";import{n as p}from"./MockData-DTzuSraw.js";var m=i(n(),1),h=t(),g=o(),_={SNAPSHOT_PUBLIC_ID:`${e.EXTENSIONID}/SnapshotPublicId`},v={primary:u.theme_primary,offset:u.theme_offset,background:u.theme_background,border:u.theme_border,background_url:u.background_url},y=l.div`
  width: 100%;
  height: 100%;
  min-height: 50px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background: ${e=>s(e.$theme.background,.3)};
`,b=l.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
`,x=l.div`
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: space-evenly;
`,S=l.label`
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
`,C=l.input`
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
`,w=e=>e.sceneMetadata,T=e=>{let t=e.trim();if(!t)return null;let n=Number(t);return Number.isFinite(n)?String(n):null},E=(e,t)=>{if(!e)return``;let n=e.metadata?.[t];return n==null?``:String(n)};m.createRoot(document.getElementById(`root`)).render((0,g.jsx)(h.StrictMode,{children:(0,g.jsx)(d,{children:(0,g.jsx)(()=>{let[t,n]=(0,h.useState)({sceneMetadata:{},roomMetadata:{}}),[i,a]=(0,h.useState)(null),[o,s]=(0,h.useState)(``),[l,u]=(0,h.useState)(null),[d,m]=(0,h.useState)(``),[D,O]=(0,h.useState)(``),k=(0,h.useMemo)(()=>w(t),[t]),A=(0,h.useMemo)(()=>i||v,[i]),j=(0,h.useMemo)(()=>{let e=k[f.HP_CURRENT_BID];return typeof e==`string`&&e.trim().length>0?e:p.CURRENT_HP},[k]),M=(0,h.useMemo)(()=>{let e=k[f.HP_MAX_BID];return typeof e==`string`&&e.trim().length>0?e:p.MAX_HP},[k]),N=`${e.EXTENSIONID}/${j}`,P=`${e.EXTENSIONID}/${M}`;(0,h.useEffect)(()=>{let e=!0,t=async t=>{let n=t[_.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&a(null);return}let{data:r,error:i}=await c.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(i){e&&a(null);return}let o=Array.isArray(r)?r[0]:r;if(!o||typeof o!=`object`){e&&a(null);return}let s=o;if(typeof s.theme_primary!=`string`||typeof s.theme_offset!=`string`||typeof s.theme_background!=`string`||typeof s.theme_border!=`string`){e&&a(null);return}e&&a({primary:s.theme_primary,offset:s.theme_offset,background:s.theme_background,border:s.theme_border,background_url:typeof s.background_url==`string`?s.background_url:``})},i=async t=>{let n=t?.[0]||``;if(!n){if(!e)return;s(``),u(null);return}let i=await r.scene.items.getItems(t||[]),a=i.find(e=>e.id===n)||i[0]||null;e&&(s(n),u(a))};(async()=>{let[a,o,s]=await Promise.all([r.scene.getMetadata(),r.room.getMetadata(),r.player.getSelection()]);e&&(n({sceneMetadata:a,roomMetadata:o}),await t(o),await i(s))})();let l=r.scene.onMetadataChange(t=>{e&&n(e=>({...e,sceneMetadata:t}))}),d=r.room.onMetadataChange(r=>{e&&(n(e=>({...e,roomMetadata:r})),t(r))}),f=r.scene.items.onChange(t=>{!e||!o||u(t.find(e=>e.id===o)||null)}),p=r.player.onChange(e=>{i(e.selection)});return()=>{e=!1,l(),d(),f(),p()}},[o]),(0,h.useEffect)(()=>{m(E(l,N)),O(E(l,P))},[l,N,P]);let F=async(t,n)=>{if(!l)return;let i=T(n);if(i===null){let n=E(l,`${e.EXTENSIONID}/${t}`);t===j?m(n):O(n);return}await r.scene.items.updateItems([l],n=>{let r=n[0];r&&(r.metadata[`${e.EXTENSIONID}/${t}`]=i)})},I=!!l;return(0,g.jsx)(y,{$theme:A,children:(0,g.jsxs)(x,{children:[(0,g.jsxs)(b,{children:[(0,g.jsx)(S,{$theme:A,htmlFor:`forge-context-health`,children:`Health`}),(0,g.jsx)(C,{$theme:A,id:`forge-context-health`,type:`number`,value:d,disabled:!I,onChange:e=>m(e.target.value),onBlur:()=>{F(j,d)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]}),(0,g.jsxs)(b,{children:[(0,g.jsx)(S,{$theme:A,htmlFor:`forge-context-max-health`,children:`Max Health`}),(0,g.jsx)(C,{$theme:A,id:`forge-context-max-health`,type:`number`,value:D,disabled:!I,onChange:e=>O(e.target.value),onBlur:()=>{F(M,D)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]})]})})},{})})}));