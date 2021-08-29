import React, { ReactElement, useEffect } from "react";

interface CardProps {
  cardImageUrl?: string;
  cardTitle?: string;
  cardSnippet?: string;
}

export default function card({ cardImageUrl }: CardProps): ReactElement {
  return (
    <div className=" bg-white mx-2 shadow-lg rounded-lg hover:shadow-xl transition duration-200 max-w-sm my-4">
      <a href="">
        <img className="rounded-t-lg" src={cardImageUrl} alt="Pretty Sunset" />
      </a>
      <div className="py-4 px-8">
        <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
          Our New Home
        </h1>
        <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">
          We are excited to share our next adventure! We are both working
          remotely, sold some things, put a few things in storage, and took the
          essentials with us into our new home...
        </p>
      </div>
    </div>
    // </div>
  );
}
