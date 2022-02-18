import { Grid, GridItem, Box, Heading, Center } from "@chakra-ui/react";
import { MetaFunction, Outlet } from "remix";
import { SocialList } from "~/components/SocialList";

export const meta: MetaFunction = () => {
  return {
    title: "Podcasts | History with K",
    description: "Learn History with K",
  };
};

export default function PodcastsRoute() {
  return (
    <Box>
      <p>Podcasts List ?</p>
      <Outlet />
    </Box>
  );
}
