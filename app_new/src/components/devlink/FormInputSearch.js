import React from "react";
import * as _Builtin from "./_Builtin";

export function FormInputSearch({
  as: _Component = _Builtin.FormTextInput,
  inputRuntimeProps = {},
}) {
  return (
    <_Component
      className="form-input is-search"
      autoFocus={false}
      maxLength={256}
      name="field"
      data-name="field"
      type="text"
      disabled={false}
      required={false}
      id="field-4"
      {...inputRuntimeProps}
    />
  );
}
