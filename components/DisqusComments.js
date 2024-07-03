"use client";

import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({ url, identifier, title }) => {
  const disqusConfig = {
    url: url,
    identifier: identifier,
    title: title,
  };

  return (
    <div>
      <DiscussionEmbed shortname="frnh" config={disqusConfig} />
    </div>
  );
};

export default DisqusComments;
