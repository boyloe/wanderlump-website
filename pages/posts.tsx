import React, { ReactElement } from "react";
import CardContainer from "../components/cardContainer";

interface Props {}

export default function posts({}: Props): ReactElement {
  return (
    <div>
      <CardContainer className="w-full" />
      <CardContainer className="w-full" />
    </div>
  );
}
