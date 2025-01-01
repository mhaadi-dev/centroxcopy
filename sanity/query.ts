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

export const GETFirstBLOGS_QUERY = groq`
  *[_type == "blog"] | order(_createdAt desc) [0...6] {
    _id,
    name,
    meta_title,
    meta_description,
    label,
    subslug,
     category->{category_name,category_meta_title,category_meta_description},
    author->{
      name,
      bio,
      image { alt, "image": asset->url },
      linkedin
    },
    content_item {
      image { alt, "image": asset->url },
      title,
      date,
      subdescription,
      tags,
      linkText,
      linkWithIcon,
      link,
      isSearchResult,
      label,
      duration,
      blog_data,
      colSpan,
      banner_data,
      related_blogs_heading,
      related_blogs_paragraph
    }
  }
`;

export const GET_TOTAL_BLOGS_COUNT = groq`
  count(*[_type == "blog"])
`;
export const GETALLBLOGS_QUERY = groq`
  *[_type == "blog"] | order(_createdAt desc) {
    _id,
    name,
    meta_title,
    meta_description,
    label,subslug,
    category->{category_name,category_meta_title,category_meta_description},
    author->{
      name,
      bio,
      image { alt, "image": asset->url },
      linkedin
    },
    content_item {
      image { alt, "image": asset->url },
      title,
      date,
      subdescription,
      tags,
      linkText,
      linkWithIcon,
      link,
      isSearchResult,
      label,
      duration,
      name,
      author_description,
      author_alt,
      author_image,
      colSpan,
      blog_data,
      banner_data,
      related_blogs_heading,
      related_blogs_paragraph
    }
  }
`;
export const GET_PAGINATED_ARTICLES_QUERY = groq`
  *[_type == "blog"] | order(_createdAt desc) [$startRange...$endRange] {
    _id,
    name,
    meta_title,
    meta_description,
    label,subslug,
     category->{category_name,category_meta_title,category_meta_description},
    author->{
      name,
      bio,
      image { alt, "image": asset->url },
      linkedin
    },
    content_item {
      image { alt, "image": asset->url },
      title,
      date,
      subdescription,
      tags,
      linkText,
      linkWithIcon,
      link,
      isSearchResult,
      label,
      duration,
      name,
      author_description,
      author_alt,
      author_image,
      colSpan,
      blog_data,
      banner_data,
      related_blogs_heading,
      related_blogs_paragraph
    }
  }
`;



export const GET_PAGINATED_ARTICLES_QUERY_ONSPECIFICPAGE = groq`
  *[_type == "blog" && _id > $lastId][$index]._id 
`;
export const GET_BLOG_BY_ID_QUERY = groq`
  *[_type == "blog" && label.current == $slug][0] {
    _id,
    name,
    meta_title,
    meta_description,
    subslug,
    label,
     category->{category_name,category_meta_title,category_meta_description},
    author->{
      name,
      bio,
      image { alt, "image": asset->url },
      linkedin
    },
    content_item {
      image { alt, "image": asset->url },
      title,
      date,
      subdescription,
      tags,
      linkText,
      linkWithIcon,
      isSearchResult,
      label,
      duration,

      colSpan,
      blog_data,
      banner_data,
      related_blogs_heading,
      related_blogs_paragraph
    }
  }
`;


export const PAGINATED_SEARCH_BLOGS_QUERY = (keyword: string, startRange: number, endRange: number) => groq`
  *[_type == "blog" && 
    (
     meta_title match "*${keyword}*" || 
     meta_description match "*${keyword}*" || 
     content_item.title match "*${keyword}*" || 
     content_item.tags[] match "*${keyword}*"||
     content_item.category match "*${keyword}*"
    )
  ] | order(_createdAt desc) [${startRange}...${endRange}] {
    _id,
    name,
    meta_title,
    meta_description,
    label,subslug,
 category->{category_name,category_meta_title,category_meta_description},    author->{
      name,
      bio,
      image { alt, "image": asset->url },
      linkedin
    },
    content_item {
      image { alt, "image": asset->url },
      title,
      
      date,
      subdescription,
      tags,
      linkText,
      linkWithIcon,
      isSearchResult,
      label,
      duration,
      name,
      author_description,
      author_image,
      author_alt,
      link,
      colSpan,
      blog_data,
      banner_data,
      related_blogs_heading,
      related_blogs_paragraph
    }
  }
`;
export const TOTAL_SEARCH_BLOGS_COUNT_QUERY = (keyword: string) => groq`
  count(*[_type == "blog" && 
    (name match "*${keyword}*" || 
     meta_title match "*${keyword}*" || 
     meta_description match "*${keyword}*" || 
     content_item.title match "*${keyword}*" || 
     content_item.tags[] match "*${keyword}*"
    )
  ])
`;

export const GET_ALL_CATEGORIES=groq `*[_type == "category"]`
export const GET_BLOGS_BY_CATEGORY_QUERY = (category: string) => groq`

  *[_type == "blog" && category->category_name == $category] | order(_createdAt desc)[0..5] {
    _id,
    name,
    meta_title,
    meta_description,
    label,
    subslug,
    category->{
      category_name,
      category_meta_title,
      category_meta_description
    },
    author->{
      name,
      bio,
      image { alt, "image": asset->url },
      linkedin
    },
    content_item {
      image { alt, "image": asset->url },
      title,
      date,
      subdescription,
      tags,
      linkText,
      linkWithIcon,
      duration,
      colSpan,
      blog_data,
      banner_data {
        banner_heading,
        banner_description
      },
      related_blogs_heading,
      related_blogs_paragraph
    }
  }
`;

export const GET_PAGINATED_BLOGS_BY_CATEGORY_QUERY = (
  category: string,
  startRange: number,
  endRange: number
) => groq`
  *[_type == "blog" && category->category_name == $category] 
  | order(_createdAt desc)[$startRange..$endRange - 1] {
    _id,
    name,
    meta_title,
    meta_description,
    label,
    subslug,
    category->{
      category_name,
      category_meta_title,
      category_meta_description
    },
    author->{
      name,
      bio,
      image { alt, "image": asset->url },
      linkedin
    },
    content_item {
      image { alt, "image": asset->url },
      title,
      date,
      subdescription,
      tags,
      linkText,
      linkWithIcon,
      duration,
      colSpan,
      blog_data,
      banner_data {
        banner_heading,
        banner_description
      },
      related_blogs_heading,
      related_blogs_paragraph
    }
  }
`;

export const GET_CATEGORY_BY_SLUG_QUERY = (categorySlug: any) => groq`
  *[_type == "category" && category_name == $categorySlug][0] {
    _id,
    category_name,
    category_meta_title,
    category_meta_description,

  }
`;


export const GET_TOTAL_BLOGS_BY_CATEGORY = (category:any) => `
  *[_type == "blog" && references(*[_type == "category" && category_name == $category]._id)] {
    _id
  }.length
`;

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

export const LANDING_LOGOS_CAROUSEL = '*[_type == "landingLogosCarousel"]{logos[]{icon{asset->{_id, url}}, alt}}';
export const LANDING_PAGE_QUERY = `*[_type == "landingPage"]{
  title,
  description,
  logosCarousel->{
    logos[]{
      icon{
        asset->{
          _id,
          url
        }
      },
      alt
    }
  },

}`;
