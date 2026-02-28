import{E as e,P as t,_ as n,b as r,g as i,h as a,j as o,k as s,m as c,n as l,t as u,v as d,w as f,x as p,y as m}from"./defaultgamesystem-8X0QxZRg.js";import{n as h,t as g}from"./MockData-BtYwoHfq.js";/* empty css               */var _=t(s(),1),v=o(),y=p(),b={CURRENT_THEME:`${m.EXTENSIONID}/CurrentTheme`,CURRENT_ATTR:`${m.EXTENSIONID}/CurrentAttr`},x={primary:u.theme_primary,offset:u.theme_offset,background:u.theme_background,border:u.theme_border,background_url:u.background_url},S=50,ee=75,te=120,C=8,w=190,T=90,E=120,D=150,ne=1024,re=6,O=l.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  pointer-events: none;
`,ie=l.div`
  position: absolute;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: ${e=>`calc(100vw - ${e.$inset*2}px)`};
  max-height: ${e=>`calc(100vh - ${e.$inset*2}px)`};
  ${e=>e.$orientation===`top`?`top: ${e.$inset}px; left: 50%; transform: translateX(-50%);`:e.$orientation===`left`?`left: ${e.$inset}px; top: 50%; transform: translateY(-50%);`:e.$orientation===`right`?`right: ${e.$inset}px; top: 50%; transform: translateY(-50%);`:`bottom: ${e.$inset}px; left: 50%; transform: translateX(-50%);`}
`,ae=l.div`
  width: ${e=>`${e.$scaledWidth}px`};
  height: ${e=>`${e.$scaledHeight}px`};
  overflow: hidden;
`,oe=l.div`
  width: ${e=>`${e.$contentWidth}px`};
  height: ${e=>`${e.$contentHeight}px`};
  transform: ${e=>`scale(${e.$scale})`};
  transform-origin: top left;
`,se=l.div`
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${E}px`:`auto`};
  display: flex;
  gap: ${C}px;
  ${e=>e.$orientation===`left`||e.$orientation===`right`?`flex-direction: column;`:`flex-direction: row;`}
`,ce=l.div`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 10px;
  background: ${e=>c(e.$theme.background,.58)};
  display: flex;
  gap: ${e=>e.$orientation===`left`||e.$orientation===`right`?`6px`:`0`};
  align-items: ${e=>e.$orientation===`left`||e.$orientation===`right`?`flex-start`:`center`};
  flex-direction: ${e=>e.$orientation===`left`||e.$orientation===`right`?`column`:`row`};
  padding: ${e=>e.$orientation===`left`||e.$orientation===`right`?`6px`:`0`};
  box-sizing: border-box;
  backdrop-filter: blur(8px);
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${E}px`:`${w}px`};
  min-width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${E}px`:`${w}px`};
  height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${D}px`:`${T}px`};
  min-height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${D}px`:`${T}px`};
  overflow: hidden;
`,le=l.div`
  position: relative;
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`68px`:`50%`};
  height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`68px`:`100%`};
  min-width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`68px`:`50%`};
  min-height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`68px`:`100%`};
  overflow: hidden;
`,ue=l.img`
  width: 100%;
  height: 100%;
  min-width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: ${e=>e.$orientation===`left`||e.$orientation===`right`?`6px`:`0`};
  object-fit: cover;
  border: none;
  background: ${e=>c(e.$theme.background,.7)};
  -webkit-mask-image: ${e=>e.$orientation===`left`||e.$orientation===`right`?`none`:`linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)`};
  mask-image: ${e=>e.$orientation===`left`||e.$orientation===`right`?`none`:`linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)`};
`,de=l.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$orientation===`left`||e.$orientation===`right`?`4px`:`3px`};
  min-width: 0;
  flex: 1;
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`50%`};
  padding: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`8px`};
  box-sizing: border-box;
  overflow: hidden;
`,fe=l.div`
  color: ${e=>e.$theme.primary};
  font-size: 13px;
  font-weight: 700;
  line-height: 1.1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,pe=l.div`
  width: 100%;
  height: 10px;
  border-radius: 999px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.72)};
  overflow: hidden;
`,k=l.div`
  width: ${e=>`${e.$percent}%`};
  height: 100%;
  background: ${e=>{let t=Math.max(0,Math.min(120,e.$percent*1.2));return`linear-gradient(90deg, hsl(${t} 78% 35%) 0%, hsl(${t} 82% 50%) 100%)`}};
  transition: width 0.2s ease, background 0.2s ease;
`,A=l.div`
  font-size: 10px;
  color: ${e=>c(e.$theme.primary,.9)};
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,j=l.div`
  display: flex;
  gap: 4px;
  flex-wrap: nowrap;
  overflow: hidden;
`,M=l.div`
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
`,N=l.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$theme.primary};
  font-size: 14px;
`,P=(e,t,n)=>Math.max(t,Math.min(n,e)),F=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},I=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},L=e=>e.sceneMetadata,R=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||h.CURRENT_HP,maxHpBid:n?.attr_bid||h.MAX_HP}},z=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,me=(e,t)=>t.toLowerCase()===`bool`?e===!0?`Yes`:e===!1?`No`:`-`:e==null||e===``?`-`:String(e),B=()=>{let[t,r]=(0,v.useState)({sceneMetadata:{},roomMetadata:{},items:[]}),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)(()=>({width:typeof window<`u`?window.innerWidth:1920,height:typeof window<`u`?window.innerHeight:1080})),[d,p]=(0,v.useState)(``),[m,h]=(0,v.useState)(0),_=e=>e.filter(e=>e.metadata?.[i.BOSS_MODE]===!0).length;(0,v.useEffect)(()=>{let e=!0;(async()=>{let[t,n,i,a]=await Promise.all([f.scene.getMetadata(),f.room.getMetadata(),f.scene.items.getItems(),f.player.getId()]);e&&(r({sceneMetadata:t,roomMetadata:n,items:i}),p(a),h(_(i)),s(!0))})();let t=f.scene.onMetadataChange(t=>{e&&r(e=>({...e,sceneMetadata:t}))}),n=f.room.onMetadataChange(t=>{e&&r(e=>({...e,roomMetadata:t}))}),i=f.scene.items.onChange(t=>{e&&(r(e=>({...e,items:t})),h(_(t)))}),a=f.player.onChange(t=>{e&&p(t.id||``)});return()=>{e=!1,t(),n(),i(),a()}},[]),(0,v.useEffect)(()=>{let e=()=>{l({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let B=(0,v.useMemo)(()=>{let e=t.sceneMetadata[b.CURRENT_THEME];return!e?.primary||!e?.offset||!e?.background||!e?.border?x:e},[t.sceneMetadata]),H=(0,v.useMemo)(()=>F(t.sceneMetadata[b.CURRENT_ATTR])||u.attributes,[t.sceneMetadata]),U=(0,v.useMemo)(()=>L(t),[t]),W=(0,v.useMemo)(()=>{let e=U[n(a.PARTY_HUD_ORIENTATION,d)]??U[a.PARTY_HUD_ORIENTATION];return z(e)?e:`bottom`},[U,d]),G=U[a.PARTY_HUD_ATTR_ONE]||``,K=U[a.PARTY_HUD_ATTR_TWO]||``,he=U[a.PARTY_HUD_SHOW_HP_BARS]!==void 0,ge=U[a.PARTY_HUD_SHOW_HP_NUMBERS]!==void 0,q=U[a.PARTY_HUD_SHOW_HP_BARS]===!0,_e=U[a.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!q,J=!he&&!ge,Y=J?!0:q,ve=J?!1:_e,X=(0,v.useMemo)(()=>[G,K].filter((e,t,n)=>e&&n.indexOf(e)===t).map(e=>H.find(t=>t.attr_bid===e)||null).filter(e=>e!==null).filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[H,G,K]),{currentHpBid:ye,maxHpBid:be}=(0,v.useMemo)(()=>{let e=R(H),t=U[a.HP_CURRENT_BID],n=U[a.HP_MAX_BID],r=new Set(H.map(e=>e.attr_bid));return{currentHpBid:t&&r.has(t)?t:e.currentHpBid,maxHpBid:n&&r.has(n)?n:e.maxHpBid}},[H,U]),Z=(0,v.useMemo)(()=>t.items.filter(e=>e.metadata?.[i.IN_PARTY]===!0).sort((e,t)=>{let n=String(V(e)),r=String(V(t));return n.localeCompare(r)}),[t.items]),Q=(0,v.useMemo)(()=>W===`top`?m>=2?te:m===1?ee:S:S,[m,W]),$=(0,v.useMemo)(()=>{let e=Math.max(1,Z.length),t=W===`left`||W===`right`,n=t?E:w,r=t?D:T,i=t?n:e*n+(e-1)*C,a=t?e*r+(e-1)*C:r,o=Math.max(1,c.width-Q*2),s=Math.max(1,c.height-Q*2),l=c.width>=ne&&Z.length>=re,u=o/i,d=s/a,f=l?Math.min(1,u,d):1;return{contentWidth:i,contentHeight:a,scale:f,scaledWidth:Math.max(1,Math.floor(i*f)),scaledHeight:Math.max(1,Math.floor(a*f))}},[W,Z.length,c.height,c.width,Q]);return o?(0,y.jsx)(O,{$theme:B,children:(0,y.jsx)(ie,{$orientation:W,$inset:Q,children:Z.length===0?(0,y.jsx)(N,{$theme:B,children:`No party units found.`}):(0,y.jsx)(ae,{$scaledWidth:$.scaledWidth,$scaledHeight:$.scaledHeight,children:(0,y.jsx)(oe,{$contentWidth:$.contentWidth,$contentHeight:$.contentHeight,$scale:$.scale,children:(0,y.jsx)(se,{$orientation:W,children:Z.map(t=>{let n=V(t),r=t.metadata?.[i.PORTRAIT_URL]||``,a=(e(t)?t.image.url:void 0)||`/logo.png`,o=r||a,s=t.metadata?.[`${g}/${ye}`],c=t.metadata?.[`${g}/${be}`],l=I(s),u=I(c),d=l!==null&&u!==null&&u>0?P(l/u*100,0,100):0;return(0,y.jsxs)(ce,{$theme:B,$orientation:W,children:[(0,y.jsx)(le,{$orientation:W,children:(0,y.jsx)(ue,{src:o,alt:n,$theme:B,$orientation:W})}),(0,y.jsxs)(de,{$orientation:W,children:[(0,y.jsx)(fe,{$theme:B,title:n,children:n}),Y&&(0,y.jsx)(pe,{$theme:B,children:(0,y.jsx)(k,{$percent:d})}),ve&&(0,y.jsxs)(A,{$theme:B,children:[`HP: `,l===null?`-`:Math.trunc(l),` / `,u===null?`-`:Math.trunc(u)]}),X.length>0&&(0,y.jsx)(j,{children:X.map(e=>{let n=(e.attr_abbr||e.attr_name||e.attr_bid).trim(),r=t.metadata?.[`com.battle-system.forge/${e.attr_bid}`];return(0,y.jsxs)(M,{$theme:B,children:[n,`: `,me(r,String(e.attr_type||``))]},`${t.id}-${e.attr_bid}`)})})]})]},t.id)})})})})})}):(0,y.jsx)(O,{$theme:B})},V=e=>{let t=e.metadata?.[i.UNIT_NAME];return typeof t==`string`&&t.trim()?t.trim():typeof e.name==`string`&&e.name.trim()?e.name.trim():`Unknown`},H=B;_.createRoot(document.getElementById(`root`)).render((0,y.jsx)(v.StrictMode,{children:(0,y.jsx)(r,{children:(0,y.jsx)(H,{})})}));