"use client";
import { useEffect } from "react";
import "./globals.css";
import "photoswipe/dist/photoswipe.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Manrope:wght@400;500;700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
