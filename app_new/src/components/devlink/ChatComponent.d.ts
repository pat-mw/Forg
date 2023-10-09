import * as React from "react";
import * as Types from "./types";

declare function ChatComponent(props: {
  as?: React.ElementType;
  slotChatArea?: Types.Devlink.Slot;
}): React.JSX.Element;
