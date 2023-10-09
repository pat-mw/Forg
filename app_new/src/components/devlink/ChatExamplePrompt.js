import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-254":{"id":"e-254","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-255"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650f1e24dc36136fba7e6053|aa11bc7f-65a4-5475-7472-8405e93175a8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650f1e24dc36136fba7e6053|aa11bc7f-65a4-5475-7472-8405e93175a8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695238833865},"e-255":{"id":"e-255","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-71","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-254"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650f1e24dc36136fba7e6053|aa11bc7f-65a4-5475-7472-8405e93175a8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650f1e24dc36136fba7e6053|aa11bc7f-65a4-5475-7472-8405e93175a8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695238833865},"e-256":{"id":"e-256","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-257"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8897808f-f287-caba-25a8-c8badea8ebbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8897808f-f287-caba-25a8-c8badea8ebbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695238871225},"e-257":{"id":"e-257","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-256"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8897808f-f287-caba-25a8-c8badea8ebbf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8897808f-f287-caba-25a8-c8badea8ebbf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695238871228}},"actionLists":{"a-70":{"id":"a-70","title":"Chat Pill - Hover In 2","actionItemGroups":[{"actionItems":[{"id":"a-70-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".chat-pill-icon","selectorGuids":["f4cdccf1-7345-3e06-43d5-50e8cdbcfc5d"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-70-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".chat-pill-icon","selectorGuids":["f4cdccf1-7345-3e06-43d5-50e8cdbcfc5d"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1695238600394},"a-71":{"id":"a-71","title":"Chat pill - Hover out 2","actionItemGroups":[{"actionItems":[{"id":"a-71-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".chat-pill-icon","selectorGuids":["f4cdccf1-7345-3e06-43d5-50e8cdbcfc5d"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1695238677911},"a-69":{"id":"a-69","title":"Chat pill - Hover out","actionItemGroups":[{"actionItems":[{"id":"a-69-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".chat-pill-icon","selectorGuids":["f4cdccf1-7345-3e06-43d5-50e8cdbcfc5d"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1695238677911}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ChatExamplePrompt({
  as: _Component = _Builtin.Link,
  text = "Performing Technical Audits",
  click = {},
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="chat-example-prompt-component"
      data-w-id="8897808f-f287-caba-25a8-c8badea8ebbf"
      button={false}
      options={{
        href: "#",
      }}
      {...click}
    >
      <_Builtin.Block className="chat-example-prompt-wrapper" tag="div">
        <_Builtin.Block className="chat-pill-text-wrapper" tag="div">
          <_Builtin.Block className="text-weight-semibold" tag="div">
            {text}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="chat-pill-icon" tag="div">
          <_Builtin.HtmlEmbed
            className="icon-embed-small"
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ph%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveaspectratio%3D%22xMidYMid%20meet%22%20viewbox%3D%220%200%20256%20256%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22m221.66%20133.66l-80%2080A8%208%200%200%201%20128%20208v-60.69l-66.34%2066.35A8%208%200%200%201%2048%20208V48a8%208%200%200%201%2013.66-5.66L128%20108.69V48a8%208%200%200%201%2013.66-5.66l80%2080a8%208%200%200%201%200%2011.32Z%22%2F%3E%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
