import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage,
  jsonLd,
}) => {
  const siteUrl = "https://unificando.com.br"; // Should ideally be in env
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullImage = ogImage
    ? `${siteUrl}${ogImage}`
    : `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Visual */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Social / Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      <script type="application/ld+json">
        {JSON.stringify(
          jsonLd || {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Unificando",
            url: "https://unificando.com.br",
            logo: "https://unificando.com.br/logo.png",
            description:
              "Ecossistema de organização e automação de atendimento para WhatsApp e Instagram.",
          },
        )}
      </script>
    </Helmet>
  );
};
