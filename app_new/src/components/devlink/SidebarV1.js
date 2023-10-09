import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-72"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"55e5a0b7-b828-d659-9bd7-814dfdb3f13c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"55e5a0b7-b828-d659-9bd7-814dfdb3f13c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684921096502},"e-72":{"id":"e-72","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-71"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"55e5a0b7-b828-d659-9bd7-814dfdb3f13c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"55e5a0b7-b828-d659-9bd7-814dfdb3f13c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684921096502},"e-73":{"id":"e-73","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-74"}},"mediaQueries":["main"],"target":{"id":"55e5a0b7-b828-d659-9bd7-814dfdb3f142","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"55e5a0b7-b828-d659-9bd7-814dfdb3f142","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684921096502},"e-74":{"id":"e-74","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-73"}},"mediaQueries":["main"],"target":{"id":"55e5a0b7-b828-d659-9bd7-814dfdb3f142","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"55e5a0b7-b828-d659-9bd7-814dfdb3f142","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684921096502},"e-228":{"id":"e-228","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-229"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221407813},"e-229":{"id":"e-229","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-61","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-228"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cd99a486-1349-489e-0b29-eff59c6e7afc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695221407813}},"actionLists":{"a-28":{"id":"a-28","title":"Sidebar 9 Menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar9_background-layer","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8ebf"]},"value":"none"}},{"id":"a-28-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".sidebar9_background-layer","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8ebf"]},"value":0,"unit":""}},{"id":"a-28-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar9_close-tablet","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8ebe"]},"value":"none"}},{"id":"a-28-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".sidebar9_close-tablet","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8ebe"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-28-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar9_background-layer","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8ebf"]},"value":"block"}},{"id":"a-28-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar9_close-tablet","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8ebe"]},"value":"block"}}]},{"actionItems":[{"id":"a-28-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar9_background-layer","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8ebf"]},"value":1,"unit":""}},{"id":"a-28-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar9_close-tablet","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8ebe"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1688972151501},"a-29":{"id":"a-29","title":"Sidebar 9 Menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar9_background-layer","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8ebf"]},"value":0,"unit":""}},{"id":"a-29-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".sidebar9_close-tablet","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8ebe"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-29-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar9_background-layer","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8ebf"]},"value":"none"}},{"id":"a-29-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".sidebar9_close-tablet","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8ebe"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1688972151501},"a-30":{"id":"a-30","title":"Sidebar 9 [Collapse]","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".sidebar9_component","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8eb0"]},"widthValue":19.5,"widthUnit":"rem","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-30-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar9_link-text","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8eba"]},"value":"none"}},{"id":"a-30-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar9_badge","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8ebb"]},"value":"none"}}]},{"actionItems":[{"id":"a-30-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".sidebar9_component","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8eb0"]},"widthValue":4.5,"widthUnit":"rem","heightUnit":"PX","locked":false}},{"id":"a-30-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":0,"target":{"selector":".sidebar9_collapse","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8eb3"]},"yValue":180,"zValue":null,"xUnit":"DEG","yUnit":"deg","zUnit":"deg"}},{"id":"a-30-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".sidebar9_collapse","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8eb3"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1684324064393},"a-31":{"id":"a-31","title":"Sidebar 9 [Expand]","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".sidebar9_component","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8eb0"]},"widthValue":19.5,"widthUnit":"rem","heightUnit":"PX","locked":false}},{"id":"a-31-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":0,"target":{"selector":".sidebar9_collapse","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8eb3"]},"yValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"DEG"}},{"id":"a-31-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".sidebar9_collapse","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8eb3"]},"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-31-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar9_link-text","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8eba"]},"value":"block"}},{"id":"a-31-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar9_badge","selectorGuids":["1d193942-c173-7dd2-3da3-b93e2f0f8ebb"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684324064393},"a-57":{"id":"a-57","title":"Navbar menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-57-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["93753a43-a985-eb80-2180-7742373473ec"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-57-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-57-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-57-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-57-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-61":{"id":"a-61","title":"Navbar menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-61-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-61-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-61-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["93753a43-a985-eb80-2180-7742373473ee"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-61-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["93753a43-a985-eb80-2180-7742373473eb"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-61-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["93753a43-a985-eb80-2180-7742373473ec"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SidebarV1({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="sidebar9_component text-color-white"
      data-w-id="55e5a0b7-b828-d659-9bd7-814dfdb3f13c"
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
      <_Builtin.Block className="sidebar9_container" tag="div">
        <_Builtin.NavbarMenu
          className="sidebar9_menu"
          tag="nav"
          role="navigation"
        >
          <_Builtin.Block className="sidebar9_menu-wrapper" tag="div">
            <_Builtin.Block className="sidebar9_menu-top" tag="div">
              <_Builtin.Block className="sidebar9_logo-wrapper" tag="div">
                <_Builtin.Block
                  className="sidebar9_collapse"
                  data-w-id="55e5a0b7-b828-d659-9bd7-814dfdb3f142"
                  tag="div"
                >
                  <_Builtin.Block
                    className="button-2 is-tertiary is-small is-icon-only"
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-embed-xsmall invert"
                      value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.6717%206.5399C10.7693%206.44227%2010.9276%206.44227%2011.0252%206.5399L11.9091%207.42379C12.0068%207.52142%2012.0068%207.67971%2011.9091%207.77734L7.70463%2011.9818L11.9091%2016.1863C12.0068%2016.2839%2012.0068%2016.4422%2011.9091%2016.5399L11.0252%2017.4237C10.9276%2017.5214%2010.7693%2017.5214%2010.6717%2017.4237L5.40654%2012.1586C5.30894%2012.061%205.30894%2011.9027%205.40654%2011.8051L10.6717%206.5399Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16.0227%206.5399C16.1203%206.44227%2016.2786%206.44227%2016.3762%206.5399L17.2601%207.42379C17.3577%207.52142%2017.3577%207.67971%2017.2601%207.77734L13.0556%2011.9818L17.2601%2016.1863C17.3577%2016.2839%2017.3577%2016.4422%2017.2601%2016.5399L16.3762%2017.4237C16.2786%2017.5214%2016.1203%2017.5214%2016.0227%2017.4237L10.7575%2012.1586C10.6599%2012.061%2010.6599%2011.9027%2010.7575%2011.8051L16.0227%206.5399Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Link
                className="sidebar9_link"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block className="sidebar9_link-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xsmall"
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2.99979%2013H3.99979V20C3.99979%2021.103%204.89679%2022%205.99979%2022H17.9998C19.1028%2022%2019.9998%2021.103%2019.9998%2020V13H20.9998C21.1975%2012.9999%2021.3908%2012.9412%2021.5552%2012.8314C21.7197%2012.7215%2021.8478%2012.5653%2021.9235%2012.3826C21.9991%2012.1999%2022.0189%2011.9989%2021.9804%2011.8049C21.9418%2011.611%2021.8466%2011.4328%2021.7068%2011.293L12.7068%202.29296C12.614%202.20001%2012.5038%202.12627%2012.3825%202.07596C12.2612%202.02565%2012.1311%201.99976%2011.9998%201.99976C11.8685%201.99976%2011.7384%202.02565%2011.6171%202.07596C11.4958%202.12627%2011.3856%202.20001%2011.2928%202.29296L2.29279%2011.293C2.15298%2011.4328%202.05777%2011.611%202.0192%2011.8049C1.98064%2011.9989%202.00044%2012.1999%202.07611%2012.3826C2.15178%2012.5653%202.27992%2012.7215%202.44433%2012.8314C2.60874%2012.9412%202.80204%2012.9999%202.99979%2013ZM9.99979%2020V15H13.9998V20H9.99979ZM11.9998%204.41396L17.9998%2010.414L18.0008%2020H15.9998V15C15.9998%2013.897%2015.1028%2013%2013.9998%2013H9.99979C8.89679%2013%207.99979%2013.897%207.99979%2015V20H5.99979V10.414L11.9998%204.41396Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="sidebar9_link-text" tag="div">
                    {"Home"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="sidebar9_link"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block className="sidebar9_link-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xsmall"
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2025%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.51603%2014.823L5.02603%2021.275C4.97989%2021.4704%204.99374%2021.6751%205.06577%2021.8625C5.1378%2022.0499%205.26467%2022.2112%205.4298%2022.3253C5.59492%2022.4395%205.79064%2022.5012%205.99138%2022.5024C6.19212%2022.5036%206.38855%2022.4442%206.55503%2022.332L12%2018.702L17.445%2022.332C17.6154%2022.4451%2017.8162%2022.5033%2018.0207%2022.4988C18.2251%2022.4944%2018.4232%2022.4274%2018.5884%2022.3069C18.7536%2022.1865%2018.878%2022.0183%2018.9448%2021.8251C19.0116%2021.6318%2019.0176%2021.4228%2018.962%2021.226L17.133%2014.826L21.669%2010.744C21.8143%2010.6132%2021.9181%2010.4427%2021.9674%2010.2535C22.0168%2010.0644%2022.0097%209.86488%2021.9469%209.67974C21.8841%209.49461%2021.7685%209.33193%2021.6142%209.21183C21.46%209.09173%2021.2739%209.01947%2021.079%209.004L15.378%208.55L12.911%203.089C12.8324%202.91316%2012.7045%202.76384%2012.5428%202.65906C12.3812%202.55429%2012.1927%202.49854%2012%202.49854C11.8074%202.49854%2011.6189%202.55429%2011.4572%202.65906C11.2956%202.76384%2011.1677%202.91316%2011.089%203.089L8.62203%208.55L2.92103%209.003C2.72948%209.01818%202.54636%209.08821%202.39358%209.20473C2.2408%209.32125%202.12482%209.47932%202.05952%209.66003C1.99422%209.84074%201.98236%2010.0364%202.02537%2010.2237C2.06838%2010.411%202.16443%2010.5819%202.30203%2010.716L6.51603%2014.823ZM9.36903%2010.497C9.54752%2010.4829%209.71895%2010.4211%209.86533%2010.318C10.0117%2010.2149%2010.1277%2010.0743%2010.201%209.911L12%205.93L13.799%209.911C13.8724%2010.0743%2013.9883%2010.2149%2014.1347%2010.318C14.2811%2010.4211%2014.4525%2010.4829%2014.631%2010.497L18.603%2010.812L15.332%2013.756C15.048%2014.012%2014.935%2014.406%2015.039%2014.774L16.292%2019.159L12.556%2016.668C12.392%2016.5579%2012.199%2016.4992%2012.0015%2016.4992C11.804%2016.4992%2011.611%2016.5579%2011.447%2016.668L7.54303%2019.271L8.59303%2014.725C8.63153%2014.5578%208.62636%2014.3835%208.57802%2014.2189C8.52969%2014.0543%208.43981%2013.9048%208.31703%2013.785L5.27903%2010.823L9.36903%2010.497Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="sidebar9_link-text" tag="div">
                    {"Saved"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="sidebar9_badge" tag="div">
                  <_Builtin.Block className="text-size-small" tag="div">
                    {"24"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="sidebar9_link"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block className="sidebar9_link-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xsmall"
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%202C6.486%202%202%206.486%202%2012C2%2017.514%206.486%2022%2012%2022C17.514%2022%2022%2017.514%2022%2012C22%206.486%2017.514%202%2012%202ZM19.931%2011H13V4.069C14.7598%204.29335%2016.3953%205.09574%2017.6498%206.3502C18.9043%207.60466%2019.7066%209.24017%2019.931%2011ZM4%2012C4%207.928%207.061%204.564%2011%204.069V12C11.003%2012.1526%2011.0409%2012.3024%2011.111%2012.438C11.126%2012.468%2011.133%2012.501%2011.152%2012.531L15.354%2019.254C14.3038%2019.7442%2013.159%2019.9988%2012%2020C7.589%2020%204%2016.411%204%2012ZM17.052%2018.196L13.805%2013H19.931C19.6746%2015.0376%2018.6436%2016.8982%2017.052%2018.196Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="sidebar9_link-text" tag="div">
                    {"Dashboard"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="sidebar9_link"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block className="sidebar9_link-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xsmall"
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.0001%207.99899C21.9999%207.82052%2021.9519%207.64535%2021.8612%207.49166C21.7705%207.33798%2021.6402%207.21137%2021.4841%207.12499L12.4621%202.12499C12.3138%202.04332%2012.1473%202.00049%2011.9781%202.00049C11.8088%202.00049%2011.6423%202.04332%2011.4941%202.12499L2.51607%207.08499C2.3601%207.17136%202.23006%207.29785%202.13941%207.45136C2.04876%207.60487%202.0008%207.77983%202.00049%207.95811C2.00018%208.13639%202.04754%208.31151%202.13767%208.46534C2.22779%208.61916%202.3574%208.7461%202.51307%208.83299L11.5351%2013.873C11.6836%2013.9564%2011.8511%2014.0004%2012.0214%2014.0005C12.1918%2014.0007%2012.3594%2013.9571%2012.5081%2013.874L21.4861%208.87399C21.642%208.78727%2021.7719%208.6604%2021.8623%208.50654C21.9527%208.35268%2022.0002%208.17744%2022.0001%207.99899ZM12.0231%2011.854L5.06007%207.96499L11.9771%204.14299L18.9411%208.00199L12.0231%2011.854Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M20.515%2011.126L12%2015.856L3.48504%2011.126L2.51404%2012.874L11.514%2017.874C11.6626%2017.9565%2011.8296%2017.9997%2011.9995%2017.9997C12.1694%2017.9997%2012.3365%2017.9565%2012.485%2017.874L21.485%2012.874L20.515%2011.126Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M20.515%2015.126L12%2019.856L3.48504%2015.126L2.51404%2016.874L11.514%2021.874C11.6626%2021.9565%2011.8296%2021.9997%2011.9995%2021.9997C12.1694%2021.9997%2012.3365%2021.9565%2012.485%2021.874L21.485%2016.874L20.515%2015.126Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="sidebar9_link-text" tag="div">
                    {"Projects"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="sidebar9_link"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block className="sidebar9_link-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xsmall"
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M19.903%208.586C19.8556%208.47747%2019.7892%208.37825%2019.707%208.293L13.707%202.293C13.6217%202.21078%2013.5225%202.14441%2013.414%202.097C13.384%202.083%2013.352%202.075%2013.32%202.064C13.2363%202.03553%2013.1492%202.01837%2013.061%202.013C13.04%202.011%2013.021%202%2013%202H6C4.897%202%204%202.897%204%204V20C4%2021.103%204.897%2022%206%2022H18C19.103%2022%2020%2021.103%2020%2020V9C20%208.979%2019.989%208.96%2019.987%208.938C19.9821%208.84972%2019.9649%208.76255%2019.936%208.679C19.926%208.647%2019.917%208.616%2019.903%208.586ZM16.586%208H14V5.414L16.586%208ZM6%2020V4H12V9C12%209.26522%2012.1054%209.51957%2012.2929%209.70711C12.4804%209.89464%2012.7348%2010%2013%2010H18L18.002%2020H6Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M8%2012H16V14H8V12ZM8%2016H16V18H8V16ZM8%208H10V10H8V8Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="sidebar9_link-text" tag="div">
                    {"Documents"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block className="sidebar9_menu-bottom" tag="div">
              <_Builtin.Link
                className="sidebar9_link"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block className="sidebar9_link-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xsmall"
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%206C10.957%206.00132%209.95716%206.41622%209.21968%207.1537C8.4822%207.89118%208.0673%208.89104%208.06598%209.934H10.066C10.066%208.867%2010.934%208%2012%208C13.066%208%2013.934%208.867%2013.934%209.934C13.934%2010.532%2013.453%2010.966%2012.718%2011.56C12.4779%2011.7481%2012.2472%2011.948%2012.027%2012.159C11.029%2013.156%2011%2014.215%2011%2014.333V15H13L12.999%2014.367C13%2014.351%2013.032%2013.981%2013.44%2013.574C13.59%2013.424%2013.779%2013.274%2013.975%2013.116C14.754%2012.485%2015.933%2011.532%2015.933%209.934C15.9322%208.89106%2015.5176%207.89104%2014.7802%207.15347C14.0428%206.4159%2013.0429%206.00106%2012%206ZM11%2016H13V18H11V16Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M12%202C6.486%202%202%206.486%202%2012C2%2017.514%206.486%2022%2012%2022C17.514%2022%2022%2017.514%2022%2012C22%206.486%2017.514%202%2012%202ZM12%2020C7.589%2020%204%2016.411%204%2012C4%207.589%207.589%204%2012%204C16.411%204%2020%207.589%2020%2012C20%2016.411%2016.411%2020%2012%2020Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="sidebar9_link-text" tag="div">
                    {"Support"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className="sidebar9_link"
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block className="sidebar9_link-wrapper" tag="div">
                  <_Builtin.HtmlEmbed
                    className="icon-embed-xsmall"
                    value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2016C14.206%2016%2016%2014.206%2016%2012C16%209.794%2014.206%208%2012%208C9.794%208%208%209.794%208%2012C8%2014.206%209.794%2016%2012%2016ZM12%2010C13.084%2010%2014%2010.916%2014%2012C14%2013.084%2013.084%2014%2012%2014C10.916%2014%2010%2013.084%2010%2012C10%2010.916%2010.916%2010%2012%2010Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M2.84498%2016.136L3.84498%2017.866C4.37598%2018.783%205.65398%2019.127%206.57498%2018.596L7.10398%2018.29C7.68252%2018.7451%208.32039%2019.1192%208.99998%2019.402V20C8.99998%2021.103%209.89698%2022%2011%2022H13C14.103%2022%2015%2021.103%2015%2020V19.402C15.6793%2019.1192%2016.3172%2018.7454%2016.896%2018.291L17.425%2018.597C18.348%2019.127%2019.623%2018.785%2020.156%2017.866L21.155%2016.137C21.42%2015.6777%2021.4919%2015.132%2021.3548%2014.6197C21.2177%2014.1075%2020.8829%2013.6706%2020.424%2013.405L19.919%2013.113C20.0263%2012.3756%2020.0263%2011.6264%2019.919%2010.889L20.424%2010.597C20.8827%2010.3312%2021.2174%209.89433%2021.3544%209.38216C21.4914%208.86998%2021.4197%208.32436%2021.155%207.865L20.156%206.136C19.625%205.216%2018.348%204.871%2017.425%205.404L16.896%205.71C16.3174%205.25491%2015.6796%204.8808%2015%204.598V4C15%202.897%2014.103%202%2013%202H11C9.89698%202%208.99998%202.897%208.99998%204V4.598C8.32062%204.88084%207.6828%205.25459%207.10398%205.709L6.57498%205.403C5.65098%204.872%204.37498%205.216%203.84398%206.135L2.84498%207.864C2.57996%208.3233%202.50809%208.86901%202.64515%209.38126C2.78222%209.89352%203.117%2010.3304%203.57598%2010.596L4.08098%2010.888C3.97321%2011.6251%203.97321%2012.3739%204.08098%2013.111L3.57598%2013.403C3.11714%2013.669%202.78251%2014.106%202.64547%2014.6184C2.50843%2015.1307%202.58018%2015.6765%202.84498%2016.136ZM6.17098%2013.378C6.05806%2012.9273%206.00064%2012.4646%205.99998%2012C5.99998%2011.538%206.05798%2011.074%206.16998%2010.622C6.22272%2010.4113%206.20537%2010.1892%206.12056%209.98928C6.03576%209.78935%205.88811%209.6225%205.69998%209.514L4.57698%208.864L5.57498%207.135L6.71998%207.797C6.9067%207.90505%207.12344%207.94962%207.33765%207.92401C7.55185%207.89841%207.75198%207.80401%207.90798%207.655C8.5845%207.01156%209.40031%206.53281%2010.292%206.256C10.4968%206.19347%2010.6761%206.06683%2010.8036%205.89473C10.931%205.72263%2010.9999%205.51416%2011%205.3V4H13V5.3C13.0001%205.51416%2013.0689%205.72263%2013.1964%205.89473C13.3238%206.06683%2013.5032%206.19347%2013.708%206.256C14.5995%206.53321%2015.4152%207.0119%2016.092%207.655C16.2481%207.80372%2016.4482%207.89792%2016.6624%207.92352C16.8765%207.94911%2017.0932%207.90473%2017.28%207.797L18.424%207.136L19.424%208.865L18.3%209.514C18.112%209.62262%2017.9644%209.78948%2017.8796%209.98938C17.7948%2010.1893%2017.7774%2010.4113%2017.83%2010.622C17.942%2011.074%2018%2011.538%2018%2012C18%2012.461%2017.942%2012.925%2017.829%2013.378C17.7765%2013.5888%2017.7941%2013.8109%2017.8791%2014.0108C17.964%2014.2107%2018.1118%2014.3775%2018.3%2014.486L19.423%2015.135L18.425%2016.864L17.28%2016.203C17.0933%2016.0948%2016.8765%2016.0501%2016.6623%2016.0757C16.448%2016.1013%2016.2479%2016.1958%2016.092%2016.345C15.4155%2016.9884%2014.5996%2017.4672%2013.708%2017.744C13.5032%2017.8065%2013.3238%2017.9332%2013.1964%2018.1053C13.0689%2018.2774%2013.0001%2018.4858%2013%2018.7L13.002%2020H11V18.7C10.9999%2018.4858%2010.931%2018.2774%2010.8036%2018.1053C10.6761%2017.9332%2010.4968%2017.8065%2010.292%2017.744C9.40048%2017.4668%208.58476%2016.9881%207.90798%2016.345C7.75228%2016.1954%207.55203%2016.1007%207.33763%2016.0753C7.12322%2016.0498%206.90636%2016.095%206.71998%2016.204L5.57598%2016.866L4.57598%2015.137L5.69998%2014.486C5.88817%2014.3775%206.03593%2014.2107%206.12091%2014.0108C6.20588%2013.8109%206.22346%2013.5888%206.17098%2013.378Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                  <_Builtin.Block className="sidebar9_link-text" tag="div">
                    {"Settings"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton className="sidebar9_menu-button" tag="div">
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
      <_Builtin.Block className="sidebar9_close-tablet" tag="div">
        <_Builtin.NavbarButton className="sidebar9_menu-button" tag="div">
          <_Builtin.HtmlEmbed
            className="icon-embed-small"
            value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M17.1266%2016.773L16.7729%2017.1266C16.5777%2017.3218%2016.2611%2017.3218%2016.0658%2017.1266L12%2013.0607L7.9341%2017.1265C7.73888%2017.3218%207.42229%2017.3218%207.22702%2017.1265L6.87347%2016.773C6.6782%2016.5777%206.6782%2016.2612%206.87347%2016.0659L10.9394%2012L6.87347%207.93413C6.6782%207.73891%206.6782%207.42232%206.87347%207.22705L7.22702%206.8735C7.42228%206.67824%207.73888%206.67824%207.9341%206.8735L12%2010.9394L16.0658%206.8735C16.2611%206.67824%2016.5777%206.67824%2016.7729%206.8735L17.1266%207.22705C17.3218%207.42231%2017.3218%207.73891%2017.1266%207.93413L13.0607%2012L17.1266%2016.0659C17.3218%2016.2612%2017.3218%2016.5777%2017.1266%2016.773Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
        </_Builtin.NavbarButton>
      </_Builtin.Block>
      <_Builtin.Block className="sidebar9_background-layer" tag="div" />
    </_Component>
  );
}
