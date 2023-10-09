import * as React from "react";
import * as Types from "./types";

declare function AppShell(props: {
  as?: React.ElementType;
  slotTopBar?: Types.Devlink.Slot;
  slotContents?: Types.Devlink.Slot;
  sidebarLinkHomeRuntimeProps?: Types.Devlink.RuntimeProps;
  sidebarLinkChatsRuntimeProps?: Types.Devlink.RuntimeProps;
  sidebarLinkDashboardRuntimeProps?: Types.Devlink.RuntimeProps;
  sidebarLinkDocumentsRuntimeProps?: Types.Devlink.RuntimeProps;
  sidebarLinkSupportRuntimeProps?: Types.Devlink.RuntimeProps;
  sidebarLinkSettingsRuntimeProps?: Types.Devlink.RuntimeProps;
  sidebarSearchResultsVisibility?: Types.Visibility.VisibilityConditions;
  slotSidebarSearchResults?: Types.Devlink.Slot;
  slotSidebarSearchBar?: Types.Devlink.Slot;
  sidebarMenuVisibility?: Types.Visibility.VisibilityConditions;
  slotSidebar?: Types.Devlink.Slot;
  slotSectionContents?: Types.Devlink.Slot;
}): React.JSX.Element;
