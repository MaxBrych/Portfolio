import React from "react";
import { useState, useEffect } from "react";
import client from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";
import { Post } from "../typings";

const sanityClient = client({
  projectId: "94cropdl",
  dataset: "production",
});

export default function Blog() {
  return (
    <div>
      Blog
      <ul>
        {documents.map((doc) => (
          <li key={doc._id}>{doc.title}</li>
        ))}
      </ul>
    </div>
  );
}
