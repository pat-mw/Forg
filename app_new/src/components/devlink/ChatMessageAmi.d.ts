import * as React from "react";
import * as Types from "./types";

declare function ChatMessageAmi(props: {
  as?: React.ElementType;
  slotMessage?: Types.Devlink.Slot;
  text?: React.ReactNode;
}): React.JSX.Element;
