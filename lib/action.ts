"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createPitch = async (
  state: any,
  form: FormData,
  pitch: string,
) => {
  console.log("calling->");
  const session = await auth();

  if (!session)
    return parseServerActionResponse({
      error: "Not signed in.",
      status: "ERROR",
    });

  const { title, description, link } = Object.fromEntries(
    Array.from(form).filter((key) => key != "pitch"),
  );
  const slug = slugify(title as string, { lower: true, strict: true });

  try {
    const startup = {
      title,
      description,
      pitch,
      image: link,
      author: {
        slug: {
          _type: slug,
          current: slug,
        },
        _type: "reference",
        _ref: session?._id,
      },
      views: 0,
    };

    const result = await writeClient.create({
      _type: "startup",
      ...startup,
    });

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};
