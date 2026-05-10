import{C as e,F as t,N as n,O as r,R as i,S as a,T as o,_ as s,b as c,g as l,o as u,s as d,t as f,w as p,y as m}from"./defaultgamesystem-CGk0_Y03.js";import{$ as h,A as g,At as _,B as v,D as y,E as ee,F as b,G as x,H as S,I as te,J as C,K as w,L as ne,M as re,N as T,O as ie,Ot as ae,P as E,Q as oe,R as D,St as O,U as k,V as se,W as A,X as ce,Y as le,Z as j,_t as M,a as N,at as P,bt as ue,c as de,ct as fe,dt as F,et as I,ft as L,g as pe,gt as R,ht as z,i as me,it as he,j as ge,k as B,lt as _e,mt as ve,nt as V,o as ye,ot as H,pt as U,q as be,rt as xe,s as W,st as Se,t as Ce,tt as we,ut as Te,vt as Ee,w as De,xt as Oe,y as ke,yt as Ae,z as je}from"./unitCollectionRemote-2E7eNN0o.js";import{t as Me}from"./Translation-CUxziGjh.js";/* empty css               */var Ne=O(`book-marked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),Pe=O(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),Fe=O(`cloudy`,[[`path`,{d:`M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z`,key:`44yre2`}],[`path`,{d:`M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61`,key:`leugyv`}]]),Ie=O(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),Le=O(`hard-drive`,[[`line`,{x1:`22`,x2:`2`,y1:`12`,y2:`12`,key:`1y58io`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}],[`line`,{x1:`6`,x2:`6.01`,y1:`16`,y2:`16`,key:`sgf278`}],[`line`,{x1:`10`,x2:`10.01`,y1:`16`,y2:`16`,key:`1l4acy`}]]),Re=O(`pin`,[[`path`,{d:`M12 17v5`,key:`bb1du9`}],[`path`,{d:`M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z`,key:`1nkz8b`}]]),ze=O(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Be=O(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Ve=O(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),He=i(n(),1),G=i(t(),1);const Ue=e=>{let t=[...Array.isArray(e)?e:[]].sort((e,t)=>e.row===t.row?e.col-t.col:e.row-t.row),n=[];return t.forEach(e=>{let t=n[n.length-1];if(!t||t.row!==e.row){n.push({row:e.row,items:[e]});return}t.items.push(e)}),{sorted:t,rows:n}};var K=o(),We=e=>`
    0 1px 1px ${s(e.background,.95)},
    0 0 2px ${s(e.background,.85)}
  `,Ge=d.div`
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
`,Ke=d.div`
  position: relative;
  z-index: 1;
`,qe=d.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`,q=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`,Je=d(q)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  height: calc(2 * 1.1em);
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100% !important;
`,Ye=d.input`
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
`,Xe=d(d.div`
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
`,Ze=d.div`
  color: ${e=>e.$theme.primary};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`,Qe=d.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?s(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?s(e.$theme.offset,.5):s(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>s(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?We(e.$theme):`none`};
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
`,$e=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  height: 40px;
  box-sizing: border-box;
`,et=d.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`,tt=d.span`
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
`,nt=d.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?s(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?s(e.$theme.offset,.5):s(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>s(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?We(e.$theme):`none`};
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
`,rt=d.select`
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
`,it=d.div`
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
`,at=d(it)`
  border-style: solid;
  background: ${e=>s(e.$theme.primary,.75)};
  color: ${e=>s(e.$theme.offset,.96)};
  box-shadow: ${e=>`0 4px 14px ${s(e.$theme.background,.65)}`};
  text-shadow: ${e=>`1px 1px 0 ${s(e.$theme.background,.95)}`};
  font-weight: 700;
  font-style: italic;
`,ot=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
`,st=d.span`
  color: ${e=>s(e.$theme.primary,.92)};
  flex-shrink: 0;
`,ct=d.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
`,lt=d.button`
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
`,ut=d.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,dt=d.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,ft=d.div`
  flex: 1;
  min-width: 0;
`,pt=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 18px;
`,mt=d.div`
  width: 100%;
  height: 5px;
  background: ${e=>`linear-gradient(10deg, ${e.$theme.border||`white`}, rgba(255,255,255,0))`};
`,ht=d.div`
  width: 100%;
  height: ${e=>`${e.$heightPx}px`};
  border-radius: 8px;
  border: 1px solid ${e=>s(e.$theme.border,.9)};
  background: ${e=>s(e.$theme.background,.42)};
  overflow: hidden;
  box-sizing: border-box;
`,gt=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,_t=d.div`
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
`,vt=d.div`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${e=>e.$theme.border||`rgba(255,255,255,0.5)`};
`,yt=d.div`
  width: 100%;
  height: 10px;
  background: ${e=>`linear-gradient(to bottom, ${e.$theme.border||`rgba(255,255,255,0.2)`}, transparent)`};
`,bt=d.div`
  width: 100%;
  height: 2px;
  background: ${e=>e.$theme.border||`#222`};
  box-shadow: ${e=>`inset 0 1px 0 ${e.$theme.border||`#444`}, 0 1px 0 #000`};
`,xt=d.div`
  width: 100%;
  height: 6px;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6' preserveAspectRatio='none'%3E%3Cpolyline points='0,6 6,0 12,6 18,0 24,6' fill='none' stroke='${encodeURIComponent(e.$theme.border||`#ffffff`)}' stroke-width='1.5'/%3E%3C/svg%3E")`};
`,St=d.div`
  width: 100%;
  height: 4px;
  background: ${e=>e.$theme.border||`white`};
  animation: flicker 1.2s infinite alternate;

  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 1; }
  }
`,Ct=d.div`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`,wt=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${e=>s(e.$theme.border,.85)};
  padding-bottom: 4px;
  margin-bottom: 4px;
`,Tt=d.div`
  color: ${e=>e.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,Et=d.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Dt=d.div`
  margin-bottom: 8px;
`,Ot=d.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`,kt=d.div`
  width: 20px;
  display: flex;
  justify-content: center;
`,At=d.div`
  flex: 1;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`,jt=d.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Mt=d.input`
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
`,Nt=d.textarea`
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
`,Pt=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`,Ft=d.button`
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
`,It=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Lt=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 9999;
`,Rt=d.div`
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
`,zt=d.h3`
  margin: 0 0 12px;
  color: ${e=>s(e.$theme.primary,.98)};
  font-size: 16px;
`,Bt=d.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
`,Vt=d.span`
  color: ${e=>s(e.$theme.offset,.95)};
  font-size: 13px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
`,Ht=d.button`
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
`,Ut=d.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`,Wt=d.div`
  flex: 1;
`,Gt=d.input`
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
`,Kt=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 8px;
`,qt=d.span`
  color: ${e=>e.$theme.offset||f.theme_offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Jt=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: space-evenly;
  width: ${e=>e.$fullWidth?`100%`:`auto`};
`,Yt=d.input`
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
`,Xt=d.button`
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
`,Zt=d.div`
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
`,Qt={sm:`14px`,md:`16px`,lg:`18px`},$t={sm:`14px`,md:`16px`,lg:`18px`},en={sm:`14px`,md:`16px`,lg:`18px`},tn={sm:`14px`,md:`16px`,lg:`18px`},nn=40,rn={anchor:Oe,aperture:ue,award:Ae,"battery-charging":M,book:z,calendar:U,clock:Te,"cloud-lightning":_e,compass:Se,"dollar-sign":P,feather:we,eye:xe,heart:j,moon:le,music:C,shield:x,star:se,sun:v,target:ne,users:E,wind:re,zap:g,drama:he,carrot:L,bone:R,sword:je,swords:D,axe:Ee,"bow-arrow":ve,coins:fe,wand:T,flower:I,skull:A,castle:F,cross:H,"test-tube-diagonal":te,squirrel:S,snowflake:k,shell:w,pickaxe:be,"heart-plus":oe,"heart-crack":h,fan:V},an=(e,t,n,r)=>{let i=typeof e==`number`?e:typeof e==`string`?Number(e):NaN;if(!Number.isFinite(i))return r;let a=Math.trunc(i);return Math.max(t,Math.min(n,a))},on=(e,t=`center`)=>{if(typeof e!=`string`)return t;let n=e.trim().toLowerCase();return n===`left`||n===`center`||n===`right`?n:t},J=e=>String(e?.attr_bid??e?.bid??``).trim(),sn=e=>String(e?.attr_abbr??e?.abbr??``).trim(),Y=e=>String(e?.attr_name??e?.name??``).trim(),cn=e=>String(e?.attr_type??e?.type??``).trim().toLowerCase(),X=e=>{let t=e?.attr_func??e?.func??``;return typeof t==`string`?t.trim():``},Z=e=>e?.attr_meta??e?.meta??{},Q=(e,t)=>t&&e.find(e=>{let n=e,r=J(n)===t,i=String(n.id??``)===String(t);return r||i})||null,ln=(e,t)=>e?t===`abbr`?sn(e):t===`name`||!t||t===`text`?Y(e):``:``,un=(e,t)=>t===`icon`?!0:ln(e,t).length>0,dn=(e,t,n,r=16)=>t===`icon`?(0,K.jsx)(rn[String(n||``).trim().toLowerCase()]||se,{size:r,"aria-hidden":`true`}):ln(e,t),fn=(e,t)=>Array.isArray(t)?t.filter(t=>!!Q(e,t)):[],pn=(e,t)=>fn(e,t).filter(t=>cn(Q(e,t))===`bool`),mn=(e,t)=>{let n=Q(e,t);return!n||cn(n)!==`list`?`List Attribute`:Y(n)};const hn=({systemTheme:t,backgroundUrl:n,cardLayout:i,attributes:a,unitItem:o,onUpdateMetadata:s})=>{let[l,u]=(0,G.useState)({}),[d,f]=(0,G.useState)({}),[p,m]=(0,G.useState)(null),[h,g]=(0,G.useState)(null),v=(0,G.useRef)({}),y=(0,G.useRef)({}),{rows:ee}=(0,G.useMemo)(()=>Ue(i),[i]),b=(0,G.useMemo)(()=>{let e=o.metadata?.[c.UNIT_NAME];if(typeof e==`string`&&e.trim())return e;let t=o.text?.plainText;return typeof t==`string`&&t.trim()?t:typeof o.name==`string`&&o.name.trim()?o.name:`Unknown`},[o]),[x,S]=(0,G.useState)(b);(0,G.useEffect)(()=>{S(b)},[b]);let te=async()=>{let e=x.trim(),t=b.trim()||`Unknown`,n=e||t;S(n),n!==b&&await s({[c.UNIT_NAME]:n})},C=t=>`${e.EXTENSIONID}/${t}`,w=e=>{let t=o.metadata?.[C(e)];return t==null?``:typeof t==`string`?t:typeof t==`number`||typeof t==`boolean`?String(t):``},ne=e=>{let t=o.metadata?.[C(e)];if(typeof t==`boolean`)return t;if(typeof t==`number`)return t!==0;if(typeof t==`string`){let e=t.trim().toLowerCase();return e===`true`||e===`1`||e===`yes`||e===`on`}return!1},re=(e,t)=>l[e]??w(t),T=e=>X(e).length>0,{bidValueMap:ie,nameValueMap:E}=(0,G.useMemo)(()=>W(a,e=>w(e).trim(),J,cn,X,Y,sn),[a,o.metadata]),oe=e=>{let t=X(e);if(!t)return null;let n=de(t,{bidValueMap:ie,nameValueMap:E,onMissingBid:`error`});return!n.valid||!n.notation?(_.warn(`[FORGE] Could not convert attr_func for ${J(e)||`unknown`}: ${n.error||`Unknown conversion error`}`),null):n.notation},D=async(e,t)=>{try{let n=await r.room.getMetadata(),i=(await r.party.getPlayers()).find(e=>e.id===o.createdUserId),a=await r.player.getId(),s=await r.player.getColor();await ae({notation:e,actionName:t,senderName:b,senderId:o.createdUserId||a||o.id,senderColor:i?.color||s||`#ffffff`},n)}catch(t){_.error(`Failed to send dice roll from CardLayoutRenderer`,e,t),_.log(e)}},O=async e=>{if(!e)return;let t=oe(e);t&&await D(t,Y(e)||J(e)||`Roll`)},k=e=>o.metadata?.[C(e)],se=(e,t)=>{let n=k(e),r=n&&typeof n==`object`&&!Array.isArray(n)?n:null,i=Z(t)?.resource;return{current:r?Number(r.current??i?.defaultCurrent??0):Number(i?.defaultCurrent??0),max:r?Number(r.max??i?.defaultMax??0):Number(i?.defaultMax??0)}},A=async(e,t)=>{await s({[C(e)]:t})},ce=e=>{let t=Z(e)?.derived?.formula,n=typeof t==`string`&&t.trim().length>0?t.trim():X(e);if(!n)return`-`;let r=de(n,{bidValueMap:ie,nameValueMap:E,onMissingBid:`error`});if(!r.valid||!r.notation)return`-`;let i=r.notation.trim(),a=Number(i);if(!Number.isFinite(a))return i||`-`;let o=Number(Z(e)?.derived?.precision),s=Number.isFinite(o)?Math.max(0,Math.min(Math.trunc(o),8)):0,c=Z(e)?.derived?.displayMode,l=s>0?a.toFixed(s):String(a);return c===`percent`?`${l}%`:l},le=/(\d+)d(\d+)([kd][hl]\d+|!)?/gi,j=(e,t)=>{let n=Array.from(e.matchAll(le));if(n.length!==1)return null;let r=n[0],i=r[0]||``,a=r[1]||``,o=r[2]||``,s=r[3]||``,c=r.index;if(!i||!a||!o||typeof c!=`number`)return null;let l=Number(a);if(!Number.isFinite(l)||l!==1||s)return null;let u=`2d${o}${t===`advantage`?`kh1`:`kl1`}`;return`${e.slice(0,c)}${u}${e.slice(c+i.length)}`};(0,G.useEffect)(()=>()=>{Object.values(v.current).forEach(e=>{window.clearTimeout(e)})},[]);let M=e=>!!d[e],N=(e,t,n,r)=>{t&&m({draftKey:e,attribute:t,input:n,isRollable:r})},P=()=>{m(null)},ue=e=>{g(e)},fe=()=>{g(null)};(0,G.useEffect)(()=>{if(!p&&!h)return;let e=e=>{e.key===`Escape`&&(m(null),g(null))};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[p,h]);let F=async e=>{if(!h)return;let t=e===`normal`?h.notation:j(h.notation,e);if(!t)return;let n=e===`normal`?``:e===`advantage`?` (Advantage)`:` (Disadvantage)`;await D(t,`${h.actionName}${n}`)},I=(e,t)=>{f(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},L=e=>{f(t=>{let{[e]:n,...r}=t;return r})},pe=(e,t)=>{let n=v.current[e];n&&window.clearTimeout(n),v.current[e]=window.setTimeout(()=>{y.current[e]=!0,I(e,t),delete v.current[e]},500)},R=e=>{let t=v.current[e];t&&(window.clearTimeout(t),delete v.current[e])},z=e=>y.current[e]?(delete y.current[e],!0):!1,me=async(e,t)=>{await s({[C(e)]:t})},he=async(e,t)=>{await s({[C(e)]:t})},B=e=>{let t=o.metadata?.[C(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``}}):[]},_e=e=>{let t=o.metadata?.[C(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``,inUse:!!t.inUse}}):[]},ve=(e,t)=>{_.log(e,t)},V=e=>{e&&(e.style.height=`0px`,e.style.height=`${Math.max(e.scrollHeight,44)}px`)},ye=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=e[0],r=(e[1]||``).trim();if(!r)continue;let i=de(r,{bidValueMap:ie,nameValueMap:E,onMissingBid:`error`});!i.valid||!i.notation||t.push({raw:n,notation:i.notation})}return t},H=async(e,t,n)=>{ve(`List metadata update`,{listType:n.listType,bid:e,reason:n.reason,entryId:n.entryId,field:n.field,entryCount:t.length,timestamp:Date.now()}),await s({[C(e)]:t})},U=e=>e===`dash`||e===`dashed`?(0,K.jsx)(vt,{$theme:t}):e===`shadow`?(0,K.jsx)(yt,{$theme:t}):e===`ridge`?(0,K.jsx)(bt,{$theme:t}):e===`zigzag`?(0,K.jsx)(xt,{$theme:t}):e===`pulse`?(0,K.jsx)(St,{$theme:t}):(0,K.jsx)(mt,{$theme:t}),be=e=>{let n=e.type,r=(()=>n===`derived-value`||n===`enum-value`||n===`resource`?`text-value`:n===`column-derived`?`column-value`:n)(),i=e.styles||{},o=Q(a,i.attributeId),s=on(i.textAlign??i.align,`center`),c=i.stretch===!0;if(r===`line-break`)return(0,K.jsx)(q,{$theme:t,$full:!0,children:U(i.styleDesign)},e.id);if(r===`line-spacer`)return(0,K.jsx)(pt,{$full:e.fullsize},e.id);if(r===`image`){let n=typeof i.imageUrl==`string`?i.imageUrl.trim():``,r=an(i.imageCols,1,2,e.fullsize?2:1),a=an(i.imageRows,1,6,1);return(0,K.jsx)(q,{$theme:t,$full:r===2,children:(0,K.jsx)(ht,{$theme:t,$heightPx:nn*a,children:n?(0,K.jsx)(gt,{src:n,alt:`Card component`,loading:`lazy`}):(0,K.jsx)(_t,{$theme:t,children:`No image selected`})})},e.id)}if(r===`text`){let n=Qt[i.fontSize||`md`],r=un(o,i.labelMode)?dn(o,i.labelMode,i.labelIcon,18):`Title Header`,a=`text:${e.id}:${J(o)||`none`}`;return(0,K.jsx)(q,{$theme:t,$full:e.fullsize,onContextMenu:o?e=>{e.preventDefault(),N(a,o,null,!1)}:void 0,children:(0,K.jsx)(Ze,{$theme:t,$fontSize:n,$weight:700,$stretch:c,$align:s,children:r})},e.id)}if(r===`text-value`){let n=tn[i.fontSize||`md`],r=un(o,i.labelMode),a=dn(o,i.labelMode,i.labelIcon,18),s=i.labelPosition===`right`?`right`:`left`,d=on(i.textAlign??i.align,`center`),f=i.fontWeight===`bold`?700:400,p=i.fontStyle===`italic`?`italic`:`normal`,m=J(o),h=cn(o),g=T(o),_=`text-value:${e.id}:${m||`none`}`,v=g&&M(_),y;if(h===`derived`)y=(0,K.jsx)(at,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,title:`Formula: ${Z(o)?.derived?.formula||X(o)||`Derived formula`}`,onContextMenu:o?e=>{e.preventDefault(),N(_,o,null,!1)}:void 0,children:ce(o)});else if(h===`enum`){let e=Array.isArray(Z(o)?.enum?.options)?(Z(o)?.enum?.options||[]).map(e=>String(e||``).trim()).filter(e=>e.length>0):[];y=(0,K.jsx)(rt,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,value:e.includes(m?w(m).trim():``)?w(m).trim():e[0]||``,disabled:!m,onContextMenu:o?e=>{e.preventDefault(),N(_,o,null,!1)}:void 0,onChange:m?async e=>{await A(m,e.target.value)}:void 0,children:e.length===0?(0,K.jsx)(`option`,{value:``,children:`No options`}):e.map(e=>(0,K.jsx)(`option`,{value:e,children:e},e))})}else if(h===`resource`){let e=Z(o)?.resource,r=!!e?.showPips,i=m?se(m,o):{current:0,max:0},a=Number(e?.pipCap??i.max??0),s=Number.isFinite(a)?Math.max(0,Math.min(Math.round(a),15)):0;if(r&&s>0)y=(0,K.jsx)(ct,{onContextMenu:o?e=>{e.preventDefault(),N(_,o,null,!1)}:void 0,children:Array.from({length:s}).map((e,n)=>(0,K.jsx)(lt,{$theme:t,$filled:n<Math.max(0,Math.min(i.current,s)),type:`button`,disabled:!m,onClick:m?async()=>{let e=Math.max(0,Math.min(i.current,s));await A(m,{current:n+1===e?n:n+1,max:i.max})}:void 0},`text-resource-pip-${n}`))});else if(r)y=(0,K.jsx)(it,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,children:`-`});else{let e=`${_}:current`,r=`${_}:max`;y=(0,K.jsxs)(ot,{children:[(0,K.jsx)(nt,{$theme:t,$fontSize:n,$align:`center`,$weight:f,$fontStyle:p,$stretch:c,type:`text`,value:l[e]??String(i.current),onChange:t=>{let n=t.target.value;u(t=>({...t,[e]:n}))},onBlur:async t=>{if(!m)return;let n=Number(t.target.value);await A(m,{current:Number.isFinite(n)?n:i.current,max:i.max}),u(t=>{let{[e]:n,...r}=t;return r})},placeholder:`0`}),(0,K.jsx)(st,{$theme:t,children:`/`}),(0,K.jsx)(nt,{$theme:t,$fontSize:n,$align:`center`,$weight:f,$fontStyle:p,$stretch:c,type:`text`,value:l[r]??String(i.max),onChange:e=>{let t=e.target.value;u(e=>({...e,[r]:t}))},onBlur:async e=>{if(!m)return;let t=Number(e.target.value),n=Number.isFinite(t)?t:i.max;await A(m,{current:i.current,max:n}),u(e=>{let{[r]:t,...n}=e;return n})},placeholder:`0`})]})}}else y=(0,K.jsx)(nt,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,$isRollable:g,type:`text`,readOnly:g&&!v,value:m?re(_,m):``,onChange:g&&!v?void 0:e=>{if(!m)return;let t=e.target.value;u(e=>({...e,[_]:t}))},onBlur:g&&!v?void 0:async e=>{if(!m)return;let t=e.target.value;await me(m,t),u(e=>{let{[_]:t,...n}=e;return n}),g&&L(_)},onClick:g?()=>{v||z(_)||O(o)}:void 0,onContextMenu:o?e=>{e.preventDefault(),N(_,o,e.currentTarget,g)}:void 0,onTouchStart:g?e=>{v||pe(_,e.currentTarget)}:void 0,onTouchEnd:g?()=>{R(_)}:void 0,onTouchCancel:g?()=>{R(_)}:void 0,onKeyDown:e=>{if(g&&!v&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),O(o);return}(v||!g)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`});let ee=r?(0,K.jsx)(tt,{$theme:t,$fontSize:n,$stretch:c,$weight:f,$fontStyle:p,children:a}):null;return(0,K.jsx)($e,{$full:e.fullsize,children:(0,K.jsxs)(et,{children:[s===`left`?ee:null,y,s===`right`?ee:null]})},e.id)}if(r===`text-checkbox`){let n=$t[i.fontSize||`md`],r=e.fullsize?6:3,o=Math.max(1,Math.min(r,Number(i.checkboxCount||1))),s=[...pn(a,i.bidList)].slice(0,o);for(;s.length<o;)s.push(``);let l=Q(a,s[0]||i.attributeId),u=un(l,i.labelMode),d=dn(l,i.labelMode,i.labelIcon,16),f=i.inputType===`slider`,p=i.labelPosition===`right`?`right`:`left`,m=i.fontWeight===`bold`?700:400,h=i.fontStyle===`italic`?`italic`:`normal`,g=u?(0,K.jsx)(qt,{$theme:t,$fontSize:n,$stretch:c,$weight:m,$fontStyle:h,children:d}):null;return(0,K.jsx)(q,{$theme:t,$full:e.fullsize,children:(0,K.jsxs)(Kt,{children:[p===`left`?g:null,(0,K.jsx)(Jt,{$fullWidth:!g,children:Array.from({length:o}).map((n,r)=>{let i=s[r]||``,o=i?ne(i):!1,c=i?Q(a,i):null,l=`text-checkbox:${e.id}:${i||`index-${r}`}`;return f?(0,K.jsx)(Xt,{type:`button`,$theme:t,$active:o,disabled:!i,onClick:i?()=>{he(i,!o)}:void 0,onContextMenu:c?e=>{e.preventDefault(),N(l,c,null,!1)}:void 0,children:(0,K.jsx)(Zt,{$theme:t,$active:o})},`slider-${r}`):(0,K.jsx)(Yt,{$theme:t,type:`checkbox`,disabled:!i,checked:o,onChange:i?e=>{he(i,e.target.checked)}:void 0,onContextMenu:c?e=>{e.preventDefault(),N(l,c,null,!1)}:void 0},`checkbox-${r}`)})}),p===`right`?g:null]})},e.id)}if(r===`column-text`){let n=en[i.fontSize||`md`],r=fn(a,i.bidList),o=i.fontWeight===`bold`?700:400,s=i.fontStyle===`italic`?`italic`:`normal`;return r.length===0?null:(0,K.jsx)(q,{$theme:t,$full:e.fullsize,children:(0,K.jsx)(ut,{children:r.map(r=>{let l=Q(a,r),u=i.labelMode||`name`,d=un(l,u),f=dn(l,u,i.labelIcon,16);return d?(0,K.jsx)(dt,{children:(0,K.jsx)(Xe,{$theme:t,$fontSize:n,$stretch:c,$align:`center`,$weight:o,$fontStyle:s,onContextMenu:l?t=>{t.preventDefault(),N(`column-text:${e.id}:${r}`,l,null,!1)}:void 0,children:f})},r):null})})},e.id)}if(r===`column-value`){let n=en[i.fontSize||`md`],r=fn(a,i.bidList),o=i.fontWeight===`bold`?700:400,s=i.fontStyle===`italic`?`italic`:`normal`;return r.length===0?null:(0,K.jsx)(q,{$theme:t,$full:e.fullsize,children:(0,K.jsx)(ut,{children:r.map(r=>{let i=Q(a,r),d=cn(i),f=T(i),p=`column-value:${e.id}:${r}`,m=f&&M(p),h;if(d===`derived`)h=(0,K.jsx)(at,{$theme:t,$fontSize:n,$align:`center`,$weight:o,$fontStyle:s,$stretch:c,title:`Formula: ${Z(i)?.derived?.formula||X(i)||`Derived formula`}`,onContextMenu:i?e=>{e.preventDefault(),N(p,i,null,!1)}:void 0,children:ce(i)});else if(d===`enum`){let e=Array.isArray(Z(i)?.enum?.options)?(Z(i)?.enum?.options||[]).map(e=>String(e||``).trim()).filter(e=>e.length>0):[],a=w(r).trim();h=(0,K.jsx)(rt,{$theme:t,$fontSize:n,$align:`center`,$weight:o,$fontStyle:s,$stretch:c,value:e.includes(a)?a:e[0]||``,onContextMenu:i?e=>{e.preventDefault(),N(p,i,null,!1)}:void 0,onChange:async e=>{await A(r,e.target.value)},children:e.length===0?(0,K.jsx)(`option`,{value:``,children:`No options`}):e.map(e=>(0,K.jsx)(`option`,{value:e,children:e},e))})}else if(d===`resource`){let e=Z(i)?.resource,a=!!e?.showPips,d=se(r,i),f=Number(e?.pipCap??d.max??0),m=Number.isFinite(f)?Math.max(0,Math.min(Math.round(f),15)):0;if(a&&m>0)h=(0,K.jsx)(ct,{onContextMenu:i?e=>{e.preventDefault(),N(p,i,null,!1)}:void 0,children:Array.from({length:m}).map((e,n)=>(0,K.jsx)(lt,{$theme:t,$filled:n<Math.max(0,Math.min(d.current,m)),type:`button`,onClick:async()=>{let e=Math.max(0,Math.min(d.current,m));await A(r,{current:n+1===e?n:n+1,max:d.max})}},`column-resource-pip-${r}-${n}`))});else if(a)h=(0,K.jsx)(it,{$theme:t,$fontSize:n,$align:`center`,$weight:o,$fontStyle:s,$stretch:c,children:`-`});else{let e=`${p}:current`,i=`${p}:max`;h=(0,K.jsxs)(ot,{children:[(0,K.jsx)(Qe,{$theme:t,$fontSize:n,$align:`center`,value:l[e]??String(d.current),onChange:t=>{let n=t.target.value;u(t=>({...t,[e]:n}))},onBlur:async t=>{let n=Number(t.target.value);await A(r,{current:Number.isFinite(n)?n:d.current,max:d.max}),u(t=>{let{[e]:n,...r}=t;return r})}}),(0,K.jsx)(st,{$theme:t,children:`/`}),(0,K.jsx)(Qe,{$theme:t,$fontSize:n,$align:`center`,value:l[i]??String(d.max),onChange:e=>{let t=e.target.value;u(e=>({...e,[i]:t}))},onBlur:async e=>{let t=Number(e.target.value),n=Number.isFinite(t)?t:d.max;await A(r,{current:d.current,max:n}),u(e=>{let{[i]:t,...n}=e;return n})}})]})}}else h=(0,K.jsx)(Qe,{$theme:t,$fontSize:n,$align:`center`,$isRollable:f,readOnly:f&&!m,value:re(p,r),onChange:f&&!m?void 0:e=>{let t=e.target.value;u(e=>({...e,[p]:t}))},onBlur:f&&!m?void 0:async e=>{let t=e.target.value;await me(r,t),u(e=>{let{[p]:t,...n}=e;return n}),f&&L(p)},onClick:f?()=>{m||z(p)||O(i)}:void 0,onContextMenu:i?e=>{e.preventDefault(),N(p,i,e.currentTarget,f)}:void 0,onTouchStart:f?e=>{m||pe(p,e.currentTarget)}:void 0,onTouchEnd:f?()=>{R(p)}:void 0,onTouchCancel:f?()=>{R(p)}:void 0,onKeyDown:e=>{if(f&&!m&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),O(i);return}(m||!f)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`});return(0,K.jsx)(ft,{children:h},r)})})},e.id)}if(r===`action-list`){let n=Q(a,i.attributeId||i.bidList?.[0]),r=J(n),o=mn(a,i.attributeId||i.bidList?.[0]),s=r?B(r):[];return(0,K.jsx)(q,{$theme:t,$full:e.fullsize,children:(0,K.jsxs)(Ct,{$theme:t,children:[(0,K.jsxs)(wt,{$theme:t,children:[(0,K.jsx)(Tt,{$theme:t,onContextMenu:n?t=>{t.preventDefault(),N(`action-list:${e.id}:${r||`none`}`,n,null,!1)}:void 0,children:o}),(0,K.jsx)(Et,{type:`button`,$theme:t,"aria-label":`Add Action`,onClick:async()=>{r&&await H(r,[...s,{id:crypto.randomUUID(),name:``,description:``}],{listType:`action`,reason:`add`})},children:(0,K.jsx)(ze,{size:14})})]}),s.map((n,i)=>(0,K.jsxs)(Dt,{children:[(0,K.jsxs)(Ut,{children:[(0,K.jsx)(Wt,{children:(0,K.jsx)(Mt,{$theme:t,type:`text`,defaultValue:n.name,placeholder:`Action Name`,onBlur:async e=>{if(!r)return;let t=e.target.value;await H(r,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,K.jsx)(jt,{type:`button`,$theme:t,"aria-label":`Delete Action`,onClick:async()=>{r&&await H(r,s.filter(e=>e.id!==n.id),{listType:`action`,reason:`delete`,entryId:n.id})},children:(0,K.jsx)(ge,{size:14})})]}),(()=>{let e=ye(n.description);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Nt,{$theme:t,defaultValue:n.description,ref:V,placeholder:`Action Description`,onInput:e=>{V(e.currentTarget)},onBlur:async e=>{if(!r)return;let t=e.target.value;await H(r,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`description`})}}),e.length>0?(0,K.jsx)(Pt,{children:e.map((e,r)=>(0,K.jsx)(Ft,{type:`button`,$theme:t,onClick:()=>{D(e.notation,n.name||`Action`)},onContextMenu:t=>{t.preventDefault(),ue({notation:e.notation,actionName:n.name||`Action`,title:n.name||`Action Roll`})},title:e.notation,children:e.notation},`${n.id}-action-inline-${r}`))}):null]})})()]},n.id||`${e.id}-action-${i}`))]})},e.id)}if(r===`item-list`){let n=Q(a,i.attributeId||i.bidList?.[0]),r=J(n),o=mn(a,i.attributeId||i.bidList?.[0]),s=r?_e(r):[];return(0,K.jsx)(q,{$theme:t,$full:e.fullsize,children:(0,K.jsxs)(Ct,{$theme:t,children:[(0,K.jsxs)(wt,{$theme:t,children:[(0,K.jsx)(Tt,{$theme:t,onContextMenu:n?t=>{t.preventDefault(),N(`item-list:${e.id}:${r||`none`}`,n,null,!1)}:void 0,children:o}),(0,K.jsx)(Et,{type:`button`,$theme:t,"aria-label":`Add Item`,onClick:async()=>{r&&await H(r,[...s,{id:crypto.randomUUID(),name:``,description:``,inUse:!1}],{listType:`item`,reason:`add`})},children:(0,K.jsx)(ze,{size:14})})]}),s.map((n,i)=>(0,K.jsxs)(Dt,{children:[(0,K.jsxs)(Ot,{children:[(0,K.jsx)(kt,{children:(0,K.jsx)(Gt,{$theme:t,type:`checkbox`,defaultChecked:n.inUse,onBlur:async e=>{if(!r)return;let t=e.target.checked;await H(r,s.map(e=>e.id===n.id?{...e,inUse:t}:e),{listType:`item`,reason:`toggle-save`,entryId:n.id,field:`inUse`})}})}),(0,K.jsx)(At,{$theme:t,children:(0,K.jsx)(Mt,{$theme:t,type:`text`,defaultValue:n.name,placeholder:`Item Name`,onBlur:async e=>{if(!r)return;let t=e.target.value;await H(r,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,K.jsx)(jt,{type:`button`,$theme:t,"aria-label":`Delete Item`,onClick:async()=>{r&&await H(r,s.filter(e=>e.id!==n.id),{listType:`item`,reason:`delete`,entryId:n.id})},children:(0,K.jsx)(ge,{size:14})})]}),(()=>{let e=ye(n.description);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Nt,{$theme:t,defaultValue:n.description,ref:V,placeholder:`Item Description`,onInput:e=>{V(e.currentTarget)},onBlur:async e=>{if(!r)return;let t=e.target.value;await H(r,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`description`})}}),e.length>0?(0,K.jsx)(Pt,{children:e.map((e,r)=>(0,K.jsx)(Ft,{type:`button`,$theme:t,onClick:()=>{D(e.notation,n.name||`Item`)},onContextMenu:t=>{t.preventDefault(),ue({notation:e.notation,actionName:n.name||`Item`,title:n.name||`Item Roll`})},title:e.notation,children:e.notation},`${n.id}-item-inline-${r}`))}):null]})})()]},n.id||`${e.id}-item-${i}`))]})},e.id)}return null};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Ge,{$theme:t,$backgroundUrl:n,children:(0,K.jsxs)(Ke,{children:[(0,K.jsx)(qe,{children:(0,K.jsx)(Je,{$theme:t,children:(0,K.jsx)(Ye,{$theme:t,value:x,onChange:e=>{S(e.target.value)},onBlur:()=>{te()},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},"aria-label":`Unit Name`})})}),ee.map(e=>(0,K.jsx)(qe,{children:e.items.map(e=>be(e))},`row-${e.row}`))]})}),p?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Lt,{onClick:P}),(0,K.jsxs)(Rt,{$theme:t,onClick:e=>e.stopPropagation(),children:[(0,K.jsxs)(Bt,{children:[(0,K.jsx)(zt,{$theme:t,children:Y(p.attribute)||`Attribute`}),(0,K.jsxs)(Vt,{$theme:t,children:[`[`,J(p.attribute),`]`]})]}),(0,K.jsxs)(It,{children:[p.isRollable?(0,K.jsx)(Ht,{type:`button`,$theme:t,onClick:()=>{P(),I(p.draftKey,p.input)},children:`Edit value`}):null,(()=>{if(!p.isRollable)return null;let e=oe(p.attribute);if(!e)return null;let n=j(e,`advantage`),r=j(e,`disadvantage`);return!n||!r?null:(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Ht,{type:`button`,$theme:t,onClick:()=>{P(),D(n,`${Y(p.attribute)||J(p.attribute)||`Roll`} (Advantage)`)},children:`Roll with Advantage`}),(0,K.jsx)(Ht,{type:`button`,$theme:t,onClick:()=>{P(),D(r,`${Y(p.attribute)||J(p.attribute)||`Roll`} (Disadvantage)`)},children:`Roll with Disadvantage`})]})})()]})]})]}):null,h?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Lt,{onClick:fe}),(0,K.jsxs)(Rt,{$theme:t,onClick:e=>e.stopPropagation(),children:[(0,K.jsxs)(Bt,{children:[(0,K.jsx)(zt,{$theme:t,children:h.title}),(0,K.jsxs)(Vt,{$theme:t,children:[`[`,h.notation,`]`]})]}),(0,K.jsx)(It,{children:(()=>{let e=j(h.notation,`advantage`),n=j(h.notation,`disadvantage`);return!e||!n?null:(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Ht,{type:`button`,$theme:t,onClick:()=>{fe(),F(`advantage`)},children:`Roll with Advantage`}),(0,K.jsx)(Ht,{type:`button`,$theme:t,onClick:()=>{fe(),F(`disadvantage`)},children:`Roll with Disadvantage`})]})})()})]})]}):null]})};var gn={SNAPSHOT_PUBLIC_ID:`${e.EXTENSIONID}/SnapshotPublicId`},_n={primary:f.theme_primary,offset:f.theme_offset,background:f.theme_background,border:f.theme_border,background_url:f.background_url},vn=d.div`
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
`,yn=d.div`
  height: 100%;
  overflow: hidden;
  padding: 40px 4px 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
`,bn=d.p`
  margin: 0;
  color: ${e=>e.$theme.primary};
  text-align: center;
  align-content: center;
  font-weight: 600;
  font-size: 24px;
`,xn=d.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: min(calc(100% - 16px), 350px);
  z-index: 10;
`,Sn=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`,Cn=d.select`
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
`,wn=d.button`
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
`,Tn=d.img`
  width: 28px;
  height: 28px;
  display: block;
`,En=d.div`
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
`,Dn=d.div`
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
`,On=d.button`
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
`,kn=d.div`
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
`,An=d.div`
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
`,jn=d.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Mn=d.div`
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
`,Nn=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,Pn=d.div`
  color: ${e=>e.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,Fn=d.span`
  font-size: 12px;
  line-height: 1;
`,In=d.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ln=d.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`,Rn=d.span`
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
`,zn=d.span`
  color: ${e=>e.$color};
`,Bn=d.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,Vn=d.button`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>e.$variant===`import`?s(e.$theme.offset,.45):s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`,Hn=d.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Un=d.input`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`,Wn=d.button`
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
`,Gn=d.div`
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
`,Kn=d.div`
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
`,qn=d($)`
  background: ${e=>e.$active?s(e.$theme.offset,.45):s(e.$theme.background,.9)};

  &:disabled {
    background: ${e=>s(e.$theme.background,.9)};
  }
`,Jn=d.textarea`
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
`,Yn=d.button`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 8px;
  background: ${e=>e.$variant===`primary`?s(e.$theme.offset,.5):s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 6px 10px;
  cursor: pointer;
`,Xn=d(Yn)`
  margin-right: auto;
`,Zn=d.div`
  margin-top: 8px;
  color: ${e=>s(e.$theme.offset,.95)};
  font-size: 12px;
`,Qn=d.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${e=>s(e.$theme.primary,.92)};
  font-size: 12px;
  line-height: 1.45;
`,$n=d.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.$theme.primary};
`,er=d.ul`
  margin: 0;
  padding-left: 16px;
`,tr=d.code`
  display: block;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid ${e=>s(e.$theme.border,.7)};
  background: ${e=>s(e.$theme.background,.82)};
  color: ${e=>e.$theme.primary};
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
  white-space: pre-wrap;
`,nr=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,rr=d.div`
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
`,ir=d.h3`
  color: ${e=>e.$theme.primary};
  margin: 0 0 15px 0;
  font-size: 18px;
`,ar=d.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
`,or=()=>{let e=new URLSearchParams(window.location.search).get(`unitid`);return e&&e.split(`,`)[0]?.trim()||null},sr=()=>{let e=new URLSearchParams(window.location.search).get(`pinned`);if(!e)return!1;let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`},cr=`POP_${e.CARDSID}`,lr=(e,t)=>{let n=new URLSearchParams;return n.set(`unitid`,e),t&&n.set(`pinned`,`true`),`/pages/forgecard.html?${n.toString()}`},ur=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},dr=e=>{if(e===!0)return!0;if(typeof e==`string`){let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`}return typeof e==`number`?e===1:!1};He.createRoot(document.getElementById(`root`)).render((0,K.jsx)(G.StrictMode,{children:(0,K.jsx)(p,{children:(0,K.jsx)(()=>{let{t}=Me(),[n,i]=(0,G.useState)(()=>or()),a=(0,G.useMemo)(()=>sr(),[]),[o,s]=(0,G.useState)({metadata:{},items:[]}),[d,p]=(0,G.useState)(null),[h,g]=(0,G.useState)(null),[v,x]=(0,G.useState)(null),[S,te]=(0,G.useState)(null),[C,w]=(0,G.useState)(!1),[ne,re]=(0,G.useState)(!1),[T,ae]=(0,G.useState)(!1),[E,oe]=(0,G.useState)(``),[D,O]=(0,G.useState)(``),[k,A]=(0,G.useState)(!1),[le,j]=(0,G.useState)([]),[M,P]=(0,G.useState)([]),[ue,de]=(0,G.useState)(!1),[fe,F]=(0,G.useState)(!1),[I,L]=(0,G.useState)(``),[R,z]=(0,G.useState)(null),[he,ge]=(0,G.useState)(!1),_e=e=>{let t=e[m.ENABLE_CONSOLE_LOG];typeof t==`boolean`&&_.setEnabled(t)},ve=(0,G.useMemo)(()=>h||f.card_layout,[h]),V=(0,G.useMemo)(()=>v||f.attributes,[v]),H=(0,G.useMemo)(()=>d||_n,[d]),U=(0,G.useMemo)(()=>l(H.primary,H.offset,H.background,H.border,H.background_url),[H]);(0,G.useEffect)(()=>{let e=!1;return(async()=>{try{await pe()}catch(e){_.log(`Auth hydration failed in card iframe`,e)}finally{e||ge(!0)}})(),()=>{e=!0}},[]),(0,G.useEffect)(()=>{let e=!0,t=async t=>{let n=t[gn.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(p(null),g(null),x(null));return}let{data:r,error:i}=await u.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(i){e&&(p(null),g(null),x(null));return}let a=Array.isArray(r)?r[0]:r;if(!a||typeof a!=`object`){e&&(p(null),g(null),x(null));return}let o=a,s=ur(o.card_layout),c=ur(o.attributes);if(typeof o.theme_primary!=`string`||typeof o.theme_offset!=`string`||typeof o.theme_background!=`string`||typeof o.theme_border!=`string`||!Array.isArray(s)||!Array.isArray(c)){e&&(p(null),g(null),x(null));return}e&&(p({primary:o.theme_primary,offset:o.theme_offset,background:o.theme_background,border:o.theme_border,background_url:typeof o.background_url==`string`?o.background_url:``}),g(s),x(c))};(async()=>{let[n,i,a,o,c]=await Promise.all([r.scene.getMetadata(),r.scene.items.getItems(),r.room.getMetadata(),r.player.getId(),r.player.getRole()]);e&&(_e(a),s({metadata:n,items:i}),await t(a),te(o),w(String(c||``).toUpperCase()===`GM`),re(!0))})();let n=r.scene.onMetadataChange(t=>{e&&s(e=>({...e,metadata:t}))}),i=r.room.onMetadataChange(n=>{e&&(t(n),_e(n))}),a=r.scene.items.onChange(t=>{e&&s(e=>({...e,items:t}))});return()=>{e=!1,n(),i(),a()}},[]);let be=e=>{let n=e.metadata?.[c.UNIT_NAME];if(typeof n==`string`&&n.trim())return n;let r=e.text?.plainText;return typeof r==`string`&&r.trim()?r:typeof e.name==`string`&&e.name.trim()?e.name:t(`card.unknownUnit`)},xe=(0,G.useMemo)(()=>o.items.filter(e=>dr(e.metadata?.[c.FABRICATED])).filter(e=>C||e.createdUserId===S).filter(e=>e.id!==n).map(e=>({id:e.id,name:be(e)})).sort((e,t)=>e.name.localeCompare(t.name)),[o.items,n,C,S]),W=(0,G.useMemo)(()=>n&&o.items.find(e=>e.id===n)||null,[o.items,n]),Se=async()=>n&&(await r.scene.items.getItems()).find(e=>e.id===n)||null,we=async e=>{W&&(await r.scene.items.updateItems([W.id],t=>{let n={...t[0].metadata||{}};Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),t[0].metadata=n}),s(t=>({...t,items:t.items.map(t=>{if(t.id!==W.id)return t;let n={...t.metadata||{}};return Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),{...t,metadata:n}})})))},Te=async t=>{if(!W)return;let n=[c.FABRICATED,c.INITIATIVE,c.ON_LIST,c.IN_PARTY];await r.scene.items.updateItems([W.id],r=>{let i=r[0].metadata,a={},o={};for(let[t,r]of Object.entries(i))t.startsWith(`${e.EXTENSIONID}/`)||(a[t]=r),n.includes(t)&&(o[t]=r);r[0].metadata={...a,...t,...o}}),s(r=>({...r,items:r.items.map(r=>{if(r.id!==W.id)return r;let i={},a={};for(let[t,o]of Object.entries(r.metadata||{}))t.startsWith(`${e.EXTENSIONID}/`)||(i[t]=o),n.includes(t)&&(a[t]=o);return{...r,metadata:{...i,...t,...a}}})}))},Ee=async()=>{j(await y())},Oe=e=>{let t=e.trim(),n=t?t[0].toUpperCase():`A`;return`hsl(${Math.max(0,Math.min(25,n.charCodeAt(0)-65))/26*360}, 70%, 65%)`},Ae=async e=>{let[t,n]=await Promise.all([N(e),ke()?me(e):Promise.resolve([])]);return[...n.map(e=>({...e,source:`remote-user`})),...t.map(e=>({...e,source:`remote-shared`}))]},je=(0,G.useMemo)(()=>{let e=D.trim().toLowerCase(),t={local:0,"remote-user":1,"remote-shared":2},n=(e,n)=>t[e.source]===t[n.source]?e.favorite===n.favorite?e.name.localeCompare(n.name):e.favorite?-1:1:t[e.source]-t[n.source],r=[...le].sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);if(!e)return r.filter(e=>e.favorite).map(e=>({...e,source:`local`}));let i=r.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),a=M.filter(e=>e.source===`remote-user`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),o=M.filter(e=>e.source===`remote-shared`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e));return[...i.map(e=>({...e,source:`local`})),...a,...o].sort(n)},[le,M,D]),ze=async()=>{if(!n){await r.notification.show(t(`card.noUnitSelectedToPin`),`ERROR`);return}let i=await r.viewport.getWidth(),o=await r.viewport.getHeight(),s=o>800?700:o-100;if(!a){await r.popover.open({id:cr,url:lr(n,!0),height:400,width:350,anchorPosition:{top:50,left:i-70},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},transformOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},hidePaper:!0,disableClickAway:!0}),await r.popover.close(e.CARDSID);return}await r.popover.open({id:e.CARDSID,url:lr(n,!1),height:s,width:350,anchorPosition:{left:i/2,top:o/2},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`CENTER`},transformOrigin:{vertical:`CENTER`,horizontal:`CENTER`},hidePaper:!0,disableClickAway:!0}),await r.popover.close(cr)},He=()=>{C&&A(e=>!e)},Ue=async()=>{if(!C)return;let e=await Se();if(!e){await r.notification.show(t(`card.noUnitSelectedToSave`),`ERROR`);return}he||(await pe(),ge(!0));try{let n=(await r.player.getName()).trim(),i=ke()?await ye(e.metadata,n,k):await ie(e.metadata,n,k);await Ee();let a=ke()?t(`card.collectionTargetOnline`):t(`card.collectionTargetLocal`);await r.notification.show(t(i===`created`?`card.unitSavedToTarget`:`card.unitUpdatedInTarget`,{target:a}))}catch(e){_.log(`Collection save failed`,e),await r.notification.show(t(`card.couldNotSaveToCollection`),`ERROR`)}},We=async()=>{if(!await Se()){await r.notification.show(t(`card.noUnitSelectedToImportInto`),`ERROR`);return}z(null),L(``),de(!0)},Ge=async()=>{let e=await Se();if(!e){await r.notification.show(t(`card.noUnitSelectedToExport`),`ERROR`);return}try{let n=ee(e.metadata),i=n[c.UNIT_NAME],a=typeof i==`string`?i.trim():``;if(!a){await r.notification.show(t(`card.unitMissingValidName`),`ERROR`);return}let o={name:a,author:(await r.player.getName()).trim()||t(`card.unknownAuthor`),metadata:n};await navigator.clipboard.writeText(JSON.stringify(o,null,2)),await r.notification.show(t(`card.unitDataCopied`))}catch(e){_.log(`Unit export failed`,e),await r.notification.show(t(`card.couldNotCopyUnitData`),`ERROR`)}},Ke=()=>{de(!1),z(null),L(``)},qe=e=>{let n=JSON.parse(e);if(!n||typeof n!=`object`||Array.isArray(n))throw Error(t(`card.importDataMustBeJsonObject`));let r=n,i=r.metadata&&typeof r.metadata==`object`?r.metadata:n;if(!i||typeof i!=`object`||Array.isArray(i))throw Error(t(`card.importDataMustIncludeMetadata`));let a=ee(i),o=a[c.UNIT_NAME];if(!(typeof o==`string`&&o.trim()))throw Error(t(`card.importedMetadataMissingName`));return a},q=async()=>{if(!await Se()){z(t(`card.noUnitSelectedToImportInto`));return}let e=I.trim();if(!e){z(t(`card.pasteJsonBeforeImport`));return}try{await Te(qe(e)),A(!1),Ke(),await r.notification.show(t(`card.unitDataImported`))}catch(e){z(e instanceof Error?e.message:t(`card.importFailed`))}},Je=(e,n)=>{let r=(e||``).trim().toLowerCase();if(r===`numb`||r===`derived`)return 0;if(r===`bool`)return!1;if(r===`enum`)return``;if(r===`resource`)return{current:0,max:0};if(r===`list`){let e=n?.firstNumericBid?`@${n.firstNumericBid}`:`@BID`;return[{id:`example-list-001`,name:t(`card.aiExampleListEntryName`),description:t(`card.aiExampleListEntryDescription`,{bidRef:e})}]}return``},Ye=()=>{let n=V.find(e=>e.attr_type===`numb`)?.attr_bid,r=V.find(e=>e.attr_type===`list`)||null,i=V.map(t=>({bid:t.attr_bid,name:t.attr_name,type:t.attr_type,metadataKey:`${e.EXTENSIONID}/${t.attr_bid}`})),a={[c.UNIT_NAME]:t(`card.aiExampleUnitName`)};for(let t of V)a[`${e.EXTENSIONID}/${t.attr_bid}`]=Je(t.attr_type,{firstNumericBid:n});let o={id:`example-list-001`,name:t(`card.aiExampleActionName`),description:t(`card.aiExampleActionDescription`,{bidRef:n?`@${n}`:`@BID`})},s={id:`example-item-001`,name:t(`card.aiExampleItemName`),description:t(`card.aiExampleItemDescription`),inUse:!1},l=JSON.stringify(i,null,2),u=JSON.stringify(a,null,2),d=JSON.stringify(o,null,2),f=JSON.stringify(s,null,2),p=r?`${e.EXTENSIONID}/${r.attr_bid}`:`${e.EXTENSIONID}/<LIST_BID>`;return[t(`card.aiPromptIntro`),``,t(`card.aiPromptRequirementsHeader`),t(`card.aiRequirement1`),t(`card.aiRequirement2`),t(`card.aiRequirement3`),t(`card.aiRequirement4`),t(`card.aiRequirement5`),t(`card.aiRequirement6`),``,t(`card.aiExtensionIdLabel`,{value:e.EXTENSIONID}),t(`card.aiUnitNameMetadataLabel`,{value:c.UNIT_NAME}),``,t(`card.aiAttributeDictionaryHeader`),l,``,t(`card.aiListExamplesHeader`),t(`card.aiStandardListEntryHeader`),d,``,t(`card.aiItemListEntryHeader`),f,``,t(`card.aiListKeyHint`,{key:p}),``,t(`card.aiOutputShapeHeader`),u,``,t(`card.aiFinalInstruction`)].join(`
`)},Xe=async()=>{try{let e=Ye();await navigator.clipboard.writeText(e),await r.notification.show(t(`card.aiTemplateCopied`))}catch(e){_.log(`AI template copy failed`,e),await r.notification.show(t(`card.aiTemplateCopyFailed`),`ERROR`)}},Ze=()=>{let e=E.trim();if(O(e),!e){P([]);return}(async()=>{he||(await pe(),ge(!0)),P(await Ae(e))})().catch(async e=>{_.log(`Supabase collection search failed`,e),P([]),await r.notification.show(t(`card.onlineSearchFailed`),`ERROR`)})},Qe=async e=>{if(!W){await r.notification.show(t(`card.noUnitSelectedToImportInto`),`ERROR`);return}try{await Te(e.metadata),A(!1),await r.notification.show(e.source===`local`?t(`card.recordImportedLocal`,{name:e.name}):t(`card.recordImportedOnline`,{name:e.name}))}catch(e){_.log(`Collection record import failed`,e),await r.notification.show(t(`card.recordImportFailed`),`ERROR`)}},$e=async e=>{try{if(e.source===`remote-user`)await Ce(e.id),P(t=>t.filter(t=>!(t.source===`remote-user`&&t.id===e.id)));else if(e.source===`local`)await De(e.id),j(t=>t.filter(t=>t.id!==e.id));else return;await r.notification.show(t(`card.recordDeleted`,{name:e.name}))}catch(e){_.log(`Collection record delete failed`,e),await r.notification.show(t(`card.recordDeleteFailed`),`ERROR`)}};return(0,G.useEffect)(()=>{T&&Ee().catch(e=>{_.log(`Failed to load collection records`,e)})},[T]),(0,G.useEffect)(()=>{T&&(O(``),oe(``),P([]))},[T]),(0,K.jsxs)(vn,{$theme:H,children:[(0,K.jsxs)(yn,{children:[(0,K.jsx)(xn,{children:(0,K.jsxs)(Sn,{children:[(0,K.jsxs)(Cn,{$theme:H,"aria-label":t(`card.chooseUnitAria`),value:``,onChange:e=>{let t=e.target.value;t&&i(t)},children:[(0,K.jsx)(`option`,{value:``,children:t(`card.chooseUnitOption`)}),xe.map(e=>(0,K.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,K.jsx)(wn,{type:`button`,$theme:H,"aria-label":t(`card.closeCardAria`),onClick:async()=>{await r.popover.close(a?cr:e.CARDSID)},children:(0,K.jsx)(Tn,{src:`/close.svg`,alt:``,"aria-hidden":`true`})})]})}),ne?n?W?(0,K.jsx)(hn,{systemTheme:H,backgroundUrl:H.background_url,cardLayout:ve,attributes:V,unitItem:W,onUpdateMetadata:we}):(0,K.jsx)(bn,{$theme:H,children:t(`card.unitNotFound`)}):(0,K.jsx)(bn,{$theme:H,children:t(`card.noUnitId`)}):(0,K.jsx)(bn,{$theme:H,children:t(`card.loading`)})]}),(0,K.jsxs)(En,{$theme:H,$open:T,children:[(0,K.jsxs)(Gn,{children:[(0,K.jsxs)(Kn,{children:[(0,K.jsx)($,{type:`button`,$theme:H,"aria-label":t(`card.pinAria`),onClick:()=>{ze()},children:(0,K.jsx)(B,{theme:U,text:t(`card.pinTooltip`),children:(0,K.jsx)(Re,{size:16})})}),(0,K.jsx)(qn,{type:`button`,$theme:H,$active:k,"aria-label":t(`card.favoriteAria`),disabled:!C,onClick:He,children:(0,K.jsx)(B,{theme:U,text:t(`card.favoriteTooltip`),children:(0,K.jsx)(se,{size:16,fill:k?`currentColor`:`none`})})}),(0,K.jsx)($,{type:`button`,$theme:H,"aria-label":t(`card.collectionSaveAria`),disabled:!C,onClick:Ue,children:(0,K.jsx)(B,{theme:U,text:t(`card.collectionSaveTooltip`),children:(0,K.jsx)(Ne,{size:16})})})]}),(0,K.jsxs)(Kn,{children:[(0,K.jsx)($,{type:`button`,$theme:H,"aria-label":t(`card.importAria`),onClick:We,children:(0,K.jsx)(B,{theme:U,text:t(`card.importTooltip`),children:(0,K.jsx)(Ie,{size:16})})}),(0,K.jsx)($,{type:`button`,$theme:H,"aria-label":t(`card.exportAria`),onClick:Ge,children:(0,K.jsx)(B,{theme:U,text:t(`card.exportTooltip`),children:(0,K.jsx)(b,{size:16})})}),(0,K.jsx)($,{type:`button`,$theme:H,"aria-label":t(`card.helpAria`),onClick:()=>{F(!0)},children:(0,K.jsx)(B,{theme:U,text:t(`card.helpTooltip`),children:(0,K.jsx)(Pe,{size:16})})})]})]}),(0,K.jsx)(Dn,{$theme:H,children:(0,K.jsx)(B,{theme:U,text:t(T?`card.closeTrayTooltip`:`card.openTrayTooltip`),children:(0,K.jsx)(On,{type:`button`,$theme:H,"aria-label":t(T?`card.closeTrayAria`:`card.openTrayAria`),onClick:()=>{ae(e=>!e)},children:(0,K.jsx)(ce,{size:22})})})}),(0,K.jsx)(kn,{$theme:H,children:T?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(An,{$theme:H,children:(0,K.jsx)(jn,{children:je.length===0?(0,K.jsx)(bn,{$theme:H,children:t(`card.noCollectionRecords`)}):je.map(e=>(0,K.jsxs)(Mn,{$theme:H,children:[(0,K.jsxs)(Nn,{children:[(0,K.jsxs)(Pn,{$theme:H,children:[e.favorite?(0,K.jsx)(Fn,{children:`❤`}):null,(0,K.jsx)(In,{children:e.name})]}),(0,K.jsxs)(Ln,{children:[(0,K.jsx)(`span`,{children:`→`}),(0,K.jsx)(zn,{$color:Oe(e.author),children:e.author}),(0,K.jsxs)(Rn,{$theme:H,title:e.source===`local`?t(`card.localSource`):e.source===`remote-user`?t(`card.myCloudSource`):t(`card.sharedSource`),children:[e.source===`local`?(0,K.jsx)(Le,{size:11}):null,e.source===`remote-user`?(0,K.jsx)(Fe,{size:11}):null,e.source===`remote-shared`?(0,K.jsx)(Ve,{size:11}):null]})]})]}),(0,K.jsxs)(Bn,{children:[(0,K.jsx)(Vn,{type:`button`,$theme:H,$variant:`import`,onClick:()=>{Qe(e)},children:t(`card.importAction`)}),e.source===`remote-shared`?null:(0,K.jsx)(Vn,{type:`button`,$theme:H,$variant:`delete`,onClick:()=>{$e(e)},children:t(`card.deleteAction`)})]})]},`${e.source}:${e.id}`))})}),(0,K.jsxs)(Hn,{children:[(0,K.jsx)(Un,{$theme:H,type:`text`,value:E,placeholder:t(`card.searchPlaceholder`),onChange:e=>{oe(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ze())}}),(0,K.jsx)(Wn,{type:`button`,$theme:H,"aria-label":t(`card.searchAria`),onClick:Ze,children:(0,K.jsx)(Be,{size:16})})]})]}):null})]}),ue?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(nr,{onClick:Ke}),(0,K.jsxs)(rr,{$theme:H,onClick:e=>{e.stopPropagation()},children:[(0,K.jsx)(ir,{$theme:H,children:t(`card.importUnitDataTitle`)}),(0,K.jsx)(Jn,{$theme:H,value:I,placeholder:t(`card.importPlaceholder`),onChange:e=>{L(e.target.value),R&&z(null)}}),R?(0,K.jsx)(Zn,{$theme:H,children:R}):null,(0,K.jsxs)(ar,{children:[(0,K.jsx)(Xn,{type:`button`,$theme:H,onClick:()=>{Xe()},children:t(`card.aiTemplate`)}),(0,K.jsx)(Yn,{type:`button`,$theme:H,onClick:Ke,children:t(`card.cancel`)}),(0,K.jsx)(Yn,{type:`button`,$theme:H,$variant:`primary`,onClick:q,children:t(`card.importAction`)})]})]})]}):null,fe?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(nr,{onClick:()=>{F(!1)}}),(0,K.jsxs)(rr,{$theme:H,onClick:e=>{e.stopPropagation()},children:[(0,K.jsx)(ir,{$theme:H,children:t(`card.helpTitle`)}),(0,K.jsxs)(Qn,{$theme:H,children:[(0,K.jsx)($n,{$theme:H,children:t(`card.helpRollableValuesTitle`)}),(0,K.jsxs)(er,{children:[(0,K.jsx)(`li`,{children:t(`card.helpRollableValuesItem1`)}),(0,K.jsx)(`li`,{children:t(`card.helpRollableValuesItem2`)}),(0,K.jsx)(`li`,{children:t(`card.helpRollableValuesItem3`)})]}),(0,K.jsx)($n,{$theme:H,children:t(`card.helpDiceChipsTitle`)}),(0,K.jsxs)(er,{children:[(0,K.jsx)(`li`,{children:t(`card.helpDiceChipsItem1`)}),(0,K.jsx)(`li`,{children:t(`card.helpDiceChipsItem2`)})]}),(0,K.jsx)(tr,{$theme:H,children:t(`card.helpMeleeAttackExample`)}),(0,K.jsx)($n,{$theme:H,children:t(`card.helpUsingAttributesTitle`)}),(0,K.jsxs)(er,{children:[(0,K.jsx)(`li`,{children:t(`card.helpUsingAttributesItem1`)}),(0,K.jsx)(`li`,{children:t(`card.helpUsingAttributesItem2`)})]}),(0,K.jsx)(tr,{$theme:H,children:t(`card.helpDamageBidExample`)}),(0,K.jsx)(tr,{$theme:H,children:t(`card.helpDamageNameExample`)})]}),(0,K.jsx)(ar,{children:(0,K.jsx)(Yn,{type:`button`,$theme:H,$variant:`primary`,onClick:()=>{F(!1)},children:t(`card.close`)})})]})]}):null]})},{})})}));