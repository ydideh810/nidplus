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
const [showPopup, setShowPopup] = useState(false);

 useEffect(() => {
    setShowPopup(true);
  }, []);
    
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
            <h2>Welcome to Our Site!</h2>
            <p>Explore our latest features and updates.</p>
            <button onClick={() => window.location.href = 'https://example.com'}>
              Learn More
            </button>
           
          </div>
          <style jsx>{`
            .popup-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.5);
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 1000;
            }
            .popup-content {
              background: white;
              padding: 20px;
              border-radius: 8px;
              text-align: center;
              max-width: 500px;
              width: 100%;
            }
            .popup-content h2 {
              margin: 0 0 10px;
            }
            .popup-content p {
              margin: 0 0 20px;
            }
            .popup-content button {
              margin: 0 10px;
              padding: 10px 20px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            }
            .popup-content button:first-of-type {
              background-color: #007bff;
              color: white;
            }
            .popup-content button:last-of-type {
              background-color: #6c757d;
              color: white;
            }
          `}</style>
        </div>
      )}
        
      <body>
      
        {children}
      </body>
    </html>
  );
}
