export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Nunito+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MoovAfrik",
              telephone: "+241076567587",
              address: {
                addressLocality: "Libreville",
                addressCountry: "GA",
              },
              url: "https://www.moovafrik.com",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
