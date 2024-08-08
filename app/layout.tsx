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
    }, 10000); // Show popup every 10 seconds

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
         {showPopup && (
        <div className="popup-overlay bg-dark">
          <div className="popup-content">
            <h2 className="mb-4 text-3xl text-center p-10 text-red-700">Welcome to Niddam.Pro</h2>
            <p className="mb-8 text-3xl text-center p-10 text-red-700">The Ultimate Private AI Experience Awaits!</p>
            <button onClick={() => window.location.href = 'https://square.link/u/8kZxvCEH'}>
              Start Free
            </button>
            <button onClick={handleClose}>
              Close
            </button>
          </div>
          <style jsx>{`
            .popup-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              rgba(0, 0, 0, 0.5);
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 1000;
            }
            .popup-content {
              background: black;
              padding: 20px;
              border-radius: 8px;
              box-shadow: rgba(132, 0, 0, 0.8) 0px 30px 60px -12px inset, rgba(255, 127, 127, 0.8) 0px 18px 36px -18px inset;
              text-align: center;
              max-width: 500px;
              width: 100%;
            }
            .popup-content h2 {
              margin: 0 0 10px;
              color: #4C0000;
            }
            .popup-content p {
              margin: 0 0 20px;
              color: #4C0000;
            }
            .popup-content button {
              margin: 0 10px;
              padding: 10px 20px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            }
            .popup-content button:first-of-type {
              background-color: color: #4C0000;
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
