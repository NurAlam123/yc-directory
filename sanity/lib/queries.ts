import { defineQuery } from "next-sanity";

export const STARTUP_QUERY =
  defineQuery(`*[__type == 'startup' && defined(slug.current) && !defined($search) || category match $search || author -> name match $search || title match $search] | order(_createdAt desc) {
  _id,
  title,
  slug,
  _createdAt,
  author -> {
    _id, 
    name,
    image,
    bio
  },
  views,
  description,
  category,
  image
}`);
