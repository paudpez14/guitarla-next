import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Post({ post }) {
  const { content, image, title, url, publishedAt } = post;
  console.log(post);
  return (
    <article>
      <Image
        width={600}
        height={400}
        src={image.data[0].attributes.formats.medium.url}
        alt={`Imagen Blog ${title}`}
      ></Image>
      <div className="">
        <h3>{title}</h3>
        <p>{publishedAt}</p>
        <p>{content[0].children[0].text}</p>
        <Link href={`/blog/${url}`}>Leer post</Link>
      </div>
    </article>
  );
}
