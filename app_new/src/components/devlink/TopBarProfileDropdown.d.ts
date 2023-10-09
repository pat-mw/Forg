import * as React from "react";
import * as Types from "./types";

declare function TopBarProfileDropdown(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  clickProfile?: Types.Devlink.RuntimeProps;
  profileVisibility?: Types.Visibility.VisibilityConditions;
  clickLogOut?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
