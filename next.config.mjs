/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:'pub-b956116be36647e6859e9df01597e18a.r2.dev',
                protocol:'https',
                port:"",
            },
            {
            hostname:"lh3.googleusercontent.com",
            protocol:"https",
            port:"",
            },
        ]
    }
};

export default nextConfig;
