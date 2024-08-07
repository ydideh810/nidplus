"use client";

// Import statements
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { useState, useEffect } from "react";
import { metadata } from './metadata'
import { Metadata } from 'next';
// Metadata export


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
    // Optionally, you can use localStorage to manage the popup visibility
    // Example: Check if the popup has been shown before
    const hasShownPopup = localStorage.getItem('hasShownPopup');
    if (hasShownPopup) {
      setShowPopup(false);
    } else {
      localStorage.setItem('hasShownPopup', 'true');
    }
  }, []);

  const handleClosePopup = () => {
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
         
      {showPopup && (
        <popup
          className="fixed w-screen h-screen bg-black bg-opacity-50 inset-0 flex justify-center items-center z-50"
        >
          <article className="content-container bg-white p-8 overflow-y-scroll max-h-screen">
            <h4 className="mb-4">Welcome to CosmoSpeak</h4>

            <p className="mb-8">
              Explore the wonders of Space Engineering through A.I.
            </p>

            <ol className="list-decimal mx-6 pl-2 mb-8">
              <li>Get started w/ a free trial!</li>  
              
            </ol>
          
            <button
  className="p-3 px-6 bg-black text-red-700"
  onClick={() => {
    window.location.href = 'https://square.link/u/RmVSmy9L';
    return false;
  }}
>
  Start Today
</button>

          </article>
        </popup>
      )} 
      
        {children}
      </body>
    </html>
  );
}
