import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "remix";

const Links = [
  { name: "Home", to: "/" },
  { name: "Podcasts", to: "/podcasts" },
];

export interface NavbarPorps {
  link: { name: string; to: string };
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center bg="black" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <Link
                  style={{ color: "yellow" }}
                  key={link.name}
                  to={link.to}
                  prefetch="intent">
                  {link.name}
                </Link>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link
                  style={{ color: "yellow" }}
                  key={link.name}
                  to={link.to}
                  prefetch="intent">
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Center>
    </>
  );
}
