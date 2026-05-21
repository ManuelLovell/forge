import{D as e,M as t,S as n,_ as r,k as i,o as a,s as o,t as s,v as c,y as l}from"./defaultgamesystem-wC8q2zZ8.js";import{a as u,m as d,n as f,o as p,p as m,r as h,t as g}from"./hpAttributeMapping-IzAaYiC1.js";var _=t(e(),1),v=i(),y=l(),b={SNAPSHOT_PUBLIC_ID:`${d.EXTENSIONID}/SnapshotPublicId`},x={primary:s.theme_primary,offset:s.theme_offset,background:s.theme_background,border:s.theme_border,background_url:s.background_url},S=o.div`
  width: 100%;
  height: 100%;
  min-height: 50px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background: ${e=>r(e.$theme.background,.3)};
`,C=o.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
`,w=o.div`
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: space-evenly;
`,T=o.label`
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
`,E=o.input`
  width: 80px;
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 13px;
  box-sizing: border-box;
  color: ${e=>e.$theme.primary};
  background: ${e=>r(e.$theme.background,.7)};

  &:focus {
    outline: none;
    border-color: ${e=>e.$theme.offset};
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`,D=e=>e.roomMetadata,O=e=>{let t=e.trim();if(!t)return null;let n=Number(t);return Number.isFinite(n)?String(n):null},k=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},A=(e,t,n,r)=>{if(!e)return``;let i=p(e.metadata,t,n,r);return i===null?``:String(i)};_.createRoot(document.getElementById(`root`)).render((0,y.jsx)(v.StrictMode,{children:(0,y.jsx)(c,{children:(0,y.jsx)(()=>{let[e,t]=(0,v.useState)({sceneMetadata:{},roomMetadata:{}}),[r,i]=(0,v.useState)(null),[o,c]=(0,v.useState)(s.attributes),[l,d]=(0,v.useState)(``),[m,_]=(0,v.useState)(null),[j,M]=(0,v.useState)(``),[N,P]=(0,v.useState)(``),F=(0,v.useMemo)(()=>D(e),[e]),I=(0,v.useMemo)(()=>r||x,[r]),{currentHpBid:L,maxHpBid:R}=(0,v.useMemo)(()=>h(F,o),[F,o]);(0,v.useEffect)(()=>{let e=!0,r=async t=>{let n=t[b.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(i(null),c(s.attributes));return}let{data:r,error:o}=await a.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(o){e&&(i(null),c(s.attributes));return}let l=Array.isArray(r)?r[0]:r;if(!l||typeof l!=`object`){e&&(i(null),c(s.attributes));return}let u=l,d=k(u.attributes);if(typeof u.theme_primary!=`string`||typeof u.theme_offset!=`string`||typeof u.theme_background!=`string`||typeof u.theme_border!=`string`||!Array.isArray(d)){e&&(i(null),c(s.attributes));return}e&&(i({primary:u.theme_primary,offset:u.theme_offset,background:u.theme_background,border:u.theme_border,background_url:typeof u.background_url==`string`?u.background_url:``}),c(d))},o=async t=>{let r=t?.[0]||``;if(!r){if(!e)return;d(``),_(null);return}let i=await n.scene.items.getItems(t||[]),a=i.find(e=>e.id===r)||i[0]||null;e&&(d(r),_(a))};(async()=>{let[i,a,s]=await Promise.all([n.scene.getMetadata(),n.room.getMetadata(),n.player.getSelection()]);e&&(t({sceneMetadata:i,roomMetadata:a}),await r(a),await o(s))})();let u=n.scene.onMetadataChange(n=>{e&&t(e=>({...e,sceneMetadata:n}))}),f=n.room.onMetadataChange(n=>{e&&(t(e=>({...e,roomMetadata:n})),r(n))}),p=n.scene.items.onChange(t=>{!e||!l||_(t.find(e=>e.id===l)||null)}),m=n.player.onChange(e=>{o(e.selection)});return()=>{e=!1,u(),f(),p(),m()}},[l]),(0,v.useEffect)(()=>{M(A(m,L,o,`current`)),P(A(m,R,o,`max`))},[m,L,R,o]);let z=async(e,t,r)=>{if(!m)return;let i=O(t);if(i===null){let t=A(m,e,o,r);e===L?M(t):P(t);return}await n.scene.items.updateItems([m],t=>{let n=t[0];if(!n)return;let a=f(o,e),s=u(e),c=r===`current`?`max`:`current`,l=p(n.metadata,e,o,c);n.metadata[s]=g(n.metadata[s],a,r,Number(i),l)})},B=!!m;return(0,y.jsx)(S,{$theme:I,children:(0,y.jsxs)(w,{children:[(0,y.jsxs)(C,{children:[(0,y.jsx)(T,{$theme:I,htmlFor:`forge-context-health`,children:`Health`}),(0,y.jsx)(E,{$theme:I,id:`forge-context-health`,type:`number`,value:j,disabled:!B,onChange:e=>M(e.target.value),onBlur:()=>{z(L,j,`current`)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]}),(0,y.jsxs)(C,{children:[(0,y.jsx)(T,{$theme:I,htmlFor:`forge-context-max-health`,children:`Max Health`}),(0,y.jsx)(E,{$theme:I,id:`forge-context-max-health`,type:`number`,value:N,disabled:!B,onChange:e=>P(e.target.value),onBlur:()=>{z(R,N,`max`)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]})]})})},{})})}));