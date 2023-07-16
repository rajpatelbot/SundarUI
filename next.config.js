const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [], rehypePlugins: [] },
});

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  reactStrictMode: true,
  eslint: { dirs: ["src"] },
};

module.exports = withMDX(nextConfig);
