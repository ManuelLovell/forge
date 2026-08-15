import{f as e,p as t,t as n}from"./styled-components.browser.esm-DHy5LH3R.js";import{t as r}from"./Logger-DX4jZ06e.js";import{n as i}from"./forgeMetrics-DtV4y_UX.js";import{f as a,u as o}from"./main-BeYt6vd0.js";var s=t(),c=n.button`
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
`;const l=({label:e,isOn:t,onChange:n})=>{let{theme:l}=o(),u=a(e=>e.playerData?.id??null);return(0,s.jsx)(c,{theme:l,$isOn:t,onClick:()=>{let a=!t;r.log(`${e}: ${a}`),i({eventName:`toggle_used`,eventCategory:`ui`,playerId:u,success:!0,metadata:{label:e,next_value:a}}),n(a)},role:`switch`,"aria-checked":t,"aria-label":e})};export{l as t};