import { Box, Heading } from "@chakra-ui/react";
import { Link } from "remix";
import Markdown from "marked-react";

export type PodcastMarkdownAttributes = {
  title: string;
  host: string;
  synopsis: string;
  audioUrl: string;
};

export function PodcastItem({
  podcast,
}: {
  podcast: PodcastMarkdownAttributes;
}) {
  return (
    <Box>
      <Heading>
        <Link to={podcast.title}>{podcast.title}</Link>
      </Heading>
      <Markdown value={podcast.synopsis}></Markdown>
    </Box>
  );
}
