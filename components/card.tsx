import React, { ReactElement } from "react";

interface CardProps {
  cardImageUrl: string;
  // postTitle: string;
  // postSnippet: string;
}

export default function card({ cardImageUrl }: CardProps): ReactElement {
  return (
    <div className=" bg-white mx-2 shadow-lg rounded-lg hover:shadow-xl transition duration-200 max-w-sm my-4">
      <img className="rounded-t-lg" src={cardImageUrl} alt="Pretty Sunset" />
      <div className="py-4 px-8">
        <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          neque eum autem repellat iure perferendis, possimus blanditiis
          temporibus doloribus corrupti.
        </p>
      </div>
    </div>
    // </div>
  );
}
