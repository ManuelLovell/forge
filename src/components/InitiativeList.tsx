import React, { useState, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import OBR from '@owlbear-rodeo/sdk';
import { useSystemData } from '../helpers/useSystemData';
import { useForgeTheme } from '../helpers/ThemeContext';
import { useSceneStore } from '../helpers/BSCache';
import { SettingsConstants } from '../interfaces/SettingsKeys.d';
import { ListLayoutComponent } from '../interfaces/SystemResponse';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';
import { 
  Heart, Shield, Sun, Award, Target, Users, Star, 
  Zap, Clock, Eye, Layers, BookOpen 
} from 'lucide-react';

// Internal state model
interface ListColumn {
  id: string;
  type: string;
  name?: string;
  useIcon?: boolean;
  iconType?: string;
  description?: string;
  styles?: {
    bidList?: string[];
    dividers?: string[];
    labelIcon?: string;
    labelMode?: 'blank' | 'name' | 'abbr' | 'icon';
    labelName?: string;
    description?: string;
    styleDesign?: 'default' | 'dashed' | 'shadow' | 'zigzag' | 'ridge' | 'pulse';
    specialType?: 'effects' | 'elevation';
  };
}

interface Unit {
  id: string;
  initiative: number;
  name: string;
  elevation: number;
  attributes: Record<string, any>;
}

// Icon mapping
const iconMap: Record<string, React.FC<any>> = {
  heart: Heart,
  shield: Shield,
  sun: Sun,
  award: Award,
  target: Target,
  users: Users,
  star: Star,
  zap: Zap,
  clock: Clock,
  eye: Eye,
  layers: Layers,
  book: BookOpen,
};

// Mock data for testing (5 units)
const mockUnits: Unit[] = [
  {
    id: '1',
    initiative: 20,
    name: 'Goblin Archer',
    elevation: 0,
    attributes: {
      'c2b9330e-1741-4012-bd98-b9bbeb611b39': '12',
      '858e3f2f-415f-4da2-a173-8de83f6f04b8': '15',
      '28348ced-5d91-4178-96ac-18e99c89c877': '13',
      'fb4a263c-835a-4e93-a4a4-a89915c4c906': '5',
      '31d4c763-9afa-4fdb-9430-80dab9914493': [
        { name: 'Multiattack', description: 'The goblin makes two attacks.' },
        { name: 'Shortbow', description: '+4 to hit, 1d6+2 damage' }
      ]
    }
  },
  {
    id: '2',
    initiative: 2,
    name: 'Knight',
    elevation: 0,
    attributes: {
      'c2b9330e-1741-4012-bd98-b9bbeb611b39': '52',
      '858e3f2f-415f-4da2-a173-8de83f6f04b8': '52',
      '28348ced-5d91-4178-96ac-18e99c89c877': '18',
      'fb4a263c-835a-4e93-a4a4-a89915c4c906': '0',
      '31d4c763-9afa-4fdb-9430-80dab9914493': [
        { name: 'Greatsword', description: '+5 to hit, 2d6+3 damage' },
        { name: 'Leadership', description: 'Allies within 30ft gain +1 to attack rolls' }
      ]
    }
  },
  {
    id: '3',
    initiative: 5,
    name: 'Fire Elemental',
    elevation: 0,
    attributes: {
      'c2b9330e-1741-4012-bd98-b9bbeb611b39': '90',
      '858e3f2f-415f-4da2-a173-8de83f6f04b8': '102',
      '28348ced-5d91-4178-96ac-18e99c89c877': '13',
      'fb4a263c-835a-4e93-a4a4-a89915c4c906': '0',
      '31d4c763-9afa-4fdb-9430-80dab9914493': [
        { name: 'Touch', description: '+6 to hit, 2d6 fire damage' }
      ]
    }
  },
  {
    id: '4',
    initiative: 12,
    name: 'Orc Warrior',
    elevation: 0,
    attributes: {
      'c2b9330e-1741-4012-bd98-b9bbeb611b39': '15',
      '858e3f2f-415f-4da2-a173-8de83f6f04b8': '15',
      '28348ced-5d91-4178-96ac-18e99c89c877': '13',
      'fb4a263c-835a-4e93-a4a4-a89915c4c906': '0',
      '31d4c763-9afa-4fdb-9430-80dab9914493': [
        { name: 'Greataxe', description: '+5 to hit, 1d12+3 damage' }
      ]
    }
  },
  {
    id: '5',
    initiative: 18,
    name: 'Wizard',
    elevation: 0,
    attributes: {
      'c2b9330e-1741-4012-bd98-b9bbeb611b39': '38',
      '858e3f2f-415f-4da2-a173-8de83f6f04b8': '38',
      '28348ced-5d91-4178-96ac-18e99c89c877': '12',
      'fb4a263c-835a-4e93-a4a4-a89915c4c906': '8',
      '31d4c763-9afa-4fdb-9430-80dab9914493': [
        { name: 'Fireball', description: 'DC 15, 8d6 fire damage' },
        { name: 'Magic Missile', description: 'Auto-hit, 3d4+3 force damage' },
        { name: 'Shield', description: 'Reaction, +5 AC until start of next turn' }
      ]
    }
  },
];

// Styled components
const ListContainer = styled.div`
  padding: 2px;
  width: 100%;
`;

const ListTitle = styled.h1<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`;

const TableWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: auto;
`;

const Table = styled.table<{ theme: ForgeTheme }>`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
`;

const TableHead = styled.thead<{ theme: ForgeTheme }>`
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.35)};
`;

const HeaderRow = styled.tr``;

const HeaderCell = styled.th<{ theme: ForgeTheme }>`
  color: ${props => props.theme.OFFSET};
  padding-bottom: 6px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  font-variant: small-caps;
  border-bottom: 2px solid ${props => props.theme.BORDER};
  
  svg {
    width: 20px;
    height: 20px;
    display: inline-block;
  }
`;

const TableBody = styled.tbody``;

const DataRow = styled.tr`
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &:not(:last-child) td {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const DataCell = styled.td<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`;

const InitiativeCell = styled(DataCell)<{ theme: ForgeTheme }>`
  font-weight: 700;
  font-size: 18px;
  color: ${props => props.theme.OFFSET};
  min-width: 60px;
`;

const InitiativeInput = styled.input<{ theme: ForgeTheme }>`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 4px;
  color: ${props => props.theme.OFFSET};
  padding: 2px 4px;
  font-size: 18px;
  font-weight: 700;
  width: 50px;
  text-align: center;
  backdrop-filter: blur(12px);
  
  /* Remove spinner controls */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
  }
`;

const NameCell = styled(DataCell)<{ theme: ForgeTheme }>`
  text-align: left;
  font-weight: 500;
  min-width: 150px;
`;

const ValueInput = styled.input<{ $small?: boolean; theme: ForgeTheme }>`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 4px;
  color: ${props => props.theme.PRIMARY};
  padding: 2px 4px;
  font-size: ${props => props.$small ? '12px' : '14px'};
  width: ${props => props.$small ? '40px' : '60px'};
  text-align: center;
  backdrop-filter: blur(12px);
  
  /* Remove spinner controls */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
  }
`;

const Divider = styled.span<{ theme: ForgeTheme }>`
  margin: 0 2px;
  color: ${props => props.theme.OFFSET};
  font-weight: 500;
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const ActionButton = styled.button<{ theme: ForgeTheme }>`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 4px;
  color: ${props => props.theme.OFFSET};
  padding: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${props => props.theme.OFFSET};
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const CheckboxInput = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin: 0 4px;
`;

const DividerCell = styled(DataCell)<{ $style?: string; theme: ForgeTheme }>`
  width: 24px;
  padding: 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background: ${props => {
      switch(props.$style) {
        case 'dashed': return `repeating-linear-gradient(to bottom, ${props.theme.BORDER} 0, ${props.theme.BORDER} 5px, transparent 5px, transparent 10px)`;
        case 'shadow': return 'none';
        case 'zigzag': return 'none';
        case 'ridge': return 'none';
        case 'pulse': return props.theme.OFFSET;
        default: return props.theme.BORDER;
      }
    }};
    ${props => props.$style === 'shadow' && `box-shadow: 0 0 10px ${props.theme.OFFSET};`}
    ${props => props.$style === 'pulse' && `animation: pulse 2s ease-in-out infinite;`}
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
`;

const ElevationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  span {
    font-weight: 600;
  }
`;

// Deserialization function
const deserializeListLayout = (
  layout: ListLayoutComponent[]
): ListColumn[] => {
  const defaultColumns: ListColumn[] = [
    { id: crypto.randomUUID(), type: 'initiative' },
    { id: crypto.randomUUID(), type: 'name' }
  ];

  if (!layout || layout.length === 0) {
    return defaultColumns;
  }

  // Sort by col property
  const sorted = [...layout].sort((a, b) => a.col - b.col);

  // Map to internal structure
  const additionalColumns = sorted.map(col => ({
    id: col.id,
    type: col.type,
    name: col.styles?.labelName,
    useIcon: col.styles?.labelMode === 'icon',
    iconType: col.styles?.labelIcon,
    description: col.styles?.description,
    styles: col.styles,
  }));

  return [...defaultColumns, ...additionalColumns];
};

export const InitiativeList: React.FC = () => {
  const { theme } = useForgeTheme();
  const { listLayout, isLoading } = useSystemData();
  const roomMetadata = useSceneStore((state) => state.roomMetadata);
  const sceneMetadata = useSceneStore((state) => state.sceneMetadata);
  const [units, setUnits] = useState<Unit[]>(mockUnits);
  const [listColumns, setListColumns] = useState<ListColumn[]>([]);
  const tableRef = useRef<HTMLTableElement>(null);

  // Control for setting the data to Room or to Scene
  const dataStoredinRoom = false; // For now, all settings are saved to Scene level
  const storageContainer = dataStoredinRoom ? roomMetadata : sceneMetadata;

  // Get reverse initiative setting
  const reverseInitiative = storageContainer[SettingsConstants.REVERSE_INITIATIVE] as boolean || false;

  // Sort units by initiative and then alphabetically by name
  const sortedUnits = useMemo(() => {
    return [...units].sort((a, b) => {
      // First, sort by initiative
      if (a.initiative !== b.initiative) {
        // If reverse initiative is on, sort ascending (lowest first)
        // Otherwise, sort descending (highest first)
        return reverseInitiative 
          ? a.initiative - b.initiative 
          : b.initiative - a.initiative;
      }
      // If initiative is the same, sort alphabetically by name
      return a.name.localeCompare(b.name);
    });
  }, [units, reverseInitiative]);

  // Handler for updating initiative
  const handleInitiativeChange = (unitId: string, newInitiative: string) => {
    const initiativeValue = parseInt(newInitiative) || 0;
    setUnits(prevUnits =>
      prevUnits.map(unit =>
        unit.id === unitId ? { ...unit, initiative: initiativeValue } : unit
      )
    );
    // TODO: Update in cache/metadata
  };

  // Deserialize list layout on mount or when listLayout changes
  useEffect(() => {
    if (!isLoading) {
      const columns = deserializeListLayout(listLayout);
      setListColumns(columns);
    }
  }, [listLayout, isLoading]);

  // Adjust window width based on table width
  useEffect(() => {
    if (tableRef.current && listColumns.length > 0) {
      // Wait a bit for the table to fully render
      setTimeout(() => {
        if (tableRef.current) {
          const tableWidth = tableRef.current.offsetWidth;
          // Add padding (10px on each side = 20px total) plus a bit extra for scrollbar
          const totalWidth = tableWidth + 40;
          // Set width, but cap at a reasonable maximum
          const finalWidth = Math.min(totalWidth, 800);
          OBR.action.setWidth(finalWidth);
        }
      }, 100);
    }
  }, [listColumns, units]);

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    const IconComponent = iconMap[iconName.toLowerCase()];
    return IconComponent ? <IconComponent /> : null;
  };

  const renderHeader = (col: ListColumn) => {
    if (col.type === 'initiative') return <Users />;
    if (col.type === 'name') return 'Name';
    if (col.type === 'divider-column') return null;
    
    if (col.useIcon && col.iconType) {
      return getIcon(col.iconType);
    }
    
    return col.name || col.type;
  };

  const renderCell = (col: ListColumn, unit: Unit) => {
    switch (col.type) {
      case 'initiative':
        return (
          <InitiativeCell theme={theme}>
            <InitiativeInput
              theme={theme}
              type="number"
              value={unit.initiative}
              onChange={(e) => handleInitiativeChange(unit.id, e.target.value)}
            />
          </InitiativeCell>
        );
      
      case 'name':
        return <NameCell theme={theme}>{unit.name}</NameCell>;
      
      case 'value-column':
        return (
          <DataCell theme={theme}>
            <ValueContainer>
              {col.styles?.bidList?.map((bid, idx) => (
                <React.Fragment key={bid}>
                  {idx > 0 && <Divider theme={theme}>{col.styles?.dividers?.[idx - 1] || '/'}</Divider>}
                  <ValueInput 
                    theme={theme}
                    value={unit.attributes[bid] || '0'}
                    $small={col.styles?.bidList && col.styles.bidList.length > 2}
                    onChange={(e) => {
                      // TODO: Update attribute in cache
                      console.log('Update', unit.id, bid, e.target.value);
                    }}
                  />
                </React.Fragment>
              ))}
            </ValueContainer>
          </DataCell>
        );
      
      case 'list-column':
        return (
          <DataCell theme={theme}>
            <ActionButton 
              theme={theme}
              onClick={() => {
                // TODO: Open list modal
                const bidId = col.styles?.bidList?.[0];
                console.log('Open list for', unit.name, bidId, unit.attributes[bidId || '']);
              }}
            >
              <BookOpen />
            </ActionButton>
          </DataCell>
        );
      
      case 'checkbox-column':
        return (
          <DataCell theme={theme}>
            <ValueContainer>
              {col.styles?.bidList?.map(bid => (
                <CheckboxInput 
                  key={bid}
                  type="checkbox" 
                  checked={!!unit.attributes[bid]} 
                  onChange={(e) => {
                    // TODO: Update attribute in cache
                    console.log('Update checkbox', unit.id, bid, e.target.checked);
                  }}
                />
              ))}
            </ValueContainer>
          </DataCell>
        );
      
      case 'special-column':
        if (col.styles?.specialType === 'elevation') {
          return (
            <DataCell theme={theme}>
              <ElevationContainer>
                <Layers size={16} />
                <span>{unit.elevation || 0}</span>
              </ElevationContainer>
            </DataCell>
          );
        } else {
          // Effects
          return (
            <DataCell theme={theme}>
              <ActionButton 
                theme={theme}
                onClick={() => {
                  // TODO: Open effects modal
                  console.log('Open effects for', unit.name);
                }}
              >
                <Sun />
              </ActionButton>
            </DataCell>
          );
        }
      
      case 'divider-column':
        return <DividerCell theme={theme} $style={col.styles?.styleDesign} />;
      
      default:
        return <DataCell theme={theme}>-</DataCell>;
    }
  };

  if (isLoading) {
    return (
      <ListContainer>
        <ListTitle theme={theme}>Loading...</ListTitle>
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      <TableWrapper>
        <Table ref={tableRef} theme={theme}>
          <TableHead theme={theme}>
            <HeaderRow>
              {listColumns.map(col => (
                <HeaderCell key={col.id} theme={theme}>
                  {renderHeader(col)}
                </HeaderCell>
              ))}
            </HeaderRow>
          </TableHead>
          <TableBody>
            {sortedUnits.map(unit => (
              <DataRow key={unit.id}>
                {listColumns.map(col => (
                  <React.Fragment key={col.id}>
                    {renderCell(col, unit)}
                  </React.Fragment>
                ))}
              </DataRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </ListContainer>
  );
};
