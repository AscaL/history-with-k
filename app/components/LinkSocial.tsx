import { Avatar, Center, Circle, Link, Text } from "@chakra-ui/react";

export function LinkSocial({
  size,
  name,
  src,
  company,
}: {
  size: string;
  name: string;
  src: string;
  company: string;
}) {
  return (
    <Circle bg="grey" style={{ width: "250px", alignContent: "left" }}>
      <Center>
        <Avatar
          style={{ marginRight: "10px" }}
          size={size}
          name={name}
          src={src}></Avatar>
        <Text fontSize="sm">
          <Link color="yellow.200" href="#">
            {company}{" "}
          </Link>
        </Text>
      </Center>
    </Circle>
  );
}
