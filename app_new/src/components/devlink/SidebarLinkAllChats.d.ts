import * as React from "react";
import * as Types from "./types";

declare function SidebarLinkAllChats(props: {
  as?: React.ElementType;
  chatCountText?: React.ReactNode;
  visibilityChatCount?: Types.Visibility.VisibilityConditions;
  link?: Types.Basic.Link;
  text?: React.ReactNode;
}): React.JSX.Element;
