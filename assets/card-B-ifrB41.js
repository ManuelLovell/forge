import{C as e,F as t,N as n,O as r,R as i,S as a,T as o,_ as s,b as c,g as l,o as u,s as d,t as f,w as p,y as m}from"./defaultgamesystem-BOilZxMK.js";import{A as h,C as g,D as _,E as v,L as y,O as b,T as ee,a as te,g as ne,i as x,j as S,k as re,o as ie,p as ae,s as oe,t as se,w as ce,x as le,z as C}from"./unitCollectionRemote-BgU0sb5q.js";/* empty css               */var w=S(`book-marked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),T=S(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),ue=S(`cloudy`,[[`path`,{d:`M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z`,key:`44yre2`}],[`path`,{d:`M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61`,key:`leugyv`}]]),de=S(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),E=S(`hard-drive`,[[`line`,{x1:`22`,x2:`2`,y1:`12`,y2:`12`,key:`1y58io`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}],[`line`,{x1:`6`,x2:`6.01`,y1:`16`,y2:`16`,key:`sgf278`}],[`line`,{x1:`10`,x2:`10.01`,y1:`16`,y2:`16`,key:`1l4acy`}]]),fe=S(`pin`,[[`path`,{d:`M12 17v5`,key:`bb1du9`}],[`path`,{d:`M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z`,key:`1nkz8b`}]]),pe=S(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),me=S(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),he=S(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),D=i(n(),1),O=i(t(),1);const ge=e=>{let t=[...Array.isArray(e)?e:[]].sort((e,t)=>e.row===t.row?e.col-t.col:e.row-t.row),n=[];return t.forEach(e=>{let t=n[n.length-1];if(!t||t.row!==e.row){n.push({row:e.row,items:[e]});return}t.items.push(e)}),{sorted:t,rows:n}};var k=o(),A=e=>`
    0 1px 1px ${s(e.background,.95)},
    0 0 2px ${s(e.background,.85)}
  `,_e=d.div`
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
`,ve=d.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`,M=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`,ye=d(M)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  height: calc(2 * 1.1em);
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100% !important;
`,be=d.input`
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
`,xe=d(d.div`
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
`,Se=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  height: 40px;
  box-sizing: border-box;
`,Ce=d.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`,we=d.span`
  color: ${e=>e.$theme.offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
  margin-left: 4px;
  margin-right: 4px;
  align-self: center;
`,F=d.input`
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
`,Te=d.select`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.78)};
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
  text-align-last: ${e=>e.$align||`center`};
  line-height: 1;
  align-self: center;

  &:focus {
    outline: none;
    border-color: ${e=>e.$theme.offset};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,I=d.div`
  width: 100%;
  min-height: 28px;
  border-radius: 4px;
  border: 1px dashed ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.52)};
  color: ${e=>s(e.$theme.primary,.92)};
  padding: 4px 8px;
  box-sizing: border-box;
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`center`};
  display: flex;
  align-items: center;
  justify-content: center;
`,Ee=d(I)`
  border-style: solid;
  background: ${e=>s(e.$theme.primary,.75)};
  color: ${e=>s(e.$theme.offset,.96)};
  box-shadow: ${e=>`0 4px 14px ${s(e.$theme.background,.65)}`};
  text-shadow: ${e=>`1px 1px 0 ${s(e.$theme.background,.95)}`};
  font-weight: 700;
  font-style: italic;
`,L=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
`,De=d.span`
  color: ${e=>s(e.$theme.primary,.92)};
  flex-shrink: 0;
`,R=d.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
`,z=d.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>e.$filled?e.$theme.primary:`transparent`};
  flex-shrink: 0;
  padding: 0;
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 0.65;
  }
`,B=d.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,Oe=d.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,ke=d.div`
  flex: 1;
  min-width: 0;
`,Ae=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 18px;
`,je=d.div`
  width: 100%;
  height: 5px;
  background: ${e=>`linear-gradient(10deg, ${e.$theme.border||`white`}, rgba(255,255,255,0))`};
`,V=d.div`
  width: 100%;
  height: ${e=>`${e.$heightPx}px`};
  border-radius: 8px;
  border: 1px solid ${e=>s(e.$theme.border,.9)};
  background: ${e=>s(e.$theme.background,.42)};
  overflow: hidden;
  box-sizing: border-box;
`,H=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,U=d.div`
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
`,Me=d.div`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${e=>e.$theme.border||`rgba(255,255,255,0.5)`};
`,Ne=d.div`
  width: 100%;
  height: 10px;
  background: ${e=>`linear-gradient(to bottom, ${e.$theme.border||`rgba(255,255,255,0.2)`}, transparent)`};
`,W=d.div`
  width: 100%;
  height: 2px;
  background: ${e=>e.$theme.border||`#222`};
  box-shadow: ${e=>`inset 0 1px 0 ${e.$theme.border||`#444`}, 0 1px 0 #000`};
`,Pe=d.div`
  width: 100%;
  height: 6px;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6' preserveAspectRatio='none'%3E%3Cpolyline points='0,6 6,0 12,6 18,0 24,6' fill='none' stroke='${encodeURIComponent(e.$theme.border||`#ffffff`)}' stroke-width='1.5'/%3E%3C/svg%3E")`};
`,Fe=d.div`
  width: 100%;
  height: 4px;
  background: ${e=>e.$theme.border||`white`};
  animation: flicker 1.2s infinite alternate;

  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 1; }
  }
`,Ie=d.div`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`,Le=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${e=>s(e.$theme.border,.85)};
  padding-bottom: 4px;
  margin-bottom: 4px;
`,Re=d.div`
  color: ${e=>e.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,ze=d.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Be=d.div`
  margin-bottom: 8px;
`,Ve=d.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`,He=d.div`
  width: 20px;
  display: flex;
  justify-content: center;
`,Ue=d.div`
  flex: 1;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`,We=d.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ge=d.input`
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
`,Ke=d.textarea`
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
`,qe=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`,Je=d.button`
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
`,Ye=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Xe=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 9999;
`,Ze=d.div`
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
`,Qe=d.h3`
  margin: 0 0 12px;
  color: ${e=>s(e.$theme.primary,.98)};
  font-size: 16px;
`,$e=d.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
`,et=d.span`
  color: ${e=>s(e.$theme.offset,.95)};
  font-size: 13px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
`,tt=d.button`
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
`,nt=d.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`,rt=d.div`
  flex: 1;
`,it=d.input`
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
`,at=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 8px;
`,ot=d.span`
  color: ${e=>e.$theme.offset||f.theme_offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
`,st=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: space-evenly;
  width: ${e=>e.$fullWidth?`100%`:`auto`};
`,ct=d.input`
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
`,lt=d.button`
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
`,ut=d.div`
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
`,dt={sm:`14px`,md:`16px`,lg:`18px`},ft={sm:`14px`,md:`16px`,lg:`18px`},pt={sm:`14px`,md:`16px`,lg:`18px`},mt={sm:`14px`,md:`16px`,lg:`18px`},ht=40,gt=(e,t,n,r)=>{let i=typeof e==`number`?e:typeof e==`string`?Number(e):NaN;if(!Number.isFinite(i))return r;let a=Math.trunc(i);return Math.max(t,Math.min(n,a))},_t=(e,t=`center`)=>{if(typeof e!=`string`)return t;let n=e.trim().toLowerCase();return n===`left`||n===`center`||n===`right`?n:t},G=e=>String(e?.attr_bid??e?.bid??``).trim(),vt=e=>String(e?.attr_abbr??e?.abbr??``).trim(),K=e=>String(e?.attr_name??e?.name??``).trim(),yt=e=>String(e?.attr_type??e?.type??``).trim().toLowerCase(),bt=e=>{let t=e?.attr_func??e?.func??``;return typeof t==`string`?t.trim():``},q=e=>e?.attr_meta??e?.meta??{},J=(e,t)=>t&&e.find(e=>{let n=e,r=G(n)===t,i=String(n.id??``)===String(t);return r||i})||null,xt=(e,t)=>e?t===`abbr`?vt(e):t===`name`||!t||t===`text`?K(e):``:``,St=(e,t)=>Array.isArray(t)?t.filter(t=>!!J(e,t)):[],Ct=(e,t)=>St(e,t).filter(t=>yt(J(e,t))===`bool`),wt=(e,t)=>{let n=J(e,t);return!n||yt(n)!==`list`?`List Attribute`:K(n)};const Y=({systemTheme:t,backgroundUrl:n,cardLayout:i,attributes:a,unitItem:o,onUpdateMetadata:s})=>{let[l,u]=(0,O.useState)({}),[d,f]=(0,O.useState)({}),[p,m]=(0,O.useState)(null),h=(0,O.useRef)({}),g=(0,O.useRef)({}),{rows:v}=(0,O.useMemo)(()=>ge(i),[i]),b=(0,O.useMemo)(()=>{let e=o.metadata?.[c.UNIT_NAME];if(typeof e==`string`&&e.trim())return e;let t=o.text?.plainText;return typeof t==`string`&&t.trim()?t:typeof o.name==`string`&&o.name.trim()?o.name:`Unknown`},[o]),[ee,te]=(0,O.useState)(b);(0,O.useEffect)(()=>{te(b)},[b]);let ne=async()=>{let e=ee.trim(),t=b.trim()||`Unknown`,n=e||t;te(n),n!==b&&await s({[c.UNIT_NAME]:n})},x=t=>`${e.EXTENSIONID}/${t}`,S=e=>{let t=o.metadata?.[x(e)];return t==null?``:typeof t==`string`?t:typeof t==`number`||typeof t==`boolean`?String(t):``},re=e=>{let t=o.metadata?.[x(e)];if(typeof t==`boolean`)return t;if(typeof t==`number`)return t!==0;if(typeof t==`string`){let e=t.trim().toLowerCase();return e===`true`||e===`1`||e===`yes`||e===`on`}return!1},ie=(e,t)=>l[e]??S(t),ae=e=>bt(e).length>0,se=(0,O.useMemo)(()=>{let e={};for(let t of a){let n=G(t);if(!n)continue;let r=S(n).trim();if(!r)continue;let i=Number(r);Number.isFinite(i)&&(e[n]=i)}return e},[a,o.metadata]),ce=(0,O.useMemo)(()=>{let e={};for(let t of a){let n=t,r=G(n);if(!r)continue;let i=S(r).trim();if(!i)continue;let a=Number(i);if(!Number.isFinite(a))continue;let o=K(n);o&&(e[o]=a);let s=vt(n);s&&(e[s]=a)}return e},[a,o.metadata]),le=e=>{let t=bt(e);if(!t)return null;let n=oe(t,{bidValueMap:se,nameValueMap:ce,onMissingBid:`error`});return!n.valid||!n.notation?(C.warn(`[FORGE] Could not convert attr_func for ${G(e)||`unknown`}: ${n.error||`Unknown conversion error`}`),null):n.notation},w=async(e,t)=>{try{let n=await r.scene.getMetadata(),i=(await r.party.getPlayers()).find(e=>e.id===o.createdUserId),a=await r.player.getId(),s=await r.player.getColor();await y({notation:e,actionName:t,senderName:b,senderId:o.createdUserId||a||o.id,senderColor:i?.color||s||`#ffffff`},n)}catch(t){C.error(`Failed to send dice roll from CardLayoutRenderer`,e,t),C.log(e)}},T=async e=>{if(!e)return;let t=le(e);t&&await w(t,K(e)||G(e)||`Roll`)},ue=e=>o.metadata?.[x(e)],de=(e,t)=>{let n=ue(e),r=n&&typeof n==`object`&&!Array.isArray(n)?n:null,i=q(t)?.resource;return{current:r?Number(r.current??i?.defaultCurrent??0):Number(i?.defaultCurrent??0),max:r?Number(r.max??i?.defaultMax??0):Number(i?.defaultMax??0)}},E=async(e,t)=>{await s({[x(e)]:t})},fe=e=>{let t=q(e)?.derived?.formula,n=typeof t==`string`&&t.trim().length>0?t.trim():bt(e);if(!n)return`-`;let r=oe(n,{bidValueMap:se,nameValueMap:ce,onMissingBid:`error`});if(!r.valid||!r.notation)return`-`;let i=r.notation.trim(),a=Number(i);if(!Number.isFinite(a))return i||`-`;let o=Number(q(e)?.derived?.precision),s=Number.isFinite(o)?Math.max(0,Math.min(Math.trunc(o),8)):0,c=q(e)?.derived?.displayMode,l=s>0?a.toFixed(s):String(a);return c===`percent`?`${l}%`:l},me=/(\d+)d(\d+)([kd][hl]\d+|!)?/gi,he=(e,t)=>{let n=Array.from(e.matchAll(me));if(n.length!==1)return null;let r=n[0],i=r[0]||``,a=r[1]||``,o=r[2]||``,s=r[3]||``,c=r.index;if(!i||!a||!o||typeof c!=`number`)return null;let l=Number(a);if(!Number.isFinite(l)||l!==1||s)return null;let u=`2d${o}${t===`advantage`?`kh1`:`kl1`}`;return`${e.slice(0,c)}${u}${e.slice(c+i.length)}`};(0,O.useEffect)(()=>()=>{Object.values(h.current).forEach(e=>{window.clearTimeout(e)})},[]);let D=e=>!!d[e],A=(e,t,n,r)=>{t&&m({draftKey:e,attribute:t,input:n,isRollable:r})},Y=()=>{m(null)};(0,O.useEffect)(()=>{if(!p)return;let e=e=>{e.key===`Escape`&&m(null)};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[p]);let Tt=(e,t)=>{f(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},Et=e=>{f(t=>{let{[e]:n,...r}=t;return r})},Dt=(e,t)=>{let n=h.current[e];n&&window.clearTimeout(n),h.current[e]=window.setTimeout(()=>{g.current[e]=!0,Tt(e,t),delete h.current[e]},500)},Ot=e=>{let t=h.current[e];t&&(window.clearTimeout(t),delete h.current[e])},X=e=>g.current[e]?(delete g.current[e],!0):!1,kt=async(e,t)=>{await s({[x(e)]:t})},At=async(e,t)=>{await s({[x(e)]:t})},jt=e=>{let t=o.metadata?.[x(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``}}):[]},Mt=e=>{let t=o.metadata?.[x(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``,inUse:!!t.inUse}}):[]},Nt=(e,t)=>{C.log(e,t)},Z=e=>{e&&(e.style.height=`0px`,e.style.height=`${Math.max(e.scrollHeight,44)}px`)},Pt=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=e[0],r=(e[1]||``).trim();if(!r)continue;let i=oe(r,{bidValueMap:se,nameValueMap:ce,onMissingBid:`error`});!i.valid||!i.notation||t.push({raw:n,notation:i.notation})}return t},Q=async(e,t,n)=>{Nt(`List metadata update`,{listType:n.listType,bid:e,reason:n.reason,entryId:n.entryId,field:n.field,entryCount:t.length,timestamp:Date.now()}),await s({[x(e)]:t})},Ft=e=>e===`dash`||e===`dashed`?(0,k.jsx)(Me,{$theme:t}):e===`shadow`?(0,k.jsx)(Ne,{$theme:t}):e===`ridge`?(0,k.jsx)(W,{$theme:t}):e===`zigzag`?(0,k.jsx)(Pe,{$theme:t}):e===`pulse`?(0,k.jsx)(Fe,{$theme:t}):(0,k.jsx)(je,{$theme:t}),It=e=>{let n=e.type,r=(()=>n===`derived-value`||n===`enum-value`||n===`resource`?`text-value`:n===`column-derived`?`column-value`:n)(),i=e.styles||{},o=J(a,i.attributeId),s=_t(i.textAlign??i.align,`center`),c=i.stretch===!0;if(r===`line-break`)return(0,k.jsx)(M,{$theme:t,$full:!0,children:Ft(i.styleDesign)},e.id);if(r===`line-spacer`)return(0,k.jsx)(Ae,{$full:e.fullsize},e.id);if(r===`image`){let n=typeof i.imageUrl==`string`?i.imageUrl.trim():``,r=gt(i.imageCols,1,2,e.fullsize?2:1),a=gt(i.imageRows,1,6,1);return(0,k.jsx)(M,{$theme:t,$full:r===2,children:(0,k.jsx)(V,{$theme:t,$heightPx:ht*a,children:n?(0,k.jsx)(H,{src:n,alt:`Card component`,loading:`lazy`}):(0,k.jsx)(U,{$theme:t,children:`No image selected`})})},e.id)}if(r===`text`){let n=dt[i.fontSize||`md`],r=xt(o,i.labelMode)||`Title Header`,a=`text:${e.id}:${G(o)||`none`}`;return(0,k.jsx)(M,{$theme:t,$full:e.fullsize,onContextMenu:o?e=>{e.preventDefault(),A(a,o,null,!1)}:void 0,children:(0,k.jsx)(N,{$theme:t,$fontSize:n,$weight:700,$stretch:c,$align:s,children:r})},e.id)}if(r===`text-value`){let n=mt[i.fontSize||`md`],r=xt(o,i.labelMode),a=!!r,s=i.labelPosition===`right`?`right`:`left`,d=_t(i.textAlign??i.align,`center`),f=i.fontWeight===`bold`?700:400,p=i.fontStyle===`italic`?`italic`:`normal`,m=G(o),h=yt(o),g=ae(o),_=`text-value:${e.id}:${m||`none`}`,v=g&&D(_),y;if(h===`derived`)y=(0,k.jsx)(Ee,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,title:`Formula: ${q(o)?.derived?.formula||bt(o)||`Derived formula`}`,onContextMenu:o?e=>{e.preventDefault(),A(_,o,null,!1)}:void 0,children:fe(o)});else if(h===`enum`){let e=Array.isArray(q(o)?.enum?.options)?(q(o)?.enum?.options||[]).map(e=>String(e||``).trim()).filter(e=>e.length>0):[];y=(0,k.jsx)(Te,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,value:e.includes(m?S(m).trim():``)?S(m).trim():e[0]||``,disabled:!m,onContextMenu:o?e=>{e.preventDefault(),A(_,o,null,!1)}:void 0,onChange:m?async e=>{await E(m,e.target.value)}:void 0,children:e.length===0?(0,k.jsx)(`option`,{value:``,children:`No options`}):e.map(e=>(0,k.jsx)(`option`,{value:e,children:e},e))})}else if(h===`resource`){let e=q(o)?.resource,r=typeof e?.showPips==`boolean`?e.showPips:!!i.showPips,a=m?de(m,o):{current:0,max:0},s=Number(e?.pipCap??a.max??0),h=Number.isFinite(s)?Math.max(0,Math.min(Math.round(s),15)):0;if(r&&h>0)y=(0,k.jsx)(R,{onContextMenu:o?e=>{e.preventDefault(),A(_,o,null,!1)}:void 0,children:Array.from({length:h}).map((e,n)=>(0,k.jsx)(z,{$theme:t,$filled:n<Math.max(0,Math.min(a.current,h)),type:`button`,disabled:!m,onClick:m?async()=>{let e=Math.max(0,Math.min(a.current,h));await E(m,{current:n+1===e?n:n+1,max:a.max})}:void 0},`text-resource-pip-${n}`))});else if(r)y=(0,k.jsx)(I,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,children:`-`});else{let e=`${_}:current`,r=`${_}:max`;y=(0,k.jsxs)(L,{children:[(0,k.jsx)(F,{$theme:t,$fontSize:n,$align:`center`,$weight:f,$fontStyle:p,$stretch:c,type:`text`,value:l[e]??String(a.current),onChange:t=>{let n=t.target.value;u(t=>({...t,[e]:n}))},onBlur:async t=>{if(!m)return;let n=Number(t.target.value);await E(m,{current:Number.isFinite(n)?n:a.current,max:a.max}),u(t=>{let{[e]:n,...r}=t;return r})},placeholder:`0`}),(0,k.jsx)(De,{$theme:t,children:`/`}),(0,k.jsx)(F,{$theme:t,$fontSize:n,$align:`center`,$weight:f,$fontStyle:p,$stretch:c,type:`text`,value:l[r]??String(a.max),onChange:e=>{let t=e.target.value;u(e=>({...e,[r]:t}))},onBlur:async e=>{if(!m)return;let t=Number(e.target.value),n=Number.isFinite(t)?t:a.max;await E(m,{current:a.current,max:n}),u(e=>{let{[r]:t,...n}=e;return n})},placeholder:`0`})]})}}else y=(0,k.jsx)(F,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,$isRollable:g,type:`text`,readOnly:g&&!v,value:m?ie(_,m):``,onChange:g&&!v?void 0:e=>{if(!m)return;let t=e.target.value;u(e=>({...e,[_]:t}))},onBlur:g&&!v?void 0:async e=>{if(!m)return;let t=e.target.value;await kt(m,t),u(e=>{let{[_]:t,...n}=e;return n}),g&&Et(_)},onClick:g?()=>{v||X(_)||T(o)}:void 0,onContextMenu:o?e=>{e.preventDefault(),A(_,o,e.currentTarget,g)}:void 0,onTouchStart:g?e=>{v||Dt(_,e.currentTarget)}:void 0,onTouchEnd:g?()=>{Ot(_)}:void 0,onTouchCancel:g?()=>{Ot(_)}:void 0,onKeyDown:e=>{if(g&&!v&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),T(o);return}(v||!g)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`});let b=a?(0,k.jsx)(we,{$theme:t,$fontSize:n,$stretch:c,$weight:f,$fontStyle:p,children:r}):null;return(0,k.jsx)(Se,{$full:e.fullsize,children:(0,k.jsxs)(Ce,{children:[s===`left`?b:null,y,s===`right`?b:null]})},e.id)}if(r===`text-checkbox`){let n=ft[i.fontSize||`md`],r=e.fullsize?6:3,o=Math.max(1,Math.min(r,Number(i.checkboxCount||1))),s=[...Ct(a,i.bidList)].slice(0,o);for(;s.length<o;)s.push(``);let l=xt(J(a,s[0]||i.attributeId),i.labelMode),u=i.inputType===`slider`,d=i.labelPosition===`right`?`right`:`left`,f=i.fontWeight===`bold`?700:400,p=i.fontStyle===`italic`?`italic`:`normal`,m=l?(0,k.jsx)(ot,{$theme:t,$fontSize:n,$stretch:c,$weight:f,$fontStyle:p,children:l}):null;return(0,k.jsx)(M,{$theme:t,$full:e.fullsize,children:(0,k.jsxs)(at,{children:[d===`left`?m:null,(0,k.jsx)(st,{$fullWidth:!m,children:Array.from({length:o}).map((n,r)=>{let i=s[r]||``,o=i?re(i):!1,c=i?J(a,i):null,l=`text-checkbox:${e.id}:${i||`index-${r}`}`;return u?(0,k.jsx)(lt,{type:`button`,$theme:t,$active:o,disabled:!i,onClick:i?()=>{At(i,!o)}:void 0,onContextMenu:c?e=>{e.preventDefault(),A(l,c,null,!1)}:void 0,children:(0,k.jsx)(ut,{$theme:t,$active:o})},`slider-${r}`):(0,k.jsx)(ct,{$theme:t,type:`checkbox`,disabled:!i,checked:o,onChange:i?e=>{At(i,e.target.checked)}:void 0,onContextMenu:c?e=>{e.preventDefault(),A(l,c,null,!1)}:void 0},`checkbox-${r}`)})}),d===`right`?m:null]})},e.id)}if(r===`column-text`){let n=pt[i.fontSize||`md`],r=St(a,i.bidList),o=i.fontWeight===`bold`?700:400,s=i.fontStyle===`italic`?`italic`:`normal`;return r.length===0?null:(0,k.jsx)(M,{$theme:t,$full:e.fullsize,children:(0,k.jsx)(B,{children:r.map(r=>{let l=J(a,r),u=xt(l,i.labelMode||`name`);return u?(0,k.jsx)(Oe,{children:(0,k.jsx)(xe,{$theme:t,$fontSize:n,$stretch:c,$align:`center`,$weight:o,$fontStyle:s,onContextMenu:l?t=>{t.preventDefault(),A(`column-text:${e.id}:${r}`,l,null,!1)}:void 0,children:u})},r):null})})},e.id)}if(r===`column-value`){let n=pt[i.fontSize||`md`],r=St(a,i.bidList),o=i.fontWeight===`bold`?700:400,s=i.fontStyle===`italic`?`italic`:`normal`;return r.length===0?null:(0,k.jsx)(M,{$theme:t,$full:e.fullsize,children:(0,k.jsx)(B,{children:r.map(r=>{let d=J(a,r),f=yt(d),p=ae(d),m=`column-value:${e.id}:${r}`,h=p&&D(m),g;if(f===`derived`)g=(0,k.jsx)(Ee,{$theme:t,$fontSize:n,$align:`center`,$weight:o,$fontStyle:s,$stretch:c,title:`Formula: ${q(d)?.derived?.formula||bt(d)||`Derived formula`}`,onContextMenu:d?e=>{e.preventDefault(),A(m,d,null,!1)}:void 0,children:fe(d)});else if(f===`enum`){let e=Array.isArray(q(d)?.enum?.options)?(q(d)?.enum?.options||[]).map(e=>String(e||``).trim()).filter(e=>e.length>0):[],i=S(r).trim();g=(0,k.jsx)(Te,{$theme:t,$fontSize:n,$align:`center`,$weight:o,$fontStyle:s,$stretch:c,value:e.includes(i)?i:e[0]||``,onContextMenu:d?e=>{e.preventDefault(),A(m,d,null,!1)}:void 0,onChange:async e=>{await E(r,e.target.value)},children:e.length===0?(0,k.jsx)(`option`,{value:``,children:`No options`}):e.map(e=>(0,k.jsx)(`option`,{value:e,children:e},e))})}else if(f===`resource`){let e=q(d)?.resource,a=typeof e?.showPips==`boolean`?e.showPips:!!i.showPips,f=de(r,d),p=Number(e?.pipCap??f.max??0),h=Number.isFinite(p)?Math.max(0,Math.min(Math.round(p),15)):0;if(a&&h>0)g=(0,k.jsx)(R,{onContextMenu:d?e=>{e.preventDefault(),A(m,d,null,!1)}:void 0,children:Array.from({length:h}).map((e,n)=>(0,k.jsx)(z,{$theme:t,$filled:n<Math.max(0,Math.min(f.current,h)),type:`button`,onClick:async()=>{let e=Math.max(0,Math.min(f.current,h));await E(r,{current:n+1===e?n:n+1,max:f.max})}},`column-resource-pip-${r}-${n}`))});else if(a)g=(0,k.jsx)(I,{$theme:t,$fontSize:n,$align:`center`,$weight:o,$fontStyle:s,$stretch:c,children:`-`});else{let e=`${m}:current`,i=`${m}:max`;g=(0,k.jsxs)(L,{children:[(0,k.jsx)(P,{$theme:t,$fontSize:n,$align:`center`,value:l[e]??String(f.current),onChange:t=>{let n=t.target.value;u(t=>({...t,[e]:n}))},onBlur:async t=>{let n=Number(t.target.value);await E(r,{current:Number.isFinite(n)?n:f.current,max:f.max}),u(t=>{let{[e]:n,...r}=t;return r})}}),(0,k.jsx)(De,{$theme:t,children:`/`}),(0,k.jsx)(P,{$theme:t,$fontSize:n,$align:`center`,value:l[i]??String(f.max),onChange:e=>{let t=e.target.value;u(e=>({...e,[i]:t}))},onBlur:async e=>{let t=Number(e.target.value),n=Number.isFinite(t)?t:f.max;await E(r,{current:f.current,max:n}),u(e=>{let{[i]:t,...n}=e;return n})}})]})}}else g=(0,k.jsx)(P,{$theme:t,$fontSize:n,$align:`center`,$isRollable:p,readOnly:p&&!h,value:ie(m,r),onChange:p&&!h?void 0:e=>{let t=e.target.value;u(e=>({...e,[m]:t}))},onBlur:p&&!h?void 0:async e=>{let t=e.target.value;await kt(r,t),u(e=>{let{[m]:t,...n}=e;return n}),p&&Et(m)},onClick:p?()=>{h||X(m)||T(d)}:void 0,onContextMenu:d?e=>{e.preventDefault(),A(m,d,e.currentTarget,p)}:void 0,onTouchStart:p?e=>{h||Dt(m,e.currentTarget)}:void 0,onTouchEnd:p?()=>{Ot(m)}:void 0,onTouchCancel:p?()=>{Ot(m)}:void 0,onKeyDown:e=>{if(p&&!h&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),T(d);return}(h||!p)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`});return(0,k.jsx)(ke,{children:g},r)})})},e.id)}if(r===`action-list`){let n=J(a,i.attributeId||i.bidList?.[0]),r=G(n),o=wt(a,i.attributeId||i.bidList?.[0]),s=r?jt(r):[];return(0,k.jsx)(M,{$theme:t,$full:e.fullsize,children:(0,k.jsxs)(Ie,{$theme:t,children:[(0,k.jsxs)(Le,{$theme:t,children:[(0,k.jsx)(Re,{$theme:t,onContextMenu:n?t=>{t.preventDefault(),A(`action-list:${e.id}:${r||`none`}`,n,null,!1)}:void 0,children:o}),(0,k.jsx)(ze,{type:`button`,$theme:t,"aria-label":`Add Action`,onClick:async()=>{r&&await Q(r,[...s,{id:crypto.randomUUID(),name:``,description:``}],{listType:`action`,reason:`add`})},children:(0,k.jsx)(pe,{size:14})})]}),s.map((n,i)=>(0,k.jsxs)(Be,{children:[(0,k.jsxs)(nt,{children:[(0,k.jsx)(rt,{children:(0,k.jsx)(Ge,{$theme:t,type:`text`,defaultValue:n.name,placeholder:`Action Name`,onBlur:async e=>{if(!r)return;let t=e.target.value;await Q(r,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,k.jsx)(We,{type:`button`,$theme:t,"aria-label":`Delete Action`,onClick:async()=>{r&&await Q(r,s.filter(e=>e.id!==n.id),{listType:`action`,reason:`delete`,entryId:n.id})},children:(0,k.jsx)(_,{size:14})})]}),(()=>{let e=Pt(n.description);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Ke,{$theme:t,defaultValue:n.description,ref:Z,placeholder:`Action Description`,onInput:e=>{Z(e.currentTarget)},onBlur:async e=>{if(!r)return;let t=e.target.value;await Q(r,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`description`})}}),e.length>0?(0,k.jsx)(qe,{children:e.map((e,r)=>(0,k.jsx)(Je,{type:`button`,$theme:t,onClick:()=>{w(e.notation,n.name||`Action`)},title:e.notation,children:e.notation},`${n.id}-action-inline-${r}`))}):null]})})()]},n.id||`${e.id}-action-${i}`))]})},e.id)}if(r===`item-list`){let n=J(a,i.attributeId||i.bidList?.[0]),r=G(n),o=wt(a,i.attributeId||i.bidList?.[0]),s=r?Mt(r):[];return(0,k.jsx)(M,{$theme:t,$full:e.fullsize,children:(0,k.jsxs)(Ie,{$theme:t,children:[(0,k.jsxs)(Le,{$theme:t,children:[(0,k.jsx)(Re,{$theme:t,onContextMenu:n?t=>{t.preventDefault(),A(`item-list:${e.id}:${r||`none`}`,n,null,!1)}:void 0,children:o}),(0,k.jsx)(ze,{type:`button`,$theme:t,"aria-label":`Add Item`,onClick:async()=>{r&&await Q(r,[...s,{id:crypto.randomUUID(),name:``,description:``,inUse:!1}],{listType:`item`,reason:`add`})},children:(0,k.jsx)(pe,{size:14})})]}),s.map((n,i)=>(0,k.jsxs)(Be,{children:[(0,k.jsxs)(Ve,{children:[(0,k.jsx)(He,{children:(0,k.jsx)(it,{$theme:t,type:`checkbox`,defaultChecked:n.inUse,onBlur:async e=>{if(!r)return;let t=e.target.checked;await Q(r,s.map(e=>e.id===n.id?{...e,inUse:t}:e),{listType:`item`,reason:`toggle-save`,entryId:n.id,field:`inUse`})}})}),(0,k.jsx)(Ue,{$theme:t,children:(0,k.jsx)(Ge,{$theme:t,type:`text`,defaultValue:n.name,placeholder:`Item Name`,onBlur:async e=>{if(!r)return;let t=e.target.value;await Q(r,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,k.jsx)(We,{type:`button`,$theme:t,"aria-label":`Delete Item`,onClick:async()=>{r&&await Q(r,s.filter(e=>e.id!==n.id),{listType:`item`,reason:`delete`,entryId:n.id})},children:(0,k.jsx)(_,{size:14})})]}),(()=>{let e=Pt(n.description);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Ke,{$theme:t,defaultValue:n.description,ref:Z,placeholder:`Item Description`,onInput:e=>{Z(e.currentTarget)},onBlur:async e=>{if(!r)return;let t=e.target.value;await Q(r,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`description`})}}),e.length>0?(0,k.jsx)(qe,{children:e.map((e,r)=>(0,k.jsx)(Je,{type:`button`,$theme:t,onClick:()=>{w(e.notation,n.name||`Item`)},title:e.notation,children:e.notation},`${n.id}-item-inline-${r}`))}):null]})})()]},n.id||`${e.id}-item-${i}`))]})},e.id)}return null};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(_e,{$theme:t,$backgroundUrl:n,children:(0,k.jsxs)(j,{children:[(0,k.jsx)(ve,{children:(0,k.jsx)(ye,{$theme:t,children:(0,k.jsx)(be,{$theme:t,value:ee,onChange:e=>{te(e.target.value)},onBlur:()=>{ne()},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},"aria-label":`Unit Name`})})}),v.map(e=>(0,k.jsx)(ve,{children:e.items.map(e=>It(e))},`row-${e.row}`))]})}),p?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Xe,{onClick:Y}),(0,k.jsxs)(Ze,{$theme:t,onClick:e=>e.stopPropagation(),children:[(0,k.jsxs)($e,{children:[(0,k.jsx)(Qe,{$theme:t,children:K(p.attribute)||`Attribute`}),(0,k.jsxs)(et,{$theme:t,children:[`[`,G(p.attribute),`]`]})]}),(0,k.jsxs)(Ye,{children:[p.isRollable?(0,k.jsx)(tt,{type:`button`,$theme:t,onClick:()=>{Y(),Tt(p.draftKey,p.input)},children:`Edit value`}):null,(()=>{if(!p.isRollable)return null;let e=le(p.attribute);if(!e)return null;let n=he(e,`advantage`),r=he(e,`disadvantage`);return!n||!r?null:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(tt,{type:`button`,$theme:t,onClick:()=>{Y(),w(n,`${K(p.attribute)||G(p.attribute)||`Roll`} (Advantage)`)},children:`Roll with Advantage`}),(0,k.jsx)(tt,{type:`button`,$theme:t,onClick:()=>{Y(),w(r,`${K(p.attribute)||G(p.attribute)||`Roll`} (Disadvantage)`)},children:`Roll with Disadvantage`})]})})()]})]})]}):null]})};var Tt={SNAPSHOT_PUBLIC_ID:`${e.EXTENSIONID}/SnapshotPublicId`},Et={primary:f.theme_primary,offset:f.theme_offset,background:f.theme_background,border:f.theme_border,background_url:f.background_url},Dt=d.div`
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
`,Ot=d.div`
  height: 100%;
  overflow: hidden;
  padding: 40px 4px 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
`,X=d.p`
  margin: 0;
  color: ${e=>e.$theme.primary};
  text-align: center;
  align-content: center;
  font-weight: 600;
  font-size: 24px;
`,kt=d.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: min(calc(100% - 16px), 350px);
  z-index: 10;
`,At=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`,jt=d.select`
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
`,Mt=d.button`
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
`,Nt=d.img`
  width: 28px;
  height: 28px;
  display: block;
`,Z=d.div`
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
`,Pt=d.div`
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
`,Q=d.button`
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
`,Ft=d.div`
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
`,It=d.div`
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
`,Lt=d.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Rt=d.div`
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
`,zt=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,Bt=d.div`
  color: ${e=>e.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,Vt=d.span`
  font-size: 12px;
  line-height: 1;
`,Ht=d.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ut=d.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`,Wt=d.span`
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
`,Gt=d.span`
  color: ${e=>e.$color};
`,Kt=d.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,qt=d.button`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>e.$variant===`import`?s(e.$theme.offset,.45):s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`,Jt=d.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Yt=d.input`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`,Xt=d.button`
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
`,Zt=d.div`
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
`,Qt=d.div`
  display: inline-flex;
  justify-content: space-between;
  width: 40%;
  pointer-events: auto;
`,$=d.button`
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
`,$t=d($)`
  background: ${e=>e.$active?s(e.$theme.offset,.45):s(e.$theme.background,.9)};

  &:disabled {
    background: ${e=>s(e.$theme.background,.9)};
  }
`,en=d.textarea`
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
`,tn=d.button`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 8px;
  background: ${e=>e.$variant===`primary`?s(e.$theme.offset,.5):s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 6px 10px;
  cursor: pointer;
`,nn=d(tn)`
  margin-right: auto;
`,rn=d.div`
  margin-top: 8px;
  color: ${e=>s(e.$theme.offset,.95)};
  font-size: 12px;
`,an=d.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${e=>s(e.$theme.primary,.92)};
  font-size: 12px;
  line-height: 1.45;
`,on=d.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.$theme.primary};
`,sn=d.ul`
  margin: 0;
  padding-left: 16px;
`,cn=d.code`
  display: block;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid ${e=>s(e.$theme.border,.7)};
  background: ${e=>s(e.$theme.background,.82)};
  color: ${e=>e.$theme.primary};
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
  white-space: pre-wrap;
`,ln=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,un=d.div`
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
`,dn=d.h3`
  color: ${e=>e.$theme.primary};
  margin: 0 0 15px 0;
  font-size: 18px;
`,fn=d.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
`,pn=()=>{let e=new URLSearchParams(window.location.search).get(`unitid`);return e&&e.split(`,`)[0]?.trim()||null},mn=()=>{let e=new URLSearchParams(window.location.search).get(`pinned`);if(!e)return!1;let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`},hn=`POP_${e.CARDSID}`,gn=(e,t)=>{let n=new URLSearchParams;return n.set(`unitid`,e),t&&n.set(`pinned`,`true`),`/pages/forgecard.html?${n.toString()}`},_n=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},vn=e=>{if(e===!0)return!0;if(typeof e==`string`){let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`}return typeof e==`number`?e===1:!1};D.createRoot(document.getElementById(`root`)).render((0,k.jsx)(O.StrictMode,{children:(0,k.jsx)(p,{children:(0,k.jsx)(()=>{let[t,n]=(0,O.useState)(()=>pn()),i=(0,O.useMemo)(()=>mn(),[]),[a,o]=(0,O.useState)({metadata:{},items:[]}),[s,d]=(0,O.useState)(null),[p,_]=(0,O.useState)(null),[y,S]=(0,O.useState)(null),[oe,pe]=(0,O.useState)(null),[D,ge]=(0,O.useState)(!1),[A,_e]=(0,O.useState)(!1),[j,ve]=(0,O.useState)(!1),[M,ye]=(0,O.useState)(``),[be,xe]=(0,O.useState)(``),[N,P]=(0,O.useState)(!1),[Se,Ce]=(0,O.useState)([]),[we,F]=(0,O.useState)([]),[Te,I]=(0,O.useState)(!1),[Ee,L]=(0,O.useState)(!1),[De,R]=(0,O.useState)(``),[z,B]=(0,O.useState)(null),[Oe,ke]=(0,O.useState)(!1),Ae=e=>{let t=e[m.ENABLE_CONSOLE_LOG];typeof t==`boolean`&&C.setEnabled(t)},je=(0,O.useMemo)(()=>p||f.card_layout,[p]),V=(0,O.useMemo)(()=>y||f.attributes,[y]),H=(0,O.useMemo)(()=>s||Et,[s]),U=(0,O.useMemo)(()=>l(H.primary,H.offset,H.background,H.border,H.background_url),[H]);(0,O.useEffect)(()=>{let e=!1;return(async()=>{try{await ae()}catch(e){C.log(`Auth hydration failed in card iframe`,e)}finally{e||ke(!0)}})(),()=>{e=!0}},[]),(0,O.useEffect)(()=>{let e=!0,t=async t=>{let n=t[Tt.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(d(null),_(null),S(null));return}let{data:r,error:i}=await u.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(i){e&&(d(null),_(null),S(null));return}let a=Array.isArray(r)?r[0]:r;if(!a||typeof a!=`object`){e&&(d(null),_(null),S(null));return}let o=a,s=_n(o.card_layout),c=_n(o.attributes);if(typeof o.theme_primary!=`string`||typeof o.theme_offset!=`string`||typeof o.theme_background!=`string`||typeof o.theme_border!=`string`||!Array.isArray(s)||!Array.isArray(c)){e&&(d(null),_(null),S(null));return}e&&(d({primary:o.theme_primary,offset:o.theme_offset,background:o.theme_background,border:o.theme_border,background_url:typeof o.background_url==`string`?o.background_url:``}),_(s),S(c))};(async()=>{let[n,i,a,s,c]=await Promise.all([r.scene.getMetadata(),r.scene.items.getItems(),r.room.getMetadata(),r.player.getId(),r.player.getRole()]);e&&(Ae(n),o({metadata:n,items:i}),await t(a),pe(s),ge(String(c||``).toUpperCase()===`GM`),_e(!0))})();let n=r.scene.onMetadataChange(t=>{e&&(o(e=>({...e,metadata:t})),Ae(t))}),i=r.room.onMetadataChange(n=>{e&&t(n)}),a=r.scene.items.onChange(t=>{e&&o(e=>({...e,items:t}))});return()=>{e=!1,n(),i(),a()}},[]);let Me=e=>{let t=e.metadata?.[c.UNIT_NAME];if(typeof t==`string`&&t.trim())return t;let n=e.text?.plainText;return typeof n==`string`&&n.trim()?n:typeof e.name==`string`&&e.name.trim()?e.name:`Unknown`},Ne=(0,O.useMemo)(()=>a.items.filter(e=>vn(e.metadata?.[c.FABRICATED])).filter(e=>D||e.createdUserId===oe).filter(e=>e.id!==t).map(e=>({id:e.id,name:Me(e)})).sort((e,t)=>e.name.localeCompare(t.name)),[a.items,t,D,oe]),W=(0,O.useMemo)(()=>t&&a.items.find(e=>e.id===t)||null,[a.items,t]),Pe=async()=>t&&(await r.scene.items.getItems()).find(e=>e.id===t)||null,Fe=async e=>{W&&(await r.scene.items.updateItems([W.id],t=>{let n={...t[0].metadata||{}};Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),t[0].metadata=n}),o(t=>({...t,items:t.items.map(t=>{if(t.id!==W.id)return t;let n={...t.metadata||{}};return Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),{...t,metadata:n}})})))},Ie=async t=>{if(!W)return;let n=[c.FABRICATED,c.INITIATIVE,c.ON_LIST,c.IN_PARTY];await r.scene.items.updateItems([W.id],r=>{let i=r[0].metadata,a={},o={};for(let[t,r]of Object.entries(i))t.startsWith(`${e.EXTENSIONID}/`)||(a[t]=r),n.includes(t)&&(o[t]=r);r[0].metadata={...a,...t,...o}}),o(r=>({...r,items:r.items.map(r=>{if(r.id!==W.id)return r;let i={},a={};for(let[t,o]of Object.entries(r.metadata||{}))t.startsWith(`${e.EXTENSIONID}/`)||(i[t]=o),n.includes(t)&&(a[t]=o);return{...r,metadata:{...i,...t,...a}}})}))},Le=async()=>{Ce(await ce())},Re=e=>{let t=e.trim(),n=t?t[0].toUpperCase():`A`;return`hsl(${Math.max(0,Math.min(25,n.charCodeAt(0)-65))/26*360}, 70%, 65%)`},ze=async e=>{let[t,n]=await Promise.all([te(e),ne()?x(e):Promise.resolve([])]);return[...n.map(e=>({...e,source:`remote-user`})),...t.map(e=>({...e,source:`remote-shared`}))]},Be=(0,O.useMemo)(()=>{let e=be.trim().toLowerCase(),t={local:0,"remote-user":1,"remote-shared":2},n=(e,n)=>t[e.source]===t[n.source]?e.favorite===n.favorite?e.name.localeCompare(n.name):e.favorite?-1:1:t[e.source]-t[n.source],r=[...Se].sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);if(!e)return r.filter(e=>e.favorite).map(e=>({...e,source:`local`}));let i=r.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),a=we.filter(e=>e.source===`remote-user`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),o=we.filter(e=>e.source===`remote-shared`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e));return[...i.map(e=>({...e,source:`local`})),...a,...o].sort(n)},[Se,we,be]),Ve=async()=>{if(!t){await r.notification.show(`No unit selected to pin.`,`ERROR`);return}let n=await r.viewport.getWidth(),a=await r.viewport.getHeight(),o=a>800?700:a-100;if(!i){await r.popover.open({id:hn,url:gn(t,!0),height:400,width:350,anchorPosition:{top:50,left:n-70},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},transformOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},hidePaper:!0,disableClickAway:!0}),await r.popover.close(e.CARDSID);return}await r.popover.open({id:e.CARDSID,url:gn(t,!1),height:o,width:350,anchorPosition:{left:n/2,top:a/2},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`CENTER`},transformOrigin:{vertical:`CENTER`,horizontal:`CENTER`},hidePaper:!0,disableClickAway:!0}),await r.popover.close(hn)},He=()=>{D&&P(e=>!e)},Ue=async()=>{if(!D)return;let e=await Pe();if(!e){await r.notification.show(`No unit selected to save.`,`ERROR`);return}Oe||(await ae(),ke(!0));try{let t=(await r.player.getName()).trim(),n=ne()?await ie(e.metadata,t,N):await ee(e.metadata,t,N);await Le();let i=ne()?`online Collection`:`Collection`;await r.notification.show(n===`created`?`Unit saved to ${i}.`:`Unit updated in ${i}.`)}catch(e){C.log(`Collection save failed`,e),await r.notification.show(`Could not save this unit to Collection.`,`ERROR`)}},We=async()=>{if(!await Pe()){await r.notification.show(`No unit selected to import into.`,`ERROR`);return}B(null),R(``),I(!0)},Ge=async()=>{let e=await Pe();if(!e){await r.notification.show(`No unit selected to export.`,`ERROR`);return}try{let t=g(e.metadata),n=t[c.UNIT_NAME],i=typeof n==`string`?n.trim():``;if(!i){await r.notification.show(`Current unit has no valid unit name to export.`,`ERROR`);return}let a={name:i,author:(await r.player.getName()).trim()||`Unknown`,metadata:t};await navigator.clipboard.writeText(JSON.stringify(a,null,2)),await r.notification.show(`Unit data copied to clipboard.`)}catch(e){C.log(`Unit export failed`,e),await r.notification.show(`Could not copy unit data to clipboard.`,`ERROR`)}},Ke=()=>{I(!1),B(null),R(``)},qe=e=>{let t=JSON.parse(e);if(!t||typeof t!=`object`||Array.isArray(t))throw Error(`Import data must be a JSON object.`);let n=t,r=n.metadata&&typeof n.metadata==`object`?n.metadata:t;if(!r||typeof r!=`object`||Array.isArray(r))throw Error(`Import data must include a metadata object.`);let i=g(r),a=i[c.UNIT_NAME];if(!(typeof a==`string`&&a.trim()))throw Error(`Imported metadata must include a valid unit name.`);return i},Je=async()=>{if(!await Pe()){B(`No unit selected to import into.`);return}let e=De.trim();if(!e){B(`Paste JSON data before importing.`);return}try{await Ie(qe(e)),P(!1),Ke(),await r.notification.show(`Unit data imported successfully.`)}catch(e){B(e instanceof Error?e.message:`Import failed.`)}},Ye=(e,t)=>{let n=(e||``).trim().toLowerCase();return n===`numb`||n===`derived`?0:n===`bool`?!1:n===`enum`?``:n===`resource`?{current:0,max:0}:n===`list`?[{id:`example-list-001`,name:`Example List Entry`,description:`Describe the effect here. Dice chips can be embedded like [1d20+${t?.firstNumericBid?`@${t.firstNumericBid}`:`@BID`}]`}]:``},Xe=()=>{let t=V.find(e=>e.attr_type===`numb`)?.attr_bid,n=V.find(e=>e.attr_type===`list`)||null,r=V.map(t=>({bid:t.attr_bid,name:t.attr_name,type:t.attr_type,metadataKey:`${e.EXTENSIONID}/${t.attr_bid}`})),i={[c.UNIT_NAME]:`Example Unit Name`};for(let n of V)i[`${e.EXTENSIONID}/${n.attr_bid}`]=Ye(n.attr_type,{firstNumericBid:t});let a={id:`example-list-001`,name:`Example Action Name`,description:`Example description with chips like [1d20+${t?`@${t}`:`@BID`}] and [2d6+3].`},o={id:`example-item-001`,name:`Example Item Name`,description:`Item details go here.`,inUse:!1},s=JSON.stringify(r,null,2),l=JSON.stringify(i,null,2),u=JSON.stringify(a,null,2),d=JSON.stringify(o,null,2),f=n?`${e.EXTENSIONID}/${n.attr_bid}`:`${e.EXTENSIONID}/<LIST_BID>`;return[`You are generating Forge unit import JSON metadata for this game system.`,``,`Requirements:`,`1. Output valid JSON only (no markdown, no comments).`,`2. Output the metadata object directly (key/value pairs), not prose.`,`3. Use provided metadata keys exactly as listed.`,`4. Include a valid unit name using the unit-name metadata key.`,`5. Match value types exactly: numb -> number, bool -> boolean, list -> array of objects, text -> string.`,`6. Do not add keys outside this extension mapping unless explicitly asked.`,``,`Extension ID: ${e.EXTENSIONID}`,`Unit Name Metadata Key: ${c.UNIT_NAME}`,``,`Attribute Dictionary (required mapping):`,s,``,`List Entry Structure Examples:`,`Standard/action-style list entry object:`,u,``,`Item-style list entry object (optional inUse flag):`,d,``,`If a metadata key is list-type (for example ${f}), its value should be an array of objects in one of the above shapes.`,``,`Output JSON in this metadata shape:`,l,``,`Now generate a [CREATURE/UNIT YOU WANT] metadata JSON object in that exact structure.`].join(`
`)},Ze=async()=>{try{let e=Xe();await navigator.clipboard.writeText(e),await r.notification.show(`AI template copied to clipboard.`)}catch(e){C.log(`AI template copy failed`,e),await r.notification.show(`Could not copy AI template to clipboard.`,`ERROR`)}},Qe=()=>{let e=M.trim();if(xe(e),!e){F([]);return}(async()=>{Oe||(await ae(),ke(!0)),F(await ze(e))})().catch(async e=>{C.log(`Supabase collection search failed`,e),F([]),await r.notification.show(`Could not search online collection.`,`ERROR`)})},$e=async e=>{if(!W){await r.notification.show(`No unit selected to import into.`,`ERROR`);return}try{await Ie(e.metadata),P(!1),await r.notification.show(e.source===`local`?`Imported ${e.name}.`:`Imported ${e.name} from online collection.`)}catch(e){C.log(`Collection record import failed`,e),await r.notification.show(`Could not import collection record.`,`ERROR`)}},et=async e=>{try{if(e.source===`remote-user`)await se(e.id),F(t=>t.filter(t=>!(t.source===`remote-user`&&t.id===e.id)));else if(e.source===`local`)await le(e.id),Ce(t=>t.filter(t=>t.id!==e.id));else return;await r.notification.show(`Deleted ${e.name} from Collection.`)}catch(e){C.log(`Collection record delete failed`,e),await r.notification.show(`Could not delete collection record.`,`ERROR`)}};return(0,O.useEffect)(()=>{j&&Le().catch(e=>{C.log(`Failed to load collection records`,e)})},[j]),(0,O.useEffect)(()=>{j&&(xe(``),ye(``),F([]))},[j]),(0,k.jsxs)(Dt,{$theme:H,children:[(0,k.jsxs)(Ot,{children:[(0,k.jsx)(kt,{children:(0,k.jsxs)(At,{children:[(0,k.jsxs)(jt,{$theme:H,"aria-label":`Choose Unit`,value:``,onChange:e=>{let t=e.target.value;t&&n(t)},children:[(0,k.jsx)(`option`,{value:``,children:`Choose Unit`}),Ne.map(e=>(0,k.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,k.jsx)(Mt,{type:`button`,$theme:H,"aria-label":`Close Card`,onClick:async()=>{await r.popover.close(i?hn:e.CARDSID)},children:(0,k.jsx)(Nt,{src:`/close.svg`,alt:``,"aria-hidden":`true`})})]})}),A?t?W?(0,k.jsx)(Y,{systemTheme:H,backgroundUrl:H.background_url,cardLayout:je,attributes:V,unitItem:W,onUpdateMetadata:Fe}):(0,k.jsx)(X,{$theme:H,children:`Unit not found in current scene.`}):(0,k.jsx)(X,{$theme:H,children:`No unit id supplied in URL.`}):(0,k.jsx)(X,{$theme:H,children:`Loading card…`})]}),(0,k.jsxs)(Z,{$theme:H,$open:j,children:[(0,k.jsxs)(Zt,{children:[(0,k.jsxs)(Qt,{children:[(0,k.jsx)($,{type:`button`,$theme:H,"aria-label":`Pin`,onClick:()=>{Ve()},children:(0,k.jsx)(v,{theme:U,text:`Pin/Unpin card popover`,children:(0,k.jsx)(fe,{size:16})})}),(0,k.jsx)($t,{type:`button`,$theme:H,$active:N,"aria-label":`Favorite`,disabled:!D,onClick:He,children:(0,k.jsx)(v,{theme:U,text:`Mark next save as favorite`,children:(0,k.jsx)(re,{size:16,fill:N?`currentColor`:`none`})})}),(0,k.jsx)($,{type:`button`,$theme:H,"aria-label":`CollectionSave`,disabled:!D,onClick:Ue,children:(0,k.jsx)(v,{theme:U,text:`Save current unit to Collection`,children:(0,k.jsx)(w,{size:16})})})]}),(0,k.jsxs)(Qt,{children:[(0,k.jsx)($,{type:`button`,$theme:H,"aria-label":`Import`,onClick:We,children:(0,k.jsx)(v,{theme:U,text:`Import unit data from JSON`,children:(0,k.jsx)(de,{size:16})})}),(0,k.jsx)($,{type:`button`,$theme:H,"aria-label":`Export`,onClick:Ge,children:(0,k.jsx)(v,{theme:U,text:`Export current unit data to clipboard`,children:(0,k.jsx)(b,{size:16})})}),(0,k.jsx)($,{type:`button`,$theme:H,"aria-label":`Card Help`,onClick:()=>{L(!0)},children:(0,k.jsx)(v,{theme:U,text:`Help with BIDs and dice notation`,children:(0,k.jsx)(T,{size:16})})})]})]}),(0,k.jsx)(Pt,{$theme:H,children:(0,k.jsx)(v,{theme:U,text:j?`Close collection tray`:`Open collection tray`,children:(0,k.jsx)(Q,{type:`button`,$theme:H,"aria-label":j?`Close Tray`:`Open Tray`,onClick:()=>{ve(e=>!e)},children:(0,k.jsx)(h,{size:22})})})}),(0,k.jsx)(Ft,{$theme:H,children:j?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(It,{$theme:H,children:(0,k.jsx)(Lt,{children:Be.length===0?(0,k.jsx)(X,{$theme:H,children:`No collection records found.`}):Be.map(e=>(0,k.jsxs)(Rt,{$theme:H,children:[(0,k.jsxs)(zt,{children:[(0,k.jsxs)(Bt,{$theme:H,children:[e.favorite?(0,k.jsx)(Vt,{children:`❤`}):null,(0,k.jsx)(Ht,{children:e.name})]}),(0,k.jsxs)(Ut,{children:[(0,k.jsx)(`span`,{children:`→`}),(0,k.jsx)(Gt,{$color:Re(e.author),children:e.author}),(0,k.jsxs)(Wt,{$theme:H,title:e.source===`local`?`Local`:e.source===`remote-user`?`My Cloud`:`Shared`,children:[e.source===`local`?(0,k.jsx)(E,{size:11}):null,e.source===`remote-user`?(0,k.jsx)(ue,{size:11}):null,e.source===`remote-shared`?(0,k.jsx)(he,{size:11}):null]})]})]}),(0,k.jsxs)(Kt,{children:[(0,k.jsx)(qt,{type:`button`,$theme:H,$variant:`import`,onClick:()=>{$e(e)},children:`Import`}),e.source===`remote-shared`?null:(0,k.jsx)(qt,{type:`button`,$theme:H,$variant:`delete`,onClick:()=>{et(e)},children:`X`})]})]},`${e.source}:${e.id}`))})}),(0,k.jsxs)(Jt,{children:[(0,k.jsx)(Yt,{$theme:H,type:`text`,value:M,placeholder:`Enter query...`,onChange:e=>{ye(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Qe())}}),(0,k.jsx)(Xt,{type:`button`,$theme:H,"aria-label":`Search`,onClick:Qe,children:(0,k.jsx)(me,{size:16})})]})]}):null})]}),Te?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(ln,{onClick:Ke}),(0,k.jsxs)(un,{$theme:H,onClick:e=>{e.stopPropagation()},children:[(0,k.jsx)(dn,{$theme:H,children:`Import Unit Data`}),(0,k.jsx)(en,{$theme:H,value:De,placeholder:`Paste exported unit JSON here`,onChange:e=>{R(e.target.value),z&&B(null)}}),z?(0,k.jsx)(rn,{$theme:H,children:z}):null,(0,k.jsxs)(fn,{children:[(0,k.jsx)(nn,{type:`button`,$theme:H,onClick:()=>{Ze()},children:`AI Template`}),(0,k.jsx)(tn,{type:`button`,$theme:H,onClick:Ke,children:`Cancel`}),(0,k.jsx)(tn,{type:`button`,$theme:H,$variant:`primary`,onClick:Je,children:`Import`})]})]})]}):null,Ee?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(ln,{onClick:()=>{L(!1)}}),(0,k.jsxs)(un,{$theme:H,onClick:e=>{e.stopPropagation()},children:[(0,k.jsx)(dn,{$theme:H,children:`Card Help`}),(0,k.jsxs)(an,{$theme:H,children:[(0,k.jsx)(on,{$theme:H,children:`Rollable Values`}),(0,k.jsxs)(sn,{children:[(0,k.jsx)(`li`,{children:`Right-click a value on the card to open the field menu.`}),(0,k.jsxs)(`li`,{children:[`The menu shows the field name and BID in brackets, like `,(0,k.jsx)(`strong`,{children:`[Z017]`}),`.`]}),(0,k.jsxs)(`li`,{children:[`For rollable fields, use that menu to choose `,(0,k.jsx)(`strong`,{children:`Edit value`}),`, `,(0,k.jsx)(`strong`,{children:`Roll with Advantage`}),`, or `,(0,k.jsx)(`strong`,{children:`Roll with Disadvantage`}),`.`]})]}),(0,k.jsx)(on,{$theme:H,children:`Dice Chips in Text`}),(0,k.jsxs)(sn,{children:[(0,k.jsx)(`li`,{children:`Wrap a formula in square brackets to create a clickable dice chip.`}),(0,k.jsx)(`li`,{children:`You can also use fl(floor) to round down or ce(ceil) to round up. Ex; [1d20+fl(@Strength/2)]`})]}),(0,k.jsx)(cn,{$theme:H,children:`Melee attack: [1d20+5] to hit.`}),(0,k.jsx)(on,{$theme:H,children:`Using Attributes in Formulas`}),(0,k.jsxs)(sn,{children:[(0,k.jsxs)(`li`,{children:[`Reference by BID with `,(0,k.jsx)(`strong`,{children:`@BID`}),`.`]}),(0,k.jsxs)(`li`,{children:[`Reference by attribute name with `,(0,k.jsx)(`strong`,{children:`@NAME`}),`. Swap spaces with underscores.`]})]}),(0,k.jsx)(cn,{$theme:H,children:`Damage: [2d8+@Z017]`}),(0,k.jsx)(cn,{$theme:H,children:`Damage: [2d8+@Strength]`})]}),(0,k.jsx)(fn,{children:(0,k.jsx)(tn,{type:`button`,$theme:H,$variant:`primary`,onClick:()=>{L(!1)},children:`Close`})})]})]}):null]})},{})})}));