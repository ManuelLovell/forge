import tw from 'twin.macro';
import styled from "styled-components";
import { motion } from 'framer-motion';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';

export const AppContainer = tw.div`
  flex flex-col h-screen relative
`;

export const ContentArea = styled.div<{ theme: ForgeTheme; $backgroundUrl?: string }>`
  ${tw`flex-1 overflow-auto relative`}
  
  ${props => props.$backgroundUrl && `
    &::before {
      content: '';
      position: fixed;
      height: 350px;
      width: 350px;
      right: 0;
      bottom: 50px;
      background-image: url(${props.$backgroundUrl});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom right;
      opacity: 0.3;
      pointer-events: none;
      z-index: -1;
    }
  `}
`;

export const MenuOverlay = styled(motion.div)<{ theme: ForgeTheme }>`
  ${tw`fixed top-0 left-0 bottom-0 w-[150px] flex flex-col rounded-r-lg z-[1000] backdrop-blur`}
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.50)};
  border: 2px solid ${props => props.theme.BORDER};
`;

export const MenuHeader = styled.div<{ theme: ForgeTheme }>`
  ${tw`p-5 flex-none`}
  border-bottom: 1px solid ${props => props.theme.BORDER};
  background-color: ${props => props.theme.OFFSET};
`;

export const MenuTitle = styled.h2<{ theme: ForgeTheme }>`
  ${tw`m-0 mb-2 text-lg`}
  color: ${props => props.theme.PRIMARY};
`;

export const MenuInfo = styled.p<{ theme: ForgeTheme }>`
  ${tw`m-0 text-sm`}
  color: ${props => rgbaFromHex(props.theme.PRIMARY, 0.7)};
`;

export const MenuSpacer = tw.div`
  flex-1
`;

export const MenuNav = styled.nav<{ theme: ForgeTheme }>`
  ${tw`pt-2 pb-[50px] px-0 flex-none`}
  border-top: 1px solid ${props => props.theme.BORDER};
`;

export const NavButton = styled.button<{ $isActive: boolean; theme: ForgeTheme }>`
  ${tw`w-full py-3 px-5 border-none text-left cursor-pointer text-[15px] transition-colors`}
  background-color: ${props => props.$isActive 
    ? props.theme.OFFSET 
    : 'transparent'};
  color: ${props => props.theme.PRIMARY};
  font-weight: ${props => props.$isActive ? 600 : 400};
  
  &:hover {
    background-color: ${props => rgbaFromHex(props.theme.OFFSET, 0.5)};
  }
`;

export const Backdrop = tw.div`
  fixed top-0 left-0 right-0 bottom-0
  bg-black-60
  z-[999]
`;

export const MenuButtonBuffer = tw.div`
  w-12 h-12 backdrop-blur rounded-full fixed z-[1000] flex items-center justify-center bottom-[2px] left-[2px]
`;

export const MenuButton = styled.button<{ theme: ForgeTheme }>`
  ${tw`fixed w-10 h-10 rounded-full cursor-pointer flex items-center justify-center shadow-md z-[1001]`}
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.75)};
  border: 2px solid ${props => props.theme.BORDER};
  color: ${props => props.theme.PRIMARY};
`;
