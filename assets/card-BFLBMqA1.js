import{C as e,F as t,N as n,O as r,R as i,S as a,T as o,_ as s,b as c,g as l,o as u,s as d,t as f,w as p,y as m}from"./defaultgamesystem-BOilZxMK.js";import{C as h,D as g,E as ee,F as _,L as v,O as y,S as te,T as ne,a as re,f as ie,h as b,i as x,k as S,o as ae,s as C,t as oe,w,x as se,y as ce}from"./unitCollectionRemote-D9v7HCNC.js";/* empty css               */var T=S(`book-marked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),E=S(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),le=S(`cloudy`,[[`path`,{d:`M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z`,key:`44yre2`}],[`path`,{d:`M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61`,key:`leugyv`}]]),ue=S(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),de=S(`hard-drive`,[[`line`,{x1:`22`,x2:`2`,y1:`12`,y2:`12`,key:`1y58io`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}],[`line`,{x1:`6`,x2:`6.01`,y1:`16`,y2:`16`,key:`sgf278`}],[`line`,{x1:`10`,x2:`10.01`,y1:`16`,y2:`16`,key:`1l4acy`}]]),D=S(`pin`,[[`path`,{d:`M12 17v5`,key:`bb1du9`}],[`path`,{d:`M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z`,key:`1nkz8b`}]]),fe=S(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),O=S(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),pe=S(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),k=i(n(),1),A=i(t(),1);const me=e=>{let t=[...Array.isArray(e)?e:[]].sort((e,t)=>e.row===t.row?e.col-t.col:e.row-t.row),n=[];return t.forEach(e=>{let t=n[n.length-1];if(!t||t.row!==e.row){n.push({row:e.row,items:[e]});return}t.items.push(e)}),{sorted:t,rows:n}};var j=o(),M=e=>`
    0 1px 1px ${s(e.background,.95)},
    0 0 2px ${s(e.background,.85)}
  `,he=d.div`
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
`,N=d.div`
  position: relative;
  z-index: 1;
`,ge=d.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`,P=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`,_e=d(P)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  height: calc(2 * 1.1em);
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100% !important;
`,ve=d.input`
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
`,ye=d(d.div`
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
`,F=d.div`
  color: ${e=>e.$theme.primary};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`,I=d.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?s(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?s(e.$theme.offset,.5):s(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>s(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?M(e.$theme):`none`};
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
`,be=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  height: 40px;
  box-sizing: border-box;
`,xe=d.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`,L=d.span`
  color: ${e=>e.$theme.offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
  margin-left: 4px;
  margin-right: 4px;
  align-self: center;
`,R=d.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?s(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?s(e.$theme.offset,.5):s(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>s(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?M(e.$theme):`none`};
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
`,Se=d.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,Ce=d.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,we=d.div`
  flex: 1;
  min-width: 0;
`,z=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 18px;
`,Te=d.div`
  width: 100%;
  height: 5px;
  background: ${e=>`linear-gradient(10deg, ${e.$theme.border||`white`}, rgba(255,255,255,0))`};
`,B=d.div`
  width: 100%;
  height: ${e=>`${e.$heightPx}px`};
  border-radius: 8px;
  border: 1px solid ${e=>s(e.$theme.border,.9)};
  background: ${e=>s(e.$theme.background,.42)};
  overflow: hidden;
  box-sizing: border-box;
`,Ee=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,V=d.div`
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
`,De=d.div`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${e=>e.$theme.border||`rgba(255,255,255,0.5)`};
`,Oe=d.div`
  width: 100%;
  height: 10px;
  background: ${e=>`linear-gradient(to bottom, ${e.$theme.border||`rgba(255,255,255,0.2)`}, transparent)`};
`,ke=d.div`
  width: 100%;
  height: 2px;
  background: ${e=>e.$theme.border||`#222`};
  box-shadow: ${e=>`inset 0 1px 0 ${e.$theme.border||`#444`}, 0 1px 0 #000`};
`,Ae=d.div`
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
`,U=d.div`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`,W=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${e=>s(e.$theme.border,.85)};
  padding-bottom: 4px;
  margin-bottom: 4px;
`,je=d.div`
  color: ${e=>e.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,Me=d.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,G=d.div`
  margin-bottom: 8px;
`,K=d.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`,Ne=d.div`
  width: 20px;
  display: flex;
  justify-content: center;
`,Pe=d.div`
  flex: 1;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`,Fe=d.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ie=d.input`
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
`,Le=d.textarea`
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
`,Re=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`,ze=d.button`
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
`,Be=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ve=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 9999;
`,He=d.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(420px, calc(100vw - 24px));
  border-radius: 10px;
  border: 2px solid ${e=>s(e.$theme.border,.9)};
  background: ${e=>s(e.$theme.background,.95)};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.45);
  padding: 14px;
  box-sizing: border-box;
  z-index: 10000;
`,Ue=d.h3`
  margin: 0 0 12px;
  color: ${e=>s(e.$theme.primary,.98)};
  font-size: 16px;
`,We=d.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
`,Ge=d.span`
  color: ${e=>s(e.$theme.offset,.95)};
  font-size: 13px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
`,Ke=d.button`
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${e=>s(e.$theme.border,.9)};
  background: ${e=>s(e.$theme.background,.82)};
  color: ${e=>s(e.$theme.primary,.95)};
  padding: 8px 10px;
  box-sizing: border-box;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${e=>s(e.$theme.offset,.38)};
  }
`,qe=d.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`,Je=d.div`
  flex: 1;
`,Ye=d.input`
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
`,Xe=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 8px;
`,Ze=d.span`
  color: ${e=>e.$theme.offset||f.theme_offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
`,Qe=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: space-evenly;
  width: ${e=>e.$fullWidth?`100%`:`auto`};
`,$e=d.input`
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
`,et=d.button`
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
`,tt=d.div`
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
`,nt={sm:`14px`,md:`16px`,lg:`18px`},rt={sm:`14px`,md:`16px`,lg:`18px`},it={sm:`14px`,md:`16px`,lg:`18px`},at={sm:`14px`,md:`16px`,lg:`18px`},ot=40,st=(e,t,n,r)=>{let i=typeof e==`number`?e:typeof e==`string`?Number(e):NaN;if(!Number.isFinite(i))return r;let a=Math.trunc(i);return Math.max(t,Math.min(n,a))},ct=(e,t=`center`)=>{if(typeof e!=`string`)return t;let n=e.trim().toLowerCase();return n===`left`||n===`center`||n===`right`?n:t},q=(e,t)=>t&&e.find(e=>{let n=e.attr_bid===t,r=String(e.id??``)===String(t);return n||r})||null,lt=(e,t)=>e?t===`abbr`?e.attr_abbr:t===`name`||!t||t===`text`?e.attr_name:``:``,ut=(e,t)=>Array.isArray(t)?t.filter(t=>!!q(e,t)):[],dt=(e,t)=>ut(e,t).filter(t=>{let n=q(e,t);return String(n?.attr_type||``).toLowerCase()===`bool`}),ft=(e,t)=>{let n=q(e,t);return!n||n.attr_type!==`list`?`List Attribute`:n.attr_name};const J=({systemTheme:t,backgroundUrl:n,cardLayout:i,attributes:a,unitItem:o,onUpdateMetadata:s})=>{let[l,u]=(0,A.useState)({}),[d,f]=(0,A.useState)({}),[p,m]=(0,A.useState)(null),h=(0,A.useRef)({}),g=(0,A.useRef)({}),{rows:ee}=(0,A.useMemo)(()=>me(i),[i]),y=(0,A.useMemo)(()=>{let e=o.metadata?.[c.UNIT_NAME];if(typeof e==`string`&&e.trim())return e;let t=o.text?.plainText;return typeof t==`string`&&t.trim()?t:typeof o.name==`string`&&o.name.trim()?o.name:`Unknown`},[o]),[te,re]=(0,A.useState)(y);(0,A.useEffect)(()=>{re(y)},[y]);let ie=async()=>{let e=te.trim(),t=y.trim()||`Unknown`,n=e||t;re(n),n!==y&&await s({[c.UNIT_NAME]:n})},b=t=>`${e.EXTENSIONID}/${t}`,x=e=>{let t=o.metadata?.[b(e)];return t==null?``:typeof t==`string`?t:typeof t==`number`||typeof t==`boolean`?String(t):``},S=e=>{let t=o.metadata?.[b(e)];if(typeof t==`boolean`)return t;if(typeof t==`number`)return t!==0;if(typeof t==`string`){let e=t.trim().toLowerCase();return e===`true`||e===`1`||e===`yes`||e===`on`}return!1},ae=(e,t)=>l[e]??x(t),oe=e=>{let t=e?.attr_func;return typeof t==`string`&&t.trim().length>0},w=(0,A.useMemo)(()=>{let e={};for(let t of a){let n=x(t.attr_bid).trim();if(!n)continue;let r=Number(n);Number.isFinite(r)&&(e[t.attr_bid]=r)}return e},[a,o.metadata]),se=(0,A.useMemo)(()=>{let e={};for(let t of a){let n=x(t.attr_bid).trim();if(!n)continue;let r=Number(n);Number.isFinite(r)&&(t.attr_name&&(e[t.attr_name]=r),t.attr_abbr&&(e[t.attr_abbr]=r))}return e},[a,o.metadata]),ce=e=>{let t=e?.attr_func;if(typeof t!=`string`||t.trim().length===0)return null;let n=C(t,{bidValueMap:w,nameValueMap:se,onMissingBid:`error`});return!n.valid||!n.notation?(v.warn(`[FORGE] Could not convert attr_func for ${e?.attr_bid||`unknown`}: ${n.error||`Unknown conversion error`}`),null):n.notation},T=async(e,t)=>{try{let n=await r.scene.getMetadata(),i=(await r.party.getPlayers()).find(e=>e.id===o.createdUserId),a=await r.player.getId(),s=await r.player.getColor();await _({notation:e,actionName:t,senderName:y,senderId:o.createdUserId||a||o.id,senderColor:i?.color||s||`#ffffff`},n)}catch(t){v.error(`Failed to send dice roll from CardLayoutRenderer`,e,t),v.log(e)}},E=async e=>{if(!e)return;let t=ce(e);t&&await T(t,e.attr_name||e.attr_bid||`Roll`)},le=/(\d+)d(\d+)([kd][hl]\d+|!)?/gi,ue=(e,t)=>{let n=Array.from(e.matchAll(le));if(n.length!==1)return null;let r=n[0],i=r[0]||``,a=r[1]||``,o=r[2]||``,s=r[3]||``,c=r.index;if(!i||!a||!o||typeof c!=`number`)return null;let l=Number(a);if(!Number.isFinite(l)||l!==1||s)return null;let u=`2d${o}${t===`advantage`?`kh1`:`kl1`}`;return`${e.slice(0,c)}${u}${e.slice(c+i.length)}`};(0,A.useEffect)(()=>()=>{Object.values(h.current).forEach(e=>{window.clearTimeout(e)})},[]);let de=e=>!!d[e],D=(e,t,n,r)=>{t&&m({draftKey:e,attribute:t,input:n,isRollable:r})},O=()=>{m(null)};(0,A.useEffect)(()=>{if(!p)return;let e=e=>{e.key===`Escape`&&m(null)};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[p]);let pe=(e,t)=>{f(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},k=e=>{f(t=>{let{[e]:n,...r}=t;return r})},M=(e,t)=>{let n=h.current[e];n&&window.clearTimeout(n),h.current[e]=window.setTimeout(()=>{g.current[e]=!0,pe(e,t),delete h.current[e]},500)},J=e=>{let t=h.current[e];t&&(window.clearTimeout(t),delete h.current[e])},pt=e=>g.current[e]?(delete g.current[e],!0):!1,mt=async(e,t)=>{await s({[b(e)]:t})},ht=async(e,t)=>{await s({[b(e)]:t})},gt=e=>{let t=o.metadata?.[b(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``}}):[]},Y=e=>{let t=o.metadata?.[b(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``,inUse:!!t.inUse}}):[]},_t=(e,t)=>{v.log(e,t)},X=e=>{e&&(e.style.height=`0px`,e.style.height=`${Math.max(e.scrollHeight,44)}px`)},vt=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=e[0],r=(e[1]||``).trim();if(!r)continue;let i=C(r,{bidValueMap:w,nameValueMap:se,onMissingBid:`error`});!i.valid||!i.notation||t.push({raw:n,notation:i.notation})}return t},Z=async(e,t,n)=>{_t(`List metadata update`,{listType:n.listType,bid:e,reason:n.reason,entryId:n.entryId,field:n.field,entryCount:t.length,timestamp:Date.now()}),await s({[b(e)]:t})},yt=e=>e===`dash`||e===`dashed`?(0,j.jsx)(De,{$theme:t}):e===`shadow`?(0,j.jsx)(Oe,{$theme:t}):e===`ridge`?(0,j.jsx)(ke,{$theme:t}):e===`zigzag`?(0,j.jsx)(Ae,{$theme:t}):e===`pulse`?(0,j.jsx)(H,{$theme:t}):(0,j.jsx)(Te,{$theme:t}),bt=e=>{let n=e.type,r=e.styles||{},i=q(a,r.attributeId),o=ct(r.textAlign??r.align,`center`),s=r.stretch===!0;if(n===`line-break`)return(0,j.jsx)(P,{$theme:t,$full:!0,children:yt(r.styleDesign)},e.id);if(n===`line-spacer`)return(0,j.jsx)(z,{$full:e.fullsize},e.id);if(n===`image`){let n=typeof r.imageUrl==`string`?r.imageUrl.trim():``,i=st(r.imageCols,1,2,e.fullsize?2:1),a=st(r.imageRows,1,6,1);return(0,j.jsx)(P,{$theme:t,$full:i===2,children:(0,j.jsx)(B,{$theme:t,$heightPx:ot*a,children:n?(0,j.jsx)(Ee,{src:n,alt:`Card component`,loading:`lazy`}):(0,j.jsx)(V,{$theme:t,children:`No image selected`})})},e.id)}if(n===`text`){let n=nt[r.fontSize||`md`],a=lt(i,r.labelMode)||`Title Header`,c=`text:${e.id}:${i?.attr_bid||`none`}`;return(0,j.jsx)(P,{$theme:t,$full:e.fullsize,onContextMenu:i?e=>{e.preventDefault(),D(c,i,null,!1)}:void 0,children:(0,j.jsx)(F,{$theme:t,$fontSize:n,$weight:700,$stretch:s,$align:o,children:a})},e.id)}if(n===`text-value`){let n=at[r.fontSize||`md`],a=lt(i,r.labelMode),o=!!a,c=r.labelPosition===`right`?`right`:`left`,l=ct(r.textAlign??r.align,`center`),d=r.fontWeight===`bold`?700:400,f=r.fontStyle===`italic`?`italic`:`normal`,p=i?.attr_bid,m=oe(i),h=`text-value:${e.id}:${p||`none`}`,g=m&&de(h),ee=(0,j.jsx)(R,{$theme:t,$fontSize:n,$align:l,$weight:d,$fontStyle:f,$stretch:s,$isRollable:m,type:`text`,readOnly:m&&!g,value:p?ae(h,p):``,onChange:m&&!g?void 0:e=>{if(!p)return;let t=e.target.value;u(e=>({...e,[h]:t}))},onBlur:m&&!g?void 0:async e=>{if(!p)return;let t=e.target.value;await mt(p,t),u(e=>{let{[h]:t,...n}=e;return n}),m&&k(h)},onClick:m?()=>{g||pt(h)||E(i)}:void 0,onContextMenu:i?e=>{e.preventDefault(),D(h,i,e.currentTarget,m)}:void 0,onTouchStart:m?e=>{g||M(h,e.currentTarget)}:void 0,onTouchEnd:m?()=>{J(h)}:void 0,onTouchCancel:m?()=>{J(h)}:void 0,onKeyDown:e=>{if(m&&!g&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),E(i);return}(g||!m)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`}),_=o?(0,j.jsx)(L,{$theme:t,$fontSize:n,$stretch:s,$weight:d,$fontStyle:f,children:a}):null;return(0,j.jsx)(be,{$full:e.fullsize,children:(0,j.jsxs)(xe,{children:[c===`left`?_:null,ee,c===`right`?_:null]})},e.id)}if(n===`text-checkbox`){let n=rt[r.fontSize||`md`],i=e.fullsize?6:3,o=Math.max(1,Math.min(i,Number(r.checkboxCount||1))),c=[...dt(a,r.bidList)].slice(0,o);for(;c.length<o;)c.push(``);let l=lt(q(a,c[0]||r.attributeId),r.labelMode),u=r.inputType===`slider`,d=r.labelPosition===`right`?`right`:`left`,f=r.fontWeight===`bold`?700:400,p=r.fontStyle===`italic`?`italic`:`normal`,m=l?(0,j.jsx)(Ze,{$theme:t,$fontSize:n,$stretch:s,$weight:f,$fontStyle:p,children:l}):null;return(0,j.jsx)(P,{$theme:t,$full:e.fullsize,children:(0,j.jsxs)(Xe,{children:[d===`left`?m:null,(0,j.jsx)(Qe,{$fullWidth:!m,children:Array.from({length:o}).map((n,r)=>{let i=c[r]||``,o=i?S(i):!1,s=i?q(a,i):null,l=`text-checkbox:${e.id}:${i||`index-${r}`}`;return u?(0,j.jsx)(et,{type:`button`,$theme:t,$active:o,disabled:!i,onClick:i?()=>{ht(i,!o)}:void 0,onContextMenu:s?e=>{e.preventDefault(),D(l,s,null,!1)}:void 0,children:(0,j.jsx)(tt,{$theme:t,$active:o})},`slider-${r}`):(0,j.jsx)($e,{$theme:t,type:`checkbox`,disabled:!i,checked:o,onChange:i?e=>{ht(i,e.target.checked)}:void 0,onContextMenu:s?e=>{e.preventDefault(),D(l,s,null,!1)}:void 0},`checkbox-${r}`)})}),d===`right`?m:null]})},e.id)}if(n===`column-text`){let n=it[r.fontSize||`md`],i=ut(a,r.bidList),o=r.fontWeight===`bold`?700:400,c=r.fontStyle===`italic`?`italic`:`normal`;return i.length===0?null:(0,j.jsx)(P,{$theme:t,$full:e.fullsize,children:(0,j.jsx)(Se,{children:i.map(i=>{let l=q(a,i),u=lt(l,r.labelMode||`name`);return u?(0,j.jsx)(Ce,{children:(0,j.jsx)(ye,{$theme:t,$fontSize:n,$stretch:s,$align:`center`,$weight:o,$fontStyle:c,onContextMenu:l?t=>{t.preventDefault(),D(`column-text:${e.id}:${i}`,l,null,!1)}:void 0,children:u})},i):null})})},e.id)}if(n===`column-value`){let n=it[r.fontSize||`md`],i=ut(a,r.bidList);return i.length===0?null:(0,j.jsx)(P,{$theme:t,$full:e.fullsize,children:(0,j.jsx)(Se,{children:i.map(r=>{let i=q(a,r),o=oe(i),s=`column-value:${e.id}:${r}`,c=o&&de(s);return(0,j.jsx)(we,{children:(0,j.jsx)(I,{$theme:t,$fontSize:n,$align:`center`,$isRollable:o,readOnly:o&&!c,value:ae(s,r),onChange:o&&!c?void 0:e=>{let t=e.target.value;u(e=>({...e,[s]:t}))},onBlur:o&&!c?void 0:async e=>{let t=e.target.value;await mt(r,t),u(e=>{let{[s]:t,...n}=e;return n}),o&&k(s)},onClick:o?()=>{c||pt(s)||E(i)}:void 0,onContextMenu:i?e=>{e.preventDefault(),D(s,i,e.currentTarget,o)}:void 0,onTouchStart:o?e=>{c||M(s,e.currentTarget)}:void 0,onTouchEnd:o?()=>{J(s)}:void 0,onTouchCancel:o?()=>{J(s)}:void 0,onKeyDown:e=>{if(o&&!c&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),E(i);return}(c||!o)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`})},r)})})},e.id)}if(n===`action-list`){let n=q(a,r.attributeId||r.bidList?.[0]),i=n?.attr_bid,o=ft(a,r.attributeId||r.bidList?.[0]),s=i?gt(i):[];return(0,j.jsx)(P,{$theme:t,$full:e.fullsize,children:(0,j.jsxs)(U,{$theme:t,children:[(0,j.jsxs)(W,{$theme:t,children:[(0,j.jsx)(je,{$theme:t,onContextMenu:n?t=>{t.preventDefault(),D(`action-list:${e.id}:${i||`none`}`,n,null,!1)}:void 0,children:o}),(0,j.jsx)(Me,{type:`button`,$theme:t,"aria-label":`Add Action`,onClick:async()=>{i&&await Z(i,[...s,{id:crypto.randomUUID(),name:``,description:``}],{listType:`action`,reason:`add`})},children:(0,j.jsx)(fe,{size:14})})]}),s.map((n,r)=>(0,j.jsxs)(G,{children:[(0,j.jsxs)(qe,{children:[(0,j.jsx)(Je,{children:(0,j.jsx)(Ie,{$theme:t,type:`text`,defaultValue:n.name,placeholder:`Action Name`,onBlur:async e=>{if(!i)return;let t=e.target.value;await Z(i,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,j.jsx)(Fe,{type:`button`,$theme:t,"aria-label":`Delete Action`,onClick:async()=>{i&&await Z(i,s.filter(e=>e.id!==n.id),{listType:`action`,reason:`delete`,entryId:n.id})},children:(0,j.jsx)(ne,{size:14})})]}),(()=>{let e=vt(n.description);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Le,{$theme:t,defaultValue:n.description,ref:X,placeholder:`Action Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!i)return;let t=e.target.value;await Z(i,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`description`})}}),e.length>0?(0,j.jsx)(Re,{children:e.map((e,r)=>(0,j.jsx)(ze,{type:`button`,$theme:t,onClick:()=>{T(e.notation,n.name||`Action`)},title:e.notation,children:e.notation},`${n.id}-action-inline-${r}`))}):null]})})()]},n.id||`${e.id}-action-${r}`))]})},e.id)}if(n===`item-list`){let n=q(a,r.attributeId||r.bidList?.[0]),i=n?.attr_bid,o=ft(a,r.attributeId||r.bidList?.[0]),s=i?Y(i):[];return(0,j.jsx)(P,{$theme:t,$full:e.fullsize,children:(0,j.jsxs)(U,{$theme:t,children:[(0,j.jsxs)(W,{$theme:t,children:[(0,j.jsx)(je,{$theme:t,onContextMenu:n?t=>{t.preventDefault(),D(`item-list:${e.id}:${i||`none`}`,n,null,!1)}:void 0,children:o}),(0,j.jsx)(Me,{type:`button`,$theme:t,"aria-label":`Add Item`,onClick:async()=>{i&&await Z(i,[...s,{id:crypto.randomUUID(),name:``,description:``,inUse:!1}],{listType:`item`,reason:`add`})},children:(0,j.jsx)(fe,{size:14})})]}),s.map((n,r)=>(0,j.jsxs)(G,{children:[(0,j.jsxs)(K,{children:[(0,j.jsx)(Ne,{children:(0,j.jsx)(Ye,{$theme:t,type:`checkbox`,defaultChecked:n.inUse,onBlur:async e=>{if(!i)return;let t=e.target.checked;await Z(i,s.map(e=>e.id===n.id?{...e,inUse:t}:e),{listType:`item`,reason:`toggle-save`,entryId:n.id,field:`inUse`})}})}),(0,j.jsx)(Pe,{$theme:t,children:(0,j.jsx)(Ie,{$theme:t,type:`text`,defaultValue:n.name,placeholder:`Item Name`,onBlur:async e=>{if(!i)return;let t=e.target.value;await Z(i,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,j.jsx)(Fe,{type:`button`,$theme:t,"aria-label":`Delete Item`,onClick:async()=>{i&&await Z(i,s.filter(e=>e.id!==n.id),{listType:`item`,reason:`delete`,entryId:n.id})},children:(0,j.jsx)(ne,{size:14})})]}),(()=>{let e=vt(n.description);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Le,{$theme:t,defaultValue:n.description,ref:X,placeholder:`Item Description`,onInput:e=>{X(e.currentTarget)},onBlur:async e=>{if(!i)return;let t=e.target.value;await Z(i,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`description`})}}),e.length>0?(0,j.jsx)(Re,{children:e.map((e,r)=>(0,j.jsx)(ze,{type:`button`,$theme:t,onClick:()=>{T(e.notation,n.name||`Item`)},title:e.notation,children:e.notation},`${n.id}-item-inline-${r}`))}):null]})})()]},n.id||`${e.id}-item-${r}`))]})},e.id)}return null};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(he,{$theme:t,$backgroundUrl:n,children:(0,j.jsxs)(N,{children:[(0,j.jsx)(ge,{children:(0,j.jsx)(_e,{$theme:t,children:(0,j.jsx)(ve,{$theme:t,value:te,onChange:e=>{re(e.target.value)},onBlur:()=>{ie()},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},"aria-label":`Unit Name`})})}),ee.map(e=>(0,j.jsx)(ge,{children:e.items.map(e=>bt(e))},`row-${e.row}`))]})}),p?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Ve,{onClick:O}),(0,j.jsxs)(He,{$theme:t,onClick:e=>e.stopPropagation(),children:[(0,j.jsxs)(We,{children:[(0,j.jsx)(Ue,{$theme:t,children:p.attribute.attr_name||`Attribute`}),(0,j.jsxs)(Ge,{$theme:t,children:[`[`,p.attribute.attr_bid,`]`]})]}),(0,j.jsxs)(Be,{children:[p.isRollable?(0,j.jsx)(Ke,{type:`button`,$theme:t,onClick:()=>{O(),pe(p.draftKey,p.input)},children:`Edit value`}):null,(()=>{if(!p.isRollable)return null;let e=ce(p.attribute);if(!e)return null;let n=ue(e,`advantage`),r=ue(e,`disadvantage`);return!n||!r?null:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Ke,{type:`button`,$theme:t,onClick:()=>{O(),T(n,`${p.attribute.attr_name||p.attribute.attr_bid||`Roll`} (Advantage)`)},children:`Roll with Advantage`}),(0,j.jsx)(Ke,{type:`button`,$theme:t,onClick:()=>{O(),T(r,`${p.attribute.attr_name||p.attribute.attr_bid||`Roll`} (Disadvantage)`)},children:`Roll with Disadvantage`})]})})()]})]})]}):null]})};var pt={SNAPSHOT_PUBLIC_ID:`${e.EXTENSIONID}/SnapshotPublicId`},mt={primary:f.theme_primary,offset:f.theme_offset,background:f.theme_background,border:f.theme_border,background_url:f.background_url},ht=d.div`
  height: 100vh;
  width: 100%;
  background-color: #00000081;
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
`,gt=d.div`
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
`,_t=d.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: min(calc(100% - 16px), 350px);
  z-index: 10;
`,X=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`,vt=d.select`
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
`,Z=d.button`
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
`,yt=d.img`
  width: 28px;
  height: 28px;
  display: block;
`,bt=d.div`
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
`,xt=d.div`
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
`,St=d.button`
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
`,Ct=d.div`
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
`,wt=d.div`
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
`,Tt=d.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Et=d.div`
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
`,Dt=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,Ot=d.div`
  color: ${e=>e.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,kt=d.span`
  font-size: 12px;
  line-height: 1;
`,At=d.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,jt=d.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`,Mt=d.span`
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
`,Nt=d.span`
  color: ${e=>e.$color};
`,Pt=d.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,Ft=d.button`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>e.$variant===`import`?s(e.$theme.offset,.45):s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`,It=d.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Lt=d.input`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`,Rt=d.button`
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
`,zt=d.div`
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
`,Bt=d.div`
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
  color: ${e=>e.$theme.primary};
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
`,Vt=d(Q)`
  background: ${e=>e.$active?s(e.$theme.offset,.45):s(e.$theme.background,.9)};

  &:disabled {
    background: ${e=>s(e.$theme.background,.9)};
  }
`,Ht=d.textarea`
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
`,$=d.button`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 8px;
  background: ${e=>e.$variant===`primary`?s(e.$theme.offset,.5):s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 6px 10px;
  cursor: pointer;
`,Ut=d($)`
  margin-right: auto;
`,Wt=d.div`
  margin-top: 8px;
  color: ${e=>s(e.$theme.offset,.95)};
  font-size: 12px;
`,Gt=d.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${e=>s(e.$theme.primary,.92)};
  font-size: 12px;
  line-height: 1.45;
`,Kt=d.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.$theme.primary};
`,qt=d.ul`
  margin: 0;
  padding-left: 16px;
`,Jt=d.code`
  display: block;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid ${e=>s(e.$theme.border,.7)};
  background: ${e=>s(e.$theme.background,.82)};
  color: ${e=>e.$theme.primary};
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
  white-space: pre-wrap;
`,Yt=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,Xt=d.div`
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
`,Zt=d.h3`
  color: ${e=>e.$theme.primary};
  margin: 0 0 15px 0;
  font-size: 18px;
`,Qt=d.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
`,$t=()=>{let e=new URLSearchParams(window.location.search).get(`unitid`);return e&&e.split(`,`)[0]?.trim()||null},en=()=>{let e=new URLSearchParams(window.location.search).get(`pinned`);if(!e)return!1;let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`},tn=`POP_${e.CARDSID}`,nn=(e,t)=>{let n=new URLSearchParams;return n.set(`unitid`,e),t&&n.set(`pinned`,`true`),`/pages/forgecard.html?${n.toString()}`},rn=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},an=e=>{if(e===!0)return!0;if(typeof e==`string`){let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`}return typeof e==`number`?e===1:!1};k.createRoot(document.getElementById(`root`)).render((0,j.jsx)(A.StrictMode,{children:(0,j.jsx)(p,{children:(0,j.jsx)(()=>{let[t,n]=(0,A.useState)(()=>$t()),i=(0,A.useMemo)(()=>en(),[]),[a,o]=(0,A.useState)({metadata:{},items:[]}),[s,d]=(0,A.useState)(null),[p,_]=(0,A.useState)(null),[ne,S]=(0,A.useState)(null),[C,fe]=(0,A.useState)(null),[k,me]=(0,A.useState)(!1),[M,he]=(0,A.useState)(!1),[N,ge]=(0,A.useState)(!1),[P,_e]=(0,A.useState)(``),[ve,ye]=(0,A.useState)(``),[F,I]=(0,A.useState)(!1),[be,xe]=(0,A.useState)([]),[L,R]=(0,A.useState)([]),[Se,Ce]=(0,A.useState)(!1),[we,z]=(0,A.useState)(!1),[Te,B]=(0,A.useState)(``),[Ee,V]=(0,A.useState)(null),[De,Oe]=(0,A.useState)(!1),ke=e=>{let t=e[m.ENABLE_CONSOLE_LOG];typeof t==`boolean`&&v.setEnabled(t)},Ae=(0,A.useMemo)(()=>p||f.card_layout,[p]),H=(0,A.useMemo)(()=>ne||f.attributes,[ne]),U=(0,A.useMemo)(()=>s||mt,[s]),W=(0,A.useMemo)(()=>l(U.primary,U.offset,U.background,U.border,U.background_url),[U]);(0,A.useEffect)(()=>{let e=!1;return(async()=>{try{await ie()}catch(e){v.log(`Auth hydration failed in card iframe`,e)}finally{e||Oe(!0)}})(),()=>{e=!0}},[]),(0,A.useEffect)(()=>{let e=!0,t=async t=>{let n=t[pt.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(d(null),_(null),S(null));return}let{data:r,error:i}=await u.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(i){e&&(d(null),_(null),S(null));return}let a=Array.isArray(r)?r[0]:r;if(!a||typeof a!=`object`){e&&(d(null),_(null),S(null));return}let o=a,s=rn(o.card_layout),c=rn(o.attributes);if(typeof o.theme_primary!=`string`||typeof o.theme_offset!=`string`||typeof o.theme_background!=`string`||typeof o.theme_border!=`string`||!Array.isArray(s)||!Array.isArray(c)){e&&(d(null),_(null),S(null));return}e&&(d({primary:o.theme_primary,offset:o.theme_offset,background:o.theme_background,border:o.theme_border,background_url:typeof o.background_url==`string`?o.background_url:``}),_(s),S(c))};(async()=>{let[n,i,a,s,c]=await Promise.all([r.scene.getMetadata(),r.scene.items.getItems(),r.room.getMetadata(),r.player.getId(),r.player.getRole()]);e&&(ke(n),o({metadata:n,items:i}),await t(a),fe(s),me(String(c||``).toUpperCase()===`GM`),he(!0))})();let n=r.scene.onMetadataChange(t=>{e&&(o(e=>({...e,metadata:t})),ke(t))}),i=r.room.onMetadataChange(n=>{e&&t(n)}),a=r.scene.items.onChange(t=>{e&&o(e=>({...e,items:t}))});return()=>{e=!1,n(),i(),a()}},[]);let je=e=>{let t=e.metadata?.[c.UNIT_NAME];if(typeof t==`string`&&t.trim())return t;let n=e.text?.plainText;return typeof n==`string`&&n.trim()?n:typeof e.name==`string`&&e.name.trim()?e.name:`Unknown`},Me=(0,A.useMemo)(()=>a.items.filter(e=>an(e.metadata?.[c.FABRICATED])).filter(e=>k||e.createdUserId===C).filter(e=>e.id!==t).map(e=>({id:e.id,name:je(e)})).sort((e,t)=>e.name.localeCompare(t.name)),[a.items,t,k,C]),G=(0,A.useMemo)(()=>t&&a.items.find(e=>e.id===t)||null,[a.items,t]),K=async()=>t&&(await r.scene.items.getItems()).find(e=>e.id===t)||null,Ne=async e=>{G&&(await r.scene.items.updateItems([G.id],t=>{let n={...t[0].metadata||{}};Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),t[0].metadata=n}),o(t=>({...t,items:t.items.map(t=>{if(t.id!==G.id)return t;let n={...t.metadata||{}};return Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),{...t,metadata:n}})})))},Pe=async t=>{if(!G)return;let n=[c.FABRICATED,c.INITIATIVE,c.ON_LIST,c.IN_PARTY];await r.scene.items.updateItems([G.id],r=>{let i=r[0].metadata,a={},o={};for(let[t,r]of Object.entries(i))t.startsWith(`${e.EXTENSIONID}/`)||(a[t]=r),n.includes(t)&&(o[t]=r);r[0].metadata={...a,...t,...o}}),o(r=>({...r,items:r.items.map(r=>{if(r.id!==G.id)return r;let i={},a={};for(let[t,o]of Object.entries(r.metadata||{}))t.startsWith(`${e.EXTENSIONID}/`)||(i[t]=o),n.includes(t)&&(a[t]=o);return{...r,metadata:{...i,...t,...a}}})}))},Fe=async()=>{xe(await te())},Ie=e=>{let t=e.trim(),n=t?t[0].toUpperCase():`A`;return`hsl(${Math.max(0,Math.min(25,n.charCodeAt(0)-65))/26*360}, 70%, 65%)`},Le=async e=>{let[t,n]=await Promise.all([re(e),b()?x(e):Promise.resolve([])]);return[...n.map(e=>({...e,source:`remote-user`})),...t.map(e=>({...e,source:`remote-shared`}))]},Re=(0,A.useMemo)(()=>{let e=ve.trim().toLowerCase(),t={local:0,"remote-user":1,"remote-shared":2},n=(e,n)=>t[e.source]===t[n.source]?e.favorite===n.favorite?e.name.localeCompare(n.name):e.favorite?-1:1:t[e.source]-t[n.source],r=[...be].sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);if(!e)return r.filter(e=>e.favorite).map(e=>({...e,source:`local`}));let i=r.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),a=L.filter(e=>e.source===`remote-user`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),o=L.filter(e=>e.source===`remote-shared`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e));return[...i.map(e=>({...e,source:`local`})),...a,...o].sort(n)},[be,L,ve]),ze=async()=>{if(!t){await r.notification.show(`No unit selected to pin.`,`ERROR`);return}let n=await r.viewport.getWidth(),a=await r.viewport.getHeight(),o=a>800?700:a-100;if(!i){await r.popover.open({id:tn,url:nn(t,!0),height:400,width:350,anchorPosition:{top:50,left:n-70},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},transformOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},hidePaper:!0,disableClickAway:!0}),await r.popover.close(e.CARDSID);return}await r.popover.open({id:e.CARDSID,url:nn(t,!1),height:o,width:350,anchorPosition:{left:n/2,top:a/2},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`CENTER`},transformOrigin:{vertical:`CENTER`,horizontal:`CENTER`},hidePaper:!0,disableClickAway:!0}),await r.popover.close(tn)},Be=()=>{k&&I(e=>!e)},Ve=async()=>{if(!k)return;let e=await K();if(!e){await r.notification.show(`No unit selected to save.`,`ERROR`);return}De||(await ie(),Oe(!0));try{let t=(await r.player.getName()).trim(),n=b()?await ae(e.metadata,t,F):await h(e.metadata,t,F);await Fe();let i=b()?`online Collection`:`Collection`;await r.notification.show(n===`created`?`Unit saved to ${i}.`:`Unit updated in ${i}.`)}catch(e){v.log(`Collection save failed`,e),await r.notification.show(`Could not save this unit to Collection.`,`ERROR`)}},He=async()=>{if(!await K()){await r.notification.show(`No unit selected to import into.`,`ERROR`);return}V(null),B(``),Ce(!0)},Ue=async()=>{let e=await K();if(!e){await r.notification.show(`No unit selected to export.`,`ERROR`);return}try{let t=se(e.metadata),n=t[c.UNIT_NAME],i=typeof n==`string`?n.trim():``;if(!i){await r.notification.show(`Current unit has no valid unit name to export.`,`ERROR`);return}let a={name:i,author:(await r.player.getName()).trim()||`Unknown`,metadata:t};await navigator.clipboard.writeText(JSON.stringify(a,null,2)),await r.notification.show(`Unit data copied to clipboard.`)}catch(e){v.log(`Unit export failed`,e),await r.notification.show(`Could not copy unit data to clipboard.`,`ERROR`)}},We=()=>{Ce(!1),V(null),B(``)},Ge=e=>{let t=JSON.parse(e);if(!t||typeof t!=`object`||Array.isArray(t))throw Error(`Import data must be a JSON object.`);let n=t,r=n.metadata&&typeof n.metadata==`object`?n.metadata:t;if(!r||typeof r!=`object`||Array.isArray(r))throw Error(`Import data must include a metadata object.`);let i=se(r),a=i[c.UNIT_NAME];if(!(typeof a==`string`&&a.trim()))throw Error(`Imported metadata must include a valid unit name.`);return i},Ke=async()=>{if(!await K()){V(`No unit selected to import into.`);return}let e=Te.trim();if(!e){V(`Paste JSON data before importing.`);return}try{await Pe(Ge(e)),I(!1),We(),await r.notification.show(`Unit data imported successfully.`)}catch(e){V(e instanceof Error?e.message:`Import failed.`)}},qe=(e,t)=>{let n=(e||``).trim().toLowerCase();return n===`numb`?0:n===`bool`?!1:n===`list`?[{id:`example-list-001`,name:`Example List Entry`,description:`Describe the effect here. Dice chips can be embedded like [1d20+${t?.firstNumericBid?`@${t.firstNumericBid}`:`@BID`}]`}]:``},Je=()=>{let t=H.find(e=>e.attr_type===`numb`)?.attr_bid,n=H.find(e=>e.attr_type===`list`)||null,r=H.map(t=>({bid:t.attr_bid,name:t.attr_name,type:t.attr_type,metadataKey:`${e.EXTENSIONID}/${t.attr_bid}`})),i={[c.UNIT_NAME]:`Example Unit Name`};for(let n of H)i[`${e.EXTENSIONID}/${n.attr_bid}`]=qe(n.attr_type,{firstNumericBid:t});let a={id:`example-list-001`,name:`Example Action Name`,description:`Example description with chips like [1d20+${t?`@${t}`:`@BID`}] and [2d6+3].`},o={id:`example-item-001`,name:`Example Item Name`,description:`Item details go here.`,inUse:!1},s=JSON.stringify(r,null,2),l=JSON.stringify(i,null,2),u=JSON.stringify(a,null,2),d=JSON.stringify(o,null,2),f=n?`${e.EXTENSIONID}/${n.attr_bid}`:`${e.EXTENSIONID}/<LIST_BID>`;return[`You are generating Forge unit import JSON metadata for this game system.`,``,`Requirements:`,`1. Output valid JSON only (no markdown, no comments).`,`2. Output the metadata object directly (key/value pairs), not prose.`,`3. Use provided metadata keys exactly as listed.`,`4. Include a valid unit name using the unit-name metadata key.`,`5. Match value types exactly: numb -> number, bool -> boolean, list -> array of objects, text -> string.`,`6. Do not add keys outside this extension mapping unless explicitly asked.`,``,`Extension ID: ${e.EXTENSIONID}`,`Unit Name Metadata Key: ${c.UNIT_NAME}`,``,`Attribute Dictionary (required mapping):`,s,``,`List Entry Structure Examples:`,`Standard/action-style list entry object:`,u,``,`Item-style list entry object (optional inUse flag):`,d,``,`If a metadata key is list-type (for example ${f}), its value should be an array of objects in one of the above shapes.`,``,`Output JSON in this metadata shape:`,l,``,`Now generate a [CREATURE/UNIT YOU WANT] metadata JSON object in that exact structure.`].join(`
`)},Ye=async()=>{try{let e=Je();await navigator.clipboard.writeText(e),await r.notification.show(`AI template copied to clipboard.`)}catch(e){v.log(`AI template copy failed`,e),await r.notification.show(`Could not copy AI template to clipboard.`,`ERROR`)}},Xe=()=>{let e=P.trim();if(ye(e),!e){R([]);return}(async()=>{De||(await ie(),Oe(!0)),R(await Le(e))})().catch(async e=>{v.log(`Supabase collection search failed`,e),R([]),await r.notification.show(`Could not search online collection.`,`ERROR`)})},Ze=async e=>{if(!G){await r.notification.show(`No unit selected to import into.`,`ERROR`);return}try{await Pe(e.metadata),I(!1),await r.notification.show(e.source===`local`?`Imported ${e.name}.`:`Imported ${e.name} from online collection.`)}catch(e){v.log(`Collection record import failed`,e),await r.notification.show(`Could not import collection record.`,`ERROR`)}},Qe=async e=>{try{if(e.source===`remote-user`)await oe(e.id),R(t=>t.filter(t=>!(t.source===`remote-user`&&t.id===e.id)));else if(e.source===`local`)await ce(e.id),xe(t=>t.filter(t=>t.id!==e.id));else return;await r.notification.show(`Deleted ${e.name} from Collection.`)}catch(e){v.log(`Collection record delete failed`,e),await r.notification.show(`Could not delete collection record.`,`ERROR`)}};return(0,A.useEffect)(()=>{N&&Fe().catch(e=>{v.log(`Failed to load collection records`,e)})},[N]),(0,A.useEffect)(()=>{N&&(ye(``),_e(``),R([]))},[N]),(0,j.jsxs)(ht,{$theme:U,children:[(0,j.jsxs)(gt,{children:[(0,j.jsx)(_t,{children:(0,j.jsxs)(X,{children:[(0,j.jsxs)(vt,{$theme:U,"aria-label":`Choose Unit`,value:``,onChange:e=>{let t=e.target.value;t&&n(t)},children:[(0,j.jsx)(`option`,{value:``,children:`Choose Unit`}),Me.map(e=>(0,j.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,j.jsx)(Z,{type:`button`,$theme:U,"aria-label":`Close Card`,onClick:async()=>{await r.popover.close(i?tn:e.CARDSID)},children:(0,j.jsx)(yt,{src:`/close.svg`,alt:``,"aria-hidden":`true`})})]})}),M?t?G?(0,j.jsx)(J,{systemTheme:U,backgroundUrl:U.background_url,cardLayout:Ae,attributes:H,unitItem:G,onUpdateMetadata:Ne}):(0,j.jsx)(Y,{$theme:U,children:`Unit not found in current scene.`}):(0,j.jsx)(Y,{$theme:U,children:`No unit id supplied in URL.`}):(0,j.jsx)(Y,{$theme:U,children:`Loading card…`})]}),(0,j.jsxs)(bt,{$theme:U,$open:N,children:[(0,j.jsxs)(zt,{children:[(0,j.jsxs)(Bt,{children:[(0,j.jsx)(Q,{type:`button`,$theme:U,"aria-label":`Pin`,onClick:()=>{ze()},children:(0,j.jsx)(w,{theme:W,text:`Pin/Unpin card popover`,children:(0,j.jsx)(D,{size:16})})}),(0,j.jsx)(Vt,{type:`button`,$theme:U,$active:F,"aria-label":`Favorite`,disabled:!k,onClick:Be,children:(0,j.jsx)(w,{theme:W,text:`Mark next save as favorite`,children:(0,j.jsx)(g,{size:16,fill:F?`currentColor`:`none`})})}),(0,j.jsx)(Q,{type:`button`,$theme:U,"aria-label":`CollectionSave`,disabled:!k,onClick:Ve,children:(0,j.jsx)(w,{theme:W,text:`Save current unit to Collection`,children:(0,j.jsx)(T,{size:16})})})]}),(0,j.jsxs)(Bt,{children:[(0,j.jsx)(Q,{type:`button`,$theme:U,"aria-label":`Import`,onClick:He,children:(0,j.jsx)(w,{theme:W,text:`Import unit data from JSON`,children:(0,j.jsx)(ue,{size:16})})}),(0,j.jsx)(Q,{type:`button`,$theme:U,"aria-label":`Export`,onClick:Ue,children:(0,j.jsx)(w,{theme:W,text:`Export current unit data to clipboard`,children:(0,j.jsx)(ee,{size:16})})}),(0,j.jsx)(Q,{type:`button`,$theme:U,"aria-label":`Card Help`,onClick:()=>{z(!0)},children:(0,j.jsx)(w,{theme:W,text:`Help with BIDs and dice notation`,children:(0,j.jsx)(E,{size:16})})})]})]}),(0,j.jsx)(xt,{$theme:U,children:(0,j.jsx)(w,{theme:W,text:N?`Close collection tray`:`Open collection tray`,children:(0,j.jsx)(St,{type:`button`,$theme:U,"aria-label":N?`Close Tray`:`Open Tray`,onClick:()=>{ge(e=>!e)},children:(0,j.jsx)(y,{size:22})})})}),(0,j.jsx)(Ct,{$theme:U,children:N?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(wt,{$theme:U,children:(0,j.jsx)(Tt,{children:Re.length===0?(0,j.jsx)(Y,{$theme:U,children:`No collection records found.`}):Re.map(e=>(0,j.jsxs)(Et,{$theme:U,children:[(0,j.jsxs)(Dt,{children:[(0,j.jsxs)(Ot,{$theme:U,children:[e.favorite?(0,j.jsx)(kt,{children:`❤`}):null,(0,j.jsx)(At,{children:e.name})]}),(0,j.jsxs)(jt,{children:[(0,j.jsx)(`span`,{children:`→`}),(0,j.jsx)(Nt,{$color:Ie(e.author),children:e.author}),(0,j.jsxs)(Mt,{$theme:U,title:e.source===`local`?`Local`:e.source===`remote-user`?`My Cloud`:`Shared`,children:[e.source===`local`?(0,j.jsx)(de,{size:11}):null,e.source===`remote-user`?(0,j.jsx)(le,{size:11}):null,e.source===`remote-shared`?(0,j.jsx)(pe,{size:11}):null]})]})]}),(0,j.jsxs)(Pt,{children:[(0,j.jsx)(Ft,{type:`button`,$theme:U,$variant:`import`,onClick:()=>{Ze(e)},children:`Import`}),e.source===`remote-shared`?null:(0,j.jsx)(Ft,{type:`button`,$theme:U,$variant:`delete`,onClick:()=>{Qe(e)},children:`X`})]})]},`${e.source}:${e.id}`))})}),(0,j.jsxs)(It,{children:[(0,j.jsx)(Lt,{$theme:U,type:`text`,value:P,placeholder:`Enter query...`,onChange:e=>{_e(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Xe())}}),(0,j.jsx)(Rt,{type:`button`,$theme:U,"aria-label":`Search`,onClick:Xe,children:(0,j.jsx)(O,{size:16})})]})]}):null})]}),Se?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Yt,{onClick:We}),(0,j.jsxs)(Xt,{$theme:U,onClick:e=>{e.stopPropagation()},children:[(0,j.jsx)(Zt,{$theme:U,children:`Import Unit Data`}),(0,j.jsx)(Ht,{$theme:U,value:Te,placeholder:`Paste exported unit JSON here`,onChange:e=>{B(e.target.value),Ee&&V(null)}}),Ee?(0,j.jsx)(Wt,{$theme:U,children:Ee}):null,(0,j.jsxs)(Qt,{children:[(0,j.jsx)(Ut,{type:`button`,$theme:U,onClick:()=>{Ye()},children:`AI Template`}),(0,j.jsx)($,{type:`button`,$theme:U,onClick:We,children:`Cancel`}),(0,j.jsx)($,{type:`button`,$theme:U,$variant:`primary`,onClick:Ke,children:`Import`})]})]})]}):null,we?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Yt,{onClick:()=>{z(!1)}}),(0,j.jsxs)(Xt,{$theme:U,onClick:e=>{e.stopPropagation()},children:[(0,j.jsx)(Zt,{$theme:U,children:`Card Help`}),(0,j.jsxs)(Gt,{$theme:U,children:[(0,j.jsx)(Kt,{$theme:U,children:`Rollable Values`}),(0,j.jsxs)(qt,{children:[(0,j.jsx)(`li`,{children:`Right-click a value on the card to open the field menu.`}),(0,j.jsxs)(`li`,{children:[`The menu shows the field name and BID in brackets, like `,(0,j.jsx)(`strong`,{children:`[Z017]`}),`.`]}),(0,j.jsxs)(`li`,{children:[`For rollable fields, use that menu to choose `,(0,j.jsx)(`strong`,{children:`Edit value`}),`, `,(0,j.jsx)(`strong`,{children:`Roll with Advantage`}),`, or `,(0,j.jsx)(`strong`,{children:`Roll with Disadvantage`}),`.`]})]}),(0,j.jsx)(Kt,{$theme:U,children:`Dice Chips in Text`}),(0,j.jsxs)(qt,{children:[(0,j.jsx)(`li`,{children:`Wrap a formula in square brackets to create a clickable dice chip.`}),(0,j.jsx)(`li`,{children:`You can also use fl(floor) to round down or ce(ceil) to round up. Ex; [1d20+fl(@Strength/2)]`})]}),(0,j.jsx)(Jt,{$theme:U,children:`Melee attack: [1d20+5] to hit.`}),(0,j.jsx)(Kt,{$theme:U,children:`Using Attributes in Formulas`}),(0,j.jsxs)(qt,{children:[(0,j.jsxs)(`li`,{children:[`Reference by BID with `,(0,j.jsx)(`strong`,{children:`@BID`}),`.`]}),(0,j.jsxs)(`li`,{children:[`Reference by attribute name with `,(0,j.jsx)(`strong`,{children:`@NAME`}),`. Swap spaces with underscores.`]})]}),(0,j.jsx)(Jt,{$theme:U,children:`Damage: [2d8+@Z017]`}),(0,j.jsx)(Jt,{$theme:U,children:`Damage: [2d8+@Strength]`})]}),(0,j.jsx)(Qt,{children:(0,j.jsx)($,{type:`button`,$theme:U,$variant:`primary`,onClick:()=>{z(!1)},children:`Close`})})]})]}):null]})},{})})}));