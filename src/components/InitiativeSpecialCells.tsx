import React from 'react';
import styled from 'styled-components';
import { Sun } from 'lucide-react';
import { EffectsTriggerCell } from './EffectsManager';
import { ForgeTheme } from '../helpers/ThemeConstants';

const DataCell = styled.td<{ theme: ForgeTheme }>`
  color: ${props => props.theme.PRIMARY};
  padding: 2px 6px;
  text-align: center;
  font-size: 14px;
`;

const ValueInput = styled.input<{ theme: ForgeTheme }>`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid ${props => props.theme.BORDER};
  border-radius: 4px;
  color: ${props => props.theme.PRIMARY};
  padding: 2px 4px;
  font-size: 14px;
  width: 40px;
  text-align: center;
  backdrop-filter: blur(12px);
  cursor: text;

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

const ElevationInputRow = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 2px;
`;

const ElevationPresetSelect = styled.select<{ theme: ForgeTheme }>`
  position: absolute;
  right: -10px;
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid ${props => props.theme.BORDER};
  border-radius: 4px;
  color: ${props => props.theme.PRIMARY};
  width: 16px;
  height: 16px;
  border-radius: 50%;

  padding: 0;
  line-height: 10px;                                                                                                                                                                                                                                                                         px;
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.OFFSET};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
  }
`;

const ELEVATION_PRESET_VALUES = [-20, -40, -60, -80, -100, 0, 20, 40, 60, 80, 100];

export interface SpecialCellUnit {
  id: string;
  elevation: number;
}

interface ElevationSpecialCellProps {
  theme: ForgeTheme;
  unit: SpecialCellUnit;
  canInteract: boolean;
  elevationDraftValue?: string;
  onElevationDraftChange: (unitId: string, value: string) => void;
  onCommitElevationChange: (unitId: string, value: string) => void;
}

export const ElevationSpecialCell: React.FC<ElevationSpecialCellProps> = ({
  theme,
  unit,
  canInteract,
  elevationDraftValue,
  onElevationDraftChange,
  onCommitElevationChange,
}) => {
  return (
    <DataCell theme={theme}>
      <ElevationInputRow>
        <ValueInput
          theme={theme}
          type="text"
          inputMode="decimal"
          min={-999}
          max={999}
          step={1}
          value={elevationDraftValue ?? String(unit.elevation ?? 0)}
          readOnly={!canInteract}
          onChange={!canInteract ? undefined : (e) => onElevationDraftChange(unit.id, e.target.value)}
          onBlur={!canInteract ? undefined : (e) => onCommitElevationChange(unit.id, e.target.value)}
          onKeyDown={(e) => {
            if (!canInteract) {
              return;
            }
            if (e.key === 'Enter') {
              e.preventDefault();
              e.currentTarget.blur();
            }
          }}
        />
        <ElevationPresetSelect
          theme={theme}
          aria-label="Elevation presets"
          value=""
          disabled={!canInteract}
          onChange={!canInteract ? undefined : (e) => {
            const selectedValue = e.target.value;
            if (!selectedValue) {
              return;
            }

            onElevationDraftChange(unit.id, selectedValue);
            onCommitElevationChange(unit.id, selectedValue);
            e.currentTarget.value = '';
          }}
        >
          <option value="">▾</option>
          {ELEVATION_PRESET_VALUES.map((value) => (
            <option key={value} value={String(value)}>
              {value}
            </option>
          ))}
        </ElevationPresetSelect>
      </ElevationInputRow>
    </DataCell>
  );
};

interface EffectsSpecialCellProps {
  theme: ForgeTheme;
  canInteract: boolean;
  icon?: React.ReactNode;
  activeEffectsCount: number;
  onOpen: () => void;
  onContextMenu?: () => void;
}

export const EffectsSpecialCell: React.FC<EffectsSpecialCellProps> = ({
  theme,
  canInteract,
  icon,
  activeEffectsCount,
  onOpen,
  onContextMenu,
}) => {
  return (
    <DataCell theme={theme}>
      <EffectsTriggerCell
        activeEffectsCount={activeEffectsCount}
        canInteract={canInteract}
        icon={icon || <Sun />}
        onOpen={onOpen}
        onContextMenu={onContextMenu}
      />
    </DataCell>
  );
};
