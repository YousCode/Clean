/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Important for static export compatibility
    images: {
      unoptimized: true, // Disable Next.js image optimization when exporting statically
    },
  };
  
  export default nextConfig;