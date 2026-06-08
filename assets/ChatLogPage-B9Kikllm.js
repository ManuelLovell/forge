import"./tslib.es6-C783ynKN.js";import{S as e,p as t,t as n}from"./styled-components.browser.esm-UVFsQtUm.js";import"./Constants-vXYz8c6e.js";import{t as r}from"./Translation-K1AcF_l-.js";import{d as i,l as a,u as o}from"./main-D4l1PQRI.js";import{a as s}from"./SharedStyledComponents-D81OPnYe.js";var c=e(),l=t(),u=n.div`
  ${{display:`flex`,height:`100%`,flexDirection:`column`,padding:`1rem`}}
`,d=n.div`
  ${{flex:`1 1 0%`,overflowY:`auto`,borderRadius:`0.5rem`,borderWidth:`2px`,"--tw-border-opacity":`1`,borderColor:`rgb(255 255 255 / var(--tw-border-opacity, 1))`,padding:`0.5rem`}}
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  margin: 10px;
  white-space: break-spaces;
  word-wrap: break-word;
  margin-bottom: 50px;
`,f=n.div`
  ${{marginBottom:`0.5rem`,textAlign:`left`}}
`,p=n.span`
  ${{marginRight:`0.5rem`,fontSize:`0.75rem`,"--tw-text-opacity":`1`,color:`rgb(203 213 224 / var(--tw-text-opacity, 1))`}}
`,m=n.span`
  ${{fontSize:`0.875rem`,"--tw-text-opacity":`1`,color:`rgb(255 255 255 / var(--tw-text-opacity, 1))`}}
`;const h=()=>{let e=i(e=>e.messages),t=(0,c.useRef)(null),{theme:n}=o(),{t:h}=r();return(0,c.useEffect)(()=>{t.current?.scrollIntoView({behavior:`smooth`})},[e]),(0,l.jsx)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},style:{height:`100%`},children:(0,l.jsxs)(u,{children:[(0,l.jsx)(s,{theme:n,children:h(`nav.systemLog`)}),(0,l.jsxs)(d,{children:[e.map(e=>(0,l.jsxs)(f,{children:[(0,l.jsx)(p,{children:e.timestamp}),(0,l.jsx)(m,{children:e.text})]},e.id)),(0,l.jsx)(`div`,{ref:t})]})]})})};export{h as ChatLogPage};