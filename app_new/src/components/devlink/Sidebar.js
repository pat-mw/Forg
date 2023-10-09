import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { SidebarLinkChats } from "./SidebarLinkChats";
import { SidebarLinkAllChats } from "./SidebarLinkAllChats";
import { SidebarAccount } from "./SidebarAccount";
import { ButtonLogInSidebar } from "./ButtonLogInSidebar";

const _interactionsData = JSON.parse(
  '{"events":{"e-147":{"id":"e-147","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-148"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695077196495},"e-148":{"id":"e-148","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-147"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695077196495},"e-149":{"id":"e-149","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-150"}},"mediaQueries":["main"],"target":{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695077196495},"e-150":{"id":"e-150","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-149"}},"mediaQueries":["main"],"target":{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695077196495},"e-151":{"id":"e-151","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-152"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695077196495},"e-152":{"id":"e-152","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-151"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695077196495},"e-153":{"id":"e-153","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-154"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ae80b879-6294-fc23-a145-8d4f9266f48c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ae80b879-6294-fc23-a145-8d4f9266f48c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695077196495},"e-155":{"id":"e-155","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-156"}},"mediaQueries":["main"],"target":{"id":"ae80b879-6294-fc23-a145-8d4f9266f491","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ae80b879-6294-fc23-a145-8d4f9266f491","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695077196495},"e-228":{"id":"e-228","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-229"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221407813},"e-229":{"id":"e-229","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-61","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-228"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221407813}},"actionLists":{"a-33":{"id":"a-33","title":"Sidebar 3 Collapse Icon [Show]","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_collapse","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270dc"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-33-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_collapse","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270dc"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1684331238115},"a-37":{"id":"a-37","title":"Sidebar 3 Collapse Icon [Hide]","actionItemGroups":[{"actionItems":[{"id":"a-37-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_collapse","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270dc"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684331238115},"a-40":{"id":"a-40","title":"Sidebar 3 Expand Icon [Show]","actionItemGroups":[{"actionItems":[{"id":"a-40-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_expand-icon","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d8"]},"value":0,"unit":""}},{"id":"a-40-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_logo-icon","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d9"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-40-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_logo-icon","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d9"]},"value":0,"unit":""}},{"id":"a-40-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_expand-icon","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d8"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1684331238115},"a-36":{"id":"a-36","title":"Sidebar 3 Expand Icon [Hide]","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_expand-icon","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d8"]},"value":0,"unit":""}},{"id":"a-36-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_logo-icon","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d9"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684331238115},"a-41":{"id":"a-41","title":"Sidebar 3 Menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_background-layer","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270f9"]},"value":"none"}},{"id":"a-41-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_background-layer","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270f9"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-41-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_background-layer","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270f9"]},"value":"block"}}]},{"actionItems":[{"id":"a-41-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_background-layer","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270f9"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1688972151501},"a-39":{"id":"a-39","title":"Sidebar 3 Menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-39-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_background-layer","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270f9"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-39-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_background-layer","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270f9"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1688972151501},"a-34":{"id":"a-34","title":"Sidebar 3 [Expand]","actionItemGroups":[{"actionItems":[{"id":"a-34-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_link-text","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270eb"]},"value":"block"}},{"id":"a-34-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_badge","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270ec"]},"value":"block"}},{"id":"a-34-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_dropdown","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270f4"]},"value":"block"}},{"id":"a-34-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_avatar-text-wrapper","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270f3"]},"value":"block"}},{"id":"a-34-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_logo-expand","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d7"]},"value":"none"}},{"id":"a-34-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_logo-link","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270da"]},"value":"block"}},{"id":"a-34-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_collapse","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270dc"]},"value":"block"}},{"id":"a-34-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_form-block","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270e5"]},"value":"block"}},{"id":"a-34-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_search-narrow","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270e4"]},"value":"none"}},{"id":"a-34-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"PARENT","selector":".sidebar3_component","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d4"]},"widthValue":19.5,"widthUnit":"rem","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684324064393},"a-38":{"id":"a-38","title":"Sidebar 3 [Collapse]","actionItemGroups":[{"actionItems":[{"id":"a-38-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".sidebar3_component","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d4"]},"widthValue":19.5,"widthUnit":"rem","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-38-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_link-text","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270eb"]},"value":"none"}},{"id":"a-38-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_badge","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270ec"]},"value":"none"}},{"id":"a-38-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_dropdown","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270f4"]},"value":"none"}},{"id":"a-38-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_avatar-text-wrapper","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270f3"]},"value":"none"}},{"id":"a-38-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".sidebar3_logo-expand","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d7"]},"value":"flex"}},{"id":"a-38-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_collapse","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270dc"]},"value":"none"}},{"id":"a-38-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".sidebar3_logo-link","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270da"]},"value":"none"}},{"id":"a-38-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_form-block","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270e5"]},"value":"none"}},{"id":"a-38-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar3_search-narrow","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270e4"]},"value":"flex"}},{"id":"a-38-n-11","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"PARENT","selector":".sidebar3_component","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d4"]},"widthValue":4.5,"widthUnit":"rem","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1684324064393},"a-57":{"id":"a-57","title":"Navbar menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-57-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["93753a43-a985-eb80-2180-7742373473ec"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-57-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-57-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-57-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-57-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-61":{"id":"a-61","title":"Navbar menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-61-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-61-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-61-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-61-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-61-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["93753a43-a985-eb80-2180-7742373473ec"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Sidebar({
  as: _Component = _Builtin.NavbarWrapper,
  linkChatsRuntimeProps = {},
  linkAccountRuntimeProps = {},
  slotSidebarAccount,
  accountVisibility = true,
  signInButtonVisibility = false,
  slotDynamicLinks,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="sidebar3_component"
      data-w-id="ae80b879-6294-fc23-a145-8d4f9266f489"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      fs-scrolldisable-element="smart-nav"
      config={{
        collapse: "medium",
        animation: "over-left",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        noScroll: false,
      }}
    >
      <_Builtin.Block className="sidebar3_container" tag="div">
        <_Builtin.Block className="sidebar3_logo-wrapper" tag="div">
          <_Builtin.Block
            className="sidebar3_logo-expand invert"
            data-w-id="ae80b879-6294-fc23-a145-8d4f9266f48c"
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className="sidebar3_expand-icon invert"
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.9951%206.57615C11.8975%206.47852%2011.7392%206.47852%2011.6416%206.57615L10.7577%207.46004C10.66%207.55767%2010.66%207.71596%2010.7577%207.81359L14.9622%2012.0181L10.7577%2016.2226C10.66%2016.3202%2010.66%2016.4785%2010.7577%2016.5762L11.6416%2017.46C11.7392%2017.5577%2011.8975%2017.5577%2011.9951%2017.46L17.2603%2012.1949C17.3579%2012.0972%2017.3579%2011.939%2017.2603%2011.8413L11.9951%206.57615Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.64416%206.57615C6.54653%206.47852%206.38824%206.47852%206.29061%206.57615L5.40672%207.46004C5.30909%207.55767%205.30909%207.71596%205.40672%207.81359L9.61123%2012.0181L5.40672%2016.2226C5.30909%2016.3202%205.30909%2016.4785%205.40672%2016.5762L6.29061%2017.46C6.38824%2017.5577%206.54653%2017.5577%206.64416%2017.46L11.9093%2012.1949C12.0069%2012.0972%2012.0069%2011.939%2011.9093%2011.8413L6.64416%206.57615Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Image
              className="sidebar3_logo-icon invert"
              loading="lazy"
              width="auto"
              height="auto"
              alt="__wf_reserved_inherit"
              src="https://uploads-ssl.webflow.com/650f1e24dc36136fba7e6044/650f20ffe788a656015cce30_forg.png"
            />
          </_Builtin.Block>
          <_Builtin.Link
            className="sidebar3_logo-link"
            button={false}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Heading tag="h1">{"FORG"}</_Builtin.Heading>
          </_Builtin.Link>
          <_Builtin.Block
            className="sidebar3_collapse invert"
            data-w-id="ae80b879-6294-fc23-a145-8d4f9266f491"
            tag="div"
          >
            <_Builtin.Block
              className="button-3 is-tertiary is-small is-icon-only"
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className="icon-embed-xsmall"
                value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.6717%206.5399C10.7693%206.44227%2010.9276%206.44227%2011.0252%206.5399L11.9091%207.42379C12.0068%207.52142%2012.0068%207.67971%2011.9091%207.77734L7.70463%2011.9818L11.9091%2016.1863C12.0068%2016.2839%2012.0068%2016.4422%2011.9091%2016.5399L11.0252%2017.4237C10.9276%2017.5214%2010.7693%2017.5214%2010.6717%2017.4237L5.40654%2012.1586C5.30894%2012.061%205.30894%2011.9027%205.40654%2011.8051L10.6717%206.5399Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16.0227%206.5399C16.1203%206.44227%2016.2786%206.44227%2016.3762%206.5399L17.2601%207.42379C17.3577%207.52142%2017.3577%207.67971%2017.2601%207.77734L13.0556%2011.9818L17.2601%2016.1863C17.3577%2016.2839%2017.3577%2016.4422%2017.2601%2016.5399L16.3762%2017.4237C16.2786%2017.5214%2016.1203%2017.5214%2016.0227%2017.4237L10.7575%2012.1586C10.6599%2012.061%2010.6599%2011.9027%2010.7575%2011.8051L16.0227%206.5399Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.NavbarMenu
          className="sidebar3_menu"
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block className="sidebar3_menu-wrapper" tag="div">
            <_Builtin.Block className="sidebar3_logo-wrapper-tablet" tag="div">
              <_Builtin.Link
                className="sidebar3_logo-link-tablet"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className="sidebar3_logo"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="__wf_reserved_inherit"
                  src="https://uploads-ssl.webflow.com/650f1e24dc36136fba7e6044/650f1e24dc36136fba7e608c_company-logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Block className="sidebar3_close-mobile" tag="div">
                <_Builtin.NavbarButton
                  className="sidebar3_menu-button"
                  tag="div"
                >
                  <_Builtin.HtmlEmbed
                    className="icon-embed-small"
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M17.1266%2016.773L16.7729%2017.1266C16.5777%2017.3218%2016.2611%2017.3218%2016.0658%2017.1266L12%2013.0607L7.9341%2017.1265C7.73888%2017.3218%207.42229%2017.3218%207.22702%2017.1265L6.87347%2016.773C6.6782%2016.5777%206.6782%2016.2612%206.87347%2016.0659L10.9394%2012L6.87347%207.93413C6.6782%207.73891%206.6782%207.42232%206.87347%207.22705L7.22702%206.8735C7.42228%206.67824%207.73888%206.67824%207.9341%206.8735L12%2010.9394L16.0658%206.8735C16.2611%206.67824%2016.5777%206.67824%2016.7729%206.8735L17.1266%207.22705C17.3218%207.42231%2017.3218%207.73891%2017.1266%207.93413L13.0607%2012L17.1266%2016.0659C17.3218%2016.2612%2017.3218%2016.5777%2017.1266%2016.773Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.NavbarButton>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="sidebar-new_chat_button" tag="div">
              <_Builtin.Link
                className="sidebar3_link is-alternate"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block className="sidebar3_link-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xsmall"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ic%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveaspectratio%3D%22xMidYMid%20meet%22%20viewbox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M12%202C6.48%202%202%206.48%202%2012s4.48%2010%2010%2010s10-4.48%2010-10S17.52%202%2012%202zm5%2011h-4v4h-2v-4H7v-2h4V7h2v4h4v2z%22%2F%3E%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="sidebar3_link-text" tag="div">
                    {"New Frog"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block className="sidebar3_menu-chats" tag="div">
              {slotDynamicLinks ?? (
                <>
                  <SidebarLinkChats
                    linkChatsRuntimeProps={linkChatsRuntimeProps}
                    countVisibility={false}
                    link={{
                      href: "#",
                    }}
                  />
                  <SidebarLinkAllChats
                    link={{
                      href: "#",
                    }}
                    text="My Frogs"
                  />
                  <SidebarLinkAllChats
                    link={{
                      href: "#",
                    }}
                    text="Frog Feed"
                  />
                </>
              )}
            </_Builtin.Block>
            <_Builtin.Block className="sidebar3_menu-bottom" tag="div">
              <_Builtin.Block className="line-divider" tag="div" />
              <_Builtin.Block className="sidebar3_link-list" tag="div">
                <_Builtin.Link
                  className="sidebar3_link"
                  button={false}
                  options={{
                    href: "#",
                  }}
                  {...linkAccountRuntimeProps}
                >
                  <_Builtin.Block className="sidebar3_link-wrapper" tag="div">
                    <_Builtin.HtmlEmbed
                      className="icon-embed-xsmall"
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2016C14.206%2016%2016%2014.206%2016%2012C16%209.794%2014.206%208%2012%208C9.794%208%208%209.794%208%2012C8%2014.206%209.794%2016%2012%2016ZM12%2010C13.084%2010%2014%2010.916%2014%2012C14%2013.084%2013.084%2014%2012%2014C10.916%2014%2010%2013.084%2010%2012C10%2010.916%2010.916%2010%2012%2010Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M2.84498%2016.136L3.84498%2017.866C4.37598%2018.783%205.65398%2019.127%206.57498%2018.596L7.10398%2018.29C7.68252%2018.7451%208.32039%2019.1192%208.99998%2019.402V20C8.99998%2021.103%209.89698%2022%2011%2022H13C14.103%2022%2015%2021.103%2015%2020V19.402C15.6793%2019.1192%2016.3172%2018.7454%2016.896%2018.291L17.425%2018.597C18.348%2019.127%2019.623%2018.785%2020.156%2017.866L21.155%2016.137C21.42%2015.6777%2021.4919%2015.132%2021.3548%2014.6197C21.2177%2014.1075%2020.8829%2013.6706%2020.424%2013.405L19.919%2013.113C20.0263%2012.3756%2020.0263%2011.6264%2019.919%2010.889L20.424%2010.597C20.8827%2010.3312%2021.2174%209.89433%2021.3544%209.38216C21.4914%208.86998%2021.4197%208.32436%2021.155%207.865L20.156%206.136C19.625%205.216%2018.348%204.871%2017.425%205.404L16.896%205.71C16.3174%205.25491%2015.6796%204.8808%2015%204.598V4C15%202.897%2014.103%202%2013%202H11C9.89698%202%208.99998%202.897%208.99998%204V4.598C8.32062%204.88084%207.6828%205.25459%207.10398%205.709L6.57498%205.403C5.65098%204.872%204.37498%205.216%203.84398%206.135L2.84498%207.864C2.57996%208.3233%202.50809%208.86901%202.64515%209.38126C2.78222%209.89352%203.117%2010.3304%203.57598%2010.596L4.08098%2010.888C3.97321%2011.6251%203.97321%2012.3739%204.08098%2013.111L3.57598%2013.403C3.11714%2013.669%202.78251%2014.106%202.64547%2014.6184C2.50843%2015.1307%202.58018%2015.6765%202.84498%2016.136ZM6.17098%2013.378C6.05806%2012.9273%206.00064%2012.4646%205.99998%2012C5.99998%2011.538%206.05798%2011.074%206.16998%2010.622C6.22272%2010.4113%206.20537%2010.1892%206.12056%209.98928C6.03576%209.78935%205.88811%209.6225%205.69998%209.514L4.57698%208.864L5.57498%207.135L6.71998%207.797C6.9067%207.90505%207.12344%207.94962%207.33765%207.92401C7.55185%207.89841%207.75198%207.80401%207.90798%207.655C8.5845%207.01156%209.40031%206.53281%2010.292%206.256C10.4968%206.19347%2010.6761%206.06683%2010.8036%205.89473C10.931%205.72263%2010.9999%205.51416%2011%205.3V4H13V5.3C13.0001%205.51416%2013.0689%205.72263%2013.1964%205.89473C13.3238%206.06683%2013.5032%206.19347%2013.708%206.256C14.5995%206.53321%2015.4152%207.0119%2016.092%207.655C16.2481%207.80372%2016.4482%207.89792%2016.6624%207.92352C16.8765%207.94911%2017.0932%207.90473%2017.28%207.797L18.424%207.136L19.424%208.865L18.3%209.514C18.112%209.62262%2017.9644%209.78948%2017.8796%209.98938C17.7948%2010.1893%2017.7774%2010.4113%2017.83%2010.622C17.942%2011.074%2018%2011.538%2018%2012C18%2012.461%2017.942%2012.925%2017.829%2013.378C17.7765%2013.5888%2017.7941%2013.8109%2017.8791%2014.0108C17.964%2014.2107%2018.1118%2014.3775%2018.3%2014.486L19.423%2015.135L18.425%2016.864L17.28%2016.203C17.0933%2016.0948%2016.8765%2016.0501%2016.6623%2016.0757C16.448%2016.1013%2016.2479%2016.1958%2016.092%2016.345C15.4155%2016.9884%2014.5996%2017.4672%2013.708%2017.744C13.5032%2017.8065%2013.3238%2017.9332%2013.1964%2018.1053C13.0689%2018.2774%2013.0001%2018.4858%2013%2018.7L13.002%2020H11V18.7C10.9999%2018.4858%2010.931%2018.2774%2010.8036%2018.1053C10.6761%2017.9332%2010.4968%2017.8065%2010.292%2017.744C9.40048%2017.4668%208.58476%2016.9881%207.90798%2016.345C7.75228%2016.1954%207.55203%2016.1007%207.33763%2016.0753C7.12322%2016.0498%206.90636%2016.095%206.71998%2016.204L5.57598%2016.866L4.57598%2015.137L5.69998%2014.486C5.88817%2014.3775%206.03593%2014.2107%206.12091%2014.0108C6.20588%2013.8109%206.22346%2013.5888%206.17098%2013.378Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block className="sidebar3_link-text" tag="div">
                      {"AccountSettings"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block className="line-divider" tag="div" />
              <_Builtin.Block tag="div">
                {slotSidebarAccount ?? (
                  <>
                    <SidebarAccount visibility={accountVisibility} />
                    <ButtonLogInSidebar visibility={signInButtonVisibility} />
                  </>
                )}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton className="sidebar3_menu-button" tag="div">
          <_Builtin.Block className="menu-icon" tag="div">
            <_Builtin.Block className="menu-icon_line-top" tag="div" />
            <_Builtin.Block className="menu-icon_line-middle" tag="div">
              <_Builtin.Block
                className="menu-icon_line-middle-inner"
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block className="menu-icon_line-bottom" tag="div" />
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.Block>
      <_Builtin.Block className="sidebar3_background-layer" tag="div" />
    </_Component>
  );
}
