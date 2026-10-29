import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export statique : Cloudflare Pages sert le dossier `out/`
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
