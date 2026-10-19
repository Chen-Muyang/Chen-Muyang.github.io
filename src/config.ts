import type { ExpressiveCodeConfig, LicenseConfig, NavBarConfig, ProfileConfig, SiteConfig } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "Chen Site",
  subtitle: "Physics, notes & life",
  lang: "en",
  themeColor: { hue: 165, fixed: false },
  banner: {
    enable: true,
    src: "assets/images/banner.jpg", // Replace src/assets/images/banner.jpg with your own landscape.
    position: "center",
    credit: { enable: false, text: "", url: "" },
  },
  toc: { enable: true, depth: 3 },
  favicon: [{ src: "/favicon.svg" }],
};
export const navBarConfig: NavBarConfig = {
  links: [
    { name: "About", url: "/about/" },
    { name: "Publications", url: "/publications/" },
    { name: "Notes", url: "/teaching/" },
    { name: "Blog Posts", url: "/year-archive/" },
    { name: "CV", url: "/cv/" },
  ],
};
export const profileConfig: ProfileConfig = {
  avatar: "assets/images/avatar.png", // Replace this square image to change your profile picture.
  name: "Mu-Yang Chen · 陈沐阳",
  bio: "Physics PhD student at Penn State. Exploring correlated quantum matter, and sharing notes along the way.",
  links: [{ name: "GitHub", icon: "fa6-brands:github", url: "https://github.com/Chen-Muyang" }],
};
// Do not apply the upstream demo's Creative Commons license to existing personal writing.
export const licenseConfig: LicenseConfig = { enable: false, name: "", url: "" };
export const expressiveCodeConfig: ExpressiveCodeConfig = { theme: "github-dark" };
