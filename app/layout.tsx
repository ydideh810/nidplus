"use client";

// Import statements
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { useEffect, useState } from "react";


// Content Security Policy header
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    worker-src 'self';
    connect-src 'self' blob: data: https: http:;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;



// Main component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
const [showPopup, setShowPopup] = useState(true);

 useEffect(() => {
    const intervalId = setInterval(() => {
      setShowPopup(true);
    }, 1800000); // Show popup every hour

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

      const handleClose = () => {
    setShowPopup(false);

  };
    
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content={cspHeader.replace(/\n/g, "")}
        />
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/two.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/two.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/two.ico"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#062578" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </head>
        
        
      <body>
      
        {children}
      </body>
    </html>
  );
}
