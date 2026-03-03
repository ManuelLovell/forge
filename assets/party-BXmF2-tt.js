import{A as e,D as t,F as n,M as r,S as i,T as a,_ as o,b as s,g as c,m as l,n as u,t as d,v as f,x as p,y as m}from"./defaultgamesystem-jXGW0PHK.js";import{n as h,t as g}from"./MockData-DTzuSraw.js";/* empty css               */var _=n(e(),1),v=r(),y=i(),b={CURRENT_THEME:`${s.EXTENSIONID}/CurrentTheme`,CURRENT_ATTR:`${s.EXTENSIONID}/CurrentAttr`},ee={primary:d.theme_primary,offset:d.theme_offset,background:d.theme_background,border:d.theme_border,background_url:d.background_url},x=50,te=75,ne=120,S=8,C=190,w=90,T=120,E=150,re=1024,ie=6,D=u.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  pointer-events: none;
`,O=u.div`
  position: absolute;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: ${e=>`calc(100vw - ${e.$inset*2}px)`};
  max-height: ${e=>`calc(100vh - ${e.$inset*2}px)`};
  ${e=>e.$orientation===`top`?`top: ${e.$inset}px; left: 50%; transform: translateX(-50%);`:e.$orientation===`left`?`left: ${e.$inset}px; top: 50%; transform: translateY(-50%);`:e.$orientation===`right`?`right: ${e.$inset}px; top: 50%; transform: translateY(-50%);`:`bottom: ${e.$inset}px; left: 50%; transform: translateX(-50%);`}
`,ae=u.div`
  width: ${e=>`${e.$scaledWidth}px`};
  height: ${e=>`${e.$scaledHeight}px`};
  overflow: hidden;
`,k=u.div`
  width: ${e=>`${e.$contentWidth}px`};
  height: ${e=>`${e.$contentHeight}px`};
  transform: ${e=>`scale(${e.$scale})`};
  transform-origin: top left;
`,oe=u.div`
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${T}px`:`auto`};
  display: flex;
  gap: ${S}px;
  ${e=>e.$orientation===`left`||e.$orientation===`right`?`flex-direction: column;`:`flex-direction: row;`}
`,se=u.div`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 10px;
  background: ${e=>l(e.$theme.background,.58)};
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
`,ce=u.div`
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
      ${e=>l(e.$theme.offset,.14)} 45% 50%,
      ${e=>l(e.$theme.offset,.38)} 50% 54%,
      ${e=>l(e.$theme.primary,.18)} 54% 58%,
      ${e=>l(e.$theme.offset,.14)} 58% 62%,
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
      inset 0 0 0 1px ${e=>l(e.$theme.offset,.45)},
      0 0 10px ${e=>l(e.$theme.offset,.28)};
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
`,le=u.div`
  position: ${e=>e.$orientation===`left`||e.$orientation===`right`?`absolute`:`relative`};
  inset: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`auto`};
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`50%`};
  height: 100%;
  min-width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`50%`};
  min-height: 100%;
  z-index: 1;
  overflow: hidden;
`,ue=u.img`
  width: 100%;
  height: 100%;
  min-width: 100%;
  position: absolute;
  left: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`-10px`};
  top: ${e=>e.$orientation===`left`||e.$orientation===`right`?`-10px`:`0`};
  border-radius: ${e=>e.$orientation===`left`||e.$orientation===`right`?`6px`:`0`};
  object-fit: cover;
  border: none;
  background: ${e=>l(e.$theme.background,.7)};
  -webkit-mask-image: ${e=>e.$orientation===`left`||e.$orientation===`right`?`none`:`linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)`};
  mask-image: ${e=>e.$orientation===`left`||e.$orientation===`right`?`none`:`linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)`};
`,de=u.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$orientation===`left`||e.$orientation===`right`?`4px`:`3px`};
  min-width: 0;
  height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`50%`:`100%`};
  min-height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`50%`:`0`};
  justify-content: center;
  align-items: ${e=>e.$orientation===`left`||e.$orientation===`right`?`center`:`stretch`};
  text-align: ${e=>e.$orientation===`left`||e.$orientation===`right`?`center`:`left`};
  background: ${e=>l(e.$theme.background,.8)};
  border-radius: 6px;
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`75%`};
  max-width: 100%;
  margin-left: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`-15%`};
  margin-top: ${e=>e.$orientation===`left`||e.$orientation===`right`?`auto`:`0`};
  padding: 8px;
  box-sizing: border-box;
  z-index: 2;
  overflow: hidden;
`,fe=u.div`
  color: ${e=>e.$theme.primary};
  font-size: 13px;
  font-weight: 700;
  line-height: 1.1;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,pe=u.div`
  width: 100%;
  height: 10px;
  border-radius: 999px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>l(e.$theme.background,.72)};
  overflow: hidden;
`,A=u.div`
  width: ${e=>`${e.$percent}%`};
  height: 100%;
  background: ${e=>{let t=Math.max(0,Math.min(120,e.$percent*1.2));return`linear-gradient(90deg, hsl(${t} 78% 35%) 0%, hsl(${t} 82% 50%) 100%)`}};
  transition: width 0.2s ease, background 0.2s ease;
`,j=u.div`
  font-size: 10px;
  color: ${e=>l(e.$theme.primary,.9)};
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,M=u.div`
  display: flex;
  gap: 4px;
  width: 100%;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
`,N=u.div`
  border: 1px solid ${e=>e.$theme.border};
  border-radius: 999px;
  background: ${e=>l(e.$theme.background,.6)};
  color: ${e=>e.$theme.primary};
  font-size: 10px;
  padding: 1px 6px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,P=u.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$theme.primary};
  font-size: 14px;
`,F=(e,t,n)=>Math.max(t,Math.min(n,e)),I=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},L=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},R=e=>e.sceneMetadata,z=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||h.CURRENT_HP,maxHpBid:n?.attr_bid||h.MAX_HP}},B=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,me=(e,t)=>t.toLowerCase()===`bool`?e===!0?`Yes`:e===!1?`No`:`-`:e==null||e===``?`-`:String(e),V=()=>{let[e,n]=(0,v.useState)({sceneMetadata:{},roomMetadata:{},items:[]}),[r,i]=(0,v.useState)(!1),[s,l]=(0,v.useState)(()=>({width:typeof window<`u`?window.innerWidth:1920,height:typeof window<`u`?window.innerHeight:1080})),[u,p]=(0,v.useState)(``),[m,h]=(0,v.useState)(0),_=e=>e.filter(e=>e.metadata?.[o.BOSS_MODE]===!0).length;(0,v.useEffect)(()=>{let e=!0;(async()=>{let[t,r,o,s]=await Promise.all([a.scene.getMetadata(),a.room.getMetadata(),a.scene.items.getItems(),a.player.getId()]);e&&(n({sceneMetadata:t,roomMetadata:r,items:o}),p(s),h(_(o)),i(!0))})();let t=a.scene.onMetadataChange(t=>{e&&n(e=>({...e,sceneMetadata:t}))}),r=a.room.onMetadataChange(t=>{e&&n(e=>({...e,roomMetadata:t}))}),o=a.scene.items.onChange(t=>{e&&(n(e=>({...e,items:t})),h(_(t)))}),s=a.player.onChange(t=>{e&&p(t.id||``)});return()=>{e=!1,t(),r(),o(),s()}},[]),(0,v.useEffect)(()=>{let e=()=>{l({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let V=(0,v.useMemo)(()=>{let t=e.sceneMetadata[b.CURRENT_THEME];return!t?.primary||!t?.offset||!t?.background||!t?.border?ee:t},[e.sceneMetadata]),U=(0,v.useMemo)(()=>I(e.sceneMetadata[b.CURRENT_ATTR])||d.attributes,[e.sceneMetadata]),W=(0,v.useMemo)(()=>R(e),[e]),G=(0,v.useMemo)(()=>{let e=W[f(c.PARTY_HUD_ORIENTATION,u)]??W[c.PARTY_HUD_ORIENTATION];return B(e)?e:`bottom`},[W,u]),K=W[c.PARTY_HUD_ATTR_ONE]||``,q=W[c.PARTY_HUD_ATTR_TWO]||``,he=W[c.PARTY_HUD_SHOW_HP_BARS]!==void 0,ge=W[c.PARTY_HUD_SHOW_HP_NUMBERS]!==void 0,J=W[c.PARTY_HUD_SHOW_HP_BARS]===!0,_e=W[c.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!J,Y=!he&&!ge,ve=Y?!0:J,ye=Y?!1:_e,X=(0,v.useMemo)(()=>[K,q].filter((e,t,n)=>e&&n.indexOf(e)===t).map(e=>U.find(t=>t.attr_bid===e)||null).filter(e=>e!==null).filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[U,K,q]),{currentHpBid:be,maxHpBid:xe}=(0,v.useMemo)(()=>{let e=z(U),t=W[c.HP_CURRENT_BID],n=W[c.HP_MAX_BID],r=new Set(U.map(e=>e.attr_bid));return{currentHpBid:t&&r.has(t)?t:e.currentHpBid,maxHpBid:n&&r.has(n)?n:e.maxHpBid}},[U,W]),Z=(0,v.useMemo)(()=>e.items.filter(e=>e.metadata?.[o.IN_PARTY]===!0).sort((e,t)=>{let n=String(H(e)),r=String(H(t));return n.localeCompare(r)}),[e.items]),Se=(0,v.useMemo)(()=>{let t=e.sceneMetadata[c.CURRENT_TURN];return typeof t==`string`&&t.trim().length>0?t:null},[e.sceneMetadata]),Q=(0,v.useMemo)(()=>G===`top`?m>=2?ne:m===1?te:x:x,[m,G]),$=(0,v.useMemo)(()=>{let e=Math.max(1,Z.length),t=G===`left`||G===`right`,n=t?T:C,r=t?E:w,i=t?n:e*n+(e-1)*S,a=t?e*r+(e-1)*S:r,o=Math.max(1,s.width-Q*2),c=Math.max(1,s.height-Q*2),l=s.width>=re&&Z.length>=ie,u=o/i,d=c/a,f=l?Math.min(1,u,d):1;return{contentWidth:i,contentHeight:a,scale:f,scaledWidth:Math.max(1,Math.floor(i*f)),scaledHeight:Math.max(1,Math.floor(a*f))}},[G,Z.length,s.height,s.width,Q]);return r?(0,y.jsx)(D,{$theme:V,children:(0,y.jsx)(O,{$orientation:G,$inset:Q,children:Z.length===0?(0,y.jsx)(P,{$theme:V,children:`No party units found.`}):(0,y.jsx)(ae,{$scaledWidth:$.scaledWidth,$scaledHeight:$.scaledHeight,children:(0,y.jsx)(k,{$contentWidth:$.contentWidth,$contentHeight:$.contentHeight,$scale:$.scale,children:(0,y.jsx)(oe,{$orientation:G,children:Z.map(e=>{let n=H(e),r=e.metadata?.[o.PORTRAIT_URL]||``,i=(t(e)?e.image.url:void 0)||`/logo.png`,a=r||i,s=e.metadata?.[`${g}/${be}`],c=e.metadata?.[`${g}/${xe}`],l=L(s),u=L(c),d=l!==null&&u!==null&&u>0?F(l/u*100,0,100):0,f=e.id===Se;return(0,y.jsxs)(se,{$theme:V,$orientation:G,children:[(0,y.jsx)(le,{$orientation:G,children:(0,y.jsx)(ue,{src:a,alt:n,$theme:V,$orientation:G})}),f&&(0,y.jsx)(ce,{$theme:V}),(0,y.jsxs)(de,{$theme:V,$orientation:G,children:[(0,y.jsx)(fe,{$theme:V,title:n,children:n}),ve&&(0,y.jsx)(pe,{$theme:V,children:(0,y.jsx)(A,{$percent:d})}),ye&&(0,y.jsxs)(j,{$theme:V,children:[`HP: `,l===null?`-`:Math.trunc(l),` / `,u===null?`-`:Math.trunc(u)]}),X.length>0&&(0,y.jsx)(M,{children:X.map(t=>{let n=(t.attr_abbr||t.attr_name||t.attr_bid).trim(),r=e.metadata?.[`com.battle-system.forge/${t.attr_bid}`];return(0,y.jsxs)(N,{$theme:V,children:[n,`: `,me(r,String(t.attr_type||``))]},`${e.id}-${t.attr_bid}`)})})]})]},e.id)})})})})})}):(0,y.jsx)(D,{$theme:V})},H=e=>{let t=e.metadata?.[o.UNIT_NAME];return typeof t==`string`&&t.trim()?t.trim():typeof e.name==`string`&&e.name.trim()?e.name.trim():`Unknown`},U=V;_.createRoot(document.getElementById(`root`)).render((0,y.jsx)(v.StrictMode,{children:(0,y.jsx)(p,{children:(0,y.jsx)(U,{})})}));