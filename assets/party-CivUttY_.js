import{_ as e,c as t,u as n}from"./tslib.es6-B50zIwoW.js";import{n as r,t as i}from"./PluginGateComponent-BqCn6KcS.js";import{f as a,m as o,p as s,t as c}from"./styled-components.browser.esm-DHy5LH3R.js";import"./react-dom-kWs4TVWh.js";import{r as l,t as u}from"./Constants-BX77kWGP.js";import{i as d,n as f,r as p}from"./MetadataKeys-B7ws-e14.js";import{t as ee}from"./Translation-BC3yKQtd.js";import{o as m,r as te,u as h}from"./hpAttributeMapping-M8K2Cbp0.js";import{a as ne}from"./supabaseClient-7JhD0IQw.js";/* empty css               */import{i as g}from"./defaultgamesystem-BSWK_XU6.js";var _=e(r(),1),v=o(),y=s(),re={SNAPSHOT_PUBLIC_ID:`${l.EXTENSIONID}/SnapshotPublicId`},ie={primary:g.theme_primary,offset:g.theme_offset,background:g.theme_background,border:g.theme_border,background_url:g.background_url},b=50,x=75,ae=120,S=8,C=190,w=90,T=120,E=150,D=c.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  pointer-events: none;
`,oe=c.div`
  position: absolute;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: ${e=>`calc(100vw - ${e.$inset*2}px)`};
  max-height: ${e=>`calc(100vh - ${e.$inset*2}px)`};
  ${e=>e.$orientation===`top`?`top: ${e.$inset}px; left: 50%; transform: translateX(-50%);`:e.$orientation===`left`?`left: ${e.$inset}px; top: 50%; transform: translateY(-50%);`:e.$orientation===`right`?`right: ${e.$inset}px; top: 50%; transform: translateY(-50%);`:`bottom: ${e.$inset}px; left: 50%; transform: translateX(-50%);`}
`,se=c.div`
  width: ${e=>`${e.$scaledWidth}px`};
  height: ${e=>`${e.$scaledHeight}px`};
  overflow: hidden;
`,ce=c.div`
  width: ${e=>`${e.$contentWidth}px`};
  height: ${e=>`${e.$contentHeight}px`};
  transform: ${e=>`scale(${e.$scale})`};
  transform-origin: top left;
`,le=c.div`
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${T}px`:`auto`};
  display: flex;
  gap: ${S}px;
  ${e=>e.$orientation===`left`||e.$orientation===`right`?`flex-direction: column;`:`flex-direction: row;`}
`,ue=c.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 6;

  path {
    fill: none;
    stroke: ${e=>a(e.$theme.border,.98)};
    stroke-width: 5;
    stroke-linejoin: miter;
    stroke-linecap: square;
    vector-effect: non-scaling-stroke;
    filter:
      drop-shadow(0 0 3px ${e=>a(e.$theme.border,.48)})
      drop-shadow(0 0 1px ${e=>a(e.$theme.primary,.3)});
  }
`,de=c.div`
  border: ${e=>e.$borderStyle===`plate`?`1px solid ${a(e.$theme.border,.7)}`:e.$borderStyle===`tech`?`1px solid ${a(e.$theme.offset,.65)}`:`2px solid ${e.$theme.border}`};
  border-radius: ${e=>e.$borderStyle===`tech`?`0`:`10px`};
  background: ${e=>a(e.$theme.background,.58)};
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
      inset 0 0 0 1px ${a(e.$theme.offset,.28)},
      0 0 0 1px ${a(e.$theme.border,.3)};

    &::before {
      content: '';
      position: absolute;
      inset: 2px;
      border-radius: 8px;
      pointer-events: none;
      z-index: 5;
      background:
        linear-gradient(90deg, ${a(e.$theme.offset,.7)} 0 24px, transparent 24px calc(100% - 24px), ${a(e.$theme.offset,.7)} calc(100% - 24px) 100%),
        linear-gradient(0deg, ${a(e.$theme.offset,.7)} 0 24px, transparent 24px calc(100% - 24px), ${a(e.$theme.offset,.7)} calc(100% - 24px) 100%);
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
        radial-gradient(circle at 12px 12px, ${a(e.$theme.primary,.42)} 0 2px, transparent 2px),
        radial-gradient(circle at calc(100% - 12px) 12px, ${a(e.$theme.primary,.42)} 0 2px, transparent 2px),
        radial-gradient(circle at 12px calc(100% - 12px), ${a(e.$theme.primary,.42)} 0 2px, transparent 2px),
        radial-gradient(circle at calc(100% - 12px) calc(100% - 12px), ${a(e.$theme.primary,.42)} 0 2px, transparent 2px);
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
      background: ${a(e.$theme.offset,.9)};
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
          ${a(e.$theme.primary,.95)} 18px 19px,
          transparent 19px 44px
        ),
        repeating-linear-gradient(0deg,
          transparent 0 16px,
          ${a(e.$theme.primary,.95)} 16px 17px,
          transparent 17px 40px
        ),
        linear-gradient(135deg,
          transparent 0 58%,
          ${a(e.$theme.primary,.95)} 58% 59%,
          transparent 59% 100%
        ),
        linear-gradient(180deg, ${a(e.$theme.background,.8)} 0%, ${a(e.$theme.background,.64)} 100%);
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
`,fe=c.div`
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
      ${e=>a(e.$theme.offset,.14)} 45% 50%,
      ${e=>a(e.$theme.offset,.38)} 50% 54%,
      ${e=>a(e.$theme.primary,.18)} 54% 58%,
      ${e=>a(e.$theme.offset,.14)} 58% 62%,
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
      inset 0 0 0 1px ${e=>a(e.$theme.offset,.45)},
      0 0 10px ${e=>a(e.$theme.offset,.28)};
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
`,pe=c.div`
  position: ${e=>e.$orientation===`left`||e.$orientation===`right`?`absolute`:`relative`};
  inset: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`auto`};
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`50%`};
  height: 100%;
  min-width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`50%`};
  min-height: 100%;
  z-index: 1;
  overflow: hidden;
`,me=c.img`
  width: 100%;
  height: 100%;
  min-width: 100%;
  position: absolute;
  left: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`-10px`};
  top: ${e=>e.$orientation===`left`||e.$orientation===`right`?`-10px`:`0`};
  border-radius: ${e=>e.$orientation===`left`||e.$orientation===`right`?`6px`:`0`};
  object-fit: cover;
  border: none;
  background: ${e=>a(e.$theme.background,.7)};
  -webkit-mask-image: ${e=>e.$orientation===`left`||e.$orientation===`right`?`none`:`linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)`};
  mask-image: ${e=>e.$orientation===`left`||e.$orientation===`right`?`none`:`linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)`};
`,he=c.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$orientation===`left`||e.$orientation===`right`?`4px`:`3px`};
  min-width: 0;
  height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`50%`:`100%`};
  min-height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`50%`:`0`};
  justify-content: center;
  align-items: ${e=>e.$orientation===`left`||e.$orientation===`right`?`center`:`stretch`};
  text-align: ${e=>e.$orientation===`left`||e.$orientation===`right`?`center`:`left`};
  background: ${e=>a(e.$theme.background,.8)};
  border-radius: 6px;
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`75%`};
  max-width: 100%;
  margin-left: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`-15%`};
  margin-top: ${e=>e.$orientation===`left`||e.$orientation===`right`?`auto`:`0`};
  padding: 8px;
  box-sizing: border-box;
  z-index: 2;
  overflow: hidden;
`,ge=c.div`
  color: ${e=>e.$theme.primary};
  font-size: 13px;
  font-weight: 700;
  line-height: 1.1;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,_e=c.div`
  width: 100%;
  height: 10px;
  border-radius: 999px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>a(e.$theme.background,.72)};
  overflow: hidden;
`,ve=c.div`
  width: ${e=>`${e.$percent}%`};
  height: 100%;
  background: ${e=>{let t=Math.max(0,Math.min(120,e.$percent*1.2));return`linear-gradient(90deg, hsl(${t} 78% 35%) 0%, hsl(${t} 82% 50%) 100%)`}};
  transition: width 0.2s ease, background 0.2s ease;
`,ye=c.div`
  font-size: 10px;
  color: ${e=>a(e.$theme.primary,.9)};
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,be=c.div`
  display: flex;
  gap: 4px;
  width: 100%;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
`,O=c.div`
  border: 1px solid ${e=>e.$theme.border};
  border-radius: 999px;
  background: ${e=>a(e.$theme.background,.6)};
  color: ${e=>e.$theme.primary};
  font-size: 10px;
  padding: 1px 6px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,k=c.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$theme.primary};
  font-size: 14px;
`,A=(e,t,n)=>Math.max(t,Math.min(n,e)),j=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},M=e=>e.roomMetadata,N=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,xe=e=>e===`default`||e===`plate`||e===`tech`||e===`deco`,Se=e=>e===`deco`?`plate`:e===`tech`?`tech`:e===`plate`?`plate`:`default`,Ce=(e,t)=>{let n=t.toLowerCase();if(n===`bool`)return e===!0?`Yes`:e===!1?`No`:`-`;if(n===`resource`){if(e&&typeof e==`object`&&!Array.isArray(e)){let t=Number(e.current),n=Number(e.max);if(Number.isFinite(t)&&Number.isFinite(n))return`${Math.trunc(t)}/${Math.trunc(n)}`}return`-`}return e==null||e===``?`-`:String(e)},P=()=>{let{t:e}=ee(),[r,i]=(0,v.useState)({sceneMetadata:{},roomMetadata:{},items:[]}),[a,o]=(0,v.useState)(!1),[s,c]=(0,v.useState)(()=>({width:typeof window<`u`?window.innerWidth:1920,height:typeof window<`u`?window.innerHeight:1080})),[l,u]=(0,v.useState)(``),[h,_]=(0,v.useState)(0),[P,I]=(0,v.useState)(null),[L,R]=(0,v.useState)(null),z=e=>e.filter(e=>e.metadata?.[p.BOSS_MODE]===!0).length;(0,v.useEffect)(()=>{let e=!0,n=async t=>{let n=t[re.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(I(null),R(null));return}let{data:r,error:i}=await ne.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(i){e&&(I(null),R(null));return}let a=Array.isArray(r)?r[0]:r;if(!a||typeof a!=`object`){e&&(I(null),R(null));return}let o=a,s=j(o.attributes);if(typeof o.theme_primary!=`string`||typeof o.theme_offset!=`string`||typeof o.theme_background!=`string`||typeof o.theme_border!=`string`||!Array.isArray(s)){e&&(I(null),R(null));return}e&&(I({primary:o.theme_primary,offset:o.theme_offset,background:o.theme_background,border:o.theme_border,background_url:typeof o.background_url==`string`?o.background_url:``}),R(s))};(async()=>{let[r,a,s,c]=await Promise.all([t.scene.getMetadata(),t.room.getMetadata(),t.scene.items.getItems(),t.player.getId()]);e&&(i({sceneMetadata:r,roomMetadata:a,items:s}),u(c),_(z(s)),await n(a),o(!0))})();let r=t.scene.onMetadataChange(t=>{e&&i(e=>({...e,sceneMetadata:t}))}),a=t.room.onMetadataChange(t=>{e&&(i(e=>({...e,roomMetadata:t})),n(t))}),s=t.scene.items.onChange(t=>{e&&(i(e=>({...e,items:t})),_(z(t)))}),c=t.player.onChange(t=>{e&&u(t.id||``)});return()=>{e=!1,r(),a(),s(),c()}},[]),(0,v.useEffect)(()=>{let e=()=>{c({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let B=(0,v.useMemo)(()=>P||ie,[P]),V=(0,v.useMemo)(()=>L||g.attributes,[L]),H=(0,v.useMemo)(()=>M(r),[r]),U=(0,v.useMemo)(()=>{let e=H[d(f.PARTY_HUD_ORIENTATION,l)]??H[f.PARTY_HUD_ORIENTATION];return N(e)?e:`bottom`},[H,l]),W=H[f.PARTY_HUD_ATTR_ONE]||``,G=H[f.PARTY_HUD_ATTR_TWO]||``,we=H[f.PARTY_HUD_SHOW_HP_BARS]!==void 0,Te=H[f.PARTY_HUD_SHOW_HP_NUMBERS]!==void 0,K=H[f.PARTY_HUD_SHOW_HP_BARS]===!0,Ee=H[f.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!K,q=!we&&!Te,De=q?!0:K,Oe=q?!1:Ee,J=H[f.PARTY_HUD_BORDER_STYLE],Y=xe(J)?Se(J):`default`,X=(0,v.useMemo)(()=>[W,G].filter((e,t,n)=>e&&n.indexOf(e)===t).map(e=>V.find(t=>t.attr_bid===e)||null).filter(e=>e!==null).filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`||t===`resource`||t===`enum`||t===`derived`}),[V,W,G]),{currentHpBid:ke,maxHpBid:Ae}=(0,v.useMemo)(()=>te(H,V),[V,H]),Z=(0,v.useMemo)(()=>r.items.filter(e=>e.metadata?.[p.IN_PARTY]===!0).sort((t,n)=>{let r=String(F(t,e(`party.unknownUnit`))),i=String(F(n,e(`party.unknownUnit`)));return r.localeCompare(i)}),[r.items,e]),je=(0,v.useMemo)(()=>{let e=r.sceneMetadata[f.CURRENT_TURN];return typeof e==`string`&&e.trim().length>0?e:null},[r.sceneMetadata]),Q=(0,v.useMemo)(()=>U===`top`?h>=2?ae:h===1?x:b:b,[h,U]),$=(0,v.useMemo)(()=>{let e=Math.max(1,Z.length),t=U===`left`||U===`right`,n=t?T:C,r=t?E:w,i=t?n:e*n+(e-1)*S,a=t?e*r+(e-1)*S:r,o=Math.max(1,s.width-Q*2),c=Math.max(1,s.height-Q*2),l=o/i,u=c/a,d=i>o||a>c?Math.min(1,l,u):1;return{contentWidth:i,contentHeight:a,scale:d,scaledWidth:Math.max(1,Math.floor(i*d)),scaledHeight:Math.max(1,Math.floor(a*d))}},[U,Z.length,s.height,s.width,Q]);return a?(0,y.jsx)(D,{$theme:B,children:(0,y.jsx)(oe,{$orientation:U,$inset:Q,children:Z.length===0?(0,y.jsx)(k,{$theme:B,children:e(`partyHud.emptyState`)}):(0,y.jsx)(se,{$scaledWidth:$.scaledWidth,$scaledHeight:$.scaledHeight,children:(0,y.jsx)(ce,{$contentWidth:$.contentWidth,$contentHeight:$.contentHeight,$scale:$.scale,children:(0,y.jsx)(le,{$orientation:U,children:Z.map(t=>{let r=F(t,e(`party.unknownUnit`)),i=t.metadata?.[p.PORTRAIT_URL]||``,a=(n(t)?t.image.url:void 0)||`/logo.png`,o=i||a,s=m(t.metadata,ke,V,`current`),c=m(t.metadata,Ae,V,`max`),l=s!==null&&c!==null&&c>0?A(s/c*100,0,100):0,u=t.id===je;return(0,y.jsxs)(de,{$theme:B,$orientation:U,$borderStyle:Y,children:[Y===`tech`&&(0,y.jsx)(ue,{$theme:B,viewBox:`0 0 100 100`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M5.263 0H57.789L62 8.889H100V100H40.211L36 91.111H0V11.111L5.263 0Z`})}),(0,y.jsx)(pe,{$orientation:U,children:(0,y.jsx)(me,{src:o,alt:r,$theme:B,$orientation:U})}),u&&(0,y.jsx)(fe,{$theme:B}),(0,y.jsxs)(he,{$theme:B,$orientation:U,children:[(0,y.jsx)(ge,{$theme:B,title:r,children:r}),De&&(0,y.jsx)(_e,{$theme:B,children:(0,y.jsx)(ve,{$percent:l})}),Oe&&(0,y.jsxs)(ye,{$theme:B,children:[e(`partyHud.hpLabel`),`: `,s===null?`-`:Math.trunc(s),` / `,c===null?`-`:Math.trunc(c)]}),X.length>0&&(0,y.jsx)(be,{children:X.map(e=>{let n=(e.attr_abbr||e.attr_name||e.attr_bid).trim(),r=t.metadata?.[`com.battle-system.forge/${e.attr_bid}`];return(0,y.jsxs)(O,{$theme:B,children:[n,`: `,Ce(r,String(e.attr_type||``))]},`${t.id}-${e.attr_bid}`)})})]})]},t.id)})})})})})}):(0,y.jsx)(D,{$theme:B})},F=(e,t)=>{let n=e.metadata?.[p.UNIT_NAME];return typeof n==`string`&&n.trim()?n.trim():typeof e.name==`string`&&e.name.trim()?e.name.trim():t},I=P;_.createRoot(document.getElementById(`root`)).render((0,y.jsx)(v.StrictMode,{children:(0,y.jsx)(i,{children:(0,y.jsx)(I,{})})}));