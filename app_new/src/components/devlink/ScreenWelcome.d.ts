import * as React from "react";
import * as Types from "./types";

declare function ScreenWelcome(props: {
  as?: React.ElementType;
  slotExampleUseCases?: Types.Devlink.Slot;
  slotRecentChats?: Types.Devlink.Slot;
  slotNewChatButton?: Types.Devlink.Slot;
  buttonViewAllChatsRuntimeProps?: Types.Devlink.RuntimeProps;
  buttonHelpGuideRuntimeProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
