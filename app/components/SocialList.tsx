import { VStack } from "@chakra-ui/react";
import { LinkSocial } from "~/components/LinkSocial";
import spotifyIcon from "../../public/spotify-icon-black-bg.png";
import youtubeIcon from "../../public/player-icon.png";
import soundcloudIcon from "../../public/soundcloud-icon.png";

const LinkItems = [
  {
    size: "md",
    name: "Spotify",
    src: spotifyIcon,
    company: "Spotify",
  },
  {
    size: "md",
    name: "SoundCloud",
    src: soundcloudIcon,
    company: "SoundCloud",
  },
  {
    size: "md",
    name: "YouTube",
    src: youtubeIcon,
    company: "YouTube",
  },
];

export function SocialList() {
  return (
    <VStack spacing={2}>
      {LinkItems.map((item) => (
        <LinkSocial
          key={item.name}
          size={item.size}
          name={item.name}
          src={item.src}
          company={item.company}></LinkSocial>
      ))}
    </VStack>
  );
}
