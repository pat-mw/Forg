import React from "react";
import * as _Builtin from "./_Builtin";

export function ScreenLoading({
  as: _Component = _Builtin.Block,
  visibility = true,
}) {
  return visibility ? (
    <_Component className="loading-screen-component" tag="div">
      <_Builtin.Block className="div-block-26" tag="div">
        <_Builtin.Image
          className="loading-img"
          loading="lazy"
          width="auto"
          height="auto"
          alt="__wf_reserved_inherit"
          src="https://uploads-ssl.webflow.com/650f1e24dc36136fba7e6044/650f5030c1a2d98a9770eb1e_66f5b34f-8abd-49c5-8668-87a2036b3e7a.gif"
        />
        <_Builtin.Block tag="div">
          {"We are fetching your frog from a higher dimension..."}
        </_Builtin.Block>
        <_Builtin.Block className="div-block-25" tag="div" />
      </_Builtin.Block>
    </_Component>
  ) : null;
}
