// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MintGarden",
  url: "https://docs.mintgarden.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/mint-logo.svg",
  organizationName: "mintgarden-io", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/mintgarden-io/docs/tree/main/",
        },
        blog: false,
        // blog: {
        //   blogTitle: "Blog",
        //   routeBasePath: "/blog",
        //   showReadingTime: true,
        //   editUrl: "https://github.com/mintgarden.-io/docs/tree/main/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "MintGarden Logo",
          src: "img/mintgarden-logo.svg",
          srcDark: "img/mintgarden-logo-white-text.svg",
        },
        items: [
          {
            type: "doc",
            docId: "faq",
            position: "left",
            label: "Documentation",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://mintgarden.io",
            label: "mintgarden.io",
          },
          {
            href: "https://discord.gg/FJt6ZRYyyS",
            label: "Discord",
            position: "right",
          },
          {
            href: "https://github.com/mintgarden-io/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Docs",
        //     items: [
        //       {
        //         label: "FAQ",
        //         to: "/docs/faq",
        //       },
        //       {
        //         label: "Tutorial",
        //         to: "/docs/Tutorials",
        //       },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/facebook/docusaurus",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} MintGarden`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
