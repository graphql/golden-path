import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "GraphQL Golden Path",
  tagline: "Opinionated defaults for GraphQL tooling, clients, and servers",
  favicon: "img/graphql-logo.svg",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://goldenpath.graphql.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "benjaie",
  projectName: "golden-path",
  deploymentBranch: "gh-pages",
  trailingSlash: true,

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: "wip-banner",
      content:
        "Work in progress and not official. Guidance may be incomplete or incorrect.",
      backgroundColor: "#f6c453",
      textColor: "#1c1c1c",
      isCloseable: false,
    },
    // Replace with your project's social card
    image: "img/graphql-logo.svg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "GraphQL Golden Path",
      logo: {
        alt: "GraphQL logo",
        src: "img/graphql-logo.svg",
      },
      items: [
        { to: "/roles", label: "Roles", position: "left" },
        { to: "/practices", label: "Practices", position: "left" },
        { to: "/solutions", label: "Solutions", position: "left" },
        { to: "/problems", label: "Problems", position: "left" },
        {
          href: "https://github.com/benjaie/golden-path",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Roles",
              to: "/roles",
            },
            {
              label: "Practices",
              to: "/practices",
            },
            {
              label: "Solutions",
              to: "/solutions",
            },
            {
              label: "Problems",
              to: "/problems",
            },
            {
              label: "Overview",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GraphQL",
              href: "https://graphql.org",
            },
            {
              label: "GraphQL WG",
              href: "https://github.com/graphql",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Solutions",
              to: "/solutions",
            },
          ],
        },
      ],
      copyright: "Copyright GraphQL Contributors",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
