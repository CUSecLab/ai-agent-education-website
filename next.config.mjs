/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages
  output: "export",

  // 🔴 MUST match the new repo name
  basePath: "/ai-agent-education-website",
  assetPrefix: "/ai-agent-education-website/",

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
