import type { CardLayoutComponent } from '../interfaces/SystemResponse';

export interface CardLayoutRowGroup {
  row: number;
  items: CardLayoutComponent[];
}

export interface DeserializedCardLayout {
  sorted: CardLayoutComponent[];
  rows: CardLayoutRowGroup[];
}

export const deserializeCardLayout = (layout: CardLayoutComponent[] | undefined | null): DeserializedCardLayout => {
  const safeLayout = Array.isArray(layout) ? layout : [];

  const sorted = [...safeLayout].sort((a, b) => {
    if (a.row !== b.row) {
      return a.row - b.row;
    }
    return a.col - b.col;
  });

  const rows: CardLayoutRowGroup[] = [];

  sorted.forEach((component) => {
    const current = rows[rows.length - 1];
    if (!current || current.row !== component.row) {
      rows.push({ row: component.row, items: [component] });
      return;
    }

    current.items.push(component);
  });

  return { sorted, rows };
};
