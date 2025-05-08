export const caseStudy = {
  name: "caseStudy",
  type: "document",
  title: "Case Study",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "The title of the case study (e.g., Centrox AI Develops Pocketmate.io)",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "The URL slug for the case study (e.g., pocketmate)",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "meta_title",
      type: "string",
      title: "Meta Title",
      description: "SEO meta title for the case study page",
      validation: (Rule: any) => Rule.required().max(60),
    },
    {
      name: "meta_description",
      type: "text",
      title: "Meta Description",
      description: "SEO meta description for the case study page",
      validation: (Rule: any) => Rule.required().max(160),
    },
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [
        {

          type: "object",
          name: "caseStudyBanner",
          title: "Case Study Banner",
          fields: [
            {
              name: "sectionName",
              type: "string",
              title: "Section Name for identification",
              
            },
            {
              name: "showSection",
              type: "boolean",
              title: "Show Section",
              initialValue: true,
            },
            {
              name: "order",
              type: "number",
              title: "Order",
              description: "Order of the section (e.g., 1, 2, 3)",
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "heading",
              type: "string",
              title: "Heading",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "para1Text",
              type: "text",
              title: "Paragraph 1 Text",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "image",
              type: "imageWithAlt",
              title: "Image",
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
        {
          type: "object",
          name: "resultsGrid",
          title: "Results Grid",
          fields: [
            {
              name: "sectionName",
              type: "string",
              title: "Section Name for identification",
              
            },
            {
              name: "showSection",
              type: "boolean",
              title: "Show Section",
              initialValue: true,
            },
            {
              name: "order",
              type: "number",
              title: "Order",
              validation: (Rule: any) => Rule.required().min(1),
            },
           
            {
              name: "headerData",
              type: "headerData",
              title: "Header Data",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "cards",
              type: "array",
              title: "Cards",
              of: [{ type: "cardItem" }],
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "resizeableCardsLayout",
              type: "boolean",
              title: "Resizable Cards Layout",
              description: "Enable BentoBox grid layout for resizable cards",
              initialValue: false,
            },
            {
              name: "btnText",
              type: "string",
              title: "Button Text",
              description: "Optional button text for the grid",
            },
          ],
        },
        {
          type: "object",
          name: "whatOurClientSay",
          title: "What Our Client Say",
          fields: [
            {
              name: "sectionName",
              type: "string",
              title: "Section Name for identification",
              
            },
            {
              name: "showSection",
              type: "boolean",
              title: "Show Section",
              initialValue: true,
            },
            {
              name: "order",
              type: "number",
              title: "Order",
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "headingText",
              type: "string",
              title: "Heading Text",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "review",
              type: "text",
              title: "Review",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "name",
              type: "string",
              title: "Name",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "position",
              type: "string",
              title: "Position",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "revenue",
              type: "string",
              title: "Revenue",
              description: "Revenue impact (e.g., 88.4%)",
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
        {
          type: "object",
          name: "problemHero",
          title: "Problem Hero Section",
          fields: [
            {
              name: "sectionName",
              type: "string",
              title: "Section Name for identification",
              
            },
            {
              name: "showSection",
              type: "boolean",
              title: "Show Section",
              initialValue: true,
            },
            {
              name: "order",
              type: "number",
              title: "Order",
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "headingText",
              type: "string",
              title: "Heading Text",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "paraText",
              type: "text",
              title: "Paragraph Text",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "image",
              type: "imageWithAlt",
              title: "Image",
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
        {
          type: "object",
          name: "requirementsGrid",
          title: "Requirements Grid",
          fields: [
            {
              name: "sectionName",
              type: "string",
              title: "Section Name for identification",
              
            },
            {
              name: "showSection",
              type: "boolean",
              title: "Show Section",
              initialValue: true,
            },
            {
              name: "order",
              type: "number",
              title: "Order",
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "headerData",
              type: "headerData",
              title: "Header Data",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "cards",
              type: "array",
              title: "Cards",
              of: [{ type: "cardItem" }],
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "resizeableCardsLayout",
              type: "boolean",
              title: "Resizable Cards Layout",
              description: "Enable BentoBox grid layout for resizable cards",
              initialValue: false,
            },
            {
              name: "btnText",
              type: "string",
              title: "Button Text",
              description: "Optional button text for the grid",
            },
          ],
        },
        {
          type: "object",
          name: "researchHero",
          title: "Research Hero Section",
          fields: [
            {
              name: "sectionName",
              type: "string",
              title: "Section Name for identification",
              
            },
            {
              name: "showSection",
              type: "boolean",
              title: "Show Section",
              initialValue: true,
            },
            {
              name: "order",
              type: "number",
              title: "Order",
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "headingText",
              type: "string",
              title: "Heading Text",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "paraText",
              type: "text",
              title: "Paragraph Text",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "image",
              type: "imageWithAlt",
              title: "Image",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "bgImage",
              type: "imageWithAlt",
              title: "Background Image",
              description: "Optional background image",
            },
          ],
        },
        {
          type: "object",
          name: "benefitsGrid",
          title: "Benefits Grid",
          fields: [
            {
              name: "sectionName",
              type: "string",
              title: "Section Name for identification",
              
            },
            {
              name: "showSection",
              type: "boolean",
              title: "Show Section",
              initialValue: true,
            },
            {
              name: "order",
              type: "number",
              title: "Order",
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "headerData",
              type: "headerData",
              title: "Header Data",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "cards",
              type: "array",
              title: "Cards",
              of: [{ type: "cardItem" }],
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "extraCards",
              type: "array",
              title: "Extra Cards (Optional)",
              of: [{ type: "cardItem" }],
              description: "Optional additional cards for the benefits grid",
            },
            {
              name: "resizeableCardsLayout",
              type: "boolean",
              title: "Resizable Cards Layout",
              description: "Enable BentoBox grid layout for resizable cards",
              initialValue: true, // Default to true as per reference code
            },
            {
              name: "btnText",
              type: "string",
              title: "Button Text",
              description: "Optional button text for the grid",
            },
          ],
        },
        {
          type: "object",
          name: "challengesGrid",
          title: "Challenges Grid",
          fields: [
            {
              name: "sectionName",
              type: "string",
              title: "Section Name for identification",
              
            },
            {
              name: "showSection",
              type: "boolean",
              title: "Show Section",
              initialValue: true,
            },
            {
              name: "order",
              type: "number",
              title: "Order",
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "headerData",
              type: "headerData",
              title: "Header Data",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "cards",
              type: "array",
              title: "Cards",
              of: [{ type: "cardItem" }],
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "resizeableCardsLayout",
              type: "boolean",
              title: "Resizable Cards Layout",
              description: "Enable BentoBox grid layout for resizable cards",
              initialValue: false,
            },
            {
              name: "btnText",
              type: "string",
              title: "Button Text",
              description: "Optional button text for the grid",
            },
          ],
        },
        {
          type: "object",
          name: "stepperSection",
          title: "Stepper Section",
          fields: [
            {
              name: "sectionName",
              type: "string",
              title: "Section Name for identification",
              
            },
            {
              name: "showSection",
              type: "boolean",
              title: "Show Section",
              initialValue: true,
            },
            {
              name: "order",
              type: "number",
              title: "Order",
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "heading",
              type: "string",
              title: "Heading",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "description",
              type: "text",
              title: "Description",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "steps",
              type: "array",
              title: "Steps",
              of: [
                {
                  type: "object",
                  title: "Step",
                  fields: [
                    {
                      name: "title",
                      type: "string",
                      title: "Title",
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      name: "content",
                      type: "array",
                      title: "Content",
                      of: [{ type: "block" }],
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      name: "status",
                      type: "boolean",
                      title: "Status",
                      initialValue: false,
                    },
                  ],
                },
              ],
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "btnText",
              type: "string",
              title: "Button Text",
            },
          ],
        },
        {
          type: "object",
          name: "techStackSection",
          title: "Tech Stack Section",
          fields: [
            {
              name: "sectionName",
              type: "string",
              title: "Section Name for identification",
              
            },
            {
              name: "showSection",
              type: "boolean",
              title: "Show Section",
              initialValue: true,
            },
            {
              name: "order",
              type: "number",
              title: "Order",
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "categories",
              type: "array",
              title: "Categories",
              of: [
                {
                  type: "object",
                  title: "Category",
                  fields: [
                    {
                      name: "title",
                      type: "string",
                      title: "Title",
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      name: "content",
                      type: "array",
                      title: "Items",
                      of: [{ type: "techStackItem" }],
                      validation: (Rule: any) => Rule.required().min(1),
                    },
                  ],
                },
              ],
              validation: (Rule: any) => Rule.required().min(1),
            },
          ],
        },
        {
          type: "object",
          name: "keyFeaturesGrid",
          title: "Key Features Grid",
          fields: [
            {
              name: "sectionName",
              type: "string",
              title: "Section Name for identification",
              
            },
            {
              name: "showSection",
              type: "boolean",
              title: "Show Section",
              initialValue: true,
            },
            {
              name: "order",
              type: "number",
              title: "Order",
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "headerData",
              type: "headerData",
              title: "Header Data",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "cards",
              type: "array",
              title: "Cards",
              of: [{ type: "cardItem" }],
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "resizeableCardsLayout",
              type: "boolean",
              title: "Resizable Cards Layout",
              description: "Enable BentoBox grid layout for resizable cards",
              initialValue: false,
            },
            {
              name: "btnText",
              type: "string",
              title: "Button Text",
              description: "Optional button text for the grid",
            },
          ],
        },
        {
          type: "object",
          name: "applicationsGrid",
          title: "Applications Grid",
          fields: [
            {
              name: "sectionName",
              type: "string",
              title: "Section Name for identification",
              
            },
            {
              name: "showSection",
              type: "boolean",
              title: "Show Section",
              initialValue: true,
            },
            {
              name: "order",
              type: "number",
              title: "Order",
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "headerData",
              type: "headerData",
              title: "Header Data",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "cards",
              type: "array",
              title: "Cards",
              of: [{ type: "cardItem" }],
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: "resizeableCardsLayout",
              type: "boolean",
              title: "Resizable Cards Layout",
              description: "Enable BentoBox grid layout for resizable cards",
              initialValue: true, // Default to true as per reference code
            },
            {
              name: "btnText",
              type: "string",
              title: "Button Text",
              description: "Optional button text for the grid",
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().min(1),
    },
  ],
};

