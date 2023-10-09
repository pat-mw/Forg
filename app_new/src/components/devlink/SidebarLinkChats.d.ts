import * as React from "react";
import * as Types from "./types";

declare function SidebarLinkChats(props: {
  as?: React.ElementType;
  linkChatsRuntimeProps?: Types.Devlink.RuntimeProps;
  chatCountText?: React.ReactNode;
  countVisibility?: Types.Visibility.VisibilityConditions;
  link?: Types.Basic.Link;
}): React.JSX.Element;
