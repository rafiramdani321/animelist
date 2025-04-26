import React from "react";

import { getAnimeFullById } from "@/lib/anime-service";
import DetailsAnime from "./(home)";
import { generateSlug } from "@/lib/utils";
import { notFound, redirect } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

const PageDetailAnime = async ({ params }: PageProps) => {
  const slug = params.slug;
  const id = slug.split("-").pop();

  if (!id) return notFound();

  const data = await getAnimeFullById(Number(id));

  if (!data || !data.data || data.status === 404) return notFound();

  const expectedSlug = `${generateSlug(data.data.title)}-${id}`;

  if (expectedSlug !== slug) {
    return redirect(`/anime/${expectedSlug}`);
  }

  return <DetailsAnime />;
};

export default PageDetailAnime;
