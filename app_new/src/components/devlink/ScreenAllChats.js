import React from "react";
import * as _Builtin from "./_Builtin";
import { WelcomeScreenRecentChatsItem } from "./WelcomeScreenRecentChatsItem";

export function ScreenAllChats({
  as: _Component = _Builtin.Block,
  slotAllChats,
}) {
  return (
    <_Component
      className="all-chats-screen_component"
      id="w-node-_6bd78ef7-8ef4-9438-c0bb-ee7d67b2d5f5-67b2d5f5"
      tag="div"
    >
      <_Builtin.Block className="section_page-header1" tag="div">
        <_Builtin.Block className="margin-bottom margin-large" tag="div">
          <_Builtin.Block className="container-large" tag="div">
            <_Builtin.Block className="padding-top padding-large" tag="div">
              <_Builtin.Block className="page-header1_component" tag="div">
                <_Builtin.Block
                  className="page-header1_content-wrapper"
                  tag="div"
                >
                  <_Builtin.Block tag="div">
                    <_Builtin.Heading tag="h1">{"ChatSearch"}</_Builtin.Heading>
                    <_Builtin.Block
                      className="margin-top margin-xxsmall"
                      tag="div"
                    >
                      <_Builtin.Block tag="div">
                        {
                          "Browse all your chat sessions below, or search through the messages using the search bar."
                        }
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="page-header1_content-right"
                    tag="div"
                  >
                    <_Builtin.FormWrapper className="page-header1_form-block">
                      <_Builtin.FormForm
                        className="page-header1_form"
                        name="wf-form-Filter-1"
                        data-name="Filter 1"
                        method="get"
                        fs-cmsfilter-element="filters"
                        id="wf-form-Filter-1"
                      >
                        <_Builtin.Block
                          className="page-header1_search"
                          tag="div"
                        >
                          <_Builtin.FormTextInput
                            className="form-input is-search"
                            autoFocus={false}
                            maxLength={256}
                            name="field-2"
                            data-name="Field 2"
                            placeholder="Search"
                            type="text"
                            disabled={false}
                            required={false}
                            fs-cmsfilter-field="IDENTIFIER"
                            fs-cmsfilter-debounce="200"
                            id="field-2"
                          />
                          <_Builtin.Block
                            className="form-icon-wrapper"
                            tag="div"
                          >
                            <_Builtin.HtmlEmbed
                              className="icon-embed-xsmall"
                              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveaspectratio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M10%2018C11.775%2017.9996%2013.4988%2017.4054%2014.897%2016.312L19.293%2020.708L20.707%2019.294L16.311%2014.898C17.405%2013.4997%2017.9996%2011.7754%2018%2010C18%205.589%2014.411%202%2010%202C5.589%202%202%205.589%202%2010C2%2014.411%205.589%2018%2010%2018ZM10%204C13.309%204%2016%206.691%2016%2010C16%2013.309%2013.309%2016%2010%2016C6.691%2016%204%2013.309%204%2010C4%206.691%206.691%204%2010%204Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                            />
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.FormForm>
                      <_Builtin.FormSuccessMessage>
                        <_Builtin.Block tag="div">
                          {"Thank you! Your submission has been received!"}
                        </_Builtin.Block>
                      </_Builtin.FormSuccessMessage>
                      <_Builtin.FormErrorMessage>
                        <_Builtin.Block tag="div">
                          {
                            "Oops! Something went wrong while submitting the form."
                          }
                        </_Builtin.Block>
                      </_Builtin.FormErrorMessage>
                    </_Builtin.FormWrapper>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className="grid-list4_component margin-bottom margin-medium"
        tag="div"
      >
        <_Builtin.Block className="section-header1_component" tag="div">
          <_Builtin.Block className="padding-bottom padding-small" tag="div">
            <_Builtin.Block
              className="section-header1_content-wrapper"
              tag="div"
            >
              <_Builtin.Block className="max-width-large" tag="div">
                <_Builtin.Heading className="heading-style-h5" tag="h2">
                  {"All Chats"}
                </_Builtin.Heading>
                <_Builtin.Block className="margin-top margin-xxsmall" tag="div">
                  <_Builtin.Block tag="div">
                    {
                      "All of your chats, sorted by the date you last messaged the chat, with the most recent first."
                    }
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="welcome-screen-grid-wrapper" tag="div">
          <_Builtin.Block className="welcome-screen-grid-list" tag="div">
            {slotAllChats ?? (
              <>
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
                <WelcomeScreenRecentChatsItem />
              </>
            )}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
