import{A as e,N as t,b as n,g as r,h as i,k as a,m as o,n as s,t as c,v as l,w as u,x as d,y as f}from"./defaultgamesystem-B6QzEszZ.js";import{_ as p,c as m,d as h,g,i as _,l as v,n as ee,o as y,s as te,t as b,u as ne}from"./FormulaParser-DGseWzs1.js";/* empty css               */var re=h(`cloud`,[[`path`,{d:`M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`,key:`p7xjir`}]]),x=h(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),ie=h(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),S=t(a(),1),C=t(e(),1);const ae=e=>{let t=[...Array.isArray(e)?e:[]].sort((e,t)=>e.row===t.row?e.col-t.col:e.row-t.row),n=[];return t.forEach(e=>{let t=n[n.length-1];if(!t||t.row!==e.row){n.push({row:e.row,items:[e]});return}t.items.push(e)}),{sorted:t,rows:n}};var w=d(),T=e=>`
    0 1px 1px ${o(e.background,.95)},
    0 0 2px ${o(e.background,.85)}
  `,E=s.div`
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
`,D=s.div`
  position: relative;
  z-index: 1;
`,O=s.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`,k=s.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`,oe=s(k)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  height: calc(2 * 1.1em);
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100% !important;
`,A=s.span`
  line-height: 1.1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
`,se=s(s.div`
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
`,ce=s.div`
  color: ${e=>e.$theme.primary};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`,le=s.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?o(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?o(e.$theme.offset,.5):o(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>o(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?T(e.$theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${o(e.$theme.background,.28)}, 0 0 0 1px ${o(e.$theme.offset,.18)}`:`none`};
  box-sizing: border-box;
  font-size: ${e=>e.$fontSize};
  text-align: ${e=>e.$align||`left`};
  cursor: ${e=>e.$isRollable?`pointer`:`text`};

  &:focus {
    outline: none;
    border-color: ${e=>e.$theme.offset};
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${o(e.$theme.offset,.35)}, inset 0 0 0 1px ${o(e.$theme.background,.35)}`:`none`};
  }

  &::placeholder {
    color: ${e=>o(e.$theme.primary,.65)};
  }
`,j=s.div`
  width: ${e=>e.$full?`100%`:`170px`};
  height: 40px;
  box-sizing: border-box;
`,M=s.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`,N=s.span`
  color: ${e=>e.$theme.offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
  margin-left: 4px;
  margin-right: 4px;
  align-self: center;
`,ue=s.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?o(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?o(e.$theme.offset,.5):o(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>o(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?T(e.$theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${o(e.$theme.background,.28)}, 0 0 0 1px ${o(e.$theme.offset,.18)}`:`none`};
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
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${o(e.$theme.offset,.35)}, inset 0 0 0 1px ${o(e.$theme.background,.35)}`:`none`};
  }

  &::placeholder {
    color: ${e=>o(e.$theme.primary,.65)};
  }
`,de=s.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,fe=s.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,P=s.div`
  flex: 1;
  min-width: 0;
`,pe=s.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 18px;
`,me=s.div`
  width: 100%;
  height: 5px;
  background: ${e=>`linear-gradient(10deg, ${e.$theme.border||`white`}, rgba(255,255,255,0))`};
`,F=s.div`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${e=>e.$theme.border||`rgba(255,255,255,0.5)`};
`,I=s.div`
  width: 100%;
  height: 10px;
  background: ${e=>`linear-gradient(to bottom, ${e.$theme.border||`rgba(255,255,255,0.2)`}, transparent)`};
`,he=s.div`
  width: 100%;
  height: 2px;
  background: ${e=>e.$theme.border||`#222`};
  box-shadow: ${e=>`inset 0 1px 0 ${e.$theme.border||`#444`}, 0 1px 0 #000`};
`,ge=s.div`
  width: 100%;
  height: 6px;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6' preserveAspectRatio='none'%3E%3Cpolyline points='0,6 6,0 12,6 18,0 24,6' fill='none' stroke='${encodeURIComponent(e.$theme.border||`#ffffff`)}' stroke-width='1.5'/%3E%3C/svg%3E")`};
`,L=s.div`
  width: 100%;
  height: 4px;
  background: ${e=>e.$theme.border||`white`};
  animation: flicker 1.2s infinite alternate;

  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 1; }
  }
`,_e=s.div`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`,ve=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${e=>o(e.$theme.border,.85)};
  padding-bottom: 4px;
  margin-bottom: 4px;
`,R=s.div`
  color: ${e=>e.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,z=s.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,B=s.div`
  margin-bottom: 8px;
`,ye=s.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`,be=s.div`
  width: 20px;
  display: flex;
  justify-content: center;
`,xe=s.div`
  flex: 1;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`,V=s.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Se=s.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>o(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
  font-style: italic;
  font-weight: 700;
`,Ce=s.textarea`
  width: 100%;
  min-height: 44px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>o(e.$theme.background,.78)};
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
`,H=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`,we=s.button`
  height: 22px;
  min-width: 0;
  max-width: 100%;
  border-radius: 4px;
  border: 1px solid ${e=>o(e.$theme.offset,.8)};
  background: ${e=>o(e.$theme.offset,.5)};
  color: ${e=>o(e.$theme.primary,.95)};
  padding: 0 6px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Te=s.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`,Ee=s.div`
  flex: 1;
`,De=s.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  cursor: pointer;
  background: ${e=>o(e.$theme.background,.55)};
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
    box-shadow: ${e=>`0 0 0 2px ${o(e.$theme.primary,.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,Oe=s.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 8px;
`,ke=s.span`
  color: ${e=>e.$theme.offset||c.theme_offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
`,Ae=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: space-evenly;
  width: ${e=>e.$fullWidth?`100%`:`auto`};
`,je=s.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>o(e.$theme.background,.55)};
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
    box-shadow: ${e=>`0 0 0 2px ${o(e.$theme.primary,.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,Me=s.button`
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
`,Ne=s.div`
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
`,Pe={sm:`14px`,md:`16px`,lg:`18px`},Fe={sm:`14px`,md:`16px`,lg:`18px`},Ie={sm:`14px`,md:`16px`,lg:`18px`},Le={sm:`14px`,md:`16px`,lg:`18px`},U=(e,t)=>t&&e.find(e=>{let n=e.attr_bid===t,r=String(e.id??``)===String(t);return n||r})||null,W=(e,t)=>e?t===`abbr`?e.attr_abbr:t===`name`||!t||t===`text`?e.attr_name:``:``,Re=(e,t)=>Array.isArray(t)?t.filter(t=>!!U(e,t)):[],ze=(e,t)=>Re(e,t).filter(t=>{let n=U(e,t);return String(n?.attr_type||``).toLowerCase()===`bool`}),Be=(e,t)=>{let n=U(e,t);return!n||n.attr_type!==`list`?`List Attribute`:n.attr_name};const G=({systemTheme:e,backgroundUrl:t,cardLayout:n,attributes:i,unitItem:a,onUpdateMetadata:o})=>{let[s,c]=(0,C.useState)({}),[l,d]=(0,C.useState)({}),m=(0,C.useRef)({}),h=(0,C.useRef)({}),{rows:_}=(0,C.useMemo)(()=>ae(n),[n]),ee=(0,C.useMemo)(()=>{let e=a.metadata?.[r.UNIT_NAME];if(typeof e==`string`&&e.trim())return e;let t=a.text?.plainText;return typeof t==`string`&&t.trim()?t:typeof a.name==`string`&&a.name.trim()?a.name:`Unknown`},[a]),y=e=>`${f.EXTENSIONID}/${e}`,te=e=>{let t=a.metadata?.[y(e)];return t==null?``:typeof t==`string`?t:typeof t==`number`||typeof t==`boolean`?String(t):``},ne=e=>{let t=a.metadata?.[y(e)];if(typeof t==`boolean`)return t;if(typeof t==`number`)return t!==0;if(typeof t==`string`){let e=t.trim().toLowerCase();return e===`true`||e===`1`||e===`yes`||e===`on`}return!1},re=(e,t)=>s[e]??te(t),ie=e=>{let t=e?.attr_func;return typeof t==`string`&&t.trim().length>0},S=(0,C.useMemo)(()=>{let e={};for(let t of i){let n=te(t.attr_bid).trim();if(!n)continue;let r=Number(n);Number.isFinite(r)&&(e[t.attr_bid]=r)}return e},[i,a.metadata]),T=e=>{let t=e?.attr_func;if(typeof t!=`string`||t.trim().length===0)return null;let n=b(t,{bidValueMap:S,onMissingBid:`error`});return!n.valid||!n.notation?(p.warn(`[FORGE] Could not convert attr_func for ${e?.attr_bid||`unknown`}: ${n.error||`Unknown conversion error`}`),null):n.notation},G=async(e,t)=>{try{let n=await u.scene.getMetadata(),r=(await u.party.getPlayers()).find(e=>e.id===a.createdUserId),i=await u.player.getId(),o=await u.player.getColor();await g({notation:e,actionName:t,senderName:ee,senderId:a.createdUserId||i||a.id,senderColor:r?.color||o||`#ffffff`},n)}catch(t){p.error(`Failed to send dice roll from CardLayoutRenderer`,e,t),p.log(e)}},K=async e=>{if(!e)return;let t=T(e);t&&await G(t,e.attr_name||e.attr_bid||`Roll`)};(0,C.useEffect)(()=>()=>{Object.values(m.current).forEach(e=>{window.clearTimeout(e)})},[]);let Ve=e=>!!l[e],q=(e,t)=>{d(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},He=e=>{d(t=>{let{[e]:n,...r}=t;return r})},J=(e,t)=>{let n=m.current[e];n&&window.clearTimeout(n),m.current[e]=window.setTimeout(()=>{h.current[e]=!0,q(e,t),delete m.current[e]},500)},Y=e=>{let t=m.current[e];t&&(window.clearTimeout(t),delete m.current[e])},Ue=e=>h.current[e]?(delete h.current[e],!0):!1,We=async(e,t)=>{await o({[y(e)]:t})},Ge=async(e,t)=>{await o({[y(e)]:t})},Ke=e=>{let t=a.metadata?.[y(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``}}):[]},qe=e=>{let t=a.metadata?.[y(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``,inUse:!!t.inUse}}):[]},Je=(e,t)=>{p.log(e,t)},X=e=>{e&&(e.style.height=`0px`,e.style.height=`${Math.max(e.scrollHeight,44)}px`)},Ye=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=e[0],r=(e[1]||``).trim();if(!r)continue;let i=b(r,{bidValueMap:S,onMissingBid:`error`});!i.valid||!i.notation||t.push({raw:n,notation:i.notation})}return t},Z=async(e,t,n)=>{Je(`List metadata update`,{listType:n.listType,bid:e,reason:n.reason,entryId:n.entryId,field:n.field,entryCount:t.length,timestamp:Date.now()}),await o({[y(e)]:t})},Xe=t=>t===`dash`||t===`dashed`?(0,w.jsx)(F,{$theme:e}):t===`shadow`?(0,w.jsx)(I,{$theme:e}):t===`ridge`?(0,w.jsx)(he,{$theme:e}):t===`zigzag`?(0,w.jsx)(ge,{$theme:e}):t===`pulse`?(0,w.jsx)(L,{$theme:e}):(0,w.jsx)(me,{$theme:e}),Ze=t=>{let n=t.type,r=t.styles||{},a=U(i,r.attributeId),o=r.textAlign||`left`,s=r.stretch===!0;if(n===`line-break`)return(0,w.jsx)(k,{$theme:e,$full:!0,children:Xe(r.styleDesign)},t.id);if(n===`line-spacer`)return(0,w.jsx)(pe,{$full:t.fullsize},t.id);if(n===`text`){let n=Pe[r.fontSize||`md`],i=W(a,r.labelMode)||`Title Header`;return(0,w.jsx)(k,{$theme:e,$full:t.fullsize,children:(0,w.jsx)(ce,{$theme:e,$fontSize:n,$weight:700,$stretch:s,$align:o,children:i})},t.id)}if(n===`text-value`){let n=Le[r.fontSize||`md`],i=W(a,r.labelMode),o=!!i,l=r.labelPosition===`right`?`right`:`left`,u=r.textAlign||`center`,d=r.fontWeight===`bold`?700:400,f=r.fontStyle===`italic`?`italic`:`normal`,p=a?.attr_bid,m=ie(a),h=`text-value:${t.id}:${p||`none`}`,g=m&&Ve(h),_=(0,w.jsx)(ue,{$theme:e,$fontSize:n,$align:u,$weight:d,$fontStyle:f,$stretch:s,$isRollable:m,type:`text`,readOnly:m&&!g,value:p?re(h,p):``,onChange:m&&!g?void 0:e=>{if(!p)return;let t=e.target.value;c(e=>({...e,[h]:t}))},onBlur:m&&!g?void 0:async e=>{if(!p)return;let t=e.target.value;await We(p,t),c(e=>{let{[h]:t,...n}=e;return n}),m&&He(h)},onClick:m?()=>{g||Ue(h)||K(a)}:void 0,onContextMenu:m?e=>{e.preventDefault(),q(h,e.currentTarget)}:void 0,onTouchStart:m?e=>{g||J(h,e.currentTarget)}:void 0,onTouchEnd:m?()=>{Y(h)}:void 0,onTouchCancel:m?()=>{Y(h)}:void 0,onKeyDown:e=>{if(m&&!g&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),K(a);return}(g||!m)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`}),v=o?(0,w.jsx)(N,{$theme:e,$fontSize:n,$stretch:s,$weight:d,$fontStyle:f,children:i}):null;return(0,w.jsx)(j,{$full:t.fullsize,children:(0,w.jsxs)(M,{children:[l===`left`?v:null,_,l===`right`?v:null]})},t.id)}if(n===`text-checkbox`){let n=Fe[r.fontSize||`md`],a=t.fullsize?6:3,o=Math.max(1,Math.min(a,Number(r.checkboxCount||1))),c=[...ze(i,r.bidList)].slice(0,o);for(;c.length<o;)c.push(``);let l=W(U(i,c[0]||r.attributeId),r.labelMode),u=r.inputType===`slider`,d=r.labelPosition===`right`?`right`:`left`,f=r.fontWeight===`bold`?700:400,p=r.fontStyle===`italic`?`italic`:`normal`,m=l?(0,w.jsx)(ke,{$theme:e,$fontSize:n,$stretch:s,$weight:f,$fontStyle:p,children:l}):null;return(0,w.jsx)(k,{$theme:e,$full:t.fullsize,children:(0,w.jsxs)(Oe,{children:[d===`left`?m:null,(0,w.jsx)(Ae,{$fullWidth:!m,children:Array.from({length:o}).map((t,n)=>{let r=c[n]||``,i=r?ne(r):!1;return u?(0,w.jsx)(Me,{type:`button`,$theme:e,$active:i,disabled:!r,onClick:r?()=>{Ge(r,!i)}:void 0,children:(0,w.jsx)(Ne,{$theme:e,$active:i})},`slider-${n}`):(0,w.jsx)(je,{$theme:e,type:`checkbox`,disabled:!r,checked:i,onChange:r?e=>{Ge(r,e.target.checked)}:void 0},`checkbox-${n}`)})}),d===`right`?m:null]})},t.id)}if(n===`column-text`){let n=Ie[r.fontSize||`md`],a=Re(i,r.bidList),o=r.fontWeight===`bold`?700:400,c=r.fontStyle===`italic`?`italic`:`normal`;return a.length===0?null:(0,w.jsx)(k,{$theme:e,$full:t.fullsize,children:(0,w.jsx)(de,{children:a.map(t=>{let a=W(U(i,t),r.labelMode||`name`);return a?(0,w.jsx)(fe,{children:(0,w.jsx)(se,{$theme:e,$fontSize:n,$stretch:s,$align:`center`,$weight:o,$fontStyle:c,children:a})},t):null})})},t.id)}if(n===`column-value`){let n=Ie[r.fontSize||`md`],a=Re(i,r.bidList);return a.length===0?null:(0,w.jsx)(k,{$theme:e,$full:t.fullsize,children:(0,w.jsx)(de,{children:a.map(r=>{let a=U(i,r),o=ie(a),s=`column-value:${t.id}:${r}`,l=o&&Ve(s);return(0,w.jsx)(P,{children:(0,w.jsx)(le,{$theme:e,$fontSize:n,$align:`center`,$isRollable:o,readOnly:o&&!l,value:re(s,r),onChange:o&&!l?void 0:e=>{let t=e.target.value;c(e=>({...e,[s]:t}))},onBlur:o&&!l?void 0:async e=>{let t=e.target.value;await We(r,t),c(e=>{let{[s]:t,...n}=e;return n}),o&&He(s)},onClick:o?()=>{l||Ue(s)||K(a)}:void 0,onContextMenu:o?e=>{e.preventDefault(),q(s,e.currentTarget)}:void 0,onTouchStart:o?e=>{l||J(s,e.currentTarget)}:void 0,onTouchEnd:o?()=>{Y(s)}:void 0,onTouchCancel:o?()=>{Y(s)}:void 0,onKeyDown:e=>{if(o&&!l&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),K(a);return}(l||!o)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`})},r)})})},t.id)}if(n===`action-list`){let n=U(i,r.attributeId||r.bidList?.[0])?.attr_bid,a=Be(i,r.attributeId||r.bidList?.[0]),o=n?Ke(n):[];return(0,w.jsx)(k,{$theme:e,$full:t.fullsize,children:(0,w.jsxs)(_e,{$theme:e,children:[(0,w.jsxs)(ve,{$theme:e,children:[(0,w.jsx)(R,{$theme:e,children:a}),(0,w.jsx)(z,{type:`button`,$theme:e,"aria-label":`Add Action`,onClick:async()=>{n&&await Z(n,[...o,{id:crypto.randomUUID(),name:``,description:``}],{listType:`action`,reason:`add`})},children:(0,w.jsx)(x,{size:14})})]}),o.map((r,i)=>(0,w.jsxs)(B,{children:[(0,w.jsxs)(Te,{children:[(0,w.jsx)(Ee,{children:(0,w.jsx)(Se,{$theme:e,type:`text`,defaultValue:r.name,placeholder:`Action Name`,onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,name:t}:e),{listType:`action`,reason:`blur-save`,entryId:r.id,field:`name`})}})}),(0,w.jsx)(V,{type:`button`,$theme:e,"aria-label":`Delete Action`,onClick:async()=>{n&&await Z(n,o.filter(e=>e.id!==r.id),{listType:`action`,reason:`delete`,entryId:r.id})},children:(0,w.jsx)(v,{size:14})})]}),(()=>{let t=Ye(r.description);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Ce,{$theme:e,defaultValue:r.description,ref:X,placeholder:`Action Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,description:t}:e),{listType:`action`,reason:`blur-save`,entryId:r.id,field:`description`})}}),t.length>0?(0,w.jsx)(H,{children:t.map((t,n)=>(0,w.jsx)(we,{type:`button`,$theme:e,onClick:()=>{G(t.notation,r.name||`Action`)},title:t.notation,children:t.notation},`${r.id}-action-inline-${n}`))}):null]})})()]},r.id||`${t.id}-action-${i}`))]})},t.id)}if(n===`item-list`){let n=U(i,r.attributeId||r.bidList?.[0])?.attr_bid,a=Be(i,r.attributeId||r.bidList?.[0]),o=n?qe(n):[];return(0,w.jsx)(k,{$theme:e,$full:t.fullsize,children:(0,w.jsxs)(_e,{$theme:e,children:[(0,w.jsxs)(ve,{$theme:e,children:[(0,w.jsx)(R,{$theme:e,children:a}),(0,w.jsx)(z,{type:`button`,$theme:e,"aria-label":`Add Item`,onClick:async()=>{n&&await Z(n,[...o,{id:crypto.randomUUID(),name:``,description:``,inUse:!1}],{listType:`item`,reason:`add`})},children:(0,w.jsx)(x,{size:14})})]}),o.map((r,i)=>(0,w.jsxs)(B,{children:[(0,w.jsxs)(ye,{children:[(0,w.jsx)(be,{children:(0,w.jsx)(De,{$theme:e,type:`checkbox`,defaultChecked:r.inUse,onBlur:async e=>{if(!n)return;let t=e.target.checked;await Z(n,o.map(e=>e.id===r.id?{...e,inUse:t}:e),{listType:`item`,reason:`toggle-save`,entryId:r.id,field:`inUse`})}})}),(0,w.jsx)(xe,{$theme:e,children:(0,w.jsx)(Se,{$theme:e,type:`text`,defaultValue:r.name,placeholder:`Item Name`,onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,name:t}:e),{listType:`item`,reason:`blur-save`,entryId:r.id,field:`name`})}})}),(0,w.jsx)(V,{type:`button`,$theme:e,"aria-label":`Delete Item`,onClick:async()=>{n&&await Z(n,o.filter(e=>e.id!==r.id),{listType:`item`,reason:`delete`,entryId:r.id})},children:(0,w.jsx)(v,{size:14})})]}),(()=>{let t=Ye(r.description);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Ce,{$theme:e,defaultValue:r.description,ref:X,placeholder:`Item Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,description:t}:e),{listType:`item`,reason:`blur-save`,entryId:r.id,field:`description`})}}),t.length>0?(0,w.jsx)(H,{children:t.map((t,n)=>(0,w.jsx)(we,{type:`button`,$theme:e,onClick:()=>{G(t.notation,r.name||`Item`)},title:t.notation,children:t.notation},`${r.id}-item-inline-${n}`))}):null]})})()]},r.id||`${t.id}-item-${i}`))]})},t.id)}return null};return(0,w.jsx)(E,{$theme:e,$backgroundUrl:t,children:(0,w.jsxs)(D,{children:[(0,w.jsx)(O,{children:(0,w.jsx)(oe,{$theme:e,children:(0,w.jsx)(A,{children:ee})})}),_.map(e=>(0,w.jsx)(O,{children:e.items.map(e=>Ze(e))},`row-${e.row}`))]})})};var K={CURRENT_THEME:`${f.EXTENSIONID}/CurrentTheme`,CURRENT_CARD:`${f.EXTENSIONID}/CurrentCard`,CURRENT_ATTR:`${f.EXTENSIONID}/CurrentAttr`},Ve={primary:c.theme_primary,offset:c.theme_offset,background:c.theme_background,border:c.theme_border,background_url:c.background_url},q=s.div`
  height: 100vh;
  width: 100%;
  background-color: ${e=>o(e.$theme.background,.5)};
  color: ${e=>e.$theme.primary};
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 16px;
  box-sizing: border-box;
  overflow: hidden;
  backdrop-filter: blur(6px);
  background-image: ${e=>e.$theme.background_url?`linear-gradient(${o(e.$theme.background,.52)}, ${o(e.$theme.background,.52)}), url(${e.$theme.background_url})`:`none`};
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
`,He=s.div`
  height: 100%;
  overflow: hidden;
  padding: 40px 4px 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
`,J=s.p`
  margin: 0;
  color: ${e=>e.$theme.primary};
  text-align: center;
  align-content: center;
  font-weight: 600;
  font-size: 24px;
`,Y=s.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: min(calc(100% - 16px), 350px);
  z-index: 10;
`,Ue=s.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`,We=s.select`
  flex: 1;
  min-width: 0;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>o(e.$theme.background,.82)};
  color: ${e=>e.$theme.primary};
  padding: 0 6px;
  box-sizing: border-box;
  font-size: 12px;
`,Ge=s.button`
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${e=>o(e.$theme.background,.82)};
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background: ${e=>o(e.$theme.offset,.5)};
  }
`,Ke=s.img`
  width: 28px;
  height: 28px;
  display: block;
`,qe=s.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 6px;
  height: 90%;
  border-radius: 12px 12px 10px 10px;
  border: 4px solid ${e=>e.$theme.border};
  background: ${e=>o(e.$theme.background,.84)};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transform: ${e=>e.$open?`translateY(0)`:`translateY(calc(100% - 40px))`};
  transition: transform 0.22s ease;
  z-index: 20;
  overflow: visible;
`,Je=s.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 52px;
  height: 52px;
  backdrop-filter: blur(8px);
  background: ${e=>o(e.$theme.background,.5)};
  border-radius: 50%;
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,X=s.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 4px solid ${e=>e.$theme.border};
  background: ${e=>o(e.$theme.background,.98)};
  color: ${e=>e.$theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 22;

  &:hover {
    background: ${e=>o(e.$theme.offset,.5)};
  }
`,Ye=s.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  padding: 42px 10px 10px;
  color: ${e=>o(e.$theme.primary,.9)};
`,Z=s.div`
  flex: 1 1 80%;
  min-height: 0;
  border: 2px solid ${e=>o(e.$theme.border,.85)};
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>o(e.$theme.primary,.88)};
  font-size: 14px;
  font-weight: 600;
  overflow-y: auto;
  padding: 8px;
  box-sizing: border-box;
`,Xe=s.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Ze=s.div`
  width: 100%;
  border: 1px solid ${e=>o(e.$theme.border,.8)};
  border-radius: 8px;
  background: ${e=>o(e.$theme.background,.72)};
  padding: 6px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: center;
`,Qe=s.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,$e=s.div`
  color: ${e=>e.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,et=s.span`
  font-size: 12px;
  line-height: 1;
`,tt=s.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nt=s.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`,rt=s.span`
  margin-left: 6px;
  width: 18px;
  height: 18px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 999px;
  border: 1px solid ${e=>o(e.$theme.border,.85)};
  background: ${e=>o(e.$theme.offset,.35)};
  color: ${e=>e.$theme.primary};
`,it=s.span`
  color: ${e=>e.$color};
`,at=s.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,ot=s.button`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>e.$variant===`import`?o(e.$theme.offset,.45):o(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`,st=s.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,ct=s.input`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>o(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`,lt=s.button`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>o(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${e=>o(e.$theme.offset,.5)};
  }
`,ut=s.div`
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
`,dt=s.div`
  display: inline-flex;
  justify-content: space-between;
  width: 40%;
  pointer-events: auto;
`,Q=s.button`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>o(e.$theme.background,.9)};
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
    background: ${e=>o(e.$theme.offset,.5)};
  }

  &:disabled:hover {
    background: ${e=>o(e.$theme.background,.9)};
  }
`,ft=s(Q)`
  background: ${e=>e.$active?o(e.$theme.offset,.45):o(e.$theme.background,.9)};

  &:disabled {
    background: ${e=>o(e.$theme.background,.9)};
  }
`,$=s.img`
  width: 20px;
  height: 20px;
  display: block;
  filter: ${e=>e.$active?`brightness(0) saturate(100%) invert(23%) sepia(82%) saturate(6574%) hue-rotate(349deg) brightness(96%) contrast(115%)`:`none`};
`,pt=s.textarea`
  width: 100%;
  min-height: 220px;
  border-radius: 8px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>o(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 8px;
  box-sizing: border-box;
  resize: vertical;
  font-size: 12px;
`,mt=s.button`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 8px;
  background: ${e=>e.$variant===`primary`?o(e.$theme.offset,.5):o(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 6px 10px;
  cursor: pointer;
`,ht=s.div`
  margin-top: 8px;
  color: ${e=>o(e.$theme.offset,.95)};
  font-size: 12px;
`,gt=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,_t=s.div`
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
`,vt=s.h3`
  color: ${e=>e.$theme.primary};
  margin: 0 0 15px 0;
  font-size: 18px;
`,yt=s.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
`,bt=()=>{let e=new URLSearchParams(window.location.search).get(`unitid`);return e&&e.split(`,`)[0]?.trim()||null},xt=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},St=e=>{if(e===!0)return!0;if(typeof e==`string`){let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`}return typeof e==`number`?e===1:!1};S.createRoot(document.getElementById(`root`)).render((0,w.jsx)(C.StrictMode,{children:(0,w.jsx)(n,{children:(0,w.jsx)(()=>{let[e,t]=(0,C.useState)(()=>bt()),[n,a]=(0,C.useState)({metadata:{},items:[]}),[o,s]=(0,C.useState)(null),[l,d]=(0,C.useState)(!1),[h,g]=(0,C.useState)(!1),[v,b]=(0,C.useState)(!1),[x,S]=(0,C.useState)(``),[ae,T]=(0,C.useState)(``),[E,D]=(0,C.useState)(!1),[O,k]=(0,C.useState)([]),[oe,A]=(0,C.useState)([]),[se,ce]=(0,C.useState)(!1),[le,j]=(0,C.useState)(``),[M,N]=(0,C.useState)(null),ue=e=>{let t=e[i.ENABLE_CONSOLE_LOG];typeof t==`boolean`&&p.setEnabled(t)},de=(0,C.useMemo)(()=>xt(n.metadata[K.CURRENT_CARD])||c.card_layout,[n.metadata]),fe=(0,C.useMemo)(()=>xt(n.metadata[K.CURRENT_ATTR])||c.attributes,[n.metadata]),P=(0,C.useMemo)(()=>{let e=n.metadata[K.CURRENT_THEME];return!e?.primary||!e?.offset||!e?.background||!e?.border?Ve:e},[n.metadata]);(0,C.useEffect)(()=>{let e=!0;(async()=>{let[t,n,r,i,o]=await Promise.all([u.scene.getMetadata(),u.scene.items.getItems(),u.room.getMetadata(),u.player.getId(),u.player.getRole()]);e&&(ue(t),a({metadata:t,items:n}),s(i),d(String(o||``).toUpperCase()===`GM`),g(!0))})();let t=u.scene.onMetadataChange(t=>{e&&(a(e=>({...e,metadata:t})),ue(t))}),n=u.room.onMetadataChange(e=>{}),r=u.scene.items.onChange(t=>{e&&a(e=>({...e,items:t}))});return()=>{e=!1,t(),n(),r()}},[]);let pe=e=>{let t=e.metadata?.[r.UNIT_NAME];if(typeof t==`string`&&t.trim())return t;let n=e.text?.plainText;return typeof n==`string`&&n.trim()?n:typeof e.name==`string`&&e.name.trim()?e.name:`Unknown`},me=(0,C.useMemo)(()=>n.items.filter(e=>St(e.metadata?.[r.FABRICATED])).filter(e=>l||e.createdUserId===o).filter(t=>t.id!==e).map(e=>({id:e.id,name:pe(e)})).sort((e,t)=>e.name.localeCompare(t.name)),[n.items,e,l,o]),F=(0,C.useMemo)(()=>e&&n.items.find(t=>t.id===e)||null,[n.items,e]),I=async()=>e&&(await u.scene.items.getItems()).find(t=>t.id===e)||null,he=async e=>{F&&(await u.scene.items.updateItems([F.id],t=>{let n={...t[0].metadata||{}};Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),t[0].metadata=n}),a(t=>({...t,items:t.items.map(t=>{if(t.id!==F.id)return t;let n={...t.metadata||{}};return Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),{...t,metadata:n}})})))},ge=async e=>{if(!F)return;let t=[r.FABRICATED,r.INITIATIVE,r.ON_LIST];await u.scene.items.updateItems([F.id],n=>{let r=n[0].metadata,i={},a={};for(let[e,n]of Object.entries(r))e.startsWith(`${f.EXTENSIONID}/`)||(i[e]=n),t.includes(e)&&(a[e]=n);n[0].metadata={...i,...e,...a}}),a(n=>({...n,items:n.items.map(n=>{if(n.id!==F.id)return n;let r={},i={};for(let[e,a]of Object.entries(n.metadata||{}))e.startsWith(`${f.EXTENSIONID}/`)||(r[e]=a),t.includes(e)&&(i[e]=a);return{...n,metadata:{...r,...e,...i}}})}))},L=async()=>{k(await te())},_e=e=>{let t=e.trim(),n=t?t[0].toUpperCase():`A`;return`hsl(${Math.max(0,Math.min(25,n.charCodeAt(0)-65))/26*360}, 70%, 65%)`},ve=async e=>{let t=e.trim();if(!t)return[];let{data:n,error:r}=await ee.from(`bs_forge_creatures`).select(`external_id,name,author,favorite,metadata,is_active`).eq(`is_active`,!0).or(`name.ilike.%${t}%,author.ilike.%${t}%`).limit(250);if(r)throw r;return(n??[]).filter(e=>e&&typeof e.name==`string`&&typeof e.author==`string`).map(e=>({id:`remote:${e.external_id}`,name:e.name,author:e.author,favorite:e.favorite===!0,metadata:e.metadata&&typeof e.metadata==`object`&&!Array.isArray(e.metadata)?e.metadata:{},updatedAt:0}))},R=(0,C.useMemo)(()=>{let e=ae.trim().toLowerCase(),t=[...O].sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);if(!e)return t.filter(e=>e.favorite).map(e=>({...e,source:`local`}));let n=t.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),r=new Set(n.map(e=>`${e.name.toLowerCase()}::${e.author.toLowerCase()}`)),i=oe.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)).filter(e=>!r.has(`${e.name.toLowerCase()}::${e.author.toLowerCase()}`)).sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);return[...n.map(e=>({...e,source:`local`})),...i.map(e=>({...e,source:`remote`}))]},[O,oe,ae]),z=()=>{p.log(`Tray action clicked: pin`)},B=()=>{l&&D(e=>!e)},ye=async()=>{if(!l)return;let e=await I();if(!e){await u.notification.show(`No unit selected to save.`,`ERROR`);return}try{let t=(await u.player.getName()).trim(),n=await m(e.metadata,t,E);await L(),await u.notification.show(n===`created`?`Unit saved to Collection.`:`Unit updated in Collection.`)}catch(e){p.log(`Collection save failed`,e),await u.notification.show(`Could not save this unit to Collection.`,`ERROR`)}},be=async()=>{if(!await I()){await u.notification.show(`No unit selected to import into.`,`ERROR`);return}N(null),j(``),ce(!0)},xe=async()=>{let e=await I();if(!e){await u.notification.show(`No unit selected to export.`,`ERROR`);return}try{let t=y(e.metadata),n=t[r.UNIT_NAME],i=typeof n==`string`?n.trim():``;if(!i){await u.notification.show(`Current unit has no valid unit name to export.`,`ERROR`);return}let a={name:i,author:(await u.player.getName()).trim()||`Unknown`,metadata:t};await navigator.clipboard.writeText(JSON.stringify(a,null,2)),await u.notification.show(`Unit data copied to clipboard.`)}catch(e){p.log(`Unit export failed`,e),await u.notification.show(`Could not copy unit data to clipboard.`,`ERROR`)}},V=()=>{ce(!1),N(null),j(``)},Se=e=>{let t=JSON.parse(e);if(!t||typeof t!=`object`||Array.isArray(t))throw Error(`Import data must be a JSON object.`);let n=t,i=n.metadata&&typeof n.metadata==`object`?n.metadata:t;if(!i||typeof i!=`object`||Array.isArray(i))throw Error(`Import data must include a metadata object.`);let a=y(i),o=a[r.UNIT_NAME];if(!(typeof o==`string`&&o.trim()))throw Error(`Imported metadata must include a valid unit name.`);return a},Ce=async()=>{if(!await I()){N(`No unit selected to import into.`);return}let e=le.trim();if(!e){N(`Paste JSON data before importing.`);return}try{await ge(Se(e)),D(!1),V(),await u.notification.show(`Unit data imported successfully.`)}catch(e){N(e instanceof Error?e.message:`Import failed.`)}},H=()=>{let e=x.trim();if(T(e),!e){A([]);return}ve(e).then(e=>{A(e)}).catch(async e=>{p.log(`Supabase collection search failed`,e),A([]),await u.notification.show(`Could not search online collection.`,`ERROR`)})},we=async e=>{if(!F){await u.notification.show(`No unit selected to import into.`,`ERROR`);return}try{await ge(e.metadata),D(!1),await u.notification.show(e.source===`remote`?`Imported ${e.name} from online collection.`:`Imported ${e.name}.`)}catch(e){p.log(`Collection record import failed`,e),await u.notification.show(`Could not import collection record.`,`ERROR`)}},Te=async e=>{if(e.source===`local`)try{await _(e.id),await L(),await u.notification.show(`Deleted ${e.name} from Collection.`)}catch(e){p.log(`Collection record delete failed`,e),await u.notification.show(`Could not delete collection record.`,`ERROR`)}};return(0,C.useEffect)(()=>{v&&L().catch(e=>{p.log(`Failed to load collection records`,e)})},[v]),(0,C.useEffect)(()=>{v&&(T(``),S(``),A([]))},[v]),(0,w.jsxs)(q,{$theme:P,children:[(0,w.jsxs)(He,{children:[(0,w.jsx)(Y,{children:(0,w.jsxs)(Ue,{children:[(0,w.jsxs)(We,{$theme:P,"aria-label":`Choose Unit`,value:``,onChange:e=>{let n=e.target.value;n&&t(n)},children:[(0,w.jsx)(`option`,{value:``,children:`Choose Unit`}),me.map(e=>(0,w.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,w.jsx)(Ge,{type:`button`,$theme:P,"aria-label":`Close Card`,onClick:async()=>{await u.popover.close(f.CARDSID)},children:(0,w.jsx)(Ke,{src:`/close.svg`,alt:``,"aria-hidden":`true`})})]})}),h?e?F?(0,w.jsx)(G,{systemTheme:P,backgroundUrl:P.background_url,cardLayout:de,attributes:fe,unitItem:F,onUpdateMetadata:he}):(0,w.jsx)(J,{$theme:P,children:`Unit not found in current scene.`}):(0,w.jsx)(J,{$theme:P,children:`No unit id supplied in URL.`}):(0,w.jsx)(J,{$theme:P,children:`Loading card…`})]}),(0,w.jsxs)(qe,{$theme:P,$open:v,children:[(0,w.jsxs)(ut,{children:[(0,w.jsxs)(dt,{children:[(0,w.jsx)(Q,{type:`button`,$theme:P,"aria-label":`Pin`,onClick:z,children:(0,w.jsx)($,{src:`/pin.svg`,alt:``,"aria-hidden":`true`})}),(0,w.jsx)(ft,{type:`button`,$theme:P,$active:E,"aria-label":`Favorite`,disabled:!l,onClick:B,children:(0,w.jsx)($,{$active:E,src:`/favorite.svg`,alt:``,"aria-hidden":`true`})}),(0,w.jsx)(Q,{type:`button`,$theme:P,"aria-label":`CollectionSave`,disabled:!l,onClick:ye,children:(0,w.jsx)($,{src:`/collection.svg`,alt:``,"aria-hidden":`true`})})]}),(0,w.jsxs)(dt,{children:[(0,w.jsx)(Q,{type:`button`,$theme:P,"aria-label":`Import`,onClick:be,children:(0,w.jsx)($,{src:`/import.svg`,alt:``,"aria-hidden":`true`})}),(0,w.jsx)(Q,{type:`button`,$theme:P,"aria-label":`Export`,onClick:xe,children:(0,w.jsx)($,{src:`/export.svg`,alt:``,"aria-hidden":`true`})})]})]}),(0,w.jsx)(Je,{$theme:P,children:(0,w.jsx)(X,{type:`button`,$theme:P,"aria-label":v?`Close Tray`:`Open Tray`,onClick:()=>{b(e=>!e)},children:(0,w.jsx)(ne,{size:22})})}),(0,w.jsx)(Ye,{$theme:P,children:v?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Z,{$theme:P,children:(0,w.jsx)(Xe,{children:R.length===0?(0,w.jsx)(J,{$theme:P,children:`No collection records found.`}):R.map(e=>(0,w.jsxs)(Ze,{$theme:P,children:[(0,w.jsxs)(Qe,{children:[(0,w.jsxs)($e,{$theme:P,children:[e.favorite?(0,w.jsx)(et,{children:`❤`}):null,(0,w.jsx)(tt,{children:e.name})]}),(0,w.jsxs)(nt,{children:[(0,w.jsx)(`span`,{children:`→`}),(0,w.jsx)(it,{$color:_e(e.author),children:e.author}),e.source===`remote`?(0,w.jsx)(rt,{$theme:P,title:`Online`,children:(0,w.jsx)(re,{size:11})}):null]})]}),(0,w.jsxs)(at,{children:[(0,w.jsx)(ot,{type:`button`,$theme:P,$variant:`import`,onClick:()=>{we(e)},children:`Import`}),e.source===`local`?(0,w.jsx)(ot,{type:`button`,$theme:P,$variant:`delete`,onClick:()=>{Te(e)},children:`X`}):null]})]},e.id))})}),(0,w.jsxs)(st,{children:[(0,w.jsx)(ct,{$theme:P,type:`text`,value:x,placeholder:`Enter query...`,onChange:e=>{S(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),H())}}),(0,w.jsx)(lt,{type:`button`,$theme:P,"aria-label":`Search`,onClick:H,children:(0,w.jsx)(ie,{size:16})})]})]}):null})]}),se?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(gt,{onClick:V}),(0,w.jsxs)(_t,{$theme:P,onClick:e=>{e.stopPropagation()},children:[(0,w.jsx)(vt,{$theme:P,children:`Import Unit Data`}),(0,w.jsx)(pt,{$theme:P,value:le,placeholder:`Paste exported unit JSON here`,onChange:e=>{j(e.target.value),M&&N(null)}}),M?(0,w.jsx)(ht,{$theme:P,children:M}):null,(0,w.jsxs)(yt,{children:[(0,w.jsx)(mt,{type:`button`,$theme:P,onClick:V,children:`Cancel`}),(0,w.jsx)(mt,{type:`button`,$theme:P,$variant:`primary`,onClick:Ce,children:`Import`})]})]})]}):null]})},{})})}));