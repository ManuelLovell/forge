import{A as e,F as t,M as n,S as r,T as i,_ as a,b as o,g as s,m as c,n as l,p as u,t as d,x as f,y as p}from"./defaultgamesystem-Bn_OpVZh.js";import{C as m,E as h,M as g,P as _,S as v,T as ee,a as te,b as ne,d as y,i as re,o as ie,p as b,s as ae,t as oe,v as se,w as x,x as ce}from"./unitCollectionRemote-CN0yos9_.js";/* empty css               */var S=h(`cloudy`,[[`path`,{d:`M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z`,key:`44yre2`}],[`path`,{d:`M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61`,key:`leugyv`}]]),C=h(`hard-drive`,[[`line`,{x1:`22`,x2:`2`,y1:`12`,y2:`12`,key:`1y58io`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}],[`line`,{x1:`6`,x2:`6.01`,y1:`16`,y2:`16`,key:`sgf278`}],[`line`,{x1:`10`,x2:`10.01`,y1:`16`,y2:`16`,key:`1l4acy`}]]),le=h(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),ue=h(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),w=h(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),T=t(e(),1),E=t(n(),1);const de=e=>{let t=[...Array.isArray(e)?e:[]].sort((e,t)=>e.row===t.row?e.col-t.col:e.row-t.row),n=[];return t.forEach(e=>{let t=n[n.length-1];if(!t||t.row!==e.row){n.push({row:e.row,items:[e]});return}t.items.push(e)}),{sorted:t,rows:n}};var D=r(),O=e=>`
    0 1px 1px ${c(e.background,.95)},
    0 0 2px ${c(e.background,.85)}
  `,fe=l.div`
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
`,pe=l(j)`
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
`,me=l.div`
  color: ${e=>e.$theme.primary};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`,he=l.input`
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
`,ge=l.div`
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
`,_e=l.div`
  flex: 1;
  min-width: 0;
`,ve=l.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 18px;
`,ye=l.div`
  width: 100%;
  height: 5px;
  background: ${e=>`linear-gradient(10deg, ${e.$theme.border||`white`}, rgba(255,255,255,0))`};
`,z=l.div`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${e=>e.$theme.border||`rgba(255,255,255,0.5)`};
`,B=l.div`
  width: 100%;
  height: 10px;
  background: ${e=>`linear-gradient(to bottom, ${e.$theme.border||`rgba(255,255,255,0.2)`}, transparent)`};
`,be=l.div`
  width: 100%;
  height: 2px;
  background: ${e=>e.$theme.border||`#222`};
  box-shadow: ${e=>`inset 0 1px 0 ${e.$theme.border||`#444`}, 0 1px 0 #000`};
`,xe=l.div`
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
`,H=l.div`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`,Se=l.div`
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
`,W=l.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ce=l.div`
  margin-bottom: 8px;
`,we=l.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`,Te=l.div`
  width: 20px;
  display: flex;
  justify-content: center;
`,Ee=l.div`
  flex: 1;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`,De=l.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Oe=l.input`
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
`,ke=l.textarea`
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
`,Ae=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`,G=l.button`
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
`,je=l.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`,Me=l.div`
  flex: 1;
`,Ne=l.input`
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
`,Pe=l.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 8px;
`,Fe=l.span`
  color: ${e=>e.$theme.offset||d.theme_offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
`,Ie=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: space-evenly;
  width: ${e=>e.$fullWidth?`100%`:`auto`};
`,Le=l.input`
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
`,Re=l.button`
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
`,ze=l.div`
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
`,Be={sm:`14px`,md:`16px`,lg:`18px`},Ve={sm:`14px`,md:`16px`,lg:`18px`},He={sm:`14px`,md:`16px`,lg:`18px`},Ue={sm:`14px`,md:`16px`,lg:`18px`},K=(e,t)=>t&&e.find(e=>{let n=e.attr_bid===t,r=String(e.id??``)===String(t);return n||r})||null,We=(e,t)=>e?t===`abbr`?e.attr_abbr:t===`name`||!t||t===`text`?e.attr_name:``:``,Ge=(e,t)=>Array.isArray(t)?t.filter(t=>!!K(e,t)):[],Ke=(e,t)=>Ge(e,t).filter(t=>{let n=K(e,t);return String(n?.attr_type||``).toLowerCase()===`bool`}),qe=(e,t)=>{let n=K(e,t);return!n||n.attr_type!==`list`?`List Attribute`:n.attr_name};const q=({systemTheme:e,backgroundUrl:t,cardLayout:n,attributes:r,unitItem:s,onUpdateMetadata:c})=>{let[l,u]=(0,E.useState)({}),[d,f]=(0,E.useState)({}),p=(0,E.useRef)({}),m=(0,E.useRef)({}),{rows:h}=(0,E.useMemo)(()=>de(n),[n]),v=(0,E.useMemo)(()=>{let e=s.metadata?.[a.UNIT_NAME];if(typeof e==`string`&&e.trim())return e;let t=s.text?.plainText;return typeof t==`string`&&t.trim()?t:typeof s.name==`string`&&s.name.trim()?s.name:`Unknown`},[s]),[ee,te]=(0,E.useState)(v);(0,E.useEffect)(()=>{te(v)},[v]);let ne=async()=>{let e=ee.trim(),t=v.trim()||`Unknown`,n=e||t;te(n),n!==v&&await c({[a.UNIT_NAME]:n})},y=e=>`${o.EXTENSIONID}/${e}`,re=e=>{let t=s.metadata?.[y(e)];return t==null?``:typeof t==`string`?t:typeof t==`number`||typeof t==`boolean`?String(t):``},ie=e=>{let t=s.metadata?.[y(e)];if(typeof t==`boolean`)return t;if(typeof t==`number`)return t!==0;if(typeof t==`string`){let e=t.trim().toLowerCase();return e===`true`||e===`1`||e===`yes`||e===`on`}return!1},b=(e,t)=>l[e]??re(t),oe=e=>{let t=e?.attr_func;return typeof t==`string`&&t.trim().length>0},se=(0,E.useMemo)(()=>{let e={};for(let t of r){let n=re(t.attr_bid).trim();if(!n)continue;let r=Number(n);Number.isFinite(r)&&(e[t.attr_bid]=r)}return e},[r,s.metadata]),ce=e=>{let t=e?.attr_func;if(typeof t!=`string`||t.trim().length===0)return null;let n=ae(t,{bidValueMap:se,onMissingBid:`error`});return!n.valid||!n.notation?(_.warn(`[FORGE] Could not convert attr_func for ${e?.attr_bid||`unknown`}: ${n.error||`Unknown conversion error`}`),null):n.notation},S=async(e,t)=>{try{let n=await i.scene.getMetadata(),r=(await i.party.getPlayers()).find(e=>e.id===s.createdUserId),a=await i.player.getId(),o=await i.player.getColor();await g({notation:e,actionName:t,senderName:v,senderId:s.createdUserId||a||s.id,senderColor:r?.color||o||`#ffffff`},n)}catch(t){_.error(`Failed to send dice roll from CardLayoutRenderer`,e,t),_.log(e)}},C=async e=>{if(!e)return;let t=ce(e);t&&await S(t,e.attr_name||e.attr_bid||`Roll`)};(0,E.useEffect)(()=>()=>{Object.values(p.current).forEach(e=>{window.clearTimeout(e)})},[]);let ue=e=>!!d[e],w=(e,t)=>{f(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},T=e=>{f(t=>{let{[e]:n,...r}=t;return r})},O=(e,t)=>{let n=p.current[e];n&&window.clearTimeout(n),p.current[e]=window.setTimeout(()=>{m.current[e]=!0,w(e,t),delete p.current[e]},500)},q=e=>{let t=p.current[e];t&&(window.clearTimeout(t),delete p.current[e])},J=e=>m.current[e]?(delete m.current[e],!0):!1,Je=async(e,t)=>{await c({[y(e)]:t})},Ye=async(e,t)=>{await c({[y(e)]:t})},Xe=e=>{let t=s.metadata?.[y(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``}}):[]},Y=e=>{let t=s.metadata?.[y(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``,inUse:!!t.inUse}}):[]},Ze=(e,t)=>{_.log(e,t)},X=e=>{e&&(e.style.height=`0px`,e.style.height=`${Math.max(e.scrollHeight,44)}px`)},Qe=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=e[0],r=(e[1]||``).trim();if(!r)continue;let i=ae(r,{bidValueMap:se,onMissingBid:`error`});!i.valid||!i.notation||t.push({raw:n,notation:i.notation})}return t},Z=async(e,t,n)=>{Ze(`List metadata update`,{listType:n.listType,bid:e,reason:n.reason,entryId:n.entryId,field:n.field,entryCount:t.length,timestamp:Date.now()}),await c({[y(e)]:t})},$e=t=>t===`dash`||t===`dashed`?(0,D.jsx)(z,{$theme:e}):t===`shadow`?(0,D.jsx)(B,{$theme:e}):t===`ridge`?(0,D.jsx)(be,{$theme:e}):t===`zigzag`?(0,D.jsx)(xe,{$theme:e}):t===`pulse`?(0,D.jsx)(V,{$theme:e}):(0,D.jsx)(ye,{$theme:e}),et=t=>{let n=t.type,i=t.styles||{},a=K(r,i.attributeId),o=i.textAlign||`left`,s=i.stretch===!0;if(n===`line-break`)return(0,D.jsx)(j,{$theme:e,$full:!0,children:$e(i.styleDesign)},t.id);if(n===`line-spacer`)return(0,D.jsx)(ve,{$full:t.fullsize},t.id);if(n===`text`){let n=Be[i.fontSize||`md`],r=We(a,i.labelMode)||`Title Header`;return(0,D.jsx)(j,{$theme:e,$full:t.fullsize,children:(0,D.jsx)(me,{$theme:e,$fontSize:n,$weight:700,$stretch:s,$align:o,children:r})},t.id)}if(n===`text-value`){let n=Ue[i.fontSize||`md`],r=We(a,i.labelMode),o=!!r,c=i.labelPosition===`right`?`right`:`left`,l=i.textAlign||`center`,d=i.fontWeight===`bold`?700:400,f=i.fontStyle===`italic`?`italic`:`normal`,p=a?.attr_bid,m=oe(a),h=`text-value:${t.id}:${p||`none`}`,g=m&&ue(h),_=(0,D.jsx)(I,{$theme:e,$fontSize:n,$align:l,$weight:d,$fontStyle:f,$stretch:s,$isRollable:m,type:`text`,readOnly:m&&!g,value:p?b(h,p):``,onChange:m&&!g?void 0:e=>{if(!p)return;let t=e.target.value;u(e=>({...e,[h]:t}))},onBlur:m&&!g?void 0:async e=>{if(!p)return;let t=e.target.value;await Je(p,t),u(e=>{let{[h]:t,...n}=e;return n}),m&&T(h)},onClick:m?()=>{g||J(h)||C(a)}:void 0,onContextMenu:m?e=>{e.preventDefault(),w(h,e.currentTarget)}:void 0,onTouchStart:m?e=>{g||O(h,e.currentTarget)}:void 0,onTouchEnd:m?()=>{q(h)}:void 0,onTouchCancel:m?()=>{q(h)}:void 0,onKeyDown:e=>{if(m&&!g&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),C(a);return}(g||!m)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`}),v=o?(0,D.jsx)(F,{$theme:e,$fontSize:n,$stretch:s,$weight:d,$fontStyle:f,children:r}):null;return(0,D.jsx)(ge,{$full:t.fullsize,children:(0,D.jsxs)(P,{children:[c===`left`?v:null,_,c===`right`?v:null]})},t.id)}if(n===`text-checkbox`){let n=Ve[i.fontSize||`md`],a=t.fullsize?6:3,o=Math.max(1,Math.min(a,Number(i.checkboxCount||1))),c=[...Ke(r,i.bidList)].slice(0,o);for(;c.length<o;)c.push(``);let l=We(K(r,c[0]||i.attributeId),i.labelMode),u=i.inputType===`slider`,d=i.labelPosition===`right`?`right`:`left`,f=i.fontWeight===`bold`?700:400,p=i.fontStyle===`italic`?`italic`:`normal`,m=l?(0,D.jsx)(Fe,{$theme:e,$fontSize:n,$stretch:s,$weight:f,$fontStyle:p,children:l}):null;return(0,D.jsx)(j,{$theme:e,$full:t.fullsize,children:(0,D.jsxs)(Pe,{children:[d===`left`?m:null,(0,D.jsx)(Ie,{$fullWidth:!m,children:Array.from({length:o}).map((t,n)=>{let r=c[n]||``,i=r?ie(r):!1;return u?(0,D.jsx)(Re,{type:`button`,$theme:e,$active:i,disabled:!r,onClick:r?()=>{Ye(r,!i)}:void 0,children:(0,D.jsx)(ze,{$theme:e,$active:i})},`slider-${n}`):(0,D.jsx)(Le,{$theme:e,type:`checkbox`,disabled:!r,checked:i,onChange:r?e=>{Ye(r,e.target.checked)}:void 0},`checkbox-${n}`)})}),d===`right`?m:null]})},t.id)}if(n===`column-text`){let n=He[i.fontSize||`md`],a=Ge(r,i.bidList),o=i.fontWeight===`bold`?700:400,c=i.fontStyle===`italic`?`italic`:`normal`;return a.length===0?null:(0,D.jsx)(j,{$theme:e,$full:t.fullsize,children:(0,D.jsx)(L,{children:a.map(t=>{let a=We(K(r,t),i.labelMode||`name`);return a?(0,D.jsx)(R,{children:(0,D.jsx)(N,{$theme:e,$fontSize:n,$stretch:s,$align:`center`,$weight:o,$fontStyle:c,children:a})},t):null})})},t.id)}if(n===`column-value`){let n=He[i.fontSize||`md`],a=Ge(r,i.bidList);return a.length===0?null:(0,D.jsx)(j,{$theme:e,$full:t.fullsize,children:(0,D.jsx)(L,{children:a.map(i=>{let a=K(r,i),o=oe(a),s=`column-value:${t.id}:${i}`,c=o&&ue(s);return(0,D.jsx)(_e,{children:(0,D.jsx)(he,{$theme:e,$fontSize:n,$align:`center`,$isRollable:o,readOnly:o&&!c,value:b(s,i),onChange:o&&!c?void 0:e=>{let t=e.target.value;u(e=>({...e,[s]:t}))},onBlur:o&&!c?void 0:async e=>{let t=e.target.value;await Je(i,t),u(e=>{let{[s]:t,...n}=e;return n}),o&&T(s)},onClick:o?()=>{c||J(s)||C(a)}:void 0,onContextMenu:o?e=>{e.preventDefault(),w(s,e.currentTarget)}:void 0,onTouchStart:o?e=>{c||O(s,e.currentTarget)}:void 0,onTouchEnd:o?()=>{q(s)}:void 0,onTouchCancel:o?()=>{q(s)}:void 0,onKeyDown:e=>{if(o&&!c&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),C(a);return}(c||!o)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`})},i)})})},t.id)}if(n===`action-list`){let n=K(r,i.attributeId||i.bidList?.[0])?.attr_bid,a=qe(r,i.attributeId||i.bidList?.[0]),o=n?Xe(n):[];return(0,D.jsx)(j,{$theme:e,$full:t.fullsize,children:(0,D.jsxs)(H,{$theme:e,children:[(0,D.jsxs)(Se,{$theme:e,children:[(0,D.jsx)(U,{$theme:e,children:a}),(0,D.jsx)(W,{type:`button`,$theme:e,"aria-label":`Add Action`,onClick:async()=>{n&&await Z(n,[...o,{id:crypto.randomUUID(),name:``,description:``}],{listType:`action`,reason:`add`})},children:(0,D.jsx)(le,{size:14})})]}),o.map((r,i)=>(0,D.jsxs)(Ce,{children:[(0,D.jsxs)(je,{children:[(0,D.jsx)(Me,{children:(0,D.jsx)(Oe,{$theme:e,type:`text`,defaultValue:r.name,placeholder:`Action Name`,onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,name:t}:e),{listType:`action`,reason:`blur-save`,entryId:r.id,field:`name`})}})}),(0,D.jsx)(De,{type:`button`,$theme:e,"aria-label":`Delete Action`,onClick:async()=>{n&&await Z(n,o.filter(e=>e.id!==r.id),{listType:`action`,reason:`delete`,entryId:r.id})},children:(0,D.jsx)(x,{size:14})})]}),(()=>{let t=Qe(r.description);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(ke,{$theme:e,defaultValue:r.description,ref:X,placeholder:`Action Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,description:t}:e),{listType:`action`,reason:`blur-save`,entryId:r.id,field:`description`})}}),t.length>0?(0,D.jsx)(Ae,{children:t.map((t,n)=>(0,D.jsx)(G,{type:`button`,$theme:e,onClick:()=>{S(t.notation,r.name||`Action`)},title:t.notation,children:t.notation},`${r.id}-action-inline-${n}`))}):null]})})()]},r.id||`${t.id}-action-${i}`))]})},t.id)}if(n===`item-list`){let n=K(r,i.attributeId||i.bidList?.[0])?.attr_bid,a=qe(r,i.attributeId||i.bidList?.[0]),o=n?Y(n):[];return(0,D.jsx)(j,{$theme:e,$full:t.fullsize,children:(0,D.jsxs)(H,{$theme:e,children:[(0,D.jsxs)(Se,{$theme:e,children:[(0,D.jsx)(U,{$theme:e,children:a}),(0,D.jsx)(W,{type:`button`,$theme:e,"aria-label":`Add Item`,onClick:async()=>{n&&await Z(n,[...o,{id:crypto.randomUUID(),name:``,description:``,inUse:!1}],{listType:`item`,reason:`add`})},children:(0,D.jsx)(le,{size:14})})]}),o.map((r,i)=>(0,D.jsxs)(Ce,{children:[(0,D.jsxs)(we,{children:[(0,D.jsx)(Te,{children:(0,D.jsx)(Ne,{$theme:e,type:`checkbox`,defaultChecked:r.inUse,onBlur:async e=>{if(!n)return;let t=e.target.checked;await Z(n,o.map(e=>e.id===r.id?{...e,inUse:t}:e),{listType:`item`,reason:`toggle-save`,entryId:r.id,field:`inUse`})}})}),(0,D.jsx)(Ee,{$theme:e,children:(0,D.jsx)(Oe,{$theme:e,type:`text`,defaultValue:r.name,placeholder:`Item Name`,onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,name:t}:e),{listType:`item`,reason:`blur-save`,entryId:r.id,field:`name`})}})}),(0,D.jsx)(De,{type:`button`,$theme:e,"aria-label":`Delete Item`,onClick:async()=>{n&&await Z(n,o.filter(e=>e.id!==r.id),{listType:`item`,reason:`delete`,entryId:r.id})},children:(0,D.jsx)(x,{size:14})})]}),(()=>{let t=Qe(r.description);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(ke,{$theme:e,defaultValue:r.description,ref:X,placeholder:`Item Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,description:t}:e),{listType:`item`,reason:`blur-save`,entryId:r.id,field:`description`})}}),t.length>0?(0,D.jsx)(Ae,{children:t.map((t,n)=>(0,D.jsx)(G,{type:`button`,$theme:e,onClick:()=>{S(t.notation,r.name||`Item`)},title:t.notation,children:t.notation},`${r.id}-item-inline-${n}`))}):null]})})()]},r.id||`${t.id}-item-${i}`))]})},t.id)}return null};return(0,D.jsx)(fe,{$theme:e,$backgroundUrl:t,children:(0,D.jsxs)(k,{children:[(0,D.jsx)(A,{children:(0,D.jsx)(pe,{$theme:e,children:(0,D.jsx)(M,{$theme:e,value:ee,onChange:e=>{te(e.target.value)},onBlur:()=>{ne()},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},"aria-label":`Unit Name`})})}),h.map(e=>(0,D.jsx)(A,{children:e.items.map(e=>et(e))},`row-${e.row}`))]})})};var J={CURRENT_THEME:`${o.EXTENSIONID}/CurrentTheme`,CURRENT_CARD:`${o.EXTENSIONID}/CurrentCard`,CURRENT_ATTR:`${o.EXTENSIONID}/CurrentAttr`},Je={primary:d.theme_primary,offset:d.theme_offset,background:d.theme_background,border:d.theme_border,background_url:d.background_url},Ye=l.div`
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
`,Xe=l.div`
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
`,Ze=l.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: min(calc(100% - 16px), 350px);
  z-index: 10;
`,X=l.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`,Qe=l.select`
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
`,Z=l.button`
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
`,$e=l.img`
  width: 28px;
  height: 28px;
  display: block;
`,et=l.div`
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
`,tt=l.div`
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
`,nt=l.button`
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
`,rt=l.div`
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
`,it=l.div`
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
`,at=l.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ot=l.div`
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
`,st=l.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,ct=l.div`
  color: ${e=>e.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,lt=l.span`
  font-size: 12px;
  line-height: 1;
`,ut=l.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,dt=l.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`,ft=l.span`
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
`,pt=l.span`
  color: ${e=>e.$color};
`,mt=l.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,ht=l.button`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>e.$variant===`import`?c(e.$theme.offset,.45):c(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`,gt=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,_t=l.input`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`,vt=l.button`
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
`,yt=l.div`
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
`,bt=l.div`
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
`,xt=l(Q)`
  background: ${e=>e.$active?c(e.$theme.offset,.45):c(e.$theme.background,.9)};

  &:disabled {
    background: ${e=>c(e.$theme.background,.9)};
  }
`,$=l.img`
  width: 20px;
  height: 20px;
  display: block;
  filter: ${e=>e.$active?`brightness(0) saturate(100%) invert(23%) sepia(82%) saturate(6574%) hue-rotate(349deg) brightness(96%) contrast(115%)`:`none`};
`,St=l.textarea`
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
`,Ct=l.button`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 8px;
  background: ${e=>e.$variant===`primary`?c(e.$theme.offset,.5):c(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 6px 10px;
  cursor: pointer;
`,wt=l.div`
  margin-top: 8px;
  color: ${e=>c(e.$theme.offset,.95)};
  font-size: 12px;
`,Tt=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,Et=l.div`
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
`,Dt=l.h3`
  color: ${e=>e.$theme.primary};
  margin: 0 0 15px 0;
  font-size: 18px;
`,Ot=l.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
`,kt=()=>{let e=new URLSearchParams(window.location.search).get(`unitid`);return e&&e.split(`,`)[0]?.trim()||null},At=()=>{let e=new URLSearchParams(window.location.search).get(`pinned`);if(!e)return!1;let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`},jt=`POP_${o.CARDSID}`,Mt=(e,t)=>{let n=new URLSearchParams;return n.set(`unitid`,e),t&&n.set(`pinned`,`true`),`/pages/forgecard.html?${n.toString()}`},Nt=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},Pt=e=>{if(e===!0)return!0;if(typeof e==`string`){let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`}return typeof e==`number`?e===1:!1};T.createRoot(document.getElementById(`root`)).render((0,D.jsx)(E.StrictMode,{children:(0,D.jsx)(f,{children:(0,D.jsx)(()=>{let[e,t]=(0,E.useState)(()=>kt()),n=(0,E.useMemo)(()=>At(),[]),[r,c]=(0,E.useState)({metadata:{},items:[]}),[l,f]=(0,E.useState)(null),[p,h]=(0,E.useState)(!1),[g,ae]=(0,E.useState)(!1),[x,le]=(0,E.useState)(!1),[T,de]=(0,E.useState)(``),[O,fe]=(0,E.useState)(``),[k,A]=(0,E.useState)(!1),[j,pe]=(0,E.useState)([]),[M,N]=(0,E.useState)([]),[me,he]=(0,E.useState)(!1),[ge,P]=(0,E.useState)(``),[F,I]=(0,E.useState)(null),[L,R]=(0,E.useState)(!1),_e=e=>{let t=e[s.ENABLE_CONSOLE_LOG];typeof t==`boolean`&&_.setEnabled(t)},ve=(0,E.useMemo)(()=>Nt(r.metadata[J.CURRENT_CARD])||d.card_layout,[r.metadata]),ye=(0,E.useMemo)(()=>Nt(r.metadata[J.CURRENT_ATTR])||d.attributes,[r.metadata]),z=(0,E.useMemo)(()=>{let e=r.metadata[J.CURRENT_THEME];return!e?.primary||!e?.offset||!e?.background||!e?.border?Je:e},[r.metadata]),B=(0,E.useMemo)(()=>u(z.primary,z.offset,z.background,z.border,z.background_url),[z]);(0,E.useEffect)(()=>{let e=!1;return(async()=>{try{await y()}catch(e){_.log(`Auth hydration failed in card iframe`,e)}finally{e||R(!0)}})(),()=>{e=!0}},[]),(0,E.useEffect)(()=>{let e=!0;(async()=>{let[t,n,r,a,o]=await Promise.all([i.scene.getMetadata(),i.scene.items.getItems(),i.room.getMetadata(),i.player.getId(),i.player.getRole()]);e&&(_e(t),c({metadata:t,items:n}),f(a),h(String(o||``).toUpperCase()===`GM`),ae(!0))})();let t=i.scene.onMetadataChange(t=>{e&&(c(e=>({...e,metadata:t})),_e(t))}),n=i.room.onMetadataChange(e=>{}),r=i.scene.items.onChange(t=>{e&&c(e=>({...e,items:t}))});return()=>{e=!1,t(),n(),r()}},[]);let be=e=>{let t=e.metadata?.[a.UNIT_NAME];if(typeof t==`string`&&t.trim())return t;let n=e.text?.plainText;return typeof n==`string`&&n.trim()?n:typeof e.name==`string`&&e.name.trim()?e.name:`Unknown`},xe=(0,E.useMemo)(()=>r.items.filter(e=>Pt(e.metadata?.[a.FABRICATED])).filter(e=>p||e.createdUserId===l).filter(t=>t.id!==e).map(e=>({id:e.id,name:be(e)})).sort((e,t)=>e.name.localeCompare(t.name)),[r.items,e,p,l]),V=(0,E.useMemo)(()=>e&&r.items.find(t=>t.id===e)||null,[r.items,e]),H=async()=>e&&(await i.scene.items.getItems()).find(t=>t.id===e)||null,Se=async e=>{V&&(await i.scene.items.updateItems([V.id],t=>{let n={...t[0].metadata||{}};Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),t[0].metadata=n}),c(t=>({...t,items:t.items.map(t=>{if(t.id!==V.id)return t;let n={...t.metadata||{}};return Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),{...t,metadata:n}})})))},U=async e=>{if(!V)return;let t=[a.FABRICATED,a.INITIATIVE,a.ON_LIST];await i.scene.items.updateItems([V.id],n=>{let r=n[0].metadata,i={},a={};for(let[e,n]of Object.entries(r))e.startsWith(`${o.EXTENSIONID}/`)||(i[e]=n),t.includes(e)&&(a[e]=n);n[0].metadata={...i,...e,...a}}),c(n=>({...n,items:n.items.map(n=>{if(n.id!==V.id)return n;let r={},i={};for(let[e,a]of Object.entries(n.metadata||{}))e.startsWith(`${o.EXTENSIONID}/`)||(r[e]=a),t.includes(e)&&(i[e]=a);return{...n,metadata:{...r,...e,...i}}})}))},W=async()=>{pe(await ce())},Ce=e=>{let t=e.trim(),n=t?t[0].toUpperCase():`A`;return`hsl(${Math.max(0,Math.min(25,n.charCodeAt(0)-65))/26*360}, 70%, 65%)`},we=async e=>{let[t,n]=await Promise.all([te(e),b()?re(e):Promise.resolve([])]);return[...n.map(e=>({...e,source:`remote-user`})),...t.map(e=>({...e,source:`remote-shared`}))]},Te=(0,E.useMemo)(()=>{let e=O.trim().toLowerCase(),t={local:0,"remote-user":1,"remote-shared":2},n=(e,n)=>t[e.source]===t[n.source]?e.favorite===n.favorite?e.name.localeCompare(n.name):e.favorite?-1:1:t[e.source]-t[n.source],r=[...j].sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);if(!e)return r.filter(e=>e.favorite).map(e=>({...e,source:`local`}));let i=r.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),a=M.filter(e=>e.source===`remote-user`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),o=M.filter(e=>e.source===`remote-shared`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e));return[...i.map(e=>({...e,source:`local`})),...a,...o].sort(n)},[j,M,O]),Ee=async()=>{if(!e){await i.notification.show(`No unit selected to pin.`,`ERROR`);return}let t=await i.viewport.getWidth(),r=await i.viewport.getHeight(),a=r>800?700:r-100;if(!n){await i.popover.open({id:jt,url:Mt(e,!0),height:400,width:350,anchorPosition:{top:50,left:t-70},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},transformOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},hidePaper:!0,disableClickAway:!0}),await i.popover.close(o.CARDSID);return}await i.popover.open({id:o.CARDSID,url:Mt(e,!1),height:a,width:350,anchorPosition:{left:t/2,top:r/2},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`CENTER`},transformOrigin:{vertical:`CENTER`,horizontal:`CENTER`},hidePaper:!0,disableClickAway:!0}),await i.popover.close(jt)},De=()=>{p&&A(e=>!e)},Oe=async()=>{if(!p)return;let e=await H();if(!e){await i.notification.show(`No unit selected to save.`,`ERROR`);return}L||(await y(),R(!0));try{let t=(await i.player.getName()).trim(),n=b()?await ie(e.metadata,t,k):await v(e.metadata,t,k);await W();let r=b()?`online Collection`:`Collection`;await i.notification.show(n===`created`?`Unit saved to ${r}.`:`Unit updated in ${r}.`)}catch(e){_.log(`Collection save failed`,e),await i.notification.show(`Could not save this unit to Collection.`,`ERROR`)}},ke=async()=>{if(!await H()){await i.notification.show(`No unit selected to import into.`,`ERROR`);return}I(null),P(``),he(!0)},Ae=async()=>{let e=await H();if(!e){await i.notification.show(`No unit selected to export.`,`ERROR`);return}try{let t=ne(e.metadata),n=t[a.UNIT_NAME],r=typeof n==`string`?n.trim():``;if(!r){await i.notification.show(`Current unit has no valid unit name to export.`,`ERROR`);return}let o={name:r,author:(await i.player.getName()).trim()||`Unknown`,metadata:t};await navigator.clipboard.writeText(JSON.stringify(o,null,2)),await i.notification.show(`Unit data copied to clipboard.`)}catch(e){_.log(`Unit export failed`,e),await i.notification.show(`Could not copy unit data to clipboard.`,`ERROR`)}},G=()=>{he(!1),I(null),P(``)},je=e=>{let t=JSON.parse(e);if(!t||typeof t!=`object`||Array.isArray(t))throw Error(`Import data must be a JSON object.`);let n=t,r=n.metadata&&typeof n.metadata==`object`?n.metadata:t;if(!r||typeof r!=`object`||Array.isArray(r))throw Error(`Import data must include a metadata object.`);let i=ne(r),o=i[a.UNIT_NAME];if(!(typeof o==`string`&&o.trim()))throw Error(`Imported metadata must include a valid unit name.`);return i},Me=async()=>{if(!await H()){I(`No unit selected to import into.`);return}let e=ge.trim();if(!e){I(`Paste JSON data before importing.`);return}try{await U(je(e)),A(!1),G(),await i.notification.show(`Unit data imported successfully.`)}catch(e){I(e instanceof Error?e.message:`Import failed.`)}},Ne=()=>{let e=T.trim();if(fe(e),!e){N([]);return}(async()=>{L||(await y(),R(!0)),N(await we(e))})().catch(async e=>{_.log(`Supabase collection search failed`,e),N([]),await i.notification.show(`Could not search online collection.`,`ERROR`)})},Pe=async e=>{if(!V){await i.notification.show(`No unit selected to import into.`,`ERROR`);return}try{await U(e.metadata),A(!1),await i.notification.show(e.source===`local`?`Imported ${e.name}.`:`Imported ${e.name} from online collection.`)}catch(e){_.log(`Collection record import failed`,e),await i.notification.show(`Could not import collection record.`,`ERROR`)}},Fe=async e=>{try{if(e.source===`remote-user`)await oe(e.id),N(t=>t.filter(t=>!(t.source===`remote-user`&&t.id===e.id)));else if(e.source===`local`)await se(e.id),pe(t=>t.filter(t=>t.id!==e.id));else return;await i.notification.show(`Deleted ${e.name} from Collection.`)}catch(e){_.log(`Collection record delete failed`,e),await i.notification.show(`Could not delete collection record.`,`ERROR`)}};return(0,E.useEffect)(()=>{x&&W().catch(e=>{_.log(`Failed to load collection records`,e)})},[x]),(0,E.useEffect)(()=>{x&&(fe(``),de(``),N([]))},[x]),(0,D.jsxs)(Ye,{$theme:z,children:[(0,D.jsxs)(Xe,{children:[(0,D.jsx)(Ze,{children:(0,D.jsxs)(X,{children:[(0,D.jsxs)(Qe,{$theme:z,"aria-label":`Choose Unit`,value:``,onChange:e=>{let n=e.target.value;n&&t(n)},children:[(0,D.jsx)(`option`,{value:``,children:`Choose Unit`}),xe.map(e=>(0,D.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,D.jsx)(Z,{type:`button`,$theme:z,"aria-label":`Close Card`,onClick:async()=>{await i.popover.close(n?jt:o.CARDSID)},children:(0,D.jsx)($e,{src:`/close.svg`,alt:``,"aria-hidden":`true`})})]})}),g?e?V?(0,D.jsx)(q,{systemTheme:z,backgroundUrl:z.background_url,cardLayout:ve,attributes:ye,unitItem:V,onUpdateMetadata:Se}):(0,D.jsx)(Y,{$theme:z,children:`Unit not found in current scene.`}):(0,D.jsx)(Y,{$theme:z,children:`No unit id supplied in URL.`}):(0,D.jsx)(Y,{$theme:z,children:`Loading card…`})]}),(0,D.jsxs)(et,{$theme:z,$open:x,children:[(0,D.jsxs)(yt,{children:[(0,D.jsxs)(bt,{children:[(0,D.jsx)(Q,{type:`button`,$theme:z,"aria-label":`Pin`,onClick:()=>{Ee()},children:(0,D.jsx)(m,{theme:B,text:`Pin/Unpin card popover`,children:(0,D.jsx)($,{src:`/pin.svg`,alt:``,"aria-hidden":`true`})})}),(0,D.jsx)(xt,{type:`button`,$theme:z,$active:k,"aria-label":`Favorite`,disabled:!p,onClick:De,children:(0,D.jsx)(m,{theme:B,text:`Mark next save as favorite`,children:(0,D.jsx)($,{$active:k,src:`/favorite.svg`,alt:``,"aria-hidden":`true`})})}),(0,D.jsx)(Q,{type:`button`,$theme:z,"aria-label":`CollectionSave`,disabled:!p,onClick:Oe,children:(0,D.jsx)(m,{theme:B,text:`Save current unit to Collection`,children:(0,D.jsx)($,{src:`/collection.svg`,alt:``,"aria-hidden":`true`})})})]}),(0,D.jsxs)(bt,{children:[(0,D.jsx)(Q,{type:`button`,$theme:z,"aria-label":`Import`,onClick:ke,children:(0,D.jsx)(m,{theme:B,text:`Import unit data from JSON`,children:(0,D.jsx)($,{src:`/import.svg`,alt:``,"aria-hidden":`true`})})}),(0,D.jsx)(Q,{type:`button`,$theme:z,"aria-label":`Export`,onClick:Ae,children:(0,D.jsx)(m,{theme:B,text:`Export current unit data to clipboard`,children:(0,D.jsx)($,{src:`/export.svg`,alt:``,"aria-hidden":`true`})})})]})]}),(0,D.jsx)(tt,{$theme:z,children:(0,D.jsx)(m,{theme:B,text:x?`Close collection tray`:`Open collection tray`,children:(0,D.jsx)(nt,{type:`button`,$theme:z,"aria-label":x?`Close Tray`:`Open Tray`,onClick:()=>{le(e=>!e)},children:(0,D.jsx)(ee,{size:22})})})}),(0,D.jsx)(rt,{$theme:z,children:x?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(it,{$theme:z,children:(0,D.jsx)(at,{children:Te.length===0?(0,D.jsx)(Y,{$theme:z,children:`No collection records found.`}):Te.map(e=>(0,D.jsxs)(ot,{$theme:z,children:[(0,D.jsxs)(st,{children:[(0,D.jsxs)(ct,{$theme:z,children:[e.favorite?(0,D.jsx)(lt,{children:`❤`}):null,(0,D.jsx)(ut,{children:e.name})]}),(0,D.jsxs)(dt,{children:[(0,D.jsx)(`span`,{children:`→`}),(0,D.jsx)(pt,{$color:Ce(e.author),children:e.author}),(0,D.jsxs)(ft,{$theme:z,title:e.source===`local`?`Local`:e.source===`remote-user`?`My Cloud`:`Shared`,children:[e.source===`local`?(0,D.jsx)(C,{size:11}):null,e.source===`remote-user`?(0,D.jsx)(S,{size:11}):null,e.source===`remote-shared`?(0,D.jsx)(w,{size:11}):null]})]})]}),(0,D.jsxs)(mt,{children:[(0,D.jsx)(ht,{type:`button`,$theme:z,$variant:`import`,onClick:()=>{Pe(e)},children:`Import`}),e.source===`remote-shared`?null:(0,D.jsx)(ht,{type:`button`,$theme:z,$variant:`delete`,onClick:()=>{Fe(e)},children:`X`})]})]},`${e.source}:${e.id}`))})}),(0,D.jsxs)(gt,{children:[(0,D.jsx)(_t,{$theme:z,type:`text`,value:T,placeholder:`Enter query...`,onChange:e=>{de(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ne())}}),(0,D.jsx)(vt,{type:`button`,$theme:z,"aria-label":`Search`,onClick:Ne,children:(0,D.jsx)(ue,{size:16})})]})]}):null})]}),me?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Tt,{onClick:G}),(0,D.jsxs)(Et,{$theme:z,onClick:e=>{e.stopPropagation()},children:[(0,D.jsx)(Dt,{$theme:z,children:`Import Unit Data`}),(0,D.jsx)(St,{$theme:z,value:ge,placeholder:`Paste exported unit JSON here`,onChange:e=>{P(e.target.value),F&&I(null)}}),F?(0,D.jsx)(wt,{$theme:z,children:F}):null,(0,D.jsxs)(Ot,{children:[(0,D.jsx)(Ct,{type:`button`,$theme:z,onClick:G,children:`Cancel`}),(0,D.jsx)(Ct,{type:`button`,$theme:z,$variant:`primary`,onClick:Me,children:`Import`})]})]})]}):null]})},{})})}));