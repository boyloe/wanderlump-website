import React, { Fragment, ReactElement } from "react";
import LumpyPic from "../public/images/lumpy_space_princess.jpg";

export default function about(): ReactElement {
  return (
    <Fragment>
      <div className="flex flex-row">
        <img className="h-32 w-32 m-8" src={LumpyPic} alt="Bryan Oyloe" />
        <img className="h-12 w-12" src="" alt="Dr. Shelly Wazyniak" />
        <img className="h-12 w-12" src="" alt="Catalina Wine Mixer, cat" />
        <img className="h-12 w-12" src="" alt="Lumpy Space Princess, cat" />
      </div>
    </Fragment>
  );
}
