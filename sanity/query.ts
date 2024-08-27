import { client } from "@/helpers/configSanity";
import { groq } from "next-sanity";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
  
}
export const POSTS_QUERY =    groq`*[_type == "profile"]{
  _id,
  fullName,
  headline,
  profileImage {alt, "image": asset->url},
  shortBio,
  location,
  fullBio,
  email,
  "resumeURL": resumeURL.asset->url,
  socialLinks,
  skills
}`;


export const TEAM_SECTION_QUERY = groq`*[_type == "teamSection"]{
  _id,
  mainSectionheading,
  description,
  "bgImage": bgImage.asset->url,
  secondSectionHeading,
  LeadersImgs[] {
    name,
    "img": img.asset->url,
    designation,
    linkedINUrl
  },
  thirdSectionheading,
  thirdSectionDescription,
  "thirdSectoinImg": thirdSectoinImg.asset->url,
  teamSectionHeading,
  teamSectionImgs[] {
    name,
    "img": img.asset->url,
    designation,
    linkedINUrl
  }
}`;
