import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonNewChat({
  as: _Component = _Builtin.Link,
  buttonRuntimeProps = {},
}) {
  return (
    <_Component
      className="button is-icon"
      button={false}
      options={{
        href: "#",
      }}
      {...buttonRuntimeProps}
    >
      <_Builtin.HtmlEmbed
        className="icon-1x1-xsmall"
        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--ph%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveaspectratio%3D%22xMidYMid%20meet%22%20viewbox%3D%220%200%20256%20256%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22m213.66%2082.34l-56-56A8%208%200%200%200%20152%2024H56a16%2016%200%200%200-16%2016v176a16%2016%200%200%200%2016%2016h144a16%2016%200%200%200%2016-16V88a8%208%200%200%200-2.34-5.66ZM160%2051.31L188.69%2080H160ZM200%20216H56V40h88v48a8%208%200%200%200%208%208h48v120Zm-40-64a8%208%200%200%201-8%208h-16v16a8%208%200%200%201-16%200v-16h-16a8%208%200%200%201%200-16h16v-16a8%208%200%200%201%2016%200v16h16a8%208%200%200%201%208%208Z%22%2F%3E%3C%2Fsvg%3E"
      />
      <_Builtin.Block tag="div">{"New Chat"}</_Builtin.Block>
    </_Component>
  );
}
