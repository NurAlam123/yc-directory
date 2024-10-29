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

export const STARTUP_VIEWS_QUERY =
  defineQuery(`*[__type == 'startup] && _id == $id][0] {
  _id, views
}`);

export const STARTUP_BY_ID_QUERY =
  defineQuery(`*[__type == 'startup' && _id == $id][0] {
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
  image,
  pitch
}`);

export const AUTHOR_BY_GITHUB_ID_QUERY =
  defineQuery(`*[_type == "author" && id == $id][0] { 
_id, 
name, 
id, 
username, 
bio, 
email, 
image
}`);
