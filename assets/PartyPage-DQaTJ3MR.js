import"./tslib.es6-C783ynKN.js";import{S as e,_ as t,f as n,p as r,t as i,y as a}from"./styled-components.browser.esm-UVFsQtUm.js";import{t as o}from"./Constants-vXYz8c6e.js";import{i as s,n as c,r as l}from"./MetadataKeys-DpE2-j4V.js";import"./Logger-C94eKphQ.js";import{t as u}from"./Translation-K1AcF_l-.js";import{f as d,l as f,n as p,t as m,u as h}from"./main-CcbaRnw4.js";import{a as ee,i as g}from"./SharedStyledComponents-D81OPnYe.js";import{t as _}from"./useSystemData-AVwmkuhU.js";import{t as v}from"./ToggleControl-gLrCxV4L.js";var y=e(),b=r(),x=`forge:party_save`,S=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,C=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.BORDER};
  background: ${e=>n(e.theme.BACKGROUND,.35)};
`,w=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`,T=i(w)`
  justify-content: center;
`,te=i.span`
  display: block;
  flex-basis: 100%;
  width: 100%;
  color: ${e=>n(e.theme.PRIMARY,.9)};
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`,E=i.button`
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
`,D=i.select`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>n(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 8px;
  min-width: 160px;
`,ne=i.p`
  margin: 0;
  font-size: 12px;
  color: ${e=>n(e.theme.PRIMARY,.8)};
`,O=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${e=>e.$disabled?.55:1};
`,k=i.span`
  color: ${e=>e.theme.PRIMARY};
  font-size: 12px;
`,A=i.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${e=>e.theme.BORDER};
  background-color: ${e=>n(e.theme.BACKGROUND,.35)};
`,j=i.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
`,M=i.img`
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
`,re=i.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-width: 0;
`,ie=i.span`
  color: ${e=>e.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,ae=i.input`
  border: 1px solid ${e=>e.theme.BORDER};
  border-radius: 6px;
  background: ${e=>n(e.theme.BACKGROUND,.55)};
  color: ${e=>e.theme.PRIMARY};
  padding: 6px 8px;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
`,oe=i.p`
  color: ${e=>e.theme.PRIMARY};
  margin: 0;
`,se=i.span`
  display: block;
  font-size: 10px;
  color: ${e=>n(e.theme.PRIMARY,.55)};
  text-align: center;
  margin-top: 4px;
`,ce=e=>{switch(e){case`bottom`:return`left`;case`left`:return`top`;case`top`:return`right`;case`right`:default:return`bottom`}},le=e=>e===`bottom`||e===`left`||e===`top`||e===`right`,N=e=>e===`default`||e===`plate`||e===`tech`||e===`deco`,ue=e=>e===`deco`?`plate`:e===`tech`?`tech`:e===`plate`?`plate`:`default`;const P=()=>{let e=(0,y.useRef)(!1),[n,r]=(0,y.useState)(null),{theme:i}=h(),{t:o}=u(),{attributes:P}=_(),F=d(e=>e.items);d(e=>e.sceneMetadata);let I=d(e=>e.roomMetadata),L=d(e=>e.playerData),R=I,z=String(L?.role||``).toUpperCase()===`GM`,B=L?.id,V=s(c.PARTY_HUD_OPEN,B),H=s(c.PARTY_HUD_ORIENTATION,B),U=(R[V]??R[c.PARTY_HUD_OPEN])===!0,W=R[H]??R[c.PARTY_HUD_ORIENTATION],G=le(W)?W:`bottom`,K=R[c.PARTY_HUD_ATTR_ONE]||``,q=R[c.PARTY_HUD_ATTR_TWO]||``,J=R[c.PARTY_HUD_SHOW_HP_BARS]===!0,de=R[c.PARTY_HUD_SHOW_HP_NUMBERS]===!0&&!J,Y=R[c.PARTY_HUD_BORDER_STYLE],fe=N(Y)?ue(Y):`default`,X=F.filter(e=>e.metadata[l.IN_PARTY]===!0),pe=o(`common.orientation.${G}`);(0,y.useEffect)(()=>{try{let e=localStorage.getItem(x);e&&r(JSON.parse(e).savedAt??null)}catch{}},[]);let me=()=>{let e={savedAt:new Date().toISOString(),items:X};localStorage.setItem(x,JSON.stringify(e)),r(e.savedAt)},he=async()=>{let e=localStorage.getItem(x);if(e)try{let n=JSON.parse(e);if(!n.items.length)return;let r=new Set(n.items.map(e=>e.id)),i=F.filter(e=>r.has(e.id)).map(e=>e.id);i.length>0&&await t.scene.items.deleteItems(i);let[a,o]=await Promise.all([t.viewport.getWidth(),t.viewport.getHeight()]),s={x:a*.75,y:o*.6},c=await t.viewport.inverseTransformPoint(s),l={x:s.x-75,y:s.y-75},u=await t.viewport.inverseTransformPoint(l),d=u.x-c.x,f=u.y-c.y,p=n.items.map((e,t)=>({...e,position:{x:c.x+d*t,y:c.y+f*t}}));await t.scene.items.addItems(p)}catch{}},Z=(0,y.useMemo)(()=>P.filter(e=>{let t=String(e.attr_type||``).toLowerCase();return t===`text`||t===`numb`||t===`bool`}),[P]),Q=async(e,n)=>{await t.room.setMetadata({[e]:n})},$=async e=>{await t.room.setMetadata(e)},ge=async()=>{let t=!U;if(await Q(V,t),!t){await m(),e.current=!1;return}await p(),e.current=!0},_e=async()=>{await Q(H,ce(G))},ve=async(e,n)=>{let r=n.trim();await t.scene.items.updateItems([e],e=>{let t={...e[0].metadata||{}};r?t[l.PORTRAIT_URL]=r:delete t[l.PORTRAIT_URL],e[0].metadata=t})};return(0,b.jsx)(f.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,b.jsxs)(g,{theme:i,children:[(0,b.jsx)(ee,{theme:i,children:o(`party.pageTitle`)}),(0,b.jsxs)(C,{theme:i,children:[(0,b.jsxs)(w,{children:[(0,b.jsx)(E,{theme:i,onClick:()=>void _e(),children:o(`party.display`,{orientation:pe})}),(0,b.jsx)(E,{theme:i,onClick:()=>void ge(),children:o(U?`party.closeHud`:`party.openHud`)})]}),z&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(T,{children:[(0,b.jsx)(te,{theme:i,children:o(`party.showInHud`)}),(0,b.jsxs)(O,{$disabled:!z,children:[(0,b.jsx)(k,{theme:i,children:o(`party.showHpBars`)}),(0,b.jsx)(v,{label:o(`party.toggleHpBarsLabel`),isOn:J,onChange:e=>{if(z){if(e){$({[c.PARTY_HUD_SHOW_HP_BARS]:!0,[c.PARTY_HUD_SHOW_HP_NUMBERS]:!1});return}Q(c.PARTY_HUD_SHOW_HP_BARS,!1)}}})]}),(0,b.jsxs)(O,{$disabled:!z,children:[(0,b.jsx)(k,{theme:i,children:o(`party.showHpNumbers`)}),(0,b.jsx)(v,{label:o(`party.toggleHpNumbersLabel`),isOn:de,onChange:e=>{if(z){if(e){$({[c.PARTY_HUD_SHOW_HP_NUMBERS]:!0,[c.PARTY_HUD_SHOW_HP_BARS]:!1});return}Q(c.PARTY_HUD_SHOW_HP_NUMBERS,!1)}}})]}),(0,b.jsxs)(D,{theme:i,disabled:!z,value:K,onChange:e=>{let t=e.target.value;Q(c.PARTY_HUD_ATTR_ONE,t),t&&t===q&&Q(c.PARTY_HUD_ATTR_TWO,``)},children:[(0,b.jsx)(`option`,{value:``,children:o(`party.extraSlotNone`,{slot:1})}),Z.map(e=>(0,b.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,b.jsxs)(D,{theme:i,disabled:!z,value:q,onChange:e=>{let t=e.target.value;Q(c.PARTY_HUD_ATTR_TWO,t),t&&t===K&&Q(c.PARTY_HUD_ATTR_ONE,``)},children:[(0,b.jsx)(`option`,{value:``,children:o(`party.extraSlotNone`,{slot:2})}),Z.map(e=>(0,b.jsx)(`option`,{value:e.attr_bid,children:e.attr_name||e.attr_bid},e.attr_bid))]}),(0,b.jsxs)(D,{theme:i,disabled:!z,value:fe,onChange:e=>{let t=e.target.value;N(t)&&Q(c.PARTY_HUD_BORDER_STYLE,t)},children:[(0,b.jsx)(`option`,{value:`default`,children:o(`party.portraitBorderDefault`)}),(0,b.jsx)(`option`,{value:`plate`,children:o(`party.portraitBorderPlate`)}),(0,b.jsx)(`option`,{value:`tech`,children:o(`party.portraitBorderTech`)})]})]}),(0,b.jsx)(ne,{theme:i,children:(0,b.jsxs)(b.Fragment,{children:[o(`party.configureHint`),(0,b.jsx)(`br`,{}),o(`party.listAttributesExcluded`)]})})]})]}),z&&(0,b.jsxs)(C,{theme:i,children:[(0,b.jsxs)(T,{children:[(0,b.jsx)(E,{theme:i,onClick:me,disabled:X.length===0,children:o(`party.saveParty`)}),(0,b.jsx)(E,{theme:i,onClick:()=>void he(),disabled:n===null,children:o(`party.loadParty`)})]}),(0,b.jsx)(se,{theme:i,children:n?o(`party.lastSaved`,{value:new Date(n).toLocaleString()}):o(`party.noSaveAvailable`)})]}),X.length===0?(0,b.jsx)(oe,{theme:i,children:o(`party.emptyState`)}):(0,b.jsx)(S,{theme:i,children:X.map(e=>{let t=e.metadata?.[l.PORTRAIT_URL]||``,n=a(e)?e.image.url:void 0,r=e.metadata[l.UNIT_NAME]||e.name||o(`party.unknownUnit`),s=e.createdUserId===L?.id,c=z||s,u=n||`/logo.png`,d=!!t;return(0,b.jsxs)(A,{theme:i,children:[(0,b.jsxs)(j,{children:[(0,b.jsx)(M,{theme:i,src:u,alt:r,$full:!d}),d&&(0,b.jsx)(M,{theme:i,src:d?t:``,alt:o(`party.overrideAlt`,{unit:r}),$overlay:!0})]}),(0,b.jsxs)(re,{children:[(0,b.jsx)(ie,{theme:i,title:r,children:r}),c&&(0,b.jsx)(ae,{theme:i,defaultValue:t,placeholder:o(`party.portraitUrlPlaceholder`),onBlur:t=>{ve(e.id,t.target.value)}})]})]},e.id)})})]})})};export{P as PartyPage};