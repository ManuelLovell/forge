import { create } from 'zustand';

export type RollResolutionSource = 'bones' | 'rumble' | 'dice-plus' | 'text';
export type RollResolutionMode = 'subtract' | 'add';

export interface RollResolutionPayload {
  total: number;
  source: RollResolutionSource;
  message?: string;
  senderId?: string | null;
}

interface RollResolutionState {
  isOpen: boolean;
  pendingTotal: number | null;
  pendingSource: RollResolutionSource | null;
  pendingMessage: string | null;
  pendingSenderId: string | null;
  eventId: number;
  openFromRoll: (payload: RollResolutionPayload) => void;
  close: () => void;
}

export const useRollResolutionStore = create<RollResolutionState>((set) => ({
  isOpen: false,
  pendingTotal: null,
  pendingSource: null,
  pendingMessage: null,
  pendingSenderId: null,
  eventId: 0,
  openFromRoll: (payload) => set({
    isOpen: true,
    pendingTotal: Math.abs(payload.total),
    pendingSource: payload.source,
    pendingMessage: payload.message?.trim() || null,
    pendingSenderId: payload.senderId || null,
    eventId: Date.now(),
  }),
  close: () => set({
    isOpen: false,
    pendingTotal: null,
    pendingSource: null,
    pendingMessage: null,
    pendingSenderId: null,
    eventId: 0,
  }),
}));