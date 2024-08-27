import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const landingPage = defineType({
  name: "landingPage",
  title: "Landing Page",
  type: "document",
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
      name: "heroSectoin",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "heading", type: "string", title: "Heading" }),
        defineField({ name: "description", type: "text", title: "Description" }),
        defineField({ name: "img", type: "image", title: "Image" }),
      ],
    }),
    defineField({
      name: "carousalSection",
      title: "Carousal Section",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "customCarousal",
      title: "Custom Carousal",
      type: "object",
      fields: [
        defineField({ name: "heading", type: "string", title: "Heading" }),
        defineField({ name: "description", type: "text", title: "Description" }),
        defineField({
          name: "data",
          type: "object",
          title: "Data",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({ name: "description", type: "text", title: "Description" }),
            defineField({ name: "img", type: "image", title: "Image" }),
          ],
        }),
        defineField({ name: "btnText", type: "string", title: "Button Text" }),
      ],
    }),
    defineField({
      name: "benefitsSection",
      title: "Benefits Section",
      type: "object",
      fields: [
        defineField({ name: "heading", type: "string", title: "Heading" }),
        defineField({ name: "paragraph", type: "text", title: "Paragraph" }),
        defineField({
          name: "data",
          type: "object",
          title: "Data",
          fields: [
            defineField({ name: "icon", type: "image", title: "Icon" }),
            defineField({ name: "tiile", type: "string", title: "Title" }),
            defineField({ name: "descriptoin", type: "blockContent", title: "Description" }),
          ],
        }),
      ],
    }),
  ],
});
