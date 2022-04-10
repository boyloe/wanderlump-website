// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require("next-images");
module.exports = {
  withImages() {
    "serverless";
  },
  images: {
    domains: ["ir-na.amazon-adsystem.com", "m.media-amazon.com"],
  },
};
