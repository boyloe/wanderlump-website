import React, { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

interface IHorizontalCardProps {
  title?: string;
  date?: string;
  href: string;
  backgroundSrc: string;
  preview: string;
  location: string;
}

export default function HorizontalCard({
  title,
  date,
  href,
  backgroundSrc,
  preview,
  location,
}: IHorizontalCardProps): ReactElement {
  return (
    <Link href={href}>
      <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 font-lato cursor-pointer hover:bg-gray-100">
        <div className="hidden sm:flex border-gray-300 border-2 rounded-lg">
          <Image
            alt={backgroundSrc}
            src={backgroundSrc}
            height={200}
            width={160}
          />
        </div>
        <div id="body" className="flex flex-col ml-5">
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
