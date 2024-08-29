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

// && slug.current == $slug

export const SERVICES_PAGE_QUERY = groq`
*[_type == "servicesPages" && slug.current == $slug] {
  _id,
  slug,
  heroSection {
    includeSection,
    heading,
    description,
    btnText,
    "img": img.asset->url,
    includeDots,
    reverse
  },
  logoCarousal[] {
    includeSection,
    "icon": icon.asset->url,
    alt
  },
  customCarousal {
    heading,
    includeSection,
    description,
    data[] {
      heading,
      description,
      btnText,
      "img": img.asset->url
    },
    btnText
  },
  benefitsSection {
    heading,
    description,
    includeSection,
    data[] {
      "icon": icon.asset->url,
      alt,
      heading,
      description
    }
  },
  verticalCarouselSection {
    includeSection,
    heading,
    images[] {
      "img": img.asset->url,
      alt,
      caption
    },
    data[] {
      "img": img.asset->url,
      alt,
      content
    }
  },
  hoverAnimationSection {
    includeSection,
    heading,
    data[] {
      "img": img.asset->url,
      alt,
      caption,
      details
    }
  },
  whyUsSection {
    includeSection,
    heading,
    description,
    content[] {
      heading,
      description
    },
    btntext,
    "img": img.asset->url
  },
  stepperSection {
    includeSection,
    isReverse,
    heading,
    description,
    data[] {
      title,
      content
    },
    btnText
  },
  servicesSection {
    heading,
    data[] {
      title,
      content
    }
  },
  caseStudiesSection {
    includeSection,
    heading,
    description,
    data[] {
      title,
      tags,
      "img": img.asset->url
    }
  },
  customerTestimonialSection[] {
    includeSection,
    content,
    name,
    designation,
    companyName
  },
  productsSection[] {
    includeSection,
    title,
    "img": img.asset->url,
    category,
    date
  },
  faqsSection {
    heading,
    data[] {
      question,
      answer
    }
  },
  contactUsSection {
    includeSection,
    heading,
    description,
    disclaimer,
    "img": img.asset->url
  },
  bannerSection {
    includeSection,
    heading,
    btnText,
    "bgImage": bgImage.asset->url
  }
}
`



export const ALL_LANDING_PAGE_QUERY = groq`*[_type == "servicesPages" && defined(slug.current)][0...12] {
  _id,
  slug,
  heroSectoin {
    heading,
    description,
    "img": img.asset->url
  },
  carousalSection[] {
    "img": asset->url
  },
  customCarousal {
    heading,
    description,
    data {
      title,
      description,
      "img": img.asset->url
    },
    btnText
  },
  benefitsSection {
    heading,
    paragraph,
    data {
      "icon": icon.asset->url,
      tiile,
      descriptoin
    }
  }
}`;
