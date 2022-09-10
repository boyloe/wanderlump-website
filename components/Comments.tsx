import React, { ReactElement } from "react";
import { DiscussionEmbed } from "disqus-react";

interface CommentsProps {
  url: string;
  identifier: string;
  title: string;
}

const Comments = ({ url, identifier, title }: CommentsProps): ReactElement => {
  const disqusShortname = "Demo-GfG";

  const disqusConfig = {
    url: url,
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
