import { Grid, GridItem, Box, Heading, Center } from "@chakra-ui/react";
import { Link, MetaFunction, Outlet } from "remix";
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
      <Link to="panedigrano">Panedigrano</Link>
      <Outlet />
    </Box>
  );
}
