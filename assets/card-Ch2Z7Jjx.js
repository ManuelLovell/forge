import{D as e,O as t,S as n,_ as r,g as i,h as a,j as o,m as s,n as c,t as l,v as u,y as d}from"./defaultgamesystem-BBDYVXoP.js";import{_ as f,c as p,d as m,g as h,i as g,l as _,n as v,o as ee,s as te,t as y,u as b}from"./FormulaParser-nqr3KRm3.js";/* empty css               */var ne=m(`cloud`,[[`path`,{d:`M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`,key:`p7xjir`}]]),re=m(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),x=m(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),S=o(e(),1),C=o(t(),1);const ie=e=>{let t=[...Array.isArray(e)?e:[]].sort((e,t)=>e.row===t.row?e.col-t.col:e.row-t.row),n=[];return t.forEach(e=>{let t=n[n.length-1];if(!t||t.row!==e.row){n.push({row:e.row,items:[e]});return}t.items.push(e)}),{sorted:t,rows:n}};var w=d(),ae=c.div`
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
`,oe=c.div`
  position: relative;
  z-index: 1;
`,T=c.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`,E=c.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`,D=c(E)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  height: calc(2 * 1.1em);
  display: flex;
  align-items: center;
  overflow: hidden;
`,se=c.span`
  line-height: 1.1;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
`,ce=c(E)`
  font-size: 11px;
  font-style: italic;
  color: #ff6b6b;
  display: flex;
  align-items: center;
  justify-content: center;
`,O=c.div`
  color: ${e=>e.$theme.offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight??400};
  font-style: ${e=>e.$fontStyle??`normal`};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`,le=c(O)`
  color: ${e=>e.$theme.primary};
  width: 100%;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ue=c.div`
  color: ${e=>e.$theme.primary};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`,de=c.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?s(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?s(e.$theme.offset,.5):s(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>s(e.$theme.primary,.9)};
  box-sizing: border-box;
  font-size: ${e=>e.$fontSize};
  text-align: ${e=>e.$align||`left`};
  cursor: ${e=>e.$isRollable?`pointer`:`text`};

  &::placeholder {
    color: ${e=>s(e.$theme.primary,.65)};
  }
`,k=c.div`
  width: ${e=>e.$full?`100%`:`170px`};
  height: 40px;
  box-sizing: border-box;
`,A=c.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`,j=c.span`
  color: ${e=>e.$theme.offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
  margin-left: 4px;
  margin-right: 4px;
  align-self: center;
`,fe=c.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?s(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?s(e.$theme.offset,.5):s(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>s(e.$theme.primary,.9)};
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
    color: ${e=>s(e.$theme.primary,.65)};
  }
`,M=c.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,pe=c.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,N=c.div`
  flex: 1;
  min-width: 0;
`,me=c.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.45)};
`,he=c.div`
  flex: 1;
  height: 8px;
  border-radius: 999px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.45)};
`,P=c.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 18px;
`,F=c.div`
  width: 100%;
  height: 5px;
  background: ${e=>`linear-gradient(10deg, ${e.$theme.border||`white`}, rgba(255,255,255,0))`};
`,ge=c.div`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${e=>e.$theme.border||`rgba(255,255,255,0.5)`};
`,I=c.div`
  width: 100%;
  height: 10px;
  background: ${e=>`linear-gradient(to bottom, ${e.$theme.border||`rgba(255,255,255,0.2)`}, transparent)`};
`,L=c.div`
  width: 100%;
  height: 2px;
  background: ${e=>e.$theme.border||`#222`};
  box-shadow: ${e=>`inset 0 1px 0 ${e.$theme.border||`#444`}, 0 1px 0 #000`};
`,_e=c.div`
  width: 100%;
  height: 6px;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6' preserveAspectRatio='none'%3E%3Cpolyline points='0,6 6,0 12,6 18,0 24,6' fill='none' stroke='${encodeURIComponent(e.$theme.border||`#ffffff`)}' stroke-width='1.5'/%3E%3C/svg%3E")`};
`,ve=c.div`
  width: 100%;
  height: 4px;
  background: ${e=>e.$theme.border||`white`};
  animation: flicker 1.2s infinite alternate;

  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 1; }
  }
`,R=c.div`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`,z=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${e=>s(e.$theme.border,.85)};
  padding-bottom: 4px;
  margin-bottom: 4px;
`,ye=c.div`
  color: ${e=>e.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,B=c.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,be=c.div`
  margin-bottom: 8px;
`,xe=c.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`,V=c.div`
  width: 20px;
  display: flex;
  justify-content: center;
`,Se=c.div`
  flex: 1;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`,Ce=c.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,H=c.input`
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
`,we=c.textarea`
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
`,Te=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`,Ee=c.button`
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
`,De=c.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`,Oe=c.div`
  flex: 1;
`,ke=c.input`
  width: 18px;
  height: 18px;
  accent-color: ${e=>e.$theme.offset};
  cursor: pointer;
`,Ae={sm:`14px`,md:`16px`,lg:`18px`},je={sm:`14px`,md:`16px`,lg:`18px`},Me={sm:`14px`,md:`16px`,lg:`18px`},Ne={sm:`14px`,md:`16px`,lg:`18px`},U=(e,t)=>t&&e.find(e=>{let n=e.attr_bid===t,r=String(e.id??``)===String(t);return n||r})||null,W=(e,t)=>e?t===`abbr`?e.attr_abbr:t===`name`||!t||t===`text`?e.attr_name:``:``,Pe=(e,t)=>Array.isArray(t)?t.filter(t=>!!U(e,t)):[],Fe=(e,t)=>{let n=U(e,t);return!n||n.attr_type!==`list`?`List Attribute`:n.attr_name};const Ie=({systemTheme:e,backgroundUrl:t,cardLayout:r,attributes:a,unitItem:o,onUpdateMetadata:s,controlContent:c})=>{let[l,d]=(0,C.useState)({}),[p,m]=(0,C.useState)({}),g=(0,C.useRef)({}),v=(0,C.useRef)({}),{rows:ee}=(0,C.useMemo)(()=>ie(r),[r]),te=(0,C.useMemo)(()=>{let e=o.metadata?.[i.UNIT_NAME];if(typeof e==`string`&&e.trim())return e;let t=o.text?.plainText;return typeof t==`string`&&t.trim()?t:typeof o.name==`string`&&o.name.trim()?o.name:`Unknown`},[o]),b=e=>`${u.EXTENSIONID}/${e}`,ne=e=>{let t=o.metadata?.[b(e)];return t==null?``:typeof t==`string`?t:typeof t==`number`||typeof t==`boolean`?String(t):``},x=(e,t)=>l[e]??ne(t),S=e=>{let t=e?.attr_func;return typeof t==`string`&&t.trim().length>0},Ie=(0,C.useMemo)(()=>{let e={};for(let t of a){let n=ne(t.attr_bid).trim();if(!n)continue;let r=Number(n);Number.isFinite(r)&&(e[t.attr_bid]=r)}return e},[a,o.metadata]),G=e=>{let t=e?.attr_func;if(typeof t!=`string`||t.trim().length===0)return null;let n=y(t,{bidValueMap:Ie,onMissingBid:`error`});return!n.valid||!n.notation?(f.warn(`[FORGE] Could not convert attr_func for ${e?.attr_bid||`unknown`}: ${n.error||`Unknown conversion error`}`),null):n.notation},K=async(e,t)=>{try{let r=await n.scene.getMetadata(),i=(await n.party.getPlayers()).find(e=>e.id===o.createdUserId),a=await n.player.getId(),s=await n.player.getColor();await h({notation:e,actionName:t,senderName:te,senderId:o.createdUserId||a||o.id,senderColor:i?.color||s||`#ffffff`},r)}catch(t){f.error(`Failed to send dice roll from CardLayoutRenderer`,e,t),f.log(e)}},q=async e=>{if(!e)return;let t=G(e);t&&await K(t,e.attr_name||e.attr_bid||`Roll`)};(0,C.useEffect)(()=>()=>{Object.values(g.current).forEach(e=>{window.clearTimeout(e)})},[]);let Le=e=>!!p[e],J=(e,t)=>{m(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},Re=e=>{m(t=>{let{[e]:n,...r}=t;return r})},ze=(e,t)=>{let n=g.current[e];n&&window.clearTimeout(n),g.current[e]=window.setTimeout(()=>{v.current[e]=!0,J(e,t),delete g.current[e]},500)},Y=e=>{let t=g.current[e];t&&(window.clearTimeout(t),delete g.current[e])},Be=e=>v.current[e]?(delete v.current[e],!0):!1,Ve=async(e,t)=>{await s({[b(e)]:t})},He=e=>{let t=o.metadata?.[b(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``}}):[]},Ue=e=>{let t=o.metadata?.[b(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``,inUse:!!t.inUse}}):[]},We=(e,t)=>{f.log(e,t)},X=e=>{e&&(e.style.height=`0px`,e.style.height=`${Math.max(e.scrollHeight,44)}px`)},Ge=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=e[0],r=(e[1]||``).trim();if(!r)continue;let i=y(r,{bidValueMap:Ie,onMissingBid:`error`});!i.valid||!i.notation||t.push({raw:n,notation:i.notation})}return t},Z=async(e,t,n)=>{We(`List metadata update`,{listType:n.listType,bid:e,reason:n.reason,entryId:n.entryId,field:n.field,entryCount:t.length,timestamp:Date.now()}),await s({[b(e)]:t})},Ke=t=>t===`dash`||t===`dashed`?(0,w.jsx)(ge,{$theme:e}):t===`shadow`?(0,w.jsx)(I,{$theme:e}):t===`ridge`?(0,w.jsx)(L,{$theme:e}):t===`zigzag`?(0,w.jsx)(_e,{$theme:e}):t===`pulse`?(0,w.jsx)(ve,{$theme:e}):(0,w.jsx)(F,{$theme:e}),qe=t=>{let n=t.type,r=t.styles||{},i=U(a,r.attributeId),o=r.textAlign||`left`,s=r.stretch===!0;if(n===`line-break`)return(0,w.jsx)(E,{$theme:e,$full:!0,children:Ke(r.styleDesign)},t.id);if(n===`line-spacer`)return(0,w.jsx)(P,{$full:t.fullsize},t.id);if(n===`text`){let n=Ae[r.fontSize||`md`],a=W(i,r.labelMode)||`Title Header`;return(0,w.jsx)(E,{$theme:e,$full:t.fullsize,children:(0,w.jsx)(ue,{$theme:e,$fontSize:n,$weight:700,$stretch:s,$align:o,children:a})},t.id)}if(n===`text-value`){let n=Ne[r.fontSize||`md`],a=W(i,r.labelMode),o=!!a,c=r.labelPosition===`right`?`right`:`left`,l=r.textAlign||`center`,u=r.fontWeight===`bold`?700:400,f=r.fontStyle===`italic`?`italic`:`normal`,p=i?.attr_bid,m=S(i),h=`text-value:${t.id}:${p||`none`}`,g=m&&Le(h),_=(0,w.jsx)(fe,{$theme:e,$fontSize:n,$align:l,$weight:u,$fontStyle:f,$stretch:s,$isRollable:m,type:`text`,readOnly:m&&!g,value:p?x(h,p):``,onChange:m&&!g?void 0:e=>{if(!p)return;let t=e.target.value;d(e=>({...e,[h]:t}))},onBlur:m&&!g?void 0:async e=>{if(!p)return;let t=e.target.value;await Ve(p,t),d(e=>{let{[h]:t,...n}=e;return n}),m&&Re(h)},onClick:m?()=>{g||Be(h)||q(i)}:void 0,onContextMenu:m?e=>{e.preventDefault(),J(h,e.currentTarget)}:void 0,onTouchStart:m?e=>{g||ze(h,e.currentTarget)}:void 0,onTouchEnd:m?()=>{Y(h)}:void 0,onTouchCancel:m?()=>{Y(h)}:void 0,onKeyDown:e=>{if(m&&!g&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),q(i);return}(g||!m)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`}),v=o?(0,w.jsx)(j,{$theme:e,$fontSize:n,$stretch:s,$weight:u,$fontStyle:f,children:a}):null;return(0,w.jsx)(k,{$full:t.fullsize,children:(0,w.jsxs)(A,{children:[c===`left`?v:null,_,c===`right`?v:null]})},t.id)}if(n===`text-checkbox`){let n=je[r.fontSize||`md`],a=Math.max(1,Number(r.checkboxCount||1)),c=W(i,r.labelMode),l=r.inputType===`slider`;return(0,w.jsxs)(E,{$theme:e,$full:t.fullsize,children:[c?(0,w.jsx)(O,{$theme:e,$fontSize:n,$stretch:s,$align:o,children:c}):null,(0,w.jsx)(M,{children:Array.from({length:a}).map((t,n)=>l?(0,w.jsx)(he,{$theme:e},`slider-${n}`):(0,w.jsx)(me,{$theme:e},`checkbox-${n}`))})]},t.id)}if(n===`column-text`){let n=Me[r.fontSize||`md`],i=Pe(a,r.bidList),o=r.fontWeight===`bold`?700:400,c=r.fontStyle===`italic`?`italic`:`normal`;return i.length===0?null:(0,w.jsx)(E,{$theme:e,$full:t.fullsize,children:(0,w.jsx)(M,{children:i.map(t=>{let i=W(U(a,t),r.labelMode||`name`);return i?(0,w.jsx)(pe,{children:(0,w.jsx)(le,{$theme:e,$fontSize:n,$stretch:s,$align:`center`,$weight:o,$fontStyle:c,children:i})},t):null})})},t.id)}if(n===`column-value`){let n=Me[r.fontSize||`md`],i=Pe(a,r.bidList);return i.length===0?null:(0,w.jsx)(E,{$theme:e,$full:t.fullsize,children:(0,w.jsx)(M,{children:i.map(r=>{let i=U(a,r),o=S(i),s=`column-value:${t.id}:${r}`,c=o&&Le(s);return(0,w.jsx)(N,{children:(0,w.jsx)(de,{$theme:e,$fontSize:n,$align:`center`,$isRollable:o,readOnly:o&&!c,value:x(s,r),onChange:o&&!c?void 0:e=>{let t=e.target.value;d(e=>({...e,[s]:t}))},onBlur:o&&!c?void 0:async e=>{let t=e.target.value;await Ve(r,t),d(e=>{let{[s]:t,...n}=e;return n}),o&&Re(s)},onClick:o?()=>{c||Be(s)||q(i)}:void 0,onContextMenu:o?e=>{e.preventDefault(),J(s,e.currentTarget)}:void 0,onTouchStart:o?e=>{c||ze(s,e.currentTarget)}:void 0,onTouchEnd:o?()=>{Y(s)}:void 0,onTouchCancel:o?()=>{Y(s)}:void 0,onKeyDown:e=>{if(o&&!c&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),q(i);return}(c||!o)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`})},r)})})},t.id)}if(n===`action-list`){let n=U(a,r.attributeId||r.bidList?.[0])?.attr_bid,i=Fe(a,r.attributeId||r.bidList?.[0]),o=n?He(n):[];return(0,w.jsx)(E,{$theme:e,$full:t.fullsize,children:(0,w.jsxs)(R,{$theme:e,children:[(0,w.jsxs)(z,{$theme:e,children:[(0,w.jsx)(ye,{$theme:e,children:i}),(0,w.jsx)(B,{type:`button`,$theme:e,"aria-label":`Add Action`,onClick:async()=>{n&&await Z(n,[...o,{id:crypto.randomUUID(),name:``,description:``}],{listType:`action`,reason:`add`})},children:(0,w.jsx)(re,{size:14})})]}),o.map((r,i)=>(0,w.jsxs)(be,{children:[(0,w.jsxs)(De,{children:[(0,w.jsx)(Oe,{children:(0,w.jsx)(H,{$theme:e,type:`text`,defaultValue:r.name,placeholder:`Action Name`,onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,name:t}:e),{listType:`action`,reason:`blur-save`,entryId:r.id,field:`name`})}})}),(0,w.jsx)(Ce,{type:`button`,$theme:e,"aria-label":`Delete Action`,onClick:async()=>{n&&await Z(n,o.filter(e=>e.id!==r.id),{listType:`action`,reason:`delete`,entryId:r.id})},children:(0,w.jsx)(_,{size:14})})]}),(()=>{let t=Ge(r.description);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(we,{$theme:e,defaultValue:r.description,ref:X,placeholder:`Action Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,description:t}:e),{listType:`action`,reason:`blur-save`,entryId:r.id,field:`description`})}}),t.length>0?(0,w.jsx)(Te,{children:t.map((t,n)=>(0,w.jsx)(Ee,{type:`button`,$theme:e,onClick:()=>{K(t.notation,r.name||`Action`)},title:t.notation,children:t.notation},`${r.id}-action-inline-${n}`))}):null]})})()]},r.id||`${t.id}-action-${i}`))]})},t.id)}if(n===`item-list`){let n=U(a,r.attributeId||r.bidList?.[0])?.attr_bid,i=Fe(a,r.attributeId||r.bidList?.[0]),o=n?Ue(n):[];return(0,w.jsx)(E,{$theme:e,$full:t.fullsize,children:(0,w.jsxs)(R,{$theme:e,children:[(0,w.jsxs)(z,{$theme:e,children:[(0,w.jsx)(ye,{$theme:e,children:i}),(0,w.jsx)(B,{type:`button`,$theme:e,"aria-label":`Add Item`,onClick:async()=>{n&&await Z(n,[...o,{id:crypto.randomUUID(),name:``,description:``,inUse:!1}],{listType:`item`,reason:`add`})},children:(0,w.jsx)(re,{size:14})})]}),o.map((r,i)=>(0,w.jsxs)(be,{children:[(0,w.jsxs)(xe,{children:[(0,w.jsx)(V,{children:(0,w.jsx)(ke,{$theme:e,type:`checkbox`,defaultChecked:r.inUse,onBlur:async e=>{if(!n)return;let t=e.target.checked;await Z(n,o.map(e=>e.id===r.id?{...e,inUse:t}:e),{listType:`item`,reason:`toggle-save`,entryId:r.id,field:`inUse`})}})}),(0,w.jsx)(Se,{$theme:e,children:(0,w.jsx)(H,{$theme:e,type:`text`,defaultValue:r.name,placeholder:`Item Name`,onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,name:t}:e),{listType:`item`,reason:`blur-save`,entryId:r.id,field:`name`})}})}),(0,w.jsx)(Ce,{type:`button`,$theme:e,"aria-label":`Delete Item`,onClick:async()=>{n&&await Z(n,o.filter(e=>e.id!==r.id),{listType:`item`,reason:`delete`,entryId:r.id})},children:(0,w.jsx)(_,{size:14})})]}),(()=>{let t=Ge(r.description);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(we,{$theme:e,defaultValue:r.description,ref:X,placeholder:`Item Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!n)return;let t=e.target.value;await Z(n,o.map(e=>e.id===r.id?{...e,description:t}:e),{listType:`item`,reason:`blur-save`,entryId:r.id,field:`description`})}}),t.length>0?(0,w.jsx)(Te,{children:t.map((t,n)=>(0,w.jsx)(Ee,{type:`button`,$theme:e,onClick:()=>{K(t.notation,r.name||`Item`)},title:t.notation,children:t.notation},`${r.id}-item-inline-${n}`))}):null]})})()]},r.id||`${t.id}-item-${i}`))]})},t.id)}return null};return(0,w.jsx)(ae,{$theme:e,$backgroundUrl:t,children:(0,w.jsxs)(oe,{children:[(0,w.jsxs)(T,{children:[(0,w.jsx)(D,{$theme:e,children:(0,w.jsx)(se,{children:te})}),(0,w.jsx)(ce,{$theme:e,children:c||`Control-Reserved`})]}),ee.map(e=>(0,w.jsx)(T,{children:e.items.map(e=>qe(e))},`row-${e.row}`))]})})};var G={CURRENT_THEME:`${u.EXTENSIONID}/CurrentTheme`,CURRENT_CARD:`${u.EXTENSIONID}/CurrentCard`,CURRENT_ATTR:`${u.EXTENSIONID}/CurrentAttr`},K={primary:l.theme_primary,offset:l.theme_offset,background:l.theme_background,border:l.theme_border,background_url:l.background_url},q=c.div`
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
`,Le=c.div`
  height: 100%;
  overflow: hidden;
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`,J=c.p`
  margin: 0;
  color: ${e=>e.$theme.primary};
  text-align: center;
`,Re=c.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`,ze=c.select`
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
`,Y=c.button`
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
`,Be=c.img`
  width: 28px;
  height: 28px;
  display: block;
`,Ve=c.div`
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
`,He=c.div`
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
`,Ue=c.button`
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
`,We=c.div`
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
`,X=c.div`
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
`,Ge=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Z=c.div`
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
`,Ke=c.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,qe=c.div`
  color: ${e=>e.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,Je=c.span`
  font-size: 12px;
  line-height: 1;
`,Ye=c.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Xe=c.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`,Ze=c.span`
  margin-left: 6px;
  width: 18px;
  height: 18px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 999px;
  border: 1px solid ${e=>s(e.$theme.border,.85)};
  background: ${e=>s(e.$theme.offset,.35)};
  color: ${e=>e.$theme.primary};
`,Qe=c.span`
  color: ${e=>e.$color};
`,$e=c.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,et=c.button`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>e.$variant===`import`?s(e.$theme.offset,.45):s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`,tt=c.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,nt=c.input`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`,rt=c.button`
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
`,it=c.div`
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
`,at=c.div`
  display: inline-flex;
  justify-content: space-between;
  width: 40%;
  pointer-events: auto;
`,Q=c.button`
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
`,ot=c(Q)`
  background: ${e=>e.$active?s(e.$theme.offset,.45):s(e.$theme.background,.9)};

  &:disabled {
    background: ${e=>s(e.$theme.background,.9)};
  }
`,$=c.img`
  width: 20px;
  height: 20px;
  display: block;
  filter: ${e=>e.$active?`brightness(0) saturate(100%) invert(23%) sepia(82%) saturate(6574%) hue-rotate(349deg) brightness(96%) contrast(115%)`:`none`};
`,st=c.textarea`
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
`,ct=c.button`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 8px;
  background: ${e=>e.$variant===`primary`?s(e.$theme.offset,.5):s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 6px 10px;
  cursor: pointer;
`,lt=c.div`
  margin-top: 8px;
  color: ${e=>s(e.$theme.offset,.95)};
  font-size: 12px;
`,ut=c.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,dt=c.div`
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
`,ft=c.h3`
  color: ${e=>e.$theme.primary};
  margin: 0 0 15px 0;
  font-size: 18px;
`,pt=c.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
`,mt=()=>{let e=new URLSearchParams(window.location.search).get(`unitid`);return e&&e.split(`,`)[0]?.trim()||null},ht=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},gt=e=>{if(e===!0)return!0;if(typeof e==`string`){let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`}return typeof e==`number`?e===1:!1};S.createRoot(document.getElementById(`root`)).render((0,w.jsx)(C.StrictMode,{children:(0,w.jsx)(()=>{let[e,t]=(0,C.useState)(()=>mt()),[r,o]=(0,C.useState)({metadata:{},items:[]}),[s,c]=(0,C.useState)(null),[d,m]=(0,C.useState)(!1),[h,_]=(0,C.useState)(!1),[y,re]=(0,C.useState)(!1),[S,ie]=(0,C.useState)(``),[ae,oe]=(0,C.useState)(``),[T,E]=(0,C.useState)(!1),[D,se]=(0,C.useState)([]),[ce,O]=(0,C.useState)([]),[le,ue]=(0,C.useState)(!1),[de,k]=(0,C.useState)(``),[A,j]=(0,C.useState)(null),fe=e=>{let t=e[a.ENABLE_CONSOLE_LOG];typeof t==`boolean`&&f.setEnabled(t)},M=(0,C.useMemo)(()=>ht(r.metadata[G.CURRENT_CARD])||l.card_layout,[r.metadata]),pe=(0,C.useMemo)(()=>ht(r.metadata[G.CURRENT_ATTR])||l.attributes,[r.metadata]),N=(0,C.useMemo)(()=>{let e=r.metadata[G.CURRENT_THEME];return!e?.primary||!e?.offset||!e?.background||!e?.border?K:e},[r.metadata]);(0,C.useEffect)(()=>{let e=!0;(async()=>{let[t,r,i,a,s]=await Promise.all([n.scene.getMetadata(),n.scene.items.getItems(),n.room.getMetadata(),n.player.getId(),n.player.getRole()]);e&&(fe(t),o({metadata:t,items:r}),c(a),m(String(s||``).toUpperCase()===`GM`),_(!0))})();let t=n.scene.onMetadataChange(t=>{e&&(o(e=>({...e,metadata:t})),fe(t))}),r=n.room.onMetadataChange(e=>{}),i=n.scene.items.onChange(t=>{e&&o(e=>({...e,items:t}))});return()=>{e=!1,t(),r(),i()}},[]);let me=e=>{let t=e.metadata?.[i.UNIT_NAME];if(typeof t==`string`&&t.trim())return t;let n=e.text?.plainText;return typeof n==`string`&&n.trim()?n:typeof e.name==`string`&&e.name.trim()?e.name:`Unknown`},he=(0,C.useMemo)(()=>r.items.filter(e=>gt(e.metadata?.[i.FABRICATED])).filter(e=>d||e.createdUserId===s).filter(t=>t.id!==e).map(e=>({id:e.id,name:me(e)})).sort((e,t)=>e.name.localeCompare(t.name)),[r.items,e,d,s]),P=(0,C.useMemo)(()=>e&&r.items.find(t=>t.id===e)||null,[r.items,e]),F=async()=>e&&(await n.scene.items.getItems()).find(t=>t.id===e)||null,ge=async e=>{P&&(await n.scene.items.updateItems([P.id],t=>{let n={...t[0].metadata||{}};Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),t[0].metadata=n}),o(t=>({...t,items:t.items.map(t=>{if(t.id!==P.id)return t;let n={...t.metadata||{}};return Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),{...t,metadata:n}})})))},I=async e=>{if(!P)return;let t=[i.FABRICATED,i.INITIATIVE,i.ON_LIST];await n.scene.items.updateItems([P.id],n=>{let r=n[0].metadata,i={},a={};for(let[e,n]of Object.entries(r))e.startsWith(`${u.EXTENSIONID}/`)||(i[e]=n),t.includes(e)&&(a[e]=n);n[0].metadata={...i,...e,...a}}),o(n=>({...n,items:n.items.map(n=>{if(n.id!==P.id)return n;let r={},i={};for(let[e,a]of Object.entries(n.metadata||{}))e.startsWith(`${u.EXTENSIONID}/`)||(r[e]=a),t.includes(e)&&(i[e]=a);return{...n,metadata:{...r,...e,...i}}})}))},L=async()=>{se(await te())},_e=e=>{let t=e.trim(),n=t?t[0].toUpperCase():`A`;return`hsl(${Math.max(0,Math.min(25,n.charCodeAt(0)-65))/26*360}, 70%, 65%)`},ve=async e=>{let t=e.trim();if(!t)return[];let{data:n,error:r}=await v.from(`bs_forge_creatures`).select(`external_id,name,author,favorite,metadata,is_active`).eq(`is_active`,!0).or(`name.ilike.%${t}%,author.ilike.%${t}%`).limit(250);if(r)throw r;return(n??[]).filter(e=>e&&typeof e.name==`string`&&typeof e.author==`string`).map(e=>({id:`remote:${e.external_id}`,name:e.name,author:e.author,favorite:e.favorite===!0,metadata:e.metadata&&typeof e.metadata==`object`&&!Array.isArray(e.metadata)?e.metadata:{},updatedAt:0}))},R=(0,C.useMemo)(()=>{let e=ae.trim().toLowerCase(),t=[...D].sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);if(!e)return t.filter(e=>e.favorite).map(e=>({...e,source:`local`}));let n=t.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),r=new Set(n.map(e=>`${e.name.toLowerCase()}::${e.author.toLowerCase()}`)),i=ce.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)).filter(e=>!r.has(`${e.name.toLowerCase()}::${e.author.toLowerCase()}`)).sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);return[...n.map(e=>({...e,source:`local`})),...i.map(e=>({...e,source:`remote`}))]},[D,ce,ae]),z=()=>{f.log(`Tray action clicked: pin`)},ye=()=>{d&&E(e=>!e)},B=async()=>{if(!d)return;let e=await F();if(!e){await n.notification.show(`No unit selected to save.`,`ERROR`);return}try{let t=(await n.player.getName()).trim(),r=await p(e.metadata,t,T);await L(),await n.notification.show(r===`created`?`Unit saved to Collection.`:`Unit updated in Collection.`)}catch(e){f.log(`Collection save failed`,e),await n.notification.show(`Could not save this unit to Collection.`,`ERROR`)}},be=async()=>{if(!await F()){await n.notification.show(`No unit selected to import into.`,`ERROR`);return}j(null),k(``),ue(!0)},xe=async()=>{let e=await F();if(!e){await n.notification.show(`No unit selected to export.`,`ERROR`);return}try{let t=ee(e.metadata),r=t[i.UNIT_NAME],a=typeof r==`string`?r.trim():``;if(!a){await n.notification.show(`Current unit has no valid unit name to export.`,`ERROR`);return}let o={name:a,author:(await n.player.getName()).trim()||`Unknown`,metadata:t};await navigator.clipboard.writeText(JSON.stringify(o,null,2)),await n.notification.show(`Unit data copied to clipboard.`)}catch(e){f.log(`Unit export failed`,e),await n.notification.show(`Could not copy unit data to clipboard.`,`ERROR`)}},V=()=>{ue(!1),j(null),k(``)},Se=e=>{let t=JSON.parse(e);if(!t||typeof t!=`object`||Array.isArray(t))throw Error(`Import data must be a JSON object.`);let n=t,r=n.metadata&&typeof n.metadata==`object`?n.metadata:t;if(!r||typeof r!=`object`||Array.isArray(r))throw Error(`Import data must include a metadata object.`);let a=ee(r),o=a[i.UNIT_NAME];if(!(typeof o==`string`&&o.trim()))throw Error(`Imported metadata must include a valid unit name.`);return a},Ce=async()=>{if(!await F()){j(`No unit selected to import into.`);return}let e=de.trim();if(!e){j(`Paste JSON data before importing.`);return}try{await I(Se(e)),E(!1),V(),await n.notification.show(`Unit data imported successfully.`)}catch(e){j(e instanceof Error?e.message:`Import failed.`)}},H=()=>{let e=S.trim();if(oe(e),!e){O([]);return}ve(e).then(e=>{O(e)}).catch(async e=>{f.log(`Supabase collection search failed`,e),O([]),await n.notification.show(`Could not search online collection.`,`ERROR`)})},we=async e=>{if(!P){await n.notification.show(`No unit selected to import into.`,`ERROR`);return}try{await I(e.metadata),E(!1),await n.notification.show(e.source===`remote`?`Imported ${e.name} from online collection.`:`Imported ${e.name}.`)}catch(e){f.log(`Collection record import failed`,e),await n.notification.show(`Could not import collection record.`,`ERROR`)}},Te=async e=>{if(e.source===`local`)try{await g(e.id),await L(),await n.notification.show(`Deleted ${e.name} from Collection.`)}catch(e){f.log(`Collection record delete failed`,e),await n.notification.show(`Could not delete collection record.`,`ERROR`)}};return(0,C.useEffect)(()=>{y&&L().catch(e=>{f.log(`Failed to load collection records`,e)})},[y]),(0,C.useEffect)(()=>{y&&(oe(``),ie(``),O([]))},[y]),(0,w.jsxs)(q,{$theme:N,children:[(0,w.jsx)(Le,{children:h?e?P?(0,w.jsx)(Ie,{systemTheme:N,backgroundUrl:N.background_url,cardLayout:M,attributes:pe,unitItem:P,onUpdateMetadata:ge,controlContent:(0,w.jsxs)(Re,{children:[(0,w.jsxs)(ze,{$theme:N,"aria-label":`Choose Unit`,value:``,onChange:e=>{let n=e.target.value;n&&t(n)},children:[(0,w.jsx)(`option`,{value:``,children:`Choose Unit`}),he.map(e=>(0,w.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,w.jsx)(Y,{type:`button`,$theme:N,"aria-label":`Close Card`,onClick:async()=>{await n.popover.close(u.CARDSID)},children:(0,w.jsx)(Be,{src:`/close.svg`,alt:``,"aria-hidden":`true`})})]})}):(0,w.jsx)(J,{$theme:N,children:`Unit not found in current scene.`}):(0,w.jsx)(J,{$theme:N,children:`No unit id supplied in URL.`}):(0,w.jsx)(J,{$theme:N,children:`Loading card…`})}),(0,w.jsxs)(Ve,{$theme:N,$open:y,children:[(0,w.jsxs)(it,{children:[(0,w.jsxs)(at,{children:[(0,w.jsx)(Q,{type:`button`,$theme:N,"aria-label":`Pin`,onClick:z,children:(0,w.jsx)($,{src:`/pin.svg`,alt:``,"aria-hidden":`true`})}),(0,w.jsx)(ot,{type:`button`,$theme:N,$active:T,"aria-label":`Favorite`,disabled:!d,onClick:ye,children:(0,w.jsx)($,{$active:T,src:`/favorite.svg`,alt:``,"aria-hidden":`true`})}),(0,w.jsx)(Q,{type:`button`,$theme:N,"aria-label":`CollectionSave`,disabled:!d,onClick:B,children:(0,w.jsx)($,{src:`/collection.svg`,alt:``,"aria-hidden":`true`})})]}),(0,w.jsxs)(at,{children:[(0,w.jsx)(Q,{type:`button`,$theme:N,"aria-label":`Import`,onClick:be,children:(0,w.jsx)($,{src:`/import.svg`,alt:``,"aria-hidden":`true`})}),(0,w.jsx)(Q,{type:`button`,$theme:N,"aria-label":`Export`,onClick:xe,children:(0,w.jsx)($,{src:`/export.svg`,alt:``,"aria-hidden":`true`})})]})]}),(0,w.jsx)(He,{$theme:N,children:(0,w.jsx)(Ue,{type:`button`,$theme:N,"aria-label":y?`Close Tray`:`Open Tray`,onClick:()=>{re(e=>!e)},children:(0,w.jsx)(b,{size:22})})}),(0,w.jsx)(We,{$theme:N,children:y?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(X,{$theme:N,children:(0,w.jsx)(Ge,{children:R.length===0?(0,w.jsx)(J,{$theme:N,children:`No collection records found.`}):R.map(e=>(0,w.jsxs)(Z,{$theme:N,children:[(0,w.jsxs)(Ke,{children:[(0,w.jsxs)(qe,{$theme:N,children:[e.favorite?(0,w.jsx)(Je,{children:`❤`}):null,(0,w.jsx)(Ye,{children:e.name})]}),(0,w.jsxs)(Xe,{children:[(0,w.jsx)(`span`,{children:`→`}),(0,w.jsx)(Qe,{$color:_e(e.author),children:e.author}),e.source===`remote`?(0,w.jsx)(Ze,{$theme:N,title:`Online`,children:(0,w.jsx)(ne,{size:11})}):null]})]}),(0,w.jsxs)($e,{children:[(0,w.jsx)(et,{type:`button`,$theme:N,$variant:`import`,onClick:()=>{we(e)},children:`Import`}),e.source===`local`?(0,w.jsx)(et,{type:`button`,$theme:N,$variant:`delete`,onClick:()=>{Te(e)},children:`X`}):null]})]},e.id))})}),(0,w.jsxs)(tt,{children:[(0,w.jsx)(nt,{$theme:N,type:`text`,value:S,placeholder:`Enter query...`,onChange:e=>{ie(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),H())}}),(0,w.jsx)(rt,{type:`button`,$theme:N,"aria-label":`Search`,onClick:H,children:(0,w.jsx)(x,{size:16})})]})]}):null})]}),le?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(ut,{onClick:V}),(0,w.jsxs)(dt,{$theme:N,onClick:e=>{e.stopPropagation()},children:[(0,w.jsx)(ft,{$theme:N,children:`Import Unit Data`}),(0,w.jsx)(st,{$theme:N,value:de,placeholder:`Paste exported unit JSON here`,onChange:e=>{k(e.target.value),A&&j(null)}}),A?(0,w.jsx)(lt,{$theme:N,children:A}):null,(0,w.jsxs)(pt,{children:[(0,w.jsx)(ct,{type:`button`,$theme:N,onClick:V,children:`Cancel`}),(0,w.jsx)(ct,{type:`button`,$theme:N,$variant:`primary`,onClick:Ce,children:`Import`})]})]})]}):null]})},{})}));