import{l as e}from"./tslib.es6-C783ynKN.js";import{n as t,t as n}from"./PluginGateComponent-BdpHo2nK.js";import{S as r,_ as i,f as a,p as o,t as s}from"./styled-components.browser.esm-UVFsQtUm.js";import"./react-dom-BkVOKHoH.js";import{n as c,t as l}from"./Constants-vXYz8c6e.js";import"./MetadataKeys-DpE2-j4V.js";import{a as u,n as d,o as f,r as p,t as m}from"./hpAttributeMapping-CbdVshDZ.js";import{a as h}from"./supabaseClient-CdceIqu0.js";import{i as g}from"./defaultgamesystem-BhmBTadj.js";var _=e(t(),1),v=r(),y=o(),b={SNAPSHOT_PUBLIC_ID:`${c.EXTENSIONID}/SnapshotPublicId`},x={primary:g.theme_primary,offset:g.theme_offset,background:g.theme_background,border:g.theme_border,background_url:g.background_url},S=s.div`
  width: 100%;
  height: 100%;
  min-height: 50px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background: ${e=>a(e.$theme.background,.3)};
`,C=s.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
`,w=s.div`
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: space-evenly;
`,T=s.label`
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
`,E=s.input`
  width: 80px;
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 13px;
  box-sizing: border-box;
  color: ${e=>e.$theme.primary};
  background: ${e=>a(e.$theme.background,.7)};

  &:focus {
    outline: none;
    border-color: ${e=>e.$theme.offset};
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`,D=e=>e.roomMetadata,O=e=>{let t=e.trim();if(!t)return null;let n=Number(t);return Number.isFinite(n)?String(n):null},k=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},A=(e,t,n,r)=>{if(!e)return``;let i=f(e.metadata,t,n,r);return i===null?``:String(i)};_.createRoot(document.getElementById(`root`)).render((0,y.jsx)(v.StrictMode,{children:(0,y.jsx)(n,{children:(0,y.jsx)(()=>{let[e,t]=(0,v.useState)({sceneMetadata:{},roomMetadata:{}}),[n,r]=(0,v.useState)(null),[a,o]=(0,v.useState)(g.attributes),[s,c]=(0,v.useState)(``),[l,_]=(0,v.useState)(null),[j,M]=(0,v.useState)(``),[N,P]=(0,v.useState)(``),F=(0,v.useMemo)(()=>D(e),[e]),I=(0,v.useMemo)(()=>n||x,[n]),{currentHpBid:L,maxHpBid:R}=(0,v.useMemo)(()=>p(F,a),[F,a]);(0,v.useEffect)(()=>{let e=!0,n=async t=>{let n=t[b.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(r(null),o(g.attributes));return}let{data:i,error:a}=await h.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(a){e&&(r(null),o(g.attributes));return}let s=Array.isArray(i)?i[0]:i;if(!s||typeof s!=`object`){e&&(r(null),o(g.attributes));return}let c=s,l=k(c.attributes);if(typeof c.theme_primary!=`string`||typeof c.theme_offset!=`string`||typeof c.theme_background!=`string`||typeof c.theme_border!=`string`||!Array.isArray(l)){e&&(r(null),o(g.attributes));return}e&&(r({primary:c.theme_primary,offset:c.theme_offset,background:c.theme_background,border:c.theme_border,background_url:typeof c.background_url==`string`?c.background_url:``}),o(l))},a=async t=>{let n=t?.[0]||``;if(!n){if(!e)return;c(``),_(null);return}let r=await i.scene.items.getItems(t||[]),a=r.find(e=>e.id===n)||r[0]||null;e&&(c(n),_(a))};(async()=>{let[r,o,s]=await Promise.all([i.scene.getMetadata(),i.room.getMetadata(),i.player.getSelection()]);e&&(t({sceneMetadata:r,roomMetadata:o}),await n(o),await a(s))})();let l=i.scene.onMetadataChange(n=>{e&&t(e=>({...e,sceneMetadata:n}))}),u=i.room.onMetadataChange(r=>{e&&(t(e=>({...e,roomMetadata:r})),n(r))}),d=i.scene.items.onChange(t=>{!e||!s||_(t.find(e=>e.id===s)||null)}),f=i.player.onChange(e=>{a(e.selection)});return()=>{e=!1,l(),u(),d(),f()}},[s]),(0,v.useEffect)(()=>{M(A(l,L,a,`current`)),P(A(l,R,a,`max`))},[l,L,R,a]);let z=async(e,t,n)=>{if(!l)return;let r=O(t);if(r===null){let t=A(l,e,a,n);e===L?M(t):P(t);return}await i.scene.items.updateItems([l],t=>{let i=t[0];if(!i)return;let o=d(a,e),s=u(e),c=n===`current`?`max`:`current`,l=f(i.metadata,e,a,c);i.metadata[s]=m(i.metadata[s],o,n,Number(r),l)})},B=!!l;return(0,y.jsx)(S,{$theme:I,children:(0,y.jsxs)(w,{children:[(0,y.jsxs)(C,{children:[(0,y.jsx)(T,{$theme:I,htmlFor:`forge-context-health`,children:`Health`}),(0,y.jsx)(E,{$theme:I,id:`forge-context-health`,type:`number`,value:j,disabled:!B,onChange:e=>M(e.target.value),onBlur:()=>{z(L,j,`current`)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]}),(0,y.jsxs)(C,{children:[(0,y.jsx)(T,{$theme:I,htmlFor:`forge-context-max-health`,children:`Max Health`}),(0,y.jsx)(E,{$theme:I,id:`forge-context-max-health`,type:`number`,value:N,disabled:!B,onChange:e=>P(e.target.value),onBlur:()=>{z(R,N,`max`)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]})]})})},{})})}));