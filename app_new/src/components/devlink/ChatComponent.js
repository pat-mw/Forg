import React from "react";
import * as _Builtin from "./_Builtin";
import { ChatMessageAmi } from "./ChatMessageAmi";
import { ChatMessageAmiPills } from "./ChatMessageAmiPills";
import { ChatMessageUser } from "./ChatMessageUser";
import { MsgAmiPills } from "./MsgAmiPills";

export function ChatComponent({
  as: _Component = _Builtin.Block,
  slotChatArea,
}) {
  return (
    <_Component className="chat-component" tag="div">
      <_Builtin.Block className="chat-wrapper" tag="div">
        {slotChatArea ?? (
          <>
            <ChatMessageAmi />
            <ChatMessageAmiPills />
            <ChatMessageUser />
            <MsgAmiPills />
            <ChatMessageUser />
            <_Builtin.Block
              className="msg-ami-component align-center text-color-white"
              tag="div"
            >
              <_Builtin.Block className="chat-bubble-label-wrapper" tag="div">
                <_Builtin.Block className="chat-bubble-label" tag="div">
                  {"Result"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Link
                className="chat-bubble result-embedded"
                button={true}
                options={{
                  href: "#",
                }}
              >
                {'Key word search: "Authoritas.com": results available'}
              </_Builtin.Link>
              <_Builtin.Block className="chat-bubble result-embedded" tag="div">
                <_Builtin.Block className="card overflow-hidden" tag="div">
                  <_Builtin.Block
                    className="_2-items-wrap-container pd-32px---28px"
                    tag="div"
                  >
                    <_Builtin.Block className="text-300 medium " tag="div">
                      {"Orders Status"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="_2-items-wrap-container gap-12px"
                      tag="div"
                    >
                      <_Builtin.DropdownWrapper
                        className="mg-sides-0 position-relative---z-index-1"
                        tag="div"
                        delay={0}
                        hover={true}
                      >
                        <_Builtin.DropdownToggle
                          className="small-dropdown-toggle"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="flex align-center gap-column-4px"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="dashdark-custom-icon line-height-1em"
                              tag="div"
                            >
                              {""}
                            </_Builtin.Block>
                            <_Builtin.Block
                              className="text-301 medium"
                              tag="div"
                            >
                              {"Jan 2024"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className="line-rounded-icon card-dropdown-arrow"
                            tag="div"
                          >
                            {""}
                          </_Builtin.Block>
                        </_Builtin.DropdownToggle>
                        <_Builtin.DropdownList
                          className="small-dropdown-list"
                          tag="nav"
                        >
                          <_Builtin.Block
                            className="small-dropdown-links-container"
                            tag="div"
                          >
                            <_Builtin.DropdownLink
                              className="small-dropdown-link"
                              options={{
                                href: "#",
                              }}
                            >
                              {"Dec 2023"}
                            </_Builtin.DropdownLink>
                            <_Builtin.DropdownLink
                              className="small-dropdown-link"
                              options={{
                                href: "#",
                              }}
                            >
                              {"Nov 2023"}
                            </_Builtin.DropdownLink>
                            <_Builtin.DropdownLink
                              className="small-dropdown-link"
                              options={{
                                href: "#",
                              }}
                            >
                              {"Oct 2023"}
                            </_Builtin.DropdownLink>
                          </_Builtin.Block>
                        </_Builtin.DropdownList>
                      </_Builtin.DropdownWrapper>
                      <_Builtin.Link
                        className="btn-primary small"
                        button={false}
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block
                          className="flex-horizontal gap-column-4px"
                          tag="div"
                        >
                          <_Builtin.Block tag="div">
                            {"Create order"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="table-main-container" tag="div">
                    <_Builtin.Block
                      className="orders-status-table-row table-header"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="flex align-center gap-column-6px"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e93175ee-e931758f"
                        tag="div"
                      >
                        <_Builtin.Image
                          loading="eager"
                          width="auto"
                          height="auto"
                          alt="__wf_reserved_inherit"
                          src="https://uploads-ssl.webflow.com/649957bd06c0b4aba092ebee/649eee1ff275ccc84d26e92c_order-table-header-icon-dashdark-webflow-template.svg"
                        />
                        <_Builtin.Block
                          className="text-301 semibold color-neutral-100"
                          tag="div"
                        >
                          {"Order"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="flex align-center gap-column-6px"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e93175f2-e931758f"
                        tag="div"
                      >
                        <_Builtin.Image
                          loading="eager"
                          width="auto"
                          height="auto"
                          alt="__wf_reserved_inherit"
                          src="https://uploads-ssl.webflow.com/649ee56b098ab89b72cc15ef/649ee56b098ab89b72cc1732_order-table-header-icon-dashdark-webflow-template.svg"
                        />
                        <_Builtin.Block
                          className="text-301 semibold color-neutral-100"
                          tag="div"
                        >
                          {"Client"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="flex align-center gap-column-6px"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e93175f6-e931758f"
                        tag="div"
                      >
                        <_Builtin.Image
                          loading="eager"
                          width="auto"
                          height="auto"
                          alt="__wf_reserved_inherit"
                          src="https://uploads-ssl.webflow.com/649ee56b098ab89b72cc15ef/649ee56b098ab89b72cc1732_order-table-header-icon-dashdark-webflow-template.svg"
                        />
                        <_Builtin.Block
                          className="text-301 semibold color-neutral-100"
                          tag="div"
                        >
                          {"Date"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="flex align-center gap-column-6px"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e93175fa-e931758f"
                        tag="div"
                      >
                        <_Builtin.Image
                          loading="eager"
                          width="auto"
                          height="auto"
                          alt="__wf_reserved_inherit"
                          src="https://uploads-ssl.webflow.com/649ee56b098ab89b72cc15ef/649ee56b098ab89b72cc1732_order-table-header-icon-dashdark-webflow-template.svg"
                        />
                        <_Builtin.Block
                          className="text-301 semibold color-neutral-100"
                          tag="div"
                        >
                          {"Status"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="flex align-center gap-column-6px"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e93175fe-e931758f"
                        tag="div"
                      >
                        <_Builtin.Image
                          loading="eager"
                          width="auto"
                          height="auto"
                          alt="__wf_reserved_inherit"
                          src="https://uploads-ssl.webflow.com/649ee56b098ab89b72cc15ef/649ee56b098ab89b72cc1732_order-table-header-icon-dashdark-webflow-template.svg"
                        />
                        <_Builtin.Block
                          className="text-301 semibold color-neutral-100"
                          tag="div"
                        >
                          {"Country"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317602-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="flex align-center gap-column-6px"
                          id="w-node-aa11bc7f-65a4-5475-7472-8405e9317603-e931758f"
                          tag="div"
                        >
                          <_Builtin.Block
                            className="text-301 semibold color-neutral-100"
                            tag="div"
                          >
                            {"Total"}
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="orders-status-table-row"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="flex align-center"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317608-e931758f"
                        tag="div"
                      >
                        <_Builtin.FormWrapper className="mg-bottom-0 hidden-on-mbl">
                          <_Builtin.FormForm
                            name="email-form"
                            data-name="Email Form"
                            method="get"
                            id="email-form"
                          >
                            <_Builtin.FormCheckboxWrapper className="checkbox-field-wrapper mg-bottom-0">
                              <_Builtin.FormCheckboxInput
                                className="checkbox"
                                inputType="custom"
                                type="checkbox"
                                name="checkbox-2"
                                data-name="Checkbox 2"
                                checked={false}
                                required={false}
                                id="checkbox-2"
                              />
                              <_Builtin.FormInlineLabel className="hidden-on-desktop">
                                {"#1532"}
                              </_Builtin.FormInlineLabel>
                            </_Builtin.FormCheckboxWrapper>
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
                        <_Builtin.Block
                          className="paragraph-small color-neutral-100"
                          tag="div"
                        >
                          {"#1532"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317617-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="paragraph-small color-neutral-100 mg-bottom-2px"
                          id="w-node-aa11bc7f-65a4-5475-7472-8405e9317618-e931758f"
                          tag="div"
                        >
                          {"John Carter"}
                        </_Builtin.Block>
                        <_Builtin.Block className="paragraph-small" tag="div">
                          {"hello@johncarter.com"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        tag="div"
                      >
                        {"Jan 30, 2024"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e931761e-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className="status-badge green"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="flex align-center gap-column-4px"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="small-dot _4px bg-green-300"
                                tag="div"
                              />
                              <_Builtin.Block
                                className="paragraph-small"
                                tag="div"
                              >
                                {"Delivered"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        tag="div"
                      >
                        {"United States"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317639-e931758f"
                        tag="div"
                      >
                        {"$ 1,099.24"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="flex align-center gap-column-6px"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e931763b-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="dashdark-custom-icon edit-icon"
                          id="w-node-aa11bc7f-65a4-5475-7472-8405e931763c-e931758f"
                          tag="div"
                        >
                          {""}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="dashdark-custom-icon delete-icon"
                          tag="div"
                        >
                          {""}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="orders-status-table-row"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="flex align-center"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317641-e931758f"
                        tag="div"
                      >
                        <_Builtin.FormWrapper className="mg-bottom-0 hidden-on-mbl">
                          <_Builtin.FormForm
                            name="email-form"
                            data-name="Email Form"
                            method="get"
                            id="email-form"
                          >
                            <_Builtin.FormCheckboxWrapper className="checkbox-field-wrapper mg-bottom-0">
                              <_Builtin.FormCheckboxInput
                                className="checkbox"
                                inputType="custom"
                                type="checkbox"
                                name="checkbox-2"
                                data-name="Checkbox 2"
                                checked={false}
                                required={false}
                                id="checkbox-2"
                              />
                              <_Builtin.FormInlineLabel className="hidden-on-desktop">
                                {"#1532"}
                              </_Builtin.FormInlineLabel>
                            </_Builtin.FormCheckboxWrapper>
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
                        <_Builtin.Block
                          className="paragraph-small color-neutral-100"
                          tag="div"
                        >
                          {"#1531"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317650-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="paragraph-small color-neutral-100 mg-bottom-2px"
                          id="w-node-aa11bc7f-65a4-5475-7472-8405e9317651-e931758f"
                          tag="div"
                        >
                          {"Sophie Moore"}
                        </_Builtin.Block>
                        <_Builtin.Block className="paragraph-small" tag="div">
                          {"contact@sophiemoore.com"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        tag="div"
                      >
                        {"Jan 27, 2024"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317657-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className="status-badge red"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="flex align-center gap-column-4px"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="small-dot _4px bg-red-300"
                                tag="div"
                              />
                              <_Builtin.Block
                                className="paragraph-small"
                                tag="div"
                              >
                                {"Canceled"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        tag="div"
                      >
                        {"United Kingdom"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317672-e931758f"
                        tag="div"
                      >
                        {"$ 5,870.32"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="flex align-center gap-column-6px"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317674-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="dashdark-custom-icon edit-icon"
                          id="w-node-aa11bc7f-65a4-5475-7472-8405e9317675-e931758f"
                          tag="div"
                        >
                          {""}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="dashdark-custom-icon delete-icon"
                          tag="div"
                        >
                          {""}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="orders-status-table-row"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="flex align-center"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e931767a-e931758f"
                        tag="div"
                      >
                        <_Builtin.FormWrapper className="mg-bottom-0 hidden-on-mbl">
                          <_Builtin.FormForm
                            name="email-form"
                            data-name="Email Form"
                            method="get"
                            id="email-form"
                          >
                            <_Builtin.FormCheckboxWrapper className="checkbox-field-wrapper mg-bottom-0">
                              <_Builtin.FormCheckboxInput
                                className="checkbox"
                                inputType="custom"
                                type="checkbox"
                                name="checkbox-2"
                                data-name="Checkbox 2"
                                checked={false}
                                required={false}
                                id="checkbox-2"
                              />
                              <_Builtin.FormInlineLabel className="hidden-on-desktop">
                                {"#1532"}
                              </_Builtin.FormInlineLabel>
                            </_Builtin.FormCheckboxWrapper>
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
                        <_Builtin.Block
                          className="paragraph-small color-neutral-100"
                          tag="div"
                        >
                          {"#1530"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317689-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="paragraph-small color-neutral-100 mg-bottom-2px"
                          id="w-node-aa11bc7f-65a4-5475-7472-8405e931768a-e931758f"
                          tag="div"
                        >
                          {"Matt Cannon"}
                        </_Builtin.Block>
                        <_Builtin.Block className="paragraph-small" tag="div">
                          {"info@mattcannon.com"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        tag="div"
                      >
                        {"Jan 24, 2024"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317690-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className="status-badge green"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="flex align-center gap-column-4px"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="small-dot _4px bg-green-300"
                                tag="div"
                              />
                              <_Builtin.Block
                                className="paragraph-small"
                                tag="div"
                              >
                                {"Delivered"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        tag="div"
                      >
                        {"Australia"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e93176ab-e931758f"
                        tag="div"
                      >
                        {"$ 13,899.48"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="flex align-center gap-column-6px"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e93176ad-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="dashdark-custom-icon edit-icon"
                          id="w-node-aa11bc7f-65a4-5475-7472-8405e93176ae-e931758f"
                          tag="div"
                        >
                          {""}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="dashdark-custom-icon delete-icon"
                          tag="div"
                        >
                          {""}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="orders-status-table-row"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="flex align-center"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e93176b3-e931758f"
                        tag="div"
                      >
                        <_Builtin.FormWrapper className="mg-bottom-0 hidden-on-mbl">
                          <_Builtin.FormForm
                            name="email-form"
                            data-name="Email Form"
                            method="get"
                            id="email-form"
                          >
                            <_Builtin.FormCheckboxWrapper className="checkbox-field-wrapper mg-bottom-0">
                              <_Builtin.FormCheckboxInput
                                className="checkbox"
                                inputType="custom"
                                type="checkbox"
                                name="checkbox-2"
                                data-name="Checkbox 2"
                                checked={false}
                                required={false}
                                id="checkbox-2"
                              />
                              <_Builtin.FormInlineLabel className="hidden-on-desktop">
                                {"#1532"}
                              </_Builtin.FormInlineLabel>
                            </_Builtin.FormCheckboxWrapper>
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
                        <_Builtin.Block
                          className="paragraph-small color-neutral-100"
                          tag="div"
                        >
                          {"#1529"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e93176c2-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="paragraph-small color-neutral-100 mg-bottom-2px"
                          id="w-node-aa11bc7f-65a4-5475-7472-8405e93176c3-e931758f"
                          tag="div"
                        >
                          {"Graham Hills"}
                        </_Builtin.Block>
                        <_Builtin.Block className="paragraph-small" tag="div">
                          {"hi@grahamhills.com"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        tag="div"
                      >
                        {"Jan 21, 2024"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e93176c9-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className="status-badge yellow"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="flex align-center gap-column-4px"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="small-dot _4px bg-secondary-5"
                                tag="div"
                              />
                              <_Builtin.Block
                                className="paragraph-small"
                                tag="div"
                              >
                                {"Pending"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        tag="div"
                      >
                        {"India"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e93176e4-e931758f"
                        tag="div"
                      >
                        {"$ 1,569.12"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="flex align-center gap-column-6px"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e93176e6-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="dashdark-custom-icon edit-icon"
                          id="w-node-aa11bc7f-65a4-5475-7472-8405e93176e7-e931758f"
                          tag="div"
                        >
                          {""}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="dashdark-custom-icon delete-icon"
                          tag="div"
                        >
                          {""}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="orders-status-table-row"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="flex align-center"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e93176ec-e931758f"
                        tag="div"
                      >
                        <_Builtin.FormWrapper className="mg-bottom-0 hidden-on-mbl">
                          <_Builtin.FormForm
                            name="email-form"
                            data-name="Email Form"
                            method="get"
                            id="email-form"
                          >
                            <_Builtin.FormCheckboxWrapper className="checkbox-field-wrapper mg-bottom-0">
                              <_Builtin.FormCheckboxInput
                                className="checkbox"
                                inputType="custom"
                                type="checkbox"
                                name="checkbox-2"
                                data-name="Checkbox 2"
                                checked={false}
                                required={false}
                                id="checkbox-2"
                              />
                              <_Builtin.FormInlineLabel className="hidden-on-desktop">
                                {"#1532"}
                              </_Builtin.FormInlineLabel>
                            </_Builtin.FormCheckboxWrapper>
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
                        <_Builtin.Block
                          className="paragraph-small color-neutral-100"
                          tag="div"
                        >
                          {"#1528"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e93176fb-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="paragraph-small color-neutral-100 mg-bottom-2px"
                          id="w-node-aa11bc7f-65a4-5475-7472-8405e93176fc-e931758f"
                          tag="div"
                        >
                          {"Sandy Houston"}
                        </_Builtin.Block>
                        <_Builtin.Block className="paragraph-small" tag="div">
                          {"contact@sandyhouston.com"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        tag="div"
                      >
                        {"Jan 18, 2024"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317702-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className="status-badge green"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="flex align-center gap-column-4px"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="small-dot _4px bg-green-300"
                                tag="div"
                              />
                              <_Builtin.Block
                                className="paragraph-small"
                                tag="div"
                              >
                                {"Delivered"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        tag="div"
                      >
                        {"Canada"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e931771d-e931758f"
                        tag="div"
                      >
                        {"$ 899.16"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="flex align-center gap-column-6px"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e931771f-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="dashdark-custom-icon edit-icon"
                          id="w-node-aa11bc7f-65a4-5475-7472-8405e9317720-e931758f"
                          tag="div"
                        >
                          {""}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="dashdark-custom-icon delete-icon"
                          tag="div"
                        >
                          {""}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="orders-status-table-row"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="flex align-center"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317725-e931758f"
                        tag="div"
                      >
                        <_Builtin.FormWrapper className="mg-bottom-0 hidden-on-mbl">
                          <_Builtin.FormForm
                            name="email-form"
                            data-name="Email Form"
                            method="get"
                            id="email-form"
                          >
                            <_Builtin.FormCheckboxWrapper className="checkbox-field-wrapper mg-bottom-0">
                              <_Builtin.FormCheckboxInput
                                className="checkbox"
                                inputType="custom"
                                type="checkbox"
                                name="checkbox-2"
                                data-name="Checkbox 2"
                                checked={false}
                                required={false}
                                id="checkbox-2"
                              />
                              <_Builtin.FormInlineLabel className="hidden-on-desktop">
                                {"#1532"}
                              </_Builtin.FormInlineLabel>
                            </_Builtin.FormCheckboxWrapper>
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
                        <_Builtin.Block
                          className="paragraph-small color-neutral-100"
                          tag="div"
                        >
                          {"#1527"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317734-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="paragraph-small color-neutral-100 mg-bottom-2px"
                          id="w-node-aa11bc7f-65a4-5475-7472-8405e9317735-e931758f"
                          tag="div"
                        >
                          {"Andy Smith"}
                        </_Builtin.Block>
                        <_Builtin.Block className="paragraph-small" tag="div">
                          {"hello@andysmith.com"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        tag="div"
                      >
                        {"Jan 15, 2024"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e931773b-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block tag="div">
                          <_Builtin.Block
                            className="status-badge yellow"
                            tag="div"
                          >
                            <_Builtin.Block
                              className="flex align-center gap-column-4px"
                              tag="div"
                            >
                              <_Builtin.Block
                                className="small-dot _4px bg-secondary-5"
                                tag="div"
                              />
                              <_Builtin.Block
                                className="paragraph-small"
                                tag="div"
                              >
                                {"Pending"}
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        tag="div"
                      >
                        {"United States"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="paragraph-small color-neutral-100"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317756-e931758f"
                        tag="div"
                      >
                        {"$ 2,449.64"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="flex align-center gap-column-6px"
                        id="w-node-aa11bc7f-65a4-5475-7472-8405e9317758-e931758f"
                        tag="div"
                      >
                        <_Builtin.Block
                          className="dashdark-custom-icon edit-icon"
                          id="w-node-aa11bc7f-65a4-5475-7472-8405e9317759-e931758f"
                          tag="div"
                        >
                          {""}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="dashdark-custom-icon delete-icon"
                          tag="div"
                        >
                          {""}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </>
        )}
      </_Builtin.Block>
    </_Component>
  );
}
