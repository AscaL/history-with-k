import { Grid, GridItem, VStack, Box, Heading, Center } from "@chakra-ui/react";
import { MetaFunction, Outlet } from "remix";
import { SocialList } from "~/components/SocialList";

export const meta: MetaFunction = () => {
  return {
    title: "History with K",
    description: "Learn History with K",
  };
};

export default function Index() {
  return (
    <Box>
      <p>Podcast List</p>
    </Box>
  );
}
