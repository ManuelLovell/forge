import{A as e,C as t,F as n,N as r,O as i,R as a,S as o,T as s,_ as c,b as l,o as u,s as d,t as f,w as p,x as ee,y as m}from"./defaultgamesystem-CWetXqo_.js";import{n as h,t as g}from"./MockData-DTzuSraw.js";/* empty css               */var _=a(r(),1),v=n(),y=s(),te={SNAPSHOT_PUBLIC_ID:`${t.EXTENSIONID}/SnapshotPublicId`},b={primary:f.theme_primary,offset:f.theme_offset,background:f.theme_background,border:f.theme_border,background_url:f.background_url},x=50,ne=75,re=120,S=8,C=190,w=90,T=120,E=150,D=d.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  pointer-events: none;
`,ie=d.div`
  position: absolute;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: ${e=>`calc(100vw - ${e.$inset*2}px)`};
  max-height: ${e=>`calc(100vh - ${e.$inset*2}px)`};
  ${e=>e.$orientation===`top`?`top: ${e.$inset}px; left: 50%; transform: translateX(-50%);`:e.$orientation===`left`?`left: ${e.$inset}px; top: 50%; transform: translateY(-50%);`:e.$orientation===`right`?`right: ${e.$inset}px; top: 50%; transform: translateY(-50%);`:`bottom: ${e.$inset}px; left: 50%; transform: translateX(-50%);`}
`,ae=d.div`
  width: ${e=>`${e.$scaledWidth}px`};
  height: ${e=>`${e.$scaledHeight}px`};
  overflow: hidden;
`,oe=d.div`
  width: ${e=>`${e.$contentWidth}px`};
  height: ${e=>`${e.$contentHeight}px`};
  transform: ${e=>`scale(${e.$scale})`};
  transform-origin: top left;
`,se=d.div`
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${T}px`:`auto`};
  display: flex;
  gap: ${S}px;
  ${e=>e.$orientation===`left`||e.$orientation===`right`?`flex-direction: column;`:`flex-direction: row;`}
`,ce=d.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 6;

  path {
    fill: none;
    stroke: ${e=>c(e.$theme.border,.98)};
    stroke-width: 5;
    stroke-linejoin: miter;
    stroke-linecap: square;
    vector-effect: non-scaling-stroke;
    filter:
      drop-shadow(0 0 3px ${e=>c(e.$theme.border,.48)})
      drop-shadow(0 0 1px ${e=>c(e.$theme.primary,.3)});
  }
`,le=d.div`
  border: ${e=>e.$borderStyle===`plate`?`1px solid ${c(e.$theme.border,.7)}`:e.$borderStyle===`tech`?`1px solid ${c(e.$theme.offset,.65)}`:`2px solid ${e.$theme.border}`};
  border-radius: ${e=>e.$borderStyle===`tech`?`0`:`10px`};
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

  ${e=>e.$borderStyle===`plate`&&`
    box-shadow:
      inset 0 0 0 1px ${c(e.$theme.offset,.28)},
      0 0 0 1px ${c(e.$theme.border,.3)};

    &::before {
      content: '';
      position: absolute;
      inset: 2px;
      border-radius: 8px;
      pointer-events: none;
      z-index: 5;
      background:
        linear-gradient(90deg, ${c(e.$theme.offset,.7)} 0 24px, transparent 24px calc(100% - 24px), ${c(e.$theme.offset,.7)} calc(100% - 24px) 100%),
        linear-gradient(0deg, ${c(e.$theme.offset,.7)} 0 24px, transparent 24px calc(100% - 24px), ${c(e.$theme.offset,.7)} calc(100% - 24px) 100%);
      mask:
        linear-gradient(#000 0 0) content-box,
        linear-gradient(#000 0 0);
      -webkit-mask:
        linear-gradient(#000 0 0) content-box,
        linear-gradient(#000 0 0);
      padding: 1px;
      mask-composite: exclude;
      -webkit-mask-composite: xor;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      z-index: 4;
      background:
        radial-gradient(circle at 12px 12px, ${c(e.$theme.primary,.42)} 0 2px, transparent 2px),
        radial-gradient(circle at calc(100% - 12px) 12px, ${c(e.$theme.primary,.42)} 0 2px, transparent 2px),
        radial-gradient(circle at 12px calc(100% - 12px), ${c(e.$theme.primary,.42)} 0 2px, transparent 2px),
        radial-gradient(circle at calc(100% - 12px) calc(100% - 12px), ${c(e.$theme.primary,.42)} 0 2px, transparent 2px);
    }
  `}

  ${e=>e.$borderStyle===`tech`&&`
    border: none;
    box-shadow: none;
    clip-path: polygon(
      10px 0,
      calc(62% - 8px) 0,
      62% 8px,
      100% 8px,
      100% 100%,
      calc(36% + 8px) 100%,
      36% calc(100% - 8px),
      0 calc(100% - 8px),
      0 10px
    );

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      background: ${c(e.$theme.offset,.9)};
      clip-path: polygon(
        10px 0,
        calc(62% - 8px) 0,
        62% 8px,
        100% 8px,
        100% 100%,
        calc(36% + 8px) 100%,
        36% calc(100% - 8px),
        0 calc(100% - 8px),
        0 10px
      );
    }

    &::after {
      content: '';
      position: absolute;
      inset: 5px;
      pointer-events: none;
      z-index: 0;
      background:
        repeating-linear-gradient(90deg,
          transparent 0 18px,
          ${c(e.$theme.primary,.95)} 18px 19px,
          transparent 19px 44px
        ),
        repeating-linear-gradient(0deg,
          transparent 0 16px,
          ${c(e.$theme.primary,.95)} 16px 17px,
          transparent 17px 40px
        ),
        linear-gradient(135deg,
          transparent 0 58%,
          ${c(e.$theme.primary,.95)} 58% 59%,
          transparent 59% 100%
        ),
        linear-gradient(180deg, ${c(e.$theme.background,.8)} 0%, ${c(e.$theme.background,.64)} 100%);
      clip-path: polygon(
        8px 0,
        calc(62% - 8px) 0,
        62% 8px,
        100% 8px,
        100% 100%,
        calc(36% + 8px) 100%,
        36% calc(100% - 8px),
        0 calc(100% - 8px),
        0 8px
      );
    }
  `}
`,ue=d.div`
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
      background-position: -110% 0;
    }
    100% {
      background-position: -110% 0;
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
`,de=d.div`
  position: ${e=>e.$orientation===`left`||e.$orientation===`right`?`absolute`:`relative`};
  inset: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`auto`};
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`50%`};
  height: 100%;
  min-width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`50%`};
  min-height: 100%;
  z-index: 1;
  overflow: hidden;
`,fe=d.img`
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
`,pe=d.div`
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
`,me=d.div`
  color: ${e=>e.$theme.primary};
  font-size: 13px;
  font-weight: 700;
  line-height: 1.1;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,he=d.div`
  width: 100%;
  height: 10px;
  border-radius: 999px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.72)};
  overflow: hidden;
`,ge=d.div`
  width: ${e=>`${e.$percent}%`};
  height: 100%;
  background: ${e=>{let t=Math.max(0,Math.min(120,e.$percent*1.2));return`linear-gradient(90deg, hsl(${t} 78% 35%) 0%, hsl(${t} 82% 50%) 100%)`}};
  transition: width 0.2s ease, background 0.2s ease;
`,_e=d.div`
  font-size: 10px;
  color: ${e=>c(e.$theme.primary,.9)};
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ve=d.div`
  display: flex;
  gap: 4px;
  width: 100%;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
`,ye=d.div`
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
`,be=d.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$theme.primary};
  font-size: 14px;
`,O=(e,t,n)=>Math.max(t,Math.min(n,e)),k=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},A=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},j=e=>e.roomMetadata,M=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||h.CURRENT_HP,maxHpBid:n?.attr_bid||h.MAX_HP}},N=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,xe=e=>e===`default`||e===`plate`||e===`tech`||e===`deco`,Se=e=>e===`deco`?`plate`:e===`tech`?`tech`:e===`plate`?`plate`:`default`,Ce=(e,t)=>{let n=t.toLowerCase();if(n===`bool`)return e===!0?`Yes`:e===!1?`No`:`-`;if(n===`resource`){if(e&&typeof e==`object`&&!Array.isArray(e)){let t=Number(e.current),n=Number(e.max);if(Number.isFinite(t)&&Number.isFinite(n))return`${Math.trunc(t)}/${Math.trunc(n)}`}return`-`}return e==null||e===``?`-`:String(e)},P=()=>{let[t,n]=(0,v.useState)({sceneMetadata:{},roomMetadata:{},items:[]}),[r,a]=(0,v.useState)(!1),[o,s]=(0,v.useState)(()=>({width:typeof window<`u`?window.innerWidth:1920,height:typeof window<`u`?window.innerHeight:1080})),[c,d]=(0,v.useState)(``),[p,h]=(0,v.useState)(0),[_,P]=(0,v.useState)(null),[I,L]=(0,v.useState)(null),R=e=>e.filter(e=>e.metadata?.[l.BOSS_MODE]===!0).length;(0,v.useEffect)(()=>{let e=!0,t=async t=>{let n=t[te.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(P(null),L(null));return}let{data:r,error:i}=await u.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(i){e&&(P(null),L(null));return}let a=Array.isArray(r)?r[0]:r;if(!a||typeof a!=`object`){e&&(P(null),L(null));return}let o=a,s=k(o.attributes);if(typeof o.theme_primary!=`string`||typeof o.theme_offset!=`string`||typeof o.theme_background!=`string`||typeof o.theme_border!=`string`||!Array.isArray(s)){e&&(P(null),L(null));return}e&&(P({primary:o.theme_primary,offset:o.theme_offset,background:o.theme_background,border:o.theme_border,background_url:typeof o.background_url==`string`?o.background_url:``}),L(s))};(async()=>{let[r,o,s,c]=await Promise.all([i.scene.getMetadata(),i.room.getMetadata(),i.scene.items.getItems(),i.player.getId()]);e&&(n({sceneMetadata:r,roomMetadata:o,items:s}),d(c),h(R(s)),await t(o),a(!0))})();let r=i.scene.onMetadataChange(t=>{e&&n(e=>({...e,sceneMetadata:t}))}),o=i.room.onMetadataChange(r=>{e&&(n(e=>({...e,roomMetadata:r})),t(r))}),s=i.scene.items.onChange(t=>{e&&(n(e=>({...e,items:t})),h(R(t)))}),c=i.player.onChange(t=>{e&&d(t.id||``)});return()=>{e=!1,r(),o(),s(),c()}},[]),(0,v.useEffect)(()=>{let e=()=>{s({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let z=(0,v.useMemo)(()=>_||b,[_]),B=(0,v.useMemo)(()=>I||f.attributes,[I]),V=(0,v.useMemo)(()=>j(t),[t]),H=(0,v.useMemo)(()=>{let e=V[ee(m.PARTY_HUD_ORIENTATION,c)]??V[m.PARTY_HUD_ORIENTATION];return N(e)?e:`bottom`},[V,c]),U=V[m.PARTY_HUD_ATTR_ONE]||``,W=V[m.PARTY_HUD_ATTR_TWO]||``,we=V[m.PARTY_HUD_SHOW_HP_BARS]!==void 0,Te=V[m.PARTY_HUD_SHOW_HP_NUMBERS]!==void 0,G=V[m.PARTY_HUD_SHOW_HP_BARS]===!0,Ee=V[m.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!G,K=!we&&!Te,q=K?!0:G,De=K?!1:Ee,J=V[m.PARTY_HUD_BORDER_STYLE],Y=xe(J)?Se(J):`default`,X=(0,v.useMemo)(()=>[U,W].filter((e,t,n)=>e&&n.indexOf(e)===t).map(e=>B.find(t=>t.attr_bid===e)||null).filter(e=>e!==null).filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`||t===`resource`||t===`enum`||t===`derived`}),[B,U,W]),{currentHpBid:Oe,maxHpBid:ke}=(0,v.useMemo)(()=>{let e=M(B),t=V[m.HP_CURRENT_BID],n=V[m.HP_MAX_BID],r=new Set(B.map(e=>e.attr_bid));return{currentHpBid:t&&r.has(t)?t:e.currentHpBid,maxHpBid:n&&r.has(n)?n:e.maxHpBid}},[B,V]),Z=(0,v.useMemo)(()=>t.items.filter(e=>e.metadata?.[l.IN_PARTY]===!0).sort((e,t)=>{let n=String(F(e)),r=String(F(t));return n.localeCompare(r)}),[t.items]),Ae=(0,v.useMemo)(()=>{let e=t.sceneMetadata[m.CURRENT_TURN];return typeof e==`string`&&e.trim().length>0?e:null},[t.sceneMetadata]),Q=(0,v.useMemo)(()=>H===`top`?p>=2?re:p===1?ne:x:x,[p,H]),$=(0,v.useMemo)(()=>{let e=Math.max(1,Z.length),t=H===`left`||H===`right`,n=t?T:C,r=t?E:w,i=t?n:e*n+(e-1)*S,a=t?e*r+(e-1)*S:r,s=Math.max(1,o.width-Q*2),c=Math.max(1,o.height-Q*2),l=s/i,u=c/a,d=i>s||a>c?Math.min(1,l,u):1;return{contentWidth:i,contentHeight:a,scale:d,scaledWidth:Math.max(1,Math.floor(i*d)),scaledHeight:Math.max(1,Math.floor(a*d))}},[H,Z.length,o.height,o.width,Q]);return r?(0,y.jsx)(D,{$theme:z,children:(0,y.jsx)(ie,{$orientation:H,$inset:Q,children:Z.length===0?(0,y.jsx)(be,{$theme:z,children:`No party units found.`}):(0,y.jsx)(ae,{$scaledWidth:$.scaledWidth,$scaledHeight:$.scaledHeight,children:(0,y.jsx)(oe,{$contentWidth:$.contentWidth,$contentHeight:$.contentHeight,$scale:$.scale,children:(0,y.jsx)(se,{$orientation:H,children:Z.map(t=>{let n=F(t),r=t.metadata?.[l.PORTRAIT_URL]||``,i=(e(t)?t.image.url:void 0)||`/logo.png`,a=r||i,o=t.metadata?.[`${g}/${Oe}`],s=t.metadata?.[`${g}/${ke}`],c=A(o),u=A(s),d=c!==null&&u!==null&&u>0?O(c/u*100,0,100):0,f=t.id===Ae;return(0,y.jsxs)(le,{$theme:z,$orientation:H,$borderStyle:Y,children:[Y===`tech`&&(0,y.jsx)(ce,{$theme:z,viewBox:`0 0 100 100`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M5.263 0H57.789L62 8.889H100V100H40.211L36 91.111H0V11.111L5.263 0Z`})}),(0,y.jsx)(de,{$orientation:H,children:(0,y.jsx)(fe,{src:a,alt:n,$theme:z,$orientation:H})}),f&&(0,y.jsx)(ue,{$theme:z}),(0,y.jsxs)(pe,{$theme:z,$orientation:H,children:[(0,y.jsx)(me,{$theme:z,title:n,children:n}),q&&(0,y.jsx)(he,{$theme:z,children:(0,y.jsx)(ge,{$percent:d})}),De&&(0,y.jsxs)(_e,{$theme:z,children:[`HP: `,c===null?`-`:Math.trunc(c),` / `,u===null?`-`:Math.trunc(u)]}),X.length>0&&(0,y.jsx)(ve,{children:X.map(e=>{let n=(e.attr_abbr||e.attr_name||e.attr_bid).trim(),r=t.metadata?.[`com.battle-system.forge/${e.attr_bid}`];return(0,y.jsxs)(ye,{$theme:z,children:[n,`: `,Ce(r,String(e.attr_type||``))]},`${t.id}-${e.attr_bid}`)})})]})]},t.id)})})})})})}):(0,y.jsx)(D,{$theme:z})},F=e=>{let t=e.metadata?.[l.UNIT_NAME];return typeof t==`string`&&t.trim()?t.trim():typeof e.name==`string`&&e.name.trim()?e.name.trim():`Unknown`},I=P;_.createRoot(document.getElementById(`root`)).render((0,y.jsx)(v.StrictMode,{children:(0,y.jsx)(p,{children:(0,y.jsx)(I,{})})}));