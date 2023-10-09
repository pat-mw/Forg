import React from "react";
import * as _Builtin from "./_Builtin";
import { TopBarNotificationsDropdown } from "./TopBarNotificationsDropdown";
import { TopBarProfileDropdown } from "./TopBarProfileDropdown";
import { ButtonLogInSidebar } from "./ButtonLogInSidebar";

export function TopBarContentRIght({
  as: _Component = _Builtin.Block,
  navClickHome = {},
  navClickChats = {},
  navClickDocs = {},
  navClickSettings = {},
  imageProfile = "https://uploads-ssl.webflow.com/650f1e24dc36136fba7e6044/650f1e24dc36136fba7e6070_placeholder-image.svg",
  clickProfile = {},
  logInButtonVisibility = false,
  clickLogin = {},
  profileVisibility = true,
  clickLogOut = {},
}) {
  return (
    <_Component className="topbar3_content-right" tag="div">
      <TopBarNotificationsDropdown
        clickHome={navClickHome}
        clickChats={navClickChats}
        clickDocs={navClickDocs}
        clickSettings={navClickSettings}
      />
      <TopBarProfileDropdown
        image={imageProfile}
        clickProfile={clickProfile}
        profileVisibility={profileVisibility}
        clickLogOut={clickLogOut}
      />
      <ButtonLogInSidebar
        visibility={logInButtonVisibility}
        buttonRuntimeProps={clickLogin}
      />
    </_Component>
  );
}
