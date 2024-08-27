//@ts-nocheck
import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

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
  benefitsSection:{
    heading:string,
    paragraph:string,
    data:{
      icon:img,
      tiile:string,
      descriptoin:block
    }

  }
}
