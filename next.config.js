/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const env = {
  AIRTABLE_BASE_ID: "appIX8WfHfdPlfr4h",
  AIRTABLE_API_KEY: "keyvNmfcrVRDbV8ob",
  NEXT_PUBLIC_API_ENDPOINT: "http://localhost:3000"
}

module.exports = {
  nextConfig,
  env
}
