import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Plus, X } from 'lucide-react';
import type { Item } from '@owlbear-rodeo/sdk';
import { OwlbearIds } from '../helpers/Constants';
import { rgbaFromHex } from '../helpers/ThemeConstants';
import { deserializeCardLayout } from '../helpers/deserializeCardLayout';
import { UnitConstants } from '../interfaces/MetadataKeys';
import type { CardLayoutComponent, SystemAttribute } from '../interfaces/SystemResponse';

export interface CardLayoutTheme {
  primary: string;
  offset: string;
  background: string;
  border: string;
}

interface RendererProps {
  systemTheme: CardLayoutTheme;
  backgroundUrl?: string;
  cardLayout: CardLayoutComponent[];
  attributes: SystemAttribute[];
  unitItem: Item;
  onUpdateMetadata: (updates: Record<string, unknown>) => Promise<void>;
}

type ActionListEntry = {
  id: string;
  name: string;
  description: string;
};

type ItemListEntry = {
  id: string;
  name: string;
  description: string;
  inUse: boolean;
};

const CardShell = styled.div<{ $theme: CardLayoutTheme; $backgroundUrl?: string }>`
  width: 100%;
  max-width: 350px;
  height: 700px;
  padding: 0 2px;
  max-height: calc(100vh - 16px);
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  position: relative;
`;

const Layer = styled.div`
  position: relative;
  z-index: 1;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: stretch;
`;

const BaseCell = styled.div<{ $full?: boolean; $theme: CardLayoutTheme }>`
  width: ${props => (props.$full ? '100%' : '170px')};
  min-height: 12    px;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
`;

const UnitNameCell = styled(BaseCell)`
  font-family: 'Times New Roman', Georgia, serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
`;

const ReservedCell = styled(BaseCell)`
  font-size: 11px;
  font-style: italic;
  color: #ff6b6b;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.div<{
  $theme: CardLayoutTheme;
  $fontSize: string;
  $stretch?: boolean;
  $align?: string;
  $weight?: number;
  $fontStyle?: 'normal' | 'italic';
}>`
  color: ${props => props.$theme.offset};
  font-size: ${props => props.$fontSize};
  font-weight: ${props => props.$weight ?? 400};
  font-style: ${props => props.$fontStyle ?? 'normal'};
  letter-spacing: ${props => (props.$stretch ? '0.08em' : 'normal')};
  text-align: ${props => props.$align || 'left'};
`;

const ColumnLabel = styled(Label)`
  color: ${props => props.$theme.primary};
  width: 100%;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ValueText = styled.div<{ $theme: CardLayoutTheme; $fontSize: string; $weight: number; $stretch?: boolean; $align?: string }>`
  color: ${props => props.$theme.primary};
  font-size: ${props => props.$fontSize};
  font-weight: ${props => props.$weight};
  letter-spacing: ${props => (props.$stretch ? '0.08em' : 'normal')};
  text-align: ${props => props.$align || 'left'};
`;

const DisabledInput = styled.input<{ $theme: CardLayoutTheme; $fontSize: string; $align?: string }>`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${props => rgbaFromHex(props.$theme.primary, 0.9)};
  box-sizing: border-box;
  font-size: ${props => props.$fontSize};
  text-align: ${props => props.$align || 'left'};

  &::placeholder {
    color: ${props => rgbaFromHex(props.$theme.primary, 0.65)};
  }
`;

const TextValueSlot = styled.div<{ $full?: boolean }>`
  width: ${props => (props.$full ? '100%' : '170px')};
  height: 40px;
  box-sizing: border-box;
`;

const TextValueRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 1;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
`;

const TextValueLabel = styled.span<{
  $theme: CardLayoutTheme;
  $fontSize: string;
  $stretch?: boolean;
  $weight: number;
  $fontStyle: 'normal' | 'italic';
}>`
  color: ${props => props.$theme.offset};
  font-size: ${props => props.$fontSize};
  font-weight: ${props => props.$weight};
  font-style: ${props => props.$fontStyle};
  letter-spacing: ${props => (props.$stretch ? '0.08em' : 'normal')};
  white-space: nowrap;
  margin-left: 4px;
  margin-right: 4px;
  align-self: center;
`;

const TextValueInput = styled.input<{
  $theme: CardLayoutTheme;
  $fontSize: string;
  $align?: string;
  $weight: number;
  $fontStyle: 'normal' | 'italic';
  $stretch?: boolean;
}>`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${props => rgbaFromHex(props.$theme.primary, 0.9)};
  padding: 0 8px;
  box-sizing: border-box;
  font-size: ${props => props.$fontSize};
  font-weight: ${props => props.$weight};
  font-style: ${props => props.$fontStyle};
  letter-spacing: ${props => (props.$stretch ? '0.08em' : 'normal')};
  text-align: ${props => props.$align || 'center'};
  line-height: 1;
  align-self: center;

  &::placeholder {
    color: ${props => rgbaFromHex(props.$theme.primary, 0.65)};
  }
`;

const HorizontalGroup = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const ColumnTrack = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ColumnInputTrack = styled.div`
  flex: 1;
  min-width: 0;
`;

const CheckboxMock = styled.div<{ $theme: CardLayoutTheme }>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.45)};
`;

const SliderMock = styled.div<{ $theme: CardLayoutTheme }>`
  flex: 1;
  height: 8px;
  border-radius: 999px;
  border: 1px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.45)};
`;

const Spacer = styled.div<{ $full?: boolean }>`
  width: ${props => (props.$full ? '100%' : '170px')};
  min-height: 18px;
`;

const DefaultDivider = styled.div<{ $theme: CardLayoutTheme }>`
  width: 100%;
  height: 5px;
  background: ${props => `linear-gradient(10deg, ${props.$theme.border || 'white'}, rgba(255,255,255,0))`};
`;

const DashDivider = styled.div<{ $theme: CardLayoutTheme }>`
  width: 100%;
  height: 0;
  border-top: 2px dashed ${props => props.$theme.border || 'rgba(255,255,255,0.5)'};
`;

const ShadowDivider = styled.div<{ $theme: CardLayoutTheme }>`
  width: 100%;
  height: 10px;
  background: ${props => `linear-gradient(to bottom, ${props.$theme.border || 'rgba(255,255,255,0.2)'}, transparent)`};
`;

const RidgeDivider = styled.div<{ $theme: CardLayoutTheme }>`
  width: 100%;
  height: 2px;
  background: ${props => props.$theme.border || '#222'};
  box-shadow: ${props => `inset 0 1px 0 ${props.$theme.border || '#444'}, 0 1px 0 #000`};
`;

const ZigZagDivider = styled.div<{ $theme: CardLayoutTheme }>`
  width: 100%;
  height: 6px;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-image: ${props => {
    const strokeColor = encodeURIComponent(props.$theme.border || '#ffffff');
    return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='6' viewBox='0 0 24 6' preserveAspectRatio='none'%3E%3Cpolyline points='0,6 6,0 12,6 18,0 24,6' fill='none' stroke='${strokeColor}' stroke-width='1.5'/%3E%3C/svg%3E")`;
  }};
`;

const PulseDivider = styled.div<{ $theme: CardLayoutTheme }>`
  width: 100%;
  height: 4px;
  background: ${props => props.$theme.border || 'white'};
  animation: flicker 1.2s infinite alternate;

  @keyframes flicker {
    from { opacity: 0.3; }
    to { opacity: 1; }
  }
`;

const ListBlock = styled.div<{ $theme: CardLayoutTheme }>`
  width: 100%;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  box-sizing: border-box;
`;

const ListHeader = styled.div<{ $theme: CardLayoutTheme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => rgbaFromHex(props.$theme.border, 0.85)};
  padding-bottom: 4px;
  margin-bottom: 4px;
`;

const ListTitle = styled.div<{ $theme: CardLayoutTheme }>`
  color: ${props => props.$theme.offset};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const HeaderIconButton = styled.button<{ $theme: CardLayoutTheme }>`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${props => props.$theme.offset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ListEntry = styled.div`
  margin-bottom: 8px;
`;

const ItemTitleRow = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`;

const ItemCheckboxSlot = styled.div`
  width: 20px;
  display: flex;
  justify-content: center;
`;

const ItemTitleCenter = styled.div<{ $theme: CardLayoutTheme }>`
  flex: 1;
  text-align: center;
  color: ${props => props.$theme.primary};
  font-style: italic;
  font-weight: 700;
  line-height: 1.15;
`;

const DeleteIconWrap = styled.button<{ $theme: CardLayoutTheme }>`
  background: transparent;
  border: none;
  padding: 4px;
  color: ${props => props.$theme.border};
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ListNameInput = styled.input<{ $theme: CardLayoutTheme }>`
  width: 100%;
  height: 28px;
  border-radius: 4px;
  border: 1px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.78)};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: ${props => props.$theme.primary};
  padding: 0 8px;
  box-sizing: border-box;
  font-style: italic;
  font-weight: 700;
`;

const ListDescriptionInput = styled.textarea<{ $theme: CardLayoutTheme }>`
  width: 100%;
  min-height: 44px;
  border-radius: 4px;
  border: 1px solid ${props => props.$theme.border};
  background: ${props => rgbaFromHex(props.$theme.background, 0.78)};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: ${props => props.$theme.primary};
  padding: 6px 8px;
  box-sizing: border-box;
  font-style: italic;
  font-size: 13px;
  line-height: 1.15;
  resize: vertical;
`;

const ActionNameRow = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`;

const ActionNameInputWrap = styled.div`
  flex: 1;
`;

const ItemUseCheckbox = styled.input<{ $theme: CardLayoutTheme }>`
  width: 18px;
  height: 18px;
  accent-color: ${props => props.$theme.offset};
  cursor: pointer;
`;

const sizeMapTitle = { sm: '14px', md: '16px', lg: '18px' };
const sizeMapTextValue = { sm: '14px', md: '16px', lg: '18px' };
const sizeMapColumn = { sm: '14px', md: '16px', lg: '18px' };
const sizeMapTextValueRow = { sm: '14px', md: '16px', lg: '18px' };

const resolveAttribute = (attributes: SystemAttribute[], idOrBid?: string) => {
  if (!idOrBid) {
    return null;
  }

  return attributes.find((attr) => {
    const byBid = attr.attr_bid === idOrBid;
    const byId = String((attr as any).id ?? '') === String(idOrBid);
    return byBid || byId;
  }) || null;
};

const getLabelFromAttribute = (attribute: SystemAttribute | null, mode?: string) => {
  if (!attribute) {
    return '';
  }

  if (mode === 'abbr') {
    return attribute.attr_abbr;
  }

  if (mode === 'name' || !mode || mode === 'text') {
    return attribute.attr_name;
  }

  return '';
};

const validBidList = (attributes: SystemAttribute[], bids?: string[]) => {
  if (!Array.isArray(bids)) {
    return [] as string[];
  }

  return bids.filter((bid) => !!resolveAttribute(attributes, bid));
};

const resolveListTitle = (attributes: SystemAttribute[], rawId?: string): string => {
  const attribute = resolveAttribute(attributes, rawId);
  if (!attribute || attribute.attr_type !== 'list') {
    return 'List Attribute';
  }

  return attribute.attr_name;
};

export const CardLayoutRenderer: React.FC<RendererProps> = ({
  systemTheme,
  backgroundUrl,
  cardLayout,
  attributes,
  unitItem,
  onUpdateMetadata,
}) => {
  const [draftValues, setDraftValues] = useState<Record<string, string>>({});
  const [listDraftValues, setListDraftValues] = useState<Record<string, string | boolean>>({});
  const { rows } = useMemo(() => deserializeCardLayout(cardLayout), [cardLayout]);
  const unitName = useMemo(() => {
    const metadataName = unitItem.metadata?.[UnitConstants.UNIT_NAME];
    if (typeof metadataName === 'string' && metadataName.trim()) {
      return metadataName;
    }

    const textName = (unitItem as any).text?.plainText;
    if (typeof textName === 'string' && textName.trim()) {
      return textName;
    }

    if (typeof unitItem.name === 'string' && unitItem.name.trim()) {
      return unitItem.name;
    }

    return 'Unknown';
  }, [unitItem]);

  const getMetadataKeyForBid = (bid: string): string => `${OwlbearIds.EXTENSIONID}/${bid}`;

  const getMetadataStringValue = (bid: string): string => {
    const raw = unitItem.metadata?.[getMetadataKeyForBid(bid)];

    if (raw === undefined || raw === null) {
      return '';
    }

    if (typeof raw === 'string') {
      return raw;
    }

    if (typeof raw === 'number' || typeof raw === 'boolean') {
      return String(raw);
    }

    return '';
  };

  const getDraftOrValue = (draftKey: string, bid: string): string => {
    return draftValues[draftKey] ?? getMetadataStringValue(bid);
  };

  const getListDraftKey = (
    listType: 'action' | 'item',
    bid: string,
    entryId: string,
    field: 'name' | 'description' | 'inUse'
  ): string => `${listType}:${bid}:${entryId}:${field}`;

  const getListTextDraftOrValue = (draftKey: string, fallbackValue: string): string => {
    const draftValue = listDraftValues[draftKey];
    return typeof draftValue === 'string' ? draftValue : fallbackValue;
  };

  const getListBoolDraftOrValue = (draftKey: string, fallbackValue: boolean): boolean => {
    const draftValue = listDraftValues[draftKey];
    return typeof draftValue === 'boolean' ? draftValue : fallbackValue;
  };

  const clearListDraftKey = (draftKey: string) => {
    setListDraftValues((prev) => {
      const { [draftKey]: _removed, ...rest } = prev;
      return rest;
    });
  };

  const updateAttributeValue = async (bid: string, value: string) => {
    await onUpdateMetadata({
      [getMetadataKeyForBid(bid)]: value,
    });
  };

  const readActionList = (bid: string): ActionListEntry[] => {
    const raw = unitItem.metadata?.[getMetadataKeyForBid(bid)];
    if (!Array.isArray(raw)) {
      return [];
    }

    return raw.map((entry) => {
      const value = (entry && typeof entry === 'object') ? entry as Record<string, unknown> : {};
      return {
        id: typeof value.id === 'string' && value.id ? value.id : crypto.randomUUID(),
        name: typeof value.name === 'string' ? value.name : '',
        description: typeof value.description === 'string' ? value.description : '',
      };
    });
  };

  const readItemList = (bid: string): ItemListEntry[] => {
    const raw = unitItem.metadata?.[getMetadataKeyForBid(bid)];
    if (!Array.isArray(raw)) {
      return [];
    }

    return raw.map((entry) => {
      const value = (entry && typeof entry === 'object') ? entry as Record<string, unknown> : {};
      return {
        id: typeof value.id === 'string' && value.id ? value.id : crypto.randomUUID(),
        name: typeof value.name === 'string' ? value.name : '',
        description: typeof value.description === 'string' ? value.description : '',
        inUse: !!value.inUse,
      };
    });
  };

  const updateListValue = async (bid: string, value: ActionListEntry[] | ItemListEntry[]) => {
    await onUpdateMetadata({
      [getMetadataKeyForBid(bid)]: value,
    });
  };

  const renderDivider = (design?: string) => {
    if (design === 'dash' || design === 'dashed') {
      return <DashDivider $theme={systemTheme} />;
    }

    if (design === 'shadow') {
      return <ShadowDivider $theme={systemTheme} />;
    }

    if (design === 'ridge') {
      return <RidgeDivider $theme={systemTheme} />;
    }

    if (design === 'zigzag') {
      return <ZigZagDivider $theme={systemTheme} />;
    }

    if (design === 'pulse') {
      return <PulseDivider $theme={systemTheme} />;
    }

    return <DefaultDivider $theme={systemTheme} />;
  };

  const renderComponent = (component: CardLayoutComponent) => {
    const type = component.type as string;
    const style = component.styles || {};
    const attr = resolveAttribute(attributes, style.attributeId);
    const textAlign = style.textAlign || 'left';
    const stretch = style.stretch === true;

    if (type === 'line-break') {
      return (
        <BaseCell key={component.id} $theme={systemTheme} $full>
          {renderDivider(style.styleDesign)}
        </BaseCell>
      );
    }

    if (type === 'line-spacer') {
      return <Spacer key={component.id} $full={component.fullsize} />;
    }

    if (type === 'text') {
      const fontSize = sizeMapTitle[(style.fontSize as keyof typeof sizeMapTitle) || 'md'];
      const title = getLabelFromAttribute(attr, style.labelMode) || 'Title Header';

      return (
        <BaseCell key={component.id} $theme={systemTheme} $full={component.fullsize}>
          <ValueText
            $theme={systemTheme}
            $fontSize={fontSize}
            $weight={700}
            $stretch={stretch}
            $align={textAlign}
          >
            {title}
          </ValueText>
        </BaseCell>
      );
    }

    if (type === 'text-value') {
      const fontSize = sizeMapTextValueRow[(style.fontSize as keyof typeof sizeMapTextValueRow) || 'md'];
      const label = getLabelFromAttribute(attr, style.labelMode);
      const hasLabel = !!label;
      const labelPosition = style.labelPosition === 'right' ? 'right' : 'left';
      const textValueAlign = style.textAlign || 'center';
      const fontWeight = style.fontWeight === 'bold' ? 700 : 400;
      const fontStyle = style.fontStyle === 'italic' ? 'italic' : 'normal';
      const bid = attr?.attr_bid;
      const draftKey = `text-value:${component.id}:${bid || 'none'}`;
      const inputElement = (
        <TextValueInput
          $theme={systemTheme}
          $fontSize={fontSize}
          $align={textValueAlign}
          $weight={fontWeight}
          $fontStyle={fontStyle}
          $stretch={stretch}
          type="text"
          value={bid ? getDraftOrValue(draftKey, bid) : ''}
          onChange={(event) => {
            if (!bid) return;
            const nextValue = event.target.value;
            setDraftValues((prev) => ({
              ...prev,
              [draftKey]: nextValue,
            }));
          }}
          onBlur={async (event) => {
            if (!bid) return;
            const nextValue = event.target.value;
            await updateAttributeValue(bid, nextValue);
            setDraftValues((prev) => {
              const { [draftKey]: _removed, ...rest } = prev;
              return rest;
            });
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              event.currentTarget.blur();
            }
          }}
          placeholder="..."
        />
      );
      const labelElement = hasLabel ? (
        <TextValueLabel
          $theme={systemTheme}
          $fontSize={fontSize}
          $stretch={stretch}
          $weight={fontWeight}
          $fontStyle={fontStyle}
        >
          {label}
        </TextValueLabel>
      ) : null;

      return (
        <TextValueSlot key={component.id} $full={component.fullsize}>
          <TextValueRow>
            {labelPosition === 'left' ? labelElement : null}
            {inputElement}
            {labelPosition === 'right' ? labelElement : null}
          </TextValueRow>
        </TextValueSlot>
      );
    }

    if (type === 'text-checkbox') {
      const fontSize = sizeMapTextValue[(style.fontSize as keyof typeof sizeMapTextValue) || 'md'];
      const count = Math.max(1, Number(style.checkboxCount || 1));
      const label = getLabelFromAttribute(attr, style.labelMode);
      const isSlider = style.inputType === 'slider';

      return (
        <BaseCell key={component.id} $theme={systemTheme} $full={component.fullsize}>
          {label ? (
            <Label $theme={systemTheme} $fontSize={fontSize} $stretch={stretch} $align={textAlign}>
              {label}
            </Label>
          ) : null}
          <HorizontalGroup>
            {Array.from({ length: count }).map((_, index) => (
              isSlider
                ? <SliderMock key={`slider-${index}`} $theme={systemTheme} />
                : <CheckboxMock key={`checkbox-${index}`} $theme={systemTheme} />
            ))}
          </HorizontalGroup>
        </BaseCell>
      );
    }

    if (type === 'column-text') {
      const fontSize = sizeMapColumn[(style.fontSize as keyof typeof sizeMapColumn) || 'md'];
      const bids = validBidList(attributes, style.bidList);
      const columnWeight = style.fontWeight === 'bold' ? 700 : 400;
      const columnFontStyle = style.fontStyle === 'italic' ? 'italic' : 'normal';
      if (bids.length === 0) {
        return null;
      }

      return (
        <BaseCell key={component.id} $theme={systemTheme} $full={component.fullsize}>
          <HorizontalGroup>
            {bids.map((bid) => {
              const columnAttr = resolveAttribute(attributes, bid);
              const columnLabel = getLabelFromAttribute(columnAttr, style.labelMode || 'name');
              if (!columnLabel) {
                return null;
              }
              return (
                <ColumnTrack key={bid}>
                  <ColumnLabel
                    $theme={systemTheme}
                    $fontSize={fontSize}
                    $stretch={stretch}
                    $align="center"
                    $weight={columnWeight}
                    $fontStyle={columnFontStyle}
                  >
                    {columnLabel}
                  </ColumnLabel>
                </ColumnTrack>
              );
            })}
          </HorizontalGroup>
        </BaseCell>
      );
    }

    if (type === 'column-value') {
      const fontSize = sizeMapColumn[(style.fontSize as keyof typeof sizeMapColumn) || 'md'];
      const bids = validBidList(attributes, style.bidList);
      if (bids.length === 0) {
        return null;
      }

      return (
        <BaseCell key={component.id} $theme={systemTheme} $full={component.fullsize}>
          <HorizontalGroup>
            {bids.map((bid) => {
              const draftKey = `column-value:${component.id}:${bid}`;
              return (
                <ColumnInputTrack key={bid}>
                  <DisabledInput
                    $theme={systemTheme}
                    $fontSize={fontSize}
                    $align="center"
                    value={getDraftOrValue(draftKey, bid)}
                    onChange={(event) => {
                      const nextValue = event.target.value;
                      setDraftValues((prev) => ({
                        ...prev,
                        [draftKey]: nextValue,
                      }));
                    }}
                    onBlur={async (event) => {
                      const nextValue = event.target.value;
                      await updateAttributeValue(bid, nextValue);
                      setDraftValues((prev) => {
                        const { [draftKey]: _removed, ...rest } = prev;
                        return rest;
                      });
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        event.currentTarget.blur();
                      }
                    }}
                    placeholder="..."
                  />
                </ColumnInputTrack>
              );
            })}
          </HorizontalGroup>
        </BaseCell>
      );
    }

    if (type === 'action-list') {
      const listAttr = resolveAttribute(attributes, style.attributeId || style.bidList?.[0]);
      const listBid = listAttr?.attr_bid;
      const listTitle = resolveListTitle(attributes, style.attributeId || style.bidList?.[0]);
      const actionEntries = listBid ? readActionList(listBid) : [];

      return (
        <BaseCell key={component.id} $theme={systemTheme} $full={component.fullsize}>
          <ListBlock $theme={systemTheme}>
            <ListHeader $theme={systemTheme}>
              <ListTitle $theme={systemTheme}>{listTitle}</ListTitle>
              <HeaderIconButton
                type="button"
                $theme={systemTheme}
                aria-label="Add Action"
                onClick={async () => {
                  if (!listBid) return;
                  const nextEntries: ActionListEntry[] = [
                    ...actionEntries,
                    { id: crypto.randomUUID(), name: '', description: '' },
                  ];
                  await updateListValue(listBid, nextEntries);
                }}
              >
                <Plus size={14} />
              </HeaderIconButton>
            </ListHeader>

            {actionEntries.map((entry, index) => (
              <ListEntry key={entry.id || `${component.id}-action-${index}`}>
                <ActionNameRow>
                  <ActionNameInputWrap>
                    {(() => {
                      const nameDraftKey = getListDraftKey('action', listBid || 'none', entry.id, 'name');
                      return (
                    <ListNameInput
                      $theme={systemTheme}
                      type="text"
                      value={getListTextDraftOrValue(nameDraftKey, entry.name)}
                      placeholder="Action Name"
                      onChange={(event) => {
                        const nextValue = event.target.value;
                        setListDraftValues((prev) => ({
                          ...prev,
                          [nameDraftKey]: nextValue,
                        }));
                      }}
                      onBlur={async (event) => {
                        if (!listBid) return;
                        const nextValue = getListTextDraftOrValue(nameDraftKey, event.target.value);
                        const nextEntries = actionEntries.map((current) =>
                          current.id === entry.id ? { ...current, name: nextValue } : current
                        );
                        await updateListValue(listBid, nextEntries);
                        clearListDraftKey(nameDraftKey);
                      }}
                    />
                      );
                    })()}
                  </ActionNameInputWrap>
                  <DeleteIconWrap
                    type="button"
                    $theme={systemTheme}
                    aria-label="Delete Action"
                    onClick={async () => {
                      if (!listBid) return;
                      const nextEntries = actionEntries.filter((current) => current.id !== entry.id);
                      await updateListValue(listBid, nextEntries);
                    }}
                  >
                    <X size={14} />
                  </DeleteIconWrap>
                </ActionNameRow>
                {(() => {
                  const descriptionDraftKey = getListDraftKey('action', listBid || 'none', entry.id, 'description');
                  return (
                    <ListDescriptionInput
                      $theme={systemTheme}
                      value={getListTextDraftOrValue(descriptionDraftKey, entry.description)}
                      placeholder="Action Description"
                      onChange={(event) => {
                        const nextValue = event.target.value;
                        setListDraftValues((prev) => ({
                          ...prev,
                          [descriptionDraftKey]: nextValue,
                        }));
                      }}
                      onBlur={async (event) => {
                        if (!listBid) return;
                        const nextValue = getListTextDraftOrValue(descriptionDraftKey, event.target.value);
                        const nextEntries = actionEntries.map((current) =>
                          current.id === entry.id ? { ...current, description: nextValue } : current
                        );
                        await updateListValue(listBid, nextEntries);
                        clearListDraftKey(descriptionDraftKey);
                      }}
                    />
                  );
                })()}
              </ListEntry>
            ))}
          </ListBlock>
        </BaseCell>
      );
    }

    if (type === 'item-list') {
      const listAttr = resolveAttribute(attributes, style.attributeId || style.bidList?.[0]);
      const listBid = listAttr?.attr_bid;
      const listTitle = resolveListTitle(attributes, style.attributeId || style.bidList?.[0]);
      const itemEntries = listBid ? readItemList(listBid) : [];

      return (
        <BaseCell key={component.id} $theme={systemTheme} $full={component.fullsize}>
          <ListBlock $theme={systemTheme}>
            <ListHeader $theme={systemTheme}>
              <ListTitle $theme={systemTheme}>{listTitle}</ListTitle>
              <HeaderIconButton
                type="button"
                $theme={systemTheme}
                aria-label="Add Item"
                onClick={async () => {
                  if (!listBid) return;
                  const nextEntries: ItemListEntry[] = [
                    ...itemEntries,
                    { id: crypto.randomUUID(), name: '', description: '', inUse: false },
                  ];
                  await updateListValue(listBid, nextEntries);
                }}
              >
                <Plus size={14} />
              </HeaderIconButton>
            </ListHeader>

            {itemEntries.map((entry, index) => (
              <ListEntry key={entry.id || `${component.id}-item-${index}`}>
                <ItemTitleRow>
                  <ItemCheckboxSlot>
                    {(() => {
                      const inUseDraftKey = getListDraftKey('item', listBid || 'none', entry.id, 'inUse');
                      return (
                        <ItemUseCheckbox
                          $theme={systemTheme}
                          type="checkbox"
                          checked={getListBoolDraftOrValue(inUseDraftKey, entry.inUse)}
                          onChange={(event) => {
                            const nextValue = event.target.checked;
                            setListDraftValues((prev) => ({
                              ...prev,
                              [inUseDraftKey]: nextValue,
                            }));
                          }}
                          onBlur={async (event) => {
                            if (!listBid) return;
                            const nextValue = getListBoolDraftOrValue(inUseDraftKey, event.target.checked);
                            const nextEntries = itemEntries.map((current) =>
                              current.id === entry.id ? { ...current, inUse: nextValue } : current
                            );
                            await updateListValue(listBid, nextEntries);
                            clearListDraftKey(inUseDraftKey);
                          }}
                        />
                      );
                    })()}
                  </ItemCheckboxSlot>
                  <ItemTitleCenter $theme={systemTheme}>
                    {(() => {
                      const nameDraftKey = getListDraftKey('item', listBid || 'none', entry.id, 'name');
                      return (
                        <ListNameInput
                          $theme={systemTheme}
                          type="text"
                          value={getListTextDraftOrValue(nameDraftKey, entry.name)}
                          placeholder="Item Name"
                          onChange={(event) => {
                            const nextValue = event.target.value;
                            setListDraftValues((prev) => ({
                              ...prev,
                              [nameDraftKey]: nextValue,
                            }));
                          }}
                          onBlur={async (event) => {
                            if (!listBid) return;
                            const nextValue = getListTextDraftOrValue(nameDraftKey, event.target.value);
                            const nextEntries = itemEntries.map((current) =>
                              current.id === entry.id ? { ...current, name: nextValue } : current
                            );
                            await updateListValue(listBid, nextEntries);
                            clearListDraftKey(nameDraftKey);
                          }}
                        />
                      );
                    })()}
                  </ItemTitleCenter>
                  <DeleteIconWrap
                    type="button"
                    $theme={systemTheme}
                    aria-label="Delete Item"
                    onClick={async () => {
                      if (!listBid) return;
                      const nextEntries = itemEntries.filter((current) => current.id !== entry.id);
                      await updateListValue(listBid, nextEntries);
                    }}
                  >
                    <X size={14} />
                  </DeleteIconWrap>
                </ItemTitleRow>
                {(() => {
                  const descriptionDraftKey = getListDraftKey('item', listBid || 'none', entry.id, 'description');
                  return (
                    <ListDescriptionInput
                      $theme={systemTheme}
                      value={getListTextDraftOrValue(descriptionDraftKey, entry.description)}
                      placeholder="Item Description"
                      onChange={(event) => {
                        const nextValue = event.target.value;
                        setListDraftValues((prev) => ({
                          ...prev,
                          [descriptionDraftKey]: nextValue,
                        }));
                      }}
                      onBlur={async (event) => {
                        if (!listBid) return;
                        const nextValue = getListTextDraftOrValue(descriptionDraftKey, event.target.value);
                        const nextEntries = itemEntries.map((current) =>
                          current.id === entry.id ? { ...current, description: nextValue } : current
                        );
                        await updateListValue(listBid, nextEntries);
                        clearListDraftKey(descriptionDraftKey);
                      }}
                    />
                  );
                })()}
              </ListEntry>
            ))}
          </ListBlock>
        </BaseCell>
      );
    }

    return null;
  };

  return (
    <CardShell $theme={systemTheme} $backgroundUrl={backgroundUrl}>
      <Layer>
        <Row>
          <UnitNameCell $theme={systemTheme}>{unitName}</UnitNameCell>
          <ReservedCell $theme={systemTheme}>Control-Reserved</ReservedCell>
        </Row>

        {rows.map((row) => (
          <Row key={`row-${row.row}`}>
            {row.items.map((component) => renderComponent(component))}
          </Row>
        ))}
      </Layer>
    </CardShell>
  );
};
