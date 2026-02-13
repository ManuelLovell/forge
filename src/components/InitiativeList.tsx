import React, { useState, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import OBR from '@owlbear-rodeo/sdk';
import { useSystemData } from '../helpers/useSystemData';
import { useForgeTheme } from '../helpers/ThemeContext';
import { useSceneStore } from '../helpers/BSCache';
import { EXTENSION_ID } from '../helpers/MockData';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { ListLayoutComponent } from '../interfaces/SystemResponse';
import { ForgeTheme, rgbaFromHex } from '../helpers/ThemeConstants';
import { 
  Heart, Shield, Sun, Award, Target, Users, Star, 
  Zap, Clock, Eye, Layers, BookOpen, ArrowRightCircle, CheckCircle, Circle 
} from 'lucide-react';
import { DATA_STORED_IN_ROOM } from '../helpers/Constants';

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

const ControlWrapper = styled.div<{ theme: ForgeTheme }>`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 8px;
  background-color: ${props => rgbaFromHex(props.theme.BACKGROUND, 0.5)};
  border-top: 2px solid ${props => props.theme.BORDER};
`;

const ControlButton = styled.button<{ theme: ForgeTheme; disabled?: boolean }>`
  background: ${props => props.disabled ? rgbaFromHex(props.theme.BORDER, 0.3) : rgbaFromHex(props.theme.OFFSET, 0.5)};
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 6px;
  color: ${props => props.theme.PRIMARY};
  padding: 4px 4px;
  width: 80px;
  font-size: 14px;
  font-weight: 600;
  font-variant: small-caps;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  &:hover {
    background: ${props => props.disabled ? rgbaFromHex(props.theme.BORDER, 0.3) : props.theme.OFFSET};
  }
  
  &:active {
    transform: ${props => props.disabled ? 'none' : 'scale(0.95)'};
  }
`;

const RoundDisplay = styled.div<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  font-size: 16px;
  font-weight: 600;
  min-width: 80px;
  text-align: center;
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

const DataRow = styled.tr<{ $isCurrentTurn?: boolean; theme?: ForgeTheme }>`
  ${props => props.$isCurrentTurn && props.theme && `
    background: linear-gradient(to left, ${rgbaFromHex(props.theme.OFFSET, 0.4)} 0%, transparent 100%);
  `}
  
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

const TurnIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    width: 24px;
    height: 24px;
  }
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
  min-width: 120px;
`;

const ValueInput = styled.input<{ $small?: boolean; theme: ForgeTheme }>`
  background: rgba(0, 0, 0, 0.4);
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
  const items = useSceneStore((state) => state.items);
  const setItems = useSceneStore((state) => state.setItems);
  const [units, setUnits] = useState<Unit[]>([]);
  const [listColumns, setListColumns] = useState<ListColumn[]>([]);
  const [currentTurnId, setCurrentTurnId] = useState<string | null>(null);
  const [currentRound, setCurrentRound] = useState<number>(1);
  const [completedUnits, setCompletedUnits] = useState<Set<string>>(new Set());
  const tableRef = useRef<HTMLTableElement>(null);

  // Control for setting the data to Room or to Scene
  const storageContainer = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;

  // Get settings
  const reverseInitiative = storageContainer[SettingsConstants.REVERSE_INITIATIVE] as boolean || false;
  const popcornInitiative = storageContainer[SettingsConstants.POPCORN_INITIATIVE] as boolean || false;

  // Transform items from cache into Unit format
  useEffect(() => {
    const transformedUnits: Unit[] = items
      .filter(item => {
        // Only include items that are added to the list
        return item.metadata?.[UnitConstants.ON_LIST] === true;
      })
      .map(item => {
        const initiative = item.metadata?.[UnitConstants.INITIATIVE] as number || 0;
        const name = item.metadata[UnitConstants.UNIT_NAME] as string || item.name || 'Unknown';
        const elevation = item.metadata?.[`${EXTENSION_ID}/elevation`] as number || 0;
        
        // Extract attributes using BIDs
        const attributes: Record<string, any> = {};
        Object.keys(item.metadata || {}).forEach(key => {
          // Only include keys that start with our extension ID
          if (key.startsWith(EXTENSION_ID)) {
            // Store with the full key (including extension ID prefix)
            attributes[key] = item.metadata?.[key];
          }
        });
        
        return {
          id: item.id,
          initiative,
          name,
          elevation,
          attributes,
        };
      });
    
    setUnits(transformedUnits);
  }, [items]);

  // Sort units by initiative and then alphabetically by name (only in normal mode)
  const sortedUnits = useMemo(() => {
    if (popcornInitiative) {
      // In popcorn mode, just sort alphabetically by name
      return [...units].sort((a, b) => a.name.localeCompare(b.name));
    }
    
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
  }, [units, reverseInitiative, popcornInitiative]);

  // Handler for updating initiative in local state only
  const handleInitiativeChange = (unitId: string, newInitiative: string) => {
    const initiativeValue = parseInt(newInitiative) || 0;
    setUnits(prevUnits =>
      prevUnits.map(unit =>
        unit.id === unitId ? { ...unit, initiative: initiativeValue } : unit
      )
    );
  };

  // Handler for committing initiative to cache and OBR
  const commitInitiativeChange = (unitId: string, initiativeValue: number) => {
    // Update in cache/metadata
    const updatedItems = items.map(item => {
      if (item.id === unitId) {
        return {
          ...item,
          metadata: {
            ...item.metadata,
            [UnitConstants.INITIATIVE]: initiativeValue
          }
        };
      }
      return item;
    });
    setItems(updatedItems);
    
    // Update in OBR scene items
    OBR.scene.items.updateItems([unitId], (items) => {
      items[0].metadata[UnitConstants.INITIATIVE] = initiativeValue;
    });
  };

  // Deserialize list layout on mount or when listLayout changes
  useEffect(() => {
    if (!isLoading) {
      const columns = deserializeListLayout(listLayout);
      setListColumns(columns);
    }
  }, [listLayout, isLoading]);

  // Load current turn and round from metadata
  useEffect(() => {
    const savedTurnId = sceneMetadata[SettingsConstants.CURRENT_TURN] as string | undefined;
    const savedRound = sceneMetadata[SettingsConstants.CURRENT_ROUND] as number | undefined;
    
    if (savedTurnId) {
      setCurrentTurnId(savedTurnId);
    } else if (sortedUnits.length > 0) {
      // Initialize with first unit if no saved turn
      setCurrentTurnId(sortedUnits[0].id);
    }
    
    if (savedRound) {
      setCurrentRound(savedRound);
    }
  }, [sceneMetadata, sortedUnits]);

  // Handlers for turn navigation
  const handleNext = async () => {
    if (sortedUnits.length === 0) return;
    
    const currentIndex = sortedUnits.findIndex(u => u.id === currentTurnId);
    const nextIndex = currentIndex + 1;
    
    if (nextIndex >= sortedUnits.length) {
      // End of list, go back to top and increment round
      const newRound = currentRound + 1;
      setCurrentRound(newRound);
      setCurrentTurnId(sortedUnits[0].id);
      await OBR.scene.setMetadata({
        [SettingsConstants.CURRENT_TURN]: sortedUnits[0].id,
        [SettingsConstants.CURRENT_ROUND]: newRound
      });
    } else {
      // Move to next unit
      setCurrentTurnId(sortedUnits[nextIndex].id);
      await OBR.scene.setMetadata({
        [SettingsConstants.CURRENT_TURN]: sortedUnits[nextIndex].id
      });
    }
  };

  const handlePrevious = async () => {
    if (sortedUnits.length === 0) return;
    
    const currentIndex = sortedUnits.findIndex(u => u.id === currentTurnId);
    const prevIndex = currentIndex - 1;
    
    if (prevIndex < 0) {
      // Beginning of list, go to end and decrement round
      const newRound = Math.max(1, currentRound - 1);
      setCurrentRound(newRound);
      setCurrentTurnId(sortedUnits[sortedUnits.length - 1].id);
      await OBR.scene.setMetadata({
        [SettingsConstants.CURRENT_TURN]: sortedUnits[sortedUnits.length - 1].id,
        [SettingsConstants.CURRENT_ROUND]: newRound
      });
    } else {
      // Move to previous unit
      setCurrentTurnId(sortedUnits[prevIndex].id);
      await OBR.scene.setMetadata({
        [SettingsConstants.CURRENT_TURN]: sortedUnits[prevIndex].id
      });
    }
  };

  // Popcorn Initiative handlers
  const handleUnitClick = async (unitId: string) => {
    if (!popcornInitiative) return;
    if (completedUnits.has(unitId)) return; // Can't select already completed units
    
    setCurrentTurnId(unitId);
    await OBR.scene.setMetadata({
      [SettingsConstants.CURRENT_TURN]: unitId
    });
  };

  const handleEndTurn = () => {
    if (!currentTurnId) return;
    
    setCompletedUnits(prev => new Set([...prev, currentTurnId]));
    
    // Check if all units have gone
    if (completedUnits.size + 1 >= sortedUnits.length) {
      // All done, but don't auto-advance - let user click New Round
    }
  };

  const handleNewRound = async () => {
    const newRound = currentRound + 1;
    setCurrentRound(newRound);
    setCompletedUnits(new Set());
    setCurrentTurnId(null);
    
    await OBR.scene.setMetadata({
      [SettingsConstants.CURRENT_TURN]: null,
      [SettingsConstants.CURRENT_ROUND]: newRound
    });
  };

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
  }, [listColumns.length]);

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
        if (popcornInitiative) {
          // In popcorn mode, show completion indicator
          return (
            <InitiativeCell theme={theme}>
              <TurnIcon
                onClick={(e) => {
                  e.stopPropagation();
                  if (completedUnits.has(unit.id)) {
                    // Already completed, do nothing
                    return;
                  }
                  if (unit.id === currentTurnId) {
                    // Current unit clicked - end their turn
                    handleEndTurn();
                  } else {
                    // Different unit clicked - select them
                    handleUnitClick(unit.id);
                  }
                }}
              >
                {completedUnits.has(unit.id) ? (
                  <CheckCircle color={theme.OFFSET} />
                ) : unit.id === currentTurnId ? (
                  <ArrowRightCircle color={theme.PRIMARY} />
                ) : (
                  <Circle color={theme.BORDER} />
                )}
              </TurnIcon>
            </InitiativeCell>
          );
        }
        // Normal mode: show initiative input
        return (
          <InitiativeCell theme={theme}>
            <InitiativeInput
              theme={theme}
              type="number"
              value={unit.initiative}
              onChange={(e) => handleInitiativeChange(unit.id, e.target.value)}
              onBlur={(e) => {
                const value = parseInt(e.target.value) || 0;
                commitInitiativeChange(unit.id, value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const value = parseInt(e.currentTarget.value) || 0;
                  commitInitiativeChange(unit.id, value);
                  e.currentTarget.blur();
                }
              }}
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
                    value={unit.attributes[`${EXTENSION_ID}/${bid}`] || '0'}
                    $small={col.styles?.bidList && col.styles.bidList.length > 2}
                    onChange={(e) => {
                      const newValue = e.target.value;
                      
                      // Update local state only
                      setUnits(prevUnits =>
                        prevUnits.map(u =>
                          u.id === unit.id
                            ? {
                                ...u,
                                attributes: {
                                  ...u.attributes,
                                  [`${EXTENSION_ID}/${bid}`]: newValue
                                }
                              }
                            : u
                        )
                      );
                    }}
                    onBlur={(e) => {
                      const newValue = e.target.value;
                      
                      // Update cache
                      const updatedItems = items.map(item => {
                        if (item.id === unit.id) {
                          return {
                            ...item,
                            metadata: {
                              ...item.metadata,
                              [`${EXTENSION_ID}/${bid}`]: newValue
                            }
                          };
                        }
                        return item;
                      });
                      setItems(updatedItems);
                      
                      // Update in OBR scene items
                      OBR.scene.items.updateItems([unit.id], (items) => {
                        items[0].metadata[`${EXTENSION_ID}/${bid}`] = newValue;
                      });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const newValue = e.currentTarget.value;
                        
                        // Update cache
                        const updatedItems = items.map(item => {
                          if (item.id === unit.id) {
                            return {
                              ...item,
                              metadata: {
                                ...item.metadata,
                                [`${EXTENSION_ID}/${bid}`]: newValue
                              }
                            };
                          }
                          return item;
                        });
                        setItems(updatedItems);
                        
                        // Update in OBR scene items
                        OBR.scene.items.updateItems([unit.id], (items) => {
                          items[0].metadata[`${EXTENSION_ID}/${bid}`] = newValue;
                        });
                        
                        e.currentTarget.blur();
                      }
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
                console.log('Open list for', unit.name, bidId, unit.attributes[`${EXTENSION_ID}/${bidId}`]);
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
                  checked={!!unit.attributes[`${EXTENSION_ID}/${bid}`]} 
                  onChange={(e) => {
                    const newValue = e.target.checked;
                    
                    // Update local state
                    setUnits(prevUnits =>
                      prevUnits.map(u =>
                        u.id === unit.id
                          ? {
                              ...u,
                              attributes: {
                                ...u.attributes,
                                [`${EXTENSION_ID}/${bid}`]: newValue
                              }
                            }
                          : u
                      )
                    );
                    
                    // Update cache
                    const updatedItems = items.map(item => {
                      if (item.id === unit.id) {
                        return {
                          ...item,
                          metadata: {
                            ...item.metadata,
                            [`${EXTENSION_ID}/${bid}`]: newValue
                          }
                        };
                      }
                      return item;
                    });
                    setItems(updatedItems);
                    
                    // Update in OBR scene items
                    OBR.scene.items.updateItems([unit.id], (items) => {
                      items[0].metadata[`${EXTENSION_ID}/${bid}`] = newValue;
                    });
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
              <DataRow 
                key={unit.id} 
                $isCurrentTurn={unit.id === currentTurnId}
                theme={theme}
              >
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
      <ControlWrapper theme={theme}>
        {popcornInitiative ? (
          // Popcorn Initiative controls
          <>
            <ControlButton 
              theme={theme} 
              onClick={handleEndTurn}
              disabled={!currentTurnId || completedUnits.has(currentTurnId)}
            >
              End Turn
            </ControlButton>
            <RoundDisplay theme={theme}>
              Round: {currentRound}
            </RoundDisplay>
            <ControlButton 
              theme={theme} 
              onClick={handleNewRound}
              disabled={completedUnits.size < sortedUnits.length}
            >
              Next
            </ControlButton>
          </>
        ) : (
          // Normal Initiative controls
          <>
            <ControlButton theme={theme} onClick={handlePrevious}>
              Previous
            </ControlButton>
            <RoundDisplay theme={theme}>
              Round: {currentRound}
            </RoundDisplay>
            <ControlButton theme={theme} onClick={handleNext}>
              Next
            </ControlButton>
          </>
        )}
      </ControlWrapper>
    </ListContainer>
  );
};
