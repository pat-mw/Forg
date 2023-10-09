import * as React from "react";
import * as Types from "./types";

declare function TopBarHome(props: {
  as?: React.ElementType;
  clickHome?: Types.Devlink.RuntimeProps;
  clickAllChats?: Types.Devlink.RuntimeProps;
  clickAccount?: Types.Devlink.RuntimeProps;
  clickDocs?: Types.Devlink.RuntimeProps;
  clickContact?: Types.Devlink.RuntimeProps;
  navClickHome?: Types.Devlink.RuntimeProps;
  navClickChats?: Types.Devlink.RuntimeProps;
  navClickDocs?: Types.Devlink.RuntimeProps;
  navClickSettings?: Types.Devlink.RuntimeProps;
  imageProfile?: Types.Asset.Image;
  clickProfile?: Types.Devlink.RuntimeProps;
  visibilityProfile?: Types.Visibility.VisibilityConditions;
  visibilityLoginButton?: Types.Visibility.VisibilityConditions;
  clickLogin?: Types.Devlink.RuntimeProps;
  clickLogout?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
