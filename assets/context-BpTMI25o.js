import{_ as e,c as t}from"./tslib.es6-B50zIwoW.js";import{n,t as r}from"./PluginGateComponent-BqCn6KcS.js";import{f as i,m as a,p as o,t as s}from"./styled-components.browser.esm-DHy5LH3R.js";import"./react-dom-kWs4TVWh.js";import{r as c,t as l}from"./Constants-BX77kWGP.js";import"./MetadataKeys-B7ws-e14.js";import{a as u,n as d,o as f,r as p,t as m}from"./hpAttributeMapping-DAyO7AQ8.js";import{a as h}from"./supabaseClient-ByYw65z_.js";import{i as g}from"./defaultgamesystem-Bf6m7RzJ.js";var _=e(n(),1),v=a(),y=o(),b={SNAPSHOT_PUBLIC_ID:`${c.EXTENSIONID}/SnapshotPublicId`},x={primary:g.theme_primary,offset:g.theme_offset,background:g.theme_background,border:g.theme_border,background_url:g.background_url},S=s.div`
  width: 100%;
  height: 100%;
  min-height: 50px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background: ${e=>i(e.$theme.background,.3)};
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
  background: ${e=>i(e.$theme.background,.7)};

  &:focus {
    outline: none;
    border-color: ${e=>e.$theme.offset};
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`,D=e=>e.roomMetadata,O=e=>{let t=e.trim();if(!t)return null;let n=Number(t);return Number.isFinite(n)?String(n):null},k=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},A=(e,t,n,r)=>{if(!e)return``;let i=f(e.metadata,t,n,r);return i===null?``:String(i)};_.createRoot(document.getElementById(`root`)).render((0,y.jsx)(v.StrictMode,{children:(0,y.jsx)(r,{children:(0,y.jsx)(()=>{let[e,n]=(0,v.useState)({sceneMetadata:{},roomMetadata:{}}),[r,i]=(0,v.useState)(null),[a,o]=(0,v.useState)(g.attributes),[s,c]=(0,v.useState)(``),[l,_]=(0,v.useState)(null),[j,M]=(0,v.useState)(``),[N,P]=(0,v.useState)(``),F=(0,v.useMemo)(()=>D(e),[e]),I=(0,v.useMemo)(()=>r||x,[r]),{currentHpBid:L,maxHpBid:R}=(0,v.useMemo)(()=>p(F,a),[F,a]);(0,v.useEffect)(()=>{let e=!0,r=async t=>{let n=t[b.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(i(null),o(g.attributes));return}let{data:r,error:a}=await h.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(a){e&&(i(null),o(g.attributes));return}let s=Array.isArray(r)?r[0]:r;if(!s||typeof s!=`object`){e&&(i(null),o(g.attributes));return}let c=s,l=k(c.attributes);if(typeof c.theme_primary!=`string`||typeof c.theme_offset!=`string`||typeof c.theme_background!=`string`||typeof c.theme_border!=`string`||!Array.isArray(l)){e&&(i(null),o(g.attributes));return}e&&(i({primary:c.theme_primary,offset:c.theme_offset,background:c.theme_background,border:c.theme_border,background_url:typeof c.background_url==`string`?c.background_url:``}),o(l))},a=async n=>{let r=n?.[0]||``;if(!r){if(!e)return;c(``),_(null);return}let i=await t.scene.items.getItems(n||[]),a=i.find(e=>e.id===r)||i[0]||null;e&&(c(r),_(a))};(async()=>{let[i,o,s]=await Promise.all([t.scene.getMetadata(),t.room.getMetadata(),t.player.getSelection()]);e&&(n({sceneMetadata:i,roomMetadata:o}),await r(o),await a(s))})();let l=t.scene.onMetadataChange(t=>{e&&n(e=>({...e,sceneMetadata:t}))}),u=t.room.onMetadataChange(t=>{e&&(n(e=>({...e,roomMetadata:t})),r(t))}),d=t.scene.items.onChange(t=>{!e||!s||_(t.find(e=>e.id===s)||null)}),f=t.player.onChange(e=>{a(e.selection)});return()=>{e=!1,l(),u(),d(),f()}},[s]),(0,v.useEffect)(()=>{M(A(l,L,a,`current`)),P(A(l,R,a,`max`))},[l,L,R,a]);let z=async(e,n,r)=>{if(!l)return;let i=O(n);if(i===null){let t=A(l,e,a,r);e===L?M(t):P(t);return}await t.scene.items.updateItems([l],t=>{let n=t[0];if(!n)return;let o=d(a,e),s=u(e),c=r===`current`?`max`:`current`,l=f(n.metadata,e,a,c);n.metadata[s]=m(n.metadata[s],o,r,Number(i),l)})},B=!!l;return(0,y.jsx)(S,{$theme:I,children:(0,y.jsxs)(w,{children:[(0,y.jsxs)(C,{children:[(0,y.jsx)(T,{$theme:I,htmlFor:`forge-context-health`,children:`Health`}),(0,y.jsx)(E,{$theme:I,id:`forge-context-health`,type:`number`,value:j,disabled:!B,onChange:e=>M(e.target.value),onBlur:()=>{z(L,j,`current`)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]}),(0,y.jsxs)(C,{children:[(0,y.jsx)(T,{$theme:I,htmlFor:`forge-context-max-health`,children:`Max Health`}),(0,y.jsx)(E,{$theme:I,id:`forge-context-max-health`,type:`number`,value:N,disabled:!B,onChange:e=>P(e.target.value),onBlur:()=>{z(R,N,`max`)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]})]})})},{})})}));