// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require("next-images");
(module.exports = withImages()), { target: "serverless" };

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require("@next/mdx")();
module.exports = withMDX();
