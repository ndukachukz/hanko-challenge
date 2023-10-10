import "./env.mjs";

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  images: {
    domains: ["upcdn.io", "replicate.delivery", "pbxt.replicate.delivery"],
  },
};
