
import { getProfile } from "@/sanity/query";

import { sanityFetch } from "@/helpers/configSanity";
import { POSTS_QUERY } from "@/sanity/query";
import Image from "next/image";

export default async function Page() {
  const posts: any = await sanityFetch({
    query: POSTS_QUERY,
   

  });
  console.log("porsts is", posts);
  return (
    <div className="bg-white h-screen">
        <p>Nmae</p>
      <p className="">{posts[0].fullName}</p>
        <p className="">{posts[0].shortBio}</p>

    <div className="w-1/2 h-1/2 border-2 relative">
      <Image src={posts[0].profileImage.image} alt="alt"  layout="fill" // Fill the parent container
    objectFit=" "/>
      </div>
    </div>
  );
}
