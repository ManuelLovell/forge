import{P as e,_ as t,b as n,j as r,k as i,o as a,s as o,t as s,v as c,w as l,y as u}from"./defaultgamesystem-CLGH9eTD.js";import{_ as d,a as f,g as p,l as m,m as h,n as g,o as _,p as v,r as y,s as ee,t as te,u as b}from"./hpAttributeMapping-CzMfhEfJ.js";import{$ as ne,A as x,B as re,C as ie,D as ae,Dt as S,E as C,F as w,G as oe,H as se,I as ce,J as T,K as E,L as le,M as D,N as O,O as ue,P as de,Q as k,R as A,T as fe,Tt as pe,U as me,V as j,W as M,X as N,Y as P,Z as he,_t as ge,a as _e,at as F,ct as ve,dt as I,et as L,ft as R,g as ye,gt as be,ht as xe,i as Se,it as Ce,j as z,k as B,lt as V,mt as H,nt as we,o as Te,ot as Ee,p as De,pt as U,q as Oe,rt as ke,st as Ae,t as je,tt as Me,ut as Ne,vt as Pe,w as Fe,x as Ie,yt as W,z as Le}from"./unitCollectionRemote-DlJjBLux.js";import{t as Re}from"./Translation-BIczx6Hy.js";/* empty css               */var ze=W(`book-marked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),Be=W(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),Ve=W(`cloudy`,[[`path`,{d:`M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z`,key:`44yre2`}],[`path`,{d:`M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61`,key:`leugyv`}]]),He=W(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),Ue=W(`hard-drive`,[[`line`,{x1:`22`,x2:`2`,y1:`12`,y2:`12`,key:`1y58io`}],[`path`,{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`oot6mr`}],[`line`,{x1:`6`,x2:`6.01`,y1:`16`,y2:`16`,key:`sgf278`}],[`line`,{x1:`10`,x2:`10.01`,y1:`16`,y2:`16`,key:`1l4acy`}]]),We=W(`pin`,[[`path`,{d:`M12 17v5`,key:`bb1du9`}],[`path`,{d:`M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z`,key:`1nkz8b`}]]),Ge=W(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),Ke=W(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),qe=W(`server`,[[`rect`,{width:`20`,height:`8`,x:`2`,y:`2`,rx:`2`,ry:`2`,key:`ngkwjq`}],[`rect`,{width:`20`,height:`8`,x:`2`,y:`14`,rx:`2`,ry:`2`,key:`iecqi9`}],[`line`,{x1:`6`,x2:`6.01`,y1:`6`,y2:`6`,key:`16zg32`}],[`line`,{x1:`6`,x2:`6.01`,y1:`18`,y2:`18`,key:`nzw8ys`}]]),Je=e(i(),1),G=e(r(),1);const Ye=e=>{let t=[...Array.isArray(e)?e:[]].sort((e,t)=>e.row===t.row?e.col-t.col:e.row-t.row),n=[];return t.forEach(e=>{let t=n[n.length-1];if(!t||t.row!==e.row){n.push({row:e.row,items:[e]});return}t.items.push(e)}),{sorted:t,rows:n}};var K=n(),Xe=e=>`
    0 1px 1px ${c(e.background,.95)},
    0 0 2px ${c(e.background,.85)}
  `,Ze=o.div`
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
`,Qe=o.div`
  position: relative;
  z-index: 1;
`,$e=o.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`,q=o.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`,et=o(q)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  height: calc(2 * 1.1em);
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100% !important;
`,tt=o.input`
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
`,nt=o(o.div`
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
`,rt=o.div`
  color: ${e=>e.$theme.primary};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  text-align: ${e=>e.$align||`left`};
`,it=o.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?c(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?c(e.$theme.offset,.5):c(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>c(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?Xe(e.$theme):`none`};
  box-sizing: border-box;
  font-size: ${e=>e.$fontSize};
  text-align: ${e=>e.$align||`left`};
  cursor: ${e=>e.$isRollable?`pointer`:`text`};

  &:focus {
    outline: none;
    border-color: ${e=>e.$theme.offset};
  }

  &::placeholder {
    color: ${e=>c(e.$theme.primary,.65)};
  }
`,at=o.div`
  width: ${e=>e.$full?`100%`:`170px`};
  height: 40px;
  box-sizing: border-box;
`,ot=o.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`,st=o.span`
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
`,ct=o.input`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isRollable?c(e.$theme.offset,.8):e.$theme.border};
  background: ${e=>e.$isRollable?c(e.$theme.offset,.5):c(e.$theme.background,.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${e=>c(e.$theme.primary,.9)};
  text-shadow: ${e=>e.$isRollable?Xe(e.$theme):`none`};
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
  }

  &::placeholder {
    color: ${e=>c(e.$theme.primary,.65)};
  }
`,lt=o.select`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.78)};
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
`,ut=o.div`
  width: 100%;
  min-height: 28px;
  border-radius: 4px;
  border: 1px dashed ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.52)};
  color: ${e=>c(e.$theme.primary,.92)};
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
`,dt=o(ut)`
  border-style: solid;
  background: ${e=>c(e.$theme.primary,.75)};
  color: ${e=>c(e.$theme.offset,.96)};
  text-shadow: ${e=>`1px 1px 0 ${c(e.$theme.background,.95)}`};
  font-weight: 700;
  font-style: italic;
`,ft=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
`,pt=o.span`
  color: ${e=>c(e.$theme.primary,.92)};
  flex-shrink: 0;
`,mt=o.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
`,ht=o.button`
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
`,gt=o.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,_t=o.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,vt=o.div`
  flex: 1;
  min-width: 0;
`,yt=o.div`
  width: ${e=>e.$full?`100%`:`170px`};
  min-height: 18px;
`,bt=o.div`
  width: 100%;
  height: 5px;
  background: ${e=>`linear-gradient(10deg, ${e.$theme.border||`white`}, rgba(255,255,255,0))`};
`,xt=o.div`
  width: 100%;
  height: ${e=>`${e.$heightPx}px`};
  border-radius: 8px;
  border: 1px solid ${e=>c(e.$theme.border,.9)};
  background: ${e=>c(e.$theme.background,.42)};
  overflow: hidden;
  box-sizing: border-box;
`,St=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,Ct=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  color: ${e=>c(e.$theme.offset,.95)};
  padding: 6px;
  box-sizing: border-box;
`,wt=o.div`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${e=>e.$theme.border||`rgba(255,255,255,0.5)`};
`,Tt=o.div`
  width: 100%;
  height: 10px;
  background: ${e=>`linear-gradient(to bottom, ${e.$theme.border||`rgba(255,255,255,0.2)`}, transparent)`};
`,Et=o.div`
  width: 100%;
  height: 2px;
  background: ${e=>e.$theme.border||`#222`};
  box-shadow: ${e=>`inset 0 1px 0 ${e.$theme.border||`#444`}, 0 1px 0 #000`};
`,Dt=o.div`
  width: 100%;
  height: 6px;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: ${e=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6' preserveAspectRatio='none'%3E%3Cpolyline points='0,6 6,0 12,6 18,0 24,6' fill='none' stroke='${encodeURIComponent(e.$theme.border||`#ffffff`)}' stroke-width='1.5'/%3E%3C/svg%3E")`};
`,Ot=o.div`
  width: 100%;
  height: 4px;
  background: ${e=>e.$theme.border||`white`};
  animation: flicker 1.2s infinite alternate;

  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 1; }
  }
`,kt=o.div`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`,At=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${e=>c(e.$theme.border,.85)};
  padding-bottom: 4px;
  margin-bottom: 4px;
`,jt=o.div`
  color: ${e=>e.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,Mt=o.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Nt=o.div`
  margin-bottom: 8px;
`,Pt=o.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`,Ft=o.div`
  width: 20px;
  display: flex;
  justify-content: center;
`,It=o.div`
  flex: 1;
  text-align: center;
  color: ${e=>e.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`,Lt=o.button`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${e=>e.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,Rt=o.input`
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
`,zt=o.textarea`
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
`,Bt=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
`,Vt=o.button`
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
`,Ht=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ut=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 9999;
`,Wt=o.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(420px, calc(100vw - 24px));
  border-radius: 10px;
  border: 2px solid ${e=>c(e.$theme.border,.9)};
  background: ${e=>c(e.$theme.background,.95)};
  padding: 14px;
  box-sizing: border-box;
  z-index: 10000;
`,Gt=o.h3`
  margin: 0 0 12px;
  color: ${e=>c(e.$theme.primary,.98)};
  font-size: 16px;
`,Kt=o.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
`,qt=o.span`
  color: ${e=>c(e.$theme.offset,.95)};
  font-size: 13px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
`,Jt=o.button`
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${e=>c(e.$theme.border,.9)};
  background: ${e=>c(e.$theme.background,.82)};
  color: ${e=>c(e.$theme.primary,.95)};
  padding: 8px 10px;
  box-sizing: border-box;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${e=>c(e.$theme.offset,.38)};
  }
`,Yt=o.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`,Xt=o.div`
  flex: 1;
`,Zt=o.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  cursor: pointer;
  background: ${e=>c(e.$theme.background,.55)};
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
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,Qt=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  gap: 8px;
`,$t=o.span`
  color: ${e=>e.$theme.offset||s.theme_offset};
  font-size: ${e=>e.$fontSize};
  font-weight: ${e=>e.$weight};
  font-style: ${e=>e.$fontStyle};
  letter-spacing: ${e=>e.$stretch?`0.08em`:`normal`};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,en=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: space-evenly;
  width: ${e=>e.$fullWidth?`100%`:`auto`};
`,tn=o.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.55)};
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
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`,nn=o.button`
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
`,rn=o.div`
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
`,an={sm:`14px`,md:`16px`,lg:`18px`},on={sm:`14px`,md:`16px`,lg:`18px`},sn={sm:`14px`,md:`16px`,lg:`18px`},cn={sm:`14px`,md:`16px`,lg:`18px`},ln=40,un={anchor:Pe,aperture:ge,award:be,"battery-charging":H,book:R,calendar:Ne,clock:Ae,"cloud-lightning":Ee,compass:Ce,"dollar-sign":we,feather:k,eye:L,heart:T,moon:E,music:oe,shield:se,star:A,sun:le,target:de,users:z,wind:B,zap:ae,drama:Me,carrot:V,bone:U,sword:ce,swords:w,axe:xe,"bow-arrow":I,coins:F,wand:x,flower:he,skull:j,castle:ve,cross:ke,"test-tube-diagonal":O,squirrel:Le,snowflake:re,shell:me,pickaxe:M,"heart-plus":P,"heart-crack":N,fan:ne},dn=(e,t,n,r)=>{let i=typeof e==`number`?e:typeof e==`string`?Number(e):NaN;if(!Number.isFinite(i))return r;let a=Math.trunc(i);return Math.max(t,Math.min(n,a))},fn=(e,t=`center`)=>{if(typeof e!=`string`)return t;let n=e.trim().toLowerCase();return n===`left`||n===`center`||n===`right`?n:t},J=e=>String(e?.attr_bid??e?.bid??``).trim(),pn=e=>String(e?.attr_abbr??e?.abbr??``).trim(),Y=e=>String(e?.attr_name??e?.name??``).trim(),mn=e=>String(e?.attr_type??e?.type??``).trim().toLowerCase(),X=e=>{let t=e?.attr_func??e?.func??``;return typeof t==`string`?t.trim():``},Z=e=>e?.attr_meta??e?.meta??{},Q=(e,t)=>t&&e.find(e=>{let n=e,r=J(n)===t,i=String(n.id??``)===String(t);return r||i})||null,hn=(e,t)=>e?t===`abbr`?pn(e):t===`name`||!t||t===`text`?Y(e):``:``,gn=(e,t)=>t===`icon`?!0:hn(e,t).length>0,_n=(e,t,n,r=16)=>t===`icon`?(0,K.jsx)(un[String(n||``).trim().toLowerCase()]||A,{size:r,"aria-hidden":`true`}):hn(e,t),vn=(e,t)=>Array.isArray(t)?t.filter(t=>!!Q(e,t)):[],yn=(e,t)=>vn(e,t).filter(t=>mn(Q(e,t))===`bool`),bn=(e,t)=>{let n=Q(e,t);return!n||mn(n)!==`list`?`List Attribute`:Y(n)};const xn=({systemTheme:e,backgroundUrl:t,cardLayout:n,attributes:r,unitItem:i,onUpdateMetadata:a})=>{let[o,s]=(0,G.useState)({}),[c,u]=(0,G.useState)({}),[f,p]=(0,G.useState)(null),[m,g]=(0,G.useState)(null),[_,v]=(0,G.useState)(!1),y=(0,G.useRef)({}),te=(0,G.useRef)({}),{rows:ne}=(0,G.useMemo)(()=>Ye(n),[n]),x=(0,G.useMemo)(()=>{let e=i.metadata?.[h.UNIT_NAME];if(typeof e==`string`&&e.trim())return e;let t=i.text?.plainText;return typeof t==`string`&&t.trim()?t:typeof i.name==`string`&&i.name.trim()?i.name:`Unknown`},[i]),[re,ie]=(0,G.useState)(x);(0,G.useEffect)(()=>{ie(x)},[x]),(0,G.useEffect)(()=>{let e=!0;return(async()=>{try{let t=await l.room.getMetadata();e&&v(t[d.EXTENSIONID+`/enabdice`]===!0)}catch{e&&v(!1)}})(),()=>{e=!1}},[]);let ae=async()=>{let e=re.trim(),t=x.trim()||`Unknown`,n=e||t;ie(n),n!==x&&await a({[h.UNIT_NAME]:n})},C=e=>`${d.EXTENSIONID}/${e}`,w=e=>{let t=i.metadata?.[C(e)];return t==null?``:typeof t==`string`?t:typeof t==`number`||typeof t==`boolean`?String(t):``},oe=e=>{let t=i.metadata?.[C(e)];if(typeof t==`boolean`)return t;if(typeof t==`number`)return t!==0;if(typeof t==`string`){let e=t.trim().toLowerCase();return e===`true`||e===`1`||e===`yes`||e===`on`}return!1},se=(e,t)=>o[e]??w(t),ce=e=>X(e).length>0,{bidValueMap:T,nameValueMap:E}=(0,G.useMemo)(()=>ee(r,e=>w(e).trim(),J,mn,X,Y,pn),[r,i.metadata]),le=(e,t=!1)=>{let n=X(e);if(!n)return null;let r=b(n,{bidValueMap:T,nameValueMap:E,onMissingBid:`error`,allowCurlyTags:t});return!r.valid||!r.notation?(S.warn(`[FORGE] Could not convert attr_func for ${J(e)||`unknown`}: ${r.error||`Unknown conversion error`}`),null):r.notation},D=async(e,t)=>{try{let n=await l.room.getMetadata(),r=(await l.party.getPlayers()).find(e=>e.id===i.createdUserId),a=await l.player.getId(),o=await l.player.getColor();await pe({notation:e,actionName:t,senderName:x,senderId:i.createdUserId||a||i.id,senderColor:r?.color||o||`#ffffff`},n)}catch(t){S.error(`Failed to send dice roll from CardLayoutRenderer`,e,t),S.log(e)}},O=async e=>{if(!e)return;let t;try{t=await l.room.getMetadata()}catch{t={}}let n=le(e,t[d.EXTENSIONID+`/enabdice`]===!0);n&&await D(n,Y(e)||J(e)||`Roll`)},de=e=>i.metadata?.[C(e)],k=(e,t)=>{let n=de(e),r=n&&typeof n==`object`&&!Array.isArray(n)?n:null,i=Z(t)?.resource;return{current:r?Number(r.current??i?.defaultCurrent??0):Number(i?.defaultCurrent??0),max:r?Number(r.max??i?.defaultMax??0):Number(i?.defaultMax??0)}},A=async(e,t)=>{await a({[C(e)]:t})},fe=e=>{let t=Z(e)?.derived?.formula,n=typeof t==`string`&&t.trim().length>0?t.trim():X(e);if(!n)return`-`;let r=b(n,{bidValueMap:T,nameValueMap:E,onMissingBid:`error`});if(!r.valid||!r.notation)return`-`;let i=r.notation.trim(),a=Number(i);if(!Number.isFinite(a))return i||`-`;let o=Number(Z(e)?.derived?.precision),s=Number.isFinite(o)?Math.max(0,Math.min(Math.trunc(o),8)):0,c=Z(e)?.derived?.displayMode,l=s>0?a.toFixed(s):String(a);return c===`percent`?`${l}%`:l},me=/(\d+)d(\d+)([kd][hl]\d+|!)?/gi,j=(e,t)=>{let n=Array.from(e.matchAll(me));if(n.length!==1)return null;let r=n[0],i=r[0]||``,a=r[1]||``,o=r[2]||``,s=r[3]||``,c=r.index;if(!i||!a||!o||typeof c!=`number`)return null;let l=Number(a);if(!Number.isFinite(l)||l!==1||s)return null;let u=`2d${o}${t===`advantage`?`kh1`:`kl1`}`;return`${e.slice(0,c)}${u}${e.slice(c+i.length)}`};(0,G.useEffect)(()=>()=>{Object.values(y.current).forEach(e=>{window.clearTimeout(e)})},[]);let M=e=>!!c[e],N=(e,t,n,r)=>{t&&p({draftKey:e,attribute:t,input:n,isRollable:r})},P=()=>{p(null)},he=e=>{g(e)},ge=()=>{g(null)};(0,G.useEffect)(()=>{if(!f&&!m)return;let e=e=>{e.key===`Escape`&&(p(null),g(null))};return window.addEventListener(`keydown`,e),()=>{window.removeEventListener(`keydown`,e)}},[f,m]);let _e=async e=>{if(!m)return;let t=e===`normal`?m.notation:j(m.notation,e);if(!t)return;let n=e===`normal`?``:e===`advantage`?` (Advantage)`:` (Disadvantage)`;await D(t,`${m.actionName}${n}`)},F=(e,t)=>{u(t=>({...t,[e]:!0})),window.setTimeout(()=>{t?.focus(),t?.select()},0)},ve=e=>{u(t=>{let{[e]:n,...r}=t;return r})},I=(e,t)=>{let n=y.current[e];n&&window.clearTimeout(n),y.current[e]=window.setTimeout(()=>{te.current[e]=!0,F(e,t),delete y.current[e]},500)},L=e=>{let t=y.current[e];t&&(window.clearTimeout(t),delete y.current[e])},R=e=>te.current[e]?(delete te.current[e],!0):!1,ye=async(e,t)=>{await a({[C(e)]:t})},be=async(e,t)=>{await a({[C(e)]:t})},xe=e=>{let t=i.metadata?.[C(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``}}):[]},Se=e=>{let t=i.metadata?.[C(e)];return Array.isArray(t)?t.map(e=>{let t=e&&typeof e==`object`?e:{};return{id:typeof t.id==`string`&&t.id?t.id:crypto.randomUUID(),name:typeof t.name==`string`?t.name:``,description:typeof t.description==`string`?t.description:``,inUse:!!t.inUse}}):[]},Ce=(e,t)=>{S.log(e,t)},z=e=>{e&&(e.style.height=`0px`,e.style.height=`${Math.max(e.scrollHeight,44)}px`)},B=(e,t=!1)=>{let n=[],r=e.matchAll(/\[([^\[\]]+)\]/g);for(let e of r){let r=e[0],i=(e[1]||``).trim();if(!i)continue;let a=b(t?i.replace(/(\d+d\d+(?:[kd][hl]\d+|!|\{[^{}]+\})?)\s+#[a-z0-9_]+/gi,`$1`):i,{bidValueMap:T,nameValueMap:E,onMissingBid:`error`,allowCurlyTags:t});!a.valid||!a.notation||n.push({raw:r,notation:t?i:a.notation})}return n},V=async(e,t,n)=>{Ce(`List metadata update`,{listType:n.listType,bid:e,reason:n.reason,entryId:n.entryId,field:n.field,entryCount:t.length,timestamp:Date.now()}),await a({[C(e)]:t})},H=t=>t===`dash`||t===`dashed`?(0,K.jsx)(wt,{$theme:e}):t===`shadow`?(0,K.jsx)(Tt,{$theme:e}):t===`ridge`?(0,K.jsx)(Et,{$theme:e}):t===`zigzag`?(0,K.jsx)(Dt,{$theme:e}):t===`pulse`?(0,K.jsx)(Ot,{$theme:e}):(0,K.jsx)(bt,{$theme:e}),we=t=>{let n=t.type,i=(()=>n===`derived-value`||n===`enum-value`||n===`resource`?`text-value`:n===`column-derived`?`column-value`:n)(),a=t.styles||{},c=Q(r,a.attributeId),l=fn(a.textAlign??a.align,`center`),u=a.stretch===!0;if(i===`line-break`)return(0,K.jsx)(q,{$theme:e,$full:!0,children:H(a.styleDesign)},t.id);if(i===`line-spacer`)return(0,K.jsx)(yt,{$full:t.fullsize},t.id);if(i===`image`){let n=typeof a.imageUrl==`string`?a.imageUrl.trim():``,r=dn(a.imageCols,1,2,t.fullsize?2:1),i=dn(a.imageRows,1,6,1);return(0,K.jsx)(q,{$theme:e,$full:r===2,children:(0,K.jsx)(xt,{$theme:e,$heightPx:ln*i,children:n?(0,K.jsx)(St,{src:n,alt:`Card component`,loading:`lazy`}):(0,K.jsx)(Ct,{$theme:e,children:`No image selected`})})},t.id)}if(i===`text`){let n=an[a.fontSize||`md`],r=gn(c,a.labelMode)?_n(c,a.labelMode,a.labelIcon,18):`Title Header`,i=`text:${t.id}:${J(c)||`none`}`;return(0,K.jsx)(q,{$theme:e,$full:t.fullsize,onContextMenu:c?e=>{e.preventDefault(),N(i,c,null,!1)}:void 0,children:(0,K.jsx)(rt,{$theme:e,$fontSize:n,$weight:700,$stretch:u,$align:l,children:r})},t.id)}if(i===`text-value`){let n=cn[a.fontSize||`md`],r=gn(c,a.labelMode),i=_n(c,a.labelMode,a.labelIcon,18),l=a.labelPosition===`right`?`right`:`left`,d=fn(a.textAlign??a.align,`center`),f=a.fontWeight===`bold`?700:400,p=a.fontStyle===`italic`?`italic`:`normal`,m=J(c),h=mn(c),g=ce(c),_=`text-value:${t.id}:${m||`none`}`,v=g&&M(_),y;if(h===`derived`)y=(0,K.jsx)(dt,{$theme:e,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:u,title:`Formula: ${Z(c)?.derived?.formula||X(c)||`Derived formula`}`,onContextMenu:c?e=>{e.preventDefault(),N(_,c,null,!1)}:void 0,children:fe(c)});else if(h===`enum`){let t=Array.isArray(Z(c)?.enum?.options)?(Z(c)?.enum?.options||[]).map(e=>String(e||``).trim()).filter(e=>e.length>0):[];y=(0,K.jsx)(lt,{$theme:e,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:u,value:t.includes(m?w(m).trim():``)?w(m).trim():t[0]||``,disabled:!m,onContextMenu:c?e=>{e.preventDefault(),N(_,c,null,!1)}:void 0,onChange:m?async e=>{await A(m,e.target.value)}:void 0,children:t.length===0?(0,K.jsx)(`option`,{value:``,children:`No options`}):t.map(e=>(0,K.jsx)(`option`,{value:e,children:e},e))})}else if(h===`resource`){let t=Z(c)?.resource,r=!!t?.showPips,i=m?k(m,c):{current:0,max:0},a=Number(t?.pipCap??i.max??0),l=Number.isFinite(a)?Math.max(0,Math.min(Math.round(a),15)):0;if(r&&l>0)y=(0,K.jsx)(mt,{onContextMenu:c?e=>{e.preventDefault(),N(_,c,null,!1)}:void 0,children:Array.from({length:l}).map((t,n)=>(0,K.jsx)(ht,{$theme:e,$filled:n<Math.max(0,Math.min(i.current,l)),type:`button`,disabled:!m,onClick:m?async()=>{let e=Math.max(0,Math.min(i.current,l));await A(m,{current:n+1===e?n:n+1,max:i.max})}:void 0},`text-resource-pip-${n}`))});else if(r)y=(0,K.jsx)(ut,{$theme:e,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:u,children:`-`});else{let t=`${_}:current`,r=`${_}:max`;y=(0,K.jsxs)(ft,{children:[(0,K.jsx)(ct,{$theme:e,$fontSize:n,$align:`center`,$weight:f,$fontStyle:p,$stretch:u,type:`text`,value:o[t]??String(i.current),onChange:e=>{let n=e.target.value;s(e=>({...e,[t]:n}))},onBlur:async e=>{if(!m)return;let n=Number(e.target.value);await A(m,{current:Number.isFinite(n)?n:i.current,max:i.max}),s(e=>{let{[t]:n,...r}=e;return r})},placeholder:`0`}),(0,K.jsx)(pt,{$theme:e,children:`/`}),(0,K.jsx)(ct,{$theme:e,$fontSize:n,$align:`center`,$weight:f,$fontStyle:p,$stretch:u,type:`text`,value:o[r]??String(i.max),onChange:e=>{let t=e.target.value;s(e=>({...e,[r]:t}))},onBlur:async e=>{if(!m)return;let t=Number(e.target.value),n=Number.isFinite(t)?t:i.max;await A(m,{current:i.current,max:n}),s(e=>{let{[r]:t,...n}=e;return n})},placeholder:`0`})]})}}else y=(0,K.jsx)(ct,{$theme:e,$fontSize:n,$align:d,$weight:f,$fontStyle:p,$stretch:u,$isRollable:g,type:`text`,readOnly:g&&!v,value:m?se(_,m):``,onChange:g&&!v?void 0:e=>{if(!m)return;let t=e.target.value;s(e=>({...e,[_]:t}))},onBlur:g&&!v?void 0:async e=>{if(!m)return;let t=e.target.value;await ye(m,t),s(e=>{let{[_]:t,...n}=e;return n}),g&&ve(_)},onClick:g?()=>{v||R(_)||O(c)}:void 0,onContextMenu:c?e=>{e.preventDefault(),N(_,c,e.currentTarget,g)}:void 0,onTouchStart:g?e=>{v||I(_,e.currentTarget)}:void 0,onTouchEnd:g?()=>{L(_)}:void 0,onTouchCancel:g?()=>{L(_)}:void 0,onKeyDown:e=>{if(g&&!v&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),O(c);return}(v||!g)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`});let ee=r?(0,K.jsx)(st,{$theme:e,$fontSize:n,$stretch:u,$weight:f,$fontStyle:p,children:i}):null;return(0,K.jsx)(at,{$full:t.fullsize,children:(0,K.jsxs)(ot,{children:[l===`left`?ee:null,y,l===`right`?ee:null]})},t.id)}if(i===`text-checkbox`){let n=on[a.fontSize||`md`],i=t.fullsize?6:3,o=Math.max(1,Math.min(i,Number(a.checkboxCount||1))),s=[...yn(r,a.bidList)].slice(0,o);for(;s.length<o;)s.push(``);let c=Q(r,s[0]||a.attributeId),l=gn(c,a.labelMode),d=_n(c,a.labelMode,a.labelIcon,16),f=a.inputType===`slider`,p=a.labelPosition===`right`?`right`:`left`,m=a.fontWeight===`bold`?700:400,h=a.fontStyle===`italic`?`italic`:`normal`,g=l?(0,K.jsx)($t,{$theme:e,$fontSize:n,$stretch:u,$weight:m,$fontStyle:h,children:d}):null;return(0,K.jsx)(q,{$theme:e,$full:t.fullsize,children:(0,K.jsxs)(Qt,{children:[p===`left`?g:null,(0,K.jsx)(en,{$fullWidth:!g,children:Array.from({length:o}).map((n,i)=>{let a=s[i]||``,o=a?oe(a):!1,c=a?Q(r,a):null,l=`text-checkbox:${t.id}:${a||`index-${i}`}`;return f?(0,K.jsx)(nn,{type:`button`,$theme:e,$active:o,disabled:!a,onClick:a?()=>{be(a,!o)}:void 0,onContextMenu:c?e=>{e.preventDefault(),N(l,c,null,!1)}:void 0,children:(0,K.jsx)(rn,{$theme:e,$active:o})},`slider-${i}`):(0,K.jsx)(tn,{$theme:e,type:`checkbox`,disabled:!a,checked:o,onChange:a?e=>{be(a,e.target.checked)}:void 0,onContextMenu:c?e=>{e.preventDefault(),N(l,c,null,!1)}:void 0},`checkbox-${i}`)})}),p===`right`?g:null]})},t.id)}if(i===`column-text`){let n=sn[a.fontSize||`md`],i=vn(r,a.bidList),o=a.fontWeight===`bold`?700:400,s=a.fontStyle===`italic`?`italic`:`normal`;return i.length===0?null:(0,K.jsx)(q,{$theme:e,$full:t.fullsize,children:(0,K.jsx)(gt,{children:i.map(i=>{let c=Q(r,i),l=a.labelMode||`name`,d=gn(c,l),f=_n(c,l,a.labelIcon,16);return d?(0,K.jsx)(_t,{children:(0,K.jsx)(nt,{$theme:e,$fontSize:n,$stretch:u,$align:`center`,$weight:o,$fontStyle:s,onContextMenu:c?e=>{e.preventDefault(),N(`column-text:${t.id}:${i}`,c,null,!1)}:void 0,children:f})},i):null})})},t.id)}if(i===`column-value`){let n=sn[a.fontSize||`md`],i=vn(r,a.bidList),c=a.fontWeight===`bold`?700:400,l=a.fontStyle===`italic`?`italic`:`normal`;return i.length===0?null:(0,K.jsx)(q,{$theme:e,$full:t.fullsize,children:(0,K.jsx)(gt,{children:i.map(i=>{let a=Q(r,i),d=mn(a),f=ce(a),p=`column-value:${t.id}:${i}`,m=f&&M(p),h;if(d===`derived`)h=(0,K.jsx)(dt,{$theme:e,$fontSize:n,$align:`center`,$weight:c,$fontStyle:l,$stretch:u,title:`Formula: ${Z(a)?.derived?.formula||X(a)||`Derived formula`}`,onContextMenu:a?e=>{e.preventDefault(),N(p,a,null,!1)}:void 0,children:fe(a)});else if(d===`enum`){let t=Array.isArray(Z(a)?.enum?.options)?(Z(a)?.enum?.options||[]).map(e=>String(e||``).trim()).filter(e=>e.length>0):[],r=w(i).trim();h=(0,K.jsx)(lt,{$theme:e,$fontSize:n,$align:`center`,$weight:c,$fontStyle:l,$stretch:u,value:t.includes(r)?r:t[0]||``,onContextMenu:a?e=>{e.preventDefault(),N(p,a,null,!1)}:void 0,onChange:async e=>{await A(i,e.target.value)},children:t.length===0?(0,K.jsx)(`option`,{value:``,children:`No options`}):t.map(e=>(0,K.jsx)(`option`,{value:e,children:e},e))})}else if(d===`resource`){let t=Z(a)?.resource,r=!!t?.showPips,d=k(i,a),f=Number(t?.pipCap??d.max??0),m=Number.isFinite(f)?Math.max(0,Math.min(Math.round(f),15)):0;if(r&&m>0)h=(0,K.jsx)(mt,{onContextMenu:a?e=>{e.preventDefault(),N(p,a,null,!1)}:void 0,children:Array.from({length:m}).map((t,n)=>(0,K.jsx)(ht,{$theme:e,$filled:n<Math.max(0,Math.min(d.current,m)),type:`button`,onClick:async()=>{let e=Math.max(0,Math.min(d.current,m));await A(i,{current:n+1===e?n:n+1,max:d.max})}},`column-resource-pip-${i}-${n}`))});else if(r)h=(0,K.jsx)(ut,{$theme:e,$fontSize:n,$align:`center`,$weight:c,$fontStyle:l,$stretch:u,children:`-`});else{let t=`${p}:current`,r=`${p}:max`;h=(0,K.jsxs)(ft,{children:[(0,K.jsx)(it,{$theme:e,$fontSize:n,$align:`center`,value:o[t]??String(d.current),onChange:e=>{let n=e.target.value;s(e=>({...e,[t]:n}))},onBlur:async e=>{let n=Number(e.target.value);await A(i,{current:Number.isFinite(n)?n:d.current,max:d.max}),s(e=>{let{[t]:n,...r}=e;return r})}}),(0,K.jsx)(pt,{$theme:e,children:`/`}),(0,K.jsx)(it,{$theme:e,$fontSize:n,$align:`center`,value:o[r]??String(d.max),onChange:e=>{let t=e.target.value;s(e=>({...e,[r]:t}))},onBlur:async e=>{let t=Number(e.target.value),n=Number.isFinite(t)?t:d.max;await A(i,{current:d.current,max:n}),s(e=>{let{[r]:t,...n}=e;return n})}})]})}}else h=(0,K.jsx)(it,{$theme:e,$fontSize:n,$align:`center`,$isRollable:f,readOnly:f&&!m,value:se(p,i),onChange:f&&!m?void 0:e=>{let t=e.target.value;s(e=>({...e,[p]:t}))},onBlur:f&&!m?void 0:async e=>{let t=e.target.value;await ye(i,t),s(e=>{let{[p]:t,...n}=e;return n}),f&&ve(p)},onClick:f?()=>{m||R(p)||O(a)}:void 0,onContextMenu:a?e=>{e.preventDefault(),N(p,a,e.currentTarget,f)}:void 0,onTouchStart:f?e=>{m||I(p,e.currentTarget)}:void 0,onTouchEnd:f?()=>{L(p)}:void 0,onTouchCancel:f?()=>{L(p)}:void 0,onKeyDown:e=>{if(f&&!m&&(e.key===`Enter`||e.key===` `)){e.preventDefault(),O(a);return}(m||!f)&&e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},placeholder:`...`});return(0,K.jsx)(vt,{children:h},i)})})},t.id)}if(i===`action-list`){let n=Q(r,a.attributeId||a.bidList?.[0]),i=J(n),o=bn(r,a.attributeId||a.bidList?.[0]),s=i?xe(i):[];return(0,K.jsx)(q,{$theme:e,$full:t.fullsize,children:(0,K.jsxs)(kt,{$theme:e,children:[(0,K.jsxs)(At,{$theme:e,children:[(0,K.jsx)(jt,{$theme:e,onContextMenu:n?e=>{e.preventDefault(),N(`action-list:${t.id}:${i||`none`}`,n,null,!1)}:void 0,children:o}),(0,K.jsx)(Mt,{type:`button`,$theme:e,"aria-label":`Add Action`,onClick:async()=>{i&&await V(i,[...s,{id:crypto.randomUUID(),name:``,description:``}],{listType:`action`,reason:`add`})},children:(0,K.jsx)(Ge,{size:14})})]}),s.map((n,r)=>(0,K.jsxs)(Nt,{children:[(0,K.jsxs)(Yt,{children:[(0,K.jsx)(Xt,{children:(0,K.jsx)(Rt,{$theme:e,type:`text`,defaultValue:n.name,placeholder:`Action Name`,onBlur:async e=>{if(!i)return;let t=e.target.value;await V(i,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,K.jsx)(Lt,{type:`button`,$theme:e,"aria-label":`Delete Action`,onClick:async()=>{i&&await V(i,s.filter(e=>e.id!==n.id),{listType:`action`,reason:`delete`,entryId:n.id})},children:(0,K.jsx)(ue,{size:14})})]}),(()=>{let t=B(n.description,_);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(zt,{$theme:e,defaultValue:n.description,ref:z,placeholder:`Action Description`,onInput:e=>{z(e.currentTarget)},onBlur:async e=>{if(!i)return;let t=e.target.value;await V(i,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`action`,reason:`blur-save`,entryId:n.id,field:`description`})}}),t.length>0?(0,K.jsx)(Bt,{children:t.map((t,r)=>(0,K.jsx)(Vt,{type:`button`,$theme:e,onClick:()=>{D(t.notation,n.name||`Action`)},onContextMenu:e=>{e.preventDefault(),he({notation:t.notation,actionName:n.name||`Action`,title:n.name||`Action Roll`})},title:t.notation,children:t.notation},`${n.id}-action-inline-${r}`))}):null]})})()]},n.id||`${t.id}-action-${r}`))]})},t.id)}if(i===`item-list`){let n=Q(r,a.attributeId||a.bidList?.[0]),i=J(n),o=bn(r,a.attributeId||a.bidList?.[0]),s=i?Se(i):[];return(0,K.jsx)(q,{$theme:e,$full:t.fullsize,children:(0,K.jsxs)(kt,{$theme:e,children:[(0,K.jsxs)(At,{$theme:e,children:[(0,K.jsx)(jt,{$theme:e,onContextMenu:n?e=>{e.preventDefault(),N(`item-list:${t.id}:${i||`none`}`,n,null,!1)}:void 0,children:o}),(0,K.jsx)(Mt,{type:`button`,$theme:e,"aria-label":`Add Item`,onClick:async()=>{i&&await V(i,[...s,{id:crypto.randomUUID(),name:``,description:``,inUse:!1}],{listType:`item`,reason:`add`})},children:(0,K.jsx)(Ge,{size:14})})]}),s.map((n,r)=>(0,K.jsxs)(Nt,{children:[(0,K.jsxs)(Pt,{children:[(0,K.jsx)(Ft,{children:(0,K.jsx)(Zt,{$theme:e,type:`checkbox`,defaultChecked:n.inUse,onBlur:async e=>{if(!i)return;let t=e.target.checked;await V(i,s.map(e=>e.id===n.id?{...e,inUse:t}:e),{listType:`item`,reason:`toggle-save`,entryId:n.id,field:`inUse`})}})}),(0,K.jsx)(It,{$theme:e,children:(0,K.jsx)(Rt,{$theme:e,type:`text`,defaultValue:n.name,placeholder:`Item Name`,onBlur:async e=>{if(!i)return;let t=e.target.value;await V(i,s.map(e=>e.id===n.id?{...e,name:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`name`})}})}),(0,K.jsx)(Lt,{type:`button`,$theme:e,"aria-label":`Delete Item`,onClick:async()=>{i&&await V(i,s.filter(e=>e.id!==n.id),{listType:`item`,reason:`delete`,entryId:n.id})},children:(0,K.jsx)(ue,{size:14})})]}),(()=>{let t=B(n.description,_);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(zt,{$theme:e,defaultValue:n.description,ref:z,placeholder:`Item Description`,onInput:e=>{z(e.currentTarget)},onBlur:async e=>{if(!i)return;let t=e.target.value;await V(i,s.map(e=>e.id===n.id?{...e,description:t}:e),{listType:`item`,reason:`blur-save`,entryId:n.id,field:`description`})}}),t.length>0?(0,K.jsx)(Bt,{children:t.map((t,r)=>(0,K.jsx)(Vt,{type:`button`,$theme:e,onClick:()=>{D(t.notation,n.name||`Item`)},onContextMenu:e=>{e.preventDefault(),he({notation:t.notation,actionName:n.name||`Item`,title:n.name||`Item Roll`})},title:t.notation,children:t.notation},`${n.id}-item-inline-${r}`))}):null]})})()]},n.id||`${t.id}-item-${r}`))]})},t.id)}return null};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Ze,{$theme:e,$backgroundUrl:t,children:(0,K.jsxs)(Qe,{children:[(0,K.jsx)($e,{children:(0,K.jsx)(et,{$theme:e,children:(0,K.jsx)(tt,{$theme:e,value:re,onChange:e=>{ie(e.target.value)},onBlur:()=>{ae()},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},"aria-label":`Unit Name`})})}),ne.map(e=>(0,K.jsx)($e,{children:e.items.map(e=>we(e))},`row-${e.row}`))]})}),f?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Ut,{onClick:P}),(0,K.jsxs)(Wt,{$theme:e,onClick:e=>e.stopPropagation(),children:[(0,K.jsxs)(Kt,{children:[(0,K.jsx)(Gt,{$theme:e,children:Y(f.attribute)||`Attribute`}),(0,K.jsxs)(qt,{$theme:e,children:[`[`,J(f.attribute),`]`]})]}),(0,K.jsxs)(Ht,{children:[f.isRollable?(0,K.jsx)(Jt,{type:`button`,$theme:e,onClick:()=>{P(),F(f.draftKey,f.input)},children:`Edit value`}):null,(()=>{if(!f.isRollable)return null;let t=le(f.attribute);if(!t)return null;let n=j(t,`advantage`),r=j(t,`disadvantage`);return!n||!r?null:(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Jt,{type:`button`,$theme:e,onClick:()=>{P(),D(n,`${Y(f.attribute)||J(f.attribute)||`Roll`} (Advantage)`)},children:`Roll with Advantage`}),(0,K.jsx)(Jt,{type:`button`,$theme:e,onClick:()=>{P(),D(r,`${Y(f.attribute)||J(f.attribute)||`Roll`} (Disadvantage)`)},children:`Roll with Disadvantage`})]})})()]})]})]}):null,m?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Ut,{onClick:ge}),(0,K.jsxs)(Wt,{$theme:e,onClick:e=>e.stopPropagation(),children:[(0,K.jsxs)(Kt,{children:[(0,K.jsx)(Gt,{$theme:e,children:m.title}),(0,K.jsxs)(qt,{$theme:e,children:[`[`,m.notation,`]`]})]}),(0,K.jsx)(Ht,{children:(()=>{let t=j(m.notation,`advantage`),n=j(m.notation,`disadvantage`);return!t||!n?null:(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Jt,{type:`button`,$theme:e,onClick:()=>{ge(),_e(`advantage`)},children:`Roll with Advantage`}),(0,K.jsx)(Jt,{type:`button`,$theme:e,onClick:()=>{ge(),_e(`disadvantage`)},children:`Roll with Disadvantage`})]})})()})]})]}):null]})};var Sn={SNAPSHOT_PUBLIC_ID:`${d.EXTENSIONID}/SnapshotPublicId`},Cn={primary:s.theme_primary,offset:s.theme_offset,background:s.theme_background,border:s.theme_border,background_url:s.background_url},wn=o.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
`,Tn=o.div`
  height: 100%;
  overflow: hidden;
  padding: 40px 4px 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  position: relative;
  background: ${e=>c(e.$theme.background,.5)};
`,En=o.p`
  margin: 0;
  color: ${e=>e.$theme.primary};
  text-align: center;
  align-content: center;
  font-weight: 600;
  font-size: 24px;
`,Dn=o.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: min(calc(100% - 16px), 350px);
  z-index: 10;
`,On=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`,kn=o.select`
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
`,An=o.button`
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
`,jn=o.img`
  width: 28px;
  height: 28px;
  display: block;
`,Mn=o.div`
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
`,Nn=o.div`
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
`,Pn=o.button`
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
`,Fn=o.div`
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
`,In=o.div`
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
`,Ln=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Rn=o.div`
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
`,zn=o.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,Bn=o.div`
  color: ${e=>e.$theme.primary};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`,Vn=o.span`
  font-size: 12px;
  line-height: 1;
`,Hn=o.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Un=o.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 4px;
`,Wn=o.span`
  margin-left: 6px;
  width: 18px;
  height: 18px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 6px;
  border: 1px solid ${e=>c(e.$theme.border,.85)};
  background: ${e=>c(e.$theme.offset,.35)};
  color: ${e=>e.$theme.primary};
`,Gn=o.span`
  color: ${e=>e.$color};
`,Kn=o.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,qn=o.button`
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>e.$variant===`import`?c(e.$theme.offset,.45):c(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  font-size: 11px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
`,Jn=o.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Yn=o.input`
  flex: 1;
  height: 30px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
`,Xn=o.button`
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
`,Zn=o.div`
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
`,Qn=o.div`
  display: inline-flex;
  justify-content: space-between;
  width: 40%;
  pointer-events: auto;
`,$=o.button`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 2px solid ${e=>e.$theme.border};
  background: ${e=>c(e.$theme.background,.9)};
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
    background: ${e=>c(e.$theme.offset,.5)};
  }

  &:disabled:hover {
    background: ${e=>c(e.$theme.background,.9)};
  }
`,$n=o($)`
  background: ${e=>e.$active?c(e.$theme.offset,.45):c(e.$theme.background,.9)};

  &:disabled {
    background: ${e=>c(e.$theme.background,.9)};
  }
`,er=o.textarea`
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
`,tr=o.button`
  border: 2px solid ${e=>e.$theme.border};
  border-radius: 8px;
  background: ${e=>e.$variant===`primary`?c(e.$theme.offset,.5):c(e.$theme.background,.9)};
  color: ${e=>e.$theme.primary};
  padding: 6px 10px;
  cursor: pointer;
`,nr=o(tr)`
  margin-right: auto;
`,rr=o.div`
  margin-top: 8px;
  color: ${e=>c(e.$theme.offset,.95)};
  font-size: 12px;
`,ir=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${e=>c(e.$theme.primary,.92)};
  font-size: 12px;
  line-height: 1.45;
`,ar=o.div`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>e.$theme.primary};
`,or=o.ul`
  margin: 0;
  padding-left: 16px;
`,sr=o.code`
  display: block;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid ${e=>c(e.$theme.border,.7)};
  background: ${e=>c(e.$theme.background,.82)};
  color: ${e=>e.$theme.primary};
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
  white-space: pre-wrap;
`,cr=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`,lr=o.div`
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
`,ur=o.h3`
  color: ${e=>e.$theme.primary};
  margin: 0 0 15px 0;
  font-size: 18px;
`,dr=o.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
`,fr=()=>{let e=new URLSearchParams(window.location.search).get(`unitid`);return e&&e.split(`,`)[0]?.trim()||null},pr=()=>{let e=new URLSearchParams(window.location.search).get(`pinned`);if(!e)return!1;let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`},mr=`POP_${d.CARDSID}`,hr=(e,t)=>{let n=new URLSearchParams;return n.set(`unitid`,e),t&&n.set(`pinned`,`true`),`/pages/forgecard.html?${n.toString()}`},gr=e=>{if(Array.isArray(e))return e;if(typeof e==`string`)try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}return null},_r=e=>{if(e===!0)return!0;if(typeof e==`string`){let t=e.trim().toLowerCase();return t===`true`||t===`1`||t===`yes`}return typeof e==`number`?e===1:!1};Je.createRoot(document.getElementById(`root`)).render((0,K.jsx)(G.StrictMode,{children:(0,K.jsx)(u,{children:(0,K.jsx)(()=>{let{t:e}=Re(),[n,r]=(0,G.useState)(()=>fr()),i=(0,G.useMemo)(()=>pr(),[]),[o,c]=(0,G.useState)({metadata:{},items:[]}),[u,p]=(0,G.useState)(null),[ee,b]=(0,G.useState)(null),[ne,x]=(0,G.useState)(null),[re,ae]=(0,G.useState)(null),[w,oe]=(0,G.useState)(!1),[se,ce]=(0,G.useState)(!1),[T,E]=(0,G.useState)(!1),[le,O]=(0,G.useState)(``),[ue,de]=(0,G.useState)(``),[k,pe]=(0,G.useState)(!1),[me,j]=(0,G.useState)([]),[M,N]=(0,G.useState)([]),[P,he]=(0,G.useState)(!1),[ge,F]=(0,G.useState)(!1),[ve,I]=(0,G.useState)(``),[L,R]=(0,G.useState)(null),[be,xe]=(0,G.useState)(!1),Ce=e=>{let t=e[v.ENABLE_CONSOLE_LOG];typeof t==`boolean`&&S.setEnabled(t)},z=(0,G.useMemo)(()=>ee||s.card_layout,[ee]),B=(0,G.useMemo)(()=>ne||s.attributes,[ne]),V=(0,G.useMemo)(()=>u||Cn,[u]),H=(0,G.useMemo)(()=>t(V.primary,V.offset,V.background,V.border,V.background_url),[V]);(0,G.useEffect)(()=>{let e=!1;return(async()=>{try{await De()}catch(e){S.log(`Auth hydration failed in card iframe`,e)}finally{e||xe(!0)}})(),()=>{e=!0}},[]),(0,G.useEffect)(()=>{let e=!0,t=async t=>{let n=t[Sn.SNAPSHOT_PUBLIC_ID];if(typeof n!=`string`||n.trim().length===0){e&&(p(null),b(null),x(null));return}let{data:r,error:i}=await a.rpc(`bs_forge_get_snapshot_for_room`,{p_snapshot_public_id:n});if(i){e&&(p(null),b(null),x(null));return}let o=Array.isArray(r)?r[0]:r;if(!o||typeof o!=`object`){e&&(p(null),b(null),x(null));return}let s=o,c=gr(s.card_layout),l=gr(s.attributes);if(typeof s.theme_primary!=`string`||typeof s.theme_offset!=`string`||typeof s.theme_background!=`string`||typeof s.theme_border!=`string`||!Array.isArray(c)||!Array.isArray(l)){e&&(p(null),b(null),x(null));return}e&&(p({primary:s.theme_primary,offset:s.theme_offset,background:s.theme_background,border:s.theme_border,background_url:typeof s.background_url==`string`?s.background_url:``}),b(c),x(l))};(async()=>{let[n,r,i,a,o]=await Promise.all([l.scene.getMetadata(),l.scene.items.getItems(),l.room.getMetadata(),l.player.getId(),l.player.getRole()]);e&&(Ce(i),c({metadata:n,items:r}),await t(i),ae(a),oe(String(o||``).toUpperCase()===`GM`),ce(!0))})();let n=l.scene.onMetadataChange(t=>{e&&c(e=>({...e,metadata:t}))}),r=l.room.onMetadataChange(n=>{e&&(t(n),Ce(n))}),i=l.scene.items.onChange(t=>{e&&c(e=>({...e,items:t}))});return()=>{e=!1,n(),r(),i()}},[]);let we=t=>{let n=t.metadata?.[h.UNIT_NAME];if(typeof n==`string`&&n.trim())return n;let r=t.text?.plainText;return typeof r==`string`&&r.trim()?r:typeof t.name==`string`&&t.name.trim()?t.name:e(`card.unknownUnit`)},Ee=(0,G.useMemo)(()=>o.items.filter(e=>_r(e.metadata?.[h.FABRICATED])).filter(e=>w||e.createdUserId===re).filter(e=>e.id!==n).map(e=>({id:e.id,name:we(e)})).sort((e,t)=>e.name.localeCompare(t.name)),[o.items,n,w,re]),U=(0,G.useMemo)(()=>n&&o.items.find(e=>e.id===n)||null,[o.items,n]),ke=async()=>n&&(await l.scene.items.getItems()).find(e=>e.id===n)||null,Ae=async e=>{U&&(await l.scene.items.updateItems([U.id],t=>{let n={...t[0].metadata||{}};Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),t[0].metadata=n}),c(t=>({...t,items:t.items.map(t=>{if(t.id!==U.id)return t;let n={...t.metadata||{}};return Object.entries(e).forEach(([e,t])=>{t===void 0?delete n[e]:n[e]=t}),{...t,metadata:n}})})))},Me=async e=>{if(!U)return;let[t,n]=await Promise.all([l.scene.getMetadata(),l.room.getMetadata()]),{currentHpBid:r,maxHpBid:i}=y(n,B),a=_(e,i,B,`max`),o=i===m.MAX_HP?a:_(e,m.MAX_HP,B,`max`),s=a??o,u={...e};if(s!==null){let e=f(r),t=f(i),n=g(B,r),a=g(B,i);u[e]=te(u[e],n,`current`,s,s),u[t]=te(u[t],a,`max`,s,s)}let p=[h.FABRICATED,h.INITIATIVE,h.ON_LIST,h.IN_PARTY];await l.scene.items.updateItems([U.id],e=>{let t=e[0].metadata,n={},r={};for(let[e,i]of Object.entries(t))e.startsWith(`${d.EXTENSIONID}/`)||(n[e]=i),p.includes(e)&&(r[e]=i);e[0].metadata={...n,...u,...r}}),c(e=>({...e,items:e.items.map(e=>{if(e.id!==U.id)return e;let t={},n={};for(let[r,i]of Object.entries(e.metadata||{}))r.startsWith(`${d.EXTENSIONID}/`)||(t[r]=i),p.includes(r)&&(n[r]=i);return{...e,metadata:{...t,...u,...n}}})}))},Ne=async()=>{j(await Fe())},Pe=e=>{let t=e.trim(),n=t?t[0].toUpperCase():`A`;return`hsl(${Math.max(0,Math.min(25,n.charCodeAt(0)-65))/26*360}, 70%, 65%)`},W=async e=>{let[t,n]=await Promise.all([_e(e),ye()?Se(e):Promise.resolve([])]);return[...n.map(e=>({...e,source:`remote-user`})),...t.map(e=>({...e,source:`remote-shared`}))]},Le=(0,G.useMemo)(()=>{let e=ue.trim().toLowerCase(),t={local:0,"remote-user":1,"remote-shared":2},n=(e,n)=>t[e.source]===t[n.source]?e.favorite===n.favorite?e.name.localeCompare(n.name):e.favorite?-1:1:t[e.source]-t[n.source],r=[...me].sort((e,t)=>e.favorite===t.favorite?e.name.localeCompare(t.name):e.favorite?-1:1);if(!e)return r.filter(e=>e.favorite).map(e=>({...e,source:`local`}));let i=r.filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),a=M.filter(e=>e.source===`remote-user`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e)),o=M.filter(e=>e.source===`remote-shared`).filter(t=>t.name.toLowerCase().includes(e)||t.author.toLowerCase().includes(e));return[...i.map(e=>({...e,source:`local`})),...a,...o].sort(n)},[me,M,ue]),Ge=async()=>{if(!n){await l.notification.show(e(`card.noUnitSelectedToPin`),`ERROR`);return}let t=await l.viewport.getWidth(),r=await l.viewport.getHeight(),a=r>800?700:r-100;if(!i){await l.popover.open({id:mr,url:hr(n,!0),height:400,width:350,anchorPosition:{top:50,left:t-70},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},transformOrigin:{vertical:`CENTER`,horizontal:`RIGHT`},hidePaper:!0,disableClickAway:!0}),await l.popover.close(d.CARDSID);return}await l.popover.open({id:d.CARDSID,url:hr(n,!1),height:a,width:350,anchorPosition:{left:t/2,top:r/2},anchorReference:`POSITION`,anchorOrigin:{vertical:`CENTER`,horizontal:`CENTER`},transformOrigin:{vertical:`CENTER`,horizontal:`CENTER`},hidePaper:!0,disableClickAway:!0}),await l.popover.close(mr)},Je=()=>{w&&pe(e=>!e)},Ye=async()=>{if(!w)return;let t=await ke();if(!t){await l.notification.show(e(`card.noUnitSelectedToSave`),`ERROR`);return}be||(await De(),xe(!0));try{let n=(await l.player.getName()).trim(),r=ye()?await Te(t.metadata,n,k):await fe(t.metadata,n,k);await Ne();let i=ye()?e(`card.collectionTargetOnline`):e(`card.collectionTargetLocal`);await l.notification.show(e(r===`created`?`card.unitSavedToTarget`:`card.unitUpdatedInTarget`,{target:i}))}catch(t){S.log(`Collection save failed`,t),await l.notification.show(e(`card.couldNotSaveToCollection`),`ERROR`)}},Xe=async()=>{if(!await ke()){await l.notification.show(e(`card.noUnitSelectedToImportInto`),`ERROR`);return}R(null),I(``),he(!0)},Ze=async()=>{let t=await ke();if(!t){await l.notification.show(e(`card.noUnitSelectedToExport`),`ERROR`);return}try{let n=ie(t.metadata),r=n[h.UNIT_NAME],i=typeof r==`string`?r.trim():``;if(!i){await l.notification.show(e(`card.unitMissingValidName`),`ERROR`);return}let a={name:i,author:(await l.player.getName()).trim()||e(`card.unknownAuthor`),metadata:n};await navigator.clipboard.writeText(JSON.stringify(a,null,2)),await l.notification.show(e(`card.unitDataCopied`))}catch(t){S.log(`Unit export failed`,t),await l.notification.show(e(`card.couldNotCopyUnitData`),`ERROR`)}},Qe=()=>{he(!1),R(null),I(``)},$e=t=>{let n=JSON.parse(t);if(!n||typeof n!=`object`||Array.isArray(n))throw Error(e(`card.importDataMustBeJsonObject`));let r=n,i=r.metadata&&typeof r.metadata==`object`?r.metadata:n;if(!i||typeof i!=`object`||Array.isArray(i))throw Error(e(`card.importDataMustIncludeMetadata`));let a=ie(i),o=a[h.UNIT_NAME];if(!(typeof o==`string`&&o.trim()))throw Error(e(`card.importedMetadataMissingName`));return a},q=async()=>{if(!await ke()){R(e(`card.noUnitSelectedToImportInto`));return}let t=ve.trim();if(!t){R(e(`card.pasteJsonBeforeImport`));return}try{await Me($e(t)),pe(!1),Qe(),await l.notification.show(e(`card.unitDataImported`))}catch(t){R(t instanceof Error?t.message:e(`card.importFailed`))}},et=(t,n)=>{let r=(t||``).trim().toLowerCase();if(r===`numb`||r===`derived`)return 0;if(r===`bool`)return!1;if(r===`enum`)return``;if(r===`resource`)return{current:0,max:0};if(r===`list`){let t=n?.firstNumericBid?`@${n.firstNumericBid}`:`@BID`;return[{id:`example-list-001`,name:e(`card.aiExampleListEntryName`),description:e(`card.aiExampleListEntryDescription`,{bidRef:t})}]}return``},tt=()=>{let t=B.find(e=>e.attr_type===`numb`)?.attr_bid,n=B.find(e=>e.attr_type===`list`)||null,r=B.map(e=>({bid:e.attr_bid,name:e.attr_name,type:e.attr_type,metadataKey:`${d.EXTENSIONID}/${e.attr_bid}`})),i={[h.UNIT_NAME]:e(`card.aiExampleUnitName`)};for(let e of B)i[`${d.EXTENSIONID}/${e.attr_bid}`]=et(e.attr_type,{firstNumericBid:t});let a={id:`example-list-001`,name:e(`card.aiExampleActionName`),description:e(`card.aiExampleActionDescription`,{bidRef:t?`@${t}`:`@BID`})},o={id:`example-item-001`,name:e(`card.aiExampleItemName`),description:e(`card.aiExampleItemDescription`),inUse:!1},s=JSON.stringify(r,null,2),c=JSON.stringify(i,null,2),l=JSON.stringify(a,null,2),u=JSON.stringify(o,null,2),f=n?`${d.EXTENSIONID}/${n.attr_bid}`:`${d.EXTENSIONID}/<LIST_BID>`;return[e(`card.aiPromptIntro`),``,e(`card.aiPromptRequirementsHeader`),e(`card.aiRequirement1`),e(`card.aiRequirement2`),e(`card.aiRequirement3`),e(`card.aiRequirement4`),e(`card.aiRequirement5`),e(`card.aiRequirement6`),``,e(`card.aiExtensionIdLabel`,{value:d.EXTENSIONID}),e(`card.aiUnitNameMetadataLabel`,{value:h.UNIT_NAME}),``,e(`card.aiAttributeDictionaryHeader`),s,``,e(`card.aiListExamplesHeader`),e(`card.aiStandardListEntryHeader`),l,``,e(`card.aiItemListEntryHeader`),u,``,e(`card.aiListKeyHint`,{key:f}),``,e(`card.aiOutputShapeHeader`),c,``,e(`card.aiFinalInstruction`)].join(`
`)},nt=async()=>{try{let t=tt();await navigator.clipboard.writeText(t),await l.notification.show(e(`card.aiTemplateCopied`))}catch(t){S.log(`AI template copy failed`,t),await l.notification.show(e(`card.aiTemplateCopyFailed`),`ERROR`)}},rt=()=>{let t=le.trim();if(de(t),!t){N([]);return}(async()=>{be||(await De(),xe(!0)),N(await W(t))})().catch(async t=>{S.log(`Supabase collection search failed`,t),N([]),await l.notification.show(e(`card.onlineSearchFailed`),`ERROR`)})},it=async t=>{if(!U){await l.notification.show(e(`card.noUnitSelectedToImportInto`),`ERROR`);return}try{await Me(t.metadata),pe(!1),await l.notification.show(t.source===`local`?e(`card.recordImportedLocal`,{name:t.name}):e(`card.recordImportedOnline`,{name:t.name}))}catch(t){S.log(`Collection record import failed`,t),await l.notification.show(e(`card.recordImportFailed`),`ERROR`)}},at=async t=>{try{if(t.source===`remote-user`)await je(t.id),N(e=>e.filter(e=>!(e.source===`remote-user`&&e.id===t.id)));else if(t.source===`local`)await Ie(t.id),j(e=>e.filter(e=>e.id!==t.id));else return;await l.notification.show(e(`card.recordDeleted`,{name:t.name}))}catch(t){S.log(`Collection record delete failed`,t),await l.notification.show(e(`card.recordDeleteFailed`),`ERROR`)}};return(0,G.useEffect)(()=>{T&&Ne().catch(e=>{S.log(`Failed to load collection records`,e)})},[T]),(0,G.useEffect)(()=>{T&&(de(``),O(``),N([]))},[T]),(0,K.jsxs)(wn,{$theme:V,children:[(0,K.jsxs)(Tn,{$theme:V,children:[(0,K.jsx)(Dn,{children:(0,K.jsxs)(On,{children:[(0,K.jsxs)(kn,{$theme:V,"aria-label":e(`card.chooseUnitAria`),value:``,onChange:e=>{let t=e.target.value;t&&r(t)},children:[(0,K.jsx)(`option`,{value:``,children:e(`card.chooseUnitOption`)}),Ee.map(e=>(0,K.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,K.jsx)(An,{type:`button`,$theme:V,"aria-label":e(`card.closeCardAria`),onClick:async()=>{await l.popover.close(i?mr:d.CARDSID)},children:(0,K.jsx)(jn,{src:`/close.svg`,alt:``,"aria-hidden":`true`})})]})}),se?n?U?(0,K.jsx)(xn,{systemTheme:V,backgroundUrl:V.background_url,cardLayout:z,attributes:B,unitItem:U,onUpdateMetadata:Ae}):(0,K.jsx)(En,{$theme:V,children:e(`card.unitNotFound`)}):(0,K.jsx)(En,{$theme:V,children:e(`card.noUnitId`)}):(0,K.jsx)(En,{$theme:V,children:e(`card.loading`)})]}),(0,K.jsxs)(Mn,{$theme:V,$open:T,children:[(0,K.jsxs)(Zn,{children:[(0,K.jsxs)(Qn,{children:[(0,K.jsx)($,{type:`button`,$theme:V,"aria-label":e(`card.pinAria`),onClick:()=>{Ge()},children:(0,K.jsx)(C,{theme:H,text:e(`card.pinTooltip`),children:(0,K.jsx)(We,{size:16})})}),(0,K.jsx)($n,{type:`button`,$theme:V,$active:k,"aria-label":e(`card.favoriteAria`),disabled:!w,onClick:Je,children:(0,K.jsx)(C,{theme:H,text:e(`card.favoriteTooltip`),children:(0,K.jsx)(A,{size:16,fill:k?`currentColor`:`none`})})}),(0,K.jsx)($,{type:`button`,$theme:V,"aria-label":e(`card.collectionSaveAria`),disabled:!w,onClick:Ye,children:(0,K.jsx)(C,{theme:H,text:e(`card.collectionSaveTooltip`),children:(0,K.jsx)(ze,{size:16})})})]}),(0,K.jsxs)(Qn,{children:[(0,K.jsx)($,{type:`button`,$theme:V,"aria-label":e(`card.importAria`),onClick:Xe,children:(0,K.jsx)(C,{theme:H,text:e(`card.importTooltip`),children:(0,K.jsx)(He,{size:16})})}),(0,K.jsx)($,{type:`button`,$theme:V,"aria-label":e(`card.exportAria`),onClick:Ze,children:(0,K.jsx)(C,{theme:H,text:e(`card.exportTooltip`),children:(0,K.jsx)(D,{size:16})})}),(0,K.jsx)($,{type:`button`,$theme:V,"aria-label":e(`card.helpAria`),onClick:()=>{F(!0)},children:(0,K.jsx)(C,{theme:H,text:e(`card.helpTooltip`),children:(0,K.jsx)(Be,{size:16})})})]})]}),(0,K.jsx)(Nn,{$theme:V,children:(0,K.jsx)(C,{theme:H,text:e(T?`card.closeTrayTooltip`:`card.openTrayTooltip`),children:(0,K.jsx)(Pn,{type:`button`,$theme:V,"aria-label":e(T?`card.closeTrayAria`:`card.openTrayAria`),onClick:()=>{E(e=>!e)},children:(0,K.jsx)(Oe,{size:22})})})}),(0,K.jsx)(Fn,{$theme:V,children:T?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(In,{$theme:V,children:(0,K.jsx)(Ln,{children:Le.length===0?(0,K.jsx)(En,{$theme:V,children:e(`card.noCollectionRecords`)}):Le.map(t=>(0,K.jsxs)(Rn,{$theme:V,children:[(0,K.jsxs)(zn,{children:[(0,K.jsxs)(Bn,{$theme:V,children:[t.favorite?(0,K.jsx)(Vn,{children:`❤`}):null,(0,K.jsx)(Hn,{children:t.name})]}),(0,K.jsxs)(Un,{children:[(0,K.jsx)(`span`,{children:`→`}),(0,K.jsx)(Gn,{$color:Pe(t.author),children:t.author}),(0,K.jsxs)(Wn,{$theme:V,title:t.source===`local`?e(`card.localSource`):t.source===`remote-user`?e(`card.myCloudSource`):e(`card.sharedSource`),children:[t.source===`local`?(0,K.jsx)(Ue,{size:11}):null,t.source===`remote-user`?(0,K.jsx)(Ve,{size:11}):null,t.source===`remote-shared`?(0,K.jsx)(qe,{size:11}):null]})]})]}),(0,K.jsxs)(Kn,{children:[(0,K.jsx)(qn,{type:`button`,$theme:V,$variant:`import`,onClick:()=>{it(t)},children:e(`card.importAction`)}),t.source===`remote-shared`?null:(0,K.jsx)(qn,{type:`button`,$theme:V,$variant:`delete`,onClick:()=>{at(t)},children:e(`card.deleteAction`)})]})]},`${t.source}:${t.id}`))})}),(0,K.jsxs)(Jn,{children:[(0,K.jsx)(Yn,{$theme:V,type:`text`,value:le,placeholder:e(`card.searchPlaceholder`),onChange:e=>{O(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),rt())}}),(0,K.jsx)(Xn,{type:`button`,$theme:V,"aria-label":e(`card.searchAria`),onClick:rt,children:(0,K.jsx)(Ke,{size:16})})]})]}):null})]}),P?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(cr,{onClick:Qe}),(0,K.jsxs)(lr,{$theme:V,onClick:e=>{e.stopPropagation()},children:[(0,K.jsx)(ur,{$theme:V,children:e(`card.importUnitDataTitle`)}),(0,K.jsx)(er,{$theme:V,value:ve,placeholder:e(`card.importPlaceholder`),onChange:e=>{I(e.target.value),L&&R(null)}}),L?(0,K.jsx)(rr,{$theme:V,children:L}):null,(0,K.jsxs)(dr,{children:[(0,K.jsx)(nr,{type:`button`,$theme:V,onClick:()=>{nt()},children:e(`card.aiTemplate`)}),(0,K.jsx)(tr,{type:`button`,$theme:V,onClick:Qe,children:e(`card.cancel`)}),(0,K.jsx)(tr,{type:`button`,$theme:V,$variant:`primary`,onClick:q,children:e(`card.importAction`)})]})]})]}):null,ge?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(cr,{onClick:()=>{F(!1)}}),(0,K.jsxs)(lr,{$theme:V,onClick:e=>{e.stopPropagation()},children:[(0,K.jsx)(ur,{$theme:V,children:e(`card.helpTitle`)}),(0,K.jsxs)(ir,{$theme:V,children:[(0,K.jsx)(ar,{$theme:V,children:e(`card.helpRollableValuesTitle`)}),(0,K.jsxs)(or,{children:[(0,K.jsx)(`li`,{children:e(`card.helpRollableValuesItem1`)}),(0,K.jsx)(`li`,{children:e(`card.helpRollableValuesItem2`)}),(0,K.jsx)(`li`,{children:e(`card.helpRollableValuesItem3`)})]}),(0,K.jsx)(ar,{$theme:V,children:e(`card.helpDiceChipsTitle`)}),(0,K.jsxs)(or,{children:[(0,K.jsx)(`li`,{children:e(`card.helpDiceChipsItem1`)}),(0,K.jsx)(`li`,{children:e(`card.helpDiceChipsItem2`)})]}),(0,K.jsx)(sr,{$theme:V,children:e(`card.helpMeleeAttackExample`)}),(0,K.jsx)(ar,{$theme:V,children:e(`card.helpUsingAttributesTitle`)}),(0,K.jsxs)(or,{children:[(0,K.jsx)(`li`,{children:e(`card.helpUsingAttributesItem1`)}),(0,K.jsx)(`li`,{children:e(`card.helpUsingAttributesItem2`)})]}),(0,K.jsx)(sr,{$theme:V,children:e(`card.helpDamageBidExample`)}),(0,K.jsx)(sr,{$theme:V,children:e(`card.helpDamageNameExample`)})]}),(0,K.jsx)(dr,{children:(0,K.jsx)(tr,{type:`button`,$theme:V,$variant:`primary`,onClick:()=>{F(!1)},children:e(`card.close`)})})]})]}):null]})},{})})}));