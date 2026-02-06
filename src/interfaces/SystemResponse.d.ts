/**
 * Interface for card layout component styles
 */
export interface CardLayoutStyles {
  labelMode?: 'blank' | 'name' | 'abbr' | 'icon';
  attributeId?: string;
  fontSize?: 'sm' | 'md' | 'lg';
  fontWeight?: 'normal' | 'bold';
  bidList?: string[];
  dividers?: string[];
  labelIcon?: string;
  labelName?: string;
  description?: string;
  styleDesign?: 'dash' | 'solid';
  [key: string]: any; // Allow additional properties
}

/**
 * Interface for card layout component
 */
export interface CardLayoutComponent {
  id: string;
  col: number;
  row: number;
  type: 'text-value' | 'column-text' | 'column-value' | 'line-break' | 'text' | 'action-list' | 'item-list';
  styles?: CardLayoutStyles;
  fullsize: boolean;
}

/**
 * Interface for list layout component styles
 */
export interface ListLayoutStyles {
  bidList?: string[];
  dividers?: string[];
  labelIcon?: string;
  labelMode?: 'blank' | 'name' | 'abbr' | 'icon';
  labelName?: string;
  description?: string;
  styleDesign?: 'default' | 'dashed' | 'shadow' | 'zigzag' | 'ridge' | 'pulse';
  specialType?: 'effects' | 'elevation';
  [key: string]: any; // Allow additional properties
}

/**
 * Interface for list layout component
 */
export interface ListLayoutComponent {
  id: string;
  col: number;
  type: 'value-column' | 'list-column' | 'checkbox-column' | 'special-column' | 'divider-column';
  styles?: ListLayoutStyles;
}

/**
 * Interface for system attribute
 */
export interface SystemAttribute {
  attr_bid: string;
  attr_abbr: string;
  attr_func: string | null;
  attr_name: string;
  attr_type: 'text' | 'numb' | 'list' | 'bool';
  attr_group: string;
}

/**
 * Main interface for system response from v_bs_systems_with_attributes
 */
export interface SystemResponse {
  name: string;
  background_url: string;
  theme_primary: string;
  theme_offset: string;
  theme_background: string;
  theme_border: string;
  card_layout: CardLayoutComponent[];
  list_layout: ListLayoutComponent[];
  share_id: string;
  attributes: SystemAttribute[];
}
