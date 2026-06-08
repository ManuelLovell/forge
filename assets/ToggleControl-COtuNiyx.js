import{f as e,p as t,t as n}from"./styled-components.browser.esm-UVFsQtUm.js";import{t as r}from"./Logger-C94eKphQ.js";import{u as i}from"./main-D4l1PQRI.js";var a=t(),o=n.button`
  ${{position:`relative`,display:`inline-flex`,height:`1.5rem`,width:`3rem`,alignItems:`center`,borderRadius:`9999px`,transitionProperty:`background-color, border-color, color, fill, stroke`}}
  background-color: ${t=>t.$isOn?e(t.theme.OFFSET,.8):e(t.theme.BORDER,.3)};
  border: 2px solid ${e=>e.theme.BORDER};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${t=>e(t.theme.OFFSET,.3)};
  }
  
  &::after {
    content: '';
    ${{display:`inline-block`,height:`1rem`,width:`1rem`,transform:`translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,borderRadius:`9999px`,transitionProperty:`transform`}}
    background-color: ${e=>e.theme.PRIMARY};
    ${e=>e.$isOn?`transform: translateX(1.375rem);`:`transform: translateX(0.25rem);`}
  }
`;const s=({label:e,isOn:t,onChange:n})=>{let{theme:s}=i();return(0,a.jsx)(o,{theme:s,$isOn:t,onClick:()=>{let i=!t;r.log(`${e}: ${i}`),n(i)},role:`switch`,"aria-checked":t,"aria-label":e})};export{s as t};