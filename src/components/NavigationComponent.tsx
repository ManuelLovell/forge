import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, Globe, Menu } from 'lucide-react';
import {
  MenuOverlay,
  MenuHeader,
  MenuTitle,
  MenuNav,
  NavButton,
  Backdrop,
  MenuButton,
  MenuButtonBuffer,
  MenuSubText,
  LocaleSwitcherWrap,
  LocaleButton,
  LocaleButtonLabel,
  LocaleButtonText,
  LocaleMenu,
  LocaleOption,
} from './NavigationStyles';
import { useForgeTheme } from '../helpers/ThemeContext';
import { useSceneStore } from '../helpers/BSCache';
import { type Locale, useTranslation } from '../i18n/Translation';

export type PageType = 'ForgeMain' | 'Settings' | 'Party' | 'ChatLog' | 'System';

interface NavigationProps {
  isOpen: boolean;
  currentPage: PageType;
  onToggle: () => void;
  onNavigate: (page: PageType) => void;
  canAccessInitiativeList?: boolean;
}

export const Navigation = ({ isOpen, currentPage, onToggle, onNavigate, canAccessInitiativeList = true }: NavigationProps) => {
  const { theme } = useForgeTheme();
  const { t, locale, setLocale, availableLocales } = useTranslation();
  const playerData = useSceneStore((state) => state.playerData);
  const isCurrentUserGm = String(playerData?.role || '').toUpperCase() === 'GM';
  const [isLocaleMenuOpen, setIsLocaleMenuOpen] = useState(false);
  const localeSwitcherRef = useRef<HTMLDivElement | null>(null);

  const localeLabels = useMemo<Record<Locale, string>>(() => ({
    en: t('common.locale.en'),
    es: t('common.locale.es'),
    fr: t('common.locale.fr'),
    de: t('common.locale.de'),
  }), [t]);

  useEffect(() => {
    if (!isOpen) {
      setIsLocaleMenuOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isLocaleMenuOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (localeSwitcherRef.current && !localeSwitcherRef.current.contains(event.target as Node)) {
        setIsLocaleMenuOpen(false);
      }
    };

    window.addEventListener('mousedown', handlePointerDown);
    return () => {
      window.removeEventListener('mousedown', handlePointerDown);
    };
  }, [isLocaleMenuOpen]);

  const handleLocaleSelect = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setIsLocaleMenuOpen(false);
  };

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
              <MenuTitle theme={theme}>{t('nav.title')}</MenuTitle>
              <LocaleSwitcherWrap ref={localeSwitcherRef}>
                <LocaleButton
                  theme={theme}
                  $open={isLocaleMenuOpen}
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={isLocaleMenuOpen}
                  aria-label={t('nav.languageSwitcher')}
                  onClick={() => setIsLocaleMenuOpen((previous) => !previous)}
                >
                  <LocaleButtonLabel>
                    <Globe size={16} />
                    <LocaleButtonText>{localeLabels[locale]}</LocaleButtonText>
                  </LocaleButtonLabel>
                  <ChevronDown size={8} />
                </LocaleButton>
                {isLocaleMenuOpen ? (
                  <LocaleMenu theme={theme} role="listbox" aria-label={t('nav.languageOptions')}>
                    {availableLocales.map((availableLocale) => (
                      <LocaleOption
                        key={availableLocale}
                        theme={theme}
                        $active={availableLocale === locale}
                        type="button"
                        role="option"
                        aria-selected={availableLocale === locale}
                        onClick={() => handleLocaleSelect(availableLocale)}
                      >
                        <span>{localeLabels[availableLocale]}</span>
                        {availableLocale === locale ? <Check size={14} /> : null}
                      </LocaleOption>
                    ))}
                  </LocaleMenu>
                ) : null}
              </LocaleSwitcherWrap>
            </MenuHeader>
            <MenuSubText theme={theme}>
              {t('nav.goodLuck')}
              <br/>
              <br/>
              {t('nav.questions')}
              <a href="https://discord.gg/Kh9hbHAZnX" target="_blank" rel="noreferrer"><br/>{t('nav.battleSystemDiscord')}</a>.
              <br/>
              <a href="https://www.patreon.com/c/battlesystem" target="_blank" rel="noreferrer"><br/>{t('nav.patreon')}</a>.
            </MenuSubText>

            {/* Navigation Links - Bottom Section */}
            <MenuNav theme={theme}>
              {canAccessInitiativeList && (
                <NavButton
                  theme={theme}
                  $isActive={currentPage === 'ForgeMain'}
                  onClick={() => onNavigate('ForgeMain')}
                >
                  {t('nav.main')}
                </NavButton>
              )}
              <NavButton
                theme={theme}
                $isActive={currentPage === 'Party'}
                onClick={() => onNavigate('Party')}
              >
                {t('nav.party')}
              </NavButton>
              <NavButton
                theme={theme}
                $isActive={currentPage === 'ChatLog'}
                onClick={() => onNavigate('ChatLog')}
              >
                {t('nav.systemLog')}
              </NavButton>
              {isCurrentUserGm && (
                <NavButton
                  theme={theme}
                  $isActive={currentPage === 'System'}
                  onClick={() => onNavigate('System')}
                >
                  {t('nav.system')}
                </NavButton>
              )}
              {isCurrentUserGm && (
                <NavButton
                  theme={theme}
                  $isActive={currentPage === 'Settings'}
                  onClick={() => onNavigate('Settings')}
                >
                  {t('nav.settings')}
                </NavButton>
              )}
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
