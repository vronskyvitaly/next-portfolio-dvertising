import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Лендинг для рекламного трафика — в основном новые посетители, поэтому
  // встроенный CSS выгоднее отдельного блокирующего файла
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
