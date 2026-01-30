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
  MenuButton
} from './NavigationStyles';

export type PageType = 'ForgeMain' | 'Settings' | 'Party' | 'ChatLog' | 'System';

interface NavigationProps {
  isOpen: boolean;
  currentPage: PageType;
  onToggle: () => void;
  onNavigate: (page: PageType) => void;
}

export const Navigation = ({ isOpen, currentPage, onToggle, onNavigate }: NavigationProps) => {
  return (
    <>
      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{ boxShadow: '4px 0 12px rgba(0, 0, 0, 0.15)', backgroundColor: 'rgba(30, 34, 49)' }}
          >
            {/* Top Section - General Info */}
            <MenuHeader>
              <MenuTitle>Forge!</MenuTitle>
              <MenuInfo>Alpha Testing!</MenuInfo>
            </MenuHeader>

            {/* Spacer */}
            <MenuSpacer />

            {/* Navigation Links - Bottom Section */}
            <MenuNav>
              <NavButton
                $isActive={currentPage === 'ForgeMain'}
                onClick={() => onNavigate('ForgeMain')}
              >
                Main
              </NavButton>
              <NavButton
                $isActive={currentPage === 'Party'}
                onClick={() => onNavigate('Party')}
              >
                Party
              </NavButton>
              <NavButton
                $isActive={currentPage === 'ChatLog'}
                onClick={() => onNavigate('ChatLog')}
              >
                Chat Log
              </NavButton>
              <NavButton
                $isActive={currentPage === 'System'}
                onClick={() => onNavigate('System')}
              >
                System
              </NavButton>
              <NavButton
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
      <MenuButton onClick={onToggle} style={{ bottom: '0.75rem', left: '0.75rem' }}>
        <Menu size={24} />
      </MenuButton>
    </>
  );
};
