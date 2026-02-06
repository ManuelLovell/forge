import { AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import {
  MenuOverlay,
  MenuHeader,
  MenuTitle,
  MenuInfo,
  MenuSpacer,
  MenuNav,
  NavButton,
  Backdrop,
  MenuButton,
  MenuButtonBuffer
} from './NavigationStyles';
import { useForgeTheme } from '../helpers/ThemeContext';

export type PageType = 'ForgeMain' | 'Settings' | 'Party' | 'ChatLog' | 'System';

interface NavigationProps {
  isOpen: boolean;
  currentPage: PageType;
  onToggle: () => void;
  onNavigate: (page: PageType) => void;
}

export const Navigation = ({ isOpen, currentPage, onToggle, onNavigate }: NavigationProps) => {
  const { theme } = useForgeTheme();

  return (
    <>
      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            theme={theme}
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{ boxShadow: '4px 0 12px rgba(0, 0, 0, 0.15)' }}
          >
            {/* Top Section - General Info */}
            <MenuHeader theme={theme}>
              <MenuTitle theme={theme}>Forge!</MenuTitle>
              <MenuInfo theme={theme}>Alpha Testing!</MenuInfo>
            </MenuHeader>

            {/* Spacer */}
            <MenuSpacer />

            {/* Navigation Links - Bottom Section */}
            <MenuNav theme={theme}>
              <NavButton
                theme={theme}
                $isActive={currentPage === 'ForgeMain'}
                onClick={() => onNavigate('ForgeMain')}
              >
                Main
              </NavButton>
              <NavButton
                theme={theme}
                $isActive={currentPage === 'Party'}
                onClick={() => onNavigate('Party')}
              >
                Party
              </NavButton>
              <NavButton
                theme={theme}
                $isActive={currentPage === 'ChatLog'}
                onClick={() => onNavigate('ChatLog')}
              >
                System Log
              </NavButton>
              <NavButton
                theme={theme}
                $isActive={currentPage === 'System'}
                onClick={() => onNavigate('System')}
              >
                System
              </NavButton>
              <NavButton
                theme={theme}
                $isActive={currentPage === 'Settings'}
                onClick={() => onNavigate('Settings')}
              >
                Settings
              </NavButton>
            </MenuNav>
          </MenuOverlay>
        )}
      </AnimatePresence>

      {/* Overlay backdrop */}
      {isOpen && <Backdrop onClick={onToggle} />}

      {/* Menu Button */}
      <MenuButtonBuffer>
        <MenuButton theme={theme} onClick={onToggle}>
          <Menu size={24} />
        </MenuButton>
      </MenuButtonBuffer>
    </>
  );
};
