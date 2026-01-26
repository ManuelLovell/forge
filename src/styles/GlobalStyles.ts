import { createGlobalStyle } from 'styled-components'
import { globalStyles } from 'twin.macro'

const GlobalStyles = createGlobalStyle(globalStyles as any, `
    /* Below animations are for modal created using React-Modal */
        .ReactModal__Overlay {
        transition: transform 300ms ease-in-out;
        transition-delay: 100ms;
        transform: scale(0);
    }
    .ReactModal__Overlay--after-open{
        transform: scale(1);
    }
    .ReactModal__Overlay--before-close{
        transform: scale(0);
    }

    .tippy-box[data-theme~='battlesystem'] {
        font-style: italic;
        background: #c53030;
        color: white;
        border: 1px solid maroon;
    }

    .tippy-box[data-theme~='battlesystem'][data-placement^='top']>.tippy-arrow::before {
        border-top-color: #c53030;
    }

    .tippy-box[data-theme~='battlesystem'][data-placement^='bottom']>.tippy-arrow::before {
        border-bottom-color: red;
    }

    .tippy-box[data-theme~='battlesystem'][data-placement^='left']>.tippy-arrow::before {
        border-left-color: red;
    }

    .tippy-box[data-theme~='battlesystem'][data-placement^='right']>.tippy-arrow::before {
        border-right-color: red;
    }
`);

export default GlobalStyles;