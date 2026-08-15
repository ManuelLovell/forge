import{c as e,u as t}from"./tslib.es6-B50zIwoW.js";import{f as n,m as r,p as i,t as a}from"./styled-components.browser.esm-DHy5LH3R.js";import{t as o}from"./Constants-BX77kWGP.js";import{i as s,n as c,r as l}from"./MetadataKeys-B7ws-e14.js";import"./Logger-DX4jZ06e.js";import{t as u}from"./Translation-D3JFL327.js";import"./forgeMetrics-DtV4y_UX.js";import{f as d,l as f,n as p,t as ee,u as m}from"./main-BeYt6vd0.js";import{a as h,i as te}from"./SharedStyledComponents-HzYeKBVa.js";import{t as g}from"./useSystemData-I3PHIu-Y.js";import{t as _}from"./ToggleControl-BgtFyAWA.js";var v=r(),y=i(),b=`forge:party_save`,ne=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,x=a.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>n(e.theme.BACKGROUND,.35)};
`,S=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`,C=a(S)`
  justify-content: center;
`,re=a.span`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: ${e=>n(e.theme.PRIMARY,.9)};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`,w=a.button`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>n(e.theme.OFFSET,.45)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,T=a.select`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>n(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px;
  min-width: 160px;
`,ie=a.p`
  margin: 0;
  font-size: 12px;
  color: ${e=>n(e.theme.PRIMARY,.8)};
`,E=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${e=>e.$disabled?.55:1};
`,D=a.span`
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
`,O=a.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>n(e.theme.BACKGROUND,.35)};
`,k=a.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
`,A=a.img`
  width: ${e=>e.$full?`100%`:`40px`};
  height: ${e=>e.$full?`100%`:`40px`};
  min-width: ${e=>e.$full?`100%`:`40px`};
  position: absolute;
  left: ${e=>e.$overlay?`20px`:`0`};
  top: ${e=>e.$overlay?`20px`:`0`};
  object-fit: cover;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>n(e.theme.BACKGROUND,.6)};
`,j=a.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,ae=a.span`
  color: ${e=>e.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,oe=a.input`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>n(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
`,se=a.p`
  color: ${e=>e.theme.PRIMARY};
  margin: 0;
`,ce=a.span`
  display: block;
  font-size: 10px;
  color: ${e=>n(e.theme.PRIMARY,.55)};
  text-align: center;
  margin-top: 4px;
`,le=e=>{switch(e){case`bottom`:return`left`;case`left`:return`top`;case`top`:return`right`;case`right`:default:return`bottom`}},ue=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,M=e=>e===`default`||e===`plate`||e===`tech`||e===`deco`,de=e=>e===`deco`?`plate`:e===`tech`?`tech`:e===`plate`?`plate`:`default`;const N=()=>{let n=(0,v.useRef)(!1),[r,i]=(0,v.useState)(null),{theme:a}=m(),{t:o}=u(),{attributes:N}=g(),P=d(e=>e.items);d(e=>e.sceneMetadata);let F=d(e=>e.roomMetadata),I=d(e=>e.playerData),L=F,R=String(I?.role||``).toUpperCase()===`GM`,z=I?.id,B=s(c.PARTY_HUD_OPEN,z),V=s(c.PARTY_HUD_ORIENTATION,z),H=(L[B]??L[c.PARTY_HUD_OPEN])===!0,U=L[V]??L[c.PARTY_HUD_ORIENTATION],W=ue(U)?U:`bottom`,G=L[c.PARTY_HUD_ATTR_ONE]||``,K=L[c.PARTY_HUD_ATTR_TWO]||``,q=L[c.PARTY_HUD_SHOW_HP_BARS]===!0,fe=L[c.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!q,J=L[c.PARTY_HUD_BORDER_STYLE],pe=M(J)?de(J):`default`,Y=P.filter(e=>e.metadata[l.IN_PARTY]===!0),me=o(`common.orientation.${W}`);(0,v.useEffect)(()=>{try{let e=localStorage.getItem(b);e&&i(JSON.parse(e).savedAt??null)}catch{}},[]);let he=()=>{let e={savedAt:new Date().toISOString(),items:Y};localStorage.setItem(b,JSON.stringify(e)),i(e.savedAt)},X=async()=>{let t=localStorage.getItem(b);if(t)try{let n=JSON.parse(t);if(!n.items.length)return;let r=new Set(n.items.map(e=>e.id)),i=P.filter(e=>r.has(e.id)).map(e=>e.id);i.length>0&&await e.scene.items.deleteItems(i);let[a,o]=await Promise.all([e.viewport.getWidth(),e.viewport.getHeight()]),s={x:a*.75,y:o*.6},c=await e.viewport.inverseTransformPoint(s),l={x:s.x-75,y:s.y-75},u=await e.viewport.inverseTransformPoint(l),d=u.x-c.x,f=u.y-c.y,p=n.items.map((e,t)=>({...e,position:{x:c.x+d*t,y:c.y+f*t}}));await e.scene.items.addItems(p)}catch{}},Z=(0,v.useMemo)(()=>N.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[N]),Q=async(t,n)=>{await e.room.setMetadata({[t]:n})},$=async t=>{await e.room.setMetadata(t)},ge=async()=>{let e=!H;if(await Q(B,e),!e){await ee(),n.current=!1;return}await p(),n.current=!0},_e=async()=>{await Q(V,le(W))},ve=async(t,n)=>{let r=n.trim();await e.scene.items.updateItems([t],e=>{let t={...e[0].metadata||{}};r?t[l.PORTRAIT_URL]=r:delete t[l.PORTRAIT_URL],e[0].metadata=t})};return(0,y.jsx)(f.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,y.jsxs)(te,{theme:a,children:[(0,y.jsx)(h,{theme:a,children:o(`party.pageTitle`)}),(0,y.jsxs)(x,{theme:a,children:[(0,y.jsxs)(S,{children:[(0,y.jsx)(w,{theme:a,onClick:()=>void _e(),children:o(`party.display`,{orientation:me})}),(0,y.jsx)(w,{theme:a,onClick:()=>void ge(),children:o(H?`party.closeHud`:`party.openHud`)})]}),R&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(C,{children:[(0,y.jsx)(re,{theme:a,children:o(`party.showInHud`)}),(0,y.jsxs)(E,{$disabled:!R,children:[(0,y.jsx)(D,{theme:a,children:o(`party.showHpBars`)}),(0,y.jsx)(_,{label:o(`party.toggleHpBarsLabel`),isOn:q,onChange:e=>{if(R){if(e){$({[c.PARTY_HUD_SHOW_HP_BARS]:!0,[c.PARTY_HUD_SHOW_HP_NUMBERS]:!1});return}Q(c.PARTY_HUD_SHOW_HP_BARS,!1)}}})]}),(0,y.jsxs)(E,{$disabled:!R,children:[(0,y.jsx)(D,{theme:a,children:o(`party.showHpNumbers`)}),(0,y.jsx)(_,{label:o(`party.toggleHpNumbersLabel`),isOn:fe,onChange:e=>{if(R){if(e){$({[c.PARTY_HUD_SHOW_HP_NUMBERS]:!0,[c.PARTY_HUD_SHOW_HP_BARS]:!1});return}Q(c.PARTY_HUD_SHOW_HP_NUMBERS,!1)}}})]}),(0,y.jsxs)(T,{theme:a,disabled:!R,value:G,onChange:e=>{let t=e.target.value;Q(c.PARTY_HUD_ATTR_ONE,t),t&&t===K&&Q(c.PARTY_HUD_ATTR_TWO,``)},children:[(0,y.jsx)(`option`,{value:``,children:o(`party.extraSlotNone`,{slot:1})}),Z.map(e=>(0,y.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,y.jsxs)(T,{theme:a,disabled:!R,value:K,onChange:e=>{let t=e.target.value;Q(c.PARTY_HUD_ATTR_TWO,t),t&&t===G&&Q(c.PARTY_HUD_ATTR_ONE,``)},children:[(0,y.jsx)(`option`,{value:``,children:o(`party.extraSlotNone`,{slot:2})}),Z.map(e=>(0,y.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,y.jsxs)(T,{theme:a,disabled:!R,value:pe,onChange:e=>{let t=e.target.value;M(t)&&Q(c.PARTY_HUD_BORDER_STYLE,t)},children:[(0,y.jsx)(`option`,{value:`default`,children:o(`party.portraitBorderDefault`)}),(0,y.jsx)(`option`,{value:`plate`,children:o(`party.portraitBorderPlate`)}),(0,y.jsx)(`option`,{value:`tech`,children:o(`party.portraitBorderTech`)})]})]}),(0,y.jsx)(ie,{theme:a,children:(0,y.jsxs)(y.Fragment,{children:[o(`party.configureHint`),(0,y.jsx)(`br`,{}),o(`party.listAttributesExcluded`)]})})]})]}),R&&(0,y.jsxs)(x,{theme:a,children:[(0,y.jsxs)(C,{children:[(0,y.jsx)(w,{theme:a,onClick:he,disabled:Y.length===0,children:o(`party.saveParty`)}),(0,y.jsx)(w,{theme:a,onClick:()=>void X(),disabled:r===null,children:o(`party.loadParty`)})]}),(0,y.jsx)(ce,{theme:a,children:r?o(`party.lastSaved`,{value:new Date(r).toLocaleString()}):o(`party.noSaveAvailable`)})]}),Y.length===0?(0,y.jsx)(se,{theme:a,children:o(`party.emptyState`)}):(0,y.jsx)(ne,{theme:a,children:Y.map(e=>{let n=e.metadata?.[l.PORTRAIT_URL]||``,r=t(e)?e.image.url:void 0,i=e.metadata[l.UNIT_NAME]||e.name||o(`party.unknownUnit`),s=e.createdUserId===I?.id,c=R||s,u=r||`/logo.png`,d=!!n;return(0,y.jsxs)(O,{theme:a,children:[(0,y.jsxs)(k,{children:[(0,y.jsx)(A,{theme:a,src:u,alt:i,$full:!d}),d&&(0,y.jsx)(A,{theme:a,src:d?n:``,alt:o(`party.overrideAlt`,{unit:i}),$overlay:!0})]}),(0,y.jsxs)(j,{children:[(0,y.jsx)(ae,{theme:a,title:i,children:i}),c&&(0,y.jsx)(oe,{theme:a,defaultValue:n,placeholder:o(`party.portraitUrlPlaceholder`),onBlur:t=>{ve(e.id,t.target.value)}})]})]},e.id)})})]})})};export{N as PartyPage};