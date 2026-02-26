import{A as e,N as t,b as n,g as r,h as i,k as a,m as o,n as s,t as c,v as l,w as u,x as d,y as f}from"./defaultgamesystem-BND08bdE.js";import{_ as p,c as m,d as h,g,i as ee,l as _,n as te,o as v,s as ne,t as re,u as ie}from"./FormulaParser-D7wgfFuL.js";/* empty css               */var ae=h(`cloud`,[[`path`,{d:`M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`,key:`p7xjir`}]]),y=h(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),oe=h(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),b=t(a(),1),x=t(e(),1);const S=e=>{let t=[...Array.isArray(e)?e:[]].sort((e,t)=>e.row===t.row?e.col-t.col:e.row-t.row),n=[];return t.forEach(e=>{let t=n[n.length-1];if(!t||t.row!==e.row){n.push({row:e.row,items:[e]});return}t.items.push(e)}),{sorted:t,rows:n}};var C=d(),se=s.div`
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
`,w=s.div`
  position: relative;
  z-index: 1;
`,T=s.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`,E=s.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`,ce=s(E)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  height: calc(2 * 1.1em);
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100% !important;
`,le=s.span`
  line-height: 1.1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
`,D=s(s.div`
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
`,ue=s.div`
  color: ${e=>e.$theme.primary};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`,de=s.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?o(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?o(e.$theme.offset,.5):o(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>o(e.$theme.primary,.9)};
  box-sizing: border-box;
  font-size: ${e=>e.$fontSize};
  text-align: ${e=>e.$align||`left`};
  cursor: ${e=>e.$isRollable?`pointer`:`text`};

  &::placeholder {
    color: ${e=>o(e.$theme.primary,.65)};
  }
`,fe=s.div`
  width: ${e=>e.$full?`100%`:`170px`};
  height: 40px;
  box-sizing: border-box;
`,O=s.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`,k=s.span`
  color: ${e=>e.$theme.offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
  margin-left: 4px;
  margin-right: 4px;
  align-self: center;
`,A=s.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?o(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?o(e.$theme.offset,.5):o(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>o(e.$theme.primary,.9)};
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

  &::placeholder {
    color: ${e=>o(e.$theme.primary,.65)};
  }
`,j=s.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,pe=s.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,me=s.div`
  flex: 1;
  min-width: 0;
`,M=s.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 18px;
`,he=s.div`
  width: 100%;
  height: 5px;
  background: ${e=>`linear-gradient(10deg, ${e.$theme.border||`white`}, rgba(255,255,255,0))`};
`,ge=s.div`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${e=>e.$theme.border||`rgba(255,255,255,0.5)`};
`,N=s.div`
  width: 100%;
  height: 10px;
  background: ${e=>`linear-gradient(to bottom, ${e.$theme.border||`rgba(255,255,255,0.2)`}, transparent)`};
`,P=s.div`
  width: 100%;
  height: 2px;
  background: ${e=>e.$theme.border||`#222`};
  box-shadow: ${e=>`inset 0 1px 0 ${e.$theme.border||`#444`}, 0 1px 0 #000`};
`,_e=s.div`
  width: 100%;
  height: 6px;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6' preserveAspectRatio='none'%3E%3Cpolyline points='0,6 6,0 12,6 18,0 24,6' fill='none' stroke='${encodeURIComponent(e.$theme.border||`#ffffff`)}' stroke-width='1.5'/%3E%3C/svg%3E")`};
`,F=s.div`
  width: 100%;
  height: 4px;
  background: ${e=>e.$theme.border||`white`};
  animation: flicker 1.2s infinite alternate;

  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 1; }
  }
`,I=s.div`
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
`,ye=s.div`
  color: ${e=>e.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,L=s.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,be=s.div`
  margin-bottom: 8px;
`,xe=s.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`,Se=s.div`
  width: 20px;
  display: flex;
  justify-content: center;
`,Ce=s.div`
  flex: 1;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`,R=s.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,z=s.input`
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
`,B=s.textarea`
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
`,V=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`,H=s.button`
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
`,we=s.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`,Te=s.div`
  flex: 1;
`,Ee=s.input`
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
`,De=s.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 8px;
`,Oe=s.span`
  color: ${e=>e.$theme.offset||c.theme_offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
`,ke=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: space-evenly;
  width: ${e=>e.$fullWidth?`100%`:`auto`};
`,Ae=s.input`
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
`,je=s.button`
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
`,Me=s.div`
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
`,Ne={sm:`14px`,md:`16px`,lg:`18px`},Pe={sm:`14px`,md:`16px`,lg:`18px`},Fe={sm:`14px`,md:`16px`,lg:`18px`},Ie={sm:`14px`,md:`16px`,lg:`18px`},U=(e,t)=>t&&e.find(e=>{let n=e.attr_bid===t,r=String(e.id??``)===String(t);return n||r})||null,W=(e,t)=>e?t===`abbr`?e.attr_abbr:t===`name`||!t||t===`text`?e.attr_name:``:``,Le=(e,t)=>Array.isArray(t)?t.filter(t=>!!U(e,t)):[],Re=(e,t)=>Le(e,t).filter(t=>{let n=U(e,t);return String(n?.attr_type||``).toLowerCase()===`bool`}),ze=(e,t)=>{let n=U(e,t);return!n||n.attr_type!==`list`?`List Attribute`:n.attr_name};const Be=({systemTheme:e,backgroundUrl:t,cardLayout:n,attributes:i,unitItem:a,onUpdateMetadata:o})=>{let[s,c]=(0,x.useState)({}),[l,d]=(0,x.useState)({}),m=(0,x.useRef)({}),h=(0,x.useRef)({}),{rows:ee}=(0,x.useMemo)(()=>S(n),[n]),te=(0,x.useMemo)(()=>{let e=a.metadata?.[r.UNIT_NAME];if(typeof e==`string`&&e.trim())return e;let t=a.text?.plainText;return typeof t==`string`&&t.trim()?t:typeof a.name==`string`&&a.name.trim()?a.name:`Unknown`},[a]),v=e=>`${f.EXTENSIONID}/${e}`,ne=e=>{let t=a.metadata?.[v(e)];return t==null?``:typeof t==`string`?t:typeof t==`number`||typeof t==`boolean`?String(t):``},ie=e=>{let t=a.metadata?.[v(e)];if(typeof t==`boolean`)return t;if(typeof t==`number`)return t!==0;if(typeof t==`string`){let e=t.trim().toLowerCase();return e===`true`||e===`1`||e===`yes`||e===`on`}return!1},ae=(e,t)=>s[e]??ne(t),oe=e=>{let t=e?.attr_func;return typeof t==`string`&&t.trim().length>0},b=(0,x.useMemo)(()=>{let e={};for(let t of i){let n=ne(t.attr_bid).trim();if(!n)continue;let r=Number(n);Number.isFinite(r)&&(e[t.attr_bid]=r)}return e},[i,a.metadata]),Be=e=>{let t=e?.attr_func;if(typeof t!=`string`||t.trim().length===0)return null;let n=re(t,{bidValueMap:b,onMissingBid:`error`});return!n.valid||!n.notation?(p.warn(`[FORGE] Could not convert attr_func for ${e?.attr_bid||`unknown`}: ${n.error||`Unknown conversion error`}`),null):n.notation},G=async(e,t)=>{try{let n=await u.scene.getMetadata(),r=(await u.party.getPlayers()).find(e=>e.id===a.createdUserId),i=await u.player.getId(),o=await u.player.getColor();await g({notation:e,actionName:t,senderName:te,senderId:a.createdUserId||i||a.id,senderColor:r?.color||o||`#ffffff`},n)}catch(t){p.error(`Failed to send dice roll from CardLayoutRenderer`,e,t),p.log(e)}},K=async e=>{if(!e)return;let t=Be(e);t&&await G(t,e.attr_name||e.attr_bid||`Roll`)};(0,x.useEffect)(()=>()=>{Object.values(m.current).forEach(e=>{window.clearTimeout(e)})},[]);let Ve=e=>!!l[e],q=(e,t)=>{d(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},J=e=>{d(t=>{let{[e]:n,...r}=t;return r})},He=(e,t)=>{let n=m.current[e];n&&window.clearTimeout(n),m.current[e]=window.setTimeout(()=>{h.current[e]=!0,q(e,t),delete m.current[e]},500)},Y=e=>{let t=m.current[e];t&&(window.clearTimeout(t),delete m.current[e])},Ue=e=>h.current[e]?(delete h.current[e],!0):!1,We=async(e,t)=>{await o({[v(e)]:t})},Ge=async(e,t)=>{await o({[v(e)]:t})},Ke=e=>{let t=a.metadata?.[v(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``}}):[]},qe=e=>{let t=a.metadata?.[v(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``,inUse:!!t.inUse}}):[]},Je=(e,t)=>{p.log(e,t)},X=e=>{e&&(e.style.height=`0px`,e.style.height=`${Math.max(e.scrollHeight,44)}px`)},Ye=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=e[0],r=(e[1]||``).trim();if(!r)continue;let i=re(r,{bidValueMap:b,onMissingBid:`error`});!i.valid||!i.notation||t.push({raw:n,notation:i.notation})}return t},Z=async(e,t,n)=>{Je(`List metadata update`,{listType:n.listType,bid:e,reason:n.reason,entryId:n.entryId,field:n.field,entryCount:t.length,timestamp:Date.now()}),await o({[v(e)]:t})},Xe=t=>t===`dash`||t===`dashed`?(0,C.jsx)(ge,{$theme:e}):t===`shadow`?(0,C.jsx)(N,{$theme:e}):t===`ridge`?(0,C.jsx)(P,{$theme:e}):t===`zigzag`?(0,C.jsx)(_e,{$theme:e}):t===`pulse`?(0,C.jsx)(F,{$theme:e}):(0,C.jsx)(he,{$theme:e}),Ze=t=>{let n=t.type,r=t.styles||{},a=U(i,r.attributeId),o=r.textAlign||`left`,s=r.stretch===!0;if(n===`line-break`)return(0,C.jsx)(E,{$theme:e,$full:!0,children:Xe(r.styleDesign)},t.id);if(n===`line-spacer`)return(0,C.jsx)(M,{$full:t.fullsize},t.id);if(n===`text`){let n=Ne[r.fontSize||`md`],i=W(a,r.labelMode)||`Title Header`;return(0,C.jsx)(E,{$theme:e,$full:t.fullsize,children:(0,C.jsx)(ue,{$theme:e,$fontSize:n,$weight:700,$stretch:s,$align:o,children:i})},t.id)}if(n===`text-value`){let n=Ie[r.fontSize||`md`],i=W(a,r.labelMode),o=!!i,l=r.labelPosition===`right`?`right`:`left`,u=r.textAlign||`center`,d=r.fontWeight===`bold`?700:400,f=r.fontStyle===`italic`?`italic`:`normal`,p=a?.attr_bid,m=oe(a),h=`text-value:${t.id}:${p||`none`}`,g=m&&Ve(h),ee=(0,C.jsx)(A,{$theme:e,$fontSize:n,$align:u,$weight:d,$fontStyle:f,$stretch:s,$isRollable:m,type:`text`,readOnly:m&&!g,value:p?ae(h,p):``,onChange:m&&!g?void 0:e=>{if(!p)return;let t=e.target.value;c(e=>({...e,[h]:t}))},onBlur:m&&!g?void 0:async e=>{if(!p)return;let t=e.target.value;await We(p,t),c(e=>{let{[h]:t,...n}=e;return n}),m&&J(h)},onClick:m?()=>{g||Ue(h)||K(a)}:void 0,onContextMenu:m?e=>{e.preventDefault(),q(h,e.currentTarget)}:void 0,onTouchStart:m?e=>{g||He(h,e.currentTarget)}:void 0,onTouchEnd:m?()=>{Y(h)}:void 0,onTouchCancel:m?()=>{Y(h)}:void 0,onKeyDown:e=>{if(m&&!g&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),K(a);return}(g||!m)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`}),_=o?(0,C.jsx)(k,{$theme:e,$fontSize:n,$stretch:s,$weight:d,$fontStyle:f,children:i}):null;return(0,C.jsx)(fe,{$full:t.fullsize,children:(0,C.jsxs)(O,{children:[l===`left`?_:null,ee,l===`right`?_:null]})},t.id)}if(n===`text-checkbox`){let n=Pe[r.fontSize||`md`],a=t.fullsize?6:3,o=Math.max(1,Math.min(a,Number(r.checkboxCount||1))),c=[...Re(i,r.bidList)].slice(0,o);for(;c.length<o;)c.push(``);let l=W(U(i,c[0]||r.attributeId),r.labelMode),u=r.inputType===`slider`,d=r.labelPosition===`right`?`right`:`left`,f=r.fontWeight===`bold`?700:400,p=r.fontStyle===`italic`?`italic`:`normal`,m=l?(0,C.jsx)(Oe,{$theme:e,$fontSize:n,$stretch:s,$weight:f,$fontStyle:p,children:l}):null;return(0,C.jsx)(E,{$theme:e,$full:t.fullsize,children:(0,C.jsxs)(De,{children:[d===`left`?m:null,(0,C.jsx)(ke,{$fullWidth:!m,children:Array.from({length:o}).map((t,n)=>{let r=c[n]||``,i=r?ie(r):!1;return u?(0,C.jsx)(je,{type:`button`,$theme:e,$active:i,disabled:!r,onClick:r?()=>{Ge(r,!i)}:void 0,children:(0,C.jsx)(Me,{$theme:e,$active:i})},`slider-${n}`):(0,C.jsx)(Ae,{$theme:e,type:`checkbox`,disabled:!r,checked:i,onChange:r?e=>{Ge(r,e.target.checked)}:void 0},`checkbox-${n}`)})}),d===`right`?m:null]})},t.id)}if(n===`column-text`){let n=Fe[r.fontSize||`md`],a=Le(i,r.bidList),o=r.fontWeight===`bold`?700:400,c=r.fontStyle===`italic`?`italic`:`normal`;return a.length===0?null:(0,C.jsx)(E,{$theme:e,$full:t.fullsize,children:(0,C.jsx)(j,{children:a.map(t=>{let a=W(U(i,t),r.labelMode||`name`);return a?(0,C.jsx)(pe,{children:(0,C.jsx)(D,{$theme:e,$fontSize:n,$stretch:s,$align:`center`,$weight:o,$fontStyle:c,children:a})},t):null})})},t.id)}if(n===`column-value`){let n=Fe[r.fontSize||`md`],a=Le(i,r.bidList);return a.length===0?null:(0,C.jsx)(E,{$theme:e,$full:t.fullsize,children:(0,C.jsx)(j,{children:a.map(r=>{let a=U(i,r),o=oe(a),s=`column-value:${t.id}:${r}`,l=o&&Ve(s);return(0,C.jsx)(me,{children:(0,C.jsx)(de,{$theme:e,$fontSize:n,$align:`center`,$isRollable:o,readOnly:o&&!l,value:ae(s,r),onChange:o&&!l?void 0:e=>{let t=e.target.value;c(e=>({...e,[s]:t}))},onBlur:o&&!l?void 0:async e=>{let t=e.target.value;await We(r,t),c(e=>{let{[s]:t,...n}=e;return n}),o&&J(s)},onClick:o?()=>{l||Ue(s)||K(a)}:void 0,onContextMenu:o?e=>{e.preventDefault(),q(s,e.currentTarget)}:void 0,onTouchStart:o?e=>{l||He(s,e.currentTarget)}:void 0,onTouchEnd:o?()=>{Y(s)}:void 0,onTouchCancel:o?()=>{Y(s)}:void 0,onKeyDown:e=>{if(o&&!l&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),K(a);return}(l||!o)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`})},r)})})},t.id)}if(n===`action-list`){let n=U(i,r.attributeId||r.bidList?.[0])?.attr_bid,a=ze(i,r.attributeId||r.bidList?.[0]),o=n?Ke(n):[];return(0,C.jsx)(E,{$theme:e,$full:t.fullsize,children:(0,C.jsxs)(I,{$theme:e,children:[(0,C.jsxs)(ve,{$theme:e,children:[(0,C.jsx)(ye,{$theme:e,children:a}),(0,C.jsx)(L,{type:`button`,$theme:e,"aria-label":`Add Action`,onClick:async()=>{n&&await Z(n,[...o,{id:crypto.randomUUID(),name:``,description:``}],{listType:`action`,reason:`add`})},children:(0,C.jsx)(y,{size:14})})]}),o.map((r,i)=>(0,C.jsxs)(be,{children:[(0,C.jsxs)(we,{children:[(0,C.jsx)(Te,{children:(0,C.jsx)(z,{$theme:e,type:`text`,defaultValue:r.name,placeholder:`Action Name`,onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,name:t}:e),{listType:`action`,reason:`blur-save`,entryId:r.id,field:`name`})}})}),(0,C.jsx)(R,{type:`button`,$theme:e,"aria-label":`Delete Action`,onClick:async()=>{n&&await Z(n,o.filter(e=>e.id!==r.id),{listType:`action`,reason:`delete`,entryId:r.id})},children:(0,C.jsx)(_,{size:14})})]}),(()=>{let t=Ye(r.description);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(B,{$theme:e,defaultValue:r.description,ref:X,placeholder:`Action Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,description:t}:e),{listType:`action`,reason:`blur-save`,entryId:r.id,field:`description`})}}),t.length>0?(0,C.jsx)(V,{children:t.map((t,n)=>(0,C.jsx)(H,{type:`button`,$theme:e,onClick:()=>{G(t.notation,r.name||`Action`)},title:t.notation,children:t.notation},`${r.id}-action-inline-${n}`))}):null]})})()]},r.id||`${t.id}-action-${i}`))]})},t.id)}if(n===`item-list`){let n=U(i,r.attributeId||r.bidList?.[0])?.attr_bid,a=ze(i,r.attributeId||r.bidList?.[0]),o=n?qe(n):[];return(0,C.jsx)(E,{$theme:e,$full:t.fullsize,children:(0,C.jsxs)(I,{$theme:e,children:[(0,C.jsxs)(ve,{$theme:e,children:[(0,C.jsx)(ye,{$theme:e,children:a}),(0,C.jsx)(L,{type:`button`,$theme:e,"aria-label":`Add Item`,onClick:async()=>{n&&await Z(n,[...o,{id:crypto.randomUUID(),name:``,description:``,inUse:!1}],{listType:`item`,reason:`add`})},children:(0,C.jsx)(y,{size:14})})]}),o.map((r,i)=>(0,C.jsxs)(be,{children:[(0,C.jsxs)(xe,{children:[(0,C.jsx)(Se,{children:(0,C.jsx)(Ee,{$theme:e,type:`checkbox`,defaultChecked:r.inUse,onBlur:async e=>{if(!n)return;let t=e.target.checked;await Z(n,o.map(e=>e.id===r.id?{...e,inUse:t}:e),{listType:`item`,reason:`toggle-save`,entryId:r.id,field:`inUse`})}})}),(0,C.jsx)(Ce,{$theme:e,children:(0,C.jsx)(z,{$theme:e,type:`text`,defaultValue:r.name,placeholder:`Item Name`,onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,name:t}:e),{listType:`item`,reason:`blur-save`,entryId:r.id,field:`name`})}})}),(0,C.jsx)(R,{type:`button`,$theme:e,"aria-label":`Delete Item`,onClick:async()=>{n&&await Z(n,o.filter(e=>e.id!==r.id),{listType:`item`,reason:`delete`,entryId:r.id})},children:(0,C.jsx)(_,{size:14})})]}),(()=>{let t=Ye(r.description);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(B,{$theme:e,defaultValue:r.description,ref:X,placeholder:`Item Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,description:t}:e),{listType:`item`,reason:`blur-save`,entryId:r.id,field:`description`})}}),t.length>0?(0,C.jsx)(V,{children:t.map((t,n)=>(0,C.jsx)(H,{type:`button`,$theme:e,onClick:()=>{G(t.notation,r.name||`Item`)},title:t.notation,children:t.notation},`${r.id}-item-inline-${n}`))}):null]})})()]},r.id||`${t.id}-item-${i}`))]})},t.id)}return null};return(0,C.jsx)(se,{$theme:e,$backgroundUrl:t,children:(0,C.jsxs)(w,{children:[(0,C.jsx)(T,{children:(0,C.jsx)(ce,{$theme:e,children:(0,C.jsx)(le,{children:te})})}),ee.map(e=>(0,C.jsx)(T,{children:e.items.map(e=>Ze(e))},`row-${e.row}`))]})})};var G={CURRENT_THEME:`${f.EXTENSIONID}/CurrentTheme`,CURRENT_CARD:`${f.EXTENSIONID}/CurrentCard`,CURRENT_ATTR:`${f.EXTENSIONID}/CurrentAttr`},K={primary:c.theme_primary,offset:c.theme_offset,background:c.theme_background,border:c.theme_border,background_url:c.background_url},Ve=s.div`
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
`,q=s.div`
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
`,He=s.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: min(calc(100% - 16px), 350px);
  z-index: 10;
`,Y=s.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`,Ue=s.select`
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
`,We=s.button`
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
`,Ge=s.img`
  width: 28px;
  height: 28px;
  display: block;
`,Ke=s.div`
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
`,qe=s.div`
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
`,Je=s.button`
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
`,X=s.div`
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
`,Ye=s.div`
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
`,Z=s.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Xe=s.div`
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
`,Ze=s.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,Qe=s.div`
  color: ${e=>e.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,$e=s.span`
  font-size: 12px;
  line-height: 1;
`,et=s.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,tt=s.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`,nt=s.span`
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
`,rt=s.span`
  color: ${e=>e.$color};
`,it=s.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,at=s.button`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>e.$variant===`import`?o(e.$theme.offset,.45):o(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`,ot=s.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,st=s.input`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>o(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`,ct=s.button`
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
`,lt=s.div`
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
`,ut=s.div`
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
`,dt=s(Q)`
  background: ${e=>e.$active?o(e.$theme.offset,.45):o(e.$theme.background,.9)};

  &:disabled {
    background: ${e=>o(e.$theme.background,.9)};
  }
`,$=s.img`
  width: 20px;
  height: 20px;
  display: block;
  filter: ${e=>e.$active?`brightness(0) saturate(100%) invert(23%) sepia(82%) saturate(6574%) hue-rotate(349deg) brightness(96%) contrast(115%)`:`none`};
`,ft=s.textarea`
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
`,pt=s.button`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 8px;
  background: ${e=>e.$variant===`primary`?o(e.$theme.offset,.5):o(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 6px 10px;
  cursor: pointer;
`,mt=s.div`
  margin-top: 8px;
  color: ${e=>o(e.$theme.offset,.95)};
  font-size: 12px;
`,ht=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,gt=s.div`
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
`,_t=s.h3`
  color: ${e=>e.$theme.primary};
  margin: 0 0 15px 0;
  font-size: 18px;
`,vt=s.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
`,yt=()=>{let e=new URLSearchParams(window.location.search).get(`unitid`);return e&&e.split(`,`)[0]?.trim()||null},bt=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},xt=e=>{if(e===!0)return!0;if(typeof e==`string`){let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`}return typeof e==`number`?e===1:!1};b.createRoot(document.getElementById(`root`)).render((0,C.jsx)(x.StrictMode,{children:(0,C.jsx)(n,{children:(0,C.jsx)(()=>{let[e,t]=(0,x.useState)(()=>yt()),[n,a]=(0,x.useState)({metadata:{},items:[]}),[o,s]=(0,x.useState)(null),[l,d]=(0,x.useState)(!1),[h,g]=(0,x.useState)(!1),[_,re]=(0,x.useState)(!1),[y,b]=(0,x.useState)(``),[S,se]=(0,x.useState)(``),[w,T]=(0,x.useState)(!1),[E,ce]=(0,x.useState)([]),[le,D]=(0,x.useState)([]),[ue,de]=(0,x.useState)(!1),[fe,O]=(0,x.useState)(``),[k,A]=(0,x.useState)(null),j=e=>{let t=e[i.ENABLE_CONSOLE_LOG];typeof t==`boolean`&&p.setEnabled(t)},pe=(0,x.useMemo)(()=>bt(n.metadata[G.CURRENT_CARD])||c.card_layout,[n.metadata]),me=(0,x.useMemo)(()=>bt(n.metadata[G.CURRENT_ATTR])||c.attributes,[n.metadata]),M=(0,x.useMemo)(()=>{let e=n.metadata[G.CURRENT_THEME];return!e?.primary||!e?.offset||!e?.background||!e?.border?K:e},[n.metadata]);(0,x.useEffect)(()=>{let e=!0;(async()=>{let[t,n,r,i,o]=await Promise.all([u.scene.getMetadata(),u.scene.items.getItems(),u.room.getMetadata(),u.player.getId(),u.player.getRole()]);e&&(j(t),a({metadata:t,items:n}),s(i),d(String(o||``).toUpperCase()===`GM`),g(!0))})();let t=u.scene.onMetadataChange(t=>{e&&(a(e=>({...e,metadata:t})),j(t))}),n=u.room.onMetadataChange(e=>{}),r=u.scene.items.onChange(t=>{e&&a(e=>({...e,items:t}))});return()=>{e=!1,t(),n(),r()}},[]);let he=e=>{let t=e.metadata?.[r.UNIT_NAME];if(typeof t==`string`&&t.trim())return t;let n=e.text?.plainText;return typeof n==`string`&&n.trim()?n:typeof e.name==`string`&&e.name.trim()?e.name:`Unknown`},ge=(0,x.useMemo)(()=>n.items.filter(e=>xt(e.metadata?.[r.FABRICATED])).filter(e=>l||e.createdUserId===o).filter(t=>t.id!==e).map(e=>({id:e.id,name:he(e)})).sort((e,t)=>e.name.localeCompare(t.name)),[n.items,e,l,o]),N=(0,x.useMemo)(()=>e&&n.items.find(t=>t.id===e)||null,[n.items,e]),P=async()=>e&&(await u.scene.items.getItems()).find(t=>t.id===e)||null,_e=async e=>{N&&(await u.scene.items.updateItems([N.id],t=>{let n={...t[0].metadata||{}};Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),t[0].metadata=n}),a(t=>({...t,items:t.items.map(t=>{if(t.id!==N.id)return t;let n={...t.metadata||{}};return Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),{...t,metadata:n}})})))},F=async e=>{if(!N)return;let t=[r.FABRICATED,r.INITIATIVE,r.ON_LIST];await u.scene.items.updateItems([N.id],n=>{let r=n[0].metadata,i={},a={};for(let[e,n]of Object.entries(r))e.startsWith(`${f.EXTENSIONID}/`)||(i[e]=n),t.includes(e)&&(a[e]=n);n[0].metadata={...i,...e,...a}}),a(n=>({...n,items:n.items.map(n=>{if(n.id!==N.id)return n;let r={},i={};for(let[e,a]of Object.entries(n.metadata||{}))e.startsWith(`${f.EXTENSIONID}/`)||(r[e]=a),t.includes(e)&&(i[e]=a);return{...n,metadata:{...r,...e,...i}}})}))},I=async()=>{ce(await ne())},ve=e=>{let t=e.trim(),n=t?t[0].toUpperCase():`A`;return`hsl(${Math.max(0,Math.min(25,n.charCodeAt(0)-65))/26*360}, 70%, 65%)`},ye=async e=>{let t=e.trim();if(!t)return[];let{data:n,error:r}=await te.from(`bs_forge_creatures`).select(`external_id,name,author,favorite,metadata,is_active`).eq(`is_active`,!0).or(`name.ilike.%${t}%,author.ilike.%${t}%`).limit(250);if(r)throw r;return(n??[]).filter(e=>e&&typeof e.name==`string`&&typeof e.author==`string`).map(e=>({id:`remote:${e.external_id}`,name:e.name,author:e.author,favorite:e.favorite===!0,metadata:e.metadata&&typeof e.metadata==`object`&&!Array.isArray(e.metadata)?e.metadata:{},updatedAt:0}))},L=(0,x.useMemo)(()=>{let e=S.trim().toLowerCase(),t=[...E].sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);if(!e)return t.filter(e=>e.favorite).map(e=>({...e,source:`local`}));let n=t.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),r=new Set(n.map(e=>`${e.name.toLowerCase()}::${e.author.toLowerCase()}`)),i=le.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)).filter(e=>!r.has(`${e.name.toLowerCase()}::${e.author.toLowerCase()}`)).sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);return[...n.map(e=>({...e,source:`local`})),...i.map(e=>({...e,source:`remote`}))]},[E,le,S]),be=()=>{p.log(`Tray action clicked: pin`)},xe=()=>{l&&T(e=>!e)},Se=async()=>{if(!l)return;let e=await P();if(!e){await u.notification.show(`No unit selected to save.`,`ERROR`);return}try{let t=(await u.player.getName()).trim(),n=await m(e.metadata,t,w);await I(),await u.notification.show(n===`created`?`Unit saved to Collection.`:`Unit updated in Collection.`)}catch(e){p.log(`Collection save failed`,e),await u.notification.show(`Could not save this unit to Collection.`,`ERROR`)}},Ce=async()=>{if(!await P()){await u.notification.show(`No unit selected to import into.`,`ERROR`);return}A(null),O(``),de(!0)},R=async()=>{let e=await P();if(!e){await u.notification.show(`No unit selected to export.`,`ERROR`);return}try{let t=v(e.metadata),n=t[r.UNIT_NAME],i=typeof n==`string`?n.trim():``;if(!i){await u.notification.show(`Current unit has no valid unit name to export.`,`ERROR`);return}let a={name:i,author:(await u.player.getName()).trim()||`Unknown`,metadata:t};await navigator.clipboard.writeText(JSON.stringify(a,null,2)),await u.notification.show(`Unit data copied to clipboard.`)}catch(e){p.log(`Unit export failed`,e),await u.notification.show(`Could not copy unit data to clipboard.`,`ERROR`)}},z=()=>{de(!1),A(null),O(``)},B=e=>{let t=JSON.parse(e);if(!t||typeof t!=`object`||Array.isArray(t))throw Error(`Import data must be a JSON object.`);let n=t,i=n.metadata&&typeof n.metadata==`object`?n.metadata:t;if(!i||typeof i!=`object`||Array.isArray(i))throw Error(`Import data must include a metadata object.`);let a=v(i),o=a[r.UNIT_NAME];if(!(typeof o==`string`&&o.trim()))throw Error(`Imported metadata must include a valid unit name.`);return a},V=async()=>{if(!await P()){A(`No unit selected to import into.`);return}let e=fe.trim();if(!e){A(`Paste JSON data before importing.`);return}try{await F(B(e)),T(!1),z(),await u.notification.show(`Unit data imported successfully.`)}catch(e){A(e instanceof Error?e.message:`Import failed.`)}},H=()=>{let e=y.trim();if(se(e),!e){D([]);return}ye(e).then(e=>{D(e)}).catch(async e=>{p.log(`Supabase collection search failed`,e),D([]),await u.notification.show(`Could not search online collection.`,`ERROR`)})},we=async e=>{if(!N){await u.notification.show(`No unit selected to import into.`,`ERROR`);return}try{await F(e.metadata),T(!1),await u.notification.show(e.source===`remote`?`Imported ${e.name} from online collection.`:`Imported ${e.name}.`)}catch(e){p.log(`Collection record import failed`,e),await u.notification.show(`Could not import collection record.`,`ERROR`)}},Te=async e=>{if(e.source===`local`)try{await ee(e.id),await I(),await u.notification.show(`Deleted ${e.name} from Collection.`)}catch(e){p.log(`Collection record delete failed`,e),await u.notification.show(`Could not delete collection record.`,`ERROR`)}};return(0,x.useEffect)(()=>{_&&I().catch(e=>{p.log(`Failed to load collection records`,e)})},[_]),(0,x.useEffect)(()=>{_&&(se(``),b(``),D([]))},[_]),(0,C.jsxs)(Ve,{$theme:M,children:[(0,C.jsxs)(q,{children:[(0,C.jsx)(He,{children:(0,C.jsxs)(Y,{children:[(0,C.jsxs)(Ue,{$theme:M,"aria-label":`Choose Unit`,value:``,onChange:e=>{let n=e.target.value;n&&t(n)},children:[(0,C.jsx)(`option`,{value:``,children:`Choose Unit`}),ge.map(e=>(0,C.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,C.jsx)(We,{type:`button`,$theme:M,"aria-label":`Close Card`,onClick:async()=>{await u.popover.close(f.CARDSID)},children:(0,C.jsx)(Ge,{src:`/close.svg`,alt:``,"aria-hidden":`true`})})]})}),h?e?N?(0,C.jsx)(Be,{systemTheme:M,backgroundUrl:M.background_url,cardLayout:pe,attributes:me,unitItem:N,onUpdateMetadata:_e}):(0,C.jsx)(J,{$theme:M,children:`Unit not found in current scene.`}):(0,C.jsx)(J,{$theme:M,children:`No unit id supplied in URL.`}):(0,C.jsx)(J,{$theme:M,children:`Loading card…`})]}),(0,C.jsxs)(Ke,{$theme:M,$open:_,children:[(0,C.jsxs)(lt,{children:[(0,C.jsxs)(ut,{children:[(0,C.jsx)(Q,{type:`button`,$theme:M,"aria-label":`Pin`,onClick:be,children:(0,C.jsx)($,{src:`/pin.svg`,alt:``,"aria-hidden":`true`})}),(0,C.jsx)(dt,{type:`button`,$theme:M,$active:w,"aria-label":`Favorite`,disabled:!l,onClick:xe,children:(0,C.jsx)($,{$active:w,src:`/favorite.svg`,alt:``,"aria-hidden":`true`})}),(0,C.jsx)(Q,{type:`button`,$theme:M,"aria-label":`CollectionSave`,disabled:!l,onClick:Se,children:(0,C.jsx)($,{src:`/collection.svg`,alt:``,"aria-hidden":`true`})})]}),(0,C.jsxs)(ut,{children:[(0,C.jsx)(Q,{type:`button`,$theme:M,"aria-label":`Import`,onClick:Ce,children:(0,C.jsx)($,{src:`/import.svg`,alt:``,"aria-hidden":`true`})}),(0,C.jsx)(Q,{type:`button`,$theme:M,"aria-label":`Export`,onClick:R,children:(0,C.jsx)($,{src:`/export.svg`,alt:``,"aria-hidden":`true`})})]})]}),(0,C.jsx)(qe,{$theme:M,children:(0,C.jsx)(Je,{type:`button`,$theme:M,"aria-label":_?`Close Tray`:`Open Tray`,onClick:()=>{re(e=>!e)},children:(0,C.jsx)(ie,{size:22})})}),(0,C.jsx)(X,{$theme:M,children:_?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Ye,{$theme:M,children:(0,C.jsx)(Z,{children:L.length===0?(0,C.jsx)(J,{$theme:M,children:`No collection records found.`}):L.map(e=>(0,C.jsxs)(Xe,{$theme:M,children:[(0,C.jsxs)(Ze,{children:[(0,C.jsxs)(Qe,{$theme:M,children:[e.favorite?(0,C.jsx)($e,{children:`❤`}):null,(0,C.jsx)(et,{children:e.name})]}),(0,C.jsxs)(tt,{children:[(0,C.jsx)(`span`,{children:`→`}),(0,C.jsx)(rt,{$color:ve(e.author),children:e.author}),e.source===`remote`?(0,C.jsx)(nt,{$theme:M,title:`Online`,children:(0,C.jsx)(ae,{size:11})}):null]})]}),(0,C.jsxs)(it,{children:[(0,C.jsx)(at,{type:`button`,$theme:M,$variant:`import`,onClick:()=>{we(e)},children:`Import`}),e.source===`local`?(0,C.jsx)(at,{type:`button`,$theme:M,$variant:`delete`,onClick:()=>{Te(e)},children:`X`}):null]})]},e.id))})}),(0,C.jsxs)(ot,{children:[(0,C.jsx)(st,{$theme:M,type:`text`,value:y,placeholder:`Enter query...`,onChange:e=>{b(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),H())}}),(0,C.jsx)(ct,{type:`button`,$theme:M,"aria-label":`Search`,onClick:H,children:(0,C.jsx)(oe,{size:16})})]})]}):null})]}),ue?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(ht,{onClick:z}),(0,C.jsxs)(gt,{$theme:M,onClick:e=>{e.stopPropagation()},children:[(0,C.jsx)(_t,{$theme:M,children:`Import Unit Data`}),(0,C.jsx)(ft,{$theme:M,value:fe,placeholder:`Paste exported unit JSON here`,onChange:e=>{O(e.target.value),k&&A(null)}}),k?(0,C.jsx)(mt,{$theme:M,children:k}):null,(0,C.jsxs)(vt,{children:[(0,C.jsx)(pt,{type:`button`,$theme:M,onClick:z,children:`Cancel`}),(0,C.jsx)(pt,{type:`button`,$theme:M,$variant:`primary`,onClick:V,children:`Import`})]})]})]}):null]})},{})})}));