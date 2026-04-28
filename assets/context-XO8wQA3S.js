import{C as e,F as t,N as n,O as r,R as i,S as a,T as o,_ as s,o as c,s as l,t as u,w as d}from"./defaultgamesystem-CWetXqo_.js";import{a as f,n as p,o as m,r as h,t as g}from"./hpAttributeMapping-hMS1vsob.js";var _=i(n(),1),v=t(),y=o(),b={SNAPSHOT_PUBLIC_ID:`${e.EXTENSIONID}/SnapshotPublicId`},x={primary:u.theme_primary,offset:u.theme_offset,background:u.theme_background,border:u.theme_border,background_url:u.background_url},S=l.div`
  width: 100%;
  height: 100%;
  min-height: 50px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 6px;
  background: ${e=>s(e.$theme.background,.3)};
`,C=l.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
`,w=l.div`
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: space-evenly;
`,T=l.label`
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
`,E=l.input`
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
`,D=e=>e.roomMetadata,O=e=>{let t=e.trim();if(!t)return null;let n=Number(t);return Number.isFinite(n)?String(n):null},k=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},A=(e,t,n,r)=>{if(!e)return``;let i=m(e.metadata,t,n,r);return i===null?``:String(i)};_.createRoot(document.getElementById(`root`)).render((0,y.jsx)(v.StrictMode,{children:(0,y.jsx)(d,{children:(0,y.jsx)(()=>{let[e,t]=(0,v.useState)({sceneMetadata:{},roomMetadata:{}}),[n,i]=(0,v.useState)(null),[a,o]=(0,v.useState)(u.attributes),[s,l]=(0,v.useState)(``),[d,_]=(0,v.useState)(null),[j,M]=(0,v.useState)(``),[N,P]=(0,v.useState)(``),F=(0,v.useMemo)(()=>D(e),[e]),I=(0,v.useMemo)(()=>n||x,[n]),{currentHpBid:L,maxHpBid:R}=(0,v.useMemo)(()=>h(F,a),[F,a]);(0,v.useEffect)(()=>{let e=!0,n=async t=>{let n=t[b.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(i(null),o(u.attributes));return}let{data:r,error:a}=await c.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(a){e&&(i(null),o(u.attributes));return}let s=Array.isArray(r)?r[0]:r;if(!s||typeof s!=`object`){e&&(i(null),o(u.attributes));return}let l=s,d=k(l.attributes);if(typeof l.theme_primary!=`string`||typeof l.theme_offset!=`string`||typeof l.theme_background!=`string`||typeof l.theme_border!=`string`||!Array.isArray(d)){e&&(i(null),o(u.attributes));return}e&&(i({primary:l.theme_primary,offset:l.theme_offset,background:l.theme_background,border:l.theme_border,background_url:typeof l.background_url==`string`?l.background_url:``}),o(d))},a=async t=>{let n=t?.[0]||``;if(!n){if(!e)return;l(``),_(null);return}let i=await r.scene.items.getItems(t||[]),a=i.find(e=>e.id===n)||i[0]||null;e&&(l(n),_(a))};(async()=>{let[i,o,s]=await Promise.all([r.scene.getMetadata(),r.room.getMetadata(),r.player.getSelection()]);e&&(t({sceneMetadata:i,roomMetadata:o}),await n(o),await a(s))})();let d=r.scene.onMetadataChange(n=>{e&&t(e=>({...e,sceneMetadata:n}))}),f=r.room.onMetadataChange(r=>{e&&(t(e=>({...e,roomMetadata:r})),n(r))}),p=r.scene.items.onChange(t=>{!e||!s||_(t.find(e=>e.id===s)||null)}),m=r.player.onChange(e=>{a(e.selection)});return()=>{e=!1,d(),f(),p(),m()}},[s]),(0,v.useEffect)(()=>{M(A(d,L,a,`current`)),P(A(d,R,a,`max`))},[d,L,R,a]);let z=async(e,t,n)=>{if(!d)return;let i=O(t);if(i===null){let t=A(d,e,a,n);e===L?M(t):P(t);return}await r.scene.items.updateItems([d],t=>{let r=t[0];if(!r)return;let o=p(a,e),s=f(e),c=n===`current`?`max`:`current`,l=m(r.metadata,e,a,c);r.metadata[s]=g(r.metadata[s],o,n,Number(i),l)})},B=!!d;return(0,y.jsx)(S,{$theme:I,children:(0,y.jsxs)(w,{children:[(0,y.jsxs)(C,{children:[(0,y.jsx)(T,{$theme:I,htmlFor:`forge-context-health`,children:`Health`}),(0,y.jsx)(E,{$theme:I,id:`forge-context-health`,type:`number`,value:j,disabled:!B,onChange:e=>M(e.target.value),onBlur:()=>{z(L,j,`current`)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]}),(0,y.jsxs)(C,{children:[(0,y.jsx)(T,{$theme:I,htmlFor:`forge-context-max-health`,children:`Max Health`}),(0,y.jsx)(E,{$theme:I,id:`forge-context-max-health`,type:`number`,value:N,disabled:!B,onChange:e=>P(e.target.value),onBlur:()=>{z(R,N,`max`)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}})]})]})})},{})})}));