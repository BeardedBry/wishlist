/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        esmExternals: "loose",
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: '*',
            port: '',
            pathname: '/**',
          },
        ],
      },
    webpack: (config) => {
        // use node loader
        config.module.rules.push({
            test: /\.node$/,
            use: "node-loader",
        });
        
        //   config.externals = [...config.externals, { canvas: "canvas" }];  // required to make Konva & react-konva work
        return config;
    },
}

module.exports = nextConfig
