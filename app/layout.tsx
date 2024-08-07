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
               {showPopup && (
    <div className="popup-overlay">
      <div className="popup-content">
        <h4 className="popup-title">Welcome to CosmoSpeak</h4>
        <p className="popup-message">
          Explore the wonders of Space Engineering through A.I.
        </p>
        <button
          className="popup-button"
          onClick={() => {
            window.location.href = 'https://square.link/u/RmVSmy9L';
          }}
        >
          Start for Free
        </button>
      </div>
    </div>
  )} 
      
      <body>
  
        {children}
      </body>
    </html>
  );
}
