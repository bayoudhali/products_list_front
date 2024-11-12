import { Button } from "@mui/material";
import React from "react";
import { IDefaultButton } from "../../interfaces/buttons.interface";

function DefaultButton(props: IDefaultButton) {
  const { text, onClick } = props;
  return (
    <Button className={`default-button `} onClick={onClick} variant="contained">
      {text}
    </Button>
  );
}

export default DefaultButton;
