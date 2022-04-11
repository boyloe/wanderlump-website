import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

interface IProductProps {
  linkHref: string;
  imageSrc: string;
  altText: string;
  title: string;
  tags?: string[];
}

function ProductCard({
  linkHref,
  imageSrc,
  altText,
  title,
}: IProductProps): JSX.Element {
  return (
    <Fragment>
      <Link href={linkHref}>
        <a className="flex flex-col space-y-4 items-center">
          <div className="">
            <Image
              src={imageSrc}
              layout="fixed"
              height={200}
              width={200}
              alt={altText}
            />
          </div>
          <div className="font-josefin-sans text-2xl text-center">{title}</div>
        </a>
      </Link>
    </Fragment>
  );
}

export default ProductCard;
