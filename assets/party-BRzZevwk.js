import{C as e,M as t,O as n,T as r,_ as i,b as a,g as o,h as s,k as c,m as l,n as u,t as d,v as f,y as p}from"./defaultgamesystem-DmoR38xX.js";import{n as m,t as h}from"./MockData-BtYwoHfq.js";/* empty css               */var g=t(n(),1),_=c(),v=a(),y={CURRENT_THEME:`${f.EXTENSIONID}/CurrentTheme`,CURRENT_ATTR:`${f.EXTENSIONID}/CurrentAttr`},b={primary:d.theme_primary,offset:d.theme_offset,background:d.theme_background,border:d.theme_border,background_url:d.background_url},x=50,S=8,C=190,w=90,T=120,E=150,D=1024,O=6,k=u.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  pointer-events: none;
`,ee=u.div`
  position: absolute;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: calc(100vw - ${x*2}px);
  max-height: calc(100vh - ${x*2}px);
  ${e=>e.$orientation===`top`?`top: ${x}px; left: 50%; transform: translateX(-50%);`:e.$orientation===`left`?`left: ${x}px; top: 50%; transform: translateY(-50%);`:e.$orientation===`right`?`right: ${x}px; top: 50%; transform: translateY(-50%);`:`bottom: ${x}px; left: 50%; transform: translateX(-50%);`}
`,te=u.div`
  width: ${e=>`${e.$scaledWidth}px`};
  height: ${e=>`${e.$scaledHeight}px`};
  overflow: hidden;
`,ne=u.div`
  width: ${e=>`${e.$contentWidth}px`};
  height: ${e=>`${e.$contentHeight}px`};
  transform: ${e=>`scale(${e.$scale})`};
  transform-origin: top left;
`,re=u.div`
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${T}px`:`auto`};
  display: flex;
  gap: ${S}px;
  ${e=>e.$orientation===`left`||e.$orientation===`right`?`flex-direction: column;`:`flex-direction: row;`}
`,ie=u.div`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 10px;
  background: ${e=>l(e.$theme.background,.58)};
  display: flex;
  gap: ${e=>e.$orientation===`left`||e.$orientation===`right`?`6px`:`0`};
  align-items: ${e=>e.$orientation===`left`||e.$orientation===`right`?`flex-start`:`center`};
  flex-direction: ${e=>e.$orientation===`left`||e.$orientation===`right`?`column`:`row`};
  padding: ${e=>e.$orientation===`left`||e.$orientation===`right`?`6px`:`0`};
  box-sizing: border-box;
  backdrop-filter: blur(8px);
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${T}px`:`${C}px`};
  min-width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${T}px`:`${C}px`};
  height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${E}px`:`${w}px`};
  min-height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${E}px`:`${w}px`};
  overflow: hidden;
`,ae=u.div`
  position: relative;
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`68px`:`50%`};
  height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`68px`:`100%`};
  min-width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`68px`:`50%`};
  min-height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`68px`:`100%`};
  overflow: hidden;
`,oe=u.img`
  width: 100%;
  height: 100%;
  min-width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: ${e=>e.$orientation===`left`||e.$orientation===`right`?`6px`:`0`};
  object-fit: cover;
  border: none;
  background: ${e=>l(e.$theme.background,.7)};
  -webkit-mask-image: ${e=>e.$orientation===`left`||e.$orientation===`right`?`none`:`linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)`};
  mask-image: ${e=>e.$orientation===`left`||e.$orientation===`right`?`none`:`linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)`};
`,A=u.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$orientation===`left`||e.$orientation===`right`?`4px`:`3px`};
  min-width: 0;
  flex: 1;
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`50%`};
  padding: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`8px`};
  box-sizing: border-box;
  overflow: hidden;
`,j=u.div`
  color: ${e=>e.$theme.primary};
  font-size: 13px;
  font-weight: 700;
  line-height: 1.1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,M=u.div`
  width: 100%;
  height: 10px;
  border-radius: 999px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>l(e.$theme.background,.72)};
  overflow: hidden;
`,N=u.div`
  width: ${e=>`${e.$percent}%`};
  height: 100%;
  background: ${e=>{let t=Math.max(0,Math.min(120,e.$percent*1.2));return`linear-gradient(90deg, hsl(${t} 78% 35%) 0%, hsl(${t} 82% 50%) 100%)`}};
  transition: width 0.2s ease, background 0.2s ease;
`,P=u.div`
  font-size: 10px;
  color: ${e=>l(e.$theme.primary,.9)};
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,F=u.div`
  display: flex;
  gap: 4px;
  flex-wrap: nowrap;
  overflow: hidden;
`,I=u.div`
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
`,L=u.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$theme.primary};
  font-size: 14px;
`,R=(e,t,n)=>Math.max(t,Math.min(n,e)),z=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},B=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},V=e=>e.sceneMetadata,H=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||m.CURRENT_HP,maxHpBid:n?.attr_bid||m.MAX_HP}},U=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,W=(e,t)=>t.toLowerCase()===`bool`?e===!0?`Yes`:e===!1?`No`:`-`:e==null||e===``?`-`:String(e),G=()=>{let[t,n]=(0,_.useState)({sceneMetadata:{},roomMetadata:{},items:[]}),[i,a]=(0,_.useState)(!1),[c,l]=(0,_.useState)(()=>({width:typeof window<`u`?window.innerWidth:1920,height:typeof window<`u`?window.innerHeight:1080}));(0,_.useEffect)(()=>{let t=!0;(async()=>{let[r,i,o]=await Promise.all([e.scene.getMetadata(),e.room.getMetadata(),e.scene.items.getItems()]);t&&(n({sceneMetadata:r,roomMetadata:i,items:o}),a(!0))})();let r=e.scene.onMetadataChange(e=>{t&&n(t=>({...t,sceneMetadata:e}))}),i=e.room.onMetadataChange(e=>{t&&n(t=>({...t,roomMetadata:e}))}),o=e.scene.items.onChange(e=>{t&&n(t=>({...t,items:e}))});return()=>{t=!1,r(),i(),o()}},[]),(0,_.useEffect)(()=>{let e=()=>{l({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let u=(0,_.useMemo)(()=>{let e=t.sceneMetadata[y.CURRENT_THEME];return!e?.primary||!e?.offset||!e?.background||!e?.border?b:e},[t.sceneMetadata]),f=(0,_.useMemo)(()=>z(t.sceneMetadata[y.CURRENT_ATTR])||d.attributes,[t.sceneMetadata]),p=(0,_.useMemo)(()=>V(t),[t]),m=(0,_.useMemo)(()=>{let e=p[s.PARTY_HUD_ORIENTATION];return U(e)?e:`bottom`},[p]),g=p[s.PARTY_HUD_ATTR_ONE]||``,G=p[s.PARTY_HUD_ATTR_TWO]||``,q=p[s.PARTY_HUD_SHOW_HP_BARS]!==void 0,se=p[s.PARTY_HUD_SHOW_HP_NUMBERS]!==void 0,J=p[s.PARTY_HUD_SHOW_HP_BARS]===!0,ce=p[s.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!J,Y=!q&&!se,le=Y?!0:J,ue=Y?!1:ce,X=(0,_.useMemo)(()=>[g,G].filter((e,t,n)=>e&&n.indexOf(e)===t).map(e=>f.find(t=>t.attr_bid===e)||null).filter(e=>e!==null).filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[f,g,G]),{currentHpBid:de,maxHpBid:Z}=(0,_.useMemo)(()=>{let e=H(f),t=p[s.HP_CURRENT_BID],n=p[s.HP_MAX_BID],r=new Set(f.map(e=>e.attr_bid));return{currentHpBid:t&&r.has(t)?t:e.currentHpBid,maxHpBid:n&&r.has(n)?n:e.maxHpBid}},[f,p]),Q=(0,_.useMemo)(()=>t.items.filter(e=>e.metadata?.[o.IN_PARTY]===!0).sort((e,t)=>{let n=String(K(e)),r=String(K(t));return n.localeCompare(r)}),[t.items]),$=(0,_.useMemo)(()=>{let e=Math.max(1,Q.length),t=m===`left`||m===`right`,n=t?T:C,r=t?E:w,i=t?n:e*n+(e-1)*S,a=t?e*r+(e-1)*S:r,o=Math.max(1,c.width-x*2),s=Math.max(1,c.height-x*2),l=c.width>=D&&Q.length>=O,u=o/i,d=s/a,f=l?Math.min(1,u,d):1;return{contentWidth:i,contentHeight:a,scale:f,scaledWidth:Math.max(1,Math.floor(i*f)),scaledHeight:Math.max(1,Math.floor(a*f))}},[m,Q.length,c.height,c.width]);return i?(0,v.jsx)(k,{$theme:u,children:(0,v.jsx)(ee,{$orientation:m,children:Q.length===0?(0,v.jsx)(L,{$theme:u,children:`No party units found.`}):(0,v.jsx)(te,{$scaledWidth:$.scaledWidth,$scaledHeight:$.scaledHeight,children:(0,v.jsx)(ne,{$contentWidth:$.contentWidth,$contentHeight:$.contentHeight,$scale:$.scale,children:(0,v.jsx)(re,{$orientation:m,children:Q.map(e=>{let t=K(e),n=e.metadata?.[o.PORTRAIT_URL]||``,i=(r(e)?e.image.url:void 0)||`/logo.png`,a=n||i,s=e.metadata?.[`${h}/${de}`],c=e.metadata?.[`${h}/${Z}`],l=B(s),d=B(c),f=l!==null&&d!==null&&d>0?R(l/d*100,0,100):0;return(0,v.jsxs)(ie,{$theme:u,$orientation:m,children:[(0,v.jsx)(ae,{$orientation:m,children:(0,v.jsx)(oe,{src:a,alt:t,$theme:u,$orientation:m})}),(0,v.jsxs)(A,{$orientation:m,children:[(0,v.jsx)(j,{$theme:u,title:t,children:t}),le&&(0,v.jsx)(M,{$theme:u,children:(0,v.jsx)(N,{$percent:f})}),ue&&(0,v.jsxs)(P,{$theme:u,children:[`HP: `,l===null?`-`:Math.trunc(l),` / `,d===null?`-`:Math.trunc(d)]}),X.length>0&&(0,v.jsx)(F,{children:X.map(t=>{let n=(t.attr_abbr||t.attr_name||t.attr_bid).trim(),r=e.metadata?.[`com.battle-system.forge/${t.attr_bid}`];return(0,v.jsxs)(I,{$theme:u,children:[n,`: `,W(r,String(t.attr_type||``))]},`${e.id}-${t.attr_bid}`)})})]})]},e.id)})})})})})}):(0,v.jsx)(k,{$theme:u})},K=e=>{let t=e.metadata?.[o.UNIT_NAME];return typeof t==`string`&&t.trim()?t.trim():typeof e.name==`string`&&e.name.trim()?e.name.trim():`Unknown`},q=G;g.createRoot(document.getElementById(`root`)).render((0,v.jsx)(_.StrictMode,{children:(0,v.jsx)(p,{children:(0,v.jsx)(q,{})})}));