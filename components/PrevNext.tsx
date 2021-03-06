import React, { ReactElement } from "react";
import Link from "next/link";
interface Props {
  previousPostHref: string;
  nextPostHref: string;
}

export default function PrevNext({
  previousPostHref,
  nextPostHref,
}: Props): ReactElement {
  return (
    <div className="flex justify-center mb-8">
      <Link href={previousPostHref}>
        <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mx-4">
          Prev Post
        </button>
      </Link>
      <Link href={nextPostHref}>
        <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mx-4">
          Next Post
        </button>
      </Link>
    </div>
  );
}
