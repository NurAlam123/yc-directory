import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query || "";

  const posts = await client.fetch(STARTUP_QUERY);

  //const posts = [
  //  {
  //    _createdAt: new Date(),
  //    views: 55,
  //    author: {
  //      _id: 1,
  //      name: "Nur",
  //    },
  //    _id: 1,
  //    description: "This is a description",
  //    image: "https://i.ytimg.com/vi/6v6dbxPlsXs/maxresdefault.jpg",
  //    category: "Robots",
  //    title: "We Robots",
  //  },
  //];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br /> connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on pitches and Get Noticed in Virtual Competition
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All startups"}
        </p>

        <ul className="card_grid mt-7">
          {posts.map((post: StartupCardType, index: number) => (
            <StartupCard key={post._id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
