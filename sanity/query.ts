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
export const POSTS_QUERY = groq`*[_type == "profile"]{
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
      order,
      heading,
      description,
      btnText,
      "img": img.asset->url,
      includeDots,
      reverse
    },
    logoCarousal {
      includeSection,
      order,

      content[] {
        "icon": icon.asset->url,
        alt
      }
    },
    
    customCarousal {
      heading,
      includeSection,
      order,

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
      order,

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
      order,

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
      order,

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
      order,

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
      order,

      isReverse,
      heading,
      description,
      image {
        asset->{
          _id,
          url
        }
      },
      data[] {
        title,
        content
      },
      btnText
    }
  ,  
    servicesSection {
      heading,
      order,

      data[] {
        title,
        content
      }
    },
    caseStudiesSection {
      includeSection,
      order,

      heading,
      description,
      data[] {
        title,
        tags,
        "img": img.asset->url
      }
    },
    customerTestimonialSection {
      includeSection,
      order,

      testimonials[] {
        content,
        name,
        designation,
        companyName
      }
    }
  ,  
    
    productsSection {
      includeSection,
      order,

      heading,
      products[] {
        title,
        "img": img.asset->url,
        category,
        date
      }
    },
    faqsSection {
      includeSection,
      order,

      heading,
      data[] {
        question,
        answer
      }
    },
    techStackSection {
      heading,
      includeSection,
      order,

      description,
      data[] {
        title,
        content[] {
          "img": img.asset->url,
          alt,
          caption
        }
      }
    },
    contactUsSection {
      includeSection,
      order,

      heading,
      description,
      disclaimer,
      "img": img.asset->url
    },
    bannerSection {
      includeSection,
      order,

      heading,
      btnText,
      "bgImage": bgImage.asset->url
    }
  }
  `;

  export const NESTED_SERVICE_PAGE_QUERY = groq`
  *[_type == "nestedservicesPages" && slug.current == $slug && customSlug.current == $subslug] {
    _id,
    slug,
    heroSection {
      includeSection,
      order,
      heading,
      description,
      btnText,
      "img": img.asset->url,
      includeDots,
      reverse
    },
    logoCarousal {
      includeSection,
      order,

      content[] {
        "icon": icon.asset->url,
        alt
      }
    },
    
    customCarousal {
      heading,
      includeSection,
      order,

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
      order,

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
      order,

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
      order,

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
      order,

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
      order,

      isReverse,
      heading,
      description,
      image {
        asset->{
          _id,
          url
        }
      },
      data[] {
        title,
        content
      },
      btnText
    }
  ,  
    servicesSection {
      heading,
      order,

      data[] {
        title,
        content
      }
    },
    caseStudiesSection {
      includeSection,
      order,

      heading,
      description,
      data[] {
        title,
        tags,
        "img": img.asset->url
      }
    },
    customerTestimonialSection {
      includeSection,
      order,

      testimonials[] {
        content,
        name,
        designation,
        companyName
      }
    }
  ,  
    
    productsSection {
      includeSection,
      order,

      heading,
      products[] {
        title,
        "img": img.asset->url,
        category,
        date
      }
    },
    faqsSection {
      includeSection,
      order,

      heading,
      data[] {
        question,
        answer
      }
    },
    techStackSection {
      heading,
      includeSection,
      order,

      description,
      data[] {
        title,
        content[] {
          "img": img.asset->url,
          alt,
          caption
        }
      }
    },
    contactUsSection {
      includeSection,
      order,

      heading,
      description,
      disclaimer,
      "img": img.asset->url
    },
    bannerSection {
      includeSection,
      order,

      heading,
      btnText,
      "bgImage": bgImage.asset->url
    }
  }
  `;

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
