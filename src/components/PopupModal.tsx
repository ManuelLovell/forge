import React from 'react';
import styled from 'styled-components';
import { useForgeTheme } from '../helpers/ThemeContext';
import { ForgeTheme } from '../helpers/ThemeConstants';

interface PopupModalProps {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  minWidth?: string;
  maxWidth?: string;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;

const ModalContainer = styled.div<{ theme: ForgeTheme; $minWidth?: string; $maxWidth?: string }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.BACKGROUND};
  border: 3px solid ${props => props.theme.BORDER};
  border-radius: 8px;
  padding: 25px;
  z-index: 10000;
  min-width: ${props => props.$minWidth || '300px'};
  max-width: ${props => props.$maxWidth || '500px'};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
`;

const ModalTitle = styled.h3<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  margin: 0 0 15px 0;
  font-size: 18px;
`;

const ModalBody = styled.div`
  margin: 0 0 20px 0;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

export const PopupModal: React.FC<PopupModalProps> = ({
  isOpen,
  title,
  onClose,
  children,
  actions,
  closeOnOverlayClick = true,
  minWidth,
  maxWidth,
}) => {
  const { theme } = useForgeTheme();

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <ModalOverlay onClick={closeOnOverlayClick ? onClose : undefined} />
      <ModalContainer
        theme={theme}
        $minWidth={minWidth}
        $maxWidth={maxWidth}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <ModalTitle theme={theme}>{title}</ModalTitle>}
        <ModalBody>{children}</ModalBody>
        {actions && <ModalActions>{actions}</ModalActions>}
      </ModalContainer>
    </>
  );
};

export default PopupModal;
