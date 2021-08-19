import React, { ReactElement } from "react";
import CardContainer from "../components/CardContainer";

export default function posts(): ReactElement {
  return (
    <div>
      <CardContainer />
      <CardContainer />
    </div>
  );
}
