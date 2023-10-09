import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-115":{"id":"e-115","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-116"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"825d296e-6bce-fe68-793b-f203781e3ecd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"825d296e-6bce-fe68-793b-f203781e3ecd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695061012987},"e-121":{"id":"e-121","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-45","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-122"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"825d296e-6bce-fe68-793b-f203781e3f0e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"825d296e-6bce-fe68-793b-f203781e3f0e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695061012987},"e-123":{"id":"e-123","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-45","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-124"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"825d296e-6bce-fe68-793b-f203781e3f10","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"825d296e-6bce-fe68-793b-f203781e3f10","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695061012987},"e-131":{"id":"e-131","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-45","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-132"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cc5527e4-6cff-dc2d-3d04-13468e42663c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc5527e4-6cff-dc2d-3d04-13468e42663c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695061133311},"e-133":{"id":"e-133","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-45","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-134"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"cc5527e4-6cff-dc2d-3d04-13468e42663e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cc5527e4-6cff-dc2d-3d04-13468e42663e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695061133311}},"actionLists":{"a-42":{"id":"a-42","title":"Topbar 3 Search [Open]","actionItemGroups":[{"actionItems":[{"id":"a-42-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcc1"]},"value":"none"}},{"id":"a-42-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".topbar3_search-tablet","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcc1"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-42-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcc1"]},"value":"block"}}]},{"actionItems":[{"id":"a-42-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcc1"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1684414258357},"a-45":{"id":"a-45","title":"Topbar 3 Search [Close]","actionItemGroups":[{"actionItems":[{"id":"a-45-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"selector":".topbar3_search-tablet","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcc1"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-45-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".topbar3_search-tablet","selectorGuids":["cec8141a-5161-32ea-9dd8-8f2cf2f1fcc1"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684414258357}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ChatInputBar({
  as: _Component = _Builtin.Block,
  slotInputField,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="chat-input-bar-component" tag="div">
      <_Builtin.Block className="chat-input-bar-container" tag="div">
        <_Builtin.Block className="chat-input-search" tag="div">
          <_Builtin.FormWrapper className="chat-input-form-block">
            <_Builtin.FormForm
              className="chat-input-form"
              name="wf-form-Search-3-4"
              data-name="Search 3"
              method="get"
              id="email-form"
            >
              <_Builtin.Block className="chat-input-wrapper" tag="div">
                {slotInputField ?? (
                  <_Builtin.FormTextInput
                    className="form-input"
                    autoFocus={false}
                    maxLength={256}
                    name="field-2"
                    data-name="Field 2"
                    type="text"
                    disabled={false}
                    required={false}
                    id="field-3"
                  />
                )}
              </_Builtin.Block>
            </_Builtin.FormForm>
            <_Builtin.FormSuccessMessage>
              <_Builtin.Block tag="div">
                {"Thank you! Your submission has been received!"}
              </_Builtin.Block>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage>
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="topbar3_search-tablet" tag="div">
        <_Builtin.Block className="topbar3_search-wrapper" tag="div">
          <_Builtin.FormWrapper className="topbar3_form-block">
            <_Builtin.FormForm
              className="topbar3_form"
              name="wf-form-Search-3-5"
              data-name="Search 3"
              method="get"
              id="email-form"
            >
              <_Builtin.Block className="chat-input-wrapper" tag="div">
                <_Builtin.FormTextInput
                  className="form-input is-search"
                  autoFocus={false}
                  maxLength={256}
                  name="Field-3"
                  data-name="Field 3"
                  placeholder="Search"
                  type="text"
                  disabled={false}
                  required={false}
                  id="Field-3"
                />
                <_Builtin.Block className="form-icon-wrapper" tag="div">
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
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
          <_Builtin.Block
            className="topbar3_close-icon"
            data-w-id="cc5527e4-6cff-dc2d-3d04-13468e42663c"
            tag="div"
          >
            <_Builtin.HtmlEmbed
              className="icon-embed-small"
              value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewbox%3D%220%200%2032%2033%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.8354%2022.864L22.3639%2023.3354C22.1036%2023.5957%2021.6815%2023.5957%2021.4211%2023.3354L16%2017.9142L10.5788%2023.3353C10.3185%2023.5957%209.89638%2023.5957%209.63603%2023.3353L9.16462%2022.8639C8.90427%2022.6036%208.90427%2022.1815%209.16462%2021.9211L14.5858%2016.5L9.16462%2011.0788C8.90427%2010.8185%208.90427%2010.3964%209.16462%2010.136L9.63602%209.66463C9.89637%209.40428%2010.3185%209.40428%2010.5788%209.66463L16%2015.0858L21.4211%209.66462C21.6815%209.40427%2022.1036%209.40427%2022.3639%209.66462L22.8354%2010.136C23.0957%2010.3964%2023.0957%2010.8185%2022.8354%2011.0788L17.4142%2016.5L22.8354%2021.9211C23.0957%2022.1815%2023.0957%2022.6036%2022.8354%2022.864Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className="topbar3_search-overlay"
          data-w-id="cc5527e4-6cff-dc2d-3d04-13468e42663e"
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
