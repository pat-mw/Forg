import * as React from "react";
import * as Types from "./types";

declare function TopBarContentRIght(props: {
  as?: React.ElementType;
  navClickHome?: Types.Devlink.RuntimeProps;
  navClickChats?: Types.Devlink.RuntimeProps;
  navClickDocs?: Types.Devlink.RuntimeProps;
  navClickSettings?: Types.Devlink.RuntimeProps;
  imageProfile?: Types.Asset.Image;
  clickProfile?: Types.Devlink.RuntimeProps;
  logInButtonVisibility?: Types.Visibility.VisibilityConditions;
  clickLogin?: Types.Devlink.RuntimeProps;
  profileVisibility?: Types.Visibility.VisibilityConditions;
  clickLogOut?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
