import tw from 'twin.macro';
import styled from "styled-components";
import { motion } from 'framer-motion';

export const AppContainer = tw.div`
  flex flex-col h-screen relative
`;

export const ContentArea = tw.div`
  flex-1 overflow-auto
`;

export const MenuOverlay = tw(motion.div)`
  fixed top-0 left-0 bottom-0 w-[150px]
  flex flex-col
  rounded-r-lg
  z-[1000]
`;

export const MenuHeader = tw.div`
  p-5 border-b border-gray-300
  flex-none
`;

export const MenuTitle = tw.h2`
  m-0 mb-2 text-lg
`;

export const MenuInfo = tw.p`
  m-0 text-sm text-secondary-200
`;

export const MenuSpacer = tw.div`
  flex-1
`;

export const MenuNav = tw.nav`
  pt-2 pb-[70px] px-0 border-t border-gray-300
  flex-none
`;

export const NavButton = styled.button<{ $isActive: boolean }>`
  ${tw`w-full py-3 px-5 border-none text-left cursor-pointer text-[15px] transition-colors`}
  ${(props) => props.$isActive 
    ? tw`bg-gray-800 font-semibold` 
    : tw`bg-transparent font-normal`}
`;

export const Backdrop = tw.div`
  fixed top-0 left-0 right-0 bottom-0
  bg-black-60
  z-[999]
`;

export const MenuButton = tw.button`
  fixed
  w-10 h-10
  rounded-full
  border text-white
  cursor-pointer
  flex items-center justify-center
  shadow-md
  z-[1001]
`;
