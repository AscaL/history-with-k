import axios from "axios";

async function getPodcastMarkdown(podcastURL: string) {
  const res = await fetch(
    `https://f004.backblazeb2.com/file/history-with-k/${podcastURL}.md`
  );
  if (res.status !== 200) {
    throw new Response("What a joke! Podcast Not found.", {
      status: res.status,
    });
  }

  return res;
}

async function getAllPodcastsMarkdown() {
  const res = await Promise.allSettled([
    axios.get(
      `https://f004.backblazeb2.com/file/history-with-k/panedigrano.md`
    ),
  ]);

  return res;
}

export { getPodcastMarkdown, getAllPodcastsMarkdown };
