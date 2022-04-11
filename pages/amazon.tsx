import React, { ReactElement } from "react";

// Components
import ProductCard from "../components/Product";

// Util/Data
import { referralProducts } from "../lib/data/referralProducts";

export default function Amazon(): ReactElement {
  return (
    <div className="py-14 px-24 grid md:grid-cols-3 gap-24 gap-y-48">
      {referralProducts.map(({ title, linkHref, imageSrc, altText }) => (
        <ProductCard
          title={title}
          key={title}
          imageSrc={imageSrc}
          linkHref={linkHref}
          altText={altText}
        />
      ))}
    </div>
  );
}
