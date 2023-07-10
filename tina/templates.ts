import type { TinaField } from "tinacms";
export function archetypeFields() {
  return [
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      description: "This is the markdown body",
      isBody: true,
    },
    {
      type: "string",
      name: "category",
      label: "category",
    },
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
