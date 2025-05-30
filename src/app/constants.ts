export const siteConfig = {
  name: "Navi",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:4000",
  description:
    "Eliza is a powerful multi-agent simulation framework designed to create, deploy, and manage autonomous AI agents.",
  ogImage: "/og.png",
  creator: "Eliza Labs",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon.ico",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon.ico",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};
