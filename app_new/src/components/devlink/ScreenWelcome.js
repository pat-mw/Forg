import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { WelcomeScreenExamplePromptItem } from "./WelcomeScreenExamplePromptItem";
import { WelcomeScreenRecentChatsItem } from "./WelcomeScreenRecentChatsItem";

const _interactionsData = JSON.parse(
  '{"events":{"e-149":{"id":"e-149","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-40","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-150"}},"mediaQueries":["main"],"target":{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695077196495},"e-150":{"id":"e-150","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-36","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-149"}},"mediaQueries":["main"],"target":{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ae80b879-6294-fc23-a145-8d4f9266f489","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695077196495},"e-176":{"id":"e-176","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eed18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eed18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693315125590},"e-178":{"id":"e-178","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-176"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eed18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eed18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693315125590},"e-177":{"id":"e-177","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0cd59956-c615-f7ce-4a97-aa0410b1eda5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0cd59956-c615-f7ce-4a97-aa0410b1eda5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693315541972},"e-173":{"id":"e-173","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-177"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0cd59956-c615-f7ce-4a97-aa0410b1eda5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0cd59956-c615-f7ce-4a97-aa0410b1eda5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693315541986},"e-183":{"id":"e-183","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-184"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eeca9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eeca9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695143126000},"e-184":{"id":"e-184","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-183"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eeca9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eeca9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695143126000},"e-185":{"id":"e-185","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-186"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d6f8db25-0236-e8cc-c100-4959cfc01c80","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d6f8db25-0236-e8cc-c100-4959cfc01c80","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695143126000},"e-186":{"id":"e-186","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-185"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d6f8db25-0236-e8cc-c100-4959cfc01c80","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d6f8db25-0236-e8cc-c100-4959cfc01c80","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695143126000},"e-242":{"id":"e-242","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-64","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-243"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7838c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7838c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221779238},"e-243":{"id":"e-243","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-242"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7838c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7838c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221779238},"e-244":{"id":"e-244","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-64","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-245"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7832e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7832e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221779238},"e-245":{"id":"e-245","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-244"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7832e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7832e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221779238},"e-246":{"id":"e-246","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-64","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-247"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7835e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7835e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695222662516},"e-247":{"id":"e-247","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-246"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7835e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7835e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695222662516},"e-250":{"id":"e-250","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-251"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d1c08696-d385-3535-2f64-84768ac45b6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d1c08696-d385-3535-2f64-84768ac45b6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695237458244},"e-251":{"id":"e-251","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-250"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d1c08696-d385-3535-2f64-84768ac45b6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d1c08696-d385-3535-2f64-84768ac45b6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695237458244}},"actionLists":{"a-40":{"id":"a-40","title":"Sidebar 3 Expand Icon [Show]","actionItemGroups":[{"actionItems":[{"id":"a-40-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_expand-icon","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d8"]},"value":0,"unit":""}},{"id":"a-40-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_logo-icon","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d9"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-40-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_logo-icon","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d9"]},"value":0,"unit":""}},{"id":"a-40-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_expand-icon","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d8"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1684331238115},"a-36":{"id":"a-36","title":"Sidebar 3 Expand Icon [Hide]","actionItemGroups":[{"actionItems":[{"id":"a-36-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_expand-icon","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d8"]},"value":0,"unit":""}},{"id":"a-36-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".sidebar3_logo-icon","selectorGuids":["7293f2d0-75e1-00a1-a9cd-9e3ac25270d9"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684331238115},"a-50":{"id":"a-50","title":"Dropdown 2 [Open]","actionItemGroups":[{"actionItems":[{"id":"a-50-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-50-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-50-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-50-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":1,"unit":""}},{"id":"a-50-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-51":{"id":"a-51","title":"Dropdown 2 [Close]","actionItemGroups":[{"actionItems":[{"id":"a-51-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}},{"id":"a-51-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-51-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-64":{"id":"a-64","title":"Dropdown 2 [Open] 3","actionItemGroups":[{"actionItems":[{"id":"a-64-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-64-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-64-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-64-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":1,"unit":""}},{"id":"a-64-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-65":{"id":"a-65","title":"Dropdown 2 [Close] 3","actionItemGroups":[{"actionItems":[{"id":"a-65-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}},{"id":"a-65-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-65-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-66":{"id":"a-66","title":"Dropdown 2 [Open] 4","actionItemGroups":[{"actionItems":[{"id":"a-66-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-66-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-66-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-66-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":1,"unit":""}},{"id":"a-66-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-67":{"id":"a-67","title":"Dropdown 2 [Close] 4","actionItemGroups":[{"actionItems":[{"id":"a-67-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}},{"id":"a-67-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-67-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ScreenWelcome({
  as: _Component = _Builtin.Block,
  slotExampleUseCases,
  slotRecentChats,
  slotNewChatButton,
  buttonViewAllChatsRuntimeProps = {},
  buttonHelpGuideRuntimeProps = {},
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="welcome-screen_component"
      id="w-node-ac8aa302-f4bc-eefd-6f91-c9580b0eec98-0b0eec98"
      tag="div"
    >
      <_Builtin.Block className="section_page-header1" tag="div">
        <_Builtin.Block className="margin-bottom margin-large" tag="div">
          <_Builtin.Block className="container-large" tag="div">
            <_Builtin.Block className="padding-top padding-large" tag="div">
              <_Builtin.Block className="page-header1_component" tag="div">
                <_Builtin.Block
                  className="page-header1_content-wrapper"
                  tag="div"
                >
                  <_Builtin.Block tag="div">
                    <_Builtin.Block className="div-block-23" tag="div">
                      <_Builtin.Image
                        className="sidebar3_logo-icon large"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt="__wf_reserved_inherit"
                        src="https://uploads-ssl.webflow.com/650f1e24dc36136fba7e6044/650f20ffe788a656015cce30_forg.png"
                      />
                      <_Builtin.Heading tag="h1">{"FORG"}</_Builtin.Heading>
                    </_Builtin.Block>
                    <_Builtin.Heading className="heading-style-h4" tag="h1">
                      {"Welcome!"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className="margin-top margin-xxsmall"
                      tag="div"
                    >
                      <_Builtin.Block tag="div">
                        {
                          "Enter a prompt to get started, or use one of our example prompts..."
                        }
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="prompt-input-home-wrapper margin-top margin-small"
                  tag="div"
                >
                  <_Builtin.FormWrapper className="page-header1_form-block">
                    <_Builtin.FormForm
                      className="page-header1_form"
                      name="wf-form-Filter-1"
                      data-name="Filter 1"
                      method="get"
                      fs-cmsfilter-element="filters"
                      id="wf-form-Filter-1"
                    >
                      <_Builtin.Block className="page-header1_search" tag="div">
                        <_Builtin.FormTextInput
                          className="form-input is-search"
                          autoFocus={false}
                          maxLength={256}
                          name="field-2"
                          data-name="Field 2"
                          placeholder="Describe your dream frog..."
                          type="text"
                          disabled={false}
                          required={false}
                          id="field-2"
                        />
                        <_Builtin.Block className="form-icon-wrapper" tag="div">
                          <_Builtin.HtmlEmbed
                            className="icon-embed-small"
                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ph%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveaspectratio%3D%22xMidYMid%20meet%22%20viewbox%3D%220%200%20256%20256%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22m221.66%20133.66l-80%2080A8%208%200%200%201%20128%20208v-60.69l-66.34%2066.35A8%208%200%200%201%2048%20208V48a8%208%200%200%201%2013.66-5.66L128%20108.69V48a8%208%200%200%201%2013.66-5.66l80%2080a8%208%200%200%201%200%2011.32Z%22%2F%3E%3C%2Fsvg%3E"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.FormForm>
                    <_Builtin.FormSuccessMessage>
                      <_Builtin.Block tag="div">
                        {"Thank you! Your submission has been received!"}
                      </_Builtin.Block>
                    </_Builtin.FormSuccessMessage>
                    <_Builtin.FormErrorMessage>
                      <_Builtin.Block tag="div">
                        {
                          "Oops! Something went wrong while submitting the form."
                        }
                      </_Builtin.Block>
                    </_Builtin.FormErrorMessage>
                  </_Builtin.FormWrapper>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className="grid-list4_component margin-bottom margin-medium"
        tag="div"
      >
        <_Builtin.Block className="section-header1_component" tag="div">
          <_Builtin.Block className="padding-bottom padding-small" tag="div">
            <_Builtin.Block
              className="section-header1_content-wrapper"
              tag="div"
            >
              <_Builtin.Block className="max-width-large" tag="div">
                <_Builtin.Heading className="heading-style-h5" tag="h2">
                  {"Example Use Cases"}
                </_Builtin.Heading>
                <_Builtin.Block className="margin-top margin-xxsmall" tag="div">
                  <_Builtin.Block tag="div">
                    {
                      "Try one of the suggested use-cases, with more features coming soon!"
                    }
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className="section-header1_content-right"
                tag="div"
              >
                <_Builtin.Block className="button-group" tag="div">
                  <_Builtin.Link
                    className="button is-secondary is-small is-icon"
                    button={false}
                    options={{
                      href: "#",
                    }}
                    {...buttonHelpGuideRuntimeProps}
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-1x1-xsmall"
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ic%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveaspectratio%3D%22xMidYMid%20meet%22%20viewbox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M11%2018h2v-2h-2v2zm1-16C6.48%202%202%206.48%202%2012s4.48%2010%2010%2010s10-4.48%2010-10S17.52%202%2012%202zm0%2018c-4.41%200-8-3.59-8-8s3.59-8%208-8s8%203.59%208%208s-3.59%208-8%208zm0-14c-2.21%200-4%201.79-4%204h2c0-1.1.9-2%202-2s2%20.9%202%202c0%202-3%201.75-3%205h2c0-2.25%203-2.5%203-5c0-2.21-1.79-4-4-4z%22%2F%3E%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block className="text-button" tag="div">
                      {"Help Guide"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.DropdownWrapper
                  className="dropdown1_component"
                  data-w-id="ac8aa302-f4bc-eefd-6f91-c9580b0eeca9"
                  tag="div"
                  delay="200"
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className="dropdown1_toggle"
                    tag="div"
                  >
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
                      {"Option One"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className="dropdown1_dropdown-link"
                      options={{
                        href: "#",
                      }}
                    >
                      {"Option Two"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className="dropdown1_dropdown-link"
                      options={{
                        href: "#",
                      }}
                    >
                      {"Option Three"}
                    </_Builtin.DropdownLink>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="welcome-screen-grid-wrapper" tag="div">
          <_Builtin.Block className="welcome-screen-grid-list" tag="div">
            {slotExampleUseCases ?? (
              <>
                <WelcomeScreenExamplePromptItem />
                <WelcomeScreenExamplePromptItem />
                <WelcomeScreenExamplePromptItem />
              </>
            )}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className="grid-list4_component margin-bottom margin-medium"
        tag="div"
      >
        <_Builtin.Block className="section-header1_component" tag="div">
          <_Builtin.Block className="padding-bottom padding-small" tag="div">
            <_Builtin.Block
              className="section-header1_content-wrapper"
              tag="div"
            >
              <_Builtin.Block className="max-width-large" tag="div">
                <_Builtin.Heading className="heading-style-h5" tag="h2">
                  {"Recent Chats"}
                </_Builtin.Heading>
                <_Builtin.Block className="margin-top margin-xxsmall" tag="div">
                  <_Builtin.Block tag="div">
                    {"Hop back into one of your recent chats with AMI. "}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className="section-header1_content-right"
                tag="div"
              >
                <_Builtin.Block className="button-group" tag="div">
                  <_Builtin.Link
                    className="button is-secondary is-small"
                    button={true}
                    options={{
                      href: "#",
                    }}
                    {...buttonViewAllChatsRuntimeProps}
                  >
                    {"View All Chats"}
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.DropdownWrapper
                  className="dropdown1_component"
                  data-w-id="ac8aa302-f4bc-eefd-6f91-c9580b0eed18"
                  tag="div"
                  delay="200"
                  hover={false}
                >
                  <_Builtin.DropdownToggle
                    className="dropdown1_toggle"
                    tag="div"
                  >
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
                      {"Option One"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className="dropdown1_dropdown-link"
                      options={{
                        href: "#",
                      }}
                    >
                      {"Option Two"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className="dropdown1_dropdown-link"
                      options={{
                        href: "#",
                      }}
                    >
                      {"Option Three"}
                    </_Builtin.DropdownLink>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="welcome-screen-grid-wrapper" tag="div">
          <_Builtin.Block className="welcome-screen-grid-list" tag="div">
            {slotRecentChats ?? (
              <>
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
              </>
            )}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
