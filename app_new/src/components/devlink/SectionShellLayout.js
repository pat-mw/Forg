import React from "react";
import * as _Builtin from "./_Builtin";

export function SectionShellLayout({
  as: _Component = _Builtin.Block,
  slotSectionContents,
}) {
  return (
    <_Component className="section_shell4-layout" tag="div">
      <_Builtin.Block className="padding-horizontal padding-medium" tag="div">
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="padding-vertical padding-large" tag="div">
            <_Builtin.Grid
              className="shell4-layout_component"
              id="w-node-c053c5ee-068b-3977-0100-141ccfd3e2bc-cfd3e2b8"
              tag="div"
            >
              {slotSectionContents ?? (
                <_Builtin.Block
                  className="contents-placeholder"
                  id="w-node-c053c5ee-068b-3977-0100-141ccfd3e2bd-cfd3e2b8"
                  tag="div"
                >
                  <_Builtin.Block tag="div">
                    {"Slot_SectionContents"}
                  </_Builtin.Block>
                </_Builtin.Block>
              )}
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
