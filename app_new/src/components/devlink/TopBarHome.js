import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { TopBarContentRIght } from "./TopBarContentRIght";

const _interactionsData = JSON.parse(
  '{"events":{"e-117":{"id":"e-117","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-118"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"825d296e-6bce-fe68-793b-f203781e3ecf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"825d296e-6bce-fe68-793b-f203781e3ecf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695061012987},"e-118":{"id":"e-118","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-117"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"825d296e-6bce-fe68-793b-f203781e3ecf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"825d296e-6bce-fe68-793b-f203781e3ecf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695061012987},"e-119":{"id":"e-119","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-120"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"825d296e-6bce-fe68-793b-f203781e3ef3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"825d296e-6bce-fe68-793b-f203781e3ef3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695061012987},"e-120":{"id":"e-120","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-119"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"825d296e-6bce-fe68-793b-f203781e3ef3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"825d296e-6bce-fe68-793b-f203781e3ef3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695061012987},"e-209":{"id":"e-209","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-205"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3118b00f-418c-f57e-3616-d6ed436b334e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3118b00f-418c-f57e-3616-d6ed436b334e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1688093009980},"e-205":{"id":"e-205","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-209"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3118b00f-418c-f57e-3616-d6ed436b334e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3118b00f-418c-f57e-3616-d6ed436b334e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1688093009980},"e-206":{"id":"e-206","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-210"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0779b088-92d7-8382-2b36-d86c07cc3f65","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0779b088-92d7-8382-2b36-d86c07cc3f65","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1688093009980},"e-210":{"id":"e-210","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-206"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0779b088-92d7-8382-2b36-d86c07cc3f65","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0779b088-92d7-8382-2b36-d86c07cc3f65","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1688093009980},"e-228":{"id":"e-228","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-229"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221407813},"e-229":{"id":"e-229","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-61","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-228"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221407813},"e-230":{"id":"e-230","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-231"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd99a486-1349-489e-0b29-eff59c6e7b0c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd99a486-1349-489e-0b29-eff59c6e7b0c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221407813},"e-231":{"id":"e-231","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-230"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd99a486-1349-489e-0b29-eff59c6e7b0c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd99a486-1349-489e-0b29-eff59c6e7b0c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221407813},"e-232":{"id":"e-232","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-62","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-233"}},"mediaQueries":["main"],"target":{"id":"cd99a486-1349-489e-0b29-eff59c6e7b0c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd99a486-1349-489e-0b29-eff59c6e7b0c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221407813},"e-233":{"id":"e-233","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-58","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-232"}},"mediaQueries":["main"],"target":{"id":"cd99a486-1349-489e-0b29-eff59c6e7b0c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd99a486-1349-489e-0b29-eff59c6e7b0c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221407813},"e-234":{"id":"e-234","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-235"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd99a486-1349-489e-0b29-eff59c6e7b25","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd99a486-1349-489e-0b29-eff59c6e7b25","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221407813},"e-236":{"id":"e-236","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-237"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd99a486-1349-489e-0b29-eff59c6e7b27","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd99a486-1349-489e-0b29-eff59c6e7b27","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221407813}},"actionLists":{"a-43":{"id":"a-43","title":"Topbar 3 Dropdown [Open]","actionItemGroups":[{"actionItems":[{"id":"a-43-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcb4"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-43-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcb4"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-43-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcb4"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-43-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcb4"]},"value":1,"unit":""}},{"id":"a-43-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcbf"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-44":{"id":"a-44","title":"Topbar 3 Dropdown [Close]","actionItemGroups":[{"actionItems":[{"id":"a-44-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcb4"]},"value":0,"unit":""}},{"id":"a-44-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcbf"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-44-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcb4"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-57":{"id":"a-57","title":"Navbar menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-57-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["93753a43-a985-eb80-2180-7742373473ec"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-57-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-57-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-57-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-57-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-61":{"id":"a-61","title":"Navbar menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-61-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-61-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-61-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-61-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-61-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["93753a43-a985-eb80-2180-7742373473ec"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-55":{"id":"a-55","title":"Topbar 1 dropdown [Open] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-55-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".topbar1_dropdown-link-list","selectorGuids":["432c1bdd-a7bc-434c-da83-fff8323abe22"]},"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-55-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".topbar1_dropdown-link-list","selectorGuids":["432c1bdd-a7bc-434c-da83-fff8323abe22"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-55-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcbf"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-54":{"id":"a-54","title":"Topbar 1 dropdown [Close] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-54-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".topbar1_dropdown-link-list","selectorGuids":["432c1bdd-a7bc-434c-da83-fff8323abe22"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-54-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcbf"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-62":{"id":"a-62","title":"Topbar 1 dropdown [Open] [Desktop]","actionItemGroups":[{"actionItems":[{"id":"a-62-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".topbar1_dropdown-link-list","selectorGuids":["432c1bdd-a7bc-434c-da83-fff8323abe22"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-62-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".topbar1_dropdown-link-list","selectorGuids":["432c1bdd-a7bc-434c-da83-fff8323abe22"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-62-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".topbar1_dropdown-link-list","selectorGuids":["432c1bdd-a7bc-434c-da83-fff8323abe22"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-62-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".topbar1_dropdown-link-list","selectorGuids":["432c1bdd-a7bc-434c-da83-fff8323abe22"]},"value":1,"unit":""}},{"id":"a-62-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcbf"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-58":{"id":"a-58","title":"Topbar 1 dropdown [Close] [Desktop]","actionItemGroups":[{"actionItems":[{"id":"a-58-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".topbar1_dropdown-link-list","selectorGuids":["432c1bdd-a7bc-434c-da83-fff8323abe22"]},"value":0,"unit":""}},{"id":"a-58-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcbf"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-58-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".topbar1_dropdown-link-list","selectorGuids":["432c1bdd-a7bc-434c-da83-fff8323abe22"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-56":{"id":"a-56","title":"Topbar 1 Search [Close]","actionItemGroups":[{"actionItems":[{"id":"a-56-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar1_search-tablet","selectorGuids":["432c1bdd-a7bc-434c-da83-fff8323abe35"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-56-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar1_search-tablet","selectorGuids":["432c1bdd-a7bc-434c-da83-fff8323abe35"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function TopBarHome({
  as: _Component = _Builtin.NavbarWrapper,
  clickHome = {},
  clickAllChats = {},
  clickAccount = {},
  clickDocs = {},
  clickContact = {},
  navClickHome = {},
  navClickChats = {},
  navClickDocs = {},
  navClickSettings = {},
  imageProfile = "https://uploads-ssl.webflow.com/650f1e24dc36136fba7e6044/650f1e24dc36136fba7e6070_placeholder-image.svg",
  clickProfile = {},
  visibilityProfile = true,
  visibilityLoginButton = false,
  clickLogin = {},
  clickLogout = {},
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="topbar_home_component background-color-dark"
      data-w-id="cd99a486-1349-489e-0b29-eff59c6e7afc"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      fs-scrolldisable-element="smart-nav"
      config={{
        collapse: "medium",
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        noScroll: false,
      }}
    >
      <_Builtin.Block className="topbar1_container" tag="div">
        <_Builtin.Block className="topbar1_content-left" tag="div">
          <_Builtin.NavbarButton className="topbar1_menu-button" tag="div">
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
        <_Builtin.NavbarMenu
          className="topbar1_menu"
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className="topbar1_link"
            options={{
              href: "#",
            }}
            {...clickHome}
          >
            {"Home"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className="topbar1_link"
            options={{
              href: "#",
            }}
            {...clickAllChats}
          >
            {"All Chats"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className="topbar1_link"
            options={{
              href: "#",
            }}
            {...clickAccount}
          >
            {"Account"}
          </_Builtin.NavbarLink>
          <_Builtin.DropdownWrapper
            className="topbar1_menu-dropdown"
            data-w-id="cd99a486-1349-489e-0b29-eff59c6e7b0c"
            tag="div"
            delay="200"
            hover={true}
          >
            <_Builtin.DropdownToggle
              className="topbar1_dropdown-link-toggle"
              tag="div"
            >
              <_Builtin.Block tag="div">{"Support"}</_Builtin.Block>
              <_Builtin.HtmlEmbed
                className="dropdown-chevron"
                value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className="topbar1_dropdown-link-list"
              tag="nav"
            >
              <_Builtin.DropdownLink
                className="topbar1_dropdown-link"
                options={{
                  href: "#",
                }}
                {...clickDocs}
              >
                {"Docs"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className="topbar1_dropdown-link"
                options={{
                  href: "#",
                }}
                {...clickContact}
              >
                {"Contact"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
        </_Builtin.NavbarMenu>
        <TopBarContentRIght
          navClickHome={navClickHome}
          navClickChats={navClickChats}
          navClickDocs={navClickDocs}
          navClickSettings={navClickSettings}
          imageProfile={imageProfile}
          clickProfile={clickProfile}
          profileVisibility={visibilityProfile}
          logInButtonVisibility={visibilityLoginButton}
          clickLogin={clickLogin}
          clickLogOut={clickLogout}
        />
      </_Builtin.Block>
      <_Builtin.Block className="topbar1_search-tablet" tag="div">
        <_Builtin.Block className="topbar1_search-wrapper" tag="div">
          <_Builtin.FormWrapper className="topbar1_form-block">
            <_Builtin.FormForm
              className="topbar1_form"
              name="wf-form-Search-1-3"
              data-name="Search 1"
              method="get"
              id="email-form"
            >
              <_Builtin.Block className="topbar1_search" tag="div">
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
                  id="field"
                />
                <_Builtin.Block className="form-icon-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xsmall"
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveaspectratio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M10%2018C11.775%2017.9996%2013.4988%2017.4054%2014.897%2016.312L19.293%2020.708L20.707%2019.294L16.311%2014.898C17.405%2013.4997%2017.9996%2011.7754%2018%2010C18%205.589%2014.411%202%2010%202C5.589%202%202%205.589%202%2010C2%2014.411%205.589%2018%2010%2018ZM10%204C13.309%204%2016%206.691%2016%2010C16%2013.309%2013.309%2016%2010%2016C6.691%2016%204%2013.309%204%2010C4%206.691%206.691%204%2010%204Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
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
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
          <_Builtin.Block
            className="topbar1_close-icon"
            data-w-id="cd99a486-1349-489e-0b29-eff59c6e7b25"
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className="icon-embed-small"
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2032%2033%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.8354%2022.864L22.3639%2023.3354C22.1036%2023.5957%2021.6815%2023.5957%2021.4211%2023.3354L16%2017.9142L10.5788%2023.3353C10.3185%2023.5957%209.89638%2023.5957%209.63603%2023.3353L9.16462%2022.8639C8.90427%2022.6036%208.90427%2022.1815%209.16462%2021.9211L14.5858%2016.5L9.16462%2011.0788C8.90427%2010.8185%208.90427%2010.3964%209.16462%2010.136L9.63602%209.66463C9.89637%209.40428%2010.3185%209.40428%2010.5788%209.66463L16%2015.0858L21.4211%209.66462C21.6815%209.40427%2022.1036%209.40427%2022.3639%209.66462L22.8354%2010.136C23.0957%2010.3964%2023.0957%2010.8185%2022.8354%2011.0788L17.4142%2016.5L22.8354%2021.9211C23.0957%2022.1815%2023.0957%2022.6036%2022.8354%2022.864Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className="topbar1_search-overlay"
          data-w-id="cd99a486-1349-489e-0b29-eff59c6e7b27"
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
