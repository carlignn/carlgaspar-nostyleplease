import { defineConfig } from "tinacms";
import { archetypeFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "02f35d0d-e80b-4b50-9c3d-8144b3d62851", // Get this from tina.io
  token: "78195b71a12e1e579836c4a05021db8a85f3c009", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "About",
        name: "about",
        path: "content/about",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "carldss.com",
        name: "carldsscom",
        path: "content/carldsscom",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: false,
            // Example of using a custom slugify function
            slugify: values => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.title ? values.title.toLowerCase().replace(/ /g, '-') : 'no-title'}`
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "title",
          },
          ...archetypeFields(),
        ],
      },
      {
        format: "md",
        label: "Homelab",
        name: "Homelab",
        path: "content/homelab",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: false,
            // Example of using a custom slugify function
            slugify: values => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.title ? values.title.toLowerCase().replace(/ /g, '-') : 'no-title'}`
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "title",
          },
          ...archetypeFields(),
        ],
      },
      {
        format: "md",
        label: "Now",
        name: "now",
        path: "content/now",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: false,
            // Example of using a custom slugify function
            slugify: values => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.title ? values.title.toLowerCase().replace(/ /g, '-') : 'no-title'}`
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "title",
          },
          ...archetypeFields(),
        ],
      },
      {
        format: "md",
        label: "Portfolio",
        name: "portfolio",
        path: "content/portfolio",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Posts",
        name: "posts",
        path: "content/posts",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: false,
            // Example of using a custom slugify function
            slugify: values => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.title ? values.title.toLowerCase().replace(/ /g, '-') : 'no-title'}`
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "title",
          },
          ...archetypeFields(),
        ],
      },
      {
        format: "md",
        label: "Projects",
        name: "projects",
        path: "content/projects",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: false,
            // Example of using a custom slugify function
            slugify: values => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.title ? values.title.toLowerCase().replace(/ /g, '-') : 'no-title'}`
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "title",
          },
          ...archetypeFields(),
        ],
      },
      {
        format: "md",
        label: "Security",
        name: "security",
        path: "content/security",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: false,
            // Example of using a custom slugify function
            slugify: values => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.title ? values.title.toLowerCase().replace(/ /g, '-') : 'no-title'}`
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "title",
          },
          ...archetypeFields(),
        ],
      },
      {
        format: "md",
        label: "Socials",
        name: "socials",
        path: "content/socials",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },   
    ],
  },
  search: {
    tina: {
      indexerToken: '6957ac1ae7761cf128ec29cf3beea6c0fe5e7309',
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
});
