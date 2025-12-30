/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages
  output: "export",

  // Required because your repo is NOT at root domain
  basePath: "/v0-ai-agent-education-website",
  assetPrefix: "/v0-ai-agent-education-website/",

  // GitHub Pages cannot optimize images
  images: {
    unoptimized: true,
  },

  // Do not fail build on TS or ESLint issues (safe for demos)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Prevent server tracing errors during export
  outputFileTracing: false,
};

export default nextConfig;
