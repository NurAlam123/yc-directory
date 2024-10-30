import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query || "";
  const params = { search: query || null };

  const { data: posts } = await sanityFetch({ query: STARTUP_QUERY, params });

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

      <section className="section_container !min-w-3xl overflow-hidden">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All startups"}
        </p>

        <ul className="card_grid mt-7">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startsups found.</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
