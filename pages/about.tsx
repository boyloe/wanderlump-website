import React, { ReactElement } from "react";

export default function about(): ReactElement {
  return (
    <div>
      <h1>This is the about page</h1>
      <ul>
        <li>Who we are</li>
        <li>What we do</li>
        <li>The cats stories</li>
      </ul>
    </div>
  );
}
