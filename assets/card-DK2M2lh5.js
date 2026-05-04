import{C as e,F as t,N as n,O as r,R as i,S as a,T as o,_ as s,b as c,g as l,o as u,s as d,t as f,w as p,y as m}from"./defaultgamesystem-CWetXqo_.js";import{$ as h,A as g,B as _,C as v,D as y,Dt as b,E as x,F as ee,G as te,H as S,I as C,J as w,K as ne,L as T,M as re,N as ie,O as ae,P as E,Q as oe,R as D,T as se,Tt as ce,U as O,V as k,W as A,X as le,Y as j,Z as M,_t as ue,a as N,at as P,ct as de,dt as F,et as fe,ft as I,g as pe,gt as L,ht as R,i as me,it as he,j as z,k as ge,lt as _e,mt as B,nt as V,o as ve,ot as H,p as ye,pt as be,q as xe,rt as Se,s as U,st as W,t as Ce,tt as we,ut as Te,vt as Ee,w as De,x as Oe,yt as G,z as ke}from"./unitCollectionRemote-lP9nkzZh.js";import{t as Ae}from"./Translation-BBuCMeGk.js";/* empty css               */var je=G(`book-marked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),Me=G(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),Ne=G(`cloudy`,[[`path`,{d:`M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z`,key:`44yre2`}],[`path`,{d:`M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61`,key:`leugyv`}]]),Pe=G(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),Fe=G(`hard-drive`,[[`line`,{x1:`22`,x2:`2`,y1:`12`,y2:`12`,key:`1y58io`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}],[`line`,{x1:`6`,x2:`6.01`,y1:`16`,y2:`16`,key:`sgf278`}],[`line`,{x1:`10`,x2:`10.01`,y1:`16`,y2:`16`,key:`1l4acy`}]]),Ie=G(`pin`,[[`path`,{d:`M12 17v5`,key:`bb1du9`}],[`path`,{d:`M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z`,key:`1nkz8b`}]]),Le=G(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Re=G(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),ze=G(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),Be=i(n(),1),K=i(t(),1);const Ve=e=>{let t=[...Array.isArray(e)?e:[]].sort((e,t)=>e.row===t.row?e.col-t.col:e.row-t.row),n=[];return t.forEach(e=>{let t=n[n.length-1];if(!t||t.row!==e.row){n.push({row:e.row,items:[e]});return}t.items.push(e)}),{sorted:t,rows:n}};var q=o(),He=e=>`
    0 1px 1px ${s(e.background,.95)},
    0 0 2px ${s(e.background,.85)}
  `,Ue=d.div`
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
`,We=d.div`
  position: relative;
  z-index: 1;
`,Ge=d.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`,J=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`,Ke=d(J)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  height: calc(2 * 1.1em);
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100% !important;
`,qe=d.input`
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
`,Je=d(d.div`
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
`,Ye=d.div`
  color: ${e=>e.$theme.primary};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`,Xe=d.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?s(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?s(e.$theme.offset,.5):s(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>s(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?He(e.$theme):`none`};
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
`,Ze=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  height: 40px;
  box-sizing: border-box;
`,Qe=d.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`,$e=d.span`
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
`,et=d.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?s(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?s(e.$theme.offset,.5):s(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>s(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?He(e.$theme):`none`};
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
`,tt=d.select`
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
`,nt=d.div`
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
`,rt=d(nt)`
  border-style: solid;
  background: ${e=>s(e.$theme.primary,.75)};
  color: ${e=>s(e.$theme.offset,.96)};
  box-shadow: ${e=>`0 4px 14px ${s(e.$theme.background,.65)}`};
  text-shadow: ${e=>`1px 1px 0 ${s(e.$theme.background,.95)}`};
  font-weight: 700;
  font-style: italic;
`,it=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
`,at=d.span`
  color: ${e=>s(e.$theme.primary,.92)};
  flex-shrink: 0;
`,ot=d.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
`,st=d.button`
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
`,ct=d.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,lt=d.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,ut=d.div`
  flex: 1;
  min-width: 0;
`,dt=d.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 18px;
`,ft=d.div`
  width: 100%;
  height: 5px;
  background: ${e=>`linear-gradient(10deg, ${e.$theme.border||`white`}, rgba(255,255,255,0))`};
`,pt=d.div`
  width: 100%;
  height: ${e=>`${e.$heightPx}px`};
  border-radius: 8px;
  border: 1px solid ${e=>s(e.$theme.border,.9)};
  background: ${e=>s(e.$theme.background,.42)};
  overflow: hidden;
  box-sizing: border-box;
`,mt=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,ht=d.div`
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
`,gt=d.div`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${e=>e.$theme.border||`rgba(255,255,255,0.5)`};
`,_t=d.div`
  width: 100%;
  height: 10px;
  background: ${e=>`linear-gradient(to bottom, ${e.$theme.border||`rgba(255,255,255,0.2)`}, transparent)`};
`,vt=d.div`
  width: 100%;
  height: 2px;
  background: ${e=>e.$theme.border||`#222`};
  box-shadow: ${e=>`inset 0 1px 0 ${e.$theme.border||`#444`}, 0 1px 0 #000`};
`,yt=d.div`
  width: 100%;
  height: 6px;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6' preserveAspectRatio='none'%3E%3Cpolyline points='0,6 6,0 12,6 18,0 24,6' fill='none' stroke='${encodeURIComponent(e.$theme.border||`#ffffff`)}' stroke-width='1.5'/%3E%3C/svg%3E")`};
`,bt=d.div`
  width: 100%;
  height: 4px;
  background: ${e=>e.$theme.border||`white`};
  animation: flicker 1.2s infinite alternate;

  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 1; }
  }
`,xt=d.div`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`,St=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${e=>s(e.$theme.border,.85)};
  padding-bottom: 4px;
  margin-bottom: 4px;
`,Ct=d.div`
  color: ${e=>e.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,wt=d.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Tt=d.div`
  margin-bottom: 8px;
`,Et=d.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`,Dt=d.div`
  width: 20px;
  display: flex;
  justify-content: center;
`,Ot=d.div`
  flex: 1;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`,kt=d.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,At=d.input`
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
`,jt=d.textarea`
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
`,Mt=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`,Nt=d.button`
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
`,Pt=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ft=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 9999;
`,It=d.div`
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
`,Lt=d.h3`
  margin: 0 0 12px;
  color: ${e=>s(e.$theme.primary,.98)};
  font-size: 16px;
`,Rt=d.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
`,zt=d.span`
  color: ${e=>s(e.$theme.offset,.95)};
  font-size: 13px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
`,Bt=d.button`
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
`,Vt=d.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`,Ht=d.div`
  flex: 1;
`,Ut=d.input`
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
`,Wt=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 8px;
`,Gt=d.span`
  color: ${e=>e.$theme.offset||f.theme_offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Kt=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: space-evenly;
  width: ${e=>e.$fullWidth?`100%`:`auto`};
`,qt=d.input`
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
`,Jt=d.button`
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
`,Yt=d.div`
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
`,Xt={sm:`14px`,md:`16px`,lg:`18px`},Zt={sm:`14px`,md:`16px`,lg:`18px`},Qt={sm:`14px`,md:`16px`,lg:`18px`},$t={sm:`14px`,md:`16px`,lg:`18px`},en=40,tn={anchor:Ee,aperture:ue,award:L,"battery-charging":B,book:I,calendar:Te,clock:W,"cloud-lightning":H,compass:he,"dollar-sign":V,feather:oe,eye:fe,heart:w,moon:ne,music:te,shield:S,star:D,sun:T,target:E,users:z,wind:ge,zap:y,drama:we,carrot:_e,bone:be,sword:C,swords:ee,axe:R,"bow-arrow":F,coins:P,wand:g,flower:M,skull:k,castle:de,cross:Se,"test-tube-diagonal":ie,squirrel:ke,snowflake:_,shell:O,pickaxe:A,"heart-plus":j,"heart-crack":le,fan:h},nn=(e,t,n,r)=>{let i=typeof e==`number`?e:typeof e==`string`?Number(e):NaN;if(!Number.isFinite(i))return r;let a=Math.trunc(i);return Math.max(t,Math.min(n,a))},rn=(e,t=`center`)=>{if(typeof e!=`string`)return t;let n=e.trim().toLowerCase();return n===`left`||n===`center`||n===`right`?n:t},Y=e=>String(e?.attr_bid??e?.bid??``).trim(),an=e=>String(e?.attr_abbr??e?.abbr??``).trim(),X=e=>String(e?.attr_name??e?.name??``).trim(),on=e=>String(e?.attr_type??e?.type??``).trim().toLowerCase(),sn=e=>{let t=e?.attr_func??e?.func??``;return typeof t==`string`?t.trim():``},Z=e=>e?.attr_meta??e?.meta??{},Q=(e,t)=>t&&e.find(e=>{let n=e,r=Y(n)===t,i=String(n.id??``)===String(t);return r||i})||null,cn=(e,t)=>e?t===`abbr`?an(e):t===`name`||!t||t===`text`?X(e):``:``,ln=(e,t)=>t===`icon`?!0:cn(e,t).length>0,un=(e,t,n,r=16)=>t===`icon`?(0,q.jsx)(tn[String(n||``).trim().toLowerCase()]||D,{size:r,"aria-hidden":`true`}):cn(e,t),dn=(e,t)=>Array.isArray(t)?t.filter(t=>!!Q(e,t)):[],fn=(e,t)=>dn(e,t).filter(t=>on(Q(e,t))===`bool`),pn=(e,t)=>{let n=Q(e,t);return!n||on(n)!==`list`?`List Attribute`:X(n)};const mn=({systemTheme:t,backgroundUrl:n,cardLayout:i,attributes:a,unitItem:o,onUpdateMetadata:s})=>{let[l,u]=(0,K.useState)({}),[d,f]=(0,K.useState)({}),[p,m]=(0,K.useState)(null),[h,g]=(0,K.useState)(null),_=(0,K.useRef)({}),v=(0,K.useRef)({}),{rows:y}=(0,K.useMemo)(()=>Ve(i),[i]),x=(0,K.useMemo)(()=>{let e=o.metadata?.[c.UNIT_NAME];if(typeof e==`string`&&e.trim())return e;let t=o.text?.plainText;return typeof t==`string`&&t.trim()?t:typeof o.name==`string`&&o.name.trim()?o.name:`Unknown`},[o]),[ee,te]=(0,K.useState)(x);(0,K.useEffect)(()=>{te(x)},[x]);let S=async()=>{let e=ee.trim(),t=x.trim()||`Unknown`,n=e||t;te(n),n!==x&&await s({[c.UNIT_NAME]:n})},C=t=>`${e.EXTENSIONID}/${t}`,w=e=>{let t=o.metadata?.[C(e)];return t==null?``:typeof t==`string`?t:typeof t==`number`||typeof t==`boolean`?String(t):``},ne=e=>{let t=o.metadata?.[C(e)];if(typeof t==`boolean`)return t;if(typeof t==`number`)return t!==0;if(typeof t==`string`){let e=t.trim().toLowerCase();return e===`true`||e===`1`||e===`yes`||e===`on`}return!1},T=(e,t)=>l[e]??w(t),re=e=>sn(e).length>0,ie=(0,K.useMemo)(()=>{let e={};for(let t of a){let n=Y(t);if(!n)continue;let r=w(n).trim();if(!r)continue;let i=Number(r);Number.isFinite(i)&&(e[n]=i)}return e},[a,o.metadata]),E=(0,K.useMemo)(()=>{let e={};for(let t of a){let n=t,r=Y(n);if(!r)continue;let i=w(r).trim();if(!i)continue;let a=Number(i);if(!Number.isFinite(a))continue;let o=X(n);o&&(e[o]=a);let s=an(n);s&&(e[s]=a)}return e},[a,o.metadata]),oe=e=>{let t=sn(e);if(!t)return null;let n=U(t,{bidValueMap:ie,nameValueMap:E,onMissingBid:`error`});return!n.valid||!n.notation?(b.warn(`[FORGE] Could not convert attr_func for ${Y(e)||`unknown`}: ${n.error||`Unknown conversion error`}`),null):n.notation},D=async(e,t)=>{try{let n=await r.room.getMetadata(),i=(await r.party.getPlayers()).find(e=>e.id===o.createdUserId),a=await r.player.getId(),s=await r.player.getColor();await ce({notation:e,actionName:t,senderName:x,senderId:o.createdUserId||a||o.id,senderColor:i?.color||s||`#ffffff`},n)}catch(t){b.error(`Failed to send dice roll from CardLayoutRenderer`,e,t),b.log(e)}},se=async e=>{if(!e)return;let t=oe(e);t&&await D(t,X(e)||Y(e)||`Roll`)},O=e=>o.metadata?.[C(e)],k=(e,t)=>{let n=O(e),r=n&&typeof n==`object`&&!Array.isArray(n)?n:null,i=Z(t)?.resource;return{current:r?Number(r.current??i?.defaultCurrent??0):Number(i?.defaultCurrent??0),max:r?Number(r.max??i?.defaultMax??0):Number(i?.defaultMax??0)}},A=async(e,t)=>{await s({[C(e)]:t})},le=e=>{let t=Z(e)?.derived?.formula,n=typeof t==`string`&&t.trim().length>0?t.trim():sn(e);if(!n)return`-`;let r=U(n,{bidValueMap:ie,nameValueMap:E,onMissingBid:`error`});if(!r.valid||!r.notation)return`-`;let i=r.notation.trim(),a=Number(i);if(!Number.isFinite(a))return i||`-`;let o=Number(Z(e)?.derived?.precision),s=Number.isFinite(o)?Math.max(0,Math.min(Math.trunc(o),8)):0,c=Z(e)?.derived?.displayMode,l=s>0?a.toFixed(s):String(a);return c===`percent`?`${l}%`:l},j=/(\d+)d(\d+)([kd][hl]\d+|!)?/gi,M=(e,t)=>{let n=Array.from(e.matchAll(j));if(n.length!==1)return null;let r=n[0],i=r[0]||``,a=r[1]||``,o=r[2]||``,s=r[3]||``,c=r.index;if(!i||!a||!o||typeof c!=`number`)return null;let l=Number(a);if(!Number.isFinite(l)||l!==1||s)return null;let u=`2d${o}${t===`advantage`?`kh1`:`kl1`}`;return`${e.slice(0,c)}${u}${e.slice(c+i.length)}`};(0,K.useEffect)(()=>()=>{Object.values(_.current).forEach(e=>{window.clearTimeout(e)})},[]);let ue=e=>!!d[e],N=(e,t,n,r)=>{t&&m({draftKey:e,attribute:t,input:n,isRollable:r})},P=()=>{m(null)},de=e=>{g(e)},F=()=>{g(null)};(0,K.useEffect)(()=>{if(!p&&!h)return;let e=e=>{e.key===`Escape`&&(m(null),g(null))};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[p,h]);let fe=async e=>{if(!h)return;let t=e===`normal`?h.notation:M(h.notation,e);if(!t)return;let n=e===`normal`?``:e===`advantage`?` (Advantage)`:` (Disadvantage)`;await D(t,`${h.actionName}${n}`)},I=(e,t)=>{f(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},pe=e=>{f(t=>{let{[e]:n,...r}=t;return r})},L=(e,t)=>{let n=_.current[e];n&&window.clearTimeout(n),_.current[e]=window.setTimeout(()=>{v.current[e]=!0,I(e,t),delete _.current[e]},500)},R=e=>{let t=_.current[e];t&&(window.clearTimeout(t),delete _.current[e])},me=e=>v.current[e]?(delete v.current[e],!0):!1,he=async(e,t)=>{await s({[C(e)]:t})},z=async(e,t)=>{await s({[C(e)]:t})},ge=e=>{let t=o.metadata?.[C(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``}}):[]},_e=e=>{let t=o.metadata?.[C(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``,inUse:!!t.inUse}}):[]},B=(e,t)=>{b.log(e,t)},V=e=>{e&&(e.style.height=`0px`,e.style.height=`${Math.max(e.scrollHeight,44)}px`)},ve=e=>{let t=[],n=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of n){let n=e[0],r=(e[1]||``).trim();if(!r)continue;let i=U(r,{bidValueMap:ie,nameValueMap:E,onMissingBid:`error`});!i.valid||!i.notation||t.push({raw:n,notation:i.notation})}return t},H=async(e,t,n)=>{B(`List metadata update`,{listType:n.listType,bid:e,reason:n.reason,entryId:n.entryId,field:n.field,entryCount:t.length,timestamp:Date.now()}),await s({[C(e)]:t})},ye=e=>e===`dash`||e===`dashed`?(0,q.jsx)(gt,{$theme:t}):e===`shadow`?(0,q.jsx)(_t,{$theme:t}):e===`ridge`?(0,q.jsx)(vt,{$theme:t}):e===`zigzag`?(0,q.jsx)(yt,{$theme:t}):e===`pulse`?(0,q.jsx)(bt,{$theme:t}):(0,q.jsx)(ft,{$theme:t}),be=e=>{let n=e.type,r=(()=>n===`derived-value`||n===`enum-value`||n===`resource`?`text-value`:n===`column-derived`?`column-value`:n)(),i=e.styles||{},o=Q(a,i.attributeId),s=rn(i.textAlign??i.align,`center`),c=i.stretch===!0;if(r===`line-break`)return(0,q.jsx)(J,{$theme:t,$full:!0,children:ye(i.styleDesign)},e.id);if(r===`line-spacer`)return(0,q.jsx)(dt,{$full:e.fullsize},e.id);if(r===`image`){let n=typeof i.imageUrl==`string`?i.imageUrl.trim():``,r=nn(i.imageCols,1,2,e.fullsize?2:1),a=nn(i.imageRows,1,6,1);return(0,q.jsx)(J,{$theme:t,$full:r===2,children:(0,q.jsx)(pt,{$theme:t,$heightPx:en*a,children:n?(0,q.jsx)(mt,{src:n,alt:`Card component`,loading:`lazy`}):(0,q.jsx)(ht,{$theme:t,children:`No image selected`})})},e.id)}if(r===`text`){let n=Xt[i.fontSize||`md`],r=ln(o,i.labelMode)?un(o,i.labelMode,i.labelIcon,18):`Title Header`,a=`text:${e.id}:${Y(o)||`none`}`;return(0,q.jsx)(J,{$theme:t,$full:e.fullsize,onContextMenu:o?e=>{e.preventDefault(),N(a,o,null,!1)}:void 0,children:(0,q.jsx)(Ye,{$theme:t,$fontSize:n,$weight:700,$stretch:c,$align:s,children:r})},e.id)}if(r===`text-value`){let n=$t[i.fontSize||`md`],r=ln(o,i.labelMode),a=un(o,i.labelMode,i.labelIcon,18),s=i.labelPosition===`right`?`right`:`left`,d=rn(i.textAlign??i.align,`center`),f=i.fontWeight===`bold`?700:400,p=i.fontStyle===`italic`?`italic`:`normal`,m=Y(o),h=on(o),g=re(o),_=`text-value:${e.id}:${m||`none`}`,v=g&&ue(_),y;if(h===`derived`)y=(0,q.jsx)(rt,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,title:`Formula: ${Z(o)?.derived?.formula||sn(o)||`Derived formula`}`,onContextMenu:o?e=>{e.preventDefault(),N(_,o,null,!1)}:void 0,children:le(o)});else if(h===`enum`){let e=Array.isArray(Z(o)?.enum?.options)?(Z(o)?.enum?.options||[]).map(e=>String(e||``).trim()).filter(e=>e.length>0):[];y=(0,q.jsx)(tt,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,value:e.includes(m?w(m).trim():``)?w(m).trim():e[0]||``,disabled:!m,onContextMenu:o?e=>{e.preventDefault(),N(_,o,null,!1)}:void 0,onChange:m?async e=>{await A(m,e.target.value)}:void 0,children:e.length===0?(0,q.jsx)(`option`,{value:``,children:`No options`}):e.map(e=>(0,q.jsx)(`option`,{value:e,children:e},e))})}else if(h===`resource`){let e=Z(o)?.resource,r=typeof e?.showPips==`boolean`?e.showPips:!!i.showPips,a=m?k(m,o):{current:0,max:0},s=Number(e?.pipCap??a.max??0),h=Number.isFinite(s)?Math.max(0,Math.min(Math.round(s),15)):0;if(r&&h>0)y=(0,q.jsx)(ot,{onContextMenu:o?e=>{e.preventDefault(),N(_,o,null,!1)}:void 0,children:Array.from({length:h}).map((e,n)=>(0,q.jsx)(st,{$theme:t,$filled:n<Math.max(0,Math.min(a.current,h)),type:`button`,disabled:!m,onClick:m?async()=>{let e=Math.max(0,Math.min(a.current,h));await A(m,{current:n+1===e?n:n+1,max:a.max})}:void 0},`text-resource-pip-${n}`))});else if(r)y=(0,q.jsx)(nt,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,children:`-`});else{let e=`${_}:current`,r=`${_}:max`;y=(0,q.jsxs)(it,{children:[(0,q.jsx)(et,{$theme:t,$fontSize:n,$align:`center`,$weight:f,$fontStyle:p,$stretch:c,type:`text`,value:l[e]??String(a.current),onChange:t=>{let n=t.target.value;u(t=>({...t,[e]:n}))},onBlur:async t=>{if(!m)return;let n=Number(t.target.value);await A(m,{current:Number.isFinite(n)?n:a.current,max:a.max}),u(t=>{let{[e]:n,...r}=t;return r})},placeholder:`0`}),(0,q.jsx)(at,{$theme:t,children:`/`}),(0,q.jsx)(et,{$theme:t,$fontSize:n,$align:`center`,$weight:f,$fontStyle:p,$stretch:c,type:`text`,value:l[r]??String(a.max),onChange:e=>{let t=e.target.value;u(e=>({...e,[r]:t}))},onBlur:async e=>{if(!m)return;let t=Number(e.target.value),n=Number.isFinite(t)?t:a.max;await A(m,{current:a.current,max:n}),u(e=>{let{[r]:t,...n}=e;return n})},placeholder:`0`})]})}}else y=(0,q.jsx)(et,{$theme:t,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:c,$isRollable:g,type:`text`,readOnly:g&&!v,value:m?T(_,m):``,onChange:g&&!v?void 0:e=>{if(!m)return;let t=e.target.value;u(e=>({...e,[_]:t}))},onBlur:g&&!v?void 0:async e=>{if(!m)return;let t=e.target.value;await he(m,t),u(e=>{let{[_]:t,...n}=e;return n}),g&&pe(_)},onClick:g?()=>{v||me(_)||se(o)}:void 0,onContextMenu:o?e=>{e.preventDefault(),N(_,o,e.currentTarget,g)}:void 0,onTouchStart:g?e=>{v||L(_,e.currentTarget)}:void 0,onTouchEnd:g?()=>{R(_)}:void 0,onTouchCancel:g?()=>{R(_)}:void 0,onKeyDown:e=>{if(g&&!v&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),se(o);return}(v||!g)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`});let b=r?(0,q.jsx)($e,{$theme:t,$fontSize:n,$stretch:c,$weight:f,$fontStyle:p,children:a}):null;return(0,q.jsx)(Ze,{$full:e.fullsize,children:(0,q.jsxs)(Qe,{children:[s===`left`?b:null,y,s===`right`?b:null]})},e.id)}if(r===`text-checkbox`){let n=Zt[i.fontSize||`md`],r=e.fullsize?6:3,o=Math.max(1,Math.min(r,Number(i.checkboxCount||1))),s=[...fn(a,i.bidList)].slice(0,o);for(;s.length<o;)s.push(``);let l=Q(a,s[0]||i.attributeId),u=ln(l,i.labelMode),d=un(l,i.labelMode,i.labelIcon,16),f=i.inputType===`slider`,p=i.labelPosition===`right`?`right`:`left`,m=i.fontWeight===`bold`?700:400,h=i.fontStyle===`italic`?`italic`:`normal`,g=u?(0,q.jsx)(Gt,{$theme:t,$fontSize:n,$stretch:c,$weight:m,$fontStyle:h,children:d}):null;return(0,q.jsx)(J,{$theme:t,$full:e.fullsize,children:(0,q.jsxs)(Wt,{children:[p===`left`?g:null,(0,q.jsx)(Kt,{$fullWidth:!g,children:Array.from({length:o}).map((n,r)=>{let i=s[r]||``,o=i?ne(i):!1,c=i?Q(a,i):null,l=`text-checkbox:${e.id}:${i||`index-${r}`}`;return f?(0,q.jsx)(Jt,{type:`button`,$theme:t,$active:o,disabled:!i,onClick:i?()=>{z(i,!o)}:void 0,onContextMenu:c?e=>{e.preventDefault(),N(l,c,null,!1)}:void 0,children:(0,q.jsx)(Yt,{$theme:t,$active:o})},`slider-${r}`):(0,q.jsx)(qt,{$theme:t,type:`checkbox`,disabled:!i,checked:o,onChange:i?e=>{z(i,e.target.checked)}:void 0,onContextMenu:c?e=>{e.preventDefault(),N(l,c,null,!1)}:void 0},`checkbox-${r}`)})}),p===`right`?g:null]})},e.id)}if(r===`column-text`){let n=Qt[i.fontSize||`md`],r=dn(a,i.bidList),o=i.fontWeight===`bold`?700:400,s=i.fontStyle===`italic`?`italic`:`normal`;return r.length===0?null:(0,q.jsx)(J,{$theme:t,$full:e.fullsize,children:(0,q.jsx)(ct,{children:r.map(r=>{let l=Q(a,r),u=i.labelMode||`name`,d=ln(l,u),f=un(l,u,i.labelIcon,16);return d?(0,q.jsx)(lt,{children:(0,q.jsx)(Je,{$theme:t,$fontSize:n,$stretch:c,$align:`center`,$weight:o,$fontStyle:s,onContextMenu:l?t=>{t.preventDefault(),N(`column-text:${e.id}:${r}`,l,null,!1)}:void 0,children:f})},r):null})})},e.id)}if(r===`column-value`){let n=Qt[i.fontSize||`md`],r=dn(a,i.bidList),o=i.fontWeight===`bold`?700:400,s=i.fontStyle===`italic`?`italic`:`normal`;return r.length===0?null:(0,q.jsx)(J,{$theme:t,$full:e.fullsize,children:(0,q.jsx)(ct,{children:r.map(r=>{let d=Q(a,r),f=on(d),p=re(d),m=`column-value:${e.id}:${r}`,h=p&&ue(m),g;if(f===`derived`)g=(0,q.jsx)(rt,{$theme:t,$fontSize:n,$align:`center`,$weight:o,$fontStyle:s,$stretch:c,title:`Formula: ${Z(d)?.derived?.formula||sn(d)||`Derived formula`}`,onContextMenu:d?e=>{e.preventDefault(),N(m,d,null,!1)}:void 0,children:le(d)});else if(f===`enum`){let e=Array.isArray(Z(d)?.enum?.options)?(Z(d)?.enum?.options||[]).map(e=>String(e||``).trim()).filter(e=>e.length>0):[],i=w(r).trim();g=(0,q.jsx)(tt,{$theme:t,$fontSize:n,$align:`center`,$weight:o,$fontStyle:s,$stretch:c,value:e.includes(i)?i:e[0]||``,onContextMenu:d?e=>{e.preventDefault(),N(m,d,null,!1)}:void 0,onChange:async e=>{await A(r,e.target.value)},children:e.length===0?(0,q.jsx)(`option`,{value:``,children:`No options`}):e.map(e=>(0,q.jsx)(`option`,{value:e,children:e},e))})}else if(f===`resource`){let e=Z(d)?.resource,a=typeof e?.showPips==`boolean`?e.showPips:!!i.showPips,f=k(r,d),p=Number(e?.pipCap??f.max??0),h=Number.isFinite(p)?Math.max(0,Math.min(Math.round(p),15)):0;if(a&&h>0)g=(0,q.jsx)(ot,{onContextMenu:d?e=>{e.preventDefault(),N(m,d,null,!1)}:void 0,children:Array.from({length:h}).map((e,n)=>(0,q.jsx)(st,{$theme:t,$filled:n<Math.max(0,Math.min(f.current,h)),type:`button`,onClick:async()=>{let e=Math.max(0,Math.min(f.current,h));await A(r,{current:n+1===e?n:n+1,max:f.max})}},`column-resource-pip-${r}-${n}`))});else if(a)g=(0,q.jsx)(nt,{$theme:t,$fontSize:n,$align:`center`,$weight:o,$fontStyle:s,$stretch:c,children:`-`});else{let e=`${m}:current`,i=`${m}:max`;g=(0,q.jsxs)(it,{children:[(0,q.jsx)(Xe,{$theme:t,$fontSize:n,$align:`center`,value:l[e]??String(f.current),onChange:t=>{let n=t.target.value;u(t=>({...t,[e]:n}))},onBlur:async t=>{let n=Number(t.target.value);await A(r,{current:Number.isFinite(n)?n:f.current,max:f.max}),u(t=>{let{[e]:n,...r}=t;return r})}}),(0,q.jsx)(at,{$theme:t,children:`/`}),(0,q.jsx)(Xe,{$theme:t,$fontSize:n,$align:`center`,value:l[i]??String(f.max),onChange:e=>{let t=e.target.value;u(e=>({...e,[i]:t}))},onBlur:async e=>{let t=Number(e.target.value),n=Number.isFinite(t)?t:f.max;await A(r,{current:f.current,max:n}),u(e=>{let{[i]:t,...n}=e;return n})}})]})}}else g=(0,q.jsx)(Xe,{$theme:t,$fontSize:n,$align:`center`,$isRollable:p,readOnly:p&&!h,value:T(m,r),onChange:p&&!h?void 0:e=>{let t=e.target.value;u(e=>({...e,[m]:t}))},onBlur:p&&!h?void 0:async e=>{let t=e.target.value;await he(r,t),u(e=>{let{[m]:t,...n}=e;return n}),p&&pe(m)},onClick:p?()=>{h||me(m)||se(d)}:void 0,onContextMenu:d?e=>{e.preventDefault(),N(m,d,e.currentTarget,p)}:void 0,onTouchStart:p?e=>{h||L(m,e.currentTarget)}:void 0,onTouchEnd:p?()=>{R(m)}:void 0,onTouchCancel:p?()=>{R(m)}:void 0,onKeyDown:e=>{if(p&&!h&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),se(d);return}(h||!p)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`});return(0,q.jsx)(ut,{children:g},r)})})},e.id)}if(r===`action-list`){let n=Q(a,i.attributeId||i.bidList?.[0]),r=Y(n),o=pn(a,i.attributeId||i.bidList?.[0]),s=r?ge(r):[];return(0,q.jsx)(J,{$theme:t,$full:e.fullsize,children:(0,q.jsxs)(xt,{$theme:t,children:[(0,q.jsxs)(St,{$theme:t,children:[(0,q.jsx)(Ct,{$theme:t,onContextMenu:n?t=>{t.preventDefault(),N(`action-list:${e.id}:${r||`none`}`,n,null,!1)}:void 0,children:o}),(0,q.jsx)(wt,{type:`button`,$theme:t,"aria-label":`Add Action`,onClick:async()=>{r&&await H(r,[...s,{id:crypto.randomUUID(),name:``,description:``}],{listType:`action`,reason:`add`})},children:(0,q.jsx)(Le,{size:14})})]}),s.map((n,i)=>(0,q.jsxs)(Tt,{children:[(0,q.jsxs)(Vt,{children:[(0,q.jsx)(Ht,{children:(0,q.jsx)(At,{$theme:t,type:`text`,defaultValue:n.name,placeholder:`Action Name`,onBlur:async e=>{if(!r)return;let t=e.target.value;await H(r,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,q.jsx)(kt,{type:`button`,$theme:t,"aria-label":`Delete Action`,onClick:async()=>{r&&await H(r,s.filter(e=>e.id!==n.id),{listType:`action`,reason:`delete`,entryId:n.id})},children:(0,q.jsx)(ae,{size:14})})]}),(()=>{let e=ve(n.description);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(jt,{$theme:t,defaultValue:n.description,ref:V,placeholder:`Action Description`,onInput:e=>{V(e.currentTarget)},onBlur:async e=>{if(!r)return;let t=e.target.value;await H(r,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`description`})}}),e.length>0?(0,q.jsx)(Mt,{children:e.map((e,r)=>(0,q.jsx)(Nt,{type:`button`,$theme:t,onClick:()=>{D(e.notation,n.name||`Action`)},onContextMenu:t=>{t.preventDefault(),de({notation:e.notation,actionName:n.name||`Action`,title:n.name||`Action Roll`})},title:e.notation,children:e.notation},`${n.id}-action-inline-${r}`))}):null]})})()]},n.id||`${e.id}-action-${i}`))]})},e.id)}if(r===`item-list`){let n=Q(a,i.attributeId||i.bidList?.[0]),r=Y(n),o=pn(a,i.attributeId||i.bidList?.[0]),s=r?_e(r):[];return(0,q.jsx)(J,{$theme:t,$full:e.fullsize,children:(0,q.jsxs)(xt,{$theme:t,children:[(0,q.jsxs)(St,{$theme:t,children:[(0,q.jsx)(Ct,{$theme:t,onContextMenu:n?t=>{t.preventDefault(),N(`item-list:${e.id}:${r||`none`}`,n,null,!1)}:void 0,children:o}),(0,q.jsx)(wt,{type:`button`,$theme:t,"aria-label":`Add Item`,onClick:async()=>{r&&await H(r,[...s,{id:crypto.randomUUID(),name:``,description:``,inUse:!1}],{listType:`item`,reason:`add`})},children:(0,q.jsx)(Le,{size:14})})]}),s.map((n,i)=>(0,q.jsxs)(Tt,{children:[(0,q.jsxs)(Et,{children:[(0,q.jsx)(Dt,{children:(0,q.jsx)(Ut,{$theme:t,type:`checkbox`,defaultChecked:n.inUse,onBlur:async e=>{if(!r)return;let t=e.target.checked;await H(r,s.map(e=>e.id===n.id?{...e,inUse:t}:e),{listType:`item`,reason:`toggle-save`,entryId:n.id,field:`inUse`})}})}),(0,q.jsx)(Ot,{$theme:t,children:(0,q.jsx)(At,{$theme:t,type:`text`,defaultValue:n.name,placeholder:`Item Name`,onBlur:async e=>{if(!r)return;let t=e.target.value;await H(r,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,q.jsx)(kt,{type:`button`,$theme:t,"aria-label":`Delete Item`,onClick:async()=>{r&&await H(r,s.filter(e=>e.id!==n.id),{listType:`item`,reason:`delete`,entryId:n.id})},children:(0,q.jsx)(ae,{size:14})})]}),(()=>{let e=ve(n.description);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(jt,{$theme:t,defaultValue:n.description,ref:V,placeholder:`Item Description`,onInput:e=>{V(e.currentTarget)},onBlur:async e=>{if(!r)return;let t=e.target.value;await H(r,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`description`})}}),e.length>0?(0,q.jsx)(Mt,{children:e.map((e,r)=>(0,q.jsx)(Nt,{type:`button`,$theme:t,onClick:()=>{D(e.notation,n.name||`Item`)},onContextMenu:t=>{t.preventDefault(),de({notation:e.notation,actionName:n.name||`Item`,title:n.name||`Item Roll`})},title:e.notation,children:e.notation},`${n.id}-item-inline-${r}`))}):null]})})()]},n.id||`${e.id}-item-${i}`))]})},e.id)}return null};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ue,{$theme:t,$backgroundUrl:n,children:(0,q.jsxs)(We,{children:[(0,q.jsx)(Ge,{children:(0,q.jsx)(Ke,{$theme:t,children:(0,q.jsx)(qe,{$theme:t,value:ee,onChange:e=>{te(e.target.value)},onBlur:()=>{S()},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},"aria-label":`Unit Name`})})}),y.map(e=>(0,q.jsx)(Ge,{children:e.items.map(e=>be(e))},`row-${e.row}`))]})}),p?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ft,{onClick:P}),(0,q.jsxs)(It,{$theme:t,onClick:e=>e.stopPropagation(),children:[(0,q.jsxs)(Rt,{children:[(0,q.jsx)(Lt,{$theme:t,children:X(p.attribute)||`Attribute`}),(0,q.jsxs)(zt,{$theme:t,children:[`[`,Y(p.attribute),`]`]})]}),(0,q.jsxs)(Pt,{children:[p.isRollable?(0,q.jsx)(Bt,{type:`button`,$theme:t,onClick:()=>{P(),I(p.draftKey,p.input)},children:`Edit value`}):null,(()=>{if(!p.isRollable)return null;let e=oe(p.attribute);if(!e)return null;let n=M(e,`advantage`),r=M(e,`disadvantage`);return!n||!r?null:(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Bt,{type:`button`,$theme:t,onClick:()=>{P(),D(n,`${X(p.attribute)||Y(p.attribute)||`Roll`} (Advantage)`)},children:`Roll with Advantage`}),(0,q.jsx)(Bt,{type:`button`,$theme:t,onClick:()=>{P(),D(r,`${X(p.attribute)||Y(p.attribute)||`Roll`} (Disadvantage)`)},children:`Roll with Disadvantage`})]})})()]})]})]}):null,h?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ft,{onClick:F}),(0,q.jsxs)(It,{$theme:t,onClick:e=>e.stopPropagation(),children:[(0,q.jsxs)(Rt,{children:[(0,q.jsx)(Lt,{$theme:t,children:h.title}),(0,q.jsxs)(zt,{$theme:t,children:[`[`,h.notation,`]`]})]}),(0,q.jsx)(Pt,{children:(()=>{let e=M(h.notation,`advantage`),n=M(h.notation,`disadvantage`);return!e||!n?null:(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Bt,{type:`button`,$theme:t,onClick:()=>{F(),fe(`advantage`)},children:`Roll with Advantage`}),(0,q.jsx)(Bt,{type:`button`,$theme:t,onClick:()=>{F(),fe(`disadvantage`)},children:`Roll with Disadvantage`})]})})()})]})]}):null]})};var hn={SNAPSHOT_PUBLIC_ID:`${e.EXTENSIONID}/SnapshotPublicId`},gn={primary:f.theme_primary,offset:f.theme_offset,background:f.theme_background,border:f.theme_border,background_url:f.background_url},_n=d.div`
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
`,vn=d.div`
  height: 100%;
  overflow: hidden;
  padding: 40px 4px 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
`,yn=d.p`
  margin: 0;
  color: ${e=>e.$theme.primary};
  text-align: center;
  align-content: center;
  font-weight: 600;
  font-size: 24px;
`,bn=d.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: min(calc(100% - 16px), 350px);
  z-index: 10;
`,xn=d.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`,Sn=d.select`
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
`,Cn=d.button`
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
`,wn=d.img`
  width: 28px;
  height: 28px;
  display: block;
`,Tn=d.div`
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
`,En=d.div`
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
`,Dn=d.button`
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
`,On=d.div`
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
`,kn=d.div`
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
`,An=d.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,jn=d.div`
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
`,Mn=d.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,Nn=d.div`
  color: ${e=>e.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,Pn=d.span`
  font-size: 12px;
  line-height: 1;
`,Fn=d.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,In=d.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`,Ln=d.span`
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
`,Rn=d.span`
  color: ${e=>e.$color};
`,zn=d.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,Bn=d.button`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>e.$variant===`import`?s(e.$theme.offset,.45):s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`,Vn=d.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Hn=d.input`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>s(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`,Un=d.button`
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
`,Wn=d.div`
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
`,Gn=d.div`
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
`,Kn=d($)`
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
`,ar=()=>{let e=new URLSearchParams(window.location.search).get(`unitid`);return e&&e.split(`,`)[0]?.trim()||null},or=()=>{let e=new URLSearchParams(window.location.search).get(`pinned`);if(!e)return!1;let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`},sr=`POP_${e.CARDSID}`,cr=(e,t)=>{let n=new URLSearchParams;return n.set(`unitid`,e),t&&n.set(`pinned`,`true`),`/pages/forgecard.html?${n.toString()}`},lr=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},ur=e=>{if(e===!0)return!0;if(typeof e==`string`){let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`}return typeof e==`number`?e===1:!1};Be.createRoot(document.getElementById(`root`)).render((0,q.jsx)(K.StrictMode,{children:(0,q.jsx)(p,{children:(0,q.jsx)(()=>{let{t}=Ae(),[n,i]=(0,K.useState)(()=>ar()),a=(0,K.useMemo)(()=>or(),[]),[o,s]=(0,K.useState)({metadata:{},items:[]}),[d,p]=(0,K.useState)(null),[h,g]=(0,K.useState)(null),[_,y]=(0,K.useState)(null),[ee,te]=(0,K.useState)(null),[S,C]=(0,K.useState)(!1),[w,ne]=(0,K.useState)(!1),[T,ie]=(0,K.useState)(!1),[ae,E]=(0,K.useState)(``),[oe,ce]=(0,K.useState)(``),[O,k]=(0,K.useState)(!1),[A,le]=(0,K.useState)([]),[j,M]=(0,K.useState)([]),[ue,P]=(0,K.useState)(!1),[de,F]=(0,K.useState)(!1),[fe,I]=(0,K.useState)(``),[L,R]=(0,K.useState)(null),[he,z]=(0,K.useState)(!1),ge=e=>{let t=e[m.ENABLE_CONSOLE_LOG];typeof t==`boolean`&&b.setEnabled(t)},_e=(0,K.useMemo)(()=>h||f.card_layout,[h]),B=(0,K.useMemo)(()=>_||f.attributes,[_]),V=(0,K.useMemo)(()=>d||gn,[d]),H=(0,K.useMemo)(()=>l(V.primary,V.offset,V.background,V.border,V.background_url),[V]);(0,K.useEffect)(()=>{let e=!1;return(async()=>{try{await ye()}catch(e){b.log(`Auth hydration failed in card iframe`,e)}finally{e||z(!0)}})(),()=>{e=!0}},[]),(0,K.useEffect)(()=>{let e=!0,t=async t=>{let n=t[hn.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(p(null),g(null),y(null));return}let{data:r,error:i}=await u.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(i){e&&(p(null),g(null),y(null));return}let a=Array.isArray(r)?r[0]:r;if(!a||typeof a!=`object`){e&&(p(null),g(null),y(null));return}let o=a,s=lr(o.card_layout),c=lr(o.attributes);if(typeof o.theme_primary!=`string`||typeof o.theme_offset!=`string`||typeof o.theme_background!=`string`||typeof o.theme_border!=`string`||!Array.isArray(s)||!Array.isArray(c)){e&&(p(null),g(null),y(null));return}e&&(p({primary:o.theme_primary,offset:o.theme_offset,background:o.theme_background,border:o.theme_border,background_url:typeof o.background_url==`string`?o.background_url:``}),g(s),y(c))};(async()=>{let[n,i,a,o,c]=await Promise.all([r.scene.getMetadata(),r.scene.items.getItems(),r.room.getMetadata(),r.player.getId(),r.player.getRole()]);e&&(ge(a),s({metadata:n,items:i}),await t(a),te(o),C(String(c||``).toUpperCase()===`GM`),ne(!0))})();let n=r.scene.onMetadataChange(t=>{e&&s(e=>({...e,metadata:t}))}),i=r.room.onMetadataChange(n=>{e&&(t(n),ge(n))}),a=r.scene.items.onChange(t=>{e&&s(e=>({...e,items:t}))});return()=>{e=!1,n(),i(),a()}},[]);let be=e=>{let n=e.metadata?.[c.UNIT_NAME];if(typeof n==`string`&&n.trim())return n;let r=e.text?.plainText;return typeof r==`string`&&r.trim()?r:typeof e.name==`string`&&e.name.trim()?e.name:t(`card.unknownUnit`)},Se=(0,K.useMemo)(()=>o.items.filter(e=>ur(e.metadata?.[c.FABRICATED])).filter(e=>S||e.createdUserId===ee).filter(e=>e.id!==n).map(e=>({id:e.id,name:be(e)})).sort((e,t)=>e.name.localeCompare(t.name)),[o.items,n,S,ee]),U=(0,K.useMemo)(()=>n&&o.items.find(e=>e.id===n)||null,[o.items,n]),W=async()=>n&&(await r.scene.items.getItems()).find(e=>e.id===n)||null,we=async e=>{U&&(await r.scene.items.updateItems([U.id],t=>{let n={...t[0].metadata||{}};Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),t[0].metadata=n}),s(t=>({...t,items:t.items.map(t=>{if(t.id!==U.id)return t;let n={...t.metadata||{}};return Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),{...t,metadata:n}})})))},Te=async t=>{if(!U)return;let n=[c.FABRICATED,c.INITIATIVE,c.ON_LIST,c.IN_PARTY];await r.scene.items.updateItems([U.id],r=>{let i=r[0].metadata,a={},o={};for(let[t,r]of Object.entries(i))t.startsWith(`${e.EXTENSIONID}/`)||(a[t]=r),n.includes(t)&&(o[t]=r);r[0].metadata={...a,...t,...o}}),s(r=>({...r,items:r.items.map(r=>{if(r.id!==U.id)return r;let i={},a={};for(let[t,o]of Object.entries(r.metadata||{}))t.startsWith(`${e.EXTENSIONID}/`)||(i[t]=o),n.includes(t)&&(a[t]=o);return{...r,metadata:{...i,...t,...a}}})}))},Ee=async()=>{le(await De())},G=e=>{let t=e.trim(),n=t?t[0].toUpperCase():`A`;return`hsl(${Math.max(0,Math.min(25,n.charCodeAt(0)-65))/26*360}, 70%, 65%)`},ke=async e=>{let[t,n]=await Promise.all([N(e),pe()?me(e):Promise.resolve([])]);return[...n.map(e=>({...e,source:`remote-user`})),...t.map(e=>({...e,source:`remote-shared`}))]},Le=(0,K.useMemo)(()=>{let e=oe.trim().toLowerCase(),t={local:0,"remote-user":1,"remote-shared":2},n=(e,n)=>t[e.source]===t[n.source]?e.favorite===n.favorite?e.name.localeCompare(n.name):e.favorite?-1:1:t[e.source]-t[n.source],r=[...A].sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);if(!e)return r.filter(e=>e.favorite).map(e=>({...e,source:`local`}));let i=r.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),a=j.filter(e=>e.source===`remote-user`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),o=j.filter(e=>e.source===`remote-shared`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e));return[...i.map(e=>({...e,source:`local`})),...a,...o].sort(n)},[A,j,oe]),Be=async()=>{if(!n){await r.notification.show(t(`card.noUnitSelectedToPin`),`ERROR`);return}let i=await r.viewport.getWidth(),o=await r.viewport.getHeight(),s=o>800?700:o-100;if(!a){await r.popover.open({id:sr,url:cr(n,!0),height:400,width:350,anchorPosition:{top:50,left:i-70},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},transformOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},hidePaper:!0,disableClickAway:!0}),await r.popover.close(e.CARDSID);return}await r.popover.open({id:e.CARDSID,url:cr(n,!1),height:s,width:350,anchorPosition:{left:i/2,top:o/2},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`CENTER`},transformOrigin:{vertical:`CENTER`,horizontal:`CENTER`},hidePaper:!0,disableClickAway:!0}),await r.popover.close(sr)},Ve=()=>{S&&k(e=>!e)},He=async()=>{if(!S)return;let e=await W();if(!e){await r.notification.show(t(`card.noUnitSelectedToSave`),`ERROR`);return}he||(await ye(),z(!0));try{let n=(await r.player.getName()).trim(),i=pe()?await ve(e.metadata,n,O):await se(e.metadata,n,O);await Ee();let a=pe()?t(`card.collectionTargetOnline`):t(`card.collectionTargetLocal`);await r.notification.show(t(i===`created`?`card.unitSavedToTarget`:`card.unitUpdatedInTarget`,{target:a}))}catch(e){b.log(`Collection save failed`,e),await r.notification.show(t(`card.couldNotSaveToCollection`),`ERROR`)}},Ue=async()=>{if(!await W()){await r.notification.show(t(`card.noUnitSelectedToImportInto`),`ERROR`);return}R(null),I(``),P(!0)},We=async()=>{let e=await W();if(!e){await r.notification.show(t(`card.noUnitSelectedToExport`),`ERROR`);return}try{let n=v(e.metadata),i=n[c.UNIT_NAME],a=typeof i==`string`?i.trim():``;if(!a){await r.notification.show(t(`card.unitMissingValidName`),`ERROR`);return}let o={name:a,author:(await r.player.getName()).trim()||t(`card.unknownAuthor`),metadata:n};await navigator.clipboard.writeText(JSON.stringify(o,null,2)),await r.notification.show(t(`card.unitDataCopied`))}catch(e){b.log(`Unit export failed`,e),await r.notification.show(t(`card.couldNotCopyUnitData`),`ERROR`)}},Ge=()=>{P(!1),R(null),I(``)},J=e=>{let n=JSON.parse(e);if(!n||typeof n!=`object`||Array.isArray(n))throw Error(t(`card.importDataMustBeJsonObject`));let r=n,i=r.metadata&&typeof r.metadata==`object`?r.metadata:n;if(!i||typeof i!=`object`||Array.isArray(i))throw Error(t(`card.importDataMustIncludeMetadata`));let a=v(i),o=a[c.UNIT_NAME];if(!(typeof o==`string`&&o.trim()))throw Error(t(`card.importedMetadataMissingName`));return a},Ke=async()=>{if(!await W()){R(t(`card.noUnitSelectedToImportInto`));return}let e=fe.trim();if(!e){R(t(`card.pasteJsonBeforeImport`));return}try{await Te(J(e)),k(!1),Ge(),await r.notification.show(t(`card.unitDataImported`))}catch(e){R(e instanceof Error?e.message:t(`card.importFailed`))}},qe=(e,n)=>{let r=(e||``).trim().toLowerCase();if(r===`numb`||r===`derived`)return 0;if(r===`bool`)return!1;if(r===`enum`)return``;if(r===`resource`)return{current:0,max:0};if(r===`list`){let e=n?.firstNumericBid?`@${n.firstNumericBid}`:`@BID`;return[{id:`example-list-001`,name:t(`card.aiExampleListEntryName`),description:t(`card.aiExampleListEntryDescription`,{bidRef:e})}]}return``},Je=()=>{let n=B.find(e=>e.attr_type===`numb`)?.attr_bid,r=B.find(e=>e.attr_type===`list`)||null,i=B.map(t=>({bid:t.attr_bid,name:t.attr_name,type:t.attr_type,metadataKey:`${e.EXTENSIONID}/${t.attr_bid}`})),a={[c.UNIT_NAME]:t(`card.aiExampleUnitName`)};for(let t of B)a[`${e.EXTENSIONID}/${t.attr_bid}`]=qe(t.attr_type,{firstNumericBid:n});let o={id:`example-list-001`,name:t(`card.aiExampleActionName`),description:t(`card.aiExampleActionDescription`,{bidRef:n?`@${n}`:`@BID`})},s={id:`example-item-001`,name:t(`card.aiExampleItemName`),description:t(`card.aiExampleItemDescription`),inUse:!1},l=JSON.stringify(i,null,2),u=JSON.stringify(a,null,2),d=JSON.stringify(o,null,2),f=JSON.stringify(s,null,2),p=r?`${e.EXTENSIONID}/${r.attr_bid}`:`${e.EXTENSIONID}/<LIST_BID>`;return[t(`card.aiPromptIntro`),``,t(`card.aiPromptRequirementsHeader`),t(`card.aiRequirement1`),t(`card.aiRequirement2`),t(`card.aiRequirement3`),t(`card.aiRequirement4`),t(`card.aiRequirement5`),t(`card.aiRequirement6`),``,t(`card.aiExtensionIdLabel`,{value:e.EXTENSIONID}),t(`card.aiUnitNameMetadataLabel`,{value:c.UNIT_NAME}),``,t(`card.aiAttributeDictionaryHeader`),l,``,t(`card.aiListExamplesHeader`),t(`card.aiStandardListEntryHeader`),d,``,t(`card.aiItemListEntryHeader`),f,``,t(`card.aiListKeyHint`,{key:p}),``,t(`card.aiOutputShapeHeader`),u,``,t(`card.aiFinalInstruction`)].join(`
`)},Ye=async()=>{try{let e=Je();await navigator.clipboard.writeText(e),await r.notification.show(t(`card.aiTemplateCopied`))}catch(e){b.log(`AI template copy failed`,e),await r.notification.show(t(`card.aiTemplateCopyFailed`),`ERROR`)}},Xe=()=>{let e=ae.trim();if(ce(e),!e){M([]);return}(async()=>{he||(await ye(),z(!0)),M(await ke(e))})().catch(async e=>{b.log(`Supabase collection search failed`,e),M([]),await r.notification.show(t(`card.onlineSearchFailed`),`ERROR`)})},Ze=async e=>{if(!U){await r.notification.show(t(`card.noUnitSelectedToImportInto`),`ERROR`);return}try{await Te(e.metadata),k(!1),await r.notification.show(e.source===`local`?t(`card.recordImportedLocal`,{name:e.name}):t(`card.recordImportedOnline`,{name:e.name}))}catch(e){b.log(`Collection record import failed`,e),await r.notification.show(t(`card.recordImportFailed`),`ERROR`)}},Qe=async e=>{try{if(e.source===`remote-user`)await Ce(e.id),M(t=>t.filter(t=>!(t.source===`remote-user`&&t.id===e.id)));else if(e.source===`local`)await Oe(e.id),le(t=>t.filter(t=>t.id!==e.id));else return;await r.notification.show(t(`card.recordDeleted`,{name:e.name}))}catch(e){b.log(`Collection record delete failed`,e),await r.notification.show(t(`card.recordDeleteFailed`),`ERROR`)}};return(0,K.useEffect)(()=>{T&&Ee().catch(e=>{b.log(`Failed to load collection records`,e)})},[T]),(0,K.useEffect)(()=>{T&&(ce(``),E(``),M([]))},[T]),(0,q.jsxs)(_n,{$theme:V,children:[(0,q.jsxs)(vn,{children:[(0,q.jsx)(bn,{children:(0,q.jsxs)(xn,{children:[(0,q.jsxs)(Sn,{$theme:V,"aria-label":t(`card.chooseUnitAria`),value:``,onChange:e=>{let t=e.target.value;t&&i(t)},children:[(0,q.jsx)(`option`,{value:``,children:t(`card.chooseUnitOption`)}),Se.map(e=>(0,q.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,q.jsx)(Cn,{type:`button`,$theme:V,"aria-label":t(`card.closeCardAria`),onClick:async()=>{await r.popover.close(a?sr:e.CARDSID)},children:(0,q.jsx)(wn,{src:`/close.svg`,alt:``,"aria-hidden":`true`})})]})}),w?n?U?(0,q.jsx)(mn,{systemTheme:V,backgroundUrl:V.background_url,cardLayout:_e,attributes:B,unitItem:U,onUpdateMetadata:we}):(0,q.jsx)(yn,{$theme:V,children:t(`card.unitNotFound`)}):(0,q.jsx)(yn,{$theme:V,children:t(`card.noUnitId`)}):(0,q.jsx)(yn,{$theme:V,children:t(`card.loading`)})]}),(0,q.jsxs)(Tn,{$theme:V,$open:T,children:[(0,q.jsxs)(Wn,{children:[(0,q.jsxs)(Gn,{children:[(0,q.jsx)($,{type:`button`,$theme:V,"aria-label":t(`card.pinAria`),onClick:()=>{Be()},children:(0,q.jsx)(x,{theme:H,text:t(`card.pinTooltip`),children:(0,q.jsx)(Ie,{size:16})})}),(0,q.jsx)(Kn,{type:`button`,$theme:V,$active:O,"aria-label":t(`card.favoriteAria`),disabled:!S,onClick:Ve,children:(0,q.jsx)(x,{theme:H,text:t(`card.favoriteTooltip`),children:(0,q.jsx)(D,{size:16,fill:O?`currentColor`:`none`})})}),(0,q.jsx)($,{type:`button`,$theme:V,"aria-label":t(`card.collectionSaveAria`),disabled:!S,onClick:He,children:(0,q.jsx)(x,{theme:H,text:t(`card.collectionSaveTooltip`),children:(0,q.jsx)(je,{size:16})})})]}),(0,q.jsxs)(Gn,{children:[(0,q.jsx)($,{type:`button`,$theme:V,"aria-label":t(`card.importAria`),onClick:Ue,children:(0,q.jsx)(x,{theme:H,text:t(`card.importTooltip`),children:(0,q.jsx)(Pe,{size:16})})}),(0,q.jsx)($,{type:`button`,$theme:V,"aria-label":t(`card.exportAria`),onClick:We,children:(0,q.jsx)(x,{theme:H,text:t(`card.exportTooltip`),children:(0,q.jsx)(re,{size:16})})}),(0,q.jsx)($,{type:`button`,$theme:V,"aria-label":t(`card.helpAria`),onClick:()=>{F(!0)},children:(0,q.jsx)(x,{theme:H,text:t(`card.helpTooltip`),children:(0,q.jsx)(Me,{size:16})})})]})]}),(0,q.jsx)(En,{$theme:V,children:(0,q.jsx)(x,{theme:H,text:t(T?`card.closeTrayTooltip`:`card.openTrayTooltip`),children:(0,q.jsx)(Dn,{type:`button`,$theme:V,"aria-label":t(T?`card.closeTrayAria`:`card.openTrayAria`),onClick:()=>{ie(e=>!e)},children:(0,q.jsx)(xe,{size:22})})})}),(0,q.jsx)(On,{$theme:V,children:T?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(kn,{$theme:V,children:(0,q.jsx)(An,{children:Le.length===0?(0,q.jsx)(yn,{$theme:V,children:t(`card.noCollectionRecords`)}):Le.map(e=>(0,q.jsxs)(jn,{$theme:V,children:[(0,q.jsxs)(Mn,{children:[(0,q.jsxs)(Nn,{$theme:V,children:[e.favorite?(0,q.jsx)(Pn,{children:`❤`}):null,(0,q.jsx)(Fn,{children:e.name})]}),(0,q.jsxs)(In,{children:[(0,q.jsx)(`span`,{children:`→`}),(0,q.jsx)(Rn,{$color:G(e.author),children:e.author}),(0,q.jsxs)(Ln,{$theme:V,title:e.source===`local`?t(`card.localSource`):e.source===`remote-user`?t(`card.myCloudSource`):t(`card.sharedSource`),children:[e.source===`local`?(0,q.jsx)(Fe,{size:11}):null,e.source===`remote-user`?(0,q.jsx)(Ne,{size:11}):null,e.source===`remote-shared`?(0,q.jsx)(ze,{size:11}):null]})]})]}),(0,q.jsxs)(zn,{children:[(0,q.jsx)(Bn,{type:`button`,$theme:V,$variant:`import`,onClick:()=>{Ze(e)},children:t(`card.importAction`)}),e.source===`remote-shared`?null:(0,q.jsx)(Bn,{type:`button`,$theme:V,$variant:`delete`,onClick:()=>{Qe(e)},children:t(`card.deleteAction`)})]})]},`${e.source}:${e.id}`))})}),(0,q.jsxs)(Vn,{children:[(0,q.jsx)(Hn,{$theme:V,type:`text`,value:ae,placeholder:t(`card.searchPlaceholder`),onChange:e=>{E(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Xe())}}),(0,q.jsx)(Un,{type:`button`,$theme:V,"aria-label":t(`card.searchAria`),onClick:Xe,children:(0,q.jsx)(Re,{size:16})})]})]}):null})]}),ue?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(tr,{onClick:Ge}),(0,q.jsxs)(nr,{$theme:V,onClick:e=>{e.stopPropagation()},children:[(0,q.jsx)(rr,{$theme:V,children:t(`card.importUnitDataTitle`)}),(0,q.jsx)(qn,{$theme:V,value:fe,placeholder:t(`card.importPlaceholder`),onChange:e=>{I(e.target.value),L&&R(null)}}),L?(0,q.jsx)(Xn,{$theme:V,children:L}):null,(0,q.jsxs)(ir,{children:[(0,q.jsx)(Yn,{type:`button`,$theme:V,onClick:()=>{Ye()},children:t(`card.aiTemplate`)}),(0,q.jsx)(Jn,{type:`button`,$theme:V,onClick:Ge,children:t(`card.cancel`)}),(0,q.jsx)(Jn,{type:`button`,$theme:V,$variant:`primary`,onClick:Ke,children:t(`card.importAction`)})]})]})]}):null,de?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(tr,{onClick:()=>{F(!1)}}),(0,q.jsxs)(nr,{$theme:V,onClick:e=>{e.stopPropagation()},children:[(0,q.jsx)(rr,{$theme:V,children:t(`card.helpTitle`)}),(0,q.jsxs)(Zn,{$theme:V,children:[(0,q.jsx)(Qn,{$theme:V,children:t(`card.helpRollableValuesTitle`)}),(0,q.jsxs)($n,{children:[(0,q.jsx)(`li`,{children:t(`card.helpRollableValuesItem1`)}),(0,q.jsx)(`li`,{children:t(`card.helpRollableValuesItem2`)}),(0,q.jsx)(`li`,{children:t(`card.helpRollableValuesItem3`)})]}),(0,q.jsx)(Qn,{$theme:V,children:t(`card.helpDiceChipsTitle`)}),(0,q.jsxs)($n,{children:[(0,q.jsx)(`li`,{children:t(`card.helpDiceChipsItem1`)}),(0,q.jsx)(`li`,{children:t(`card.helpDiceChipsItem2`)})]}),(0,q.jsx)(er,{$theme:V,children:t(`card.helpMeleeAttackExample`)}),(0,q.jsx)(Qn,{$theme:V,children:t(`card.helpUsingAttributesTitle`)}),(0,q.jsxs)($n,{children:[(0,q.jsx)(`li`,{children:t(`card.helpUsingAttributesItem1`)}),(0,q.jsx)(`li`,{children:t(`card.helpUsingAttributesItem2`)})]}),(0,q.jsx)(er,{$theme:V,children:t(`card.helpDamageBidExample`)}),(0,q.jsx)(er,{$theme:V,children:t(`card.helpDamageNameExample`)})]}),(0,q.jsx)(ir,{children:(0,q.jsx)(Jn,{type:`button`,$theme:V,$variant:`primary`,onClick:()=>{F(!1)},children:t(`card.close`)})})]})]}):null]})},{})})}));