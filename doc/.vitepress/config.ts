import { defineConfig, type DefaultTheme } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "SundarUI",
  description: "Discover a vast library of open-source Tailwind CSS components",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/components/alerts/simple-alerts.html" },
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          { base: "/getting-started", text: "Overview", link: "/overview" },
        ],
      },
      {
        text: "Components",
        collapsed: false,
        base: "/components",
        items: [
          {
            text: "Alerts",
            collapsed: true,
            base: "/components/alerts",
            items: [
              { text: "Simple Alerts", link: "/simple-alerts" },
              { text: "Icons Alerts", link: "/icons-alerts" },
              { text: "Descriptive Alerts", link: "/descriptive-alerts" },
            ],
          },
          { text: "Buttons", link: "/buttons" },
          { text: "Profiles", link: "/profiles" },
        ],
      },
      { text: "Contribution Guide", link: "/contribution-guide" },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/rajpatelbot/SundarUI",
      },
    ],

    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message:
        "Crafted in India by <a href='https://github.com/rajpatelbot' target='_blank'>Raj Patel</a>",
      copyright: "Powered by VitePress",
    },
  },
});
