import React, { ReactElement } from "react";
import { DiscussionEmbed } from "disqus-react";

interface CommentsProps {
  url: string;
  identifier: string;
  title: string;
}

const Comments = ({ url, identifier, title }: CommentsProps): ReactElement => {
  const disqusShortname = "wanderlump";
  const baseUrl = process.env.SITE_URL || "http://localhost:3000/";

  const disqusConfig = {
    url: `${baseUrl}${url}`,
    identifier: identifier,
    title: title,
  };

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default Comments;
