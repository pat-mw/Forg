import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-153":{"id":"e-153","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-154"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ae80b879-6294-fc23-a145-8d4f9266f48c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ae80b879-6294-fc23-a145-8d4f9266f48c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695077196495},"e-155":{"id":"e-155","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-156"}},"mediaQueries":["main"],"target":{"id":"ae80b879-6294-fc23-a145-8d4f9266f491","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ae80b879-6294-fc23-a145-8d4f9266f491","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695077196495}},"actionLists":{"a-34":{"id":"a-34","title":"Sidebar 3 [Expand]","actionItemGroups":[{"actionItems":[{"id":"a-34-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_link-text","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270eb"]},"value":"block"}},{"id":"a-34-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_badge","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270ec"]},"value":"block"}},{"id":"a-34-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_dropdown","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270f4"]},"value":"block"}},{"id":"a-34-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_avatar-text-wrapper","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270f3"]},"value":"block"}},{"id":"a-34-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_logo-expand","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d7"]},"value":"none"}},{"id":"a-34-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_logo-link","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270da"]},"value":"block"}},{"id":"a-34-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_collapse","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270dc"]},"value":"block"}},{"id":"a-34-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_form-block","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270e5"]},"value":"block"}},{"id":"a-34-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_search-narrow","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270e4"]},"value":"none"}},{"id":"a-34-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"PARENT","selector":".sidebar3_component","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d4"]},"widthValue":19.5,"widthUnit":"rem","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684324064393},"a-38":{"id":"a-38","title":"Sidebar 3 [Collapse]","actionItemGroups":[{"actionItems":[{"id":"a-38-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".sidebar3_component","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d4"]},"widthValue":19.5,"widthUnit":"rem","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-38-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_link-text","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270eb"]},"value":"none"}},{"id":"a-38-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_badge","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270ec"]},"value":"none"}},{"id":"a-38-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_dropdown","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270f4"]},"value":"none"}},{"id":"a-38-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_avatar-text-wrapper","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270f3"]},"value":"none"}},{"id":"a-38-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".sidebar3_logo-expand","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d7"]},"value":"flex"}},{"id":"a-38-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_collapse","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270dc"]},"value":"none"}},{"id":"a-38-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".sidebar3_logo-link","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270da"]},"value":"none"}},{"id":"a-38-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_form-block","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270e5"]},"value":"none"}},{"id":"a-38-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_search-narrow","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270e4"]},"value":"flex"}},{"id":"a-38-n-11","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"PARENT","selector":".sidebar3_component","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d4"]},"widthValue":4.5,"widthUnit":"rem","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1684324064393}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SidebarLinkChats({
  as: _Component = _Builtin.Link,
  linkChatsRuntimeProps = {},
  chatCountText = "24",
  countVisibility = true,

  link = {
    href: "#",
  },
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="sidebar3_link"
      button={false}
      options={link}
      {...linkChatsRuntimeProps}
    >
      <_Builtin.Block className="sidebar3_link-wrapper" tag="div">
        <_Builtin.HtmlEmbed
          className="icon-embed-xsmall"
          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ic%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveaspectratio%3D%22xMidYMid%20meet%22%20viewbox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M10%2020v-6h4v6h5v-8h3L12%203L2%2012h3v8z%22%2F%3E%3C%2Fsvg%3E"
        />
        <_Builtin.Block className="sidebar3_link-text" tag="div">
          {"Home"}
        </_Builtin.Block>
      </_Builtin.Block>
      {countVisibility ? (
        <_Builtin.Block className="sidebar3_badge" tag="div">
          <_Builtin.Block className="text-size-small" tag="div">
            {chatCountText}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
