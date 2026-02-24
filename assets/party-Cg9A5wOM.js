import{D as e,O as t,S as n,_ as r,g as i,h as a,j as o,m as s,n as c,t as l,v as u,w as d,y as f}from"./defaultgamesystem-B_zMkBSd.js";import{n as p,t as m}from"./MockData-BtYwoHfq.js";/* empty css               */var h=o(e(),1),g=t(),_=f(),v={CURRENT_THEME:`${u.EXTENSIONID}/CurrentTheme`,CURRENT_ATTR:`${u.EXTENSIONID}/CurrentAttr`},y={primary:l.theme_primary,offset:l.theme_offset,background:l.theme_background,border:l.theme_border,background_url:l.background_url},b=50,x=8,S=190,C=90,w=120,T=150,E=1024,D=6,O=c.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  pointer-events: none;
`,k=c.div`
  position: absolute;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: calc(100vw - ${b*2}px);
  max-height: calc(100vh - ${b*2}px);
  ${e=>e.$orientation===`top`?`top: ${b}px; left: 50%; transform: translateX(-50%);`:e.$orientation===`left`?`left: ${b}px; top: 50%; transform: translateY(-50%);`:e.$orientation===`right`?`right: ${b}px; top: 50%; transform: translateY(-50%);`:`bottom: ${b}px; left: 50%; transform: translateX(-50%);`}
`,ee=c.div`
  width: ${e=>`${e.$scaledWidth}px`};
  height: ${e=>`${e.$scaledHeight}px`};
  overflow: hidden;
`,te=c.div`
  width: ${e=>`${e.$contentWidth}px`};
  height: ${e=>`${e.$contentHeight}px`};
  transform: ${e=>`scale(${e.$scale})`};
  transform-origin: top left;
`,ne=c.div`
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${w}px`:`auto`};
  display: flex;
  gap: ${x}px;
  ${e=>e.$orientation===`left`||e.$orientation===`right`?`flex-direction: column;`:`flex-direction: row;`}
`,re=c.div`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 10px;
  background: ${e=>s(e.$theme.background,.58)};
  display: flex;
  gap: ${e=>e.$orientation===`left`||e.$orientation===`right`?`6px`:`0`};
  align-items: ${e=>e.$orientation===`left`||e.$orientation===`right`?`flex-start`:`center`};
  flex-direction: ${e=>e.$orientation===`left`||e.$orientation===`right`?`column`:`row`};
  padding: ${e=>e.$orientation===`left`||e.$orientation===`right`?`6px`:`0`};
  box-sizing: border-box;
  backdrop-filter: blur(8px);
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${w}px`:`${S}px`};
  min-width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${w}px`:`${S}px`};
  height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${T}px`:`${C}px`};
  min-height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`${T}px`:`${C}px`};
  overflow: hidden;
`,ie=c.div`
  position: relative;
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`68px`:`50%`};
  height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`68px`:`100%`};
  min-width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`68px`:`50%`};
  min-height: ${e=>e.$orientation===`left`||e.$orientation===`right`?`68px`:`100%`};
  overflow: hidden;
`,ae=c.img`
  width: 100%;
  height: 100%;
  min-width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: ${e=>e.$orientation===`left`||e.$orientation===`right`?`6px`:`0`};
  object-fit: cover;
  border: none;
  background: ${e=>s(e.$theme.background,.7)};
  -webkit-mask-image: ${e=>e.$orientation===`left`||e.$orientation===`right`?`none`:`linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)`};
  mask-image: ${e=>e.$orientation===`left`||e.$orientation===`right`?`none`:`linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0) 100%)`};
`,A=c.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$orientation===`left`||e.$orientation===`right`?`4px`:`3px`};
  min-width: 0;
  flex: 1;
  width: ${e=>e.$orientation===`left`||e.$orientation===`right`?`100%`:`50%`};
  padding: ${e=>e.$orientation===`left`||e.$orientation===`right`?`0`:`8px`};
  box-sizing: border-box;
  overflow: hidden;
`,j=c.div`
  color: ${e=>e.$theme.primary};
  font-size: 13px;
  font-weight: 700;
  line-height: 1.1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,M=c.div`
  width: 100%;
  height: 10px;
  border-radius: 999px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.72)};
  overflow: hidden;
`,N=c.div`
  width: ${e=>`${e.$percent}%`};
  height: 100%;
  background: ${e=>{let t=Math.max(0,Math.min(120,e.$percent*1.2));return`linear-gradient(90deg, hsl(${t} 78% 35%) 0%, hsl(${t} 82% 50%) 100%)`}};
  transition: width 0.2s ease, background 0.2s ease;
`,P=c.div`
  font-size: 10px;
  color: ${e=>s(e.$theme.primary,.9)};
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,F=c.div`
  display: flex;
  gap: 4px;
  flex-wrap: nowrap;
  overflow: hidden;
`,I=c.div`
  border: 1px solid ${e=>e.$theme.border};
  border-radius: 999px;
  background: ${e=>s(e.$theme.background,.6)};
  color: ${e=>e.$theme.primary};
  font-size: 10px;
  padding: 1px 6px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,L=c.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$theme.primary};
  font-size: 14px;
`,R=(e,t,n)=>Math.max(t,Math.min(n,e)),z=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},B=e=>{if(typeof e==`number`&&Number.isFinite(e))return e;if(typeof e==`string`){let t=parseFloat(e);return Number.isFinite(t)?t:null}return null},V=e=>e.sceneMetadata,H=e=>{let t=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`HP`||n===`hit points`}),n=e.find(e=>{let t=(e.attr_abbr||``).toUpperCase(),n=(e.attr_name||``).toLowerCase();return t===`MHP`||n===`max hit points`});return{currentHpBid:t?.attr_bid||p.CURRENT_HP,maxHpBid:n?.attr_bid||p.MAX_HP}},U=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,W=(e,t)=>t.toLowerCase()===`bool`?e===!0?`Yes`:e===!1?`No`:`-`:e==null||e===``?`-`:String(e),G=()=>{let[e,t]=(0,g.useState)({sceneMetadata:{},roomMetadata:{},items:[]}),[r,o]=(0,g.useState)(!1),[s,c]=(0,g.useState)(()=>({width:typeof window<`u`?window.innerWidth:1920,height:typeof window<`u`?window.innerHeight:1080}));(0,g.useEffect)(()=>{let e=!0;(async()=>{let[r,i,a]=await Promise.all([n.scene.getMetadata(),n.room.getMetadata(),n.scene.items.getItems()]);e&&(t({sceneMetadata:r,roomMetadata:i,items:a}),o(!0))})();let r=n.scene.onMetadataChange(n=>{e&&t(e=>({...e,sceneMetadata:n}))}),i=n.room.onMetadataChange(n=>{e&&t(e=>({...e,roomMetadata:n}))}),a=n.scene.items.onChange(n=>{e&&t(e=>({...e,items:n}))});return()=>{e=!1,r(),i(),a()}},[]),(0,g.useEffect)(()=>{let e=()=>{c({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let u=(0,g.useMemo)(()=>{let t=e.sceneMetadata[v.CURRENT_THEME];return!t?.primary||!t?.offset||!t?.background||!t?.border?y:t},[e.sceneMetadata]),f=(0,g.useMemo)(()=>z(e.sceneMetadata[v.CURRENT_ATTR])||l.attributes,[e.sceneMetadata]),p=(0,g.useMemo)(()=>V(e),[e]),h=(0,g.useMemo)(()=>{let e=p[a.PARTY_HUD_ORIENTATION];return U(e)?e:`bottom`},[p]),G=p[a.PARTY_HUD_ATTR_ONE]||``,q=p[a.PARTY_HUD_ATTR_TWO]||``,oe=p[a.PARTY_HUD_SHOW_HP_BARS]!==void 0,se=p[a.PARTY_HUD_SHOW_HP_NUMBERS]!==void 0,J=p[a.PARTY_HUD_SHOW_HP_BARS]===!0,ce=p[a.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!J,Y=!oe&&!se,le=Y?!0:J,ue=Y?!1:ce,X=(0,g.useMemo)(()=>[G,q].filter((e,t,n)=>e&&n.indexOf(e)===t).map(e=>f.find(t=>t.attr_bid===e)||null).filter(e=>e!==null).filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[f,G,q]),{currentHpBid:de,maxHpBid:Z}=(0,g.useMemo)(()=>{let e=H(f),t=p[a.HP_CURRENT_BID],n=p[a.HP_MAX_BID],r=new Set(f.map(e=>e.attr_bid));return{currentHpBid:t&&r.has(t)?t:e.currentHpBid,maxHpBid:n&&r.has(n)?n:e.maxHpBid}},[f,p]),Q=(0,g.useMemo)(()=>e.items.filter(e=>e.metadata?.[i.IN_PARTY]===!0).sort((e,t)=>{let n=String(K(e)),r=String(K(t));return n.localeCompare(r)}),[e.items]),$=(0,g.useMemo)(()=>{let e=Math.max(1,Q.length),t=h===`left`||h===`right`,n=t?w:S,r=t?T:C,i=t?n:e*n+(e-1)*x,a=t?e*r+(e-1)*x:r,o=Math.max(1,s.width-b*2),c=Math.max(1,s.height-b*2),l=s.width>=E&&Q.length>=D,u=o/i,d=c/a,f=l?Math.min(1,u,d):1;return{contentWidth:i,contentHeight:a,scale:f,scaledWidth:Math.max(1,Math.floor(i*f)),scaledHeight:Math.max(1,Math.floor(a*f))}},[h,Q.length,s.height,s.width]);return r?(0,_.jsx)(O,{$theme:u,children:(0,_.jsx)(k,{$orientation:h,children:Q.length===0?(0,_.jsx)(L,{$theme:u,children:`No party units found.`}):(0,_.jsx)(ee,{$scaledWidth:$.scaledWidth,$scaledHeight:$.scaledHeight,children:(0,_.jsx)(te,{$contentWidth:$.contentWidth,$contentHeight:$.contentHeight,$scale:$.scale,children:(0,_.jsx)(ne,{$orientation:h,children:Q.map(e=>{let t=K(e),n=e.metadata?.[i.PORTRAIT_URL]||``,r=(d(e)?e.image.url:void 0)||`/logo.png`,a=n||r,o=e.metadata?.[`${m}/${de}`],s=e.metadata?.[`${m}/${Z}`],c=B(o),l=B(s),f=c!==null&&l!==null&&l>0?R(c/l*100,0,100):0;return(0,_.jsxs)(re,{$theme:u,$orientation:h,children:[(0,_.jsx)(ie,{$orientation:h,children:(0,_.jsx)(ae,{src:a,alt:t,$theme:u,$orientation:h})}),(0,_.jsxs)(A,{$orientation:h,children:[(0,_.jsx)(j,{$theme:u,title:t,children:t}),le&&(0,_.jsx)(M,{$theme:u,children:(0,_.jsx)(N,{$percent:f})}),ue&&(0,_.jsxs)(P,{$theme:u,children:[`HP: `,c===null?`-`:Math.trunc(c),` / `,l===null?`-`:Math.trunc(l)]}),X.length>0&&(0,_.jsx)(F,{children:X.map(t=>{let n=(t.attr_abbr||t.attr_name||t.attr_bid).trim(),r=e.metadata?.[`com.battle-system.forge/${t.attr_bid}`];return(0,_.jsxs)(I,{$theme:u,children:[n,`: `,W(r,String(t.attr_type||``))]},`${e.id}-${t.attr_bid}`)})})]})]},e.id)})})})})})}):(0,_.jsx)(O,{$theme:u})},K=e=>{let t=e.metadata?.[i.UNIT_NAME];return typeof t==`string`&&t.trim()?t.trim():typeof e.name==`string`&&e.name.trim()?e.name.trim():`Unknown`},q=G;h.createRoot(document.getElementById(`root`)).render((0,_.jsx)(g.StrictMode,{children:(0,_.jsx)(q,{})}));