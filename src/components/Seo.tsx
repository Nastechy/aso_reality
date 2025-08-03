
import Head from "next/head";

interface SeoProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    children?: React.ReactNode;
}

function getAbsoluteUrl(path: string) {
    if (!path) return "https://www.asorealty.com/asologo.png"; 
    if (path.startsWith("http")) return path;
    return `https://www.asorealty.com${path}`;
}

export default function Seo({
    title = "Aso Realty - Trusted Real Estate in Nigeria",
    description = "Find your dream home or investment with Aso Realty. We offer verified listings, expert agents, and secure transactions.",
    image = "/asologo.png",
    url = "https://www.asorealty.com",
    children,
}: SeoProps) {
    const absImage = getAbsoluteUrl(image);

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:description" content={description} key="ogdesc" />
            <meta property="og:image" content={absImage} key="ogimage" />
            <meta property="og:url" content={url} key="ogurl" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absImage} />

            {/* Canonical */}
            <link rel="canonical" href={url} />

            {/* Favicon - move to _document if you use on every page */}
            {/* <link rel="icon" href="/favicon.ico" /> */}

            {children}
        </Head>
    );
}
