import{A as e,C as t,F as n,N as r,O as i,R as a,S as o,T as s,_ as c,b as l,o as u,s as d,t as f,w as p,x as ee,y as m}from"./defaultgamesystem-Dpv8RqCc.js";import{n as h,t as g}from"./MockData-DTzuSraw.js";/* empty css               */var _=a(r(),1),v=n(),y=s(),te={SNAPSHOT_PUBLIC_ID:`${t.EXTENSIONID}/SnapshotPublicId`},b={primary:f.theme_primary,offset:f.theme_offset,background:f.theme_background,border:f.theme_border,background_url:f.background_url},x=50,ne=75,re=120,S=8,C=190,w=90,T=120,E=150,ie=1024,ae=6,D=d.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  pointer-events: none;
`,oe=d.div`
  position: absolute;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: ${e=>`calc(100vw - ${e.$inset*2}px)`};
  max-height: ${e=>`calc(100vh - ${e.$inset*2}px)`};
  ${e=>e.$orientation===`top`?`top: ${e.$inset}px; left: 50%; transform: translateX(-50%);`:e.$orientation===`left`?`left: ${e.$inset}px; top: 50%; transform: translateY(-50%);`:e.$orientation===`right`?`right: ${e.$inset}px; top: 50%; transform: translateY(-50%);`:`bottom: ${e.$inset}px; left: 50%; transform: translateX(-50%);`}
`,se=d.div`
  width: ${e=>`${e.$scaledWidth}px`};
  height: ${e=>`${e.$scaledHeight}px`};
  overflow: hidden;
`,ce=d.div`
  width: ${e=>`${e.$contentWidth}px`};
  height: ${e=>`${e.$contentHeight}px`};
  transform: ${e=>`scale(${e.$scale})`};
  transform-origin: top left;
`,le=d.div`
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${T}px`:`auto`};
  display: flex;
  gap: ${S}px;
  ${e=>e.$orientation===`left`||e.$orientation===`right`?`flex-direction: column;`:`flex-direction: row;`}
`,ue=d.div`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 10px;
  background: ${e=>c(e.$theme.background,.58)};
  position: relative;
  display: flex;
  gap: ${e=>(e.$orientation===`left`||e.$orientation,`0`)};
  align-items: ${e=>e.$orientation===`left`||e.$orientation===`right`?`stretch`:`center`};
  flex-direction: ${e=>e.$orientation===`left`||e.$orientation===`right`?`column`:`row`};
  padding: 0;
  box-sizing: border-box;
  backdrop-filter: blur(8px);
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${T}px`:`${C}px`};
  min-width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${T}px`:`${C}px`};
  height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${E}px`:`${w}px`};
  min-height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${E}px`:`${w}px`};
  overflow: hidden;
`,de=d.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  z-index: 12;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      112deg,
      transparent 0 45%,
      ${e=>c(e.$theme.offset,.14)} 45% 50%,
      ${e=>c(e.$theme.offset,.38)} 50% 54%,
      ${e=>c(e.$theme.primary,.18)} 54% 58%,
      ${e=>c(e.$theme.offset,.14)} 58% 62%,
      transparent 62% 100%
    );
    background-size: 220% 100%;
    background-position: 125% 0;
    animation: currentTurnSheenSweep 2.5s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow:
      inset 0 0 0 1px ${e=>c(e.$theme.offset,.45)},
      0 0 10px ${e=>c(e.$theme.offset,.28)};
    animation: currentTurnSheenPulse 1.8s ease-in-out infinite;
  }

  @keyframes currentTurnSheenSweep {
    0% {
      background-position: 125% 0;
    }
    55% {
      background-position: -130% 0;
    }
    100% {
      background-position: -130% 0;
    }
  }

  @keyframes currentTurnSheenPulse {
    0%,
    100% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
  }
`,fe=d.div`
  position: ${e=>e.$orientation===`left`||e.$orientation===`right`?`absolute`:`relative`};
  inset: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`auto`};
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`50%`};
  height: 100%;
  min-width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`50%`};
  min-height: 100%;
  z-index: 1;
  overflow: hidden;
`,pe=d.img`
  width: 100%;
  height: 100%;
  min-width: 100%;
  position: absolute;
  left: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`-10px`};
  top: ${e=>e.$orientation===`left`||e.$orientation===`right`?`-10px`:`0`};
  border-radius: ${e=>e.$orientation===`left`||e.$orientation===`right`?`6px`:`0`};
  object-fit: cover;
  border: none;
  background: ${e=>c(e.$theme.background,.7)};
  -webkit-mask-image: ${e=>e.$orientation===`left`||e.$orientation===`right`?`none`:`linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)`};
  mask-image: ${e=>e.$orientation===`left`||e.$orientation===`right`?`none`:`linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)`};
`,me=d.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$orientation===`left`||e.$orientation===`right`?`4px`:`3px`};
  min-width: 0;
  height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`50%`:`100%`};
  min-height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`50%`:`0`};
  justify-content: center;
  align-items: ${e=>e.$orientation===`left`||e.$orientation===`right`?`center`:`stretch`};
  text-align: ${e=>e.$orientation===`left`||e.$orientation===`right`?`center`:`left`};
  background: ${e=>c(e.$theme.background,.8)};
  border-radius: 6px;
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`75%`};
  max-width: 100%;
  margin-left: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`-15%`};
  margin-top: ${e=>e.$orientation===`left`||e.$orientation===`right`?`auto`:`0`};
  padding: 8px;
  box-sizing: border-box;
  z-index: 2;
  overflow: hidden;
`,he=d.div`
  color: ${e=>e.$theme.primary};
  font-size: 13px;
  font-weight: 700;
  line-height: 1.1;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ge=d.div`
  width: 100%;
  height: 10px;
  border-radius: 999px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.72)};
  overflow: hidden;
`,_e=d.div`
  width: ${e=>`${e.$percent}%`};
  height: 100%;
  background: ${e=>{let t=Math.max(0,Math.min(120,e.$percent*1.2));return`linear-gradient(90deg, hsl(${t} 78% 35%) 0%, hsl(${t} 82% 50%) 100%)`}};
  transition: width 0.2s ease, background 0.2s ease;
`,ve=d.div`
  font-size: 10px;
  color: ${e=>c(e.$theme.primary,.9)};
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,O=d.div`
  display: flex;
  gap: 4px;
  width: 100%;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
`,k=d.div`
  border: 1px solid ${e=>e.$theme.border};
  border-radius: 999px;
  background: ${e=>c(e.$theme.background,.6)};
  color: ${e=>e.$theme.primary};
  font-size: 10px;
  padding: 1px 6px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,A=d.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$theme.primary};
  font-size: 14px;
`,j=(e,t,n)=>Math.max(t,Math.min(n,e)),M=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},N=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},P=e=>e.roomMetadata,F=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||h.CURRENT_HP,maxHpBid:n?.attr_bid||h.MAX_HP}},ye=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,be=(e,t)=>{let n=t.toLowerCase();if(n===`bool`)return e===!0?`Yes`:e===!1?`No`:`-`;if(n===`resource`){if(e&&typeof e==`object`&&!Array.isArray(e)){let t=Number(e.current),n=Number(e.max);if(Number.isFinite(t)&&Number.isFinite(n))return`${Math.trunc(t)}/${Math.trunc(n)}`}return`-`}return e==null||e===``?`-`:String(e)},I=()=>{let[t,n]=(0,v.useState)({sceneMetadata:{},roomMetadata:{},items:[]}),[r,a]=(0,v.useState)(!1),[o,s]=(0,v.useState)(()=>({width:typeof window<`u`?window.innerWidth:1920,height:typeof window<`u`?window.innerHeight:1080})),[c,d]=(0,v.useState)(``),[p,h]=(0,v.useState)(0),[_,I]=(0,v.useState)(null),[R,z]=(0,v.useState)(null),B=e=>e.filter(e=>e.metadata?.[l.BOSS_MODE]===!0).length;(0,v.useEffect)(()=>{let e=!0,t=async t=>{let n=t[te.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(I(null),z(null));return}let{data:r,error:i}=await u.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(i){e&&(I(null),z(null));return}let a=Array.isArray(r)?r[0]:r;if(!a||typeof a!=`object`){e&&(I(null),z(null));return}let o=a,s=M(o.attributes);if(typeof o.theme_primary!=`string`||typeof o.theme_offset!=`string`||typeof o.theme_background!=`string`||typeof o.theme_border!=`string`||!Array.isArray(s)){e&&(I(null),z(null));return}e&&(I({primary:o.theme_primary,offset:o.theme_offset,background:o.theme_background,border:o.theme_border,background_url:typeof o.background_url==`string`?o.background_url:``}),z(s))};(async()=>{let[r,o,s,c]=await Promise.all([i.scene.getMetadata(),i.room.getMetadata(),i.scene.items.getItems(),i.player.getId()]);e&&(n({sceneMetadata:r,roomMetadata:o,items:s}),d(c),h(B(s)),await t(o),a(!0))})();let r=i.scene.onMetadataChange(t=>{e&&n(e=>({...e,sceneMetadata:t}))}),o=i.room.onMetadataChange(r=>{e&&(n(e=>({...e,roomMetadata:r})),t(r))}),s=i.scene.items.onChange(t=>{e&&(n(e=>({...e,items:t})),h(B(t)))}),c=i.player.onChange(t=>{e&&d(t.id||``)});return()=>{e=!1,r(),o(),s(),c()}},[]),(0,v.useEffect)(()=>{let e=()=>{s({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let V=(0,v.useMemo)(()=>_||b,[_]),H=(0,v.useMemo)(()=>R||f.attributes,[R]),U=(0,v.useMemo)(()=>P(t),[t]),W=(0,v.useMemo)(()=>{let e=U[ee(m.PARTY_HUD_ORIENTATION,c)]??U[m.PARTY_HUD_ORIENTATION];return ye(e)?e:`bottom`},[U,c]),G=U[m.PARTY_HUD_ATTR_ONE]||``,K=U[m.PARTY_HUD_ATTR_TWO]||``,xe=U[m.PARTY_HUD_SHOW_HP_BARS]!==void 0,Se=U[m.PARTY_HUD_SHOW_HP_NUMBERS]!==void 0,q=U[m.PARTY_HUD_SHOW_HP_BARS]===!0,Ce=U[m.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!q,J=!xe&&!Se,we=J?!0:q,Te=J?!1:Ce,Y=(0,v.useMemo)(()=>[G,K].filter((e,t,n)=>e&&n.indexOf(e)===t).map(e=>H.find(t=>t.attr_bid===e)||null).filter(e=>e!==null).filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`||t===`resource`||t===`enum`||t===`derived`}),[H,G,K]),{currentHpBid:Ee,maxHpBid:X}=(0,v.useMemo)(()=>{let e=F(H),t=U[m.HP_CURRENT_BID],n=U[m.HP_MAX_BID],r=new Set(H.map(e=>e.attr_bid));return{currentHpBid:t&&r.has(t)?t:e.currentHpBid,maxHpBid:n&&r.has(n)?n:e.maxHpBid}},[H,U]),Z=(0,v.useMemo)(()=>t.items.filter(e=>e.metadata?.[l.IN_PARTY]===!0).sort((e,t)=>{let n=String(L(e)),r=String(L(t));return n.localeCompare(r)}),[t.items]),De=(0,v.useMemo)(()=>{let e=t.sceneMetadata[m.CURRENT_TURN];return typeof e==`string`&&e.trim().length>0?e:null},[t.sceneMetadata]),Q=(0,v.useMemo)(()=>W===`top`?p>=2?re:p===1?ne:x:x,[p,W]),$=(0,v.useMemo)(()=>{let e=Math.max(1,Z.length),t=W===`left`||W===`right`,n=t?T:C,r=t?E:w,i=t?n:e*n+(e-1)*S,a=t?e*r+(e-1)*S:r,s=Math.max(1,o.width-Q*2),c=Math.max(1,o.height-Q*2),l=o.width>=ie&&Z.length>=ae,u=s/i,d=c/a,f=l?Math.min(1,u,d):1;return{contentWidth:i,contentHeight:a,scale:f,scaledWidth:Math.max(1,Math.floor(i*f)),scaledHeight:Math.max(1,Math.floor(a*f))}},[W,Z.length,o.height,o.width,Q]);return r?(0,y.jsx)(D,{$theme:V,children:(0,y.jsx)(oe,{$orientation:W,$inset:Q,children:Z.length===0?(0,y.jsx)(A,{$theme:V,children:`No party units found.`}):(0,y.jsx)(se,{$scaledWidth:$.scaledWidth,$scaledHeight:$.scaledHeight,children:(0,y.jsx)(ce,{$contentWidth:$.contentWidth,$contentHeight:$.contentHeight,$scale:$.scale,children:(0,y.jsx)(le,{$orientation:W,children:Z.map(t=>{let n=L(t),r=t.metadata?.[l.PORTRAIT_URL]||``,i=(e(t)?t.image.url:void 0)||`/logo.png`,a=r||i,o=t.metadata?.[`${g}/${Ee}`],s=t.metadata?.[`${g}/${X}`],c=N(o),u=N(s),d=c!==null&&u!==null&&u>0?j(c/u*100,0,100):0,f=t.id===De;return(0,y.jsxs)(ue,{$theme:V,$orientation:W,children:[(0,y.jsx)(fe,{$orientation:W,children:(0,y.jsx)(pe,{src:a,alt:n,$theme:V,$orientation:W})}),f&&(0,y.jsx)(de,{$theme:V}),(0,y.jsxs)(me,{$theme:V,$orientation:W,children:[(0,y.jsx)(he,{$theme:V,title:n,children:n}),we&&(0,y.jsx)(ge,{$theme:V,children:(0,y.jsx)(_e,{$percent:d})}),Te&&(0,y.jsxs)(ve,{$theme:V,children:[`HP: `,c===null?`-`:Math.trunc(c),` / `,u===null?`-`:Math.trunc(u)]}),Y.length>0&&(0,y.jsx)(O,{children:Y.map(e=>{let n=(e.attr_abbr||e.attr_name||e.attr_bid).trim(),r=t.metadata?.[`com.battle-system.forge/${e.attr_bid}`];return(0,y.jsxs)(k,{$theme:V,children:[n,`: `,be(r,String(e.attr_type||``))]},`${t.id}-${e.attr_bid}`)})})]})]},t.id)})})})})})}):(0,y.jsx)(D,{$theme:V})},L=e=>{let t=e.metadata?.[l.UNIT_NAME];return typeof t==`string`&&t.trim()?t.trim():typeof e.name==`string`&&e.name.trim()?e.name.trim():`Unknown`},R=I;_.createRoot(document.getElementById(`root`)).render((0,y.jsx)(v.StrictMode,{children:(0,y.jsx)(p,{children:(0,y.jsx)(R,{})})}));