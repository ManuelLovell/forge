import{C as e,F as t,N as n,O as r,R as i,S as a,T as o,_ as s,b as c,g as l,o as u,s as d,t as f,w as p,y as m}from"./defaultgamesystem-Dpv8RqCc.js";import{$ as h,A as g,B as _,C as v,D as y,Dt as b,E as x,F as ee,G as S,H as te,I as C,J as w,K as T,L as ne,M as re,N as E,O as ie,P as D,Q as ae,R as O,T as oe,Tt as se,U as ce,V as le,W as k,X as ue,Y as A,Z as j,_t as de,a as M,at as fe,ct as N,dt as P,et as F,ft as I,g as pe,gt as L,ht as R,i as me,it as z,j as he,k as ge,lt as B,mt as V,nt as H,o as _e,ot as U,p as ve,pt as ye,q as be,rt as W,s as G,st as xe,t as Se,tt as Ce,ut as we,vt as Te,w as Ee,x as De,yt as K,z as Oe}from"./unitCollectionRemote-Bz40qrs3.js";/* empty css               */var ke=K(`book-marked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),Ae=K(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),je=K(`cloudy`,[[`path`,{d:`M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z`,key:`44yre2`}],[`path`,{d:`M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61`,key:`leugyv`}]]),Me=K(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),Ne=K(`hard-drive`,[[`line`,{x1:`22`,x2:`2`,y1:`12`,y2:`12`,key:`1y58io`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}],[`line`,{x1:`6`,x2:`6.01`,y1:`16`,y2:`16`,key:`sgf278`}],[`line`,{x1:`10`,x2:`10.01`,y1:`16`,y2:`16`,key:`1l4acy`}]]),Pe=K(`pin`,[[`path`,{d:`M12 17v5`,key:`bb1du9`}],[`path`,{d:`M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z`,key:`1nkz8b`}]]),Fe=K(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Ie=K(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Le=K(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),Re=i(n(),1),q=i(t(),1);const ze=e=>{let t=[...Array.isArray(e)?e:[]].sort((e,t)=>e.row===t.row?e.col-t.col:e.row-t.row),n=[];return t.forEach(e=>{let t=n[n.length-1];if(!t||t.row!==e.row){n.push({row:e.row,items:[e]});return}t.items.push(e)}),{sorted:t,rows:n}};var J=o(),Be=e=>`
    0 1px 1px ${s(e.background,.95)},
    0 0 2px ${s(e.background,.85)}
  `,Ve=d.div`
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
`,He=d.div`
  position: relative;
  z-index: 1;
`,Ue=d.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`,Y=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`,We=d(Y)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  height: calc(2 * 1.1em);
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100% !important;
`,Ge=d.input`
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
`,Ke=d(d.div`
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
`,qe=d.div`
  color: ${e=>e.$theme.primary};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`,Je=d.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?s(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?s(e.$theme.offset,.5):s(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>s(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?Be(e.$theme):`none`};
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
`,Ye=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  height: 40px;
  box-sizing: border-box;
`,Xe=d.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`,Ze=d.span`
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
`,Qe=d.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?s(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?s(e.$theme.offset,.5):s(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>s(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?Be(e.$theme):`none`};
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
`,$e=d.select`
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
`,et=d.div`
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
`,tt=d(et)`
  border-style: solid;
  background: ${e=>s(e.$theme.primary,.75)};
  color: ${e=>s(e.$theme.offset,.96)};
  box-shadow: ${e=>`0 4px 14px ${s(e.$theme.background,.65)}`};
  text-shadow: ${e=>`1px 1px 0 ${s(e.$theme.background,.95)}`};
  font-weight: 700;
  font-style: italic;
`,nt=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
`,rt=d.span`
  color: ${e=>s(e.$theme.primary,.92)};
  flex-shrink: 0;
`,it=d.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
`,at=d.button`
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
`,ot=d.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,st=d.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,ct=d.div`
  flex: 1;
  min-width: 0;
`,lt=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 18px;
`,ut=d.div`
  width: 100%;
  height: 5px;
  background: ${e=>`linear-gradient(10deg, ${e.$theme.border||`white`}, rgba(255,255,255,0))`};
`,dt=d.div`
  width: 100%;
  height: ${e=>`${e.$heightPx}px`};
  border-radius: 8px;
  border: 1px solid ${e=>s(e.$theme.border,.9)};
  background: ${e=>s(e.$theme.background,.42)};
  overflow: hidden;
  box-sizing: border-box;
`,ft=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,pt=d.div`
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
`,mt=d.div`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${e=>e.$theme.border||`rgba(255,255,255,0.5)`};
`,ht=d.div`
  width: 100%;
  height: 10px;
  background: ${e=>`linear-gradient(to bottom, ${e.$theme.border||`rgba(255,255,255,0.2)`}, transparent)`};
`,gt=d.div`
  width: 100%;
  height: 2px;
  background: ${e=>e.$theme.border||`#222`};
  box-shadow: ${e=>`inset 0 1px 0 ${e.$theme.border||`#444`}, 0 1px 0 #000`};
`,_t=d.div`
  width: 100%;
  height: 6px;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6' preserveAspectRatio='none'%3E%3Cpolyline points='0,6 6,0 12,6 18,0 24,6' fill='none' stroke='${encodeURIComponent(e.$theme.border||`#ffffff`)}' stroke-width='1.5'/%3E%3C/svg%3E")`};
`,vt=d.div`
  width: 100%;
  height: 4px;
  background: ${e=>e.$theme.border||`white`};
  animation: flicker 1.2s infinite alternate;

  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 1; }
  }
`,yt=d.div`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`,bt=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${e=>s(e.$theme.border,.85)};
  padding-bottom: 4px;
  margin-bottom: 4px;
`,xt=d.div`
  color: ${e=>e.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,St=d.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ct=d.div`
  margin-bottom: 8px;
`,wt=d.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`,Tt=d.div`
  width: 20px;
  display: flex;
  justify-content: center;
`,Et=d.div`
  flex: 1;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`,Dt=d.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Ot=d.input`
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
`,kt=d.textarea`
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
`,At=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`,jt=d.button`
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
`,Mt=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Nt=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 9999;
`,Pt=d.div`
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
`,Ft=d.h3`
  margin: 0 0 12px;
  color: ${e=>s(e.$theme.primary,.98)};
  font-size: 16px;
`,It=d.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
`,Lt=d.span`
  color: ${e=>s(e.$theme.offset,.95)};
  font-size: 13px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
`,Rt=d.button`
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
`,zt=d.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`,Bt=d.div`
  flex: 1;
`,Vt=d.input`
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
`,Ht=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 8px;
`,Ut=d.span`
  color: ${e=>e.$theme.offset||f.theme_offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Wt=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: space-evenly;
  width: ${e=>e.$fullWidth?`100%`:`auto`};
`,Gt=d.input`
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
`,Kt=d.button`
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
`,qt=d.div`
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
`,Jt={sm:`14px`,md:`16px`,lg:`18px`},Yt={sm:`14px`,md:`16px`,lg:`18px`},Xt={sm:`14px`,md:`16px`,lg:`18px`},Zt={sm:`14px`,md:`16px`,lg:`18px`},Qt=40,$t={anchor:Te,aperture:de,award:L,"battery-charging":V,book:I,calendar:we,clock:xe,"cloud-lightning":U,compass:z,"dollar-sign":H,feather:ae,eye:F,heart:w,moon:T,music:S,shield:te,star:O,sun:ne,target:D,users:he,wind:ge,zap:y,drama:Ce,carrot:B,bone:ye,sword:C,swords:ee,axe:R,"bow-arrow":P,coins:fe,wand:g,flower:j,skull:le,castle:N,cross:W,"test-tube-diagonal":E,squirrel:Oe,snowflake:_,shell:ce,pickaxe:k,"heart-plus":A,"heart-crack":ue,fan:h},en=(e,t,n,r)=>{let i=typeof e==`number`?e:typeof e==`string`?Number(e):NaN;if(!Number.isFinite(i))return r;let a=Math.trunc(i);return Math.max(t,Math.min(n,a))},tn=(e,t=`center`)=>{if(typeof e!=`string`)return t;let n=e.trim().toLowerCase();return n===`left`||n===`center`||n===`right`?n:t},X=e=>String(e?.attr_bid??e?.bid??``).trim(),nn=e=>String(e?.attr_abbr??e?.abbr??``).trim(),Z=e=>String(e?.attr_name??e?.name??``).trim(),rn=e=>String(e?.attr_type??e?.type??``).trim().toLowerCase(),an=e=>{let t=e?.attr_func??e?.func??``;return typeof t==`string`?t.trim():``},Q=e=>e?.attr_meta??e?.meta??{},$=(e,t)=>t&&e.find(e=>{let n=e,r=X(n)===t,i=String(n.id??``)===String(t);return r||i})||null,on=(e,t)=>e?t===`abbr`?nn(e):t===`name`||!t||t===`text`?Z(e):``:``,sn=(e,t)=>t===`icon`?!0:on(e,t).length>0,cn=(e,t,n,r=16)=>t===`icon`?(0,J.jsx)($t[String(n||``).trim().toLowerCase()]||O,{size:r,"aria-hidden":`true`}):on(e,t),ln=(e,t)=>Array.isArray(t)?t.filter(t=>!!$(e,t)):[],un=(e,t)=>ln(e,t).filter(t=>rn($(e,t))===`bool`),dn=(e,t)=>{let n=$(e,t);return!n||rn(n)!==`list`?`List Attribute`:Z(n)};const fn=({systemTheme:t,backgroundUrl:n,cardLayout:i,attributes:a,unitItem:o,onUpdateMetadata:s})=>{let[l,u]=(0,q.useState)({}),[d,f]=(0,q.useState)({}),[p,m]=(0,q.useState)(null),[h,g]=(0,q.useState)(null),_=(0,q.useRef)({}),v=(0,q.useRef)({}),{rows:y}=(0,q.useMemo)(()=>ze(i),[i]),x=(0,q.useMemo)(()=>{let e=o.metadata?.[c.UNIT_NAME];if(typeof e==`string`&&e.trim())return e;let t=o.text?.plainText;return typeof t==`string`&&t.trim()?t:typeof o.name==`string`&&o.name.trim()?o.name:`Unknown`},[o]),[ee,S]=(0,q.useState)(x);(0,q.useEffect)(()=>{S(x)},[x]);let te=async()=>{let e=ee.trim(),t=x.trim()||`Unknown`,n=e||t;S(n),n!==x&&await s({[c.UNIT_NAME]:n})},C=t=>`${e.EXTENSIONID}/${t}`,w=e=>{let t=o.metadata?.[C(e)];return t==null?``:typeof t==`string`?t:typeof t==`number`||typeof t==`boolean`?String(t):``},T=e=>{let t=o.metadata?.[C(e)];if(typeof t==`boolean`)return t;if(typeof t==`number`)return t!==0;if(typeof t==`string`){let e=t.trim().toLowerCase();return e===`true`||e===`1`||e===`yes`||e===`on`}return!1},ne=(e,t)=>l[e]??w(t),re=e=>an(e).length>0,E=(0,q.useMemo)(()=>{let e={};for(let t of a){let n=X(t);if(!n)continue;let r=w(n).trim();if(!r)continue;let i=Number(r);Number.isFinite(i)&&(e[n]=i)}return e},[a,o.metadata]),D=(0,q.useMemo)(()=>{let e={};for(let t of a){let n=t,r=X(n);if(!r)continue;let i=w(r).trim();if(!i)continue;let a=Number(i);if(!Number.isFinite(a))continue;let o=Z(n);o&&(e[o]=a);let s=nn(n);s&&(e[s]=a)}return e},[a,o.metadata]),ae=e=>{let t=an(e);if(!t)return null;let n=G(t,{bidValueMap:E,nameValueMap:D,onMissingBid:`error`});return!n.valid||!n.notation?(b.warn(`[FORGE] Could not convert attr_func for ${X(e)||`unknown`}: ${n.error||`Unknown conversion error`}`),null):n.notation},O=async(e,t)=>{try{let n=await r.room.getMetadata(),i=(await r.party.getPlayers()).find(e=>e.id===o.createdUserId),a=await r.player.getId(),s=await r.player.getColor();await se({notation:e,actionName:t,senderName:x,senderId:o.createdUserId||a||o.id,senderColor:i?.color||s||`#ffffff`},n)}catch(t){b.error(`Failed to send dice roll from CardLayoutRenderer`,e,t),b.log(e)}},oe=async e=>{if(!e)return;let t=ae(e);t&&await O(t,Z(e)||X(e)||`Roll`)},ce=e=>o.metadata?.[C(e)],le=(e,t)=>{let n=ce(e),r=n&&typeof n==`object`&&!Array.isArray(n)?n:null,i=Q(t)?.resource;return{current:r?Number(r.current??i?.defaultCurrent??0):Number(i?.defaultCurrent??0),max:r?Number(r.max??i?.defaultMax??0):Number(i?.defaultMax??0)}},k=async(e,t)=>{await s({[C(e)]:t})},ue=e=>{let t=Q(e)?.derived?.formula,n=typeof t==`string`&&t.trim().length>0?t.trim():an(e);if(!n)return`-`;let r=G(n,{bidValueMap:E,nameValueMap:D,onMissingBid:`error`});if(!r.valid||!r.notation)return`-`;let i=r.notation.trim(),a=Number(i);if(!Number.isFinite(a))return i||`-`;let o=Number(Q(e)?.derived?.precision),s=Number.isFinite(o)?Math.max(0,Math.min(Math.trunc(o),8)):0,c=Q(e)?.derived?.displayMode,l=s>0?a.toFixed(s):String(a);return c===`percent`?`${l}%`:l},A=/(\d+)d(\d+)([kd][hl]\d+|!)?/gi,j=(e,t)=>{let n=Array.from(e.matchAll(A));if(n.length!==1)return null;let r=n[0],i=r[0]||``,a=r[1]||``,o=r[2]||``,s=r[3]||``,c=r.index;if(!i||!a||!o||typeof c!=`number`)return null;let l=Number(a);if(!Number.isFinite(l)||l!==1||s)return null;let u=`2d${o}${t===`advantage`?`kh1`:`kl1`}`;return`${e.slice(0,c)}${u}${e.slice(c+i.length)}`};(0,q.useEffect)(()=>()=>{Object.values(_.current).forEach(e=>{window.clearTimeout(e)})},[]);let de=e=>!!d[e],M=(e,t,n,r)=>{t&&m({draftKey:e,attribute:t,input:n,isRollable:r})},fe=()=>{m(null)},N=e=>{g(e)},P=()=>{g(null)};(0,q.useEffect)(()=>{if(!p&&!h)return;let e=e=>{e.key===`Escape`&&(m(null),g(null))};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[p,h]);let F=async e=>{if(!h)return;let t=e===`normal`?h.notation:j(h.notation,e);if(!t)return;let n=e===`normal`?``:e===`advantage`?` (Advantage)`:` (Disadvantage)`;await O(t,`${h.actionName}${n}`)},I=(e,t)=>{f(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},pe=e=>{f(t=>{let{[e]:n,...r}=t;return r})},L=(e,t)=>{let n=_.current[e];n&&window.clearTimeout(n),_.current[e]=window.setTimeout(()=>{v.current[e]=!0,I(e,t),delete _.current[e]},500)},R=e=>{let t=_.current[e];t&&(window.clearTimeout(t),delete _.current[e])},me=e=>v.current[e]?(delete v.current[e],!0):!1,z=async(e,t)=>{await s({[C(e)]:t})},he=async(e,t)=>{await s({[C(e)]:t})},ge=e=>{let t=o.metadata?.[C(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``}}):[]},B=e=>{let t=o.metadata?.[C(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``,inUse:!!t.inUse}}):[]},V=(e,t)=>{b.log(e,t)},H=e=>{e&&(e.style.height=`0px`,e.style.height=`${Math.max(e.scrollHeight,44)}px`)},_e=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=e[0],r=(e[1]||``).trim();if(!r)continue;let i=G(r,{bidValueMap:E,nameValueMap:D,onMissingBid:`error`});!i.valid||!i.notation||t.push({raw:n,notation:i.notation})}return t},U=async(e,t,n)=>{V(`List metadata update`,{listType:n.listType,bid:e,reason:n.reason,entryId:n.entryId,field:n.field,entryCount:t.length,timestamp:Date.now()}),await s({[C(e)]:t})},ve=e=>e===`dash`||e===`dashed`?(0,J.jsx)(mt,{$theme:t}):e===`shadow`?(0,J.jsx)(ht,{$theme:t}):e===`ridge`?(0,J.jsx)(gt,{$theme:t}):e===`zigzag`?(0,J.jsx)(_t,{$theme:t}):e===`pulse`?(0,J.jsx)(vt,{$theme:t}):(0,J.jsx)(ut,{$theme:t}),ye=e=>{let n=e.type,r=(()=>n===`derived-value`||n===`enum-value`||n===`resource`?`text-value`:n===`column-derived`?`column-value`:n)(),i=e.styles||{},o=$(a,i.attributeId),s=tn(i.textAlign??i.align,`center`),c=i.stretch===!0;if(r===`line-break`)return(0,J.jsx)(Y,{$theme:t,$full:!0,children:ve(i.styleDesign)},e.id);if(r===`line-spacer`)return(0,J.jsx)(lt,{$full:e.fullsize},e.id);if(r===`image`){let n=typeof i.imageUrl==`string`?i.imageUrl.trim():``,r=en(i.imageCols,1,2,e.fullsize?2:1),a=en(i.imageRows,1,6,1);return(0,J.jsx)(Y,{$theme:t,$full:r===2,children:(0,J.jsx)(dt,{$theme:t,$heightPx:Qt*a,children:n?(0,J.jsx)(ft,{src:n,alt:`Card component`,loading:`lazy`}):(0,J.jsx)(pt,{$theme:t,children:`No image selected`})})},e.id)}if(r===`text`){let n=Jt[i.fontSize||`md`],r=sn(o,i.labelMode)?cn(o,i.labelMode,i.labelIcon,18):`Title Header`,a=`text:${e.id}:${X(o)||`none`}`;return(0,J.jsx)(Y,{$theme:t,$full:e.fullsize,onContextMenu:o?e=>{e.preventDefault(),M(a,o,null,!1)}:void 0,children:(0,J.jsx)(qe,{$theme:t,$fontSize:n,$weight:700,$stretch:c,$align:s,children:r})},e.id)}if(r===`text-value`){let n=Zt[i.fontSize||`md`],r=sn(o,i.labelMode),a=cn(o,i.labelMode,i.labelIcon,18),s=i.labelPosition===`right`?`right`:`left`,d=tn(i.textAlign??i.align,`center`),f=i.fontWeight===`bold`?700:400,p=i.fontStyle===`italic`?`italic`:`normal`,m=X(o),h=rn(o),g=re(o),_=`text-value:${e.id}:${m||`none`}`,v=g&&de(_),y;if(h===`derived`)y=(0,J.jsx)(tt,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,title:`Formula: ${Q(o)?.derived?.formula||an(o)||`Derived formula`}`,onContextMenu:o?e=>{e.preventDefault(),M(_,o,null,!1)}:void 0,children:ue(o)});else if(h===`enum`){let e=Array.isArray(Q(o)?.enum?.options)?(Q(o)?.enum?.options||[]).map(e=>String(e||``).trim()).filter(e=>e.length>0):[];y=(0,J.jsx)($e,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,value:e.includes(m?w(m).trim():``)?w(m).trim():e[0]||``,disabled:!m,onContextMenu:o?e=>{e.preventDefault(),M(_,o,null,!1)}:void 0,onChange:m?async e=>{await k(m,e.target.value)}:void 0,children:e.length===0?(0,J.jsx)(`option`,{value:``,children:`No options`}):e.map(e=>(0,J.jsx)(`option`,{value:e,children:e},e))})}else if(h===`resource`){let e=Q(o)?.resource,r=typeof e?.showPips==`boolean`?e.showPips:!!i.showPips,a=m?le(m,o):{current:0,max:0},s=Number(e?.pipCap??a.max??0),h=Number.isFinite(s)?Math.max(0,Math.min(Math.round(s),15)):0;if(r&&h>0)y=(0,J.jsx)(it,{onContextMenu:o?e=>{e.preventDefault(),M(_,o,null,!1)}:void 0,children:Array.from({length:h}).map((e,n)=>(0,J.jsx)(at,{$theme:t,$filled:n<Math.max(0,Math.min(a.current,h)),type:`button`,disabled:!m,onClick:m?async()=>{let e=Math.max(0,Math.min(a.current,h));await k(m,{current:n+1===e?n:n+1,max:a.max})}:void 0},`text-resource-pip-${n}`))});else if(r)y=(0,J.jsx)(et,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,children:`-`});else{let e=`${_}:current`,r=`${_}:max`;y=(0,J.jsxs)(nt,{children:[(0,J.jsx)(Qe,{$theme:t,$fontSize:n,$align:`center`,$weight:f,$fontStyle:p,$stretch:c,type:`text`,value:l[e]??String(a.current),onChange:t=>{let n=t.target.value;u(t=>({...t,[e]:n}))},onBlur:async t=>{if(!m)return;let n=Number(t.target.value);await k(m,{current:Number.isFinite(n)?n:a.current,max:a.max}),u(t=>{let{[e]:n,...r}=t;return r})},placeholder:`0`}),(0,J.jsx)(rt,{$theme:t,children:`/`}),(0,J.jsx)(Qe,{$theme:t,$fontSize:n,$align:`center`,$weight:f,$fontStyle:p,$stretch:c,type:`text`,value:l[r]??String(a.max),onChange:e=>{let t=e.target.value;u(e=>({...e,[r]:t}))},onBlur:async e=>{if(!m)return;let t=Number(e.target.value),n=Number.isFinite(t)?t:a.max;await k(m,{current:a.current,max:n}),u(e=>{let{[r]:t,...n}=e;return n})},placeholder:`0`})]})}}else y=(0,J.jsx)(Qe,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,$isRollable:g,type:`text`,readOnly:g&&!v,value:m?ne(_,m):``,onChange:g&&!v?void 0:e=>{if(!m)return;let t=e.target.value;u(e=>({...e,[_]:t}))},onBlur:g&&!v?void 0:async e=>{if(!m)return;let t=e.target.value;await z(m,t),u(e=>{let{[_]:t,...n}=e;return n}),g&&pe(_)},onClick:g?()=>{v||me(_)||oe(o)}:void 0,onContextMenu:o?e=>{e.preventDefault(),M(_,o,e.currentTarget,g)}:void 0,onTouchStart:g?e=>{v||L(_,e.currentTarget)}:void 0,onTouchEnd:g?()=>{R(_)}:void 0,onTouchCancel:g?()=>{R(_)}:void 0,onKeyDown:e=>{if(g&&!v&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),oe(o);return}(v||!g)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`});let b=r?(0,J.jsx)(Ze,{$theme:t,$fontSize:n,$stretch:c,$weight:f,$fontStyle:p,children:a}):null;return(0,J.jsx)(Ye,{$full:e.fullsize,children:(0,J.jsxs)(Xe,{children:[s===`left`?b:null,y,s===`right`?b:null]})},e.id)}if(r===`text-checkbox`){let n=Yt[i.fontSize||`md`],r=e.fullsize?6:3,o=Math.max(1,Math.min(r,Number(i.checkboxCount||1))),s=[...un(a,i.bidList)].slice(0,o);for(;s.length<o;)s.push(``);let l=$(a,s[0]||i.attributeId),u=sn(l,i.labelMode),d=cn(l,i.labelMode,i.labelIcon,16),f=i.inputType===`slider`,p=i.labelPosition===`right`?`right`:`left`,m=i.fontWeight===`bold`?700:400,h=i.fontStyle===`italic`?`italic`:`normal`,g=u?(0,J.jsx)(Ut,{$theme:t,$fontSize:n,$stretch:c,$weight:m,$fontStyle:h,children:d}):null;return(0,J.jsx)(Y,{$theme:t,$full:e.fullsize,children:(0,J.jsxs)(Ht,{children:[p===`left`?g:null,(0,J.jsx)(Wt,{$fullWidth:!g,children:Array.from({length:o}).map((n,r)=>{let i=s[r]||``,o=i?T(i):!1,c=i?$(a,i):null,l=`text-checkbox:${e.id}:${i||`index-${r}`}`;return f?(0,J.jsx)(Kt,{type:`button`,$theme:t,$active:o,disabled:!i,onClick:i?()=>{he(i,!o)}:void 0,onContextMenu:c?e=>{e.preventDefault(),M(l,c,null,!1)}:void 0,children:(0,J.jsx)(qt,{$theme:t,$active:o})},`slider-${r}`):(0,J.jsx)(Gt,{$theme:t,type:`checkbox`,disabled:!i,checked:o,onChange:i?e=>{he(i,e.target.checked)}:void 0,onContextMenu:c?e=>{e.preventDefault(),M(l,c,null,!1)}:void 0},`checkbox-${r}`)})}),p===`right`?g:null]})},e.id)}if(r===`column-text`){let n=Xt[i.fontSize||`md`],r=ln(a,i.bidList),o=i.fontWeight===`bold`?700:400,s=i.fontStyle===`italic`?`italic`:`normal`;return r.length===0?null:(0,J.jsx)(Y,{$theme:t,$full:e.fullsize,children:(0,J.jsx)(ot,{children:r.map(r=>{let l=$(a,r),u=i.labelMode||`name`,d=sn(l,u),f=cn(l,u,i.labelIcon,16);return d?(0,J.jsx)(st,{children:(0,J.jsx)(Ke,{$theme:t,$fontSize:n,$stretch:c,$align:`center`,$weight:o,$fontStyle:s,onContextMenu:l?t=>{t.preventDefault(),M(`column-text:${e.id}:${r}`,l,null,!1)}:void 0,children:f})},r):null})})},e.id)}if(r===`column-value`){let n=Xt[i.fontSize||`md`],r=ln(a,i.bidList),o=i.fontWeight===`bold`?700:400,s=i.fontStyle===`italic`?`italic`:`normal`;return r.length===0?null:(0,J.jsx)(Y,{$theme:t,$full:e.fullsize,children:(0,J.jsx)(ot,{children:r.map(r=>{let d=$(a,r),f=rn(d),p=re(d),m=`column-value:${e.id}:${r}`,h=p&&de(m),g;if(f===`derived`)g=(0,J.jsx)(tt,{$theme:t,$fontSize:n,$align:`center`,$weight:o,$fontStyle:s,$stretch:c,title:`Formula: ${Q(d)?.derived?.formula||an(d)||`Derived formula`}`,onContextMenu:d?e=>{e.preventDefault(),M(m,d,null,!1)}:void 0,children:ue(d)});else if(f===`enum`){let e=Array.isArray(Q(d)?.enum?.options)?(Q(d)?.enum?.options||[]).map(e=>String(e||``).trim()).filter(e=>e.length>0):[],i=w(r).trim();g=(0,J.jsx)($e,{$theme:t,$fontSize:n,$align:`center`,$weight:o,$fontStyle:s,$stretch:c,value:e.includes(i)?i:e[0]||``,onContextMenu:d?e=>{e.preventDefault(),M(m,d,null,!1)}:void 0,onChange:async e=>{await k(r,e.target.value)},children:e.length===0?(0,J.jsx)(`option`,{value:``,children:`No options`}):e.map(e=>(0,J.jsx)(`option`,{value:e,children:e},e))})}else if(f===`resource`){let e=Q(d)?.resource,a=typeof e?.showPips==`boolean`?e.showPips:!!i.showPips,f=le(r,d),p=Number(e?.pipCap??f.max??0),h=Number.isFinite(p)?Math.max(0,Math.min(Math.round(p),15)):0;if(a&&h>0)g=(0,J.jsx)(it,{onContextMenu:d?e=>{e.preventDefault(),M(m,d,null,!1)}:void 0,children:Array.from({length:h}).map((e,n)=>(0,J.jsx)(at,{$theme:t,$filled:n<Math.max(0,Math.min(f.current,h)),type:`button`,onClick:async()=>{let e=Math.max(0,Math.min(f.current,h));await k(r,{current:n+1===e?n:n+1,max:f.max})}},`column-resource-pip-${r}-${n}`))});else if(a)g=(0,J.jsx)(et,{$theme:t,$fontSize:n,$align:`center`,$weight:o,$fontStyle:s,$stretch:c,children:`-`});else{let e=`${m}:current`,i=`${m}:max`;g=(0,J.jsxs)(nt,{children:[(0,J.jsx)(Je,{$theme:t,$fontSize:n,$align:`center`,value:l[e]??String(f.current),onChange:t=>{let n=t.target.value;u(t=>({...t,[e]:n}))},onBlur:async t=>{let n=Number(t.target.value);await k(r,{current:Number.isFinite(n)?n:f.current,max:f.max}),u(t=>{let{[e]:n,...r}=t;return r})}}),(0,J.jsx)(rt,{$theme:t,children:`/`}),(0,J.jsx)(Je,{$theme:t,$fontSize:n,$align:`center`,value:l[i]??String(f.max),onChange:e=>{let t=e.target.value;u(e=>({...e,[i]:t}))},onBlur:async e=>{let t=Number(e.target.value),n=Number.isFinite(t)?t:f.max;await k(r,{current:f.current,max:n}),u(e=>{let{[i]:t,...n}=e;return n})}})]})}}else g=(0,J.jsx)(Je,{$theme:t,$fontSize:n,$align:`center`,$isRollable:p,readOnly:p&&!h,value:ne(m,r),onChange:p&&!h?void 0:e=>{let t=e.target.value;u(e=>({...e,[m]:t}))},onBlur:p&&!h?void 0:async e=>{let t=e.target.value;await z(r,t),u(e=>{let{[m]:t,...n}=e;return n}),p&&pe(m)},onClick:p?()=>{h||me(m)||oe(d)}:void 0,onContextMenu:d?e=>{e.preventDefault(),M(m,d,e.currentTarget,p)}:void 0,onTouchStart:p?e=>{h||L(m,e.currentTarget)}:void 0,onTouchEnd:p?()=>{R(m)}:void 0,onTouchCancel:p?()=>{R(m)}:void 0,onKeyDown:e=>{if(p&&!h&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),oe(d);return}(h||!p)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`});return(0,J.jsx)(ct,{children:g},r)})})},e.id)}if(r===`action-list`){let n=$(a,i.attributeId||i.bidList?.[0]),r=X(n),o=dn(a,i.attributeId||i.bidList?.[0]),s=r?ge(r):[];return(0,J.jsx)(Y,{$theme:t,$full:e.fullsize,children:(0,J.jsxs)(yt,{$theme:t,children:[(0,J.jsxs)(bt,{$theme:t,children:[(0,J.jsx)(xt,{$theme:t,onContextMenu:n?t=>{t.preventDefault(),M(`action-list:${e.id}:${r||`none`}`,n,null,!1)}:void 0,children:o}),(0,J.jsx)(St,{type:`button`,$theme:t,"aria-label":`Add Action`,onClick:async()=>{r&&await U(r,[...s,{id:crypto.randomUUID(),name:``,description:``}],{listType:`action`,reason:`add`})},children:(0,J.jsx)(Fe,{size:14})})]}),s.map((n,i)=>(0,J.jsxs)(Ct,{children:[(0,J.jsxs)(zt,{children:[(0,J.jsx)(Bt,{children:(0,J.jsx)(Ot,{$theme:t,type:`text`,defaultValue:n.name,placeholder:`Action Name`,onBlur:async e=>{if(!r)return;let t=e.target.value;await U(r,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,J.jsx)(Dt,{type:`button`,$theme:t,"aria-label":`Delete Action`,onClick:async()=>{r&&await U(r,s.filter(e=>e.id!==n.id),{listType:`action`,reason:`delete`,entryId:n.id})},children:(0,J.jsx)(ie,{size:14})})]}),(()=>{let e=_e(n.description);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(kt,{$theme:t,defaultValue:n.description,ref:H,placeholder:`Action Description`,onInput:e=>{H(e.currentTarget)},onBlur:async e=>{if(!r)return;let t=e.target.value;await U(r,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`description`})}}),e.length>0?(0,J.jsx)(At,{children:e.map((e,r)=>(0,J.jsx)(jt,{type:`button`,$theme:t,onClick:()=>{O(e.notation,n.name||`Action`)},onContextMenu:t=>{t.preventDefault(),N({notation:e.notation,actionName:n.name||`Action`,title:n.name||`Action Roll`})},title:e.notation,children:e.notation},`${n.id}-action-inline-${r}`))}):null]})})()]},n.id||`${e.id}-action-${i}`))]})},e.id)}if(r===`item-list`){let n=$(a,i.attributeId||i.bidList?.[0]),r=X(n),o=dn(a,i.attributeId||i.bidList?.[0]),s=r?B(r):[];return(0,J.jsx)(Y,{$theme:t,$full:e.fullsize,children:(0,J.jsxs)(yt,{$theme:t,children:[(0,J.jsxs)(bt,{$theme:t,children:[(0,J.jsx)(xt,{$theme:t,onContextMenu:n?t=>{t.preventDefault(),M(`item-list:${e.id}:${r||`none`}`,n,null,!1)}:void 0,children:o}),(0,J.jsx)(St,{type:`button`,$theme:t,"aria-label":`Add Item`,onClick:async()=>{r&&await U(r,[...s,{id:crypto.randomUUID(),name:``,description:``,inUse:!1}],{listType:`item`,reason:`add`})},children:(0,J.jsx)(Fe,{size:14})})]}),s.map((n,i)=>(0,J.jsxs)(Ct,{children:[(0,J.jsxs)(wt,{children:[(0,J.jsx)(Tt,{children:(0,J.jsx)(Vt,{$theme:t,type:`checkbox`,defaultChecked:n.inUse,onBlur:async e=>{if(!r)return;let t=e.target.checked;await U(r,s.map(e=>e.id===n.id?{...e,inUse:t}:e),{listType:`item`,reason:`toggle-save`,entryId:n.id,field:`inUse`})}})}),(0,J.jsx)(Et,{$theme:t,children:(0,J.jsx)(Ot,{$theme:t,type:`text`,defaultValue:n.name,placeholder:`Item Name`,onBlur:async e=>{if(!r)return;let t=e.target.value;await U(r,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,J.jsx)(Dt,{type:`button`,$theme:t,"aria-label":`Delete Item`,onClick:async()=>{r&&await U(r,s.filter(e=>e.id!==n.id),{listType:`item`,reason:`delete`,entryId:n.id})},children:(0,J.jsx)(ie,{size:14})})]}),(()=>{let e=_e(n.description);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(kt,{$theme:t,defaultValue:n.description,ref:H,placeholder:`Item Description`,onInput:e=>{H(e.currentTarget)},onBlur:async e=>{if(!r)return;let t=e.target.value;await U(r,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`description`})}}),e.length>0?(0,J.jsx)(At,{children:e.map((e,r)=>(0,J.jsx)(jt,{type:`button`,$theme:t,onClick:()=>{O(e.notation,n.name||`Item`)},onContextMenu:t=>{t.preventDefault(),N({notation:e.notation,actionName:n.name||`Item`,title:n.name||`Item Roll`})},title:e.notation,children:e.notation},`${n.id}-item-inline-${r}`))}):null]})})()]},n.id||`${e.id}-item-${i}`))]})},e.id)}return null};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ve,{$theme:t,$backgroundUrl:n,children:(0,J.jsxs)(He,{children:[(0,J.jsx)(Ue,{children:(0,J.jsx)(We,{$theme:t,children:(0,J.jsx)(Ge,{$theme:t,value:ee,onChange:e=>{S(e.target.value)},onBlur:()=>{te()},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},"aria-label":`Unit Name`})})}),y.map(e=>(0,J.jsx)(Ue,{children:e.items.map(e=>ye(e))},`row-${e.row}`))]})}),p?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Nt,{onClick:fe}),(0,J.jsxs)(Pt,{$theme:t,onClick:e=>e.stopPropagation(),children:[(0,J.jsxs)(It,{children:[(0,J.jsx)(Ft,{$theme:t,children:Z(p.attribute)||`Attribute`}),(0,J.jsxs)(Lt,{$theme:t,children:[`[`,X(p.attribute),`]`]})]}),(0,J.jsxs)(Mt,{children:[p.isRollable?(0,J.jsx)(Rt,{type:`button`,$theme:t,onClick:()=>{fe(),I(p.draftKey,p.input)},children:`Edit value`}):null,(()=>{if(!p.isRollable)return null;let e=ae(p.attribute);if(!e)return null;let n=j(e,`advantage`),r=j(e,`disadvantage`);return!n||!r?null:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Rt,{type:`button`,$theme:t,onClick:()=>{fe(),O(n,`${Z(p.attribute)||X(p.attribute)||`Roll`} (Advantage)`)},children:`Roll with Advantage`}),(0,J.jsx)(Rt,{type:`button`,$theme:t,onClick:()=>{fe(),O(r,`${Z(p.attribute)||X(p.attribute)||`Roll`} (Disadvantage)`)},children:`Roll with Disadvantage`})]})})()]})]})]}):null,h?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Nt,{onClick:P}),(0,J.jsxs)(Pt,{$theme:t,onClick:e=>e.stopPropagation(),children:[(0,J.jsxs)(It,{children:[(0,J.jsx)(Ft,{$theme:t,children:h.title}),(0,J.jsxs)(Lt,{$theme:t,children:[`[`,h.notation,`]`]})]}),(0,J.jsx)(Mt,{children:(()=>{let e=j(h.notation,`advantage`),n=j(h.notation,`disadvantage`);return!e||!n?null:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Rt,{type:`button`,$theme:t,onClick:()=>{P(),F(`advantage`)},children:`Roll with Advantage`}),(0,J.jsx)(Rt,{type:`button`,$theme:t,onClick:()=>{P(),F(`disadvantage`)},children:`Roll with Disadvantage`})]})})()})]})]}):null]})};var pn={SNAPSHOT_PUBLIC_ID:`${e.EXTENSIONID}/SnapshotPublicId`},mn={primary:f.theme_primary,offset:f.theme_offset,background:f.theme_background,border:f.theme_border,background_url:f.background_url},hn=d.div`
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
`,gn=d.div`
  height: 100%;
  overflow: hidden;
  padding: 40px 4px 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
`,_n=d.p`
  margin: 0;
  color: ${e=>e.$theme.primary};
  text-align: center;
  align-content: center;
  font-weight: 600;
  font-size: 24px;
`,vn=d.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: min(calc(100% - 16px), 350px);
  z-index: 10;
`,yn=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`,bn=d.select`
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
`,xn=d.button`
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
`,Sn=d.img`
  width: 28px;
  height: 28px;
  display: block;
`,Cn=d.div`
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
`,wn=d.div`
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
`,Tn=d.button`
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
`,En=d.div`
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
`,Dn=d.div`
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
`,On=d.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,kn=d.div`
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
`,An=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,jn=d.div`
  color: ${e=>e.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,Mn=d.span`
  font-size: 12px;
  line-height: 1;
`,Nn=d.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Pn=d.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`,Fn=d.span`
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
`,In=d.span`
  color: ${e=>e.$color};
`,Ln=d.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,Rn=d.button`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>e.$variant===`import`?s(e.$theme.offset,.45):s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`,zn=d.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Bn=d.input`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`,Vn=d.button`
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
`,Hn=d.div`
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
`,Un=d.div`
  display: inline-flex;
  justify-content: space-between;
  width: 40%;
  pointer-events: auto;
`,Wn=d.button`
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
`,Gn=d(Wn)`
  background: ${e=>e.$active?s(e.$theme.offset,.45):s(e.$theme.background,.9)};

  &:disabled {
    background: ${e=>s(e.$theme.background,.9)};
  }
`,Kn=d.textarea`
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
`,qn=d.button`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 8px;
  background: ${e=>e.$variant===`primary`?s(e.$theme.offset,.5):s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 6px 10px;
  cursor: pointer;
`,Jn=d(qn)`
  margin-right: auto;
`,Yn=d.div`
  margin-top: 8px;
  color: ${e=>s(e.$theme.offset,.95)};
  font-size: 12px;
`,Xn=d.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${e=>s(e.$theme.primary,.92)};
  font-size: 12px;
  line-height: 1.45;
`,Zn=d.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.$theme.primary};
`,Qn=d.ul`
  margin: 0;
  padding-left: 16px;
`,$n=d.code`
  display: block;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid ${e=>s(e.$theme.border,.7)};
  background: ${e=>s(e.$theme.background,.82)};
  color: ${e=>e.$theme.primary};
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
  white-space: pre-wrap;
`,er=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,tr=d.div`
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
`,nr=d.h3`
  color: ${e=>e.$theme.primary};
  margin: 0 0 15px 0;
  font-size: 18px;
`,rr=d.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
`,ir=()=>{let e=new URLSearchParams(window.location.search).get(`unitid`);return e&&e.split(`,`)[0]?.trim()||null},ar=()=>{let e=new URLSearchParams(window.location.search).get(`pinned`);if(!e)return!1;let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`},or=`POP_${e.CARDSID}`,sr=(e,t)=>{let n=new URLSearchParams;return n.set(`unitid`,e),t&&n.set(`pinned`,`true`),`/pages/forgecard.html?${n.toString()}`},cr=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},lr=e=>{if(e===!0)return!0;if(typeof e==`string`){let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`}return typeof e==`number`?e===1:!1};Re.createRoot(document.getElementById(`root`)).render((0,J.jsx)(q.StrictMode,{children:(0,J.jsx)(p,{children:(0,J.jsx)(()=>{let[t,n]=(0,q.useState)(()=>ir()),i=(0,q.useMemo)(()=>ar(),[]),[a,o]=(0,q.useState)({metadata:{},items:[]}),[s,d]=(0,q.useState)(null),[p,h]=(0,q.useState)(null),[g,_]=(0,q.useState)(null),[y,ee]=(0,q.useState)(null),[S,te]=(0,q.useState)(!1),[C,w]=(0,q.useState)(!1),[T,ne]=(0,q.useState)(!1),[E,ie]=(0,q.useState)(``),[D,ae]=(0,q.useState)(``),[se,ce]=(0,q.useState)(!1),[le,k]=(0,q.useState)([]),[ue,A]=(0,q.useState)([]),[j,de]=(0,q.useState)(!1),[fe,N]=(0,q.useState)(!1),[P,F]=(0,q.useState)(``),[I,L]=(0,q.useState)(null),[R,z]=(0,q.useState)(!1),he=e=>{let t=e[m.ENABLE_CONSOLE_LOG];typeof t==`boolean`&&b.setEnabled(t)},ge=(0,q.useMemo)(()=>p||f.card_layout,[p]),B=(0,q.useMemo)(()=>g||f.attributes,[g]),V=(0,q.useMemo)(()=>s||mn,[s]),H=(0,q.useMemo)(()=>l(V.primary,V.offset,V.background,V.border,V.background_url),[V]);(0,q.useEffect)(()=>{let e=!1;return(async()=>{try{await ve()}catch(e){b.log(`Auth hydration failed in card iframe`,e)}finally{e||z(!0)}})(),()=>{e=!0}},[]),(0,q.useEffect)(()=>{let e=!0,t=async t=>{let n=t[pn.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(d(null),h(null),_(null));return}let{data:r,error:i}=await u.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(i){e&&(d(null),h(null),_(null));return}let a=Array.isArray(r)?r[0]:r;if(!a||typeof a!=`object`){e&&(d(null),h(null),_(null));return}let o=a,s=cr(o.card_layout),c=cr(o.attributes);if(typeof o.theme_primary!=`string`||typeof o.theme_offset!=`string`||typeof o.theme_background!=`string`||typeof o.theme_border!=`string`||!Array.isArray(s)||!Array.isArray(c)){e&&(d(null),h(null),_(null));return}e&&(d({primary:o.theme_primary,offset:o.theme_offset,background:o.theme_background,border:o.theme_border,background_url:typeof o.background_url==`string`?o.background_url:``}),h(s),_(c))};(async()=>{let[n,i,a,s,c]=await Promise.all([r.scene.getMetadata(),r.scene.items.getItems(),r.room.getMetadata(),r.player.getId(),r.player.getRole()]);e&&(he(a),o({metadata:n,items:i}),await t(a),ee(s),te(String(c||``).toUpperCase()===`GM`),w(!0))})();let n=r.scene.onMetadataChange(t=>{e&&o(e=>({...e,metadata:t}))}),i=r.room.onMetadataChange(n=>{e&&(t(n),he(n))}),a=r.scene.items.onChange(t=>{e&&o(e=>({...e,items:t}))});return()=>{e=!1,n(),i(),a()}},[]);let U=e=>{let t=e.metadata?.[c.UNIT_NAME];if(typeof t==`string`&&t.trim())return t;let n=e.text?.plainText;return typeof n==`string`&&n.trim()?n:typeof e.name==`string`&&e.name.trim()?e.name:`Unknown`},ye=(0,q.useMemo)(()=>a.items.filter(e=>lr(e.metadata?.[c.FABRICATED])).filter(e=>S||e.createdUserId===y).filter(e=>e.id!==t).map(e=>({id:e.id,name:U(e)})).sort((e,t)=>e.name.localeCompare(t.name)),[a.items,t,S,y]),W=(0,q.useMemo)(()=>t&&a.items.find(e=>e.id===t)||null,[a.items,t]),G=async()=>t&&(await r.scene.items.getItems()).find(e=>e.id===t)||null,xe=async e=>{W&&(await r.scene.items.updateItems([W.id],t=>{let n={...t[0].metadata||{}};Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),t[0].metadata=n}),o(t=>({...t,items:t.items.map(t=>{if(t.id!==W.id)return t;let n={...t.metadata||{}};return Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),{...t,metadata:n}})})))},Ce=async t=>{if(!W)return;let n=[c.FABRICATED,c.INITIATIVE,c.ON_LIST,c.IN_PARTY];await r.scene.items.updateItems([W.id],r=>{let i=r[0].metadata,a={},o={};for(let[t,r]of Object.entries(i))t.startsWith(`${e.EXTENSIONID}/`)||(a[t]=r),n.includes(t)&&(o[t]=r);r[0].metadata={...a,...t,...o}}),o(r=>({...r,items:r.items.map(r=>{if(r.id!==W.id)return r;let i={},a={};for(let[t,o]of Object.entries(r.metadata||{}))t.startsWith(`${e.EXTENSIONID}/`)||(i[t]=o),n.includes(t)&&(a[t]=o);return{...r,metadata:{...i,...t,...a}}})}))},we=async()=>{k(await Ee())},Te=e=>{let t=e.trim(),n=t?t[0].toUpperCase():`A`;return`hsl(${Math.max(0,Math.min(25,n.charCodeAt(0)-65))/26*360}, 70%, 65%)`},K=async e=>{let[t,n]=await Promise.all([M(e),pe()?me(e):Promise.resolve([])]);return[...n.map(e=>({...e,source:`remote-user`})),...t.map(e=>({...e,source:`remote-shared`}))]},Oe=(0,q.useMemo)(()=>{let e=D.trim().toLowerCase(),t={local:0,"remote-user":1,"remote-shared":2},n=(e,n)=>t[e.source]===t[n.source]?e.favorite===n.favorite?e.name.localeCompare(n.name):e.favorite?-1:1:t[e.source]-t[n.source],r=[...le].sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);if(!e)return r.filter(e=>e.favorite).map(e=>({...e,source:`local`}));let i=r.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),a=ue.filter(e=>e.source===`remote-user`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),o=ue.filter(e=>e.source===`remote-shared`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e));return[...i.map(e=>({...e,source:`local`})),...a,...o].sort(n)},[le,ue,D]),Fe=async()=>{if(!t){await r.notification.show(`No unit selected to pin.`,`ERROR`);return}let n=await r.viewport.getWidth(),a=await r.viewport.getHeight(),o=a>800?700:a-100;if(!i){await r.popover.open({id:or,url:sr(t,!0),height:400,width:350,anchorPosition:{top:50,left:n-70},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},transformOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},hidePaper:!0,disableClickAway:!0}),await r.popover.close(e.CARDSID);return}await r.popover.open({id:e.CARDSID,url:sr(t,!1),height:o,width:350,anchorPosition:{left:n/2,top:a/2},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`CENTER`},transformOrigin:{vertical:`CENTER`,horizontal:`CENTER`},hidePaper:!0,disableClickAway:!0}),await r.popover.close(or)},Re=()=>{S&&ce(e=>!e)},ze=async()=>{if(!S)return;let e=await G();if(!e){await r.notification.show(`No unit selected to save.`,`ERROR`);return}R||(await ve(),z(!0));try{let t=(await r.player.getName()).trim(),n=pe()?await _e(e.metadata,t,se):await oe(e.metadata,t,se);await we();let i=pe()?`online Collection`:`Collection`;await r.notification.show(n===`created`?`Unit saved to ${i}.`:`Unit updated in ${i}.`)}catch(e){b.log(`Collection save failed`,e),await r.notification.show(`Could not save this unit to Collection.`,`ERROR`)}},Be=async()=>{if(!await G()){await r.notification.show(`No unit selected to import into.`,`ERROR`);return}L(null),F(``),de(!0)},Ve=async()=>{let e=await G();if(!e){await r.notification.show(`No unit selected to export.`,`ERROR`);return}try{let t=v(e.metadata),n=t[c.UNIT_NAME],i=typeof n==`string`?n.trim():``;if(!i){await r.notification.show(`Current unit has no valid unit name to export.`,`ERROR`);return}let a={name:i,author:(await r.player.getName()).trim()||`Unknown`,metadata:t};await navigator.clipboard.writeText(JSON.stringify(a,null,2)),await r.notification.show(`Unit data copied to clipboard.`)}catch(e){b.log(`Unit export failed`,e),await r.notification.show(`Could not copy unit data to clipboard.`,`ERROR`)}},He=()=>{de(!1),L(null),F(``)},Ue=e=>{let t=JSON.parse(e);if(!t||typeof t!=`object`||Array.isArray(t))throw Error(`Import data must be a JSON object.`);let n=t,r=n.metadata&&typeof n.metadata==`object`?n.metadata:t;if(!r||typeof r!=`object`||Array.isArray(r))throw Error(`Import data must include a metadata object.`);let i=v(r),a=i[c.UNIT_NAME];if(!(typeof a==`string`&&a.trim()))throw Error(`Imported metadata must include a valid unit name.`);return i},Y=async()=>{if(!await G()){L(`No unit selected to import into.`);return}let e=P.trim();if(!e){L(`Paste JSON data before importing.`);return}try{await Ce(Ue(e)),ce(!1),He(),await r.notification.show(`Unit data imported successfully.`)}catch(e){L(e instanceof Error?e.message:`Import failed.`)}},We=(e,t)=>{let n=(e||``).trim().toLowerCase();return n===`numb`||n===`derived`?0:n===`bool`?!1:n===`enum`?``:n===`resource`?{current:0,max:0}:n===`list`?[{id:`example-list-001`,name:`Example List Entry`,description:`Describe the effect here. Dice chips can be embedded like [1d20+${t?.firstNumericBid?`@${t.firstNumericBid}`:`@BID`}]`}]:``},Ge=()=>{let t=B.find(e=>e.attr_type===`numb`)?.attr_bid,n=B.find(e=>e.attr_type===`list`)||null,r=B.map(t=>({bid:t.attr_bid,name:t.attr_name,type:t.attr_type,metadataKey:`${e.EXTENSIONID}/${t.attr_bid}`})),i={[c.UNIT_NAME]:`Example Unit Name`};for(let n of B)i[`${e.EXTENSIONID}/${n.attr_bid}`]=We(n.attr_type,{firstNumericBid:t});let a={id:`example-list-001`,name:`Example Action Name`,description:`Example description with chips like [1d20+${t?`@${t}`:`@BID`}] and [2d6+3].`},o={id:`example-item-001`,name:`Example Item Name`,description:`Item details go here.`,inUse:!1},s=JSON.stringify(r,null,2),l=JSON.stringify(i,null,2),u=JSON.stringify(a,null,2),d=JSON.stringify(o,null,2),f=n?`${e.EXTENSIONID}/${n.attr_bid}`:`${e.EXTENSIONID}/<LIST_BID>`;return[`You are generating Forge unit import JSON metadata for this game system.`,``,`Requirements:`,`1. Output valid JSON only (no markdown, no comments).`,`2. Output the metadata object directly (key/value pairs), not prose.`,`3. Use provided metadata keys exactly as listed.`,`4. Include a valid unit name using the unit-name metadata key.`,`5. Match value types exactly: numb -> number, bool -> boolean, list -> array of objects, text -> string.`,`6. Do not add keys outside this extension mapping unless explicitly asked.`,``,`Extension ID: ${e.EXTENSIONID}`,`Unit Name Metadata Key: ${c.UNIT_NAME}`,``,`Attribute Dictionary (required mapping):`,s,``,`List Entry Structure Examples:`,`Standard/action-style list entry object:`,u,``,`Item-style list entry object (optional inUse flag):`,d,``,`If a metadata key is list-type (for example ${f}), its value should be an array of objects in one of the above shapes.`,``,`Output JSON in this metadata shape:`,l,``,`Now generate a [CREATURE/UNIT YOU WANT] metadata JSON object in that exact structure.`].join(`
`)},Ke=async()=>{try{let e=Ge();await navigator.clipboard.writeText(e),await r.notification.show(`AI template copied to clipboard.`)}catch(e){b.log(`AI template copy failed`,e),await r.notification.show(`Could not copy AI template to clipboard.`,`ERROR`)}},qe=()=>{let e=E.trim();if(ae(e),!e){A([]);return}(async()=>{R||(await ve(),z(!0)),A(await K(e))})().catch(async e=>{b.log(`Supabase collection search failed`,e),A([]),await r.notification.show(`Could not search online collection.`,`ERROR`)})},Je=async e=>{if(!W){await r.notification.show(`No unit selected to import into.`,`ERROR`);return}try{await Ce(e.metadata),ce(!1),await r.notification.show(e.source===`local`?`Imported ${e.name}.`:`Imported ${e.name} from online collection.`)}catch(e){b.log(`Collection record import failed`,e),await r.notification.show(`Could not import collection record.`,`ERROR`)}},Ye=async e=>{try{if(e.source===`remote-user`)await Se(e.id),A(t=>t.filter(t=>!(t.source===`remote-user`&&t.id===e.id)));else if(e.source===`local`)await De(e.id),k(t=>t.filter(t=>t.id!==e.id));else return;await r.notification.show(`Deleted ${e.name} from Collection.`)}catch(e){b.log(`Collection record delete failed`,e),await r.notification.show(`Could not delete collection record.`,`ERROR`)}};return(0,q.useEffect)(()=>{T&&we().catch(e=>{b.log(`Failed to load collection records`,e)})},[T]),(0,q.useEffect)(()=>{T&&(ae(``),ie(``),A([]))},[T]),(0,J.jsxs)(hn,{$theme:V,children:[(0,J.jsxs)(gn,{children:[(0,J.jsx)(vn,{children:(0,J.jsxs)(yn,{children:[(0,J.jsxs)(bn,{$theme:V,"aria-label":`Choose Unit`,value:``,onChange:e=>{let t=e.target.value;t&&n(t)},children:[(0,J.jsx)(`option`,{value:``,children:`Choose Unit`}),ye.map(e=>(0,J.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,J.jsx)(xn,{type:`button`,$theme:V,"aria-label":`Close Card`,onClick:async()=>{await r.popover.close(i?or:e.CARDSID)},children:(0,J.jsx)(Sn,{src:`/close.svg`,alt:``,"aria-hidden":`true`})})]})}),C?t?W?(0,J.jsx)(fn,{systemTheme:V,backgroundUrl:V.background_url,cardLayout:ge,attributes:B,unitItem:W,onUpdateMetadata:xe}):(0,J.jsx)(_n,{$theme:V,children:`Unit not found in current scene.`}):(0,J.jsx)(_n,{$theme:V,children:`No unit id supplied in URL.`}):(0,J.jsx)(_n,{$theme:V,children:`Loading card…`})]}),(0,J.jsxs)(Cn,{$theme:V,$open:T,children:[(0,J.jsxs)(Hn,{children:[(0,J.jsxs)(Un,{children:[(0,J.jsx)(Wn,{type:`button`,$theme:V,"aria-label":`Pin`,onClick:()=>{Fe()},children:(0,J.jsx)(x,{theme:H,text:`Pin/Unpin card popover`,children:(0,J.jsx)(Pe,{size:16})})}),(0,J.jsx)(Gn,{type:`button`,$theme:V,$active:se,"aria-label":`Favorite`,disabled:!S,onClick:Re,children:(0,J.jsx)(x,{theme:H,text:`Mark next save as favorite`,children:(0,J.jsx)(O,{size:16,fill:se?`currentColor`:`none`})})}),(0,J.jsx)(Wn,{type:`button`,$theme:V,"aria-label":`CollectionSave`,disabled:!S,onClick:ze,children:(0,J.jsx)(x,{theme:H,text:`Save current unit to Collection`,children:(0,J.jsx)(ke,{size:16})})})]}),(0,J.jsxs)(Un,{children:[(0,J.jsx)(Wn,{type:`button`,$theme:V,"aria-label":`Import`,onClick:Be,children:(0,J.jsx)(x,{theme:H,text:`Import unit data from JSON`,children:(0,J.jsx)(Me,{size:16})})}),(0,J.jsx)(Wn,{type:`button`,$theme:V,"aria-label":`Export`,onClick:Ve,children:(0,J.jsx)(x,{theme:H,text:`Export current unit data to clipboard`,children:(0,J.jsx)(re,{size:16})})}),(0,J.jsx)(Wn,{type:`button`,$theme:V,"aria-label":`Card Help`,onClick:()=>{N(!0)},children:(0,J.jsx)(x,{theme:H,text:`Help with BIDs and dice notation`,children:(0,J.jsx)(Ae,{size:16})})})]})]}),(0,J.jsx)(wn,{$theme:V,children:(0,J.jsx)(x,{theme:H,text:T?`Close collection tray`:`Open collection tray`,children:(0,J.jsx)(Tn,{type:`button`,$theme:V,"aria-label":T?`Close Tray`:`Open Tray`,onClick:()=>{ne(e=>!e)},children:(0,J.jsx)(be,{size:22})})})}),(0,J.jsx)(En,{$theme:V,children:T?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Dn,{$theme:V,children:(0,J.jsx)(On,{children:Oe.length===0?(0,J.jsx)(_n,{$theme:V,children:`No collection records found.`}):Oe.map(e=>(0,J.jsxs)(kn,{$theme:V,children:[(0,J.jsxs)(An,{children:[(0,J.jsxs)(jn,{$theme:V,children:[e.favorite?(0,J.jsx)(Mn,{children:`❤`}):null,(0,J.jsx)(Nn,{children:e.name})]}),(0,J.jsxs)(Pn,{children:[(0,J.jsx)(`span`,{children:`→`}),(0,J.jsx)(In,{$color:Te(e.author),children:e.author}),(0,J.jsxs)(Fn,{$theme:V,title:e.source===`local`?`Local`:e.source===`remote-user`?`My Cloud`:`Shared`,children:[e.source===`local`?(0,J.jsx)(Ne,{size:11}):null,e.source===`remote-user`?(0,J.jsx)(je,{size:11}):null,e.source===`remote-shared`?(0,J.jsx)(Le,{size:11}):null]})]})]}),(0,J.jsxs)(Ln,{children:[(0,J.jsx)(Rn,{type:`button`,$theme:V,$variant:`import`,onClick:()=>{Je(e)},children:`Import`}),e.source===`remote-shared`?null:(0,J.jsx)(Rn,{type:`button`,$theme:V,$variant:`delete`,onClick:()=>{Ye(e)},children:`X`})]})]},`${e.source}:${e.id}`))})}),(0,J.jsxs)(zn,{children:[(0,J.jsx)(Bn,{$theme:V,type:`text`,value:E,placeholder:`Enter query...`,onChange:e=>{ie(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),qe())}}),(0,J.jsx)(Vn,{type:`button`,$theme:V,"aria-label":`Search`,onClick:qe,children:(0,J.jsx)(Ie,{size:16})})]})]}):null})]}),j?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(er,{onClick:He}),(0,J.jsxs)(tr,{$theme:V,onClick:e=>{e.stopPropagation()},children:[(0,J.jsx)(nr,{$theme:V,children:`Import Unit Data`}),(0,J.jsx)(Kn,{$theme:V,value:P,placeholder:`Paste exported unit JSON here`,onChange:e=>{F(e.target.value),I&&L(null)}}),I?(0,J.jsx)(Yn,{$theme:V,children:I}):null,(0,J.jsxs)(rr,{children:[(0,J.jsx)(Jn,{type:`button`,$theme:V,onClick:()=>{Ke()},children:`AI Template`}),(0,J.jsx)(qn,{type:`button`,$theme:V,onClick:He,children:`Cancel`}),(0,J.jsx)(qn,{type:`button`,$theme:V,$variant:`primary`,onClick:Y,children:`Import`})]})]})]}):null,fe?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(er,{onClick:()=>{N(!1)}}),(0,J.jsxs)(tr,{$theme:V,onClick:e=>{e.stopPropagation()},children:[(0,J.jsx)(nr,{$theme:V,children:`Card Help`}),(0,J.jsxs)(Xn,{$theme:V,children:[(0,J.jsx)(Zn,{$theme:V,children:`Rollable Values`}),(0,J.jsxs)(Qn,{children:[(0,J.jsx)(`li`,{children:`Right-click a value on the card to open the field menu.`}),(0,J.jsxs)(`li`,{children:[`The menu shows the field name and BID in brackets, like `,(0,J.jsx)(`strong`,{children:`[Z017]`}),`.`]}),(0,J.jsxs)(`li`,{children:[`For rollable fields, use that menu to choose `,(0,J.jsx)(`strong`,{children:`Edit value`}),`, `,(0,J.jsx)(`strong`,{children:`Roll with Advantage`}),`, or `,(0,J.jsx)(`strong`,{children:`Roll with Disadvantage`}),`.`]})]}),(0,J.jsx)(Zn,{$theme:V,children:`Dice Chips in Text`}),(0,J.jsxs)(Qn,{children:[(0,J.jsx)(`li`,{children:`Wrap a formula in square brackets to create a clickable dice chip.`}),(0,J.jsx)(`li`,{children:`You can also use fl(floor) to round down or ce(ceil) to round up. Ex; [1d20+fl(@Strength/2)]`})]}),(0,J.jsx)($n,{$theme:V,children:`Melee attack: [1d20+5] to hit.`}),(0,J.jsx)(Zn,{$theme:V,children:`Using Attributes in Formulas`}),(0,J.jsxs)(Qn,{children:[(0,J.jsxs)(`li`,{children:[`Reference by BID with `,(0,J.jsx)(`strong`,{children:`@BID`}),`.`]}),(0,J.jsxs)(`li`,{children:[`Reference by attribute name with `,(0,J.jsx)(`strong`,{children:`@NAME`}),`. Swap spaces with underscores.`]})]}),(0,J.jsx)($n,{$theme:V,children:`Damage: [2d8+@Z017]`}),(0,J.jsx)($n,{$theme:V,children:`Damage: [2d8+@Strength]`})]}),(0,J.jsx)(rr,{children:(0,J.jsx)(qn,{type:`button`,$theme:V,$variant:`primary`,onClick:()=>{N(!1)},children:`Close`})})]})]}):null]})},{})})}));