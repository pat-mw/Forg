import React from "react";
import * as _Builtin from "./_Builtin";
import { Sidebar } from "./Sidebar";
import { TopBarHome } from "./TopBarHome";
import { TopBarSimple } from "./TopBarSimple";
import { SectionShellLayout } from "./SectionShellLayout";

export function AppShell({
  as: _Component = _Builtin.Block,
  slotTopBar,
  slotContents,
  sidebarLinkHomeRuntimeProps = {},
  sidebarLinkChatsRuntimeProps = {},
  sidebarLinkDashboardRuntimeProps = {},
  sidebarLinkDocumentsRuntimeProps = {},
  sidebarLinkSupportRuntimeProps = {},
  sidebarLinkSettingsRuntimeProps = {},
  sidebarSearchResultsVisibility = false,
  slotSidebarSearchResults,
  slotSidebarSearchBar,
  sidebarMenuVisibility = true,
  slotSidebar,
  slotSectionContents,
}) {
  return (
    <_Component className="shell4_wrapper" tag="main">
      <_Builtin.Block className="shell4_sidebar-wrapper" tag="div">
        {slotSidebar ?? (
          <Sidebar
            linkChatsRuntimeProps={sidebarLinkChatsRuntimeProps}
            linkAccountRuntimeProps={sidebarLinkSettingsRuntimeProps}
          />
        )}
      </_Builtin.Block>
      <_Builtin.Block className="shell4_main-wrapper" tag="main">
        <_Builtin.Block className="slot_topbarwrapper" tag="div">
          {slotTopBar ?? (
            <>
              <_Builtin.Block className="top-bar-placeholder" tag="div">
                <_Builtin.Block tag="div">{"Slot_TopBar"}</_Builtin.Block>
              </_Builtin.Block>
              <TopBarHome />
              <TopBarSimple />
            </>
          )}
        </_Builtin.Block>
        <_Builtin.Block className="slot_contentswrapper" tag="div">
          {slotContents ?? (
            <SectionShellLayout slotSectionContents={slotSectionContents} />
          )}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
