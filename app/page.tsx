import { Home } from "./components/home";
import { useState } from "react";

export default async function App() {
  const [showDialog, setShowDialog] = useState(true);
   
  return <Home />;
   {showDialog && (
          <dialog
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
          </dialog>
        )}
}
