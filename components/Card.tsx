import React, { ReactElement } from "react";

interface CardProps {
  imageUrl?: string;
  title?: string;
  location: string;
  date?: string;
  href: string;
  alt: string;
}

export default function card({
  imageUrl,
  title,
  location,
  href,
  alt,
  date,
}: CardProps): ReactElement {
  return (
    <div className=" bg-white mx-2 shadow-lg rounded-lg hover:shadow-xl transition duration-200 border-2 border-black max-w-md my-4 font-lato">
      <a href={href}>
        <img className="rounded-t-lg " src={imageUrl} alt={alt} />
      </a>
      <div className="py-4 px-8">
        <h2 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
          {title}
        </h2>
        <p className="hover:cursor-pointer py-2 text-gray-900 leading-6">
          {location}
        </p>
        <p className="hover:cursor-pointer text-gray-600 leading-6">{date}</p>
      </div>
    </div>
  );
}
