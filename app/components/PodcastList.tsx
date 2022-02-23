import { VStack } from "@chakra-ui/react";
import { PodcastItem } from "~/components/PodcastItem";
import type { PodcastMarkdownAttributes } from "~/components/PodcastItem";

export function PodcastList(podcastList: PodcastMarkdownAttributes[]) {
  return (
    <VStack spacing={3}>
      {podcastList.map((item) => (
        <PodcastItem key={item.title} podcast={item}></PodcastItem>
      ))}
    </VStack>
  );
}
