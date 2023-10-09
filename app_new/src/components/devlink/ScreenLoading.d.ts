import * as React from "react";
import * as Types from "./types";

declare function ScreenLoading(props: {
  as?: React.ElementType;
  visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
