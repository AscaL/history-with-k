import type { MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import Navbar from "~/components/Navbar";

import {
  ChakraProvider,
  Box,
  Heading,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { SocialList } from "./components/SocialList";

export const meta: MetaFunction = () => {
  const description = `Podcasts about History with K`;
  return {
    description,
  };
};

function Document({
  children,
  title = "History with K",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <ChakraProvider>
        <Navbar />
        <Center>
          <Heading>History with K</Heading>
        </Center>
        <Grid templateColumns="repeat(12, 1fr)" gap={2}>
          <GridItem colSpan={4}>
            <SocialList />
          </GridItem>
          <GridItem colSpan={8}>
            <Outlet />
          </GridItem>
        </Grid>
      </ChakraProvider>
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <ChakraProvider>
        <Box>
          <Heading as="h1" bg="purple.600">
            [CatchBoundary]: {caught.status} {caught.statusText}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <ChakraProvider>
        <Box>
          <Heading as="h1" bg="blue.500">
            [ErrorBoundary]: There was an error: {error.message}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  );
}
