import{A as e,F as t,M as n,S as r,T as i,_ as a,b as o,g as s,m as c,n as l,t as u,x as d,y as f}from"./defaultgamesystem-jXGW0PHK.js";import{A as p,C as m,S as h,T as g,a as ee,b as _,d as v,i as y,j as b,o as te,p as x,s as S,t as ne,v as re,w as ie,x as ae}from"./unitCollectionRemote-Dd7vyb5Z.js";/* empty css               */var oe=g(`cloudy`,[[`path`,{d:`M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z`,key:`44yre2`}],[`path`,{d:`M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61`,key:`leugyv`}]]),se=g(`hard-drive`,[[`line`,{x1:`22`,x2:`2`,y1:`12`,y2:`12`,key:`1y58io`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}],[`line`,{x1:`6`,x2:`6.01`,y1:`16`,y2:`16`,key:`sgf278`}],[`line`,{x1:`10`,x2:`10.01`,y1:`16`,y2:`16`,key:`1l4acy`}]]),ce=g(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),C=g(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),w=g(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),T=t(e(),1),E=t(n(),1);const le=e=>{let t=[...Array.isArray(e)?e:[]].sort((e,t)=>e.row===t.row?e.col-t.col:e.row-t.row),n=[];return t.forEach(e=>{let t=n[n.length-1];if(!t||t.row!==e.row){n.push({row:e.row,items:[e]});return}t.items.push(e)}),{sorted:t,rows:n}};var D=r(),O=e=>`
    0 1px 1px ${c(e.background,.95)},
    0 0 2px ${c(e.background,.85)}
  `,ue=l.div`
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
`,k=l.div`
  position: relative;
  z-index: 1;
`,A=l.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`,j=l.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`,de=l(j)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  height: calc(2 * 1.1em);
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100% !important;
`,M=l.input`
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
`,N=l(l.div`
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
`,fe=l.div`
  color: ${e=>e.$theme.primary};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`,pe=l.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?c(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?c(e.$theme.offset,.5):c(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>c(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?O(e.$theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${c(e.$theme.background,.28)}, 0 0 0 1px ${c(e.$theme.offset,.18)}`:`none`};
  box-sizing: border-box;
  font-size: ${e=>e.$fontSize};
  text-align: ${e=>e.$align||`left`};
  cursor: ${e=>e.$isRollable?`pointer`:`text`};

  &:focus {
    outline: none;
    border-color: ${e=>e.$theme.offset};
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${c(e.$theme.offset,.35)}, inset 0 0 0 1px ${c(e.$theme.background,.35)}`:`none`};
  }

  &::placeholder {
    color: ${e=>c(e.$theme.primary,.65)};
  }
`,me=l.div`
  width: ${e=>e.$full?`100%`:`170px`};
  height: 40px;
  box-sizing: border-box;
`,P=l.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`,F=l.span`
  color: ${e=>e.$theme.offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
  margin-left: 4px;
  margin-right: 4px;
  align-self: center;
`,I=l.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?c(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?c(e.$theme.offset,.5):c(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>c(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?O(e.$theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${c(e.$theme.background,.28)}, 0 0 0 1px ${c(e.$theme.offset,.18)}`:`none`};
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
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${c(e.$theme.offset,.35)}, inset 0 0 0 1px ${c(e.$theme.background,.35)}`:`none`};
  }

  &::placeholder {
    color: ${e=>c(e.$theme.primary,.65)};
  }
`,L=l.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,R=l.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,he=l.div`
  flex: 1;
  min-width: 0;
`,ge=l.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 18px;
`,_e=l.div`
  width: 100%;
  height: 5px;
  background: ${e=>`linear-gradient(10deg, ${e.$theme.border||`white`}, rgba(255,255,255,0))`};
`,z=l.div`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${e=>e.$theme.border||`rgba(255,255,255,0.5)`};
`,ve=l.div`
  width: 100%;
  height: 10px;
  background: ${e=>`linear-gradient(to bottom, ${e.$theme.border||`rgba(255,255,255,0.2)`}, transparent)`};
`,ye=l.div`
  width: 100%;
  height: 2px;
  background: ${e=>e.$theme.border||`#222`};
  box-shadow: ${e=>`inset 0 1px 0 ${e.$theme.border||`#444`}, 0 1px 0 #000`};
`,B=l.div`
  width: 100%;
  height: 6px;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6' preserveAspectRatio='none'%3E%3Cpolyline points='0,6 6,0 12,6 18,0 24,6' fill='none' stroke='${encodeURIComponent(e.$theme.border||`#ffffff`)}' stroke-width='1.5'/%3E%3C/svg%3E")`};
`,V=l.div`
  width: 100%;
  height: 4px;
  background: ${e=>e.$theme.border||`white`};
  animation: flicker 1.2s infinite alternate;

  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 1; }
  }
`,be=l.div`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`,H=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${e=>c(e.$theme.border,.85)};
  padding-bottom: 4px;
  margin-bottom: 4px;
`,U=l.div`
  color: ${e=>e.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,xe=l.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Se=l.div`
  margin-bottom: 8px;
`,Ce=l.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`,we=l.div`
  width: 20px;
  display: flex;
  justify-content: center;
`,Te=l.div`
  flex: 1;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`,Ee=l.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,De=l.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
  font-style: italic;
  font-weight: 700;
`,Oe=l.textarea`
  width: 100%;
  min-height: 44px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.78)};
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
`,W=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`,ke=l.button`
  height: 22px;
  min-width: 0;
  max-width: 100%;
  border-radius: 4px;
  border: 1px solid ${e=>c(e.$theme.offset,.8)};
  background: ${e=>c(e.$theme.offset,.5)};
  color: ${e=>c(e.$theme.primary,.95)};
  padding: 0 6px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ae=l.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`,je=l.div`
  flex: 1;
`,Me=l.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  cursor: pointer;
  background: ${e=>c(e.$theme.background,.55)};
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
    box-shadow: ${e=>`0 0 0 2px ${c(e.$theme.primary,.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,Ne=l.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 8px;
`,Pe=l.span`
  color: ${e=>e.$theme.offset||u.theme_offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
`,Fe=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: space-evenly;
  width: ${e=>e.$fullWidth?`100%`:`auto`};
`,Ie=l.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.55)};
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
    box-shadow: ${e=>`0 0 0 2px ${c(e.$theme.primary,.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,Le=l.button`
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
`,Re=l.div`
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
`,ze={sm:`14px`,md:`16px`,lg:`18px`},Be={sm:`14px`,md:`16px`,lg:`18px`},Ve={sm:`14px`,md:`16px`,lg:`18px`},He={sm:`14px`,md:`16px`,lg:`18px`},G=(e,t)=>t&&e.find(e=>{let n=e.attr_bid===t,r=String(e.id??``)===String(t);return n||r})||null,K=(e,t)=>e?t===`abbr`?e.attr_abbr:t===`name`||!t||t===`text`?e.attr_name:``:``,Ue=(e,t)=>Array.isArray(t)?t.filter(t=>!!G(e,t)):[],We=(e,t)=>Ue(e,t).filter(t=>{let n=G(e,t);return String(n?.attr_type||``).toLowerCase()===`bool`}),Ge=(e,t)=>{let n=G(e,t);return!n||n.attr_type!==`list`?`List Attribute`:n.attr_name};const Ke=({systemTheme:e,backgroundUrl:t,cardLayout:n,attributes:r,unitItem:s,onUpdateMetadata:c})=>{let[l,u]=(0,E.useState)({}),[d,f]=(0,E.useState)({}),h=(0,E.useRef)({}),g=(0,E.useRef)({}),{rows:ee}=(0,E.useMemo)(()=>le(n),[n]),_=(0,E.useMemo)(()=>{let e=s.metadata?.[a.UNIT_NAME];if(typeof e==`string`&&e.trim())return e;let t=s.text?.plainText;return typeof t==`string`&&t.trim()?t:typeof s.name==`string`&&s.name.trim()?s.name:`Unknown`},[s]),[v,y]=(0,E.useState)(_);(0,E.useEffect)(()=>{y(_)},[_]);let te=async()=>{let e=v.trim(),t=_.trim()||`Unknown`,n=e||t;y(n),n!==_&&await c({[a.UNIT_NAME]:n})},x=e=>`${o.EXTENSIONID}/${e}`,ne=e=>{let t=s.metadata?.[x(e)];return t==null?``:typeof t==`string`?t:typeof t==`number`||typeof t==`boolean`?String(t):``},re=e=>{let t=s.metadata?.[x(e)];if(typeof t==`boolean`)return t;if(typeof t==`number`)return t!==0;if(typeof t==`string`){let e=t.trim().toLowerCase();return e===`true`||e===`1`||e===`yes`||e===`on`}return!1},ie=(e,t)=>l[e]??ne(t),ae=e=>{let t=e?.attr_func;return typeof t==`string`&&t.trim().length>0},oe=(0,E.useMemo)(()=>{let e={};for(let t of r){let n=ne(t.attr_bid).trim();if(!n)continue;let r=Number(n);Number.isFinite(r)&&(e[t.attr_bid]=r)}return e},[r,s.metadata]),se=e=>{let t=e?.attr_func;if(typeof t!=`string`||t.trim().length===0)return null;let n=S(t,{bidValueMap:oe,onMissingBid:`error`});return!n.valid||!n.notation?(b.warn(`[FORGE] Could not convert attr_func for ${e?.attr_bid||`unknown`}: ${n.error||`Unknown conversion error`}`),null):n.notation},C=async(e,t)=>{try{let n=await i.scene.getMetadata(),r=(await i.party.getPlayers()).find(e=>e.id===s.createdUserId),a=await i.player.getId(),o=await i.player.getColor();await p({notation:e,actionName:t,senderName:_,senderId:s.createdUserId||a||s.id,senderColor:r?.color||o||`#ffffff`},n)}catch(t){b.error(`Failed to send dice roll from CardLayoutRenderer`,e,t),b.log(e)}},w=async e=>{if(!e)return;let t=se(e);t&&await C(t,e.attr_name||e.attr_bid||`Roll`)};(0,E.useEffect)(()=>()=>{Object.values(h.current).forEach(e=>{window.clearTimeout(e)})},[]);let T=e=>!!d[e],O=(e,t)=>{f(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},Ke=e=>{f(t=>{let{[e]:n,...r}=t;return r})},q=(e,t)=>{let n=h.current[e];n&&window.clearTimeout(n),h.current[e]=window.setTimeout(()=>{g.current[e]=!0,O(e,t),delete h.current[e]},500)},J=e=>{let t=h.current[e];t&&(window.clearTimeout(t),delete h.current[e])},qe=e=>g.current[e]?(delete g.current[e],!0):!1,Je=async(e,t)=>{await c({[x(e)]:t})},Y=async(e,t)=>{await c({[x(e)]:t})},Ye=e=>{let t=s.metadata?.[x(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``}}):[]},Xe=e=>{let t=s.metadata?.[x(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``,inUse:!!t.inUse}}):[]},Ze=(e,t)=>{b.log(e,t)},X=e=>{e&&(e.style.height=`0px`,e.style.height=`${Math.max(e.scrollHeight,44)}px`)},Qe=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=e[0],r=(e[1]||``).trim();if(!r)continue;let i=S(r,{bidValueMap:oe,onMissingBid:`error`});!i.valid||!i.notation||t.push({raw:n,notation:i.notation})}return t},Z=async(e,t,n)=>{Ze(`List metadata update`,{listType:n.listType,bid:e,reason:n.reason,entryId:n.entryId,field:n.field,entryCount:t.length,timestamp:Date.now()}),await c({[x(e)]:t})},$e=t=>t===`dash`||t===`dashed`?(0,D.jsx)(z,{$theme:e}):t===`shadow`?(0,D.jsx)(ve,{$theme:e}):t===`ridge`?(0,D.jsx)(ye,{$theme:e}):t===`zigzag`?(0,D.jsx)(B,{$theme:e}):t===`pulse`?(0,D.jsx)(V,{$theme:e}):(0,D.jsx)(_e,{$theme:e}),et=t=>{let n=t.type,i=t.styles||{},a=G(r,i.attributeId),o=i.textAlign||`left`,s=i.stretch===!0;if(n===`line-break`)return(0,D.jsx)(j,{$theme:e,$full:!0,children:$e(i.styleDesign)},t.id);if(n===`line-spacer`)return(0,D.jsx)(ge,{$full:t.fullsize},t.id);if(n===`text`){let n=ze[i.fontSize||`md`],r=K(a,i.labelMode)||`Title Header`;return(0,D.jsx)(j,{$theme:e,$full:t.fullsize,children:(0,D.jsx)(fe,{$theme:e,$fontSize:n,$weight:700,$stretch:s,$align:o,children:r})},t.id)}if(n===`text-value`){let n=He[i.fontSize||`md`],r=K(a,i.labelMode),o=!!r,c=i.labelPosition===`right`?`right`:`left`,l=i.textAlign||`center`,d=i.fontWeight===`bold`?700:400,f=i.fontStyle===`italic`?`italic`:`normal`,p=a?.attr_bid,m=ae(a),h=`text-value:${t.id}:${p||`none`}`,g=m&&T(h),ee=(0,D.jsx)(I,{$theme:e,$fontSize:n,$align:l,$weight:d,$fontStyle:f,$stretch:s,$isRollable:m,type:`text`,readOnly:m&&!g,value:p?ie(h,p):``,onChange:m&&!g?void 0:e=>{if(!p)return;let t=e.target.value;u(e=>({...e,[h]:t}))},onBlur:m&&!g?void 0:async e=>{if(!p)return;let t=e.target.value;await Je(p,t),u(e=>{let{[h]:t,...n}=e;return n}),m&&Ke(h)},onClick:m?()=>{g||qe(h)||w(a)}:void 0,onContextMenu:m?e=>{e.preventDefault(),O(h,e.currentTarget)}:void 0,onTouchStart:m?e=>{g||q(h,e.currentTarget)}:void 0,onTouchEnd:m?()=>{J(h)}:void 0,onTouchCancel:m?()=>{J(h)}:void 0,onKeyDown:e=>{if(m&&!g&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),w(a);return}(g||!m)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`}),_=o?(0,D.jsx)(F,{$theme:e,$fontSize:n,$stretch:s,$weight:d,$fontStyle:f,children:r}):null;return(0,D.jsx)(me,{$full:t.fullsize,children:(0,D.jsxs)(P,{children:[c===`left`?_:null,ee,c===`right`?_:null]})},t.id)}if(n===`text-checkbox`){let n=Be[i.fontSize||`md`],a=t.fullsize?6:3,o=Math.max(1,Math.min(a,Number(i.checkboxCount||1))),c=[...We(r,i.bidList)].slice(0,o);for(;c.length<o;)c.push(``);let l=K(G(r,c[0]||i.attributeId),i.labelMode),u=i.inputType===`slider`,d=i.labelPosition===`right`?`right`:`left`,f=i.fontWeight===`bold`?700:400,p=i.fontStyle===`italic`?`italic`:`normal`,m=l?(0,D.jsx)(Pe,{$theme:e,$fontSize:n,$stretch:s,$weight:f,$fontStyle:p,children:l}):null;return(0,D.jsx)(j,{$theme:e,$full:t.fullsize,children:(0,D.jsxs)(Ne,{children:[d===`left`?m:null,(0,D.jsx)(Fe,{$fullWidth:!m,children:Array.from({length:o}).map((t,n)=>{let r=c[n]||``,i=r?re(r):!1;return u?(0,D.jsx)(Le,{type:`button`,$theme:e,$active:i,disabled:!r,onClick:r?()=>{Y(r,!i)}:void 0,children:(0,D.jsx)(Re,{$theme:e,$active:i})},`slider-${n}`):(0,D.jsx)(Ie,{$theme:e,type:`checkbox`,disabled:!r,checked:i,onChange:r?e=>{Y(r,e.target.checked)}:void 0},`checkbox-${n}`)})}),d===`right`?m:null]})},t.id)}if(n===`column-text`){let n=Ve[i.fontSize||`md`],a=Ue(r,i.bidList),o=i.fontWeight===`bold`?700:400,c=i.fontStyle===`italic`?`italic`:`normal`;return a.length===0?null:(0,D.jsx)(j,{$theme:e,$full:t.fullsize,children:(0,D.jsx)(L,{children:a.map(t=>{let a=K(G(r,t),i.labelMode||`name`);return a?(0,D.jsx)(R,{children:(0,D.jsx)(N,{$theme:e,$fontSize:n,$stretch:s,$align:`center`,$weight:o,$fontStyle:c,children:a})},t):null})})},t.id)}if(n===`column-value`){let n=Ve[i.fontSize||`md`],a=Ue(r,i.bidList);return a.length===0?null:(0,D.jsx)(j,{$theme:e,$full:t.fullsize,children:(0,D.jsx)(L,{children:a.map(i=>{let a=G(r,i),o=ae(a),s=`column-value:${t.id}:${i}`,c=o&&T(s);return(0,D.jsx)(he,{children:(0,D.jsx)(pe,{$theme:e,$fontSize:n,$align:`center`,$isRollable:o,readOnly:o&&!c,value:ie(s,i),onChange:o&&!c?void 0:e=>{let t=e.target.value;u(e=>({...e,[s]:t}))},onBlur:o&&!c?void 0:async e=>{let t=e.target.value;await Je(i,t),u(e=>{let{[s]:t,...n}=e;return n}),o&&Ke(s)},onClick:o?()=>{c||qe(s)||w(a)}:void 0,onContextMenu:o?e=>{e.preventDefault(),O(s,e.currentTarget)}:void 0,onTouchStart:o?e=>{c||q(s,e.currentTarget)}:void 0,onTouchEnd:o?()=>{J(s)}:void 0,onTouchCancel:o?()=>{J(s)}:void 0,onKeyDown:e=>{if(o&&!c&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),w(a);return}(c||!o)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`})},i)})})},t.id)}if(n===`action-list`){let n=G(r,i.attributeId||i.bidList?.[0])?.attr_bid,a=Ge(r,i.attributeId||i.bidList?.[0]),o=n?Ye(n):[];return(0,D.jsx)(j,{$theme:e,$full:t.fullsize,children:(0,D.jsxs)(be,{$theme:e,children:[(0,D.jsxs)(H,{$theme:e,children:[(0,D.jsx)(U,{$theme:e,children:a}),(0,D.jsx)(xe,{type:`button`,$theme:e,"aria-label":`Add Action`,onClick:async()=>{n&&await Z(n,[...o,{id:crypto.randomUUID(),name:``,description:``}],{listType:`action`,reason:`add`})},children:(0,D.jsx)(ce,{size:14})})]}),o.map((r,i)=>(0,D.jsxs)(Se,{children:[(0,D.jsxs)(Ae,{children:[(0,D.jsx)(je,{children:(0,D.jsx)(De,{$theme:e,type:`text`,defaultValue:r.name,placeholder:`Action Name`,onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,name:t}:e),{listType:`action`,reason:`blur-save`,entryId:r.id,field:`name`})}})}),(0,D.jsx)(Ee,{type:`button`,$theme:e,"aria-label":`Delete Action`,onClick:async()=>{n&&await Z(n,o.filter(e=>e.id!==r.id),{listType:`action`,reason:`delete`,entryId:r.id})},children:(0,D.jsx)(m,{size:14})})]}),(()=>{let t=Qe(r.description);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Oe,{$theme:e,defaultValue:r.description,ref:X,placeholder:`Action Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,description:t}:e),{listType:`action`,reason:`blur-save`,entryId:r.id,field:`description`})}}),t.length>0?(0,D.jsx)(W,{children:t.map((t,n)=>(0,D.jsx)(ke,{type:`button`,$theme:e,onClick:()=>{C(t.notation,r.name||`Action`)},title:t.notation,children:t.notation},`${r.id}-action-inline-${n}`))}):null]})})()]},r.id||`${t.id}-action-${i}`))]})},t.id)}if(n===`item-list`){let n=G(r,i.attributeId||i.bidList?.[0])?.attr_bid,a=Ge(r,i.attributeId||i.bidList?.[0]),o=n?Xe(n):[];return(0,D.jsx)(j,{$theme:e,$full:t.fullsize,children:(0,D.jsxs)(be,{$theme:e,children:[(0,D.jsxs)(H,{$theme:e,children:[(0,D.jsx)(U,{$theme:e,children:a}),(0,D.jsx)(xe,{type:`button`,$theme:e,"aria-label":`Add Item`,onClick:async()=>{n&&await Z(n,[...o,{id:crypto.randomUUID(),name:``,description:``,inUse:!1}],{listType:`item`,reason:`add`})},children:(0,D.jsx)(ce,{size:14})})]}),o.map((r,i)=>(0,D.jsxs)(Se,{children:[(0,D.jsxs)(Ce,{children:[(0,D.jsx)(we,{children:(0,D.jsx)(Me,{$theme:e,type:`checkbox`,defaultChecked:r.inUse,onBlur:async e=>{if(!n)return;let t=e.target.checked;await Z(n,o.map(e=>e.id===r.id?{...e,inUse:t}:e),{listType:`item`,reason:`toggle-save`,entryId:r.id,field:`inUse`})}})}),(0,D.jsx)(Te,{$theme:e,children:(0,D.jsx)(De,{$theme:e,type:`text`,defaultValue:r.name,placeholder:`Item Name`,onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,name:t}:e),{listType:`item`,reason:`blur-save`,entryId:r.id,field:`name`})}})}),(0,D.jsx)(Ee,{type:`button`,$theme:e,"aria-label":`Delete Item`,onClick:async()=>{n&&await Z(n,o.filter(e=>e.id!==r.id),{listType:`item`,reason:`delete`,entryId:r.id})},children:(0,D.jsx)(m,{size:14})})]}),(()=>{let t=Qe(r.description);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Oe,{$theme:e,defaultValue:r.description,ref:X,placeholder:`Item Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,description:t}:e),{listType:`item`,reason:`blur-save`,entryId:r.id,field:`description`})}}),t.length>0?(0,D.jsx)(W,{children:t.map((t,n)=>(0,D.jsx)(ke,{type:`button`,$theme:e,onClick:()=>{C(t.notation,r.name||`Item`)},title:t.notation,children:t.notation},`${r.id}-item-inline-${n}`))}):null]})})()]},r.id||`${t.id}-item-${i}`))]})},t.id)}return null};return(0,D.jsx)(ue,{$theme:e,$backgroundUrl:t,children:(0,D.jsxs)(k,{children:[(0,D.jsx)(A,{children:(0,D.jsx)(de,{$theme:e,children:(0,D.jsx)(M,{$theme:e,value:v,onChange:e=>{y(e.target.value)},onBlur:()=>{te()},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},"aria-label":`Unit Name`})})}),ee.map(e=>(0,D.jsx)(A,{children:e.items.map(e=>et(e))},`row-${e.row}`))]})})};var q={CURRENT_THEME:`${o.EXTENSIONID}/CurrentTheme`,CURRENT_CARD:`${o.EXTENSIONID}/CurrentCard`,CURRENT_ATTR:`${o.EXTENSIONID}/CurrentAttr`},J={primary:u.theme_primary,offset:u.theme_offset,background:u.theme_background,border:u.theme_border,background_url:u.background_url},qe=l.div`
  height: 100vh;
  width: 100%;
  background-color: ${e=>c(e.$theme.background,.5)};
  color: ${e=>e.$theme.primary};
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 16px;
  box-sizing: border-box;
  overflow: hidden;
  backdrop-filter: blur(6px);
  background-image: ${e=>e.$theme.background_url?`linear-gradient(${c(e.$theme.background,.52)}, ${c(e.$theme.background,.52)}), url(${e.$theme.background_url})`:`none`};
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
`,Je=l.div`
  height: 100%;
  overflow: hidden;
  padding: 40px 4px 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
`,Y=l.p`
  margin: 0;
  color: ${e=>e.$theme.primary};
  text-align: center;
  align-content: center;
  font-weight: 600;
  font-size: 24px;
`,Ye=l.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: min(calc(100% - 16px), 350px);
  z-index: 10;
`,Xe=l.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`,Ze=l.select`
  flex: 1;
  min-width: 0;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.82)};
  color: ${e=>e.$theme.primary};
  padding: 0 6px;
  box-sizing: border-box;
  font-size: 12px;
`,X=l.button`
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${e=>c(e.$theme.background,.82)};
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background: ${e=>c(e.$theme.offset,.5)};
  }
`,Qe=l.img`
  width: 28px;
  height: 28px;
  display: block;
`,Z=l.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 6px;
  height: 90%;
  border-radius: 12px 12px 10px 10px;
  border: 4px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.84)};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transform: ${e=>e.$open?`translateY(0)`:`translateY(calc(100% - 40px))`};
  transition: transform 0.22s ease;
  z-index: 20;
  overflow: visible;
`,$e=l.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 52px;
  height: 52px;
  backdrop-filter: blur(8px);
  background: ${e=>c(e.$theme.background,.5)};
  border-radius: 50%;
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,et=l.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 4px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.98)};
  color: ${e=>e.$theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 22;

  &:hover {
    background: ${e=>c(e.$theme.offset,.5)};
  }
`,tt=l.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  padding: 42px 10px 10px;
  color: ${e=>c(e.$theme.primary,.9)};
`,nt=l.div`
  flex: 1 1 80%;
  min-height: 0;
  border: 2px solid ${e=>c(e.$theme.border,.85)};
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>c(e.$theme.primary,.88)};
  font-size: 14px;
  font-weight: 600;
  overflow-y: auto;
  padding: 8px;
  box-sizing: border-box;
`,rt=l.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,it=l.div`
  width: 100%;
  border: 1px solid ${e=>c(e.$theme.border,.8)};
  border-radius: 8px;
  background: ${e=>c(e.$theme.background,.72)};
  padding: 6px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: center;
`,at=l.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,ot=l.div`
  color: ${e=>e.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,st=l.span`
  font-size: 12px;
  line-height: 1;
`,ct=l.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,lt=l.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`,ut=l.span`
  margin-left: 6px;
  width: 18px;
  height: 18px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 6px;
  border: 1px solid ${e=>c(e.$theme.border,.85)};
  background: ${e=>c(e.$theme.offset,.35)};
  color: ${e=>e.$theme.primary};
`,dt=l.span`
  color: ${e=>e.$color};
`,ft=l.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,pt=l.button`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>e.$variant===`import`?c(e.$theme.offset,.45):c(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`,mt=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,ht=l.input`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`,gt=l.button`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${e=>c(e.$theme.offset,.5)};
  }
`,_t=l.div`
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
`,vt=l.div`
  display: inline-flex;
  justify-content: space-between;
  width: 40%;
  pointer-events: auto;
`,Q=l.button`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.9)};
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
    background: ${e=>c(e.$theme.offset,.5)};
  }

  &:disabled:hover {
    background: ${e=>c(e.$theme.background,.9)};
  }
`,yt=l(Q)`
  background: ${e=>e.$active?c(e.$theme.offset,.45):c(e.$theme.background,.9)};

  &:disabled {
    background: ${e=>c(e.$theme.background,.9)};
  }
`,$=l.img`
  width: 20px;
  height: 20px;
  display: block;
  filter: ${e=>e.$active?`brightness(0) saturate(100%) invert(23%) sepia(82%) saturate(6574%) hue-rotate(349deg) brightness(96%) contrast(115%)`:`none`};
`,bt=l.textarea`
  width: 100%;
  min-height: 220px;
  border-radius: 8px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 8px;
  box-sizing: border-box;
  resize: vertical;
  font-size: 12px;
`,xt=l.button`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 8px;
  background: ${e=>e.$variant===`primary`?c(e.$theme.offset,.5):c(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 6px 10px;
  cursor: pointer;
`,St=l.div`
  margin-top: 8px;
  color: ${e=>c(e.$theme.offset,.95)};
  font-size: 12px;
`,Ct=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,wt=l.div`
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
`,Tt=l.h3`
  color: ${e=>e.$theme.primary};
  margin: 0 0 15px 0;
  font-size: 18px;
`,Et=l.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
`,Dt=()=>{let e=new URLSearchParams(window.location.search).get(`unitid`);return e&&e.split(`,`)[0]?.trim()||null},Ot=()=>{let e=new URLSearchParams(window.location.search).get(`pinned`);if(!e)return!1;let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`},kt=`POP_${o.CARDSID}`,At=(e,t)=>{let n=new URLSearchParams;return n.set(`unitid`,e),t&&n.set(`pinned`,`true`),`/pages/forgecard.html?${n.toString()}`},jt=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},Mt=e=>{if(e===!0)return!0;if(typeof e==`string`){let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`}return typeof e==`number`?e===1:!1};T.createRoot(document.getElementById(`root`)).render((0,D.jsx)(E.StrictMode,{children:(0,D.jsx)(d,{children:(0,D.jsx)(()=>{let[e,t]=(0,E.useState)(()=>Dt()),n=(0,E.useMemo)(()=>Ot(),[]),[r,c]=(0,E.useState)({metadata:{},items:[]}),[l,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(!1),[m,g]=(0,E.useState)(!1),[S,ce]=(0,E.useState)(!1),[T,le]=(0,E.useState)(``),[O,ue]=(0,E.useState)(``),[k,A]=(0,E.useState)(!1),[j,de]=(0,E.useState)([]),[M,N]=(0,E.useState)([]),[fe,pe]=(0,E.useState)(!1),[me,P]=(0,E.useState)(``),[F,I]=(0,E.useState)(null),[L,R]=(0,E.useState)(!1),he=e=>{let t=e[s.ENABLE_CONSOLE_LOG];typeof t==`boolean`&&b.setEnabled(t)},ge=(0,E.useMemo)(()=>jt(r.metadata[q.CURRENT_CARD])||u.card_layout,[r.metadata]),_e=(0,E.useMemo)(()=>jt(r.metadata[q.CURRENT_ATTR])||u.attributes,[r.metadata]),z=(0,E.useMemo)(()=>{let e=r.metadata[q.CURRENT_THEME];return!e?.primary||!e?.offset||!e?.background||!e?.border?J:e},[r.metadata]);(0,E.useEffect)(()=>{let e=!1;return(async()=>{try{await v()}catch(e){b.log(`Auth hydration failed in card iframe`,e)}finally{e||R(!0)}})(),()=>{e=!0}},[]),(0,E.useEffect)(()=>{let e=!0;(async()=>{let[t,n,r,a,o]=await Promise.all([i.scene.getMetadata(),i.scene.items.getItems(),i.room.getMetadata(),i.player.getId(),i.player.getRole()]);e&&(he(t),c({metadata:t,items:n}),d(a),p(String(o||``).toUpperCase()===`GM`),g(!0))})();let t=i.scene.onMetadataChange(t=>{e&&(c(e=>({...e,metadata:t})),he(t))}),n=i.room.onMetadataChange(e=>{}),r=i.scene.items.onChange(t=>{e&&c(e=>({...e,items:t}))});return()=>{e=!1,t(),n(),r()}},[]);let ve=e=>{let t=e.metadata?.[a.UNIT_NAME];if(typeof t==`string`&&t.trim())return t;let n=e.text?.plainText;return typeof n==`string`&&n.trim()?n:typeof e.name==`string`&&e.name.trim()?e.name:`Unknown`},ye=(0,E.useMemo)(()=>r.items.filter(e=>Mt(e.metadata?.[a.FABRICATED])).filter(e=>f||e.createdUserId===l).filter(t=>t.id!==e).map(e=>({id:e.id,name:ve(e)})).sort((e,t)=>e.name.localeCompare(t.name)),[r.items,e,f,l]),B=(0,E.useMemo)(()=>e&&r.items.find(t=>t.id===e)||null,[r.items,e]),V=async()=>e&&(await i.scene.items.getItems()).find(t=>t.id===e)||null,be=async e=>{B&&(await i.scene.items.updateItems([B.id],t=>{let n={...t[0].metadata||{}};Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),t[0].metadata=n}),c(t=>({...t,items:t.items.map(t=>{if(t.id!==B.id)return t;let n={...t.metadata||{}};return Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),{...t,metadata:n}})})))},H=async e=>{if(!B)return;let t=[a.FABRICATED,a.INITIATIVE,a.ON_LIST];await i.scene.items.updateItems([B.id],n=>{let r=n[0].metadata,i={},a={};for(let[e,n]of Object.entries(r))e.startsWith(`${o.EXTENSIONID}/`)||(i[e]=n),t.includes(e)&&(a[e]=n);n[0].metadata={...i,...e,...a}}),c(n=>({...n,items:n.items.map(n=>{if(n.id!==B.id)return n;let r={},i={};for(let[e,a]of Object.entries(n.metadata||{}))e.startsWith(`${o.EXTENSIONID}/`)||(r[e]=a),t.includes(e)&&(i[e]=a);return{...n,metadata:{...r,...e,...i}}})}))},U=async()=>{de(await ae())},xe=e=>{let t=e.trim(),n=t?t[0].toUpperCase():`A`;return`hsl(${Math.max(0,Math.min(25,n.charCodeAt(0)-65))/26*360}, 70%, 65%)`},Se=async e=>{let[t,n]=await Promise.all([ee(e),x()?y(e):Promise.resolve([])]);return[...n.map(e=>({...e,source:`remote-user`})),...t.map(e=>({...e,source:`remote-shared`}))]},Ce=(0,E.useMemo)(()=>{let e=O.trim().toLowerCase(),t={local:0,"remote-user":1,"remote-shared":2},n=(e,n)=>t[e.source]===t[n.source]?e.favorite===n.favorite?e.name.localeCompare(n.name):e.favorite?-1:1:t[e.source]-t[n.source],r=[...j].sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);if(!e)return r.filter(e=>e.favorite).map(e=>({...e,source:`local`}));let i=r.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),a=M.filter(e=>e.source===`remote-user`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),o=M.filter(e=>e.source===`remote-shared`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e));return[...i.map(e=>({...e,source:`local`})),...a,...o].sort(n)},[j,M,O]),we=async()=>{if(!e){await i.notification.show(`No unit selected to pin.`,`ERROR`);return}let t=await i.viewport.getWidth(),r=await i.viewport.getHeight(),a=r>800?700:r-100;if(!n){await i.popover.open({id:kt,url:At(e,!0),height:400,width:350,anchorPosition:{top:50,left:t-70},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},transformOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},hidePaper:!0,disableClickAway:!0}),await i.popover.close(o.CARDSID);return}await i.popover.open({id:o.CARDSID,url:At(e,!1),height:a,width:350,anchorPosition:{left:t/2,top:r/2},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`CENTER`},transformOrigin:{vertical:`CENTER`,horizontal:`CENTER`},hidePaper:!0,disableClickAway:!0}),await i.popover.close(kt)},Te=()=>{f&&A(e=>!e)},Ee=async()=>{if(!f)return;let e=await V();if(!e){await i.notification.show(`No unit selected to save.`,`ERROR`);return}L||(await v(),R(!0));try{let t=(await i.player.getName()).trim(),n=x()?await te(e.metadata,t,k):await h(e.metadata,t,k);await U();let r=x()?`online Collection`:`Collection`;await i.notification.show(n===`created`?`Unit saved to ${r}.`:`Unit updated in ${r}.`)}catch(e){b.log(`Collection save failed`,e),await i.notification.show(`Could not save this unit to Collection.`,`ERROR`)}},De=async()=>{if(!await V()){await i.notification.show(`No unit selected to import into.`,`ERROR`);return}I(null),P(``),pe(!0)},Oe=async()=>{let e=await V();if(!e){await i.notification.show(`No unit selected to export.`,`ERROR`);return}try{let t=_(e.metadata),n=t[a.UNIT_NAME],r=typeof n==`string`?n.trim():``;if(!r){await i.notification.show(`Current unit has no valid unit name to export.`,`ERROR`);return}let o={name:r,author:(await i.player.getName()).trim()||`Unknown`,metadata:t};await navigator.clipboard.writeText(JSON.stringify(o,null,2)),await i.notification.show(`Unit data copied to clipboard.`)}catch(e){b.log(`Unit export failed`,e),await i.notification.show(`Could not copy unit data to clipboard.`,`ERROR`)}},W=()=>{pe(!1),I(null),P(``)},ke=e=>{let t=JSON.parse(e);if(!t||typeof t!=`object`||Array.isArray(t))throw Error(`Import data must be a JSON object.`);let n=t,r=n.metadata&&typeof n.metadata==`object`?n.metadata:t;if(!r||typeof r!=`object`||Array.isArray(r))throw Error(`Import data must include a metadata object.`);let i=_(r),o=i[a.UNIT_NAME];if(!(typeof o==`string`&&o.trim()))throw Error(`Imported metadata must include a valid unit name.`);return i},Ae=async()=>{if(!await V()){I(`No unit selected to import into.`);return}let e=me.trim();if(!e){I(`Paste JSON data before importing.`);return}try{await H(ke(e)),A(!1),W(),await i.notification.show(`Unit data imported successfully.`)}catch(e){I(e instanceof Error?e.message:`Import failed.`)}},je=()=>{let e=T.trim();if(ue(e),!e){N([]);return}(async()=>{L||(await v(),R(!0)),N(await Se(e))})().catch(async e=>{b.log(`Supabase collection search failed`,e),N([]),await i.notification.show(`Could not search online collection.`,`ERROR`)})},Me=async e=>{if(!B){await i.notification.show(`No unit selected to import into.`,`ERROR`);return}try{await H(e.metadata),A(!1),await i.notification.show(e.source===`local`?`Imported ${e.name}.`:`Imported ${e.name} from online collection.`)}catch(e){b.log(`Collection record import failed`,e),await i.notification.show(`Could not import collection record.`,`ERROR`)}},Ne=async e=>{try{if(e.source===`remote-user`)await ne(e.id),N(t=>t.filter(t=>!(t.source===`remote-user`&&t.id===e.id)));else if(e.source===`local`)await re(e.id),de(t=>t.filter(t=>t.id!==e.id));else return;await i.notification.show(`Deleted ${e.name} from Collection.`)}catch(e){b.log(`Collection record delete failed`,e),await i.notification.show(`Could not delete collection record.`,`ERROR`)}};return(0,E.useEffect)(()=>{S&&U().catch(e=>{b.log(`Failed to load collection records`,e)})},[S]),(0,E.useEffect)(()=>{S&&(ue(``),le(``),N([]))},[S]),(0,D.jsxs)(qe,{$theme:z,children:[(0,D.jsxs)(Je,{children:[(0,D.jsx)(Ye,{children:(0,D.jsxs)(Xe,{children:[(0,D.jsxs)(Ze,{$theme:z,"aria-label":`Choose Unit`,value:``,onChange:e=>{let n=e.target.value;n&&t(n)},children:[(0,D.jsx)(`option`,{value:``,children:`Choose Unit`}),ye.map(e=>(0,D.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,D.jsx)(X,{type:`button`,$theme:z,"aria-label":`Close Card`,onClick:async()=>{await i.popover.close(n?kt:o.CARDSID)},children:(0,D.jsx)(Qe,{src:`/close.svg`,alt:``,"aria-hidden":`true`})})]})}),m?e?B?(0,D.jsx)(Ke,{systemTheme:z,backgroundUrl:z.background_url,cardLayout:ge,attributes:_e,unitItem:B,onUpdateMetadata:be}):(0,D.jsx)(Y,{$theme:z,children:`Unit not found in current scene.`}):(0,D.jsx)(Y,{$theme:z,children:`No unit id supplied in URL.`}):(0,D.jsx)(Y,{$theme:z,children:`Loading card…`})]}),(0,D.jsxs)(Z,{$theme:z,$open:S,children:[(0,D.jsxs)(_t,{children:[(0,D.jsxs)(vt,{children:[(0,D.jsx)(Q,{type:`button`,$theme:z,"aria-label":`Pin`,onClick:()=>{we()},children:(0,D.jsx)($,{src:`/pin.svg`,alt:``,"aria-hidden":`true`})}),(0,D.jsx)(yt,{type:`button`,$theme:z,$active:k,"aria-label":`Favorite`,disabled:!f,onClick:Te,children:(0,D.jsx)($,{$active:k,src:`/favorite.svg`,alt:``,"aria-hidden":`true`})}),(0,D.jsx)(Q,{type:`button`,$theme:z,"aria-label":`CollectionSave`,disabled:!f,onClick:Ee,children:(0,D.jsx)($,{src:`/collection.svg`,alt:``,"aria-hidden":`true`})})]}),(0,D.jsxs)(vt,{children:[(0,D.jsx)(Q,{type:`button`,$theme:z,"aria-label":`Import`,onClick:De,children:(0,D.jsx)($,{src:`/import.svg`,alt:``,"aria-hidden":`true`})}),(0,D.jsx)(Q,{type:`button`,$theme:z,"aria-label":`Export`,onClick:Oe,children:(0,D.jsx)($,{src:`/export.svg`,alt:``,"aria-hidden":`true`})})]})]}),(0,D.jsx)($e,{$theme:z,children:(0,D.jsx)(et,{type:`button`,$theme:z,"aria-label":S?`Close Tray`:`Open Tray`,onClick:()=>{ce(e=>!e)},children:(0,D.jsx)(ie,{size:22})})}),(0,D.jsx)(tt,{$theme:z,children:S?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(nt,{$theme:z,children:(0,D.jsx)(rt,{children:Ce.length===0?(0,D.jsx)(Y,{$theme:z,children:`No collection records found.`}):Ce.map(e=>(0,D.jsxs)(it,{$theme:z,children:[(0,D.jsxs)(at,{children:[(0,D.jsxs)(ot,{$theme:z,children:[e.favorite?(0,D.jsx)(st,{children:`❤`}):null,(0,D.jsx)(ct,{children:e.name})]}),(0,D.jsxs)(lt,{children:[(0,D.jsx)(`span`,{children:`→`}),(0,D.jsx)(dt,{$color:xe(e.author),children:e.author}),(0,D.jsxs)(ut,{$theme:z,title:e.source===`local`?`Local`:e.source===`remote-user`?`My Cloud`:`Shared`,children:[e.source===`local`?(0,D.jsx)(se,{size:11}):null,e.source===`remote-user`?(0,D.jsx)(oe,{size:11}):null,e.source===`remote-shared`?(0,D.jsx)(w,{size:11}):null]})]})]}),(0,D.jsxs)(ft,{children:[(0,D.jsx)(pt,{type:`button`,$theme:z,$variant:`import`,onClick:()=>{Me(e)},children:`Import`}),e.source===`remote-shared`?null:(0,D.jsx)(pt,{type:`button`,$theme:z,$variant:`delete`,onClick:()=>{Ne(e)},children:`X`})]})]},`${e.source}:${e.id}`))})}),(0,D.jsxs)(mt,{children:[(0,D.jsx)(ht,{$theme:z,type:`text`,value:T,placeholder:`Enter query...`,onChange:e=>{le(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),je())}}),(0,D.jsx)(gt,{type:`button`,$theme:z,"aria-label":`Search`,onClick:je,children:(0,D.jsx)(C,{size:16})})]})]}):null})]}),fe?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Ct,{onClick:W}),(0,D.jsxs)(wt,{$theme:z,onClick:e=>{e.stopPropagation()},children:[(0,D.jsx)(Tt,{$theme:z,children:`Import Unit Data`}),(0,D.jsx)(bt,{$theme:z,value:me,placeholder:`Paste exported unit JSON here`,onChange:e=>{P(e.target.value),F&&I(null)}}),F?(0,D.jsx)(St,{$theme:z,children:F}):null,(0,D.jsxs)(Et,{children:[(0,D.jsx)(xt,{type:`button`,$theme:z,onClick:W,children:`Cancel`}),(0,D.jsx)(xt,{type:`button`,$theme:z,$variant:`primary`,onClick:Ae,children:`Import`})]})]})]}):null]})},{})})}));