import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonLogInSidebar({
  as: _Component = _Builtin.Block,
  buttonRuntimeProps = {},
  visibility = true,
}) {
  return visibility ? (
    <_Component className="button-wrapper-sidebar" tag="div">
      <_Builtin.Link
        className="button is-secondary is-small expand"
        button={true}
        options={{
          href: "#",
        }}
        {...buttonRuntimeProps}
      >
        {"Log In"}
      </_Builtin.Link>
    </_Component>
  ) : null;
}
