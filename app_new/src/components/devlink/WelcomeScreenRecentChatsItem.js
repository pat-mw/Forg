import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-176":{"id":"e-176","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eed18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eed18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693315125590},"e-178":{"id":"e-178","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-176"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eed18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eed18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693315125590},"e-177":{"id":"e-177","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0cd59956-c615-f7ce-4a97-aa0410b1eda5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0cd59956-c615-f7ce-4a97-aa0410b1eda5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693315541972},"e-173":{"id":"e-173","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-177"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0cd59956-c615-f7ce-4a97-aa0410b1eda5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0cd59956-c615-f7ce-4a97-aa0410b1eda5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693315541986},"e-183":{"id":"e-183","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-184"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eeca9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eeca9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695143126000},"e-184":{"id":"e-184","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-183"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eeca9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eeca9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695143126000},"e-185":{"id":"e-185","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-186"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d6f8db25-0236-e8cc-c100-4959cfc01c80","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d6f8db25-0236-e8cc-c100-4959cfc01c80","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695143126000},"e-186":{"id":"e-186","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-185"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d6f8db25-0236-e8cc-c100-4959cfc01c80","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d6f8db25-0236-e8cc-c100-4959cfc01c80","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695143126000},"e-242":{"id":"e-242","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-64","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-243"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7838c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7838c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221779238},"e-243":{"id":"e-243","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-242"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7838c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7838c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221779238},"e-244":{"id":"e-244","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-64","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-245"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7832e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7832e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221779238},"e-245":{"id":"e-245","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-244"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7832e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7832e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221779238},"e-246":{"id":"e-246","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-64","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-247"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7835e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7835e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695222662516},"e-247":{"id":"e-247","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-246"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7835e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7835e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695222662516},"e-250":{"id":"e-250","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-251"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d1c08696-d385-3535-2f64-84768ac45b6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d1c08696-d385-3535-2f64-84768ac45b6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695237458244},"e-251":{"id":"e-251","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-250"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d1c08696-d385-3535-2f64-84768ac45b6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d1c08696-d385-3535-2f64-84768ac45b6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695237458244}},"actionLists":{"a-50":{"id":"a-50","title":"Dropdown 2 [Open]","actionItemGroups":[{"actionItems":[{"id":"a-50-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-50-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-50-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-50-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":1,"unit":""}},{"id":"a-50-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-51":{"id":"a-51","title":"Dropdown 2 [Close]","actionItemGroups":[{"actionItems":[{"id":"a-51-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}},{"id":"a-51-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-51-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-64":{"id":"a-64","title":"Dropdown 2 [Open] 3","actionItemGroups":[{"actionItems":[{"id":"a-64-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-64-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-64-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-64-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":1,"unit":""}},{"id":"a-64-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-65":{"id":"a-65","title":"Dropdown 2 [Close] 3","actionItemGroups":[{"actionItems":[{"id":"a-65-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}},{"id":"a-65-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-65-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-66":{"id":"a-66","title":"Dropdown 2 [Open] 4","actionItemGroups":[{"actionItems":[{"id":"a-66-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-66-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-66-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-66-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":1,"unit":""}},{"id":"a-66-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-67":{"id":"a-67","title":"Dropdown 2 [Close] 4","actionItemGroups":[{"actionItems":[{"id":"a-67-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}},{"id":"a-67-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-67-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function WelcomeScreenRecentChatsItem({
  as: _Component = _Builtin.Block,
  title = "Chat Title",
  date = "11 Jan 2022",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttonRuntimeProps = {},
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="welcome-screen-grid-item" tag="div">
      <_Builtin.Block className="margin-bottom margin-small" tag="div">
        <_Builtin.Block className="grid-list4_content-top" tag="div">
          <_Builtin.Block className="welcome-screen-grid-icon" tag="div">
            <_Builtin.HtmlEmbed
              className="icon-embed-small"
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ic%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveaspectratio%3D%22xMidYMid%20meet%22%20viewbox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22m4%2018l2-2h14V4H4z%22%20opacity%3D%22.3%22%2F%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M20%202H4c-1.1%200-2%20.9-2%202v18l4-4h14c1.1%200%202-.9%202-2V4c0-1.1-.9-2-2-2zm0%2014H6l-2%202V4h16v12z%22%2F%3E%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className="welcome-screen-grid-title-wrapper"
            tag="div"
          >
            <_Builtin.Block className="text-weight-semibold" tag="div">
              {title}
            </_Builtin.Block>
            <_Builtin.Block className="grid-list4_date-wrapper" tag="div">
              <_Builtin.Block className="text-size-small" tag="div">
                {date}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.DropdownWrapper
            className="dropdown1_component"
            data-w-id="0cd59956-c615-f7ce-4a97-aa0410b1eda5"
            tag="div"
            delay="200"
            hover={false}
          >
            <_Builtin.DropdownToggle className="dropdown1_toggle" tag="div">
              <_Builtin.Block
                className="button-3 is-tertiary is-small is-icon-only"
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className="icon-embed-xsmall invert"
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_609_6561)%22%3E%0A%3Cpath%20d%3D%22M12%2010C10.9%2010%2010%2010.9%2010%2012C10%2013.1%2010.9%2014%2012%2014C13.1%2014%2014%2013.1%2014%2012C14%2010.9%2013.1%2010%2012%2010ZM18%2010C16.9%2010%2016%2010.9%2016%2012C16%2013.1%2016.9%2014%2018%2014C19.1%2014%2020%2013.1%2020%2012C20%2010.9%2019.1%2010%2018%2010ZM6%2010C4.9%2010%204%2010.9%204%2012C4%2013.1%204.9%2014%206%2014C7.1%2014%208%2013.1%208%2012C8%2010.9%207.1%2010%206%2010Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cclippath%20id%3D%22clip0_609_6561%22%3E%0A%3Crect%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fclippath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className="dropdown1_dropdown-list is-right"
              tag="nav"
            >
              <_Builtin.DropdownLink
                className="dropdown1_dropdown-link"
                options={{
                  href: "#",
                }}
              >
                {"Rename"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown1_dropdown-link"
                options={{
                  href: "#",
                }}
              >
                {"Share"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="dropdown1_dropdown-link"
                options={{
                  href: "#",
                }}
              >
                {"Delete"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="grid-list4_content-bottom" tag="div">
        <_Builtin.Block tag="div">
          <_Builtin.Link
            className="button is-secondary is-small is-grid-list"
            button={true}
            options={{
              href: "#",
            }}
            {...buttonRuntimeProps}
          >
            {"View Chat"}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}