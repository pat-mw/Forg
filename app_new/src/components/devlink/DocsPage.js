import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ButtonNewChat } from "./ButtonNewChat";
import { WelcomeScreenRecentChatsItem } from "./WelcomeScreenRecentChatsItem";

const _interactionsData = JSON.parse(
  '{"events":{"e-176":{"id":"e-176","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-178"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eed18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eed18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693315125590},"e-178":{"id":"e-178","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-176"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eed18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eed18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693315125590},"e-177":{"id":"e-177","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0cd59956-c615-f7ce-4a97-aa0410b1eda5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0cd59956-c615-f7ce-4a97-aa0410b1eda5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693315541972},"e-173":{"id":"e-173","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-177"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0cd59956-c615-f7ce-4a97-aa0410b1eda5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0cd59956-c615-f7ce-4a97-aa0410b1eda5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693315541986},"e-183":{"id":"e-183","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-184"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eeca9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eeca9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695143126000},"e-184":{"id":"e-184","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-183"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eeca9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac8aa302-f4bc-eefd-6f91-c9580b0eeca9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695143126000},"e-185":{"id":"e-185","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-186"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d6f8db25-0236-e8cc-c100-4959cfc01c80","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d6f8db25-0236-e8cc-c100-4959cfc01c80","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695143126000},"e-186":{"id":"e-186","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-185"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d6f8db25-0236-e8cc-c100-4959cfc01c80","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d6f8db25-0236-e8cc-c100-4959cfc01c80","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695143126000},"e-228":{"id":"e-228","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-229"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221407813},"e-229":{"id":"e-229","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-61","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-228"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221407813},"e-238":{"id":"e-238","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-239"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd782b6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd782b6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1688974260615},"e-239":{"id":"e-239","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-238"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd782b6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd782b6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1688974260627},"e-240":{"id":"e-240","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-241"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd782c6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd782c6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684919915580},"e-241":{"id":"e-241","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-240"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd782c6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd782c6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684919915580},"e-242":{"id":"e-242","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-64","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-243"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7838c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7838c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221779238},"e-243":{"id":"e-243","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-242"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7838c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7838c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221779238},"e-244":{"id":"e-244","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-64","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-245"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7832e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7832e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221779238},"e-245":{"id":"e-245","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-244"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7832e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7832e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221779238},"e-246":{"id":"e-246","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-64","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-247"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7835e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7835e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695222662516},"e-247":{"id":"e-247","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-246"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7835e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd7835e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695222662516},"e-248":{"id":"e-248","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-249"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd782dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd782dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695222698662},"e-249":{"id":"e-249","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-248"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd782dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc3abad3-c5d2-3f7b-13ea-e28b8bd782dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695222698662},"e-250":{"id":"e-250","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-251"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d1c08696-d385-3535-2f64-84768ac45b6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d1c08696-d385-3535-2f64-84768ac45b6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695237458244},"e-251":{"id":"e-251","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-250"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d1c08696-d385-3535-2f64-84768ac45b6d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d1c08696-d385-3535-2f64-84768ac45b6d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695237458244}},"actionLists":{"a-50":{"id":"a-50","title":"Dropdown 2 [Open]","actionItemGroups":[{"actionItems":[{"id":"a-50-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-50-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-50-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-50-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":1,"unit":""}},{"id":"a-50-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-51":{"id":"a-51","title":"Dropdown 2 [Close]","actionItemGroups":[{"actionItems":[{"id":"a-51-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}},{"id":"a-51-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-51-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-57":{"id":"a-57","title":"Navbar menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-57-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["93753a43-a985-eb80-2180-7742373473ec"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-57-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-57-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-57-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-57-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-61":{"id":"a-61","title":"Navbar menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-61-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-61-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-61-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-61-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-61-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["93753a43-a985-eb80-2180-7742373473ec"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-11":{"id":"a-11","title":"Sidebar 7 Menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar7_background-layer","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc062"]},"value":"none"}},{"id":"a-11-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".sidebar7_background-layer","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc062"]},"value":0,"unit":""}},{"id":"a-11-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar7_close-tablet","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc061"]},"value":"none"}},{"id":"a-11-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".sidebar7_close-tablet","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc061"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-11-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar7_background-layer","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc062"]},"value":"block"}},{"id":"a-11-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar7_close-tablet","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc061"]},"value":"block"}}]},{"actionItems":[{"id":"a-11-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar7_background-layer","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc062"]},"value":1,"unit":""}},{"id":"a-11-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar7_close-tablet","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc061"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1688972151501},"a-12":{"id":"a-12","title":"Sidebar 7 Menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar7_background-layer","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc062"]},"value":0,"unit":""}},{"id":"a-12-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar7_close-tablet","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc061"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-12-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar7_background-layer","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc062"]},"value":"none"}},{"id":"a-12-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar7_close-tablet","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc061"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1688972151501},"a-13":{"id":"a-13","title":"Sidebar 7 accordion [Open]","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".sidebar7_accordion-list","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc05e"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-13-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".sidebar7_accordion-list","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc05e"]},"widthValue":100,"widthUnit":"%","heightUnit":"AUTO","locked":false}},{"id":"a-13-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".sidebar7_accordion-icon","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc05d"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1628306749914},"a-14":{"id":"a-14","title":"Sidebar 7 accordion [Close]","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".sidebar7_accordion-list","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc05e"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-14-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".sidebar7_accordion-icon","selectorGuids":["2be0efd7-0e74-46fa-3100-0e7f69ebc05d"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1628306749914},"a-64":{"id":"a-64","title":"Dropdown 2 [Open] 3","actionItemGroups":[{"actionItems":[{"id":"a-64-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-64-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-64-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-64-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":1,"unit":""}},{"id":"a-64-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-65":{"id":"a-65","title":"Dropdown 2 [Close] 3","actionItemGroups":[{"actionItems":[{"id":"a-65-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}},{"id":"a-65-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-65-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-66":{"id":"a-66","title":"Dropdown 2 [Open] 4","actionItemGroups":[{"actionItems":[{"id":"a-66-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-66-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-66-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-66-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":1,"unit":""}},{"id":"a-66-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-67":{"id":"a-67","title":"Dropdown 2 [Close] 4","actionItemGroups":[{"actionItems":[{"id":"a-67-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"value":0,"unit":""}},{"id":"a-67-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-67-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["352134ad-d3b7-0a59-b359-8a1340a0be2f"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DocsPage({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="docspage-component" tag="div">
      <_Builtin.NavbarWrapper
        className="sidebar7_component"
        data-w-id="cc3abad3-c5d2-3f7b-13ea-e28b8bd782b6"
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
        <_Builtin.Block className="sidebar7_container" tag="div">
          <_Builtin.NavbarMenu
            className="sidebar7_menu"
            tag="nav"
            role="navigation"
          >
            <_Builtin.Block className="sidebar7_menu-wrapper" tag="div">
              <_Builtin.Block className="sidebar7_menu-top" tag="div">
                <_Builtin.Link
                  className="sidebar7_link"
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block className="sidebar7_link-wrapper" tag="div">
                    <_Builtin.HtmlEmbed
                      className="icon-embed-xsmall"
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2.99979%2013H3.99979V20C3.99979%2021.103%204.89679%2022%205.99979%2022H17.9998C19.1028%2022%2019.9998%2021.103%2019.9998%2020V13H20.9998C21.1975%2012.9999%2021.3908%2012.9412%2021.5552%2012.8314C21.7197%2012.7215%2021.8478%2012.5653%2021.9235%2012.3826C21.9991%2012.1999%2022.0189%2011.9989%2021.9804%2011.8049C21.9418%2011.611%2021.8466%2011.4328%2021.7068%2011.293L12.7068%202.29296C12.614%202.20001%2012.5038%202.12627%2012.3825%202.07596C12.2612%202.02565%2012.1311%201.99976%2011.9998%201.99976C11.8685%201.99976%2011.7384%202.02565%2011.6171%202.07596C11.4958%202.12627%2011.3856%202.20001%2011.2928%202.29296L2.29279%2011.293C2.15298%2011.4328%202.05777%2011.611%202.0192%2011.8049C1.98064%2011.9989%202.00044%2012.1999%202.07611%2012.3826C2.15178%2012.5653%202.27992%2012.7215%202.44433%2012.8314C2.60874%2012.9412%202.80204%2012.9999%202.99979%2013ZM9.99979%2020V15H13.9998V20H9.99979ZM11.9998%204.41396L17.9998%2010.414L18.0008%2020H15.9998V15C15.9998%2013.897%2015.1028%2013%2013.9998%2013H9.99979C8.89679%2013%207.99979%2013.897%207.99979%2015V20H5.99979V10.414L11.9998%204.41396Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block tag="div">{"Welcome"}</_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Link
                  className="sidebar7_link"
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block className="sidebar7_link-wrapper" tag="div">
                    <_Builtin.HtmlEmbed
                      className="icon-embed-xsmall"
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2025%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.51603%2014.823L5.02603%2021.275C4.97989%2021.4704%204.99374%2021.6751%205.06577%2021.8625C5.1378%2022.0499%205.26467%2022.2112%205.4298%2022.3253C5.59492%2022.4395%205.79064%2022.5012%205.99138%2022.5024C6.19212%2022.5036%206.38855%2022.4442%206.55503%2022.332L12%2018.702L17.445%2022.332C17.6154%2022.4451%2017.8162%2022.5033%2018.0207%2022.4988C18.2251%2022.4944%2018.4232%2022.4274%2018.5884%2022.3069C18.7536%2022.1865%2018.878%2022.0183%2018.9448%2021.8251C19.0116%2021.6318%2019.0176%2021.4228%2018.962%2021.226L17.133%2014.826L21.669%2010.744C21.8143%2010.6132%2021.9181%2010.4427%2021.9674%2010.2535C22.0168%2010.0644%2022.0097%209.86488%2021.9469%209.67974C21.8841%209.49461%2021.7685%209.33193%2021.6142%209.21183C21.46%209.09173%2021.2739%209.01947%2021.079%209.004L15.378%208.55L12.911%203.089C12.8324%202.91316%2012.7045%202.76384%2012.5428%202.65906C12.3812%202.55429%2012.1927%202.49854%2012%202.49854C11.8074%202.49854%2011.6189%202.55429%2011.4572%202.65906C11.2956%202.76384%2011.1677%202.91316%2011.089%203.089L8.62203%208.55L2.92103%209.003C2.72948%209.01818%202.54636%209.08821%202.39358%209.20473C2.2408%209.32125%202.12482%209.47932%202.05952%209.66003C1.99422%209.84074%201.98236%2010.0364%202.02537%2010.2237C2.06838%2010.411%202.16443%2010.5819%202.30203%2010.716L6.51603%2014.823ZM9.36903%2010.497C9.54752%2010.4829%209.71895%2010.4211%209.86533%2010.318C10.0117%2010.2149%2010.1277%2010.0743%2010.201%209.911L12%205.93L13.799%209.911C13.8724%2010.0743%2013.9883%2010.2149%2014.1347%2010.318C14.2811%2010.4211%2014.4525%2010.4829%2014.631%2010.497L18.603%2010.812L15.332%2013.756C15.048%2014.012%2014.935%2014.406%2015.039%2014.774L16.292%2019.159L12.556%2016.668C12.392%2016.5579%2012.199%2016.4992%2012.0015%2016.4992C11.804%2016.4992%2011.611%2016.5579%2011.447%2016.668L7.54303%2019.271L8.59303%2014.725C8.63153%2014.5578%208.62636%2014.3835%208.57802%2014.2189C8.52969%2014.0543%208.43981%2013.9048%208.31703%2013.785L5.27903%2010.823L9.36903%2010.497Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block tag="div">{"Saved"}</_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.Block className="sidebar7_accordion" tag="div">
                  <_Builtin.Block
                    className="sidebar7_link"
                    data-w-id="cc3abad3-c5d2-3f7b-13ea-e28b8bd782c6"
                    tag="div"
                  >
                    <_Builtin.Block className="sidebar7_link-wrapper" tag="div">
                      <_Builtin.HtmlEmbed
                        className="icon-embed-xsmall"
                        value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%202C6.486%202%202%206.486%202%2012C2%2017.514%206.486%2022%2012%2022C17.514%2022%2022%2017.514%2022%2012C22%206.486%2017.514%202%2012%202ZM19.931%2011H13V4.069C14.7598%204.29335%2016.3953%205.09574%2017.6498%206.3502C18.9043%207.60466%2019.7066%209.24017%2019.931%2011ZM4%2012C4%207.928%207.061%204.564%2011%204.069V12C11.003%2012.1526%2011.0409%2012.3024%2011.111%2012.438C11.126%2012.468%2011.133%2012.501%2011.152%2012.531L15.354%2019.254C14.3038%2019.7442%2013.159%2019.9988%2012%2020C7.589%2020%204%2016.411%204%2012ZM17.052%2018.196L13.805%2013H19.931C19.6746%2015.0376%2018.6436%2016.8982%2017.052%2018.196Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block tag="div">
                        {"1. Getting Started"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.HtmlEmbed
                      className="sidebar7_accordion-icon"
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block className="sidebar7_accordion-list" tag="div">
                    <_Builtin.Link
                      className="sidebar7_link is-indent"
                      button={false}
                      options={{
                        href: "#1.GettingStarted",
                      }}
                    >
                      <_Builtin.Block
                        className="sidebar7_link-wrapper"
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-embed-xsmall"
                          value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.99997%2010.414L14%2014.414L19.707%208.707L22%2011V5H16L18.293%207.293L14%2011.586L9.99997%207.586L2.29297%2015.293L3.70697%2016.707L9.99997%2010.414Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          {"What is AMI?"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="sidebar7_link is-indent"
                      button={false}
                      options={{
                        href: "#1.GettingStarted",
                      }}
                    >
                      <_Builtin.Block
                        className="sidebar7_link-wrapper"
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-embed-xsmall"
                          value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M20%207H16V4C16%202.897%2015.103%202%2014%202H10C8.897%202%208%202.897%208%204V9H4C2.897%209%202%209.897%202%2011V20C2%2020.2652%202.10536%2020.5196%202.29289%2020.7071C2.48043%2020.8946%202.73478%2021%203%2021H21C21.2652%2021%2021.5196%2020.8946%2021.7071%2020.7071C21.8946%2020.5196%2022%2020.2652%2022%2020V9C22%207.897%2021.103%207%2020%207ZM4%2011H8V19H4V11ZM10%204H14V19H10V4ZM20%2019H16V9H20V19Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          {"Prerequisites"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="sidebar7_link is-indent"
                      button={false}
                      options={{
                        href: "#1.GettingStarted",
                      }}
                    >
                      <_Builtin.Block
                        className="sidebar7_link-wrapper"
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-embed-xsmall"
                          value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M21.706%205.291L18.707%202.293C18.6143%202.19996%2018.5041%202.12617%2018.3828%202.07589C18.2614%202.0256%2018.1313%201.99981%2018%202H6C5.86866%201.99981%205.73857%202.0256%205.61724%202.07589C5.4959%202.12617%205.38571%202.19996%205.293%202.293L2.294%205.291C2.20057%205.38368%202.12647%205.49398%202.076%205.61552C2.02553%205.73705%201.9997%205.8674%202%205.999V19C2%2020.103%202.897%2021%204%2021H20C21.103%2021%2022%2020.103%2022%2019V5.999C22.0003%205.8674%2021.9745%205.73705%2021.924%205.61552C21.8735%205.49398%2021.7994%205.38368%2021.706%205.291ZM6.414%204H17.586L18.585%204.999H5.415L6.414%204ZM4%2019V6.999H20L20.002%2019H4Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M15%2012H9V10H7V14H17V10H15V12Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          {"Example Uses"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="sidebar7_accordion" tag="div">
                  <_Builtin.Block
                    className="sidebar7_link"
                    data-w-id="cc3abad3-c5d2-3f7b-13ea-e28b8bd782dd"
                    tag="div"
                  >
                    <_Builtin.Block className="sidebar7_link-wrapper" tag="div">
                      <_Builtin.HtmlEmbed
                        className="icon-embed-xsmall"
                        value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%202C6.486%202%202%206.486%202%2012C2%2017.514%206.486%2022%2012%2022C17.514%2022%2022%2017.514%2022%2012C22%206.486%2017.514%202%2012%202ZM19.931%2011H13V4.069C14.7598%204.29335%2016.3953%205.09574%2017.6498%206.3502C18.9043%207.60466%2019.7066%209.24017%2019.931%2011ZM4%2012C4%207.928%207.061%204.564%2011%204.069V12C11.003%2012.1526%2011.0409%2012.3024%2011.111%2012.438C11.126%2012.468%2011.133%2012.501%2011.152%2012.531L15.354%2019.254C14.3038%2019.7442%2013.159%2019.9988%2012%2020C7.589%2020%204%2016.411%204%2012ZM17.052%2018.196L13.805%2013H19.931C19.6746%2015.0376%2018.6436%2016.8982%2017.052%2018.196Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Block tag="div">
                        {"2. Leveraging AMI"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.HtmlEmbed
                      className="sidebar7_accordion-icon"
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block className="sidebar7_accordion-list" tag="div">
                    <_Builtin.Link
                      className="sidebar7_link is-indent"
                      button={false}
                      options={{
                        href: "#2LeveragingAmi",
                      }}
                    >
                      <_Builtin.Block
                        className="sidebar7_link-wrapper"
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-embed-xsmall"
                          value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.99997%2010.414L14%2014.414L19.707%208.707L22%2011V5H16L18.293%207.293L14%2011.586L9.99997%207.586L2.29297%2015.293L3.70697%2016.707L9.99997%2010.414Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          {"What is AMI?"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="sidebar7_link is-indent"
                      button={false}
                      options={{
                        href: "#2LeveragingAmi",
                      }}
                    >
                      <_Builtin.Block
                        className="sidebar7_link-wrapper"
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-embed-xsmall"
                          value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M20%207H16V4C16%202.897%2015.103%202%2014%202H10C8.897%202%208%202.897%208%204V9H4C2.897%209%202%209.897%202%2011V20C2%2020.2652%202.10536%2020.5196%202.29289%2020.7071C2.48043%2020.8946%202.73478%2021%203%2021H21C21.2652%2021%2021.5196%2020.8946%2021.7071%2020.7071C21.8946%2020.5196%2022%2020.2652%2022%2020V9C22%207.897%2021.103%207%2020%207ZM4%2011H8V19H4V11ZM10%204H14V19H10V4ZM20%2019H16V9H20V19Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          {"Prerequisites"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                    <_Builtin.Link
                      className="sidebar7_link is-indent"
                      button={false}
                      options={{
                        href: "#2LeveragingAmi",
                      }}
                    >
                      <_Builtin.Block
                        className="sidebar7_link-wrapper"
                        tag="div"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-embed-xsmall"
                          value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M21.706%205.291L18.707%202.293C18.6143%202.19996%2018.5041%202.12617%2018.3828%202.07589C18.2614%202.0256%2018.1313%201.99981%2018%202H6C5.86866%201.99981%205.73857%202.0256%205.61724%202.07589C5.4959%202.12617%205.38571%202.19996%205.293%202.293L2.294%205.291C2.20057%205.38368%202.12647%205.49398%202.076%205.61552C2.02553%205.73705%201.9997%205.8674%202%205.999V19C2%2020.103%202.897%2021%204%2021H20C21.103%2021%2022%2020.103%2022%2019V5.999C22.0003%205.8674%2021.9745%205.73705%2021.924%205.61552C21.8735%205.49398%2021.7994%205.38368%2021.706%205.291ZM6.414%204H17.586L18.585%204.999H5.415L6.414%204ZM4%2019V6.999H20L20.002%2019H4Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M15%2012H9V10H7V14H17V10H15V12Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          {"Historical"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.NavbarMenu>
          <_Builtin.NavbarButton className="sidebar7_menu-button" tag="div">
            <_Builtin.Block className="menu-icon is-left" tag="div">
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
        <_Builtin.Block className="sidebar7_close-tablet" tag="div">
          <_Builtin.NavbarButton className="sidebar7_menu-button" tag="div">
            <_Builtin.HtmlEmbed
              className="icon-embed-small"
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M17.1266%2016.773L16.7729%2017.1266C16.5777%2017.3218%2016.2611%2017.3218%2016.0658%2017.1266L12%2013.0607L7.9341%2017.1265C7.73888%2017.3218%207.42229%2017.3218%207.22702%2017.1265L6.87347%2016.773C6.6782%2016.5777%206.6782%2016.2612%206.87347%2016.0659L10.9394%2012L6.87347%207.93413C6.6782%207.73891%206.6782%207.42232%206.87347%207.22705L7.22702%206.8735C7.42228%206.67824%207.73888%206.67824%207.9341%206.8735L12%2010.9394L16.0658%206.8735C16.2611%206.67824%2016.5777%206.67824%2016.7729%206.8735L17.1266%207.22705C17.3218%207.42231%2017.3218%207.73891%2017.1266%207.93413L13.0607%2012L17.1266%2016.0659C17.3218%2016.2612%2017.3218%2016.5777%2017.1266%2016.773Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
        <_Builtin.Block className="sidebar7_background-layer" tag="div" />
      </_Builtin.NavbarWrapper>
      <_Builtin.Block className="documentation-section-layout" tag="div">
        <_Builtin.Block className="padding-horizontal padding-medium" tag="div">
          <_Builtin.Block className="container-large" tag="div">
            <_Builtin.Block
              className="padding-vertical padding-large"
              tag="div"
            >
              <_Builtin.Grid
                className="shell4-layout_component"
                id="w-node-cc3abad3-c5d2-3f7b-13ea-e28b8bd78301-8bd782b5"
                tag="div"
              >
                <_Builtin.Block
                  className="welcome-screen_component"
                  id="w-node-cc3abad3-c5d2-3f7b-13ea-e28b8bd78302-8bd782b5"
                  tag="div"
                >
                  <_Builtin.Block className="section_page-header1" tag="div">
                    <_Builtin.Block
                      className="margin-bottom margin-large"
                      tag="div"
                    >
                      <_Builtin.Block className="container-large" tag="div">
                        <_Builtin.Block
                          className="padding-top padding-large"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="page-header1_component"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="page-header1_content-wrapper"
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                <_Builtin.Heading tag="h1">
                                  {"Documentation"}
                                </_Builtin.Heading>
                                <_Builtin.Block
                                  className="margin-top margin-xxsmall"
                                  tag="div"
                                >
                                  <_Builtin.Block tag="div">
                                    {
                                      "Here you will find guides and resources to help you get started with AMI, and example prompts to help take your SEO game to the next level."
                                    }
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className="page-header1_content-right"
                                tag="div"
                              >
                                <_Builtin.Block
                                  className="button-group margin-right margin-small"
                                  tag="div"
                                >
                                  <ButtonNewChat />
                                </_Builtin.Block>
                                <_Builtin.FormWrapper className="page-header1_form-block">
                                  <_Builtin.FormForm
                                    className="page-header1_form"
                                    name="wf-form-Filter-1"
                                    data-name="Filter 1"
                                    method="get"
                                    fs-cmsfilter-element="filters"
                                    id="wf-form-Filter-1"
                                  >
                                    <_Builtin.Block
                                      className="page-header1_search"
                                      tag="div"
                                    >
                                      <_Builtin.FormTextInput
                                        className="form-input is-search"
                                        autoFocus={false}
                                        maxLength={256}
                                        name="field-2"
                                        data-name="Field 2"
                                        placeholder="Search"
                                        type="text"
                                        disabled={false}
                                        required={false}
                                        fs-cmsfilter-field="IDENTIFIER"
                                        fs-cmsfilter-debounce="200"
                                        id="field-2"
                                      />
                                      <_Builtin.Block
                                        className="form-icon-wrapper"
                                        tag="div"
                                      >
                                        <_Builtin.HtmlEmbed
                                          className="icon-embed-xsmall"
                                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveaspectratio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M10%2018C11.775%2017.9996%2013.4988%2017.4054%2014.897%2016.312L19.293%2020.708L20.707%2019.294L16.311%2014.898C17.405%2013.4997%2017.9996%2011.7754%2018%2010C18%205.589%2014.411%202%2010%202C5.589%202%202%205.589%202%2010C2%2014.411%205.589%2018%2010%2018ZM10%204C13.309%204%2016%206.691%2016%2010C16%2013.309%2013.309%2016%2010%2016C6.691%2016%204%2013.309%204%2010C4%206.691%206.691%204%2010%204Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                        />
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.FormForm>
                                  <_Builtin.FormSuccessMessage>
                                    <_Builtin.Block tag="div">
                                      {
                                        "Thank you! Your submission has been received!"
                                      }
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
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="documentation-section_component margin-bottom margin-medium"
                    tag="section"
                    id="1.GettingStarted"
                  >
                    <_Builtin.Block
                      className="section-header1_component"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="padding-bottom padding-small"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="section-header1_content-wrapper"
                          tag="div"
                        >
                          <_Builtin.Block className="max-width-large" tag="div">
                            <_Builtin.Heading tag="h2">
                              {"1. Getting Started"}
                            </_Builtin.Heading>
                            <_Builtin.Block
                              className="margin-top margin-xxsmall"
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "AMIis an AI-powered chatbot developed by Authoritas. It leverages the power of LLM's to creative a conversation-like experience when interacting with complex SEO-related API's and data handling."
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
                              >
                                <_Builtin.HtmlEmbed
                                  className="icon-1x1-xsmall"
                                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ic%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveaspectratio%3D%22xMidYMid%20meet%22%20viewbox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M11%2018h2v-2h-2v2zm1-16C6.48%202%202%206.48%202%2012s4.48%2010%2010%2010s10-4.48%2010-10S17.52%202%2012%202zm0%2018c-4.41%200-8-3.59-8-8s3.59-8%208-8s8%203.59%208%208s-3.59%208-8%208zm0-14c-2.21%200-4%201.79-4%204h2c0-1.1.9-2%202-2s2%20.9%202%202c0%202-3%201.75-3%205h2c0-2.25%203-2.5%203-5c0-2.21-1.79-4-4-4z%22%2F%3E%3C%2Fsvg%3E"
                                />
                                <_Builtin.Block
                                  className="text-button"
                                  tag="div"
                                >
                                  {"Help Guide"}
                                </_Builtin.Block>
                              </_Builtin.Link>
                            </_Builtin.Block>
                            <_Builtin.DropdownWrapper
                              className="dropdown1_component"
                              data-w-id="cc3abad3-c5d2-3f7b-13ea-e28b8bd7832e"
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
                    <_Builtin.Block
                      className="documentation-text-wrapper"
                      tag="div"
                    >
                      <_Builtin.RichText tag="div">
                        <_Builtin.Heading tag="h4">
                          {"What is AMI?"}
                        </_Builtin.Heading>
                        <_Builtin.List tag="ul" unstyled={false}>
                          <_Builtin.ListItem>
                            {
                              "This is a Rich-text field which allows me to stylize text, embed images &videos, etc."
                            }
                          </_Builtin.ListItem>
                          <_Builtin.ListItem>
                            {"Below is some examples:"}
                          </_Builtin.ListItem>
                          <_Builtin.ListItem>
                            {"This is an example step in a guide"}
                          </_Builtin.ListItem>
                        </_Builtin.List>
                        <_Builtin.Figure
                          figure={{
                            type: "image",
                            align: "center",
                          }}
                        >
                          <_Builtin.Block tag="div">
                            <_Builtin.Image
                              loading="lazy"
                              width="auto"
                              height="auto"
                              src="https://uploads-ssl.webflow.com/650f1e24dc36136fba7e6044/650f1e24dc36136fba7e6075_placeholder%20svg.svg"
                            />
                          </_Builtin.Block>
                        </_Builtin.Figure>
                        <_Builtin.Figure
                          figure={{
                            align: "center",
                            dimensions: "854:480",
                            maxHeight: "33.723653395784545%",
                            maxWidth: "",
                            pageUrl:
                              "https://www.youtube.com/watch?v=eJQnM3VCaG4",
                            type: "video",
                          }}
                        >
                          <_Builtin.Block tag="div">
                            <_Builtin.NotSupported _atom="Iframe" />
                          </_Builtin.Block>
                        </_Builtin.Figure>
                        <_Builtin.Paragraph>{"‍"}</_Builtin.Paragraph>
                        <_Builtin.Paragraph>{"‍"}</_Builtin.Paragraph>
                      </_Builtin.RichText>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="documentation-section_component margin-bottom margin-medium"
                    tag="section"
                    id="2LeveragingAmi"
                  >
                    <_Builtin.Block
                      className="section-header1_component"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="padding-bottom padding-small"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="section-header1_content-wrapper"
                          tag="div"
                        >
                          <_Builtin.Block className="max-width-large" tag="div">
                            <_Builtin.Heading tag="h2">
                              {"2. Leveraging AMI"}
                            </_Builtin.Heading>
                            <_Builtin.Block
                              className="margin-top margin-xxsmall"
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "AMIis an AI-powered chatbot developed by Authoritas. It leverages the power of LLM's to creative a conversation-like experience when interacting with complex SEO-related API's and data handling."
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
                              >
                                <_Builtin.HtmlEmbed
                                  className="icon-1x1-xsmall"
                                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ic%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveaspectratio%3D%22xMidYMid%20meet%22%20viewbox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M11%2018h2v-2h-2v2zm1-16C6.48%202%202%206.48%202%2012s4.48%2010%2010%2010s10-4.48%2010-10S17.52%202%2012%202zm0%2018c-4.41%200-8-3.59-8-8s3.59-8%208-8s8%203.59%208%208s-3.59%208-8%208zm0-14c-2.21%200-4%201.79-4%204h2c0-1.1.9-2%202-2s2%20.9%202%202c0%202-3%201.75-3%205h2c0-2.25%203-2.5%203-5c0-2.21-1.79-4-4-4z%22%2F%3E%3C%2Fsvg%3E"
                                />
                                <_Builtin.Block
                                  className="text-button"
                                  tag="div"
                                >
                                  {"Help Guide"}
                                </_Builtin.Block>
                              </_Builtin.Link>
                            </_Builtin.Block>
                            <_Builtin.DropdownWrapper
                              className="dropdown1_component"
                              data-w-id="cc3abad3-c5d2-3f7b-13ea-e28b8bd7835e"
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
                    <_Builtin.Block
                      className="documentation-text-wrapper"
                      tag="div"
                    >
                      <_Builtin.RichText tag="div">
                        <_Builtin.Heading tag="h4">
                          {"What is AMI?"}
                        </_Builtin.Heading>
                        <_Builtin.List tag="ul" unstyled={false}>
                          <_Builtin.ListItem>
                            {
                              "This is a Rich-text field which allows me to stylize text, embed images &videos, etc."
                            }
                          </_Builtin.ListItem>
                          <_Builtin.ListItem>
                            {"Below is some examples:"}
                          </_Builtin.ListItem>
                          <_Builtin.ListItem>
                            {"This is an example step in a guide"}
                          </_Builtin.ListItem>
                        </_Builtin.List>
                        <_Builtin.Figure
                          figure={{
                            type: "image",
                            align: "center",
                          }}
                        >
                          <_Builtin.Block tag="div">
                            <_Builtin.Image
                              loading="lazy"
                              width="auto"
                              height="auto"
                              src="https://uploads-ssl.webflow.com/650f1e24dc36136fba7e6044/650f1e24dc36136fba7e6075_placeholder%20svg.svg"
                            />
                          </_Builtin.Block>
                        </_Builtin.Figure>
                        <_Builtin.Figure
                          figure={{
                            align: "center",
                            dimensions: "854:480",
                            maxHeight: "33.723653395784545%",
                            maxWidth: "",
                            pageUrl:
                              "https://www.youtube.com/watch?v=eJQnM3VCaG4",
                            type: "video",
                          }}
                        >
                          <_Builtin.Block tag="div">
                            <_Builtin.NotSupported _atom="Iframe" />
                          </_Builtin.Block>
                        </_Builtin.Figure>
                        <_Builtin.Paragraph>{"‍"}</_Builtin.Paragraph>
                        <_Builtin.Paragraph>{"‍"}</_Builtin.Paragraph>
                      </_Builtin.RichText>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="grid-list4_component margin-bottom margin-medium"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="section-header1_component"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="padding-bottom padding-small"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="section-header1_content-wrapper"
                          tag="div"
                        >
                          <_Builtin.Block className="max-width-large" tag="div">
                            <_Builtin.Heading
                              className="heading-style-h5"
                              tag="h2"
                            >
                              {"Recent Chats"}
                            </_Builtin.Heading>
                            <_Builtin.Block
                              className="margin-top margin-xxsmall"
                              tag="div"
                            >
                              <_Builtin.Block tag="div">
                                {
                                  "Hop back into one of your recent chats with AMI. "
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
                                className="button is-secondary is-small"
                                button={true}
                                options={{
                                  href: "#",
                                }}
                              >
                                {"View All Chats"}
                              </_Builtin.Link>
                            </_Builtin.Block>
                            <_Builtin.DropdownWrapper
                              className="dropdown1_component"
                              data-w-id="cc3abad3-c5d2-3f7b-13ea-e28b8bd7838c"
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
                    <_Builtin.Block
                      className="welcome-screen-grid-wrapper"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="welcome-screen-grid-list"
                        tag="div"
                      >
                        <WelcomeScreenRecentChatsItem />
                        <WelcomeScreenRecentChatsItem />
                        <WelcomeScreenRecentChatsItem />
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
