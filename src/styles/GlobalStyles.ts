import { createGlobalStyle } from 'styled-components'
import { globalStyles } from 'twin.macro'
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants'

interface GlobalStylesProps {
  theme: ForgeTheme;
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  ${globalStyles as any}
  
  :root {
    --forge-primary: ${props => props.theme.PRIMARY};
    --forge-offset: ${props => props.theme.OFFSET};
    --forge-background: ${props => props.theme.BACKGROUND};
    --forge-border: ${props => props.theme.BORDER};
  }

  /* Base styling for the entire app */
  body {
    background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.5)};
    color: ${props => props.theme.PRIMARY};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.PRIMARY};
  }

  /* Links */
  a {
    color: ${props => props.theme.OFFSET};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.3)};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => rgbaFromHex(props.theme.OFFSET, 0.5)};
    border-radius: 5px;
    
    &:hover {
      background: ${props => rgbaFromHex(props.theme.OFFSET, 0.7)};
    }
  }
  
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

  .tippy-box[data-theme~='dynamic'] {
    font-style: italic;
    background: ${props => props.theme.BACKGROUND};
    color: ${props => props.theme.PRIMARY};
    border: 1px solid ${props => props.theme.BORDER};
  }

  .tippy-box[data-theme~='dynamic'][data-placement^='top']>.tippy-arrow::before {
    border-top-color: ${props => props.theme.BACKGROUND};
  }

  .tippy-box[data-theme~='dynamic'][data-placement^='bottom']>.tippy-arrow::before {
    border-bottom-color: ${props => props.theme.BACKGROUND};
  }

  .tippy-box[data-theme~='dynamic'][data-placement^='left']>.tippy-arrow::before {
    border-left-color: ${props => props.theme.BACKGROUND};
  }

  .tippy-box[data-theme~='dynamic'][data-placement^='right']>.tippy-arrow::before {
    border-right-color: ${props => props.theme.BACKGROUND};
  }
`;

export default GlobalStyles;