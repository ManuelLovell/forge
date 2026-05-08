import{C as e,F as t,N as n,O as r,R as i,S as a,T as o,_ as s,b as c,g as l,o as u,s as d,t as f,w as p,y as m}from"./defaultgamesystem-CGk0_Y03.js";import{$ as h,A as g,B as _,C as v,D as y,Dt as ee,E as te,F as b,G as ne,H as re,I as x,J as S,K as C,L as ie,M as w,N as ae,O as T,P as oe,Q as se,R as E,T as D,U as ce,V as le,W as O,X as k,Y as ue,Z as A,_t as de,a as j,at as M,bt as N,ct as fe,dt as pe,et as me,ft as P,gt as he,h as F,ht as I,i as ge,it as L,j as R,k as _e,kt as z,lt as ve,mt as B,nt as ye,o as V,ot as H,pt as U,q as W,rt as be,s as xe,st as G,t as Se,tt as Ce,ut as we,v as Te,vt as Ee,xt as K,yt as De,z as Oe}from"./unitCollectionRemote-9SccuZzT.js";import{t as ke}from"./Translation-CUxziGjh.js";/* empty css               */var Ae=K(`book-marked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),je=K(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),Me=K(`cloudy`,[[`path`,{d:`M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z`,key:`44yre2`}],[`path`,{d:`M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61`,key:`leugyv`}]]),Ne=K(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),Pe=K(`hard-drive`,[[`line`,{x1:`22`,x2:`2`,y1:`12`,y2:`12`,key:`1y58io`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}],[`line`,{x1:`6`,x2:`6.01`,y1:`16`,y2:`16`,key:`sgf278`}],[`line`,{x1:`10`,x2:`10.01`,y1:`16`,y2:`16`,key:`1l4acy`}]]),Fe=K(`pin`,[[`path`,{d:`M12 17v5`,key:`bb1du9`}],[`path`,{d:`M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z`,key:`1nkz8b`}]]),Ie=K(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Le=K(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Re=K(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),ze=i(n(),1),q=i(t(),1);const Be=e=>{let t=[...Array.isArray(e)?e:[]].sort((e,t)=>e.row===t.row?e.col-t.col:e.row-t.row),n=[];return t.forEach(e=>{let t=n[n.length-1];if(!t||t.row!==e.row){n.push({row:e.row,items:[e]});return}t.items.push(e)}),{sorted:t,rows:n}};var J=o(),Ve=e=>`
    0 1px 1px ${s(e.background,.95)},
    0 0 2px ${s(e.background,.85)}
  `,He=d.div`
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
`,Ue=d.div`
  position: relative;
  z-index: 1;
`,We=d.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`,Y=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`,Ge=d(Y)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  height: calc(2 * 1.1em);
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100% !important;
`,Ke=d.input`
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
`,qe=d(d.div`
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
`,Je=d.div`
  color: ${e=>e.$theme.primary};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`,Ye=d.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?s(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?s(e.$theme.offset,.5):s(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>s(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?Ve(e.$theme):`none`};
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
`,Xe=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  height: 40px;
  box-sizing: border-box;
`,Ze=d.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`,Qe=d.span`
  color: ${e=>e.$theme.offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  margin-right: 4px;
  align-self: center;
`,$e=d.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?s(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?s(e.$theme.offset,.5):s(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>s(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?Ve(e.$theme):`none`};
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
`,et=d.select`
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
`,tt=d.div`
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
`,nt=d(tt)`
  border-style: solid;
  background: ${e=>s(e.$theme.primary,.75)};
  color: ${e=>s(e.$theme.offset,.96)};
  box-shadow: ${e=>`0 4px 14px ${s(e.$theme.background,.65)}`};
  text-shadow: ${e=>`1px 1px 0 ${s(e.$theme.background,.95)}`};
  font-weight: 700;
  font-style: italic;
`,rt=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
`,it=d.span`
  color: ${e=>s(e.$theme.primary,.92)};
  flex-shrink: 0;
`,at=d.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
`,ot=d.button`
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
`,st=d.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,ct=d.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,lt=d.div`
  flex: 1;
  min-width: 0;
`,ut=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 18px;
`,dt=d.div`
  width: 100%;
  height: 5px;
  background: ${e=>`linear-gradient(10deg, ${e.$theme.border||`white`}, rgba(255,255,255,0))`};
`,ft=d.div`
  width: 100%;
  height: ${e=>`${e.$heightPx}px`};
  border-radius: 8px;
  border: 1px solid ${e=>s(e.$theme.border,.9)};
  background: ${e=>s(e.$theme.background,.42)};
  overflow: hidden;
  box-sizing: border-box;
`,pt=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,mt=d.div`
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
`,ht=d.div`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${e=>e.$theme.border||`rgba(255,255,255,0.5)`};
`,gt=d.div`
  width: 100%;
  height: 10px;
  background: ${e=>`linear-gradient(to bottom, ${e.$theme.border||`rgba(255,255,255,0.2)`}, transparent)`};
`,_t=d.div`
  width: 100%;
  height: 2px;
  background: ${e=>e.$theme.border||`#222`};
  box-shadow: ${e=>`inset 0 1px 0 ${e.$theme.border||`#444`}, 0 1px 0 #000`};
`,vt=d.div`
  width: 100%;
  height: 6px;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6' preserveAspectRatio='none'%3E%3Cpolyline points='0,6 6,0 12,6 18,0 24,6' fill='none' stroke='${encodeURIComponent(e.$theme.border||`#ffffff`)}' stroke-width='1.5'/%3E%3C/svg%3E")`};
`,yt=d.div`
  width: 100%;
  height: 4px;
  background: ${e=>e.$theme.border||`white`};
  animation: flicker 1.2s infinite alternate;

  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 1; }
  }
`,bt=d.div`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`,xt=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${e=>s(e.$theme.border,.85)};
  padding-bottom: 4px;
  margin-bottom: 4px;
`,St=d.div`
  color: ${e=>e.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,Ct=d.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,wt=d.div`
  margin-bottom: 8px;
`,Tt=d.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`,Et=d.div`
  width: 20px;
  display: flex;
  justify-content: center;
`,Dt=d.div`
  flex: 1;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`,Ot=d.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,kt=d.input`
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
`,At=d.textarea`
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
`,jt=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`,Mt=d.button`
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
`,Nt=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Pt=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 9999;
`,Ft=d.div`
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
`,It=d.h3`
  margin: 0 0 12px;
  color: ${e=>s(e.$theme.primary,.98)};
  font-size: 16px;
`,Lt=d.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
`,Rt=d.span`
  color: ${e=>s(e.$theme.offset,.95)};
  font-size: 13px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
`,zt=d.button`
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
`,Bt=d.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`,Vt=d.div`
  flex: 1;
`,Ht=d.input`
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
`,Ut=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 8px;
`,Wt=d.span`
  color: ${e=>e.$theme.offset||f.theme_offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Gt=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: space-evenly;
  width: ${e=>e.$fullWidth?`100%`:`auto`};
`,Kt=d.input`
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
`,qt=d.button`
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
`,Jt=d.div`
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
`,Yt={sm:`14px`,md:`16px`,lg:`18px`},Xt={sm:`14px`,md:`16px`,lg:`18px`},Zt={sm:`14px`,md:`16px`,lg:`18px`},Qt={sm:`14px`,md:`16px`,lg:`18px`},$t=40,en={anchor:N,aperture:De,award:Ee,"battery-charging":he,book:B,calendar:P,clock:ve,"cloud-lightning":fe,compass:H,"dollar-sign":L,feather:me,eye:ye,heart:k,moon:S,music:W,shield:O,star:_,sun:Oe,target:x,users:ae,wind:R,zap:_e,drama:be,carrot:pe,bone:I,sword:E,swords:ie,axe:de,"bow-arrow":U,coins:G,wand:w,flower:h,skull:ce,castle:we,cross:M,"test-tube-diagonal":b,squirrel:le,snowflake:re,shell:ne,pickaxe:C,"heart-plus":A,"heart-crack":se,fan:Ce},tn=(e,t,n,r)=>{let i=typeof e==`number`?e:typeof e==`string`?Number(e):NaN;if(!Number.isFinite(i))return r;let a=Math.trunc(i);return Math.max(t,Math.min(n,a))},nn=(e,t=`center`)=>{if(typeof e!=`string`)return t;let n=e.trim().toLowerCase();return n===`left`||n===`center`||n===`right`?n:t},X=e=>String(e?.attr_bid??e?.bid??``).trim(),rn=e=>String(e?.attr_abbr??e?.abbr??``).trim(),Z=e=>String(e?.attr_name??e?.name??``).trim(),an=e=>String(e?.attr_type??e?.type??``).trim().toLowerCase(),on=e=>{let t=e?.attr_func??e?.func??``;return typeof t==`string`?t.trim():``},Q=e=>e?.attr_meta??e?.meta??{},$=(e,t)=>t&&e.find(e=>{let n=e,r=X(n)===t,i=String(n.id??``)===String(t);return r||i})||null,sn=(e,t)=>e?t===`abbr`?rn(e):t===`name`||!t||t===`text`?Z(e):``:``,cn=(e,t)=>t===`icon`?!0:sn(e,t).length>0,ln=(e,t,n,r=16)=>t===`icon`?(0,J.jsx)(en[String(n||``).trim().toLowerCase()]||_,{size:r,"aria-hidden":`true`}):sn(e,t),un=(e,t)=>Array.isArray(t)?t.filter(t=>!!$(e,t)):[],dn=(e,t)=>un(e,t).filter(t=>an($(e,t))===`bool`),fn=(e,t)=>{let n=$(e,t);return!n||an(n)!==`list`?`List Attribute`:Z(n)};const pn=({systemTheme:t,backgroundUrl:n,cardLayout:i,attributes:a,unitItem:o,onUpdateMetadata:s})=>{let[l,u]=(0,q.useState)({}),[d,f]=(0,q.useState)({}),[p,m]=(0,q.useState)(null),[h,_]=(0,q.useState)(null),v=(0,q.useRef)({}),y=(0,q.useRef)({}),{rows:te}=(0,q.useMemo)(()=>Be(i),[i]),b=(0,q.useMemo)(()=>{let e=o.metadata?.[c.UNIT_NAME];if(typeof e==`string`&&e.trim())return e;let t=o.text?.plainText;return typeof t==`string`&&t.trim()?t:typeof o.name==`string`&&o.name.trim()?o.name:`Unknown`},[o]),[ne,re]=(0,q.useState)(b);(0,q.useEffect)(()=>{re(b)},[b]);let x=async()=>{let e=ne.trim(),t=b.trim()||`Unknown`,n=e||t;re(n),n!==b&&await s({[c.UNIT_NAME]:n})},S=t=>`${e.EXTENSIONID}/${t}`,C=e=>{let t=o.metadata?.[S(e)];return t==null?``:typeof t==`string`?t:typeof t==`number`||typeof t==`boolean`?String(t):``},ie=e=>{let t=o.metadata?.[S(e)];if(typeof t==`boolean`)return t;if(typeof t==`number`)return t!==0;if(typeof t==`string`){let e=t.trim().toLowerCase();return e===`true`||e===`1`||e===`yes`||e===`on`}return!1},w=(e,t)=>l[e]??C(t),ae=e=>on(e).length>0,T=(0,q.useMemo)(()=>{let e={};for(let t of a){let n=X(t);if(!n)continue;let r=C(n).trim();if(!r)continue;let i=Number(r);Number.isFinite(i)&&(e[n]=i)}return e},[a,o.metadata]),oe=(0,q.useMemo)(()=>{let e={};for(let t of a){let n=t,r=X(n);if(!r)continue;let i=C(r).trim();if(!i)continue;let a=Number(i);if(!Number.isFinite(a))continue;let o=Z(n);o&&(e[o]=a);let s=rn(n);s&&(e[s]=a)}return e},[a,o.metadata]),se=e=>{let t=on(e);if(!t)return null;let n=xe(t,{bidValueMap:T,nameValueMap:oe,onMissingBid:`error`});return!n.valid||!n.notation?(z.warn(`[FORGE] Could not convert attr_func for ${X(e)||`unknown`}: ${n.error||`Unknown conversion error`}`),null):n.notation},E=async(e,t)=>{try{let n=await r.room.getMetadata(),i=(await r.party.getPlayers()).find(e=>e.id===o.createdUserId),a=await r.player.getId(),s=await r.player.getColor();await ee({notation:e,actionName:t,senderName:b,senderId:o.createdUserId||a||o.id,senderColor:i?.color||s||`#ffffff`},n)}catch(t){z.error(`Failed to send dice roll from CardLayoutRenderer`,e,t),z.log(e)}},D=async e=>{if(!e)return;let t=se(e);t&&await E(t,Z(e)||X(e)||`Roll`)},ce=e=>o.metadata?.[S(e)],le=(e,t)=>{let n=ce(e),r=n&&typeof n==`object`&&!Array.isArray(n)?n:null,i=Q(t)?.resource;return{current:r?Number(r.current??i?.defaultCurrent??0):Number(i?.defaultCurrent??0),max:r?Number(r.max??i?.defaultMax??0):Number(i?.defaultMax??0)}},O=async(e,t)=>{await s({[S(e)]:t})},k=e=>{let t=Q(e)?.derived?.formula,n=typeof t==`string`&&t.trim().length>0?t.trim():on(e);if(!n)return`-`;let r=xe(n,{bidValueMap:T,nameValueMap:oe,onMissingBid:`error`});if(!r.valid||!r.notation)return`-`;let i=r.notation.trim(),a=Number(i);if(!Number.isFinite(a))return i||`-`;let o=Number(Q(e)?.derived?.precision),s=Number.isFinite(o)?Math.max(0,Math.min(Math.trunc(o),8)):0,c=Q(e)?.derived?.displayMode,l=s>0?a.toFixed(s):String(a);return c===`percent`?`${l}%`:l},ue=/(\d+)d(\d+)([kd][hl]\d+|!)?/gi,A=(e,t)=>{let n=Array.from(e.matchAll(ue));if(n.length!==1)return null;let r=n[0],i=r[0]||``,a=r[1]||``,o=r[2]||``,s=r[3]||``,c=r.index;if(!i||!a||!o||typeof c!=`number`)return null;let l=Number(a);if(!Number.isFinite(l)||l!==1||s)return null;let u=`2d${o}${t===`advantage`?`kh1`:`kl1`}`;return`${e.slice(0,c)}${u}${e.slice(c+i.length)}`};(0,q.useEffect)(()=>()=>{Object.values(v.current).forEach(e=>{window.clearTimeout(e)})},[]);let de=e=>!!d[e],j=(e,t,n,r)=>{t&&m({draftKey:e,attribute:t,input:n,isRollable:r})},M=()=>{m(null)},N=e=>{_(e)},fe=()=>{_(null)};(0,q.useEffect)(()=>{if(!p&&!h)return;let e=e=>{e.key===`Escape`&&(m(null),_(null))};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[p,h]);let pe=async e=>{if(!h)return;let t=e===`normal`?h.notation:A(h.notation,e);if(!t)return;let n=e===`normal`?``:e===`advantage`?` (Advantage)`:` (Disadvantage)`;await E(t,`${h.actionName}${n}`)},me=(e,t)=>{f(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},P=e=>{f(t=>{let{[e]:n,...r}=t;return r})},he=(e,t)=>{let n=v.current[e];n&&window.clearTimeout(n),v.current[e]=window.setTimeout(()=>{y.current[e]=!0,me(e,t),delete v.current[e]},500)},F=e=>{let t=v.current[e];t&&(window.clearTimeout(t),delete v.current[e])},I=e=>y.current[e]?(delete y.current[e],!0):!1,ge=async(e,t)=>{await s({[S(e)]:t})},L=async(e,t)=>{await s({[S(e)]:t})},R=e=>{let t=o.metadata?.[S(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``}}):[]},_e=e=>{let t=o.metadata?.[S(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``,inUse:!!t.inUse}}):[]},ve=(e,t)=>{z.log(e,t)},B=e=>{e&&(e.style.height=`0px`,e.style.height=`${Math.max(e.scrollHeight,44)}px`)},ye=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=e[0],r=(e[1]||``).trim();if(!r)continue;let i=xe(r,{bidValueMap:T,nameValueMap:oe,onMissingBid:`error`});!i.valid||!i.notation||t.push({raw:n,notation:i.notation})}return t},V=async(e,t,n)=>{ve(`List metadata update`,{listType:n.listType,bid:e,reason:n.reason,entryId:n.entryId,field:n.field,entryCount:t.length,timestamp:Date.now()}),await s({[S(e)]:t})},H=e=>e===`dash`||e===`dashed`?(0,J.jsx)(ht,{$theme:t}):e===`shadow`?(0,J.jsx)(gt,{$theme:t}):e===`ridge`?(0,J.jsx)(_t,{$theme:t}):e===`zigzag`?(0,J.jsx)(vt,{$theme:t}):e===`pulse`?(0,J.jsx)(yt,{$theme:t}):(0,J.jsx)(dt,{$theme:t}),U=e=>{let n=e.type,r=(()=>n===`derived-value`||n===`enum-value`||n===`resource`?`text-value`:n===`column-derived`?`column-value`:n)(),i=e.styles||{},o=$(a,i.attributeId),s=nn(i.textAlign??i.align,`center`),c=i.stretch===!0;if(r===`line-break`)return(0,J.jsx)(Y,{$theme:t,$full:!0,children:H(i.styleDesign)},e.id);if(r===`line-spacer`)return(0,J.jsx)(ut,{$full:e.fullsize},e.id);if(r===`image`){let n=typeof i.imageUrl==`string`?i.imageUrl.trim():``,r=tn(i.imageCols,1,2,e.fullsize?2:1),a=tn(i.imageRows,1,6,1);return(0,J.jsx)(Y,{$theme:t,$full:r===2,children:(0,J.jsx)(ft,{$theme:t,$heightPx:$t*a,children:n?(0,J.jsx)(pt,{src:n,alt:`Card component`,loading:`lazy`}):(0,J.jsx)(mt,{$theme:t,children:`No image selected`})})},e.id)}if(r===`text`){let n=Yt[i.fontSize||`md`],r=cn(o,i.labelMode)?ln(o,i.labelMode,i.labelIcon,18):`Title Header`,a=`text:${e.id}:${X(o)||`none`}`;return(0,J.jsx)(Y,{$theme:t,$full:e.fullsize,onContextMenu:o?e=>{e.preventDefault(),j(a,o,null,!1)}:void 0,children:(0,J.jsx)(Je,{$theme:t,$fontSize:n,$weight:700,$stretch:c,$align:s,children:r})},e.id)}if(r===`text-value`){let n=Qt[i.fontSize||`md`],r=cn(o,i.labelMode),a=ln(o,i.labelMode,i.labelIcon,18),s=i.labelPosition===`right`?`right`:`left`,d=nn(i.textAlign??i.align,`center`),f=i.fontWeight===`bold`?700:400,p=i.fontStyle===`italic`?`italic`:`normal`,m=X(o),h=an(o),g=ae(o),_=`text-value:${e.id}:${m||`none`}`,v=g&&de(_),y;if(h===`derived`)y=(0,J.jsx)(nt,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,title:`Formula: ${Q(o)?.derived?.formula||on(o)||`Derived formula`}`,onContextMenu:o?e=>{e.preventDefault(),j(_,o,null,!1)}:void 0,children:k(o)});else if(h===`enum`){let e=Array.isArray(Q(o)?.enum?.options)?(Q(o)?.enum?.options||[]).map(e=>String(e||``).trim()).filter(e=>e.length>0):[];y=(0,J.jsx)(et,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,value:e.includes(m?C(m).trim():``)?C(m).trim():e[0]||``,disabled:!m,onContextMenu:o?e=>{e.preventDefault(),j(_,o,null,!1)}:void 0,onChange:m?async e=>{await O(m,e.target.value)}:void 0,children:e.length===0?(0,J.jsx)(`option`,{value:``,children:`No options`}):e.map(e=>(0,J.jsx)(`option`,{value:e,children:e},e))})}else if(h===`resource`){let e=Q(o)?.resource,r=typeof e?.showPips==`boolean`?e.showPips:!!i.showPips,a=m?le(m,o):{current:0,max:0},s=Number(e?.pipCap??a.max??0),h=Number.isFinite(s)?Math.max(0,Math.min(Math.round(s),15)):0;if(r&&h>0)y=(0,J.jsx)(at,{onContextMenu:o?e=>{e.preventDefault(),j(_,o,null,!1)}:void 0,children:Array.from({length:h}).map((e,n)=>(0,J.jsx)(ot,{$theme:t,$filled:n<Math.max(0,Math.min(a.current,h)),type:`button`,disabled:!m,onClick:m?async()=>{let e=Math.max(0,Math.min(a.current,h));await O(m,{current:n+1===e?n:n+1,max:a.max})}:void 0},`text-resource-pip-${n}`))});else if(r)y=(0,J.jsx)(tt,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,children:`-`});else{let e=`${_}:current`,r=`${_}:max`;y=(0,J.jsxs)(rt,{children:[(0,J.jsx)($e,{$theme:t,$fontSize:n,$align:`center`,$weight:f,$fontStyle:p,$stretch:c,type:`text`,value:l[e]??String(a.current),onChange:t=>{let n=t.target.value;u(t=>({...t,[e]:n}))},onBlur:async t=>{if(!m)return;let n=Number(t.target.value);await O(m,{current:Number.isFinite(n)?n:a.current,max:a.max}),u(t=>{let{[e]:n,...r}=t;return r})},placeholder:`0`}),(0,J.jsx)(it,{$theme:t,children:`/`}),(0,J.jsx)($e,{$theme:t,$fontSize:n,$align:`center`,$weight:f,$fontStyle:p,$stretch:c,type:`text`,value:l[r]??String(a.max),onChange:e=>{let t=e.target.value;u(e=>({...e,[r]:t}))},onBlur:async e=>{if(!m)return;let t=Number(e.target.value),n=Number.isFinite(t)?t:a.max;await O(m,{current:a.current,max:n}),u(e=>{let{[r]:t,...n}=e;return n})},placeholder:`0`})]})}}else y=(0,J.jsx)($e,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,$isRollable:g,type:`text`,readOnly:g&&!v,value:m?w(_,m):``,onChange:g&&!v?void 0:e=>{if(!m)return;let t=e.target.value;u(e=>({...e,[_]:t}))},onBlur:g&&!v?void 0:async e=>{if(!m)return;let t=e.target.value;await ge(m,t),u(e=>{let{[_]:t,...n}=e;return n}),g&&P(_)},onClick:g?()=>{v||I(_)||D(o)}:void 0,onContextMenu:o?e=>{e.preventDefault(),j(_,o,e.currentTarget,g)}:void 0,onTouchStart:g?e=>{v||he(_,e.currentTarget)}:void 0,onTouchEnd:g?()=>{F(_)}:void 0,onTouchCancel:g?()=>{F(_)}:void 0,onKeyDown:e=>{if(g&&!v&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),D(o);return}(v||!g)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`});let ee=r?(0,J.jsx)(Qe,{$theme:t,$fontSize:n,$stretch:c,$weight:f,$fontStyle:p,children:a}):null;return(0,J.jsx)(Xe,{$full:e.fullsize,children:(0,J.jsxs)(Ze,{children:[s===`left`?ee:null,y,s===`right`?ee:null]})},e.id)}if(r===`text-checkbox`){let n=Xt[i.fontSize||`md`],r=e.fullsize?6:3,o=Math.max(1,Math.min(r,Number(i.checkboxCount||1))),s=[...dn(a,i.bidList)].slice(0,o);for(;s.length<o;)s.push(``);let l=$(a,s[0]||i.attributeId),u=cn(l,i.labelMode),d=ln(l,i.labelMode,i.labelIcon,16),f=i.inputType===`slider`,p=i.labelPosition===`right`?`right`:`left`,m=i.fontWeight===`bold`?700:400,h=i.fontStyle===`italic`?`italic`:`normal`,g=u?(0,J.jsx)(Wt,{$theme:t,$fontSize:n,$stretch:c,$weight:m,$fontStyle:h,children:d}):null;return(0,J.jsx)(Y,{$theme:t,$full:e.fullsize,children:(0,J.jsxs)(Ut,{children:[p===`left`?g:null,(0,J.jsx)(Gt,{$fullWidth:!g,children:Array.from({length:o}).map((n,r)=>{let i=s[r]||``,o=i?ie(i):!1,c=i?$(a,i):null,l=`text-checkbox:${e.id}:${i||`index-${r}`}`;return f?(0,J.jsx)(qt,{type:`button`,$theme:t,$active:o,disabled:!i,onClick:i?()=>{L(i,!o)}:void 0,onContextMenu:c?e=>{e.preventDefault(),j(l,c,null,!1)}:void 0,children:(0,J.jsx)(Jt,{$theme:t,$active:o})},`slider-${r}`):(0,J.jsx)(Kt,{$theme:t,type:`checkbox`,disabled:!i,checked:o,onChange:i?e=>{L(i,e.target.checked)}:void 0,onContextMenu:c?e=>{e.preventDefault(),j(l,c,null,!1)}:void 0},`checkbox-${r}`)})}),p===`right`?g:null]})},e.id)}if(r===`column-text`){let n=Zt[i.fontSize||`md`],r=un(a,i.bidList),o=i.fontWeight===`bold`?700:400,s=i.fontStyle===`italic`?`italic`:`normal`;return r.length===0?null:(0,J.jsx)(Y,{$theme:t,$full:e.fullsize,children:(0,J.jsx)(st,{children:r.map(r=>{let l=$(a,r),u=i.labelMode||`name`,d=cn(l,u),f=ln(l,u,i.labelIcon,16);return d?(0,J.jsx)(ct,{children:(0,J.jsx)(qe,{$theme:t,$fontSize:n,$stretch:c,$align:`center`,$weight:o,$fontStyle:s,onContextMenu:l?t=>{t.preventDefault(),j(`column-text:${e.id}:${r}`,l,null,!1)}:void 0,children:f})},r):null})})},e.id)}if(r===`column-value`){let n=Zt[i.fontSize||`md`],r=un(a,i.bidList),o=i.fontWeight===`bold`?700:400,s=i.fontStyle===`italic`?`italic`:`normal`;return r.length===0?null:(0,J.jsx)(Y,{$theme:t,$full:e.fullsize,children:(0,J.jsx)(st,{children:r.map(r=>{let d=$(a,r),f=an(d),p=ae(d),m=`column-value:${e.id}:${r}`,h=p&&de(m),g;if(f===`derived`)g=(0,J.jsx)(nt,{$theme:t,$fontSize:n,$align:`center`,$weight:o,$fontStyle:s,$stretch:c,title:`Formula: ${Q(d)?.derived?.formula||on(d)||`Derived formula`}`,onContextMenu:d?e=>{e.preventDefault(),j(m,d,null,!1)}:void 0,children:k(d)});else if(f===`enum`){let e=Array.isArray(Q(d)?.enum?.options)?(Q(d)?.enum?.options||[]).map(e=>String(e||``).trim()).filter(e=>e.length>0):[],i=C(r).trim();g=(0,J.jsx)(et,{$theme:t,$fontSize:n,$align:`center`,$weight:o,$fontStyle:s,$stretch:c,value:e.includes(i)?i:e[0]||``,onContextMenu:d?e=>{e.preventDefault(),j(m,d,null,!1)}:void 0,onChange:async e=>{await O(r,e.target.value)},children:e.length===0?(0,J.jsx)(`option`,{value:``,children:`No options`}):e.map(e=>(0,J.jsx)(`option`,{value:e,children:e},e))})}else if(f===`resource`){let e=Q(d)?.resource,a=typeof e?.showPips==`boolean`?e.showPips:!!i.showPips,f=le(r,d),p=Number(e?.pipCap??f.max??0),h=Number.isFinite(p)?Math.max(0,Math.min(Math.round(p),15)):0;if(a&&h>0)g=(0,J.jsx)(at,{onContextMenu:d?e=>{e.preventDefault(),j(m,d,null,!1)}:void 0,children:Array.from({length:h}).map((e,n)=>(0,J.jsx)(ot,{$theme:t,$filled:n<Math.max(0,Math.min(f.current,h)),type:`button`,onClick:async()=>{let e=Math.max(0,Math.min(f.current,h));await O(r,{current:n+1===e?n:n+1,max:f.max})}},`column-resource-pip-${r}-${n}`))});else if(a)g=(0,J.jsx)(tt,{$theme:t,$fontSize:n,$align:`center`,$weight:o,$fontStyle:s,$stretch:c,children:`-`});else{let e=`${m}:current`,i=`${m}:max`;g=(0,J.jsxs)(rt,{children:[(0,J.jsx)(Ye,{$theme:t,$fontSize:n,$align:`center`,value:l[e]??String(f.current),onChange:t=>{let n=t.target.value;u(t=>({...t,[e]:n}))},onBlur:async t=>{let n=Number(t.target.value);await O(r,{current:Number.isFinite(n)?n:f.current,max:f.max}),u(t=>{let{[e]:n,...r}=t;return r})}}),(0,J.jsx)(it,{$theme:t,children:`/`}),(0,J.jsx)(Ye,{$theme:t,$fontSize:n,$align:`center`,value:l[i]??String(f.max),onChange:e=>{let t=e.target.value;u(e=>({...e,[i]:t}))},onBlur:async e=>{let t=Number(e.target.value),n=Number.isFinite(t)?t:f.max;await O(r,{current:f.current,max:n}),u(e=>{let{[i]:t,...n}=e;return n})}})]})}}else g=(0,J.jsx)(Ye,{$theme:t,$fontSize:n,$align:`center`,$isRollable:p,readOnly:p&&!h,value:w(m,r),onChange:p&&!h?void 0:e=>{let t=e.target.value;u(e=>({...e,[m]:t}))},onBlur:p&&!h?void 0:async e=>{let t=e.target.value;await ge(r,t),u(e=>{let{[m]:t,...n}=e;return n}),p&&P(m)},onClick:p?()=>{h||I(m)||D(d)}:void 0,onContextMenu:d?e=>{e.preventDefault(),j(m,d,e.currentTarget,p)}:void 0,onTouchStart:p?e=>{h||he(m,e.currentTarget)}:void 0,onTouchEnd:p?()=>{F(m)}:void 0,onTouchCancel:p?()=>{F(m)}:void 0,onKeyDown:e=>{if(p&&!h&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),D(d);return}(h||!p)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`});return(0,J.jsx)(lt,{children:g},r)})})},e.id)}if(r===`action-list`){let n=$(a,i.attributeId||i.bidList?.[0]),r=X(n),o=fn(a,i.attributeId||i.bidList?.[0]),s=r?R(r):[];return(0,J.jsx)(Y,{$theme:t,$full:e.fullsize,children:(0,J.jsxs)(bt,{$theme:t,children:[(0,J.jsxs)(xt,{$theme:t,children:[(0,J.jsx)(St,{$theme:t,onContextMenu:n?t=>{t.preventDefault(),j(`action-list:${e.id}:${r||`none`}`,n,null,!1)}:void 0,children:o}),(0,J.jsx)(Ct,{type:`button`,$theme:t,"aria-label":`Add Action`,onClick:async()=>{r&&await V(r,[...s,{id:crypto.randomUUID(),name:``,description:``}],{listType:`action`,reason:`add`})},children:(0,J.jsx)(Ie,{size:14})})]}),s.map((n,i)=>(0,J.jsxs)(wt,{children:[(0,J.jsxs)(Bt,{children:[(0,J.jsx)(Vt,{children:(0,J.jsx)(kt,{$theme:t,type:`text`,defaultValue:n.name,placeholder:`Action Name`,onBlur:async e=>{if(!r)return;let t=e.target.value;await V(r,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,J.jsx)(Ot,{type:`button`,$theme:t,"aria-label":`Delete Action`,onClick:async()=>{r&&await V(r,s.filter(e=>e.id!==n.id),{listType:`action`,reason:`delete`,entryId:n.id})},children:(0,J.jsx)(g,{size:14})})]}),(()=>{let e=ye(n.description);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(At,{$theme:t,defaultValue:n.description,ref:B,placeholder:`Action Description`,onInput:e=>{B(e.currentTarget)},onBlur:async e=>{if(!r)return;let t=e.target.value;await V(r,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`description`})}}),e.length>0?(0,J.jsx)(jt,{children:e.map((e,r)=>(0,J.jsx)(Mt,{type:`button`,$theme:t,onClick:()=>{E(e.notation,n.name||`Action`)},onContextMenu:t=>{t.preventDefault(),N({notation:e.notation,actionName:n.name||`Action`,title:n.name||`Action Roll`})},title:e.notation,children:e.notation},`${n.id}-action-inline-${r}`))}):null]})})()]},n.id||`${e.id}-action-${i}`))]})},e.id)}if(r===`item-list`){let n=$(a,i.attributeId||i.bidList?.[0]),r=X(n),o=fn(a,i.attributeId||i.bidList?.[0]),s=r?_e(r):[];return(0,J.jsx)(Y,{$theme:t,$full:e.fullsize,children:(0,J.jsxs)(bt,{$theme:t,children:[(0,J.jsxs)(xt,{$theme:t,children:[(0,J.jsx)(St,{$theme:t,onContextMenu:n?t=>{t.preventDefault(),j(`item-list:${e.id}:${r||`none`}`,n,null,!1)}:void 0,children:o}),(0,J.jsx)(Ct,{type:`button`,$theme:t,"aria-label":`Add Item`,onClick:async()=>{r&&await V(r,[...s,{id:crypto.randomUUID(),name:``,description:``,inUse:!1}],{listType:`item`,reason:`add`})},children:(0,J.jsx)(Ie,{size:14})})]}),s.map((n,i)=>(0,J.jsxs)(wt,{children:[(0,J.jsxs)(Tt,{children:[(0,J.jsx)(Et,{children:(0,J.jsx)(Ht,{$theme:t,type:`checkbox`,defaultChecked:n.inUse,onBlur:async e=>{if(!r)return;let t=e.target.checked;await V(r,s.map(e=>e.id===n.id?{...e,inUse:t}:e),{listType:`item`,reason:`toggle-save`,entryId:n.id,field:`inUse`})}})}),(0,J.jsx)(Dt,{$theme:t,children:(0,J.jsx)(kt,{$theme:t,type:`text`,defaultValue:n.name,placeholder:`Item Name`,onBlur:async e=>{if(!r)return;let t=e.target.value;await V(r,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,J.jsx)(Ot,{type:`button`,$theme:t,"aria-label":`Delete Item`,onClick:async()=>{r&&await V(r,s.filter(e=>e.id!==n.id),{listType:`item`,reason:`delete`,entryId:n.id})},children:(0,J.jsx)(g,{size:14})})]}),(()=>{let e=ye(n.description);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(At,{$theme:t,defaultValue:n.description,ref:B,placeholder:`Item Description`,onInput:e=>{B(e.currentTarget)},onBlur:async e=>{if(!r)return;let t=e.target.value;await V(r,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`description`})}}),e.length>0?(0,J.jsx)(jt,{children:e.map((e,r)=>(0,J.jsx)(Mt,{type:`button`,$theme:t,onClick:()=>{E(e.notation,n.name||`Item`)},onContextMenu:t=>{t.preventDefault(),N({notation:e.notation,actionName:n.name||`Item`,title:n.name||`Item Roll`})},title:e.notation,children:e.notation},`${n.id}-item-inline-${r}`))}):null]})})()]},n.id||`${e.id}-item-${i}`))]})},e.id)}return null};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(He,{$theme:t,$backgroundUrl:n,children:(0,J.jsxs)(Ue,{children:[(0,J.jsx)(We,{children:(0,J.jsx)(Ge,{$theme:t,children:(0,J.jsx)(Ke,{$theme:t,value:ne,onChange:e=>{re(e.target.value)},onBlur:()=>{x()},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},"aria-label":`Unit Name`})})}),te.map(e=>(0,J.jsx)(We,{children:e.items.map(e=>U(e))},`row-${e.row}`))]})}),p?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Pt,{onClick:M}),(0,J.jsxs)(Ft,{$theme:t,onClick:e=>e.stopPropagation(),children:[(0,J.jsxs)(Lt,{children:[(0,J.jsx)(It,{$theme:t,children:Z(p.attribute)||`Attribute`}),(0,J.jsxs)(Rt,{$theme:t,children:[`[`,X(p.attribute),`]`]})]}),(0,J.jsxs)(Nt,{children:[p.isRollable?(0,J.jsx)(zt,{type:`button`,$theme:t,onClick:()=>{M(),me(p.draftKey,p.input)},children:`Edit value`}):null,(()=>{if(!p.isRollable)return null;let e=se(p.attribute);if(!e)return null;let n=A(e,`advantage`),r=A(e,`disadvantage`);return!n||!r?null:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(zt,{type:`button`,$theme:t,onClick:()=>{M(),E(n,`${Z(p.attribute)||X(p.attribute)||`Roll`} (Advantage)`)},children:`Roll with Advantage`}),(0,J.jsx)(zt,{type:`button`,$theme:t,onClick:()=>{M(),E(r,`${Z(p.attribute)||X(p.attribute)||`Roll`} (Disadvantage)`)},children:`Roll with Disadvantage`})]})})()]})]})]}):null,h?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Pt,{onClick:fe}),(0,J.jsxs)(Ft,{$theme:t,onClick:e=>e.stopPropagation(),children:[(0,J.jsxs)(Lt,{children:[(0,J.jsx)(It,{$theme:t,children:h.title}),(0,J.jsxs)(Rt,{$theme:t,children:[`[`,h.notation,`]`]})]}),(0,J.jsx)(Nt,{children:(()=>{let e=A(h.notation,`advantage`),n=A(h.notation,`disadvantage`);return!e||!n?null:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(zt,{type:`button`,$theme:t,onClick:()=>{fe(),pe(`advantage`)},children:`Roll with Advantage`}),(0,J.jsx)(zt,{type:`button`,$theme:t,onClick:()=>{fe(),pe(`disadvantage`)},children:`Roll with Disadvantage`})]})})()})]})]}):null]})};var mn={SNAPSHOT_PUBLIC_ID:`${e.EXTENSIONID}/SnapshotPublicId`},hn={primary:f.theme_primary,offset:f.theme_offset,background:f.theme_background,border:f.theme_border,background_url:f.background_url},gn=d.div`
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
`,_n=d.div`
  height: 100%;
  overflow: hidden;
  padding: 40px 4px 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
`,vn=d.p`
  margin: 0;
  color: ${e=>e.$theme.primary};
  text-align: center;
  align-content: center;
  font-weight: 600;
  font-size: 24px;
`,yn=d.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: min(calc(100% - 16px), 350px);
  z-index: 10;
`,bn=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`,xn=d.select`
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
`,Sn=d.button`
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
`,Cn=d.img`
  width: 28px;
  height: 28px;
  display: block;
`,wn=d.div`
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
`,Tn=d.div`
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
`,En=d.button`
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
`,Dn=d.div`
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
`,On=d.div`
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
`,kn=d.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,An=d.div`
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
`,jn=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,Mn=d.div`
  color: ${e=>e.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,Nn=d.span`
  font-size: 12px;
  line-height: 1;
`,Pn=d.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Fn=d.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`,In=d.span`
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
`,Ln=d.span`
  color: ${e=>e.$color};
`,Rn=d.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,zn=d.button`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>e.$variant===`import`?s(e.$theme.offset,.45):s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`,Bn=d.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Vn=d.input`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`,Hn=d.button`
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
`,Un=d.div`
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
`,Wn=d.div`
  display: inline-flex;
  justify-content: space-between;
  width: 40%;
  pointer-events: auto;
`,Gn=d.button`
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
`,Kn=d(Gn)`
  background: ${e=>e.$active?s(e.$theme.offset,.45):s(e.$theme.background,.9)};

  &:disabled {
    background: ${e=>s(e.$theme.background,.9)};
  }
`,qn=d.textarea`
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
`,Jn=d.button`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 8px;
  background: ${e=>e.$variant===`primary`?s(e.$theme.offset,.5):s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 6px 10px;
  cursor: pointer;
`,Yn=d(Jn)`
  margin-right: auto;
`,Xn=d.div`
  margin-top: 8px;
  color: ${e=>s(e.$theme.offset,.95)};
  font-size: 12px;
`,Zn=d.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${e=>s(e.$theme.primary,.92)};
  font-size: 12px;
  line-height: 1.45;
`,Qn=d.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.$theme.primary};
`,$n=d.ul`
  margin: 0;
  padding-left: 16px;
`,er=d.code`
  display: block;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid ${e=>s(e.$theme.border,.7)};
  background: ${e=>s(e.$theme.background,.82)};
  color: ${e=>e.$theme.primary};
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
  white-space: pre-wrap;
`,tr=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,nr=d.div`
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
`,rr=d.h3`
  color: ${e=>e.$theme.primary};
  margin: 0 0 15px 0;
  font-size: 18px;
`,ir=d.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
`,ar=()=>{let e=new URLSearchParams(window.location.search).get(`unitid`);return e&&e.split(`,`)[0]?.trim()||null},or=()=>{let e=new URLSearchParams(window.location.search).get(`pinned`);if(!e)return!1;let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`},sr=`POP_${e.CARDSID}`,cr=(e,t)=>{let n=new URLSearchParams;return n.set(`unitid`,e),t&&n.set(`pinned`,`true`),`/pages/forgecard.html?${n.toString()}`},lr=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},ur=e=>{if(e===!0)return!0;if(typeof e==`string`){let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`}return typeof e==`number`?e===1:!1};ze.createRoot(document.getElementById(`root`)).render((0,J.jsx)(q.StrictMode,{children:(0,J.jsx)(p,{children:(0,J.jsx)(()=>{let{t}=ke(),[n,i]=(0,q.useState)(()=>ar()),a=(0,q.useMemo)(()=>or(),[]),[o,s]=(0,q.useState)({metadata:{},items:[]}),[d,p]=(0,q.useState)(null),[h,g]=(0,q.useState)(null),[ee,b]=(0,q.useState)(null),[ne,re]=(0,q.useState)(null),[x,S]=(0,q.useState)(!1),[C,ie]=(0,q.useState)(!1),[w,ae]=(0,q.useState)(!1),[se,E]=(0,q.useState)(``),[ce,le]=(0,q.useState)(``),[O,k]=(0,q.useState)(!1),[A,de]=(0,q.useState)([]),[M,N]=(0,q.useState)([]),[fe,pe]=(0,q.useState)(!1),[me,P]=(0,q.useState)(!1),[he,I]=(0,q.useState)(``),[L,R]=(0,q.useState)(null),[_e,ve]=(0,q.useState)(!1),B=e=>{let t=e[m.ENABLE_CONSOLE_LOG];typeof t==`boolean`&&z.setEnabled(t)},ye=(0,q.useMemo)(()=>h||f.card_layout,[h]),H=(0,q.useMemo)(()=>ee||f.attributes,[ee]),U=(0,q.useMemo)(()=>d||hn,[d]),W=(0,q.useMemo)(()=>l(U.primary,U.offset,U.background,U.border,U.background_url),[U]);(0,q.useEffect)(()=>{let e=!1;return(async()=>{try{await F()}catch(e){z.log(`Auth hydration failed in card iframe`,e)}finally{e||ve(!0)}})(),()=>{e=!0}},[]),(0,q.useEffect)(()=>{let e=!0,t=async t=>{let n=t[mn.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(p(null),g(null),b(null));return}let{data:r,error:i}=await u.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(i){e&&(p(null),g(null),b(null));return}let a=Array.isArray(r)?r[0]:r;if(!a||typeof a!=`object`){e&&(p(null),g(null),b(null));return}let o=a,s=lr(o.card_layout),c=lr(o.attributes);if(typeof o.theme_primary!=`string`||typeof o.theme_offset!=`string`||typeof o.theme_background!=`string`||typeof o.theme_border!=`string`||!Array.isArray(s)||!Array.isArray(c)){e&&(p(null),g(null),b(null));return}e&&(p({primary:o.theme_primary,offset:o.theme_offset,background:o.theme_background,border:o.theme_border,background_url:typeof o.background_url==`string`?o.background_url:``}),g(s),b(c))};(async()=>{let[n,i,a,o,c]=await Promise.all([r.scene.getMetadata(),r.scene.items.getItems(),r.room.getMetadata(),r.player.getId(),r.player.getRole()]);e&&(B(a),s({metadata:n,items:i}),await t(a),re(o),S(String(c||``).toUpperCase()===`GM`),ie(!0))})();let n=r.scene.onMetadataChange(t=>{e&&s(e=>({...e,metadata:t}))}),i=r.room.onMetadataChange(n=>{e&&(t(n),B(n))}),a=r.scene.items.onChange(t=>{e&&s(e=>({...e,items:t}))});return()=>{e=!1,n(),i(),a()}},[]);let be=e=>{let n=e.metadata?.[c.UNIT_NAME];if(typeof n==`string`&&n.trim())return n;let r=e.text?.plainText;return typeof r==`string`&&r.trim()?r:typeof e.name==`string`&&e.name.trim()?e.name:t(`card.unknownUnit`)},xe=(0,q.useMemo)(()=>o.items.filter(e=>ur(e.metadata?.[c.FABRICATED])).filter(e=>x||e.createdUserId===ne).filter(e=>e.id!==n).map(e=>({id:e.id,name:be(e)})).sort((e,t)=>e.name.localeCompare(t.name)),[o.items,n,x,ne]),G=(0,q.useMemo)(()=>n&&o.items.find(e=>e.id===n)||null,[o.items,n]),Ce=async()=>n&&(await r.scene.items.getItems()).find(e=>e.id===n)||null,we=async e=>{G&&(await r.scene.items.updateItems([G.id],t=>{let n={...t[0].metadata||{}};Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),t[0].metadata=n}),s(t=>({...t,items:t.items.map(t=>{if(t.id!==G.id)return t;let n={...t.metadata||{}};return Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),{...t,metadata:n}})})))},Ee=async t=>{if(!G)return;let n=[c.FABRICATED,c.INITIATIVE,c.ON_LIST,c.IN_PARTY];await r.scene.items.updateItems([G.id],r=>{let i=r[0].metadata,a={},o={};for(let[t,r]of Object.entries(i))t.startsWith(`${e.EXTENSIONID}/`)||(a[t]=r),n.includes(t)&&(o[t]=r);r[0].metadata={...a,...t,...o}}),s(r=>({...r,items:r.items.map(r=>{if(r.id!==G.id)return r;let i={},a={};for(let[t,o]of Object.entries(r.metadata||{}))t.startsWith(`${e.EXTENSIONID}/`)||(i[t]=o),n.includes(t)&&(a[t]=o);return{...r,metadata:{...i,...t,...a}}})}))},K=async()=>{de(await te())},De=e=>{let t=e.trim(),n=t?t[0].toUpperCase():`A`;return`hsl(${Math.max(0,Math.min(25,n.charCodeAt(0)-65))/26*360}, 70%, 65%)`},Oe=async e=>{let[t,n]=await Promise.all([j(e),Te()?ge(e):Promise.resolve([])]);return[...n.map(e=>({...e,source:`remote-user`})),...t.map(e=>({...e,source:`remote-shared`}))]},Ie=(0,q.useMemo)(()=>{let e=ce.trim().toLowerCase(),t={local:0,"remote-user":1,"remote-shared":2},n=(e,n)=>t[e.source]===t[n.source]?e.favorite===n.favorite?e.name.localeCompare(n.name):e.favorite?-1:1:t[e.source]-t[n.source],r=[...A].sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);if(!e)return r.filter(e=>e.favorite).map(e=>({...e,source:`local`}));let i=r.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),a=M.filter(e=>e.source===`remote-user`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),o=M.filter(e=>e.source===`remote-shared`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e));return[...i.map(e=>({...e,source:`local`})),...a,...o].sort(n)},[A,M,ce]),ze=async()=>{if(!n){await r.notification.show(t(`card.noUnitSelectedToPin`),`ERROR`);return}let i=await r.viewport.getWidth(),o=await r.viewport.getHeight(),s=o>800?700:o-100;if(!a){await r.popover.open({id:sr,url:cr(n,!0),height:400,width:350,anchorPosition:{top:50,left:i-70},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},transformOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},hidePaper:!0,disableClickAway:!0}),await r.popover.close(e.CARDSID);return}await r.popover.open({id:e.CARDSID,url:cr(n,!1),height:s,width:350,anchorPosition:{left:i/2,top:o/2},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`CENTER`},transformOrigin:{vertical:`CENTER`,horizontal:`CENTER`},hidePaper:!0,disableClickAway:!0}),await r.popover.close(sr)},Be=()=>{x&&k(e=>!e)},Ve=async()=>{if(!x)return;let e=await Ce();if(!e){await r.notification.show(t(`card.noUnitSelectedToSave`),`ERROR`);return}_e||(await F(),ve(!0));try{let n=(await r.player.getName()).trim(),i=Te()?await V(e.metadata,n,O):await y(e.metadata,n,O);await K();let a=Te()?t(`card.collectionTargetOnline`):t(`card.collectionTargetLocal`);await r.notification.show(t(i===`created`?`card.unitSavedToTarget`:`card.unitUpdatedInTarget`,{target:a}))}catch(e){z.log(`Collection save failed`,e),await r.notification.show(t(`card.couldNotSaveToCollection`),`ERROR`)}},He=async()=>{if(!await Ce()){await r.notification.show(t(`card.noUnitSelectedToImportInto`),`ERROR`);return}R(null),I(``),pe(!0)},Ue=async()=>{let e=await Ce();if(!e){await r.notification.show(t(`card.noUnitSelectedToExport`),`ERROR`);return}try{let n=D(e.metadata),i=n[c.UNIT_NAME],a=typeof i==`string`?i.trim():``;if(!a){await r.notification.show(t(`card.unitMissingValidName`),`ERROR`);return}let o={name:a,author:(await r.player.getName()).trim()||t(`card.unknownAuthor`),metadata:n};await navigator.clipboard.writeText(JSON.stringify(o,null,2)),await r.notification.show(t(`card.unitDataCopied`))}catch(e){z.log(`Unit export failed`,e),await r.notification.show(t(`card.couldNotCopyUnitData`),`ERROR`)}},We=()=>{pe(!1),R(null),I(``)},Y=e=>{let n=JSON.parse(e);if(!n||typeof n!=`object`||Array.isArray(n))throw Error(t(`card.importDataMustBeJsonObject`));let r=n,i=r.metadata&&typeof r.metadata==`object`?r.metadata:n;if(!i||typeof i!=`object`||Array.isArray(i))throw Error(t(`card.importDataMustIncludeMetadata`));let a=D(i),o=a[c.UNIT_NAME];if(!(typeof o==`string`&&o.trim()))throw Error(t(`card.importedMetadataMissingName`));return a},Ge=async()=>{if(!await Ce()){R(t(`card.noUnitSelectedToImportInto`));return}let e=he.trim();if(!e){R(t(`card.pasteJsonBeforeImport`));return}try{await Ee(Y(e)),k(!1),We(),await r.notification.show(t(`card.unitDataImported`))}catch(e){R(e instanceof Error?e.message:t(`card.importFailed`))}},Ke=(e,n)=>{let r=(e||``).trim().toLowerCase();if(r===`numb`||r===`derived`)return 0;if(r===`bool`)return!1;if(r===`enum`)return``;if(r===`resource`)return{current:0,max:0};if(r===`list`){let e=n?.firstNumericBid?`@${n.firstNumericBid}`:`@BID`;return[{id:`example-list-001`,name:t(`card.aiExampleListEntryName`),description:t(`card.aiExampleListEntryDescription`,{bidRef:e})}]}return``},qe=()=>{let n=H.find(e=>e.attr_type===`numb`)?.attr_bid,r=H.find(e=>e.attr_type===`list`)||null,i=H.map(t=>({bid:t.attr_bid,name:t.attr_name,type:t.attr_type,metadataKey:`${e.EXTENSIONID}/${t.attr_bid}`})),a={[c.UNIT_NAME]:t(`card.aiExampleUnitName`)};for(let t of H)a[`${e.EXTENSIONID}/${t.attr_bid}`]=Ke(t.attr_type,{firstNumericBid:n});let o={id:`example-list-001`,name:t(`card.aiExampleActionName`),description:t(`card.aiExampleActionDescription`,{bidRef:n?`@${n}`:`@BID`})},s={id:`example-item-001`,name:t(`card.aiExampleItemName`),description:t(`card.aiExampleItemDescription`),inUse:!1},l=JSON.stringify(i,null,2),u=JSON.stringify(a,null,2),d=JSON.stringify(o,null,2),f=JSON.stringify(s,null,2),p=r?`${e.EXTENSIONID}/${r.attr_bid}`:`${e.EXTENSIONID}/<LIST_BID>`;return[t(`card.aiPromptIntro`),``,t(`card.aiPromptRequirementsHeader`),t(`card.aiRequirement1`),t(`card.aiRequirement2`),t(`card.aiRequirement3`),t(`card.aiRequirement4`),t(`card.aiRequirement5`),t(`card.aiRequirement6`),``,t(`card.aiExtensionIdLabel`,{value:e.EXTENSIONID}),t(`card.aiUnitNameMetadataLabel`,{value:c.UNIT_NAME}),``,t(`card.aiAttributeDictionaryHeader`),l,``,t(`card.aiListExamplesHeader`),t(`card.aiStandardListEntryHeader`),d,``,t(`card.aiItemListEntryHeader`),f,``,t(`card.aiListKeyHint`,{key:p}),``,t(`card.aiOutputShapeHeader`),u,``,t(`card.aiFinalInstruction`)].join(`
`)},Je=async()=>{try{let e=qe();await navigator.clipboard.writeText(e),await r.notification.show(t(`card.aiTemplateCopied`))}catch(e){z.log(`AI template copy failed`,e),await r.notification.show(t(`card.aiTemplateCopyFailed`),`ERROR`)}},Ye=()=>{let e=se.trim();if(le(e),!e){N([]);return}(async()=>{_e||(await F(),ve(!0)),N(await Oe(e))})().catch(async e=>{z.log(`Supabase collection search failed`,e),N([]),await r.notification.show(t(`card.onlineSearchFailed`),`ERROR`)})},Xe=async e=>{if(!G){await r.notification.show(t(`card.noUnitSelectedToImportInto`),`ERROR`);return}try{await Ee(e.metadata),k(!1),await r.notification.show(e.source===`local`?t(`card.recordImportedLocal`,{name:e.name}):t(`card.recordImportedOnline`,{name:e.name}))}catch(e){z.log(`Collection record import failed`,e),await r.notification.show(t(`card.recordImportFailed`),`ERROR`)}},Ze=async e=>{try{if(e.source===`remote-user`)await Se(e.id),N(t=>t.filter(t=>!(t.source===`remote-user`&&t.id===e.id)));else if(e.source===`local`)await v(e.id),de(t=>t.filter(t=>t.id!==e.id));else return;await r.notification.show(t(`card.recordDeleted`,{name:e.name}))}catch(e){z.log(`Collection record delete failed`,e),await r.notification.show(t(`card.recordDeleteFailed`),`ERROR`)}};return(0,q.useEffect)(()=>{w&&K().catch(e=>{z.log(`Failed to load collection records`,e)})},[w]),(0,q.useEffect)(()=>{w&&(le(``),E(``),N([]))},[w]),(0,J.jsxs)(gn,{$theme:U,children:[(0,J.jsxs)(_n,{children:[(0,J.jsx)(yn,{children:(0,J.jsxs)(bn,{children:[(0,J.jsxs)(xn,{$theme:U,"aria-label":t(`card.chooseUnitAria`),value:``,onChange:e=>{let t=e.target.value;t&&i(t)},children:[(0,J.jsx)(`option`,{value:``,children:t(`card.chooseUnitOption`)}),xe.map(e=>(0,J.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,J.jsx)(Sn,{type:`button`,$theme:U,"aria-label":t(`card.closeCardAria`),onClick:async()=>{await r.popover.close(a?sr:e.CARDSID)},children:(0,J.jsx)(Cn,{src:`/close.svg`,alt:``,"aria-hidden":`true`})})]})}),C?n?G?(0,J.jsx)(pn,{systemTheme:U,backgroundUrl:U.background_url,cardLayout:ye,attributes:H,unitItem:G,onUpdateMetadata:we}):(0,J.jsx)(vn,{$theme:U,children:t(`card.unitNotFound`)}):(0,J.jsx)(vn,{$theme:U,children:t(`card.noUnitId`)}):(0,J.jsx)(vn,{$theme:U,children:t(`card.loading`)})]}),(0,J.jsxs)(wn,{$theme:U,$open:w,children:[(0,J.jsxs)(Un,{children:[(0,J.jsxs)(Wn,{children:[(0,J.jsx)(Gn,{type:`button`,$theme:U,"aria-label":t(`card.pinAria`),onClick:()=>{ze()},children:(0,J.jsx)(T,{theme:W,text:t(`card.pinTooltip`),children:(0,J.jsx)(Fe,{size:16})})}),(0,J.jsx)(Kn,{type:`button`,$theme:U,$active:O,"aria-label":t(`card.favoriteAria`),disabled:!x,onClick:Be,children:(0,J.jsx)(T,{theme:W,text:t(`card.favoriteTooltip`),children:(0,J.jsx)(_,{size:16,fill:O?`currentColor`:`none`})})}),(0,J.jsx)(Gn,{type:`button`,$theme:U,"aria-label":t(`card.collectionSaveAria`),disabled:!x,onClick:Ve,children:(0,J.jsx)(T,{theme:W,text:t(`card.collectionSaveTooltip`),children:(0,J.jsx)(Ae,{size:16})})})]}),(0,J.jsxs)(Wn,{children:[(0,J.jsx)(Gn,{type:`button`,$theme:U,"aria-label":t(`card.importAria`),onClick:He,children:(0,J.jsx)(T,{theme:W,text:t(`card.importTooltip`),children:(0,J.jsx)(Ne,{size:16})})}),(0,J.jsx)(Gn,{type:`button`,$theme:U,"aria-label":t(`card.exportAria`),onClick:Ue,children:(0,J.jsx)(T,{theme:W,text:t(`card.exportTooltip`),children:(0,J.jsx)(oe,{size:16})})}),(0,J.jsx)(Gn,{type:`button`,$theme:U,"aria-label":t(`card.helpAria`),onClick:()=>{P(!0)},children:(0,J.jsx)(T,{theme:W,text:t(`card.helpTooltip`),children:(0,J.jsx)(je,{size:16})})})]})]}),(0,J.jsx)(Tn,{$theme:U,children:(0,J.jsx)(T,{theme:W,text:t(w?`card.closeTrayTooltip`:`card.openTrayTooltip`),children:(0,J.jsx)(En,{type:`button`,$theme:U,"aria-label":t(w?`card.closeTrayAria`:`card.openTrayAria`),onClick:()=>{ae(e=>!e)},children:(0,J.jsx)(ue,{size:22})})})}),(0,J.jsx)(Dn,{$theme:U,children:w?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(On,{$theme:U,children:(0,J.jsx)(kn,{children:Ie.length===0?(0,J.jsx)(vn,{$theme:U,children:t(`card.noCollectionRecords`)}):Ie.map(e=>(0,J.jsxs)(An,{$theme:U,children:[(0,J.jsxs)(jn,{children:[(0,J.jsxs)(Mn,{$theme:U,children:[e.favorite?(0,J.jsx)(Nn,{children:`❤`}):null,(0,J.jsx)(Pn,{children:e.name})]}),(0,J.jsxs)(Fn,{children:[(0,J.jsx)(`span`,{children:`→`}),(0,J.jsx)(Ln,{$color:De(e.author),children:e.author}),(0,J.jsxs)(In,{$theme:U,title:e.source===`local`?t(`card.localSource`):e.source===`remote-user`?t(`card.myCloudSource`):t(`card.sharedSource`),children:[e.source===`local`?(0,J.jsx)(Pe,{size:11}):null,e.source===`remote-user`?(0,J.jsx)(Me,{size:11}):null,e.source===`remote-shared`?(0,J.jsx)(Re,{size:11}):null]})]})]}),(0,J.jsxs)(Rn,{children:[(0,J.jsx)(zn,{type:`button`,$theme:U,$variant:`import`,onClick:()=>{Xe(e)},children:t(`card.importAction`)}),e.source===`remote-shared`?null:(0,J.jsx)(zn,{type:`button`,$theme:U,$variant:`delete`,onClick:()=>{Ze(e)},children:t(`card.deleteAction`)})]})]},`${e.source}:${e.id}`))})}),(0,J.jsxs)(Bn,{children:[(0,J.jsx)(Vn,{$theme:U,type:`text`,value:se,placeholder:t(`card.searchPlaceholder`),onChange:e=>{E(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ye())}}),(0,J.jsx)(Hn,{type:`button`,$theme:U,"aria-label":t(`card.searchAria`),onClick:Ye,children:(0,J.jsx)(Le,{size:16})})]})]}):null})]}),fe?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(tr,{onClick:We}),(0,J.jsxs)(nr,{$theme:U,onClick:e=>{e.stopPropagation()},children:[(0,J.jsx)(rr,{$theme:U,children:t(`card.importUnitDataTitle`)}),(0,J.jsx)(qn,{$theme:U,value:he,placeholder:t(`card.importPlaceholder`),onChange:e=>{I(e.target.value),L&&R(null)}}),L?(0,J.jsx)(Xn,{$theme:U,children:L}):null,(0,J.jsxs)(ir,{children:[(0,J.jsx)(Yn,{type:`button`,$theme:U,onClick:()=>{Je()},children:t(`card.aiTemplate`)}),(0,J.jsx)(Jn,{type:`button`,$theme:U,onClick:We,children:t(`card.cancel`)}),(0,J.jsx)(Jn,{type:`button`,$theme:U,$variant:`primary`,onClick:Ge,children:t(`card.importAction`)})]})]})]}):null,me?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(tr,{onClick:()=>{P(!1)}}),(0,J.jsxs)(nr,{$theme:U,onClick:e=>{e.stopPropagation()},children:[(0,J.jsx)(rr,{$theme:U,children:t(`card.helpTitle`)}),(0,J.jsxs)(Zn,{$theme:U,children:[(0,J.jsx)(Qn,{$theme:U,children:t(`card.helpRollableValuesTitle`)}),(0,J.jsxs)($n,{children:[(0,J.jsx)(`li`,{children:t(`card.helpRollableValuesItem1`)}),(0,J.jsx)(`li`,{children:t(`card.helpRollableValuesItem2`)}),(0,J.jsx)(`li`,{children:t(`card.helpRollableValuesItem3`)})]}),(0,J.jsx)(Qn,{$theme:U,children:t(`card.helpDiceChipsTitle`)}),(0,J.jsxs)($n,{children:[(0,J.jsx)(`li`,{children:t(`card.helpDiceChipsItem1`)}),(0,J.jsx)(`li`,{children:t(`card.helpDiceChipsItem2`)})]}),(0,J.jsx)(er,{$theme:U,children:t(`card.helpMeleeAttackExample`)}),(0,J.jsx)(Qn,{$theme:U,children:t(`card.helpUsingAttributesTitle`)}),(0,J.jsxs)($n,{children:[(0,J.jsx)(`li`,{children:t(`card.helpUsingAttributesItem1`)}),(0,J.jsx)(`li`,{children:t(`card.helpUsingAttributesItem2`)})]}),(0,J.jsx)(er,{$theme:U,children:t(`card.helpDamageBidExample`)}),(0,J.jsx)(er,{$theme:U,children:t(`card.helpDamageNameExample`)})]}),(0,J.jsx)(ir,{children:(0,J.jsx)(Jn,{type:`button`,$theme:U,$variant:`primary`,onClick:()=>{P(!1)},children:t(`card.close`)})})]})]}):null]})},{})})}));