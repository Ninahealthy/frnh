"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function ReloadScript(scriptSrc) {
  const router = useRouter();

  useEffect(() => {
    // Remove any existing script with the same source
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // Create a new script element and append it to the head
    const newScript = document.createElement("script");
    newScript.async = true; // Ensure async loading
    newScript.src = scriptSrc;
    newScript.crossOrigin = "anonymous";
    document.head.appendChild(newScript);

    // Cleanup function to remove the script when unmounting
    return () => {
      newScript.remove();
    };
  }, [router.asPath, scriptSrc]); // Re-run the effect when the route changes
}

export default function AdsLoad() {
  const scriptSrc =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087636695455778"; // Replace with your actual script URL

  ReloadScript(scriptSrc);
}
