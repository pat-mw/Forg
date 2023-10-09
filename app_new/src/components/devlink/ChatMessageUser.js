import React from "react";
import * as _Builtin from "./_Builtin";

export function ChatMessageUser({
  as: _Component = _Builtin.Block,
  text = 'I would like to get the top 20 keywords from the site "authoritas".com',
}) {
  return (
    <_Component className="msg-user-component text-color-white" tag="div">
      <_Builtin.Block className="chat-bubble-label-wrapper is-user" tag="div">
        <_Builtin.Block className="chat-bubble-label" tag="div">
          {"You"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="chat-bubble is-user" tag="div">
        <_Builtin.Block tag="div">{text}</_Builtin.Block>
        <_Builtin.Link
          className="chat-bubble-trigger"
          button={true}
          options={{
            href: "#",
          }}
        >
          {"Button Text"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
