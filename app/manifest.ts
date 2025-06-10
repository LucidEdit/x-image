import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lucid - Beautiful Text Images",
    short_name: "Lucid",
    description: "Create beautiful text images with Lucid",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#000000",
    icons: [
      {
        src: "/logos/pwa/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logos/pwa/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
