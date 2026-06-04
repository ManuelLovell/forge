import{P as e,b as t,j as n,k as r,o as i,s as a,t as o,v as s,w as c,y as l}from"./defaultgamesystem-CLGH9eTD.js";import{_ as u,a as d,g as f,n as p,o as m,r as h,t as g}from"./hpAttributeMapping-CzMfhEfJ.js";var _=e(r(),1),v=n(),y=t(),b={SNAPSHOT_PUBLIC_ID:`${u.EXTENSIONID}/SnapshotPublicId`},x={primary:o.theme_primary,offset:o.theme_offset,background:o.theme_background,border:o.theme_border,background_url:o.background_url},S=a.div`
  width: 100%;
  height: 100%;
  min-height: 50px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background: ${e=>s(e.$theme.background,.3)};
`,C=a.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
`,w=a.div`
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: space-evenly;
`,T=a.label`
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
`,E=a.input`
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
`,D=e=>e.roomMetadata,O=e=>{let t=e.trim();if(!t)return null;let n=Number(t);return Number.isFinite(n)?String(n):null},k=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},A=(e,t,n,r)=>{if(!e)return``;let i=m(e.metadata,t,n,r);return i===null?``:String(i)};_.createRoot(document.getElementById(`root`)).render((0,y.jsx)(v.StrictMode,{children:(0,y.jsx)(l,{children:(0,y.jsx)(()=>{let[e,t]=(0,v.useState)({sceneMetadata:{},roomMetadata:{}}),[n,r]=(0,v.useState)(null),[a,s]=(0,v.useState)(o.attributes),[l,u]=(0,v.useState)(``),[f,_]=(0,v.useState)(null),[j,M]=(0,v.useState)(``),[N,P]=(0,v.useState)(``),F=(0,v.useMemo)(()=>D(e),[e]),I=(0,v.useMemo)(()=>n||x,[n]),{currentHpBid:L,maxHpBid:R}=(0,v.useMemo)(()=>h(F,a),[F,a]);(0,v.useEffect)(()=>{let e=!0,n=async t=>{let n=t[b.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(r(null),s(o.attributes));return}let{data:a,error:c}=await i.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(c){e&&(r(null),s(o.attributes));return}let l=Array.isArray(a)?a[0]:a;if(!l||typeof l!=`object`){e&&(r(null),s(o.attributes));return}let u=l,d=k(u.attributes);if(typeof u.theme_primary!=`string`||typeof u.theme_offset!=`string`||typeof u.theme_background!=`string`||typeof u.theme_border!=`string`||!Array.isArray(d)){e&&(r(null),s(o.attributes));return}e&&(r({primary:u.theme_primary,offset:u.theme_offset,background:u.theme_background,border:u.theme_border,background_url:typeof u.background_url==`string`?u.background_url:``}),s(d))},a=async t=>{let n=t?.[0]||``;if(!n){if(!e)return;u(``),_(null);return}let r=await c.scene.items.getItems(t||[]),i=r.find(e=>e.id===n)||r[0]||null;e&&(u(n),_(i))};(async()=>{let[r,i,o]=await Promise.all([c.scene.getMetadata(),c.room.getMetadata(),c.player.getSelection()]);e&&(t({sceneMetadata:r,roomMetadata:i}),await n(i),await a(o))})();let d=c.scene.onMetadataChange(n=>{e&&t(e=>({...e,sceneMetadata:n}))}),f=c.room.onMetadataChange(r=>{e&&(t(e=>({...e,roomMetadata:r})),n(r))}),p=c.scene.items.onChange(t=>{!e||!l||_(t.find(e=>e.id===l)||null)}),m=c.player.onChange(e=>{a(e.selection)});return()=>{e=!1,d(),f(),p(),m()}},[l]),(0,v.useEffect)(()=>{M(A(f,L,a,`current`)),P(A(f,R,a,`max`))},[f,L,R,a]);let z=async(e,t,n)=>{if(!f)return;let r=O(t);if(r===null){let t=A(f,e,a,n);e===L?M(t):P(t);return}await c.scene.items.updateItems([f],t=>{let i=t[0];if(!i)return;let o=p(a,e),s=d(e),c=n===`current`?`max`:`current`,l=m(i.metadata,e,a,c);i.metadata[s]=g(i.metadata[s],o,n,Number(r),l)})},B=!!f;return(0,y.jsx)(S,{$theme:I,children:(0,y.jsxs)(w,{children:[(0,y.jsxs)(C,{children:[(0,y.jsx)(T,{$theme:I,htmlFor:`forge-context-health`,children:`Health`}),(0,y.jsx)(E,{$theme:I,id:`forge-context-health`,type:`number`,value:j,disabled:!B,onChange:e=>M(e.target.value),onBlur:()=>{z(L,j,`current`)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]}),(0,y.jsxs)(C,{children:[(0,y.jsx)(T,{$theme:I,htmlFor:`forge-context-max-health`,children:`Max Health`}),(0,y.jsx)(E,{$theme:I,id:`forge-context-max-health`,type:`number`,value:N,disabled:!B,onChange:e=>P(e.target.value),onBlur:()=>{z(R,N,`max`)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]})]})})},{})})}));