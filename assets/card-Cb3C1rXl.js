import{C as e,M as t,O as n,_ as r,b as i,g as a,h as o,k as s,m as c,n as l,t as u,v as d,y as f}from"./defaultgamesystem-DmoR38xX.js";import{_ as p,c as m,d as h,g,i as _,l as v,n as ee,o as y,s as b,t as x,u as te}from"./FormulaParser-DWFIT2Yd.js";/* empty css               */var ne=h(`cloud`,[[`path`,{d:`M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`,key:`p7xjir`}]]),S=h(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),re=h(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),C=t(n(),1),w=t(s(),1);const ie=e=>{let t=[...Array.isArray(e)?e:[]].sort((e,t)=>e.row===t.row?e.col-t.col:e.row-t.row),n=[];return t.forEach(e=>{let t=n[n.length-1];if(!t||t.row!==e.row){n.push({row:e.row,items:[e]});return}t.items.push(e)}),{sorted:t,rows:n}};var T=i(),ae=l.div`
  width: 100%;
  max-width: 350px;
  height: 700px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 0 2px 40px;
  max-height: calc(100vh - 16px);
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  position: relative;
`,E=l.div`
  position: relative;
  z-index: 1;
`,D=l.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`,O=l.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`,oe=l(O)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  height: calc(2 * 1.1em);
  display: flex;
  align-items: center;
  overflow: hidden;
`,k=l.span`
  line-height: 1.1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
`,A=l(O)`
  font-size: 11px;
  font-style: italic;
  color: #ff6b6b;
  display: flex;
  align-items: center;
  justify-content: center;
`,se=l(l.div`
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
`,ce=l.div`
  color: ${e=>e.$theme.primary};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`,le=l.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?c(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?c(e.$theme.offset,.5):c(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>c(e.$theme.primary,.9)};
  box-sizing: border-box;
  font-size: ${e=>e.$fontSize};
  text-align: ${e=>e.$align||`left`};
  cursor: ${e=>e.$isRollable?`pointer`:`text`};

  &::placeholder {
    color: ${e=>c(e.$theme.primary,.65)};
  }
`,j=l.div`
  width: ${e=>e.$full?`100%`:`170px`};
  height: 40px;
  box-sizing: border-box;
`,M=l.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`,N=l.span`
  color: ${e=>e.$theme.offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
  margin-left: 4px;
  margin-right: 4px;
  align-self: center;
`,ue=l.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?c(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?c(e.$theme.offset,.5):c(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>c(e.$theme.primary,.9)};
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
    color: ${e=>c(e.$theme.primary,.65)};
  }
`,de=l.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,fe=l.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,P=l.div`
  flex: 1;
  min-width: 0;
`,pe=l.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 18px;
`,me=l.div`
  width: 100%;
  height: 5px;
  background: ${e=>`linear-gradient(10deg, ${e.$theme.border||`white`}, rgba(255,255,255,0))`};
`,F=l.div`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${e=>e.$theme.border||`rgba(255,255,255,0.5)`};
`,I=l.div`
  width: 100%;
  height: 10px;
  background: ${e=>`linear-gradient(to bottom, ${e.$theme.border||`rgba(255,255,255,0.2)`}, transparent)`};
`,he=l.div`
  width: 100%;
  height: 2px;
  background: ${e=>e.$theme.border||`#222`};
  box-shadow: ${e=>`inset 0 1px 0 ${e.$theme.border||`#444`}, 0 1px 0 #000`};
`,L=l.div`
  width: 100%;
  height: 6px;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6' preserveAspectRatio='none'%3E%3Cpolyline points='0,6 6,0 12,6 18,0 24,6' fill='none' stroke='${encodeURIComponent(e.$theme.border||`#ffffff`)}' stroke-width='1.5'/%3E%3C/svg%3E")`};
`,R=l.div`
  width: 100%;
  height: 4px;
  background: ${e=>e.$theme.border||`white`};
  animation: flicker 1.2s infinite alternate;

  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 1; }
  }
`,z=l.div`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`,ge=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${e=>c(e.$theme.border,.85)};
  padding-bottom: 4px;
  margin-bottom: 4px;
`,B=l.div`
  color: ${e=>e.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,_e=l.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,ve=l.div`
  margin-bottom: 8px;
`,ye=l.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`,be=l.div`
  width: 20px;
  display: flex;
  justify-content: center;
`,xe=l.div`
  flex: 1;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`,V=l.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Se=l.input`
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
`,Ce=l.textarea`
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
`,H=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`,we=l.button`
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
`,Te=l.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`,Ee=l.div`
  flex: 1;
`,De=l.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #6b7280;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  appearance: none;
  display: inline-block;
  vertical-align: middle;

  &:checked {
    background-color: #f56565;
    border-color: #f56565;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(245, 101, 101, 0.6);
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,Oe=l.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 8px;
`,ke=l.span`
  color: ${e=>e.$theme.offset||u.theme_offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
`,Ae=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: space-evenly;
  width: ${e=>e.$fullWidth?`100%`:`auto`};
`,je=l.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #4b5563;
  background: rgba(0, 0, 0, 0.2);
  accent-color: #ffffff;
  pointer-events: none;
`,Me=l.button`
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
`,Ne=l.div`
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
`,Pe={sm:`14px`,md:`16px`,lg:`18px`},Fe={sm:`14px`,md:`16px`,lg:`18px`},Ie={sm:`14px`,md:`16px`,lg:`18px`},Le={sm:`14px`,md:`16px`,lg:`18px`},U=(e,t)=>t&&e.find(e=>{let n=e.attr_bid===t,r=String(e.id??``)===String(t);return n||r})||null,W=(e,t)=>e?t===`abbr`?e.attr_abbr:t===`name`||!t||t===`text`?e.attr_name:``:``,Re=(e,t)=>Array.isArray(t)?t.filter(t=>!!U(e,t)):[],ze=(e,t)=>Re(e,t).filter(t=>{let n=U(e,t);return String(n?.attr_type||``).toLowerCase()===`bool`}),Be=(e,t)=>{let n=U(e,t);return!n||n.attr_type!==`list`?`List Attribute`:n.attr_name};const Ve=({systemTheme:t,backgroundUrl:n,cardLayout:r,attributes:i,unitItem:o,onUpdateMetadata:s,controlContent:c})=>{let[l,u]=(0,w.useState)({}),[f,m]=(0,w.useState)({}),h=(0,w.useRef)({}),_=(0,w.useRef)({}),{rows:ee}=(0,w.useMemo)(()=>ie(r),[r]),y=(0,w.useMemo)(()=>{let e=o.metadata?.[a.UNIT_NAME];if(typeof e==`string`&&e.trim())return e;let t=o.text?.plainText;return typeof t==`string`&&t.trim()?t:typeof o.name==`string`&&o.name.trim()?o.name:`Unknown`},[o]),b=e=>`${d.EXTENSIONID}/${e}`,te=e=>{let t=o.metadata?.[b(e)];return t==null?``:typeof t==`string`?t:typeof t==`number`||typeof t==`boolean`?String(t):``},ne=e=>{let t=o.metadata?.[b(e)];if(typeof t==`boolean`)return t;if(typeof t==`number`)return t!==0;if(typeof t==`string`){let e=t.trim().toLowerCase();return e===`true`||e===`1`||e===`yes`||e===`on`}return!1},re=(e,t)=>l[e]??te(t),C=e=>{let t=e?.attr_func;return typeof t==`string`&&t.trim().length>0},Ve=(0,w.useMemo)(()=>{let e={};for(let t of i){let n=te(t.attr_bid).trim();if(!n)continue;let r=Number(n);Number.isFinite(r)&&(e[t.attr_bid]=r)}return e},[i,o.metadata]),G=e=>{let t=e?.attr_func;if(typeof t!=`string`||t.trim().length===0)return null;let n=x(t,{bidValueMap:Ve,onMissingBid:`error`});return!n.valid||!n.notation?(p.warn(`[FORGE] Could not convert attr_func for ${e?.attr_bid||`unknown`}: ${n.error||`Unknown conversion error`}`),null):n.notation},K=async(t,n)=>{try{let r=await e.scene.getMetadata(),i=(await e.party.getPlayers()).find(e=>e.id===o.createdUserId),a=await e.player.getId(),s=await e.player.getColor();await g({notation:t,actionName:n,senderName:y,senderId:o.createdUserId||a||o.id,senderColor:i?.color||s||`#ffffff`},r)}catch(e){p.error(`Failed to send dice roll from CardLayoutRenderer`,t,e),p.log(t)}},q=async e=>{if(!e)return;let t=G(e);t&&await K(t,e.attr_name||e.attr_bid||`Roll`)};(0,w.useEffect)(()=>()=>{Object.values(h.current).forEach(e=>{window.clearTimeout(e)})},[]);let He=e=>!!f[e],J=(e,t)=>{m(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},Ue=e=>{m(t=>{let{[e]:n,...r}=t;return r})},We=(e,t)=>{let n=h.current[e];n&&window.clearTimeout(n),h.current[e]=window.setTimeout(()=>{_.current[e]=!0,J(e,t),delete h.current[e]},500)},Y=e=>{let t=h.current[e];t&&(window.clearTimeout(t),delete h.current[e])},Ge=e=>_.current[e]?(delete _.current[e],!0):!1,Ke=async(e,t)=>{await s({[b(e)]:t})},qe=async(e,t)=>{await s({[b(e)]:t})},Je=e=>{let t=o.metadata?.[b(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``}}):[]},Ye=e=>{let t=o.metadata?.[b(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``,inUse:!!t.inUse}}):[]},Xe=(e,t)=>{p.log(e,t)},X=e=>{e&&(e.style.height=`0px`,e.style.height=`${Math.max(e.scrollHeight,44)}px`)},Ze=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=e[0],r=(e[1]||``).trim();if(!r)continue;let i=x(r,{bidValueMap:Ve,onMissingBid:`error`});!i.valid||!i.notation||t.push({raw:n,notation:i.notation})}return t},Z=async(e,t,n)=>{Xe(`List metadata update`,{listType:n.listType,bid:e,reason:n.reason,entryId:n.entryId,field:n.field,entryCount:t.length,timestamp:Date.now()}),await s({[b(e)]:t})},Qe=e=>e===`dash`||e===`dashed`?(0,T.jsx)(F,{$theme:t}):e===`shadow`?(0,T.jsx)(I,{$theme:t}):e===`ridge`?(0,T.jsx)(he,{$theme:t}):e===`zigzag`?(0,T.jsx)(L,{$theme:t}):e===`pulse`?(0,T.jsx)(R,{$theme:t}):(0,T.jsx)(me,{$theme:t}),$e=e=>{let n=e.type,r=e.styles||{},a=U(i,r.attributeId),o=r.textAlign||`left`,s=r.stretch===!0;if(n===`line-break`)return(0,T.jsx)(O,{$theme:t,$full:!0,children:Qe(r.styleDesign)},e.id);if(n===`line-spacer`)return(0,T.jsx)(pe,{$full:e.fullsize},e.id);if(n===`text`){let n=Pe[r.fontSize||`md`],i=W(a,r.labelMode)||`Title Header`;return(0,T.jsx)(O,{$theme:t,$full:e.fullsize,children:(0,T.jsx)(ce,{$theme:t,$fontSize:n,$weight:700,$stretch:s,$align:o,children:i})},e.id)}if(n===`text-value`){let n=Le[r.fontSize||`md`],i=W(a,r.labelMode),o=!!i,c=r.labelPosition===`right`?`right`:`left`,l=r.textAlign||`center`,d=r.fontWeight===`bold`?700:400,f=r.fontStyle===`italic`?`italic`:`normal`,p=a?.attr_bid,m=C(a),h=`text-value:${e.id}:${p||`none`}`,g=m&&He(h),_=(0,T.jsx)(ue,{$theme:t,$fontSize:n,$align:l,$weight:d,$fontStyle:f,$stretch:s,$isRollable:m,type:`text`,readOnly:m&&!g,value:p?re(h,p):``,onChange:m&&!g?void 0:e=>{if(!p)return;let t=e.target.value;u(e=>({...e,[h]:t}))},onBlur:m&&!g?void 0:async e=>{if(!p)return;let t=e.target.value;await Ke(p,t),u(e=>{let{[h]:t,...n}=e;return n}),m&&Ue(h)},onClick:m?()=>{g||Ge(h)||q(a)}:void 0,onContextMenu:m?e=>{e.preventDefault(),J(h,e.currentTarget)}:void 0,onTouchStart:m?e=>{g||We(h,e.currentTarget)}:void 0,onTouchEnd:m?()=>{Y(h)}:void 0,onTouchCancel:m?()=>{Y(h)}:void 0,onKeyDown:e=>{if(m&&!g&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),q(a);return}(g||!m)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`}),v=o?(0,T.jsx)(N,{$theme:t,$fontSize:n,$stretch:s,$weight:d,$fontStyle:f,children:i}):null;return(0,T.jsx)(j,{$full:e.fullsize,children:(0,T.jsxs)(M,{children:[c===`left`?v:null,_,c===`right`?v:null]})},e.id)}if(n===`text-checkbox`){let n=Fe[r.fontSize||`md`],a=e.fullsize?6:3,o=Math.max(1,Math.min(a,Number(r.checkboxCount||1))),c=[...ze(i,r.bidList)].slice(0,o);for(;c.length<o;)c.push(``);let l=W(U(i,c[0]||r.attributeId),r.labelMode),u=r.inputType===`slider`,d=r.labelPosition===`right`?`right`:`left`,f=r.fontWeight===`bold`?700:400,p=r.fontStyle===`italic`?`italic`:`normal`,m=l?(0,T.jsx)(ke,{$theme:t,$fontSize:n,$stretch:s,$weight:f,$fontStyle:p,children:l}):null;return(0,T.jsx)(O,{$theme:t,$full:e.fullsize,children:(0,T.jsxs)(Oe,{children:[d===`left`?m:null,(0,T.jsx)(Ae,{$fullWidth:!m,children:Array.from({length:o}).map((e,n)=>{let r=c[n]||``,i=r?ne(r):!1;return u?(0,T.jsx)(Me,{type:`button`,$theme:t,$active:i,disabled:!r,onClick:r?()=>{qe(r,!i)}:void 0,children:(0,T.jsx)(Ne,{$theme:t,$active:i})},`slider-${n}`):(0,T.jsx)(je,{type:`checkbox`,disabled:!0,checked:i,readOnly:!0},`checkbox-${n}`)})}),d===`right`?m:null]})},e.id)}if(n===`column-text`){let n=Ie[r.fontSize||`md`],a=Re(i,r.bidList),o=r.fontWeight===`bold`?700:400,c=r.fontStyle===`italic`?`italic`:`normal`;return a.length===0?null:(0,T.jsx)(O,{$theme:t,$full:e.fullsize,children:(0,T.jsx)(de,{children:a.map(e=>{let a=W(U(i,e),r.labelMode||`name`);return a?(0,T.jsx)(fe,{children:(0,T.jsx)(se,{$theme:t,$fontSize:n,$stretch:s,$align:`center`,$weight:o,$fontStyle:c,children:a})},e):null})})},e.id)}if(n===`column-value`){let n=Ie[r.fontSize||`md`],a=Re(i,r.bidList);return a.length===0?null:(0,T.jsx)(O,{$theme:t,$full:e.fullsize,children:(0,T.jsx)(de,{children:a.map(r=>{let a=U(i,r),o=C(a),s=`column-value:${e.id}:${r}`,c=o&&He(s);return(0,T.jsx)(P,{children:(0,T.jsx)(le,{$theme:t,$fontSize:n,$align:`center`,$isRollable:o,readOnly:o&&!c,value:re(s,r),onChange:o&&!c?void 0:e=>{let t=e.target.value;u(e=>({...e,[s]:t}))},onBlur:o&&!c?void 0:async e=>{let t=e.target.value;await Ke(r,t),u(e=>{let{[s]:t,...n}=e;return n}),o&&Ue(s)},onClick:o?()=>{c||Ge(s)||q(a)}:void 0,onContextMenu:o?e=>{e.preventDefault(),J(s,e.currentTarget)}:void 0,onTouchStart:o?e=>{c||We(s,e.currentTarget)}:void 0,onTouchEnd:o?()=>{Y(s)}:void 0,onTouchCancel:o?()=>{Y(s)}:void 0,onKeyDown:e=>{if(o&&!c&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),q(a);return}(c||!o)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`})},r)})})},e.id)}if(n===`action-list`){let n=U(i,r.attributeId||r.bidList?.[0])?.attr_bid,a=Be(i,r.attributeId||r.bidList?.[0]),o=n?Je(n):[];return(0,T.jsx)(O,{$theme:t,$full:e.fullsize,children:(0,T.jsxs)(z,{$theme:t,children:[(0,T.jsxs)(ge,{$theme:t,children:[(0,T.jsx)(B,{$theme:t,children:a}),(0,T.jsx)(_e,{type:`button`,$theme:t,"aria-label":`Add Action`,onClick:async()=>{n&&await Z(n,[...o,{id:crypto.randomUUID(),name:``,description:``}],{listType:`action`,reason:`add`})},children:(0,T.jsx)(S,{size:14})})]}),o.map((r,i)=>(0,T.jsxs)(ve,{children:[(0,T.jsxs)(Te,{children:[(0,T.jsx)(Ee,{children:(0,T.jsx)(Se,{$theme:t,type:`text`,defaultValue:r.name,placeholder:`Action Name`,onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,name:t}:e),{listType:`action`,reason:`blur-save`,entryId:r.id,field:`name`})}})}),(0,T.jsx)(V,{type:`button`,$theme:t,"aria-label":`Delete Action`,onClick:async()=>{n&&await Z(n,o.filter(e=>e.id!==r.id),{listType:`action`,reason:`delete`,entryId:r.id})},children:(0,T.jsx)(v,{size:14})})]}),(()=>{let e=Ze(r.description);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Ce,{$theme:t,defaultValue:r.description,ref:X,placeholder:`Action Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,description:t}:e),{listType:`action`,reason:`blur-save`,entryId:r.id,field:`description`})}}),e.length>0?(0,T.jsx)(H,{children:e.map((e,n)=>(0,T.jsx)(we,{type:`button`,$theme:t,onClick:()=>{K(e.notation,r.name||`Action`)},title:e.notation,children:e.notation},`${r.id}-action-inline-${n}`))}):null]})})()]},r.id||`${e.id}-action-${i}`))]})},e.id)}if(n===`item-list`){let n=U(i,r.attributeId||r.bidList?.[0])?.attr_bid,a=Be(i,r.attributeId||r.bidList?.[0]),o=n?Ye(n):[];return(0,T.jsx)(O,{$theme:t,$full:e.fullsize,children:(0,T.jsxs)(z,{$theme:t,children:[(0,T.jsxs)(ge,{$theme:t,children:[(0,T.jsx)(B,{$theme:t,children:a}),(0,T.jsx)(_e,{type:`button`,$theme:t,"aria-label":`Add Item`,onClick:async()=>{n&&await Z(n,[...o,{id:crypto.randomUUID(),name:``,description:``,inUse:!1}],{listType:`item`,reason:`add`})},children:(0,T.jsx)(S,{size:14})})]}),o.map((r,i)=>(0,T.jsxs)(ve,{children:[(0,T.jsxs)(ye,{children:[(0,T.jsx)(be,{children:(0,T.jsx)(De,{$theme:t,type:`checkbox`,defaultChecked:r.inUse,onBlur:async e=>{if(!n)return;let t=e.target.checked;await Z(n,o.map(e=>e.id===r.id?{...e,inUse:t}:e),{listType:`item`,reason:`toggle-save`,entryId:r.id,field:`inUse`})}})}),(0,T.jsx)(xe,{$theme:t,children:(0,T.jsx)(Se,{$theme:t,type:`text`,defaultValue:r.name,placeholder:`Item Name`,onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,name:t}:e),{listType:`item`,reason:`blur-save`,entryId:r.id,field:`name`})}})}),(0,T.jsx)(V,{type:`button`,$theme:t,"aria-label":`Delete Item`,onClick:async()=>{n&&await Z(n,o.filter(e=>e.id!==r.id),{listType:`item`,reason:`delete`,entryId:r.id})},children:(0,T.jsx)(v,{size:14})})]}),(()=>{let e=Ze(r.description);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Ce,{$theme:t,defaultValue:r.description,ref:X,placeholder:`Item Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,description:t}:e),{listType:`item`,reason:`blur-save`,entryId:r.id,field:`description`})}}),e.length>0?(0,T.jsx)(H,{children:e.map((e,n)=>(0,T.jsx)(we,{type:`button`,$theme:t,onClick:()=>{K(e.notation,r.name||`Item`)},title:e.notation,children:e.notation},`${r.id}-item-inline-${n}`))}):null]})})()]},r.id||`${e.id}-item-${i}`))]})},e.id)}return null};return(0,T.jsx)(ae,{$theme:t,$backgroundUrl:n,children:(0,T.jsxs)(E,{children:[(0,T.jsxs)(D,{children:[(0,T.jsx)(oe,{$theme:t,children:(0,T.jsx)(k,{children:y})}),(0,T.jsx)(A,{$theme:t,children:c||`Control-Reserved`})]}),ee.map(e=>(0,T.jsx)(D,{children:e.items.map(e=>$e(e))},`row-${e.row}`))]})})};var G={CURRENT_THEME:`${d.EXTENSIONID}/CurrentTheme`,CURRENT_CARD:`${d.EXTENSIONID}/CurrentCard`,CURRENT_ATTR:`${d.EXTENSIONID}/CurrentAttr`},K={primary:u.theme_primary,offset:u.theme_offset,background:u.theme_background,border:u.theme_border,background_url:u.background_url},q=l.div`
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
`,He=l.div`
  height: 100%;
  overflow: hidden;
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`,J=l.p`
  margin: 0;
  color: ${e=>e.$theme.primary};
  text-align: center;
`,Ue=l.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`,We=l.select`
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
`,Y=l.button`
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
`,Ge=l.img`
  width: 28px;
  height: 28px;
  display: block;
`,Ke=l.div`
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
`,qe=l.div`
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
`,Je=l.button`
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
`,Ye=l.div`
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
`,Xe=l.div`
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
`,X=l.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Ze=l.div`
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
`,Z=l.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,Qe=l.div`
  color: ${e=>e.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,$e=l.span`
  font-size: 12px;
  line-height: 1;
`,et=l.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,tt=l.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`,nt=l.span`
  margin-left: 6px;
  width: 18px;
  height: 18px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 999px;
  border: 1px solid ${e=>c(e.$theme.border,.85)};
  background: ${e=>c(e.$theme.offset,.35)};
  color: ${e=>e.$theme.primary};
`,rt=l.span`
  color: ${e=>e.$color};
`,it=l.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,at=l.button`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>e.$variant===`import`?c(e.$theme.offset,.45):c(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`,ot=l.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,st=l.input`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`,ct=l.button`
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
`,lt=l.div`
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
`,ut=l.div`
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
`,dt=l(Q)`
  background: ${e=>e.$active?c(e.$theme.offset,.45):c(e.$theme.background,.9)};

  &:disabled {
    background: ${e=>c(e.$theme.background,.9)};
  }
`,$=l.img`
  width: 20px;
  height: 20px;
  display: block;
  filter: ${e=>e.$active?`brightness(0) saturate(100%) invert(23%) sepia(82%) saturate(6574%) hue-rotate(349deg) brightness(96%) contrast(115%)`:`none`};
`,ft=l.textarea`
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
`,pt=l.button`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 8px;
  background: ${e=>e.$variant===`primary`?c(e.$theme.offset,.5):c(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 6px 10px;
  cursor: pointer;
`,mt=l.div`
  margin-top: 8px;
  color: ${e=>c(e.$theme.offset,.95)};
  font-size: 12px;
`,ht=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,gt=l.div`
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
`,_t=l.h3`
  color: ${e=>e.$theme.primary};
  margin: 0 0 15px 0;
  font-size: 18px;
`,vt=l.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
`,yt=()=>{let e=new URLSearchParams(window.location.search).get(`unitid`);return e&&e.split(`,`)[0]?.trim()||null},bt=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},xt=e=>{if(e===!0)return!0;if(typeof e==`string`){let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`}return typeof e==`number`?e===1:!1};C.createRoot(document.getElementById(`root`)).render((0,T.jsx)(w.StrictMode,{children:(0,T.jsx)(f,{children:(0,T.jsx)(()=>{let[t,n]=(0,w.useState)(()=>yt()),[r,i]=(0,w.useState)({metadata:{},items:[]}),[s,c]=(0,w.useState)(null),[l,f]=(0,w.useState)(!1),[h,g]=(0,w.useState)(!1),[v,x]=(0,w.useState)(!1),[S,C]=(0,w.useState)(``),[ie,ae]=(0,w.useState)(``),[E,D]=(0,w.useState)(!1),[O,oe]=(0,w.useState)([]),[k,A]=(0,w.useState)([]),[se,ce]=(0,w.useState)(!1),[le,j]=(0,w.useState)(``),[M,N]=(0,w.useState)(null),ue=e=>{let t=e[o.ENABLE_CONSOLE_LOG];typeof t==`boolean`&&p.setEnabled(t)},de=(0,w.useMemo)(()=>bt(r.metadata[G.CURRENT_CARD])||u.card_layout,[r.metadata]),fe=(0,w.useMemo)(()=>bt(r.metadata[G.CURRENT_ATTR])||u.attributes,[r.metadata]),P=(0,w.useMemo)(()=>{let e=r.metadata[G.CURRENT_THEME];return!e?.primary||!e?.offset||!e?.background||!e?.border?K:e},[r.metadata]);(0,w.useEffect)(()=>{let t=!0;(async()=>{let[n,r,a,o,s]=await Promise.all([e.scene.getMetadata(),e.scene.items.getItems(),e.room.getMetadata(),e.player.getId(),e.player.getRole()]);t&&(ue(n),i({metadata:n,items:r}),c(o),f(String(s||``).toUpperCase()===`GM`),g(!0))})();let n=e.scene.onMetadataChange(e=>{t&&(i(t=>({...t,metadata:e})),ue(e))}),r=e.room.onMetadataChange(e=>{}),a=e.scene.items.onChange(e=>{t&&i(t=>({...t,items:e}))});return()=>{t=!1,n(),r(),a()}},[]);let pe=e=>{let t=e.metadata?.[a.UNIT_NAME];if(typeof t==`string`&&t.trim())return t;let n=e.text?.plainText;return typeof n==`string`&&n.trim()?n:typeof e.name==`string`&&e.name.trim()?e.name:`Unknown`},me=(0,w.useMemo)(()=>r.items.filter(e=>xt(e.metadata?.[a.FABRICATED])).filter(e=>l||e.createdUserId===s).filter(e=>e.id!==t).map(e=>({id:e.id,name:pe(e)})).sort((e,t)=>e.name.localeCompare(t.name)),[r.items,t,l,s]),F=(0,w.useMemo)(()=>t&&r.items.find(e=>e.id===t)||null,[r.items,t]),I=async()=>t&&(await e.scene.items.getItems()).find(e=>e.id===t)||null,he=async t=>{F&&(await e.scene.items.updateItems([F.id],e=>{let n={...e[0].metadata||{}};Object.entries(t).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),e[0].metadata=n}),i(e=>({...e,items:e.items.map(e=>{if(e.id!==F.id)return e;let n={...e.metadata||{}};return Object.entries(t).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),{...e,metadata:n}})})))},L=async t=>{if(!F)return;let n=[a.FABRICATED,a.INITIATIVE,a.ON_LIST];await e.scene.items.updateItems([F.id],e=>{let r=e[0].metadata,i={},a={};for(let[e,t]of Object.entries(r))e.startsWith(`${d.EXTENSIONID}/`)||(i[e]=t),n.includes(e)&&(a[e]=t);e[0].metadata={...i,...t,...a}}),i(e=>({...e,items:e.items.map(e=>{if(e.id!==F.id)return e;let r={},i={};for(let[t,a]of Object.entries(e.metadata||{}))t.startsWith(`${d.EXTENSIONID}/`)||(r[t]=a),n.includes(t)&&(i[t]=a);return{...e,metadata:{...r,...t,...i}}})}))},R=async()=>{oe(await b())},z=e=>{let t=e.trim(),n=t?t[0].toUpperCase():`A`;return`hsl(${Math.max(0,Math.min(25,n.charCodeAt(0)-65))/26*360}, 70%, 65%)`},ge=async e=>{let t=e.trim();if(!t)return[];let{data:n,error:r}=await ee.from(`bs_forge_creatures`).select(`external_id,name,author,favorite,metadata,is_active`).eq(`is_active`,!0).or(`name.ilike.%${t}%,author.ilike.%${t}%`).limit(250);if(r)throw r;return(n??[]).filter(e=>e&&typeof e.name==`string`&&typeof e.author==`string`).map(e=>({id:`remote:${e.external_id}`,name:e.name,author:e.author,favorite:e.favorite===!0,metadata:e.metadata&&typeof e.metadata==`object`&&!Array.isArray(e.metadata)?e.metadata:{},updatedAt:0}))},B=(0,w.useMemo)(()=>{let e=ie.trim().toLowerCase(),t=[...O].sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);if(!e)return t.filter(e=>e.favorite).map(e=>({...e,source:`local`}));let n=t.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),r=new Set(n.map(e=>`${e.name.toLowerCase()}::${e.author.toLowerCase()}`)),i=k.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)).filter(e=>!r.has(`${e.name.toLowerCase()}::${e.author.toLowerCase()}`)).sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);return[...n.map(e=>({...e,source:`local`})),...i.map(e=>({...e,source:`remote`}))]},[O,k,ie]),_e=()=>{p.log(`Tray action clicked: pin`)},ve=()=>{l&&D(e=>!e)},ye=async()=>{if(!l)return;let t=await I();if(!t){await e.notification.show(`No unit selected to save.`,`ERROR`);return}try{let n=(await e.player.getName()).trim(),r=await m(t.metadata,n,E);await R(),await e.notification.show(r===`created`?`Unit saved to Collection.`:`Unit updated in Collection.`)}catch(t){p.log(`Collection save failed`,t),await e.notification.show(`Could not save this unit to Collection.`,`ERROR`)}},be=async()=>{if(!await I()){await e.notification.show(`No unit selected to import into.`,`ERROR`);return}N(null),j(``),ce(!0)},xe=async()=>{let t=await I();if(!t){await e.notification.show(`No unit selected to export.`,`ERROR`);return}try{let n=y(t.metadata),r=n[a.UNIT_NAME],i=typeof r==`string`?r.trim():``;if(!i){await e.notification.show(`Current unit has no valid unit name to export.`,`ERROR`);return}let o={name:i,author:(await e.player.getName()).trim()||`Unknown`,metadata:n};await navigator.clipboard.writeText(JSON.stringify(o,null,2)),await e.notification.show(`Unit data copied to clipboard.`)}catch(t){p.log(`Unit export failed`,t),await e.notification.show(`Could not copy unit data to clipboard.`,`ERROR`)}},V=()=>{ce(!1),N(null),j(``)},Se=e=>{let t=JSON.parse(e);if(!t||typeof t!=`object`||Array.isArray(t))throw Error(`Import data must be a JSON object.`);let n=t,r=n.metadata&&typeof n.metadata==`object`?n.metadata:t;if(!r||typeof r!=`object`||Array.isArray(r))throw Error(`Import data must include a metadata object.`);let i=y(r),o=i[a.UNIT_NAME];if(!(typeof o==`string`&&o.trim()))throw Error(`Imported metadata must include a valid unit name.`);return i},Ce=async()=>{if(!await I()){N(`No unit selected to import into.`);return}let t=le.trim();if(!t){N(`Paste JSON data before importing.`);return}try{await L(Se(t)),D(!1),V(),await e.notification.show(`Unit data imported successfully.`)}catch(e){N(e instanceof Error?e.message:`Import failed.`)}},H=()=>{let t=S.trim();if(ae(t),!t){A([]);return}ge(t).then(e=>{A(e)}).catch(async t=>{p.log(`Supabase collection search failed`,t),A([]),await e.notification.show(`Could not search online collection.`,`ERROR`)})},we=async t=>{if(!F){await e.notification.show(`No unit selected to import into.`,`ERROR`);return}try{await L(t.metadata),D(!1),await e.notification.show(t.source===`remote`?`Imported ${t.name} from online collection.`:`Imported ${t.name}.`)}catch(t){p.log(`Collection record import failed`,t),await e.notification.show(`Could not import collection record.`,`ERROR`)}},Te=async t=>{if(t.source===`local`)try{await _(t.id),await R(),await e.notification.show(`Deleted ${t.name} from Collection.`)}catch(t){p.log(`Collection record delete failed`,t),await e.notification.show(`Could not delete collection record.`,`ERROR`)}};return(0,w.useEffect)(()=>{v&&R().catch(e=>{p.log(`Failed to load collection records`,e)})},[v]),(0,w.useEffect)(()=>{v&&(ae(``),C(``),A([]))},[v]),(0,T.jsxs)(q,{$theme:P,children:[(0,T.jsx)(He,{children:h?t?F?(0,T.jsx)(Ve,{systemTheme:P,backgroundUrl:P.background_url,cardLayout:de,attributes:fe,unitItem:F,onUpdateMetadata:he,controlContent:(0,T.jsxs)(Ue,{children:[(0,T.jsxs)(We,{$theme:P,"aria-label":`Choose Unit`,value:``,onChange:e=>{let t=e.target.value;t&&n(t)},children:[(0,T.jsx)(`option`,{value:``,children:`Choose Unit`}),me.map(e=>(0,T.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,T.jsx)(Y,{type:`button`,$theme:P,"aria-label":`Close Card`,onClick:async()=>{await e.popover.close(d.CARDSID)},children:(0,T.jsx)(Ge,{src:`/close.svg`,alt:``,"aria-hidden":`true`})})]})}):(0,T.jsx)(J,{$theme:P,children:`Unit not found in current scene.`}):(0,T.jsx)(J,{$theme:P,children:`No unit id supplied in URL.`}):(0,T.jsx)(J,{$theme:P,children:`Loading card…`})}),(0,T.jsxs)(Ke,{$theme:P,$open:v,children:[(0,T.jsxs)(lt,{children:[(0,T.jsxs)(ut,{children:[(0,T.jsx)(Q,{type:`button`,$theme:P,"aria-label":`Pin`,onClick:_e,children:(0,T.jsx)($,{src:`/pin.svg`,alt:``,"aria-hidden":`true`})}),(0,T.jsx)(dt,{type:`button`,$theme:P,$active:E,"aria-label":`Favorite`,disabled:!l,onClick:ve,children:(0,T.jsx)($,{$active:E,src:`/favorite.svg`,alt:``,"aria-hidden":`true`})}),(0,T.jsx)(Q,{type:`button`,$theme:P,"aria-label":`CollectionSave`,disabled:!l,onClick:ye,children:(0,T.jsx)($,{src:`/collection.svg`,alt:``,"aria-hidden":`true`})})]}),(0,T.jsxs)(ut,{children:[(0,T.jsx)(Q,{type:`button`,$theme:P,"aria-label":`Import`,onClick:be,children:(0,T.jsx)($,{src:`/import.svg`,alt:``,"aria-hidden":`true`})}),(0,T.jsx)(Q,{type:`button`,$theme:P,"aria-label":`Export`,onClick:xe,children:(0,T.jsx)($,{src:`/export.svg`,alt:``,"aria-hidden":`true`})})]})]}),(0,T.jsx)(qe,{$theme:P,children:(0,T.jsx)(Je,{type:`button`,$theme:P,"aria-label":v?`Close Tray`:`Open Tray`,onClick:()=>{x(e=>!e)},children:(0,T.jsx)(te,{size:22})})}),(0,T.jsx)(Ye,{$theme:P,children:v?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Xe,{$theme:P,children:(0,T.jsx)(X,{children:B.length===0?(0,T.jsx)(J,{$theme:P,children:`No collection records found.`}):B.map(e=>(0,T.jsxs)(Ze,{$theme:P,children:[(0,T.jsxs)(Z,{children:[(0,T.jsxs)(Qe,{$theme:P,children:[e.favorite?(0,T.jsx)($e,{children:`❤`}):null,(0,T.jsx)(et,{children:e.name})]}),(0,T.jsxs)(tt,{children:[(0,T.jsx)(`span`,{children:`→`}),(0,T.jsx)(rt,{$color:z(e.author),children:e.author}),e.source===`remote`?(0,T.jsx)(nt,{$theme:P,title:`Online`,children:(0,T.jsx)(ne,{size:11})}):null]})]}),(0,T.jsxs)(it,{children:[(0,T.jsx)(at,{type:`button`,$theme:P,$variant:`import`,onClick:()=>{we(e)},children:`Import`}),e.source===`local`?(0,T.jsx)(at,{type:`button`,$theme:P,$variant:`delete`,onClick:()=>{Te(e)},children:`X`}):null]})]},e.id))})}),(0,T.jsxs)(ot,{children:[(0,T.jsx)(st,{$theme:P,type:`text`,value:S,placeholder:`Enter query...`,onChange:e=>{C(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),H())}}),(0,T.jsx)(ct,{type:`button`,$theme:P,"aria-label":`Search`,onClick:H,children:(0,T.jsx)(re,{size:16})})]})]}):null})]}),se?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(ht,{onClick:V}),(0,T.jsxs)(gt,{$theme:P,onClick:e=>{e.stopPropagation()},children:[(0,T.jsx)(_t,{$theme:P,children:`Import Unit Data`}),(0,T.jsx)(ft,{$theme:P,value:le,placeholder:`Paste exported unit JSON here`,onChange:e=>{j(e.target.value),M&&N(null)}}),M?(0,T.jsx)(mt,{$theme:P,children:M}):null,(0,T.jsxs)(vt,{children:[(0,T.jsx)(pt,{type:`button`,$theme:P,onClick:V,children:`Cancel`}),(0,T.jsx)(pt,{type:`button`,$theme:P,$variant:`primary`,onClick:Ce,children:`Import`})]})]})]}):null]})},{})})}));