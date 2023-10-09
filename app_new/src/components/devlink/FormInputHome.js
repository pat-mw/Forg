import React from "react";
import * as _Builtin from "./_Builtin";

export function FormInputHome({
  as: _Component = _Builtin.FormWrapper,
  formInputRuntimeProps = {},
  buttonRuntimeProps = {},
}) {
  return (
    <_Component className="form-block-2">
      <_Builtin.FormForm
        className="form-2"
        name="email-form"
        data-name="Email Form"
        method="get"
        id="email-form"
      >
        <_Builtin.FormTextInput
          className="form-input forg"
          autoFocus={false}
          maxLength={256}
          name="name-2"
          data-name="Name 2"
          type="text"
          disabled={false}
          required={false}
          id="name-2"
          {...formInputRuntimeProps}
        />
        <_Builtin.Block
          className="button-group margin-left margin-small"
          tag="div"
        >
          <_Builtin.FormButton
            className="button is-secondary"
            type="submit"
            value="Imagine"
            data-wait="Please wait..."
            {...buttonRuntimeProps}
          />
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
    </_Component>
  );
}
