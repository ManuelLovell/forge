import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useChatLogStore } from '../helpers/ChatLogStore';
import { PageTitle } from './SharedStyledComponents';
import { useForgeTheme } from '../helpers/ThemeContext';

const ChatContainer = styled.div`
  ${tw`flex flex-col h-full p-4`}
`;

const ChatWindow = styled.div`
  ${tw`flex-1 overflow-y-auto rounded-lg border-2 border-white p-2`}
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  margin: 10px;
  white-space: break-spaces;
  word-wrap: break-word;
  margin-bottom: 50px;
`;

const MessageRow = styled.div`
  ${tw`mb-2 text-left`}
`;

const MessageTime = styled.span`
  ${tw`text-gray-400 text-xs mr-2`}
`;

const MessageText = styled.span`
  ${tw`text-white text-sm`}
`;

export const ChatLogPage = () => {
  const messages = useChatLogStore((state) => state.messages);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useForgeTheme();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={{ height: '100%' }}
    >
      <ChatContainer>
        <PageTitle theme={theme}>System Log</PageTitle>
        <ChatWindow>
          {messages.map((msg) => (
            <MessageRow key={msg.id}>
              <MessageTime>{msg.timestamp}</MessageTime>
              <MessageText>{msg.text}</MessageText>
            </MessageRow>
          ))}
          <div ref={chatEndRef} />
        </ChatWindow>
      </ChatContainer>
    </motion.div>
  );
};
