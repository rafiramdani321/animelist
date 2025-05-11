import React from "react";

import { getAnimeCharacters, getAnimeFullById } from "@/lib/anime-service";
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

  const detailAnime = await getAnimeFullById(Number(id));
  const charactersAnime = await getAnimeCharacters(Number(id));

  if (!detailAnime || !detailAnime.data || detailAnime.status === 404)
    return notFound();

  const expectedSlug = `${generateSlug(detailAnime.data.title)}-${id}`;

  if (expectedSlug !== slug) {
    return redirect(`/anime/${expectedSlug}`);
  }

  return (
    <DetailsAnime
      detailAnimeContent={detailAnime.data}
      charactersAnime={charactersAnime.data}
    />
  );
};

export default PageDetailAnime;
