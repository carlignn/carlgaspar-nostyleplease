import type { TinaField } from "tinacms";
export function archetypeFields() {
  return [
    {
      type: 'string',
      name: 'subtitle',
      label: 'subtitle',
      description: 'Optional subtitle that shows below the title',
    },
    {
      type: "boolean",
      name: "draft",
      label: "draft",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true,
    },
    {
      type: 'string',
      name: 'tags',
      label: 'tags',
      description: 'First value must be "all"',
      list: true,
      ui: {
        component: 'tags',
      },
    },
    {
      type: "rich-text",
      name: "body",
      label: "body",
      description: "This is the markdown body",
      isBody: true,
    },
    /*{
      type: "string",
      name: "category",
      label: "category",
    },*/
    {
      type: "string",
      name: "custom_js",
      label: "custom_js",
      list: true,
    },
    {
      type: "boolean",
      name: "mathjax",
      label: "mathjax",
    },
  ] as TinaField[];
}
