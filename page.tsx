"use client";

import {
  ButtonSuccess,
  ButtonWarning,
  ButtonDanger,
  OutLineSuccess,
  OutLineWarning,
  OutLineDanger,
} from "../../components/buttom";

const TestButton = () => {
  return (
    <div className="m-10 p-10">
      <ButtonSuccess
        type="button"
        onClick={() => alert("Success button clicked!")}
      >
        Success Button
      </ButtonSuccess>
      <ButtonWarning
        type="button"
        className="ml-2"
        onClick={() => alert("Warning button clicked!")}
      >
        Warning Button
      </ButtonWarning>
      <ButtonDanger
        type="button"
        className="ml-2"
        onClick={() => alert("Danger button clicked!")}
      >
        Danger Button
      </ButtonDanger>
      <OutLineSuccess
        type="button"
        onClick={() => alert("Success button clicked!")}
      >
        Success Outline Button
      </OutLineSuccess>
      <OutLineWarning
        type="button"
        onClick={() => alert("Warning button clicked!")}
      >
        Warning Outline Button
      </OutLineWarning>
      <OutLineDanger
        type="button"
        onClick={() => alert("Warning button clicked!")}
      >
        Danger Outline Button
      </OutLineDanger>
    </div>
  );
};

export default TestButton;
