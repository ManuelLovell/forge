import{C as e,F as t,N as n,O as r,R as i,S as a,T as o,_ as s,b as c,g as l,o as u,s as d,t as f,w as p,y as m}from"./defaultgamesystem-DB0eKH9e.js";import{C as h,N as g,S as _,T as v,_ as ee,a as y,b as te,d as b,i as ne,j as x,o as re,p as S,s as C,t as ie,w as ae,x as oe,y as w}from"./unitCollectionRemote-B-sHLn8r.js";/* empty css               */var T=v(`cloudy`,[[`path`,{d:`M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z`,key:`44yre2`}],[`path`,{d:`M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61`,key:`leugyv`}]]),se=v(`hard-drive`,[[`line`,{x1:`22`,x2:`2`,y1:`12`,y2:`12`,key:`1y58io`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}],[`line`,{x1:`6`,x2:`6.01`,y1:`16`,y2:`16`,key:`sgf278`}],[`line`,{x1:`10`,x2:`10.01`,y1:`16`,y2:`16`,key:`1l4acy`}]]),ce=v(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),E=v(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),le=v(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),D=i(n(),1),O=i(t(),1);const ue=e=>{let t=[...Array.isArray(e)?e:[]].sort((e,t)=>e.row===t.row?e.col-t.col:e.row-t.row),n=[];return t.forEach(e=>{let t=n[n.length-1];if(!t||t.row!==e.row){n.push({row:e.row,items:[e]});return}t.items.push(e)}),{sorted:t,rows:n}};var k=o(),A=e=>`
    0 1px 1px ${s(e.background,.95)},
    0 0 2px ${s(e.background,.85)}
  `,de=d.div`
  width: 100%;
  max-width: 350px;
  height: 700px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 0 2px 40px;
  max-height: calc(100vh - 50px);
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  position: relative;
`,j=d.div`
  position: relative;
  z-index: 1;
`,fe=d.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`,M=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`,pe=d(M)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  height: calc(2 * 1.1em);
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100% !important;
`,me=d.input`
  width: 100%;
  border: none;
  background: transparent;
  color: ${e=>e.$theme.primary};
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  padding: 0;
  margin: 0;

  &:focus {
    outline: none;
  }
`,he=d(d.div`
  color: ${e=>e.$theme.offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight??400};
  font-style: ${e=>e.$fontStyle??`normal`};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`)`
  color: ${e=>e.$theme.primary};
  width: 100%;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,N=d.div`
  color: ${e=>e.$theme.primary};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`,P=d.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?s(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?s(e.$theme.offset,.5):s(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>s(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?A(e.$theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${s(e.$theme.background,.28)}, 0 0 0 1px ${s(e.$theme.offset,.18)}`:`none`};
  box-sizing: border-box;
  font-size: ${e=>e.$fontSize};
  text-align: ${e=>e.$align||`left`};
  cursor: ${e=>e.$isRollable?`pointer`:`text`};

  &:focus {
    outline: none;
    border-color: ${e=>e.$theme.offset};
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${s(e.$theme.offset,.35)}, inset 0 0 0 1px ${s(e.$theme.background,.35)}`:`none`};
  }

  &::placeholder {
    color: ${e=>s(e.$theme.primary,.65)};
  }
`,ge=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  height: 40px;
  box-sizing: border-box;
`,_e=d.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`,F=d.span`
  color: ${e=>e.$theme.offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
  margin-left: 4px;
  margin-right: 4px;
  align-self: center;
`,I=d.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?s(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?s(e.$theme.offset,.5):s(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>s(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?A(e.$theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${s(e.$theme.background,.28)}, 0 0 0 1px ${s(e.$theme.offset,.18)}`:`none`};
  padding: 0 8px;
  box-sizing: border-box;
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`center`};
  line-height: 1;
  align-self: center;
  cursor: ${e=>e.$isRollable?`pointer`:`text`};

  &:focus {
    outline: none;
    border-color: ${e=>e.$theme.offset};
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${s(e.$theme.offset,.35)}, inset 0 0 0 1px ${s(e.$theme.background,.35)}`:`none`};
  }

  &::placeholder {
    color: ${e=>s(e.$theme.primary,.65)};
  }
`,ve=d.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,ye=d.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,be=d.div`
  flex: 1;
  min-width: 0;
`,L=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 18px;
`,R=d.div`
  width: 100%;
  height: 5px;
  background: ${e=>`linear-gradient(10deg, ${e.$theme.border||`white`}, rgba(255,255,255,0))`};
`,z=d.div`
  width: 100%;
  height: ${e=>`${e.$heightPx}px`};
  border-radius: 8px;
  border: 1px solid ${e=>s(e.$theme.border,.9)};
  background: ${e=>s(e.$theme.background,.42)};
  overflow: hidden;
  box-sizing: border-box;
`,xe=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,B=d.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  color: ${e=>s(e.$theme.offset,.95)};
  padding: 6px;
  box-sizing: border-box;
`,Se=d.div`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${e=>e.$theme.border||`rgba(255,255,255,0.5)`};
`,Ce=d.div`
  width: 100%;
  height: 10px;
  background: ${e=>`linear-gradient(to bottom, ${e.$theme.border||`rgba(255,255,255,0.2)`}, transparent)`};
`,we=d.div`
  width: 100%;
  height: 2px;
  background: ${e=>e.$theme.border||`#222`};
  box-shadow: ${e=>`inset 0 1px 0 ${e.$theme.border||`#444`}, 0 1px 0 #000`};
`,V=d.div`
  width: 100%;
  height: 6px;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6' preserveAspectRatio='none'%3E%3Cpolyline points='0,6 6,0 12,6 18,0 24,6' fill='none' stroke='${encodeURIComponent(e.$theme.border||`#ffffff`)}' stroke-width='1.5'/%3E%3C/svg%3E")`};
`,H=d.div`
  width: 100%;
  height: 4px;
  background: ${e=>e.$theme.border||`white`};
  animation: flicker 1.2s infinite alternate;

  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 1; }
  }
`,Te=d.div`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`,Ee=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${e=>s(e.$theme.border,.85)};
  padding-bottom: 4px;
  margin-bottom: 4px;
`,U=d.div`
  color: ${e=>e.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,W=d.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,De=d.div`
  margin-bottom: 8px;
`,Oe=d.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`,ke=d.div`
  width: 20px;
  display: flex;
  justify-content: center;
`,Ae=d.div`
  flex: 1;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`,je=d.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,G=d.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
  font-style: italic;
  font-weight: 700;
`,Me=d.textarea`
  width: 100%;
  min-height: 44px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.78)};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: ${e=>e.$theme.primary};
  padding: 6px 8px;
  box-sizing: border-box;
  font-style: italic;
  font-size: 13px;
  line-height: 1.15;
  resize: none;
  overflow: hidden;
`,Ne=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`,Pe=d.button`
  height: 22px;
  min-width: 0;
  max-width: 100%;
  border-radius: 4px;
  border: 1px solid ${e=>s(e.$theme.offset,.8)};
  background: ${e=>s(e.$theme.offset,.5)};
  color: ${e=>s(e.$theme.primary,.95)};
  padding: 0 6px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Fe=d.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`,Ie=d.div`
  flex: 1;
`,K=d.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  cursor: pointer;
  background: ${e=>s(e.$theme.background,.55)};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  vertical-align: middle;
  background-image: none;

  &:checked {
    background-color: ${e=>e.$theme.primary};
    border-color: ${e=>e.$theme.border};
    background-image: none !important;
    background-size: initial;
    background-position: initial;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
    box-shadow: ${e=>`0 0 0 2px ${s(e.$theme.primary,.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,Le=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 8px;
`,Re=d.span`
  color: ${e=>e.$theme.offset||f.theme_offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
`,ze=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: space-evenly;
  width: ${e=>e.$fullWidth?`100%`:`auto`};
`,Be=d.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.55)};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  cursor: pointer;
  background-image: none;

  &:checked {
    background-color: ${e=>e.$theme.primary};
    border-color: ${e=>e.$theme.border};
    background-image: none !important;
    background-size: initial;
    background-position: initial;
    background-repeat: no-repeat;
  }

  &:focus {
    outline: none;
    box-shadow: ${e=>`0 0 0 2px ${s(e.$theme.primary,.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,Ve=d.button`
  width: 26px;
  height: 24px;
  min-width: 26px;
  min-height: 24px;
  max-width: 26px;
  max-height: 24px;
  flex: 0 0 24px;
  border-radius: 6px;
  background: ${e=>e.$theme.background};
  border: 1px solid ${e=>e.$theme.border};
  box-sizing: border-box;
  padding: 0;
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  cursor: pointer;
`,He=d.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 16px;
  box-sizing: border-box;
  border-radius: 6px;
  background: ${e=>e.$theme.primary};
  border: 1px solid ${e=>e.$theme.border};
  top: 0;
  transform: translateY(${e=>e.$active?`-1px`:`6px`});
  transition: transform 200ms;
`,Ue={sm:`14px`,md:`16px`,lg:`18px`},We={sm:`14px`,md:`16px`,lg:`18px`},Ge={sm:`14px`,md:`16px`,lg:`18px`},Ke={sm:`14px`,md:`16px`,lg:`18px`},qe=40,Je=(e,t,n,r)=>{let i=typeof e==`number`?e:typeof e==`string`?Number(e):NaN;if(!Number.isFinite(i))return r;let a=Math.trunc(i);return Math.max(t,Math.min(n,a))},q=(e,t)=>t&&e.find(e=>{let n=e.attr_bid===t,r=String(e.id??``)===String(t);return n||r})||null,J=(e,t)=>e?t===`abbr`?e.attr_abbr:t===`name`||!t||t===`text`?e.attr_name:``:``,Ye=(e,t)=>Array.isArray(t)?t.filter(t=>!!q(e,t)):[],Xe=(e,t)=>Ye(e,t).filter(t=>{let n=q(e,t);return String(n?.attr_type||``).toLowerCase()===`bool`}),Ze=(e,t)=>{let n=q(e,t);return!n||n.attr_type!==`list`?`List Attribute`:n.attr_name};const Qe=({systemTheme:t,backgroundUrl:n,cardLayout:i,attributes:a,unitItem:o,onUpdateMetadata:s})=>{let[l,u]=(0,O.useState)({}),[d,f]=(0,O.useState)({}),p=(0,O.useRef)({}),m=(0,O.useRef)({}),{rows:_}=(0,O.useMemo)(()=>ue(i),[i]),v=(0,O.useMemo)(()=>{let e=o.metadata?.[c.UNIT_NAME];if(typeof e==`string`&&e.trim())return e;let t=o.text?.plainText;return typeof t==`string`&&t.trim()?t:typeof o.name==`string`&&o.name.trim()?o.name:`Unknown`},[o]),[ee,y]=(0,O.useState)(v);(0,O.useEffect)(()=>{y(v)},[v]);let te=async()=>{let e=ee.trim(),t=v.trim()||`Unknown`,n=e||t;y(n),n!==v&&await s({[c.UNIT_NAME]:n})},b=t=>`${e.EXTENSIONID}/${t}`,ne=e=>{let t=o.metadata?.[b(e)];return t==null?``:typeof t==`string`?t:typeof t==`number`||typeof t==`boolean`?String(t):``},re=e=>{let t=o.metadata?.[b(e)];if(typeof t==`boolean`)return t;if(typeof t==`number`)return t!==0;if(typeof t==`string`){let e=t.trim().toLowerCase();return e===`true`||e===`1`||e===`yes`||e===`on`}return!1},S=(e,t)=>l[e]??ne(t),ie=e=>{let t=e?.attr_func;return typeof t==`string`&&t.trim().length>0},ae=(0,O.useMemo)(()=>{let e={};for(let t of a){let n=ne(t.attr_bid).trim();if(!n)continue;let r=Number(n);Number.isFinite(r)&&(e[t.attr_bid]=r)}return e},[a,o.metadata]),oe=e=>{let t=e?.attr_func;if(typeof t!=`string`||t.trim().length===0)return null;let n=C(t,{bidValueMap:ae,onMissingBid:`error`});return!n.valid||!n.notation?(g.warn(`[FORGE] Could not convert attr_func for ${e?.attr_bid||`unknown`}: ${n.error||`Unknown conversion error`}`),null):n.notation},w=async(e,t)=>{try{let n=await r.scene.getMetadata(),i=(await r.party.getPlayers()).find(e=>e.id===o.createdUserId),a=await r.player.getId(),s=await r.player.getColor();await x({notation:e,actionName:t,senderName:v,senderId:o.createdUserId||a||o.id,senderColor:i?.color||s||`#ffffff`},n)}catch(t){g.error(`Failed to send dice roll from CardLayoutRenderer`,e,t),g.log(e)}},T=async e=>{if(!e)return;let t=oe(e);t&&await w(t,e.attr_name||e.attr_bid||`Roll`)};(0,O.useEffect)(()=>()=>{Object.values(p.current).forEach(e=>{window.clearTimeout(e)})},[]);let se=e=>!!d[e],E=(e,t)=>{f(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},le=e=>{f(t=>{let{[e]:n,...r}=t;return r})},D=(e,t)=>{let n=p.current[e];n&&window.clearTimeout(n),p.current[e]=window.setTimeout(()=>{m.current[e]=!0,E(e,t),delete p.current[e]},500)},A=e=>{let t=p.current[e];t&&(window.clearTimeout(t),delete p.current[e])},Qe=e=>m.current[e]?(delete m.current[e],!0):!1,$e=async(e,t)=>{await s({[b(e)]:t})},et=async(e,t)=>{await s({[b(e)]:t})},tt=e=>{let t=o.metadata?.[b(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``}}):[]},nt=e=>{let t=o.metadata?.[b(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``,inUse:!!t.inUse}}):[]},Y=(e,t)=>{g.log(e,t)},X=e=>{e&&(e.style.height=`0px`,e.style.height=`${Math.max(e.scrollHeight,44)}px`)},rt=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=e[0],r=(e[1]||``).trim();if(!r)continue;let i=C(r,{bidValueMap:ae,onMissingBid:`error`});!i.valid||!i.notation||t.push({raw:n,notation:i.notation})}return t},Z=async(e,t,n)=>{Y(`List metadata update`,{listType:n.listType,bid:e,reason:n.reason,entryId:n.entryId,field:n.field,entryCount:t.length,timestamp:Date.now()}),await s({[b(e)]:t})},it=e=>e===`dash`||e===`dashed`?(0,k.jsx)(Se,{$theme:t}):e===`shadow`?(0,k.jsx)(Ce,{$theme:t}):e===`ridge`?(0,k.jsx)(we,{$theme:t}):e===`zigzag`?(0,k.jsx)(V,{$theme:t}):e===`pulse`?(0,k.jsx)(H,{$theme:t}):(0,k.jsx)(R,{$theme:t}),at=e=>{let n=e.type,r=e.styles||{},i=q(a,r.attributeId),o=r.textAlign||`left`,s=r.stretch===!0;if(n===`line-break`)return(0,k.jsx)(M,{$theme:t,$full:!0,children:it(r.styleDesign)},e.id);if(n===`line-spacer`)return(0,k.jsx)(L,{$full:e.fullsize},e.id);if(n===`image`){let n=typeof r.imageUrl==`string`?r.imageUrl.trim():``,i=Je(r.imageCols,1,2,e.fullsize?2:1),a=Je(r.imageRows,1,6,1);return(0,k.jsx)(M,{$theme:t,$full:i===2,children:(0,k.jsx)(z,{$theme:t,$heightPx:qe*a,children:n?(0,k.jsx)(xe,{src:n,alt:`Card component`,loading:`lazy`}):(0,k.jsx)(B,{$theme:t,children:`No image selected`})})},e.id)}if(n===`text`){let n=Ue[r.fontSize||`md`],a=J(i,r.labelMode)||`Title Header`;return(0,k.jsx)(M,{$theme:t,$full:e.fullsize,children:(0,k.jsx)(N,{$theme:t,$fontSize:n,$weight:700,$stretch:s,$align:o,children:a})},e.id)}if(n===`text-value`){let n=Ke[r.fontSize||`md`],a=J(i,r.labelMode),o=!!a,c=r.labelPosition===`right`?`right`:`left`,l=r.textAlign||`center`,d=r.fontWeight===`bold`?700:400,f=r.fontStyle===`italic`?`italic`:`normal`,p=i?.attr_bid,m=ie(i),h=`text-value:${e.id}:${p||`none`}`,g=m&&se(h),_=(0,k.jsx)(I,{$theme:t,$fontSize:n,$align:l,$weight:d,$fontStyle:f,$stretch:s,$isRollable:m,type:`text`,readOnly:m&&!g,value:p?S(h,p):``,onChange:m&&!g?void 0:e=>{if(!p)return;let t=e.target.value;u(e=>({...e,[h]:t}))},onBlur:m&&!g?void 0:async e=>{if(!p)return;let t=e.target.value;await $e(p,t),u(e=>{let{[h]:t,...n}=e;return n}),m&&le(h)},onClick:m?()=>{g||Qe(h)||T(i)}:void 0,onContextMenu:m?e=>{e.preventDefault(),E(h,e.currentTarget)}:void 0,onTouchStart:m?e=>{g||D(h,e.currentTarget)}:void 0,onTouchEnd:m?()=>{A(h)}:void 0,onTouchCancel:m?()=>{A(h)}:void 0,onKeyDown:e=>{if(m&&!g&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),T(i);return}(g||!m)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`}),v=o?(0,k.jsx)(F,{$theme:t,$fontSize:n,$stretch:s,$weight:d,$fontStyle:f,children:a}):null;return(0,k.jsx)(ge,{$full:e.fullsize,children:(0,k.jsxs)(_e,{children:[c===`left`?v:null,_,c===`right`?v:null]})},e.id)}if(n===`text-checkbox`){let n=We[r.fontSize||`md`],i=e.fullsize?6:3,o=Math.max(1,Math.min(i,Number(r.checkboxCount||1))),c=[...Xe(a,r.bidList)].slice(0,o);for(;c.length<o;)c.push(``);let l=J(q(a,c[0]||r.attributeId),r.labelMode),u=r.inputType===`slider`,d=r.labelPosition===`right`?`right`:`left`,f=r.fontWeight===`bold`?700:400,p=r.fontStyle===`italic`?`italic`:`normal`,m=l?(0,k.jsx)(Re,{$theme:t,$fontSize:n,$stretch:s,$weight:f,$fontStyle:p,children:l}):null;return(0,k.jsx)(M,{$theme:t,$full:e.fullsize,children:(0,k.jsxs)(Le,{children:[d===`left`?m:null,(0,k.jsx)(ze,{$fullWidth:!m,children:Array.from({length:o}).map((e,n)=>{let r=c[n]||``,i=r?re(r):!1;return u?(0,k.jsx)(Ve,{type:`button`,$theme:t,$active:i,disabled:!r,onClick:r?()=>{et(r,!i)}:void 0,children:(0,k.jsx)(He,{$theme:t,$active:i})},`slider-${n}`):(0,k.jsx)(Be,{$theme:t,type:`checkbox`,disabled:!r,checked:i,onChange:r?e=>{et(r,e.target.checked)}:void 0},`checkbox-${n}`)})}),d===`right`?m:null]})},e.id)}if(n===`column-text`){let n=Ge[r.fontSize||`md`],i=Ye(a,r.bidList),o=r.fontWeight===`bold`?700:400,c=r.fontStyle===`italic`?`italic`:`normal`;return i.length===0?null:(0,k.jsx)(M,{$theme:t,$full:e.fullsize,children:(0,k.jsx)(ve,{children:i.map(e=>{let i=J(q(a,e),r.labelMode||`name`);return i?(0,k.jsx)(ye,{children:(0,k.jsx)(he,{$theme:t,$fontSize:n,$stretch:s,$align:`center`,$weight:o,$fontStyle:c,children:i})},e):null})})},e.id)}if(n===`column-value`){let n=Ge[r.fontSize||`md`],i=Ye(a,r.bidList);return i.length===0?null:(0,k.jsx)(M,{$theme:t,$full:e.fullsize,children:(0,k.jsx)(ve,{children:i.map(r=>{let i=q(a,r),o=ie(i),s=`column-value:${e.id}:${r}`,c=o&&se(s);return(0,k.jsx)(be,{children:(0,k.jsx)(P,{$theme:t,$fontSize:n,$align:`center`,$isRollable:o,readOnly:o&&!c,value:S(s,r),onChange:o&&!c?void 0:e=>{let t=e.target.value;u(e=>({...e,[s]:t}))},onBlur:o&&!c?void 0:async e=>{let t=e.target.value;await $e(r,t),u(e=>{let{[s]:t,...n}=e;return n}),o&&le(s)},onClick:o?()=>{c||Qe(s)||T(i)}:void 0,onContextMenu:o?e=>{e.preventDefault(),E(s,e.currentTarget)}:void 0,onTouchStart:o?e=>{c||D(s,e.currentTarget)}:void 0,onTouchEnd:o?()=>{A(s)}:void 0,onTouchCancel:o?()=>{A(s)}:void 0,onKeyDown:e=>{if(o&&!c&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),T(i);return}(c||!o)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`})},r)})})},e.id)}if(n===`action-list`){let n=q(a,r.attributeId||r.bidList?.[0])?.attr_bid,i=Ze(a,r.attributeId||r.bidList?.[0]),o=n?tt(n):[];return(0,k.jsx)(M,{$theme:t,$full:e.fullsize,children:(0,k.jsxs)(Te,{$theme:t,children:[(0,k.jsxs)(Ee,{$theme:t,children:[(0,k.jsx)(U,{$theme:t,children:i}),(0,k.jsx)(W,{type:`button`,$theme:t,"aria-label":`Add Action`,onClick:async()=>{n&&await Z(n,[...o,{id:crypto.randomUUID(),name:``,description:``}],{listType:`action`,reason:`add`})},children:(0,k.jsx)(ce,{size:14})})]}),o.map((r,i)=>(0,k.jsxs)(De,{children:[(0,k.jsxs)(Fe,{children:[(0,k.jsx)(Ie,{children:(0,k.jsx)(G,{$theme:t,type:`text`,defaultValue:r.name,placeholder:`Action Name`,onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,name:t}:e),{listType:`action`,reason:`blur-save`,entryId:r.id,field:`name`})}})}),(0,k.jsx)(je,{type:`button`,$theme:t,"aria-label":`Delete Action`,onClick:async()=>{n&&await Z(n,o.filter(e=>e.id!==r.id),{listType:`action`,reason:`delete`,entryId:r.id})},children:(0,k.jsx)(h,{size:14})})]}),(()=>{let e=rt(r.description);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Me,{$theme:t,defaultValue:r.description,ref:X,placeholder:`Action Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,description:t}:e),{listType:`action`,reason:`blur-save`,entryId:r.id,field:`description`})}}),e.length>0?(0,k.jsx)(Ne,{children:e.map((e,n)=>(0,k.jsx)(Pe,{type:`button`,$theme:t,onClick:()=>{w(e.notation,r.name||`Action`)},title:e.notation,children:e.notation},`${r.id}-action-inline-${n}`))}):null]})})()]},r.id||`${e.id}-action-${i}`))]})},e.id)}if(n===`item-list`){let n=q(a,r.attributeId||r.bidList?.[0])?.attr_bid,i=Ze(a,r.attributeId||r.bidList?.[0]),o=n?nt(n):[];return(0,k.jsx)(M,{$theme:t,$full:e.fullsize,children:(0,k.jsxs)(Te,{$theme:t,children:[(0,k.jsxs)(Ee,{$theme:t,children:[(0,k.jsx)(U,{$theme:t,children:i}),(0,k.jsx)(W,{type:`button`,$theme:t,"aria-label":`Add Item`,onClick:async()=>{n&&await Z(n,[...o,{id:crypto.randomUUID(),name:``,description:``,inUse:!1}],{listType:`item`,reason:`add`})},children:(0,k.jsx)(ce,{size:14})})]}),o.map((r,i)=>(0,k.jsxs)(De,{children:[(0,k.jsxs)(Oe,{children:[(0,k.jsx)(ke,{children:(0,k.jsx)(K,{$theme:t,type:`checkbox`,defaultChecked:r.inUse,onBlur:async e=>{if(!n)return;let t=e.target.checked;await Z(n,o.map(e=>e.id===r.id?{...e,inUse:t}:e),{listType:`item`,reason:`toggle-save`,entryId:r.id,field:`inUse`})}})}),(0,k.jsx)(Ae,{$theme:t,children:(0,k.jsx)(G,{$theme:t,type:`text`,defaultValue:r.name,placeholder:`Item Name`,onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,name:t}:e),{listType:`item`,reason:`blur-save`,entryId:r.id,field:`name`})}})}),(0,k.jsx)(je,{type:`button`,$theme:t,"aria-label":`Delete Item`,onClick:async()=>{n&&await Z(n,o.filter(e=>e.id!==r.id),{listType:`item`,reason:`delete`,entryId:r.id})},children:(0,k.jsx)(h,{size:14})})]}),(()=>{let e=rt(r.description);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Me,{$theme:t,defaultValue:r.description,ref:X,placeholder:`Item Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,description:t}:e),{listType:`item`,reason:`blur-save`,entryId:r.id,field:`description`})}}),e.length>0?(0,k.jsx)(Ne,{children:e.map((e,n)=>(0,k.jsx)(Pe,{type:`button`,$theme:t,onClick:()=>{w(e.notation,r.name||`Item`)},title:e.notation,children:e.notation},`${r.id}-item-inline-${n}`))}):null]})})()]},r.id||`${e.id}-item-${i}`))]})},e.id)}return null};return(0,k.jsx)(de,{$theme:t,$backgroundUrl:n,children:(0,k.jsxs)(j,{children:[(0,k.jsx)(fe,{children:(0,k.jsx)(pe,{$theme:t,children:(0,k.jsx)(me,{$theme:t,value:ee,onChange:e=>{y(e.target.value)},onBlur:()=>{te()},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},"aria-label":`Unit Name`})})}),_.map(e=>(0,k.jsx)(fe,{children:e.items.map(e=>at(e))},`row-${e.row}`))]})})};var $e={SNAPSHOT_PUBLIC_ID:`${e.EXTENSIONID}/SnapshotPublicId`},et={primary:f.theme_primary,offset:f.theme_offset,background:f.theme_background,border:f.theme_border,background_url:f.background_url},tt=d.div`
  height: 100vh;
  width: 100%;
  background-color: ${e=>s(e.$theme.background,.5)};
  color: ${e=>e.$theme.primary};
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 16px;
  box-sizing: border-box;
  overflow: hidden;
  backdrop-filter: blur(6px);
  background-image: ${e=>e.$theme.background_url?`linear-gradient(${s(e.$theme.background,.52)}, ${s(e.$theme.background,.52)}), url(${e.$theme.background_url})`:`none`};
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
`,nt=d.div`
  height: 100%;
  overflow: hidden;
  padding: 40px 4px 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
`,Y=d.p`
  margin: 0;
  color: ${e=>e.$theme.primary};
  text-align: center;
  align-content: center;
  font-weight: 600;
  font-size: 24px;
`,X=d.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: min(calc(100% - 16px), 350px);
  z-index: 10;
`,rt=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`,Z=d.select`
  flex: 1;
  min-width: 0;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.82)};
  color: ${e=>e.$theme.primary};
  padding: 0 6px;
  box-sizing: border-box;
  font-size: 12px;
`,it=d.button`
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${e=>s(e.$theme.background,.82)};
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background: ${e=>s(e.$theme.offset,.5)};
  }
`,at=d.img`
  width: 28px;
  height: 28px;
  display: block;
`,ot=d.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 6px;
  height: 90%;
  border-radius: 12px 12px 10px 10px;
  border: 4px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.84)};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transform: ${e=>e.$open?`translateY(0)`:`translateY(calc(100% - 40px))`};
  transition: transform 0.22s ease;
  z-index: 20;
  overflow: visible;
`,st=d.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 52px;
  height: 52px;
  backdrop-filter: blur(8px);
  background: ${e=>s(e.$theme.background,.5)};
  border-radius: 50%;
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,ct=d.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 4px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.98)};
  color: ${e=>e.$theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 22;

  &:hover {
    background: ${e=>s(e.$theme.offset,.5)};
  }
`,lt=d.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  padding: 42px 10px 10px;
  color: ${e=>s(e.$theme.primary,.9)};
`,ut=d.div`
  flex: 1 1 80%;
  min-height: 0;
  border: 2px solid ${e=>s(e.$theme.border,.85)};
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>s(e.$theme.primary,.88)};
  font-size: 14px;
  font-weight: 600;
  overflow-y: auto;
  padding: 8px;
  box-sizing: border-box;
`,dt=d.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ft=d.div`
  width: 100%;
  border: 1px solid ${e=>s(e.$theme.border,.8)};
  border-radius: 8px;
  background: ${e=>s(e.$theme.background,.72)};
  padding: 6px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: center;
`,pt=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,mt=d.div`
  color: ${e=>e.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,ht=d.span`
  font-size: 12px;
  line-height: 1;
`,gt=d.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_t=d.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`,vt=d.span`
  margin-left: 6px;
  width: 18px;
  height: 18px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 6px;
  border: 1px solid ${e=>s(e.$theme.border,.85)};
  background: ${e=>s(e.$theme.offset,.35)};
  color: ${e=>e.$theme.primary};
`,yt=d.span`
  color: ${e=>e.$color};
`,bt=d.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,xt=d.button`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>e.$variant===`import`?s(e.$theme.offset,.45):s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`,St=d.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Ct=d.input`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`,wt=d.button`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${e=>s(e.$theme.offset,.5)};
  }
`,Tt=d.div`
  position: absolute;
  top: 6px;
  left: 14px;
  right: 14px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 21;
  pointer-events: none;
`,Et=d.div`
  display: inline-flex;
  justify-content: space-between;
  width: 40%;
  pointer-events: auto;
`,Q=d.button`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.9)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  &:hover {
    background: ${e=>s(e.$theme.offset,.5)};
  }

  &:disabled:hover {
    background: ${e=>s(e.$theme.background,.9)};
  }
`,Dt=d(Q)`
  background: ${e=>e.$active?s(e.$theme.offset,.45):s(e.$theme.background,.9)};

  &:disabled {
    background: ${e=>s(e.$theme.background,.9)};
  }
`,$=d.img`
  width: 20px;
  height: 20px;
  display: block;
  filter: ${e=>e.$active?`brightness(0) saturate(100%) invert(23%) sepia(82%) saturate(6574%) hue-rotate(349deg) brightness(96%) contrast(115%)`:`none`};
`,Ot=d.textarea`
  width: 100%;
  min-height: 220px;
  border-radius: 8px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 8px;
  box-sizing: border-box;
  resize: vertical;
  font-size: 12px;
`,kt=d.button`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 8px;
  background: ${e=>e.$variant===`primary`?s(e.$theme.offset,.5):s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 6px 10px;
  cursor: pointer;
`,At=d.div`
  margin-top: 8px;
  color: ${e=>s(e.$theme.offset,.95)};
  font-size: 12px;
`,jt=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,Mt=d.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${e=>e.$theme.background};
  border: 3px solid ${e=>e.$theme.border};
  border-radius: 8px;
  padding: 25px;
  z-index: 10000;
  min-width: 340px;
  max-width: 560px;
  width: min(560px, calc(100vw - 32px));
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
`,Nt=d.h3`
  color: ${e=>e.$theme.primary};
  margin: 0 0 15px 0;
  font-size: 18px;
`,Pt=d.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
`,Ft=()=>{let e=new URLSearchParams(window.location.search).get(`unitid`);return e&&e.split(`,`)[0]?.trim()||null},It=()=>{let e=new URLSearchParams(window.location.search).get(`pinned`);if(!e)return!1;let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`},Lt=`POP_${e.CARDSID}`,Rt=(e,t)=>{let n=new URLSearchParams;return n.set(`unitid`,e),t&&n.set(`pinned`,`true`),`/pages/forgecard.html?${n.toString()}`},zt=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},Bt=e=>{if(e===!0)return!0;if(typeof e==`string`){let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`}return typeof e==`number`?e===1:!1};D.createRoot(document.getElementById(`root`)).render((0,k.jsx)(O.StrictMode,{children:(0,k.jsx)(p,{children:(0,k.jsx)(()=>{let[t,n]=(0,O.useState)(()=>Ft()),i=(0,O.useMemo)(()=>It(),[]),[a,o]=(0,O.useState)({metadata:{},items:[]}),[s,d]=(0,O.useState)(null),[p,h]=(0,O.useState)(null),[v,x]=(0,O.useState)(null),[C,ce]=(0,O.useState)(null),[D,ue]=(0,O.useState)(!1),[A,de]=(0,O.useState)(!1),[j,fe]=(0,O.useState)(!1),[M,pe]=(0,O.useState)(``),[me,he]=(0,O.useState)(``),[N,P]=(0,O.useState)(!1),[ge,_e]=(0,O.useState)([]),[F,I]=(0,O.useState)([]),[ve,ye]=(0,O.useState)(!1),[be,L]=(0,O.useState)(``),[R,z]=(0,O.useState)(null),[xe,B]=(0,O.useState)(!1),Se=e=>{let t=e[m.ENABLE_CONSOLE_LOG];typeof t==`boolean`&&g.setEnabled(t)},Ce=(0,O.useMemo)(()=>p||f.card_layout,[p]),we=(0,O.useMemo)(()=>v||f.attributes,[v]),V=(0,O.useMemo)(()=>s||et,[s]),H=(0,O.useMemo)(()=>l(V.primary,V.offset,V.background,V.border,V.background_url),[V]);(0,O.useEffect)(()=>{let e=!1;return(async()=>{try{await b()}catch(e){g.log(`Auth hydration failed in card iframe`,e)}finally{e||B(!0)}})(),()=>{e=!0}},[]),(0,O.useEffect)(()=>{let e=!0,t=async t=>{let n=t[$e.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(d(null),h(null),x(null));return}let{data:r,error:i}=await u.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(i){e&&(d(null),h(null),x(null));return}let a=Array.isArray(r)?r[0]:r;if(!a||typeof a!=`object`){e&&(d(null),h(null),x(null));return}let o=a,s=zt(o.card_layout),c=zt(o.attributes);if(typeof o.theme_primary!=`string`||typeof o.theme_offset!=`string`||typeof o.theme_background!=`string`||typeof o.theme_border!=`string`||!Array.isArray(s)||!Array.isArray(c)){e&&(d(null),h(null),x(null));return}e&&(d({primary:o.theme_primary,offset:o.theme_offset,background:o.theme_background,border:o.theme_border,background_url:typeof o.background_url==`string`?o.background_url:``}),h(s),x(c))};(async()=>{let[n,i,a,s,c]=await Promise.all([r.scene.getMetadata(),r.scene.items.getItems(),r.room.getMetadata(),r.player.getId(),r.player.getRole()]);e&&(Se(n),o({metadata:n,items:i}),await t(a),ce(s),ue(String(c||``).toUpperCase()===`GM`),de(!0))})();let n=r.scene.onMetadataChange(t=>{e&&(o(e=>({...e,metadata:t})),Se(t))}),i=r.room.onMetadataChange(n=>{e&&t(n)}),a=r.scene.items.onChange(t=>{e&&o(e=>({...e,items:t}))});return()=>{e=!1,n(),i(),a()}},[]);let Te=e=>{let t=e.metadata?.[c.UNIT_NAME];if(typeof t==`string`&&t.trim())return t;let n=e.text?.plainText;return typeof n==`string`&&n.trim()?n:typeof e.name==`string`&&e.name.trim()?e.name:`Unknown`},Ee=(0,O.useMemo)(()=>a.items.filter(e=>Bt(e.metadata?.[c.FABRICATED])).filter(e=>D||e.createdUserId===C).filter(e=>e.id!==t).map(e=>({id:e.id,name:Te(e)})).sort((e,t)=>e.name.localeCompare(t.name)),[a.items,t,D,C]),U=(0,O.useMemo)(()=>t&&a.items.find(e=>e.id===t)||null,[a.items,t]),W=async()=>t&&(await r.scene.items.getItems()).find(e=>e.id===t)||null,De=async e=>{U&&(await r.scene.items.updateItems([U.id],t=>{let n={...t[0].metadata||{}};Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),t[0].metadata=n}),o(t=>({...t,items:t.items.map(t=>{if(t.id!==U.id)return t;let n={...t.metadata||{}};return Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),{...t,metadata:n}})})))},Oe=async t=>{if(!U)return;let n=[c.FABRICATED,c.INITIATIVE,c.ON_LIST,c.IN_PARTY];await r.scene.items.updateItems([U.id],r=>{let i=r[0].metadata,a={},o={};for(let[t,r]of Object.entries(i))t.startsWith(`${e.EXTENSIONID}/`)||(a[t]=r),n.includes(t)&&(o[t]=r);r[0].metadata={...a,...t,...o}}),o(r=>({...r,items:r.items.map(r=>{if(r.id!==U.id)return r;let i={},a={};for(let[t,o]of Object.entries(r.metadata||{}))t.startsWith(`${e.EXTENSIONID}/`)||(i[t]=o),n.includes(t)&&(a[t]=o);return{...r,metadata:{...i,...t,...a}}})}))},ke=async()=>{_e(await te())},Ae=e=>{let t=e.trim(),n=t?t[0].toUpperCase():`A`;return`hsl(${Math.max(0,Math.min(25,n.charCodeAt(0)-65))/26*360}, 70%, 65%)`},je=async e=>{let[t,n]=await Promise.all([y(e),S()?ne(e):Promise.resolve([])]);return[...n.map(e=>({...e,source:`remote-user`})),...t.map(e=>({...e,source:`remote-shared`}))]},G=(0,O.useMemo)(()=>{let e=me.trim().toLowerCase(),t={local:0,"remote-user":1,"remote-shared":2},n=(e,n)=>t[e.source]===t[n.source]?e.favorite===n.favorite?e.name.localeCompare(n.name):e.favorite?-1:1:t[e.source]-t[n.source],r=[...ge].sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);if(!e)return r.filter(e=>e.favorite).map(e=>({...e,source:`local`}));let i=r.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),a=F.filter(e=>e.source===`remote-user`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),o=F.filter(e=>e.source===`remote-shared`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e));return[...i.map(e=>({...e,source:`local`})),...a,...o].sort(n)},[ge,F,me]),Me=async()=>{if(!t){await r.notification.show(`No unit selected to pin.`,`ERROR`);return}let n=await r.viewport.getWidth(),a=await r.viewport.getHeight(),o=a>800?700:a-100;if(!i){await r.popover.open({id:Lt,url:Rt(t,!0),height:400,width:350,anchorPosition:{top:50,left:n-70},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},transformOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},hidePaper:!0,disableClickAway:!0}),await r.popover.close(e.CARDSID);return}await r.popover.open({id:e.CARDSID,url:Rt(t,!1),height:o,width:350,anchorPosition:{left:n/2,top:a/2},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`CENTER`},transformOrigin:{vertical:`CENTER`,horizontal:`CENTER`},hidePaper:!0,disableClickAway:!0}),await r.popover.close(Lt)},Ne=()=>{D&&P(e=>!e)},Pe=async()=>{if(!D)return;let e=await W();if(!e){await r.notification.show(`No unit selected to save.`,`ERROR`);return}xe||(await b(),B(!0));try{let t=(await r.player.getName()).trim(),n=S()?await re(e.metadata,t,N):await oe(e.metadata,t,N);await ke();let i=S()?`online Collection`:`Collection`;await r.notification.show(n===`created`?`Unit saved to ${i}.`:`Unit updated in ${i}.`)}catch(e){g.log(`Collection save failed`,e),await r.notification.show(`Could not save this unit to Collection.`,`ERROR`)}},Fe=async()=>{if(!await W()){await r.notification.show(`No unit selected to import into.`,`ERROR`);return}z(null),L(``),ye(!0)},Ie=async()=>{let e=await W();if(!e){await r.notification.show(`No unit selected to export.`,`ERROR`);return}try{let t=w(e.metadata),n=t[c.UNIT_NAME],i=typeof n==`string`?n.trim():``;if(!i){await r.notification.show(`Current unit has no valid unit name to export.`,`ERROR`);return}let a={name:i,author:(await r.player.getName()).trim()||`Unknown`,metadata:t};await navigator.clipboard.writeText(JSON.stringify(a,null,2)),await r.notification.show(`Unit data copied to clipboard.`)}catch(e){g.log(`Unit export failed`,e),await r.notification.show(`Could not copy unit data to clipboard.`,`ERROR`)}},K=()=>{ye(!1),z(null),L(``)},Le=e=>{let t=JSON.parse(e);if(!t||typeof t!=`object`||Array.isArray(t))throw Error(`Import data must be a JSON object.`);let n=t,r=n.metadata&&typeof n.metadata==`object`?n.metadata:t;if(!r||typeof r!=`object`||Array.isArray(r))throw Error(`Import data must include a metadata object.`);let i=w(r),a=i[c.UNIT_NAME];if(!(typeof a==`string`&&a.trim()))throw Error(`Imported metadata must include a valid unit name.`);return i},Re=async()=>{if(!await W()){z(`No unit selected to import into.`);return}let e=be.trim();if(!e){z(`Paste JSON data before importing.`);return}try{await Oe(Le(e)),P(!1),K(),await r.notification.show(`Unit data imported successfully.`)}catch(e){z(e instanceof Error?e.message:`Import failed.`)}},ze=()=>{let e=M.trim();if(he(e),!e){I([]);return}(async()=>{xe||(await b(),B(!0)),I(await je(e))})().catch(async e=>{g.log(`Supabase collection search failed`,e),I([]),await r.notification.show(`Could not search online collection.`,`ERROR`)})},Be=async e=>{if(!U){await r.notification.show(`No unit selected to import into.`,`ERROR`);return}try{await Oe(e.metadata),P(!1),await r.notification.show(e.source===`local`?`Imported ${e.name}.`:`Imported ${e.name} from online collection.`)}catch(e){g.log(`Collection record import failed`,e),await r.notification.show(`Could not import collection record.`,`ERROR`)}},Ve=async e=>{try{if(e.source===`remote-user`)await ie(e.id),I(t=>t.filter(t=>!(t.source===`remote-user`&&t.id===e.id)));else if(e.source===`local`)await ee(e.id),_e(t=>t.filter(t=>t.id!==e.id));else return;await r.notification.show(`Deleted ${e.name} from Collection.`)}catch(e){g.log(`Collection record delete failed`,e),await r.notification.show(`Could not delete collection record.`,`ERROR`)}};return(0,O.useEffect)(()=>{j&&ke().catch(e=>{g.log(`Failed to load collection records`,e)})},[j]),(0,O.useEffect)(()=>{j&&(he(``),pe(``),I([]))},[j]),(0,k.jsxs)(tt,{$theme:V,children:[(0,k.jsxs)(nt,{children:[(0,k.jsx)(X,{children:(0,k.jsxs)(rt,{children:[(0,k.jsxs)(Z,{$theme:V,"aria-label":`Choose Unit`,value:``,onChange:e=>{let t=e.target.value;t&&n(t)},children:[(0,k.jsx)(`option`,{value:``,children:`Choose Unit`}),Ee.map(e=>(0,k.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,k.jsx)(it,{type:`button`,$theme:V,"aria-label":`Close Card`,onClick:async()=>{await r.popover.close(i?Lt:e.CARDSID)},children:(0,k.jsx)(at,{src:`/close.svg`,alt:``,"aria-hidden":`true`})})]})}),A?t?U?(0,k.jsx)(Qe,{systemTheme:V,backgroundUrl:V.background_url,cardLayout:Ce,attributes:we,unitItem:U,onUpdateMetadata:De}):(0,k.jsx)(Y,{$theme:V,children:`Unit not found in current scene.`}):(0,k.jsx)(Y,{$theme:V,children:`No unit id supplied in URL.`}):(0,k.jsx)(Y,{$theme:V,children:`Loading card…`})]}),(0,k.jsxs)(ot,{$theme:V,$open:j,children:[(0,k.jsxs)(Tt,{children:[(0,k.jsxs)(Et,{children:[(0,k.jsx)(Q,{type:`button`,$theme:V,"aria-label":`Pin`,onClick:()=>{Me()},children:(0,k.jsx)(_,{theme:H,text:`Pin/Unpin card popover`,children:(0,k.jsx)($,{src:`/pin.svg`,alt:``,"aria-hidden":`true`})})}),(0,k.jsx)(Dt,{type:`button`,$theme:V,$active:N,"aria-label":`Favorite`,disabled:!D,onClick:Ne,children:(0,k.jsx)(_,{theme:H,text:`Mark next save as favorite`,children:(0,k.jsx)($,{$active:N,src:`/favorite.svg`,alt:``,"aria-hidden":`true`})})}),(0,k.jsx)(Q,{type:`button`,$theme:V,"aria-label":`CollectionSave`,disabled:!D,onClick:Pe,children:(0,k.jsx)(_,{theme:H,text:`Save current unit to Collection`,children:(0,k.jsx)($,{src:`/collection.svg`,alt:``,"aria-hidden":`true`})})})]}),(0,k.jsxs)(Et,{children:[(0,k.jsx)(Q,{type:`button`,$theme:V,"aria-label":`Import`,onClick:Fe,children:(0,k.jsx)(_,{theme:H,text:`Import unit data from JSON`,children:(0,k.jsx)($,{src:`/import.svg`,alt:``,"aria-hidden":`true`})})}),(0,k.jsx)(Q,{type:`button`,$theme:V,"aria-label":`Export`,onClick:Ie,children:(0,k.jsx)(_,{theme:H,text:`Export current unit data to clipboard`,children:(0,k.jsx)($,{src:`/export.svg`,alt:``,"aria-hidden":`true`})})})]})]}),(0,k.jsx)(st,{$theme:V,children:(0,k.jsx)(_,{theme:H,text:j?`Close collection tray`:`Open collection tray`,children:(0,k.jsx)(ct,{type:`button`,$theme:V,"aria-label":j?`Close Tray`:`Open Tray`,onClick:()=>{fe(e=>!e)},children:(0,k.jsx)(ae,{size:22})})})}),(0,k.jsx)(lt,{$theme:V,children:j?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(ut,{$theme:V,children:(0,k.jsx)(dt,{children:G.length===0?(0,k.jsx)(Y,{$theme:V,children:`No collection records found.`}):G.map(e=>(0,k.jsxs)(ft,{$theme:V,children:[(0,k.jsxs)(pt,{children:[(0,k.jsxs)(mt,{$theme:V,children:[e.favorite?(0,k.jsx)(ht,{children:`❤`}):null,(0,k.jsx)(gt,{children:e.name})]}),(0,k.jsxs)(_t,{children:[(0,k.jsx)(`span`,{children:`→`}),(0,k.jsx)(yt,{$color:Ae(e.author),children:e.author}),(0,k.jsxs)(vt,{$theme:V,title:e.source===`local`?`Local`:e.source===`remote-user`?`My Cloud`:`Shared`,children:[e.source===`local`?(0,k.jsx)(se,{size:11}):null,e.source===`remote-user`?(0,k.jsx)(T,{size:11}):null,e.source===`remote-shared`?(0,k.jsx)(le,{size:11}):null]})]})]}),(0,k.jsxs)(bt,{children:[(0,k.jsx)(xt,{type:`button`,$theme:V,$variant:`import`,onClick:()=>{Be(e)},children:`Import`}),e.source===`remote-shared`?null:(0,k.jsx)(xt,{type:`button`,$theme:V,$variant:`delete`,onClick:()=>{Ve(e)},children:`X`})]})]},`${e.source}:${e.id}`))})}),(0,k.jsxs)(St,{children:[(0,k.jsx)(Ct,{$theme:V,type:`text`,value:M,placeholder:`Enter query...`,onChange:e=>{pe(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),ze())}}),(0,k.jsx)(wt,{type:`button`,$theme:V,"aria-label":`Search`,onClick:ze,children:(0,k.jsx)(E,{size:16})})]})]}):null})]}),ve?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(jt,{onClick:K}),(0,k.jsxs)(Mt,{$theme:V,onClick:e=>{e.stopPropagation()},children:[(0,k.jsx)(Nt,{$theme:V,children:`Import Unit Data`}),(0,k.jsx)(Ot,{$theme:V,value:be,placeholder:`Paste exported unit JSON here`,onChange:e=>{L(e.target.value),R&&z(null)}}),R?(0,k.jsx)(At,{$theme:V,children:R}):null,(0,k.jsxs)(Pt,{children:[(0,k.jsx)(kt,{type:`button`,$theme:V,onClick:K,children:`Cancel`}),(0,k.jsx)(kt,{type:`button`,$theme:V,$variant:`primary`,onClick:Re,children:`Import`})]})]})]}):null]})},{})})}));