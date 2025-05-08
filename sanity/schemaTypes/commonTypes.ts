export const imageWithAlt = {
  name: "imageWithAlt",
  type: "image",
  title: "Image",
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alt Text",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

export const cardItem = {
  name: "cardItem",
  type: "object",
  title: "Card Item",
  fields: [
    {
      name: "icon",
      type: "image",
      title: "Icon",
      description: "Optional icon for the card",
    },
    {
      name: "alt",
      type: "string",
      title: "Icon Alt Text",
      description: "Alt text for the icon (required if icon is provided)",
      validation: (Rule: any) =>
        Rule.custom((value: string, context: any) => {
          const hasIcon = !!context.parent.icon;
          if (hasIcon && !value) {
            return "Alt text is required when an icon is provided";
          }
          return true;
        }),
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
      description: "Optional caption for the card (used as a subtitle or brief description)",
    },
    {
      name: "symbol",
      type: "string",
      title: "Symbol",
      description: "Optional symbol (e.g., %, +)",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "linkText",
      type: "string",
      title: "Link Text",
      description: "Optional link text",
    },
    {
      name: "colSpan",
      type: "number",
      title: "Column Span",
      description: "Number of columns the card spans (optional, for resizable layouts)",
    },
    {
      name: "bentoImage",
      type: "imageWithAlt",
      title: "Bento Image",
      description: "Optional image for the card (used in resizable layouts)",
    },
  ],
};

export const headerData = {
  name: "headerData",
  type: "object",
  title: "Header Data",
  fields: [
  
    {
      name: "tagText",
      type: "string",
      title: "Tag Text",
    },
    {
      name: "headingText",
      type: "string",
      title: "Heading Text",
    },
    {
      name: "para1Text",
      type: "text",
      title: "Paragraph 1 Text",
    },
    {
      name: "para2Text",
      type: "text",
      title: "Paragraph 2 Text",
    },
    {
      name: "heading2Text",
      type: "string",
      title: "Heading 2 Text",
    },
  ],
};

export const techStackItem = {
  name: "techStackItem",
  type: "object",
  title: "Tech Stack Item",
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Caption",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "img",
      type: "imageWithAlt",
      title: "Image",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};