import { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "Podcasts | History with K",
    description: "Learn History with K",
  };
};

//todo: podcast list here

export default function PodcastsIndexRoute() {
  return (
    <div>
      <p>Podcast Index Route</p>
    </div>
  );
}
