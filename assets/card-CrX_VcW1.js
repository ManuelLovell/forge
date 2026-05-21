import{D as e,M as t,S as n,_ as r,g as i,k as a,o,s,t as c,v as l,y as u}from"./defaultgamesystem-wC8q2zZ8.js";import{a as d,c as f,d as p,m,n as h,o as g,p as _,r as v,t as y,u as b}from"./hpAttributeMapping-IzAaYiC1.js";import{$ as ee,A as x,At as S,B as te,D as ne,E as re,F as C,G as w,H as ie,I as ae,J as T,K as oe,L as se,M as ce,N as E,O as le,Ot as ue,P as de,Q as fe,R as D,St as O,U as k,V as A,W as j,X as M,Y as N,Z as pe,_t as P,a as me,at as F,bt as he,c as ge,ct as _e,dt as I,et as ve,ft as L,g as ye,gt as be,ht as R,i as xe,it as z,j as Se,k as B,lt as V,mt as Ce,nt as H,o as we,ot as U,pt as W,q as Te,rt as Ee,s as G,st as De,t as Oe,tt as ke,ut as Ae,vt as je,w as Me,xt as Ne,y as Pe,yt as Fe,z as Ie}from"./unitCollectionRemote-LfDvok3K.js";import{t as Le}from"./Translation-CPHpWyre.js";/* empty css               */var Re=O(`book-marked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),ze=O(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),Be=O(`cloudy`,[[`path`,{d:`M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z`,key:`44yre2`}],[`path`,{d:`M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61`,key:`leugyv`}]]),Ve=O(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),He=O(`hard-drive`,[[`line`,{x1:`22`,x2:`2`,y1:`12`,y2:`12`,key:`1y58io`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}],[`line`,{x1:`6`,x2:`6.01`,y1:`16`,y2:`16`,key:`sgf278`}],[`line`,{x1:`10`,x2:`10.01`,y1:`16`,y2:`16`,key:`1l4acy`}]]),Ue=O(`pin`,[[`path`,{d:`M12 17v5`,key:`bb1du9`}],[`path`,{d:`M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z`,key:`1nkz8b`}]]),We=O(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Ge=O(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Ke=O(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),qe=t(e(),1),K=t(a(),1);const Je=e=>{let t=[...Array.isArray(e)?e:[]].sort((e,t)=>e.row===t.row?e.col-t.col:e.row-t.row),n=[];return t.forEach(e=>{let t=n[n.length-1];if(!t||t.row!==e.row){n.push({row:e.row,items:[e]});return}t.items.push(e)}),{sorted:t,rows:n}};var q=u(),Ye=e=>`
    0 1px 1px ${r(e.background,.95)},
    0 0 2px ${r(e.background,.85)}
  `,Xe=s.div`
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
`,Ze=s.div`
  position: relative;
  z-index: 1;
`,Qe=s.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`,J=s.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`,$e=s(J)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  height: calc(2 * 1.1em);
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100% !important;
`,et=s.input`
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
`,tt=s(s.div`
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
`,nt=s.div`
  color: ${e=>e.$theme.primary};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`,rt=s.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?r(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?r(e.$theme.offset,.5):r(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>r(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?Ye(e.$theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${r(e.$theme.background,.28)}, 0 0 0 1px ${r(e.$theme.offset,.18)}`:`none`};
  box-sizing: border-box;
  font-size: ${e=>e.$fontSize};
  text-align: ${e=>e.$align||`left`};
  cursor: ${e=>e.$isRollable?`pointer`:`text`};

  &:focus {
    outline: none;
    border-color: ${e=>e.$theme.offset};
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${r(e.$theme.offset,.35)}, inset 0 0 0 1px ${r(e.$theme.background,.35)}`:`none`};
  }

  &::placeholder {
    color: ${e=>r(e.$theme.primary,.65)};
  }
`,it=s.div`
  width: ${e=>e.$full?`100%`:`170px`};
  height: 40px;
  box-sizing: border-box;
`,at=s.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`,ot=s.span`
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
`,st=s.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?r(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?r(e.$theme.offset,.5):r(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>r(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?Ye(e.$theme):`none`};
  box-shadow: ${e=>e.$isRollable?`inset 0 0 0 1px ${r(e.$theme.background,.28)}, 0 0 0 1px ${r(e.$theme.offset,.18)}`:`none`};
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
    box-shadow: ${e=>e.$isRollable?`0 0 0 2px ${r(e.$theme.offset,.35)}, inset 0 0 0 1px ${r(e.$theme.background,.35)}`:`none`};
  }

  &::placeholder {
    color: ${e=>r(e.$theme.primary,.65)};
  }
`,ct=s.select`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>r(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>r(e.$theme.primary,.9)};
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
`,lt=s.div`
  width: 100%;
  min-height: 28px;
  border-radius: 4px;
  border: 1px dashed ${e=>e.$theme.border};
  background: ${e=>r(e.$theme.background,.52)};
  color: ${e=>r(e.$theme.primary,.92)};
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
`,ut=s(lt)`
  border-style: solid;
  background: ${e=>r(e.$theme.primary,.75)};
  color: ${e=>r(e.$theme.offset,.96)};
  box-shadow: ${e=>`0 4px 14px ${r(e.$theme.background,.65)}`};
  text-shadow: ${e=>`1px 1px 0 ${r(e.$theme.background,.95)}`};
  font-weight: 700;
  font-style: italic;
`,dt=s.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
`,ft=s.span`
  color: ${e=>r(e.$theme.primary,.92)};
  flex-shrink: 0;
`,pt=s.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
`,mt=s.button`
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
`,ht=s.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,gt=s.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,_t=s.div`
  flex: 1;
  min-width: 0;
`,vt=s.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 18px;
`,yt=s.div`
  width: 100%;
  height: 5px;
  background: ${e=>`linear-gradient(10deg, ${e.$theme.border||`white`}, rgba(255,255,255,0))`};
`,bt=s.div`
  width: 100%;
  height: ${e=>`${e.$heightPx}px`};
  border-radius: 8px;
  border: 1px solid ${e=>r(e.$theme.border,.9)};
  background: ${e=>r(e.$theme.background,.42)};
  overflow: hidden;
  box-sizing: border-box;
`,xt=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,St=s.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  color: ${e=>r(e.$theme.offset,.95)};
  padding: 6px;
  box-sizing: border-box;
`,Ct=s.div`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${e=>e.$theme.border||`rgba(255,255,255,0.5)`};
`,wt=s.div`
  width: 100%;
  height: 10px;
  background: ${e=>`linear-gradient(to bottom, ${e.$theme.border||`rgba(255,255,255,0.2)`}, transparent)`};
`,Tt=s.div`
  width: 100%;
  height: 2px;
  background: ${e=>e.$theme.border||`#222`};
  box-shadow: ${e=>`inset 0 1px 0 ${e.$theme.border||`#444`}, 0 1px 0 #000`};
`,Et=s.div`
  width: 100%;
  height: 6px;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6' preserveAspectRatio='none'%3E%3Cpolyline points='0,6 6,0 12,6 18,0 24,6' fill='none' stroke='${encodeURIComponent(e.$theme.border||`#ffffff`)}' stroke-width='1.5'/%3E%3C/svg%3E")`};
`,Dt=s.div`
  width: 100%;
  height: 4px;
  background: ${e=>e.$theme.border||`white`};
  animation: flicker 1.2s infinite alternate;

  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 1; }
  }
`,Ot=s.div`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`,kt=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${e=>r(e.$theme.border,.85)};
  padding-bottom: 4px;
  margin-bottom: 4px;
`,At=s.div`
  color: ${e=>e.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,jt=s.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Mt=s.div`
  margin-bottom: 8px;
`,Nt=s.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`,Pt=s.div`
  width: 20px;
  display: flex;
  justify-content: center;
`,Ft=s.div`
  flex: 1;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`,It=s.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Lt=s.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>r(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
  font-style: italic;
  font-weight: 700;
`,Rt=s.textarea`
  width: 100%;
  min-height: 44px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>r(e.$theme.background,.78)};
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
`,zt=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`,Bt=s.button`
  height: 22px;
  min-width: 0;
  max-width: 100%;
  border-radius: 4px;
  border: 1px solid ${e=>r(e.$theme.offset,.8)};
  background: ${e=>r(e.$theme.offset,.5)};
  color: ${e=>r(e.$theme.primary,.95)};
  padding: 0 6px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Vt=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ht=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 9999;
`,Ut=s.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(420px, calc(100vw - 24px));
  border-radius: 10px;
  border: 2px solid ${e=>r(e.$theme.border,.9)};
  background: ${e=>r(e.$theme.background,.95)};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.45);
  padding: 14px;
  box-sizing: border-box;
  z-index: 10000;
`,Wt=s.h3`
  margin: 0 0 12px;
  color: ${e=>r(e.$theme.primary,.98)};
  font-size: 16px;
`,Gt=s.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
`,Kt=s.span`
  color: ${e=>r(e.$theme.offset,.95)};
  font-size: 13px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
`,qt=s.button`
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${e=>r(e.$theme.border,.9)};
  background: ${e=>r(e.$theme.background,.82)};
  color: ${e=>r(e.$theme.primary,.95)};
  padding: 8px 10px;
  box-sizing: border-box;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${e=>r(e.$theme.offset,.38)};
  }
`,Jt=s.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`,Yt=s.div`
  flex: 1;
`,Xt=s.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  cursor: pointer;
  background: ${e=>r(e.$theme.background,.55)};
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
    box-shadow: ${e=>`0 0 0 2px ${r(e.$theme.primary,.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,Zt=s.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 8px;
`,Qt=s.span`
  color: ${e=>e.$theme.offset||c.theme_offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,$t=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: space-evenly;
  width: ${e=>e.$fullWidth?`100%`:`auto`};
`,en=s.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>r(e.$theme.background,.55)};
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
    box-shadow: ${e=>`0 0 0 2px ${r(e.$theme.primary,.6)}`};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,tn=s.button`
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
`,nn=s.div`
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
`,rn={sm:`14px`,md:`16px`,lg:`18px`},an={sm:`14px`,md:`16px`,lg:`18px`},on={sm:`14px`,md:`16px`,lg:`18px`},sn={sm:`14px`,md:`16px`,lg:`18px`},cn=40,ln={anchor:Ne,aperture:he,award:Fe,"battery-charging":P,book:R,calendar:W,clock:Ae,"cloud-lightning":V,compass:De,"dollar-sign":F,feather:ke,eye:Ee,heart:pe,moon:N,music:T,shield:w,star:A,sun:te,target:se,users:de,wind:ce,zap:x,drama:z,carrot:L,bone:be,sword:Ie,swords:D,axe:je,"bow-arrow":Ce,coins:_e,wand:E,flower:ve,skull:j,castle:I,cross:U,"test-tube-diagonal":ae,squirrel:ie,snowflake:k,shell:oe,pickaxe:Te,"heart-plus":fe,"heart-crack":ee,fan:H},un=(e,t,n,r)=>{let i=typeof e==`number`?e:typeof e==`string`?Number(e):NaN;if(!Number.isFinite(i))return r;let a=Math.trunc(i);return Math.max(t,Math.min(n,a))},dn=(e,t=`center`)=>{if(typeof e!=`string`)return t;let n=e.trim().toLowerCase();return n===`left`||n===`center`||n===`right`?n:t},Y=e=>String(e?.attr_bid??e?.bid??``).trim(),fn=e=>String(e?.attr_abbr??e?.abbr??``).trim(),X=e=>String(e?.attr_name??e?.name??``).trim(),pn=e=>String(e?.attr_type??e?.type??``).trim().toLowerCase(),Z=e=>{let t=e?.attr_func??e?.func??``;return typeof t==`string`?t.trim():``},Q=e=>e?.attr_meta??e?.meta??{},$=(e,t)=>t&&e.find(e=>{let n=e,r=Y(n)===t,i=String(n.id??``)===String(t);return r||i})||null,mn=(e,t)=>e?t===`abbr`?fn(e):t===`name`||!t||t===`text`?X(e):``:``,hn=(e,t)=>t===`icon`?!0:mn(e,t).length>0,gn=(e,t,n,r=16)=>t===`icon`?(0,q.jsx)(ln[String(n||``).trim().toLowerCase()]||A,{size:r,"aria-hidden":`true`}):mn(e,t),_n=(e,t)=>Array.isArray(t)?t.filter(t=>!!$(e,t)):[],vn=(e,t)=>_n(e,t).filter(t=>pn($(e,t))===`bool`),yn=(e,t)=>{let n=$(e,t);return!n||pn(n)!==`list`?`List Attribute`:X(n)};const bn=({systemTheme:e,backgroundUrl:t,cardLayout:r,attributes:i,unitItem:a,onUpdateMetadata:o})=>{let[s,c]=(0,K.useState)({}),[l,u]=(0,K.useState)({}),[d,f]=(0,K.useState)(null),[h,g]=(0,K.useState)(null),[_,v]=(0,K.useState)(!1),y=(0,K.useRef)({}),b=(0,K.useRef)({}),{rows:ee}=(0,K.useMemo)(()=>Je(r),[r]),x=(0,K.useMemo)(()=>{let e=a.metadata?.[p.UNIT_NAME];if(typeof e==`string`&&e.trim())return e;let t=a.text?.plainText;return typeof t==`string`&&t.trim()?t:typeof a.name==`string`&&a.name.trim()?a.name:`Unknown`},[a]),[te,ne]=(0,K.useState)(x);(0,K.useEffect)(()=>{ne(x)},[x]),(0,K.useEffect)(()=>{let e=!0;return(async()=>{try{let t=await n.room.getMetadata();e&&v(t[m.EXTENSIONID+`/enabdice`]===!0)}catch{e&&v(!1)}})(),()=>{e=!1}},[]);let re=async()=>{let e=te.trim(),t=x.trim()||`Unknown`,n=e||t;ne(n),n!==x&&await o({[p.UNIT_NAME]:n})},C=e=>`${m.EXTENSIONID}/${e}`,w=e=>{let t=a.metadata?.[C(e)];return t==null?``:typeof t==`string`?t:typeof t==`number`||typeof t==`boolean`?String(t):``},ie=e=>{let t=a.metadata?.[C(e)];if(typeof t==`boolean`)return t;if(typeof t==`number`)return t!==0;if(typeof t==`string`){let e=t.trim().toLowerCase();return e===`true`||e===`1`||e===`yes`||e===`on`}return!1},ae=(e,t)=>s[e]??w(t),T=e=>Z(e).length>0,{bidValueMap:oe,nameValueMap:se}=(0,K.useMemo)(()=>G(i,e=>w(e).trim(),Y,pn,Z,X,fn),[i,a.metadata]),ce=(e,t=!1)=>{let n=Z(e);if(!n)return null;let r=ge(n,{bidValueMap:oe,nameValueMap:se,onMissingBid:`error`,allowCurlyTags:t});return!r.valid||!r.notation?(S.warn(`[FORGE] Could not convert attr_func for ${Y(e)||`unknown`}: ${r.error||`Unknown conversion error`}`),null):r.notation},E=async(e,t)=>{try{let r=await n.room.getMetadata(),i=(await n.party.getPlayers()).find(e=>e.id===a.createdUserId),o=await n.player.getId(),s=await n.player.getColor();await ue({notation:e,actionName:t,senderName:x,senderId:a.createdUserId||o||a.id,senderColor:i?.color||s||`#ffffff`},r)}catch(t){S.error(`Failed to send dice roll from CardLayoutRenderer`,e,t),S.log(e)}},le=async e=>{if(!e)return;let t;try{t=await n.room.getMetadata()}catch{t={}}let r=ce(e,t[m.EXTENSIONID+`/enabdice`]===!0);r&&await E(r,X(e)||Y(e)||`Roll`)},de=e=>a.metadata?.[C(e)],fe=(e,t)=>{let n=de(e),r=n&&typeof n==`object`&&!Array.isArray(n)?n:null,i=Q(t)?.resource;return{current:r?Number(r.current??i?.defaultCurrent??0):Number(i?.defaultCurrent??0),max:r?Number(r.max??i?.defaultMax??0):Number(i?.defaultMax??0)}},D=async(e,t)=>{await o({[C(e)]:t})},O=e=>{let t=Q(e)?.derived?.formula,n=typeof t==`string`&&t.trim().length>0?t.trim():Z(e);if(!n)return`-`;let r=ge(n,{bidValueMap:oe,nameValueMap:se,onMissingBid:`error`});if(!r.valid||!r.notation)return`-`;let i=r.notation.trim(),a=Number(i);if(!Number.isFinite(a))return i||`-`;let o=Number(Q(e)?.derived?.precision),s=Number.isFinite(o)?Math.max(0,Math.min(Math.trunc(o),8)):0,c=Q(e)?.derived?.displayMode,l=s>0?a.toFixed(s):String(a);return c===`percent`?`${l}%`:l},k=/(\d+)d(\d+)([kd][hl]\d+|!)?/gi,A=(e,t)=>{let n=Array.from(e.matchAll(k));if(n.length!==1)return null;let r=n[0],i=r[0]||``,a=r[1]||``,o=r[2]||``,s=r[3]||``,c=r.index;if(!i||!a||!o||typeof c!=`number`)return null;let l=Number(a);if(!Number.isFinite(l)||l!==1||s)return null;let u=`2d${o}${t===`advantage`?`kh1`:`kl1`}`;return`${e.slice(0,c)}${u}${e.slice(c+i.length)}`};(0,K.useEffect)(()=>()=>{Object.values(y.current).forEach(e=>{window.clearTimeout(e)})},[]);let j=e=>!!l[e],M=(e,t,n,r)=>{t&&f({draftKey:e,attribute:t,input:n,isRollable:r})},N=()=>{f(null)},pe=e=>{g(e)},P=()=>{g(null)};(0,K.useEffect)(()=>{if(!d&&!h)return;let e=e=>{e.key===`Escape`&&(f(null),g(null))};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[d,h]);let me=async e=>{if(!h)return;let t=e===`normal`?h.notation:A(h.notation,e);if(!t)return;let n=e===`normal`?``:e===`advantage`?` (Advantage)`:` (Disadvantage)`;await E(t,`${h.actionName}${n}`)},F=(e,t)=>{u(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},he=e=>{u(t=>{let{[e]:n,...r}=t;return r})},_e=(e,t)=>{let n=y.current[e];n&&window.clearTimeout(n),y.current[e]=window.setTimeout(()=>{b.current[e]=!0,F(e,t),delete y.current[e]},500)},I=e=>{let t=y.current[e];t&&(window.clearTimeout(t),delete y.current[e])},ve=e=>b.current[e]?(delete b.current[e],!0):!1,L=async(e,t)=>{await o({[C(e)]:t})},ye=async(e,t)=>{await o({[C(e)]:t})},be=e=>{let t=a.metadata?.[C(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``}}):[]},R=e=>{let t=a.metadata?.[C(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``,inUse:!!t.inUse}}):[]},xe=(e,t)=>{S.log(e,t)},z=e=>{e&&(e.style.height=`0px`,e.style.height=`${Math.max(e.scrollHeight,44)}px`)},B=(e,t=!1)=>{let n=[],r=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of r){let r=e[0],i=(e[1]||``).trim();if(!i)continue;let a=ge(t?i.replace(/(\d+d\d+(?:[kd][hl]\d+|!|\{[^{}]+\})?)\s+#[a-z0-9_]+/gi,`$1`):i,{bidValueMap:oe,nameValueMap:se,onMissingBid:`error`,allowCurlyTags:t});!a.valid||!a.notation||n.push({raw:r,notation:t?i:a.notation})}return n},V=async(e,t,n)=>{xe(`List metadata update`,{listType:n.listType,bid:e,reason:n.reason,entryId:n.entryId,field:n.field,entryCount:t.length,timestamp:Date.now()}),await o({[C(e)]:t})},Ce=t=>t===`dash`||t===`dashed`?(0,q.jsx)(Ct,{$theme:e}):t===`shadow`?(0,q.jsx)(wt,{$theme:e}):t===`ridge`?(0,q.jsx)(Tt,{$theme:e}):t===`zigzag`?(0,q.jsx)(Et,{$theme:e}):t===`pulse`?(0,q.jsx)(Dt,{$theme:e}):(0,q.jsx)(yt,{$theme:e}),H=t=>{let n=t.type,r=(()=>n===`derived-value`||n===`enum-value`||n===`resource`?`text-value`:n===`column-derived`?`column-value`:n)(),a=t.styles||{},o=$(i,a.attributeId),l=dn(a.textAlign??a.align,`center`),u=a.stretch===!0;if(r===`line-break`)return(0,q.jsx)(J,{$theme:e,$full:!0,children:Ce(a.styleDesign)},t.id);if(r===`line-spacer`)return(0,q.jsx)(vt,{$full:t.fullsize},t.id);if(r===`image`){let n=typeof a.imageUrl==`string`?a.imageUrl.trim():``,r=un(a.imageCols,1,2,t.fullsize?2:1),i=un(a.imageRows,1,6,1);return(0,q.jsx)(J,{$theme:e,$full:r===2,children:(0,q.jsx)(bt,{$theme:e,$heightPx:cn*i,children:n?(0,q.jsx)(xt,{src:n,alt:`Card component`,loading:`lazy`}):(0,q.jsx)(St,{$theme:e,children:`No image selected`})})},t.id)}if(r===`text`){let n=rn[a.fontSize||`md`],r=hn(o,a.labelMode)?gn(o,a.labelMode,a.labelIcon,18):`Title Header`,i=`text:${t.id}:${Y(o)||`none`}`;return(0,q.jsx)(J,{$theme:e,$full:t.fullsize,onContextMenu:o?e=>{e.preventDefault(),M(i,o,null,!1)}:void 0,children:(0,q.jsx)(nt,{$theme:e,$fontSize:n,$weight:700,$stretch:u,$align:l,children:r})},t.id)}if(r===`text-value`){let n=sn[a.fontSize||`md`],r=hn(o,a.labelMode),i=gn(o,a.labelMode,a.labelIcon,18),l=a.labelPosition===`right`?`right`:`left`,d=dn(a.textAlign??a.align,`center`),f=a.fontWeight===`bold`?700:400,p=a.fontStyle===`italic`?`italic`:`normal`,m=Y(o),h=pn(o),g=T(o),_=`text-value:${t.id}:${m||`none`}`,v=g&&j(_),y;if(h===`derived`)y=(0,q.jsx)(ut,{$theme:e,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:u,title:`Formula: ${Q(o)?.derived?.formula||Z(o)||`Derived formula`}`,onContextMenu:o?e=>{e.preventDefault(),M(_,o,null,!1)}:void 0,children:O(o)});else if(h===`enum`){let t=Array.isArray(Q(o)?.enum?.options)?(Q(o)?.enum?.options||[]).map(e=>String(e||``).trim()).filter(e=>e.length>0):[];y=(0,q.jsx)(ct,{$theme:e,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:u,value:t.includes(m?w(m).trim():``)?w(m).trim():t[0]||``,disabled:!m,onContextMenu:o?e=>{e.preventDefault(),M(_,o,null,!1)}:void 0,onChange:m?async e=>{await D(m,e.target.value)}:void 0,children:t.length===0?(0,q.jsx)(`option`,{value:``,children:`No options`}):t.map(e=>(0,q.jsx)(`option`,{value:e,children:e},e))})}else if(h===`resource`){let t=Q(o)?.resource,r=!!t?.showPips,i=m?fe(m,o):{current:0,max:0},a=Number(t?.pipCap??i.max??0),l=Number.isFinite(a)?Math.max(0,Math.min(Math.round(a),15)):0;if(r&&l>0)y=(0,q.jsx)(pt,{onContextMenu:o?e=>{e.preventDefault(),M(_,o,null,!1)}:void 0,children:Array.from({length:l}).map((t,n)=>(0,q.jsx)(mt,{$theme:e,$filled:n<Math.max(0,Math.min(i.current,l)),type:`button`,disabled:!m,onClick:m?async()=>{let e=Math.max(0,Math.min(i.current,l));await D(m,{current:n+1===e?n:n+1,max:i.max})}:void 0},`text-resource-pip-${n}`))});else if(r)y=(0,q.jsx)(lt,{$theme:e,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:u,children:`-`});else{let t=`${_}:current`,r=`${_}:max`;y=(0,q.jsxs)(dt,{children:[(0,q.jsx)(st,{$theme:e,$fontSize:n,$align:`center`,$weight:f,$fontStyle:p,$stretch:u,type:`text`,value:s[t]??String(i.current),onChange:e=>{let n=e.target.value;c(e=>({...e,[t]:n}))},onBlur:async e=>{if(!m)return;let n=Number(e.target.value);await D(m,{current:Number.isFinite(n)?n:i.current,max:i.max}),c(e=>{let{[t]:n,...r}=e;return r})},placeholder:`0`}),(0,q.jsx)(ft,{$theme:e,children:`/`}),(0,q.jsx)(st,{$theme:e,$fontSize:n,$align:`center`,$weight:f,$fontStyle:p,$stretch:u,type:`text`,value:s[r]??String(i.max),onChange:e=>{let t=e.target.value;c(e=>({...e,[r]:t}))},onBlur:async e=>{if(!m)return;let t=Number(e.target.value),n=Number.isFinite(t)?t:i.max;await D(m,{current:i.current,max:n}),c(e=>{let{[r]:t,...n}=e;return n})},placeholder:`0`})]})}}else y=(0,q.jsx)(st,{$theme:e,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:u,$isRollable:g,type:`text`,readOnly:g&&!v,value:m?ae(_,m):``,onChange:g&&!v?void 0:e=>{if(!m)return;let t=e.target.value;c(e=>({...e,[_]:t}))},onBlur:g&&!v?void 0:async e=>{if(!m)return;let t=e.target.value;await L(m,t),c(e=>{let{[_]:t,...n}=e;return n}),g&&he(_)},onClick:g?()=>{v||ve(_)||le(o)}:void 0,onContextMenu:o?e=>{e.preventDefault(),M(_,o,e.currentTarget,g)}:void 0,onTouchStart:g?e=>{v||_e(_,e.currentTarget)}:void 0,onTouchEnd:g?()=>{I(_)}:void 0,onTouchCancel:g?()=>{I(_)}:void 0,onKeyDown:e=>{if(g&&!v&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),le(o);return}(v||!g)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`});let b=r?(0,q.jsx)(ot,{$theme:e,$fontSize:n,$stretch:u,$weight:f,$fontStyle:p,children:i}):null;return(0,q.jsx)(it,{$full:t.fullsize,children:(0,q.jsxs)(at,{children:[l===`left`?b:null,y,l===`right`?b:null]})},t.id)}if(r===`text-checkbox`){let n=an[a.fontSize||`md`],r=t.fullsize?6:3,o=Math.max(1,Math.min(r,Number(a.checkboxCount||1))),s=[...vn(i,a.bidList)].slice(0,o);for(;s.length<o;)s.push(``);let c=$(i,s[0]||a.attributeId),l=hn(c,a.labelMode),d=gn(c,a.labelMode,a.labelIcon,16),f=a.inputType===`slider`,p=a.labelPosition===`right`?`right`:`left`,m=a.fontWeight===`bold`?700:400,h=a.fontStyle===`italic`?`italic`:`normal`,g=l?(0,q.jsx)(Qt,{$theme:e,$fontSize:n,$stretch:u,$weight:m,$fontStyle:h,children:d}):null;return(0,q.jsx)(J,{$theme:e,$full:t.fullsize,children:(0,q.jsxs)(Zt,{children:[p===`left`?g:null,(0,q.jsx)($t,{$fullWidth:!g,children:Array.from({length:o}).map((n,r)=>{let a=s[r]||``,o=a?ie(a):!1,c=a?$(i,a):null,l=`text-checkbox:${t.id}:${a||`index-${r}`}`;return f?(0,q.jsx)(tn,{type:`button`,$theme:e,$active:o,disabled:!a,onClick:a?()=>{ye(a,!o)}:void 0,onContextMenu:c?e=>{e.preventDefault(),M(l,c,null,!1)}:void 0,children:(0,q.jsx)(nn,{$theme:e,$active:o})},`slider-${r}`):(0,q.jsx)(en,{$theme:e,type:`checkbox`,disabled:!a,checked:o,onChange:a?e=>{ye(a,e.target.checked)}:void 0,onContextMenu:c?e=>{e.preventDefault(),M(l,c,null,!1)}:void 0},`checkbox-${r}`)})}),p===`right`?g:null]})},t.id)}if(r===`column-text`){let n=on[a.fontSize||`md`],r=_n(i,a.bidList),o=a.fontWeight===`bold`?700:400,s=a.fontStyle===`italic`?`italic`:`normal`;return r.length===0?null:(0,q.jsx)(J,{$theme:e,$full:t.fullsize,children:(0,q.jsx)(ht,{children:r.map(r=>{let c=$(i,r),l=a.labelMode||`name`,d=hn(c,l),f=gn(c,l,a.labelIcon,16);return d?(0,q.jsx)(gt,{children:(0,q.jsx)(tt,{$theme:e,$fontSize:n,$stretch:u,$align:`center`,$weight:o,$fontStyle:s,onContextMenu:c?e=>{e.preventDefault(),M(`column-text:${t.id}:${r}`,c,null,!1)}:void 0,children:f})},r):null})})},t.id)}if(r===`column-value`){let n=on[a.fontSize||`md`],r=_n(i,a.bidList),o=a.fontWeight===`bold`?700:400,l=a.fontStyle===`italic`?`italic`:`normal`;return r.length===0?null:(0,q.jsx)(J,{$theme:e,$full:t.fullsize,children:(0,q.jsx)(ht,{children:r.map(r=>{let a=$(i,r),d=pn(a),f=T(a),p=`column-value:${t.id}:${r}`,m=f&&j(p),h;if(d===`derived`)h=(0,q.jsx)(ut,{$theme:e,$fontSize:n,$align:`center`,$weight:o,$fontStyle:l,$stretch:u,title:`Formula: ${Q(a)?.derived?.formula||Z(a)||`Derived formula`}`,onContextMenu:a?e=>{e.preventDefault(),M(p,a,null,!1)}:void 0,children:O(a)});else if(d===`enum`){let t=Array.isArray(Q(a)?.enum?.options)?(Q(a)?.enum?.options||[]).map(e=>String(e||``).trim()).filter(e=>e.length>0):[],i=w(r).trim();h=(0,q.jsx)(ct,{$theme:e,$fontSize:n,$align:`center`,$weight:o,$fontStyle:l,$stretch:u,value:t.includes(i)?i:t[0]||``,onContextMenu:a?e=>{e.preventDefault(),M(p,a,null,!1)}:void 0,onChange:async e=>{await D(r,e.target.value)},children:t.length===0?(0,q.jsx)(`option`,{value:``,children:`No options`}):t.map(e=>(0,q.jsx)(`option`,{value:e,children:e},e))})}else if(d===`resource`){let t=Q(a)?.resource,i=!!t?.showPips,d=fe(r,a),f=Number(t?.pipCap??d.max??0),m=Number.isFinite(f)?Math.max(0,Math.min(Math.round(f),15)):0;if(i&&m>0)h=(0,q.jsx)(pt,{onContextMenu:a?e=>{e.preventDefault(),M(p,a,null,!1)}:void 0,children:Array.from({length:m}).map((t,n)=>(0,q.jsx)(mt,{$theme:e,$filled:n<Math.max(0,Math.min(d.current,m)),type:`button`,onClick:async()=>{let e=Math.max(0,Math.min(d.current,m));await D(r,{current:n+1===e?n:n+1,max:d.max})}},`column-resource-pip-${r}-${n}`))});else if(i)h=(0,q.jsx)(lt,{$theme:e,$fontSize:n,$align:`center`,$weight:o,$fontStyle:l,$stretch:u,children:`-`});else{let t=`${p}:current`,i=`${p}:max`;h=(0,q.jsxs)(dt,{children:[(0,q.jsx)(rt,{$theme:e,$fontSize:n,$align:`center`,value:s[t]??String(d.current),onChange:e=>{let n=e.target.value;c(e=>({...e,[t]:n}))},onBlur:async e=>{let n=Number(e.target.value);await D(r,{current:Number.isFinite(n)?n:d.current,max:d.max}),c(e=>{let{[t]:n,...r}=e;return r})}}),(0,q.jsx)(ft,{$theme:e,children:`/`}),(0,q.jsx)(rt,{$theme:e,$fontSize:n,$align:`center`,value:s[i]??String(d.max),onChange:e=>{let t=e.target.value;c(e=>({...e,[i]:t}))},onBlur:async e=>{let t=Number(e.target.value),n=Number.isFinite(t)?t:d.max;await D(r,{current:d.current,max:n}),c(e=>{let{[i]:t,...n}=e;return n})}})]})}}else h=(0,q.jsx)(rt,{$theme:e,$fontSize:n,$align:`center`,$isRollable:f,readOnly:f&&!m,value:ae(p,r),onChange:f&&!m?void 0:e=>{let t=e.target.value;c(e=>({...e,[p]:t}))},onBlur:f&&!m?void 0:async e=>{let t=e.target.value;await L(r,t),c(e=>{let{[p]:t,...n}=e;return n}),f&&he(p)},onClick:f?()=>{m||ve(p)||le(a)}:void 0,onContextMenu:a?e=>{e.preventDefault(),M(p,a,e.currentTarget,f)}:void 0,onTouchStart:f?e=>{m||_e(p,e.currentTarget)}:void 0,onTouchEnd:f?()=>{I(p)}:void 0,onTouchCancel:f?()=>{I(p)}:void 0,onKeyDown:e=>{if(f&&!m&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),le(a);return}(m||!f)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`});return(0,q.jsx)(_t,{children:h},r)})})},t.id)}if(r===`action-list`){let n=$(i,a.attributeId||a.bidList?.[0]),r=Y(n),o=yn(i,a.attributeId||a.bidList?.[0]),s=r?be(r):[];return(0,q.jsx)(J,{$theme:e,$full:t.fullsize,children:(0,q.jsxs)(Ot,{$theme:e,children:[(0,q.jsxs)(kt,{$theme:e,children:[(0,q.jsx)(At,{$theme:e,onContextMenu:n?e=>{e.preventDefault(),M(`action-list:${t.id}:${r||`none`}`,n,null,!1)}:void 0,children:o}),(0,q.jsx)(jt,{type:`button`,$theme:e,"aria-label":`Add Action`,onClick:async()=>{r&&await V(r,[...s,{id:crypto.randomUUID(),name:``,description:``}],{listType:`action`,reason:`add`})},children:(0,q.jsx)(We,{size:14})})]}),s.map((n,i)=>(0,q.jsxs)(Mt,{children:[(0,q.jsxs)(Jt,{children:[(0,q.jsx)(Yt,{children:(0,q.jsx)(Lt,{$theme:e,type:`text`,defaultValue:n.name,placeholder:`Action Name`,onBlur:async e=>{if(!r)return;let t=e.target.value;await V(r,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,q.jsx)(It,{type:`button`,$theme:e,"aria-label":`Delete Action`,onClick:async()=>{r&&await V(r,s.filter(e=>e.id!==n.id),{listType:`action`,reason:`delete`,entryId:n.id})},children:(0,q.jsx)(Se,{size:14})})]}),(()=>{let t=B(n.description,_);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Rt,{$theme:e,defaultValue:n.description,ref:z,placeholder:`Action Description`,onInput:e=>{z(e.currentTarget)},onBlur:async e=>{if(!r)return;let t=e.target.value;await V(r,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`description`})}}),t.length>0?(0,q.jsx)(zt,{children:t.map((t,r)=>(0,q.jsx)(Bt,{type:`button`,$theme:e,onClick:()=>{E(t.notation,n.name||`Action`)},onContextMenu:e=>{e.preventDefault(),pe({notation:t.notation,actionName:n.name||`Action`,title:n.name||`Action Roll`})},title:t.notation,children:t.notation},`${n.id}-action-inline-${r}`))}):null]})})()]},n.id||`${t.id}-action-${i}`))]})},t.id)}if(r===`item-list`){let n=$(i,a.attributeId||a.bidList?.[0]),r=Y(n),o=yn(i,a.attributeId||a.bidList?.[0]),s=r?R(r):[];return(0,q.jsx)(J,{$theme:e,$full:t.fullsize,children:(0,q.jsxs)(Ot,{$theme:e,children:[(0,q.jsxs)(kt,{$theme:e,children:[(0,q.jsx)(At,{$theme:e,onContextMenu:n?e=>{e.preventDefault(),M(`item-list:${t.id}:${r||`none`}`,n,null,!1)}:void 0,children:o}),(0,q.jsx)(jt,{type:`button`,$theme:e,"aria-label":`Add Item`,onClick:async()=>{r&&await V(r,[...s,{id:crypto.randomUUID(),name:``,description:``,inUse:!1}],{listType:`item`,reason:`add`})},children:(0,q.jsx)(We,{size:14})})]}),s.map((n,i)=>(0,q.jsxs)(Mt,{children:[(0,q.jsxs)(Nt,{children:[(0,q.jsx)(Pt,{children:(0,q.jsx)(Xt,{$theme:e,type:`checkbox`,defaultChecked:n.inUse,onBlur:async e=>{if(!r)return;let t=e.target.checked;await V(r,s.map(e=>e.id===n.id?{...e,inUse:t}:e),{listType:`item`,reason:`toggle-save`,entryId:n.id,field:`inUse`})}})}),(0,q.jsx)(Ft,{$theme:e,children:(0,q.jsx)(Lt,{$theme:e,type:`text`,defaultValue:n.name,placeholder:`Item Name`,onBlur:async e=>{if(!r)return;let t=e.target.value;await V(r,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,q.jsx)(It,{type:`button`,$theme:e,"aria-label":`Delete Item`,onClick:async()=>{r&&await V(r,s.filter(e=>e.id!==n.id),{listType:`item`,reason:`delete`,entryId:n.id})},children:(0,q.jsx)(Se,{size:14})})]}),(()=>{let t=B(n.description,_);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Rt,{$theme:e,defaultValue:n.description,ref:z,placeholder:`Item Description`,onInput:e=>{z(e.currentTarget)},onBlur:async e=>{if(!r)return;let t=e.target.value;await V(r,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`description`})}}),t.length>0?(0,q.jsx)(zt,{children:t.map((t,r)=>(0,q.jsx)(Bt,{type:`button`,$theme:e,onClick:()=>{E(t.notation,n.name||`Item`)},onContextMenu:e=>{e.preventDefault(),pe({notation:t.notation,actionName:n.name||`Item`,title:n.name||`Item Roll`})},title:t.notation,children:t.notation},`${n.id}-item-inline-${r}`))}):null]})})()]},n.id||`${t.id}-item-${i}`))]})},t.id)}return null};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Xe,{$theme:e,$backgroundUrl:t,children:(0,q.jsxs)(Ze,{children:[(0,q.jsx)(Qe,{children:(0,q.jsx)($e,{$theme:e,children:(0,q.jsx)(et,{$theme:e,value:te,onChange:e=>{ne(e.target.value)},onBlur:()=>{re()},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},"aria-label":`Unit Name`})})}),ee.map(e=>(0,q.jsx)(Qe,{children:e.items.map(e=>H(e))},`row-${e.row}`))]})}),d?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ht,{onClick:N}),(0,q.jsxs)(Ut,{$theme:e,onClick:e=>e.stopPropagation(),children:[(0,q.jsxs)(Gt,{children:[(0,q.jsx)(Wt,{$theme:e,children:X(d.attribute)||`Attribute`}),(0,q.jsxs)(Kt,{$theme:e,children:[`[`,Y(d.attribute),`]`]})]}),(0,q.jsxs)(Vt,{children:[d.isRollable?(0,q.jsx)(qt,{type:`button`,$theme:e,onClick:()=>{N(),F(d.draftKey,d.input)},children:`Edit value`}):null,(()=>{if(!d.isRollable)return null;let t=ce(d.attribute);if(!t)return null;let n=A(t,`advantage`),r=A(t,`disadvantage`);return!n||!r?null:(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(qt,{type:`button`,$theme:e,onClick:()=>{N(),E(n,`${X(d.attribute)||Y(d.attribute)||`Roll`} (Advantage)`)},children:`Roll with Advantage`}),(0,q.jsx)(qt,{type:`button`,$theme:e,onClick:()=>{N(),E(r,`${X(d.attribute)||Y(d.attribute)||`Roll`} (Disadvantage)`)},children:`Roll with Disadvantage`})]})})()]})]})]}):null,h?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ht,{onClick:P}),(0,q.jsxs)(Ut,{$theme:e,onClick:e=>e.stopPropagation(),children:[(0,q.jsxs)(Gt,{children:[(0,q.jsx)(Wt,{$theme:e,children:h.title}),(0,q.jsxs)(Kt,{$theme:e,children:[`[`,h.notation,`]`]})]}),(0,q.jsx)(Vt,{children:(()=>{let t=A(h.notation,`advantage`),n=A(h.notation,`disadvantage`);return!t||!n?null:(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(qt,{type:`button`,$theme:e,onClick:()=>{P(),me(`advantage`)},children:`Roll with Advantage`}),(0,q.jsx)(qt,{type:`button`,$theme:e,onClick:()=>{P(),me(`disadvantage`)},children:`Roll with Disadvantage`})]})})()})]})]}):null]})};var xn={SNAPSHOT_PUBLIC_ID:`${m.EXTENSIONID}/SnapshotPublicId`},Sn={primary:c.theme_primary,offset:c.theme_offset,background:c.theme_background,border:c.theme_border,background_url:c.background_url},Cn=s.div`
  height: 100vh;
  width: 100%;
  background-color: #00000081;
  color: ${e=>e.$theme.primary};
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 16px;
  box-sizing: border-box;
  overflow: hidden;
  backdrop-filter: blur(6px);
  background-image: ${e=>e.$theme.background_url?`linear-gradient(${r(e.$theme.background,.52)}, ${r(e.$theme.background,.52)}), url(${e.$theme.background_url})`:`none`};
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
`,wn=s.div`
  height: 100%;
  overflow: hidden;
  padding: 40px 4px 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
`,Tn=s.p`
  margin: 0;
  color: ${e=>e.$theme.primary};
  text-align: center;
  align-content: center;
  font-weight: 600;
  font-size: 24px;
`,En=s.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: min(calc(100% - 16px), 350px);
  z-index: 10;
`,Dn=s.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`,On=s.select`
  flex: 1;
  min-width: 0;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>r(e.$theme.background,.82)};
  color: ${e=>e.$theme.primary};
  padding: 0 6px;
  box-sizing: border-box;
  font-size: 12px;
`,kn=s.button`
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${e=>r(e.$theme.background,.82)};
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background: ${e=>r(e.$theme.offset,.5)};
  }
`,An=s.img`
  width: 28px;
  height: 28px;
  display: block;
`,jn=s.div`
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 6px;
  height: 90%;
  border-radius: 12px 12px 10px 10px;
  border: 4px solid ${e=>e.$theme.border};
  background: ${e=>r(e.$theme.background,.84)};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transform: ${e=>e.$open?`translateY(0)`:`translateY(calc(100% - 40px))`};
  transition: transform 0.22s ease;
  z-index: 20;
  overflow: visible;
`,Mn=s.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 52px;
  height: 52px;
  backdrop-filter: blur(8px);
  background: ${e=>r(e.$theme.background,.5)};
  border-radius: 50%;
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,Nn=s.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 4px solid ${e=>e.$theme.border};
  background: ${e=>r(e.$theme.background,.98)};
  color: ${e=>e.$theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 22;

  &:hover {
    background: ${e=>r(e.$theme.offset,.5)};
  }
`,Pn=s.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  padding: 42px 10px 10px;
  color: ${e=>r(e.$theme.primary,.9)};
`,Fn=s.div`
  flex: 1 1 80%;
  min-height: 0;
  border: 2px solid ${e=>r(e.$theme.border,.85)};
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>r(e.$theme.primary,.88)};
  font-size: 14px;
  font-weight: 600;
  overflow-y: auto;
  padding: 8px;
  box-sizing: border-box;
`,In=s.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Ln=s.div`
  width: 100%;
  border: 1px solid ${e=>r(e.$theme.border,.8)};
  border-radius: 8px;
  background: ${e=>r(e.$theme.background,.72)};
  padding: 6px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: center;
`,Rn=s.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,zn=s.div`
  color: ${e=>e.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,Bn=s.span`
  font-size: 12px;
  line-height: 1;
`,Vn=s.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Hn=s.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`,Un=s.span`
  margin-left: 6px;
  width: 18px;
  height: 18px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 6px;
  border: 1px solid ${e=>r(e.$theme.border,.85)};
  background: ${e=>r(e.$theme.offset,.35)};
  color: ${e=>e.$theme.primary};
`,Wn=s.span`
  color: ${e=>e.$color};
`,Gn=s.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,Kn=s.button`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>e.$variant===`import`?r(e.$theme.offset,.45):r(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`,qn=s.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Jn=s.input`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>r(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`,Yn=s.button`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>r(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${e=>r(e.$theme.offset,.5)};
  }
`,Xn=s.div`
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
`,Zn=s.div`
  display: inline-flex;
  justify-content: space-between;
  width: 40%;
  pointer-events: auto;
`,Qn=s.button`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>r(e.$theme.background,.9)};
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
    background: ${e=>r(e.$theme.offset,.5)};
  }

  &:disabled:hover {
    background: ${e=>r(e.$theme.background,.9)};
  }
`,$n=s(Qn)`
  background: ${e=>e.$active?r(e.$theme.offset,.45):r(e.$theme.background,.9)};

  &:disabled {
    background: ${e=>r(e.$theme.background,.9)};
  }
`,er=s.textarea`
  width: 100%;
  min-height: 220px;
  border-radius: 8px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>r(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 8px;
  box-sizing: border-box;
  resize: vertical;
  font-size: 12px;
`,tr=s.button`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 8px;
  background: ${e=>e.$variant===`primary`?r(e.$theme.offset,.5):r(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 6px 10px;
  cursor: pointer;
`,nr=s(tr)`
  margin-right: auto;
`,rr=s.div`
  margin-top: 8px;
  color: ${e=>r(e.$theme.offset,.95)};
  font-size: 12px;
`,ir=s.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${e=>r(e.$theme.primary,.92)};
  font-size: 12px;
  line-height: 1.45;
`,ar=s.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.$theme.primary};
`,or=s.ul`
  margin: 0;
  padding-left: 16px;
`,sr=s.code`
  display: block;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid ${e=>r(e.$theme.border,.7)};
  background: ${e=>r(e.$theme.background,.82)};
  color: ${e=>e.$theme.primary};
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
  white-space: pre-wrap;
`,cr=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,lr=s.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${e=>e.$theme.background};
  border: 3px solid ${e=>e.$theme.border};
  border-radius: 8px;
  padding: 25px;
  z-index: 10000;
  height: 84%;
  min-width: 340px;
  max-width: 560px;
  width: min(560px, calc(100vw - 32px));
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  overflow: scroll;
`,ur=s.h3`
  color: ${e=>e.$theme.primary};
  margin: 0 0 15px 0;
  font-size: 18px;
`,dr=s.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
`,fr=()=>{let e=new URLSearchParams(window.location.search).get(`unitid`);return e&&e.split(`,`)[0]?.trim()||null},pr=()=>{let e=new URLSearchParams(window.location.search).get(`pinned`);if(!e)return!1;let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`},mr=`POP_${m.CARDSID}`,hr=(e,t)=>{let n=new URLSearchParams;return n.set(`unitid`,e),t&&n.set(`pinned`,`true`),`/pages/forgecard.html?${n.toString()}`},gr=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},_r=e=>{if(e===!0)return!0;if(typeof e==`string`){let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`}return typeof e==`number`?e===1:!1};qe.createRoot(document.getElementById(`root`)).render((0,q.jsx)(K.StrictMode,{children:(0,q.jsx)(l,{children:(0,q.jsx)(()=>{let{t:e}=Le(),[t,r]=(0,K.useState)(()=>fr()),a=(0,K.useMemo)(()=>pr(),[]),[s,l]=(0,K.useState)({metadata:{},items:[]}),[u,_]=(0,K.useState)(null),[ee,x]=(0,K.useState)(null),[te,w]=(0,K.useState)(null),[ie,ae]=(0,K.useState)(null),[T,oe]=(0,K.useState)(!1),[se,ce]=(0,K.useState)(!1),[E,ue]=(0,K.useState)(!1),[de,fe]=(0,K.useState)(``),[D,O]=(0,K.useState)(``),[k,j]=(0,K.useState)(!1),[N,pe]=(0,K.useState)([]),[P,F]=(0,K.useState)([]),[he,ge]=(0,K.useState)(!1),[_e,I]=(0,K.useState)(!1),[ve,L]=(0,K.useState)(``),[be,R]=(0,K.useState)(null),[z,Se]=(0,K.useState)(!1),V=e=>{let t=e[b.ENABLE_CONSOLE_LOG];typeof t==`boolean`&&S.setEnabled(t)},Ce=(0,K.useMemo)(()=>ee||c.card_layout,[ee]),H=(0,K.useMemo)(()=>te||c.attributes,[te]),U=(0,K.useMemo)(()=>u||Sn,[u]),W=(0,K.useMemo)(()=>i(U.primary,U.offset,U.background,U.border,U.background_url),[U]);(0,K.useEffect)(()=>{let e=!1;return(async()=>{try{await ye()}catch(e){S.log(`Auth hydration failed in card iframe`,e)}finally{e||Se(!0)}})(),()=>{e=!0}},[]),(0,K.useEffect)(()=>{let e=!0,t=async t=>{let n=t[xn.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(_(null),x(null),w(null));return}let{data:r,error:i}=await o.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(i){e&&(_(null),x(null),w(null));return}let a=Array.isArray(r)?r[0]:r;if(!a||typeof a!=`object`){e&&(_(null),x(null),w(null));return}let s=a,c=gr(s.card_layout),l=gr(s.attributes);if(typeof s.theme_primary!=`string`||typeof s.theme_offset!=`string`||typeof s.theme_background!=`string`||typeof s.theme_border!=`string`||!Array.isArray(c)||!Array.isArray(l)){e&&(_(null),x(null),w(null));return}e&&(_({primary:s.theme_primary,offset:s.theme_offset,background:s.theme_background,border:s.theme_border,background_url:typeof s.background_url==`string`?s.background_url:``}),x(c),w(l))};(async()=>{let[r,i,a,o,s]=await Promise.all([n.scene.getMetadata(),n.scene.items.getItems(),n.room.getMetadata(),n.player.getId(),n.player.getRole()]);e&&(V(a),l({metadata:r,items:i}),await t(a),ae(o),oe(String(s||``).toUpperCase()===`GM`),ce(!0))})();let r=n.scene.onMetadataChange(t=>{e&&l(e=>({...e,metadata:t}))}),i=n.room.onMetadataChange(n=>{e&&(t(n),V(n))}),a=n.scene.items.onChange(t=>{e&&l(e=>({...e,items:t}))});return()=>{e=!1,r(),i(),a()}},[]);let Te=t=>{let n=t.metadata?.[p.UNIT_NAME];if(typeof n==`string`&&n.trim())return n;let r=t.text?.plainText;return typeof r==`string`&&r.trim()?r:typeof t.name==`string`&&t.name.trim()?t.name:e(`card.unknownUnit`)},Ee=(0,K.useMemo)(()=>s.items.filter(e=>_r(e.metadata?.[p.FABRICATED])).filter(e=>T||e.createdUserId===ie).filter(e=>e.id!==t).map(e=>({id:e.id,name:Te(e)})).sort((e,t)=>e.name.localeCompare(t.name)),[s.items,t,T,ie]),G=(0,K.useMemo)(()=>t&&s.items.find(e=>e.id===t)||null,[s.items,t]),De=async()=>t&&(await n.scene.items.getItems()).find(e=>e.id===t)||null,ke=async e=>{G&&(await n.scene.items.updateItems([G.id],t=>{let n={...t[0].metadata||{}};Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),t[0].metadata=n}),l(t=>({...t,items:t.items.map(t=>{if(t.id!==G.id)return t;let n={...t.metadata||{}};return Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),{...t,metadata:n}})})))},Ae=async e=>{if(!G)return;let[t,r]=await Promise.all([n.scene.getMetadata(),n.room.getMetadata()]),{currentHpBid:i,maxHpBid:a}=v(r,H),o=g(e,a,H,`max`),s=a===f.MAX_HP?o:g(e,f.MAX_HP,H,`max`),c=o??s,u={...e};if(c!==null){let e=d(i),t=d(a),n=h(H,i),r=h(H,a);u[e]=y(u[e],n,`current`,c,c),u[t]=y(u[t],r,`max`,c,c)}let _=[p.FABRICATED,p.INITIATIVE,p.ON_LIST,p.IN_PARTY];await n.scene.items.updateItems([G.id],e=>{let t=e[0].metadata,n={},r={};for(let[e,i]of Object.entries(t))e.startsWith(`${m.EXTENSIONID}/`)||(n[e]=i),_.includes(e)&&(r[e]=i);e[0].metadata={...n,...u,...r}}),l(e=>({...e,items:e.items.map(e=>{if(e.id!==G.id)return e;let t={},n={};for(let[r,i]of Object.entries(e.metadata||{}))r.startsWith(`${m.EXTENSIONID}/`)||(t[r]=i),_.includes(r)&&(n[r]=i);return{...e,metadata:{...t,...u,...n}}})}))},je=async()=>{pe(await ne())},Ne=e=>{let t=e.trim(),n=t?t[0].toUpperCase():`A`;return`hsl(${Math.max(0,Math.min(25,n.charCodeAt(0)-65))/26*360}, 70%, 65%)`},Fe=async e=>{let[t,n]=await Promise.all([me(e),Pe()?xe(e):Promise.resolve([])]);return[...n.map(e=>({...e,source:`remote-user`})),...t.map(e=>({...e,source:`remote-shared`}))]},Ie=(0,K.useMemo)(()=>{let e=D.trim().toLowerCase(),t={local:0,"remote-user":1,"remote-shared":2},n=(e,n)=>t[e.source]===t[n.source]?e.favorite===n.favorite?e.name.localeCompare(n.name):e.favorite?-1:1:t[e.source]-t[n.source],r=[...N].sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);if(!e)return r.filter(e=>e.favorite).map(e=>({...e,source:`local`}));let i=r.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),a=P.filter(e=>e.source===`remote-user`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),o=P.filter(e=>e.source===`remote-shared`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e));return[...i.map(e=>({...e,source:`local`})),...a,...o].sort(n)},[N,P,D]),We=async()=>{if(!t){await n.notification.show(e(`card.noUnitSelectedToPin`),`ERROR`);return}let r=await n.viewport.getWidth(),i=await n.viewport.getHeight(),o=i>800?700:i-100;if(!a){await n.popover.open({id:mr,url:hr(t,!0),height:400,width:350,anchorPosition:{top:50,left:r-70},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},transformOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},hidePaper:!0,disableClickAway:!0}),await n.popover.close(m.CARDSID);return}await n.popover.open({id:m.CARDSID,url:hr(t,!1),height:o,width:350,anchorPosition:{left:r/2,top:i/2},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`CENTER`},transformOrigin:{vertical:`CENTER`,horizontal:`CENTER`},hidePaper:!0,disableClickAway:!0}),await n.popover.close(mr)},qe=()=>{T&&j(e=>!e)},Je=async()=>{if(!T)return;let t=await De();if(!t){await n.notification.show(e(`card.noUnitSelectedToSave`),`ERROR`);return}z||(await ye(),Se(!0));try{let r=(await n.player.getName()).trim(),i=Pe()?await we(t.metadata,r,k):await le(t.metadata,r,k);await je();let a=Pe()?e(`card.collectionTargetOnline`):e(`card.collectionTargetLocal`);await n.notification.show(e(i===`created`?`card.unitSavedToTarget`:`card.unitUpdatedInTarget`,{target:a}))}catch(t){S.log(`Collection save failed`,t),await n.notification.show(e(`card.couldNotSaveToCollection`),`ERROR`)}},Ye=async()=>{if(!await De()){await n.notification.show(e(`card.noUnitSelectedToImportInto`),`ERROR`);return}R(null),L(``),ge(!0)},Xe=async()=>{let t=await De();if(!t){await n.notification.show(e(`card.noUnitSelectedToExport`),`ERROR`);return}try{let r=re(t.metadata),i=r[p.UNIT_NAME],a=typeof i==`string`?i.trim():``;if(!a){await n.notification.show(e(`card.unitMissingValidName`),`ERROR`);return}let o={name:a,author:(await n.player.getName()).trim()||e(`card.unknownAuthor`),metadata:r};await navigator.clipboard.writeText(JSON.stringify(o,null,2)),await n.notification.show(e(`card.unitDataCopied`))}catch(t){S.log(`Unit export failed`,t),await n.notification.show(e(`card.couldNotCopyUnitData`),`ERROR`)}},Ze=()=>{ge(!1),R(null),L(``)},Qe=t=>{let n=JSON.parse(t);if(!n||typeof n!=`object`||Array.isArray(n))throw Error(e(`card.importDataMustBeJsonObject`));let r=n,i=r.metadata&&typeof r.metadata==`object`?r.metadata:n;if(!i||typeof i!=`object`||Array.isArray(i))throw Error(e(`card.importDataMustIncludeMetadata`));let a=re(i),o=a[p.UNIT_NAME];if(!(typeof o==`string`&&o.trim()))throw Error(e(`card.importedMetadataMissingName`));return a},J=async()=>{if(!await De()){R(e(`card.noUnitSelectedToImportInto`));return}let t=ve.trim();if(!t){R(e(`card.pasteJsonBeforeImport`));return}try{await Ae(Qe(t)),j(!1),Ze(),await n.notification.show(e(`card.unitDataImported`))}catch(t){R(t instanceof Error?t.message:e(`card.importFailed`))}},$e=(t,n)=>{let r=(t||``).trim().toLowerCase();if(r===`numb`||r===`derived`)return 0;if(r===`bool`)return!1;if(r===`enum`)return``;if(r===`resource`)return{current:0,max:0};if(r===`list`){let t=n?.firstNumericBid?`@${n.firstNumericBid}`:`@BID`;return[{id:`example-list-001`,name:e(`card.aiExampleListEntryName`),description:e(`card.aiExampleListEntryDescription`,{bidRef:t})}]}return``},et=()=>{let t=H.find(e=>e.attr_type===`numb`)?.attr_bid,n=H.find(e=>e.attr_type===`list`)||null,r=H.map(e=>({bid:e.attr_bid,name:e.attr_name,type:e.attr_type,metadataKey:`${m.EXTENSIONID}/${e.attr_bid}`})),i={[p.UNIT_NAME]:e(`card.aiExampleUnitName`)};for(let e of H)i[`${m.EXTENSIONID}/${e.attr_bid}`]=$e(e.attr_type,{firstNumericBid:t});let a={id:`example-list-001`,name:e(`card.aiExampleActionName`),description:e(`card.aiExampleActionDescription`,{bidRef:t?`@${t}`:`@BID`})},o={id:`example-item-001`,name:e(`card.aiExampleItemName`),description:e(`card.aiExampleItemDescription`),inUse:!1},s=JSON.stringify(r,null,2),c=JSON.stringify(i,null,2),l=JSON.stringify(a,null,2),u=JSON.stringify(o,null,2),d=n?`${m.EXTENSIONID}/${n.attr_bid}`:`${m.EXTENSIONID}/<LIST_BID>`;return[e(`card.aiPromptIntro`),``,e(`card.aiPromptRequirementsHeader`),e(`card.aiRequirement1`),e(`card.aiRequirement2`),e(`card.aiRequirement3`),e(`card.aiRequirement4`),e(`card.aiRequirement5`),e(`card.aiRequirement6`),``,e(`card.aiExtensionIdLabel`,{value:m.EXTENSIONID}),e(`card.aiUnitNameMetadataLabel`,{value:p.UNIT_NAME}),``,e(`card.aiAttributeDictionaryHeader`),s,``,e(`card.aiListExamplesHeader`),e(`card.aiStandardListEntryHeader`),l,``,e(`card.aiItemListEntryHeader`),u,``,e(`card.aiListKeyHint`,{key:d}),``,e(`card.aiOutputShapeHeader`),c,``,e(`card.aiFinalInstruction`)].join(`
`)},tt=async()=>{try{let t=et();await navigator.clipboard.writeText(t),await n.notification.show(e(`card.aiTemplateCopied`))}catch(t){S.log(`AI template copy failed`,t),await n.notification.show(e(`card.aiTemplateCopyFailed`),`ERROR`)}},nt=()=>{let t=de.trim();if(O(t),!t){F([]);return}(async()=>{z||(await ye(),Se(!0)),F(await Fe(t))})().catch(async t=>{S.log(`Supabase collection search failed`,t),F([]),await n.notification.show(e(`card.onlineSearchFailed`),`ERROR`)})},rt=async t=>{if(!G){await n.notification.show(e(`card.noUnitSelectedToImportInto`),`ERROR`);return}try{await Ae(t.metadata),j(!1),await n.notification.show(t.source===`local`?e(`card.recordImportedLocal`,{name:t.name}):e(`card.recordImportedOnline`,{name:t.name}))}catch(t){S.log(`Collection record import failed`,t),await n.notification.show(e(`card.recordImportFailed`),`ERROR`)}},it=async t=>{try{if(t.source===`remote-user`)await Oe(t.id),F(e=>e.filter(e=>!(e.source===`remote-user`&&e.id===t.id)));else if(t.source===`local`)await Me(t.id),pe(e=>e.filter(e=>e.id!==t.id));else return;await n.notification.show(e(`card.recordDeleted`,{name:t.name}))}catch(t){S.log(`Collection record delete failed`,t),await n.notification.show(e(`card.recordDeleteFailed`),`ERROR`)}};return(0,K.useEffect)(()=>{E&&je().catch(e=>{S.log(`Failed to load collection records`,e)})},[E]),(0,K.useEffect)(()=>{E&&(O(``),fe(``),F([]))},[E]),(0,q.jsxs)(Cn,{$theme:U,children:[(0,q.jsxs)(wn,{children:[(0,q.jsx)(En,{children:(0,q.jsxs)(Dn,{children:[(0,q.jsxs)(On,{$theme:U,"aria-label":e(`card.chooseUnitAria`),value:``,onChange:e=>{let t=e.target.value;t&&r(t)},children:[(0,q.jsx)(`option`,{value:``,children:e(`card.chooseUnitOption`)}),Ee.map(e=>(0,q.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,q.jsx)(kn,{type:`button`,$theme:U,"aria-label":e(`card.closeCardAria`),onClick:async()=>{await n.popover.close(a?mr:m.CARDSID)},children:(0,q.jsx)(An,{src:`/close.svg`,alt:``,"aria-hidden":`true`})})]})}),se?t?G?(0,q.jsx)(bn,{systemTheme:U,backgroundUrl:U.background_url,cardLayout:Ce,attributes:H,unitItem:G,onUpdateMetadata:ke}):(0,q.jsx)(Tn,{$theme:U,children:e(`card.unitNotFound`)}):(0,q.jsx)(Tn,{$theme:U,children:e(`card.noUnitId`)}):(0,q.jsx)(Tn,{$theme:U,children:e(`card.loading`)})]}),(0,q.jsxs)(jn,{$theme:U,$open:E,children:[(0,q.jsxs)(Xn,{children:[(0,q.jsxs)(Zn,{children:[(0,q.jsx)(Qn,{type:`button`,$theme:U,"aria-label":e(`card.pinAria`),onClick:()=>{We()},children:(0,q.jsx)(B,{theme:W,text:e(`card.pinTooltip`),children:(0,q.jsx)(Ue,{size:16})})}),(0,q.jsx)($n,{type:`button`,$theme:U,$active:k,"aria-label":e(`card.favoriteAria`),disabled:!T,onClick:qe,children:(0,q.jsx)(B,{theme:W,text:e(`card.favoriteTooltip`),children:(0,q.jsx)(A,{size:16,fill:k?`currentColor`:`none`})})}),(0,q.jsx)(Qn,{type:`button`,$theme:U,"aria-label":e(`card.collectionSaveAria`),disabled:!T,onClick:Je,children:(0,q.jsx)(B,{theme:W,text:e(`card.collectionSaveTooltip`),children:(0,q.jsx)(Re,{size:16})})})]}),(0,q.jsxs)(Zn,{children:[(0,q.jsx)(Qn,{type:`button`,$theme:U,"aria-label":e(`card.importAria`),onClick:Ye,children:(0,q.jsx)(B,{theme:W,text:e(`card.importTooltip`),children:(0,q.jsx)(Ve,{size:16})})}),(0,q.jsx)(Qn,{type:`button`,$theme:U,"aria-label":e(`card.exportAria`),onClick:Xe,children:(0,q.jsx)(B,{theme:W,text:e(`card.exportTooltip`),children:(0,q.jsx)(C,{size:16})})}),(0,q.jsx)(Qn,{type:`button`,$theme:U,"aria-label":e(`card.helpAria`),onClick:()=>{I(!0)},children:(0,q.jsx)(B,{theme:W,text:e(`card.helpTooltip`),children:(0,q.jsx)(ze,{size:16})})})]})]}),(0,q.jsx)(Mn,{$theme:U,children:(0,q.jsx)(B,{theme:W,text:e(E?`card.closeTrayTooltip`:`card.openTrayTooltip`),children:(0,q.jsx)(Nn,{type:`button`,$theme:U,"aria-label":e(E?`card.closeTrayAria`:`card.openTrayAria`),onClick:()=>{ue(e=>!e)},children:(0,q.jsx)(M,{size:22})})})}),(0,q.jsx)(Pn,{$theme:U,children:E?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Fn,{$theme:U,children:(0,q.jsx)(In,{children:Ie.length===0?(0,q.jsx)(Tn,{$theme:U,children:e(`card.noCollectionRecords`)}):Ie.map(t=>(0,q.jsxs)(Ln,{$theme:U,children:[(0,q.jsxs)(Rn,{children:[(0,q.jsxs)(zn,{$theme:U,children:[t.favorite?(0,q.jsx)(Bn,{children:`❤`}):null,(0,q.jsx)(Vn,{children:t.name})]}),(0,q.jsxs)(Hn,{children:[(0,q.jsx)(`span`,{children:`→`}),(0,q.jsx)(Wn,{$color:Ne(t.author),children:t.author}),(0,q.jsxs)(Un,{$theme:U,title:t.source===`local`?e(`card.localSource`):t.source===`remote-user`?e(`card.myCloudSource`):e(`card.sharedSource`),children:[t.source===`local`?(0,q.jsx)(He,{size:11}):null,t.source===`remote-user`?(0,q.jsx)(Be,{size:11}):null,t.source===`remote-shared`?(0,q.jsx)(Ke,{size:11}):null]})]})]}),(0,q.jsxs)(Gn,{children:[(0,q.jsx)(Kn,{type:`button`,$theme:U,$variant:`import`,onClick:()=>{rt(t)},children:e(`card.importAction`)}),t.source===`remote-shared`?null:(0,q.jsx)(Kn,{type:`button`,$theme:U,$variant:`delete`,onClick:()=>{it(t)},children:e(`card.deleteAction`)})]})]},`${t.source}:${t.id}`))})}),(0,q.jsxs)(qn,{children:[(0,q.jsx)(Jn,{$theme:U,type:`text`,value:de,placeholder:e(`card.searchPlaceholder`),onChange:e=>{fe(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),nt())}}),(0,q.jsx)(Yn,{type:`button`,$theme:U,"aria-label":e(`card.searchAria`),onClick:nt,children:(0,q.jsx)(Ge,{size:16})})]})]}):null})]}),he?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(cr,{onClick:Ze}),(0,q.jsxs)(lr,{$theme:U,onClick:e=>{e.stopPropagation()},children:[(0,q.jsx)(ur,{$theme:U,children:e(`card.importUnitDataTitle`)}),(0,q.jsx)(er,{$theme:U,value:ve,placeholder:e(`card.importPlaceholder`),onChange:e=>{L(e.target.value),be&&R(null)}}),be?(0,q.jsx)(rr,{$theme:U,children:be}):null,(0,q.jsxs)(dr,{children:[(0,q.jsx)(nr,{type:`button`,$theme:U,onClick:()=>{tt()},children:e(`card.aiTemplate`)}),(0,q.jsx)(tr,{type:`button`,$theme:U,onClick:Ze,children:e(`card.cancel`)}),(0,q.jsx)(tr,{type:`button`,$theme:U,$variant:`primary`,onClick:J,children:e(`card.importAction`)})]})]})]}):null,_e?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(cr,{onClick:()=>{I(!1)}}),(0,q.jsxs)(lr,{$theme:U,onClick:e=>{e.stopPropagation()},children:[(0,q.jsx)(ur,{$theme:U,children:e(`card.helpTitle`)}),(0,q.jsxs)(ir,{$theme:U,children:[(0,q.jsx)(ar,{$theme:U,children:e(`card.helpRollableValuesTitle`)}),(0,q.jsxs)(or,{children:[(0,q.jsx)(`li`,{children:e(`card.helpRollableValuesItem1`)}),(0,q.jsx)(`li`,{children:e(`card.helpRollableValuesItem2`)}),(0,q.jsx)(`li`,{children:e(`card.helpRollableValuesItem3`)})]}),(0,q.jsx)(ar,{$theme:U,children:e(`card.helpDiceChipsTitle`)}),(0,q.jsxs)(or,{children:[(0,q.jsx)(`li`,{children:e(`card.helpDiceChipsItem1`)}),(0,q.jsx)(`li`,{children:e(`card.helpDiceChipsItem2`)})]}),(0,q.jsx)(sr,{$theme:U,children:e(`card.helpMeleeAttackExample`)}),(0,q.jsx)(ar,{$theme:U,children:e(`card.helpUsingAttributesTitle`)}),(0,q.jsxs)(or,{children:[(0,q.jsx)(`li`,{children:e(`card.helpUsingAttributesItem1`)}),(0,q.jsx)(`li`,{children:e(`card.helpUsingAttributesItem2`)})]}),(0,q.jsx)(sr,{$theme:U,children:e(`card.helpDamageBidExample`)}),(0,q.jsx)(sr,{$theme:U,children:e(`card.helpDamageNameExample`)})]}),(0,q.jsx)(dr,{children:(0,q.jsx)(tr,{type:`button`,$theme:U,$variant:`primary`,onClick:()=>{I(!1)},children:e(`card.close`)})})]})]}):null]})},{})})}));