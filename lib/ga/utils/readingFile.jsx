import * as fs from "fs";

// Constants
import { BASE_URL } from "../../constants";

export const staticPaths = fs
  .readdirSync("pages")
  .filter((staticPage) => {
    return ![
      "api",
      "_app.tsx",
      "_document.tsx",
      "404.tsx",
      "sitemap.xml.jsx",
    ].includes(staticPage);
  })
  .map((staticPagePath) => {
    return `${BASE_URL}/${staticPagePath}`;
  });
