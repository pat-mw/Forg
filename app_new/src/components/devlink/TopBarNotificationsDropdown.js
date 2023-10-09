import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-117":{"id":"e-117","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-118"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"825d296e-6bce-fe68-793b-f203781e3ecf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"825d296e-6bce-fe68-793b-f203781e3ecf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695061012987},"e-118":{"id":"e-118","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-117"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"825d296e-6bce-fe68-793b-f203781e3ecf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"825d296e-6bce-fe68-793b-f203781e3ecf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695061012987},"e-119":{"id":"e-119","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-120"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"825d296e-6bce-fe68-793b-f203781e3ef3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"825d296e-6bce-fe68-793b-f203781e3ef3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695061012987},"e-120":{"id":"e-120","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-119"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"825d296e-6bce-fe68-793b-f203781e3ef3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"825d296e-6bce-fe68-793b-f203781e3ef3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695061012987},"e-209":{"id":"e-209","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-205"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3118b00f-418c-f57e-3616-d6ed436b334e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3118b00f-418c-f57e-3616-d6ed436b334e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1688093009980},"e-205":{"id":"e-205","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-209"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3118b00f-418c-f57e-3616-d6ed436b334e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3118b00f-418c-f57e-3616-d6ed436b334e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1688093009980},"e-206":{"id":"e-206","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-43","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-210"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0779b088-92d7-8382-2b36-d86c07cc3f65","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0779b088-92d7-8382-2b36-d86c07cc3f65","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1688093009980},"e-210":{"id":"e-210","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-44","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-206"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0779b088-92d7-8382-2b36-d86c07cc3f65","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0779b088-92d7-8382-2b36-d86c07cc3f65","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1688093009980}},"actionLists":{"a-43":{"id":"a-43","title":"Topbar 3 Dropdown [Open]","actionItemGroups":[{"actionItems":[{"id":"a-43-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcb4"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-43-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcb4"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-43-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcb4"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-43-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcb4"]},"value":1,"unit":""}},{"id":"a-43-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcbf"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-44":{"id":"a-44","title":"Topbar 3 Dropdown [Close]","actionItemGroups":[{"actionItems":[{"id":"a-44-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcb4"]},"value":0,"unit":""}},{"id":"a-44-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcbf"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-44-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".topbar3_dropdown-list","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcb4"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function TopBarNotificationsDropdown({
  as: _Component = _Builtin.DropdownWrapper,
  clickHome = {},
  clickDocs = {},
  clickChats = {},
  clickSettings = {},
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="topbar3_menu-dropdown"
      data-w-id="3118b00f-418c-f57e-3616-d6ed436b334e"
      tag="div"
      delay="200"
      hover={true}
    >
      <_Builtin.DropdownToggle className="topbar3_dropdown-toggle" tag="div">
        <_Builtin.Block className="topbar3_bell-dot" tag="div" />
        <_Builtin.Block
          className="button-4 is-tertiary is-small is-icon-only"
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className="icon-embed-xsmall invert"
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ic%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveaspectratio%3D%22xMidYMid%20meet%22%20viewbox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M3%2018h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z%22%2F%3E%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
      </_Builtin.DropdownToggle>
      <_Builtin.DropdownList className="topbar3_dropdown-list" tag="nav">
        <_Builtin.Block className="topbar3_dropdown-content" tag="div">
          <_Builtin.Block className="topbar3_notification-wrapper" tag="div">
            <_Builtin.Link
              className="topbar3_notification top-left"
              id="w-node-fc0f8247-ae61-ba4d-2f78-f24c05632074-436b334e"
              button={false}
              options={{
                href: "#",
              }}
              {...clickHome}
            >
              <_Builtin.HtmlEmbed
                className="icon-embed-xsmall align-mid"
                id="w-node-_2f595b34-8d9a-eff7-cfc4-fc7027e3699d-436b334e"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ic%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveaspectratio%3D%22xMidYMid%20meet%22%20viewbox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M10%2020v-6h4v6h5v-8h3L12%203L2%2012h3v8z%22%2F%3E%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className="topbar3_notification-content"
                id="w-node-_3118b00f-418c-f57e-3616-d6ed436b335e-436b334e"
                tag="div"
              >
                <_Builtin.Block className="heading-style-h5" tag="div">
                  {"Home"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className="topbar3_notification top-right"
              id="w-node-_4faca5b7-8484-70ac-1026-2ad5617f70ec-436b334e"
              button={false}
              options={{
                href: "#",
              }}
              {...clickChats}
            >
              <_Builtin.HtmlEmbed
                className="icon-embed-xsmall"
                id="w-node-feed45a4-7f8e-180c-37d8-b8bbc2c7bfa6-436b334e"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ph%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveaspectratio%3D%22xMidYMid%20meet%22%20viewbox%3D%220%200%20256%20256%22%3E%3Cg%20fill%3D%22currentColor%22%3E%3Cpath%20d%3D%22M224%2096v128l-39.58-32H88a8%208%200%200%201-8-8v-40h88a8%208%200%200%200%208-8V88h40a8%208%200%200%201%208%208Z%22%20opacity%3D%22.2%22%2F%3E%3Cpath%20d%3D%22M216%2080h-32V48a16%2016%200%200%200-16-16H40a16%2016%200%200%200-16%2016v128a8%208%200%200%200%2013%206.22L72%20154v30a16%2016%200%200%200%2016%2016h93.59L219%20230.22a8%208%200%200%200%205%201.78a8%208%200%200%200%208-8V96a16%2016%200%200%200-16-16ZM66.55%20137.78L40%20159.25V48h128v88H71.58a8%208%200%200%200-5.03%201.78ZM216%20207.25l-26.55-21.47a8%208%200%200%200-5-1.78H88v-32h80a16%2016%200%200%200%2016-16V96h32Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className="topbar3_notification-content"
                id="w-node-_4faca5b7-8484-70ac-1026-2ad5617f70ee-436b334e"
                tag="div"
              >
                <_Builtin.Block className="heading-style-h5" tag="div">
                  {"Chats"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className="topbar3_notification bottom-left"
              id="w-node-_657038cc-0c27-f185-4878-15bbee12ef3c-436b334e"
              button={false}
              options={{
                href: "#",
              }}
              {...clickDocs}
            >
              <_Builtin.HtmlEmbed
                className="icon-embed-xsmall"
                id="w-node-_45cf1e5f-bb3f-d40a-9d81-001f31923a20-436b334e"
                value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M19.903%208.586C19.8556%208.47747%2019.7892%208.37825%2019.707%208.293L13.707%202.293C13.6217%202.21078%2013.5225%202.14441%2013.414%202.097C13.384%202.083%2013.352%202.075%2013.32%202.064C13.2363%202.03553%2013.1492%202.01837%2013.061%202.013C13.04%202.011%2013.021%202%2013%202H6C4.897%202%204%202.897%204%204V20C4%2021.103%204.897%2022%206%2022H18C19.103%2022%2020%2021.103%2020%2020V9C20%208.979%2019.989%208.96%2019.987%208.938C19.9821%208.84972%2019.9649%208.76255%2019.936%208.679C19.926%208.647%2019.917%208.616%2019.903%208.586ZM16.586%208H14V5.414L16.586%208ZM6%2020V4H12V9C12%209.26522%2012.1054%209.51957%2012.2929%209.70711C12.4804%209.89464%2012.7348%2010%2013%2010H18L18.002%2020H6Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M8%2012H16V14H8V12ZM8%2016H16V18H8V16ZM8%208H10V10H8V8Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className="topbar3_notification-content"
                id="w-node-_657038cc-0c27-f185-4878-15bbee12ef3e-436b334e"
                tag="div"
              >
                <_Builtin.Block className="heading-style-h5" tag="div">
                  {"Docs"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Link
              className="topbar3_notification bottom-right"
              id="w-node-a89ed76c-b9b0-dd78-5d31-c5f5bbc61447-436b334e"
              button={false}
              options={{
                href: "#",
              }}
              {...clickSettings}
            >
              <_Builtin.HtmlEmbed
                className="icon-embed-xsmall"
                id="w-node-a471664d-ae3d-6c2c-a7af-5e655d0e9829-436b334e"
                value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2016C14.206%2016%2016%2014.206%2016%2012C16%209.794%2014.206%208%2012%208C9.794%208%208%209.794%208%2012C8%2014.206%209.794%2016%2012%2016ZM12%2010C13.084%2010%2014%2010.916%2014%2012C14%2013.084%2013.084%2014%2012%2014C10.916%2014%2010%2013.084%2010%2012C10%2010.916%2010.916%2010%2012%2010Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M2.84498%2016.136L3.84498%2017.866C4.37598%2018.783%205.65398%2019.127%206.57498%2018.596L7.10398%2018.29C7.68252%2018.7451%208.32039%2019.1192%208.99998%2019.402V20C8.99998%2021.103%209.89698%2022%2011%2022H13C14.103%2022%2015%2021.103%2015%2020V19.402C15.6793%2019.1192%2016.3172%2018.7454%2016.896%2018.291L17.425%2018.597C18.348%2019.127%2019.623%2018.785%2020.156%2017.866L21.155%2016.137C21.42%2015.6777%2021.4919%2015.132%2021.3548%2014.6197C21.2177%2014.1075%2020.8829%2013.6706%2020.424%2013.405L19.919%2013.113C20.0263%2012.3756%2020.0263%2011.6264%2019.919%2010.889L20.424%2010.597C20.8827%2010.3312%2021.2174%209.89433%2021.3544%209.38216C21.4914%208.86998%2021.4197%208.32436%2021.155%207.865L20.156%206.136C19.625%205.216%2018.348%204.871%2017.425%205.404L16.896%205.71C16.3174%205.25491%2015.6796%204.8808%2015%204.598V4C15%202.897%2014.103%202%2013%202H11C9.89698%202%208.99998%202.897%208.99998%204V4.598C8.32062%204.88084%207.6828%205.25459%207.10398%205.709L6.57498%205.403C5.65098%204.872%204.37498%205.216%203.84398%206.135L2.84498%207.864C2.57996%208.3233%202.50809%208.86901%202.64515%209.38126C2.78222%209.89352%203.117%2010.3304%203.57598%2010.596L4.08098%2010.888C3.97321%2011.6251%203.97321%2012.3739%204.08098%2013.111L3.57598%2013.403C3.11714%2013.669%202.78251%2014.106%202.64547%2014.6184C2.50843%2015.1307%202.58018%2015.6765%202.84498%2016.136ZM6.17098%2013.378C6.05806%2012.9273%206.00064%2012.4646%205.99998%2012C5.99998%2011.538%206.05798%2011.074%206.16998%2010.622C6.22272%2010.4113%206.20537%2010.1892%206.12056%209.98928C6.03576%209.78935%205.88811%209.6225%205.69998%209.514L4.57698%208.864L5.57498%207.135L6.71998%207.797C6.9067%207.90505%207.12344%207.94962%207.33765%207.92401C7.55185%207.89841%207.75198%207.80401%207.90798%207.655C8.5845%207.01156%209.40031%206.53281%2010.292%206.256C10.4968%206.19347%2010.6761%206.06683%2010.8036%205.89473C10.931%205.72263%2010.9999%205.51416%2011%205.3V4H13V5.3C13.0001%205.51416%2013.0689%205.72263%2013.1964%205.89473C13.3238%206.06683%2013.5032%206.19347%2013.708%206.256C14.5995%206.53321%2015.4152%207.0119%2016.092%207.655C16.2481%207.80372%2016.4482%207.89792%2016.6624%207.92352C16.8765%207.94911%2017.0932%207.90473%2017.28%207.797L18.424%207.136L19.424%208.865L18.3%209.514C18.112%209.62262%2017.9644%209.78948%2017.8796%209.98938C17.7948%2010.1893%2017.7774%2010.4113%2017.83%2010.622C17.942%2011.074%2018%2011.538%2018%2012C18%2012.461%2017.942%2012.925%2017.829%2013.378C17.7765%2013.5888%2017.7941%2013.8109%2017.8791%2014.0108C17.964%2014.2107%2018.1118%2014.3775%2018.3%2014.486L19.423%2015.135L18.425%2016.864L17.28%2016.203C17.0933%2016.0948%2016.8765%2016.0501%2016.6623%2016.0757C16.448%2016.1013%2016.2479%2016.1958%2016.092%2016.345C15.4155%2016.9884%2014.5996%2017.4672%2013.708%2017.744C13.5032%2017.8065%2013.3238%2017.9332%2013.1964%2018.1053C13.0689%2018.2774%2013.0001%2018.4858%2013%2018.7L13.002%2020H11V18.7C10.9999%2018.4858%2010.931%2018.2774%2010.8036%2018.1053C10.6761%2017.9332%2010.4968%2017.8065%2010.292%2017.744C9.40048%2017.4668%208.58476%2016.9881%207.90798%2016.345C7.75228%2016.1954%207.55203%2016.1007%207.33763%2016.0753C7.12322%2016.0498%206.90636%2016.095%206.71998%2016.204L5.57598%2016.866L4.57598%2015.137L5.69998%2014.486C5.88817%2014.3775%206.03593%2014.2107%206.12091%2014.0108C6.20588%2013.8109%206.22346%2013.5888%206.17098%2013.378Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.Block
                className="topbar3_notification-content"
                id="w-node-a89ed76c-b9b0-dd78-5d31-c5f5bbc61449-436b334e"
                tag="div"
              >
                <_Builtin.Block className="heading-style-h5" tag="div">
                  {"Settings"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.DropdownList>
    </_Component>
  );
}
