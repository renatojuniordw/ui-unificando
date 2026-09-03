import React from "react";
import { Helmet } from "react-helmet-async";
import { SEOProps } from "../../types/ui";

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage,
  jsonLd,
  robots,
  keywords,
}) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || "https://unificando.com.br";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullImage = ogImage
    ? `${siteUrl}${ogImage}`
    : `${siteUrl}/og-image.svg`;

  const defaultKeywords = "Unificando, laboratório digital, projetos autorais, IA aplicada, ferramentas utilitárias, produtos digitais, P&D, inteligência artificial, desenvolvimento de produto, Recife";

  return (
    <Helmet>
      {/* Visual */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={fullCanonical} />
      {robots ? <meta name="robots" content={robots} /> : <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />}

      {/* AI Crawlers */}
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="chatgpt" content="all" />
      <meta name="ai-crawler" content="all" />
      <link rel="llms" href="/llms.txt" title="AI Discovery" type="text/plain" />

      {/* Social / Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Unificando Digital" />
      <meta property="og:locale" content="pt_BR" />

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
            logo: "https://unificando.com.br/assets/img/LOGO_UNIFICANDO.svg",
            description:
              "Laboratório de projetos autorais, ferramentas utilitárias e soluções com inteligência artificial.",
          },
        )}
      </script>
    </Helmet>
  );
};
