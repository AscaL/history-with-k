import { LoaderFunction, useLoaderData } from "remix";
import { PodcastItem } from "~/components/PodcastItem";
import { getPodcastMarkdown } from "~/services/podcasts";
import { PodcastMarkdown } from "..";
import parseFrontMatter from "front-matter";
import { Box } from "@chakra-ui/react";

export const loader: LoaderFunction = async ({ params }) => {
  let { podcastId } = params;
  const markdown = await getPodcastMarkdown((podcastId = "panedigrano"));
  return markdown;
};

export default function PodcastRoute() {
  const podcastMarkdownData: string = useLoaderData<string>();
  const { attributes, body }: PodcastMarkdown =
    parseFrontMatter(podcastMarkdownData);

  return (
    <Box>
      <PodcastItem podcast={attributes}></PodcastItem>
      <audio controls>
        <source
          src={
            attributes.audioUrl ||
            "https://f004.backblazeb2.com/file/history-with-k/panedigrano.mp3"
          }
          type="audio/mpeg"
        />
      </audio>
    </Box>
  );
}
