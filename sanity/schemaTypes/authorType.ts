//@ts-nocheck
import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType, Image } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon as any,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});

interface data {
  heroSectoin: {
    heading: string;
    description: string;
    img: img;
  };
  carousalSection: img[];
  customCarousal: {
    heading: string;
    description: string;
    data: {
      title: string;
      description: string;
      img: img;
    };
    btnText: string;
  };
  techStackSection: {
    includeSection: boolean;
    heading: string;
    description: string;
    data: [
      {
        title: string;
        content: { img: Image; alt: string; caption: string }[];
      }[],
    ];
  };
  benefitsSection: {
    heading: string;
    paragraph: string;
    data: {
      icon: img;
      tiile: string;
      descriptoin: block;
    };
  };
}

interface DataI {
  heroSection: {
    includeSection: boolean;
    heading: string;
    description: string;
    btnText: string;
    img: image;
    includeDots: boolean;
    reverse: boolean;
  };
  logoCarousal: {
    includeSection: boolean;
    content: {
      icon: Image;
      alt: string;
    }[];
  };
  customCarousal: {
    includeSection: boolean;
    heading: string;
    description: string;
    data: {
      heading: string;
      description: richTextEditor;
      btnText: string;
      img: Image;
    }[];
  };
  benefitsSection: {
    includeSection: boolean;
    heading: string;
    description: string;
    data: {
      icon: image;
      alt: string;
      heading: string;
      description: richTextEditor;
    }[];
  };
  veritcalCarousalSectoin: {
    includeSection: boolean;
    heading: string;
    images: {
      img: Image;
      alt: string;
      caption: string;
    }[];
    data: {
      img: Image;
      alt: string;
      content: richTextEditor;
    };
  };
  hoverAnimationSection: {
    includeSection: boolean;
    heading: string;
    data: {
      img: Image;
      alt: string;
      caption: string;
      details: string[];
    };
  };
  stepperSection: {
    includeSection: boolean;
    heading: string;
    description: string;
    data: {
      title: string;
      content: richTextEditor;
    }[];
    btnText: string;
  };
  whyUsSection: {
    heading: string;
    description: string;
    content: {
      heading: string;
      description: string;
    }[];
    btntext: string;
    img: Image;
  };
  servicesSection: {
    includeSection: boolean;
    heading: string;
    data: {
      title: string;
      content: richTextEditor;
    }[];
  };
  caseStudiesSection: {
    includeSection: boolean;
    heading: string;
    description: string;
    data: {
      title: richtextEditor;
      tags: string[];
    }[];
  };
  customerTestimonialSection: {
    includeSection: boolean;
    content: richTextEditor;
    name: string;
    designation: string;
    companyName: string;
  }[];
  productsSection: {
    includeSection: boolean;
    title: string;
    img: Image;
    category: string;
    date: string;
  }[];
  faqsSection: {
    includeSection: boolean;
    heading: string;
    data: {
      question: string;
      answer: richTextEditor;
    }[];
  };
  contactUsSection: {
    includeSection: boolean;
    heading: string;
    description: richTextEditor;
    disclaimer: richTextEditor;
  };
  bannerSection: {
    includeSection: boolean;
    heading: string;
    btnText: string;
    bgImage: image;
  };
}
