import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import React, { useEffect, useRef } from 'react'
import PromptSuggestion from '../PromptSuggestion/PromptSuggestion';
import ReactMarkDown from "react-markdown"
import { ChatItem } from '@/redux/chatData/reducer';
import { useSendTransaction, useWriteContract } from 'wagmi';
import { appendTxChatResponseToLatestChat, eraseLatestToolOutput } from '@/redux/chatData/action';

const ResponseBox = () => {
  const chats = useAppSelector(data => data.chatData.chats)
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch()
  const {writeContract, isPending} = useWriteContract({
    mutation:{
      onError:()=>{
        dispatch(eraseLatestToolOutput())
      },
      onSuccess:()=>{
        dispatch(eraseLatestToolOutput());
      },
       onSettled(data, error, variables, context) {
        dispatch(appendTxChatResponseToLatestChat({txdata:data as string}))
      },
    }
  });
  const {sendTransaction} = useSendTransaction({
      mutation:{
      onError:()=>{
        dispatch(eraseLatestToolOutput())
      },
      onSuccess:()=>{
        dispatch(eraseLatestToolOutput());
      },
      onSettled(data, error, variables, context) {
        dispatch(appendTxChatResponseToLatestChat({txdata:data as string}))
      },
    }
  })

  const handleSignature = async (chat:ChatItem) => {
    const unsignedtx = chat.response.tool_output;
    console.log('this is unsigned', unsignedtx, isPending)
    if(unsignedtx){
      if(unsignedtx.abi){

        writeContract({...unsignedtx as any});
      }else{
        sendTransaction({...unsignedtx as any})
      }
    }
  console.log('ispending', isPending)
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
    handleSignature(chats[chats.length-1]);
  }, [chats]);

  // Custom markdown renderers
  const addressRegex = /0x[a-fA-F0-9]{40}/g;
  const components = {
    strong: ({node, ...props}: any) => (
      <strong style={{ color: '#e0e0e0', fontWeight: 700 }} {...props} />
    ),
    h1: ({node, ...props}: any) => (
      <h1 style={{ color: '#e0e0e0', fontWeight: 700 }} className="text-2xl" {...props} />
    ),
    h2: ({node, ...props}: any) => (
      <h2 style={{ color: '#e0e0e0', fontWeight: 700 }} className="text-xl" {...props} />
    ),
    h3: ({node, ...props}: any) => (
      <h3 style={{ color: '#e0e0e0', fontWeight: 700 }} className="text-lg" {...props} />
    ),
    text: ({node, children, ...props}: any) => {
      // Highlight blockchain addresses
      if (typeof children === 'string') {
        const parts = children.split(addressRegex);
        const matches = children.match(addressRegex);
        if (matches) {
          return (
            <>
              {parts.map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {matches[i] && (
                    <span style={{ color: '#eaff7b', fontWeight: 600 }}>{matches[i]}</span>
                  )}
                </React.Fragment>
              ))}
            </>
          );
        }
      }
      return <>{children}</>;
    },
  };

  return (
    <div ref={containerRef} className="flex flex-col flex-grow max-h-screen gap-6 py-2 overflow-y-auto ">
      {
      chats.length > 0 ?
      chats.map((chat, idx) => (
        <React.Fragment key={idx}>
          <div className="self-end p-4 text-white bg-gradient-to-r from-[#222f44] to-[#202c3f] rounded-tr-sm min-w-[80px] rounded-3xl w-fit max-w-[80%]">
            {chat.prompt}
          </div>
          <div className="self-start p-4 text-white bg-[#0F172A] rounded-tl-sm rounded-2xl w-fit max-w-[80%] text-wrap break-words whitespace-pre-line">
            <ReactMarkDown components={components}>
              {chat.response.chat}
            </ReactMarkDown>
          </div>
        </React.Fragment>
      ))
      : 
      <>
      <PromptSuggestion/>
      </>
    }
    </div>
  )
}

export default ResponseBox