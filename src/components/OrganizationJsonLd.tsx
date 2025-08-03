
import Head from "next/head";

export default function OrganizationJsonLd() {
    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Aso Realty Limited",
                        url: "https://www.asorealty.com",
                        logo: "https://www.asorealty.com/asologo.png",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "C1, Amaka Mall, 9 San Zangon Daura Street",
                            addressArea: "Guzape",
                            addressLocality: "Abuja",
                            addressRegion: "FCT",
                            postalCode: "900211",
                            addressCountry: "NG",
                        },
                        email: "asorealtylimted@gmail.com",
                        telephone: "+2348037616518",
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+2348037616518",
                            contactType: "customer support",
                            email: "asorealtylimted@gmail.com"
                        },
                        sameAs: [
                            "https://www.facebook.com/asorealty",
                            "https://twitter.com/asorealty"
                        ]
                    })
                }}
            />
        </Head>
    );
}
