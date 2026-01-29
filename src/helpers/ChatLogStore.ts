import { create } from 'zustand';
import OBR from '@owlbear-rodeo/sdk';
import { OwlbearIds } from './Constants';

export interface ChatMessage {
  id: number;
  text: string;
  timestamp: string;
}

interface ChatLogStore {
  messages: ChatMessage[];
  addMessage: (text: string) => void;
  initialized: boolean;
  setInitialized: (value: boolean) => void;
}

let messageIdCounter = 0;

export const useChatLogStore = create<ChatLogStore>((set) => ({
  messages: [],
  initialized: false,
  
  addMessage: (text: string) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timestamp = `${displayHours}:${displayMinutes} ${ampm}`;

    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: messageIdCounter++,
          text,
          timestamp,
        },
      ],
    }));
  },
  
  setInitialized: (value: boolean) => set({ initialized: value }),
}));

// Initialize broadcast listener once
export const initializeChatLogListener = () => {
  const store = useChatLogStore.getState();
  
  if (store.initialized) {
    return;
  }

  OBR.onReady(() => {
    const unsubscribe = OBR.broadcast.onMessage(
      `${OwlbearIds.EXTENSIONID}/chatlog`,
      (event) => {
        const addMessage = useChatLogStore.getState().addMessage;
        
        if (typeof event.data === 'string') {
          addMessage(event.data);
        } else if (typeof event.data === 'object' && event.data.message) {
          addMessage(event.data.message);
        }
      }
    );
    
    useChatLogStore.getState().setInitialized(true);
  });
};
