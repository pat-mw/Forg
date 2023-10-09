import * as React from "react";
import * as Types from "./types";

declare function SidebarAccount(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  textName?: React.ReactNode;
  textEmail?: React.ReactNode;
  clickMyProfile?: Types.Devlink.RuntimeProps;
  clickLogOut?: Types.Devlink.RuntimeProps;
  visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
