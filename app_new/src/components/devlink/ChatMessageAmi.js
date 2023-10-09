import React from "react";
import * as _Builtin from "./_Builtin";

export function ChatMessageAmi({
  as: _Component = _Builtin.Block,
  slotMessage,
  text = (
    <>
      {
        "Hey There, nice to meet you. I'm a chatbot designed to help you succeed in the world of SEO. "
      }
      <br />
      <br />
      {"What would you like to do today?"}
    </>
  ),
}) {
  return (
    <_Component
      className="msg-ami-component text-color-white left-align"
      tag="div"
    >
      <_Builtin.Block className="chat-bubble-label-wrapper" tag="div">
        <_Builtin.Image
          className="ami-name-icon"
          loading="lazy"
          width="auto"
          height="auto"
          alt="__wf_reserved_inherit"
          src="https://uploads-ssl.webflow.com/650f1e24dc36136fba7e6044/650f1e24dc36136fba7e60c2_amicon%20svg.svg"
        />
        <_Builtin.Block className="chat-bubble-label" tag="div">
          {"Ami"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="chat-bubble is-ami" tag="div">
        {slotMessage ?? <_Builtin.Block tag="div">{text}</_Builtin.Block>}
      </_Builtin.Block>
    </_Component>
  );
}
