import * as React from "react";
import * as Types from "./types";

declare function Sidebar(props: {
  as?: React.ElementType;
  linkChatsRuntimeProps?: Types.Devlink.RuntimeProps;
  linkAccountRuntimeProps?: Types.Devlink.RuntimeProps;
  slotSidebarAccount?: Types.Devlink.Slot;
  accountVisibility?: Types.Visibility.VisibilityConditions;
  signInButtonVisibility?: Types.Visibility.VisibilityConditions;
  slotDynamicLinks?: Types.Devlink.Slot;
}): React.JSX.Element;
