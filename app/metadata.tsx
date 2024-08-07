import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Niddam_AI",
  description: "Your ultimate private assistant.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#9FA2B8" },
  ],
  appleWebApp: {
    title: "Niddam_AI",
    statusBarStyle: "default",
  },
};
