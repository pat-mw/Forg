import * as React from "react";
import * as Types from "./types";

declare function TopBarSimple(props: {
  as?: React.ElementType;
  navClickHome?: Types.Devlink.RuntimeProps;
  navClickChats?: Types.Devlink.RuntimeProps;
  navClickDocs?: Types.Devlink.RuntimeProps;
  navClickSettings?: Types.Devlink.RuntimeProps;
  imageProfile?: Types.Asset.Image;
  clickProfile?: Types.Devlink.RuntimeProps;
  visibilityProfile?: Types.Visibility.VisibilityConditions;
  clickLogout?: Types.Devlink.RuntimeProps;
  visibilityLoginButton?: Types.Visibility.VisibilityConditions;
  clickLogin?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
