import React from "react";
import * as _Builtin from "./_Builtin";
import { TopBarContentRIght } from "./TopBarContentRIght";

export function TopBarTabs({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className="topbar_tabs_component background-color-dark"
      tag="div"
    >
      <_Builtin.Block className="topbar_tabs_container" tag="div">
        <_Builtin.Block
          className="tab-scroll-area-fade pointer-events-off"
          tag="div"
        />
        <_Builtin.Block className="tabs-scroll-area" tag="div">
          <_Builtin.Block className="tab" tag="div">
            <_Builtin.Block className="tabs-text" tag="div">
              {"Home"}
            </_Builtin.Block>
            <_Builtin.Block className="tab-right-fade" tag="div" />
          </_Builtin.Block>
          <_Builtin.Block className="tab" tag="div">
            <_Builtin.Block className="tabs-text" tag="div">
              {"Chat 1"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="tab" tag="div">
            <_Builtin.Block className="tabs-text" tag="div">
              {"Chat 2"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="tab" tag="div">
            <_Builtin.Block className="tabs-text" tag="div">
              {"Chat 3"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="tab" tag="div">
            <_Builtin.Block className="tabs-text" tag="div">
              {"..."}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <TopBarContentRIght />
      </_Builtin.Block>
    </_Component>
  );
}
