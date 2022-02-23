import { Box } from "@chakra-ui/react";
import { MetaFunction, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import parseFrontMatter from "front-matter";
import {
  getAllPodcastsMarkdown,
  getPodcastMarkdown,
} from "~/services/podcasts";
import { PodcastItem } from "~/components/PodcastItem";

export type PodcastMarkdownAttributes = {
  title: string;
  host: string;
  synopsis: string;
  audioUrl: string;
};

export type PodcastMarkdown = {
  attributes: PodcastMarkdownAttributes;
  body: string;
};

export const meta: MetaFunction = () => {
  return {
    title: "History with K",
    description: "Learn History with K",
  };
};

export const loader: LoaderFunction = async () => {
  const markdown = await getPodcastMarkdown(`panedigrano`);
  return markdown;
};

export default function Index() {
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
