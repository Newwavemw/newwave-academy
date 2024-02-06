import Unocss from "unocss/vite";
import { defineConfig, HeadConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import { version } from "../../package.json";
import { withPwa } from "@vite-pwa/vitepress";

export default withPwa(
  defineConfig({
    base: "/",
    lang: "en",
    title: "Nchito Za Manja Anga",
    description:
      "Creating more ways to discover and learn about the music industry.",
    lastUpdated: true,
    cleanUrls: true,
    locales: {
      root: {
        label: "English",
        lang: "en",
        link: "/en/guide/",
      },
    },
    sitemap: {
      hostname: "https://learn.newwave.mw",
      transformItems(items) {
        return items.filter((item) => !item.url.includes("migration"));
      },
    },
    /* prettier-ignore */
    head: [
      ["script", { src: "/_vercel/insights/script.js", defer: true }],
      ["script", { src: "https://analytics.newwave.mw/pulse.js", "data-website-id": "85d96ff6-4166-4873-9402-b1fc646c3683" }],
      ["meta", { name: "theme-color", content: "#2e2e2e" }],
      [
        "link",
        {
          rel: "icon",
          href: "assets/favicons/favicon.png",
          type: "image/svg+xml",
        },
      ],
      ["link", { rel: "alternate icon", href: "assets/favicons/favicon.png" }],
      [
        "link",
        {
          rel: "mask-icon",
          href: "assets/favicons/favicon.svg",
          color: "#ffffff",
        },
      ],
      [
        "meta",
        {
          name: "keywords",
          content: "PWA, VitePress, workbox, Vite, Newwave",
        },
      ],
      [
        "link",
        {
          rel: "apple-touch-icon",
          href: "/assets/favicons/favicon_192x192.png",
          sizes: "192x192",
        },
      ],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'Newwave Academy' }],
    ['meta', { name: 'og:image', content: 'https://d1fdloi71mui9q.cloudfront.net/STekRQnxTZKZCl1qjepd_a12gwhyXPL5X77os' }]
    ],
    pwa: {
      mode: "development",
      base: "/",
      scope: "/",
      includeAssets: ["/assets/favicons/favicon.svg"],
      manifest: {
        name: "Newwave NZMA",
        short_name: "Newwave NZMA",
        theme_color: "#1b1b1b",
        icons: [
          {
            src: "/assets/favicons/favicon_192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/favicons/favicon_512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/favicons/favicon_512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    },
    workbox: {
      globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"],
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: "/",
    },
    markdown: {
      headers: {
        level: [0, 0],
      },
    },
    themeConfig: {
      // logo: "/assets/favicons/favicon.png",
      footer: {
        message: ``,
        copyright: `Copyright © 2023 Newwave Group, All rights reserved. v${version}`,
      },
      search: {
        provider: "local",
      },
      socialLinks: [
        { icon: "facebook", link: "https://facebook.com/newwavemw" },
        { icon: "instagram", link: "https://instagram.com/newwavemw" },
        {
          icon: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0 0 29.78 111L32 480l118.25-30.87a223.63 223.63 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1ZM256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4l-70.17 18.32l18.73-68.09l-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52Zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78s-14.4 18-17.65 21.75s-6.5 4.16-12.07 1.38s-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26s.93-6.94-.46-9.71s-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52c-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38s39.3 59.73 95.21 83.76a323.11 323.11 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2c10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37s-5.11-3.71-10.69-6.48Z"/></svg>',
          },
          link: "https://wa.me/265883188207",
        },
      ],
      nav: nav(),
      sidebar: generateSidebar([
        {
          documentRootPath: "/docs",
          scanStartPath: "en/guide",
          resolvePath: "/en/guide/",
          // rootGroupText: 'Contents',
          // rootGroupLink: 'https://github.com/jooy2',
          // rootGroupCollapsed: false,
          useTitleFromFileHeading: true,
          capitalizeFirst: true,
          capitalizeEachWords: true,
          // useTitleFromFrontmatter: true,
          hyphenToSpace: true,
          underscoreToSpace: true,
          collapsed: false,
          collapseDepth: 2,
          // sortByFileName: ['first.md', 'second', 'third.md'],
          // excludeFiles: ['first.md', 'secret.md'],
          // excludeFolders: ["en","nya","tum"],
          // includeDotFiles: false,
          // includeRootIndexFile: false,
          // includeFolderIndexFile: true,
          // includeEmptyFolder: false,
          // convertSameNameSubFileToGroupIndexPage: false,
          useFolderTitleFromIndexFile: true,
          // folderLinkNotIncludesFileName: false
        },
        {
          documentRootPath: "/docs",
          scanStartPath: "nya-MW/guide",
          resolvePath: "/nya-MW/guide/",
          // rootGroupText: 'Contents',
          // rootGroupLink: 'https://github.com/jooy2',
          // rootGroupCollapsed: false,
          useTitleFromFileHeading: true,
          capitalizeFirst: true,
          capitalizeEachWords: true,
          // useTitleFromFrontmatter: true,
          hyphenToSpace: true,
          underscoreToSpace: true,
          collapsed: false,
          collapseDepth: 2,
          // sortByFileName: ['first.md', 'second', 'third.md'],
          // excludeFiles: ['first.md', 'secret.md'],
          // excludeFolders: ["en","nya","tum"],
          // includeDotFiles: false,
          // includeRootIndexFile: false,
          // includeFolderIndexFile: true,
          // includeEmptyFolder: false,
          // convertSameNameSubFileToGroupIndexPage: false,
          useFolderTitleFromIndexFile: true,
          // folderLinkNotIncludesFileName: false
        },
      ]),
    },
    vite: {
      plugins: [
        Unocss({
          configFile: "/uno.config.ts",
        }),
      ],
    },
    transformHead: ({ pageData }) => {
      const head: HeadConfig[] = [];

      head.push([
        "meta",
        { property: "og:title", content: pageData.frontmatter.title },
      ]);
      head.push([
        "meta",
        {
          property: "og:description",
          content: pageData.frontmatter.description,
        },
      ]);

      return head;
    },
  })
);

function nav() {
  return [
    { text: "Home", link: "/", activeMatch: "/" },
    {
      text: "Newwave",
      items: [
        { text: "Newwave HQ", link: "https://newwave.mw/" },
        { text: "Partners", link: "https://newwave.mw/partners" },
      ],
    },
  ];
}
