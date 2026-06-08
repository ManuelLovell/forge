import styled from 'styled-components';
import { ArrowRight, Minus, Plus, X } from 'lucide-react';
import { rgbaFromHex } from '../helpers/ThemeConstants';
import { useTranslation } from '../i18n/Translation';
import type { RollResolutionMode } from '../helpers/rollResolutionStore';

export interface RollResolutionThemeData {
  primary: string;
  offset: string;
  background: string;
  border: string;
}

interface RollResolutionPopupProps {
  theme: RollResolutionThemeData;
  isOpen: boolean;
  isProcessMode: boolean;
  total: number | null;
  mode: RollResolutionMode;
  onModeChange: (mode: RollResolutionMode) => void;
  onApply: () => void;
  onExitProcessMode: () => void;
  onClose: () => void;
}

const Root = styled.div<{ $theme: RollResolutionThemeData }>`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  color: ${props => props.$theme.primary};
  border: 2px solid ${props => props.$theme.border};
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: none !important;
  background-size: initial !important;
  background-position: initial !important;
  background-repeat: no-repeat !important;
  backdrop-filter: blur(6px);
`;

const Content = styled.div<{ $theme: RollResolutionThemeData; $compact: boolean }>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${props => props.$compact ? '8px 8px 6px' : '10px 8px 8px'};
  background: ${props => rgbaFromHex(props.$theme.background, 0.48)};
  background-image: none !important;
  background-size: initial !important;
  background-position: initial !important;
  background-repeat: no-repeat !important;
  display: flex;
  flex-direction: column;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 0;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProcessToggle = styled.button<{ $theme: RollResolutionThemeData }>`
  padding: 0;
  border: none;
  background: none;
  color: ${props => props.$theme.primary};
  font-size: 14px;
  font-weight: 700;
  line-height: 1.1;
  cursor: pointer;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CloseButton = styled.button<{ $theme: RollResolutionThemeData }>`
  width: 22px;
  height: 22px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  background: ${props => rgbaFromHex(props.$theme.background, 0.82)};
  color: ${props => props.$theme.primary};
  cursor: pointer;

  &:hover {
    background: ${props => rgbaFromHex(props.$theme.offset, 0.5)};
  }
`;

const ModeRow = styled.div<{ $theme: RollResolutionThemeData }>`
  display: flex;
  gap: 6px;
  margin-top: 2px;
`;

const ModeButton = styled.button<{ $theme: RollResolutionThemeData; $active: boolean }>`
  display: inline-flex;
  flex: 1 1 0;
  min-width: 0;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 4px;
  min-height: 34px;
  padding: 6px 6px;
  border-radius: 12px;
  border: 1px solid ${props => props.$theme.border};
  background: ${props => props.$active
    ? rgbaFromHex(props.$theme.offset, 0.68)
    : rgbaFromHex(props.$theme.background, 0.78)};
  color: ${props => props.$theme.primary};
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TotalValue = styled.div<{ $theme: RollResolutionThemeData }>`
  margin-top: 2px;
  margin-bottom: 2px;
  text-align: center;
  color: ${props => props.$theme.primary};
  font-size: 40px;
  font-weight: 800;
  line-height: 1;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HintText = styled.p<{ $theme: RollResolutionThemeData }>`
  margin: 6px 0 0;
  text-align: left;
  font-size: 12px;
  color: ${props => rgbaFromHex(props.$theme.primary, 0.75)};
`;

const ApplyButton = styled.button<{ $theme: RollResolutionThemeData }>`
  width: 100%;
  box-sizing: border-box;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 2px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.offset, 0.72)};
  color: ${props => props.$theme.primary};
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  overflow: hidden;
`;

export const RollResolutionPopup = ({
  theme,
  isOpen,
  isProcessMode,
  total,
  mode,
  onModeChange,
  onApply,
  onExitProcessMode,
  onClose,
}: RollResolutionPopupProps) => {
  const { t } = useTranslation();

  if (!isOpen || total === null) {
    return null;
  }

  return (
    <Root $theme={theme}>
      <Content $theme={theme} $compact={isProcessMode}>
        <HeaderRow>
          {isProcessMode ? (
            <ProcessToggle type="button" $theme={theme} onClick={onExitProcessMode}>
              {t('rollResolution.applyResult')}
            </ProcessToggle>
          ) : (
            <Title>{t('rollResolution.title')}</Title>
          )}
          <CloseButton type="button" $theme={theme} aria-label={t('rollResolution.close')} onClick={onClose}>
            <X size={14} />
          </CloseButton>
        </HeaderRow>
        {isProcessMode ? (
          <HintText $theme={theme}>{t('rollResolution.processHint')}</HintText>
        ) : (
          <>
            <ModeRow $theme={theme}>
              <ModeButton type="button" $theme={theme} $active={mode === 'subtract'} onClick={() => onModeChange('subtract')}>
                <Minus size={14} />
                {t('rollResolution.modeSubtract')}
              </ModeButton>
              <ModeButton type="button" $theme={theme} $active={mode === 'add'} onClick={() => onModeChange('add')}>
                <Plus size={14} />
                {t('rollResolution.modeAdd')}
              </ModeButton>
            </ModeRow>
            <TotalValue $theme={theme}>{Math.abs(total)}</TotalValue>
            <ApplyButton type="button" $theme={theme} aria-label={t('rollResolution.apply')} onClick={onApply}>
              <ArrowRight size={18} />
            </ApplyButton>
          </>
        )}
      </Content>
    </Root>
  );
};