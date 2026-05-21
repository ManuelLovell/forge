import{D as e,M as t,S as n,_ as r,k as i,o as a,s as o,t as s,v as c,w as l,y as u}from"./defaultgamesystem-wC8q2zZ8.js";import{d,f as ee,m as f,o as p,p as m,r as te,s as h,u as g}from"./hpAttributeMapping-IzAaYiC1.js";import{t as ne}from"./Translation-CPHpWyre.js";/* empty css               */var _=t(e(),1),v=i(),y=u(),re={SNAPSHOT_PUBLIC_ID:`${f.EXTENSIONID}/SnapshotPublicId`},b={primary:s.theme_primary,offset:s.theme_offset,background:s.theme_background,border:s.theme_border,background_url:s.background_url},x=50,ie=75,ae=120,S=8,C=190,w=90,T=120,E=150,D=o.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  pointer-events: none;
`,oe=o.div`
  position: absolute;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: ${e=>`calc(100vw - ${e.$inset*2}px)`};
  max-height: ${e=>`calc(100vh - ${e.$inset*2}px)`};
  ${e=>e.$orientation===`top`?`top: ${e.$inset}px; left: 50%; transform: translateX(-50%);`:e.$orientation===`left`?`left: ${e.$inset}px; top: 50%; transform: translateY(-50%);`:e.$orientation===`right`?`right: ${e.$inset}px; top: 50%; transform: translateY(-50%);`:`bottom: ${e.$inset}px; left: 50%; transform: translateX(-50%);`}
`,se=o.div`
  width: ${e=>`${e.$scaledWidth}px`};
  height: ${e=>`${e.$scaledHeight}px`};
  overflow: hidden;
`,ce=o.div`
  width: ${e=>`${e.$contentWidth}px`};
  height: ${e=>`${e.$contentHeight}px`};
  transform: ${e=>`scale(${e.$scale})`};
  transform-origin: top left;
`,le=o.div`
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${T}px`:`auto`};
  display: flex;
  gap: ${S}px;
  ${e=>e.$orientation===`left`||e.$orientation===`right`?`flex-direction: column;`:`flex-direction: row;`}
`,ue=o.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 6;

  path {
    fill: none;
    stroke: ${e=>r(e.$theme.border,.98)};
    stroke-width: 5;
    stroke-linejoin: miter;
    stroke-linecap: square;
    vector-effect: non-scaling-stroke;
    filter:
      drop-shadow(0 0 3px ${e=>r(e.$theme.border,.48)})
      drop-shadow(0 0 1px ${e=>r(e.$theme.primary,.3)});
  }
`,de=o.div`
  border: ${e=>e.$borderStyle===`plate`?`1px solid ${r(e.$theme.border,.7)}`:e.$borderStyle===`tech`?`1px solid ${r(e.$theme.offset,.65)}`:`2px solid ${e.$theme.border}`};
  border-radius: ${e=>e.$borderStyle===`tech`?`0`:`10px`};
  background: ${e=>r(e.$theme.background,.58)};
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
      inset 0 0 0 1px ${r(e.$theme.offset,.28)},
      0 0 0 1px ${r(e.$theme.border,.3)};

    &::before {
      content: '';
      position: absolute;
      inset: 2px;
      border-radius: 8px;
      pointer-events: none;
      z-index: 5;
      background:
        linear-gradient(90deg, ${r(e.$theme.offset,.7)} 0 24px, transparent 24px calc(100% - 24px), ${r(e.$theme.offset,.7)} calc(100% - 24px) 100%),
        linear-gradient(0deg, ${r(e.$theme.offset,.7)} 0 24px, transparent 24px calc(100% - 24px), ${r(e.$theme.offset,.7)} calc(100% - 24px) 100%);
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
        radial-gradient(circle at 12px 12px, ${r(e.$theme.primary,.42)} 0 2px, transparent 2px),
        radial-gradient(circle at calc(100% - 12px) 12px, ${r(e.$theme.primary,.42)} 0 2px, transparent 2px),
        radial-gradient(circle at 12px calc(100% - 12px), ${r(e.$theme.primary,.42)} 0 2px, transparent 2px),
        radial-gradient(circle at calc(100% - 12px) calc(100% - 12px), ${r(e.$theme.primary,.42)} 0 2px, transparent 2px);
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
      background: ${r(e.$theme.offset,.9)};
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
          ${r(e.$theme.primary,.95)} 18px 19px,
          transparent 19px 44px
        ),
        repeating-linear-gradient(0deg,
          transparent 0 16px,
          ${r(e.$theme.primary,.95)} 16px 17px,
          transparent 17px 40px
        ),
        linear-gradient(135deg,
          transparent 0 58%,
          ${r(e.$theme.primary,.95)} 58% 59%,
          transparent 59% 100%
        ),
        linear-gradient(180deg, ${r(e.$theme.background,.8)} 0%, ${r(e.$theme.background,.64)} 100%);
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
`,fe=o.div`
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
      ${e=>r(e.$theme.offset,.14)} 45% 50%,
      ${e=>r(e.$theme.offset,.38)} 50% 54%,
      ${e=>r(e.$theme.primary,.18)} 54% 58%,
      ${e=>r(e.$theme.offset,.14)} 58% 62%,
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
      inset 0 0 0 1px ${e=>r(e.$theme.offset,.45)},
      0 0 10px ${e=>r(e.$theme.offset,.28)};
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
`,pe=o.div`
  position: ${e=>e.$orientation===`left`||e.$orientation===`right`?`absolute`:`relative`};
  inset: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`auto`};
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`50%`};
  height: 100%;
  min-width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`50%`};
  min-height: 100%;
  z-index: 1;
  overflow: hidden;
`,me=o.img`
  width: 100%;
  height: 100%;
  min-width: 100%;
  position: absolute;
  left: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`-10px`};
  top: ${e=>e.$orientation===`left`||e.$orientation===`right`?`-10px`:`0`};
  border-radius: ${e=>e.$orientation===`left`||e.$orientation===`right`?`6px`:`0`};
  object-fit: cover;
  border: none;
  background: ${e=>r(e.$theme.background,.7)};
  -webkit-mask-image: ${e=>e.$orientation===`left`||e.$orientation===`right`?`none`:`linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)`};
  mask-image: ${e=>e.$orientation===`left`||e.$orientation===`right`?`none`:`linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)`};
`,he=o.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$orientation===`left`||e.$orientation===`right`?`4px`:`3px`};
  min-width: 0;
  height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`50%`:`100%`};
  min-height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`50%`:`0`};
  justify-content: center;
  align-items: ${e=>e.$orientation===`left`||e.$orientation===`right`?`center`:`stretch`};
  text-align: ${e=>e.$orientation===`left`||e.$orientation===`right`?`center`:`left`};
  background: ${e=>r(e.$theme.background,.8)};
  border-radius: 6px;
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`75%`};
  max-width: 100%;
  margin-left: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`-15%`};
  margin-top: ${e=>e.$orientation===`left`||e.$orientation===`right`?`auto`:`0`};
  padding: 8px;
  box-sizing: border-box;
  z-index: 2;
  overflow: hidden;
`,ge=o.div`
  color: ${e=>e.$theme.primary};
  font-size: 13px;
  font-weight: 700;
  line-height: 1.1;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,_e=o.div`
  width: 100%;
  height: 10px;
  border-radius: 999px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>r(e.$theme.background,.72)};
  overflow: hidden;
`,ve=o.div`
  width: ${e=>`${e.$percent}%`};
  height: 100%;
  background: ${e=>{let t=Math.max(0,Math.min(120,e.$percent*1.2));return`linear-gradient(90deg, hsl(${t} 78% 35%) 0%, hsl(${t} 82% 50%) 100%)`}};
  transition: width 0.2s ease, background 0.2s ease;
`,ye=o.div`
  font-size: 10px;
  color: ${e=>r(e.$theme.primary,.9)};
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,be=o.div`
  display: flex;
  gap: 4px;
  width: 100%;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
`,O=o.div`
  border: 1px solid ${e=>e.$theme.border};
  border-radius: 999px;
  background: ${e=>r(e.$theme.background,.6)};
  color: ${e=>e.$theme.primary};
  font-size: 10px;
  padding: 1px 6px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,k=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$theme.primary};
  font-size: 14px;
`,A=(e,t,n)=>Math.max(t,Math.min(n,e)),j=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},M=e=>e.roomMetadata,N=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,xe=e=>e===`default`||e===`plate`||e===`tech`||e===`deco`,Se=e=>e===`deco`?`plate`:e===`tech`?`tech`:e===`plate`?`plate`:`default`,Ce=(e,t)=>{let n=t.toLowerCase();if(n===`bool`)return e===!0?`Yes`:e===!1?`No`:`-`;if(n===`resource`){if(e&&typeof e==`object`&&!Array.isArray(e)){let t=Number(e.current),n=Number(e.max);if(Number.isFinite(t)&&Number.isFinite(n))return`${Math.trunc(t)}/${Math.trunc(n)}`}return`-`}return e==null||e===``?`-`:String(e)},P=()=>{let{t:e}=ne(),[t,r]=(0,v.useState)({sceneMetadata:{},roomMetadata:{},items:[]}),[i,o]=(0,v.useState)(!1),[c,u]=(0,v.useState)(()=>({width:typeof window<`u`?window.innerWidth:1920,height:typeof window<`u`?window.innerHeight:1080})),[f,m]=(0,v.useState)(``),[h,_]=(0,v.useState)(0),[P,I]=(0,v.useState)(null),[L,R]=(0,v.useState)(null),z=e=>e.filter(e=>e.metadata?.[d.BOSS_MODE]===!0).length;(0,v.useEffect)(()=>{let e=!0,t=async t=>{let n=t[re.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(I(null),R(null));return}let{data:r,error:i}=await a.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(i){e&&(I(null),R(null));return}let o=Array.isArray(r)?r[0]:r;if(!o||typeof o!=`object`){e&&(I(null),R(null));return}let s=o,c=j(s.attributes);if(typeof s.theme_primary!=`string`||typeof s.theme_offset!=`string`||typeof s.theme_background!=`string`||typeof s.theme_border!=`string`||!Array.isArray(c)){e&&(I(null),R(null));return}e&&(I({primary:s.theme_primary,offset:s.theme_offset,background:s.theme_background,border:s.theme_border,background_url:typeof s.background_url==`string`?s.background_url:``}),R(c))};(async()=>{let[i,a,s,c]=await Promise.all([n.scene.getMetadata(),n.room.getMetadata(),n.scene.items.getItems(),n.player.getId()]);e&&(r({sceneMetadata:i,roomMetadata:a,items:s}),m(c),_(z(s)),await t(a),o(!0))})();let i=n.scene.onMetadataChange(t=>{e&&r(e=>({...e,sceneMetadata:t}))}),s=n.room.onMetadataChange(n=>{e&&(r(e=>({...e,roomMetadata:n})),t(n))}),c=n.scene.items.onChange(t=>{e&&(r(e=>({...e,items:t})),_(z(t)))}),l=n.player.onChange(t=>{e&&m(t.id||``)});return()=>{e=!1,i(),s(),c(),l()}},[]),(0,v.useEffect)(()=>{let e=()=>{u({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let B=(0,v.useMemo)(()=>P||b,[P]),V=(0,v.useMemo)(()=>L||s.attributes,[L]),H=(0,v.useMemo)(()=>M(t),[t]),U=(0,v.useMemo)(()=>{let e=H[ee(g.PARTY_HUD_ORIENTATION,f)]??H[g.PARTY_HUD_ORIENTATION];return N(e)?e:`bottom`},[H,f]),W=H[g.PARTY_HUD_ATTR_ONE]||``,G=H[g.PARTY_HUD_ATTR_TWO]||``,we=H[g.PARTY_HUD_SHOW_HP_BARS]!==void 0,Te=H[g.PARTY_HUD_SHOW_HP_NUMBERS]!==void 0,K=H[g.PARTY_HUD_SHOW_HP_BARS]===!0,Ee=H[g.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!K,q=!we&&!Te,De=q?!0:K,Oe=q?!1:Ee,J=H[g.PARTY_HUD_BORDER_STYLE],Y=xe(J)?Se(J):`default`,X=(0,v.useMemo)(()=>[W,G].filter((e,t,n)=>e&&n.indexOf(e)===t).map(e=>V.find(t=>t.attr_bid===e)||null).filter(e=>e!==null).filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`||t===`resource`||t===`enum`||t===`derived`}),[V,W,G]),{currentHpBid:ke,maxHpBid:Ae}=(0,v.useMemo)(()=>te(H,V),[V,H]),Z=(0,v.useMemo)(()=>t.items.filter(e=>e.metadata?.[d.IN_PARTY]===!0).sort((t,n)=>{let r=String(F(t,e(`party.unknownUnit`))),i=String(F(n,e(`party.unknownUnit`)));return r.localeCompare(i)}),[t.items,e]),je=(0,v.useMemo)(()=>{let e=t.sceneMetadata[g.CURRENT_TURN];return typeof e==`string`&&e.trim().length>0?e:null},[t.sceneMetadata]),Q=(0,v.useMemo)(()=>U===`top`?h>=2?ae:h===1?ie:x:x,[h,U]),$=(0,v.useMemo)(()=>{let e=Math.max(1,Z.length),t=U===`left`||U===`right`,n=t?T:C,r=t?E:w,i=t?n:e*n+(e-1)*S,a=t?e*r+(e-1)*S:r,o=Math.max(1,c.width-Q*2),s=Math.max(1,c.height-Q*2),l=o/i,u=s/a,d=i>o||a>s?Math.min(1,l,u):1;return{contentWidth:i,contentHeight:a,scale:d,scaledWidth:Math.max(1,Math.floor(i*d)),scaledHeight:Math.max(1,Math.floor(a*d))}},[U,Z.length,c.height,c.width,Q]);return i?(0,y.jsx)(D,{$theme:B,children:(0,y.jsx)(oe,{$orientation:U,$inset:Q,children:Z.length===0?(0,y.jsx)(k,{$theme:B,children:e(`partyHud.emptyState`)}):(0,y.jsx)(se,{$scaledWidth:$.scaledWidth,$scaledHeight:$.scaledHeight,children:(0,y.jsx)(ce,{$contentWidth:$.contentWidth,$contentHeight:$.contentHeight,$scale:$.scale,children:(0,y.jsx)(le,{$orientation:U,children:Z.map(t=>{let n=F(t,e(`party.unknownUnit`)),r=t.metadata?.[d.PORTRAIT_URL]||``,i=(l(t)?t.image.url:void 0)||`/logo.png`,a=r||i,o=p(t.metadata,ke,V,`current`),s=p(t.metadata,Ae,V,`max`),c=o!==null&&s!==null&&s>0?A(o/s*100,0,100):0,u=t.id===je;return(0,y.jsxs)(de,{$theme:B,$orientation:U,$borderStyle:Y,children:[Y===`tech`&&(0,y.jsx)(ue,{$theme:B,viewBox:`0 0 100 100`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M5.263 0H57.789L62 8.889H100V100H40.211L36 91.111H0V11.111L5.263 0Z`})}),(0,y.jsx)(pe,{$orientation:U,children:(0,y.jsx)(me,{src:a,alt:n,$theme:B,$orientation:U})}),u&&(0,y.jsx)(fe,{$theme:B}),(0,y.jsxs)(he,{$theme:B,$orientation:U,children:[(0,y.jsx)(ge,{$theme:B,title:n,children:n}),De&&(0,y.jsx)(_e,{$theme:B,children:(0,y.jsx)(ve,{$percent:c})}),Oe&&(0,y.jsxs)(ye,{$theme:B,children:[e(`partyHud.hpLabel`),`: `,o===null?`-`:Math.trunc(o),` / `,s===null?`-`:Math.trunc(s)]}),X.length>0&&(0,y.jsx)(be,{children:X.map(e=>{let n=(e.attr_abbr||e.attr_name||e.attr_bid).trim(),r=t.metadata?.[`com.battle-system.forge/${e.attr_bid}`];return(0,y.jsxs)(O,{$theme:B,children:[n,`: `,Ce(r,String(e.attr_type||``))]},`${t.id}-${e.attr_bid}`)})})]})]},t.id)})})})})})}):(0,y.jsx)(D,{$theme:B})},F=(e,t)=>{let n=e.metadata?.[d.UNIT_NAME];return typeof n==`string`&&n.trim()?n.trim():typeof e.name==`string`&&e.name.trim()?e.name.trim():t},I=P;_.createRoot(document.getElementById(`root`)).render((0,y.jsx)(v.StrictMode,{children:(0,y.jsx)(c,{children:(0,y.jsx)(I,{})})}));