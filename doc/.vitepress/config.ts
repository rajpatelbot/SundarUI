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
          {
            text: "Form Elements",
            collapsed: true,
            items: [
              {
                text: "Inputs",
                collapsed: true,
                base: "/components/form-elements/inputs",
                items: [
                  { text: "Basic Inputs", link: "/basic-inputs" },
                  { text: "Icons Inputs", link: "/icons-inputs" },
                ],
              },
              {
                text: "Buttons",
                collapsed: true,
                base: "/components/form-elements/buttons",
                items: [
                  { text: "Text Buttons", link: "/text-buttons" },
                  { text: "Outlined Buttons", link: "/outlined-buttons" },
                  { text: "Contained Buttons", link: "/contained-buttons" },
                  { text: "Icons Buttons", link: "/icons-buttons" },
                ],
              },
              {
                text: "Forms",
                collapsed: true,
                base: "/components/form-elements/forms",
                items: [{ text: "Login Form", link: "/login-form" }],
              },
            ],
          },
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
      pattern: "https://github.com/rajpatelbot/SundarUI/edit/master/doc/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message:
        "Crafted in India by <a href='https://github.com/rajpatelbot' target='_blank'>Raj Patel</a>",
      copyright: "Powered by VitePress",
    },
  },
});
