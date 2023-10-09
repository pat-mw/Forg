import * as React from "react";
import * as Types from "./types";

declare function HomePageFrog(props: {
  as?: React.ElementType;
  visibilityLoading?: Types.Visibility.VisibilityConditions;
  slotResult?: Types.Devlink.Slot;
  visibilityResult?: Types.Visibility.VisibilityConditions;
  visibilityPlaceholder?: Types.Visibility.VisibilityConditions;
  slotPlaceholder?: Types.Devlink.Slot;
  slotFormInput?: Types.Devlink.Slot;
}): React.JSX.Element;
