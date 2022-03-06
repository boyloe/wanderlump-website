import React, { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

interface IHorizontalCardProps {
  title?: string;
  date?: string;
  href: string;
  thumbImage: string;
  altText: string;
  preview: string;
  location: string;
}

export default function HorizontalCard({
  title,
  date,
  href,
  thumbImage,
  preview,
  location,
  altText,
}: IHorizontalCardProps): ReactElement {
  return (
    <Link href={href}>
      <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 font-lato cursor-pointer hover:bg-gray-100 h-64">
        <div className="sm:flex w-1/3">
          <Image
            alt={altText}
            src={thumbImage}
            height={200}
            width={160}
            className="rounded-lg"
          />
        </div>
        <div id="body" className="flex flex-col ml-5 w-2/3">
          <h4 id="name" className="text-xl font-semibold mb-2">
            {title}
          </h4>
          <p id="job" className="text-gray-800 mt-2">
            {preview}
          </p>
          <div className="flex flex-col mt-5">
            <p className="text-sm ">{date}</p>
            <p className="text-sm ">{location}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
