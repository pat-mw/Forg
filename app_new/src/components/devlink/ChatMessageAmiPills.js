import React from "react";
import * as _Builtin from "./_Builtin";
import { ChatExamplePrompt } from "./ChatExamplePrompt";

export function ChatMessageAmiPills({
  as: _Component = _Builtin.Block,
  slotOptions,
}) {
  return (
    <_Component className="chat-pill-wrapper" tag="div">
      {slotOptions ?? (
        <>
          <ChatExamplePrompt />
          <ChatExamplePrompt />
          <ChatExamplePrompt />
          <ChatExamplePrompt />
          <ChatExamplePrompt />
        </>
      )}
    </_Component>
  );
}
