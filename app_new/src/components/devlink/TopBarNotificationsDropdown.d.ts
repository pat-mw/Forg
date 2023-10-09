import * as React from "react";
import * as Types from "./types";

declare function TopBarNotificationsDropdown(props: {
  as?: React.ElementType;
  clickHome?: Types.Devlink.RuntimeProps;
  clickDocs?: Types.Devlink.RuntimeProps;
  clickChats?: Types.Devlink.RuntimeProps;
  clickSettings?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
