import React from "react";
import * as _Builtin from "./_Builtin";
import { ScreenLoading } from "./ScreenLoading";
import { FormInputHome } from "./FormInputHome";

export function HomePageFrog({
  as: _Component = _Builtin.Block,
  visibilityLoading = false,
  slotResult,
  visibilityResult = false,
  visibilityPlaceholder = true,
  slotPlaceholder,
  slotFormInput,
}) {
  return (
    <_Component className="component-home-page" tag="div">
      <ScreenLoading visibility={visibilityLoading} />
      <_Builtin.Block className="section-full-height-fixed" tag="div">
        <_Builtin.Block className="full-screen-container" tag="div">
          {visibilityResult ? (
            <_Builtin.Block className="div-block-24" tag="div">
              {slotResult ?? (
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="__wf_reserved_inherit"
                  src="https://uploads-ssl.webflow.com/650f1e24dc36136fba7e6044/650f1e24dc36136fba7e6070_placeholder-image.svg"
                />
              )}
            </_Builtin.Block>
          ) : null}
          {visibilityPlaceholder ? (
            <_Builtin.Block className="div-block-27" tag="div">
              {slotPlaceholder ?? (
                <>
                  <_Builtin.Block className="div-block-24" tag="div">
                    <_Builtin.Image
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="__wf_reserved_inherit"
                      src="https://uploads-ssl.webflow.com/650f1e24dc36136fba7e6044/650f20ffe788a656015cce30_forg.png"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="margin-bottom margin-small"
                    tag="div"
                  >
                    <_Builtin.Heading tag="h3">
                      {"Imagine your dream frog ..."}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </>
              )}
            </_Builtin.Block>
          ) : null}
          <_Builtin.Block tag="div">
            {slotFormInput ?? <FormInputHome />}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
