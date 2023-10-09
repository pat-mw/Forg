import React from "react";
import * as _Builtin from "./_Builtin";
import { TopBarContentRIght } from "./TopBarContentRIght";

export function TopBarSimple({
  as: _Component = _Builtin.Block,
  navClickHome = {},
  navClickChats = {},
  navClickDocs = {},
  navClickSettings = {},
  imageProfile = "https://uploads-ssl.webflow.com/650f1e24dc36136fba7e6044/650f1e24dc36136fba7e6070_placeholder-image.svg",
  clickProfile = {},
  visibilityProfile = true,
  clickLogout = {},
  visibilityLoginButton = false,
  clickLogin = {},
}) {
  return (
    <_Component className="topbar_simple_component" tag="div">
      <_Builtin.Block className="topbar3_container" tag="div">
        <_Builtin.Block className="topbar3_search-desktop" tag="div" />
        <TopBarContentRIght
          navClickHome={navClickHome}
          navClickChats={navClickChats}
          navClickDocs={navClickDocs}
          navClickSettings={navClickSettings}
          imageProfile={imageProfile}
          clickProfile={clickProfile}
          profileVisibility={visibilityProfile}
          clickLogOut={clickLogout}
          logInButtonVisibility={visibilityLoginButton}
          clickLogin={clickLogin}
        />
      </_Builtin.Block>
    </_Component>
  );
}
