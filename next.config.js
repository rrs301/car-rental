/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images:{
        unoptimized: true,
        domains:['media.graphassets.com']
    }
}

module.exports = nextConfig
