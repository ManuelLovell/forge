import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useSceneStore } from '../helpers/BSCache';
import { useForgeTheme } from '../helpers/ThemeContext';
import { UnitConstants } from '../interfaces/MetadataKeys';
import { PageContainer, PageTitle } from './SharedStyledComponents';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';

const PartyList = styled.div<{ theme: ForgeTheme }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PartyItem = styled.div<{ theme: ForgeTheme }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  border: 2px solid ${props => props.theme.BORDER};
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.35)};
`;

const TokenImage = styled.img<{ theme: ForgeTheme }>`
  width: 40px;
  height: 40px;
  min-width: 40px;
  object-fit: cover;
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.6)};
`;

const UnitName = styled.span<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`;

const EmptyState = styled.p<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  margin: 0;
`;

export const PartyPage = () => {
  const { theme } = useForgeTheme();
  const items = useSceneStore((state) => state.items);

  const partyItems = items.filter((item) => item.metadata[UnitConstants.IN_PARTY] === true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={{ height: '100%' }}
    >
      <PageContainer theme={theme}>
        <PageTitle theme={theme}>Party</PageTitle>
        {partyItems.length === 0 ? (
          <EmptyState theme={theme}>
            No one is in the Party.  Add a unit using the ContextMenu on the token.
          </EmptyState>
        ) : (
          <PartyList theme={theme}>
            {partyItems.map((item) => {
              const tokenUrl = (item as any).image?.url as string | undefined;
              const unitName = (item.metadata[UnitConstants.UNIT_NAME] as string) || item.name || 'Unknown';

              return (
                <PartyItem key={item.id} theme={theme}>
                  <TokenImage
                    theme={theme}
                    src={tokenUrl || '/logo.png'}
                    alt={unitName}
                  />
                  <UnitName theme={theme} title={unitName}>{unitName}</UnitName>
                </PartyItem>
              );
            })}
          </PartyList>
        )}
      </PageContainer>
    </motion.div>
  );
};